# BCS401 — Module 2

## Divide and Conquer

**Subject:** BCS401 (Analysis and Design of Algorithms)
**Module:** Module 2
**Content type:** module_notes
**Sources:** BCS401-module-2-textbook.txt

---

3.4
Exhaustive Search
b. a square
c. the boundary of a square
d. a straight line
9. Design a linear-time algorithm to determine two extreme points of the convex
hull of a given set of n > 1 points in the plane.
10. What modiﬁcation needs to be made in the brute-force algorithm for the
convex-hull problem to handle more than two points on the same straight
line?
11. Write a program implementing the brute-force algorithm for the convex-hull
problem.
12. Consider the following small instance of the linear programming problem:
maximize
3x + 5y
subject to
x + y ≤4
x + 3y ≤6
x ≥0, y ≥0.
a. Sketch, in the Cartesian plane, the problem’s feasible region, deﬁned as
the set of points satisfying all the problem’s constraints.
b. Identify the region’s extreme points.
c. Solve this optimization problem by using the following theorem: A linear
programming problem with a nonempty bounded feasible region always
has a solution, which can be found at one of the extreme points of its
feasible region.
3.4
Exhaustive Search
Many important problems require ﬁnding an element with a special property in a
domain that grows exponentially (or faster) with an instance size. Typically, such
problems arise in situations that involve—explicitly or implicitly—combinatorial
objects such as permutations, combinations, and subsets of a given set. Many such
problems are optimization problems: they ask to ﬁnd an element that maximizes
or minimizes some desired characteristic such as a path length or an assignment
cost.
Exhaustive search is simply a brute-force approach to combinatorial prob-
lems. It suggests generating each and every element of the problem domain, se-
lecting those of them that satisfy all the constraints, and then ﬁnding a desired
element (e.g., the one that optimizes some objective function). Note that although
the idea of exhaustive search is quite straightforward, its implementation typically
requires an algorithm for generating certain combinatorial objects. We delay a dis-
cussion of such algorithms until the next chapter and assume here that they exist.
MODULE-2
3.4 Exhaustive Search
 
  ➤Traveling Salesman Problem
  ➤Knapsack Problem
  ➤Assignment Problem
 
4.1 Insertion Sort
 
4.2 Topological Sorting
 
5.1 Mergesort
 
5.2 Quicksort
 
5.3 Binary Tree Traversals and Related Properties
 
5.4 Multiplication of Large Integers and Strassen’s Matrix Multiplication
 
  ➤Multiplication of Large Integers
  ➤Strassen’s Matrix Multiplication

Brute Force and Exhaustive Search
We illustrate exhaustive search by applying it to three important problems: the
traveling salesman problem, the knapsack problem, and the assignment problem.
Traveling Salesman Problem
The traveling salesman problem (TSP) has been intriguing researchers for the
last 150 years by its seemingly simple formulation, important applications, and
interesting connections to other combinatorial problems. In layman’s terms, the
problem asks to ﬁnd the shortest tour through a given set of n cities that visits each
city exactly once before returning to the city where it started. The problem can be
conveniently modeled by a weighted graph, with the graph’s vertices representing
the cities and the edge weights specifying the distances. Then the problem can be
stated as the problem of ﬁnding the shortest Hamiltonian circuit of the graph. (A
Hamiltonian circuit is deﬁned as a cycle that passes through all the vertices of the
graph exactly once. It is named after the Irish mathematician Sir William Rowan
Hamilton (1805–1865), who became interested in such cycles as an application of
his algebraic discoveries.)
It is easy to see that a Hamiltonian circuit can also be deﬁned as a sequence of
n + 1adjacent vertices vi0, vi1, . . . , vin−1, vi0, where the ﬁrst vertex of the sequence
is the same as the last one and all the other n −1 vertices are distinct. Further,
we can assume, with no loss of generality, that all circuits start and end at one
particular vertex (they are cycles after all, are they not?). Thus, we can get all
the tours by generating all the permutations of n −1 intermediate cities, compute
the tour lengths, and ﬁnd the shortest among them. Figure 3.7 presents a small
instance of the problem and its solution by this method.
An inspection of Figure 3.7 reveals three pairs of tours that differ only by
their direction. Hence, we could cut the number of vertex permutations by half.
We could, for example, choose any two intermediate vertices, say, b and c, and then
consider only permutations in which b precedes c. (This trick implicitly deﬁnes a
tour’s direction.)
This improvement cannot brighten the efﬁciency picture much, however.
The total number of permutations needed is still 1
2(n −1)!, which makes the
exhaustive-search approach impractical for all but very small values of n. On the
other hand, if you always see your glass as half-full, you can claim that cutting
the work by half is nothing to sneeze at, even if you solve a small instance of the
problem, especially by hand. Also note that had we not limited our investigation
to the circuits starting at the same vertex, the number of permutations would have
been even larger, by a factor of n.
Knapsack Problem
Here is another well-known problem in algorithmics. Given n items of known
weights w1, w2, . . . , wn and values v1, v2, . . . , vn and a knapsack of capacity W,
ﬁnd the most valuable subset of the items that ﬁt into the knapsack. If you do not
like the idea of putting yourself in the shoes of a thief who wants to steal the most

3.4
Exhaustive Search
a
c
b
d
a  ---> b  ---> c  ---> d  ---> a
a  ---> b  ---> d  ---> c  ---> a
a  ---> c  ---> b  ---> d  ---> a
a  ---> c  ---> d  ---> b  ---> a
a  ---> d  ---> b  ---> c  ---> a
a  ---> d  ---> c  ---> b  ---> a
I  = 2 + 8 + 1 + 7 = 18
I  = 2 + 3 + 1 + 5 = 11
optimal
Tour
Length 
optimal
I  = 5 + 8 + 3 + 7 = 23
I  = 5 + 1 + 3 + 2 = 11
I  = 7 + 3 + 8 + 5 = 23
I  = 7 + 1 + 8 + 2 = 18
——
———
search.
valuable loot that ﬁts into his knapsack, think about a transport plane that has to
deliver the most valuable set of items to a remote location without exceeding the
plane’s capacity. Figure 3.8a presents a small instance of the knapsack problem.
The exhaustive-search approach to this problem leads to generating all the
subsets of the set of n items given, computing the total weight of each subset in
order to identify feasible subsets (i.e., the ones with the total weight not exceeding
the knapsack capacity), and ﬁnding a subset of the largest value among them. As
an example, the solution to the instance of Figure 3.8a is given in Figure 3.8b. Since
the number of subsets of an n-element set is 2n, the exhaustive search leads to a
(2n) algorithm, no matter how efﬁciently individual subsets are generated.
Thus, for both the traveling salesman and knapsack problems considered
above, exhaustive search leads to algorithms that are extremely inefﬁcient on
every input. In fact, these two problems are the best-known examples of so-
called NP-hard problems. No polynomial-time algorithm is known for any NP-
hard problem. Moreover, most computer scientists believe that such algorithms
do not exist, although this very important conjecture has never been proven.
More-sophisticated approaches—backtracking and branch-and-bound (see Sec-
tions 12.1 and 12.2)—enable us to solve some but not all instances of these and

Brute Force and Exhaustive Search
item 4
item 3
item 2
item 1
knapsack
w1 = 7
v1 = $42
w2 = 3
v2 = $12
w3 = 4
v3 = $40
w4 = 5
v4 = $25
(a)
Subset
Total weight
Total value
∅
$ 0
{1}
$42
{2}
$12
{3}
$40
{4}
$25
{1, 2}
$54
{1, 3}
not feasible
{1, 4}
not feasible
{2, 3}
$52
{2, 4}
$37

3, 4

$65
{1, 2, 3}
not feasible
{1, 2, 4}
not feasible
{1, 3, 4}
not feasible
{2, 3, 4}
not feasible
{1, 2, 3, 4}
not feasible
(b)
The information about the optimal selection is in bold.

3.4
Exhaustive Search
similar problems in less than exponential time. Alternatively, we can use one of
many approximation algorithms, such as those described in Section 12.3.
Assignment Problem
In our third example of a problem that can be solved by exhaustive search, there
are n people who need to be assigned to execute n jobs, one person per job. (That
is, each person is assigned to exactly one job and each job is assigned to exactly
one person.) The cost that would accrue if the ith person is assigned to the jth job
is a known quantity C[i, j] for each pair i, j = 1, 2, . . . , n. The problem is to ﬁnd
an assignment with the minimum total cost.
A small instance of this problem follows, with the table entries representing
the assignment costs C[i, j]:
Job 1
Job 2
Job 3
Job 4
Person 1
Person 2
Person 3
Person 4
It is easy to see that an instance of the assignment problem is completely
speciﬁed by its cost matrix C. In terms of this matrix, the problem is to select one
element in each row of the matrix so that all selected elements are in different
columns and the total sum of the selected elements is the smallest possible. Note
that no obvious strategy for ﬁnding a solution works here. For example, we cannot
select the smallest element in each row, because the smallest elements may happen
to be in the same column. In fact, the smallest element in the entire matrix need
not be a component of an optimal solution. Thus, opting for the exhaustive search
may appear as an unavoidable evil.
We can describe feasible solutions to the assignment problem as n-tuples
⟨j1, . . . , jn⟩in which the ith component, i = 1, . . . , n, indicates the column of the
element selected in the ith row (i.e., the job number assigned to the ith person).
For example, for the cost matrix above, ⟨2, 3, 4, 1⟩indicates the assignment of
Person 1 to Job 2, Person 2 to Job 3, Person 3 to Job 4, and Person 4 to Job 1.
The requirements of the assignment problem imply that there is a one-to-one
correspondence between feasible assignments and permutations of the ﬁrst n
integers. Therefore, the exhaustive-search approach to the assignment problem
would require generating all the permutations of integers 1, 2, . . . , n, computing
the total cost of each assignment by summing up the corresponding elements of
the cost matrix, and ﬁnally selecting the one with the smallest sum. A few ﬁrst
iterations of applying this algorithm to the instance given above are shown in

