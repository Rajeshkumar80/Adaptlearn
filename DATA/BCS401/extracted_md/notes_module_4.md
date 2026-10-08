<!-- PROVENANCE: subject_code=BCS401 | subject_name=Analysis & Design of Algorithms | semester=4 | module=4 | source_type=MODULE_NOTES | source_file=module4.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS401 — Module 4

## Dynamic Programming

**Subject:** BCS401 (Analysis and Design of Algorithms)
**Module:** Module 4
**Content type:** module_notes
**Sources:** BCS401-module-4-textbook.txt

---

8.1
Three Basic Examples
invented independently of the discovery of dynamic programming and only later
came to be viewed as examples of this technique’s applications.) Numerous other
applications range from the optimal way of breaking text into lines (e.g., [Baa00])
to image resizing [Avi07] to a variety of applications to sophisticated engineering
problems (e.g., [Ber01]).
8.1
Three Basic Examples
The goal of this section is to introduce dynamic programming via three typical
examples.
EXAMPLE 1 Coin-row problem
There is a row of n coins whose values are some
positive integers c1, c2, . . . , cn, not necessarily distinct. The goal is to pick up the
maximum amount of money subject to the constraint that no two coins adjacent
in the initial row can be picked up.
Let F(n) be the maximum amount that can be picked up from the row of n
coins. To derive a recurrence for F(n), we partition all the allowed coin selections
into two groups: those that include the last coin and those without it. The largest
amount we can get from the ﬁrst group is equal to cn + F(n −2)—the value of the
nth coin plus the maximum amount we can pick up from the ﬁrst n −2 coins. The
maximum amount we can get from the second group is equal to F(n −1) by the
deﬁnition of F(n). Thus, we have the following recurrence subject to the obvious
initial conditions:
F(n) = max{cn + F(n −2), F(n −1)}
for n > 1,
F(0) = 0,
F(1) = c1.
(8.3)
We can compute F(n) by ﬁlling the one-row table left to right in the manner
similar to the way it was done for the nth Fibonacci number by Algorithm Fib(n)
in Section 2.5.
ALGORITHM
CoinRow(C[1..n])
//Applies formula (8.3) bottom up to ﬁnd the maximum amount of money
//that can be picked up from a coin row without picking two adjacent coins
//Input: Array C[1..n] of positive integers indicating the coin values
//Output: The maximum amount of money that can be picked up
F[0] ←0;
F[1] ←C[1]
for i ←2 to n do
F[i] ←max(C[i] + F[i −2], F[i −1])
return F[n]
The application of the algorithm to the coin row of denominations 5, 1, 2, 10,
6, 2 is shown in Figure 8.1. It yields the maximum amount of 17. It is worth pointing
MODULE-4

Dynamic Programming
index
C
F
F[0] = 0, F[1] = c1 = 5
F[2] = max{1 + 0, 5} = 5
F[3] = max{2 + 5, 5} = 7
F[4] = max{10 + 5, 7} = 15
F[5] = max{6 + 7, 15} = 15
F[6] = max{2 + 15, 15} = 17
index
C
F
index
C
F
index
C
F
index
C
F
index
C
F
5, 1, 2, 10, 6, 2.
out that, in fact, we also solved the problem for the ﬁrst i coins in the row given
for every 1 ≤i ≤6. For example, for i = 3, the maximum amount is F(3) = 7.
To ﬁnd the coins with the maximum total value found, we need to back-
trace the computations to see which of the two possibilities—cn + F(n −2) or
F(n −1)—produced the maxima in formula (8.3). In the last application of the
formula, it was the sum c6 + F(4), which means that the coin c6 = 2 is a part of an
optimal solution. Moving to computing F(4), the maximum was produced by the
sum c4 + F(2), which means that the coin c4 = 10 is a part of an optimal solution
as well. Finally, the maximum in computing F(2) was produced by F(1), implying
that the coin c2 is not the part of an optimal solution and the coin c1 = 5is. Thus, the
optimal solution is {c1, c4, c6}. To avoid repeating the same computations during
the backtracing, the information about which of the two terms in (8.3) was larger
can be recorded in an extra array when the values of F are computed.
Using the CoinRow to ﬁnd F(n), the largest amount of money that can be
picked up, as well as the coins composing an optimal set, clearly takes (n) time
and (n) space. This is by far superior to the alternatives: the straightforward top-

8.1
Three Basic Examples
down application of recurrence (8.3) and solving the problem by exhaustive search
(Problem 3 in this section’s exercises).
EXAMPLE 2 Change-making problem
Consider the general instance of the
following well-known problem. Give change for amount n using the minimum
number of coins of denominations d1 < d2 < . . . < dm. For the coin denominations
used in the United States, as for those used in most if not all other countries,
there is a very simple and efﬁcient algorithm discussed in the next chapter. Here,
we consider a dynamic programming algorithm for the general case, assuming
availability of unlimited quantities of coins for each of the m denominations
d1 < d2 < . . . < dm where d1 = 1.
Let F(n) be the minimum number of coins whose values add up to n; it is
convenient to deﬁne F(0) = 0. The amount n can only be obtained by adding one
coin of denomination dj to the amount n −dj for j = 1, 2, . . . , m such that n ≥dj.
Therefore, we can consider all such denominations and select the one minimizing
F(n −dj) + 1. Since 1 is a constant, we can, of course, ﬁnd the smallest F(n −dj)
ﬁrst and then add 1 to it. Hence, we have the following recurrence for F(n):
F(n) = min
j: n≥dj
{F(n −dj)} + 1
for n > 0,
F(0) = 0.
(8.4)
We can compute F(n) by ﬁlling a one-row table left to right in the manner similar
to the way it was done above for the coin-row problem, but computing a table
entry here requires ﬁnding the minimum of up to m numbers.
ALGORITHM
ChangeMaking(D[1..m], n)
//Applies dynamic programming to ﬁnd the minimum number of coins
//of denominations d1 < d2 < . . . < dm where d1 = 1 that add up to a
//given amount n
//Input: Positive integer n and array D[1..m] of increasing positive
//
integers indicating the coin denominations where D[1] = 1
//Output: The minimum number of coins that add up to n
F[0] ←0
for i ←1 to n do
temp ←∞; j ←1
while j ≤m and i ≥D[j] do
temp ←min(F[i −D[j]], temp)
j ←j + 1
F[i] ←temp + 1
return F[n]
The application of the algorithm to amount n = 6 and denominations 1, 3,
4 is shown in Figure 8.2. The answer it yields is two coins. The time and space
efﬁciencies of the algorithm are obviously O(nm) and (n), respectively.

Dynamic Programming
n
F
n
F
n
F
n
F
n
F
n
F
n
F
F[6] = min{F[6 – 1], F[6 – 3], F[6 – 4]} + 1 = 2
F[5] = min{F[5 – 1], F[5 – 3], F[5 – 4]} + 1 = 2
F[4] = min{F[4 – 1], F[4 – 3], F[4 – 4]} + 1 = 1
F[3] = min{F[3 – 1], F[3 – 3]} + 1 = 1
F[2] = min{F[2 – 1]} + 1 = 2
F[0] = 0
F[1] = min{F[1 – 1]} + 1 = 1
denominations 1, 3, and 4.
To ﬁnd the coins of an optimal solution, we need to backtrace the computa-
tions to see which of the denominations produced the minima in formula (8.4).
For the instance considered, the last application of the formula (for n = 6), the
minimum was produced by d2 = 3. The second minimum (for n = 6 −3) was also
produced for a coin of that denomination. Thus, the minimum-coin set for n = 6
is two 3’s.
EXAMPLE 3 Coin-collecting problem
Several coins are placed in cells of an
n × m board, no more than one coin per cell. A robot, located in the upper left cell
of the board, needs to collect as many of the coins as possible and bring them to
the bottom right cell. On each step, the robot can move either one cell to the right
or one cell down from its current location. When the robot visits a cell with a coin,
it always picks up that coin. Design an algorithm to ﬁnd the maximum number of
coins the robot can collect and a path it needs to follow to do this.
Let F(i, j) be the largest number of coins the robot can collect and bring to
the cell (i, j) in the ith row and jth column of the board. It can reach this cell
either from the adjacent cell (i −1, j) above it or from the adjacent cell (i, j −1)
to the left of it. The largest numbers of coins that can be brought to these cells
are F(i −1, j) and F(i, j −1), respectively. Of course, there are no adjacent cells

8.1
Three Basic Examples
above the cells in the ﬁrst row, and there are no adjacent cells to the left of the
cells in the ﬁrst column. For those cells, we assume that F(i −1, j) and F(i, j −1)
are equal to 0 for their nonexistent neighbors. Therefore, the largest number of
coins the robot can bring to cell (i, j) is the maximum of these two numbers plus
one possible coin at cell (i, j) itself. In other words, we have the following formula
for F(i, j):
F(i, j) = max{F(i −1, j), F(i, j −1)} + cij
for 1 ≤i ≤n, 1 ≤j ≤m
F(0, j) = 0 for 1 ≤j ≤m
and
F(i, 0) = 0 for 1 ≤i ≤n,
(8.5)
where cij = 1 if there is a coin in cell (i, j), and cij = 0 otherwise.
Using these formulas, we can ﬁll in the n × m table of F(i, j) values either row
by row or column by column, as is typical for dynamic programming algorithms
involving two-dimensional tables.
ALGORITHM
RobotCoinCollection(C[1..n, 1..m])
//Applies dynamic programming to compute the largest number of
//coins a robot can collect on an n × m board by starting at (1, 1)
//and moving right and down from upper left to down right corner
//Input: Matrix C[1..n, 1..m] whose elements are equal to 1 and 0
//for cells with and without a coin, respectively
//Output: Largest number of coins the robot can bring to cell (n, m)
F[1, 1] ←C[1, 1];
for j ←2 to m do F[1, j] ←F[1, j −1] + C[1, j]
for i ←2 to n do
F[i, 1] ←F[i −1, 1] + C[i, 1]
for j ←2 to m do
F[i, j] ←max(F[i −1, j], F[i, j −1]) + C[i, j]
return F[n, m]
The algorithm is illustrated in Figure 8.3b for the coin setup in Figure 8.3a.
Since computing the value of F(i, j) by formula (8.5) for each cell of the table takes
constant time, the time efﬁciency of the algorithm is (nm). Its space efﬁciency is,
obviously, also (nm).
Tracing the computations backward makes it possible to get an optimal path:
if F(i −1, j) > F(i, j −1), an optimal path to cell (i, j) must come down from
the adjacent cell above it; if F(i −1, j) < F(i, j −1), an optimal path to cell (i, j)
must come from the adjacent cell on the left; and if F(i −1, j) = F(i, j −1), it
can reach cell (i, j) from either direction. This yields two optimal paths for the
instance in Figure 8.3a, which are shown in Figure 8.3c. If ties are ignored, one
optimal path can be obtained in (n + m) time.

