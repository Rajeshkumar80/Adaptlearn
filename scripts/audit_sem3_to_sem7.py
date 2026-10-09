#!/usr/bin/env python3

import sys
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

"""
Authoritative VTU CSE 2022 Scheme Semesters 3 to 7 Curriculum Audit Script.
Analyzes local knowledge, DATA, question papers, diagrams, textbooks, and notes.
"""

import os
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
KNOWLEDGE_ROOT = ROOT / "knowledge"
DATA_ROOT = ROOT / "DATA"

# Authoritative Sem 3-7 Master Subject List from 38csesch.txt
OFFICIAL_CURRICULUM = {
    # SEMESTER 3
    "BCS301": {
        "name": "Mathematics for Computer Science",
        "semester": 3,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory (PCC/BSC)"
    },
    "BCS302": {
        "name": "Digital Design & Computer Organization",
        "semester": 3,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory Integrated with Practical (IPCC)"
    },
    "BCS303": {
        "name": "Operating Systems",
        "semester": 3,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory Integrated with Practical (IPCC)"
    },
    "BCS304": {
        "name": "Data Structures and Applications",
        "semester": 3,
        "category": "core",
        "credits": 3,
        "elective_group": None,
        "type": "Theory (PCC)"
    },
    "BCSL305": {
        "name": "Data Structures Lab",
        "semester": 3,
        "category": "core",
        "credits": 1,
        "elective_group": None,
        "type": "Laboratory (PCCL)"
    },
    "BCS306A": {
        "name": "Object Oriented Programming with Java",
        "semester": 3,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "ESC/ETC/PLC",
        "type": "Theory (ESC)"
    },
    "BCS306B": {
        "name": "Object Oriented Programming with C++",
        "semester": 3,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "ESC/ETC/PLC",
        "type": "Theory (ESC)"
    },
    "BSCK307": {
        "name": "Social Connect and Responsibility",
        "semester": 3,
        "category": "other",
        "credits": 1,
        "elective_group": None,
        "type": "Universal Human Values (UHV)"
    },
    "BCSL358A": {
        "name": "Data analytics with Excel",
        "semester": 3,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-III",
        "type": "Skill Lab"
    },
    "BCSL358B": {
        "name": "R Programming",
        "semester": 3,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-III",
        "type": "Skill Lab"
    },
    "BCSL358C": {
        "name": "Project Management with Git",
        "semester": 3,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-III",
        "type": "Skill Lab"
    },
    "BCSL358D": {
        "name": "Data Visualization with Python",
        "semester": 3,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-III",
        "type": "Skill Lab"
    },

    # SEMESTER 4
    "BCS401": {
        "name": "Analysis & Design of Algorithms",
        "semester": 4,
        "category": "core",
        "credits": 3,
        "elective_group": None,
        "type": "Theory (PCC/BSC)"
    },
    "BCS402": {
        "name": "Microcontrollers",
        "semester": 4,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory Integrated with Practical (IPCC)"
    },
    "BCS403": {
        "name": "Database Management Systems",
        "semester": 4,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory Integrated with Practical (IPCC)"
    },
    "BCSL404": {
        "name": "Analysis & Design of Algorithms Lab",
        "semester": 4,
        "category": "core",
        "credits": 1,
        "elective_group": None,
        "type": "Laboratory (PCCL)"
    },
    "BCS405A": {
        "name": "Discrete Mathematical Structures",
        "semester": 4,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "ESC/ETC/PLC",
        "type": "Theory (ESC)"
    },
    "BCS405B": {
        "name": "Graph Theory",
        "semester": 4,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "ESC/ETC/PLC",
        "type": "Theory (ESC)"
    },
    "BCS405C": {
        "name": "Optimization Technique",
        "semester": 4,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "ESC/ETC/PLC",
        "type": "Theory (ESC)"
    },
    "BCS405D": {
        "name": "Linear Algebra",
        "semester": 4,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "ESC/ETC/PLC",
        "type": "Theory (ESC)"
    },
    "BCS456A": {
        "name": "Green IT and Sustainability",
        "semester": 4,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-IV",
        "type": "Skill Course"
    },
    "BCS456B": {
        "name": "Capacity Planning for IT",
        "semester": 4,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-IV",
        "type": "Skill Course"
    },
    "BCS456C": {
        "name": "UI/UX",
        "semester": 4,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-IV",
        "type": "Skill Course"
    },
    "BCSL456D": {
        "name": "Technical writing using LATEX",
        "semester": 4,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-IV",
        "type": "Skill Lab"
    },
    "BBOC407": {
        "name": "Biology for Computer Engineers",
        "semester": 4,
        "category": "core",
        "credits": 2,
        "elective_group": None,
        "type": "Theory (BSC)"
    },
    "BUHK408": {
        "name": "Universal human values course",
        "semester": 4,
        "category": "other",
        "credits": 1,
        "elective_group": None,
        "type": "Universal Human Values (UHV)"
    },

    # SEMESTER 5
    "BCS501": {
        "name": "Software Engineering & Project Management",
        "semester": 5,
        "category": "core",
        "credits": 3,
        "elective_group": None,
        "type": "Theory (PCC)"
    },
    "BCS502": {
        "name": "Computer Networks",
        "semester": 5,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory Integrated with Practical (IPCC)"
    },
    "BCS503": {
        "name": "Theory of Computation",
        "semester": 5,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory (PCC)"
    },
    "BCSL504": {
        "name": "Web Technology Lab",
        "semester": 5,
        "category": "core",
        "credits": 1,
        "elective_group": None,
        "type": "Laboratory (PCCL)"
    },
    "BCS515A": {
        "name": "Computer Graphics",
        "semester": 5,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 1",
        "type": "Theory (PEC)"
    },
    "BCS515B": {
        "name": "Artificial Intelligence",
        "semester": 5,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 1",
        "type": "Theory (PEC)"
    },
    "BCS515C": {
        "name": "Unix System Programming",
        "semester": 5,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 1",
        "type": "Theory (PEC)"
    },
    "BCS515D": {
        "name": "Distributed Systems",
        "semester": 5,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 1",
        "type": "Theory (PEC)"
    },
    "BCS586": {
        "name": "Mini Project",
        "semester": 5,
        "category": "other",
        "credits": 2,
        "elective_group": None,
        "type": "Project (PROJ)"
    },
    "BRMK557": {
        "name": "Research Methodology and IPR",
        "semester": 5,
        "category": "other",
        "credits": 3,
        "elective_group": None,
        "type": "Theory (AEC)"
    },
    "BCS508": {
        "name": "Environmental Studies and E-waste Management",
        "semester": 5,
        "category": "other",
        "credits": 2,
        "elective_group": None,
        "type": "Theory (HSMS)"
    },

    # SEMESTER 6
    "BCS601": {
        "name": "Cloud Computing (Open Stack /Google)",
        "semester": 6,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory Integrated with Practical (IPCC)"
    },
    "BCS602": {
        "name": "Machine Learning",
        "semester": 6,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory (PCC)"
    },
    "BCS613A": {
        "name": "Blockchain Technology",
        "semester": 6,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 2",
        "type": "Theory (PEC)"
    },
    "BCS613B": {
        "name": "Computer Vision",
        "semester": 6,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 2",
        "type": "Theory (PEC)"
    },
    "BCS613C": {
        "name": "Compiler Design",
        "semester": 6,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 2",
        "type": "Theory (PEC)"
    },
    "BCS613D": {
        "name": "Advanced Java",
        "semester": 6,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 2",
        "type": "Theory (PEC)"
    },
    "BCS654A": {
        "name": "Introduction to Data Structures",
        "semester": 6,
        "category": "open_elective",
        "credits": 3,
        "elective_group": "OEC Group 1",
        "type": "Open Elective (OEC)"
    },
    "BCS654B": {
        "name": "Fundamentals of Operating Systems",
        "semester": 6,
        "category": "open_elective",
        "credits": 3,
        "elective_group": "OEC Group 1",
        "type": "Open Elective (OEC)"
    },
    "BIS654C": {
        "name": "Mobile Application Development",
        "semester": 6,
        "category": "open_elective",
        "credits": 3,
        "elective_group": "OEC Group 1",
        "type": "Open Elective (OEC)"
    },
    "BAI654D": {
        "name": "Introduction to Artificial Intelligence",
        "semester": 6,
        "category": "open_elective",
        "credits": 3,
        "elective_group": "OEC Group 1",
        "type": "Open Elective (OEC)"
    },
    "BCV654C": {
        "name": "Integrated Waste Management for a Smart City",
        "semester": 6,
        "category": "open_elective",
        "credits": 3,
        "elective_group": "OEC Group 1 (Inter-Dept)",
        "type": "Open Elective (OEC)"
    },
    "BCS685": {
        "name": "Project Phase I",
        "semester": 6,
        "category": "other",
        "credits": 2,
        "elective_group": None,
        "type": "Project (PROJ)"
    },
    "BCSL606": {
        "name": "Machine Learning Lab",
        "semester": 6,
        "category": "core",
        "credits": 1,
        "elective_group": None,
        "type": "Laboratory (PCCL)"
    },
    "BISL657A": {
        "name": "Tosca – Automated Software testing",
        "semester": 6,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-V",
        "type": "Skill Lab"
    },
    "BCSL657B": {
        "name": "React",
        "semester": 6,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-V",
        "type": "Skill Lab"
    },
    "BAIL657C": {
        "name": "Generative AI",
        "semester": 6,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-V",
        "type": "Skill Lab"
    },
    "BCSL657D": {
        "name": "Devops",
        "semester": 6,
        "category": "ability_enhancement",
        "credits": 1,
        "elective_group": "AEC/SEC-V",
        "type": "Skill Lab"
    },
    "BIKS609": {
        "name": "Indian Knowledge System",
        "semester": 6,
        "category": "other",
        "credits": 0,
        "elective_group": None,
        "type": "Mandatory Non-Credit (MC)"
    },

    # SEMESTER 7
    "BCS701": {
        "name": "Internet of Things",
        "semester": 7,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory Integrated with Practical (IPCC)"
    },
    "BCS702": {
        "name": "Parallel Computing",
        "semester": 7,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory Integrated with Practical (IPCC)"
    },
    "BCS703": {
        "name": "Cryptography & Network Security",
        "semester": 7,
        "category": "core",
        "credits": 4,
        "elective_group": None,
        "type": "Theory (PCC)"
    },
    "BCS714A": {
        "name": "Deep Learning",
        "semester": 7,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 3",
        "type": "Theory (PEC)"
    },
    "BCS714B": {
        "name": "Natural Language Processing",
        "semester": 7,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 3",
        "type": "Theory (PEC)"
    },
    "BAD714D": {
        "name": "Social Network Analysis",
        "semester": 7,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 3",
        "type": "Theory (PEC)"
    },
    "BCS714D": {
        "name": "Big Data Analytics",
        "semester": 7,
        "category": "professional_elective",
        "credits": 3,
        "elective_group": "PEC Group 3",
        "type": "Theory (PEC)"
    },
    "BCS755A": {
        "name": "Introduction to DBMS",
        "semester": 7,
        "category": "open_elective",
        "credits": 3,
        "elective_group": "OEC Group 2",
        "type": "Open Elective (OEC)"
    },
    "BCS755B": {
        "name": "Introduction to Algorithms",
        "semester": 7,
        "category": "open_elective",
        "credits": 3,
        "elective_group": "OEC Group 2",
        "type": "Open Elective (OEC)"
    },
    "BCS755C": {
        "name": "Software Engineering",
        "semester": 7,
        "category": "open_elective",
        "credits": 3,
        "elective_group": "OEC Group 2",
        "type": "Open Elective (OEC)"
    },
    "BCS755D": {
        "name": "Data Mining and Data Warehousing",
        "semester": 7,
        "category": "open_elective",
        "credits": 3,
        "elective_group": "OEC Group 2",
        "type": "Open Elective (OEC)"
    },
    "BCS786": {
        "name": "Major Project Phase-II",
        "semester": 7,
        "category": "other",
        "credits": 6,
        "elective_group": None,
        "type": "Project (PROJ)"
    }
}

