# BCS601 — Module 1

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
        /   \
      id1    +
           /   \
         id2    *
              /   \
            id3   60
   ```
4. **Semantic Analyzer (Type Coercion):**
   ```
          =
        /   \
      id1    +
           /   \
         id2    *
              /   \
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
- Uses Deterministic Finite Automata (DFA) under the hood to recognize tokens in linear time O(N) relative to input length.\n