#!/usr/bin/env python3
"""
AdaptLearn Knowledge Retrieval Test (Task 3, Step 3.16)

Tests that the knowledge layer can retrieve correct content for
representative queries. Uses keyword overlap, stemming, and phrase
matching (matching the RAG retrieval architecture) against ingested
knowledge files.

Usage:
  python scripts/test_knowledge_retrieval.py
"""

import json
import os
import re
import sys
from pathlib import Path
from collections import defaultdict

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

ROOT = Path(__file__).resolve().parents[1]
KNOWLEDGE_ROOT = ROOT / "knowledge"
SUBJECTS_JSON = KNOWLEDGE_ROOT / "subjects.json"

# ── Test cases ────────────────────────────────────────────────────────────────

TEST_CASES = [
    {
        "query": "What is addressing mode? Explain different types of addressing mode with an example.",
        "expected_subject": "BCS302",
        "expected_topics": ["addressing mode", "immediate", "register", "direct"],
        "must_not_match": ["software engineering", "distributed systems", "cloud"],
    },
    {
        "query": "Explain ARM architecture and instruction set.",
        "expected_subject": "BCS402",
        "expected_topics": ["arm", "instruction"],
        "must_not_match": ["database", "normalization"],
    },
    {
        "query": "Explain normalization with examples. Define 1NF, 2NF, 3NF and BCNF.",
        "expected_subject": "BCS403",
        "expected_topics": ["normalization", "normal form"],
        "must_not_match": ["addressing mode", "pipeline"],
    },
    {
        "query": "What is process scheduling? Explain Round Robin algorithm.",
        "expected_subject": "BCS303",
        "expected_topics": ["scheduling", "process", "round robin"],
        "must_not_match": ["compiler", "blockchain"],
    },
    {
        "query": "Explain binary search tree operations with examples.",
        "expected_subject": "BCS304",
        "expected_topics": ["binary", "tree", "search"],
        "must_not_match": ["addressing mode", "cloud"],
    },
    {
        "query": "What is K-Map? Explain 4-variable K-Map minimization.",
        "expected_subject": "BCS302",
        "expected_topics": ["k-map", "boolean", "minimiz"],
        "must_not_match": ["database", "operating system"],
    },
    {
        "query": "Explain the OSI model layers with their functions.",
        "expected_subject": "BCS502",
        "expected_topics": ["osi", "layer"],
        "must_not_match": ["addressing mode", "normalization"],
    },
    {
        "query": "Explain 8051 microcontroller architecture and pin diagram.",
        "expected_subject": "BCS402",
        "expected_topics": ["8051", "microcontroller"],
        "must_not_match": ["cloud", "compiler"],
    },
]

# ── Tokenizer & Stemming ──────────────────────────────────────────────────────

STOP_WORDS = {
    "what", "is", "a", "an", "the", "and", "or", "in", "on", "of", "to", "for",
    "with", "by", "at", "from", "as", "explain", "describe", "discuss", "neat",
    "diagram", "sketch", "suitable", "how", "why", "which", "different", "state",
    "list", "write", "note", "between", "define", "give", "types", "various",
    "example", "examples", "using", "use", "uses", "used", "their", "following",
    "terms", "show", "compare", "brief", "briefly", "per", "also", "all", "any",
}

NUM_MAP = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
}


def stem(w: str) -> str:
    """Lightweight suffix stemming."""
    w = w.lower()
    for suff in ["ation", "tions", "tion", "ing", "ies", "es", "ed", "s"]:
        if w.endswith(suff) and len(w) > len(suff) + 2:
            return w[:-len(suff)]
    return w


def normalize_text(text: str) -> str:
    """Normalize text: unify hyphens, map numbers, remove punctuation."""
    t = text.lower()
    t = re.sub(r"k[\s\-_]+map", " kmap ", t)
    t = re.sub(r"[^a-z0-9]", " ", t)
    for num_digit, num_word in NUM_MAP.items():
        t = re.sub(rf"\b{num_digit}\b", f" {num_digit} {num_word} ", t)
    return " ".join(t.split())


def tokenize(text: str) -> set:
    """Tokenize and stem content words."""
    norm = normalize_text(text)
    words = norm.split()
    return {stem(w) for w in words if len(w) > 2 and w not in STOP_WORDS}


def extract_phrases(query: str) -> list[tuple[str, int]]:
    """Extract meaningful 2-word and 3-word phrases from query (ignoring pure stopwords)."""
    norm = normalize_text(query)
    words = norm.split()
    phrases = []
    for l in [3, 2]:
        for i in range(len(words) - l + 1):
            window = words[i:i + l]
            # Disallow all-stopword phrases like "with an", "types of"
            if any(w not in STOP_WORDS for w in window):
                phrases.append((" ".join(window), l * 4))
    return phrases


