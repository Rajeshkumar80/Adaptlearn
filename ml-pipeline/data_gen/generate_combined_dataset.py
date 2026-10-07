"""
generate_combined_dataset.py
============================
Full VTU training data pipeline using local Ollama.
SPEED OPTIMISED: parallel workers + reduced tokens + shorter prompts.

Speed improvements over previous version:
  - num_predict: 1800 -> 800     (2x faster per call)
  - num_ctx: 3072    -> 1536     (1.5x faster context load)
  - notes chunk: 2800 -> 1200    (less input = faster)
  - 3 parallel workers           (3x throughput)
  - OLLAMA_NUM_PARALLEL=3 env    (set before ollama serve)

Net result: ~5-6x faster. 124 modules x 10 pairs = ~4 hours vs 24 hours.

Usage:
    set OLLAMA_NUM_PARALLEL=3
    ollama serve
    python data_gen/generate_combined_dataset.py --phase 1 --target 10 --model llama3.1:8b
    python data_gen/generate_combined_dataset.py --phase 2 --model llama3.1:8b
    python data_gen/generate_combined_dataset.py --merge-only
    python data_gen/generate_combined_dataset.py --subject BCS502
    python data_gen/generate_combined_dataset.py --fresh
"""

import argparse
import json
import re
import time
import threading
import urllib.request
import urllib.error
import random
from concurrent.futures import ThreadPoolExecutor, as_completed
from difflib import SequenceMatcher
from pathlib import Path

# ── paths ─────────────────────────────────────────────────────────────────────
ROOT       = Path(__file__).resolve().parents[2]
NOTES_ROOT = ROOT / "DATA" / "VTU_CSE_Notes"
TB_ROOT    = ROOT / "DATA" / "VTU_CSE_Textbooks"
QP_ROOT    = ROOT / "DATA" / "question_papers"
OUT_DIR    = ROOT / "ml-pipeline" / "output"
PLAN_FILE  = OUT_DIR / "plan.json"
QP_INDEX   = ROOT / "DATA" / "question_paper_index.json"

OUT_P1   = OUT_DIR / "training_data_notes.jsonl"
OUT_P2   = OUT_DIR / "training_data_qpapers.jsonl"
LOG_FILE = OUT_DIR / "generation_log.txt"

OLLAMA_URL       = "http://127.0.0.1:11434/api/generate"
DEFAULT_MODEL    = "llama3.1:8b"   # use 8b — 1b too unreliable for structured JSON
PAIRS_PER_MODULE = 10
NUM_WORKERS      = 3               # parallel Ollama requests — overridable via --workers
_cfg = {"workers": NUM_WORKERS}    # mutable config avoids Python 3.14 global declaration issue

# Thread-safe write lock
_write_lock = threading.Lock()
_log_lock   = threading.Lock()

# ── subject names ─────────────────────────────────────────────────────────────
SUBJECT_NAMES = {
    "BCS301":  "Mathematics for Computer Science",
    "BCS302":  "Digital Design and Computer Organization",
    "BCS303":  "Operating Systems",
    "BCS304":  "Data Structures and Applications",
    "BCS306A": "Java Programming",
    "BCS306B": "C++ Programming",
    "BBOC407": "Biology for Computer Science",
    "BCS401":  "Analysis and Design of Algorithms",
    "BCS402":  "Microcontrollers and Embedded Systems",
    "BCS403":  "Database Management Systems",
    "BCS405A": "Discrete Mathematical Structures",
    "BCS405B": "Python Programming",
    "BUHK408": "Universal Human Values",
    "BCS501":  "Software Engineering and Project Management",
    "BCS502":  "Computer Networks",
    "BCS503":  "Theory of Computation",
    "BCS515B": "Cloud Computing and DevOps",
    "BRMK557": "Research Methodology",
    "BCS601":  "Compiler Design",
    "BCS602":  "Machine Learning",
    "BCS613A": "Mobile Application Development",
    "BCS613C": "Natural Language Processing",
    "BCV654C": "Computer Vision",
    "BCS701":  "Big Data Analytics",
    "BCS702":  "Deep Learning",
    "BCS703":  "Cloud Computing",
    "BCS714D": "Blockchain Technology",
}

