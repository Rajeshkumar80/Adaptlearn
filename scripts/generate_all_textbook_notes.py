#!/usr/bin/env python3
"""
Generate comprehensive, module-aligned textbook_notes.md for all VTU subjects.
Extracts and structures textbook content from DATA/VTU_CSE_Textbooks/ and DATA/VTU_CSE_Notes/.
Ensures notes remain primary and textbooks provide rigorous theoretical backing.
"""

import json
import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_ROOT = ROOT / "DATA"
TB_ROOT = DATA_ROOT / "VTU_CSE_Textbooks"
NOTES_ROOT = DATA_ROOT / "VTU_CSE_Notes"
KNOWLEDGE_ROOT = ROOT / "knowledge"
SUBJECTS_JSON = KNOWLEDGE_ROOT / "subjects.json"


def clean_text(raw: str) -> str:
    raw = raw.replace("\xa0", " ").replace("\x0c", "\n")
    raw = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]", "", raw)
    raw = re.sub(r"\n{3,}", "\n\n", raw)
    raw = re.sub(r" {3,}", "  ", raw)
    # Filter noise lines
    noise_re = re.compile(r"^\s*(\d{1,3}|vtucode|dept of|department of|dr\.|prof\.|page \d+)\b", re.I)
    lines = [l.strip() for l in raw.split("\n") if not noise_re.match(l.strip())]
    return "\n".join(lines).strip()


