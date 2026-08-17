# BCS503 — Theory of Computation

## Module 2: Regular Expressions, Pumping Lemma & DFA Minimization

### Regular Expressions (RE) and Regular Languages

- **Informal definition**: A regular expression is a compact algebraic notation for a set of strings (a language), built using union, concatenation, and Kleene star operators over an alphabet.
- **Formal (inductive) definition**: A regular expression r over Sigma denotes a language L(r):
  - epsilon is an RE with L(epsilon) = {epsilon}
  - empty set is an RE with L(empty set) = {} (empty language)
  - each a in Sigma is an RE with L(a) = {a}
  - If r and s are REs: r + s (union) with L(r + s) = L(r) union L(s); r.s or rs (concatenation) with L(rs) = L(r)L(s) = {xy | x in L(r), y in L(s)}; r* (Kleene star) with L(r*) = (L(r))* = union of L(r)^n for n >= 0.
- **Operator precedence**: Star (highest) > Concatenation > Union (lowest). Parentheses override precedence. Example: ab* + c means a followed by zero or more b, OR c.
- **Algebraic laws for REs**:
  - Union is commutative, associative, idempotent: r + s = s + r; r + (s + t) = (r + s) + t; r + r = r.
  - Concatenation is associative, with epsilon as identity and empty set as annihilator: r epsilon = epsilon r = r; r empty set = empty set r = empty set.
  - Distributive: r(s + t) = rs + rt and (r + s)t = rt + st.
  - Star laws: empty set* = epsilon; epsilon* = epsilon; r** = r*; (r + s)* = (r* s*)*.
- **Useful shorthand**: r+ = rr* (one or more); r? = r + epsilon (zero or one); any string over {0,1}: (0 + 1)*; strings ending in 01: (0 + 1)* 01.

### Equivalence of Regular Expressions and Finite Automata

