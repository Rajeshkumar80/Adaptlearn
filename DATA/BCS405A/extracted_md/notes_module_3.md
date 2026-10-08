<!-- PROVENANCE: subject_code=BCS405A | subject_name=Discrete Mathematical Structures | semester=4 | module=3 | source_type=MODULE_NOTES | source_file=module3.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS405A — Module 3

## Functions and Algebraic Structures

**Subject:** BCS405A (Discrete Mathematical Structures)
**Module:** Module 3
**Content type:** textbook_fallback
**Sources:** T1_Discrete_Mathematics_for_Computer_Science.txt

---

e useful, must match most people's intuitions.
To start, one must know what p, q, and r stand for. At first sight, one might expect to
be told what sentences they stand for, such as
p = "Mr. Holmes never made a mistake."
q = "The professor is not a criminal."
r = "Mrs. Hudson suspected the thief from the start."
For ordinary applications, that is exactly where one begins, but for the study of proposi-
tional logic, this is an unnecessary detail. In propositional logic, it matters not at all what
sentences the proposition letters represent, only what the truth values of the sentences are.
(This will become apparent as you see how truth values are assigned to complex formulas).
Remember, F is shorthand for FALSE and T for TRUE. So, the starting point in proposi-
tional logic is an assignment of truth values to the proposition letters. For example, p may
be assigned the value T, and q and r may be assigned the value F.
Definition 1. Let P be the set of proposition letters. An interpretation is an assignment
I of a truth value (T or F) to every proposition letter in P. For r E P, the assignment of a
truth value to r is denoted I (r).
Example 1. Let P be the set of proposition letters, and let p, q, and r E P and X = P -
{p, q, r}. Let I be the following assignment of truth values to elements of P: I(p) = F,
I(q) = F, l(r) = T, and I(x) = F for every x e X. Then, I is an interpretation.
An interpretation must assign a truth value to every proposition letter. (This is a tech-
nicality, just as it appears to be. Requiring this now simplifies the discussion a bit later.)
Once the interpretation I of the proposition letters is fixed, the interpretations of all
other formulas can be computed by induction on formulas. We illustrate this here with
an expression tree. The process is different from the way that arithmetic expressions are
evaluated, because a value is found in a simple, bottom-up fashion.
Example 2. Determine whether the formula
0 = (-p V q) --* (r --+ p)
is T or F for an interpretation I where I(p) = T and I(q) = 1(r) = F. (Remember: All
other proposition letters have value F.)
Solution. Mark the leaves of the expression tree of 0 with the truth values as shown in
((-p) v q) -- (r -- p)
((-'p) v q) 
(r -
p)
(-P) 
qFrF 
pT
p 
T
Expression tree.

CHAPTER 2 
Formal Logic
Now, use these truth values to move up the tree toward the root, using the truth tables for
the propositional connectives (see Tables 2.2 and 2.3 in Section 2.1). First, work one level
up from the leaves. The truth table for - says that if p is T, then -p is F. The truth table
for --* says that if r is F and p is T, then r -) p is T.
Next, use the truth table for v to compute a truth value for -p v q. Since the truth
value of -p is F and the truth value of q is F, the result is F.
Finally, use the truth table for --+ to assign a truth value to the entire formula. The truth
value of an implication for which the hypothesis is F and the conclusion is T is just T.
Therefore, T is the truth value of 4). The steps of this evaluation are shown in Figure 2.10.
((-p) v q) -
(r -
p) T
((-p) vq 
F 
r-p
(-'p) F 
q 
FTr F 
T
PT
Step 3 of evaluating a formula.
The truth value of the entire formula 4) is denoted by I (4)). In the case shown here,
1 (4) = T. 
Formally, what happened in Example 2 is an induction on formulas. The interpretation
I specified the truth values for the proposition letters. The truth I (0) for more complex
formulas 4) is defined using the truth values for simpler formulas and the truth tables for -,
A, V, --*, and --* as shown here:
1. 1(T) = T, and I(F) = F
2. I(-0) = 
T ifI(0)=F
I F 
ifl()=IT
F 
otherwise
SF 
if1(0)==I(*)=F
4.(v 
)} = 
T 
otherwise
5.
F 
ifI(0)=Tandl( )=F
T 
otherwise
6. 1 
T 
ifI(4)=(i)
F 
if I(4))#(Ifr)
Since each formula 4) has exactly one expression tree and these rules define the truth
value of each node on the tree in terms of the truth values of the nodes with edges joining
them to this node, there is only one way to calculate I (4)).
Definition 2. 
Let I be an interpretation of P. A formula 4) is true in I if 1(4)) = T, and
0 is false in I if 1 (4) = F.

Truth and Logical Truth 
In Example 2, if I is the interpretation with I(p) = T and I(q) = I(r) = F, then
(-p V q) -). (r -- p) is true in I.
Example 3. 
Let
0 = ((-p V q) -- (r -+ p))
Find I (0b) for all interpretations 1.
Solution. Three proposition letters-p, q, and r-are in the formula. Hence, the truth of
the formula depends only on I(p), I(q), and I(r). Each of I(p), I(q), and 1(r) can be
one of T or F, so there are 23 = 8 possible interpretations.
The calculation of the truth value for each of the eight interpretations can be shown
concisely in a truth table. Start out with a truth table that has eight rows, one for each
interpretation:
p 
q 
r
1o 
T 
T 
T
I1 
T 
T 
F
T 
F 
T
T 
F 
F
F 
T 
T
F 
T 
F
F 
F 
T
F 
F 
F
Next, assign truth values to larger and larger subformulas until the formula itself is evalu-
ated.
We now repeat the evaluation of the formula
0 = (--p V q) -+ (r -+ p)
using this method. Evaluating -p and r -+ p, we get
p 
q 
r 
-p 
--pVqr- 
p 
(-ppvq)- 
(r- 
p)
Io 
T 
T 
T 
F 
T
Il 
T 
T 
F 
F 
T
T 
F 
T 
F 
T
T 
F 
F 
F 
T
F 
T 
T 
T 
F
F 
T 
F 
T 
T
F 
F 
T 
T 
F
F 
F 
F 
T 
T
and in two more steps, we complete the evaluation of the formula:

CHAPTER 2 
Formal Logic
p 
q 
r 
-'p 
-pvq 
r-+p 
(-'pvq)- 
(r--+p)
Io 
T 
T 
T 
F 
T 
T 
T
I1 
T 
T 
F 
F 
T 
T 
T
T 
F 
T 
F 
F 
T 
T
T 
F 
F 
F 
F 
T 
T
F 
T 
T 
T 
T 
F 
F
F 
T 
F 
T 
T 
T 
T
F 
F 
T 
T 
T 
F 
F
F 
F 
F 
T 
T 
T 
T
By convention, we put the truth value directly under the operation performed. The truth
values in the right-most column of the table are the truth values of each of the inter-
pretations of this formula. The truth tables show that 4) is T in the interpretations I0,
1,, 12, 13, 15, and 17. The truth table also shows that 0 is F in the interpretations 14
and 16. 
2.3.1 
Tautologies
Propositional logic is the study of propositions and the propositional connectives. It is the
study not only of one particular interpretation of a formula but also of what can be deduced
about all interpretations of a formula. Of particular interest are those formulas that are true
"by virtue of pure logic." Definition 3 captures the notion of "true by virtue of pure logic,"
at least as closely as is possible from the standpoint of propositional logic.
Definition 3. 
Let 4) be a formula. Then, 4) is a tautology, or is logically valid, if it is T in
every interpretation. 40 is satisfiable if it is T in some interpretation, and it is unsatisfiable
if it is T in no interpretation. Unsatisfiable formulas are also called contradictions.
A formula is a tautology if and only if all entries under the formula in its truth table
evaluation are T. For example, "John is married, or John is not married" is a logical truth.
"John is married, or John is a bachelor" is not a logical truth, since it depends on the
meaning of the word bachelor.
"John is married, and John is not married" is unsatisfiable, since the proposition "John
is married" cannot be both T and F. On the other hand, "John is married, or John is a
bachelor" is clearly satisfiable. Of course, every tautology is also satisfiable.
Example 4. 
Construct a truth table to show that (p A q) -) p is a tautology.
Solution. The truth table for (p A q) -) p is
p 
q 
p pAq 
((p Aq) -+ p)
T 
T 
T 
T
T 
F 
F 
T
F 
T 
F 
T
F 
F 
F 
T
Since all entries under ((p A q) -+ p) are T, the formula is a tautology. 

Truth and Logical Truth 
The reader should note that, intuitively, (p A q) -* p "asserts" that if p and q are both
T, then p is T. Thus, we expect it to be a tautology.
Example 5. 
Construct a truth table to show that p -- (p V r) is a tautology.
Solution. The truth table for p -+ (p v r) is
p 
r 
pvr 
(p-+ (pvr))
T 
T 
T 
T
T 
F 
T 
T
F 
T 
T 
T
F 
F 
F 
T
Again, all entries in the final column are T, so the formula is a tautology. 
U
This tautology also "asserts" an obvious truth. If p is T, then it is true that either p is
T or r is T (or both).
The next two examples show how logical connectives can be expressed in terms of
each other.
Example 6. 
Construct a truth table to show that (p --* q) ++ (-p V q) is a tautology.
Solution. This formula shows how -- can be expressed using v and -.
p 
q 
p--+q 
-p 
-ppVq 
(p-+q) *(-pVq)
T 
T 
T 
F 
T 
T
T 
F 
F 
F 
F 
T
F 
T 
T 
T 
T 
T
F 
F 
T 
T 
T 
T
Since the formula involving only -). is T(F) if and only if the formula involving -
and V
is T(F), all the entries in the final column are T, so the formula is a tautology. 
U
Example 7. 
Construct a truth table to show that
(p +- q) --* ((p -+ q) A (q -÷ p))
is a tautology.
Solution. This formula shows how to express +* in terms of A and -+.
(p 
•* q) +-
p 
q 
p*+q 
p--+q 
q-+p 
(p-q) 
A(q--.p) 
((p --+ q) A (q -
p))
T 
T 
T 
T 
T 
T 
T
T 
F 
F 
F 
T 
F 
T
F 
T 
F 
T 
F 
F 
T
F 
F 
T 
T 
T 
T 
T
All the entries in the final column are T, so the formula is a tautology. 
U

CHAPTER 2 
Formal Logic
fully and determine what they "assert." The names should suggest analogies to other
operations. For example, V, A, and <-* all obey associative laws, just as + and 
do in
arithmetic.
(a) (p A p) ÷ p 
Idempotence
(b) (p v p) ÷- p 
Idempotence
(c) p V -'p 
Law of the Excluded Middle
(d) -(p A -p)
(e) (p A (p --+ q)) -+ q 
Modus Ponens
(f) 
((p --* q) A (q -- r)) -+ (p -+ r) 
The Law of Syllogism
(g) ((p V q) A -p) 
-- q 
Modus Tollendo Ponens
(h) ((p A q) A r) *÷ (p A (q A r)) 
Associative Law
(i) 
((p V q) v r) *-+ (p V (q V r)) 
Associative Law
(j) 
((p ++ q) *+ r) +* (p 
-* (q +-* r)) 
Associative Law
(k) (p A r) +- (r A p) 
Commutative Law
(1) 
(p V r) -•* (r V p) 
Commutative Law
(m) (p 
-• r) <* (r *+ p) 
Commutative Law
(n) (p A (r V q)) +* ((p A r) V (p A q)) 
Distributive Law
(o) (p V (r A q)) +- ((p V r) A (p V q)) 
Distributive Law
(p) ---- p -* p 
Double negative
(q) -(p A r) *-+ (-p V -r) 
DeMorgan's Law
(r) -(p v r) +* (--p A -r) 
DeMorgan's Law
(s) 
(p -- r) ÷ (-r 
-
--p) 
Contrapositive
(t) 
(p -+(r -
q)) - ((p A r) -
q)
(u) ((--p -+ 
r) A (-p --+ -r)) 
* p 
Contradiction
(v) ((p A r) V r) +- r 
Absorption
(w) ((p V r) A r) +-* r 
Absorption
(x) (p *+ q) +-* ((p A q) V (-,p A -,q))
(y) -(p +-•q) * ((-p A q) V (p A -q))
(z) 
(p -+ F) <-* (-,p)
The two tautologies (q) and (r) in Table 2.5, called DeMorgan's Laws, are the logi-
cal analogues of the DeMorgan's Laws of set theory (Theorem 8 in Section 1.3.2). That
theorem states how the set operations of union, intersection, and complementation interact.
Here, we see how conjunction, disjunction, and negation interact with propositions.
Example 8. 
Let p denote "X is a bird" and r denote "X can fly." Tautology(s) from Table
2.5 states that "If X is a bird implies that X can fly" is equivalent to "If X cannot fly, then
X is not a bird."
The following theorem is the basis of many proofs, notably many proofs by contradic-
tion.
Theorem 1. A formula * is a tautology if and only if -*4 is unsatisfiable.

