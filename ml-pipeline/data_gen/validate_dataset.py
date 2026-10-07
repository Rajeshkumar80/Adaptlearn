"""
validate_dataset.py
-------------------
Validates, deduplicates, and reports stats on the generated JSONL dataset.

Usage:
    python data_gen/validate_dataset.py [--input output/training_data.jsonl]
                                         [--fix]   # write cleaned version alongside
"""

import argparse
import json
import re
from collections import Counter
from difflib import SequenceMatcher
from pathlib import Path

ML_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_IN = ML_ROOT / "output" / "training_data.jsonl"

REQUIRED_KEYS = {"question", "subject_code", "module", "marks", "co_reference", "sections"}
VALID_SECTION_TYPES = {"definition", "explanation", "diagram", "example", "numerical-step", "conclusion"}
VALID_MARKS = {2, 5, 10}


def normalize_q(q: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[^\w\s]", " ", q.lower())).strip()


def validate_pair(obj: dict) -> list[str]:
    errors = []
    missing = REQUIRED_KEYS - set(obj.keys())
    if missing:
        errors.append(f"missing keys: {missing}")
        return errors
    if obj["marks"] not in VALID_MARKS:
        errors.append(f"invalid marks: {obj['marks']}")
    sections = obj.get("sections", [])
    if not sections:
        errors.append("empty sections")
        return errors
    types = [s.get("type") for s in sections]
    for t in types:
        if t not in VALID_SECTION_TYPES:
            errors.append(f"invalid section type: {t}")
    marks = obj.get("marks")
    if marks == 2 and types != ["definition"]:
        errors.append(f"2-mark should have [definition] only, got {types}")
    elif marks == 5:
        if "definition" not in types:
            errors.append("5-mark missing definition section")
        if "explanation" not in types:
            errors.append("5-mark missing explanation section")
    elif marks == 10:
        for req in ("definition", "explanation", "example", "conclusion"):
            if req not in types:
                errors.append(f"10-mark missing {req} section")
    if not str(obj.get("question", "")).strip():
        errors.append("empty question")
    if not str(obj.get("co_reference", "")).strip():
        errors.append("empty co_reference")
    return errors


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, default=DEFAULT_IN)
    parser.add_argument("--fix", action="store_true", help="Write deduplicated clean file")
    parser.add_argument("--sim", type=float, default=0.85, help="Similarity threshold for dedup")
    args = parser.parse_args()

    if not args.input.exists():
        print(f"File not found: {args.input}")
        return

    lines = args.input.read_text(encoding="utf-8").splitlines()
    total = 0
    valid = 0
    errors_total = 0
    marks_counter: Counter = Counter()
    subject_counter: Counter = Counter()
    error_examples: list[str] = []

    accepted_qs: list[str] = []
    clean_pairs: list[dict] = []
    duplicate_count = 0

    for i, line in enumerate(lines, 1):
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
        except json.JSONDecodeError as e:
            error_examples.append(f"Line {i}: JSON parse error — {e}")
            errors_total += 1
            total += 1
            continue

        total += 1
        errs = validate_pair(obj)
        if errs:
            errors_total += 1
            if len(error_examples) < 10:
                error_examples.append(f"Line {i} [{obj.get('subject_code','?')} M{obj.get('module','?')}]: {errs}")
        else:
            valid += 1
            marks_counter[obj["marks"]] += 1
            subject_counter[obj["subject_code"]] += 1
            # dedup check
            qn = normalize_q(obj["question"])
            is_dup = any(
                SequenceMatcher(None, qn, prev).ratio() > args.sim
                for prev in accepted_qs
            )
            if is_dup:
                duplicate_count += 1
            else:
                accepted_qs.append(qn)
                clean_pairs.append(obj)

    print("=" * 55)
    print("DATASET VALIDATION REPORT")
    print("=" * 55)
    print(f"Total lines:     {total}")
    print(f"Valid:           {valid}")
    print(f"Errors:          {errors_total}")
    print(f"Duplicates:      {duplicate_count}")
    print(f"Clean unique:    {len(clean_pairs)}")
    print()
    print("Marks distribution:")
    for m in sorted(marks_counter):
        print(f"  {m:2d} marks: {marks_counter[m]}")
    print()
    print(f"Subjects covered: {len(subject_counter)}")
    for s, n in sorted(subject_counter.items(), key=lambda x: -x[1])[:10]:
        print(f"  {s}: {n}")
    if len(subject_counter) > 10:
        print(f"  ... and {len(subject_counter)-10} more")
    if error_examples:
        print()
        print("Sample errors:")
        for e in error_examples:
            print(f"  {e}")

    if args.fix and clean_pairs:
        clean_out = args.input.with_name(args.input.stem + "_clean.jsonl")
        with clean_out.open("w", encoding="utf-8") as f:
            for p in clean_pairs:
                f.write(json.dumps(p, ensure_ascii=False) + "\n")
        print(f"\nClean file written: {clean_out} ({len(clean_pairs)} pairs)")


if __name__ == "__main__":
    main()
