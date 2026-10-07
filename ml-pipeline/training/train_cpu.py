"""
train_cpu.py — Fine-tune with standard PEFT / QLoRA (CPU-safe fallback)
-----------------------------------------------------------------------
Works without a GPU (just slower). Uses 8-bit or float32 depending on
what's available. Good for quick iteration or if you have no CUDA GPU.

For proper GPU training with 2x speed, use train_lora.py instead.

Run:
    python training/train_cpu.py [--data output/training_data.jsonl]
                                  [--out  output/adaptlearn-lora-cpu]
                                  [--epochs 1]
"""

import argparse
import json
import sys
from pathlib import Path

ML_ROOT = Path(__file__).resolve().parent.parent

BASE_MODEL   = "Qwen/Qwen2.5-1.5B-Instruct"   # smaller model for CPU
MAX_SEQ_LEN  = 1024
LORA_RANK    = 8
LORA_ALPHA   = 16
LORA_DROPOUT = 0.05

SYSTEM_PROMPT = (
    "You are AdaptLearn, a VTU exam tutor. "
    "Answer with structured JSON: sections (definition/explanation/diagram/example/conclusion). "
    "Output ONLY the JSON object."
)


def pair_to_text(qa: dict, tokenizer) -> str:
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {
            "role": "user",
            "content": (
                f"[{qa['subject_code']} Module {qa['module']} — {qa['marks']} marks]\n"
                f"{qa['question']}"
            ),
        },
        {
            "role": "assistant",
            "content": json.dumps(
                {k: qa[k] for k in ("question","subject_code","module","marks","co_reference","sections")},
                ensure_ascii=False,
            ),
        },
    ]
    return tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=False)


def load_records(path: Path) -> list[dict]:
    records = []
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            records.append(json.loads(line))
        except Exception:
            pass
    print(f"Loaded {len(records)} pairs")
    return records


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--data",   type=Path, default=ML_ROOT / "output" / "training_data.jsonl")
    parser.add_argument("--out",    type=Path, default=ML_ROOT / "output" / "adaptlearn-lora-cpu")
    parser.add_argument("--epochs", type=int,  default=1)
    parser.add_argument("--batch",  type=int,  default=1)
    parser.add_argument("--lr",     type=float, default=2e-4)
    args = parser.parse_args()

    if not args.data.exists():
        print(f"Training data not found: {args.data}")
        print("Run: python data_gen/generate_dataset.py")
        sys.exit(1)

    try:
        import torch
        from transformers import AutoTokenizer, AutoModelForCausalLM, TrainingArguments
        from peft import LoraConfig, get_peft_model, TaskType
        from trl import SFTTrainer
        from datasets import Dataset
    except ImportError as e:
        print(f"Missing dependency: {e}")
        print("Run: pip install -r training/requirements.txt")
        sys.exit(1)

    print(f"Loading tokenizer: {BASE_MODEL}")
    tokenizer = AutoTokenizer.from_pretrained(BASE_MODEL, trust_remote_code=True)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    print(f"Loading model: {BASE_MODEL}  (this may take a few minutes on CPU)")
    model = AutoModelForCausalLM.from_pretrained(
        BASE_MODEL,
        torch_dtype  = torch.float32,
        trust_remote_code = True,
        low_cpu_mem_usage = True,
    )

    lora_config = LoraConfig(
        task_type    = TaskType.CAUSAL_LM,
        r            = LORA_RANK,
        lora_alpha   = LORA_ALPHA,
        lora_dropout = LORA_DROPOUT,
        target_modules = ["q_proj", "v_proj"],   # minimal targets for CPU speed
        bias         = "none",
    )
    model = get_peft_model(model, lora_config)
    model.print_trainable_parameters()

    records = load_records(args.data)
    texts   = [pair_to_text(r, tokenizer) for r in records]
    dataset = Dataset.from_dict({"text": texts})
    split   = dataset.train_test_split(test_size=0.05, seed=42)

    trainer = SFTTrainer(
        model     = model,
        tokenizer = tokenizer,
        train_dataset = split["train"],
        eval_dataset  = split["test"],
        dataset_text_field = "text",
        max_seq_length     = MAX_SEQ_LEN,
        args = TrainingArguments(
            per_device_train_batch_size = args.batch,
            gradient_accumulation_steps = 8,
            num_train_epochs            = args.epochs,
            learning_rate               = args.lr,
            fp16   = False,
            bf16   = False,
            no_cuda = not torch.cuda.is_available(),
            logging_steps  = 5,
            eval_strategy  = "epoch",
            save_strategy  = "epoch",
            output_dir     = str(args.out),
            weight_decay   = 0.01,
            report_to      = "none",
            dataloader_num_workers = 0,  # 0 = main process, avoids Windows multiprocessing issues
        ),
    )

    print("Starting CPU training (this will be slow — consider GPU or Colab)…")
    trainer.train()

    lora_out = args.out / "lora_adapter"
    model.save_pretrained(str(lora_out))
    tokenizer.save_pretrained(str(lora_out))
    print(f"\nLoRA adapter saved to: {lora_out}")


if __name__ == "__main__":
    main()
