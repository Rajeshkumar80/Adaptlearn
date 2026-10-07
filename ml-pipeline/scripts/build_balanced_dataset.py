"""
build_balanced_dataset.py
=========================
FAST: hash-based dedup, no slow SequenceMatcher in balance step.

Step 1: Generate pairs for subjects below 2000 cap (pure Python, no LLM)
Step 2: Cap all subjects at 2000, merge, write train/val/test splits

Target: 25 subjects x 2000 = 50,000 total
Training time: ~8-10 hours on RTX 4050

Usage:
  python scripts/build_balanced_dataset.py            # both steps
  python scripts/build_balanced_dataset.py --step 1   # generate only
  python scripts/build_balanced_dataset.py --step 2   # balance+merge only
  python scripts/build_balanced_dataset.py --dry-run  # preview counts
"""

import argparse, json, random, re
from pathlib import Path
from difflib import SequenceMatcher

ROOT       = Path(__file__).resolve().parents[2]
NOTES_ROOT = ROOT / "DATA" / "VTU_CSE_Notes"
TB_ROOT    = ROOT / "DATA" / "VTU_CSE_Textbooks"
QP_ROOT    = ROOT / "DATA" / "question_papers"
OUT_DIR    = ROOT / "ml-pipeline" / "output"
OUT_NOTES  = OUT_DIR / "training_data_notes.jsonl"
OUT_QP     = OUT_DIR / "training_data_qpapers.jsonl"

CAP = 2000   # pairs per subject -> 25 x 2000 = 50,000

SUBJECTS = {
    "BCS301":  ("Mathematics for Computer Science",          "3RD SEM"),
    "BCS302":  ("Digital Design and Computer Organization",  "3RD SEM"),
    "BCS303":  ("Operating Systems",                         "3RD SEM"),
    "BCS304":  ("Data Structures and Applications",          "3RD SEM"),
    "BCS306A": ("Java Programming",                          "3RD SEM"),
    "BBOC407": ("Biology for Computer Science",              "4TH SEM"),
    "BCS401":  ("Analysis and Design of Algorithms",         "4TH SEM"),
    "BCS402":  ("Microcontrollers and Embedded Systems",     "4TH SEM"),
    "BCS403":  ("Database Management Systems",               "4TH SEM"),
    "BCS405A": ("Discrete Mathematical Structures",          "4TH SEM"),
    "BUHK408": ("Universal Human Values",                    "4TH SEM"),
    "BCS501":  ("Software Engineering & Project Management", "5TH SEM"),
    "BCS502":  ("Computer Networks",                         "5TH SEM"),
    "BCS503":  ("Theory of Computation",                     "5TH SEM"),
    "BCS515B": ("Cloud Computing and DevOps",                "5TH SEM"),
    "BRMK557": ("Research Methodology",                      "5TH SEM"),
    "BCS601":  ("Compiler Design",                           "6TH SEM"),
    "BCS602":  ("Machine Learning",                          "6TH SEM"),
    "BCS613A": ("Mobile Application Development",            "6TH SEM"),
    "BCS613C": ("Natural Language Processing",               "6TH SEM"),
    "BCV654C": ("Computer Vision",                           "6TH SEM"),
    "BCS701":  ("Big Data Analytics",                        "7TH SEM"),
    "BCS702":  ("Deep Learning",                             "7TH SEM"),
    "BCS703":  ("Cloud Computing",                           "7TH SEM"),
    "BCS714D": ("Blockchain Technology",                     "7TH SEM"),
}

VISUAL_KW = {"topology","architecture","diagram","model","structure","circuit",
             "network","tree","graph","flow","protocol","memory","pipeline",
             "cache","scheduling","layer","layout","design","block","system",
             "organization","representation","hierarchy","framework","format"}