Dynamic Programming
(a)
(b)
(c)
paths to collect 5 coins, the maximum number of coins possible.
Exercises 8.1
1. What does dynamic programming have in common with divide-and-conquer?
What is a principal difference between them?
2. Solve the instance 5, 1, 2, 10, 6 of the coin-row problem.
3. a. Show that the time efﬁciency of solving the coin-row problem by straight-
forward application of recurrence (8.3) is exponential.
b. Show that the time efﬁciency of solving the coin-row problem by exhaustive
search is at least exponential.
4. Apply the dynamic programming algorithm to ﬁnd all the solutions to the
change-making problem for the denominations 1, 3, 5 and the amount
n = 9.

Dynamic Programming
9. Binomial coefﬁcient
Design an efﬁcient algorithm for computing the bino-
mial coefﬁcient C(n, k) that uses no multiplications. What are the time and
space efﬁciencies of your algorithm?
10. Longest path in a dag
a. Design an efﬁcient algorithm for ﬁnding the length of the longest path in a
dag. (This problem is important both as a prototype of many other dynamic
programming applications and in its own right because it determines the
minimal time needed for completing a project comprising precedence-
constrained tasks.)
b. Show how to reduce the coin-row problem discussed in this section to the
problem of ﬁnding a longest path in a dag.
11. Maximum square submatrix
Given an m × n boolean matrix B, ﬁnd its
largest square submatrix whose elements are all zeros. Design a dynamic
programming algorithm and indicate its time efﬁciency. (The algorithm may
be useful for, say, ﬁnding the largest free square area on a computer screen
or for selecting a construction site.)
12. World Series odds
Consider two teams, A and B, playing a series of games
until one of the teams wins n games. Assume that the probability of A winning
a game is the same for each game and equal to p, and the probability of
A losing a game is q = 1 −p. (Hence, there are no ties.) Let P(i, j) be the
probability of A winning the series if A needs i more games to win the series
and B needs j more games to win the series.
a. Set up a recurrence relation for P(i, j) that can be used by a dynamic
programming algorithm.
b. Find the probability of team A winning a seven-game series if the proba-
bility of it winning a game is 0.4.
c. Write pseudocode of the dynamic programming algorithm for solving this
problem and determine its time and space efﬁciencies.
8.2
The Knapsack Problem and Memory Functions
We start this section with designing a dynamic programming algorithm for the
knapsack problem: given n items of known weights w1, . . . , wn and values
v1, . . . , vn and a knapsack of capacity W, ﬁnd the most valuable subset of the
items that ﬁt into the knapsack. (This problem was introduced in Section 3.4,
where we discussed solving it by exhaustive search.) We assume here that all the
weights and the knapsack capacity are positive integers; the item values do not
have to be integers.
To design a dynamic programming algorithm, we need to derive a recurrence
relation that expresses a solution to an instance of the knapsack problem in terms

8.2
The Knapsack Problem and Memory Functions
of solutions to its smaller subinstances. Let us consider an instance deﬁned by the
ﬁrst i items, 1 ≤i ≤n, with weights w1, . . . , wi, values v1, . . . , vi, and knapsack
capacity j, 1 ≤j ≤W. Let F(i, j) be the value of an optimal solution to this
instance, i.e., the value of the most valuable subset of the ﬁrst i items that ﬁt into
the knapsack of capacity j. We can divide all the subsets of the ﬁrst i items that ﬁt
the knapsack of capacity j into two categories: those that do not include the ith
item and those that do. Note the following:
1.
Among the subsets that do not include the ith item, the value of an optimal
subset is, by deﬁnition, F(i −1, j).
2.
Among the subsets that do include the ith item (hence, j −wi ≥0), an optimal
subset is made up of this item and an optimal subset of the ﬁrst i −1 items
that ﬁts into the knapsack of capacity j −wi. The value of such an optimal
subset is vi + F(i −1, j −wi).
Thus, the value of an optimal solution among all feasible subsets of the ﬁrst i
items is the maximum of these two values. Of course, if the ith item does not ﬁt
into the knapsack, the value of an optimal subset selected from the ﬁrst i items
is the same as the value of an optimal subset selected from the ﬁrst i −1 items.
These observations lead to the following recurrence:
F(i, j) =
 max{F(i −1, j), vi + F(i −1, j −wi)}
if j −wi ≥0,
F(i −1, j)
if j −wi < 0.
(8.6)
It is convenient to deﬁne the initial conditions as follows:
F(0, j) = 0 for j ≥0
and
F(i, 0) = 0 for i ≥0.
(8.7)
Our goal is to ﬁnd F(n, W), the maximal value of a subset of the n given items
that ﬁt into the knapsack of capacity W, and an optimal subset itself.
i, j > 0, to compute the entry in the ith row and the jth column, F(i, j), we
compute the maximum of the entry in the previous row and the same column
and the sum of vi and the entry in the previous row and wi columns to the left.
The table can be ﬁlled either row by row or column by column.
goal
j –wi
wi, vi
W
j
i
i –1
n
F(i –1, j –wi)
F(i –1, j)
F(i, j)

Dynamic Programming
capacity j
i
w1 = 2, v1 = 12
w2 = 1, v2 = 10
w3 = 3, v3 = 20
w4 = 2, v4 = 15
programming algorithm.
EXAMPLE 1
Let us consider the instance given by the following data:
item
weight
value
$12
$10
capacity W = 5.
$20
$15
The dynamic programming table, ﬁlled by applying formulas (8.6) and (8.7),
is shown in Figure 8.5.
Thus, the maximal value is F(4, 5) = $37. We can ﬁnd the composition of an
optimal subset by backtracing the computations of this entry in the table. Since
F(4, 5) > F(3, 5), item 4 has to be included in an optimal solution along with an
optimal subset for ﬁlling 5 −2 = 3 remaining units of the knapsack capacity. The
value of the latter is F(3, 3). Since F(3, 3) = F(2, 3), item 3 need not be in an
optimal subset. Since F(2, 3) > F(1, 3), item 2 is a part of an optimal selection,
which leaves element F(1, 3 −1) to specify its remaining composition. Similarly,
since F(1, 2) > F(0, 2), item 1 is the ﬁnal part of the optimal solution {item 1,
item 2, item 4}.
The time efﬁciency and space efﬁciency of this algorithm are both in (nW).
The time needed to ﬁnd the composition of an optimal solution is in O(n). You
are asked to prove these assertions in the exercises.
Memory Functions
As we discussed at the beginning of this chapter and illustrated in subsequent
sections, dynamic programming deals with problems whose solutions satisfy a
recurrence relation with overlapping subproblems. The direct top-down approach
to ﬁnding a solution to such a recurrence leads to an algorithm that solves common
subproblems more than once and hence is very inefﬁcient (typically, exponential

8.2
The Knapsack Problem and Memory Functions
or worse). The classic dynamic programming approach, on the other hand, works
bottom up: it ﬁlls a table with solutions to all smaller subproblems, but each of
them is solved only once. An unsatisfying aspect of this approach is that solutions
to some of these smaller subproblems are often not necessary for getting a solution
to the problem given. Since this drawback is not present in the top-down approach,
it is natural to try to combine the strengths of the top-down and bottom-up
approaches. The goal is to get a method that solves only subproblems that are
necessary and does so only once. Such a method exists; it is based on using memory
functions.
This method solves a given problem in the top-down manner but, in addition,
maintains a table of the kind that would have been used by a bottom-up dynamic
programming algorithm. Initially, all the table’s entries are initialized with a spe-
cial “null” symbol to indicate that they have not yet been calculated. Thereafter,
whenever a new value needs to be calculated, the method checks the correspond-
ing entry in the table ﬁrst: if this entry is not “null,” it is simply retrieved from the
table; otherwise, it is computed by the recursive call whose result is then recorded
in the table.
The following algorithm implements this idea for the knapsack problem. After
initializing the table, the recursive function needs to be called with i = n (the
number of items) and j = W (the knapsack capacity).
ALGORITHM
MFKnapsack(i, j)
//Implements the memory function method for the knapsack problem
//Input: A nonnegative integer i indicating the number of the ﬁrst
//
items being considered and a nonnegative integer j indicating
//
the knapsack capacity
//Output: The value of an optimal feasible subset of the ﬁrst i items
//Note: Uses as global variables input arrays Weights[1..n], V alues[1..n],
//and table F[0..n, 0..W] whose entries are initialized with −1’s except for
//row 0 and column 0 initialized with 0’s
if F[i, j] < 0
if j < Weights[i]
value ←MFKnapsack(i −1, j)
else
value ←max(MFKnapsack(i −1, j),
Values[i] + MFKnapsack(i −1, j −Weights[i]))
F[i, j] ←value
return F[i, j]
EXAMPLE 2
Let us apply the memory function method to the instance consid-
ered in Example 1. The table in Figure 8.6 gives the results. Only 11 out of 20
nontrivial values (i.e., not those in row 0 or in column 0) have been computed.

