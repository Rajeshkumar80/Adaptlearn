"""Check exactly what's pending vs done."""
import json
from pathlib import Path

OUT  = Path(r"d:\Adaptlearn\ml-pipeline\output")
plan = json.loads((OUT / "plan.json").read_text())["subjects"]

done = {}
for fname in ["training_data.jsonl", "training_data_notes.jsonl"]:
    p = OUT / fname
    if not p.exists():
        continue
    for l in p.read_text(encoding="utf-8", errors="replace").splitlines():
        if not l.strip():
            continue
        try:
            o = json.loads(l)
            k = f"{o.get('subject_code','')}:{o.get('module','')}"
            done[k] = done.get(k, 0) + 1
        except:
            pass

pending = []
for subj, info in sorted(plan.items()):
    for mod in info["eligible_modules"]:
        k = f"{subj}:{mod}"
        have = done.get(k, 0)
        need = max(0, 10 - have)
        if need > 0:
            pending.append((subj, mod, have, need))

print(f"Pending modules: {len(pending)}")
print(f"Pending pairs needed: {sum(p[3] for p in pending)}")
print()
for subj, mod, have, need in pending:
    print(f"  {subj} M{mod}: have {have}, need {need} more")
