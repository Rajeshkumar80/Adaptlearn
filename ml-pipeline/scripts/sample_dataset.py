"""
sample_dataset.py
=================
Takes a smart sample from the large generated dataset.
Ensures even coverage: every subject + every section type represented.
Target: 3,000 pairs (ideal for Qwen2.5-1.5B fine-tuning, ~2-3 hr training).

Usage:
  python scripts/sample_dataset.py
  python scripts/sample_dataset.py --target 2000
  python scripts/sample_dataset.py --target 5000
"""
import argparse, json, random
from pathlib import Path
from difflib import SequenceMatcher

ROOT    = Path(__file__).resolve().parents[2]
OUT_DIR = ROOT / "ml-pipeline" / "output"

SOURCES = [
    OUT_DIR / "training_data.jsonl",           # old format (160 pairs - keep all)
    OUT_DIR / "training_data_textbooks.jsonl", # (25 pairs - keep all)
    OUT_DIR / "training_data_qpapers.jsonl",   # PYQ pairs
    OUT_DIR / "training_data_notes.jsonl",     # notes pairs (large)
]

def norm(q):
    import re
    return re.sub(r"\s+"," ",re.sub(r"[^\w\s]"," ",q.lower())).strip()

def is_dup(q, seen, thresh=0.82):
    n = norm(q)
    return any(SequenceMatcher(None,n,s).ratio()>thresh for s in seen)

def load_all():
    all_pairs = []
    for src in SOURCES:
        if not src.exists(): continue
        for line in src.read_text(encoding="utf-8", errors="ignore").splitlines():
            line = line.strip()
            if not line: continue
            try:
                obj = json.loads(line)
                if obj.get("question") and obj.get("sections"):
                    all_pairs.append(obj)
            except: pass
    return all_pairs

def sample_smart(all_pairs, target):
    """
    Smart sampling strategy:
    1. Keep ALL old-format pairs (160+25=185) — best quality
    2. Keep ALL PYQ pairs (real exam questions — highest value)
    3. Sample notes pairs evenly by subject
    4. Within notes, prefer pairs with more section types
    5. Deduplicate
    """
    # Separate by source type
    old_format  = [p for p in all_pairs if p.get("marks") is not None]  # old format
    pyq_pairs   = [p for p in all_pairs
                   if p.get("module") is None and p.get("marks") is None]
    notes_pairs = [p for p in all_pairs
                   if p.get("module") is not None and p.get("marks") is None]

    print(f"  Old format : {len(old_format)}")
    print(f"  PYQ pairs  : {len(pyq_pairs)}")
    print(f"  Notes pairs: {len(notes_pairs)}")

    # Score notes pairs by richness (more section types = higher score)
    def richness(p):
        types = {s.get("type","") for s in p.get("sections",[])}
        score = 0
        if "concept"      in types: score += 2
        if "detail"       in types: score += 2
        if "how_it_works" in types: score += 2
        if "example"      in types: score += 1
        if "diagram_ref"  in types: score += 1
        if "conclusion"   in types: score += 1
        # Prefer longer detail sections
        for s in p.get("sections",[]):
            if s.get("type") == "detail":
                score += min(3, len(s.get("text","")) // 150)
        return score

    # Sort notes by richness, group by subject
    by_subject = {}
    for p in notes_pairs:
        sc = p.get("subject_code","?")
        if sc not in by_subject:
            by_subject[sc] = []
        by_subject[sc].append(p)

    # Sort each subject's pairs by richness
    for sc in by_subject:
        by_subject[sc].sort(key=richness, reverse=True)

    # Budget: keep all old + all PYQ, then fill from notes
    budget_for_notes = max(0, target - len(old_format) - len(pyq_pairs))
    per_subject = max(10, budget_for_notes // max(1, len(by_subject)))

    print(f"  Budget for notes: {budget_for_notes} ({per_subject}/subject)")

    # Take top-richness pairs per subject, then deduplicate
    selected_notes = []
    seen_qs = []
    for sc in sorted(by_subject.keys()):
        count = 0
        for p in by_subject[sc]:
            if count >= per_subject: break
            q = norm(p.get("question",""))[:60]
            if not is_dup(q, seen_qs):
                selected_notes.append(p)
                seen_qs.append(q)
                count += 1

    # Fill remaining budget if some subjects had fewer pairs
    remaining = budget_for_notes - len(selected_notes)
    if remaining > 0:
        all_remaining = [p for p in notes_pairs if p not in selected_notes]
        random.shuffle(all_remaining)
        for p in all_remaining:
            if remaining <= 0: break
            q = norm(p.get("question",""))[:60]
            if not is_dup(q, seen_qs):
                selected_notes.append(p)
                seen_qs.append(q)
                remaining -= 1

    # Combine all
    final = old_format + pyq_pairs + selected_notes
    random.seed(42)
    random.shuffle(final)

    # Final dedup pass
    clean = []
    seen2 = []
    for p in final:
        q = norm(p.get("question",""))[:60]
        if not is_dup(q, seen2):
            clean.append(p)
            seen2.append(q)

    return clean

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", type=int, default=3000,
                    help="Target sample size (default 3000)")
    args = ap.parse_args()

    print(f"\nLoading all pairs...")
    all_pairs = load_all()
    print(f"Total available: {len(all_pairs)}")

    print(f"\nSampling {args.target} pairs smartly...")
    sampled = sample_smart(all_pairs, args.target)
    print(f"Final sample: {len(sampled)} pairs")

    # Split 80/10/10
    n = len(sampled)
    n_val  = max(1, int(n * 0.10))
    n_test = max(1, int(n * 0.10))
    n_train = n - n_val - n_test

    combined = OUT_DIR / "training_data_combined.jsonl"
    train_f  = OUT_DIR / "train.jsonl"
    val_f    = OUT_DIR / "val.jsonl"
    test_f   = OUT_DIR / "test.jsonl"

    for path, pairs in [
        (combined, sampled),
        (train_f,  sampled[:n_train]),
        (val_f,    sampled[n_train:n_train+n_val]),
        (test_f,   sampled[n_train+n_val:]),
    ]:
        path.write_text(
            "\n".join(json.dumps(p, ensure_ascii=False) for p in pairs) + "\n",
            encoding="utf-8"
        )

    # Subject coverage report
    subj_counts = {}
    for p in sampled:
        sc = p.get("subject_code","?")
        subj_counts[sc] = subj_counts.get(sc,0) + 1

    print(f"\n  Combined : {n} pairs -> {combined.name}")
    print(f"  Train    : {n_train} pairs")
    print(f"  Val      : {n_val} pairs")
    print(f"  Test     : {n_test} pairs")
    print(f"\n  Subject coverage ({len(subj_counts)} subjects):")
    for sc,cnt in sorted(subj_counts.items()):
        print(f"    {sc:10} {cnt:4d} pairs")

    print(f"\n  Training time estimate on RTX 4050:")
    print(f"    {n_train} train pairs x 3 epochs = ~{int(n_train*3*3/60)} min (~{int(n_train*3*3/3600)+1} hr)")
    print(f"\n  Run training:")
    print(f"    py -3.11 training/train_lora.py --data output/train.jsonl --val output/val.jsonl --epochs 3")

if __name__ == "__main__":
    main()
