# AdaptLearn — ML Pipeline

Local training pipeline for the VTU QA model.

```
ml-pipeline/
  data_gen/
    generate_dataset.py   ← Step 1: Generate QA pairs via Ollama (llama3.1:8b)
    validate_dataset.py   ← Step 2: Validate & deduplicate JSONL
    inspect_dataset.py    ← Step 3: Browse / stats on the dataset
  training/
    train_lora.py         ← Step 4: Fine-tune with Unsloth + QLoRA (local GPU)
    train_cpu.py          ← Step 4 (CPU-only fallback): Fine-tune with standard PEFT
    requirements.txt      ← Python dependencies
  scripts/
    build_plan.py         ← Builds plan.json from DATA folder
    audit_subjects.py     ← Checks which subjects have notes
  output/                 ← Generated data and model checkpoints land here
```

## Quick start

### 1. Install dependencies
```
pip install -r training/requirements.txt
```

### 2. Make sure Ollama is running with llama3.1:8b
```
ollama pull llama3.1:8b
ollama serve
```

### 3. Generate training data
```
python data_gen/generate_dataset.py
```

### 4. Validate it
```
python data_gen/validate_dataset.py
```

### 5. Fine-tune (GPU — recommended)
```
python training/train_lora.py
```

### 5. Fine-tune (CPU — slow but works)
```
python training/train_cpu.py
```

## Output schema (every QA pair)
See `../DATA/VTU_ANSWER_RULES_AND_OUTPUT_FORMAT.md` for the full spec.
The model outputs structured JSON sections (definition / explanation / diagram / example / conclusion),
never raw markdown, so the frontend can render them with real components.
