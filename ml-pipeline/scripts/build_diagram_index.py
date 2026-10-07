"""
build_diagram_index.py  --  Phase 3: Diagram Topic Mapping
===========================================================
Reads DATA/diagram-index.md, uses Groq to tag each diagram with
a topic name and keywords, then writes:

  DATA/diagram_topic_map.json          <- lookup table for the app
  backend/uploads/diagrams/<subj>/...  <- symlinked/copied images

The JSON structure per subject:
{
  "BCS502": [
    {
      "tag":      "BCS502-osi-model-diagram",
      "topic":    "OSI Reference Model",
      "keywords": ["OSI", "layers", "network", "protocol"],
      "module":   1,
      "file":     "diagrams/5TH SEM/BCS502/BCS502-module-1-pdf-p5-i1.png",
      "url":      "/uploads/diagrams/BCS502/BCS502-module-1-pdf-p5-i1.png",
      "caption":  "<first 120 chars of caption>"
    },
    ...
  ]
}

Usage:
    python scripts/build_diagram_index.py              # all subjects
    python scripts/build_diagram_index.py --subject BCS502
    python scripts/build_diagram_index.py --no-groq    # regex tags only (fast, offline)
"""

import argparse
import json
import os
import re
import shutil
import time
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

# ── paths ─────────────────────────────────────────────────────────────────────
ROOT          = Path(__file__).resolve().parents[2]
DIAGRAMS_ROOT = ROOT / "DATA" / "diagrams"
INDEX_MD      = ROOT / "DATA" / "diagram-index.md"
OUT_JSON      = ROOT / "DATA" / "diagram_topic_map.json"
UPLOADS_DIR   = ROOT / "backend" / "uploads" / "diagrams"
GROQ_URL      = "https://api.groq.com/openai/v1/chat/completions"
GROQ_MODEL    = "qwen/qwen3.8-27b"
GROQ_KEY_ENV  = "GROQ_API_KEY"
MAX_WORKERS   = 8

