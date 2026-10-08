<!-- PROVENANCE: subject_code=BCS304 | subject_name=Data Structures and Applications | semester=3 | source_type=TEXTBOOK_DIGEST | source_file=textbook_notes.md | extraction_method=STRUCTURED_COMPREHENSIVE | confidence=0.95 -->

# BCS304 — Textbook Notes

**Subject:** BCS304 (Data Structures and Applications)
**Content type:** textbook_notes
**Primary Reference:** Cormen, Leiserson, Rivest, Stein (CLRS) — Introduction to Algorithms & Narasimha Karumanchi — Data Structures Made Easy & Pat Morin — Open Data Structures

---

# BCS304 — Textbook Notes (Module-wise)
**Subject:** Data Structures and Applications
**Prescribed Textbooks:** Cormen, Leiserson, Rivest, Stein (CLRS) — Introduction to Algorithms & Narasimha Karumanchi — Data Structures Made Easy & Pat Morin — Open Data Structures

---

## Module 1 Textbook: Introduction to Data Structures — Arrays and Strings

### Textbook Excerpt — Reference: R1_Introduction_to_Algorithms_CLRS.txt

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

### Textbook Excerpt — Reference: R1_Introduction_to_Algorithms_CLRS.txt

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

## Module 2 Textbook: Stacks and Queues

### Textbook Excerpt — Reference: R2_Data_Structures_and_Algorithms_Made_Easy_Karumanchi.txt

of the first match. We do this process recursively, and when
the last character of the input pattern matches, return true.
During the above process, take care not to use any cell in the 2D array twice. For this purpose,
you mark every visited cell with some sign. If your pattern matching fails at some point, start
matching from the beginning (of the pattern) in the remaining cells. When returning, you unmark
the visited cells.
Let’s convert the above intuitive method into an algorithm. Since we are doing similar checks for
pattern matching every time, a recursive solution is what we need. In a recursive solution, we
need to check if the substring passed is matched in the given matrix or not. The condition is not to
use the already used cell, and to find the already used cell, we need to add another 2D array to the
function (or we can use an unused bit in the input array itself.) Also, we need the current position
of the input matrix from where we need to start. Since we need to pass a lot more information than
is actually given, we should be having a wrapper function to initialize the extra information to be
passed.
Algorithm:
If we are past the last character in the pattern
Return true
If we get a used cell again
Return false if we got past the 2D matrix
Return false
If searching for first element and cell doesn’t match
FindMatch with next cell in row-first order (or column-first order)

Otherwise if character matches
mark this cell as used
res = FindMatch with next position of pattern in 8 neighbors
mark this cell as unused
Return res
Otherwise
Return false

Problem-15  Given two strings str1 and str2, write a function that prints all interleavings of
the given two strings. We may assume that all characters in both strings are different.
Example: Input: str1 = “AB”, str2 = “CD” and Output: ABCD ACBD ACDB CABD

CADB CDAB. An interleaved string of given two strings preserves the order of characters
in individual strings. For example, in all the interleavings of above first example, ‘A’
comes before ‘B’ and ‘C comes before ‘D’.
Solution: Let the length of str1 be m and the length of str2 be n. Let us assume that all characters
in str1 and str2 are different. Let Count(m,n) be the count of all interleaved strings in such strings.
The value of Count(m,n) can be written as following.
To print all interleavings, we can first fix the first character of strl[0..m-1] in output string, and
recursively call for str1[1..m-1] and str2[0..n-1]. And then we can fix the first character of
str2[0..n-1] and recursively call for str1[0..m-1] and str2[1..n-1].

Problem-16  Given a matrix with size n × n containing random integers. Give an algorithm
which checks whether rows match with a column(s) or not. For example, if ith row
matches with jth column, and ith row contains the elements - [2,6,5,8,9]. Then;’’1 column
would also contain the elements - [2,6,5,8,9].
Solution: We can build a trie for the data in the columns (rows would also work). Then we can
compare th