# ── 3 compact prompt styles (shorter = faster generation) ────────────────────
# Each style is ~300 chars of prompt overhead — much shorter than before.
# Shorter prompts = fewer tokens in context = faster first token.
PROMPTS = [
    # Style A: explain + example
    (
        "You are a VTU exam tutor. Output ONLY valid JSON. No markdown. Start with {{ end with }}.\n"
        "Subject: {subj_code} {subj_name} Module {mod}\n"
        "Notes:\n{notes}\n\n"
        "Pick ONE topic. Generate a VTU 10-mark answer.\n"
        'JSON: {{"question":"<exam question>","subject_code":"{subj_code}","topic":"<topic name>",'
        '"module":{mod},"related_topics":["<t1>","<t2>"],"sections":['
        '{{"type":"concept","heading":"Definition","text":"<3-4 sentences>","key_terms":["<k1>","<k2>"]}},'
        '{{"type":"detail","heading":"Explanation","text":"<6-8 sentences thorough>","key_terms":["<k1>","<k2>"]}},'
        '{{"type":"how_it_works","heading":"Working","text":"1. step\\n2. step\\n3. step"}},'
        '{{"type":"example","heading":"Example","text":"<concrete VTU example>"}},'
        '{{"type":"conclusion","heading":"Conclusion","text":"<2-3 sentences>"}}]}}\n'
        "Output ONLY the JSON."
    ),
    # Style B: compare / differentiate
    (
        "You are a VTU exam tutor. Output ONLY valid JSON. No markdown. Start with {{ end with }}.\n"
        "Subject: {subj_code} {subj_name} Module {mod}\n"
        "Notes:\n{notes}\n\n"
        "Pick ONE topic pair to compare. Generate a VTU compare/differentiate answer.\n"
        'JSON: {{"question":"<compare X vs Y question>","subject_code":"{subj_code}","topic":"<topic>",'
        '"module":{mod},"related_topics":["<t1>","<t2>"],"sections":['
        '{{"type":"concept","heading":"Overview","text":"<3-4 sentences>","key_terms":["<k1>","<k2>"]}},'
        '{{"type":"detail","heading":"Detailed Explanation","text":"<6-8 sentences>","key_terms":["<k1>","<k2>"]}},'
        '{{"type":"comparison","heading":"Comparison Table","text":"<A vs B: 4-5 differences>"}},'
        '{{"type":"example","heading":"Example","text":"<example>"}},'
        '{{"type":"conclusion","heading":"Conclusion","text":"<2-3 sentences>"}}]}}\n'
        "Output ONLY the JSON."
    ),
    # Style C: algorithm / process with diagram
    (
        "You are a VTU exam tutor. Output ONLY valid JSON. No markdown. Start with {{ end with }}.\n"
        "Subject: {subj_code} {subj_name} Module {mod}\n"
        "Notes:\n{notes}\n\n"
        "Pick ONE algorithm or process. Generate a VTU answer with diagram reference.\n"
        'JSON: {{"question":"<explain X with neat diagram>","subject_code":"{subj_code}","topic":"<topic>",'
        '"module":{mod},"related_topics":["<t1>","<t2>"],"sections":['
        '{{"type":"concept","heading":"Definition","text":"<3-4 sentences>","key_terms":["<k1>","<k2>"]}},'
        '{{"type":"detail","heading":"Architecture","text":"<6-8 sentences>","key_terms":["<k1>","<k2>"]}},'
        '{{"type":"how_it_works","heading":"Algorithm","text":"1. step\\n2. step\\n3. step"}},'
        '{{"type":"diagram_ref","heading":"Diagram","diagram_tag":"{subj_code}-<topic-slug>-m{mod}-diagram"}},'
        '{{"type":"example","heading":"Example","text":"<example>"}},'
        '{{"type":"conclusion","heading":"Conclusion","text":"<2-3 sentences>"}}]}}\n'
        "Output ONLY the JSON."
    ),
]


