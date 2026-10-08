<!-- PROVENANCE: subject_code=BCS503 | subject_name=Theory of Computation | semester=5 | module=5 | source_type=MODULE_NOTES | source_file=module5.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS503 — Module 5: Turing Machines & Decidability

## 1. Formal Definition of Turing Machine (TM)
A standard Deterministic Turing Machine is a 7-tuple:
$$M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)$$
Where:
1. $Q$: Finite set of states.
2. $\Sigma$: Finite input alphabet (not including blank symbol $B$).
3. $\Gamma$: Finite tape alphabet (where $\Sigma \subset \Gamma$ and $B \in \Gamma$).
4. $\delta$: Transition function mapping $Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$.
5. $q_0 \in Q$: Initial start state.
6. $B \in \Gamma$: Blank symbol.
7. $F \subseteq Q$: Set of final / accepting states.

### Operation:
- Unbounded one-dimensional tape divided into discrete cells.
- Read/write head reads current cell symbol $X$, writes symbol $Y$, changes state to $p$, and moves tape head Left ($L$) or Right ($R$).

---

## 2. Instantaneous Description (ID) of a TM
An ID of a Turing Machine is written as:
$$\alpha_1 q \alpha_2$$
Where:
- $q \in Q$ is the current state.
- Tape head scans the first symbol of $\alpha_2$.
- $\alpha_1 \alpha_2$ is the portion of tape between leftmost and rightmost non-blank symbols.

---

## 3. Variations and Equivalence of Turing Machines
All the following variations have identical computational power to the standard TM:
1. **Multitape Turing Machines:** $k$ tapes with $k$ independent read/write heads. Can be simulated on a single-tape TM with quadratic slowdown ($O(T^2)$ time).
2. **Non-deterministic Turing Machines (NDTM):** Transition function maps to a set of choices. Can be simulated by a deterministic TM using breadth-first search of execution trees.
3. **Multi-track TMs and Two-way Infinite Tape TMs.**

---

## 4. Decidability, Recursive & Recursively Enumerable Languages
1. **Recursively Enumerable (RE) Languages / Turing-Recognizable:**
   - A language $L$ is RE if there exists a TM $M$ such that $L = L(M)$. If $w \in L$, $M$ halts and accepts; if $w \notin L$, $M$ may reject or loop forever.
2. **Recursive (R) Languages / Decidable:**
   - A language $L$ is Recursive if there exists a TM (a decider) that halts on *every* input: halts and accepts if $w \in L$, halts and rejects if $w \notin L$.
3. **Complement Theorem:** A language $L$ is recursive if and only if both $L$ and $\overline{L}$ are recursively enumerable.

---

## 5. The Halting Problem of Turing Machines
### Problem Statement:
Given a description of a Turing Machine $M$ and an input string $w$, determine whether $M$ halts on $w$ ($H = \{\langle M, w \rangle \mid M \text{ halts on } w\}$).
### Proof of Undecidability (Diagonalization):
1. Assume a decider $H(\langle M, w \rangle)$ exists that outputs True if $M$ halts on $w$ and False if $M$ loops.
2. Construct a machine $D$ that takes description $\langle M \rangle$:
   - $D$ calls $H(\langle M, \langle M \rangle \rangle)$.
   - If $H$ says "halts", $D$ enters an infinite loop.
   - If $H$ says "loops", $D$ halts immediately.
3. Run $D$ on its own description: $D(\langle D \rangle)$:
   - If $D(\langle D \rangle)$ halts $\implies$ $H$ outputs True $\implies$ $D$ loops.
   - If $D(\langle D \rangle)$ loops $\implies$ $H$ outputs False $\implies$ $D$ halts.
4. Contradiction proves that no decider for the Halting Problem exists. The Halting Problem is **undecidable**.

---

## 6. Post Correspondence Problem (PCP) & Chomsky Hierarchy
- **PCP:** Given pairs of strings $(x_1, y_1), \dots, (x_k, y_k)$, determine if there exists a sequence of indices $i_1, i_2, \dots, i_m$ such that $x_{i_1} x_{i_2} \dots x_{i_m} = y_{i_1} y_{i_2} \dots y_{i_m}$. PCP is undecidable.
- **Chomsky Hierarchy:**
  - **Type 0:** Unrestricted Grammars $\iff$ Turing Machines (Recursively Enumerable).
  - **Type 1:** Context-Sensitive Grammars ($|\alpha| \le |\beta|$) $\iff$ Linear Bounded Automata.
  - **Type 2:** Context-Free Grammars ($A \to \alpha$) $\iff$ Pushdown Automata.
  - **Type 3:** Regular Grammars ($A \to aB \mid a$) $\iff$ Finite Automata.
