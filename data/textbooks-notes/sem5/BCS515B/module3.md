# BCS515B — Artificial Intelligence (Professional Elective - I)

## Module 3: Informed Search & Propositional Logic

### Informed (Heuristic) Search

- **Informed search** uses problem-specific knowledge — a **heuristic function** h(n) — to guide the search toward the goal, in addition to the path cost g(n).
- **Heuristic function h(n)**: the estimated cost of the cheapest path from node n to the goal. h(n) = 0 if n is a goal state. Example heuristics for the 8-Puzzle: **h1 = number of misplaced tiles**, **h2 = sum of Manhattan distances** of each tile from its goal position. Both are admissible; h2 dominates h1 (h2(n) ≥ h1(n) for all n) and is better (never worse than h1 in expanded nodes).
- **Evaluation function f(n)**: estimates the total cost of a solution path through node n, f(n) = g(n) + h(n) — the cost so far plus the estimated remaining cost. Search strategies differ in how f(n) orders the frontier.

### Greedy Best-First Search

- Expands the node that appears to be **closest to the goal**: f(n) = h(n) only (ignores g(n)).
- Implemented with a priority queue ordered by h(n). Tries to expand the smallest estimated remaining cost first.
- **Complete**: No — can get stuck in loops (unless repeated-state checking); can be misled by the heuristic.
- **Optimal**: No — it may find a non-optimal path because it never considers the cost already incurred.
- **Time and Space**: O(b^m) in the worst case; with a good heuristic it can be dramatically faster in practice.
- Classic counter-example (Romania): from Iasi to Fagaras, greedy follows the straight-line-distance estimate to the wrong city and takes a longer route than A*.
- Example: greedy from Arad to Bucharest picks Sibiu (h = 253) over Zerind (h = 374) and Timisoara (h = 329); then Fagaras (h = 176) — reaching Bucharest via a 450+ km path, while A* finds the optimal 418 km path via Rimnicu Vilcea and Pitesti.

```
[DIAGRAM: Greedy Best-First vs A*
 Greedy: expand node with smallest h(n) only (no cost-so-far)
 A*: expand node with smallest f(n) = g(n) + h(n)
 (A* balances cost-so-far and estimated remaining cost)
]
```

### A* Search

- **A\***: the most widely known best-first search; evaluates nodes with **f(n) = g(n) + h(n)** where g(n) is the cost from start to n and h(n) is the heuristic estimate from n to goal. It expands the node with the lowest f(n).
- A* is **complete** and **optimal** provided h(n) is **admissible** (for tree search) or **consistent** (for graph search).
- **Admissible heuristic**: h(n) never overestimates the true cost to reach the goal — h(n) ≤ h*(n), where h* is the true optimal cost from n to goal. Since g(n) is the exact cost so far, f(n) is then an optimistic estimate of the total solution cost.
- **Consistent (monotone) heuristic**: h(n) ≤ c(n, a, n') + h(n') for every edge — the estimate from n is no more than the step cost plus the estimate from the successor. Consistency implies admissibility. With a consistent heuristic, f values are **non-decreasing along any path** (nodes are expanded in order of non-decreasing f), and a goal is reached the first time it is popped from the frontier.
- **Proof of optimality (tree search, admissible h)**: Suppose a suboptimal goal node G2 is on the frontier and an optimal goal G* has cost C*. Since h(G2) = 0, f(G2) = g(G2) > C*. Take any node n on the optimal path to G*; admissibility gives h(n) ≤ h*(n), so f(n) = g(n) + h(n) ≤ g(n) + h*(n) = C*. Hence f(n) ≤ C* < f(G2), so n is expanded before G2 — a goal never preceded by n cannot be optimal. Therefore the first goal selected by A* is optimal.
- **Time**: exponential in the worst case; **Space**: O(b^d) — A* keeps all generated nodes in memory (the main limitation). SMA* (Simplified Memory-Bounded A*) addresses this.
- **Optimal efficiency**: no other optimal algorithm using the same heuristic expands fewer nodes than A* (among algorithms that extend the search path from the root). The number of nodes expanded depends on |h(n) − h*(n)|, the **error** of the heuristic.

### Memory-Bounded Heuristic Search (SMA*)

- **SMA\*** (Simplified Memory-Bounded A*): A* that is restricted to a fixed memory bound. When memory is full, SMA* **drops the worst leaf node** (highest f) and **backs up its f value to its parent**, so the path can be re-expanded later if needed.
- SMA* is **complete** if the memory can hold at least one solution path; it finds the **best solution reachable** within the given memory.
- More memory = better solutions. SMA* is robust but complex; other variants exist: **RBFS (Recursive Best-First Search)** and **IDA\*** (Iterative Deepening A* — A* with IDDFS-style depth limits on f).

### Local Search Algorithms

- **Local search** algorithms operate on a **single current state** (rather than multiple paths), move to neighbors, and return the final state. They use little memory (constant), are often suitable for huge or infinite state spaces, and can find reasonable solutions in continuous or large problems. They are **incomplete** — may fail to find a goal even if one exists.
- **State-space landscape**: elevation = value of the objective (or heuristic) function; global maximum vs local maxima, plateaus, ridges.

