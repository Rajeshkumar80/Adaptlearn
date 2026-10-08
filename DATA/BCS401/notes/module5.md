# BCS401 — Module 5

## Backtracking and Branch-and-Bound

**Subject:** BCS401 (Analysis and Design of Algorithms)
**Module:** Module 5
**Content type:** module_notes
**Sources:** BCS401-module-5-textbook.txt

---

Limitations of Algorithm Power
6. Find a tight lower bound for sorting an array by exchanging its adjacent
elements.
7. Give an adversary-argument proof that the time efﬁciency of any algorithm
that checks connectivity of a graph with n vertices is in (n2), provided the
only operation allowed for an algorithm is to inquire about the presence of
an edge between two vertices of the graph. Is this lower bound tight?
8. What is the minimum number of comparisons needed for a comparison-based
sorting algorithm to merge any two sorted lists of sizes n and n + 1 elements,
respectively? Prove the validity of your answer.
9. Find the product of matrices A and B through a transformation to a product
of two symmetric matrices if
A =

−1

and
B =

−1

.
10. a. Can one use this section’s formulas that indicate the complexity equiva-
lence of multiplication and squaring of integers to show the complexity
equivalence of multiplication and squaring of square matrices?
b. Show that multiplication of two matrices of order n can be reduced to
squaring a matrix of order 2n.
11. Find a tight lower-bound class for the problem of ﬁnding two closest numbers
among n real numbers x1, x2, . . . , xn.
12. Find a tight lower-bound class for the number placement problem (Problem 9
in Exercises 6.1).
11.2
Decision Trees
Many important algorithms, especially those for sorting and searching, work by
comparing items of their inputs. We can study the performance of such algorithms
with a device called a decision tree. As an example, Figure 11.1 presents a decision
tree of an algorithm for ﬁnding a minimum of three numbers. Each internal node
of a binary decision tree represents a key comparison indicated in the node,
e.g., k < k′. The node’s left subtree contains the information about subsequent
comparisons made if k < k′, and its right subtree does the same for the case of
k > k′. (For the sake of simplicity, we assume throughout this section that all input
items are distinct.) Each leaf represents a possible outcome of the algorithm’s
run on some input of size n. Note that the number of leaves can be greater than
the number of outcomes because, for some algorithms, the same outcome can
be arrived at through a different chain of comparisons. (This happens to be the
case for the decision tree in Figure 11.1.) An important point is that the number of
leavesmustbeatleastaslargeasthenumberofpossibleoutcomes.Thealgorithm’s
work on a particular input of size n can be traced by a path from the root to a leaf
in its decision tree, and the number of comparisons made by the algorithm on such
MODULE-5

11.2
Decision Trees
yes
yes
no
no
no
yes
a
c
b
c
a < c
b < c
a < b
a run is equal to the length of this path. Hence, the number of comparisons in the
worst case is equal to the height of the algorithm’s decision tree.
The central idea behind this model lies in the observation that a tree with a
given number of leaves, which is dictated by the number of possible outcomes, has
to be tall enough to have that many leaves. Speciﬁcally, it is not difﬁcult to prove
that for any binary tree with l leaves and height h,
h ≥⌈log2 l⌉.
(11.1)
Indeed, a binary tree of height h with the largest number of leaves has all its leaves
on the last level (why?). Hence, the largest number of leaves in such a tree is 2h.
In other words, 2h ≥l, which immediately implies (11.1).
Inequality (11.1) puts a lower bound on the heights of binary decision trees
and hence the worst-case number of comparisons made by any comparison-based
algorithm for the problem in question. Such a bound is called the information-
theoretic lower bound (see Section 11.1). We illustrate this technique below on
two important problems: sorting and searching in a sorted array.
Decision Trees for Sorting
Most sorting algorithms are comparison based, i.e., they work by comparing
elements in a list to be sorted. By studying properties of decision trees for such
algorithms, we can derive important lower bounds on their time efﬁciencies.
We can interpret an outcome of a sorting algorithm as ﬁnding a permutation of
the element indices of an input list that puts the list’s elements in ascending order.
Consider, as an example, a three-element list a, b, c of orderable items such as
real numbers or strings. For the outcome a < c < b obtained by sorting this list
(see Figure 11.2), the permutation in question is 1, 3, 2. In general, the number of
possible outcomes for sorting an arbitrary n-element list is equal to n!.

Limitations of Algorithm Power
yes
yes
yes
yes
no
no
no
yes
no
no
no
a < b
abc
bac
abc
cba
a < c
b < a
b < c
cba
b < a
a < c
a < b < c
abc
b < c
abc
yes
a < c < b
c < a < b
c < b < a
b < a < c
b < c < a
node indicates the state of the array being sorted. Note two redundant
comparisons b < a with a single possible outcome because of the results
of some previously made comparisons.
Inequality (11.1) implies that the height of a binary decision tree for any
comparison-based sorting algorithm and hence the worst-case number of com-
parisons made by such an algorithm cannot be less than ⌈log2 n!⌉:
Cworst(n) ≥⌈log2 n!⌉.
(11.2)
Using Stirling’s formula for n!, we get
⌈log2 n!⌉≈log2
√
2πn(n/e)n = n log2 n −n log2 e + log2 n
+ log2 2π
≈n log2 n.
In other words, about n log2 n comparisons are necessary in the worst case to sort
an arbitrary n-element list by any comparison-based sorting algorithm. Note that
mergesort makes about this number of comparisons in its worst case and hence is
asymptotically optimal. This also implies that the asymptotic lower bound n log2 n
is tight and therefore cannot be substantially improved. We should point out,
however, that the lower bound of ⌈log2 n!⌉can be improved for some values of
n. For example, ⌈log2 12!⌉= 29, but it has been proved that 30 comparisons are
necessary (and sufﬁcient) to sort an array of 12 elements in the worst case.
We can also use decision trees for analyzing the average-case efﬁciencies of
comparison-based sorting algorithms. We can compute the average number of
comparisons for a particular algorithm as the average depth of its decision tree’s
leaves, i.e., as the average path length from the root to the leaves. For example, for

11.2
Decision Trees
yes
yes
no
no
no
yes
yes
no
no
a < b
abc
acb
a < c
bca
b < c
b < c
a < b < c
abc
a < c
bac
yes
a < c < b
c < a < b
c < b < a
b < a < c
b < c < a
the three-element insertion sort whose decision tree is given in Figure 11.3, this
number is (2 + 3 + 3 + 2 + 3 + 3)/6 = 2 2
3.
Under the standard assumption that all n! outcomes of sorting are equally
likely, the following lower bound on the average number of comparisons Cavg
made by any comparison-based algorithm in sorting an n-element list has been
proved:
Cavg(n) ≥log2 n!.
(11.3)
As we saw earlier, this lower bound is about n log2 n. You might be surprised that
the lower bounds for the average and worst cases are almost identical. Remember,
however, that these bounds are obtained by maximizing the number of compar-
isons made in the average and worst cases, respectively. For a particular sorting
algorithm, the average-case efﬁciency can, of course, be signiﬁcantly better than
their worst-case efﬁciency.
Decision Trees for Searching a Sorted Array
In this section, we shall see how decision trees can be used for establishing lower
bounds on the number of key comparisons in searching a sorted array of n keys:
A[0] < A[1] < . . . < A[n −1]. The principal algorithm for this problem is binary
search. As we saw in Section 4.4, the number of comparisons made by binary
search in the worst case, Cbs
worst(n), is given by the formula
Cbs
worst(n) = ⌊log2 n⌋+ 1 = ⌈log2(n + 1)⌉.
(11.4)

Limitations of Algorithm Power
A[1]
A[3]
A[0]
A[2]
A[1]
< A[0]
A[3]
> A[3]
A[0]
A[2]
(A[0], A[1])
(A[1], A[2])
(A[2], A[3])
<
>
=
<
<
>
>
=
=
<
>
=
We will use decision trees to determine whether this is the smallest possible
number of comparisons.
Since we are dealing here with three-way comparisons in which search key K is
compared with some element A[i]to see whether K < A[i], K = A[i], or K > A[i],
it is natural to try using ternary decision trees. Figure 11.4 presents such a tree for
the case of n = 4. The internal nodes of that tree indicate the array’s elements being
compared with the search key. The leaves indicate either a matching element in
the case of a successful search or a found interval that the search key belongs to
in the case of an unsuccessful search.
We can represent any algorithm for searching a sorted array by three-way
comparisons with a ternary decision tree similar to that in Figure 11.4. For an
array of n elements, all such decision trees will have 2n + 1 leaves (n for successful
searches and n + 1for unsuccessful ones). Since the minimum height h of a ternary
tree with l leaves is ⌈log3 l⌉, we get the following lower bound on the number of
worst-case comparisons:
Cworst(n) ≥⌈log3(2n + 1)⌉.
This lower bound is smaller than ⌈log2(n + 1)⌉, the number of worst-case
comparisons for binary search, at least for large values of n (and smaller than or
equal to ⌈log2(n + 1)⌉for every positive integer n—see Problem 7 in this section’s
exercises). Can we prove a better lower bound, or is binary search far from
being optimal? The answer turns out to be the former. To obtain a better lower
bound, we should consider binary rather than ternary decision trees, such as the
one in Figure 11.5. Internal nodes in such a tree correspond to the same three-
way comparisons as before, but they also serve as terminal nodes for successful
searches. Leaves therefore represent only unsuccessful searches, and there are
n + 1 of them for searching an n-element array.

11.2
Decision Trees
A[1]
< A[0]
> A[3]
(A[0], A[1])
(A[1], A[2])
(A[2], A[3])
<
<
<
<
>
>
>
>
A[0]
A[2]
A[3]
As comparison of the decision trees in Figures 11.4 and 11.5 illustrates, the
binary decision tree is simply the ternary decision tree with all the middle subtrees
eliminated. Applying inequality (11.1) to such binary decision trees immediately
yields
Cworst(n) ≥⌈log2(n + 1)⌉.
(11.5)
This inequality closes the gap between the lower bound and the number of worst-
case comparisons made by binary search, which is also ⌈log2(n + 1)⌉. A much
more sophisticated analysis (see, e.g., [KnuIII, Section 6.2.1]) shows that under the
standard assumptions about searches, binary search makes the smallest number
of comparisons on the average, as well. The average number of comparisons made
by this algorithm turns out to be about log2 n −1 and log2(n + 1) for successful
and unsuccessful searches, respectively.
Exercises 11.2
1. Prove by mathematical induction that
a. h ≥⌈log2 l⌉for any binary tree with height h and the number of leaves l.
b. h ≥⌈log3 l⌉for any ternary tree with height h and the number of leaves l.
2. Consider the problem of ﬁnding the median of a three-element set {a, b, c}
of orderable items.
a. What is the information-theoretic lower bound for comparison-based al-
gorithms solving this problem?
b. Draw a decision tree for an algorithm solving this problem.
c. If the worst-case number of comparisons in your algorithm is greater
than the information-theoretic lower bound, do you think an algorithm