Dynamic Programming
capacity j
i
w1 = 2, v1 = 12
w2 = 1, v2 = 10
—
—
w3 = 3, v3 = 20
—
—
—
w4 = 2, v4 = 15
—
—
—
—
function algorithm.
Just one nontrivial entry, V (1, 2), is retrieved rather than being recomputed. For
larger instances, the proportion of such entries can be signiﬁcantly larger.
In general, we cannot expect more than a constant-factor gain in using the
memory function method for the knapsack problem, because its time efﬁciency
class is the same as that of the bottom-up algorithm (why?). A more signiﬁcant
improvement can be expected for dynamic programming algorithms in which a
computation of one value takes more than constant time. You should also keep in
mind that a memory function algorithm may be less space-efﬁcient than a space-
efﬁcient version of a bottom-up algorithm.
Exercises 8.2
1. a. Apply the bottom-up dynamic programming algorithm to the following
instance of the knapsack problem:
item
weight
value
$25
$20
$15
capacity W = 6.
$40
$50
b. How many different optimal subsets does the instance of part (a) have?
c. In general, how can we use the table generated by the dynamic program-
ming algorithm to tell whether there is more than one optimal subset for
the knapsack problem’s instance?

Dynamic Programming
a. Give an example of three matrices for which the number of multiplications
in (A1 . A2) . A3 and A1 . (A2 . A3) differ at least by a factor of 1000.
b. How many different ways are there to compute the product of n matrices?
c. Design a dynamic programming algorithm for ﬁnding an optimal order of
multiplying n matrices.
8.4
Warshall’s and Floyd’s Algorithms
In this section, we look at two well-known algorithms: Warshall’s algorithm for
computing the transitive closure of a directed graph and Floyd’s algorithm for the
all-pairs shortest-paths problem. These algorithms are based on essentially the
same idea: exploit a relationship between a problem and its simpler rather than
smaller version. Warshall and Floyd published their algorithms without mention-
ing dynamic programming. Nevertheless, the algorithms certainly have a dynamic
programming ﬂavor and have come to be considered applications of this tech-
nique.
Warshall’s Algorithm
Recall that the adjacency matrix A = {aij} of a directed graph is the boolean matrix
that has 1 in its ith row and jth column if and only if there is a directed edge from
the ith vertex to the jth vertex. We may also be interested in a matrix containing
the information about the existence of directed paths of arbitrary lengths between
vertices of a given graph. Such a matrix, called the transitive closure of the digraph,
would allow us to determine in constant time whether the jth vertex is reachable
from the ith vertex.
Here are a few application examples. When a value in a spreadsheet cell
is changed, the spreadsheet software must know all the other cells affected by
the change. If the spreadsheet is modeled by a digraph whose vertices represent
the spreadsheet cells and edges indicate cell dependencies, the transitive closure
will provide such information. In software engineering, transitive closure can be
used for investigating data ﬂow and control ﬂow dependencies as well as for
inheritance testing of object-oriented software. In electronic engineering, it is used
for redundancy identiﬁcation and test generation for digital circuits.
DEFINITION
The transitive closure of a directed graph with n vertices can be
deﬁned as the n × n boolean matrix T = {tij}, in which the element in the ith row
and the jth column is 1 if there exists a nontrivial path (i.e., directed path of a
positive length) from the ith vertex to the jth vertex; otherwise, tij is 0.
An example of a digraph, its adjacency matrix, and its transitive closure is
given in Figure 8.11.
We can generate the transitive closure of a digraph with the help of depth-
ﬁrst search or breadth-ﬁrst search. Performing either traversal starting at the ith

8.4
Warshall’s and Floyd’s Algorithms
b
a
a
b
c
d
d
c
a
b
c
d
A =
a
b
c
d
a
b
c
d
T =
(a)
(b)
(c)
vertex gives the information about the vertices reachable from it and hence the
columns that contain 1’s in the ith row of the transitive closure. Thus, doing such
a traversal for every vertex as a starting point yields the transitive closure in its
entirety.
Since this method traverses the same digraph several times, we should hope
that a better algorithm can be found. Indeed, such an algorithm exists. It is called
Warshall’s algorithm after Stephen Warshall, who discovered it [War62]. It is
convenient to assume that the digraph’s vertices and hence the rows and columns
of the adjacency matrix are numbered from 1 to n. Warshall’s algorithm constructs
the transitive closure through a series of n × n boolean matrices:
R(0), . . . , R(k−1), R(k), . . . R(n).
(8.9)
Each of these matrices provides certain information about directed paths in the
digraph. Speciﬁcally, the element r(k)
ij
in the ith row and jth column of matrix
R(k) (i, j = 1, 2, . . . , n, k = 0, 1, . . . , n) is equal to 1 if and only if there exists a
directed path of a positive length from the ith vertex to the jth vertex with each
intermediate vertex, if any, numbered not higher than k. Thus, the series starts
with R(0), which does not allow any intermediate vertices in its paths; hence,
R(0) is nothing other than the adjacency matrix of the digraph. (Recall that the
adjacency matrix contains the information about one-edge paths, i.e., paths with
no intermediate vertices.) R(1) contains the information about paths that can use
the ﬁrst vertex as intermediate; thus, with more freedom, so to speak, it may
contain more 1’s than R(0). In general, each subsequent matrix in series (8.9) has
one more vertex to use as intermediate for its paths than its predecessor and hence
may, but does not have to, contain more 1’s. The last matrix in the series, R(n),
reﬂects paths that can use all n vertices of the digraph as intermediate and hence
is nothing other than the digraph’s transitive closure.
The central point of the algorithm is that we can compute all the elements of
each matrix R(k) from its immediate predecessor R(k−1) in series (8.9). Let r(k)
ij ,
the element in the ith row and jth column of matrix R(k), be equal to 1. This
means that there exists a path from the ith vertex vi to the jth vertex vj with each
intermediate vertex numbered not higher than k:
vi, a list of intermediate vertices each numbered not higher than k, vj. (8.10)

Dynamic Programming
k
R(k – 1)
j
k
j
k
i
=
R(k)
k
i
=
↑
→
Two situations regarding this path are possible. In the ﬁrst, the list of its inter-
mediate vertices does not contain the kth vertex. Then this path from vi to vj has
intermediate vertices numbered not higher than k −1, and therefore r(k−1)
ij
is equal
to 1 as well. The second possibility is that path (8.10) does contain the kth vertex vk
among the intermediate vertices. Without loss of generality, we may assume that
vk occurs only once in that list. (If it is not the case, we can create a new path from
vi to vj with this property by simply eliminating all the vertices between the ﬁrst
and last occurrences of vk in it.) With this caveat, path (8.10) can be rewritten as
follows:
vi, vertices numbered ≤k −1, vk, vertices numbered ≤k −1, vj.
The ﬁrst part of this representation means that there exists a path from vi to vk with
each intermediate vertex numbered not higher than k −1 (hence, r(k−1)
ik
= 1), and
the second part means that there exists a path from vk to vj with each intermediate
vertex numbered not higher than k −1 (hence, r(k−1)
kj
= 1).
What we have just proved is that if r(k)
ij = 1, then either r(k−1)
ij
= 1 or both
r(k−1)
ik
= 1 and r(k−1)
kj
= 1. It is easy to see that the converse of this assertion is also
true. Thus, we have the following formula for generating the elements of matrix
R(k) from the elements of matrix R(k−1):
r(k)
ij = r(k−1)
ij
or
(
r(k−1)
ik
and r(k−1)
kj
)
.
(8.11)
Formula (8.11) is at the heart of Warshall’s algorithm. This formula implies
the following rule for generating elements of matrix R(k) from elements of matrix
R(k−1), which is particularly convenient for applying Warshall’s algorithm by hand:
If an element rij is 1 in R(k−1), it remains 1 in R(k).
If an element rij is 0 in R(k−1), it has to be changed to 1 in R(k) if and only if
the element in its row i and column k and the element in its column j and row
k are both 1’s in R(k−1). This rule is illustrated in Figure 8.12.
As an example, the application of Warshall’s algorithm to the digraph in

8.4
Warshall’s and Floyd’s Algorithms
R(0) =
a
b
c
d
a
b
c
d
R(1) =
a
b
c
d
a
b
c
d
R(2) =
a
b
c
d
a
b
c
d
R(3) =
a
b
c
d
a
b
c
d
R(4) =
a
b
c
d
a
b
c
d
1’s reflect the existence of paths
with no intermediate vertices
(R(0) is just the adjacency matrix); 
boxed row and column are used for getting R(1).
1’s reflect the existence of paths
with intermediate vertices numbered
not higher than 1, i.e., just vertex a
(note a new path from d to b);
boxed row and column are used for getting R(2).
1’s reflect the existence of paths
with intermediate vertices numbered
not higher than 2, i.e., a and b
(note two new paths); 
boxed row and column are used for getting R(3).
1’s reflect the existence of paths
with intermediate vertices numbered
not higher than 3, i.e., a, b, and c
(no new paths); 
boxed row and column are used for getting R(4).
1’s reflect the existence of paths
with intermediate vertices numbered
not higher than 4, i.e., a, b, c, and d
(note five new paths).
b
a
d
c
bold.
Here is pseudocode of Warshall’s algorithm.
ALGORITHM
Warshall(A[1..n, 1..n])
//Implements Warshall’s algorithm for computing the transitive closure
//Input: The adjacency matrix A of a digraph with n vertices
//Output: The transitive closure of the digraph
R(0) ←A
for k ←1 to n do
for i ←1 to n do
for j ←1 to n do
R(k)[i, j] ←R(k−1)[i, j] or (R(k−1)[i, k] and R(k−1)[k, j])
return R(n)
Several observations need to be made about Warshall’s algorithm. First, it is
remarkably succinct, is it not? Still, its time efﬁciency is only (n3). In fact, for
sparse graphs represented by their adjacency lists, the traversal-based algorithm

