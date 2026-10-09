#!/usr/bin/env python3

import sys
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

"""
Generate clean, authoritative Compiler Design (BCS601) knowledge base
from the Dragon Book (Aho, Lam, Sethi, Ullman) and official VTU Course Outcomes.
Replaces mislabeled Cloud Computing notes in knowledge/BCS601/.
"""

import json
import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
KNOWLEDGE_BCS601 = ROOT / "knowledge" / "BCS601"
KNOWLEDGE_BCS601.mkdir(parents=True, exist_ok=True)
(KNOWLEDGE_BCS601 / "diagrams").mkdir(exist_ok=True)

# 1. Module 1: Introduction to Compilers & Lexical Analysis
module1_content = """# BCS601 — Module 1

## Introduction to Compilers & Lexical Analysis

**Subject:** BCS601 (Compiler Design)
**Module:** Module 1
**Content type:** primary_module
**Sources:** Compilers: Principles, Techniques, and Tools (Dragon Book, 2nd Edition - Aho, Lam, Sethi, Ullman), VTU BCS601 Syllabus

---

### 1. Language Processors & Compiler Architecture

A **compiler** is a software system that translates a program written in a high-level source language into an equivalent target machine language program. An important role of the compiler is to detect and report any syntax or semantic errors in the source program during the translation process.

In addition to the compiler, a complete **language-processing system** includes:
1. **Preprocessor:** Collects source program files, expands macros (#define, #include), and strips comments.
2. **Compiler:** Translates preprocessed source code into target assembly language.
3. **Assembler:** Translates assembly instructions into relocatable machine object code.
4. **Linker:** Resolves external symbol references across library files and multiple object modules.
5. **Loader:** Places executable machine code into system memory for execution.

**Compiler vs. Interpreter:**
- A **compiler** translates the entire source program into machine code before execution, resulting in significantly faster runtime execution.
- An **interpreter** executes source statements directly line-by-line without producing a separate object code file, providing better interactive debugging at the cost of execution speed.

---

### 2. The Phases of a Compiler

The compilation process is logically divided into two primary parts:
- **Analysis (Front End):** Breaks up the source program into constituent pieces, verifies syntax and static semantics, and constructs an intermediate representation (IR) along with the symbol table. It is largely machine-independent.
- **Synthesis (Back End):** Constructs the target machine code from the intermediate representation and symbol table information, performing machine-dependent instruction selection and register allocation.

The compilation process operates through six sequential phases, supported across all stages by the **Symbol Table** and **Error Handler**:

```
Source Program
      │
      ▼
┌─────────────────────────────────┐
│ 1. Lexical Analyzer (Scanner)   │ ◄───► ┌───────────────────┐
└────────────────┬────────────────┘       │                   │
                 │ Token Stream           │                   │
                 ▼                        │                   │
┌─────────────────────────────────┐       │                   │
│ 2. Syntax Analyzer (Parser)     │ ◄───► │                   │
└────────────────┬────────────────┘       │                   │
                 │ Parse/Syntax Tree      │   Symbol Table    │
                 ▼                        │    Management     │
┌─────────────────────────────────┐       │                   │
│ 3. Semantic Analyzer            │ ◄───► │                   │
└────────────────┬────────────────┘       │                   │
                 │ Decorated AST          │                   │
                 ▼                        │                   │
┌─────────────────────────────────┐       │                   │
│ 4. Intermediate Code Generator  │ ◄───► │                   │
└────────────────┬────────────────┘       │                   │
                 │ Three-Address Code     │                   │
                 ▼                        │                   │
┌─────────────────────────────────┐       │                   │
│ 5. Code Optimizer               │ ◄───► │                   │
└────────────────┬────────────────┘       │                   │
                 │ Optimized IR           │                   │
                 ▼                        │                   │
┌─────────────────────────────────┐       │                   │
│ 6. Code Generator               │ ◄───► └───────────────────┘
└────────────────┬────────────────┘                 ▲
                 │ Target Code                      │
                 ▼                        ┌─────────┴─────────┐
Target Machine Assembly Code              │   Error Handler   │
                                          └───────────────────┘
```

#### Detailed Explanation of Each Phase:

#### Phase 1: Lexical Analysis (Scanning)
- Reads the input character stream of the source program and groups characters into meaningful sequences called **lexemes**.
- For each lexeme, outputs a **token** of the form `<token-name, attribute-value>`.
- Strips whitespace characters, tabs, and comments.
- Enters identifier names and attributes into the **Symbol Table**.
- *Example:* For `position = initial + rate * 60`, tokens produced:
  `<id, 1> <=> <id, 2> <+> <id, 3> <*> <60>`
  where `id` entries point to symbol table records for `position`, `initial`, and `rate`.

#### Phase 2: Syntax Analysis (Parsing)
- Takes the token stream from the lexical analyzer and constructs a hierarchical parse tree or **syntax tree**.
- Uses the rules of a **Context-Free Grammar (CFG)** to impose grammatical structure and verify syntactic validity.
- Enforces operator precedence and associativity (e.g., multiplication `*` binds tighter than addition `+`).
- *Example:* Syntax tree has root `=`, left child `<id, 1>`, and right child `+` having `<id, 2>` and subtree `* (<id, 3>, 60)`.

#### Phase 3: Semantic Analysis
- Checks the syntax tree and symbol table for semantic consistency with language specifications.
- Performs **type checking**: verifies that operators have compatible operands (e.g., integer vs. floating-point).
- Applies **type coercion**: inserts implicit conversion operators if permitted (e.g., converting integer constant `60` to `float` via `inttofloat`).
- Detects semantic errors such as undeclared identifiers, duplicate variable definitions, and array subscript out-of-type.

#### Phase 4: Intermediate Code Generation (ICG)
- Translates the decorated syntax tree into an explicit low-level, machine-independent intermediate representation (IR).
- Common representation: **Three-Address Code (TAC)**, consisting of instructions with at most three addresses (two operands and one destination).
- TAC simplifies compiler portability across different hardware architectures.
- *Example TAC generated:*
  ```text
  t1 = inttofloat(60)
  t2 = id3 * t1
  t3 = id2 + t2
  id1 = t3
  ```

#### Phase 5: Code Optimization
- Analyzes and transforms the intermediate code to improve runtime execution speed and reduce target memory/power consumption.
- **Machine-independent optimizations** include:
  - *Constant Folding / Propagation:* Evaluates constant expressions at compile time (`inttofloat(60)` replaced by `60.0`).
  - *Dead Code Elimination:* Removes statements whose results are never read.
  - *Common Subexpression Elimination:* Reuses previously computed values instead of recalculating.
  - *Loop Invariant Code Motion:* Moves calculations that do not change inside a loop to before the loop.
- *Example Optimized TAC:*
  ```text
  t1 = id3 * 60.0
  id1 = id2 + t1
  ```

#### Phase 6: Code Generation
- Maps the optimized intermediate code into target machine language or relocatable assembly instructions.
- Selects appropriate target CPU instructions, allocates CPU registers to variables (`Register Allocation & Assignment`), and assigns memory addresses.
- *Example Target Assembly (for a hypothetical load/store architecture):*
  ```assembly
  LDF  R2, id3
  MULF R2, R2, #60.0
  LDF  R1, id2
  ADDF R1, R1, R2
  STF  id1, R1
  ```

#### Cross-Phase Support Components:
1. **Symbol Table Management:**
   A central data structure (hash table or balanced binary tree) that records information about program identifiers: variable names, types, scopes, storage locations, array dimensions, and function signatures. Accessed by all compiler phases.
2. **Error Handler:**
   Detects, reports, and recovers from errors encountered during translation:
   - *Lexical Errors:* Unrecognized characters, illegal identifiers.
   - *Syntax Errors:* Missing semicolons, unmatched parentheses.
   - *Semantic Errors:* Incompatible operand types, undeclared variables.
   - *Logical/Runtime Warnings:* Division by zero, uninitialized variables.

---

### 3. Comprehensive End-to-End Trace Example

Statement: `position = initial + rate * 60`

1. **Source Code Input:** `position = initial + rate * 60`
2. **Lexical Analyzer:** `<id, 1> <=> <id, 2> <+> <id, 3> <*> <60>`
   (Symbol Table entries: 1: `position`, 2: `initial`, 3: `rate`)
3. **Syntax Analyzer:**
   ```
          =
        /   \\
      id1    +
           /   \\
         id2    *
              /   \\
            id3   60
   ```
4. **Semantic Analyzer (Type Coercion):**
   ```
          =
        /   \\
      id1    +
           /   \\
         id2    *
              /   \\
            id3   inttofloat
                      |
                     60
   ```
5. **Intermediate Code Generator:**
   ```
   t1 = inttofloat(60)
   t2 = id3 * t1
   t3 = id2 + t2
   id1 = t3
   ```
6. **Code Optimizer:**
   ```
   t1 = id3 * 60.0
   id1 = id2 + t1
   ```
7. **Code Generator:**
   ```
   LDF   R2, id3
   MULF  R2, R2, #60.0
   LDF   R1, id2
   ADDF  R1, R1, R2
   STF   id1, R1
   ```

---

### 4. Lexical Analysis: Tokens, Patterns, and Lexemes

- **Token:** An abstract category of syntactic elements treated as a single unit during syntax analysis (e.g., `keyword`, `identifier`, `number`, `operator`).
- **Pattern:** The formal descriptive rule (typically a regular expression) governing the formation of tokens.
- **Lexeme:** The actual concrete character sequence in the source program that matches a token pattern (e.g., `while`, `count`, `3.1415`).

**Lexical Analyzer Generator (LEX / Flex):**
- A specialized compiler-construction tool that takes a high-level specification of regular expressions and action code (`.l` file) and automatically generates a C lexical analyzer program (`lex.yy.c`).
- Structure of a Lex program:
  ```lex
  %{
  /* C declarations, header includes */
  %}
  /* Regular definitions */
  %%
  /* Translation rules: Pattern { Action } */
  %%
  /* User auxiliary C functions */
  ```
- Uses Deterministic Finite Automata (DFA) under the hood to recognize tokens in linear time O(N) relative to input length.
"""

