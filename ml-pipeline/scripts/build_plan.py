"""
build_plan.py
-------------
Scans DATA/VTU_CSE_Notes and builds plan.json — a dict of
{ subject_code: { eligible_modules: [...], total_modules: N } }
Only modules that have a *-pdf.txt or *-written.txt notes file are included.
Run from the ml-pipeline directory:
    python scripts/build_plan.py
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]  # d:/Adaptlearn
NOTES_ROOT = ROOT / "DATA" / "VTU_CSE_Notes"
OUT = ROOT / "ml-pipeline" / "output" / "plan.json"

MODULE_RE = re.compile(r"module[-_](\d+)", re.IGNORECASE)
VALID_SUFFIXES = {"-pdf.txt", "-pdf-1.txt", "-written.txt", "-textbook.txt"}


def is_notes_file(name: str) -> bool:
    name_lower = name.lower()
    return any(name_lower.endswith(s) for s in VALID_SUFFIXES)


def build() -> dict:
    plan: dict = {}
    for subject_dir in NOTES_ROOT.rglob("*"):
        if not subject_dir.is_dir():
            continue
        # skip question papers folder
        if "question paper" in subject_dir.name.lower():
            continue
        # collect txt files directly in this subject folder (not in sub-dirs)
        subject_code = subject_dir.name
        modules: set[int] = set()
        for f in subject_dir.iterdir():
            if not f.is_file():
                continue
            if not is_notes_file(f.name):
                continue
            m = MODULE_RE.search(f.name)
            if m:
                modules.add(int(m.group(1)))
        if modules:
            plan[subject_code] = {
                "eligible_modules": sorted(modules),
                "total_modules": max(modules),
            }
    return {"subjects": plan}


if __name__ == "__main__":
    OUT.parent.mkdir(parents=True, exist_ok=True)
    plan = build()
    OUT.write_text(json.dumps(plan, indent=2), encoding="utf-8")
    total = sum(len(v["eligible_modules"]) for v in plan["subjects"].values())
    print(f"Found {len(plan['subjects'])} subjects, {total} eligible modules.")
    print(f"Written to {OUT}")
