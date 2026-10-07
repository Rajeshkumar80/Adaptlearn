"""
export_to_ollama.py
===================
Merges the LoRA adapter into the base model, converts to GGUF,
writes a Modelfile, and registers it with Ollama as "adaptlearn".

Run after train_lora.py:
    py -3.11 training/export_to_ollama.py

Requirements: llama.cpp must be in PATH, OR we use the Python conversion.
Alternatively, we use ctransformers / transformers direct GGUF export.
"""

import json, shutil, subprocess, sys
from pathlib import Path

ML_ROOT      = Path(__file__).resolve().parent.parent
ADAPTER_DIR  = ML_ROOT / "output" / "adaptlearn-lora" / "lora_adapter"
MERGED_DIR   = ML_ROOT / "output" / "adaptlearn-merged"
GGUF_PATH    = ML_ROOT / "output" / "adaptlearn.gguf"
MODELFILE    = ML_ROOT / "output" / "Modelfile"
BASE_MODEL   = "Qwen/Qwen2.5-1.5B-Instruct"
MODEL_NAME   = "adaptlearn"

SYSTEM = (
    "You are AdaptLearn, a VTU (Visvesvaraya Technological University) exam tutor. "
    "Answer every question with a structured JSON object with these fields: "
    "question, subject_code, topic, module, related_topics, sections. "
    "Each section has: type (concept/detail/how_it_works/example/comparison/diagram_ref/conclusion), "
    "heading, text, and optionally key_terms or diagram_tag. "
    "Output ONLY the JSON object — no markdown fences, no extra text."
)


def check_adapter():
    if not ADAPTER_DIR.exists():
        print(f"ERROR: Adapter not found at {ADAPTER_DIR}")
        print("Run train_lora.py first.")
        sys.exit(1)
    print(f"Adapter found: {ADAPTER_DIR}")


def merge_adapter():
    """Merge LoRA adapter into base model weights."""
    print(f"\nMerging LoRA adapter into base model...")
    print(f"  Base  : {BASE_MODEL}")
    print(f"  Output: {MERGED_DIR}")

    try:
        import torch
        from transformers import AutoTokenizer, AutoModelForCausalLM
        from peft import PeftModel
    except ImportError as e:
        print(f"Missing dep: {e}"); sys.exit(1)

    print("  Loading base model (this downloads if not cached)...")
    tokenizer = AutoTokenizer.from_pretrained(BASE_MODEL, trust_remote_code=True)

    # Load in float16 for merge (not quantised — need full precision to merge)
    base = AutoModelForCausalLM.from_pretrained(
        BASE_MODEL,
        torch_dtype   = torch.float16,
        device_map    = "cpu",            # merge on CPU to avoid VRAM limit
        trust_remote_code = True,
    )

    print("  Loading LoRA adapter...")
    model = PeftModel.from_pretrained(base, str(ADAPTER_DIR))

    print("  Merging weights...")
    model = model.merge_and_unload()

    print(f"  Saving merged model to {MERGED_DIR}...")
    MERGED_DIR.mkdir(parents=True, exist_ok=True)
    model.save_pretrained(str(MERGED_DIR), safe_serialization=True)
    tokenizer.save_pretrained(str(MERGED_DIR))
    print("  Merge complete.")


def convert_to_gguf():
    """Convert merged HF model to GGUF using llama.cpp convert script."""
    print(f"\nConverting to GGUF...")

    # Try llama.cpp convert_hf_to_gguf.py
    # Check common install locations
    convert_candidates = [
        Path(r"C:\llama.cpp\convert_hf_to_gguf.py"),
        Path(r"C:\llama.cpp\convert-hf-to-gguf.py"),
        Path.home() / "llama.cpp" / "convert_hf_to_gguf.py",
        Path.home() / "llama.cpp" / "convert-hf-to-gguf.py",
    ]

    convert_script = None
    for c in convert_candidates:
        if c.exists():
            convert_script = c
            break

    if not convert_script:
        print("  llama.cpp not found — using gguf-py fallback...")
        return convert_to_gguf_py()

    cmd = [
        sys.executable, str(convert_script),
        str(MERGED_DIR),
        "--outtype", "q4_k_m",
        "--outfile", str(GGUF_PATH),
    ]
    print(f"  Running: {' '.join(cmd)}")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"  ERROR: {result.stderr[-500:]}")
        print("  Falling back to gguf-py...")
        return convert_to_gguf_py()

    print(f"  GGUF written: {GGUF_PATH}")
    return True


