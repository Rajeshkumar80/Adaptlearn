# BCS515B — Artificial Intelligence (Professional Elective - I)

## Module 4: First-Order Logic (FOL) & Inference

### Why First-Order Logic?

- **Propositional logic** has severe **expressiveness limitations**: it cannot talk about *individual objects*, *relations* between objects, or *quantities* (e.g., "every student who takes AI passes" would require listing each student separately). It works only with fixed, named propositions.
- **First-Order Logic (FOL, predicate logic)** extends propositional logic with:
  - **Objects** (constants, variables): things in the world.
  - **Relations** (predicates): properties of and relations between objects.
  - **Functions**: mapping objects to objects (e.g., LeftLeg(John)).
  - **Quantifiers**: universal (∀) and existential (∃).
  - Logical connectives (¬, ∧, ∨, ⇒, ⇔), as in propositional logic.
- This makes FOL expressive enough to represent **facts, knowledge, and queries** in a compact, reusable way (declarative knowledge).

### Syntax of FOL

- **Terms** denote objects; a term is:
  - A **constant symbol** (e.g., John, WumpusWorld, Arad) — a specific object.
  - A **variable symbol** (e.g., x, y, z) — ranges over objects.
  - A **function symbol** applied to terms (e.g., LeftLeg(John), Father(x)).
- **Atomic sentences (atoms)**: a **predicate symbol** applied to terms, e.g., `Brother(Richard, John)`, `Likes(John, IceCream)`, `Married(Father(Richard), Mother(John))`. An atom is true iff the relation holds among the denoted objects.
- **Complex sentences**: atoms combined with connectives — `¬S`, `S1 ∧ S2`, `S1 ∨ S2`, `S1 ⇒ S2`, `S1 ⇔ S2`, and **quantified sentences** `∀x S`, `∃x S`.
- **Precedence** (highest to lowest): ¬, ∧, ∨, ⇒, ⇔; quantifiers bind as tightly as possible to the right (e.g., `∀x P(x) ∨ Q(x)` is `(∀x P(x)) ∨ Q(x)`, not `∀x (P(x) ∨ Q(x))`).
- **Constants vs predicates vs functions**: constants name objects (arity 0), predicates denote relations (arity ≥ 1, always return truth values), functions denote objects (arity ≥ 1, return objects).

### Semantics of FOL

- A **model** of FOL specifies:
  - A non-empty **domain** (set of objects).
  - An interpretation: each constant → a specific object, each predicate → a relation over the domain, each function → a function over the domain.
