"""
extract_qpapers.py
------------------
Phase 0: Organise VTU question papers into clean Markdown files.

For each subject in DATA/VTU_CSE_Notes/<SEM>/<SUBJ>/question papers/ it reads
all .txt files, classifies them, and writes three output .md files:

  DATA/question_papers/<SEM>/<SUBJ>/
    model_papers.md          ← model set papers
    previous_papers.md       ← PYQ exam session papers
    important_questions.md   ← question banks / important Q collections

Usage:
    python scripts/extract_qpapers.py              # all subjects
    python scripts/extract_qpapers.py --subject BCS301
    python scripts/extract_qpapers.py --dry-run    # print summary only
"""

import argparse
import json
import re
import sys
from pathlib import Path
from datetime import datetime

# ── paths ─────────────────────────────────────────────────────────────────────
ROOT        = Path(__file__).resolve().parents[2]        # d:/Adaptlearn
NOTES_ROOT  = ROOT / "DATA" / "VTU_CSE_Notes"
OUT_ROOT    = ROOT / "DATA" / "question_papers"
INDEX_FILE  = ROOT / "DATA" / "question_paper_index.json"

MIN_CHARS   = 300   # skip files with bad OCR (tiny content)

# ── semester folder name → clean label ────────────────────────────────────────
SEM_LABELS = {
    "3RD SEM": "Semester 3",
    "4TH SEM": "Semester 4",
    "5TH SEM": "Semester 5",
    "6TH SEM": "Semester 6",
    "7TH SEM": "Semester 7",
}

# ── subject name map (from scheme data) ───────────────────────────────────────
SUBJECT_NAMES = {
    "BCS301": "Mathematics for Computer Science",
    "BCS302": "Digital Design and Computer Organization (DDCO)",
    "BCS303": "Operating Systems",
    "BCS304": "Data Structures and Applications",
    "BCS306A": "Java Programming",
    "BCS306B": "C++ Programming",
    "BBOC407": "Biology for Computer Science",
    "BCS401": "Analysis and Design of Algorithms (ADA)",
    "BCS402": "Microcontrollers and Embedded Systems",
    "BCS403": "Database Management Systems (DBMS)",
    "BCS405A": "Discrete Mathematical Structures",
    "BCS405B": "Python Programming",
    "BUHK408": "Universal Human Values",
    "BCS501": "Software Engineering and Project Management (SEPM)",
    "BCS502": "Computer Networks",
    "BCS503": "Theory of Computation",
    "BCS515B": "Cloud Computing and DevOps",
    "BRMK557": "Research Methodology",
    "BCS601": "Compiler Design",
    "BCS602": "Machine Learning",
    "BCS613A": "Mobile Application Development",
    "BCS613C": "Natural Language Processing",
    "BCV654C": "Computer Vision",
    "BCS701": "Big Data Analytics",
    "BCS702": "Deep Learning",
    "BCS703": "Cloud Computing",
    "BCS714D": "Blockchain Technology",
    "BESK508": "Employability Skills",
}


# ── classifier ────────────────────────────────────────────────────────────────
def classify(filename: str) -> str:
    """
    Returns 'model' | 'pyq' | 'important' | 'textbook' | 'notes' | 'skip'
    """
    name = filename.lower()
    # textbooks stored in question papers folder (7th sem pattern)
    if "textbook" in name and "module" in name:
        return "textbook"
    # skip written/handwritten notes
    if "written" in name:
        return "notes"
    # skip bare module notes (not textbooks)
    if "module" in name and "textbook" not in name:
        return "notes"
    # model papers
    if "model" in name:
        return "model"
    # question banks / important questions
    if "question-bank" in name or "question_bank" in name or "important" in name:
        return "important"
    # PYQ: exam session papers by date pattern
    if re.search(r"(dec|june|july|jan|feb|makeup|supply|aug|sep|oct|nov)", name):
        return "pyq"
    return "skip"


def friendly_session(filename: str) -> str:
    """Convert filename to human-readable exam session label."""
    name = Path(filename).stem
    # Remove subject code prefix
    name = re.sub(r"^[A-Z0-9]+[-_]", "", name, flags=re.IGNORECASE)
    # Common patterns
    name = name.replace("-", " ").replace("_", " ")
    name = re.sub(r"\s+", " ", name).strip().title()
    # Fix casing
    name = name.replace("Dec", "Dec").replace("Jan", "Jan")
    return name


