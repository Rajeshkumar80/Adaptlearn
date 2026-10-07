# BCS601 — Question Bank Solutions

**Subject:** BCS601 (Compiler Design)
**Content type:** question_bank_solution
**Source:** BCS601-question-bank-with-solution.txt

---

## Module 1

### Explain the phases of a compiler with a neat diagram.

**Question:** Explain the various phases of a compiler with a neat diagram. Trace the input `position = initial + rate * 60` through each phase. (10 Marks)

**Solution:**

#### 1. Definition and Overview
A **compiler** is a specialized translator that converts a high-level source program into an equivalent machine or assembly language program while identifying syntactic and semantic errors. The compilation process is divided into an **Analysis phase (Front End)** and a **Synthesis phase (Back End)**, operating through six sequential phases supported by a central **Symbol Table** and **Error Handler**.

#### 2. Compiler Phases Block Diagram

```text
               Source Program
                     │
                     ▼
       ┌───────────────────────────┐
       │     Lexical Analyzer      │ ◄────► ┌───────────────────┐
       └─────────────┬─────────────┘        │                   │
                     │ Token Stream         │                   │
                     ▼                      │                   │
       ┌───────────────────────────┐        │                   │
       │      Syntax Analyzer      │ ◄────► │                   │
       └─────────────┬─────────────┘        │                   │
                     │ Syntax Tree          │   Symbol Table    │
                     ▼                      │    Management     │
       ┌───────────────────────────┐        │                   │
       │     Semantic Analyzer     │ ◄────► │                   │
       └─────────────┬─────────────┘        │                   │
                     │ Decorated AST        │                   │
                     ▼                      │                   │
       ┌───────────────────────────┐        │                   │
       │ Intermediate Code Gen     │ ◄────► │                   │
       └─────────────┬─────────────┘        │                   │
                     │ Three-Address Code   │                   │
                     ▼                      │                   │
       ┌───────────────────────────┐        │                   │
       │       Code Optimizer      │ ◄────► │                   │
       └─────────────┬─────────────┘        │                   │
                     │ Optimized IR         │                   │
                     ▼                      │                   │
       ┌───────────────────────────┐        │                   │
       │       Code Generator      │ ◄────► └───────────────────┘
       └─────────────┬─────────────┘                  ▲
                     │ Target Code                    │
                     ▼                      ┌─────────┴─────────┐
            Target Machine Code             │   Error Handler   │
                                            └───────────────────┘
```

#### 3. Detailed Phase Descriptions

1. **Lexical Analysis (Scanner):**
   - Scans the source code characters and produces a sequence of tokens `<token_name, attribute_value>`.
   - Strips whitespace, blank lines, and comments.
   - Enters identifiers into the Symbol Table.
   - *Output for statement:* `<id, 1> <=> <id, 2> <+> <id, 3> <*> <60>`

2. **Syntax Analysis (Parser):**
   - Groups tokens into hierarchical grammatical structures using Context-Free Grammars.
   - Constructs a syntax tree that reflects operator precedence and associativity.
   - *Output:* Syntax tree with root `=` and operators `+` and `*`.

3. **Semantic Analysis:**
   - Checks semantic consistency and validates language type rules.
   - Performs type checking and type coercions (converts integer `60` into floating-point representation `inttofloat(60)`).

4. **Intermediate Code Generation (ICG):**
   - Generates machine-independent intermediate code, such as Three-Address Code (TAC).
   - *Output:*
     ```text
     t1 = inttofloat(60)
     t2 = id3 * t1
     t3 = id2 + t2
     id1 = t3
     ```

5. **Code Optimization:**
   - Improves intermediate code for higher execution speed and reduced power/memory.
   - Replaces compile-time expressions via constant folding: `inttofloat(60)` becomes `60.0`.
   - *Output:*
     ```text
     t1 = id3 * 60.0
     id1 = id2 + t1
     ```

6. **Code Generation:**
   - Translates optimized TAC into target machine instructions (assembly).
   - Allocates CPU registers and evaluates instruction costs.
   - *Output:*
     ```assembly
     LDF   R2, id3
     MULF  R2, R2, #60.0
     LDF   R1, id2
     ADDF  R1, R1, R2
     STF   id1, R1
     ```

7. **Cross-Phase Components:**
   - **Symbol Table:** Stores identifier names, types, scope levels, and allocated memory locations.
   - **Error Handler:** Handles lexical, syntactic, and semantic errors with recovery techniques to report all issues in a single pass.

---

### Differentiate between Compiler and Interpreter.

| Feature | Compiler | Interpreter |
|---|---|---|
| **Input processing** | Translates entire source program into machine code at once | Translates and executes source code line-by-line |
| **Execution speed** | Very fast (precompiled target code) | Slower (continuous interpretation overhead) |
| **Intermediate Object Code** | Generates an executable object code file (`.exe`, `.o`) | Does not produce separate object code |
| **Memory usage** | More memory required during compilation | Less memory overhead |
| **Error reporting** | Displays all syntax/semantic errors after scanning the file | Stops at the first encountered error immediately |
| **Examples** | C, C++, Rust, Go | Python, JavaScript, Ruby, PHP |

---

## Module 2

### Explain LL(1) Parsing and computation of FIRST and FOLLOW sets.

**Question:** What is an LL(1) parser? Explain the rules to construct FIRST and FOLLOW sets with an example. (10 Marks)

**Solution:**
An **LL(1) parser** is a deterministic top-down parser that scans input from Left to right, constructs a Leftmost derivation, and uses 1 token of lookahead.

**Rules for FIRST:**
1. If `X` is terminal, `FIRST(X) = {X}`.
2. If `X -> ε`, then `ε ∈ FIRST(X)`.
3. If `X -> Y1 Y2 ... Yk`, add non-ε symbols from `FIRST(Y1)` to `FIRST(X)`. If `Y1 =>* ε`, add `FIRST(Y2)`.

**Rules for FOLLOW:**
1. Add `$` to `FOLLOW(S)`, where `S` is start symbol.
2. If `A -> αBβ`, add `FIRST(β) \ {ε}` to `FOLLOW(B)`.
3. If `A -> αB` or `A -> αBβ` with `ε ∈ FIRST(β)`, add `FOLLOW(A)` to `FOLLOW(B)`.

---

## Module 4

### Explain Three-Address Code and its implementations: Quadruples, Triples, and Indirect Triples.

**Question:** What is Three-Address Code? Explain Quadruples, Triples, and Indirect Triples with examples. (10 Marks)

**Solution:**
Three-Address Code (TAC) is a linearized intermediate representation where every instruction has at most one operator and at most three address operands: `x = y op z`.

**Implementations for `a = b * -c + b * -c`:**
1. **Quadruples:** Record with 4 fields: `(op, arg1, arg2, result)`
   - `(uminus, c, -, t1)`
   - `(*, b, t1, t2)`
   - `(uminus, c, -, t3)`
   - `(*, b, t3, t4)`
   - `(+, t2, t4, t5)`
   - `(=, t5, -, a)`
2. **Triples:** Record with 3 fields: `(op, arg1, arg2)`. Uses statement pointers `(0)`, `(1)` instead of explicit temporary variable names.
3. **Indirect Triples:** Uses a separate array of pointers to Triples, making instruction reordering and code optimization significantly faster.\n