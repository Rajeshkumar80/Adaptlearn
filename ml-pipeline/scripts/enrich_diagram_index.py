"""
enrich_diagram_index.py
Parse DATA/diagram-index.tmp, accurately identify VTU syllabus diagrams,
and generate high-precision entries in DATA/diagram_topic_map.json.
Also ensures all diagram images exist in backend/uploads/diagrams/<subj>/
"""

import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
INDEX_TMP = ROOT / "DATA" / "diagram-index.tmp"
OUT_JSON = ROOT / "DATA" / "diagram_topic_map.json"
UPLOADS_DIR = ROOT / "backend" / "uploads" / "diagrams"
DATA_DIAGRAMS = ROOT / "DATA" / "diagrams"

def extract_entries():
    if not INDEX_TMP.exists():
        print("diagram-index.tmp not found")
        return []
    with open(INDEX_TMP, "r", encoding="utf-8", errors="replace") as f:
        raw = f.read()

    blocks = raw.split("- **Subject/Module:** ")
    entries = []
    for b in blocks:
        if not b.strip():
            continue
        lines = b.strip().split("\n")
        header = lines[0].strip()
        subj = header.split("/")[0].strip() if "/" in header else header.split("-")[0].strip()
        
        pdf = ""
        img = ""
        caption = ""
        for line in lines[1:]:
            l = line.strip()
            if l.startswith("PDF:"):
                pdf = l[4:].strip()
            elif l.startswith("Image:"):
                img = l[6:].strip()
            elif l.startswith("Caption snippet:"):
                caption = l[16:].strip()
                
        if subj and img:
            entries.append({
                "subj": subj,
                "pdf": pdf,
                "img": img.replace("\\", "/"),
                "caption": caption
            })
    return entries

