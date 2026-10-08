# BCS401 — Textbook Notes

**Subject:** BCS401 (Analysis and Design of Algorithms)
**Content type:** textbook_notes
**Primary Reference:** CLRS — Introduction to Algorithms & Jeff Erickson — Algorithms

---

# BCS401 — Textbook Notes (Module-wise)
**Subject:** Analysis and Design of Algorithms
**Prescribed Textbooks:** CLRS — Introduction to Algorithms & Jeff Erickson — Algorithms

---

## Module 1 Textbook: Introduction to Algorithms and Complexity

### Textbook Excerpt — Reference: T1_Introduction_to_Algorithms_CLRS.txt

ven with a poor
compiler, computer B runs more than 17 times faster than computer A! The advan-
tage of merge sort is even more pronounced when we sort 100 million numbers:
where insertion sort takes more than 23 days, merge sort takes under four hours.
In general, as the problem size increases, so does the relative advantage of merge
sort.
Algorithms and other technologies
The example above shows that we should consider algorithms, like computer hard-
ware, as a technology. Total system performance depends on choosing efﬁcient
algorithms as much as on choosing fast hardware. Just as rapid advances are being
made in other computer technologies, they are being made in algorithms as well.
You might wonder whether algorithms are truly that important on contemporary
computers in light of other advanced technologies, such as

advanced computer architectures and fabrication technologies,

easy-to-use, intuitive, graphical user interfaces (GUIs),

object-oriented systems,

integrated Web technologies, and

fast networking, both wired and wireless.
The answer is yes. Although some applications do not explicitly require algorith-
mic content at the application level (such as some simple, Web-based applications),
many do. For example, consider a Web-based service that determines how to travel
from one location to another. Its implementation would rely on fast hardware, a
graphical user interface, wide-area networking, and also possibly on object ori-
entation. However, it would also require algorithms for certain operations, such
as ﬁnding routes (probably using a shortest-path algorithm), rendering maps, and
interpolating addresses.
Moreover, even an application that does not require algorithmic content at the
application level relies heavily upon algorithms. Does the application rely on fast
hardware? The hardware design used algorithms. Does the application rely on
graphical user interfaces? The design of any GUI relies on algorithms. Does the
application rely on networking? Routing in networks relies heavily on algorithms.
Was the application written in a language other than machine code? Then it was
processed by a compiler, interpreter, or assembler, all of which make extensive use

Chapter 1
The Role of Algorithms in Computing
of algorithms. Algorithms are at the core of most technologies used in contempo-
rary computers.
Furthermore, with the ever-increasing capacities of computers, we use them to
solve larger problems than ever before. As we saw in the above comparison be-
tween insertion sort and merge sort, it is at larger problem sizes that the differences
in efﬁciency between algorithms become particularly prominent.
Having a solid base of algorithmic knowledge and technique is one characteristic
that separates the truly skilled programmers from the novices. With modern com-
puting technology, you can accomplish some tasks without knowing much about
algorithms, but with a good background in algorithms, you can do much, much
more.
Exercises
Give

### Textbook Excerpt — Reference: T1_Introduction_to_Algorithms_CLRS.txt

ra-
tions and at most n1=4ˇ2 D 2ˇ=4ˇ2 bit operations. POLLARD-RHO’s ability to ﬁnd
a small factor p of n with an expected number ‚.pp/ of arithmetic operations is
often its most appealing feature.
Exercises
Referring to the execution history shown in Figure 31.7(a), when does POLLARD-
RHO print the factor 73 of 1387?
Suppose that we are given a function f W Zn ! Zn and an initial value x0 2 Zn.
Deﬁne xi D f .xi1/ for i D 1; 2; : : :. Let t and u > 0 be the smallest values such
that xtCi D xtCuCi for i D 0; 1; : : :. In the terminology of Pollard’s rho algorithm,
t is the length of the tail and u is the length of the cycle of the rho. Give an efﬁcient
algorithm to determine t and u exactly, and analyze its running time.
How many steps would you expect POLLARD-RHO to require to discover a factor
of the form pe, where p is prime and e > 1?
?
One disadvantage of POLLARD-RHO as written is that it requires one gcd compu-
tation for each step of the recurrence. Instead, we could batch the gcd computa-
tions by accumulating the product of several xi values in a row and then using this
product instead of xi in the gcd computation. Describe carefully how you would
implement this idea, why it works, and what batch size you would pick as the most
effective when working on a ˇ-bit number n.