def audit():
    print(f"Total Official Courses (Sem 3-7): {len(OFFICIAL_CURRICULUM)}")
    matrix = []
    
    # Check each course against local files
    for code, info in sorted(OFFICIAL_CURRICULUM.items(), key=lambda x: (x[1]["semester"], x[0])):
        sem = info["semester"]
        sem_str_data = f"{sem}RD SEM" if sem == 3 else f"{sem}TH SEM"
        
        # 1. Notes in knowledge/
        k_path = KNOWLEDGE_ROOT / code
        has_k_notes = False
        has_k_tb = False
        has_k_qb = False
        has_k_m1 = False
        if k_path.exists():
            files = os.listdir(k_path)
            has_k_notes = any(f.startswith("module") and f.endswith(".md") for f in files)
            has_k_m1 = "module1.md" in files
            has_k_tb = "textbook_notes.md" in files
            has_k_qb = "question_bank.md" in files
            
        # 2. Check DATA/VTU_CSE_Notes/
        data_notes_path = DATA_ROOT / "VTU_CSE_Notes" / sem_str_data / code
        data_notes_files = os.listdir(data_notes_path) if data_notes_path.exists() else []
        has_data_notes = len(data_notes_files) > 0
        
        # 3. Check Textbooks in DATA/VTU_CSE_Textbooks
        has_tb_data = False
        tb_sem_dir = DATA_ROOT / "VTU_CSE_Textbooks" / f"Sem_{sem}"
        if tb_sem_dir.exists():
            for d in os.listdir(tb_sem_dir):
                if d.startswith(code):
                    has_tb_data = True
                    break
        
        # 4. Check Question Papers in DATA/question_papers
        qp_dir = DATA_ROOT / "question_papers" / sem_str_data / code
        has_qp = qp_dir.exists() and len(os.listdir(qp_dir)) > 0
        
        # Also check notes question papers subfolder
        qp_notes_dir = data_notes_path / "question papers"
        has_qp_notes = qp_notes_dir.exists() and len(os.listdir(qp_notes_dir)) > 0
        
        # 5. Check Diagrams in DATA/diagrams
        diag_dir = DATA_ROOT / "diagrams" / sem_str_data / code
        has_diagrams = diag_dir.exists() and len(os.listdir(diag_dir)) > 0
        
        # 6. Check CourseOutcomes in DATA/VTU_CSE_CourseOutcomes
        co_dir = DATA_ROOT / "VTU_CSE_CourseOutcomes" / f"Sem_{sem}" / code
        has_co = co_dir.exists() and len(os.listdir(co_dir)) > 0
        
        missing = []
        if not (has_k_notes or has_data_notes):
            missing.append("Notes")
        if not (has_k_tb or has_tb_data):
            missing.append("Textbook")
        if not has_k_qb:
            missing.append("QuestionBank")
        if not (has_qp or has_qp_notes):
            missing.append("PYQ")
        if not has_diagrams:
            missing.append("Diagrams")
            
        row = {
            "semester": sem,
            "code": code,
            "name": info["name"],
            "category": info["category"],
            "elective_group": info["elective_group"],
            "type": info["type"],
            "notes": bool(has_k_notes or has_data_notes),
            "textbook": bool(has_k_tb or has_tb_data),
            "question_bank": bool(has_k_qb),
            "pyq": bool(has_qp or has_qp_notes),
            "model_papers": bool(has_qp), # model papers are indexed in qp
            "diagrams": bool(has_diagrams),
            "course_outcomes": bool(has_co),
            "knowledge_folder": bool(k_path.exists()),
            "missing": missing
        }
        matrix.append(row)
        
    print(f"Audited {len(matrix)} courses.")
    with open(ROOT / "knowledge" / "sem3_to_sem7_audit.json", "w", encoding="utf-8") as f:
        json.dump(matrix, f, indent=2)
        
    # Print summary counts
    print("\n--- Summary by Category ---")
    cats = {}
    for r in matrix:
        cats[r["category"]] = cats.get(r["category"], 0) + 1
    for c, cnt in cats.items():
        print(f"  {c}: {cnt}")
        
    print("\n--- Summary by Semester ---")
    sems = {}
    for r in matrix:
        sems[r["semester"]] = sems.get(r["semester"], 0) + 1
    for s, cnt in sorted(sems.items()):
        print(f"  Semester {s}: {cnt} courses")

if __name__ == "__main__":
    audit()