NOISE_RE = [
    re.compile(r"^\s*\d{1,3}\s*$"),
    re.compile(r"^(dept|department)\s+of", re.I),
    re.compile(r"^(dr|prof|mr|mrs)\.", re.I),
    re.compile(r"^vtu(code|resource|circle)", re.I),
    re.compile(r"^(module|chapter|unit)\s*[-:]?\s*\d+\s*$", re.I),
    re.compile(r"^\s*[-_=]{5,}\s*$"),
    re.compile(r"^(course\s+name|course\s+code|semester)\s*:", re.I),
    re.compile(r"^(figure|table)\s+\d+", re.I),
    re.compile(r"^(time|max\.?\s*marks|note)\s*:", re.I),
    re.compile(r"^(choose|answer\s+any)\b", re.I),
    re.compile(r"^\s*time\s*:\s*\d+\s*(hrs?|hours?)", re.I),
]


# ── fast hash dedup (no SequenceMatcher in hot path) ──────────────────────────
def qkey(q: str) -> str:
    """Fast hash key: lowercase, alphanum only, first 60 chars."""
    return re.sub(r"[^\w]", "", q.lower())[:60]


# ── text helpers ──────────────────────────────────────────────────────────────
def clean(raw: str) -> str:
    raw = raw.replace("\xa0", " ").replace("\x0c", "\n")
    raw = re.sub(r"[\x00-\x08\x0b\x0e-\x1f\x7f]", "", raw)
    raw = re.sub(r"\n{3,}", "\n\n", raw)
    return raw.strip()

def is_noise(s: str) -> bool:
    return any(p.match(s.strip()) for p in NOISE_RE)

def is_heading(s: str) -> bool:
    s = s.strip()
    if not s or len(s) > 130: return False
    if re.match(r"^\d+(\.\d+)*\.?\s+[A-Z]", s) and len(s) < 100: return True
    nc = re.sub(r"[^A-Z\s]", "", s)
    if len(nc.strip()) >= 4 and nc.strip() == s.strip() and len(s) < 70: return True
    if re.match(r"^(What|Why|How|Explain|Define|Describe)\s+.{5,}[?]$", s, re.I): return True
    words = s.split()
    if (2 <= len(words) <= 8 and s[0].isupper() and not s.endswith(".")
            and not s.endswith(",")
            and not re.search(r"\b(is|are|was|were|the|a|an|of|in|to|for)\b", s)):
        return True
    return False

def strip_prefix(h: str) -> str:
    c = re.sub(r"^\d+(\.\d+)*\.?\s+", "", h).strip().rstrip("?").strip()
    return c if c else h

def extract_terms(text: str, heading: str) -> list:
    terms = [w for w in heading.split() if len(w) > 3][:2]
    for m in re.finditer(r"\b([A-Z][a-zA-Z]{3,}|[A-Z]{2,6})\b", text):
        t = m.group(1)
        if t not in terms and t.lower() not in {
            "this","that","they","also","each","from","with",
            "when","where","there","these","those","such"
        }:
            terms.append(t)
        if len(terms) >= 5: break
    return terms[:5]

def slugify(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:40]


# ── block extraction ──────────────────────────────────────────────────────────
def extract_blocks(text: str, module_id: int) -> list:
    text = clean(text)
    lines = text.splitlines()
    blocks = []
    cur_h = ""; cur_b = []; cur_bl = []; cur_ex = []

    def commit():
        nonlocal cur_h, cur_b, cur_bl, cur_ex
        if not cur_h: return
        body = " ".join(cur_b)
        if len(body) + sum(len(x) for x in cur_bl) < 40:
            cur_h = ""; cur_b = []; cur_bl = []; cur_ex = []; return
        sents = [s.strip() for s in re.split(r"(?<=[.!?])\s+", body) if len(s.strip()) > 15]
        blocks.append((cur_h, sents,
                       [b for b in cur_bl if len(b) > 10],
                       [e for e in cur_ex if len(e) > 20],
                       module_id))
        cur_h = ""; cur_b = []; cur_bl = []; cur_ex = []

    for line in lines:
        s = line.strip()
        if not s or is_noise(s): continue
        if re.match(r"^[\u2022\-\*o]\s+.{8,}", s) or re.match(r"^\d+\.\s+.{8,}", s):
            bp = re.sub(r"^[\u2022\-\*o\d\.]+\s+", "", s).strip()
            if cur_h: cur_bl.append(bp)
            continue
        if re.match(r"^(Example|e\.g\.|Eg:|For example|Note:)\s*", s, re.I):
            if cur_h: cur_ex.append(s)
            continue
        if is_heading(s):
            commit()
            h = strip_prefix(s)
            if len(h) >= 4 and h.lower() not in {
                "introduction","summary","conclusion","references","contents","overview"
            }:
                cur_h = h
            continue
        if cur_h and len(s) > 20: cur_b.append(s)
    commit()
    return blocks