11.3
P, NP, and NP-Complete Problems
a. Prove that any algorithm for this problem must make at least ⌈log3(2n + 1)⌉
weighings in the worst case.
b. Draw a decision tree for an algorithm that solves the problem for n = 3
coins in two weighings.
c. Prove that there exists no algorithm that solves the problem for n = 4 coins
in two weighings.
d. Draw a decision tree for an algorithm that solves the problem for n = 4
coins in two weighings by using an extra coin known to be genuine.
e. Draw a decision tree for an algorithm that solves the classic version of
the problem—that for n = 12 coins in three weighings (with no extra coins
being used).
11. Jigsaw puzzle
A jigsaw puzzle contains n pieces. A “section” of the puzzle is
a set of one or more pieces that have been connected to each other. A “move”
consists of connecting two sections. What algorithm will minimize the number
of moves required to complete the puzzle?
11.3
P, NP, and NP-Complete Problems
In the study of the computational complexity of problems, the ﬁrst concern of both
computer scientists and computing professionals is whether a given problem can
be solved in polynomial time by some algorithm.
DEFINITION 1
We say that an algorithm solves a problem in polynomial time
if its worst-case time efﬁciency belongs to O(p(n)) where p(n) is a polynomial of
the problem’s input size n. (Note that since we are using big-oh notation here,
problems solvable in, say, logarithmic time are solvable in polynomial time as
well.) Problems that can be solved in polynomial time are called tractable, and
problems that cannot be solved in polynomial time are called intractable.
There are several reasons for drawing the intractability line in this way. First,
the entries of Table 2.1 and their discussion in Section 2.1 imply that we cannot
solve arbitrary instances of intractable problems in a reasonable amount of time
unless such instances are very small. Second, although there might be a huge
difference between the running times in O(p(n)) for polynomials of drastically
different degrees, there are very few useful polynomial-time algorithms with the
degree of a polynomial higher than three. In addition, polynomials that bound
running times of algorithms do not usually have extremely large coefﬁcients.
Third, polynomial functions possess many convenient properties; in particular,
both the sum and composition of two polynomials are always polynomials too.
Fourth, the choice of this class has led to a development of an extensive theory
called computational complexity, which seeks to classify problems according to
their inherent difﬁculty. And according to this theory, a problem’s intractability

Limitations of Algorithm Power
remains the same for all principal models of computations and all reasonable
input-encoding schemes for the problem under consideration.
We just touch on some basic notions and ideas of complexity theory in this
section. If you are interested in a more formal treatment of this theory, you will
have no trouble ﬁnding a wealth of textbooks devoted to the subject (e.g., [Sip05],
[Aro09]).
P and NP Problems
Most problems discussed in this book can be solved in polynomial time by some
algorithm. They include computing the product and the greatest common divisor
of two integers, sorting a list, searching for a key in a list or for a pattern in a text
string, checking connectivity and acyclicity of a graph, and ﬁnding a minimum
spanning tree and shortest paths in a weighted graph. (You are invited to add
more examples to this list.) Informally, we can think about problems that can be
solved in polynomial time as the set that computer science theoreticians call P. A
more formal deﬁnition includes in P only decision problems, which are problems
with yes/no answers.
DEFINITION 2
Class P is a class of decision problems that can be solved in
polynomial time by (deterministic) algorithms. This class of problems is called
polynomial.
The restriction of P to decision problems can be justiﬁed by the following
reasons. First, it is sensible to exclude problems not solvable in polynomial time
because of their exponentially large output. Such problems do arise naturally—
e.g., generating subsets of a given set or all the permutations of n distinct items—
but it is apparent from the outset that they cannot be solved in polynomial time.
Second, many important problems that are not decision problems in their most
natural formulation can be reduced to a series of decision problems that are easier
to study. For example, instead of asking about the minimum number of colors
needed to color the vertices of a graph so that no two adjacent vertices are colored
the same color, we can ask whether there exists such a coloring of the graph’s
vertices with no more than m colors for m = 1, 2, . . . . (The latter is called the m-
coloring problem.) The ﬁrst value of m in this series for which the decision problem
of m-coloring has a solution solves the optimization version of the graph-coloring
problem as well.
It is natural to wonder whether every decision problem can be solved in
polynomial time. The answer to this question turns out to be no. In fact, some
decision problems cannot be solved at all by any algorithm. Such problems are
called undecidable, as opposed to decidable problems that can be solved by an
algorithm. A famous example of an undecidable problem was given by Alan

11.3
P, NP, and NP-Complete Problems
Turing in 1936.1 The problem in question is called the halting problem: given a
computer program and an input to it, determine whether the program will halt on
that input or continue working indeﬁnitely on it.
Here is a surprisingly short proof of this remarkable fact. By way of contra-
diction, assume that A is an algorithm that solves the halting problem. That is, for
any program P and input I,
A(P, I) =
 1,
if program P halts on input I;
0,
if program P does not halt on input I.
We can consider program P as an input to itself and use the output of algorithm
A for pair (P, P) to construct a program Q as follows:
Q(P) =
 halts,
if A(P, P) = 0, i.e., if program P does not halt on input P;
does not halt, if A(P, P) = 1, i.e., if program P halts on input P.
Then on substituting Q for P, we obtain
Q(Q) =
 halts,
if A(Q, Q) = 0, i.e., if program Q does not halt on input Q;
does not halt, if A(Q, Q) = 1, i.e., if program Q halts on input Q.
This is a contradiction because neither of the two outcomes for program Q is
possible, which completes the proof.
Are there decidable but intractable problems? Yes, there are, but the number
of known examples is surprisingly small, especially of those that arise naturally
rather than being constructed for the sake of a theoretical argument.
There are many important problems, however, for which no polynomial-time
algorithm has been found, nor has the impossibility of such an algorithm been
proved. The classic monograph by M. Garey and D. Johnson [Gar79] contains a
list of several hundred such problems from different areas of computer science,
mathematics, and operations research. Here is just a small sample of some of the
best-known problems that fall into this category:
Hamiltonian circuit problem
Determine whether a given graph has a
Hamiltonian circuit—a path that starts and ends at the same vertex and passes
through all the other vertices exactly once.
Traveling salesman problem
Find the shortest tour through n cities with
known positive integer distances between them (ﬁnd the shortest Hamiltonian
circuit in a complete graph with positive integer weights).
1.
This was just one of many breakthrough contributions to theoretical computer science made by the
English mathematician and computer science pioneer Alan Turing (1912–1954). In recognition of this,
the ACM—the principal society of computing professionals and researchers—has named after him an
award given for outstanding contributions to theoretical computer science. A lecture given on such an
occasion by Richard Karp [Kar86] provides an interesting historical account of the development of
complexity theory.

Limitations of Algorithm Power
Knapsack problem
Find the most valuable subset of n items of given positive
integer weights and values that ﬁt into a knapsack of a given positive integer
capacity.
Partition problem
Given n positive integers, determine whether it is possi-
ble to partition them into two disjoint subsets with the same sum.
Bin-packing problem
Given n items whose sizes are positive rational num-
bers not larger than 1, put them into the smallest number of bins of size 1.
Graph-coloring problem
For a given graph, ﬁnd its chromatic number,
which is the smallest number of colors that need to be assigned to the graph’s
vertices so that no two adjacent vertices are assigned the same color.
Integer linear programming problem
Find the maximum (or minimum)
value of a linear function of several integer-valued variables subject to a ﬁnite
set of constraints in the form of linear equalities and inequalities.
Some of these problems are decision problems. Those that are not have
decision-version counterparts (e.g., the m-coloring problem for the graph-coloring
problem). What all these problems have in common is an exponential (or worse)
growth of choices, as a function of input size, from which a solution needs to be
found. Note, however, that some problems that also fall under this umbrella can
be solved in polynomial time. For example, the Eulerian circuit problem—the
problem of the existence of a cycle that traverses all the edges of a given graph
exactly once—can be solved in O(n2) time by checking, in addition to the graph’s
connectivity, whether all the graph’s vertices have even degrees. This example is
particularly striking: it is quite counterintuitive to expect that the problem about
cycles traversing all the edges exactly once (Eulerian circuits) can be so much
easier than the seemingly similar problem about cycles visiting all the vertices
exactly once (Hamiltonian circuits).
Another common feature of a vast majority of decision problems is the fact
that although solving such problems can be computationally difﬁcult, checking
whether a proposed solution actually solves the problem is computationally easy,
i.e., it can be done in polynomial time. (We can think of such a proposed solution
as being randomly generated by somebody leaving us with the task of verifying its
validity.) For example, it is easy to check whether a proposed list of vertices is a
Hamiltonian circuit for a given graph with n vertices. All we need to check is that
the list contains n + 1 vertices of the graph in question, that the ﬁrst n vertices are
distinct whereas the last one is the same as the ﬁrst, and that every consecutive
pair of the list’s vertices is connected by an edge. This general observation about
decision problems has led computer scientists to the notion of a nondeterministic
algorithm.
DEFINITION 3
A nondeterministic algorithm is a two-stage procedure that
takes as its input an instance I of a decision problem and does the following.
Nondeterministic (“guessing”) stage: An arbitrary string S is generated that
can be thought of as a candidate solution to the given instance I (but may be
complete gibberish as well).

11.3
P, NP, and NP-Complete Problems
Deterministic (“veriﬁcation”) stage: A deterministic algorithm takes both I
and S as its input and outputs yes if S represents a solution to instance I. (If S is
not a solution to instance I, the algorithm either returns no or is allowed not to
halt at all.)
We say that a nondeterministic algorithm solves a decision problem if and
only if for every yes instance of the problem it returns yes on some execu-
tion. (In other words, we require a nondeterministic algorithm to be capable
of “guessing” a solution at least once and to be able to verify its validity. And,
of course, we do not want it to ever output a yes answer on an instance for
which the answer should be no.) Finally, a nondeterministic algorithm is said to
be nondeterministic polynomial if the time efﬁciency of its veriﬁcation stage is
polynomial.
Now we can deﬁne the class of NP problems.
DEFINITION 4
Class NP is the class of decision problems that can be solved by
nondeterministic polynomial algorithms. This class of problems is called nonde-
terministic polynomial.
Most decision problems are in NP. First of all, this class includes all the
problems in P:
P ⊆NP.
This is true because, if a problem is in P, we can use the deterministic polynomial-
time algorithm that solves it in the veriﬁcation-stage of a nondeterministic algo-
rithm that simply ignores string S generated in its nondeterministic (“guessing”)
stage. But NP also contains the Hamiltonian circuit problem, the partition prob-
lem, decision versions of the traveling salesman, the knapsack, graph coloring, and
many hundreds of other difﬁcult combinatorial optimization problems cataloged
in [Gar79]. The halting problem, on the other hand, is among the rare examples
of decision problems that are known not to be in NP.
This leads to the most important open question of theoretical computer sci-
ence: Is P a proper subset of NP, or are these two classes, in fact, the same? We
can put this symbolically as
P ?= NP.
Note that P = NP would imply that each of many hundreds of difﬁcult
combinatorial decision problems can be solved by a polynomial-time algorithm,
although computer scientists have failed to ﬁnd such algorithms despite their per-
sistent efforts over many years. Moreover, many well-known decision problems
are known to be “NP-complete” (see below), which seems to cast more doubts
on the possibility that P = NP.

Limitations of Algorithm Power
NP-Complete Problems
Informally, an NP-complete problem is a problem in NP that is as difﬁcult as any
other problem in this class because, by deﬁnition, any other problem in NP can
be reduced to it in polynomial time (shown symbolically in Figure 11.6).
Here are more formal deﬁnitions of these concepts.
DEFINITION 5
A decision problem D1 is said to be polynomially reducible to
a decision problem D2, if there exists a function t that transforms instances of D1
to instances of D2 such that:
1.
t maps all yes instances of D1 to yes instances of D2 and all no instances of D1
to no instances of D2
2.
t is computable by a polynomial time algorithm
This deﬁnition immediately implies that if a problem D1 is polynomially
reducible to some problem D2 that can be solved in polynomial time, then problem
D1 can also be solved in polynomial time (why?).
DEFINITION 6
A decision problem D is said to be NP-complete if:
1.
it belongs to class NP
2.
every problem in NP is polynomially reducible to D
The fact that closely related decision problems are polynomially reducible to
each other is not very surprising. For example, let us prove that the Hamiltonian
circuit problem is polynomially reducible to the decision version of the traveling
NP -complete problem
NP problems
problems to an NP-complete problem are shown by arrows.