Dynamic Programming
b
a
a
b
c
d
d
c
a
b
c
d
W =
∞
∞
∞
∞
∞
∞
∞
a
b
c
d
a
b
c
d
D =
(a)
(b)
(c)
mentioned at the beginning of this section has a better asymptotic efﬁciency
than Warshall’s algorithm (why?). We can speed up the above implementation
of Warshall’s algorithm for some inputs by restructuring its innermost loop (see
Problem 4 in this section’s exercises). Another way to make the algorithm run
faster is to treat matrix rows as bit strings and employ the bitwise or operation
available in most modern computer languages.
As to the space efﬁciency of Warshall’s algorithm, the situation is similar to
that of computing a Fibonacci number and some other dynamic programming
algorithms. Although we used separate matrices for recording intermediate results
of the algorithm, this is, in fact, unnecessary. Problem 3 in this section’s exercises
asks you to ﬁnd a way of avoiding this wasteful use of the computer memory.
Finally, we shall see below how the underlying idea of Warshall’s algorithm can
be applied to the more general problem of ﬁnding lengths of shortest paths in
weighted graphs.
Floyd’s Algorithm for the All-Pairs Shortest-Paths Problem
Givenaweightedconnectedgraph(undirectedordirected), the all-pairs shortest-
paths problem asks to ﬁnd the distances—i.e., the lengths of the shortest paths—
from each vertex to all other vertices. This is one of several variations of the
problem involving shortest paths in graphs. Because of its important applications
to communications, transportation networks, and operations research, it has been
thoroughly studied over the years. Among recent applications of the all-pairs
shortest-path problem is precomputing distances for motion planning in computer
games.
It is convenient to record the lengths of shortest paths in an n × n matrix D
called the distance matrix: the element dij in the ith row and the jth column of
this matrix indicates the length of the shortest path from the ith vertex to the jth
vertex. For an example, see Figure 8.14.
We can generate the distance matrix with an algorithm that is very similar to
Warshall’s algorithm. It is called Floyd’s algorithm after its co-inventor Robert W.
Floyd.1 It is applicable to both undirected and directed weighted graphs provided
1.
Floyd explicitly referenced Warshall’s paper in presenting his algorithm [Flo62]. Three years earlier,
Bernard Roy published essentially the same algorithm in the proceedings of the French Academy of
Sciences [Roy59].

8.4
Warshall’s and Floyd’s Algorithms
that they do not contain a cycle of a negative length. (The distance between any two
vertices in such a cycle can be made arbitrarily small by repeating the cycle enough
times.) The algorithm can be enhanced to ﬁnd not only the lengths of the shortest
paths for all vertex pairs but also the shortest paths themselves (Problem 10 in this
section’s exercises).
Floyd’s algorithm computes the distance matrix of a weighted graph with n
vertices through a series of n × n matrices:
D(0), . . . , D(k−1), D(k), . . . , D(n).
(8.12)
Each of these matrices contains the lengths of shortest paths with certain con-
straints on the paths considered for the matrix in question. Speciﬁcally, the el-
ement d(k)
ij
in the ith row and the jth column of matrix D(k) (i, j = 1, 2, . . . , n,
k = 0, 1, . . . , n) is equal to the length of the shortest path among all paths from
the ith vertex to the jth vertex with each intermediate vertex, if any, numbered
not higher than k. In particular, the series starts with D(0), which does not allow
any intermediate vertices in its paths; hence, D(0) is simply the weight matrix of the
graph. The last matrix in the series, D(n), contains the lengths of the shortest paths
among all paths that can use all n vertices as intermediate and hence is nothing
other than the distance matrix being sought.
As in Warshall’s algorithm, we can compute all the elements of each matrix
D(k) from its immediate predecessor D(k−1) in series (8.12). Let d(k)
ij be the element
in the ith row and the jth column of matrix D(k). This means that d(k)
ij is equal to
the length of the shortest path among all paths from the ith vertex vi to the jth
vertex vj with their intermediate vertices numbered not higher than k:
vi, a list of intermediate vertices each numbered not higher than k, vj. (8.13)
We can partition all such paths into two disjoint subsets: those that do not use the
kth vertex vk as intermediate and those that do. Since the paths of the ﬁrst subset
have their intermediate vertices numbered not higher than k −1, the shortest of
them is, by deﬁnition of our matrices, of length d(k−1)
ij
.
What is the length of the shortest path in the second subset? If the graph does
not contain a cycle of a negative length, we can limit our attention only to the
paths in the second subset that use vertex vk as their intermediate vertex exactly
once (because visiting vk more than once can only increase the path’s length). All
such paths have the following form:
vi, vertices numbered ≤k −1, vk, vertices numbered ≤k −1, vj.
In other words, each of the paths is made up of a path from vi to vk with each
intermediate vertex numbered not higher than k −1 and a path from vk to vj
with each intermediate vertex numbered not higher than k −1. The situation is
depicted symbolically in Figure 8.15.
Since the length of the shortest path from vi to vk among the paths that use
intermediate vertices numbered not higher than k −1 is equal to d(k−1)
ik
and the
length of the shortest path from vk to vj among the paths that use intermediate

Dynamic Programming
vi
vj
vk
dkj
(k –1)
dij
(k –1)
dik
(k –1)
vertices numbered not higher than k −1is equal to d(k−1)
kj
, the length of the shortest
path among the paths that use the kth vertex is equal to d(k−1)
ik
+ d(k−1)
kj
. Taking into
account the lengths of the shortest paths in both subsets leads to the following
recurrence:
d(k)
ij = min{d(k−1)
ij
, d(k−1)
ik
+ d(k−1)
kj
}
for k ≥1, d(0)
ij = wij.
(8.14)
To put it another way, the element in row i and column j of the current distance
matrix D(k−1) is replaced by the sum of the elements in the same row i and the
column k and in the same column j and the row k if and only if the latter sum is
smaller than its current value.
The application of Floyd’s algorithm to the graph in Figure 8.14 is illustrated
in Figure 8.16.
Here is pseudocode of Floyd’s algorithm. It takes advantage of the fact that
the next matrix in sequence (8.12) can be written over its predecessor.
ALGORITHM
Floyd(W[1..n, 1..n])
//Implements Floyd’s algorithm for the all-pairs shortest-paths problem
//Input: The weight matrix W of a graph with no negative-length cycle
//Output: The distance matrix of the shortest paths’ lengths
D ←W //is not necessary if W can be overwritten
for k ←1 to n do
for i ←1 to n do
for j ←1 to n do
D[i, j] ←min{D[i, j], D[i, k] + D[k, j]}
return D
Obviously, the time efﬁciency of Floyd’s algorithm is cubic—as is the time
efﬁciency of Warshall’s algorithm. In the next chapter, we examine Dijkstra’s
algorithm—another method for ﬁnding shortest paths.

8.4
Warshall’s and Floyd’s Algorithms
D(0) =
a
b
c
d
a
b
c
d
∞
∞
∞
∞
∞
∞
∞
D(1) =
a
b
c
d
a
b
c
d
∞
∞
∞
∞
∞
D(2) =
a
b
c
d
a
b
c
d
∞
∞ 
∞
∞
D(3) =
a
b
c
d
a
b
c
d
D(4) =
a
b
c
d
a
b
c
d
Lengths of the shortest paths
with no intermediate vertices
(D(0) is simply the weight matrix).
Lengths of the shortest paths
with intermediate vertices numbered
not higher than 1, i.e., just a
(note two new shortest paths from 
b to c and from d to c ).
Lengths of the shortest paths
with intermediate vertices numbered
not higher than 2, i.e., a and b
(note a new shortest path from c to a).
Lengths of the shortest paths
with intermediate vertices numbered
not higher than 3, i.e., a, b, and c
(note four new shortest paths from a to b,
from a to d, from b to d, and from d to b).
Lengths of the shortest paths
with intermediate vertices numbered
not higher than 4, i.e., a, b, c, and d
(note a new shortest path from c to a).
b
a
d
c
are shown in bold.
Exercises 8.4
1. Apply Warshall’s algorithm to ﬁnd the transitive closure of the digraph de-
ﬁned by the following adjacency matrix:
⎡
⎢⎢⎣
⎤
⎥⎥⎦
2. a. Prove that the time efﬁciency of Warshall’s algorithm is cubic.
b. Explain why the time efﬁciency class of Warshall’s algorithm is inferior to
that of the traversal-based algorithm for sparse graphs represented by their
adjacency lists.

Greedy Technique
b
a
d
c
b
a
d
c
b
a
d
c
b
a
d
c
graph
w(T1) = 6
w(T2) = 9
w(T3) = 8
9.1
Prim’s Algorithm
The following problem arises naturally in many practical situations: given n points,
connect them in the cheapest possible way so that there will be a path between ev-
ery pair of points. It has direct applications to the design of all kinds of networks—
including communication, computer, transportation, and electrical—by providing
the cheapest way to achieve connectivity. It identiﬁes clusters of points in data sets.
It has been used for classiﬁcation purposes in archeology, biology, sociology, and
other sciences. It is also helpful for constructing approximate solutions to more
difﬁcult problems such the traveling salesman problem (see Section 12.3).
We can represent the points given by vertices of a graph, possible connections
by the graph’s edges, and the connection costs by the edge weights. Then the
question can be posed as the minimum spanning tree problem, deﬁned formally
as follows.
DEFINITION
A spanning tree of an undirected connected graph is its connected
acyclic subgraph (i.e., a tree) that contains all the vertices of the graph. If such a
graph has weights assigned to its edges, a minimum spanning tree is its spanning
tree of the smallest weight, where the weight of a tree is deﬁned as the sum of the
weights on all its edges. The minimum spanning tree problem is the problem of
ﬁnding a minimum spanning tree for a given weighted connected graph.
If we were to try constructing a minimum spanning tree by exhaustive search,
we would face two serious obstacles. First, the number of spanning trees grows
exponentially with the graph size (at least for dense graphs). Second, generating
all spanning trees for a given graph is not easy; in fact, it is more difﬁcult than
ﬁnding a minimum spanning tree for a weighted graph by using one of several
efﬁcient algorithms available for this problem. In this section, we outline Prim’s
algorithm, which goes back to at least 19571 [Pri57].
1.
Robert Prim rediscovered the algorithm published 27 years earlier by the Czech mathematician
Vojtˇech Jarn´ık in a Czech journal.