# ── pair generation ───────────────────────────────────────────────────────────
def make_q(h: str, sn: str, style: int) -> str:
    if style == 0: return f"Explain {h} with a neat diagram."
    if style == 1: return f"Define {h}. Explain its working with a suitable example."
    pw = {"algorithm","protocol","process","scheduling","method","technique","mechanism"}
    if any(w in h.lower() for w in pw):
        return f"With a neat diagram, explain the {h} algorithm and its working."
    return f"Describe the concept of {h} in {sn.split()[0]} with an example."

def block_to_pairs(block: tuple, sc: str, sn: str, seen_hash: set) -> list:
    h, sents, bullets, examples, mid = block
    if not h or len(h) < 4: return []
    if is_noise(h): return []
    if re.search(r"\b(marks?|hours?|hrs|max\.?\s*marks|exam|semester)\b", h, re.I): return []
    if re.match(r"^(module|chapter|unit|figure|table|note|references?|bibliography|appendix)\b",
                h, re.I): return []
    hk = qkey(h)
    if hk in seen_hash: return []
    seen_hash.add(hk)

    pairs = []
    for style in range(3):
        q = make_q(h, sn, style)
        secs = []

        ct = " ".join(sents[:3])
        if not ct and bullets: ct = " ".join(bullets[:2])
        if len(ct) < 25: ct = " ".join(bullets[:3])
        if len(ct) < 25: continue

        secs.append({"type": "concept", "heading": "Definition",
                     "text": ct[:600], "key_terms": extract_terms(ct, h)})

        dt = " ".join(sents[3:])
        if len(dt) < 40: dt = " ".join(bullets[:6])
        if len(dt) < 40: dt = " ".join(sents)
        if len(dt) > 40:
            secs.append({"type": "detail", "heading": f"{h} - Explanation",
                         "text": dt[:900], "key_terms": extract_terms(dt, h)})
        else:
            continue

        nb = [b for b in bullets if len(b) > 12]
        if len(nb) >= 2:
            secs.append({"type": "how_it_works", "heading": "Working / Steps",
                         "text": "\n".join(f"{i+1}. {b}" for i, b in enumerate(nb[:7]))})

        ex_text = ""
        if examples: ex_text = " ".join(examples[:2])[:400]
        else:
            for sent in sents:
                if re.search(r"\b(example|e\.g\.|for instance|consider|such as)\b", sent, re.I):
                    ex_text = sent; break
        if ex_text: secs.append({"type": "example", "heading": "Example", "text": ex_text})

        if any(kw in h.lower() for kw in VISUAL_KW):
            secs.append({"type": "diagram_ref", "heading": "Diagram",
                         "diagram_tag": f"{sc}-{slugify(h)}-m{mid}-diagram"})

        secs.append({"type": "conclusion", "heading": "Conclusion",
                     "text": f"{h} is a fundamental concept in {sn}. "
                             f"Understanding {h.lower()} is essential for VTU examinations."})

        pairs.append({"question": q, "subject_code": sc, "topic": h,
                      "module": mid, "related_topics": [], "sections": secs})
    return pairs

