# BCS515B — Artificial Intelligence (Professional Elective - I)

## Module 5: Resolution in FOL & Classical Planning

### Resolution in FOL

- **Resolution** is a single **sound and complete** inference rule for first-order logic. Unlike forward/backward chaining (limited to Horn clauses), resolution handles the **full expressive power of FOL**.
- Two applications:
  - **Direct inference**: derive new clauses from the KB by resolving pairs of clauses.
  - **Resolution refutation (proof by contradiction)**: to prove KB ⊨ α, add **¬α** to the KB and show the resulting set is **unsatisfiable** (derive the empty clause, a contradiction).

```
[DIAGRAM: Resolution Refutation Strategy
 KB + NOT(query) --> Convert all to CNF --> Resolve clause pairs
 New resolvents --> keep resolving --> Empty clause (contradiction) => query proved
 (if no empty clause derivable, query is not entailed)
]
```

### Conjunctive Normal Form (CNF) Conversion

- **CNF**: a conjunction of **clauses**, where each clause is a disjunction of **literals** (an atom or a negated atom). Any FOL sentence can be converted to CNF.
- **Literal**: an atomic sentence or its negation (e.g., `P(x)`, `¬Q(x)`).
- Steps to convert an FOL sentence to CNF (with the exam example `∀x (P(x) ⇒ ∃y Q(x, y))`):
  1. **Eliminate implications**: replace `α ⇒ β` by `¬α ∨ β`. (`P(x) ⇒ ∃y Q(x, y)` becomes `¬P(x) ∨ ∃y Q(x, y)`, i.e., `∀x (¬P(x) ∨ ∃y Q(x, y))`.)
  2. **Move negations inward**: apply De Morgan's laws and double-negation elimination so that ¬ applies only to atomic sentences: `¬(α ∧ β) ≡ ¬α ∨ ¬β`, `¬(α ∨ β) ≡ ¬α ∧ ¬β`, `¬¬α ≡ α`, `¬∀x α ≡ ∃x ¬α`, `¬∃x α ≡ ∀x ¬α`.
  3. **Standardize variables apart**: rename variables so each quantifier has a unique variable (avoid capture), e.g., `∀x P(x) ∨ ∃x Q(x)` → `∀x P(x) ∨ ∃y Q(y)`.
  4. **Skolemize (eliminate existential quantifiers)**: replace each existentially quantified variable with a **Skolem function** of all universally quantified variables in whose scope the existential quantifier lies. If the existential is not inside any universal, use a **Skolem constant**. For `∀x (¬P(x) ∨ ∃y Q(x, y))`, the ∃y is inside the scope of ∀x, so y is replaced by the Skolem function `f(x)`: `∀x (¬P(x) ∨ Q(x, f(x)))`.
  5. **Drop universal quantifiers**: all remaining variables are universally quantified, so the ∀ symbols can be removed: `¬P(x) ∨ Q(x, f(x))`.
  6. **Distribute ∨ over ∧**: use `(α ∧ β) ∨ γ ≡ (α ∨ γ) ∧ (β ∨ γ)` to obtain a conjunction of clauses: `(¬P(x) ∨ Q(x, f(x)))`.
- Result for the example: clause `¬P(x) ∨ Q(x, f(x))` (already a single clause). A more complex example, `∀x (∀y P(y) ⇒ ∃z (R(x, z) ∨ ¬Q(y)))`, after conversion yields clauses `¬P(y) ∨ R(x, g(x, y)) ∨ ¬Q(y)` — the Skolem function `g(x, y)` depends on both x and y.

| Step | What it does | Rule used |
| :--- | :--- | :--- |
| 1. Eliminate ⇒, ⇔ | Remove implications/biconditionals | α ⇒ β ≡ ¬α ∨ β; α ⇔ β ≡ (α ⇒ β) ∧ (β ⇒ α) |
| 2. Move ¬ inward | Negation only on atoms | De Morgan, ¬¬, quantifier negation |
| 3. Standardize variables | Unique variable names | Rename |
| 4. Skolemize | Remove ∃ quantifiers | Skolem constant/function |
| 5. Drop ∀ | Remove universal quantifiers | Implicit universal |
| 6. Distribute ∨ over ∧ | Get conjunction of clauses | Distributivity |

### Skolemization Rules (Important)

- `∃x P(x)` (no enclosing universal) → `P(Const)` — a **Skolem constant** (new, never used before).
- `∀x ∃y P(x, y)` → `∀x P(x, f(x))` — **Skolem function** `f` of all enclosing universal variables.
- The Skolem symbol must be **new** (not appearing elsewhere in the KB), and it must not be reintroduced (EI in Module 4 is the same idea).
- Example: "Everyone who lies is guilty" + "John lies" KB converted to CNF:
  - `∀x (Lies(x) ⇒ Guilty(x))` → clause 1: `¬Lies(x) ∨ Guilty(x)`.
  - `Lies(John)` → clause 2: `Lies(John)`.
  - Negate the query "John is guilty": `¬Guilty(John)` → clause 3.