Problems for Chapter 31
Problems
Binary gcd algorithm
Most computers can perform the operations of subtraction, testing the parity (odd
or even) of a binary integer, and halving more quickly than computing remainders.
This problem investigates the binary gcd algorithm, which avoids the remainder
computations used in Euclid’s algorithm.
a. Prove that if a and b are both even, then gcd.a; b/ D 2  gcd.a=2; b=2/.
b. Prove that if a is odd and b is even, then gcd.a; b/ D gcd.a; b=2/.
c. Prove that if a and b are both odd, then gcd.a; b/ D gcd..a  b/=2; b/.
d. Design an efﬁcient binary gcd algorithm for input integers a and b, where
a  b, that runs in O.lg a/ time. Assume that each subtraction, parity test,
and halving takes unit time.
Analysis of bit operations in Euclid’s algorithm
a. Consider the ordinary “paper and pencil” algorithm for long division: dividing
a by b, which yields a quotient q and remainder r. Show that this method
requires O..1 C lg q/ lg b/ bit operations.
b. Deﬁne
.a; b/ D .1 C lg a/.1 C lg b/. Show that the number of bit operations
performed by EUCLID in reducing the problem of computing gcd.a; b/ to that
of computing gcd.b; a mod b/ is at most c.
.a; b/
.b; a mod b// for some
sufﬁciently large constant c > 0.
c. Show that EUCLID.a; b/ requires O.
.a; b// bit operations in general and
O.ˇ2/ bit operations when applied to two ˇ-bit inputs.
Three algorithms for Fibonacci numbers
This problem compares the efﬁciency of three methods for computing the nth Fi-
bonacci number Fn, given n. Assume that the cost of adding, subtracting, or mul-
tiplying two numbers is O.1/, independent of the size of the numbers.
a. Show that the running time of the straightforwar

---

## Module 2 Textbook: Divide and Conquer

### Textbook Excerpt — Reference: T1_Introduction_to_Algorithms_CLRS.txt

ven with a poor
compiler, computer B runs more than 17 times faster than computer A! The advan-
tage of merge sort is even more pronounced when we sort 100 million numbers:
where insertion sort takes more than 23 days, merge sort takes under four hours.
In general, as the problem size increases, so does the relative advantage of merge
sort.
Algorithms and other technologies
The example above shows that we should consider algorithms, like computer hard-
ware, as a technology. Total system performance depends on choosing efﬁcient
algorithms as much as on choosing fast hardware. Just as rapid advances are being
made in other computer technologies, they are being made in algorithms as well.
You might wonder whether algorithms are truly that important on contemporary
computers in light of other advanced technologies, such as

advanced computer architectures and fabrication technologies,

easy-to-use, intuitive, graphical user interfaces (GUIs),

object-oriented systems,

integrated Web technologies, and

fast networking, both wired and wireless.
The answer is yes. Although some applications do not explicitly require algorith-
mic content at the application level (such as some simple, Web-based applications),
many do. For example, consider a Web-based service that determines how to travel
from one location to another. Its implementation would rely on fast hardware, a
graphical user interface, wide-area networking, and also possibly on object ori-
entation. However, it would also require algorithms for certain operations, such
as ﬁnding routes (probably using a shortest-path algorithm), rendering maps, and
interpolating addresses.
Moreover, even an application that does not require algorithmic content at the
application level relies heavily upon algorithms. Does the application rely on fast
hardware? The hardware design used algorithms. Does the application rely on
graphical user interfaces? The design of any GUI relies on algorithms. Does the
application rely on networking? Routing in networks relies heavily on algorithms.
Was the application written in a language other than machine code? Then it was
processed by a compiler, interpreter, or assembler, all of which make extensive use

Chapter 1
The Role of Algorithms in Computing
of algorithms. Algorithms are at the core of most technologies used in contempo-
rary computers.
Furthermore, with the ever-increasing capacities of computers, we use them to
solve larger problems than ever before. As we saw in the above comparison be-
tween insertion sort and merge sort, it is at larger problem sizes that the differences
in efﬁciency between algorithms become particularly prominent.
Having a solid base of algorithmic knowledge and technique is one characteristic
that separates the truly skilled programmers from the novices. With modern com-
puting technology, you can accomplish some tasks without knowing much about
algorithms, but with a good background in algorithms, you can do much, much
more.
Exercises
Give

---

## Module 3 Textbook: Greedy Algorithms

### Textbook Excerpt — Reference: T1_Introduction_to_Algorithms_CLRS.txt

