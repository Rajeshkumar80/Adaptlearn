# BCS601 — Module 2

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

**LL(1) Condition:** A grammar is LL(1) if and only if its parsing table contains no multiply-defined entries (no conflicts).\n