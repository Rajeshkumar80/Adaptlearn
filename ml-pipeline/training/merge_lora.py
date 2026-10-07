"""
merge_lora.py
-------------
Merges the LoRA adapter back into the base model weights and saves a
standalone model you can serve with Ollama or HuggingFace pipelines.

Usage:
    python training/merge_lora.py [--adapter output/adaptlearn-lora/lora_adapter]
                                   [--base    Qwen/Qwen2.5-3B-Instruct]
                                   [--out     output/adaptlearn-merged]
"""

import argparse
import sys
from pathlib import Path

ML_ROOT = Path(__file__).resolve().parent.parent


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--adapter", type=Path,
                        default=ML_ROOT / "output" / "adaptlearn-lora" / "lora_adapter")
    parser.add_argument("--base",   default="Qwen/Qwen2.5-3B-Instruct")
    parser.add_argument("--out",    type=Path,
                        default=ML_ROOT / "output" / "adaptlearn-merged")
    args = parser.parse_args()

    if not args.adapter.exists():
        print(f"Adapter not found: {args.adapter}")
        print("Train first: python training/train_lora.py")
        sys.exit(1)

    try:
        import torch
        from transformers import AutoTokenizer, AutoModelForCausalLM
        from peft import PeftModel
    except ImportError as e:
        print(f"Missing dep: {e}")
        sys.exit(1)

    print(f"Loading base model: {args.base}")
    tokenizer = AutoTokenizer.from_pretrained(args.base, trust_remote_code=True)
    model = AutoModelForCausalLM.from_pretrained(
        args.base,
        torch_dtype=torch.float16,
        trust_remote_code=True,
        low_cpu_mem_usage=True,
    )

    print(f"Loading LoRA adapter: {args.adapter}")
    model = PeftModel.from_pretrained(model, str(args.adapter))

    print("Merging weights…")
    model = model.merge_and_unload()

    args.out.mkdir(parents=True, exist_ok=True)
    print(f"Saving merged model to: {args.out}")
    model.save_pretrained(str(args.out), safe_serialization=True)
    tokenizer.save_pretrained(str(args.out))
    print("Done.")
    print()
    print("To serve with Ollama, create a Modelfile:")
    print(f'  FROM {args.out}')
    print('  SYSTEM "You are AdaptLearn VTU tutor. Output structured JSON answers."')
    print("  ollama create adaptlearn -f Modelfile")
    print("  ollama run adaptlearn")


if __name__ == "__main__":
    main()
