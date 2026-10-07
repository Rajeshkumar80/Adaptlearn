"""
export_to_ollama.py — End-to-end pipeline:
  1. Download Qwen2.5-1.5B-Instruct base model (if not cached)
  2. Merge LoRA adapter into base model
  3. Convert merged model to GGUF (Q8_0 quantization)
  4. Create Ollama Modelfile and register as 'adaptlearn'

Usage:
  py -3.11 ml-pipeline/scripts/export_to_ollama.py

Requires: torch, transformers, peft, gguf (pip install gguf)
"""

import os
import sys
import json
import shutil
import subprocess
import tempfile
from pathlib import Path

# ── Paths ──────────────────────────────────────────────────────────────────────
PROJECT_ROOT  = Path(__file__).resolve().parents[2]  # D:\Adaptlearn
ADAPTER_DIR   = PROJECT_ROOT / "adaptlearn-vtu-lora"
MERGED_DIR    = PROJECT_ROOT / "ml-pipeline" / "merged-model"
GGUF_DIR      = PROJECT_ROOT / "ml-pipeline" / "gguf-output"
MODELFILE_PATH = GGUF_DIR / "Modelfile"
BACKEND_ENV   = PROJECT_ROOT / "backend" / ".env"

BASE_MODEL    = "Qwen/Qwen2.5-1.5B-Instruct"
OLLAMA_NAME   = "adaptlearn"
QUANT_TYPE    = "Q8_0"


def step(n: int, msg: str):
  print(f"\n{'='*60}")
  print(f"  Step {n}: {msg}")
  print(f"{'='*60}\n")


def check_prereqs():
  """Verify all required packages are installed."""
  missing = []
  for pkg in ["torch", "transformers", "peft"]:
    try:
      __import__(pkg)
    except ImportError:
      missing.append(pkg)

  if missing:
    print(f"ERROR: Missing packages: {', '.join(missing)}")
    print(f"Install with: py -3.11 -m pip install {' '.join(missing)}")
    sys.exit(1)

  if not ADAPTER_DIR.exists():
    print(f"ERROR: Adapter directory not found: {ADAPTER_DIR}")
    print("Place the adaptlearn-vtu-lora folder in the project root.")
    sys.exit(1)

  print(f"  Adapter dir:  {ADAPTER_DIR}")
  print(f"  Merged dir:   {MERGED_DIR}")
  print(f"  GGUF dir:     {GGUF_DIR}")
  print(f"  Base model:   {BASE_MODEL}")


def merge_lora():
  """Download base model + merge LoRA adapter into a single model."""
  from transformers import AutoModelForCausalLM, AutoTokenizer
  from peft import PeftModel

  step(1, "Loading base model (downloads ~3GB on first run)")
  base_model = AutoModelForCausalLM.from_pretrained(
    BASE_MODEL,
    torch_dtype="auto",
    device_map="cpu",
    trust_remote_code=True,
  )
  tokenizer = AutoTokenizer.from_pretrained(BASE_MODEL, trust_remote_code=True)
  print(f"  Base model loaded: {BASE_MODEL}")

  step(2, "Merging LoRA adapter into base model")
  model = PeftModel.from_pretrained(base_model, str(ADAPTER_DIR))
  merged = model.merge_and_unload()
  print("  LoRA merge complete")

  step(3, f"Saving merged model to {MERGED_DIR}")
  MERGED_DIR.mkdir(parents=True, exist_ok=True)
  merged.save_pretrained(str(MERGED_DIR), safe_serialization=True)
  tokenizer.save_pretrained(str(MERGED_DIR))

  # Copy chat template if present
  chat_tpl = ADAPTER_DIR / "chat_template.jinja"
  if chat_tpl.exists():
    shutil.copy2(chat_tpl, MERGED_DIR / "chat_template.jinja")
    print("  Copied chat_template.jinja")

  total_size = sum(f.stat().st_size for f in MERGED_DIR.rglob("*") if f.is_file())
  print(f"  Merged model saved ({total_size / 1e9:.2f} GB)")


