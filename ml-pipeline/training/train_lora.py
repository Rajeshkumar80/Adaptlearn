"""
train_lora.py
=============
Fine-tune Qwen2.5-1.5B-Instruct on VTU AdaptLearn dataset using QLoRA.
NO datasets/pyarrow dependency — uses plain PyTorch Dataset.

Hardware target: RTX 4050 Laptop 6GB VRAM (QLoRA 4-bit fits fine).
Expected time: ~10-12 hours for 31,000 train pairs, 3 epochs.

Run:
    py -3.11 training/train_lora.py --data output/train.jsonl --val output/val.jsonl
    py -3.11 training/train_lora.py --data output/train.jsonl --epochs 2  (faster)
"""

import argparse, json, sys, random
from pathlib import Path

ML_ROOT  = Path(__file__).resolve().parent.parent
DATA_DEF = ML_ROOT / "output" / "train.jsonl"
VAL_DEF  = ML_ROOT / "output" / "val.jsonl"
OUT_DEF  = ML_ROOT / "output" / "adaptlearn-lora"
BASE_MODEL = "Qwen/Qwen2.5-1.5B-Instruct"

SYSTEM = (
    "You are AdaptLearn, a VTU exam tutor. "
    "Answer every question with a structured JSON object. "
    "Fields: question, subject_code, topic, module, related_topics, sections. "
    "Each section has type, heading, text, and optionally key_terms or diagram_tag. "
    "Section types: concept, detail, how_it_works, example, comparison, diagram_ref, conclusion. "
    "Output ONLY the JSON — no markdown fences, no extra text."
)


# ── helpers ───────────────────────────────────────────────────────────────────
def load_jsonl(path: Path) -> list:
    records = []
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():
        line = line.strip()
        if line:
            try:
                records.append(json.loads(line))
            except Exception:
                pass
    return records


def format_example(qa: dict, tokenizer) -> str | None:
    """Convert one QA pair to a chat-formatted training string."""
    subj  = qa.get("subject_code", "")
    mod   = qa.get("module", "")
    topic = qa.get("topic", qa.get("question", ""))
    user  = f"[{subj} Module {mod}]\n{qa.get('question', topic)}"

    # Build answer JSON
    answer_obj = {k: qa[k] for k in
                  ("question", "subject_code", "topic", "module",
                   "related_topics", "sections") if k in qa}
    answer = json.dumps(answer_obj, ensure_ascii=False)

    msgs = [
        {"role": "system",    "content": SYSTEM},
        {"role": "user",      "content": user},
        {"role": "assistant", "content": answer},
    ]
    try:
        return tokenizer.apply_chat_template(
            msgs, tokenize=False, add_generation_prompt=False
        )
    except Exception:
        return None


