<!-- PROVENANCE: subject_code=BCS304 | subject_name=Data Structures and Applications | semester=3 | module=4 | source_type=MODULE_NOTES | source_file=module4.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS304 — Module 4

## Trees

**Subject:** BCS304 (Data Structures and Applications)
**Module:** Module 4
**Content type:** textbook_fallback
**Sources:** R3_Open_Data_Structures_Morin.txt

---

Chapter 6
Binary Trees
This chapter introduces one of the most fundamental structures in com-
puter science: binary trees. The use of the word tree here comes from
the fact that, when we draw them, the resultant drawing often resembles
the trees found in a forest. There are many ways of ways of deﬁning bi-
nary trees. Mathematically, a binary tree is a connected, undirected, ﬁnite
graph with no cycles, and no vertex of degree greater than three.
For most computer science applications, binary trees are rooted: A
special node, r, of degree at most two is called the root of the tree. For
every node, u , r, the second node on the path from u to r is called the
parent of u. Each of the other nodes adjacent to u is called a child of u.
Most of the binary trees we are interested in are ordered, so we distinguish
between the left child and right child of u.
In illustrations, binary trees are usually drawn from the root down-
ward, with the root at the top of the drawing and the left and right chil-
dren respectively given by left and right positions in the drawing (Fig-
ure 6.1). For example, Figure 6.2.a shows a binary tree with nine nodes.
Because binary trees are so important, a certain terminology has de-
veloped for them: The depth of a node, u, in a binary tree is the length of
the path from u to the root of the tree. If a node, w, is on the path from u
to r, then w is called an ancestor of u and u a descendant of w. The subtree
of a node, u, is the binary tree that is rooted at u and contains all of u’s
descendants. The height of a node, u, is the length of the longest path
from u to one of its descendants. The height of a tree is the height of its
root. A node, u, is a leaf if it has no children.

§6
Binary Trees
u
u.parent
u.left
u.right
r
r
(a)
(b)

BinaryTree: A Basic Binary Tree
§6.1
We sometimes think of the tree as being augmented with external
nodes. Any node that does not have a left child has an external node as
its left child, and, correspondingly, any node that does not have a right
child has an external node as its right child (see Figure 6.2.b). It is easy
to verify, by induction, that a binary tree with n ≥1 real nodes has n + 1
external nodes.
6.1
BinaryTree: A Basic Binary Tree
The simplest way to represent a node, u, in a binary tree is to explicitly
store the (at most three) neighbours of u:
BinaryTree
class BTNode<Node extends BTNode<Node>> {
Node left;
Node right;
Node parent;
}
When one of these three neighbours is not present, we set it to nil.
In this way, both external nodes of the tree and the parent of the root
correspond to the value nil.
The binary tree itself can then be represented by a reference to its root
node, r:
BinaryTree
Node r;
We can compute the depth of a node, u, in a binary tree by counting
the number of steps on the path from u to the root:
BinaryTree
int depth(Node u) {
int d = 0;
while (u != r) {
u = u.parent;
d++;

§6.1
Binary Trees
}
return d;
}
6.1.1
Recursive Algorithms
Using recursive algorithms makes it very easy to compute facts about bi-
nary trees. For example, to compute the size of (number of nodes in) a
binary tree rooted at node u, we recursively compute the sizes of the two
subtrees rooted at the children of u, sum up these sizes, and add one:
BinaryTree
int size(Node u) {
if (u == nil) return 0;
return 1 + size(u.left) + size(u.right);
}
To compute the height of a node u, we can compute the height of u’s
two subtrees, take the maximum, and add one:
BinaryTree
int height(Node u) {
if (u == nil) return -1;
return 1 + max(height(u.left), height(u.right));
}
6.1.2
Traversing Binary Trees
The two algorithms from the previous section both use recursion to visit
all the nodes in a binary tree. Each of them visits the nodes of the binary
tree in the same order as the following code:
BinaryTree
void traverse(Node u) {
if (u == nil) return;
traverse(u.left);
traverse(u.right);
}

BinaryTree: A Basic Binary Tree
§6.1
Using recursion this way produces very short, simple code, but it can
also be problematic. The maximum depth of the recursion is given by the
maximum depth of a node in the binary tree, i.e., the tree’s height. If the
height of the tree is very large, then this recursion could very well use
more stack space than is available, causing a crash.
To traverse a binary tree without recursion, you can use an algorithm
that relies on where it came from to determine where it will go next. See
do is to visit u.left. If we arrive at u from u.left, then the next thing to
do is to visit u.right. If we arrive at u from u.right, then we are done
visiting u’s subtree, and so we return to u.parent. The following code
implements this idea, with code included for handling the cases where
any of u.left, u.right, or u.parent is nil:
BinaryTree
void traverse2() {
Node u = r, prev = nil, next;
while (u != nil) {
if (prev == u.parent) {
if (u.left != nil) next = u.left;
else if (u.right != nil) next = u.right;
else next = u.parent;
} else if (prev == u.left) {
if (u.right != nil) next = u.right;
else next = u.parent;
} else {
next = u.parent;
}
prev = u;
u = next;
}
}
The same facts that can be computed with recursive algorithms can
also be computed in this way, without recursion. For example, to com-
pute the size of the tree we keep a counter, n, and increment n whenever
visiting a node for the ﬁrst time:

§6.1
Binary Trees
u
u.parent
u.left
u.right
r
non-recursively, and the resultant traversal of the tree.
BinaryTree
int size2() {
Node u = r, prev = nil, next;
int n = 0;
while (u != nil) {
if (prev == u.parent) {
n++;
if (u.left != nil) next = u.left;
else if (u.right != nil) next = u.right;
else next = u.parent;
} else if (prev == u.left) {
if (u.right != nil) next = u.right;
else next = u.parent;
} else {
next = u.parent;
}
prev = u;
u = next;
}
return n;
}
In some implementations of binary trees, the parent ﬁeld is not used.
When this is the case, a non-recursive implementation is still possible,
but the implementation has to use a List (or Stack) to keep track of the
path from the current node to the root.

BinaryTree: A Basic Binary Tree
§6.1
r
level-by-level, and left-to-right within each level.
A special kind of traversal that does not ﬁt the pattern of the above
functions is the breadth-ﬁrst traversal. In a breadth-ﬁrst traversal, the
nodes are visited level-by-level starting at the root and moving down,
visiting the nodes at each level from left to right (see Figure 6.4). This is
similar to the way that we would read a page of English text. Breadth-ﬁrst
traversal is implemented using a queue, q, that initially contains only the
root, r. At each step, we extract the next node, u, from q, process u and
add u.left and u.right (if they are non-nil) to q:
BinaryTree
void bfTraverse() {
Queue<Node> q = new LinkedList<Node>();
if (r != nil) q.add(r);
while (!q.isEmpty()) {
Node u = q.remove();
if (u.left != nil) q.add(u.left);
if (u.right != nil) q.add(u.right);
}
}

§6.2
Binary Trees
6.2
BinarySearchTree: An Unbalanced Binary Search
Tree
A BinarySearchTree is a special kind of binary tree in which each node,
u, also stores a data value, u.x, from some total order. The data values in a
binary search tree obey the binary search tree property: For a node, u, every
data value stored in the subtree rooted at u.left is less than u.x and every
data value stored in the subtree rooted at u.right is greater than u.x. An
example of a BinarySearchTree is shown in Figure 6.5.
6.2.1
Searching
The binary search tree property is extremely useful because it allows us
to quickly locate a value, x, in a binary search tree. To do this we start
searching for x at the root, r. When examining a node, u, there are three
cases:
1. If x < u.x, then the search proceeds to u.left;
2. If x > u.x, then the search proceeds to u.right;
3. If x = u.x, then we have found the node u containing x.
The search terminates when Case 3 occurs or when u = nil. In the former
case, we found x. In the latter case, we conclude that x is not in the binary

BinarySearchTree: An Unbalanced Binary Search Tree
§6.2
search tree.
BinarySearchTree
T findEQ(T x) {
Node u = r;
while (u != nil) {
int comp = compare(x, u.x);
if (comp < 0)
u = u.left;
else if (comp > 0)
u = u.right;
else
return u.x;
}
return null;
}
Two examples of searches in a binary search tree are shown in Fig-
ure 6.6. As the second example shows, even if we don’t ﬁnd x in the tree,
we still gain some valuable information. If we look at the last node, u, at
which Case 1 occurred, we see that u.x is the smallest value in the tree that
is greater than x. Similarly, the last node at which Case 2 occurred con-
tains the largest value in the tree that is less than x. Therefore, by keeping
track of the last node, z, at which Case 1 occurs, a BinarySearchTree can
implement the find(x) operation that returns the smallest value stored in
the tree that is greater than or equal to x:
BinarySearchTree
T find(T x) {
Node w = r, z = nil;
while (w != nil) {
int comp = compare(x, w.x);
if (comp < 0) {
z = w;
w = w.left;
} else if (comp > 0) {
w = w.right;
} else {
return w.x;
}

§6.2
Binary Trees
(a)
(b)
search (for 10) in a binary search tree.
}
return z == nil ? null : z.x;
}
6.2.2
Addition
To add a new value, x, to a BinarySearchTree, we ﬁrst search for x. If we
ﬁnd it, then there is no need to insert it. Otherwise, we store x at a leaf
child of the last node, p, encountered during the search for x. Whether the
new node is the left or right child of p depends on the result of comparing
x and p.x.
BinarySearchTree
boolean add(T x) {
Node p = findLast(x);
return addChild(p, newNode(x));
}
BinarySearchTree
Node findLast(T x) {
Node w = r, prev = nil;
while (w != nil) {

BinarySearchTree: An Unbalanced Binary Search Tree
§6.2
prev = w;
int comp = compare(x, w.x);
if (comp < 0) {
w = w.left;
} else if (comp > 0) {
w = w.right;
} else {
return w;
}
}
return prev;
}
BinarySearchTree
boolean addChild(Node p, Node u) {
if (p == nil) {
r = u;
// inserting into empty tree
} else {
int comp = compare(u.x, p.x);
if (comp < 0) {
p.left = u;
} else if (comp > 0) {
p.right = u;
} else {
return false;
// u.x is already in the tree
}
u.parent = p;
}
n++;
return true;
}
An example is shown in Figure 6.7. The most time-consuming part
of this process is the initial search for x, which takes an amount of time
proportional to the height of the newly added node u. In the worst case,
this is equal to the height of the BinarySearchTree.