### Resolution Rule of Inference

- **Propositional resolution**: from clauses `(A ∨ B)` and `(¬A ∨ C)` infer `(B ∨ C)` — the **resolvent**. The complementary literals A and ¬A cancel out.
- **First-order resolution**: the same rule, but the two complementary literals need not be identical — they are matched by **unification**: from clauses `C1` containing literal `l1` and `C2` containing literal `l2`, if `UNIFY(l1, ¬l2) = θ`, infer `RESOLVE(C1, C2) = (C1 − l1 + C2 − l2) · θ` (with standardizing apart first).
- **Binary resolution**: resolves two clauses at a time. If the two clauses each contain a pair of complementary literals, the resolvent may be a **factor** (delete redundant literals: `(A ∨ A)` factorizes to `(A)`).
- Resolution is **sound** (resolvent is entailed by the parent clauses) and **refutation-complete**: if the KB plus the negated query is unsatisfiable, resolution will derive the **empty clause** (a contradiction, denoted □) in finite time.

### Resolution Refutation Proof — Worked Example

- **Goal**: Prove "John is guilty" from the KB "Everyone who lies is guilty; John lies."
- **Step 1 — Convert KB to CNF**:
  - `∀x (Lies(x) ⇒ Guilty(x))` → `¬Lies(x) ∨ Guilty(x)`  (C1)
  - `Lies(John)`  (C2)
- **Step 2 — Negate the conclusion** (to derive a contradiction):
  - `¬Guilty(John)`  (C3)
- **Step 3 — Resolve**:
  - Resolve C1 and C2: unify `Lies(x)` with `Lies(John)` using θ = {x/John}; resolvent: `Guilty(John)`  (C4)
  - Resolve C4 and C3: literals `Guilty(John)` and `¬Guilty(John)` cancel → **empty clause □**
- **Step 4 — Conclusion**: the empty clause is derived, so the negated conclusion is inconsistent with the KB; hence KB ⊨ Guilty(John) — John is guilty. **Proved by refutation.**

```
[DIAGRAM: Resolution Refutation for "John is guilty"
 C1: ¬Lies(x) ∨ Guilty(x)      C2: Lies(John)        C3: ¬Guilty(John)
        (C1 + C2, θ={x/John})
              |
        C4: Guilty(John)  --(resolve with C3)-->  Empty clause □
 (empty clause = contradiction => query proved)
]
```

### Classical Planning

- **Classical planning**: given an **initial state**, a set of **actions** (with preconditions and effects), and a **goal** (a set of conditions to satisfy), find a **sequence of actions** (a plan) that transforms the initial state into a goal state.
- The environment is assumed to be **fully observable, deterministic, finite, static, and discrete** — with only one agent acting.
- **Difference from problem solving (Module 2)**: planning works with **logical representations** of states (conjunctions of literals), **partial plans**, and **structured actions** (STRIPS/PDDL operators), instead of atomic state-space search over concrete configurations. This allows planning algorithms to reason about relevance, subgoal interactions, and to exploit the problem structure.

### PDDL (Planning Domain Definition Language)

- **PDDL** is the standard language for defining classical planning problems. A planning problem in PDDL is split into two parts:
  1. **Domain definition**: the **actions/operators** — for each action: **preconditions** (what must be true to execute it) and **effects** (what becomes true/false after execution). Each state is a set of ground **fluents** (facts); actions are defined with **variables** that get instantiated (grounded).
  2. **Problem definition**: the **objects** (constants), the **initial state** (complete specification of what holds), and the **goal** (a conjunction of literals that must hold; it need not specify the full final state).
- **STRIPS-style action representation**: `Action(Fly(p, from, to))` with `PRECOND: At(p, from) ∧ Plane(p) ∧ Airport(from) ∧ Airport(to)`, `EFFECT: ¬At(p, from) ∧ At(p, to)`.
- Example (air cargo transport): objects are planes, airports, cargo; actions Fly, Load, Unload; goal: cargo at the destination airport. The plan is a sequence of ground actions such as `Load(C1, SFO, P1), Fly(P1, SFO, JFK), Unload(C1, JFK, P1)`.
- Plan validity: each action's preconditions must hold when it executes (effects of earlier actions make them true), and the final state must satisfy the goal.
- **Forward/backward applicability**: an action is applicable in a state if its preconditions are satisfied; the **result** is the state with effects applied.

```
[DIAGRAM: PDDL Planning Problem
 Domain (operators: name, preconditions, effects)  +  Problem (objects, initial state, goal)
        |
   Planning algorithm searches for action sequence
        |
   Plan: a1 --> a2 --> ... --> an  (each action's preconditions satisfied)
        |
   Final state satisfies goal
]
```

### State-Space Search for Planning

- Planning as search: nodes are **states**; arcs are **actions**; a plan is a path from the initial state to a goal state. Two main approaches:

#### Forward (Progression) State-Space Search

