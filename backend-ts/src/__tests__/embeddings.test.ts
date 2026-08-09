jest.mock("@xenova/transformers", () => ({
  pipeline: jest.fn().mockResolvedValue({}),
}));

import { chunkText } from "../services/embeddings";

const sample = `# BCS501 — Test Document

## Module 1: Introduction

This is a first paragraph about software engineering. It has enough text to fill space.
The nature of software and its unique characteristics are covered here in detail.

Another paragraph in module one about process framework activities.

## Module 2: Process Models

Here we describe the Waterfall Model. It is a prescriptive process model used in VTU syllabus.
Then we discuss Incremental Process Models and Evolutionary Process Models.

## Module 3: Agile

Agile development values and principles are explained. Extreme Programming is covered.`;

describe("chunkText", () => {
  test("splits by module headings and paragraph boundaries", () => {
    const chunks = chunkText(sample);
    expect(chunks.length).toBeGreaterThanOrEqual(2);
    const module1 = chunks.find((c) => c.moduleNumber === 1);
    const module2 = chunks.find((c) => c.moduleNumber === 2);
    expect(module1).toBeDefined();
    expect(module2).toBeDefined();
  });

  test("chunks reference headings", () => {
    const chunks = chunkText(sample);
    expect(chunks.some((c) => c.heading && c.heading.includes("Module 2"))).toBe(true);
  });

  test("no empty chunks", () => {
    const chunks = chunkText(sample);
    for (const c of chunks) expect(c.content.trim().length).toBeGreaterThan(0);
  });
});