§6.2
Binary Trees
8.5
6.2.3
Removal
Deleting a value stored in a node, u, of a BinarySearchTree is a little
more diﬃcult. If u is a leaf, then we can just detach u from its parent.
Even better: If u has only one child, then we can splice u from the tree by
having u.parent adopt u’s child (see Figure 6.8):
BinarySearchTree
void splice(Node u) {
Node s, p;
if (u.left != nil) {
s = u.left;
} else {
s = u.right;
}
if (u == r) {
r = s;
p = nil;
} else {
p = u.parent;
if (p.left == u) {
p.left = s;
} else {
p.right = s;
}
}
if (s != nil) {

BinarySearchTree: An Unbalanced Binary Search Tree
§6.2
s.parent = p;
}
n--;
}
Things get tricky, though, when u has two children. In this case, the
simplest thing to do is to ﬁnd a node, w, that has less than two children
and such that w.x can replace u.x. To maintain the binary search tree
property, the value w.x should be close to the value of u.x. For example,
choosing w such that w.x is the smallest value greater than u.x will work.
Finding the node w is easy; it is the smallest value in the subtree rooted at
u.right. This node can be easily removed because it has no left child (see
BinarySearchTree
void remove(Node u) {
if (u.left == nil || u.right == nil) {
splice(u);
} else {
Node w = u.right;
while (w.left != nil)
w = w.left;
u.x = w.x;
splice(w);
}
}

§6.2
Binary Trees
replacing u’s value with the smallest value in the right subtree of u.
6.2.4
Summary
The find(x), add(x), and remove(x) operations in a BinarySearchTree
each involve following a path from the root of the tree to some node in
the tree. Without knowing more about the shape of the tree it is diﬃcult
to say much about the length of this path, except that it is less than n,
the number of nodes in the tree. The following (unimpressive) theorem
summarizes the performance of the BinarySearchTree data structure:
Theorem 6.1. BinarySearchTree implements the SSet interface and sup-
ports the operations add(x), remove(x), and find(x) in O(n) time per opera-
tion.
Theorem 6.1 compares poorly with Theorem 4.1, which shows that the
SkiplistSSet structure can implement the SSet interface with O(logn)
expected time per operation. The problem with the BinarySearchTree
structure is that it can become unbalanced. Instead of looking like the
tree in Figure 6.5 it can look like a long chain of n nodes, all but the last
having exactly one child.
There are a number of ways of avoiding unbalanced binary search
trees, all of which lead to data structures that have O(logn) time opera-
tions. In Chapter 7 we show how O(logn) expected time operations can
be achieved with randomization. In Chapter 8 we show how O(logn)
amortized time operations can be achieved with partial rebuilding opera-
tions. In Chapter 9 we show how O(logn) worst-case time operations can
be achieved by simulating a tree that is not binary: one in which nodes
can have up to four children.

Discussion and Exercises
§6.3
6.3
Discussion and Exercises
Binary trees have been used to model relationships for thousands of years.
One reason for this is that binary trees naturally model (pedigree) family
trees. These are the family trees in which the root is a person, the left
and right children are the person’s parents, and so on, recursively. In
more recent centuries binary trees have also been used to model species
trees in biology, where the leaves of the tree represent extant species and
the internal nodes of the tree represent speciation events in which two
populations of a single species evolve into two separate species.
Binary search trees appear to have been discovered independently by
several groups in the 1950s [48, Section 6.2.2]. Further references to spe-
ciﬁc kinds of binary search trees are provided in subsequent chapters.
When implementing a binary tree from scratch, there are several de-
sign decisions to be made. One of these is the question of whether or
not each node stores a pointer to its parent. If most of the operations
simply follow a root-to-leaf path, then parent pointers are unnecessary,
waste space, and are a potential source of coding errors. On the other
hand, the lack of parent pointers means that tree traversals must be done
recursively or with the use of an explicit stack. Some other methods (like
inserting or deleting into some kinds of balanced binary search trees) are
also complicated by the lack of parent pointers.
Another design decision is concerned with how to store the parent,
left child, and right child pointers at a node. In the implementation given
here, these pointers are stored as separate variables. Another option is to
store them in an array, p, of length 3, so that u.p[0] is the left child of u,
u.p[1] is the right child of u, and u.p[2] is the parent of u. Using an array
this way means that some sequences of if statements can be simpliﬁed
into algebraic expressions.
An example of such a simpliﬁcation occurs during tree traversal. If a
traversal arrives at a node u from u.p[i], then the next node in the traver-
sal is u.p[(i + 1) mod 3]. Similar examples occur when there is left-right
symmetry. For example, the sibling of u.p[i] is u.p[(i + 1) mod 2]. This
trick works whether u.p[i] is a left child (i = 0) or a right child (i = 1)
of u. In some cases this means that some complicated code that would
otherwise need to have both a left version and right version can be writ-

§6.3
Binary Trees
ten only once. See the methods rotateLeft(u) and rotateRight(u) on
page 163 for an example.
Exercise 6.1. Prove that a binary tree having n ≥1 nodes has n −1 edges.
Exercise 6.2. Prove that a binary tree having n ≥1 real nodes has n + 1
external nodes.
Exercise 6.3. Prove that, if a binary tree, T , has at least one leaf, then
either (a) T ’s root has at most one child or (b) T has more than one leaf.
Exercise 6.4. Implement a non-recursive method, size2(u), that com-
putes the size of the subtree rooted at node u.
Exercise 6.5. Write a non-recursive method, height2(u), that computes
the height of node u in a BinaryTree.
Exercise 6.6. A binary tree is size-balanced if, for every node u, the size
of the subtrees rooted at u.left and u.right diﬀer by at most one. Write
a recursive method, isBalanced(), that tests if a binary tree is balanced.
Your method should run in O(n) time. (Be sure to test your code on some
large trees with diﬀerent shapes; it is easy to write a method that takes
much longer than O(n) time.)
A pre-order traversal of a binary tree is a traversal that visits each node,
u, before any of its children. An in-order traversal visits u after visiting
all the nodes in u’s left subtree but before visiting any of the nodes in u’s
right subtree. A post-order traversal visits u only after visiting all other
nodes in u’s subtree. The pre/in/post-order numbering of a tree labels
the nodes of a tree with the integers 0,...,n −1 in the order that they
are encountered by a pre/in/post-order traversal. See Figure 6.10 for an
example.
Exercise 6.7. Create a subclass of BinaryTree whose nodes have ﬁelds
for storing pre-order, post-order, and in-order numbers. Write recursive
methods preOrderNumber(), inOrderNumber(), and postOrderNumbers()
that assign these numbers correctly. These methods should each run in
O(n) time.

Discussion and Exercises
§6.3

§6.3
Binary Trees
Exercise 6.8. Implement the non-recursive functions nextPreOrder(u),
nextInOrder(u), and nextPostOrder(u) that return the node that follows
u in a pre-order, in-order, or post-order traversal, respectively. These
functions should take amortized constant time; if we start at any node
u and repeatedly call one of these functions and assign the return value
to u until u = null, then the cost of all these calls should be O(n).
Exercise 6.9. Suppose we are given a binary tree with pre-, post-, and
in-order numbers assigned to the nodes. Show how these numbers can be
used to answer each of the following questions in constant time:
1. Given a node u, determine the size of the subtree rooted at u.
2. Given a node u, determine the depth of u.
3. Given two nodes u and w, determine if u is an ancestor of w
Exercise 6.10. Suppose you are given a list of nodes with pre-order and
in-order numbers assigned. Prove that there is at most one possible tree
with this pre-order/in-order numbering and show how to construct it.
Exercise 6.11. Show that the shape of any binary tree on n nodes can
be represented using at most 2(n −1) bits. (Hint: think about recording
what happens during a traversal and then playing back that recording to
reconstruct the tree.)
Exercise 6.12. Illustrate what happens when we add the values 3.5 and
then 4.5 to the binary search tree in Figure 6.5.
Exercise 6.13. Illustrate what happens when we remove the values 3 and
then 5 from the binary search tree in Figure 6.5.
Exercise 6.14. Implement a BinarySearchTree method, getLE(x), that
returns a list of all items in the tree that are less than or equal to x. The
running time of your method should be O(n′ + h) where n′ is the number
of items less than or equal to x and h is the height of the tree.
Exercise 6.15. Describe how to add the elements {1,...,n} to an initially
empty BinarySearchTree in such a way that the resulting tree has height
n −1. How many ways are there to do this?

Discussion and Exercises
§6.3
Exercise 6.16. If we have some BinarySearchTree and perform the op-
erations add(x) followed by remove(x) (with the same value of x) do we
necessarily return to the original tree?
Exercise 6.17. Can a remove(x) operation increase the height of any node
in a BinarySearchTree? If so, by how much?
Exercise 6.18. Can an add(x) operation increase the height of any node
in a BinarySearchTree? Can it increase the height of the tree? If so, by
how much?
Exercise 6.19. Design and implement a version of BinarySearchTree
in which each node, u, maintains values u.size (the size of the subtree
rooted at u), u.depth (the depth of u), and u.height (the height of the
subtree rooted at u).
These values should be maintained, even during calls to the add(x)
and remove(x) operations, but this should not increase the cost of these
operations by more than a constant factor.

Chapter 7
Random Binary Search Trees
In this chapter, we present a binary search tree structure that uses ran-
domization to achieve O(logn) expected time for all operations.
7.1
Random Binary Search Trees
Consider the two binary search trees shown in Figure 7.1, each of which
has n = 15 nodes. The one on the left is a list and the other is a perfectly
balanced binary search tree. The one on the left has a height of n −1 = 14
and the one on the right has a height of three.
Imagine how these two trees could have been constructed. The one on
the left occurs if we start with an empty BinarySearchTree and add the
sequence
⟨0,1,2,3,4,5,6,7,8,9,10,11,12,13,14⟩.
No other sequence of additions will create this tree (as you can prove by
induction on n). On the other hand, the tree on the right can be created
by the sequence
⟨7,3,11,1,5,9,13,0,2,4,6,8,10,12,14⟩.
Other sequences work as well, including
⟨7,3,1,5,0,2,4,6,11,9,13,8,10,12,14⟩,
and
⟨7,3,1,11,5,0,2,4,6,9,13,8,10,12,14⟩.

§7.1
Random Binary Search Trees
...
In fact, there are 21,964,800 addition sequences that generate the tree on
the right and only one that generates the tree on the left.
The above example gives some anecdotal evidence that, if we choose a
random permutation of 0,...,14, and add it into a binary search tree, then
we are more likely to get a very balanced tree (the right side of Figure 7.1)
than we are to get a very unbalanced tree (the left side of Figure 7.1).
We can formalize this notion by studying random binary search trees.
A random binary search tree of size n is obtained in the following way: Take
a random permutation, x0,...,xn−1, of the integers 0,...,n −1 and add its
elements, one by one, into a BinarySearchTree. By random permutation
we mean that each of the possible n! permutations (orderings) of 0,...,n−1
is equally likely, so that the probability of obtaining any particular per-
mutation is 1/n!.
Note that the values 0,...,n−1 could be replaced by any ordered set of
n elements without changing any of the properties of the random binary
search tree. The element x ∈{0,...,n −1} is simply standing in for the
element of rank x in an ordered set of size n.
Before we can present our main result about random binary search
trees, we must take some time for a short digression to discuss a type of
number that comes up frequently when studying randomized structures.
For a non-negative integer, k, the k-th harmonic number, denoted Hk, is

Random Binary Search Trees
§7.1
1/2
1/3
1/k
...
k
...
f (x) = 1/x
1/2
1/3
1/k
...
k
...
i=1 1/i is upper- and lower-bounded
by two integrals. The value of these integrals is given by the area of the shaded
region, while the value of Hk is given by the area of the rectangles.
deﬁned as
Hk = 1 + 1/2 + 1/3 + ··· + 1/k .
The harmonic number Hk has no simple closed form, but it is very closely
related to the natural logarithm of k. In particular,
lnk < Hk ≤lnk + 1 .
Readers who have studied calculus might notice that this is because the
integral
R k
1(1/x)dx = lnk. Keeping in mind that an integral can be in-
terpreted as the area between a curve and the x-axis, the value of Hk
can be lower-bounded by the integral
R k
1(1/x)dx and upper-bounded by
1 +
R k
1(1/x)dx. (See Figure 7.2 for a graphical explanation.)
Lemma 7.1. In a random binary search tree of size n, the following statements
hold:
1. For any x ∈{0,...,n −1}, the expected length of the search path for x is
Hx+1 + Hn−x −O(1).1
2. For any x ∈(−1,n) \ {0,...,n −1}, the expected length of the search path
for x is H⌈x⌉+ Hn−⌈x⌉.
1The expressions x+1 and n−x can be interpreted respectively as the number of elements
in the tree less than or equal to x and the number of elements in the tree greater than or
equal to x.

§7.1
Random Binary Search Trees
We will prove Lemma 7.1 in the next section. For now, consider what
the two parts of Lemma 7.1 tell us. The ﬁrst part tells us that if we search
for an element in a tree of size n, then the expected length of the search
path is at most 2lnn+O(1). The second part tells us the same thing about
searching for a value not stored in the tree. When we compare the two
parts of the lemma, we see that it is only slightly faster to search for some-
thing that is in the tree compared to something that is not.
7.1.1
Proof of Lemma 7.1
The key observation needed to prove Lemma 7.1 is the following: The
search path for a value x in the open interval (−1,n) in a random binary
search tree, T , contains the node with key i < x if, and only if, in the
random permutation used to create T , i appears before any of {i + 1,i +
2,...,⌊x⌋}.
To see this, refer to Figure 7.3 and notice that until some value in
{i,i + 1,...,⌊x⌋} is added, the search paths for each value in the open in-
terval (i −1,⌊x⌋+ 1) are identical. (Remember that for two values to have
diﬀerent search paths, there must be some element in the tree that com-
pares diﬀerently with them.) Let j be the ﬁrst element in {i,i+1,...,⌊x⌋} to
appear in the random permutation. Notice that j is now and will always
be on the search path for x. If j , i then the node uj containing j is created
before the node ui that contains i. Later, when i is added, it will be added
to the subtree rooted at uj.left, since i < j. On the other hand, the search
path for x will never visit this subtree because it will proceed to uj.right
after visiting uj.
Similarly, for i > x, i appears in the search path for x if and only if
i appears before any of {⌈x⌉,⌈x⌉+ 1,...,i −1} in the random permutation
used to create T .
Notice that, if we start with a random permutation of {0,...,n}, then
the subsequences containing only {i,i +1,...,⌊x⌋} and {⌈x⌉,⌈x⌉+1,...,i −1}
are also random permutations of their respective elements. Each element,
then, in the subsets {i,i+1,...,⌊x⌋} and {⌈x⌉,⌈x⌉+1,...,i−1} is equally likely
to appear before any other in its subset in the random permutation used

Random Binary Search Trees
§7.1
...,i,...,j −1
j + 1,...,⌊x⌋,...
j
element among {i,i + 1,...,⌊x⌋} added to the tree.
to create T . So we have
Pr{i is on the search path for x} =
(
1/(⌊x⌋−i + 1)
if i < x
1/(i −⌈x⌉+ 1)
if i > x
.
With this observation, the proof of Lemma 7.1 involves some simple
calculations with harmonic numbers:
Proof of Lemma 7.1. Let Ii be the indicator random variable that is equal
to one when i appears on the search path for x and zero otherwise. Then
the length of the search path is given by
X
i∈{0,...,n−1}\{x}
Ii
so, if x ∈{0,...,n −1}, the expected length of the search path is given by

§7.1
Random Binary Search Trees
x −1 x x + 1
n −1
x+1
x
n−x
···
···
···
···
i
Pr{Ii = 1}
(a)
⌊x⌋⌈x⌉
n −1
⌊x⌋+1
⌊x⌋
n−⌊x⌋
···
···
···
···
i
Pr{Ii = 1}
(b)
(a) x is an integer and (b) when x is not an integer.
(see Figure 7.4.a)
E


x−1
X
i=0
Ii +
n−1
X
i=x+1
Ii

=
x−1
X
i=0
E[Ii] +
n−1
X
i=x+1
E[Ii]
=
x−1
X
i=0
1/(⌊x⌋−i + 1) +
n−1
X
i=x+1
1/(i −⌈x⌉+ 1)
=
x−1
X
i=0
1/(x −i + 1) +
n−1
X
i=x+1
1/(i −x + 1)
= 1
2 + 1
3 + ··· +
x + 1
+ 1
2 + 1
3 + ··· +
n −x
= Hx+1 + Hn−x −2 .
The corresponding calculations for a search value x ∈(−1,n) \ {0,...,n −1}
are almost identical (see Figure 7.4.b).
7.1.2
Summary
The following theorem summarizes the performance of a random binary
search tree:

Treap: A Randomized Binary Search Tree
§7.2
Theorem 7.1. A random binary search tree can be constructed in O(nlogn)
time. In a random binary search tree, the find(x) operation takes O(logn)
expected time.
We should emphasize again that the expectation in Theorem 7.1 is
with respect to the random permutation used to create the random binary
search tree. In particular, it does not depend on a random choice of x; it
is true for every value of x.
7.2
Treap: A Randomized Binary Search Tree
The problem with random binary search trees is, of course, that they
are not dynamic. They don’t support the add(x) or remove(x) operations
needed to implement the SSet interface. In this section we describe a
data structure called a Treap that uses Lemma 7.1 to implement the SSet
interface.2
A node in a Treap is like a node in a BinarySearchTree in that it has
a data value, x, but it also contains a unique numerical priority, p, that is
assigned at random:
Treap
class Node<T> extends BSTNode<Node<T>,T> {
int p;
}
In addition to being a binary search tree, the nodes in a Treap also
obey the heap property:
• (Heap Property) At every node u, except the root, u.parent.p < u.p.
In other words, each node has a priority smaller than that of its two chil-
dren. An example is shown in Figure 7.5.
The heap and binary search tree conditions together ensure that, once
the key (x) and priority (p) for each node are deﬁned, the shape of the
Treap is completely determined. The heap property tells us that the node
2The names Treap comes from the fact that this data structure is simultaneously a binary
search tree (Section 6.2) and a heap (Chapter 10).

§7.2
Random Binary Search Trees
6,42
0,9
1,6
2,99
3,1
5,11
4,14
7,22
9,17
8,49
is illustrated as a box containing u.x,u.p.
with minimum priority has to be the root, r, of the Treap. The binary
search tree property tells us that all nodes with keys smaller than r.x are
stored in the subtree rooted at r.left and all nodes with keys larger than
r.x are stored in the subtree rooted at r.right.
The important point about the priority values in a Treap is that they
are unique and assigned at random. Because of this, there are two equiv-
alent ways we can think about a Treap. As deﬁned above, a Treap obeys
the heap and binary search tree properties. Alternatively, we can think
of a Treap as a BinarySearchTree whose nodes were added in increasing
order of priority. For example, the Treap in Figure 7.5 can be obtained by
adding the sequence of (x,p) values
⟨(3,1),(1,6),(0,9),(5,11),(4,14),(9,17),(7,22),(6,42),(8,49),(2,99)⟩
into a BinarySearchTree.
Since the priorities are chosen randomly, this is equivalent to taking a
random permutation of the keys—in this case the permutation is
⟨3,1,0,5,9,4,7,6,8,2⟩
—and adding these to a BinarySearchTree.
But this means that the
shape of a treap is identical to that of a random binary search tree. In

Treap: A Randomized Binary Search Tree
§7.2
particular, if we replace each key x by its rank,3 then Lemma 7.1 applies.
Restating Lemma 7.1 in terms of Treaps, we have:
Lemma 7.2. In a Treap that stores a set S of n keys, the following statements
hold:
1. For any x ∈S, the expected length of the search path for x is Hr(x)+1 +
Hn−r(x) −O(1).
2. For any x < S, the expected length of the search path for x is Hr(x) +
Hn−r(x).
Here, r(x) denotes the rank of x in the set S ∪{x}.
Again, we emphasize that the expectation in Lemma 7.2 is taken over
the random choices of the priorities for each node. It does not require any
assumptions about the randomness in the keys.
Lemma 7.2 tells us that Treaps can implement the find(x) operation
eﬃciently. However, the real beneﬁt of a Treap is that it can support the
add(x) and delete(x) operations. To do this, it needs to perform rotations
in order to maintain the heap property. Refer to Figure 7.6. A rotation
in a binary search tree is a local modiﬁcation that takes a parent u of a
node w and makes w the parent of u, while preserving the binary search
tree property. Rotations come in two ﬂavours: left or right depending on
whether w is a right or left child of u, respectively.
The code that implements this has to handle these two possibilities
and be careful of a boundary case (when u is the root), so the actual code
is a little longer than Figure 7.6 would lead a reader to believe:
BinarySearchTree
void rotateLeft(Node u) {
Node w = u.right;
w.parent = u.parent;
if (w.parent != nil) {
if (w.parent.left == u) {
w.parent.left = w;
} else {
3The rank of an element x in a set S of elements is the number of elements in S that are
less than x.

§7.2
Random Binary Search Trees
rotateRight(u) ⇒
⇐rotateLeft(w)
A
B
C
w
u
A
B
C
u
w
w.parent.right = w;
}
}
u.right = w.left;
if (u.right != nil) {
u.right.parent = u;
}
u.parent = w;
w.left = u;
if (u == r) { r = w; r.parent = nil; }
}
void rotateRight(Node u) {
Node w = u.left;
w.parent = u.parent;
if (w.parent != nil) {
if (w.parent.left == u) {
w.parent.left = w;
} else {
w.parent.right = w;
}
}
u.left = w.right;
if (u.left != nil) {
u.left.parent = u;
}
u.parent = w;
w.right = u;

Treap: A Randomized Binary Search Tree
§7.2
if (u == r) { r = w; r.parent = nil; }
}
In terms of the Treap data structure, the most important property of
a rotation is that the depth of w decreases by one while the depth of u
increases by one.
Using rotations, we can implement the add(x) operation as follows:
We create a new node, u, assign u.x = x, and pick a random value for u.p.
Next we add u using the usual add(x) algorithm for a BinarySearchTree,
so that u is now a leaf of the Treap. At this point, our Treap satisﬁes
the binary search tree property, but not necessarily the heap property. In
particular, it may be the case that u.parent.p > u.p. If this is the case, then
we perform a rotation at node w=u.parent so that u becomes the parent of
w. If u continues to violate the heap property, we will have to repeat this,
decreasing u’s depth by one every time, until u either becomes the root or
u.parent.p < u.p.
Treap
boolean add(T x) {
Node<T> u = newNode();
u.x = x;
u.p = rand.nextInt();
if (super.add(u)) {
bubbleUp(u);
return true;
}
return false;
}
void bubbleUp(Node<T> u) {
while (u.parent != nil && u.parent.p > u.p) {
if (u.parent.right == u) {
rotateLeft(u.parent);
} else {
rotateRight(u.parent);
}
}
if (u.parent == nil) {
r = u;
}

§7.2
Random Binary Search Trees
}
An example of an add(x) operation is shown in Figure 7.7.
The running time of the add(x) operation is given by the time it takes
to follow the search path for x plus the number of rotations performed
to move the newly-added node, u, up to its correct location in the Treap.
By Lemma 7.2, the expected length of the search path is at most 2lnn +
O(1). Furthermore, each rotation decreases the depth of u. This stops if
u becomes the root, so the expected number of rotations cannot exceed
the expected length of the search path. Therefore, the expected running
time of the add(x) operation in a Treap is O(logn). (Exercise 7.5 asks
you to show that the expected number of rotations performed during an
addition is actually only O(1).)
The remove(x) operation in a Treap is the opposite of the add(x) op-
eration. We search for the node, u, containing x, then perform rotations
to move u downwards until it becomes a leaf, and then we splice u from
the Treap. Notice that, to move u downwards, we can perform either a
left or right rotation at u, which will replace u with u.right or u.left,
respectively. The choice is made by the ﬁrst of the following that apply:
1. If u.left and u.right are both null, then u is a leaf and no rotation
is performed.
2. If u.left (or u.right) is null, then perform a right (or left, respec-
tively) rotation at u.
3. If u.left.p < u.right.p (or u.left.p > u.right.p), then perform a
right rotation (or left rotation, respectively) at u.
These three rules ensure that the Treap doesn’t become disconnected and
that the heap property is restored once u is removed.
Treap
boolean remove(T x) {
Node<T> u = findLast(x);
if (u != nil && compare(u.x, x) == 0) {
trickleDown(u);
splice(u);
return true;

Treap: A Randomized Binary Search Tree
§7.2
6,42
0,9
1,6
2,99
3,1
5,11
4,14
7,22
9,14
8,49
1.5,4
6,42
0,9
1,6
2,99
3,1
5,11
4,14
7,22
9,14
8,49
1.5,4
6,42
0,9
1,6
2,99
3,1
5,11
4,14
7,22
9,14
8,49
1.5,4

§7.2
Random Binary Search Trees
}
return false;
}
void trickleDown(Node<T> u) {
while (u.left != nil || u.right != nil) {
if (u.left == nil) {
rotateLeft(u);
} else if (u.right == nil) {
rotateRight(u);
} else if (u.left.p < u.right.p) {
rotateRight(u);
} else {
rotateLeft(u);
}
if (r == u) {
r = u.parent;
}
}
}
An example of the remove(x) operation is shown in Figure 7.8.
The trick to analyze the running time of the remove(x) operation is to
notice that this operation reverses the add(x) operation. In particular, if
we were to reinsert x, using the same priority u.p, then the add(x) opera-
tion would do exactly the same number of rotations and would restore the
Treap to exactly the same state it was in before the remove(x) operation
took place. (Reading from bottom-to-top, Figure 7.8 illustrates the addi-
tion of the value 9 into a Treap.) This means that the expected running
time of the remove(x) on a Treap of size n is proportional to the expected
running time of the add(x) operation on a Treap of size n−1. We conclude
that the expected running time of remove(x) is O(logn).
7.2.1
Summary
The following theorem summarizes the performance of the Treap data
structure:
Theorem 7.2. A Treap implements the SSet interface. A Treap supports
the operations add(x), remove(x), and find(x) in O(logn) expected time per

Treap: A Randomized Binary Search Tree
§7.2
6,42
0,9
1,6
2,99
3,1
5,11
4,14
7,22
9,17
8,49
6,42
0,9
1,6
2,99
3,1
5,11
4,14
7,22
9,17
8,49
6,42
0,9
1,6
2,99
3,1
5,11
4,14
7,22
9,17
8,49
6,42
0,9
1,6
2,99
3,1
5,11
4,14
7,22
8,49

§7.3
Random Binary Search Trees
operation.
It is worth comparing the Treap data structure to the SkiplistSSet
data structure. Both implement the SSet operations in O(logn) expected
time per operation. In both data structures, add(x) and remove(x) involve
a search and then a constant number of pointer changes (see Exercise 7.5
below). Thus, for both these structures, the expected length of the search
path is the critical value in assessing their performance. In a SkiplistS-
Set, the expected length of a search path is
2logn + O(1) ,
In a Treap, the expected length of a search path is
2lnn + O(1) ≈1.386logn + O(1) .
Thus, the search paths in a Treap are considerably shorter and this trans-
lates into noticeably faster operations on Treaps than Skiplists. Exer-
cise 4.7 in Chapter 4 shows how the expected length of the search path in
a Skiplist can be reduced to
elnn + O(1) ≈1.884logn + O(1)
by using biased coin tosses. Even with this optimization, the expected
length of search paths in a SkiplistSSet is noticeably longer than in a
Treap.
7.3
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
1. With probability 1/(size(u)+1), the value x is added the usual way,
as a leaf, and rotations are then done to bring x up to the root of this
subtree.
2. Otherwise (with probability 1 −1/(size(u) + 1)), the value x is re-
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
it becomes a leaf, at which point we can splice it from the tree. The choice
of whether to perform a left or right rotation at each step is randomized.
1. With probability u.left.size/(u.size −1), we perform a right rota-
tion at u, making u.left the root of the subtree that was formerly
rooted at u.
2. With probability u.right.size/(u.size −1), we perform a left rota-
tion at u, making u.right the root of the subtree that was formerly
rooted at u.
Again, we can easily verify that these are exactly the same probabilities
that the removal algorithm in a Treap will perform a left or right rotation
of u.
Randomized binary search trees have the disadvantage, compared to
treaps, that when adding and removing elements they make many ran-
dom choices, and they must maintain the sizes of subtrees. One advan-
tage of randomized binary search trees over treaps is that subtree sizes
can serve another useful purpose, namely to provide access by rank in
O(logn) expected time (see Exercise 7.10). In comparison, the random
priorities stored in treap nodes have no use other than keeping the treap
balanced.
Exercise 7.1. Illustrate the addition of 4.5 (with priority 7) and then 7.5
(with priority 20) on the Treap in Figure 7.5.
Exercise 7.2. Illustrate the removal of 5 and then 7 on the Treap in Fig-
ure 7.5.
Exercise 7.3. Prove the assertion that there are 21,964,800 sequences
that generate the tree on the right hand side of Figure 7.1. (Hint: Give a
recursive formula for the number of sequences that generate a complete
binary tree of height h and evaluate this formula for h = 3.)
Exercise 7.4. Design and implement the permute(a) method that takes as
input an array, a, that contains n distinct values and randomly permutes
a. The method should run in O(n) time and you should prove that each
of the n! possible permutations of a is equally probable.

Discussion and Exercises
§7.3
Exercise 7.5. Use both parts of Lemma 7.2 to prove that the expected
number of rotations performed by an add(x) operation (and hence also a
remove(x) operation) is O(1).
Exercise 7.6. Modify the Treap implementation given here so that it does
not explicitly store priorities. Instead, it should simulate them by hashing
the hashCode() of each node.
Exercise 7.7. Suppose that a binary search tree stores, at each node, u,
the height, u.height, of the subtree rooted at u, and the size, u.size of the
subtree rooted at u.
1. Show how, if we perform a left or right rotation at u, then these two
quantities can be updated, in constant time, for all nodes aﬀected
by the rotation.
2. Explain why the same result is not possible if we try to also store
the depth, u.depth, of each node u.
Exercise 7.8. Design and implement an algorithm that constructs a Treap
from a sorted array, a, of n elements. This method should run in O(n)
worst-case time and should construct a Treap that is indistinguishable
from one in which the elements of a were added one at a time using the
add(x) method.
Exercise 7.9. This exercise works out the details of how one can eﬃ-
ciently search a Treap given a pointer that is close to the node we are
searching for.
1. Design and implement a Treap implementation in which each node
keeps track of the minimum and maximum values in its subtree.
2. Using this extra information, add a fingerFind(x,u) method that
executes the find(x) operation with the help of a pointer to the node
u (which is hopefully not far from the node that contains x). This
operation should start at u and walk upwards until it reaches a node
w such that w.min ≤x ≤w.max. From that point onwards, it should
perform a standard search for x starting from w. (One can show
that fingerFind(x,u) takes O(1 + logr) time, where r is the number
of elements in the treap whose value is between x and u.x.)

§7.3
Random Binary Search Trees
3. Extend your implementation into a version of a treap that starts
all its find(x) operations from the node most recently found by
find(x).
Exercise 7.10. Design and implement a version of a Treap that includes
a get(i) operation that returns the key with rank i in the Treap. (Hint:
Have each node, u, keep track of the size of the subtree rooted at u.)
Exercise 7.11. Implement a TreapList, an implementation of the List
interface as a treap. Each node in the treap should store a list item, and
an in-order traversal of the treap ﬁnds the items in the same order that
they occur in the list. All the List operations get(i), set(i,x), add(i,x)
and remove(i) should run in O(logn) expected time.
Exercise 7.12. Design and implement a version of a Treap that supports
the split(x) operation. This operation removes all values from the Treap
that are greater than x and returns a second Treap that contains all the
removed values.
Example: the code t2 = t.split(x) removes from t all values greater than
x and returns a new Treap t2 containing all these values. The split(x)
operation should run in O(logn) expected time.
Warning: For this modiﬁcation to work properly and still allow the size()
method to run in constant time, it is necessary to implement the modiﬁ-
cations in Exercise 7.10.
Exercise 7.13. Design and implement a version of a Treap that supports
the absorb(t2) operation, which can be thought of as the inverse of the
split(x) operation. This operation removes all values from the Treap
t2 and adds them to the receiver. This operation presupposes that the
smallest value in t2 is greater than the largest value in the receiver. The
absorb(t2) operation should run in O(logn) expected time.
Exercise 7.14. Implement Martinez’s randomized binary search trees, as
discussed in this section. Compare the performance of your implementa-
tion with that of the Treap implementation.

Chapter 8
Scapegoat Trees
In this chapter, we study a binary search tree data structure, the Scape-
goatTree. This structure is based on the common wisdom that, when
something goes wrong, the ﬁrst thing people tend to do is ﬁnd someone
to blame (the scapegoat). Once blame is ﬁrmly established, we can leave
the scapegoat to ﬁx the problem.
A ScapegoatTree keeps itself balanced by partial rebuilding opera-
tions. During a partial rebuilding operation, an entire subtree is decon-
structed and rebuilt into a perfectly balanced subtree. There are many
ways of rebuilding a subtree rooted at node u into a perfectly balanced
tree. One of the simplest is to traverse u’s subtree, gathering all its nodes
into an array, a, and then to recursively build a balanced subtree using
a. If we let m = a.length/2, then the element a[m] becomes the root of the
new subtree, a[0],...,a[m−1] get stored recursively in the left subtree and
a[m + 1],...,a[a.length −1] get stored recursively in the right subtree.
ScapegoatTree
void rebuild(Node<T> u) {
int ns = size(u);
Node<T> p = u.parent;
Node<T>[] a =
Array.newInstance(Node.class, ns);
packIntoArray(u, a, 0);
if (p == nil) {
r = buildBalanced(a, 0, ns);
r.parent = nil;
} else if (p.right == u) {
p.right = buildBalanced(a, 0, ns);

§8.1
Scapegoat Trees
p.right.parent = p;
} else {
p.left = buildBalanced(a, 0, ns);
p.left.parent = p;
}
}
int packIntoArray(Node<T> u, Node<T>[] a, int i) {
if (u == nil) {
return i;
}
i = packIntoArray(u.left, a, i);
a[i++] = u;
return packIntoArray(u.right, a, i);
}
Node<T> buildBalanced(Node<T>[] a, int i, int ns) {
if (ns == 0)
return nil;
int m = ns / 2;
a[i + m].left = buildBalanced(a, i, m);
if (a[i + m].left != nil)
a[i + m].left.parent = a[i + m];
a[i + m].right = buildBalanced(a, i + m + 1, ns - m - 1);
if (a[i + m].right != nil)
a[i + m].right.parent = a[i + m];
return a[i + m];
}
A call to rebuild(u) takes O(size(u)) time. The resulting subtree has
minimum height; there is no tree of smaller height that has size(u) nodes.
8.1
ScapegoatTree: A Binary Search Tree with Partial
Rebuilding
A ScapegoatTree is a BinarySearchTree that, in addition to keeping
track of the number, n, of nodes in the tree also keeps a counter, q, that
maintains an upper-bound on the number of nodes.
ScapegoatTree
int q;

ScapegoatTree: A Binary Search Tree with Partial Rebuilding
§8.1
At all times, n and q obey the following inequalities:
q/2 ≤n ≤q .
In addition, a ScapegoatTree has logarithmic height; at all times, the
height of the scapegoat tree does not exceed:
log3/2 q ≤log3/2 2n < log3/2 n + 2 .
(8.1)
Even with this constraint, a ScapegoatTree can look surprisingly unbal-
anced. The tree in Figure 8.1 has q = n = 10 and height 5 < log3/2 10 ≈
5.679.
Implementing the find(x) operation in a ScapegoatTree is done us-
ing the standard algorithm for searching in a BinarySearchTree (see Sec-
tion 6.2). This takes time proportional to the height of the tree which, by
(8.1) is O(logn).
To implement the add(x) operation, we ﬁrst increment n and q and
then use the usual algorithm for adding x to a binary search tree; we
search for x and then add a new leaf u with u.x = x. At this point, we may
get lucky and the depth of u might not exceed log3/2 q. If so, then we leave
well enough alone and don’t do anything else.
Unfortunately, it will sometimes happen that depth(u) > log3/2 q. In
this case, we need to reduce the height. This isn’t a big job; there is only

§8.1
Scapegoat Trees
one node, namely u, whose depth exceeds log3/2 q. To ﬁx u, we walk from
u back up to the root looking for a scapegoat, w. The scapegoat, w, is a very
unbalanced node. It has the property that
size(w.child)
size(w)
> 2
3 ,
(8.2)
where w.child is the child of w on the path from the root to u. We’ll very
shortly prove that a scapegoat exists. For now, we can take it for granted.
Once we’ve found the scapegoat w, we completely destroy the subtree
rooted at w and rebuild it into a perfectly balanced binary search tree. We
know, from (8.2), that, even before the addition of u, w’s subtree was not a
complete binary tree. Therefore, when we rebuild w, the height decreases
by at least 1 so that height of the ScapegoatTree is once again at most
log3/2 q.
ScapegoatTree
boolean add(T x) {
// first do basic insertion keeping track of depth
Node<T> u = newNode(x);
int d = addWithDepth(u);
if (d > log32(q)) {
// depth exceeded, find scapegoat
Node<T> w = u.parent;
while (3*size(w) <= 2*size(w.parent))
w = w.parent;
rebuild(w.parent);
}
return d >= 0;
}
If we ignore the cost of ﬁnding the scapegoat w and rebuilding the
subtree rooted at w, then the running time of add(x) is dominated by the
initial search, which takes O(logq) = O(logn) time. We will account for
the cost of ﬁnding the scapegoat and rebuilding using amortized analysis
in the next section.
The implementation of remove(x) in a ScapegoatTree is very simple.
We search for x and remove it using the usual algorithm for removing a
node from a BinarySearchTree. (Note that this can never increase the

ScapegoatTree: A Binary Search Tree with Partial Rebuilding
§8.1
3.5
7 > 2
3.5
lates (8.1) since 6 > log3/2 11 ≈5.914. A scapegoat is found at the node containing
5.
height of the tree.) Next, we decrement n, but leave q unchanged. Finally,
we check if q > 2n and, if so, then we rebuild the entire tree into a perfectly
balanced binary search tree and set q = n.
ScapegoatTree
boolean remove(T x) {
if (super.remove(x)) {
if (2*n < q) {
rebuild(r);
q = n;
}
return true;
}
return false;
}
Again, if we ignore the cost of rebuilding, the running time of the
remove(x) operation is proportional to the height of the tree, and is there-
fore O(logn).

§8.1
Scapegoat Trees
8.1.1
Analysis of Correctness and Running-Time
In this section, we analyze the correctness and amortized running time of
operations on a ScapegoatTree. We ﬁrst prove the correctness by show-
ing that, when the add(x) operation results in a node that violates Condi-
tion (8.1), then we can always ﬁnd a scapegoat:
Lemma 8.1. Let u be a node of depth h > log3/2 q in a ScapegoatTree. Then
there exists a node w on the path from u to the root such that
size(w)
size(parent(w)) > 2/3 .
Proof. Suppose, for the sake of contradiction, that this is not the case, and
size(w)
size(parent(w)) ≤2/3 .
for all nodes w on the path from u to the root. Denote the path from the
root to u as r = u0,...,uh = u. Then, we have size(u0) = n, size(u1) ≤2
3n,
size(u2) ≤4
9n and, more generally,
size(ui) ≤
i
n .
But this gives a contradiction, since size(u) ≥1, hence
1 ≤size(u) ≤
h
n <
log3/2 q
n ≤
log3/2 n
n =
n

n = 1 .
Next, we analyze the parts of the running time that are not yet ac-
counted for. There are two parts: The cost of calls to size(u) when search-
ing for scapegoat nodes, and the cost of calls to rebuild(w) when we ﬁnd
a scapegoat w. The cost of calls to size(u) can be related to the cost of
calls to rebuild(w), as follows:
Lemma 8.2. During a call to add(x) in a ScapegoatTree, the cost of ﬁnding
the scapegoat w and rebuilding the subtree rooted at w is O(size(w)).
Proof. The cost of rebuilding the scapegoat node w, once we ﬁnd it, is
O(size(w)). When searching for the scapegoat node, we call size(u) on a

ScapegoatTree: A Binary Search Tree with Partial Rebuilding
§8.1
sequence of nodes u0,...,uk until we ﬁnd the scapegoat uk = w. However,
since uk is the ﬁrst node in this sequence that is a scapegoat, we know that
size(ui) < 2
3size(ui+1)
for all i ∈{0,...,k −2}. Therefore, the cost of all calls to size(u) is
O


k
X
i=0
size(uk−i)


=
O

size(uk) +
k−1
X
i=0
size(uk−i−1)


=
O

size(uk) +
k−1
X
i=0
i
size(uk)


=
O

size(uk)

1 +
k−1
X
i=0
i



=
O(size(uk)) = O(size(w)) ,
where the last line follows from the fact that the sum is a geometrically
decreasing series.
All that remains is to prove an upper-bound on the cost of all calls to
rebuild(u) during a sequence of m operations:
Lemma 8.3. Starting with an empty ScapegoatTree any sequence of m
add(x) and remove(x) operations causes at most O(mlogm) time to be used
by rebuild(u) operations.
Proof. To prove this, we will use a credit scheme. We imagine that each
node stores a number of credits. Each credit can pay for some constant, c,
units of time spent rebuilding. The scheme gives out a total of O(mlogm)
credits and every call to rebuild(u) is paid for with credits stored at u.
During an insertion or deletion, we give one credit to each node on
the path to the inserted node, or deleted node, u. In this way we hand
out at most log3/2 q ≤log3/2 m credits per operation. During a deletion we
also store an additional credit “on the side.” Thus, in total we give out at
most O(mlogm) credits. All that remains is to show that these credits are
suﬃcient to pay for all calls to rebuild(u).

§8.1
Scapegoat Trees
If we call rebuild(u) during an insertion, it is because u is a scapegoat.
Suppose, without loss of generality, that
size(u.left)
size(u)
> 2
3 .
Using the fact that
size(u) = 1 + size(u.left) + size(u.right)
we deduce that
2size(u.left) > size(u.right)
and therefore
size(u.left) −size(u.right) > 1
2size(u.left) > 1
3size(u) .
Now, the last time a subtree containing u was rebuilt (or when u was
inserted, if a subtree containing u was never rebuilt), we had
size(u.left) −size(u.right) ≤1 .
Therefore, the number of add(x) or remove(x) operations that have af-
fected u.left or u.right since then is at least
3size(u) −1 .
and there are therefore at least this many credits stored at u that are avail-
able to pay for the O(size(u)) time it takes to call rebuild(u).
If we call rebuild(u) during a deletion, it is because q > 2n. In this
case, we have q −n > n credits stored “on the side,” and we use these
to pay for the O(n) time it takes to rebuild the root. This completes the
proof.
8.1.2
Summary
The following theorem summarizes the performance of the Scapegoat-
Tree data structure:

Discussion and Exercises
§8.2
Theorem 8.1. A ScapegoatTree implements the SSet interface. Ignoring
the cost of rebuild(u) operations, a ScapegoatTree supports the operations
add(x), remove(x), and find(x) in O(logn) time per operation.
Furthermore, beginning with an empty ScapegoatTree, any sequence of
m add(x) and remove(x) operations results in a total of O(mlogm) time spent
during all calls to rebuild(u).
8.2
Discussion and Exercises
The term scapegoat tree is due to Galperin and Rivest [33], who deﬁne and
analyze these trees. However, the same structure was discovered earlier
by Andersson [5, 7], who called them general balanced trees since they can
have any shape as long as their height is small.
Experimenting with the ScapegoatTree implementation will reveal
that it is often considerably slower than the other SSet implementations
in this book. This may be somewhat surprising, since height bound of
log3/2 q ≈1.709logn + O(1)
is better than the expected length of a search path in a Skiplist and not
too far from that of a Treap. The implementation could be optimized by
storing the sizes of subtrees explicitly at each node or by reusing already
computed subtree sizes (Exercises 8.5 and 8.6). Even with these optimiza-
tions, there will always be sequences of add(x) and delete(x) operation
for which a ScapegoatTree takes longer than other SSet implementa-
tions.
This gap in performance is due to the fact that, unlike the other SSet
implementations discussed in this book, a ScapegoatTree can spend a lot
of time restructuring itself. Exercise 8.3 asks you to prove that there are
sequences of n operations in which a ScapegoatTree will spend on the or-
der of nlogn time in calls to rebuild(u). This is in contrast to other SSet
implementations discussed in this book, which only make O(n) structural
changes during a sequence of n operations. This is, unfortunately, a nec-
essary consequence of the fact that a ScapegoatTree does all its restruc-
turing by calls to rebuild(u) [20].
Despite their lack of performance, there are applications in which a

§8.2
Scapegoat Trees
ScapegoatTree could be the right choice. This would occur any time
there is additional data associated with nodes that cannot be updated
in constant time when a rotation is performed, but that can be updated
during a rebuild(u) operation. In such cases, the ScapegoatTree and
related structures based on partial rebuilding may work. An example of
such an application is outlined in Exercise 8.11.
Exercise 8.1. Illustrate the addition of the values 1.5 and then 1.6 on the
ScapegoatTree in Figure 8.1.
Exercise 8.2. Illustrate what happens when the sequence 1,5,2,4,3 is
added to an empty ScapegoatTree, and show where the credits described
in the proof of Lemma 8.3 go, and how they are used during this sequence
of additions.
Exercise 8.3. Show that, if we start with an empty ScapegoatTree and
call add(x) for x = 1,2,3,...,n, then the total time spent during calls to
rebuild(u) is at least cnlogn for some constant c > 0.
Exercise 8.4. The ScapegoatTree, as described in this chapter, guaran-
tees that the length of the search path does not exceed log3/2 q.
1. Design, analyze, and implement a modiﬁed version of Scapegoat-
Tree where the length of the search path does not exceed logb q,
where b is a parameter with 1 < b < 2.
2. What does your analysis and/or your experiments say about the
amortized cost of find(x), add(x) and remove(x) as a function of
n and b?
Exercise 8.5. Modify the add(x) method of the ScapegoatTree so that it
does not waste any time recomputing the sizes of subtrees that have al-
ready been computed. This is possible because, by the time the method
wants to compute size(w), it has already computed one of size(w.left)
or size(w.right). Compare the performance of your modiﬁed implemen-
tation with the implementation given here.
Exercise 8.6. Implement a second version of the ScapegoatTree data
structure that explicitly stores and maintains the sizes of the subtree

Discussion and Exercises
§8.2
rooted at each node. Compare the performance of the resulting imple-
mentation with that of the original ScapegoatTree implementation as
well as the implementation from Exercise 8.5.
Exercise 8.7. Reimplement the rebuild(u) method discussed at the be-
ginning of this chapter so that it does not require the use of an array to
store the nodes of the subtree being rebuilt. Instead, it should use re-
cursion to ﬁrst connect the nodes into a linked list and then convert this
linked list into a perfectly balanced binary tree. (There are very elegant
recursive implementations of both steps.)
Exercise 8.8. Analyze and implement a WeightBalancedTree. This is a
tree in which each node u, except the root, maintains the balance invariant
that size(u) ≤(2/3)size(u.parent). The add(x) and remove(x) operations
are identical to the standard BinarySearchTree operations, except that
any time the balance invariant is violated at a node u, the subtree rooted
at u.parent is rebuilt. Your analysis should show that operations on a
WeightBalancedTree run in O(logn) amortized time.
Exercise 8.9. Analyze and implement a CountdownTree. In a Countdown-
Tree each node u keeps a timer u.t. The add(x) and remove(x) opera-
tions are exactly the same as in a standard BinarySearchTree except that,
whenever one of these operations aﬀects u’s subtree, u.t is decremented.
When u.t = 0 the entire subtree rooted at u is rebuilt into a perfectly
balanced binary search tree. When a node u is involved in a rebuilding
operation (either because u is rebuilt or one of u’s ancestors is rebuilt) u.t
is reset to size(u)/3.
Your analysis should show that operations on a CountdownTree run in
O(logn) amortized time. (Hint: First show that each node u satisﬁes some
version of a balance invariant.)
Exercise 8.10. Analyze and implement a DynamiteTree. In a Dynamite-
Tree each node u keeps tracks of the size of the subtree rooted at u in
a variable u.size. The add(x) and remove(x) operations are exactly the
same as in a standard BinarySearchTree except that, whenever one of
these operations aﬀects a node u’s subtree, u explodes with probability
1/u.size. When u explodes, its entire subtree is rebuilt into a perfectly
balanced binary search tree.

§8.2
Scapegoat Trees
Your analysis should show that operations on a DynamiteTree run in
O(logn) expected time.
Exercise 8.11. Design and implement a Sequence data structure that
maintains a sequence (list) of elements. It supports these operations:
• addAfter(e): Add a new element after the element e in the se-
quence. Return the newly added element. (If e is null, the new
element is added at the beginning of the sequence.)
• remove(e): Remove e from the sequence.
• testBefore(e1,e2): return true if and only if e1 comes before e2
in the sequence.
The ﬁrst two operations should run in O(logn) amortized time. The third
operation should run in constant time.
The Sequence data structure can be implemented by storing the ele-
ments in something like a ScapegoatTree, in the same order that they oc-
cur in the sequence. To implement testBefore(e1,e2) in constant time,
each element e is labelled with an integer that encodes the path from the
root to e. In this way, testBefore(e1,e2) can be implemented by com-
paring the labels of e1 and e2.

Chapter 9
Red-Black Trees
In this chapter, we present red-black trees, a version of binary search trees
with logarithmic height. Red-black trees are one of the most widely used
data structures. They appear as the primary search structure in many
library implementations, including the Java Collections Framework and
several implementations of the C++ Standard Template Library. They are
also used within the Linux operating system kernel. There are several
reasons for the popularity of red-black trees:
1. A red-black tree storing n values has height at most 2logn.
2. The add(x) and remove(x) operations on a red-black tree run in
O(logn) worst-case time.
3. The amortized number of rotations performed during an add(x) or
remove(x) operation is constant.
The ﬁrst two of these properties already put red-black trees ahead of
skiplists, treaps, and scapegoat trees. Skiplists and treaps rely on ran-
domization and their O(logn) running times are only expected. Scapegoat
trees have a guaranteed bound on their height, but add(x) and remove(x)
only run in O(logn) amortized time. The third property is just icing on
the cake. It tells us that that the time needed to add or remove an element
x is dwarfed by the time it takes to ﬁnd x.1
However, the nice properties of red-black trees come with a price: im-
plementation complexity. Maintaining a bound of 2logn on the height
1Note that skiplists and treaps also have this property in the expected sense. See Exer-
cises 4.6 and 7.5.

§9.1
Red-Black Trees
is not easy. It requires a careful analysis of a number of cases. We must
ensure that the implementation does exactly the right thing in each case.
One misplaced rotation or change of colour produces a bug that can be
very diﬃcult to understand and track down.
Rather than jumping directly into the implementation of red-black
trees, we will ﬁrst provide some background on a related data structure:
2-4 trees. This will give some insight into how red-black trees were dis-
covered and why eﬃciently maintaining them is even possible.
9.1
2-4 Trees
A 2-4 tree is a rooted tree with the following properties:
Property 9.1 (height). All leaves have the same depth.
Property 9.2 (degree). Every internal node has 2, 3, or 4 children.
An example of a 2-4 tree is shown in Figure 9.1. The properties of 2-4
trees imply that their height is logarithmic in the number of leaves:
Lemma 9.1. A 2-4 tree with n leaves has height at most logn.
Proof. The lower-bound of 2 on the number of children of an internal
node implies that, if the height of a 2-4 tree is h, then it has at least 2h
leaves. In other words,
n ≥2h .
Taking logarithms on both sides of this inequality gives h ≤logn.

2-4 Trees
§9.1
9.1.1
Adding a Leaf
Adding a leaf to a 2-4 tree is easy (see Figure 9.2). If we want to add a
leaf u as the child of some node w on the second-last level, then we simply
make u a child of w. This certainly maintains the height property, but
could violate the degree property; if w had four children prior to adding
u, then w now has ﬁve children. In this case, we split w into two nodes,
w and w’, having two and three children, respectively. But now w’ has no
parent, so we recursively make w’ a child of w’s parent. Again, this may
cause w’s parent to have too many children in which case we split it. This
process goes on until we reach a node that has fewer than four children,
or until we split the root, r, into two nodes r and r′. In the latter case,
we make a new root that has r and r′ as children. This simultaneously
increases the depth of all leaves and so maintains the height property.
Since the height of the 2-4 tree is never more than logn, the process of
adding a leaf ﬁnishes after at most logn steps.
9.1.2
Removing a Leaf
Removing a leaf from a 2-4 tree is a little more tricky (see Figure 9.3). To
remove a leaf u from its parent w, we just remove it. If w had only two
children prior to the removal of u, then w is left with only one child and
violates the degree property.
To correct this, we look at w’s sibling, w′. The node w′ is sure to exist
since w’s parent had at least two children. If w′ has three or four children,
then we take one of these children from w′ and give it to w. Now w has two
children and w′ has two or three children and we are done.
On the other hand, if w′ has only two children, then we merge w and
w′ into a single node, w, that has three children. Next we recursively re-
move w′ from the parent of w′. This process ends when we reach a node,
u, where u or its sibling has more than two children, or when we reach
the root. In the latter case, if the root is left with only one child, then
we delete the root and make its child the new root. Again, this simul-
taneously decreases the height of every leaf and therefore maintains the
height property.
Again, since the height of the tree is never more than logn, the process

§9.1
Red-Black Trees
w
w
u
u
w
w′
w.parent has a degree of less than 4 before the addition.

2-4 Trees
§9.1
u
root because each of u’s ancestors and their siblings have only two children.

§9.2
Red-Black Trees
of removing a leaf ﬁnishes after at most logn steps.
9.2
RedBlackTree: A Simulated 2-4 Tree
A red-black tree is a binary search tree in which each node, u, has a colour
which is either red or black. Red is represented by the value 0 and black
by the value 1.
RedBlackTree
class Node<T> extends BSTNode<Node<T>,T> {
byte colour;
}
Before and after any operation on a red-black tree, the following two
properties are satisﬁed. Each property is deﬁned both in terms of the
colours red and black, and in terms of the numeric values 0 and 1.
Property 9.3 (black-height). There are the same number of black nodes
on every root to leaf path. (The sum of the colours on any root to leaf path
is the same.)
Property 9.4 (no-red-edge). No two red nodes are adjacent. (For any node
u, except the root, u.colour + u.parent.colour ≥1.)
Notice that we can always colour the root, r, of a red-black tree black
without violating either of these two properties, so we will assume that
the root is black, and the algorithms for updating a red-black tree will
maintain this. Another trick that simpliﬁes red-black trees is to treat the
external nodes (represented by nil) as black nodes. This way, every real
node, u, of a red-black tree has exactly two children, each with a well-
deﬁned colour. An example of a red-black tree is shown in Figure 9.4.
9.2.1
Red-Black Trees and 2-4 Trees
At ﬁrst it might seem surprising that a red-black tree can be eﬃciently
updated to maintain the black-height and no-red-edge properties, and
it seems unusual to even consider these as useful properties. However,

RedBlackTree: A Simulated 2-4 Tree
§9.2
red node
black node
nodes are drawn as squares.
red-black trees were designed to be an eﬃcient simulation of 2-4 trees as
binary trees.
Refer to Figure 9.5. Consider any red-black tree, T , having n nodes
and perform the following transformation: Remove each red node u and
connect u’s two children directly to the (black) parent of u. After this
transformation we are left with a tree T ′ having only black nodes.
Every internal node in T ′ has two, three, or four children: A black
node that started out with two black children will still have two black
children after this transformation. A black node that started out with
one red and one black child will have three children after this transfor-
mation. A black node that started out with two red children will have
four children after this transformation. Furthermore, the black-height
property now guarantees that every root-to-leaf path in T ′ has the same
length. In other words, T ′ is a 2-4 tree!
The 2-4 tree T ′ has n + 1 leaves that correspond to the n + 1 external
nodes of the red-black tree. Therefore, this tree has height at most log(n+
1). Now, every root to leaf path in the 2-4 tree corresponds to a path
from the root of the red-black tree T to an external node. The ﬁrst and
last node in this path are black and at most one out of every two internal
nodes is red, so this path has at most log(n + 1) black nodes and at most
log(n + 1) −1 red nodes. Therefore, the longest path from the root to any
internal node in T is at most
2log(n + 1) −2 ≤2logn ,
for any n ≥1. This proves the most important property of red-black trees:

§9.2
Red-Black Trees
Lemma 9.2. The height of red-black tree with n nodes is at most 2logn.
Now that we have seen the relationship between 2-4 trees and red-
black trees, it is not hard to believe that we can eﬃciently maintain a
red-black tree while adding and removing elements.
We have already seen that adding an element in a BinarySearchTree
can be done by adding a new leaf. Therefore, to implement add(x) in a
red-black tree we need a method of simulating splitting a node with ﬁve
children in a 2-4 tree. A 2-4 tree node with ﬁve children is represented
by a black node that has two red children, one of which also has a red
child. We can “split” this node by colouring it red and colouring its two
children black. An example of this is shown in Figure 9.6.
Similarly, implementing remove(x) requires a method of merging two
nodes and borrowing a child from a sibling. Merging two nodes is the in-
verse of a split (shown in Figure 9.6), and involves colouring two (black)
siblings red and colouring their (red) parent black. Borrowing from a sib-
ling is the most complicated of the procedures and involves both rotations
and recolouring nodes.
Of course, during all of this we must still maintain the no-red-edge

RedBlackTree: A Simulated 2-4 Tree
§9.2
w
w
u
w
w′
u
tree. (This simulates the 2-4 tree addition shown in Figure 9.2.)

§9.2
Red-Black Trees
property and the black-height property. While it is no longer surprising
that this can be done, there are a large number of cases that have to be
considered if we try to do a direct simulation of a 2-4 tree by a red-black
tree. At some point, it just becomes simpler to disregard the underlying
2-4 tree and work directly towards maintaining the properties of the red-
black tree.
9.2.2
Left-Leaning Red-Black Trees
No single deﬁnition of red-black trees exists. Rather, there is a family
of structures that manage to maintain the black-height and no-red-edge
properties during add(x) and remove(x) operations. Diﬀerent structures
do this in diﬀerent ways. Here, we implement a data structure that we
call a RedBlackTree. This structure implements a particular variant of
red-black trees that satisﬁes an additional property:
Property 9.5 (left-leaning). At any node u, if u.left is black, then u.right
is black.
Note that the red-black tree shown in Figure 9.4 does not satisfy the
left-leaning property; it is violated by the parent of the red node in the
rightmost path.
The reason for maintaining the left-leaning property is that it reduces
the number of cases encountered when updating the tree during add(x)
and remove(x) operations. In terms of 2-4 trees, it implies that every 2-4
tree has a unique representation: A node of degree two becomes a black
node with two black children. A node of degree three becomes a black
node whose left child is red and whose right child is black. A node of
degree four becomes a black node with two red children.
Before we describe the implementation of add(x) and remove(x) in de-
tail, we ﬁrst present some simple subroutines used by these methods that
are illustrated in Figure 9.7. The ﬁrst two subroutines are for manipulat-
ing colours while preserving the black-height property. The pushBlack(u)
method takes as input a black node u that has two red children and
colours u red and its two children black. The pullBlack(u) method re-
verses this operation:

RedBlackTree: A Simulated 2-4 Tree
§9.2
u
u
pushBlack(u)
⇓
u
u
pullBlack(u)
⇓
flipLeft(u)
⇓
u
u
flipRight(u)
⇓
u
u
RedBlackTree
void pushBlack(Node<T> u) {
u.colour--;
u.left.colour++;
u.right.colour++;
}
void pullBlack(Node<T> u) {
u.colour++;
u.left.colour--;
u.right.colour--;
}
The flipLeft(u) method swaps the colours of u and u.right and then
performs a left rotation at u. This method reverses the colours of these
two nodes as well as their parent-child relationship:
RedBlackTree
void flipLeft(Node<T> u) {
swapColors(u, u.right);
rotateLeft(u);
}
The flipLeft(u) operation is especially useful in restoring the left-
leaning property at a node u that violates it (because u.left is black and
u.right is red). In this special case, we can be assured that this oper-
ation preserves both the black-height and no-red-edge properties. The

§9.2
Red-Black Trees
flipRight(u) operation is symmetric with flipLeft(u), when the roles
of left and right are reversed.
RedBlackTree
void flipRight(Node<T> u) {
swapColors(u, u.left);
rotateRight(u);
}
9.2.3
Addition
To implement add(x) in a RedBlackTree, we perform a standard Binary-
SearchTree insertion to add a new leaf, u, with u.x = x and set u.colour =
red. Note that this does not change the black height of any node, so it
does not violate the black-height property. It may, however, violate the
left-leaning property (if u is the right child of its parent), and it may
violate the no-red-edge property (if u’s parent is red). To restore these
properties, we call the method addFixup(u).
RedBlackTree
boolean add(T x) {
Node<T> u = newNode(x);
u.colour = red;
boolean added = add(u);
if (added)
addFixup(u);
return added;
}
Illustrated in Figure 9.8, the addFixup(u) method takes as input a
node u whose colour is red and which may violate the no-red-edge prop-
erty and/or the left-leaning property. The following discussion is proba-
bly impossible to follow without referring to Figure 9.8 or recreating it on
a piece of paper. Indeed, the reader may wish to study this ﬁgure before
continuing.
If u is the root of the tree, then we can colour u black to restore both
properties. If u’s sibling is also red, then u’s parent must be black, so both
the left-leaning and no-red-edge properties already hold.

RedBlackTree: A Simulated 2-4 Tree
§9.2
u
u
u
u
w
u
w
u
w
u
w
u
w
u
w
u
new u = g
flipLeft(w) ; u = w
u
w.colour
flipRight(g)
pushBlack(g)
g
g
g.right.colour
u.parent.left.colour
return
return
return
w
w
w
w
w
u
w
u
new u = g
pushBlack(g)
g
g

§9.2
Red-Black Trees
Otherwise, we ﬁrst determine if u’s parent, w, violates the left-leaning
property and, if so, perform a flipLeft(w) operation and set u = w. This
leaves us in a well-deﬁned state: u is the left child of its parent, w, so w
now satisﬁes the left-leaning property. All that remains is to ensure the
no-red-edge property at u. We only have to worry about the case in which
w is red, since otherwise u already satisﬁes the no-red-edge property.
Since we are not done yet, u is red and w is red. The no-red-edge prop-
erty (which is only violated by u and not by w) implies that u’s grand-
parent g exists and is black. If g’s right child is red, then the left-leaning
property ensures that both g’s children are red, and a call to pushBlack(g)
makes g red and w black. This restores the no-red-edge property at u, but
may cause it to be violated at g, so the whole process starts over with
u = g.
If g’s right child is black, then a call to flipRight(g) makes w the
(black) parent of g and gives w two red children, u and g. This ensures
that u satisﬁes the no-red-edge property and g satisﬁes the left-leaning
property. In this case we can stop.
RedBlackTree
void addFixup(Node<T> u) {
while (u.colour == red) {
if (u == r) { // u is the root - done
u.colour = black;
return;
}
Node<T> w = u.parent;
if (w.left.colour == black) { // ensure left-leaning
flipLeft(w);
u = w;
w = u.parent;
}
if (w.colour == black)
return; // no red-red edge = done
Node<T> g = w.parent; // grandparent of u
if (g.right.colour == black) {
flipRight(g);
return;
} else {
pushBlack(g);

RedBlackTree: A Simulated 2-4 Tree
§9.2
u = g;
}
}
}
The insertFixup(u) method takes constant time per iteration and
each iteration either ﬁnishes or moves u closer to the root. Therefore,
the insertFixup(u) method ﬁnishes after O(logn) iterations in O(logn)
time.
9.2.4
Removal
The remove(x) operation in a RedBlackTree is the most complicated to
implement, and this is true of all known red-black tree variants. Just
like the remove(x) operation in a BinarySearchTree, this operation boils
down to ﬁnding a node w with only one child, u, and splicing w out of the
tree by having w.parent adopt u.
The problem with this is that, if w is black, then the black-height
property will now be violated at w.parent.
We may avoid this prob-
lem, temporarily, by adding w.colour to u.colour. Of course, this in-
troduces two other problems: (1) if u and w both started out black, then
u.colour + w.colour = 2 (double black), which is an invalid colour. If
w was red, then it is replaced by a black node u, which may violate the
left-leaning property at u.parent. Both of these problems can be resolved
with a call to the removeFixup(u) method.
RedBlackTree
boolean remove(T x) {
Node<T> u = findLast(x);
if (u == nil || compare(u.x, x) != 0)
return false;
Node<T> w = u.right;
if (w == nil) {
w = u;
u = w.left;
} else {
while (w.left != nil)
w = w.left;

§9.2
Red-Black Trees
u.x = w.x;
u = w.right;
}
splice(w);
u.colour += w.colour;
u.parent = w.parent;
removeFixup(u);
return true;
}
The removeFixup(u) method takes as its input a node u whose colour
is black (1) or double-black (2). If u is double-black, then removeFixup(u)
performs a series of rotations and recolouring operations that move the
double-black node up the tree until it can be eliminated. During this
process, the node u changes until, at the end of this process, u refers to
the root of the subtree that has been changed. The root of this subtree
may have changed colour. In particular, it may have gone from red to
black, so the removeFixup(u) method ﬁnishes by checking if u’s parent
violates the left-leaning property and, if so, ﬁxing it.
RedBlackTree
void removeFixup(Node<T> u) {
while (u.colour > black) {
if (u == r) {
u.colour = black;
} else if (u.parent.left.colour == red) {
u = removeFixupCase1(u);
} else if (u == u.parent.left) {
u = removeFixupCase2(u);
} else {
u = removeFixupCase3(u);
}
}
if (u != r) { // restore left-leaning property if needed
Node<T> w = u.parent;
if (w.right.colour == red && w.left.colour == black) {
flipLeft(w);
}
}

RedBlackTree: A Simulated 2-4 Tree
§9.2
}
The removeFixup(u) method is illustrated in Figure 9.9. Again, the
following text will be diﬃcult, if not impossible, to follow without refer-
ring to Figure 9.9. Each iteration of the loop in removeFixup(u) processes
the double-black node u, based on one of four cases:
Case 0: u is the root. This is the easiest case to treat. We recolour u to be
black (this does not violate any of the red-black tree properties).
Case 1: u’s sibling, v, is red. In this case, u’s sibling is the left child of
its parent, w (by the left-leaning property). We perform a right-ﬂip at w
and then proceed to the next iteration. Note that this action causes w’s
parent to violate the left-leaning property and the depth of u to increase.
However, it also implies that the next iteration will be in Case 3 with w
coloured red. When examining Case 3 below, we will see that the process
will stop during the next iteration.
RedBlackTree
Node<T> removeFixupCase1(Node<T> u) {
flipRight(u.parent);
return u;
}
Case 2: u’s sibling, v, is black, and u is the left child of its parent, w. In
this case, we call pullBlack(w), making u black, v red, and darkening the
colour of w to black or double-black. At this point, w does not satisfy the
left-leaning property, so we call flipLeft(w) to ﬁx this.
At this point, w is red and v is the root of the subtree with which we
started. We need to check if w causes the no-red-edge property to be vi-
olated. We do this by inspecting w’s right child, q. If q is black, then w
satisﬁes the no-red-edge property and we can continue the next iteration
with u = v.
Otherwise (q is red), so both the no-red-edge property and the left-
leaning properties are violated at q and w, respectively. The left-leaning
property is restored with a call to rotateLeft(w), but the no-red-edge
property is still violated. At this point, q is the left child of v, w is the
left child of q, q and w are both red, and v is black or double-black. A
flipRight(v) makes q the parent of both v and w. Following this up by a

§9.2
Red-Black Trees
new u
u
u
w
u
pullBlack(w)
pullBlack(w)
flipLeft(w)
flipRight(w)
u
w
u
v
v
v
v
v
v
u
u
u
u
u
w
w
w
w
w
q
q
q
q
q
q.colour
rotateLeft(w)
flipRight(v)
pushBlack(q)
v
q
v
v
v
v
v
w
w
w
w
w
w
w
q
q
q
q
q.colour
rotateRight(w)
flipLeft(v)
pushBlack(q)
v
v
v
q
q
q
w
w
w
u
u
u
u
u
u
u
u
v.left.colour
flipLeft(v)
w (new u)
q
w
u
pushBlack(v)
v (new u)
w
w
flipRight(w)
v.right.colour
v
u
w
q
v
u
w
q
v
u
w
q
flipLeft(v)
v
v
removeFixupCase1(u)
removeFixupCase3(u)
removeFixupCase2(u)
a removal.

RedBlackTree: A Simulated 2-4 Tree
§9.2
pushBlack(q) makes both v and w black and sets the colour of q back to
the original colour of w.
At this point, the double-black node is has been eliminated and the
no-red-edge and black-height properties are reestablished. Only one pos-
sible problem remains: the right child of v may be red, in which case the
left-leaning property would be violated. We check this and perform a
flipLeft(v) to correct it if necessary.
RedBlackTree
Node<T> removeFixupCase2(Node<T> u) {
Node<T> w = u.parent;
Node<T> v = w.right;
pullBlack(w); // w.left
flipLeft(w); // w is now red
Node<T> q = w.right;
if (q.colour == red) { // q-w is red-red
rotateLeft(w);
flipRight(v);
pushBlack(q);
if (v.right.colour == red)
flipLeft(v);
return q;
} else {
return v;
}
}
Case 3: u’s sibling is black and u is the right child of its parent, w. This
case is symmetric to Case 2 and is handled mostly the same way. The only
diﬀerences come from the fact that the left-leaning property is asymmet-
ric, so it requires diﬀerent handling.
As before, we begin with a call to pullBlack(w), which makes v red
and u black. A call to flipRight(w) promotes v to the root of the subtree.
At this point w is red, and the code branches two ways depending on the
colour of w’s left child, q.
If q is red, then the code ﬁnishes up exactly the same way as Case 2
does, but is even simpler since there is no danger of v not satisfying the
left-leaning property.

§9.2
Red-Black Trees
The more complicated case occurs when q is black. In this case, we
examine the colour of v’s left child. If it is red, then v has two red children
and its extra black can be pushed down with a call to pushBlack(v). At
this point, v now has w’s original colour, and we are done.
If v’s left child is black, then v violates the left-leaning property, and
we restore this with a call to flipLeft(v). We then return the node v so
that the next iteration of removeFixup(u) then continues with u = v.
RedBlackTree
Node<T> removeFixupCase3(Node<T> u) {
Node<T> w = u.parent;
Node<T> v = w.left;
pullBlack(w);
flipRight(w); // w is now red
Node<T> q = w.left;
if (q.colour == red) { // q-w is red-red
rotateRight(w);
flipLeft(v);
pushBlack(q);
return q;
} else {
if (v.left.colour == red) {
pushBlack(v); // both v’s children are red
return v;
} else { // ensure left-leaning
flipLeft(v);
return w;
}
}
}
Each iteration of removeFixup(u) takes constant time. Cases 2 and 3
either ﬁnish or move u closer to the root of the tree. Case 0 (where u
is the root) always terminates and Case 1 leads immediately to Case 3,
which also terminates. Since the height of the tree is at most 2logn, we
conclude that there are at most O(logn) iterations of removeFixup(u), so
removeFixup(u) runs in O(logn) time.

Summary
§9.3
9.3
Summary
The following theorem summarizes the performance of the RedBlack-
Tree data structure:
Theorem 9.1. A RedBlackTree implements the SSet interface and supports
the operations add(x), remove(x), and find(x) in O(logn) worst-case time per
operation.
Not included in the above theorem is the following extra bonus:
Theorem 9.2. Beginning with an empty RedBlackTree, any sequence of m
add(x) and remove(x) operations results in a total of O(m) time spent during
all calls addFixup(u) and removeFixup(u).
We only sketch a proof of Theorem 9.2. By comparing addFixup(u)
and removeFixup(u) with the algorithms for adding or removing a leaf
in a 2-4 tree, we can convince ourselves that this property is inherited
from a 2-4 tree. In particular, if we can show that the total time spent
splitting, merging, and borrowing in a 2-4 tree is O(m), then this implies
Theorem 9.2.
The proof of this theorem for 2-4 trees uses the potential method of
amortized analysis.2 Deﬁne the potential of an internal node u in a 2-4
tree as
Φ(u) =

if u has 2 children
if u has 3 children
if u has 4 children
and the potential of a 2-4 tree as the sum of the potentials of its nodes.
When a split occurs, it is because a node with four children becomes two
nodes, with two and three children. This means that the overall potential
drops by 3 −1 −0 = 2. When a merge occurs, two nodes that used to have
two children are replaced by one node with three children. The result is
a drop in potential of 2 −0 = 2. Therefore, for every split or merge, the
potential decreases by two.
Next notice that, if we ignore splitting and merging of nodes, there are
only a constant number of nodes whose number of children is changed by
2See the proofs of Lemma 2.2 and Lemma 3.1 for other applications of the potential
method.

§9.4
Red-Black Trees
the addition or removal of a leaf. When adding a node, one node has its
number of children increase by one, increasing the potential by at most
three. During the removal of a leaf, one node has its number of children
decrease by one, increasing the potential by at most one, and two nodes
may be involved in a borrowing operation, increasing their total potential
by at most one.
To summarize, each merge and split causes the potential to drop by
at least two. Ignoring merging and splitting, each addition or removal
causes the potential to rise by at most three, and the potential is always
non-negative. Therefore, the number of splits and merges caused by m
additions or removals on an initially empty tree is at most 3m/2. Theo-
rem 9.2 is a consequence of this analysis and the correspondence between
2-4 trees and red-black trees.
9.4
Discussion and Exercises
Red-black trees were ﬁrst introduced by Guibas and Sedgewick [38]. De-
spite their high implementation complexity they are found in some of
the most commonly used libraries and applications. Most algorithms and
data structures textbooks discuss some variant of red-black trees.
Andersson [6] describes a left-leaning version of balanced trees that is
similar to red-black trees but has the additional constraint that any node
has at most one red child. This implies that these trees simulate 2-3 trees
rather than 2-4 trees. They are signiﬁcantly simpler, though, than the
RedBlackTree structure presented in this chapter.
Sedgewick [66] describes two versions of left-leaning red-black trees.
These use recursion along with a simulation of top-down splitting and
merging in 2-4 trees. The combination of these two techniques makes for
particularly short and elegant code.
A related, and older, data structure is the AVL tree [3]. AVL trees
are height-balanced: At each node u, the height of the subtree rooted at
u.left and the subtree rooted at u.right diﬀer by at most one. It follows
immediately that, if F(h) is the minimum number of leaves in a tree of

Discussion and Exercises
§9.4
height h, then F(h) obeys the Fibonacci recurrence
F(h) = F(h −1) + F(h −2)
with base cases F(0) = 1 and F(1) = 1. This means F(h) is approximately
ϕh/
√
5, where ϕ = (1 +
√
5)/2 ≈1.61803399 is the golden ratio. (More
precisely, |ϕh/
√
5 −F(h)| ≤1/2.) Arguing as in the proof of Lemma 9.1,
this implies
h ≤logϕ n ≈1.440420088logn ,
so AVL trees have smaller height than red-black trees. The height balanc-
ing can be maintained during add(x) and remove(x) operations by walk-
ing back up the path to the root and performing a rebalancing operation
at each node u where the height of u’s left and right subtrees diﬀer by two.
See Figure 9.10.
Andersson’s variant of red-black trees, Sedgewick’s variant of red-
black trees, and AVL trees are all simpler to implement than the Red-
BlackTree structure deﬁned here. Unfortunately, none of them can guar-
antee that the amortized time spent rebalancing is O(1) per update. In
particular, there is no analogue of Theorem 9.2 for those structures.
Exercise 9.1. Illustrate the 2-4 tree that corresponds to the RedBlackTree
in Figure 9.11.
Exercise 9.2. Illustrate the addition of 13, then 3.5, then 3.3 on the Red-
BlackTree in Figure 9.11.
Exercise 9.3. Illustrate the removal of 11, then 9, then 5 on the RedBlack-
Tree in Figure 9.11.
Exercise 9.4. Show that, for arbitrarily large values of n, there are red-
black trees with n nodes that have height 2logn −O(1).
Exercise 9.5. Consider the operations pushBlack(u) and pullBlack(u).
What do these operations do to the underlying 2-4 tree that is being sim-
ulated by the red-black tree?
Exercise 9.6. Show that, for arbitrarily large values of n, there exist se-
quences of add(x) and remove(x) operations that lead to red-black trees
with n nodes that have height 2logn −O(1).

§9.4
Red-Black Trees
h + 2
h
h
h + 2
h + 1
convert a node whose subtrees have a height of h and h + 2 into a node whose
subtrees each have a height of at most h + 1.

Discussion and Exercises
§9.4
Exercise 9.7. Why does the method remove(x) in the RedBlackTree im-
plementation perform the assignment u.parent = w.parent?
Shouldn’t
this already be done by the call to splice(w)?
Exercise 9.8. Suppose a 2-4 tree, T , has nℓleaves and ni internal nodes.
1. What is the minimum value of ni, as a function of nℓ?
2. What is the maximum value of ni, as a function of nℓ?
3. If T ′ is a red-black tree that represents T , then how many red nodes
does T ′ have?
Exercise 9.9. Suppose you are given a binary search tree with n nodes
and a height of at most 2logn−2. Is it always possible to colour the nodes
red and black so that the tree satisﬁes the black-height and no-red-edge
properties? If so, can it also be made to satisfy the left-leaning property?
Exercise 9.10. Suppose you have two red-black trees T1 and T2 that have
the same black height, h, and such that the largest key in T1 is smaller
than the smallest key in T2. Show how to merge T1 and T2 into a single
red-black tree in O(h) time.
Exercise 9.11. Extend your solution to Exercise 9.10 to the case where the
two trees T1 and T2 have diﬀerent black heights, h1 , h2. The running-
time should be O(max{h1,h2}).
Exercise 9.12. Prove that, during an add(x) operation, an AVL tree must
perform at most one rebalancing operation (that involves at most two ro-
tations; see Figure 9.10). Give an example of an AVL tree and a remove(x)
operation on that tree that requires on the order of logn rebalancing op-
erations.
Exercise 9.13. Implement an AVLTree class that implements AVL trees as
described above. Compare its performance to that of the RedBlackTree
implementation. Which implementation has a faster find(x) operation?
Exercise 9.14. Design and implement a series of experiments that com-
pare the relative performance of find(x), add(x), and remove(x) for the
SSet implemeentations SkiplistSSet, ScapegoatTree, Treap, and Red-
BlackTree. Be sure to include multiple test scenarios, including cases

§9.4
Red-Black Trees
where the data is random, already sorted, is removed in random order, is
removed in sorted order, and so on.
