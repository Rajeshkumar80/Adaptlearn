# VTU Answer Generation Rules & Structured Output Format

**Purpose:** This file is the instruction set fed to the AI during (a) QA-pair generation for training, and (b) live inference in the application. It defines how answers must be structured, how marks weight controls depth, how diagrams are sourced, and — critically — the OUTPUT FORMAT the model must emit so the frontend can render it cleanly instead of dumping raw markdown into a chat bubble.

---

## 1. Core principle — do not train the model to emit raw markdown text

**The "random chatbot" look you want to avoid comes from models emitting `**bold**` and `# headings` as literal text, which frontends then render inconsistently.** The fix is architectural, not cosmetic: the model outputs **structured JSON**, and the frontend (already using the Academic Ledger design system) renders each structured field with real styled components — actual bold headings, actual highlighted key-term spans, actual embedded diagram images. The model never decides visual styling; it only decides content structure. This is far more reliable than hoping markdown syntax survives intact through generation and rendering.

## 2. Required output schema (every answer, no exceptions)

```json
{
  "question": "Explain the working of a Convolutional Neural Network.",
  "subject_code": "BCS602",
  "module": 4,
  "marks": 10,
  "co_reference": "CO4",
  "sections": [
    {
      "type": "definition",
      "heading": "Definition",
      "text": "A Convolutional Neural Network (CNN) is a deep learning architecture..."
    },
    {
      "type": "explanation",
      "heading": "Architecture and Working",
      "text": "The CNN consists of convolutional layers, pooling layers...",
      "key_terms": ["convolution", "pooling", "feature map", "stride"]
    },
    {
      "type": "diagram",
      "diagram_tag": "cnn-architecture-bcs602-m4"
    },
    {
      "type": "example",
      "heading": "Example Application",
      "text": "CNNs are widely used in image classification tasks such as..."
    },
    {
      "type": "conclusion",
      "heading": "Conclusion",
      "text": "Thus, CNNs enable automatic feature extraction..."
    }
  ]
}
```

**Section types allowed:** `definition`, `explanation`, `diagram`, `example`, `numerical-step` (for derivations/calculations), `conclusion`. Not every answer needs every section — a 2-mark question might only need `definition`; a 10-mark question typically needs all of them.

## 3. Marks-to-depth calibration (non-negotiable, this is a real VTU skill to train in)

| Marks | Expected structure |
|---|---|
| 2 marks | `definition` only, 2-3 sentences, no diagram unless the question is inherently diagram-based |
| 5 marks | `definition` + `explanation` (short), diagram if relevant to the topic |
| 10 marks | `definition` + `explanation` (detailed) + `diagram` (if applicable) + `example` + `conclusion` |

When generating training examples, pull the `marks` value from the source PYQ/model-paper the question is based on. For syllabus-derived questions with no natural marks value, assign one consistent with how VTU typically weights that type of question (definition-only questions → 2-5 marks; "explain in detail" / "with a neat diagram" questions → 10 marks).

## 4. Diagram rule — the one that must never be violated

**A `diagram` section may ONLY be included if a matching entry exists in that subject/module's `diagram-index.md` (sourced from NOTES, not textbooks).**

- If the topic has a diagram in the notes-derived `diagram-index.md` → include the `diagram` section with the correct `diagram_tag` (must exactly match an ID in that index).
- If no matching diagram exists in the notes index → **do not include a diagram section at all**, even if the topic is inherently visual and even if a diagram exists in a referenced textbook. Textbook diagrams are excluded from this pipeline entirely — they were never extracted or indexed, so there is nothing legitimate to tag.
- **Never fabricate a `diagram_tag` that doesn't exist in the index.** A hallucinated tag will fail lookup at inference time and break the response. If uncertain whether a diagram exists for a topic, check the index — don't guess.
- The model never generates, describes-as-if-drawing, or attempts to recreate a diagram in text form as a substitute. If no real diagram is available, the `explanation` section can mention "refer to the architecture diagram in your notes" as a text pointer, but must not attempt to fake one.

## 5. Textbook usage — reference for depth, never verbatim reproduction

Referenced textbook text may be used to **inform and enrich** `explanation` and `example` sections — additional depth, better phrasing, a clearer worked example — but:
- **Never copy textbook sentences verbatim into training examples.** Paraphrase into original wording. This matters both for training quality (the model should learn concepts, not memorize exact textbook phrasing) and for avoiding embedding copyrighted text directly into a dataset that may end up in a public repo.
- Notes remain the **primary source** for structure and diagram-relevant content; textbooks are a **secondary enrichment source** for explanation depth only.

## 6. Answer tone — accurate but readable

The `text` fields should be written in clear, exam-correct language a VTU examiner expects — but not so terse it becomes unreadable to a student learning the concept for the first time. Balance: correct terminology and structure (for marks), explained in a way a student can actually follow (for learning). Avoid restating the question back verbatim as the first sentence — start directly with content.

## 7. What the frontend does with this (for context, not something the model needs to know)

- `sections[].heading` → rendered as a bold styled heading (Academic Ledger heading style), not literal `**text**`
- `sections[].key_terms` → each occurrence of these terms within the section's `text` gets wrapped in a highlighted `<mark>`-style span (yellow highlight) by the frontend at render time — the model just needs to accurately list the key terms, not mark them inline
- `sections[].diagram_tag` → frontend looks this up in the relevant `diagram-index.md`, fetches the real extracted image, and renders it inline at that position in the answer
- `marks` and `co_reference` → shown as small metadata badges near the answer, giving the student context on what's being tested

This schema is what both the QA-pair generation script (training data) and the live inference backend (application) must produce and consume identically — training the model on this exact JSON shape means it emits it natively at inference time.
