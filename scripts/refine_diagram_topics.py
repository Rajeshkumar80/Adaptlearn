#!/usr/bin/env python3

import sys
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

"""
Refine diagram topic labels in DATA/diagram_topic_map.json for BCS402.
Ensures ARM Architecture and 8051 Microcontroller diagrams are accurately tagged.
"""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MAP_PATH = ROOT / "DATA" / "diagram_topic_map.json"

with open(MAP_PATH, "r", encoding="utf-8") as f:
    dtm = json.load(f)

if "BCS402" in dtm:
    for entry in dtm["BCS402"]:
        cap = entry.get("caption", "").lower()
        # Tag ARM processor architecture
        if "arm" in cap or "infocenter.arm" in cap or "r13" in cap or "register" in cap or "risc" in cap:
            entry["topic"] = "ARM Processor Architecture"
            entry["keywords"] = ["ARM", "processor", "architecture", "registers", "pipeline", "Cortex"]
            entry["tag"] = f"BCS402-arm-processor-m{entry.get('module', 1)}-diagram"
        # Tag 8051
        elif "8051" in cap or "microcontroller" in cap:
            entry["topic"] = "8051 Microcontroller Architecture"
            entry["keywords"] = ["8051", "microcontroller", "architecture", "ALU", "registers"]
            entry["tag"] = f"BCS402-8051-m{entry.get('module', 1)}-diagram"
        # Stack / modes
        elif "stack" in cap or "mode" in cap:
            entry["topic"] = "ARM Processor Modes & Registers"
            entry["keywords"] = ["ARM", "registers", "modes", "stack", "supervisor"]
            entry["tag"] = f"BCS402-arm-modes-m{entry.get('module', 4)}-diagram"

with open(MAP_PATH, "w", encoding="utf-8") as f:
    json.dump(dtm, f, indent=2)

print("Updated DATA/diagram_topic_map.json for BCS402")
