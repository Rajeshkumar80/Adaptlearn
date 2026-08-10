# BCS503 — Theory of Computation

## Module 5: Turing Machines, Decidability & Complexity

### Turing Machines — Formal Definition

- **Informal idea**: A Turing Machine (TM) is the most powerful automaton model: a finite control with a state, a two-way infinite tape divided into cells (each cell holds one symbol), and a read/write head that can move LEFT or RIGHT one cell per move. The TM models an algorithm; the Church-Turing thesis equates "computable" with "Turing computable".
- **Formal definition**: A TM is a 7-tuple M = (Q, Sigma, Gamma, delta, q0, B, F) where:
  - Q = finite set of states
  - Sigma = input alphabet (finite, does not include the blank symbol B)
  - Gamma = tape alphabet (finite), with Sigma subset of Gamma and B in Gamma - Sigma
  - delta = transition function, delta: Q x Gamma -> Q x Gamma x {L, R} (partial function — undefined moves mean the TM halts)
  - q0 = start state, q0 in Q
  - B = blank symbol (the tape is initially blank everywhere except the input)
  - F = set of final (accepting) states, F subset of Q
- **Move interpretation**: delta(q, X) = (p, Y, D) means: in state q, reading symbol X, write Y over X, move the head one cell in direction D (L or R), and enter state p.
- **Instantaneous Description (ID)**: A snapshot X1 X2 ... Xi-1 q Xi ... Xn meaning: the tape contains X1...Xn, the head is on Xi, and the current state is q. The head is placed just before the symbol it reads. A move updates the ID; |- and |-* denote one and zero-or-more moves.
- **Halting and acceptance**: The TM halts when no transition is defined for the current (state, symbol) pair. A string w is ACCEPTED if the TM, starting in (q0, B w B) with head at the leftmost input symbol, eventually enters a final state. A TM accepts a language L if it accepts exactly the strings of L (it may halt without accepting on others, or loop forever — both count as rejection).
- **Languages of a TM**: 
  - **Recursively enumerable (RE)**: L is RE if some TM accepts exactly L (the TM may loop forever on strings not in L). Also called semi-decidable.
  - **Recursive (decidable)**: L is recursive if some TM accepts exactly L AND halts on every input (always, even on rejection). Also called decidable.
  - Every recursive language is RE; there are RE languages that are not recursive (e.g., the language of the halting problem's accepting computations).

[DIAGRAM: TM tape layout and control
 Tape: ... B B | 0 | 1 | 1 | 0 | B B ...  (infinite both ways, B = blank)
                         ^
                         head (reads/writes one cell, moves L or R)
 Finite control: [ state q ] --(read X, write Y, move D)--> [ state p ]
]

### Designing Turing Machines

- **Design recipe (steps)**: (1) identify what each state represents (a phase of computation); (2) use distinct symbols to "mark" already-processed cells (e.g., X to replace 0); (3) return to the leftmost unprocessed symbol via scanning; (4) reject if the input shape is wrong (early rejection states); (5) accept only when the whole string is verified.
- **Worked example (2023 PYQ)**: Design a TM for L = {0^n 1^n | n >= 1}. Idea: repeatedly change the leftmost 0 to X, then the rightmost 1 to Y, moving the head back to the left; accept when all 0s and 1s are consumed and the rest is blanks.
  - States: q0 (start, scanning right for the first 0), q1 (found a 0, scanning right for a 1), q2 (found the rightmost 1, scanning left), q3 (scanning left past X's), qf (accept), qr (reject).
  - Transitions:
    - delta(q0, 0) = (q1, X, R) — mark leftmost 0.
    - delta(q1, 0) = (q1, 0, R); delta(q1, Y) = (q1, Y, R) — scan right through untouched 0s and marked Ys.
    - delta(q1, 1) = (q2, Y, L) — mark the first 1 to the right of the marked 0s (this is the rightmost unmatched 1 since the string is 0^n 1^n).
    - delta(q2, 0) = (q2, 0, L); delta(q2, Y) = (q2, Y, L); delta(q2, X) = (q0, X, R) — scan left to the leftmost unmarked 0.
    - delta(q0, Y) = (q3, Y, R) — no 0s left; scan right to verify only Ys remain.
    - delta(q3, Y) = (q3, Y, R); delta(q3, B) = (qf, B, R) — accept when the rest is blank.
    - Reject transitions: delta(q0, 1) = (qr, 1, R); delta(q1, B) = (qr, B, R) (a 1 was expected but blank found); delta(q3, 0) = (qr, 0, R) (0 left over).
  - Trace for input 0011: (q0, 0011) |- (q1, X011) |- (q1, X011) [reading 0] -> wait, trace properly: (q0, 0011): head on first 0 -> (q1, X011); scan: (q1, X011) reads 0 -> (q1, X011) still? No — delta(q1,0) = (q1, 0, R): now head on second 0: (q1, X 0 11) -> reads 0 -> (q1, X 0 1 1) head on first 1: delta(q1,1) = (q2, Y, L): (q2, X 0 Y 1); scan left: (q2, X0Y1) reads 0 -> (q2, X 0 Y1) head moves left over X: delta(q2, X) = (q0, X, R): (q0, X 0 Y 1) head on 0: (q1, X X Y 1); scan right over Y? delta(q1, Y) = (q1, Y, R): (q1, X X Y 1) head on 1: (q2, X X Y Y); scan left over Y, Y, X: (q0, X X Y Y) head on Y: delta(q0, Y) = (q3, Y, R): (q3, X X Y Y) -> scan Y, Y: (q3, X X Y Y B) reads B: accept. Accepted.
- **TM for palindromes** (design outline): compare and erase the first and last symbol repeatedly: check the leftmost symbol; if it is 0 (1), go to the right end, verify the last unmarked symbol is 0 (1), erase both (replace with B), and return to the left; repeat. Accept when all symbols erased; reject on any mismatch or when the remaining middle conflicts. Handles both even and odd length.
- **TM for arithmetic (2024 PYQ)**: proper subtraction m - n = max(m - n, 0) on unary input 0^m 1 0^n. Design: repeatedly delete one 0 from the left block and one 0 from the right block, moving back and forth; when a block empties first:
  - If the right block empties first (n <= m): erase the 1 separator and the remaining left 0s are the answer.
  - If the left block empties first (m < n): the answer is 0, so erase everything (including the right block).
  - States encode "carrying a deletion from the left" and "carrying a deletion from the right"; the answer is read directly off the tape. Example: input 000 1 00 (m=3, n=2): delete left and right 0 alternately: after two rounds the right block is gone with one 0 left on the left; erase the separator; output 0 (m - n = 1). So output tape has one 0.

### TM Extensions and Their Equivalence

- **Multi-tape TM**: Like a standard TM but with k tapes, each with its own head; a move reads all k heads, writes on all k tapes, and moves each head independently. Simulation theorem: every language accepted by a multi-tape TM is accepted by a single-tape TM. Proof sketch: the single tape stores all k tapes separated by a marker #, with a marker over each head position; the simulation scans the whole tape to read all k symbols (tracking them in the finite control), performs the multi-tape move, and scans back to update; total time is at most quadratic in the multi-tape time.
- **Nondeterministic TM**: delta: Q x Gamma -> 2^(Q x Gamma x {L, R}) allows several choices per move. A string is accepted if some computation path reaches a final state (a tree of computations). Simulation theorem: every language accepted by a nondeterministic TM is accepted by a deterministic TM. Proof sketch: the deterministic machine performs a breadth-first search over the computation tree (queue of IDs), trying all choice sequences; it accepts if any branch reaches a final state. (Note: the deterministic simulation may take exponential time.)
- **Universal Turing Machine (UTM)**: A TM U that takes as input the encoding of any TM M together with a string w, and simulates M on w: U accepts <M, w> iff M accepts w. The UTM has: an input region (description of M and w), a "simulation region" holding M's current ID, and bookkeeping regions; it decodes M's transition table into its own finite control and repeatedly applies it to the simulated ID. The UTM shows that one fixed machine can compute anything any machine computes — the foundation of stored-program computers.
- **Church-Turing Thesis**: The statement that "a language is computable (by any reasonable computational device) iff it is Turing computable". It is NOT a theorem — it cannot be proved mathematically because "reasonable device" is informal — but it is universally accepted; every known computing model (lambda calculus, Post systems, while-programs, cellular automata, random-access machines) computes exactly the Turing-computable functions.

### Undecidability and the Halting Problem

- **Decidable vs undecidable**: A problem is decidable if some TM (algorithm) answers yes/no for every instance and always halts. A problem is undecidable if NO such TM exists. Undecidability is a property of the problem, not of a particular algorithm.
- **Halting Problem**: Given a TM M and an input w, does M halt when run on w? The language is HALT = {<M, w> | M halts on input w}. Theorem: the Halting Problem is undecidable.
- **Proof by contradiction (2023 PYQ)**:
  1. Assume the halting problem is decidable: there exists a TM H such that H(<M, w>) accepts iff M halts on w, and H rejects (halts) iff M does not halt on w. H always halts.
  2. Build a new TM D that uses H as a subroutine: on input <M>, D runs H(<M, M>) (asks whether M halts on its own encoding); if H accepts, D does the opposite — it loops forever (or enters an infinite loop); if H rejects, D halts and accepts.
  3. Now ask: does D halt on input <D>? 
     - If D(<D>) halts, then H(<D, D>) accepts, so by D's construction D loops forever on <D> — contradiction.
     - If D(<D>) does not halt, then H(<D, D>) rejects, so D accepts and halts on <D> — contradiction.
  4. Both cases contradict; the assumption is false; the Halting Problem is undecidable.
- **Consequences**: 
  - "Does TM M accept w?" (the acceptance problem, A_TM) is undecidable (similar diagonalization or reduction from halting).
  - Many other problems are undecidable by reduction: the emptiness problem, equivalence of TMs, the Post Correspondence Problem, and (by Rice's theorem) EVERY non-trivial property of the language of a TM.
- **Reductions**: To prove problem P is undecidable, reduce a known undecidable problem Q to P: show that a decision procedure for P would decide Q. If P were decidable, Q would be decidable — contradiction. (If P is decidable then Q is decidable: "Q reduces to P".)
- **Rice's Theorem**: Every non-trivial property of the recursively enumerable languages (a property true of some but not all RE languages) is undecidable for the TMs defining them. Example: "Does M accept the empty language?", "Does M accept a regular language?" — all undecidable.

[DIAGRAM: Diagonalization in the halting problem proof
 H decides halting for all pairs <M, w>.
 D on input <M>: feed <M, M> to H; invert the answer (halt if H rejects, loop if H accepts).
 Question: D on <D>? 
   If D halts -> H says halts -> D loops. Contradiction.
   If D loops -> H says not-halts -> D halts. Contradiction.
]

### Post Correspondence Problem (PCP)

- **Definition**: Given a finite set of dominoes (pairs of strings) (x1/y1), (x2/y2), ..., (xk/yk) over an alphabet Sigma, does there exist a finite sequence of indices i1 i2 ... im such that the concatenation of the top strings equals the concatenation of the bottom strings: x_i1 x_i2 ... x_im = y_i1 y_i2 ... y_im? The sequence must start with i1 (no cyclic rotation allowed in the basic PCP; index reuse is allowed).
- **Example (2024 PYQ)**: Dominoes: (b/bb), (a/ab), (ba/a). A match: take indices 1, 3, 2: top = b ba a = bbaa; bottom = bb a ab = bbaa. Equal — so this instance has a match.
- **Modified PCP (MPCP)**: Like PCP but the first domino of the sequence is fixed in advance (must be domino 1). MPCP is used as the intermediate step in reductions.
- **Undecidability result**: PCP is undecidable: there is no algorithm that, given a finite set of dominoes, decides whether a match exists. Proof outline: reduce the acceptance problem of TMs to MPCP by encoding the computation history of a TM as dominoes (each move becomes a set of dominoes that copy/match the ID transition), then reduce MPCP to PCP (a padding trick with special markers). Intuition: a match forces the top string to simulate the TM computation and the bottom string to lag one ID behind, so a match exists iff the TM accepts w.
- **Exam point**: Know the definition, one worked matching example, the MPCP variant, and the statement that PCP is undecidable; the full reduction proof is usually summarized at statement level.

### Introduction to Complexity: P and NP

- **Time complexity of a TM**: For a deterministic TM M, the running time T(n) is the maximum number of moves M makes on any input of length n before halting.
- **Class P**: The set of languages decidable by a deterministic TM in polynomial time: there exists a constant c with T(n) = O(n^c). P = tractable/feasible problems: sorting, shortest path, matrix multiplication, regular language membership, CFL membership (CYK is O(n^3)).
- **Class NP**: The set of languages decidable by a nondeterministic TM in polynomial time (every computation branch has length O(n^c)). Equivalently: languages whose YES-instances have a polynomial-time verifiable certificate (witness): w in L iff there exists a certificate c of length polynomial in |w| such that a polynomial-time deterministic verifier accepts (w, c). Examples: Hamiltonian cycle, SAT (satisfiability), subset sum, graph coloring, traveling salesperson decision version.
- **P vs NP relationship**: P subset of NP (a deterministic TM is a nondeterministic TM with one branch; a certificate can be the empty string). Whether P = NP is the central open problem of computer science. It is widely believed P != NP.
- **Polynomial-time reducibility and NP-completeness**: A language L1 is polynomial-time reducible to L2 (L1 <=p L2) if there is a polynomial-time computable function f with w in L1 iff f(w) in L2. A language L is NP-complete if (1) L in NP, and (2) every language in NP reduces to L in polynomial time. If any NP-complete problem is in P, then P = NP.
- **Cook-Levin Theorem**: SAT (Boolean satisfiability) is NP-complete — the first and foundational NP-completeness result. Other classic NP-complete problems: 3-SAT, clique, vertex cover, Hamiltonian path/cycle, subset sum, graph coloring. Note: the decidable/undecidable boundary sits between recursive and RE languages; P and NP both lie strictly inside the recursive (decidable) languages.

### Language Hierarchy Recap

- Regular (subset of) Context-free (subset of) Decidable/Recursive (subset of) Recursively-enumerable (subset of) All languages.
- Every CFL is decidable (CYK algorithm on CNF grammar); every decidable language is RE; RE has undecidable members (halting problem language); the complement of the halting language is not even RE.

### Exam-Focused Summary Points

- TM design answers must include: the 7-tuple or a complete transition table, plus a trace on one sample input; state clearly the accept and reject transitions.
- The halting problem proof is pure diagonalization — memorize the construction of D and the two-case contradiction; it is the single most repeated 10-mark question.
- PCP answers need one concrete matching example; MPCP differs only in fixing the first domino.
- Know the difference between "decidable", "semi-decidable (RE)", and "undecidable", and which famous languages (A_TM, HALT, PCP) fall in which class.