def enrich_related(pairs: list, all_headings: list) -> list:
    for p in pairs:
        tl = p["topic"].lower(); rel = []
        for h in all_headings:
            if h == p["topic"]: continue
            r = SequenceMatcher(None, tl, h.lower()).ratio()
            if 0.20 < r < 0.75: rel.append(h)
            if len(rel) >= 3: break
        p["related_topics"] = rel[:3]
    return pairs


# ── PYQ extraction ────────────────────────────────────────────────────────────
_QRE = re.compile(
    r"^(?:Q\.?\s*\d+\s*[a-z]?[\.\)]\s*|\d+\s*[\.\)]\s*[a-z]\s*[\.\)]\s*"
    r"|\d+\s*[\.\)]\s*|[a-z]\s*[\.\)]\s*)", re.I)

def extract_pyqs(md_text: str) -> list:
    results = []; seen = []; cur = []; in_q = False

    def flush():
        nonlocal cur, in_q
        if not in_q or not cur: return
        q = " ".join(cur).strip()
        q = re.sub(r"\s+\d+\s+L\d\s+CO\d.*$", "", q).strip()
        q = re.sub(r"\s+\d{1,2}\s*$", "", q).strip()
        if _is_vq(q):
            k = qkey(q)
            if k not in seen:
                mk = re.search(r"\b(10|8|5|3|2)\b", q[-20:])
                results.append((q, int(mk.group(1)) if mk else 10))
                seen.append(k)
        cur[:] = []; in_q = False

    for line in md_text.splitlines():
        s = line.strip()
        if not s or s.startswith("#") or s.startswith("**") or s.startswith("---"):
            flush(); continue
        if _QRE.match(s):
            flush()
            t = _QRE.sub("", s).strip()
            t = re.sub(r"\s+\d+\s+L\d\s+CO\d.*$", "", t).strip()
            if t: cur = [t]; in_q = True
        elif in_q:
            ch = re.sub(r"\s+\d+\s+L\d\s+CO\d.*$", "", s).strip()
            if ch and len(ch) < 250: cur.append(ch)
    flush()
    return results

def extract_from_txt(txt: str) -> list:
    lines = [l.strip() for l in txt.splitlines() if l.strip()]
    qs = []
    cur = []
    expecting_body = False

    def flush():
        nonlocal expecting_body
        expecting_body = False
        if cur:
            full = " ".join(cur).strip()
            full = re.sub(r"\s+\d+\s+L\d\s+CO\d.*$", "", full).strip()
            full = re.sub(r"\s+\d{1,2}\s*$", "", full).strip()
            if len(full) > 20 and not re.search(r"^(note|time|max|module|or\b|third\s+semester|fourth\s+semester|fifth\s+semester|sixth\s+semester|seventh\s+semester)", full, re.I):
                if re.search(r"\b(explain|define|describe|discuss|what|write|list|compare|differentiate|design|derive|state|illustrate|draw|develop|show|how)\b", full, re.I):
                    qs.append(full)
            cur.clear()

    for l in lines:
        if re.match(r"^(Semester|Time|Max|Note|OR\b|Module\s*[-–]\s*\d+|M\s+L\s+C|L\d\s+CO\d|\d+\s+L\d|Third\s+Semester|Fourth\s+Semester|Fifth\s+Semester|Sixth\s+Semester|Seventh\s+Semester)", l, re.I):
            flush()
            continue
        if re.match(r"^(?:Q\.?\s*\d+|[a-e]\.|\d+\s*[\.\)])\s*$", l, re.I):
            flush()
            expecting_body = True
            continue
        m = re.match(r"^(?:Q\.?\s*\d+\s*[a-e]?[\.\)]|[a-e]\.|\d+\s*[\.\)])\s+(.*)", l, re.I)
        if m:
            flush()
            cur.append(m.group(1))
            continue
        if re.match(r"^\d{1,2}\s*$", l) or re.match(r"^(L\d|CO\d)", l):
            flush()
            continue
        if expecting_body:
            cur.append(l)
            expecting_body = False
            continue
        if cur:
            cur.append(l)
    flush()
    return qs

