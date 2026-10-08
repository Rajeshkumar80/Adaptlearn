<!-- PROVENANCE: subject_code=BCS503 | subject_name=Theory of Computation | semester=5 | source_type=TEXTBOOK_DIGEST | source_file=textbook_notes.md | extraction_method=STRUCTURED_COMPREHENSIVE | confidence=0.95 -->

# BCS503 — Textbook Notes

**Subject:** BCS503 (Theory of Computation)
**Content type:** textbook_notes
**Primary Reference:** Peter Linz — An Introduction to Formal Languages and Automata & John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman — Introduction to Automata Theory, Languages, and Computation

---

# BCS503 — Textbook Notes (Module-wise)
**Subject:** Theory of Computation
**Prescribed Textbooks:** Peter Linz (Jones & Bartlett) / Hopcroft, Motwani & Ullman (Pearson)

---

## Module 1 Textbook: Introduction to Finite Automata and Regular Languages

### 1.1 Deterministic Finite Automata (DFA)
A Deterministic Finite Automaton is formally defined as a 5-tuple:
$$M = (Q, \Sigma, \delta, q_0, F)$$
Where:
- $Q$: Finite set of internal states.
- $\Sigma$: Finite input alphabet.
- $\delta: Q \times \Sigma \to Q$: Transition function.
- $q_0 \in Q$: Initial starting state.
- $F \subseteq Q$: Set of final / accepting states.

A string $w = a_1 a_2 \dots a_n$ is accepted if there exists a sequence of states $r_0, r_1, \dots, r_n$ in $Q$ such that:
1. $r_0 = q_0$
2. $\delta(r_i, a_{i+1}) = r_{i+1}$ for all $0 \le i < n$
3. $r_n \in F$

### 1.2 Non-Deterministic Finite Automata (NFA)
In an NFA, the transition function maps to the power set of states:
$$\delta: Q \times (\Sigma \cup \{\varepsilon\}) \to 2^Q$$
Subset Construction Algorithm (Powerset Construction) converts an NFA with $n$ states to an equivalent DFA with at most $2^n$ states, proving $L(\text{DFA}) = L(\text{NFA})$.

---

## Module 2 Textbook: Regular Expressions and Properties of Regular Languages

### 2.1 Regular Expressions (RE)
Regular expressions are recursively defined over alphabet $\Sigma$:
- Base cases: $\emptyset$, $\varepsilon$, and $a \in \Sigma$ are regular expressions.
- Inductive step: If $R_1$ and $R_2$ are regular expressions, then $(R_1 + R_2)$ (union), $(R_1 R_2)$ (concatenation), and $R_1^*$ (Kleene closure) are regular expressions.

### 2.2 Pumping Lemma for Regular Languages
Let $L$ be a regular language. Then there exists a pumping length $p \ge 1$ such that any string $s \in L$ with $|s| \ge p$ can be divided into three parts $s = xyz$ satisfying:
1. $|y| > 0$
2. $|xy| \le p$
3. For all $i \ge 0$, $x y^i z \in L$

Application: Proving non-regularity of languages such as $L = \{a^n b^n \mid n \ge 0\}$ and $L = \{w w^R \mid w \in \{a,b\}^*\}$.

---

## Module 3 Textbook: Context-Free Grammars (CFG) and Pushdown Automata (PDA)

### 3.1 Context-Free Grammar Definition
A CFG is a 4-tuple $G = (V, \Sigma, R, S)$ where:
- $V$: Finite set of non-terminal variables.
- $\Sigma$: Finite set of terminal symbols disjoint from $V$.
- $R$: Finite set of production rules of the form $A \to \alpha$, where $A \in V$ and $\alpha \in (V \cup \Sigma)^*$.
- $S \in V$: Start variable.

### 3.2 Pushdown Automata (PDA)
A Pushdown Automaton extends finite automata with a Last-In First-Out (LIFO) stack:
$$M = (Q, \Sigma, \Gamma, \delta, q_0, z_0, F)$$
Where $\Gamma$ is the stack alphabet and $z_0$ is the initial stack symbol. The transition function is:
$$\delta: Q \times (\Sigma \cup \{\varepsilon\}) \times \Gamma \to \mathcal{P}(Q \times \Gamma^*)$$
Acceptance modes: Acceptance by final state ($L(M)$) and acceptance by empty stack ($N(M)$). Both are computationally equivalent.

---

## Module 4 Textbook: Normal Forms and Properties of Context-Free Languages

### 4.1 Chomsky Normal Form (CNF)
A context-free grammar is in CNF if every production rule has the form:
- $A \to BC$ (where $B, C \in V \setminus \{S\}$)
- $A \to a$ (where $a \in \Sigma$)
- $S \to \varepsilon$ (if $\varepsilon \in L(G)$)

Conversion steps:
1. Eliminate $\varepsilon$-productions ($A \to \varepsilon$).
2. Eliminate unit productions ($A \to B$).
3. Eliminate useless / unreachable variables.
4. Replace long RHS terminals and variables to binary branching rules.

### 4.2 Pumping Lemma for Context-Free Languages
For any CFL $L$, there exists a constant $p$ such that any $s \in L$ with $|s| \ge p$ can be written as $s = u v x y z$ such that:
1. $|v y| > 0$
2. $|v x y| \le p$
3. For all $i \ge 0$, $u v^i x y^i z \in L$

Used to prove that languages like $\{a^n b^n c^n \mid n \ge 0\}$ are NOT context-free.

---

## Module 5 Textbook: Turing Machines, Decidability, and Complexity

### 5.1 Turing Machine (TM) Model
A standard Turing Machine is a 7-tuple:
$$M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)$$
Where:
- $\Gamma$: Tape alphabet containing blank symbol $B \in \Gamma$, and $\Sigma \subset \Gamma \setminus \{B\}$.
- $\delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$: Transition function specifying state change, tape write, and head movement.

### 5.2 Halting Problem and Decidability
- Halting Problem ($H_{\text{TM}}$): Given a TM $M$ and input $w$, does $M$ halt on $w$? Undecidable by diagonal argument (Alan Turing, 1936).
- Post Correspondence Problem (PCP): Undecidable problem concerning matching string pairs over an alphabet.
- Chomsky Hierarchy:
  1. Type 0: Recursively Enumerable (Turing Machine)
  2. Type 1: Context-Sensitive (Linear Bounded Automaton)
  3. Type 2: Context-Free (Pushdown Automaton)
  4. Type 3: Regular (Finite Automaton)