Brute Force and Exhaustive Search
C =
<1, 2, 3, 4>
<1, 2, 4, 3>
<1, 3, 2, 4>
<1, 3, 4, 2>
<1, 4, 2, 3>
<1, 4, 3, 2>
cost = 9 + 4 + 1 + 4 = 18
cost = 9 + 4 + 8 + 9 = 30
cost = 9 + 3 + 8 + 4 = 24
cost = 9 + 3 + 8 + 6 = 26
cost = 9 + 7 + 8 + 9 = 33
cost = 9 + 7 + 1 + 6 = 23
etc.
by exhaustive search.
Since the number of permutations to be considered for the general case of the
assignment problem is n!, exhaustive search is impractical for all but very small
instances of the problem. Fortunately, there is a much more efﬁcient algorithm for
this problem called the Hungarian method after the Hungarian mathematicians
K¨onig and Egerv´ary, whose work underlies the method (see, e.g., [Kol95]).
This is good news: the fact that a problem domain grows exponentially or
faster does not necessarily imply that there can be no efﬁcient algorithm for solving
it. In fact, we present several other examples of such problems later in the book.
However, such examples are more of an exception to the rule. More often than
not, there are no known polynomial-time algorithms for problems whose domain
grows exponentially with instance size, provided we want to solve them exactly.
And, as we mentioned above, such algorithms quite possibly do not exist.
Exercises 3.4
1. a. Assuming that each tour can be generated in constant time, what will be
the efﬁciency class of the exhaustive-search algorithm outlined in the text
for the traveling salesman problem?
b. If this algorithm is programmed on a computer that makes ten billion
additions per second, estimate the maximum number of cities for which
the problem can be solved in
i. 1 hour.
ii. 24 hours.
iii. 1 year.
iv. 1 century.
2. Outline an exhaustive-search algorithm for the Hamiltonian circuit problem.
3. Outline an algorithm to determine whether a connected graph represented
by its adjacency matrix has an Eulerian circuit. What is the efﬁciency class of
your algorithm?
4. Complete the application of exhaustive search to the instance of the assign-
ment problem started in the text.
5. Give an example of the assignment problem whose optimal solution does not
include the smallest element of its cost matrix.

Decrease-and-Conquer
Plutarch says that Sertorius, in order to teach his soldiers that perseverance
and wit are better than brute force, had two horses brought before them,
and set two men to pull out their tails. One of the men was a burly Hercules,
who tugged and tugged, but all to no purpose; the other was a sharp, weasel-
faced tailor, who plucked one hair at a time, amidst roars of laughter, and
soon left the tail quite bare.
—E. Cobham Brewer, Dictionary of Phrase and Fable, 1898
T
he decrease-and-conquer technique is based on exploiting the relationship
between a solution to a given instance of a problem and a solution to its
smaller instance. Once such a relationship is established, it can be exploited either
top down or bottom up. The former leads naturally to a recursive implementa-
tion, although, as one can see from several examples in this chapter, an ultimate
implementation may well be nonrecursive. The bottom-up variation is usually
implemented iteratively, starting with a solution to the smallest instance of the
problem; it is called sometimes the incremental approach.
There are three major variations of decrease-and-conquer:
decrease by a constant
decrease by a constant factor
variable size decrease
In the decrease-by-a-constant variation, the size of an instance is reduced
by the same constant on each iteration of the algorithm. Typically, this constant
is equal to one (Figure 4.1), although other constant size reductions do happen
occasionally.
Consider, as an example, the exponentiation problem of computing an where
a̸ = 0 and n is a nonnegative integer. The relationship between a solution to an
instance of size n and an instance of size n −1 is obtained by the obvious formula
an = an−1 . a. So the function f (n) = an can be computed either “top down” by
using its recursive deﬁnition

Decrease-and-Conquer
problem of size n
subproblem
of size n –1
solution to
the subproblem
solution to
the original problem
f (n) =

f (n −1) . a
if n > 0,
if n = 0,
(4.1)
or “bottom up” by multiplying 1by a n times. (Yes, it is the same as the brute-force
algorithm, but we have come to it by a different thought process.) More interesting
examples of decrease-by-one algorithms appear in Sections 4.1–4.3.
The decrease-by-a-constant-factor technique suggests reducing a problem
instance by the same constant factor on each iteration of the algorithm. In most
applications, this constant factor is equal to two. (Can you give an example of such
an algorithm?) The decrease-by-half idea is illustrated in Figure 4.2.
For an example, let us revisit the exponentiation problem. If the instance of
size n is to compute an, the instance of half its size is to compute an/2, with the
obvious relationship between the two: an = (an/2)2. But since we consider here
instances with integer exponents only, the former does not work for odd n. If n is
odd, we have to compute an−1 by using the rule for even-valued exponents and
then multiply the result by a. To summarize, we have the following formula:

Decrease-and-Conquer
problem  of size n
subproblem
of size n/2
solution to
the subproblem
solution to
the original problem
an =
⎧
⎨
⎩
(an/2)2
if n is even and positive,
(a(n−1)/2)2 . a
if n is odd,
if n = 0.
(4.2)
If we compute an recursively according to formula (4.2) and measure the algo-
rithm’s efﬁciency by the number of multiplications, we should expect the algorithm
to be in (log n) because, on each iteration, the size is reduced by about a half at
the expense of one or two multiplications.
A few other examples of decrease-by-a-constant-factor algorithms are given
in Section 4.4 and its exercises. Such algorithms are so efﬁcient, however, that
there are few examples of this kind.
Finally, in the variable-size-decrease variety of decrease-and-conquer, the
size-reduction pattern varies from one iteration of an algorithm to another. Eu-
clid’s algorithm for computing the greatest common divisor provides a good ex-
ample of such a situation. Recall that this algorithm is based on the formula
gcd(m, n) = gcd(n, m mod n).

Decrease-and-Conquer
Though the value of the second argument is always smaller on the right-hand side
than on the left-hand side, it decreases neither by a constant nor by a constant
factor. A few other examples of such algorithms appear in Section 4.5.
4.1
Insertion Sort
In this section, we consider an application of the decrease-by-one technique to
sorting an array A[0..n −1]. Following the technique’s idea, we assume that the
smaller problem of sorting the array A[0..n −2] has already been solved to give
us a sorted array of size n −1: A[0] ≤. . . ≤A[n −2]. How can we take advantage
of this solution to the smaller problem to get a solution to the original problem
by taking into account the element A[n −1]? Obviously, all we need is to ﬁnd an
appropriate position for A[n −1] among the sorted elements and insert it there.
This is usually done by scanning the sorted subarray from right to left until the
ﬁrst element smaller than or equal to A[n −1] is encountered to insert A[n −1]
right after that element. The resulting algorithm is called straight insertion sort
or simply insertion sort.
Though insertion sort is clearly based on a recursive idea, it is more efﬁcient
to implement this algorithm bottom up, i.e., iteratively. As shown in Figure 4.3,
starting with A[1]and ending with A[n −1], A[i]is inserted in its appropriate place
among the ﬁrst i elements of the array that have been already sorted (but, unlike
selection sort, are generally not in their ﬁnal positions).
Here is pseudocode of this algorithm.
ALGORITHM
InsertionSort(A[0..n −1])
//Sorts a given array by insertion sort
//Input: An array A[0..n −1] of n orderable elements
//Output: Array A[0..n −1] sorted in nondecreasing order
for i ←1 to n −1 do
v ←A[i]
j ←i −1
while j ≥0 and A[j] > v do
A[j + 1] ←A[j]
j ←j −1
A[j + 1] ←v
A[0] ≤. . . ≤A[ j] < A[ j + 1] ≤. . . ≤A[i – 1] ⏐A[i] . . . A[n – 1]
smaller than or equal to A[i]
greater than A[i]
preceding elements previously sorted.

