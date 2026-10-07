"""Fix encoding issues in generate_combined_dataset.py"""
import re

path = r"D:\Adaptlearn\ml-pipeline\data_gen\generate_combined_dataset.py"

# Read with utf-8-sig to strip BOM
content = open(path, encoding="utf-8-sig", errors="replace").read()

# Fix mojibake
content = content.replace("\u00e2\u20ac\u201c", "--")   # â€" -> --
content = content.replace("\u00e2\u20ac\u2122", "'")    # â€™ -> '
content = content.replace("\u2013", "-")
content = content.replace("\u2014", "--")
content = content.replace("\u2713", "OK")               # ✓ -> OK
content = content.replace("\u2717", "FAIL")             # ✗ -> FAIL
content = content.replace("\u2192", "->")               # → -> ->
content = content.replace("\u2026", "...")              # … -> ...

# Find remaining non-ASCII in print statements
lines = content.splitlines()
fixed = 0
for i, line in enumerate(lines):
    if any(ord(c) > 127 for c in line) and "print(" in line:
        clean = "".join(c if ord(c) <= 127 else "?" for c in line)
        print(f"  Fixed line {i+1}: {repr(line[:80])} -> {repr(clean[:80])}")
        lines[i] = clean
        fixed += 1

content = "\n".join(lines)

# Write back clean UTF-8 without BOM
open(path, "w", encoding="utf-8").write(content)
print(f"Saved. Fixed {fixed} print lines.")