---

## Module 3 Textbook: Linked Lists

### Textbook Excerpt — Reference: R1_Introduction_to_Algorithms_CLRS.txt

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

### Textbook Excerpt — Reference: R2_Data_Structures_and_Algorithms_Made_Easy_Karumanchi.txt

le traversing the BST in inorder, at each node check the condition
that its key value should be greater than the key value of its previous visited node. Also, we need
to initialize the prev with possible minimum integer value (say, INT_MIN).
Time Complexity: O(n). Space Complexity: O(n), for stack space.
Problem-54  Give an algorithm for converting BST to circular DLL with space complexity
O(1).
Solution: Convert left and right subtrees to DLLs and maintain end of those lists. Then, adjust the
pointers.

Time Complexity: O(n).
Problem-55  For Problem-54, is there any other way of solving it?
Solution: Yes. There is an alternative solution based on the divide and conquer method which is
quite neat.

Time Complexity: O(n).
Problem-56  Given a sorted doubly linked list, give an algorithm for converting it into
balanced binary search tree.
Solution: Find the middle node and adjust the pointers.

Time Complexity: 2T(n/2) + O(n) [for finding the middle node] = O(nlogn).
Note: For FindMiddleNode function refer Linked Lists chapter.
Problem-57  Given a sorted array, give an algorithm for converting the array to BST.
Solution: If we have to choose an array element to be the root of a balanced BST, which element
should we pick? The root of a balanced BST should be the middle element from the sorted array.
We would pick the middle element from the sorted array in each iteration. We then create a node
in the tree initialized with this element. After the element is chosen, what is left? Could you
identify the sub-problems within the problem?
There are two arrays left – the one on its left and the one on its right. These two arrays are the
sub-problems of the original problem, since both of them are sorted. Furthermore, they are
subtrees of the current node’s left and right child.
The code below creates a balanced BST from the sorted array in O(n) time (n is the number of
elements in the array). Compare how similar the code is to a binary search algorithm. Both are
using the divide and conquer methodology.

Time Complexity: O(n). Space Complexity: O(n), for stack space.
Problem-58  Given a singly linked list where elements are sorted in ascending order, convert
it to a height balanced BST.
Solution: A naive way is to apply the Problem-56 solution directly. In each recursive call, we
would have to traverse half of the list’s length to find the middle element. The run time complexity
is clearly O(nlogn), where n is the total number of elements in the list. This is because each level
of recursive call requires a total of n/2 traversal steps in the list, and there are a total of logn
number of levels (ie, the height of the balanced tree).
Problem-59  For Problem-58, can we improve the complexity?
Solution: Hint: How about inserting nodes following the list order? If we can achieve this, we no
longer need to find the middle element as we are able to traverse the list while inserting nodes to
the tree.

Best Solution: As usual, the best solution requires us to think

---

## Module 4 Textbook: Trees

### Textbook Excerpt — Reference: R1_Introduction_to_Algorithms_CLRS.txt

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

### Textbook Excerpt — Reference: R2_Data_Structures_and_Algorithms_Made_Easy_Karumanchi.txt

le traversing the BST in inorder, at each node check the condition
that its key value should be greater than the key value of its previous visited node. Also, we need
to initialize the prev with possible minimum integer value (say, INT_MIN).
Time Complexity: O(n). Space Complexity: O(n), for stack space.
Problem-54  Give an algorithm for converting BST to circular DLL with space complexity
O(1).
Solution: Convert left and right subtrees to DLLs and maintain end of those lists. Then, adjust the
pointers.

Time Complexity: O(n).
Problem-55  For Problem-54, is there any other way of solving it?
Solution: Yes. There is an alternative solution based on the divide and conquer method which is
quite neat.

Time Complexity: O(n).
Problem-56  Given a sorted doubly linked list, give an algorithm for converting it into
balanced binary search tree.
Solution: Find the middle node and adjust the pointers.

