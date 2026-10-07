# AdaptLearn — Final VTU Answer Rules & Rubrics
## Examination Standards, Mark-Based Scaling, Question Directives & Guardrails

> **Target Standard:** Visvesvaraya Technological University (VTU) Examination Rubrics  
> **Scheme:** 2022 Scheme (Semester 3 to Semester 8 CSE Curriculum)

---

## 1. Mark-Based Depth Scaling

AdaptLearn dynamically adjusts structural section count and answer depth to match the requested marks:

| Marks | Target Section Count | Required Structure | Depth & Content Focus |
|---|---|---|---|
| **2 Marks** | 1–2 Sections | • Definition & Core Concept<br>• 1–2 Key Points | Crisp, concise statement of principle; no lengthy prose or unnecessary subheadings. |
| **5 Marks** | 3 Sections | • Definition / Principle<br>• Key Explanation & Main Types<br>• Practical Example / Diagram | Structured breakdown; explains main components; provides 1 concrete illustration. |
| **10 Marks** | 4–5 Sections | • Definition / Introduction<br>• Core Concept Explanation<br>• Architectural / Operational Mechanism<br>• Real-World Example & Analogy<br>• Technical Diagram / Flowchart | Comprehensive examination answer; full component classification; step-by-step mechanism. |
| **15 Marks** | 6 Sections | • Definition & Historical Background<br>• In-Depth Theoretical Foundations<br>• Architecture & Working Pipeline<br>• Real-World Examples & Case Studies<br>• Comparative Analysis Matrix<br>• VTU High-Yield Exam Strategy | Deep semester exam essay; full derivation/code/diagram; parameter comparison table. |

---

## 2. Question-Wording Directives

The system adapts its answering format strictly according to the VTU operative verb:

### "Define"
- State formal definition clearly and concisely.
- Highlight the governing standard or primary objective.
- Keep example brief and avoid superfluous history.

### "Explain" / "Describe"
- Provide formal definition followed by architectural/functional characteristics.
- Break down mechanisms into numbered steps or bulleted lists.
- Include working examples and clear block diagrams.

### "Compare" / "Differentiate"
- Tabulate comparison across technical parameters:
  $$\text{Parameter} \quad|\quad \text{Entity A} \quad|\quad \text{Entity B}$$
- Ensure point-by-point contrast across input, operational speed, complexity, and real-world usage.

### "Algorithm" / "Write a Program"
- Provide:
  1. Algorithm logic & pseudo-code
  2. Syntactically clean C / C++ / Python implementation
  3. Worst-case and Average-case Time Complexity ($O$)
  4. Auxiliary Space Complexity ($O$)
  5. Sample Input and Expected Output

### "Calculate" / "Numerical"
- Follow the standard 6-step VTU numerical format:
  1. **Given Data**
  2. **To Find / Required**
  3. **Governing Formula**
  4. **Value Substitution**
  5. **Step-by-Step Calculation**
  6. **Final Answer with Units**

---

## 3. Forbidden Filler & Anti-Hallucination Guardrails

### 3.1 Prohibited Fabricated Phrases
The answer synthesizer and grounding validator actively scan and reject synthetic filler phrases:
- ❌ *"Structural Modularity"*
- ❌ *"Deterministic Control"*
- ❌ *"Resource Optimization"*
- ❌ *"Initialization & Ingestion"*
- ❌ *"Algorithmic Transformation"*
- ❌ *"Integrity Verification"*
- ❌ *"Dispatch & Persistence"*
- ❌ *"Parcel sorting hub"*
- ❌ *"Scalable distributed servers and cloud backends"* (on hardware questions)

### 3.2 Real vs Model Exam Claim Boundaries
- The system never invents previous year exam sessions or dates.
- Questions from model papers are explicitly tagged: `📌 Official VTU Model Paper`.
- Questions from real exams are tagged: `📝 VTU Previous Year Exam` with the real session name (e.g., `June July 2025`).

---

## 4. Insufficient Context Protocol

When a user query falls outside the indexed VTU curriculum:
1. Grounding validator assigns score $0.0$.
2. The system does **not** hallucinate an essay.
3. The system returns an honest syllabus notice:
   > *"The query does not match syllabus topics or indexed materials in the knowledge base for this subject. Please verify the subject code or select a topic from the VTU curriculum."*