9.1
Prim’s Algorithm
Prim’s algorithm constructs a minimum spanning tree through a sequence
of expanding subtrees. The initial subtree in such a sequence consists of a single
vertex selected arbitrarily from the set V of the graph’s vertices. On each iteration,
the algorithm expands the current tree in the greedy manner by simply attaching to
it the nearest vertex not in that tree. (By the nearest vertex, we mean a vertex not
in the tree connected to a vertex in the tree by an edge of the smallest weight. Ties
can be broken arbitrarily.) The algorithm stops after all the graph’s vertices have
been included in the tree being constructed. Since the algorithm expands a tree
by exactly one vertex on each of its iterations, the total number of such iterations
is n −1, where n is the number of vertices in the graph. The tree generated by the
algorithm is obtained as the set of edges used for the tree expansions.
Here is pseudocode of this algorithm.
ALGORITHM
Prim(G)
//Prim’s algorithm for constructing a minimum spanning tree
//Input: A weighted connected graph G = ⟨V, E⟩
//Output: ET , the set of edges composing a minimum spanning tree of G
VT ←{v0}
//the set of tree vertices can be initialized with any vertex
ET ←∅
for i ←1 to |V | −1 do
ﬁnd a minimum-weight edge e∗= (v∗, u∗) among all the edges (v, u)
such that v is in VT and u is in V −VT
VT ←VT ∪{u∗}
ET ←ET ∪{e∗}
return ET
The nature of Prim’s algorithm makes it necessary to provide each vertex not
in the current tree with the information about the shortest edge connecting the
vertex to a tree vertex. We can provide such information by attaching two labels
to a vertex: the name of the nearest tree vertex and the length (the weight) of the
corresponding edge. Vertices that are not adjacent to any of the tree vertices can
be given the ∞label indicating their “inﬁnite” distance to the tree vertices and
a null label for the name of the nearest tree vertex. (Alternatively, we can split
the vertices that are not in the tree into two sets, the “fringe” and the “unseen.”
The fringe contains only the vertices that are not in the tree but are adjacent to at
least one tree vertex. These are the candidates from which the next tree vertex
is selected. The unseen vertices are all the other vertices of the graph, called
“unseen” because they are yet to be affected by the algorithm.) With such labels,
ﬁnding the next vertex to be added to the current tree T =
*
VT , ET
+
becomes a
simple task of ﬁnding a vertex with the smallest distance label in the set V −VT .
Ties can be broken arbitrarily.
Afterwehaveidentiﬁeda vertex u∗tobeaddedtothetree, weneedtoperform
two operations:

Greedy Technique
Move u∗from the set V −VT to the set of tree vertices VT .
For each remaining vertex u in V −VT that is connected to u∗by a shorter
edge than the u’s current distance label, update its labels by u∗and the weight
of the edge between u∗and u, respectively.2
Does Prim’s algorithm always yield a minimum spanning tree? The answer
to this question is yes. Let us prove by induction that each of the subtrees Ti,
i = 0, . . . , n −1, generated by Prim’s algorithm is a part (i.e., a subgraph) of some
minimum spanning tree. (This immediately implies, of course, that the last tree in
the sequence, Tn−1, is a minimum spanning tree itself because it contains all n
vertices of the graph.) The basis of the induction is trivial, since T0 consists of a
single vertex and hence must be a part of any minimum spanning tree. For the
inductive step, let us assume that Ti−1 is part of some minimum spanning tree T .
We need to prove that Ti, generated from Ti−1 by Prim’s algorithm, is also a part
of a minimum spanning tree. We prove this by contradiction by assuming that no
minimum spanning tree of the graph can contain Ti. Let ei = (v, u) be the minimum
weight edge from a vertex in Ti−1 to a vertex not in Ti−1 used by Prim’s algorithm to
expand Ti−1 to Ti. By our assumption, ei cannot belong to any minimum spanning
tree, including T . Therefore, if we add ei to T , a cycle must be formed (Figure 9.4).
In addition to edge ei = (v, u), this cycle must contain another edge (v′, u′)
connecting a vertex v′ ∈Ti−1 to a vertex u′ that is not in Ti−1. (It is possible that
v′ coincides with v or u′ coincides with u but not both.) If we now delete the edge
(v′, u′) from this cycle, we will obtain another spanning tree of the entire graph
whose weight is less than or equal to the weight of T since the weight of ei is less
than or equal to the weight of (v′, u′). Hence, this spanning tree is a minimum
spanning tree, which contradicts the assumption that no minimum spanning tree
contains Ti. This completes the correctness proof of Prim’s algorithm.
How efﬁcient is Prim’s algorithm? The answer depends on the data structures
chosen for the graph itself and for the priority queue of the set V −VT whose
vertex priorities are the distances to the nearest tree vertices. (You may want
to take another look at the example in Figure 9.3 to see that the set V −VT
indeed operates as a priority queue.) In particular, if a graph is represented by
its weight matrix and the priority queue is implemented as an unordered array,
the algorithm’s running time will be in (|V |2). Indeed, on each of the |V | −1
iterations, the array implementing the priority queue is traversed to ﬁnd and delete
the minimum and then to update, if necessary, the priorities of the remaining
vertices.
We can also implement the priority queue as a min-heap. A min-heap is a
mirror image of the heap structure discussed in Section 6.4. (In fact, it can be im-
plemented by constructing a heap after negating all the key values given.) Namely,
a min-heap is a complete binary tree in which every element is less than or equal
2.
If the implementation with the fringe/unseen split is pursued, all the unseen vertices adjacent to u∗
must also be moved to the fringe.

b
c
a
d
f
e
Tree vertices
Remaining vertices
Illustration
a(−, −)
b(a, 3) c(−, ∞) d(−, ∞)
e(a, 6) f(a, 5)
b
c
a
d
f
e
b(a, 3)
c(b, 1) d(−, ∞) e(a, 6)
f(b, 4)
b
c
a
d
f
e
c(b, 1)
d(c, 6) e(a, 6) f(b, 4)
b
c
a
d
f
e
f(b, 4)
d(f, 5) e(f, 2)
b
c
a
d
f
e
e(f, 2)
d(f, 5)
b
c
a
d
f
e
d(f, 5)
middle column indicate the nearest tree vertex and edge weight; selected
vertices and edges are shown in bold.

Greedy Technique
v ′
u ′
u
v
Ti –1
ei
to its children. All the principal properties of heaps remain valid for min-heaps,
with some obvious modiﬁcations. For example, the root of a min-heap contains the
smallest rather than the largest element. Deletion of the smallest element from
and insertion of a new element into a min-heap of size n are O(log n) operations,
and so is the operation of changing an element’s priority (see Problem 15 in this
section’s exercises).
If a graph is represented by its adjacency lists and the priority queue is im-
plemented as a min-heap, the running time of the algorithm is in O(|E| log |V |).
This is because the algorithm performs |V | −1 deletions of the smallest element
and makes |E| veriﬁcations and, possibly, changes of an element’s priority in a
min-heap of size not exceeding |V |. Each of these operations, as noted earlier, is
a O(log |V |) operation. Hence, the running time of this implementation of Prim’s
algorithm is in
(|V | −1 + |E|)O(log |V |) = O(|E| log |V |)
because, in a connected graph, |V | −1 ≤|E|.
In the next section, you will ﬁnd another greedy algorithm for the minimum
spanning tree problem, which is “greedy” in a manner different from that of Prim’s
algorithm.
Exercises 9.1
1. Write pseudocode of the greedy algorithm for the change-making problem,
with an amount n and coin denominations d1 > d2 > . . . > dm as its input. What
is the time efﬁciency class of your algorithm?
2. Design a greedy algorithm for the assignment problem (see Section 3.4). Does
your greedy algorithm always yield an optimal solution?
3. Job scheduling
Consider the problem of scheduling n jobs of known dura-
tions t1, t2, . . . , tn for execution by a single processor. The jobs can be executed
in any order, one job at a time. You want to ﬁnd a schedule that minimizes