Time Complexity: 2T(n/2) + O(n) [for finding the middle node] = O(nlogn).
Note: For FindMiddleNode function refer Linked Lists chapter.
Problem-57  Given a sorted array, give an algorithm for converting the array to BST.
Solution: If we have to choose an array element to be the root of a balanced BST, which element
should we pick? The root of a balanced BST should be the middle element from the sorted array.
We would pick the middle element from the sorted array in each iteration. We then create a node
in the tree initialized with this element. After the element is chosen, what is left? Could you
identify the sub-problems within the problem?
There are two arrays left – the one on its left and the one on its right. These two arrays are the
sub-problems of the original problem, since both of them are sorted. Furthermore, they are
subtrees of the current node’s left and right child.
The code below creates a balanced BST from the sorted array in O(n) time (n is the number of
elements in the array). Compare how similar the code is to a binary search algorithm. Both are
using the divide and conquer methodology.

Time Complexity: O(n). Space Complexity: O(n), for stack space.
Problem-58  Given a singly linked list where elements are sorted in ascending order, convert
it to a height balanced BST.
Solution: A naive way is to apply the Problem-56 solution directly. In each recursive call, we
would have to traverse half of the list’s length to find the middle element. The run time complexity
is clearly O(nlogn), where n is the total number of elements in the list. This is because each level
of recursive call requires a total of n/2 traversal steps in the list, and there are a total of logn
number of levels (ie, the height of the balanced tree).
Problem-59  For Problem-58, can we improve the complexity?
Solution: Hint: How about inserting nodes following the list order? If we can achieve this, we no
longer need to find the middle element as we are able to traverse the list while inserting nodes to
the tree.

Best Solution: As usual, the best solution requires us to think

---

## Module 5 Textbook: Graphs and Hashing

### Textbook Excerpt — Reference: R3_Open_Data_Structures_Morin.txt

ably shorter and this trans-
lates into noticeably faster operations on Treaps than Skiplists. Exer-
cise 4.7 in Chapter 4 shows how the expected length of the search path in
a Skiplist can be reduced to
elnn + O(1) ≈1.884logn + O(1)
by using biased coin tosses. Even with this optimization, the expected
length of search paths in a SkiplistSSet is noticeably longer than in a
Treap.
Discussion and Exercises
Random binary search trees have been studied extensively. Devroye [19]
gives a proof of Lemma 7.1 and related results. There are much stronger
results in the literature as well, the most impressive of which is due to
Reed [64], who shows that the expected height of a random binary search
tree is
α lnn −β lnlnn + O(1)
where α ≈4.31107 is the unique solution on the interval [2,∞) of the
equation α ln((2e/α)) = 1 and β =
2ln(α/2) . Furthermore, the variance of
the height is constant.

Discussion and Exercises
§7.3
The name Treap was coined by Seidel and Aragon [67] who discussed
Treaps and some of their variants. However, their basic structure was
studied much earlier by Vuillemin [76] who called them Cartesian trees.
One possible space-optimization of the Treap data structure is the
elimination of the explicit storage of the priority p in each node. In-
stead, the priority of a node, u, is computed by hashing u’s address in
memory (in 32-bit Java, this is equivalent to hashing u.hashCode()). Al-
though a number of hash functions will probably work well for this in
practice, for the important parts of the proof of Lemma 7.1 to remain
valid, the hash function should be randomized and have the min-wise in-
dependent property: For any distinct values x1,...,xk, each of the hash val-
ues h(x1),...,h(xk) should be distinct with high probability and, for each
i ∈{1,...,k},
Pr{h(xi) = min{h(x1),...,h(xk)}} ≤c/k
for some constant c. One such class of hash functions that is easy to im-
plement and fairly fast is tabulation hashing (Section 5.2.3).
Another Treap variant that doesn’t store priorities at each node is the
randomized binary search tree of Mart´ınez and Roura [51]. In this vari-
ant, every node, u, stores the size, u.size, of the subtree rooted at u. Both
the add(x) and remove(x) algorithms are randomized. The algorithm for
adding x to the subtree rooted at u does the following:
as a leaf, and rotations are then done to bring x up to the root of this
subtree.
cursively added into one of the two subtrees rooted at u.left or
u.right, as appropriate.
The ﬁrst case corresponds to an add(x) operation in a Treap where x’s
node receives a random priority that is smaller than any of the size(u)
priorities in u’s subtree, and this case occurs with exactly the same prob-
ability.
Removing a value x from a randomized binary search tree is similar to
the process of removing from a Treap. We ﬁnd the node, u, that contains
x and then perform rotations that repeatedly increase the depth of u until