def _is_vq(t: str) -> bool:
    if len(t) < 15 or len(t) > 600: return False
    if re.match(r"^\d+\s*(marks?|M\s*\d+)?\s*$", t, re.I): return False
    if re.match(r"^(module|or\b|and\b|note:|time:|max\.?\s*marks|answer any|choose)", t, re.I): return False
    return bool(re.search(
        r"\b(explain|define|describe|discuss|what|write|list|compare|differentiate|"
        r"design|derive|state|illustrate|draw|find|evaluate|implement|outline|"
        r"with\s+neat\s+diagram|algorithm|analyse|analyze|solve|show|prove|construct)\b",
        t, re.I))

def pyq_to_pair(question: str, marks: int, sc: str, sn: str, notes_text: str) -> dict | None:
    qw = set(re.findall(r"\b[a-z]{4,}\b", question.lower()))
    best_para, best_score = "", 0.0
    for para in re.split(r"\n{2,}", notes_text):
        para = para.strip()
        if len(para) < 60: continue
        pw = set(re.findall(r"\b[a-z]{4,}\b", para.lower()))
        if not qw: continue
        sc2 = len(qw & pw) / len(qw)
        if sc2 > best_score: best_score = sc2; best_para = para
    if best_score < 0.12 or len(best_para) < 80: return None
    best_para = clean(best_para)
    sents = [s.strip() for s in re.split(r"(?<=[.!?])\s+", best_para) if len(s.strip()) > 15]
    if len(sents) < 2: return None
    ct = " ".join(sents[:3]); dt = " ".join(sents[3:10])
    secs = [{"type": "concept", "heading": "Definition / Overview",
             "text": ct[:600], "key_terms": extract_terms(ct, question[:40])}]
    secs.append({"type": "detail", "heading": "Detailed Explanation",
                 "text": (dt if len(dt) > 40 else ct)[:800],
                 "key_terms": extract_terms(dt or ct, question[:40])})
    if re.search(r"\b(algorithm|working|steps|procedure|process|derive|design)\b", question, re.I):
        ni = re.findall(r"(?:^|\n)\s*\d+\.\s+.{20,120}", best_para, re.M)
        if len(ni) >= 2:
            secs.append({"type": "how_it_works", "heading": "Algorithm / Working",
                         "text": "\n".join(n.strip() for n in ni[:6])})
    if re.search(r"(neat\s+diagram|block\s+diagram|sketch|figure|architecture)", question, re.I):
        secs.append({"type": "diagram_ref", "heading": "Diagram",
                     "diagram_tag": f"{sc}-{slugify(question[:35])}-diagram"})
    ex = next((s for s in sents
               if re.search(r"\b(example|e\.g\.|for instance|consider|such as)\b", s, re.I)), "")
    if ex: secs.append({"type": "example", "heading": "Example", "text": ex})
    secs.append({"type": "conclusion", "heading": "Conclusion",
                 "text": f"This is a key concept in {sn}, frequently tested in VTU examinations."})
    tm = re.search(
        r"\b(explain|define|describe|discuss)\s+(the\s+)?([a-z][\w\s\-/]{3,40}?)(?:\s+with|\s+in\s+detail|\.)",
        question, re.I)
    topic = tm.group(3).strip().title() if tm else question[:50].rstrip(".")
    return {"question": question, "subject_code": sc, "topic": topic,
            "module": None, "related_topics": [], "sections": secs}