```
[DIAGRAM: State-Space Landscape
 (elevation = value of heuristic/objective function)
 Peaks: local maxima vs global maximum
 Flat: plateau (shoulder / flat area) | Thin ridge: ridge
 Search climbs from a start point along the landscape
]
```

- **Hill-Climbing Search** (greedy local search): at each step, move to the **best neighboring state** (highest value / lowest cost) and stop when no neighbor is better. Variants: **steepest-ascent** (try all neighbors, pick best), **first-choice** (pick first improving neighbor), **random-restart** (repeat from random start). Hill-climbing is **incomplete** — it can get stuck in:
  - **Local maxima**: a peak higher than all neighbors but lower than the global maximum. Remedy: random restarts, simulated annealing, sideways moves.
  - **Plateaus**: flat regions where all neighbors have equal value (can be large flat areas or shoulders). Remedy: sideways moves with a limit, random restarts.
  - **Ridges**: narrow sequences of peaks where every move that improves the value is impossible directly (needs diagonal moves that the definition of neighbor disallows). Remedy: better move generation, simulated annealing.
- Hill-climbing is used in real-world applications like **8-Queens complete-state formulation**: an 8-queens state with 55 possible successor moves; the algorithm quickly reaches a solution — random-restart hill-climbing solves 8-Queens almost always.

- **Simulated Annealing**: a hill-climbing variant that escapes local maxima by allowing **worse moves** with a probability that decreases over time. Named after the physical annealing of metals.
  - At each step, pick a random move; if it improves the state, accept it; if it worsens the state, accept it with probability e^(ΔE/T) where ΔE is the change in value and **T is the temperature** that is gradually reduced by a **cooling schedule**.
  - At high temperature, almost any move is accepted (wide exploration); at low temperature, only improving moves are accepted (convergence). With a sufficiently slow cooling schedule, simulated annealing finds a global optimum with probability approaching 1.

- **Genetic Algorithms (GA)**: a stochastic local search inspired by natural selection. A population of candidate states (each encoded as a string — the **chromosome**) evolves over generations:
  1. **Initialization**: generate a random population (e.g., 8-Queens boards encoded as position strings).
  2. **Fitness evaluation**: compute the fitness (higher is better) of each individual.
  3. **Selection**: choose parents with probability proportional to fitness (fitness-proportionate selection).
  4. **Crossover**: combine two parents at a random **crossover point** to produce offspring.
  5. **Mutation**: with small probability, randomly alter a bit/position of an offspring.
  6. Replace the population and repeat until fitness converges or a solution is found.
- GA combines elements of hill-climbing (local improvement via mutation) and beam search (parallel exploration via population); crossover is the main mechanism for combining good partial solutions. GA has been applied to the 8-Queens problem, circuit layout, and other combinatorial optimization tasks.

```
[DIAGRAM: Genetic Algorithm Loop
 Initial Population --> Fitness Evaluation --> Selection (by fitness)
 Selection --> Crossover (combine pairs) --> Mutation (small random change)
 New Population --> repeat until solution/convergence
]
```

### Logical Agents

- A **knowledge-based agent** maintains a **knowledge base (KB)**: a set of sentences in a formal language representing what the agent "knows". It can be updated with new percepts (**TELL**) and can ask questions (**ASK**) about what should be done next.
- Core operations: `TELL(KB, sentence)` — add to KB; `ASK(KB, query)` — return answer; `MAKE-PERCEPT-SENTENCE` and `MAKE-ACTION-SENTENCE` convert percepts to sentences and sentences to actions.
- **Inference**: deriving new sentences from old ones; an inference algorithm that derives only entailed sentences is **sound**; one that derives all entailed sentences is **complete**.
- **Entailment**: KB ⊨ α means sentence α is entailed by KB — in every model in which KB is true, α is also true (semantic definition). **Inference** is the syntactic process of deriving α from KB.

### The Wumpus World

- A grid cave (4×4 classic) containing: the **agent**, pits (with a breeze), the **Wumpus** (a monster that kills the agent if adjacent; emits a stench), and **gold** (glitter). Actions: Move Forward, Turn Left/Right, Grab, Shoot (single arrow, kills Wumpus), Climb (exit).
- Percepts: **Stench** (Wumpus adjacent), **Breeze** (pit adjacent), **Glitter** (gold in current square), **Bump** (wall hit), **Scream** (Wumpus killed).
- The agent's goal: find the gold, grab it, and climb out of the cave without falling into a pit or being killed by the Wumpus. The environment is **partially observable, deterministic, sequential, static, discrete, and single-agent** — a classic testbed for knowledge-based agents.

```
[DIAGRAM: Wumpus World (4x4 grid example)
 [Start, Safe] [Breeze]     [Pit?]      [Pit?]
 [Safe]       [Stench]     [Wumpus?]    [Breeze]
 [Safe]       [Breeze]     [Pit?]       [Gold? Glitter]
 (Agent reasons: Breeze adjacent squares => pit; Stench => Wumpus)
]
```