9.2
Kruskal’s Algorithm
9.2
Kruskal’s Algorithm
In the previous section, we considered the greedy algorithm that “grows” a mini-
mum spanning tree through a greedy inclusion of the nearest vertex to the vertices
already in the tree. Remarkably, there is another greedy algorithm for the mini-
mum spanning tree problem that also always yields an optimal solution. It is named
Kruskal’s algorithm after Joseph Kruskal, who discovered this algorithm when
he was a second-year graduate student [Kru56]. Kruskal’s algorithm looks at a
minimum spanning tree of a weighted connected graph G = ⟨V, E⟩as an acyclic
subgraph with |V | −1 edges for which the sum of the edge weights is the smallest.
(It is not difﬁcult to prove that such a subgraph must be a tree.) Consequently,
the algorithm constructs a minimum spanning tree as an expanding sequence of
subgraphs that are always acyclic but are not necessarily connected on the inter-
mediate stages of the algorithm.
The algorithm begins by sorting the graph’s edges in nondecreasing order of
their weights. Then, starting with the empty subgraph, it scans this sorted list,
adding the next edge on the list to the current subgraph if such an inclusion does
not create a cycle and simply skipping the edge otherwise.
ALGORITHM
Kruskal(G)
//Kruskal’s algorithm for constructing a minimum spanning tree
//Input: A weighted connected graph G = ⟨V, E⟩
//Output: ET , the set of edges composing a minimum spanning tree of G
sort E in nondecreasing order of the edge weights w(ei1) ≤. . . ≤w(ei|E|)
ET ←∅;
ecounter ←0
//initialize the set of tree edges and its size
k ←0
//initialize the number of processed edges
while ecounter < |V | −1 do
k ←k + 1
if ET ∪{eik} is acyclic
ET ←ET ∪{eik};
ecounter ←ecounter + 1
return ET
The correctness of Kruskal’s algorithm can be proved by repeating the essen-
tial steps of the proof of Prim’s algorithm given in the previous section. The fact
that ET is actually a tree in Prim’s algorithm but generally just an acyclic subgraph
in Kruskal’s algorithm turns out to be an obstacle that can be overcome.
graph we used for illustrating Prim’s algorithm in Section 9.1. As you trace the
algorithm’s operations, note the disconnectedness of some of the intermediate
subgraphs.
Applying Prim’s and Kruskal’s algorithms to the same small graph by hand
may create the impression that the latter is simpler than the former. This impres-
sion is wrong because, on each of its iterations, Kruskal’s algorithm has to check
whether the addition of the next edge to the edges already selected would create a

b
c
a
d
f
e
Tree edges
Sorted list of edges
Illustration
bc
ef
ab
bf
cf
af
df
ae
cd
de
b
c
a
d
f
e
bc
bc
ef
ab
bf
cf
af
df
ae
cd
de
b
c
a
d
f
e
ef
bc
ef
ab
bf
cf
af
df
ae
cd
de
b
c
a
d
f
e
ab
bc
ef
ab
bf
cf
af
df
ae
cd
de
b
c
a
d
f
e
bf
bc
ef
ab
bf
cf
af
df
ae
cd
de
b
c
a
d
f
e
df

9.2
Kruskal’s Algorithm
u
v
(a)
u
v
(b)
cycle. It is not difﬁcult to see that a new cycle is created if and only if the new edge
connects two vertices already connected by a path, i.e., if and only if the two ver-
tices belong to the same connected component (Figure 9.6). Note also that each
connected component of a subgraph generated by Kruskal’s algorithm is a tree
because it has no cycles.
In view of these observations, it is convenient to use a slightly different
interpretation of Kruskal’s algorithm. We can consider the algorithm’s operations
as a progression through a series of forests containing all the vertices of a given
graph and some of its edges. The initial forest consists of |V | trivial trees, each
comprising a single vertex of the graph. The ﬁnal forest consists of a single tree,
which is a minimum spanning tree of the graph. On each iteration, the algorithm
takes the next edge (u, v) from the sorted list of the graph’s edges, ﬁnds the trees
containing the vertices u and v, and, if these trees are not the same, unites them
in a larger tree by adding the edge (u, v).
Fortunately, there are efﬁcient algorithms for doing so, including the crucial
check for whether two vertices belong to the same tree. They are called union-
ﬁnd algorithms. We discuss them in the following subsection. With an efﬁcient
union-ﬁnd algorithm, the running time of Kruskal’s algorithm will be dominated
by the time needed for sorting the edge weights of a given graph. Hence, with an
efﬁcient sorting algorithm, the time efﬁciency of Kruskal’s algorithm will be in
O(|E| log |E|).
Disjoint Subsets and Union-Find Algorithms
Kruskal’s algorithm is one of a number of applications that require a dynamic
partition of some n element set S into a collection of disjoint subsets S1, S2, . . . , Sk.
After being initialized as a collection of n one-element subsets, each containing
a different element of S, the collection is subjected to a sequence of intermixed
union and ﬁnd operations. (Note that the number of union operations in any such
sequence must be bounded above by n −1because each union increases a subset’s
size at least by 1 and there are only n elements in the entire set S.) Thus, we are

Greedy Technique
dealing here with an abstract data type of a collection of disjoint subsets of a ﬁnite
set with the following operations:
makeset(x) creates a one-element set {x}. It is assumed that this operation can
be applied to each of the elements of set S only once.
ﬁnd(x) returns a subset containing x.
union(x, y) constructs the union of the disjoint subsets Sx and Sy containing
x and y, respectively, and adds it to the collection to replace Sx and Sy, which
are deleted from it.
For example, let S = {1, 2, 3, 4, 5, 6}. Then makeset(i) creates the set {i} and
applying this operation six times initializes the structure to the collection of six
singleton sets:
{1}, {2}, {3}, {4}, {5}, {6}.
Performing union(1, 4) and union(5, 2) yields
{1, 4}, {5, 2}, {3}, {6},
and, if followed by union(4, 5) and then by union(3, 6), we end up with the disjoint
subsets
{1, 4, 5, 2}, {3, 6}.
Most implementations of this abstract data type use one element from each of
the disjoint subsets in a collection as that subset’s representative. Some implemen-
tations do not impose any speciﬁc constraints on such a representative; others do
so by requiring, say, the smallest element of each subset to be used as the subset’s
representative. Also, it is usually assumed that set elements are (or can be mapped
into) integers.
There are two principal alternatives for implementing this data structure. The
ﬁrst one, called the quick ﬁnd, optimizes the time efﬁciency of the ﬁnd operation;
the second one, called the quick union, optimizes the union operation.
The quick ﬁnd uses an array indexed by the elements of the underlying set
S; the array’s values indicate the representatives of the subsets containing those
elements. Each subset is implemented as a linked list whose header contains the
pointers to the ﬁrst and last elements of the list along with the number of elements
in the list (see Figure 9.7 for an example).
Under this scheme, the implementation of makeset(x) requires assigning the
corresponding element in the representative array to x and initializing the corre-
sponding linked list to a single node with the x value. The time efﬁciency of this
operation is obviously in (1), and hence the initialization of n singleton subsets is
in (n). The efﬁciency of ﬁnd(x) is also in (1): all we need to do is to retrieve the
x’s representative in the representative array. Executing union(x, y) takes longer.
A straightforward solution would simply append the y’s list to the end of the x’s
list, update the information about their representative for all the elements in the

9.2
Kruskal’s Algorithm
subset representatives
element index
representative
list 1
list 2
list 3
list 4
list 5
list 6
size
last first
null
null
null null
null
null
null null
null null
ﬁnd after performing union(1, 4), union(5, 2), union(4, 5), and union(3, 6).
The lists of size 0 are considered deleted from the collection.
y list, and then delete the y’s list from the collection. It is easy to verify, however,
that with this algorithm the sequence of union operations
union(2, 1), union(3, 2), . . . , union(i + 1, i), . . . , union(n, n −1)
runs in (n2) time, which is slow compared with several known alternatives.
A simple way to improve the overall efﬁciency of a sequence of union oper-
ations is to always append the shorter of the two lists to the longer one, with ties
broken arbitrarily. Of course, the size of each list is assumed to be available by, say,
storing the number of elements in the list’s header. This modiﬁcation is called the

Greedy Technique
(a)
(b)
union. (b) Result of union(5, 6).
union by size. Though it does not improve the worst-case efﬁciency of a single ap-
plication of the union operation (it is still in (n)), the worst-case running time of
any legitimate sequence of union-by-size operations turns out to be in O(n log n).3
Here is a proof of this assertion. Let ai be an element of set S whose disjoint
subsets we manipulate, and let Ai be the number of times ai’s representative is
updated in a sequence of union-by-size operations. How large can Ai get if set S
has n elements? Each time ai’s representative is updated, ai must be in a smaller
subset involved in computing the union whose size will be at least twice as large as
the size of the subset containing ai. Hence, when ai’s representative is updated for
the ﬁrst time, the resulting set will have at least two elements; when it is updated
for the second time, the resulting set will have at least four elements; and, in
general, if it is updated Ai times, the resulting set will have at least 2Ai elements.
Since the entire set S has n elements, 2Ai ≤n and hence Ai ≤log2 n. Therefore,
the total number of possible updates of the representatives for all n elements in S
will not exceed n log2 n.
Thus, for union by size, the time efﬁciency of a sequence of at most n −1
unions and m ﬁnds is in O(n log n + m).
The quick union—the second principal alternative for implementing disjoint
subsets—represents each subset by a rooted tree. The nodes of the tree contain
the subset’s elements (one per node), with the root’s element considered the
subset’s representative; the tree’s edges are directed from children to their parents
(Figure 9.8). In addition, a mapping of the set elements to their tree nodes—
implemented, say, as an array of pointers—is maintained. This mapping is not
shown in Figure 9.8 for the sake of simplicity.
For this implementation, makeset(x) requires the creation of a single-node
tree, which is a (1) operation; hence, the initialization of n singleton subsets is in
(n). A union(x, y) is implemented by attaching the root of the y’s tree to the root
of the x’s tree (and deleting the y’s tree from the collection by making the pointer
to its root null). The time efﬁciency of this operation is clearly (1). A ﬁnd(x) is
3.
This is a speciﬁc example of the usefulness of the amortized efﬁciency we mentioned back in Chapter 2.

