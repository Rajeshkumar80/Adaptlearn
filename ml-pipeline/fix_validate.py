"""Fix validate_answer to handle sections being strings instead of dicts."""
path = r"D:\Adaptlearn\ml-pipeline\data_gen\generate_combined_dataset.py"
content = open(path, encoding="utf-8").read()

old = '''def validate_answer(obj: dict) -> tuple[bool, str]:
    if not obj.get("question"):
        return False, "missing question"
    if not obj.get("sections"):
        return False, "empty sections"
    types = {s.get("type") for s in obj["sections"]}
    if "concept" not in types and "detail" not in types:
        return False, "missing concept/detail sections"
    return True, ""'''

new = '''def validate_answer(obj: dict) -> tuple[bool, str]:
    if not obj.get("question"):
        return False, "missing question"
    sections = obj.get("sections")
    if not sections:
        return False, "empty sections"
    # Ensure sections is a list of dicts
    if not isinstance(sections, list):
        return False, "sections is not a list"
    dict_sections = [s for s in sections if isinstance(s, dict)]
    if not dict_sections:
        return False, "sections contains no dicts"
    # Update sections to only dict items
    obj["sections"] = dict_sections
    types = {s.get("type") for s in dict_sections}
    if "concept" not in types and "detail" not in types:
        return False, "missing concept/detail sections"
    # Filter out sections with empty text
    obj["sections"] = [s for s in dict_sections
                       if s.get("text") or s.get("diagram_tag")]
    return True, ""'''

if old in content:
    content = content.replace(old, new)
    open(path, "w", encoding="utf-8").write(content)
    print("Fixed validate_answer OK")
else:
    print("ERROR: old string not found - searching for similar...")
    idx = content.find("def validate_answer")
    print(repr(content[idx:idx+300]))
