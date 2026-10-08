<!-- PROVENANCE: subject_code=BCS503 | subject_name=Theory of Computation | semester=5 | module=4 | source_type=MODULE_NOTES | source_file=module4.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS503 — Module 4: Pushdown Automata (PDA)

## 1. Formal Definition of Pushdown Automaton
A Pushdown Automaton (PDA) is an abstract machine equivalent to an $\epsilon$-NFA augmented with an external, unbounded stack memory.
Formally, a PDA is a 7-tuple:
$$M = (Q, \Sigma, \Gamma, \delta, q_0, Z_0, F)$$
Where:
1. $Q$: Finite set of states.
2. $\Sigma$: Finite input alphabet.
3. $\Gamma$: Finite stack alphabet.
4. $\delta$: Transition function:
   $$\delta: Q \times (\Sigma \cup \{\epsilon\}) \times \Gamma \to 2^{Q \times \Gamma^*}$$
5. $q_0 \in Q$: Initial start state.
6. $Z_0 \in \Gamma$: Initial start symbol on the stack.
7. $F \subseteq Q$: Set of accepting / final states.

---

## 2. Instantaneous Descriptions (ID) of a PDA
An ID represents the complete configuration of a PDA at any moment:
$$(q, w, \alpha)$$
Where:
- $q \in Q$: Current state.
- $w \in \Sigma^*$: Remaining unconsumed input string.
- $\alpha \in \Gamma^*$: Current stack contents, with the top of stack on the leftmost symbol.
- **Move Relation ($\vdash$):**
  If $\delta(q, a, X)$ contains $(p, \beta)$, then for all $w \in \Sigma^*$ and $\gamma \in \Gamma^*$:
  $$(q, aw, X\gamma) \vdash (p, w, \beta\gamma)$$

---

## 3. Language Acceptance Mechanisms
A PDA can accept languages by two equivalent criteria:
### 1. Acceptance by Final State ($L(M)$):
$$L(M) = \{w \in \Sigma^* \mid (q_0, w, Z_0) \vdash^* (p, \epsilon, \alpha) \text{ for some } p \in F, \alpha \in \Gamma^*\}$$
The stack contents upon reaching the final state are irrelevant.

### 2. Acceptance by Empty Stack ($N(M)$):
$$N(M) = \{w \in \Sigma^* \mid (q_0, w, Z_0) \vdash^* (p, \epsilon, \epsilon) \text{ for any } p \in Q\}$$
The state reached is irrelevant as long as the stack is empty.

### Equivalence of Acceptance Modes:
- For any PDA $M_1$ accepting by final state, there exists an equivalent PDA $M_2$ accepting by empty stack ($N(M_2) = L(M_1)$).
- For any PDA $M_1$ accepting by empty stack, there exists an equivalent PDA $M_2$ accepting by final state ($L(M_2) = N(M_1)$).

---

## 4. Equivalence of PDA and Context-Free Grammars
### Theorem:
A language $L$ is context-free if and only if some PDA $M$ accepts $L$.
1. **CFG to PDA:** Construct a 1-state PDA accepting by empty stack. Top of stack stores variables and terminals. Expand variables according to CFG productions and match terminals with input symbols.
2. **PDA to CFG:** For PDA accepting by empty stack, create variables $[q X p]$ representing the event that state transitions from $q$ to $p$ while popping stack symbol $X$.

---

## 5. Deterministic Pushdown Automata (DPDA)
A PDA is deterministic if for every state $q \in Q$, symbol $a \in \Sigma$, and stack symbol $X \in \Gamma$:
1. $\delta(q, a, X)$ has at most one element.
2. If $\delta(q, \epsilon, X) \neq \emptyset$, then $\delta(q, a, X) = \emptyset$ for all $a \in \Sigma$.
- **Significance:** DPDAs accept deterministic context-free languages (DCFLs). DCFLs are strictly smaller than CFLs ($L_{REG} \subset L_{DCFL} \subset L_{CFL}$). DPDAs form the theoretical foundation for unambiguous programming language compilers (LR parsers).