- **Truth of atomic sentences**: atom `Pred(t1, …, tn)` is true iff the objects denoted by t1…tn stand in the relation denoted by Pred.
- Connectives have the same truth-table semantics as propositional logic.
- **Satisfaction**: a sentence is true in a model iff the model satisfies it; entailment and validity extend naturally (α ⊨ β iff α is true in every model of β's language... precisely: in every model where α holds, β holds too).

### Quantifiers

- **Universal quantifier ∀** ("for all"): `∀x P(x)` is true iff P(x) is true for **every** object x in the domain. English translations: "All", "Every", "Everyone", "Each".
  - Common pattern: **∀x (Premise ⇒ Conclusion)** — e.g., "Every student who takes AI passes": `∀x (Student(x) ∧ Takes(x, AI) ⇒ Passes(x))`.
  - A common mistake: `∀x (Student(x) ∧ Takes(x, AI) ∧ Passes(x))` is wrong — it says everyone in the domain is a student who takes AI and passes.
- **Existential quantifier ∃** ("there exists"): `∃x P(x)` is true iff P(x) is true for **at least one** object x in the domain. English translations: "Some", "There exists", "At least one".
  - Common pattern: **∃x (Premise ∧ Conclusion)** — e.g., "Some dogs are friendly": `∃x (Dog(x) ∧ Friendly(x))`. Using ⇒ with ∃ would be too weak (true if any object is not a dog).
- **Nesting and scope**: the **scope** of a quantifier is the sentence it applies to. A variable that is not in the scope of any quantifier is **free**; a FOL sentence must have all variables **bound** (no free variables).
  - `∀x ∀y P(x, y)` — for all x and y (same as `∀y ∀x P(x, y)`).
  - `∀x ∃y P(x, y)` — every x has some y such that P holds (e.g., "everyone has a mother").
  - `∃y ∀x P(x, y)` — there is a single y that works for all x (e.g., "someone is everyone's mother") — a much stronger, usually different statement.
  - **Order of quantifiers matters**: `∀x ∃y` ≠ `∃y ∀x` in general.
  - `∃x P(x) ∧ ∃x Q(x)` — both may be satisfied by different objects; `∃x (P(x) ∧ Q(x))` requires the same object to satisfy both.
  - `¬∀x P(x) ≡ ∃x ¬P(x)` and `¬∃x P(x) ≡ ∀x ¬P(x)` — quantifier negation rules (De Morgan's laws for quantifiers). Therefore `¬∀x ¬P(x) ≡ ∃x P(x)`.

| English phrase | FOL pattern | FOL translation |
| :--- | :--- | :--- |
| All A are B | ∀x (A(x) ⇒ B(x)) | ∀x (Student(x) ⇒ Hardworking(x)) |
| Some A are B | ∃x (A(x) ∧ B(x)) | ∃x (Dog(x) ∧ Friendly(x)) |
| No A are B | ∀x (A(x) ⇒ ¬B(x)) | ∀x (Person(x) ⇒ ¬Likes(x, CorruptPolitician)) |
| Some A are not B | ∃x (A(x) ∧ ¬B(x)) | ∃x (Bird(x) ∧ ¬Flies(x)) |

### Assertions and Queries in FOL

- **Assertions**: adding facts to the knowledge base — TELL(KB, `King(John) ∧ Greedy(John)`).
- **Queries**: asking whether a sentence is entailed — ASK(KB, `King(John)`), or asking for values: ASK(KB, `∃x Crown(x) ∧ OnHead(x, John)`); answer yes/no, or the bindings of variables (answers to a **query with free variables**).
- **Knowledge engineering process** (build a KB for a domain):
  1. **Identify the task** (what questions will be asked).
  2. **Assemble the relevant knowledge** (from experts, manuals, experience).
  3. **Decide on a vocabulary** of predicates, functions, and constants.
  4. **Encode general knowledge** about the domain (axioms, rules).
  5. **Encode the specific problem instances** (facts).
  6. **Pose queries** and get answers.
  7. **Debug the knowledge base** (fix errors, add missing axioms).
- Example (circuit/electronics domain): predicates `Type(x, type)`, `Connected(a, b)`; axioms like "if two terminals are connected, they have the same signal": `∀t1 t2 (Terminal(t1) ∧ Terminal(t2) ∧ Connected(t1, t2) ⇒ Signal(t1) = Signal(t2))`. This shows the **circuit domain**, a common knowledge-engineering example: a KB of axioms about gates, terminals, connections, and signals lets the agent answer queries about any given circuit diagram.

### Inference in FOL: Propositional vs First-Order

- **Propositional inference** (e.g., model checking, forward/backward chaining) works on ground sentences with no variables.
- **First-order inference** must handle **variables and quantifiers**. Key idea: **instantiate** quantified sentences to ground sentences and then use propositional inference.
- **Universal instantiation (UI)**: from `∀v α` infer `SUBST({v/g}, α)` for any ground term g — replace v by g.
- **Existential instantiation (EI)**: from `∃v α` infer `SUBST({v/k}, α)` where k is a **Skolem constant** (a new constant that does not appear anywhere else in the KB). EI can be applied once per existential sentence to eliminate it.
- **Propositionalization**: repeatedly apply UI and EI to produce a propositional KB; then use propositional inference. This is complete for FOL if the domain is finite — but it is **impractical** because it generates exponentially many ground clauses and is generally **semidecidable** (may run forever if no solution exists, because of infinite domains/Herbrand universe).
- The better approach: **lifted inference** — apply inference rules directly to quantified sentences using **unification**, without grounding.

### Unification

- **Unification**: finding a **substitution** θ that makes two expressions (literals or terms) **identical**: `UNIFY(p, q) = θ` such that `SUBST(θ, p) = SUBST(θ, q)`.
- A **substitution** θ = {x1/t1, x2/t2, …} binds variables to terms; SUBST(θ, sentence) applies θ to the sentence.
- Unification is used in: **Lifting** (making inference rules work with variables), **Resolution**, and **forward/backward chaining**.
- **Standardizing apart**: rename variables so two clauses share no variables before unifying.
- A unifier that imposes the **fewest constraints** is the **most general unifier (MGU)**; the unification algorithm returns the MGU. Example: UNIFY(Knows(John, x), Knows(John, Jane)) = {x/Jane}; UNIFY(Knows(John, x), Knows(y, Mother(y))) = {y/John, x/Mother(John)}.
- Unification **fails** if the two expressions cannot be made identical (e.g., UNIFY(Knows(John, x), Knows(x, Elizabeth)) fails — occurs-check: x appears inside the term it is being bound to, or constants conflict).
- The unification algorithm: process the two expressions side by side; if the top-level symbols match, recurse into arguments; if a variable meets a term, add the binding (checking the **occurs-check**: a variable cannot be unified with a term containing itself).

### Lifting Inference Rules

- **Generalized Modus Ponens (GMP, lifted Modus Ponens)**: for atomic sentences pi, pi' and a clause `(p1 ∧ p2 ∧ … ∧ pn) ⇒ q`, if there is a substitution θ such that `UNIFY(pi', pi) = θ` for all i, then conclude `SUBST(θ, q)`.
  - Example: KB has `King(John), Greedy(John)`, and `∀x King(x) ∧ Greedy(x) ⇒ Evil(x)`. Unify with θ = {x/John}; conclude `Evil(John)`.
  - GMP is **sound**, and it is **complete for definite-clause KBs** (Horn clauses) — it derives every fact entailed by the KB, without enumerating all ground instantiations.
- **Lifting**: taking a propositional inference rule and making it operate on variables through unification. Lifted inference derives the same conclusions as propositionalization but far more efficiently.

### Forward Chaining in FOL

- **First-order forward chaining**: repeatedly apply **Generalized Modus Ponens** to the KB — from facts in the KB and a rule `(p1 ∧ … ∧ pn) ⇒ q`, if all premises can be unified with known facts (with consistent substitution), add the instantiated conclusion as a new fact. Continue until the query is entailed or no new facts can be derived.
- It is **data-driven** (bottom-up): starts from what is known and derives all consequences. Newly derived facts can trigger more rules.
- **Complete** for definite clauses (Horn KBs); terminates for finite domains.
- Implementation efficiency: **incremental** (only new facts trigger new rule applications) and **indexing** of rules by premise predicates.

```
[DIAGRAM: First-Order Forward Chaining
 Facts in KB --> Match premises of rules (via unification) --> Apply GMP
 New derived facts --> join the KB --> trigger more rules --> Query answered?
 (data-driven: derives ALL consequences, not just the query)
]
```

### Backward Chaining in FOL

- **First-order backward chaining**: to prove a **goal** (query), work **backwards**: find a clause whose conclusion unifies with the goal, apply the substitution, and recursively prove each premise as a subgoal. A goal that unifies with a known fact is solved.
- **Goal-driven** (top-down): only rules relevant to the query are explored — more efficient than forward chaining for question-answering.
- **Lifted** version: goals keep their variables; unification happens between goal literals and clause heads. Success yields the substitution that **answers** the query (the bindings of the query's variables).
- **Completeness**: complete for definite clauses (Horn KBs), with the caveat that it can loop forever on **recursive rules** (e.g., `Ancestor(x, y) ⇐ Ancestor(x, z) ∧ Ancestor(z, y)`); Prolog-style systems add loop checking.
- Backward chaining is the basis of **Prolog** and of logic-programming theorem provers; it naturally handles "find the value of x" queries (returns all answers by backtracking).

```
[DIAGRAM: First-Order Backward Chaining
 Query/goal --> Unify goal with clause head --> Prove premises as subgoals
 Subgoal --> unify with fact => solved | unify with rule head => recurse
 (goal-driven: touches only facts/rules needed for the query)
]
```

### Forward vs Backward Chaining in FOL (Comparison)

| Criterion | Forward Chaining | Backward Chaining |
| :--- | :--- | :--- |
| Direction | Data-driven (facts → conclusions) | Goal-driven (query → facts) |
| Starting point | Known facts | The query |
| Inference rule | Generalized Modus Ponens (applied to all facts) | Unification of goal with clause heads + recursion |
| Efficiency | May derive many irrelevant facts | Focused only on rules relevant to the query |
| Best suited for | Planning, monitoring, deriving all consequences | Question answering, diagnosis, logic programming (Prolog) |
| Completeness | Complete for definite clauses | Complete for definite clauses (with loop handling) |
| Termination | Terminates for finite domains | Can loop on recursive rules without loop checks |

### Key Exam Facts

- Translation patterns: "Every X who does Y does Z" → `∀x (X(x) ∧ Y(x) ⇒ Z(x))`; "Some X are Y" → `∃x (X(x) ∧ Y(x))`; "No X is Y" → `∀x (X(x) ⇒ ¬Y(x))`.
- Quantifier order matters: `∀x ∃y` vs `∃y ∀x`; negation rules `¬∀x ≡ ∃¬` and `¬∃x ≡ ∀¬`.
- UI and EI: EI introduces a **Skolem constant** — a new, unique constant (this reappears in Module 5 Skolemization).
- Unification must produce the **MGU**; occurs-check prevents infinite terms.
- Generalized Modus Ponens = the lifted inference rule behind both FOL chaining methods.
- Wumpus/electronic-circuit knowledge engineering steps are a standard short-note question.
