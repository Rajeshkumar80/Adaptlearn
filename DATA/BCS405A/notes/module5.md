# BCS405A — Module 5

## Combinatorics and Recurrence

**Subject:** BCS405A (Discrete Mathematical Structures)
**Module:** Module 5
**Content type:** textbook_fallback
**Sources:** T1_Discrete_Mathematics_for_Computer_Science.txt

---

t the function. Rather, the code is just
one way to implement the rule that defines the function. The function is just the relationship
between input and output. Consequently, many different rules may give rise to the same
function.
Example 6. 
The following two algorithms compute the same function:
(a) For any n e N, output cos(n • 7r).
(b) For any n e N, output (-1)n.
The formal definition of equality of functions is given in Section 4.1.5. We will leave it to
the reader to verify that rules (a) and (b) define the same function.
Example 7. 
Show that the following rule does not define a function: Let F be the rule
with domain and codomain equal to N that outputs n4 - 3n for each n input.
Solution. F(1) is not defined (since -2 
is not in the codomain), so F is not a
function. 
U
4.1.2 
Functions as Sets
We can use the notion of a relation to define a function by allowing the elements that are
related to belong to different sets. With this notion of a relation, a function is a special kind
of binary relation. For sets X and Y, any subset of X x Y that "obeys" the following two
rules is a function:
1. Each input corresponds to some output.
2. Each input corresponds to only one output.
The set X is the domain of the function. The set Y is the codomain of the function. The
idea is that a relation consists of the set of ordered pairs for which every element of X is
the first element of exactly one pair.
Definition 1. 
Let X and Y be sets. A function F with domain X and codomain Y is
a subset of X x Y such that, for each x E X, there is exactly one y E Y with (x, y) E F.
F is also called a function from X to Y. A function F from X to Y is often denoted by
F : X -- Y.
From this point on, rather than identifying the domain and the codomain of a function
as sets, we will assume that the notation F : X --. Y implies this.
Example 8.
(a) Suppose a class consists of three students. Jean sits at the second chair in the first row,
Michele sits at the sixth chair in the fourth row, and Paul sits at the 37th chair in the
53rd row. For this class, the function SeatOf is the set
{(Jean, RowlSeat2), (Michele, Row4Seat6), (Paul, Row53Seat37)}
(b) Let
DayOfWeek = {Monday, Tuesday, Wednesday, Thursday,
Friday, Saturday, Sunday)

