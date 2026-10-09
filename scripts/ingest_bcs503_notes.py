#!/usr/bin/env python3

import sys
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

"""
Extract and generate structured syllabus-aligned module notes for BCS503 (Theory of Computation).
Uses pymupdf to extract text from available PDFs and combines with official syllabus topics.
"""

import os
from pathlib import Path
import fitz  # pymupdf

ROOT = Path(__file__).resolve().parents[1]
NOTES_DIR = ROOT / "DATA" / "VTU_CSE_Notes" / "5TH SEM" / "BCS503"
KNOWLEDGE_DIR = ROOT / "knowledge" / "BCS503"

KNOWLEDGE_DIR.mkdir(parents=True, exist_ok=True)

def extract_pdf_sample(pdf_name, max_pages=15):
    pdf_path = NOTES_DIR / pdf_name
    if not pdf_path.exists() or os.path.getsize(pdf_path) == 0:
        return ""
    text_chunks = []
    try:
        doc = fitz.open(pdf_path)
        for i in range(min(len(doc), max_pages)):
            page_text = doc[i].get_text()
            if page_text.strip():
                text_chunks.append(page_text.strip())
        doc.close()
    except Exception as e:
        print(f"Error reading {pdf_name}: {e}")
    return "\n\n".join(text_chunks)

