"""Patch generate_combined_dataset.py: fix extract_json_obj and set default model."""
import re

path = r"D:\Adaptlearn\ml-pipeline\data_gen\generate_combined_dataset.py"
content = open(path, encoding="utf-8").read()

# 1. Fix DEFAULT_MODEL
content = content.replace(
    'DEFAULT_MODEL = "llama3.1:8b"',
    'DEFAULT_MODEL = "llama3.2:1b"   # ~10x faster; use llama3.1:8b for quality'
)

# 2. Replace extract_json_obj function
old_fn_start = content.find("def extract_json_obj(raw: str) -> dict:")
if old_fn_start == -1:
    print("ERROR: could not find extract_json_obj"); exit(1)

# Find end of function (next def at same indent level)
after = content[old_fn_start:]
# Find next function def at column 0
next_fn = re.search(r"\ndef \w", after[10:])
if next_fn:
    old_fn_end = old_fn_start + 10 + next_fn.start() + 1  # include the \n
else:
    print("ERROR: could not find end of function"); exit(1)

new_fn = '''def extract_json_obj(raw: str) -> dict:
    """Extract JSON object from raw string with aggressive cleanup for llama quirks."""
    raw = re.sub(r"```(?:json)?|```", "", raw).strip()
    raw = re.sub(r"[\\x00-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]", "", raw)
    # Fix leading artifacts like " {." or "{." that llama3.2:1b sometimes emits
    raw = re.sub(r"^\\s*\\{[\\s]*\\.", "{", raw)
    raw = re.sub(r"^\\s+\\{", "{", raw)
    # Fix missing comma between } { in arrays
    raw = re.sub(r"\\}\\s*\\n\\s*\\{", "}, {", raw)
    raw = re.sub(r"\\}\\s{2,}\\{", "}, {", raw)
    # Direct parse
    try:
        return json.loads(raw)
    except Exception:
        pass
    # Extract first {...} block
    m = re.search(r"\\{[\\s\\S]*\\}", raw)
    if not m:
        raise ValueError("No JSON object found in model output")
    obj_str = m.group(0)
    try:
        return json.loads(obj_str)
    except json.JSONDecodeError:
        # Try to close truncated JSON by walking back
        for end in range(len(obj_str), len(obj_str) // 2, -1):
            candidate = obj_str[:end]
            try:
                opens  = candidate.count("[") - candidate.count("]")
                braces = candidate.count("{") - candidate.count("}")
                fixed  = candidate + ("]" * max(0, opens)) + ("}" * max(0, braces))
                result = json.loads(fixed)
                if isinstance(result, dict) and result.get("sections"):
                    return result
            except Exception:
                continue
        raise ValueError("Could not parse JSON even after cleanup")

'''

content = content[:old_fn_start] + new_fn + content[old_fn_end:]
open(path, "w", encoding="utf-8").write(content)
print(f"Patched OK. extract_json_obj replaced, DEFAULT_MODEL set to llama3.2:1b")
