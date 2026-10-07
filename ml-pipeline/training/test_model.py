"""
test_model.py
-------------
Quick smoke-test: asks one VTU question to the trained Ollama model
and pretty-prints the structured JSON answer.

Usage:
    python training/test_model.py
    python training/test_model.py --model adaptlearn
    python training/test_model.py --model llama3.1:8b  (test base before fine-tune)
"""

import argparse
import json
import urllib.request
from pathlib import Path


SYSTEM = (
    "You are AdaptLearn, a VTU exam tutor. "
    "Answer with structured JSON: {\"question\",\"subject_code\",\"module\","
    "\"marks\",\"co_reference\",\"sections\":[{\"type\",\"heading\",\"text\"}]}. "
    "Output ONLY the JSON object."
)

TEST_QUESTIONS = [
    {"subject": "BCS701", "module": 1, "marks": 2, "q": "What is Internet of Things (IoT)?"},
    {"subject": "BCS701", "module": 1, "marks": 5, "q": "Explain the architecture of an IoT system."},
    {"subject": "BCS701", "module": 1, "marks": 10, "q": "Explain in detail the different layers of the IoT protocol stack with examples."},
]


def ask(model: str, subject: str, module: int, marks: int, question: str) -> dict | None:
    prompt = f"[{subject} Module {module} — {marks} marks]\n{question}"
    messages = [
        {"role": "system",    "content": SYSTEM},
        {"role": "user",      "content": prompt},
    ]
    payload = json.dumps({
        "model": model,
        "messages": messages,
        "stream": False,
        "options": {"temperature": 0.1, "num_ctx": 2048},
    }).encode()
    req = urllib.request.Request(
        "http://127.0.0.1:11434/api/chat",
        data=payload, headers={"Content-Type": "application/json"}, method="POST"
    )
    with urllib.request.urlopen(req, timeout=120) as r:
        body = json.loads(r.read().decode())
    raw = body.get("message", {}).get("content", "")
    try:
        return json.loads(raw.strip())
    except Exception:
        import re
        m = re.search(r"\{.*\}", raw, re.S)
        if m:
            return json.loads(m.group(0))
    return {"raw": raw}


def render(qa: dict):
    print(f"\n  Marks  : {qa.get('marks')}  CO: {qa.get('co_reference')}")
    print(f"  Q      : {qa.get('question','')[:80]}")
    for s in qa.get("sections", []):
        t = s.get("type","").upper().ljust(12)
        text = s.get("text","")[:120]
        print(f"  [{t}] {text}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", default="adaptlearn", help="Ollama model name")
    parser.add_argument("--all",   action="store_true",  help="Test all 3 mark levels")
    args = parser.parse_args()

    questions = TEST_QUESTIONS if args.all else TEST_QUESTIONS[:1]

    print(f"Testing model: {args.model}")
    print("="*60)

    for tq in questions:
        print(f"\nQ ({tq['marks']}m): {tq['q']}")
        try:
            result = ask(args.model, tq["subject"], tq["module"], tq["marks"], tq["q"])
            if result:
                render(result)
            else:
                print("  No response")
        except Exception as e:
            print(f"  Error: {e}")

    print("\n" + "="*60)
    print(f"Done. If answers look structured, the model is working correctly.")
    print(f"If not, generate more data and retrain.")


if __name__ == "__main__":
    main()
