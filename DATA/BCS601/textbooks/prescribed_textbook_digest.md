# BCS601 — Textbook Notes

**Subject:** BCS601 (Compiler Design)
**Content type:** textbook_notes
**Source:** Compilers: Principles, Techniques, and Tools (Dragon Book, 2nd Edition - Aho, Lam, Sethi, Ullman)

---

# BCS601 — Textbook Notes (Module-wise)
**Subject:** Compiler Design
**Primary Reference:** Aho, Lam, Sethi, Ullman — Compilers: Principles, Techniques, and Tools (Pearson)

---

## Module 1 Textbook: Introduction to Compilers & Lexical Analysis

### 1.1 Language Processors
A compiler is a program that reads a program in one language — the source language — and translates it into an equivalent program in another language — the target language. An interpreter directly executes the operations specified in the source program on inputs supplied by the user.

A complete language-processing system contains:
- Preprocessor: Merges include files, expands macros.
- Compiler: Produces assembly code.
- Assembler: Produces relocatable machine code.
- Linker / Loader: Resolves external references and loads machine code into memory.

### 1.2 The Structure & Phases of a Compiler
Analysis (Front End) breaks the source into constituent parts and creates an intermediate representation with the symbol table. Synthesis (Back End) constructs the target program from the intermediate representation and symbol table.

Phases:
1. Lexical Analyzer: Groups input characters into lexemes and produces tokens `<token-name, attribute-value>`.
2. Syntax Analyzer: Imposes grammatical structure and builds a syntax tree using context-free grammars.
3. Semantic Analyzer: Checks type consistency and inserts coercions (`inttofloat`).
4. Intermediate Code Generator: Generates machine-independent three-address code (TAC).
5. Code Optimizer: Eliminates dead code, folds constants, and improves loop execution.
6. Code Generator: Emits target machine code, allocating CPU registers and memory addresses.
7. Symbol Table & Error Handler: Shared across all phases.

Example trace for `position = initial + rate * 60`:
- Tokens: `<id,1> <=> <id,2> <+> <id,3> <*> <60>`
- Syntax Tree: Root `=` with subtrees `+` and `*`
- Semantic Tree: Type coercion `inttofloat(60)`
- TAC: `t1 = inttofloat(60); t2 = id3 * t1; t3 = id2 + t2; id1 = t3`
- Optimized TAC: `t1 = id3 * 60.0; id1 = id2 + t1`
- Assembly: `LDF R2, id3; MULF R2, R2, #60.0; LDF R1, id2; ADDF R1, R1, R2; STF id1, R1`

---

## Module 2 Textbook: Syntax Analysis (Top-Down Parsing)

Parsers are classified into Top-Down and Bottom-Up parsers. Context-Free Grammars (CFG) formally specify syntax.
Elimination of Left Recursion: `A -> Aα | β` becomes `A -> β A'`, `A' -> α A' | ε`.
Left Factoring: `A -> αβ1 | αβ2` becomes `A -> α A'`, `A' -> β1 | β2`.
LL(1) Grammars require deterministic prediction using FIRST and FOLLOW sets:
- FIRST(α): Set of terminals beginning strings derived from α.
- FOLLOW(A): Set of terminals appearing immediately right of A in a sentential form.

---

## Module 3 Textbook: Bottom-Up Parsing (LR Parsers)

Shift-reduce parsers find handles (substrings matching production bodies in reverse of rightmost derivations).
LR Parsers:
- SLR(1): Uses LR(0) items and FOLLOW sets for reduction.
- CLR(1): Uses LR(1) items with explicit lookaheads.
- LALR(1): Merges states with identical LR(0) cores, used in YACC and Bison.

---

## Module 4 Textbook: Syntax-Directed Translation & Intermediate Code

Syntax-Directed Definitions (SDDs):
- S-attributed: Only synthesized attributes evaluated bottom-up.
- L-attributed: Synthesized and left-inheriting attributes evaluated top-down.
Intermediate Representations:
- Syntax Trees and DAGs
- Three-Address Code (TAC): Quadruples `(op, arg1, arg2, res)`, Triples `(op, arg1, arg2)`, and Indirect Triples.
- Backpatching: Resolves boolean jumps in a single pass.

---

## Module 5 Textbook: Code Optimization & Code Generation

Run-Time Storage Organization: Code, Static, Stack (Activation Records), Heap.
Basic Blocks: Sequence of instructions with single entry and exit.
Flow Graphs: Directed graph of basic blocks.
Loop Optimizations: Code motion, common subexpression elimination, strength reduction.
Target Code Generation: Instruction selection, register allocation via graph coloring, peephole optimization.\n