Basic Definitions 
There is an obvious function:
NextDay: 
DayOfWeek 
-> 
DayOfWeek
Monday 
Tuesday
Tuesday 
Wednesday
Wednesday 
Thursday
Thursday 
Friday
Friday 
Saturday
Saturday 
Sunday
Sunday 
Monday
The binary relation defined by this function consists of the following ordered pairs:
{(Monday, Tuesday), (Tuesday, Wednesday), (Wednesday, Thursday),
(Thursday, Friday), (Friday, Saturday), (Saturday, Sunday),
(Sunday, Monday))
Example 9. 
The factorial function Fact from Example 5(b) is the set
{(0, 1), (1, 1), (2, 2), (3, 6), (4, 24), (5, 120). 
(n, n!)....
We now introduce a common vocabulary for functions.
Definition 2. 
Let F : X --* Y be a function, and let (x, y) E F. Then, y is the image of
x under F, denoted by y = F(x). We also say that x is mapped to y by F. The range of
F is the set
range(F) = {F(x) : x E X}
For y E Y, the preimage of y under F, denoted as F- 1 (y), is the set
F-l(y) = {x E X : F(x) = y}
For Y' C Y, the preimage of Y' under F, denoted as F 1 (Y'), is the set
F-'(Y') = {x e X : F(x) E Y'}
We refer to X as domain(F) and Y as codomain(F).
Example 10. For the function F : {1, 2, 3, 4, 5} --* {a, b, c, d, e} defined as F(l) =
a, F(2) = b, F(3) = b, F(4) = d, and F(5) = c, identify domain(F), codomain(F),
range(F), F-1(a), F-1({a, b, c}), and F-1 (e).
Solution. domain(F) = {1, 2, 3,4, 5}; 
codomain(F) = (a, 
b, c, d, ej; 
range(F) =
{a, b, c, dj; F-1(a) =- {1}; F- 1({a, b, c)) = {1, 2, 3, 5}; F-1(e) = 0. 
U
You may find the range of a function referred to as the image of the function. In
Example 4.1 a, the range of function SeatOf is the set of all chairs in the room that have
someone sitting on them. For another example, the addition function + on Z maps the
ordered pair (3, 5) to 8. The domain of + is Z x Z, and the codomain is Z. If F : X2 --* y;
then F is called a binary function from X2 to Y. Addition as well as the other familiar
arithmetic operations defined on the integers are binary functions from Z2 to Z.

CHAPTER 4 
Functions
4.1.3 
Recursively Defined Functions
When a function F is defined by a formula, we can find the value of F at any element
of its domain without knowing its value at any other element of its domain. For example,
consider the function F : N -* N defined by the rule F(n) = 3n + 2. We can compute
directly that F(100) = 3. 100 + 2 = 302 or that F(3112) = 3.3112 + 2 = 9338.
Functions, however, are not necessarily defined in such a straightforward manner. Con-
sider the function G : N -- N defined as G(0) = 2 and, for n > 0, G(n) = G(n -
1) + 3.
Then, G(1) = G(0) + 3 = 2 + 3 = 5. The following computation shows how G(5) would
be determined:
G(5) = G(4) + 3
= G(3) +3+3
= G(2)+3+3+3
= G(1)+3+3+3+3
= G(0)+3+3+3+3+3
= 2+3.5
If we now wanted G(3112), we would first need to compute G(1), G(2),..., 
G(3111). In
this situation, we say that G is defined recursively or is given by a recursive definition.
As you might suspect from the computation of G(5), the two functions F and G are
actually the same; that is, F(n) = G(n) for every n E N. In Section 1.10.1, F was described
as a closed form for G.
Example 11.
(a) The function F : N -
N defined as F(n) = 3f can be defined recursively as F(0) = 1
and F(n) = 3. F(n - 1) for n > 1.
(b) The sum of the first k of n elements al, a2. 
an can be defined directly as SUM(k) =
al + a2 + 
± 
• • + ak where 1 < k < n. Recursively, the same function can be defined as
S(1) = al and S(k) = S(k- 1)+ak fork > 1.
(c) The sum of the first n terms of a geometric series a + ac + ac2 + ac3 + • . + acn-I
can be defined as gs(0) = a and gs(k) = gs(k - 1) + ack for k > 1.
(d) The harmonic sequence that consists of the terms 1, 1/2, 1/3 .... 1/n, ... can have
the sum of its first k terms defined as the function H(1) = 1 and H(k) = H(k - 1) +
l/kfork > 1.
We introduced the Fibonacci sequence in Section 1.7.3. This sequence of values
(1, 1, 2, 3, 5, 8, 13 .... ) was defined recursively; that is, no direct formula was given for
finding the nth element of the Fibonacci sequence. Unlike the functions in Example 8, two
terms are given as initial conditions for termination conditions in defining the nth element
of the Fibonacci sequence successively in terms of smaller Fibonacci numbers. The defini-
tion of the Fibonacci sequence is F(0) = 1, F(1) = 1, and F(n) = F(n - 1) + F(n -
2)
for n > 2. The first five terms of the Fibonacci sequence are found as follows:

Basic Definitions 
F(O) = 1
F(1) 
I 1
F(2) = F(1) + F(O) = 1 + 1 = 2
F(3) =F(2)+F(1)=2+ 
I=3
F(4) = F(3) + F(2) = 3 +2 = 5
A recursively defined function may involve any number of initial values in determining
a next value.
Example 12. 
Find the first six values of the function defined on N given by F(O) = 2,
F(1) = 3, F(2) = 5, and F(n) = 2F(n - 1) + 3F(n - 2) + F(n -
3) for n > 3.
Solution.
F(3) = 2F(2) + 3F(l) ± F(O) = 10 + 9 ± 2 = 21
F(4) = 2F(3) + 3F(2) + F(l) = 42 + 15 + 3 = 60
F(5) = 2F(4) + 3F(3) + F(2) = 120+ 63 + 5 = 188 
4.1.4 
Graphs of Functions
Since functions are relations, they have graphs. Figure 4.2 shows part of the graph of the
function Floor
y
o points not included
-2 
0-- 
in the line
1 0-
II 
I 
I 
x
-3 
-2 
-1 
0----1
0- 
-2
0- 
-3
Graph of Floor
Let G be the graph of a function with domain X C R x R. G is the graph of a function
if whenever x0 E X, the vertical line x = x0 intersects G in exactly one point. We call this
test the vertical line test for a function. Figure 4.3, on page 226, shows a subset of IR x RI
that is not a function, since the vertical line x = 1 cuts the graph in two places.
When a function has a "small" set as its domain and a "small" set as its codomain,
such as the function F : 10, 1, 2) -
{3, 5, 7) defined as F(0) = F(1) = 5 and F(2) = 7,

CHAPTER 4 Functions
y
(-3, 0) 
3, 0)
(0,-3) 
(-•'1)
Graph of a relation that is not a function.
we often represent such functions by a diagram such as that shown on Figure 4.4. The
lines joining an element on the left in Figure 4.4 with an element on the right represent
the association between elements of the domain and elements of the codomain that we
interpret as the rule for F. For example, we interpret the line between 0 and 5 as meaning
F(0) = 5.
F: {0, 1,2) 
{3, 5, 7}
2 -7
Representation of a function.
The elements of the domain and of the codomain can be listed in any order. Sometimes,
a picture of this sort makes functions defined on N easier to understand. This representation
can also be used for some "large" sets.
4.1.5 
Equality of Functions
Since functions are defined as subsets of a product of two sets-that is, as sets of ordered
pairs-two functions are equal when they are equal as sets.
Definition 3. 
Let F, G : X -+ Y be two functions. The functions F and G are equal if
and only if they contain the same ordered pairs.
Example 13. 
Let SqrN be the function from N to N defined by the rule SqrN(n) = n2.
Let SqrR be the function from R to R defined by the rule SqrR(r) = r 2. Then, SqrNq and
SqrR are not the same function, since (1.1, 1.21) r SqrR but (1.1, 1.21) 0 Sqri.

Basic Definitions 
Theorem 1. Let F and G be functions such that F = G. Then,
domain(F) = domain(G)
range(F) = range(G)
and, for each x E domain(F), F(x) = G(x).
Some authors would insist that for two functions to be equal, their codomains must
also be the same. We do not insist on that condition for the equality of two functions.
Boolean Functions and Combinatorial Networks
A boolean function of n boolean variables is a function of the form
B :{0, 1} x {0, 1} x ... x {0, 1) --* {0, 11
The domain of B contains 2n elements. A value of either 0 or 1 is assigned to each entry
of the 2' ordered n-tuples. An example of a boolean function on three boolean variables is
shown in Table 4.1.
Boolean
Function of Three
Variables
p 
q 
r 
F(p, q, r)
0r0 
This function might represent a set of switches that react in an appropriate way or a
set of conditions that must be satisfied so that some action can be taken. It is useful to
be able to represent functions as in Table 4.1, but the real problem is often to embed this
function in a combinatorial network. We saw in Chapter 2, while discussing disjunctive
normal forms and conjunctive normal forms, how we can draw the combinatorial circuit
given one of these normal forms. In this case, we need to see how to represent a function
in terms of one of these normal forms.
For the function in Table 4.1, a disjunctive normal form is
F(p, q, r) = (p A q A r) V (p A -q A r) V (p A -q A -r)
V (-p A q A r) V (-p A q A -'r) V (-p A -q A -'r)
Consequently, the combinatorial circuit is the circuit shown in Figure 4.5.

CHAPTER 4 
Functions
Pqp(qr
r 
-
p 
-
-qAr 
(p A qA r)
r 
L~g• 
v(pA-.qA r)
pAqA- r 
V(pA-qA-r)
r 
- .( 
P- 
-P __)
P 
Vp 
~ 
v(-~p AqA-)
q 
-
r 
~V (-.p AqAr)
-p
q 
",E-pAqA r
q -.
Combinatorial circuit for F(p, q, r).
Notice in Figure 4.5 that there are several inputs for a gate. This is as much for conve-
nience as for anything else, since we can obviously write a gate with three inputs as a set
of gates with two inputs each, as shown in Figure 4.6.
p -
--
O 
-
ý
rpAqAr
r -*
q ----------
q
:(p 
Aq) Ar~pA qAr
r
Combinatorial circuit for multiple inputs.
4.1.6 
Restrictions of Functions
It is easy to write an algorithm to compute SqrR(x) = x 2 for x E R. By merely asserting
that only natural numbers should be used as input, one can make the same algorithm specify
Sqri, a function from N to N. This is an example of restricting a function to a smaller
domain. As usual, the formal definition is set theoretic.
Definition 4. Let A, B, and C be sets such that B C A. Let F : A -+ C be a function.
The restriction of F to B, denoted F I B, is a function from B to C defined as the set
F I B = {(x, y) E F :x 
B}

Basic Definitions 
15-- 
4-- 
4--
12.5--
10- 
3-- 
3-
7.5- 
2- 
2-
2.5 
I --
-4 
-2 
-2 
-1 
-2 
-1 
Sqr, 
Sqr~lRT- 2,2U 
Sqrl {-2, -1, 0, 1, 2)
Restrictions of SqrR. 
A. SqrR 
B. SqrR 1[-2,21 
C. SqrR 11-2,-1,0,1,21.
4.1.7 
Partial Functions
Think of a computer program as computing or specifying a function from the input of the
program to its output. The input to the function is whatever string of characters is input to
the program. The output is whatever string of characters has been output by the program
after it has finished execution. Anyone who has programmed a computer realizes that many
programs, on some input data, go into infinite loops and, by the definition above, would
produce no output at all. In that case, the program is not computing a function of the input,
since the definition of a function requires that there be one output for every one input. What
a program computes is really what is called a partial function of its input. On each input,
the program, if it produces any output at all, produces only one possible output. Thus, a
partial function can be thought of as a black box into which for each input there is at most
one possible output.
Another sort of partial function is the following: Suppose the amount of postage to
be paid is specified in Table 4.2 (where the range (3-4] kg is understood to mean that the
parcel weighs more than 3 kg but less than or equal to 4 kg). This table gives postage costs
only as a partial function of the weight of the package, since the postage amount is not
specified for anything weighing more than 16 kg.
Postage Costs
Weight 
Postage
(0-1] kg 
$1.00
(1-2] kg 
$1.98
(2-3] kg 
$2.56
(3-41 kg 
$3.11
(4-51 kg 
$3.99
(5-81 kg 
$5.00
(8-12] kg 
$7.00
(12-161 kg 
$9.00

CHAPTER 4 
Functions
The two examples we have given of partial functions actually reflect rather different
ways in which partial functions arise. In the postage example, the function was partial
because no rule was given for calculating the postage for items weighing more than 16 kg.
At some later time, someone may come back and extend the rule, perhaps by specifying
that items weighing (16-20] kg cost $10.89. In the computer program example, however, a
rule was given for all possible input data, but that rule failed to output anything for certain
values. The notion of a partial function gives a formal way to consider all programs-
even ones that crash or go into infinite loops. Partial functions are particularly important in
the theoretical study of computability-that is, in the study of which functions and partial
functions are computable by programs, where there is assumed to be no restriction on
computer memory or on computation time. There is no satisfactory way in this subject to
restrict attention only to functions.
Definition 5. A partial function F with domain of definition X and codomain Y is a
subset of X x Y such that for each x E X, there is, at most, one y with (x, y) E F. Such
an F is also called a partial function F from X to Y. When it is understood that F is partial,
the notation F : X --* Y is also used (but when the notation F : X -> Y is used without
any other comment, F is a function). The domain of a partial function F : X -> Y is the set
{x E X: for some y E Y, (x, y) E F}
If x E X is not in the domain of definition for F, then F(x) is undefined. Other terms,
such as range and preimage, are defined exactly as for functions.
When F is a partial function, the implication is not that there is necessarily any x in
its domain of definition where F(x) is undefined, only that there might be. Hence, every
function is a partial function. When discussing both functions and partial functions that are
not functions, functions are often referred to as total functions to emphasize the difference.
Example 14. 
In Example 1(a) SeatOf was presented as a (total) function. It might be
slightly more realistic to present it as a partial function, however, since some people in the
room might not be sitting in seats. For example, they might be standing or sitting on the
floor. Asking what is the seat of a standing person should get no answer.
Example 15. 
The following are examples of partial functions:
(a) Subtraction (-) on N is a partial function. Its domain of definition is N 2, and its
codomain is N. For i < j, i - j is not defined on N, so the domain of subtrac-
tion is
{(i, j) E N2 : i > j}
The range of (-) is N. To show that an arbitrary n E N is in range(-), note that
n = n -0.
(b) Division on JR is a partial function. Its domain of definition is R2, its codomain is IR,
but its domain is
{(x, y) E JR2 : y A 0}
Its range is JR. Why?

Basic Definitions 
(c) For x E IR, let Sqrt(x) be the non-negative square root of x. Then, Sqrt is a partial
function, since Sqrt(x) is undefined for x < 0. The domain of definition of Sqrt is iR,
and its codomain is R. The range of Sqrt is [0, oo).
Let G be a subset of R. G is the graph of a partial function if, whenever x0 E X,
the vertical line x = xo intersects G in at most one point. We call this the vertical line
test for a partial function. Figure 4.8 shows a subset of R x R that is not a function,
because the vertical line x = -1 does not cross the graph. Sqrt is a partial function,
since no vertical line defined by an element of its domain crosses the graph more than
once.
y
2.5
1.5
0.5
-2 
6! 
Whether a partial function is a total function depends on what the domain of definition
is defined to be. For example, it was noted that Sqrt is a partial function from JR to IR. If we
declare the domain of definition to be just the set [0, co), then Sqrt is a total function.
4.1.8 
1-1 and Onto Functions
Several special types of functions have turned out to be especially important. For exam-
ple, the intuitive notion of counting will be formalized using the properties of functions
introduced in this section.
Definition 6. Let F : X -- Y be a function. F is 1-1 if, for each y E Y, there is, at most,
one x E X such that F(x) = y.
Example 16.
(a) Let F :R -- R be a function defined as F(x) = 2x. F is 1-1.
(b) Let G N -- N be a function defined as G(n) = 2n 2 + 1. G is not 1-1.
Solution.
(a) Since F(xl) = F(x2) means 2xl = 2x2, it follows that xl = X2 and F is 1-1.
(b) Since G(2) = G(-2), the function G is not 1-1. 
U

CHAPTER 4 
Functions
The function SeatOf (from Example 1(a) in Section 4.1) is 1-1 if and only if exactly
zero or one person is sitting at each chair (and every student is seated at exactly one chair).
1-1 Function SeatOf.
SeatOf 1, that is not 1-1.
Function SeatOfl.
The function H(x) = x2 is not 1-1. This is shown in Figure 4.11. Let G be the graph of
a function with codomain Y C IR. G is the graph of a 1-1 function if, whenever yo e Y,
the line y = yo intersects G in, at most, one point. We call this the horizontal line test for
1-1 functions.
y
(-2, 4), 
(,4 
X
-2 
H(x) = x2 .
The horizontal line y = 4 crosses the graph in Figure 4.11 at more than one point.
Therefore, G is not 1-1. On the other hand, the function F(x) = x3, as shown in Figure
4.12, on next page, is 1-1, since each horizontal line crosses the graph in at most one point.
Definition 7. 
Let F : X -
Y be a function. F is onto if, for each y E Y, there is at least
one x E X such that F(x) = y.
Another way to think of the definition of onto is that a function F : X --* Y is onto if
and only if range(F) = codomain(F). Whether a function is onto or not depends on what
the codomain is defined to be. For example, the function Sqrt : [0, oo) -+ R is not onto.
However, if Sqrt is defined to be Sqrt : [0, oo) -+ [0, cc), then Sqrt is onto.

Basic Definitions 
Io
10-
7.5
2.5
-3 
-2 
-5
F(x) = x3.
The function SeatOf2, as shown in Figure 4.13, maps the set of students in the class-
room onto the set of chairs in the classroom if every chair is occupied.
SeatOf2 .
The function SeatOf3, as shown in Figure 4.14, is not, onto since one or more chairs
remain unoccupied. In this case, two chairs are unoccupied.
The function G(x) = x 2, as shown in Figure 4.15, is not onto.
y
25-
20-
5-
0x
-4 
-2 
--5
G(x) = x2 .

CHAPTER 4 
Functions
The horizontal line test for 1-1 functions can be easily modified to check whether a func-
tion is onto by simply requiring that each horizontal line defined by a member of the
codomain meet the graph of the function at least once. In Figure 4.15, the horizontal line
y = -6 does not intersect the graph of G at any point. This property of the graph of the
function corresponds to the fact that there is no number x such that G (x) = -6. Therefore,
G is not onto. On the other hand, the function F(x) = x3, as shown in Figure 4.16, is onto,
since each horizontal line crosses the graph in at least one point.
y
__
7.5-
5-
2.5
-3 
F(x) 
x3 .
Functions that are both 1-1 and onto play a special role in counting the elements of
a set. Because functions of this class have so many applications, they have been given a
special name.
Definition 8. Let F : X --* Y be a function. F is a 1-1 correspondence if F is both 1-1
and onto.
For example, the function SeatOf is a 1-1 correspondence if and only if each chair has
exactly one student sitting at it. The function F : R --* R defined by F(x) = x 3 , as shown
in Figure 4.16, is also a 1-1 correspondence. The function G(x) = x2 , as shown in Figure
4.15, is neither 1-1 nor onto.
The function shown in Figure 4.17 is onto but not 1-1.
Y
10- 
.
7.5-
5-
2.5
-4--- 
X
-2 
-2.5-
-5-
A function that is onto
but not 1-1.

Basic Definitions 
The function exp : R -R IR defined as exp(x) = ex and shown in Figure 4.18 is 1-1
but not onto.
y
70-
60"
40"
30-
20-
-4 
-2 
exp(x).
The functions defined here have been constructed to show that the two properties 1-1
and onto are independent of each other. Two properties of a mathematical object are inde-
pendent if objects exist that can have exactly one of the properties, both of the properties,
or neither of the properties. For 1-1 and onto functions, the four functions shown in Figures
4.15 through 4.18 demonstrate that the properties 1-1 and onto are independent.
Commonly used synonyms exist for the properties of functions defined in Definitions
6, 7, and 8. A 1-1 function is also called an injective function, or an injection. An onto
function is called a surjective function, or a surjection. A 1-1 correspondence is called a
bijective function, or a bijection. Also, a 1-1 correspondence is often referred to simply
as a 1-1 and onto function.
Application: Hashing Functions
When you put a bank card into an ATM and enter your pin number, your bank account
records must be found so that your transaction can be authorized. This is an example of in-
formation in symbolic or numeric form (the information on the magnetic stripe on the ATM
card) being used to determine a location on some storage device (the physical location of
your records). A function that can take information as input and find a storage address as
an output is called a hashing function. For simplicity, at this point we will assume that a
hashing function is 1-1.
Example 17. Define a hashing function that uses 63 storage locations as a four-stage
process with surnames as input. The first step is to replace the letters of the surname with
integers according to the following rule: A -- 1, B -+ 2, C -+ 3 ...
, Y -> 25, Z --> 26.
The second step is to multiply the letter value by 2i where i is the letter's position in the
word, with the leftmost character being in position 1. The third step is to add the values
that represent the letters of the surname. The final step is to divide this sum by 63. The
hashing value is the remainder of this division. For example, Robb has a value of 144
and a hashing value of 18. You should imagine that the information needed for Robb is in

CHAPTER 4 Functions
storage location 18. Carry out this hashing procedure for Smith, Jones, Brown, Zento, and
Ruster.
Solution.
Steps 1 through 3 
Step 4 
Hash Value
Smith -- 19.2+ 13.22+9.23+20.24+8.25=738 
=11.63+45-- 
Jones • 10.2+15.22+14.23+5.24+19.25=880 
=13.63+61-- 
Brown-2- 
+ 18.2
2 + 15.2
3 + 23.2
4 + 14.2
5 = 1012 
=16.63+4 --+ 
Zento --+26.2+5-22+14-23+20-24+15.25 =984 
=15.63+39-* 
Ruster- 
18.2+21.22+ 19.23+20.24+5.25 + 18.26 = 1904=30.63+ 14-- 
Each of these names can be located among a set of 63 storage locations, numbered 0, 1,
2 ...
, 62, by using their hash value as the location to access. 
If any two names give rise to the same hash value, then an auxiliary rule, called a
collision resolution strategy, is used to make sure that each piece of information has its
own storage location that can be determined from the information alone and the given
collision resolution strategy.
How many students in your class can have their names hashed this way without gen-
erating a collision? (If your class has more than 63 students, simply change the function to
find the remainder when you divide by some number at least as large as the size of your
class.)
Application: Encryption and Decryption
In this age of electronic messaging, it is often important that only the intended receiver
of an electronic message can read it. If the security of a transmission is a problem, the
message can still be made secure if the original message has been encoded or encrypted
so that the symbols seen make no sense unless you know how to decrypt the message, that
is, return the encrypted message back to its original form. Here, we present an example of
the process of encoding and decoding a message. The method used is very simple and not
as powerful or secure as modern methods, but the example points out how an encryption
scheme interacts with a message, a user, and a receiver. The difficult problem today is
to find an encoding scheme that cannot be compromised through a brute force search by
a computer. More complex ideas from number theory lie at the heart of the best current
encryption methods. The encoding scheme presented uses a bijection from the symbol set
used in writing the message to the same symbol set. The sender of the message must use
the bijection to transform the message into a form that is not recognizable, and the receiver
must use the inverse of the coding function to decrypt the message received to return it into
plain text.
A very simple encoding scheme is to associate each letter of the alphabet (we
will only deal with uppercase letters) with two digits as follows: A -- 00, B
01, C ->. 02 ...
,X --+ 23, Y -+ 24, and Z --* 25. Define a function F(lettervalue) -
a(lettervalue) + b (mod 26), where a and b are integers and a has no factor in common
with 26 and the sum is reduced modulo 26. For example, if a = 3 and b = 5, then
F(X) m 3(23) + 5 (mod 26) = 74 (mod 26) =- 22 (mod 26)

Basic Definitions 
A message such as
LEAVINGTODAY = 1104 00 2108 13 06 19 14 0300 24
is transmitted as
F(ll) F(4) F(0) F(21) F(8) F(13) F(6) F(19) F(14) F(3) F(0) F(24)
The computation is shown in Table 4.3.
Table4.3 
Encryption Computation
F(0) = 3(0) + 5 (mod 26) = 5 
F(3) = 3(3) + 5 (mod 26) = 14
F(4) = 3(4) + 5 (mod 26) = 17 
F(6) = 3(6) + 5 (mod 26) = 23
F(8) = 3(8) + 5 (mod 26) = 3 
F(11) = 3(11) + 5 (mod 26) = 12
F(13) = 3(13) + 5 (mod 26) = 18 
F(14) = 3(14) + 5 (mod 26) = 21
F(19) = 3(19) + 5 (mod 26) = 10 
F(21) = 3(21) + 5 (mod 26) = 16
F(24) = 3(24) + 5 (mod 26) = 25
The message that is sent is
12 1705 1603 1823 1021140525
The message is transformed into the following string of symbols:
MRFQDSXKVOFZ
The problem for the receiver is to know the inverse function and then apply it to
each of these two digit pairs to see the original message. The inverse for F(letter)
3(lettervalue) + 5 (mod 26) is a function of the same form-that is, G(lettervalue)
a (lettervalue) + b (mod 26) where a and b are determined as follows:
G o F (lettervalue) = a (3 . lettervalue + 5) + b = lettervalue(mod 26)
We solve
3a =-l (mod 26) and 5a + b =- O(mod 26)
to get a = 9 and b = 7. The inverse is G(lettervalue) - 9(lettervalue) + 7 (mod 26). We
now compose these two functions to decrypt the message as shown:
G o F(L) G o F(E) G o F(A) G o F(V) G o F(I) G o F(N)G o F(G) G o
F(T) G o F(O) G o F(D) G o F(A) G o F(Y)
= G(12) G(17) G(05) G(16) G(03) G(18) G(23) G(10) G(21) G(14)G(05) G(25)
= 1104002108 1306 19 14030024
=LEAVINGTODAY
4.1.9 
Increasing and Decreasing Functions
The reader has probably already encountered increasing and decreasing functions in a
mathematics course. It is common to speak of a function as being increasing or decreasing
on an interval. The function defined on IR,
F(x)=x2- 6x+12

CHAPTER 4 
Functions
is decreasing on (-oo, 3] and increasing on [3, 00). (You can see this from the graph of the
function.) The definition of the terms increasing and decreasing uses the familiar orderings
less than and less than or equal on R.
Definition 9. 
Let X, Y C R, and let F : X --> Y be a function.
(a) F is increasing if for, all x1, x2 E X, Xl < X2 implies F(x1) < F(x2).
(b) F is strictly increasing if, for all x1, X2 E X, xl < x2 implies F(x1) < F(x2).
(c) F is decreasing if, for all Xl, x2 E X, x1 < x2 implies F(x1 ) > F(x2).
(d) F is strictly decreasing if, for all xl, X2 E X, x1 < X2 implies F(x1) > F(x 2).
Example 18. The following functions are increasing:
(a) The function F : R --* R where F(x) = x3 is strictly increasing (see Figure 4.19).
y
0.6--
0.4
0.2
-3 
-2 
-1 
.2-
(-0.4
_-0.6
F(x) 
x3 .
(b) The function Floor :R -N N is increasing but not strictly increasing (see Figure 4.20).
y
o points not included
-
in the line
0o-
I I 
I 
x
-3 
-2 
-1 
-- --- 1
o 
--
0- 
-3
Floor
Theorem 2. 
Suppose X C R and F : X -- JR is a strictly increasing function. Then,
F is 1-1.

Exercises 
Proof. This proof is left as an exercise for the reader. 
U
Of course, the definitions of the terms strictly increasing and strictly decreasing do
not involve anything special about R, just that it has the relations < and <. Consequently,
a similar definition could be made for any linearly ordered, or even any partially ordered,
domain and codomain.
Exercises
1. Which of the following are functions? If not, why not?
(a) X is the set of students in the discrete mathematics class. For x E X, define g(x)
to be the youngest cousin of x.
(b) X is the set of senators serving in 1998. For x E X, define g(x) to be the number
of terms a senator has held.
(c) Forx E R, define g(x) = Ix/lxl1.
2. Let X={0,1 ... 
6, 7} and Y ={8,10,12,..., 20, 22). Define F:X -*Y as
F(x) = 2x + 8. List the ordered pairs of the relation that define this function.
3. What are the domain and range of the addition function on the real numbers? On
Multiplication? Subtraction? Division?
4. Find the first six terms of the sequence with the elements defined as F(O) = 5, F(1) =
10, and F(n) = F(n - 1) - 2F(n - 2) for n > 2.
5. Find the first six terms of the sequence with the elements defined as F (0) = 1, F (1) =
3, F(2) = 5, and F(n) = 3F(n - 1) + 2F(n - 2) - 3F(n - 3) for n > 3.
6. Find both a function defined by a formula and a recursively defined function for the
following sequences:
(a) 1, 3,5, 7,9, 11, 13, .
(b) 1, 1, 3, 3, 5,5, 7, 7,...
(c) 0, 2, 4, 6,8 .8
(d) 1, 2,4, 8, 16,...
7. Which of the following represent a partial function? A (total) function?
a 
I ? 
aea 
1 7 
a
b 
b 
b 
.ob
9c 
-oc
4* 
od 
4 *--- d 
d 
4 9---- d
8. Let X = {a, b}.
(a) There are nine partial functions F : X -* X. List them.
(b) There are four functions F : X 
-
X. List them.
(c) List all 1-1 functions F : X -
X.
(d) List all onto functions F : X -
X.
9. Let X = {-1, 0, 1, 21 and Y = {-4, -2, 0, 2}. Define the function F: X -
Y as
F(x) = x2 - x. Prove that F is neither 1-1 nor onto.

CHAPTER 4 
Functions
10. List all 1-1 and onto functions from {1, 2, 31 to itself.
11. Let A be a set with three elements and B be a set with two elements.
(a) How many different functions are there with domain A and codomain B?
(b) How many different functions are there with domain B and codomain A?
(c) How many different 1-1 functions are there with domain A and codomain B?
(d) How many different 1-1 functions are there with domain B and codomain A?
12. Determine which of the following functions are onto:
(a) F1 :]R -> R where F, (x) = x 2 -
1.
(b) F2 : 
Z 
--+ 2 where F2 (x) = [x] ([xl is the "ceiling" of x).
(c) F3 : 
Z 
-
2 where F3 (x) = x3.
(d) F4 : R -- IR where F4 (x) = x3.
(e) For the linear ordering < on R, list all the increasing functions among parts (a)
through (d).
(f) For the ordering < on IR, list all the strictly increasing functions among parts (a)
through (d).
13. Which of the functions in Exercise 12 are 1-1? Prove each of your answers.
14. Two months are equivalent if their 13th day must fall on the same day of the week in
every (nonleap) year.
(a) Show that the 13th day of the 12 months occur on seven different days of the week.
(b) Conclude that there must be at least one Friday the 13th in each year.
(c) Show that there are at most three Friday the 13th's in any year.
(d) Show that the result is also true for leap years.
(Hint: Number the days of the year from 1 (January 1) to 365 (December 31), and then
show that the days representing the 13th days of these months occur on seven different
days of the week.)
15. Let A = {1, 2, 3, 41 and B = {a, b, c}. Define a function F : A -* B as F(1) = a,
F(2) = b, F(3) = c, and F(4) = c. List the ordered pairs of the equivalence relation
R defined on A as x R y if and only if F(x) = F(y). List the elements of the partition
of A determined by this equivalence relation.
16. Let FTo, 1,2) be the set of all functions with domain and codomain equal to {0, 1, 21. For
each of the following relations, prove that the relation is an equivalence relation. Also,
find the distinct equivalence classes of each equivalence relation. Let F, G E 51 0 , 1,21.
(a) F R G if and only if range(F) = range(G).
(b) F R G if and only if max(F) = max(G).
(c) F R G if and only if F(0) + F(1) + F(2) = G(0) + G(1) + G(2). For this prob-
lem, two functions are related if the sum of their images, seen as an operation in
the natural numbers and not in the function space, are equal.
17. Find two functions F, G : R --* R where F 0 G but F 1[0,1) = G I [0,1).
18. Let F : R --- JR with F(x) = x2 . The following is a function from R to RR:
IdR 1[2,.) U Zero 1[0,2) U F I(,
0 )
Write an algorithm to compute this function.
19. Let A, B, and C be sets, and let F : A --* C be a function. If B C A, prove that
FIB = Ffn(B x C).

Exercises 
20. Prove that the function F : Z -* Z defined as F(n) = n + 6 is a bijection.
21. For each of the following functions, prove that the function is 1-1 or find an appropri-
ate pair of points to show that the function is not 1-1:
(a) F 2 
Z- 
Z
F) n 2 
for n > 0
F 
I)=-n2 
for n < 0
(b) F :R 
R- 
JR
F(x)= x +l 
forxEQ
12x 
for xQ
(c) F :R -R J
\ 
+3x+2 
forxEQ
F(x)= x3 
forxgQ
(d) F Z -Z 2
n +1 
fornodd
Fln 
I n3 
for n even
22. (a) Find functions from R to R that are:
i. 
strictly decreasing
ii. decreasing but not strictly decreasing
iii. neither increasing nor decreasing
iv. both increasing and decreasing
(b) Show that no F : 
-+ R is both increasing and strictly decreasing.
(c) Find a subset X C JR and a function F : X -+ X where F is both strictly increas-
ing and strictly decreasing.
23. Construct functions with the following properties:
(a) F : N -+ N such that range(F) = N and, for each n E N, there exist exactly two
solutions for the equation F(x) = n.
(b) F : N -> N such that, for each n E N, there are exactly n solutions for the equation
F(x) = n.

CHAPTER 4 
Functions
24. Prove Theorem 3.
25. Using the numbering scheme for the letters of the alphabet as given in Section 4.1.8,
encrypt the message DISCRETE MATH IS GREAT using the function F(letter) =
17(lettervalue) + 9(mod26). List the letters of the encrypted message. Find the in-
verse function, and decrypt the message. (Hint: 23. 17 = 1 (mod 26).)
26. Using the numbering scheme for the letters of the alphabet given in Section 4.1.8,
encrypt the message DISCRETE MATH IS GREAT using the function F(letter) =
(11 (letter value) + 13) mod 26. List the letters of the encrypted message. Find the in-
verse function, and decrypt the message. (Hint: 19. 11 = 1 (mod 26).)
27. For the American history fan: Consider the list of U.S. presidents up through Harry
Truman. Define the following "function" on all presidents before Harry Truman: The
successor of X is the person who followed X as president. Why is successor not a
function?
28. Define a function F : N --+ N such that F(n) = n -
10 if n > 100 and F(n) =
F(F(n + 11)) ifn < 100.
(a) Show that F(99) = 91.
(b) Prove that F(n) = 91 for all n such that 0 < n < 100.
29. Let A, B, and C be sets, and let F : A -- C and G : B -- C be functions.
(a) What condition must F and G satisfy for F U G to be a function from A U B
to C?
(b) Give conditions on A and B such that F U G is a function for every F : A --+ C
and G: B --+ C.
30. Let F be a function, and let C, D C domain(F).
(a) Prove that range(F IcnD) S; range(F 1c) n range(F ID).
(b) Show by example that equality need not hold in part (a).
31. If looked at appropriately, the definition of a function as a set of ordered pairs and the
intuitive notion that a function is something given by a rule are equivalent. Develop
that equivalence here. Assume that F has a finite domain {0, 1, 2. 
n -
11 and a
finite codomain t0, 1, 2 ...
, m -
1}.
(a) Suppose F is a function given as a set of ordered pairs. For an input xl, give a rule
for calculating F(xl). Use F (or its graph) in your rule.
(b) Suppose the function F is given by a rule. Express F as a set of ordered pairs.
32. Find a combinatorial circuit for each of the following boolean functions:
(a)
p Iq 
F(p, q)
I 
I 
I

Operations on Functions 
(b)
p Iq 
r 
Fpqr
I 
0[0 
(c)
pV qY r 
F(p,q,r)
rnOperations on Functions
Since functions and partial functions are special types of binary relations, all operations
defined on binary relations can be applied to functions. The most interesting operations,
however, are composition and inversion.
4.3.1 
Composition of Functions
The definition of the composition of functions is exactly the same as that of the composition
of relations. We merely restate it here using the vocabulary of functions.

CHAPTER 4 
Functions
Definition 1. Let both F : X --* Y and G : Y --> Z be partial functions. The composi-
tion of G and F is
GoF={(x,z) eXxZ: forsomeyEY, y=F(x)andz=G(y)}
Thus, (G o F)(x) = G(F(x)).
It turns out that the composition of two functions is always a function.
Example 1. Start with the SeatOf function for a class:
SeatOf = {(Jean, Seat2), (Michele, Seat5), (Paul, Seat3)}
Assume that just before the class started, workers finished repainting the desks in the fol-
lowing colors:
ColorOjSeat = {(Seatl, red), (Seat2, red), (Seat3, green), (Seat4, green), (Seat5, red)}
The definition of ColorOJSeat o SeatOf is
{(x, z) : for some y, y = SeatOf(x) and z = ColorOfSeat(y)}
Now, unravel that definition. Start with x = Jean. Since SeatOf is a function, there is ex-
actly one object y = SeatOf (Jean), which is Seat2. Figure 4.21 shows this procedure.
Jean 
SeatOf (Jean) = Seat 2
Jean and SeatOf(Jean).
Since ColorOfSeat is a function, there is exactly one object z = ColorOJSeat(Seat2), which
is red. This object can also be referred to as ColorOfSeat(SeatOf(Jean)). Figure 4.22 shows
this procedure.
Jean 
SeatOf(Jean) = Seat 2 
ColorOjSeatOf(Jean) = Red
The same sort of analysis holds also for ColorOfSeat (SeatOf(Michele)) and ColorOf-
Seat(SeatOflPaul)). The function is given as
ColorOf o SeatOf = [(Jean, red), (Michele, red), (Paul, green)}
In general, composition of functions is a function. The operation can even be stated
for partial functions.

Operations on Functions 
Theorem 1. 
Let X, Y, and Z be sets. Let both F : X -
Y and G : Y --- Z be partial
functions. Then, G o F is a partial function from X to Z. Moreover, for every x E X, the
following hold:
(a) If F(x) is undefined, then (G o F)(x) is undefined.
(b) If F(x) is defined but G(F(x)) is undefined, then (G o F)(x) is undefined.
(c) If F(x) and G(F(x)) are defined, then (G o F)(x) is also defined, and (G o F)(x) =
G(F(x)).
The proof of Theorem 1 is omitted, since it is just a formalization of the discussion in
the example above. One important corollary to Theorem 1 is used all the time. This corol-
lary says that the composition of functions is an associative operation, just like addition
and multiplication with real numbers as well as union and intersection of sets.
Corollary 1: 
Let F:X--> Y,G:Y-- Z, andH:Z--* W be functions. Then, Fo
(G o H) = (F o G) o H.
Corollary 4.1 follows from Theorem 3 by reducing both F o (G o H)(x) and (F o
G) o H(x) to F(G(H(x)).
For functions F and G, one often defines G o F(x) to be G(F(x)). Since we have
already defined the operation o on relations in Section 3.2.2, we only had to show that
(G o F)(x) is the same as G(F(x)).
Example 2 shows that the composition of functions is not a commutative operation.
Example 2. 
Let G : N -* N and H : N --* N be given by the rules G(n) = n2 + I and
H(n) = 2n. Then, (H o G) : N -- N, and for all n E N, we have (H o G)(n) = 2n2+1. By
contrast, (G o H)(n) = 22n + 1.
Earlier, we studied 1-1 and onto functions. It is now natural to ask whether the com-
position of 1-1 functions is 1-1 or whether the composition of onto functions is onto. We
answer these questions in Theorem 2.
Theorem 2. 
Let F : X -- Y and G : Y -- Z be functions.
(a) If F and G are both 1-1, then G o F is 1-1.
(b) If F and G are both onto, then G o F is onto.
(c) If F and G are 1-1 correspondences, then G o F is a 1-1 correspondence.
(d) If G o F is 1-1, then F is 1-1.
(e) If G o F is onto, G is onto.
Proof. These proofs are left as exercises for the reader. 
4.3.2 
Inverses of Functions
Recall the definition of the inverse of a relation given in Section 3.2.1. For any relation R
defined on a set X,
R- 
= {(y, X) E X x X: (x, y) E R)
Since functions are relations, they also have inverses.

CHAPTER 4 Functions
Definition 2. 
Let F = {(x, y) E X x Y : F(x) = y} be a function. The inverse of F,
denoted by F 
, is the relation
F-1 = {(y,x) E Y x X: F(x) =y}
Example 3. 
Consider a business where each employee has an employee number and no
two employees have the same number. The function
EmplNoOf : Employees --* EmplNos
and its inverse, EmplNoOf-1, are pictured below in Figure 4.23.
Employees 
Employee
Records
• 
31,852
I 
Er~tpI 
With
EmplAkO• f 
43,765
EmplMoOf 
37,895
S EmttplMoOf 
45,722
Ettpi Wth
EmplMof 
15,242
EmpiWith
Employee functions.
The function EmplWith, as shown in Figure 4.23, would normally be a partial function
since employee numbers are very rarely a set of consecutive integers. The gaps between
employee numbers would represent values for which the function is not defined.
Example 4. Define two functions, Succ and Pred, from Z to Z. Let Succ(z) = z + 1 and
Pred(z) = z - 1. We can show that Pred- 1 = Succ.
Solution.
Pred = {(z, z -
1) : z c Z}
And
Succ = {(z, z + 1)': z G Z
= {(zI -
1, zl) :z Z 
} 
(substitute z= z +l)
= {(z - 1, z) : z E Z) 
(substitute z for zI--since z is no longer in use,
it can be reused)
= Pred-1 
I

Operations on Functions 
The inverse of a function F is not always a function or a partial function. If, however,
F is 1-1 or a 1-1 correspondence, then we have Theorem 3.
Theorem 3. 
Let F : X -- Y be a function.
(a) F-1 is a function from Y to X if and only if F is a 1-1 correspondence.
(b) F- 1 is a partial function from Y to X if and only if F is 1-1.
(c) If F is a 1-1 correspondence, then F-1 : Y -- X is a 1-1 correspondence.
Proof.
(a) This proof is left as an exercise for the reader.
(b) F- 
is a partial function
.• 
for each y c Y, there is at most one x E X with (y, x) E F- 1
.:• for each y E Y there is at most one x E X with (x, y) E F
4•. F is 1-1.
(c) This proof is left as an exercise for the reader. 
A function whose inverse is a function is also referred to as being invertible.
Theorem 4. 
Let X be a set, and let F : X -+ Y be a 1-1 and onto function.
(a) F-1 oF=Idx
(b) F o F- 1 = Idy
Proof.
(a) First, observe that F- 1 o F is a 1-1 correspondence. This follows from three facts:
(i) F is given as a 1-1 correspondence; (ii) by Theorem 3(c) we have F-1 is a 1-1 corre-
spondence; and (iii) by Theorem 2(c) F- 1 o F is a 1-1 correspondence.
Now, let x E X. Since F is a total function, there is a y E Y such that (x, y) E F. By
the definition of an inverse, we have (y, x) E F- 1. By the definition of composition of
functions (see Section 4.3.1), it follows that (x, x) E F- 1 o F. That is, Idx g F-1 o F.
To show that F- 1 o F C Idx, let (x, x') E F- 1 o F. Since we have just seen that
(x, x) E F-1 o F and we observed that F-1 o F is 1-1, we must have x' = x; that is,
(x, x') E Idx. Therefore, F-1 o F C Idx.
(b) By Theorem 3, F-1 is 1-1 and onto. It follows from part (a) that (F-l)-1 o (F-1) -
Idy. By Theorem 2 in Section 3.2.1 it follows that F o F-1 = (F-l)-1 o F. Now, by part
(a), (F-l)-1 o F = Idy. 
M
Very infonnally, Theorem 4 can be summarized as saying that if F-1 is a function at
all, then F-1 "undoes" what F "does."
Example 5. 
The function exp(x) = ex where e, the real number 2.718281828459 ....
is called the exponential function base e, which is also called exp. The function exp :
IR -+ (0, oo) is strictly increasing, 1-1, and onto. Its inverse is called the natural logarithm
function, designated In. Hence, y = In(x) is true if and only if x = exp(y) is true. It is also
easy to show that In is strictly increasing.

CHAPTER 4 
Functions
4.3.3 
Other Operations on Functions
The reader is familiar with operations on polynomial functions. Consider polynomial
functions F, G : R --> R where F(x) = x2 and G(x) = 2x + 1. Then, (F + G)(x) is de-
fined as
(F + G)(x) = F(x) + G(x) = x2 + 2x + 1
This is a very different sort of operation on functions in that it uses the operation + on
1R, whereas composition and inversion operations make no reference to operations on the
codomain of the function.
Definition 3. 
Let F, G : X -R 1 be functions. The following are functions:
(F+G) : 
X--1R
x -
F(x) + G(x)
(F - G): 
X 
R
x -
F(x) • G(x)
IFl: 
X-R
x-÷ I F(x)l
Define the following partial function:
(F/G) : X --> R by the rule (F/G)(x) = F(x)/G(x)
The function F/G is total if and only if G(x) A 0 for all x E X.
Of course, the same definitions make sense if the codomain is Q, Z, or N. In general,
any operation on the codomain may be used to define an operation on functions.
Definitions such as Definition 3 create some very ambiguous notation. For x, a real
number, x- 1 denotes 1/x. So, F-l(x) should denote 1/F(x). The symbol F- 1, how-
ever, also means the inverse function, which is not at all the same thing. The symbol F-1
usually-but not always-denotes the inverse function. In this book, we shall use F-1 only
to denote the inverse function.
Sequences and Subsequences
This section introduces functions defined on N and its subsets that we commonly refer to
as sequences. Subsequences are formed by using the operation of composition of functions
on subsets of N.
Intuitively, a sequence is a list of objects in order, such as
red, orange, yellow, green, blue, indigo, violet
where red is first, followed by orange ... 
followed by violet. Other sequences are the
prime numbers listed in increasing order:
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,....
or the natural numbers in increasing order:
0, 1,2,3,4,5,6,7, 8,9, 10, 11, 12 .

Sequences and Subsequences 
Definition 3. 
An infinite sequence of elements of a set X is a function F : N --+ X.
A function F : {0, 1, 2, ... ., n -
11 -+ X for some n E N is a finite sequence of elements
of X of length n. The expression sequence of elements of X means a finite sequence of
elements of X or an infinite sequence of elements of X.
In computer programming, finite sequences are often called lists. Infinite sequences
are often called streams and sometimes also lists. Often, if F is a finite sequence of ele-
ments, then its elements are denoted not as
F(0), F(1),..., F(n -
1)
but, rather, as 
X X 
-.
Similarly, an infinite sequence is usually written as
Xo, X1, 
• - Xn,.
An infinite sequence of real numbers is a function from N to R. For example,
n
Xo 
-, 
X1 
-, 
X2=- ..... 
xn- 
.
is an infinite sequence of real numbers.
For any X C R•, a sequence F of elements of X is increasing if, thought of as a
function from N to X, F is increasing. Thus, the sequence
n
XO 
1, Xl-, 
X2 = 
...... 
Xn-
is increasing. The terms increasing, decreasing, strictly increasing, and strictly decreas-
ing apply to sequences in the same way.
Example 6.
(a) The elements of a sequence need not be different. For example, 0, 0, 0, 0 .... is a se-
quence. Formally, this sequence is given by the function Zero : N -- N defined by the
rule Zero(n) = 0.
(b) Let F : N --+ Z be defined by the rule F(n) = (-1)n. Then, F is the sequence
1, -1, 1, -1, 1, -1 ....
(c) Let Fact(n) = n!. Then, Fact defines the sequence
1,1,2,6,24, 120, 720....
An important notion associated with sequences is the notion of a subsequence. Intu-
itively, a subsequence is just a subset of a sequence, with the elements of the subsequence
occurring in the same order as they do in the sequence.
Example 7. 
For the sequence of factorials
1, 1, 2, 6, 24, 120, 720, 5040, 40,320, ...
the following are subsequences:
(a) 0; the subsequence of length 0
(b) 1, 6, 120, 5040, ... ; every other factorial, starting with the second one
(c) 1, 1, 2, 6, 24, 120, 720, 5040, 40,320 .... ; the entire sequence
(d) I the first element alone
(e) 2, 6, 40,320; another finite subsequence

CHAPTER 4 
Functions
What, more precisely, is a subsequence? Think of an infinite sequence:
XO, XI, X2, X3, X4, X5, X6 .....
Pick out a subset of the subscripts, such as subscripts
1,2,4,8, 16,32....
and then list the corresponding elements of the sequence in the same order as used in the
original sequence:
X1, X2, X4, X8, X16, X32,...
The chosen subscripts themselves form a sequence:
i0 = 1, il = 2, i2 = 4, i3 = 8, i4 = 16, i5 = 32....
So, the subsequence is
XiO, xiI , xi 2 , xi 3 , xi 4 , xi5, ....
(See Exercise 13 in Section 4.5 for missing details.) The important point is that the elements
are listed in the same order as in the original sequence; that is,
i0 < il < i2 < i3 <i4 < i5 < ...
is itself a strictly increasing sequence.
Definition 9. Let F be a sequence, and let S be a strictly increasing sequence of elements
of the domain of F. Then, F o S is a subsequence of F.
The proof that Definition 8 formalizes the previous discussion is left as an exercise.
Example 8. 
In the definition of a subsequence, the sequence S was required to be strictly
increasing. The sequence of elements in a sequence F are not required to be increasing; as
a result, the subsequence of elements determined by F o S need not be strictly increasing.
For example, let F : N -* IR where F(n) = (-1)n/(n + 1). So, F is the sequence
1, -
-.-
1, 2 
3' 
4 .....
(a) If S is the sequence 0, 2, 4 .... of even natural numbers, then F o S is the subsequence
consisting of every other element of the sequence F, starting with the first element:
1 1
1, 
-
-
3' 5'. .
which is decreasing.
(b) If S is the sequence 1, 3, 5, ... of odd natural numbers, then F o S is the sequence
consisting of every other element of the sequence F, starting with the second element:
2' 
4' 
6''. .
which is increasing.

Exercises 
W 
Exercises
1. Let X = {1,2, 3, 4} and Y = {5, 6, 7, 8,9}. Let F = {(1, 5), (2,7), (4,9), (3, 8)}.
Show that F is a function from X to Y. Find F- 1, and list its elements. Is F- 1 a
function? Why, or why not?
2. Let S = {(0, 8), (1, 10), (2, 12), (3, 14), (4, 16), (5, 18), (6, 20), (7, 22)). Is S a function?
Why, or why not? Find S-1, and list its elements. Is S-1 a function? Why, or why not?
Identify the domain of S-1.
3. Let X = {1, 2, 3, 41. Let F : X -* IR be a function defined as the set of ordered pairs
{(1, 2), (2, 3), (3, 4), (4, 5)}. Let G : R -* IR be the function defined as G(x) = x2 .
What is G o F?
4. Let F : R --* R be defined as F(x) = 2x + 8. Let G : R --* R be defined as G(y) =
(y - 8)/2. Prove that F o G = IdR and G o F = IdR.
5. Define the functions F, G, and H as indicated in the following diagrams:
--- 
a 
a 
-- 
ee 
e *--- 
r
2~ 
.b 
b 
*1ý 
f fe- 
es
c 
C -
eg 
g 
e- t
e d 
d 
./ed 
h
F 
G 
H
Find the following:
(a) G o F
(b) H o (G o F)
(c) (H o G) o F
6. Let X = {0, I, 21 _ IR. List all eight strictly increasing sequences of elements of X.
The ordering is < on IR. List all subsequences of the sequence x, y, z.
7. Let A = {1, 2, 3, 4}. Let the functions F, G, and H be given with domain and
codomain A defined as
F(1) = 3, F(2) = 2, F(3) = 2, and F(4) = 4
G(1) = 1, G(2) = 3, G(3) = 4, and G(4) = 2
H(1) = 2, H(2) = 4, H(3) = 1, and H(4) = 3
Find the following:
(a) F o G
(b) H o F
(c) Go H
(d) FoGoH
8. Let A be a rule for defining a function F : N --* N such that F is 1-1 and onto. Show
how to construct a rule for defining F- 1.
9. For sets X, Y, and Z, let F : X ->. Y and G : Y -* Z be 1-1 correspondences. Prove
that (G o F)- 1 = F- 1 o G- 1 .

CHAPTER 4 
Functions
10. Find the first six terms of the sequences defined for n > 0 as:
(a) H(n) = n2 (n + 1)2/4
(b) G(n) = 
n -
(c) F(n) = (-1)n2n - 3fn
11. Find the first six terms of the sequences defined as:
(a) H(O) = 0 and H(n) =H(n - 1) + n3 for n > 1
(b) G(O) = 0 and G(n) =2G(n - 1) + I forn > 1
(c) F(0)=2andF(n)=3F(n-1)-n+3forn> 
12. Find a recursively defined function that gives the terms of the following sequences:
(a) 2, 5, 8, 11, 14, ...
(b) 3, 6, 12, 24, 48, ...
13. The formal definition of a sequence was in terms of a function F, with domain either
N or {0, 1 .... 
n -
1}. (Ifn = 0, then {0, 1 .... 
n -
1} = 0.) The formal definition of
a subsequence involves a sequence F and a strictly increasing sequence S of elements
of the domain of F. Since S is a sequence, S is, formally, another function as above.
In parts (a) through (e) of Example 7, identify the functions S and F o S as sets of
ordered pairs.
14. Prove the following:
(a) Theorem 2(a)
(b) Theorem 2(b)
(c) Theorem 2(d)
(d) Theorem 2(e)
15. Prove the following:
(a) Theorem 3(a)
(b) Theorem 3(c)
16. Let A and B be nonempty sets, and let F : A -
B be a function. Prove that the fol-
lowing are equivalent:
(a) F is onto.
(b) There is a function G : B --* A such that F o G = ldB.
(c) For any set C and for functions H 1 : B -+ C and H2 : B --- C, if H1 o F = H 2 o
F, then H1 = H2 .
17. Let A and B be nonempty sets, and let F : A -+ B be a function. Prove that the fol-
lowing are equivalent:
(a) F is1-1.
(b) There is a function G : B --* A such that G o F = IdA.
(c) For any set C and for functions H1 : C --, A and H2 : C -+ A, if F o H1 = F o
1H2, then HI = H2.
18. Let A and B be sets with A1, A2 c A, and let F : A --+ B. Let F(A1 ) denote {F(x):
x e Ai } for i = 1, 2. Show that:
(a) If A1 _C A2, then F(A1) C F(A2).
(b) F(A1 U A 2) = F(A 1) U F(A 2).
(c) F(Ai n A2) C F(A1) n F(A2).

The Pigeon-Hole Principle 
(d) F(A 1) - F(A 2) _ F(Ai - A2 ).
(e) A, c F-I(F(A1)).
(f) Find an example in which A 1 C A2 but F(A 1) = F(A 2 ).
(g) Find an example in which A 1 36 F- 1 (F(A 1)).
19. Let A be any nonempty set, and let .FA be the set of all functions from A to R.
(a) Why is F + G E YA for all F, G e .A.
(b) Prove (F+G) +H = F+(G+H) for all F,G,H E•YA.
(c) Let Zero E .FA be defined by Zero(a) = 0 for all a E A. Prove that Zero + F = F
for all F E `A.
(d) For F E .- A, define P by F(a) = -F(a) for each a E A. Prove that F + F =
Zero = F + F for all F E YA.
20. Let .A 
be defined as in Exercise 19. For each F, G E .FA, define F . G(a)=
F(a) . G(a).
(a) Why is F. G eFA for all F, G e•YA?
(b) Prove that F. G = G. F for all F, G E YA.
(c) Prove that (F. G). H = F. (G. H) for all F, G, H E .A.
(d) Prove that the function U : A --> R defined by U(a) = 1 for all a E A satisfies
U.F = F = F. U for all F E YA.
(e) Prove that (F+G)•H = F.H+G.H for all F,G, H E.-A with F+G de-
fined as in Exercise 19.
(f) Prove there are F, G Ef7A such that F 0 Zero and G # Zero but F. G = Zero.
21. (a) Let F : A -- B be a function. Prove that F is onto if and only if F- 1 (Bi) A 0 for
each nonempty subset B1 of B.
(b) Let F : A -> B be a function. Prove that F is onto if and only if F(F-I (B1 )) 
-
BI for all B1 C B.
22. Let X be a set, and let .Fx be the set of all 1-1 functions from X onto X. We have two
operations on functions in Fx : o and -1. Prove the following statements called group
axioms. (If the results are already proved in the book, note where to find the proofs.)
(a) For all F, G E Yx, F o G E Y.
(b) For all E, G, H c .x, 
(F o G) o H = F o (G o H) (Associative Law).
(c) For all F E Fx , F o Idx = Idx o F = F. (Identity Axiom).
(d) For all F E Yx, there exists an F-
1 such that F o F-1 = F-
1 o F = Idx (In-
verse Axiom).
23. An operation ® on a set Y is commutative if for all y, z E Y, y ® z = z ® y. For X
and .x 
as defined in Exercise 22, prove that o need not be commutative on .x.
24. Let F: A --+ B be a function. Define G : P(3) -> P'(A) by G(B 1) = F-I(B1).
Prove that G is 1-1 if and only if F is onto.
U 
The Pigeon-Hole Principle
After a February town meeting in rural New England, the 200 people attending entered the
parking garage to get their cars and drive home. (Assume that no one was walking home
in the typical winter weather.) An observer counted 65 cars exiting the parking garage.

CHAPTER 4 Functions
What can we conclude about the function that maps people to the cars in which they are
riding? Is it 1-1? Is it onto? How far is it from being 1-1? From being onto? A similar
question could be how many of the students in your class have a birthday on the same day
of the week this year. The results of this section will help you answer these and similar
questions as well as see applications of the results presented in other contexts.
For the remainder of this chapter, we will discuss only total functions.
4.6.1 
kto 1 Functions
The first step in answering the questions posed at the beginning of this section is to deter-
mine if more than one element in a function's domain must be mapped to a single element
in the function's range.
Definition 1. 
Let F : X -+ Y be a function. Let k E N. F is k to 1 if, for each y E Y,
there are at most k different x's in X with F(x) = y. Alternatively, for each y E Y,
I {x e X : F(x)= y I <_k
Example 1.
(a) Let F : {0, 1, 2, 31 --* {a, b, c, d} be a function defined as
o
d
F
F is 2-1.
(b) Let F : (0, 1, 2, 3} -[ 
{a, b, c} be a function defined as
o
.
d
F
F is 3-1. F is neither 2-1 nor 1-1.
It may seem strange that a 1-1 function is 58 to 1, but it certainly is by the definition.
If k elements are mapped to a given element, the function is not m to 1 for any m < k but,
rather, is m to 1 for any m > k. Definition 1 gives a way to talk about the more important
fact that is the smallest integer for which some element in the codomain has k preimages.
Theorem 1. 
Let F : X -+ Y is k to 1, and let I Y I be finite, with IYl = n. Then, X is
finite, and I X I < k n.
Proof For each of the n elements of Y, there are at most k elements of X mapped to each
element of Y. So, only k • n elements can be mapped to all the elements of Y. However,

The Pigeon-Hole Principle 
every element of X is mapped to some element of Y, so there are at most k . n elements
in X. 
M
4.6.2 
Proofs of the Pigeon-Hole Principle
Consider again the New England town meeting example. If at most one person left in each
car, then at most 65 people left the garage. This notion is formalized in the contrapositive
to Theorem 1, which is used more often than the theorem itself. The contrapositive is so
important that we state it separately, in two variants. The contrapositive has two names: the
Pigeon-Hole Principle and the Dirichlet Drawer Principle. A more colorful description
of this principle is often given in terms of pigeons and nesting holes. Suppose m pigeons
are placed into n nesting holes where m > n. Then, (at least) one nesting hole contains (at
least) two pigeons.
Theorem 2. (Generalized Pigeon-Hole Principle) 
Let F : X --* Y be onto where
I X I = m and I Y I = n. Then, there is a y E Y that is the image of at least
elements of X.
Proof. Suppose no y is the image of more than [ ] -
1 elements of X. Then, the total
number of elements in X is at most
m 
(F 
-1 
<n ( 
)+ 
m-1)=
This contradiction proves the result. 
U
The formulation of the Generalized Pigeon-Hole Principle involved the ceiling func-
tion. It can also be stated using the floor function since for m > n > 0, we have
Example 2. 
Suppose a class has 89 students. How many students (at least) must have a
birthday in the same month.
Solution. Use the Generalized Pigeon-Hole Principle, and calculate
F128
11-91_-
The same answer can be found by computing
89- 
1 2 
+1=8M
Theorem 3. (Pigeon-Hole Principle) 
Let X and Y be sets, and let F : X -+ 
Y where
X and Y are finite and I X I > I Y I. There is a y E Y that is the image of at least two
elements of X.

CHAPTER 4 
Functions
Proof By Theorem 2, ifm= lXI andn= YI within >n, then >_n+1, which
implies
[m ] 
[n + 
>l
n 
-- 
n 
-
M
Theorem 3 gives a condition that ensures a function is not 1-1 when X and Y are finite
sets.
Example 3. 
The setting for this example is a room containing 367 people.
(a) At least two of these people have the same birthday.
(b) At least 31 of these people were born in the same month (though possibly in different
years).
(c) Provided no one is more then 121 years old, at least four of these people are the same
age (number of years).
Proof
(a) Let X be the set of people. Let Y be the set of the 366 possible birthdays. Let
BirthDay : X -* Y map each person to his or her birthday. Then, by the Pigeon-Hole Prin-
ciple (Theorem 3), BirthDay is not 1-1.
(b) Let X be the set of people, and let Y be the set of the 12 months. Let
BirthMonth : X -) Y
be the mapping that takes a person as input and gives the month containing that per-
son's birthday as output. By the Generalized Pigeon-Hole Principle (Theorem 4.2), at least
L (367 - 1)/12j + 1 = 30 + 1 people will have the same birth month.
(c) This proof is left as an exercise for the reader. 
U
Theorem 4 deals with the question of how far a function is from having a single image
for each element of the domain by guaranteeing that some element will have many images.
Theorem 5 is related to the idea that a function is 1-1.
Theorem 4. Let F:X- 
YwhereXandY are finite. LetkENandIX >k'IYI.
Then, F is not k to 1.
Theorem 5. 
Let F : X -
Y where X and Y are finite with IXi = Y I. Then, F is 1-1
if and only if F is onto.
Proof
(::) 
Prove the contrapositive: If F is not onto, then F is not 1-1. If F is not onto, then
there is a y E Y that is not in the range of F. So, F is also a function from X to Y - {y}.
I Y - {Y} I < I Y I = I X 1, so by the Pigeon-Hole Principle, F is not 1-1.
(.:::) 
Prove the contrapositive: If F is not 1-1, then F is not onto. Suppose F is not 1-1,
and let n = I X I. There are at least two elements of X with the same image. Pick two, and
call them xl and x2. Let the remaining elements of X be X3, X4. 
Xn. Now, count the
elements in
range(F) = {F(x) :x E X} = {F(xj), F(x 2), F(x 3), .... , F(xn)}

The Pigeon-Hole Principle 
Since F(xl) = F(x 2), F(xl) and F(x2) account for one element in range(F). The elements
F(x 3 ), F(x 4) ..... 
F(xn)
account for at most n -
2 more. That leaves at most n - 1 elements in range(F). Since Y
has n elements, range(F) is not all of Y, so F is not onto. 
Theorem 6. 
Let X and Y be sets and X be finite. Let F : X --* Y be 1-1 and onto. Then,
Y is finite, and I X I = I Y 1.
As an example of applying Theorem 6, suppose a professor enters a classroom that she
knows contains 55 chairs. Now, suppose the professor can see that all students are seated,
no chairs are empty, and no chair has two people sitting in it. If the professor wants to
know how many students are seated in the room, it is not necessary to count them. Let
the function SeatOf map each student to the chair that student occupies. The professor has
observed that SeatOf is 1-1 and onto. Therefore, the number of students equals the number
of chairs: 55.
4.6.3 
Application: Decimal Expansion of Rational Numbers
We will present several examples and prove several theorems that are applications of the
Pigeon-Hole Principle. These results are interesting in their own right, but they also give
insight regarding possible applications of the Pigeon-Hole Principle.
The first application concerns converting fractions to decimals or, in more formal lan-
guage, expressing rational numbers as decimals. A rational number of the form
0.di d2 ... 
dndi di +l ... 
dndidi+j ...
' d, '
with the digits didi+l ... d, repeating is denoted as
0.dld2 ... 
di-ldidi+l ... 
d.
The following are examples of the conversion of a fraction to a decimal with the special
notation for the repeated digits:
-
= 0.1 = 0. 10000... 00 ... = 0.10
-
4.08 = 4.08000.. 
... 
=0. 
4.080
251-- = 0.333333 ... 33 .... = 0.3
= 0.181818... 1818 ... =0.18
The decimal expansions of 1/10 and 102/25 are finite or terminating. All but a fi-
nite number of their decimal digits are 0. The decimal expansions of 1/3 and 2/11 are
nonterminating or infinite. All these decimal expansions are repeating: After a certain
point, the decimal expansion can be generated by repeating a block of digits infinitely many
times. The decimal expansions of 1/10 and 102/25 have repeating O's. The expansion of
1/3 has repeating 3s. The expansions of 2/11 has the two digits, 18, repeating. There are
some rationals that have two repeating decimal expansions, such as 1.0000... and 0.9. (See
Exercise 14 in Section 4.5.)

CHAPTER 4 
Functions
Study the example for finding the decimal expansion of the rational number 3/7, as
shown in Figure 4.24, to gain an insight regarding how the formal proof that follows will
proceed.
.42857 1 4...
7) 3.0000000...
Long division to calculate decimal expansion of 3/7.
The decimal expansion of 3/7 can be seen to repeat. After the sixth decimal place
has been calculated, the remainder is 3, and the rest of the division process corresponds
to dividing 7 into 0.000003. That is the same process as dividing 7 into 3, except that it is
shifted six decimal places to the right. Therefore, exactly the same sequence of quotients
and remainders will be generated as before, causing the sequence to repeat.
The ideas shown in these examples will now be incorporated into the general result
about the existence of repeating decimal expansions for rational numbers.
Theorem 7. 
A real number is rational if and only if it has a repeating decimal expansion.
Proof.
(::-) 
Suppose a real number r is rational. Show that it has a repeating decimal expansion.
First, express r as the fraction j/k where 0 < j < k. Now, consider the long division of k
into j. (For an illustration, look again at the computation of the decimal expansion of 3/7
in Figure 4.24.) The first division produces one digit (the tenths digit) of the quotient and
a remainder rl < k. The remainder is contained in {0, 1 ...
, k -
1}. To prepare for the
next division, concatenate a 0 on the the end of ri. Now, repeat the procedure to calculate
another digit (the hundredths) of the quotient and another remainder r2 < k, follow this by
concatenating another 0 on the end of r2, repeat again, and so on.
The only k possible remainders at each step are 0, 1, 2 .... 
and k - 1. Hence, after
at most k + 1 steps of the division, two of the remainders must be equal. Then, however,
the process must start repeating, as in the previous illustrations. It is important that at the
end of each step, the same digit, 0, and not any other digit, is always concatenated onto
the remainder. The digit concatenated is always 0, because j and k are both integers and
0 < j < k. This guarantees that when remainders are equal, the entire process repeats. So,
r has a repeating decimal expansion.
(4=) 
Suppose a real number r has a repeating decimal expansion. Again, for convenience,
we will limit the proof to decimals in the interval (0, 1). For illustration, use

The Pigeon-Hole Principle 
r = 0.4579909909909909... 909909...
with repeating block of digits 909. It is easier to work with expansions in which the repeat-
ing part appears beginning immediately to the right of the decimal point. To accomplish
this proof, we will need to multiply the decimal by some power of 10. This is really just
for our convenience and does not affect the proof.
If the repeating part has length k that begins j digits to the right of the decimal point,
multiply r by 1 0 j+k. In the illustration,
107 . r = 4579909.909909909... 909 ....
Now, multiply r by 10', and subtract the product from 10 +k • r, giving d = (IOj+k -
10') • r. In the illustration,
107r = 4579909.909909909909... 909...
-
10 4r = -4579.909909909909... 909...
(107 -
104) r = 4575330.000000000000... 000...
Since all digits past the decimal point match, the subtraction results in all O's to the right of
the decimal point. Therefore, the difference d is an integer. It follows from this computation
that r = d/(lOj+k - 10'). Therefore, r is a rational number. 
U
4.6.4 
Application: Problems with Divisors and Schedules
In scenarios as diverse as studying for exams or finding divisors of sums of numbers, the
Pigeon-Hole Principle can provide answers to many questions.
Example 4. Let m E N. Given m integers al, a2 .... 
am, there exist k and I with 0 <
k <1 <m such that
ak+1 + ak+2 + 
+ + al
is divisible by m.
Solution. Consider the m sums:
al,al +-a2, 
al +-a2 +-a3 ...
, al +-a2 +,,. +-am
If any of these sums is divisible by m, then the conclusion follows. If not, then we may sup-
pose that each sum has a nonzero remainder when divided by m. The possible remainders
are
Since there are m sums and only m - 1 possible remainders, at least two of the sums must
have the same remainder when divided by m (according to the Pigeon-Hole Principle).
Therefore, there are integers k and 1 with 1 > k such that
al +a2+.'.+ak
and
al +a2 + 
+ al

CHAPTER 4 
Functions
have the same remainder r when divided by m. That is, there are integers c, d, and r such
that
al +a2 +'+'ak 
=cm +r
and
al+a2±+'+al 
=dm + r
Subtracting the k-element sum from the i-element sum gives
ak+4 + ak+2 + 
+ al = (d - c)m
Therefore,
ak+1 + ak+2 + 
+ al
is divisible by m. 
U
Example 5 shows how a scheduling decision can be better understood.
Example 5. 
The local softball league wants to schedule at least one game every day
during the 11-week summer season. To keep the fields in good condition, it is decided to
schedule no more than 12 games in any week. Show that there is a succession of days
during which exactly 21 games are scheduled.
Solution. Let al be the number of games scheduled for day 1. In general let ai where
1 < i < 77 be the total number of games played on days 1 through i. The sequence of
numbers a I, a2 .... 
a77 is strictly increasing since at least one game is played each day.
Since al > 1 and at most 12 games are played in a week, we have a77 < 132. The se-
quence al + 21, a2 + 21 ...
, a77 + 21 is also an increasing sequence. Each of the 154
numbers al, a2 ...
, a77, al + 21, a2 ± 21 .... a77 + 21 is an integer between l and 153.
Since there are 154 numbers, then by the Pigeon-Hole Principle, two of them must be
equal. No two of the numbers al, a2 ...
, a77 are equal, however, and no two of the num-
bers al + 21, a2 + 21 .... 
a77 + 21 are equal. Therefore, there are i and j such that
ai = aj + 21
Thus, on days aj+l, aj+2.  
ai, 21 games are scheduled. 
U
It would be nice if we knew how many days were used for these 21 games. The only
thing we can say for sure is that the number of days is no more than 21 and no less than 11.
In 7 days 12 games can be played. During a second week an additional 12 games can be
played. Since at least one game must be played each day, a total of 21 games cannot occur
in fewer than 11 days.
4.6.5 
Application: Two Combinatorial Results
The two results included here are probably surprising as far as finite sequences of natu-
ral numbers. The first proves that two elements of certain finite sequences must have the
property that one divides the other. The second proves that some sequences always have
an increasing or decreasing subsequence that is at least of a length given as a function of
the number of elements in the sequence. Both of these results are credited to the eminent
mathematician Paul Erdds (1913-1996, b. Hungary).

The Pigeon-Hole Principle 
To appreciate these two results, it is helpful to experiment with some subsets of a set,
say (1, 2, 3 ...
, 17}, and see how large a subset you can find so that no elements of the
subset divides any other element of the subset. For a second experiment, write down these
17 elements in an arbitrary order (not in increasing or decreasing order), and see how long
a subsequence you can find that is either increasing or decreasing. For example, try
12,6,3,7,8, 1, 17, 16, 14, 15, 13,2,9, 10,4, 11
You should be able to find an increasing subsequence of length six but no increasing sub-
sequence of longer length. The theorems will tell us what we can always expect as answers
for these two problems.
Theorem 8. 
(Erdos) Let
X C {1,2,3,4,..., 2n - 1}
and I X I > n + 1. There are two numbers a, b E X with a < b such that a divides b.
Proof. For x E X, let F(x) be the largest odd divisor of x. So
F(1) = 1, F(2) = 1, F(3) = 3, F(4) = 1, F(5) = 5, F(6) = 3....
and so forth. For x E X, there are n possible values for F(x), namely 1, 3, 5,..., 2n - 1.
There are at least n + 1 elements of X. So, F is not 1-1 on X. Pick two elements of X
whose images under F are the same, and call the smaller one a and the larger one b. Now,
let
k = F(a) = F(b)
So a = 2i • k, and b = 2i. k where i < j. Then, b = a. 2j-', so a divides b. 
U
Theorem 8 is the "best possible" result. That is, if the hypothesis instead required only
that I X I = n, then the result would be false. To prove this for any n, choose
X = {n,n+ 1,n+2,..., 2n- 
1}
Then, I X I = n. Now, show that no element of X is a factor of any other. Because if a were
a factor of b, then a . c = b for some c. Since a < b, we must have c > 1. However, a > n
and b < 2n - 1, so
n * c <a -c = b <2n - 1
Hence,
1 <c < (2n -
1)/n <2
However, there is no integer c between 1 and 2.
Theorem 9 tells that in a sequence of n2 + 1 elements, for any n E N there is always
a subsequence of at least n + 1 elements that is either increasing or decreasing. Even in
choosing a sequence of random numbers, this behavior occurs.
Theorem 9. (Erdos and Szeker6s) 
Let n E N and k = n2 + 1. Let
al, a2, a3, . .. , ak
be any sequence of k distinct numbers. Then, the sequence has either an n + 1 element
increasing subsequence or an n + 1 element decreasing subsequence.
Example to Motivate Proof. Let n = 3, and consider the 10-element sequence
5064982173

CHAPTER 4 
Functions
The goal is to find either a four-element increasing subsequence or a four-element de-
creasing subsequence.
For each element of the sequence, find the longest increasing subsequence starting
with that element. For example, starting with 5, there are three increasing subsequences of
length three (5 6 9, 5 6 8, and 5 6 7), but none of length four. Starting with 0, there are sev-
eral increasing subsequences of length three but none of length four. Under each number,
write the length of the longest increasing subsequence starting with that number:
LongestlncSeq(*) 
4, 
4, 
I 
, 
4, 4, 
4, 
4, 
4, 
4,
If any of these subsequences had length four or greater, then that subsequence would be the
example needed. In this case, there is no such subsequence, since each of the 10 elements of
the sequence mapped to 1, 2, or 3. By the Generalized Pigeon-Hole Principle, we know that
at least four elements of the sequence must map to the same value. In this example, each
element of the subsequence (6, 4, 2, 1) maps to 2, and each element of the subsequence (9,
8, 7, 3) maps to 1. Both of these subsequences are decreasing subsequences of length four.
Proof. Let k = n2 + 1 and the sequence aI, a2 ..... 
ak be given as in the statement of
Theorem 9. For each ai, define a function F such that F(a,) is the length of the longest
increasing subsequence starting with ai.
We first show that if i < j and ai < aj, then F(ai) > F(aj). This follows because,
if, say, F(aj) = 1, then there is a length-I increasing subsequence beginning with aj :
aj = bj < b 2 < ... < bl. Then, ai < bj < b2 < ... 
< bl is a subsequence of length l +
1, which implies that F(ai) > 1 + 1 > F(aj). In particular,
if i < j and F(ai) = F(aj), then ai > aj
Case 1: 
For some i such that 1 <i <k, we have F(ai) > n. Then, there is an increasing
subsequence of length n + 1 starting with ai.
Case 2: There is no i such that 1 < i < k with F(ai) > n. Consequently, the range of F
is a subset of the n-element set { 1, 2, 3. 
n }. By the Generalized Pigeon-Hole Principle,
at least
[ý(k -1)j 
L (n 2+ 1)] +1I =n±1
elements of the sequence will be mapped to the same element of {1, 2,..., n). By the
remark before Case 1, these n + 1 elements form a decreasing sequence. 
rn Exercises
1. Prove that in any set of 27 words, at least two must begin with the same letter assuming
at most a 26-letter alphabet.
2. Prove that in any group of five integers, at least two have the same value under the
(mod 4) operation.

Exercises 
3. Prove that in any class of more than 101 students, at least two must receive the same
grade for an exam with grading scale of 0 to 100.
4. Prove that for any 44 people, at least four must be born in the same month.
5. Prove that in any class of 35 students, at least seven receive the same final grade, where
the scale is A-B-C-D-F.
6. Area codes are used to distinguish phone numbers for which the last seven digits are
the same. If you have 35,000,000 phone numbers in a state and an area code can
distinguish approximately 900,000 phone numbers, how many area codes are needed
to distinguish the phone numbers of this state?
7. There are 35,000 students at State University. Each student takes four different courses
each term. State University offers 999 courses each term. The largest classroom on
campus holds 135 students. Is this a problem? If so, what is the problem?
8. At Bridgetown University, there are 45 time periods during the week for scheduling
classes. Use the Generalized Pigeon-Hole Principle to determine how many rooms (at
least) are needed if 780 different classes are to be scheduled in the 45 time slots.
9. Suppose someone (say, Aesop) is marking days in some leap year (say, 2948). You do
not know which days he marks, only how many. Use this to answer the following ques-
tions. (Warning: Some, but not all, of these questions use the Pigeon-Hole Principle.)
(a) How many days would Aesop have to mark before you can conclude that he
marked two days in January?
(b) How many days would Aesop have to mark before you can conclude that he
marked two days in February?
(c) How many days would Aesop have to mark before you can conclude that he
marked two days in the same month?
(d) How many days would Aesop have to mark before you can conclude that he
marked three days in the same month?
(e) How many days would Aesop have to mark before you can conclude that he
marked three days with the same date (for example, the third of three different
months, or the 31st of three different months)?
(f) How many days would Aesop have to mark before you can conclude that he
marked two consecutive days (for example, January 31 and February 1)?
(g) How many days would Aesop have to mark before you can conclude that he
marked three consecutive days?
10. Prove that for any collection of n people, two persons have the exact same number of
acquaintances in the group provided that each person has at least one acquaintance.
11. There are five suburbs in the city of Melbourn. How many all-stars must be picked
from each suburb to guarantee that at least five players come from the same suburb?
12. A bowl contains raspberry and orange lollipops, with 15 of each. How many must be
drawn one at a time to ensure that you have at least three orange lollipops?
13. A man has 10 black socks and 11 blue socks scrambled in a drawer. Still half-asleep,
the man reaches in the drawer to get a pair of matching socks. How many socks
should he select, one at a time, before he will be sure that he has a matching pair. How
many selections are needed to be sure he has a blue pair?
14. Prove that:
(a) 0.999999.. .99... = 1
(b) 0.346270 = 0.346269

CHAPTER 4 
Functions
15. Construct a sequence of 16 integers that has no increasing or decreasing subsequence
of five elements.
16. During a month with 30 days, a team will play at least one game a day but no more
than 45 games in all 30 days. Show that there is a stretch of consecutive days during
which the team plays exactly 14 games. (Hint: Let ai be the number of games played
on or before the ith day for 1 < i < 30.)
17. A widget-maker makes at least one widget every day but not more than 730 widgets
in a year. Given any n, show that the widget-maker makes exactly n widgets in some
set of consecutive days. For some n, it may take more than a single year.
18. A student has 37 days to prepare for an exam. From past experience, he knows that
he will need no more than 60 hours of study. To keep from forgetting the material,
he wants to study for at least one hour each day. Show that there is a sequence of
successive days during which he will have studied exactly 13 hours.
19. For any four integers, none of which is even and none of which is a multiple of
5, prove that some consecutive product of these ends in the digit 1. A consecutive
product is one term, two terms in a row, three terms in a row, or all four terms. For
example, for the four integers a, b, c, and d a consecutive product would be a • b but
not a . c. (Hint: Prove that if b c, b- c- d do not end in a 1, and if there is no integer
ending in 1 among a, b, c, and d, then a, a. b, a. b c, and a- b. c- d are all distinct.
Use Theorem 3 in Section 4.6.2).
20. Select 100 integers from the integers 1, 2 ...
, 200 such that no one of the chosen
values is divisible by any other chosen value. Show that if one of the 100 integers
chosen from 1, 2,..., 200 is less than 16, then one of those 100 numbers is divisible
by another.
21. Prove the assertion in Example 4(c).
22. (a) Find two functions F, G : N -
N that are 1-1 but not onto.
(b) Find a function G : N --* N that is onto but not 1-1.
(c) Challenge: Suppose G : N -* N is onto but not 1-1, and suppose G is specified
by an algorithm A. Show that there is an algorithm A' that computes a function
F : N -
N, where G o F = IdN. Also, show that F must be 1-1 but not onto. We
have not been precise about what an "algorithm" is; you might choose to interpret
an "algorithm" as being a function written in some programming language. (Hint:
A' can use A as a subprogram.)
23. Infinite Pigeon-Hole Principle: Suppose X is an infinite set and Y is a finite set. Now,
suppose F : X -* Y. Show there is a y c Y such that for infinitely many x E X such
that F(x) = y.
W 
Countable and Uncountable Sets
In this section, we develop the notion of counting the elements of a set or cardinality more
carefully. The modem notion of cardinality is credited to Georg Cantor (1845-1918, b.
Russia), who found an abstract notion of counting that enabled mathematicians to speak
of the cardinality of an infinite set. The notion also enabled mathematicians to discuss the

Countable and Uncountable Sets 
cardinality of finite sets more precisely. In Section 1.5.1, we gave a provisional definition
for counting the number of elements in a set that can now be made more precise.
Consider checking to see whether the sets {red, blue, green) and {Jean, Michele, Paul)
have the same number of elements. Of course, each set has three elements, and one merely
counts the elements:
{(0, red), (1, blue), (2, green))
and
{(0, Jean), (1, Michele), (2, Paul)}
Each of the two sets of ordered pairs are 1-1 functions, the first from {0, 1, 21 onto {red,
blue, green--call it Color-and the second from {0, 1, 2} onto {Jean, Michele, Paul)-
call it Person. Consider the set {0, 1, 2} only as an intermediary. The function Color-1 o
Person is a 1-1 function (Theorem 3(c) in Section 4.3.2 and Theorem 2(a) in Section
4.3.1) (from {red, blue, green) onto {Jean, Michele, Paul). This function shows, without
explicitly counting, that the two sets have the same number of elements in the sense that
we now make more precise.
Definition 1. (Cantor) Let X and Y be sets. Then, the cardinality of X is less than or
equal to the cardinality of Y, written I X I < I Y 1, if there is a 1-1 function F : X --* Y.
The cardinality of X is equal to the cardinality of Y, written I X I = I Y I, if there is a 1-1
correspondence F : X --> Y. The cardinality of X is less than the cardinality of Y, written
X I<IY 1, if IX l_<IYland IY I 
IX 1.
The definition of I X = I Y I generalizes Theorem 5 in Section 4.6. Notice that we
have not defined the term cardinality of X here, only some relationship between X and Y.
Using these notions, one can define the usual notion of cardinality for a finite set.
Definition 2. 
Let X be a set and n e N. If X has the same cardinality as the set
{0, 1,2 ...
, n -
1}, then the cardinality of X is n. We say X is finite if X has cardinality
equal to some natural number. We say X is infinite if X is not finite.
At this point, the careful reader should note that, since we have redefined (or per-
haps, at last, defined) a term we have used throughout this book, some of our ear-
lier proofs may have been false, relying on unprovable intuitions. In fact, as the reader
surely suspects, the earlier results are not false by this definition; however, the proofs
may have important parts missing. This is not a book about the foundations of math-
ematics, so we shall not go back to recheck any proofs. We shall make one further
remark, however: The entire discussion of the Pigeon-Hole Principle depended crit-
ically on the result that if m and n are natural numbers and m > n, then the sets
{0, 1, 2 ...
, m -
11 and {0, 1, 2, .... , n - 1) do not have the same cardinality. After the
previous discussion, the student likely has no idea what one is allowed to use in prov-
ing such a result. In the development of the foundations of mathematics, this theorem
can be proved by induction on m. The interested reader is invited to look for a simple
proof.
The following properties of cardinalities are easy to prove. They are also suggested by
the notations for equal (=) and less than or equal (<), but it is, of course, very dangerous
to assume such results by analogy based on notation.

CHAPTER 4 
Functions
Theorem 1. (Properties of Cardinalities) 
Let X, Y, and Z be sets.
(a) IXI < IXI.
(b) If IXlI_<lIY Iand IYl_ <IZ1, then IX 
_ 
< IZ 1.
(c) IX =IXI.
(d) If I X I = l Yl, then lYI = IXi.
(e) IflXI = IYI andIYI-=I ZI,thenlXI---Z1.
Proof This proof is left as an exercise for the reader. 
One is tempted to restate parts (c) through (e) of Theorem 1 by stating that the relation
has the same cardinality as is an equivalence relation. This is not done, however, because
if it is an equivalence relation, then it is an equivalence relation on the set of all sets-but
the set of all sets does not exist! Even so, it is correct to say that has the same cardinality
as is an equivalence relation on any set of sets.
A fundamental result regarding cardinality uses the work of Georg Cantor, Friedrich
Schrider (1841-1902, b. Germany), and Sergi Bernstein (1880-1968, b. Ukraine).
Theorem 2. 
(Cantor-Schroder-Bernstein) 
Let X and Y be sets, and let I X I <I Y I
and I Y I _ I X 1. Then, I XI = I Y 1.
The proof of the Cantor-Schroder-Bemstein Theorem is fairly complicated, and we re-
fer the reader to a text about set theory. A related question is whether there exist two sets X
and Y where I X I • I Y I and I Y I ;ý I X I. This question turns out to be related to whether
one accepts a famous and, sometimes, controversial axiom called the Axiom of Choice.
The reader is also referred to books on set theory and the foundations of mathematics for
discussion of this issue.
4.8.1 
Countably Infinite Sets
Cantor's definition allows a more careful development of the study of finite sets, but the
study of infinite sets under Cantor's definition is sometimes surprising. The simplest infi-
nite sets are N and those other sets with the same cardinality as N.
Definition 3. 
Let X be a set. X is countably infinite if I X I = I N I. If X is countably
infinite, the cardinality of X is No (pronounced aleph nought), written I X I = Ko. X is
countable if it is either finite or countably infinite. If a set is not countable, then it is
uncountable.
In Definition 3 the object No was left undefined. For set theorists, No is another name
for N, but the symbol tRo is used almost exclusively to denote the cardinality of N.
Theorem 3. 
Any countably infinite set is infinite.
Proof. As noted earlier, N is infinite. Now, suppose a set X is both countably infinite and
finite. Then, there are 1-1 correspondences F : X -+ N and G : X -+ {0, 1, 2,..., n} for
some natural number n. However, then F-1 o G : N -* {0, 1, 2 ...
, n} is 1-1 and onto by
Theorem 3(c) in Section 4.3.2, contradicting the result, noted above, that N is infinite. U
Theorem 5 in Section 4.6.2 says that for finite X and F : X -> X, F is 1-1 if and only
if F is onto. This result fails for infinite X. Earlier (see Section 4.1.8), a 1-1 function from

Countable and Uncountable Sets 
JR to JR was given that is not onto, and an onto function from R to R was given that is not
1-1. We recommend the reader find a 1-1 function from N to N that is not onto and an
onto function from N to N that is not 1-1.
The next three results give proofs that some of the common sets we use are indeed
infinite.
Theorem 4. 
Evens = {n E N :n = 2k for some k e N} is countably infinite.
Proof. Let
F : N -+ Evens
be defined by F(n) = 2n. The graph of this function is shown in Figure 4.25.
Bijection F(n) = 2n maps N to Evens.
Show that F is both 1-1 and onto. First, show that F is 1-1. Suppose F(m) = F(n).
That is, suppose 2m = 2n. Dividing both sides by 2 gives m = n. So, F is 1-1. Now show
that F is onto. Suppose k is even, and show that k = F(n) for some n E N. Since k is even,
k = 2no for some no E N. Now, F(no) = 2no = k as required. 
Theorem 5 tells us that there were infinitely many base cases in our proof of the Fun-
damental Theorem of Arithmetic.
Theorem 5. 
The set of prime positive integers is countably infinite.
Proof. First, show that the set of primes is not finite. Suppose it were, and let the set of
primes be
{p, pi 
P dn-1
The set is nonempty since 2 is a prime. Now, let k = Po" Pl ... •Pn-1 + 1. None of the
given primes divides k, because each divides k - 1. Thus, there must be some other prime
that divides k-perhaps even k itself. In any case, the existence of at least one more prime
contradicts our assumption that P0, P1. 
Pn-1 are the only primes. Therefore, there
must be infinitely many primes.

CHAPTER 4 
Functions
Now, show that the set of primes is countably infinite. List the primes in increasing
order:
2,3,5,7, 11, 13, 17,19,23,29,31,37,41,43,47,53,59,....
Then, define a function
P : N --+ {2, 3,5,7, 11, 13, 17, 19,23,29,31,37,41,43,47,53,59,....
by the rule that P(n) is the nth prime on the list for n = 0, 1, 2, 3 ..... 
We claim that P is
a 1-1 and onto function. Function P is 1-1, because it is strictly increasing. Function P is
also onto, because the nth prime is always larger than n, so if k is prime, then k = P(n)
for some n E {0, 1, 2 ..... 
k -
11. 
The first somewhat surprising result that follows from Theorem 5 is that there are no
more integers than there are prime numbers, even though there certainly are gaps between
consecutive primes.
Theorem 6. 
Z is countably infinite.
Proof. This part depends on listing the integers in a special order-in order of their ab-
solute values. First, list the integer with absolute value 0:
Then, add to the list the integers with absolute value 1:
0, -1, 1
and so forth:
0, -1, 1, -2, 2, -3, 
3, -4, 4, -5, 5, .... , -n, n....
We must now formalize this idea of a function. For any n E N, define G(n) to be
the nth number on this list. It is apparent that every integer is listed exactly once on the
list. In fact, it is easy to see that G(0) = 0, and for n > 1, we have G(2n -
1) = -n and
G(2n) = n. It follows that the function G : N -÷7 Z is 1-1 and onto. 
U
4.8.2 
Cantor's First Diagonal Argument
Cantor found two important proof techniques for showing that two sets had the same car-
dinality. The first of these arguments, called Cantor's first diagonal argument, is used in
proving that I Z I = I Q I.
Theorem 7. 
Q is countably infinite.
Proof. The proof depends on listing all the rational numbers in a special order. For each
rational number r, pick out its expression p/q in lowest terms where q > 0. Lowest terms
means p and q have no common divisor. For every rational number p/q written in lowest
terms, compute the number I p I + q. Since p and q are integers and q > 0, I p I + q is a

Countable and Uncountable Sets 
positive integer. For I p I + q = 1 and 2, we have
p 
Ip +q=l
-1 
Then, for I p + q = 3, we have
-2 
-1 
1 2
For I p I + q = 4, skipping -2/2 and 2/2 (since they are not in lowest terms), we have
-3 
1'1
and so forth.
The order in which the distinct rationals are listed is shown in Figure 4.26, where the
rationals p/q are represented as points on the plane with x coordinate p and y coordinate
q. As the indicated path is followed, just rationals not already occurring on the list are
added to the list.
y
(-6,6) 
(-5,6) (-4,6) 
(-3,6) 
( 
(-1,6) 
(0,6) 
(2,6) 
(3,6) 
(4,6) 
(5,6) 
(6,6)
(-6,5) 
(-5,5) 
(-4,5) 
( 
(-1,5) 
(0,) 
5) 
(3,5) 
(4,5) 
(,5) 
(6,5)
(-6,4) 
(-5,4) 
(-24 
(-1,4) 
(0,4) 
4) 
(4,4) 
(5,4) 
(6,4)
(-6,3) 
(-5,3 
(-4,3 
(-33 
(-13) 
(0,) 
3) 
3) 
3) 
(5,3) 
(6,3)
(-1,2•) 
•• 
(-,2 
(-,2 
(-,2(-3,2 
(-2,2 
g(0 
(2 
)2) 
2) 
2) 
2) 
(6,2)
.) ) 
1) 
(-2•1• 1) 
0 O 
1, 
(,1 
(3,1) 
(4,1 
(5,1) 
(6,1)•
(-6,0N) (-5,0) 
.0 
-
(-2,0) 
(-(,0) 
(0,0) 
(2,0) 
'(3,0) 
,( 
,( 
(6,0)
Order for listing elements of Q.
For any positive integer n, there are only finitely many different rational numbers p/q
with I p I + q = n. In fact, since q must be greater than zero, q must be one of 1, 2, 3 ...
, n
for a total of n choices. There are two choices for p, n - q and - (n - q), giving a total
of 2n choices for p/q. Among these 2n choices, some, such as 0/2 and 2/2, will not be in
lowest terms and so will be ignored.
Let p/q be a rational number such that I p I + q = n. Then, there are fewer than
2.l+2.2+2.3+...+2.n =n.(n+ 1)
rationals that could be listed in front of p/q. Hence, every rational number ultimately
appears on the list. Furthermore, since each rational number is listed only in lowest terms,
each rational number is listed only once.

CHAPTER 4 
Functions
Set G(n) to be the nth rational number on the list above. Then, by the discussion
above, G : N --* Q is 1-1 and onto. 
The proof of Theorem 7 is especially important. This method of proof is called Can-
tor's first diagonal argument. Another view of how the positive elements of Q are arranged
and counted shows why this is called a diagonal argument (see Figure 4.27). Only elements
of Q with no common factors in the numerator and the denominator are shown so that no
element is counted more than once.
1/1 --* 1/2 
1/3 
-
1/4 
1/5 
1/6 
1/7 -
1/8 
...
2/1 
2/3 
2/5 
2/7 
...
177I.. 
7J 
7" 
7" 
-
3/1 
3/2 
3/4 
3/5 
3/7 
3/8 
...
7- 
, 7 
7/ 
4/1 
4/3 
4/5 
4/7
5/1 
5/2 
5/3 
5/4 
5/6 
5/7 
5/8 
...
Counting positive rational numbers.
4.8.3 
Uncountable Sets and Cantor's Second Diagonal Argument
After one sees Cantor's proof that Q is countably infinite, it is natural to conjecture that
all infinite sets are countably infinite. Hence, it may be a bit surprising that sets that are
not countable (or uncountable) exist. Cantor proved that IR is not countable. That proof
involves using the decimal expansions of real numbers.
Several familiar facts about the decimal expansion of rational numbers were presented
in Section 4.6.3. The fundamental idea needed here is that for any real number, there is a
decimal expansion of the form
C 
CO.C1 C2C3 ... 
Ci ...
where co is in Z and ci e 10, 1 ...
, 91 where i c N -
{O}. A thorough study of decimal
expansions requires careful development of the real numbers and will not be discussed in
this book. One property of some real numbers is that they have two decimal expansions-
for example,
0.233999 ... .
0.2340000 ....
Important properties of the decimal representations of real numbers needed here are listed
in Theorem 8.
Theorem 8.
(a) Every real number has at least one decimal expansion, and no real number has more
than two decimal expansions.
(b) Every decimal expansion is the decimal expansion of some real number.

Countable and Uncountable Sets 
(c) If real numbers x and y have the same decimal expansion, they are equal.
(d) If a real number has two decimal expansions, then one of them terminates in an infinite
string of O's and the other in an infinite string of 9's.
Of course, not all finite sets have the same cardinality, but by now, the reader is surely
wondering how two infinite sets could have different cardinalities. We are about to prove
that the cardinality of the open interval (0, 1) of real numbers is strictly greater than the
cardinality of N or, in other words, that (0, 1) is uncountable. We will do this follow-
ing Template 1.10, based on the fact that if (0, 1) were countable, we would be able to
list all its elements in a (countable) sequence without omitting any or duplicating any.
Let us assume that some function F defined on N lists all the decimal expansions of the
numbers in (0, 1). For the sake of developing the example to illustrate the idea of the
proof, let us suppose the function F, with F(0) = 0.254257..., F(1) = 0.751999...,
F(2) = 0.485259.•., F(3) = 0.254157.•., and continuing until our list contained every
element of (0, 1).
We need to show that such a list cannot contain all real numbers. We first display our
countably infinite sequence in a table whose diagonal elements-the first decimal digit of
F(0), the second decimal digit of F(l). 
the nth decimal digit of F(n - 1)-appear in
boxes:
F(0) 
0.04157 ...
F(l) 
= 
0.75]1999...
F(2) 
= 
0.48]259...
F(3) 
= 
0.000[J08...
We now show how to construct a number d = O.dld2 d3 ... that is not on the above
countably infinite list. Since we want to avoid having d = F(0), we decide to make the first
digit of d different from the first digit of F(0)-that is, we choose dl # 2. To be definite,
let us take dj = 5. Now, the second digit of F(l) is 5, so to avoid having d = F(l), we
take the second digit of d to be, say, 4. We continue in this fashion, taking care that dn-
the nth digit of d-is always different from the nth digit of F(n -
1). To be systematic,
we always choose d,, = 5 unless the nth digit of F(n -
1) is 5, in which case we choose
dn = 4. (So, in our example, we have d = 0.5445--..)
Thus, we have created a number d = 0.djd 2d3 ... 
E (0, 1), the decimal expansion of
which is different from all the decimal expansions on this countably infinite list. Further-
more, since we avoided using O's and 9's in d, we know by Theorem 8(d) that even when
some real number has a second decimal expansion, that decimal expansion cannot be d.
So, we have achieved a contradiction: We have created a real number d that could not pos-
sibly be on the countable list F(0), F(l), F(2) ...
, which supposedly included all real
numbers. This example shows that the function chosen, F, did not work. The proof that
the reals are uncountable must show that no such function exists.
The proof of the next theorem formalizes this intuitive argument using an arbitrary
function. The argument is called Cantor's second diagonal argument.
Theorem 9. 
(Cantor) 
R is uncountable.

CHAPTER 4 
Functions
Proof. It is enough to show that (0, 1) is uncountable, since clearly, 1 (0, 1) 1 < I R 1. (See
Exercise 7 in Section 4.9 for a function that is a bijection from (0, 1) to R.)
We assume that F is any 1-1 correspondence from N onto (0, 1). Let F(n) =
0. ft f2 f3 ... be a decimal representation of F(n). Construct a new decimal d =
O.d1d2d3 ... by putting d, = 4 if the f, is 5 and d, = 5 otherwise. Then, d differs from
F(n) in the nth digit. Since no digit of d is 0 or 9, by Theorem 8(d), d is the only decimal
expansion of the real number that it represents-call it D. So, if F(n) has two decimal
representations, then D is certainly not equal to F(n), and otherwise, D 7 F(n) because
dn * fn. This contradicts our assumption that F is onto. Since there is no 1-1 correspon-
dence from N to IR, we conclude the reals are not countable. 
U
Corollary 1: 
Not every real number is rational.
Proof. Since Q C R, either Q = R or there is a real number r E JR - Q. Since Q is count-
able and JR is uncountable, Q 0 R. Therefore, there is a real number that is not rational.
Corollary 2: 
The set R - Q is uncountable.
Proof. This proof is left as an exercise for the reader. 
Working with infinite cardinalities gives us the impression that uncountable sets are
much larger than countable sets. So Corollary 2 states that almost all real numbers are
irrational. But it does not demonstrate any particular number to be irrational! It has been
known since the days of Pythagoras, an early Greek mathematician, that /2 is irrational.
Perhaps more stunning is the next theorem.
Definition 4. 
A real number r is algebraic if there is a polynomial P (x) of the form
P(x) = a, -x+ +- a,-I " xn-1- 
"I --+a2 • x
2 +- al . x + ao
where each ai is an integer and r is a root of the equation-that is,
P(r) =a, "r" +a,-, "r-I 
+ -" +a2 .r2 +-al • r +ao = 0
For example, every rational number is algebraic: p/q where p and q are integers is a
root ofthe polynomial equation qx - p = 0. Also, '/2 and ý V9/§_ + 
217 -(333/41)
are algebraic, as are almost all numbers humans normally write down.
Theorem 10. The set A of algebraic numbers is countably infinite. Furthermore, JR - A
is uncountable.
Proof This proof is left as an exercise for the reader. 
M
A number that is not algebraic is transcendental. Theorem 10 states that almost all
real numbers are transcendental, yet it is very difficult to show that any particular real
number is transcendental! The two standard examples are 7r and e. Proving that 7r is tran-
scendental is very complicated.
A more difficult question to answer is whether any X C R exists where I N I < I X I <
I R I. The conjecture that there is no such set X is called the continuum hypothesis. The
conjecture is a famous and much-studied question. Finally, work of the famous mathe-
maticians Kurt Godel (1906-1978, b. Austria-Hungary) and Paul Cohen (1934-, b. United

Exercises 
States) showed that the continuum hypothesis is neither provable nor disprovable from the
standard axioms for set theory (unless it is possible to prove a contradiction from Zermelo-
Frankel set theory).
4.8.4 
Cardinalities of Power Sets
A variant of Cantor's second diagonal method can be used to prove that for any set X,
I X I < I P(X) 1. Of course, that result is already known for finite sets X (see Theorem 2
in Section 1.7.4), but it is interesting that a single proof works for all sets, both finite and
infinite. This proof looks even more like the proof of Russell's paradox (see Section 1.1.1).
It follows that if F : X -+ P (X), then for each x E X, F(x) is a subset of X. So it makes
sense to ask whether x E F(x).
Theorem 11. 
Let X be any set. Then, I X I < IP(X) 1.
Proof. To show that [ X < IP(X) 1, find a 1-1 function F: X -+ P(X). The function
F mapping each x E X to {x } is easily seen to be such a function.
To show that IP(X) I • I X 1, show that there is no 1-1 correspondence F :X -
P(X). This can be accomplished by showing that no function F : X --* P(X) is onto.
So, suppose F : X -÷ 7P(X) is an onto function. Let Y = {x E X : x ý F(x)}. Show that
Y ý range(F). Now, suppose it were, say, Y = F(y), and ask whether y E F(y):
y E F(y) , 
y 0 Y by definition of Y
€ y g F(y) by assumption that Y = F(y)
which is a contradiction. So, the assumption that Y E range(F) is false, and we conclude
that F is not onto. 
M
The cardinality of the set of all subsets of N is called 21°. It is equal to the cardinality
of IR, and it is denoted by c, for continuum.
Exercises
1. Show that ifXCY, IXI <IYI.
2. Prove that the sets X = {2n + 1: n E Z1, Y = {10j : j E Z}, and Z = {3n : n E Z}
have the same cardinality.
3. In the first quadrant of the x-y plane, draw a path that passes exactly once through each
point with both coordinates being integers. Each stopping place on the path should
only be one unit right, one unit up, one unit left, or one unit down from the previous
stopping place. Start the path at (0, 0). Use the path to construct a bijection from N to
NxN.
4. Show that the following sets are countably infinite:
(a) {q E Q: q > 101
(b) {q E Q :q 2 <q}
(c) {q E Q :q = i/j where i is odd and j is even}

CHAPTER 4 Functions
5. (a) Prove that if X and Y are countable sets, so are X U Y, X fl Y, X -
Y, and X x Y,
(Caution: Countable means either finite or countably infinite, so there may be
separate cases to consider.)
(b) If X and Y are countably infinite, which of the following sets must be countably
infinite: X U Y, X n Y, X - Y, and X x Y?
6. Prove that every subset of N is countable.
7. Prove that the function F : (0, 1) --* R defined as F(x) = (1/2 - x)/(x (1 - x)) is a
bijection.
8. Find 1-1 and onto functions from R to the following sets:
(a) (0, 1)
(b) [0, 1]
(c) (0, 1)- {1/2}
(d) JR - Q, the irrationals
9. Prove Theorem 1.
10. Prove Corollary 2 to Theorem 9.
11. A chain-letter scheme is a famous (and usually illegal) get-rich-quick scheme. A per-
son X receives a letter with, say, five names on it. X sends $10 to the person whose
name is at the top of the list. X then deletes that name from the top of the list, adds
his or her own name to the bottom of the list, and sends the letter to five "friends," all
within one day. In around two weeks, X is supposed to receive $31,250.
Suppose every person who receives the letter follows the instructions (including
sending $10 to the person listed first!). Show that if there are only finitely many peo-
ple, the scheme cannot work (in some sense of "cannot work" that you should make
precise). Show that if there are countably infinitely many people, the scheme can work.
12. Show for the natural numbers N that
P(N)I > INI
13. Challenge: Show that I JR 
= P(N) 1. (Hint: Use the Cantor-Schr6der-Bemstein The-
orem. To show that IR I < I P(N) I, you might use function D : JR --+ P(Q) where for
r E R, D(r) = {q e Q : q <r}.)
14. Show that / 
is algebraic.
15. Show that there are infinite sets
XO, X 1, X 2.  
Xk, Xk±1l....
where for each k E N, I Xk I < I Xk+1 I.
16. Challenge: Show how to modify Cantor's second diagonal argument so that the real
number produced is always irrational. (Hint: There is more than one way to do this.)
17. (a) Show that the set of all finite sequences of elements of the one-element set {0} is
countably infinite.
(b) Show that the set of all finite sequences of elements of the two-element set {0, 1}
is countably infinite.
(c) Challenge: Show that the set of all finite sequences of natural numbers is count-
ably infinite. (Hint: Use a diagonal argument.)
18. (a) Show that the set of all infinite sequences of elements of the one element set {0}
is finite.

Chapter Review 
(b) Show that the set of all infinite sequences of elements of the two element set {o, 1
has the same cardinality as P(N).
(c) Challenge: Show that the set of all infinite sequences of elements of N has the
same cardinality as 'P(N).
rnChapter Review
Functions describe the transition from input information to output information. Functions
are a special class of relations, and they can be defined and studied in that context. Func-
tions can also be defined either as sets or as rules of correspondence. In addition, the rules
of correspondence can either give the value of the function directly from the input value
or recursively, in terms of other values of the function. There are even rules of corre-
spondence that do not always give an output value for each possible input value. These
correspondences are called partial function. Partial functions are especially important in
describing the behavior of programs.
Two key properties that a function may possess are being 1-1 and/or being onto. The
notion of functions being 1-1 and onto leads to two major topics. The first focuses on
functions that are 1-1 or measures how far a function is from being 1-1. The principles
introduced are the Pigeon-Hole Principle and the Generalized Pigeon-Hole Principle. Op-
erations such as composition and taking inverses are also defined on functions, and the class
of function called sequences is described formally. The second topic deals with counting
the elements of a set. The notion of cardinality makes precise what it means for two sets to
have the same number of elements. Infinite sets, such as Q and R, are shown to have dif-
ferent number of elements. Various relationships between other infinite sets are explored.
Two important tools for studying the cardinality of a set are Cantor's first diagonal argu-
ment and Cantor's second diagonal argument. The class of function called sequences are
described formally.
Among the applications discussed with this material is a characterization of the prop-
erties of inverse and of composition of functions when the properties of the functions are
given. It is also shown how boolean functions can be realized by combinatorial networks.
The Pigeon-Hole Principle and the Generalized Pigeon-Hole Principle can be applied in
such diverse settings as determining what competitive schedules must look like and guaran-
teeing that a set of integers contains at least two with a common divisor. Rational numbers
are shown to have repeating decimal representations. Both N, Z, and Q are shown to have
the same number of elements.
4.10.1 
Terms, Theorems, and Algorithms
4.1 
Summary
TERMS
1-1 and onto function 
bijective function
1-1 correspondence 
binary function
bijection 
ceiling

CHAPTER 4 
Functions
codomain 
injection
collision resolution strategy 
injective function
decreasing 
mapped to
decrypt 
one-to-one (1-1)
domain 
onto
encoded 
partial function
encrypted 
preimage
equal 
range
floor 
recursive definition
function 
recursively
graph of a function 
restriction
graph of a partial function 
strictly decreasing
greatest integer function 
strictly increasing
hashing function 
surjection
horizontal line test 
surjective function
identify function 
total function
image 
undefined
increasing 
vertical line test
independent
4.3-4.5 
Summary
TERMS
commutative 
infinite sequence
composition 
invertible
decreasing 
inverse
F 
list
(F + G) 
sequence
(F • G) 
stream
(F/G) 
strictly decreasing
finite sequence 
strictly increasing
increasing 
subsequence
4.6 
Summary
TERMS
ceiling 
k to 1
decreasing subsequence 
nonterminating
Dirichlet Drawer Principle 
rationals numbers as decimals
finite 
repeating
floor 
terminating
increasing subsequence
THEOREMS
Erdds 
Generalized Pigeon-Hole Principle
Erdds and Szeker6s 
Pigeon-Hole Principle

Chapter Review 
4.8 
Countable and Uncountable Sets
TERMS
aleph nought (1 O) 
countably infinite
algebraic 
finite
Cantor's first diagonal argument 
infinite
Cantor's second diagonal argument 
lowest terms
cardinality 
transcendental
continuum hypothesis 
uncountable
countable
THEOREMS
Cantor-Schrbder-Bemstein 
R is uncountable
Properties of Cardinalities 
Z is countably infinite
Q is countably infinite
4.10.2 
Starting to Review
1. Which of the following are functions?
i. X is the set of students at Purdue University. For x E X, define g(x) to be the
oldest brother of x.
ii. X is the set of governors of Oregon. For x E X, define g(x) is the year that x
was first sworn into office as governor.
iii. For x E R, define g(x) = x/I x 1.
(a) i
(b) ii
(c) iii
(d) None of the above
2. Let X = [1, 2, 3, 4) and Y = [a, b, c, d} be sets. Define the following subsets of
X x Y:
F 1 = {(1, b), (4, d), (2, c), (3, a)}
F2 = [(3, b), (1, d), (4, c), (2, b))
F3 = {(4, c), (2, a), (3, b), (1, d)}
Which of the sets F 1, F2 , and F3 are 1-1 functions?
(a) F1, F2 , F3
(b) F1, F3
(c) F2 , F3
(d) F1, F2
3. Let X = {11, 12, 23, 44} and Y = {r, s, t, vI be sets. Define the following subsets of
X x Y:
F1 = I (11, r), (44, v), (12, s), (23, t)}
F2 = {(23, s), (11, v), (44, t), (12, s)}
F3 = 1(44, t), (12, r), (23, s), (11, v)}

CHAPTER 4 Functions
Which of the sets F1, F2 , and F3 are onto functions?
(a) Fl, F2, F3
(b) F2, F3
(c) F1, F3
(d) F1, F2
4. Which of the following is the correct definition of a decreasing function?
(a) If for all x 1 , x 2 E X, x1 > x2 implies F(xl) < F(x2).
(b) If for all Xl, x2 E X, xI < X2 implies F(x1) < F(x 2).
(c) If for all xl, x 2 E X, x 1 < x2 implies F(xl) < F(x2).
(d) None of the above.
5. For n = 0, 1 .... 
10, list the values of the following functions defined recursively:
(a) function s(n):
if n = 0 then
return (0)
else
return (2n + s(n - 1))
(b) function p(n):
if n = 0 then
return (1)
else
return (n . p(n - 1))
(c) function d(n):
if n = 10 then
return (100)
else
return (d(n + 1) -
10)
6. Express the function F(x) = 
x2 + 3x + 2 as the composition of two simpler func-
tions, neither of which is the identity function.
7. Let F and G be the functions defined on {1, 2, 3, 4, 5) as follows:
F: 
-
G: 
-
2-- 
2-+ 
3-- 
3-- 
5-* 
* 
Prove that F and G are 1-1. Also, prove that F o G and G o F are both 1-1 and onto.
8. Let X = 1-1, 0, 1, 2) and Y = {-4, -2, 0, 21. Define the function F : X -- Y as
F(x) = x2 - x. Prove F is neither 1-1 nor onto.

Chapter Review 
9. If a class has 89 students, how many (at least) must have a birthday on the same day
of the week?
10. Of 15 A's, 20 B's, and 25 C's, how many letters must be chosen so that 12 identical
letters will always be included in the selection?
11. From the standard deck of 52 cards, how many cards must be chosen so that three
cards from the same suit will always be included in the selection?
4.10.3 
Review Questions
1. We define three functions, with definitions involving unspecified constants a and b. In
each case, whether the function defined as onto depends on the values of a and b. For
what values of the constants a and b are the following functions onto?
(a) F1 :Q -Q 
where F1 (x) =ax + b with a, b E Q
(b) F2 : Z 
Z where F2(x) =ax + b with a, b E Z
(c) F3 : N 
N where F3(x) =ax + b with a, b E N
2. Let A and B be sets with B1, B2 C_ B, and let F : A -+ B be a function. Show that:
(a) If B1 g B2, then F-'(B1 ) C F-I(B2).
(b) F-I(Bl U B2) = F-I(B1 ) U F-I(B2).
(c) F-'(B1 n B2) = F-'(B1 ) n F-I(B2).
(d) F-I(B1 - B2) = F-I(B1 ) - F-(B2).
(e) F(F-I(B1 )) c B1.
(f) Find an example where B1 C B2 but F-I(B1 ) = F-I(B2).
3. Show that the set {3, 6, 9, 12, .... ) is countable.
4. Prove that the function F : [0, 1] -
(0, 1) defined as F(0) = 1/2, F(1/n) = 1/(n +
2) for n E N and n > 1, and F(x) = x for all other x E [0, 1] is a bijection.
5. (a) The lattice points in the plane R2 are the points (x, y) where x and y are both
integers. Prove that there are only countably many lattice points in 1R2.
(b) The lattice points in three-dimensional space JR3 are the points (x, y, z) where
x, y, and z are all integers. Prove that there are only countably many lattice points
in R 3.
6. Let p be any natural number and Zp = {0, 1 .... 
p - 1) be the integers modulo p. For
each integer r where 1 < r < p, the function Fr : Zp -) Zp is the function F, (n) =
r. n(mod p). Show that for each p, every Fr is a bijection if and only if p is a prime.
(Hint: Examine cases for which r . n = r. O(mod p), and then use the Pigeon-Hole
Principle.)
7. Let S be a set of six positive integers with a maximum that is at most 14. Show that
the sums of the elements in all the nonempty subsets of S cannot all be distinct.
8. If 11 integers are selected from 11, 2, 3 ...
, 100), prove that there are at least two, say,
u and v, such that
0 < I 'f-- 
V- [ < 1
9. Uses First-Order Logic: This exercise concerns a result needed for the definition of
subsequence. We took it as obvious there, but it does need proof. So, let X C N.
Part of the job here is to use as simple set theory as possible to define the functions.
You may assume that (i) sets 0, X, N, and N x X exist; (ii) for every i, j E N, (i, j)

CHAPTER 4 
Functions
exists; (iii) for any x, {x} exists; (iv) for any sets x, y, x U y and x - y exist; and
(v) the collection of elements of any set satisfying some formula of First-Order Logic
(with quantifiers ranging over numbers and sets) exists. You are to use just this much
set theory to show that the function defined by recursion exists. The problem is that
induction may naturally be used to prove that arbitrarily large, finite sets of ordered
pairs exist, but it does not allow one to conclude that a particular infinite set of ordered
pairs exists.
Prove the following:
(a) Suppose X is finite. Let n - I X I. There is at most one increasing function from
{0, 1 ...
, n - 1) onto X. (Hint: Suppose there are two, say, F and G. Prove by
induction on i < n that F(i) = G(i).)
(b) If X is infinite, there is at most one increasing function from N onto X.
4.10.4 
Using Discrete Mathematics in Computer Science
1. Let F be the function that maps strings of characters and blank spaces onto
strings of characters by removing all blank spaces and all vowels. For example,
F("dog cat") = "dgct." Let G be the function that maps strings of characters onto
integers such that the value of a string is simply the number of characters in the
string. What is F("george washington")? What is G("george washington")? What is
G o F("george washington")? The function F is a simple example of a compression
technique.
2. Let F : R --* R be a function with F(x) = x2. Define a relation R on R such that
x R y for any x, y e R if F(x) = F(y). Prove R is an equivalence relation, and find
its equivalence classes.
3. A computer is used at l
