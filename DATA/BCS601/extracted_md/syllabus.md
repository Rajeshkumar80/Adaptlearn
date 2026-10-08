<!-- PROVENANCE: subject_code=BCS601 | semester=6 | source_type=SYLLABUS | source_file=BCS601_Compiler_Design.md | confidence=1.0 -->

# BCS601 — Compiler Design

> **VTU B.E. CSE | 2022 Scheme | 6th Semester**

---

## 📋 Course Information

| Field | Details |
|---|---|
| **Subject Name** | Compiler Design |
| **Subject Code** | BCS601 |
| **Semester** | 6th |
| **Credits** | 04 |
| **Teaching Hours/Week** | 3L : 0T : 2P : 0S |
| **Total Pedagogy Hours** | 40 Theory + Lab |
| **CIE Marks** | 50 |
| **SEE Marks** | 50 |
| **Total Marks** | 100 |
| **Exam Duration** | 3 Hours |

---

## 🎯 Course Objectives

1. Understand the phases of a compiler, language translation mechanisms, and compiler architecture.
2. Master lexical analysis, regular definitions, and lexical-analyzer generators (LEX / Flex).
3. Understand syntax analysis, context-free grammars, top-down and bottom-up parsing techniques (LL, LR, LALR).
4. Learn syntax-directed translation, intermediate code generation, and three-address code representations.
5. Explore run-time environments, code optimization techniques, and target machine code generation.

---

## 📚 Module-Wise Syllabus

### Module 1: Introduction to Compilers & Lexical Analysis
- Language Processors: Compilers, Interpreters, Preprocessors, Assemblers, Linkers, and Loaders
- Phases of a Compiler: Lexical analysis, Syntax analysis, Semantic analysis, Intermediate code generation, Code optimization, Code generation
- Compiler construction tools, Cousins of the compiler
- Lexical Analysis: Role of lexical analyzer, Tokens, Patterns, and Lexemes, Input buffering
- Specification of Tokens: Regular expressions, Regular definitions
- Recognition of Tokens: Transition diagrams, Finite automata implementation
- The Lexical-Analyzer Generator: LEX / Flex tool syntax, Regular expressions matching, Actions

### Module 2: Syntax Analysis (Top-Down Parsing)
- The Role of Parser: Context-Free Grammars (CFG) review, Writing a grammar, Eliminating ambiguity
- Eliminating Left Recursion, Left Factoring
- Top-Down Parsing: Recursive-Descent Parsing, Backtracking vs Non-backtracking parsers
- LL(1) Grammars: Computation of FIRST and FOLLOW sets, Construction of predictive parsing table
- Non-recursive predictive parsing using explicit stack, Error recovery in predictive parsing

### Module 3: Bottom-Up Parsing (LR Parsers)
- Bottom-Up Parsing: Reductions, Handle pruning, Shift-Reduce parsing, Conflicts (Shift/Reduce, Reduce/Reduce)
- Introduction to LR Parsing: Why LR parsers? Model of an LR parser, Parser actions
- Simple LR (SLR) Parsing: LR(0) items, Closure and GOTO operations, Constructing SLR parsing tables
- Canonical LR (CLR) Parsing: LR(1) items, Constructing Canonical LR parsing tables
- Lookahead LR (LALR) Parsing: Merging states, Constructing LALR parsing tables, Handling ambiguous grammars
- Using Parser Generators: YACC / Bison tool syntax, Grammar specifications, Semantic actions

### Module 4: Syntax-Directed Translation & Intermediate Code Generation
- Syntax-Directed Translation (SDT): Syntax-Directed Definitions (SDD), Inherited and Synthesized attributes
- Evaluation Orders for SDDs: Dependency graphs, S-attributed definitions, L-attributed definitions
- Syntax-Directed Translation Schemes (SDTS): Postfix translation schemes
- Intermediate Representations: Graphical representations (DAGs, Syntax trees), Three-Address Code (TAC)
- Types of Three-Address Statements, Implementations of TAC: Quadruples, Triples, Indirect Triples
- Translation of Expressions: Boolean expressions, Short-circuit evaluation, Backpatching

### Module 5: Code Optimization, Run-Time Environments & Target Code Generation
- Run-Time Storage Organization: Storage organization, Activation records, Stack allocation of space
- Parameter passing mechanisms: Call-by-value, Call-by-reference
- Principal Sources of Optimization: Common subexpression elimination, Copy propagation, Dead-code elimination, Loop optimizations (Code motion, Induction variable elimination)
- Basic Blocks and Flow Graphs: Identifying basic blocks, Flow graphs, Loops in flow graphs, DAG representation of basic blocks
- Issues in the Design of a Code Generator: Input to code generator, Target programs, Memory management, Instruction selection, Register allocation and assignment
- A Simple Code Generator algorithm, Peephole Optimization

---

## ✅ Course Outcomes (COs)

| CO | Description |
|---|---|
| **CO1** | Explain compiler architecture and implement lexical analysis using LEX/Flex tools. |
| **CO2** | Construct predictive LL(1) parsing tables and trace top-down syntax derivations. |
| **CO3** | Build Bottom-Up LR parsing tables (SLR, CLR, LALR) and resolve parsing ambiguities using YACC/Bison. |
| **CO4** | Formulate syntax-directed translation schemes and generate three-address intermediate code representations. |
| **CO5** | Apply code optimization techniques to basic blocks and generate efficient target machine instructions. |

---

## 📖 Textbooks & References

- **Compilers: Principles, Techniques, and Tools** — Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman, 2nd Edition, Pearson.
- **Modern Compiler Implementation in C / Java** — Andrew W. Appel, Cambridge University Press.
- **Engineering a Compiler** — Keith D. Cooper and Linda Torczon, 2nd Edition, Morgan Kaufmann.

---

> ⚠️ *Always refer to the official VTU website or your college's academic portal for the most current syllabus updates.*
