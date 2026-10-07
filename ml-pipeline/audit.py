"""Full audit of AdaptLearn training pipeline state."""
import json
from pathlib import Path

ROOT = Path(r"d:\Adaptlearn")
OUT  = ROOT / "ml-pipeline" / "output"

print("=" * 60)
print("  GENERATED TRAINING DATA")
print("=" * 60)
files = {
    "training_data.jsonl (original notes)":        OUT / "training_data.jsonl",
    "training_data_textbooks.jsonl":                OUT / "training_data_textbooks.jsonl",
    "training_data_notes.jsonl (per-module notes)": OUT / "training_data_notes.jsonl",
    "training_data_qpapers.jsonl (PYQ answers)":   OUT / "training_data_qpapers.jsonl",
    "training_data_combined.jsonl (final merge)":  OUT / "training_data_combined.jsonl",
}
grand_total = 0
for name, f in files.items():
    if not f.exists():
        print(f"  {name}: NOT GENERATED")
        continue
    lines = [l for l in f.read_text(encoding="utf-8", errors="replace").splitlines() if l.strip()]
    grand_total += len(lines)
    subjs = {}
    for l in lines:
        try:
            o = json.loads(l)
            s = o.get("subject_code", "?")
            subjs[s] = subjs.get(s, 0) + 1
        except:
            pass
    print(f"  {name}")
    print(f"    Pairs: {len(lines)}  |  Subjects covered: {sorted(subjs.keys())}")

print(f"\n  TOTAL PAIRS SO FAR: {grand_total}")

print()
print("=" * 60)
print("  TARGET (from plan.json)")
print("=" * 60)
plan = json.loads((OUT / "plan.json").read_text())["subjects"]
total_modules = sum(len(v["eligible_modules"]) for v in plan.values())
print(f"  Subjects in plan : {len(plan)}")
print(f"  Total modules    : {total_modules}")
print(f"  Target @10/module: {total_modules * 10} pairs")
print(f"  Generated so far : {grand_total}")
print(f"  Still needed     : {max(0, total_modules * 10 - grand_total)}")

# Which subjects are done vs pending
notes_f = OUT / "training_data_notes.jsonl"
done_subjs = set()
done_modules = {}
if notes_f.exists():
    for line in notes_f.read_text(encoding="utf-8", errors="replace").splitlines():
        if not line.strip():
            continue
        try:
            o = json.loads(line)
            s = o.get("subject_code", "")
            m = o.get("module", 0)
            key = f"{s}:M{m}"
            done_modules[key] = done_modules.get(key, 0) + 1
            done_subjs.add(s)
        except:
            pass

all_subjs = sorted(plan.keys())
pending_subjs = [s for s in all_subjs if s not in done_subjs]
print(f"\n  Subjects with data : {sorted(done_subjs)}")
print(f"  Subjects pending   : {pending_subjs}")

print()
print("=" * 60)
print("  QUESTION PAPERS (Phase 0 output)")
print("=" * 60)
qp = ROOT / "DATA" / "question_papers"
if qp.exists():
    mds = list(qp.rglob("*.md"))
    print(f"  Total .md files: {len(mds)}")
    for t in ["model_papers", "previous_papers", "important_questions", "textbook_notes"]:
        count = len([f for f in mds if f.name == t + ".md"])
        print(f"    {t}.md : {count} subjects")
else:
    print("  question_papers/ : NOT FOUND")

print()
print("=" * 60)
print("  DIAGRAMS (Phase 3 output)")
print("=" * 60)
dm = ROOT / "DATA" / "diagram_topic_map.json"
if dm.exists():
    d = json.loads(dm.read_text(encoding="utf-8"))
    total_diag = sum(len(v) for v in d.values())
    print(f"  Tagged diagrams  : {total_diag}")
    print(f"  Subjects covered : {len(d)}")
    print(f"  Subject list     : {sorted(d.keys())}")
    uploads = ROOT / "backend" / "uploads" / "diagrams"
    if uploads.exists():
        copied = list(uploads.rglob("*.png"))
        print(f"  PNGs in uploads/ : {len(copied)}")
else:
    print("  diagram_topic_map.json: NOT FOUND")

print()
print("=" * 60)
print("  MODEL TRAINING")
print("=" * 60)
checkpoints = (
    list(OUT.glob("checkpoint-*")) +
    list(OUT.glob("adaptlearn*")) +
    list(OUT.glob("*.gguf")) +
    list(OUT.glob("*.bin"))
)
print(f"  Checkpoint files : {len(checkpoints)}")
modelfile = OUT / "Modelfile"
print(f"  Modelfile        : {'EXISTS' if modelfile.exists() else 'NOT FOUND'}")
train_req = ROOT / "ml-pipeline" / "training" / "requirements.txt"
print(f"  training/requirements.txt: {'EXISTS' if train_req.exists() else 'NOT FOUND'}")

print()
print("=" * 60)
print("  SUMMARY: WHAT IS DONE vs PENDING")
print("=" * 60)
steps = [
    ("Phase 0: Question papers -> .md files", len(list(qp.rglob("*.md"))) > 0 if qp.exists() else False),
    ("Phase 1: Per-module notes QA generation", notes_f.exists() and grand_total > 0),
    ("Phase 2: PYQ/model paper answers", (OUT / "training_data_qpapers.jsonl").exists()),
    ("Phase 3: Diagram topic map", dm.exists()),
    ("Phase 3: Images copied to backend/uploads", len(list((ROOT/"backend"/"uploads"/"diagrams").rglob("*.png"))) > 0 if (ROOT/"backend"/"uploads"/"diagrams").exists() else False),
    ("Merge: training_data_combined.jsonl", (OUT / "training_data_combined.jsonl").exists()),
    ("Training: model checkpoint exists", len(checkpoints) > 0),
    ("Training: Modelfile exists", modelfile.exists()),
]
for desc, done in steps:
    icon = "OK" if done else "PENDING"
    print(f"  [{icon:7}] {desc}")