11.3
P, NP, and NP-Complete Problems
salesman problem. The latter can be stated as the existence problem of a Hamil-
tonian circuit not longer than a given positive integer m in a given complete graph
with positive integer weights. We can map a graph G of a given instance of the
Hamiltonian circuit problem to a complete weighted graph G′ representing an in-
stance of the traveling salesman problem by assigning 1 as the weight to each edge
in G and adding an edge of weight 2 between any pair of nonadjacent vertices in
G. As the upper bound m on the Hamiltonian circuit length, we take m = n, where
n is the number of vertices in G (and G′). Obviously, this transformation can be
done in polynomial time.
Let G be a yes instance of the Hamiltonian circuit problem. Then G has a
Hamiltonian circuit, and its image in G′ will have length n, making the image a
yes instance of the decision traveling salesman problem. Conversely, if we have a
Hamiltonian circuit of the length not larger than n in G′, then its length must be
exactly n (why?) and hence the circuit must be made up of edges present in G,
making the inverse image of the yes instance of the decision traveling salesman
problem be a yes instance of the Hamiltonian circuit problem. This completes the
proof.
The notion of NP-completeness requires, however, polynomial reducibility of
all problems in NP, both known and unknown, to the problem in question. Given
the bewildering variety of decision problems, it is nothing short of amazing that
speciﬁc examples of NP-complete problems have been actually found. Neverthe-
less, this mathematical feat was accomplished independently by Stephen Cook
in the United States and Leonid Levin in the former Soviet Union.2 In his 1971
paper, Cook [Coo71] showed that the so-called CNF-satisﬁability problem is NP-
complete. The CNF-satisﬁability problem deals with boolean expressions. Each
boolean expression can be represented in conjunctive normal form, such as the
following expression involving three boolean variables x1, x2, and x3 and their
negations denoted ¯x1, ¯x2, and ¯x3, respectively:
(x1 ∨¯x2 ∨¯x3)&(¯x1 ∨x2)&(¯x1 ∨¯x2 ∨¯x3).
The CNF-satisﬁability problem asks whether or not one can assign values true and
false to variables of a given boolean expression in its CNF form to make the entire
expression true. (It is easy to see that this can be done for the above formula: if
x1 = true, x2 = true, and x3 = false, the entire expression is true.)
Since the Cook-Levin discovery of the ﬁrst known NP-complete problems,
computer scientists have found many hundreds, if not thousands, of other exam-
ples. In particular, the well-known problems (or their decision versions) men-
tioned above—Hamiltonian circuit, traveling salesman, partition, bin packing,
and graph coloring—are all NP-complete. It is known, however, that if P̸ = NP
there must exist NP problems that neither are in P nor are NP-complete.
2.
As it often happens in the history of science, breakthrough discoveries are made independently and
almost simultaneously by several scientists. In fact, Levin introduced a more general notion than NP-
completeness, which was not limited to decision problems, but his paper [Lev73] was published two
years after Cook’s.

Limitations of Algorithm Power
For a while, the leading candidate to be such an example was the problem
of determining whether a given integer is prime or composite. But in an im-
portant theoretical breakthrough, Professor Manindra Agrawal and his students
Neeraj Kayal and Nitin Saxena of the Indian Institute of Technology in Kanpur
announced in 2002 a discovery of a deterministic polynomial-time algorithm for
primality testing [Agr04]. Their algorithm does not solve, however, the related
problem of factoring large composite integers, which lies at the heart of the widely
used encryption method called the RSA algorithm [Riv78].
Showing that a decision problem is NP-complete can be done in two steps.
First, one needs to show that the problem in question is in NP; i.e., a randomly
generated string can be checked in polynomial time to determine whether or not
it represents a solution to the problem. Typically, this step is easy. The second
step is to show that every problem in NP is reducible to the problem in question
in polynomial time. Because of the transitivity of polynomial reduction, this step
can be done by showing that a known NP-complete problem can be transformed
to the problem in question in polynomial time (see Figure 11.7). Although such
a transformation may need to be quite ingenious, it is incomparably simpler than
proving the existence of a transformation for every problem in NP. For example,
if we already know that the Hamiltonian circuit problem is NP-complete, its
polynomial reducibility to the decision traveling salesman problem implies that
the latter is also NP-complete (after an easy check that the decision traveling
salesman problem is in class NP).
The deﬁnition of NP-completeness immediately implies that if there exists a
deterministic polynomial-time algorithm for just one NP-complete problem, then
every problem in NP can be solved in polynomial time by a deterministic algo-
rithm, and hence P = NP. In other words, ﬁnding a polynomial-time algorithm
known
NP -complete
problem
candidate for
NP -completeness
NP problems

11.3
P, NP, and NP-Complete Problems
for one NP-complete problem would mean that there is no qualitative difference
between the complexity of checking a proposed solution and ﬁnding it in polyno-
mial time for the vast majority of decision problems of all kinds. Such implications
make most computer scientists believe that P̸ = NP, although nobody has been
successful so far in ﬁnding a mathematical proof of this intriguing conjecture. Sur-
prisingly, in interviews with the authors of a book about the lives and discoveries
of 15 prominent computer scientists [Sha98], Cook seemed to be uncertain about
the eventual resolution of this dilemma whereas Levin contended that we should
expect the P = NP outcome.
Whatever the eventual answer to the P ?= NP question proves to be, knowing
that a problem is NP-complete has important practical implications for today. It
means that faced with a problem known to be NP-complete, we should probably
not aim at gaining fame and fortune3 by designing a polynomial-time algorithm
for solving all its instances. Rather, we should concentrate on several approaches
that seek to alleviate the intractability of such problems. These approaches are
outlined in the next chapter of the book.
Exercises 11.3
1. A game of chess can be posed as the following decision problem: given a
legal positioning of chess pieces and information about which side is to move,
determine whether that side can win. Is this decision problem decidable?
2. A certain problem can be solved by an algorithm whose running time is in
O(nlog2 n). Which of the following assertions is true?
a. The problem is tractable.
b. The problem is intractable.
c. Impossible to tell.
3. Give examples of the following graphs or explain why such examples cannot
exist.
a. graph with a Hamiltonian circuit but without an Eulerian circuit
b. graph with an Eulerian circuit but without a Hamiltonian circuit
c. graph with both a Hamiltonian circuit and an Eulerian circuit
d. graph with a cycle that includes all the vertices but with neither a Hamil-
tonian circuit nor an Eulerian circuit
3.
In 2000, The Clay Mathematics Institute (CMI) of Cambridge, Massachusetts, designated a $1 million
prize for the solution to this problem.

Coping with the Limitations of Algorithm Power
state-space tree are generated. For backtracking, this tree is usually developed
depth-ﬁrst (i.e., similar to DFS). Branch-and-bound can generate nodes accord-
ing to several rules: the most natural one is the so-called best-ﬁrst rule explained
in Section 12.2.
Section 12.3 takes a break from the idea of solving a problem exactly. The
algorithms presented there solve problems approximately but fast. Speciﬁcally,
we consider a few approximation algorithms for the traveling salesman and knap-
sack problems. For the traveling salesman problem, we discuss basic theoretical
results and pertinent empirical data for several well-known approximation algo-
rithms. For the knapsack problem, we ﬁrst introduce a greedy algorithm and then
a parametric family of polynomial-time algorithms that yield arbitrarily good ap-
proximations.
Section 12.4 is devoted to algorithms for solving nonlinear equations. After a
brief discussion of this very important problem, we examine three classic methods
for approximate root ﬁnding: the bisection method, the method of false position,
and Newton’s method.
12.1
Backtracking
Throughout the book (see in particular Sections 3.4 and 11.3), we have encoun-
tered problems that require ﬁnding an element with a special property in a domain
that grows exponentially fast (or faster) with the size of the problem’s input: a
Hamiltonian circuit among all permutations of a graph’s vertices, the most valu-
able subset of items for an instance of the knapsack problem, and the like. We
addressed in Section 11.3 the reasons for believing that many such problems might
not be solvable in polynomial time. Also recall that we discussed in Section 3.4
how such problems can be solved, at least in principle, by exhaustive search. The
exhaustive-search technique suggests generating all candidate solutions and then
identifying the one (or the ones) with a desired property.
Backtracking is a more intelligent variation of this approach. The principal
idea is to construct solutions one component at a time and evaluate such partially
constructed candidates as follows. If a partially constructed solution can be de-
veloped further without violating the problem’s constraints, it is done by taking
the ﬁrst remaining legitimate option for the next component. If there is no legiti-
mate option for the next component, no alternatives for any remaining component
need to be considered. In this case, the algorithm backtracks to replace the last
component of the partially constructed solution with its next option.
It is convenient to implement this kind of processing by constructing a tree
of choices being made, called the state-space tree. Its root represents an initial
state before the search for a solution begins. The nodes of the ﬁrst level in the
tree represent the choices made for the ﬁrst component of a solution, the nodes
of the second level represent the choices for the second component, and so
on. A node in a state-space tree is said to be promising if it corresponds to a
partially constructed solution that may still lead to a complete solution; otherwise,

12.1
Backtracking
it is called nonpromising. Leaves represent either nonpromising dead ends or
complete solutions found by the algorithm. In the majority of cases, a state-
space tree for a backtracking algorithm is constructed in the manner of depth-
ﬁrst search. If the current node is promising, its child is generated by adding the
ﬁrst remaining legitimate option for the next component of a solution, and the
processing moves to this child. If the current node turns out to be nonpromising,
the algorithm backtracks to the node’s parent to consider the next possible option
for its last component; if there is no such option, it backtracks one more level up
the tree, and so on. Finally, if the algorithm reaches a complete solution to the
problem, it either stops (if just one solution is required) or continues searching
for other possible solutions.
n-Queens Problem
As our ﬁrst example, we use a perennial favorite of textbook writers: the n-queens
problem. The problem is to place n queens on an n × n chessboard so that no two
queens attack each other by being in the same row or in the same column or on
the same diagonal. For n = 1, the problem has a trivial solution, and it is easy to
see that there is no solution for n = 2 and n = 3. So let us consider the four-queens
problem and solve it by the backtracking technique. Since each of the four queens
has to be placed in its own row, all we need to do is to assign a column for each
queen on the board presented in Figure 12.1.
We start with the empty board and then place queen 1 in the ﬁrst possible
position of its row, which is in column 1 of row 1. Then we place queen 2, after
trying unsuccessfully columns 1 and 2, in the ﬁrst acceptable position for it, which
is square (2, 3), the square in row 2 and column 3. This proves to be a dead end
because there is no acceptable position for queen 3. So, the algorithm backtracks
and puts queen 2 in the next possible position at (2, 4). Then queen 3 is placed
at (3, 2), which proves to be another dead end. The algorithm then backtracks all
the way to queen 1 and moves it to (1, 2). Queen 2 then goes to (2, 4), queen 3 to
(3, 1), and queen 4 to (4, 3), which is a solution to the problem. The state-space
tree of this search is shown in Figure 12.2.
If other solutions need to be found (how many of them are there for the four-
queens problem?), the algorithm can simply resume its operations at the leaf at
which it stopped. Alternatively, we can use the board’s symmetry for this purpose.
queen 1
queen 2
queen 3
queen 4

Coping with the Limitations of Algorithm Power
Q
Q
Q
Q
Q
Q
Q
Q
Q
Q
Q
Q
Q
Q
Q
Q
Q
Q
solution
× denotes an unsuccessful attempt to place a queen in the indicated
column. The numbers above the nodes indicate the order in which the
nodes are generated.
Finally, it should be pointed out that a single solution to the n-queens problem
for any n ≥4 can be found in linear time. In fact, over the last 150 years mathe-
maticians have discovered several alternative formulas for nonattacking positions
of n queens [Bel09]. Such positions can also be found by applying some general
algorithm design strategies (Problem 4 in this section’s exercises).
Hamiltonian Circuit Problem
As our next example, let us consider the problem of ﬁnding a Hamiltonian circuit
in the graph in Figure 12.3a.
Without loss of generality, we can assume that if a Hamiltonian circuit exists,
it starts at vertex a. Accordingly, we make vertex a the root of the state-space