# ── helpers ───────────────────────────────────────────────────────────────────
def log(msg: str):
    with _log_lock:
        print(msg, flush=True)
        try:
            with LOG_FILE.open("a", encoding="utf-8") as f:
                f.write(msg + "\n")
        except Exception:
            pass


def call_ollama(prompt: str, model: str, timeout: int = 90) -> str:
    """
    Single Ollama call. Optimised settings:
      num_predict: 800  — real answers are 300-500 tokens, 1800 was wasteful
      num_ctx: 1536     — notes chunk ~700 tokens, no need for 3072
      temperature: 0.2  — less sampling variance = faster
    """
    payload = json.dumps({
        "model": model,
        "prompt": prompt,
        "stream": False,
        "options": {
            "temperature": 0.2,
            "num_predict": 800,
            "num_ctx": 1536,
        },
    }).encode()
    req = urllib.request.Request(
        OLLAMA_URL, data=payload,
        headers={"Content-Type": "application/json"}, method="POST",
    )
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode()).get("response", "")


def parse_json(raw: str) -> dict:
    raw = re.sub(r"```(?:json)?|```", "", raw).strip()
    raw = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]", "", raw)
    raw = re.sub(r"^\s*\{[\.\s]+", "{", raw)
    raw = re.sub(r"\}\s*\n\s*\{", "}, {", raw)
    # Direct parse
    try:
        return json.loads(raw)
    except Exception:
        pass
    # Extract first {...}
    m = re.search(r"\{[\s\S]*\}", raw)
    if not m:
        raise ValueError("no JSON found")
    obj_str = m.group(0)
    try:
        return json.loads(obj_str)
    except json.JSONDecodeError:
        # Try to close truncated JSON
        for end in range(len(obj_str), len(obj_str) // 2, -1):
            cand = obj_str[:end]
            try:
                opens  = cand.count("[") - cand.count("]")
                braces = cand.count("{") - cand.count("}")
                result = json.loads(cand + "]" * max(0, opens) + "}" * max(0, braces))
                if isinstance(result, dict) and result.get("sections"):
                    return result
            except Exception:
                continue
    raise ValueError("could not parse JSON")


def validate(obj: dict) -> tuple[bool, str]:
    if not obj.get("question"):
        return False, "missing question"
    secs = obj.get("sections")
    if not secs or not isinstance(secs, list):
        return False, "missing sections"
    good = [s for s in secs
            if isinstance(s, dict) and (s.get("text") or s.get("diagram_tag"))]
    if not good:
        return False, "no valid sections"
    obj["sections"] = good
    types = {s.get("type") for s in good}
    if not (types & {"concept", "detail"}):
        return False, "missing concept/detail"
    return True, ""


def norm(q: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[^\w\s]", " ", q.lower())).strip()


def is_dup(q: str, seen: list, thresh: float = 0.80) -> bool:
    n = norm(q)
    return any(SequenceMatcher(None, n, s).ratio() > thresh for s in seen)


# ── resume helpers ─────────────────────────────────────────────────────────────
def done_module_counts(path: Path) -> dict:
    counts: dict = {}
    if not path.exists():
        return counts
    for line in path.read_text(encoding="utf-8", errors="ignore").splitlines():
        if not line.strip():
            continue
        try:
            obj = json.loads(line)
            key = f"{obj.get('subject_code', '')}:{obj.get('module', '')}"
            counts[key] = counts.get(key, 0) + 1
        except Exception:
            pass
    return counts


def done_questions(path: Path) -> set:
    qs: set = set()
    if not path.exists():
        return qs
    for line in path.read_text(encoding="utf-8", errors="ignore").splitlines():
        if not line.strip():
            continue
        try:
            obj = json.loads(line)
            q = obj.get("question", "")
            if q:
                qs.add(norm(q)[:60])
        except Exception:
            pass
    return qs


# ── notes loading ─────────────────────────────────────────────────────────────
def load_notes(subject_code: str, module_id: int) -> str:
    parts: list[str] = []
    key = f"module-{module_id}"

    # Primary: lecture notes
    for sem_dir in NOTES_ROOT.iterdir():
        if not sem_dir.is_dir():
            continue
        subj_dir = sem_dir / subject_code
        if not subj_dir.exists():
            continue
        for f in subj_dir.glob("*.txt"):
            name = f.name.lower()
            if key not in name or "question paper" in str(f.parent).lower():
                continue
            try:
                text = f.read_text(encoding="utf-8", errors="replace").strip()
                if len(text) < 300:
                    continue
                # Keep first 3000 chars max — we'll chunk further in prompts
                parts.insert(0, text[:3000]) if "-pdf" in name else parts.append(text[:2000])
            except Exception:
                pass
        if parts:
            break

    # Secondary: textbooks
    if TB_ROOT.exists():
        for sem_dir in TB_ROOT.iterdir():
            if not sem_dir.is_dir():
                continue
            for subj_dir in sem_dir.iterdir():
                if not subj_dir.is_dir():
                    continue
                if not subj_dir.name.upper().startswith(subject_code.upper()):
                    continue
                for f in subj_dir.glob("*.txt"):
                    try:
                        text = f.read_text(encoding="utf-8", errors="replace").strip()
                        if len(text) > 500:
                            parts.append(text[:1500])
                    except Exception:
                        pass
                break

    return "\n\n".join(parts[:3])


# ── single generation task (runs in thread) ───────────────────────────────────
def _gen_one(
    prompt: str,
    subj_code: str,
    mod_id: int | None,
    model: str,
) -> tuple[dict | None, str]:
    """Called from worker thread. Returns (obj, error_reason)."""
    try:
        raw = call_ollama(prompt, model)
        obj = parse_json(raw)
    except Exception as e:
        return None, str(e)

    ok, reason = validate(obj)
    if not ok:
        return None, reason

    obj["subject_code"] = subj_code
    if mod_id is not None:
        obj["module"] = mod_id
    return obj, ""


# ── Phase 1: parallel per-module notes generation ────────────────────────────
def run_phase1(target: int, model: str, fresh: bool, subject_filter: str | None):
    log("\n" + "=" * 60)
    log(f"  PHASE 1 -- Notes per module  [{_cfg['workers']} parallel workers]")
    log(f"  Model: {model}  |  Target: {target} pairs/module")
    log("=" * 60)

    if not PLAN_FILE.exists():
        log("  ERROR: plan.json not found")
        return

    plan     = json.loads(PLAN_FILE.read_text(encoding="utf-8"))["subjects"]
    done     = {} if fresh else done_module_counts(OUT_P1)
    total_new = 0
    t0 = time.time()

    for subj_code in sorted(plan.keys()):
        if subject_filter and subj_code != subject_filter:
            continue
        subj_name = SUBJECT_NAMES.get(subj_code, subj_code)
        modules   = plan[subj_code]["eligible_modules"]

        for mod_id in modules:
            key      = f"{subj_code}:{mod_id}"
            existing = done.get(key, 0)
            need     = target - existing
            if need <= 0:
                log(f"  [{subj_code} M{mod_id}] done ({existing}) -- skip")
                continue

            notes = load_notes(subj_code, mod_id)
            if not notes.strip():
                log(f"  [{subj_code} M{mod_id}] no notes -- skip")
                continue

            note_len = len(notes)
            accepted = 0
            seen_topics: list[str] = []
            t_mod = time.time()

            log(f"\n  [{subj_code} M{mod_id}] {subj_name} -- need {need} pairs")

            # Build a pool of prompts (4x need — expect some failures/dups)
            # Use shorter 1200-char chunks for faster generation
            num_prompts = need * 4
            prompt_args = []
            for i in range(num_prompts):
                offset = (i * 1200) % max(1, note_len - 1300)
                chunk  = notes[offset: offset + 1200]
                style  = PROMPTS[i % len(PROMPTS)]
                prompt = style.format(
                    subj_code=subj_code, subj_name=subj_name,
                    mod=mod_id, notes=chunk,
                )
                prompt_args.append((prompt, subj_code, mod_id, model))

            # Fire _cfg["workers"] threads concurrently
            with ThreadPoolExecutor(max_workers=_cfg["workers"]) as pool:
                futures = {
                    pool.submit(_gen_one, *args): i
                    for i, args in enumerate(prompt_args)
                }

                completed = 0
                for fut in as_completed(futures):
                    completed += 1

                    if accepted >= need:
                        # Cancel remaining futures (best effort)
                        for f in futures:
                            f.cancel()
                        break

                    obj, err = fut.result()
                    if obj is None:
                        continue

                    topic = obj.get("topic", obj.get("question", ""))
                    if is_dup(topic, seen_topics):
                        continue

                    # Thread-safe write
                    with _write_lock:
                        with OUT_P1.open("a", encoding="utf-8") as f:
                            f.write(json.dumps(obj, ensure_ascii=False) + "\n")

                    seen_topics.append(norm(topic))
                    done[key] = done.get(key, 0) + 1
                    accepted  += 1
                    total_new += 1
                    elapsed   = time.time() - t_mod
                    log(f"    OK [{accepted}/{need}] {topic[:50]}  ({elapsed:.0f}s)")

    elapsed = time.time() - t0
    log(f"\n  Phase 1 done -- {total_new} new pairs in {elapsed / 60:.1f} min")
    log(f"  Output: {OUT_P1}")


# ── Phase 2: parallel QP answer generation ───────────────────────────────────
def extract_questions_from_md(md_text: str) -> list[str]:
    q_re = re.compile(
        r"^(?:Q\s*[\.\d]+\s*[a-z]?[\.\)]\s*"
        r"|\d+\s*[\.\)]\s*[a-z]\s*[\.\)]\s*"
        r"|\d+\s*[\.\)]\s*"
        r"|[a-z]\s*[\.\)]\s*)",
        re.IGNORECASE,
    )
    questions: list[str] = []
    current:   list[str] = []
    in_q = False

    for line in md_text.splitlines():
        line = line.strip()
        if not line:
            if in_q and current:
                q = " ".join(current).strip()
                if _valid_q(q):
                    questions.append(q)
                current, in_q = [], False
            continue
        if q_re.match(line):
            if in_q and current:
                q = " ".join(current).strip()
                if _valid_q(q):
                    questions.append(q)
                current = []
            text = q_re.sub("", line).strip()
            if text:
                current, in_q = [text], True
        elif in_q:
            current.append(line)

    if in_q and current:
        q = " ".join(current).strip()
        if _valid_q(q):
            questions.append(q)

    seen: list[str] = []
    uniq: list[str] = []
    for q in questions:
        if not is_dup(q, seen, 0.85):
            uniq.append(q)
            seen.append(norm(q))
    return uniq


def _valid_q(text: str) -> bool:
    if len(text) < 15:
        return False
    if re.match(r"^\d+\s*(marks?|M\s*\d+)?\s*$", text, re.IGNORECASE):
        return False
    if re.match(r"^(module|OR|AND)\b", text, re.IGNORECASE):
        return False
    return bool(re.search(
        r"\b(explain|define|describe|discuss|what|write|list|compare|"
        r"differentiate|design|derive|state|illustrate|draw|find|"
        r"evaluate|implement|analyse|analyze|outline|with\s+neat\s+diagram)\b",
        text, re.IGNORECASE,
    ))


QP_PROMPT = (
    "You are a VTU exam tutor. Output ONLY valid JSON. No markdown. Start with {{ end with }}.\n"
    "Subject: {subj_code} {subj_name}\n"
    "VTU question: \"{question}\"\n"
    "Generate a complete model answer.\n"
    'JSON: {{"question":"{question}","subject_code":"{subj_code}","topic":"<topic>","module":null,'
    '"related_topics":["<t1>","<t2>"],"sections":['
    '{{"type":"concept","heading":"Definition","text":"<3-4 sentences>","key_terms":["<k>"]}},'
    '{{"type":"detail","heading":"Explanation","text":"<6-8 sentences thorough>","key_terms":["<k>"]}},'
    '{{"type":"how_it_works","heading":"Working","text":"1. step\\n2. step\\n3. step"}},'
    '{{"type":"example","heading":"Example","text":"<example>"}},'
    '{{"type":"conclusion","heading":"Conclusion","text":"<2-3 sentences>"}}]}}\n'
    "Output ONLY the JSON."
)


def run_phase2(model: str, fresh: bool, subject_filter: str | None):
    log("\n" + "=" * 60)
    log(f"  PHASE 2 -- Question paper answers  [{_cfg['workers']} parallel workers]")
    log(f"  Model: {model}")
    log("=" * 60)

    if not QP_INDEX.exists():
        log("  ERROR: question_paper_index.json not found")
        return

    qp_index  = json.loads(QP_INDEX.read_text(encoding="utf-8"))
    done      = set() if fresh else done_questions(OUT_P2)
    total_new = 0
    t0        = time.time()

    for subj_code in sorted(qp_index.keys()):
        if subject_filter and subj_code != subject_filter:
            continue

        subj_name = SUBJECT_NAMES.get(subj_code, subj_code)
        sem       = qp_index[subj_code].get("sem", "")
        qp_dir    = QP_ROOT / sem / subj_code

        all_qs: list[str] = []
        for md_name in ["model_papers.md", "previous_papers.md", "important_questions.md"]:
            md_path = qp_dir / md_name
            if md_path.exists():
                try:
                    qs = extract_questions_from_md(
                        md_path.read_text(encoding="utf-8", errors="replace")
                    )
                    all_qs.extend(qs)
                except Exception:
                    pass

        if not all_qs:
            log(f"  [{subj_code}] no questions -- skip")
            continue

        seen_qs: list[str] = []
        unique_qs: list[str] = []
        for q in all_qs:
            if not is_dup(q, seen_qs):
                unique_qs.append(q)
                seen_qs.append(norm(q))

        pending = [q for q in unique_qs if norm(q)[:60] not in done]
        if not pending:
            log(f"  [{subj_code}] all done -- skip")
            continue

        log(f"\n  [{subj_code}] {subj_name} -- {len(pending)} questions")
        subj_new = 0

        # Build prompt args for all pending questions
        prompt_args = []
        for question in pending:
            prompt = QP_PROMPT.format(
                subj_code=subj_code,
                subj_name=subj_name,
                question=question.replace('"', "'"),
            )
            prompt_args.append((prompt, subj_code, None, model))

        # Run in parallel
        with ThreadPoolExecutor(max_workers=_cfg["workers"]) as pool:
            future_to_q = {
                pool.submit(_gen_one, *args): pending[i]
                for i, args in enumerate(prompt_args)
            }

            for fut in as_completed(future_to_q):
                question = future_to_q[fut]
                obj, err = fut.result()

                if obj is None:
                    log(f"    FAIL: {question[:50]}... ({err})")
                    continue

                # Preserve original question text
                obj["question"]     = question
                obj["subject_code"] = subj_code

                with _write_lock:
                    with OUT_P2.open("a", encoding="utf-8") as f:
                        f.write(json.dumps(obj, ensure_ascii=False) + "\n")

                done.add(norm(question)[:60])
                total_new += 1
                subj_new  += 1
                log(f"    OK [{subj_new}] {obj.get('topic', '')[:40]} | {question[:45]}...")

    elapsed = time.time() - t0
    log(f"\n  Phase 2 done -- {total_new} new pairs in {elapsed / 60:.1f} min")
    log(f"  Output: {OUT_P2}")


# ── merge all sources into train/val/test splits ──────────────────────────────
def merge_all():
    combined  = OUT_DIR / "training_data_combined.jsonl"
    train_out = OUT_DIR / "train.jsonl"
    val_out   = OUT_DIR / "val.jsonl"
    test_out  = OUT_DIR / "test.jsonl"

    sources = [
        OUT_DIR / "training_data.jsonl",           # original 160 pairs
        OUT_DIR / "training_data_textbooks.jsonl", # textbook run
        OUT_P1,                                    # Phase 1 notes
        OUT_P2,                                    # Phase 2 QP answers
    ]

    all_pairs: list[str] = []
    seen_qs:   list[str] = []

    for src in sources:
        if not src.exists():
            continue
        src_count = 0
        for line in src.read_text(encoding="utf-8", errors="ignore").splitlines():
            line = line.strip()
            if not line:
                continue
            try:
                obj = json.loads(line)
                q   = norm(obj.get("question", ""))[:60]
                if q and not is_dup(q, seen_qs):
                    all_pairs.append(line)
                    seen_qs.append(q)
                    src_count += 1
            except Exception:
                pass
        log(f"  {src.name}: {src_count} pairs")

    if not all_pairs:
        log("  No pairs found!")
        return 0

    random.seed(42)
    random.shuffle(all_pairs)

    n       = len(all_pairs)
    n_val   = max(1, int(n * 0.10))
    n_test  = max(1, int(n * 0.10))
    n_train = n - n_val - n_test

    for path, pairs in [
        (combined,  all_pairs),
        (train_out, all_pairs[:n_train]),
        (val_out,   all_pairs[n_train: n_train + n_val]),
        (test_out,  all_pairs[n_train + n_val:]),
    ]:
        path.write_text("\n".join(pairs) + "\n", encoding="utf-8")

    log(f"\n  Combined : {n} unique pairs -> {combined}")
    log(f"  Train    : {n_train} pairs  -> {train_out}")
    log(f"  Val      : {n_val} pairs    -> {val_out}")
    log(f"  Test     : {n_test} pairs   -> {test_out}")
    return n


# ── main ──────────────────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(
        description="Generate VTU training data via Ollama (parallel, fast)"
    )
    parser.add_argument("--subject",    help="Single subject code e.g. BCS502")
    parser.add_argument("--phase",      type=int, choices=[1, 2])
    parser.add_argument("--target",     type=int, default=PAIRS_PER_MODULE,
                        help=f"Pairs per module for Phase 1 (default {PAIRS_PER_MODULE})")
    parser.add_argument("--model",      default=DEFAULT_MODEL,
                        help=f"Ollama model (default {DEFAULT_MODEL})")
    parser.add_argument("--workers",    type=int, default=NUM_WORKERS,
                        help="Parallel workers (default 3)")
    parser.add_argument("--fresh",      action="store_true",
                        help="Ignore resume state — regenerate everything")
    parser.add_argument("--merge-only", action="store_true",
                        help="Skip generation, just merge existing files")
    args = parser.parse_args()

    # Update global worker count if overridden
    _cfg["workers"] = args.workers

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    if args.merge_only:
        log("Merging all datasets...")
        n = merge_all()
        log(f"\nDone -- {n} total pairs")
        return

    log(f"Model      : {args.model}")
    log(f"Workers    : {_cfg['workers']} parallel")
    log(f"Subject    : {args.subject or 'ALL'}")
    log(f"Phase      : {args.phase or '1 + 2'}")
    log(f"Target/mod : {args.target}")
    log(f"num_predict: 800  num_ctx: 1536  (optimised for speed)")
    log("")

    t_all = time.time()

    if args.phase != 2:
        run_phase1(args.target, args.model, args.fresh, args.subject)
    if args.phase != 1:
        run_phase2(args.model, args.fresh, args.subject)

    if not args.phase:
        log("\nMerging all datasets...")
        n = merge_all()
        elapsed = (time.time() - t_all) / 60
        log("\n" + "=" * 60)
        log(f"  ALL DONE -- {n} unique pairs in {elapsed:.1f} min total")
        log(f"  Next: py -3.11 training/train_lora.py --data output/train.jsonl")
        log("=" * 60)


if __name__ == "__main__":
    main()
