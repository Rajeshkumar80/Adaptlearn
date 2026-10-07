# BCS601 — Textbook Notes (Module-wise)
**Subject:** Compiler Design
**Generated:** 2026-10-06
**Reference:** Aho, Lam, Sethi, Ullman — Compilers: Principles, Techniques, and Tools (Dragon Book)

---

## Module 1 Textbook: Introduction to Compilers & Lexical Analysis

A compiler translates source code into machine code. The front end performs lexical, syntactic, and semantic analysis to construct an intermediate representation (IR) and populate the symbol table. The back end optimizes the IR and generates target machine code.

Phases of a Compiler:
1. Lexical Analyzer (Scanner): Converts characters to tokens `<token-name, attribute-value>`.
2. Syntax Analyzer (Parser): Builds syntax tree using context-free grammars.
3. Semantic Analyzer: Checks type consistency and coercions (`inttofloat`).
4. Intermediate Code Generator: Produces Three-Address Code (TAC).
5. Code Optimizer: Constant folding, dead-code elimination, common subexpression elimination.
6. Code Generator: Register allocation and machine instruction selection.
Cross-phase: Symbol Table Management and Error Handler.

## Module 2 Textbook: Syntax Analysis (Top-Down Parsing)
CFG formal definitions, eliminating left recursion and left factoring. LL(1) parsers using FIRST and FOLLOW sets with predictive parsing tables.

## Module 3 Textbook: Bottom-Up Parsing (LR Parsers)
Shift-reduce parsing, handles, SLR(1), CLR(1), and LALR(1) parser tables.

## Module 4 Textbook: Syntax-Directed Translation & Intermediate Code
Synthesized vs. inherited attributes, Quadruples, Triples, and Indirect Triples. Backpatching for boolean expressions.

## Module 5 Textbook: Code Optimization & Code Generation
Basic blocks, leaders algorithm, flow graphs, loop optimizations, register allocation, peephole optimization.