12.1
Backtracking
a
d
b
e
a
b
c
d
d
e
e
f
f
d
c
e
a
f
f
c
(a)
(b)
dead end
dead end
solution
dead end
numbers above the nodes of the tree indicate the order in which the
nodes are generated.
tree (Figure 12.3b). The ﬁrst component of our future solution, if it exists, is a
ﬁrst intermediate vertex of a Hamiltonian circuit to be constructed. Using the
alphabet order to break the three-way tie among the vertices adjacent to a, we
select vertex b. From b, the algorithm proceeds to c, then to d, then to e, and
ﬁnally to f, which proves to be a dead end. So the algorithm backtracks from f
to e, then to d, and then to c, which provides the ﬁrst alternative for the algorithm
to pursue. Going from c to e eventually proves useless, and the algorithm has to
backtrack from e to c and then to b. From there, it goes to the vertices f , e, c, and
d, from which it can legitimately return to a, yielding the Hamiltonian circuit a, b,
f , e, c, d, a. If we wanted to ﬁnd another Hamiltonian circuit, we could continue
this process by backtracking from the leaf of the solution found.
Subset-Sum Problem
As our last example, we consider the subset-sum problem: ﬁnd a subset of a given
set A = {a1, . . . , an} of n positive integers whose sum is equal to a given positive
integer d. For example, for A = {1, 2, 5, 6, 8} and d = 9, there are two solutions:
{1, 2, 6} and {1, 8}. Of course, some instances of this problem may have no
solutions.
It is convenient to sort the set’s elements in increasing order. So, we will
assume that
a1 < a2 < . . . < an.

Coping with the Limitations of Algorithm Power
w/o 3
w/o 5
w/o 5
w/o 6
w/o 6
w/o 7
w/o 6
with 6
with 6
with 6
with 7
with 5
with 5
with 3
11+7>15
5+7<15
3+7<15
9+7>15
14+7>15
8<15
0+13<15
solution
instance A = {3, 5, 6, 7} and d = 15 of the subset-sum problem. The
number inside a node is the sum of the elements already included in the
subsets represented by the node. The inequality below a leaf indicates
the reason for its termination.
The state-space tree can be constructed as a binary tree like that in Figure 12.4 for
the instance A = {3, 5, 6, 7} and d = 15. The root of the tree represents the starting
point, with no decisions about the given elements made as yet. Its left and right
children represent, respectively, inclusion and exclusion of a1 in a set being sought.
Similarly, going to the left from a node of the ﬁrst level corresponds to inclusion
of a2 while going to the right corresponds to its exclusion, and so on. Thus, a path
from the root to a node on the ith level of the tree indicates which of the ﬁrst i
numbers have been included in the subsets represented by that node.
We record the value of s, the sum of these numbers, in the node. If s is equal
to d, we have a solution to the problem. We can either report this result and stop
or, if all the solutions need to be found, continue by backtracking to the node’s
parent. If s is not equal to d, we can terminate the node as nonpromising if either
of the following two inequalities holds:
s + ai+1 > d
(the sum s is too large),
s +
n

j=i+1
aj < d
(the sum s is too small).
General Remarks
From a more general perspective, most backtracking algorithms ﬁt the follow-
ing description. An output of a backtracking algorithm can be thought of as an
n-tuple (x1, x2, . . . , xn) where each coordinate xi is an element of some ﬁnite lin-

12.1
Backtracking
early ordered set Si. For example, for the n-queens problem, each Si is the set
of integers (column numbers) 1 through n. The tuple may need to satisfy some
additional constraints (e.g., the nonattacking requirements in the n-queens prob-
lem). Depending on the problem, all solution tuples can be of the same length
(the n-queens and the Hamiltonian circuit problem) and of different lengths (the
subset-sum problem). A backtracking algorithm generates, explicitly or implic-
itly, a state-space tree; its nodes represent partially constructed tuples with the
ﬁrst i coordinates deﬁned by the earlier actions of the algorithm. If such a tuple
(x1, x2, . . . , xi) is not a solution, the algorithm ﬁnds the next element in Si+1 that
is consistent with the values of (x1, x2, . . . , xi) and the problem’s constraints, and
adds it to the tuple as its (i + 1)st coordinate. If such an element does not exist,
the algorithm backtracks to consider the next value of xi, and so on.
To start a backtracking algorithm, the following pseudocode can be called for
i = 0 ; X[1..0] represents the empty tuple.
ALGORITHM
Backtrack(X[1..i])
//Gives a template of a generic backtracking algorithm
//Input: X[1..i] speciﬁes ﬁrst i promising components of a solution
//Output: All the tuples representing the problem’s solutions
if X[1..i] is a solution write X[1..i]
else
//see Problem 9 in this section’s exercises
for each element x ∈Si+1 consistent with X[1..i] and the constraints do
X[i + 1] ←x
Backtrack(X[1..i + 1])
Our success in solving small instances of three difﬁcult problems earlier in
this section should not lead you to the false conclusion that backtracking is a
very efﬁcient technique. In the worst case, it may have to generate all possible
candidates in an exponentially (or faster) growing state space of the problem at
hand. The hope, of course, is that a backtracking algorithm will be able to prune
enough branches of its state-space tree before running out of time or memory or
both. The success of this strategy is known to vary widely, not only from problem
to problem but also from one instance to another of the same problem.
There are several tricks that might help reduce the size of a state-space tree.
One is to exploit the symmetry often present in combinatorial problems. For
example, the board of the n-queens problem has several symmetries so that some
solutions can be obtained from others by reﬂection or rotation. This implies, in
particular, that we need not consider placements of the ﬁrst queen in the last ⌊n/2⌋
columns, because any solution with the ﬁrst queen in square (1, i), ⌈n/2⌉≤i ≤n,
can be obtained by reﬂection (which?) from a solution with the ﬁrst queen in
square (1, n −i + 1). This observation cuts the size of the tree by about half.
Another trick is to preassign values to one or more components of a solution,
as we did in the Hamiltonian circuit example. Data presorting in the subset-sum

Coping with the Limitations of Algorithm Power
example demonstrates potential beneﬁts of yet another opportunity: rearrange
data of an instance given.
It would be highly desirable to be able to estimate the size of the state-space
tree of a backtracking algorithm. As a rule, this is too difﬁcult to do analytically,
however. Knuth [Knu75] suggested generating a random path from the root to
a leaf and using the information about the number of choices available during
the path generation for estimating the size of the tree. Speciﬁcally, let c1 be the
number of values of the ﬁrst component x1 that are consistent with the problem’s
constraints. We randomly select one of these values (with equal probability 1/c1)
to move to one of the root’s c1 children. Repeating this operation for c2 possible
values for x2 that are consistent with x1 and the other constraints, we move to one
of the c2 children of that node. We continue this process until a leaf is reached
after randomly selecting values for x1, x2, . . . , xn. By assuming that the nodes on
level i have ci children on average, we estimate the number of nodes in the tree as
1 + c1 + c1c2 + . . . + c1c2 . . . cn.
Generating several such estimates and computing their average yields a useful
estimation of the actual size of the tree, although the standard deviation of this
random variable can be large.
In conclusion, three things on behalf of backtracking need to be said. First, it
is typically applied to difﬁcult combinatorial problems for which no efﬁcient algo-
rithms for ﬁnding exact solutions possibly exist. Second, unlike the exhaustive-
search approach, which is doomed to be extremely slow for all instances of a
problem, backtracking at least holds a hope for solving some instances of nontriv-
ial sizes in an acceptable amount of time. This is especially true for optimization
problems, for which the idea of backtracking can be further enhanced by evaluat-
ing the quality of partially constructed solutions. How this can be done is explained
in the next section. Third, even if backtracking does not eliminate any elements
of a problem’s state space and ends up generating all its elements, it provides a
speciﬁc technique for doing so, which can be of value in its own right.
Exercises 12.1
1. a. Continue the backtracking search for a solution to the four-queens prob-
lem, which was started in this section, to ﬁnd the second solution to the
problem.
b. Explain how the board’s symmetry can be used to ﬁnd the second solution
to the four-queens problem.
2. a. Which is the last solution to the ﬁve-queens problem found by the back-
tracking algorithm?
b. Use the board’s symmetry to ﬁnd at least four other solutions to the
problem.

Coping with the Limitations of Algorithm Power
Design and implement a backtracking algorithm for solving the following
versions of this puzzle.
a. Starting with a given location of the empty hole, ﬁnd a shortest sequence
of moves that eliminates 14 pegs with no limitations on the ﬁnal position
of the remaining peg.
b. Starting with a given location of the empty hole, ﬁnd a shortest sequence
of moves that eliminates 14 pegs with the remaining peg at the empty hole
of the initial board.
12.2
Branch-and-Bound
Recall that the central idea of backtracking, discussed in the previous section, is to
cut off a branch of the problem’s state-space tree as soon as we can deduce that it
cannot lead to a solution. This idea can be strengthened further if we deal with an
optimization problem. An optimization problem seeks to minimize or maximize
some objective function (a tour length, the value of items selected, the cost of
an assignment, and the like), usually subject to some constraints. Note that in
the standard terminology of optimization problems, a feasible solution is a point
in the problem’s search space that satisﬁes all the problem’s constraints (e.g., a
Hamiltonian circuit in the traveling salesman problem or a subset of items whose
total weight does not exceed the knapsack’s capacity in the knapsack problem),
whereas an optimal solution is a feasible solution with the best value of the
objective function (e.g., the shortest Hamiltonian circuit or the most valuable
subset of items that ﬁt the knapsack).
Compared to backtracking, branch-and-bound requires two additional items:
a way to provide, for every node of a state-space tree, a bound on the best
value of the objective function1 on any solution that can be obtained by adding
further components to the partially constructed solution represented by the
node
the value of the best solution seen so far
If this information is available, we can compare a node’s bound value with
the value of the best solution seen so far. If the bound value is not better than the
value of the best solution seen so far—i.e., not smaller for a minimization problem
1.
This bound should be a lower bound for a minimization problem and an upper bound for a maximiza-
tion problem.

12.2
Branch-and-Bound
and not larger for a maximization problem—the node is nonpromising and can
be terminated (some people say the branch is “pruned”). Indeed, no solution
obtained from it can yield a better solution than the one already available. This is
the principal idea of the branch-and-bound technique.
In general, we terminate a search path at the current node in a state-space
tree of a branch-and-bound algorithm for any one of the following three reasons:
The value of the node’s bound is not better than the value of the best solution
seen so far.
The node represents no feasible solutions because the constraints of the
problem are already violated.
The subset of feasible solutions represented by the node consists of a single
point (and hence no further choices can be made)—in this case, we compare
the value of the objective function for this feasible solution with that of the
best solution seen so far and update the latter with the former if the new
solution is better.
Assignment Problem
Let us illustrate the branch-and-bound approach by applying it to the problem of
assigning n people to n jobs so that the total cost of the assignment is as small
as possible. We introduced this problem in Section 3.4, where we solved it by
exhaustive search. Recall that an instance of the assignment problem is speciﬁed
by an n × n cost matrix C so that we can state the problem as follows: select one
element in each row of the matrix so that no two selected elements are in the
same column and their sum is the smallest possible. We will demonstrate how this
problem can be solved using the branch-and-bound technique by considering the
same small instance of the problem that we investigated in Section 3.4:
job 1
job 2
job 3
job 4
C =
⎡
⎢⎢⎣
⎤
⎥⎥⎦
person a
person b
person c
person d
How can we ﬁnd a lower bound on the cost of an optimal selection without
actually solving the problem? We can do this by several methods. For example, it
is clear that the cost of any solution, including an optimal one, cannot be smaller
than the sum of the smallest elements in each of the matrix’s rows. For the instance
here, this sum is 2 + 3 + 1 + 4 = 10. It is important to stress that this is not the cost
of any legitimate selection (3 and 1 came from the same column of the matrix);
it is just a lower bound on the cost of any legitimate selection. We can and will
apply the same thinking to partially constructed solutions. For example, for any
legitimate selection that selects 9 from the ﬁrst row, the lower bound will be
9 + 3 + 1 + 4 = 17.
One more comment is in order before we embark on constructing the prob-
lem’s state-space tree. It deals with the order in which the tree nodes will be