# ── file finders ──────────────────────────────────────────────────────────────
def find_notes(sc: str) -> list:
    sem = SUBJECTS[sc][1]; sd = NOTES_ROOT / sem / sc; res = []
    if not sd.exists(): return res
    for f in sd.glob("*.txt"):
        if "question paper" in str(f.parent).lower(): continue
        m = re.search(r"module[-_](\d+)", f.name, re.I)
        if m and f.stat().st_size > 500:
            res.append((f, int(m.group(1))))
    if not res:
        for f in sd.rglob("*.txt"):
            if f.stat().st_size > 1000:
                m = re.search(r"module[-_](\d+)", f.name, re.I)
                mid = int(m.group(1)) if m else 1
                res.append((f, mid))
    res.sort(key=lambda x: x[1]); return res

def find_textbooks(sc: str) -> list:
    res = []
    if not TB_ROOT.exists(): return res
    for sd in TB_ROOT.iterdir():
        if not sd.is_dir(): continue
        for dd in sd.iterdir():
            if not dd.is_dir(): continue
            if dd.name.upper().startswith(sc.upper()):
                res += [f for f in dd.glob("*.txt") if f.stat().st_size > 1000]; break
    return res

def load_notes_text(sc: str) -> str:
    parts = []
    for f, _ in find_notes(sc):
        try: parts.append(clean(f.read_text(encoding="utf-8", errors="replace"))[:5000])
        except: pass
    if not parts:
        sem = SUBJECTS[sc][1]; sd = NOTES_ROOT / sem / sc
        if sd.exists():
            for f in sd.rglob("*.txt"):
                if f.stat().st_size > 1000:
                    try: parts.append(clean(f.read_text(encoding="utf-8", errors="replace"))[:5000])
                    except: pass
    return "\n\n".join(parts[:5])


# ── count existing per subject ────────────────────────────────────────────────
def count_existing() -> dict:
    counts: dict = {}
    for fname in ["training_data.jsonl", "training_data_notes.jsonl",
                  "training_data_qpapers.jsonl", "training_data_textbooks.jsonl"]:
        p = OUT_DIR / fname
        if not p.exists(): continue
        for l in p.read_text(encoding="utf-8", errors="ignore").splitlines():
            if not l.strip(): continue
            try:
                s = json.loads(l).get("subject_code", "?")
                counts[s] = counts.get(s, 0) + 1
            except: pass
    return counts


