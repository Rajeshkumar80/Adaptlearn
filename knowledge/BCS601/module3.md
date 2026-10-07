# BCS601 — Module 3

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
- The standard engine behind **YACC** (Yet Another Compiler-Compiler) and **Bison**.\n