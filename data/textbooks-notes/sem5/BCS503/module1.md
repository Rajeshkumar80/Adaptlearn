# BCS503 — Theory of Computation

## Module 1: Finite Automata & Regular Expressions

### Central Concepts of Automata Theory

- **Alphabet**: A finite, non-empty set of symbols, denoted by the Greek letter Sigma. Example: Sigma = {0, 1} is the binary alphabet.
- **String**: A finite sequence of symbols chosen from an alphabet. If w is a string over Sigma, we write w in Sigma*. Example: 0101 is a string over {0, 1}.
- **Length of a string**: The number of symbols in a string, denoted |w|. Example: |0101| = 4.
- **Empty string**: The string of length zero, denoted epsilon. |epsilon| = 0. It belongs to Sigma* for every alphabet.
- **Concatenation**: If x and y are strings, xy is the string formed by appending y after x. Example: x = ab, y = cd gives xy = abcd. Note |xy| = |x| + |y|.
- **Exponent (power) of a string**: w^n is the string w repeated n times. w^0 = epsilon, w^1 = w, w^2 = ww.
- **Prefix and suffix**: Any leading (trailing) portion of a string is a prefix (suffix). Example: for w = banana, "ban" is a prefix and "na" is a suffix.
- **Substring**: Any contiguous portion of a string. Example: "nan" is a substring of "banana".
- **Language**: A set of strings, all chosen from some Sigma*, i.e., L subset of Sigma*. Languages may be finite or infinite.
  - The language over the empty alphabet: {epsilon} contains one string; the empty language with no strings is written as empty set.
- **Closure of an alphabet (Kleene star)**: Sigma* is the set of all strings over Sigma, including epsilon. Sigma+ = Sigma* - {epsilon} is the set of all non-empty strings.
- **Formal proof**: A proof is a sequence of statements where each statement is either an axiom, a hypothesis, or follows from previous statements by a rule of inference.
- **Proof by contradiction**: Assume the negation of what you want to prove; derive a logical contradiction; conclude the original statement is true. Widely used for pumping lemma results.
- **Proof by induction**: To prove a property P(n) for all n >= 0: (1) Basis step: prove P(0). (2) Inductive step: assume P(k) is true (induction hypothesis) and prove P(k+1). Example: proving that the number of strings of length n over an alphabet of size r is r^n.
- **Deduction vs induction in automata theory**: Deduction derives new facts from old facts; induction is the standard tool for proving properties of languages defined recursively.

### Deterministic Finite Automata (DFA)

- **Formal definition**: A DFA is a 5-tuple (Q, Sigma, delta, q0, F) where:
  - Q = set of states (finite)
  - Sigma = input alphabet (finite)
  - delta = transition function, delta: Q x Sigma -> Q (total function, exactly one transition per state-input pair)
  - q0 = start state, q0 in Q
  - F = set of final (accepting) states, F subset of Q
- **Extended transition function**: delta-hat (q, w) = state reached by starting in q and consuming string w. Recursive definition: delta-hat(q, epsilon) = q, and delta-hat(q, xa) = delta(delta-hat(q, x), a) for a string x followed by symbol a.
- **Language accepted by a DFA**: L(M) = {w | delta-hat(q0, w) in F}. A string is accepted if the DFA ends in a final state after reading the entire input; rejected otherwise.
- **Transition table**: A table with rows = states, columns = symbols, entries = delta(state, symbol). Start state marked with arrow (->), final states marked with star (*).
- **State transition diagram**: A directed graph; nodes are states, an arc labeled a from q to p means delta(q, a) = p. Start state has an incoming arrow, final states are double-circled.

[DIAGRAM: DFA for binary strings ending with 101
 q0 (start) --0--> q0, q0 --1--> q1, q1 --0--> q2, q1 --1--> q1, q2 --0--> q0, q2 --1--> q3 (accepting, double circle), q3 --0--> q2, q3 --1--> q1
]

- **Worked example**: DFA for strings over {0,1} ending with 101 (states record the length of the matching suffix seen so far; see diagram above). Trace 1101: q0 --1--> q1 --1--> q1 --0--> q2 --1--> q3 (accept).
- **Design tips**: Use states to remember the "relevant suffix" or "last k symbols"; one state per distinct residue/modulo class for counting problems (e.g., strings with an even number of 1s need 2 states).

### Nondeterministic Finite Automata (NFA)

- **Formal definition**: An NFA is a 5-tuple (Q, Sigma, delta, q0, F) identical to a DFA except:
  - delta is a relation/function into the power set: delta: Q x Sigma -> 2^Q (set of subsets of Q). Multiple transitions, including zero transitions, are allowed for one input symbol.
- **Nondeterminism**: When several choices exist, the NFA "guesses" a path; a string is accepted if there exists at least one path leading to a final state.
- **Extended transition function for NFA**: delta-hat(q, w) = set of all states reachable from q by reading w. Recursion: delta-hat(q, epsilon) = {q}, delta-hat(q, xa) = union over r in delta-hat(q, x) of delta(r, a).
- **Language accepted**: L(M) = {w | delta-hat(q0, w) intersect F is non-empty}. The NFA accepts if at least one computation ends in a final state; "zero, one, or many" transitions per symbol.
- **NFA vs DFA differences**: DFA has exactly one transition per state-symbol pair; NFA may have several or none. DFA consumes the string deterministically; NFA is a parallel "tree" of computations. Both read input left to right, one symbol per step (no epsilon moves in this basic version).
- **Why NFAs matter**: Easier to design; every NFA can be converted to an equivalent DFA (subset construction); NFAs are a convenient intermediate for Thompson's construction of regular expressions.