4.1
Insertion Sort
89  |
89  |
89  |
90  |
90  |
90  |
part of the array from the remaining elements; the element being inserted
is in bold.
The operation of the algorithm is illustrated in Figure 4.4.
The basic operation of the algorithm is the key comparison A[j]> v. (Why not
j ≥0? Because it is almost certainly faster than the former in an actual computer
implementation. Moreover, it is not germane to the algorithm: a better imple-
mentation with a sentinel—see Problem 8 in this section’s exercises—eliminates
it altogether.)
The number of key comparisons in this algorithm obviously depends on the
nature of the input. In the worst case, A[j] > v is executed the largest number
of times, i.e., for every j = i −1, . . . , 0. Since v = A[i], it happens if and only if
A[j] > A[i] for j = i −1, . . . , 0. (Note that we are using the fact that on the ith
iteration of insertion sort all the elements preceding A[i]are the ﬁrst i elements in
the input, albeit in the sorted order.) Thus, for the worst-case input, we get A[0] >
A[1] (for i = 1), A[1] > A[2] (for i = 2), . . . , A[n −2] > A[n −1] (for i = n −1).
In other words, the worst-case input is an array of strictly decreasing values. The
number of key comparisons for such an input is
Cworst(n) =
n−1

i=1
i−1

j=0
1 =
n−1

i=1
i = (n −1)n
∈(n2).
Thus, in the worst case, insertion sort makes exactly the same number of compar-
isons as selection sort (see Section 3.1).
In the best case, the comparison A[j] > v is executed only once on every
iteration of the outer loop. It happens if and only if A[i −1] ≤A[i] for every
i = 1, . . . , n −1, i.e., if the input array is already sorted in nondecreasing order.
(Though it “makes sense” that the best case of an algorithm happens when the
problem is already solved, it is not always the case, as you are going to see in our
discussion of quicksort in Chapter 5.) Thus, for sorted arrays, the number of key
comparisons is
Cbest(n) =
n−1

i=1
1 = n −1 ∈(n).

Decrease-and-Conquer
This very good performance in the best case of sorted arrays is not very useful by
itself, because we cannot expect such convenient inputs. However, almost-sorted
ﬁles do arise in a variety of applications, and insertion sort preserves its excellent
performance on such inputs.
A rigorous analysis of the algorithm’s average-case efﬁciency is based on
investigating the number of element pairs that are out of order (see Problem 11 in
this section’s exercises). It shows that on randomly ordered arrays, insertion sort
makes on average half as many comparisons as on decreasing arrays, i.e.,
Cavg(n) ≈n2
4 ∈(n2).
This twice-as-fast average-case performance coupled with an excellent efﬁciency
on almost-sorted arrays makes insertion sort stand out among its principal com-
petitors among elementary sorting algorithms, selection sort and bubble sort. In
addition, its extension named shellsort, after its inventor D. L. Shell [She59], gives
us an even better algorithm for sorting moderately large ﬁles (see Problem 12 in
this section’s exercises).
Exercises 4.1
1. Ferrying soldiers
A detachment of n soldiers must cross a wide and deep
river with no bridge in sight. They notice two 12-year-old boys playing in a
rowboat by the shore. The boat is so tiny, however, that it can only hold two
boys or one soldier. How can the soldiers get across the river and leave the
boys in joint possession of the boat? How many times need the boat pass from
shore to shore?
2. Alternating glasses
a. There are 2n glasses standing next to each other in a row, the ﬁrst n of them
ﬁlled with a soda drink and the remaining n glasses empty. Make the glasses
alternate in a ﬁlled-empty-ﬁlled-empty pattern in the minimum number of
glass moves. [Gar78]
b. Solve the same problem if 2n glasses—n with a drink and n empty—are
initially in a random order.
3. Marking cells
Design an algorithm for the following task. For any even n,
mark n cells on an inﬁnite sheet of graph paper so that each marked cell has an
odd number of marked neighbors. Two cells are considered neighbors if they
are next to each other either horizontally or vertically but not diagonally. The
marked cells must form a contiguous region, i.e., a region in which there is a
path between any pair of marked cells that goes through a sequence of marked
neighbors. [Kor05]

Decrease-and-Conquer
What is the time efﬁciency of this algorithm? How is it compared to that
of the version given in Section 4.1?
11. Let A[0..n −1] be an array of n sortable elements. (For simplicity, you may
assume that all the elements are distinct.) A pair (A[i], A[j]) is called an
inversion if i < j and A[i] > A[j].
a. What arrays of size n have the largest number of inversions and what is this
number? Answer the same questions for the smallest number of inversions.
b. Show that the average-case number of key comparisons in insertion sort is
given by the formula
Cavg(n) ≈n2
4 .
12. Shellsort (more accurately Shell’s sort) is an important sorting algorithm that
works by applying insertion sort to each of several interleaving sublists of a
given list. On each pass through the list, the sublists in question are formed
by stepping through the list with an increment hi taken from some predeﬁned
decreasing sequence of step sizes, h1 > . . . > hi > . . . > 1, which must end with
1. (The algorithm works for any such sequence, though some sequences are
known to yield a better efﬁciency than others. For example, the sequence 1,
4, 13, 40, 121, . . . , used, of course, in reverse, is known to be among the best
for this purpose.)
a. Apply shellsort to the list
S, H, E, L, L, S, O, R, T, I, S, U, S, E, F, U, L
b. Is shellsort a stable sorting algorithm?
c. Implement shellsort, straight insertion sort, selection sort, and bubble sort
in the language of your choice and compare their performance on random
arrays of sizes 10n for n = 2, 3, 4, 5, and 6 as well as on increasing and
decreasing arrays of these sizes.
4.2
Topological Sorting
In this section, we discuss an important problem for directed graphs, with a
variety of applications involving prerequisite-restricted tasks. Before we pose this
problem, though, let us review a few basic facts about directed graphs themselves.
A directed graph, or digraph for short, is a graph with directions speciﬁed for all
its edges (Figure 4.5a is an example). The adjacency matrix and adjacency lists are
still two principal means of representing a digraph. There are only two notable
differences between undirected and directed graphs in representing them: (1) the
adjacency matrix of a directed graph does not have to be symmetric; (2) an edge
in a directed graph has just one (not two) corresponding nodes in the digraph’s
adjacency lists.

4.2
Topological Sorting
b
b
c
c
d
d
e
e
(a)
(b)
a
a
Depth-ﬁrst search and breadth-ﬁrst search are principal traversal algorithms
for traversing digraphs as well, but the structure of corresponding forests can be
more complex than for undirected graphs. Thus, even for the simple example of
edges possible in a DFS forest of a directed graph: tree edges (ab, bc, de), back
edges (ba) from vertices to their ancestors, forward edges (ac) from vertices to
their descendants in the tree other than their children, and cross edges (dc), which
are none of the aforementioned types.
Note that a back edge in a DFS forest of a directed graph can connect a vertex
to its parent. Whether or not it is the case, the presence of a back edge indicates
that the digraph has a directed cycle. A directed cycle in a digraph is a sequence
of three or more of its vertices that starts and ends with the same vertex and in
which every vertex is connected to its immediate predecessor by an edge directed
from the predecessor to the successor. For example, a, b, a is a directed cycle in
the digraph in Figure 4.5a. Conversely, if a DFS forest of a digraph has no back
edges, the digraph is a dag, an acronym for directed acyclic graph.
Edge directions lead to new questions about digraphs that are either meaning-
less or trivial for undirected graphs. In this section, we discuss one such question.
As a motivating example, consider a set of ﬁve required courses {C1, C2, C3, C4,
C5} a part-time student has to take in some degree program. The courses can be
taken in any order as long as the following course prerequisites are met: C1 and
C2 have no prerequisites, C3 requires C1 and C2, C4 requires C3, and C5 requires
C3 and C4. The student can take only one course per term. In which order should
the student take the courses?
The situation can be modeled by a digraph in which vertices represent courses
and directed edges indicate prerequisite requirements (Figure 4.6). In terms of
this digraph, the question is whether we can list its vertices in such an order that
for every edge in the graph, the vertex where the edge starts is listed before the
vertex where the edge ends. (Can you ﬁnd such an ordering of this digraph’s
vertices?) This problem is called topological sorting. It can be posed for an

Decrease-and-Conquer
C1
C4
C2
C5
C3
C1
C51
C42
C33
C14
C1
C3
C4
C5
C25
(a)
(b)
(c)
The popping-off order:
C5, C4, C3, C1, C2
The topologically sorted list:
C 2
C3
C4
C5
C2
(b) DFS traversal stack with the subscript numbers indicating the popping-
off order. (c) Solution to the problem.
arbitrary digraph, but it is easy to see that the problem cannot have a solution
if a digraph has a directed cycle. Thus, for topological sorting to be possible, a
digraph in question must be a dag. It turns out that being a dag is not only necessary
but also sufﬁcient for topological sorting to be possible; i.e., if a digraph has no
directed cycles, the topological sorting problem for it has a solution. Moreover,
there are two efﬁcient algorithms that both verify whether a digraph is a dag
and, if it is, produce an ordering of vertices that solves the topological sorting
problem.
The ﬁrst algorithm is a simple application of depth-ﬁrst search: perform a DFS
traversal and note the order in which vertices become dead-ends (i.e., popped
off the traversal stack). Reversing this order yields a solution to the topological
sorting problem, provided, of course, no back edge has been encountered during
the traversal. If a back edge has been encountered, the digraph is not a dag, and
topological sorting of its vertices is impossible.
Why does the algorithm work? When a vertex v is popped off a DFS stack,
no vertex u with an edge from u to v can be among the vertices popped off before
v. (Otherwise, (u, v) would have been a back edge.) Hence, any such vertex u will
be listed after v in the popped-off order list, and before v in the reversed list.
ure 4.6. Note that in Figure 4.7c, we have drawn the edges of the digraph, and
they all point from left to right as the problem’s statement requires. It is a con-
venient way to check visually the correctness of a solution to an instance of the
topological sorting problem.