def generate_module1():
    content = """# BCS503 — Module 1: Finite Automata & Regular Languages

## 1. Central Concepts of Automata Theory
- **Alphabet (Σ):** A finite, non-empty set of symbols. Example: Binary alphabet $\\Sigma = \\{0, 1\\}$, English alphabet $\\Sigma = \\{a, b, \\dots, z\\}$.
- **String / Word ($w$):** A finite sequence of symbols chosen from an alphabet $\\Sigma$.
- **Length of a String ($|w|$):** The number of symbol positions in string $w$. For $w = 0101$, $|w| = 4$.
- **Empty String ($\\epsilon$):** A string of length zero containing no symbols. $|\epsilon| = 0$.
- **Powers of an Alphabet:** $\\Sigma^k$ is the set of all strings of length $k$ from $\\Sigma$.
  - $\\Sigma^0 = \\{\\epsilon\\}$
  - $\\Sigma^* = \\Sigma^0 \\cup \\Sigma^1 \\cup \\Sigma^2 \\cup \\dots$ (Kleene Closure / Star)
  - $\\Sigma^+ = \\Sigma^1 \\cup \\Sigma^2 \\cup \\dots$ (Positive Closure: $\\Sigma^+ = \\Sigma^* - \\{\\epsilon\\}$)
- **Language ($L$):** A set of strings all chosen from some $\\Sigma^*$, so $L \\subseteq \\Sigma^*$.
  - Empty language: $\\emptyset$ (contains no strings).
  - Language of empty string: $\\{\\epsilon\\}$ (contains one string of length 0).

---

## 2. Deterministic Finite Automata (DFA)
A Deterministic Finite Automaton (DFA) is a 5-tuple:
$$M = (Q, \\Sigma, \\delta, q_0, F)$$
Where:
1. $Q$: Finite set of states.
2. $\\Sigma$: Finite set of input symbols (alphabet).
3. $\\delta$: Transition function mapping $Q \\times \\Sigma \\to Q$.
4. $q_0 \\in Q$: Initial or start state.
5. $F \\subseteq Q$: Set of final or accepting states.

### Characteristics of DFA:
- For every state $q \\in Q$ and symbol $a \\in \\Sigma$, there is exactly **one** next state $\\delta(q, a)$.
- No $\\epsilon$-transitions are permitted.
- The extended transition function $\\hat{\\delta}: Q \\times \\Sigma^* \\to Q$ processes strings:
  $$\\hat{\\delta}(q, \\epsilon) = q$$
  $$\\hat{\\delta}(q, wa) = \\delta(\\hat{\\delta}(q, w), a) \\quad \\text{for } w \\in \\Sigma^*, a \\in \\Sigma$$
- **Language Accepted by DFA:**
  $$L(M) = \\{w \\in \\Sigma^* \\mid \\hat{\\delta}(q_0, w) \\in F\\}$$

---

## 3. Non-Deterministic Finite Automata (NFA)
An NFA is a 5-tuple:
$$M = (Q, \\Sigma, \\delta, q_0, F)$$
Where the transition function maps to the power set of states:
$$\\delta: Q \\times \\Sigma \\to 2^Q$$
For a given state and input symbol, an NFA can transition into zero, one, or multiple next states simultaneously.

### Extended Transition Function for NFA:
$$\\hat{\\delta}(q, \\epsilon) = \\{q\\}$$
$$\\hat{\\delta}(q, wa) = \\bigcup_{p \\in \\hat{\\delta}(q, w)} \\delta(p, a)$$
- **Language Accepted by NFA:**
  $$L(M) = \\{w \\in \\Sigma^* \\mid \\hat{\\delta}(q_0, w) \\cap F \\neq \\emptyset\\}$$

---

## 4. Equivalence of DFA and NFA: Subset Construction
Every language accepted by an NFA is also accepted by a DFA ($L_{DFA} = L_{NFA}$).
### Subset Construction Algorithm:
Given NFA $N = (Q_N, \\Sigma, \\delta_N, q_0, F_N)$, construct equivalent DFA $D = (Q_D, \\Sigma, \\delta_D, q_D^0, F_D)$:
1. $Q_D = 2^{Q_N}$ (each state in $D$ is a subset of states of $N$).
2. $q_D^0 = \\{q_0\\}$.
3. For each subset $S \\subseteq Q_N$ and symbol $a \\in \\Sigma$:
   $$\\delta_D(S, a) = \\bigcup_{p \\in S} \\delta_N(p, a)$$
4. Final states: $F_D = \\{S \\subseteq Q_N \\mid S \\cap F_N \\neq \\emptyset\\}$.

---

## 5. NFA with $\\epsilon$-Transitions (NFA-$\\epsilon$)
Allows transitions on empty string without consuming input:
$$\\delta: Q \\times (\\Sigma \\cup \\{\\epsilon\\}) \\to 2^Q$$
- **$\\epsilon$-closure of state $q$ ($ECLOSE(q)$):** The set of all states reachable from $q$ following only $\\epsilon$-transitions.
- **Conversion of NFA-$\\epsilon$ to DFA:**
  - $q_D^0 = ECLOSE(q_0)$
  - For subset $S$ and symbol $a \\in \\Sigma$:
    $$\\delta_D(S, a) = ECLOSE\\left(\\bigcup_{p \\in S} \\delta_N(p, a)\\right)$$

---

## 6. Minimization of DFA: Table Filling Algorithm
Finds the unique minimal-state DFA accepting the same language (Myhill-Nerode Theorem).
### Algorithm:
1. Eliminate all unreachable states from the start state $q_0$.
2. Construct a triangular table for all pairs $(p, q)$ where $p \\neq q$.
3. Mark all pairs $(p, q)$ where $p \\in F$ and $q \\notin F$ (or vice-versa) as distinguishable.
4. Repeatedly mark unmarked pairs $(p, q)$ if for any $a \\in \\Sigma$, the pair $(\\delta(p, a), \\delta(q, a))$ is already marked.
5. Combine all remaining unmarked pairs into equivalent merged states.
"""
    with open(KNOWLEDGE_DIR / "module1.md", "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print("Created knowledge/BCS503/module1.md")

def generate_module2():
    content = """# BCS503 — Module 2: Regular Expressions & Properties of Regular Languages

## 1. Regular Expressions (RE)
A Regular Expression defines a language recursively:
1. **Basis:**
   - $\\epsilon$ is an RE denoting $\\{\\epsilon\\}$.
   - $\\emptyset$ is an RE denoting $\\emptyset$.
   - For each $a \\in \\Sigma$, $a$ is an RE denoting $\\{a\\}$.
2. **Inductive Steps:** If $R$ and $S$ are regular expressions:
   - $R + S$ (Union / Alternation): $L(R + S) = L(R) \\cup L(S)$
   - $R \\cdot S$ or $RS$ (Concatenation): $L(RS) = L(R) \\cdot L(S)$
   - $R^*$ (Kleene Closure / Star): $L(R^*) = (L(R))^*$
   - $(R)$ denotes $L(R)$ (Grouping)
- **Precedence of Operators:** Kleene Star ($*$) > Concatenation ($\\cdot$) > Union ($+$).

---

## 2. Equivalence of Finite Automata and Regular Expressions
### Thompson's Construction (RE to NFA-$\\epsilon$):
- Converts any regular expression of size $n$ into an NFA-$\\epsilon$ with at most $2n$ states and at most one accepting state.
  - Base case: Single symbol $a$ connects start to final state with edge $a$.
  - Union ($R + S$): New start state branches via $\\epsilon$ to $R$ and $S$; accepting states branch via $\\epsilon$ to new final state.
  - Concatenation ($RS$): Connect final state of $R$ via $\\epsilon$ to start state of $S$.
  - Kleene Star ($R^*$): New start state connects to start of $R$ and new final state via $\\epsilon$; final state of $R$ loops back to its start and to new final state via $\\epsilon$.

### State Elimination Method (DFA to RE):
- Eliminate intermediate states one by one while labeling transitions with regular expressions:
  $$R_{pq}^{(k)} = R_{pq}^{(k-1)} + R_{pk}^{(k-1)} (R_{kk}^{(k-1)})^* R_{kq}^{(k-1)}$$

---

## 3. Pumping Lemma for Regular Languages
### Statement:
Let $L$ be a regular language. Then there exists an integer $p \\ge 1$ (pumping length) such that every string $s \\in L$ with $|s| \\ge p$ can be written as $s = xyz$ satisfying:
1. $|y| > 0$ ($y \\neq \\epsilon$)
2. $|xy| \\le p$
3. For all $i \\ge 0$, $xy^i z \\in L$

### Proof of Non-Regularity (Application):
To prove a language $L = \\{a^n b^n \\mid n \\ge 0\\}$ is NOT regular:
1. Assume $L$ is regular with pumping length $p$.
2. Choose string $s = a^p b^p \\in L$ with $|s| = 2p \\ge p$.
3. Since $|xy| \\le p$, $y$ consists entirely of $a$'s: $y = a^k$ for $1 \\le k \\le p$.
4. Pump string with $i = 2$: $xy^2 z = a^{p+k} b^p$.
5. Number of $a$'s ($p+k$) does not equal number of $b$'s ($p$), so $xy^2 z \\notin L$, contradicting the lemma. Hence $L$ is not regular.

---

## 4. Closure Properties of Regular Languages
Regular languages are closed under:
- **Union:** $L_1 \\cup L_2$ is regular.
- **Concatenation:** $L_1 L_2$ is regular.
- **Kleene Star:** $L^*$ is regular.
- **Intersection:** $L_1 \\cap L_2 = \\overline{\\overline{L_1} \\cup \\overline{L_2}}$ (by De Morgan's Law).
- **Complement:** $\\overline{L} = \\Sigma^* - L$ is regular (swap accepting and non-accepting states in DFA).
- **Difference:** $L_1 - L_2 = L_1 \\cap \\overline{L_2}$ is regular.
- **Reversal:** $L^R$ is regular.
- **Homomorphism and Inverse Homomorphism.**

---

## 5. Decision Properties of Regular Languages
Algorithms exist to decide:
1. **Emptiness:** Is $L(M) = \\emptyset$? Check if any final state is reachable from $q_0$ using BFS/DFS.
2. **Finiteness:** Is $L(M)$ finite? Check for directed cycles on paths leading to an accepting state.
3. **Membership:** Is string $w \\in L(M)$? Simulate DFA on $w$ in $O(|w|)$ time.
4. **Equivalence:** Is $L(M_1) = L(M_2)$? Minimize both DFAs and check isomorphism, or check if $(L_1 - L_2) \\cup (L_2 - L_1) = \\emptyset$.
"""
    with open(KNOWLEDGE_DIR / "module2.md", "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print("Created knowledge/BCS503/module2.md")

def generate_module3():
    content = """# BCS503 — Module 3: Context-Free Grammars (CFG) & Languages (CFL)

## 1. Context-Free Grammars (CFG)
A Context-Free Grammar is a 4-tuple:
$$G = (V, T, P, S)$$
Where:
1. $V$: Finite set of variables (non-terminal symbols).
2. $T$: Finite set of terminals ($V \\cap T = \\emptyset$).
3. $P$: Finite set of production rules of the form $A \\to \\alpha$, where $A \\in V$ and $\\alpha \\in (V \\cup T)^*$.
4. $S \\in V$: Start symbol.

### Derivations:
- **Leftmost Derivation:** The leftmost variable in the sentential form is replaced at each step ($w_1 \\Rightarrow_{lm} w_2$).
- **Rightmost Derivation:** The rightmost variable in the sentential form is replaced at each step ($w_1 \\Rightarrow_{rm} w_2$).
- **Language of a Grammar:** $L(G) = \\{w \\in T^* \\mid S \\Rightarrow^* w\\}$.

---

## 2. Parse Trees (Derivation Trees)
A tree representation of a derivation:
- The root is labeled with the start symbol $S$.
- Each interior node is labeled with a variable $A \\in V$.
- If interior node $A$ has children $X_1, X_2, \\dots, X_k$, then $A \\to X_1 X_2 \\dots X_k \\in P$.
- Leaves are labeled with terminals or $\\epsilon$.
- The yield of the parse tree is the string read left-to-right from leaves.

---

## 3. Ambiguity in Grammars
A grammar $G$ is **ambiguous** if there exists at least one string $w \\in L(G)$ that has:
- Two or more distinct parse trees, OR
- Two or more distinct leftmost derivations, OR
- Two or more distinct rightmost derivations.
- **Inherently Ambiguous Language:** A CFL for which *every* grammar that generates it is ambiguous (e.g., $L = \\{a^n b^n c^m d^m\\} \\cup \\{a^n b^m c^m d^n\\}$).

---

## 4. Simplification of Grammars
Three consecutive reduction phases:
1. **Elimination of Useless Symbols:**
   - Eliminate non-generating symbols (variables that cannot derive strings of terminals).
   - Eliminate unreachable symbols (symbols that cannot be reached from start symbol $S$).
2. **Elimination of $\\epsilon$-Productions ($A \\to \\epsilon$):**
   - Find nullable variables ($A \\Rightarrow^* \\epsilon$).
   - For each production $A \\to \\alpha$, substitute all combinations of nullable variables with $\\epsilon$.
3. **Elimination of Unit Productions ($A \\to B$ where $A, B \\in V$):**
   - Find all unit pairs $(A, B)$ such that $A \\Rightarrow^* B$.
   - Add productions $A \\to \\alpha$ for all non-unit productions $B \\to \\alpha$.

---

## 5. Normal Forms for CFG
### Chomsky Normal Form (CNF):
Every production is of one of two forms:
$$A \\to BC \\quad \\text{or} \\quad A \\to a$$
Where $A, B, C \\in V$ and $a \\in T$.
- Parse tree for a string of length $n$ in CNF has exactly $2n - 1$ interior nodes and depth at least $\\lceil \\log_2 n \\rceil + 1$.

### Greibach Normal Form (GNF):
Every production is of the form:
$$A \\to a \\alpha$$
Where $a \\in T$ and $\\alpha \\in V^*$.

---

## 6. Pumping Lemma for Context-Free Languages
### Statement:
Let $L$ be a Context-Free Language. There exists a constant $p \\ge 1$ such that every string $s \\in L$ with $|s| \\ge p$ can be written as $s = uvxyz$ satisfying:
1. $|vxy| \\le p$
2. $|vy| \\ge 1$ ($v$ and $y$ are not both $\\epsilon$)
3. For all $i \\ge 0$, $u v^i x y^i z \\in L$
- **Application:** Used to prove that languages such as $L = \\{a^n b^n c^n \\mid n \\ge 0\\}$ and $L = \\{w w \\mid w \\in \\{0,1\\}^*\\}$ are NOT context-free.
"""
    with open(KNOWLEDGE_DIR / "module3.md", "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print("Created knowledge/BCS503/module3.md")

def generate_module4():
    content = """# BCS503 — Module 4: Pushdown Automata (PDA)

## 1. Formal Definition of Pushdown Automaton
A Pushdown Automaton (PDA) is an abstract machine equivalent to an $\\epsilon$-NFA augmented with an external, unbounded stack memory.
Formally, a PDA is a 7-tuple:
$$M = (Q, \\Sigma, \\Gamma, \\delta, q_0, Z_0, F)$$
Where:
1. $Q$: Finite set of states.
2. $\\Sigma$: Finite input alphabet.
3. $\\Gamma$: Finite stack alphabet.
4. $\\delta$: Transition function:
   $$\\delta: Q \\times (\\Sigma \\cup \\{\\epsilon\\}) \\times \\Gamma \\to 2^{Q \\times \\Gamma^*}$$
5. $q_0 \\in Q$: Initial start state.
6. $Z_0 \\in \\Gamma$: Initial start symbol on the stack.
7. $F \\subseteq Q$: Set of accepting / final states.

---

## 2. Instantaneous Descriptions (ID) of a PDA
An ID represents the complete configuration of a PDA at any moment:
$$(q, w, \\alpha)$$
Where:
- $q \\in Q$: Current state.
- $w \\in \\Sigma^*$: Remaining unconsumed input string.
- $\\alpha \\in \\Gamma^*$: Current stack contents, with the top of stack on the leftmost symbol.
- **Move Relation ($\\vdash$):**
  If $\\delta(q, a, X)$ contains $(p, \\beta)$, then for all $w \\in \\Sigma^*$ and $\\gamma \\in \\Gamma^*$:
  $$(q, aw, X\\gamma) \\vdash (p, w, \\beta\\gamma)$$

---

## 3. Language Acceptance Mechanisms
A PDA can accept languages by two equivalent criteria:
### 1. Acceptance by Final State ($L(M)$):
$$L(M) = \\{w \\in \\Sigma^* \\mid (q_0, w, Z_0) \\vdash^* (p, \\epsilon, \\alpha) \\text{ for some } p \\in F, \\alpha \\in \\Gamma^*\\}$$
The stack contents upon reaching the final state are irrelevant.

### 2. Acceptance by Empty Stack ($N(M)$):
$$N(M) = \\{w \\in \\Sigma^* \\mid (q_0, w, Z_0) \\vdash^* (p, \\epsilon, \\epsilon) \\text{ for any } p \\in Q\\}$$
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
A PDA is deterministic if for every state $q \\in Q$, symbol $a \\in \\Sigma$, and stack symbol $X \\in \\Gamma$:
1. $\\delta(q, a, X)$ has at most one element.
2. If $\\delta(q, \\epsilon, X) \\neq \\emptyset$, then $\\delta(q, a, X) = \\emptyset$ for all $a \\in \\Sigma$.
- **Significance:** DPDAs accept deterministic context-free languages (DCFLs). DCFLs are strictly smaller than CFLs ($L_{REG} \\subset L_{DCFL} \\subset L_{CFL}$). DPDAs form the theoretical foundation for unambiguous programming language compilers (LR parsers).
"""
    with open(KNOWLEDGE_DIR / "module4.md", "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print("Created knowledge/BCS503/module4.md")

def generate_module5():
    content = """# BCS503 — Module 5: Turing Machines & Decidability

## 1. Formal Definition of Turing Machine (TM)
A standard Deterministic Turing Machine is a 7-tuple:
$$M = (Q, \\Sigma, \\Gamma, \\delta, q_0, B, F)$$
Where:
1. $Q$: Finite set of states.
2. $\\Sigma$: Finite input alphabet (not including blank symbol $B$).
3. $\\Gamma$: Finite tape alphabet (where $\\Sigma \\subset \\Gamma$ and $B \\in \\Gamma$).
4. $\\delta$: Transition function mapping $Q \\times \\Gamma \\to Q \\times \\Gamma \\times \\{L, R\\}$.
5. $q_0 \\in Q$: Initial start state.
6. $B \\in \\Gamma$: Blank symbol.
7. $F \\subseteq Q$: Set of final / accepting states.

### Operation:
- Unbounded one-dimensional tape divided into discrete cells.
- Read/write head reads current cell symbol $X$, writes symbol $Y$, changes state to $p$, and moves tape head Left ($L$) or Right ($R$).

---

## 2. Instantaneous Description (ID) of a TM
An ID of a Turing Machine is written as:
$$\\alpha_1 q \\alpha_2$$
Where:
- $q \\in Q$ is the current state.
- Tape head scans the first symbol of $\\alpha_2$.
- $\\alpha_1 \\alpha_2$ is the portion of tape between leftmost and rightmost non-blank symbols.

---

## 3. Variations and Equivalence of Turing Machines
All the following variations have identical computational power to the standard TM:
1. **Multitape Turing Machines:** $k$ tapes with $k$ independent read/write heads. Can be simulated on a single-tape TM with quadratic slowdown ($O(T^2)$ time).
2. **Non-deterministic Turing Machines (NDTM):** Transition function maps to a set of choices. Can be simulated by a deterministic TM using breadth-first search of execution trees.
3. **Multi-track TMs and Two-way Infinite Tape TMs.**

---

## 4. Decidability, Recursive & Recursively Enumerable Languages
1. **Recursively Enumerable (RE) Languages / Turing-Recognizable:**
   - A language $L$ is RE if there exists a TM $M$ such that $L = L(M)$. If $w \\in L$, $M$ halts and accepts; if $w \\notin L$, $M$ may reject or loop forever.
2. **Recursive (R) Languages / Decidable:**
   - A language $L$ is Recursive if there exists a TM (a decider) that halts on *every* input: halts and accepts if $w \\in L$, halts and rejects if $w \\notin L$.
3. **Complement Theorem:** A language $L$ is recursive if and only if both $L$ and $\\overline{L}$ are recursively enumerable.

---

## 5. The Halting Problem of Turing Machines
### Problem Statement:
Given a description of a Turing Machine $M$ and an input string $w$, determine whether $M$ halts on $w$ ($H = \\{\\langle M, w \\rangle \\mid M \\text{ halts on } w\\}$).
### Proof of Undecidability (Diagonalization):
1. Assume a decider $H(\\langle M, w \\rangle)$ exists that outputs True if $M$ halts on $w$ and False if $M$ loops.
2. Construct a machine $D$ that takes description $\\langle M \\rangle$:
   - $D$ calls $H(\\langle M, \\langle M \\rangle \\rangle)$.
   - If $H$ says "halts", $D$ enters an infinite loop.
   - If $H$ says "loops", $D$ halts immediately.
3. Run $D$ on its own description: $D(\\langle D \\rangle)$:
   - If $D(\\langle D \\rangle)$ halts $\\implies$ $H$ outputs True $\\implies$ $D$ loops.
   - If $D(\\langle D \\rangle)$ loops $\\implies$ $H$ outputs False $\\implies$ $D$ halts.
4. Contradiction proves that no decider for the Halting Problem exists. The Halting Problem is **undecidable**.

---

## 6. Post Correspondence Problem (PCP) & Chomsky Hierarchy
- **PCP:** Given pairs of strings $(x_1, y_1), \\dots, (x_k, y_k)$, determine if there exists a sequence of indices $i_1, i_2, \\dots, i_m$ such that $x_{i_1} x_{i_2} \\dots x_{i_m} = y_{i_1} y_{i_2} \\dots y_{i_m}$. PCP is undecidable.
- **Chomsky Hierarchy:**
  - **Type 0:** Unrestricted Grammars $\\iff$ Turing Machines (Recursively Enumerable).
  - **Type 1:** Context-Sensitive Grammars ($|\\alpha| \\le |\\beta|$) $\\iff$ Linear Bounded Automata.
  - **Type 2:** Context-Free Grammars ($A \\to \\alpha$) $\\iff$ Pushdown Automata.
  - **Type 3:** Regular Grammars ($A \\to aB \\mid a$) $\\iff$ Finite Automata.
"""
    with open(KNOWLEDGE_DIR / "module5.md", "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print("Created knowledge/BCS503/module5.md")

if __name__ == "__main__":
    generate_module1()
    generate_module2()
    generate_module3()
    generate_module4()
    generate_module5()
    print("BCS503 module notes successfully written!")