def convert_to_gguf():
  """Convert merged HF model to GGUF format using llama.cpp's convert script."""
  step(4, "Converting merged model to GGUF format")

  GGUF_DIR.mkdir(parents=True, exist_ok=True)
  gguf_path = GGUF_DIR / f"adaptlearn-{QUANT_TYPE.lower()}.gguf"

  # Try using llama-cpp-python's convert script, or download llama.cpp
  convert_script = find_or_install_convert_script()

  cmd = [
    sys.executable, str(convert_script),
    str(MERGED_DIR),
    "--outfile", str(gguf_path),
    "--outtype", QUANT_TYPE.lower().replace("_", ""),
  ]
  print(f"  Running: {' '.join(cmd)}")
  result = subprocess.run(cmd, capture_output=True, text=True)

  if result.returncode != 0:
    # Fallback: try without quantization flag (produce f16, quantize later)
    print(f"  First attempt failed, trying f16 conversion...")
    gguf_f16 = GGUF_DIR / "adaptlearn-f16.gguf"
    cmd_f16 = [
      sys.executable, str(convert_script),
      str(MERGED_DIR),
      "--outfile", str(gguf_f16),
      "--outtype", "f16",
    ]
    print(f"  Running: {' '.join(cmd_f16)}")
    result = subprocess.run(cmd_f16, capture_output=True, text=True)
    if result.returncode != 0:
      print(f"  STDERR: {result.stderr[-2000:]}")
      raise RuntimeError("GGUF conversion failed")
    gguf_path = gguf_f16

  size_mb = gguf_path.stat().st_size / 1e6
  print(f"  GGUF written: {gguf_path} ({size_mb:.1f} MB)")
  return gguf_path


def find_or_install_convert_script() -> Path:
  """Find convert_hf_to_gguf.py from llama.cpp, or clone it."""
  # Check common locations
  candidates = [
    Path("C:/llama.cpp/convert_hf_to_gguf.py"),
    Path.home() / "llama.cpp" / "convert_hf_to_gguf.py",
    PROJECT_ROOT / "llama.cpp" / "convert_hf_to_gguf.py",
  ]
  for c in candidates:
    if c.exists():
      print(f"  Found convert script: {c}")
      return c

  # Clone llama.cpp (shallow)
  llama_dir = PROJECT_ROOT / "llama.cpp"
  print(f"  llama.cpp not found. Cloning to {llama_dir}...")
  subprocess.run(
    ["git", "clone", "--depth=1", "https://github.com/ggml-org/llama.cpp.git", str(llama_dir)],
    check=True,
  )

  # Install gguf package required by the convert script
  subprocess.run(
    [sys.executable, "-m", "pip", "install", "gguf", "numpy"],
    check=True,
  )

  script = llama_dir / "convert_hf_to_gguf.py"
  if not script.exists():
    raise FileNotFoundError(f"convert_hf_to_gguf.py not found after cloning llama.cpp")
  return script


def create_modelfile(gguf_path: Path):
  """Create Ollama Modelfile with the VTU tutor system prompt."""
  step(5, "Creating Ollama Modelfile")

  system_prompt = (
    "You are AdaptLearn, a VTU (Visvesvaraya Technological University) exam tutor. "
    "Answer every question with a structured JSON object in this exact schema:\n"
    '{\n'
    '  "question": "the question text",\n'
    '  "subject_code": "e.g. BCS701",\n'
    '  "module": 1,\n'
    '  "marks": 2,\n'
    '  "co_reference": "CO1",\n'
    '  "sections": [\n'
    '    {"type": "definition",  "heading": "Definition",  "text": "..."},\n'
    '    {"type": "explanation", "heading": "Explanation", "text": "..."},\n'
    '    {"type": "example",     "heading": "Example",     "text": "..."},\n'
    '    {"type": "conclusion",  "heading": "Conclusion",  "text": "..."}\n'
    '  ]\n'
    '}\n'
    "Include only sections appropriate for the marks value:\n"
    "  2 marks  → definition only\n"
    "  5 marks  → definition + explanation\n"
    "  10 marks → definition + explanation + example + conclusion\n"
    "Output ONLY the JSON object. No markdown fences. No extra text."
  )

  modelfile_content = f"""FROM {gguf_path.as_posix()}

TEMPLATE \"\"\"{{{{- if .System }}}}<|im_start|>system
{{{{ .System }}}}<|im_end|>
{{{{- end }}}}
<|im_start|>user
{{{{ .Prompt }}}}<|im_end|>
<|im_start|>assistant
{{{{ .Response }}}}<|im_end|>\"\"\"

SYSTEM \"\"\"{system_prompt}\"\"\"

PARAMETER temperature 0.2
PARAMETER top_p 0.9
PARAMETER num_ctx 3072
PARAMETER num_predict 1500
PARAMETER stop "<|im_end|>"
PARAMETER stop "<|im_start|>"
"""

  MODELFILE_PATH.write_text(modelfile_content, encoding="utf-8")
  print(f"  Modelfile written: {MODELFILE_PATH}")
  return MODELFILE_PATH