def read_txt(path: Path) -> str:
    """Read text file, fix common encoding issues."""
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except Exception:
        return ""
    # Fix common mojibake from PDF extraction
    text = text.replace("â€™", "'").replace("â€œ", '"').replace("â€\x9d", '"')
    text = text.replace("Î£", "Σ").replace("Î±", "α").replace("Î²", "β")
    text = text.replace("Î³", "γ").replace("â†'", "→").replace("â‰¤", "≤")
    text = text.replace("â‰¥", "≥").replace("Ã—", "×").replace("Â ", " ")
    return text.strip()


def clean_content(text: str) -> str:
    """Light cleanup: collapse excessive blank lines, trim page markers."""
    # Remove standalone page numbers
    text = re.sub(r"^\s*Page\s+\d+\s+of\s+\d+\s*$", "", text, flags=re.MULTILINE | re.IGNORECASE)
    text = re.sub(r"^\s*\d+\s*$", "", text, flags=re.MULTILINE)
    # Collapse 3+ blank lines to 2
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


# ── markdown builders ─────────────────────────────────────────────────────────
def build_model_papers_md(subject_code: str, subject_name: str, entries: list[dict]) -> str:
    lines = [
        f"# {subject_code} — Model Question Papers",
        f"**Subject:** {subject_name}",
        f"**Generated:** {datetime.now().strftime('%Y-%m-%d')}",
        "",
        "---",
        "",
    ]
    for entry in sorted(entries, key=lambda e: e["file"]):
        lines.append(f"## {entry['label']}")
        lines.append("")
        lines.append(entry["content"])
        lines.append("")
        lines.append("---")
        lines.append("")
    return "\n".join(lines)


def build_previous_papers_md(subject_code: str, subject_name: str, entries: list[dict]) -> str:
    lines = [
        f"# {subject_code} — Previous Year Question Papers (PYQ)",
        f"**Subject:** {subject_name}",
        f"**Generated:** {datetime.now().strftime('%Y-%m-%d')}",
        "",
        "---",
        "",
    ]
    for entry in sorted(entries, key=lambda e: e["file"], reverse=True):  # newest first
        lines.append(f"## {entry['label']}")
        lines.append("")
        lines.append(entry["content"])
        lines.append("")
        lines.append("---")
        lines.append("")
    return "\n".join(lines)


def build_textbook_notes_md(subject_code: str, subject_name: str, entries: list[dict]) -> str:
    lines = [
        f"# {subject_code} — Textbook Notes (Module-wise)",
        f"**Subject:** {subject_name}",
        f"**Generated:** {datetime.now().strftime('%Y-%m-%d')}",
        "",
        "---",
        "",
    ]
    for entry in sorted(entries, key=lambda e: e["file"]):
        lines.append(f"## {entry['label']}")
        lines.append("")
        lines.append(entry["content"])
        lines.append("")
        lines.append("---")
        lines.append("")
    return "\n".join(lines)


def build_important_questions_md(subject_code: str, subject_name: str, entries: list[dict]) -> str:
    lines = [
        f"# {subject_code} — Important Questions & Question Bank",
        f"**Subject:** {subject_name}",
        f"**Generated:** {datetime.now().strftime('%Y-%m-%d')}",
        "",
        "---",
        "",
    ]
    for entry in sorted(entries, key=lambda e: e["file"]):
        lines.append(f"## {entry['label']}")
        lines.append("")
        lines.append(entry["content"])
        lines.append("")
        lines.append("---")
        lines.append("")
    return "\n".join(lines)


