#!/usr/bin/env python3

import sys
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

"""
Build Question-Level Indexed Database (knowledge/pyq_database.json).
Parses every model paper and previous year paper across all semesters.
Extracts individual questions, module, session, year, marks, bloom level, and topics.
"""

import os
import re
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
QP_ROOT = ROOT / "DATA" / "question_papers"
KNOWLEDGE_ROOT = ROOT / "knowledge"

def clean_q_text(text: str) -> str:
    cleaned = re.sub(r"\s+", " ", text).strip()
    # Remove leading question prefixes
    cleaned = re.sub(r"^(?:Q\.\s*\d+\s*[a-d]?\.?|[a-d][\.\s]|\d+[\.\s])\s*", "", cleaned, flags=re.I)
    cleaned = re.sub(r"\bL[1-4]\b", "", cleaned)
    cleaned = re.sub(r"\bCO[1-5]\b", "", cleaned)
    cleaned = re.sub(r"\(\d+\s*marks?\)", "", cleaned, flags=re.I)
    cleaned = re.sub(r"^\s*[\-\*\.]\s*", "", cleaned)
    return cleaned.strip()

def extract_year_session(header: str):
    year_match = re.search(r"\b(202[2-6])\b", header)
    year = int(year_match.group(1)) if year_match else 2024
    
    session = header
    if "june" in header.lower() or "july" in header.lower():
        session = f"June/July {year}"
    elif "dec" in header.lower() or "jan" in header.lower():
        session = f"Dec {year - 1}/Jan {year}"
    elif "model" in header.lower():
        session = f"Official Model Paper ({year})"
    return year, session

def parse_markdown_paper(file_path: Path, subject_code: str, semester: int, paper_type: str):
    questions = []
    if not file_path.exists():
        return questions
        
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            text = f.read()
    except Exception:
        return questions
        
    lines = text.split("\n")
    current_session = "VTU University Examination"
    current_year = 2024
    current_module = 1
    current_q_num = "Q.1"
    
    for i, line in enumerate(lines):
        trimmed = line.strip()
        if not trimmed:
            continue
            
        # Detect session header
        if trimmed.startswith("## "):
            header = trimmed.replace("##", "").strip()
            current_year, current_session = extract_year_session(header)
            continue
            
        # Detect Module header
        mod_m = re.search(r"Module\s*[–\-—:]?\s*(\d+)", trimmed, re.I)
        if mod_m:
            current_module = int(mod_m.group(1))
            continue
            
        # Detect Question line
        q_start = re.match(r"^(Q\.\s*\d+\s*[a-d]?|[a-d]\.|\d+\.\s*[a-d]?)\s+(.*)", trimmed, re.I)
        candidate = ""
        q_num = current_q_num
        
        if q_start:
            q_num = q_start.group(1).strip()
            candidate = q_start.group(2).strip()
            current_q_num = q_num
        elif re.match(r"^(explain|define|what|describe|simplify|apply|show|demonstrate|differentiate|compare|state|list|write|derive|design|construct)\b", trimmed, re.I):
            candidate = trimmed
            
        if candidate and len(candidate) > 15:
            # Check next lines for continuation
            full_q = candidate
            j = i + 1
            while j < len(lines) and lines[j].strip() and not lines[j].strip().startswith(("#", "Q.", "Module", "OR")):
                next_l = lines[j].strip()
                if re.match(r"^(L[1-4]|CO[1-5]|\d+\s*marks)", next_l, re.I):
                    break
                if len(next_l) > 2 and not next_l.startswith(("a.", "b.", "c.", "d.")):
                    full_q += " " + next_l
                    j += 1
                else:
                    break
                    
            clean_q = clean_q_text(full_q)
            if len(clean_q) > 15:
                # Extract marks
                marks_m = re.search(r"(\d+)\s*marks?", full_q, re.I)
                marks = int(marks_m.group(1)) if marks_m else (8 if "explain" in clean_q.lower() else 6)
                
                # Determine Bloom level
                bloom_m = re.search(r"\b(L[1-4])\b", full_q)
                level = bloom_m.group(1) if bloom_m else ("L2" if marks <= 6 else "L3")
                
                questions.append({
                    "id": f"{subject_code}_{paper_type}_{len(questions) + 1}",
                    "subject_code": subject_code,
                    "semester": semester,
                    "paper_type": paper_type,
                    "year": current_year,
                    "session": current_session,
                    "module": current_module,
                    "question_number": q_num,
                    "question_text": clean_q,
                    "marks": marks,
                    "bloom_level": level,
                    "course_outcome": f"CO{current_module}",
                    "source_file": file_path.name
                })
    return questions

def build_pyq_database():
    print("Building Question-Level Indexed Database (pyq_database.json)...")
    all_questions = []
    
    # Scan DATA/question_papers/
    if QP_ROOT.exists():
        for sem_dir in sorted(os.listdir(QP_ROOT)):
            sem_m = re.search(r"(\d+)", sem_dir)
            semester = int(sem_m.group(1)) if sem_m else 4
            sem_path = QP_ROOT / sem_dir
            if not sem_path.is_dir():
                continue
                
            for subj in sorted(os.listdir(sem_path)):
                subj_path = sem_path / subj
                if not subj_path.is_dir():
                    continue
                    
                prev_path = subj_path / "previous_papers.md"
                model_path = subj_path / "model_papers.md"
                imp_path = subj_path / "important_questions.md"
                
                if prev_path.exists():
                    pyqs = parse_markdown_paper(prev_path, subj, semester, "PYQ")
                    all_questions.extend(pyqs)
                    
                if model_path.exists():
                    models = parse_markdown_paper(model_path, subj, semester, "MODEL_PAPER")
                    all_questions.extend(models)
                    
                if imp_path.exists():
                    imps = parse_markdown_paper(imp_path, subj, semester, "QUESTION_BANK")
                    all_questions.extend(imps)
                    
    print(f"Total Individual Questions Indexed: {len(all_questions)}")
    pyq_count = len([q for q in all_questions if q["paper_type"] == "PYQ"])
    model_count = len([q for q in all_questions if q["paper_type"] == "MODEL_PAPER"])
    qbank_count = len([q for q in all_questions if q["paper_type"] == "QUESTION_BANK"])
    
    print(f"  • Previous Year Questions (PYQ): {pyq_count}")
    print(f"  • Official Model Paper Questions: {model_count}")
    print(f"  • Question Bank / Important Questions: {qbank_count}")
    
    out_obj = {
        "schema_version": "2.0.0",
        "description": "Granular Question-Level Database for VTU 2022 Scheme Examination Papers",
        "total_questions": len(all_questions),
        "statistics": {
            "pyq_count": pyq_count,
            "model_paper_count": model_count,
            "question_bank_count": qbank_count,
            "subjects_indexed": len(set(q["subject_code"] for q in all_questions))
        },
        "questions": all_questions
    }
    
    with open(KNOWLEDGE_ROOT / "pyq_database.json", "w", encoding="utf-8") as f:
        json.dump(out_obj, f, indent=2)
    print("Saved knowledge/pyq_database.json")

if __name__ == "__main__":
    build_pyq_database()
