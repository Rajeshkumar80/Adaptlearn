"""Quick debug script to see raw Ollama output."""
import json, re, sys, urllib.request
from pathlib import Path

OLLAMA_URL = "http://127.0.0.1:11434/api/generate"

f = list(Path(r"D:\Adaptlearn\DATA\VTU_CSE_Textbooks\Sem_5\BCS502_Computer_Networks").glob("*.txt"))[0]
text = f.read_text(encoding="utf-8", errors="replace")[:1500]

prompt = f"""You are a VTU exam tutor. Generate ONE VTU Computer Networks QA pair as JSON.

Source text:
{text}

Output ONLY this JSON object (no markdown fences, no extra text):
{{
  "question": "Explain the OSI Reference Model with a neat diagram.",
  "subject_code": "BCS502",
  "topic": "OSI Reference Model",
  "related_topics": ["TCP/IP Model", "Protocol Layers"],
  "sections": [
    {{
      "type": "concept",
      "heading": "Definition",
      "text": "The OSI model is a conceptual framework...",
      "key_terms": ["OSI", "layer", "protocol"]
    }},
    {{
      "type": "detail",
      "heading": "The Seven Layers",
      "text": "Layer 1 Physical...",
      "key_terms": ["physical", "data link", "network"]
    }},
    {{
      "type": "conclusion",
      "heading": "Conclusion",
      "text": "The OSI model standardizes network communication..."
    }}
  ]
}}"""

payload = json.dumps({
    "model": "llama3.1:8b",
    "prompt": prompt,
    "stream": False,
    "options": {"temperature": 0.1, "num_predict": 2000, "num_ctx": 4096},
}).encode()

req = urllib.request.Request(
    OLLAMA_URL, data=payload,
    headers={"Content-Type": "application/json"},
    method="POST",
)

print("Calling Ollama...", flush=True)
with urllib.request.urlopen(req, timeout=480) as r:
    raw = json.loads(r.read().decode()).get("response", "")

print("=== RAW OUTPUT ===")
print(raw[:3000])
print("=== END ===")

# Try parse
cleaned = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]", "", raw)
cleaned = re.sub(r"```(?:json)?|```", "", cleaned).strip()
m = re.search(r"\{[\s\S]*\}", cleaned)
if m:
    try:
        obj = json.loads(m.group(0))
        print("\n=== PARSED OK ===")
        print(json.dumps(obj, indent=2)[:500])
    except json.JSONDecodeError as e:
        print(f"\n=== PARSE FAILED: {e} ===")
        print(repr(m.group(0)[:300]))
else:
    print("\n=== NO JSON FOUND ===")