Coping with the Limitations of Algorithm Power
generated. Rather than generating a single child of the last promising node as
we did in backtracking, we will generate all the children of the most promising
node among nonterminated leaves in the current tree. (Nonterminated, i.e., still
promising, leaves are also called live.) How can we tell which of the nodes is most
promising? We can do this by comparing the lower bounds of the live nodes. It
is sensible to consider a node with the best bound as most promising, although
this does not, of course, preclude the possibility that an optimal solution will ul-
timately belong to a different branch of the state-space tree. This variation of the
strategy is called the best-ﬁrst branch-and-bound.
So, returning to the instance of the assignment problem given earlier, we start
with the root that corresponds to no elements selected from the cost matrix. As
we already discussed, the lower-bound value for the root, denoted lb, is 10. The
nodes on the ﬁrst level of the tree correspond to selections of an element in the
ﬁrst row of the matrix, i.e., a job for person a (Figure 12.5).
So we have four live leaves—nodes 1 through 4—that may contain an optimal
solution. The most promising of them is node 2 because it has the smallest lower-
bound value. Following our best-ﬁrst search strategy, we branch out from that
node ﬁrst by considering the three different ways of selecting an element from the
second row and not in the second column—the three different jobs that can be
assigned to person b (Figure 12.6).
Of the six live leaves—nodes 1, 3, 4, 5, 6, and 7—that may contain an optimal
solution, we again choose the one with the smallest lower bound, node 5. First, we
consider selecting the third column’s element from c’s row (i.e., assigning person c
to job 3); this leaves us with no choice but to select the element from the fourth
column of d’s row (assigning person d to job 4). This yields leaf 8 (Figure 12.7),
which corresponds to the feasible solution {a →2, b →1, c →3, d →4} with the
total cost of 13. Its sibling, node 9, corresponds to the feasible solution {a →2,
b →1, c →4, d →3} with the total cost of 25. Since its cost is larger than the cost
of the solution represented by leaf 8, node 9 is simply terminated. (Of course, if
start
lb = 2+3+1+4 =10
lb = 8+3 +1+ 6 =18
lb =7+4+5+ 4 =20
lb = 2+3+1+4 =10
lb = 9+3+1+4 =17
a ⎯→2
a ⎯→1
a ⎯→3
a ⎯→4
problem being solved with the best-ﬁrst branch-and-bound algorithm. The
number above a node shows the order in which the node was generated.
A node’s ﬁelds indicate the job number assigned to person a and the
lower bound value, lb, for this node.

12.2
Branch-and-Bound
start
lb =10
lb =17
a → 3
a → 1
lb =10
a → 2
lb =14
b → 3
lb =13
b → 1
lb =17
b → 4
lb = 20
lb =18
a → 4
problem being solved with the best-ﬁrst branch-and-bound algorithm.
start
lb =10
lb =17
a → 3
a → 1
lb =10
a → 2
lb =14
b → 3
lb =13
b → 1
cost =13
d → 4
c → 3
cost = 25
d → 3
c → 4
solution
inferior solution
lb =17
b → 4
lb = 20
lb =18
a → 4
X
X
X
X
X
solved with the best-ﬁrst branch-and-bound algorithm.
its cost were smaller than 13, we would have to replace the information about the
best solution seen so far with the data provided by this node.)
Now, as we inspect each of the live leaves of the last state-space tree—nodes
1, 3, 4, 6, and 7 in Figure 12.7—we discover that their lower-bound values are
not smaller than 13, the value of the best selection seen so far (leaf 8). Hence,
we terminate all of them and recognize the solution represented by leaf 8 as the
optimal solution to the problem.

Coping with the Limitations of Algorithm Power
Before we leave the assignment problem, we have to remind ourselves again
that, unlike for our next examples, there is a polynomial-time algorithm for this
problem called the Hungarian method (e.g., [Pap82]). In the light of this efﬁcient
algorithm, solving the assignment problem by branch-and-bound should be con-
sidered a convenient educational device rather than a practical recommendation.
Knapsack Problem
Let us now discuss how we can apply the branch-and-bound technique to solving
the knapsack problem. This problem was introduced in Section 3.4: given n items
of known weights wi and values vi, i = 1, 2, . . . , n, and a knapsack of capacity W,
ﬁnd the most valuable subset of the items that ﬁt in the knapsack. It is convenient
to order the items of a given instance in descending order by their value-to-weight
ratios. Then the ﬁrst item gives the best payoff per weight unit and the last one
gives the worst payoff per weight unit, with ties resolved arbitrarily:
v1/w1 ≥v2/w2 ≥. . . ≥vn/wn.
It is natural to structure the state-space tree for this problem as a binary tree
constructed as follows (see Figure 12.8 for an example). Each node on the ith
level of this tree, 0 ≤i ≤n, represents all the subsets of n items that include a
particular selection made from the ﬁrst i ordered items. This particular selection
is uniquely determined by the path from the root to the node: a branch going to
the left indicates the inclusion of the next item, and a branch going to the right
indicates its exclusion. We record the total weight w and the total value v of this
selection in the node, along with some upper bound ub on the value of any subset
that can be obtained by adding zero or more items to this selection.
A simple way to compute the upper bound ub is to add to v, the total value of
the items already selected, the product of the remaining capacity of the knapsack
W −w and the best per unit payoff among the remaining items, which is vi+1/wi+1:
ub = v + (W −w)(vi+1/wi+1).
(12.1)
As a speciﬁc example, let us apply the branch-and-bound algorithm to the
same instance of the knapsack problem we solved in Section 3.4 by exhaustive
search. (We reorder the items in descending order of their value-to-weight ratios,
though.)
value
item
weight
value
weight
$40
$42
The knapsack’s capacity W is 10.
$25
$12

12.2
Branch-and-Bound
inferior to
node 8
not feasible
X
X
not feasible
optimal solution
X
inferior to node 8
X
ub =100
w = 0, v = 0
ub = 76
w = 4, v = 40
ub = 70
w = 4, v = 40
ub = 64
w = 4, v = 40
ub = 69
w = 9, v = 65
value = 65
w = 9, v = 65
w = 11
w = 12
ub = 60
w = 0, v = 0
with 1
with 2
with 4
with 3
w/o 1
w/o 2
w/o 4
w/o 3
instance of the knapsack problem.
At the root of the state-space tree (see Figure 12.8), no items have been
selected as yet. Hence, both the total weight of the items already selected w and
their total value v are equal to 0. The value of the upper bound computed by
formula (12.1) is $100. Node 1, the left child of the root, represents the subsets
that include item 1. The total weight and value of the items already included are
4 and $40, respectively; the value of the upper bound is 40 + (10 −4) ∗6 = $76.
Node 2 represents the subsets that do not include item 1. Accordingly, w = 0,
v = $0, and ub = 0 + (10 −0) ∗6 = $60. Since node 1 has a larger upper bound than
the upper bound of node 2, it is more promising for this maximization problem,
and we branch from node 1 ﬁrst. Its children—nodes 3 and 4—represent subsets
with item 1 and with and without item 2, respectively. Since the total weight w of
every subset represented by node 3 exceeds the knapsack’s capacity, node 3 can
be terminated immediately. Node 4 has the same values of w and v as its parent;
the upper bound ub is equal to 40 + (10 −4) ∗5 = $70. Selecting node 4 over node
2 for the next branching (why?), we get nodes 5 and 6 by respectively including
and excluding item 3. The total weights and values as well as the upper bounds for

Coping with the Limitations of Algorithm Power
these nodes are computed in the same way as for the preceding nodes. Branching
from node 5 yields node 7, which represents no feasible solutions, and node 8,
which represents just a single subset {1, 3} of value $65. The remaining live nodes
2 and 6 have smaller upper-bound values than the value of the solution represented
by node 8. Hence, both can be terminated making the subset {1, 3} of node 8 the
optimal solution to the problem.
Solving the knapsack problem by a branch-and-bound algorithm has a rather
unusual characteristic. Typically, internal nodes of a state-space tree do not deﬁne
a point of the problem’s search space, because some of the solution’s components
remain undeﬁned. (See, for example, the branch-and-bound tree for the assign-
ment problem discussed in the preceding subsection.) For the knapsack problem,
however, every node of the tree represents a subset of the items given. We can
use this fact to update the information about the best subset seen so far after
generating each new node in the tree. If we had done this for the instance investi-
gated above, we could have terminated nodes 2 and 6 before node 8 was generated
because they both are inferior to the subset of value $65 of node 5.
Traveling Salesman Problem
We will be able to apply the branch-and-bound technique to instances of the
traveling salesman problem if we come up with a reasonable lower bound on tour
lengths. One very simple lower bound can be obtained by ﬁnding the smallest
element in the intercity distance matrix D and multiplying it by the number of
cities n. But there is a less obvious and more informative lower bound for instances
with symmetric matrix D, which does not require a lot of work to compute. It is
not difﬁcult to show (Problem 8 in this section’s exercises) that we can compute a
lower bound on the length l of any tour as follows. For each city i, 1 ≤i ≤n, ﬁnd
the sum si of the distances from city i to the two nearest cities; compute the sum
s of these n numbers, divide the result by 2, and, if all the distances are integers,
round up the result to the nearest integer:
lb = ⌈s/2⌉.
(12.2)
For example, for the instance in Figure 12.9a, formula (12.2) yields
lb = ⌈[(1 + 3) + (3 + 6) + (1 + 2) + (3 + 4) + (2 + 3)]/2⌉= 14.
Moreover, for any subset of tours that must include particular edges of a given
graph, we can modify lower bound (12.2) accordingly. For example, for all the
Hamiltonian circuits of the graph in Figure 12.9a that must include edge (a, d),
we get the following lower bound by summing up the lengths of the two shortest
edges incident with each of the vertices, with the required inclusion of edges (a, d)
and (d, a):
⌈[(1 + 5) + (3 + 6) + (1 + 2) + (3 + 5) + (2 + 3)]/2⌉= 16.
We now apply the branch-and-bound algorithm, with the bounding function
given by formula (12.2), to ﬁnd the shortest Hamiltonian circuit for the graph in

12.2
Branch-and-Bound
a
b
c
d
e
(b)
(a)
lb = 14
b is not 
before c
lb >= l
of node 11
a
lb = 19
a, e
lb = 16
a, d
a, c
lb = 14
a, b
lb = 16
a, b, d
lb = 16
a, b, c
l = 24
a, b, c, d,
(e, a)
l = 19
a, b, c, e,
(d, a)
l = 24
a, b, d, c,
(e, a)
l = 16
a, b, d, e,
(c, a)
lb = 19
a, b, e
X
X
lb > l
of node 11
X
lb > l
of node 11
X
first tour
better tour
inferior tour
optimal tour
to ﬁnd a shortest Hamiltonian circuit in this graph. The list of vertices in
a node speciﬁes a beginning part of the Hamiltonian circuits represented
by the node.
observations made in Section 3.4. First, without loss of generality, we can consider
only tours that start at a. Second, because our graph is undirected, we can generate
only tours in which b is visited before c. In addition, after visiting n −1 = 4 cities,
a tour has no choice but to visit the remaining unvisited city and return to the
starting one. The state-space tree tracing the algorithm’s application is given in
The comments we made at the end of the preceding section about the strengths
and weaknesses of backtracking are applicable to branch-and-bound as well. To
reiterate the main point: these state-space tree techniques enable us to solve
many large instances of difﬁcult combinatorial problems. As a rule, however, it is
virtually impossible to predict which instances will be solvable in a realistic amount
of time and which will not.
Incorporation of additional information, such as a symmetry of a game’s
board, can widen the range of solvable instances. Along this line, a branch-and-
bound algorithm can be sometimes accelerated by a knowledge of the objective