# 2. Module 2: Syntax Analysis (Top-Down Parsing)
module2_content = """# BCS601 — Module 2

## Syntax Analysis (Top-Down Parsing)

**Subject:** BCS601 (Compiler Design)
**Module:** Module 2
**Content type:** primary_module
**Sources:** Compilers: Principles, Techniques, and Tools (Dragon Book, 2nd Edition), VTU BCS601 Syllabus

---

### 1. Role of the Parser & Context-Free Grammars (CFG)

The **parser** (syntax analyzer) takes the stream of tokens from the lexical analyzer and verifies whether the token sequence conforms to the syntactic rules of the programming language specified by a **Context-Free Grammar (CFG)**.

A Context-Free Grammar G is formally defined as a 4-tuple:
`G = (V, Σ, R, S)`
- **V (Non-terminals):** A finite set of syntactic variables representing sentence abstractions.
- **Σ (Terminals):** A finite set of basic token symbols forming the strings of the language.
- **R (Production Rules):** Finite set of productions of the form `A -> α`, where `A ∈ V` and `α ∈ (V ∪ Σ)*`.
- **S (Start Symbol):** A distinguished non-terminal symbol `S ∈ V`.

**Grammar Ambiguity:**
A grammar is **ambiguous** if there exists at least one string that has two or more distinct parse trees (or two or more distinct leftmost/rightmost derivations). Ambiguity leads to multiple semantic interpretations of an expression, which is unacceptable in programming languages.

---

### 2. Grammar Transformations for Top-Down Parsing

#### A. Elimination of Left Recursion
A grammar is left-recursive if it has a non-terminal `A` such that `A =>+ Aα`. Top-down parsers (e.g., recursive descent) loop infinitely on left-recursive grammars.
- **Immediate Left Recursion Elimination:**
  Given:
  `A -> Aα1 | Aα2 | ... | Aαm | β1 | β2 | ... | βn` (where no `βi` begins with `A`)
  Replace with:
  ```text
  A  -> β1 A' | β2 A' | ... | βn A'
  A' -> α1 A' | α2 A' | ... | αm A' | ε
  ```

#### B. Left Factoring
Left factoring resolves ambiguity when two productions for the same non-terminal share a common prefix, preventing the parser from predicting which production to choose based on the next input token.
- Given: `A -> αβ1 | αβ2`
- Factored:
  ```text
  A  -> α A'
  A' -> β1 | β2
  ```

---

### 3. Top-Down Predictive Parsing & LL(1) Grammars

In top-down parsing, the parse tree is constructed starting from the root node (start symbol) and expanding downwards towards the leaves (terminals).

**LL(1) Parser Properties:**
- First **L**: Scans input from **L**eft to right.
- Second **L**: Constructs a **L**eftmost derivation.
- **(1)**: Uses **1** token of lookahead to make parsing decisions deterministically without backtracking.

#### Computation of FIRST and FOLLOW Sets:
- **FIRST(α):** The set of terminals that begin strings derived from `α`. If `α =>* ε`, then `ε ∈ FIRST(α)`.
  1. If `X` is a terminal, `FIRST(X) = {X}`.
  2. If `X -> ε` is a production, add `ε` to `FIRST(X)`.
  3. If `X -> Y1 Y2 ... Yk`, add all non-ε symbols of `FIRST(Y1)` to `FIRST(X)`. If `Y1 =>* ε`, add `FIRST(Y2)`, and so on.
- **FOLLOW(A):** The set of terminals that can appear immediately to the right of non-terminal `A` in some sentential form.
  1. Add `$` (input endmarker) to `FOLLOW(S)`, where `S` is the start symbol.
  2. If there is a production `A -> αBβ`, everything in `FIRST(β)` (except `ε`) is in `FOLLOW(B)`.
  3. If `A -> αB` or `A -> αBβ` where `FIRST(β)` contains `ε`, everything in `FOLLOW(A)` is in `FOLLOW(B)`.

#### LL(1) Parsing Table Construction:
For each production `A -> α` in grammar G:
1. For each terminal `a` in `FIRST(α)`, add `A -> α` to `M[A, a]`.
2. If `ε ∈ FIRST(α)`, for each terminal `b` in `FOLLOW(A)`, add `A -> α` to `M[A, b]`.
3. If `ε ∈ FIRST(α)` and `$ ∈ FOLLOW(A)`, add `A -> α` to `M[A, $]`.
4. All undefined entries are error entries.

**LL(1) Condition:** A grammar is LL(1) if and only if its parsing table contains no multiply-defined entries (no conflicts).
"""