# ── per-subject processor ─────────────────────────────────────────────────────
def process_subject(subj_dir: Path, sem_name: str, dry_run: bool) -> dict:
    subject_code = subj_dir.name
    subject_name = SUBJECT_NAMES.get(subject_code, subject_code)
    qp_dir = subj_dir / "question papers"

    result = {
        "subject": subject_code,
        "sem": sem_name,
        "model":     {"count": 0, "files": []},
        "pyq":       {"count": 0, "files": []},
        "important": {"count": 0, "files": []},
        "skipped":   [],
        "output_dir": str(OUT_ROOT / sem_name / subject_code),
    }

    if not qp_dir.exists():
        result["error"] = "no question papers folder"
        return result

    model_entries:    list[dict] = []
    pyq_entries:      list[dict] = []
    imp_entries:      list[dict] = []
    textbook_entries: list[dict] = []

    for txt_file in sorted(qp_dir.glob("*.txt")):
        kind = classify(txt_file.name)
        if kind in ("notes", "skip"):
            result["skipped"].append(txt_file.name)
            continue

        text = read_txt(txt_file)
        if len(text) < MIN_CHARS:
            result["skipped"].append(f"{txt_file.name} (too short: {len(text)} chars)")
            continue

        content = clean_content(text)
        label   = friendly_session(txt_file.name)
        entry   = {"file": txt_file.name, "label": label, "content": content}

        if kind == "model":
            model_entries.append(entry)
        elif kind == "pyq":
            pyq_entries.append(entry)
        elif kind == "important":
            imp_entries.append(entry)
        elif kind == "textbook":
            textbook_entries.append(entry)

    result["model"]["count"]     = len(model_entries)
    result["model"]["files"]     = [e["file"] for e in model_entries]
    result["pyq"]["count"]       = len(pyq_entries)
    result["pyq"]["files"]       = [e["file"] for e in pyq_entries]
    result["important"]["count"] = len(imp_entries)
    result["important"]["files"] = [e["file"] for e in imp_entries]
    result["textbook"]           = {"count": len(textbook_entries), "files": [e["file"] for e in textbook_entries]}

    if dry_run:
        return result

    # Write output files
    out_dir = OUT_ROOT / sem_name / subject_code
    out_dir.mkdir(parents=True, exist_ok=True)

    if model_entries:
        md = build_model_papers_md(subject_code, subject_name, model_entries)
        (out_dir / "model_papers.md").write_text(md, encoding="utf-8")

    if pyq_entries:
        md = build_previous_papers_md(subject_code, subject_name, pyq_entries)
        (out_dir / "previous_papers.md").write_text(md, encoding="utf-8")

    if imp_entries:
        md = build_important_questions_md(subject_code, subject_name, imp_entries)
        (out_dir / "important_questions.md").write_text(md, encoding="utf-8")

    if textbook_entries:
        md = build_textbook_notes_md(subject_code, subject_name, textbook_entries)
        (out_dir / "textbook_notes.md").write_text(md, encoding="utf-8")

    return result


# ── main ──────────────────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(description="Phase 0: Extract VTU question papers to Markdown")
    parser.add_argument("--subject",  help="Process only this subject code e.g. BCS301")
    parser.add_argument("--dry-run",  action="store_true", help="Print summary without writing files")
    args = parser.parse_args()

    index = {}
    total_model = total_pyq = total_imp = total_skipped = 0

    sem_dirs = sorted(NOTES_ROOT.iterdir())
    for sem_dir in sem_dirs:
        if not sem_dir.is_dir():
            continue
        sem_name = sem_dir.name
        if sem_name not in SEM_LABELS:
            continue

        subj_dirs = sorted(sem_dir.iterdir())
        for subj_dir in subj_dirs:
            if not subj_dir.is_dir():
                continue
            if args.subject and subj_dir.name != args.subject:
                continue

            r = process_subject(subj_dir, sem_name, args.dry_run)

            # console output
            status = "✓" if not r.get("error") else "✗"
            m = r["model"]["count"]
            p = r["pyq"]["count"]
            i = r["important"]["count"]
            t = r.get("textbook", {}).get("count", 0)
            s = len(r["skipped"])
            print(f"  {status} {r['subject']:12} | model:{m:2}  pyq:{p:2}  important:{i:2}  textbook:{t:2}  skipped:{s:2}")
            if r.get("error"):
                print(f"      ERROR: {r['error']}")

            total_model   += m
            total_pyq     += p
            total_imp     += i
            total_skipped += s

            index[r["subject"]] = {
                "sem":       sem_name,
                "output":    r["output_dir"],
                "model":     r["model"],
                "pyq":       r["pyq"],
                "important": r["important"],
            }

    print()
    print(f"{'='*55}")
    print(f"  Model papers:       {total_model}")
    print(f"  PYQ papers:         {total_pyq}")
    print(f"  Important Q files:  {total_imp}")
    print(f"  Skipped files:      {total_skipped}")
    print(f"{'='*55}")

    if not args.dry_run:
        INDEX_FILE.write_text(json.dumps(index, indent=2, ensure_ascii=False), encoding="utf-8")
        print(f"\n  Index written to: {INDEX_FILE}")
        print(f"  Output root:      {OUT_ROOT}")

        # Count total .md files created
        md_count = len(list(OUT_ROOT.rglob("*.md")))
        print(f"  Total .md files:  {md_count}")

    print()
    print("  Phase 0 complete. Next: python data_gen/generate_textbook_dataset.py")


if __name__ == "__main__":
    main()