Truth and Logical Truth 
Proof. (=,) Let *' be a tautology, and let I be any interpretation of the proposition let-
ters in *. Since * is a tautology, I(*) = T, so I(-*) = F. Hence, ---' is not satisfiable.
(€=) 
The converse is analogous. 
U
A proof by contradiction shows that if I(4) = T for an interpretation, then we prove
I(--*') = T in that interpretation, which is clearly a contradiction.
2.3.2 
Substitutions into Tautologies
The formula 4 = (p A (p -- q)) -* q is a tautology. Now, replace each occurrence of p
in 4 with another formula, say pl V P2. The result is the formula
01 = ((P1 V P2) A ((Pl V P2) -- q)) -- q
The reader can easily write the truth table for 01 and see that it also is a tautology. Some-
thing more general, however, is taking place here. One can think of the substitution not as
substituting the formula P, v P2 into 4 for p but, rather, as substituting the truth value for
P1 V P2 for the truth value of p in 4. Since 4 is a tautology, any truth value for p together
with any truth value for q yields a truth value of T for 4. So, 01 should also be a tautology.
This intuitive argument can be formalized to prove the following theorem. (The interested
reader is invited to prove it.)
First Substitution Principle
Let 4 be a tautology; let P1, P2, ...
, Pk be any proposition letters appearing in 4,
and let X1, X2 ..... 
Xk be formulas. Form a formula 4)1 by simultaneously replacing
P1 with X1, P2 with X2. 
Pk with Xk wherever they occur in 4. Then, 01 is a
tautology.
The requirement of simultaneous replacement is important, since it allows, say, X1 to
contain a P2 without forcing that P2 to be replaced with X2. For example, again let
4 = (p A (p -* q)) -). q
and replace p with X1 = q -* r and q with X2 = r -
q. The result is
01 = (Xj A ((XI -
X2)) 
"- X2
01l = (q -+ r) A ((q --* r) --* (r -
q)) --- (r -- q)
Since 4 is a tautology, so is 01. The simultaneous replacement condition meant that the q
in X1 did not have to be replaced with X2.
2.3.3 
Logically Valid Inferences
We began the study of logic to help distinguish valid from invalid arguments. We have now
covered enough material to present a formal notion of a valid argument for propositional
logic.

CHAPTER 2 
Formal Logic
Definition 4. 
Let S be a set of formulas. An interpretation I satisfies S if I (4) = T for
every 0p E S. A set S of formulas is satisfiable if there is an interpretation I that satisfies S.
For example, {p, q, r} is satisfiable. It is satisfied by any interpretation I where I (p) =
I (q) = I (r) = T. However, Ip, -pp} is not satisfiable.
One intuition is that I describes the actual state of the world and that S is a set of
formulas, which can be thought of as assertions about the world. I satisfies S if each
formula in S is a true statement about (the state of) the world. Another intuition is that I is
a possible state of the world. Suppose it is known that all statements in S are T. Then, one
can check whether a possible state I of the world matches what is known-that is, whether
I satisfies the known facts S.
Theorem 2.
(a) Every interpretation satisfies 0.
(b) If S = 101, ..... ,k} 
and I is an interpretation, then I satisfies S if and only if
1(0b1 A ... A 00k = T_
Proof. This Proof is left for Exercise 23 in Section 2.4. 
U
Definition 5.
(a) For formulas * and X, *' logically implies, X, or * tautologically implies X, if, for
every interpretation I,
if I(*) = T, then I(X) = T
We denote i/ logically implies X as 4' - X.
(b) Formulas * and X are logically equivalent, or tautologically equivalent, or equiva-
lent, if, for every interpretation I, we have I(*) = I (X).
As a natural extension of one formula logically implying another formula, we say that
for a set of formulas S, S • x means that inferring X from S is logically valid.
Example 9.
(a) pAqkpvq.
(b) p A q is logically equivalent to -'(--p v --q).
(c) p A q and p V q are not logically equivalent.
Solution.
(a) Suppose I is any interpretation. We need to show that if I (p A q) = T, I (p V q) = T.
So, suppose I (p A q) = T. Then, I (p) = T, and I (q) = T. So, I (p V q) = T, as
desired.

Truth and Logical Truth 
(b) We show that I(p A q) always equals I(-(-p V --q)) by building a truth table of all
possibilities:
p 
q 
pAq 
-p 
-'q -pV-'q 
-- (-pV-q)
T 
T 
T 
F 
F 
F 
T
T 
F 
F 
F 
T 
T 
F
F 
T 
F 
T 
F 
T 
F
F 
F 
F 
T 
T 
T 
F
Note that all entries under p A q and --(--p v --q) are identical-that is, that I(p A q)
is always equal to I(--(--p V --q)).
(c) Let I be the interpretation where I (p) = T and I (q) = F. Then, I (p A q) = F, and
I(p V q) = T. Because these two truth values are not the same, the two formulas are
not logically equivalent. 
M
The intuitive content of logical implication is that if Vt # X, then it is correct to infer
X from Vi in any argument. The definition of logically implies can be extended to sets of
propositions in a straightforward way. At this point, we need to understand this notion at
the level of formulas only. For example, if we have two sets of formulas R and S, then R
logically implies S if, for every interpretation I, I satisfies R if and only if I satisfies S.
Compare the formula 4) -+ * with the assertion "0) logically implies *t." The first is
just a formula. It may be T, or it may be F. We are just discussing, or mentioning, the
formula. The second is an assertion that some logical relationship holds. Nevertheless,
there is a connection between them. This connection is given in part (a) of Theorem 2.5.
Theorem 3. 
Let 4) and Vt be formulas. Then:
(a) 4) k Vf if and only if 
-) 
-- o* is a tautology.
(b) R [- * if and only if R U {-'Vf} is unsatisfiable.
(c) Let R = {[1, ,2 .... 
OPk}. R 1= * if and only if 01 A4 2 A ... A 
k -
is a tautology.
(d) 0 1= *t if and only if * is a tautology.
(e) ,) and *t are logically equivalent if and only if 4) ÷ 
r is a tautology.
Proof. (a) (=#) 
First, suppose ) 1= *, and let I be any interpretation. It is necessary to
show that 1(0) -+ *-) = T. The only way that 1(0) --* *) can be F is for 1(4)) to be T and
I (*f) to be F. However, if 1(4b) = T, then, since 4) logically implies *, I (*) must also be
T. Hence, 1(4) --
(0 
) = T.
(.€=) 
Second, suppose ,) -- •r is a tautology. It is necessary to show that for any
interpretation I, if 1(4) = T, then I(*) = T as well. So, suppose I is an interpretation,
and suppose 1(4)) = T. Since 4) -- Vt is a tautology, 1(,) -- Vt) = T. By the truth table
for -+, if I(0) = T and I(0) --* V)=T, then I(*) = T.
(b)-(e) These proofs are left for Exercise 24 in Section 2.4. 
The next theorem tells us that if two propositions are either always T or always F,
then they are logically equivalent.

CHAPTER 2 
Formal Logic
Theorem 4.
(a) Suppose 4) and * are both tautologies. Then, 4) and * are logically equivalent.
(b) Suppose 4) and * are both unsatisfiable. Then, 4) and * are logically equivalent.
Proof. These proofs are left for Exercise 25 in Section 2.4. 
U
The result just says that since a tautology is T for every set of truth values of its
propositions, its truth value will match the truth value of any other tautology for those
same truth values. Similarly, the same holds for two unsatisfiable formulas.
In Table 2.6, we add a bit of notation; rather than just saying {p, p --+ q) ý= q, we
replace p and q with the symbols 4) and *, representing arbitrary formulas. What Table
2.6 really means is that if we replace 4), Vt, and X with any formulas, the results are logical
implications.
Some Logically Valid Inferences and Their Traditional Names
Some Logically Valid Inferences
a. 
{4, ) • 4} 
Modus Ponens
b. 
X 
_ 
X 
Law of Syllogism
C. 
{ 
V V 4,, -0) 
-
Modus Tollendo Ponens
d. 
""4) • 4 
Double Negation
e. 
--, -- --,' •--, -- 4. 
Contrapositive
f. 
4)-- 4 1=- 
--* 4 
Contrapositive
g. 
{4 "* X, 4 -
X )x} 
1 -
Proofby Contradiction
h. 
X-'4 
x, -"4 "- 
"x} 
X 
4I 
Proof by Contradiction
i. 
{X)v4', 4)--,, 
--* X} 
X 
Proofby Cases
j. 
{4) A 4'} 
* 
-,(",4 v -'-0 ) 
DeMorgan's Law
k. 
{-(4 A 4)} 1= (-4) V --,') 
DeMorgan's Law
1. 
(0) V 4r=-'(-4) A -4) 
DeMorgan's Law
m. 
(-(4) V 40) • (",) A --,) 
DeMorgan's Law
Example 10.
(a) Let 4) denote "X is a cat" and * denote "X is an animal." Under the assumption that 4)
is true and 4) 
* 4 is true, we can use Modus Ponens to conclude that X is an animal.
(b) Let 4) denote "X is a cat" and *' denote "X is a bird." If we are given that 4) v *t is true
and --4) is true, then we can use Modus Tollendo Ponens to conclude that "X is a bird."
U
As commented earlier, computer programs have been written to automate logical in-
ference. Some material relevant to this are discussed in the next section and in Section 2.4.
2.3.4 
Combinatorial Networks
A combinatorial network is just another representation for a formula or a set of formulas
of propositional logic. Start with an assignment of truth values to the wires going into the
circuit-that is, to the proposition letters. The circuit computes a group of outputs that
correspond to the truth values of the corresponding formulas.