# ── STEP 1: generate pairs for subjects below CAP ────────────────────────────
def step1_generate(dry: bool = False) -> int:
    print(f"\n{'='*65}")
    print(f"  STEP 1: Generate missing pairs (cap={CAP}/subject)")
    print(f"{'='*65}")

    existing = count_existing()

    # Load existing question keys to avoid duplicates
    done_note_keys: set = set()
    done_qp_keys:   set = set()
    if OUT_NOTES.exists():
        for l in OUT_NOTES.read_text(encoding="utf-8", errors="ignore").splitlines():
            if l.strip():
                try: done_note_keys.add(qkey(json.loads(l).get("question", "")))
                except: pass
    if OUT_QP.exists():
        for l in OUT_QP.read_text(encoding="utf-8", errors="ignore").splitlines():
            if l.strip():
                try: done_qp_keys.add(qkey(json.loads(l).get("question", "")))
                except: pass

    total_new = 0

    for sc in sorted(SUBJECTS.keys()):
        sn   = SUBJECTS[sc][0]
        have = existing.get(sc, 0)
        need = max(0, CAP - have)

        notes_new = 0
        if need > 0:
            seen_hash: set = set(done_note_keys)

            # -- notes files --
            for fp, mid in find_notes(sc):
                if notes_new >= need: break
                try: raw = fp.read_text(encoding="utf-8", errors="replace")
                except: continue
                blocks   = extract_blocks(raw, mid)
                all_h    = [b[0] for b in blocks]
                local    = []
                for b in blocks:
                    if notes_new + len(local) >= need: break
                    new_pairs = block_to_pairs(b, sc, sn, seen_hash)
                    local.extend(new_pairs)
                local = enrich_related(local[:need - notes_new], all_h)
                if not dry:
                    with OUT_NOTES.open("a", encoding="utf-8") as fout:
                        for p in local:
                            fout.write(json.dumps(p, ensure_ascii=False) + "\n")
                            done_note_keys.add(qkey(p["question"]))
                notes_new += len(local)

            # -- textbooks --
            for fp in find_textbooks(sc):
                if notes_new >= need: break
                try: raw = fp.read_text(encoding="utf-8", errors="replace")
                except: continue
                blocks = extract_blocks(raw, 0)
                all_h  = [b[0] for b in blocks]
                local  = []
                for b in blocks:
                    if notes_new + len(local) >= need: break
                    new_pairs = block_to_pairs(b, sc, sn, seen_hash)
                    local.extend(new_pairs)
                local = enrich_related(local[:need - notes_new], all_h)
                if not dry:
                    with OUT_NOTES.open("a", encoding="utf-8") as fout:
                        for p in local:
                            fout.write(json.dumps(p, ensure_ascii=False) + "\n")
                            done_note_keys.add(qkey(p["question"]))
                notes_new += len(local)

        # -- PYQs (run for all subjects from both .md and .txt question papers) --
        pyq_new    = 0
        notes_text = load_notes_text(sc)
        sem        = SUBJECTS[sc][1]

        # 1. From DATA/question_papers/<SEM>/<SUBJ>/*.md
        qp_d       = QP_ROOT / sem / sc
        if qp_d.exists():
            for mn in ["previous_papers.md", "model_papers.md", "important_questions.md"]:
                mp = qp_d / mn
                if not mp.exists(): continue
                try: mt = mp.read_text(encoding="utf-8", errors="replace")
                except: continue
                for q, mk in extract_pyqs(mt):
                    k = qkey(q)
                    if k in done_qp_keys: continue
                    p = pyq_to_pair(q, mk, sc, sn, notes_text)
                    if p is None: continue
                    if not dry:
                        with OUT_QP.open("a", encoding="utf-8") as fout:
                            fout.write(json.dumps(p, ensure_ascii=False) + "\n")
                    done_qp_keys.add(k); pyq_new += 1

        # 2. From DATA/VTU_CSE_Notes/<SEM>/<SUBJ>/question papers/*.txt
        notes_subj_d = NOTES_ROOT / sem / sc
        if notes_subj_d.exists():
            for txt_f in notes_subj_d.rglob("*.txt"):
                if "question paper" in str(txt_f.parent).lower() or "model" in txt_f.name.lower() or "dec-20" in txt_f.name.lower() or "june-" in txt_f.name.lower():
                    try: tt = txt_f.read_text(encoding="utf-8", errors="replace")
                    except: continue
                    for q in extract_from_txt(tt):
                        k = qkey(q)
                        if k in done_qp_keys: continue
                        p = pyq_to_pair(q, 10, sc, sn, notes_text)
                        if p is None: continue
                        if not dry:
                            with OUT_QP.open("a", encoding="utf-8") as fout:
                                fout.write(json.dumps(p, ensure_ascii=False) + "\n")
                        done_qp_keys.add(k); pyq_new += 1

        total_new += notes_new + pyq_new
        tag = "(dry)" if dry else ""
        print(f"  [{sc}] +{notes_new} notes  +{pyq_new} PYQs  total_new={notes_new+pyq_new} {tag}")

    print(f"\n  Step 1 done. Total new pairs: {total_new}")
    return total_new


