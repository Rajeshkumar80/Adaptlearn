"""Test llama3.2:1b quality for VTU answer generation."""
import json, urllib.request, time

SYSTEM = """\
You are a VTU Computer Science exam tutor.
Output ONLY a valid JSON object. No markdown. No extra text. Start with { end with }.

JSON schema:
{
  "question": "<question>",
  "subject_code": "<CODE>",
  "topic": "<topic name>",
  "related_topics": ["<topic1>", "<topic2>"],
  "sections": [
    {"type": "concept", "heading": "<h>", "text": "<3-5 sentences>", "key_terms": ["<t>"]},
    {"type": "detail", "heading": "<h>", "text": "<6-8 sentences, thorough>", "key_terms": ["<t>"]},
    {"type": "how_it_works", "heading": "Working", "text": "<numbered steps>"},
    {"type": "example", "heading": "Example", "text": "<concrete example>"},
    {"type": "conclusion", "heading": "Conclusion", "text": "<2-3 sentences>"}
  ]
}
Include concept, detail, example, conclusion for every answer. Add how_it_works for processes/algorithms."""

prompt = SYSTEM + """

Subject: BCS502 -- Computer Networks

VTU exam question: "Explain the OSI Reference Model with its seven layers and their functions."

Set subject_code = "BCS502", topic = "OSI Reference Model".
Output ONLY the JSON object. Start with {."""

payload = json.dumps({
    "model": "llama3.2:1b",
    "prompt": prompt,
    "stream": False,
    "options": {"temperature": 0.2, "num_predict": 2000, "num_ctx": 3072},
}).encode()

req = urllib.request.Request("http://127.0.0.1:11434/api/generate",
    data=payload, headers={"Content-Type": "application/json"}, method="POST")

t0 = time.time()
print("Testing llama3.2:1b quality...", flush=True)
with urllib.request.urlopen(req, timeout=60) as r:
    raw = json.loads(r.read().decode()).get("response", "")
elapsed = time.time() - t0

print(f"Time: {elapsed:.1f}s\n")
print("=== RAW OUTPUT ===")
print(raw[:3000])

# Parse check
import re
cleaned = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]", "", raw)
m = re.search(r"\{[\s\S]*\}", cleaned)
if m:
    try:
        obj = json.loads(m.group(0))
        sections = obj.get("sections", [])
        print(f"\n=== PARSED OK: {len(sections)} sections ===")
        for s in sections:
            print(f"  [{s.get('type')}] {s.get('heading')}: {s.get('text','')[:80]}...")
    except Exception as e:
        print(f"\n=== PARSE FAILED: {e} ===")
