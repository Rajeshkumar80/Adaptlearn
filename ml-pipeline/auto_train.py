"""
auto_train.py
-------------
Watches training_data.jsonl and auto-starts fine-tuning when enough data
has been generated. Run this alongside generate_dataset.py.

Usage:
    py -3.11 auto_train.py                     # train when 300 pairs ready
    py -3.11 auto_train.py --min-pairs 500     # wait for 500 pairs
    py -3.11 auto_train.py --now               # train immediately with what's there

It will:
  1. Poll training_data.jsonl every 60s
  2. Once MIN_PAIRS lines exist — run validate + train + export
  3. Print the Ollama model name when done
"""

import argparse
import subprocess
import sys
import time
from pathlib import Path

ML_ROOT  = Path(__file__).resolve().parent
DATA     = ML_ROOT / "output" / "training_data.jsonl"
PY311    = r"C:\Users\Rajesh\AppData\Local\Programs\Python\Python311\python.exe"
VALIDATE = str(ML_ROOT / "data_gen" / "validate_dataset.py")
TRAIN    = str(ML_ROOT / "training"  / "train_lora.py")
EXPORT   = str(ML_ROOT / "training"  / "export_to_ollama.py")


def count_lines(path: Path) -> int:
    if not path.exists():
        return 0
    with open(path, encoding="utf-8", errors="ignore") as f:
        return sum(1 for l in f if l.strip())


def run(cmd: list[str], label: str) -> bool:
    print(f"\n{'='*55}")
    print(f"Running: {label}")
    print(f"{'='*55}")
    result = subprocess.run(cmd)
    if result.returncode != 0:
        print(f"\nERROR: {label} failed (exit {result.returncode})")
        return False
    return True


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--min-pairs", type=int, default=300, help="Wait for this many QA pairs before training")
    ap.add_argument("--now",       action="store_true",   help="Start training immediately, don't wait")
    ap.add_argument("--epochs",    type=int, default=3,   help="Training epochs")
    ap.add_argument("--rank",      type=int, default=16,  help="LoRA rank")
    args = ap.parse_args()

    print(f"AdaptLearn Auto-Trainer")
    print(f"  Data file  : {DATA}")
    print(f"  Min pairs  : {args.min_pairs}")
    print(f"  Python 3.11: {PY311}")
    print()

    if not args.now:
        print(f"Watching for {args.min_pairs} pairs in {DATA.name}...")
        while True:
            n = count_lines(DATA)
            print(f"  {n}/{args.min_pairs} pairs  ({time.strftime('%H:%M:%S')})", end="\r")
            if n >= args.min_pairs:
                print(f"\n  Reached {n} pairs — starting training pipeline!")
                break
            time.sleep(60)
    else:
        n = count_lines(DATA)
        print(f"Starting immediately with {n} pairs (--now)")
        if n < 20:
            print(f"Only {n} pairs — need at least 20. Generate more data first.")
            sys.exit(1)

    # Step 1: validate + clean
    clean_data = DATA.parent / (DATA.stem + "_clean.jsonl")
    ok = run([PY311, VALIDATE, "--input", str(DATA), "--fix"], "Validate & deduplicate")
    if ok and clean_data.exists():
        data_for_train = str(clean_data)
        n_clean = count_lines(clean_data)
        print(f"  Using clean dataset: {n_clean} pairs")
    else:
        data_for_train = str(DATA)

    # Step 2: train
    ok = run([
        PY311, TRAIN,
        "--data", data_for_train,
        "--epochs", str(args.epochs),
        "--rank",   str(args.rank),
    ], "Fine-tune LoRA")
    if not ok:
        print("Training failed. Check errors above.")
        sys.exit(1)

    # Step 3: export to Ollama
    ok = run([PY311, EXPORT], "Export to Ollama")
    if ok:
        print("\n" + "="*55)
        print("DONE! Your fine-tuned model is live in Ollama.")
        print("  Name: adaptlearn")
        print("  Test: ollama run adaptlearn")
        print()
        print("Update backend/.env:")
        print("  OLLAMA_MODEL=adaptlearn")
        print()
        print("Then restart the backend:")
        print("  cd backend && node_modules\\.bin\\tsx.cmd src/index.ts")
        print("="*55)
    else:
        print("\nExport failed — model still accessible via HuggingFace path")
        print(f"  Adapter: {ML_ROOT}/output/adaptlearn-lora/lora_adapter")


if __name__ == "__main__":
    main()