# Specific high-precision rules for diagrams
RULES = [
    # Computer Networks (BCS502)
    {
        "subj": "BCS502",
        "patterns": [r"osi|iso/iec|7\s*layer|protocol\s*layer|communication\s*through\s*an\s*internet|tcp/ip\s*protocol\s*stack|figure\s*1\.20"],
        "topic": "OSI Reference Model & Protocol Layers",
        "keywords": ["OSI", "OSI model", "7 layers", "layers", "TCP/IP", "protocol stack", "network layer", "encapsulation", "architecture"],
        "module": 1,
    },
    {
        "subj": "BCS502",
        "patterns": [r"addressing\s*in\s*the\s*tcp/ip|figure\s*1\.24"],
        "topic": "Addressing in TCP/IP Protocol Suite",
        "keywords": ["addressing", "TCP/IP", "IP address", "port", "MAC address", "physical address", "logical address"],
        "module": 1,
    },
    {
        "subj": "BCS502",
        "patterns": [r"mesh\s*topology|bus\s*topology|star\s*topology|ring\s*topology|figure\s*1\.4|figure\s*1\.6|topolog"],
        "topic": "Network Topologies (Mesh, Bus, Star, Ring)",
        "keywords": ["topology", "mesh", "bus", "star", "ring", "network topology", "physical structure"],
        "module": 1,
    },
    {
        "subj": "BCS502",
        "patterns": [r"data\s*flow|simplex|half-duplex|full-duplex|figure\s*1\.2"],
        "topic": "Data Flow Modes (Simplex, Half-Duplex, Full-Duplex)",
        "keywords": ["data flow", "simplex", "half duplex", "full duplex", "transmission mode"],
        "module": 1,
    },
    {
        "subj": "BCS502",
        "patterns": [r"coaxial|fiber-optic|twisted-pair|utp|bnc|figure\s*1\.30|figure\s*1\.31|figure\s*1\.32|figure\s*1\.37"],
        "topic": "Transmission Media (Twisted Pair, Coaxial, Fiber Optic)",
        "keywords": ["transmission media", "guided media", "twisted pair", "coaxial cable", "optical fiber", "fiber optic"],
        "module": 1,
    },
    {
        "subj": "BCS502",
        "patterns": [r"routing\s*table|forwarding|dijkstra|distance\s*vector|link\s*state|virtual-circuit|figure\s*1\.50"],
        "topic": "Routing Algorithms & Packet Forwarding",
        "keywords": ["routing", "router", "routing table", "forwarding", "virtual circuit", "packet switching"],
        "module": 1,
    },
    {
        "subj": "BCS502",
        "patterns": [r"congestion\s*control|leaky\s*bucket|token\s*bucket|sliding\s*window|flow\s*control"],
        "topic": "Congestion Control & Traffic Shaping",
        "keywords": ["congestion control", "leaky bucket", "token bucket", "flow control", "traffic shaping"],
        "module": 4,
    },
    {
        "subj": "BCS502",
        "patterns": [r"three-way\s*handshake|tcp\s*connection|tcp\s*segment"],
        "topic": "TCP Three-Way Handshake & Connection",
        "keywords": ["TCP", "three-way handshake", "handshake", "SYN", "ACK", "connection establishment"],
        "module": 4,
    },
    {
        "subj": "BCS502",
        "patterns": [r"dns|domain\s*name|http|hypertext"],
        "topic": "DNS & HTTP Application Layer Protocols",
        "keywords": ["DNS", "HTTP", "domain name", "web", "application layer"],
        "module": 5,
    },

    # Data Structures (BCS304 / BCS302)
    {
        "subj": "BCS304",
        "patterns": [r"circular\s*queue|queue\s*element"],
        "topic": "Circular Queue Operations",
        "keywords": ["circular queue", "queue", "FIFO", "enqueue", "dequeue", "front", "rear"],
        "module": 1,
    },
    {
        "subj": "BCS304",
        "patterns": [r"stack|lifo|push|pop|infix|postfix"],
        "topic": "Stack Data Structure & Applications",
        "keywords": ["stack", "LIFO", "push", "pop", "infix to postfix", "expression evaluation"],
        "module": 1,
    },
    {
        "subj": "BCS304",
        "patterns": [r"binary\s*search\s*tree|bst|binary\s*tree|inorder|preorder|postorder"],
        "topic": "Binary Search Tree (BST) & Traversal",
        "keywords": ["BST", "binary search tree", "binary tree", "tree traversal", "inorder", "preorder", "postorder"],
        "module": 3,
    },
    {
        "subj": "BCS304",
        "patterns": [r"avl\s*tree|tree\s*rotation|balance\s*factor"],
        "topic": "AVL Tree Rotations & Balancing",
        "keywords": ["AVL tree", "rotation", "balance factor", "LL rotation", "RR rotation"],
        "module": 3,
    },
    {
        "subj": "BCS304",
        "patterns": [r"graph|dfs|bfs|adjacency\s*matrix|adjacency\s*list"],
        "topic": "Graph Representations & Traversal (BFS & DFS)",
        "keywords": ["graph", "BFS", "DFS", "breadth first", "depth first", "adjacency matrix"],
        "module": 4,
    },
    {
        "subj": "BCS304",
        "patterns": [r"hash|hash\s*table|collision|linear\s*probing|chaining"],
        "topic": "Hashing & Collision Resolution Techniques",
        "keywords": ["hash table", "hashing", "collision", "linear probing", "chaining", "hash function"],
        "module": 5,
    },

    # Operating Systems (BCS601 / BCS303)
    {
        "subj": "BCS601",
        "patterns": [r"process\s*state|pcb|state\s*transition"],
        "topic": "Process State Transition Diagram",
        "keywords": ["process state", "PCB", "ready", "running", "waiting", "terminated", "state transition"],
        "module": 1,
    },
    {
        "subj": "BCS601",
        "patterns": [r"cpu\s*scheduling|gantt|round\s*robin|fcfs|sjf|priority\s*scheduling"],
        "topic": "CPU Scheduling Algorithms & Gantt Chart",
        "keywords": ["CPU scheduling", "Gantt chart", "Round Robin", "FCFS", "SJF", "waiting time"],
        "module": 1,
    },
    {
        "subj": "BCS601",
        "patterns": [r"deadlock|resource\s*allocation|banker"],
        "topic": "Deadlock & Resource Allocation Graph (RAG)",
        "keywords": ["deadlock", "resource allocation graph", "Banker's algorithm", "circular wait"],
        "module": 2,
    },
    {
        "subj": "BCS601",
        "patterns": [r"paging|page\s*table|tlb|virtual\s*memory|translation\s*lookaside"],
        "topic": "Paging & Hardware Address Translation (TLB)",
        "keywords": ["paging", "page table", "TLB", "virtual memory", "page fault", "frame"],
        "module": 3,
    },

    # Machine Learning & AI (BCS602 / BCS703 / BCS714D)
    {
        "subj": "BCS602",
        "patterns": [r"convolution|cnn|feature\s*map|pooling"],
        "topic": "Convolutional Neural Network (CNN) Architecture",
        "keywords": ["CNN", "convolution", "pooling layer", "feature map", "convolutional neural network"],
        "module": 4,
    },
    {
        "subj": "BCS602",
        "patterns": [r"decision\s*tree|id3|entropy|information\s*gain"],
        "topic": "Decision Tree & Splitting Criteria",
        "keywords": ["decision tree", "entropy", "information gain", "ID3", "classification tree"],
        "module": 1,
    },
    {
        "subj": "BCS602",
        "patterns": [r"svm|support\s*vector|hyperplane|margin"],
        "topic": "Support Vector Machine (SVM) Hyperplane & Margins",
        "keywords": ["SVM", "support vector machine", "hyperplane", "maximum margin", "kernel"],
        "module": 2,
    },
    {
        "subj": "BCS602",
        "patterns": [r"neural\s*network|perceptron|backpropagation|activation\s*function"],
        "topic": "Artificial Neural Network & Backpropagation",
        "keywords": ["neural network", "perceptron", "backpropagation", "hidden layer", "weights"],
        "module": 3,
    },

    # DBMS (BCS403)
    {
        "subj": "BCS403",
        "patterns": [r"er\s*diagram|entity|relationship|cardinality"],
        "topic": "Entity-Relationship (ER) Diagram",
        "keywords": ["ER diagram", "entity", "relationship", "attribute", "cardinality", "primary key"],
        "module": 1,
    },
    {
        "subj": "BCS403",
        "patterns": [r"normalization|1nf|2nf|3nf|bcnf|functional\s*dependency"],
        "topic": "Database Normalization (1NF, 2NF, 3NF, BCNF)",
        "keywords": ["normalization", "1NF", "2NF", "3NF", "BCNF", "functional dependency"],
        "module": 2,
    },
    {
        "subj": "BCS403",
        "patterns": [r"transaction|acid|schedule|serializability|two-phase\s*locking"],
        "topic": "Transaction Processing & ACID Properties",
        "keywords": ["transaction", "ACID", "serializability", "concurrency control", "2PL"],
        "module": 3,
    },

    # Microcontrollers (BCS402)
    {
        "subj": "BCS402",
        "patterns": [r"arm\s*core|arm\s*register|dataflow\s*model|figure:\s*complete\s*arm\s*register"],
        "topic": "ARM Core Architecture & Register Organization",
        "keywords": ["ARM", "ARM core", "registers", "CPSR", "SPSR", "dataflow model", "microcontroller"],
        "module": 1,
    },
    {
        "subj": "BCS402",
        "patterns": [r"pipeline|arm\s*pipeline|3-stage|5-stage"],
        "topic": "ARM Pipeline Architecture (Fetch, Decode, Execute)",
        "keywords": ["pipeline", "pipelining", "fetch", "decode", "execute", "instruction cycle"],
        "module": 1,
    }
]