- Search **forward from the initial state** to the goal: at each state, apply an applicable action to generate successor states.
- **Sound** by construction (every plan generated is valid). **Completeness**: with a complete search (e.g., BFS, IDDFS) it finds a plan if one exists.
- **Drawbacks**:
  - The **branching factor** is huge — all ground instances of all operators are possible at each state (e.g., every way to load cargo on every plane).
  - It cannot exploit **goal-directed reasoning**: it explores irrelevant actions (e.g., loading cargo that is not needed for the goal).
- Improvements: heuristics based on relaxed problems (ignore preconditions or negative effects).

```
[DIAGRAM: Forward (Progression) Search
 Initial state --> [apply any applicable action] --> many successor states
 ... continue until a state satisfies the goal
 (sound and complete, but very large branching factor)
]
```

#### Backward (Regression) Relevant-States Search

- Search **backward from the goal**: instead of successor states, compute **predecessors** — given a state satisfying the goal and an action, find a previous state from which the action leads to the goal.
- The **regression** of a goal G through an action a: the set of conditions that must hold **before** a so that after a, G holds:
  - Remove from G any literals that are in a's **effects** (they are achieved by a).
  - Add a's **preconditions** to G.
  - Keep any goal literals not affected by a.
- **Relevant actions**: only actions that **achieve some part of the goal** (their effects mention a goal literal) are considered — this prunes the search massively (the "relevant-states" name).
- **Drawback**: must ensure consistency — the regressed state must not contain contradictory literals, and actions must not undo needed conditions; the initial state must be checked against regressed goals. Regression can also leave irrelevant literals in goals.
- **Comparison**:

| Criterion | Forward (Progression) | Backward (Regression) |
| :--- | :--- | :--- |
| Direction | Initial state → goal | Goal → initial state |
| Node = state that satisfies | Complete state spec | Partial state (goal literals) |
| Action generation | All applicable actions | Only relevant (goal-achieving) actions |
| Branching factor | Large | Smaller (relevant actions only) |
| Correctness check | Preconditions checked as generated | Must check consistency with initial state at the end |
| Soundness/Completeness | Sound, complete | Sound, complete (with care) |

### Planning Graphs and the GraphPlan Algorithm

- A **planning graph** is a layered data structure for a planning problem, used to guide search (reachability analysis) rather than enumerating states. It contains two kinds of alternating layers:
  - **State level S0, S1, …**: sets of literals that could hold.
  - **Action level A1, A2, …**: sets of actions (plus **no-op** actions that carry a literal forward unchanged).
  - Edges: from a literal to an action if the literal is a **precondition** of the action; from an action to a literal if the literal is an **effect** of the action.
- **Mutual exclusion (mutex) links**: two literals (or actions) at the same level are **mutually exclusive** if they cannot both hold (or be executed) at that level. Examples: a literal and its negation; actions with conflicting effects (one deletes another's effect); actions whose preconditions are mutex.
- **Construction**: starting from S0 = the initial state literals, repeatedly add action levels (actions whose preconditions appear in the current state level with no mutex) and state levels (effects of actions in the previous action level) until the graph **levels off** (no new literals appear) or the goal is reached.

```
[DIAGRAM: Planning Graph
 S0 --> A1 --> S1 --> A2 --> S2 --> ...
 (literals) (actions + no-ops) (literals) ... (levels off)
 Mutex links between incompatible literals/actions at each level
 Goal appears (without mutex) => extract plan by backward search
]
```

- **Uses**:
  - **Reachability**: if a literal does not appear by the time the graph levels off, it is unreachable — useful for pruning.
  - **Estimating heuristics**: the level at which a goal first appears gives a lower bound on plan length.
  - **Plan extraction** (GraphPlan algorithm): search backward from the goal level, choosing actions at each level whose effects satisfy the goal while avoiding mutex conflicts; if extraction fails at a level, grow the graph and retry.
- **GraphPlan algorithm** steps:
  1. Build the planning graph level by level.
  2. Check if the goal appears in the current state level (with all goal literals pairwise non-mutex).
  3. If yes, attempt **backward extraction**: at each level, select a non-mutex set of actions that achieves the required literals; recurse to the previous level with the actions' preconditions.
  4. If extraction succeeds, return the plan; otherwise, add one more level (or stop if the graph has levelled off — no plan exists).
- **Properties**: GraphPlan is **sound** (extracted plans are valid) and **complete** (if a plan exists, the algorithm will find one once the graph levels off). Planning graphs are polynomial in size for many problems.

### Key Exam Facts

- CNF conversion steps (eliminate ⇒, move ¬ inward, standardize variables, Skolemize, drop ∀, distribute ∨ over ∧) — step-by-step conversion of a given sentence is a repeated exam question.
- Skolem functions depend on all enclosing universal variables; constants for un-nested existentials.
- Resolution refutation: add negated query, resolve until empty clause.
- PDDL = domain (operators) + problem (objects, initial state, goal); STRIPS actions have preconditions and effects.
- Forward vs backward search comparison; GraphPlan = planning graph + backward plan extraction; sound and complete.
