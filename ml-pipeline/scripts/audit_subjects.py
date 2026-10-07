"""
audit_subjects.py
-----------------
Prints a table of every subject: how many modules have notes, whether
textbook files are present, and whether question paper files are present.
Run:  python scripts/audit_subjects.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
NOTES_ROOT = ROOT / "DATA" / "VTU_CSE_Notes"
MODULE_RE = re.compile(r"module[-_](\d+)", re.IGNORECASE)

header = f"{'Subject':<14} {'Sem':<8} {'Modules':>7} {'Textbook':>9} {'QP':>5}"
print(header)
print("-" * len(header))

for sem_dir in sorted(NOTES_ROOT.iterdir()):
    if not sem_dir.is_dir():
        continue
    sem_name = sem_dir.name
    for subject_dir in sorted(sem_dir.iterdir()):
        if not subject_dir.is_dir():
            continue
        subject_code = subject_dir.name
        modules: set[int] = set()
        has_textbook = False
        has_qp = False
        for f in subject_dir.rglob("*.txt"):
            name = f.name.lower()
            m = MODULE_RE.search(name)
            if m and ("-pdf" in name or "-written" in name):
                modules.add(int(m.group(1)))
            if "textbook" in name:
                has_textbook = True
            if "question paper" in str(f.parent).lower() or "dec-" in name or "june" in name or "model" in name:
                has_qp = True
        row = (
            f"{subject_code:<14} {sem_name:<8} {len(modules):>7} "
            f"{'yes' if has_textbook else 'no':>9} {'yes' if has_qp else 'no':>5}"
        )
        print(row)
