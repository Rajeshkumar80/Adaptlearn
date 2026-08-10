# BCS503 — Theory of Computation

## Module 4: Normal Forms for CFG & Properties of CFLs

### Simplification of Context-Free Grammars

- **Motivation**: Before converting a grammar to CNF/GNF, we remove three kinds of "defects": useless symbols, epsilon-productions, and unit productions. Each step preserves L(G).
- **Useless symbols**: A symbol X (variable or terminal) is useful if there exists a derivation S =>* alpha X beta =>* w for some terminal string w; otherwise X is useless. A symbol is useless if it is (a) non-generating or (b) unreachable.
  - **Generating symbol**: X generates a terminal string: X =>* w with w in T*. Algorithm: mark all terminals as generating; repeatedly, if a production A -> alpha has all symbols of alpha already marked generating, mark A; iterate until no change.
  - **Reachable symbol**: X is reachable if S =>* alpha X beta for some alpha, beta. Algorithm: start with S marked reachable; if A is reachable and A -> alpha is a production, mark every symbol of alpha; iterate until no change.
  - **Elimination order (important)**: FIRST eliminate non-generating symbols, THEN eliminate unreachable symbols (removing after the reverse order could remove symbols needed for generating reachable strings).
- **epsilon-productions**: Productions of the form A -> epsilon. Eliminated by identifying "nullable" variables (A is nullable if A =>* epsilon) and adding variants of each production where subsets of nullable variables are omitted.
  - Steps: (1) find all nullable variables; (2) for each production A -> X1 X2 ... Xk, add all productions A -> Y1 Y2 ... Yk where each Yi is either Xi or is omitted when Xi is nullable (at least one symbol omitted; do not add A -> epsilon unless it was originally there); (3) delete all A -> epsilon. Note: if epsilon is in the language, the new start variable rule (see CNF steps) handles it.
