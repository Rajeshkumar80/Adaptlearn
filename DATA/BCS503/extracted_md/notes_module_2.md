<!-- PROVENANCE: subject_code=BCS503 | subject_name=Theory of Computation | semester=5 | module=2 | source_type=MODULE_NOTES | source_file=module2.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS503 — Module 2: Regular Expressions & Properties of Regular Languages

## 1. Regular Expressions (RE)
A Regular Expression defines a language recursively:
1. **Basis:**
   - $\epsilon$ is an RE denoting $\{\epsilon\}$.
   - $\emptyset$ is an RE denoting $\emptyset$.
   - For each $a \in \Sigma$, $a$ is an RE denoting $\{a\}$.
2. **Inductive Steps:** If $R$ and $S$ are regular expressions:
   - $R + S$ (Union / Alternation): $L(R + S) = L(R) \cup L(S)$
   - $R \cdot S$ or $RS$ (Concatenation): $L(RS) = L(R) \cdot L(S)$
   - $R^*$ (Kleene Closure / Star): $L(R^*) = (L(R))^*$
   - $(R)$ denotes $L(R)$ (Grouping)
- **Precedence of Operators:** Kleene Star ($*$) > Concatenation ($\cdot$) > Union ($+$).

---

## 2. Equivalence of Finite Automata and Regular Expressions
### Thompson's Construction (RE to NFA-$\epsilon$):
- Converts any regular expression of size $n$ into an NFA-$\epsilon$ with at most $2n$ states and at most one accepting state.
  - Base case: Single symbol $a$ connects start to final state with edge $a$.
  - Union ($R + S$): New start state branches via $\epsilon$ to $R$ and $S$; accepting states branch via $\epsilon$ to new final state.
  - Concatenation ($RS$): Connect final state of $R$ via $\epsilon$ to start state of $S$.
  - Kleene Star ($R^*$): New start state connects to start of $R$ and new final state via $\epsilon$; final state of $R$ loops back to its start and to new final state via $\epsilon$.

### State Elimination Method (DFA to RE):
- Eliminate intermediate states one by one while labeling transitions with regular expressions:
  $$R_{pq}^{(k)} = R_{pq}^{(k-1)} + R_{pk}^{(k-1)} (R_{kk}^{(k-1)})^* R_{kq}^{(k-1)}$$

---

## 3. Pumping Lemma for Regular Languages
### Statement:
Let $L$ be a regular language. Then there exists an integer $p \ge 1$ (pumping length) such that every string $s \in L$ with $|s| \ge p$ can be written as $s = xyz$ satisfying:
1. $|y| > 0$ ($y \neq \epsilon$)
2. $|xy| \le p$
3. For all $i \ge 0$, $xy^i z \in L$

### Proof of Non-Regularity (Application):
To prove a language $L = \{a^n b^n \mid n \ge 0\}$ is NOT regular:
1. Assume $L$ is regular with pumping length $p$.
2. Choose string $s = a^p b^p \in L$ with $|s| = 2p \ge p$.
3. Since $|xy| \le p$, $y$ consists entirely of $a$'s: $y = a^k$ for $1 \le k \le p$.
4. Pump string with $i = 2$: $xy^2 z = a^{p+k} b^p$.
5. Number of $a$'s ($p+k$) does not equal number of $b$'s ($p$), so $xy^2 z \notin L$, contradicting the lemma. Hence $L$ is not regular.

---

## 4. Closure Properties of Regular Languages
Regular languages are closed under:
- **Union:** $L_1 \cup L_2$ is regular.
- **Concatenation:** $L_1 L_2$ is regular.
- **Kleene Star:** $L^*$ is regular.
- **Intersection:** $L_1 \cap L_2 = \overline{\overline{L_1} \cup \overline{L_2}}$ (by De Morgan's Law).
- **Complement:** $\overline{L} = \Sigma^* - L$ is regular (swap accepting and non-accepting states in DFA).
- **Difference:** $L_1 - L_2 = L_1 \cap \overline{L_2}$ is regular.
- **Reversal:** $L^R$ is regular.
- **Homomorphism and Inverse Homomorphism.**

---

## 5. Decision Properties of Regular Languages
Algorithms exist to decide:
1. **Emptiness:** Is $L(M) = \emptyset$? Check if any final state is reachable from $q_0$ using BFS/DFS.
2. **Finiteness:** Is $L(M)$ finite? Check for directed cycles on paths leading to an accepting state.
3. **Membership:** Is string $w \in L(M)$? Simulate DFA on $w$ in $O(|w|)$ time.
4. **Equivalence:** Is $L(M_1) = L(M_2)$? Minimize both DFAs and check isomorphism, or check if $(L_1 - L_2) \cup (L_2 - L_1) = \emptyset$.
