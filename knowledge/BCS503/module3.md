# BCS503 — Module 3: Context-Free Grammars (CFG) & Languages (CFL)

## 1. Context-Free Grammars (CFG)
A Context-Free Grammar is a 4-tuple:
$$G = (V, T, P, S)$$
Where:
1. $V$: Finite set of variables (non-terminal symbols).
2. $T$: Finite set of terminals ($V \cap T = \emptyset$).
3. $P$: Finite set of production rules of the form $A \to \alpha$, where $A \in V$ and $\alpha \in (V \cup T)^*$.
4. $S \in V$: Start symbol.

### Derivations:
- **Leftmost Derivation:** The leftmost variable in the sentential form is replaced at each step ($w_1 \Rightarrow_{lm} w_2$).
- **Rightmost Derivation:** The rightmost variable in the sentential form is replaced at each step ($w_1 \Rightarrow_{rm} w_2$).
- **Language of a Grammar:** $L(G) = \{w \in T^* \mid S \Rightarrow^* w\}$.

---

## 2. Parse Trees (Derivation Trees)
A tree representation of a derivation:
- The root is labeled with the start symbol $S$.
- Each interior node is labeled with a variable $A \in V$.
- If interior node $A$ has children $X_1, X_2, \dots, X_k$, then $A \to X_1 X_2 \dots X_k \in P$.
- Leaves are labeled with terminals or $\epsilon$.
- The yield of the parse tree is the string read left-to-right from leaves.

---

## 3. Ambiguity in Grammars
A grammar $G$ is **ambiguous** if there exists at least one string $w \in L(G)$ that has:
- Two or more distinct parse trees, OR
- Two or more distinct leftmost derivations, OR
- Two or more distinct rightmost derivations.
- **Inherently Ambiguous Language:** A CFL for which *every* grammar that generates it is ambiguous (e.g., $L = \{a^n b^n c^m d^m\} \cup \{a^n b^m c^m d^n\}$).

---

## 4. Simplification of Grammars
Three consecutive reduction phases:
1. **Elimination of Useless Symbols:**
   - Eliminate non-generating symbols (variables that cannot derive strings of terminals).
   - Eliminate unreachable symbols (symbols that cannot be reached from start symbol $S$).
2. **Elimination of $\epsilon$-Productions ($A \to \epsilon$):**
   - Find nullable variables ($A \Rightarrow^* \epsilon$).
   - For each production $A \to \alpha$, substitute all combinations of nullable variables with $\epsilon$.
3. **Elimination of Unit Productions ($A \to B$ where $A, B \in V$):**
   - Find all unit pairs $(A, B)$ such that $A \Rightarrow^* B$.
   - Add productions $A \to \alpha$ for all non-unit productions $B \to \alpha$.

---

## 5. Normal Forms for CFG
### Chomsky Normal Form (CNF):
Every production is of one of two forms:
$$A \to BC \quad \text{or} \quad A \to a$$
Where $A, B, C \in V$ and $a \in T$.
- Parse tree for a string of length $n$ in CNF has exactly $2n - 1$ interior nodes and depth at least $\lceil \log_2 n \rceil + 1$.

### Greibach Normal Form (GNF):
Every production is of the form:
$$A \to a \alpha$$
Where $a \in T$ and $\alpha \in V^*$.

---

## 6. Pumping Lemma for Context-Free Languages
### Statement:
Let $L$ be a Context-Free Language. There exists a constant $p \ge 1$ such that every string $s \in L$ with $|s| \ge p$ can be written as $s = uvxyz$ satisfying:
1. $|vxy| \le p$
2. $|vy| \ge 1$ ($v$ and $y$ are not both $\epsilon$)
3. For all $i \ge 0$, $u v^i x y^i z \in L$
- **Application:** Used to prove that languages such as $L = \{a^n b^n c^n \mid n \ge 0\}$ and $L = \{w w \mid w \in \{0,1\}^*\}$ are NOT context-free.
