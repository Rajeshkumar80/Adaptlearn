<!-- PROVENANCE: subject_code=BCS405A | subject_name=Discrete Mathematical Structures | semester=4 | module=2 | source_type=MODULE_NOTES | source_file=module2.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS405A — Module 2

## Set Theory and Relations

**Subject:** BCS405A (Discrete Mathematical Structures)
**Module:** Module 2
**Content type:** textbook_fallback
**Sources:** T1_Discrete_Mathematics_for_Computer_Science.txt

---

have a common
enrollment of 67. How many different students are enrolled in these four courses?
13. How many numbers between 1 and 1000 are not divisible by 3, 7, or 9?
14. How many integers between 500 and 10,000 are divisible by 5 or 7?
15. (a) How many numbers between 1 and 70,000,000, including both 1 and 70,000,000,
are divisible by 2, 5, or 7?
(b) How many numbers between 1 and 6,000,000, including both 1 and 6,000,000,
are divisible by 4, 5, or 6?
16. Determine how many numbers between 1 and 21,000,000,000, including 1 and
21,000,000,000, are divisible by 2, 3, 5, or 7.
17. How many numbers between 1 and 21,000,000, including both 1 and 21,000,000, are
divisible by 2, 3, or 5 but not by 7?
18. Find the number of integers between 1 and 1000, including both 1 and 1000, that are
not divisible by any of 5, 6, or 8.

Mathematical Induction 
19. Find the number of integers between 1 and 1000, including 1 and 1000, that are not
divisible by any of 4, 5, or 6.
20. Find the number of integers between 1 and 1000, including 1 and 1000, that are not
divisible by any of 4, 6, 7, or 10.
21. (a) Extend Example 9 to cover four Victorian gentlemen and four top hats. With four
gentlemen, there are 4 x 3 x 2 x 1 = 24 ways to give the hats back.
(b) Modify part (a) to ask the number of ways, with four gentlemen and four hats, that
at least two gentlemen can get their own hats back.
(c) Solve Example 9 using an alternative proof that counts the number of ways that
no gentleman gets his own hat back and subtracts that value from the total number
of ways for the hats to be given back.
(d) Challenge: Solve part (b) using the same methods as for part (c).
rnMathematical Induction
Mathematical induction is a powerful and fundamental technique for proving results about
all natural numbers. It is most important when it is possible to write down a proof for each
individual natural number but difficult-or even impossible-to give a single direct proof
that works for all natural numbers. This proof technique also often is used to prove that
algorithms are correct and to determine expressions for the complexity of algorithms.
1.7.1 
A First Form of Induction
One of the easiest methods (algorithms) for sorting a list of numbers into increasing order
is called selection sort. This algorithm first finds the smallest element in the list and then
interchanges it with the first element. After removing the smallest element from further
consideration, the algorithm finds and removes from consideration the smallest element
remaining (those elements other than the element now first in the list). This process is
repeated until the list has just one element remaining. Since finding a smallest element
in a set with n elements requires n - 1 comparisons, a selection sort, operating on n + 1
numbers, always makes
n +(n - 1) +(n 
-2) 
+..+ 
I
comparisons.
Example 1. Carry out a selection sort on the list 2, 1, 4, 3, 5.
Solution. In step i of the process, the ith smallest element is found among the elements
in positions i, i + 1 ... 
5 and is interchanged with the element in position i where 1 <
i < 4. (See Selection Sort Steps on page 46.)
To appreciate how many comparisons are needed, it is necessary to find a simpler way
to write the expression for the total number of comparisons. 
How do you go about adding up all the natural numbers from 0 to n where n can be
5, or 500, or 5000, or any other number? We all know how to do it in a tedious fashion for
any particular n, but that brute force method does not give an easy way to appreciate the
size of the sum for arbitrary n. (Nor does it give a way to compute the sum quickly.) The
problem is to find a simpler way to express the sum.