# ── STEP 2: cap + merge + split (FAST hash dedup) ─────────────────────────────
def step2_merge(dry: bool = False) -> int:
    print(f"\n{'='*65}")
    print(f"  STEP 2: Cap at {CAP}/subject, merge, write splits")
    print(f"{'='*65}")

    # Load all pairs grouped by subject
    by_subj: dict = {}
    sources = [
        OUT_DIR / "training_data.jsonl",
        OUT_DIR / "training_data_textbooks.jsonl",
        OUT_NOTES,
        OUT_QP,
    ]
    for src in sources:
        if not src.exists(): continue
        n = 0
        for l in src.read_text(encoding="utf-8", errors="ignore").splitlines():
            if not l.strip(): continue
            try:
                o = json.loads(l)
                if o.get("question") and o.get("sections"):
                    sc = o.get("subject_code", "?")
                    if sc not in by_subj: by_subj[sc] = []
                    by_subj[sc].append(o); n += 1
            except: pass
        print(f"  Loaded {n:6d} from {src.name}")

    # Score by richness (more section types = higher, prioritize PYQs)
    def richness(p: dict) -> int:
        types = {s.get("type", "") for s in p.get("sections", [])}
        s = 10 if p.get("module") is None else 0  # Prioritize real PYQ exam questions
        for t, v in [("concept",2),("detail",2),("how_it_works",2),
                     ("example",1),("conclusion",1),("diagram_ref",1)]:
            if t in types: s += v
        for sec in p.get("sections", []):
            if sec.get("type") == "detail":
                s += min(3, len(sec.get("text","")) // 150)
        return s

    print(f"\n  {'Subject':12} {'Raw':>7}  {'Capped':>7}")
    print(f"  {'-'*35}")

    balanced = []
    for sc in sorted(SUBJECTS.keys()):
        pairs = by_subj.get(sc, [])
        raw   = len(pairs)
        if not pairs:
            print(f"  {sc:12} {0:7d}  {0:7d}  WARNING: no pairs!")
            continue

        # Fast hash dedup (no SequenceMatcher)
        seen_keys: set = set()
        deduped   = []
        for p in pairs:
            k = qkey(p.get("question", ""))
            if k and k not in seen_keys:
                deduped.append(p); seen_keys.add(k)

        # Sort by richness, take top CAP
        deduped.sort(key=richness, reverse=True)
        capped = deduped[:CAP]
        balanced.extend(capped)
        print(f"  {sc:12} {raw:7d}  {len(capped):7d}")

    total = len(balanced)
    print(f"\n  Total balanced: {total}")

    if dry:
        print("  (dry run -- files not written)")
        return total

    # Shuffle + split 80/10/10
    random.seed(42); random.shuffle(balanced)
    n_val  = max(1, int(total * 0.10))
    n_test = max(1, int(total * 0.10))
    n_train = total - n_val - n_test

    for path, pairs in [
        (OUT_DIR / "training_data_combined.jsonl", balanced),
        (OUT_DIR / "train.jsonl",  balanced[:n_train]),
        (OUT_DIR / "val.jsonl",    balanced[n_train:n_train + n_val]),
        (OUT_DIR / "test.jsonl",   balanced[n_train + n_val:]),
    ]:
        path.write_text(
            "\n".join(json.dumps(p, ensure_ascii=False) for p in pairs) + "\n",
            encoding="utf-8"
        )
        print(f"  Wrote {len(pairs):6d} pairs -> {path.name}")

    est_min = int(n_train * 3 * 3 / 60)
    est_hr  = round(est_min / 60, 1)
    print(f"\n  {'='*50}")
    print(f"  READY TO TRAIN")
    print(f"  Train: {n_train}  Val: {n_val}  Test: {n_test}")
    print(f"  Estimated training time: ~{est_min} min ({est_hr} hrs) on RTX 4050")
    print(f"\n  Command:")
    print(f"  py -3.11 training/train_lora.py --data output/train.jsonl --val output/val.jsonl --epochs 3")
    print(f"  {'='*50}\n")
    return total


# ── main ──────────────────────────────────────────────────────────────────────
def main():
    ap = argparse.ArgumentParser(
        description="Build balanced 50k VTU dataset: 25 subjects x 2000 pairs")
    ap.add_argument("--step",    type=int, choices=[1, 2],
                    help="1=generate only  2=balance+merge only  (default: both)")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    if args.step != 2:
        step1_generate(dry=args.dry_run)
    if args.step != 1:
        step2_merge(dry=args.dry_run)


if __name__ == "__main__":
    main()