# 3. Module 3: Bottom-Up Parsing (LR Parsers)
module3_content = """# BCS601 — Module 3

## Bottom-Up Parsing (LR Parsers)

**Subject:** BCS601 (Compiler Design)
**Module:** Module 3
**Content type:** primary_module
**Sources:** Compilers: Principles, Techniques, and Tools (Dragon Book, 2nd Edition), VTU BCS601 Syllabus

---

### 1. Principles of Bottom-Up Parsing & Shift-Reduce Mechanism

Bottom-up parsing attempts to construct a parse tree for an input string beginning at the leaves (terminals) and working upwards towards the root (start symbol).
- **Reduction:** Replacing a substring that matches the right side of a production with the non-terminal on the left side.
- **Handle:** A substring that matches the body of a production and whose reduction represents one step along the reverse of a rightmost derivation.
- **Handle Pruning:** The process of repeatedly finding and replacing handles until only the start symbol remains.

**The Four Actions of a Shift-Reduce Parser:**
1. **Shift:** Push the next input token onto the parse stack.
2. **Reduce:** Identify a handle on top of the stack and replace it with its corresponding non-terminal.
3. **Accept:** Announce successful parse completion when the stack contains only the start symbol and the input is empty (`$`).
4. **Error:** Detect syntactic syntax errors when no shift or reduce action is valid.

**Conflicts in Shift-Reduce Parsing:**
- **Shift/Reduce Conflict:** The parser cannot decide whether to shift the next token or reduce the stack top (e.g., dangling-else problem).
- **Reduce/Reduce Conflict:** The parser cannot decide which of two distinct productions to use for reduction.

---

### 2. LR Parsing Architecture & Parser Classes

An **LR parser** is an efficient shift-reduce parser:
- **L:** Scans input from **L**eft to right.
- **R:** Constructs a **R**ightmost derivation in reverse.
- **k:** Uses `k` tokens of lookahead (typically `k = 1`).

**Hierarchy of LR Parsers:**
```text
LR(0)  ⊂  SLR(1)  ⊂  LALR(1)  ⊂  CLR(1)
(Least powerful)               (Most powerful)
```

#### A. SLR(1) - Simple LR Parser:
- Uses **LR(0) items** (productions with a dot `•` indicating parser position, e.g., `A -> α • β`).
- Uses `CLOSURE` and `GOTO` operations on sets of items.
- Simple resolution: Reduces `A -> α` in state `I` on lookahead symbol `a` **only if** `a ∈ FOLLOW(A)`.
- Compact table size, but fails on grammars where `FOLLOW(A)` contains shift symbols.

#### B. CLR(1) - Canonical LR Parser:
- Uses **LR(1) items** of the form `[A -> α • β, a]`, where `a` is a lookahead terminal.
- Most powerful class of deterministic shift-reduce parsers.
- Avoids all SLR conflicts, but creates large parsing tables with hundreds or thousands of states.

#### C. LALR(1) - Lookahead LR Parser:
- Merges CLR(1) states that have identical core sets of LR(0) items.
- Table size is identical to SLR(1), but parsing power is vastly superior (near CLR(1)).
- The standard engine behind **YACC** (Yet Another Compiler-Compiler) and **Bison**.
"""