- **Unit productions**: Productions of the form A -> B (single variable on the right). Eliminated by computing the unit-pair relation: (A, B) is a unit pair if A =>* B using only unit productions. Steps: (1) find all unit pairs; (2) for every unit pair (A, B) and every non-unit production B -> alpha, add A -> alpha; (3) delete all unit productions.
- **Worked example (2024 PYQ)**: Simplify S -> A a | B; A -> a | B c | epsilon; B -> d | A A.
  - Step 1 (useless symbols): all symbols generate (S via A a or a; A via a or d...; B via d). All are reachable. No useless symbols. (Careful analysis: A generates d via A -> B c -> d c; B generates a via B -> A A -> a a.)
  - Step 2 (epsilon-productions): nullable variables: A is nullable (A -> epsilon); B is NOT (B -> d | A A needs two A's, both must vanish, but A A -> epsilon is possible, so B -> A A -> epsilon IS possible! Recheck: A is nullable, so A A =>* epsilon, so B is nullable too. Nullable set = {A, B}).
  - Productions without epsilon: S -> A a | B (keep), A -> a | B c, B -> d | A A; add variants dropping nullable symbols: S -> a (drop A), B -> A (drop one A), B -> A (drop the other A) [already have], and A -> c (from A -> B c with B nullable), S -> epsilon? No — from S -> B? B is nullable and S -> B is a unit production; variants: S -> epsilon would come from S -> B with B nullable, but that requires B -> epsilon as a non-epsilon source; B's variants don't include epsilon (B -> d | A A | A | A). So epsilon is still generated only if the language had it — check: S => A a => a (yes, 'a' in language); is epsilon in L(G)? S => B => A A => epsilon, yes! So S -> epsilon must be kept.
  - Step 3 (unit productions): unit pairs: (S, B) since S -> B; (A, B)? A -> B c is not unit. So S -> B gives S -> d and S -> A A (from B's non-unit productions). Result: S -> A a | a | d | A A; A -> a | B c | c; B -> d | A A | A; then B -> A is now a unit production — resolve: (B, A) unit pair, so B -> a | B c | c. Final: S -> A a | a | d | A A | A a? No — A a from S -> A a was already there. Final grammar: S -> A a | a | d | A A; A -> a | B c | c; B -> d | A A | a | B c | c. (This is the standard result pattern; details depend on elimination order.)

### Chomsky Normal Form (CNF)

- **Definition**: A CFG is in Chomsky Normal Form if every production is of exactly one of two forms:
  - A -> B C (two variables, i.e., exactly two nonterminals), or
  - A -> a (one terminal)
  - Additionally, S -> epsilon is allowed only when epsilon is in the language (S is then a new start variable that does not appear on any right-hand side).
- **Conversion algorithm (steps)**:
  1. Eliminate useless symbols, epsilon-productions, and unit productions (simplification, above). If epsilon in L(G), introduce a new start variable S0 with S0 -> S | epsilon and drop the old S from right-hand sides (it already is handled by simplification).
  2. Replace every terminal a appearing in a right-hand side of length >= 2 by a new variable Ca, and add the production Ca -> a. (Right-hand sides now contain only variables, except single-terminal productions.)
  3. Break every production A -> X1 X2 ... Xk with k >= 3 into k-1 binary productions using fresh variables: A -> X1 B1, B1 -> X2 B2, ..., B(k-2) -> X(k-1) Xk.
  4. The resulting grammar has only A -> B C, A -> a, and possibly S0 -> epsilon forms; it generates L(G) minus {epsilon}, plus S0 -> epsilon if needed.
- **Worked example (2023 PYQ)**: Convert S -> A B | a B; A -> a | epsilon; B -> b | A to CNF.
  - Step 1 (simplify): nullable: A (A -> epsilon). Variants: S -> A B | a B | B (drop A from A B); B -> b | A; A -> a. New unit production S -> B: add S -> b (from B -> b). Remove unit productions. Result: S -> A B | a B | b; A -> a; B -> b | A. Unit pair (B, A): B -> a (from A -> a). Final simplified: S -> A B | a B | b; A -> a; B -> b | a.
  - Step 2 (terminals in long bodies): S -> a B uses terminal a with length 2: introduce Ca -> a; S -> Ca B. A -> a stays (single terminal). Result: S -> A B | Ca B | b; A -> a; B -> b | a; Ca -> a.
  - Step 3 (length > 2): none — every body has length <= 2. CNF: S -> A B | Ca B | b; Ca -> a; A -> a; B -> b | a.
- **Why CNF matters**: Every derivation of a string w of length n in a CNF grammar has exactly 2n - 1 derivation steps (if w non-empty); parse trees are binary; it underlies the CYK membership algorithm (O(n^3) parsing) and simplifies pumping-lemma arguments.

### Greibach Normal Form (GNF)

- **Definition**: A CFG is in Greibach Normal Form if every production has the form A -> a alpha, where a is a terminal and alpha is a (possibly empty) string of variables. (Right-hand side starts with exactly one terminal.)
- **Overview**: Every CFL not containing epsilon has a GNF grammar. Conversion uses the same simplification first, then a systematic elimination (left-recursion removal via "A -> A alpha | beta becomes A -> beta A' , A' -> alpha A' | epsilon" and substitution) to guarantee each production begins with a terminal.
- **Importance**: In a GNF grammar, each derivation step consumes exactly one input symbol, which makes GNF the natural bridge to PDA construction: a one-state PDA can read the first terminal and push the remaining variables, giving a direct CFG-to-PDA conversion with at most one stack pop per step.

### Pumping Lemma for Context-Free Languages

- **Statement**: Let L be a context-free language. Then there exists a constant n such that every string w in L with |w| >= n can be written as w = u v x y z where:
  - |v x y| <= n (the middle portion is bounded in length)
  - v y is not epsilon (at least one of v, y is non-empty)
  - For all i >= 0, u v^i x y^i z is in L. (v and y are pumped simultaneously.)
- **Intuition**: In the parse tree of a CNF grammar, a long string forces a repeated variable A on one root-to-leaf path; the two occurrences of A delimit the substrings v (below the upper A) and y (below the lower A), and the whole A-subtree can be repeated (pump up) or collapsed (pump down to zero), giving u v^i x y^i z.
- **Proof outline**:
  1. Take a CNF grammar G for L with k variables; set n = 2^k (a string of length >= 2^k forces a path of length >= k+2, so some variable repeats).
  2. Let w in L, |w| >= n; consider its (binary) parse tree; find two occurrences of the same variable A on one path such that the substring v x y between the upper and lower A has length <= n and v y != epsilon.
  3. Replace the upper A subtree by a copy of the lower A subtree to get u v^2 x y^2 z (still derivable), and by a copy of the minimal A subtree to get u x z.
  4. By induction, u v^i x y^i z in L for all i >= 0.
- **Standard application pattern**: assume L is a CFL; pick a hard w (e.g., w = a^n b^n c^n); use |v x y| <= n to force v and y to be confined to at most two of the three blocks; pump to break the balance; contradiction.
- **Worked example (2023 PYQ)**: Prove L = {a^n b^n c^n | n >= 1} is NOT context-free.
  1. Assume L is a CFL; let n be its pumping constant; choose w = a^n b^n c^n.
  2. By the lemma, w = u v x y z with |v x y| <= n and |v y| >= 1.
  3. Since |v x y| <= n, the substring v x y spans at most two consecutive blocks of symbols (it cannot touch all of a^n, b^n, c^n; e.g., it lies within a^n b^n, or within b^n c^n, or within one block).
  4. So at least one of the three blocks has no symbols in v y at all — pumping up or down changes the counts of that block differently from the others (v and y also cannot both be empty).
  5. Hence u v^2 x y^2 z does not have the form a^m b^m c^m, contradicting the lemma. L is not context-free.
- **Other applications**: L = {w w | w in {0,1}*} (duplicate strings) is not a CFL; L = {a^n b^n c^n d^n} not a CFL; L = {a^i b^j c^k | i < j < k} not a CFL.
- **Ogden's Lemma**: A strengthened pumping lemma in which certain positions of w can be marked; if at least n positions are marked, then v x y contains at most n marked positions and v y contains at least one marked position. Used to prove non-context-freeness where the ordinary lemma is too weak (e.g., L = {a^i b^j c^k | i != j, j != k, i != k}).

### Closure Properties of Context-Free Languages

- **Closed under Union**: If L1 = L(G1) and L2 = L(G2), then L1 union L2 = L(G) where G has a new start symbol S -> S1 | S2 (rename variables to be disjoint). Proof: derivations starting with S pick exactly one of the two grammars.
- **Closed under Concatenation**: L(G) with new start S -> S1 S2; a derivation produces a string of L1 followed by a string of L2.
- **Closed under Kleene Star**: New start S -> S1 S | epsilon; derivations repeat the L1 part any number of times.
- **Closed under Reversal**: Reverse every production (A -> X1...Xk becomes A -> Xk...X1). (Yes — reversal IS a closure property of CFLs, unlike regular languages where it also holds; both hold.)
- **NOT closed under Intersection**: Counterexample: L1 = {a^n b^n c^m | n, m >= 1} and L2 = {a^m b^n c^n | n, m >= 1} are both context-free, but L1 intersect L2 = {a^n b^n c^n | n >= 1} is NOT context-free (pumping lemma). So CFL intersection is not closed.
- **NOT closed under Complement**: If CFLs were closed under complement, then by De Morgan (complement of (L1c union L2c)) intersection would be closed — contradiction. Formally: (complement of L1) union (complement of L2) would give complement of (L1 intersect L2), forcing intersection closure; since intersection is not closed, complement is not closed.
- **Intersection with a regular language IS closed**: L intersect R (R regular) is a CFL — proved by a product construction between the PDA for L and the DFA for R (pushdown remains the PDA's; states pair up). This property is frequently used to prove languages NOT context-free: if L intersect R is not a CFL for a regular R, then L is not a CFL.
- **Worked example (2024 PYQ) proof style**: Closure under union: given G1 = (V1, T, P1, S1) and G2 = (V2, T, P2, S2), build G = (V1 union V2 union {S}, T, P1 union P2 union {S -> S1 | S2}, S). Every derivation from S starts with either S1 or S2, so L(G) = L(G1) union L(G2). Closure under concatenation: S -> S1 S2, so L(G) = L(G1) L(G2).

### Exam-Focused Summary Points

- Simplification order matters: generating symbols first, then reachable; then epsilon-productions; then unit productions; only then CNF/GNF.
- CNF conversion exam flow: simplify -> replace terminals in long bodies by variables -> split long bodies into binaries; always state whether S -> epsilon is needed.
- Pumping lemma for CFL: the key trick is that v x y is short, so it spans at most two blocks of a^n b^n c^n.
- Memorize the counterexample L1 = a^n b^n c^m, L2 = a^m b^n c^n for intersection non-closure; the complement argument follows by De Morgan.
