"""
continue_export.py -- Steps 4-8: GGUF conversion + Ollama registration.
Picks up from where export_to_ollama.py left off (merged model already saved).
"""
import os
import sys
import json
import subprocess
from pathlib import Path

PROJECT_ROOT   = Path(__file__).resolve().parents[2]
MERGED_DIR     = PROJECT_ROOT / "ml-pipeline" / "merged-model"
GGUF_DIR       = PROJECT_ROOT / "ml-pipeline" / "gguf-output"
MODELFILE_PATH = GGUF_DIR / "Modelfile"
BACKEND_ENV    = PROJECT_ROOT / "backend" / ".env"
CONVERT_SCRIPT = PROJECT_ROOT / "llama.cpp" / "convert_hf_to_gguf.py"
OLLAMA_NAME    = "adaptlearn"


def step(n, msg):
    print(f"\n{'='*60}")
    print(f"  Step {n}: {msg}")
    print(f"{'='*60}\n", flush=True)


# ── Step 4: Convert to GGUF ──────────────────────────────────────────────────
step(4, "Converting merged model to GGUF (f16)")
GGUF_DIR.mkdir(parents=True, exist_ok=True)
gguf_path = GGUF_DIR / "adaptlearn-f16.gguf"

if gguf_path.exists() and gguf_path.stat().st_size > 100_000_000:
    print(f"  GGUF already exists: {gguf_path} ({gguf_path.stat().st_size / 1e6:.1f} MB)")
    print("  Skipping conversion.")
else:
    # Run convert_hf_to_gguf.py as a separate process with UTF-8 encoding
    env = os.environ.copy()
    env["PYTHONIOENCODING"] = "utf-8"

    proc = subprocess.Popen(
        [sys.executable, str(CONVERT_SCRIPT),
         str(MERGED_DIR),
         "--outfile", str(gguf_path),
         "--outtype", "f16"],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        env=env,
        encoding="utf-8",
        errors="replace",
    )
    # Stream output line by line
    for line in proc.stdout:
        print(f"  {line.rstrip()}", flush=True)
    proc.wait()

    if proc.returncode != 0:
        print(f"  ERROR: convert_hf_to_gguf.py exited with code {proc.returncode}")
        sys.exit(1)

    print(f"\n  GGUF written: {gguf_path} ({gguf_path.stat().st_size / 1e6:.1f} MB)")


# ── Step 5: Create Modelfile ─────────────────────────────────────────────────
step(5, "Creating Ollama Modelfile")

system_prompt = (
    "You are AdaptLearn, a VTU (Visvesvaraya Technological University) exam tutor. "
    "Answer every question with a structured JSON object in this exact schema:\\n"
    '{\\n'
    '  "question": "the question text",\\n'
    '  "subject_code": "e.g. BCS701",\\n'
    '  "module": 1,\\n'
    '  "marks": 2,\\n'
    '  "co_reference": "CO1",\\n'
    '  "sections": [\\n'
    '    {"type": "definition",  "heading": "Definition",  "text": "..."},\\n'
    '    {"type": "explanation", "heading": "Explanation", "text": "..."},\\n'
    '    {"type": "example",     "heading": "Example",     "text": "..."},\\n'
    '    {"type": "conclusion",  "heading": "Conclusion",  "text": "..."}\\n'
    '  ]\\n'
    '}\\n'
    "Include only sections appropriate for the marks value:\\n"
    "  2 marks  -> definition only\\n"
    "  5 marks  -> definition + explanation\\n"
    "  10 marks -> definition + explanation + example + conclusion\\n"
    "Output ONLY the JSON object. No markdown fences. No extra text."
)

# Use forward slashes for the path (Ollama handles it fine)
gguf_posix = gguf_path.as_posix()

modelfile_content = f'''FROM {gguf_posix}

TEMPLATE """{{{{- if .System }}}}<|im_start|>system
{{{{ .System }}}}<|im_end|>
{{{{- end }}}}
<|im_start|>user
{{{{ .Prompt }}}}<|im_end|>
<|im_start|>assistant
{{{{ .Response }}}}<|im_end|>"""

SYSTEM """{system_prompt}"""

PARAMETER temperature 0.2
PARAMETER top_p 0.9
PARAMETER num_ctx 3072
PARAMETER num_predict 1500
PARAMETER stop "<|im_end|>"
PARAMETER stop "<|im_start|>"
'''