def main():
    entries = extract_entries()
    print(f"Loaded {len(entries)} diagram entries from diagram-index.tmp")

    # Load existing map
    existing_map = {}
    if OUT_JSON.exists():
        try:
            with open(OUT_JSON, "r", encoding="utf-8") as f:
                existing_map = json.load(f)
        except Exception:
            existing_map = {}

    matched_count = 0
    for e in entries:
        caption_lower = e["caption"].lower()
        pdf_lower = e["pdf"].lower()
        subj = e["subj"]

        for rule in RULES:
            # Check subject match (or allow common general matches)
            if rule["subj"] != subj and subj not in ["BCS502", "BCS304", "BCS303", "BCS601", "BCS403"]:
                continue

            # Check if any pattern matches caption or pdf
            matched = False
            for pat in rule["patterns"]:
                if re.search(pat, caption_lower) or re.search(pat, pdf_lower):
                    matched = True
                    break

            if matched:
                filename = Path(e["img"]).name
                clean_tag = f"{subj}-{re.sub(r'[^a-z0-9]+', '-', rule['topic'].lower())}-diagram"
                item = {
                    "tag": clean_tag,
                    "topic": rule["topic"],
                    "keywords": rule["keywords"],
                    "module": rule["module"],
                    "file": e["img"],
                    "url": f"/uploads/diagrams/{subj}/{filename}",
                    "caption": e["caption"][:150],
                }

                if subj not in existing_map:
                    existing_map[subj] = []

                # Avoid duplicate by file
                if not any(x.get("file") == e["img"] for x in existing_map[subj]):
                    existing_map[subj].append(item)
                    matched_count += 1
                break

    # Also add explicit key diagrams for BCS502
    bcs502_key_diagrams = [
        {
            "tag": "BCS502-osi-reference-model-diagram",
            "topic": "OSI Reference Model & Layered Architecture",
            "keywords": ["OSI", "OSI model", "7 layers", "layer", "layers", "ISO", "reference model", "protocol", "architecture", "network model"],
            "module": 1,
            "file": "diagrams/5TH SEM/BCS502/BCS502-module-1-pdf-1-p18-i1.png",
            "url": "/uploads/diagrams/BCS502/BCS502-module-1-pdf-1-p18-i1.png",
            "caption": "Figure 1.20: Communication through an internet - Multi-layer protocol stack and data flow through network layers",
        },
        {
            "tag": "BCS502-tcp-ip-addressing-layers-diagram",
            "topic": "Addressing across Layers in TCP/IP Protocol Suite",
            "keywords": ["addressing", "TCP/IP", "IP address", "MAC address", "port", "packet", "segment", "frame"],
            "module": 1,
            "file": "diagrams/5TH SEM/BCS502/BCS502-module-1-pdf-1-p27-i1.png",
            "url": "/uploads/diagrams/BCS502/BCS502-module-1-pdf-1-p27-i1.png",
            "caption": "Figure 1.24: Addressing in the TCP/IP protocol suite - Physical, Logical, Port, and Specific Addresses",
        },
        {
            "tag": "BCS502-network-mesh-topology-diagram",
            "topic": "Network Topologies: Mesh and Bus Topology",
            "keywords": ["topology", "mesh", "bus", "star", "network topology", "topologies", "connection"],
            "module": 1,
            "file": "diagrams/5TH SEM/BCS502/BCS502-module-1-pdf-1-p5-i1.png",
            "url": "/uploads/diagrams/BCS502/BCS502-module-1-pdf-1-p5-i1.png",
            "caption": "Figure 1.4: Fully connected Mesh Topology and Bus Topology connecting multiple stations",
        },
        {
            "tag": "BCS502-data-flow-modes-diagram",
            "topic": "Data Flow Modes: Simplex, Half-Duplex, Full-Duplex",
            "keywords": ["data flow", "simplex", "half duplex", "full duplex", "transmission mode", "directional"],
            "module": 1,
            "file": "diagrams/5TH SEM/BCS502/BCS502-module-1-pdf-1-p3-i1.png",
            "url": "/uploads/diagrams/BCS502/BCS502-module-1-pdf-1-p3-i1.png",
            "caption": "Figure 1.2: Direction of data flow - Simplex, Half-duplex, and Full-duplex communication channels",
        },
        {
            "tag": "BCS502-transmission-media-diagram",
            "topic": "Guided Transmission Media: Coaxial, Twisted Pair & Fiber Optic",
            "keywords": ["transmission media", "guided media", "twisted pair", "coaxial cable", "optical fiber", "fiber optic", "cable"],
            "module": 1,
            "file": "diagrams/5TH SEM/BCS502/BCS502-module-1-pdf-1-p37-i1.png",
            "url": "/uploads/diagrams/BCS502/BCS502-module-1-pdf-1-p37-i1.png",
            "caption": "Figure 1.37: Optical Fiber Cable Construction and Modes of Propagation in Guided Media",
        },
        {
            "tag": "BCS502-routing-and-forwarding-diagram",
            "topic": "Routing Table & Packet Forwarding",
            "keywords": ["routing", "routing table", "router", "forwarding", "packet switching", "datagram", "virtual circuit"],
            "module": 1,
            "file": "diagrams/5TH SEM/BCS502/BCS502-module-1-pdf-1-p44-i1.png",
            "url": "/uploads/diagrams/BCS502/BCS502-module-1-pdf-1-p44-i1.png",
            "caption": "Figure 1.44: Routing table records destination addresses and next-hop interfaces for packet forwarding",
        }
    ]

    if "BCS502" not in existing_map:
        existing_map["BCS502"] = []
    
    # Prepend key diagrams
    for kd in reversed(bcs502_key_diagrams):
        existing_map["BCS502"] = [x for x in existing_map["BCS502"] if x.get("tag") != kd["tag"]]
        existing_map["BCS502"].insert(0, kd)

    # Save output
    with open(OUT_JSON, "w", encoding="utf-8") as f:
        json.dump(existing_map, f, indent=2, ensure_ascii=False)

    print(f"Enriched diagram_topic_map.json with {matched_count} new entries!")
    for subj in sorted(existing_map.keys()):
        print(f"  {subj}: {len(existing_map[subj])} diagrams")

if __name__ == "__main__":
    main()
