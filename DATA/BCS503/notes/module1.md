# BCS503 — Module 1: Finite Automata & Regular Languages

## 1. Central Concepts of Automata Theory
- **Alphabet (Σ):** A finite, non-empty set of symbols. Example: Binary alphabet $\Sigma = \{0, 1\}$, English alphabet $\Sigma = \{a, b, \dots, z\}$.
- **String / Word ($w$):** A finite sequence of symbols chosen from an alphabet $\Sigma$.
- **Length of a String ($|w|$):** The number of symbol positions in string $w$. For $w = 0101$, $|w| = 4$.
- **Empty String ($\epsilon$):** A string of length zero containing no symbols. $|\epsilon| = 0$.
- **Powers of an Alphabet:** $\Sigma^k$ is the set of all strings of length $k$ from $\Sigma$.
  - $\Sigma^0 = \{\epsilon\}$
  - $\Sigma^* = \Sigma^0 \cup \Sigma^1 \cup \Sigma^2 \cup \dots$ (Kleene Closure / Star)
  - $\Sigma^+ = \Sigma^1 \cup \Sigma^2 \cup \dots$ (Positive Closure: $\Sigma^+ = \Sigma^* - \{\epsilon\}$)
- **Language ($L$):** A set of strings all chosen from some $\Sigma^*$, so $L \subseteq \Sigma^*$.
  - Empty language: $\emptyset$ (contains no strings).
  - Language of empty string: $\{\epsilon\}$ (contains one string of length 0).

---

## 2. Deterministic Finite Automata (DFA)
A Deterministic Finite Automaton (DFA) is a 5-tuple:
$$M = (Q, \Sigma, \delta, q_0, F)$$
Where:
1. $Q$: Finite set of states.
2. $\Sigma$: Finite set of input symbols (alphabet).
3. $\delta$: Transition function mapping $Q \times \Sigma \to Q$.
4. $q_0 \in Q$: Initial or start state.
5. $F \subseteq Q$: Set of final or accepting states.

### Characteristics of DFA:
- For every state $q \in Q$ and symbol $a \in \Sigma$, there is exactly **one** next state $\delta(q, a)$.
- No $\epsilon$-transitions are permitted.
- The extended transition function $\hat{\delta}: Q \times \Sigma^* \to Q$ processes strings:
  $$\hat{\delta}(q, \epsilon) = q$$
  $$\hat{\delta}(q, wa) = \delta(\hat{\delta}(q, w), a) \quad \text{for } w \in \Sigma^*, a \in \Sigma$$
- **Language Accepted by DFA:**
  $$L(M) = \{w \in \Sigma^* \mid \hat{\delta}(q_0, w) \in F\}$$

---

## 3. Non-Deterministic Finite Automata (NFA)
An NFA is a 5-tuple:
$$M = (Q, \Sigma, \delta, q_0, F)$$
Where the transition function maps to the power set of states:
$$\delta: Q \times \Sigma \to 2^Q$$
For a given state and input symbol, an NFA can transition into zero, one, or multiple next states simultaneously.

### Extended Transition Function for NFA:
$$\hat{\delta}(q, \epsilon) = \{q\}$$
$$\hat{\delta}(q, wa) = \bigcup_{p \in \hat{\delta}(q, w)} \delta(p, a)$$
- **Language Accepted by NFA:**
  $$L(M) = \{w \in \Sigma^* \mid \hat{\delta}(q_0, w) \cap F \neq \emptyset\}$$

---

## 4. Equivalence of DFA and NFA: Subset Construction
Every language accepted by an NFA is also accepted by a DFA ($L_{DFA} = L_{NFA}$).
### Subset Construction Algorithm:
Given NFA $N = (Q_N, \Sigma, \delta_N, q_0, F_N)$, construct equivalent DFA $D = (Q_D, \Sigma, \delta_D, q_D^0, F_D)$:
1. $Q_D = 2^{Q_N}$ (each state in $D$ is a subset of states of $N$).
2. $q_D^0 = \{q_0\}$.
3. For each subset $S \subseteq Q_N$ and symbol $a \in \Sigma$:
   $$\delta_D(S, a) = \bigcup_{p \in S} \delta_N(p, a)$$
4. Final states: $F_D = \{S \subseteq Q_N \mid S \cap F_N \neq \emptyset\}$.

---

## 5. NFA with $\epsilon$-Transitions (NFA-$\epsilon$)
Allows transitions on empty string without consuming input:
$$\delta: Q \times (\Sigma \cup \{\epsilon\}) \to 2^Q$$
- **$\epsilon$-closure of state $q$ ($ECLOSE(q)$):** The set of all states reachable from $q$ following only $\epsilon$-transitions.
- **Conversion of NFA-$\epsilon$ to DFA:**
  - $q_D^0 = ECLOSE(q_0)$
  - For subset $S$ and symbol $a \in \Sigma$:
    $$\delta_D(S, a) = ECLOSE\left(\bigcup_{p \in S} \delta_N(p, a)\right)$$

---

## 6. Minimization of DFA: Table Filling Algorithm
Finds the unique minimal-state DFA accepting the same language (Myhill-Nerode Theorem).
### Algorithm:
1. Eliminate all unreachable states from the start state $q_0$.
2. Construct a triangular table for all pairs $(p, q)$ where $p \neq q$.
3. Mark all pairs $(p, q)$ where $p \in F$ and $q \notin F$ (or vice-versa) as distinguishable.
4. Repeatedly mark unmarked pairs $(p, q)$ if for any $a \in \Sigma$, the pair $(\delta(p, a), \delta(q, a))$ is already marked.
5. Combine all remaining unmarked pairs into equivalent merged states.
