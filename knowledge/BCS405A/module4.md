# BCS405A — Module 4

## Graph Theory

**Subject:** BCS405A (Discrete Mathematical Structures)
**Module:** Module 4
**Content type:** textbook_fallback
**Sources:** T1_Discrete_Mathematics_for_Computer_Science.txt

---

X consist of the nine positions on a tic-tac-toe board, named pl,
P2 ...
, p9, as shown:
P1 
P2 
P3
P4 
P5 
P6
P7 
P8 
P9

Operations on Binary Relations 
For three distinct positions on the board, define the relation Between to consist of the or-
dered triples (pj, Pi, Pk) where pj is between pi and Pk in some row, column, or diag-
onal on the board. So, Between contains, for example, the ordered triples (P2, P3, P0),
(P5, P4, P6), (p5, pi, p9), and (Ps, P7, P3). Both (P5, P2, P8) and (Ps, P8, P2) are also
elements of the relation. 
E
Example 5. 
We define a ternary relation R on the set A = {1, 2, 3,4, 5, 6, 7} as follows:
such that for any nI, n2, n3 E A we have (nI, n2, n3) E R if and only if n1 I 
n2 = n3.
Find all elements of R.
Solution. The triples in R are
((1, 1, 1), (1, 2, 2), (2, 1, 2), (1, 3, 3), (3, 1, 3), (1, 4, 4), (4, 1, 4), (2, 2, 4),
((1, 5, 5), (5, 1, 5), (1, 6, 6), (6, 1, 6), (2, 3, 6), (3, 2, 6), (1, 7, 7), (7, 1, 7)) 
U
A 1-ary relation is also called a unary relation (pronounced "u"-nary relation) or a
property. A unary relation on a set X is a set of 1-tuples of elements of X, but a 1-tuple of
X is just an element of X. Hence, a unary relation on a set X is a subset of X.
Example 6. Hearts names a unary relation on a deck of cards. This unary relation on the
standard 52-card deck is the set {2 of Hearts, 3 of Hearts ...
, Ace of Hearts).
If R is an n-ary relation with n > 2, one can either write R(xl, x2. 
Xn) or
(Xl, X2, .. , Xn) E R.
Theorem 1 points out that an n-ary relation on a set X is the same thing as a unary
relation on the set Xn.
Theorem 1. A set R is an n-ary relation on a set X if and only if R C Xn.
rnOperations on Binary Relations
Since relations are sets, the set operations of union, intersection, and difference are well
defined for relations. If only binary relations on a set X are considered, then X2 can be
considered as the universal relation, and the complement X2 - R of a relation R can also
be formed. In this section, two other especially important operations on binary relations
are considered, namely forming the inverse and taking the composition of two relations.
The inverse operation is performed on a single binary relation; the composition operation
is performed on two binary relations.
3.2.1 
Inverses
For the real numbers 3 and 5, we can write 3 < 5, but we can convey the same information
by writing 5 > 3. The two relations, < and >, are different. More generally, for any real
numbers x and y, we have x < y if and only if y > x. This is an example of two relations
being inverses of each other. In terms of the ordered pair notation,

CHAPTER 3 
Relations
(x, y) E < if and only if (y, x) E >
The formalization of this property is stated next.
Definition 3. 
Let R be a binary relation. The inverse of R, denoted R-1, is
{(x, y) :(y,x) e R}
Producing the inverse R 1 of a relation R can be thought of as performing an operation
on R. This operation is known as taking the inverse of R, or as inverting R.
Example 7. 
Recall the relation IsParentOf in Example 2. Thus,
IsParentOf 1 = {(Elaine, Mary), (Elaine, John), (Maude, Mary),
(Maude, John), (George, Peter), (George, Elaine),
(Elizabeth, Maude), (Elizabeth, Harold))
The relation IsParentOf-1 expresses the fact that one person is the child of an-
other, so it is natural to denote this relation by a new name, such as IsChildOf. Hence,
using the new name for IsParentOf-1, (a, b) E IsParentOf if and only if (b, a) e
IsChildOf. 
E
Example 8.
GtN• = ((1, 0), (2, 0), (2, 1), (3, 0), (3, 1), (3, 2), (4, 0) .... I
Gt 1 = {(0, 1), (0, 2), (1, 2), (0, 3), (1, 3), (2, 3), (0, 4) .... I
Clearly, Gt-1 is the relation Lt, since a > b if and only if b < a. 
U
Theorem 2. 
Let R and S be binary relations on a set X. Then,
(a) (R-l) 
-1- R.
(b) (RU S)- =R-1 U S-1.
(c) IfS C R, then S-1 c R- 1.
Proof. (a) For any x, y E X,
(X, y) E (R-l)-1 €•(y, x) E R-1
¢ (x, y) E R
Hence, (R- 1 )- 1 = R
(b) For any x, y E X,
(x,y) E (RUSS)1 .•(y,x) E RUS
€•'(y,x)ER 
or (y,x)ES
i(x, y) E R- 1 or (x, y) 
U 
S-1
€•(X, y) E R-' U S-1

Operations on Binary Relations 
Hence, (R U S)- 1 -
R- 1 U S-1
(c) This proof is left as an exercise for the reader. 
3.2.2 
Composition
The composition of two relations produces a new relation. Some very familiar examples of
relations arise in just this way. For example, we shall soon see that the relation IsGrand-
parentOf is the composition of IsParentOf with itself.
Definition 4. 
Let R and S be binary relations on the set X. The composition of R and S,
denoted R o S, is defined as follows:
RoS = {(x,y) EX2 :forsome zEX,(x,z) E S and (z,y) E R}
The reader may consider the notation R o S to be backward and think that S o R would
be more natural. The motivation for writing R o S will become obvious in the next chapter,
however, when we discuss the composition of functions. Note that the composition of S and
R, denoted as S o R, generally creates a different set of ordered pairs than the composition
R o S of R and S.
Example 9. 
The family tree diagram shown in Figure 3.2 can be used to define Is-
ParentOf. Since (Mary, Elaine) E IsParentOf and (Elaine, George) E IsParentOf (Mary,
George) E IsParentOf o IsParentOf. Working out all the possibilities for this composition
gives
IsParentOf o IsParentOf = {(Mary, George), (John, George),
(Mary, Elizabeth), (John, Elizabeth)) 
U
Clearly, (a, b) E IsParentOf o IsParentOf means that a is the grandparent of b. As
another example of composition, convince yourself that
IsCousinOf = IsParentOf o IsSiblingOf o IsChildOf
You should be able to show that George and Elizabeth in Figure 3.2 are cousins.
The composition of a relation R on a set X with the equality relation on X should
always gives the relation R. We prove this in Theorem 3.
Theorem 3. 
Let X be any set and R be any binary relation on X. Then,
R = Idx o R = R o Idx
Proof. The proofs of these equalities are similar, so only the proof that R = IdX o R will
be given. To do this proof, we show that IdxoR C R and R C Idx o R. The proof follows
Template 1.5 (Set Equality).
First, suppose that (x, y) E Idx o R. Then, by the definition of composition, there is
a z E X with (x, z) E R and (z, y) E Idx. Since (z, y) E Idx, we have z = y. Therefore,
(x, z) = (x, y). Hence, (x, y) E R.
Second, suppose that (x, y) E R. Now, (y, y) E Idx, so (x, y) E Idx o R. 
U

CHAPTER 3 
Relations
Exercises
1. For the people in the family tree (see Figure 3.2), build tables for the following rela-
tions:
(a) IsAncestorOf
(b) IsDescendentOf
(c) IsSiblingOf
(d) IsCousinOf
2. Let M = {1, 2 ...
, 10}. Define a relation R on elements x, y E M such that (x, y) E
R if and only if there is a positive integer k such that x = ky. Find the elements of R.
3. Find the elements in each of the following relations defined on R:
(a) (x, y) E R if and only if x + 1 <y
(b) (x, y) E R if and only if y < 0 or 2x < 3
(c) (x, y, z) E R if and only ifx 2 + y = z
4. List the 16 elements of the relation Between as defined in Example 4.
5. The table below gives the names of airlines and several cities that each flies to from
Chicago. The table also gives the number of miles for each flight. List all the triples
(X, Y, Z) of the ternary relation defined by those triples for which airline X flies Y
miles to city Z.
TWA 
Pan Am 
Piedmont
Topeka 
Bombay 
7809 
Peoria 
Kansas City 
Seattle 
2052 
Albany 
Phoenix 
1742 
Anaheim 
2025 
Atlanta 
6. Let U = (0, 11.
(a) Let SubsetOf = {(X, Y) : X, Y C U and X C Y}. List all ordered pairs in Sub-
setOf.
(b) Let StrictSubsetOf= {(X, Y) : X, Y C U and X C Y 1. List all its ordered pairs in
StrictSubsetOf.
(c) {(X, Y, Z) : X, Y, Z C U and X n Y = ZJ is a ternary relation. List all ordered
triples in this relation.
The relations SubsetOf and StrictSubsetOf can be defined on any set of sets. We will
use these relations for other universal sets later in the text.
7. Using the family tree shown in Figure 3.2, list the elements in each of the following
relations, and give these relations meaningful names.
(a) IsMarriedTo -1
(b) IsMarriedTo o IsMarriedTo
(c) IsParentOf o IsParentOf-1
(d) =Family where Family denotes the set of people appearing in the family tree
(e) IsMarriedTo n IsMarriedTo 1
(f) IsParentOf n IsParentOf-1
8. Describe the relations resulting from the inverse or composition operations. Describe
the resulting relations in words.

Special Types of Relations 
(a) LeN o LeN
(b) Le.'
(c) LtDRo LtR
(d) Challenge: LtN o LtN
(e) Challenge: LtD 
o GtN
(f) Let NeN = {(x, y) : x, y e N and x 
y. What is Ne 
.
1 ?
9. Prove Theorem 2(c).
10. (a) Prove for any set X that Idx = IdX1.
(b) Find two binary relations R and S on N where R 
IdMN and S 
/ IdN such that
R -
R- 1 and S = S-1.
(c) Suppose that R is a binary relation on a set X and, for every binary relation S on
X, R o S = S. Prove that R = Idx.
11. Let A = {1, 2, 3 ...
, 10}. Let R = {(1, 2), (1, 4), (1, 6), (1, 8), (1, 10), (3, 5), (3, 7),
(4, 6), (6, 8), (7, 10)) be a relation on A. Let S = {(2, 4), (3, 6), (5, 7), (7, 9), (8, 10),
(8, 9), (8, 8), (9, 9), (3, 8), (4, 9)} be a second relation on A. Find:
(a) R o S
(b) S o R
12. Show that composition of relations is an associative operation. That is, show that if
R, S, and T are binary relations on a set X, then
R o (S o T) = (R o S) o T
13. Let R, S, and T be binary relations on a set X.
(a) Prove that R C S if and only if R-1 C S-1.
(b) Prove that ifR C S, thenRoT C SoTandToR C ToS.
(c) If R o T C S o T and T o R C T o S for some relation T, does it follow that
R C S?
14. Let X = {0, 1). Let B = 'P(X x X) be the set of all binary relations on X.
(a) List all the elements of B.
(b) Since elements of B are themselves relations, it makes sense to ask whether two
of those relations are inverses of each other. Let
IsInverseOf = {(R, S) : R e B and S r B and R = S-1}
List all elements of IsInverseOf
(c) Since IsInverseOf is a binary relation, it has an inverse. What is IslnverseOf-1 ?
(d) What is IsInverseOf o IsInverseOf?
rnSpecial Types of Relations
Some very common binary relations have important special properties. Three of these spe-
cial properties, the reflexive, symmetric, and transitive properties, occur in relations such
as Id, Lt, Le, and both the SubsetOf (C) and StrictSubsetOf (C) relations. Not all of these
relations have all three of these properties, however. The properties that identify and dif-
ferentiate these relations are introduced in this section.

CHAPTER 3 
Relations
3.4.1 
Reflexive and Irreflexive Relations
Clearly, 3 < 3 is true, but 3 < 3 is not true. This distinction between < and < is captured
in the next definition.
Definition 1. 
Let R be a binary relation on a set X. R is reflexive if (x, x) E R for each
x E X.
It is obvious from the definition of reflexive that IdM, 
the equality relation on the real
numbers R, and LeR, the less than or equal relation on R, are reflexive. It is also obvious
that LtR, the less than relation on R, is not reflexive since there is no element x E R for
which (x, x) E LtR. That is, x < x is never true since no number can be strictly less than
itself.
The relation IsSameGeneration defined in Section 3.1 is reflexive since each person
is in the same generation as themselves.
Theorem 1. 
A binary relation R on a set X is reflexive if and only if Idx C R.
A picture of IdR is shown in Figure 3.3. The points (x, y) of the plane that represent
elements of IdR are darkened. The picture is just the familiar graph of the line x = y.
y
(0,0)
Graph of IdR.
In general, for a binary relation R defined on the real numbers IR, one can draw a
picture of the relation by darkening the point (x, y) in the plane if the ordered pair of real
numbers (x, y) is in R. Such a picture is called the graph of the relation R. Sometimes,
relations have graphs that consist of a single line, but in general, graphs of relations consist
of entire regions of points.
The usual convention in graphing LeR is to draw the diagonal line x = y as a darker,
heavier line to show that the line is included in the graph. One can see that LeR is reflexive
from its graph since the graph of the line x = y is a subset of the graph of LeR (see
reason that making deductions from a Venn diagram is risky.
Y
Graph of LeR./( 
°'

Special Types of Relations 
The difference between < and < that we have discussed is formalized in Definition 2.
Definition 2. 
Let R be a binary relation on a set X. R is irreflexive if (x, x) 0 R for all
x e X.
Clearly, LtR is an irreflexive relation since x < x is never true for any x e R. Consid-
ering relations as sets, we can characterize irreflexive relations in terms of their intersection
with an identity relation.
Theorem 2. 
A binary relation R on a set X is irreflexive if and only R n Idx = 0.
Example 1. 
The usual convention in graphing LtR (see Figure 3.5) is to draw the diag-
onal line x = y dotted to show that it is not included in the graph. Since no point on this
line is in LtR, it can be concluded that LtR is irreflexive.
y
/
-
----- .
x
, 
(0,0)
LtR.
The relation f{(1, 1), (1, 2)1 on X 
f {1, 21 is not reflexive, because (2, 2) 0 R and it is
not irreflexive because (1, 1) E R.
3.4.2 
Symmetric and Antisymmetric Relations
A principal distinction between the equality relation = on the one hand and the relations
< and < on the other is captured by the notion of symmetry.
Definition 3. 
Let R be a binary relation on a set X. R is symmetric if (y, x) E R when-
ever (x, y) G R.
Clearly, the relation = is a symmetric relation. Neither < nor <, however, is symmet-
ric. For example, notice it is true that 3 < 5 but not that 5 < 3, and it is true that 3 < 5 but
not that 5 < 3. Therefore, neither < nor < is a symmetric relation.
Example 2. 
Refer to Section 3.1 for the definitions of the relations IsMarriedTo, IsPar-
entOf SameSuit, HigherValue, and IsSameGeneration.
(a) The relation IsMarriedTo is symmetric, and IsParentOf is not. (Mary, Elaine) E IsPar-
entOf whereas (Elaine, Mary) 0 IsParent~f.
(b) The relation SameSuit is symmetric, whereas HigherValue is not. (Jack of Hearts, 10
of Hearts) E HigherValue, whereas (10 of Hearts, Jack of Hearts) 0 HigherValue.
(c) IsSameGeneration is symmetric.

CHAPTER 3 
Relations
One can see that a binary relation on R is symmetric if and only if its graph is sym-
metric about the diagonal line x = y. Figure 3.6 shows a symmetric relation on R.
y
Symmetric relation on R.
We really begin to understand the properties of relations when we understand how
different concepts express the same idea. Theorem 3 relates inverses of relations to the
property of a relation being symmetric.
Theorem 3. 
A relation R on a set X is symmetric if and only if R = R- 1.
Proof. Let R be a symmetric relation. Then, (x, y) e R if and only if (y, x) e R, which
is the case if and only if (x, y) e R- 1.
The relation shown in Figure 3.7 is not symmetric: (0, -7) is an element of the rela-
tion, whereas (-7, 0) is not.
(-7, relation 
on R
/• 
•,-7)
Nonsymmetric relation on IR.

Special Types of Relations 
Definition 4. 
Let R be a binary relation on a set X. R is antisymmetric if (y, x) 0 R
whenever (x, y) c R and x 0 y.
The relation defined on 1, 2, 31 as R = {(1, 2), (2, 1), (3, 2)} is neither symmetric,
because (3, 2) E R but (2, 3) 0 R, nor antisymmetric, because both (1, 2) and (2, 1) are
in R.
The relations =, <, and < are all antisymmetric. A logically equivalent statement of
the definition of antisymmetric is the following: If (x, y) and (y, x) are both in R, then
y = x. To see this in terms of the logical notation introduced in Chapter 2, let p1 be the
statement "(x, y) E R,"p 2 the statement "(y, x) E R," and P3 the statement "x = y." The
definition is of the form (pl A -P3) -+ -•P2, which is logically equivalent to the formula
(P1 A P2) -- 
P3.
Example 3. 
See Section 3.1 for the examples and the definitions of the relations IsPar-
entOf and HigherValue.
(a) In the family tree example, the relation IsParentOf is antisymmetric. For example,
(Mary, Elaine) E IsParentOf but (Elaine, Mary) 0 IsParentOf.
(b) In the card example, HigherValue is antisymmetric. We see this as (Jack of Hearts, 10
of Hearts) E HigherValue, but (10 of Hearts, Jack of Hearts) g HigherValue.
Suppose that a binary relation R is written as a table T, as in Table 3.7(a), which
repeats the information contained in Table 3.4. Now, suppose that a new table, T', is formed
by interchanging the two columns of T. The resulting Table 3.7(b) corresponds to the
relation R- 1. Theorem 3 says that R is symmetric if and only if T and T' have the same
rows. The order of the rows may be different, but exactly the same rows are present. Since
any n-ary relation is a set of ordered n-tuples for some n E N, the order in which the
n-tuples are written in the table does not matter.
IsMarriedTo (a) and IsMarriedTo 1
(b) Relations
T 
T'
John 
Mary 
Mary 
John
Mary 
John 
John 
Mary
Peter 
Elaine 
Elaine 
Peter
Elaine 
Peter 
Peter 
Elaine
Maude 
Harold 
Harold 
Maude
Harold 
Maude 
Maude 
Harold
(a) 
(b)
An examination of the two tables shows that T = T'.
Example 4.
(a) For any set X, equality is a symmetric, antisymmetric, and reflexive relation
on X.

CHAPTER 3 
Relations
(b) For any set X, the empty relation 0 is a symmetric, antisymmetric, and irreflexive
relation on X. If X :A 0, then the empty relation 0 is not reflexive on X. If X = 0, then
the empty relation 0 is (vacuously) reflexive on X.
(c) Let R = {(x, y) e R2 : x < y2). R is not reflexive, irreflexive, symmetric, or antisym-
metric. R is not reflexive since (1, 1) 0 R. R is not irreflexive since (2, 2) E R. R is
not symmetric since (1, 2) e R but (2, 1) V R. R is not antisymmetric since (2, 3) E R
and (3, 2) E R. 
Example 5. 
Define the relation IsAncestorOf so that x IsAncestorOf y means that x is
a parent of y, or that x is the parent of a parent of y, or that x is the parent of a parent
of a parent of y, and so on. The relation IsAncestorOf is an antisymmetric and irreflexive
relation on the set of all people.
Example 6.
(a) The relations < and < are antisymmetric relations on JR. The relation < is reflexive.
The relation < is irreflexive.
(b) The relations C and C are binary relations on the subsets of a set U. Both C and C are
antisymmetric. The relation C is reflexive, and C is irreflexive.
Example 7. 
Let c = 0.0005, and let RE be the relation
{(x, y) E R'2 : Ix -yI < e}
RE could be interpreted as the relation approximately equal. Prove that RE is reflexive and
symmetric.
Solution. Reflexive: For all x e X, Ix - x = 0 < E. Symmetric: For all x, y E R,
Ix -Y y= 
I y-x 1. So, if Ix -yI < c, then I y-x -
Ix -yI 
<E. 
c
3.4.3 
Transitive Relations
To introduce the next property of relations, suppose that Sue is a parent of Joe and that Tom
is a parent of Sue. We can conclude that Tom is an ancestor of Joe, but we cannot conclude
that Tom is a parent of Joe. The next property, called transitivity, is a formal way of think-
ing about how the two relations, IsParentOf and IsAncestorOf are different. The relation
IsParentOf does not satisfy this next property whereas the relation IsAncestorOf does.
Definition 5. Let R be a binary relation on a set X. R is transitive if (x, z) e R whenever
(x, y) e R and (y, z) E R.
Example 8. 
Consider the relations in Examples 4 through 7.
(a) Equality is transitive.
(b) The relation 0 is (vacuously) transitive.
(c) Over the set R, the relations < and < are transitive.
(d) The relation IsAncestorOf is transitive.
(e) The relations C and C are transitive.
(f) R, is not transitive.
(g) {(x, y) E R2 : x < y2} is not transitive. To see this, just note that (9, 5) e R and
(5, 3) E R, but that (9, 3) 0 R. 
U

Special Types of Relations 
Theorem 4. 
A binary relation R is transitive if and only if R o R C R.
Proof This just restates the definition. If there is a y such that (x, y) E R and (y, z) E R,
then (x, z) E R. 
U
In Table 3.8, we summarize the properties, their characterizations, and how we prove
a property holds for a relation R defined on a set X.
Properties of Relations
Property 
Characterization 
Method of Proof
Reflexive 
Idx c R 
Let x E X. Prove (x, x) E R.
Antireflexive 
Idx n R = 0 
Let x E X. Prove (x, x) 0 R.
Symmetric 
R = R-1 
Let (x, y) E R. Prove (y, x) E R.
Antisymmetric 
R n R- 1 C Idx 
Suppose that (x, y) E R and (y, x) E R.
Prove x = y.
Transitive 
R o R C R 
Let (x, y), (y, z) e R. Prove (x, z) E R.
3.4.4 
Reflexive, Symmetric, and Transitive Closures
A question that arises for relations that do not possess a particular property, such as being
reflexive, symmetric, or transitive, is whether more elements can be added to a relation
R to produce a relation R' that does have some desired property. One obvious way is to
take R' to be the universal relation (check this). What we really want to know is how to
find a smallest relation R' that contains R and has some desired property, such as trans-
itivity.
For example, how is the relation GeR (>) related to the relation Gt (>)? Clearly,
GeR = GtR U IdMR. The relation GeR turns out to be the smallest reflexive relation on R
containing GtR. GeR is called the reflexive closure of GtR. (The term reflexive closure
will be defined formally below.) More generally, GeX is the reflexive closure of Gtx over
any set X such that X C IR.
Suppose people are waiting in a ticket line. We say that person x is the person In-
FrontOf person y, expressed as x InFrontOf y, if x is the person standing immediately in
front of person y. How is the relation IsAdjacentTo related to the relation InFrontOf? A
person x is adjacent to a person y if x is the person in front of y or y is the person after x.
Said another way, x IsAdjacentTo y means that x is just in front of or just behind y. It can
be shown that IsAdjacentTo is the smallest symmetric relation containing InFrontOf. The
relation IsAdjacentTo is called the symmetric closure of InFrontOf
Finally, in the case of transitivity, we ask how the relation IsAncestorOf is related
to the relation IsParentOf. A person x is the ancestor of a person y if x is a parent of
y, or a parent of a parent of y, or a parent of a parent of a parent of y, and so on. The
relation IsAncestorOf is the smallest transitive relation containing IsParentOf. The relation
IsAncestorOf is called the transitive closure of IsParentOf
To characterize the reflexive, symmetric, and transitive closures of a relation, we first
define a new operation on relations.

CHAPTER 3 
Relations
Definition 6. 
Let R be a binary relation on a set X. For n E N, the nth power of R,
denoted R', is defined as follows:
(a) R 0 ={(x,x):x eX}=Idx.
(b) Rn+1 = R o Rn.
Let R+ = U?0 Ri and R* 
U 
R'
i=1 
U=0t
Example 9. 
Let A = {a, b, c, d} and let R be the relation on A consisting of the pairs
(a, b), (b, a), (b, c), and (c, d). Find R+ and R*.
Solution. 
R0 = {(a, a), (b, b), (c, c), (d, d)}
R2 = {(a, a), (a, c), (b, b), (b, d)}
R3 = {(a, b), (b, a), (b, c), (a, d)}
R4 = {(a, a), (a, c), (b, b), (b, d)}
Observe that R2 = R4 and, consequently, R5 = R3 . In general, R2n+l = R3 and R2n -
R2 for n > 1. Therefore,
R + 
( (a, b), (b, a), (b, c), (c, d), (a, a), (a, c), (b, b), (b, d), (a, d)}I
R* = {(c, c), (d, d), (a, b), (b, a), (b, c), (c, d), (a, a), (a, c), (b, b), (b, d), (a, d)} I
Example 10. 
Let R be the relation IsChildOf.
(a) The expression xR 2 y means that x is a child of a child of y, so R2 is the same as
IsGrandchildOf.
(b) The expression x R3y means that x is a child of a grandchild of y or, said another way,
that x is a great-grandchild of y. Hence, the relation R3 could just as well be called
IsGreatGrandchildOf.
(c) R4 could just as well be called IsGreatGreatGrandchildOf.
(d) Relation R+ is the same as IsAncestorOf.
Example 11. 
Let S be the relation on Z that is defined by aSb if and only if b = a + 1.
(a) It is true that aSob if and only if b = a.
(b) aS2 b if and only if, for some integer c, it is true that c = a + 1 and b = c + 1--that
is, if and only if b = a + 2.
(c) aS 3b if and only ifb = a + 3.
(d) aSnb if and only if b = a ± n. (Formally, this is proved by induction on n.)
(e) aS+b if and only if a < b. For if aS+b, then aSnb for some positive integer n.
(f) aS*b if and only ifa < b.
Solution. (f) (=) 
By part (d), b = a + n, so a < b.
(==) 
Suppose, conversely, that a < b. Since a, b E Z, their difference b - a E Z. Since
a < b, it follows that b - a > 0. Let n = b - a. By part (d), aSnb, so aS+b. 
U
In Theorem 5 we give a characterization of the smallest reflexive, symmetric, and
transitive relations containing a given relation.

Special Types of Relations 
Theorem 5. 
Let R be a binary relation on a set X. Then:
(a) R U Idx is the smallest reflexive relation containing R.
(b) R U R- 1 is the smallest symmetric relation containing R.
(c) R+ is the smallest transitive relation containing R.
(d) R* is the smallest reflexive and transitive relation containing R.
Proof. (a) By Theorem 1, a relation S on X is reflexive if and only if Idx C S. So, S is
reflexive and contains R if and only if R U Idx C S. The smallest such S is R U Idx itself.
(b) We must prove (i) that R U R- 1 is symmetric and (ii) that if S is a symmetric relation
on X and R C S, then R U R-1 C S.
(i) It is enough to show that (R U R- 1) 
-1- R U R- 1 since the result then follows
from Theorem 3 in Section 3.4.2.
(R U R-l)-1 = R-1 U (R-l)-1
=R-1 UR
= R UR-
(ii) Suppose S is a symmetric relation on X and R C S. We must show that R 1 C S.
By Theorem 2 (c) in Section 3.2.1, R- 1 C S-1, and by Theorem 3 in Section
3.4.2, S-1 = S. So, R- 1 C S.
(c) and (d) These proofs are left as Exercises for the reader. 
U
Definition 7. Let R be any binary relation on a set X. R U Idx is called the reflexive
closure of R. R U R- 1 is called the symmetric closure of R. R+ is called the transitive
closure of R. R* is called the reflexive and transitive closure of R.
Example 12. Let X = {a, b, c}. Define the relation R on X as {(a, b), (b, c)}. Find the
reflexive, symmetric, and transitive closure of R. Also, find the reflexive and transitive
closure of R.
Solution. 
We must first find the following relations:
(a) Idx = {(a, a), (b, b), (c, c)}
(b) R- -
{(b, a), (c, b)}
(c) R= 
(a, a), (b, b), (c, c)}, R ={(a, b), (b, c)}, R2 ={(a, c), and R" =0 forn > 3.
(d) R+ 
[ (a, b), (b, c), (a, c)} and R* = {(a, a), (b, b), (c, c), (a, b), (b, c), (a, c)}
So, the reflexive closure of R is
R U IdX = {(a, b), (b, c), (a, a), (b, b), (c, c)}
The symmetric closure of R is
RUR 1 = {(a, b), (b, c), (b, a), (c, b)}
The transitive closure of R is
R+= {(a, b), (b, c), (a, c)}
Finally, the reflexive and transitive closure of R is
R* = {(a, a), (b, b), (c, c), (a, b), (b, c), (a, c)} 
U

CHAPTER 3 
Relations
Example 13. 
Consider the relation Supervises in some business. The relation is usually
irreflexive, that is, people do not supervise themselves. It is also antisymmetric. Finally, it is
generally not transitive. If x supervises y and y supervises z, normally x does not (directly)
supervise z. The reflexive closure of Supervises is SupervisesOrEquals. The symmetric
closure is SupervisesOrlsSupervisedBy, which is clearly an important relation in business.
Example 14. 
Let U be any nonempty set. Then, C is a relation on the subsets of U. The
relation C is transitive, but it is not reflexive and is not symmetric. The reflexive closure of
C is C. The symmetric closure S of this relation has no commonly used name, but for two
subsets A and B of U, (A, B) E S if and only if A C B or B C A.
As an example of the relation described in Example 14, let U = {0, 11. The reflexive
and symmetric closure of c on U consists of the 14 ordered pairs shown in Table 3.9.
Reflexive and Symmetric Closure of c for U = {0, 1}
(0, 
{0, 1}) 
({0, 1), 
0) 
(0, 
0)
(0, 
{o}) 
({o}, 
0) 
({o}, 
{o})
(0, 
{1}) 
({l}, 
0) 
({l}, 
{l})
({0}, 
{0, 11) 
({0, 11, 
10}) 
({0, 11, 
o, 1))
({1}, 
{o, 1)) 
({10,1, 
1{1}) 
3.4.5 
Application: Transitive Closures in Medicine and Engineering
Transitive and reflexive closures are especially important in computer science. For exam-
ple, suppose computers are connected to each other in a network, with each computer
connected directly to a small number of other computers. Information can be passed di-
rectly from one computer to another over a connection between them. The transitive and
reflexive closure of IsConnectedTo is CanAccess. This relation gives the limit of how far
information from one machine may be passed along to others. The examples that follow
show how the transitive closure idea leads to better understanding in fields as diverse as
medicine and chip testing.
Artificial Intelligence
Many artificial intelligence applications can be phrased in terms of some (simulated) per-
son making inferences based on some initial data. One kind of application is the expert
system, in which designers try to encode the knowledge that an expert would use in ap-
proaching a problem. Suppose, for example, an expert system is used to suggest to a physi-
cian certain tests that should be run. The system might say, for example, that if the patient's
weight is more than 25 percent over the recommended level to check for high cholesterol.
(Drs. X, Y, and Z all told the designers of the expert system that is what they do, so it
must be a reasonable rule.) And if the patient eats a high-fat diet, there should be a check
for cholesterol. (Drs. X, W, and Q all said they do that.) And if there is a check of the
cholesterol level, there should also be a check for high triglycerides (suggested by several
other doctors.) If there is a test for triglycerides, there should also be a test for something
else, and so on. This series of "rules" is stored in the program called the expert system.
The doctor enters that the patient has a body weight 30 percent over his recommended
weight and this fact triggers a series of inferences: check cholesterol level; check triglyc-

Special Types of Relations 
erides level, and so on. This is a transitive closure operation: including one test triggered
including another, which triggered including another, ... , until nothing else was triggered.
Often, the rules are rather more complicated, such as "if the patient's weight is 15
percent over the recommended weight and the patient is diabetic, then do a cholesterol
test." This is a more complicated sort of closure operation, but the idea is similar.
Testing Circuits
Here, we picture a combinational electric circuit:
Current flows from left to right, so there are six input lines, A through F, and four
output lines, W through Z. There are 20 gates, g through z. For convenience, we picture
them all as and-gates, but the intention is that they might implement some AND gates,
some OR gates, and some NOT gates. Define two relations between lines and gates, one
"saying" that a line is an input to a gate and the other that a line is an output of a gate.
The large dots indicate that a line is split, being an input for several gates, such as A is
Input 
Output
Ag 
gG
Ah 
hH
B g 
i I
B i 
J J
Ch 
kK
C i 
lIL
Dj 
mM
Dk 
nN
o 

CHAPTER 3 
Relations
input for both gates g and h. Otherwise, when two lines cross, such as the output line of
h and the output line of i, it just means that when the circuit is fabricated, these two lines
will follow this path but will not touch.
The circuit manufacturer would want to check that each gate is functioning correctly.
For example, if all the lines carry O's and l's (designers use 1 and 0 instead of TRUE and
FALSE), gate o might be "stuck at 0", that is, it might always output a 0, no matter what its
input is. The manufacturer would then like to have a "test vector" for that: a set of inputs
to distinguish whether gate o is stuck at 0. The first part of choosing such a test vector is
to determine which output lines could be affected if gate o is malfunctioning. In this case,
lines W, X, and Y could be affected. Line Z cannot be, however, since no output from gate
o flows, directly or indirectly, into gate z.
The relation of one line directly influencing another is Output o Input. The relation
of directly or indirectly influencing another line-through any number of intermediate
lines-is thus (Output o Input)*. The question above is to find all output lines where
(o, some output line) E (Output o Input)* o Output.
Of course, now that designers have narrowed down which lines might be affected by
a malfunction at gate o, they must go on to determine how to produce a single input that
will identify the stuck-at-0 fault. However, we cannot do that without knowing what the
individual gates are.
rn Exercises
1. Which of the following relations on the set of all people are reflexive? Symmetric?
Antisymmetric? Transitive? Prove your assertions.
(a) R(x, y) if y makes more money than x.
(b) R(x, y) if x and y are about the same height.
(c) R(x, y) if x and y have an ancestor in common.
(d) R(x, y) if x and y are the same sex.
(e) R(x, y) if x and y both collect stamps.
(f) R(x, y) if x and y like some of the same music.
2. For each of the relations defined in Exercise 1, write out the condition that defines the
inverse relation.
3. Which of the following relations on the set of all people are reflexive? Symmetric?
Antisymmetric? Transitive? Explain why your assertions are true.
(a) R(x, y) if x and y either both like German food or both dislike German food.
(b) R (x, y) if (i) x and y either both like Italian food or both dislike it, or (ii) x and y
either both like Chinese food or both dislike it.
(c) R(x, y) if y is at least two feet taller than x.
4. For each of the relations defined in Exercise 3, write out the condition that defines the
inverse relation.
5. Which of the following relations on the set of people indicated are reflexive? Irreflex-
ive? Symmetric? Antisymmetric? Transitive?
(a) IsSisterOf on the set of all females
(b) IsBrotherOfOrEquals on the set of all males
(c) IsSiblingOf on the set of all people

Exercises 
(d) IsSiblingOfOrEquals on the set of all people
(e) IsCousinOfOrEquals on the set of all people
Prove your assertions.
6. Since relations are sets, it is possible to define union, intersection, relative complement,
and absolute complement on pairs of relations. A natural question is which properties
of the original relations still hold for the resulting new relation. Fill in the following
table with Y/N, representing YES and NO, respectively. If the entry is N, find an
example that shows the property is not preserved under the operation. For instance,
enter a Y in the first row, second column, if the intersection of two reflexive relations
is still reflexive; otherwise, enter an N.
Relative 
Absolute
Union 
Intersection 
Complement 
Complement
Reflexive
Irreflexive
Symmetric
Antisymmetric
Transitive
7. Let A = {a, b, c, d}. Define the relations R1 and R2 on A as
R= 
{(a, a), (a, b), (b, d)}
and
R2 = {(a, d), (b, c), (b, d), (c, b)}
Find
(a) R1 o R2
(b) R2 o RI
(c) R2
(d) R2
8. Find a set A with n elements and a relation R on A such that R 1 , R2 .
.
R are all
distinct.
9. In the example involving the family tree (see Figure 3.2);
(a) What is the transitive and reflexive closure of IsParentOf?
(b) What is the transitive and reflexive closure of IsMarriedTo?
10. Let X = {a, b, c, d, e}. Let R, be the relation on X with elements {(a, b), (a, c), (d,
e)}. Let R2 be the relation on X with elements {(a, b), (b, c), (c, d), (d, e), (e, a)}. For
each of these relations, find the following:
(a) The smallest relation on X that contains R and is reflexive
(b) The smallest relation on X that contains R and is symmetric
(c) The smallest relation on X that contains R and is transitive
(d) The smallest relation on X that contains R and is reflexive and transitive
11. Let X = {1, 2, 3, 4}, and define a relation R on X as

CHAPTER 3 
Relations
R = {(1, 2), (2, 3), (3, 4)}
(a) Find the reflexive closure of R.
(b) Find the symmetric closure of R.
(c) Find the transitive closure of R.
(d) Find the reflexive and transitive closure of R.
12. Let X = {1, 2, 3, 4, 5, 6}, and define a relation R on X as
R = {(1, 2), (2, 1), (2, 3), (3, 4), (4, 5), (5, 6)}
(a) Find the reflexive closure of R.
(b) Find the symmetric closure of R.
(c) Find the transitive closure of R.
(d) Find the reflexive and transitive closure of R.
13. Let A = {1, 2, 3, 4). Find the transitive closure of the relation R defined on A as
R = {(1, 2), (2, 1), (2, 3), (3, 4))
14. Let R be the relation on (a, b, c, d, e, f g} defined as
R = {(a, b), (b, c), (c, a), (d, e), (e, f), (f, g))
Find the smallest integers m and n such that 0 < m < n and R' = Rn. Identify the
transitive closure of R as well as the transitive, reflexive, and symmetric closures of R.
15. Let X = (4, 5, 6, 7, 8), and define the relation R on X as {(4, 5), (5, 6), (6, 7), (7, 8),
(8, 4)). Find the smallest integers m and n such that R' = Rn, where 0 < m < n.
16. Find the reflexive, symmetric, and transitive closures of the following relations:
(a) = onN
(b) < onN•
(c) < onN
(d) R on N where R(x, y) if and only if y = x + 1
(e) R on R where R(x, y) if and only if y = x + 1
(f) R on R where R(x, y) if and only if Ix - y I < 0.0005
17. Show that the transitive closure of a relation R on a set X is the intersection of all
transitive binary relations R' on X where R C R'.
18. Is there a reasonable notion of antisymmetric closure? Why, or why not?
19. Prove Theorem 5(c) as follows:
(a) Prove by induction that if R is a binary relation on a set X, then R' o Rn = Rm+n
where m, n E N.
(b) Prove that R+ is transitive.
(c) Prove by induction that if R C S and S is a transitive binary relation, then Rn C S.
Conclude that R+ C S.
20. Prove Theorem 5(d).

Equivalence Relations 
rnEquivalence Relations
Equivalence relations generalize the familiar relation of equality (=). More specifically,
equivalence relations identify elements that are the same in some respect. For instance,
university students are classified by major, with two students being "related" if they have
the same major. Two students are also "related" if they are in the same class, such as the
sophomore class.
Definition 1. Let R be a binary relation on a set X. R is an equivalence relation if R is
reflexive, symmetric, and transitive.
Example 1.
(a) For any set X, the equality relation (=) is an equivalence relation on X.
(b) The relation IsSameGeneration (see Section 3.1) as defined using Figure 3.2 is an
equivalence relation.
The IsSameGeneration relation as based on Figure 3.2 is not a particularly interest-
ing equivalence relation because there are so few elements. The reader is encouraged to
construct his or her own family tree for three or four generations and see how the relation
conveys information conveniently.
Example 2. 
The relation SameSuit (see Section 3.1) shown in Table 3.3 is an equivalence
relation.
Solution. 
It is obvious that SameSuit is reflexive and symmetric, but is SameSuit transi-
tive? Let cards x and y be in the same suit, and let cards y and z be in the same suit. Since
y is in the same suit as z and in the same suit as x, it follows that x and z are in the same
suit. Therefore, SameSuit is transitive. 
Recall that when we divide a natural number n by a positive number p, we obtain an
integer quotient, which we will call q, and a remainder, which we will call r. That is, we
get an equation
n = pq + r
where q, r e N and 0 < r < p -
1. For example, 7 + 3 = 2.3 + 1, so the quotient is 2,
the remainder is 1, and 7 = 3 • 2 + 1.
If the remainder is zero, then n = p • q, and we say that n is divisible by p.
Definition 2. 
Let p be a positive integer, and let x, y e N. We say that x is congruent to
y modulo p, and write x =_ y (mod p), if (x - y) is divisible by p; that is, (x - y) = m • p
for some integer m.
With this terminology, we will prove that (mod p) is an equivalence relation for p > 1.
Example 3. 
Let p be any natural number greater than zero. Then, = (mod p) is an equiv-
alence relation on N.
Solution. 
Check that all the properties hold:
Reflexive: 
For any n e N, (n - n) = 0 = p • 0, so (n - n) is divisible by p. Therefore,
n =_ n(modp).

CHAPTER 3 
Relations
Symmetric: If n =-m(mod p), then (n -
m) = pk for some k e Z. So, (m -
n)=
p(-k), giving m =- n(mod p).
Transitive: Suppose n = m(mod p) and m = k(mod p). Show that n =- k(mod p). The
hypothesis implies that (n - m) = ip and (m - k) = jp for some i, j e Z. Then, however,
(n - k) = (n - m) + (m -
k) = ip +jp= (i + j)p
which gives n - k(mod p).
Since -- (mod p) is reflexive, symmetric, and transitive, it is an equivalence relation.
We will study this equivalence relation more carefully later. For now, the reader
might determine the elements of this relation when p = 8 and the universal set is
{0,1, 2,..., 24, 251.
Example4. 
Let Ubeanyset. ForX, Y CU, setX- YifXE)Y=(X-Y)U 
(Y-
X) is finite. Then, - is an equivalence relation on the subsets of U. The relation - is
uninteresting if U is finite.
Solution.
Reflexive: 
X E X = 0, which is finite, so X - X.
Symmetric: If X - Y, then X ED Y is finite. Recall that
X E Y = (X -
Y) U (Y - X) = (Y - X) U (X -
Y) = Y ( X
so Y 
X.
Transitive: Suppose X - Y and Y - Z, and show X - Z. It is given that X E Y is finite
and that Y • Z is finite. What must be shown is that X @ Z is finite. Figure 3.8 shows how
(X D Y) - (Y E Z) and (Y e Z) - (X E Y) contribute to (X D Z).
(X E Y) G (Y E Z) = (X E (Y E Y)) 
Z 
(is 
associative)
= (XE 0) 
z
=Xe3Z
How X D Z is formed.
Therefore, X e Z is also finite, implying that X - Z. Since - is reflexive, transitive,
and symmetric, the relation -'• is an equivalence relation. 
U
Some relations on R that were defined earlier are not equivalence relations.

Equivalence Relations 
Example 5.
(a) On R, define x - y if Ix - y I < 0.01. Then, -' 
is reflexive and symmetric, but it is
not transitive.
(b) On R, the relation GeR is reflexive and transitive, but it is not symmetric.
Solution.
(a) Let x = 0.0, y = 0.0075, and z = 0.015 Then, x - y, because
Ix - Yj = 0.0075 < 0.01
and y - z, because
lY - zj = 0.0075 < 0.01
However, x /- z, since
Ix - zI = 0.015 > 0.01
(b) It is clear that x > x for all x E R and that for all x, y, z E IR, if x > y and y > z,
then x > z, making the relation transitive. Since 5 > 3 but 3 ? 5, the relation is not
symmetric. Therefore, GeR is reflexive and transitive, but it is not symmetric. 
M
3.6.1 
Partitions
The relation SameSuit (see Table 3.3) is an equivalence relation on the set
SpecialDeck = {10 of Hearts, Jack of Hearts, Queen of Hearts, 10 of Clubs
Jack of Clubs, King of Clubs)
Essentially the same information can be stored in the three sets:
Heart = {10 of Hearts, Jack of Hearts, Queen of Hearts)
Club = { 10 of Clubs, Jack of Clubs, King of Clubs)
Suits = {Heart, Club}
Suits consists of two sets. Each element of SpecialDeck is in exactly one of those sets. The
cards in the first set are exactly the cards in the same suit as the 10 of Hearts. The cards in
the second set are exactly the cards in the same suit as 10 of Clubs.
Definition 3. 
Let X be a nonempty set. A partition of X is a set Y of nonempty subsets
of X such that every element of X is in exactly one element in Y.
A partition of SpecialDeck is the set Suits. The nonempty sets in Suits are Heart and
Club. We can restate the definition as Theorem 1.
Theorem 1. Let X be a set, and let Y be a set of subsets of X. Then, Y is a partition of X
if and only if:
(a) Each element of Y is a nonempty subset of X,
(b) For any two sets u, v e Y, u n v = 0 unless u = v, and
(c) The union of all the sets in Y is X.

CHAPTER 3 
Relations
Definition 4. Let - be an equivalence relation on a set X. For any x e X, let
[x] = {y •X :x -y}
[x ] is called the equivalence class of x.
In the example with the set SpecialDeck and equivalence relation SameSuit, we have
Heart = [10 of Hearts] = [Jack of Hearts] = [Queen of Hearts]
and
Club = [10 of Clubs] = [Jack of Clubs] = [King of Clubs]
The set Suits stores essentially the same information as the relation SameSuit. The next
two theorems make this statement precise.
Theorem 2. 
Let -'- be an equivalence relation on a set X. Then:
(a) Foranyx E X,x E [x].
(b) For any x, y E X, either [x] = [y ] or [ x ]and[ y ] are disjoint.
(c) {[x[ :x E X} is a partition of X.
(d) Forx, y E X,x 
yifandonlyify E [x].
Proof. (a) Since -
is reflexive, x - x, so x E [ x].
(b) Suppose [ x ] and [ y ] are not disjoint, and prove [x 
[ y ] by showing that [ x ] _
[y] and [y] _ [x]. To prove that [x] _ [y], assume that r E [x], and show that
r E [ y ]-that is, that y - r.
Since [x]f[y] :0, 
thereis az E [x]n[y]. Thusx -z, 
andy -z. 
Since -- is
symmetric, z - x. By the transitivity of -- , since y -
z and z -
x, y - x. Now since
y '-' x and x -
r, y -
r. So, r E [ y ], as required. Therefore, [x] 
[ y].
Analogously, [y] g [xl, so [y] = [x].
(c) It must be shown that {I x ] : x E X} is a set of nonempty subsets of X such that each
y E X is in exactly one [x]. To check that the [x]'s are nonempty, observe that x E [ x ].
To check that each y E X is in at least one [ x], observe that y c [y ]. To check that
each y E X is in at most one [x ], suppose y E [xl ] and y E I[x2]. Then, by part (b)
[Xl ] = [x2 ]. The classes are the same, so y is in only one equivalence class.
(d) This is immediate from the definition of equivalence classes. 
U
Theorem 2 says two things. First, given an equivalence relation on a set X, its set
of distinct equivalence classes form a partition of X. Second, the relation that defines two
elements to be related if they are in the same element of the partition is equal to the original
relation (part (d)).
Example 6. 
Let Deck = 110 of Hearts, King of Hearts, Queen of Clubs, Ace of Clubs}.
The relation SameSuit defined on Deck consists of the following ordered pairs:
(10 of Hearts, King of Hearts) 
(King of Hearts, 10 of Hearts)
(10 of Hearts, 10 of Hearts) 
(King of Hearts, King of Hearts)
(Queen of Clubs, Ace of Clubs) 
(Ace of Clubs, Queen of Clubs)
(Queen of Clubs, Queen of Clubs) 
(Ace of Clubs, Ace of Clubs)
Find the equivalence classes of this relation. Also, find the partition determined by this
equivalence relation.

Equivalence Relations 
Solution. The equivalence classes are
[10 of Hearts] 
= {10 of Hearts, King of Hearts)
[King of Hearts] = {10 of Hearts, King of Hearts)
[Queen of Clubs] = {Queen of Clubs, Ace of Clubs)
[Ace of Clubs] 
= {Queen of Clubs, Ace of Clubs)
The distinct equivalence classes are the two sets
I 10 of Hearts, King of Hearts) 
{Queen of Clubs, Ace of Clubs)
which form a partition of Deck 
U
Example 7. 
Recall the equivalence relation = (mod p) of Example 3 in Section 3.6. The
following are the equivalence classes of = (mod 5):
[0] = {0, 5, 10, 15, 20, 25, 30 .... I
[1] = {1, 6, 11, 16, 21, 26, 31 .... 
,
[2] = {2, 7, 12, 17, 22, 27, 32 .... I
[3] = {3, 8, 13, 18, 23, 28, 33, ....
[4] = {4, 9, 14, 19, 24, 29, 34 .... I
The reader should prove that these are the equivalence classes. 
U
In Example 8 we determine all the equivalence classes of -
(mod p) for any positive
integer p.
Example 8. 
Let p be a positive integer. Determine the equivalence classes of = (mod p).
Solution. We know from Example 3 in Section 3.6 that every integer is congruent to its
remainder (mod p). Since the only possible remainders are 0, 1. 
p - 1, we have
N C [0] U [1] U... U [p- 1]
Thus, there are, at most, p equivalence classes-namely, [0], [1]. 
[p -
1]. We must
show that these equivalence classes are all different.
Let rl and r2 be two different remainders, such as 0 < rl < r2 _< p - 1. We must
show that [rl] # [r2]. Note that r2 - r, is a positive integer less that p so that r2 - rl
is not divisible by p. Then, rl # r2 (mod p), whence [rl] A [r2]. Therefore, the distinct
equivalence classes are [0], [1] .... 
[p -
1]. 
M
Theorem 2 says that one can go from an equivalence relation to a partition from, which
one may read off the equivalence relation. Theorem 3 says that one can go from a partition
to an equivalence relation, from which one may read off the partition.
Theorem 3. 
Let P be a partition of a set X. For x, y E X, define x - y to mean that x
and y are in the same element of the partition. Then:
(a) - is an equivalence relation.
(b) The equivalence classes of - are exactly the elements of P.

CHAPTER 3 
Relations
Proof
(a) First, prove that - is an equivalence relation.
Reflexive: 
Let x c X, and show that x -
x. Since P is a partition, x is in some set
Q E P. So, x and x are both in Q; therefore, x - x.
Symmetric: Let x, y E X, and assume that x - y. That means there is a set Q E P such
that x, y E Q. So, y and x are in Q. Therefore, y - x.
Transitive: Suppose x - y and y - z. Since x - y, there is a set Q E P such that x,y E
Q. Since y - z, z is in the same set in P as y, so z E Q. Therefore, x and z are both in Q,
giving x - z.
(b)
[x] = {y E X x 
yJ
= {x E X x, y are both in the same element of P}
= element of P to which x belongs 
Example 9. 
Let Deck = { 10 of Hearts, King of Hearts, Queen of Clubs, Ace of Clubs).
The set
P = {{10 of Hearts, King of Hearts), {Queen of Clubs, Ace of Clubs))
is a partition of Deck. Define a relation '-- on Deck such that for x, y E Deck, x -
y if and
only if x and y are in the same element of P. The elements of the relation are
(10 of Hearts, King of Hearts) 
(King of Hearts, 10 of Hearts)
(10 of Hearts, 10 of Hearts) 
(King of Hearts, King of Hearts)
(Queen of Clubs, Ace of Clubs) 
(Ace of Clubs, Queen of Clubs)
(Queen of Clubs, Queen of Clubs) 
(Ace of Clubs, Ace of Clubs)
By Theorem 3 in this section, this relation is an equivalence relation for which the distinct
equivalence classes are precisely the elements of P. 
U
3.6.2 
Comparing Equivalence Relations
Consider a standard deck of 52 cards, called 52Cards. The suits are traditionally marked in
two colors: Clubs and Spades are black; Diamonds and Hearts are red. The relation Same-
Suit, consisting of all pairs of cards that are in the same suit, and the relation SameColor
consisting of all pairs of cards that are the same color, are both equivalence relations. The
equivalence class of the 2 of Diamonds in SameSuit is
[2 of Diamonds] = {2 of Diamonds, 3 of Diamonds .... 
Ace of DiamondsI
The equivalence class of the 2 of Diamonds in SameColor contains all the Diamonds and
all the Hearts. Figure 3.9, on page 187, is a Venn diagram showing the equivalence classes
of the two relations.
Each equivalence class of SameSuit is contained within a single equivalence class of
SameColor.
Definition 5. 
Let R1 and R2 be equivalence relations on a set X. R1 refines R2 if, for
each x e X, the equivalence class of x in R1 is a subset of the equivalence class of x in R2.

Equivalence Relations 
D
C 
S 
i 
H
P 
a 
II 
e
a 
I 
a
b 
d 
o 
ii 
r
e 
n 
t
s 
s 
d 
s
S
I 
I
In the previous example, SameSuit refines SameColor. Also, SameSuit refines Same-
Suit. Now, consider the relation SameValue, which is defined as consisting of all pairs of
cards with the same value. The equivalence class of the 2 of Diamonds is
12 of Diamonds, 2 of Clubs, 2 of Hearts, 2 of Spades)
This equivalence relation is shown in Figure 3.10 as a set of disjoint equivalence classes.
Clubs Diamonds Hearts 
Spades
I z 
I z•z I I 
.II 
I
2 i 
i
I _ _ 
I--I 
I- I 
I 
I 
I
__ 4 
t 
4.
~ 
T 
I __ 
I 
I_ I: 
I_ II 
I 
/
6 6 
I 
I 
I 
I 
K 
i • 
K 
[ 
+1K 
i 
ir
[17 
S 
S 
Sit 
SameValue
[t 
___ 
i 
FT 
1u 
10 1a 
10 1uit 10 1
1±J 
iJ 
J 
A 
I 
J
it K 
K 
K 
K+_ 
-
_ 
.t 
_ 
-I 
_
[1A 
jIA 
A 
A
SameSuit
Equivalence classes SameSuit (vertical) and Same Value (horizontal).
The equivalence relation of the 2 of Diamonds under SameValue is not a subset of the
equivalence class of the 2 of Diamonds under SameSuit. Hence, SameValue does not refine
SameSuit. Also, SameSuit does not refine SameValue.
Theorem 4. 
Let R, and R2 be equivalence relations on the same set X. R1 refines R2 if
and only if each equivalence class of R2 is a union of equivalence classes of R1.
Proof This proof is left as an exercise for the reader. 
U

CHAPTER 3 
Relations
Application: UNION-FIND
The UNION-FIND algorithm has a set of elements X and a relation R defined on X as
its input. The UNION-FIND algorithm starts with a partition of X in which each element
is a set consisting of a single element of X. Each related pair of elements is processed as
follows: If a related pair of elements are in different elements of the partition, those two
sets of the partition are joined, forming a new partition of X with fewer elements. If the
two elements are already in the same element of the partition, nothing is done.
As an example of how the algorithm operates, Table 3.10 shows a set with six elements
that has a relation consisting of the pairs (0, 2), (1, 4), (2, 5), (3, 6), (0, 4), and (1, 2). The
final partition has two elements, {0, 1, 2, 4, 5} and 13, 61.
UNION-FIND Algorithm
New Related Pair 
Current Partition Defined by the Equivalence Relation
101, {1}, {2}, 13], {4}, 151, {6}
Process 0 R 2 
0 and 2 are in different elements of the partition
Form new partition 
{0, 2}, [1), 13), {4}, {5}, {6}
Process 1 R 4 
1 and 4 are in different elements of the partition
Form new partition 
{0, 2}, {1, 4}, {3}, (51, (6)
Process 2 R 5 
2 and 5 are in different elements of the partition
Form new partition 
{0, 2, 5}, [1, 4}, {3}, {6}
Process 3 R 6 
3 and 6 are in different elements of the partition
Form new partition 
{0, 2, 5}, [1, 4), {3, 61
Process 0 R 4 
0 and 4 are in different elements of the partition
Form new partition 
10, 1, 2, 4, 51, {3, 61
Process 1 R 2 
1 and 2 are in the same element of the partition
Leave partition as is 
{0, 1, 2, 4, 5], {3, 6}
In computer science, this problem is of great interest, because it is an integral pro-
cessing step in many algorithms. As an example, consider using this algorithm to find
associations among a set of authors for a personal collection of journal articles about a
single topic. The problem is to determine which of these authors have worked together.
By starting with each author in a set by himself or herself, the articles will tell how to
join pairs or sets of authors into bigger sets because they have worked together. The final
outcome would be a partition of the authors such that two authors are in the same element
of the partition if and only if they had worked together. The problem of determining an
effective data structure for managing the information being processed is a major topic in
data structures.
rnExercises
1. Identify the equivalence classes of M for the following relations:
(a) 
(mod 4)
(b) 
(mod 6)

Exercises 
2. Determine which of the following five relations defined on Z are equivalence relations:
(a) {(a,b) E Z x Z: (a > 0andb >0) or(a <0andb <0)}
(b) {(a,b) E Z X 
Z 
: (a> 0andb > 0)or(a <0andb <0)}
(c) {(a,b) E Zx 2: Ia -bI 
< 101
(d) {(a,b) EZ x Z: (a < 0andb >0) or(a <0 andb <0))
(e) {(a,b) E Z x Z: (a> 0andb >0) or(a <0 andb <0)1
3. Find the elements in the relation "have the same remainder when divided by 8" if the
relation is defined on {1, 2, 3 .... 24, 25}. Also, find the distinct equivalence classes
of this equivalence relation.
4. Let POPULATION be the set of all people. Let R be the binary relation on POPU-
LATION such that (x, y) E R if x is an older brother of y or x = y. Is R reflexive?
Symmetric? Antisymmetric? Transitive? An equivalence relation?
5. Define a binary relation R on IR as {(x, y) E IR x R : x and y are both positive, both
negative, or both 0}. Prove that R is an equivalence relation. What are its equivalence
classes?
6. Define a binary relation R on IR as {(x, y) E R x R : sin(x) = sin(y)}. Prove that R
is an equivalence relation. What are its equivalence classes?
7. Let A = {a, b, c, d}. For each of the following partitions of A, list all the pairs of
elements that form the corresponding equivalence relations:
(a) {{a, b, c}, {d}}
(b) {{a}, {b), {c}, {d}}
(c) (c) {{a, b, c, d}}
8. Let A = {a, b, c, d}. For each of the following partitions of A, determine the elements
of the corresponding equivalence relation:
(a) P1 = {{a, c}, {b, dJJ
(b) P2 = {{a}, {b, c}, {d}}
(c) P3 = {{a, b}, {c, d)}
(d) P4 = {{a, b, c}, {d}}
Do any of these partitions refine any of the others?
9. Prove Theorem 1.
10. In the example 52Cards, find a simple description for each of the following:
(a) SameSuit n SameValue
(b) (SameSuit U SameValue)*
11. (a) Draw a Venn diagram showing the equivalence classes over N of =- (mod 5),
(mod 10), and =- (mod 15). Which of these equivalence relations refine another
one of these equivalence relations?
(b) Let k, m e N. We say k is a factor ofm ifm =j 
k for some j such that j E N
and 0 < j < m. What is the relationship between whether -(mod 
k) refines -
(mod m) and whether k is a factor of m or m is a factor of k? Prove your answer.
12. Let R and S be equivalence relations on a set X.
(a) Show that R n S is an equivalence relation.
(b) Show by example that R U S need not be an equivalence relation.
(c) Show that (R U S)*, the reflexive and transitive closure of R U S, is the smallest
equivalence relation containing both R and S.

CHAPTER 3 
Relations
13. Prove Theorem 4.
14. There is an old, fallacious proof that if a relation is both symmetric and transitive, it is
reflexive. We give this "proof" below. What is the error?
Suppose R is a symmetric and transitive relation on a set X. Pick an x E X.
We need to show x R x. So, take any y where x R y. By symmetry, it follows
that y R x. By transitivity, it follows that x R x.
15. For a relation R on a set X, let R* denote the reflexive and transitive closure of R.
(a) For any relation R on a set X, define a relation -' on X as follows: x - y if and
only if x R* y and y R* x. Prove that - is an equivalence relation.
(b) Let xl - x2 and yj - Y2. Show that x1 R* yi if and only if x2 R* Y2.
16. (a) For k, n1, n2, ml, m2 E N, show that if
n- 
n 2 (modk)
and
ml 
m 2 (modk)
then
nt + ml 
n2 + m2(modk)
and
nli 
ml -n2 
• m2(mod k)
(b) Part (a) says that if we take two equivalence classes [ m ] and [ n ], then we can
unambiguously define [m ] + [ n ] and [] 
[ n ]. Pick any mI I 
[ m ] and any
n I E [ n ], and define
[mi]+[n] = [ml +ni]
and
[m] • [n]--[ml - ni]
The definition is unambiguous since it doesn't matter which ml and nl we
pick. Find the addition and multiplication tables for the equivalence classes of
-
(mod 4) and =- (mod 5). (Hint: For both =- (mod 4) and - (mod 5), your an-
swer should include
[0]+[0] -[0], [01+[1] -[1], [01 . [0]- 
[0]
and
but, for -- (mod 4),
whereas, that will be false for 
(mod 5).)

Ordering Relations 
Ordering Relations
In this section, we discuss two very important classes of relations, the partial orderings and
the linear orderings. Partial orderings generalize the relation is a subset of (g), and linear
orderings generalize the relation less than (<).
3.8.1 
Partial Orderings
A typical example of a partial order, other than IsASubsetOf is the relation IsADescen-
dantOf The fact that this latter relation is a partial order contributes to the difficulty in
completing a person's genealogy. One of the difficulties involved in tracing a genealogy is
that a line of descendants often dies out, and the search then has to find another branch of
the family. The end of a line of descendants will be special elements in a partial order.
Definition 1. Let R be a binary relation on a nonempty set X. R is a partial ordering if
R is a reflexive, transitive, antisymmetric relation.
The following are standard examples of partial orderings.
Example 1. 
If U is a set, then C is a partial ordering on the subsets of U. This was proved
in Example 6(b) in Section 3.4.2 and in Example 8(e) in Section 3.4.3.
Example 2. 
In Figure 3.11, there is a representation of the eight subsets of
U = {0, 1, 2}
Each subset is obviously a subset of itself, so the relation is reflexive. The lines going
upward indicate the rest of the subset relation. Since there is a line from (1} to (0, 1}, {1}
is shown to be a subset of (0, 11. Since there is a line from 0 to {1} and another from {1} to
(0, 11, 0 is shown to be a subset of {0, 1 }. (Thus, reflexivity, antisymmetry, and transitivity
are all assumed in the way the drawing is interpreted.)
10,1,21
10,11 
10,21 
11,21
Subsets of {0, 1, 2}.
These elements also form a partial order with respect to the relation _ . By the same
argument, D is also a partial ordering on any set of sets. You just need to turn the picture
upside down to reverse the direction-that is, {0, 1, 2) Q (01.

CHAPTER 3 
Relations
{0,1,2} 
{0,1,31 
10,2,31 
{1,2,31
{0} 
{1} 
{2) 
(3)
Odd subsets of {0, 1, 2, 3}.
Example 3.
(a) The relation < is a partial ordering on N. This follows from Example 6(a) in Section
3.4.2 and Example 8(c) in Section 3.4.3. By the same argument, > is a partial ordering
on N.
(b) The relation < is not a partial ordering, since it is transitive and antisymmetric but is
not reflexive. In fact, it is irreflexive. Irreflexive relations whose reflexive closures are
partial orderings are called strict partial orderings. So, < is a strict partial ordering.
(c) On any set X, the relation = is a partial ordering. This result follows from Example
4(a) in section 3.4.2 and Example 8(a) in Section 3.4.3. 
U
Example 4. 
Elaine 
Maude
George 
Elizabeth
Subset of family tree.
Let R be the reflexive closure of the relation "ancestor of" as defined by this subset of the
family tree. Then, R is a partial ordering. The elements of the partial order are
{(Elaine, George), (Maude, Elizabeth), (Elaine, Elaine), (George, George),
(Maude, Maude), (Elizabeth, Elizabeth)) 
U
Example 5.
(a) Let
R={(x,y) :x,yENand y >xandy-xiseven)
Then, R is a partial ordering on N. (See Exercise 5 in Section 3.9.)
(b) Let I denote the relation divides on N. That is, x I y if, for some z e N, y = x • z.
Then, the relation I is a partial ordering on N.
As another, less familiar example of a partial order, we use the relation divides on the
set
{0, 1, 2, 3 ...
, 11, 12}
to define a partial order by the relation x I y if and only if y = k • x for some integer k.

Ordering Relations 
4 6 
\ 
3' 
Divides for {0, 1,2,..., 121.
Example 6. 
Let X be a collection of finite sets taken from some universal set U. Let
R = {(U, V) :U, V e X and I U I < V ii
Then, R is reflexive and transitive, but it is not antisymmetric.
Solution. Observe that if U = {0, 1, 21, then
1 (0, 1)}1 R 1(1, 2}1
and
1{1, 211 R 1{0, 1}1
but
{0, 1} # {1,21
Therefore, R need not be antisymmetric. 
U
Example 7. 
Let X be a collection of finite sets. Let
R = {(U, V) :U, V E X and (I U 
IV I or U = V)}
The relation R with X = P (Q0, 1, 2)) is shown in Figure 3.15. The lines between levels in
the figure represent the fact that the two sets are related. R is a partial ordering.
(0, 1,2)
(0, 1) 
10, 2) 
f1, 21
(21
RonP({0, 1,21).

CHAPTER 3 
Relations
Solution. 
We must show that R is reflexive, antisymmetric, and transitive.
Reflexive: Let U, V C X. If U = V, then (U, V) e R by definition of R.
Antisymmetric: Let (U, V) E R, and suppose U # V. Then, I U I < I V 1, so I V I 7I U I.
Thus, (V, U) € R.
Transitive: Let U, V, W C X. Let (U, V) E R and (V, W) E R. Show that (U, W) e R.
There are four cases, depending on why (U, V) e R and why (V, W) e R.
Case: U = V, andV= W. Then, U = W, soURW.
Case 2: U = V, and I V I < IW .Then, I U I = I V I < I W I, so (U, W) E R.
Case 3: 1 U < I V [, and V = W. This proof is analogous to the proof for Case 2.
Case 4: 1 U I < 
V I, and I V< 
I W I. Since < is a transitive relation on N, I U I < [ W I.
Hence, (U, W) e R.
Since R is reflexive, antisymmetric, and transitive, R is a partial order. 
U
3.8.2 
Linear Orderings
The relation less than (<) on the integers has the property that for any n and m with m A n,
either n < m or m < n. This property is not true for the relation of set inclusion (S). The
set X = {0, 1,2, 3} has subsets x = {0, 2) and y = {0, 1, 3) for which neither is a subset
of the other. Relations other than ones defined on a number system sometimes, however,
satisfy this property, which makes it an important property of ordering relations.
Definition 2. 
Let R be a binary relation on a set X. R is a linear ordering, or total
ordering, on X if R is a transitive relation that satisfies the law of trichotomy: For every
x, y E X, exactly one of the following conditions holds: (i) x R y, (ii) x = y, or (iii) y R x.
Example 8. 
The following are linear orderings:
(a) < is a linear ordering on R. The name linear ordering suggests points on a line, and
R is the standard mathematical model of a line. Condition (ii) is never true for this
relation!
(b) < is a linear ordering on N.
(c) Let M be the set of kings and queens of England since 1850. For X, Y E M, set X R Y
if X ruled before Y. Then, R is a linear ordering on M.
The relation < on IR is not a linear ordering, because for any x E IR, both x = x and
x < x hold. The law of trichotomy requires that exactly one of the three properties hold.
Example 9. 
(Lexicographical or Dictionary Ordering) 
The alphabetical (dictionary)
ordering of words is the basis for being able to sort sets of words in increasing or decreasing
order. For example, let English be the set of words in the latest edition of the Oxford English
Dictionary, and let < be their alphabetical ordering, in which the letters of the alphabet are
ordered from a to z, with blank being less than a. For this example, we will assume that
all words in the dictionary begin with lowercase letters. (With computers, lowercase and
uppercase letters have different representations.) Describe how two words are compared
using this ordering.

Ordering Relations 
Solution. Given two words, we will say that the one occurring first in the dictionary is
less than (<) the other. For example,
elephant < tiger
aardvark < ant
and
oz < ozymandias
The first letters of elephant and tiger determine that elephant is less than tiger. In the
second pair of words, the first two letters in the same position that are different are a and n,
which occur in the second letter position. In the third pair of words, the first two letters that
are different in the same position are y and blank. The rule can be thought of most easily
as follows: Think of a word as an infinite string of symbols where all but the first finitely
many are blank. Now, to compare two words, look for the leftmost position at which the
two words contain different letters. For example,
aardvark 
oz
a n t 
o z y m a n d i a s
The smaller word of the pair is defined to be the one with the "smaller" symbol in the
position where the two words first differ. What the rule says is that you should look up
both words in a "dictionary" and then designate the first of the two words you come to,
starting from the front of the dictionary, as the smaller word. The described ordering gives
a linear ordering of all the words of a dictionary. 
Extended ASCII Code
The storage of uppercase and lowercase letters of the alphabet in a computer often is done
by assigning an 8-bit binary code to each. A common computer code is the extended ASCII
code. Special characters and numerals as well as control codes are also assigned codes, but
the focus here is on the idea of what is happening. To be able to sort words, the code for "A'
must be easily recognized as smaller than the code for "B," "C," and so on. The extended
ASCII code for "A" is 01000001; the code for "B" is 01000010. Using the lexicographical
ordering on the bit positions starting at the left, the code for "A' is clearly smaller than the
code for "B":
01000001< 
01000010
"A"' 
< 
"B"
The complete extended ASCII code assigns 8-bit binary strings to each letter of the alpha-
bet so that
"A" < '"B" < "C", < ... < "1X" < "Y" < "Z"1

CHAPTER 3 
Relations
3.8.3 
Comparable Elements
Definition 3. 
Let R be a partial or linear ordering on a set X. Elements x, y E X are said
to be comparable under R if x R y or y R x (or both) holds.
Example 10. For X = {0, 1, 2, 31 partially ordered by the relation set inclusion P(X),
then, {0, 1) and {0, 1, 21 are comparable, but 10, 2, 31 and {0, 1) are not.
Observe that if R is a linear ordering on a set X with x, y e X and x A y, then x and
y are comparable by the law of trichotomy. Observe also that if R and S are linear or partial
orders such that R C S, then if x and y are comparable in R, they are also comparable in S.
Theorem 1.
(a) If R is a linear ordering of a set X, then R U ldx is a partial ordering of X.
(b) If R is a partial ordering of X, then R - IdX is a linear ordering of X if and only if,
for any x, y E X, the elements x and y are comparable under R.
Proof. (a) This proof is left as an exercise for the reader.
(b) (=•) 
First, suppose R - Idx is a linear ordering. Let x, y • X. It is necessary to show
that x and y are comparable under R. If x 0 y, then x and y are comparable in R - Idx
and, hence, in R by the observation before the theorem. If x = y, then (x, y) = (x, x) E R,
because Idx C R.
(.=) 
Let x, y E X. Note that since R is antisymmetric,
(x, y) E R - Idx =_ (y, x) 0 R
Transitive: Let (x, y), (y, z) E R - IdX. Then, (x, z) E R, because R is transitive. Fur-
thermore, x : z since (y, z) E R, whereas since R is antisymmetric, (y, x) 0 R. There-
fore, (x, z) E R - Idx.
Trichotomy: We must show exactly one of (i) (x, y) E R - Idx, (ii) x = y, or (iii)
(y, x) E R - Idx holds. We see that at most one of these can hold from the antisymmetric
property of R and the obvious fact that
(R - Idx) n ldx = 0
To see that at least one of these holds, let x, y E X with x : y. Since x and y are compa-
rable under R, we have (x, y) e R or (y, x) E R. Since x - y, either (x, y) E R - Idx or
(y, x) E R- Idx.
Theorem I shows that there are two differences between partial and linear orderings:
1. Partial orderings are reflexive, whereas linear orderings are irreflexive.
2. Any two unequal elements of a linearly ordered set are comparable. This need not be
true with partial orderings.
3.8.4 
Optimal Elements in Orderings
The next property to investigate in an ordering relation is whether an ordering contains an
element that is optimal in the sense that it is "larger" or "smaller" than any element to
which it is comparable. This element may not be unique; for example, {{1}, (1, 3}, 1211
under the relation C has both 11, 31 and {2) as "larger" than any element(s) to which they
are comparable. The properties of interest are more formally defined here.

Ordering Relations 
Definition 4. Let R be a partial ordering or a linear ordering on a set X. For x, y e X, if
x R y and x 0 y, then x is below y. We say x is above y if y is below x.
Example 11. 
Let X = {1, 2, 3, 41 be a set. P(X) together with C is a partial order. {I}
is below {1, 2}. {1, 21 is below {1, 2, 3, 41. {2, 31 is above both {2} and {3}. {1, 2, 3, 41 is
above each element of P(X) distinct from itself.
Observe that the relations "above" and "below" are transitive.
Definition 5. 
Let R be a partial or a linear ordering on a set X. Let x e X.
(a) x is a minimal element of X if there is no y E X such that y is below x.
(b) x is the minimum element of X if x is below every other element of X.
(c) x is a maximal element of X if there is no y e X such that y is above x.
(d) x is the maximum element of X if x is above every other element of X.
In contexts where it is not clear what ordering is being discussed, write R-minimal,
R-minimum, R-maximal, and R-maximum to clarify that the ordering relation is R.
Consider the ordering shown in Figure 3.16. In this ordering, A is the maximum ele-
ment and the only maximal element. D, E, and F are all minimal elements. There is no
minimum element.
A
B 
C
D 
E 
\F
A partial ordering P.
Turning the order in Figure 3.16 upside down produces the order shown in Figure
3.17. In this ordering, A is the minimum element, and D, E, and F are maximal elements.
There is no maximum element.
D 
E 
F
B \ 
C
A
Partial ordering P upside down.
Theorem 2. 
Let R be a partial ordering on X, and let x, y e X.
(a) If both x and y are minimum elements, then x = y. This justifies speaking of the
minimum element.
(b) If x is the minimum element of X, then x is the unique minimum element of X.
(c) If R is a linear ordering on X, then x is minimal if and only if x is the minimum
element.
(d) An element x E X is R-minimal if and only if x is R- 1 -maximal, and x is the
R-minimum element if and only if x is the R-'-maximum element.
(e) The analogous results to parts (a) through (d) are true, with minimum replaced with
maximum and minimal with maximal.

CHAPTER 3 
Relations
Proof. Proofs of (a) through (e) are left as exercises for the reader. 
U
For infinite sets like Z, there is no minimum, maximum, minimal, or maximal element.
Every finite partially ordered set has at least one minimal element and at least one maximal
element. Every finite linearly ordered set has exactly one minimum element and exactly
one maximum element. This result (for minimal elements and minimums) is proved in
Theorem 3.
Theorem 3. 
Let R be a partial ordering on afinite set X, and let x E X.
(a) Either x is minimal or there is a minimal element y E X below x.
(b) If x is the only minimal element of X, then x is the minimum element.
(c) If R is a linear ordering, then there is a minimum element in X.
Proof 
(a) Let z 1 E X. If z 1 is not minimal, there is some Z2 E X that is below z 1. If Z2 is
not minimal, we can find a Z3 below Z2. Continue in this fashion. (See Figure 3.18.) Since
X has only finitely many elements, the process must terminate after, at most, JXJ steps,
finding an element Zk for which k < I X I and for which there is no element of X below Zk.
Then, zk is a minimal element below Zl.
Zl
Elements below x and z.
(b) Let z0 e X be the only minimal element, and let z e X. By part (a), there is some
minimal element below z. That minimal element must be z0 itself, because zo is the
only minimal element. So, zo is the minimum element.
(c) By part (a), there is a minimal element of X. By Theorem 2(c), that element is the
minimum element. 
e
Of course, exactly analogous results hold for maximal and maximum elements in finite
sets. The reader should construct examples to show that 
these 
results do not necessarily
hold if the set is infinite.
3.8.5 
Application: Finding a Minimal Element
The proof of Theorem 3(a) suggests an algorithm that can be used for finding a minimal
element of a finite set where R is a partial or linear ordering.

Ordering Relations 
INPUT: A finite set X = (X 1, X2 ..... Xn}I with an ordering relation R on X
OUTPUT:" An R-minimal element of X
for i = 2 to n do
if (xi R y holds) then
y =xi
print y
Example 12. 
Find a minimal element in the partial order shown:
Solution.
Data Values
x1 = 5
X2 = 3
X3 = 4
X4 = 1
x5 =-2
Tracing the Execution
y=X1 
y=
for/ = 2
if x 2 R y 
means if 3 R 5
R does not hold for 3 and 5
for/ = 3
if x 3 R y 
means if 4 R 5
y=
for i = 4
if x4 R y 
means if I R 4
R does not hold for 1 and 4
for i = 5
if x 5 R y 
means if 2 R 5
R does not hold for 2 and 5
Print final value: y = 4 
I

CHAPTER 3 
Relations
3.8.6 
Application: Embedding a Partial Order
One fairly typical application of partial orderings is to schedule a set T of tasks. Usually, a
set of tasks includes requirements that certain tasks be completed before others begin. If it
is possible to do the tasks so that all the constraints are satisfied, these requirements may be
treated as a partial ordering R on the set of tasks where, for x, y E T, we have (x, y) E R
if and only if x must be completed before y may be begun.
Schedules to do these tasks, on the other hand, are often linear orders, since normally,
only one task can be done at a time. Hence, there is a problem of finding a linear ordering
S of T so that, if x R y and x A y, then x S y. This clearly amounts to finding a linear
ordering S so that R - IdT g S. For the partial ordering shown in Figure 3.17, the linear
ordering S could consist of the pairs {(A, B), (B, D), (D, C), (C, E), (E, F)} together
with the pairs needed to make the relation transitive. Another linear order that would satisfy
the condition consists of the pairs {(A, C), (C, B), (B, F), (F, E), (E, D)} together with
the other pairs needed to make the relation transitive. The process of finding a linear order
associated with a partial order is called embedding a partial order in a linear order.
Example 13. 
Construct a schedule for logging on to a computer and both checking email
and modifying a text file. Checking email includes opening the mailer and both replying
to a new message and creating a new message to another person. Modifying the text file
involves opening a text editor, loading a file, editing the first paragraph of the file, inserting
a separate file at the end of the file, and saving the modified file. The user is allowed to
move back and forth between the mailer and the text editor for separate tasks.
Solution. First, draw a diagram representing the dependency among various activities:
a Logon
Open 
Open Text
Mailer 
b 
e Editor
c 
'd 
f 
Open File
Reply 
Send New
Msg. 
Insert
Modify 
'h Ext. File
File
Save
Modified
File
Partial order
Next, find a linear order that embeds this partial order. One result is shown here:

Exercises 
a 
a Logon
e 
e Load Text Editor
f 
f Open File
Dh 
P h Insert Ext. File
b 
b b Open Mailer
4P 
c Reply
g 
P g Modify File
d 
P, d Send New Msg.
0 i Save Modified File
Linear order 
U
In Chapter 6, we will examine and analyze an algorithm called Topological Sort that
carries out the embedding of a partial order in a linear order.
rnExercises
1. (a) Draw the diagram to represent the I (divides) partial order on {1, 2, 3, 4, 5, 6}.
(b) List all the maximal, maximum, minimal, and minimum elements.
2. (a) Draw a diagram to represent the I (divides) partial order on 10, 1, 2, 3, 4, 5, 6, 7,
8,9, 10, 111.
(b) Identify all minimal, minimum, maximal, and maximum elements in the diagram.
3. (a) Draw a diagram to represent the I (divides) partial order on the set {1, 2, 3, 4, 5, 6,
7,8,9,10,11).
(b) Identify all minimal, minimum, maximal, and maximum elements in the diagram.
4. Draw a diagram to represent the I (divides) partial order on the following:
(a) {1, 111
(b) 11, 3, 7, 211
(c) {1, 2, 3, 4, 6, 9, 12, 18, 36)
(d) {1, 2, 4, 8, 16, 32, 64)
5. Prove that Examples 5(a) and (b) are partial orderings.
6. Let
X = 1-5, -4, -3, -2, -1,0, 1, 2, 3,4, 51
For x, y E X, set x R y if x2 < y 2 or x = y. Show that R is a partial ordering on X.
Draw a diagram of R.
7. (a) Explain why the relation "is older than or the same age" is a partial order.
(b) Explain why the relation "is older than" is not a linear order.

CHAPTER 3 
Relations
8. Construct the partial order represented by the family tree shown here. The relation is
"is a descendant of."
Mary = John
Peter = Elaine 
Maude = Harold
George 
Elizabeth
9. For the set of all people, prove that the relation "weighs no more than" is not a partial
order.
10. For the set of all people, prove that the relation "weighs less than" is not a linear order.
11. (a) Fordx,r y E 
definexIprNyif,forsomeZ E N,z :0,z 0 1,z 
x =y.Wesay
x is a proper divisor of y. Is IpreN a linear ordering on N?
(b) In the real numbers, 
define 
x 
I pR Y if, for 
some 
z 
E R, z #: 
, z 
• #1, z 
y 
x
Y. Is I 
prR 
a linear ordering on 
?R?
12. Prove Theorem 1 (a).
13. For the partial orders shown in Figures 3.11, 3.12, 3.14, and 3.15, identify all minimal,
minimum, maximum, and maximal elements.
14. Suppose A, B, C, D, E, and F are tasks that must be performed with the precedence
shown:
A
B /\C
D / 
E / 
F
For example, E must be completed before either B or C can be performed, but
D, E, and F can be completed in any order relative to one another. Let T =
{A, B, C, D, E, Fl, and define the partial order R on T as represented by the dia-
gram. Find a linear order S on T where R - IdT C S.
15. Challenge: Find a partial ordering with exactly one minimal element but where that
element is not a minimum element.
16. Prove Theorem 2. (Hint: The proof of part (e) should be quite short.)
rnRelational Databases: An Introduction
A database is a shared collection of interrelated data designed to meet the varied infor-
mation needs of an organization. To describe many interrelationships among many types
of objects, there needs to be a good way to represent these interrelationships. The diagram
of Figure 3.2 is a clear illustration of a family tree, but it uses certain specific facts about
family relationships-for example, that each person has exactly two parents. It would be
much harder to represent more complicated relationships using the same type of diagram.

Relational Databases: An Introduction 
A database system provides a framework for representing complex relationships. In
this section, we will discuss one model for a database system called a relational database
system. The reason we call this model a relational database system will become clear as we
work through an example. To simplify the discussion, we will present simplified versions
of the database operations.
3.10.1 
Storing Information in Relations
To introduce some of the features of a relational database system, we consider the rela-
tional representation of a familiar problem: How can we keep track of student registrations
in classes and teaching assignments of instructors. This section shows how a relational
database system could be used.
The first requirement is to store the information about which students have registered
for which classes at a university. In this example, John von Neumann, Emmy Noether, and
Herman Hollerith are all taking English 101, section 3. George Boole, Rend Descartes,
and Winston Churchill are taking English 101, section 4. John von Neumann and Emmy
Noether are also taking English 103, section 1. George Boole and Winston Churchill are
also taking Mathematics 101, section 1. Finally, Ren6 Descartes and Herman Hollerith are
also taking Computer Science 103, section 3. This information is collected in Table 3.11.
Registration Relation
Registration
Student 
Department 
Course 
Section
John von Neumann 
English 
Emmy Noether 
English 
Herman Hollerith 
English 
George Boole 
English 
Ren6 Descartes 
English 
Winston Churchill 
English 
John von Neumann 
English 
Emmy Noether 
English 
George Boole 
Mathematics 
Winston Churchill 
Mathematics 
Rene Descartes 
Computer Science 
Herman Hollerith 
Computer Science 
In a relational database, the n-tuples in an n-ary relation are simply called tuples.
The relations themselves are called tables. Each column in a table is an attribute, and the
values that appear in that column are referred to as values of that attribute.
In this example, many other 4-tuples (or quadruples) could be in the Registration
relation, such as (George Boole, English 103, 4) or (Herman Hollerith, Mathematics, 103,
3). A 4-tuple is in the relation only if the student is registered for that section of that course.
Now, suppose a second relation is defined that records the professors for the various
courses. It is possible to make a 5-ary relation that stores all the information in Registra-
tion plus the name of the professor for each course. However, the information about who

CHAPTER 3 
Relations
is teaching a course is often used for purposes independent of determining who is regis-
tered for the course. It therefore is better to store the new information in a separate table.
The information about the professors is contained in the relation TeachingAssignments,
which is shown in Table 3.12. The value of the relational database will be seen when we
explain how information from various tables can be combined to answer questions. In this
case, we might want to use the two tables Registration and TeachingAssignments to list the
professors of a particular student.
TeachingAssignments Relation
TeachingAssignments
Department 
Course 
Section 
Professor
English 
Geoffrey Chaucer
English 
William Morris
English 
Thomas Jefferson
Mathematics 
David Hilbert
Mathematics 
Leonardo of Pisa
Computer Science 
Alan Turing
Some information from Registration is repeated in TeachingAssignments. One prob-
lem in designing the relations in a relational database systems is to manage the needed
redundancy in a set of tables.
Each row in the table TeachingAssignments is a 4-tuple, and the relation is the set of
4-tuples that record the teaching assignments for each course. Note that David Hilbert and
Leonardo of Pisa are probably team-teaching Mathematics 101, section 1.
Finally, because the total teaching program in each department is the responsibility of
a department chair, a relation that gives this information is needed. This relation consists
of a set of tuples of length two, or ordered pairs, as seen in Table 3.13.
Table3.13 
DepartmentChair Relation
DepartmentChair
Department 
Chair
English 
Francis Bacon
Mathematics 
Carl Gauss
Computer Science 
Alan Turing
A set of relations, such as the three shown in this example, are the data used by a
relational database system.
3.10.2 
Relational Algebra
In designing the data for a database system, three things are important. First, how are the
data and relationships stored? Second, how can the data be modified? Third, can informa-
tion be extracted? As already noted, the data and relationships are stored in tables. Methods
to modify the data will not be discussed here; a course devoted to file processing will spend
much time dealing with just the problems you face in implementing a database system.

Relational Databases: An Introduction 
Relational databases have standard operations that act on relations. A request to extract
data from the database is called a query. Queries use standard operations to create their
output. The standard set of operations used is called the relational algebra. Three of the
operations of the relational algebra are described in the examples that follow.
First Operation: Selection
Given a relation such as Registration, some users may be interested in only some of the
values of an attribute. As an example, for an attribute such as Department, and a set of
possible values for that attribute, such as {Mathematics, Computer Science}, form a new
relation by selecting only the tuples with a value of Department that is in {Mathematics,
Computer Science).
to the one that will be generated by this operation.
Registration Relation
Registration
Student 
Department 
Course Section
John von Neumann 
English 
Emmy Noether 
English 
Herman Hollerith 
English 
George Boole 
English 
Ren6 Descartes 
English 
Winston Churchill 
English 
John von Neumann 
English 
Emmy Noether 
English 
George Boole 
Mathematics 
Winston Churchill 
Mathematics 
Ren6 Descartes 
Computer Science 
Herman Hollerith 
Computer Science 
The result of this selection operation is the relation R', which is shown in Table 3.15.
R' Relation
Student 
Department 
Course Section
George Boole 
Mathematics 
Winston Churchill 
Mathematics 
Rend Descartes 
Computer Science 
Herman Hollerith 
Computer Science 
Suppose a user wants to make a selection query of a database. A selection query returns
a table with just the tuples that satisfy some condition, like students taking mathematics
courses. The database contains relations R1, R2 .. . .. R, To specify a selection query, the
user inputs three things: the name of the relation from which the selection is to be made

CHAPTER 3 
Relations
(that is, some Ri), the (name of the) attribute on which the selection is to be made, and a
finite set of possible values for that attribute. Then, the database system outputs all tuples
in that relation with a value for the attribute that is in that finite set.
There is also a second form that we shall use in the exercises: The user may input the
name of the relation, the names of two attributes, and = or <. If the user inputs Teaching-
Assignments, Section, Course, and <, then the user is asking for all scheduled courses
(for which teachers have been assigned) where the section number is less than the course
number.
What we have given here is a much more limited than the standard database definition
of selection. We have adopted this definition to keep the exposition simple.
Second Operation: Projection
For any table in a relational database, it often happens that a query is only interested in one
attribute. For example, in the relation R' in Table 3.14, suppose that you want to know the
names of the students. The only attribute of interest is Student. The attributes Department,
Course, and Section all may be important in other contexts, but for now, only the Student
entries are needed. The operation that reduces a relation to a new relation consisting of
some of the attributes and the entries for those attributes is called projection.
The second operation, or projection, is now used to find a relation that consists of
some of the attributes of an existing relation. A relation, such as Registration, and a subset
of its attributes, such as {Student, Department, I form the projection Rt of the relation onto
those attributes as follows: First, delete the attributes not in {Student, Department} from
each tuple of the relation Registration. The resulting relation Rt is shown in Table 3.16.
Rt Relation with Duplicates
Rt
Student 
Department
John von Neumann 
English ÷-
Emmy Noether 
English
Herman Hollerith 
English
George Boole 
English
Ren6 Descartes 
English
Winston Churchill 
English
John von Neumann 
English +-
Emmy Noether 
English
George Boole 
Mathematics
Winston Churchill 
Mathematics
Ren6 Descartes 
Computer Science
Herman Hollerith 
Computer Science
In Table 3.16, you see that the tuples (John von Neumann, English) and (Emmy
Noether, English) occur twice. Since a relation is a set, it makes no sense to say twice
that a tuple is an element of a set. So, the final step in forming a projection is to eliminate
duplicate entries from the table Rt to form the relation Registration' shown in Table 3.17.
The projection of Registration tells which students are taking classes in which depart-
ments.

Relational Databases: An Introduction 
Registration' Relation
Registration'
Student 
Department
John von Neumann 
English
Emmy Noether 
English
Herman Hollerith 
English
George Boole 
English
Ren6 Descartes 
English
Winston Churchill 
English
George Boole 
Mathematics
Winston Churchill 
Mathematics
Ren6 Descartes 
Computer Science
Herman Hollerith 
Computer Science
Example 1. Projection is actually a common operation in areas other than databases.
Look at graphing relations on R2, and consider the relation
C = {(x, y) E R2 : (x - 2)2 + (y - 2)2 = 1}
The graph of C is a circle in the plane with center (2, 2) and radius 1. Figure 3.19 shows
the graph of C and its projection onto the x-axis.
(2, 3)
(1,2) 
9(2,2) 
(3,2)
(2, 1)
Two values or points on the circle are projected onto each element in the open interval
(1,3).
Third Operation: Join
Consider two relations, such as Registration and TeachingAssignments. Recall it was ar-
gued that since they really store different information, they need to be two separate tables.
Nevertheless, some people using the system will want to know the combined information-
that is, which students are taking which classes (departments, course numbers, and section
numbers) taught by which professors. The join of the two relations puts all the information
together. The relation that is needed, called JoinedRelation, is shown in Table 3.18. The

CHAPTER 3 
Relations
question is how to arrive at this table starting with the tables Registration and TeachingAs-
signments.
JoinedRelation
JoinedRelation
Student 
Department 
Course 
Section 
Professor
John von Neumann 
English 
Geoffrey Chaucer
Emmy Noether 
English 
Geoffrey Chaucer
Herman Hollerith 
English 
Geoffrey Chaucer
George Boole 
English 
William Morris
Ren6 Descartes 
English 
William Morris
Winston Churchill 
English 
William Morris
John von Neumann 
English 
Thomas Jefferson
Emmy Noether 
English 
Thomas Jefferson
George Boole 
Mathematics 
David Hilbert
Winston Churchill 
Mathematics 
David Hilbert
George Boole 
Mathematics 
Leonardo of Pisa
Winston Churchill 
Mathematics 
Leonardo of Pisa
Ren6 Descartes 
Computer Science 
Alan Turing
Herman Hollerith 
Computer Science 
Alan Turing
After defining the join of two relations and giving a small example, we will present an
algorithm that could be used to actually find the join of two relations.
The formation of the join of two relations is a three-step process. In the first
step, we take two relations, R with attributes AI, A2, A3 ,..., Am and S with attributes
B 1, B2 , B3 ...
, B, and form the database Cartesian product. The database Cartesian
product R x S is a relation with attributes A 1, A2, .... 
Am, B 1, B 2, ...
, Bn, and its tuples
are
{(al, a2 ...
, am, bl, b2,..., bn) : (a,_. 
, am) e R and (bl, b2 ,..., 
b,) E S}
Note that the database definition of the term Cartesian product differs slightly from the
set theoretic notion. The set theory definition results in 2-tuples, whereas here, all the
coordinates are kept without extra parentheses.
The second step of the process involves forming the equijoin of R and S on attributes
Ai and Bj by selecting all tuples from R x S where the values of attributes Ai and Bj are
the same. To form the equijoin on several pairs of attributes, Ai, Bjl, Ai 2, Bj2,..., Aik, Bik,
perform k selections; that is, select tuples whose values on Ai, and Bj, are the same, whose
values on Ai2 and Bj2 are the same, and so on. Often, the names of attributes Ai and Bj will
in practice be the same. In that case, we may say we are taking the join on attribute Ai.
Note that in the equijoin, the attributes Ai and Bj contain the same informa-
tion. The third step of the join eliminates the second of the duplicated columns: The
join of R and S on attributes Ai and Bj is the projection of the equijoin on at-
tributes A 1 ...
, Am, B 1 ...
, Bj-1 , Bj+I ...
, B, The join on several attribute pairs omits
("projects out") the second attribute from each pair.
The natural join of relations R and S, written R >.i S, is the join of R and S on all
attribute pairs with the same name.

Relational Databases: An Introduction 
Example 2. 
Define the relations R and S as shown:
R 
S
Name 
Class Average 
Name 
Major
Joe 
2004 
3.14 
Joe 
Mathematics
Sue 
2004 
2.97 
Sue 
Computer Science
Mary 
2005 
3.76 
Mary 
Sociology
Form the join of R and S on Name.
Solution. First, form the database Cartesian product R x S.
Database Cartesian Product of R x S
Name 
Class 
Average 
Name 
Major
Joe 
2004 
3.14 
Joe 
Mathematics
Joe 
2004 
3.14 
Sue 
Computer Science
Joe 
2004 
3.14 
Mary 
Sociology
Sue 
2004 
2.97 
Joe 
Mathematics
Sue 
2004 
2.97 
Sue 
Computer Science
Sue 
2004 
2.97 
Mary 
Sociology
Mary 
2005 
3.76 
Joe 
Mathematics
Mary 
2005 
3.76 
Sue 
Computer Science
Mary 
2005 
3.76 
Mary 
Sociology
Now, form the equijoin: Extract the subset of R x S for which the entries for Name are
equal, giving R'.
RxS
Name 
Class Average 
Name 
Major
Joe 
2004 
3.14 
Joe 
Mathematics
Sue 
2004 
2.97 
Sue 
Computer Science
Mary 
2005 
3.76 
Mary 
Sociology
Finally, project R x S on {Name, Class, Average, Name, Major} -
{Name} to form the
join of R and S on Name.
RxS
Name 
Class 
Average 
Major
Joe 
2004 
3.14 
Mathematics
Sue 
2004 
2.97 
Computer Science
Mary 
2005 
3.76 
Sociology 
U
One of the problems with database queries involves the complexity of finding the join
of two relations. A join on more than a single attribute can be defined. The first example
had three common attributes. The algorithm for finding the join makes the complexity of
this operation clearer.

CHAPTER 3 
Relations
INPUT: Relations R and S with common attributes B1, B2.  
Bj
OUTPUT: Relation J that is the join of R and S on B1, B2.  
Bj
J=0
for each tuple x E R do
Select all tuples y c S whose values on B 1.  
Bj
are all the same as x's
for each such tuple y do
Form a tuple z by concatenating x with y
Eliminate the duplicate entries for attributes
B1, B2.  
Bj, creating a tuple z'
J = J U {Z')
Example 3. 
Use relational algebra, applied to the relations Registration and Teaching-
Assignments, to find a list of all professors who have either Ren6 Descartes or Winston
Churchill as students.
Solution. First, form the natural join of Registration and TeachingAssignments. Then,
select all tuples in the joined relation with student Ren6 Descartes or Winston Churchill.
The result is shown in Table 3.19.
Step lJoin
Step l Join
Student 
Department 
Course Section 
Professor
Ren6 Descartes 
English 
William Morris
Winston Churchill 
English 
William Morris
Winston Churchill 
Mathematics 
David Hilbert
Winston Churchill 
Mathematics 
Leonardo of Pisa
Ren6 Descartes 
Computer Science 
Alan Turing
Finally, project the SteplJoin relation onto the attribute set {Professorl, and remove
any duplicate entries. The resulting relation is shown in Table 3.20.
The relation Professor answers the question of which professors have either Winston
Churchill or Ren6 Descartes as a student. 

Exercises 
Projection
Professor
William Morris
David Hilbert
Leonardo of Pisa
Alan Turing
Exercises
1. What operations can you apply to the sample relations in Section 3.10.1 to get the
following relations?
(a) Professors and the departments in which they teach courses.
(b) Students and professors from whom they take courses.
(c) Professors and the chairs of the departments in which they teach courses.
(d) Pairs of departments that currently provide courses with the same number. So,
having {English, Mathematics) in the relation would assert that both departments
have courses with a number such as 101.
2. Use the operations of relational algebra and the sample relations in Section 3.10 to
extract the following information:
(a) The students taking English courses.
(b) The students taking classes from Geoffrey Chaucer or Thomas Jefferson.
(c) The professors teaching courses in departments chaired by Carl Gauss or Alan
Turing.
(d) The students taking classes from professors who teach some class in a department
chaired by Carl Gauss or Alan Turing.
3. Add to the course scheduling database a relation showing which courses are prerequi-
sites for which other courses. Create some sample entries to illustrate the relations.
4. (a) Rewrite the two relations Registration and TeachingAssignments as binary relations
between people on the one hand and triples (Department, Course Number, Section
Number) on the other. Does this relation make more sense?
(b) Using this approach, why could you not do Exercise 1(d)? Suggest a meaningful
extra relation that would allow you to do Exercise 1 (d).
5. What simple operation on relations could you add to make it easy to list the number
of students in classes taught by Alan Turing? (Note: This problem asks you to design
a new type of query. Accordingly, it has no right or wrong answers, but some answers
will be simpler than others.)
Exercises 6 through 12 ask questions about the database shown in the three relations
Students, Grades, and Catalog:

CHAPTER 3 
Relations
Students
SocSecNo 
Name 
Major 
Class Year
247617832 
Smith, John 
Mathematics 
2005
477677251 
Brown, Mae 
English 
2006
149867253 
Cyr, Pete 
Mathematics 
2005
316719842 
Williams, Sue 
English 
2004
Grades
SocSecNo 
CourseCode Grade
316719842 
Math2l1 
A
247617832 
Engll03 
B
149867253 
Math214 
A
149867253 
Engll03 
A
316719842 
Math3l8 
B
316719842 
Eng1224 
A
Catalog
CourseCode 
Department 
Credits
Math2l1 
Mathematics 
Engl 103 
English 
Math214 
Mathematics 
Math318 
Mathematics 
Eng1224 
English 
6. Find the join of Grades and Catalog.
7. Find the join of Students and Grades.
8. Find the join of Students, Grades, and Catalog.
9. Find all students who received an A in a course.
10. Find the department and number of credits for any course in which a student received
an A.
11. Find all second-year students who received an A.
12. Find the departments in which a student received an A in one of that department's
courses.
U 
Chapter Review
The idea of a relation gives a format for studying mathematical and nonmathematical re-
lationships. Forming the composition of relations and defining the inverse of a relation
are fundamental operations on relations. The common properties of relations such as =,
<, and C are abstracted to define what it means for a relation to be reflexive, irreflexive,
symmetric, antisymmetric, and transitive. Finding the reflexive, symmetric, or transitive
closure of a relation identifies the smallest relation containing a given relation with a given

Chapter Review 
property. Focusing on reflexive, symmetric, and transitive relations leads to equivalence
relations and partitions. Focusing on antisymmetric and transitive relations leads to par-
tial and total orders. When discussing ordering relations, it is important to understand the
notion of comparable elements. Special comparable elements include minimal, minimum,
maximal, and maximum elements. Finally, the chapter deals with relations in the context
of the operations that are used by a relational database.
Applications in this chapter include lexicographical or dictionary ordering, finding a
minimal element, and embedding a partial order in a total order. The examples dealing with
relational databases point out the operations that are used for processing queries in such a
database.
3.12.1 
Summary
3.1 and 3.2 
Summary
TERMS
binary relation 
n-tuples
composition 
property
deck of 52 cards 
query
empty relation 
relations
equality relation 
ternary relation
family tree 
trivial relation
identity relation 
unary relation
inverse 
universal relation
irreflexiv 
void relation
n-ary relation
3.4 
Summary
TERMS
antisymmetric 
reflexive closure
graph 
reflexive and transitive closure
irreflexive 
symmetric
nth power of R 
symmetric closure
R + 
transitive
R* 
transitive closure
reflexive
THEOREMS
"A relation R on a set X is reflexive if and 
The reflexive closure of a relation R on a
only if IDx C R. 
set X is R U IDx.
"A relation R on a set X is irreflexive if and 
The symmetric closure of a relation R on a
only if R n Idx = 0. 
set X is R U R- 1.
"A relation R on a set X is symmetric if and 
The transitive closure of a relation R on a
only if R = R-1. 
set X is R+.
"A relation R on a set X is transitive if and 
The reflexive and transitive closure of a
only if R o R C R. 
relation R on a set X is R*.

CHAPTER 3 
Relations
3.6 
Summary
TERMS
congruent 
quotient
divisible by 
refines
equivalence class 
remainder
equivalence relation 
x =- y (mod p)
partition
THEOREMS
Let P be a partition of a set X. For x • y E X, define x - y to mean that x and y are in the
same element of the partition. Then, - is an equivalence relation. The equivalence classes
of - are exactly the elements of P.
3.8 
Summary
TERMS
above 
maximal
ASCII code 
maximum
below 
minimal
comparable 
minimum
dictionary ordering 
optimal
divides 
partial ordering
embedding 
strict partial ordering
law of trichotomy 
total ordering
lexicographical ordering
linear ordering
ALGORITHMS
Finding a Minimal Element
3.10 
Summary
TERMS
attribute 
query
cartesian product 
relational algebra
database 
relational database
equijoin 
selection
join 
table
natural join 
tuples
projection 
value
quadruples
ALGORITHM
Join Two Relations

Chapter Review 
3.12.2 
Starting to Review
1. Let A = {1, 2, 3, 41. Define a relation R of A as R = {(1, 3), (4, 2), (2, 4), (2, 3),
(3, 1)}. Which of the following properties does this relation not possess?
(a) Reflexive
(b) Symmetric
(c) Transitive
(d) All of the above
2. Which of the following relations defined on X = { 1, 2, 31 is an equivalence relation?
(a) {(1, 2), (2, 2), (3, 3)}
(b) [(1, 1), (2, 2), (2, 2), (2, 1), (3, 3), (1, 1)}
(c) {(1, 1), (1, 2), (1, 3), (2, 2), (2, 1), (3, 3), (3, 1)}
(d) All of the above
3. Let R be a relation on a set S. R is circular if, for x, y, z e S, whenever x R y and
y R z, it follows that z R x. Which of the properties do a reflexive and circular relation
possess?
(a) Irreflexive
(b) Transitive
(c) Antisymmetric
(d) None of the above
4. Which of the following relations defined on X = {1, 2, 3} is a partial order?
(a) {(1, 1), (2, 2), (3, 3))
(b) {(1, 2), (1, 2), (2, 2), (3, 3)}
(c) {(1, 1), (2, 1), (2, 2), (1, 3), (3, 3)1
(d) All of the above
5. Given the following graph of a partial order R on X = 11, 2, 3, 4, 51, list all the ordered
pairs (x, y) such that x R y.
6. Let R be a partial order on a set X, and let x E X. The element x is a minimal element
in R if:
(a) x <yforallyrX.
(b) x < y for all y E X such that y 0 x and y is comparable to x.
(c) x < y for all y such that y E X and y is comparable to x.
(d) None of the above.

CHAPTER 3 
Relations
7. Prove that {(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (1, 5), (2, 4), (2, 6), (4, 6), (6, 4),
(6, 2), (4, 2), (5, 1)} is an equivalence relation. Find the distinct equivalence classes
for this equivalence relation.
8. If A = {1, 2, 3, 4, 5} and R is the equivalence relation on A that induces the partition
A = {1,2} U {3,4} U {5}
what is R?
9. What are the minimal and maximal elements in the following diagram of a partial
order?
a 
b
< 
Of
d 
e
10. What is the difference between a maximal element and a maximum element in a partial
order on a set X?
3.12.3 
Review Questions
1. Prove or find a counterexample to the following conjectures about relations R1 and R2 .
(a) If R, and R2 are reflexive, then R1 o R2 is reflexive.
(b) If R1 and R2 are irreflexive, then R1 o R2 is irreflexive.
(c) If RI and R2 are symmetric, then RI o R2 is symmetric.
(d) If R1 and R2 are antisymmetric, then RI o R2 is antisymmetric.
(e) If R, and R2 are transitive, then RI o R2 is transitive.
2. For x, y E Z, define the relation R as x R y if and only if x • y is odd. Is R Reflexive?
Symmetric? Transitive? Prove, or give a counterexample.
3. Let R be a relation defined on (a, b, c, d} such that
R = {(a, a), (b, b), (c, a), (d, d), (a, b), (b, d), (a, d)}
Find the symmetric closure of R.
4. Find the transitive closure of the relation R = {(1, 2), (2, 3), (3, 4), (4, 1)}. Show R'
for all values of i that give new elements of the transitive closure.
5. Define the relation R on R x IR such that for any (x, y), (u, v) E 1R x 1R, we have
(x, y) R (u, v) if and only if y = v. Prove that R is an equivalence relation.
6. Let R be a binary relation on the set of all strings of O's and l's such that R = { (x, y)
strings x and y contain the same number of O's}. Is R Reflexive? Symmetric? Anti-
symmetric? Transitive? An equivalence relation?
7. The oddness or evenness of an integer is called its parity. Prove that the relation "have
the same parity" is an equivalence relation. Find the distinct equivalence classes of this
equivalence relation.
8. Four friends-Bill, Chuck, Maria, and Susie-are seated around a table. Define a re-
lation ARRANGE to contain a pair (Arrl, Arr2) of seating arrangements for these four
people around a round table ifArrl can be obtained from Arr2 by shifting each person

Chapter Review 
the same number of places to the right or to the left. Prove that this relation is an equiv-
alence relation. How many equivalence classes are there, and what are the members
of each equivalence class? Can you conjecture how many equivalence classes there
would be if there were n friends?
9. Let R be a reflexive relation on a set A. R is an equivalence relation if and only if
(a, b), (a, c) E R implies that (b, c) e R.
10. Let T be a relation on A, and let R be a reflexive and transitive relation on A. Prove that
T is an equivalence relation on A provided (a, b) e T if and only if (a, b), (b, a) E R.
11. Let R1 be a partial order on S and R2 a partial order on T. For (si, tI), (s2, t 2 ) E S x T,
define (sl, t1) R3 (s2, t 2 ) if and only if sl R1 s2 andt1 R2 t 2 . Prove that R3 is a partial
order.
12. Let X = { 1, 2, 3, 41, and let P (X) be the power set of X. Let P (X) be partially ordered
by set inclusion. Find an embedding of this partial ordering into a total ordering.
3.12.4 
Using Discrete Mathematics in Computer Science
Definition. 
An upper bound of two elements in a partial order is an element that is
greater than both of the elements. A least upper bound is an upper bound that is smaller
than any other upper bound. A lower bound of two elements in a partial order is an element
that is less than both of the elements. A greatest lower bound is a lower bound that is
larger than any other lower bound.
1. Find the least upper bound and the greatest lower bound of each pair of elements in the
partial order represented by the following diagram:
h
f 
g
e
d
bc
a
2. Find the least upper bound and the greatest lower bound of each pair of elements in the
partial order represented by the following diagram:
f 
g
e
d
bc
a

CHAPTER 3 
Relations
3. Define the relation D on N so that n D m if and only if n I m. An upper bound of two
natural numbers in D is a natural number that both divide. The smallest such natural
number is called the least upper bound and is denoted as lub(, ). For example, 6 is the
least upper bound of 2 and 3. A lower bound of two natural numbers in D is a natural
number that divides both numbers. The largest such natural number is called the greatest
lower bound and is denoted as glb(, ). For example, the greatest lower bound of 4 and
6 is 2. Find:
(a) lub(13, 29)
(b) lub(12, 60)
(c) glb(37, 12)
(d) glb(48, 60)
4. In drawing computer images of scenes, one must be able to tell which objects hide or
partially hide, other objects from view. Imagine a scene in two dimensions consisting
of a set L of line segments of various lengths drawn parallel to the x-axis. The line seg-
ments may intersect. For each of the following relations R on set L, is R antisymmetric?
Transitive?
(a) R(f, m) if there is at least one point on segment f that can look parallel to the y-axis
and see a point on m (a line of sight may have zero length).
(b) R(f, m) if no point of f can look parallel to the y-axis and see any point of m.
5. Carry out a selection sort (defined in Section 1.7.1) on the words able, cane, bell, after,
stick, and belt. Explain how lexicographical ordering is used for each comparison.
6. Let T = {A, B, C, D, E, F), and define the partial order R on T as represented by the
following diagram:
A
B / 
C
D / 
E / 
F
(a) Identify all maximal, maximum, minimal, and minimum elements of the partial
order represented by the diagram.
(b) Find a linear order on T where R - IdT C S.
7. (a) Prove that logical equivalence is an equivalence relation on the set of all formulas
of propositional logic.
(b) Show that as long as we have infinitely many proposition letters, there are infinitely
many equivalence classes. (Hint: Once you see the idea, this is pretty trivial.)
(c) Show that for logical equivalence on the set of all formulas in which the only propo-
sition letters are P1, P2 ..
p., 
p, there are 22' equivalence classes.

Functions
In the study of mathematics, functions provide an important unifying concept. Functions
are also familiar in computer science as components of programs that formalize the rela-
tionship between the input and the output for a computation. The problem of designing a
combinatorial circuit often starts by defining a function that describes the behavior of the
circuit for each possible input. Using functions to describe the behavior of a circuit, we
can use techniques of Sections 2.5.2 and 2.5.4 to draw the combinatorial circuit with the
same behavior. Since functions are special kinds of sets or relations, we will study them
here using the ideas introduced in Chapters 1 and 3.
First, we define both functions and several fundamental properties of functions. Next,
we deal with operations on functions, and basic properties of functions resulting from the
operations introduced are explored. We explain special properties of functions, such as how
many objects are related to a single object by a given function. Examples of functions with
each property are given to help understand and differentiate among the properties that func-
tions may possess. We discuss the Pigeon-Hole Principle and the Generalized Pigeon-Hole
Principle, the applications of which include such different ideas as proving that rational
numbers have a repeating decimal expansion and that two students in a small class will
have a birthday on the same day of the week. Finally, we show how functions provide a
way to formalize the notion of counting, and we see how to count the number of elements
in both finite and infinite sets. In the context of counting rational and real numbers, Can-
tor's first and second diagonal arguments are introduced. These diagonal arguments come
up in many computer science contexts, especially in the theory of computation and the
analysis of algorithm complexity.
rn 
Basic Definitions
Intuitively, a function is a black box into which we put objects and out of which come
other objects. A function must satisfy two rules. First, if an object is put in, then something
must come out. Second, for each object input, there is only one possible output. If the same
object is put in several times, then the same output must come out each time. No matter
how many times one asks on what day Julius Caesar was born, the answer is always the
same.

CHAPTER 4 
Functions
x
FI
F(x)
Function.
Example 1.
(a) Visualize a classroom in which every student is seated at a chair. A function called
SeatOf, outputs the chair at which a student is sitting for each student in the class.
(b) One may specify a function even though one does not have enough information
whether in some or in all cases, to calculate its values. Let BirthDate be the func-
tion that accepts as input any person whose name appears in the current edition of the
Encyclopedia Britannica and that outputs that person's birth date. No one knows the
true birth date of Euclid, but Euclid, like every other person, did have a birth date. So,
the function BirthDate still makes perfectly good sense. 
Example 2.
(a) Let Zero R be the function that accepts as input any real number r and that always
outputs 0. A function may be quite simple!
(b) Let X be any set. Let Idx be the function that accepts as input any x in X and that
outputs the same x. Idx is called the identity function on X.
(c) The function Floor accepts any real number as input and outputs the integer formed
by truncating the fractional part of the number input. For example, Floor(3.14159) =
L3.14159] = 3.
(d) The function Ceiling accepts any real number as input and outputs the smallest in-
teger greater than or equal to the number input. For example, Ceiling(3.14159) =
[3.141591 = 4. This function is also referred to as the greatest integer function. 
U
The output of a function may be more complex to determine.
Example 3. 
Let the function ParentsOf accept a person as input and output the ordered
pair
(person's mother, person's father)
Example 4.
(a) By contrast with Example 3, there is no function ParentOf that picks out a person's
parent. Such a rule is not a function, since there are two parents, from which one must
be chosen as output.
(b) There is no function ChildOf that picks out a person's child. One reason this may not
be a function is that some people have no children and, consequently, no object can be

Basic Definitions 
output. Some people also have more than one child from which to choose, and in this
case, the function would not know which child to output. However, there is a function
ChildrenOf that assigns to each person the set of that person's children. If a person has
no children, the output of ChildrenOf is the empty set (0).
We now define informally some basic vocabulary that will be more carefully defined
later. We will illustrate these terms with the function SeatOf from Example 1.
The domain of a function is the set of all things that may be input to produce some
output. The domain is usually apparent from the definition of the function. For example,
the domain of SeatOf is the set of all students in the classroom.
The range of a function is the set of all things that are output. The range of SeatOf is
the set of all occupied chairs in the classroom. Once one knows the domain of a function,
one can determine the range by applying the function to each element of the domain.
The codomain of a function is the set of all values that are potential outputs. In in-
formal descriptions, codomains are often not specified. For example, it is perhaps most
reasonable to infer that the codomain of the function SeatOf is the set of all chairs in the
classroom, but it is also plausible to infer that the codomain is the set of all occupied chairs.
The codomain often cannot be determined from the description of the function alone; it
must be inferred from the rest of the discussion. In less formal treatments, the codomain
will often be implicitly defined. For example, in many mathematics courses, the codomain
of most functions is implicitly R. In other cases, as a convenience, the codomain is simply
assumed to be equal to the range.
Everything so far has been intuitively expressed in terms of a black box. A formal
definition of the term function is needed. Traditionally, there have been two ways to define
this term. The first is to consider a function to be a rule. The second is to consider a function
to be a specific kind of set. We will discuss the idea of a function as a rule first, since it is
familiar from both computer programming and mathematics courses. After dealing with a
function as a rule, we will discuss the idea of a function as a set. (We will give our formal
definition in terms of sets.)
4.1.1 
Functions as Rules
The notion of a function as a rule is familiar to anyone involved in computer programming.
A function subprogram can be viewed as a series of instructions that tell how to calculate
an output from some input.
Example 5. 
The following rules define functions:
(a) Let H be the function with domain and codomain equal to N that outputs n/2 for even
inputs and 3n + 1 for odd inputs.
(b) For n e N, compute Fact(n) = n! as follows:
input N
Fact = 1
while N > 0
Fact = Fact. N
N=N-l
print Fact

CHAPTER 4 
Functions
It is important to realize that the code itself is no