9.2
Kruskal’s Algorithm
T4
x
T4
x
T3
T2
T1
T3
T2
T1
performed by following the pointer chain from the node containing x to the tree’s
root whose element is returned as the subset’s representative. Accordingly, the
time efﬁciency of a single ﬁnd operation is in O(n) because a tree representing a
subset can degenerate into a linked list with n nodes.
This time bound can be improved. The straightforward way for doing so is to
always perform a union operation by attaching a smaller tree to the root of a larger
one, with ties broken arbitrarily. The size of a tree can be measured either by the
number of nodes (this version is called union by size) or by its height (this version
is called union by rank). Of course, these options require storing, for each node of
the tree, either the number of node descendants or the height of the subtree rooted
at that node, respectively. One can easily prove that in either case the height of the
tree will be logarithmic, making it possible to execute each ﬁnd in O(log n) time.
Thus, for quick union, the time efﬁciency of a sequence of at most n −1 unions
and m ﬁnds is in O(n + m log n).
In fact, an even better efﬁciency can be obtained by combining either vari-
ety of quick union with path compression. This modiﬁcation makes every node
encountered during the execution of a ﬁnd operation point to the tree’s root (Fig-
ure 9.9). According to a quite sophisticated analysis that goes beyond the level
of this book (see [Tar84]), this and similar techniques improve the efﬁciency of a
sequence of at most n −1 unions and m ﬁnds to only slightly worse than linear.
Exercises 9.2
1. Apply Kruskal’s algorithm to ﬁnd a minimum spanning tree of the following
graphs.
a.
b
c
a
e
d

9.3
Dijkstra’s Algorithm
11. Steiner tree
Four villages are located at the vertices of a unit square in the
Euclidean plane. You are asked to connect them by the shortest network of
roads so that there is a path between every pair of the villages along those
roads. Find such a network.
12. Write a program generating a random maze based on
a. Prim’s algorithm.
b. Kruskal’s algorithm.
9.3
Dijkstra’s Algorithm
In this section, we consider the single-source shortest-paths problem: for a given
vertex called the source in a weighted connected graph, ﬁnd shortest paths to all
its other vertices. It is important to stress that we are not interested here in a
single shortest path that starts at the source and visits all the other vertices. This
would have been a much more difﬁcult problem (actually, a version of the traveling
salesman problem introduced in Section 3.4 and discussed again later in the book).
The single-source shortest-paths problem asks for a family of paths, each leading
from the source to a different vertex in the graph, though some paths may, of
course, have edges in common.
A variety of practical applications of the shortest-paths problem have made
the problem a very popular object of study. The obvious but probably most widely
used applications are transportation planning and packet routing in communi-
cation networks, including the Internet. Multitudes of less obvious applications
include ﬁnding shortest paths in social networks, speech recognition, document
formatting, robotics, compilers, and airline crew scheduling. In the world of enter-
tainment, one can mention pathﬁnding in video games and ﬁnding best solutions
to puzzles using their state-space graphs (see Section 6.6 for a very simple example
of the latter).
There are several well-known algorithms for ﬁnding shortest paths, including
Floyd’s algorithm for the more general all-pairs shortest-paths problem discussed
in Chapter 8. Here, we consider the best-known algorithm for the single-source
shortest-paths problem, called Dijkstra’s algorithm.4 This algorithm is applicable
to undirected and directed graphs with nonnegative weights only. Since in most ap-
plications this condition is satisﬁed, the limitation has not impaired the popularity
of Dijkstra’s algorithm.
Dijkstra’s algorithm ﬁnds the shortest paths to a graph’s vertices in order of
their distance from a given source. First, it ﬁnds the shortest path from the source
4.
Edsger W. Dijkstra (1930–2002), a noted Dutch pioneer of the science and industry of computing,
discovered this algorithm in the mid-1950s. Dijkstra said about his algorithm: “This was the ﬁrst graph
problem I ever posed myself and solved. The amazing thing was that I didn’t publish it. It was not
amazing at the time. At the time, algorithms were hardly considered a scientiﬁc topic.”

Greedy Technique
u*
v*
v0
found is shown in bold. The next nearest to the source v0 vertex, u∗, is
selected by comparing the lengths of the subtree’s paths increased by
the distances to vertices adjacent to the subtree’s vertices.
to a vertex nearest to it, then to a second nearest, and so on. In general, before its
ith iteration commences, the algorithm has already identiﬁed the shortest paths to
i −1 other vertices nearest to the source. These vertices, the source, and the edges
of the shortest paths leading to them from the source form a subtree Ti of the given
graph (Figure 9.10). Since all the edge weights are nonnegative, the next vertex
nearest to the source can be found among the vertices adjacent to the vertices of
Ti. The set of vertices adjacent to the vertices in Ti can be referred to as “fringe
vertices”; they are the candidates from which Dijkstra’s algorithm selects the next
vertex nearest to the source. (Actually, all the other vertices can be treated as
fringe vertices connected to tree vertices by edges of inﬁnitely large weights.) To
identify the ith nearest vertex, the algorithm computes, for every fringe vertex u,
the sum of the distance to the nearest tree vertex v (given by the weight of the
edge (v, u)) and the length dv of the shortest path from the source to v (previously
determined by the algorithm) and then selects the vertex with the smallest such
sum. The fact that it sufﬁces to compare the lengths of such special paths is the
central insight of Dijkstra’s algorithm.
To facilitate the algorithm’s operations, we label each vertex with two labels.
The numeric label d indicates the length of the shortest path from the source to
this vertex found by the algorithm so far; when a vertex is added to the tree, d
indicates the length of the shortest path from the source to that vertex. The other
label indicates the name of the next-to-last vertex on such a path, i.e., the parent of
the vertex in the tree being constructed. (It can be left unspeciﬁed for the source
s and vertices that are adjacent to none of the current tree vertices.) With such
labeling, ﬁnding the next nearest vertex u∗becomes a simple task of ﬁnding a
fringe vertex with the smallest d value. Ties can be broken arbitrarily.
Afterwehaveidentiﬁedavertex u∗tobeaddedtothetree, weneedtoperform
two operations:

9.3
Dijkstra’s Algorithm
Move u∗from the fringe to the set of tree vertices.
For each remaining fringe vertex u that is connected to u∗by an edge of
weight w(u∗, u) such that du∗+ w(u∗, u) < du, update the labels of u by u∗
and du∗+ w(u∗, u), respectively.
graph.
The labeling and mechanics of Dijkstra’s algorithm are quite similar to those
used by Prim’s algorithm (see Section 9.1). Both of them construct an expanding
subtree of vertices by selecting the next vertex from the priority queue of the
remaining vertices. It is important not to mix them up, however. They solve
different problems and therefore operate with priorities computed in a different
manner: Dijkstra’s algorithm compares path lengths and therefore must add edge
weights, while Prim’s algorithm compares the edge weights as given.
Now we can give pseudocode of Dijkstra’s algorithm. It is spelled out—
in more detail than Prim’s algorithm was in Section 9.1—in terms of explicit
operations on two sets of labeled vertices: the set VT of vertices for which a shortest
path has already been found and the priority queue Q of the fringe vertices. (Note
that in the following pseudocode, VT contains a given source vertex and the fringe
contains the vertices adjacent to it after iteration 0 is completed.)
ALGORITHM
Dijkstra(G, s)
//Dijkstra’s algorithm for single-source shortest paths
//Input: A weighted connected graph G = ⟨V, E⟩with nonnegative weights
//
and its vertex s
//Output: The length dv of a shortest path from s to v
//
and its penultimate vertex pv for every vertex v in V
Initialize(Q)
//initialize priority queue to empty
for every vertex v in V
dv ←∞;
pv ←null
Insert(Q, v, dv)
//initialize vertex priority in the priority queue
ds ←0;
Decrease(Q, s, ds)
//update priority of s with ds
VT ←∅
for i ←0 to |V | −1 do
u∗←DeleteMin(Q)
//delete the minimum priority element
VT ←VT ∪{u∗}
for every vertex u in V −VT that is adjacent to u∗do
if du∗+ w(u∗, u) < du
du ←du∗+ w(u∗, u);
pu ←u∗
Decrease(Q, u, du)
The time efﬁciency of Dijkstra’s algorithm depends on the data structures used
for implementing the priority queue and for representing an input graph itself.
For the reasons explained in the analysis of Prim’s algorithm in Section 9.1, it is

Greedy Technique
b
c
a
e
d
Tree vertices
Remaining vertices
Illustration
a(−, 0)
b(a, 3) c(−, ∞) d(a, 7) e(−, ∞)
b
c
a
e
d
b(a, 3)
c(b, 3 + 4) d(b, 3 + 2) e(−, ∞)
b
c
a
e
d
d(b, 5)
c(b, 7) e(d, 5 + 4)
b
c
a
e
d
c(b, 7)
e(d, 9)
b
c
a
e
d
e(d, 9)
The shortest paths (identiﬁed by following nonnumeric labels backward from a
destination vertex in the left column to the source) and their lengths (given by
numeric labels of the tree vertices) are as follows:
from a to b :
a −b
of length 3
from a to d :
a −b −d
of length 5
from a to c :
a −b −c
of length 7
from a to e :
a −b −d −e
of length 9
bold.

9.3
Dijkstra’s Algorithm
in (|V |2) for graphs represented by their weight matrix and the priority queue
implemented as an unordered array. For graphs represented by their adjacency
lists and the priority queue implemented as a min-heap, it is in O(|E| log |V |). A
still better upper bound can be achieved for both Prim’s and Dijkstra’s algorithms
if the priority queue is implemented using a sophisticated data structure called
the Fibonacci heap (e.g., [Cor09]). However, its complexity and a considerable
overhead make such an improvement primarily of theoretical value.
Exercises 9.3
1. Explain what adjustments if any need to be made in Dijkstra’s algorithm
and/or in an underlying graph to solve the following problems.
a. Solve the single-source shortest-paths problem for directed weighted
graphs.
b. Find a shortest path between two given vertices of a weighted graph or
digraph. (This variation is called the single-pair shortest-path problem.)
c. Find the shortest paths to a given vertex from each other vertex of a
weighted graph or digraph. (This variation is called the single-destination
shortest-paths problem.)
d. Solve the single-source shortest-paths problem in a graph with nonnegative
numbers assigned to its vertices (and the length of a path deﬁned as the sum
of the vertex numbers on the path).
2. Solve the following instances of the single-source shortest-paths problem with
vertex a as the source:
a.
b
c
a
e
d
b.
a
d
h
c
g
k
b
e
i
l
f
j