# 4. Module 4: Syntax-Directed Translation & Intermediate Code Generation
module4_content = """# BCS601 — Module 4

## Syntax-Directed Translation & Intermediate Code Generation

**Subject:** BCS601 (Compiler Design)
**Module:** Module 4
**Content type:** primary_module
**Sources:** Compilers: Principles, Techniques, and Tools (Dragon Book, 2nd Edition), VTU BCS601 Syllabus

---

### 1. Syntax-Directed Definitions (SDD) & Attributes

A **Syntax-Directed Definition (SDD)** is a context-free grammar augmented with semantic attributes and rules:
- **Synthesized Attribute:** The value of an attribute at a parse tree node is computed from attribute values at the **children** of that node or from the node itself.
  - An SDD using only synthesized attributes is called an **S-attributed definition**.
  - Can be evaluated naturally during bottom-up parsing using a post-order traversal.
- **Inherited Attribute:** The value of an attribute at a node is computed from attribute values at the **parent** and/or **siblings** of that node.
  - An SDD where each attribute is either synthesized or inherits only from left siblings is called an **L-attributed definition**.
  - Can be evaluated during top-down parsing (e.g., recursive descent).

---

### 2. Intermediate Representations & Three-Address Code (TAC)

**Three-Address Code (TAC)** is a sequence of instructions where each instruction has at most one operator on the right side and at most three address operands.

#### Standard Forms of TAC Instructions:
1. `x = y op z` (Binary arithmetic or logical operation)
2. `x = op y` (Unary operation: minus, negation)
3. `x = y` (Copy assignment)
4. `goto L` (Unconditional jump)
5. `if x relop y goto L` (Conditional jump)
6. `param x` / `call p, n` / `return y` (Procedure call)
7. `x = y[i]` / `x[i] = y` (Indexed array access)
8. `x = &y` / `x = *y` (Pointer address and dereference)

#### Data Structure Implementations of TAC:
1. **Quadruples:** A record with 4 fields: `(op, arg1, arg2, result)`. Explicitly names temporary variables.
2. **Triples:** A record with 3 fields: `(op, arg1, arg2)`. Refers to intermediate results using their statement index/pointer `(i)`, saving space.
3. **Indirect Triples:** An array of pointers to triple records, enabling easy code reordering during optimization without shifting triple indices.

#### Backpatching:
A technique for generating target code for boolean expressions and control-flow statements in a single pass. Unresolved jump targets are placed on lists (`truelist`, `falselist`, `nextlist`) and "backpatched" with the correct target labels as soon as they become known.
"""

