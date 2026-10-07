#!/usr/bin/env python3
"""
AdaptLearn Knowledge Ingestion Pipeline (Task 3)

Ingests PDF/TXT/MD source material from DATA/ into structured
knowledge/ directory with per-subject, per-module Markdown files,
question-bank solutions as searchable knowledge, and metadata.

Usage:
  python scripts/ingest_knowledge.py                    # full run
  python scripts/ingest_knowledge.py --subject BCS302   # single subject
  python scripts/ingest_knowledge.py --dry-run           # report only
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path
from collections import defaultdict
from typing import Optional

ROOT = Path(__file__).resolve().parents[1]
DATA_ROOT = ROOT / "DATA"
NOTES_ROOT = DATA_ROOT / "VTU_CSE_Notes"
QP_ROOT = DATA_ROOT / "question_papers"
TB_ROOT = DATA_ROOT / "VTU_CSE_Textbooks"
CO_ROOT = DATA_ROOT / "VTU_CSE_CourseOutcomes"
KNOWLEDGE_ROOT = ROOT / "knowledge"
SUBJECTS_JSON = KNOWLEDGE_ROOT / "subjects.json"


def load_subjects() -> dict:
    """Load canonical subject metadata."""
    with open(SUBJECTS_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data["subjects"]


# ── TXT cleaning ──────────────────────────────────────────────────────────────

NOISE_PATTERNS = [
    re.compile(r"^\s*\d{1,3}\s*$"),
    re.compile(r"^(dept|department)\s+of", re.I),
    re.compile(r"^(dr|prof|mr|mrs)\.", re.I),
    re.compile(r"^vtu(code|resource|circle)", re.I),
    re.compile(r"^\s*[-_=]{5,}\s*$"),
    re.compile(r"^(course\s+name|course\s+code|semester|contents?)\s*:", re.I),
    re.compile(r"^(figure|table)\s+\d+", re.I),
    re.compile(r"^(ref(erence)?s?|bibliography)\s*$", re.I),
    re.compile(r"^QUESTION BANK WITH SOLUTION", re.I),
    re.compile(r"^vtucode\.in\s*$", re.I),
]


def is_noise_line(line: str) -> bool:
    stripped = line.strip()
    if not stripped:
        return False  # keep blank lines for paragraph breaks
    return any(p.match(stripped) for p in NOISE_PATTERNS)


def clean_text(raw: str) -> str:
    """Clean raw text extraction output."""
    raw = raw.replace("\xa0", " ").replace("\x0c", "\n")
    raw = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]", "", raw)
    raw = re.sub(r"\n{3,}", "\n\n", raw)
    raw = re.sub(r" {3,}", "  ", raw)
    lines = raw.split("\n")
    cleaned = [l for l in lines if not is_noise_line(l)]
    return "\n".join(cleaned).strip()


# ── Module detection ──────────────────────────────────────────────────────────

MODULE_RE = re.compile(
    r"module[_\-\s]*(\d+)",
    re.I,
)


def detect_module_from_filename(filename: str) -> Optional[int]:
    """Extract module number from filename like BCS302-module-2-textbook.txt."""
    m = MODULE_RE.search(filename)
    return int(m.group(1)) if m else None


def detect_module_from_content(text: str) -> Optional[int]:
    """Try to detect module number from content headings."""
    m = re.search(r"(?:MODULE|Module)\s*[-–—:]?\s*(\d+)", text[:2000])
    return int(m.group(1)) if m else None


# ── Heading detection ─────────────────────────────────────────────────────────

def is_heading(s: str) -> bool:
    s = s.strip()
    if not s or len(s) > 130:
        return False
    if re.match(r"^\d+(\.\d+)*\.?\s+[A-Z]", s) and len(s) < 100:
        return True
    nc = re.sub(r"[^A-Z\s]", "", s)
    if len(nc.strip()) >= 4 and nc.strip() == s.strip() and len(s) < 70:
        return True
    if re.match(r"^(Chapter|CHAPTER)\s+\d+", s):
        return True
    return False


# ── Topic extraction from text ────────────────────────────────────────────────

def extract_topics_from_text(text: str) -> list[str]:
    """Extract topic headings from text content."""
    topics = []
    for line in text.split("\n"):
        stripped = line.strip()
        if is_heading(stripped) and len(stripped) > 5:
            # Clean heading
            topic = re.sub(r"^\d+(\.\d+)*\.?\s+", "", stripped).strip()
            topic = re.sub(r"^(Chapter|CHAPTER)\s+\d+\s*", "", topic).strip()
            if topic and len(topic) > 3 and len(topic) < 80:
                topics.append(topic)
    return topics[:20]  # cap


# ── Question bank solution parser ────────────────────────────────────────────

def parse_question_bank_solutions(text: str) -> list[dict]:
    """Parse question-bank-with-solution TXT into Q&A pairs."""
    solutions = []
    lines = text.split("\n")

    current_q = None
    current_a_lines = []
    current_module = None

    for line in lines:
        stripped = line.strip()

        # Module detection
        mod_m = re.match(r"MODULE\s*(\d+)", stripped, re.I)
        if mod_m:
            current_module = int(mod_m.group(1))
            continue

        mod_m2 = re.match(r"MODULE\s*(\d+)\s*&\s*(\d+)", stripped, re.I)
        if mod_m2:
            current_module = int(mod_m2.group(1))
            continue

        # Question detection
        q_match = re.match(
            r"^(\d+)\.\s+(.+?)(?:(\d+)\s*$)?",
            stripped,
        )
        if q_match and len(stripped) > 20:
            # Save previous Q&A
            if current_q and current_a_lines:
                answer_text = "\n".join(current_a_lines).strip()
                if len(answer_text) > 50:
                    solutions.append({
                        "question": current_q,
                        "answer": answer_text,
                        "module": current_module,
                    })

            current_q = stripped
            current_a_lines = []
        elif current_q is not None:
            # Accumulate answer lines
            if stripped and not is_noise_line(line):
                current_a_lines.append(stripped)

    # Last Q&A
    if current_q and current_a_lines:
        answer_text = "\n".join(current_a_lines).strip()
        if len(answer_text) > 50:
            solutions.append({
                "question": current_q,
                "answer": answer_text,
                "module": current_module,
            })

    return solutions


# ── Structured Markdown generation ────────────────────────────────────────────

def generate_module_markdown(
    subject_code: str,
    subject_name: str,
    module_num: int,
    module_title: str,
    content: str,
    sources: list[str],
    content_type: str = "module_notes",
) -> str:
    """Generate structured module Markdown."""
    md_lines = [
        f"# {subject_code} — Module {module_num}",
        "",
        f"## {module_title}",
        "",
        f"**Subject:** {subject_code} ({subject_name})",
        f"**Module:** Module {module_num}",
        f"**Content type:** {content_type}",
        f"**Sources:** {', '.join(sources)}",
        "",
        "---",
        "",
    ]

    # Add the actual content, preserving structure
    md_lines.append(content)
    md_lines.append("")

    return "\n".join(md_lines)


def generate_qbank_markdown(
    subject_code: str,
    subject_name: str,
    solutions: list[dict],
    source_file: str,
) -> str:
    """Generate question-bank solutions as structured knowledge Markdown."""
    md_lines = [
        f"# {subject_code} — Question Bank Solutions",
        "",
        f"**Subject:** {subject_code} ({subject_name})",
        f"**Content type:** question_bank_solution",
        f"**Source:** {source_file}",
        "",
        "---",
        "",
    ]

    current_module = None
    for sol in solutions:
        if sol["module"] and sol["module"] != current_module:
            current_module = sol["module"]
            md_lines.append(f"## Module {current_module}")
            md_lines.append("")

        md_lines.append(f"### {sol['question']}")
        md_lines.append("")
        md_lines.append(sol["answer"])
        md_lines.append("")
        md_lines.append("---")
        md_lines.append("")

    return "\n".join(md_lines)


# ── Source file discovery ─────────────────────────────────────────────────────

def discover_subject_sources(subject_code: str, semester_label: str) -> dict:
    """Discover all source files for a subject."""
    sources = {
        "module_pdfs": [],
        "module_txts": [],
        "question_papers": [],
        "question_bank_solutions": [],
        "question_banks": [],
        "important_questions": [],
        "model_papers": [],
        "previous_papers": [],
        "textbook_notes": [],
        "textbooks": [],
        "course_outcomes": [],
        "written_answers": [],
    }

    # Notes directory
    notes_dir = NOTES_ROOT / semester_label / subject_code
    if notes_dir.exists():
        for f in sorted(notes_dir.iterdir()):
            if f.is_file() and f.suffix == ".pdf" and "module" in f.name.lower():
                sources["module_pdfs"].append(str(f))
            elif f.is_file() and f.suffix == ".txt" and "module" in f.name.lower():
                sources["module_txts"].append(str(f))

        # Question papers subdirectory
        qp_sub = notes_dir / "question papers"
        if qp_sub.exists():
            for f in sorted(qp_sub.iterdir()):
                fname = f.name.lower()
                if f.is_file():
                    if "question-bank-with-solution" in fname and f.suffix == ".txt":
                        sources["question_bank_solutions"].append(str(f))
                    elif "question-bank" in fname and f.suffix == ".txt":
                        sources["question_banks"].append(str(f))
                    elif "written" in fname and f.suffix == ".txt":
                        sources["written_answers"].append(str(f))
                    elif f.suffix in (".txt", ".pdf"):
                        sources["question_papers"].append(str(f))

    # Question papers directory (processed MD)
    qp_dir = QP_ROOT / semester_label / subject_code
    if qp_dir.exists():
        for f in sorted(qp_dir.iterdir()):
            if f.is_file() and f.suffix == ".md":
                fname = f.name.lower()
                if "important_questions" in fname:
                    sources["important_questions"].append(str(f))
                elif "model_papers" in fname:
                    sources["model_papers"].append(str(f))
                elif "previous_papers" in fname:
                    sources["previous_papers"].append(str(f))
                elif "textbook_notes" in fname:
                    sources["textbook_notes"].append(str(f))

    # Textbooks
    sem_num = re.search(r"(\d+)", semester_label)
    if sem_num:
        tb_sem_dir = TB_ROOT / f"Sem_{sem_num.group(1)}"
        if tb_sem_dir.exists():
            for d in sorted(tb_sem_dir.iterdir()):
                if d.is_dir() and d.name.startswith(subject_code):
                    for f in sorted(d.iterdir()):
                        if f.is_file():
                            sources["textbooks"].append(str(f))

    # Course outcomes
    co_sem_dir = CO_ROOT / f"Sem_{sem_num.group(1)}" / subject_code if sem_num else None
    if co_sem_dir and co_sem_dir.exists():
        for f in sorted(co_sem_dir.iterdir()):
            if f.is_file() and f.suffix == ".md":
                sources["course_outcomes"].append(str(f))

    return sources


# ── TXT content quality check ────────────────────────────────────────────────

def is_usable_txt(filepath: str, min_chars: int = 200) -> bool:
    """Check if a TXT file has enough content to be useful."""
    try:
        with open(filepath, "r", encoding="utf-8", errors="replace") as f:
            content = f.read()
        cleaned = clean_text(content)
        return len(cleaned) >= min_chars
    except Exception:
        return False


# ── Main ingestion ────────────────────────────────────────────────────────────

class IngestionStats:
    def __init__(self):
        self.subjects_discovered = 0
        self.modules_discovered = 0
        self.source_files_processed = 0
        self.qbank_solutions_indexed = 0
        self.diagrams_extracted = 0
        self.failed_documents = []
        self.missing_modules = []
        self.duplicates_detected = 0
        self.empty_txt_files = []
        self.module_markdowns_generated = 0
        self.problems = []


# ── Textbook fallback extraction for missing modules ─────────────────────────

def extract_fallback_module_content(
    subject_code: str,
    mod_num: int,
    sources: dict,
) -> Optional[tuple[str, list[str], str]]:
    """Extract fallback content for a missing module from subject textbooks."""
    tb_paths = sources.get("textbooks", [])
    if not tb_paths:
        return None

    # BCS302 (Digital Design and Computer Organization)
    if subject_code == "BCS302":
        stallings = [p for p in tb_paths if "Stallings" in p and p.endswith(".txt")]
        if stallings:
            try:
                with open(stallings[0], "r", encoding="utf-8", errors="replace") as f:
                    text = f.read()
                if mod_num == 3:
                    pos_c3 = text.find("CHAPTER 3 / A TOP-LEVEL VIEW")
                    pos_c4 = text.find("CHAPTER 4 / CACHE MEMORY")
                    pos_c13 = text.find("CHAPTER 13 / INSTRUCTION SETS: ADDRESSING")
                    pos_c14 = text.find("CHAPTER 14 / PROCESSOR STRUCTURE")
                    part1 = text[pos_c3:pos_c4] if pos_c3 != -1 and pos_c4 != -1 else ""
                    part2 = text[pos_c13:pos_c14] if pos_c13 != -1 and pos_c14 != -1 else ""
                    content = clean_text(part1 + "\n\n" + part2)
                    topics = [
                        "Computer Components and Functions",
                        "Bus Interconnection Structures",
                        "Instruction Cycles and Processing",
                        "Addressing Modes",
                        "Immediate Addressing",
                        "Direct and Indirect Addressing",
                        "Register and Register Indirect Addressing",
                        "Displacement Addressing",
                        "Stack Addressing",
                        "Instruction Formats",
                    ]
                    return content, topics, Path(stallings[0]).name
                elif mod_num == 4:
                    pos_c4 = text.find("CHAPTER 4 / CACHE MEMORY")
                    pos_c6 = text.find("CHAPTER 6 / EXTERNAL MEMORY")
                    pos_c7 = text.find("CHAPTER 7 / INPUT/OUTPUT")
                    pos_c8 = text.find("CHAPTER 8 / OPERATING SYSTEM")
                    part1 = text[pos_c4:pos_c6] if pos_c4 != -1 and pos_c6 != -1 else ""
                    part2 = text[pos_c7:pos_c8] if pos_c7 != -1 and pos_c8 != -1 else ""
                    content = clean_text(part1 + "\n\n" + part2)
                    topics = [
                        "Cache Memory Principles",
                        "Cache Mapping Functions (Direct, Associative, Set-Associative)",
                        "Internal Memory and Semiconductor RAM",
                        "Input/Output Modules",
                        "Programmed I/O",
                        "Interrupt-Driven I/O",
                        "Direct Memory Access (DMA)",
                    ]
                    return content, topics, Path(stallings[0]).name
            except Exception:
                pass

    # BCS304 (Data Structures and Applications)
    elif subject_code == "BCS304":
        morin = [p for p in tb_paths if "Morin" in p and p.endswith(".txt")]
        if morin and mod_num == 4:
            try:
                with open(morin[0], "r", encoding="utf-8", errors="replace") as f:
                    text = f.read()
                pos_c6 = text.find("Chapter 6\nBinary Trees")
                pos_c10 = text.find("Chapter 10\nHeaps")
                if pos_c6 != -1 and pos_c10 != -1:
                    content = clean_text(text[pos_c6:pos_c10])
                    topics = [
                        "Binary Trees",
                        "Binary Search Trees (BST)",
                        "Tree Traversals (Inorder, Preorder, Postorder)",
                        "Random Binary Search Trees",
                        "Balanced Search Trees",
                        "Scapegoat Trees",
                        "Red-Black Trees",
                    ]
                    return content, topics, Path(morin[0]).name
            except Exception:
                pass

    # BCS306A (Java Programming)
    elif subject_code == "BCS306A":
        schildt = [p for p in tb_paths if "Schildt" in p and p.endswith(".txt")]
        if schildt:
            try:
                with open(schildt[0], "r", encoding="utf-8", errors="replace") as f:
                    text = f.read()
                if mod_num == 1:
                    pos_c1 = text.find("CHAPTER 1\nTHE HISTORY AND EVOLUTION OF JAVA")
                    pos_c6 = text.find("CHAPTER 6\nINTRODUCING CLASSES")
                    if pos_c1 != -1 and pos_c6 != -1:
                        content = clean_text(text[pos_c1:pos_c6])
                        topics = [
                            "Java Overview and Evolution",
                            "Data Types, Variables and Arrays",
                            "Operators",
                            "Control Statements",
                        ]
                        return content, topics, Path(schildt[0]).name
                elif mod_num == 2:
                    pos_c6 = text.find("CHAPTER 6\nINTRODUCING CLASSES")
                    pos_c9 = text.find("CHAPTER 9\nPACKAGES AND INTERFACES")
                    if pos_c6 != -1 and pos_c9 != -1:
                        content = clean_text(text[pos_c6:pos_c9])
                        topics = [
                            "Classes and Objects",
                            "Methods and Constructors",
                            "Inheritance and Method Overriding",
                        ]
                        return content, topics, Path(schildt[0]).name
            except Exception:
                pass

    # Generic textbook chapter matching for other missing subjects
    txt_tbs = [p for p in tb_paths if p.endswith(".txt")]
    if txt_tbs:
        try:
            with open(txt_tbs[0], "r", encoding="utf-8", errors="replace") as f:
                text = f.read()
            # Try to grab ~100KB slice
            chunk_size = min(len(text) // 5, 120000)
            start_offset = (mod_num - 1) * chunk_size
            end_offset = min(start_offset + chunk_size, len(text))
            if start_offset < len(text) and end_offset - start_offset > 5000:
                content = clean_text(text[start_offset:end_offset])
                topics = extract_topics_from_text(content)
                return content, topics, Path(txt_tbs[0]).name
        except Exception:
            pass

    return None


def ingest_subject(
    subject_code: str,
    subject_info: dict,
    stats: IngestionStats,
    dry_run: bool = False,
) -> dict:
    """Ingest all knowledge for a single subject."""
    subject_name = subject_info["name"]
    semester_label = subject_info["semester_label"]
    modules_def = subject_info.get("modules", {})

    # Discover sources
    sources = discover_subject_sources(subject_code, semester_label)

    # Create knowledge directory
    subj_dir = KNOWLEDGE_ROOT / subject_code
    diag_dir = subj_dir / "diagrams"
    if not dry_run:
        subj_dir.mkdir(parents=True, exist_ok=True)
        diag_dir.mkdir(parents=True, exist_ok=True)

    manifest_entry = {
        "subject_code": subject_code,
        "subject_name": subject_name,
        "semester": subject_info["semester"],
        "modules": [],
        "sources_discovered": {},
        "ingestion_results": {
            "modules_created": [],
            "qbank_solutions": 0,
            "errors": [],
        },
    }

    # Count sources
    for src_type, src_list in sources.items():
        manifest_entry["sources_discovered"][src_type] = len(src_list)

    # ── Process module TXT files ──────────────────────────────────────────
    modules_ingested = set()

    for txt_path in sources["module_txts"]:
        txt_file = Path(txt_path)
        module_num = detect_module_from_filename(txt_file.name)
        if module_num is None:
            continue

        if not is_usable_txt(txt_path):
            stats.empty_txt_files.append(txt_path)
            manifest_entry["ingestion_results"]["errors"].append(
                f"Empty/unusable TXT: {txt_file.name} ({os.path.getsize(txt_path)} bytes)"
            )
            continue

        try:
            with open(txt_path, "r", encoding="utf-8", errors="replace") as f:
                raw_content = f.read()

            content = clean_text(raw_content)
            topics = extract_topics_from_text(content)
            module_title = modules_def.get(str(module_num), f"Module {module_num}")

            if not dry_run:
                md_content = generate_module_markdown(
                    subject_code=subject_code,
                    subject_name=subject_name,
                    module_num=module_num,
                    module_title=module_title,
                    content=content,
                    sources=[txt_file.name],
                    content_type="module_notes",
                )
                out_path = subj_dir / f"module{module_num}.md"
                with open(out_path, "w", encoding="utf-8") as f:
                    f.write(md_content)

            modules_ingested.add(module_num)
            stats.modules_discovered += 1
            stats.source_files_processed += 1
            manifest_entry["ingestion_results"]["modules_created"].append(module_num)
            manifest_entry["modules"].append({
                "module": module_num,
                "title": module_title,
                "topics": topics[:10],
                "sources": [txt_file.name],
                "content_chars": len(content),
            })

        except Exception as e:
            stats.failed_documents.append((txt_path, str(e)))
            manifest_entry["ingestion_results"]["errors"].append(f"Error: {txt_file.name}: {e}")

    # ── Process question bank solutions ───────────────────────────────────
    for qbs_path in sources["question_bank_solutions"]:
        qbs_file = Path(qbs_path)
        try:
            with open(qbs_path, "r", encoding="utf-8", errors="replace") as f:
                raw_content = f.read()

            solutions = parse_question_bank_solutions(raw_content)

            if solutions and not dry_run:
                md_content = generate_qbank_markdown(
                    subject_code=subject_code,
                    subject_name=subject_name,
                    solutions=solutions,
                    source_file=qbs_file.name,
                )
                out_path = subj_dir / "question_bank_solutions.md"
                with open(out_path, "w", encoding="utf-8") as f:
                    f.write(md_content)

            stats.qbank_solutions_indexed += len(solutions)
            stats.source_files_processed += 1
            manifest_entry["ingestion_results"]["qbank_solutions"] = len(solutions)

            # Add topics from solutions to module entries
            for sol in solutions:
                if sol["module"]:
                    for mod_entry in manifest_entry["modules"]:
                        if mod_entry["module"] == sol["module"]:
                            q_topic = re.sub(r"^\d+\.\s*", "", sol["question"]).strip()
                            if q_topic and q_topic not in mod_entry.get("question_bank_topics", []):
                                mod_entry.setdefault("question_bank_topics", []).append(q_topic[:80])

        except Exception as e:
            stats.failed_documents.append((qbs_path, str(e)))
            manifest_entry["ingestion_results"]["errors"].append(f"Error: {qbs_file.name}: {e}")

    # ── Process important_questions.md ────────────────────────────────────
    for iq_path in sources["important_questions"]:
        iq_file = Path(iq_path)
        try:
            with open(iq_path, "r", encoding="utf-8") as f:
                content = f.read()

            if not dry_run and len(content) > 100:
                out_path = subj_dir / "important_questions.md"
                # Wrap with metadata header
                header = (
                    f"# {subject_code} — Important Questions\n\n"
                    f"**Subject:** {subject_code} ({subject_name})\n"
                    f"**Content type:** important_questions\n"
                    f"**Source:** {iq_file.name}\n\n---\n\n"
                )
                with open(out_path, "w", encoding="utf-8") as f:
                    f.write(header + content)

            stats.source_files_processed += 1
        except Exception as e:
            stats.failed_documents.append((iq_path, str(e)))

    # ── Process textbook_notes.md ─────────────────────────────────────────
    for tb_path in sources["textbook_notes"]:
        tb_file = Path(tb_path)
        try:
            with open(tb_path, "r", encoding="utf-8") as f:
                content = f.read()

            if not dry_run and len(content) > 200:
                out_path = subj_dir / "textbook_notes.md"
                header = (
                    f"# {subject_code} — Textbook Notes\n\n"
                    f"**Subject:** {subject_code} ({subject_name})\n"
                    f"**Content type:** textbook_notes\n"
                    f"**Source:** {tb_file.name}\n\n---\n\n"
                )
                with open(out_path, "w", encoding="utf-8") as f:
                    f.write(header + content)

            stats.source_files_processed += 1
        except Exception as e:
            stats.failed_documents.append((tb_path, str(e)))

    # ── Check for missing modules and apply textbook fallback ─────────────
    for mod_num_str in modules_def:
        mod_num = int(mod_num_str)
        if mod_num not in modules_ingested:
            fallback_res = extract_fallback_module_content(subject_code, mod_num, sources)
            if fallback_res:
                content, topics, source_name = fallback_res
                mod_title = modules_def.get(mod_num_str, f"Module {mod_num}")
                if not dry_run and content:
                    md_content = generate_module_markdown(
                        subject_code=subject_code,
                        subject_name=subject_name,
                        module_num=mod_num,
                        module_title=mod_title,
                        content=content,
                        sources=[source_name],
                        content_type="textbook_fallback",
                    )
                    out_path = subj_dir / f"module{mod_num}.md"
                    with open(out_path, "w", encoding="utf-8") as f:
                        f.write(md_content)

                modules_ingested.add(mod_num)
                stats.module_markdowns_generated += 1
                manifest_entry["ingestion_results"]["modules_created"].append(f"module{mod_num}.md (fallback)")
                manifest_entry["modules"].append({
                    "module": mod_num,
                    "title": mod_title,
                    "topics": topics[:10],
                    "sources": [source_name],
                    "content_chars": len(content),
                    "fallback": True,
                })
            else:
                stats.missing_modules.append(f"{subject_code} Module {mod_num}")
                manifest_entry["ingestion_results"]["errors"].append(
                    f"Missing module {mod_num} TXT"
                )

    # ── Write subject metadata.json ───────────────────────────────────────
    if not dry_run:
        metadata = {
            "subject_code": subject_code,
            "subject_name": subject_name,
            "semester": subject_info["semester"],
            "semester_label": semester_label,
            "modules": {},
            "sources": {k: v for k, v in sources.items() if v},
            "module_titles": modules_def,
        }
        for mod_entry in manifest_entry["modules"]:
            metadata["modules"][str(mod_entry["module"])] = {
                "title": mod_entry["title"],
                "topics": mod_entry.get("topics", []),
                "sources": mod_entry.get("sources", []),
                "content_chars": mod_entry.get("content_chars", 0),
            }

        with open(subj_dir / "metadata.json", "w", encoding="utf-8") as f:
            json.dump(metadata, f, indent=2, ensure_ascii=False)

    stats.subjects_discovered += 1
    return manifest_entry


def main():
    parser = argparse.ArgumentParser(description="AdaptLearn Knowledge Ingestion")
    parser.add_argument("--subject", type=str, help="Ingest single subject (e.g. BCS302)")
    parser.add_argument("--dry-run", action="store_true", help="Report only, no writes")
    args = parser.parse_args()

    subjects = load_subjects()
    stats = IngestionStats()
    manifest_entries = []

    target_subjects = (
        {args.subject: subjects[args.subject]}
        if args.subject and args.subject in subjects
        else subjects
    )

    print(f"{'[DRY RUN] ' if args.dry_run else ''}AdaptLearn Knowledge Ingestion")
    print(f"Subjects to process: {len(target_subjects)}")
    print("=" * 60)

    for code, info in sorted(target_subjects.items()):
        print(f"\n▸ {code}: {info['name']} (Sem {info['semester']})")
        entry = ingest_subject(code, info, stats, dry_run=args.dry_run)
        manifest_entries.append(entry)

        mods = entry["ingestion_results"]["modules_created"]
        qbs = entry["ingestion_results"]["qbank_solutions"]
        errs = entry["ingestion_results"]["errors"]
        print(f"  Modules: {len(mods)}, Q-Bank solutions: {qbs}")
        if errs:
            for e in errs[:3]:
                print(f"  ⚠ {e}")

    # ── Write knowledge_manifest.json ─────────────────────────────────────
    if not args.dry_run:
        manifest = {
            "schema_version": "1.0",
            "generated_by": "scripts/ingest_knowledge.py",
            "subjects": manifest_entries,
        }
        with open(KNOWLEDGE_ROOT / "knowledge_manifest.json", "w", encoding="utf-8") as f:
            json.dump(manifest, f, indent=2, ensure_ascii=False)

    # ── Print summary ─────────────────────────────────────────────────────
    print("\n" + "=" * 60)
    print("INGESTION SUMMARY")
    print("=" * 60)
    print(f"Subjects discovered:        {stats.subjects_discovered}")
    print(f"Modules discovered:         {stats.modules_discovered}")
    print(f"Source files processed:      {stats.source_files_processed}")
    print(f"Q-Bank solutions indexed:   {stats.qbank_solutions_indexed}")
    print(f"Diagrams extracted:         {stats.diagrams_extracted}")
    print(f"Failed documents:           {len(stats.failed_documents)}")
    print(f"Missing modules:            {len(stats.missing_modules)}")
    print(f"Empty/unusable TXT files:   {len(stats.empty_txt_files)}")

    if stats.failed_documents:
        print("\nFailed documents:")
        for path, err in stats.failed_documents:
            print(f"  ✗ {path}: {err}")

    if stats.missing_modules:
        print(f"\nMissing modules ({len(stats.missing_modules)}):")
        for m in stats.missing_modules:
            print(f"  ✗ {m}")

    if stats.empty_txt_files:
        print(f"\nEmpty/unusable TXT files ({len(stats.empty_txt_files)}):")
        for p in stats.empty_txt_files[:10]:
            print(f"  ⚠ {p}")

    return stats


if __name__ == "__main__":
    main()
