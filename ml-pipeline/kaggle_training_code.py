# ==============================================================================
# AdaptLearn — Qwen2.5-1.5B QLoRA Fine-Tuning for Kaggle
# ==============================================================================
# In Kaggle Notebook Settings:
# 1. Accelerator -> GPU P100 (or GPU T4 x2)
# 2. Internet    -> Turn ON (required to download base model)
# ==============================================================================

# CELL 1: Install Dependencies
# ------------------------------------------------------------------------------
# !pip install -q -U transformers peft accelerate bitsandbytes

import os, json, glob, shutil
from pathlib import Path
import torch
from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    TrainingArguments,
    BitsAndBytesConfig,
    DataCollatorForSeq2Seq,
    Trainer
)
from peft import LoraConfig, get_peft_model, TaskType, prepare_model_for_kbit_training
from torch.utils.data import Dataset as TorchDataset

# CELL 2: Locate Dataset Files Automatically
# ------------------------------------------------------------------------------
train_files = glob.glob('/kaggle/input/**/train.jsonl', recursive=True)
val_files = glob.glob('/kaggle/input/**/val.jsonl', recursive=True)

if not train_files:
    raise FileNotFoundError("Could not find train.jsonl! Please upload your dataset to Kaggle.")

train_path = train_files[0]
val_path = val_files[0] if val_files else None
print(f"✓ Found Train Data: {train_path}")
print(f"✓ Found Val Data  : {val_path}")

# CELL 3: Data Formatting & Dataset Class
# ------------------------------------------------------------------------------
SYSTEM_PROMPT = (
    "You are AdaptLearn, a VTU exam tutor. "
    "Answer every question with a structured JSON object. "
    "Fields: question, subject_code, topic, module, related_topics, sections. "
    "Each section has type, heading, text, and optionally key_terms or diagram_tag. "
    "Section types: concept, detail, how_it_works, example, comparison, diagram_ref, conclusion. "
    "Output ONLY the JSON — no markdown fences, no extra text."
)

def load_jsonl(file_path):
    records = []
    with open(file_path, 'r', encoding='utf-8') as f:
        for line in f:
            if line.strip():
                try: records.append(json.loads(line))
                except: pass
    return records

class VTUDataset(TorchDataset):
    def __init__(self, records, tokenizer, max_len=768):
        self.examples = []
        for qa in records:
            subj  = qa.get("subject_code", "")
            mod   = qa.get("module", "")
            topic = qa.get("topic", qa.get("question", ""))
            user_msg  = f"[{subj} Module {mod}]\n{qa.get('question', topic)}"
            
            answer_obj = {k: qa[k] for k in ("question", "subject_code", "topic", "module", "related_topics", "sections") if k in qa}
            answer_json = json.dumps(answer_obj, ensure_ascii=False)
            
            msgs = [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_msg},
                {"role": "assistant", "content": answer_json}
            ]
            
            try:
                formatted_text = tokenizer.apply_chat_template(msgs, tokenize=False, add_generation_prompt=False)
                enc = tokenizer(formatted_text, truncation=True, max_length=max_len, padding=False)
                self.examples.append({
                    "input_ids": enc["input_ids"],
                    "attention_mask": enc["attention_mask"],
                    "labels": enc["input_ids"][:]
                })
            except:
                pass

    def __len__(self):
        return len(self.examples)

    def __getitem__(self, idx):
        return {k: torch.tensor(v, dtype=torch.long) for k, v in self.examples[idx].items()}

# CELL 4: Load Base Model & Tokenizer (4-bit QLoRA)
# ------------------------------------------------------------------------------
BASE_MODEL = "Qwen/Qwen2.5-1.5B-Instruct"
print(f"Loading Base Model: {BASE_MODEL}...")

tokenizer = AutoTokenizer.from_pretrained(BASE_MODEL, trust_remote_code=True, padding_side="right")
if tokenizer.pad_token is None:
    tokenizer.pad_token = tokenizer.eos_token

bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.float16,
    bnb_4bit_use_double_quant=True
)

model = AutoModelForCausalLM.from_pretrained(
    BASE_MODEL,
    quantization_config=bnb_config,
    device_map="auto",
    trust_remote_code=True
)
model = prepare_model_for_kbit_training(model)

lora_config = LoraConfig(
    task_type=TaskType.CAUSAL_LM,
    r=16,
    lora_alpha=32,
    lora_dropout=0.05,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
    bias="none"
)
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()

# Prepare Datasets
train_records = load_jsonl(train_path)
train_dataset = VTUDataset(train_records, tokenizer)
print(f"✓ Tokenized {len(train_dataset)} training samples.")

eval_dataset = None
if val_path:
    val_records = load_jsonl(val_path)
    eval_dataset = VTUDataset(val_records, tokenizer)
    print(f"✓ Tokenized {len(eval_dataset)} validation samples.")

# CELL 5: Start Training
# ------------------------------------------------------------------------------
OUTPUT_DIR = "/kaggle/working/adaptlearn-lora"

training_args = TrainingArguments(
    output_dir=OUTPUT_DIR,
    num_train_epochs=3,
    per_device_train_batch_size=8,        # Kaggle 16GB VRAM easily handles batch 8
    gradient_accumulation_steps=2,        # Effective batch size = 16
    learning_rate=2e-4,
    warmup_ratio=0.05,
    weight_decay=0.01,
    lr_scheduler_type="cosine",
    fp16=True,
    logging_steps=50,
    save_strategy="epoch",
    evaluation_strategy="epoch" if eval_dataset else "no",
    save_total_limit=1,
    report_to="none",
    optim="paged_adamw_8bit"
)

trainer = Trainer(
    model=model,
    tokenizer=tokenizer,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,
    args=training_args,
    data_collator=DataCollatorForSeq2Seq(tokenizer, model=model, pad_to_multiple_of=8, padding=True)
)

print("\n🚀 Starting Training on Kaggle GPU...")
trainer.train()

# CELL 6: Save and Zip Adapter for Easy Download
# ------------------------------------------------------------------------------
ADAPTER_DIR = "/kaggle/working/lora_adapter"
model.save_pretrained(ADAPTER_DIR)
tokenizer.save_pretrained(ADAPTER_DIR)

shutil.make_archive("/kaggle/working/lora_adapter", 'zip', ADAPTER_DIR)
print("\n" + "="*55)
print("✅ TRAINING FINISHED SUCCESSFULLY!")
print("Download your adapter from Kaggle Output tab: lora_adapter.zip")
print("="*55)