Coping with the Limitations of Algorithm Power
function’s value of some nontrivial feasible solution. The information might be
obtainable—say, by exploiting speciﬁcs of the data or even, for some problems,
generated randomly—before we start developing a state-space tree. Then we can
use such a solution immediately as the best one seen so far rather than waiting for
the branch-and-bound processing to lead us to the ﬁrst feasible solution.
In contrast to backtracking, solving a problem by branch-and-bound has both
the challenge and opportunity of choosing the order of node generation and ﬁnd-
ing a good bounding function. Though the best-ﬁrst rule we used above is a sensible
approach, it may or may not lead to a solution faster than other strategies. (Arti-
ﬁcial intelligence researchers are particularly interested in different strategies for
developing state-space trees.)
Finding a good bounding function is usually not a simple task. On the one
hand, we want this function to be easy to compute. On the other hand, it cannot
be too simplistic—otherwise, it would fail in its principal task to prune as many
branches of a state-space tree as soon as possible. Striking a proper balance be-
tween these two competing requirements may require intensive experimentation
with a wide variety of instances of the problem in question.
Exercises 12.2
1. What data structure would you use to keep track of live nodes in a best-ﬁrst
branch-and-bound algorithm?
2. Solve the same instance of the assignment problem as the one solved in
the section by the best-ﬁrst branch-and-bound algorithm with the bounding
function based on matrix columns rather than rows.
3. a. Give an example of the best-case input for the branch-and-bound algo-
rithm for the assignment problem.
b. In the best case, how many nodes will be in the state-space tree of the
branch-and-bound algorithm for the assignment problem?
4. Write a program for solving the assignment problem by the branch-and-bound
algorithm. Experiment with your program to determine the average size of the
cost matrices for which the problem is solved in a given amount of time, say,
1 minute on your computer.
5. Solve the following instance of the knapsack problem by the branch-and-
bound algorithm:
item
weight
value
$100
$63
W = 16
$56
$12

12.3
Approximation Algorithms for NP-Hard Problems
6. a. Suggest a more sophisticated bounding function for solving the knapsack
problem than the one used in the section.
b. Use your bounding function in the branch-and-bound algorithm applied
to the instance of Problem 5.
7. Write a program to solve the knapsack problem with the branch-and-bound
algorithm.
8. a. Prove the validity of the lower bound given by formula (12.2) for instances
of the traveling salesman problem with symmetric matrices of integer
intercity distances.
b. How would you modify lower bound (12.2) for nonsymmetric distance
matrices?
9. Apply the branch-and-bound algorithm to solve the traveling salesman prob-
lem for the following graph:
a
b
c
d
(We solved this problem by exhaustive search in Section 3.4.)
10. As a research project, write a report on how state-space trees are used for
programming such games as chess, checkers, and tic-tac-toe. The two principal
algorithms you should read about are the minimax algorithm and alpha-beta
pruning.
12.3
Approximation Algorithms for NP-Hard Problems
In this section, we discuss a different approach to handling difﬁcult problems
of combinatorial optimization, such as the traveling salesman problem and the
knapsack problem. As we pointed out in Section 11.3, the decision versions of
these problems are NP-complete. Their optimization versions fall in the class of
NP-hard problems—problems that are at least as hard as NP-complete problems.2
Hence, there are no known polynomial-time algorithms for these problems, and
there are serious theoretical reasons to believe that such algorithms do not exist.
What then are our options for handling such problems, many of which are of
signiﬁcant practical importance?
2.
The notion of an NP-hard problem can be deﬁned more formally by extending the notion of polynomial
reducibility to problems that are not necessarily in class NP, including optimization problems of the
type discussed in this section (see [Gar79, Chapter 5]).

Coping with the Limitations of Algorithm Power
If an instance of the problem in question is very small, we might be able to
solve it by an exhaustive-search algorithm (Section 3.4). Some such problems can
be solved by the dynamic programming technique we demonstrated in Section 8.2.
But even when this approach works in principle, its practicality is limited by
dependence on the instance parameters being relatively small. The discovery of
the branch-and-bound technique has proved to be an important breakthrough,
because this technique makes it possible to solve many large instances of difﬁcult
optimization problems in an acceptable amount of time. However, such good
performance cannot usually be guaranteed.
There is a radically different way of dealing with difﬁcult optimization prob-
lems: solve them approximately by a fast algorithm. This approach is particularly
appealing for applications where a good but not necessarily optimal solution will
sufﬁce. Besides, in real-life applications, we often have to operate with inaccurate
data to begin with. Under such circumstances, going for an approximate solution
can be a particularly sensible choice.
Although approximation algorithms run a gamut in level of sophistication,
most of them are based on some problem-speciﬁc heuristic. A heuristic is a
common-sense rule drawn from experience rather than from a mathematically
proved assertion. For example, going to the nearest unvisited city in the traveling
salesman problem is a good illustration of this notion. We discuss an algorithm
based on this heuristic later in this section.
Of course, if we use an algorithm whose output is just an approximation of the
actual optimal solution, we would like to know how accurate this approximation
is. We can quantify the accuracy of an approximate solution sa to a problem of
minimizing some function f by the size of the relative error of this approximation,
re(sa) = f (sa) −f (s∗)
f (s∗)
,
where s∗is an exact solution to the problem. Alternatively, since re(sa) = f (sa)/
f (s∗) −1, we can simply use the accuracy ratio
r(sa) = f (sa)
f (s∗)
as a measure of accuracy of sa. Note that for the sake of scale uniformity, the
accuracy ratio of approximate solutions to maximization problems is usually com-
puted as
r(sa) = f (s∗)
f (sa)
to make this ratio greater than or equal to 1, as it is for minimization problems.
Obviously, the closer r(sa) is to 1, the better the approximate solution is.
For most instances, however, we cannot compute the accuracy ratio, because we
typically do not know f (s∗), the true optimal value of the objective function.
Therefore, our hope should lie in obtaining a good upper bound on the values
of r(sa). This leads to the following deﬁnitions.

12.3
Approximation Algorithms for NP-Hard Problems
DEFINITION
A polynomial-time approximation algorithm is said to be a c-
approximation algorithm, where c ≥1, if the accuracy ratio of the approximation
it produces does not exceed c for any instance of the problem in question:
r(sa) ≤c.
(12.3)
The best (i.e., the smallest) value of c for which inequality (12.3) holds for all
instances of the problem is called the performance ratio of the algorithm and
denoted RA.
The performance ratio serves as the principal metric indicating the quality of
the approximation algorithm. We would like to have approximation algorithms
with RA as close to 1 as possible. Unfortunately, as we shall see, some approxima-
tion algorithms have inﬁnitely large performance ratios (RA = ∞). This does not
necessarily rule out using such algorithms, but it does call for a cautious treatment
of their outputs.
There are two important facts about difﬁcult combinatorial optimization
problems worth keeping in mind. First, although the difﬁculty level of solving
most such problems exactly is the same to within a polynomial-time transforma-
tion of one problem to another, this equivalence does not translate into the realm
of approximation algorithms. Finding good approximate solutions is much easier
for some of these problems than for others. Second, some of the problems have
special classes of instances that are both particularly important for real-life appli-
cations and easier to solve than their general counterparts. The traveling salesman
problem is a prime example of this situation.
Approximation Algorithms for the Traveling
Salesman Problem
We solved the traveling salesman problem by exhaustive search in Section 3.4,
mentioned its decision version as one of the most well-known NP-complete
problems in Section 11.3, and saw how its instances can be solved by a branch-
and-bound algorithm in Section 12.2. Here, we consider several approximation
algorithms, a small sample of dozens of such algorithms suggested over the years
for this famous problem. (For a much more detailed discussion of the topic, see
[Law85], [Hoc97], [App07], and [Gut07].)
But ﬁrst let us answer the question of whether we should hope to ﬁnd a
polynomial-time approximation algorithm with a ﬁnite performance ratio on all
instances of the traveling salesman problem. As the following theorem [Sah76]
shows, the answer turns out to be no, unless P = NP.
THEOREM 1
If P̸ = NP, there exists no c-approximation algorithm for the
traveling salesman problem, i.e., there exists no polynomial-time approximation
algorithm for this problem so that for all instances
f (sa) ≤cf (s∗)
for some constant c.

Coping with the Limitations of Algorithm Power
PROOF
By way of contradiction, suppose that such an approximation algorithm
A and a constant c exist. (Without loss of generality, we can assume that c is a
positive integer.) We will show that this algorithm could then be used for solving
the Hamiltonian circuit problem in polynomial time. We will take advantage of
a variation of the transformation used in Section 11.3 to reduce the Hamiltonian
circuit problem to the traveling salesman problem. Let G be an arbitrary graph
with n vertices. We map G to a complete weighted graph G′ by assigning weight 1 to
each edge in G and adding an edge of weight cn + 1 between each pair of vertices
not adjacent in G. If G has a Hamiltonian circuit, its length in G′ is n; hence, it is
the exact solution s∗to the traveling salesman problem for G′. Note that if sa is
an approximate solution obtained for G′ by algorithm A, then f (sa) ≤cn by the
assumption. If G does not have a Hamiltonian circuit in G, the shortest tour in
G′ will contain at least one edge of weight cn + 1, and hence f (sa) ≥f (s∗) > cn.
Taking into account the two derived inequalities, we could solve the Hamiltonian
circuit problem for graph G in polynomial time by mapping G to G′, applying
algorithm A to get tour sa in G′, and comparing its length with cn. Since the
Hamiltonian circuit problem is NP-complete, we have a contradiction unless P =
NP.
Greedy Algorithms for the TSP The simplest approximation algorithms for the
traveling salesman problem are based on the greedy technique. We will discuss
here two such algorithms.
Nearest-neighbor algorithm
The following well-known greedy algorithm is based on the nearest-neighbor
heuristic: always go next to the nearest unvisited city.
Step 1 Choose an arbitrary city as the start.
Step 2 Repeat the following operation until all the cities have been visited:
go to the unvisited city nearest the one visited last (ties can be broken
arbitrarily).
Step 3 Return to the starting city.
EXAMPLE 1
For the instance represented by the graph in Figure 12.10, with a as
the starting vertex, the nearest-neighbor algorithm yields the tour (Hamiltonian
circuit) sa: a −b −c −d −a of length 10.
a
b
d
c

12.3
Approximation Algorithms for NP-Hard Problems
The optimal solution, as can be easily checked by exhaustive search, is the tour
s∗: a −b −d −c −a of length 8. Thus, the accuracy ratio of this approximation is
r(sa) = f (sa)
f (s∗) = 10
8 = 1.25
(i.e., tour sa is 25% longer than the optimal tour s∗).
Unfortunately, except for its simplicity, not many good things can be said
about the nearest-neighbor algorithm. In particular, nothing can be said in general
about the accuracy of solutions obtained by this algorithm because it can force us
to traverse a very long edge on the last leg of the tour. Indeed, if we change the
weight of edge (a, d) from 6 to an arbitrary large number w ≥6 in Example 1,
the algorithm will still yield the tour a −b −c −d −a of length 4 + w, and the
optimal solution will still be a −b −d −c −a of length 8. Hence,
r(sa) = f (sa)
f (s∗) = 4 + w
,
which can be made as large as we wish by choosing an appropriately large value
of w. Hence, RA = ∞for this algorithm (as it should be according to Theorem 1).
Multifragment-heuristic algorithm
Another natural greedy algorithm for the traveling salesman problem considers
it as the problem of ﬁnding a minimum-weight collection of edges in a given
complete weighted graph so that all the vertices have degree 2. (With this emphasis
on edges rather than vertices, what other greedy algorithm does it remind you
of?) An application of the greedy technique to this problem leads to the following
algorithm [Ben90].
Step 1 Sort the edges in increasing order of their weights. (Ties can be broken
arbitrarily.) Initialize the set of tour edges to be constructed to the
empty set.
Step 2 Repeat this step n times, where n is the number of cities in the instance
being solved: add the next edge on the sorted edge list to the set of tour
edges, provided this addition does not create a vertex of degree 3 or a
cycle of length less than n; otherwise, skip the edge.
Step 3 Return the set of tour edges.
As an example, applying the algorithm to the graph in Figure 12.10 yields
{(a, b), (c, d), (b, c), (a, d)}. This set of edges forms the same tour as the one pro-
duced by the nearest-neighbor algorithm. In general, the multifragment-heuristic
algorithm tends to produce signiﬁcantly better tours than the nearest-neighbor
algorithm, as we are going to see from the experimental data quoted at the end of
this section. But the performance ratio of the multifragment-heuristic algorithm
is also unbounded, of course.