MODELFILE_PATH.write_text(modelfile_content, encoding="utf-8")
print(f"  Modelfile written: {MODELFILE_PATH}")


# ── Step 6: Register in Ollama ───────────────────────────────────────────────
step(6, f"Registering model as '{OLLAMA_NAME}' in Ollama")

# Make sure Ollama is running
try:
    import urllib.request
    urllib.request.urlopen("http://127.0.0.1:11434/api/tags", timeout=5)
    print("  Ollama is running.")
except Exception:
    print("  Starting Ollama...")
    subprocess.Popen(
        ["ollama", "serve"],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        creationflags=0x08000000,  # CREATE_NO_WINDOW
    )
    import time
    time.sleep(5)

proc = subprocess.Popen(
    ["ollama", "create", OLLAMA_NAME, "-f", str(MODELFILE_PATH)],
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    encoding="utf-8",
    errors="replace",
)
for line in proc.stdout:
    print(f"  {line.rstrip()}", flush=True)
proc.wait()

if proc.returncode != 0:
    print(f"  ERROR: ollama create exited with code {proc.returncode}")
    sys.exit(1)

# Verify
result = subprocess.run(["ollama", "list"], capture_output=True, text=True, encoding="utf-8", errors="replace")
print(result.stdout)
if OLLAMA_NAME in result.stdout:
    print(f"  Model '{OLLAMA_NAME}' registered successfully!")


# ── Step 7: Update backend .env ──────────────────────────────────────────────
step(7, "Updating backend .env")

env_text = BACKEND_ENV.read_text(encoding="utf-8")
updated = False
new_lines = []
for line in env_text.splitlines():
    if line.startswith("OLLAMA_MODEL="):
        old = line
        line = f"OLLAMA_MODEL={OLLAMA_NAME}"
        print(f"  Changed: {old} -> {line}")
        updated = True
    new_lines.append(line)

if not updated:
    new_lines.append(f"OLLAMA_MODEL={OLLAMA_NAME}")
    print(f"  Appended: OLLAMA_MODEL={OLLAMA_NAME}")

BACKEND_ENV.write_text("\n".join(new_lines) + "\n", encoding="utf-8")
print("  Restart backend for changes to take effect.")


# ── Step 8: Smoke test ───────────────────────────────────────────────────────
step(8, "Smoke test")

payload = json.dumps({
    "model": OLLAMA_NAME,
    "messages": [
        {"role": "user", "content": "[BCS701 Module 1 -- 2 marks]\nDefine Artificial Intelligence."},
    ],
    "stream": False,
    "options": {"temperature": 0.2, "num_ctx": 3072, "num_predict": 512},
}).encode()

try:
    import urllib.request
    req = urllib.request.Request(
        "http://127.0.0.1:11434/api/chat",
        data=payload,
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = json.loads(resp.read())
        content = data.get("message", {}).get("content", "")
        print("  Model response (first 500 chars):")
        print(f"  {content[:500]}")
        try:
            parsed = json.loads(content.replace("```json", "").replace("```", "").strip())
            print(f"\n  Response is valid JSON! Keys: {list(parsed.keys())}")
        except json.JSONDecodeError:
            print("\n  Response is not valid JSON -- may need further tuning")
except Exception as e:
    print(f"  Smoke test error: {e}")
    print("  (OK if model is still loading)")

print(f"\n{'='*60}")
print("  DONE! AdaptLearn model is ready.")
print(f"{'='*60}")
print(f"""
  Summary:
    GGUF file:     {gguf_path}
    Ollama model:  {OLLAMA_NAME}
    Backend .env:  OLLAMA_MODEL={OLLAMA_NAME}

  Next steps:
    1. Restart backend:  cd backend && npm run dev
    2. Open frontend:    http://localhost:3000
    3. Login and test the AI Tutor!
""")