# ── known topic keywords (regex-based fast tagging, no API needed) ─────────────
TOPIC_PATTERNS = [
    # Computer Networks (BCS502)
    (r"osi\s*(model|layer|reference)",                "OSI Reference Model",         ["OSI", "layers", "network"]),
    (r"tcp[\s/]*ip",                                  "TCP/IP Model",                ["TCP", "IP", "protocol"]),
    (r"three[\s-]?way\s*handshak",                    "TCP Three-Way Handshake",     ["TCP", "handshake", "connection"]),
    (r"sliding\s*window",                             "Sliding Window Protocol",     ["sliding window", "flow control"]),
    (r"ethernet|csma[\s/]*cd",                        "Ethernet and CSMA/CD",        ["Ethernet", "CSMA", "MAC"]),
    (r"ip\s*address(ing)?",                           "IP Addressing",               ["IP", "subnet", "addressing"]),
    (r"router|routing\s*table|routing\s*algorithm",   "Routing Algorithms",          ["router", "routing", "forwarding"]),
    (r"dns\b",                                        "Domain Name System",          ["DNS", "name resolution"]),
    (r"http\b",                                       "HTTP Protocol",               ["HTTP", "web", "request"]),
    (r"congestion\s*control",                         "Congestion Control",          ["congestion", "flow control"]),
    # Operating Systems (BCS303)
    (r"process\s*state|state\s*diagram",              "Process State Diagram",       ["process", "state", "PCB"]),
    (r"gantt\s*chart|scheduling",                     "CPU Scheduling",              ["scheduling", "Gantt", "CPU"]),
    (r"deadlock",                                     "Deadlock",                    ["deadlock", "circular wait"]),
    (r"page\s*table|paging",                          "Paging and Page Table",       ["paging", "page table", "virtual"]),
    (r"segmentation",                                 "Memory Segmentation",         ["segment", "memory"]),
    (r"file\s*(system|allocation)",                   "File System",                 ["file system", "inode"]),
    # Data Structures (BCS304)
    (r"binary\s*(search\s*)?tree|bst",                "Binary Search Tree",          ["BST", "binary tree", "node"]),
    (r"avl\s*tree",                                   "AVL Tree",                    ["AVL", "balanced tree"]),
    (r"b[+\-]?\s*tree",                               "B-Tree / B+ Tree",            ["B-tree", "index"]),
    (r"hash\s*(table|function|collision)",            "Hashing",                     ["hash", "collision", "bucket"]),
    (r"graph",                                        "Graph Data Structure",        ["graph", "vertex", "edge"]),
    (r"heap\b|priority\s*queue",                      "Heap / Priority Queue",       ["heap", "max-heap", "min-heap"]),
    (r"linked\s*list",                                "Linked List",                 ["linked list", "node", "pointer"]),
    (r"stack\b",                                      "Stack",                       ["stack", "LIFO", "push", "pop"]),
    (r"queue\b",                                      "Queue",                       ["queue", "FIFO", "enqueue"]),
    (r"sorting|quick\s*sort|merge\s*sort|bubble\s*sort", "Sorting Algorithms",      ["sort", "algorithm"]),
    # Algorithms (BCS401)
    (r"dynamic\s*programming",                        "Dynamic Programming",         ["DP", "memoization", "optimal"]),
    (r"greedy",                                       "Greedy Algorithm",            ["greedy", "optimal substructure"]),
    (r"divide\s*(and\s*)?conquer",                    "Divide and Conquer",          ["divide", "conquer", "recursion"]),
    (r"kruskal|prim|minimum\s*spanning",              "Minimum Spanning Tree",       ["MST", "Kruskal", "Prim"]),
    (r"dijkstra|shortest\s*path",                     "Shortest Path",               ["Dijkstra", "shortest path"]),
    (r"knapsack",                                     "Knapsack Problem",            ["knapsack", "DP", "greedy"]),
    # Machine Learning (BCS602)
    (r"neural\s*network|perceptron",                  "Neural Network",              ["neural network", "perceptron"]),
    (r"cnn|convolutional",                            "Convolutional Neural Network",["CNN", "convolution", "pooling"]),
    (r"rnn|lstm|recurrent",                           "Recurrent Neural Network",    ["RNN", "LSTM", "sequence"]),
    (r"decision\s*tree|random\s*forest",              "Decision Tree",               ["decision tree", "entropy"]),
    (r"svm|support\s*vector",                         "Support Vector Machine",      ["SVM", "hyperplane", "kernel"]),
    (r"k[\s-]?means|clustering",                      "Clustering / K-Means",        ["K-means", "cluster", "centroid"]),
    (r"regression",                                   "Regression",                  ["regression", "linear", "MSE"]),
    (r"confusion\s*matrix|precision|recall",          "Model Evaluation",            ["confusion matrix", "precision"]),
    # Deep Learning (BCS702)
    (r"transformer|attention",                        "Transformer / Attention",     ["transformer", "attention", "BERT"]),
    (r"gan\b|generative\s*adversarial",               "Generative Adversarial Network", ["GAN", "generator", "discriminator"]),
    (r"autoencoder",                                  "Autoencoder",                 ["autoencoder", "encoder", "decoder"]),
    # DBMS (BCS403)
    (r"er\s*(diagram|model)|entity[\s-]relation",     "ER Diagram",                  ["ER", "entity", "relationship"]),
    (r"relational\s*(model|algebra|schema)",          "Relational Model",            ["relation", "tuple", "attribute"]),
    (r"normalization|1nf|2nf|3nf|bcnf",               "Normalization",               ["normalization", "NF", "dependency"]),
    (r"transaction|acid|commit|rollback",             "Transaction Management",      ["ACID", "transaction", "commit"]),
    (r"index(ing)?|b[\+\-]tree\s*index",              "Database Indexing",           ["index", "B-tree", "search"]),
    # Compiler Design (BCS601)
    (r"parse\s*tree|ast|syntax\s*tree",               "Parse Tree / AST",            ["parse tree", "AST", "grammar"]),
    (r"lex(er)?|scanner|tokeniz",                     "Lexical Analysis",            ["lexer", "token", "scanner"]),
    (r"finite\s*(state\s*)?automata|dfa|nfa",         "Finite Automata (DFA/NFA)",   ["DFA", "NFA", "automata"]),
    (r"cfg|context[\s-]free\s*grammar",               "Context-Free Grammar",        ["CFG", "grammar", "production"]),
    # General
    (r"architecture|block\s*diagram",                 "System Architecture",         ["architecture", "block diagram"]),
    (r"flowchart|flow\s*chart",                       "Flowchart",                   ["flowchart", "process flow"]),
]