Coping with the Limitations of Algorithm Power
There is, however, a very important subset of instances, called Euclidean, for
which we can make a nontrivial assertion about the accuracy of both the nearest-
neighbor and multifragment-heuristic algorithms. These are the instances in which
intercity distances satisfy the following natural conditions:
triangle inequality d[i, j] ≤d[i, k] + d[k, j]
for any triple of cities i, j, and
k (the distance between cities i and j cannot exceed the length of a two-leg
path from i to some intermediate city k to j)
symmetry d[i, j] = d[j, i]
for any pair of cities i and j (the distance from i
to j is the same as the distance from j to i)
A substantial majority of practical applications of the traveling salesman prob-
lem are its Euclidean instances. They include, in particular, geometric ones, where
cities correspond to points in the plane and distances are computed by the standard
Euclidean formula. Although the performance ratios of the nearest-neighbor and
multifragment-heuristic algorithms remain unbounded for Euclidean instances,
their accuracy ratios satisfy the following inequality for any such instance with
n ≥2 cities:
f (sa)
f (s∗) ≤1
2(⌈log2 n⌉+ 1),
where f (sa) and f (s∗) are the lengths of the heuristic tour and shortest tour,
respectively (see [Ros77] and [Ong84]).
Minimum-Spanning-Tree–Based Algorithms There are approximation algori-
thms for the traveling salesman problem that exploit a connection between Hamil-
tonian circuits and spanning trees of the same graph. Since removing an edge from
a Hamiltonian circuit yields a spanning tree, we can expect that the structure of
a minimum spanning tree provides a good basis for constructing a shortest tour
approximation. Here is an algorithm that implements this idea in a rather straight-
forward fashion.
Twice-around-the-tree algorithm
Step 1 Construct a minimum spanning tree of the graph corresponding to a
given instance of the traveling salesman problem.
Step 2 Starting at an arbitrary vertex, perform a walk around the minimum
spanning tree recording all the vertices passed by. (This can be done
by a DFS traversal.)
Step 3 Scan the vertex list obtained in Step 2 and eliminate from it all repeated
occurrences of the same vertex except the starting one at the end of
the list. (This step is equivalent to making shortcuts in the walk.) The
vertices remaining on the list will form a Hamiltonian circuit, which is
the output of the algorithm.
EXAMPLE 2
Let us apply this algorithm to the graph in Figure 12.11a. The
minimum spanning tree of this graph is made up of edges (a, b), (b, c), (b, d), and
(d, e) (Figure 12.11b). A twice-around-the-tree walk that starts and ends at a is

12.3
Approximation Algorithms for NP-Hard Problems
a
e
b
d
c
(a)
a
e
b
d
c
(b)
around the minimum spanning tree with the shortcuts.
a, b, c, b, d, e, d, b,
a.
Eliminating the second b (a shortcut from c to d), the second d, and the third b (a
shortcut from e to a) yields the Hamiltonian circuit
a, b, c, d, e, a
of length 39.
The tour obtained in Example 2 is not optimal. Although that instance is small
enough to ﬁnd an optimal solution by either exhaustive search or branch-and-
bound, we refrained from doing so to reiterate a general point. As a rule, we do
not know what the length of an optimal tour actually is, and therefore we cannot
compute the accuracy ratio f (sa)/f (s∗). For the twice-around-the-tree algorithm,
we can at least estimate it above, provided the graph is Euclidean.
THEOREM 2
The twice-around-the-tree algorithm is a 2-approximation algo-
rithm for the traveling salesman problem with Euclidean distances.
PROOF
Obviously, the twice-around-the-tree algorithm is polynomial time if we
use a reasonable algorithm such as Prim’s or Kruskal’s in Step 1. We need to show
that for any Euclidean instance of the traveling salesman problem, the length of a
tour sa obtained by the twice-around-the-tree algorithm is at most twice the length
of the optimal tour s∗, i.e.,
f (sa) ≤2f (s∗).
Since removing any edge from s∗yields a spanning tree T of weight w(T ), which
must be greater than or equal to the weight of the graph’s minimum spanning tree
w(T ∗), we get the inequality
f (s∗) > w(T ) ≥w(T ∗).

Coping with the Limitations of Algorithm Power
This inequality implies that
2f (s∗) > 2w(T ∗) = the length of the walk obtained in Step 2 of the algorithm.
The possible shortcuts outlined in Step 3 of the algorithm to obtain sa cannot
increase the total length of the walk in a Euclidean graph, i.e.,
the length of the walk obtained in Step 2 ≥the length of the tour sa.
Combining the last two inequalities, we get the inequality
2f (s∗) > f (sa),
which is, in fact, a slightly stronger assertion than the one we needed to prove.
Christoﬁdes Algorithm There is an approximation algorithm with a better per-
formance ratio for the Euclidean traveling salesman problem—the well-known
Christoﬁdes algorithm [Chr76]. It also uses a minimum spanning tree but does
this in a more sophisticated way than the twice-around-the-tree algorithm. Note
that a twice-around-the-tree walk generated by the latter algorithm is an Eule-
rian circuit in the multigraph obtained by doubling every edge in the graph given.
Recall that an Eulerian circuit exists in a connected multigraph if and only if all
its vertices have even degrees. The Christoﬁdes algorithm obtains such a multi-
graph by adding to the graph the edges of a minimum-weight matching of all the
odd-degree vertices in its minimum spanning tree. (The number of such vertices
is always even and hence this can always be done.) Then the algorithm ﬁnds an
Eulerian circuit in the multigraph and transforms it into a Hamiltonian circuit by
shortcuts, exactly the same way it is done in the last step of the twice-around-the-
tree algorithm.
EXAMPLE 3
Let us trace the Christoﬁdes algorithm in Figure 12.12 on the same
instance (Figure 12.12a) used for tracing the twice-around-the-tree algorithm in
four odd-degree vertices: a, b, c, and e. The minimum-weight matching of these
four vertices consists of edges (a, b) and (c, e). (For this tiny instance, it can be
found easily by comparing the total weights of just three alternatives: (a, b) and
(c, e), (a, c) and (b, e), (a, e) and (b, c).) The traversal of the multigraph, starting
at vertex a, produces the Eulerian circuit a −b −c −e −d −b −a, which, after
one shortcut, yields the tour a −b −c −e −d −a of length 37.
The performance ratio of the Christoﬁdes algorithm on Euclidean instances
is 1.5 (see, e.g., [Pap82]). It tends to produce signiﬁcantly better approximations
to optimal tours than the twice-around-the-tree algorithm does in empirical tests.
(We quote some results of such tests at the end of this subsection.) The quality of
a tour obtained by this heuristic can be further improved by optimizing shortcuts
made on the last step of the algorithm as follows: examine the multiply-visited
cities in some arbitrary order and for each make the best possible shortcut. This

12.3
Approximation Algorithms for NP-Hard Problems
a
e
b
d
c
(a)
a
b
e
d
c
(b)
a
b
e
d
c
(c)
spanning tree with added edges (in dash) of a minimum-weight matching
of all odd-degree vertices. (c) Hamiltonian circuit obtained.
enhancement would have not improved the tour a −b −c −e −d −a obtained in
Example 3 from a −b −c −e −d −b −a because shortcutting the second occur-
rence of b happens to be better than shortcutting its ﬁrst occurrence. In general,
however, this enhancement tends to decrease the gap between the heuristic and
optimal tour lengths from about 15% to about 10%, at least for randomly gener-
ated Euclidean instances [Joh07a].
Local Search Heuristics For Euclidean instances, surprisingly good approxima-
tions to optimal tours can be obtained by iterative-improvement algorithms, which
are also called local search heuristics. The best-known of these are the 2-opt, 3-
opt, and Lin-Kernighan algorithms. These algorithms start with some initial tour,
e.g., constructed randomly or by some simpler approximation algorithm such as
the nearest-neighbor. On each iteration, the algorithm explores a neighborhood
around the current tour by replacing a few edges in the current tour by other
edges. If the changes produce a shorter tour, the algorithm makes it the current

Coping with the Limitations of Algorithm Power
C4
C1
C2
C3
(a)
C1
C2
C4
C3
(b)
tour and continues by exploring its neighborhood in the same manner; otherwise,
the current tour is returned as the algorithm’s output and the algorithm stops.
The 2-opt algorithm works by deleting a pair of nonadjacent edges in a tour
and reconnecting their endpoints by the different pair of edges to obtain another
tour (see Figure 12.13). This operation is called the 2-change. Note that there is
only one way to reconnect the endpoints because the alternative produces two
disjoint fragments.
EXAMPLE 4
If we start with the nearest-neighbor tour a −b −c −d −e −a in
the graph of Figure 12.11, whose length lnn is equal to 39, the 2-opt algorithm will
move to the next tour as shown in Figure 12.14.
To generalize the notion of the 2-change, one can consider the k-change for
any k ≥2. This operation replaces up to k edges in a current tour. In addition to
2-changes, only the 3-changes have proved to be of practical interest. The two
principal possibilities of 3-changes are shown in Figure 12.15.
There are several other local search algorithms for the traveling salesman
problem. The most prominent of them is the Lin-Kernighan algorithm [Lin73],
which for two decades after its publication in 1973 was considered the best algo-
rithm to obtain high-quality approximations of optimal tours. The Lin-Kernighan
algorithm is a variable-opt algorithm: its move can be viewed as a 3-opt move
followed by a sequence of 2-opt moves. Because of its complexity, we have to re-
frain from discussing this algorithm here. The excellent survey by Johnson and
McGeoch [Joh07a] contains an outline of the algorithm and its modern exten-
sions as well as methods for its efﬁcient implementation. This survey also contain
results from the important empirical studies about performance of many heuris-
tics for the traveling salesman problem, including of course, the Lin-Kernighan
algorithm. We conclude our discussion by quoting some of these data.
Empirical Results The traveling salesman problem has been the subject of in-
tense study for the last 50 years. This interest was driven by a combination of pure

12.3
Approximation Algorithms for NP-Hard Problems
a
b
e
d
c
a
b
e
d
c
l = 42 > lnn = 39
a
b
e
d
c
a
b
e
d
c
l = 46 > lnn = 39
a
b
e
d
c
a
b
e
d
c
l = 45 > lnn = 39
a
b
e
d
c
a
b
e
d
c
l = 38 < lnn = 39
(new tour)