4.2
Topological Sorting
C1
delete C1
delete C2
delete C3
The solution obtained is C1, C2, C3, C4, C5
delete C4
delete C5
C4
C4
C4
C5
C5
C5
C5
C3
C4
C5
C3
C2
C3
C2
problem. On each iteration, a vertex with no incoming edges is deleted
from the digraph.
The second algorithm is based on a direct implementation of the decrease-(by
one)-and-conquer technique: repeatedly, identify in a remaining digraph a source,
which is a vertex with no incoming edges, and delete it along with all the edges
outgoing from it. (If there are several sources, break the tie arbitrarily. If there
are none, stop because the problem cannot be solved—see Problem 6a in this
section’s exercises.) The order in which the vertices are deleted yields a solution
to the topological sorting problem. The application of this algorithm to the same
digraph representing the ﬁve courses is given in Figure 4.8.
Note that the solution obtained by the source-removal algorithm is different
from the one obtained by the DFS-based algorithm. Both of them are correct, of
course; the topological sorting problem may have several alternative solutions.
The tiny size of the example we used might create a wrong impression about
the topological sorting problem. But imagine a large project—e.g., in construction,
research, or software development—that involves a multitude of interrelated tasks
with known prerequisites. The ﬁrst thing to do in such a situation is to make sure
that the set of given prerequisites is not contradictory. The convenient way of
doing this is to solve the topological sorting problem for the project’s digraph.
Only then can one start thinking about scheduling tasks to, say, minimize the total
completion time of the project. This would require, of course, other algorithms that
you can ﬁnd in general books on operations research or in special ones on CPM
(Critical Path Method) and PERT (Program Evaluation and Review Technique)
methodologies.
As to applications of topological sorting in computer science, they include
instruction scheduling in program compilation, cell evaluation ordering in spread-
sheet formulas, and resolving symbol dependencies in linkers.

Divide-and-Conquer
Whatever man prays for, he prays for a miracle. Every prayer reduces itself
to this—Great God, grant that twice two be not four.
—Ivan Turgenev (1818–1883), Russian novelist and short-story writer
D
ivide-and-conquer is probably the best-known general algorithm design
technique. Though its fame may have something to do with its catchy name, it
is well deserved: quite a few very efﬁcient algorithms are speciﬁc implementations
of this general strategy. Divide-and-conquer algorithms work according to the
following general plan:
1.
A problem is divided into several subproblems of the same type, ideally of
about equal size.
2.
The subproblems are solved (typically recursively, though sometimes a dif-
ferent algorithm is employed, especially when subproblems become small
enough).
3.
If necessary, the solutions to the subproblems are combined to get a solution
to the original problem.
The divide-and-conquer technique is diagrammed in Figure 5.1, which depicts
the case of dividing a problem into two smaller subproblems, by far the most widely
occurring case (at least for divide-and-conquer algorithms designed to be executed
on a single-processor computer).
As an example, let us consider the problem of computing the sum of n numbers
a0, . . . , an−1. If n > 1, we can divide the problem into two instances of the same
problem: to compute the sum of the ﬁrst ⌊n/2⌋numbers and to compute the sum
of the remaining ⌈n/2⌉numbers. (Of course, if n = 1, we simply return a0 as the
answer.) Once each of these two sums is computed by applying the same method
recursively, we can add their values to get the sum in question:
a0 + . . . + an−1 = (a0 + . . . + a⌊n/2⌋−1) + (a⌊n/2⌋+ . . . + an−1).
Is this an efﬁcient way to compute the sum of n numbers? A moment of
reﬂection (why could it be more efﬁcient than the brute-force summation?), a

Divide-and-Conquer
subproblem 1
of size n/2
subproblem 2
of size n/2
solution to
subproblem 1
solution to
subproblem 2
solution to
the original problem
problem  of size n
small example of summing, say, four numbers by this algorithm, a formal analysis
(which follows), and common sense (we do not normally compute sums this way,
do we?) all lead to a negative answer to this question.1
Thus, not every divide-and-conquer algorithm is necessarily more efﬁcient
than even a brute-force solution. But often our prayers to the Goddess of
Algorithmics—see the chapter’s epigraph—are answered, and the time spent on
executing the divide-and-conquer plan turns out to be signiﬁcantly smaller than
solving a problem by a different method. In fact, the divide-and-conquer approach
yields some of the most important and efﬁcient algorithms in computer science.
We discuss a few classic examples of such algorithms in this chapter. Though we
consider only sequential algorithms here, it is worth keeping in mind that the
divide-and-conquer technique is ideally suited for parallel computations, in which
each subproblem can be solved simultaneously by its own processor.
1.
Actually, the divide-and-conquer algorithm, called the pairwise summation, may substantially reduce
the accumulated round-off error of the sum of numbers that can be represented only approximately
in a digital computer [Hig93].

Divide-and-Conquer
As mentioned above, in the most typical case of divide-and-conquer a prob-
lem’s instance of size n is divided into two instances of size n/2. More generally,
an instance of size n can be divided into b instances of size n/b, with a of them
needing to be solved. (Here, a and b are constants; a ≥1 and b > 1.) Assuming
that size n is a power of b to simplify our analysis, we get the following recurrence
for the running time T (n):
T (n) = aT (n/b) + f (n),
(5.1)
where f (n) is a function that accounts for the time spent on dividing an instance
of size n into instances of size n/b and combining their solutions. (For the sum
example above, a = b = 2 and f (n) = 1.) Recurrence (5.1) is called the general
divide-and-conquer recurrence. Obviously, the order of growth of its solution T (n)
depends on the values of the constants a and b and the order of growth of the
function f (n). The efﬁciency analysis of many divide-and-conquer algorithms is
greatly simpliﬁed by the following theorem (see Appendix B).
Master Theorem
If f (n) ∈(nd) where d ≥0 in recurrence (5.1), then
T (n) ∈
⎧
⎨
⎩
(nd)
if a < bd,
(nd log n)
if a = bd,
(nlogb a)
if a > bd.
Analogous results hold for the O and  notations, too.
For example, the recurrence for the number of additions A(n) made by the
divide-and-conquer sum-computation algorithm (see above) on inputs of size
n = 2k is
A(n) = 2A(n/2) + 1.
Thus, for this example, a = 2, b = 2, and d = 0; hence, since a > bd,
A(n) ∈(nlogb a) = (nlog2 2) = (n).
Note that we were able to ﬁnd the solution’s efﬁciency class without going through
the drudgery of solving the recurrence. But, of course, this approach can only es-
tablish a solution’s order of growth to within an unknown multiplicative constant,
whereas solving a recurrence equation with a speciﬁc initial condition yields an
exact answer (at least for n’s that are powers of b).
It is also worth pointing out that if a = 1, recurrence (5.1) covers decrease-
by-a-constant-factor algorithms discussed in the previous chapter. In fact, some
people consider such algorithms as binary search degenerate cases of divide-and-
conquer, where just one of two subproblems of half the size needs to be solved.
It is better not to do this and consider decrease-by-a-constant-factor and divide-
and-conquer as different design paradigms.

Divide-and-Conquer
5.1
Mergesort
Mergesort is a perfect example of a successful application of the divide-and-
conquer technique. It sorts a given array A[0..n −1] by dividing it into two halves
A[0..⌊n/2⌋−1] and A[⌊n/2⌋..n −1], sorting each of them recursively, and then
merging the two smaller sorted arrays into a single sorted one.
ALGORITHM
Mergesort(A[0..n −1])
//Sorts array A[0..n −1] by recursive mergesort
//Input: An array A[0..n −1] of orderable elements
//Output: Array A[0..n −1] sorted in nondecreasing order
if n > 1
copy A[0..⌊n/2⌋−1] to B[0..⌊n/2⌋−1]
copy A[⌊n/2⌋..n −1] to C[0..⌈n/2⌉−1]
Mergesort(B[0..⌊n/2⌋−1])
Mergesort(C[0..⌈n/2⌉−1])
Merge(B, C, A)
//see below
The merging of two sorted arrays can be done as follows. Two pointers (array
indices) are initialized to point to the ﬁrst elements of the arrays being merged.
The elements pointed to are compared, and the smaller of them is added to a new
array being constructed; after that, the index of the smaller element is incremented
to point to its immediate successor in the array it was copied from. This operation
is repeated until one of the two given arrays is exhausted, and then the remaining
elements of the other array are copied to the end of the new array.
ALGORITHM
Merge(B[0..p −1], C[0..q −1], A[0..p + q −1])
//Merges two sorted arrays into one sorted array
//Input: Arrays B[0..p −1] and C[0..q −1] both sorted
//Output: Sorted array A[0..p + q −1] of the elements of B and C
i ←0; j ←0; k ←0
while i < p and j < q do
if B[i] ≤C[j]
A[k] ←B[i]; i ←i + 1
else A[k] ←C[j]; j ←j + 1
k ←k + 1
if i = p
copy C[j..q −1] to A[k..p + q −1]
else copy B[i..p −1] to A[k..p + q −1]
The operation of the algorithm on the list 8, 3, 2, 9, 7, 1, 5, 4 is illustrated in