Greedy Technique
3. Give a counterexample that shows that Dijkstra’s algorithm may not work for
a weighted connected graph with negative weights.
4. Let T be a tree constructed by Dijkstra’s algorithm in the process of solving
the single-source shortest-paths problem for a weighted connected graph G.
a. True or false: T is a spanning tree of G?
b. True or false: T is a minimum spanning tree of G?
5. Write pseudocode for a simpler version of Dijkstra’s algorithm that ﬁnds
only the distances (i.e., the lengths of shortest paths but not shortest paths
themselves) from a given vertex to all other vertices of a graph represented
by its weight matrix.
6. Prove the correctness of Dijkstra’s algorithm for graphs with positive weights.
7. Design a linear-time algorithm for solving the single-source shortest-paths
problem for dags (directed acyclic graphs) represented by their adjacency lists.
8. Explain how the minimum-sum descent problem (Problem 8 in Exercises 8.1)
can be solved by Dijkstra’s algorithm.
9. Shortest-path modeling
Assume you have a model of a weighted connected
graph made of balls (representing the vertices) connected by strings of appro-
priate lengths (representing the edges).
a. Describe how you can solve the single-pair shortest-path problem with this
model.
b. Describe how you can solve the single-source shortest-paths problem with
this model.
10. Revisit the exercise from Section 1.3 about determining the best route for a
subway passenger to take from one designated station to another in a well-
developed subway system like those in Washington, DC, or London, UK.
Write a program for this task.
9.4
Huffman Trees and Codes
Suppose we have to encode a text that comprises symbols from some n-symbol
alphabet by assigning to each of the text’s symbols some sequence of bits called
the codeword. For example, we can use a ﬁxed-length encoding that assigns to
each symbol a bit string of the same length m (m ≥log2 n). This is exactly what
the standard ASCII code does. One way of getting a coding scheme that yields a
shorter bit string on the average is based on the old idea of assigning shorter code-
words to more frequent symbols and longer codewords to less frequent symbols.
This idea was used, in particular, in the telegraph code invented in the mid-19th
century by Samuel Morse. In that code, frequent letters such as e (.) and a (.−)
are assigned short sequences of dots and dashes while infrequent letters such as q
(−−.−) and z (−−..) have longer ones.

9.4
Huffman Trees and Codes
Variable-length encoding, which assigns codewords of different lengths to
different symbols, introduces a problem that ﬁxed-length encoding does not have.
Namely, how can we tell how many bits of an encoded text represent the ﬁrst (or,
more generally, the ith) symbol? To avoid this complication, we can limit ourselves
to the so-called preﬁx-free (or simply preﬁx) codes. In a preﬁx code, no codeword
is a preﬁx of a codeword of another symbol. Hence, with such an encoding, we
can simply scan a bit string until we get the ﬁrst group of bits that is a codeword
for some symbol, replace these bits by this symbol, and repeat this operation until
the bit string’s end is reached.
If we want to create a binary preﬁx code for some alphabet, it is natural to
associate the alphabet’s symbols with leaves of a binary tree in which all the left
edges are labeled by 0 and all the right edges are labeled by 1. The codeword of a
symbol can then be obtained by recording the labels on the simple path from the
root to the symbol’s leaf. Since there is no simple path to a leaf that continues to
another leaf, no codeword can be a preﬁx of another codeword; hence, any such
tree yields a preﬁx code.
Among the many trees that can be constructed in this manner for a given
alphabet with known frequencies of the symbol occurrences, how can we construct
a tree that would assign shorter bit strings to high-frequency symbols and longer
ones to low-frequency symbols? It can be done by the following greedy algorithm,
invented by David Huffman while he was a graduate student at MIT [Huf52].
Huffman’s algorithm
Step 1 Initialize n one-node trees and label them with the symbols of the
alphabet given. Record the frequency of each symbol in its tree’s root
to indicate the tree’s weight. (More generally, the weight of a tree will
be equal to the sum of the frequencies in the tree’s leaves.)
Step 2 Repeat the following operation until a single tree is obtained. Find
two trees with the smallest weight (ties can be broken arbitrarily, but
see Problem 2 in this section’s exercises). Make them the left and right
subtree of a new tree and record the sum of their weights in the root
of the new tree as its weight.
A tree constructed by the above algorithm is called a Huffman tree. It
deﬁnes—in the manner described above—a Huffman code.
EXAMPLE
Consider the ﬁve-symbol alphabet {A, B, C, D, _} with the following
occurrence frequencies in a text made up of these symbols:
symbol
A
B
C
D
_
frequency
0.35
0.1
0.2
0.2
0.15
The Huffman tree construction for this input is shown in Figure 9.12.

Greedy Technique
0.1
B
0.15
_
0.1
0.15
_
0.2
0.25
C
0.2
D
0.35
A
0.35
A
0.35
A
0.35
A
0.2
C
D
0.2
0.1
B
0.15
_
0.25
0.2
C
D
0.2
0.4
0.2
C
D
0.2
0.4
0.6
0.2
C
D
0.2
0.4
0.1
B
B
0.15
_
0.25
0.35
A
0.1
B
0.15
_
0.25
0.6
1.0
The resulting codewords are as follows:
symbol
A
B
C
D
_
frequency
0.35
0.1
0.2
0.2
0.15
codeword

9.4
Huffman Trees and Codes
Hence, DAD is encoded as 011101, and 10011011011101 is decoded as BAD_AD.
With the occurrence frequencies given and the codeword lengths obtained,
the average number of bits per symbol in this code is
2 . 0.35 + 3 . 0.1 + 2 . 0.2 + 2 . 0.2 + 3 . 0.15 = 2.25.
Had we used a ﬁxed-length encoding for the same alphabet, we would have to
use at least 3 bits per each symbol. Thus, for this toy example, Huffman’s code
achieves the compression ratio—a standard measure of a compression algorithm’s
effectiveness—of (3 −2.25)/3 . 100%= 25%. In other words, Huffman’s encoding
of the text will use 25% less memory than its ﬁxed-length encoding. (Extensive
experiments with Huffman codes have shown that the compression ratio for this
scheme typically falls between 20% and 80%, depending on the characteristics of
the text being compressed.)
Huffman’s encoding is one of the most important ﬁle-compression methods.
In addition to its simplicity and versatility, it yields an optimal, i.e., minimal-length,
encoding (provided the frequencies of symbol occurrences are independent and
known in advance). The simplest version of Huffman compression calls, in fact,
for a preliminary scanning of a given text to count the frequencies of symbol
occurrences in it. Then these frequencies are used to construct a Huffman coding
tree and encode the text as described above. This scheme makes it necessary,
however, to include the coding table into the encoded text to make its decoding
possible. This drawback can be overcome by using dynamic Huffman encoding,
in which the coding tree is updated each time a new symbol is read from the source
text. Further, modern alternatives such as Lempel-Ziv algorithms (e.g., [Say05])
assign codewords not to individual symbols but to strings of symbols, allowing
them to achieve better and more robust compressions in many applications.
It is important to note that applications of Huffman’s algorithm are not limited
to data compression. Suppose we have n positive numbers w1, w2, . . . , wn that
have to be assigned to n leaves of a binary tree, one per node. If we deﬁne the
weighted path length as the sum n
i=1 liwi, where li is the length of the simple
path from the root to the ith leaf, how can we construct a binary tree with
minimum weighted path length? It is this more general problem that Huffman’s
algorithm actually solves. (For the coding application, li and wi are the length of
the codeword and the frequency of the ith symbol, respectively.)
This problem arises in many situations involving decision making. Consider,
for example, the game of guessing a chosen object from n possibilities (say, an
integer between 1 and n) by asking questions answerable by yes or no. Different
strategies for playing this game can be modeled by decision trees5 such as those
depicted in Figure 9.13 for n = 4. The length of the simple path from the root to a
leaf in such a tree is equal to the number of questions needed to get to the chosen
number represented by the leaf. If number i is chosen with probability pi, the sum
5.
Decision trees are discussed in more detail in Section 11.2.

Greedy Technique
n = 3
n = 4
n = 1
n = 2
n > 1
n > 3
n >2
no
no
yes
no
yes
no
yes
yes
n = 3
n = 3
n = 4
n = 4
n = 1
n = 2
n = 2
no
no
yes
yes
n
i=1 lipi, where li is the length of the path from the root to the ith leaf, indicates
the average number of questions needed to “guess” the chosen number with a
game strategy represented by its decision tree. If each of the numbers is chosen
with the same probability of 1/n, the best strategy is to successively eliminate half
(or almost half) the candidates as binary search does. This may not be the case
for arbitrary pi’s, however. For example, if n = 4 and p1 = 0.1, p2 = 0.2, p3 = 0.3,
and p4 = 0.4, the minimum weighted path tree is the rightmost one in Figure 9.13.
Thus, we need Huffman’s algorithm to solve this problem in its general case.
Note that this is the second time we are encountering the problem of con-
structing an optimal binary tree. In Section 8.3, we discussed the problem of
constructing an optimal binary search tree with positive numbers (the search prob-
abilities) assigned to every node of the tree. In this section, given numbers are
assigned just to leaves. The latter problem turns out to be easier: it can be solved
by the greedy algorithm, whereas the former is solved by the more complicated
dynamic programming algorithm.
Exercises 9.4
1. a. Construct a Huffman code for the following data:
symbol
A
B
C
D
_
frequency
0.4
0.1
0.2
0.15
0.15
b. Encode ABACABAD using the code of question (a).
c. Decode 100010111001010 using the code of question (a).
2. For data transmission purposes, it is often desirable to have a code with a
minimum variance of the codeword lengths (among codes of the same average
length). Compute the average and variance of the codeword length in two