def convert_to_gguf_py():
    """Fallback: use gguf Python library directly."""
    try:
        import gguf
    except ImportError:
        print("  Installing gguf...")
        subprocess.run([sys.executable, "-m", "pip", "install", "gguf", "-q"])

    # The simplest approach: Ollama can import from HF directly
    # We write a Modelfile that points to the HF merged model
    print("  Using Ollama's built-in HF import instead of GGUF conversion.")
    return False  # signal to use HF path


def write_modelfile(use_gguf: bool):
    """Write Ollama Modelfile."""
    if use_gguf and GGUF_PATH.exists():
        from_line = f"FROM {GGUF_PATH}"
    else:
        # Point to merged HF model directory — Ollama can load safetensors directly
        from_line = f"FROM {MERGED_DIR}"

    modelfile_content = f"""{from_line}

SYSTEM \"\"\"{SYSTEM}\"\"\"

PARAMETER temperature 0.2
PARAMETER num_predict 2000
PARAMETER num_ctx 3072
PARAMETER stop "<|im_end|>"
PARAMETER stop "<|endoftext|>"
"""
    MODELFILE.write_text(modelfile_content, encoding="utf-8")
    print(f"\nModelfile written: {MODELFILE}")
    print(modelfile_content)


def register_with_ollama():
    """Run 'ollama create adaptlearn' to register the model."""
    print(f"\nRegistering '{MODEL_NAME}' with Ollama...")
    result = subprocess.run(
        ["ollama", "create", MODEL_NAME, "-f", str(MODELFILE)],
        capture_output=True, text=True
    )
    if result.returncode == 0:
        print(f"  SUCCESS: model '{MODEL_NAME}' registered!")
        print(f"  Test with: ollama run {MODEL_NAME}")
    else:
        print(f"  ERROR: {result.stderr[-500:]}")
        print(f"\n  Manual registration:")
        print(f"    ollama create {MODEL_NAME} -f {MODELFILE}")


def test_model():
    """Quick test call to verify the model works."""
    print(f"\nTesting {MODEL_NAME}...")
    import urllib.request

    payload = json.dumps({
        "model": MODEL_NAME,
        "prompt": '[BCS502 Module 1]\nWhat is the OSI model? Give a brief definition.',
        "stream": False,
        "options": {"temperature": 0.1, "num_predict": 200},
    }).encode()

    try:
        req = urllib.request.Request(
            "http://127.0.0.1:11434/api/generate",
            data=payload, headers={"Content-Type": "application/json"}, method="POST",
        )
        with urllib.request.urlopen(req, timeout=120) as r:
            resp = json.loads(r.read().decode()).get("response", "")
        print(f"\n  Response preview:")
        print(resp[:400])
    except Exception as e:
        print(f"  Test failed: {e}")


def main():
    print("="*55)
    print(f"  AdaptLearn Export to Ollama")
    print("="*55)

    check_adapter()
    merge_adapter()
    use_gguf = convert_to_gguf()
    write_modelfile(use_gguf)
    register_with_ollama()
    test_model()

    print(f"\n{'='*55}")
    print(f"  Export complete!")
    print(f"  Model: {MODEL_NAME}")
    print(f"\n  To use in the app:")
    print(f"    Set OLLAMA_MODEL=adaptlearn in backend/.env")
    print(f"    Restart: npm run dev (backend)")
    print(f"{'='*55}")


if __name__ == "__main__":
    main()