Truth and Logical Truth 
Gates and Boolean Algebra
In Section 1.3.5, the axiom system for a boolean algebra was introduced. Example 10
showed that if B is a set of elements with values from {0, 11, and with the operations A and
V defined as
V 
A 
1 1 
then B with A as meet and V as join forms a boolean algebra.
If we interpret the operation of v as the logical operation of OR and A as the logical
operation of AND as well as substitute T for 1 and F for 0, then these operation tables
are just the tables of AND and OR introduced in Table 2.3. The logical value T satisfies
the conditions for T, whereas F satisfies the conditions for _L. Finally, if we interpret
complementation as -x, then the conditions for complements hold. What all this means
is that there are two different but equivalent ways to represent a circuit. The first is to draw
the gates, as shown in Figure 2.11.
q
Sum
Half-adder.
The second is to represent the gates as boolean operations and the whole gate structure as
a boolean expression. In Figure 2.12, we show a circuit and its equivalent boolean expres-
sion.
P 
ý 
pA q 
(-p A q) v (p A -q) v (p A q)
q
p 
q
q
Gates for (-p A q) V (p A -q) V (p A q).
The power of this alternate representation is shown in Example 11 where we use
logic-which we can also think of as boolean algebra-to find a simpler expression to
represent this set of gates.

CHAPTER 2 
Formal Logic
Example 11. 
Use logic to show that (-,p A q) V (p A -'q) V (p A q) is logically equiv-
alent to the formula p v q thus providing us with a one-gate equivalent to the circuit in
Solution. 
We use the axioms for the Commutative Law, the Distributive Law, and the
basic properties of T to simplify this expression.
(-'p A q) V (p A --q) V (p A q)
=(pAq)V(-,pAq)V(pA-,q)V(pAq) 
((pAq)=(pAq)V(pAq))
= ((p V -p) 
A q) V (p A (-'q V q)) 
(Distributive Law)
= (T A q) V (p A T) 
(property of T)
=qVp
=pvq 
(Commutative Law)
The simplified circuit is shown in Figure 2.13.
q
Equivalent, simpler circuit.
It is not always possible to have such clear reduction in the complexity of a combina-
torial circuit. Example 11, however, shows how computer science can use different tools in
approaching a problem.
2.3.5 
Substituting Equivalent Subformulas
In many respects, logically equivalent formulas are indistinguishable from each other. The
sense in which two logically equivalent formulas are indistinguishable is stated as the Sec-
ond Substitution Principle.
Second Substitution Principle
Let 1h be logically equivalent to 02, and let *i be any formula containing t0l, possibly
several times, as a subformula. Form a new formula *' by replacing some (or possibly
all) of the occurrences of 01 in V with 02. Then, *' is logically equivalent to */'.
The Second Substitution Principle is really quite useful. Consider, for example, the
formula
0 = (--p -- q) -- r

Truth and Logical Truth 
Since the subformula 41 = -p -- q is logically equivalent to 42 = p V q (see Example
9 in Section 2.3.1) by the Second Substitution Principle, we can transform the formula as
follows:
1 -
r
2- 
r
(p V q) -
r
Many people would find the last formula easier to understand than the original one. We
shall not prove the Second Substitution Principle; the reader is invited to prove it.
2.3.6 
Simplifying Negations
When given a formula, it is often useful to find a simpler formula that is logically equivalent
to the first. Here, simpler has no fixed meaning; it just means simpler to use in some
application. For example, in programming, we write conditions saying when a loop should
continue for another pass and when a loop should stop. One equivalent way of writing that
condition may be easier than another for someone reading the program to understand. In
the context of boolean networks, simpler can mean smaller, such as having fewer gates or
taking up less area on a chip. A standard, though obviously imprecise, meaning of simpler
is "easier for people to understand." This latter notion of simpler comes up often.
Consider a piece of a program:
while (not((x < 3) or (x > 5)))
A complex formula that is negated is usually difficult to understand. Consequently,
programmers look for logically equivalent formulas where the operator not is "pushed
inside" and applied to simpler formulas. Unfortunately, in this example, one might think
the negation is logically equivalent to
while ((x > 3) or (x < 5))
{...)
which turns out to be an infinite loop. The problem, of course, is that DeMorgan's Law was
not applied correctly.
Let us rewrite the condition by letting the proposition letter p stand for x < 3 and q
for x > 5. Hence, -p is true just in the case x > 3, and -q is true just in the case x < 5.
The condition at the top of the while loop can be rewritten -'(p V q). By DeMorgan's Law,
this formula is equivalent to -p A --q. So, the proper translation would have been
while ((x > 3) and (x < 5))
f ... }I
In fact, for any formula 0, it is possible to find an equivalent formula in which nega-
tions are applied only to proposition letters. The technique can be thought of as "moving
negations inward." This technique is done in two steps.
Step 1. 
Find an equivalent formula containing no *-'s or --. 's. First, replace each sub-
formula of the form 4' 4- with the logically equivalent subformula
(0 -* 
) A (* -* 
)

CHAPTER 2 
Formal Logic
This is an application of the Second Substitution Principle. Then, eliminate all --*'s as
follows: Replace each subformula of the form • 
-
,1 with the logically equivalent sub-
formula --4 V V.
Step 2. 
Apply DeMorgan's Laws,
-(p V q) <-+ (-p A -q) 
and 
-- (p A q) <-+ (-p V -q)
to "push negations" in past A and v and replace each double negation --
p formed with
the unnegated p. Ultimately, only proposition letters will be negated. By the Second Sub-
stitution Principle, the formula so formed will be equivalent to the original formula.
Example 12. 
For the formula
-_(-(p A --q) V (q A --r))
use DeMorgan's Laws and the law of double negation to "push negations inside."
Solution. Start from the "outside" and work "inside."
1. This formula is of the form --,(0 V fl), where 0 = -(p A -q) 
and 7f = (q A --r), so
we apply DeMorgan's Law to get the equivalent
-- '(p A --q) A -,(q A -r)
2. Apply the same techniques to the "outermost" subformulas, -- '(p A -q) and --(q A
--r). By the law of double negation, the first is equivalent to (p A -q) and by DeMor-
gan's Laws, the second is equivalent to -q v --
r. So, the entire formula is equivalent
to
(p A -'q) A (-q V --- r)
3. Now work "inward." Again, by the law of double negation, --
r is equivalent to r, so
the entire formula is equivalent to
(p A -'q) A (-q V r)
which is in the desired form.
rnExercises
1. A restaurant displays the sign "Good food is not cheap," and a competing restaurant
displays the sign "Cheap food is not good." Are the two restaurants saying the same
thing?
2. The country of Ost is inhabited only by people who either always tell the truth or
always tell lies and who will respond to questions only with a "yes" or a "no." A
tourist comes to a fork in a road, where one branch leads to the capital and the other
does not. There is no sign indicating which fork to take, but Mr. Zed, who is a resident
of Ost, comes along. What single question should the tourist ask Mr. Zed to determine
which fork in the road to take?

Exercises 
3. Find the expression tree for the formula
p -- ((--p) -- q)
Evaluate the expression tree if proposition p is T and proposition q is E
4. Find the expression tree for the formula
((p -
--q) V q) -+ q
Evaluate the expression tree if proposition p is F and proposition q is T.
5. Find the expression tree for the formula
((((-'(-'p)) A (-'q)) A r) V (((-(-,q)) A (-r)) A s) 
-• (s -+ p)
Evaluate the expression tree if proposition p is T, proposition q is T, proposition r is
F and proposition s is F
6. Find the expression tree for the formula
((-,(p A q)) V (- (q A r))) A ((-'(p ++ (-(-'s)))) V ((r A s) V (-,q))).
Evaluate the expression tree if proposition p is F proposition q is T, proposition r is
F and proposition s is T
7. Find the expression tree for the formula
-,(p A q) 
-• (-,p V --q)
Evaluate the expression tree for all possible pairs of truth values for p and q. Use these
evaluations to prove this formula is a tautology.
8. For each of the following sets of propositions, identify a logically valid inference listed
in Table 2.6 that could be used to draw inferences from the formulas given. Identify
the rule of inference and what the inference rule implies.
(a) "If the sun is shining, then the courts will be open for play."
"If the courts are open for play, then we will play at 3 PM."
(b) "The sun is shining, or the courts are closed."
"The sun is not shining."
(c) "It is false that the sun is not shining."
(d) "If the courts are not open for play, then the sun is not shining."
(e) "If the sun is not shining, then the courts are not open for play."
"The courts are open for play."
(f) "If it is raining, then the courts are wet."
"If it is raining, then the courts are closed."
"If the courts are wet, then the courts are closed."
"The sun is shining."
9. Let 0 = "The home team is ahead." Let 7' = "The fans are happy." Let X = "The
visiting team is losing." For inference rules (a), (g), and (i) in Table 2.6, write out the
hypothesis and the conclusion for 0, V/, and X.
10. Write the truth tables for the following formulas. Use the truth table to determine
whether any of these formulas is a tautology.
(a) ((p -
q) A (q -- r)) -
(p ÷* r)
(b) ((p -
q) 
(qr) -
) 
(p 
--
* r)
(c) ((p 
q) - r) -+(p -+(q -+r))

CHAPTER 2 
Formal Logic
(d) (p- 
(r V q)) 
((p 
r) v (p 
q))
(e) (p- 
(rAq)) 
((p 
r) v(p 
q))
(f) ((p- q) --> q) -+ p
11. Construct the truth table for
(p A (p -+ q) A (q -- r)) -- r
Simplify this expression to one using only A, v, and -.
12. Show that the following formulas from Table 2.5 are tautologies:
(a) (pAp) ÷*p
(b) (p A (p 
q)) -+ q
(c) (p -
r) + (-r -
-p)
13. Let 0 = (p V q) -> (r A -s). 
For each of the following interpretations of
p, q, r, and s, compute 1(0) using the truth tables for -, V, A, -- , and *÷:
(a) I(p) = T, I(q) = T, I(r) = T, and I(s) = F
(b) l(p) = T, I(q) = T, I(r) = F, and I(s) = F
(c) I(p) = F, 1(q) = T, 1(r) = T, and I(s) = T
(d) I(p) = F, I(q) = F, 1(r) = T, and I(s) = T
14. Let 4 = (p -+ q) -+ ((r A -s) -> q). For each of the following interpretations of
p, q, r, and s, compute 1(4) using the truth tables for -, V, A, ->, and •-*:
(a) I(p) = T, I(q) = T, I(r) = F, and I(s) = T
(b) I(p) = T, I(q) = F, I(r) = T, and I(s) = F
(c) I(p) = F, 1(q) = T, I(r) = T, and I(s) = F
(d) I(p) = F, I(q) = F, I(r) = T, and I(s) = F
15. Let 4 = (-(p A q)) + (-r V -s). For each of the following interpretations of
p, q, r, and s, compute I(0) using the truth tables for -, V, A, -+, and •÷:
(a) I(p) = T, I(q) = T, I(r) = F, and I(s) = T
(b) I(p) = T, I(q) = F, I(r) = F, and I(s) = F
(c) l(p) = F, l(q) = T, I(r) = F, and I(s) = T
(d) I(p) = F, l(q) = F, 1(r) = F, and I(s) = T
16. Simplify the following boolean expressions:
(a) (x A y) V (x A -y) V (-x A y) V (-XA-y)
(b) (XAyAZ)V(XA-yAz)V(-xAyA-Z)V(-xXA-yAZ)
(c) (xAyA-Z)V(XA-yAZ)V(XA-yA-Z)
17. Find formulas equivalent to the following formulas with all the negations "pushed
inward to the proposition letters":
(a) --(p AT)
(b) ((p 
q) 
r)- 
F
(c) ((p -
q) -
r) -+ T
(d) (p <-> q) <- r
(e) (p * 
q) ++ F
(Hint: Look for a way to simplify this last one.) (Note: The method given to "push
negations inward" does not always give the shortest formula that is equivalent to the
given formula and has - applied only to proposition letters.)

Exercises 
18. Find all truth values for which the following combinatorial circuit gives a value of
T. Interpret this combinatorial circuit in terms of mechanizing majority rule for three
parties. (Hint: If current is interpreted as a "yes" vote and no current as a "no" vote,
then you should be able to see from a truth table when at least two of the three votes
are in favor of the measure.)
x
y
x
19. Prove that a combinatorial network for
(x A y A z) V (-x A y A z) V (x A --y A z) V (x A y A -z)
can be simplified to a combinatorial network representing
(x A y) V (x A z) V (y A z)
(Hint: Replace (x A y A z) with (x A y A Z) V (x A y A z) as often as needed.)
20. A half-adder circuit was given in the text. It adds two 1-bit numbers and produces two
1-bit outputs, a sum and a carry. To add two n-bit numbers, it is tempting to try to use
n half-adders in parallel, one for each position, but this does not work. Consider the
following base-2 addition:
carries 
+ 
For example, the fourth digit of the sum, the third position from the right, is the sum of
a 1 plus a 0, plus 1 carried from the position to the right of it. So, to compute that one
position, one needs a circuit that computes the sum of three 1-digit binary numbers,
the two digits and a carry. It should output the sum (the 1's position of the sum) and a
carry (the 2's position of the sum). Such a circuit is called afull-adder
(a) Draw a full-adder circuit.
(b) Draw a circuit, with one half-adder and three full-adders, for adding two 4-digit
binary numbers.
(c) Draw a circuit that implements the multiplication table (for one-digit numbers).
21. (a) The conjunction of n formulas P1, P2, ... 
, Pn is defined to be the formula
(... ((Pl A P2) A P3) A ... ) A Pn. For n = 0, there is a special case: The conjunc-
tion of zero formulas is defined to be T. For n = 1, that conjunction simplifies to
Pi. Let 'p be the conjunction of P1, P2 .... 
pn. Prove that for any interpretation
I, l('p) = T if and only if I(pi) = T for each i such that 1 < i < n. (Hint: Use
induction.)

CHAPTER 2 
Formal Logic
(b) Let 0 be the formula
( ... ((P I <+- P2) ++ P3) +- 
.)•Pn
for n > 1. For what interpretations I is I (0) = T? (Hint: The answer involves
counting how many of the pi's are true in I. Prove the result by induction on n.)
22. Two other commonly used propositional connectives are exclusive or (either one or
the other but not both are T), denoted V, and the Sheffer stroke (not both T), denoted
Their truth tables are as follows:
p 
q 
pVq 
p 
q 
p 
ý q
T 
T 
F 
T 
T 
F
T 
F 
T 
T 
F 
T
F 
T 
T 
F 
T 
T
F 
F 
F 
F 
F 
T
(a) Do commutative laws hold for V and I?
(b) Do associative laws hold for v and I?
(c) For what interpretations I is I((... ((Pl Y P2) v P3) v ... ) v pn) = T?
(d) Find formulas 01 and 02, (containing only proposition letters; the propositional
constants T and F; the propositional connectives --, v, and A; and parentheses)
that are logically equivalent to p V q and p Iq. (Compare formula x in Table 2.5 in
Section 2.3.1, where such a formula is given for p +- q.)
(e) Repeat part (d) for p v p and pIp, but find the shortest formulas you can.
(f) Find formulas logically equivalent to p A q, p V q, and --p built from p and q
using only I and parentheses.
23. Prove both parts of Theorem 2.
24. Prove parts (b) through (e) of Theorem 3.
25. (a) Prove both parts of Theorem 4.
(b) Show that the converses to both parts of Theorem 4 need not be true.
(c) Does Theorem 4(a) remain true if the word tautology is replaced with satisfiable?
Definition 
A formula * is an alphabetic substitution of a formula 0 if * is formed from
0 by replacing every occurrence of some proposition letter p in 4) with some proposition
letter q where q does not occur in 4). (Note: The relation of being an alphabetic substitution
is symmetric, but it is not reflexive or transitive.) Define * to be an alphabetic variant of
0 if there is a finite sequence of formulas 00, 0, ... ..
on where )00 = 0, each Oi+1 is an
alphabetic substitution of 4)i, and 0,n = *.
26. (a) Show that (p v q) is an alphabetic variant of (q V p).
(b) Show that the relation of being an alphabetic variant is an equivalence relation.
(c) Show that if *r is an alphabetic variant of 0, then 0 is a tautology (respectively, is
satisfiable, is unsatisfiable) if and only if *' is a tautology (respectively, is satisfi-
able, is unsatisfiable).
(d) Show that 4 being an alphabetic variant of * does not imply that 0 and Vr are
tautologically equivalent.
27. The first stage of the method described to "push negations inward" was a method to
eliminate --*'s and ++'s. Prove that in the method to eliminate them, the process of

Normal Forms 
substituting always stops. Consider, for example, the substitution in the formula
(p 
-•* q) +- (r +-* s)
If the substitution is first performed on the second <+-, the resultant formula is
((p (-- q) -
(r ++ s)) A ((r +* s) -- 
(p +* q))
which has more *->'s to replace than in the original formula! At first sight, one might
expect that if the substitutions are made in the wrong order, the process might continue
generating more +-*'s at each stage, and the process might continue forever. (Hint: One
method is to, instead of just counting the number of 
-
symbols, put a weight on
each *-> symbol, with the weight of the ++ symbol in * 
X 
x being dependent on the
number of +*'s in V and X. If the correct method of calculating weights is used, it can
be shown that the total weight of the +-+'s decreases with each substitution.
28. The second stage of the procedure to "push negations inward" started with a formula
whose only logical connectives are -, v, and A and constructed a tautologically equiv-
alent formula with negations applied only to proposition letters.
(a) Write an algorithm describing exactly what is done. The algorithm should work
on formulas as strings of symbols. To avoid what in this case is irrelevant detail,
the program should assume that all proposition letters are one character long and
that any symbol encountered, except for (, ), A, V, and -- , is a proposition letter.
Assume that the formula contains no blanks. (It is perhaps easiest to consider the
program as a function that is passed the original formula-a string-as a parame-
ter, and then returns the equivalent formula with all the negations pushed inward.
It is easiest to use recursion to handle many subformulas.)
(b) Prove that your program from part (a) works. (Hint: if your program in part (a)
uses recursion to handle subformulas, it is natural to do this proof by induction on
formulas. However, the induction may not be straightforward.)
Normal Forms
Although two formulas may be logically equivalent, one may be "easier" for someone to
understand or to manipulate. For example, in one formula, it may be easy to determine
that the formula is satisfiable. It may be fairly obvious that one formula is a tautology but
quite difficult to conclude that from the other form of the same formula. In this section, we
discuss two special forms or representations for formulas logically equivalent to a given
formula. These forms are called disjunctive normal forms and conjunctive normal forms.
Formulas in conjunctive normal form make it easy to determine when a formula is satisfi-
able. Formulas in disjunctive normal form are easy to use when asking whether a formula
is a tautology. These special forms have assumed prominence in computer science, in both
theoretical and applied areas. The famous P 0 .A/P problem deals with conjunctive nor-
mal forms, and combinatorial networks use both conjunctive and disjunctive normal forms
to find representations of combinatorial circuits.

CHAPTER 2 
Formal Logic
2.5.1 
Disjunctive Normal Form
Consider the following two formulas:
=(p -- (q V r)) +* (q -
p)
and
= (p A q) V (p A -q A r) V (-p A -,q)
The truth tables for t and 
t would show that these two formulas are logically equivalent.
By some measures, 7& is more complicated. For example, 0 has four propositional connec-
tives, whereas Vf has nine. Nevertheless, many people find * to be far easier to understand.
The formula * explicitly lists three cases in which the formula is true:
(1) p and q are both T.
(2) p and r are T and q is F.
(3) p and q are both F.
For all other interpretations of p, q, and r, the truth value of *r is F. It is not nearly so
obvious what 0 "says." Although 0 is shorter, it also seems to be more complex.
A formula like *t that is just a list of cases that make the formula have a truth value of
T is called a disjunctive normal form (DNF). Each of the three cases, (p A q), (p A -q A
r), and (--p A -'q), is called a term. One might think of each term as describing a single
case. The entire disjunctive normal form formula is just a disjunct of terms that make the
formula T. (The words term and disjunctive normal form will be defined formally below.)
The difference in comprehensibility is even more extreme if the formula 0 is negated.
The formula
-((p -- (q V r)) *-> (q -+ p))
is logically equivalent to the disjunctive normal form formula
(--p A q) V (p A --q A -r)
The disjunctive normal form is a disjunction of only two terms, which makes it particularly
easy to understand.
Definition 1. Let p be a proposition letter. Then, p is a positive literal, and -p is a
negative literal. A literal is a positive literal or a negative literal.
Definition 2. Let-, X-2 ...... km be a set of m literals with m E N. A term is a conjunc-
tion
),1Ak2 A ...
A Xm
of m literals. A formula f is in DNF if it is a disjunction 01 V 02 V ... 
V Ok of k terms
where k e N.
The disjunction of zero formulas is F. The conjunction of zero formulas is T. This is
analogous to defining the sum of zero numbers to be zero and the product of zero numbers
to be 1. For example, F v p <* p is analogous to 0 + x = x.

Normal Forms 
Example 1.
(a) a A b A -c is a term.
(b) The formula
(a A b A c) V (-a A -,b A --c) V (a A --c A q)
is in disjunctive normal form.
(c) T is a term. It is a conjunction of zero literals.
(d) a is a term. It is a conjunction of one literal.
(e) a A b A -"c and T are in disjunctive normal form. Each is a disjunction of one term.
(f) F is in disjunctive normal form. It is a disjunction of zero terms.
Theorem 1. 
Every formula is logically equivalent to a formula in DNE.
The proof of Theorem 1 is just a formalization of what is done in Example 2.
Example 2. 
Let VV be the formula
*I = (-(p -
q)) -
(q A --r)
Determine a DNF for *.
Solution. A formula may have several equivalent formulas in DNF, but we want a sys-
tematic way to find one.
The first step in finding a DNF for * is to find the truth table for all the interpretations
of 4', as shown in Table 2.7.
Abbreviated Truth Table for 4
Interpretation 
p 
q 
r 
(-(p -- q)) --* (q A -'r)
Io 
T 
T 
T 
T
I1 
T 
T 
F 
T
T 
F 
T 
F
T 
F 
F 
F
F 
T 
T 
T
F 
T 
F 
T
F 
F 
T 
T
F 
F 
F 
T
The next step is to construct, for each interpretation Ii, 0 < i < 7, a term that is T in
that interpretation and F in all other interpretations. Such terms are listed in Table 2.8.
Interpretation 
Matching Term
pAqAr
I1 
pAqA--r
True Terms 
p A -q A r
in the Interpretations 
p A -q A -r
-pAqAr
-p A q A -r
-PA -q A r
-p A -q A -r

CHAPTER 2 
Formal Logic
The reader should observe that these terms have the desired properties. That is, Io
satisfies p A q A r, and all seven other interpretations do not satisfy p A q A r.
Now, breaking into the cases where *r is T, we construct a disjunction of terms with
one corresponding to each interpretation where *f is T."
(p A q A r) V (p A q A -r) V (-p A q A r) V (-'p A q A -r)
v(-p A -q A r) V (-p A -q A -r)
Clearly, 4¢ is in DNF. The only question is whether 0*, is logically equivalent to 
r.
As a result of the construction, however, each term of 0* is T for exactly one of the
interpretations for which * is T, whereas 4r is F in all other interpretations. So, 4O, is T
when 0 is T. Each term of 0* is F in each interpretation for which *r is F. Therefore, 0*
is F in each interpretation for which V1 is F. Thus, Ok is logically equivalent to 
M'. 
U
Example 3. 
Let *' be the formula
*r = (p -* (q V r)) A (-q) A (-r) A p
Find a DNF for 4'.
Solution. It is easy to see that Vf is unsatisfiable. We see this from the truth table for 4'
shown in Table 2.9.
Abbreviated Truth Table for *'
Interpretation 
p 
q 
r 
p--. (qvr) 
-q 
-r 
(p-- (qvr))A(-q)A(-r)Ap
1o 
T 
T T 
T 
F 
F 
F
I1 
TTF 
T 
F 
T 
F
T 
F 
T 
T 
T 
F 
F
T 
F 
F 
F 
T 
T 
F
F 
T 
T 
T 
F 
F 
F
F 
T 
F 
T 
F 
T 
F
F 
F 
T 
T 
T 
F 
F
FFF 
T 
T 
T 
F
Since at least one of the formulas p -- (q V r), -q, -'r, and p is F in each interpre-
tation, the disjunct of these terms is always F. Therefore, the construction as in Example
2 that formed terms for interpretations satisfying 4', would construct no terms. Accord-
ingly, the formula generated as in Example 2 would be a disjunction of zero terms, which,
by convention, is the formula F. The formula F is in DNF and is logically equivalent
to '. 
U
2.5.2 
Application: DNF and Combinatorial Networks
To interpret the DNF for a boolean expression, we view a term as a product or a join of
a set of literals. The DNF for a formula is viewed as a sum or a meet of a set of terms.
The DNF for a boolean expression gives us an option to use when designing combinatorial
circuits.

Normal Forms 
Example 4. Let x, y be elements of a boolean algebra. Use the DNF for the boolean
expression (x A y) V (-x A -'y) to design a combinatorial circuit.
Solution. The boolean expression is in DNF. Therefore, the combinatorial circuit is
y 
~
X 
ý"• 
• "X 
A "•y
Y
2.5.3 
Conjunctive Normal Form
Consider again the formula used as a motivating example for DNFs:
(p -). (q V r)) ++ (q -- p)
The formula is logically equivalent to the formula
(p V -q) A (-'p V q V r)
This logically equivalent formula is in conjunctive normal form (CNF). It consists of
a conjunction of two formulas that are disjunctions of literals. In this example, it is the
conjunct of (p v --q) and (-,p v q v r). Each disjunction of zero or more literals can be
thought of as a restriction on when the formula can be T. The first restriction is that at least
one of p and -q must be T. The second is that at least one of -'p, q, and r must be T.
This can be thought of as a list of rules that must all be met for the formula to be satisfied.
Thus, CNF formulas are often easy to understand.
Definition 3. 
Let O 1, -2.....
m be a set of m literals with m E N. A clause is a disjunc-
tion
Xl1VX2 V ... 
V -m
of m literals. A formula 0 is in CNF if it is a conjunction
01A 02 A'..A 
Ok
of k clauses 01, 
2,.. 
Ok where k E N.

CHAPTER 2 
Formal Logic
Example 5.
(a) a v b v -c is a clause.
(b) T is in CNF. It is a conjunction of zero clauses.
(c) F is a clause. It is a disjunction of zero literals.
(d) a is a clause. It is a disjunction of one literal.
(e) The disjunction of clauses shown is in CNF:
(a v b V c) A (-'a V -,b v -c) A (a V -'c V q)
(f) a v b v -'c and F are in CNE Each is a conjunction of one clause.
Theorem 2. Every formula is logically equivalent to a formula in CNF.
The proof of Theorem 2 is just a formalization of what is done in Example 6.
Example 6. 
Find the conjunctive normal form for the formula
V1 = (-'(p -+ q)) -
(q A --r)
Solution. The process starts by finding a formula in DNF that is equivalent to --,r.
The following is an abbreviated truth table for -',*. We will misuse the word
interpretation exactly as we did in Example 2 in Section 2.3.
Interpretation 
p 
q 
r 
-'((-(p -
q)) -+ (q A -,r))
I0 
T 
T 
T 
F
Ii 
T 
T 
T 
F
T 
F 
T 
T
T 
F 
F 
T
F 
T 
T 
F
F 
T 
F 
F
F 
F 
T 
F
F 
F 
F 
F
Now, put --VI into DNF:
=* 
= 02V 03 = (pA-'q Ar) V (pA--q A-'r)
So, *' is logically equivalent to
-'((p A -q A r) V (p A -'q A -,r))
Push the negations inside, first past the v using DeMorgan's Law:
-'(p A -q A r) A -(p A -'q A -,r)
then past the internal A's, again using DeMorgan's Law:
(-'p V -,-q V -r) A (-p V --
q V -'-r)
and finally, eliminate the double negations:
(-'p V q V -r) A (-p V q V r)
Since 0-* was in DNF, negating and pushing the negations inside creates a formula in
CNF logically equivalent to */. 

Normal Forms 
Example 7. 
Let * be the formula
* = -((p 
-- (q V r)) A (-q) A (-r) 
A p)
Find a CNF for *1.
Solution. The negation of * is equivalent to
(p -
(q V r)) A (--q) A (-"r) A p
which in Example 3 was shown to have F as a DNE So, * is equivalent to -F, and
pushing negations inward gives the CNF formula T. 
U
2.5.4 
Application: CNF and Combinatorial Networks
To interpret the CNF for a boolean expression, we view a clause as a meet of a set of
literals. The CNF for a formula is viewed as a join of a set of clauses. The CNF for a
boolean expression gives us another option to use when designing combinatorial circuits.
Example 8. 
Let x, y be elements of a boolean algebra. Use the CNF for the boolean
expression (x A y) V (-,x A --y) to design a combinatorial circuit.
Solution. The truth table for the expression is
x 
y Ix Ay 
('-,x A-y) 
(x Ay) V(-X A-"y)
S 
T 
F 
T
T 
F 
F 
F 
F
F 
T 
F 
F 
F
S 
F 
T 
T
The DNF for - ((x A y) V (-,x A -,y)) is just
(x A -y) V (--x A y)
Therefore, the CNF for (x A y) V (-,x A -y) is
--((x A -y) V (-.x A y)) = -'(x A -y) A -- (-'x A y)
=(--X V •--y) A (----X V -y)
= (-'x V y) A (x V -y)
The combinatorial circuit for this boolean expression is
Y
X 
X V -
(X V -,y) "A (-X V y)
x 
@•• 
xv Y F
y 
U
2.5.5 
Testing Satisfiability and Validity
It turns out to be very easy to tell when a formula in DNF is satisfiable. This is one reason
why a DNF is often nice to work with.

CHAPTER 2 
Formal Logic
Example 9.
(a) Show that
4 = (a A -'b) V (-'a A -"C A b) V (a A -'a)
is satisfiable.
(b) Show that
¢ - (a A --b A b) v (--a A -c A b A c) V (a A -a)
is unsatisfiable.
Solution.
(a) To find an interpretation I where 1 (4) = T, it is enough to find an interpretation where
one of the terms is true. In this case, there is an interpretation where the first term is
true. If I (a) = T and I (b) = F, then I (a A -b) = T and, hence, 1(40) = T.
(b) In this case, 4 is unsatisfiable, because every term is F in every interpretation L. For
example, in the first term, we require both I (-b) and I (b) to be T in an interpretation.
In the second term, we require both I (c) and I (-'c) to be T in an interpretation. In
the third term, we require both I(a) and I (-a) to be T in an interpretation. These
conditions are clearly impossible in any interpretation. 
U
Similarly, it is easy to tell when a formula in CNF is a tautology.
Example 10.
(a) 
Show that
4 = (a V -b) A (-a V -c V b) A (a V -a)
is not a tautology.
(b) 
Show that
4 - (a V -b V b) A (-a V -c V b V c) A (a V -a)
is a tautology.
Solution.
(a) If I(a) = F and I(b) = T, then l(a v-b) = F, so 1(0) = F.
(b) The first clause is a tautology, since b v -b alone is a tautology. The second clause is
a tautology, since c V -c alone is a tautology. The third clause is also a tautology.
Theorem 3.
(a) 
Let 41,42 ..... 4k be clauses for k e N. Let
4 =41 A42 A--. A4k
Then, 4 is a tautology if and if every 4i is a tautology.
(b) Let k.,.2 ...... km be literals for some m. Let
Oi = )11 V X2 V .- Vm

Normal Forms 
Then, Oi is a tautology if and only if Oi contains two literals, )Xa and Xb, where X-a = 
')b
and 1 <a A b <im.
Proof. The proofs of parts (a) and (b) just formalize what was done in Example 10. 
U
2.5.6 
The Famous P 5# VAP Conjecture
How easy is it to test whether a formula in DNF is satisfiable or whether a formula in
CNF is a tautology? One way to check whether a CNF formula q5 is satisfiable is to write
its truth table, but this can be a time-consuming process. A formula 4 with n symbols
may contain more than n/4 different proposition letters. The truth table has to have a
row for each assignment of T's and F's to these n/4 proposition letters-thus, 2 n/4 rows.
Hence, for some formulas, the size of the truth table is exponentially larger than the size
of the formula. Consequently, this does not give a practical way to check satisfiability. Just
check how many rows that is for n = 1000, because it's common, for example, in computer
hardware verification applications to have more than 1000 variables.
Another way is to find an equivalent formula 0' in DNF. Now, the construction given
in the proof of Theorem 1 (Section 2.5.1) requires writing down the truth table for •, so
that method is too slow. Maybe, however, there is a faster way to find such a formula •' in
DNF. If so, that may provide a way to check satisfiability. Unfortunately, this approach also
is not, in general, practical: The shortest such formula 0' may itself be far longer than 0.
It turns out that there is a reasonably fast algorithm for checking satisfiability for CNF
formulas
0 = ()X0 V XI) A (P 2 V ;- 3) A ... A (X2n V X2n+l)
where each clause contains at most two literals-formulas in what is called 2-CNE
However, if the clauses are allowed to contain even three literals (3-CNF), then the an-
swer is unknown. This problem is called the 3-satisfiability problem.
The 3-satisfiability problem is one of a large group of problems called H/P-complete
problems, which will be discussed further in Section 5.3.5. Another famous AHP-complete
problem is a form of the traveling salesperson problem, which will be discussed in Chapter
7. The commonly believed conjecture, called the P A HP conjecture, is that no HVP-
complete problems can be solved, in general, by algorithms that are even remotely prac-
tical. However, the conjecture is neither proved nor disproved (at least as of the time this
book was written), and it appears to be a very hard mathematical problem. It is considered
by many to be the most important unsolved problem in theoretical computer science-and
one of the most important unsolved problems in all of mathematics.
2.5.7 
Resolution Proofs: Automating Logic
The ancient dream of automating reasoning will require a computer program to be able to
arrive at conclusions using rules of inference such as those shown in Table 2.6. One attempt
to automate reasoning in a special context was made by John R. Robinson, who used a
single inference rule called resolution. This inference rule deals exclusively with formulas
in CNF (clauses). As a simple example of this inference rule, called the resolution rule,
suppose the two clauses

CHAPTER 2 
Formal Logic
p v -q and r v q
are given. What conclusion is possible for the conjunction of these two clauses as a hy-
pothesis? In the resolution system, we are interested in the implication
((p V -,q) A (r V q)) -- (p V r)
It is easy to prove using a truth table that this implication is always T. With this inference
rule, we can then use the clause p V r as another clause in the resolution system. The reso-
lution rule uses only this inference rule with formulas in CNE We often display this rule as
p V --q
r Vq
p vr
Definition 4. 
Let two clauses cl 
4 v p and c2 = Vf v --p be given where p is a propo-
sition letter and 0k and 't are clauses. The resolvant of cl and C2 on p is the clause 01 V V1.
Example 11. 
Let cl = p v --q v r and c2 = -'p v r v s V t. The resolvant of clauses Cl
and C2 on p is
-,qvrvrvsvt=--qvrvsvt
In a resolution proof or resolution refutation, we imagine the conjunction of a set of
clauses being the hypothesis for an implication. The resolution rule can be used to see if
the set of clauses is satisfiable. If the conjunction of the set of clauses is F, then the set of
clauses is unsatisfiable. We formalize the idea of this proof technique in the next definition.
Definition 5. 
Let S be a set of clauses. A resolution refutation of S is a sequence of
clauses ro, rl, .... , rk such that:
(a) each ri is either an element of S or a resolvant of rj and rk where 0 < j 7• k < i < k,
and
(b) rk = F.
Example 12. 
Let S be the set of clauses {p, -p v --q, -'p v q v r, -,r}. Give a resolu-
tion refutation of S.
Solution. 
The right-hand column of the following table just explains why each step is
valid. The left-hand column simply numbers the lines so that we can refer to them later.
Proof Step 
Clause 
Justification
ro 
p 
Element of S
rl 
--p V -q 
Element of S
r2 
--q 
Resolvant of ro and rl on p
r0 
--,p V q V r 
Element of S
N 
q V r 
Resolvant of ro and r3 on p
r5 
r 
Resolvant of r4 and r2 on q
r6 
--r 
Element of S
r7 
F 
Resolvant of r5 and r6 on r 
U

Exercises 
Example 13. 
Let S = {p V q, p V --q, -p v q, -- p V -q}. Give a resolution refutation
for S (plus comments, as noted in Example 12 above).
Solution.
Line 
Proof Step 
Justification
ro 
p V q 
Element of S
rl 
-pvq 
Element of S
r2 
q 
Resolvant of ro and rT on p
r3 
p v -q 
Element of S
r4 
--p V -q 
Element of S
r5 
-q 
Resolvant of r3 and r4 on p
r6 
F 
Resolvant of r2 and r5 on q 
U
A proof method is sound if everything that is provable is true or satisfiable. Here,
that means that for any set S of clauses, if there is a resolution refutation of S, then S is
unsatisfiable.
A proof method is complete if everything that is true is provable. If there is a resolution
refutation of a set of clauses S, then S is not complete, since some things that are not true
are provable-that is, any set of clauses for which there is a resolution refutation.
rn 
Exercises
1. Write DNFs and CNFs corresponding to each of the following truth tables:
(a) 
p 
q 
r 
Truth Value 
(b) 
p 
q 
r 
Truth Value
T 
T 
T 
T 
T 
T 
T 
F
T 
T 
F 
T 
T 
T 
F 
T
T 
F 
T 
T 
T 
F 
T 
F
T 
F 
F 
F 
T 
F 
F 
T
F 
T 
T 
F 
F 
T 
T 
F
F 
T 
F 
F 
F 
T 
F 
F
F 
F 
T 
T 
F 
F 
T 
T
F 
F 
F 
F 
F 
F 
F 
T
(c) 
p 
q 
r 
Truth Value 
(d) 
p 
q 
r 
s 
Truth Value
T 
T 
T 
T 
T 
T 
T 
T 
F
T 
T 
F 
T 
T 
T 
F 
T 
F
T 
F 
T 
F 
T 
T 
F 
F 
T
T 
F 
F 
T 
T 
F 
T 
F 
T
F 
T 
T 
F 
F 
T 
T 
T 
F
F 
T 
F 
F 
F 
T 
T 
F 
T
F 
F 
T 
T 
F 
T 
F 
T 
T
F 
F 
F 
F 
F 
F 
F 
F 
T

CHAPTER 2 
Formal Logic
(e) 
p 
q 
r 
s 
Truth Value 
(f) 
p 
q 
r 
s 
Truth Value
T 
T 
T 
T 
F 
T 
T 
T 
F 
T
T 
T 
F 
T 
T 
T 
T 
F 
F 
F
T 
F 
T 
F 
T 
T 
F 
F 
F 
T
F 
T 
F 
T 
F 
F 
T 
T 
F 
T
F 
T 
F 
F 
T 
F 
T 
F 
T 
F
F 
F 
T 
F 
F 
F 
F 
T 
F 
F
F 
F 
F 
F 
F
2. Find formulas in DNF equivalent to each of the following formulas:
(a) -(p A T)
(b) ((p -
q) -+ r) -
F
(c) ((p 
q) 
r)- 
T
(d) (p 
q) +-). r
(e) --(p <+- q) +-* r
(f) ((p v q) --> r) A (r -- '(p v q))
(g) (-,r) -- (((p v q) --+ r) -+ -q)
3. Which of the following DNF formulas are satisfiable? If the formula is satisfiable, give
an interpretation that satisfies it. If it is not satisfiable, explain why not.
(a) (aAbAc)v(cA-,cAb)
(b) (aAbAcAdA-,b)V(cAdA-.CAeAf)
(c) (aAbAc)V(-aA-,bA-,c)
4. Find formulas in DNF equivalent to each of the following formulas, and find at least
two interpretations that make each formula satisfiable:
(a) ((p -- q) -- r) -+ F
(b) -- (p -- 
q) + r
(c) (-"r) -+ (((p v q) -* r) --* -q)
5. Find formulas in CNF equivalent to each of the following formulas:
(a) -(p A T)
(b) ((p -- q) -- r) -
F
(c) ((p 
q) 
r)- 
T
(d) (p - q) +-+ r
(e) -- (p +-+ q) +-+ r
(f) ((p v q) --+ r) A (r --* 
(p v q))
(g) (-r) -* (((p v q) -+ r) -* -q)
6. For the following formulas find equivalent formulas in CNF and DNF form. Draw
combinatorial networks corresponding to the original formulas and their equivalent
CNF forms.
(a) (pAq) +* (pAr)
(b) ((p -
q) -+ r) -- p
7. Which of the following formulas in CNF are tautologies? Explain, as in Example 6.
(a) (avbVc)A(cv--cvb)
(b) (avbvcvdv-'b)A(cvdv-'cvevf)
(c) (avbvc)A(-'aV-bv-c)

Exercises 
8. Find a CNF for each of the following formulas, and prove that each formula is a
tautology.
(a) (p Ap) +-p
(b) (p A (p -* q)) -
q
(c) (p -+(r -
q)) 
- ((p A r) -)- q)
(d) (p -- r) 
(--r -
p)
9. (a) Show that the following formula in CNF is unsatisfiable:
(p V q) A (p V --q) A (-'p V q) A (-p V --q)
(b) Show that the following formula in CNF is unsatisfiable:
(p V q V r) A (p V -q V r) A (-p V q V r) A (--p V --q V r)
A (p V q V -'r) A (p V -q V --r) A (-'p V q V -"r) A (-p V -,q V -,r)
Can you find an easier argument than just writing the entire truth table?
(c) Generalize the above to some class of CNF formulas on an arbitrary number n > 1
of proposition letters, and prove it by induction on n.
10. (a) Prove that the formula -p is not equivalent to any formula built from the proposi-
tion letters T and F using only A and V plus parentheses.
(b) Prove that the formula p V q is not equivalent to any formula built from the propo-
sition letters using only +*.
(c) Prove that there is a formula not equivalent to any formula built from the proposi-
tion letters using only v. (See Exercise 22 in Section 2.4.)
(d) Prove that there is a formula not equivalent to any formula built from the proposi-
tion letters using only -) plus parentheses.
11. Write pseudocode for a program that, given a formula 0, finds (i) a logically equivalent
formula 0' in CNF and (ii) a logically equivalent formula 0" in DNF The algorithm
should be recursive (similar to an induction on formulas) and should not involve the
construction of truth tables. Prove the algorithm works. This gives an alternate proof
of the theorem that every formula is equivalent to a formula in CNE
Definition 
A k-term is a conjunction of k literals. A k-DNF formula is a disjunction of
k-terms.
12. (a) Show that every formula containing only k (different) proposition letters is equiv-
alent to a k-DNF formula.
(b) Show that p ++ q is not equivalent to any 1 -DNF formula.
(c) Show that for every natural number k (including 0), there is a formula contain-
ing only k + 1 (different) proposition letters that is not equivalent to any k-DNF
formula.
13. (a) Find the resolvant of (p V q) and (-'p V r) on p.
(b) Find the resolvant of (p V q V r V s) and (-p V -q V t) on p.
(c) Find the resolvant of (p V q) and -p on p.
(d) Find the resolvant of (p) and (-p) on p.
(e) Which resolvant above from parts (a) through (d) is a tautology? Which is tauto-
logically false?
14. Write resolution refutations of the following sets of clauses. Include line numbers and
justifications, as in Example 12.

CHAPTER 2 
Formal Logic
(a) 1p, -p V q, --p V -q V r, -•r
(b) {-p, p V q, -q v -r, p V r}
(c) {p V q, -'p v r, -q V r, -p V s, -q V s, -r V -x}
(d) {p V q V r, p v q v-r, p v-q v r, p v-q v-r,-p v q V r, -pv q v -r,
-'p V -'q V r, -'p V -'q V -'r}.
15. (a) Show that if r is the resolvant of two clauses Cl, c2 on proposition letter p, then
{Cl, C2} = r
(Hint: For each interpretation, break into cases, depending on whether p is T or
F in each interpretation.)
(b) Prove that if there is a resolution refutation of a set S of clauses, then S is unsatis-
fiable. (Hint: Use strong induction on the length of the resolution refutation.)
16. The length of a clause is the number of literals in the clause. The length of a CNF
formula is the sum of the length of its clauses. The number of excess literals in a CNF
formula is the length of the formula minus the number of clauses in the formula.
(a) Show that if an unsatisfiable set S of clauses contains only clauses of length 0 and
1, it has a resolution refutation. (Hint: Prove the following: If S contains a clause
of length 0, it has [trivially] a resolution refutation. If, for some proposition letter
p, S contains both p and --p, then S has a resolution refutation. Otherwise, S is
satisfiable.)
(b) Show that if a set {(;1 V )`2 V ... V X)k V Xk+Il} U S (k > 1) of clauses is un-
satisfiable, so are {I 1 V X2 V Xk} U S and {)k+l} U S. (Hint: For the first half,
prove that if an interpretation I satisfies {[)1 V ) 2 V ... V )1} U S, it also satisfies
{) 1 V X2 V ... V -k V Xk+l} U S.)
(c) Show that for k > 1, the number of excess literals in {)`1 V X2 V ... V )k} U S and
the number of excess literals in {)k+ } U S are both less than the number of excess
literals in {A1 V )`2 V .. 
V 4k V 
k+0} U S.
(d) A resolution derivation of a clause rk from a set S of clauses is a sequence
ro, rl, r2 ..... 
rk of clauses where each ri is either an element of S or a resolvant
of two previous rj 's. (Thus, resolution refutation of S is just a resolution deriva-
tion of F from S.) Show that if there is a resolution derivation of A from S and a
resolution refutation of S U {[I, then there is a resolution refutation of S.
(e) Prove that if there is a resolution refutation p of {X1 V X2 V ... V Ak} U S, then
either (i) there is a resolution refutation of {01 V ;A2 V ... V Ak V 4k+1} U S or
(ii) there is a resolution derivation of Xk+1 from X1 V X2 V ... 
V Ak V Ak+l U S.
(Hint: Prove this by induction on the length p. You will have to add Ak+l as a
disjunct to some of the clauses in p. It is not true in general that if S • A, then
there is a resolution derivation of A` from S.)
(f) Prove that resolution refutation is complete.
rnPredicates and Quantification
In propositional logic, our basic "objects" were entire statements, represented by proposi-
tion letters. In discussing mathematical structures, however, we want to be able go one step
"lower" to assert statements, such as x = 3 or x > y, where the meanings of x and y are

Predicates and Quantification 
not fixed for all time. We want to allow variables (or variable symbols), such as p and q,
which represent elements of some nonempty universal set. These variables are not propo-
sition letters, because they do not evaluate to T or F. Rather, after an assignment of values
to the variables, such as 2 to x and 5 to y, the predicates, such as x = 3 or x > y, become
2 = 3 and 2 > 5, both of which are F. We can think of similar instances in natural language
when we assert "He is tall and she is of average height." The pronouns he and she can be
thought of as placeholders or variables representing a range of particular men or women.
2.7.1 
Predicates
A property or relationship between objects is called a predicate. A description of a predi-
cate in logic is called a formula.
A formula such as x < 3 is an atomic formula, built with the predicate <. An atomic
formula is a formula for which the terms do not involve any of the logical operations (and,
or, implication, biconditional, negation), only proposition letters and constants from the
universal set. The predicate < is binary or (2-ary); it represents a relationship between
two objects. The first object is a variable x; the second is a constant 3. If a specific value
x0 is substituted into the predicate for x, it becomes x0 < 3. Now, if x0 = -37, then x0 < 3
evaluates to T. If x0 = 6, then x0 < 3 evaluates to F. When a predicate involves n argu-
ments, it is said to be n-ary; we write an n-ary formula P(xl, x2, ... 
Xn).
Example 1. The following are predicates:
(a) Let P(x, y, z) denote "x + y = z."
(b) Let Q(x1 , X2) denote "xl - x2 > 0."
(c) Let M(x, y) denote "x is married to y."
(d) Let E(x, y) denote "x = y."
Once we are given a group of predicates, we may refer to them in formulas. So,
P(x, y, z), Q(x1 , x2), M(x, y), and E(x, y) are all atomic formulas. The variable names
are not important, so P(xI, z, x2) and Q(y, y) are also atomic formulas. Just as in usual
notation, Q(y, y) denotes "y - y > 0."
In normal uses of logic, the universal set U and the meanings of all predicates, such
as < or a variable P, are specified. We limit ourselves to this understanding.
2.7.2 
Quantification
If we have a predicate, such as <, that is defined on two objects, then logic gives us two
ways to specify what objects we mean. One way is to specify values from the universal
set, such as 3 < 6. Another way is called quantification. It comes in two forms: universal
quantification, denoted by the symbol V; and existential quantification, denoted by the
symbol 3.
The first form is universal quantification for the predicate P, such as.
Vx (P(x)) read "For all x, P(x)"
is defined to mean "For all values x in the universal set U, the assertion P(x) is true."

CHAPTER 2 
Formal Logic
The second kind of quantification is existential quantification for the predicate P, such
as
3x (P(x)) read "For some x, P(x)" or "There exists an x such that P(x)"
is defined to mean "For some value of x in the universal set U, the predicate P(x) is true."
Following the Vx or Ix, there is a formula in parentheses, such as (P (x)), although we
occasionally omit the parentheses. That formula, plus the Vx or the 3x itself, is called the
scope of the quantifier. Informally, we may leave out the parentheses, writing, for example,
just Vx P(x), but that is informal. The definition of scope is defined as if we had not left the
parentheses out. A similar idea of scope occurs in most computer programming languages.
In Section 2.7, we simply want to introduce predicates, formulas, and the use of quan-
tifiers. First Order Logic deals with predicates and quantification in much the same way as
propositional logic deals with propositions. We will focus on how universal and existential
quantifiers interact with each other and how they interact with negation. The study of in-
ferences in First Order Logic and other topics that we dealt with in propositional logic will
not be covered.
Example 2. 
For the universal set N and the usual meanings of the symbols - and =,
determine whether
3x(x -
3 = 1)
is true.
Solution. We must find some x E N such that x - 3 = 1 is true. Choosing x = 4 is such
a value. 
Clearly, many values for x may make the predicate T in Example 2. The quantifier
3x just says that we can definitely find one, if the predicate is T. The quantifier does not
exclude the possibility of finding more than one value for x that makes the predicate T.
2.7.3 
Restricted Quantification
It is understood that the universe U contains every object of concern to the current discus-
sion. In many applications, we want to discuss something more limited. Suppose V C U:
Vx E V (P(x)) 
read "For all x in V, P(x)"
is defined to mean "For all values x in V, the assertion P (x) is true." Then,
3X E V(P(x))
read "For some x in V, P(x)" or 
"There exists an x in V such that P(x)"
is defined to mean "For some values of x in V, the assertion P(x) is true.'
Let i, j E N such that i < j. A set of j - i + 1 consecutive storage locations that can
contain the same type of values will be called an array, denoted as A[i .. j], where A
is any variable name. The contents of the individual storage locations will be denoted as
A[i], A[i + 11 ... 
I A[j]. For N E N, both A[0, .. N -
1] and A[l .. N] denote an array
with N elements.
Example 3. 
Let V = {1, 2,..., 301, and let A[1.. 30] be an array such that for each index
i between 1 and 30, A[i] = i • i - 1. For the elements A[l], A[2] .... 
A[301, write a
predicate that says:
(a) Every entry in the array is nonnegative.
(b) The value A[30] is the largest value.
(c) That every element of A is nonzero.

Predicates and Quantification 
Solution.
(a) Vi E V (A[i] > 0)
(b) Vi e V (A[i] <A[30])
(c) Vi E V (A[i] 
0) 
M
If V = 0, it is understood that Vx e V (S) is true and that Ix E V (S) is false, no matter
what S is.
2.7.4 
Nested Quantifiers
The formula 3x(3y(P(x, y))) contains nested quantifiers, with one quantifier inside the
parentheses marking the scope of the other. The obvious parentheses are usually omitted,
writing "3x3yP(x, y)." Since the two quantifiers are both 3's, you may also see "3x, y,
P(x, y)."
It is important to pay attention to the order of the quantifiers. Suppose P(x, y) is "x
received a higher grade on the exam than y did," and suppose U is the set of all students in
a class. To show that 3x(3y(P(x, y))), we start with the quantifier on the outside: We first
look for a student, x0 E U, to be represented by x. Now, we have a formula 3y(P(xo, y)).
Next, look for an object Yo E U to be represented by y. To show that the formula is true,
first pick an x0 who got a higher score, and then pick a yo who got a lower score.
If we meant to choose y first, we would write 3y(3x(P(x, y))). In this case, it does
not matter in which order we make the choices. One can see that the formula is true if and
only if not all students got the same score. Just pick x0 to be some student who got a higher
score than the score achieved by y. Since not all the scores are the same, it will always be
possible to make such choices.
To show with nested universal quantification that
Vx (Vy (x and y drive stick-shift cars and collect baseball cards))
is true, you must show that for all choices of x, and then for all choices of y, both x and y
drive stick-shift cars and collect baseball cards. In this case, again, the order of quantifiers
does not matter: The above is true if and only if Vy (Vx (x and y drive stick-shift cars and
collect baseball cards)) is true.
When the quantifiers switch between V and 3, the order becomes critically important.
To show that 3x (Vy (P(x, y))), you first pick a value for x0 for x from the universal set.
Then, you must show that no matter what value yo is chosen for y, P(xo, Yo) is true.
Example 4. 
Let P (x, y) denote x + y = 17, and let U be the set of integers. Show that
(a) Vx (3y (P(x, y))) is true.
(b) 3y (Vx (P(x, y))) is false.
Solution.
(a) First, x is specified as any integer. Now, you have to pick y to make P (x, y) true. For
example, pick y = 17 - x.
(b) To show this, you would have to pick a single yo so that for all x E U, x + yo = 17.
Since this must be true for all possible values of x, it must be true in particular for
x = 0 and x = 1-that is, for 0 + Yo = 17 and 1 + yo = 17. Those two cannot both
be true. 

CHAPTER 2 
Formal Logic
Generally, if 3x (Vy (P(x, y))) is true, so is Vy (3x (P(x, y))): If the first is true, then
one can pick x0 where Vy (P(xo, y)). In that case, for each individual y, one can pick that
same value x0 to make P(xo, y) true, so Vy (3x (P(x, y))) is true. The converse, however,
is false, as Example 4 in Section 2.7.4 shows.
2.7.5 
Negation and Quantification
One has to be careful about how negation interacts with quantification-partly because in
ordinary human conversation, people are not always very precise.
The formula -'(3x (P(x)) says that there does not exist even one x in the universal set
that makes P (x) true. This is the same as asserting that every x in the universal set makes
P false. Thus,
--(3x (P(x))) is logically equivalent to Vx (-'P(x))
Analogously, --(Vx (P(x))) says that P(x) is not true for all x in the universal set.
That is, there is at least one x for which P(x) is false. Thus,
--(Vx (P (x))) is logically equivalent to 3x (--P (x))
One important result of these rules is that we can always "push negation inward" to be
an operator on a predicate rather than on a quantified formula. Often, it becomes easier to
understand a formula after the negations are "pushed inward." As an illustration, consider
the formulas
- (Vx (3y (P(x, y)))) 
is logically equivalent to 
3x (-' (3y ((P(x, y)))))
which is logically equivalent to 
3x (Vy (- P(x, y)))
-'(3x (Vy (P(x, y)))) 
is logically equivalent to 
Vx (- (Vy (P(x, y))))
which is logically equivalent to 
Vx (3y (- P (x, y)))
The resulting formulas with -- applied only to atomic formulas and using only the connec-
tives -, v, and A is said to be in negation normal form.
Example 5. Find formulas in negation normal form equivalent to each of the following
formulas. (In cases (c) and (d), the intended universal set is the set of all real numbers, but
that does not affect the answers.)
(a) --Vx E N (x is prime -
2 + I is even)
(b) -3x E Q (x > 0 A x3  
2)
(c) -3x (Vy (xy = y))
(d) -Vx (Vy (x < y -). (3z (x < z A Z < y))))
Solution. 
We use 4:' to mean "is logically equivalent to."
(a) 
-(Vx 
E N (x is prime -+ x2 + 1 is even))
3.x E N-N- (x is prime --* x2 + I is even)
S3x e N - (x is not a prime V (x2 + 1 is even))
3X E N (x is prime A -(x 2 + I is even))

Predicates and Quantification 
If we go beyond pure logic and use English synonyms, we can further simplify that
last expression to 3x E N (x is prime A (x2 + 1 is odd)).
(b) 
(ýx E•Q (x> 0 A x3 = 2))
<*, Vx E Q (--(X > 0A X3 = 2))
€,Vx E Q (-• (x > O) v -• (xI = 2))
:VX EQ(X <OVX3 #2)
(c) 
-'3x(Vy(xy = y))
V 'lx (-3y (xy = y))
SVx(3y(--(xy = y))
€•Vx(3x(xy A y))
(d) 
-(Vx (Vy (x < y -
(3z (x < z) A (Z < y))))))
.' 
3xx(-,(Vyy(x < y -+ (3x((x < Z) A (x < y))))))
.4* 3x3y--(x < y --* (3z((x < Z) A (z < y))))
3• 
qx3y(--(-'(x < y) V (3Z((x < Z) A (Z < y)))))
.: 
3x3y((x < y) A --(3z((x < Z) A (Z < y))))
,3 2x3y((x < y) A (Vz-((x < z) A (z < y))))
3 2x3y((x < y) A (VZ((X > Z) V (Z > y))))
The last step used DeMorgan's Law.
Again, we note that putting formulas into negation normal form often-although not
always-makes them more comprehensible.
2.7.6 
Quantification with Conjunction and Disjunction
Predicates can be joined by the usual logical operations. Note the English translations of
the following formulas:
Formula 
English Translation
3x (P(x) A Q(x)) 
"For some particular choice of x,
both P(x)
and Q(x) are true."
Vx (P(x) A Q(x)) 
"For every choice of x,
both P(x)
and Q(x) are true."
3x (P (x) v Q (x)) 
"For some particular choice of x,
P(x) or Q(x)
(or both) is true."
Vx (P(x) V Q(x)) 
"For every choice of x,
P(x) or Q(x) (or both) is true."
Example 6. 
For the universal set N, is 3x ((x + 3 = 2) A (x -
2 = 1)) true?
Solution. For any x, if x + 3 = 2, then x must be - 1. If x - 2 = 1, then x = 3. So, no
choice of x makes both true. 
U

CHAPTER 2 
Formal Logic
Example 7. 
For the universal set N, is 3x ((x -
3 = 1) A (x > 3)) true?
Solution. Since the quantifier is 3x, there need be only one such x for the formula to be
true; 4 is such an x. 
U
Example 8. 
For the universal set N, which of the following formulas are true?
(a) 3x((x+3=2) V(x-2= 1))
(b) 3x ((x . x -
3 =) 
v (x > 3))
Solution.
(a) True; choose x = -1. Because -1 + 3 = 2 is true, (-1 + 3 = 2) v (-1 -2 
= 1) is
also true.
(b) Also true; choose x = 4. Then, 4 > 3 is true, so the disjunction is also true. How about
x =2,2.2-3=1. 
U
Example 9. 
In universe N, which of the following formulas are true?
(a) Vx ((x 2 -
2x + 1 = 0) V (x > x))
(b) Vx ((x < 3) v (x > 3))
Solution. This solution is left as an exercise for the reader. 
U
In Table 2.10 we summarize the relationship between quantification and A and v.
Since all the logical operators can be expressed in terms of - and A or -- and v (see
Exercise 1 in Section 2.9.4), this table should provide a guide to answering questions about
the relationships between other logical operators and quantification. Below, 4) =• * stands
for "40 logically implies 4'," and 4) .ý *' stands for "o) is logically equivalent to 4'."
Logical Relations for Quantified Formulas
in One Variable
3x (P(x) A Q(x)) 
=: 
(3x P(x)) A (=x Q(x))
3x (P(x) v Q(x)) 
(3x P(x)) v (3x Q(x))
Vx (P(x) A Q(x)) 
€ (Vx P(x)) A (Vx Q(x))
(Vx P(x)) V (Vx Q(x)) 
W= Vx (P(x) V Q(x))
The formulas 3x P(x) A 3y P(y) and 3x 3y (P(x) A P(y)), at first sight, both seem
to say that there are (at least) two objects satisfying predicate P. This, however, is not true.
There is nothing in the formula saying that x : y-that is, that x and y refer to different
objects. So, both formulas say there is (at least) one object satisfying P. To say there are
two different objects satisfying P, one would have to say they're different-for example,
3x 3y (P(x) A P(y) A x 0 y)
Example 10. 
For an array of 20 entries with integer entries, write a predicate that says
all the elements are distinct.
Solution. Let V = { 1, 2. 
201 represent the indexes for the entries into an array
A[ 1.. 20]. Now,
Vm E V (Vn E V ((m :A n) -* (A[m] A A[n]))
says that all the elements are distinct. In this case, another predicate is Vm E V (Vn E
V ((m < n) -- (A[mi] : A[n]))). We leave it for the reader to explain why. 

Predicates and Quantification 
Note that in two of the lines in Table 2.10 we said "." and that in two we said just
"=." 
We leave it for the reader to find examples of the following:
(3x P(x)) A (3x Q(x)) A --3x (P(x) A Q(x))
and 
Vx (P(x) V Q(x)) A --(Vx P(x)) V (Vx Q(x))
2.7.7 
Application: Loop Invariant Assertions
One of the most difficult aspects of computer programming is establishing whether pro-
grams produce the correct output. In principle, there is no way to establish the correctness
of all correct programs. (This was proved by Alan Turing.) Tools for establishing correct-
ness, however, do exist for many programs.
The simplest method for checking a program is to test it: Run it on some sample
values, and check whether it produces the correct answers. Testing is often an effective
method for showing that a program is incorrect, but unfortunately, one cannot normally
check all possible inputs-nor even a significant fraction of the possible inputs. Therefore,
one cannot check that a program is correct.
Another method that is often useful is to write a mathematical proof of program cor-
rectness. One of the difficulties in this case is finding tools for proving that any loops
accomplish what they are supposed to.
A somewhat similar problem is encountered in making it obvious to someone else
who is reading the program that the program works correctly. Many algorithms use tricks
that vary from not quite obvious to totally obscure. What is an easy read and short way to
present the trick and explain why the algorithm works? For example, how can one explain
what a loop is accomplishing?
One method that is often useful employs loop invariant assertions. We will explain
these in terms of a familiar algorithm, (one version of the) BubbleSort. We choose Bubble-
Sort not because it is a good sorting algorithm-for most purposes, it definitely is not-but
because it is short and easy to understand.
INPUT: An array A [ 0. . N -
1I] of N integers
OUTPUT: The same array, with its elements sorted into nondecreasing order
for limit = N -
2 down to 0
for position = 0 up to limit
if (A [position ] > A [position + 1 1)
then swap the values of A [position ] and A [position + 1]
A reason this algorithm works is that after k passes through the outer loop, the largest
k elements have reached the last k positions in the array-and in the correct order as well.

CHAPTER 2 
Formal Logic
A formula that states this property is intuitively easy to understand, but it is not so easy
to state formally. Part of the formula is that after k passes through the outer loop, the last
k elements (in positions N - k, N - k + 1 ...
, N - 1) are in increasing order and are
larger than or equal to all elements of the array that occur in positions 0, 1 .... 
k - 1. We
can state more, since the elements in positions k, k + 1 .... 
j - 1 also have values that
are less than the value of the element at position j. Thus, for any position j among the last
k positions, the value in each position i where 0 < i < j is less than or equal to the value
in position j.
Let Ind denote the set {0, 1 .
N -
11 of legal indices for array A:
Vi E IndVj E Ind((O < i) A (i < j) A (j > (N - k)) -- (A[i] < A[j])
For k = 0, this says that
Vi E IndVj E Ind(i < j A j > N -* A[i] < A[j])
which is a true predicate, because j > N is false, making this an implication with hypothe-
sis FALSE. When k = N - 1, we are claiming that all the elements are in increasing order.
The predicate is
Vi E IndVj E Ind(i < j A j > 0 -+ A[i] < A[j])
The reader should verify that this does mean that the elements of the array are in increasing
order. This predicate can be put into the code as a comment called a loop invariant assertion,
as seen in the Outer Loop Invariant algorithm. (We now go back to informal usage and use
both the < and the < symbol in the formula.)
tINPUT: An array A [ 0. . N -
1] of N integers
OUTPUT: The same array, with its elements sorted into nondecreasing order
for limit = N -
2 down to 0
/* loop invariant for limit loop
Vi E IndVj e Ind((i < j A j > limit + 1) -) (A[i] < A[j]))
*/
for position = 0 up to limit
if (A[position] > A [position + 1 ]) then
swap the values
When limit = N - 2, j > N - 1 is false, because 0 < j < N - 1. Therefore, the im-
plication is TRUE. When limit = -1 and the loop terminates, the implication says that,

Exercises 
for i < j and j > 0, A[i] < A[j]-that is, that the elements of A are in increasing or-
der. The loop invariant here is a formula that is supposed to be true at the beginning of
each pass through the loop as well as true after the last pass, when control returns-(here
with limit = -1) to test that the loop is finished. The accepted formal language for loop
invariant assertions uses quantified formulas.
W 
Exercises
Let U = {1, 2, 3, 4) be the universal set for Exercises 1 through 4.
1. Rewrite (Vx e U) P (x) as a conjunction that uses no quantifiers.
2. Rewrite (3x e U) P (x) as a disjunction that uses no quantifiers.
3. Rewrite -(Vx e U) P(x) as a conjunction that uses no quantifiers.
4. Rewrite --(3x) P (x) as a conjunction that uses no quantifiers.
5. For the following predicates with universal set IR, state the meaning of the predicate in
a sentence. If it is false, give an example to show why. (Example: Vx (ly (x < y)) says
"for every real number, there is a bigger number." This is true.)
(a) Vx(3y(x 0 0 -- xy = a))
(b) 3y(Vx(x # 0 -- xy = 1))
(c) 3x(Vy(y < x))
(d) Vx(3y(x + y = x))
(e) 3y(Vx(x + y = x))
(f) Vx(Vy(3z(x < Z A Z < y)))
(g) Vx(Vy(x 0 y -* 3z((x <Z AZ <y) V (x > Z A Z>y))))
(h) Vx(Vy(Vz((x > y A y > Z) -) x > Z)))
6. For each of the following formulas write a formula 0 (using quantifiers) expressing
the formula, find a formula in negation normal form equivalent to -'4, and express the
meaning of the negation in words.
(a) For every x and for every y, x + y = y + x.
(b) Every number x has a square root. (Do not use the square root symbol; use only
multiplication.)
(c) For some y, 2x 2 + 1 is always greater than x 2y. (Hint: In this example, "always"
suggests a universal quantifier.)
(d) For some x and y, x < y, and x3 - x > y 3 _ y.
(e) For every x and y, there is a z where 2z = x + y.
(f) For every x and y, if x3 + x - 2 = y3 + y - 2, then x = y.
7. For each quantified formula that follows: find a universe U and predicates A and B in
which the formula is true and U, A and B in which it is false.
(a) Vx(((A(x) V B(x)) A --(A(x) A B(x)))
(b) VxVy(P(x, y) -
P(y, x))
(c) Vx(P(x) -
3yQ(x, y))
(d) 3x(A(x) A VyB(x, y))
(e) VxA(x) -- (VxB(x) -+ 
(Vx(A(x) -+ B(x))))

CHAPTER 2 
Formal Logic
8. For the following formulas, let the universe be R. Translate each of the following
sentences into a formula (using quantifiers):
(a) There is a smallest number.
(b) Every positive number has a square root. (Do not use the square root symbol; use
only multiplication.)
(c) Every positive number has a positive square root. (Again, do not use the square
root symbol; use only multiplication.)
9. For the following formulas, let the universe be R. Translate each of the following
sentences into a formula (using quantifiers):
(a) There is no largest number.
(b) There is no smallest positive number.
(c) Between any two distinct numbers, there is a third number not equal to either of
them.
10. Let U be the set of all problems on a comprehensive list of problems in science. Define
four predicates over U by:
P (x): x is a mathematics problem
Q(x): x is difficult (according to some well-defined criterion: it does not matter for us
what the criterion is)
R(x): x is easy (according to some well-defined criterion)
S(x): x is unsolvable (if you do not know what "unsolvable" means, do not worry
about it here)
Translate into English sentences each of the following formulas:
(a) VxP(x)
(b) 3xQ(x)
(c) Vx(Q(x) v R(x))
(d) Vx(S(x) --* P(x))
(e) 3x(S(x) A -'P(x))
(f) -'(Vx(-'R(x) V S(x)))
(g) Vx(P(x) -- (Q(x) *" -R(x)))
(h) Vx-S(x)
(i) 
Vx(P(x) -- -S(x))
(j) Vx(P(x) -+ (R(x) V S(x)))
(k) 3x(-Q(x) A -R(x))
(1) 3x(R(x) A S(x))
(m) Vx(Q(x) -+ -R(x))
11. Let the universe U be the set of all human beings living in the year 2001, and translate
the following English sentences into quantified formulas. Let P(x) stand for "x is
young," Q(x) for "x is female," and R(x) for "x is an athlete."
(a) "All athletes are young."
(b) "Not all young people are athletes."
(c) "All young people are not athletes." (Warning: In informal English, this sentence
has two quite different meanings. One is "more grammatically correct" than the
other, however, and that is the one we're asking for.)
(d) "Some young people are not athletes."

Exercises 
(e) 
"Some athletes are young females."
(f) 
"All athletes are young males."
(g) "Some athletes are female and are not young."
(h) "Some young females are not athletes."
(i) 
"All young females are athletes."
(j) "Some athletes are not young."
(k) "No young people are athletes."
(1) "All athletes are either female or are young."
(m) "If all athletes are female, then all athletes are young; otherwise, no athletes are
young.'
12. Give an example of a universal set U and predicates P and Q such that (VxP(x))
(VxQ(x)) is true but Vx(P(x) --* Q(x)) is false.
13. Translate each of the following quantified formulas into an English sentence where the
universal set is R. Label each as true or false.
(a) Vx(3y(xy = x))
(b) Vy(3x(xy = x))
(c) Vx(3y(xy = 1))
(d) 3y(Vx A O(xy = 1))
(e) 3x(Vy(xy = x))
(f) (Vx(x A 0-- 3y(xy = 1))
14. Write a formula "saying" that at least four distinct objects satisfy predicate P.
15. For any two integers m and n, we say m divides n if there is an integer k such that n =
ink. (Many programming languages give easy ways to say that, such as n % m == 0
or n div m = 0.) Define Div(m, n) to be m divides n. Translate each of the following
propositions and quantified formulas into a clear English sentence. Label each as being
true or false, with the universe as the set Z.
(a) Div(5, 7)
(b) Div(4, 16)
(c) Div(16, 4)
(d) Div(-8, O)
(e) Vm(Vn(Div(m, n)))
(f) Vn(Div(1, n))
(g) Vm(Div(m, 0))
(h) Vm(Vn(Div(m, n) -- Div(n, m)))
(i) Vm(Vn(Vp((Div(m, n)ADiv(n, p)) -- Div(m, p))))
(j) Vm(Vn((Div(m, n)A Div(n, m)) -)i m = n))
16. Find a formula in negation normal form equivalent to the negation of
3xVyVz(P(x, y, z)).
17. Find formulas in negation normal form equivalent to the negations of each of the fol-
lowing:
(a) Vx(P(x) v Q(x))
(b) vx(Vy(P(x, y) -
Q(x, y)))
(c) Vx((3yP(x, y)) -
Q(x, y))
(d) Vx(((3y(P(x, y)) -+ Q(x, y)) A 3zR(x, z)))

CHAPTER 2 
Formal Logic
(e) 3x((P(x) v Q(x)) -+ R(x))
(f) 3x((P(x) -+ Q(x)) A R(x))
18. Find a formula in negation normal form equivalent to the negation of
Vx3y((P(x, y) A Q(x, y)) -* R(x, y))
19. Give a universal set U and interpretations to predicates A, B, P, and Q so that each of
the following quantified formulas is false:
(a) (3xA(x) A 3xB(x)) -+ (3x(A(x) A B(x)))
(b) (Vx3yP(x, y)) -- (3x(VyP(x, y)))
(c) (Vx(P(x) -- Q(x))) -- ((3xP(x)) -+ (Vx)Q(x))
(d) Vx (-,A (x)) *+-• -(VxA (x))
20. To negate an expression with a single quantifier, we can replace it with the other quanti-
fier and negate the formula inside. This generalizes to an arbitrary string of quantifiers.
For instance,
-,Vx3y3zVtP(x, y, z, t)
is logically equivalent to
3xVyVz3t(--P(x, y, z, t))
Prove this generalization by induction.
21. Given an array Values with n elements
Values[0], Values[l],.... Values[n -
1]
each containing a real number, the following algorithm finds the sum of all the positive
values in Values. Write an invariant for the loop.
rollingSum = 0
fori = 0, 2 ...
, n-I
if Values[i] > 0
rollingSum = rollingSum + Values[i]
Output rollingSum
22. Challenge: A much more sophisticated sorting algorithm is the MergeSort algorithm.
It comes in various versions; we do one here. The algorithm involves copying the list
back and forth between two arrays, the input array A and an extra array B, so it takes
a lot of extra space.
Our version is not "optimized." We have attempted to keep it relatively simple to
make it as easily understood as possible. Moreover, to simplify things for this exercise,
we assume that the size of the input array is a power of 2; relatively easy adjustments
would make it work for arrays of arbitrary sizes.

Chapter Review 
INPUT: An array A [ 0. . 2N - I] of 2N integers
OUTPUT: The same array, with its elements sorted into nondecreasing order
for t =- I to 2N- l
size = 2'
for position = 1 to 2 N - I
B[position] = A[position]
loi = 0
while lol < 2N
hil = lol + size -
102 = hi1 + 1
hi2 = 102 + size -
position, = lol
position2 = 102
position3 = lo1
while position 1 < hi1 and position2 < hi2)
if B[positionj] < B[position2]
then A [position3] = B positionn]
position, = position1 + 1
else A[position3] = B[position2]
position2 = position2 + 1
position3 = position3 + 1
while (position, < hi1 )
A[position3] = B[position1 ]
position, = position1 + I
position3 = position3 + 1
while (position2 < hi2 )
A[position3] = B[position2]
position2 = position2 + 1
position3 = position3 + 1
lol = lol + 2 • size
Determine what each part of the program does (first experiment with some sample test
lists), and write loop invariants for each loop that clarify why the algorithm works.
W 
Chapter Review
Propositions are the initial focus of the chapter. After defining propositions, we introduce
common operations to make formulas from propositions. The idea of a proposition being
true is introduced. We can verify whether a formula is true for a particular set of truth
values for its propositions using an expression tree. To find out if a formula is true for
all possible truth values, we use truth tables. The notions of tautologies, contradictions,

CHAPTER 2 
Formal Logic
satisfiable propositions, and logically equivalent propositions give a fuller understanding of
the propositional logic. Both CNFs and DNFs give a method for representing any formula
using a standard format from which information is easier to determine. The last section
deals with predicates and quantification. We define predicates as natural generalizations of
propositions and formulas. The interaction of predicates and quantification is explored, as
is the interaction of quantification with the operations that are defined on propositions.
Throughout the chapter, but independent of the core material about propositional logic,
is an introduction to boolean or combinatorial circuits. First, the correspondence between
logical formulas and a boolean circuit composed of gates is introduced. After showing the
correlations between boolean algebras and combinatorial circuits, the results about boolean
algebras become a tool for simplifying circuits. Finally, CNFs and DNFs are used to find
standard representations of combinatorial circuits.
2.9.1 
Terms and Theorems
2.1 
Summary
TERMS
AND gate 
expression tree 
proposition letter
base cases 
Expression Tree for a 
propositional connective
biconditional 
Formula 
propositional constant
boolean circuit 
FALSE (F) 
(T, F)
boolean value 
formula 
propositional logic
closure rules 
gate 
semantics
combinatorial circuit 
hypothesis 
subformula
combinatorial network 
implication 
syntax
conclusion 
inductive definition 
TRUE (T)
conditional 
mean 
truth table
conjunct 
logical value 
well-formed formula
conjunction 
negation 
(wff)
disjunct 
NOT gate
disjunction 
OR gate
equivalence 
proposition
THEoREMs
Principle of Induction on Formulas
2.3 and 2.4 
Summary
TERMS
alphabetic substitution 
interpretation 
semantics
alphabetic variant 
logically equivalent 
Sheffer stroke
complementation 
logically implies 
tautologically equivalent
contradiction 
logically valid 
tautologically implies
equivalent 
meaning 
tautology
exclusive or 
satisfiable 
true in
false in 
satisfies 
unsatisfiable

Chapter Review 
THEOREMS
First Substitution Principle 
Second Substitution Principle
2.5 and 2.6 
Summary
TERMS
2-CNF 
excess literals 
resolution refutation
3-CNF 
k-DNF 
resolution rule
3-satisfiability problem 
k-term 
resolvant
clause 
literal 
sound
complete 
negative literal 
term
conjunctive normal form 
A'NP-complete
(CNF) 
positive literal
disjunctive normal form 
resolution
(DNF) 
resolution derivation
THEOREMS
Every Formula Is Logically Equivalent to 
Every Formula Is Logically Equivalent to
a Formula in CNF 
a Formula in DNF
ALGORITHMS
BubbleSort
MergeSort
Outer Loop Variant
2.7 
Summary
TERMS
array 
loop invariant 
quantification
atomic formula 
loop invariant assertion 
scope
binary 
n-ary 
universal quantification
constant 
negation normal form 
variable
existential quantification 
nested quantifiers 
variable symbols
formula 
predicate
2.9.2 
Starting to Review
1. Which of the following are propositions?
i: "The moon is visible."
ii: "The property tax rate will increase next year."
iii: "No one under 18 may buy cigarettes."
iv: "Please help me with the assignment."
(a) i and iii
(b) i and ii
(c) ii and iii
(d) All of the above

CHAPTER 2 
Formal Logic
2. Write in symbolic form the statement "Claudia will sail in the regatta if the crew is
ready and the weather is fair."
3. Write the converse, inverse, and contrapositive of the statement "If Sally finishes her
work, she will go to the basketball game."
4. What inference rule applies to the following?
Joe wrote a program in C, or George wrote a program in Java. If Joe wrote a program in
C, then the problem was solved. If George wrote a program in Java, then the problem
was solved.
(a) Contrapositive
(b) Proof by contradiction
(c) Proof by cases
(d) None of the above
5. What is the truth value that will be computed by the formula represented by the
expression tree shown if I (p) = T, I (q) = F, I (r) = T, and I (s) = F in an inter-
pretation I?
(-'(p A q) --ý r) <-* -4 (r-- s)
-(p 
A q)--- r 
(r- s)
-(r(pAq) 
r 
r- s
pAq 
r 
S
p 
q
6. What is the value of the formula represented by the expression tree in Exercise 5 given
the interpretation I(p) = T, I(q) = F, I(r) = T, and I(s) = T.
7. Write the following condition in an if... then with the negations incorporated into the
conditions themselves:
If NOT ((x < 3) OR (y > 2)), then
8. Construct a truth table for the proposition --(p A q).
9. Using the conjunctive normal form, identify values for which the statement
-(-'(p V q) A (-p V q))
is true.
10. Find the DNF for the statement
((-'p A q) V r) A (-'q v -r)
2.9.3 
Review Questions
1. Construct a truth table for the statement -'(p V q) V -(p A q).
2. Construct a truth table for the statement -- (p A q) A (p V -q).
3. For which truth values does the statement -'(p V --q) have a truth value TRUE?

Chapter Review 
4. Form a truth table for the proposition p V -,(p A q).
5. Use the substitution rule with p --* q for p, and prove that the result is a tautology for
-q --* (q -- p)
6. Prove the following identities for a boolean algebra:
(a) (-'pVq)A(pV-q)=pAqV(-pA--q)
(b) -ppv(qAr) v(pVq)A(-'pVr)-=--pVr
(c) -(-(pvq)A--(qvr))V(qAr)=pvq
7. Draw combinatorial circuits that realize the following formulas:
(a) (pAq)V(qAr)V(pA-r)
(b) -((p A q) V p) V (p A q)
2.9.4 
Using Discrete Mathematics in Computer Science
1. We built formulas with the logical operators A, V, -, -- , and * and the constants
T and F. In designing circuits, we described gates for only three connectives: A, V,
and -. Computer hardware designers might want to make as few kinds of gates as
possible. Do they really need a --- gate? (The answer turns out to be "no," but how
do you know that?) Could they get along with fewer than three types of gates? A set
of logical operators is called complete if every well-formed formula of propositional
logic is equivalent to a well-formed formula using connectives from the set.
(a) Find a formula equivalent to a -+ (b A C A d) using only the connectives - and
A (and not the constants T and F). Find the shortest such formula; does it have
more or fewer symbols than the formula a -+ (b A c A d)?
(b) 
Show that the set {-, A} of operators is complete.
(c) 
Find a formula equivalent to a --+ (b A c A d) using only the connectives - and
--* (and not the constants TRUE and FALSE). Find the shortest such formula;
does it have more or fewer symbols than the formula a -+ (b A C A d)?
(d) Show that the set {-, -+ } of operators is complete.
(e) Find a formula equivalent to a -+ (b A c A d) using only the connective --* and
the constant FALSE. Find the shortest such formula; does it have more or fewer
symbols than the formula a -- (b A C A d)?
(f) Show that the set (FALSE, --+I is complete.
2. See the definition of "complete set of operators" in Exercise 1. This problem shows
that the engineers need build only one type of gate.
(a) NAND has the truth table
p 
q 
NAND(p, q)
T 
T 
F
T 
F 
T
F 
T 
T
F 
F 
T
Show that the set {NAND} is a complete set of operators.

CHAPTER 2 
Formal Logic
(b) Find a formula equivalent to a -* (b A C A d) using only the connectives NAND
(and not the constants TRUE and FALSE). Find the shortest such formula; does
it have more or fewer symbols than the formula a --+ (b A C A d)?
(c) NOR has the truth table
p 
q 
NOR(p, q)
T 
T 
F
T 
F 
F
F 
T 
F
F 
F 
T
Show that the set {NOR} of operators is complete.
(d) Find a formula equivalent to a -+ (b A C A d) using only the connectives NOR
(and not the constants TRUE and FALSE). Find the shortest such formula; does
it have more or fewer symbols than the formula a --+ (b A C A d)?
The NAND operator is often called the Sheffer stroke and is denoted as plq.
The NOR operator is often called the Pierce arrow and is denoted as p 4 q.
3. The connective if-then-else is defined by the following truth table:
p 
q 
r 
ifp thenq else r
T 
T 
T 
T
T 
T 
F 
T
T 
F 
T 
F
T 
F F 
F
F 
T 
T 
T
F T 
F 
F
F F T 
T
F F F 
F
This connective is key in binary decision diagrams (BDDs), which provide one stan-
dard way for manipulation of propositional formulas in computer programs. For ex-
ample, BDDs have been widely used by computer-chip designers in showing that the
circuits in the chips they design match the specifications for those chips. (In BDD
language, the connective is often called just ITE.)
(a) Find a formula equivalent to
if a
then
if b then c else d
else
if e then d else c
using only the connective A, v, and -.

Chapter Review 
(b) Find a formula equivalent to
if a
then
if b then c else d
else
if e then d else c
in CNF.
(c) Find a formula equivalent to -'a using only the if-then-else connective and con-
stants T and F.
(d) Find a formula equivalent to (a V b V c) A (-a v -,b v d) A (-c V -d) using
only the if-then-else connective and constants T and F.
4. Find a DNF for the condition that there are an even number of l's in the three binary
strings p, q, and r. Draw a combinatorial network to represent the DNF. Can you
simplify the combinatorial circuit using the properties of a boolean algebra?
5. Find a DNF for the condition that there are an odd number of l's in the three binary
strings p, q, and r. Draw a combinatorial network to represent the disjunctive normal
form. Can you simplify the combinatorial circuit using the properties of a boolean
algebra?
6. An especially simple class of CNF formulas are those built from Horn clauses. A
Horn clause is a clause containing, at most, one positive literal. (A pure Horn clause
is a clause containing exactly one positive literal.) Horn clauses form the basis for the
computer language Prolog, which allows the programmer to input a set of requirements
(specified in formal logic) and to ask the computer to find how to satisfy them all (if
possible)-as opposed to the user's having to write out the case analysis.
(a) Using the atomic formulas
a = "Tweety is a penguin."
b = "Opus is a penguin."
c = "Phoenix is a penguin."
d = "Elvis lives!"
express "If Tweety is a penguin and Opus is a penguin, and Phoenix is a penguin,
then Elvis lives" as a Horn clause.
(b) Find a set of Horn clauses logically equivalent to (a A b A c -+ d v e) A (-a v
-e). Find the shortest such set of clauses.
(c) Find all satisfying truth assignments for the following set of Horn clauses:
{PI, -PI V P2, -Pi V -1'P2 
V P3, -'P V -1P2 
V P4, -P3 V -174 V P51
Now, show that the following set of Horn clauses is not satisfiable:
{Pl, -'p1 V P2, -'p1 V -P2 V P3, -P 
V -'p2 V P4, -P3 V -P4 V P5, -113 V -"p5}
(d) Find all satisfying truth assignments for the following set of Horn clauses:
{PI, -
P1 V P2, -PI V -P2 V P3, -PI V -1P2 
V P4, -P3 V -'P4 V P5,
- P6 V P7, -P1 
V -PP7 
V P6)

CHAPTER 2 
Formal Logic
Next, for each satisfying truth assignment I, let T, be the set of truth variables
assigned the value TRUE by I. Compare the sets TI for the truth assignments
above by _.
Now, show that the following set of Horn clauses is satisfiable:
[P1, -' 
P1 V P2, 
P1 V -P2 V P3, -P1 V -1P2 
V P4, -P3 V -1P4 
V P5,
- P6 V P7, -PI V -'P7 V P6, -'P V -P6, 
-1P2 
V -'P4 V -'P71
(e) Challenge: Prove that if 4' 
is a Horn clause and if I, and 12 are interpretations
satisfying 4', 
then the following interpretation IA also satisfies 4':
IA(X) = IT if Ii(x)= T and 12(x) = T
/Fotherwise
Using this, show that p V q is not logically equivalent to (the conjunction of) any
set of Horn clauses.
(f) Challenge: Write pseudocode for a relatively fast algorithm to determine whether
a set of Horn clauses is satisfiable. Include arguments to show that (i) your al-
gorithm returns the correct answer and (ii) your algorithm is reasonably fast (in
general, much faster than writing the truth table for the set of Horn clauses).
7. Determine if the CNF
(x V y V -z V w V u V -v) A (--x V -y V z V -w V u V v) A
(x v -y V -z V W V u V -v) A (X V -'y)
or the CNF
(p V r V v) A (-p V r V v) A (p V -'r V V) A (-p V -'r V -v) A
(p V -r V -v) A (-p V -r V -v) A (p V r V -V) A (-p V r V -v)
is satisfiable. This exercise shows that the satisfiability problem can be solved if the
satisfiability problem can be solved for a CNF. The CNF satisfiability problem was the
first NiP-complete problem.
8. Afirst-order Horn clause is a formula such as
Vx Vy (Loves(x, y) v -EatsGarlic(x) V - EatsGarlic(y))
Inside the parentheses is a disjunction of atomic formulas (Loves(x, y)) and negated
atomic formulas (- EatsGarlic(x)). All the variables are universally quantified outside
the parentheses.
Using the predicates
Trained (x, j): x is trained to do job j.
Experienced (x, j): x is experienced at job j.
Prefers (x, j1, 
j2): x prefers job j1 to job j2.
Hire (x, j): hire x to do job j.
State the following with sets of first-order Horn clauses:
(a) If Britney and Aaron are both trained and experienced in marketing and account-
ing, and if Britney prefers accounting to marketing and Aaron prefers marketing
to accounting, then hire Britney to do accounting.

Chapter Review 
(b) If Harry, Hermione, and Frodo are all experienced in potions and each of them
prefers potions to at least one other job, then hire them all for potions.
9. Given an array Names with n elements,
Names[0], Names[l],.... Names[n - 1]
each containing a surname (family name), the following algorithm finds the largest
name (in alphabetical order). Write an invariant for the loop.
temp = Names[O]
fori=l,2,...,n-1
if Names[i] > temp
temp = Names[i]
Output temp
10. Challenge: Look up Hoare's quicksort algorithm. Write loop invariant assertions that
make the logic of quicksort easy to understand. You may also want preconditions
and postconditions. A precondition is a formula that the programmer assumes will
be true when an algorithm is invoked (called); the programmer announces that if the
precondition is not true, then the algorithm probably will not do what it is supposed
to do. A postcondition is a formula expressing something that is supposed to be true
after the algorithm finishes-assuming the preconditions are satisfied, of course.

CH H AH PI TH EI 
iRa 3 l 
I
Relations
Human language has many words and phrases to describe relationships between or among
objects. It may be that for two people, A and B, that A is a parent of B, that A is an
ancestor of B, that A is taller than B, or that A is in front of B. In algebra, it may be that
the value of variable x is less than the value of variable y. In geometry, it may be that one
point lies between two other points on a line. In set theory, it may be that a set X is a subset
of a set Y or that X is disjoint from Y. At a particular moment while a computer program
is running, it may be that the value of x is less than the value of y. All these notions are
special instances of a relation.
This chapter introduces the concept of a relation to formalize the familiar notion of a
relationship between or among objects. Relations provide a way of representing relation-
ships like the ones just described, so that they can be stored, studied, and reasoned about.
In this chapter, we first provide an introduction to relations, the important properties of
relations, and the fundamental operations on relations. We next deal with equivalence re-
lations, a generalization of the notion of equality, and then move on to ordering relations.
These relations generalize the ordering relations on R (<, >, <, >, =). Searching and sort-
ing operations are based on these relations. Finally, we show how the ideas in this chapter
are applied in a relational database.
rnBinary Relations
Most card games are played with a standard deck of 52 cards. The deck is divided
into four groups, or suits, called Clubs (4), Diamonds (*), Hearts (Q), and Spades (*).
Each suit has 13 cards, ordered in increasing order of value: 2, 3, 4, 5, 6, 7, 8, 9, 10,
Jack, Queen, King, and Ace. The 2 card has the lowest value, and the Ace card has the
highest value. In this ordering, we say that one card has a higher value than, or is higher
than, another card if, ignoring their suits, the value of the first card occurs after the value of
the second in this ordering. To focus on the ideas presented in this chapter while keeping
matters simple, many of the examples that follow will use a deck with only six cards. This
set of cards, called SpecialDeck, consists of the 10, Jack, and Queen of Hearts as well as
the 10, Jack, and King of Clubs. The values of these cards are ordered as described. The
SpecialDeck has its elements shown in Table 3.1.

CHAPTER 3 
Relations
SpecialDeck of
Cards
SpecialDeck
10 of Clubs
Jack of Clubs
King of Clubs
10 of Hearts
Jack of Hearts
Queen of Hearts
Much of the information about suits and card values is irrelevant to many card games.
Often, only two properties are important: whether two cards are in the same suit, and
whether one card is higher than another. Everything else, such as the names of the suits,
the names of the cards, and perhaps even the number of cards per suit, is unimportant. For
example, a person would immediately be able to translate the rules of many games to a
deck with five suits called red, yellow, blue, green, and black, with each suit consisting of
16 cards numbered 1, 2, 3,..., 16.
How can one abstract these important properties? Notice that both properties involve
a comparison between two objects. For example, given two cards a and b, does a have
a higher value than b? As a matter of convention, two elements that are related in some
special way are often represented by an ordered pair. If a is higher than b, then this could
be represented by the ordered pair (a, b). Formally, the relation HigherValue defined on
SpecialDeck is the set of ordered pairs (a, b) where the value of card a is higher than
the value of card b. This relation for SpecialDeck is shown in Table 3.2. Each ordered pair
(a, b) in the relation contributes one row to the table, with the higher-valued card appearing
first in the row and the lower-valued card second.
HigherValue Relation
HigherValue
Jack of Hearts 
10 of Hearts
Queen of Hearts 
10 of Hearts
Jack of Clubs 
10 of Hearts
King of Clubs 
10 of Hearts
Queen of Hearts 
Jack of Hearts
King of Clubs 
Jack of Hearts
King of Clubs 
Queen of Hearts
Jack of Hearts 
10 of Clubs
Queen of Hearts 
10 of Clubs
Jack of Clubs 
10 of Clubs
King of Clubs 
10 of Clubs
Queen of Hearts 
Jack of Clubs
King of Clubs 
Jack of Clubs

Binary Relations 
Definition 1. 
A binary relation is a set of ordered pairs. A binary relation on a set X is
a set of ordered pairs of elements of X.
Example 1. 
The relation HigherValue defined in Table 3.2 can be represented as the
following set of ordered pairs:
{(Jack of Hearts, 10 of Hearts), (Queen of Hearts, 10 of Hearts), (Jack of Clubs,
10 of Hearts), (King of Clubs, 10 of Hearts), (Queen of Hearts, Jack of Hearts),
(King of Clubs, Jack of Hearts), (King of Clubs, Queen of Hearts), (Jack of Hearts,
10 of Clubs), (Queen of Hearts, 10 of Clubs), (Jack of Clubs, 10 of Clubs),
(King of Clubs, 10 of Clubs), (Queen of Hearts, Jack of Clubs),
(King of Clubs, Jack of Clubs))
A second important binary relation on SpecialDeck is SameSuit, which is defined as
(a, b) e SameSuit if a and b are cards in SpecialDeck that belong to the same suit. For
example, both the ordered pair (10 of Hearts, Jack of Hearts) and the ordered pair (Jack of
Hearts, 10 of Hearts) are in SameSuit, but the ordered pair (10 of Hearts, Jack of Clubs) is
not. The pairs in the relation SameSuit for SpecialDeck are listed in Table 3.3.
SameSuit Relation
SameSuit
10 of Hearts 
10 of Hearts 
10 of Clubs 
10 of Clubs
10 of Hearts 
Jack of Hearts 
10 of Clubs 
Jack of Clubs
10 of Hearts 
Queen of Hearts 
10 of Clubs 
King of Clubs
Jack of Hearts 
10 of Hearts 
Jack of Clubs 
10 of Clubs
Jack of Hearts 
Jack of Hearts 
Jack of Clubs 
Jack of Clubs
Jack of Hearts 
Queen of Hearts 
Jack of Clubs 
King of Clubs
Queen of Hearts 
10 of Hearts 
King of Clubs 
10 of Clubs
Queen of Hearts 
Jack of Hearts 
King of Clubs 
Jack of Clubs
Queen of Hearts 
Queen of Hearts 
King of Clubs 
King of Clubs
A third relation defined on SpecialDeck is that of having a higher value and being
in the same suit. This relation is shown in Table 3.4. Here, an ordered pair (a, b) of cards
belongs to the relation HigherValueSameSuit if cards a and b in SpecialDeck have the same
suit and furthermore, card a has a higher value than card b.
HigherValueSameSuit
Relation
HigherValueSameSuit
Jack of Hearts 
10 of Hearts
Queen of Hearts 
10 of Hearts
Queen of Hearts 
Jack of Hearts
Jack of Clubs 
10 of Clubs
King of Clubs 
10 of Clubs
King of Clubs 
Jack of Clubs

CHAPTER 3 
Relations
Other familiar examples of relations arise when we consider family trees. Tradition-
ally, a special notation is used, which goes roughly as follows: Marriages are shown with
= signs. The first-generation couple sits at the top of the tree. Only their direct descendents
officially belong to the tree. Marriages of descendents are indicated by an = sign and the
name of the partner. With the exception of the top couple, the children of a person in the
tree are drawn off a horizontal line that is joined to that person by a short vertical segment.
(No horizontal line is needed for an "only" child). The horizontal line for the children of
the top couple is joined to the = sign at the top, since both parents belong to the tree.
The children of the first-generation couple form the second generation, the children of the
second-generation couples form the third generation, and so on.
In Figure 3. 1, George is the only child of Peter and Elaine. Peter is in the picture only
because of his marriage to Elaine. Elaine, not Peter, is a child of Mary and John. Elaine is
in the second generation, and George is in the third generation.
Mary = John
Peter = Elaine
George
Examples of family tree entries.
Although the marriage of a descendent is indicated by an = sign and the name of the
partner, no further information is given about these partners. For example, in the family tree
of Mary and John shown in Figure 3.2, even if Peter and Harold were brothers, this would
not be shown. A family tree is a rich source of information about a number of relations.
In Example 2 you will list the elements of three relations that can be formed from the
relationships shown in Figure 3.2.
Mary = John
Peter = Elaine 
Maude = Harold
George 
Elizabeth
Family tree.
Example 2. 
For the family tree shown in Figure 3.2, identify the elements of the relations
(a) IsMarriedTo, (b) IsParentOf and (c) IsSameGeneration.
Solution.
(a) IsMarriedTo = {(Mary, John), (John, Mary), (Peter, Elaine),
(Elaine, Peter), (Maude, Harold), (Harold, Maude)}
A representation for the specific relation IsMarriedTo is shown in Table 3.5.

Binary Relations 
IsMarriedTo
Relation
IsMarriedTo
John 
Mary
Mary 
John
Peter 
Elaine
Elaine 
Peter
Maude 
Harold
Harold 
Maude
(b) IsParentOf= {(Mary, Elaine), (John, Elaine), (Mary, Maude),
(John, Maude), (Peter, George), (Elaine, George),
(Maude, Elizabeth), (Harold, Elizabeth))
(c) Peter and Harold do not appear in the relation IsSameGeneration, because this relation
deals with direct descendants only. In this case, the family tree has more information
than is required to define this relation:
IsSameGeneration = {(Elaine, Maude), (Maude, Elaine),
(George, Elizabeth), (Elizabeth, George), (Mary, John),
(John, Mary), (John, John), (Mary, Mary), (Elaine, Elaine),
(Maude, Maude), (George, George), (Elizabeth, Elizabeth)} )
A specific computer application of relations appears in Section 3.10, which introduces
the concept of relational databases. A relational database consists of a number of relations.
To answer questions concerning the information contained in the relations, the user poses
a question or a query that is processed by the database system. If, for example, a user
makes a query about who is married to whom, the database system would respond with
a table such as Table 3.5. In relational database systems, the answer to any query is a
relation.
For example, let X be any set, then
Idx = {(x,y) :x, yEX and x=yl
Since Idx is a set of ordered pairs of elements in X, it defines a relation on X. This re-
lation is called the identity relation, or the equality relation, and may be denoted as
=x. The trivial relation, or void relation, or empty relation, on any set consists of 0.
The universal relation on a set consists of all possible ordered pairs of elements of a
set.
For any set X C R, let
Ltx= {(x, y) : x, y e X and x <y}
Lex={(x,y):x, yEX and x < y}
GtX = {(x, y) : x, y E X and x > yj
Gex={(x,y):x,yEX and x>y

CHAPTER 3 
Relations
Similar relations are defined on N and R. When the set X is clear from the context, the
subscript X will frequently be dropped. When it causes no confusion, it is convenient
to use mathematical symbols for these relations and drop the subscript. Hence, we will
sometimes refer to ld as =, to Le as <, to Lt as <, to Gt as >, and to Ge as >. Of course,
to say that (x, y) e Idx, it is customary to write x = y, and to say that (x, y) E LtN, it is
customary to write x < y. In a non-numeric setting, we can define a relation for any set X
of words in a dictionary by saying that word] < word2 means that word] precedes word2
in the dictionary.
Example 3. 
are infinite, the entire relation obviously cannot be displayed.
Two Relations on N
IdN 
LtN
If R is a binary relation on a set X, then (x, y) e R may also be written as x R y.
3.1.1 
n-ary Relations
There is no reason to restrict attention to relations between pairs of objects. Those are
simply the most familiar examples.
Definition 2. 
Let X1, X2,.... X,, be sets for some n e N. An n-ary relation is a set of
n-tuples contained in X1 x X2 x ... 
Xn. If X1 = X2 .
X, we say the n-ary rela-
tion is defined on X.
We have been careful to indicate how many sets are involved in a relation or how many
elements are related. Often the qualifier n-ary is left off and we see references to relations
for which the context makes clear how many sets are involved.
Example 4. 
Let the set