### Equivalence of NFA and DFA (Subset Construction)

- **Theorem**: A language L is accepted by some DFA if and only if L is accepted by some NFA. Every NFA has an equivalent DFA (with up to 2^n states).
- **Proof outline**: Given NFA N = (Q, Sigma, delta, q0, F), construct DFA D = (2^Q, Sigma, delta', {q0}, F') where:
  - States of D are subsets of Q (each DFA state represents a set of NFA states reachable together).
  - delta'(S, a) = union over q in S of delta(q, a) (the "image" of set S under symbol a).
  - Start state = {q0}.
  - F' = {S | S contains at least one state of F}.
  - By induction on |w|, delta-hat'({q0}, w) = set of all NFA states reachable from q0 on w; hence D accepts w iff N does.
- **Subset Construction algorithm (steps)**:
  1. Write start state as the singleton set containing the NFA start state.
  2. For each new DFA state S (a set of NFA states) and each input symbol a, compute delta'(S, a) = union of delta(q, a) over all q in S.
  3. Add this result to the set of DFA states if new.
  4. Repeat until no new states are created.
  5. Mark as final every DFA state whose set contains an NFA final state.
- **Worked example**: NFA with Q = {q0, q1, q2}, Sigma = {a, b}, start q0, final q2, transitions: delta(q0, a) = {q0, q1}, delta(q1, b) = {q2}. Subset construction:
  - {q0} --a--> {q0, q1}, {q0} --b--> {} (trap state)
  - {q0, q1} --a--> {q0, q1}, {q0, q1} --b--> {q2}
  - {q2} --a--> {}, {q2} --b--> {}
  - {} --a--> {}, {} --b--> {}
  - Final states: {q0, q1} and {q2} (contain q2 in F). Result: 4-state DFA.

### NFA with Epsilon-Transitions (epsilon-NFA)

- **Formal definition**: An epsilon-NFA is a 5-tuple (Q, Sigma, delta, q0, F) where delta: Q x (Sigma union {epsilon}) -> 2^Q. Epsilon transitions allow state change without consuming any input symbol.
- **epsilon-closure**: ECLOSE(q) = set of all states reachable from q using only epsilon-transitions (including q itself). Computed iteratively: start with {q}; whenever a state r is in the set and delta(r, epsilon) contains a state s not yet included, add s; repeat until no change.
- **Extended transition function for epsilon-NFA**: delta-hat(q, w) = ECLOSE of all states reached after reading w, i.e., after each symbol, take epsilon-closure. Recursion: delta-hat(q, epsilon) = ECLOSE(q); delta-hat(q, xa) = ECLOSE(union over r in delta-hat(q, x) of delta(r, a)).
- **Language accepted**: L(M) = {w | delta-hat(q0, w) contains a state of F}.
- **Eliminating epsilon-transitions (epsilon-NFA to DFA) — steps**:
  1. Compute epsilon-closure of start state; this is the DFA start state.
  2. For each DFA state S (a set of epsilon-NFA states) and each symbol a: compute T = union over q in S of delta(q, a); new DFA state = ECLOSE(T).
  3. Add new states until closure under this rule; each DFA state is final if its set contains an epsilon-NFA final state.
  4. The resulting DFA has no epsilon transitions and accepts the same language.
- **Worked example (2023 PYQ)**: epsilon-NFA with Q = {q0, q1, q2}, start q0, final q2, delta(q0, epsilon) = {q1}, delta(q1, a) = {q1}, delta(q1, epsilon) = {q2}, delta(q2, b) = {q2}.
  - ECLOSE(q0) = {q0, q1, q2} (q0 -> q1 via epsilon, q1 -> q2 via epsilon). DFA start = {q0, q1, q2}.
  - On 'a': union of delta(q, a) over q in {q0, q1, q2} = {q1}; ECLOSE = {q1, q2}.
  - On 'b': union of delta(q, b) = {q2}; ECLOSE = {q2}.
  - From {q1, q2}: on 'a' -> {q1} -> ECLOSE {q1, q2} (loop); on 'b' -> {q2} -> {q2}.
  - From {q2}: on 'a' -> {} (trap); on 'b' -> {q2} (loop).
  - Final DFA states: all sets containing q2, i.e., {q0, q1, q2}, {q1, q2}, {q2}.
- **Equivalence theorem**: A language is regular (accepted by a DFA) iff it is accepted by an epsilon-NFA. Proof: subset construction above converts epsilon-NFA to DFA; a DFA is trivially an epsilon-NFA.

### Exam-Focused Summary Points

- Every DFA is an NFA; every NFA is an epsilon-NFA; all three define exactly the regular languages.
- Subset construction can give up to 2^n states; unreachable states are often omitted in practice.
- The trap (dead) state {} is needed only to make the DFA transition function total; it may be omitted in diagrams.
- To prove a language is regular: give a DFA, NFA, epsilon-NFA, or a regular expression (Module 2).
- Acceptance is by final state only for all finite automata; there is no "empty stack" notion here.
