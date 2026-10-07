# BCS301 — Module 3

## Probability and Statistics

**Subject:** BCS301 (Mathematics for Computer Science)
**Module:** Module 3
**Content type:** textbook_fallback
**Sources:** R1_Linear_Algebra_Done_Right_Axler.txt

---

called the division algorithm for polynomials, although as stated here it is not
really an algorithm, just a useful result.
Think of the division algorithm for poly-
nomials as giving a remainder polyno-
mial 𝑟when the polynomial 𝑝is divided
by the polynomial 𝑠.
The division algorithm for polynomi-
als could be proved without using any
linear algebra. However, as is appropri-
ate for a linear algebra textbook, the proof
given here uses linear algebra techniques
and makes nice use of a basis of 𝒫𝑛(𝐅), which is the (𝑛+ 1)-dimensional vector
space of polynomials with coefficients in 𝐅and of degree at most 𝑛.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
4.9
division algorithm for polynomials
Suppose that 𝑝, 𝑠∈𝒫(𝐅), with 𝑠≠0. Then there exist unique polynomials
𝑞, 𝑟∈𝒫(𝐅) such that
𝑝= 𝑠𝑞+ 𝑟
and deg 𝑟< deg 𝑠.
Proof
Let 𝑛= deg 𝑝and let 𝑚= deg 𝑠. If 𝑛< 𝑚, then take 𝑞= 0 and 𝑟= 𝑝to
get the desired equation 𝑝= 𝑠𝑞+ 𝑟with deg 𝑟< deg 𝑠. Thus we now assume that
𝑛≥𝑚.
The list
4.10
1, 𝑧, … , 𝑧𝑚−1, 𝑠, 𝑧𝑠, … , 𝑧𝑛−𝑚𝑠
is linearly independent in 𝒫𝑛(𝐅) because each polynomial in this list has a different
degree. Also, the list 4.10 has length 𝑛+ 1, which equals dim 𝒫𝑛(𝐅). Hence 4.10
is a basis of 𝒫𝑛(𝐅) [by 2.38].
Because 𝑝∈𝒫𝑛(𝐅) and 4.10 is a basis of 𝒫𝑛(𝐅), there exist unique constants
𝑎0, 𝑎1, … , 𝑎𝑚−1 ∈𝐅and 𝑏0, 𝑏1, … , 𝑏𝑛−𝑚∈𝐅such that
𝑝= 𝑎0 + 𝑎1𝑧+ ⋯+ 𝑎𝑚−1𝑧𝑚−1 + 𝑏0𝑠+ 𝑏1𝑧𝑠+ ⋯+ 𝑏𝑛−𝑚𝑧𝑛−𝑚𝑠
4.11
= 𝑎0 + 𝑎1𝑧+ ⋯+ 𝑎𝑚−1𝑧𝑚−1
⏟⏟⏟⏟⏟⏟⏟⏟⏟
𝑟
+ 𝑠(𝑏0 + 𝑏1𝑧+ ⋯+ 𝑏𝑛−𝑚𝑧𝑛−𝑚
⏟⏟⏟⏟⏟⏟⏟⏟⏟
𝑞
).
With 𝑟and 𝑞as defined above, we see that 𝑝can be written as 𝑝= 𝑠𝑞+ 𝑟with
deg 𝑟< deg 𝑠, as desired.
The uniqueness of 𝑞, 𝑟∈𝒫(𝐅) satisfying these conditions follows from the
uniqueness of the constants 𝑎0, 𝑎1, … , 𝑎𝑚−1 ∈𝐅and 𝑏0, 𝑏1, … , 𝑏𝑛−𝑚∈𝐅satisfy-
ing 4.11.
Factorization of Polynomials over 𝐂
The fundamental theorem of algebra is
an existence theorem. Its proof does
not lead to a method for finding zeros.
The quadratic formula gives the zeros
explicitly for polynomials of degree 2.
Similar but more complicated formulas
exist for polynomials of degree 3 and 4.
No such formulas exist for polynomials
of degree 5 and above.
We have been handling polynomials with
complex coefficients and polynomials
with real coefficients simultaneously, let-
ting 𝐅denote 𝐑or 𝐂.
Now we will
see differences between these two cases.
First we treat polynomials with complex
coefficients. Then we will use those re-
sults to prove corresponding results for
polynomials with real coefficients.
Our proof of the fundamental theorem
of algebra implicitly uses the result that a continuous real-valued function on a
closed disk in 𝐑2 attains a minimum value. A web search can lead you to several
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
other proofs of the fundamental theorem of algebra. The proof using Liouville’s
theorem is particularly nice if you are comfortable with analytic functions. All
proofs of the fundamental theorem of algebra need to use some analysis, because
the result is not true if 𝐂is replaced, for example, with the set of numbers of the
form 𝑐+ 𝑑𝑖where 𝑐, 𝑑are rational numbers.
4.12
fundamental theorem of algebra, first version
Every nonconstant polynomial with complex coefficients has a zero in 𝐂.
Proof
De Moivre’s theorem, which you can prove using induction on 𝑘and the
addition formulas for cosine and sine, states that if 𝑘is a positive integer and
𝜃∈𝐑, then
(cos 𝜃+ 𝑖sin 𝜃)𝑘= cos 𝑘𝜃+ 𝑖sin 𝑘𝜃.
Suppose 𝑤∈𝐂and 𝑘is a positive integer. Using polar coordinates, we know
that there exist 𝑟≥0 and 𝜃∈𝐑such that
𝑟(cos 𝜃+ 𝑖sin 𝜃) = 𝑤.
De Moivre’s theorem implies that
(𝑟1/𝑘(cos 𝜃
𝑘+ 𝑖sin 𝜃
𝑘))
𝑘
= 𝑤.
Thus every complex number has a 𝑘th root, a fact that we will soon use.
Suppose 𝑝is a nonconstant polynomial with complex coefficients and highest-
order nonzero term 𝑐𝑚𝑧𝑚. Then |𝑝(𝑧)| →∞as |𝑧| →∞(because |𝑝(𝑧)|/∣𝑧𝑚∣→|𝑐𝑚|
as |𝑧| →∞). Thus the continuous function 𝑧↦|𝑝(𝑧)| has a global minimum at
some point 𝜁∈𝐂. To show that 𝑝(𝜁) = 0, suppose that 𝑝(𝜁) ≠0.
Define a new polynomial 𝑞by
𝑞(𝑧) = 𝑝(𝑧+ 𝜁)
𝑝(𝜁)
.
The function 𝑧↦|𝑞(𝑧)| has a global minimum value of 1 at 𝑧= 0. Write
𝑞(𝑧) = 1 + 𝑎𝑘𝑧𝑘+ ⋯+ 𝑎𝑚𝑧𝑚,
where 𝑘is the smallest positive integer such that the coefficient of 𝑧𝑘is nonzero;
in other words, 𝑎𝑘≠0.
Let 𝛽∈𝐂be such that 𝛽𝑘= −1
𝑎𝑘
. There is a constant 𝑐> 1 such that if
𝑡∈(0, 1), then
|𝑞(𝑡𝛽)| ≤∣1 + 𝑎𝑘𝑡𝑘𝛽𝑘∣+ 𝑡𝑘+1𝑐
= 1 −𝑡𝑘(1 −𝑡𝑐).
Thus taking 𝑡to be 1/(2𝑐) in the inequality above, we have |𝑞(𝑡𝛽)| < 1, which
contradicts the assumption that the global minimum of 𝑧↦|𝑞(𝑧)| is 1. This
contradiction implies that 𝑝(𝜁) = 0, showing that 𝑝has a zero, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
Computers can use clever numerical methods to find good approximations to
the zeros of any polynomial, even when exact zeros cannot be found. For example,
no one will ever give an exact formula for a zero of the polynomial 𝑝defined by
𝑝(𝑥) = 𝑥5 −5𝑥4 −6𝑥3 + 17𝑥2 + 4𝑥−7.
However, a computer can find that the zeros of 𝑝are approximately the five
numbers −1.87, −0.74, 0.62, 1.47, 5.51.
The first version of the fundamental theorem of algebra leads to the following
factorization result for polynomials with complex coefficients. Note that in this
factorization, the zeros of 𝑝are the numbers 𝜆1, … , 𝜆𝑚, which are the only values
of 𝑧for which the right side of the equation in the next result equals 0.
4.13
fundamental theorem of algebra, second version
If 𝑝∈𝒫(𝐂) is a nonconstant polynomial, then 𝑝has a unique factorization
(except for the order of the factors) of the form
𝑝(𝑧) = 𝑐(𝑧−𝜆1) ⋯(𝑧−𝜆𝑚),
where 𝑐, 𝜆1, … , 𝜆𝑚∈𝐂.
Proof
Let 𝑝∈𝒫(𝐂) and let 𝑚= deg 𝑝. We will use induction on 𝑚. If 𝑚= 1,
then the desired factorization exists and is unique. So assume that 𝑚> 1 and that
the desired factorization exists and is unique for all polynomials of degree 𝑚−1.
First we will show that the desired factorization of 𝑝exists. By the first version
of the fundamental theorem of algebra (4.12), 𝑝has a zero 𝜆∈𝐂. By 4.6, there
is a polynomial 𝑞of degree 𝑚−1 such that
𝑝(𝑧) = (𝑧−𝜆)𝑞(𝑧)
for all 𝑧∈𝐂. Our induction hypothesis implies that 𝑞has the desired factorization,
which when plugged into the equation above gives the desired factorization of 𝑝.
Now we turn to the question of uniqueness. The number 𝑐is uniquely deter-
mined as the coefficient of 𝑧𝑚in 𝑝. So we only need to show that except for the
order, there is only one way to choose 𝜆1, … , 𝜆𝑚. If
(𝑧−𝜆1) ⋯(𝑧−𝜆𝑚) = (𝑧−𝜏1) ⋯(𝑧−𝜏𝑚)
for all 𝑧∈𝐂, then because the left side of the equation above equals 0 when
𝑧= 𝜆1, one of the 𝜏’s on the right side equals 𝜆1. Relabeling, we can assume
that 𝜏1 = 𝜆1. Now if 𝑧≠𝜆1, we can divide both sides of the equation above by
𝑧−𝜆1, getting
(𝑧−𝜆2) ⋯(𝑧−𝜆𝑚) = (𝑧−𝜏2) ⋯(𝑧−𝜏𝑚)
for all 𝑧∈𝐂except possibly 𝑧= 𝜆1. Actually the equation above holds for all
𝑧∈𝐂, because otherwise by subtracting the right side from the left side we would
get a nonzero polynomial that has infinitely many zeros. The equation above and
our induction hypothesis imply that except for the order, the 𝜆’s are the same as
the 𝜏’s, completing the proof of uniqueness.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
Factorization of Polynomials over 𝐑
The failure of the fundamental theorem
of algebra for 𝐑accounts for the differ-
ences between linear algebra on real
and complex vector spaces, as we will
see in later chapters.
A polynomial with real coefficients may
have no real zeros. For example, the poly-
nomial 1 + 𝑥2 has no real zeros.
To obtain a factorization theorem over
𝐑, we will use our factorization theorem
over 𝐂. We begin with the next result.
4.14
polynomials with real coefficients have nonreal zeros in pairs
Suppose 𝑝∈𝒫(𝐂) is a polynomial with real coefficients. If 𝜆∈𝐂is a zero
of 𝑝, then so is 𝜆.
Proof
Let
𝑝(𝑧) = 𝑎0 + 𝑎1𝑧+ ⋯+ 𝑎𝑚𝑧𝑚,
where 𝑎0, … , 𝑎𝑚are real numbers. Suppose 𝜆∈𝐂is a zero of 𝑝. Then
𝑎0 + 𝑎1𝜆+ ⋯+ 𝑎𝑚𝜆𝑚= 0.
Take the complex conjugate of both sides of this equation, obtaining
𝑎0 + 𝑎1𝜆+ ⋯+ 𝑎𝑚𝜆𝑚= 0,
where we have used basic properties of the complex conjugate (see 4.4). The
equation above shows that 𝜆is a zero of 𝑝.
Think about the quadratic formula in
connection with the result below.
We want a factorization theorem for
polynomials with real coefficients. We
begin with the following result.
4.15
factorization of a quadratic polynomial
Suppose 𝑏, 𝑐∈𝐑. Then there is a polynomial factorization of the form
𝑥2 + 𝑏𝑥+ 𝑐= (𝑥−𝜆1)(𝑥−𝜆2)
with 𝜆1, 𝜆2 ∈𝐑if and only if 𝑏2 ≥4𝑐.
Proof
Notice that
𝑥2 + 𝑏𝑥+ 𝑐= (𝑥+ 𝑏
2)
+ (𝑐−𝑏2
4 ).
The equation above is the basis of
the technique called completing the
square.
First suppose 𝑏2 < 4𝑐. Then the right
side of the equation above is positive for
every 𝑥∈𝐑. Hence the polynomial
𝑥2 + 𝑏𝑥+ 𝑐has no real zeros and thus
cannot be factored in the form (𝑥−𝜆1)(𝑥−𝜆2) with 𝜆1, 𝜆2 ∈𝐑.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
Conversely, now suppose 𝑏2 ≥4𝑐. Then there is a real number 𝑑such that
𝑑2 = 𝑏2
4 −𝑐. From the displayed equation above, we have
𝑥2 + 𝑏𝑥+ 𝑐= (𝑥+ 𝑏
2)
−𝑑2
= (𝑥+ 𝑏
2 + 𝑑)(𝑥+ 𝑏
2 −𝑑),
which gives the desired factorization.
The next result gives a factorization of a polynomial over 𝐑. The idea of
the proof is to use the second version of the fundamental theorem of algebra
(4.13), which gives a factorization of 𝑝as a polynomial with complex coefficients.
Complex but nonreal zeros of 𝑝come in pairs; see 4.14. Thus if the factorization
of 𝑝as an element of 𝒫(𝐂) includes terms of the form (𝑥−𝜆) with 𝜆a nonreal
complex number, then (𝑥−𝜆) is also a term in the factorization. Multiplying
together these two terms, we get
𝑥2 −2(Re 𝜆)𝑥+ |𝜆|2,
which is a quadratic term of the required form.
The idea sketched in the paragraph above almost provides a proof of the
existence of our desired factorization. However, we need to be careful about
one point. Suppose 𝜆is a nonreal complex number and (𝑥−𝜆) is a term in the
factorization of 𝑝as an element of 𝒫(𝐂). We are guaranteed by 4.14 that (𝑥−𝜆)
also appears as a term in the factorization, but 4.14 does not state that these two
factors appear the same number of times, as needed to make the idea above work.
However, the proof works around this point.
In the next result, either 𝑚or 𝑀may equal 0. The numbers 𝜆1, … , 𝜆𝑚are
precisely the real zeros of 𝑝, for these are the only real values of 𝑥for which the
right side of the equation in the next result equals 0.
4.16
factorization of a polynomial over 𝐑
Suppose 𝑝∈𝒫(𝐑) is a nonconstant polynomial. Then 𝑝has a unique factor-
ization (except for the order of the factors) of the form
𝑝(𝑥) = 𝑐(𝑥−𝜆1) ⋯(𝑥−𝜆𝑚)(𝑥2 + 𝑏1𝑥+ 𝑐1) ⋯(𝑥2 + 𝑏𝑀𝑥+ 𝑐𝑀),
where 𝑐, 𝜆1, … , 𝜆𝑚, 𝑏1, … , 𝑏𝑀, 𝑐1, … , 𝑐𝑀∈𝐑, with 𝑏𝑘
2 < 4𝑐𝑘for each 𝑘.
Proof
First we will prove that the desired factorization exists, and after that we
will prove the uniqueness.
Think of 𝑝as an element of 𝒫(𝐂). If all (complex) zeros of 𝑝are real, then
we have the desired factorization by 4.13. Thus suppose 𝑝has a zero 𝜆∈𝐂with
𝜆∉𝐑. By 4.14, 𝜆is a zero of 𝑝. Thus we can write
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
𝑝(𝑥) = (𝑥−𝜆)(𝑥−𝜆)𝑞(𝑥)
= (𝑥2 −2(Re 𝜆)𝑥+ |𝜆|2)𝑞(𝑥)
for some polynomial 𝑞∈𝒫(𝐂) of degree two less than the degree of 𝑝. If we
can prove that 𝑞has real coefficients, then using induction on the degree of 𝑝
completes the proof of the existence part of this result.
To prove that 𝑞has real coefficients, we solve the equation above for 𝑞, getting
𝑞(𝑥) =
𝑝(𝑥)
𝑥2 −2(Re 𝜆)𝑥+ |𝜆|2
for all 𝑥∈𝐑. The equation above implies that 𝑞(𝑥) ∈𝐑for all 𝑥∈𝐑. Writing
𝑞(𝑥) = 𝑎0 + 𝑎1𝑥+ ⋯+ 𝑎𝑛−2𝑥𝑛−2,
where 𝑛= deg 𝑝and 𝑎0, … , 𝑎𝑛−2 ∈𝐂, we thus have
0 = Im 𝑞(𝑥) = (Im 𝑎0) + (Im 𝑎1)𝑥+ ⋯+ (Im 𝑎𝑛−2)𝑥𝑛−2
for all 𝑥∈𝐑. This implies that Im 𝑎0, … , Im 𝑎𝑛−2 all equal 0 (by 4.8). Thus all
coefficients of 𝑞are real, as desired. Hence the desired factorization exists.
Now we turn to the question of uniqueness of our factorization. A factor of 𝑝
of the form 𝑥2+𝑏𝑘𝑥+𝑐𝑘with 𝑏𝑘
2 < 4𝑐𝑘can be uniquely written as (𝑥−𝜆𝑘)(𝑥−𝜆𝑘)
with 𝜆𝑘∈𝐂. A moment’s thought shows that two different factorizations of 𝑝as
an element of 𝒫(𝐑) would lead to two different factorizations of 𝑝as an element
of 𝒫(𝐂), contradicting 4.13.
Exercises 4
Suppose 𝑤, 𝑧∈𝐂. Verify the following equalities and inequalities.
(a) 𝑧+ 𝑧= 2 Re 𝑧
(b) 𝑧−𝑧= 2(Im 𝑧)𝑖
(c) 𝑧𝑧= |𝑧|2
(d) 𝑤+ 𝑧= 𝑤+ 𝑧and 𝑤𝑧= 𝑤𝑧
(e) 𝑧= 𝑧
(f) | Re 𝑧| ≤|𝑧| and | Im 𝑧| ≤|𝑧|
(g) ∣𝑧∣= |𝑧|
(h) |𝑤𝑧| = |𝑤| |𝑧|
The results above are the parts of 4.4 that were left to the reader.
Prove that if 𝑤, 𝑧∈𝐂, then ∣|𝑤| −|𝑧| ∣≤|𝑤−𝑧|.
The inequality above is called the reverse triangle inequality.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
Suppose 𝑉is a complex vector space and 𝜑∈𝑉′. Define 𝜎∶𝑉→𝐑by
𝜎(𝑣) = Re 𝜑(𝑣) for each 𝑣∈𝑉. Show that
𝜑(𝑣) = 𝜎(𝑣) −𝑖𝜎(𝑖𝑣)
for all 𝑣∈𝑉.
Suppose 𝑚is a positive integer. Is the set
{0} ∪{𝑝∈𝒫(𝐅) ∶deg 𝑝= 𝑚}
a subspace of 𝒫(𝐅)?
Is the set
{0} ∪{𝑝∈𝒫(𝐅) ∶deg 𝑝is even}
a subspace of 𝒫(𝐅)?
Suppose that 𝑚and 𝑛are positive integers with 𝑚≤𝑛, and suppose
𝜆1, … , 𝜆𝑚∈𝐅. Prove that there exists a polynomial 𝑝∈𝒫(𝐅) with
deg 𝑝= 𝑛such that 0 = 𝑝(𝜆1) = ⋯= 𝑝(𝜆𝑚) and such that 𝑝has no
other zeros.
Suppose that 𝑚is a nonnegative integer, 𝑧1, … , 𝑧𝑚+1 are distinct elements
of 𝐅, and 𝑤1, … , 𝑤𝑚+1 ∈𝐅. Prove that there exists a unique polynomial
𝑝∈𝒫𝑚(𝐅) such that
𝑝(𝑧𝑘) = 𝑤𝑘
for each 𝑘= 1, … , 𝑚+ 1.
This result can be proved without using linear algebra. However, try to find
the clearer, shorter proof that uses some linear algebra.
Suppose 𝑝∈𝒫(𝐂) has degree 𝑚. Prove that 𝑝has 𝑚distinct zeros if and
only if 𝑝and its derivative 𝑝′ have no zeros in common.
Prove that every polynomial of odd degree with real coefficients has a real
zero.
For 𝑝∈𝒫(𝐑), define 𝑇𝑝∶𝐑→𝐑by
(𝑇𝑝)(𝑥) =
⎧{{
⎨{{⎩
𝑝(𝑥) −𝑝(3)
𝑥−3
if 𝑥≠3,
𝑝′(3)
if 𝑥= 3
for each 𝑥∈𝐑. Show that 𝑇𝑝∈𝒫(𝐑) for every polynomial 𝑝∈𝒫(𝐑) and
also show that 𝑇∶𝒫(𝐑) →𝒫(𝐑) is a linear map.
Suppose 𝑝∈𝒫(𝐂). Define 𝑞∶𝐂→𝐂by
𝑞(𝑧) = 𝑝(𝑧) 𝑝(𝑧).
Prove that 𝑞is a polynomial with real coefficients.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
Suppose 𝑚is a nonnegative integer and 𝑝∈𝒫𝑚(𝐂) is such that there are
distinct real numbers 𝑥0, 𝑥1, … , 𝑥𝑚with 𝑝(𝑥𝑘) ∈𝐑for each 𝑘= 0, 1, … , 𝑚.
Prove that all coefficients of 𝑝are real.
Suppose 𝑝∈𝒫(𝐅) with 𝑝≠0. Let 𝑈= {𝑝𝑞∶𝑞∈𝒫(𝐅)}.
(a) Show that dim 𝒫(𝐅)/𝑈= deg 𝑝.
(b) Find a basis of 𝒫(𝐅)/𝑈.
Suppose 𝑝, 𝑞∈𝒫(𝐂) are nonconstant polynomials with no zeros in common.
Let 𝑚= deg 𝑝and 𝑛= deg 𝑞. Use linear algebra as outlined below in (a)–(c)
to prove that there exist 𝑟∈𝒫𝑛−1(𝐂) and 𝑠∈𝒫𝑚−1(𝐂) such that
𝑟𝑝+ 𝑠𝑞= 1.
(a) Define 𝑇∶𝒫𝑛−1(𝐂) × 𝒫𝑚−1(𝐂) →𝒫𝑚+𝑛−1(𝐂) by
𝑇(𝑟, 𝑠) = 𝑟𝑝+ 𝑠𝑞.
Show that the linear map 𝑇is injective.
(b) Show that the linear map 𝑇in (a) is surjective.
(c) Use (b) to conclude that there exist 𝑟∈𝒫𝑛−1(𝐂) and 𝑠∈𝒫𝑚−1(𝐂) such
that 𝑟𝑝+ 𝑠𝑞= 1.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
Linear maps from one vector space to another vector space were the objects of
study in Chapter 3. Now we begin our investigation of operators, which are linear
maps from a vector space to itself. Their study constitutes the most important
part of linear algebra.
To learn about an operator, we might try restricting it to a smaller subspace.
Asking for that restriction to be an operator will lead us to the notion of invariant
subspaces. Each one-dimensional invariant subspace arises from a vector that
the operator maps into a scalar multiple of the vector. This path will lead us to
eigenvectors and eigenvalues.
We will then prove one of the most important results in linear algebra: every
operator on a finite-dimensional nonzero complex vector space has an eigenvalue.
This result will allow us to show that for each operator on a finite-dimensional
complex vector space, there is a basis of the vector space with respect to which
the matrix of the operator has at least almost half its entries equal to 0.
standing assumptions for this chapter
• 𝐅denotes 𝐑or 𝐂.
• 𝑉denotes a vector space over 𝐅.
Hans-Peter Postel CC BY
Statue of Leonardo of Pisa (1170–1250, approximate dates), also known as Fibonacci.
Exercise 21 in Section 5D shows how linear algebra can be used to find
the explicit formula for the Fibonacci sequence shown on the front cover.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5A
Invariant Subspaces
5A Invariant Subspaces
Eigenvalues
5.1
definition: operator
A linear map from a vector space to itself is called an operator.
Recall that we defined the notation
ℒ(𝑉) to mean ℒ(𝑉, 𝑉).
Suppose 𝑇∈ℒ(𝑉). If 𝑚≥2 and
𝑉= 𝑉1 ⊕⋯⊕𝑉𝑚,
where each 𝑉𝑘is a nonzero subspace of 𝑉, then to understand the behavior of
𝑇we only need to understand the behavior of each 𝑇|𝑉𝑘; here 𝑇|𝑉𝑘denotes the
restriction of 𝑇to the smaller domain 𝑉𝑘. Dealing with 𝑇|𝑉𝑘should be easier than
dealing with 𝑇because 𝑉𝑘is a smaller vector space than 𝑉.
However, if we intend to apply tools useful in the study of operators (such
as taking powers), then we have a problem: 𝑇|𝑉𝑘may not map 𝑉𝑘into itself; in
other words, 𝑇|𝑉𝑘may not be an operator on 𝑉𝑘. Thus we are led to consider only
decompositions of 𝑉of the form above in which 𝑇maps each 𝑉𝑘into itself. Hence
we now give a name to subspaces of 𝑉that get mapped into themselves by 𝑇.
5.2
definition: invariant subspace
Suppose 𝑇∈ℒ(𝑉). A subspace 𝑈of 𝑉is called invariant under 𝑇if 𝑇𝑢∈𝑈
for every 𝑢∈𝑈.
Thus 𝑈is invariant under 𝑇if 𝑇|𝑈is an operator on 𝑈.
5.3
example: subspace invariant under differentiation operator
Suppose that 𝑇∈ℒ(𝒫(𝐑)) is defined by 𝑇𝑝= 𝑝′. Then 𝒫4(𝐑), which is a
subspace of 𝒫(𝐑), is invariant under 𝑇because if 𝑝∈𝒫(𝐑) has degree at most 4,
then 𝑝′ also has degree at most 4.
5.4
example: four invariant subspaces, not necessarily all different
If 𝑇∈ℒ(𝑉), then the following subspaces of 𝑉are all invariant under 𝑇.
{0}
The subspace {0} is invariant under 𝑇because if 𝑢∈{0}, then 𝑢= 0
and hence 𝑇𝑢= 0 ∈{0}.
𝑉
The subspace 𝑉is invariant under 𝑇because if 𝑢∈𝑉, then 𝑇𝑢∈𝑉.
null 𝑇
The subspace null 𝑇is invariant under 𝑇because if 𝑢∈null 𝑇, then
𝑇𝑢= 0, and hence 𝑇𝑢∈null 𝑇.
range 𝑇The subspace range 𝑇is invariant under 𝑇because if 𝑢∈range 𝑇,
then 𝑇𝑢∈range 𝑇.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
Must an operator 𝑇∈ℒ(𝑉) have any invariant subspaces other than {0}
and 𝑉? Later we will see that this question has an affirmative answer if 𝑉is
finite-dimensional and dim 𝑉> 1 (for 𝐅= 𝐂) or dim 𝑉> 2 (for 𝐅= 𝐑); see
5.19 and Exercise 29 in Section 5B.
The previous example noted that null 𝑇and range 𝑇are invariant under 𝑇.
However, these subspaces do not necessarily provide easy answers to the question
above about the existence of invariant subspaces other than {0} and 𝑉, because
null 𝑇may equal {0} and range 𝑇may equal 𝑉(this happens when 𝑇is invertible).
We will return later to a deeper study of invariant subspaces. Now we turn to
an investigation of the simplest possible nontrivial invariant subspaces—invariant
subspaces of dimension one.
Take any 𝑣∈𝑉with 𝑣≠0 and let 𝑈equal the set of all scalar multiples of 𝑣:
𝑈= {𝜆𝑣∶𝜆∈𝐅} = span(𝑣).
Then 𝑈is a one-dimensional subspace of 𝑉(and every one-dimensional subspace
of 𝑉is of this form for an appropriate choice of 𝑣). If 𝑈is invariant under an
operator 𝑇∈ℒ(𝑉), then 𝑇𝑣∈𝑈, and hence there is a scalar 𝜆∈𝐅such that
𝑇𝑣= 𝜆𝑣.
Conversely, if 𝑇𝑣= 𝜆𝑣for some 𝜆∈𝐅, then span(𝑣) is a one-dimensional
subspace of 𝑉invariant under 𝑇.
The equation 𝑇𝑣= 𝜆𝑣, which we have just seen is intimately connected with
one-dimensional invariant subspaces, is important enough that the scalars 𝜆and
vectors 𝑣satisfying it are given special names.
5.5
definition: eigenvalue
Suppose 𝑇∈ℒ(𝑉). A number 𝜆∈𝐅is called an eigenvalue of 𝑇if there
exists 𝑣∈𝑉such that 𝑣≠0 and 𝑇𝑣= 𝜆𝑣.
The word eigenvalue is half-German,
half-English. The German prefix eigen
means “own” in the sense of charac-
terizing an intrinsic property.
In the definition above, we require
that 𝑣≠0 because every scalar 𝜆∈𝐅
satisfies 𝑇0 = 𝜆0.
The comments above show that 𝑉
has a one-dimensional subspace invariant
under 𝑇if and only if 𝑇has an eigenvalue.
5.6
example: eigenvalue
Define an operator 𝑇∈ℒ(𝐅3) by
𝑇(𝑥, 𝑦, 𝑧) = (7𝑥+ 3𝑧, 3𝑥+ 6𝑦+ 9𝑧, −6𝑦)
for (𝑥, 𝑦, 𝑧) ∈𝐅3. Then 𝑇(3, 1, −1) = (18, 6, −6) = 6(3, 1, −1). Thus 6 is an
eigenvalue of 𝑇.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5A
Invariant Subspaces
The equivalences in the next result, along with many deep results in linear
algebra, are valid only in the context of finite-dimensional vector spaces.
5.7
equivalent conditions to be an eigenvalue
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝜆∈𝐅. Then the following
are equivalent.
(a) 𝜆is an eigenvalue of 𝑇.
(b) 𝑇−𝜆𝐼is not injective.
(c) 𝑇−𝜆𝐼is not surjective.
Reminder: 𝐼∈ℒ(𝑉) is the identity
operator. Thus 𝐼𝑣= 𝑣for all 𝑣∈𝑉.
(d) 𝑇−𝜆𝐼is not invertible.
Proof
Conditions (a) and (b) are equivalent because the equation 𝑇𝑣= 𝜆𝑣
is equivalent to the equation (𝑇−𝜆𝐼)𝑣= 0. Conditions (b), (c), and (d) are
equivalent by 3.65.
5.8
definition: eigenvector
Suppose 𝑇∈ℒ(𝑉) and 𝜆∈𝐅is an eigenvalue of 𝑇. A vector 𝑣∈𝑉is called
an eigenvector of 𝑇corresponding to 𝜆if 𝑣≠0 and 𝑇𝑣= 𝜆𝑣.
In other words, a nonzero vector 𝑣∈𝑉is an eigenvector of an operator
𝑇∈ℒ(𝑉) if and only if 𝑇𝑣is a scalar multiple of 𝑣. Because 𝑇𝑣= 𝜆𝑣if and only
if (𝑇−𝜆𝐼)𝑣= 0, a vector 𝑣∈𝑉with 𝑣≠0 is an eigenvector of 𝑇corresponding
to 𝜆if and only if 𝑣∈null(𝑇−𝜆𝐼).
5.9
example: eigenvalues and eigenvectors
Suppose 𝑇∈ℒ(𝐅2) is defined by 𝑇(𝑤, 𝑧) = (−𝑧, 𝑤).
(a) First consider the case 𝐅= 𝐑. Then 𝑇is a counterclockwise rotation by 90∘
about the origin in 𝐑2. An operator has an eigenvalue if and only if there
exists a nonzero vector in its domain that gets sent by the operator to a scalar
multiple of itself. A 90∘counterclockwise rotation of a nonzero vector in 𝐑2
cannot equal a scalar multiple of itself. Conclusion: if 𝐅= 𝐑, then 𝑇has no
eigenvalues (and thus has no eigenvectors).
(b) Now consider the case 𝐅= 𝐂. To find eigenvalues of 𝑇, we must find the
scalars 𝜆such that 𝑇(𝑤, 𝑧) = 𝜆(𝑤, 𝑧) has some solution other than 𝑤= 𝑧= 0.
The equation 𝑇(𝑤, 𝑧) = 𝜆(𝑤, 𝑧) is equivalent to the simultaneous equations
5.10
−𝑧= 𝜆𝑤,
𝑤= 𝜆𝑧.
Substituting the value for 𝑤given by the second equation into the first equation
gives
−𝑧= 𝜆2𝑧.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
Now 𝑧cannot equal 0 [otherwise 5.10 implies that 𝑤= 0; we are looking for
solutions to 5.10 such that (𝑤, 𝑧) is not the 0 vector], so the equation above
leads to the equation
−1 = 𝜆2.
The solutions to this equation are 𝜆= 𝑖and 𝜆= −𝑖.
You can verify that 𝑖and −𝑖are eigenvalues of 𝑇. Indeed, the eigenvectors
corresponding to the eigenvalue 𝑖are the vectors of the form (𝑤, −𝑤𝑖), with
𝑤∈𝐂and 𝑤≠0. Furthermore, the eigenvectors corresponding to the
eigenvalue −𝑖are the vectors of the form (𝑤, 𝑤𝑖), with 𝑤∈𝐂and 𝑤≠0.
In the next proof, we again use the equivalence
𝑇𝑣= 𝜆𝑣⟺(𝑇−𝜆𝐼)𝑣= 0.
5.11
linearly independent eigenvectors
Suppose 𝑇∈ℒ(𝑉). Then every list of eigenvectors of 𝑇corresponding to
distinct eigenvalues of 𝑇is linearly independent.
Proof
Suppose the desired result is false. Then there exists a smallest positive
integer 𝑚such that there exists a linearly dependent list 𝑣1, … , 𝑣𝑚of eigenvectors
of 𝑇corresponding to distinct eigenvalues 𝜆1, … , 𝜆𝑚of 𝑇(note that 𝑚≥2
because an eigenvector is, by definition, nonzero). Thus there exist 𝑎1, … , 𝑎𝑚∈𝐅,
none of which are 0 (because of the minimality of 𝑚), such that
𝑎1𝑣1 + ⋯+ 𝑎𝑚𝑣𝑚= 0.
Apply 𝑇−𝜆𝑚𝐼to both sides of the equation above, getting
𝑎1(𝜆1 −𝜆𝑚)𝑣1 + ⋯+ 𝑎𝑚−1(𝜆𝑚−1 −𝜆𝑚)𝑣𝑚−1 = 0.
Because the eigenvalues 𝜆1, … , 𝜆𝑚are distinct, none of the coefficients above
equal 0. Thus 𝑣1, … , 𝑣𝑚−1 is a linearly dependent list of 𝑚−1 eigenvectors of 𝑇
corresponding to distinct eigenvalues, contradicting the minimality of 𝑚. This
contradiction completes the proof.
The result above leads to a short proof of the result below, which puts an upper
bound on the number of distinct eigenvalues that an operator can have.
5.12
operator cannot have more eigenvalues than dimension of vector space
Suppose 𝑉is finite-dimensional. Then each operator on 𝑉has at most dim 𝑉
distinct eigenvalues.
Proof
Let 𝑇∈ℒ(𝑉). Suppose 𝜆1, … , 𝜆𝑚are distinct eigenvalues of 𝑇. Let
𝑣1, … , 𝑣𝑚be corresponding eigenvectors. Then 5.11 implies that the list 𝑣1, … , 𝑣𝑚
is linearly independent. Thus 𝑚≤dim 𝑉(see 2.22), as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5A
Invariant Subspaces
Polynomials Applied to Operators
The main reason that a richer theory exists for operators (which map a vector
space into itself) than for more general linear maps is that operators can be raised
to powers. In this subsection we define that notion and the concept of applying a
polynomial to an operator. This concept will be the key tool that we use in the
next section when we prove that every operator on a nonzero finite-dimensional
complex vector space has an eigenvalue.
If 𝑇is an operator, then 𝑇𝑇makes sense (see 3.7) and is also an operator on
the same vector space as 𝑇. We usually write 𝑇2 instead of 𝑇𝑇. More generally,
we have the following definition of 𝑇𝑚.
5.13
notation: 𝑇𝑚
Suppose 𝑇∈ℒ(𝑉) and 𝑚is a positive integer.
• 𝑇𝑚∈ℒ(𝑉) is defined by 𝑇𝑚= 𝑇⋯𝑇
⏟
𝑚times
.
• 𝑇0 is defined to be the identity operator 𝐼on 𝑉.
• If 𝑇is invertible with inverse 𝑇−1, then 𝑇−𝑚∈ℒ(𝑉) is defined by
𝑇−𝑚= (𝑇−1)𝑚.
You should verify that if 𝑇is an operator, then
𝑇𝑚𝑇𝑛= 𝑇𝑚+𝑛
and
(𝑇𝑚)𝑛= 𝑇𝑚𝑛,
where 𝑚and 𝑛are arbitrary integers if 𝑇is invertible and are nonnegative integers
if 𝑇is not invertible.
Having defined powers of an operator, we can now define what it means to
apply a polynomial to an operator.
5.14
notation: 𝑝(𝑇)
Suppose 𝑇∈ℒ(𝑉) and 𝑝∈𝒫(𝐅) is a polynomial given by
𝑝(𝑧) = 𝑎0 + 𝑎1𝑧+ 𝑎2𝑧2 + ⋯+ 𝑎𝑚𝑧𝑚
for all 𝑧∈𝐅. Then 𝑝(𝑇) is the operator on 𝑉defined by
𝑝(𝑇) = 𝑎0𝐼+ 𝑎1𝑇+ 𝑎2𝑇2 + ⋯+ 𝑎𝑚𝑇𝑚.
This is a new use of the symbol 𝑝because we are applying 𝑝to operators, not
just elements of 𝐅. The idea here is that to evaluate 𝑝(𝑇), we simply replace 𝑧with
𝑇in the expression defining 𝑝. Note that the constant term 𝑎0 in 𝑝(𝑧) becomes the
operator 𝑎0𝐼(which is a reasonable choice because 𝑎0 = 𝑎0𝑧0 and thus we should
replace 𝑎0 with 𝑎0𝑇0, which equals 𝑎0𝐼).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
5.15
example: a polynomial applied to the differentiation operator
Suppose 𝐷∈ℒ(𝒫(𝐑)) is the differentiation operator defined by 𝐷𝑞= 𝑞′ and
𝑝is the polynomial defined by 𝑝(𝑥) = 7 −3𝑥+ 5𝑥2. Then 𝑝(𝐷) = 7𝐼−3𝐷+ 5𝐷2.
Thus
(𝑝(𝐷))𝑞= 7𝑞−3𝑞′ + 5𝑞″
for every 𝑞∈𝒫(𝐑).
If we fix an operator 𝑇∈ℒ(𝑉), then the function from 𝒫(𝐅) to ℒ(𝑉) given
by 𝑝↦𝑝(𝑇) is linear, as you should verify.
5.16
definition: product of polynomials
If 𝑝, 𝑞∈𝒫(𝐅), then 𝑝𝑞∈𝒫(𝐅) is the polynomial defined by
(𝑝𝑞)(𝑧) = 𝑝(𝑧)𝑞(𝑧)
for all 𝑧∈𝐅.
The order does not matter in taking products of polynomials of a single
operator, as shown by (b) in the next result.
5.17
multiplicative properties
Suppose 𝑝, 𝑞∈𝒫(𝐅) and 𝑇∈ℒ(𝑉).
Then
(a) (𝑝𝑞)(𝑇) = 𝑝(𝑇)𝑞(𝑇);
(b) 𝑝(𝑇)𝑞(𝑇) = 𝑞(𝑇)𝑝(𝑇).
Informal proof: When a product of
polynomials is expanded using the dis-
tributive property, it does not matter
whether the symbol is 𝑧or 𝑇.
Proof
(a) Suppose 𝑝(𝑧) =
𝑚
∑
𝑗= 0
𝑎𝑗𝑧𝑗and 𝑞(𝑧) =
𝑛
∑
𝑘=0
𝑏𝑘𝑧𝑘for all 𝑧∈𝐅. Then
(𝑝𝑞)(𝑧) =
𝑚
∑
𝑗= 0
𝑛
∑
𝑘=0
𝑎𝑗𝑏𝑘𝑧𝑗+𝑘.
Thus
(𝑝𝑞)(𝑇) =
𝑚
∑
𝑗= 0
𝑛
∑
𝑘=0
𝑎𝑗𝑏𝑘𝑇𝑗+𝑘
= (
𝑚
∑
𝑗= 0
𝑎𝑗𝑇𝑗)(
𝑛
∑
𝑘=0
𝑏𝑘𝑇𝑘)
= 𝑝(𝑇)𝑞(𝑇).
(b) Using (a) twice, we have 𝑝(𝑇)𝑞(𝑇) = (𝑝𝑞)(𝑇) = (𝑞𝑝)(𝑇) = 𝑞(𝑇)𝑝(𝑇).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5A
Invariant Subspaces
We observed earlier that if 𝑇∈ℒ(𝑉), then the subspaces null 𝑇and range 𝑇
are invariant under 𝑇(see 5.4). Now we show that the null space and the range of
every polynomial of 𝑇are also invariant under 𝑇.
5.18
null space and range of 𝑝(𝑇) are invariant under 𝑇
Suppose 𝑇∈ℒ(𝑉) and 𝑝∈𝒫(𝐅). Then null 𝑝(𝑇) and range 𝑝(𝑇) are
invariant under 𝑇.
Proof
Suppose 𝑢∈null 𝑝(𝑇). Then 𝑝(𝑇)𝑢= 0. Thus
(𝑝(𝑇))(𝑇𝑢) = (𝑝(𝑇) 𝑇)(𝑢) = (𝑇𝑝(𝑇))(𝑢) = 𝑇(𝑝(𝑇)𝑢) = 𝑇(0) = 0.
Hence 𝑇𝑢∈null 𝑝(𝑇). Thus null 𝑝(𝑇) is invariant under 𝑇, as desired.
Suppose 𝑢∈range 𝑝(𝑇). Then there exists 𝑣∈𝑉such that 𝑢= 𝑝(𝑇)𝑣. Thus
𝑇𝑢= 𝑇(𝑝(𝑇)𝑣) = 𝑝(𝑇)(𝑇𝑣).
Hence 𝑇𝑢∈range 𝑝(𝑇). Thus range 𝑝(𝑇) is invariant under 𝑇, as desired.
Exercises 5A
Suppose 𝑇∈ℒ(𝑉) and 𝑈is a subspace of 𝑉.
(a) Prove that if 𝑈⊆null 𝑇, then 𝑈is invariant under 𝑇.
(b) Prove that if range 𝑇⊆𝑈, then 𝑈is invariant under 𝑇.
Suppose that 𝑇∈ℒ(𝑉) and 𝑉1, … , 𝑉𝑚are subspaces of 𝑉invariant under 𝑇.
Prove that 𝑉1 + ⋯+ 𝑉𝑚is invariant under 𝑇.
Suppose 𝑇∈ℒ(𝑉). Prove that the intersection of every collection of
subspaces of 𝑉invariant under 𝑇is invariant under 𝑇.
Prove or give a counterexample: If 𝑉is finite-dimensional and 𝑈is a sub-
space of 𝑉that is invariant under every operator on 𝑉, then 𝑈= {0} or
𝑈= 𝑉.
Suppose 𝑇∈ℒ(𝐑2) is defined by 𝑇(𝑥, 𝑦) = (−3𝑦, 𝑥). Find the eigenvalues
of 𝑇.
Define 𝑇∈ℒ(𝐅2) by 𝑇(𝑤, 𝑧) = (𝑧, 𝑤). Find all eigenvalues and eigenvec-
tors of 𝑇.
Define 𝑇∈ℒ(𝐅3) by 𝑇(𝑧1, 𝑧2, 𝑧3) = (2𝑧2, 0, 5𝑧3). Find all eigenvalues and
eigenvectors of 𝑇.
Suppose 𝑃∈ℒ(𝑉) is such that 𝑃2 = 𝑃. Prove that if 𝜆is an eigenvalue of 𝑃,
then 𝜆= 0 or 𝜆= 1.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
Define 𝑇∶𝒫(𝐑) →𝒫(𝐑) by 𝑇𝑝= 𝑝′. Find all eigenvalues and eigenvectors
of 𝑇.
Define 𝑇∈ℒ(𝒫4(𝐑)) by (𝑇𝑝)(𝑥) = 𝑥𝑝′(𝑥) for all 𝑥∈𝐑. Find all eigenval-
ues and eigenvectors of 𝑇.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝛼∈𝐅. Prove that there ex-
ists 𝛿> 0 such that 𝑇−𝜆𝐼is invertible for all 𝜆∈𝐅such that 0 < |𝛼−𝜆| < 𝛿.
Suppose 𝑉= 𝑈⊕𝑊, where 𝑈and 𝑊are nonzero subspaces of 𝑉. Define
𝑃∈ℒ(𝑉) by 𝑃(𝑢+ 𝑤) = 𝑢for each 𝑢∈𝑈and each 𝑤∈𝑊. Find all
eigenvalues and eigenvectors of 𝑃.
Suppose 𝑇∈ℒ(𝑉). Suppose 𝑆∈ℒ(𝑉) is invertible.
(a) Prove that 𝑇and 𝑆−1𝑇𝑆have the same eigenvalues.
(b) What is the relationship between the eigenvectors of 𝑇and the eigen-
vectors of 𝑆−1𝑇𝑆?
Give an example of an operator on 𝐑4 that has no (real) eigenvalues.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝜆∈𝐅. Show that 𝜆is
an eigenvalue of 𝑇if and only if 𝜆is an eigenvalue of the dual operator
𝑇′ ∈ℒ(𝑉′).
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝑇∈ℒ(𝑉). Prove that if 𝜆is an
eigenvalue of 𝑇, then
|𝜆| ≤𝑛max{∣ℳ(𝑇)𝑗,𝑘∣∶1 ≤𝑗, 𝑘≤𝑛},
where ℳ(𝑇)𝑗,𝑘denotes the entry in row 𝑗, column 𝑘of the matrix of 𝑇with
respect to the basis 𝑣1, … , 𝑣𝑛.
See Exercise 19 in Section 6A for a different bound on |𝜆|.
Suppose 𝐅= 𝐑, 𝑇∈ℒ(𝑉), and 𝜆∈𝐑. Prove that 𝜆is an eigenvalue of 𝑇
if and only if 𝜆is an eigenvalue of the complexification 𝑇𝐂.
See Exercise 33 in Section 3B for the definition of 𝑇𝐂.
Suppose 𝐅= 𝐑, 𝑇∈ℒ(𝑉), and 𝜆∈𝐂. Prove that 𝜆is an eigenvalue of
the complexification 𝑇𝐂if and only if 𝜆is an eigenvalue of 𝑇𝐂.
Show that the forward shift operator 𝑇∈ℒ(𝐅∞) defined by
𝑇(𝑧1, 𝑧2, … ) = (0, 𝑧1, 𝑧2, … )
has no eigenvalues.
Define the backward shift operator 𝑆∈ℒ(𝐅∞) by
𝑆(𝑧1, 𝑧2, 𝑧3, … ) = (𝑧2, 𝑧3, … ).
(a) Show that every element of 𝐅is an eigenvalue of 𝑆.
(b) Find all eigenvectors of 𝑆.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5A
Invariant Subspaces
≈100√2
Suppose 𝑇∈ℒ(𝑉) is invertible.
(a) Suppose 𝜆∈𝐅with 𝜆≠0. Prove that 𝜆is an eigenvalue of 𝑇if and
only if 1
𝜆is an eigenvalue of 𝑇−1.
(b) Prove that 𝑇and 𝑇−1 have the same eigenvectors.
Suppose 𝑇∈ℒ(𝑉) and there exist nonzero vectors 𝑢and 𝑤in 𝑉such that
𝑇𝑢= 3𝑤
and
𝑇𝑤= 3𝑢.
Prove that 3 or −3 is an eigenvalue of 𝑇.
Suppose 𝑉is finite-dimensional and 𝑆, 𝑇∈ℒ(𝑉). Prove that 𝑆𝑇and 𝑇𝑆
have the same eigenvalues.
Suppose 𝐴is an 𝑛-by-𝑛matrix with entries in 𝐅. Define 𝑇∈ℒ(𝐅𝑛) by
𝑇𝑥= 𝐴𝑥, where elements of 𝐅𝑛are thought of as 𝑛-by-1 column vectors.
(a) Suppose the sum of the entries in each row of 𝐴equals 1. Prove that 1
is an eigenvalue of 𝑇.
(b) Suppose the sum of the entries in each column of 𝐴equals 1. Prove that
1 is an eigenvalue of 𝑇.
Suppose 𝑇∈ℒ(𝑉) and 𝑢, 𝑤are eigenvectors of 𝑇such that 𝑢+ 𝑤is also
an eigenvector of 𝑇. Prove that 𝑢and 𝑤are eigenvectors of 𝑇corresponding
to the same eigenvalue.
Suppose 𝑇∈ℒ(𝑉) is such that every nonzero vector in 𝑉is an eigenvector
of 𝑇. Prove that 𝑇is a scalar multiple of the identity operator.
Suppose that 𝑉is finite-dimensional and 𝑘∈{1, … , dim 𝑉−1}. Suppose
𝑇∈ℒ(𝑉) is such that every subspace of 𝑉of dimension 𝑘is invariant
under 𝑇. Prove that 𝑇is a scalar multiple of the identity operator.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that 𝑇has at most
1 + dim range 𝑇distinct eigenvalues.
Suppose 𝑇∈ℒ(𝐑3) and −4, 5, and √7 are eigenvalues of 𝑇. Prove that
there exists 𝑥∈𝐑3 such that 𝑇𝑥−9𝑥= (−4, 5, √7).
Suppose 𝑇∈ℒ(𝑉) and (𝑇−2𝐼)(𝑇−3𝐼)(𝑇−4𝐼) = 0. Suppose 𝜆is an
eigenvalue of 𝑇. Prove that 𝜆= 2 or 𝜆= 3 or 𝜆= 4.
Give an example of 𝑇∈ℒ(𝐑2) such that 𝑇4 = −𝐼.
Suppose 𝑇∈ℒ(𝑉) has no eigenvalues and 𝑇4 = 𝐼. Prove that 𝑇2 = −𝐼.
Suppose 𝑇∈ℒ(𝑉) and 𝑚is a positive integer.
(a) Prove that 𝑇is injective if and only if 𝑇𝑚is injective.
(b) Prove that 𝑇is surjective if and only if 𝑇𝑚is surjective.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
Suppose 𝑉is finite-dimensional and 𝑣1, … , 𝑣𝑚∈𝑉. Prove that the list
𝑣1, … , 𝑣𝑚is linearly independent if and only if there exists 𝑇∈ℒ(𝑉) such
that 𝑣1, … , 𝑣𝑚are eigenvectors of 𝑇corresponding to distinct eigenvalues.
Suppose that 𝜆1, … , 𝜆𝑛is a list of distinct real numbers. Prove that the
list 𝑒𝜆1𝑥, … , 𝑒𝜆𝑛𝑥is linearly independent in the vector space of real-valued
functions on 𝐑.
Hint: Let 𝑉= span(𝑒𝜆1𝑥, … , 𝑒𝜆𝑛𝑥), and define an operator 𝐷∈ℒ(𝑉) by
𝐷𝑓= 𝑓′. Find eigenvalues and eigenvectors of 𝐷.
Suppose that 𝜆1, … , 𝜆𝑛is a list of distinct positive numbers. Prove that the
list cos(𝜆1𝑥), … , cos(𝜆𝑛𝑥) is linearly independent in the vector space of
real-valued functions on 𝐑.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Define 𝒜∈ℒ(ℒ(𝑉)) by
𝒜(𝑆) = 𝑇𝑆
for each 𝑆∈ℒ(𝑉). Prove that the set of eigenvalues of 𝑇equals the set of
eigenvalues of 𝒜.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝑈is a subspace of 𝑉
invariant under 𝑇. The quotient operator 𝑇/𝑈∈ℒ(𝑉/𝑈) is defined by
(𝑇/𝑈)(𝑣+ 𝑈) = 𝑇𝑣+ 𝑈
for each 𝑣∈𝑉.
(a) Show that the definition of 𝑇/𝑈makes sense (which requires using the
condition that 𝑈is invariant under 𝑇) and show that 𝑇/𝑈is an operator
on 𝑉/𝑈.
(b) Show that each eigenvalue of 𝑇/𝑈is an eigenvalue of 𝑇.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that 𝑇has an eigen-
value if and only if there exists a subspace of 𝑉of dimension dim 𝑉−1 that
is invariant under 𝑇.
Suppose 𝑆, 𝑇∈ℒ(𝑉) and 𝑆is invertible. Suppose 𝑝∈𝒫(𝐅) is a polynomial.
Prove that
𝑝(𝑆𝑇𝑆−1) = 𝑆𝑝(𝑇)𝑆−1.
Suppose 𝑇∈ℒ(𝑉) and 𝑈is a subspace of 𝑉invariant under 𝑇. Prove that
𝑈is invariant under 𝑝(𝑇) for every polynomial 𝑝∈𝒫(𝐅).
Define 𝑇∈ℒ(𝐅𝑛) by 𝑇(𝑥1, 𝑥2, 𝑥3, … , 𝑥𝑛) = (𝑥1, 2𝑥2, 3𝑥3, … , 𝑛𝑥𝑛).
(a) Find all eigenvalues and eigenvectors of 𝑇.
(b) Find all subspaces of 𝐅𝑛that are invariant under 𝑇.
Suppose that 𝑉is finite-dimensional, dim 𝑉> 1, and 𝑇∈ℒ(𝑉). Prove that
{𝑝(𝑇) ∶𝑝∈𝒫(𝐅)} ≠ℒ(𝑉).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5B
The Minimal Polynomial
5B The Minimal Polynomial
Existence of Eigenvalues on Complex Vector Spaces
Now we come to one of the central results about operators on finite-dimensional
complex vector spaces.
5.19
existence of eigenvalues
Every operator on a finite-dimensional nonzero complex vector space has an
eigenvalue.
Proof
Suppose 𝑉is a finite-dimensional complex vector space of dimension
𝑛> 0 and 𝑇∈ℒ(𝑉). Choose 𝑣∈𝑉with 𝑣≠0. Then
𝑣, 𝑇𝑣, 𝑇2𝑣, … , 𝑇𝑛𝑣
is not linearly independent, because 𝑉has dimension 𝑛and this list has length
𝑛+ 1. Hence some linear combination (with not all the coefficients equal to 0)
of the vectors above equals 0. Thus there exists a nonconstant polynomial 𝑝of
smallest degree such that
𝑝(𝑇)𝑣= 0.
By the first version of the fundamental theorem of algebra (see 4.12), there
exists 𝜆∈𝐂such that 𝑝(𝜆) = 0. Hence there exists a polynomial 𝑞∈𝒫(𝐂) such
that
𝑝(𝑧) = (𝑧−𝜆)𝑞(𝑧)
for every 𝑧∈𝐂(see 4.6). This implies (using 5.17) that
0 = 𝑝(𝑇)𝑣= (𝑇−𝜆𝐼)(𝑞(𝑇)𝑣).
Because 𝑞has smaller degree than 𝑝, we know that 𝑞(𝑇)𝑣≠0. Thus the equation
above implies that 𝜆is an eigenvalue of 𝑇with eigenvector 𝑞(𝑇)𝑣.
The proof above makes crucial use of the fundamental theorem of algebra.
The comment following Exercise 16 helps explain why the fundamental theorem
of algebra is so tightly connected to the result above.
The hypothesis in the result above that 𝐅= 𝐂cannot be replaced with the
hypothesis that 𝐅= 𝐑, as shown by Example 5.9. The next example shows that
the finite-dimensional hypothesis in the result above also cannot be deleted.
5.20
example: an operator on a complex vector space with no eigenvalues
Define 𝑇∈ℒ(𝒫(𝐂)) by (𝑇𝑝)(𝑧) = 𝑧𝑝(𝑧). If 𝑝∈𝒫(𝐂) is a nonzero poly-
nomial, then the degree of 𝑇𝑝is one more than the degree of 𝑝, and thus 𝑇𝑝cannot
equal a scalar multiple of 𝑝. Hence 𝑇has no eigenvalues.
Because 𝒫(𝐂) is infinite-dimensional, this example does not contradict the
result above.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
Eigenvalues and the Minimal Polynomial
In this subsection we introduce an important polynomial associated with each
operator. We begin with the following definition.
5.21
definition: monic polynomial
A monic polynomial is a polynomial whose highest-degree coefficient equals 1.
For example, the polynomial 2 + 9𝑧2 + 𝑧7 is a monic polynomial of degree 7.
5.22
existence, uniqueness, and degree of minimal polynomial
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Then there is a unique monic
polynomial 𝑝∈𝒫(𝐅) of smallest degree such that 𝑝(𝑇) = 0. Furthermore,
deg 𝑝≤dim 𝑉.
Proof
If dim 𝑉= 0, then 𝐼is the zero operator on 𝑉and thus we take 𝑝to be
the constant polynomial 1.
Now use induction on dim 𝑉. Thus assume that dim 𝑉> 0 and that the
desired result is true for all operators on all vector spaces of smaller dimension.
Let 𝑢∈𝑉be such that 𝑢≠0. The list 𝑢, 𝑇𝑢, … , 𝑇dim 𝑉𝑢has length 1 + dim 𝑉
and thus is linearly dependent. By the linear dependence lemma (2.19), there is
a smallest positive integer 𝑚≤dim 𝑉such that 𝑇𝑚𝑢is a linear combination of
𝑢, 𝑇𝑢, … , 𝑇𝑚−1𝑢. Thus there exist scalars 𝑐0, 𝑐1, 𝑐2, … , 𝑐𝑚−1 ∈𝐅such that
5.23
𝑐0𝑢+ 𝑐1𝑇𝑢+ ⋯+ 𝑐𝑚−1𝑇𝑚−1𝑢+ 𝑇𝑚𝑢= 0.
Define a monic polynomial 𝑞∈𝒫𝑚(𝐅) by
𝑞(𝑧) = 𝑐0 + 𝑐1𝑧+ ⋯+ 𝑐𝑚−1𝑧𝑚−1 + 𝑧𝑚.
Then 5.23 implies that 𝑞(𝑇)𝑢= 0.
If 𝑘is a nonnegative integer, then
𝑞(𝑇)(𝑇𝑘𝑢) = 𝑇𝑘(𝑞(𝑇)𝑢) = 𝑇𝑘(0) = 0.
The linear dependence lemma (2.19) shows that 𝑢, 𝑇𝑢, … , 𝑇𝑚−1𝑢is linearly inde-
pendent. Thus the equation above implies that dim null 𝑞(𝑇) ≥𝑚. Hence
dim range 𝑞(𝑇) = dim 𝑉−dim null 𝑞(𝑇) ≤dim 𝑉−𝑚.
Because range 𝑞(𝑇) is invariant under 𝑇(by 5.18), we can apply our induction
hypothesis to the operator 𝑇|range 𝑞(𝑇) on the vector space range 𝑞(𝑇). Thus there
is a monic polynomial 𝑠∈𝒫(𝐅) with
deg 𝑠≤dim 𝑉−𝑚
and
𝑠(𝑇|range 𝑞(𝑇)) = 0.
Hence for all 𝑣∈𝑉we have
((𝑠𝑞)(𝑇))(𝑣) = 𝑠(𝑇)(𝑞(𝑇)𝑣) = 0
because 𝑞(𝑇)𝑣∈range 𝑞(𝑇) and 𝑠(𝑇)|range 𝑞(𝑇) = 𝑠(𝑇|range 𝑞(𝑇)) = 0. Thus 𝑠𝑞is a
monic polynomial such that deg 𝑠𝑞≤dim 𝑉and (𝑠𝑞)(𝑇) = 0.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5B
The Minimal Polynomial
The paragraph above shows that there is a monic polynomial of degree at
most dim 𝑉that when applied to 𝑇gives the 0 operator. Thus there is a monic
polynomial of smallest degree with this property, completing the existence part
of this result.
Let 𝑝∈𝒫(𝐅) be a monic polynomial of smallest degree such that 𝑝(𝑇) = 0.
To prove the uniqueness part of the result, suppose 𝑟∈𝒫(𝐅) is a monic poly-
nomial of the same degree as 𝑝and 𝑟(𝑇) = 0. Then (𝑝−𝑟)(𝑇) = 0 and also
deg(𝑝−𝑟) < deg 𝑝. If 𝑝−𝑟were not equal to 0, then we could divide 𝑝−𝑟by
the coefficient of the highest-order term in 𝑝−𝑟to get a monic polynomial (of
smaller degree than 𝑝) that when applied to 𝑇gives the 0 operator. Thus 𝑝−𝑟= 0,
as desired.
The previous result justifies the following definition.
5.24
definition: minimal polynomial
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Then the minimal polynomial
of 𝑇is the unique monic polynomial 𝑝∈𝒫(𝐅) of smallest degree such that
𝑝(𝑇) = 0.
To compute the minimal polynomial of an operator 𝑇∈ℒ(𝑉), we need to
find the smallest positive integer 𝑚such that the equation
𝑐0𝐼+ 𝑐1𝑇+ ⋯+ 𝑐𝑚−1𝑇𝑚−1 = −𝑇𝑚
has a solution 𝑐0, 𝑐1, … , 𝑐𝑚−1 ∈𝐅. If we pick a basis of 𝑉and replace 𝑇in the
equation above with the matrix of 𝑇, then the equation above can be thought of
as a system of (dim 𝑉)2 linear equations in the 𝑚unknowns 𝑐0, 𝑐1, … , 𝑐𝑚−1 ∈𝐅.
Gaussian elimination or another fast method of solving systems of linear equations
can tell us whether a solution exists, testing successive values 𝑚= 1, 2, … until
a solution exists. By 5.22, a solution exists for some smallest positive integer
𝑚≤dim 𝑉. The minimal polynomial of 𝑇is then 𝑐0 + 𝑐1𝑧+ ⋯+ 𝑐𝑚−1𝑧𝑚−1 + 𝑧𝑚.
Even faster (usually), pick 𝑣∈𝑉with 𝑣≠0 and consider the equation
5.25
𝑐0𝑣+ 𝑐1𝑇𝑣+ ⋯+ 𝑐dim 𝑉−1𝑇dim 𝑉−1𝑣= −𝑇dim 𝑉𝑣.
Use a basis of 𝑉to convert the equation above to a system of dim 𝑉linear
equations in dim 𝑉unknowns 𝑐0, 𝑐1, … , 𝑐dim 𝑉−1. If this system of equations has a
unique solution 𝑐0, 𝑐1, … , 𝑐dim 𝑉−1 (as happens most of the time), then the scalars
𝑐0, 𝑐1, … , 𝑐dim 𝑉−1, 1 are the coefficients of the minimal polynomial of 𝑇(because
5.22 states that the degree of the minimal polynomial is at most dim 𝑉).
These estimates are based on testing
millions of random matrices.
Consider operators on 𝐑4 (thought
of as 4-by-4 matrices with respect to the
standard basis), and take 𝑣= (1, 0, 0, 0)
in the paragraph above. The faster method described above works on over 99.8%
of the 4-by-4 matrices with integer entries in the interval [−10, 10] and on over
99.999% of the 4-by-4 matrices with integer entries in [−100, 100].
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
The next example illustrates the faster procedure discussed above.
5.26
example: minimal polynomial of an operator on 𝐅5
Suppose 𝑇∈ℒ(𝐅5) and
ℳ(𝑇) =
⎛⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜
⎝
−3
⎞⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟
⎠
with respect to the standard basis 𝑒1, 𝑒2, 𝑒3, 𝑒4, 𝑒5. Taking 𝑣= 𝑒1 for 5.25, we have
𝑇𝑒1 = 𝑒2,
𝑇4𝑒1 = 𝑇(𝑇3𝑒1) = 𝑇𝑒4 = 𝑒5,
𝑇2𝑒1 = 𝑇(𝑇𝑒1) = 𝑇𝑒2 = 𝑒3,
𝑇5𝑒1 = 𝑇(𝑇4𝑒1) = 𝑇𝑒5 = −3𝑒1 + 6𝑒2.
𝑇3𝑒1 = 𝑇(𝑇2𝑒1) = 𝑇𝑒3 = 𝑒4,
Thus 3𝑒1 −6𝑇𝑒1 = −𝑇5𝑒1. The list 𝑒1, 𝑇𝑒1, 𝑇2𝑒1, 𝑇3𝑒1, 𝑇4𝑒1, which equals the list
𝑒1, 𝑒2, 𝑒3, 𝑒4, 𝑒5, is linearly independent, so no other linear combination of this list
equals −𝑇5𝑒1. Hence the minimal polynomial of 𝑇is 3 −6𝑧+ 𝑧5.
Recall that by definition, eigenvalues of operators on 𝑉and zeros of polyno-
mials in 𝒫(𝐅) must be elements of 𝐅. In particular, if 𝐅= 𝐑, then eigenvalues
and zeros must be real numbers.
5.27
eigenvalues are the zeros of the minimal polynomial
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉).
(a) The zeros of the minimal polynomial of 𝑇are the eigenvalues of 𝑇.
(b) If 𝑉is a complex vector space, then the minimal polynomial of 𝑇has the
form
(𝑧−𝜆1) ⋯(𝑧−𝜆𝑚),
where 𝜆1, … , 𝜆𝑚is a list of all eigenvalues of 𝑇, possibly with repetitions.
Proof
Let 𝑝be the minimal polynomial of 𝑇.
(a) First suppose 𝜆∈𝐅is a zero of 𝑝. Then 𝑝can be written in the form
𝑝(𝑧) = (𝑧−𝜆)𝑞(𝑧),
where 𝑞is a monic polynomial with coefficients in 𝐅(see 4.6). Because
𝑝(𝑇) = 0, we have
0 = (𝑇−𝜆𝐼)(𝑞(𝑇)𝑣)
for all 𝑣∈𝑉. Because deg 𝑞= (deg 𝑝) −1 and 𝑝is the minimal polynomial
of 𝑇, there exists at least one vector 𝑣∈𝑉such that 𝑞(𝑇)𝑣≠0. The equation
above thus implies that 𝜆is an eigenvalue of 𝑇, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5B
The Minimal Polynomial
To prove that every eigenvalue of 𝑇is a zero of 𝑝, now suppose 𝜆∈𝐅is
an eigenvalue of 𝑇. Thus there exists 𝑣∈𝑉with 𝑣≠0 such that 𝑇𝑣= 𝜆𝑣.
Repeated applications of 𝑇to both sides of this equation show that 𝑇𝑘𝑣= 𝜆𝑘𝑣
for every nonnegative integer 𝑘. Thus
𝑝(𝑇)𝑣= 𝑝(𝜆)𝑣.
Because 𝑝is the minimal polynomial of 𝑇, we have 𝑝(𝑇)𝑣= 0. Hence the
equation above implies that 𝑝(𝜆) = 0. Thus 𝜆is a zero of 𝑝, as desired.
(b) To get the desired result, use (a) and the second version of the fundamental
theorem of algebra (see 4.13).
A nonzero polynomial has at most as many distinct zeros as its degree (see 4.8).
Thus (a) of the previous result, along with the result that the minimal polynomial
of an operator on 𝑉has degree at most dim 𝑉, gives an alternative proof of 5.12,
which states that an operator on 𝑉has at most dim 𝑉distinct eigenvalues.
Every monic polynomial is the minimal polynomial of some operator, as
shown by Exercise 16, which generalizes Example 5.26. Thus 5.27(a) shows that
finding exact expressions for the eigenvalues of an operator is equivalent to the
problem of finding exact expressions for the zeros of a polynomial (and thus is
not possible for some operators).
5.28
example: An operator whose eigenvalues cannot be found exactly
Let 𝑇∈ℒ(𝐂5) be the operator defined by
𝑇(𝑧1, 𝑧2, 𝑧3, 𝑧4, 𝑧5) = (−3𝑧5, 𝑧1 + 6𝑧5, 𝑧2, 𝑧3, 𝑧4).
The matrix of 𝑇with respect to the standard basis of 𝐂5 is the 5-by-5 matrix in
Example 5.26. As we showed in that example, the minimal polynomial of 𝑇is
the polynomial
3 −6𝑧+ 𝑧5.
No zero of the polynomial above can be expressed using rational numbers,
roots of rational numbers, and the usual rules of arithmetic (a proof of this would
take us considerably beyond linear algebra). Because the zeros of the polynomial
above are the eigenvalues of 𝑇[by 5.27(a)], we cannot find an exact expression
for any eigenvalue of 𝑇in any familiar form.
Numerical techniques, which we will not discuss here, show that the zeros
of the polynomial above, and thus the eigenvalues of 𝑇, are approximately the
following five complex numbers:
−1.67,
0.51,
1.40,
−0.12 + 1.59𝑖,
−0.12 −1.59𝑖.
Note that the two nonreal zeros of this polynomial are complex conjugates of
each other, as we expect for a polynomial with real coefficients (see 4.14).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
The next result completely characterizes the polynomials that when applied to
an operator give the 0 operator.
5.29
𝑞(𝑇) = 0 ⟺𝑞is a polynomial multiple of the minimal polynomial
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝑞∈𝒫(𝐅). Then 𝑞(𝑇) = 0
if and only if 𝑞is a polynomial multiple of the minimal polynomial of 𝑇.
Proof
Let 𝑝denote the minimal polynomial of 𝑇.
First suppose 𝑞(𝑇) = 0. By the division algorithm for polynomials (4.9), there
exist polynomials 𝑠, 𝑟∈𝒫(𝐅) such that
5.30
𝑞= 𝑝𝑠+ 𝑟
and deg 𝑟< deg 𝑝. We have
0 = 𝑞(𝑇) = 𝑝(𝑇)𝑠(𝑇) + 𝑟(𝑇) = 𝑟(𝑇).
The equation above implies that 𝑟= 0 (otherwise, dividing 𝑟by its highest-degree
coefficient would produce a monic polynomial that when applied to 𝑇gives 0;
this polynomial would have a smaller degree than the minimal polynomial, which
would be a contradiction). Thus 5.30 becomes the equation 𝑞= 𝑝𝑠. Hence 𝑞is a
polynomial multiple of 𝑝, as desired.
To prove the other direction, now suppose 𝑞is a polynomial multiple of 𝑝.
Thus there exists a polynomial 𝑠∈𝒫(𝐅) such that 𝑞= 𝑝𝑠. We have
𝑞(𝑇) = 𝑝(𝑇)𝑠(𝑇) = 0 𝑠(𝑇) = 0,
as desired.
The next result is a nice consequence of the result above.
5.31
minimal polynomial of a restriction operator
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝑈is a subspace of 𝑉that is
invariant under 𝑇. Then the minimal polynomial of 𝑇is a polynomial multiple
of the minimal polynomial of 𝑇|𝑈.
Proof
Suppose 𝑝is the minimal polynomial of 𝑇. Thus 𝑝(𝑇)𝑣= 0 for all 𝑣∈𝑉.
In particular,
𝑝(𝑇)𝑢= 0 for all 𝑢∈𝑈.
Thus 𝑝(𝑇|𝑈) = 0. Now 5.29, applied to the operator 𝑇|𝑈in place of 𝑇, implies
that 𝑝is a polynomial multiple of the minimal polynomial of 𝑇|𝑈.
See Exercise 25 for a result about quotient operators that is analogous to the
result above.
The next result shows that the constant term of the minimal polynomial of an
operator determines whether the operator is invertible.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5B
The Minimal Polynomial
5.32
𝑇not invertible ⟺constant term of minimal polynomial of 𝑇is 0
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Then 𝑇is not invertible if
and only if the constant term of the minimal polynomial of 𝑇is 0.
Proof
Suppose 𝑇∈ℒ(𝑉) and 𝑝is the minimal polynomial of 𝑇. Then
𝑇is not invertible ⟺0 is an eigenvalue of 𝑇
⟺0 is a zero of 𝑝
⟺the constant term of 𝑝is 0,
where the first equivalence holds by 5.7, the second equivalence holds by 5.27(a),
and the last equivalence holds because the constant term of 𝑝equals 𝑝(0).
Eigenvalues on Odd-Dimensional Real Vector Spaces
The next result will be the key tool that we use to show that every operator on an
odd-dimensional real vector space has an eigenvalue.
5.33
even-dimensional null space
Suppose 𝐅= 𝐑and 𝑉is finite-dimensional. Suppose also that 𝑇∈ℒ(𝑉)
and 𝑏, 𝑐∈𝐑with 𝑏2 < 4𝑐. Then dim null(𝑇2 + 𝑏𝑇+ 𝑐𝐼) is an even number.
Proof
Recall that null(𝑇2 +𝑏𝑇+𝑐𝐼) is invariant under 𝑇(by 5.18). By replacing
𝑉with null(𝑇2 + 𝑏𝑇+ 𝑐𝐼) and replacing 𝑇with 𝑇restricted to null(𝑇2 + 𝑏𝑇+ 𝑐𝐼),
we can assume that 𝑇2 + 𝑏𝑇+ 𝑐𝐼= 0; we now need to prove that dim 𝑉is even.
Suppose 𝜆∈𝐑and 𝑣∈𝑉are such that 𝑇𝑣= 𝜆𝑣. Then
0 = (𝑇2 + 𝑏𝑇+ 𝑐𝐼)𝑣= (𝜆2 + 𝑏𝜆+ 𝑐)𝑣= ((𝜆+ 𝑏
2)
2 + 𝑐−𝑏2
4 )𝑣.
The term in large parentheses above is a positive number. Thus the equation above
implies that 𝑣= 0. Hence we have shown that 𝑇has no eigenvectors.
Let 𝑈be a subspace of 𝑉that is invariant under 𝑇and has the largest dimension
among all subspaces of 𝑉that are invariant under 𝑇and have even dimension. If
𝑈= 𝑉, then we are done; otherwise assume there exists 𝑤∈𝑉such that 𝑤∉𝑈.
Let 𝑊= span(𝑤, 𝑇𝑤). Then 𝑊is invariant under 𝑇because 𝑇(𝑇𝑤) =
−𝑏𝑇𝑤−𝑐𝑤. Furthermore, dim 𝑊= 2 because otherwise 𝑤would be an eigen-
vector of 𝑇. Now
dim(𝑈+ 𝑊) = dim 𝑈+ dim 𝑊−dim(𝑈∩𝑊) = dim 𝑈+ 2,
where 𝑈∩𝑊= {0} because otherwise 𝑈∩𝑊would be a one-dimensional
subspace of 𝑉that is invariant under 𝑇(impossible because 𝑇has no eigenvectors).
Because 𝑈+𝑊is invariant under 𝑇, the equation above shows that there exists
a subspace of 𝑉invariant under 𝑇of even dimension larger than dim 𝑈. Thus the
assumption that 𝑈≠𝑉was incorrect. Hence 𝑉has even dimension.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
The next result states that on odd-dimensional vector spaces, every operator
has an eigenvalue. We already know this result for finite-dimensional complex
vector spaces (without the odd hypothesis). Thus in the proof below, we will
assume that 𝐅= 𝐑.
5.34
operators on odd-dimensional vector spaces have eigenvalues
Every operator on an odd-dimensional vector space has an eigenvalue.
Proof
Suppose 𝐅= 𝐑and 𝑉is finite-dimensional. Let 𝑛= dim 𝑉, and suppose
𝑛is an odd number. Let 𝑇∈ℒ(𝑉). We will use induction on 𝑛in steps of size
two to show that 𝑇has an eigenvalue. To get started, note that the desired result
holds if dim 𝑉= 1 because then every nonzero vector in 𝑉is an eigenvector of 𝑇.
Now suppose that 𝑛≥3 and the desired result holds for all operators on all
odd-dimensional vector spaces of dimension less than 𝑛. Let 𝑝denote the minimal
polynomial of 𝑇. If 𝑝is a polynomial multiple of 𝑥−𝜆for some 𝜆∈𝐑, then 𝜆is
an eigenvalue of 𝑇[by 5.27(a)] and we are done. Thus we can assume that there
exist 𝑏, 𝑐∈𝐑such that 𝑏2 < 4𝑐and 𝑝is a polynomial multiple of 𝑥2 + 𝑏𝑥+ 𝑐(see
4.16).
There exists a monic polynomial 𝑞∈𝒫(𝐑) such that 𝑝(𝑥) = 𝑞(𝑥)(𝑥2 +𝑏𝑥+𝑐)
for all 𝑥∈𝐑. Now
0 = 𝑝(𝑇) = (𝑞(𝑇))(𝑇2 + 𝑏𝑇+ 𝑐𝐼),
which means that 𝑞(𝑇) equals 0 on range(𝑇2 + 𝑏𝑇+ 𝑐𝐼). Because deg 𝑞< deg 𝑝
and 𝑝is the minimal polynomial of 𝑇, this implies that range(𝑇2 + 𝑏𝑇+ 𝑐𝐼) ≠𝑉.
The fundamental theorem of linear maps (3.21) tells us that
dim 𝑉= dim null(𝑇2 + 𝑏𝑇+ 𝑐𝐼) + dim range(𝑇2 + 𝑏𝑇+ 𝑐𝐼).
Because dim 𝑉is odd (by hypothesis) and dim null(𝑇2 + 𝑏𝑇+ 𝑐𝐼) is even (by
5.33), the equation above shows that dim range(𝑇2 + 𝑏𝑇+ 𝑐𝐼) is odd.
Hence range(𝑇2 + 𝑏𝑇+ 𝑐𝐼) is a subspace of 𝑉that is invariant under 𝑇(by
5.18) and that has odd dimension less than dim 𝑉. Our induction hypothesis now
implies that 𝑇restricted to range(𝑇2 + 𝑏𝑇+ 𝑐𝐼) has an eigenvalue, which means
that 𝑇has an eigenvalue.
See Exercise 23 in Section 8B and Exercise 10 in Section 9C for alternative
proofs of the result above.
Exercises 5B
Suppose 𝑇∈ℒ(𝑉). Prove that 9 is an eigenvalue of 𝑇2 if and only if 3 or
−3 is an eigenvalue of 𝑇.
Suppose 𝑉is a complex vector space and 𝑇∈ℒ(𝑉) has no eigenvalues.
Prove that every subspace of 𝑉invariant under 𝑇is either {0} or infinite-
dimensional.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5B
The Minimal Polynomial
Suppose 𝑛is an integer with 𝑛> 1 and 𝑇∈ℒ(𝐅𝑛) is defined by
𝑇(𝑥1, … , 𝑥𝑛) = (𝑥1 + ⋯+ 𝑥𝑛, … , 𝑥1 + ⋯+ 𝑥𝑛).
(a) Find all eigenvalues and eigenvectors of 𝑇.
(b) Find the minimal polynomial of 𝑇.
The matrix of 𝑇with respect to the standard basis of 𝐅𝑛consists of all 1’s.
Suppose 𝐅= 𝐂, 𝑇∈ℒ(𝑉), 𝑝∈𝒫(𝐂) is a nonconstant polynomial, and
𝛼∈𝐂. Prove that 𝛼is an eigenvalue of 𝑝(𝑇) if and only if 𝛼= 𝑝(𝜆) for
some eigenvalue 𝜆of 𝑇.
Give an example of an operator on 𝐑2 that shows the result in Exercise 4
does not hold if 𝐂is replaced with 𝐑.
Suppose 𝑇∈ℒ(𝐅2) is defined by 𝑇(𝑤, 𝑧) = (−𝑧, 𝑤). Find the minimal
polynomial of 𝑇.
(a) Give an example of 𝑆, 𝑇∈ℒ(𝐅2) such that the minimal polynomial of
𝑆𝑇does not equal the minimal polynomial of 𝑇𝑆.
(b) Suppose 𝑉is finite-dimensional and 𝑆, 𝑇∈ℒ(𝑉). Prove that if at least
one of 𝑆, 𝑇is invertible, then the minimal polynomial of 𝑆𝑇equals the
minimal polynomial of 𝑇𝑆.
Hint: Show that if 𝑆is invertible and 𝑝∈𝒫(𝐅), then 𝑝(𝑇𝑆) = 𝑆−1𝑝(𝑆𝑇)𝑆.
Suppose 𝑇∈ℒ(𝐑2) is the operator of counterclockwise rotation by 1∘. Find
the minimal polynomial of 𝑇.
Because dim 𝐑2 = 2, the degree of the minimal polynomial of 𝑇is at most 2.
Thus the minimal polynomial of 𝑇is not the tempting polynomial 𝑥180 + 1,
even though 𝑇180 = −𝐼.
Suppose 𝑇∈ℒ(𝑉) is such that with respect to some basis of 𝑉, all entries
of the matrix of 𝑇are rational numbers. Explain why all coefficients of the
minimal polynomial of 𝑇are rational numbers.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝑣∈𝑉. Prove that
span(𝑣, 𝑇𝑣, … , 𝑇𝑚𝑣) = span(𝑣, 𝑇𝑣, … , 𝑇dim 𝑉−1𝑣)
for all integers 𝑚≥dim 𝑉−1.
Suppose 𝑉is a two-dimensional vector space, 𝑇∈ℒ(𝑉), and the matrix of
𝑇with respect to some basis of 𝑉is ( 𝑎
𝑐
𝑏
𝑑).
(a) Show that 𝑇2 −(𝑎+ 𝑑)𝑇+ (𝑎𝑑−𝑏𝑐)𝐼= 0.
(b) Show that the minimal polynomial of 𝑇equals
⎧{
⎨{⎩
𝑧−𝑎
if 𝑏= 𝑐= 0 and 𝑎= 𝑑,
𝑧2 −(𝑎+ 𝑑)𝑧+ (𝑎𝑑−𝑏𝑐)
otherwise.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
Define 𝑇∈ℒ(𝐅𝑛) by 𝑇(𝑥1, 𝑥2, 𝑥3, … , 𝑥𝑛) = (𝑥1, 2𝑥2, 3𝑥3, … , 𝑛𝑥𝑛). Find
the minimal polynomial of 𝑇.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝑝∈𝒫(𝐅). Prove that
there exists a unique 𝑟∈𝒫(𝐅) such that 𝑝(𝑇) = 𝑟(𝑇) and deg 𝑟is less than
the degree of the minimal polynomial of 𝑇.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉) has minimal polynomial
4 + 5𝑧−6𝑧2 −7𝑧3 + 2𝑧4 + 𝑧5. Find the minimal polynomial of 𝑇−1.
Suppose 𝑉is a finite-dimensional complex vector space with dim 𝑉> 0
and 𝑇∈ℒ(𝑉). Define 𝑓∶𝐂→𝐑by
𝑓(𝜆) = dim range(𝑇−𝜆𝐼).
Prove that 𝑓is not a continuous function.
Suppose 𝑎0, … , 𝑎𝑛−1 ∈𝐅. Let 𝑇be the operator on 𝐅𝑛whose matrix (with
respect to the standard basis) is
⎛⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜
⎝
−𝑎0
−𝑎1
⋱
−𝑎2
⋱
⋮
−𝑎𝑛−2
−𝑎𝑛−1
⎞⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟
⎠
.
Here all entries of the matrix are 0 except for all 1’s on the line under the
diagonal and the entries in the last column (some of which might also be 0).
Show that the minimal polynomial of 𝑇is the polynomial
𝑎0 + 𝑎1𝑧+ ⋯+ 𝑎𝑛−1𝑧𝑛−1 + 𝑧𝑛.
The matrix above is called the companion matrix of the polynomial above.
This exercise shows that every monic polynomial is the minimal polynomial
of some operator. Hence a formula or an algorithm that could produce
exact eigenvalues for each operator on each 𝐅𝑛could then produce exact
zeros for each polynomial [by 5.27(a)]. Thus there is no such formula or
algorithm. However, efficient numerical methods exist for obtaining very
good approximations for the eigenvalues of an operator.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝑝is the minimal polynomial
of 𝑇. Suppose 𝜆∈𝐅. Show that the minimal polynomial of 𝑇−𝜆𝐼is the
polynomial 𝑞defined by 𝑞(𝑧) = 𝑝(𝑧+ 𝜆).
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝑝is the minimal polynomial
of 𝑇. Suppose 𝜆∈𝐅\{0}. Show that the minimal polynomial of 𝜆𝑇is the
polynomial 𝑞defined by 𝑞(𝑧) = 𝜆deg 𝑝𝑝( 𝑧
𝜆).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5B
The Minimal Polynomial
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Let ℰbe the subspace of
ℒ(𝑉) defined by
ℰ= {𝑞(𝑇) ∶𝑞∈𝒫(𝐅)}.
Prove that dim ℰequals the degree of the minimal polynomial of 𝑇.
Suppose 𝑇∈ℒ(𝐅4) is such that the eigenvalues of 𝑇are 3, 5, 8. Prove that
(𝑇−3𝐼)2(𝑇−5𝐼)2(𝑇−8𝐼)2 = 0.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that the minimal
polynomial of 𝑇has degree at most 1 + dim range 𝑇.
If dim range 𝑇< dim 𝑉−1, then this exercise gives a better upper bound
than 5.22 for the degree of the minimal polynomial of 𝑇.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that 𝑇is invertible if
and only if 𝐼∈span(𝑇, 𝑇2, … , 𝑇dim 𝑉).
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Let 𝑛= dim 𝑉. Prove that
if 𝑣∈𝑉, then span(𝑣, 𝑇𝑣, … , 𝑇𝑛−1𝑣) is invariant under 𝑇.
Suppose 𝑉is a finite-dimensional complex vector space. Suppose 𝑇∈ℒ(𝑉)
is such that 5 and 6 are eigenvalues of 𝑇and that 𝑇has no other eigenvalues.
Prove that (𝑇−5𝐼)dim 𝑉−1(𝑇−6𝐼)dim 𝑉−1 = 0.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝑈is a subspace of 𝑉that
is invariant under 𝑇.
(a) Prove that the minimal polynomial of 𝑇is a polynomial multiple of the
minimal polynomial of the quotient operator 𝑇/𝑈.
(b) Prove that
(minimal polynomial of 𝑇|𝑈) × (minimal polynomial of 𝑇/𝑈)
is a polynomial multiple of the minimal polynomial of 𝑇.
The quotient operator 𝑇/𝑈was defined in Exercise 38 in Section 5A.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝑈is a subspace of 𝑉that
is invariant under 𝑇. Prove that the set of eigenvalues of 𝑇equals the union
of the set of eigenvalues of 𝑇|𝑈and the set of eigenvalues of 𝑇/𝑈.
Suppose 𝐅= 𝐑, 𝑉is finite-dimensional, and 𝑇∈ℒ(𝑉). Prove that the
minimal polynomial of 𝑇𝐂equals the minimal polynomial of 𝑇.
The complexification 𝑇𝐂was defined in Exercise 33 of Section 3B.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that the minimal
polynomial of 𝑇′ ∈ℒ(𝑉′) equals the minimal polynomial of 𝑇.
The dual map 𝑇′ was defined in Section 3F.
Show that every operator on a finite-dimensional vector space of dimension
at least two has an invariant subspace of dimension two.
Exercise 6 in Section 5C will give an improvement of this result when 𝐅= 𝐂.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
5C Upper-Triangular Matrices
In Chapter 3 we defined the matrix of a linear map from a finite-dimensional vector
space to another finite-dimensional vector space. That matrix depends on a choice
of basis of each of the two vector spaces. Now that we are studying operators,
which map a vector space to itself, the emphasis is on using only one basis.
5.35
definition: matrix of an operator, ℳ(𝑇)
Suppose 𝑇∈ℒ(𝑉). The matrix of 𝑇with respect to a basis 𝑣1, … , 𝑣𝑛of 𝑉is
the 𝑛-by-𝑛matrix
ℳ(𝑇) = ⎛⎜⎜⎜
⎝
𝐴1,1
⋯
𝐴1,𝑛
⋮
⋮
𝐴𝑛,1
⋯
𝐴𝑛,𝑛
⎞⎟⎟⎟
⎠
whose entries 𝐴𝑗,𝑘are defined by
𝑇𝑣𝑘= 𝐴1,𝑘𝑣1 + ⋯+ 𝐴𝑛,𝑘𝑣𝑛.
The notation ℳ(𝑇, (𝑣1, … , 𝑣𝑛)) is used if the basis is not clear from the
context.
Operators have square matrices (meaning that the number of rows equals the
number of columns), rather than the more general rectangular matrices that we
considered earlier for linear maps.
The 𝑘th column of the matrix ℳ(𝑇) is
formed from the coefficients used to
write 𝑇𝑣𝑘as a linear combination of
the basis 𝑣1, … , 𝑣𝑛.
If 𝑇is an operator on 𝐅𝑛and no ba-
sis is specified, assume that the basis in
question is the standard one (where the
𝑘th basis vector is 1 in the 𝑘th slot and 0
in all other slots). You can then think of
the 𝑘th column of ℳ(𝑇) as 𝑇applied to the 𝑘th basis vector, where we identify
𝑛-by-1 column vectors with elements of 𝐅𝑛.
5.36
example: matrix of an operator with respect to standard basis
Define 𝑇∈ℒ(𝐅3) by 𝑇(𝑥, 𝑦, 𝑧) = (2𝑥+ 𝑦, 5𝑦+ 3𝑧, 8𝑧). Then the matrix of 𝑇
with respect to the standard basis of 𝐅3 is
ℳ(𝑇) = ⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
,
as you should verify.
A central goal of linear algebra is to show that given an operator 𝑇on a finite-
dimensional vector space 𝑉, there exists a basis of 𝑉with respect to which 𝑇has
a reasonably simple matrix. To make this vague formulation a bit more precise,
we might try to choose a basis of 𝑉such that ℳ(𝑇) has many 0’s.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5C
Upper-Triangular Matrices
If 𝑉is a finite-dimensional complex vector space, then we already know
enough to show that there is a basis of 𝑉with respect to which the matrix of 𝑇
has 0’s everywhere in the first column, except possibly the first entry. In other
words, there is a basis of 𝑉with respect to which the matrix of 𝑇looks like
⎛⎜⎜⎜⎜⎜⎜
⎝
𝜆
∗
⋮
⎞⎟⎟⎟⎟⎟⎟
⎠
;
here ∗denotes the entries in all columns other than the first column. To prove
this, let 𝜆be an eigenvalue of 𝑇(one exists by 5.19) and let 𝑣be a corresponding
eigenvector. Extend 𝑣to a basis of 𝑉. Then the matrix of 𝑇with respect to this
basis has the form above. Soon we will see that we can choose a basis of 𝑉with
respect to which the matrix of 𝑇has even more 0’s.
5.37
definition: diagonal of a matrix
The diagonal of a square matrix consists of the entries on the line from the
upper left corner to the bottom right corner.
For example, the diagonal of the matrix
ℳ(𝑇) = ⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
from Example 5.36 consists of the entries 2, 5, 8, which are shown in red in the
matrix above.
5.38
definition: upper-triangular matrix
A square matrix is called upper triangular if all entries below the diagonal
are 0.
For example, the 3-by-3 matrix above is upper triangular.
Typically we represent an upper-triangular matrix in the form
⎛⎜⎜⎜
⎝
𝜆1
∗
⋱
𝜆𝑛
⎞⎟⎟⎟
⎠
;
We often use ∗to denote matrix entries
that we do not know or that are irrele-
vant to the questions being discussed.
the 0 in the matrix above indicates that
all entries below the diagonal in this
𝑛-by-𝑛matrix equal 0. Upper-triangular
matrices can be considered reasonably
simple—if 𝑛is large, then at least almost half the entries in an 𝑛-by-𝑛upper-
triangular matrix are 0.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
The next result provides a useful connection between upper-triangular matrices
and invariant subspaces.
5.39
conditions for upper-triangular matrix
Suppose 𝑇∈ℒ(𝑉) and 𝑣1, … , 𝑣𝑛is a basis of 𝑉. Then the following are
equivalent.
(a) The matrix of 𝑇with respect to 𝑣1, … , 𝑣𝑛is upper triangular.
(b) span(𝑣1, … , 𝑣𝑘) is invariant under 𝑇for each 𝑘= 1, … , 𝑛.
(c) 𝑇𝑣𝑘∈span(𝑣1, … , 𝑣𝑘) for each 𝑘= 1, … , 𝑛.
Proof
First suppose (a) holds. To prove that (b) holds, suppose 𝑘∈{1, … , 𝑛}.
If 𝑗∈{1, … , 𝑛}, then
𝑇𝑣𝑗∈span(𝑣1, … , 𝑣𝑗)
because the matrix of 𝑇with respect to 𝑣1, … , 𝑣𝑛is upper triangular. Because
span(𝑣1, … , 𝑣𝑗) ⊆span(𝑣1, … , 𝑣𝑘) if 𝑗≤𝑘, we see that
𝑇𝑣𝑗∈span(𝑣1, … , 𝑣𝑘)
for each 𝑗∈{1, … , 𝑘}. Thus span(𝑣1, … , 𝑣𝑘) is invariant under 𝑇, completing the
proof that (a) implies (b).
Now suppose (b) holds, so span(𝑣1, … , 𝑣𝑘) is invariant under 𝑇for each
𝑘= 1, … , 𝑛. In particular, 𝑇𝑣𝑘∈span(𝑣1, … , 𝑣𝑘) for each 𝑘= 1, … , 𝑛. Thus
(b) implies (c).
Now suppose (c) holds, so 𝑇𝑣𝑘∈span(𝑣1, … , 𝑣𝑘) for each 𝑘= 1, … , 𝑛. This
means that when writing each 𝑇𝑣𝑘as a linear combination of the basis vectors
𝑣1, … , 𝑣𝑛, we need to use only the vectors 𝑣1, … , 𝑣𝑘. Hence all entries under the
diagonal of ℳ(𝑇) are 0. Thus ℳ(𝑇) is an upper-triangular matrix, completing
the proof that (c) implies (a).
We have shown that (a) ⟹(b) ⟹(c) ⟹(a), which shows that (a), (b),
and (c) are equivalent.
The next result tells us that if 𝑇∈ℒ(𝑉) and with respect to some basis of 𝑉
we have
ℳ(𝑇) = ⎛⎜⎜⎜
⎝
𝜆1
∗
⋱
𝜆𝑛
⎞⎟⎟⎟
⎠
,
then 𝑇satisfies a simple equation depending on 𝜆1, … , 𝜆𝑛.
5.40
equation satisfied by operator with upper-triangular matrix
Suppose 𝑇∈ℒ(𝑉) and 𝑉has a basis with respect to which 𝑇has an upper-
triangular matrix with diagonal entries 𝜆1, … , 𝜆𝑛. Then
(𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑛𝐼) = 0.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5C
Upper-Triangular Matrices
Proof
Let 𝑣1, … , 𝑣𝑛denote a basis of 𝑉with respect to which 𝑇has an upper-
triangular matrix with diagonal entries 𝜆1, … , 𝜆𝑛. Then 𝑇𝑣1 = 𝜆1𝑣1, which
means that (𝑇−𝜆1𝐼)𝑣1 = 0, which implies that (𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑚𝐼)𝑣1 = 0
for 𝑚= 1, … , 𝑛(using the commutativity of each 𝑇−𝜆𝑗𝐼with each 𝑇−𝜆𝑘𝐼).
Note that (𝑇−𝜆2𝐼)𝑣2 ∈span(𝑣1). Thus (𝑇−𝜆1𝐼)(𝑇−𝜆2𝐼)𝑣2 = 0 (by
the previous paragraph), which implies that (𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑚𝐼)𝑣2 = 0 for
𝑚= 2, … , 𝑛(using the commutativity of each 𝑇−𝜆𝑗𝐼with each 𝑇−𝜆𝑘𝐼).
Note that (𝑇−𝜆3𝐼)𝑣3 ∈span(𝑣1, 𝑣2). Thus by the previous paragraph,
(𝑇−𝜆1𝐼)(𝑇−𝜆2𝐼)(𝑇−𝜆3𝐼)𝑣3 = 0, which implies that (𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑚𝐼)𝑣3 =
0 for 𝑚= 3, … , 𝑛(using the commutativity of each 𝑇−𝜆𝑗𝐼with each 𝑇−𝜆𝑘𝐼).
Continuing this pattern, we see that (𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑛𝐼)𝑣𝑘= 0 for each
𝑘= 1, … , 𝑛. Thus (𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑛𝐼) is the 0 operator because it is 0 on each
vector in a basis of 𝑉.
Unfortunately no method exists for exactly computing the eigenvalues of an
operator from its matrix. However, if we are fortunate enough to find a basis with
respect to which the matrix of the operator is upper triangular, then the problem
of computing the eigenvalues becomes trivial, as the next result shows.
5.41
determination of eigenvalues from upper-triangular matrix
Suppose 𝑇∈ℒ(𝑉) has an upper-triangular matrix with respect to some basis
of 𝑉. Then the eigenvalues of 𝑇are precisely the entries on the diagonal of
that upper-triangular matrix.
Proof
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉with respect to which 𝑇has an upper-
triangular matrix
ℳ(𝑇) = ⎛⎜⎜⎜
⎝
𝜆1
∗
⋱
𝜆𝑛
⎞⎟⎟⎟
⎠
.
Because 𝑇𝑣1 = 𝜆1𝑣1, we see that 𝜆1 is an eigenvalue of 𝑇.
Suppose 𝑘∈{2, … , 𝑛}. Then (𝑇−𝜆𝑘𝐼)𝑣𝑘∈span(𝑣1, … , 𝑣𝑘−1). Thus 𝑇−𝜆𝑘𝐼
maps span(𝑣1, … , 𝑣𝑘) into span(𝑣1, … , 𝑣𝑘−1). Because
dim span(𝑣1, … , 𝑣𝑘) = 𝑘
and
dim span(𝑣1, … , 𝑣𝑘−1) = 𝑘−1,
this implies that 𝑇−𝜆𝑘𝐼restricted to span(𝑣1, … , 𝑣𝑘) is not injective (by 3.22).
Thus there exists 𝑣∈span(𝑣1, … , 𝑣𝑘) such that 𝑣≠0 and (𝑇−𝜆𝑘𝐼)𝑣= 0. Thus
𝜆𝑘is an eigenvalue of 𝑇. Hence we have shown that every entry on the diagonal
of ℳ(𝑇) is an eigenvalue of 𝑇.
To prove 𝑇has no other eigenvalues, let 𝑞be the polynomial defined by
𝑞(𝑧) = (𝑧−𝜆1) ⋯(𝑧−𝜆𝑛). Then 𝑞(𝑇) = 0 (by 5.40). Hence 𝑞is a polynomial
multiple of the minimal polynomial of 𝑇(by 5.29). Thus every zero of the minimal
polynomial of 𝑇is a zero of 𝑞. Because the zeros of the minimal polynomial of
𝑇are the eigenvalues of 𝑇(by 5.27), this implies that every eigenvalue of 𝑇is a
zero of 𝑞. Hence the eigenvalues of 𝑇are all contained in the list 𝜆1, … , 𝜆𝑛.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
5.42
example: eigenvalues via an upper-triangular matrix
Define 𝑇∈ℒ(𝐅3) by 𝑇(𝑥, 𝑦, 𝑧) = (2𝑥+ 𝑦, 5𝑦+ 3𝑧, 8𝑧). The matrix of 𝑇with
respect to the standard basis is
ℳ(𝑇) = ⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
.
Now 5.41 implies that the eigenvalues of 𝑇are 2, 5, and 8.
The next example illustrates 5.44: an operator has an upper-triangular matrix
with respect to some basis if and only if the minimal polynomial of the operator
is the product of polynomials of degree 1.
5.43
example: whether 𝑇has an upper-triangular matrix can depend on 𝐅
Define 𝑇∈ℒ(𝐅4) by
𝑇(𝑧1, 𝑧2, 𝑧3, 𝑧4) = (−𝑧2, 𝑧1, 2𝑧1 + 3𝑧3, 𝑧3 + 3𝑧4).
Thus with respect to the standard basis of 𝐅4, the matrix of 𝑇is
⎛⎜⎜⎜⎜⎜⎜
⎝
−1
⎞⎟⎟⎟⎟⎟⎟
⎠
.
You can ask a computer to verify that the minimal polynomial of 𝑇is the polyno-
mial 𝑝defined by
𝑝(𝑧) = 9 −6𝑧+ 10𝑧2 −6𝑧3 + 𝑧4.
First consider the case 𝐅= 𝐑. Then the polynomial 𝑝factors as
𝑝(𝑧) = (𝑧2 + 1)(𝑧−3)(𝑧−3),
with no further factorization of 𝑧2 + 1 as the product of two polynomials of degree
1 with real coefficients. Thus 5.44 states that there does not exist a basis of 𝐑4
with respect to which 𝑇has an upper-triangular matrix.
Now consider the case 𝐅= 𝐂. Then the polynomial 𝑝factors as
𝑝(𝑧) = (𝑧−𝑖)(𝑧+ 𝑖)(𝑧−3)(𝑧−3),
where all factors above have the form 𝑧−𝜆𝑘. Thus 5.44 states that there is a basis of
𝐂4 with respect to which 𝑇has an upper-triangular matrix. Indeed, you can verify
that with respect to the basis (4−3𝑖, −3−4𝑖, −3+𝑖, 1), (4+3𝑖, −3+4𝑖, −3−𝑖, 1),
(0, 0, 0, 1), (0, 0, 1, 0) of 𝐂4, the operator 𝑇has the upper-triangular matrix
⎛⎜⎜⎜⎜⎜⎜
⎝
𝑖
−𝑖
⎞⎟⎟⎟⎟⎟⎟
⎠
.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5C
Upper-Triangular Matrices
5.44
necessary and sufficient condition to have an upper-triangular matrix
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Then 𝑇has an upper-
triangular matrix with respect to some basis of 𝑉if and only if the minimal
polynomial of 𝑇equals (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚) for some 𝜆1, … , 𝜆𝑚∈𝐅.
Proof
First suppose 𝑇has an upper-triangular matrix with respect to some basis
of 𝑉. Let 𝛼1, … , 𝛼𝑛denote the diagonal entries of that matrix. Define a polynomial
𝑞∈𝒫(𝐅) by
𝑞(𝑧) = (𝑧−𝛼1) ⋯(𝑧−𝛼𝑛).
Then 𝑞(𝑇) = 0, by 5.40. Hence 𝑞is a polynomial multiple of the minimal polyno-
mial of 𝑇, by 5.29. Thus the minimal polynomial of 𝑇equals (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚)
for some 𝜆1, … , 𝜆𝑚∈𝐅with {𝜆1, … , 𝜆𝑚} ⊆{𝛼1, … , 𝛼𝑛}.
To prove the implication in the other direction, now suppose the minimal
polynomial of 𝑇equals (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚) for some 𝜆1, … , 𝜆𝑚∈𝐅. We will use
induction on 𝑚. To get started, if 𝑚= 1 then 𝑧−𝜆1 is the minimal polynomial of
𝑇, which implies that 𝑇= 𝜆1𝐼, which implies that the matrix of 𝑇(with respect
to any basis of 𝑉) is upper triangular.
Now suppose 𝑚> 1 and the desired result holds for all smaller positive
integers. Let
𝑈= range(𝑇−𝜆𝑚𝐼).
Then 𝑈is invariant under 𝑇[this is a special case of 5.18 with 𝑝(𝑧) = 𝑧−𝜆𝑚].
Thus 𝑇|𝑈is an operator on 𝑈.
If 𝑢∈𝑈, then 𝑢= (𝑇−𝜆𝑚𝐼)𝑣for some 𝑣∈𝑉and
(𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑚−1𝐼)𝑢= (𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑚𝐼)𝑣= 0.
Hence (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚−1) is a polynomial multiple of the minimal polynomial
of 𝑇|𝑈, by 5.29. Thus the minimal polynomial of 𝑇|𝑈is the product of at most
𝑚−1 terms of the form 𝑧−𝜆𝑘.
By our induction hypothesis, there is a basis 𝑢1, … , 𝑢𝑀of 𝑈with respect to
which 𝑇|𝑈has an upper-triangular matrix. Thus for each 𝑘∈{1, … , 𝑀}, we have
(using 5.39)
5.45
𝑇𝑢𝑘= (𝑇|𝑈)(𝑢𝑘) ∈span(𝑢1, … , 𝑢𝑘).
Extend 𝑢1, … , 𝑢𝑀to a basis 𝑢1, … , 𝑢𝑀, 𝑣1, … , 𝑣𝑁of 𝑉. If 𝑘∈{1, … , 𝑁}, then
𝑇𝑣𝑘= (𝑇−𝜆𝑚𝐼)𝑣𝑘+ 𝜆𝑚𝑣𝑘.
The definition of 𝑈shows that (𝑇−𝜆𝑚𝐼)𝑣𝑘∈𝑈= span(𝑢1, … , 𝑢𝑀). Thus the
equation above shows that
5.46
𝑇𝑣𝑘∈span(𝑢1, … , 𝑢𝑀, 𝑣1, … , 𝑣𝑘).
From 5.45 and 5.46, we conclude (using 5.39) that 𝑇has an upper-triangular
matrix with respect to the basis 𝑢1, … , 𝑢𝑀, 𝑣1, … , 𝑣𝑁of 𝑉, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
The set of numbers {𝜆1, … , 𝜆𝑚} from the previous result equals the set of
eigenvalues of 𝑇(because the set of zeros of the minimal polynomial of 𝑇equals
the set of eigenvalues of 𝑇, by 5.27), although the list 𝜆1, … , 𝜆𝑚in the previous
result may contain repetitions.
In Chapter 8 we will improve even the wonderful result below; see 8.37 and
8.46.
5.47
if 𝐅= 𝐂, then every operator on 𝑉has an upper-triangular matrix
Suppose 𝑉is a finite-dimensional complex vector space and 𝑇∈ℒ(𝑉). Then
𝑇has an upper-triangular matrix with respect to some basis of 𝑉.
Proof
The desired result follows immediately from 5.44 and the second version
of the fundamental theorem of algebra (see 4.13).
For an extension of the result above to two operators 𝑆and 𝑇such that
𝑆𝑇= 𝑇𝑆,
see 5.80. Also, for an extension to more than two operators, see Exercise 9(b) in
Section 5E.
Caution: If an operator 𝑇∈ℒ(𝑉) has an upper-triangular matrix with respect
to some basis 𝑣1, … , 𝑣𝑛of 𝑉, then the eigenvalues of 𝑇are exactly the entries on
the diagonal of ℳ(𝑇), as shown by 5.41, and furthermore 𝑣1 is an eigenvector of
𝑇. However, 𝑣2, … , 𝑣𝑛need not be eigenvectors of 𝑇. Indeed, a basis vector 𝑣𝑘is
an eigenvector of 𝑇if and only if all entries in the 𝑘th column of the matrix of 𝑇
are 0, except possibly the 𝑘th entry.
The row echelon form of the matrix
of an operator does not give us a list
of the eigenvalues of the operator. In
contrast, an upper-triangular matrix
with respect to some basis gives us a
list of all the eigenvalues of the op-
erator. However, there is no method
for computing exactly such an upper-
triangular matrix, even though 5.47
guarantees its existence if 𝐅= 𝐂.
You may recall from a previous
course that every matrix of numbers can
be changed to a matrix in what is called
row echelon form. If one begins with a
square matrix, the matrix in row echelon
form will be an upper-triangular matrix.
Do not confuse this upper-triangular ma-
trix with the upper-triangular matrix of
an operator with respect to some basis
whose existence is proclaimed by 5.47 (if
𝐅= 𝐂)—there is no connection between
these upper-triangular matrices.
Exercises 5C
Prove or give a counterexample: If 𝑇∈ℒ(𝑉) and 𝑇2 has an upper-triangular
matrix with respect to some basis of 𝑉, then 𝑇has an upper-triangular matrix
with respect to some basis of 𝑉.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5C
Upper-Triangular Matrices
Suppose 𝐴and 𝐵are upper-triangular matrices of the same size, with
𝛼1, … , 𝛼𝑛on the diagonal of 𝐴and 𝛽1, … , 𝛽𝑛on the diagonal of 𝐵.
(a) Show that 𝐴+ 𝐵is an upper-triangular matrix with 𝛼1 + 𝛽1, … , 𝛼𝑛+ 𝛽𝑛
on the diagonal.
(b) Show that 𝐴𝐵is an upper-triangular matrix with 𝛼1𝛽1, … , 𝛼𝑛𝛽𝑛on the
diagonal.
The results in this exercise are used in the proof of 5.81.
Suppose 𝑇∈ℒ(𝑉) is invertible and 𝑣1, … , 𝑣𝑛is a basis of 𝑉with respect
to which the matrix of 𝑇is upper triangular, with 𝜆1, … , 𝜆𝑛on the diagonal.
Show that the matrix of 𝑇−1 is also upper triangular with respect to the basis
𝑣1, … , 𝑣𝑛, with
𝜆1
, … , 1
𝜆𝑛
on the diagonal.
Give an example of an operator whose matrix with respect to some basis
contains only 0’s on the diagonal, but the operator is invertible.
This exercise and the exercise below show that 5.41 fails without the hypoth-
esis that an upper-triangular matrix is under consideration.
Give an example of an operator whose matrix with respect to some basis
contains only nonzero numbers on the diagonal, but the operator is not
invertible.
Suppose 𝐅= 𝐂, 𝑉is finite-dimensional, and 𝑇∈ℒ(𝑉). Prove that if
𝑘∈{1, … , dim 𝑉}, then 𝑉has a 𝑘-dimensional subspace invariant under 𝑇.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝑣∈𝑉.
(a) Prove that there exists a unique monic polynomial 𝑝𝑣of smallest degree
such that 𝑝𝑣(𝑇)𝑣= 0.
(b) Prove that the minimal polynomial of 𝑇is a polynomial multiple of 𝑝𝑣.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and there exists a nonzero
vector 𝑣∈𝑉such that 𝑇2𝑣+ 2𝑇𝑣= −2𝑣.
(a) Prove that if 𝐅= 𝐑, then there does not exist a basis of 𝑉with respect
to which 𝑇has an upper-triangular matrix.
(b) Prove that if 𝐅= 𝐂and 𝐴is an upper-triangular matrix that equals
the matrix of 𝑇with respect to some basis of 𝑉, then −1 + 𝑖or −1 −𝑖
appears on the diagonal of 𝐴.
Suppose 𝐵is a square matrix with complex entries. Prove that there exists
an invertible square matrix 𝐴with complex entries such that 𝐴−1𝐵𝐴is an
upper-triangular matrix.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
Suppose 𝑇∈ℒ(𝑉) and 𝑣1, … , 𝑣𝑛is a basis of 𝑉. Show that the following
are equivalent.
(a) The matrix of 𝑇with respect to 𝑣1, … , 𝑣𝑛is lower triangular.
(b) span(𝑣𝑘, … , 𝑣𝑛) is invariant under 𝑇for each 𝑘= 1, … , 𝑛.
(c) 𝑇𝑣𝑘∈span(𝑣𝑘, … , 𝑣𝑛) for each 𝑘= 1, … , 𝑛.
A square matrix is called lower triangular if all entries above the diagonal
are 0.
Suppose 𝐅= 𝐂and 𝑉is finite-dimensional. Prove that if 𝑇∈ℒ(𝑉), then
there exists a basis of 𝑉with respect to which 𝑇has a lower-triangular
matrix.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉) has an upper-triangular matrix
with respect to some basis of 𝑉, and 𝑈is a subspace of 𝑉that is invariant
under 𝑇.
(a) Prove that 𝑇|𝑈has an upper-triangular matrix with respect to some basis
of 𝑈.
(b) Prove that the quotient operator 𝑇/𝑈has an upper-triangular matrix
with respect to some basis of 𝑉/𝑈.
The quotient operator 𝑇/𝑈was defined in Exercise 38 in Section 5A.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Suppose there exists
a subspace 𝑈of 𝑉that is invariant under 𝑇such that 𝑇|𝑈has an upper-
triangular matrix with respect to some basis of 𝑈and also 𝑇/𝑈has an
upper-triangular matrix with respect to some basis of 𝑉/𝑈. Prove that 𝑇has
an upper-triangular matrix with respect to some basis of 𝑉.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that 𝑇has an upper-
triangular matrix with respect to some basis of 𝑉if and only if the dual
operator 𝑇′ has an upper-triangular matrix with respect to some basis of the
dual space 𝑉′.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5D
Diagonalizable Operators
5D Diagonalizable Operators
Diagonal Matrices
5.48
definition: diagonal matrix
A diagonal matrix is a square matrix that is 0 everywhere except possibly on
the diagonal.
5.49
example: diagonal matrix
⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
is a diagonal matrix.
Every diagonal matrix is upper tri-
angular. Diagonal matrices typically
have many more 0’s than most upper-
triangular matrices of the same size.
If an operator has a diagonal matrix
with respect to some basis, then the en-
tries on the diagonal are precisely the
eigenvalues of the operator; this follows
from 5.41 (or find an easier direct proof
for diagonal matrices).
5.50
definition: diagonalizable
An operator on 𝑉is called diagonalizable if the operator has a diagonal matrix
with respect to some basis of 𝑉.
5.51
example: diagonalization may require a different basis
Define 𝑇∈ℒ(𝐑2) by
𝑇(𝑥, 𝑦) = (41𝑥+ 7𝑦, −20𝑥+ 74𝑦).
The matrix of 𝑇with respect to the standard basis of 𝐑2 is
(
−20
74 ) ,
which is not a diagonal matrix. However, 𝑇is diagonalizable. Specifically, the
matrix of 𝑇with respect to the basis (1, 4), (7, 5) is
( 69
46 )
because 𝑇(1, 4) = (69, 276) = 69(1, 4) and 𝑇(7, 5) = (322, 230) = 46(7, 5).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
For 𝜆∈𝐅, we will find it convenient to have a name and a notation for the set
of vectors that an operator 𝑇maps to 𝜆times the vector.
5.52
definition: eigenspace, 𝐸(𝜆, 𝑇)
Suppose 𝑇∈ℒ(𝑉) and 𝜆∈𝐅. The eigenspace of 𝑇corresponding to 𝜆is
the subspace 𝐸(𝜆, 𝑇) of 𝑉defined by
𝐸(𝜆, 𝑇) = null(𝑇−𝜆𝐼) = {𝑣∈𝑉∶𝑇𝑣= 𝜆𝑣}.
Hence 𝐸(𝜆, 𝑇) is the set of all eigenvectors of 𝑇corresponding to 𝜆, along
with the 0 vector.
For 𝑇∈ℒ(𝑉) and 𝜆∈𝐅, the set 𝐸(𝜆, 𝑇) is a subspace of 𝑉because the null
space of each linear map on 𝑉is a subspace of 𝑉. The definitions imply that 𝜆is
an eigenvalue of 𝑇if and only if 𝐸(𝜆, 𝑇) ≠{0}.
5.53
example: eigenspaces of an operator
Suppose the matrix of an operator 𝑇∈ℒ(𝑉) with respect to a basis 𝑣1, 𝑣2, 𝑣3
of 𝑉is the matrix in Example 5.49. Then
𝐸(8, 𝑇) = span(𝑣1),
𝐸(5, 𝑇) = span(𝑣2, 𝑣3).
If 𝜆is an eigenvalue of an operator 𝑇∈ℒ(𝑉), then 𝑇restricted to 𝐸(𝜆, 𝑇) is
just the operator of multiplication by 𝜆.
5.54
sum of eigenspaces is a direct sum
Suppose 𝑇∈ℒ(𝑉) and 𝜆1, … , 𝜆𝑚are distinct eigenvalues of 𝑇. Then
𝐸(𝜆1, 𝑇) + ⋯+ 𝐸(𝜆𝑚, 𝑇)
is a direct sum. Furthermore, if 𝑉is finite-dimensional, then
dim 𝐸(𝜆1, 𝑇) + ⋯+ dim 𝐸(𝜆𝑚, 𝑇) ≤dim 𝑉.
Proof
To show that 𝐸(𝜆1, 𝑇) + ⋯+ 𝐸(𝜆𝑚, 𝑇) is a direct sum, suppose
𝑣1 + ⋯+ 𝑣𝑚= 0,
where each 𝑣𝑘is in 𝐸(𝜆𝑘, 𝑇). Because eigenvectors corresponding to distinct
eigenvalues are linearly independent (by 5.11), this implies that each 𝑣𝑘equals 0.
Thus 𝐸(𝜆1, 𝑇) + ⋯+ 𝐸(𝜆𝑚, 𝑇) is a direct sum (by 1.45), as desired.
Now suppose 𝑉is finite-dimensional. Then
dim 𝐸(𝜆1, 𝑇) + ⋯+ dim 𝐸(𝜆𝑚, 𝑇) = dim(𝐸(𝜆1, 𝑇) ⊕⋯⊕𝐸(𝜆𝑚, 𝑇))
≤dim 𝑉,
where the first line follows from 3.94 and the second line follows from 2.37.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5D
Diagonalizable Operators
Conditions for Diagonalizability
The following characterizations of diagonalizable operators will be useful.
5.55
conditions equivalent to diagonalizability
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Let 𝜆1, … , 𝜆𝑚denote the
distinct eigenvalues of 𝑇. Then the following are equivalent.
(a) 𝑇is diagonalizable.
(b) 𝑉has a basis consisting of eigenvectors of 𝑇.
(c) 𝑉= 𝐸(𝜆1, 𝑇) ⊕⋯⊕𝐸(𝜆𝑚, 𝑇).
(d) dim 𝑉= dim 𝐸(𝜆1, 𝑇) + ⋯+ dim 𝐸(𝜆𝑚, 𝑇).
Proof
An operator 𝑇∈ℒ(𝑉) has a diagonal matrix
⎛⎜⎜⎜
⎝
𝜆1
⋱
𝜆𝑛
⎞⎟⎟⎟
⎠
with respect to a basis 𝑣1, … , 𝑣𝑛of 𝑉if and only if 𝑇𝑣𝑘= 𝜆𝑘𝑣𝑘for each 𝑘. Thus
(a) and (b) are equivalent.
Suppose (b) holds; thus 𝑉has a basis consisting of eigenvectors of 𝑇. Hence
every vector in 𝑉is a linear combination of eigenvectors of 𝑇, which implies that
𝑉= 𝐸(𝜆1, 𝑇) + ⋯+ 𝐸(𝜆𝑚, 𝑇).
Now 5.54 shows that (c) holds, proving that (b) implies (c).
That (c) implies (d) follows immediately from 3.94.
Finally, suppose (d) holds; thus
5.56
dim 𝑉= dim 𝐸(𝜆1, 𝑇) + ⋯+ dim 𝐸(𝜆𝑚, 𝑇).
Choose a basis of each 𝐸(𝜆𝑘, 𝑇); put all these bases together to form a list 𝑣1, … , 𝑣𝑛
of eigenvectors of 𝑇, where 𝑛= dim 𝑉(by 5.56). To show that this list is linearly
independent, suppose
𝑎1𝑣1 + ⋯+ 𝑎𝑛𝑣𝑛= 0,
where 𝑎1, … , 𝑎𝑛∈𝐅. For each 𝑘= 1, … , 𝑚, let 𝑢𝑘denote the sum of all the terms
𝑎𝑗𝑣𝑗such that 𝑣𝑗∈𝐸(𝜆𝑘, 𝑇). Thus each 𝑢𝑘is in 𝐸(𝜆𝑘, 𝑇), and
𝑢1 + ⋯+ 𝑢𝑚= 0.
Because eigenvectors corresponding to distinct eigenvalues are linearly indepen-
dent (see 5.11), this implies that each 𝑢𝑘equals 0. Because each 𝑢𝑘is a sum of
terms 𝑎𝑗𝑣𝑗, where the 𝑣𝑗’s were chosen to be a basis of 𝐸(𝜆𝑘, 𝑇), this implies that
all 𝑎𝑗’s equal 0. Thus 𝑣1, … , 𝑣𝑛is linearly independent and hence is a basis of 𝑉
(by 2.38). Thus (d) implies (b), completing the proof.
For additional conditions equivalent to diagonalizability, see 5.62, Exercises 5
and 15 in this section, Exercise 24 in Section 7B, and Exercise 15 in Section 8A.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
As we know, every operator on a nonzero finite-dimensional complex vector
space has an eigenvalue. However, not every operator on a nonzero finite-
dimensional complex vector space has enough eigenvectors to be diagonalizable,
as shown by the next example.
5.57
example: an operator that is not diagonalizable
Define an operator 𝑇∈ℒ(𝐅3) by 𝑇(𝑎, 𝑏, 𝑐) = (𝑏, 𝑐, 0). The matrix of 𝑇with
respect to the standard basis of 𝐅3 is
⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
,
which is an upper-triangular matrix but is not a diagonal matrix.
As you should verify, 0 is the only eigenvalue of 𝑇and furthermore
𝐸(0, 𝑇) = {(𝑎, 0, 0) ∈𝐅3 ∶𝑎∈𝐅}.
Hence conditions (b), (c), and (d) of 5.55 fail (of course, because these conditions
are equivalent, it is sufficient to check that only one of them fails). Thus condition
(a) of 5.55 also fails. Hence 𝑇is not diagonalizable, regardless of whether 𝐅= 𝐑
or 𝐅= 𝐂.
The next result shows that if an operator has as many distinct eigenvalues as
the dimension of its domain, then the operator is diagonalizable.
5.58
enough eigenvalues implies diagonalizability
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉) has dim 𝑉distinct eigenvalues.
Then 𝑇is diagonalizable.
Proof
Suppose 𝑇has distinct eigenvalues 𝜆1, … , 𝜆dim 𝑉. For each 𝑘, let 𝑣𝑘∈𝑉
be an eigenvector corresponding to the eigenvalue 𝜆𝑘. Because eigenvectors corre-
sponding to distinct eigenvalues are linearly independent (see 5.11), 𝑣1, … , 𝑣dim 𝑉
is linearly independent.
A linearly independent list of dim 𝑉vectors in 𝑉is a basis of 𝑉(see 2.38); thus
𝑣1, … , 𝑣dim 𝑉is a basis of 𝑉. With respect to this basis consisting of eigenvectors,
𝑇has a diagonal matrix.
In later chapters we will find additional conditions that imply that certain
operators are diagonalizable. For example, see the real spectral theorem (7.29)
and the complex spectral theorem (7.31).
The result above gives a sufficient condition for an operator to be diagonal-
izable. However, this condition is not necessary. For example, the operator 𝑇
on 𝐅3 defined by 𝑇(𝑥, 𝑦, 𝑧) = (6𝑥, 6𝑦, 7𝑧) has only two eigenvalues (6 and 7) and
dim 𝐅3 = 3, but 𝑇is diagonalizable (by the standard basis of 𝐅3).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5D
Diagonalizable Operators
For a spectacular application of these
techniques, see Exercise 21, which
shows how to use diagonalization to
find an exact formula for the 𝑛th term
of the Fibonacci sequence.
The next example illustrates the im-
portance of diagonalization, which can
be used to compute high powers of an
operator, taking advantage of the equa-
tion 𝑇𝑘𝑣= 𝜆𝑘𝑣if 𝑣is an eigenvector of
𝑇with eigenvalue 𝜆.
5.59
example: using diagonalization to compute 𝑇100
Define 𝑇∈ℒ(𝐅3) by 𝑇(𝑥, 𝑦, 𝑧) = (2𝑥+ 𝑦, 5𝑦+ 3𝑧, 8𝑧). With respect to the
standard basis, the matrix of 𝑇is
⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
.
The matrix above is an upper-triangular matrix but it is not a diagonal matrix. By
5.41, the eigenvalues of 𝑇are 2, 5, and 8. Because 𝑇is an operator on a vector
space of dimension three and 𝑇has three distinct eigenvalues, 5.58 assures us
that there exists a basis of 𝐅3 with respect to which 𝑇has a diagonal matrix.
To find this basis, we only have to find an eigenvector for each eigenvalue. In
other words, we have to find a nonzero solution to the equation
𝑇(𝑥, 𝑦, 𝑧) = 𝜆(𝑥, 𝑦, 𝑧)
for 𝜆= 2, then for 𝜆= 5, and then for 𝜆= 8. Solving these simple equations
shows that for 𝜆= 2 we have an eigenvector (1, 0, 0), for 𝜆= 5 we have an
eigenvector (1, 3, 0), and for 𝜆= 8 we have an eigenvector (1, 6, 6).
Thus (1, 0, 0), (1, 3, 0), (1, 6, 6) is a basis of 𝐅3consisting of eigenvectors of 𝑇,
and with respect to this basis the matrix of 𝑇is the diagonal matrix
⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
.
To compute 𝑇100(0, 0, 1), for example, write (0, 0, 1) as a linear combination
of our basis of eigenvectors:
(0, 0, 1) = 1
6(1, 0, 0) −1
3(1, 3, 0) + 1
6(1, 6, 6).
Now apply 𝑇100 to both sides of the equation above, getting
𝑇100(0, 0, 1) = 1
6(𝑇100(1, 0, 0)) −1
3(𝑇100(1, 3, 0)) + 1
6(𝑇100(1, 6, 6))
= 1
6(2100(1, 0, 0) −2 ⋅5100(1, 3, 0) + 8100(1, 6, 6))
= 1
6(2100 −2 ⋅5100 + 8100, 6 ⋅8100 −6 ⋅5100, 6 ⋅8100).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
We saw earlier that an operator 𝑇on a finite-dimensional vector space 𝑉has an
upper-triangular matrix with respect to some basis of 𝑉if and only if the minimal
polynomial of 𝑇equals (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚) for some 𝜆1, … , 𝜆𝑚∈𝐅(see 5.44).
As we previously noted (see 5.47), this condition is always satisfied if 𝐅= 𝐂.
Our next result 5.62 states that an operator 𝑇∈ℒ(𝑉) has a diagonal matrix
with respect to some basis of 𝑉if and only if the minimal polynomial of 𝑇equals
(𝑧−𝜆1) ⋯(𝑧−𝜆𝑚) for some distinct 𝜆1, … , 𝜆𝑚∈𝐅. Before formally stating
this result, we give two examples of using it.
5.60
example: diagonalizable, but with no known exact eigenvalues
Define 𝑇∈ℒ(𝐂5) by
𝑇(𝑧1, 𝑧2, 𝑧3, 𝑧4, 𝑧5) = (−3𝑧5, 𝑧1 + 6𝑧5, 𝑧2, 𝑧3, 𝑧4).
The matrix of 𝑇is shown in Example 5.26, where we showed that the minimal
polynomial of 𝑇is 3 −6𝑧+ 𝑧5.
As mentioned in Example 5.28, no exact expression is known for any of the
zeros of this polynomial, but numerical techniques show that the zeros of this
polynomial are approximately −1.67, 0.51, 1.40, −0.12 + 1.59𝑖, −0.12 −1.59𝑖.
The software that produces these approximations is accurate to more than
three digits. Thus these approximations are good enough to show that the five
numbers above are distinct. The minimal polynomial of 𝑇equals the fifth degree
monic polynomial with these zeros. Now 5.62 shows that 𝑇is diagonalizable.
5.61
example: showing that an operator is not diagonalizable
Define 𝑇∈ℒ(𝐅3) by
𝑇(𝑧1, 𝑧2, 𝑧3) = (6𝑧1 + 3𝑧2 + 4𝑧3, 6𝑧2 + 2𝑧3, 7𝑧3).
The matrix of 𝑇with respect to the standard basis of 𝐅3 is
⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
.
The matrix above is an upper-triangular matrix but is not a diagonal matrix. Might
𝑇have a diagonal matrix with respect to some other basis of 𝐅3?
To answer this question, we will find the minimal polynomial of 𝑇. First note
that the eigenvalues of 𝑇are the diagonal entries of the matrix above (by 5.41).
Thus the zeros of the minimal polynomial of 𝑇are 6, 7 [by 5.27(a)]. The diagonal
of the matrix above tells us that (𝑇−6𝐼)2(𝑇−7𝐼) = 0 (by 5.40). The minimal
polynomial of 𝑇has degree at most 3 (by 5.22). Putting all this together, we see
that the minimal polynomial of 𝑇is either (𝑧−6)(𝑧−7) or (𝑧−6)2(𝑧−7).
A simple computation shows that (𝑇−6𝐼)(𝑇−7𝐼) ≠0. Thus the minimal
polynomial of 𝑇is (𝑧−6)2(𝑧−7).
Now 5.62 shows that 𝑇is not diagonalizable.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5D
Diagonalizable Operators
5.62
necessary and sufficient condition for diagonalizability
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Then 𝑇is diagonalizable if
and only if the minimal polynomial of 𝑇equals (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚) for some
list of distinct numbers 𝜆1, … , 𝜆𝑚∈𝐅.
Proof
First suppose 𝑇is diagonalizable. Thus there is a basis 𝑣1, … , 𝑣𝑛of 𝑉
consisting of eigenvectors of 𝑇. Let 𝜆1, … , 𝜆𝑚be the distinct eigenvalues of 𝑇.
Then for each 𝑣𝑗, there exists 𝜆𝑘with (𝑇−𝜆𝑘𝐼)𝑣𝑗= 0. Thus
(𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑚𝐼)𝑣𝑗= 0,
which implies that the minimal polynomial of 𝑇equals (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚).
To prove the implication in the other direction, now suppose the minimal
polynomial of 𝑇equals (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚) for some list of distinct numbers
𝜆1, … , 𝜆𝑚∈𝐅. Thus
5.63
(𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑚𝐼) = 0.
We will prove that 𝑇is diagonalizable by induction on 𝑚. To get started,
suppose 𝑚= 1. Then 𝑇−𝜆1𝐼= 0, which means that 𝑇is a scalar multiple of the
identity operator, which implies that 𝑇is diagonalizable.
Now suppose that 𝑚> 1 and the desired result holds for all smaller values of
𝑚. The subspace range(𝑇−𝜆𝑚𝐼) is invariant under 𝑇[this is a special case of
5.18 with 𝑝(𝑧) = 𝑧−𝜆𝑚]. Thus 𝑇restricted to range(𝑇−𝜆𝑚𝐼) is an operator on
range(𝑇−𝜆𝑚𝐼).
If 𝑢∈range(𝑇−𝜆𝑚𝐼), then 𝑢= (𝑇−𝜆𝑚𝐼)𝑣for some 𝑣∈𝑉, and 5.63 implies
5.64
(𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑚−1𝐼)𝑢= (𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑚𝐼)𝑣= 0.
Hence (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚−1) is a polynomial multiple of the minimal polynomial
of 𝑇restricted to range(𝑇−𝜆𝑚𝐼) [by 5.29]. Thus by our induction hypothesis,
there is a basis of range(𝑇−𝜆𝑚𝐼) consisting of eigenvectors of 𝑇.
Suppose that 𝑢∈range(𝑇−𝜆𝑚𝐼) ∩null(𝑇−𝜆𝑚𝐼). Then 𝑇𝑢= 𝜆𝑚𝑢. Now
5.64 implies that
0 = (𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑚−1𝐼)𝑢
= (𝜆𝑚−𝜆1) ⋯(𝜆𝑚−𝜆𝑚−1)𝑢.
Because 𝜆1, … , 𝜆𝑚are distinct, the equation above implies that 𝑢= 0. Hence
range(𝑇−𝜆𝑚𝐼) ∩null(𝑇−𝜆𝑚𝐼) = {0}.
Thus range(𝑇−𝜆𝑚𝐼)+null(𝑇−𝜆𝑚𝐼) is a direct sum (by 1.46) whose dimension
is dim 𝑉(by 3.94 and 3.21). Hence range(𝑇−𝜆𝑚𝐼) ⊕null(𝑇−𝜆𝑚𝐼) = 𝑉. Every
nonzero vector in null(𝑇−𝜆𝑚𝐼) is an eigenvector of 𝑇with eigenvalue 𝜆𝑚.
Earlier in this proof we saw that there is a basis of range(𝑇−𝜆𝑚𝐼) consisting of
eigenvectors of 𝑇. Adjoining to that basis a basis of null(𝑇−𝜆𝑚𝐼) gives a basis
of 𝑉consisting of eigenvectors of 𝑇. The matrix of 𝑇with respect to this basis is
a diagonal matrix, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
No formula exists for the zeros of polynomials of degree 5 or greater. However,
the previous result can be used to determine whether an operator on a complex
vector space is diagonalizable without even finding approximations of the zeros
of the minimal polynomial—see Exercise 15.
The next result will be a key tool when we prove a result about the simultaneous
diagonalization of two operators; see 5.76. Note how the use of a characterization
of diagonalizable operators in terms of the minimal polynomial (see 5.62) leads
to a short proof of the next result.
5.65
restriction of diagonalizable operator to invariant subspace
Suppose 𝑇∈ℒ(𝑉) is diagonalizable and 𝑈is a subspace of 𝑉that is invariant
under 𝑇. Then 𝑇|𝑈is a diagonalizable operator on 𝑈.
Proof
Because the operator 𝑇is diagonalizable, the minimal polynomial of 𝑇
equals (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚) for some list of distinct numbers 𝜆1, … , 𝜆𝑚∈𝐅(by
5.62). The minimal polynomial of 𝑇is a polynomial multiple of the minimal
polynomial of 𝑇|𝑈(by 5.31). Hence the minimal polynomial of 𝑇|𝑈has the form
required by 5.62, which shows that 𝑇|𝑈is diagonalizable.
Gershgorin Disk Theorem
5.66
definition: Gershgorin disks
Suppose 𝑇∈ℒ(𝑉) and 𝑣1, … , 𝑣𝑛is a basis of 𝑉. Let 𝐴denote the matrix of
𝑇with respect to this basis. A Gershgorin disk of 𝑇with respect to the basis
𝑣1, … , 𝑣𝑛is a set of the form
{𝑧∈𝐅∶|𝑧−𝐴𝑗,𝑗| ≤
𝑛
∑
𝑘=1
𝑘≠𝑗
|𝐴𝑗,𝑘|},
where 𝑗∈{1, … , 𝑛}.
Because there are 𝑛choices for 𝑗in the definition above, 𝑇has 𝑛Gershgorin
disks. If 𝐅= 𝐂, then for each 𝑗∈{1, … , 𝑛}, the corresponding Gershgorin disk
is a closed disk in 𝐂centered at 𝐴𝑗,𝑗, which is the 𝑗th entry on the diagonal of 𝐴.
The radius of this closed disk is the sum of the absolute values of the entries in
row 𝑗of 𝐴, excluding the diagonal entry. If 𝐅= 𝐑, then the Gershgorin disks are
closed intervals in 𝐑.
In the special case that the square matrix 𝐴above is a diagonal matrix, each
Gershgorin disk consists of a single point that is a diagonal entry of 𝐴(and
each eigenvalue of 𝑇is one of those points, as required by the next result). One
consequence of our next result is that if the nondiagonal entries of 𝐴are small,
then each eigenvalue of 𝑇is near a diagonal entry of 𝐴.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5D
Diagonalizable Operators
5.67
Gershgorin disk theorem
Suppose 𝑇∈ℒ(𝑉) and 𝑣1, … , 𝑣𝑛is a basis of 𝑉. Then each eigenvalue of 𝑇
is contained in some Gershgorin disk of 𝑇with respect to the basis 𝑣1, … , 𝑣𝑛.
Proof
Suppose 𝜆∈𝐅is an eigenvalue of 𝑇. Let 𝑤∈𝑉be a corresponding
eigenvector. There exist 𝑐1, … , 𝑐𝑛∈𝐅such that
5.68
𝑤= 𝑐1𝑣1 + ⋯+ 𝑐𝑛𝑣𝑛.
Let 𝐴denote the matrix of 𝑇with respect to the basis 𝑣1, … , 𝑣𝑛. Applying 𝑇
to both sides of the equation above gives
𝜆𝑤=
𝑛
∑
𝑘=1
𝑐𝑘𝑇𝑣𝑘
5.69
=
𝑛
∑
𝑘=1
𝑐𝑘
𝑛
∑
𝑗= 1
𝐴𝑗,𝑘𝑣𝑗
=
𝑛
∑
𝑗= 1
(
𝑛
∑
𝑘=1
𝐴𝑗,𝑘𝑐𝑘)𝑣𝑗.
5.70
Let 𝑗∈{1, … , 𝑛} be such that
|𝑐𝑗| = max{|𝑐1|, … , |𝑐𝑛|}.
Using 5.68, we see that the coefficient of 𝑣𝑗on the left side of 5.69 equals 𝜆𝑐𝑗,
which must equal the coefficient of 𝑣𝑗on the right side of 5.70. In other words,
𝜆𝑐𝑗=
𝑛
∑
𝑘=1
𝐴𝑗,𝑘𝑐𝑘.
Subtract 𝐴𝑗,𝑗𝑐𝑗from each side of the equation above and then divide both sides
by 𝑐𝑗to get
|𝜆−𝐴𝑗,𝑗| = ∣
𝑛
∑
𝑘=1
𝑘≠𝑗
𝐴𝑗,𝑘
𝑐𝑘
𝑐𝑗
∣
≤
𝑛
∑
𝑘=1
𝑘≠𝑗
|𝐴𝑗,𝑘|.
Thus 𝜆is in the 𝑗th Gershgorin disk with respect to the basis 𝑣1, … , 𝑣𝑛.
The Gershgorin disk theorem is named
for Semyon Aronovich Gershgorin,
who published this result in 1931.
Exercise 22 gives a nice application
of the Gershgorin disk theorem.
Exercise 23 states that the radius of
each Gershgorin disk could be changed
to the sum of the absolute values of corresponding column entries (instead of row
entries), excluding the diagonal entry, and the theorem above would still hold.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
Exercises 5D
Suppose 𝑉is a finite-dimensional complex vector space and 𝑇∈ℒ(𝑉).
(a) Prove that if 𝑇4 = 𝐼, then 𝑇is diagonalizable.
(b) Prove that if 𝑇4 = 𝑇, then 𝑇is diagonalizable.
(c) Give an example of an operator 𝑇∈ℒ(𝐂2) such that 𝑇4 = 𝑇2 and 𝑇is
not diagonalizable.
Suppose 𝑇∈ℒ(𝑉) has a diagonal matrix 𝐴with respect to some basis
of 𝑉. Prove that if 𝜆∈𝐅, then 𝜆appears on the diagonal of 𝐴precisely
dim 𝐸(𝜆, 𝑇) times.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that if the operator
𝑇is diagonalizable, then 𝑉= null 𝑇⊕range 𝑇.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that the following
are equivalent.
(a) 𝑉= null 𝑇⊕range 𝑇.
(b) 𝑉= null 𝑇+ range 𝑇.
(c) null 𝑇∩range 𝑇= {0}.
Suppose 𝑉is a finite-dimensional complex vector space and 𝑇∈ℒ(𝑉).
Prove that 𝑇is diagonalizable if and only if
𝑉= null(𝑇−𝜆𝐼) ⊕range(𝑇−𝜆𝐼)
for every 𝜆∈𝐂.
Suppose 𝑇∈ℒ(𝐅5) and dim 𝐸(8, 𝑇) = 4. Prove that 𝑇−2𝐼or 𝑇−6𝐼is
invertible.
Suppose 𝑇∈ℒ(𝑉) is invertible. Prove that
𝐸(𝜆, 𝑇) = 𝐸( 1
𝜆, 𝑇−1)
for every 𝜆∈𝐅with 𝜆≠0.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Let 𝜆1, … , 𝜆𝑚denote the
distinct nonzero eigenvalues of 𝑇. Prove that
dim 𝐸(𝜆1, 𝑇) + ⋯+ dim 𝐸(𝜆𝑚, 𝑇) ≤dim range 𝑇.
Suppose 𝑅, 𝑇∈ℒ(𝐅3) each have 2, 6, 7 as eigenvalues. Prove that there
exists an invertible operator 𝑆∈ℒ(𝐅3) such that 𝑅= 𝑆−1𝑇𝑆.
Find 𝑅, 𝑇∈ℒ(𝐅4) such that 𝑅and 𝑇each have 2, 6, 7 as eigenvalues, 𝑅and
𝑇have no other eigenvalues, and there does not exist an invertible operator
𝑆∈ℒ(𝐅4) such that 𝑅= 𝑆−1𝑇𝑆.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5D
Diagonalizable Operators
Find 𝑇∈ℒ(𝐂3) such that 6 and 7 are eigenvalues of 𝑇and such that 𝑇does
not have a diagonal matrix with respect to any basis of 𝐂3.
Suppose 𝑇∈ℒ(𝐂3) is such that 6 and 7 are eigenvalues of 𝑇. Furthermore,
suppose 𝑇does not have a diagonal matrix with respect to any basis of 𝐂3.
Prove that there exists (𝑧1, 𝑧2, 𝑧3) ∈𝐂3 such that
𝑇(𝑧1, 𝑧2, 𝑧3) = (6 + 8𝑧1, 7 + 8𝑧2, 13 + 8𝑧3).
Suppose 𝐴is a diagonal matrix with distinct entries on the diagonal and 𝐵
is a matrix of the same size as 𝐴. Show that 𝐴𝐵= 𝐵𝐴if and only if 𝐵is a
diagonal matrix.
(a) Give an example of a finite-dimensional complex vector space and an
operator 𝑇on that vector space such that 𝑇2 is diagonalizable but 𝑇is
not diagonalizable.
(b) Suppose 𝐅= 𝐂, 𝑘is a positive integer, and 𝑇∈ℒ(𝑉) is invertible.
Prove that 𝑇is diagonalizable if and only if 𝑇𝑘is diagonalizable.
Suppose 𝑉is a finite-dimensional complex vector space, 𝑇∈ℒ(𝑉), and 𝑝
is the minimal polynomial of 𝑇. Prove that the following are equivalent.
(a) 𝑇is diagonalizable.
(b) There does not exist 𝜆∈𝐂such that 𝑝is a polynomial multiple of
(𝑧−𝜆)2.
(c) 𝑝and its derivative 𝑝′ have no zeros in common.
(d) The greatest common divisor of 𝑝and 𝑝′ is the constant polynomial 1.
The greatest common divisor of 𝑝and 𝑝′ is the monic polynomial 𝑞of
largest degree such that 𝑝and 𝑝′ are both polynomial multiples of 𝑞. The
Euclidean algorithm for polynomials (look it up) can quickly determine
the greatest common divisor of two polynomials, without requiring any
information about the zeros of the polynomials. Thus the equivalence of (a)
and (d) above shows that we can determine whether 𝑇is diagonalizable
without knowing anything about the zeros of 𝑝.
Suppose that 𝑇∈ℒ(𝑉) is diagonalizable. Let 𝜆1, … , 𝜆𝑚denote the distinct
eigenvalues of 𝑇. Prove that a subspace 𝑈of 𝑉is invariant under 𝑇if and
only if there exist subspaces 𝑈1, … , 𝑈𝑚of 𝑉such that 𝑈𝑘⊆𝐸(𝜆𝑘, 𝑇) for
each 𝑘and 𝑈= 𝑈1 ⊕⋯⊕𝑈𝑚.
Suppose 𝑉is finite-dimensional. Prove that ℒ(𝑉) has a basis consisting of
diagonalizable operators.
Suppose that 𝑇∈ℒ(𝑉) is diagonalizable and 𝑈is a subspace of 𝑉that is
invariant under 𝑇. Prove that the quotient operator 𝑇/𝑈is a diagonalizable
operator on 𝑉/𝑈.
The quotient operator 𝑇/𝑈was defined in Exercise 38 in Section 5A.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
Prove or give a counterexample: If 𝑇∈ℒ(𝑉) and there exists a subspace 𝑈
of 𝑉that is invariant under 𝑇such that 𝑇|𝑈and 𝑇/𝑈are both diagonalizable,
then 𝑇is diagonalizable.
See Exercise 13 in Section 5C for an analogous statement about upper-
triangular matrices.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that 𝑇is diagonaliz-
able if and only if the dual operator 𝑇′ is diagonalizable.
The Fibonacci sequence 𝐹0, 𝐹1, 𝐹2, … is defined by
𝐹0 = 0, 𝐹1 = 1, and 𝐹𝑛= 𝐹𝑛−2 + 𝐹𝑛−1 for 𝑛≥2.
Define 𝑇∈ℒ(𝐑2) by 𝑇(𝑥, 𝑦) = (𝑦, 𝑥+ 𝑦).
(a) Show that 𝑇𝑛(0, 1) = (𝐹𝑛, 𝐹𝑛+1) for each nonnegative integer 𝑛.
(b) Find the eigenvalues of 𝑇.
(c) Find a basis of 𝐑2 consisting of eigenvectors of 𝑇.
(d) Use the solution to (c) to compute 𝑇𝑛(0, 1). Conclude that
𝐹𝑛=
√5
[(1 + √5
)
𝑛
−(1 −√5
)
𝑛
]
for each nonnegative integer 𝑛.
(e) Use (d) to conclude that if 𝑛is a nonnegative integer, then the Fibonacci
number 𝐹𝑛is the integer that is closest to
√5
(1 + √5
)
𝑛
.
Each 𝐹𝑛is a nonnegative integer, even though the right side of the formula
in (d) does not look like an integer. The number
1 + √5
is called the golden ratio.
Suppose 𝑇∈ℒ(𝑉) and 𝐴is an 𝑛-by-𝑛matrix that is the matrix of 𝑇with
respect to some basis of 𝑉. Prove that if
|𝐴𝑗,𝑗| >
𝑛
∑
𝑘=1
𝑘≠𝑗
|𝐴𝑗,𝑘|
for each 𝑗∈{1, … , 𝑛}, then 𝑇is invertible.
This exercise states that if the diagonal entries of the matrix of 𝑇are large
compared to the nondiagonal entries, then 𝑇is invertible.
Suppose the definition of the Gershgorin disks is changed so that the radius of
the 𝑘th disk is the sum of the absolute values of the entries in column (instead
of row) 𝑘of 𝐴, excluding the diagonal entry. Show that the Gershgorin disk
theorem (5.67) still holds with this changed definition.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5E
Commuting Operators
5E Commuting Operators
5.71
definition: commute
• Two operators 𝑆and 𝑇on the same vector space commute if 𝑆𝑇= 𝑇𝑆.
• Two square matrices 𝐴and 𝐵of the same size commute if 𝐴𝐵= 𝐵𝐴.
For example, if 𝐼is the identity operator on 𝑉and 𝜆∈𝐅, then 𝜆𝐼commutes
with every operator on 𝑉.
As another example, if 𝑇is an operator then 𝑇2 and 𝑇3 commute. More
generally, if 𝑝, 𝑞∈𝒫(𝐅), then 𝑝(𝑇) and 𝑞(𝑇) commute [see 5.17(b)].
5.72
example: partial differentiation operators commute
Suppose 𝑚is a nonnegative integer. Let 𝒫𝑚(𝐂2, 𝐂) denote the complex vector
space of polynomials (with coefficients in 𝐂) in two variables and of degree at
most 𝑚, with the usual operations of addition and scalar multiplication of 𝐂-
valued functions. Thus the elements of 𝒫𝑚(𝐂2, 𝐂) are functions 𝑝from 𝐂2 to 𝐂
of the form
5.73
𝑝(𝑤, 𝑧) =
∑
𝑗+𝑘≤𝑚
𝑎𝑗,𝑘𝑤𝑗𝑧𝑘,
where the indices 𝑗and 𝑘take on all nonnegative integer values such that 𝑗+𝑘≤𝑚,
each 𝑎𝑗,𝑘is in 𝐂, and 𝑤𝑗𝑧𝑘denotes the function on 𝐂2 defined by (𝑤, 𝑧) ↦𝑤𝑗𝑧𝑘.
Define operators 𝐷𝑤, 𝐷𝑧∈ℒ(𝒫𝑚(𝐂2, 𝐂)) by
𝐷𝑤𝑝= 𝜕𝑝
𝜕𝑤=
∑
𝑗+𝑘≤𝑚
𝑗𝑎𝑗,𝑘𝑤𝑗−1𝑧𝑘
and
𝐷𝑧𝑝= 𝜕𝑝
𝜕𝑧=
∑
𝑗+𝑘≤𝑚
𝑘𝑎𝑗,𝑘𝑤𝑗𝑧𝑘−1,
where 𝑝is as in 5.73. The operators 𝐷𝑤and 𝐷𝑧are called partial differentiation
operators because each of these operators differentiates with respect to one of the
variables while pretending that the other variable is a constant.
The operators 𝐷𝑤and 𝐷𝑧commute because if 𝑝is as in 5.73, then
(𝐷𝑤𝐷𝑧)𝑝=
∑
𝑗+𝑘≤𝑚
𝑗𝑘𝑎𝑗,𝑘𝑤𝑗−1𝑧𝑘−1 = (𝐷𝑧𝐷𝑤)𝑝.
The equation 𝐷𝑤𝐷𝑧= 𝐷𝑧𝐷𝑤on 𝒫𝑚(𝐂2, 𝐂) illustrates a more general result
that the order of partial differentiation does not matter for nice functions.
All 214,358,881 (which equals 118) or-
dered pairs of the 2-by-2 matrices un-
der consideration were checked by a
computer to discover that only 674,609
of these ordered pairs of matrices
commute.
Commuting matrices are unusual.
For example, there are 214,358,881 or-
dered pairs of 2-by-2 matrices all of
whose entries are integers in the inter-
val [−5, 5]. Only about 0.3% of these
ordered pairs of matrices commute.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
The next result shows that two operators commute if and only if their matrices
(with respect to the same basis) commute.
5.74
commuting operators correspond to commuting matrices
Suppose 𝑆, 𝑇∈ℒ(𝑉) and 𝑣1, … , 𝑣𝑛is a basis of 𝑉. Then 𝑆and 𝑇commute
if and only if ℳ(𝑆, (𝑣1, … , 𝑣𝑛)) and ℳ(𝑇, (𝑣1, … , 𝑣𝑛)) commute.
Proof
We have
𝑆and 𝑇commute ⟺𝑆𝑇= 𝑇𝑆
⟺ℳ(𝑆𝑇) = ℳ(𝑇𝑆)
⟺ℳ(𝑆)ℳ(𝑇) = ℳ(𝑇)ℳ(𝑆)
⟺ℳ(𝑆) and ℳ(𝑇) commute,
as desired.
The next result shows that if two operators commute, then every eigenspace
for one operator is invariant under the other operator. This result, which we will
use several times, is one of the main reasons why a pair of commuting operators
behaves better than a pair of operators that does not commute.
5.75
eigenspace is invariant under commuting operator
Suppose 𝑆, 𝑇∈ℒ(𝑉) commute and 𝜆∈𝐅. Then 𝐸(𝜆, 𝑆) is invariant under 𝑇.
Proof
Suppose 𝑣∈𝐸(𝜆, 𝑆). Then
𝑆(𝑇𝑣) = (𝑆𝑇)𝑣= (𝑇𝑆)𝑣= 𝑇(𝑆𝑣) = 𝑇(𝜆𝑣) = 𝜆𝑇𝑣.
The equation above shows that 𝑇𝑣∈𝐸(𝜆, 𝑆). Thus 𝐸(𝜆, 𝑆) is invariant under 𝑇.
Suppose we have two operators, each of which is diagonalizable. If we want
to do computations involving both operators (for example, involving their sum),
then we want the two operators to be diagonalizable by the same basis, which
according to the next result is possible when the two operators commute.
5.76
simultaneous diagonalizability ⟺commutativity
Two diagonalizable operators on the same vector space have diagonal matrices
with respect to the same basis if and only if the two operators commute.
Proof
First suppose 𝑆, 𝑇∈ℒ(𝑉) have diagonal matrices with respect to the
same basis. The product of two diagonal matrices of the same size is the diagonal
matrix obtained by multiplying the corresponding elements of the two diagonals.
Thus any two diagonal matrices of the same size commute. Thus 𝑆and 𝑇commute,
by 5.74.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5E
Commuting Operators
To prove the implication in the other direction, now suppose that 𝑆, 𝑇∈ℒ(𝑉)
are diagonalizable operators that commute. Let 𝜆1, … , 𝜆𝑚denote the distinct
eigenvalues of 𝑆. Because 𝑆is diagonalizable, 5.55(c) shows that
5.77
𝑉= 𝐸(𝜆1, 𝑆) ⊕⋯⊕𝐸(𝜆𝑚, 𝑆).
For each 𝑘= 1, … , 𝑚, the subspace 𝐸(𝜆𝑘, 𝑆) is invariant under 𝑇(by 5.75).
Because 𝑇is diagonalizable, 5.65 implies that 𝑇|𝐸(𝜆𝑘,𝑆) is diagonalizable for
each 𝑘. Hence for each 𝑘= 1, … , 𝑚, there is a basis of 𝐸(𝜆𝑘, 𝑆) consisting of
eigenvectors of 𝑇. Putting these bases together gives a basis of 𝑉(because of
5.77), with each vector in this basis being an eigenvector of both 𝑆and 𝑇. Thus 𝑆
and 𝑇both have diagonal matrices with respect to this basis, as desired.
See Exercise 2 for an extension of the result above to more than two operators.
Suppose 𝑉is a finite-dimensional nonzero complex vector space. Then every
operator on 𝑉has an eigenvector (see 5.19). The next result shows that if two
operators on 𝑉commute, then there is a vector in 𝑉that is an eigenvector for both
operators (but the two commuting operators might not have a common eigenvalue).
For an extension of the next result to more than two operators, see Exercise 9(a).
5.78
common eigenvector for commuting operators
Every pair of commuting operators on a finite-dimensional nonzero complex
vector space has a common eigenvector.
Proof
Suppose 𝑉is a finite-dimensional nonzero complex vector space and
𝑆, 𝑇∈ℒ(𝑉) commute. Let 𝜆be an eigenvalue of 𝑆(5.19 tells us that 𝑆does
indeed have an eigenvalue). Thus 𝐸(𝜆, 𝑆) ≠{0}. Also, 𝐸(𝜆, 𝑆) is invariant
under 𝑇(by 5.75).
Thus 𝑇|𝐸(𝜆,𝑆) has an eigenvector (again using 5.19), which is an eigenvector
for both 𝑆and 𝑇, completing the proof.
5.79
example: common eigenvector for partial differentiation operators
Let 𝒫𝑚(𝐂2, 𝐂) be as in Example 5.72 and let 𝐷𝑤, 𝐷𝑧∈ℒ(𝒫𝑚(𝐂2, 𝐂)) be the
commuting partial differentiation operators in that example. As you can verify, 0
is the only eigenvalue of each of these operators. Also
𝐸(0, 𝐷𝑤) = {
𝑚
∑
𝑘=0
𝑎𝑘𝑧𝑘∶𝑎0, … , 𝑎𝑚∈𝐂},
𝐸(0, 𝐷𝑧) = {
𝑚
∑
𝑗=0
𝑐𝑗𝑤𝑗∶𝑐0, … , 𝑐𝑚∈𝐂}.
The intersection of these two eigenspaces is the set of common eigenvectors of
the two operators. Because 𝐸(0, 𝐷𝑤) ∩𝐸(0, 𝐷𝑧) is the set of constant functions,
we see that 𝐷𝑤and 𝐷𝑧indeed have a common eigenvector, as promised by 5.78.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
The next result extends 5.47 (the existence of a basis that gives an upper-
triangular matrix) to two commuting operators.
5.80
commuting operators are simultaneously upper triangularizable
Suppose 𝑉is a finite-dimensional complex vector space and 𝑆, 𝑇are
commuting operators on 𝑉. Then there is a basis of 𝑉with respect to which
both 𝑆and 𝑇have upper-triangular matrices.
Proof
Let 𝑛= dim 𝑉. We will use induction on 𝑛. The desired result holds if
𝑛= 1 because all 1-by-1 matrices are upper triangular. Now suppose 𝑛> 1 and
the desired result holds for all complex vector spaces whose dimension is 𝑛−1.
Let 𝑣1 be any common eigenvector of 𝑆and 𝑇(using 5.78). Hence 𝑆𝑣1 ∈
span(𝑣1) and 𝑇𝑣1 ∈span(𝑣1). Let 𝑊be a subspace of 𝑉such that
𝑉= span(𝑣1) ⊕𝑊;
see 2.33 for the existence of 𝑊. Define a linear map 𝑃∶𝑉→𝑊by
𝑃(𝑎𝑣1 + 𝑤) = 𝑤
for each 𝑎∈𝐂and each 𝑤∈𝑊. Definê 𝑆,̂ 𝑇∈ℒ(𝑊) bŷ
𝑆𝑤= 𝑃(𝑆𝑤)
and̂
𝑇𝑤= 𝑃(𝑇𝑤)
for each 𝑤∈𝑊. To apply our induction hypothesis tô 𝑆and̂ 𝑇, we must first
show that these two operators on 𝑊commute. To do this, suppose 𝑤∈𝑊. Then
there exists 𝑎∈𝐂such that
(̂𝑆̂𝑇)𝑤=̂ 𝑆(𝑃(𝑇𝑤)) =̂ 𝑆(𝑇𝑤−𝑎𝑣1) = 𝑃(𝑆(𝑇𝑤−𝑎𝑣1)) = 𝑃((𝑆𝑇)𝑤),
where the last equality holds because 𝑣1 is an eigenvector of 𝑆and 𝑃𝑣1 = 0.
Similarly,
(̂𝑇̂𝑆)𝑤= 𝑃((𝑇𝑆)𝑤).
Because the operators 𝑆and 𝑇commute, the last two displayed equations show
that (̂𝑆̂𝑇)𝑤= (̂𝑇̂𝑆)𝑤. Hencê 𝑆and̂ 𝑇commute.
Thus we can use our induction hypothesis to state that there exists a basis
𝑣2, … , 𝑣𝑛of 𝑊such that̂ 𝑆and̂ 𝑇both have upper-triangular matrices with respect
to this basis. The list 𝑣1, … , 𝑣𝑛is a basis of 𝑉.
If 𝑘∈{2, … , 𝑛}, then there exist 𝑎𝑘, 𝑏𝑘∈𝐂such that
𝑆𝑣𝑘= 𝑎𝑘𝑣1 +̂ 𝑆𝑣𝑘
and
𝑇𝑣𝑘= 𝑏𝑘𝑣1 +̂ 𝑇𝑣𝑘.
Becausê 𝑆and̂ 𝑇have upper-triangular matrices with respect to 𝑣2, … , 𝑣𝑛, we know
that̂ 𝑆𝑣𝑘∈span(𝑣2, … , 𝑣𝑘) and̂ 𝑇𝑣𝑘∈span(𝑣2, … , 𝑣𝑘). Hence the equations
above imply that
𝑆𝑣𝑘∈span(𝑣1, … , 𝑣𝑘)
and
𝑇𝑣𝑘∈span(𝑣1, … , 𝑣𝑘).
Thus 𝑆and 𝑇have upper-triangular matrices with respect to 𝑣1, … , 𝑣𝑛, as desired.
Exercise 9(b) extends the result above to more than two operators.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 5E
Commuting Operators
In general, it is not possible to determine the eigenvalues of the sum or product
of two operators from the eigenvalues of the two operators. However, the next
result shows that something nice happens when the two operators commute.
5.81
eigenvalues of sum and product of commuting operators
Suppose 𝑉is a finite-dimensional complex vector space and 𝑆, 𝑇are commut-
ing operators on 𝑉. Then
• every eigenvalue of 𝑆+ 𝑇is an eigenvalue of 𝑆plus an eigenvalue of 𝑇,
• every eigenvalue of 𝑆𝑇is an eigenvalue of 𝑆times an eigenvalue of 𝑇.
Proof
There is a basis of 𝑉with respect to which both 𝑆and 𝑇have upper-
triangular matrices (by 5.80). With respect to that basis,
ℳ(𝑆+ 𝑇) = ℳ(𝑆) + ℳ(𝑇)
and
ℳ(𝑆𝑇) = ℳ(𝑆)ℳ(𝑇),
as stated in 3.35 and 3.43.
The definition of matrix addition shows that each entry on the diagonal of
ℳ(𝑆+ 𝑇) equals the sum of the corresponding entries on the diagonals of ℳ(𝑆)
and ℳ(𝑇). Similarly, because ℳ(𝑆) and ℳ(𝑇) are upper-triangular matrices,
the definition of matrix multiplication shows that each entry on the diagonal of
ℳ(𝑆𝑇) equals the product of the corresponding entries on the diagonals of ℳ(𝑆)
and ℳ(𝑇). Furthermore, ℳ(𝑆+ 𝑇) and ℳ(𝑆𝑇) are upper-triangular matrices
(see Exercise 2 in Section 5C).
Every entry on the diagonal of ℳ(𝑆) is an eigenvalue of 𝑆, and every entry
on the diagonal of ℳ(𝑇) is an eigenvalue of 𝑇(by 5.41). Every eigenvalue
of 𝑆+ 𝑇is on the diagonal of ℳ(𝑆+ 𝑇), and every eigenvalue of 𝑆𝑇is on
the diagonal of ℳ(𝑆𝑇) (these assertions follow from 5.41). Putting all this
together, we conclude that every eigenvalue of 𝑆+ 𝑇is an eigenvalue of 𝑆plus
an eigenvalue of 𝑇, and every eigenvalue of 𝑆𝑇is an eigenvalue of 𝑆times an
eigenvalue of 𝑇.
Exercises 5E
Give an example of two commuting operators 𝑆, 𝑇on 𝐅4 such that there
is a subspace of 𝐅4 that is invariant under 𝑆but not under 𝑇and there is a
subspace of 𝐅4 that is invariant under 𝑇but not under 𝑆.
Suppose ℰis a subset of ℒ(𝑉) and every element of ℰis diagonalizable.
Prove that there exists a basis of 𝑉with respect to which every element of ℰ
has a diagonal matrix if and only if every pair of elements of ℰcommutes.
This exercise extends 5.76, which considers the case in which ℰcontains
only two elements. For this exercise, ℰmay contain any number of elements,
and ℰmay even be an infinite set.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 5
Eigenvalues and Eigenvectors
Suppose 𝑆, 𝑇∈ℒ(𝑉) are such that 𝑆𝑇= 𝑇𝑆. Suppose 𝑝∈𝒫(𝐅).
(a) Prove that null 𝑝(𝑆) is invariant under 𝑇.
(b) Prove that range 𝑝(𝑆) is invariant under 𝑇.
See 5.18 for the special case 𝑆= 𝑇.
Prove or give a counterexample: If 𝐴is a diagonal matrix and 𝐵is an
upper-triangular matrix of the same size as 𝐴, then 𝐴and 𝐵commute.
Prove that a pair of operators on a finite-dimensional vector space commute
if and only if their dual operators commute.
See 3.118 for the definition of the dual of an operator.
Suppose that 𝑉is a nonzero finite-dimensional complex vector space and
𝑆, 𝑇∈ℒ(𝑉) commute. Prove that there exist 𝛼, 𝜆∈𝐂such that
range(𝑆−𝛼𝐼) + range(𝑇−𝜆𝐼) ≠𝑉.
Suppose 𝑉is a complex vector space, 𝑆∈ℒ(𝑉) is diagonalizable, and
𝑇∈ℒ(𝑉) commutes with 𝑆. Prove that there is a basis of 𝑉such that 𝑆has
a diagonal matrix with respect to this basis and 𝑇has an upper-triangular
matrix with respect to this basis.
Suppose 𝑚= 3 in Example 5.72 and 𝐷𝑤, 𝐷𝑧are the commuting partial
differentiation operators on 𝒫3(𝐂2, 𝐂) from that example. Find a basis of
𝒫3(𝐂2, 𝐂) with respect to which 𝐷𝑤and 𝐷𝑧each have an upper-triangular
matrix.
Suppose 𝑉is a finite-dimensional nonzero complex vector space. Suppose
that ℰ⊆ℒ(𝑉) is such that 𝑆and 𝑇commute for all 𝑆, 𝑇∈ℰ.
(a) Prove that there is a vector in 𝑉that is an eigenvector for every element
of ℰ.
(b) Prove that there is a basis of 𝑉with respect to which every element of
ℰhas an upper-triangular matrix.
This exercise extends 5.78 and 5.80, which consider the case in which ℰ
contains only two elements. For this exercise, ℰmay contain any number of
elements, and ℰmay even be an infinite set.
Give an example of two commuting operators 𝑆, 𝑇on a finite-dimensional
real vector space such that 𝑆+ 𝑇has an eigenvalue that does not equal an
eigenvalue of 𝑆plus an eigenvalue of 𝑇and 𝑆𝑇has an eigenvalue that does
not equal an eigenvalue of 𝑆times an eigenvalue of 𝑇.
This exercise shows that 5.81 does not hold on real vector spaces.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
In making the definition of a vector space, we generalized the linear structure
(addition and scalar multiplication) of 𝐑2 and 𝐑3. We ignored geometric features
such as the notions of length and angle. These ideas are embedded in the concept
of inner products, which we will investigate in this chapter.
Every inner product induces a norm, which you can think of as a length.
This norm satisfies key properties such as the Pythagorean theorem, the triangle
inequality, the parallelogram equality, and the Cauchy–Schwarz inequality.
The notion of perpendicular vectors in Euclidean geometry gets renamed to
orthogonal vectors in the context of an inner product space. We will see that
orthonormal bases are tremendously useful in inner product spaces. The Gram–
Schmidt procedure constructs such bases. This chapter will conclude by putting
together these tools to solve minimization problems.
standing assumptions for this chapter
• 𝐅denotes 𝐑or 𝐂.
• 𝑉and 𝑊denote vector spaces over 𝐅.
Matthew Petroff CC BY-SA
The George Peabody Library, now part of Johns Hopkins University, opened while
James Sylvester (1814–1897) was the university’s first mathematics professor. Sylvester’s
publications include the first use of the word matrix in mathematics.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
6A Inner Products and Norms
Inner Products
This vector 𝑣has norm √𝑎2 + 𝑏2.
To motivate the concept of inner product,
think of vectors in 𝐑2 and 𝐑3 as arrows
with initial point at the origin. The length
of a vector 𝑣in 𝐑2 or 𝐑3 is called the
norm of 𝑣and is denoted by ‖𝑣‖. Thus
for 𝑣= (𝑎, 𝑏) ∈𝐑2, we have
‖𝑣‖ = √𝑎2 + 𝑏2.
Similarly, if 𝑣= (𝑎, 𝑏, 𝑐) ∈𝐑3, then ‖𝑣‖ = √𝑎2 + 𝑏2 + 𝑐2.
Even though we cannot draw pictures in higher dimensions, the generalization
to 𝐑𝑛is easy: we define the norm of 𝑥= (𝑥1, … , 𝑥𝑛) ∈𝐑𝑛by
‖𝑥‖ = √𝑥12 + ⋯+ 𝑥𝑛2.
The norm is not linear on 𝐑𝑛. To inject linearity into the discussion, we
introduce the dot product.
6.1
definition: dot product
For 𝑥, 𝑦∈𝐑𝑛, the dot product of 𝑥and 𝑦, denoted by 𝑥⋅𝑦, is defined by
𝑥⋅𝑦= 𝑥1𝑦1 + ⋯+ 𝑥𝑛𝑦𝑛,
where 𝑥= (𝑥1, … , 𝑥𝑛) and 𝑦= (𝑦1, … , 𝑦𝑛).
If we think of a vector as a point instead
of as an arrow, then ‖𝑥‖ should be
interpreted to mean the distance from
the origin to the point 𝑥.
The dot product of two vectors in 𝐑𝑛
is a number, not a vector. Notice that
𝑥⋅𝑥= ‖𝑥‖2 for all 𝑥∈𝐑𝑛. Furthermore,
the dot product on 𝐑𝑛has the following
properties.
• 𝑥⋅𝑥≥0 for all 𝑥∈𝐑𝑛.
• 𝑥⋅𝑥= 0 if and only if 𝑥= 0.
• For 𝑦∈𝐑𝑛fixed, the map from 𝐑𝑛to 𝐑that sends 𝑥∈𝐑𝑛to 𝑥⋅𝑦is linear.
• 𝑥⋅𝑦= 𝑦⋅𝑥for all 𝑥, 𝑦∈𝐑𝑛.
An inner product is a generalization of the dot product. At this point you may
be tempted to guess that an inner product is defined by abstracting the properties
of the dot product discussed in the last paragraph. For real vector spaces, that
guess is correct. However, so that we can make a definition that will be useful
for both real and complex vector spaces, we need to examine the complex case
before making the definition.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6A
Inner Products and Norms
Recall that if 𝜆= 𝑎+ 𝑏𝑖, where 𝑎, 𝑏∈𝐑, then
• the absolute value of 𝜆, denoted by |𝜆|, is defined by |𝜆| = √𝑎2 + 𝑏2;
• the complex conjugate of 𝜆, denoted by 𝜆, is defined by 𝜆= 𝑎−𝑏𝑖;
• |𝜆|2 = 𝜆𝜆.
See Chapter 4 for the definitions and the basic properties of the absolute value
and complex conjugate.
For 𝑧= (𝑧1, … , 𝑧𝑛) ∈𝐂𝑛, we define the norm of 𝑧by
‖𝑧‖ = √|𝑧1|2 + ⋯+ |𝑧𝑛|2.
The absolute values are needed because we want ‖𝑧‖ to be a nonnegative number.
Note that
‖𝑧‖2 = 𝑧1𝑧1 + ⋯+ 𝑧𝑛𝑧𝑛.
We want to think of ‖𝑧‖2 as the inner product of 𝑧with itself, as we did
in 𝐑𝑛. The equation above thus suggests that the inner product of the vector
𝑤= (𝑤1, … , 𝑤𝑛) ∈𝐂𝑛with 𝑧should equal
𝑤1𝑧1 + ⋯+ 𝑤𝑛𝑧𝑛.
If the roles of the 𝑤and 𝑧were interchanged, the expression above would be
replaced with its complex conjugate. Thus we should expect that the inner product
of 𝑤with 𝑧equals the complex conjugate of the inner product of 𝑧with 𝑤. With
that motivation, we are now ready to define an inner product on 𝑉, which may be
a real or a complex vector space.
One comment about the notation used in the next definition:
• For 𝜆∈𝐂, the notation 𝜆≥0 means 𝜆is real and nonnegative.
6.2
definition: inner product
An inner product on 𝑉is a function that takes each ordered pair (𝑢, 𝑣) of
elements of 𝑉to a number ⟨𝑢, 𝑣⟩∈𝐅and has the following properties.
positivity
⟨𝑣, 𝑣⟩≥0 for all 𝑣∈𝑉.
definiteness
⟨𝑣, 𝑣⟩= 0 if and only if 𝑣= 0.
additivity in first slot
⟨𝑢+ 𝑣, 𝑤⟩= ⟨𝑢, 𝑤⟩+ ⟨𝑣, 𝑤⟩for all 𝑢, 𝑣, 𝑤∈𝑉.
homogeneity in first slot
⟨𝜆𝑢, 𝑣⟩= 𝜆⟨𝑢, 𝑣⟩for all 𝜆∈𝐅and all 𝑢, 𝑣∈𝑉.
conjugate symmetry
⟨𝑢, 𝑣⟩= ⟨𝑣, 𝑢⟩for all 𝑢, 𝑣∈𝑉.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Most mathematicians define inner
products as above, but many physicists
use a definition that requires homo-
geneity in the second slot instead of
the first slot.
Every real number equals its complex
conjugate. Thus if we are dealing with
a real vector space, then in the last con-
dition above we can dispense with the
complex conjugate and simply state that
⟨𝑢, 𝑣⟩= ⟨𝑣, 𝑢⟩for all 𝑢, 𝑣∈𝑉.
6.3
example: inner products
(a) The Euclidean inner product on 𝐅𝑛is defined by
⟨(𝑤1, … , 𝑤𝑛), (𝑧1, … , 𝑧𝑛)⟩= 𝑤1𝑧1 + ⋯+ 𝑤𝑛𝑧𝑛
for all (𝑤1, … , 𝑤𝑛), (𝑧1, … , 𝑧𝑛) ∈𝐅𝑛.
(b) If 𝑐1, … , 𝑐𝑛are positive numbers, then an inner product can be defined on 𝐅𝑛
by
⟨(𝑤1, … , 𝑤𝑛), (𝑧1, … , 𝑧𝑛)⟩= 𝑐1𝑤1𝑧1 + ⋯+ 𝑐𝑛𝑤𝑛𝑧𝑛
for all (𝑤1, … , 𝑤𝑛), (𝑧1, … , 𝑧𝑛) ∈𝐅𝑛.
(c) An inner product can be defined on the vector space of continuous real-valued
functions on the interval [−1, 1] by
⟨𝑓, 𝑔⟩= ∫
−1 𝑓𝑔
for all 𝑓, 𝑔continuous real-valued functions on [−1, 1].
(d) An inner product can be defined on 𝒫(𝐑) by
⟨𝑝, 𝑞⟩= 𝑝(0)𝑞(0) + ∫
−1 𝑝′𝑞′
for all 𝑝, 𝑞∈𝒫(𝐑).
(e) An inner product can be defined on 𝒫(𝐑) by
⟨𝑝, 𝑞⟩= ∫
∞
0 𝑝(𝑥)𝑞(𝑥)𝑒−𝑥𝑑𝑥
for all 𝑝, 𝑞∈𝒫(𝐑).
6.4
definition: inner product space
An inner product space is a vector space 𝑉along with an inner product on 𝑉.
The most important example of an inner product space is 𝐅𝑛with the Euclidean
inner product given by (a) in th