- **Knowledge base rules for Wumpus World** (examples in propositional logic):
  - A square is safe if no pit and no Wumpus are adjacent: no breeze at square s ⇒ no pit adjacent to s; no stench at s ⇒ no Wumpus adjacent.
  - `¬Breeze(1,2) ⇒ ¬Pit(1,1) ∧ ¬Pit(2,2) ∧ ¬Pit(1,3)` (breeze absence rules out adjacent pits).
  - The Wumpus's location is fixed: `Stench(2,1) ⇒ Wumpus(1,1) ∨ Wumpus(2,2) ∨ Wumpus(3,1)`; the agent deduces safe moves by eliminating possible locations.

### Propositional Logic: Syntax and Semantics

- **Syntax**: sentences built from **atomic sentences** (single proposition symbols like `P11`, `W12`) and **complex sentences** using logical connectives:
  - `¬` (negation, NOT), `∧` (conjunction, AND), `∨` (disjunction, OR), `⇒` (implication), `⇔` (biconditional, if and only if).
- **Semantics**: each proposition symbol denotes a proposition; a **model** is a truth assignment to the symbols. The truth of a complex sentence is defined by **truth tables**:

| P | Q | ¬P | P ∧ Q | P ∨ Q | P ⇒ Q | P ⇔ Q |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| T | T | F | T | T | T | T |
| T | F | F | F | T | F | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

- Important fact: `P ⇒ Q` is **equivalent to `¬P ∨ Q`** and is false only when P is true and Q is false.
- **Equivalence**: two sentences are logically equivalent if they have the same truth value in every model (e.g., De Morgan's laws: `¬(A ∧ B) ≡ ¬A ∨ ¬B`, `¬(A ∨ B) ≡ ¬A ∧ ¬B`).
- **Validity**: a sentence is valid (a **tautology**) if it is true in **all** models (e.g., `P ∨ ¬P`). Validity is connected to inference: α ⊨ β iff (α ⇒ β) is valid (**deduction theorem**).
- **Satisfiability**: a sentence is satisfiable if it is true in **some** model (has at least one satisfying truth assignment). Unsatisfiable = false in all models (a contradiction). Satisfiability is connected to entailment: α ⊨ β iff (α ∧ ¬β) is unsatisfiable (**proof by contradiction**).
- **Model checking**: an inference method that enumerates all models (truth assignments) and checks that α is true in every model of KB. For n symbols there are 2^n models — exponential, but complete and sound for propositional logic.
- **Inference rules**: Modus Ponens (α ⇒ β, α ⊢ β), And-Elimination (α ∧ β ⊢ α), And-Introduction (α, β ⊢ α ∧ β), Or-Introduction (α ⊢ α ∨ β), Resolution, etc. An inference algorithm that uses only sound rules is sound by construction.

### Forward and Backward Chaining in Propositional Logic

- Both methods require the KB to be a set of **Horn clauses**: clauses with at most one positive literal, i.e., implications of the form `(P1 ∧ P2 ∧ … ∧ Pn) ⇒ Q` (or facts Q). Definite clauses are the subset of Horn clauses with exactly one positive literal.
- **Forward chaining (data-driven)**: starts from known facts and repeatedly applies Modus Ponens to derive new facts until the query is proven or no more facts can be derived. It runs in **O(n) time for Horn KBs** (propositional case). Each iteration: find clauses whose premises are all known; add their conclusion as a known fact. Forward chaining is **sound and complete** for Horn clauses.
- **Backward chaining (goal-driven)**: starts from the query (goal) and works backwards — to prove goal Q, find a clause `(P1 ∧ … ∧ Pn) ⇒ Q` and recursively prove each premise Pi. Uses a goal stack; supports efficient, focused reasoning (only facts relevant to the query are examined). Also sound and complete for Horn clauses, and O(n) with caching.

```
[DIAGRAM: Forward vs Backward Chaining
 Forward: Facts --> (Modus Ponens repeatedly) --> Derived facts --> Query?
 Backward: Query --> subgoals (premises of matching clause) --> Facts
 (Forward = data-driven, bottom-up; Backward = goal-driven, top-down)
]
```

| Criterion | Forward Chaining | Backward Chaining |
| :--- | :--- | :--- |
| Direction | Data-driven (from facts to goal) | Goal-driven (from goal to facts) |
| Starting point | Known facts in KB | The query/goal |
| Processing | Deduces all possible new facts | Proves only facts needed for the goal |
| Best for | Planning, monitoring, deriving consequences | Diagnostic, question-answering systems |
| Completeness | Complete for Horn clauses | Complete for Horn clauses |

### Key Exam Facts

- Admissible heuristic definition and the A* optimality proof (tree search) are repeated exam questions.
- Greedy best-first ignores g(n); A* = g(n) + h(n); UCS = g(n) only; BFS = f(n) = depth.
- Hill-climbing problems: local maxima, plateaus, ridges — with remedies (random restart, sideways moves, annealing).
- Wumpus percepts (Stench, Breeze, Glitter, Bump, Scream) and simple KB rules in propositional logic are a standard 10-marker.
- Valid = true in all models; satisfiable = true in some model; entailment vs inference distinction.