# ── Plain PyTorch Dataset (no pyarrow / HuggingFace datasets needed) ──────────
def make_torch_dataset(texts: list, tokenizer, max_len: int):
    """Returns a torch Dataset of tokenized examples."""
    try:
        import torch
        from torch.utils.data import Dataset as TorchDataset
    except ImportError:
        raise ImportError("torch not found — run: py -3.11 -m pip install torch")

    class TextDataset(TorchDataset):
        def __init__(self, texts, tokenizer, max_len):
            self.examples = []
            for text in texts:
                enc = tokenizer(
                    text,
                    truncation=True,
                    max_length=max_len,
                    padding=False,
                    return_tensors=None,
                )
                self.examples.append({
                    "input_ids":      enc["input_ids"],
                    "attention_mask": enc["attention_mask"],
                    "labels":         enc["input_ids"][:],
                })

        def __len__(self):
            return len(self.examples)

        def __getitem__(self, idx):
            item = self.examples[idx]
            return {k: torch.tensor(v, dtype=torch.long) for k, v in item.items()}

    return TextDataset(texts, tokenizer, max_len)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--data",   type=Path, default=DATA_DEF)
    ap.add_argument("--val",    type=Path, default=VAL_DEF)
    ap.add_argument("--out",    type=Path, default=OUT_DEF)
    ap.add_argument("--base",   default=BASE_MODEL)
    ap.add_argument("--epochs", type=int,   default=3)
    ap.add_argument("--batch",  type=int,   default=2)
    ap.add_argument("--rank",   type=int,   default=16)
    ap.add_argument("--lr",     type=float, default=2e-4)
    ap.add_argument("--maxlen", type=int,   default=768)
    ap.add_argument("--max-samples", type=int, default=None,
                    help="Limit train samples (e.g. 10000 for faster test run)")
    args = ap.parse_args()

    # ── Load data ─────────────────────────────────────────────────────────────
    if not args.data.exists():
        fallback = ML_ROOT / "output" / "training_data_combined.jsonl"
        if fallback.exists():
            print(f"Using fallback: {fallback.name}")
            args.data = fallback
        else:
            print(f"ERROR: No training data at {args.data}")
            print("Run: python scripts/build_balanced_dataset.py --step 2")
            sys.exit(1)

    print(f"Loading {args.data.name}...")
    records = load_jsonl(args.data)
    print(f"  Loaded: {len(records)} records")

    if args.max_samples and args.max_samples < len(records):
        random.seed(42)
        random.shuffle(records)
        records = records[:args.max_samples]
        print(f"  Sampled: {len(records)} records (--max-samples)")

    if len(records) < 50:
        print(f"ERROR: Only {len(records)} records. Need at least 50."); sys.exit(1)

    val_records = []
    if args.val and args.val.exists():
        val_records = load_jsonl(args.val)
        print(f"  Val loaded: {len(val_records)} records")

    # ── Imports ───────────────────────────────────────────────────────────────
    try:
        import torch
        from transformers import (
            AutoTokenizer, AutoModelForCausalLM,
            TrainingArguments, BitsAndBytesConfig,
            DataCollatorForSeq2Seq,
        )
        from peft import LoraConfig, get_peft_model, TaskType, prepare_model_for_kbit_training
        from transformers import Trainer
    except ImportError as e:
        print(f"Missing dep: {e}")
        print("Run: py -3.11 -m pip install transformers peft accelerate bitsandbytes safetensors sentencepiece")
        sys.exit(1)

    use_cuda = torch.cuda.is_available()
    print(f"\nDevice : {'CUDA - ' + torch.cuda.get_device_name(0) if use_cuda else 'CPU'}")
    if use_cuda:
        vram = torch.cuda.get_device_properties(0).total_memory / 1e9
        print(f"VRAM   : {vram:.1f} GB")

    # ── Tokenizer ─────────────────────────────────────────────────────────────
    print(f"\nLoading tokenizer: {args.base}")
    print("  (downloads ~3 GB on first run — please wait...)")
    tokenizer = AutoTokenizer.from_pretrained(
        args.base, trust_remote_code=True, padding_side="right"
    )
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    # ── Format + tokenize ─────────────────────────────────────────────────────
    print("\nFormatting and tokenizing...")
    train_texts = [t for r in records if (t := format_example(r, tokenizer))]
    val_texts   = [t for r in val_records if (t := format_example(r, tokenizer))]
    print(f"  Train examples: {len(train_texts)}")
    print(f"  Val examples  : {len(val_texts)}")

    # If no external val, split 5% from train
    if not val_texts:
        split_idx  = max(1, int(len(train_texts) * 0.05))
        val_texts  = train_texts[:split_idx]
        train_texts = train_texts[split_idx:]
        print(f"  Auto-split: train={len(train_texts)}  val={len(val_texts)}")

    print("  Tokenizing (this may take a few minutes for large datasets)...")
    train_ds = make_torch_dataset(train_texts, tokenizer, args.maxlen)
    val_ds   = make_torch_dataset(val_texts,   tokenizer, args.maxlen)
    print(f"  Done. Train={len(train_ds)}  Val={len(val_ds)}")

    # ── Model ─────────────────────────────────────────────────────────────────
    print(f"\nLoading model: {args.base}")
    if use_cuda:
        bnb = BitsAndBytesConfig(
            load_in_4bit              = True,
            bnb_4bit_quant_type       = "nf4",
            bnb_4bit_compute_dtype    = torch.bfloat16,
            bnb_4bit_use_double_quant = True,
        )
        model = AutoModelForCausalLM.from_pretrained(
            args.base, quantization_config=bnb,
            device_map="auto", trust_remote_code=True,
        )
        model = prepare_model_for_kbit_training(model)
    else:
        model = AutoModelForCausalLM.from_pretrained(
            args.base, torch_dtype=torch.float32,
            trust_remote_code=True, low_cpu_mem_usage=True,
        )

    # ── LoRA ──────────────────────────────────────────────────────────────────
    lora = LoraConfig(
        task_type      = TaskType.CAUSAL_LM,
        r              = args.rank,
        lora_alpha     = args.rank * 2,
        lora_dropout   = 0.05,
        target_modules = ["q_proj","k_proj","v_proj","o_proj",
                          "gate_proj","up_proj","down_proj"],
        bias           = "none",
    )
    model = get_peft_model(model, lora)
    model.print_trainable_parameters()

    # ── Training args ─────────────────────────────────────────────────────────
    args.out.mkdir(parents=True, exist_ok=True)

    train_args = TrainingArguments(
        output_dir                  = str(args.out),
        num_train_epochs            = args.epochs,
        per_device_train_batch_size = args.batch,
        gradient_accumulation_steps = 4,
        learning_rate               = args.lr,
        warmup_ratio                = 0.05,
        weight_decay                = 0.01,
        lr_scheduler_type           = "cosine",
        bf16                        = use_cuda and torch.cuda.is_bf16_supported(),
        fp16                        = use_cuda and not torch.cuda.is_bf16_supported(),
        logging_steps               = 50,
        eval_strategy               = "epoch",
        save_strategy               = "epoch",
        load_best_model_at_end      = True,
        metric_for_best_model       = "eval_loss",
        save_total_limit            = 2,
        report_to                   = "none",
        dataloader_num_workers      = 0,
        no_cuda                     = not use_cuda,
        optim                       = "adamw_torch_fused" if use_cuda else "adamw_torch",
        remove_unused_columns       = False,
    )

    # Data collator — pads sequences to equal length in each batch
    collator = DataCollatorForSeq2Seq(
        tokenizer,
        model=model,
        label_pad_token_id=-100,
        pad_to_multiple_of=8,
        padding=True,
    )

    # ── Trainer ───────────────────────────────────────────────────────────────
    trainer = Trainer(
        model           = model,
        tokenizer       = tokenizer,
        train_dataset   = train_ds,
        eval_dataset    = val_ds,
        args            = train_args,
        data_collator   = collator,
    )

    est = int(len(train_ds) * args.epochs * 3 / 60)
    print(f"\n{'='*55}")
    print(f"  TRAINING START")
    print(f"  Train pairs  : {len(train_ds)}")
    print(f"  Val pairs    : {len(val_ds)}")
    print(f"  Epochs       : {args.epochs}")
    print(f"  LoRA rank    : {args.rank}")
    if use_cuda:
        print(f"  Estimated    : ~{est} min (~{round(est/60,1)} hrs) on RTX 4050")
    print(f"{'='*55}\n")

    trainer.train()

    # ── Save ──────────────────────────────────────────────────────────────────
    adapter = args.out / "lora_adapter"
    model.save_pretrained(str(adapter))
    tokenizer.save_pretrained(str(adapter))

    print(f"\n{'='*55}")
    print(f"  TRAINING COMPLETE")
    print(f"  Adapter saved: {adapter}")
    print(f"\n  Next: py -3.11 training/export_to_ollama.py")
    print(f"{'='*55}")


if __name__ == "__main__":
    main()
