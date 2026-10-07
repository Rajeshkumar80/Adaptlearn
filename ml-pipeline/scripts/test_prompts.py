import urllib.request
import json

def test():
    prompt = "What is Internet of Things (IoT)?"
    sys_prompts = [
        # Kaggle training system prompt
        "You are AdaptLearn, a VTU exam tutor. Answer every question with a structured JSON object. Fields: question, subject_code, topic, module, related_topics, sections. Each section has type, heading, text, and optionally key_terms or diagram_tag. Section types: concept, detail, how_it_works, example, comparison, diagram_ref, conclusion. Output ONLY the JSON — no markdown fences, no extra text.",
        # Simpler prompt
        "You are AdaptLearn, a VTU exam tutor. Answer the student's question thoroughly in valid JSON with fields: question, subject_code, module, marks, sections (list of objects with type, heading, text). Do not output placeholders or ellipses. Provide complete, accurate definitions and explanations.",
        # Direct answer
        "You are an expert VTU engineering professor. Answer the question comprehensively with clear definition, detailed explanation, real-world examples, and key concepts."
    ]

    for i, sp in enumerate(sys_prompts):
        body = json.dumps({
            "model": "adaptlearn",
            "messages": [
                {"role": "system", "content": sp},
                {"role": "user", "content": f"[BCS701 Module 1]\n{prompt}"}
            ],
            "stream": False,
            "options": {"temperature": 0.2, "num_ctx": 2048, "num_predict": 1000}
        }).encode()
        req = urllib.request.Request("http://127.0.0.1:11434/api/chat", data=body, headers={"Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                res = json.loads(r.read().decode())
                print(f"=== TEST {i+1} ===")
                print(res["message"]["content"][:600])
                print("\n")
        except Exception as e:
            print(f"Error {i+1}: {e}")

if __name__ == "__main__":
    test()