Coping with the Limitations of Algorithm Power
C1
C4
C5
C3
C6
C2
(a)
C1
C2
C3
C4
C5
C6
(b)
C1
C2
C3
C4
C5
C6
(c)
theoretical interest and serious practical needs stemming from such newer ap-
plications as circuit-board and VLSI-chip fabrication, X-ray crystallography, and
genetic engineering. Progress in developing effective heuristics, their efﬁcient im-
plementation by using sophisticated data structures, and the ever-increasing power
of computers have led to a situation that differs drastically from a pessimistic pic-
ture painted by the worst-case theoretical results. This is especially true for the
most important applications class of instances of the traveling salesman problem:
points in the two-dimensional plane with the standard Euclidean distances be-
tween them.
Nowadays, Euclidean instances with up to 1000 cities can be solved exactly
in quite a reasonable amount of time—typically, in minutes or faster on a good
workstation—by such optimization packages as Concord [App]. In fact, according
to the information on the Web site maintained by the authors of that package, the
largest instance of the traveling salesman problem solved exactly as of January
2010 was a tour through 85,900 points in a VLSI application. It signiﬁcantly ex-
ceeded the previous record of the shortest tour through all 24,978 cities in Sweden.
There should be little doubt that the latest record will also be eventually super-
seded and our ability to solve ever larger instances exactly will continue to expand.
This remarkable progress does not eliminate the usefulness of approximation al-
gorithms for such problems, however. First, some applications lead to instances
that are still too large to be solved exactly in a reasonable amount of time. Second,
one may well prefer spending seconds to ﬁnd a tour that is within a few percent
of optimum than to spend many hours or even days of computing time to ﬁnd the
shortest tour exactly.
But how can one tell how good or bad the approximate solution is if we do not
know the length of an optimal tour? A convenient way to overcome this difﬁculty
is to solve the linear programming problem describing the instance in question by
ignoring the integrality constraints. This provides a lower bound—called the Held-
Karp bound—on the length of the shortest tour. The Held-Karp bound is typically
very close (less than 1%) to the length of an optimal tour, and this bound can be
computed in seconds or minutes unless the instance is truly huge. Thus, for a tour

12.3
Approximation Algorithms for NP-Hard Problems
heuristics on the 10,000-city random uniform
Euclidean instances [Joh07a]
% excess over the
Running time
Heuristic
Held-Karp bound
(seconds)
nearest neighbor
24.79
0.28
multifragment
16.42
0.20
Christoﬁdes
9.81
1.04
2-opt
4.70
1.41
3-opt
2.88
1.50
Lin-Kernighan
2.00
2.06
sa obtained by some heuristic, we estimate the accuracy ratio r(sa) = f (sa)/f (s∗)
from above by the ratio f (sa)/HK(s∗), where f (sa) is the length of the heuristic
tour sa and HK(s∗) is the Held-Karp lower bound on the shortest-tour length.
The results (see Table 12.1) from a large empirical study [Joh07a] indicate the
average tour quality and running times for the discussed heuristics.3 The instances
in the reported sample have 10,000 cities generated randomly and uniformly as
integral-coordinate points in the plane, with the Euclidean distances rounded
to the nearest integer. The quality of tours generated by the heuristics remain
about the same for much larger instances (up to a million cities) as long as they
belong to the same type of instances. The running times quoted are for expert
implementations run on a Compaq ES40 with 500 Mhz Alpha processors and 2
gigabytes of main memory or its equivalents.
Asymmetric instances of the traveling salesman problem—i.e., those with a
nonsymmetic matrix of intercity distances—have proved to be signiﬁcantly harder
to solve, both exactly and approximately, than Euclidean instances. In partic-
ular, exact optimal solutions for many 316-city asymmetric instances remained
unknown at the time of the state-of-the-art survey by Johnson et al. [Joh07b].
Approximation Algorithms for the Knapsack Problem
The knapsack problem, another well-known NP-hard problem, was also intro-
duced in Section 3.4: given n items of known weights w1, . . . , wn and values
v1, . . . , vn and a knapsack of weight capacity W, ﬁnd the most valuable sub-
set of the items that ﬁts into the knapsack. We saw how this problem can be
solved by exhaustive search (Section 3.4), dynamic programming (Section 8.2),
3.
We did not include the results for the twice-around-the-tree heuristic because of the inferior quality
of its approximations with the average excess of about 40%. Nor did we quote the results for the
most sophisticated local search heuristics with the average excess over optimum of less than a fraction
of 1%.

Coping with the Limitations of Algorithm Power
and branch-and-bound (Section 12.2). Now we will solve this problem by approx-
imation algorithms.
Greedy Algorithms for the Knapsack Problem We can think of several greedy
approaches to this problem. One is to select the items in decreasing order of
their weights; however, heavier items may not be the most valuable in the set.
Alternatively, if we pick up the items in decreasing order of their value, there is
no guarantee that the knapsack’s capacity will be used efﬁciently. Can we ﬁnd a
greedy strategy that takes into account both the weights and values? Yes, we can,
by computing the value-to-weight ratios vi/wi, i = 1, 2, . . . , n, and selecting the
items in decreasing order of these ratios. (In fact, we already used this approach in
designing the branch-and-bound algorithm for the problem in Section 12.2.) Here
is the algorithm based on this greedy heuristic.
Greedy algorithm for the discrete knapsack problem
Step 1 Compute the value-to-weight ratios ri = vi/wi, i = 1, . . . , n, for the
items given.
Step 2 Sort the items in nonincreasing order of the ratios computed in Step 1.
(Ties can be broken arbitrarily.)
Step 3 Repeat the following operation until no item is left in the sorted list:
if the current item on the list ﬁts into the knapsack, place it in the
knapsack and proceed to the next item; otherwise, just proceed to the
next item.
EXAMPLE 5
Let us consider the instance of the knapsack problem with the
knapsack capacity 10 and the item information as follows:
item
weight
value
$42
$12
$40
$25
Computing the value-to-weight ratios and sorting the items in nonincreasing order
of these efﬁciency ratios yields
item
weight
value
value/weight
$40
$42
$25
$12

12.3
Approximation Algorithms for NP-Hard Problems
The greedy algorithm will select the ﬁrst item of weight 4, skip the next item of
weight 7, select the next item of weight 5, and skip the last item of weight 3. The
solution obtained happens to be optimal for this instance (see Section 12.2, where
we solved the same instance by the branch-and-bound algorithm).
Does this greedy algorithm always yield an optimal solution? The answer, of
course, is no: if it did, we would have a polynomial-time algorithm for the NP-
hard problem. In fact, the following example shows that no ﬁnite upper bound on
the accuracy of its approximate solutions can be given either.
EXAMPLE 6
item
weight
value
value/weight
The knapsack capacity is W > 2.
W
W
Since the items are already ordered as required, the algorithm takes the ﬁrst item
and skips the second one; the value of this subset is 2. The optimal selection con-
sists of item 2 whose value is W. Hence, the accuracy ratio r(sa) of this approximate
solution is W/2, which is unbounded above.
It is surprisingly easy to tweak this greedy algorithm to get an approximation
algorithm with a ﬁnite performance ratio. All it takes is to choose the better of
two alternatives: the one obtained by the greedy algorithm or the one consisting
of a single item of the largest value that ﬁts into the knapsack. (Note that for
the instance of the preceding example, the second alternative is better than the
ﬁrst one.) It is not difﬁcult to prove that the performance ratio of this enhanced
greedy algorithm is 2. That is, the value of an optimal subset s∗will never be more
than twice as large as the value of the subset sa obtained by this enhanced greedy
algorithm, and 2 is the smallest multiple for which such an assertion can be made.
It is instructive to consider the continuous version of the knapsack problem
as well. In this version, we are permitted to take arbitrary fractions of the items
given. For this version of the problem, it is natural to modify the greedy algorithm
as follows.
Greedy algorithm for the continuous knapsack problem
Step 1 Compute the value-to-weight ratios vi/wi, i = 1, . . . , n, for the items
given.
Step 2 Sort the items in nonincreasing order of the ratios computed in Step 1.
(Ties can be broken arbitrarily.)
Step 3 Repeat the following operation until the knapsack is ﬁlled to its full
capacity or no item is left in the sorted list: if the current item on the
list ﬁts into the knapsack in its entirety, take it and proceed to the next
item; otherwise, take its largest fraction to ﬁll the knapsack to its full
capacity and stop.

Coping with the Limitations of Algorithm Power
For example, for the four-item instance used in Example 5 to illustrate the
greedy algorithm for the discrete version, the algorithm will take the ﬁrst item of
weight 4 and then 6/7 of the next item on the sorted list to ﬁll the knapsack to its
full capacity.
It should come as no surprise that this algorithm always yields an optimal
solution to the continuous knapsack problem. Indeed, the items are ordered
according to their efﬁciency in using the knapsack’s capacity. If the ﬁrst item on
the sorted list has weight w1 and value v1, no solution can use w1 units of capacity
with a higher payoff than v1. If we cannot ﬁll the knapsack with the ﬁrst item
or its fraction, we should continue by taking as much as we can of the second-
most efﬁcient item, and so on. A formal rendering of this proof idea is somewhat
involved, and we will leave it for the exercises.
Note also that the optimal value of the solution to an instance of the contin-
uous knapsack problem can serve as an upper bound on the optimal value of the
discrete version of the same instance. This observation provides a more sophisti-
cated way of computing upper bounds for solving the discrete knapsack problem
by the branch-and-bound method than the one used in Section 12.2.
Approximation Schemes We now return to the discrete version of the knap-
sack problem. For this problem, unlike the traveling salesman problem, there exist
polynomial-time approximation schemes, which are parametric families of algo-
rithms that allow us to get approximations s(k)
a
with any predeﬁned accuracy level:
f (s∗)
f (s(k)
a )
≤1 + 1/k
for any instance of size n,
where k is an integer parameter in the range 0 ≤k < n. The ﬁrst approximation
scheme was suggested by S. Sahni in 1975 [Sah75]. This algorithm generates all
subsets of k items or less, and for each one that ﬁts into the knapsack it adds the
remaining items as the greedy algorithm would do (i.e., in nonincreasing order
of their value-to-weight ratios). The subset of the highest value obtained in this
fashion is returned as the algorithm’s output.
EXAMPLE 7
A small example of an approximation scheme with k = 2 is pro-
vided in Figure 12.16. The algorithm yields {1, 3, 4}, which is the optimal solution
for this instance.
You can be excused for not being overly impressed by this example. And,
indeed, the importance of this scheme is mostly theoretical rather than practical.
It lies in the fact that, in addition to approximating the optimal solution with any
predeﬁned accuracy level, the time efﬁciency of this algorithm is polynomial in n.
Indeed, the total number of subsets the algorithm generates before adding extra
elements is
k

j=0
	n
j

=
k

j=0
n(n −1) . . . (n −j + 1)
j!
≤
k

j=0
nj ≤
k

j=0
nk = (k + 1)nk.

12.3
Approximation Algorithms for NP-Hard Problems
item
weight
value
value/weight
$40
$42
$25
$ 4
capacity W = 10
(a)
subset
added items
value
∅
1, 3, 4
$69
{1}
3, 4
$69
{2}
$46
{3}
1, 4
$69
{4}
1, 3
$69
{1, 2}
not feasible
{1, 3}
$69
{1, 4}
$69
{2, 3}
not feasible
{2, 4}
$46
{3, 4}
$69
(b)
(b) Subsets generated by the algorithm.
For each of those subsets, it needs O(n) time to determine the subset’s possible
extension. Thus, the algorithm’s efﬁciency is in O(knk+1). Note that although it is
polynomial in n, the time efﬁciency of Sahni’s scheme is exponential in k. More
sophisticated approximation schemes, called fully polynomial schemes, do not
have this shortcoming. Among several books that discuss such algorithms, the
monographs [Mar90] and [Kel04] are especially recommended for their wealth of
other material about the knapsack problem.
Exercises 12.3
1. a. Apply the nearest-neighbor algorithm to the instance deﬁned by the inter-
city distance matrix below. Start the algorithm at the ﬁrst city, assuming
that the cities are numbered from 1 to 5.
⎡
⎢⎢⎢⎢⎣
∞
∞
⎤
⎥⎥⎥⎥⎦
b. Compute the accuracy ratio of this approximate solution.