CHAPTER 1 Sets, Proof Templates, and Induction
Selection Sort Steps
Initial order 
Step One 
Identify smallest (nonboxed element) in
four comparisons
W 
Swap2with I
Step Two 
[] 
Identify smallest (nonboxed element) in
three comparisons
EL 
[ 
No swap needed
Step Three 
W 
[ 
Identify smallest (nonboxed element) in
two comparisons
[] 
[ 
Swap4with3
Step Four 
[] 
[ 
[ 
Identify smallest (nonboxed element) in
one comparison
W 
] 
[ 
No swap needed
Step Five 
J] M 
M 
[4] 
Identify smallest (nonboxed element) in
zero comparisons
Final Order 
Number of comparisons = 4 + 3 + 2 + 1 + 0
One way to proceed is to try to find a pattern for small instances of the problem: Add
up, say, the natural numbers from 0 to n for n = 0, 1, 2, 3, 4, and try to find a pattern.
Patterns can be very misleading, however, because a pattern that may look correct for the
first few numbers may very easily fail later on. If a possible pattern is found, it is necessary
to prove whether it works in general. Consider the sums for the first few integers:
0=0
0+1 = 1
0±1+2 = 3
0+1+2+3=6
0 + 1 + 2 + 3 + 4 
0+1+2+3+4+5=15
To find a different form for the problem often requires an idea that is not particularly
obvious. In this case, if you multiply each of the sums by two and then factor the doubled
value, you can hopefully see a pattern emerging. This transformation of the sums gives
2.0= 0=0.1
2.(0+1)= 2=1.2
2.(0+1+2)= 6=2.3
2.(0+1+2+3)= 12=3.4
2.(0+ 1 +2+3+4) = 20=4.5
The pattern that seems to be emerging is
2.(0+1+2+--.+n) =n.(n+1)

Mathematical Induction 
It is not obvious that this formula is true for all n. It is true for n = 0, 1, 2, 3, and 4, but as
yet, we have no reason to believe it is true for, say, n = 12, or 347, or any of the integers
for which we have not shown it to be true.
What is needed is a method to prove that the conjectured formula is correct for all
n e N. The standard method of proof for a result claimed to hold for every natural num-
ber is called mathematical induction. Such proofs use an axiom of arithmetic called the
Principle of Mathematical Induction. This is not like Template 1.2 (Set Inclusion), since
we are not proving the same thing for every element of N. For example, for the sum of the
first n integers, suppose we want to prove the sum is 6 for n = 3 but 15 for n = 5. Before
stating the general principle, we present an example showing how the principle is used to
prove that our conjectured formula for adding the natural numbers from 0 to n is true for
all natural numbers n.
Theorem 1. For any natural number n,
n . (n + 1)
Proof. Step 1: 
(Base step) 
Prove the result for n = 0, the smallest natural number.
The sum on the left-hand side of the equals sign is just the sum of all the natural numbers
starting at 0 and going up to 0-that is, it is just 0. The number on the right-hand side is
0. (0 + 1)/2, which is also 0. Therefore, the two sides are equal, and the result is true for
n =0.
Step 1: 
(Inductive step) Let n be any natural number for which the result is true. Prove
the result is also true for n + 1. The assumption that the result is true for n is called the
inductive hypothesis or inductive assumption. Assuming the result is true for n means
that
n.(n + 1)
Use this assumed-correct result to prove the required result for n + 1-that is, to prove that
(n + 1). (n + 2)
To prove this, we start by regrouping the terms on the left-hand side:
0+ l + 2+...+n+(n+ l)=(O+ I + 2 +...+n)+(n+ 1)
By the inductive hypothesis, the result is true for n, so we can substitute n(n + 1)/2 for the
terms in the first pair of parentheses on the right-hand side. We get
(0 + I+ 
2- 
.
-n) -- (n + 1) 
(n + 1) + (n + 1) 
(using the inductive hypothesis)
(n 
± 1) ±2 (n + 1) 
(simplifying the algebra)
(n + 1). (n + 2)
This means the formula is true for n + 1.

CHAPTER 1 Sets, Proof Templates, and Induction
Since we have proved that the formula is true for n = 0 and is true for n + 1 whenever
it is true for n, we can conclude that the formula is valid for all natural numbers. This
reasoning is call the Principle of Mathematical Induction. 
Let T= {n E N : 0+... +n = n(n + 1)/2}:
1. Since 0 E T by the base step, by the inductive step, 0 + 1 = 1 E T.
2. Apply the inductive step again: since 1 E T, 1 + 1 = 2 E T.
3. And again: since 2 c T, 2 + 1 = 3 E T.
To prove that 100 E T, apply the inductive step 100 times. To prove that 10,000 E T,
apply it 10,000 times. For any specific natural number n, one can show that n E T by
showing that 0 E T and then applying the inductive step n times. An inductive proof is
often visualized as an infinite line of dominoes, with the dominoes being pushed over one
at a time starting with the first one. Figure 1.16 gives another way of thinking about what
happens in an inductive proof.
0 1 2 3 4 5 
10 11
Falling dominoes.
A First Form of the Principle of Mathematical Induction
The Principle of Mathematical Induction gives a method for writing a single proof that
proves all natural numbers are in T. Sometimes, this statement of the Principle of Mathe-
matical Induction is called its first form.
Principle of Mathematical Induction
Let T be a subset of the natural numbers (that is, T C N), and let no E N. Suppose
(Base step) 
no E T, and
(Inductive step) 
for all natural numbers n such that n > no, if n e T, then
n+1 E T.
Then, every natural number greater than or equal to no is in T. That is,
T = {n : n E N and n > no]

Mathematical Induction 
In the proof of Theorem 1, T was defined to be the set of all natural numbers for which
the formula
n
Y- i = n(n + 1)/2
i=O
is true. So, in that case, we choose no = 0. The base step of that proof showed that no =
0 E T. The inductive step showed that if n E T, then n + 1 (" T. Now, by the Principle of
Mathematical Induction, T = {n e N: n > no = 0} = N.
We give a picture of what is involved in an inductive proof in Figure 1.17.
Base step 
Inductive step
0M
Principle of Mathematical Induction
Values for which the property is TRUE
The parts of an inductive proof.
1.7.2 
A Template for Constructing Proofs by Induction
Template 1.12 should help you to understand and construct a proof by induction.
To construct a proof using the Principle of Mathematical Induction, choose an no E
N appropriate to the problem. Let T- = In E N : n >_ no and property P holds for n}I:
"* (Base step) Prove that no e T.
"* (Inductive step) 
Let n E 7, and prove that n + 1 E T. The assumption that n E
T is called the inductive hypothesis.
"* Infer by the Principle of Mathematical Induction that every natural number n > no
is in T.

CHAPTER 1 Sets, Proof Templates, and Induction
The examples that follow show the power of this proof method. Some of the inequal-
ities verified here by induction will appear again in later chapters when we consider the
complexity of programs.
Example 2. 
For any natural number n such that n > 2, show that n + 1 < n2 . Since we
wish to prove our result for every n such that n > 2, we must choose no = 2 and let
T= {n E N: n > 2 andn + 1 < n 2j
According to our template, the proof now has three essential parts: (i) a base step, (ii) an
inductive step, and (iii) an application of the Principle of Mathematical Induction.
For the base step, we must prove that no c T. In this case, we must prove for no = 2
that no + 1 < n2. When the proof of the base step is complete, we know T 0 0, because
no E T. We would then like to know what elements greater than no are also in T. The
elements of T other than no are found using the inductive step and the Principle of Math-
ematical Induction.
The inductive step begins by picking an arbitrary element n of T. We then write
out property P for n to see what this assumption tells us. Here, it means n > 2 and
n+l 
<n2.
To complete the inductive step, we must show that n + 1 e T. We write out property
P for n + 1 to see what we need to prove. In this case, it means that n + 1 > 2 and (n +
1) + 1 < (n + 1)2. We must then figure out how to prove that property P holds for n + 1
knowing that property P is true for n. When we complete this proof, the Principle of
Mathematical Induction tells us that for all n such that n > no, we have n E T.
Solution. Let no = 2. Let T = {n e N : n > 2 and n + 1 < n 2). Prove by induction that
n E T provided n > 2.
(Base step) 
To show that no E T, show that 2 > 2 and 2 + 1 < 22. Both are obviously
true. Therefore, 2 e T.
(Inductive step) 
Let n > no. Show that if n e T, then n + 1 E T. That is, assume n > 2
and n + 1 <n 2, and prove that (i) n + 1 > 2 and (ii) (n + 1) + 1 < (n + 1)2. To prove
(i), observe that since n e T, we have n > 2. Therefore, n + 1 > 2. To prove (ii), use the
following chain of equalities and inequalities:
(n + 1)2 = n2 + 2n + I
> (n + 1) + 2n + 1 (using the inductive hypothesis: n 2 > n + 1)
> (n + 1) + 1 
(using the inductive hypothesis: n > 2 > 0)
Therefore, n + I E T.
By the Principle of Mathematical Induction, T = {n E N : n > 2}. 
You can see the parts of the template being used as you study Example 3. Identify the
steps of the template as they appear in this example.
Example 3. 
Recall that n! = n . (n -
1). (n - 2)... 2. 1. For any natural number n such
that n > 4, prove that n! > n2 .
Solution. Let no = 4. Let T = {n E N : n > 4 and n! > n2}. Prove by induction for
every natural number n that n E T provided that n > 4.

Mathematical Induction 
(Base step) 
Show that 4 e T. Since 4! = 24 and 42 = 16, we have 4! > 42, so 4 E T.
(Inductive step) Let n E T, then show that n + 1 e T. As before, it is trivial to show
that n + 1 > 4, so it only remains to show that (n + 1)! > (n + 1)2. To prove this, use the
following chain of equalities and inequalities:
(n + 1)! = (n + 1) .n! 
(definition of n!)
> (n + 1). n2 
(using the inductive hypothesis)
> (n + 1). (n + 1) (use Example 2 in Section 1.7.2 with n > 4 > 2)
= (n + 1)2
Therefore, n + 1 E T.
By the Principle of Mathematical Induction, T = {n E N : n > 4}. 
You should now show that no could not be chosen smaller.
In Examples 2 and 3 in Section 1.7.2 we did not prove the results were true for all
n E N. It is quite typical that important relations may not be true for some finitely many
small integers and, instead, are only true for all integers greater than or equal to some
"large" integer.
1.7.3 
Application: Fibonacci Numbers
A famous and often-studied sequence of numbers, called the Fibonacci numbers, was
defined by Leonardo Fibonacci (1170-1250, born in Italy).2 The first few numbers in this
sequence are
1, 1,2,3,5,8, 13, 21....
Denote the nth Fibonacci number by Fn, and let the first element of the sequence be
denoted as Fo. The defining rule for the elements of this sequence is Fo = F1 = 1 and
Fn = Fn- 1 + Fn- 2 for n > 2. After the initial values given for F0 and F1, the following
Fibonacci numbers can be found by adding together the two previous Fibonacci numbers;
for example, F2 is the sum of F1 and F0 . The first six Fibonacci numbers are
Fo = F1 = 1
F2 = F1 + Fo = 2
F3 = F2 + F 1 = 3
F4 = F3 + F2 =5
F5 = F4 + F3 = 8
We computed the nth Fibonacci number for n > 2 by adding together the preceding two
Fibonacci numbers. A definition of this sort is called a recursive definition, because the
value we want is given in terms of previously computed values. (We could not compute a
value for F4 directly from the value 4 as we could if the sequence were defined as G(n) =
4 . n.) The resulting sequence is called a recursively defined sequence.
The Fibonacci numbers are probably best known as a source of recreational mathemat-
ics but are also the source of inspiration for searching and sorting methods. Many results
concerning Fibonacci numbers are proved by induction. Example 4 shows a typical proof.
2 We will abbreviate born to b. for other famous persons.

CHAPTER 1 Sets, Proof Templates, and Induction
The Fibonacci numbers were defined by Leonardo of Pisa, filius (son of) Bonacci,
who lived around 1200. Leonardo developed the sequence in predicting the size of
a population of rabbits. F, is the number of pairs of rabbits he predicted one would
have n months after buying a pair of baby rabbits under the assumption that a pair of
rabbits matured in one month and produced a pair of offspring each month thereafter.
Month (n) Old Pairs 
New Pairs 
F.
I
Furthermore, he assumed that the rabbits always produced a male and a female as
each pair of offspring. So, Fo = 1 for the pair just purchased. F1 = 1, because after
one month, the original pair has just matured and are only now ready to start breeding.
F2 = 2, because the original pair has just had one pair of offspring. F3 = 3, because
the original pair has had another pair of offspring and the first offspring have just
matured and are only now ready to start breeding. What happens during month n?
All the rabbits alive during month n - 1 are still alive. In addition, all the rabbits alive
during month n - 2 have matured, and each pair has had one pair of offspring. Hence,
Fn = Fn-1 + Fn-2.
Example 4. 
Show that the identity F1 + F3 + F5 + .. 
+ F2n- 1 = F2n - 1 is true for
all n > 1.
Solution. Let no = 1. Prove the identity by induction on n. Let
T={nEN:n> landFl+F
3 +...+F 2n-1 =F 2n-1}
Prove that T = {n E N : n > 11.
(Base step) Prove the result for n = 1. The left-hand side in this case is just the sum
of all the Fibonacci numbers starting with F1 and ending with F(2. I-1). There is just one
such Fibonacci number, F 1, and the value of the left-hand side is 1. The right-hand side is
F2 . 1 -
1 = F2 - 1 = 2 - 1 = 1. So, the two sides are equal, and 1 E T.

Mathematical Induction 
(Inductive step) Let n > no. Show that if n E T, then n + 1 e T. Since n > 1, n + 1 >
1. Assume for n that
F1 +k F3 +t.. 
+ F2n-1 = F2n -
I
and prove that
F1 + F3 + ... + F2n-1 + F2(n+l)-l = F2(n+l) - 1
The required computation is
F1 + F3 + • • + F2n- 1 + F2(n+l)-i
= (F1 ± F3 + 
+ F2n-l) + F2(n+1)-1 
(making the formula for n clear)
= F2n -
1 + F2(n,+I)- 
(using the inductive hypothesis)
= (F2n + F2 (n+l)) - 1 
(rearranging terms)
= F2n+ 2 - 1 
(using the definition of F2z,+2)
= F 2(n+l) -
Therefore, n + 1 E T.
By the Principle of Mathematical Induction, T = {n e N : n > 1). 
E
1.7.4 
Application: Size of a Power Set
The next result was referred to in the discussion of computer switches in Section 1.3.4 and
will be proved several times in the book using several different ideas. Recall that 2(X),
the power set of X, is the set of all subsets of X.
Theorem 2. 
(Size of a Power Set) 
Let X be any finite set with n elements. Then, 2(X)
has 2' elements.
The proof of Theorem 2 can be proved by induction on the number of elements in
X. First, we prove an auxiliary result called a lemma. A lemma is the same as a theorem,
except that the result is not particularly important in its own right but only gives a step in
another proof. Just as procedures divide programs into manageable parts, lemmas are tools
for dividing a proof into smaller, more comprehensible pieces.
Lemma 1: 
Let X be any set, and let b 
' X. If X has (exactly) n subsets, then X U [b}
has exactly 2n subsets.
Proof. List the subsets of X:
S 1, S2 , S 3 ,. .... Sn

CHAPTER 1 Sets, Proof Templates, and Induction
Each of these is also a subset of X U (b). Now, create n more subsets of X U [b):
S, U {b}, S2 U 1b} ...
, Sn U (b}
Obviously, each Si U {b} is also a subset of X U {b}. Now, we have a list of 2n subsets of
X U {b}:
S1, S2,..., 
Sn, S1 U {b), S2 U {b},..., 
Sn U (b}
Show that (i) no subset of X U (b} appears twice in this list and (ii) every subset of X U {b}
appears in this list.
Once these two assertions have been proven, it will follow that these 2n subsets are all
the subsets of X U {b), so X U {b} has 2n subsets. We prove (ii) and leave the proof of (i)
as Exercise 32 in Section 1.9 for the reader.
To prove (ii), follow Template 1.1 (Element Membership in a Set). Let S be an ar-
bitrary subset of X U {b}. If b 0 S, then S C X, so S is one of the Si's. If b e S, let
S' = S -
1b}. Then, S' C X, so S' is some Si, and then S is Si U (b} (for the same i). In
either case, S is on the list. 
U
Proof of Theorem 2. 
Let T = {n c N : for every finite set X with n elements, P'(X) has
2" subsets}. We will prove by induction that T = N.
(Base step) 
Let no = 0. The only set with zero elements is 0. The only subset of 0 is 0,
so P(0) has I = 20 elements. Therefore, 0 E T.
(Inductive step) 
Let n > 0. Show that if n E T, then n + 1 E T. Using the hypothesis
that every set with n elements has 2' subsets, prove that every set with n ± 1 elements
has 2n"+ 
subsets. Let X be an arbitrary set with n + 1 elements. Pick one element y E X,
and let Z = X -
(y}. Then, Z has n elements, so by the hypothesis, Z has 2' subsets. By
Lemma 1, X = Z U [y} has 2.2" = 2n+1 subsets. Therefore, n + 1 E T.
By the Principle of Mathematical Induction, T = N. 
U
1.7.5 
Application: Geometric Series
A finite geometric series, or just a geometric series, is the sum of terms of the form a. r
where a, r E R - (0), r : 1, and 0 < i < n. For example,
n
Sari =a +a.r 
+a.r2 +.+.a 
rn
i=0
is a geometric series. As another example, let a = 5, r = -3, and n = 5, giving
5 + 5. (-3) + 5. (-3)2 + 5. (-3)3 + 5. (-3)4 
5.(-3)5
as a geometric series. Although
L 
3. 2'
i=5

Mathematical Induction 
does not look like a geometric series, it is easy to transform this finite geometric series into
a more familiar looking expression:
E 3.2i = 3.32+3.64+...+3.220
i=5
= 96.1 +96.2+.-. +96.215
= 196.2/
i=O
A very useful feature of a geometric series is that we can find a closed form for its sum.
Here, we focus on the sum of a finite geometric series. The sum of an infinite geometric
series is usually studied in a calculus course, since the limiting process is needed. Although
it seems to be unrelated at first, we will begin by proving that for any n E N, 1 - xn+1 has
1 - x as a factor. After proving this by induction, we will apply the result to summing the
finite geometric series.
Theorem 3. For any natural number n and for any real number x, prove that
(1 - x) (I + x + X2 +''". + Xn) = I - xn+lI
Solution. This result is just a familiar factoring rule. The ellipses usually suggest that a
proof by induction is needed. Fix an arbitrary x E R. Let no = 0 and
T"={n EN:foranyx ER,(I -x)(±+x+x
2 +x 3 +...+xn)= -xn+
1 I
(Base step) Show that 0 E T. Substituting 0 for n gives (1 - x)(1) = 1 - x as required.
(Inductive step) Let n > 0. Show that if n E T, then n + 1 E T. Since n E T, it is as-
sumed that
(I - x)(1 + x + x2 + x3 +.. 
+ xn) =1-xn+l
We must prove that n + 1 E T or that
(1 -x) (I +x + x2 + x3 
+.- +xn+l) = 
xn+2
Use the following chain of equalities to complete the proof:
(1 -x)(l +x +x 2 +x 3 +... 
+xn +xn+l)
(1 - x)(1 + x + x 2 + x 3 +... + xn) + (I -
x)xn+l 
(making the formula for n clear)
- xn+1 + (1 - x)xn+l 
(using the inductive hypothesis)
- xn+1 + xn+l - xn+2 
(simplifying the expression)
- -xn+2
Therefore, n + 1 E T.
By the Principle of Mathematical Induction, T = N. 
U
Corollary 1: 
For r E R•with r 0 1,
n 
rn+l
Y- a-ri =a.
i=0
Proof. 
n oari =a 
r 
a 
-rn+l
_i4= a= 
a 
, 
)-=0 ri = a " 1-r 
•

CHAPTER 1 Sets, Proof Templates, and Induction
Corollary 1 gives a formula for finding the sum of a finite geometric series.
Example 5.
(a) 1 + 3 + 32 + 33 +... 
+ 3 
= (1 - 3n+1)/(-2) = (3n+l - 1)/2.
(b) 2+10+50+...+1250=2+2.5+2-52+2.53+2.54
= 2(1 - 55)/(-4)
= 1562
The next example shows how to compute the sum when the first term does not clearly
correspond to what is expected for a term of the form a • r°.
Example 6. 
Find the sum of
3.2+3.22 +3.23 +... +3.2n
Solution. Rewrite the expression with 3 . 2 = 6 as a factor of each term:
(6.2' + 6.21 +... +6.2n-1)
We now have a geometric series with n terms with a = 6 and r = 2. The sum is
n-1
E 6.2i = 6. (1 - 2n)/(-1) = 6. (2 -
1)
i=0
Program Correctness
An important problem in computer science is to prove that a program executes correctly
for all possible data sets. There is no simple way to do this. In fact, it is impossible in
principle to prove correctness for very complicated programs. Many techniques, however,
are useful for proving the correctness of a wide variety of programs.
One method for checking the correctness of a program is to test the program on lots of
data to make sure it comes up with the right answers in each case. Obviously, this technique
is useful, but it can be used only to find errors, not to establish correctness. The problem is
that if no errors are found by running a program on test data, the only conclusion one can
draw with any assurance is that the program works correctly on all the data tested.
Another useful technique is to prove mathematically that the algorithms (the principles
behind the program) are correct. Such proofs are often proofs by induction.
Before we examine some algorithms, we need to explain how we will present the steps
of an algorithm. The language we use is called a pseudocode, because it is a mixture of
normal language and the precise syntax of a programming language.
1.8.1 
Pseudocode Conventions
A variable will simply be a name that will represent a place in a computer to store a value.
When we use a variable, like X, we are referring to the value that is stored in the location
the machine assigns to X. A simple assignment statement of the form
variable = expression

Program Correctness 
computes the value of the expression on the right-hand side of the equal sign and then stores
the result in the location indicated by the name on the left-hand side. To cause branching
in the code, we use a condition test of the form
if condition then
S1
else
S2
When this code is executed, the condition is evaluated to be either TRUE or FALSE. If the
condition is TRUE, then the code represented by S1 is executed, the code represented by
S2 is not executed, and the execution then continues at the first command following S2. If
the condition is FALSE, then the code represented by S2 is executed, the code represented
by S1 is not executed, and the execution then continues at the first command following S2.
For a statement that can cause repetition of a block of code, we generally use a for
construct. The code
for i = 1 to n do
S
starts by initializing i to the value 1. If the value of i is less than or equal to n, the commands
represented by S will then be executed. The code S may or may not use i as a variable. At
the end of executing this indented code, i will be incremented by 1 and then tested to see
if it is still less than or equal to n. If this condition for the current value of i is evaluated
as TRUE, the loop is executed again using the new value of i. When the condition is tested
with a value of i for which the condition is evaluated as FALSE, the program continues at
the next line following the code represented by S. We often refer to such code as a for loop.
To display a result, we use the word print followed by a list of the names of the storage
locations whose values are to be displayed (think of print on the screen or of output to a
printer). Comments in the code will appear as /* any text as a comment */. Comments are
skipped over when the program is executed.
With just these four instructions (assignment, condition, repetition, and printing) for
pseudocode, we can write instructions that could easily be turned into valid code in some
programming language.
An additional way to cause repetition of a block of code is with use of a while loop:
while condition
S
A while statement is a command to execute the code indented below the while state-
ment over and over again as long as the condition written just after the word while is
evaluated as TRUE. If this condition is evaluated as FALSE when the loop is first reached,
the indented statements are executed zero times, that is, they are not executed.
Many authors use the word algorithm to describe only strategies for programs that
will ultimately stop. Others would say there is no "output" unless it stops. We include our
apologies for our use of the word and present the following program as algorithm. The
algorithm will use a while loop to "repeat forever" a block of code, since the condition
in the while statement can never be false. This is just an instruction to execute the while
loop without stopping-or until someone turns off the computer. In this case, it is called
an infinite loop, since it could go on forever!

CHAPTER 1 Sets, Proof Templates, and Induction
1.8.2 
An Algorithm to Generate Perfect Squares
We now demonstrate how you can generate all the perfect squares. A perfect square is any
integer n that is equal to k2 for some integer k. For example, 1 is a perfect square, because
it is equal to 12. In addition 9 is a perfect square, because 9 equals 32. For the Perfect
Squares algorithm, we give an intuitive argument that the program is correct.
INPUT:
OUTPUT: List of perfect squares
Counter = 0
while (TRUE) /* repeat forever */
Counter = Counter + 1
print Counter. Counter
To understand the Perfect Squares algorithm, trace its execution for the first few values
of Counter. The algorithm starts with Counter equal to 0 and then repeats the last two in-
structions forever. The first time through, the algorithm adds 1 to Counter, giving Counter
the value of 1, and prints 1 • 1. The second time through, it adds 1 to Counter, increas-
ing Counter from 1 to 2, and prints 2. 2. The third time, it adds 1 to Counter, increasing
Counter from 2 to 3, and prints out 3 .3. And so forth. It is obvious that the algorithm
works. In fact, for any natural number k, after the kth time through the loop, Counter is set
to k and the first k perfect squares have been printed.
1.8.3 
Two Algorithms for Computing Square Roots
There are many algorithms for finding the square root of an integer. The two algorithms
presented here use different strategies for finding a better and better approximation of a
square root. The first was found on ancient Babylonian cuneiform tablets. The second is a
variant of one that has been taught in schools. A fundamental problem with any approxi-
mation algorithm is to have a bound on how far an approximation is from the true value.
For both algorithms presented here, we can prove a result about the bound using induction.
Square Root I
The Square Root I algorithm provides a method of finding an approximation to the square
root of an integer. In this case, the first approximation is a value less than the desired result.
Each iteration of the procedure gives a larger value than the previous one.

Program Correctness 
RESULT: Approximation of v/-1
Root = 4
DecimalPlace Value = 1
for i = I to 8 do
DecimalPlace Value = DecimalPlace Value/ 10
/* Search for the digit at the decimal place.*/
Digit = 9
/* 9 is the largest possible value for Digit. *1
AddOn = Digit. DecimalPlace Value
while((Root + AddOn) • (Root + AddOn) > 17) do
1* Digit is too big, so try a smaller value. "1
Digit = Digit - 1
AddOn = Digit . DecimalPlaceValue
/* At the end of the while loop the next digit is found. */
Root = Root + AddOn
print Root
The code starts by approximating Vii by 4. The variable DecimalPlace Value is used
to keep track of which decimal digit is being added to the approximation. When i is equal
to n, DecimalPlaceValue will be equal to 10-n. The first value added to the previous ap-
proximation is Digit. 10-n where Digit is 9. The while loop sees if adding Digit. 10-n
gives a new value for the approximation by computing
(Root + Digit. 10-n)2 < 17
If the value of Digit gives
(Root+ Digit. 10-n)2 > 17
a new, smaller value of Digit is tried. At some point, Digit will take on a first value, say
Digitfirst, for which
(Root + Digitfirst. 10-n)2 < 17
The new approximation for Vii will be formed by adding Digitfirst 10'- to Root to form
the next approximation. The first iteration of the for loop gives the value 1 for Digitfir,.
Consequently,
Root = 4 + 
. 10-1 = 4.1
for i = 1. Now, in the second iteration, Digitfist takes the value 2, so
Root = 4.1 + 2.10-2 = 4.12

CHAPTER 1 Sets, Proof Templates, and Induction
The process continues to add decimal digits to the intial approximation for as many itera-
tions of the for loop as are required by the code. For the code shown, the final approxima-
tion is Root = 4.12310562 and Root Root = 16.9999999536.
For Square Root I, we can find an explicit formula for a bound on the error after n
iterations. Let Rn denote the value of Root after n iterations of the for loop. The error term
is defined as En = /1 
-
Rn for n E N.
Theorem 4. 
Prove that for Square Root I, the error bound Ec for R, satisfies the inequal-
ity En < 10' 
for each n e N.
Proof Let n0 =0. 
LetT= {n eN: Rn < A1 
< Rn + I O-n.
(Base step) 
For n = 0, the result follows, since Root is 4 and the for loop is not executed.
Clearly, 4 < -17 < 5, so 6o = /17 - 4 < 1 = 10-0. Therefore, 0 e T.
(Inductive step) 
Choose n > no such that n e T. Now, prove that n + 1 E T. That is,
assume Rn < 
17 < Rn + 10-n, and prove that Rn+± < /17 < Rn+1 + 10-(n+'). By
the inductive hypothesis,
Rn < /17 < R, + 10-n = Rn + 10. 10-(n+1)
The search for Digit finds the largest integer Digit where Rn +I 
Digit. 10-(n+1) < 
-17.
Since Digit is the largest such integer,
Rn + Digit. 10-(n+l) < /17 < (Rn + Digit. 10-(n+)) + I0-(n+l)
Since Digit + 1 has the property that
(Rn + (Digit + 1). 10-(n+l))2 > 17
then
Rn + Digit. 10-(n+1) = Rn+ < VI7 < Rn + Digit. 10-(n+0) + 10-(n+1)
= Rn+1 + 10-0+1)
as desired, and n + 1 e T.
Therefore, T = N by the Principle of Mathematical Induction. 
U
Square Root II
The Square Root II algorithm produces an approximation of the square root of an inte-
ger by generating approximations that are alternately larger than the square root and then
smaller than the square root. Each iteration of the procedure, however, brings the value of
the approximation closer to the true value of the square root.

Program Correctness 
RESULT: Approximation of hi
Root = 4
for i = 1 to 4 do
Root = (Root + 17/Root)/2
print Root
The computation starts by assigning 4 to Root. The value in Root at any time will
represent the current approximation to N/1. 
For each iteration of the for loop, the current
approximation is improved by evaluating the expression
(Root + 17/Root)/2
and storing the "better" approximation in Root. This process continues until the for loop
has been executed four times. The value of Root after each of the first four iterations is
shown in Table 1.2.
Output from Square Root II
Values of Root for I= 1, 2, 3, 4
Root
4.125
4.12310606060606
4.12310562561768
4.12310562561766
With any iterative algorithm, it is important to know with each iteration that the error
gets smaller. Let Rn denote the value of Root after the for loop has been executed n times.
Then, as before En = /P7 -
Rn is the error in the calculation after n executions of the for
loop. The error can be either positive or negative.
Theorem 5. 
Prove that for Square Root II, the error bound cn for Rn satisfies the inequal-
ity IEI < (1/2)6.2n-3 for each n E N.
Proof. Letno =0. LetT= {n e N: 16nI < (1/2)6"2n-3}.
(Base step) 
Since (4.1)2 
-
16.81 and (4.125)2 = 17.015625, it follows that
4.1 <V i7 < 4.125
Now, Ro = 4, so
4.1 -R 0 < V_7-Ro <4.125-Ro
co < 0.125 
(Ro = 4)
CO < (1/2)6"2°-3

CHAPTER 1 Sets, Proof Templates, and Induction
Therefore, 0 E T.
(Inductive step) The remainder of the proof is left as an exercise for the reader. 
Exercise 39 in Section 1.9 explores other properties of this algorithm.
rnExercises
Assume that all variables not given an explicit domain are elements of N.
1. Show that for n = 0, 1, 2 the following is true:
F2 +2 2 +3 2 +..+n2 =n(n+l)(2n+1)/6
2. Find all the elements of {0, 1, 2, 31 that, when substituted for n, satisfy:
-
n
1-- + 
+--.-• 
+ 
""+
1.2 
2.3 
n(n+l) 
n+1
3. Write out the information that describes what the inductive step assumes and what the
step must prove for proving
12 + 22 + 32 +... 
+n 2 = n(n + 1)(2n + 1)/6
with no given.
4. Write out the information that describes what the inductive step assumes and what the
step must prove for proving
15±+2 5+3 5±+...±+fn5=!nl6 +In 5 +5 n4 _ 1 n2
with no given.
5. Write out the information that describes what the inductive step assumes and what the
step must prove for proving that 6 divides n3 + 5n with no given.
6. Write out the information that describes what the inductive step assumes and what the
step must prove for proving that 120 divides n5 - 5n 3 + 4n with no given.
7. Show for n = O, 1, 2 that
(n + 1)(2n + 1)(2n + 3)/3 + (2n + 3)2 = (n + 2)(2n + 3)(2n + 5)/3
8. Show that
(n + 1)(2n + 1)(2n + 3)/3 + (2n + 3)2 = (n + 2)(2n + 3)(2n + 5)/3
9. Show that
n2 + n + 2(n + 1) = (n + 1)2 + (n + 1)
10. Show that
n
E F2i+i = F2n+2 - 1
i=0
forn = 1,2, 3,4.
11. For which elements n E {0, 1, 2, 3, 4, 51 does 6 divide n3 + 5n?
12. Show that 8 divides k2 - Ifor k e {1, 3, 5, 7}.

Exercises 
13. Find the smallest n E N such that 2n 2 + 3n + 1 < n 3.
14. Prove by induction for n > 0:
2+4+6+...+2n 
=n
2 +n
15. Prove by induction:
(a) 12 +2
2 +3 2 +...+n
2 =n(n+1)(2n+1)/6forn >0
(b) 13 +2
3 +3 3 +..+n
3 = (+2+3+...--+n)
2 forn >0
(c) 14 +2 4 +3
4 +... + n4 = n (n + 1) (2n + 1) (3n2 + 3n -
1)/30 for n > 0
(d) 15 +2 5 +3 5 +...+n 5 =ln
6 +an6 +n
-
nzforn_>0
n_ 
nfo
16. Prove by induction:
(a) 0.2
0°1.2
1 +2.2
2 +3.2
3 +...+n.2n =(n-1)2n+1+2forn >0
(b) 12 +32 +52 
+ ..
± 
+ (2n + 1)2 
-
(n + 1) (2n + 1) (2n + 3)/3 for n > 0
(c) 12 -2
2 +32 
+ ... + (-1)n-1 n2 = (-1)n-' n (n + 1)/2 for n > 0
(d) 1.2±2.3+ 3.4+...+n.(n+ 1)=n(n+ 
1)(n+2)/3forn >0
(e) 1.2.3+2.3.4+ 3.4.5+...+n.(n+ 
1).(n+2)=n(n+ 1)(n+2)
(n + 3)/4 for n > 0
17. Prove by induction:
(a) + 
_ + 
+ n (n-l) 
fornnl>--
(b) 1 
.. 
= 2 
f- 
18. Prove by induction that 8 divides (2n + 1)2 -
1 for all n E N.
19. Prove by induction for n > 0:
(a) 3 divides n3 + 2n
(b) 5 divides n5 - n
(c) 6 divides n 3 - n
(d) 6 divides n 3 + 5n
20. Prove by induction for all n E N:
(a) 7 divides n7 - n
(b) 11 divides n 11 - n
(c) 13 divides n 13 - n
(d) 120 divides n5 - 5n 3 + 4n
21. Prove by induction: The sum of the cubes of any three consecutive natural numbers is
divisible by 9.
22. Show that any integer consisting of 3n identical digits is divisible by 3n. Verify this for
222; 777; 222,222,222; and 555,555,555. Prove the general statement for all n e N by
induction.
23. Prove by induction that the following identities are true for the Fibonacci numbers:
(a) y 
0 F2i+1 = F2n+2 -
1 for n > 0
(b) y•n I Fi2 = Fn"- Fn,+l 
I for n _> I
(c) 
Fi=0 Fn+z-lforn>0
24. Find the Fibonacci numbers F8 through F15. Prove the following results for the Fi-
bonacci numbers:
(a) F3n and F3n+l are odd, and F3n+2 is even for n > 0
(b) Fo + F2 + ... + F2 n = F2 n+l for n > 0

CHAPTER 1 Sets, Proof Templates, and Induction
(c) Fo + F3 + 
+ F3 = F3n+2/2 for n > 0
(d)F 
1 =Fn " 
- (-1)n forn >_ 0
25. The Lucas numbers are defined as LO = 2, L, = 1, and Ln = Ln-1 + Ln-2 for n >
2. Prove the following identities for Lucas numbers.
(a) Lj + L2 + .. • + Ln = Ln+2 - 3 for n > 1
(b) L2 
... 
2-forn>2
(c) L 2 + L 4 + -
"- +L
2n = L 2n+l -
1 for n > 2
26. Find the value of the following sums:
(a) 2 + 2 -
3n
(b) I-1+1-+ 
+(In
(c) -2 + 4- 8 + 16 + ... + (-2)11
(d) 1.03 + (1.03)2 + (1.03)3 +-... 
+ 
(1.03)n
27. Find a rational number representing each of the following repeating decimals:
(a) 0.537537537537537537537537537...
(b) 31.25469696969696969696969...
28. A fixed dose of a given drug increases the concentration of that drug above nor-
mal levels in the bloodstream by an amount Co (measured in percent). The effect
of the drug wears off over time such that the concentration at some time t is Coe-kt
where k is the known rate at which the concentration of the drug in the bloodstream
declines.
(a) Find the residual concentration R, the accumulated amount of the drug above nor-
mal levels in the bloodstream, at time t after n doses given at intervals of to hours
starting with the first dose at t = 0.
(b) If the drug is alcohol and 1 oz. of alcohol has Co = 0.05%, how often can a "dose"
be taken so that the residual concentration is never more than 0.15%? Assume
k = (1/3) ln(2).
29. (a) Prove by induction that 2n > n for all n > 0.
(b) Prove that 2n > n directly from Theorem 2 in Section 1.7.4, without explicit use of
induction. (That is, Theorem 2 in Section 1.7.4 itself was proved using induction,
but you should not have to do any additional induction.)
(c) Prove by induction that 2" > n3 for n > 10.
30. Prove by induction:
(a) There is a natural number k such that n! > n3 for all n > k. (Try to find the least
such number k.)
(b) n! > n 4 for n > 7.
31. Let T = {n E N : sin(n •7r) = 0}. Prove that T = N. (Hint: sin(a + b) = sin(a) •
cos(b) + cos(a) , sin(b).)
32. Prove assertion 1 from Lemma 1.
33. (a) Suppose you take out a mortgage for A dollars at a monthly interest rate I and
a monthly payment P. (To calculate I: if the annual interest rate is 12%, divide
by 12 to get a monthly rate of 1%, then replace the percentage with the decimal
fraction 0.01.) Let An denote the amount you have left to pay off after n months.
So, A0 = A by definition. At the end of each month, you are first charged interest

Exercises 
on all the money you owed during the month, and then your payment is subtracted.
So,
An+, = An(1 + I) - P
Prove by induction that
An, 
A - P)(I +/)n + -P
(b) Use this to calculate the monthly payment on a 30-year loan of $100,000 at 12%
interest per year. (Note that the formula is inexact, since money is always rounded
off to a whole number of cents. The derivation here does not do that. We use 12%
to make the arithmetic easier. You should consult a local bank to find a current
value.)
34. Sometimes, induction is not necessary for a proof, but an inductive proof can be sim-
pler than a noninductive proof. This is true for Examples 2 and 3 of Section 1.7.2.
(a) Find proofs of Examples 2 and 3 using familiar algebra but no explicit induction. 3
(b) Optional: Find proofs of Examples 2 and 3 using calculus. (To some students
calculus may be more familiar than induction, but it is certainly more complicated
theoretically!)
35. Prove Theorem 4 of Section 1.5.4 in full generality. You may use Theorem 3 of Section
1.5.3, since it has already been proven. (Hint: Use induction on the number of sets).
36. For natural number exponents and nonzero bases, most of the familiar laws of expo-
nents can be proved by induction on the exponents using the facts that b° = I (for
b # 0) and bn+l = b . bn. Assuming that m and n are natural numbers and both r and
s are nonzero real numbers, prove the following:
(a) rm+n = rm rn
(b) rmn = (rm)n.
(c) If r > 1, then r m > rn if and only if m > n.
(d) If n,. r, s > 0, then rn > sn if and only if r > s.
37. A common use of induction is to prove various facts that seem to be fairly obvious but
are otherwise awkward or impossible to prove. These frequently involve expressions
with ellipses. Use induction to show that:
(a) X U (X 1 n X2 fnX3 n... n Xn) = (X U X1) n (X U X2) n... n (X U X,)
(b) X n (X 1 U X 2 U X3 U-.- 
U Xn) = (X n X1 ) U (X n X2) U ... U (X n X,)
(c) (XI nX 2 n...nlXn) = X1 U X2 U ... U Xn
(d) (X 1 U X2 U ... U X,) = X1 n Y2 n ... n 
A 
n
38. (a) Prove that x E X0 n X1 n ... n Xn if and only if x e Xi for every i such that
0<i <n.
(b) Prove that x E X0 U X1 U ... U X, if and only if x E Xi for some i such that
0< i <n.
(c) Use part (a) to give another proof of Exercise 37(a).
3 We say explicit induction since, in the development of arithmetic from the foundations, almost everything about
+ and • is proved by induction, including the familiar algebra needed for this problem.

CHAPTER 1 Sets, Proof Templates, and Induction
39. Refer to the Square Root II algorithm.
(a) Finish the proof of Theorem 5.
(b) Show that En+l = -- ,2 /(2R,). (Hint: Simplify VT1 
- (Rn + (17/Rn))/2.)
(c) How close do you think the value printed is to the actual value of VP-7? Approxi-
mately how many decimal digits in accuracy is that?
40. Challenge: Exactly where is the mistake in the following proof that all personal com-
puters are the same brand? Let T = {n E N : n > 1 and in every set of n personal
computers, all the personal computers are the same brand). Prove by induction that for
every natural number n such that n > 1 is in T.
(Base step) 
1 E T, since, trivially, if a set of personal computers contains only one
computer, then every (one) computer in the set has the same brand.
(Inductive step) 
Suppose n E T. We need to show n + I E T. So, let P be any set
of n + 1 personal computers. Pick any computer c e P; we need to show that every
computer in P is the same brand as c. So, let d be any computer in P. If d = c,
then, trivially, d and c are the same brand. Otherwise, c E P - {d}. The set P - {d}
contains n computers, so by inductive hypothesis, all the computers in P -
{d} are
the same brand. Furthermore, d e P - {c}, and, also by inductive hypothesis, all the
computers in P -
{c} are the same brand. Now, let e be a computer in both P -
{cl
and P -
{d}. Then, d is the same brand as e, and c is the same brand as e. Therefore,
d is the same brand as c.
41. Using the Principle of Mathematical Induction, prove each of the following different
forms of the principle:
(a) Induction with a possibly negative starting point: Suppose that S C Z, that some
integer no E S, and that for every n E Z, if n e S and n > no, then n + 1 E S.
Then, for every integer n > no, we have n E S.
(b) Induction downward: Suppose that S C Z, that some integer no E S, and that for
every n e Z, if n E S and n < no, then n -1 
e S. Then, for every integer n < no,
we have n e S.
(c) Finite induction upward: Let no, nI E Z, no < nI. Suppose that S C Z, no E S,
and for every n e Z, if n e S, n > no, and n < ni, then n + 1 e S. Then, every
integer n where no < n < nI is in S.
(d) Suppose S C N is infinite, and suppose that for every n E N, if n + 1 E S, then
n c S. Prove that S = N.
Strong Form of Mathematical Induction
The Fundamental Theorem of Arithmetic states some familiar results about factoring
integers. Part of the Fundamental Theorem of Arithmetic is the result that every integer
n > 1 can be factored as a product
n = P1 "P2." Pk

Strong Form of Mathematical Induction 
for some prime numbers P1, P2 ...- 
Pk. The pi's are not required to be distinct, and
k simply denotes the number of factors needed to express p. For example, 4 = 2.2 is a
factorization of 4 into two primes. If k = 1, then n is a prime, and n = n is a factorization
into primes. We just define the term factorization into primes to include the one-prime
case.
The proof that every integer n > 1 can be factored into primes goes as follows: If n is
prime, then n = n is a factorization of n into primes. Otherwise, if n is not a prime, then n
can be factored as n = k -m for some integers m and k where n > m, k > 1. Since k and
m are both less than n, we can conclude that m and k can be factored. We would now use
the factorizations of m and k to form a factorization of n.
This is not an application of an inductive hypothesis as induction has been presented
so far. The problem is that the Principle of Mathematical Induction only uses the result for
n -
1 to prove the result for n = (n - 1 + 1). Here, the result for n has to be proved from
the same result for two smaller numbers k and m, neither of which (it turns out) is n -
1.
In fact, k, m < n/2.
The Strong Form of Mathematical Induction has a somewhat different form of in-
ductive hypothesis: It assumes the result for all natural numbers k where no _< k < n-
with no E N just as before-and then proves the result for n. This was what we needed
for factoring-whatever k, m are, we get to apply the inductive hypothesis to both of
them.
We now give a formal statement of this new form of induction and then complete the
proof that every integer can be written as a product of primes.
Strong Form of Mathematical Induction
Let T C N and no E N. Suppose that for all natural numbers n > no, if no, no +
1 .... 
n - l E T, then n E T. Then, every natural number n > no is in T.
If no is equal to zero, then the Strong Form of Mathematical Induction proves that
T-=N.
The Strong Form of Mathematical Induction is also sometimes called Complete In-
duction or Course of Values Induction. It is the inductive hypothesis which is "stronger"
not the principle itself. Indeed, any theorem provable with the strong form of induction is
also provable with the first form, but such proofs may require some awkward complica-
tions.
To use the strong form of induction, one must prove the if-then statement that
if no, no + 1 ..... n - 1 c 
ET, 
then n E T
Virtually always, the proof is broken into cases. For some values of n, including no, the
result is proven directly; this set of cases is sometimes called the base step. For the other
values of n, the result is proved using the assumption that no, no + 1 .... 
n - 1 E T. This
is called the inductive step, and that assumption is called the inductive hypothesis.

CHAPTER 1 Sets, Proof Templates, and Induction
Inductive step
Base step
no0 
n0+1 n0+2 
ni 
-
base
cases___________________ 
__
Assumed true cases
iStrong Form of Mathematical Induction )
Values for which the property is TRUE
Typical proof using the Strong Form of Induction.
Using Figure 1.18 as a guide, we now return to proving the result about factoring
integers. As noted above, the proof breaks into two cases: one case for prime numbers n,
and one case for nonprimes.
Theorem 1. (Part of the Fundamental Theorem of Arithmetic) Every natural num-
ber n such that n > 1 can be factored into a product of one or more primes.
Proof. The proof will use the Strong Form of Mathematical Induction. Let no = 2, and
let
T = {n E N : n > 1 and n = p1 • P2 
" Pk for some prime numbers pl, P2, ... , Pk-
Let n be any natural number greater than or equal to 2.
(Base step) The base cases deal with any n that is a prime. Since n is prime, n = n is a
factorization of n into the product of one prime.
(Inductive step) 
In this step, we will prove the result for any n that is not a prime. As-
sume that for all m where 2 < m < n, m E T. Now, prove n E T.
Since n is not prime, n can be factored as n = k . m where k 0 1 and m : 1. It follows
easily that 1 < k < n and that 1 < m < n. Hence, by the inductive hypothesis, k, m E T.
So, k and m can be factored into products of primes:
k = pi • P2 ... Pi 
and 
m=q1•q2 .. 
•qj
Then,

Strong Form of Mathematical Induction 
n = pi "P2""Pi 
Aqlj q2...qj
so n can be factored into a product of primes. Therefore, n E T.
By the Strong Form of Mathematical Induction, T = {n e N : n > 1}. 
1.10.1 
Using the Strong Form of Mathematical Induction
The Strong Form of Mathematical Induction is often used to prove a closed form for the
elements of a recursively defined sequence like the Fibonacci sequence. A closed form
for the elements is a representation for each term that can be computed without knowing
any other element(s) of the sequence. Exercise 16 in Section 1.11 is to show that the nth
Fibonacci number can be computed as
(I+-f)ln±-1 
Il,-)n\ 
l
11V 
~ 
l~- 
Fn =--I"---/I"
.,/5- \2 
1-
for each n E N. This expression is a closed form for the Fibonacci sequence.
The next example is similar to the result about Fibonacci numbers, but the computa-
tions are less complex. The verification of the closed form for the Fibonacci numbers is
left as an exercise.
Example 1. The terms of a sequence are given recursively as
ao=0, al =2, 
and 
an = 4 (al1-a,-2) forn_>2
Prove by induction that bn = n. 2' is a closed form for the sequence. That is, prove that
an = bn for every n E N.
Solution. Let no = 0 and T = {n E N : bn = an}. In this case, two elements of the se-
quence, ao and al, are defined directly. As is fairly typical, these special cases constitute
the base cases for the proof.
(Base step) 
The two base cases are n = 0 and n = 1 Evaluating b0 and bj gives bo = 0
and b1 = 2. Thus, ao = bo and al = bl, so 0, 1 E T.
(Inductive step) 
We now deal with any n such that n > 2. Assume that for all k where
0 < k < n, k E T. Prove that n E T by showing an = bn. Since n > 2, n -
1, n -
2 > 0,
son -
1, n -2 
E T.
an = 4 (an-I - an-2) (by definition of an)
= 4((n -
1)2n-1 - (n - 2)2n-2) 
(by inductive hypothesis)
= 4(n- 2n-1 - 2n-1 - n. 2n-2 + 2. 2n-2)
= 4(n(2n- 
-
2n-2) - (2n-1 - 2.2n-2))
= 4(n(2. 2n-2 - 2n-2) - (2.2n-2 -
2. 2n-2))
=4.n.2n-2 = n.2n
Therefore, bn = an and n E T.
By the Strong Form of Mathematical Induction, T = N. That is, bn = n 2n is a closed
form for the terms of the recursively defined sequence. 
E

CHAPTER 1 Sets, Proof Templates, and Induction
Constructing a proof by induction using the Strong Form of Induction requires a dif-
ferent template than the one for the first Principle of Mathematical Induction. This new
template makes clear what is being done at each step, but be careful: There is more variety
in the form of proofs using the Strong Form of Induction than in proofs using the ordinary
Principle of Mathematical Induction.
Temlat 1.3 
Uin 
h 
Strn 
For 
of 
Mahmaia
To construct a proof using the Strong Form of Mathematical Induction, choose an
no E N appropriate to the problem. Let
T = {n E N : n > no and property P holds of n}
(Base step) Show explicitly that property P holds for certain numbers n, called the
base cases. no should be one of those values; the choice of the other values depend on
the problem.
(Inductive step) For all n > no not covered in the base case, assume that property
P holds for all k = no, no + 1 .... n - 1, and prove that property P holds for n.
Infer by the Strong Form of Mathematical Induction that
T = {n E N : n > no)
Using the Strong Form of Mathematical Induction
As in an ordinary inductive proof, an inductive proof using the strong form of induction
has three essential parts: (i) a base step, (ii) an inductive step, and (iii) an application of the
Strong Form of Mathematical Induction.
Translating the problem includes specifying no and clearly defining the set T whose
elements the inductive proof will determine-that is, clearly stating the property P to be
verified. This definition does not tell us that any number is in T.
The first step of the proof is called the base step, and it involves proving the result for
the base case(s). Identify one or more values for which property P can be verified directly.
Often, one might verify it directly for values no, no + 1, no + 2, ... ., n for some n1 > no.
In the base step of the proof, prove directly that no, no + 1 .... 
n 1 E T. As in Example 1,
the base cases often correspond to the initial conditions specified in the problem.
The inductive step is usually quite different in the Strong Form of Mathematical Induc-
tion from the inductive step in the Principle of Mathematical Induction. Begin by letting
n > no be an arbitrary natural number that is not covered in the base case. Assume that
no, no + 1 .... 
n - 1 E T. To complete the inductive step, use that assumption to show
that n E T. Again, start by writing out property P for n to see what is to be proved. There
is no real formula for the next part of the inductive proof. Figure out how to prove property
P holds for n knowing that property P holds for no, no + 1 .... 
n - 1. When that is done,
use the Strong Form of Mathematical Induction to infer that for all n > no, n E T.

Strong Form of Mathematical Induction 
In practice, you may often try to work out the Inductive step first. You will then see
certain values-and you may as well assume that no must be one of them-for which the ar-
gument doesn't use the inductive hypothesis. These values are identified as the base cases.
Example 2. The terms of a sequence are given recursively as
ao=l, al=1, 
and 
an =2.anl_+3.an_2forn>>2
Prove by induction that bn = ½.3n + ½ . (- 1)n is a closed form for the sequence.
Solution. Letno =OandT= {n eN :b, =an}.
(Base step) 
Identify n = 0, 1 as the base cases. The defined values in such a definition
often are the base cases. Evaluate b0 and bl directly:
bo = 1(30 + (-1)O) = 1(1 + 1) = 1 = ao
bl = 1(31 + (-1)1) = 1(3 -
1) = 1 = al
So, 0, 1 e T.
(Inductive step) 
Now, let n > 2, and assume for k = 0, 1,...,n - 1 that k E T. Prove
that n e T by showing that an = bn:
an = 2at-I + 3an-2 
(by definition of an)
= 2. 1 (3n-1 + (-1)n-1) + 3. 1(3Q 
2 + (-1)n-2) 
(by inductive hypothesis)
= 3fn-1 + (-1)n-1 + 3 . 3n-2 + 2(-- 
2-
We know that (-I)n-2 = (-1)n, (-1)n-1 - -(-1)n, and 3n-1 = 3 . 3n-2. So,
an = 3.3fn-2 +- 3. 3fn-2 -
)n + 3-(_1)
=29"3 n-2 +- I(_-1)n
+
1 3n + I(-1)n
=bn
as desired. Therefore, n E T.
By the Strong Form of Mathematical Induction, T = N. That is, b, = •n +-
(- 1)n is a closed form for the terms of the recursively defined sequence. 
Unlikely as it might seem, we can use the Strong Form of Mathematical Induction to
show which amounts of postage can be made from a fixed number of several denominations
of stamps.
Example 3. 
The country of Oz issues only 3-cent and 8-cent stamps. What amounts of
postage are possible with just these two kinds of stamps?
Solution. Obviously, some packages will require a lot of surface area to affix all the
required postage! By experimentation, we can find out that all of 0, 3, 6, 8, 9, 11, 12, 14,
15, 16, 17, 18, 19, 20, and 21 cents are possible. Since we are getting all amounts of 14

CHAPTER 1 Sets, Proof Templates, and Induction
cents or greater, we conjecture that all amounts except 1, 2, 4, 5, 7, 8, 10, and 13 cents are
possible.
We conjectured that all values starting at 14 are possible, so we handle all n < 14
separately. We noted that 0, 3, 6, 8, 9, 11, and 12 cents are all possible. Amounts of 1, 2,
4, 5, 7, 8, 10, or 13 cents are impossible: To get any of those amounts, one would need to
use, at most, 4 stamps (why?), and we can list all the possible combinations of 0-4 stamps
to show that none add up to 1, 2, 4, 5, 7, 8, 10, or 13 cents.
Let
T = {n e N: n > 14 and n = k .3 + .8 for some k, 1 E NJ
We must then prove that every natural number n > 14 is in T.
(Base step) After some experimentation, we decide the base cases are 14, 15, and 16.
Sincel4 = 2.3+ 1.8, 15 = 5.3+0.8, andl6 =0.3+2.8,wehavel4,15,16 G T.
(Inductive step) Let n > 14, and assume that 14, 15, 16. 
n - 1 E T. Now, prove
that n E T.
Since 14, 15, and 16 are base cases, every possible value for n that is not a base case
and is greater than or equal to 14 is also greater than or equal to 17. For n > 17, we have
n - 3 > 14. So, by the inductive hypothesis, for some k, I E N, n - 3 = k 3 + 1. 8. Then,
n = (n-3)+3 
= k-3+1.8+3 = (k+1).3+8.I
So, n E '-, as desired.
By the Strong Form of Mathematical Induction, T = {n E N : n > 14}. 
There are some other values for which Oz can make postage-for example, 3, 6, 8, 9,
11, and 12. When we looked carefully at the inductive step, we saw we would have to be
able to go back three from any n for which we were proving the postage amount could be
made. We were then more clear on what the base cases would need to be. Consequently,
the base step proved postage can be made for n = 14, 15, and 16. It is not unusual that the
base cases are identified by trying the inductive step of the proof. Note that in the proof
of the inductive case above, before applying the inductive hypothesis to n - 3, we checked
that n - 3 > no. Not making that check is a very easy way to make an error. In this case,
had we not made that check, we might have started with n = 12, asserted that n - 3 = 9
was in T, and proceeded as with the inductive case above-and we would have "proved"
something that was actually false.
1.10.2 
Application: Algorithm to Compute Powers
Suppose you want to compute xn for some nonzero real number x and some natural number
n. One way is to multiply together n copies of x, a task that requires n - 1 multiplications.
Are there faster ways to complete this computation? We will prove that the following al-
gorithm computes xn using far fewer multiplications for large values of n.

Strong Form of Mathematical Induction 
INPUT: A nonzero real number x and a natural number n
OUTPUT: The value of xn
FastPower(x, n) 1* The initial call */
FastPower (base, expont) 1* The recursive procedure */
if (expont = 0) then
return 1
else
if (expont is odd) then
return base . FastPower(base . base, (expont - 1)/2)
else
return FastPower(base . base, expont/2)
The algorithm presented uses a programming feature called recursion. In this algo-
rithm, a call to the algorithm FastPower is part of its own code. In a programming language
that supports this feature, the compiler will keep track of which version of FastPower is
being executed and which values should be used for the arguments. For more details about
how recursion is implemented in a programming language, the reader should consult a
manual for a language such as Java, C, or C++.
The reader should trace through the algorithm by hand for some sample values of
base and expont. For example, a computer executing this algorithm to compute 25 will go
through the following steps:
FastPower(2, 5) identifies 5 as odd and computes
2 . FastPower(2.2, (5 -
1)/2) = 2 . FastPower(4, 2)
To execute FastPower(4, 2) requires the execution of
FastPower(4.4, 2/2) = FastPower(16, 1)
Now, expont = 1 is odd, so the program computes
16. FastPower(16.16, (1 - 1)/2) = 16. FastPower(256, 0)
When FastPower(256, 0) is executed, the program starts the return process. Fast-
Power(256, 0) returns 1 to FastPower(16, 1). The returning value using FastPower(16, 1)
is 16 . FastPower(16, 1) = 16. This value is FastPower(4, 2), which must be multiplied by
2 before that value is returned to FastPower(2, 5). Thus, FastPower(2, 5) = 32.
The flow of control for this example is shown in Figure 1.19 on page 74.
Even though the example computation for 25 works correctly, it is, however, not quite
obvious that the FastPower algorithm correctly calculates powers for every nonzero base

CHAPTER 1 Sets, Proof Templates, and Induction
FastPower (2, 5)
\return 32
base expont
call: 
\return 32
base expont
call 2: 
return 16
base expont
call 3: 
\return 1
base expont
call4: 
Flow of control for FastPower (2, 5).
and every exponent. Using the Strong Form of Mathematical Induction, we now prove that
the algorithm is correct for all cases.
Theorem 2. 
The FastPower algorithm returns the value base' for base E R -
{0}, and
n E N.
Proof. The proof is by induction on the value of n. Let no = 0 and
T = {n e N : for every base e R -
{0}, FastPower(base, n) = base}
Prove by the Strong Form of Mathematical Induction that T = N.
(Base step) 
For n = 0, the algorithm returns 1, as required. So, 0 G T.
(Inductive step) 
Let n > 0. Assume that for all k such that 0 < k < n, k E T. Now,
prove that n E T.
This case breaks into two subcases:
Case 1: 
n is odd. So, n = 2k +± for some k e N. Clearly, 0 < k <n. By familiar
properties of exponentiation,
base2k+l = base base2k
= base. (base2)k
By the inductive hypothesis, since k < n, the algorithm correctly computes bk for any b.
In particular, it computes (base2))k; thus, base. (base2)k = base 2k+l.
Case 2: 
n is even. The proof is analogous to the proof of Case 1. In either case, n E T.
By the Strong Form of Mathematical Induction, T = N. 
FastPower is actually used in many computer science applications when the exponent
is known to be an integer. Special computer chips are used in cryptography for doing

Strong Form of Mathematical Induction 
arithmetic of numbers up to approximately 300 digits. These chips essentially compute
powers this way, with one modification: FastPower, as written, makes a recursive call-it
invokes (another copy of) itself. To calculate 25, for example, the procedure was called
four times (the original call and three recursive calls). There is computer overhead in each
of these calls. It turns out that the special chips have had the recursive calls replaced with
a loop, producing the program actually used. Interested readers should try writing this
algorithm nonrecursively.
1.10.3 
Application: Finding Factorizations
The Fundamental Theorem of Arithmetic was proved at the beginning of this section. As
important as the result is, however, it does not provide any insight regarding how one goes
about finding such a factorization. The two algorithms here explore factoring integers. The
first looks for the largest odd divisor. In a theorem we will prove later, the proof does
not provide a method for finding the largest odd divisor but, instead, uses the Fundamental
Theorem of Arithmetic to guarantee the existence of such a factor. When you actually want
to find the elements that the theorem only says will exist, you can use the first algorithm as
a method for doing this step of the proof. The second algorithm takes the guarantee of the
Fundamental Theorem of Arithmetic that a factorization exists and actually finds it. Later,
you will be asked to prove that these algorithms are correct. At this point it, however, is
important to understand what the algorithms are doing.
Largest Odd Divisor
A while loop controls the iterations in Largest Odd Divisor algorithm, because each it-
eration reduces the number being considered by a factor of 2 until only an odd number
remains.
INPUT: Integer value N > 0
OUTPUT: Largest odd divisor of N
LargeOdd (N)
while (Mod(N, 2) = 0)
N= N/2
print N
In this code, the condition mod(N, 2) = 0 returns TRUE when N is divisible by 2 (N
is even). The code returns FALSE when N is not divisible by 2 (N is odd). The first test of
the condition simply asks if the original number is odd. If the number is odd, it is certainly
the largest odd factor, and N is printed. If the condition is TRUE and N is even, then the
code controlled by the while loop divides N by a factor of 2. The resulting value (N/2)
is used in the condition the next time the while statement is executed. If the condition is
TRUE, the division by 2 is repeated. Eventually, the condition in the while statement with

CHAPTER 1 Sets, Proof Templates, and Induction
the value N/2k, where 2 k is the highest power of 2 that is a factor of N, will be evaluated
as FALSE, because the value tested is odd. In this case, the process terminates by printing
the final value of N/2k. For example, if N = 78, the condition Mod(78, 2) = 0 is TRUE
and N is replaced by 78/2 = 39. Now, when the condition Mod(39, 2) = 0 is tested, the
condition is FALSE. The while loop is exited, and the value of N/2 = 39 is printed.
Theorem 3. 
Prove that the Largest Odd Divisor algorithm is correct.
Proof Exercise for the reader. 
Factorization
Often, a small insight that does not seem particularly significant can make a big difference
in developing an algorithm. In the code for PrintFactors, the idea is that if an integer n can
be factored as j • k where 1 < j, k < n, then either j or k is in the range I to 
n-n. To find
a factor of n, we can focus on finding a value between 2 and In rather than a value from
2ton - 1.
INPUT: Integer N > I
OUTPUT-: Factors of N
PrintFactors (N) /* Initial call */
PrintFactors (n) /* The recursive procedure *!
RootN =
TrialFactor = [RootNj
while (mod(n, TrialFactor) :A 0) do
/* If TrialFactor is a divisor of n, the loop
will be executed zero times. */
TrialFactor = TrialFactor -
if (TrialFactor < 1) then
print n
else
PrintFactors(TrialFactor)
PrintFactors(n/TrialFactor)
The procedure PrintFactors is designed to display the factors of any integer. For
example, we know that the factors of 12 are 2, 2, and 3. The value of RootN is ini-
tially assigned the value L,/2] = 3. Therefore, the first time through PrintFactors, we
set TrialFactor equal to 3, and we test Mod(n, TrialFactor) 0 0. The condition is FALSE,
which means that 3 is a factor of n. TrialFactor is greater than 1, so we call PrintFactors(3)
and PrintFactors(12/3). PrintFactors(3) prints the factor 3. PrintFactors(4) starts by set-

Strong Form of Mathematical Induction 
ting TrialFactor equal to 2. Because now Mod(n, TrialFactor) A 0 is FALSE, we call
PrintFactors(2) and PrintFactors(4/2). These two calls to PrintFactors both print a 2,
completing the factorization of 12.
When you trace the execution of a procedure, some visual help to see how control
passes from one step to another can be valuable. In Figure 1.20 we show how 376 is fac-
tored. The while loop determines whether there is a factor for n starting with I/n and
working down to 1. The figure displays the flow of control after the while loop has been
executed. Each time the while loop identifies a factor, it prints the factor and terminates.
This is seen when PrintFactors(2) is executed. If the while loop identifies a factor of n
such that
n = TrialFactor. (n/TrialFactor)
and TrialFactor is greater than 1, then it executes PrintFactors again on both TrialFactor
and n/TrialFactor. This is indicated, for example, in the case of PrintFactors(4) that must
execute both PrintFactors(2) and PrintFactors(4/2) when the while loop identifies 2 as a
factor.
PrintFactors(3 76)
Executes 
Executes
PrintFactors(8) 
PrintFactors(47)
Execute 
/ 
Executes 
Prints 47
PrintFactors(2) 
PrintFactors(4)
Prints 2 
Execute/ 
Executes
PrintFactors(2) 
PrintFactors(2)
Prints 2 
Prints 2
Factors: 2, 2, 2, 47
Flow of control for PrintFactors(376).
Theorem 4. Prove that the algorithm PrintFactors is correct.
Proof. Exercise for the reader. 
U
1.10.4 
Application: Binary Search
If you think about how you look for a name in a phone book, you will have a good idea
of what the code in the BinarySearch algorithm does. A common process is the following:
You open a phone book to about the page where you think the name should appear. If you
have turned past the name you want, you continue this process with the first part of the
phone book. Otherwise, you have not gone far enough in the phone book, so you continue
this process using the pages from that point forward to the end of the phone book. More
mechanically, you could think of a program always choosing a page halfway through those

CHAPTER 1 Sets, Proof Templates, and Induction
that could possibly contain the name. If the name is not on the middle page, the search
continues either in the first half of the pages being considered or in the last half of the pages
being considered. This strategy is just what BinarySearch does by repeatedly halving the
range of pages that it thinks could contain the name. Eventually, the process comes to a
page that must either contain the name or the process knows that the name does not occur
in the phone book.
INPUT: Name to be found in the phone directory City
OUTPUT: Message indicating whether or not Name was found
BinarySearch(Name, City)
FirstPage = the page number of the first page of City
LastPage = the page number of the last page of City
PageFound = FALSE
NameFound = FALSE
while (FirstPage < LastPage and PageFound = FALSE) do
MiddlePage = [(FirstPage + LastPage)/2]
if (Name falls between the first name on page MiddlePage
and the last name on page MiddlePage) then
PageFound = TRUE
else
if (Name is alphabetically less than
the first name on page MiddlePage) then
LastPage = MiddlePage -
else
FirstPage = MiddlePage + 1
if (PageFound = TRUE) then
Examine all names on page MiddlePage
if (Name is found on MiddlePage) then
NameFound = TRUE
else
NameFound = FALSE
if (NameFound = TRUE) then
Print a message saying Name is on MiddlePage
else
Print a message saying Name is not in City
Example 4. Determine whether Joe Smith is in a phone book with 521 pages. For this
problem, suppose Joe Smith appears on page 326.

Exercises 
Solution. We start with FirstPage = 1 and LastPage = 521. MiddlePage = L(1 +
521)/2] = 261. Since Joe Smith should appear after page 261, we let FirstPage = 262.
Now, MiddlePage = L(262 + 521)/2J = 391. Since Joe Smith is not on page 391 and we
are beyond the page we want, we let LastPage = 390 and compute MiddlePage = L(262 +
390)/2J = 326. We find Joe Smith on this page and return an appropriate message.
Theorem 5. 
Prove that the algorithm Binary Search of Phone Directory is correct.
Proof. Exercise for the reader. 
M
U 
Exercises
Assume that all variables not given an explicit domain are elements of N.
1. The terms of a sequence are given recursively as ao = 2, al = 6, and a, = 2a,_1 +
3 a,-2 for n > 2. Find the first eight terms of this sequence.
2. The terms of a sequence are given recursively as p0 = 3, pI = 7, and Pn = 3 Pn-1 -
2 Pn-2 for n > 2. Find the first eight terms of this sequence.
3. The terms of a sequence are given recursively as a0 = 0, al = 4, and a, = 8 an-i -
16 an-2 for n > 2. Find the first eight terms of this sequence.
4. Prove that with just 3-cent and 5-cent stamps, you can make any amount of postage
less than 35 cents (any natural number of cents) except 1 cent, 2 cents, 4 cents, and 7
cents.
5. The terms of a sequence are given recursively as p0 = 1, p1 = 2, and Pn = 2 p,-1 -
Pn-2 for n > 2. Write out the information that the inductive step assumes and what
the step must prove in proving b, = 2- 3n is a closed form for the sequence. Suppose
no = 0 and the base cases are 0 and 1.
6. The terms of a sequence are given recursively as P0 = 3, pi = 7, and pn" = 3 Pn-1 -
2 Pn-2 for n > 2. Write out the information that the inductive step assumes and what
the step must prove in proving bn = 2n+2 -
1 is a closed form for the sequence. Sup-
pose no - 1 and the base cases are 0 and 1.
7. The terms of a sequence are given recursively as ao = 0, a1 = 4, and a, = 8 an- 
-I
16 an-2 for n > 2. Write out the information that the inductive step assumes and what
the step must prove in proving bn = n 4n is a closed form for the sequence. Suppose
no = 1 and the base cases are 0 and 1.
8. Given that bn- 1 = 2 3 n-1 and bn-2 -
2.
3 n-2, prove that if bn = 2bn- 1 + 3bn-2,
then bn = 2. 3n provided n > 2.
9. Given that bn 1 -
2 n+l -
1 and bn- 2 = 2' -
1, prove that if bn = 3bn-1 - 2bn-2,
then b_ = 2n+2 -
1 provided n > 2.
10. Given that bn- 1 = (n -
1)4 n-1 and bn-2 = (n -
2 )4 n-2, prove that if bn = 8bnI -
16b,-
2 , then bn = n4' provided n > 2.
11. The terms of a sequence are given recursively as ao = 2, al = 6, and an = 2 an-I +
3 an-2 for n > 2. Prove by induction that b, = 2. 3n is a closed form for the sequence.
12. The terms of a sequence are given recursively as p0 = 3, pl = 7, and Pn = 3 Pn-I -
2 Pn-2 for n > 2. Prove by induction that bn = 2 n+2 -
1 is a closed form for the
sequence.

CHAPTER 1 Sets, Proof Templates, and Induction
13. The terms of a sequence are given recursively as ao = 0, a1 = 4, and a, = 8 anI --
16 an-2 for n > 2. Prove by induction that bn = n 4n is a closed form for the sequence.
14. The terms of a sequence are given recursively as po = 1, P1 = 2, and Pn = 2 Pn-I -
Pn-2 for n > 2. Prove by induction that bn = 1 + n is a closed form for the
sequence.
15. (a) Prove that with just 3-cent and 5-cent stamps, you can make any amount of postage
(any natural number of cents) except 1 cent, 2 cents, 4 cents, and 7 cents.
(Hint: That you can make 0-cent postage is obvious. You need to prove two things:
(i) that you can assemble any amount of postage except 1 cent, 2 cents, 4 cents,
and 7 cents; and (ii) that you cannot assemble these four amounts. Be careful about
whether you use the Principle of Mathematical Induction or the Strong Form of
Mathematical Induction.)
(b) What amounts of postage can be assembled with 4-cent and 7-cent stamps only?
(c) What amounts of postage can be assembled with 8-cent and 10-cent stamps only?
(d) What amounts of postage can be assembled with 7-cent, 8-cent, and 10 cent stamps
only?
(e) What amounts of postage can be assembled with 2-cent and 5-cent stamps only?
16. Prove by induction that
+V5ý 
1 I 
-
5n+l
Fn = V-= 
-
is a closed form for the Fibonacci sequence.
17. Prove that Fn+m = Fn " Fm + Fm-1 i Fn- 1 for m > 1. Prove the following
corollaries:
(a) Fn-1 [F2n-1.
(b) Fn- 1 F3n-1.
(c) F2 + F 2 
is a Fibonacci number.
n~l
18. In how many ways can you climb a ladder with n rungs if at each step you can go
up either one or two rungs? The terms of a sequence are given recursively as al = 1,
a2 = 2, and an = an-1 + an-2 for n > 2. Prove by induction that bn = Fn+l gives
the terms of this sequence where Fn+i is the (n + 1)st Fibonacci number.
19. The Lucas numbers are defined as LO = 2, LI = 1, and Ln = Ln-1 + Ln- 2 for n > 2.
Prove that Ln+ 
-- Fn- 1 + Fn+l for n > 2.
20. Trace through the execution of the procedure FastPower on the following inputs:
(a) base = 3, expont = 9.
(b) base = 2, expont = 10.
(c) base = 5, expont = 6.
(d) Count the number of multiplications needed in (a)-(c).
21. What exactly is wrong with the following "proof" that for every real number x > 0,
x = 2x:
Suppose the result is true for all real numbers y where O<y < x.
Case 1: x = 0. Then, 2x = 2- 0 = 0 = x.
Case 2: x > 0. Then, 0 < x/2 < x. So, by hypothesis, x/2 = 2(x/2) = x. Doubling
both sides, deduce that x = 2x. So, the result holds for every real number x > 0 by
the Strong Form of Mathematical Induction.

Chapter Review 
22. Challenge: There is a third principle related to induction, the Principle of Well-
Ordering for the Natural Numbers. It is the following: If T C N and T A 0, then
T contains a minimum element; that is, there is a natural number no E T such that for
all natural numbers k < no, we have k g T.
(a) Use the Principle of Well-Ordering for the Natural Numbers instead of the Strong
Form of Mathematical Induction to prove that
n . (n + 1)
(Hint: Let T={n EN:0+l+2+...+n 
n.(n+1)/2}.)
(b) Use the Principle of Well-Ordering for the Natural Numbers instead of the Strong
Form of Mathematical Induction to prove that every integer n such that n > 1 can
be factored into a product of one or more primes.
(c) Using the Principle of Well-Ordering for the Natural Numbers, prove one of the
forms of the Principle of Mathematical Induction.
(d) Using one of the forms of the Principle of Mathematical Induction, prove the Prin-
ciple of Well-Ordering for the Natural Numbers.
23. The Binary Search of Phone Directory algorithm in Section 1.10.4 looks for any page
(if any) containing a name Name in a telephone book City. The portion of the algorithm
used in searching for the page is called BinarySearch. Prove that the algorithm works
correctly.
* 
Chapter Review
The language of sets was introduced. The basic operations of union, intersection, set dif-
ference, and complementation were studied. The properties of these operations were given
as well as the properties of these operations when they are used with each other. One im-
portant way that union, intersection, and complementation interact is through DeMorgan's
Laws. Finally, the power set of a set and the product of two sets are introduced. The proof
techniques used with sets are highlighted as templates for an idea of how to approach sim-
ilar proofs. The chapter then moves to the topic of determining the number of elements in
a set of overlapping sets using the Principle of Inclusion-Exclusion. The last two sections
introduce extremely important proof techniques for proving results about the natural num-
bers. Both the Principle of Mathematical Induction and the Strong Form of Mathematical
Induction are explained and used in constructing proofs of statements about natural num-
bers. The basic idea of a pseudocode that is used to present algorithms is described for use
throughout.
Set operations are used as examples of operations that define boolean algebras and
lattices. Induction is used to study Fibonacci numbers and geometric series. Important
examples regarding the use of induction in both forms in proving an algorithm is correct are
given. For example, algorithms for computing powers, finding factorizations of an integer,
and carrying out an efficient search are proven to be correct algorithms.

CHAPTER 1 Sets, Proof Templates, and Induction
1.12.1 
Terms, Theorems, Algorithms, and Templates
1.1 
Summary
TERMS
algebraic identity 
is a member of 
real numbers
empty set 
is an element of 
set
equal 
is contained in 
set-theoretic notation
factor 
is in 
subset
finite set 
is not an element of 
universal set
if and only if 
natural numbers 
universe
implication 
not finite sets 
vacuously
infinite set 
proper subset 
Venn diagram
integers 
rational number
THEOREM
A = B if and only if A C B and B C A
TEMPLATES
Template 1.1 
Element Membership in a Set 
Template 1.5 
Set Equality
Template 1.2 
Set Inclusion 
Template 1.6 
Set Inequality
Template 1.3 
Set Non-Inclusion 
Template 1.7 
Implications and If and Only If
Template 1.4 
Proper Set Inclusion
1.3 
Summary
TERMS
absolute difference 
disjoint sets 
minimum element
analogous 
distributive lattice 
power set
bit representation 
equivalent statements 
product
boolean algebra 
inclusive or 
proof by cases
bottom 
indirect proof 
relative difference
complement 
intersection (n) 
set difference
complementation 
inverse 
statement
complemented lattice 
join (v) 
symmetric difference
contrapositive 
lattice 
top
converse 
maximum element 
union (U)
counterexample 
meet (A)
THEOREMS
Absorption Law for Join 
Commutative Law for Intersection
Absorption Law for Meet 
Commutative Law for Join
An Absorption Law 
Commutative Law for Meet
Associative Law for Intersection 
Commutative Law for Union
Associative Law for Join 
DeMorgan's Law for Intersection
Associative Law for Meet 
DeMorgan's Law for Union
Associative Law for Union 
DeMorgan's Laws

Chapter Review 
Distributive Law for Intersection 
Distributive Law for Meet
Distributive Law for Join 
Distributive Law for Union
TEMPLATES
Template 1.8 Proof by Cases 
Template 1.10 
Proof by Contradiction
Template 1.9 Disproof by Counterexample 
Template 1.11 
Indirect Proof
1.5 
Summary
TERMS
cardinality 
number of divisors
even intersection 
odd intersection
hat check problem
THEOREMS
Basic Counting Theorem 
Principle of Inclusion-Exclusion for
Principle of Inclusion-Exclusion 
Three Sets
Principle of Inclusion-Exclusion for 
Principle of Inclusion-Exclusion for Two
Finitely Many Sets 
Sets
1.7 and 1.8 
Summary
TERMS
algorithm 
inductive step
base step 
infinite loop
condition 
lemma
correctness 
mathematical induction
Fibonacci numbers 
perfect square
finite geometric series 
pseudocode
first form 
recursive definition
for loop 
recursively defined sequence
geometric series 
selection sort
inductive assumption 
while loop
inductive hypothesis
THEOREMS
Principle of Mathematical Induction
Size of a Power Set
ALGORITHMS
Perfect Squares
Square Root I
Square Root II
TEMPLATES
Template 1.12 Using the Principle of
Mathematical Induction

CHAPTER 1 Sets, Proof Templates, and Induction
1.10 
Summary
TERMS
base cases 
prime numbers
base step(s) 
recursion
closed form 
recursive call
inductive hypothesis 
recursively defined sequence
inductive step
THEOREMS
Fundamental Theorem of Arithmetic
Strong Form of Mathematical Induction
ALGORITHMS
Compute Powers 
Binary Search of Phone Directory
Largest Odd Divisor 
Compute F,
Print a Prime Factorization of an Integer
TEMPLATE
Template 1.13 Using the Strong Form of
Mathematical Induction
1.12.2 
Starting to Review
1. Which of the following set descriptions gives the set {2, 8, 14, 20, 26, 32)?
(a) {n E N :n = 2x + 6 for some integer x such that I < x < 6)
(b) {n e N: n = 6x + 2 for some integer x such that I < x < 6)
(c) {n E N n = 6x + 2 for some integer x such that 0 < x < 6}
(d) None of the above
2. Let B = {2, 3, 6, 9, 111 and C = {1, 4, 6, 11, 15). Which of the following sets are not
any of B U C, B fl C, and B - C?
(a) {1, 6, 9, 151
(b) {6, 11)
(c) {2, 3, 9}
(d) None of the above
3. What is the contrapositive of the statement "If the sun is shining, then it is time to go
outside."
(a) If the sun is shining, then it is not time to go outside.
(b) If it is time to go outside, then the sun is shining.
(c) If it is not time to go outside, then the sun is not shining.
(d) None of the above.

Chapter Review 
4. Of 26 students who are either females or biology majors, there are 17 females and 23
biology majors. How many females are biology majors?
(a) 12
(b) 17
(c) 14
(d) 9
5. Describe each of the following sets in the format {x : property of x I.
(a) A = {0,2,4, 6, 8,...}
(b) B ={ 1,2,5, 10, 17,26,37,50,....
(c) C = {1,5,9, 13, 17, 21,...}
(d) D - {1, 1/2, 1/3, 1/4, 1/5, . .. )
(e) E = {lemon, lime, 1, 3, 5, 7, ....
6. For U ={1, 2, 3,..., 9, 10},let A = {1, 2, 3, 4, 5), B = {1, 2, 4, 8}, C ={1, 2, 3, 5,
71, and D = {2, 4, 6, 8}. Determine the elements of each of the following sets
(a) (AUB) nC
(b) AU(BAnC)
(c) CUD
(d) CAD
(e) (AUB)-C
(f) AU(B-C)
(g) (B-C)-D
(h) B -
(C - D)
(i) (A U B) - (C n D)
7. List the subsets of each of the following sets:
(a) A = {1, 2, 31
(b) B = {1, {2, 31}
(c) C = {{1, 2, 31)
8. Find a counterexample to A C B ý* A U B = A.
9. List the first eight terms of the sequence defined as co = 1, Cl = 3, and c, = c, 1I +
2Cn-2 for n > 2.
10. Let A be a subset of some universal set U. If A contains 58 elements and A contains
37 elements, how many elements are in U?
1.12.3 
Review Questions
1. Let 
A={1,2,4,7,81, 
B={1,4,5,7,91, 
and 
C={3,7,8,9}. 
Let 
U=
{1, 2, 3, 4, 5, 6, 7, 8,9, 10). Find set expressions using these sets and the opera-
tions of union, intersection, absolute difference, and relative difference to represent
the following sets:
(a) {2, 7, 91
(b) {3, 5, 6, 7, 9, 10}

CHAPTER 1 Sets, Proof Templates, and Induction
2. A survey of reading habits was proposed for the city of Lewisburg. Let U be the sample
set of adults in Lewisburg, F the set of females in the sample, B the set of readers who
have finished five or more books in the past year (called regular book readers), and P
the set of readers who read some of every issue of a periodical during the past year
(called the regular periodical readers). Use set notation to identify the following sets
of readers:
(a) Females who regularly read books or periodicals
(b) The men who read both books and periodicals regularly
(c) Adults who regularly read either books or periodicals, but not both
(d) The women who do not read either books or periodicals regularly
(e) The men who read books but not periodicals regularly
Now, describe in words the following sets:
(f) FnP
(g) F nBnP
(h) F n B n P
(i) FnBnP
0) Fn(PUB)-Fn(PnB)
3. For sets A and B, prove that A U (B - A) = A U B.
4. For sets A and B, prove that A n B = 0 ý* A C B.
5. Prove by induction that 3 
+ 11 
+ .. + (8n - 5) = 4n2 - n for n E N and n > 1.
6. Prove by induction that 2n + 1 < 3n - 1 for n E N and n > 3.
7. Prove that for every n E N that n 3 + n is even.
8. Prove by induction that 73 1 (8 n+2 + 9 2n+1) for every n e N.
9. Prove that b, = 5 • 2' + 1 is a closed form for the recursive relation ao = 6, al =
11, and an = 3an--I-- 2an-2 for n > 2.
10. Let S C N and 3 e S. Also, assume that if x E S, then x + 3 e S. Prove that
13-n : n E NJ c S.
11. The country of Xabob uses currency consisting of coins with values of 3 zabots and
5 zabots. If you cannot combine some number of these coins to pay a bill, the item is
free. For what number of zabots are items free? Prove your answer.
12. Challenge: The name Strong Form of Mathematical Induction suggests that that form
really is a logically different assertion than the Principle of Mathematical Induction.
In fact, however, this is not so. It is not too difficult to prove one form from the other.
(a) Assuming the Strong Form of Mathematical Induction, prove the Principle of
Mathematical Induction. You need to do the following: Assume the hypothesis of
the first form of the Principle of Mathematical Induction, and using just the Strong
Form of Mathematical Induction, prove the conclusion of the (first form of the)
Principle of Mathematical Induction. So, assume T C N, some no E T,
and for every n > no, if n E T, then n + 1 e T. Then, using the Strong
Form of Mathematical Induction but not the (first form of the) Principle
of Mathematical Induction, prove that T = N. (For a statement of the first
form of the Principle of Mathematical Induction, see Section 1.7.1) (Hint: Let
T, = T U {0, 1 .... 
no -
1}. Prove, using the Strong Form of Mathematical In-

Chapter Review 
duction but not the Principle of Mathematical Induction, that T' = N. Then, use
that to show that every natural number n > no is in T.)
(b) Assuming the (first form of the) Principle of Mathematical Induction, prove the
Strong Form of Mathematical Induction. You need to do the following: Assume
'T C N and that for all n E N, if all k < n are in T, then n (" T. Prove, using
the Principle of Mathematical Induction but not the Strong Form of Mathemati-
cal Induction, that T = N. (Hint: Let T' = {n E N : for all k < n, k E T}. Prove
T' = N, and then use that to prove T = N.)
13. How many students are in Math347? From the survey of all the students, it was found
that 43 had taken Econl03, 55 had taken Soci213, 30 had taken Musil 11, 8 had taken
both Econl03 and Soci2l3, 13 had taken both Econl03 and MusilIl, 15 had taken
Soci213 and Musil 11, and 8 had taken none of the courses. No one had taken all three
courses.
14. How many integers between 1 and 250, including 1 and 250, are divisible neither by 3
nor by 7 but are divisible by 5?
1.12.4 
Using Discrete Mathematics in Computer Science
1. Prove that the Largest Odd Divisor algorithm outputs the largest odd divisor of N for
all integers N > 0.
2. Prove that the PrintFactors algorithm factors natural numbers N > 1 into primes.
Prove that, in fact, its output is a list of one or more primes whose product is N.
So, for N = 24, the outputs are the numbers 2, 2, 2, and 3, in some order.
3. Consider the Binary Search of Phone Directory algorithm. This algorithm looks for
the page (if any) containing a name Name in a telephone book City. The portion of
the algorithm used in searching for the page is called BinarySearch. Prove that the
algorithm works correctly.
4. The summation shown arises in determining how long it takes part of one particular
method, called heapsort, to sort a list of numbers into increasing order. More pre-
cisely, heapsort often is written with a preprocessing step called heapify. (Preprocess-
ing means that this step is performed once before the main step of the program.) This
summation arises in determining how long it takes to "heapify" a list of 2n numbers:
0.2n + 1 "2n-1 + 2"2n -2 + 3"-2n-3 +" 
q-..+(n -- 1) .2' 
+n-n 
20 = 2n+1 -- n -- 2
Prove by induction that the summation is correct for n > 0.
5. Show by induction on n that for b E N, b > 2,
n
(b -
1). E bi = bn+l - 1
i=O
Interpret this identity in the context of number representation in the base b using the
standard positional notation. Start by seeing what this means for b = 10 and n = 4.
6. (a) In the calculation of baseexpont using FastPower, how many copies of the algorithm
will be invoked?
(b) Show that if the FastPower algorithm is invoked n times (that is, n total invoca-
tions, including both the original invocation from the outside and the recursive
invocations), somewhere between 0 and 2n multiplications will be performed.

CHAPTER 1 Sets, Proof Templates, and Induction
(c) A simpler algorithm to calculate 1.00110°0 is to multiply 1000 copies of 1.001
together, using 999 multiplication in all. Using parts (a) and (b), estimate how
many fewer multiplications the FastPower algorithm performs.
7. Let X and Y be two lists sorted in nondecreasing order. Suppose that for some positive
integer n, there is a combined total of n numbers in the two lists. Prove that X and
Y can be merged into a single list of n numbers in nondecreasing order using at most
n - 1 comparisons.
8. Prove that the following code to compute Fibonacci numbers is correct:
INPUT: n E N
OUTPUT: Fn
recursiveFibonacci(n)
if n = 0 then
recursiveFibonacci(O) = 1
else
if n = 1 then
recursiveFibonacci(1) = 1
else
recursiveFibonacci(n) = recursiveFibonacci(n - 1)
+ recursiveFibonacci(n - 2)
9. Prove that, at most, n + 1 comparisons are required to determine if a particular number
is in a list of 2n numbers sorted in nondecreasing order.
10. Prove that exactly n - 1 multiplications are needed to compute the product of n dis-
tinct real numbers in a fully parenthesized expression, regardless of how parentheses
are used.

Formal Logic
It is an old dream to write a formal, mathematical description of the laws of human thought.
The goals are to identify what it is that makes certain arguments correct and to identify
correct arguments only from their logical form. Work toward these goals is ancient. It
began with the early Greeks and was extensively developed by Aristotle (384-322 BC). The
study was again actively pursued in the Middle Ages. During the nineteenth and twentieth
centuries, the field developed rapidly, with explosive growth starting around 1930. The
understanding of formalized reasoning is one of the major topics of formal logic, and it
has been extensively applied to studying mathematical proofs. In computer science, formal
logic has many applications in areas such as database theory, artificial intelligence, program
language design, and automated verification of software and hardware. In database theory,
logic is used to formalize the definitions of queries. In artificial intelligence, logic is used
to formalize human inference. Proving a program to be correct can use logic-based notions
such as loop invariants and both pre- and postconditions. Formal logic also plays a major
role during many phases in the design of electronic computers, including the design of
efficient combinatorial networks or circuits.
This chapter provides an introduction to formal logic. First, we give the basic defini-
tions of propositional logic. These cover the usual material expected of a discrete math-
ematics course-propositional logic and logical truth. Next, we introduce normal forms
in propositional logic, particularly simple ways to write formulas, a topic that is now of
special interest in computer science. One application of normal forms is in combinatorial
network design. Examples of the relationship between normal forms and combinatorial
networks will be explained as well. Finally, we discuss an extension of propositional logic
involving predicates and quantifiers. These are key ideas in an extension of propositional
logic to predicate logic. An important part of predicate or first-order logic is to express, in
a single statement, how elements in a set of values can make the statement true.
Introduction to Propositional Logic
The simplest variant of formal logic is propositional logic. Its basic object is a sim-
ple, declarative sentence, called a proposition. Propositional logic is concerned with
combining sentences, such as "The world is round" and "Columbus was right" to form
"If the world is round, then Columbus was right."

CHAPTER 2 
Formal Logic
A proposition is something that is either true or false; it is not both. "The cover of this
book is pink" is a proposition. "Napoleon spent at least one day of his life in Paris" and
"Either the butler did it with a bottle or the colonel did it with a lead pipe" are also propo-
sitions. On the other hand, "Justice," "The Queen's birthday," "Whoever is the stronger,"
and "Why is the world almost round?" are neither true nor false and, therefore, are not
propositions.
In formal notation, the letters p, q, r, and s (plus those letters subscripted with natural
numbers, such as pl, q2, and r127) are used to stand for, or to denote, propositions. Such
a variable is called a proposition letter. We consider proposition letters to be essentially
the same as boolean (logical) variables in a programming language. T and F are propo-
sitional constants-that is, propositions with fixed truth values of TRUE and FALSE,
respectively.
Propositional logic is concerned with certain ways in which simple sentences can be
combined into more complex sentences. Several standard operations are used on proposi-
tions to form other propositions. Such an operation is called a propositional connective.
The common propositional connectives are shown in Table 2.1.
Propositional Connectives
Connective 
Sample Use 
Common Translation
-
-'p 
"not p"
A 
pAq 
"p and q"
V 
pvq 
"p or q (or both)"
Sp 
-*q 
"if p, thenq" or "p implies q"
p + q 
"p if and only if q," or "p is equivalent to q"
Example 1. Let p denote "Henry eats halibut" and q denote "Catherine eats kippers."
(a) The proposition -p is read "Henry does not eat halibut."
(b) The proposition p A q is read "Henry eats halibut, and Catherine eats kippers."
(c) The proposition p -* q is read "If Henry eats halibut, then Catherine eats kippers."
(d) The proposition p ** q is read "Henry eats halibut if and only if Catherine eats
kippers."
(e) The proposition (-'p) v (-'q) is read "Henry does not eat halibut, or Catherine does
not eat kippers."
(f) The proposition p ++ ('q) is read "Henry eats halibut if and only if Catherine does
not eat kippers."
Example 2. 
Let p denote "Henry eats halibut," q denote "Catherine eats kippers," and r
denote "I'll eat my hat."
(a) Write a proposition that reads "If Henry eats halibut but Catherine does not eat kippers,
then I'll eat my hat."
(b) Write a proposition that reads "Either Henry eats halibut or Catherine eats kippers, but
not both."

Introduction to Propositional Logic 
Solution.
(a) (p A -q) -- r. Since and and but usually both get translated as A, the difference be-
tween the two English words is usually an issue not of what is the case but, rather, of
what we would have expected to be the case.
(b) (p v q) A -(p A q).
This proposition is "logically equivalent to" the proposition in Example 1 (f), meaning
that p <-+ (-q) is an equally good answer. We shall discuss logical equivalence in the next
section. 
Definition 1. 
Let p, q, and r be propositions. The proposition -p is the negation of
p. The proposition p A q is the conjunction of p and q, and p and q are called its con-
juncts. The proposition p V q is the disjunction of p and q, and p and q are called its
disjuncts. The proposition p -+ q is a conditional, or an implication, with hypothesis p
and conclusion q. The proposition p +-* q is an equivalence or a biconditional.
Since the English language is often ambiguous, and the meanings of words can vary
from context to context, the English translations of the symbols we have just introduced
(--, A, v, -+, and ++) do not define the meanings of the symbols precisely. A precise def-
inition of each symbol is given by a truth table, which provides the truth value for the
result of applying the operation on each possible set of truth values for the operands. As
mentioned, we shall use the symbols T and F to denote the truth values TRUE and FALSE
as well as to denote propositional constants. Table 2.2 shows the truth table for negation.
Truth Table for
p
Truth Table for Negation 
T 
F
F 
T
is F, then -p is T. This assignment of truth values agrees with the common usage of the
word not. Truth tables for the other propositional connectives are shown in Table 2.3.
Truth Table for A 
Truth Table for v
p 
q 
pAq 
p 
q 
pVq
T 
T 
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
T 
T
Truth Tables for Logical 
F 
F 
F 
F 
F 
F
Connectives 
Truth Table for -* 
Truth Table for +
p 
q 
p--q 
p 
q 
p*- q
T 
T 
T 
T 
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
F 
T 
F 
F 
T

CHAPTER 2 
Formal Logic
As an example of using the truth table for A, suppose you know that both p and q are
T. Look in the truth table for A to find the row where both p and q have the value T. Then,
look across that row to find the truth value of p A q. In this case, p A q has the value T.
Now, suppose in another instance you know that p is T and q is F. The second row of the
table for A has the value T for p and F for q. In that row, the truth value given for p A q
is F.
It is helpful to consider how the truth table for -- relates to common usage of "if...
then." A simple requirement of a notion of "if ... then" is that "if ... then" statements
should be usable in arguments. If it is true that "The carriage had mud on its tires" and is
also true that "If the carriage had mud on its tires, then it is raining outside," then one can
correctly infer that "It is raining outside." The truth table definition of -+ is that p -+ q is
F just in case it would lead from a true hypothesis to a false conclusion. The truth table for
--> also corresponds to the template for proving an "if... then" result that was introduced
in Chapter 1.
2.1.1 
Formulas
More complicated propositional expressions, called formulas or well-formed formulas
(wffs), can be built from the proposition letters using the propositional connectives and
parentheses. When we say 0 = (p A q) -+ r, we mean that 0 is the string of symbols
(p A q) --> r. For the following formulas, we would like to know when the conclusion is
necessarily true:
S= (p A q) --* r, which can be paraphrased as "If p and q are both true, then r is also
true."
01 = 
(p V q) -- r, which can be paraphrased as "If p or q (or both) is true, then r is also
true."
42 = (p -- r) -* 
((p A q) --* r), which can be paraphrased as "Suppose that if p is T,
then r is T Then, if p and q are both T, then r is T."
In the last formula, we translated two of the --- 's as if... then and one as suppose ... then.
We did that to make the reading easier. One advantage of a formal notation is that it lets us
express concepts that cannot be expressed easily and unambiguously in everyday language.
Example 3. 
Translate the following sentences into a formula in propositional logic: "If
the butler did it and that the butler returned to his hotel room that night."
Solution. Actually, there are many translations, depending on which parts of the sentence
are chosen to be represented by proposition letters and on which proposition letters are
chosen to represent them.
Let p denote "Mr. Holmes told the truth," q denote "Mr. Watson did not hear any-
thing," r denote "the butler did it," and s denote "the butler returned to his room that
night." The sentence can now be translated into propositional logic as
) = (p A q) -
(-(r A s))
The reader is urged to do Exercise 1 in Section 2.2 before going on to the rest of the
section.

Introduction to Propositional Logic 
The formal definition of a formula is an inductive definition of a set of strings. The
base cases correspond to the base step of an inductive proof. The closure rules correspond
to the inductive step.
Definition 2. A formula is any string of symbols that is formed using the following rules:
1. Base cases: 
Every proposition letter is a formula. T and F are formulas.
2. Closure rules: 
Let 4 be a formula. Then, (--4)) is a formula. For formulas 4 and V,
(0 A f), 
(0 V *), 
(0 -* *s), and (0 *+ *t) are formulas.
According to the base case alone, p, q, and T are formulas. From the base case and
just one application of the closure rules, one can show that (p A q), (p v p), (p --+ T),
and -q are formulas. From the base case and two applications of the closure rules, one can
show that (-(p A q)) and (q <-* (p -+ T)) are formulas.
It often seems that in elementary logic, most theorems are proved by induction on
some integer related to formulas, such as the number of symbols, the number of parenthe-
ses, the number of propositional connectives, or the number of times the closure rules of
Definition 2 were applied to generate the formula. (Let this be a hint for the Exercises.)
Theorem 1. 
(Principle of Induction on Formulas) 
Let T be a set of formulas such
that:
Base cases 
Each proposition letter is in F, and T and F are in T.
Closure rules 
If 4, Vtare formulas in F7, so are
(-0), (4 A *t), (0 V Vt), (4 -- Vt), and (4 - Vt)
Then, F is the set of all formulas.
Proof. Let T = {n E N : all formulas formed using n elements of {-, V, A, -+, 
+-+} are
in F71. If we prove T = N, then all formulas are in F. We will use the strong form of
mathematical induction to complete this proof.
(Base step) 
Let n = 0. All formulas using 0 instances of elements of {-, V, A, -- , --}
are just the proposition letters and the two logical constants T and F. Because these are
just the elements in the base cases used to define T, all these elements are in F, and 0 E T.
(Inductive step) 
Let n > 0 and assume that 0, 1 .... 
n - 1 c T. To prove n E T will be
a proof by cases (see Template 1.8, Proof by Cases). We use a proof by cases because a for-
mula formed using n instances of elements of {-, v, A, -+, ++-J is of one of the following
forms:
(a) -0, where 4 is formed using n - 1 elements of {-, V, A, -*, +}
(b) 4 V *, where 4 and Vt are each formed using fewer than n elements of
I-•, V, A,--+, ++}
(c) 4 A *,, 
where 4 and * are each formed using fewer than n elements of
{-, V, A, -+, 
+-}
(d) 4-+ V*, where 4 and V are each formed using fewer than n elements of
t', V, A, --*, 
+-*}
(e) 4) *,- , where 4 and Vt 
are each formed using fewer than n elements of
{-, V, A, -+, 
++1
The details of the proof in each of these cases are left as an exercise. 
U

CHAPTER 2 Formal Logic
The theorem that follows is included because it is an example of an easy application of
the Principle of Induction on Formulas: It may look rather uninteresting and technical: It
deals only with counting the parentheses in a formula. Suppose, however, you were writing
a computer program to check something about logical formulas. In this case, you would
need to pay close attention to the parentheses. (Of course, you would have to worry about
more sophisticated issues than just counting the parentheses.) Or, consider the job of a
person writing a compiler for a computer language. The compiler code will have to pay
close attention to )'s, I's, and }'s, because having them misplaced causes difficulties for the
program.
Theorem 2. 
Every formula has an equal number of right and left parentheses.
Proof. Let .F be the set of formulas that have an equal number of right and left parenthe-
ses. Prove by induction on formulas that F is the set of all formulas.
(Base cases) 
Each proposition letter is in F7, since it is a formula with no left parentheses
and no right parentheses. Similarly, T, F E F-.
(Closure rules) 
Let 4, V1 E T. Let ) have n left parentheses and n right parentheses and
* have m left parentheses and m right parentheses. Then:
(a) (-4') has n + 1 left parentheses (n in 0 plus one more in front) and n + 1 right paren-
theses (n in 40 plus one more following), so (-0) E F.
(b) (40 A *,) has m + n + 1 left parentheses (m in 4,, n in 4', and one more in front)
and m + n + 1 right parentheses (m in *, n in 4', and one more following), so
(0 A 
E) 
eF.
(c) (0 v 4,), (40 -
4,), and (4' -
4,) each have m + n + 1 left parentheses and m + n +
1 right parentheses, so each is in F7.
Therefore, by the Principle of Induction on Formulas, it follows that F7 is the set of all
formulas. 
U
2.1.2 
Expression Trees for Formulas
An expression tree is simply a visual representation for the way that a formula is built
from propositions and logical operators. A proposition is represented by a single node,
simply a filled-in circle, as shown in Figure 2.1.
P0p
Representation for p.
For an expression involving two propositions and a logical operator, the propositions
are represented by nodes at the same level, and then at a higher level, a node represents
the result of applying the operator to the two propositions. The nodes representing the
propositions and the node representing the result of the operation are joined by lines. For
example, the final picture for p V q is shown in Figure 2.2.

Introduction to Propositional Logic 
pvq
p 
q
Representation for p v q.
To introduce the representation structure for a more general formula, we will de-
scribe how you build an expression tree from the top down. To build an expression tree
from an expression, first place the final expression at the top of the representation, and
then put the expressions that are operated on to form the final expression underneath.
Join by lines the nodes representing the expressions operated on and the node represent-
ing the result of the operation. The process can continue until the lowest level contains
only propositions. The resulting picture or representation of an expression is an expression
tree.
The expression tree structure gives exactly the same information as the parentheses
in the formula about the order of execution, but the expression tree sometimes gives a
better picture. Because this representation is so useful in evaluating an expression, we
will give several more examples and then a formal description of how you can build an
expression tree from the bottom up. The expression tree of ((p A q) A r) is shown in Fig-
ure 2.3.
((p A q) A r)
( P 
r
p 
q
Expression tree of ((p A q) A r).
The expression tree of ((-'p) v q) -+ (r -* 
p) is shown in Figure 2.4.
((-•p) v q) ---> (r -4 p)
((-p) v q)v 
(r --->p)
(-'P) 
q 
r 
P
Expression tree of (((Hp) v q) -+ (r -
p)).
Definition 3. (Expression Tree for a Formula) 
The expression tree for a proposition
letter p, for T, or for F consists of a single node as shown:
p 
T 
F

CHAPTER 2 
Formal Logic
If 0p is a formula with expression tree To, then an expression tree for T(-O) is
(0)I
If 40 and * are formulas with expression trees To and Tk, respectively, then an expression
tree for T(O^*) is
()A
Expression trees for (40 v u), (4v 
-
), and (4' 
*- 
) are defined analogously to the way
the expression trees is defined for (4 A 4'). The corresponding expression trees are
V W) 
(-- 
) 
(- 
4 W)
It can be proved that each formula has exactly one expression tree. This principle
sometimes allows arguments that manipulate expression trees to be used as a replacement
for induction on formulas. Some examples can be found in writing formal proofs for the
theorems on substitution.
For any expression tree T and any node x in the expression tree, the portion T, of the
tree at or below x forms another expression tree-namely, the expression tree for x.
Definition 4. 
Let X be a formula with expression tree T, and let * be a formula with
expression tree U. Then, X is a subformula of *' if, for some node x of U, TX = Ux.
Example 4. 
For the expression tree T, determine the subformulas defined by p and
(-(p V q)).
(r A (-'(-(p v q))))
r 
(-(-'(p v q)))
(-(p v q))
S(p v q)
p 
q
T

Introduction to Propositional Logic 
Solution. The subtrees Tp and T(-(pvq)) are as shown:
(-~(p vq))
TP 
q(p 
vq)
p 
q
T(-•(p v q))
The term syntax refers to the rules for forming grammatically correct strings of sym-
bols of a language. The rules specified here in the definition of the terms formula and
subformula are examples of rules for forming correct strings of symbols for propositional
logic. In the next section, we will discuss the semantics of propositional logic-that is,
what the strings of symbols mean-though we have already begun discussing semantics
by giving the truth tables.
2.1.3 
Abbreviated Notation for Formulas
A formula such as
((((-(-p)) A (-'q)) A r) V (((--(-,q)) A (-.r)) A s)) *+ (s -
p)
has so many parentheses that the reader can easily get confused. Just as in ordinary arith-
metic, however, formulas in informal usage are abbreviated by dropping some of the paren-
theses or by using different styles of parentheses, such as brackets. Some widely accepted
conventions are summarized in Table 2.4.
Common Abbreviations and Other Informal Usage
1. Drop the outermost set of parentheses, simplifying (-p) to -p 
and (p v q) to
pvq.
2. In a series of conjunctions nested to the left, such as (p A q) A r, drop the paren-
theses, writing p A q A r. Similarly, with disjunctions, abbreviate (p V q) v r to
p V q V r.
3. A -, symbol always applies to as little as possible. That is, - is the highest priority
operation, and -a v b means (-a) v b.
4. The remaining operations are often given priorities as follows, from highest to
lowest: A, v, -->, and *-. Thus:
(a) -a A b V c A d abbreviates (((-a) A b) v (c A d)).
(b) a- 
b v b A c abbreviates (a -*(b 
(bv(b A c))).
(c) a + b-+-C cd 
abbreviates (a *+ (b -* (c A d))).
(Caution: Use this rule sparingly to omit parentheses. Overuse of the rule creates
almost-unreadable formulas. When in doubt, leave the parentheses in.)
5. In formulas with nested parentheses, it is common to replace some of the paren-
theses with other symbols, usually brackets that is, ([ and 1). So, the formula in
Section 2.1.3 might be written as
[(--p A -q A r) V (--q 
A -r A s)] +-> [s -+ p]

CHAPTER 2 
Formal Logic
2.1.4 
Using Gates to Represent Formulas
At the basic hardware level, computer memory has two states, which are identified as the
two logical values or boolean values of T and F. Computer operations are thought of as
being composed of operations on these boolean values and, hence, as operations of propo-
sitional logic. In describing computer circuits, a specialized notation for propositional logic
is used. Special physical devices, called gates, implement the A, v, and - operations. A set
of gates to represent a circuit is called a combinatorial circuit or combinatorial network.
Think of a gate as representing an operation and of the wires going into the gates as
representing its operands. For example, a A gate will let current flow out if and only if both
operands (that is, both wires coming in) carry current. Notation for these gates is shown in
pvq 
p 
pv q 
p -11 -- 
q
q 
q
Figure2.5 
AND, OR, and NOT gates.
A combinatorial circuit is, roughly, the analogue of a formula. Boolean circuit nota-
tion for the formula
((p A q) A r)
is shown in Figure 2.6.
pq
q 
(p~q)^rr
r
AND gates.
For the formula
((p A p) A p),
instead of having three separate p's as in an expression tree, the gate to represent it has one
line that splits, as shown in Figure 2.7.
(P~)^p
P
Another form of AND gates.
Since gates are used to describe computer circuits that will be implemented in a device
or printed on a chip, it is common to represent more than one formula in the same diagram,
as shown in Figure 2.8. The arrow in Figure 2.8 indicates that the output from gate C is
an input for both gates A and B. Each of the "output wires" (A and B) corresponds to the
output of a different propositional formula, as described earlier.

Exercises 
yY
X
y
r
S 
l
B
t
z
Multiple formula representation.
Exercises
1. Translate the following expressions into propositional logic. Use the following propo-
sition letters:
p = "Jones told the truth."
q = "The butler did it."
r -
"I'll eat my hat."
s = "The moon is made of green cheese."
t -
"If water is heated to 100 0C, it turns to vapor."
(a) "If Jones told the truth, then if the butler did it, I'll eat my hat."
(b) "If the butler did it, then either Jones told the truth or the moon is made of green
cheese, but not both."
(c) "It is not the case that both Jones told the truth and the moon is made of green
cheese."
(d) "Jones did not tell the truth, and the moon is not made of green cheese, and I'll
not eat my hat."
(e) "If Jones told the truth implies I'll eat my hat, then if the butler did it, the moon is
made of green cheese."
(f) "Jones told the truth, and if water is heated to 100 0C, it turns to vapor."
2. Translate the following expressions of propositional logic into words using the follow-
ing translation of the proposition letters:
p = "All the world is apple pie."
q = "All the seas are ink'"
r = "All the trees are bread and cheese."
s = "There is nothing to drink."
t = "Socrates was a man."
u = "All men are mortal."
v = "Socrates was mortal."

CHAPTER 2 
Formal Logic
(a) (p A q A r) --> s
(b) (t A u) -- v
(c) -s -) -'v
(d) p A (q A r) V (t A u) V (--S V -- V)
(e) ((p V t) A (q v u)) +-+ (S A V)
One must sometimes be a bit creative in using language to make the results compre-
hensible.
3. Let p denote the proposition "Jill plays basketball" and q denote the proposition "Jim
plays soccer." Write out-in the clearest way you can-what the following proposi-
tions mean:
(a) -'p
(b) p A q
(c) pvq
(d) -pAq
(e) p --+ q
(f) p *q
(g) --q -_ p
4. Let p denote the proposition "Sue is a computer science major" and q denote the
proposition "Sam is a physics major." Write out what the following propositions mean:
(a) -q
(b) q A p
(c) pvq
(d) -q A p
(e) q -
p
(f) p÷-q
(g) -q 
-+ 
p
5. Jim, George, and Sue belong to an outdoor club. Every club member is either a skier
or a mountain climber, but no member is both. No mountain climber likes rain, and all
skiers like snow. George dislikes whatever Jim likes and likes whatever Sue dislikes.
Jim and Sue both like rain and snow. Is there a member of the outdoor club who is a
mountain climber?
6. Let proposition p be T and proposition q be F. Find the truth values for the following:
(a) pvq
(b) q A p
(c) -p V q
(d) p A -q
(e) q -+ p
(f) -p -q
(g) -q -- p
7. Let proposition p be T, proposition q be F, and proposition r be T. Find the truth
values for the following:
(a) pvqvr
(b) p v (-q A -r)
(c) p ---. (q V r)
(d) (q A -'p) +- r

Exercises 
(e) -r --*(p A q)
(f) (p -q) 
-
-r
(g) ((p A r) -+ (-q v p)) --* (q v r)
8. Find the expression tree for the following formulas:
(a) (pAq) vr
(b) (p -- q) -- r
(c) p -
(q -- 
r)
9. Find the expression tree for the following formulas:
(a) -p A (--q v r)
(b) p v (-q A -r)
(c) ((p v q) <4 r) * p
(d) (--q A-,r) <-> (p -- (q V r))
10. Find the expression tree for the formula
(p -+ ((-'p) -+ 
q))
11. Find the expression tree for the formula
((-(p A q)) V (-(q A r))) A ((-(p *-+ (-'(-s)))) V (((r A s) V
12. Find the expression tree for the formula
((((-,(-'p)) A (-q)) A r) V (((-(-,q)) A (-,r)) A s)) +- (s -+ p)
13. Find a boolean expression to represent the following combinatorial circuits:
A
(a)
B
A
B
(b) 
A
B
C
D
14. Draw a combinatorial circuit for each of the following boolean expressions:
(a) (x A y) V -'Z
(b) (x A y) V (-x A y)
(c) -(-x V y) V (x A Z)
(d) ((x A y) V (y A Z)) V -Z
(e) (x V -(x V y)) V (-x A -y)
15. Find a boolean expression to represent each of the following combinatorial networks
shown.

CHAPTER 2 
Formal Logic
x
(a) 
_
z
(b) 
Y
x
z
(c) 
Z
Yz
16. Prove Theorem 1, the Principle of Induction on Formulas. (Hint: If ¢ V 4 is a formula
containing n occurrences of the logical operators, then 0 and V' each are formulas
containing fewer than n logical operators. By the inductive hypothesis, both 0 and Vf
are in J7, so by the closure rules, 0 v VV is in .F.)
17. (a) What is the relationship between the number of propositional connectives in a
formula and the number of parentheses? Prove your answer.
(b) What is the relationship between the number of A's, V's, -*'s, and +*'s in a for-
mula and the number of proposition letters in the formula? Prove your answer.
(c) What is the relationship between the number of -,'s in a formula and the number
of proposition letters in the formula? Prove your answer.
(d) How many left parentheses may a formula contain? Prove your answer.
(e) How many total symbols may a formula contain? Count each occurrence of each
proposition letter as one symbol, so (P123 A P123) contains five symbols-that is,
(, P123, A, P123, and ). For example, can a formula contain exactly two symbols?
Exactly 17 symbols? Prove your answer.
Truth and Logical Truth
The semantics of a language is the relationship between strings of symbols in a language
and their meaning. Consider a formula, such as
4' = (-'p V q) --* (r -+ p)

Truth and Logical Truth 
How can the truth value for the formula be determined? Since this discussion is formal
logic, one must first define what it means for 0 to be T or F. Of course, this definition, to
b