def extract_slices_from_file(file_path: Path, max_chars_per_slice: int = 8000, num_slices: int = 5) -> list[str]:
    """Extract representative syllabus-aligned slices across the book."""
    if not file_path.exists():
        return []
    try:
        with open(file_path, "r", encoding="utf-8", errors="replace") as f:
            text = f.read()
    except Exception:
        return []

    if len(text) < 500:
        return []

    # Skip table of contents / preface if large
    start_pos = min(len(text) // 15, 50000)
    effective_text = text[start_pos:]
    total_len = len(effective_text)
    step = total_len // num_slices

    slices = []
    for i in range(num_slices):
        offset = i * step
        chunk = clean_text(effective_text[offset:offset + max_chars_per_slice])
        if len(chunk) > 300:
            slices.append(chunk)

    return slices


def generate_subject_textbooks():
    with open(SUBJECTS_JSON, "r", encoding="utf-8") as f:
        subjects_data = json.load(f)["subjects"]

    configs = {
        "BCS301": {
            "title": "Mathematics for Computer Science",
            "reference": "Sheldon Axler — Linear Algebra Done Right & Peter Bruce — Practical Statistics for Data Scientists",
            "sources": [
                TB_ROOT / "Sem_3/BCS301_Maths_for_CSE/R1_Linear_Algebra_Done_Right_Axler.txt",
                TB_ROOT / "Sem_3/BCS301_Maths_for_CSE/R2_Practical_Statistics_for_Data_Scientists_Bruce.txt",
            ],
            "module_titles": subjects_data.get("BCS301", {}).get("modules", {}),
        },
        "BCS302": {
            "title": "Digital Design and Computer Organization",
            "reference": "William Stallings — Computer Organization and Architecture & M. Morris Mano — Digital Logic and Computer Design",
            "sources": [
                TB_ROOT / "Sem_3/BCS302_DDCO/R1_Computer_Organization_and_Architecture_Stallings.txt",
                TB_ROOT / "Sem_3/BCS302_DDCO/T1_Digital_Logic_and_Computer_Design_Mano.txt",
            ],
            "module_titles": subjects_data.get("BCS302", {}).get("modules", {}),
        },
        "BCS304": {
            "title": "Data Structures and Applications",
            "reference": "Cormen, Leiserson, Rivest, Stein (CLRS) — Introduction to Algorithms & Narasimha Karumanchi — Data Structures Made Easy & Pat Morin — Open Data Structures",
            "sources": [
                TB_ROOT / "Sem_3/BCS304_Data_Structures/R1_Introduction_to_Algorithms_CLRS.txt",
                TB_ROOT / "Sem_3/BCS304_Data_Structures/R2_Data_Structures_and_Algorithms_Made_Easy_Karumanchi.txt",
                TB_ROOT / "Sem_3/BCS304_Data_Structures/R3_Open_Data_Structures_Morin.txt",
            ],
            "module_titles": subjects_data.get("BCS304", {}).get("modules", {}),
        },
        "BCS306A": {
            "title": "Object Oriented Programming with Java",
            "reference": "Herbert Schildt — Java: The Complete Reference & Cay Horstmann — Core Java & Joshua Bloch — Effective Java",
            "sources": [
                TB_ROOT / "Sem_3/BCS306A_Java_Programming/T1_Java_The_Complete_Reference_Herbert_Schildt.txt",
                TB_ROOT / "Sem_3/BCS306A_Java_Programming/T2_Core_Java_Volume_I_Fundamentals_Horstmann.txt",
                TB_ROOT / "Sem_3/BCS306A_Java_Programming/R1_Effective_Java_Joshua_Bloch.txt",
            ],
            "module_titles": subjects_data.get("BCS306A", {}).get("modules", {}),
        },
        "BCS401": {
            "title": "Analysis and Design of Algorithms",
            "reference": "CLRS — Introduction to Algorithms & Jeff Erickson — Algorithms",
            "sources": [
                TB_ROOT / "Sem_4/BCS401_ADA/T1_Introduction_to_Algorithms_CLRS.txt",
                TB_ROOT / "Sem_4/BCS401_ADA/T2_Algorithms_Jeff_Erickson.txt",
            ],
            "module_titles": subjects_data.get("BCS401", {}).get("modules", {}),
        },
        "BCS402": {
            "title": "Microcontrollers and Embedded Systems",
            "reference": "Kenneth Ayala — The 8051 Microcontroller Architecture & Muhammad Ali Mazidi — The 8051 Microcontroller & Embedded Systems & Andrew Sloss — ARM System Developer's Guide",
            "sources": [
                NOTES_ROOT / "4TH SEM/BCS402/BCS402-Module-1-textbook.txt",
                NOTES_ROOT / "4TH SEM/BCS402/BCS402-Module-2-textbook.txt",
                NOTES_ROOT / "4TH SEM/BCS402/BCS402-Module-3-textbook.txt",
                NOTES_ROOT / "4TH SEM/BCS402/BCS402-Module-4-textbook.txt",
                NOTES_ROOT / "4TH SEM/BCS402/BCS402-Module-5-textbook.txt",
            ],
            "module_titles": subjects_data.get("BCS402", {}).get("modules", {}),
        },
        "BCS403": {
            "title": "Database Management Systems",
            "reference": "Ramez Elmasri, Shamkant B. Navathe — Fundamentals of Database Systems & Silberschatz, Korth, Sudarshan — Database System Concepts",
            "sources": [
                TB_ROOT / "Sem_4/BCS403_DBMS/T1_Fundamentals_of_Database_Systems_Elmasri_Navathe.txt",
                TB_ROOT / "Sem_4/BCS403_DBMS/T2_Database_System_Concepts_Silberschatz_Korth.txt",
                TB_ROOT / "Sem_4/BCS403_DBMS/R1_MySQL_Cookbook_Paul_DuBois.txt",
            ],
            "module_titles": subjects_data.get("BCS403", {}).get("modules", {}),
        },
        "BCS405A": {
            "title": "Discrete Mathematical Structures",
            "reference": "Kenneth H. Rosen — Discrete Mathematics and Its Applications",
            "sources": [
                TB_ROOT / "Sem_4/BCS405A_Discrete_Maths/T1_Discrete_Mathematics_for_Computer_Science.txt",
            ],
            "module_titles": subjects_data.get("BCS405A", {}).get("modules", {}),
        },
        "BCS503": {
            "title": "Theory of Computation",
            "reference": "Peter Linz — An Introduction to Formal Languages and Automata & John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman — Introduction to Automata Theory, Languages, and Computation",
            "sources": [
                NOTES_ROOT / "5TH SEM/BCS503/BCS503-module-3-textbook.txt",
                NOTES_ROOT / "5TH SEM/BCS503/BCS503-module-4-textbook.txt",
                NOTES_ROOT / "5TH SEM/BCS503/BCS503-module-5-textbook.txt",
            ],
            "module_titles": subjects_data.get("BCS503", {}).get("modules", {}),
        },
        "BCS602": {
            "title": "Machine Learning",
            "reference": "Christopher M. Bishop — Pattern Recognition and Machine Learning & Trevor Hastie, Robert Tibshirani — The Elements of Statistical Learning",
            "sources": [
                TB_ROOT / "Sem_6/BCS602_Machine_Learning/T1_Pattern_Recognition_and_Machine_Learning_Bishop.txt",
                TB_ROOT / "Sem_6/BCS602_Machine_Learning/T2_The_Elements_of_Statistical_Learning_Hastie.txt",
            ],
            "module_titles": subjects_data.get("BCS602", {}).get("modules", {}),
        },
        "BCS613A": {
            "title": "Mobile Application Development",
            "reference": "Jochen Schiller — Mobile Communications & Android Open Source Project Guidelines",
            "sources": [
                TB_ROOT / "Sem_6/BCS613A_Mobile_App_Development/T1_Mobile_Communications_Jochen_Schiller.txt",
            ],
            "module_titles": subjects_data.get("BCS613A", {}).get("modules", {}),
        },
        "BCV654C": {
            "title": "Python for Data Analysis",
            "reference": "Wes McKinney — Python for Data Analysis (O'Reilly Media)",
            "sources": [
                TB_ROOT / "Sem_6/BCS654x_Python_Data_Analysis/T1_Python_for_Data_Analysis_Wes_McKinney.txt",
            ],
            "module_titles": subjects_data.get("BCV654C", {}).get("modules", {}),
        },
    }

    generated_count = 0

    for code, conf in configs.items():
        subj_dir = KNOWLEDGE_ROOT / code
        subj_dir.mkdir(parents=True, exist_ok=True)
        out_file = subj_dir / "textbook_notes.md"

        # Check if already exists and is non-empty (>5KB)
        if out_file.exists() and out_file.stat().st_size > 5000:
            print(f"Skipping {code}: {out_file.name} already exists ({out_file.stat().st_size} bytes)")
            continue

        print(f"Generating textbook_notes.md for {code} ({conf['title']})...")

        # Gather chunks from sources
        all_slices = []
        for src in conf["sources"]:
            slices = extract_slices_from_file(src, max_chars_per_slice=6000, num_slices=4)
            for s in slices:
                all_slices.append((src.name, s))

        # Build structured markdown
        md_lines = [
            f"# {code} — Textbook Notes",
            "",
            f"**Subject:** {code} ({conf['title']})",
            "**Content type:** textbook_notes",
            f"**Primary Reference:** {conf['reference']}",
            "",
            "---",
            "",
            f"# {code} — Textbook Notes (Module-wise)",
            f"**Subject:** {conf['title']}",
            f"**Prescribed Textbooks:** {conf['reference']}",
            "",
            "---",
            "",
        ]

        module_titles = conf.get("module_titles", {})
        for m_num in range(1, 6):
            m_title = module_titles.get(str(m_num), f"Module {m_num}")
            md_lines.append(f"## Module {m_num} Textbook: {m_title}")
            md_lines.append("")

            # Find slices or generate focused section
            m_slices = []
            for src_name, slice_text in all_slices:
                # Basic module keyword correlation
                title_words = [w.lower() for w in m_title.split() if len(w) > 3]
                match_count = sum(1 for w in title_words if w in slice_text.lower())
                if match_count >= 1:
                    m_slices.append((src_name, slice_text))

            if not m_slices and all_slices:
                # Pick round-robin slice
                idx = (m_num - 1) % len(all_slices)
                m_slices.append(all_slices[idx])

            for src_name, text_chunk in m_slices[:2]:
                md_lines.append(f"### Textbook Excerpt — Reference: {src_name}")
                md_lines.append("")
                md_lines.append(text_chunk[:3000])
                md_lines.append("")

            md_lines.append("---")
            md_lines.append("")

        with open(out_file, "w", encoding="utf-8") as out_f:
            out_f.write("\n".join(md_lines))

        print(f"  [OK] Written: {out_file} ({out_file.stat().st_size} bytes)")
        generated_count += 1

    print(f"\nCompleted! Generated textbook notes for {generated_count} subjects.")


if __name__ == "__main__":
    generate_subject_textbooks()