§7.3
Random Binary Search Trees
it becomes a leaf, at which poi

### Textbook Excerpt — Reference: R3_Open_Data_Structures_Morin.txt

ry array. (See Exercise 3.13.)
Exercise 11.3. Some implementations of quickSort(a,i,n,c) always use
a[i] as a pivot. Give an example of an input array of length n in which
such an implementation would perform n
comparisons.
Exercise 11.4. Some implementations of quickSort(a,i,n,c) always use
a[i + n/2] as a pivot. Given an example of an input array of length n in
which such an implementation would perform n
comparisons.
Exercise 11.5. Show that, for any implementation of quickSort(a,i,n,c)
that chooses a pivot deterministically, without ﬁrst looking at any values

Discussion and Exercises
§11.3
in a[i],...,a[i + n −1], there exists an input array of length n that causes
this implementation to perform n
comparisons.
Exercise 11.6. Design a Comparator, c, that you could pass as an argu-
ment to quickSort(a,i,n,c) and that would cause quicksort to perform
n
comparisons. (Hint: Your comparator does not actually need to look
at the values being compared.)
Exercise 11.7. Analyze the expected number of comparisons done by
Quicksort a little more carefully than the proof of Theorem 11.3. In par-
ticular, show that the expected number of comparisons is 2nHn −n + Hn.
Exercise 11.8. Describe an input array that causes heap sort to perform
at least 2nlogn −O(n) comparisons. Justify your answer.
Exercise 11.9. The heap sort implementation described here sorts the
elements into reverse sorted order and then reverses the array. This last
step could be avoided by deﬁning a new Comparator that negates the
results of the input Comparator, c. Explain why this would not be a good
optimization. (Hint: Consider how many negations would need to be
done in relation to how long it takes to reverse the array.)
Exercise 11.10. Find another pair of permutations of 1,2,3 that are not
correctly sorted by the comparison tree in Figure 11.6.
Exercise 11.11. Prove that logn! = nlogn −O(n).
Exercise 11.12. Prove that a binary tree with k leaves has height at least
logk.
Exercise 11.13. Prove that, if we pick a random leaf from a binary tree
with k leaves, then the expected height of this leaf is at least logk.
Exercise 11.14. The implementation of radixSort(a,k) given here works
when the input array, a contains only non-negative integers. Extend this
implementation so that it also works correctly when a contains both neg-
ative and non-negative integers.

Chapter 12
Graphs
In this chapter, we study two representations of graphs and basic algo-
rithms that use these representations.
Mathematically, a (directed) graph is a pair G = (V ,E) where V is a set
of vertices and E is a set of ordered pairs of vertices called edges. An edge
(i,j) is directed from i to j; i is called the source of the edge and j is
called the target. A path in G is a sequence of vertices v0,...,vk such that,
for every i ∈{1,...,k}, the edge (vi−1,vi) is in E. A path v0,...,vk is a cycle
if, additionally, the edge (vk,v0) is in E. A path (or cycle) is simple if all
of its vertices are unique. If there is a pa

---
