# BCS405A — Textbook Notes

**Subject:** BCS405A (Discrete Mathematical Structures)
**Content type:** textbook_notes
**Primary Reference:** Kenneth H. Rosen — Discrete Mathematics and Its Applications

---

# BCS405A — Textbook Notes (Module-wise)
**Subject:** Discrete Mathematical Structures
**Prescribed Textbooks:** Kenneth H. Rosen — Discrete Mathematics and Its Applications

---

## Module 1 Textbook: Mathematical Logic

### Textbook Excerpt — Reference: T1_Discrete_Mathematics_for_Computer_Science.txt

database consists of a number of relations.
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
Table 3.6 shows two subsets of the relations =N and </q. Since both relations
are infinite, the entire relation obviously cannot be displayed.
Table 3.6
Two Relations on N
IdN
LtN
If R is a binary relation on a set X, then (x, y) e R may also be written as x R y.
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
Let the set X consist of the nine positions on a tic-tac-toe board, named pl,
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
(P5, P4, P6), (p5, pi, p9), and (Ps, P7, P3). Both (P5, P2, P8) and (Ps, 

---

## Module 2 Textbook: Set Theory and Relations

### Textbook Excerpt — Reference: T1_Discrete_Mathematics_for_Computer_Science.txt

{3, 4, 7, 12, 19, . .. 1. An obvious candidate is -3,
since
-3
E A and -3
V B. We need to show that there is some fixed integer of the form 2k0 - 3,
for ko e N, that can be written as j2 + 3 for some choice ofj c N. If such a j existed, we
would have 2k0 - 3 = j2 + 3. In the case ko = 0, the element j would have to satisfy
-3 = j 2 +3
or j 2 +
U
One last possibility for set inclusion: One set can be a subset of a second subset, but
not every element of the first set need be an element of the second set. This proper inclusion
is formalized in the next template.
To prove that one set is a proper subset of another (A C B), first prove that A __ B,
and then show that some element x of B is not in A.

Basic Definitions
Example 7.
Let
A = {n c N
n > 2 and n = 4j -
and
B = in E N n > 0 and n = 2k + 1 for some k e NJ
Prove that A C B.
Solution.
To show that A C B, we must show that every element of A is an element
of B. Let n = 4j0 -
n c B, we must show that n = 2k + 1 for some k e N. We see if this is possible by solving
for k:
2k+1 =4j 0 -5
2k = 4 jo - 6
k = 2j 0-3
Now, 2jo - 3 > 0, since jo > 2. Since 2(2jo -
an element of B, and A C B.
For 0 E N, 2.0 + 1 = 1 e B. If 1 E A, then 1 = 4j -
for j, we find that j must be equal to 3/2, which is not a natural number. Therefore, no j
exists. Therefore, 1 E B, and 1 0 A. It follows that A C B.
The next step is to deal with set equality and set inequality.
In the case that we have two set descriptions and want to know that the sets are
equal, there are actually two things to prove. The proof that two sets are equal follows
Template 1.5.
Example 8.
Let
A =In : n = 2j for some j E N}
and
B = {n : n = 2k + 2 for some k E Z and k > - 1)
Prove that A = B.
Solution. To show that an arbitrary element of A, say, 2jo for some jo e N, is an element
of B, we must find a k E Z such that k > -1 and 2jo = 2k + 2. Solving for k gives k =
jo -

CHAPTER 1 Sets, Proof Templates, and Induction
of B, say, 2ko + 2 for some k0 E Z and ko > -1, is an element of A, we must find a
j E N such that 2j = 2k0 + 2. This implies that j must satisfy j = ko + 1 if 2k0 + 2 is an
element of A. Since ko > -1, we have ko + 1 > 0, and k0 + 1 defines an element of A.
Because A C B and B C A, it follows that A = B.
U
There are often many different descriptions for a single set. One problem is to make
sure that the set description that is given in fact describes the set intended. The idea of a
proof to show that two sets are not equal is given in the next template.
The way to show that A C B is false is to find an element x such that x G A and x g B.
Showing that B C A is false is done analogously, but only one of these implications needs
to be shown to prove that A A B.
Example 9.
Let
A = {n: n E N and n = 4j2 - 3 for some j G N}
and
B = {n E N: n = 2k 2 - 3 for somek E N}
Prove that A A B.
Solution.
To show that A : B, it suffices to find an element in A that is not an element
of B. We will show that 1 is such an element.
We can write 1 = 4(1)2 - 3

### Textbook Excerpt — Reference: T1_Discrete_Mathematics_for_Computer_Science.txt

database consists of a number of relations.
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
Table 3.6 shows two subsets of the relations =N and </q. Since both relations
are infinite, the entire relation obviously cannot be displayed.
Table 3.6
Two Relations on N
IdN
LtN
If R is a binary relation on a set X, then (x, y) e R may also be written as x R y.
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
Let the set X consist of the nine positions on a tic-tac-toe board, named pl,
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
(P5, P4, P6), (p5, pi, p9), and (Ps, P7, P3). Both (P5, P2, P8) and (Ps, 

---

## Module 3 Textbook: Functions and Algebraic Structures

### Textbook Excerpt — Reference: T1_Discrete_Mathematics_for_Computer_Science.txt

balls in C((n - k) + k - 1, k - 1) = C(n - 1, k - 1) ways. Put the balls occurring
before the first mark into the first urn, the balls between the first and second mark in the
second urn, and so on, until the n - k balls are put into the k urns that already contain one
ball each.
Example 5.
A data set contains 500 observations. Analysis of the data is carried out by
three programs that together process the 500 observations such that each program pro-
cesses at least 100 observations. If the partition of the 500 observations for use by the three
programs is done by arbitrarily choosing the observations for each program, in how many
ways can the data be processed?
Solution. Think of the programs as urns and the observations as balls. The problem asks
in how many ways 500 balls can be put into three urns, with each urn containing at least
C(500 - 300 + 3 - 1, 3 - 1) = C(202, 2) = 20,301
U
Example 6.
How many ways can the equation
k1 +k 2 +'"+kr
=n
for r < n be solved with integers ki > 0 for r > i > 1 ?

Combinatorial Identities
Solution. First, restate the problem in terms of urns and balls. How many ways can n
balls be put into r urns? This number is just C(n + r - 1, r - 1). The number of balls in
urn i is just ki for i = 1, 2 .... r.
M
Example 7.
How many ways can you solve
k1 +k 2 +k 3 +k 4 = 18
provided that k1, k2, k3, and k4 are integers and k1, k2 > 0, k3 > 3, k4 > 2?
Solution. First, put the five required values in k3 and k4. Then, ask how many ways there
are to solve
k1 + k2 + k3 + k4 = 13
with k1, k2, k3, k4 > 0. This number is just
C(13 +4-
rnCombinatorial Identities
In this section, a representation of the binomial coefficients known as Pascal's triangle is
introduced and used to prove several useful combinatorial identities. Typical arguments
for solving counting problems can be algebraic or combinatorial in nature. We will show
examples of how to prove combinatorial identities using both types of arguments. Com-
binatorial arguments for proving combinatorial identities usually involve counting the
same objects in two different ways. Since the same objects are being counted, the two ex-
pressions for the count must be equal. Often, a combinatorial argument restates the problem
in a context with an obvious interpretation for the two sides of the identity. Theorems 3,
straightforward algebraic manipulations to turn the expression on one side of the identity
into the expression on the other side. Pascal's Triangle is also used to prove a number of
combinatorial identites.
The next two theorems have two proofs each, one an algebraic proof and the other a
combinatorial proof.
Theorem 3. (Newton's Identity)
Let n > k > m > 1. Then,
C(n, k) • C(k, m) = C(n, m) • C(n - m, k - m)
Proof
(Combinatorial)
The left-hand side first counts the number of k-element sub-
sets of an n-element set. The left-hand side then counts how many m-element subsets are
contained in an arbitrary k-element subset. The right-hand side first counts the number of
m-elem

---

## Module 4 Textbook: Graph Theory

### Textbook Excerpt — Reference: T1_Discrete_Mathematics_for_Computer_Science.txt

balls in C((n - k) + k - 1, k - 1) = C(n - 1, k - 1) ways. Put the balls occurring
before the first mark into the first urn, the balls between the first and second mark in the
second urn, and so on, until the n - k balls are put into the k urns that already contain one
ball each.
Example 5.
A data set contains 500 observations. Analysis of the data is carried out by
three programs that together process the 500 observations such that each program pro-
cesses at least 100 observations. If the partition of the 500 observations for use by the three
programs is done by arbitrarily choosing the observations for each program, in how many
ways can the data be processed?
Solution. Think of the programs as urns and the observations as balls. The problem asks
in how many ways 500 balls can be put into three urns, with each urn containing at least
C(500 - 300 + 3 - 1, 3 - 1) = C(202, 2) = 20,301
U
Example 6.
How many ways can the equation
k1 +k 2 +'"+kr
=n
for r < n be solved with integers ki > 0 for r > i > 1 ?

Combinatorial Identities
Solution. First, restate the problem in terms of urns and balls. How many ways can n
balls be put into r urns? This number is just C(n + r - 1, r - 1). The number of balls in
urn i is just ki for i = 1, 2 .... r.
M
Example 7.
How many ways can you solve
k1 +k 2 +k 3 +k 4 = 18
provided that k1, k2, k3, and k4 are integers and k1, k2 > 0, k3 > 3, k4 > 2?
Solution. First, put the five required values in k3 and k4. Then, ask how many ways there
are to solve
k1 + k2 + k3 + k4 = 13
with k1, k2, k3, k4 > 0. This number is just
C(13 +4-
rnCombinatorial Identities
In this section, a representation of the binomial coefficients known as Pascal's triangle is
introduced and used to prove several useful combinatorial identities. Typical arguments
for solving counting problems can be algebraic or combinatorial in nature. We will show
examples of how to prove combinatorial identities using both types of arguments. Com-
binatorial arguments for proving combinatorial identities usually involve counting the
same objects in two different ways. Since the same objects are being counted, the two ex-
pressions for the count must be equal. Often, a combinatorial argument restates the problem
in a context with an obvious interpretation for the two sides of the identity. Theorems 3,
straightforward algebraic manipulations to turn the expression on one side of the identity
into the expression on the other side. Pascal's Triangle is also used to prove a number of
combinatorial identites.
The next two theorems have two proofs each, one an algebraic proof and the other a
combinatorial proof.
Theorem 3. (Newton's Identity)
Let n > k > m > 1. Then,
C(n, k) • C(k, m) = C(n, m) • C(n - m, k - m)
Proof
(Combinatorial)
The left-hand side first counts the number of k-element sub-
sets of an n-element set. The left-hand side then counts how many m-element subsets are
contained in an arbitrary k-element subset. The right-hand side first counts the number of
m-elem

---

## Module 5 Textbook: Combinatorics and Recurrence

### Textbook Excerpt — Reference: T1_Discrete_Mathematics_for_Computer_Science.txt

balls in C((n - k) + k - 1, k - 1) = C(n - 1, k - 1) ways. Put the balls occurring
before the first mark into the first urn, the balls between the first and second mark in the
second urn, and so on, until the n - k balls are put into the k urns that already contain one
ball each.
Example 5.
A data set contains 500 observations. Analysis of the data is carried out by
three programs that together process the 500 observations such that each program pro-
cesses at least 100 observations. If the partition of the 500 observations for use by the three
programs is done by arbitrarily choosing the observations for each program, in how many
ways can the data be processed?
Solution. Think of the programs as urns and the observations as balls. The problem asks
in how many ways 500 balls can be put into three urns, with each urn containing at least
C(500 - 300 + 3 - 1, 3 - 1) = C(202, 2) = 20,301
U
Example 6.
How many ways can the equation
k1 +k 2 +'"+kr
=n
for r < n be solved with integers ki > 0 for r > i > 1 ?

Combinatorial Identities
Solution. First, restate the problem in terms of urns and balls. How many ways can n
balls be put into r urns? This number is just C(n + r - 1, r - 1). The number of balls in
urn i is just ki for i = 1, 2 .... r.
M
Example 7.
How many ways can you solve
k1 +k 2 +k 3 +k 4 = 18
provided that k1, k2, k3, and k4 are integers and k1, k2 > 0, k3 > 3, k4 > 2?
Solution. First, put the five required values in k3 and k4. Then, ask how many ways there
are to solve
k1 + k2 + k3 + k4 = 13
with k1, k2, k3, k4 > 0. This number is just
C(13 +4-
rnCombinatorial Identities
In this section, a representation of the binomial coefficients known as Pascal's triangle is
introduced and used to prove several useful combinatorial identities. Typical arguments
for solving counting problems can be algebraic or combinatorial in nature. We will show
examples of how to prove combinatorial identities using both types of arguments. Com-
binatorial arguments for proving combinatorial identities usually involve counting the
same objects in two different ways. Since the same objects are being counted, the two ex-
pressions for the count must be equal. Often, a combinatorial argument restates the problem
in a context with an obvious interpretation for the two sides of the identity. Theorems 3,
straightforward algebraic manipulations to turn the expression on one side of the identity
into the expression on the other side. Pascal's Triangle is also used to prove a number of
combinatorial identites.
The next two theorems have two proofs each, one an algebraic proof and the other a
combinatorial proof.
Theorem 3. (Newton's Identity)
Let n > k > m > 1. Then,
C(n, k) • C(k, m) = C(n, m) • C(n - m, k - m)
Proof
(Combinatorial)
The left-hand side first counts the number of k-element sub-
sets of an n-element set. The left-hand side then counts how many m-element subsets are
contained in an arbitrary k-element subset. The right-hand side first counts the number of
m-elem

---
