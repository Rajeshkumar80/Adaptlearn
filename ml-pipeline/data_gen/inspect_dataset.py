"""
inspect_dataset.py
------------------
Interactive browser for the training dataset.

Usage:
    python data_gen/inspect_dataset.py [--input output/training_data.jsonl]
                                        [--subject BCS701] [--marks 10]
                                        [--n 5]
"""

import argparse
import json
import random
from pathlib import Path

ML_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_IN = ML_ROOT / "output" / "training_data.jsonl"


def render_pair(qa: dict) -> None:
    print(f"\n{'─'*60}")
    print(f"Subject: {qa.get('subject_code')}  Module: {qa.get('module')}  "
          f"Marks: {qa.get('marks')}  CO: {qa.get('co_reference')}")
    print(f"Q: {qa.get('question')}")
    for s in qa.get("sections", []):
        stype = s.get("type", "").upper()
        heading = s.get("heading", stype)
        print(f"\n  [{stype}] {heading}")
        if s.get("text"):
            print(f"  {s['text'][:300]}")
        if s.get("key_terms"):
            print(f"  key_terms: {s['key_terms']}")
        if s.get("diagram_tag"):
            print(f"  diagram_tag: {s['diagram_tag']}")
    print()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, default=DEFAULT_IN)
    parser.add_argument("--subject", help="Filter by subject code")
    parser.add_argument("--marks", type=int, help="Filter by marks (2/5/10)")
    parser.add_argument("--n", type=int, default=5, help="Number of samples to show")
    parser.add_argument("--all", action="store_true", help="Show all (no sampling)")
    args = parser.parse_args()

    if not args.input.exists():
        print(f"File not found: {args.input}")
        return

    pairs = []
    for line in args.input.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
            if args.subject and obj.get("subject_code") != args.subject:
                continue
            if args.marks and obj.get("marks") != args.marks:
                continue
            pairs.append(obj)
        except Exception:
            pass

    print(f"Total matching pairs: {len(pairs)}")
    if not pairs:
        return

    sample = pairs if args.all else random.sample(pairs, min(args.n, len(pairs)))
    for qa in sample:
        render_pair(qa)


if __name__ == "__main__":
    main()