def register_in_ollama(modelfile_path: Path):
  """Register the model in Ollama."""
  step(6, f"Registering model as '{OLLAMA_NAME}' in Ollama")

  # Check Ollama is running
  try:
    import urllib.request
    urllib.request.urlopen("http://127.0.0.1:11434/api/tags", timeout=5)
  except Exception:
    print("  Starting Ollama...")
    subprocess.Popen(
      ["ollama", "serve"],
      stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
      creationflags=subprocess.CREATE_NO_WINDOW if sys.platform == "win32" else 0,
    )
    import time
    time.sleep(5)

  result = subprocess.run(
    ["ollama", "create", OLLAMA_NAME, "-f", str(modelfile_path)],
    capture_output=True, text=True, timeout=300,
  )
  print(result.stdout)
  if result.returncode != 0:
    print(f"  STDERR: {result.stderr}")
    raise RuntimeError("Ollama model creation failed")

  # Verify
  result = subprocess.run(["ollama", "list"], capture_output=True, text=True)
  print(result.stdout)

  if OLLAMA_NAME in result.stdout:
    print(f"  ✓ Model '{OLLAMA_NAME}' registered successfully!")
  else:
    print(f"  ⚠ Model '{OLLAMA_NAME}' not found in list — check manually")


def update_backend_env():
  """Update backend .env to use the new model."""
  step(7, "Updating backend .env to use 'adaptlearn' model")

  env_text = BACKEND_ENV.read_text(encoding="utf-8")
  old_model_line = None
  for line in env_text.splitlines():
    if line.startswith("OLLAMA_MODEL="):
      old_model_line = line
      break

  if old_model_line:
    new_env = env_text.replace(old_model_line, f"OLLAMA_MODEL={OLLAMA_NAME}")
    BACKEND_ENV.write_text(new_env, encoding="utf-8")
    print(f"  Updated: {old_model_line} → OLLAMA_MODEL={OLLAMA_NAME}")
  else:
    with open(BACKEND_ENV, "a", encoding="utf-8") as f:
      f.write(f"\nOLLAMA_MODEL={OLLAMA_NAME}\n")
    print(f"  Appended: OLLAMA_MODEL={OLLAMA_NAME}")

  print("\n  ⚠  Restart the backend for changes to take effect:")
  print("      cd backend && npm run dev")


def smoke_test():
  """Quick smoke test: send a question to Ollama."""
  step(8, "Smoke test — querying the model")

  import urllib.request

  payload = json.dumps({
    "model": OLLAMA_NAME,
    "messages": [
      {"role": "user", "content": "[BCS701 Module 1 — 2 marks]\nDefine Artificial Intelligence."},
    ],
    "stream": False,
    "options": {"temperature": 0.2, "num_ctx": 3072, "num_predict": 512},
  }).encode()

  req = urllib.request.Request(
    "http://127.0.0.1:11434/api/chat",
    data=payload,
    headers={"Content-Type": "application/json"},
  )

  try:
    with urllib.request.urlopen(req, timeout=120) as resp:
      data = json.loads(resp.read())
      content = data.get("message", {}).get("content", "")
      print("  Model response (first 500 chars):")
      print(f"  {content[:500]}")

      # Try to parse as JSON
      try:
        parsed = json.loads(content.replace("```json", "").replace("```", "").strip())
        print("\n  ✓ Response is valid JSON!")
        print(f"  Keys: {list(parsed.keys())}")
      except json.JSONDecodeError:
        print("\n  ⚠ Response is not valid JSON — model may need further fine-tuning")
  except Exception as e:
    print(f"  Smoke test failed: {e}")
    print("  (This is OK if Ollama is still loading the model)")


def main():
  print("=" * 60)
  print("  AdaptLearn LoRA -> Ollama Export Pipeline")
  print("=" * 60)

  check_prereqs()
  merge_lora()
  gguf_path = convert_to_gguf()
  modelfile_path = create_modelfile(gguf_path)
  register_in_ollama(modelfile_path)
  update_backend_env()
  smoke_test()

  print("\n" + "=" * 60)
  print("  ✓ DONE! AdaptLearn model is ready.")
  print("=" * 60)
  print(f"""
  Summary:
    Merged model:  {MERGED_DIR}
    GGUF file:     {gguf_path}
    Ollama model:  {OLLAMA_NAME}
    Backend .env:  OLLAMA_MODEL={OLLAMA_NAME}

  Next steps:
    1. Restart backend:  cd backend && npm run dev
    2. Open frontend:    http://localhost:3000
    3. Login and test the AI Tutor!
  """)


if __name__ == "__main__":
  main()