# 5. Module 5: Code Optimization, Run-Time Environments & Target Code Generation
module5_content = """# BCS601 — Module 5

## Code Optimization, Run-Time Environments & Target Code Generation

**Subject:** BCS601 (Compiler Design)
**Module:** Module 5
**Content type:** primary_module
**Sources:** Compilers: Principles, Techniques, and Tools (Dragon Book, 2nd Edition), VTU BCS601 Syllabus

---

### 1. Run-Time Storage Organization

The run-time storage space of an executing target program is typically partitioned into logical segments:
1. **Target Code Segment:** Fixed-size read-only area containing generated machine instructions.
2. **Static Data Segment:** Fixed-size global variables and compiler constants known at compile time.
3. **Stack Segment:** Grows dynamically downward; allocates **Activation Records (Stack Frames)** for procedure calls (local variables, return address, saved registers, parameters).
4. **Heap Segment:** Grows dynamically upward; manages dynamically allocated memory (via `malloc` or `new`) and garbage collection.

---

### 2. Principal Sources of Code Optimization

Optimizations transform intermediate code to execute faster and use fewer resources without altering the program's observable semantics.

#### A. Basic Blocks and Flow Graphs:
- A **Basic Block** is a sequence of consecutive three-address statements in which control enters exclusively at the first statement and leaves exclusively at the last statement without halting or branching in the middle.
- **Algorithm to Identify Basic Blocks:**
  1. Determine **leaders** (first statement in program; target of any conditional/unconditional jump; statement immediately following any jump).
  2. For each leader, its basic block consists of the leader and all statements up to but not including the next leader.
- A **Flow Graph** is a directed graph where nodes are basic blocks and directed edges represent control-flow transfers between blocks.

#### B. Core Optimization Techniques:
1. **Local Optimizations (within Basic Blocks):**
   - *Common Subexpression Elimination:* If `t1 = b + c` and later `t2 = b + c` where neither `b` nor `c` has changed, replace with `t2 = t1`.
   - *Copy Propagation:* If `x = y`, substitute `y` for `x` in subsequent uses to eliminate redundant temporary variables.
   - *Dead Code Elimination:* Remove computations whose results are never read.
2. **Loop Optimizations (across Basic Blocks):**
   - *Code Motion (Loop Invariant Computation):* Move expressions computed inside a loop whose operands never change outside before the loop header.
   - *Induction Variable Elimination & Reduction in Strength:* Replace expensive operations (multiplication `i * 4`) with cheaper operations (addition `offset + 4`) tied to loop counter variables.
3. **Peephole Optimization:**
   A target-code optimization technique that inspects a small sliding window ("peephole") of generated instructions to eliminate redundant loads/stores, unreachable jumps, and algebraic identities (`x + 0`, `x * 1`).

---

### 3. Issues in the Design of a Code Generator

The code generator converts optimized intermediate code into target machine instructions:
1. **Instruction Selection:** Choosing the best target machine instructions matching TAC statements while minimizing cost.
2. **Register Allocation and Assignment:**
   - *Register Allocation:* Deciding which program variables reside in fast CPU registers rather than main memory.
   - *Register Assignment:* Deciding the specific register (e.g., `R0`, `R1`) assigned to each variable.
3. **Evaluation Order:** Ordering target instructions to minimize the number of temporary registers needed.
"""