5.1
Mergesort
8  3  2  9  7  1  5  4
1  2  3  4  5  7  8  9
8  3  2  9
8  3
2  9
7  1
5  4
3  8
2  9
1  7
4  5
7  1  5  4
2  3  8  9
1  4  5  7
How efﬁcient is mergesort? Assuming for simplicity that n is a power of 2, the
recurrence relation for the number of key comparisons C(n) is
C(n) = 2C(n/2) + Cmerge(n)
for n > 1, C(1) = 0.
Let us analyze Cmerge(n), the number of key comparisons performed during the
merging stage. At each step, exactly one comparison is made, after which the total
number of elements in the two arrays still needing to be processed is reduced
by 1. In the worst case, neither of the two arrays becomes empty before the
other one contains just one element (e.g., smaller elements may come from the
alternating arrays). Therefore, for the worst case, Cmerge(n) = n −1, and we have
the recurrence
Cworst(n) = 2Cworst(n/2) + n −1
for n > 1, Cworst(1) = 0.
Hence, according to the Master Theorem, Cworst(n) ∈(n log n) (why?). In fact,
it is easy to ﬁnd the exact solution to the worst-case recurrence for n = 2k:
Cworst(n) = n log2 n −n + 1.

Divide-and-Conquer
The number of key comparisons made by mergesort in the worst case comes
very close to the theoretical minimum2 that any general comparison-based sorting
algorithm can have. For large n, the number of comparisons made by this algo-
rithm in the average case turns out to be about 0.25n less (see [Gon91, p. 173])
and hence is also in (n log n). A noteworthy advantage of mergesort over quick-
sort and heapsort—the two important advanced sorting algorithms to be discussed
later—is its stability (see Problem 7 in this section’s exercises). The principal short-
coming of mergesort is the linear amount of extra storage the algorithm requires.
Though merging can be done in-place, the resulting algorithm is quite complicated
and of theoretical interest only.
There are two main ideas leading to several variations of mergesort. First, the
algorithm can be implemented bottom up by merging pairs of the array’s elements,
then merging the sorted pairs, and so on. (If n is not a power of 2, only slight
bookkeeping complications arise.) This avoids the time and space overhead of
using a stack to handle recursive calls. Second, we can divide a list to be sorted
in more than two parts, sort each recursively, and then merge them together. This
scheme, which is particularly useful for sorting ﬁles residing on secondary memory
devices, is called multiway mergesort.
Exercises 5.1
1. a. Write pseudocode for a divide-and-conquer algorithm for ﬁnding the po-
sition of the largest element in an array of n numbers.
b. What will be your algorithm’s output for arrays with several elements of
the largest value?
c. Set up and solve a recurrence relation for the number of key comparisons
made by your algorithm.
d. How does this algorithm compare with the brute-force algorithm for this
problem?
2. a. Write pseudocode for a divide-and-conquer algorithm for ﬁnding values
of both the largest and smallest elements in an array of n numbers.
b. Set up and solve (for n = 2k) a recurrence relation for the number of key
comparisons made by your algorithm.
c. How does this algorithm compare with the brute-force algorithm for this
problem?
3. a. Write pseudocode for a divide-and-conquer algorithm for the exponenti-
ation problem of computing an where n is a positive integer.
b. Set up and solve a recurrence relation for the number of multiplications
made by this algorithm.
2.
As we shall see in Section 11.2, this theoretical minimum is ⌈log2 n!⌉≈⌈n log2 n −1.44n⌉.

Divide-and-Conquer
5.2
Quicksort
Quicksort is the other important sorting algorithm that is based on the divide-and-
conquer approach. Unlike mergesort, which divides its input elements according
to their position in the array, quicksort divides them according to their value.
We already encountered this idea of an array partition in Section 4.5, where we
discussed the selection problem. A partition is an arrangement of the array’s
elements so that all the elements to the left of some element A[s] are less than
or equal to A[s], and all the elements to the right of A[s] are greater than or equal
to it:
A[0] . . . A[s −1]

all are ≤A[s]
A[s] A[s + 1] . . . A[n −1]

all are ≥A[s]
Obviously, after a partition is achieved, A[s] will be in its ﬁnal position in the
sorted array, and we can continue sorting the two subarrays to the left and to the
right of A[s] independently (e.g., by the same method). Note the difference with
mergesort: there, the division of the problem into two subproblems is immediate
and the entire work happens in combining their solutions; here, the entire work
happens in the division stage, with no work required to combine the solutions to
the subproblems.
Here is pseudocode of quicksort: call Quicksort(A[0..n −1]) where
ALGORITHM
Quicksort(A[l..r])
//Sorts a subarray by quicksort
//Input: Subarray of array A[0..n −1], deﬁned by its left and right
//
indices l and r
//Output: Subarray A[l..r] sorted in nondecreasing order
if l < r
s ←Partition(A[l..r]) //s is a split position
Quicksort(A[l..s −1])
Quicksort(A[s + 1..r])
As a partition algorithm, we can certainly use the Lomuto partition discussed
in Section 4.5. Alternatively, we can partition A[0..n −1] and, more generally, its
subarray A[l..r](0 ≤l < r ≤n −1) by the more sophisticated method suggested by
C.A.R. Hoare, the prominent British computer scientist who invented quicksort.3
3.
C.A.R. Hoare, at age 26, invented his algorithm in 1960 while trying to sort words for a machine
translation project from Russian to English. Says Hoare, “My ﬁrst thought on how to do this was
bubblesort and, by an amazing stroke of luck, my second thought was Quicksort.” It is hard to disagree
with his overall assessment: “I have been very lucky. What a wonderful way to start a career in
Computing, by discovering a new sorting algorithm!” [Hoa96]. Twenty years later, he received the
Turing Award for “fundamental contributions to the deﬁnition and design of programming languages”;
in 1980, he was also knighted for services to education and computer science.

5.2
Quicksort
As before, we start by selecting a pivot—an element with respect to whose value
we are going to divide the subarray. There are several different strategies for
selecting a pivot; we will return to this issue when we analyze the algorithm’s
efﬁciency. For now, we use the simplest strategy of selecting the subarray’s ﬁrst
element: p = A[l].
Unlike the Lomuto algorithm, we will now scan the subarray from both ends,
comparing the subarray’s elements to the pivot. The left-to-right scan, denoted
below by index pointer i, starts with the second element. Since we want elements
smaller than the pivot to be in the left part of the subarray, this scan skips over
elements that are smaller than the pivot and stops upon encountering the ﬁrst
element greater than or equal to the pivot. The right-to-left scan, denoted below
by index pointer j, starts with the last element of the subarray. Since we want
elements larger than the pivot to be in the right part of the subarray, this scan
skips over elements that are larger than the pivot and stops on encountering the
ﬁrst element smaller than or equal to the pivot. (Why is it worth stopping the scans
after encountering an element equal to the pivot? Because doing this tends to yield
more even splits for arrays with a lot of duplicates, which makes the algorithm run
faster. For example, if we did otherwise for an array of n equal elements, we would
have gotten a split into subarrays of sizes n −1 and 0, reducing the problem size
just by 1 after scanning the entire array.)
After both scans stop, three situations may arise, depending on whether or not
the scanning indices have crossed. If scanning indices i and j have not crossed, i.e.,
i < j, we simply exchange A[i] and A[j] and resume the scans by incrementing i
and decrementing j, respectively:
j
i →
←
p
all are ≤p
all are ≥p
. . .
≤ p
≥ p
If the scanning indices have crossed over, i.e., i > j, we will have partitioned the
subarray after exchanging the pivot with A[j]:
j
i →
←
p
all are ≤p
all are ≥p
≥ p
≤ p
Finally, if the scanning indices stop while pointing to the same element, i.e., i = j,
the value they are pointing to must be equal to p (why?). Thus, we have the
subarray partitioned, with the split position s = i = j:
j = i →
←
p
all are ≤p
all are ≥p
= p
We can combine the last case with the case of crossed-over indices (i > j) by
exchanging the pivot with A[j] whenever i ≥j.
Here is pseudocode implementing this partitioning procedure.

