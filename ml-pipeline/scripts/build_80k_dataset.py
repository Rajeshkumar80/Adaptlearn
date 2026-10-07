"""
build_80k_dataset.py
====================
Builds an expanded 80,000 pair dataset for Kaggle training:
- 2,000+ real VTU PYQ & Model paper questions
- ~58,000 syllabus notes pairs
- ~20,000 textbook pairs from CLRS, Silberschatz, Stallings, Axler, etc.

Outputs:
- output/training_data_80k.jsonl (80,000 pairs)
- output/train_80k.jsonl         (64,000 pairs - 80%)
- output/val_80k.jsonl           (8,000 pairs - 10%)
- output/test_80k.jsonl          (8,000 pairs - 10%)
- output/kaggle_dataset_80k.zip  (Compressed for 1-click Kaggle upload)
"""

import json, random, re, zipfile
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[2]
OUT_DIR = ROOT / "ml-pipeline" / "output"
TB_ROOT = ROOT / "DATA" / "VTU_CSE_Textbooks"

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_balanced_dataset import extract_blocks, block_to_pairs, SUBJECTS, qkey

def main():
    print("=" * 60)
    print("  BUILDING 80,000 PAIR DATASET FOR KAGGLE")
    print("=" * 60)

    seen = set()
    all_pairs = []

    # 1. Load all PYQs
    qp_file = OUT_DIR / "training_data_qpapers.jsonl"
    if qp_file.exists():
        for line in qp_file.read_text(encoding="utf-8", errors="ignore").splitlines():
            if not line.strip(): continue
            try:
                o = json.loads(line)
                k = qkey(o.get("question", ""))
                if k and k not in seen:
                    seen.add(k)
                    all_pairs.append(o)
            except: pass
    print(f"[OK] Loaded {len(all_pairs)} PYQ / Model Paper pairs")

    # 2. Load all notes pairs
    notes_file = OUT_DIR / "training_data_notes.jsonl"
    notes_added = 0
    if notes_file.exists():
        for line in notes_file.read_text(encoding="utf-8", errors="ignore").splitlines():
            if not line.strip(): continue
            try:
                o = json.loads(line)
                k = qkey(o.get("question", ""))
                if k and k not in seen:
                    seen.add(k)
                    all_pairs.append(o)
                    notes_added += 1
            except: pass
    print(f"[OK] Loaded {notes_added} notes pairs (Total: {len(all_pairs)})")

    # 3. Pull from Textbooks to reach 80,000
    target_total = 80000
    needed_from_tb = target_total - len(all_pairs)
    print(f"\nPulling ~{needed_from_tb} additional pairs from textbooks...")

    tb_pairs = []
    for sd in TB_ROOT.iterdir():
        if not sd.is_dir(): continue
        for dd in sd.iterdir():
            if not dd.is_dir(): continue
            sc = dd.name.split("_")[0].upper()
            if sc in SUBJECTS:
                sn = SUBJECTS[sc][0]
                for txt_f in dd.glob("*.txt"):
                    if len(all_pairs) + len(tb_pairs) >= target_total: break
                    if txt_f.stat().st_size > 1000:
                        try:
                            raw = txt_f.read_text(encoding="utf-8", errors="replace")
                            blocks = extract_blocks(raw, 0)
                            for b in blocks:
                                if len(all_pairs) + len(tb_pairs) >= target_total: break
                                new_pairs = block_to_pairs(b, sc, sn, seen)
                                for p in new_pairs:
                                    tb_pairs.append(p)
                                    if len(all_pairs) + len(tb_pairs) >= target_total: break
                        except: pass
            if len(all_pairs) + len(tb_pairs) >= target_total: break
        if len(all_pairs) + len(tb_pairs) >= target_total: break

    all_pairs.extend(tb_pairs)
    print(f"[OK] Added {len(tb_pairs)} textbook pairs.")
    print(f"\nFinal Dataset Size: {len(all_pairs)} pairs")

    # 4. Shuffle and split 80/10/10
    random.seed(42)
    random.shuffle(all_pairs)

    n_val = int(len(all_pairs) * 0.10)
    n_test = int(len(all_pairs) * 0.10)
    n_train = len(all_pairs) - n_val - n_test

    train_data = all_pairs[:n_train]
    val_data = all_pairs[n_train:n_train + n_val]
    test_data = all_pairs[n_train + n_val:]

    train_file = OUT_DIR / "train_80k.jsonl"
    val_file = OUT_DIR / "val_80k.jsonl"
    test_file = OUT_DIR / "test_80k.jsonl"
    comb_file = OUT_DIR / "training_data_80k.jsonl"

    print(f"\nWriting splits:")
    print(f"  Train: {len(train_data)} -> {train_file.name}")
    print(f"  Val  : {len(val_data)}   -> {val_file.name}")
    print(f"  Test : {len(test_data)}  -> {test_file.name}")

    train_file.write_text("\n".join(json.dumps(p, ensure_ascii=False) for p in train_data) + "\n", encoding="utf-8")
    val_file.write_text("\n".join(json.dumps(p, ensure_ascii=False) for p in val_data) + "\n", encoding="utf-8")
    test_file.write_text("\n".join(json.dumps(p, ensure_ascii=False) for p in test_data) + "\n", encoding="utf-8")
    comb_file.write_text("\n".join(json.dumps(p, ensure_ascii=False) for p in all_pairs) + "\n", encoding="utf-8")

    # 5. Create zip for Kaggle
    zip_path = OUT_DIR / "kaggle_dataset_80k.zip"
    print(f"\nCompressing to {zip_path.name}...")
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        zf.write(train_file, arcname="train.jsonl")
        zf.write(val_file, arcname="val.jsonl")

    zip_size_mb = zip_path.stat().st_size / (1024 * 1024)
    print(f"[OK] Created {zip_path.name} ({zip_size_mb:.1f} MB)")
    print("=" * 60)
    print("READY FOR KAGGLE!")
    print("=" * 60)

if __name__ == "__main__":
    main()