- **Kleene's Theorem**: A language is regular if and only if it can be described by a regular expression. The equivalence is shown in two directions:
  - RE to epsilon-NFA (Thompson's construction).
  - NFA to RE (state elimination / arden's rule method).

### Thompson's Construction (RE to epsilon-NFA)

- **Purpose**: Builds an epsilon-NFA with exactly one start state and one accepting state (no transitions into start, no transitions out of accept) for any RE.
- **Base cases**:
  - For epsilon: a state with an epsilon arc from start to accepting state.
  - For symbol a: start --a--> accept.
  - For empty set: start and accept states with no arc (accepts nothing).
- **Inductive construction (steps)**:
  - Union r + s: new start state with epsilon arcs to the start of r and the start of s; new accepting state with epsilon arcs from the accepting states of both r and s.
  - Concatenation rs: accepting state of r becomes the start state of s (merge by an epsilon arc), single start at r and single accept at s.
  - Kleene star r*: new start state with epsilon arc to r's start AND directly to the new accepting state; epsilon arc from r's accepting state back to r's start and to the new accepting state.
- **Worked example (2024 PYQ)**: r = (0 + 1)* 01.
  1. Build 0 and 1 automata; union them with epsilon-merged start/accept states to get the (0 + 1) automaton.
  2. Apply star construction around it: new start -> (0+1) start, also start -> accept; (0+1) accept -> (0+1) start and -> accept.
  3. Concatenate: (0+1)* automaton, then the 0 automaton (an arc 0), then the 1 automaton (arc 1). Result: start, loop of 0/1, then 0, then 1, accept.
- **Result property**: The constructed NFA has at most 2 times the number of symbols + 2 states; it accepts exactly L(r).

### Converting NFA to RE (State Elimination Method)

- **Steps**:
  1. Add a new start state with an epsilon arc to the original start; add a new accepting state with epsilon arcs from all original accepting states (now only one start and one accept remain).
  2. For each intermediate state q (not the new start/accept), eliminate it: for every pair of states (p, r) with an arc p -> q labeled A and an arc q -> r labeled B, and a self-loop on q labeled C, replace the direct path by an arc p -> r labeled A C* B (merge with any existing arc label via union).
  3. Repeat until only the new start and new accepting state remain; the label on the single remaining arc is the desired RE. (If no arc, the RE is empty set.)
- **Worked example**: NFA with q0 --a--> q1, q1 --b--> q1, q1 --c--> q2 (q2 accepting). Eliminating q1: path q0 -> q1 (a), loop on q1 (b), q1 -> q2 (c) yields direct arc q0 --a b* c--> q2. RE: a b* c.
- **Arden's rule alternative**: The solution of the equation X = AX + B is X = A*B; solving transition equations state-by-state yields the RE.

### Pumping Lemma for Regular Languages

- **Statement**: Let L be a regular language. Then there exists a constant n (pumping length) such that every string w in L with |w| >= n can be written as w = xyz where:
  - |xy| <= n (the pumpable part is near the start of w)
  - y is not epsilon (|y| >= 1)
  - For all i >= 0, x y^i z is in L. (Pumping y any number of times, including zero, keeps the string in L.)
- **Intuition**: A DFA with n states reading a string of length >= n must visit some state twice; the substring between the two visits (y) can be repeated, and the DFA still ends in the same state.
- **Proof outline**:
  1. Let M be a DFA with n states accepting L.
  2. Take w in L, |w| >= n. The n+1 configurations of M while reading w (before each symbol, plus after) must repeat a state q.
  3. Split w = xyz so that q is reached after x, y takes M from q back to q, and z takes M from q to a final state.
  4. Since M is deterministic, looping on y any number of times still returns to q, so x y^i z is accepted for all i.
- **Standard application pattern (to prove L is NOT regular)** — proof by contradiction:
  1. Assume L is regular; let n be its pumping length.
  2. Pick a specific w in L with |w| >= n that is "hard" (e.g., w = a^n b^n or w = 0^n 1^n).
  3. By pumping lemma, w = xyz with |xy| <= n and |y| >= 1.
  4. Because |xy| <= n and w begins with a^n, y consists only of a's; say y = a^k, k >= 1.
  5. Pump: w' = x y^2 z = a^(n+k) b^n. This string is not of the form a^m b^m (the counts no longer match), so w' is not in L.
  6. Contradiction with the pumping lemma; hence L is not regular.
- **Worked example (2023 PYQ)**: Prove L = {a^n b^n | n >= 0} is not regular. Assume regular; let n be the pumping constant. Choose w = a^n b^n. Split w = xyz with |xy| <= n so y = a^k (k >= 1). Then x y^2 z = a^(n+k) b^n, which has more a's than b's and is not in L — contradiction. Hence L is not regular.
- **Other standard applications**: L = {ww | w in {0,1}*}, L = {0^m 1^n | m > n} (pump within the leading zeros), L = {a^p | p is prime}, L = {0^n 1^n} (same pattern as a^n b^n).
- **Caution**: The lemma gives a NECESSARY condition for regularity, not sufficient. It cannot prove a language regular; it only refutes regularity.

### Closure Properties of Regular Languages

- **Union**: If L1, L2 are regular, L1 union L2 is regular. Proof: combine the DFAs with the cross-product construction, accepting if either component accepts.
- **Intersection**: If L1, L2 are regular, L1 intersect L2 is regular. Proof: cross-product construction with accepting states = pairs (q, p) where both q in F1 and p in F2.
- **Complement**: If L is regular, complement of L (over its alphabet) is regular. Proof: swap final and non-final states of the DFA (the DFA must be complete/total).
- **Difference**: L1 - L2 = L1 intersect (complement of L2), hence regular.
- **Reversal**: If L is regular, L^R = {w^R | w in L} is regular. Proof: reverse all arcs of an NFA for L and swap start/final states (or use RE: reverse the RE recursively, swapping concatenation order).
- **Homomorphism**: A homomorphism h maps each symbol to a string; h(L) = {h(w) | w in L}. If L is regular, h(L) is regular. Proof: replace each symbol label a on NFA arcs by the string h(a) (expand into epsilon-chains or treat each symbol of h(a) as a separate arc with fresh states).
- **Inverse homomorphism**: If L is regular, h^-1(L) = {w | h(w) in L} is regular. Proof: run the DFA for L "symbol by symbol" on the images.
- **Exam tip**: State each property with its one-line proof construction; the product construction for union/intersection and final-state swapping for complement are the most frequently examined.

### DFA Minimization (Table Filling Algorithm / Myhill-Nerode)

- **Goal**: Given a DFA, find the DFA with the fewest states accepting the same language.
- **Myhill-Nerode theorem (statement)**: Two states p and q of a DFA are equivalent if for every string w, delta-hat(p, w) is a final state iff delta-hat(q, w) is a final state. The number of states in the minimum DFA equals the number of equivalence classes of this relation; a language is regular iff this number is finite.
- **Table Filling Algorithm (steps)**:
  1. Eliminate all unreachable states (states not reachable from the start state) — they can never affect the accepted language.
  2. Construct a triangular table with one cell per pair of distinct states (p, q).
  3. Mark (p, q) as distinguishable if one of p, q is final and the other is not.
  4. Repeat: for every unmarked pair (p, q), for every symbol a, if (delta(p, a), delta(q, a)) is marked, then mark (p, q). Iterate until no new marks appear.
  5. Unmarked pairs are equivalent states; merge each group of equivalent states into one state.
  6. Reconstruct the transitions: delta of a merged group = group containing delta of any member. Start state = group of original start. Final groups = groups containing at least one final state.
- **Worked example**: DFA with states A, B, C, D, E over {0, 1}: A (start), E final; transitions A--0-->B, A--1-->C, B--0-->B, B--1-->D, C--0-->B, C--1-->C, D--0-->B, D--1-->E, E--0-->B, E--1-->C.
  - Mark pairs with exactly one final: (A,E), (B,E), (C,E), (D,E).
  - (A, C): on 1 -> (C, C) unmarked; on 0 -> (B, B) unmarked — so A, C equivalent.
  - (B, D): on 1 -> (D, E) marked, so (B, D) is marked.
  - (A, B): on 1 -> (C, D) — check (C, D): on 1 -> (C, E) marked, so (C, D) marked, hence (A, B) marked.
  - Remaining unmarked pairs: only (A, C). Merge A and C. Minimum DFA has 4 states: {A, C}, B, D, E.
- **Why minimization matters**: Gives the unique (up to renaming) minimum-state DFA; used to test whether two DFAs are equivalent (minimize both and compare structures).

### Exam-Focused Summary Points

- Three equivalent views of regular languages: DFA, NFA (epsilon-NFA), regular expression — conversions between all three are exam staples.
- Pumping lemma proofs always follow the same script: assume regular, pick w, force y to be composed of one repeated symbol, pump, contradict.
- Closure property proofs are one-line constructions; memorize the product construction and the complement swap.
- Table filling: mark final/non-final pairs first, then propagate through transitions until no new marks.