Divide-and-Conquer
ALGORITHM
HoarePartition(A[l..r])
//Partitions a subarray by Hoare’s algorithm, using the ﬁrst element
//
as a pivot
//Input: Subarray of array A[0..n −1], deﬁned by its left and right
//
indices l and r (l < r)
//Output: Partition of A[l..r], with the split position returned as
//
this function’s value
p ←A[l]
i ←l; j ←r + 1
repeat
repeat i ←i + 1 until A[i] ≥p
repeat j ←j −1 until A[j] ≤p
swap(A[i], A[j])
until i ≥j
swap(A[i], A[j])
//undo last swap when i ≥j
swap(A[l], A[j])
return j
Note that index i can go out of the subarray’s bounds in this pseudocode.
Rather than checking for this possibility every time index i is incremented, we can
append to array A[0..n −1]a “sentinel” that would prevent index i from advancing
beyond position n. Note that the more sophisticated method of pivot selection
mentioned at the end of the section makes such a sentinel unnecessary.
An example of sorting an array by quicksort is given in Figure 5.3.
We start our discussion of quicksort’s efﬁciency by noting that the number
of key comparisons made before a partition is achieved is n + 1 if the scanning
indices cross over and n if they coincide (why?). If all the splits happen in the
middle of corresponding subarrays, we will have the best case. The number of key
comparisons in the best case satisﬁes the recurrence
Cbest(n) = 2Cbest(n/2) + n
for n > 1, Cbest(1) = 0.
According to the Master Theorem, Cbest(n) ∈(n log2 n); solving it exactly for
n = 2k yields Cbest(n) = n log2 n.
In the worst case, all the splits will be skewed to the extreme: one of the
two subarrays will be empty, and the size of the other will be just 1 less than the
size of the subarray being partitioned. This unfortunate situation will happen, in
particular, for increasing arrays, i.e., for inputs for which the problem is already
solved! Indeed, if A[0..n −1] is a strictly increasing array and we use A[0] as the
pivot, the left-to-right scan will stop on A[1] while the right-to-left scan will go all
the way to reach A[0], indicating the split at position 0:

5.2
Quicksort
0  1  2  3  4  5  6  7
i
i
i
i
i
i
i
i
i
i j
j
j
j
j
j
i
i
i
i
i
j
j
j
j
j
j
j
j
j
(b)
(a)
I=0, r=3
s=1
I=2, r=3
s=2
I=5, r=7
s=6
I=0, r=7
s=4
I=3, r=3
I=5, r=5
I=0, r=0
I=2, r=1
I=7, r=7
shown in bold. (b) Tree of recursive calls to Quicksort with input values l
and r of subarray bounds and split position s of a partition obtained.
A[0]
A[1]
A[n–1]
.  .  .
j
i →
←
So, after making n + 1 comparisons to get to this partition and exchanging the
pivot A[0] with itself, the algorithm will be left with the strictly increasing array
A[1..n −1]to sort. This sorting of strictly increasing arrays of diminishing sizes will

Divide-and-Conquer
continue until the last one A[n −2..n −1] has been processed. The total number
of key comparisons made will be equal to
Cworst(n) = (n + 1) + n + . . . + 3 = (n + 1)(n + 2)
−3 ∈(n2).
Thus, the question about the utility of quicksort comes down to its average-
case behavior. Let Cavg(n) be the average number of key comparisons made by
quicksort on a randomly ordered array of size n. A partition can happen in any
position s (0 ≤s ≤n −1) after n + 1comparisons are made to achieve the partition.
After the partition, the left and right subarrays will have s and n −1 −s elements,
respectively. Assuming that the partition split can happen in each position s with
the same probability 1/n, we get the following recurrence relation:
Cavg(n) = 1
n
n−1

s=0
[(n + 1) + Cavg(s) + Cavg(n −1 −s)]
for n > 1,
Cavg(0) = 0,
Cavg(1) = 0.
Its solution, which is much trickier than the worst- and best-case analyses, turns
out to be
Cavg(n) ≈2n ln n ≈1.39n log2 n.
Thus, on the average, quicksort makes only 39% more comparisons than in the
best case. Moreover, its innermost loop is so efﬁcient that it usually runs faster than
mergesort (and heapsort, another n log n algorithm that we discuss in Chapter 6)
on randomly ordered arrays of nontrivial sizes. This certainly justiﬁes the name
given to the algorithm by its inventor.
Because of quicksort’s importance, there have been persistent efforts over the
years to reﬁne the basic algorithm. Among several improvements discovered by
researchers are:
better pivot selection methods such as randomized quicksort that uses a
random element or the median-of-three method that uses the median of the
leftmost, rightmost, and the middle element of the array
switching to insertion sort on very small subarrays (between 5 and 15 elements
for most computer systems) or not sorting small subarrays at all and ﬁnishing
the algorithm with insertion sort applied to the entire nearly sorted array
modiﬁcations of the partitioning algorithm such as the three-way partition
into segments smaller than, equal to, and larger than the pivot (see Problem 9
in this section’s exercises)
According to Robert Sedgewick [Sed11, p. 296], the world’s leading expert on
quicksort, such improvements in combination can cut the running time of the
algorithm by 20%–30%.
Like any sorting algorithm, quicksort has weaknesses. It is not stable. It
requires a stack to store parameters of subarrays that are yet to be sorted. While

5.2
Quicksort
the size of this stack can be made to be in O(log n) by always sorting ﬁrst the
smaller of two subarrays obtained by partitioning, it is worse than the O(1) space
efﬁciency of heapsort. Although more sophisticated ways of choosing a pivot make
the quadratic running time of the worst case very unlikely, they do not eliminate
it completely. And even the performance on randomly ordered arrays is known
to be sensitive not only to implementation details of the algorithm but also to
both computer architecture and data type. Still, the January/February 2000 issue of
Computing in Science & Engineering,a joint publication of the American Institute
of Physics and the IEEE Computer Society, selected quicksort as one of the 10
algorithms “with the greatest inﬂuence on the development and practice of science
and engineering in the 20th century.”
Exercises 5.2
1. Apply quicksort to sort the list E, X, A, M, P, L, E in alphabetical order.
Draw the tree of the recursive calls made.
2. For the partitioning procedure outlined in this section:
a. Prove that if the scanning indices stop while pointing to the same element,
i.e., i = j, the value they are pointing to must be equal to p.
b. Prove that when the scanning indices stop, j cannot point to an element
more than one position to the left of the one pointed to by i.
3. Give an example showing that quicksort is not a stable sorting algorithm.
4. Give an example of an array of n elements for which the sentinel mentioned
in the text is actually needed. What should be its value? Also explain why a
single sentinel sufﬁces for any input.
5. For the version of quicksort given in this section:
a. Are arrays made up of all equal elements the worst-case input, the best-
case input, or neither?
b. Are strictly decreasing arrays the worst-case input, the best-case input, or
neither?
6. a. For quicksort with the median-of-three pivot selection, are strictly increas-
ing arrays the worst-case input, the best-case input, or neither?
b. Answer the same question for strictly decreasing arrays.
7. a. Estimate how many times faster quicksort will sort an array of one million
random numbers than insertion sort.
b. True or false: For every n > 1, there are n-element arrays that are sorted
faster by insertion sort than by quicksort?
8. Design an algorithm to rearrange elements of a given array of n real num-
bers so that all its negative elements precede all its positive elements. Your
algorithm should be both time efﬁcient and space efﬁcient.

Divide-and-Conquer
9. a. The Dutch national ﬂag problem is to rearrange an array of characters R,
W, and B (red, white, and blue are the colors of the Dutch national ﬂag) so
that all the R’s come ﬁrst, the W’s come next, and the B’s come last. [Dij76]
Design a linear in-place algorithm for this problem.
b. Explain how a solution to the Dutch national ﬂag problem can be used in
quicksort.
10. Implement quicksort in the language of your choice. Run your program on
a sample of inputs to verify the theoretical assertions about the algorithm’s
efﬁciency.
11. Nuts and bolts
You are given a collection of n bolts of different widths and
n corresponding nuts. You are allowed to try a nut and bolt together, from
which you can determine whether the nut is larger than the bolt, smaller than
the bolt, or matches the bolt exactly. However, there is no way to compare
two nuts together or two bolts together. The problem is to match each bolt
to its nut. Design an algorithm for this problem with average-case efﬁciency
in (n log n). [Raw91]
5.3
Binary Tree Traversals and Related Properties
In this section, we see how the divide-and-conquer technique can be applied to
binary trees. A binary tree T is deﬁned as a ﬁnite set of nodes that is either empty
or consists of a root and two disjoint binary trees TL and TR called, respectively, the
left and right subtree of the root. We usually think of a binary tree as a special case
of an ordered tree (Figure 5.4). (This standard interpretation was an alternative
deﬁnition of a binary tree in Section 1.4.)
Since the deﬁnition itself divides a binary tree into two smaller structures of
the same type, the left subtree and the right subtree, many problems about binary
trees can be solved by applying the divide-and-conquer technique. As an example,
let us consider a recursive algorithm for computing the height of a binary tree.
Recall that the height is deﬁned as the length of the longest path from the root to
a leaf. Hence, it can be computed as the maximum of the heights of the root’s left
Tleft
Tright