ven with a poor
compiler, computer B runs more than 17 times faster than computer A! The advan-
tage of merge sort is even more pronounced when we sort 100 million numbers:
where insertion sort takes more than 23 days, merge sort takes under four hours.
In general, as the problem size increases, so does the relative advantage of merge
sort.
Algorithms and other technologies
The example above shows that we should consider algorithms, like computer hard-
ware, as a technology. Total system performance depends on choosing efﬁcient
algorithms as much as on choosing fast hardware. Just as rapid advances are being
made in other computer technologies, they are being made in algorithms as well.
You might wonder whether algorithms are truly that important on contemporary
computers in light of other advanced technologies, such as

advanced computer architectures and fabrication technologies,

easy-to-use, intuitive, graphical user interfaces (GUIs),

object-oriented systems,

integrated Web technologies, and

fast networking, both wired and wireless.
The answer is yes. Although some applications do not explicitly require algorith-
mic content at the application level (such as some simple, Web-based applications),
many do. For example, consider a Web-based service that determines how to travel
from one location to another. Its implementation would rely on fast hardware, a
graphical user interface, wide-area networking, and also possibly on object ori-
entation. However, it would also require algorithms for certain operations, such
as ﬁnding routes (probably using a shortest-path algorithm), rendering maps, and
interpolating addresses.
Moreover, even an application that does not require algorithmic content at the
application level relies heavily upon algorithms. Does the application rely on fast
hardware? The hardware design used algorithms. Does the application rely on
graphical user interfaces? The design of any GUI relies on algorithms. Does the
application rely on networking? Routing in networks relies heavily on algorithms.
Was the application written in a language other than machine code? Then it was
processed by a compiler, interpreter, or assembler, all of which make extensive use

Chapter 1
The Role of Algorithms in Computing
of algorithms. Algorithms are at the core of most technologies used in contempo-
rary computers.
Furthermore, with the ever-increasing capacities of computers, we use them to
solve larger problems than ever before. As we saw in the above comparison be-
tween insertion sort and merge sort, it is at larger problem sizes that the differences
in efﬁciency between algorithms become particularly prominent.
Having a solid base of algorithmic knowledge and technique is one characteristic
that separates the truly skilled programmers from the novices. With modern com-
puting technology, you can accomplish some tasks without knowing much about
algorithms, but with a good background in algorithms, you can do much, much
more.
Exercises
Give

### Textbook Excerpt — Reference: T1_Introduction_to_Algorithms_CLRS.txt

rtices in linear time.

