"""
generate_dataset.py  —  VTU QA pair generator using Ollama
-----------------------------------------------------------
Usage:
    python data_gen/generate_dataset.py                      # all subjects
    python data_gen/generate_dataset.py --subject BCS701     # one subject
    python data_gen/generate_dataset.py --subject BCS701 --module 1
    python data_gen/generate_dataset.py --pairs 40           # pairs per module
    python data_gen/generate_dataset.py --fresh              # ignore resume
"""

import argparse
import json
import re
import time
import urllib.request
import urllib.error
from difflib import SequenceMatcher
from pathlib import Path

# ── constants ─────────────────────────────────────────────────────────────────
ROOT       = Path(__file__).resolve().parents[2]          # d:/Adaptlearn
NOTES_ROOT = ROOT / "DATA" / "VTU_CSE_Notes"
OUT_DIR    = ROOT / "ml-pipeline" / "output"
OUT_FILE   = OUT_DIR / "training_data.jsonl"
PLAN_FILE  = OUT_DIR / "plan.json"
OLLAMA_URL = "http://127.0.0.1:11434/api/generate"
DEFAULT_MODEL = "llama3.1:8b"

# marks → which section types are REQUIRED
MARKS_REQUIRE = {
    2:  {"definition"},
    5:  {"definition", "explanation"},
    10: {"definition", "explanation", "example", "conclusion"},
}

SYSTEM_BLOCK = """You are a VTU (Visvesvaraya Technological University) exam question-answer generator.
Generate question-answer pairs strictly in VTU exam format.
Output ONLY a valid JSON array — no markdown fences, no explanation text.

VTU section rules:
  2 marks  → sections: [definition]
  5 marks  → sections: [definition, explanation]
  10 marks → sections: [definition, explanation, example, conclusion]

Each pair schema:
{
  "question": "<exam-style question>",
  "subject_code": "<CODE>",
  "module": <N>,
  "marks": <2|5|10>,
  "co_reference": "<CO1..CO5>",
  "sections": [
    {"type": "definition",   "heading": "Definition",   "text": "<text>"},
    {"type": "explanation",  "heading": "Explanation",  "text": "<text>"},
    {"type": "example",      "heading": "Example",      "text": "<text>"},
    {"type": "conclusion",   "heading": "Conclusion",   "text": "<text>"}
  ]
}
Include ONLY the sections required for the marks value."""


# ── helpers ───────────────────────────────────────────────────────────────────

def load_notes(subject_code: str, module_id: int) -> str:
    """Return concatenated notes text for subject+module."""
    parts: list[str] = []
    key = f"module-{module_id}"
    for f in NOTES_ROOT.rglob("*.txt"):
        name = f.name.lower()
        if subject_code.lower() not in name:
            continue
        if key not in name:
            continue
        if "question paper" in str(f.parent).lower():
            continue
        try:
            text = f.read_text(encoding="utf-8", errors="ignore").strip()
            if not text:
                continue
            # pdf/written notes take priority
            if "-pdf" in name or "-written" in name:
                parts.insert(0, text[:5000])
            else:
                parts.append(text[:3000])
        except Exception:
            pass
    return "\n\n".join(parts)


def chunk_text(text: str, size: int = 4000) -> list[str]:
    if len(text) <= size:
        return [text] if text.strip() else []
    chunks = []
    step = size - 400           # 400-char overlap
    for i in range(0, len(text), step):
        c = text[i : i + size].strip()
        if c:
            chunks.append(c)
    return chunks


def build_prompt(subject: str, module_id: int, chunk: str) -> str:
    co = f"CO{module_id}"
    return (
        f"{SYSTEM_BLOCK}\n\n"
        f"Subject: {subject}  Module: {module_id}  CO: {co}\n\n"
        f"Notes content (source material — do not invent facts outside this):\n"
        f"{chunk[:4000]}\n\n"
        f"Generate exactly 8 question-answer pairs:\n"
        f"  3 pairs with \"marks\": 2\n"
        f"  3 pairs with \"marks\": 5\n"
        f"  2 pairs with \"marks\": 10\n\n"
        f"Every pair must have:\n"
        f"  subject_code = \"{subject}\"\n"
        f"  module = {module_id}\n"
        f"  co_reference = \"{co}\"\n\n"
        f"Output ONLY the JSON array. Start with [ and end with ]."
    )