5.3
Binary Tree Traversals and Related Properties
and right subtrees plus 1. (We have to add 1 to account for the extra level of the
root.) Also note that it is convenient to deﬁne the height of the empty tree as −1.
Thus, we have the following recursive algorithm.
ALGORITHM
Height(T )
//Computes recursively the height of a binary tree
//Input: A binary tree T
//Output: The height of T
if T = ∅return −1
else return max{Height(Tlef t), Height(Tright)} + 1
We measure the problem’s instance size by the number of nodes n(T ) in a
given binary tree T . Obviously, the number of comparisons made to compute
the maximum of two numbers and the number of additions A(n(T )) made by the
algorithm are the same. We have the following recurrence relation for A(n(T )):
A(n(T )) = A(n(Tlef t)) + A(n(Tright)) + 1
for n(T ) > 0,
A(0) = 0.
Before we solve this recurrence (can you tell what its solution is?), let us note
that addition is not the most frequently executed operation of this algorithm. What
is? Checking—and this is very typical for binary tree algorithms—that the tree is
not empty. For example, for the empty tree, the comparison T = ∅is executed
once but there are no additions, and for a single-node tree, the comparison and
addition numbers are 3 and 1, respectively.
It helps in the analysis of tree algorithms to draw the tree’s extension by
replacing the empty subtrees by special nodes. The extra nodes (shown by little
squares in Figure 5.5) are called external; the original nodes (shown by little
circles) are called internal. By deﬁnition, the extension of the empty binary tree
is a single external node.
It is easy to see that the Height algorithm makes exactly one addition for every
internal node of the extended tree, and it makes one comparison to check whether
(b)
(a)
shown as circles; external nodes are shown as squares.

Divide-and-Conquer
the tree is empty for every internal and external node. Therefore, to ascertain the
algorithm’s efﬁciency, we need to know how many external nodes an extended
binary tree with n internal nodes can have. After checking Figure 5.5 and a few
similar examples, it is easy to hypothesize that the number of external nodes x is
always 1 more than the number of internal nodes n:
x = n + 1.
(5.2)
To prove this equality, consider the total number of nodes, both internal and
external. Since every node, except the root, is one of the two children of an internal
node, we have the equation
2n + 1 = x + n,
which immediately implies equality (5.2).
Note that equality (5.2) also applies to any nonempty full binary tree, in
which, by deﬁnition, every node has either zero or two children: for a full binary
tree, n and x denote the numbers of parental nodes and leaves, respectively.
Returning to algorithm Height, the number of comparisons to check whether
the tree is empty is
C(n) = n + x = 2n + 1,
and the number of additions is
A(n) = n.
The most important divide-and-conquer algorithms for binary trees are the
three classic traversals: preorder, inorder, and postorder. All three traversals visit
nodes of a binary tree recursively, i.e., by visiting the tree’s root and its left and
right subtrees. They differ only by the timing of the root’s visit:
In the preorder traversal, the root is visited before the left and right subtrees
are visited (in that order).
In the inorder traversal, the root is visited after visiting its left subtree but
before visiting the right subtree.
In the postorder traversal, the root is visited after visiting the left and right
subtrees (in that order).
These traversals are illustrated in Figure 5.6. Their pseudocodes are quite
straightforward, repeating the descriptions given above. (These traversals are also
a standard feature of data structures textbooks.) As to their efﬁciency analysis, it
is identical to the above analysis of the Height algorithm because a recursive call
is made for each node of an extended binary tree.
Finally, we should note that, obviously, not all questions about binary trees
require traversals of both left and right subtrees. For example, the search and insert
operations for a binary search tree require processing only one of the two subtrees.
Accordingly, we considered them in Section 4.5 not as applications of divide-and-
conquer but rather as examples of the variable-size-decrease technique.

5.3
Binary Tree Traversals and Related Properties
b
a
d
e
c
preorder:
inorder:
postorder:
a, b, d, g, e, c, f
d, g, b, e, a, f, c
g, d, e, b, f, c, a
g
f
Exercises 5.3
1. Design a divide-and-conquer algorithm for computing the number of levels in
a binary tree. (In particular, the algorithm must return 0 and 1 for the empty
and single-node trees, respectively.) What is the time efﬁciency class of your
algorithm?
2. The following algorithm seeks to compute the number of leaves in a binary
tree.
ALGORITHM
LeafCounter(T )
//Computes recursively the number of leaves in a binary tree
//Input: A binary tree T
//Output: The number of leaves in T
if T = ∅return 0
else return LeafCounter(Tlef t)+ LeafCounter(Tright)
Is this algorithm correct? If it is, prove it; if it is not, make an appropriate
correction.
3. Can you compute the height of a binary tree with the same asymptotic ef-
ﬁciency as the section’s divide-and-conquer algorithm but without using a
stack explicitly or implicitly? Of course, you may use a different algorithm
altogether.
4. Prove equality (5.2) by mathematical induction.
5. Traverse the following binary tree
a. in preorder.
b. in inorder.
c. in postorder.

Divide-and-Conquer
b
a
d
e
c
f
6. Write pseudocode for one of the classic traversal algorithms (preorder, in-
order, and postorder) for binary trees. Assuming that your algorithm is recur-
sive, ﬁnd the number of recursive calls made.
7. Which of the three classic traversal algorithms yields a sorted list if applied to
a binary search tree? Prove this property.
8. a. Draw a binary tree with 10 nodes labeled 0, 1, . . . , 9 in such a way that the
inorder and postorder traversals of the tree yield the following lists: 9, 3,
1, 0, 4, 2, 7, 6, 8, 5 (inorder) and 9, 1, 4, 0, 3, 6, 7, 5, 8, 2 (postorder).
b. Give an example of two permutations of the same n labels 0, 1, . . . , n −1
that cannot be inorder and postorder traversal lists of the same binary tree.
c. Design an algorithm that constructs a binary tree for which two given
lists of n labels 0, 1, . . . , n −1 are generated by the inorder and postorder
traversals of the tree. Your algorithm should also identify inputs for which
the problem has no solution.
9. The internal path length I of an extended binary tree is deﬁned as the sum
of the lengths of the paths—taken over all internal nodes—from the root to
each internal node. Similarly, the external path length E of an extended binary
tree is deﬁned as the sum of the lengths of the paths—taken over all external
nodes—from the root to each external node. Prove that E = I + 2n where n
is the number of internal nodes in the tree.
10. Write a program for computing the internal path length of an extended binary
tree. Use it to investigate empirically the average number of key comparisons
for searching in a randomly generated binary search tree.
11. Chocolate bar puzzle
Given an n × m chocolate bar, you need to break it
into nm 1 × 1 pieces. You can break a bar only in a straight line, and only one
bar can be broken at a time. Design an algorithm that solves the problem with
the minimum number of bar breaks. What is this minimum number? Justify
your answer by using properties of a binary tree.
5.4
Multiplication of Large Integers and
Strassen’s Matrix Multiplication
In this section, we examine two surprising algorithms for seemingly straightfor-
ward tasks: multiplying two integers and multiplying two square matrices. Both

5.4
Multiplication of Large Integers and Strassen’s Matrix Multiplication
achieve a better asymptotic efﬁciency by ingenious application of the divide-and-
conquer technique.
Multiplication of Large Integers
Some applications, notably modern cryptography, require manipulation of inte-
gers that are over 100 decimal digits long. Since such integers are too long to ﬁt in
a single word of a modern computer, they require special treatment. This practi-
cal need supports investigations of algorithms for efﬁcient manipulation of large
integers. In this section, we outline an interesting algorithm for multiplying such
numbers. Obviously, if we use the conventional pen-and-pencil algorithm for mul-
tiplying two n-digit integers, each of the n digits of the ﬁrst number is multiplied by
each of the n digits of the second number for the total of n2 digit multiplications.
(If one of the numbers has fewer digits than the other, we can pad the shorter
number with leading zeros to equalize their lengths.) Though it might appear that
it would be impossible to design an algorithm with fewer than n2 digit multiplica-
tions, this turns out not to be the case. The miracle of divide-and-conquer comes
to the rescue to accomplish this feat.
To demonstrate the basic idea of the algorithm, let us start with a case of
two-digit integers, say, 23 and 14. These numbers can be represented as follows:
23 = 2 . 101 + 3 . 100
and
14 = 1 . 101 + 4 . 100.
Now let us multiply them:
23 ∗14 = (2 . 101 + 3 . 100) ∗(1 . 101 + 4 . 100)
= (2 ∗1)102 + (2 ∗4 + 3 ∗1)101 + (3 ∗4)100.
The last formula yields the correct answer of 322, of course, but it uses the same
four digit multiplications as the pen-and-pencil algorithm. Fortunately, we can
compute the middle term with just one digit multiplication by taking advantage
of the products 2 ∗1 and 3 ∗4 that need to be computed anyway:
2 ∗4 + 3 ∗1 = (2 + 3) ∗(1 + 4) −2 ∗1 −3 ∗4.
Of course, there is nothing special about the numbers we just multiplied.
For any pair of two-digit numbers a = a1a0 and b = b1b0, their product c can be
computed by the formula
c = a ∗b = c2102 + c1101 + c0,
where
c2 = a1 ∗b1 is the product of their ﬁrst digits,
c0 = a0 ∗b0 is the product of their second digits,
c1 = (a1 + a0) ∗(b1 + b0) −(c2 + c0) is the product of the sum of the
a’s digits and the sum of the b’s digits minus the sum of c2 and c0.