Chapter 24
Single-Source Shortest Paths
Give an efﬁcient algorithm to count the total number of paths in a directed acyclic
graph. Analyze your algorithm.
Dijkstra’s algorithm
Dijkstra’s algorithm solves the single-source shortest-paths problem on a weighted,
directed graph G D .V; E/ for the case in which all edge weights are nonnegative.
In this section, therefore, we assume that w.u; /  0 for each edge .u; / 2 E. As
we shall see, with a good implementation, the running time of Dijkstra’s algorithm
is lower than that of the Bellman-Ford algorithm.
Dijkstra’s algorithm maintains a set S of vertices whose ﬁnal shortest-path
weights from the source s have already been determined. The algorithm repeat-
edly selects the vertex u 2 V S with the minimum shortest-path estimate, adds u
to S, and relaxes all edges leaving u. In the following implementation, we use a
min-priority queue Q of vertices, keyed by their d values.
DIJKSTRA.G; w; s/
INITIALIZE-SINGLE-SOURCE.G; s/
S D ;
Q D G:V
while Q ¤ ;
u D EXTRACT-MIN.Q/
S D S [ fug
for each vertex  2 G:AdjŒu
RELAX.u; ; w/
Dijkstra’s algorithm relaxes edges as shown in Figure 24.6. Line 1 initializes
the d and  values in the usual way, and line 2 initializes the set S to the empty
set. The algorithm maintains the invariant that Q D V  S at the start of each
iteration of the while loop of lines 4–8. Line 3 initializes the min-priority queue Q
to contain all the vertices in V ; since S D ; at that time, the invariant is true after
line 3. Each time through the while loop of lines 4–8, line 5 extracts a vertex u from
Q D V S and line 6 adds it to set S, thereby maintaining the invariant. (The ﬁrst
time through this loop, u D s.) Vertex u, therefore, has the smallest shortest-path
estimate of any vertex in V  S. Then, lines 7–8 relax each edge .u; / leaving u,
thus updating the estimate :d and the predecessor : if we can improve the
shortest path to  found so far by going through u. Observe that the algorithm
never inserts vertices into Q after line 3 and that each vertex is extracted from Q

Dijkstra’s algorithm
∞
∞
∞
∞
∞
∞
(c)
s
t
x
y
z
(f)
s
t
x
y
z
(b)
s
t
x
y
z
(e)
s
t
x
y
z
(a)
s
t
x
y
z
(d)
s
t
x
y
z
Figure 24.6
The execution of Dijkstra’s algorithm.
The source s is the leftmost vertex. The
shortest-path estimates appear within the vertices, and shaded edges indicate predecessor values.
Black vertices are in the set S, and white vertices are in the min-priority queue Q D V  S. (a) The
situation just before the ﬁrst iteration of the while loop of lines 4–8. The shaded vertex has the mini-
mum d value and is chosen as vertex u in line 5. (b)–(f) The situation after each successive iteration
of the while loop. The shaded vertex in each part is chosen as vertex u in line 5 of the next iteration.
The d values and predecessors shown in part (f) are the ﬁnal values.
and added to S exactly once, so that the while loop of lines 4–8 iterates exactly jV j
times.
Because Dijkstra’s algorithm al

---

## Module 4 Textbook: Dynamic Programming

### Textbook Excerpt — Reference: T1_Introduction_to_Algorithms_CLRS.txt

ven with a poor
compiler, computer B runs more than 17 times faster than computer A! The advan-
tage of merge sort is even more pronounced when we sort 100 million numbers:
where insertion sort takes more than 23 days, merge sort takes under four hours.
In general, as the problem size increases, so does the relative advantage of merge
sort.
Algorithms and other technologies
The example above shows that we should consider algorithms, like computer hard-
ware, as a technology. Total system performance depends on choosing efﬁcient
algorithms as much as on choosing fast hardware. Just as rapid advances are being
made in other computer technologies, they are being made in algorithms as well.
You might wonder whether algorithms are truly that important on contemporary
computers in light of other advanced technologies, such as

advanced computer architectures and fabrication technologies,

easy-to-use, intuitive, graphical user interfaces (GUIs),

object-oriented systems,

integrated Web technologies, and

fast networking, both wired and wireless.
The answer is yes. Although some applications do not explicitly require algorith-
mic content at the application level (such as some simple, Web-based applications),
many do. For example, consider a Web-based service that determines how to travel
from one location to another. Its implementation would rely on fast hardware, a
graphical user interface, wide-area networking, and also possibly on object ori-
entation. However, it would also require algorithms for certain operations, such
as ﬁnding routes (probably using a shortest-path algorithm), rendering maps, and
interpolating addresses.
Moreover, even an application that does not require algorithmic content at the
application level relies heavily upon algorithms. Does the application rely on fast
hardware? The hardware design used algorithms. Does the application rely on
graphical user interfaces? The design of any GUI relies on algorithms. Does the
application rely on networking? Routing in networks relies heavily on algorithms.
Was the application written in a language other than machine code? Then it was
processed by a compiler, interpreter, or assembler, all of which make extensive use

Chapter 1
The Role of Algorithms in Computing
of algorithms. Algorithms are at the core of most technologies used in contempo-
rary computers.
Furthermore, with the ever-increasing capacities of computers, we use them to
solve larger problems than ever before. As we saw in the above comparison be-
tween insertion sort and merge sort, it is at larger problem sizes that the differences
in efﬁciency between algorithms become particularly prominent.
Having a solid base of algorithmic knowledge and technique is one characteristic
that separates the truly skilled programmers from the novices. With modern com-
puting technology, you can accomplish some tasks without knowing much about
algorithms, but with a good background in algorithms, you can do much, much
more.
Exercises
Give

### Textbook Excerpt — Reference: T1_Introduction_to_Algorithms_CLRS.txt

o implement RB-ENUMERATE in ‚.mClg n/ time, where m is the
number of keys that are output and n is the number of internal nodes in the tree.
(Hint: You do not need to add new attributes to the red-black tree.)
Interval trees
In this section, we shall augment red-black trees to support operations on dynamic
sets of intervals. A closed interval is an ordered pair of real numbers Œt1; t2, with
t1  t2. The interval Œt1; t2 represents the set ft 2 R W t1  t  t2g. Open and
half-open intervals omit both or one of the endpoints from the set, respectively. In
this section, we shall assume that intervals are closed; extending the results to open
and half-open intervals is conceptually straightforward.
Intervals are convenient for representing events that each occupy a continuous
period of time. We might, for example, wish to query a database of time intervals
to ﬁnd out what events occurred during a given interval. The data structure in this
section provides an efﬁcient means for maintaining such an interval database.
We can represent an interval Œt1; t2 as an object i, with attributes i:low D t1
(the low endpoint) and i:high D t2 (the high endpoint). We say that intervals i
and i 0 overlap if i \ i 0 ¤ ;, that is, if i:low  i 0:high and i 0:low  i:high. As
Figure 14.3 shows, any two intervals i and i 0 satisfy the interval trichotomy; that
is, exactly one of the following three properties holds:
a. i and i 0 overlap,
b. i is to the left of i 0 (i.e., i:high < i 0:low),
c. i is to the right of i 0 (i.e., i 0:high < i:low).
An interval tree is a red-black tree that maintains a dynamic set of elements, with
each element x containing an interval x:int. Interval trees support the following
operations:

Interval trees
i
i
i
i
(a)
i
(b)
i
(c)
i′
i′
i′
i′
i′
i′
Figure 14.3
The interval trichotomy for two closed intervals i and i0. (a) If i and i0 overlap, there
are four situations; in each, i:low  i0:high and i0:low  i:high. (b) The intervals do not overlap,
and i:high < i0:low. (c) The intervals do not overlap, and i0:high < i:low.
INTERVAL-INSERT.T; x/ adds the element x, whose int attribute is assumed to
contain an interval, to the interval tree T .
INTERVAL-DELETE.T; x/ removes the element x from the interval tree T .
INTERVAL-SEARCH.T; i/ returns a pointer to an element x in the interval tree T
such that x:int overlaps interval i, or a pointer to the sentinel T:nil if no such
element is in the set.
Figure 14.4 shows how an interval tree represents a set of intervals. We shall track
the four-step method from Section 14.2 as we review the design of an interval tree
and the operations that run on it.
Step 1: Underlying data structure
We choose a red-black tree in which each node x contains an interval x:int and the
key of x is the low endpoint, x:int:low, of the interval. Thus, an inorder tree walk
of the data structure lists the intervals in sorted order by low endpoint.
Step 2: Additional information
In addition to the intervals themselves, each node x contai

---

## Module 5 Textbook: Backtracking and Branch-and-Bound

### Textbook Excerpt — Reference: T2_Algorithms_Jeff_Erickson.txt

gton-Hill apportionment algorithm
This implementation of Huntington-Hill uses a priority queue that supports
the operations NewPriorityQueue, Insert, and ExtractMax. (The actual
law doesn’t say anything about priority queues, of course.) The output of the
algorithm, and therefore its correctness, does not depend at all on how this
13Overruling an earlier ruling by a federal district court, the Supreme Court unanimously
held that any apportionment method adopted in good faith by Congress is constitutional (United
States Department of Commerce v. Montana). The current congressional apportionment algorithm
is described in gruesome detail at the U.S. Census Department web site http://www.census.gov/
topics/public-sector/congressional-apportionment.html. A good history of the apportionment
problem can be found at http://www.thirty-thousand.org/pages/Apportionment.htm. A report
by the Congressional Research Service describing various apportionment methods is available at
http://www.fas.org/sgp/crs/misc/R41382.pdf.

priority queue is implemented. The Census Bureau uses a sorted array, stored
in a single column of an Excel spreadsheet, which is recalculated from scratch
at every iteration. You (should have) learned a more eﬃcient implementation
in your undergraduate data structures class.
Similar apportionment algorithms are used in multi-party parliamentary
elections around the world, where the number of seats allocated to each party
is supposed to be proportional to the number of votes that party receives. The
two most common are the D’Hondt method14 and the Webster–Sainte-Laguë
method,15 which respectively use priorities P/(r + 1) and P/(2r + 1) in place of
the square-root expression in Huntington-Hill. The Huntington-Hill method is
essentially unique to the United States House of Representatives, thanks in part
to the constitutional requirement that each state must be allocated at least one
representative.
A Bad Example
As a prototypical example of a sequence of instructions that is not actually an
algorithm, consider "Martin’s algorithm”:16
BeAMillionaireAndNeverPayTaxes():
Get a million dollars.
If the tax man comes to your door and says, “You have never paid taxes!”
Say “I forgot.”
Pretty simple, except for that ﬁrst step; it’s a doozy! A group of billionaire CEOs,
Silicon Valley venture capitalists, or New York City real-estate hustlers might
consider this an algorithm, because for them the ﬁrst step is both unambiguous
and trivial,17 but for the rest of us poor slobs, Martin’s procedure is too vague to
be considered an actual algorithm. On the other hand, this is a perfect example
of a reduction—it reduces the problem of being a millionaire and never paying
taxes to the “easier” problem of acquiring a million dollars. We’ll see reductions
over and over again in this book. As hundreds of businessmen and politicians
have demonstrated, if you know how to solve the easier problem, a reduction
tells you how to solve the harder one.
14developed by Tho

---
