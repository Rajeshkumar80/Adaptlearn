import json
from pathlib import Path

OUT = Path(r"d:\Adaptlearn\ml-pipeline\output")

files = [
    "training_data.jsonl",
    "training_data_notes.jsonl",
    "training_data_qpapers.jsonl",
    "training_data_textbooks.jsonl",
    "training_data_combined.jsonl",
    "train.jsonl",
    "val.jsonl",
    "test.jsonl",
]

print("=== DATA FILES ===")
grand = 0
for fname in files:
    f = OUT / fname
    if not f.exists():
        print(f"  {fname}: NOT FOUND")
        continue
    lines = [l for l in f.read_text(encoding="utf-8", errors="replace").splitlines() if l.strip()]
    mb = round(f.stat().st_size / 1e6, 1)
    grand += len(lines)
    print(f"  {fname}: {len(lines)} pairs  ({mb} MB)")

print(f"\n  GRAND TOTAL: {grand} pairs")

# Per-subject breakdown of notes
print("\n=== PER SUBJECT (training_data_notes.jsonl) ===")
f = OUT / "training_data_notes.jsonl"
if f.exists():
    by_subj = {}
    for l in f.read_text(encoding="utf-8", errors="replace").splitlines():
        if not l.strip(): continue
        try:
            s = json.loads(l).get("subject_code", "?")
            by_subj[s] = by_subj.get(s, 0) + 1
        except: pass
    subjects_25 = ['BBOC407','BCS301','BCS302','BCS303','BCS304','BCS306A',
                   'BCS401','BCS402','BCS403','BCS405A','BUHK408','BCS501',
                   'BCS502','BCS503','BCS515B','BRMK557','BCS601','BCS602',
                   'BCS613A','BCS613C','BCV654C','BCS701','BCS702','BCS703','BCS714D']
    done_count = 0; pending_count = 0
    for s in subjects_25:
        have = by_subj.get(s, 0)
        status = "DONE" if have >= 2000 else f"have {have}"
        if have >= 2000: done_count += 1
        else: pending_count += 1
        print(f"  {s:12} {status}")
    print(f"\n  Done(>=2000): {done_count}/25   Pending: {pending_count}/25")

print("\n=== READY TO TRAIN? ===")
train_f = OUT / "train.jsonl"
if train_f.exists():
    n = len([l for l in train_f.read_text(encoding="utf-8", errors="replace").splitlines() if l.strip()])
    if n > 5000:
        print(f"  YES -- train.jsonl has {n} pairs")
        print(f"  Command: py -3.11 training/train_lora.py --data output/train.jsonl --val output/val.jsonl --epochs 3")
    else:
        print(f"  NO -- train.jsonl only has {n} pairs (need >5000)")
else:
    print("  NO -- train.jsonl does not exist")