def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def regex_tag(caption: str) -> tuple[str, list[str]] | None:
    """Return (topic, keywords) using regex patterns, or None if no match."""
    cap_lower = caption.lower()
    for pattern, topic, keywords in TOPIC_PATTERNS:
        if re.search(pattern, cap_lower):
            return topic, keywords
    return None


def groq_tag(caption: str, subj_code: str, module_id: int,
             api_key: str) -> tuple[str, list[str]]:
    """Use Groq to infer topic and keywords from diagram caption."""
    prompt = (
        f"Subject: {subj_code} Module {module_id}\n"
        f"Diagram caption: {caption[:400]}\n\n"
        f"Output ONLY JSON: "
        f'{{ "topic": "<specific VTU topic name>", "keywords": ["<kw1>","<kw2>","<kw3>"] }}'
    )
    payload = json.dumps({
        "model": GROQ_MODEL,
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 80,
        "temperature": 0.1,
    }).encode()
    req = urllib.request.Request(
        GROQ_URL, data=payload,
        headers={"Content-Type": "application/json",
                 "Authorization": f"Bearer {api_key}"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            content = json.loads(r.read().decode())["choices"][0]["message"]["content"]
        content = re.sub(r"<think>[\s\S]*?</think>", "", content).strip()
        content = re.sub(r"```(?:json)?|```", "", content).strip()
        m = re.search(r"\{[\s\S]*\}", content)
        if m:
            obj = json.loads(m.group(0))
            return obj.get("topic", "Diagram"), obj.get("keywords", [])
    except Exception:
        pass
    return "Diagram", []


def parse_index_md(md_path: Path) -> list[dict]:
    """Parse diagram-index.md into list of entry dicts."""
    entries: list[dict] = []
    current: dict = {}

    for line in md_path.read_text(encoding="utf-8", errors="replace").splitlines():
        line = line.strip()
        if not line:
            continue

        # New entry: "- **Subject/Module:** BCS502/BCS502-module-1-pdf"
        m = re.match(r"[-*]?\s*\*\*Subject/Module:\*\*\s*(\w+)/(\S+)", line)
        if m:
            if current.get("image"):
                entries.append(current)
            subj = m.group(1)
            mod_str = m.group(2)
            mod_match = re.search(r"module[\-_]?(\d+)", mod_str, re.IGNORECASE)
            current = {
                "subject":  subj,
                "module":   int(mod_match.group(1)) if mod_match else 0,
                "mod_key":  mod_str,
                "image":    "",
                "caption":  "",
            }
            continue

        m = re.match(r"Image:\s*(.+\.png)", line)
        if m and current:
            current["image"] = m.group(1).strip().replace("\\", "/")
            continue

        m = re.match(r"Caption snippet:\s*(.+)", line)
        if m and current:
            current["caption"] = m.group(1).strip()
            continue

    if current.get("image"):
        entries.append(current)

    return entries


def process_entry(entry: dict, api_key: str, use_groq: bool) -> dict | None:
    """Tag one diagram entry with topic + keywords."""
    caption  = entry["caption"]
    subj     = entry["subject"]
    module   = entry["module"]
    img_path = entry["image"]   # relative: "diagrams/5TH SEM/BCS502/..."

    # Try regex first (free + fast)
    result = regex_tag(caption)
    if result:
        topic, keywords = result
    elif use_groq and api_key:
        topic, keywords = groq_tag(caption, subj, module, api_key)
    else:
        topic = "Diagram"
        keywords = []

    # Build tag
    tag = f"{subj}-{slugify(topic)}-m{module}-diagram"

    return {
        "tag":      tag,
        "topic":    topic,
        "keywords": keywords,
        "module":   module,
        "file":     img_path,
        "url":      f"/uploads/diagrams/{subj}/{Path(img_path).name}",
        "caption":  caption[:150],
    }


def copy_images_to_uploads(result_map: dict[str, list[dict]]):
    """Copy/link diagram PNGs to backend/uploads/diagrams/<subj>/"""
    UPLOADS_DIR.mkdir(parents=True, exist_ok=True)
    copied = 0
    for subj, entries in result_map.items():
        subj_dir = UPLOADS_DIR / subj
        subj_dir.mkdir(exist_ok=True)
        for e in entries:
            src = ROOT / "DATA" / e["file"]
            dst = subj_dir / Path(e["file"]).name
            if src.exists() and not dst.exists():
                try:
                    shutil.copy2(src, dst)
                    copied += 1
                except Exception:
                    pass
    print(f"  Copied {copied} images to {UPLOADS_DIR}")


def main():
    parser = argparse.ArgumentParser(
        description="Phase 3: Build diagram topic map"
    )
    parser.add_argument("--subject",  help="Single subject e.g. BCS502")
    parser.add_argument("--no-groq",  action="store_true",
                        help="Use regex tagging only (no API calls)")
    args = parser.parse_args()

    api_key  = os.environ.get(GROQ_KEY_ENV, "")
    use_groq = not args.no_groq and bool(api_key)

    if not INDEX_MD.exists():
        print(f"ERROR: {INDEX_MD} not found"); return

    # Prefer .tmp which has all entries; .md is a partial subset
    tmp_file = INDEX_MD.with_suffix(".tmp")
    index_file = tmp_file if tmp_file.exists() else INDEX_MD
    print(f"Parsing {index_file.name} ({index_file.stat().st_size // 1024} KB)...", flush=True)
    entries = parse_index_md(index_file)
    print(f"  Found {len(entries)} diagram entries")

    if args.subject:
        entries = [e for e in entries if e["subject"] == args.subject]
        print(f"  Filtered to {len(entries)} entries for {args.subject}")

    if use_groq:
        print(f"  Tagging with Groq ({GROQ_MODEL}) + regex fallback, {MAX_WORKERS} workers")
    else:
        print(f"  Tagging with regex only (fast, offline)")

    # Load existing map to resume
    existing: dict[str, list[dict]] = {}
    if OUT_JSON.exists():
        try:
            existing = json.loads(OUT_JSON.read_text(encoding="utf-8"))
            done_files = {e["file"] for entries_list in existing.values() for e in entries_list}
            entries = [e for e in entries if e["image"] not in done_files]
            print(f"  Resuming: {len(entries)} new entries to process")
        except Exception:
            pass

    result_map: dict[str, list[dict]] = {k: list(v) for k, v in existing.items()}

    t0 = time.time()
    tagged = 0
    skipped = 0

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
        future_map = {
            pool.submit(process_entry, e, api_key, use_groq): e
            for e in entries
        }
        for fut in as_completed(future_map):
            entry = future_map[fut]
            try:
                tagged_entry = fut.result()
            except Exception as ex:
                skipped += 1
                continue

            if tagged_entry is None or tagged_entry["topic"] == "Diagram":
                skipped += 1
                continue

            subj = entry["subject"]
            if subj not in result_map:
                result_map[subj] = []
            result_map[subj].append(tagged_entry)
            tagged += 1

            if tagged % 50 == 0:
                print(f"  Progress: {tagged} tagged, {skipped} skipped...", flush=True)

    elapsed = time.time() - t0

    # Sort each subject's entries by module then tag
    for subj in result_map:
        result_map[subj].sort(key=lambda x: (x["module"], x["tag"]))

    # Write JSON
    OUT_JSON.write_text(json.dumps(result_map, indent=2, ensure_ascii=False),
                        encoding="utf-8")

    # Copy images to uploads
    print(f"\nCopying images to backend/uploads/diagrams/...")
    copy_images_to_uploads(result_map)

    # Summary
    total_tagged = sum(len(v) for v in result_map.values())
    print(f"\n{'='*55}")
    print(f"  Subjects:      {len(result_map)}")
    print(f"  Tagged:        {total_tagged} diagrams")
    print(f"  Skipped:       {skipped} (no topic match)")
    print(f"  Time:          {elapsed:.1f}s")
    print(f"  Output:        {OUT_JSON}")
    print(f"  Uploads:       {UPLOADS_DIR}")
    print(f"{'='*55}")

    # Print per-subject summary
    print("\nPer-subject:")
    for subj in sorted(result_map.keys()):
        topics = list({e["topic"] for e in result_map[subj]})[:4]
        print(f"  {subj:10} {len(result_map[subj]):4} diagrams | {', '.join(topics)}")


if __name__ == "__main__":
    main()
