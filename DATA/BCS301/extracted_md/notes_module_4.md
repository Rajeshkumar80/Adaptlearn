<!-- PROVENANCE: subject_code=BCS301 | subject_name=Mathematics for Computer Science | semester=3 | module=4 | source_type=MODULE_NOTES | source_file=module4.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS301 — Module 4

## Numerical Methods

**Subject:** BCS301 (Mathematics for Computer Science)
**Module:** Module 4
**Content type:** textbook_fallback
**Sources:** R1_Linear_Algebra_Done_Right_Axler.txt

---

e example above. When 𝐅𝑛is referred to as an
inner product space, you should assume that the inner product is the Euclidean
inner product unless explicitly told otherwise.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6A
Inner Products and Norms
So that we do not have to keep repeating the hypothesis that 𝑉and 𝑊are
inner product spaces, we make the following assumption.
6.5
notation: 𝑉, 𝑊
For the rest of this chapter and the next chapter, 𝑉and 𝑊denote inner product
spaces over 𝐅.
Note the slight abuse of language here. An inner product space is a vector
space along with an inner product on that vector space. When we say that a vector
space 𝑉is an inner product space, we are also thinking that an inner product on
𝑉is lurking nearby or is clear from the context (or is the Euclidean inner product
if the vector space is 𝐅𝑛).
6.6
basic properties of an inner product
(a) For each fixed 𝑣∈𝑉, the function that takes 𝑢∈𝑉to ⟨𝑢, 𝑣⟩is a linear
map from 𝑉to 𝐅.
(b) ⟨0, 𝑣⟩= 0 for every 𝑣∈𝑉.
(c) ⟨𝑣, 0⟩= 0 for every 𝑣∈𝑉.
(d) ⟨𝑢, 𝑣+ 𝑤⟩= ⟨𝑢, 𝑣⟩+ ⟨𝑢, 𝑤⟩for all 𝑢, 𝑣, 𝑤∈𝑉.
(e) ⟨𝑢, 𝜆𝑣⟩= 𝜆⟨𝑢, 𝑣⟩for all 𝜆∈𝐅and all 𝑢, 𝑣∈𝑉.
Proof
(a) For 𝑣∈𝑉, the linearity of 𝑢↦⟨𝑢, 𝑣⟩follows from the conditions of additivity
and homogeneity in the first slot in the definition of an inner product.
(b) Every linear map takes 0 to 0. Thus (b) follows from (a).
(c) If 𝑣∈𝑉, then the conjugate symmetry property in the definition of an inner
product and (b) show that ⟨𝑣, 0⟩= ⟨0, 𝑣⟩= 0 = 0.
(d) Suppose 𝑢, 𝑣, 𝑤∈𝑉. Then
⟨𝑢, 𝑣+ 𝑤⟩= ⟨𝑣+ 𝑤, 𝑢⟩
= ⟨𝑣, 𝑢⟩+ ⟨𝑤, 𝑢⟩
= ⟨𝑣, 𝑢⟩+ ⟨𝑤, 𝑢⟩
= ⟨𝑢, 𝑣⟩+ ⟨𝑢, 𝑤⟩.
(e) Suppose 𝜆∈𝐅and 𝑢, 𝑣∈𝑉. Then
⟨𝑢, 𝜆𝑣⟩= ⟨𝜆𝑣, 𝑢⟩
= 𝜆⟨𝑣, 𝑢⟩
= 𝜆⟨𝑣, 𝑢⟩
= 𝜆⟨𝑢, 𝑣⟩.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Norms
Our motivation for defining inner products came initially from the norms of
vectors on 𝐑2 and 𝐑3. Now we see that each inner product determines a norm.
6.7
definition: norm, ‖𝑣‖
For 𝑣∈𝑉, the norm of 𝑣, denoted by ‖𝑣‖, is defined by
‖𝑣‖ = √⟨𝑣, 𝑣⟩.
6.8
example: norms
(a) If (𝑧1, … , 𝑧𝑛) ∈𝐅𝑛(with the Euclidean inner product), then
‖(𝑧1, … , 𝑧𝑛)‖ = √|𝑧1|2 + ⋯+ |𝑧𝑛|2.
(b) For 𝑓in the vector space of continuous real-valued functions on [−1, 1] and
with inner product given as in 6.3(c), we have
‖ 𝑓‖ = √∫
−1 𝑓2.
6.9
basic properties of the norm
Suppose 𝑣∈𝑉.
(a) ‖𝑣‖ = 0 if and only if 𝑣= 0.
(b) ‖𝜆𝑣‖ = |𝜆| ‖𝑣‖ for all 𝜆∈𝐅.
Proof
(a) The desired result holds because ⟨𝑣, 𝑣⟩= 0 if and only if 𝑣= 0.
(b) Suppose 𝜆∈𝐅. Then
‖𝜆𝑣‖2 = ⟨𝜆𝑣, 𝜆𝑣⟩
= 𝜆⟨𝑣, 𝜆𝑣⟩
= 𝜆𝜆⟨𝑣, 𝑣⟩
= |𝜆|2 ‖𝑣‖2.
Taking square roots now gives the desired equality.
The proof of (b) in the result above illustrates a general principle: working
with norms squared is usually easier than working directly with norms.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6A
Inner Products and Norms
Now we come to a crucial definition.
6.10
definition: orthogonal
Two vectors 𝑢, 𝑣∈𝑉are called orthogonal if ⟨𝑢, 𝑣⟩= 0.
The word orthogonal comes from the
Greek word orthogonios, which means
right-angled.
In the definition above, the order of
the two vectors does not matter, because
⟨𝑢, 𝑣⟩= 0 if and only if ⟨𝑣, 𝑢⟩= 0. In-
stead of saying 𝑢and 𝑣are orthogonal,
sometimes we say 𝑢is orthogonal to 𝑣.
Exercise 15 asks you to prove that if 𝑢, 𝑣are nonzero vectors in 𝐑2, then
⟨𝑢, 𝑣⟩= ‖𝑢‖ ‖𝑣‖ cos 𝜃,
where 𝜃is the angle between 𝑢and 𝑣(thinking of 𝑢and 𝑣as arrows with initial
point at the origin). Thus two nonzero vectors in 𝐑2 are orthogonal (with respect
to the Euclidean inner product) if and only if the cosine of the angle between
them is 0, which happens if and only if the vectors are perpendicular in the usual
sense of plane geometry. Thus you can think of the word orthogonal as a fancy
word meaning perpendicular.
We begin our study of orthogonality with an easy result.
6.11
orthogonality and 0
(a) 0 is orthogonal to every vector in 𝑉.
(b) 0 is the only vector in 𝑉that is orthogonal to itself.
Proof
(a) Recall that 6.6(b) states that ⟨0, 𝑣⟩= 0 for every 𝑣∈𝑉.
(b) If 𝑣∈𝑉and ⟨𝑣, 𝑣⟩= 0, then 𝑣= 0 (by definition of inner product).
For the special case 𝑉= 𝐑2, the next theorem was known over 3,500 years ago
in Babylonia and then rediscovered and proved over 2,500 years ago in Greece.
Of course, the proof below is not the original proof.
6.12
Pythagorean theorem
Suppose 𝑢, 𝑣∈𝑉. If 𝑢and 𝑣are orthogonal, then
‖𝑢+ 𝑣‖2 = ‖𝑢‖2 + ‖𝑣‖2.
Proof
Suppose ⟨𝑢, 𝑣⟩= 0. Then
‖𝑢+ 𝑣‖2 = ⟨𝑢+ 𝑣, 𝑢+ 𝑣⟩
= ⟨𝑢, 𝑢⟩+ ⟨𝑢, 𝑣⟩+ ⟨𝑣, 𝑢⟩+ ⟨𝑣, 𝑣⟩
= ‖𝑢‖2 + ‖𝑣‖2.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Suppose 𝑢, 𝑣∈𝑉, with 𝑣≠0. We would like to write 𝑢as a scalar multiple
of 𝑣plus a vector 𝑤orthogonal to 𝑣, as suggested in the picture here.
An orthogonal decomposition:
𝑢expressed as a scalar multiple of 𝑣plus a vector orthogonal to 𝑣.
To discover how to write 𝑢as a scalar multiple of 𝑣plus a vector orthogonal
to 𝑣, let 𝑐∈𝐅denote a scalar. Then
𝑢= 𝑐𝑣+ (𝑢−𝑐𝑣).
Thus we need to choose 𝑐so that 𝑣is orthogonal to (𝑢−𝑐𝑣). Hence we want
0 = ⟨𝑢−𝑐𝑣, 𝑣⟩= ⟨𝑢, 𝑣⟩−𝑐‖𝑣‖2.
The equation above shows that we should choose 𝑐to be ⟨𝑢, 𝑣⟩/‖𝑣‖2. Making this
choice of 𝑐, we can write
𝑢= ⟨𝑢, 𝑣⟩
‖𝑣‖2 𝑣+ (𝑢−⟨𝑢, 𝑣⟩
‖𝑣‖2 𝑣).
As you should verify, the equation displayed above explicitly writes 𝑢as a scalar
multiple of 𝑣plus a vector orthogonal to 𝑣. Thus we have proved the following
key result.
6.13
an orthogonal decomposition
Suppose 𝑢, 𝑣∈𝑉, with 𝑣≠0. Set 𝑐= ⟨𝑢, 𝑣⟩
‖𝑣‖2 and 𝑤= 𝑢−⟨𝑢, 𝑣⟩
‖𝑣‖2 𝑣. Then
𝑢= 𝑐𝑣+ 𝑤
and
⟨𝑤, 𝑣⟩= 0.
The orthogonal decomposition 6.13 will be used in the proof of the Cauchy–
Schwarz inequality, which is our next result and is one of the most important
inequalities in mathematics.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6A
Inner Products and Norms
6.14
Cauchy–Schwarz inequality
Suppose 𝑢, 𝑣∈𝑉. Then
|⟨𝑢, 𝑣⟩| ≤‖𝑢‖ ‖𝑣‖.
This inequality is an equality if and only if one of 𝑢, 𝑣is a scalar multiple of
the other.
Proof
If 𝑣= 0, then both sides of the desired inequality equal 0. Thus we can
assume that 𝑣≠0. Consider the orthogonal decomposition
𝑢= ⟨𝑢, 𝑣⟩
‖𝑣‖2 𝑣+ 𝑤
given by 6.13, where 𝑤is orthogonal to 𝑣. By the Pythagorean theorem,
‖𝑢‖2 = ∥⟨𝑢, 𝑣⟩
‖𝑣‖2 𝑣∥
+ ‖𝑤‖2
= ∣⟨𝑢, 𝑣⟩∣2
‖𝑣‖2
+ ‖𝑤‖2
≥∣⟨𝑢, 𝑣⟩∣2
‖𝑣‖2
.
6.15
Multiplying both sides of this inequality by ‖𝑣‖2 and then taking square roots
gives the desired inequality.
Augustin-Louis Cauchy (1789–1857)
proved 6.16(a) in 1821.
In 1859,
Cauchy’s student Viktor Bunyakovsky
(1804–1889) proved integral inequal-
ities like the one in 6.16(b). A few
decades later, similar discoveries by
Hermann Schwarz (1843–1921) at-
tracted more attention and led to the
name of this inequality.
The proof in the paragraph above
shows that the Cauchy–Schwarz inequal-
ity is an equality if and only if 6.15 is
an equality. This happens if and only
if 𝑤= 0. But 𝑤= 0 if and only if 𝑢
is a multiple of 𝑣(see 6.13). Thus the
Cauchy–Schwarz inequality is an equal-
ity if and only if 𝑢is a scalar multiple of 𝑣
or 𝑣is a scalar multiple of 𝑢(or both; the
phrasing has been chosen to cover cases
in which either 𝑢or 𝑣equals 0).
6.16
example: Cauchy–Schwarz inequality
(a) If 𝑥1, … , 𝑥𝑛, 𝑦1, … , 𝑦𝑛∈𝐑, then
(𝑥1𝑦1 + ⋯+ 𝑥𝑛𝑦𝑛)2 ≤(𝑥1
2 + ⋯+ 𝑥𝑛
2)(𝑦1
2 + ⋯+ 𝑦𝑛
2),
as follows from applying the Cauchy–Schwarz inequality to the vectors
(𝑥1, … , 𝑥𝑛), (𝑦1, … , 𝑦𝑛) ∈𝐑𝑛, using the usual Euclidean inner product.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
(b) If 𝑓, 𝑔are continuous real-valued functions on [−1, 1], then
∣∫
−1 𝑓𝑔∣
2 ≤(∫
−1 𝑓2)(∫
−1 𝑔2),
as follows from applying the Cauchy–Schwarz inequality to Example 6.3(c).
In this triangle, the length of
𝑢+ 𝑣is less than the length
of 𝑢plus the length of 𝑣.
The next result, called the triangle inequality,
has the geometric interpretation that the length
of each side of a triangle is less than the sum of
the lengths of the other two sides.
Note that the triangle inequality implies that
the shortest polygonal path between two points is
a single line segment (a polygonal path consists
of line segments).
6.17
triangle inequality
Suppose 𝑢, 𝑣∈𝑉. Then
‖𝑢+ 𝑣‖ ≤‖𝑢‖ + ‖𝑣‖.
This inequality is an equality if and only if one of 𝑢, 𝑣is a nonnegative real
multiple of the other.
Proof
We have
‖𝑢+ 𝑣‖2 = ⟨𝑢+ 𝑣, 𝑢+ 𝑣⟩
= ⟨𝑢, 𝑢⟩+ ⟨𝑣, 𝑣⟩+ ⟨𝑢, 𝑣⟩+ ⟨𝑣, 𝑢⟩
= ⟨𝑢, 𝑢⟩+ ⟨𝑣, 𝑣⟩+ ⟨𝑢, 𝑣⟩+ ⟨𝑢, 𝑣⟩
= ‖𝑢‖2 + ‖𝑣‖2 + 2 Re⟨𝑢, 𝑣⟩
≤‖𝑢‖2 + ‖𝑣‖2 + 2∣⟨𝑢, 𝑣⟩∣
6.18
≤‖𝑢‖2 + ‖𝑣‖2 + 2‖𝑢‖ ‖𝑣‖
6.19
= (‖𝑢‖ + ‖𝑣‖)2,
where 6.19 follows from the Cauchy–Schwarz inequality (6.14). Taking square
roots of both sides of the inequality above gives the desired inequality.
The proof above shows that the triangle inequality is an equality if and only if
we have equality in 6.18 and 6.19. Thus we have equality in the triangle inequality
if and only if
6.20
⟨𝑢, 𝑣⟩= ‖𝑢‖ ‖𝑣‖.
If one of 𝑢, 𝑣is a nonnegative real multiple of the other, then 6.20 holds. Con-
versely, suppose 6.20 holds. Then the condition for equality in the Cauchy–
Schwarz inequality (6.14) implies that one of 𝑢, 𝑣is a scalar multiple of the other.
This scalar must be a nonnegative real number, by 6.20, completing the proof.
For the reverse triangle inequality, see Exercise 20.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6A
Inner Products and Norms
The diagonals of this parallelogram
are 𝑢+ 𝑣and 𝑢−𝑣.
The next result is called the parallel-
ogram equality because of its geometric
interpretation: in every parallelogram, the
sum of the squares of the lengths of the
diagonals equals the sum of the squares of
the lengths of the four sides. Note that the
proof here is more straightforward than
the usual proof in Euclidean geometry.
6.21
parallelogram equality
Suppose 𝑢, 𝑣∈𝑉. Then
‖𝑢+ 𝑣‖2 + ‖𝑢−𝑣‖2 = 2(‖𝑢‖2 + ‖𝑣‖2).
Proof
We have
‖𝑢+ 𝑣‖2 + ‖𝑢−𝑣‖2 = ⟨𝑢+ 𝑣, 𝑢+ 𝑣⟩+ ⟨𝑢−𝑣, 𝑢−𝑣⟩
= ‖𝑢‖2 + ‖𝑣‖2 + ⟨𝑢, 𝑣⟩+ ⟨𝑣, 𝑢⟩
+ ‖𝑢‖2 + ‖𝑣‖2 −⟨𝑢, 𝑣⟩−⟨𝑣, 𝑢⟩
= 2(‖𝑢‖2 + ‖𝑣‖2),
as desired.
Exercises 6A
Prove or give a counterexample: If 𝑣1, … , 𝑣𝑚∈𝑉, then
𝑚
∑
𝑗= 1
𝑚
∑
𝑘=1
⟨𝑣𝑗, 𝑣𝑘⟩≥0.
Suppose 𝑆∈ℒ(𝑉). Define ⟨⋅, ⋅⟩1 by
⟨𝑢, 𝑣⟩1 = ⟨𝑆𝑢, 𝑆𝑣⟩
for all 𝑢, 𝑣∈𝑉. Show that ⟨⋅, ⋅⟩1 is an inner product on 𝑉if and only if 𝑆is
injective.
(a) Show that the function taking an ordered pair ((𝑥1, 𝑥2), (𝑦1, 𝑦2)) of
elements of 𝐑2 to |𝑥1𝑦1| + |𝑥2𝑦2| is not an inner product on 𝐑2.
(b) Show that the function taking an ordered pair ((𝑥1, 𝑥2, 𝑥3), (𝑦1, 𝑦2, 𝑦3))
of elements of 𝐑3 to 𝑥1𝑦1 + 𝑥3𝑦3 is not an inner product on 𝐑3.
Suppose 𝑇∈ℒ(𝑉) is such that ‖𝑇𝑣‖ ≤‖𝑣‖ for every 𝑣∈𝑉. Prove that
𝑇−√2 𝐼is injective.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Suppose 𝑉is a real inner product space.
(a) Show that ⟨𝑢+ 𝑣, 𝑢−𝑣⟩= ‖𝑢‖2 −‖𝑣‖2 for every 𝑢, 𝑣∈𝑉.
(b) Show that if 𝑢, 𝑣∈𝑉have the same norm, then 𝑢+ 𝑣is orthogonal to
𝑢−𝑣.
(c) Use (b) to show that the diagonals of a rhombus are perpendicular to
each other.
Suppose 𝑢, 𝑣∈𝑉. Prove that ⟨𝑢, 𝑣⟩= 0 ⟺‖𝑢‖ ≤‖𝑢+ 𝑎𝑣‖ for all 𝑎∈𝐅.
Suppose 𝑢, 𝑣∈𝑉. Prove that ‖𝑎𝑢+ 𝑏𝑣‖ = ‖𝑏𝑢+ 𝑎𝑣‖ for all 𝑎, 𝑏∈𝐑if and
only if ‖𝑢‖ = ‖𝑣‖.
Suppose 𝑎, 𝑏, 𝑐, 𝑥, 𝑦∈𝐑and 𝑎2 + 𝑏2 + 𝑐2 + 𝑥2 + 𝑦2 ≤1. Prove that
𝑎+ 𝑏+ 𝑐+ 4𝑥+ 9𝑦≤10.
Suppose 𝑢, 𝑣∈𝑉and ‖𝑢‖ = ‖𝑣‖ = 1 and ⟨𝑢, 𝑣⟩= 1. Prove that 𝑢= 𝑣.
Suppose 𝑢, 𝑣∈𝑉and ‖𝑢‖ ≤1 and ‖𝑣‖ ≤1. Prove that
√1 −‖𝑢‖2√1 −‖𝑣‖2 ≤1 −∣⟨𝑢, 𝑣⟩∣.
Find vectors 𝑢, 𝑣∈𝐑2 such that 𝑢is a scalar multiple of (1, 3), 𝑣is orthog-
onal to (1, 3), and (1, 2) = 𝑢+ 𝑣.
Suppose 𝑎, 𝑏, 𝑐, 𝑑are positive numbers.
(a) Prove that (𝑎+ 𝑏+ 𝑐+ 𝑑)(1
𝑎+ 1
𝑏+ 1
𝑐+ 1
𝑑) ≥16.
(b) For which positive numbers 𝑎, 𝑏, 𝑐, 𝑑is the inequality above an equality?
Show that the square of an average is less than or equal to the average of the
squares. More precisely, show that if 𝑎1, … , 𝑎𝑛∈𝐑, then the square of the
average of 𝑎1, … , 𝑎𝑛is less than or equal to the average of 𝑎1
2, … , 𝑎𝑛
2.
Suppose 𝑣∈𝑉and 𝑣≠0. Prove that 𝑣/‖𝑣‖ is the unique closest element on
the unit sphere of 𝑉to 𝑣. More precisely, prove that if 𝑢∈𝑉and ‖𝑢‖ = 1,
then
∥𝑣−𝑣
‖𝑣‖∥≤‖𝑣−𝑢‖,
with equality only if 𝑢= 𝑣/‖𝑣‖.
Suppose 𝑢, 𝑣are nonzero vectors in 𝐑2. Prove that
⟨𝑢, 𝑣⟩= ‖𝑢‖ ‖𝑣‖ cos 𝜃,
where 𝜃is the angle between 𝑢and 𝑣(thinking of 𝑢and 𝑣as arrows with
initial point at the origin).
Hint: Use the law of cosines on the triangle formed by 𝑢, 𝑣, and 𝑢−𝑣.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6A
Inner Products and Norms
The angle between two vectors (thought of as arrows with initial point at
the origin) in 𝐑2 or 𝐑3 can be defined geometrically. However, geometry is
not as clear in 𝐑𝑛for 𝑛> 3. Thus the angle between two nonzero vectors
𝑥, 𝑦∈𝐑𝑛is defined to be
arccos ⟨𝑥, 𝑦⟩
‖𝑥‖ ‖𝑦‖,
where the motivation for this definition comes from Exercise 15. Explain
why the Cauchy–Schwarz inequality is needed to show that this definition
makes sense.
Prove that
(
𝑛
∑
𝑘=1
𝑎𝑘𝑏𝑘)
≤(
𝑛
∑
𝑘=1
𝑘𝑎𝑘
2)(
𝑛
∑
𝑘=1
𝑏𝑘
𝑘)
for all real numbers 𝑎1, … , 𝑎𝑛and 𝑏1, … , 𝑏𝑛.
(a) Suppose 𝑓∶[1, ∞) →[0, ∞) is continuous. Show that
(∫
∞
𝑓)
2 ≤∫
∞
1 𝑥2( 𝑓(𝑥))2 𝑑𝑥.
(b) For which continuous functions 𝑓∶[1, ∞) →[0, ∞) is the inequality
in (a) an equality with both sides finite?
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝑇∈ℒ(𝑉). Prove that if 𝜆is an
eigenvalue of 𝑇, then
|𝜆|2 ≤
𝑛
∑
𝑗= 1
𝑛
∑
𝑘=1
|ℳ(𝑇)𝑗,𝑘|2,
where ℳ(𝑇)𝑗,𝑘denotes the entry in row 𝑗, column 𝑘of the matrix of 𝑇with
respect to the basis 𝑣1, … , 𝑣𝑛.
Prove that if 𝑢, 𝑣∈𝑉, then ∣‖𝑢‖ −‖𝑣‖ ∣≤‖𝑢−𝑣‖.
The inequality above is called the reverse triangle inequality. For the
reverse triangle inequality when 𝑉= 𝐂, see Exercise 2 in Chapter 4.
Suppose 𝑢, 𝑣∈𝑉are such that
‖𝑢‖ = 3,
‖𝑢+ 𝑣‖ = 4,
‖𝑢−𝑣‖ = 6.
What number does ‖𝑣‖ equal?
Show that if 𝑢, 𝑣∈𝑉, then
‖𝑢+ 𝑣‖ ‖𝑢−𝑣‖ ≤‖𝑢‖2 + ‖𝑣‖2.
Suppose 𝑣1, … , 𝑣𝑚∈𝑉are such that ‖𝑣𝑘‖ ≤1 for each 𝑘= 1, … , 𝑚. Show
that there exist 𝑎1, … , 𝑎𝑚∈{1, −1} such that
‖𝑎1𝑣1 + ⋯+ 𝑎𝑚𝑣𝑚‖ ≤
√𝑚.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Prove or give a counterexample: If ‖⋅‖ is the norm associated with an inner
product on 𝐑2, then there exists (𝑥, 𝑦) ∈𝐑2such that ‖(𝑥, 𝑦)‖ ≠max{|𝑥|, |𝑦|}.
Suppose 𝑝> 0. Prove that there is an inner product on 𝐑2 such that the
associated norm is given by
‖(𝑥, 𝑦)‖ = (|𝑥|𝑝+ |𝑦|𝑝)1/𝑝
for all (𝑥, 𝑦) ∈𝐑2 if and only if 𝑝= 2.
Suppose 𝑉is a real inner product space. Prove that
⟨𝑢, 𝑣⟩= ‖𝑢+ 𝑣‖2 −‖𝑢−𝑣‖2
for all 𝑢, 𝑣∈𝑉.
Suppose 𝑉is a complex inner product space. Prove that
⟨𝑢, 𝑣⟩= ‖𝑢+ 𝑣‖2 −‖𝑢−𝑣‖2 + ‖𝑢+ 𝑖𝑣‖2𝑖−‖𝑢−𝑖𝑣‖2𝑖
for all 𝑢, 𝑣∈𝑉.
A norm on a vector space 𝑈is a function
‖⋅‖∶𝑈→[0, ∞)
such that ‖𝑢‖ = 0 if and only if 𝑢= 0, ‖𝛼𝑢‖ = |𝛼|‖𝑢‖ for all 𝛼∈𝐅and all
𝑢∈𝑈, and ‖𝑢+𝑣‖ ≤‖𝑢‖+‖𝑣‖ for all 𝑢, 𝑣∈𝑈. Prove that a norm satisfying
the parallelogram equality comes from an inner product (in other words,
show that if ‖⋅‖ is a norm on 𝑈satisfying the parallelogram equality, then
there is an inner product ⟨⋅, ⋅⟩on 𝑈such that ‖𝑢‖ = ⟨𝑢, 𝑢⟩1/2 for all 𝑢∈𝑈).
Suppose 𝑉1, … , 𝑉𝑚are inner product spaces. Show that the equation
⟨(𝑢1, … , 𝑢𝑚), (𝑣1, … , 𝑣𝑚)⟩= ⟨𝑢1, 𝑣1⟩+ ⋯+ ⟨𝑢𝑚, 𝑣𝑚⟩
defines an inner product on 𝑉1 × ⋯× 𝑉𝑚.
In the expression above on the right, for each 𝑘= 1, … , 𝑚, the inner product
⟨𝑢𝑘, 𝑣𝑘⟩denotes the inner product on 𝑉𝑘. Each of the spaces 𝑉1, … , 𝑉𝑚may
have a different inner product, even though the same notation is used here.
Suppose 𝑉is a real inner product space. For 𝑢, 𝑣, 𝑤, 𝑥∈𝑉, define
⟨𝑢+ 𝑖𝑣, 𝑤+ 𝑖𝑥⟩𝐂= ⟨𝑢, 𝑤⟩+ ⟨𝑣, 𝑥⟩+ (⟨𝑣, 𝑤⟩−⟨𝑢, 𝑥⟩)𝑖.
(a) Show that ⟨⋅, ⋅⟩𝐂makes 𝑉𝐂into a complex inner product space.
(b) Show that if 𝑢, 𝑣∈𝑉, then
⟨𝑢, 𝑣⟩𝐂= ⟨𝑢, 𝑣⟩
and
‖𝑢+ 𝑖𝑣‖𝐂
2 = ‖𝑢‖2 + ‖𝑣‖2.
See Exercise 8 in Section 1B for the definition of the complexification 𝑉𝐂.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6A
Inner Products and Norms
Suppose 𝑢, 𝑣, 𝑤∈𝑉. Prove that
∥𝑤−1
2(𝑢+ 𝑣)∥2 = ‖𝑤−𝑢‖2 + ‖𝑤−𝑣‖2
−‖𝑢−𝑣‖2
.
Suppose that 𝐸is a subset of 𝑉with the property that 𝑢, 𝑣∈𝐸implies
2(𝑢+ 𝑣) ∈𝐸. Let 𝑤∈𝑉. Show that there is at most one point in 𝐸that is
closest to 𝑤. In other words, show that there is at most one 𝑢∈𝐸such that
‖𝑤−𝑢‖ ≤‖𝑤−𝑥‖
for all 𝑥∈𝐸.
Suppose 𝑓, 𝑔are differentiable functions from 𝐑to 𝐑𝑛.
(a) Show that
⟨𝑓(𝑡), 𝑔(𝑡)⟩′ = ⟨𝑓′(𝑡), 𝑔(𝑡)⟩+ ⟨𝑓(𝑡), 𝑔′(𝑡)⟩.
(b) Suppose 𝑐is a positive number and ∥𝑓(𝑡)∥= 𝑐for every 𝑡∈𝐑. Show
that ⟨𝑓′(𝑡), 𝑓(𝑡)⟩= 0 for every 𝑡∈𝐑.
(c) Interpret the result in (b) geometrically in terms of the tangent vector to
a curve lying on a sphere in 𝐑𝑛centered at the origin.
A function 𝑓∶𝐑→𝐑𝑛is called differentiable if there exist differentiable
functions 𝑓1, … , 𝑓𝑛from 𝐑to 𝐑such that 𝑓(𝑡) = ( 𝑓1(𝑡), … , 𝑓𝑛(𝑡)) for each
𝑡∈𝐑. Furthermore, for each 𝑡∈𝐑, the derivative 𝑓′(𝑡) ∈𝐑𝑛is defined by
𝑓′(𝑡) = ( 𝑓1
′(𝑡), … , 𝑓𝑛
′(𝑡)).
Use inner products to prove Apollonius’s identity: In a triangle with sides of
length 𝑎, 𝑏, and 𝑐, let 𝑑be the length of the line segment from the midpoint
of the side of length 𝑐to the opposite vertex. Then
𝑎2 + 𝑏2 = 1
2𝑐2 + 2𝑑2.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Fix a positive integer 𝑛. The Laplacian Δ𝑝of a twice differentiable real-
valued function 𝑝on 𝐑𝑛is the function on 𝐑𝑛defined by
Δ𝑝= 𝜕2𝑝
𝜕𝑥12 + ⋯+ 𝜕2𝑝
𝜕𝑥𝑛2 .
The function 𝑝is called harmonic if Δ𝑝= 0.
A polynomial on 𝐑𝑛is a linear combination (with coefficients in 𝐑) of
functions of the form 𝑥1
𝑚1 ⋯𝑥𝑛
𝑚𝑛, where 𝑚1, … , 𝑚𝑛are nonnegative integers.
Suppose 𝑞is a polynomial on 𝐑𝑛. Prove that there exists a harmonic
polynomial 𝑝on 𝐑𝑛such that 𝑝(𝑥) = 𝑞(𝑥) for every 𝑥∈𝐑𝑛with ‖𝑥‖ = 1.
The only fact about harmonic functions that you need for this exercise is
that if 𝑝is a harmonic function on 𝐑𝑛and 𝑝(𝑥) = 0 for all 𝑥∈𝐑𝑛with
‖𝑥‖ = 1, then 𝑝= 0.
Hint: A reasonable guess is that the desired harmonic polynomial 𝑝is of the
form 𝑞+(1−‖𝑥‖2)𝑟for some polynomial 𝑟. Prove that there is a polynomial
𝑟on 𝐑𝑛such that 𝑞+ (1 −‖𝑥‖2)𝑟is harmonic by defining an operator 𝑇on
a suitable vector space by
𝑇𝑟= Δ((1 −‖𝑥‖2)𝑟)
and then showing that 𝑇is injective and hence surjective.
In realms of numbers, where the secrets lie,
A noble truth emerges from the deep,
Cauchy and Schwarz, their wisdom they apply,
An inequality for all to keep.
Two vectors, by this bond, are intertwined,
As inner products weave a gilded thread,
Their magnitude, by providence, confined,
A bound to which their destiny is wed.
Though shadows fall, and twilight dims the day,
This inequality will stand the test,
To guide us in our quest, to light the way,
And in its truth, our understanding rest.
So sing, ye muses, of this noble feat,
Cauchy–Schwarz, the bound that none can beat.
—written by ChatGPT with input Shakespearean sonnet on Cauchy–Schwarz inequality
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6B
Orthonormal Bases
6B Orthonormal Bases
Orthonormal Lists and the Gram–Schmidt Procedure
6.22
definition: orthonormal
• A list of vectors is called orthonormal if each vector in the list has norm 1
and is orthogonal to all the other vectors in the list.
• In other words, a list 𝑒1, … , 𝑒𝑚of vectors in 𝑉is orthonormal if
⟨𝑒𝑗, 𝑒𝑘⟩=
⎧{
⎨{⎩
if 𝑗= 𝑘,
if 𝑗≠𝑘
for all 𝑗, 𝑘∈{1, … , 𝑚}.
6.23
example: orthonormal lists
(a) The standard basis of 𝐅𝑛is an orthonormal list.
(b) ( 1
√3,
√3,
√3), (−1
√2,
√2, 0) is an orthonormal list in 𝐅3.
(c) ( 1
√3,
√3,
√3), (−1
√2,
√2, 0), ( 1
√6,
√6, −2
√6) is an orthonormal list in 𝐅3.
(d) Suppose 𝑛is a positive integer. Then, as Exercise 4 asks you to verify,
√2𝜋
, cos 𝑥
√𝜋, cos 2𝑥
√𝜋, … , cos 𝑛𝑥
√𝜋, sin 𝑥
√𝜋, sin 2𝑥
√𝜋, … , sin 𝑛𝑥
√𝜋
is an orthonormal list of vectors in 𝐶[−𝜋, 𝜋], the vector space of continuous
real-valued functions on [−𝜋, 𝜋] with inner product
⟨𝑓, 𝑔⟩= ∫
𝜋
−𝜋𝑓𝑔.
The orthonormal list above is often used for modeling periodic phenomena,
such as tides.
(e) Suppose we make 𝒫2(𝐑) into an inner product space using the inner product
given by
⟨𝑝, 𝑞⟩= ∫
−1 𝑝𝑞
for all 𝑝, 𝑞∈𝒫2(𝐑). The standard basis 1, 𝑥, 𝑥2 of 𝒫2(𝐑) is not an orthonor-
mal list because the vectors in that list do not have norm 1. Dividing each
vector by its norm gives the list 1/√2, √3/2𝑥, √5/2𝑥2, in which each vector
has norm 1, and the second vector is orthogonal to the first and third vectors.
However, the first and third vectors are not orthogonal. Thus this is not an
orthonormal list. Soon we will see how to construct an orthonormal list from
the standard basis 1, 𝑥, 𝑥2 (see Example 6.34).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Orthonormal lists are particularly easy to work with, as illustrated by the next
result.
6.24
norm of an orthonormal linear combination
Suppose 𝑒1, … , 𝑒𝑚is an orthonormal list of vectors in 𝑉. Then
‖𝑎1𝑒1 + ⋯+ 𝑎𝑚𝑒𝑚‖2 = |𝑎1|2 + ⋯+ |𝑎𝑚|2
for all 𝑎1, … , 𝑎𝑚∈𝐅.
Proof
Because each 𝑒𝑘has norm 1, this follows from repeated applications of
the Pythagorean theorem (6.12).
The result above has the following important corollary.
6.25
orthonormal lists are linearly independent
Every orthonormal list of vectors is linearly independent.
Proof
Suppose 𝑒1, … , 𝑒𝑚is an orthonormal list of vectors in 𝑉and 𝑎1, … , 𝑎𝑚∈𝐅
are such that
𝑎1𝑒1 + ⋯+ 𝑎𝑚𝑒𝑚= 0.
Then |𝑎1|2 + ⋯+ |𝑎𝑚|2 = 0 (by 6.24), which means that all the 𝑎𝑘’s are 0. Thus
𝑒1, … , 𝑒𝑚is linearly independent.
Now we come to an important inequality.
6.26
Bessel’s inequality
Suppose 𝑒1, … , 𝑒𝑚is an orthonormal list of vectors in 𝑉. If 𝑣∈𝑉then
∣⟨𝑣, 𝑒1⟩∣2 + ⋯+ ∣⟨𝑣, 𝑒𝑚⟩∣2 ≤‖𝑣‖2.
Proof
Suppose 𝑣∈𝑉. Then
𝑣= ⟨𝑣, 𝑒1⟩𝑒1 + ⋯+ ⟨𝑣, 𝑒𝑚⟩𝑒𝑚
⏟⏟⏟⏟⏟⏟⏟⏟⏟
𝑢
+ 𝑣−⟨𝑣, 𝑒1⟩𝑒1 −⋯−⟨𝑣, 𝑒𝑚⟩𝑒𝑚
⏟⏟⏟⏟⏟⏟⏟⏟⏟⏟⏟
𝑤
.
Let 𝑢and 𝑤be defined as in the equation above. If 𝑘∈{1, … , 𝑚}, then
⟨𝑤, 𝑒𝑘⟩= ⟨𝑣, 𝑒𝑘⟩−⟨𝑣, 𝑒𝑘⟩⟨𝑒𝑘, 𝑒𝑘⟩= 0. This implies that ⟨𝑤, 𝑢⟩= 0. The
Pythagorean theorem now implies that
‖𝑣‖2 = ‖𝑢‖2 + ‖𝑤‖2
≥‖𝑢‖2
= ∣⟨𝑣, 𝑒1⟩∣2 + ⋯+ ∣⟨𝑣, 𝑒𝑚⟩∣2,
where the last line comes from 6.24.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6B
Orthonormal Bases
The next definition introduces one of the most useful concepts in the study of
inner product spaces.
6.27
definition: orthonormal basis
An orthonormal basis of 𝑉is an orthonormal list of vectors in 𝑉that is also a
basis of 𝑉.
For example, the standard basis is an orthonormal basis of 𝐅𝑛.
6.28
orthonormal lists of the right length are orthonormal bases
Suppose 𝑉is finite-dimensional. Then every orthonormal list of vectors in 𝑉
of length dim 𝑉is an orthonormal basis of 𝑉.
Proof
By 6.25, every orthonormal list of vectors in 𝑉is linearly independent.
Thus every such list of the right length is a basis—see 2.38.
6.29
example: an orthonormal basis of 𝐅4
As mentioned above, the standard basis is an orthonormal basis of 𝐅4. We now
show that
( 1
2, 1
2, 1
2, 1
2), ( 1
2, 1
2, −1
2, −1
2), ( 1
2, −1
2, −1
2, 1
2), (−1
2, 1
2, −1
2, 1
2)
is also an orthonormal basis of 𝐅4.
We have
∥( 1
2, 1
2, 1
2, 1
2)∥= √1
22 + 1
22 + 1
22 + 1
22 = 1.
Similarly, the other three vectors in the list above also have norm 1.
Note that
⟨( 1
2, 1
2, 1
2, 1
2), ( 1
2, 1
2, −1
2, −1
2)⟩= 1
2 ⋅1
2 + 1
2 ⋅1
2 + 1
2 ⋅(−1
2) + 1
2 ⋅(−1
2) = 0.
Similarly, the inner product of any two distinct vectors in the list above also
equals 0.
Thus the list above is orthonormal. Because we have an orthonormal list of
length four in the four-dimensional vector space 𝐅4, this list is an orthonormal
basis of 𝐅4 (by 6.28).
In general, given a basis 𝑒1, … , 𝑒𝑛of 𝑉and a vector 𝑣∈𝑉, we know that there
is some choice of scalars 𝑎1, … , 𝑎𝑛∈𝐅such that
𝑣= 𝑎1𝑒1 + ⋯+ 𝑎𝑛𝑒𝑛.
Computing the numbers 𝑎1, … , 𝑎𝑛that satisfy the equation above can be a long
computation for an arbitrary basis of 𝑉. The next result shows, however, that this
is easy for an orthonormal basis—just take 𝑎𝑘= ⟨𝑣, 𝑒𝑘⟩.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
The formula below for ‖𝑣‖ is called
Parseval’s identity. It was published in
1799 in the context of Fourier series.
Notice how the next result makes
each inner product space of dimension
𝑛behave like 𝐅𝑛, with the role of the
coordinates of a vector in 𝐅𝑛played by
⟨𝑣, 𝑒1⟩, … , ⟨𝑣, 𝑒𝑛⟩.
6.30
writing a vector as a linear combination of an orthonormal basis
Suppose 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉and 𝑢, 𝑣∈𝑉. Then
(a) 𝑣= ⟨𝑣, 𝑒1⟩𝑒1 + ⋯+ ⟨𝑣, 𝑒𝑛⟩𝑒𝑛;
(b) ‖𝑣‖2 = ∣⟨𝑣, 𝑒1⟩∣2 + ⋯+ ∣⟨𝑣, 𝑒𝑛⟩∣2;
(c) ⟨𝑢, 𝑣⟩= ⟨𝑢, 𝑒1⟩⟨𝑣, 𝑒1⟩+ ⋯+ ⟨𝑢, 𝑒𝑛⟩⟨𝑣, 𝑒𝑛⟩.
Proof
Because 𝑒1, … , 𝑒𝑛is a basis of 𝑉, there exist scalars 𝑎1, … , 𝑎𝑛such that
𝑣= 𝑎1𝑒1 + ⋯+ 𝑎𝑛𝑒𝑛.
Because 𝑒1, … , 𝑒𝑛is orthonormal, taking the inner product of both sides of this
equation with 𝑒𝑘gives ⟨𝑣, 𝑒𝑘⟩= 𝑎𝑘. Thus (a) holds.
Now (b) follows immediately from (a) and 6.24.
Take the inner product of 𝑢with each side of (a) and then get (c) by using
conjugate linearity [6.6(d) and 6.6(e)] in the second slot of the inner product.
6.31
example: finding coefficients for a linear combination
Suppose we want to write the vector (1, 2, 4, 7) ∈𝐅4 as a linear combination
of the orthonormal basis
( 1
2, 1
2, 1
2, 1
2), ( 1
2, 1
2, −1
2, −1
2), ( 1
2, −1
2, −1
2, 1
2), (−1
2, 1
2, −1
2, 1
2)
of 𝐅4 from Example 6.29. Instead of solving a system of four linear equations
in four unknowns, as typically would be required if we were working with a
nonorthonormal basis, we simply evaluate four inner products and use 6.30(a),
getting that (1, 2, 4, 7) equals
7( 1
2, 1
2, 1
2, 1
2) −4( 1
2, 1
2, −1
2, −1
2) + ( 1
2, −1
2, −1
2, 1
2) + 2(−1
2, 1
2, −1
2, 1
2).
Now that we understand the usefulness of orthonormal bases, how do we go
about finding them? For example, does 𝒫𝑚(𝐑) with inner product as in 6.3(c)
have an orthonormal basis? The next result will lead to answers to these questions.
Jørgen Gram (1850–1916) and Erhard
Schmidt (1876–1959) popularized this
algorithm that constructs orthonormal
lists.
The algorithm used in the next proof
is called the Gram–Schmidt procedure.
It gives a method for turning a linearly
independent list into an orthonormal list
with the same span as the original list.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6B
Orthonormal Bases
6.32
Gram–Schmidt procedure
Suppose 𝑣1, … , 𝑣𝑚is a linearly independent list of vectors in 𝑉. Let 𝑓1 = 𝑣1.
For 𝑘= 2, … , 𝑚, define 𝑓𝑘inductively by
𝑓𝑘= 𝑣𝑘−⟨𝑣𝑘, 𝑓1⟩
‖ 𝑓1‖2
𝑓1 −⋯−⟨𝑣𝑘, 𝑓𝑘−1⟩
‖ 𝑓𝑘−1‖2
𝑓𝑘−1.
For each 𝑘= 1, … , 𝑚, let 𝑒𝑘=
𝑓𝑘
‖ 𝑓𝑘‖. Then 𝑒1, … , 𝑒𝑚is an orthonormal list of
vectors in 𝑉such that
span(𝑣1, … , 𝑣𝑘) = span(𝑒1, … , 𝑒𝑘)
for each 𝑘= 1, … , 𝑚.
Proof
We will show by induction on 𝑘that the desired conclusion holds. To
get started with 𝑘= 1, note that because 𝑒1 = 𝑓1/‖ 𝑓1‖, we have ‖𝑒1‖ = 1; also,
span(𝑣1) = span(𝑒1) because 𝑒1 is a nonzero multiple of 𝑣1.
Suppose 1 < 𝑘≤𝑚and the list 𝑒1, … , 𝑒𝑘−1 generated by 6.32 is an orthonormal
list such that
6.33
span(𝑣1, … , 𝑣𝑘−1) = span(𝑒1, … , 𝑒𝑘−1).
Because 𝑣1, … , 𝑣𝑚is linearly independent, we have 𝑣𝑘∉span(𝑣1, … , 𝑣𝑘−1). Thus
𝑣𝑘∉span(𝑒1, … , 𝑒𝑘−1) = span( 𝑓1, … , 𝑓𝑘−1), which implies that 𝑓𝑘≠0. Hence
we are not dividing by 0 in the definition of 𝑒𝑘given in 6.32. Dividing a vector by
its norm produces a new vector with norm 1; thus ‖𝑒𝑘‖ = 1.
Let 𝑗∈{1, … , 𝑘−1}. Then
⟨𝑒𝑘, 𝑒𝑗⟩=
‖ 𝑓𝑘‖ ‖ 𝑓𝑗‖⟨𝑓𝑘, 𝑓𝑗⟩
=
‖ 𝑓𝑘‖ ‖ 𝑓𝑗‖⟨𝑣𝑘−⟨𝑣𝑘, 𝑓1⟩
‖ 𝑓1‖2
𝑓1 −⋯−⟨𝑣𝑘, 𝑓𝑘−1⟩
‖ 𝑓𝑘−1‖2
𝑓𝑘−1, 𝑓𝑗⟩
=
‖ 𝑓𝑘‖ ‖ 𝑓𝑗‖(⟨𝑣𝑘, 𝑓𝑗⟩−⟨𝑣𝑘, 𝑓𝑗⟩)
= 0.
Thus 𝑒1, … , 𝑒𝑘is an orthonormal list.
From the definition of 𝑒𝑘given in 6.32, we see that 𝑣𝑘∈span(𝑒1, … , 𝑒𝑘).
Combining this information with 6.33 shows that
span(𝑣1, … , 𝑣𝑘) ⊆span(𝑒1, … , 𝑒𝑘).
Both lists above are linearly independent (the 𝑣’s by hypothesis, and the 𝑒’s by
orthonormality and 6.25). Thus both subspaces above have dimension 𝑘, and
hence they are equal, completing the induction step and thus completing the
proof.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
6.34
example: an orthonormal basis of 𝒫2(𝐑)
Suppose we make 𝒫2(𝐑) into an inner product space using the inner product
given by
⟨𝑝, 𝑞⟩= ∫
−1 𝑝𝑞
for all 𝑝, 𝑞∈𝒫2(𝐑). We know that 1, 𝑥, 𝑥2 is a basis of 𝒫2(𝐑), but it is not an
orthonormal basis. We will find an orthonormal basis of 𝒫2(𝐑) by applying the
Gram–Schmidt procedure with 𝑣1 = 1, 𝑣2 = 𝑥, and 𝑣3 = 𝑥2.
To get started, take 𝑓1 = 𝑣1 = 1. Thus ‖ 𝑓1‖2 = ∫1
−1 1 = 2. Hence the formula
in 6.32 tells us that
𝑓2 = 𝑣2 −⟨𝑣2, 𝑓1⟩
‖ 𝑓1‖2
𝑓1 = 𝑥−⟨𝑥, 1⟩
‖ 𝑓1‖2 = 𝑥,
where the last equality holds because ⟨𝑥, 1⟩= ∫1
−1 𝑡𝑑𝑡= 0.
The formula above for 𝑓2 implies that ‖ 𝑓2‖2 = ∫1
−1 𝑡2 𝑑𝑡= 2
3. Now the formula
in 6.32 tells us that
𝑓3 = 𝑣3 −⟨𝑣3, 𝑓1⟩
‖ 𝑓1‖2
𝑓1 −⟨𝑣3, 𝑓2⟩
‖ 𝑓2‖2
𝑓2 = 𝑥2 −1
2⟨𝑥2, 1⟩−3
2⟨𝑥2, 𝑥⟩𝑥= 𝑥2 −1
3.
The formula above for 𝑓3 implies that
‖ 𝑓3‖2 = ∫
−1(𝑡2 −1
3)
2 𝑑𝑡= ∫
−1(𝑡4 −2
3𝑡2 + 1
9) 𝑑𝑡=
45.
Now dividing each of 𝑓1, 𝑓2, 𝑓3 by its norm gives us the orthonormal list
√1
2, √3
2𝑥, √45
8 (𝑥2 −1
3).
The orthonormal list above has length three, which is the dimension of 𝒫2(𝐑).
Hence this orthonormal list is an orthonormal basis of 𝒫2(𝐑) [by 6.28].
Now we can answer the question about the existence of orthonormal bases.
6.35
existence of orthonormal basis
Every finite-dimensional inner product space has an orthonormal basis.
Proof
Suppose 𝑉is finite-dimensional. Choose a basis of 𝑉. Apply the Gram–
Schmidt procedure (6.32) to it, producing an orthonormal list of length dim 𝑉.
By 6.28, this orthonormal list is an orthonormal basis of 𝑉.
Sometimes we need to know not only that an orthonormal basis exists, but also
that every orthonormal list can be extended to an orthonormal basis. In the next
corollary, the Gram–Schmidt procedure shows that such an extension is always
possible.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6B
Orthonormal Bases
6.36
every orthonormal list extends to an orthonormal basis
Suppose 𝑉is finite-dimensional. Then every orthonormal list of vectors in 𝑉
can be extended to an orthonormal basis of 𝑉.
Proof
Suppose 𝑒1, … , 𝑒𝑚is an orthonormal list of vectors in 𝑉. Then 𝑒1, … , 𝑒𝑚
is linearly independent (by 6.25). Hence this list can be extended to a basis
𝑒1, … , 𝑒𝑚, 𝑣1, … , 𝑣𝑛of 𝑉(see 2.32). Now apply the Gram–Schmidt procedure
(6.32) to 𝑒1, … , 𝑒𝑚, 𝑣1, … , 𝑣𝑛, producing an orthonormal list
𝑒1, … , 𝑒𝑚, 𝑓1, … , 𝑓𝑛;
here the formula given by the Gram–Schmidt procedure leaves the first 𝑚vectors
unchanged because they are already orthonormal. The list above is an orthonormal
basis of 𝑉by 6.28.
Recall that a matrix is called upper triangular if it looks like this:
⎛⎜⎜⎜
⎝
∗
∗
⋱
∗
⎞⎟⎟⎟
⎠
,
where the 0 in the matrix above indicates that all entries below the diagonal
equal 0, and asterisks are used to denote entries on and above the diagonal.
In the last chapter, we gave a necessary and sufficient condition for an operator
to have an upper-triangular matrix with respect to some basis (see 5.44). Now that
we are dealing with inner product spaces, we would like to know whether there
exists an orthonormal basis with respect to which we have an upper-triangular
matrix. The next result shows that the condition for an operator to have an upper-
triangular matrix with respect to some orthonormal basis is the same as the
condition to have an upper-triangular matrix with respect to an arbitrary basis.
6.37
upper-triangular matrix with respect to some orthonormal basis
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Then 𝑇has an upper-
triangular matrix with respect to some orthonormal basis of 𝑉if and only if the
minimal polynomial of 𝑇equals (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚) for some 𝜆1, … , 𝜆𝑚∈𝐅.
Proof
Suppose 𝑇has an upper-triangular matrix with respect to some basis
𝑣1, … , 𝑣𝑛of 𝑉. Thus span(𝑣1, … , 𝑣𝑘) is invariant under 𝑇for each 𝑘= 1, … , 𝑛
(see 5.39).
Apply the Gram–Schmidt procedure to 𝑣1, … , 𝑣𝑛, producing an orthonormal
basis 𝑒1, … , 𝑒𝑛of 𝑉. Because
span(𝑒1, … , 𝑒𝑘) = span(𝑣1, … , 𝑣𝑘)
for each 𝑘(see 6.32), we conclude that span(𝑒1, … , 𝑒𝑘) is invariant under 𝑇for
each 𝑘= 1, … , 𝑛. Thus, by 5.39, 𝑇has an upper-triangular matrix with respect to
the orthonormal basis 𝑒1, … , 𝑒𝑛. Now use 5.44 to complete the proof.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Issai Schur (1875–1941) published a
proof of the next result in 1909.
For complex vector spaces, the next
result is an important application of the
result above. See Exercise 20 for a ver-
sion of Schur’s theorem that applies simultaneously to more than one operator.
6.38
Schur’s theorem
Every operator on a finite-dimensional complex inner product space has an
upper-triangular matrix with respect to some orthonormal basis.
Proof
The desired result follows from the second version of the fundamental
theorem of algebra (4.13) and 6.37.
Linear Functionals on Inner Product Spaces
Because linear maps into the scalar field 𝐅play a special role, we defined a special
name for them and their vector space in Section 3F. Those definitions are repeated
below in case you skipped Section 3F.
6.39
definition: linear functional, dual space, 𝑉′
• A linear functional on 𝑉is a linear map from 𝑉to 𝐅.
• The dual space of 𝑉, denoted by 𝑉′, is the vector space of all linear
functionals on 𝑉. In other words, 𝑉′ = ℒ(𝑉, 𝐅).
6.40
example: linear functional on 𝐅3
The function 𝜑∶𝐅3 →𝐅defined by
𝜑(𝑧1, 𝑧2, 𝑧3) = 2𝑧1 −5𝑧2 + 𝑧3
is a linear functional on 𝐅3. We could write this linear functional in the form
𝜑(𝑧) = ⟨𝑧, 𝑤⟩
for every 𝑧∈𝐅3, where 𝑤= (2, −5, 1).
6.41
example: linear functional on 𝒫5(𝐑)
The function 𝜑∶𝒫5(𝐑) →𝐑defined by
𝜑(𝑝) = ∫
−1 𝑝(𝑡)(cos(𝜋𝑡)) 𝑑𝑡
is a linear functional on 𝒫5(𝐑).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6B
Orthonormal Bases
The next result is named in honor
of Frigyes Riesz (1880–1956), who
proved several theorems early in the
twentieth century that look very much
like the result below.
If 𝑣∈𝑉, then the map that sends 𝑢
to ⟨𝑢, 𝑣⟩is a linear functional on 𝑉. The
next result states that every linear func-
tional on 𝑉is of this form. For example,
we can take 𝑣= (2, −5, 1) in Example
6.40.
Suppose we make the vector space 𝒫5(𝐑) into an inner product space by
defining ⟨𝑝, 𝑞⟩= ∫1
−1 𝑝𝑞. Let 𝜑be as in Example 6.41. It is not obvious that there
exists 𝑞∈𝒫5(𝐑) such that
∫
−1 𝑝(𝑡)(cos(𝜋𝑡)) 𝑑𝑡= ⟨𝑝, 𝑞⟩
for every 𝑝∈𝒫5(𝐑) [we cannot take 𝑞(𝑡) = cos(𝜋𝑡) because that choice of 𝑞is
not an element of 𝒫5(𝐑)]. The next result tells us the somewhat surprising result
that there indeed exists a polynomial 𝑞∈𝒫5(𝐑) such that the equation above
holds for all 𝑝∈𝒫5(𝐑).
6.42
Riesz representation theorem
Suppose 𝑉is finite-dimensional and 𝜑is a linear functional on 𝑉. Then there
is a unique vector 𝑣∈𝑉such that
𝜑(𝑢) = ⟨𝑢, 𝑣⟩
for every 𝑢∈𝑉.
Proof
First we show that there exists a vector 𝑣∈𝑉such that 𝜑(𝑢) = ⟨𝑢, 𝑣⟩for
every 𝑢∈𝑉. Let 𝑒1, … , 𝑒𝑛be an orthonormal basis of 𝑉. Then
𝜑(𝑢) = 𝜑(⟨𝑢, 𝑒1⟩𝑒1 + ⋯+ ⟨𝑢, 𝑒𝑛⟩𝑒𝑛)
= ⟨𝑢, 𝑒1⟩𝜑(𝑒1) + ⋯+ ⟨𝑢, 𝑒𝑛⟩𝜑(𝑒𝑛)
= ⟨𝑢, 𝜑(𝑒1)𝑒1 + ⋯+ 𝜑(𝑒𝑛)𝑒𝑛⟩
for every 𝑢∈𝑉, where the first equality comes from 6.30(a). Thus setting
6.43
𝑣= 𝜑(𝑒1)𝑒1 + ⋯+ 𝜑(𝑒𝑛)𝑒𝑛,
we have 𝜑(𝑢) = ⟨𝑢, 𝑣⟩for every 𝑢∈𝑉, as desired.
Now we prove that only one vector 𝑣∈𝑉has the desired behavior. Suppose
𝑣1, 𝑣2 ∈𝑉are such that
𝜑(𝑢) = ⟨𝑢, 𝑣1⟩= ⟨𝑢, 𝑣2⟩
for every 𝑢∈𝑉. Then
0 = ⟨𝑢, 𝑣1⟩−⟨𝑢, 𝑣2⟩= ⟨𝑢, 𝑣1 −𝑣2⟩
for every 𝑢∈𝑉. Taking 𝑢= 𝑣1 −𝑣2 shows that 𝑣1 −𝑣2 = 0. Thus 𝑣1 = 𝑣2,
completing the proof of the uniqueness part of the result.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
6.44
example: computation illustrating Riesz representation theorem
Suppose we want to find a polynomial 𝑞∈𝒫2(𝐑) such that
6.45
∫
−1 𝑝(𝑡)(cos(𝜋𝑡)) 𝑑𝑡= ∫
−1 𝑝𝑞
for every polynomial 𝑝∈𝒫2(𝐑). To do this, we make 𝒫2(𝐑) into an inner product
space by defining ⟨𝑝, 𝑞⟩to be the right side of the equation above for 𝑝, 𝑞∈𝒫2(𝐑).
Note that the left side of the equation above does not equal the inner product
in 𝒫2(𝐑) of 𝑝and the function 𝑡↦cos(𝜋𝑡) because this last function is not a
polynomial.
Define a linear functional 𝜑on 𝒫2(𝐑) by letting
𝜑(𝑝) = ∫
−1 𝑝(𝑡)(cos(𝜋𝑡)) 𝑑𝑡
for each 𝑝∈𝒫2(𝐑). Now use the orthonormal basis from Example 6.34 and
apply formula 6.43 from the proof of the Riesz representation theorem to see that
if 𝑝∈𝒫2(𝐑), then 𝜑(𝑝) = ⟨𝑝, 𝑞⟩, where
𝑞(𝑥) = (∫
−1
√1
2 cos(𝜋𝑡) 𝑑𝑡)√1
2 + (∫
−1
√3
2 𝑡cos(𝜋𝑡) 𝑑𝑡)√3
2𝑥
+ (∫
−1
√45
8 (𝑡2 −1
3) cos(𝜋𝑡) 𝑑𝑡)√45
8 (𝑥2 −1
3).
A bit of calculus applied to the equation above shows that
𝑞(𝑥) =
2𝜋2(1 −3𝑥2).
The same procedure shows that if we want to find 𝑞∈𝒫5(𝐑) such that 6.45
holds for all 𝑝∈𝒫5(𝐑), then we should take
𝑞(𝑥) = 105
8𝜋4((27 −2𝜋2) + (24𝜋2 −270)𝑥2 + (315 −30𝜋2)𝑥4).
Suppose 𝑉is finite-dimensional and 𝜑a linear functional on 𝑉. Then 6.43
gives a formula for the vector 𝑣that satisfies
𝜑(𝑢) = ⟨𝑢, 𝑣⟩
for all 𝑢∈𝑉. Specifically, we have
𝑣= 𝜑(𝑒1)𝑒1 + ⋯+ 𝜑(𝑒𝑛)𝑒𝑛.
The right side of the equation above seems to depend on the orthonormal basis
𝑒1, … , 𝑒𝑛as well as on 𝜑. However, 6.42 tells us that 𝑣is uniquely determined
by 𝜑. Thus the right side of the equation above is the same regardless of which
orthonormal basis 𝑒1, … , 𝑒𝑛of 𝑉is chosen.
For two additional different proofs of the Riesz representation theorem, see
6.58 and also Exercise 13 in Section 6C.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6B
Orthonormal Bases
Exercises 6B
Suppose 𝑒1, … , 𝑒𝑚is a list of vectors in 𝑉such that
‖𝑎1𝑒1 + ⋯+ 𝑎𝑚𝑒𝑚‖2 = |𝑎1|2 + ⋯+ |𝑎𝑚|2
for all 𝑎1, … , 𝑎𝑚∈𝐅. Show that 𝑒1, … , 𝑒𝑚is an orthonormal list.
This exercise provides a converse to 6.24.
(a) Suppose 𝜃∈𝐑. Show that both
(cos 𝜃, sin 𝜃), (−sin 𝜃, cos 𝜃)
and
(cos 𝜃, sin 𝜃), (sin 𝜃, −cos 𝜃)
are orthonormal bases of 𝐑2.
(b) Show that each orthonormal basis of 𝐑2 is of the form given by one of
the two possibilities in (a).
Suppose 𝑒1, … , 𝑒𝑚is an orthonormal list in 𝑉and 𝑣∈𝑉. Prove that
‖𝑣‖2 = ∣⟨𝑣, 𝑒1⟩∣2 + ⋯+ ∣⟨𝑣, 𝑒𝑚⟩∣2 ⟺𝑣∈span(𝑒1, … , 𝑒𝑚).
Suppose 𝑛is a positive integer. Prove that
√2𝜋
, cos 𝑥
√𝜋, cos 2𝑥
√𝜋, … , cos 𝑛𝑥
√𝜋, sin 𝑥
√𝜋, sin 2𝑥
√𝜋, … , sin 𝑛𝑥
√𝜋
is an orthonormal list of vectors in 𝐶[−𝜋, 𝜋], the vector space of continuous
real-valued functions on [−𝜋, 𝜋] with inner product
⟨𝑓, 𝑔⟩= ∫
𝜋
−𝜋𝑓𝑔.
Hint: The following formulas should help.
(sin 𝑥)(cos 𝑦) = sin(𝑥−𝑦) + sin(𝑥+ 𝑦)
(sin 𝑥)(sin 𝑦) = cos(𝑥−𝑦) −cos(𝑥+ 𝑦)
(cos 𝑥)(cos 𝑦) = cos(𝑥−𝑦) + cos(𝑥+ 𝑦)
Suppose 𝑓∶[−𝜋, 𝜋] →𝐑is continuous. For each nonnegative integer 𝑘,
define
𝑎𝑘=
√𝜋∫
𝜋
−𝜋𝑓(𝑥) cos(𝑘𝑥) 𝑑𝑥
and
𝑏𝑘=
√𝜋∫
𝜋
−𝜋𝑓(𝑥) sin(𝑘𝑥) 𝑑𝑥.
Prove that
𝑎0
2 +
∞
∑
𝑘=1
(𝑎𝑘
2 + 𝑏𝑘
2) ≤∫
𝜋
−𝜋𝑓2.
The inequality above is actually an equality for all continuous functions
𝑓∶[−𝜋, 𝜋] →𝐑. However, proving that this inequality is an equality
involves Fourier series techniques beyond the scope of this book.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Suppose 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉.
(a) Prove that if 𝑣1, … , 𝑣𝑛are vectors in 𝑉such that
‖𝑒𝑘−𝑣𝑘‖ < 1
√𝑛
for each 𝑘, then 𝑣1, … , 𝑣𝑛is a basis of 𝑉.
(b) Show that there exist 𝑣1, … , 𝑣𝑛∈𝑉such that
‖𝑒𝑘−𝑣𝑘‖ ≤1
√𝑛
for each 𝑘, but 𝑣1, … , 𝑣𝑛is not linearly independent.
This exercise states in (a) that an appropriately small perturbation of an
orthonormal basis is a basis. Then (b) shows that the number 1/
√𝑛on the
right side of the inequality in (a) cannot be higher.
Suppose 𝑇∈ℒ(𝐑3) has an upper-triangular matrix with respect to the basis
(1, 0, 0), (1, 1, 1), (1, 1, 2). Find an orthonormal basis of 𝐑3 with respect to
which 𝑇has an upper-triangular matrix.
Make 𝒫2(𝐑) into an inner product space by defining ⟨𝑝, 𝑞⟩= ∫1
0 𝑝𝑞for all
𝑝, 𝑞∈𝒫2(𝐑).
(a) Apply the Gram–Schmidt procedure to the basis 1, 𝑥, 𝑥2 to produce an
orthonormal basis of 𝒫2(𝐑).
(b) The differentiation operator (the operator that takes 𝑝to 𝑝′) on 𝒫2(𝐑)
has an upper-triangular matrix with respect to the basis 1, 𝑥, 𝑥2, which is
not an orthonormal basis. Find the matrix of the differentiation operator
on 𝒫2(𝐑) with respect to the orthonormal basis produced in (a) and
verify that this matrix is upper triangular, as expected from the proof of
6.37.
Suppose 𝑒1, … , 𝑒𝑚is the result of applying the Gram–Schmidt procedure to
a linearly independent list 𝑣1, … , 𝑣𝑚in 𝑉. Prove that ⟨𝑣𝑘, 𝑒𝑘⟩> 0 for each
𝑘= 1, … , 𝑚.
Suppose 𝑣1, … , 𝑣𝑚is a linearly independent list in 𝑉. Explain why the
orthonormal list produced by the formulas of the Gram–Schmidt procedure
(6.32) is the only orthonormal list 𝑒1, … , 𝑒𝑚in 𝑉such that ⟨𝑣𝑘, 𝑒𝑘⟩> 0 and
span(𝑣1, … , 𝑣𝑘) = span(𝑒1, … , 𝑒𝑘) for each 𝑘= 1, … , 𝑚.
The result in this exercise is used in the proof of 7.58.
Find a polynomial 𝑞∈𝒫2(𝐑) such that 𝑝( 1
2) = ∫1
0 𝑝𝑞for every 𝑝∈𝒫2(𝐑).
Find a polynomial 𝑞∈𝒫2(𝐑) such that
∫
0 𝑝(𝑥) cos(𝜋𝑥) 𝑑𝑥= ∫
0 𝑝𝑞
for every 𝑝∈𝒫2(𝐑).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6B
Orthonormal Bases
Show that a list 𝑣1, … , 𝑣𝑚of vectors in 𝑉is linearly dependent if and only if
the Gram–Schmidt formula in 6.32 produces 𝑓𝑘= 0 for some 𝑘∈{1, … , 𝑚}.
This exercise gives an alternative to Gaussian elimination techniques for
determining whether a list of vectors in an inner product space is linearly
dependent.
Suppose 𝑉is a real inner product space and 𝑣1, … , 𝑣𝑚is a linearly indepen-
dent list of vectors in 𝑉. Prove that there exist exactly 2𝑚orthonormal lists
𝑒1, … , 𝑒𝑚of vectors in 𝑉such that
span(𝑣1, … , 𝑣𝑘) = span(𝑒1, … , 𝑒𝑘)
for all 𝑘∈{1, … , 𝑚}.
Suppose ⟨⋅, ⋅⟩1 and ⟨⋅, ⋅⟩2 are inner products on 𝑉such that ⟨𝑢, 𝑣⟩1 = 0 if
and only if ⟨𝑢, 𝑣⟩2 = 0. Prove that there is a positive number 𝑐such that
⟨𝑢, 𝑣⟩1 = 𝑐⟨𝑢, 𝑣⟩2 for every 𝑢, 𝑣∈𝑉.
This exercise shows that if two inner products have the same pairs of
orthogonal vectors, then each of the inner products is a scalar multiple
of the other inner product.
Suppose 𝑉is finite-dimensional. Suppose ⟨⋅, ⋅⟩1, ⟨⋅, ⋅⟩2 are inner products on
𝑉with corresponding norms ‖⋅‖1 and ‖⋅‖2. Prove that there exists a positive
number 𝑐such that ‖𝑣‖1 ≤𝑐‖𝑣‖2 for every 𝑣∈𝑉.
Suppose 𝐅= 𝐂and 𝑉is finite-dimensional. Prove that if 𝑇is an operator
on 𝑉such that 1 is the only eigenvalue of 𝑇and ‖𝑇𝑣‖ ≤‖𝑣‖ for all 𝑣∈𝑉,
then 𝑇is the identity operator.
Suppose 𝑢1, … , 𝑢𝑚is a linearly independent list in 𝑉. Show that there exists
𝑣∈𝑉such that ⟨𝑢𝑘, 𝑣⟩= 1 for all 𝑘∈{1, … , 𝑚}.
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉. Prove that there exists a basis 𝑢1, … , 𝑢𝑛
of 𝑉such that
⟨𝑣𝑗, 𝑢𝑘⟩=
⎧{
⎨{⎩
if 𝑗≠𝑘,
if 𝑗= 𝑘.
Suppose 𝐅= 𝐂, 𝑉is finite-dimensional, and ℰ⊆ℒ(𝑉) is such that
𝑆𝑇= 𝑇𝑆
for all 𝑆, 𝑇∈ℰ. Prove that there is an orthonormal basis of 𝑉with respect
to which every element of ℰhas an upper-triangular matrix.
This exercise strengthens Exercise 9(b) in Section 5E (in the context of inner
product spaces) by asserting that the basis in that exercise can be chosen to
be orthonormal.
Suppose 𝐅= 𝐂, 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and all eigenvalues
of 𝑇have absolute value less than 1. Let 𝜖> 0. Prove that there exists a
positive integer 𝑚such that ∥𝑇𝑚𝑣∥≤𝜖‖𝑣‖ for every 𝑣∈𝑉.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Suppose 𝐶[−1, 1] is the vector space of continuous real-valued functions
on the interval [−1, 1] with inner product given by
⟨𝑓, 𝑔⟩= ∫
−1 𝑓𝑔
for all 𝑓, 𝑔∈𝐶[−1, 1]. Let 𝜑be the linear functional on 𝐶[−1, 1] defined
by 𝜑( 𝑓) = 𝑓(0). Show that there does not exist 𝑔∈𝐶[−1, 1] such that
𝜑( 𝑓) = ⟨𝑓, 𝑔⟩
for every 𝑓∈𝐶[−1, 1].
This exercise shows that the Riesz representation theorem (6.42) does not
hold on infinite-dimensional vector spaces without additional hypotheses
on 𝑉and 𝜑.
For all 𝑢, 𝑣∈𝑉, define 𝑑(𝑢, 𝑣) = ‖𝑢−𝑣‖.
(a) Show that 𝑑is a metric on 𝑉.
(b) Show that if 𝑉is finite-dimensional, then 𝑑is a complete metric on 𝑉
(meaning that every Cauchy sequence converges).
(c) Show that every finite-dimensional subspace of 𝑉is a closed subset
of 𝑉(with respect to the metric 𝑑).
This exercise requires familiarity with metric spaces.
orthogonality at the Supreme Court
Law professor Richard Friedman presenting a case before the U.S. Supreme
Court in 2010:
because the Commonwealth is acknowledging—
Chief Justice Roberts: I’m sorry. Entirely what?
Chief Justice Roberts: Oh.
Justice Scalia: What was that adjective? I liked that.
Chief Justice Roberts: Orthogonal.
Justice Scalia: Orthogonal, ooh. (Laughter.)
Justice Kennedy: I knew this case presented us a problem. (Laughter.)
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6C
Orthogonal Complements and Minimization Problems
6C Orthogonal Complements and Minimization Problems
Orthogonal Complements
6.46
definition: orthogonal complement, 𝑈⟂
If 𝑈is a subset of 𝑉, then the orthogonal complement of 𝑈, denoted by 𝑈⟂,
is the set of all vectors in 𝑉that are orthogonal to every vector in 𝑈:
𝑈⟂= {𝑣∈𝑉∶⟨𝑢, 𝑣⟩= 0 for every 𝑢∈𝑈}.
The orthogonal complement 𝑈⟂depends on 𝑉as well as on 𝑈. However, the
inner product space 𝑉should always be clear from the context and thus it can be
omitted from the notation.
6.47
example: orthogonal complements
• If 𝑉= 𝐑3 and 𝑈is the subset of 𝑉consisting of the single point (2, 3, 5), then
𝑈⟂is the plane {(𝑥, 𝑦, 𝑧) ∈𝐑3 ∶2𝑥+ 3𝑦+ 5𝑧= 0}.
• If 𝑉= 𝐑3 and 𝑈is the plane {(𝑥, 𝑦, 𝑧) ∈𝐑3 ∶2𝑥+ 3𝑦+ 5𝑧= 0}, then 𝑈⟂is
the line {(2𝑡, 3𝑡, 5𝑡) ∶𝑡∈𝐑}.
• More generally, if 𝑈is a plane in 𝐑3 containing the origin, then 𝑈⟂is the line
containing the origin that is perpendicular to 𝑈.
• If 𝑈is a line in 𝐑3 containing the origin, then 𝑈⟂is the plane containing the
origin that is perpendicular to 𝑈.
• If 𝑉= 𝐅5 and 𝑈= {(𝑎, 𝑏, 0, 0, 0) ∈𝐅5 ∶𝑎, 𝑏∈𝐅}, then
𝑈⟂= {(0, 0, 𝑥, 𝑦, 𝑧) ∈𝐅5 ∶𝑥, 𝑦, 𝑧∈𝐅}.
• If 𝑒1, … , 𝑒𝑚, 𝑓1, … , 𝑓𝑛is an orthonormal basis of 𝑉, then
(span(𝑒1, … , 𝑒𝑚))⟂= span( 𝑓1, … , 𝑓𝑛).
We begin with some straightforward consequences of the definition.
6.48
properties of orthogonal complement
(a) If 𝑈is a subset of 𝑉, then 𝑈⟂is a subspace of 𝑉.
(b) {0}⟂= 𝑉.
(c) 𝑉⟂= {0}.
(d) If 𝑈is a subset of 𝑉, then 𝑈∩𝑈⟂⊆{0}.
(e) If 𝐺and 𝐻are subsets of 𝑉and 𝐺⊆𝐻, then 𝐻⟂⊆𝐺⟂.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Proof
(a) Suppose 𝑈is a subset of 𝑉. Then ⟨𝑢, 0⟩= 0 for every 𝑢∈𝑈; thus 0 ∈𝑈⟂.
Suppose 𝑣, 𝑤∈𝑈⟂. If 𝑢∈𝑈, then
⟨𝑢, 𝑣+ 𝑤⟩= ⟨𝑢, 𝑣⟩+ ⟨𝑢, 𝑤⟩= 0 + 0 = 0.
Thus 𝑣+ 𝑤∈𝑈⟂, which shows that 𝑈⟂is closed under addition.
Similarly, suppose 𝜆∈𝐅and 𝑣∈𝑈⟂. If 𝑢∈𝑈, then
⟨𝑢, 𝜆𝑣⟩= 𝜆⟨𝑢, 𝑣⟩= 𝜆⋅0 = 0.
Thus 𝜆𝑣∈𝑈⟂, which shows that 𝑈⟂is closed under scalar multiplication.
Thus 𝑈⟂is a subspace of 𝑉.
(b) Suppose that 𝑣∈𝑉. Then ⟨0, 𝑣⟩= 0, which implies that 𝑣∈{0}⟂. Thus
{0}⟂= 𝑉.
(c) Suppose that 𝑣∈𝑉⟂. Then ⟨𝑣, 𝑣⟩= 0, which implies that 𝑣= 0. Thus
𝑉⟂= {0}.
(d) Suppose 𝑈is a subset of 𝑉and 𝑢∈𝑈∩𝑈⟂. Then ⟨𝑢, 𝑢⟩= 0, which implies
that 𝑢= 0. Thus 𝑈∩𝑈⟂⊆{0}.
(e) Suppose 𝐺and 𝐻are subsets of 𝑉and 𝐺⊆𝐻. Suppose 𝑣∈𝐻⟂. Then
⟨𝑢, 𝑣⟩= 0 for every 𝑢∈𝐻, which implies that ⟨𝑢, 𝑣⟩= 0 for every 𝑢∈𝐺.
Hence 𝑣∈𝐺⟂. Thus 𝐻⟂⊆𝐺⟂.
Recall that if 𝑈and 𝑊are subspaces of 𝑉, then 𝑉is the direct sum of 𝑈and
𝑊(written 𝑉= 𝑈⊕𝑊) if each element of 𝑉can be written in exactly one way
as a vector in 𝑈plus a vector in 𝑊(see 1.41). Furthermore, this happens if and
only if 𝑉= 𝑈+ 𝑊and 𝑈∩𝑊= {0} (see 1.46).
The next result shows that every finite-dimensional subspace of 𝑉leads to a
natural direct sum decomposition of 𝑉. See Exercise 16 for an example showing
that the result below can fail without the hypothesis that the subspace 𝑈is finite-
dimensional.
6.49
direct sum of a subspace and its orthogonal complement
Suppose 𝑈is a finite-dimensional subspace of 𝑉. Then
𝑉= 𝑈⊕𝑈⟂.
Proof
First we will show that
𝑉= 𝑈+ 𝑈⟂.
To do this, suppose that 𝑣∈𝑉. Let 𝑒1, … , 𝑒𝑚be an orthonormal basis of 𝑈. We
want to write 𝑣as the sum of a vector in 𝑈and a vector orthogonal to 𝑈.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6C
Orthogonal Complements and Minimization Problems
We have
6.50
𝑣= ⟨𝑣, 𝑒1⟩𝑒1 + ⋯+ ⟨𝑣, 𝑒𝑚⟩𝑒𝑚
⏟⏟⏟⏟⏟⏟⏟⏟⏟
𝑢
+ 𝑣−⟨𝑣, 𝑒1⟩𝑒1 −⋯−⟨𝑣, 𝑒𝑚⟩𝑒𝑚
⏟⏟⏟⏟⏟⏟⏟⏟⏟⏟⏟
𝑤
.
Let 𝑢and 𝑤be defined as in the equation above (as was done in the proof of 6.26).
Because each 𝑒𝑘∈𝑈, we see that 𝑢∈𝑈. Because 𝑒1, … , 𝑒𝑚is an orthonormal
list, for each 𝑘= 1, … , 𝑚we have
⟨𝑤, 𝑒𝑘⟩= ⟨𝑣, 𝑒𝑘⟩−⟨𝑣, 𝑒𝑘⟩
= 0.
Thus 𝑤is orthogonal to every vector in span(𝑒1, … , 𝑒𝑚), which shows that 𝑤∈𝑈⟂.
Hence we have written 𝑣= 𝑢+ 𝑤, where 𝑢∈𝑈and 𝑤∈𝑈⟂, completing the
proof that 𝑉= 𝑈+ 𝑈⟂.
From 6.48(d), we know that 𝑈∩𝑈⟂= {0}. Now equation 𝑉= 𝑈+ 𝑈⟂
implies that 𝑉= 𝑈⊕𝑈⟂(see 1.46).
Now we can see how to compute dim 𝑈⟂from dim 𝑈.
6.51
dimension of orthogonal complement
Suppose 𝑉is finite-dimensional and 𝑈is a subspace of 𝑉. Then
dim 𝑈⟂= dim 𝑉−dim 𝑈.
Proof
The formula for dim 𝑈⟂follows immediately from 6.49 and 3.94.
The next result is an important consequence of 6.49.
6.52
orthogonal complement of the orthogonal complement
Suppose 𝑈is a finite-dimensional subspace of 𝑉. Then
𝑈= (𝑈⟂)⟂.
Proof
First we will show that
6.53
𝑈⊆(𝑈⟂)⟂.
To do this, suppose 𝑢∈𝑈. Then ⟨𝑢, 𝑤⟩= 0 for every 𝑤∈𝑈⟂(by the definition
of 𝑈⟂). Because 𝑢is orthogonal to every vector in 𝑈⟂, we have 𝑢∈(𝑈⟂)⟂,
completing the proof of 6.53.
To prove the inclusion in the other direction, suppose 𝑣∈(𝑈⟂)⟂. By 6.49,
we can write 𝑣= 𝑢+ 𝑤, where 𝑢∈𝑈and 𝑤∈𝑈⟂. We have 𝑣−𝑢= 𝑤∈𝑈⟂.
Because 𝑣∈(𝑈⟂)⟂and 𝑢∈(𝑈⟂)⟂(from 6.53), we have 𝑣−𝑢∈(𝑈⟂)⟂. Thus
𝑣−𝑢∈𝑈⟂∩(𝑈⟂)⟂, which implies that 𝑣−𝑢= 0 [by 6.48(d)], which implies
that 𝑣= 𝑢, which implies that 𝑣∈𝑈. Thus (𝑈⟂)⟂⊆𝑈, which along with 6.53
completes the proof.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Exercise 16(a) shows that the result
below is not true without the hypothesis
that 𝑈is finite-dimensional.
Suppose 𝑈is a subspace of 𝑉and
we want to show that 𝑈= 𝑉. In some
situations, the easiest way to do this is to
show that the only vector orthogonal to
𝑈is 0, and then use the result below. For example, the result below is useful for
Exercise 4.
6.54
𝑈⟂= {0} ⟺𝑈= 𝑉(for 𝑈a finite-dimensional subspace of 𝑉)
Suppose 𝑈is a finite-dimensional subspace of 𝑉. Then
𝑈⟂= {0} ⟺𝑈= 𝑉.
Proof
First suppose 𝑈⟂= {0}. Then by 6.52, 𝑈= (𝑈⟂)⟂= {0}⟂= 𝑉, as
desired.
Conversely, if 𝑈= 𝑉, then 𝑈⟂= 𝑉⟂= {0} by 6.48(c).
We now define an operator 𝑃𝑈for each finite-dimensional subspace 𝑈of 𝑉.
6.55
definition: orthogonal projection, 𝑃𝑈
Suppose 𝑈is a finite-dimensional subspace of 𝑉. The orthogonal projection
of 𝑉onto 𝑈is the operator 𝑃𝑈∈ℒ(𝑉) defined as follows: For each 𝑣∈𝑉,
write 𝑣= 𝑢+ 𝑤, where 𝑢∈𝑈and 𝑤∈𝑈⟂. Then let 𝑃𝑈𝑣= 𝑢.
The direct sum decomposition 𝑉= 𝑈⊕𝑈⟂given by 6.49 shows that each
𝑣∈𝑉can be uniquely written in the form 𝑣= 𝑢+ 𝑤with 𝑢∈𝑈and 𝑤∈𝑈⟂.
Thus 𝑃𝑈𝑣is well defined. See the figure that accompanies the proof of 6.61 for
the picture describing 𝑃𝑈𝑣that you should keep in mind.
6.56
example: orthogonal projection onto one-dimensional subspace
Suppose 𝑢∈𝑉with 𝑢≠0 and 𝑈is the one-dimensional subspace of 𝑉
defined by 𝑈= span(𝑢).
If 𝑣∈𝑉, then
𝑣= ⟨𝑣, 𝑢⟩
‖𝑢‖2 𝑢+ (𝑣−⟨𝑣, 𝑢⟩
‖𝑢‖2 𝑢),
where the first term on the right is in span(𝑢) (and thus is in 𝑈) and the second
term on the right is orthogonal to 𝑢(and thus is in 𝑈⟂). Thus 𝑃𝑈𝑣equals the first
term on the right. In other words, we have the formula
𝑃𝑈𝑣= ⟨𝑣, 𝑢⟩
‖𝑢‖2 𝑢
for every 𝑣∈𝑉.
The formula above becomes 𝑃𝑈𝑢= 𝑢if 𝑣= 𝑢and becomes 𝑃𝑈𝑣= 0 if
𝑣∈{𝑢}⟂. These equations are special cases of (b) and (c) in the next result.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6C
Orthogonal Complements and Minimization Problems
6.57
properties of orthogonal projection 𝑃𝑈
Suppose 𝑈is a finite-dimensional subspace of 𝑉. Then
(a) 𝑃𝑈∈ℒ(𝑉);
(b) 𝑃𝑈𝑢= 𝑢for every 𝑢∈𝑈;
(c) 𝑃𝑈𝑤= 0 for every 𝑤∈𝑈⟂;
(d) range 𝑃𝑈= 𝑈;
(e) null 𝑃𝑈= 𝑈⟂;
(f) 𝑣−𝑃𝑈𝑣∈𝑈⟂for every 𝑣∈𝑉;
(g) 𝑃𝑈
2 = 𝑃𝑈;
(h) ‖𝑃𝑈𝑣‖ ≤‖𝑣‖ for every 𝑣∈𝑉;
(i) if 𝑒1, … , 𝑒𝑚is an orthonormal basis of 𝑈and 𝑣∈𝑉, then
𝑃𝑈𝑣= ⟨𝑣, 𝑒1⟩𝑒1 + ⋯+ ⟨𝑣, 𝑒𝑚⟩𝑒𝑚.
Proof
(a) To show that 𝑃𝑈is a linear map on 𝑉, suppose 𝑣1, 𝑣2 ∈𝑉. Write
𝑣1 = 𝑢1 + 𝑤1
and
𝑣2 = 𝑢2 + 𝑤2
with 𝑢1, 𝑢2 ∈𝑈and 𝑤1, 𝑤2 ∈𝑈⟂. Thus 𝑃𝑈𝑣1 = 𝑢1 and 𝑃𝑈𝑣2 = 𝑢2. Now
𝑣1 + 𝑣2 = (𝑢1 + 𝑢2) + (𝑤1 + 𝑤2),
where 𝑢1 + 𝑢2 ∈𝑈and 𝑤1 + 𝑤2 ∈𝑈⟂. Thus
𝑃𝑈(𝑣1 + 𝑣2) = 𝑢1 + 𝑢2 = 𝑃𝑈𝑣1 + 𝑃𝑈𝑣2.
Similarly, suppose 𝜆∈𝐅and 𝑣∈𝑉. Write 𝑣= 𝑢+ 𝑤, where 𝑢∈𝑈
and 𝑤∈𝑈⟂. Then 𝜆𝑣= 𝜆𝑢+ 𝜆𝑤with 𝜆𝑢∈𝑈and 𝜆𝑤∈𝑈⟂. Thus
𝑃𝑈(𝜆𝑣) = 𝜆𝑢= 𝜆𝑃𝑈𝑣.
Hence 𝑃𝑈is a linear map from 𝑉to 𝑉.
(b) Suppose 𝑢∈𝑈. We can write 𝑢= 𝑢+ 0, where 𝑢∈𝑈and 0 ∈𝑈⟂. Thus
𝑃𝑈𝑢= 𝑢.
(c) Suppose 𝑤∈𝑈⟂. We can write 𝑤= 0 + 𝑤, where 0 ∈𝑈and 𝑤∈𝑈⟂. Thus
𝑃𝑈𝑤= 0.
(d) The definition of 𝑃𝑈implies that range 𝑃𝑈⊆𝑈. Furthermore, (b) implies
that 𝑈⊆range 𝑃𝑈. Thus range 𝑃𝑈= 𝑈.
(e) The inclusion 𝑈⟂⊆null 𝑃𝑈follows from (c). To prove the inclusion in the
other direction, note that if 𝑣∈null 𝑃𝑈then the decomposition given by 6.49
must be 𝑣= 0 + 𝑣, where 0 ∈𝑈and 𝑣∈𝑈⟂. Thus null 𝑃𝑈⊆𝑈⟂.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
(f) If 𝑣∈𝑉and 𝑣= 𝑢+ 𝑤with 𝑢∈𝑈and 𝑤∈𝑈⟂, then
𝑣−𝑃𝑈𝑣= 𝑣−𝑢= 𝑤∈𝑈⟂.
(g) If 𝑣∈𝑉and 𝑣= 𝑢+ 𝑤with 𝑢∈𝑈and 𝑤∈𝑈⟂, then
(𝑃𝑈
2)𝑣= 𝑃𝑈(𝑃𝑈𝑣) = 𝑃𝑈𝑢= 𝑢= 𝑃𝑈𝑣.
(h) If 𝑣∈𝑉and 𝑣= 𝑢+ 𝑤with 𝑢∈𝑈and 𝑤∈𝑈⟂, then
‖𝑃𝑈𝑣‖2 = ‖𝑢‖2 ≤‖𝑢‖2 + ‖𝑤‖2 = ‖𝑣‖2,
where the last equality comes from the Pythagorean theorem.
(i) The formula for 𝑃𝑈𝑣follows from equation 6.50 in the proof of 6.49.
In the previous section we proved the Riesz representation theorem (6.42),
whose key part states that every linear functional on a finite-dimensional inner
product space is given by taking the inner product with some fixed vector. Seeing
a different proof often provides new insight. Thus we now give a new proof of
the key part of the Riesz representation theorem using orthogonal complements
instead of orthonormal bases as in our previous proof.
The restatement below of the Riesz representation theorem provides an iden-
tification of 𝑉with 𝑉′. We will prove only the “onto” part of the result below
because the more routine “one-to-one” part of the result can be proved as in 6.42.
Intuition behind this new proof: If 𝜑∈𝑉′, 𝑣∈𝑉, and 𝜑(𝑢) = ⟨𝑢, 𝑣⟩for all
𝑢∈𝑉, then 𝑣∈(null 𝜑)⟂. However, (null 𝜑)⟂is a one-dimensional subspace
of 𝑉(except for the trivial case in which 𝜑= 0), as follows from 6.51 and 3.21.
Thus we can obtain 𝑣by choosing any nonzero element of (null 𝜑)⟂and then
multiplying by an appropriate scalar, as is done in the proof below.
6.58
Riesz representation theorem, revisited
Suppose 𝑉is finite-dimensional. For each 𝑣∈𝑉, define 𝜑𝑣∈𝑉′ by
𝜑𝑣(𝑢) = ⟨𝑢, 𝑣⟩
for each 𝑢∈𝑉. Then 𝑣↦𝜑𝑣is a one-to-one function from 𝑉onto 𝑉′.
Caution: The function 𝑣↦𝜑𝑣is a
linear mapping from 𝑉to 𝑉′ if 𝐅= 𝐑.
However, this function is not linear if
𝐅= 𝐂because 𝜑𝜆𝑣= 𝜆𝜑𝑣if 𝜆∈𝐂.
Proof
To show that 𝑣↦𝜑𝑣is surjective,
suppose 𝜑∈𝑉′. If 𝜑= 0, then 𝜑= 𝜑0.
Thus assume 𝜑≠0. Hence null 𝜑≠𝑉,
which implies that (null 𝜑)⟂≠{0} (by
6.49 with 𝑈= null 𝜑).
Let 𝑤∈(null 𝜑)⟂be such that 𝑤≠0. Let
6.59
𝑣= 𝜑(𝑤)
‖𝑤‖2 𝑤.
Then 𝑣∈(null 𝜑)⟂. Also, 𝑣≠0 (because 𝑤∉null 𝜑).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6C
Orthogonal Complements and Minimization Problems
Taking the norm of both sides of 6.59 gives
6.60
‖𝑣‖ = |𝜑(𝑤)|
‖𝑤‖ .
Applying 𝜑to both sides of 6.59 and then using 6.60, we have
𝜑(𝑣) = |𝜑(𝑤)|2
‖𝑤‖2
= ‖𝑣‖2.
Now suppose 𝑢∈𝑉. Using the equation above, we have
𝑢= (𝑢−𝜑(𝑢)
𝜑(𝑣)𝑣) + 𝜑(𝑢)
‖𝑣‖2 𝑣.
The first term in parentheses above is in null 𝜑and hence is orthogonal to 𝑣. Thus
taking the inner product of both sides of the equation above with 𝑣shows that
⟨𝑢, 𝑣⟩= 𝜑(𝑢)
‖𝑣‖2 ⟨𝑣, 𝑣⟩= 𝜑(𝑢).
Thus 𝜑= 𝜑𝑣, showing that 𝑣↦𝜑𝑣is surjective, as desired.
See Exercise 13 for yet another proof of the Riesz representation theorem.
Minimization Problems
The remarkable simplicity of the solu-
tion to this minimization problem has
led to many important applications of
inner product spaces outside of pure
mathematics.
The following problem often arises:
Given a subspace 𝑈of 𝑉and a point
𝑣∈𝑉, find a point 𝑢∈𝑈such that
‖𝑣−𝑢‖ is as small as possible. The next
result shows that 𝑢= 𝑃𝑈𝑣is the unique
solution of this minimization problem.
6.61
minimizing distance to a subspace
Suppose 𝑈is a finite-dimensional subspace of 𝑉, 𝑣∈𝑉, and 𝑢∈𝑈. Then
‖𝑣−𝑃𝑈𝑣‖ ≤‖𝑣−𝑢‖.
Furthermore, the inequality above is an equality if and only if 𝑢= 𝑃𝑈𝑣.
Proof
We have
‖𝑣−𝑃𝑈𝑣‖2 ≤‖𝑣−𝑃𝑈𝑣‖2 + ‖𝑃𝑈𝑣−𝑢‖2
6.62
= ∥(𝑣−𝑃𝑈𝑣) + (𝑃𝑈𝑣−𝑢)∥2
= ‖𝑣−𝑢‖2,
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
𝑃𝑈𝑣is the closest
point in 𝑈to 𝑣.
where the first line above holds because 0 ≤‖𝑃𝑈𝑣−𝑢‖2,
the second line above comes from the Pythagorean the-
orem [which applies because 𝑣−𝑃𝑈𝑣∈𝑈⟂by 6.57(f),
and 𝑃𝑈𝑣−𝑢∈𝑈], and the third line above holds by
simple algebra. Taking square roots gives the desired
inequality.
The inequality proved above is an equality if and
only if 6.62 is an equality, which happens if and only if
‖𝑃𝑈𝑣−𝑢‖ = 0, which happens if and only if 𝑢= 𝑃𝑈𝑣.
The last result is often combined with the formula
6.57(i) to compute explicit solutions to minimization
problems, as in the following example.
6.63
example: using linear algebra to approximate the sine function
Suppose we want to find a polynomial 𝑢with real coefficients and of degree
at most 5 that approximates the sine function as well as possible on the interval
[−𝜋, 𝜋], in the sense that
∫
𝜋
−𝜋∣sin 𝑥−𝑢(𝑥)∣2 𝑑𝑥
is as small as possible.
Let 𝐶[−𝜋, 𝜋] denote the real inner product space of continuous real-valued
functions on [−𝜋, 𝜋] with inner product
6.64
⟨𝑓, 𝑔⟩= ∫
𝜋
−𝜋𝑓𝑔.
Let 𝑣∈𝐶[−𝜋, 𝜋] be the function defined by 𝑣(𝑥) = sin 𝑥. Let 𝑈denote the
subspace of 𝐶[−𝜋, 𝜋] consisting of the polynomials with real coefficients and of
degree at most 5. Our problem can now be reformulated as follows:
Find 𝑢∈𝑈such that ‖𝑣−𝑢‖ is as small as possible.
A computer that can integrate is useful
here.
To compute the solution to our ap-
proximation problem, first apply the
Gram–Schmidt procedure (using the in-
ner product given by 6.64) to the basis 1, 𝑥, 𝑥2, 𝑥3, 𝑥4, 𝑥5 of 𝑈, producing an ortho-
normal basis 𝑒1, 𝑒2, 𝑒3, 𝑒4, 𝑒5, 𝑒6 of 𝑈. Then, again using the inner product given
by 6.64, compute 𝑃𝑈𝑣using 6.57(i) (with 𝑚= 6). Doing this computation shows
that 𝑃𝑈𝑣is the function 𝑢defined by
6.65
𝑢(𝑥) = 0.987862𝑥−0.155271𝑥3 + 0.00564312𝑥5,
where the 𝜋’s that appear in the exact answer have been replaced with a good
decimal approximation. By 6.61, the polynomial 𝑢above is the best approximation
to the sine function on [−𝜋, 𝜋] using polynomials of degree at most 5 (here “best
approximation” means in the sense of minimizing ∫𝜋
−𝜋| sin 𝑥−𝑢(𝑥)|2 𝑑𝑥).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6C
Orthogonal Complements and Minimization Problems
To see how good this approximation is, the next figure shows the graphs of
both the sine function and our approximation 𝑢given by 6.65 over the interval
[−𝜋, 𝜋].
Graphs on [−𝜋, 𝜋] of the sine function (red) and its best
fifth degree polynomial approximation 𝑢(blue) from 6.65.
Our approximation 6.65 is so accurate that the two graphs are almost identical—
our eyes may see only one graph! Here the red graph is placed almost exactly
over the blue graph. If you are viewing this on an electronic device, enlarge the
picture above by 400% near 𝜋or −𝜋to see a small gap between the two graphs.
Another well-known approximation to the sine function by a polynomial of
degree 5 is given by the Taylor polynomial 𝑝defined by
6.66
𝑝(𝑥) = 𝑥−𝑥3
3! + 𝑥5
5! .
To see how good this approximation is, the next picture shows the graphs of both
the sine function and the Taylor polynomial 𝑝over the interval [−𝜋, 𝜋].
Graphs on [−𝜋, 𝜋] of the sine function (red)
and the Taylor polynomial (blue) from 6.66.
The Taylor polynomial of degree 5 is an excellent approximation to sin 𝑥for
𝑥near 0. But the picture above shows that for |𝑥| > 2, the Taylor polynomial is
not so accurate, especially compared to 6.65. For example, taking 𝑥= 3, our
approximation 6.65 estimates sin 3 with an error of approximately 0.001, but the
Taylor polynomial 6.66 estimates sin 3 with an error of approximately 0.4. Thus
at 𝑥= 3, the error in the Taylor polynomial is hundreds of times larger than the
error given by 6.65. Linear algebra has helped us discover an approximation to
the sine function that improves upon what we learned in calculus!
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Pseudoinverse
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑤∈𝑊. Consider the problem of finding 𝑣∈𝑉such
that
𝑇𝑣= 𝑤.
For example, if 𝑉= 𝐅𝑛and 𝑊= 𝐅𝑚, then the equation above could represent a
system of 𝑚linear equations in 𝑛unknowns 𝑣1, … , 𝑣𝑛, where 𝑣= (𝑣1, … , 𝑣𝑛).
If 𝑇is invertible, then the unique solution to the equation above is 𝑣= 𝑇−1𝑤.
However, if 𝑇is not invertible, then for some 𝑤∈𝑊there may not exist any
solutions of the equation above, and for some 𝑤∈𝑊there may exist infinitely
many solutions of the equation above.
If 𝑇is not invertible, then we can still try to do as well as possible with the
equation above. For example, if the equation above has no solutions, then instead
of solving the equation 𝑇𝑣−𝑤= 0, we can try to find 𝑣∈𝑉such that ‖𝑇𝑣−𝑤‖
is as small as possible. As another example, if the equation above has infinitely
many solutions 𝑣∈𝑉, then among all those solutions we can try to find one such
that ‖𝑣‖ is as small as possible.
The pseudoinverse will provide the tool to solve the equation above as well
as possible, even when 𝑇is not invertible. We need the next result to define the
pseudoinverse.
In the next two proofs, we will use without further comment the result that if
𝑉is finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊), then null 𝑇, (null 𝑇)⟂, and range 𝑇are
all finite-dimensional.
6.67
restriction of a linear map to obtain a one-to-one and onto map
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Then 𝑇|(null 𝑇)⟂is an
injective map of (null 𝑇)⟂onto range 𝑇.
Proof
Suppose that 𝑣∈(null 𝑇)⟂and 𝑇|(null 𝑇)⟂𝑣= 0. Hence 𝑇𝑣= 0 and
thus 𝑣∈(null 𝑇) ∩(null 𝑇)⟂, which implies that 𝑣= 0 [by 6.48(d)]. Hence
null(𝑇|(null 𝑇)⟂) = {0}, which implies that 𝑇|(null 𝑇)⟂is injective, as desired.
Clearly range(𝑇|(null 𝑇)⟂) ⊆range 𝑇. To prove the inclusion in the other direc-
tion, suppose 𝑤∈range 𝑇. Hence there exists 𝑣∈𝑉such that 𝑤= 𝑇𝑣. There
exist 𝑢∈null 𝑇and 𝑥∈(null 𝑇)⟂such that 𝑣= 𝑢+ 𝑥(by 6.49). Now
𝑇|(null 𝑇)⟂𝑥= 𝑇𝑥= 𝑇𝑣−𝑇𝑢= 𝑤−0 = 𝑤,
which shows that 𝑤∈range 𝑇|(null 𝑇)⟂. Hence range 𝑇⊆range 𝑇|(null 𝑇)⟂, com-
pleting the proof that range 𝑇|(null 𝑇)⟂= range 𝑇.
To produce the pseudoinverse notation
𝑇† in TEX, type T̂ \dagger.
Now we can define the pseudoinverse
𝑇† (pronounced “𝑇dagger”) of a linear
map 𝑇. In the next definition (and from
now on), think of 𝑇|(null 𝑇)⟂as an invertible linear map from (null 𝑇)⟂onto range 𝑇,
as is justified by the result above.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6C
Orthogonal Complements and Minimization Problems
6.68
definition: pseudoinverse, 𝑇†
Suppose that 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). The pseudoinverse
𝑇† ∈ℒ(𝑊, 𝑉) of 𝑇is the linear map from 𝑊to 𝑉defined by
𝑇†𝑤= (𝑇|(null 𝑇)⟂)−1𝑃range 𝑇𝑤
for each 𝑤∈𝑊.
Recall that 𝑃range 𝑇𝑤= 0 if 𝑤∈(range 𝑇)⟂and 𝑃range 𝑇𝑤= 𝑤if 𝑤∈range 𝑇.
Thus if 𝑤∈(range 𝑇)⟂, then 𝑇†𝑤= 0, and if 𝑤∈range 𝑇, then 𝑇†𝑤is the
unique element of (null 𝑇)⟂such that 𝑇(𝑇†𝑤) = 𝑤.
The pseudoinverse behaves much like an inverse, as we will see.
6.69
algebraic properties of the pseudoinverse
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊).
(a) If 𝑇is invertible, then 𝑇† = 𝑇−1.
(b) 𝑇𝑇† = 𝑃range 𝑇= the orthogonal projection of 𝑊onto range 𝑇.
(c) 𝑇†𝑇= 𝑃(null 𝑇)⟂= the orthogonal projection of 𝑉onto (null 𝑇)⟂.
Proof
(a) Suppose 𝑇is invertible. Then (null 𝑇)⟂= 𝑉and range 𝑇= 𝑊. Thus
𝑇|(null 𝑇)⟂= 𝑇and 𝑃range 𝑇is the identity operator on 𝑊. Hence 𝑇† = 𝑇−1.
(b) Suppose 𝑤∈range 𝑇. Thus
𝑇𝑇†𝑤= 𝑇(𝑇|(null 𝑇)⟂)−1𝑤= 𝑤= 𝑃range 𝑇𝑤.
If 𝑤∈(range 𝑇)⟂, then 𝑇†𝑤= 0. Hence 𝑇𝑇†𝑤= 0 = 𝑃range 𝑇𝑤. Thus 𝑇𝑇†
and 𝑃range 𝑇agree on range 𝑇and on (range 𝑇)⟂. Hence these two linear maps
are equal (by 6.49).
(c) Suppose 𝑣∈(null 𝑇)⟂. Because 𝑇𝑣∈range 𝑇, the definition of 𝑇† shows
that
𝑇†(𝑇𝑣) = (𝑇|(null 𝑇)⟂)−1(𝑇𝑣) = 𝑣= 𝑃(null 𝑇)⟂𝑣.
If 𝑣∈null 𝑇, then 𝑇†𝑇𝑣= 0 = 𝑃(null 𝑇)⟂𝑣. Thus 𝑇†𝑇and 𝑃(null 𝑇)⟂agree on
(null 𝑇)⟂and on null 𝑇. Hence these two linear maps are equal (by 6.49).
The pseudoinverse is also called the
Moore–Penrose inverse.
Suppose that 𝑇∈ℒ(𝑉, 𝑊). If 𝑇is
surjective, then 𝑇𝑇† is the identity opera-
tor on 𝑊, as follows from (b) in the result
above. If 𝑇is injective, then 𝑇†𝑇is the identity operator on 𝑉, as follows from
(c) in the result above. For additional algebraic properties of the pseudoinverse,
see Exercises 19–23.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
For 𝑇∈ℒ(𝑉, 𝑊) and 𝑤∈𝑊, we now return to the problem of finding 𝑣∈𝑉
that solves the equation
𝑇𝑣= 𝑤.
As we noted earlier, if 𝑇is invertible, then 𝑣= 𝑇−1𝑤is the unique solution, but
if 𝑇is not invertible, then 𝑇−1 is not defined. However, the pseudoinverse 𝑇† is
defined. Taking 𝑣= 𝑇†𝑤makes 𝑇𝑣as close to 𝑤as possible, as shown by (a) of
the next result. Thus the pseudoinverse provides what is called a best fit to the
equation above.
Among all vectors 𝑣∈𝑉that make 𝑇𝑣as close as possible to 𝑤, the vector
𝑇†𝑤has the smallest norm, as shown by combining (b) in the next result with the
condition for equality in (a).
6.70
pseudoinverse provides best approximate solution or best solution
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉, 𝑊), and 𝑤∈𝑊.
(a) If 𝑣∈𝑉, then
∥𝑇(𝑇†𝑤) −𝑤∥≤‖𝑇𝑣−𝑤‖,
with equality if and only if 𝑣∈𝑇†𝑤+ null 𝑇.
(b) If 𝑣∈𝑇†𝑤+ null 𝑇, then
∥𝑇†𝑤∥≤‖𝑣‖,
with equality if and only if 𝑣= 𝑇†𝑤.
Proof
(a) Suppose 𝑣∈𝑉. Then
𝑇𝑣−𝑤= (𝑇𝑣−𝑇𝑇†𝑤) + (𝑇𝑇†𝑤−𝑤).
The first term in parentheses above is in range 𝑇. Because the operator 𝑇𝑇†
is the orthogonal projection of 𝑊onto range 𝑇[by 6.69(b)], the second term
in parentheses above is in (range 𝑇)⟂[see 6.57(f)].
Thus the Pythagorean theorem implies the desired inequality that the norm of
the second term in parentheses above is less than or equal to ‖𝑇𝑣−𝑤‖, with
equality if and only if the first term in parentheses above equals 0. Hence
we have equality if and only if 𝑣−𝑇†𝑤∈null 𝑇, which is equivalent to the
statement that 𝑣∈𝑇†𝑤+ null 𝑇, completing the proof of (a).
(b) Suppose 𝑣∈𝑇†𝑤+ null 𝑇. Hence 𝑣−𝑇†𝑤∈null 𝑇. Now
𝑣= (𝑣−𝑇†𝑤) + 𝑇†𝑤.
The definition of 𝑇† implies that 𝑇†𝑤∈(null 𝑇)⟂. Thus the Pythagorean
theorem implies that ∥𝑇†𝑤∥≤‖𝑣‖, with equality if and only if 𝑣= 𝑇†𝑤.
A formula for 𝑇† will be given in the next chapter (see 7.78).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6C
Orthogonal Complements and Minimization Problems
6.71
example: pseudoinverse of a linear map from 𝐅4 to 𝐅3
Suppose 𝑇∈ℒ(𝐅4, 𝐅3) is defined by
𝑇(𝑎, 𝑏, 𝑐, 𝑑) = (𝑎+ 𝑏+ 𝑐, 2𝑐+ 𝑑, 0).
This linear map is neither injective nor surjective, but we can compute its pseudo-
inverse. To do this, first note that range 𝑇= {(𝑥, 𝑦, 0) ∶𝑥, 𝑦∈𝐅}. Thus
𝑃range 𝑇(𝑥, 𝑦, 𝑧) = (𝑥, 𝑦, 0)
for each (𝑥, 𝑦, 𝑧) ∈𝐅3. Also,
null 𝑇= {(𝑎, 𝑏, 𝑐, 𝑑) ∈𝐅4 ∶𝑎+ 𝑏+ 𝑐= 0 and 2𝑐+ 𝑑= 0}.
The list (−1, 1, 0, 0), (−1, 0, 1, −2) of two vectors in null 𝑇spans null 𝑇because
if (𝑎, 𝑏, 𝑐, 𝑑) ∈null 𝑇then
(𝑎, 𝑏, 𝑐, 𝑑) = 𝑏(−1, 1, 0, 0) + 𝑐(−1, 0, 1, −2).
Because the list (−1, 1, 0, 0), (−1, 0, 1, −2) is linearly independent, this list is a
basis of null 𝑇.
Now suppose (𝑥, 𝑦, 𝑧) ∈𝐅3. Then
6.72
𝑇†(𝑥, 𝑦, 𝑧) = (𝑇|(null 𝑇)⟂)−1𝑃range 𝑇(𝑥, 𝑦, 𝑧) = (𝑇|(null 𝑇)⟂)−1(𝑥, 𝑦, 0).
The right side of the equation above is the vector (𝑎, 𝑏, 𝑐, 𝑑) ∈𝐅4 such that
𝑇(𝑎, 𝑏, 𝑐, 𝑑) = (𝑥, 𝑦, 0) and (𝑎, 𝑏, 𝑐, 𝑑) ∈(null 𝑇)⟂. In other words, 𝑎, 𝑏, 𝑐, 𝑑must
satisfy the following equations:
𝑎+ 𝑏+ 𝑐= 𝑥
2𝑐+ 𝑑= 𝑦
−𝑎+ 𝑏= 0
−𝑎+ 𝑐−2𝑑= 0,
where the first two equations are equivalent to the equation 𝑇(𝑎, 𝑏, 𝑐, 𝑑) = (𝑥, 𝑦, 0)
and the last two equations come from the condition for (𝑎, 𝑏, 𝑐, 𝑑) to be orthogonal
to each of the basis vectors (−1, 1, 0, 0), (−1, 0, 1, −2) in this basis of null 𝑇.
Thinking of 𝑥and 𝑦as constants and 𝑎, 𝑏, 𝑐, 𝑑as unknowns, we can solve the
system above of four equations in four unknowns, getting
𝑎=
11(5𝑥−2𝑦), 𝑏=
11(5𝑥−2𝑦), 𝑐=
11(𝑥+ 4𝑦), 𝑑=
11(−2𝑥+ 3𝑦).
Hence 6.72 tells us that
𝑇†(𝑥, 𝑦, 𝑧) =
11(5𝑥−2𝑦, 5𝑥−2𝑦, 𝑥+ 4𝑦, −2𝑥+ 3𝑦).
The formula above for 𝑇† shows that 𝑇𝑇†(𝑥, 𝑦, 𝑧) = (𝑥, 𝑦, 0) for all (𝑥, 𝑦, 𝑧) ∈𝐅3,
which illustrates the equation 𝑇𝑇† = 𝑃range 𝑇from 6.69(b).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Exercises 6C
Suppose 𝑣1, … , 𝑣𝑚∈𝑉. Prove that
{𝑣1, … , 𝑣𝑚}⟂= (span(𝑣1, … , 𝑣𝑚))⟂.
Suppose 𝑈is a subspace of 𝑉with basis 𝑢1, … , 𝑢𝑚and
𝑢1, … , 𝑢𝑚, 𝑣1, … , 𝑣𝑛
is a basis of 𝑉. Prove that if the Gram–Schmidt procedure is applied to the
basis of 𝑉above, producing a list 𝑒1, … , 𝑒𝑚, 𝑓1, … , 𝑓𝑛, then 𝑒1, … , 𝑒𝑚is an
orthonormal basis of 𝑈and 𝑓1, … , 𝑓𝑛is an orthonormal basis of 𝑈⟂.
Suppose 𝑈is the subspace of 𝐑4 defined by
𝑈= span((1, 2, 3, −4), (−5, 4, 3, 2)).
Find an orthonormal basis of 𝑈and an orthonormal basis of 𝑈⟂.
Suppose 𝑒1, … , 𝑒𝑛is a list of vectors in 𝑉with ‖𝑒𝑘‖ = 1 for each 𝑘= 1, … , 𝑛
and
‖𝑣‖2 = ∣⟨𝑣, 𝑒1⟩∣2 + ⋯+ ∣⟨𝑣, 𝑒𝑛⟩∣2
for all 𝑣∈𝑉. Prove that 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉.
This exercise provides a converse to 6.30(b).
Suppose that 𝑉is finite-dimensional and 𝑈is a subspace of 𝑉. Show that
𝑃𝑈⟂= 𝐼−𝑃𝑈, where 𝐼is the identity operator on 𝑉.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Show that
𝑇= 𝑇𝑃(null 𝑇)⟂= 𝑃range 𝑇𝑇.
Suppose that 𝑋and 𝑌are finite-dimensional subspaces of 𝑉. Prove that
𝑃𝑋𝑃𝑌= 0 if and only if ⟨𝑥, 𝑦⟩= 0 for all 𝑥∈𝑋and all 𝑦∈𝑌.
Suppose 𝑈is a finite-dimensional subspace of 𝑉and 𝑣∈𝑉. Define a linear
functional 𝜑∶𝑈→𝐅by
𝜑(𝑢) = ⟨𝑢, 𝑣⟩
for all 𝑢∈𝑈. By the Riesz representation theorem (6.42) as applied to the
inner product space 𝑈, there exists a unique vector 𝑤∈𝑈such that
𝜑(𝑢) = ⟨𝑢, 𝑤⟩
for all 𝑢∈𝑈. Show that 𝑤= 𝑃𝑈𝑣.
Suppose 𝑉is finite-dimensional. Suppose 𝑃∈ℒ(𝑉) is such that 𝑃2 = 𝑃
and every vector in null 𝑃is orthogonal to every vector in range 𝑃. Prove
that there exists a subspace 𝑈of 𝑉such that 𝑃= 𝑃𝑈.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 6C
Orthogonal Complements and Minimization Problems
Suppose 𝑉is finite-dimensional and 𝑃∈ℒ(𝑉) is such that 𝑃2 = 𝑃and
‖𝑃𝑣‖ ≤‖𝑣‖
for every 𝑣∈𝑉. Prove that there exists a subspace 𝑈of 𝑉such that 𝑃= 𝑃𝑈.
Suppose 𝑇∈ℒ(𝑉) and 𝑈is a finite-dimensional subspace of 𝑉. Prove that
𝑈is invariant under 𝑇⟺𝑃𝑈𝑇𝑃𝑈= 𝑇𝑃𝑈.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉), and 𝑈is a subspace of 𝑉.
Prove that
𝑈and 𝑈⟂are both invariant under 𝑇⟺𝑃𝑈𝑇= 𝑇𝑃𝑈.
Suppose 𝐅= 𝐑and 𝑉is finite-dimensional. For each 𝑣∈𝑉, let 𝜑𝑣denote
the linear functional on 𝑉defined by
𝜑𝑣(𝑢) = ⟨𝑢, 𝑣⟩
for all 𝑢∈𝑉.
(a) Show that 𝑣↦𝜑𝑣is an injective linear map from 𝑉to 𝑉′.
(b) Use (a) and a dimension-counting argument to show that 𝑣↦𝜑𝑣is an
isomorphism from 𝑉onto 𝑉′.
The purpose of this exercise is to give an alternative proof of the Riesz
representation theorem (6.42 and 6.58) when 𝐅= 𝐑. Thus you should not
use the Riesz representation theorem as a tool in your solution.
Suppose that 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉. Explain why the dual
basis (see 3.112) of 𝑒1, … , 𝑒𝑛is 𝑒1, … , 𝑒𝑛under the identification of 𝑉′ with
𝑉provided by the Riesz representation theorem (6.58).
In 𝐑4, let
𝑈= span((1, 1, 0, 0), (1, 1, 1, 2)).
Find 𝑢∈𝑈such that ‖𝑢−(1, 2, 3, 4)‖ is as small as possible.
Suppose 𝐶[−1, 1] is the vector space of continuous real-valued functions
on the interval [−1, 1] with inner product given by
⟨𝑓, 𝑔⟩= ∫
−1 𝑓𝑔
for all 𝑓, 𝑔∈𝐶[−1, 1]. Let 𝑈be the subspace of 𝐶[−1, 1] defined by
𝑈= { 𝑓∈𝐶[−1, 1] ∶𝑓(0) = 0}.
(a) Show that 𝑈⟂= {0}.
(b) Show that 6.49 and 6.52 do not hold without the finite-dimensional
hypothesis.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
Find 𝑝∈𝒫3(𝐑) such that 𝑝(0) = 0, 𝑝′(0) = 0, and ∫
0 ∣2 + 3𝑥−𝑝(𝑥)∣2 𝑑𝑥is
as small as possible.
Find 𝑝∈𝒫5(𝐑) that makes ∫
𝜋
−𝜋∣sin 𝑥−𝑝(𝑥)∣2 𝑑𝑥as small as possible.
The polynomial 6.65 is an excellent approximation to the answer to this
exercise, but here you are asked to find the exact solution, which involves
powers of 𝜋. A computer that can perform symbolic integration should
help.
Suppose 𝑉is finite-dimensional and 𝑃∈ℒ(𝑉) is an orthogonal projection
of 𝑉onto some subspace of 𝑉. Prove that 𝑃† = 𝑃.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Show that
null 𝑇† = (range 𝑇)⟂
and
range 𝑇† = (null 𝑇)⟂.
Suppose 𝑇∈ℒ(𝐅3, 𝐅2) is defined by
𝑇(𝑎, 𝑏, 𝑐) = (𝑎+ 𝑏+ 𝑐, 2𝑏+ 3𝑐).
(a) For (𝑥, 𝑦) ∈𝐅2, find a formula for 𝑇†(𝑥, 𝑦).
(b) Verify that the equation 𝑇𝑇† = 𝑃range 𝑇from 6.69(b) holds with the
formula for 𝑇† obtained in (a).
(c) Verify that the equation 𝑇†𝑇= 𝑃(null 𝑇)⟂from 6.69(c) holds with the
formula for 𝑇† obtained in (a).
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Prove that
𝑇𝑇†𝑇= 𝑇
and
𝑇†𝑇𝑇† = 𝑇†.
Both formulas above clearly hold if 𝑇is invertible because in that case we
can replace 𝑇† with 𝑇−1.
Suppose 𝑉and 𝑊are finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Prove that
(𝑇†)† = 𝑇.
The equation above is analogous to the equation (𝑇−1)−1 = 𝑇that holds if
𝑇is invertible.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
The deepest results related to inner product spaces deal with the subject to which
we now turn—linear maps and operators on inner product spaces. As we will see,
good theorems can be proved by exploiting properties of the adjoint.
The hugely important spectral theorem will provide a complete description
of self-adjoint operators on real inner product spaces and of normal operators
on complex inner product spaces. We will then use the spectral theorem to help
understand positive operators and unitary operators, which will lead to unitary
matrices and matrix factorizations. The spectral theorem will also lead to the
popular singular value decomposition, which will lead to the polar decomposition.
The most important results in the rest of this book are valid only in finite
dimensions. Thus from now on we assume that 𝑉and 𝑊are finite-dimensional.
standing assumptions for this chapter
• 𝐅denotes 𝐑or 𝐂.
• 𝑉and 𝑊are nonzero finite-dimensional inner product spaces over 𝐅.
Petar Milošević CC BY-SA
Market square in Lviv, a city that has had several names and has been in several
countries because of changing international borders. From 1772 until 1918, the city was
in Austria and was called Lemberg. Between World War I and World War II, the city was
in Poland and was called Lwów. During this time, mathematicians in Lwów, particularly
Stefan Banach (1892–1945) and his colleagues, developed the basic results of modern
functional analysis, using tools of analysis to study infinite-dimensional vector spaces.
Since the end of World War II, Lviv has been in Ukraine, which was part of the
Soviet Union until Ukraine became an independent country in 1991.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
7A Self-Adjoint and Normal Operators
Adjoints
7.1
definition: adjoint, 𝑇∗
Suppose 𝑇∈ℒ(𝑉, 𝑊). The adjoint of 𝑇is the function 𝑇∗∶𝑊→𝑉such
that
⟨𝑇𝑣, 𝑤⟩= ⟨𝑣, 𝑇∗𝑤⟩
for every 𝑣∈𝑉and every 𝑤∈𝑊.
The word adjoint has another meaning
in linear algebra.
In case you en-
counter the second meaning elsewhere,
be warned that the two meanings for
adjoint are unrelated to each other.
To see why the definition above
makes sense, suppose 𝑇∈ℒ(𝑉, 𝑊). Fix
𝑤∈𝑊. Consider the linear functional
𝑣↦⟨𝑇𝑣, 𝑤⟩
on 𝑉that maps 𝑣∈𝑉to ⟨𝑇𝑣, 𝑤⟩; this
linear functional depends on 𝑇and 𝑤. By the Riesz representation theorem (6.42),
there exists a unique vector in 𝑉such that this linear functional is given by taking
the inner product with it. We call this unique vector 𝑇∗𝑤. In other words, 𝑇∗𝑤is
the unique vector in 𝑉such that
⟨𝑇𝑣, 𝑤⟩= ⟨𝑣, 𝑇∗𝑤⟩
for every 𝑣∈𝑉.
In the equation above, the inner product on the left takes place in 𝑊and the
inner product on the right takes place in 𝑉. However, we use the same notation
⟨⋅, ⋅⟩for both inner products.
7.2
example: adjoint of a linear map from 𝐑3 to 𝐑2
Define 𝑇∶𝐑3 →𝐑2 by
𝑇(𝑥1, 𝑥2, 𝑥3) = (𝑥2 + 3𝑥3, 2𝑥1).
To compute 𝑇∗, suppose (𝑥1, 𝑥2, 𝑥3) ∈𝐑3 and (𝑦1, 𝑦2) ∈𝐑2. Then
⟨𝑇(𝑥1, 𝑥2, 𝑥3), (𝑦1, 𝑦2)⟩= ⟨(𝑥2 + 3𝑥3, 2𝑥1), (𝑦1, 𝑦2)⟩
= 𝑥2𝑦1 + 3𝑥3𝑦1 + 2𝑥1𝑦2
= ⟨(𝑥1, 𝑥2, 𝑥3), (2𝑦2, 𝑦1, 3𝑦1)⟩.
The equation above and the definition of the adjoint imply that
𝑇∗(𝑦1, 𝑦2) = (2𝑦2, 𝑦1, 3𝑦1).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7A
Self-Adjoint and Normal Operators
7.3
example: adjoint of a linear map with range of dimension at most 1
Fix 𝑢∈𝑉and 𝑥∈𝑊. Define 𝑇∈ℒ(𝑉, 𝑊) by
𝑇𝑣= ⟨𝑣, 𝑢⟩𝑥
for each 𝑣∈𝑉. To compute 𝑇∗, suppose 𝑣∈𝑉and 𝑤∈𝑊. Then
⟨𝑇𝑣, 𝑤⟩= ⟨⟨𝑣, 𝑢⟩𝑥, 𝑤⟩
= ⟨𝑣, 𝑢⟩⟨𝑥, 𝑤⟩
= ⟨𝑣, ⟨𝑤, 𝑥⟩𝑢⟩.
Thus
𝑇∗𝑤= ⟨𝑤, 𝑥⟩𝑢.
The two examples above and the proof
below use a common technique for
computing 𝑇∗: start with a formula
for ⟨𝑇𝑣, 𝑤⟩then manipulate it to get
just 𝑣in the first slot; the entry in the
second slot will then be 𝑇∗𝑤.
In the two examples above, 𝑇∗turned
out to be not just a function from 𝑊to
𝑉but a linear map from 𝑊to 𝑉. This
behavior is true in general, as shown by
the next result.
7.4
adjoint of a linear map is a linear map
If 𝑇∈ℒ(𝑉, 𝑊), then 𝑇∗∈ℒ(𝑊, 𝑉).
Proof
Suppose 𝑇∈ℒ(𝑉, 𝑊). If 𝑣∈𝑉and 𝑤1, 𝑤2 ∈𝑊, then
⟨𝑇𝑣, 𝑤1 + 𝑤2⟩= ⟨𝑇𝑣, 𝑤1⟩+ ⟨𝑇𝑣, 𝑤2⟩
= ⟨𝑣, 𝑇∗𝑤1⟩+ ⟨𝑣, 𝑇∗𝑤2⟩
= ⟨𝑣, 𝑇∗𝑤1 + 𝑇∗𝑤2⟩.
The equation above shows that
𝑇∗(𝑤1 + 𝑤2) = 𝑇∗𝑤1 + 𝑇∗𝑤2.
If 𝑣∈𝑉, 𝜆∈𝐅, and 𝑤∈𝑊, then
⟨𝑇𝑣, 𝜆𝑤⟩= 𝜆⟨𝑇𝑣, 𝑤⟩
= 𝜆⟨𝑣, 𝑇∗𝑤⟩
= ⟨𝑣, 𝜆𝑇∗𝑤⟩.
The equation above shows that
𝑇∗(𝜆𝑤) = 𝜆𝑇∗𝑤.
Thus 𝑇∗is a linear map, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
7.5
properties of the adjoint
Suppose 𝑇∈ℒ(𝑉, 𝑊). Then
(a) (𝑆+ 𝑇)∗= 𝑆∗+ 𝑇∗for all 𝑆∈ℒ(𝑉, 𝑊);
(b) (𝜆𝑇)∗= 𝜆𝑇∗for all 𝜆∈𝐅;
(c) (𝑇∗)∗= 𝑇;
(d) (𝑆𝑇)∗= 𝑇∗𝑆∗for all 𝑆∈ℒ(𝑊, 𝑈) (here 𝑈is a finite-dimensional inner
product space over 𝐅);
(e) 𝐼∗= 𝐼, where 𝐼is the identity operator on 𝑉;
(f) if 𝑇is invertible, then 𝑇∗is invertible and (𝑇∗)−1 = (𝑇−1)∗.
Proof
Suppose 𝑣∈𝑉and 𝑤∈𝑊.
(a) If 𝑆∈ℒ(𝑉, 𝑊), then
⟨(𝑆+ 𝑇)𝑣, 𝑤⟩= ⟨𝑆𝑣, 𝑤⟩+ ⟨𝑇𝑣, 𝑤⟩
= ⟨𝑣, 𝑆∗𝑤⟩+ ⟨𝑣, 𝑇∗𝑤⟩
= ⟨𝑣, 𝑆∗𝑤+ 𝑇∗𝑤⟩.
Thus (𝑆+ 𝑇)∗𝑤= 𝑆∗𝑤+ 𝑇∗𝑤, as desired.
(b) If 𝜆∈𝐅, then
⟨(𝜆𝑇)𝑣, 𝑤⟩= 𝜆⟨𝑇𝑣, 𝑤⟩= 𝜆⟨𝑣, 𝑇∗𝑤⟩= ⟨𝑣, 𝜆𝑇∗𝑤⟩.
Thus (𝜆𝑇)∗𝑤= 𝜆𝑇∗𝑤, as desired.
(c) We have
⟨𝑇∗𝑤, 𝑣⟩= ⟨𝑣, 𝑇∗𝑤⟩= ⟨𝑇𝑣, 𝑤⟩= ⟨𝑤, 𝑇𝑣⟩.
Thus (𝑇∗)∗𝑣= 𝑇𝑣, as desired.
(d) Suppose 𝑆∈ℒ(𝑊, 𝑈) and 𝑢∈𝑈. Then
⟨(𝑆𝑇)𝑣, 𝑢⟩= ⟨𝑆(𝑇𝑣), 𝑢⟩= ⟨𝑇𝑣, 𝑆∗𝑢⟩= ⟨𝑣, 𝑇∗(𝑆∗𝑢)⟩.
Thus (𝑆𝑇)∗𝑢= 𝑇∗(𝑆∗𝑢), as desired.
(e) Suppose 𝑢∈𝑉. Then
⟨𝐼𝑢, 𝑣⟩= ⟨𝑢, 𝑣⟩.
Thus 𝐼∗𝑣= 𝑣, as desired.
(f) Suppose 𝑇is invertible. Take adjoints of both sides of the equation 𝑇−1𝑇= 𝐼,
then use (d) and (e) to show that 𝑇∗(𝑇−1)∗= 𝐼. Similarly, the equation
𝑇𝑇−1 = 𝐼implies (𝑇−1)∗𝑇∗= 𝐼. Thus (𝑇−1)∗is the inverse of 𝑇∗, as
desired.
If 𝐅= 𝐑, then the map 𝑇↦𝑇∗is a linear map from ℒ(𝑉, 𝑊) to ℒ(𝑊, 𝑉),
as follows from (a) and (b) of the result above. However, if 𝐅= 𝐂, then this map
is not linear because of the complex conjugate that appears in (b).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7A
Self-Adjoint and Normal Operators
The next result shows the relationship between the null space and the range of
a linear map and its adjoint.
7.6
null space and range of 𝑇∗
Suppose 𝑇∈ℒ(𝑉, 𝑊). Then
(a) null 𝑇∗= (range 𝑇)⟂;
(b) range 𝑇∗= (null 𝑇)⟂;
(c) null 𝑇= (range 𝑇∗)⟂;
(d) range 𝑇= (null 𝑇∗)⟂.
Proof
We begin by proving (a). Let 𝑤∈𝑊. Then
𝑤∈null 𝑇∗⟺𝑇∗𝑤= 0
⟺⟨𝑣, 𝑇∗𝑤⟩= 0 for all 𝑣∈𝑉
⟺⟨𝑇𝑣, 𝑤⟩= 0 for all 𝑣∈𝑉
⟺𝑤∈(range 𝑇)⟂.
Thus null 𝑇∗= (range 𝑇)⟂, proving (a).
If we take the orthogonal complement of both sides of (a), we get (d), where
we have used 6.52. Replacing 𝑇with 𝑇∗in (a) gives (c), where we have used
7.5(c). Finally, replacing 𝑇with 𝑇∗in (d) gives (b).
As we will soon see, the next definition is intimately connected to the matrix
of the adjoint of a linear map.
7.7
definition: conjugate transpose, 𝐴∗
The conjugate transpose of an 𝑚-by-𝑛matrix 𝐴is the 𝑛-by-𝑚matrix 𝐴∗
obtained by interchanging the rows and columns and then taking the complex
conjugate of each entry. In other words, if 𝑗∈{1, … , 𝑛} and 𝑘∈{1, … , 𝑚},
then
(𝐴∗)𝑗,𝑘= 𝐴𝑘,𝑗.
7.8
example: conjugate transpose of a 2-by-3 matrix
If a matrix 𝐴has only real entries,
then 𝐴∗= 𝐴t, where 𝐴t denotes the
transpose of 𝐴(the matrix obtained
by interchanging the rows and the
columns).
The conjugate transpose of the 2-by-3
matrix ( 2
3 + 4𝑖
8𝑖) is the 3-by-2
matrix
⎛⎜⎜⎜
⎝
3 −4𝑖
−8𝑖
⎞⎟⎟⎟
⎠
.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
The adjoint of a linear map does not
depend on a choice of basis. Thus
we frequently emphasize adjoints of
linear maps instead of transposes or
conjugate transposes of matrices.
The next result shows how to compute
the matrix of 𝑇∗from the matrix of 𝑇.
Caution: With respect to nonorthonor-
mal bases, the matrix of 𝑇∗does not nec-
essarily equal the conjugate transpose of
the matrix of 𝑇.
7.9
matrix of 𝑇∗equals conjugate transpose of matrix of 𝑇
Let 𝑇∈ℒ(𝑉, 𝑊). Suppose 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉and
𝑓1, … , 𝑓𝑚is an orthonormal basis of 𝑊. Then ℳ(𝑇∗, ( 𝑓1, … , 𝑓𝑚), (𝑒1, … , 𝑒𝑛))
is the conjugate transpose of ℳ(𝑇, (𝑒1, … , 𝑒𝑛), ( 𝑓1, … , 𝑓𝑚)). In other words,
ℳ(𝑇∗) = (ℳ(𝑇))∗.
Proof
In this proof, we will write ℳ(𝑇) and ℳ(𝑇∗) instead of the longer
expressions ℳ(𝑇, (𝑒1, … , 𝑒𝑛), ( 𝑓1, … , 𝑓𝑚)) and ℳ(𝑇∗, ( 𝑓1, … , 𝑓𝑚), (𝑒1, … , 𝑒𝑛)).
Recall that we obtain the 𝑘th column of ℳ(𝑇) by writing 𝑇𝑒𝑘as a linear
combination of the 𝑓𝑗’s; the scalars used in this linear combination then become
the 𝑘th column of ℳ(𝑇). Because 𝑓1, … , 𝑓𝑚is an orthonormal basis of 𝑊, we
know how to write 𝑇𝑒𝑘as a linear combination of the 𝑓𝑗’s [see 6.30(a)]:
𝑇𝑒𝑘= ⟨𝑇𝑒𝑘, 𝑓1⟩𝑓1 + ⋯+ ⟨𝑇𝑒𝑘, 𝑓𝑚⟩𝑓𝑚.
Thus
the entry in row 𝑗, column 𝑘, of ℳ(𝑇) is ⟨𝑇𝑒𝑘, 𝑓𝑗⟩.
In the statement above, replace 𝑇with 𝑇∗and interchange 𝑒1, … , 𝑒𝑛and
𝑓1, … , 𝑓𝑚. This shows that the entry in row 𝑗, column 𝑘, of ℳ(𝑇∗) is ⟨𝑇∗𝑓𝑘, 𝑒𝑗⟩,
which equals ⟨𝑓𝑘, 𝑇𝑒𝑗⟩, which equals ⟨𝑇𝑒𝑗, 𝑓𝑘⟩, which equals the complex conjugate
of the entry in row 𝑘, column 𝑗, of ℳ(𝑇). Thus ℳ(𝑇∗) = (ℳ(𝑇))∗.
The Riesz representation theorem as stated in 6.58 provides an identification of
𝑉with its dual space 𝑉′ defined in 3.110. Under this identification, the orthogonal
complement 𝑈⟂of a subset 𝑈⊆𝑉corresponds to the annihilator 𝑈0 of 𝑈. If 𝑈
is a subspace of 𝑉, then the formulas for the dimensions of 𝑈⟂and 𝑈0 become
identical under this identification—see 3.125 and 6.51.
Because orthogonal complements and
adjoints are easier to deal with than
annihilators and dual maps, there is
no need to work with annihilators
and dual maps in the context of inner
product spaces.
Suppose 𝑇∶𝑉→𝑊is a linear map.
Under the identification of 𝑉with 𝑉′ and
the identification of 𝑊with 𝑊′, the ad-
joint map 𝑇∗∶𝑊→𝑉corresponds to
the dual map 𝑇′∶𝑊′ →𝑉′ defined in
3.118, as Exercise 32 asks you to verify.
Under this identification, the formulas for
null 𝑇∗and range 𝑇∗[7.6(a) and (b)] then become identical to the formulas for
null 𝑇′ and range 𝑇′ [3.128(a) and 3.130(b)]. Furthermore, the theorem about the
matrix of 𝑇∗(7.9) is analogous to the theorem about the matrix of 𝑇′ (3.132).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7A
Self-Adjoint and Normal Operators
Self-Adjoint Operators
Now we switch our attention to operators on inner product spaces. Instead of
considering linear maps from 𝑉to 𝑊, we will focus on linear maps from 𝑉to 𝑉;
recall that such linear maps are called operators.
7.10
definition: self-adjoint
An operator 𝑇∈ℒ(𝑉) is called self-adjoint if 𝑇= 𝑇∗.
If 𝑇∈ℒ(𝑉) and 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉, then 𝑇is self-adjoint
if and only if ℳ(𝑇, (𝑒1, … , 𝑒𝑛)) = ℳ(𝑇, (𝑒1, … , 𝑒𝑛))∗, as follows from 7.9.
7.11
example: determining whether 𝑇is self-adjoint from its matrix
Suppose 𝑐∈𝐅and 𝑇is the operator on 𝐅2 whose matrix (with respect to the
standard basis) is
ℳ(𝑇) = ( 2
𝑐
7 ) .
The matrix of 𝑇∗(with respect to the standard basis) is
ℳ(𝑇∗) = ( 2
𝑐
7 ) .
Thus ℳ(𝑇) = ℳ(𝑇∗) if and only if 𝑐= 3. Hence the operator 𝑇is self-adjoint
if and only if 𝑐= 3.
A good analogy to keep in mind is that the adjoint on ℒ(𝑉) plays a role similar
to that of the complex conjugate on 𝐂. A complex number 𝑧is real if and only if
𝑧= 𝑧; thus a self-adjoint operator (𝑇= 𝑇∗) is analogous to a real number.
An operator 𝑇∈ℒ(𝑉) is self-adjoint
if and only if
⟨𝑇𝑣, 𝑤⟩= ⟨𝑣, 𝑇𝑤⟩
for all 𝑣, 𝑤∈𝑉.
We will see that the analogy discussed
above is reflected in some important prop-
erties of self-adjoint operators, beginning
with eigenvalues in the next result.
If 𝐅= 𝐑, then by definition every
eigenvalue is real, so the next result is
interesting only when 𝐅= 𝐂.
7.12
eigenvalues of self-adjoint operators
Every eigenvalue of a self-adjoint operator is real.
Proof
Suppose 𝑇is a self-adjoint operator on 𝑉. Let 𝜆be an eigenvalue of 𝑇,
and let 𝑣be a nonzero vector in 𝑉such that 𝑇𝑣= 𝜆𝑣. Then
𝜆‖𝑣‖2 = ⟨𝜆𝑣, 𝑣⟩= ⟨𝑇𝑣, 𝑣⟩= ⟨𝑣, 𝑇𝑣⟩= ⟨𝑣, 𝜆𝑣⟩= 𝜆‖𝑣‖2.
Thus 𝜆= 𝜆, which means that 𝜆is real, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
The next result is false for real inner product spaces. As an example, consider
the operator 𝑇∈ℒ(𝐑2) that is a counterclockwise rotation of 90∘around the
origin; thus 𝑇(𝑥, 𝑦) = (−𝑦, 𝑥). Notice that 𝑇𝑣is orthogonal to 𝑣for every 𝑣∈𝐑2,
even though 𝑇≠0.
7.13
𝑇𝑣is orthogonal to 𝑣for all 𝑣⟺𝑇= 0 (assuming 𝐅= 𝐂)
Suppose 𝑉is a complex inner product space and 𝑇∈ℒ(𝑉). Then
⟨𝑇𝑣, 𝑣⟩= 0 for every 𝑣∈𝑉⟺𝑇= 0.
Proof
If 𝑢, 𝑤∈𝑉, then
⟨𝑇𝑢, 𝑤⟩= ⟨𝑇(𝑢+ 𝑤), 𝑢+ 𝑤⟩−⟨𝑇(𝑢−𝑤), 𝑢−𝑤⟩
+ ⟨𝑇(𝑢+ 𝑖𝑤), 𝑢+ 𝑖𝑤⟩−⟨𝑇(𝑢−𝑖𝑤), 𝑢−𝑖𝑤⟩
𝑖,
as can be verified by computing the right side. Note that each term on the right
side is of the form ⟨𝑇𝑣, 𝑣⟩for appropriate 𝑣∈𝑉.
Now suppose ⟨𝑇𝑣, 𝑣⟩= 0 for every 𝑣∈𝑉. Then the equation above implies
that ⟨𝑇𝑢, 𝑤⟩= 0 for all 𝑢, 𝑤∈𝑉, which then implies that 𝑇𝑢= 0 for every 𝑢∈𝑉
(take 𝑤= 𝑇𝑢). Hence 𝑇= 0, as desired.
The next result provides another good
example of how self-adjoint operators
behave like real numbers.
The next result is false for real inner
product spaces, as shown by considering
any operator on a real inner product space
that is not self-adjoint.
7.14
⟨𝑇𝑣, 𝑣⟩is real for all 𝑣⟺𝑇is self-adjoint (assuming 𝐅= 𝐂)
Suppose 𝑉is a complex inner product space and 𝑇∈ℒ(𝑉). Then
𝑇is self-adjoint ⟺⟨𝑇𝑣, 𝑣⟩∈𝐑for every 𝑣∈𝑉.
Proof
If 𝑣∈𝑉, then
7.15
⟨𝑇∗𝑣, 𝑣⟩= ⟨𝑣, 𝑇∗𝑣⟩= ⟨𝑇𝑣, 𝑣⟩.
Now
𝑇is self-adjoint ⟺𝑇−𝑇∗= 0
⟺⟨(𝑇−𝑇∗)𝑣, 𝑣⟩= 0 for every 𝑣∈𝑉
⟺⟨𝑇𝑣, 𝑣⟩−⟨𝑇𝑣, 𝑣⟩= 0 for every 𝑣∈𝑉
⟺⟨𝑇𝑣, 𝑣⟩∈𝐑for every 𝑣∈𝑉,
where the second equivalence follows from 7.13 as applied to 𝑇−𝑇∗and the
third equivalence follows from 7.15.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7A
Self-Adjoint and Normal Operators
On a real inner product space 𝑉, a nonzero operator 𝑇might satisfy ⟨𝑇𝑣, 𝑣⟩= 0
for all 𝑣∈𝑉. However, the next result shows that this cannot happen for a self-
adjoint operator.
7.16
𝑇self-adjoint and ⟨𝑇𝑣, 𝑣⟩= 0 for all 𝑣⟺𝑇= 0
Suppose 𝑇is a self-adjoint operator on 𝑉. Then
⟨𝑇𝑣, 𝑣⟩= 0 for every 𝑣∈𝑉⟺𝑇= 0.
Proof
We have already proved this (without the hypothesis that 𝑇is self-adjoint)
when 𝑉is a complex inner product space (see 7.13). Thus we can assume that 𝑉
is a real inner product space. If 𝑢, 𝑤∈𝑉, then
7.17
⟨𝑇𝑢, 𝑤⟩= ⟨𝑇(𝑢+ 𝑤), 𝑢+ 𝑤⟩−⟨𝑇(𝑢−𝑤), 𝑢−𝑤⟩
,
as can be proved by computing the right side using the equation
⟨𝑇𝑤, 𝑢⟩= ⟨𝑤, 𝑇𝑢⟩= ⟨𝑇𝑢, 𝑤⟩,
where the first equality holds because 𝑇is self-adjoint and the second equality
holds because we are working in a real inner product space.
Now suppose ⟨𝑇𝑣, 𝑣⟩= 0 for every 𝑣∈𝑉. Because each term on the right
side of 7.17 is of the form ⟨𝑇𝑣, 𝑣⟩for appropriate 𝑣, this implies that ⟨𝑇𝑢, 𝑤⟩= 0
for all 𝑢, 𝑤∈𝑉. This implies that 𝑇𝑢= 0 for every 𝑢∈𝑉(take 𝑤= 𝑇𝑢). Hence
𝑇= 0, as desired.
Normal Operators
7.18
definition: normal
• An operator on an inner product space is called normal if it commutes with
its adjoint.
• In other words, 𝑇∈ℒ(𝑉) is normal if 𝑇𝑇∗= 𝑇∗𝑇.
Every self-adjoint operator is normal, because if 𝑇is self-adjoint then 𝑇∗= 𝑇
and hence 𝑇commutes with 𝑇∗.
7.19
example: an operator that is normal but not self-adjoint
Let 𝑇be the operator on 𝐅2 whose matrix (with respect to the standard basis)
is
( 2
−3
) .
Thus 𝑇(𝑤, 𝑧) = (2𝑤−3𝑧, 3𝑤+ 2𝑧).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
This operator 𝑇is not self-adjoint because the entry in row 2, column 1 (which
equals 3) does not equal the complex conjugate of the entry in row 1, column 2
(which equals −3).
The matrix of 𝑇𝑇∗equals
( 2
−3
) (
−3
2 ) , which equals ( 13
13 ) .
Similarly, the matrix of 𝑇∗𝑇equals
(
−3
2 ) ( 2
−3
) , which equals ( 13
13 ) .
Because 𝑇𝑇∗and 𝑇∗𝑇have the same matrix, we see that 𝑇𝑇∗= 𝑇∗𝑇. Thus 𝑇is
normal.
In the next section we will see why normal operators are worthy of special
attention. The next result provides a useful characterization of normal operators.
7.20
𝑇is normal if and only if 𝑇𝑣and 𝑇∗𝑣have the same norm
Suppose 𝑇∈ℒ(𝑉). Then
𝑇is normal ⟺‖𝑇𝑣‖ = ‖𝑇∗𝑣‖ for every 𝑣∈𝑉.
Proof
We have
𝑇is normal ⟺𝑇∗𝑇−𝑇𝑇∗= 0
⟺⟨(𝑇∗𝑇−𝑇𝑇∗)𝑣, 𝑣⟩= 0 for every 𝑣∈𝑉
⟺⟨𝑇∗𝑇𝑣, 𝑣⟩= ⟨𝑇𝑇∗𝑣, 𝑣⟩for every 𝑣∈𝑉
⟺⟨𝑇𝑣, 𝑇𝑣⟩= ⟨𝑇∗𝑣, 𝑇∗𝑣⟩for every 𝑣∈𝑉
⟺‖𝑇𝑣‖2 = ∥𝑇∗𝑣∥2 for every 𝑣∈𝑉
⟺‖𝑇𝑣‖ = ∥𝑇∗𝑣∥for every 𝑣∈𝑉,
where we used 7.16 to establish the second equivalence (note that the operator
𝑇∗𝑇−𝑇𝑇∗is self-adjoint).
The next result presents several consequences of the result above. Compare
(e) of the next result to Exercise 3. That exercise states that the eigenvalues of
the adjoint of each operator are equal (as a set) to the complex conjugates of
the eigenvalues of the operator. The exercise says nothing about eigenvectors,
because an operator and its adjoint may have different eigenvectors. However,
(e) of the next result implies that a normal operator and its adjoint have the same
eigenvectors.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7A
Self-Adjoint and Normal Operators
7.21
range, null space, and eigenvectors of a normal operator
Suppose 𝑇∈ℒ(𝑉) is normal. Then
(a) null 𝑇= null 𝑇∗;
(b) range 𝑇= range 𝑇∗;
(c) 𝑉= null 𝑇⊕range 𝑇;
(d) 𝑇−𝜆𝐼is normal for every 𝜆∈𝐅;
(e) if 𝑣∈𝑉and 𝜆∈𝐅, then 𝑇𝑣= 𝜆𝑣if and only if 𝑇∗𝑣= 𝜆𝑣.
Proof
(a) Suppose 𝑣∈𝑉. Then
𝑣∈null 𝑇⟺‖𝑇𝑣‖ = 0 ⟺∥𝑇∗𝑣∥= 0 ⟺𝑣∈null 𝑇∗,
where the middle equivalence above follows from 7.20. Thus null 𝑇= null 𝑇∗.
(b) We have
range 𝑇= (null 𝑇∗)⟂= (null 𝑇)⟂= range 𝑇∗,
where the first equality comes from 7.6(d), the second equality comes from
(a) in this result, and the third equality comes from 7.6(b).
(c) We have
𝑉= (null 𝑇) ⊕(null 𝑇)⟂= null 𝑇⊕range 𝑇∗= null 𝑇⊕range 𝑇,
where the first equality comes from 6.49, the second equality comes from
7.6(b), and the third equality comes from (b) in this result.
(d) Suppose 𝜆∈𝐅. Then
(𝑇−𝜆𝐼)(𝑇−𝜆𝐼)∗= (𝑇−𝜆𝐼)(𝑇∗−𝜆𝐼)
= 𝑇𝑇∗−𝜆𝑇−𝜆𝑇∗+ |𝜆|2𝐼
= 𝑇∗𝑇−𝜆𝑇−𝜆𝑇∗+ |𝜆|2𝐼
= (𝑇∗−𝜆𝐼)(𝑇−𝜆𝐼)
= (𝑇−𝜆𝐼)∗(𝑇−𝜆𝐼).
Thus 𝑇−𝜆𝐼commutes with its adjoint. Hence 𝑇−𝜆𝐼is normal.
(e) Suppose 𝑣∈𝑉and 𝜆∈𝐅. Then (d) and 7.20 imply that
‖(𝑇−𝜆𝐼)𝑣‖ = ∥(𝑇−𝜆𝐼)∗𝑣∥= ∥(𝑇∗−𝜆𝐼)𝑣∥.
Thus ‖(𝑇−𝜆𝐼)𝑣‖ = 0 if and only if ∥(𝑇∗−𝜆𝐼)𝑣∥= 0. Hence 𝑇𝑣= 𝜆𝑣if
and only if 𝑇∗𝑣= 𝜆𝑣.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Because every self-adjoint operator is normal, the next result applies in partic-
ular to self-adjoint operators.
7.22
orthogonal eigenvectors for normal operators
Suppose 𝑇∈ℒ(𝑉) is normal. Then eigenvectors of 𝑇corresponding to
distinct eigenvalues are orthogonal.
Proof
Suppose 𝛼, 𝛽are distinct eigenvalues of 𝑇, with corresponding eigen-
vectors 𝑢, 𝑣. Thus 𝑇𝑢= 𝛼𝑢and 𝑇𝑣= 𝛽𝑣. From 7.21(e) we have 𝑇∗𝑣= 𝛽𝑣.
Thus
(𝛼−𝛽)⟨𝑢, 𝑣⟩= ⟨𝛼𝑢, 𝑣⟩−⟨𝑢, 𝛽𝑣⟩
= ⟨𝑇𝑢, 𝑣⟩−⟨𝑢, 𝑇∗𝑣⟩
= 0.
Because 𝛼≠𝛽, the equation above implies that ⟨𝑢, 𝑣⟩= 0. Thus 𝑢and 𝑣are
orthogonal, as desired.
As stated here, the next result makes sense only when 𝐅= 𝐂. However, see
Exercise 12 for a version that makes sense when 𝐅= 𝐂and when 𝐅= 𝐑.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Under the analogy between ℒ(𝑉) and 𝐂,
with the adjoint on ℒ(𝑉) playing a similar role to that of the complex conjugate on
𝐂, the operators 𝐴and 𝐵as defined by 7.24 correspond to the real and imaginary
parts of 𝑇. Thus the informal title of the result below should make sense.
7.23
𝑇is normal ⟺the real and imaginary parts of 𝑇commute
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Then 𝑇is normal if and only if there exist
commuting self-adjoint operators 𝐴and 𝐵such that 𝑇= 𝐴+ 𝑖𝐵.
Proof
First suppose 𝑇is normal. Let
7.24
𝐴= 𝑇+ 𝑇∗
and
𝐵= 𝑇−𝑇∗
2𝑖
.
Then 𝐴and 𝐵are self-adjoint and 𝑇= 𝐴+ 𝑖𝐵. A quick computation shows that
7.25
𝐴𝐵−𝐵𝐴= 𝑇∗𝑇−𝑇𝑇∗
2𝑖
.
Because 𝑇is normal, the right side of the equation above equals 0. Thus the
operators 𝐴and 𝐵commute, as desired.
To prove the implication in the other direction, now suppose there exist com-
muting self-adjoint operators 𝐴and 𝐵such that 𝑇= 𝐴+ 𝑖𝐵. Then 𝑇∗= 𝐴−𝑖𝐵.
Adding the last two equations and then dividing by 2 produces the equation for 𝐴
in 7.24. Subtracting the last two equations and then dividing by 2𝑖produces the
equation for 𝐵in 7.24. Now 7.24 implies 7.25. Because 𝐵and 𝐴commute, 7.25
implies that 𝑇is normal, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7A
Self-Adjoint and Normal Operators
Exercises 7A
Suppose 𝑛is a positive integer. Define 𝑇∈ℒ(𝐅𝑛) by
𝑇(𝑧1, … , 𝑧𝑛) = (0, 𝑧1, … , 𝑧𝑛−1).
Find a formula for 𝑇∗(𝑧1, … , 𝑧𝑛).
Suppose 𝑇∈ℒ(𝑉, 𝑊). Prove that
𝑇= 0 ⟺𝑇∗= 0 ⟺𝑇∗𝑇= 0 ⟺𝑇𝑇∗= 0.
Suppose 𝑇∈ℒ(𝑉) and 𝜆∈𝐅. Prove that
𝜆is an eigenvalue of 𝑇⟺𝜆is an eigenvalue of 𝑇∗.
Suppose 𝑇∈ℒ(𝑉) and 𝑈is a subspace of 𝑉. Prove that
𝑈is invariant under 𝑇⟺𝑈⟂is invariant under 𝑇∗.
Suppose 𝑇∈ℒ(𝑉, 𝑊). Suppose 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉and
𝑓1, … , 𝑓𝑚is an orthonormal basis of 𝑊. Prove that
‖𝑇𝑒1‖2 + ⋯+ ‖𝑇𝑒𝑛‖2 = ∥𝑇∗𝑓1∥2 + ⋯+ ∥𝑇∗𝑓𝑚∥2.
The numbers ‖𝑇𝑒1‖2, … , ‖𝑇𝑒𝑛‖2 in the equation above depend on the ortho-
normal basis 𝑒1, … , 𝑒𝑛, but the right side of the equation does not depend
on 𝑒1, … , 𝑒𝑛. Thus the equation above shows that the sum on the left side
does not depend on which orthonormal basis 𝑒1, … , 𝑒𝑛is used.
Suppose 𝑇∈ℒ(𝑉, 𝑊). Prove that
(a) 𝑇is injective ⟺𝑇∗is surjective;
(b) 𝑇is surjective ⟺𝑇∗is injective.
Prove that if 𝑇∈ℒ(𝑉, 𝑊), then
(a) dim null 𝑇∗= dim null 𝑇+ dim 𝑊−dim 𝑉;
(b) dim range 𝑇∗= dim range 𝑇.
Suppose 𝐴is an 𝑚-by-𝑛matrix with entries in 𝐅. Use (b) in Exercise 7 to
prove that the row rank of 𝐴equals the column rank of 𝐴.
This exercise asks for yet another alternative proof of a result that was
previously proved in 3.57 and 3.133.
Prove that the product of two self-adjoint operators on 𝑉is self-adjoint if
and only if the two operators commute.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Prove that 𝑇is self-adjoint if and only if
⟨𝑇𝑣, 𝑣⟩= ⟨𝑇∗𝑣, 𝑣⟩
for all 𝑣∈𝑉.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Define an operator 𝑆∶𝐅2 →𝐅2 by 𝑆(𝑤, 𝑧) = (−𝑧, 𝑤).
(a) Find a formula for 𝑆∗.
(b) Show that 𝑆is normal but not self-adjoint.
(c) Find all eigenvalues of 𝑆.
If 𝐅= 𝐑, then 𝑆is the operator on 𝐑2 of counterclockwise rotation by 90∘.
An operator 𝐵∈ℒ(𝑉) is called skew if
𝐵∗= −𝐵.
Suppose that 𝑇∈ℒ(𝑉). Prove that 𝑇is normal if and only if there exist
commuting operators 𝐴and 𝐵such that 𝐴is self-adjoint, 𝐵is a skew operator,
and 𝑇= 𝐴+ 𝐵.
Suppose 𝐅= 𝐑. Define 𝒜∈ℒ(ℒ(𝑉)) by 𝒜𝑇= 𝑇∗for all 𝑇∈ℒ(𝑉).
(a) Find all eigenvalues of 𝒜.
(b) Find the minimal polynomial of 𝒜.
Define an inner product on 𝒫2(𝐑) by ⟨𝑝, 𝑞⟩= ∫1
0 𝑝𝑞. Define an operator
𝑇∈ℒ(𝒫2(𝐑)) by
𝑇(𝑎𝑥2 + 𝑏𝑥+ 𝑐) = 𝑏𝑥.
(a) Show that with this inner product, the operator 𝑇is not self-adjoint.
(b) The matrix of 𝑇with respect to the basis 1, 𝑥, 𝑥2 is
⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
.
This matrix equals its conjugate transpose, even though 𝑇is not self-
adjoint. Explain why this is not a contradiction.
Suppose 𝑇∈ℒ(𝑉) is invertible. Prove that
(a) 𝑇is self-adjoint ⟺𝑇−1 is self-adjoint;
(b) 𝑇is normal ⟺𝑇−1 is normal.
Suppose 𝐅= 𝐑.
(a) Show that the set of self-adjoint operators on 𝑉is a subspace of ℒ(𝑉).
(b) What is the dimension of the subspace of ℒ(𝑉) in (a) [in terms of
dim 𝑉]?
Suppose 𝐅= 𝐂. Show that the set of self-adjoint operators on 𝑉is not a
subspace of ℒ(𝑉).
Suppose dim 𝑉≥2. Show that the set of normal operators on 𝑉is not a
subspace of ℒ(𝑉).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7A
Self-Adjoint and Normal Operators
Suppose 𝑇∈ℒ(𝑉) and ∥𝑇∗𝑣∥≤‖𝑇𝑣‖ for every 𝑣∈𝑉. Prove that 𝑇is
normal.
This exercise fails on infinite-dimensional inner product spaces, leading to
what are called hyponormal operators, which have a well-developed theory.
Suppose 𝑃∈ℒ(𝑉) is such that 𝑃2 = 𝑃. Prove that the following are
equivalent.
(a) 𝑃is self-adjoint.
(b) 𝑃is normal.
(c) There is a subspace 𝑈of 𝑉such that 𝑃= 𝑃𝑈.
Suppose 𝐷∶𝒫8(𝐑) →𝒫8(𝐑) is the differentiation operator defined by
𝐷𝑝= 𝑝′. Prove that there does not exist an inner product on 𝒫8(𝐑) that
makes 𝐷a normal operator.
Give an example of an operator 𝑇∈ℒ(𝐑3) such that 𝑇is normal but not
self-adjoint.
Suppose 𝑇is a normal operator on 𝑉. Suppose also that 𝑣, 𝑤∈𝑉satisfy the
equations
‖𝑣‖ = ‖𝑤‖ = 2,
𝑇𝑣= 3𝑣,
𝑇𝑤= 4𝑤.
Show that ‖𝑇(𝑣+ 𝑤)‖ = 10.
Suppose 𝑇∈ℒ(𝑉) and
𝑎0 + 𝑎1𝑧+ 𝑎2𝑧2 + ⋯+ 𝑎𝑚−1𝑧𝑚−1 + 𝑧𝑚
is the minimal polynomial of 𝑇. Prove that the minimal polynomial of 𝑇∗is
𝑎0 + 𝑎1 𝑧+ 𝑎2 𝑧2 + ⋯+ 𝑎𝑚−1 𝑧𝑚−1 + 𝑧𝑚.
This exercise shows that the minimal polynomial of 𝑇∗equals the minimal
polynomial of 𝑇if 𝐅= 𝐑.
Suppose 𝑇∈ℒ(𝑉). Prove that 𝑇is diagonalizable if and only if 𝑇∗is
diagonalizable.
Fix 𝑢, 𝑥∈𝑉. Define 𝑇∈ℒ(𝑉) by 𝑇𝑣= ⟨𝑣, 𝑢⟩𝑥for every 𝑣∈𝑉.
(a) Prove that if 𝑉is a real vector space, then 𝑇is self-adjoint if and only if
the list 𝑢, 𝑥is linearly dependent.
(b) Prove that 𝑇is normal if and only if the list 𝑢, 𝑥is linearly dependent.
Suppose 𝑇∈ℒ(𝑉) is normal. Prove that
null 𝑇𝑘= null 𝑇
and
range 𝑇𝑘= range 𝑇
for every positive integer 𝑘.
Suppose 𝑇∈ℒ(𝑉) is normal. Prove that if 𝜆∈𝐅, then the minimal
polynomial of 𝑇is not a polynomial multiple of (𝑥−𝜆)2.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Prove or give a counterexample: If 𝑇∈ℒ(𝑉) and there is an orthonormal
basis 𝑒1, … , 𝑒𝑛of 𝑉such that ‖𝑇𝑒𝑘‖ = ∥𝑇∗𝑒𝑘∥for each 𝑘= 1, … , 𝑛, then 𝑇is
normal.
Suppose that 𝑇∈ℒ(𝐅3) is normal and 𝑇(1, 1, 1) = (2, 2, 2). Suppose
(𝑧1, 𝑧2, 𝑧3) ∈null 𝑇. Prove that 𝑧1 + 𝑧2 + 𝑧3 = 0.
Fix a positive integer 𝑛. In the inner product space of continuous real-valued
functions on [−𝜋, 𝜋] with inner product ⟨𝑓, 𝑔⟩= ∫𝜋
−𝜋𝑓𝑔, let
𝑉= span(1, cos 𝑥, cos 2𝑥, … , cos 𝑛𝑥, sin 𝑥, sin 2𝑥, … , sin 𝑛𝑥).
(a) Define 𝐷∈ℒ(𝑉) by 𝐷𝑓= 𝑓′. Show that 𝐷∗= −𝐷. Conclude that 𝐷
is normal but not self-adjoint.
(b) Define 𝑇∈ℒ(𝑉) by 𝑇𝑓= 𝑓″. Show that 𝑇is self-adjoint.
Suppose 𝑇∶𝑉→𝑊is a linear map. Show that under the standard identifica-
tion of 𝑉with 𝑉′ (see 6.58) and the corresponding identification of 𝑊with
𝑊′, the adjoint map 𝑇∗∶𝑊→𝑉corresponds to the dual map 𝑇′∶𝑊′ →𝑉′.
More precisely, show that
𝑇′(𝜑𝑤) = 𝜑𝑇∗𝑤
for all 𝑤∈𝑊, where 𝜑𝑤and 𝜑𝑇∗𝑤are defined as in 6.58.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7B
Spectral Theorem
7B Spectral Theorem
Recall that a diagonal matrix is a square matrix that is 0 everywhere except
possibly on the diagonal. Recall that an operator on 𝑉is called diagonalizable if
the operator has a diagonal matrix with respect to some basis of 𝑉. Recall also
that this happens if and only if there is a basis of 𝑉consisting of eigenvectors of
the operator (see 5.55).
The nicest operators on 𝑉are those for which there is an orthonormal basis
of 𝑉with respect to which the operator has a diagonal matrix. These are precisely
the operators 𝑇∈ℒ(𝑉) such that there is an orthonormal basis of 𝑉consisting
of eigenvectors of 𝑇. Our goal in this section is to prove the spectral theorem,
which characterizes these operators as the self-adjoint operators when 𝐅= 𝐑and
as the normal operators when 𝐅= 𝐂.
The spectral theorem is probably the most useful tool in the study of operators
on inner product spaces. Its extension to certain infinite-dimensional inner product
spaces (see, for example, Section 10D of the author’s book Measure, Integration
& Real Analysis) plays a key role in functional analysis.
Because the conclusion of the spectral theorem depends on 𝐅, we will break
the spectral theorem into two pieces, called the real spectral theorem and the
complex spectral theorem.
Real Spectral Theorem
To prove the real spectral theorem, we will need two preliminary results. These
preliminary results hold on both real and complex inner product spaces, but they
are not needed for the proof of the complex spectral theorem.
This completing-the-square technique
can be used to derive the quadratic
formula.
You could guess that the next result is
true and even discover its proof by think-
ing about quadratic polynomials with
real coefficients. Specifically, suppose
𝑏, 𝑐∈𝐑and 𝑏2 < 4𝑐. Let 𝑥be a real number. Then
𝑥2 + 𝑏𝑥+ 𝑐= (𝑥+ 𝑏
2)
+ (𝑐−𝑏2
4 ) > 0.
In particular, 𝑥2 + 𝑏𝑥+ 𝑐is an invertible real number (a convoluted way of saying
that it is not 0). Replacing the real number 𝑥with a self-adjoint operator (recall the
analogy between real numbers and self-adjoint operators) leads to the next result.
7.26
invertible quadratic expressions
Suppose 𝑇∈ℒ(𝑉) is self-adjoint and 𝑏, 𝑐∈𝐑are such that 𝑏2 < 4𝑐. Then
𝑇2 + 𝑏𝑇+ 𝑐𝐼
is an invertible operator.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Proof
Let 𝑣be a nonzero vector in 𝑉. Then
⟨(𝑇2 + 𝑏𝑇+ 𝑐𝐼)𝑣, 𝑣⟩= ⟨𝑇2𝑣, 𝑣⟩+ 𝑏⟨𝑇𝑣, 𝑣⟩+ 𝑐⟨𝑣, 𝑣⟩
= ⟨𝑇𝑣, 𝑇𝑣⟩+ 𝑏⟨𝑇𝑣, 𝑣⟩+ 𝑐‖𝑣‖2
≥‖𝑇𝑣‖2 −|𝑏| ‖𝑇𝑣‖ ‖𝑣‖ + 𝑐‖𝑣‖2
= (‖𝑇𝑣‖ −|𝑏| ‖𝑣‖
)
+ (𝑐−𝑏2
4 )‖𝑣‖2
> 0,
where the third line above holds by the Cauchy–Schwarz inequality (6.14). The
last inequality implies that (𝑇2 + 𝑏𝑇+ 𝑐𝐼)𝑣≠0. Thus 𝑇2 + 𝑏𝑇+ 𝑐𝐼is injective,
which implies that it is invertible (see 3.65).
The next result will be a key tool in our proof of the real spectral theorem.
7.27
minimal polynomial of self-adjoint operator
Suppose 𝑇∈ℒ(𝑉) is self-adjoint. Then the minimal polynomial of 𝑇equals
(𝑧−𝜆1) ⋯(𝑧−𝜆𝑚) for some 𝜆1, … , 𝜆𝑚∈𝐑.
Proof
First suppose 𝐅= 𝐂. The zeros of the minimal polynomial of 𝑇are the
eigenvalues of 𝑇[by 5.27(a)]. All eigenvalues of 𝑇are real (by 7.12). Thus the
second version of the fundamental theorem of algebra (see 4.13) tells us that the
minimal polynomial of 𝑇has the desired form.
Now suppose 𝐅= 𝐑. By the factorization of a polynomial over 𝐑(see 4.16)
there exist 𝜆1, … , 𝜆𝑚∈𝐑and 𝑏1, … , 𝑏𝑁, 𝑐1, … , 𝑐𝑁∈𝐑with 𝑏𝑘
2 < 4𝑐𝑘for each
𝑘such that the minimal polynomial of 𝑇equals
7.28
(𝑧−𝜆1) ⋯(𝑧−𝜆𝑚)(𝑧2 + 𝑏1𝑧+ 𝑐1) ⋯(𝑧2 + 𝑏𝑁𝑧+ 𝑐𝑁);
here either 𝑚or 𝑁might equal 0, meaning that there are no terms of the corre-
sponding form. Now
(𝑇−𝜆1𝐼) ⋯(𝑇−𝜆𝑚𝐼)(𝑇2 + 𝑏1𝑇+ 𝑐1𝐼) ⋯(𝑇2 + 𝑏𝑁𝑇+ 𝑐𝑁𝐼) = 0.
If 𝑁> 0, then we could multiply both sides of the equation above on the right
by the inverse of 𝑇2 + 𝑏𝑁𝑇+ 𝑐𝑁𝐼(which is an invertible operator by 7.26) to
obtain a polynomial expression of 𝑇that equals 0. The corresponding polynomial
would have degree two less than the degree of 7.28, violating the minimality of
the degree of the polynomial with this property. Thus we must have 𝑁= 0, which
means that the minimal polynomial in 7.28 has the form (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚), as
desired.
The result above along with 5.27(a) implies that every self-adjoint operator
has an eigenvalue. In fact, as we will see in the next result, self-adjoint operators
have enough eigenvectors to form a basis.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7B
Spectral Theorem
The next result, which gives a complete description of the self-adjoint operators
on a real inner product space, is one of the major theorems in linear algebra.
7.29
real spectral theorem
Suppose 𝐅= 𝐑and 𝑇∈ℒ(𝑉). Then the following are equivalent.
(a) 𝑇is self-adjoint.
(b) 𝑇has a diagonal matrix with respect to some orthonormal basis of 𝑉.
(c) 𝑉has an orthonormal basis consisting of eigenvectors of 𝑇.
Proof
First suppose (a) holds, so 𝑇is self-adjoint. Our results on minimal poly-
nomials, specifically 6.37 and 7.27, imply that 𝑇has an upper-triangular matrix
with respect to some orthonormal basis of 𝑉. With respect to this orthonormal
basis, the matrix of 𝑇∗is the transpose of the matrix of 𝑇. However, 𝑇∗= 𝑇.
Thus the transpose of the matrix of 𝑇equals the matrix of 𝑇. Because the matrix
of 𝑇is upper-triangular, this means that all entries of the matrix above and below
the diagonal are 0. Hence the matrix of 𝑇is a diagonal matrix with respect to the
orthonormal basis. Thus (a) implies (b).
Conversely, now suppose (b) holds, so 𝑇has a diagonal matrix with respect to
some orthonormal basis of 𝑉. That diagonal matrix equals its transpose. Thus
with respect to that basis, the matrix of 𝑇∗equals the matrix of 𝑇. Hence 𝑇∗= 𝑇,
proving that (b) implies (a).
The equivalence of (b) and (c) follows from the definitions [or see the proof
that (a) and (b) are equivalent in 5.55].
7.30
example: an orthonormal basis of eigenvectors for an operator
Consider the operator 𝑇on 𝐑3 whose matrix (with respect to the standard
basis) is
⎛⎜⎜⎜
⎝
−13
−13
−7
⎞⎟⎟⎟
⎠
.
This matrix with real entries equals its transpose; thus 𝑇is self-adjoint. As you
can verify,
(1, −1, 0)
√2
, (1, 1, 1)
√3
, (1, 1, −2)
√6
is an orthonormal basis of 𝐑3 consisting of eigenvectors of 𝑇. With respect to
this basis, the matrix of 𝑇is the diagonal matrix
⎛⎜⎜⎜
⎝
−15
⎞⎟⎟⎟
⎠
.
See Exercise 17 for a version of the real spectral theorem that applies simulta-
neously to more than one operator.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Complex Spectral Theorem
The next result gives a complete description of the normal operators on a complex
inner product space.
7.31
complex spectral theorem
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Then the following are equivalent.
(a) 𝑇is normal.
(b) 𝑇has a diagonal matrix with respect to some orthonormal basis of 𝑉.
(c) 𝑉has an orthonormal basis consisting of eigenvectors of 𝑇.
Proof
First suppose (a) holds, so 𝑇is normal. By Schur’s theorem (6.38), there
is an orthonormal basis 𝑒1, … , 𝑒𝑛of 𝑉with respect to which 𝑇has an upper-
triangular matrix. Thus we can write
7.32
ℳ(𝑇, (𝑒1, … , 𝑒𝑛)) = ⎛⎜⎜⎜
⎝
𝑎1,1
⋯
𝑎1,𝑛
⋱
⋮
𝑎𝑛,𝑛
⎞⎟⎟⎟
⎠
.
We will show that this matrix is actually a diagonal matrix.
We see from the matrix above that
‖𝑇𝑒1‖2 = |𝑎1,1|2,
∥𝑇∗𝑒1∥2 = |𝑎1,1|2 + |𝑎1,2|2 + ⋯+ |𝑎1,𝑛|2.
Because 𝑇is normal, ‖𝑇𝑒1‖ = ∥𝑇∗𝑒1∥(see 7.20). Thus the two equations above
imply that all entries in the first row of the matrix in 7.32, except possibly the first
entry 𝑎1,1, equal 0.
Now 7.32 implies
‖𝑇𝑒2‖2 = |𝑎2,2|2
(because 𝑎1,2 = 0, as we showed in the paragraph above) and
∥𝑇∗𝑒2∥2 = |𝑎2,2|2 + |𝑎2,3|2 + ⋯+ |𝑎2,𝑛|2.
Because 𝑇is normal, ‖𝑇𝑒2‖ = ∥𝑇∗𝑒2∥. Thus the two equations above imply that
all entries in the second row of the matrix in 7.32, except possibly the diagonal
entry 𝑎2,2, equal 0.
Continuing in this fashion, we see that all nondiagonal entries in the matrix
7.32 equal 0. Thus (b) holds, completing the proof that (a) implies (b).
Now suppose (b) holds, so 𝑇has a diagonal matrix with respect to some
orthonormal basis of 𝑉. The matrix of 𝑇∗(with respect to the same basis) is
obtained by taking the conjugate transpose of the matrix of 𝑇; hence 𝑇∗also has a
diagonal matrix. Any two diagonal matrices commute; thus 𝑇commutes with 𝑇∗,
which means that 𝑇is normal. In other words, (a) holds, completing the proof
that (b) implies (a).
The equivalence of (b) and (c) follows from the definitions (also see 5.55).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7B
Spectral Theorem
See Exercises 13 and 20 for alternative proofs that (a) implies (b) in the
previous result.
Exercises 14 and 15 interpret the real spectral theorem and the complex
spectral theorem by expressing the domain space as an orthogonal direct sum of
eigenspaces.
See Exercise 16 for a version of the complex spectral theorem that applies
simultaneously to more than one operator.
The main conclusion of the complex spectral theorem is that every normal
operator on a complex finite-dimensional inner product space is diagonalizable
by an orthonormal basis, as illustrated by the next example.
7.33
example: an orthonormal basis of eigenvectors for an operator
Consider the operator 𝑇∈ℒ(𝐂2) defined by 𝑇(𝑤, 𝑧) = (2𝑤−3𝑧, 3𝑤+ 2𝑧).
The matrix of 𝑇(with respect to the standard basis) is
( 2
−3
) .
As we saw in Example 7.19, 𝑇is a normal operator.
As you can verify,
√2(𝑖, 1),
√2(−𝑖, 1)
is an orthonormal basis of 𝐂2 consisting of eigenvectors of 𝑇, and with respect to
this basis the matrix of 𝑇is the diagonal matrix
( 2 + 3𝑖
2 −3𝑖) .
Exercises 7B
Prove that a normal operator on a complex inner product space is self-adjoint
if and only if all its eigenvalues are real.
This exercise strengthens the analogy (for normal operators) between self-
adjoint operators and real numbers.
Suppose 𝐅= 𝐂. Suppose 𝑇∈ℒ(𝑉) is normal and has only one eigenvalue.
Prove that 𝑇is a scalar multiple of the identity operator.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉) is normal. Prove that the set of eigenvalues
of 𝑇is contained in {0, 1} if and only if there is a subspace 𝑈of 𝑉such that
𝑇= 𝑃𝑈.
Prove that a normal operator on a complex inner product space is skew
(meaning it equals the negative of its adjoint) if and only if all its eigenvalues
are purely imaginary (meaning that they have real part equal to 0).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Prove or give a counterexample: If 𝑇∈ℒ(𝐂3) is a diagonalizable operator,
then 𝑇is normal (with respect to the usual inner product).
Suppose 𝑉is a complex inner product space and 𝑇∈ℒ(𝑉) is a normal
operator such that 𝑇9 = 𝑇8. Prove that 𝑇is self-adjoint and 𝑇2 = 𝑇.
Give an example of an operator 𝑇on a complex vector space such that
𝑇9 = 𝑇8 but 𝑇2 ≠𝑇.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Prove that 𝑇is normal if and only if every
eigenvector of 𝑇is also an eigenvector of 𝑇∗.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Prove that 𝑇is normal if and only if there
exists a polynomial 𝑝∈𝒫(𝐂) such that 𝑇∗= 𝑝(𝑇).
Suppose 𝑉is a complex inner product space. Prove that every normal
operator on 𝑉has a square root.
An operator 𝑆∈ℒ(𝑉) is called a square root of 𝑇∈ℒ(𝑉) if 𝑆2 = 𝑇. We
will discuss more about square roots of operators in Sections 7C and 8C.
Prove that every self-adjoint operator on 𝑉has a cube root.
An operator 𝑆∈ℒ(𝑉) is called a cube root of 𝑇∈ℒ(𝑉) if 𝑆3 = 𝑇.
Suppose 𝑉is a complex vector space and 𝑇∈ℒ(𝑉) is normal. Prove that
if 𝑆is an operator on 𝑉that commutes with 𝑇, then 𝑆commutes with 𝑇∗.
The result in this exercise is called Fuglede’s theorem.
Without using the complex spectral theorem, use the version of Schur’s
theorem that applies to two commuting operators (take ℰ= {𝑇, 𝑇∗} in
Exercise 20 in Section 6B) to give a different proof that if 𝐅= 𝐂and
𝑇∈ℒ(𝑉) is normal, then 𝑇has a diagonal matrix with respect to some
orthonormal basis of 𝑉.
Suppose 𝐅= 𝐑and 𝑇∈ℒ(𝑉). Prove that 𝑇is self-adjoint if and only
if all pairs of eigenvectors corresponding to distinct eigenvalues of 𝑇are
orthogonal and 𝑉= 𝐸(𝜆1, 𝑇) ⊕⋯⊕𝐸(𝜆𝑚, 𝑇), where 𝜆1, … , 𝜆𝑚denote the
distinct eigenvalues of 𝑇.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Prove that 𝑇is normal if and only if all pairs
of eigenvectors corresponding to distinct eigenvalues of 𝑇are orthogonal
and 𝑉= 𝐸(𝜆1, 𝑇) ⊕⋯⊕𝐸(𝜆𝑚, 𝑇), where 𝜆1, … , 𝜆𝑚denote the distinct
eigenvalues of 𝑇.
Suppose 𝐅= 𝐂and ℰ⊆ℒ(𝑉). Prove that there is an orthonormal basis
of 𝑉with respect to which every element of ℰhas a diagonal matrix if and
only if 𝑆and 𝑇are commuting normal operators for all 𝑆, 𝑇∈ℰ.
This exercise extends the complex spectral theorem to the context of a
collection of commuting normal operators.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7B
Spectral Theorem
Suppose 𝐅= 𝐑and ℰ⊆ℒ(𝑉). Prove that there is an orthonormal basis
of 𝑉with respect to which every element of ℰhas a diagonal matrix if and
only if 𝑆and 𝑇are commuting self-adjoint operators for all 𝑆, 𝑇∈ℰ.
This exercise extends the real spectral theorem to the context of a collection
of commuting self-adjoint operators.
Give an example of a real inner product space 𝑉, an operator 𝑇∈ℒ(𝑉),
and real numbers 𝑏, 𝑐with 𝑏2 < 4𝑐such that
𝑇2 + 𝑏𝑇+ 𝑐𝐼
is not invertible.
This exercise shows that the hypothesis that 𝑇is self-adjoint cannot be
deleted in 7.26, even for real vector spaces.
Suppose 𝑇∈ℒ(𝑉) is self-adjoint and 𝑈is a subspace of 𝑉that is invariant
under 𝑇.
(a) Prove that 𝑈⟂is invariant under 𝑇.
(b) Prove that 𝑇|𝑈∈ℒ(𝑈) is self-adjoint.
(c) Prove that 𝑇|𝑈⟂∈ℒ(𝑈⟂) is self-adjoint.
Suppose 𝑇∈ℒ(𝑉) is normal and 𝑈is a subspace of 𝑉that is invariant
under 𝑇.
(a) Prove that 𝑈⟂is invariant under 𝑇.
(b) Prove that 𝑈is invariant under 𝑇∗.
(c) Prove that (𝑇|𝑈)∗= (𝑇∗)|𝑈.
(d) Prove that 𝑇|𝑈∈ℒ(𝑈) and 𝑇|𝑈⟂∈ℒ(𝑈⟂) are normal operators.
This exercise can be used to give yet another proof of the complex spectral
theorem (use induction on dim 𝑉and the result that 𝑇has an eigenvector).
Suppose that 𝑇is a self-adjoint operator on a finite-dimensional inner product
space and that 2 and 3 are the only eigenvalues of 𝑇. Prove that
𝑇2 −5𝑇+ 6𝐼= 0.
Give an example of an operator 𝑇∈ℒ(𝐂3) such that 2 and 3 are the only
eigenvalues of 𝑇and 𝑇2 −5𝑇+ 6𝐼≠0.
Suppose 𝑇∈ℒ(𝑉) is self-adjoint, 𝜆∈𝐅, and 𝜖> 0. Suppose there exists
𝑣∈𝑉such that ‖𝑣‖ = 1 and
‖𝑇𝑣−𝜆𝑣‖ < 𝜖.
Prove that 𝑇has an eigenvalue 𝜆′ such that ∣𝜆−𝜆′∣< 𝜖.
This exercise shows that for a self-adjoint operator, a number that is close
to satisfying an equation that would make it an eigenvalue is close to an
eigenvalue.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Suppose 𝑈is a finite-dimensional vector space and 𝑇∈ℒ(𝑈).
(a) Suppose 𝐅= 𝐑. Prove that 𝑇is diagonalizable if and only if there is a
basis of 𝑈such that the matrix of 𝑇with respect to this basis equals its
transpose.
(b) Suppose 𝐅= 𝐂. Prove that 𝑇is diagonalizable if and only if there is a
basis of 𝑈such that the matrix of 𝑇with respect to this basis commutes
with its conjugate transpose.
This exercise adds another equivalence to the list of conditions equivalent
to diagonalizability in 5.55.
Suppose that 𝑇∈ℒ(𝑉) and there is an orthonormal basis 𝑒1, … , 𝑒𝑛of 𝑉
consisting of eigenvectors of 𝑇, with corresponding eigenvalues 𝜆1, … , 𝜆𝑛.
Show that if 𝑘∈{1, … , 𝑛}, then the pseudoinverse 𝑇† satisfies the equation
𝑇†𝑒𝑘=
⎧{
⎨{⎩
𝜆𝑘𝑒𝑘
if 𝜆𝑘≠0,
if 𝜆𝑘= 0.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7C
Positive Operators
7C Positive Operators
7.34
definition: positive operator
An operator 𝑇∈ℒ(𝑉) is called positive if 𝑇is self-adjoint and
⟨𝑇𝑣, 𝑣⟩≥0
for all 𝑣∈𝑉.
If 𝑉is a complex vector space, then the requirement that 𝑇be self-adjoint can
be dropped from the definition above (by 7.14).
7.35
example: positive operators
(a) Let 𝑇∈ℒ(𝐅2) be the operator whose matrix (using the standard basis) is
( 2 −1
−1 1 ). Then 𝑇is self-adjoint and ⟨𝑇(𝑤, 𝑧), (𝑤, 𝑧)⟩= 2|𝑤|2−2 Re(𝑤𝑧)+|𝑧|2
= |𝑤−𝑧|2 + |𝑤|2 ≥0 for all (𝑤, 𝑧) ∈𝐅2. Thus 𝑇is a positive operator.
(b) If 𝑈is a subspace of 𝑉, then the orthogonal projection 𝑃𝑈is a positive
operator, as you should verify.
(c) If 𝑇∈ℒ(𝑉) is self-adjoint and 𝑏, 𝑐∈𝐑are such that 𝑏2 < 4𝑐, then
𝑇2 + 𝑏𝑇+ 𝑐𝐼is a positive operator, as shown by the proof of 7.26.
7.36
definition: square root
An operator 𝑅is called a square root of an operator 𝑇if 𝑅2 = 𝑇.
7.37
example: square root of an operator
If 𝑇∈ℒ(𝐅3) is defined by 𝑇(𝑧1, 𝑧2, 𝑧3) = (𝑧3, 0, 0), then the operator
𝑅∈ℒ(𝐅3) defined by 𝑅(𝑧1, 𝑧2, 𝑧3) = (𝑧2, 𝑧3, 0) is a square root of 𝑇because
𝑅2 = 𝑇, as you can verify.
Because positive operators correspond
to nonnegative numbers, better termi-
nology would use the term nonnegative
operators. However, operator theorists
consistently call these positive opera-
tors, so we follow that custom. Some
mathematicians use the term positive
semidefinite operator, which means
the same as positive operator.
The characterizations of the positive
operators in the next result correspond
to characterizations of the nonnegative
numbers among 𝐂. Specifically, a num-
ber 𝑧∈𝐂is nonnegative if and only
if it has a nonnegative square root, cor-
responding to condition (d). Also, 𝑧is
nonnegative if and only if it has a real
square root, corresponding to condition
(e). Finally, 𝑧is nonnegative if and only
if there exists 𝑤∈𝐂such that 𝑧= 𝑤𝑤, corresponding to condition (f). See
Exercise 20 for another condition that is equivalent to being a positive operator.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
7.38
characterizations of positive operators
Let 𝑇∈ℒ(𝑉). Then the following are equivalent.
(a) 𝑇is a positive operator.
(b) 𝑇is self-adjoint and all eigenvalues of 𝑇are nonnegative.
(c) With respect to some orthonormal basis of 𝑉, the matrix of 𝑇is a diagonal
matrix with only nonnegative numbers on the diagonal.
(d) 𝑇has a positive square root.
(e) 𝑇has a self-adjoint square root.
(f) 𝑇= 𝑅∗𝑅for some 𝑅∈ℒ(𝑉).
Proof
We will prove that (a) ⇒(b) ⇒(c) ⇒(d) ⇒(e) ⇒(f) ⇒(a).
First suppose (a) holds, so that 𝑇is positive, which implies that 𝑇is self-adjoint
(by definition of positive operator). To prove the other condition in (b), suppose
𝜆is an eigenvalue of 𝑇. Let 𝑣be an eigenvector of 𝑇corresponding to 𝜆. Then
0 ≤⟨𝑇𝑣, 𝑣⟩= ⟨𝜆𝑣, 𝑣⟩= 𝜆⟨𝑣, 𝑣⟩.
Thus 𝜆is a nonnegative number. Hence (b) holds, showing that (a) implies (b).
Now suppose (b) holds, so that 𝑇is self-adjoint and all eigenvalues of 𝑇are
nonnegative. By the spectral theorem (7.29 and 7.31), there is an orthonormal
basis 𝑒1, … , 𝑒𝑛of 𝑉consisting of eigenvectors of 𝑇. Let 𝜆1, … , 𝜆𝑛be the eigen-
values of 𝑇corresponding to 𝑒1, … , 𝑒𝑛; thus each 𝜆𝑘is a nonnegative number.
The matrix of 𝑇with respect to 𝑒1, … , 𝑒𝑛is the diagonal matrix with 𝜆1, … , 𝜆𝑛
on the diagonal, which shows that (b) implies (c).
Now suppose (c) holds. Suppose 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉such
that the matrix of 𝑇with respect to this basis is a diagonal matrix with nonnegative
numbers 𝜆1, … , 𝜆𝑛on the diagonal. The linear map lemma (3.4) implies that
there exists 𝑅∈ℒ(𝑉) such that
𝑅𝑒𝑘= √𝜆𝑘𝑒𝑘
for each 𝑘= 1, … , 𝑛. As you should verify, 𝑅is a positive operator. Furthermore,
𝑅2𝑒𝑘= 𝜆𝑘𝑒𝑘= 𝑇𝑒𝑘for each 𝑘, which implies that 𝑅2 = 𝑇. Thus 𝑅is a positive
square root of 𝑇. Hence (d) holds, which shows that (c) implies (d).
Every positive operator is self-adjoint (by definition of positive operator).
Thus (d) implies (e).
Now suppose (e) holds, meaning that there exists a self-adjoint operator 𝑅on
𝑉such that 𝑇= 𝑅2. Then 𝑇= 𝑅∗𝑅(because 𝑅∗= 𝑅). Hence (e) implies (f).
Finally, suppose (f) holds. Let 𝑅∈ℒ(𝑉) be such that 𝑇= 𝑅∗𝑅. Then
𝑇∗= (𝑅∗𝑅)∗= 𝑅∗(𝑅∗)∗= 𝑅∗𝑅= 𝑇. Hence 𝑇is self-adjoint. To complete the
proof that (a) holds, note that
⟨𝑇𝑣, 𝑣⟩= ⟨𝑅∗𝑅𝑣, 𝑣⟩= ⟨𝑅𝑣, 𝑅𝑣⟩≥0
for every 𝑣∈𝑉. Thus 𝑇is positive, showing that (f) implies (a).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7C
Positive Operators
Every nonnegative number has a unique nonnegative square root. The next
result shows that positive operators enjoy a similar property.
7.39
each positive operator has only one positive square root
Every positive operator on 𝑉has a unique positive square root.
A positive operator can have infinitely
many square roots (although only one
of them can be positive). For example,
the identity operator on 𝑉has infinitely
many square roots if dim 𝑉> 1.
Proof
Suppose 𝑇∈ℒ(𝑉) is positive.
Suppose 𝑣∈𝑉is an eigenvector of 𝑇.
Hence there exists a real number 𝜆≥0
such that 𝑇𝑣= 𝜆𝑣.
Let 𝑅be a positive square root of 𝑇.
We will prove that 𝑅𝑣= √𝜆𝑣. This will
imply that the behavior of 𝑅on the eigenvectors of 𝑇is uniquely determined.
Because there is a basis of 𝑉consisting of eigenvectors of 𝑇(by the spectral
theorem), this will imply that 𝑅is uniquely determined.
To prove that 𝑅𝑣= √𝜆𝑣, note that the spectral theorem asserts that there is an
orthonormal basis 𝑒1, … , 𝑒𝑛of 𝑉consisting of eigenvectors of 𝑅. Because 𝑅is a
positive operator, all its eigenvalues are nonnegative. Thus there exist nonnegative
numbers 𝜆1, … , 𝜆𝑛such that 𝑅𝑒𝑘= √𝜆𝑘𝑒𝑘for each 𝑘= 1, … , 𝑛.
Because 𝑒1, … , 𝑒𝑛is a basis of 𝑉, we can write
𝑣= 𝑎1𝑒1 + ⋯+ 𝑎𝑛𝑒𝑛
for some numbers 𝑎1, … , 𝑎𝑛∈𝐅. Thus
𝑅𝑣= 𝑎1√𝜆1𝑒1 + ⋯+ 𝑎𝑛√𝜆𝑛𝑒𝑛.
Hence
𝜆𝑣= 𝑇𝑣= 𝑅2𝑣= 𝑎1𝜆1𝑒1 + ⋯+ 𝑎𝑛𝜆𝑛𝑒𝑛.
The equation above implies that
𝑎1𝜆𝑒1 + ⋯+ 𝑎𝑛𝜆𝑒𝑛= 𝑎1𝜆1𝑒1 + ⋯+ 𝑎𝑛𝜆𝑛𝑒𝑛.
Thus 𝑎𝑘(𝜆−𝜆𝑘) = 0 for each 𝑘= 1, … , 𝑛. Hence
𝑣=
∑
{𝑘∶𝜆𝑘=𝜆}
𝑎𝑘𝑒𝑘.
Thus
𝑅𝑣=
∑
{𝑘∶𝜆𝑘=𝜆}
𝑎𝑘√𝜆𝑒𝑘= √𝜆𝑣,
as desired.
The notation defined below makes sense thanks to the result above.
7.40
notation: √𝑇
For 𝑇a positive operator, √𝑇denotes the unique positiv
