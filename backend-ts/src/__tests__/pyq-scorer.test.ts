import { parsePyqMarkdown, tokenize } from "../services/pyq-scorer";

const sample = `# BCS501 — PYQ
## Module 1
- **Q1(a)** [Module 1 | 8 Marks | L2]: Explain the Waterfall Model with a neat block diagram.
- **Q1(b)** [Module 1 | 6 Marks | L2]: Define software engineering.
## Module 2
- **Q3(a)** [Module 2 | 8 Marks | L3]: Explain Requirements Engineering process steps.`;

describe("PYQ parser", () => {
  test("parses questions with module, marks, bloom level", () => {
    const qs = parsePyqMarkdown(sample);
    expect(qs).toHaveLength(3);
    expect(qs[0]).toMatchObject({ module: 1, marks: 8, bloomLevel: "L2" });
    expect(qs[2]).toMatchObject({ module: 2, marks: 8, bloomLevel: "L3" });
  });

  test("tokenizer strips stopwords", () => {
    const tokens = tokenize("Explain the Waterfall Model with a neat block diagram");
    expect(tokens).toContain("waterfall");
    expect(tokens).not.toContain("the");
    expect(tokens).not.toContain("explain");
  });
});