def call_ollama(prompt: str, model: str, timeout: int = 300) -> str:
    payload = json.dumps({
        "model":  model,
        "prompt": prompt,
        "stream": False,
        "options": {
            "temperature": 0.3,
            "num_predict": 2500,
            "num_ctx":     3072,
        },
    }).encode()
    req = urllib.request.Request(
        OLLAMA_URL, data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return json.loads(r.read().decode()).get("response", "")
    except urllib.error.URLError as e:
        raise RuntimeError(
            f"Ollama not reachable at {OLLAMA_URL}\n"
            f"Make sure Ollama is running: ollama serve\n{e}"
        )


def extract_json_array(raw: str) -> list:
    raw = re.sub(r"```(?:json)?|```", "", raw).strip()
    m = re.search(r"\[.*\]", raw, re.S)
    if not m:
        raise ValueError("No JSON array found in model output")
    return json.loads(m.group(0))


def validate_pair(qa: dict) -> tuple[bool, str]:
    marks = qa.get("marks")
    if marks not in MARKS_REQUIRE:
        return False, f"invalid marks={marks}"
    sections = qa.get("sections", [])
    if not sections:
        return False, "empty sections"
    types = {s.get("type") for s in sections}
    missing = MARKS_REQUIRE[marks] - types
    if missing:
        return False, f"{marks}-mark missing sections: {missing}"
    if not str(qa.get("question", "")).strip():
        return False, "empty question"
    return True, ""


def normalize_q(q: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[^\w\s]", " ", q.lower())).strip()


def is_duplicate(q: str, seen: list[str], threshold: float = 0.82) -> bool:
    n = normalize_q(q)
    return any(SequenceMatcher(None, n, prev).ratio() > threshold for prev in seen)


# ── per-module generation ─────────────────────────────────────────────────────

def generate_module(
    subject: str,
    module_id: int,
    target: int,
    model: str,
) -> list[dict]:
    notes = load_notes(subject, module_id)
    if not notes.strip():
        print(f"  [{subject} M{module_id}] no notes found — skipping")
        return []

    chunks = chunk_text(notes)
    if not chunks:
        print(f"  [{subject} M{module_id}] empty after chunking — skipping")
        return []

    accepted: list[dict] = []
    seen_qs:  list[str]  = []
    batch     = 0
    max_batches = max(target * 3, 25)   # upper safety limit

    while len(accepted) < target and batch < max_batches:
        chunk   = chunks[batch % len(chunks)]
        prompt  = build_prompt(subject, module_id, chunk)
        batch  += 1

        try:
            raw   = call_ollama(prompt, model)
            pairs = extract_json_array(raw)
        except (ValueError, json.JSONDecodeError) as e:
            print(f"  [{subject} M{module_id}] batch {batch}: parse error — {e}")
            time.sleep(1)
            continue
        except RuntimeError as e:
            print(f"  ERROR: {e}")
            return accepted          # Ollama down — stop

        new = 0
        for qa in pairs:
            if len(accepted) >= target:
                break
            ok, reason = validate_pair(qa)
            if not ok:
                continue
            q_text = qa.get("question", "")
            if is_duplicate(q_text, seen_qs):
                continue
            # stamp correct metadata
            qa["subject_code"]  = subject
            qa["module"]        = module_id
            qa["co_reference"]  = qa.get("co_reference") or f"CO{module_id}"
            accepted.append(qa)
            seen_qs.append(normalize_q(q_text))
            new += 1

        print(
            f"  [{subject} M{module_id}] batch {batch}: "
            f"+{new} → {len(accepted)}/{target}"
        )

    return accepted


# ── resume support ─────────────────────────────────────────────────────────────

def already_done() -> set[str]:
    done: set[str] = set()
    if not OUT_FILE.exists():
        return done
    for line in OUT_FILE.read_text(encoding="utf-8", errors="ignore").splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
            done.add(f"{obj['subject_code']}:{obj['module']}")
        except Exception:
            pass
    return done


# ── entry point ───────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate VTU QA training data via Ollama"
    )
    parser.add_argument("--subject", help="Single subject code e.g. BCS701")
    parser.add_argument("--module",  type=int, help="Single module number")
    parser.add_argument("--pairs",   type=int, default=30,
                        help="Target QA pairs per module (default 30)")
    parser.add_argument("--model",   default=DEFAULT_MODEL,
                        help=f"Ollama model (default: {DEFAULT_MODEL})")
    parser.add_argument("--fresh",   action="store_true",
                        help="Ignore resume — regenerate everything")
    args = parser.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    if not PLAN_FILE.exists():
        print(f"plan.json not found at {PLAN_FILE}")
        print("Run:  python scripts/build_plan.py")
        return

    plan     = json.loads(PLAN_FILE.read_text(encoding="utf-8"))["subjects"]
    done     = set() if args.fresh else already_done()
    subjects = [args.subject] if args.subject else sorted(plan.keys())

    total_existing = sum(1 for _ in open(OUT_FILE, encoding="utf-8")) if OUT_FILE.exists() else 0
    print(f"Model  : {args.model}")
    print(f"Target : {args.pairs} pairs/module")
    print(f"Subjects: {len(subjects)}  |  Already done: {len(done)} combos")
    print(f"Existing data: {total_existing} lines in {OUT_FILE.name}")
    print()

    total_written = 0
    t0 = time.time()

    for subj in subjects:
        if subj not in plan:
            print(f"  {subj} not in plan — skip")
            continue
        modules = [args.module] if args.module else plan[subj]["eligible_modules"]
        for mod in modules:
            key = f"{subj}:{mod}"
            if key in done:
                print(f"  [{subj} M{mod}] already done — skip")
                continue
            print(f"\n[{subj} M{mod}] generating up to {args.pairs} pairs …")
            pairs = generate_module(subj, mod, args.pairs, args.model)
            if pairs:
                with OUT_FILE.open("a", encoding="utf-8") as f:
                    for p in pairs:
                        f.write(json.dumps(p, ensure_ascii=False) + "\n")
                total_written += len(pairs)
                print(f"  [{subj} M{mod}] ✓ wrote {len(pairs)} pairs  (total so far: {total_existing + total_written})")

    elapsed = time.time() - t0
    print(f"\n{'='*55}")
    print(f"Done — {total_written} new pairs written in {elapsed:.0f}s")
    print(f"Output: {OUT_FILE}")
    print(f"Next  : python data_gen/validate_dataset.py")
    print(f"Then  : python training/train_lora.py")


if __name__ == "__main__":
    main()
