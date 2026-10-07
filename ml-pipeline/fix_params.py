"""Fix generation params for llama3.2:1b."""
path = r"D:\Adaptlearn\ml-pipeline\data_gen\generate_combined_dataset.py"
content = open(path, encoding="utf-8").read()

# Fix num_predict
content = content.replace(
    '"num_predict": 4096,   # enough for a full structured answer',
    '"num_predict": 1800,   # 1b is fast; 1800 tokens = full answer'
)
# also the per-call timeout (1b is much faster)
content = content.replace(
    '"num_ctx":     6144,',
    '"num_ctx":     3072,'
)
content = content.replace("timeout=480", "timeout=120")

open(path, "w", encoding="utf-8").write(content)
print("Updated params OK")