Divide-and-Conquer
Now we apply this trick to multiplying two n-digit integers a and b where n is
a positive even number. Let us divide both numbers in the middle—after all, we
promised to take advantage of the divide-and-conquer technique. We denote the
ﬁrst half of the a’s digits by a1 and the second half by a0; for b, the notations are b1
and b0, respectively. In these notations, a = a1a0 implies that a = a110n/2 + a0 and
b = b1b0 implies that b = b110n/2 + b0. Therefore, taking advantage of the same
trick we used for two-digit numbers, we get
c = a ∗b = (a110n/2 + a0) ∗(b110n/2 + b0)
= (a1 ∗b1)10n + (a1 ∗b0 + a0 ∗b1)10n/2 + (a0 ∗b0)
= c210n + c110n/2 + c0,
where
c2 = a1 ∗b1 is the product of their ﬁrst halves,
c0 = a0 ∗b0 is the product of their second halves,
c1 = (a1 + a0) ∗(b1 + b0) −(c2 + c0) is the product of the sum of the
a’s halves and the sum of the b’s halves minus the sum of c2 and c0.
If n/2 is even, we can apply the same method for computing the products c2, c0,
and c1. Thus, if n is a power of 2, we have a recursive algorithm for computing the
product of two n-digit integers. In its pure form, the recursion is stopped when n
becomes 1. It can also be stopped when we deem n small enough to multiply the
numbers of that size directly.
How many digit multiplications does this algorithm make? Since multiplica-
tion of n-digit numbers requires three multiplications of n/2-digit numbers, the
recurrence for the number of multiplications M(n) is
M(n) = 3M(n/2)
for n > 1, M(1) = 1.
Solving it by backward substitutions for n = 2k yields
M(2k) = 3M(2k−1) = 3[3M(2k−2)] = 32M(2k−2)
= . . . = 3iM(2k−i) = . . . = 3kM(2k−k) = 3k.
Since k = log2 n,
M(n) = 3log2 n = nlog2 3 ≈n1.585.
(On the last step, we took advantage of the following property of logarithms:
alogb c = clogb a.)
But what about additions and subtractions? Have we not decreased the num-
ber of multiplications by requiring more of those operations? Let A(n) be the
number of digit additions and subtractions executed by the above algorithm in
multiplying two n-digit decimal integers. Besides 3A(n/2) of these operations
needed to compute the three products of n/2-digit numbers, the above formulas

5.4
Multiplication of Large Integers and Strassen’s Matrix Multiplication
require ﬁve additions and one subtraction. Hence, we have the recurrence
A(n) = 3A(n/2) + cn
for n > 1, A(1) = 1.
Applying the Master Theorem, which was stated in the beginning of the chapter,
we obtain A(n) ∈(nlog2 3), which means that the total number of additions and
subtractions have the same asymptotic order of growth as the number of multipli-
cations.
The asymptotic advantage of this algorithm notwithstanding, how practical is
it? The answer depends, of course, on the computer system and program quality
implementing the algorithm, which might explain the rather wide disparity of
reported results. On some machines, the divide-and-conquer algorithm has been
reported to outperform the conventional method on numbers only 8 decimal digits
long and to run more than twice faster with numbers over 300 decimal digits
long—the area of particular importance for modern cryptography. Whatever this
outperformance “crossover point” happens to be on a particular machine, it is
worth switching to the conventional algorithm after the multiplicands become
smaller than the crossover point. Finally, if you program in an object-oriented
language such as Java, C++, or Smalltalk, you should also be aware that these
languages have special classes for dealing with large integers.
Discovered by 23-year-old Russian mathematician Anatoly Karatsuba in
1960, the divide-and-conquer algorithm proved wrong the then-prevailing opinion
that the time efﬁciency of any integer multiplication algorithm must be in (n2).
The discovery encouraged researchers to look for even (asymptotically) faster
algorithms for this and other algebraic problems. We will see such an algorithm
in the next section.
Strassen’s Matrix Multiplication
Now that we have seen that the divide-and-conquer approach can reduce the
number of one-digit multiplications in multiplying two integers, we should not be
surprised that a similar feat can be accomplished for multiplying matrices. Such
an algorithm was published by V. Strassen in 1969 [Str69]. The principal insight
of the algorithm lies in the discovery that we can ﬁnd the product C of two 2 × 2
matrices A and B with just seven multiplications as opposed to the eight required
by the brute-force algorithm (see Example 3 in Section 2.3). This is accomplished
by using the following formulas:

c00
c01
c10
c11

=

a00
a01
a10
a11

∗

b00
b01
b10
b11

=

m1 + m4 −m5 + m7
m3 + m5
m2 + m4
m1 + m3 −m2 + m6

,
where

Divide-and-Conquer
m1 = (a00 + a11) ∗(b00 + b11),
m2 = (a10 + a11) ∗b00,
m3 = a00 ∗(b01 −b11),
m4 = a11 ∗(b10 −b00),
m5 = (a00 + a01) ∗b11,
m6 = (a10 −a00) ∗(b00 + b01),
m7 = (a01 −a11) ∗(b10 + b11).
Thus, to multiply two 2 × 2 matrices, Strassen’s algorithm makes seven multipli-
cations and 18 additions/subtractions, whereas the brute-force algorithm requires
eight multiplications and four additions. These numbers should not lead us to
multiplying 2 × 2 matrices by Strassen’s algorithm. Its importance stems from its
asymptotic superiority as matrix order n goes to inﬁnity.
Let A and B be two n × n matrices where n is a power of 2. (If n is not a power
of 2, matrices can be padded with rows and columns of zeros.) We can divide A,
B, and their product C into four n/2 × n/2 submatrices each as follows:
"C00
C01
C10
C11
#
=
"A00
A01
A10
A11
#
∗
"B00
B01
B10
B11
#
.
It is not difﬁcult to verify that one can treat these submatrices as numbers to
get the correct product. For example, C00 can be computed either as A00 ∗B00 +
A01 ∗B10 or as M1 + M4 −M5 + M7 where M1, M4, M5, and M7 are found by
Strassen’s formulas, with the numbers replaced by the corresponding submatrices.
If the seven products of n/2 × n/2 matrices are computed recursively by the same
method, we have Strassen’s algorithm for matrix multiplication.
Let us evaluate the asymptotic efﬁciency of this algorithm. If M(n) is the
number of multiplications made by Strassen’s algorithm in multiplying two n × n
matrices (where n is a power of 2), we get the following recurrence relation for it:
M(n) = 7M(n/2)
for n > 1, M(1) = 1.
Since n = 2k,
M(2k) = 7M(2k−1) = 7[7M(2k−2)] = 72M(2k−2) = . . .
= 7iM(2k−i) . . . = 7kM(2k−k) = 7k.
Since k = log2 n,
M(n) = 7log2 n = nlog2 7 ≈n2.807,
which is smaller than n3 required by the brute-force algorithm.
Since this savings in the number of multiplications was achieved at the expense
of making extra additions, we must check the number of additions A(n) made by
Strassen’s algorithm. To multiply two matrices of order n > 1, the algorithm needs
to multiply seven matrices of order n/2 and make 18 additions/subtractions of
matrices of size n/2; when n = 1, no additions are made since two numbers are

5.4
Multiplication of Large Integers and Strassen’s Matrix Multiplication
simply multiplied. These observations yield the following recurrence relation:
A(n) = 7A(n/2) + 18(n/2)2
for n > 1, A(1) = 0.
Though one can obtain a closed-form solution to this recurrence (see Problem 8
in this section’s exercises), here we simply establish the solution’s order of growth.
According to the Master Theorem, A(n) ∈(nlog2 7). In other words, the number
of additions has the same order of growth as the number of multiplications. This
puts Strassen’s algorithm in (nlog2 7), which is a better efﬁciency class than (n3)
of the brute-force method.
Since the time of Strassen’s discovery, several other algorithms for multiplying
two n × n matrices of real numbers in O(nα) time with progressively smaller
constants α have been invented. The fastest algorithm so far is that of Coopersmith
and Winograd [Coo87] with its efﬁciency in O(n2.376). The decreasing values of
the exponents have been obtained at the expense of the increasing complexity
of these algorithms. Because of large multiplicative constants, none of them is of
practical value. However, they are interesting from a theoretical point of view. On
one hand, they get closer and closer to the best theoretical lower bound known
for matrix multiplication, which is n2 multiplications, though the gap between this
bound and the best available algorithm remains unresolved. On the other hand,
matrix multiplication is known to be computationally equivalent to some other
important problems, such as solving systems of linear equations (discussed in the
next chapter).
Exercises 5.4
1. What are the smallest and largest numbers of digits the product of two decimal
n-digit integers can have?
2. Compute 2101 ∗1130 by applying the divide-and-conquer algorithm outlined
in the text.
3. a. Prove the equality alogb c = clogb a, which was used in Section 5.4.
b. Why is nlog2 3 better than 3log2 n as a closed-form formula for M(n)?
4. a. Why did we not include multiplications by 10n in the multiplication count
M(n) of the large-integer multiplication algorithm?
b. In addition to assuming that n is a power of 2, we made, for the sake of
simplicity, another, more subtle, assumption in setting up the recurrences
for M(n) and A(n), which is not always true (it does not change the ﬁnal
answers, however). What is this assumption?
5. How many one-digit additions are made by the pen-and-pencil algorithm in
multiplying two n-digit integers? You may disregard potential carries.
6. Verify the formulas underlying Strassen’s algorithm for multiplying 2 × 2
matrices.