# 6. Question Bank Solutions: Covering "Explain the phases of a compiler with a neat diagram"
qbank_content = """# BCS601 — Question Bank Solutions

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
2. If `A -> αBβ`, add `FIRST(β) \\ {ε}` to `FOLLOW(B)`.
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
3. **Indirect Triples:** Uses a separate array of pointers to Triples, making instruction reordering and code optimization significantly faster.
"""

# 7. Textbook Notes: Directly summarizing the Dragon Book
textbook_notes_content = """# BCS601 — Textbook Notes

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
Target Code Generation: Instruction selection, register allocation via graph coloring, peephole optimization.
"""

# 8. Metadata JSON for BCS601
metadata = {
    "subject_code": "BCS601",
    "subject_name": "Compiler Design",
    "semester": 6,
    "semester_label": "6TH SEM",
    "modules": {
        "1": {
            "title": "Introduction to Compilers & Lexical Analysis",
            "topics": [
                "Language Processors: Compilers, Interpreters, Assemblers, Linkers, Loaders",
                "Phases of a Compiler: Lexical, Syntax, Semantic, ICG, Optimization, Code Generation",
                "The Structure of a Compiler: Analysis and Synthesis Model",
                "Symbol Table Management and Error Handling Across Phases",
                "Compiler Construction Tools and Cousins of the Compiler",
                "Lexical Analysis: Role of Scanner, Tokens, Patterns, and Lexemes",
                "Specification of Tokens: Regular Expressions and Regular Definitions",
                "Recognition of Tokens: Transition Diagrams and Finite Automata",
                "The Lexical-Analyzer Generator: LEX / Flex Architecture and Specification",
                "Trace of Statement: position = initial + rate * 60 Through All Phases"
            ],
            "sources": [
                "Dragon Book (Compilers: Principles, Techniques, and Tools - Aho, Lam, Sethi, Ullman)",
                "VTU Course Outcomes BCS601"
            ],
            "content_chars": len(module1_content)
        },
        "2": {
            "title": "Syntax Analysis (Top-Down Parsing)",
            "topics": [
                "Role of Parser: Context-Free Grammars (CFG) and Derivations",
                "Ambiguous Grammars and Eliminating Ambiguity",
                "Elimination of Left Recursion and Left Factoring",
                "Top-Down Parsing: Recursive-Descent Parsing and Backtracking",
                "LL(1) Grammars: Computation of FIRST and FOLLOW Sets",
                "Construction of Predictive Parsing Table M[A, a]",
                "Non-recursive Predictive Parsing Algorithm Using Explicit Stack",
                "Error Recovery Strategies in Predictive Parsing"
            ],
            "sources": [
                "Dragon Book (Compilers: Principles, Techniques, and Tools)"
            ],
            "content_chars": len(module2_content)
        },
        "3": {
            "title": "Bottom-Up Parsing (LR Parsers)",
            "topics": [
                "Bottom-Up Parsing: Reductions, Handles, and Handle Pruning",
                "Shift-Reduce Parsing: Shift, Reduce, Accept, Error Actions",
                "Conflicts in Shift-Reduce Parsers: Shift/Reduce and Reduce/Reduce Conflicts",
                "Model of an LR Parser and LR Parsing Algorithm",
                "Simple LR (SLR) Parsing: LR(0) Items, Closure, GOTO, and Table Construction",
                "Canonical LR (CLR) Parsing: LR(1) Items and Table Construction",
                "Lookahead LR (LALR) Parsing: State Merging and Table Construction",
                "Using Parser Generators: YACC / Bison Syntax and Semantic Actions"
            ],
            "sources": [
                "Dragon Book (Compilers: Principles, Techniques, and Tools)"
            ],
            "content_chars": len(module3_content)
        },
        "4": {
            "title": "Syntax-Directed Translation & Intermediate Code Generation",
            "topics": [
                "Syntax-Directed Definitions (SDD): Synthesized and Inherited Attributes",
                "Evaluation Orders for SDDs: Dependency Graphs, S-Attributed and L-Attributed Definitions",
                "Syntax-Directed Translation Schemes (SDTS): Postfix Translation",
                "Intermediate Representations: Directed Acyclic Graphs (DAG), Syntax Trees",
                "Three-Address Code (TAC): Quadruples, Triples, and Indirect Triples",
                "Translation of Expressions and Boolean Expressions",
                "Backpatching for Boolean Expressions and Flow-of-Control Statements"
            ],
            "sources": [
                "Dragon Book (Compilers: Principles, Techniques, and Tools)"
            ],
            "content_chars": len(module4_content)
        },
        "5": {
            "title": "Code Optimization, Run-Time Environments & Target Code Generation",
            "topics": [
                "Run-Time Storage Organization: Code, Static, Stack, Heap Segments",
                "Activation Records and Storage Allocation Strategies",
                "Principal Sources of Optimization: Common Subexpression, Copy Propagation, Dead Code",
                "Loop Optimizations: Code Motion, Induction Variable Elimination, Reduction in Strength",
                "Basic Blocks and Flow Graphs: Identifying Leaders and Constructing Flow Graphs",
                "DAG Representation of Basic Blocks and Local Optimizations",
                "Target Code Generator Design Issues: Instruction Selection, Register Allocation and Assignment",
                "Peephole Optimization Techniques"
            ],
            "sources": [
                "Dragon Book (Compilers: Principles, Techniques, and Tools)"
            ],
            "content_chars": len(module5_content)
        }
    }
}

# Write files
files_to_write = {
    "module1.md": module1_content,
    "module2.md": module2_content,
    "module3.md": module3_content,
    "module4.md": module4_content,
    "module5.md": module5_content,
    "question_bank_solutions.md": qbank_content,
    "textbook_notes.md": textbook_notes_content,
}

for fname, content in files_to_write.items():
    fpath = KNOWLEDGE_BCS601 / fname
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\\n")
    print(f"Generated {fpath} ({len(content)} chars)")

with open(KNOWLEDGE_BCS601 / "metadata.json", "w", encoding="utf-8") as f:
    json.dump(metadata, f, indent=2)
print(f"Generated {KNOWLEDGE_BCS601 / 'metadata.json'}")

print("BCS601 Compiler Design knowledge base successfully generated.")