# ── Knowledge search ─────────────────────────────────────────────────────────

def search_knowledge(query: str, top_k: int = 5) -> list[dict]:
    """Search all knowledge files using keyword overlap, stemming, and phrase bonus."""
    q_tokens = tokenize(query)
    q_phrases = extract_phrases(query)
    results = []

    if not KNOWLEDGE_ROOT.exists():
        return results

    for subj_dir in sorted(KNOWLEDGE_ROOT.iterdir()):
        if not subj_dir.is_dir() or subj_dir.name.startswith("."):
            continue
        subject_code = subj_dir.name

        for md_file in sorted(subj_dir.glob("*.md")):
            try:
                content = md_file.read_text(encoding="utf-8", errors="replace")
            except Exception:
                continue

            # Evaluate sections / paragraphs
            paragraphs = content.split("\n\n")
            best_score = 0
            best_snippet = ""

            for para in paragraphs:
                para_clean = para.strip()
                if len(para_clean) < 30:
                    continue

                para_norm = normalize_text(para_clean)
                para_tokens = tokenize(para_norm)

                overlap = q_tokens & para_tokens
                score = len(overlap) * 2

                # Exact technical phrase bonuses
                for phrase, bonus in q_phrases:
                    if phrase in para_norm:
                        score += bonus

                if score > best_score:
                    best_score = score
                    best_snippet = para_clean[:250]

            if best_score > 0:
                results.append({
                    "subject_code": subject_code,
                    "file": md_file.name,
                    "score": best_score,
                    "snippet": best_snippet,
                })

    results.sort(key=lambda x: x["score"], reverse=True)
    return results[:top_k]


# ── Test runner ───────────────────────────────────────────────────────────────

def run_tests() -> tuple[int, int]:
    passed = 0
    failed = 0

    print("=" * 70)
    print("KNOWLEDGE RETRIEVAL TESTS")
    print("=" * 70)

    for i, tc in enumerate(TEST_CASES, 1):
        query = tc["query"]
        expected_subj = tc["expected_subject"]
        expected_topics = tc["expected_topics"]
        must_not = tc.get("must_not_match", [])

        print(f"\n{'─' * 70}")
        print(f"Test {i}: {query[:60]}...")
        print(f"Expected subject: {expected_subj}")

        results = search_knowledge(query)

        if not results:
            print(f"  ✗ FAIL: No results returned")
            failed += 1
            continue

        top = results[0]
        print(f"  Top result: {top['subject_code']}/{top['file']} (score: {top['score']})")
        print(f"  Snippet: {top['snippet'][:100]}...")

        # Check 1: Correct subject in top results
        top_subjects = [r["subject_code"] for r in results[:3]]
        subject_match = expected_subj in top_subjects

        # Check 2: Expected topics in content
        all_snippets = " ".join(r["snippet"].lower() for r in results[:3])
        topic_hits = sum(1 for t in expected_topics if t.lower() in all_snippets)
        topic_match = topic_hits >= 1

        # Check 3: No forbidden content in top result
        top_snippet = top["snippet"].lower()
        forbidden_hits = [m for m in must_not if m.lower() in top_snippet]
        no_forbidden = len(forbidden_hits) == 0

        test_pass = subject_match and topic_match and no_forbidden

        if test_pass:
            print(f"  ✓ PASS (subject: {'✓' if subject_match else '✗'}, topics: {topic_hits}/{len(expected_topics)}, clean: {'✓' if no_forbidden else '✗'})")
            passed += 1
        else:
            reasons = []
            if not subject_match:
                reasons.append(f"subject mismatch (got {top_subjects}, wanted {expected_subj})")
            if not topic_match:
                reasons.append(f"topic miss ({topic_hits}/{len(expected_topics)})")
            if not no_forbidden:
                reasons.append(f"forbidden content: {forbidden_hits}")
            print(f"  ✗ FAIL: {', '.join(reasons)}")
            failed += 1

        # Show top 3 results for debugging
        for j, r in enumerate(results[:3]):
            print(f"    [{j + 1}] {r['subject_code']}/{r['file']} score={r['score']}")

    print(f"\n{'=' * 70}")
    print(f"Results: {passed} passed, {failed} failed out of {len(TEST_CASES)}")
    print("=" * 70)

    return passed, failed


if __name__ == "__main__":
    passed, failed = run_tests()
    sys.exit(1 if failed > 0 else 0)
