# BCS301 — Module 5

## Graph Theory

**Subject:** BCS301 (Mathematics for Computer Science)
**Module:** Module 5
**Content type:** textbook_fallback
**Sources:** R1_Linear_Algebra_Done_Right_Axler.txt

---

e square root of 𝑇.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
7.41
example: square root of positive operators
Define operators 𝑆, 𝑇on 𝐑2 (with the usual Euclidean inner product) by
𝑆(𝑥, 𝑦) = (𝑥, 2𝑦)
and
𝑇(𝑥, 𝑦) = (𝑥+ 𝑦, 𝑥+ 𝑦).
Then with respect to the standard basis of 𝐑2 we have
7.42
ℳ(𝑆) = ( 1
2 )
and
ℳ(𝑇) = ( 1
1 ) .
Each of these matrices equals its transpose; thus 𝑆and 𝑇are self-adjoint.
If (𝑥, 𝑦) ∈𝐑2, then
⟨𝑆(𝑥, 𝑦), (𝑥, 𝑦)⟩= 𝑥2 + 2𝑦2 ≥0
and
⟨𝑇(𝑥, 𝑦), (𝑥, 𝑦)⟩= 𝑥2 + 2𝑥𝑦+ 𝑦2 = (𝑥+ 𝑦)2 ≥0.
Thus 𝑆and 𝑇are positive operators.
The standard basis of 𝐑2 is an orthonormal basis consisting of eigenvectors of
𝑆. Note that
( 1
√2,
√2), ( 1
√2, −1
√2)
is an orthonormal basis of eigenvectors of 𝑇, with eigenvalue 2 for the first
eigenvector and eigenvalue 0 for the second eigenvector. Thus √𝑇has the same
eigenvectors, with eigenvalues √2 and 0.
You can verify that
ℳ(√𝑆) = ⎛⎜
⎝
√2
⎞⎟
⎠
and
ℳ(√𝑇) =
⎛⎜⎜⎜⎜
⎝
√2
√2
√2
√2
⎞⎟⎟⎟⎟
⎠
with respect to the standard basis by showing that the squares of the matrices
above are the matrices in 7.42 and that each matrix above is the matrix of a positive
operator.
The statement of the next result does not involve a square root, but the clean
proof makes nice use of the square root of a positive operator.
7.43
𝑇positive and ⟨𝑇𝑣, 𝑣⟩= 0 ⟹𝑇𝑣= 0
Suppose 𝑇is a positive operator on 𝑉and 𝑣∈𝑉is such that ⟨𝑇𝑣, 𝑣⟩= 0.
Then 𝑇𝑣= 0.
Proof
We have
0 = ⟨𝑇𝑣, 𝑣⟩= ⟨√𝑇√𝑇𝑣, 𝑣⟩= ⟨√𝑇𝑣, √𝑇𝑣⟩= ∥√𝑇𝑣∥
2.
Hence √𝑇𝑣= 0. Thus 𝑇𝑣= √𝑇(√𝑇𝑣) = 0, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7C
Positive Operators
Exercises 7C
Suppose 𝑇∈ℒ(𝑉). Prove that if both 𝑇and −𝑇are positive operators,
then 𝑇= 0.
Suppose 𝑇∈ℒ(𝐅4) is the operator whose matrix (with respect to the
standard basis) is
⎛⎜⎜⎜⎜⎜⎜
⎝
−1
−1
−1
−1
−1
−1
⎞⎟⎟⎟⎟⎟⎟
⎠
.
Show that 𝑇is an invertible positive operator.
Suppose 𝑛is a positive integer and 𝑇∈ℒ(𝐅𝑛) is the operator whose matrix
(with respect to the standard basis) consists of all 1’s. Show that 𝑇is a
positive operator.
Suppose 𝑛is an integer with 𝑛> 1. Show that there exists an 𝑛-by-𝑛matrix
𝐴such that all of the entries of 𝐴are positive numbers and 𝐴= 𝐴∗, but the
operator on 𝐅𝑛whose matrix (with respect to the standard basis) equals 𝐴is
not a positive operator.
Suppose 𝑇∈ℒ(𝑉) is self-adjoint. Prove that 𝑇is a positive operator if and
only if for every orthonormal basis 𝑒1, … , 𝑒𝑛of 𝑉, all entries on the diagonal
of ℳ(𝑇, (𝑒1, … , 𝑒𝑛)) are nonnegative numbers.
Prove that the sum of two positive operators on 𝑉is a positive operator.
Suppose 𝑆∈ℒ(𝑉) is an invertible positive operator and 𝑇∈ℒ(𝑉) is a
positive operator. Prove that 𝑆+ 𝑇is invertible.
Suppose 𝑇∈ℒ(𝑉). Prove that 𝑇is a positive operator if and only if the
pseudoinverse 𝑇† is a positive operator.
Suppose 𝑇∈ℒ(𝑉) is a positive operator and 𝑆∈ℒ(𝑊, 𝑉). Prove that
𝑆∗𝑇𝑆is a positive operator on 𝑊.
Suppose 𝑇is a positive operator on 𝑉. Suppose 𝑣, 𝑤∈𝑉are such that
𝑇𝑣= 𝑤
and
𝑇𝑤= 𝑣.
Prove that 𝑣= 𝑤.
Suppose 𝑇is a positive operator on 𝑉and 𝑈is a subspace of 𝑉invariant
under 𝑇. Prove that 𝑇|𝑈∈ℒ(𝑈) is a positive operator on 𝑈.
Suppose 𝑇∈ℒ(𝑉) is a positive operator. Prove that 𝑇𝑘is a positive operator
for every positive integer 𝑘.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Suppose 𝑇∈ℒ(𝑉) is self-adjoint and 𝛼∈𝐑.
(a) Prove that 𝑇−𝛼𝐼is a positive operator if and only if 𝛼is less than or
equal to every eigenvalue of 𝑇.
(b) Prove that 𝛼𝐼−𝑇is a positive operator if and only if 𝛼is greater than or
equal to every eigenvalue of 𝑇.
Suppose 𝑇is a positive operator on 𝑉and 𝑣1, … , 𝑣𝑚∈𝑉. Prove that
𝑚
∑
𝑗= 1
𝑚
∑
𝑘=1
⟨𝑇𝑣𝑘, 𝑣𝑗⟩≥0.
Suppose 𝑇∈ℒ(𝑉) is self-adjoint. Prove that there exist positive operators
𝐴, 𝐵∈ℒ(𝑉) such that
𝑇= 𝐴−𝐵
and
√𝑇∗𝑇= 𝐴+ 𝐵
and
𝐴𝐵= 𝐵𝐴= 0.
Suppose 𝑇is a positive operator on 𝑉. Prove that
null √𝑇= null 𝑇
and
range √𝑇= range 𝑇.
Suppose that 𝑇∈ℒ(𝑉) is a positive operator. Prove that there exists a
polynomial 𝑝with real coefficients such that √𝑇= 𝑝(𝑇).
Suppose 𝑆and 𝑇are positive operators on 𝑉. Prove that 𝑆𝑇is a positive
operator if and only if 𝑆and 𝑇commute.
Show that the identity operator on 𝐅2 has infinitely many self-adjoint square
roots.
Suppose 𝑇∈ℒ(𝑉) and 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉. Prove that
𝑇is a positive operator if and only if there exist 𝑣1, … , 𝑣𝑛∈𝑉such that
⟨𝑇𝑒𝑘, 𝑒𝑗⟩= ⟨𝑣𝑘, 𝑣𝑗⟩
for all 𝑗, 𝑘= 1, … , 𝑛.
The numbers {⟨𝑇𝑒𝑘, 𝑒𝑗⟩}𝑗, 𝑘=1,…,𝑛are the entries in the matrix of 𝑇with
respect to the orthonormal basis 𝑒1, … , 𝑒𝑛.
Suppose 𝑛is a positive integer. The 𝑛-by-𝑛Hilbert matrix is the 𝑛-by-𝑛
matrix whose entry in row 𝑗, column 𝑘is
𝑗+𝑘−1. Suppose 𝑇∈ℒ(𝑉) is an
operator whose matrix with respect to some orthonormal basis of 𝑉is the
𝑛-by-𝑛Hilbert matrix. Prove that 𝑇is a positive invertible operator.
Example: The 4-by-4 Hilbert matrix is
⎛⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜
⎝
⎞⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟
⎠
.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7C
Positive Operators
Suppose 𝑇∈ℒ(𝑉) is a positive operator and 𝑢∈𝑉is such that ‖𝑢‖ = 1
and ‖𝑇𝑢‖ ≥‖𝑇𝑣‖ for all 𝑣∈𝑉with ‖𝑣‖ = 1. Show that 𝑢is an eigenvector
of 𝑇corresponding to the largest eigenvalue of 𝑇.
For 𝑇∈ℒ(𝑉) and 𝑢, 𝑣∈𝑉, define ⟨𝑢, 𝑣⟩𝑇by ⟨𝑢, 𝑣⟩𝑇= ⟨𝑇𝑢, 𝑣⟩.
(a) Suppose 𝑇∈ℒ(𝑉). Prove that ⟨⋅, ⋅⟩𝑇is an inner product on 𝑉if and
only if 𝑇is an invertible positive operator (with respect to the original
inner product ⟨⋅, ⋅⟩).
(b) Prove that every inner product on 𝑉is of the form ⟨⋅, ⋅⟩𝑇for some
positive invertible operator 𝑇∈ℒ(𝑉).
Suppose 𝑆and 𝑇are positive operators on 𝑉. Prove that
null(𝑆+ 𝑇) = null 𝑆∩null 𝑇.
Let 𝑇be the second derivative operator in Exercise 31(b) in Section 7A.
Show that −𝑇is a positive operator.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
7D Isometries, Unitary Operators, and Matrix Factorization
Isometries
Linear maps that preserve norms are sufficiently important to deserve a name.
7.44
definition: isometry
A linear map 𝑆∈ℒ(𝑉, 𝑊) is called an isometry if
‖𝑆𝑣‖ = ‖𝑣‖
for every 𝑣∈𝑉. In other words, a linear map is an isometry if it preserves
norms.
The Greek word isos means equal; the
Greek word metron means measure.
Thus isometry literally means equal
measure.
If 𝑆∈ℒ(𝑉, 𝑊) is an isometry and
𝑣∈𝑉is such that 𝑆𝑣= 0, then
‖𝑣‖ = ‖𝑆𝑣‖ = ‖0‖ = 0,
which implies that 𝑣= 0. Thus every
isometry is injective.
7.45
example: orthonormal basis maps to orthonormal list ⟹isometry
Suppose 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉and 𝑔1, … , 𝑔𝑛is an orthonormal
list in 𝑊. Let 𝑆∈ℒ(𝑉, 𝑊) be the linear map such that 𝑆𝑒𝑘= 𝑔𝑘for each
𝑘= 1, … , 𝑛. To show that 𝑆is an isometry, suppose 𝑣∈𝑉. Then
7.46
𝑣= ⟨𝑣, 𝑒1⟩𝑒1 + ⋯+ ⟨𝑣, 𝑒𝑛⟩𝑒𝑛
and
7.47
‖𝑣‖2 = ∣⟨𝑣, 𝑒1⟩∣2 + ⋯+ ∣⟨𝑣, 𝑒𝑛⟩∣2,
where we have used 6.30(b). Applying 𝑆to both sides of 7.46 gives
𝑆𝑣= ⟨𝑣, 𝑒1⟩𝑆𝑒1 + ⋯+ ⟨𝑣, 𝑒𝑛⟩𝑆𝑒𝑛= ⟨𝑣, 𝑒1⟩𝑔1 + ⋯+ ⟨𝑣, 𝑒𝑛⟩𝑔𝑛.
Thus
7.48
‖𝑆𝑣‖2 = ∣⟨𝑣, 𝑒1⟩∣2 + ⋯+ |⟨𝑣, 𝑒𝑛⟩|2.
Comparing 7.47 and 7.48 shows that ‖𝑣‖ = ‖𝑆𝑣‖. Thus 𝑆is an isometry.
The next result gives conditions equivalent to being an isometry. The equiv-
alence of (a) and (c) shows that a linear map is an isometry if and only if it
preserves inner products. The equivalence of (a) and (d) shows that a linear map
is an isometry if and only if it maps some orthonormal basis to an orthonormal list.
Thus the isometries given by Example 7.45 include all isometries. Furthermore,
a linear map is an isometry if and only if it maps every orthonormal basis to an
orthonormal list [because whether or not (a) holds does not depend on the basis
𝑒1, … , 𝑒𝑛].
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7D
Isometries, Unitary Operators, and Matrix Factorization
The equivalence of (a) and (e) in the next result shows that a linear map is an
isometry if and only if the columns of its matrix (with respect to any orthonormal
bases) form an orthonormal list. Here we are identifying the columns of an 𝑚-by-𝑛
matrix with elements of 𝐅𝑚and then using the Euclidean inner product on 𝐅𝑚.
7.49
characterizations of isometries
Suppose 𝑆∈ℒ(𝑉, 𝑊). Suppose 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉and
𝑓1, … , 𝑓𝑚is an orthonormal basis of 𝑊. Then the following are equivalent.
(a) 𝑆is an isometry.
(b) 𝑆∗𝑆= 𝐼.
(c) ⟨𝑆𝑢, 𝑆𝑣⟩= ⟨𝑢, 𝑣⟩for all 𝑢, 𝑣∈𝑉.
(d) 𝑆𝑒1, … , 𝑆𝑒𝑛is an orthonormal list in 𝑊.
(e) The columns of ℳ(𝑆, (𝑒1, … , 𝑒𝑛), ( 𝑓1, … , 𝑓𝑚)) form an orthonormal list
in 𝐅𝑚with respect to the Euclidean inner product.
Proof
First suppose (a) holds, so 𝑆is an isometry. If 𝑣∈𝑉then
⟨(𝐼−𝑆∗𝑆)𝑣, 𝑣⟩= ⟨𝑣, 𝑣⟩−⟨𝑆∗𝑆𝑣, 𝑣⟩= ‖𝑣‖2 −⟨𝑆𝑣, 𝑆𝑣⟩= ‖𝑣‖2 −‖𝑆𝑣‖2 = 0.
Hence the self-adjoint operator 𝐼−𝑆∗𝑆equals 0 (by 7.16). Thus 𝑆∗𝑆= 𝐼, proving
that (a) implies (b).
Now suppose (b) holds, so 𝑆∗𝑆= 𝐼. If 𝑢, 𝑣∈𝑉then
⟨𝑆𝑢, 𝑆𝑣⟩= ⟨𝑆∗𝑆𝑢, 𝑣⟩= ⟨𝐼𝑢, 𝑣⟩= ⟨𝑢, 𝑣⟩,
proving that (b) implies (c).
Now suppose that (c) holds, so ⟨𝑆𝑢, 𝑆𝑣⟩= ⟨𝑢, 𝑣⟩for all 𝑢, 𝑣∈𝑉. Thus if
𝑗, 𝑘∈{1, … , 𝑛}, then
⟨𝑆𝑒𝑗, 𝑆𝑒𝑘⟩= ⟨𝑒𝑗, 𝑒𝑘⟩.
Hence 𝑆𝑒1, … , 𝑆𝑒𝑛is an orthonormal list in 𝑊, proving that (c) implies (d).
Now suppose that (d) holds, so 𝑆𝑒1, … , 𝑆𝑒𝑛is an orthonormal list in 𝑊. Let
𝐴= ℳ(𝑆, (𝑒1, … , 𝑒𝑛), ( 𝑓1, … , 𝑓𝑚)). If 𝑘, 𝑟∈{1, … , 𝑛}, then
7.50
𝑚
∑
𝑗=1
𝐴𝑗,𝑘𝐴𝑗,𝑟= ⟨
𝑚
∑
𝑗=1
𝐴𝑗,𝑘𝑓𝑗,
𝑚
∑
𝑗=1
𝐴𝑗,𝑟𝑓𝑗⟩= ⟨𝑆𝑒𝑘, 𝑆𝑒𝑟⟩=
⎧{
⎨{⎩
if 𝑘= 𝑟,
if 𝑘≠𝑟.
The left side of 7.50 is the inner product in 𝐅𝑚of columns 𝑘and 𝑟of 𝐴. Thus the
columns of 𝐴form an orthonormal list in 𝐅𝑚, proving that (d) implies (e).
Now suppose (e) holds, so the columns of the matrix 𝐴defined in the paragraph
above form an orthonormal list in 𝐅𝑚. Then 7.50 shows that 𝑆𝑒1, … , 𝑆𝑒𝑛is an
orthonormal list in 𝑊. Thus Example 7.45, with 𝑆𝑒1, … , 𝑆𝑒𝑛playing the role of
𝑔1, … , 𝑔𝑛, shows that 𝑆is an isometry, proving that (e) implies (a).
See Exercises 1 and 11 for additional conditions that are equivalent to being
an isometry.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Unitary Operators
In this subsection, we confine our attention to linear maps from a vector space to
itself. In other words, we will be working with operators.
7.51
definition: unitary operator
An operator 𝑆∈ℒ(𝑉) is called unitary if 𝑆is an invertible isometry.
Although the words “unitary” and
“isometry” mean the same thing for
operators on finite-dimensional inner
product spaces, remember that a uni-
tary operator maps a vector space to
itself, while an isometry maps a vector
space to another (possibly different)
vector space.
As previously noted, every isometry
is injective. Every injective operator on
a finite-dimensional vector space is in-
vertible (see 3.65). A standing assump-
tion for this chapter is that 𝑉is a finite-
dimensional inner product space. Thus
we could delete the word “invertible”
from the definition above without chang-
ing the meaning. The unnecessary word
“invertible” has been retained in the definition above for consistency with the
definition readers may encounter when learning about inner product spaces that
are not necessarily finite-dimensional.
7.52
example: rotation of 𝐑2
Suppose 𝜃∈𝐑and 𝑆is the operator on 𝐅2 whose matrix with respect to the
standard basis of 𝐅2 is
( cos 𝜃
−sin 𝜃
sin 𝜃
cos 𝜃
) .
The two columns of this matrix form an orthonormal list in 𝐅2; hence 𝑆is an
isometry [by the equivalence of (a) and (e) in 7.49]. Thus 𝑆is a unitary operator.
If 𝐅= 𝐑, then 𝑆is the operator of counterclockwise rotation by 𝜃radians
around the origin of 𝐑2. This observation gives us another way to think about why
𝑆is an isometry, because each rotation around the origin of 𝐑2 preserves norms.
The next result (7.53) lists several conditions that are equivalent to being a
unitary operator. All the conditions equivalent to being an isometry in 7.49 should
be added to this list. The extra conditions in 7.53 arise because of limiting the
context to linear maps from a vector space to itself. For example, 7.49 shows that
a linear map 𝑆∈ℒ(𝑉, 𝑊) is an isometry if and only if 𝑆∗𝑆= 𝐼, while 7.53 shows
that an operator 𝑆∈ℒ(𝑉) is a unitary operator if and only if 𝑆∗𝑆= 𝑆𝑆∗= 𝐼.
Another difference is that 7.49(d) mentions an orthonormal list, while 7.53(d)
mentions an orthonormal basis. Also, 7.49(e) mentions the columns of ℳ(𝑇),
while 7.53(e) mentions the rows of ℳ(𝑇). Furthermore, ℳ(𝑇) in 7.49(e) is with
respect to an orthonormal basis of 𝑉and an orthonormal basis of 𝑊, while ℳ(𝑇)
in 7.53(e) is with respect to a single basis of 𝑉doing double duty.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7D
Isometries, Unitary Operators, and Matrix Factorization
7.53
characterizations of unitary operators
Suppose 𝑆∈ℒ(𝑉). Suppose 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉. Then
the following are equivalent.
(a) 𝑆is a unitary operator.
(b) 𝑆∗𝑆= 𝑆𝑆∗= 𝐼.
(c) 𝑆is invertible and 𝑆−1 = 𝑆∗.
(d) 𝑆𝑒1, … , 𝑆𝑒𝑛is an orthonormal basis of 𝑉.
(e) The rows of ℳ(𝑆, (𝑒1, … , 𝑒𝑛)) form an orthonormal basis of 𝐅𝑛with
respect to the Euclidean inner product.
(f) 𝑆∗is a unitary operator.
Proof
First suppose (a) holds, so 𝑆is a unitary operator. Hence
𝑆∗𝑆= 𝐼
by the equivalence of (a) and (b) in 7.49. Multiply both sides of this equation by
𝑆−1 on the right, getting 𝑆∗= 𝑆−1. Thus 𝑆𝑆∗= 𝑆𝑆−1 = 𝐼, as desired, proving
that (a) implies (b).
The definitions of invertible and inverse show that (b) implies (c).
Now suppose (c) holds, so 𝑆is invertible and 𝑆−1 = 𝑆∗. Thus 𝑆∗𝑆= 𝐼. Hence
𝑆𝑒1, … , 𝑆𝑒𝑛is an orthonormal list in 𝑉, by the equivalence of (b) and (d) in 7.49.
The length of this list equals dim 𝑉. Thus 𝑆𝑒1, … , 𝑆𝑒𝑛is an orthonormal basis
of 𝑉, proving that (c) implies (d).
Now suppose (d) holds, so 𝑆𝑒1, … , 𝑆𝑒𝑛is an orthonormal basis of 𝑉. The
equivalence of (a) and (d) in 7.49 shows that 𝑆is a unitary operator. Thus
(𝑆∗)∗𝑆∗= 𝑆𝑆∗= 𝐼,
where the last equation holds because we already showed that (a) implies (b) in this
result. The equation above and the equivalence of (a) and (b) in 7.49 show that 𝑆∗
is an isometry. Thus the columns of ℳ(𝑆∗, (𝑒1, … , 𝑒𝑛)) form an orthonormal basis
of 𝐅𝑛[by the equivalence of (a) and (e) of 7.49]. The rows of ℳ(𝑆, (𝑒1, … , 𝑒𝑛))
are the complex conjugates of the columns of ℳ(𝑆∗, (𝑒1, … , 𝑒𝑛)). Thus the rows
of ℳ(𝑆, (𝑒1, … , 𝑒𝑛)) form an orthonormal basis of 𝐅𝑛, proving that (d) implies (e).
Now suppose (e) holds. Thus the columns of ℳ(𝑆∗, (𝑒1, … , 𝑒𝑛)) form an
orthonormal basis of 𝐅𝑛. The equivalence of (a) and (e) in 7.49 shows that 𝑆∗is
an isometry, proving that (e) implies (f).
Now suppose (f) holds, so 𝑆∗is a unitary operator. The chain of implications
we have already proved in this result shows that (a) implies (f). Applying this
result to 𝑆∗shows that (𝑆∗)∗is a unitary operator, proving that (f) implies (a).
We have shown that (a) ⇒(b) ⇒(c) ⇒(d) ⇒(e) ⇒(f) ⇒(a), completing the
proof.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Recall our analogy between 𝐂and ℒ(𝑉). Under this analogy, a complex
number 𝑧corresponds to an operator 𝑆∈ℒ(𝑉), and 𝑧corresponds to 𝑆∗. The
real numbers (𝑧= 𝑧) correspond to the self-adjoint operators (𝑆= 𝑆∗), and the
nonnegative numbers correspond to the (badly named) positive operators.
Another distinguished subset of 𝐂is the unit circle, which consists of the
complex numbers 𝑧such that |𝑧| = 1. The condition |𝑧| = 1 is equivalent to the
condition 𝑧𝑧= 1. Under our analogy, this corresponds to the condition 𝑆∗𝑆= 𝐼,
which is equivalent to 𝑆being a unitary operator. Hence the analogy shows that
the unit circle in 𝐂corresponds to the set of unitary operators. In the next two
results, this analogy appears in the eigenvalues of unitary operators. Also see
Exercise 15 for another example of this analogy.
7.54
eigenvalues of unitary operators have absolute value 1
Suppose 𝜆is an eigenvalue of a unitary operator. Then |𝜆| = 1.
Proof
Suppose 𝑆∈ℒ(𝑉) is a unitary operator and 𝜆is an eigenvalue of 𝑆. Let
𝑣∈𝑉be such that 𝑣≠0 and 𝑆𝑣= 𝜆𝑣. Then
|𝜆| ‖𝑣‖ = ‖𝜆𝑣‖ = ‖𝑆𝑣‖ = ‖𝑣‖.
Thus |𝜆| = 1, as desired.
The next result characterizes unitary operators on finite-dimensional complex
inner product spaces, using the complex spectral theorem as the main tool.
7.55
description of unitary operators on complex inner product spaces
Suppose 𝐅= 𝐂and 𝑆∈ℒ(𝑉). Then the following are equivalent.
(a) 𝑆is a unitary operator.
(b) There is an orthonormal basis of 𝑉consisting of eigenvectors of 𝑆whose
corresponding eigenvalues all have absolute value 1.
Proof
Suppose (a) holds, so 𝑆is a unitary operator. The equivalence of (a) and
(b) in 7.53 shows that 𝑆is normal. Thus the complex spectral theorem (7.31)
shows that there is an orthonormal basis 𝑒1, … , 𝑒𝑛of 𝑉consisting of eigenvectors
of 𝑆. Every eigenvalue of 𝑆has absolute value 1 (by 7.54), completing the proof
that (a) implies (b).
Now suppose (b) holds. Let 𝑒1, … , 𝑒𝑛be an orthonormal basis of 𝑉consisting
of eigenvectors of 𝑆whose corresponding eigenvalues 𝜆1, … , 𝜆𝑛all have absolute
value 1. Then 𝑆𝑒1, … , 𝑆𝑒𝑛is also an orthonormal basis of 𝑉because
⟨𝑆𝑒𝑗, 𝑆𝑒𝑘⟩= ⟨𝜆𝑗𝑒𝑗, 𝜆𝑘𝑒𝑘⟩= 𝜆𝑗𝜆𝑘⟨𝑒𝑗, 𝑒𝑘⟩=
⎧{
⎨{⎩
if 𝑗≠𝑘,
if 𝑗= 𝑘
for all 𝑗, 𝑘= 1, … , 𝑛. Thus the equivalence of (a) and (d) in 7.53 shows that 𝑆is
unitary, proving that (b) implies (a).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7D
Isometries, Unitary Operators, and Matrix Factorization
QR Factorization
In this subsection, we shift our attention from operators to matrices. This switch
should give you good practice in identifying an operator with a square matrix
(after picking a basis of the vector space on which the operator is defined). You
should also become more comfortable with translating concepts and results back
and forth between the context of operators and the context of square matrices.
When starting with 𝑛-by-𝑛matrices instead of operators, unless otherwise
specified assume that the associated operators live on 𝐅𝑛(with the Euclidean inner
product) and that their matrices are computed with respect to the standard basis
of 𝐅𝑛.
We begin by making the following definition, transferring the notion of a
unitary operator to a unitary matrix.
7.56
definition: unitary matrix
An 𝑛-by-𝑛matrix is called unitary if its columns form an orthonormal list
in 𝐅𝑛.
In the definition above, we could have replaced “orthonormal list in 𝐅𝑛” with
“orthonormal basis of 𝐅𝑛” because every orthonormal list of length 𝑛in an 𝑛-
dimensional inner product space is an orthonormal basis. If 𝑆∈ℒ(𝑉) and
𝑒1, … , 𝑒𝑛and 𝑓1, … , 𝑓𝑛are orthonormal bases of 𝑉, then 𝑆is a unitary operator
if and only if ℳ(𝑆, (𝑒1, … , 𝑒𝑛), ( 𝑓1, … , 𝑓𝑛)) is a unitary matrix, as shown by the
equivalence of (a) and (e) in 7.49. Also note that we could also have replaced
“columns” in the definition above with “rows” by using the equivalence between
conditions (a) and (e) in 7.53.
The next result, whose proof will be left as an exercise for the reader, gives
some equivalent conditions for a square matrix to be unitary. In (c), 𝑄𝑣denotes
the matrix product of 𝑄and 𝑣, identifying elements of 𝐅𝑛with 𝑛-by-1 matrices
(sometimes called column vectors). The norm in (c) below is the usual Euclidean
norm on 𝐅𝑛that comes from the Euclidean inner product. In (d), 𝑄∗denotes
the conjugate transpose of the matrix 𝑄, which corresponds to the adjoint of the
associated operator.
7.57
characterizations of unitary matrices
Suppose 𝑄is an 𝑛-by-𝑛matrix. Then the following are equivalent.
(a) 𝑄is a unitary matrix.
(b) The rows of 𝑄form an orthonormal list in 𝐅𝑛.
(c) ‖𝑄𝑣‖ = ‖𝑣‖ for every 𝑣∈𝐅𝑛.
(d) 𝑄∗𝑄= 𝑄𝑄∗= 𝐼, the 𝑛-by-𝑛matrix with 1’s on the diagonal and 0’s
elsewhere.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
The QR factorization stated and proved below is the main tool in the widely
used QR algorithm (not discussed here) for finding good approximations to
eigenvalues and eigenvectors of square matrices. In the result below, if the matrix
𝐴is in 𝐅𝑛,𝑛, then the matrices 𝑄and 𝑅are also in 𝐅𝑛,𝑛.
7.58
QR factorization
Suppose 𝐴is a square matrix with linearly independent columns. Then there
exist unique matrices 𝑄and 𝑅such that 𝑄is unitary, 𝑅is upper triangular
with only positive numbers on its diagonal, and
𝐴= 𝑄𝑅.
Proof
Let 𝑣1, … , 𝑣𝑛denote the columns of 𝐴, thought of as elements of 𝐅𝑛. Apply
the Gram–Schmidt procedure (6.32) to the list 𝑣1, … , 𝑣𝑛, getting an orthonormal
basis 𝑒1, … , 𝑒𝑛of 𝐅𝑛such that
7.59
span(𝑣1, … , 𝑣𝑘) = span(𝑒1, … , 𝑒𝑘)
for each 𝑘= 1, … , 𝑛. Let 𝑅be the 𝑛-by-𝑛matrix defined by
𝑅𝑗,𝑘= ⟨𝑣𝑘, 𝑒𝑗⟩,
where 𝑅𝑗,𝑘denotes the entry in row 𝑗, column 𝑘of 𝑅. If 𝑗> 𝑘, then 𝑒𝑗is orthogonal
to span(𝑒1, … , 𝑒𝑘) and hence 𝑒𝑗is orthogonal to 𝑣𝑘(by 7.59). In other words, if
𝑗> 𝑘then ⟨𝑣𝑘, 𝑒𝑗⟩= 0. Thus 𝑅is an upper-triangular matrix.
Let 𝑄be the unitary matrix whose columns are 𝑒1, … , 𝑒𝑛. If 𝑘∈{1, … , 𝑛},
then the 𝑘th column of 𝑄𝑅equals a linear combination of the columns of 𝑄, with
the coefficients for the linear combination coming from the 𝑘th column of 𝑅—see
3.51(a). Hence the 𝑘th column of 𝑄𝑅equals
⟨𝑣𝑘, 𝑒1⟩𝑒1 + ⋯+ ⟨𝑣𝑘, 𝑒𝑘⟩𝑒𝑘,
which equals 𝑣𝑘[by 6.30(a)], the 𝑘th column of 𝐴. Thus 𝐴= 𝑄𝑅, as desired.
The equations defining the Gram–Schmidt procedure (see 6.32) show that
each 𝑣𝑘equals a positive multiple of 𝑒𝑘plus a linear combination of 𝑒1, … , 𝑒𝑘−1.
Thus each ⟨𝑣𝑘, 𝑒𝑘⟩is a positive number. Hence all entries on the diagonal of 𝑅are
positive numbers, as desired.
Finally, to show that 𝑄and 𝑅are unique, suppose we also have 𝐴=̂ 𝑄̂ 𝑅, wherê
𝑄is unitary and̂ 𝑅is upper triangular with only positive numbers on its diagonal.
Let 𝑞1, … , 𝑞𝑛denote the columns of̂ 𝑄. Thinking of matrix multiplication as above,
we see that each 𝑣𝑘is a linear combination of 𝑞1, … , 𝑞𝑘, with the coefficients com-
ing from the 𝑘th column of̂ 𝑅. This implies that span(𝑣1, … , 𝑣𝑘) = span(𝑞1, … , 𝑞𝑘)
and ⟨𝑣𝑘, 𝑞𝑘⟩> 0. The uniqueness of the orthonormal lists satisfying these condi-
tions (see Exercise 10 in Section 6B) now shows that 𝑞𝑘= 𝑒𝑘for each 𝑘= 1, … , 𝑛.
Hencê 𝑄= 𝑄, which then implies that̂ 𝑅= 𝑅, completing the proof of unique-
ness.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7D
Isometries, Unitary Operators, and Matrix Factorization
The proof of the QR factorization shows that the columns of the unitary matrix
can be computed by applying the Gram–Schmidt procedure to the columns of the
matrix to be factored. The next example illustrates the computation of the QR
factorization based on the proof that we just completed.
7.60
example: QR factorization of a 3-by-3 matrix
To find the QR factorization of the matrix
𝐴= ⎛⎜⎜⎜
⎝
−4
⎞⎟⎟⎟
⎠
,
follow the proof of 7.58. Thus set 𝑣1, 𝑣2, 𝑣3 equal to the columns of 𝐴:
𝑣1 = (1, 0, 0),
𝑣2 = (2, 1, 3),
𝑣3 = (1, −4, 2).
Apply the Gram–Schmidt procedure to 𝑣1, 𝑣2, 𝑣3, producing the orthonormal list
𝑒1 = (1, 0, 0),
𝑒2 = (0,
√10,
√10),
𝑒3 = (0, −
√10,
√10).
Still following the proof of 7.58, let 𝑄be the unitary matrix whose columns are
𝑒1, 𝑒2, 𝑒3:
𝑄=
⎛⎜⎜⎜⎜⎜⎜⎜⎜
⎝
√10
−
√10
√10
√10
⎞⎟⎟⎟⎟⎟⎟⎟⎟
⎠
.
As in the proof of 7.58, let 𝑅be the 3-by-3 matrix whose entry in row 𝑗, column 𝑘
is ⟨𝑣𝑘, 𝑒𝑗⟩, which gives
𝑅=
⎛⎜⎜⎜⎜⎜⎜⎜⎜
⎝
√10
√10
7√10
⎞⎟⎟⎟⎟⎟⎟⎟⎟
⎠
.
Note that 𝑅is indeed an upper-triangular matrix with only positive numbers on
the diagonal, as required by the QR factorization.
Now matrix multiplication can verify that 𝐴= 𝑄𝑅is the desired factorization
of 𝐴:
𝑄𝑅=
⎛⎜⎜⎜⎜⎜⎜⎜⎜
⎝
√10
−
√10
√10
√10
⎞⎟⎟⎟⎟⎟⎟⎟⎟
⎠
⎛⎜⎜⎜⎜⎜⎜⎜⎜
⎝
√10
√10
7√10
⎞⎟⎟⎟⎟⎟⎟⎟⎟
⎠
= ⎛⎜⎜⎜
⎝
−4
⎞⎟⎟⎟
⎠
= 𝐴.
Thus 𝐴= 𝑄𝑅, as expected.
The QR factorization will be the major tool used in the proof of the Cholesky
factorization (7.63) in the next subsection. For another nice application of the QR
factorization, see the proof of Hadamard’s inequality (9.66).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
If a QR factorization is available, then it can be used to solve a corresponding
system of linear equations without using Gaussian elimination. Specifically,
suppose 𝐴is an 𝑛-by-𝑛square matrix with linearly independent columns. Suppose
that 𝑏∈𝐅𝑛and we want to solve the equation 𝐴𝑥= 𝑏for 𝑥= (𝑥1, … , 𝑥𝑛) ∈𝐅𝑛
(as usual, we are identifying elements of 𝐅𝑛with 𝑛-by-1 column vectors).
Suppose 𝐴= 𝑄𝑅, where 𝑄is unitary and 𝑅is upper triangular with only
positive numbers on its diagonal (𝑄and 𝑅are computable from 𝐴using just the
Gram–Schmidt procedure, as shown in the proof of 7.58). The equation 𝐴𝑥= 𝑏is
equivalent to the equation 𝑄𝑅𝑥= 𝑏. Multiplying both sides of this last equation
by 𝑄∗on the left and using 7.57(d) gives the equation
𝑅𝑥= 𝑄∗𝑏.
The matrix 𝑄∗is the conjugate transpose of the matrix 𝑄. Thus computing
𝑄∗𝑏is straightforward. Because 𝑅is an upper-triangular matrix with positive
numbers on its diagonal, the system of linear equations represented by the equation
above can quickly be solved by first solving for 𝑥𝑛, then for 𝑥𝑛−1, and so on.
Cholesky Factorization
We begin this subsection with a characterization of positive invertible operators
in terms of inner products.
7.61
positive invertible operator
A self-adjoint operator 𝑇∈ℒ(𝑉) is a positive invertible operator if and only
if ⟨𝑇𝑣, 𝑣⟩> 0 for every nonzero 𝑣∈𝑉.
Proof
First suppose 𝑇is a positive invertible operator. If 𝑣∈𝑉and 𝑣≠0, then
because 𝑇is invertible we have 𝑇𝑣≠0. This implies that ⟨𝑇𝑣, 𝑣⟩≠0 (by 7.43).
Hence ⟨𝑇𝑣, 𝑣⟩> 0.
To prove the implication in the other direction, suppose now that ⟨𝑇𝑣, 𝑣⟩> 0
for every nonzero 𝑣∈𝑉. Thus 𝑇𝑣≠0 for every nonzero 𝑣∈𝑉. Hence 𝑇is
injective. Thus 𝑇is invertible, as desired.
The next definition transfers the result above to the language of matrices. Here
we are using the usual Euclidean inner product on 𝐅𝑛and identifying elements of
𝐅𝑛with 𝑛-by-1 column vectors.
7.62
definition: positive definite
A matrix 𝐵∈𝐅𝑛,𝑛is called positive definite if 𝐵∗= 𝐵and
⟨𝐵𝑥, 𝑥⟩> 0
for every nonzero 𝑥∈𝐅𝑛.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7D
Isometries, Unitary Operators, and Matrix Factorization
A matrix is upper triangular if and only if its conjugate transpose is lower
triangular (meaning that all entries above the diagonal are 0). The factorization
below, which has important consequences in computational linear algebra, writes
a positive definite matrix as the product of a lower triangular matrix and its
conjugate transpose.
Our next result is solely about matrices, although the proof makes use of the
identification of results about operators with results about square matrices. In the
result below, if the matrix 𝐵is in 𝐅𝑛,𝑛, then the matrix 𝑅is also in 𝐅𝑛,𝑛.
7.63
Cholesky factorization
Suppose 𝐵is a positive definite matrix. Then there exists a unique upper-
triangular matrix 𝑅with only positive numbers on its diagonal such that
𝐵= 𝑅∗𝑅.
Proof
Because 𝐵is positive definite, there exists an invertible square matrix 𝐴
of the same size as 𝐵such that 𝐵= 𝐴∗𝐴[by the equivalence of (a) and (f) in
7.38].
Let 𝐴= 𝑄𝑅be the QR factorization of 𝐴(see 7.58), where 𝑄is unitary and 𝑅
is upper triangular with only positive numbers on its diagonal. Then 𝐴∗= 𝑅∗𝑄∗.
André-Louis Cholesky (1875–1918)
discovered this factorization, which
was published posthumously in 1924.
Thus
𝐵= 𝐴∗𝐴= 𝑅∗𝑄∗𝑄𝑅= 𝑅∗𝑅,
as desired.
To prove the uniqueness part of this result, suppose 𝑆is an upper-triangular
matrix with only positive numbers on its diagonal and 𝐵= 𝑆∗𝑆. The matrix 𝑆is
invertible because 𝐵is invertible (see Exercise 11 in Section 3D). Multiplying both
sides of the equation 𝐵= 𝑆∗𝑆by 𝑆−1 on the right gives the equation 𝐵𝑆−1 = 𝑆∗.
Let 𝐴be the matrix from the first paragraph of this proof. Then
(𝐴𝑆−1)∗(𝐴𝑆−1) = (𝑆∗)−1𝐴∗𝐴𝑆−1
= (𝑆∗)−1𝐵𝑆−1
= (𝑆∗)−1𝑆∗
= 𝐼.
Thus 𝐴𝑆−1 is unitary.
Hence 𝐴= (𝐴𝑆−1)𝑆is a factorization of 𝐴as the product of a unitary matrix
and an upper-triangular matrix with only positive numbers on its diagonal. The
uniqueness of the QR factorization, as stated in 7.58, now implies that 𝑆= 𝑅.
In the first paragraph of the proof above, we could have chosen 𝐴to be the
unique positive definite matrix that is a square root of 𝐵(see 7.39). However,
the proof was presented with the more general choice of 𝐴because for specific
positive definite matrices 𝐵, it may be easier to find a different choice of 𝐴.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Exercises 7D
Suppose dim 𝑉≥2 and 𝑆∈ℒ(𝑉, 𝑊). Prove that 𝑆is an isometry if and
only if 𝑆𝑒1, 𝑆𝑒2 is an orthonormal list in 𝑊for every orthonormal list 𝑒1, 𝑒2
of length two in 𝑉.
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑇≠0. Prove that 𝑇is a scalar multiple of an
isometry if and only if 𝑇preserves orthogonality.
The phrase “𝑇preserves orthogonality” means that ⟨𝑇𝑢, 𝑇𝑣⟩= 0 for all
𝑢, 𝑣∈𝑉such that ⟨𝑢, 𝑣⟩= 0.
(a) Show that the product of two unitary operators on 𝑉is a unitary operator.
(b) Show that the inverse of a unitary operator on 𝑉is a unitary operator.
This exercise shows that the set of unitary operators on 𝑉is a group, where
the group operation is the usual product of two operators.
Suppose 𝐅= 𝐂and 𝐴, 𝐵∈ℒ(𝑉) are self-adjoint. Show that 𝐴+ 𝑖𝐵is
unitary if and only if 𝐴𝐵= 𝐵𝐴and 𝐴2 + 𝐵2 = 𝐼.
Suppose 𝑆∈ℒ(𝑉). Prove that the following are equivalent.
(a) 𝑆is a self-adjoint unitary operator.
(b) 𝑆= 2𝑃−𝐼for some orthogonal projection 𝑃on 𝑉.
(c) There exists a subspace 𝑈of 𝑉such that 𝑆𝑢= 𝑢for every 𝑢∈𝑈and
𝑆𝑤= −𝑤for every 𝑤∈𝑈⟂.
Suppose 𝑇1, 𝑇2 are both normal operators on 𝐅3 with 2, 5, 7 as eigenvalues.
Prove that there exists a unitary operator 𝑆∈ℒ(𝐅3) such that 𝑇1 = 𝑆∗𝑇2𝑆.
Give an example of two self-adjoint operators 𝑇1, 𝑇2 ∈ℒ(𝐅4) such that the
eigenvalues of both operators are 2, 5, 7 but there does not exist a unitary
operator 𝑆∈ℒ(𝐅4) such that 𝑇1 = 𝑆∗𝑇2𝑆. Be sure to explain why there is
no unitary operator with the required property.
Prove or give a counterexample: If 𝑆∈ℒ(𝑉) and there exists an orthonormal
basis 𝑒1, … , 𝑒𝑛of 𝑉such that ‖𝑆𝑒𝑘‖ = 1 for each 𝑒𝑘, then 𝑆is a unitary
operator.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Suppose every eigenvalue of 𝑇has absolute
value 1 and ‖𝑇𝑣‖ ≤‖𝑣‖ for every 𝑣∈𝑉. Prove that 𝑇is a unitary operator.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉) is a self-adjoint operator such that ‖𝑇𝑣‖ ≤‖𝑣‖
for all 𝑣∈𝑉.
(a) Show that 𝐼−𝑇2 is a positive operator.
(b) Show that 𝑇+ 𝑖√𝐼−𝑇2 is a unitary operator.
Suppose 𝑆∈ℒ(𝑉). Prove that 𝑆is a unitary operator if and only if
{𝑆𝑣∶𝑣∈𝑉and ‖𝑣‖ ≤1} = {𝑣∈𝑉∶‖𝑣‖ ≤1}.
Prove or give a counterexample: If 𝑆∈ℒ(𝑉) is invertible and ∥𝑆−1𝑣∥= ‖𝑆𝑣‖
for every 𝑣∈𝑉, then 𝑆is unitary.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7D
Isometries, Unitary Operators, and Matrix Factorization
Explain why the columns of a square matrix of complex numbers form
an orthonormal list in 𝐂𝑛if and only if the rows of the matrix form an
orthonormal list in 𝐂𝑛.
Suppose 𝑣∈𝑉with ‖𝑣‖ = 1 and 𝑏∈𝐅. Also suppose dim 𝑉≥2. Prove
that there exists a unitary operator 𝑆∈ℒ(𝑉) such that ⟨𝑆𝑣, 𝑣⟩= 𝑏if and
only if |𝑏| ≤1.
Suppose 𝑇is a unitary operator on 𝑉such that 𝑇−𝐼is invertible.
(a) Prove that (𝑇+ 𝐼)(𝑇−𝐼)−1 is a skew operator (meaning that it equals
the negative of its adjoint).
(b) Prove that if 𝐅= 𝐂, then 𝑖(𝑇+ 𝐼)(𝑇−𝐼)−1 is a self-adjoint operator.
The function 𝑧↦𝑖(𝑧+ 1)(𝑧−1)−1 maps the unit circle in 𝐂(except for the
point 1) to 𝐑. Thus (b) illustrates the analogy between the unitary operators
and the unit circle in 𝐂, along with the analogy between the self-adjoint
operators and 𝐑.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉) is self-adjoint. Prove that (𝑇+ 𝑖𝐼)(𝑇−𝑖𝐼)−1
is a unitary operator and 1 is not an eigenvalue of this operator.
Explain why the characterizations of unitary matrices given by 7.57 hold.
A square matrix 𝐴is called symmetric if it equals its transpose. Prove that if
𝐴is a symmetric matrix with real entries, then there exists a unitary matrix
𝑄with real entries such that 𝑄∗𝐴𝑄is a diagonal matrix.
Suppose 𝑛is a positive integer. For this exercise, we adopt the notation that
a typical element 𝑧of 𝐂𝑛is denoted by 𝑧= (𝑧0, 𝑧1, … , 𝑧𝑛−1). Define linear
functionals 𝜔0, 𝜔1, … , 𝜔𝑛−1 on 𝐂𝑛by
𝜔𝑗(𝑧0, 𝑧1, … , 𝑧𝑛−1) = 1
√𝑛
𝑛−1
∑
𝑚=0
𝑧𝑚𝑒−2𝜋𝑖𝑗𝑚/𝑛.
The discrete Fourier transform is the operator ℱ∶𝐂𝑛→𝐂𝑛defined by
ℱ𝑧= (𝜔0(𝑧), 𝜔1(𝑧), … , 𝜔𝑛−1(𝑧)).
(a) Show that ℱis a unitary operator on 𝐂𝑛.
(b) Show that if (𝑧0, … , 𝑧𝑛−1) ∈𝐂𝑛and 𝑧𝑛is defined to equal 𝑧0, then
ℱ−1(𝑧0, 𝑧1, … , 𝑧𝑛−1) = ℱ(𝑧𝑛, 𝑧𝑛−1, … , 𝑧1).
(c) Show that ℱ4 = 𝐼.
The discrete Fourier transform has many important applications in data
analysis. The usual Fourier transform involves expressions of the form
∫∞
−∞𝑓(𝑥)𝑒−2𝜋𝑖𝑡𝑥𝑑𝑥for complex-valued integrable functions 𝑓defined on 𝐑.
Suppose 𝐴is a square matrix with linearly independent columns. Prove that
there exist unique matrices 𝑅and 𝑄such that 𝑅is lower triangular with only
positive numbers on its diagonal, 𝑄is unitary, and 𝐴= 𝑅𝑄.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
7E Singular Value Decomposition
Singular Values
We will need the following result in this section.
7.64
properties of 𝑇∗𝑇
Suppose 𝑇∈ℒ(𝑉, 𝑊). Then
(a) 𝑇∗𝑇is a positive operator on 𝑉;
(b) null 𝑇∗𝑇= null 𝑇;
(c) range 𝑇∗𝑇= range 𝑇∗;
(d) dim range 𝑇= dim range 𝑇∗= dim range 𝑇∗𝑇.
Proof
(a) We have
(𝑇∗𝑇)∗= 𝑇∗(𝑇∗)∗= 𝑇∗𝑇.
Thus 𝑇∗𝑇is self-adjoint.
If 𝑣∈𝑉, then
⟨(𝑇∗𝑇)𝑣, 𝑣⟩= ⟨𝑇∗(𝑇𝑣), 𝑣⟩= ⟨𝑇𝑣, 𝑇𝑣⟩= ‖𝑇𝑣‖2 ≥0.
Thus 𝑇∗𝑇is a positive operator.
(b) First suppose 𝑣∈null 𝑇∗𝑇. Then
‖𝑇𝑣‖2 = ⟨𝑇𝑣, 𝑇𝑣⟩= ⟨𝑇∗𝑇𝑣, 𝑣⟩= ⟨0, 𝑣⟩= 0.
Thus 𝑇𝑣= 0, proving that null 𝑇∗𝑇⊆null 𝑇.
The inclusion in the other direction is clear, because if 𝑣∈𝑉and 𝑇𝑣= 0,
then 𝑇∗𝑇𝑣= 0.
Thus null 𝑇∗𝑇= null 𝑇, completing the proof of (b).
(c) We already know from (a) that 𝑇∗𝑇is self-adjoint. Thus
range 𝑇∗𝑇= (null 𝑇∗𝑇)⟂= (null 𝑇)⟂= range 𝑇∗,
where the first and last equalities come from 7.6 and the second equality
comes from (b).
(d) To verify the first equation in (d), note that
dim range 𝑇= dim(null 𝑇∗)⟂= dim 𝑊−dim null 𝑇∗= dim range 𝑇∗,
where the first equality comes from 7.6(d), the second equality comes from
6.51, and the last equality comes from the fundamental theorem of linear
maps (3.21).
The equality dim range 𝑇∗= dim range 𝑇∗𝑇follows from (c).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7E
Singular Value Decomposition
The eigenvalues of an operator tell us something about the behavior of the
operator. Another collection of numbers, called the singular values, is also useful.
Eigenspaces and the notation 𝐸(used in the examples) were defined in 5.52.
7.65
definition: singular values
Suppose 𝑇∈ℒ(𝑉, 𝑊). The singular values of 𝑇are the nonnegative square
roots of the eigenvalues of 𝑇∗𝑇, listed in decreasing order, each included as
many times as the dimension of the corresponding eigenspace of 𝑇∗𝑇.
7.66
example: singular values of an operator on 𝐅4
Define 𝑇∈ℒ(𝐅4) by 𝑇(𝑧1, 𝑧2, 𝑧3, 𝑧4) = (0, 3𝑧1, 2𝑧2, −3𝑧4). A calculation
shows that
𝑇∗𝑇(𝑧1, 𝑧2, 𝑧3, 𝑧4) = (9𝑧1, 4𝑧2, 0, 9𝑧4),
as you should verify. Thus the standard basis of 𝐅4 diagonalizes 𝑇∗𝑇, and we
see that the eigenvalues of 𝑇∗𝑇are 9, 4, and 0. Also, the dimensions of the
eigenspaces corresponding to the eigenvalues are
dim 𝐸(9, 𝑇∗𝑇) = 2
and
dim 𝐸(4, 𝑇∗𝑇) = 1
and
dim 𝐸(0, 𝑇∗𝑇) = 1.
Taking nonnegative square roots of these eigenvalues of 𝑇∗𝑇and using dimension
information from above, we conclude that the singular values of 𝑇are 3, 3, 2, 0.
The only eigenvalues of 𝑇are −3 and 0. Thus in this case, the collection of
eigenvalues did not pick up the number 2 that appears in the definition (and hence
the behavior) of 𝑇, but the list of singular values does include 2.
7.67
example: singular values of a linear map from 𝐅4 to 𝐅3
Suppose 𝑇∈ℒ(𝐅4, 𝐅3) has matrix (with respect to the standard bases)
⎛⎜⎜⎜
⎝
−5
⎞⎟⎟⎟
⎠
.
You can verify that the matrix of 𝑇∗𝑇is
⎛⎜⎜⎜⎜⎜⎜
⎝
⎞⎟⎟⎟⎟⎟⎟
⎠
and that the eigenvalues of the operator 𝑇∗𝑇are 25, 2, 0, with dim 𝐸(25, 𝑇∗𝑇) = 1,
dim 𝐸(2, 𝑇∗𝑇) = 1, and dim 𝐸(0, 𝑇∗𝑇) = 2. Thus the singular values of 𝑇are
5, √2, 0, 0.
See Exercise 2 for a characterization of the positive singular values.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

≈100 𝑒
Chapter 7
Operators on Inner Product Spaces
7.68
role of positive singular values
Suppose that 𝑇∈ℒ(𝑉, 𝑊). Then
(a) 𝑇is injective ⟺0 is not a singular value of 𝑇;
(b) the number of positive singular values of 𝑇equals dim range 𝑇;
(c) 𝑇is surjective ⟺number of positive singular values of 𝑇equals dim 𝑊.
Proof
The linear map 𝑇is injective if and only if null 𝑇= {0}, which happens
if and only if null 𝑇∗𝑇= {0} [by 7.64(b)], which happens if and only if 0 is not
an eigenvalue of 𝑇∗𝑇, which happens if and only if 0 is not a singular value of 𝑇,
completing the proof of (a).
The spectral theorem applied to 𝑇∗𝑇shows that dim range 𝑇∗𝑇equals the num-
ber of positive eigenvalues of 𝑇∗𝑇(counting repetitions). Thus 7.64(d) implies
that dim range 𝑇equals the number of positive singular values of 𝑇, proving (b).
Use (b) and 2.39 to show that (c) holds.
The table below compares eigenvalues with singular values.
list of eigenvalues
list of singular values
context: vector spaces
context: inner product spaces
defined only for linear maps from a vector
space to itself
defined for linear maps from an inner
product space to a possibly different inner
product space
can be arbitrary real numbers (if 𝐅= 𝐑)
or complex numbers (if 𝐅= 𝐂)
are nonnegative numbers
can be the empty list if 𝐅= 𝐑
length of list equals dimension of domain
includes 0 ⟺operator is not invertible
includes 0 ⟺linear map is not injective
no standard order, especially if 𝐅= 𝐂
always listed in decreasing order
The next result nicely characterizes isometries in terms of singular values.
7.69
isometries characterized by having all singular values equal 1
Suppose that 𝑆∈ℒ(𝑉, 𝑊). Then
𝑆is an isometry ⟺all singular values of 𝑆equal 1.
Proof
We have
𝑆is an isometry ⟺𝑆∗𝑆= 𝐼
⟺all eigenvalues of 𝑆∗𝑆equal 1
⟺all singular values of 𝑆equal 1,
where the first equivalence comes from 7.49 and the second equivalence comes
from the spectral theorem (7.29 or 7.31) applied to the self-adjoint operator 𝑆∗𝑆.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7E
Singular Value Decomposition
SVD for Linear Maps and for Matrices
The singular value decomposition is
useful in computational linear alge-
bra because good techniques exist for
approximating eigenvalues and eigen-
vectors of positive operators such as
𝑇∗𝑇, whose eigenvalues and eigenvec-
tors lead to the singular value decom-
position.
The next result shows that every linear
map from 𝑉to 𝑊has a remarkably clean
description in terms of its singular val-
ues and orthonormal lists in 𝑉and 𝑊.
In the next section we will see several
important applications of the singular
value decomposition (often called the
SVD).
7.70
singular value decomposition
Suppose 𝑇∈ℒ(𝑉, 𝑊) and the positive singular values of 𝑇are 𝑠1, … , 𝑠𝑚.
Then there exist orthonormal lists 𝑒1, … , 𝑒𝑚in 𝑉and 𝑓1, … , 𝑓𝑚in 𝑊such that
7.71
𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑓𝑚
for every 𝑣∈𝑉.
Proof
Let 𝑠1, … , 𝑠𝑛denote the singular values of 𝑇(thus 𝑛= dim 𝑉). Because
𝑇∗𝑇is a positive operator [see 7.64(a)], the spectral theorem implies that there
exists an orthonormal basis 𝑒1, … , 𝑒𝑛of 𝑉with
7.72
𝑇∗𝑇𝑒𝑘= 𝑠𝑘
2𝑒𝑘
for each 𝑘= 1, … , 𝑛.
For each 𝑘= 1, … , 𝑚, let
7.73
𝑓𝑘= 𝑇𝑒𝑘
𝑠𝑘
.
If 𝑗, 𝑘∈{1, … , 𝑚}, then
⟨𝑓𝑗, 𝑓𝑘⟩=
𝑠𝑗𝑠𝑘
⟨𝑇𝑒𝑗, 𝑇𝑒𝑘⟩=
𝑠𝑗𝑠𝑘
⟨𝑒𝑗, 𝑇∗𝑇𝑒𝑘⟩= 𝑠𝑘
𝑠𝑗
⟨𝑒𝑗, 𝑒𝑘⟩=
⎧{
⎨{⎩
if 𝑗≠𝑘,
if 𝑗= 𝑘.
Thus 𝑓1, … , 𝑓𝑚is an orthonormal list in 𝑊.
If 𝑘∈{1, … , 𝑛} and 𝑘> 𝑚, then 𝑠𝑘= 0 and hence 𝑇∗𝑇𝑒𝑘= 0 (by 7.72),
which implies that 𝑇𝑒𝑘= 0 [by 7.64(b)].
Suppose 𝑣∈𝑉. Then
𝑇𝑣= 𝑇(⟨𝑣, 𝑒1⟩𝑒1 + ⋯+ ⟨𝑣, 𝑒𝑛⟩𝑒𝑛)
= ⟨𝑣, 𝑒1⟩𝑇𝑒1 + ⋯+ ⟨𝑣, 𝑒𝑚⟩𝑇𝑒𝑚
= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑓𝑚,
where the last index in the first line switched from 𝑛to 𝑚in the second line
because 𝑇𝑒𝑘= 0 if 𝑘> 𝑚(as noted in the paragraph above) and the third line
follows from 7.73. The equation above is our desired result.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Suppose 𝑇∈ℒ(𝑉, 𝑊), the positive singular values of 𝑇are 𝑠1, … , 𝑠𝑚, and
𝑒1, … , 𝑒𝑚and 𝑓1, … , 𝑓𝑚are as in the singular value decomposition 7.70. The
orthonormal list 𝑒1, … , 𝑒𝑚can be extended to an orthonormal basis 𝑒1, … , 𝑒dim 𝑉
of 𝑉and the orthonormal list 𝑓1, … , 𝑓𝑚can be extended to an orthonormal basis
𝑓1, … , 𝑓dim 𝑊of 𝑊. The formula 7.71 shows that
𝑇𝑒𝑘=
⎧{
⎨{⎩
𝑠𝑘𝑓𝑘
if 1 ≤𝑘≤𝑚,
if 𝑚< 𝑘≤dim 𝑉.
Thus the matrix of 𝑇with respect to the orthonormal bases (𝑒1, … , 𝑒dim 𝑉) and
( 𝑓1, … , 𝑓dim 𝑊) has the simple form
ℳ(𝑇, (𝑒1, … , 𝑒dim 𝑉), ( 𝑓1, … , 𝑓dim 𝑊))𝑗,𝑘=
⎧{
⎨{⎩
𝑠𝑘
if 1 ≤𝑗= 𝑘≤𝑚,
otherwise.
If dim 𝑉= dim 𝑊(as happens, for example, if 𝑊= 𝑉), then the matrix
described in the paragraph above is a diagonal matrix. If we extend the definition
of diagonal matrix as follows to apply to matrices that are not necessarily square,
then we have proved the wonderful result that every linear map from 𝑉to 𝑊has
a diagonal matrix with respect to appropriate orthonormal bases.
7.74
definition: diagonal matrix
An 𝑀-by-𝑁matrix 𝐴is called a diagonal matrix if all entries of the matrix
are 0 except possibly 𝐴𝑘,𝑘for 𝑘= 1, … , min{𝑀, 𝑁}.
The table below compares the spectral theorem (7.29 and 7.31) with the
singular value decomposition (7.70).
spectral theorem
singular value decomposition
describes only self-adjoint operators
(when 𝐅= 𝐑) or normal operators (when
𝐅= 𝐂)
describes arbitrary linear maps from an
inner product space to a possibly different
inner product space
produces a single orthonormal basis
produces two orthonormal lists, one for
domain space and one for range space,
that are not necessarily the same even
when range space equals domain space
different proofs depending on whether
𝐅= 𝐑or 𝐅= 𝐂
same proof works regardless of whether
𝐅= 𝐑or 𝐅= 𝐂
The singular value decomposition gives us a new way to understand the adjoint
and the inverse of a linear map. Specifically, the next result shows that given a
singular value decomposition of a linear map 𝑇∈ℒ(𝑉, 𝑊), we can obtain the
adjoint of 𝑇simply by interchanging the roles of the 𝑒’s and the 𝑓’s (see 7.77).
Similarly, we can obtain the pseudoinverse 𝑇† (see 6.68) of 𝑇by interchanging
the roles of the 𝑒’s and the 𝑓’s and replacing each positive singular value 𝑠𝑘of 𝑇
with 1/𝑠𝑘(see 7.78).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7E
Singular Value Decomposition
Recall that the pseudoinverse 𝑇† in 7.78 below equals the inverse 𝑇−1 if 𝑇is
invertible [see 6.69(a)].
7.75
singular value decomposition of adjoint and pseudoinverse
Suppose 𝑇∈ℒ(𝑉, 𝑊) and the positive singular values of 𝑇are 𝑠1, … , 𝑠𝑚.
Suppose 𝑒1, … , 𝑒𝑚and 𝑓1, … , 𝑓𝑚are orthonormal lists in 𝑉and 𝑊such that
7.76
𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑓𝑚
for every 𝑣∈𝑉. Then
7.77
𝑇∗𝑤= 𝑠1⟨𝑤, 𝑓1⟩𝑒1 + ⋯+ 𝑠𝑚⟨𝑤, 𝑓𝑚⟩𝑒𝑚
and
7.78
𝑇†𝑤= ⟨𝑤, 𝑓1⟩
𝑠1
𝑒1 + ⋯+ ⟨𝑤, 𝑓𝑚⟩
𝑠𝑚
𝑒𝑚
for every 𝑤∈𝑊.
Proof
If 𝑣∈𝑉and 𝑤∈𝑊then
⟨𝑇𝑣, 𝑤⟩= ⟨𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑓𝑚, 𝑤⟩
= 𝑠1⟨𝑣, 𝑒1⟩⟨𝑓1, 𝑤⟩+ ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩⟨𝑓𝑚, 𝑤⟩
= ⟨𝑣, 𝑠1⟨𝑤, 𝑓1⟩𝑒1 + ⋯+ 𝑠𝑚⟨𝑤, 𝑓𝑚⟩𝑒𝑚⟩.
This implies that
𝑇∗𝑤= 𝑠1⟨𝑤, 𝑓1⟩𝑒1 + ⋯+ 𝑠𝑚⟨𝑤, 𝑓𝑚⟩𝑒𝑚,
proving 7.77.
To prove 7.78, suppose 𝑤∈𝑊. Let
𝑣= ⟨𝑤, 𝑓1⟩
𝑠1
𝑒1 + ⋯+ ⟨𝑤, 𝑓𝑚⟩
𝑠𝑚
𝑒𝑚.
Apply 𝑇to both sides of the equation above, getting
𝑇𝑣= ⟨𝑤, 𝑓1⟩
𝑠1
𝑇𝑒1 + ⋯+ ⟨𝑤, 𝑓𝑚⟩
𝑠𝑚
𝑇𝑒𝑚
= ⟨𝑤, 𝑓1⟩𝑓1 + ⋯+ ⟨𝑤, 𝑓𝑚⟩𝑓𝑚
= 𝑃range 𝑇𝑤,
where the second line holds because 7.76 implies that 𝑇𝑒𝑘= 𝑠𝑘𝑓𝑘if 𝑘= 1, … , 𝑚,
and the last line above holds because 7.76 implies that 𝑓1, … , 𝑓𝑚spans range 𝑇
and thus is an orthonormal basis of range 𝑇[and hence 6.57(i) applies]. The
equation above, the observation that 𝑣∈(null 𝑇)⟂[see Exercise 8(b)], and the
definition of 𝑇†𝑤(see 6.68) show that 𝑣= 𝑇†𝑤, proving 7.78.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
7.79
example: finding a singular value decomposition
Define 𝑇∈ℒ(𝐅4, 𝐅3) by 𝑇(𝑥1, 𝑥2, 𝑥3, 𝑥4) = (−5𝑥4, 0, 𝑥1 + 𝑥2). We want to
find a singular value decomposition of 𝑇. The matrix of 𝑇(with respect to the
standard bases) is
⎛⎜⎜⎜
⎝
−5
⎞⎟⎟⎟
⎠
.
Thus, as discussed in Example 7.67, the matrix of 𝑇∗𝑇is
⎛⎜⎜⎜⎜⎜⎜
⎝
⎞⎟⎟⎟⎟⎟⎟
⎠
,
and the positive eigenvalues of 𝑇∗𝑇are 25, 2, with dim 𝐸(25, 𝑇∗𝑇) = 1 and
dim 𝐸(2, 𝑇∗𝑇) = 1. Hence the positive singular values of 𝑇are 5, √2.
Thus to find a singular value decomposition of 𝑇, we must find an orthonormal
list 𝑒1, 𝑒2 in 𝐅4 and an orthonormal list 𝑓1, 𝑓2 in 𝐅3 such that
𝑇𝑣= 5⟨𝑣, 𝑒1⟩𝑓1 + √2⟨𝑣, 𝑒2⟩𝑓2
for all 𝑣∈𝐅4.
An orthonormal basis of 𝐸(25, 𝑇∗𝑇) is the vector (0, 0, 0, 1); an orthonormal
basis of 𝐸(2, 𝑇∗𝑇) is the vector ( 1
√2,
√2, 0, 0). Thus, following the proof of 7.70,
we take
𝑒1 = (0, 0, 0, 1)
and
𝑒2 = ( 1
√2
, 1
√2
, 0, 0)
and
𝑓1 = 𝑇𝑒1
= (−1, 0, 0)
and
𝑓2 = 𝑇𝑒2
√2
= (0, 0, 1).
Then, as expected, we see that 𝑒1, 𝑒2 is an orthonormal list in 𝐅4 and 𝑓1, 𝑓2 is an
orthonormal list in 𝐅3 and
𝑇𝑣= 5⟨𝑣, 𝑒1⟩𝑓1 + √2⟨𝑣, 𝑒2⟩𝑓2
for all 𝑣∈𝐅4. Thus we have found a singular value decomposition of 𝑇.
The next result translates the singular value decomposition from the context
of linear maps to the context of matrices. Specifically, the following result gives
a factorization of an arbitrary matrix as the product of three nice matrices. The
proof gives an explicit construction of these three matrices in terms of the singular
value decomposition.
In the next result, the phrase “orthonormal columns” should be interpreted to
mean that the columns are orthonormal with respect to the standard Euclidean
inner product.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7E
Singular Value Decomposition
7.80
matrix version of SVD
Suppose 𝐴is a 𝑝-by-𝑛matrix of rank 𝑚≥1. Then there exist a 𝑝-by-𝑚matrix
𝐵with orthonormal columns, an 𝑚-by-𝑚diagonal matrix 𝐷with positive
numbers on the diagonal, and an 𝑛-by-𝑚matrix 𝐶with orthonormal columns
such that
𝐴= 𝐵𝐷𝐶∗.
Proof
Let 𝑇∶𝐅𝑛→𝐅𝑝be the linear map whose matrix with respect to the
standard bases equals 𝐴. Then dim range 𝑇= 𝑚(by 3.78). Let
7.81
𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑓𝑚
be a singular value decomposition of 𝑇. Let
𝐵= the 𝑝-by-𝑚matrix whose columns are 𝑓1, … , 𝑓𝑚,
𝐷= the 𝑚-by-𝑚diagonal matrix whose diagonal entries are 𝑠1, … , 𝑠𝑚,
𝐶= the 𝑛-by-𝑚matrix whose columns are 𝑒1, … , 𝑒𝑚.
Let 𝑢1, … , 𝑢𝑚denote the standard basis of 𝐅𝑚. If 𝑘∈{1, … , 𝑚} then
(𝐴𝐶−𝐵𝐷)𝑢𝑘= 𝐴𝑒𝑘−𝐵(𝑠𝑘𝑢𝑘) = 𝑠𝑘𝑓𝑘−𝑠𝑘𝑓𝑘= 0.
Thus 𝐴𝐶= 𝐵𝐷.
Multiply both sides of this last equation by 𝐶∗(the conjugate transpose of 𝐶)
on the right to get
𝐴𝐶𝐶∗= 𝐵𝐷𝐶∗.
Note that the rows of 𝐶∗are the complex conjugates of 𝑒1, … , 𝑒𝑚. Thus if
𝑘∈{1, … , 𝑚}, then the definition of matrix multiplication shows that 𝐶∗𝑒𝑘= 𝑢𝑘;
hence 𝐶𝐶∗𝑒𝑘= 𝑒𝑘. Thus 𝐴𝐶𝐶∗𝑣= 𝐴𝑣for all 𝑣∈span(𝑒1, … , 𝑒𝑚).
If 𝑣∈(span(𝑒1, … , 𝑒𝑚))⟂, then 𝐴𝑣= 0 (as follows from 7.81) and 𝐶∗𝑣= 0
(as follows from the definition of matrix multiplication). Hence 𝐴𝐶𝐶∗𝑣= 𝐴𝑣for
all 𝑣∈(span(𝑒1, … , 𝑒𝑚))⟂.
Because 𝐴𝐶𝐶∗and 𝐴agree on span(𝑒1, … , 𝑒𝑚) and on (span(𝑒1, … , 𝑒𝑚))⟂,
we conclude that 𝐴𝐶𝐶∗= 𝐴. Thus the displayed equation above becomes
𝐴= 𝐵𝐷𝐶∗,
as desired.
Note that the matrix 𝐴in the result above has 𝑝𝑛entries. In comparison, the
matrices 𝐵, 𝐷, and 𝐶above have a total of
𝑚(𝑝+ 𝑚+ 𝑛)
entries. Thus if 𝑝and 𝑛are large numbers and the rank 𝑚is considerably less
than 𝑝and 𝑛, then the number of entries that must be stored on a computer to
represent 𝐴is considerably less than 𝑝𝑛.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Exercises 7E
Suppose 𝑇∈ℒ(𝑉, 𝑊). Show that 𝑇= 0 if and only if all singular values
of 𝑇are 0.
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑠> 0. Prove that 𝑠is a singular value of 𝑇if
and only if there exist nonzero vectors 𝑣∈𝑉and 𝑤∈𝑊such that
𝑇𝑣= 𝑠𝑤
and
𝑇∗𝑤= 𝑠𝑣.
The vectors 𝑣, 𝑤satisfying both equations above are called a Schmidt pair.
Erhard Schmidt introduced the concept of singular values in 1907.
Give an example of 𝑇∈ℒ(𝐂2) such that 0 is the only eigenvalue of 𝑇and
the singular values of 𝑇are 5, 0.
Suppose that 𝑇∈ℒ(𝑉, 𝑊), 𝑠1 is the largest singular value of 𝑇, and 𝑠𝑛is
the smallest singular value of 𝑇. Prove that
{‖𝑇𝑣‖ ∶𝑣∈𝑉and ‖𝑣‖ = 1} = [𝑠𝑛, 𝑠1].
Suppose 𝑇∈ℒ(𝐂2) is defined by 𝑇(𝑥, 𝑦) = (−4𝑦, 𝑥). Find the singular
values of 𝑇.
Find the singular values of the differentiation operator 𝐷∈ℒ(𝒫2(𝐑))
defined by 𝐷𝑝= 𝑝′, where the inner product on 𝒫2(𝐑) is as in Example 6.34.
Suppose that 𝑇∈ℒ(𝑉) is self-adjoint or that 𝐅= 𝐂and 𝑇∈ℒ(𝑉) is
normal. Let 𝜆1, … , 𝜆𝑛be the eigenvalues of 𝑇, each included in this list
as many times as the dimension of the corresponding eigenspace. Show
that the singular values of 𝑇are |𝜆1|, … , |𝜆𝑛|, after these numbers have been
sorted into decreasing order.
Suppose 𝑇∈ℒ(𝑉, 𝑊). Suppose 𝑠1 ≥𝑠2 ≥⋯≥𝑠𝑚> 0 and 𝑒1, … , 𝑒𝑚is an
orthonormal list in 𝑉and 𝑓1, … , 𝑓𝑚is an orthonormal list in 𝑊such that
𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑓𝑚
for every 𝑣∈𝑉.
(a) Prove that 𝑓1, … , 𝑓𝑚is an orthonormal basis of range 𝑇.
(b) Prove that 𝑒1, … , 𝑒𝑚is an orthonormal basis of (null 𝑇)⟂.
(c) Prove that 𝑠1, … , 𝑠𝑚are the positive singular values of 𝑇.
(d) Prove that if 𝑘∈{1, … , 𝑚}, then 𝑒𝑘is an eigenvector of 𝑇∗𝑇with
corresponding eigenvalue 𝑠𝑘
2.
(e) Prove that
𝑇𝑇∗𝑤= 𝑠1
2⟨𝑤, 𝑓1⟩𝑓1 + ⋯+ 𝑠𝑚
2⟨𝑤, 𝑓𝑚⟩𝑓𝑚
for all 𝑤∈𝑊.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7E
Singular Value Decomposition
Suppose 𝑇∈ℒ(𝑉, 𝑊). Show that 𝑇and 𝑇∗have the same positive singular
values.
Suppose 𝑇∈ℒ(𝑉, 𝑊) has singular values 𝑠1, … , 𝑠𝑛. Prove that if 𝑇is an
invertible linear map, then 𝑇−1 has singular values
𝑠𝑛
, … , 1
𝑠1
.
Suppose that 𝑇∈ℒ(𝑉, 𝑊) and 𝑣1, … , 𝑣𝑛is an orthonormal basis of 𝑉. Let
𝑠1, … , 𝑠𝑛denote the singular values of 𝑇.
(a) Prove that ‖𝑇𝑣1‖2 + ⋯+ ‖𝑇𝑣𝑛‖2 = 𝑠1
2 + ⋯+ 𝑠𝑛
2.
(b) Prove that if 𝑊= 𝑉and 𝑇is a positive operator, then
⟨𝑇𝑣1, 𝑣1⟩+ ⋯+ ⟨𝑇𝑣𝑛, 𝑣𝑛⟩= 𝑠1 + ⋯+ 𝑠𝑛.
See the comment after Exercise 5 in Section 7A.
(a) Give an example of a finite-dimensional vector space and an operator 𝑇
on it such that the singular values of 𝑇2 do not equal the squares of the
singular values of 𝑇.
(b) Suppose 𝑇∈ℒ(𝑉) is normal. Prove that the singular values of 𝑇2
equal the squares of the singular values of 𝑇.
Suppose 𝑇1, 𝑇2 ∈ℒ(𝑉). Prove that 𝑇1 and 𝑇2 have the same singular
values if and only if there exist unitary operators 𝑆1, 𝑆2 ∈ℒ(𝑉) such that
𝑇1 = 𝑆1𝑇2𝑆2.
Suppose 𝑇∈ℒ(𝑉, 𝑊). Let 𝑠𝑛denote the smallest singular value of 𝑇. Prove
that 𝑠𝑛‖𝑣‖ ≤‖𝑇𝑣‖ for every 𝑣∈𝑉.
Suppose 𝑇∈ℒ(𝑉) and 𝑠1 ≥⋯≥𝑠𝑛are the singular values of 𝑇. Prove
that if 𝜆is an eigenvalue of 𝑇, then 𝑠1 ≥|𝜆| ≥𝑠𝑛.
Suppose 𝑇∈ℒ(𝑉, 𝑊). Prove that (𝑇∗)† = (𝑇†)∗.
Compare the result in this exercise to the analogous result for invertible
linear maps [see 7.5( f )].
Suppose 𝑇∈ℒ(𝑉). Prove that 𝑇is self-adjoint if and only if 𝑇† is self-
adjoint.
Matrices unfold
Singular values gleam like stars
Order in chaos shines
—written by ChatGPT with input haiku about SVD
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
7F Consequences of Singular Value Decomposition
Norms of Linear Maps
The singular value decomposition leads to the following upper bound for ‖𝑇𝑣‖.
7.82
upper bound for ‖𝑇𝑣‖
Suppose 𝑇∈ℒ(𝑉, 𝑊). Let 𝑠1 be the largest singular value of 𝑇. Then
‖𝑇𝑣‖ ≤𝑠1‖𝑣‖
for all 𝑣∈𝑉.
For a lower bound on ‖𝑇𝑣‖, look at
Exercise 14 in Section 7E.
Proof
Let 𝑠1, … , 𝑠𝑚denote the positive
singular values of 𝑇, and let 𝑒1, … , 𝑒𝑚be
an orthonormal list in 𝑉and 𝑓1, … , 𝑓𝑚be
an orthonormal list in 𝑊that provide a singular value decomposition of 𝑇. Thus
7.83
𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑓𝑚
for all 𝑣∈𝑉. Hence if 𝑣∈𝑉then
‖𝑇𝑣‖2 = 𝑠1
2 ∣⟨𝑣, 𝑒1⟩∣2 + ⋯+ 𝑠𝑚
2 ∣⟨𝑣, 𝑒𝑚⟩∣2
≤𝑠1
2(∣⟨𝑣, 𝑒1⟩∣2 + ⋯+ ∣⟨𝑣, 𝑒𝑚⟩∣2)
≤𝑠1
2 ‖𝑣‖2,
where the last inequality follows from Bessel’s inequality (6.26). Taking square
roots of both sides of the inequality above shows that ‖𝑇𝑣‖ ≤𝑠1‖𝑣‖, as desired.
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑠1 is the largest singular value of 𝑇. The result
above shows that
7.84
‖𝑇𝑣‖ ≤𝑠1 for all 𝑣∈𝑉with ‖𝑣‖ ≤1.
Taking 𝑣= 𝑒1 in 7.83 shows that 𝑇𝑒1 = 𝑠1 𝑓1. Because ‖ 𝑓1‖ = 1, this implies that
‖𝑇𝑒1‖ = 𝑠1. Thus because ‖𝑒1‖ = 1, the inequality in 7.84 leads to the equation
7.85
max{‖𝑇𝑣‖ ∶𝑣∈𝑉and ‖𝑣‖ ≤1} = 𝑠1.
The equation above is the motivation for the following definition, which defines
the norm of 𝑇to be the left side of the equation above without needing to refer to
singular values or the singular value decomposition.
7.86
definition: norm of a linear map, ‖⋅‖
Suppose 𝑇∈ℒ(𝑉, 𝑊). Then the norm of 𝑇, denoted by ‖𝑇‖, is defined by
‖𝑇‖ = max{‖𝑇𝑣‖ ∶𝑣∈𝑉and ‖𝑣‖ ≤1}.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7F
Consequences of Singular Value Decomposition
In general, the maximum of an infinite set of nonnegative numbers need
not exist. However, the discussion before 7.86 shows that the maximum in the
definition of the norm of a linear map 𝑇from 𝑉to 𝑊does indeed exist (and
equals the largest singular value of 𝑇).
We now have two different uses of the word norm and the notation ‖⋅‖. Our
first use of this notation was in connection with an inner product on 𝑉, when we
defined ‖𝑣‖ = √⟨𝑣, 𝑣⟩for each 𝑣∈𝑉. Our second use of the norm notation and
terminology is with the definition we just made of ‖𝑇‖ for 𝑇∈ℒ(𝑉, 𝑊). The
norm ‖𝑇‖ for 𝑇∈ℒ(𝑉, 𝑊) does not usually come from taking an inner product
of 𝑇with itself (see Exercise 21). You should be able to tell from the context and
from the symbols used which meaning of the norm is intended.
The properties of the norm on ℒ(𝑉, 𝑊) listed below look identical to properties
of the norm on an inner product space (see 6.9 and 6.17). The inequality in (d) is
called the triangle inequality, thus using the same terminology that we used for
the norm on 𝑉. For the reverse triangle inequality, see Exercise 1.
7.87
basic properties of norms of linear maps
Suppose 𝑇∈ℒ(𝑉, 𝑊). Then
(a) ‖𝑇‖ ≥0;
(b) ‖𝑇‖ = 0 ⟺𝑇= 0;
(c) ‖𝜆𝑇‖ = |𝜆| ‖𝑇‖ for all 𝜆∈𝐅;
(d) ‖𝑆+ 𝑇‖ ≤‖𝑆‖ + ‖𝑇‖ for all 𝑆∈ℒ(𝑉, 𝑊).
Proof
(a) Because ‖𝑇𝑣‖ ≥0 for every 𝑣∈𝑉, the definition of ‖𝑇‖ implies that ‖𝑇‖ ≥0.
(b) Suppose ‖𝑇‖ = 0. Thus 𝑇𝑣= 0 for all 𝑣∈𝑉with ‖𝑣‖ ≤1. If 𝑢∈𝑉with
𝑢≠0, then
𝑇𝑢= ‖𝑢‖ 𝑇( 𝑢
‖𝑢‖) = 0,
where the last equality holds because 𝑢/‖𝑢‖ has norm 1. Because 𝑇𝑢= 0 for
all 𝑢∈𝑉, we have 𝑇= 0.
Conversely, if 𝑇= 0 then 𝑇𝑣= 0 for all 𝑣∈𝑉and hence ‖𝑇‖ = 0.
(c) Suppose 𝜆∈𝐅. Then
‖𝜆𝑇‖ = max{‖𝜆𝑇𝑣‖ ∶𝑣∈𝑉and ‖𝑣‖ ≤1}
= |𝜆| max{‖𝑇𝑣‖ ∶𝑣∈𝑉and ‖𝑣‖ ≤1}
= |𝜆| ‖𝑇‖.
(d) Suppose 𝑆∈ℒ(𝑉, 𝑊). The definition of ‖𝑆+ 𝑇‖ implies that there exists
𝑣∈𝑉such that ‖𝑣‖ ≤1 and ‖𝑆+ 𝑇‖ = ∥(𝑆+ 𝑇)𝑣∥. Now
‖𝑆+ 𝑇‖ = ∥(𝑆+ 𝑇)𝑣∥= ‖𝑆𝑣+ 𝑇𝑣‖ ≤‖𝑆𝑣‖ + ‖𝑇𝑣‖ ≤‖𝑆‖ + ‖𝑇‖,
completing the proof of (d).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
For 𝑆, 𝑇∈ℒ(𝑉, 𝑊), the quantity ‖𝑆−𝑇‖ is often called the distance between
𝑆and 𝑇. Informally, think of the condition that ‖𝑆−𝑇‖ is a small number as
meaning that 𝑆and 𝑇are close together. For example, Exercise 9 asserts that for
every 𝑇∈ℒ(𝑉), there is an invertible operator as close to 𝑇as we wish.
7.88
alternative formulas for ‖𝑇‖
Suppose 𝑇∈ℒ(𝑉, 𝑊). Then
(a) ‖𝑇‖ = the largest singular value of 𝑇;
(b) ‖𝑇‖ = max{‖𝑇𝑣‖ ∶𝑣∈𝑉and ‖𝑣‖ = 1};
(c) ‖𝑇‖ = the smallest number 𝑐such that ‖𝑇𝑣‖ ≤𝑐‖𝑣‖ for all 𝑣∈𝑉.
Proof
(a) See 7.85.
(b) Let 𝑣∈𝑉be such that 0 < ‖𝑣‖ ≤1. Let 𝑢= 𝑣/‖𝑣‖. Then
‖𝑢‖ = ∥𝑣
‖𝑣‖∥= 1
and
‖𝑇𝑢‖ = ∥𝑇( 𝑣
‖𝑣‖)∥= ‖𝑇𝑣‖
‖𝑣‖ ≥‖𝑇𝑣‖.
Thus when finding the maximum of ‖𝑇𝑣‖ with ‖𝑣‖ ≤1, we can restrict
attention to vectors in 𝑉with norm 1, proving (b).
(c) Suppose 𝑣∈𝑉and 𝑣≠0. Then the definition of ‖𝑇‖ implies that
∥𝑇( 𝑣
‖𝑣‖)∥≤‖𝑇‖,
which implies that
7.89
‖𝑇𝑣‖ ≤‖𝑇‖ ‖𝑣‖.
Now suppose 𝑐≥0 and ‖𝑇𝑣‖ ≤𝑐‖𝑣‖ for all 𝑣∈𝑉. This implies that
‖𝑇𝑣‖ ≤𝑐
for all 𝑣∈𝑉with ‖𝑣‖ ≤1. Taking the maximum of the left side of the
inequality above over all 𝑣∈𝑉with ‖𝑣‖ ≤1 shows that ‖𝑇‖ ≤𝑐. Thus ‖𝑇‖ is
the smallest number 𝑐such that ‖𝑇𝑣‖ ≤𝑐‖𝑣‖ for all 𝑣∈𝑉.
When working with norms of linear maps, you will probably frequently use
the inequality 7.89.
For computing an approximation of the norm of a linear map 𝑇given the
matrix of 𝑇with respect to some orthonormal bases, 7.88(a) is likely to be most
useful. The matrix of 𝑇∗𝑇is quickly computable from matrix multiplication.
Then a computer can be asked to find an approximation for the largest eigenvalue
of 𝑇∗𝑇(excellent numerical algorithms exist for this purpose). Then taking the
square root and using 7.88(a) gives an approximation for the norm of 𝑇(which
usually cannot be computed exactly).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7F
Consequences of Singular Value Decomposition
You should verify all assertions in the example below.
7.90
example: norms
• If 𝐼denotes the usual identity operator on 𝑉, then ‖𝐼‖ = 1.
• If 𝑇∈ℒ(𝐅𝑛) and the matrix of 𝑇with respect to the standard basis of 𝐅𝑛
consists of all 1’s, then ‖𝑇‖ = 𝑛.
• If 𝑇∈ℒ(𝑉) and 𝑉has an orthonormal basis consisting of eigenvectors of
𝑇with corresponding eigenvalues 𝜆1, … , 𝜆𝑛, then ‖𝑇‖ is the maximum of the
numbers |𝜆1|, … , |𝜆𝑛|.
• Suppose 𝑇∈ℒ(𝐑5) is the operator whose matrix (with respect to the stan-
dard basis) is the 5-by-5 matrix whose entry in row 𝑗, column 𝑘is 1/(𝑗2 + 𝑘).
Standard mathematical software shows that the largest singular value of 𝑇is
approximately 0.8 and the smallest singular value of 𝑇is approximately 10−6.
Thus ‖𝑇‖ ≈0.8 and (using Exercise 10 in Section 7E) ∥𝑇−1∥≈106. It is not
possible to find exact formulas for these norms.
A linear map and its adjoint have the same norm, as shown by the next result.
7.91
norm of the adjoint
Suppose 𝑇∈ℒ(𝑉, 𝑊). Then ∥𝑇∗∥= ‖𝑇‖.
Proof
Suppose 𝑤∈𝑊. Then
∥𝑇∗𝑤∥2 = ⟨𝑇∗𝑤, 𝑇∗𝑤⟩= ⟨𝑇𝑇∗𝑤, 𝑤⟩≤∥𝑇𝑇∗𝑤∥‖𝑤‖ ≤‖𝑇‖ ∥𝑇∗𝑤∥‖𝑤‖.
The inequality above implies that
∥𝑇∗𝑤∥≤‖𝑇‖ ‖𝑤‖,
which along with 7.88(c) implies that ∥𝑇∗∥≤‖𝑇‖.
Replacing 𝑇with 𝑇∗in the inequality ∥𝑇∗∥≤‖𝑇‖ and then using the equation
(𝑇∗)∗= 𝑇shows that ‖𝑇‖ ≤∥𝑇∗∥. Thus ∥𝑇∗∥= ‖𝑇‖, as desired.
You may want to construct an alternative proof of the result above using
Exercise 9 in Section 7E, which asserts that a linear map and its adjoint have the
same positive singular values.
Approximation by Linear Maps with Lower-Dimensional Range
The next result is a spectacular application of the singular value decomposition.
It says that to best approximate a linear map by a linear map whose range has
dimension at most 𝑘, chop off the singular value decomposition after the first
𝑘terms. Specifically, the linear map 𝑇𝑘in the next result has the property that
dim range 𝑇𝑘= 𝑘and 𝑇𝑘minimizes the distance to 𝑇among all linear maps with
range of dimension at most 𝑘. This result leads to algorithms for compressing
huge matrices while preserving their most important information.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
7.92
best approximation by linear map whose range has dimension ≤𝑘
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑠1 ≥⋯≥𝑠𝑚are the positive singular values of 𝑇.
Suppose 1 ≤𝑘< 𝑚. Then
min{‖𝑇−𝑆‖ ∶𝑆∈ℒ(𝑉, 𝑊) and dim range 𝑆≤𝑘} = 𝑠𝑘+1.
Furthermore, if
𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑓𝑚
is a singular value decomposition of 𝑇and 𝑇𝑘∈ℒ(𝑉, 𝑊) is defined by
𝑇𝑘𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑘⟨𝑣, 𝑒𝑘⟩𝑓𝑘
for each 𝑣∈𝑉, then dim range 𝑇𝑘= 𝑘and ‖𝑇−𝑇𝑘‖ = 𝑠𝑘+1.
Proof
If 𝑣∈𝑉then
∥(𝑇−𝑇𝑘)𝑣∥2 = ∥𝑠𝑘+1⟨𝑣, 𝑒𝑘+1⟩𝑓𝑘+1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑓𝑚∥2
= 𝑠𝑘+1
2 ∣⟨𝑣, 𝑒𝑘+1⟩∣2 + ⋯+ 𝑠𝑚
2 ∣⟨𝑣, 𝑒𝑚⟩∣2
≤𝑠𝑘+1
2(∣⟨𝑣, 𝑒𝑘+1⟩∣2 + ⋯+ ∣⟨𝑣, 𝑒𝑚⟩∣2)
≤𝑠𝑘+1
2 ‖𝑣‖2.
Thus ‖𝑇−𝑇𝑘‖ ≤𝑠𝑘+1. The equation (𝑇−𝑇𝑘)𝑒𝑘+1 = 𝑠𝑘+1 𝑓𝑘+1 now shows that
‖𝑇−𝑇𝑘‖ = 𝑠𝑘+1.
Suppose 𝑆∈ℒ(𝑉, 𝑊) and dim range 𝑆≤𝑘. Thus 𝑆𝑒1, … , 𝑆𝑒𝑘+1, which is a
list of length 𝑘+ 1, is linearly dependent. Hence there exist 𝑎1, … , 𝑎𝑘+1 ∈𝐅, not
all 0, such that
𝑎1𝑆𝑒1 + ⋯+ 𝑎𝑘+1𝑆𝑒𝑘+1 = 0.
Now 𝑎1𝑒1 + ⋯+ 𝑎𝑘+1𝑒𝑘+1 ≠0 because 𝑎1, … , 𝑎𝑘+1 are not all 0. We have
∥(𝑇−𝑆)(𝑎1𝑒1 + ⋯+ 𝑎𝑘+1𝑒𝑘+1)∥2 = ∥𝑇(𝑎1𝑒1 + ⋯+ 𝑎𝑘+1𝑒𝑘+1)∥2
= ‖𝑠1𝑎1 𝑓1 + ⋯+ 𝑠𝑘+1𝑎𝑘+1 𝑓𝑘+1‖2
= 𝑠1
2 |𝑎1|2 + ⋯+ 𝑠𝑘+1
2 |𝑎𝑘+1|2
≥𝑠𝑘+1
2(|𝑎1|2 + ⋯+ |𝑎𝑘+1|2)
= 𝑠𝑘+1
2 ‖𝑎1𝑒1 + ⋯+ 𝑎𝑘+1𝑒𝑘+1‖2.
Because 𝑎1𝑒1 + ⋯+ 𝑎𝑘+1𝑒𝑘+1 ≠0, the inequality above implies that
‖𝑇−𝑆‖ ≥𝑠𝑘+1.
Thus 𝑆= 𝑇𝑘minimizes ‖𝑇−𝑆‖ among 𝑆∈ℒ(𝑉, 𝑊) with dim range 𝑆≤𝑘.
For other examples of the use of the singular value decomposition in best
approximation, see Exercise 22, which finds a subspace of given dimension on
which the restriction of a linear map is as small as possible, and Exercise 27,
which finds a unitary operator that is as close as possible to a given operator.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7F
Consequences of Singular Value Decomposition
Polar Decomposition
Recall our discussion before 7.54 of the analogy between complex numbers 𝑧
with |𝑧| = 1 and unitary operators. Continuing with this analogy, note that every
complex number 𝑧except 0 can be written in the form
𝑧= ( 𝑧
|𝑧|)|𝑧|
= ( 𝑧
|𝑧|)√𝑧𝑧,
where the first factor, namely, 𝑧/|𝑧|, has absolute value 1.
Our analogy leads us to guess that every operator 𝑇∈ℒ(𝑉) can be written as
a unitary operator times √𝑇∗𝑇. That guess is indeed correct. The corresponding
result is called the polar decomposition, which gives a beautiful description of an
arbitrary operator on 𝑉.
Note that if 𝑇∈ℒ(𝑉), then 𝑇∗𝑇is a positive operator [as was shown in
7.64(a)]. Thus the operator √𝑇∗𝑇makes sense and is well defined as a positive
operator on 𝑉.
The polar decomposition that we are about to state and prove says that every
operator on 𝑉is the product of a unitary operator and a positive operator. Thus
we can write an arbitrary operator on 𝑉as the product of two nice operators,
each of which comes from a class that we can completely describe and that we
understand reasonably well. The unitary operators are described by 7.55 if 𝐅= 𝐂;
the positive operators are described by the real and complex spectral theorems
(7.29 and 7.31).
Specifically, consider the case 𝐅= 𝐂, and suppose
𝑇= 𝑆√𝑇∗𝑇
is a polar decomposition of an operator 𝑇∈ℒ(𝑉), where 𝑆is a unitary operator.
Then there is an orthonormal basis of 𝑉with respect to which 𝑆has a diagonal
matrix, and there is an orthonormal basis of 𝑉with respect to which √𝑇∗𝑇has
a diagonal matrix. Warning: There may not exist an orthonormal basis that
simultaneously puts the matrices of both 𝑆and √𝑇∗𝑇into these nice diagonal
forms—𝑆may require one orthonormal basis and √𝑇∗𝑇may require a different
orthonormal basis.
However (still assuming that 𝐅= 𝐂), if 𝑇is normal, then an orthonormal
basis of 𝑉can be chosen such that both 𝑆and √𝑇∗𝑇have diagonal matrices with
respect to this basis—see Exercise 31. The converse is also true: If 𝑇∈ℒ(𝑉)
and 𝑇= 𝑆√𝑇∗𝑇for some unitary operator 𝑆∈ℒ(𝑉) such that 𝑆and √𝑇∗𝑇both
have diagonal matrices with respect to the same orthonormal basis of 𝑉, then 𝑇
is normal. This holds because 𝑇then has a diagonal matrix with respect to this
same orthonormal basis, which implies that 𝑇is normal [by the equivalence of
(c) and (a) in 7.31].
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
The polar decomposition below is valid on both real and complex inner product
spaces and for all operators on those spaces.
7.93
polar decomposition
Suppose 𝑇∈ℒ(𝑉). Then there exists a unitary operator 𝑆∈ℒ(𝑉) such that
𝑇= 𝑆√𝑇∗𝑇.
Proof
Let 𝑠1, … , 𝑠𝑚be the positive singular values of 𝑇, and let 𝑒1, … , 𝑒𝑚and
𝑓1, … , 𝑓𝑚be orthonormal lists in 𝑉such that
7.94
𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑓𝑚
for every 𝑣∈𝑉. Extend 𝑒1, … , 𝑒𝑚and 𝑓1, … , 𝑓𝑚to orthonormal bases 𝑒1, … , 𝑒𝑛
and 𝑓1, … , 𝑓𝑛of 𝑉.
Define 𝑆∈ℒ(𝑉) by
𝑆𝑣= ⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ ⟨𝑣, 𝑒𝑛⟩𝑓𝑛
for each 𝑣∈𝑉. Then
‖𝑆𝑣‖2 = ∥⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ ⟨𝑣, 𝑒𝑛⟩𝑓𝑛∥2
= ∣⟨𝑣, 𝑒1⟩∣2 + ⋯+ ∣⟨𝑣, 𝑒𝑛⟩∣2
= ‖𝑣‖2.
Thus 𝑆is a unitary operator.
Applying 𝑇∗to both sides of 7.94 and then using the formula for 𝑇∗given by
7.77 shows that
𝑇∗𝑇𝑣= 𝑠1
2⟨𝑣, 𝑒1⟩𝑒1 + ⋯+ 𝑠𝑚
2⟨𝑣, 𝑒𝑚⟩𝑒𝑚
for every 𝑣∈𝑉. Thus if 𝑣∈𝑉, then
√𝑇∗𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑒1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑒𝑚
because the operator that sends 𝑣to the right side of the equation above is a
positive operator whose square equals 𝑇∗𝑇. Now
𝑆√𝑇∗𝑇𝑣= 𝑆(𝑠1⟨𝑣, 𝑒1⟩𝑒1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑒𝑚)
= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑓𝑚
= 𝑇𝑣,
where the last equation follows from 7.94.
Exercise 27 shows that the unitary operator 𝑆produced in the proof above is
as close as a unitary operator can be to 𝑇.
Alternative proofs of the polar decomposition directly use the spectral theorem,
avoiding the singular value decomposition. However, the proof above seems
cleaner than those alternative proofs.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7F
Consequences of Singular Value Decomposition
Operators Applied to Ellipsoids and Parallelepipeds
7.95
definition: ball, 𝐵
The ball in 𝑉of radius 1 centered at 0, denoted by 𝐵, is defined by
𝐵= {𝑣∈𝑉∶‖𝑣‖ < 1}.
The ball 𝐵in 𝐑2.
If dim 𝑉= 2, the word disk is sometimes used instead of
ball. However, using ball in all dimensions is less confusing.
Similarly, if dim 𝑉= 2, then the word ellipse is sometimes
used instead of the word ellipsoid that we are about to define.
Again, using ellipsoid in all dimensions is less confusing.
You can think of the ellipsoid defined below as obtained
by starting with the ball 𝐵and then stretching by a factor of
𝑠𝑘along each 𝑓𝑘-axis.
7.96
definition: ellipsoid, 𝐸(𝑠1 𝑓1, … , 𝑠𝑛𝑓𝑛), principal axes
Suppose that 𝑓1, … , 𝑓𝑛is an orthonormal basis of 𝑉and 𝑠1, … , 𝑠𝑛are positive
numbers. The ellipsoid 𝐸(𝑠1 𝑓1, … , 𝑠𝑛𝑓𝑛) with principal axes 𝑠1 𝑓1, … , 𝑠𝑛𝑓𝑛is
defined by
𝐸(𝑠1 𝑓1, … , 𝑠𝑛𝑓𝑛) = {𝑣∈𝑉∶|⟨𝑣, 𝑓1⟩|2
𝑠12
+ ⋯+ |⟨𝑣, 𝑓𝑛⟩|2
𝑠𝑛2
< 1}.
The ellipsoid notation 𝐸(𝑠1 𝑓1, … , 𝑠𝑛𝑓𝑛) does not explicitly include the inner
product space 𝑉, even though the definition above depends on 𝑉. However,
the inner product space 𝑉should be clear from the context and also from the
requirement that 𝑓1, … , 𝑓𝑛be an orthonormal basis of 𝑉.
7.97
example: ellipsoids
The ellipsoid 𝐸(2 𝑓1, 𝑓2) in 𝐑2, where
𝑓1, 𝑓2 is the standard basis of 𝐑2.
The ellipsoid 𝐸(2 𝑓1, 𝑓2) in 𝐑2, where
𝑓1 = ( 1
√2,
√2) and 𝑓2 = (−1
√2,
√2).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
The ellipsoid
𝐸(4 𝑓1, 3 𝑓2, 2 𝑓3) in 𝐑3,
where 𝑓1, 𝑓2, 𝑓3 is the
standard basis of 𝐑3.
The ellipsoid 𝐸( 𝑓1, … , 𝑓𝑛) equals the ball 𝐵in 𝑉for every orthonormal basis
𝑓1, … , 𝑓𝑛of 𝑉[by Parseval’s identity 6.30(b)].
7.98
notation: 𝑇(Ω)
For 𝑇a function defined on 𝑉and Ω ⊆𝑉, define 𝑇(Ω) by
𝑇(Ω) = {𝑇𝑣∶𝑣∈Ω}.
Thus if 𝑇is a function defined on 𝑉, then 𝑇(𝑉) = range 𝑇.
The next result states that every invertible operator 𝑇∈ℒ(𝑉) maps the ball
𝐵in 𝑉onto an ellipsoid in 𝑉. The proof shows that the principal axes of this
ellipsoid come from the singular value decomposition of 𝑇.
7.99
invertible operator takes ball to ellipsoid
Suppose 𝑇∈ℒ(𝑉) is invertible. Then 𝑇maps the ball 𝐵in 𝑉onto an ellipsoid
in 𝑉.
Proof
Suppose 𝑇has singular value decomposition
7.100
𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑛⟨𝑣, 𝑒𝑛⟩𝑓𝑛
for all 𝑣∈𝑉; here 𝑠1, … , 𝑠𝑛are the singular values of 𝑇and 𝑒1, … , 𝑒𝑛and 𝑓1, … , 𝑓𝑛
are both orthonormal bases of 𝑉. We will show that 𝑇(𝐵) = 𝐸(𝑠1 𝑓1, … , 𝑠𝑛𝑓𝑛).
First suppose 𝑣∈𝐵. Because 𝑇is invertible, none of the singular values
𝑠1, … , 𝑠𝑛equals 0 (see 7.68). Thus 7.100 implies that
∣⟨𝑇𝑣, 𝑓1⟩∣2
𝑠12
+ ⋯+ ∣⟨𝑇𝑣, 𝑓𝑛⟩∣2
𝑠𝑛2
= |⟨𝑣, 𝑒1⟩|2 + ⋯+ |⟨𝑣, 𝑒𝑛⟩|2 < 1.
Thus 𝑇𝑣∈𝐸(𝑠1 𝑓1, … , 𝑠𝑛𝑓𝑛). Hence 𝑇(𝐵) ⊆𝐸(𝑠1 𝑓1, … , 𝑠𝑛𝑓𝑛).
To prove inclusion in the other direction, now suppose 𝑤∈𝐸(𝑠1 𝑓1, … , 𝑠𝑛𝑓𝑛).
Let
𝑣= ⟨𝑤, 𝑓1⟩
𝑠1
𝑒1 + ⋯+ ⟨𝑤, 𝑓𝑛⟩
𝑠𝑛
𝑒𝑛.
Then ‖𝑣‖ < 1 and 7.100 implies that 𝑇𝑣= ⟨𝑤, 𝑓1⟩𝑓1 + ⋯+ ⟨𝑤, 𝑓𝑛⟩𝑓𝑛= 𝑤. Thus
𝑇(𝐵) ⊇𝐸(𝑠1 𝑓1, … , 𝑠𝑛𝑓𝑛).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7F
Consequences of Singular Value Decomposition
We now use the previous result to show that invertible operators take all
ellipsoids, not just the ball of radius 1, to ellipsoids.
7.101
invertible operator takes ellipsoids to ellipsoids
Suppose 𝑇∈ℒ(𝑉) is invertible and 𝐸is an ellipsoid in 𝑉. Then 𝑇(𝐸) is an
ellipsoid in 𝑉.
Proof
There exist an orthonormal basis 𝑓1, … , 𝑓𝑛of 𝑉and positive numbers
𝑠1, … , 𝑠𝑛such that 𝐸= 𝐸(𝑠1 𝑓1, … , 𝑠𝑛𝑓𝑛). Define 𝑆∈ℒ(𝑉) by
𝑆(𝑎1 𝑓1 + ⋯+ 𝑎𝑛𝑓𝑛) = 𝑎1𝑠1 𝑓1 + ⋯+ 𝑎𝑛𝑠𝑛𝑓𝑛.
Then 𝑆maps the ball 𝐵of 𝑉onto 𝐸, as you can verify. Thus
𝑇(𝐸) = 𝑇(𝑆(𝐵)) = (𝑇𝑆)(𝐵).
The equation above and 7.99, applied to 𝑇𝑆, show that 𝑇(𝐸) is an ellipsoid in 𝑉.
Recall (see 3.95) that if 𝑢∈𝑉and Ω ⊆𝑉then 𝑢+ Ω is defined by
𝑢+ Ω = {𝑢+ 𝑤∶𝑤∈Ω}.
Geometrically, the sets Ω and 𝑢+ Ω look the same, but they are in different
locations.
In the following definition, if dim 𝑉= 2 then the word parallelogram is often
used instead of parallelepiped.
7.102
definition: 𝑃(𝑣1, … , 𝑣𝑛), parallelepiped
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉. Let
𝑃(𝑣1, … , 𝑣𝑛) = {𝑎1𝑣1 + ⋯+ 𝑎𝑛𝑣𝑛∶𝑎1, … , 𝑎𝑛∈(0, 1)}.
A parallelepiped is a set of the form 𝑢+ 𝑃(𝑣1, … , 𝑣𝑛) for some 𝑢∈𝑉. The
vectors 𝑣1, … , 𝑣𝑛are called the edges of this parallelepiped.
7.103
example: parallelepipeds
The parallelepiped
(0.3, 0.5) + 𝑃((1, 0), (1, 1)) in 𝐑2.
A parallelepiped in 𝐑3.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
7.104
invertible operator takes parallelepipeds to parallelepipeds
Suppose 𝑢∈𝑉, 𝑣1, … , 𝑣𝑛is a basis of 𝑉, and 𝑇∈ℒ(𝑉) is invertible. Then
𝑇(𝑢+ 𝑃(𝑣1, … , 𝑣𝑛)) = 𝑇𝑢+ 𝑃(𝑇𝑣1, … , 𝑇𝑣𝑛).
Proof
Because 𝑇is invertible, the list 𝑇𝑣1, … , 𝑇𝑣𝑛is a basis of 𝑉. The linearity
of 𝑇implies that
𝑇(𝑢+ 𝑎1𝑣1 + ⋯+ 𝑎𝑛𝑣𝑛) = 𝑇𝑢+ 𝑎1𝑇𝑣1 + ⋯+ 𝑎𝑛𝑇𝑣𝑛
for all 𝑎1, … , 𝑎𝑛∈(0, 1). Thus 𝑇(𝑢+ 𝑃(𝑣1, … , 𝑣𝑛)) = 𝑇𝑢+ 𝑃(𝑇𝑣1, … , 𝑇𝑣𝑛).
Just as the rectangles are distinguished among the parallelograms in 𝐑2, we
give a special name to the parallelepipeds in 𝑉whose defining edges are orthogo-
nal to each other.
7.105
definition: box
A box in 𝑉is a set of the form
𝑢+ 𝑃(𝑟1𝑒1, … , 𝑟𝑛𝑒𝑛),
where 𝑢∈𝑉and 𝑟1, … , 𝑟𝑛are positive numbers and 𝑒1, … , 𝑒𝑛is an ortho-
normal basis of 𝑉.
Note that in the special case of 𝐑2 each box is a rectangle, but the terminology
box can be used in all dimensions.
7.106
example: boxes
The box (1, 0) + 𝑃(√2 𝑒1, √2 𝑒2), where
𝑒1 = ( 1
√2,
√2) and 𝑒2 = (−1
√2,
√2).
The box 𝑃(𝑒1, 2𝑒2, 𝑒3), where 𝑒1, 𝑒2, 𝑒3
is the standard basis of 𝐑3.
Suppose 𝑇∈ℒ(𝑉) is invertible. Then 𝑇maps every parallelepiped in 𝑉
to a parallelepiped in 𝑉(by 7.104). In particular, 𝑇maps every box in 𝑉to a
parallelepiped in 𝑉. This raises the question of whether 𝑇maps some boxes in
𝑉to boxes in 𝑉. The following result answers this question, with the help of the
singular value decomposition.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7F
Consequences of Singular Value Decomposition
7.107
every invertible operator takes some boxes to boxes
Suppose 𝑇∈ℒ(𝑉) is invertible. Suppose 𝑇has singular value decomposition
𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑛⟨𝑣, 𝑒𝑛⟩𝑓𝑛,
where 𝑠1, … , 𝑠𝑛are the singular values of 𝑇and 𝑒1, … , 𝑒𝑛and 𝑓1, … , 𝑓𝑛are
orthonormal bases of 𝑉and the equation above holds for all 𝑣∈𝑉. Then 𝑇
maps the box 𝑢+ 𝑃(𝑟1𝑒1, … , 𝑟𝑛𝑒𝑛) onto the box 𝑇𝑢+ 𝑃(𝑟1𝑠1 𝑓1, … , 𝑟𝑛𝑠𝑛𝑓𝑛) for
all positive numbers 𝑟1, … , 𝑟𝑛and all 𝑢∈𝑉.
Proof
If 𝑎1, … , 𝑎𝑛∈(0, 1) and 𝑟1, … , 𝑟𝑛are positive numbers and 𝑢∈𝑉, then
𝑇(𝑢+ 𝑎1𝑟1𝑒1 + ⋯+ 𝑎𝑛𝑟𝑛𝑒𝑛) = 𝑇𝑢+ 𝑎1𝑟1𝑠1 𝑓1 + ⋯+ 𝑎𝑛𝑟𝑛𝑠𝑛𝑓𝑛.
Thus 𝑇(𝑢+ 𝑃(𝑟1𝑒1, … , 𝑟𝑛𝑒𝑛)) = 𝑇𝑢+ 𝑃(𝑟1𝑠1 𝑓1, … , 𝑟𝑛𝑠𝑛𝑓𝑛).
Volume via Singular Values
Our goal in this subsection is to understand how an operator changes the volume
of subsets of its domain. Because notions of volume belong to analysis rather
than to linear algebra, we will work only with an intuitive notion of volume. Our
intuitive approach to volume can be converted into appropriate correct definitions,
correct statements, and correct proofs using the machinery of analysis.
Our intuition about volume works best in real inner product spaces. Thus the
assumption that 𝐅= 𝐑will appear frequently in the rest of this subsection.
If dim 𝑉= 𝑛, then by volume we will mean 𝑛-dimensional volume. You
should be familiar with this concept in 𝐑3. When 𝑛= 2, this is usually called area
instead of volume, but for consistency we use the word volume in all dimensions.
The most fundamental intuition about volume is that the volume of a box (whose
defining edges are by definition orthogonal to each other) is the product of the
lengths of the defining edges. Thus we make the following definition.
7.108
definition: volume of a box
Suppose 𝐅= 𝐑. If 𝑢∈𝑉and 𝑟1, … , 𝑟𝑛are positive numbers and 𝑒1, … , 𝑒𝑛is
an orthonormal basis of 𝑉, then
volume(𝑢+ 𝑃(𝑟1𝑒1, … , 𝑟𝑛𝑒𝑛)) = 𝑟1 × ⋯× 𝑟𝑛.
The definition above agrees with the familiar formulas for the area (which we
are calling the volume) of a rectangle in 𝐑2 and for the volume of a box in 𝐑3. For
example, the first box in Example 7.106 has two-dimensional volume (or area) 2
because the defining edges of that box have length √2 and √2. The second box
in Example 7.106 has three-dimensional volume 2 because the defining edges of
that box have length 1, 2, and 1.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Volume of this
ball ≈sum of the
volumes of the
five boxes.
To define the volume of a subset of 𝑉, approximate the
subset by a finite collection of disjoint boxes, and then add up
the volumes of the approximating collection of boxes. As we
approximate a subset of 𝑉more accurately by disjoint unions
of more boxes, we get a better approximation to the volume.
These ideas should remind you of how the Riemann integral
is defined by approximating the area under a curve by a disjoint
collection of rectangles. This discussion leads to the following
nonrigorous but intuitive definition.
7.109
definition: volume
Suppose 𝐅= 𝐑and Ω ⊆𝑉. Then the volume of Ω, denoted by volume Ω, is
approximately the sum of the volumes of a collection of disjoint boxes that
approximate Ω.
We are ignoring many reasonable questions by taking an intuitive approach to
volume. For example, if we approximate Ω by boxes with respect to one basis,
do we get the same volume if we approximate Ω by boxes with respect to a
different basis? If Ω1 and Ω2 are disjoint subsets of 𝑉, is volume(Ω1 ∪Ω2) =
volume Ω1 + volume Ω2? Provided that we consider only reasonably nice subsets
of 𝑉, techniques of analysis show that both these questions have affirmative
answers that agree with our intuition about volume.
7.110
example: volume change by a linear map
Each box here has twice the width
and the same height as the boxes in
the previous figure.
Suppose that 𝑇∈ℒ(𝐑2) is defined by
𝑇𝑣= 2⟨𝑣, 𝑒1⟩𝑒1 + ⟨𝑣, 𝑒2⟩𝑒2, where 𝑒1, 𝑒2 is the
standard basis of 𝐑2. This linear map stretches
vectors along the 𝑒1-axis by a factor of 2 and
leaves vectors along the 𝑒2-axis unchanged.
The ball approximated by five boxes above
gets mapped by 𝑇to the ellipsoid shown here.
Each of the five boxes in the original figure
gets mapped to a box of twice the width and the same height as in the original
figure. Hence each box gets mapped to a box of twice the volume (area) as in the
original figure. The sum of the volumes of the five new boxes approximates the
volume of the ellipsoid. Thus 𝑇changes the volume of the ball by a factor of 2.
In the example above, 𝑇maps boxes with respect to the basis 𝑒1, 𝑒2 to boxes
with respect to the same basis; thus we can see how 𝑇changes volume. In general,
an operator maps boxes to parallelepipeds that are not boxes. However, if we
choose the right basis (coming from the singular value decomposition!), then
boxes with respect to that basis get mapped to boxes with respect to a possibly
different basis, as shown in 7.107. This observation leads to a natural proof of
the following result.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7F
Consequences of Singular Value Decomposition
7.111
volume changes by a factor of the product of the singular values
Suppose 𝐅= 𝐑, 𝑇∈ℒ(𝑉) is invertible, and Ω ⊆𝑉. Then
volume 𝑇(Ω) = (product of singular values of 𝑇)(volume Ω).
Proof
Suppose 𝑇has singular value decomposition
𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑛⟨𝑣, 𝑒𝑛⟩𝑓𝑛
for all 𝑣∈𝑉, where 𝑒1, … , 𝑒𝑛and 𝑓1, … , 𝑓𝑛are orthonormal bases of 𝑉.
Approximate Ω by boxes of the form 𝑢+ 𝑃(𝑟1𝑒1, … , 𝑟𝑛𝑒𝑛), which have volume
𝑟1 × ⋯× 𝑟𝑛. The operator 𝑇maps each box 𝑢+ 𝑃(𝑟1𝑒1, … , 𝑟𝑛𝑒𝑛) onto the box
𝑇𝑢+ 𝑃(𝑟1𝑠1 𝑓1, … , 𝑟𝑛𝑠𝑛𝑓𝑛), which has volume (𝑠1 × ⋯× 𝑠𝑛)(𝑟1 × ⋯× 𝑟𝑛).
The operator 𝑇maps a collection of boxes that approximate Ω onto a collection
of boxes that approximate 𝑇(Ω). Because 𝑇changes the volume of each box in a
collection that approximates Ω by a factor of 𝑠1 ×⋯×𝑠𝑛, the linear map 𝑇changes
the volume of Ω by the same factor.
Suppose 𝑇∈ℒ(𝑉). As we will see when we get to determinants, the product
of the singular values of 𝑇equals |det 𝑇|; see 9.60 and 9.61.
Properties of an Operator as Determined by Its Eigenvalues
We conclude this chapter by presenting the table below. The context of this
table is a finite-dimensional complex inner product space. The first column of
the table shows a property that a normal operator on such a space might have.
The second column of the table shows a subset of 𝐂such that the operator has
the corresponding property if and only if all eigenvalues of the operator lie in
the specified subset. For example, the first row of the table states that a normal
operator is invertible if and only if all its eigenvalues are nonzero (this first row
is the only one in the table that does not need the hypothesis that the operator is
normal).
Make sure you can explain why all results in the table hold. For example,
the last row of the table holds because the norm of an operator equals its largest
singular value (by 7.85) and the singular values of a normal operator, assuming
𝐅= 𝐂, equal the absolute values of the eigenvalues (by Exercise 7 in Section 7E).
properties of a normal operator
eigenvalues are contained in
invertible
𝐂\{0}
self-adjoint
𝐑
skew
{𝜆∈𝐂∶Re 𝜆= 0}
orthogonal projection
{0, 1}
positive
[0, ∞)
unitary
{𝜆∈𝐂∶|𝜆| = 1}
norm is less than 1
{𝜆∈𝐂∶|𝜆| < 1}
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Exercises 7F
Prove that if 𝑆, 𝑇∈ℒ(𝑉, 𝑊), then ∣‖𝑆‖ −‖𝑇‖ ∣≤‖𝑆−𝑇‖.
The inequality above is called the reverse triangle inequality.
Suppose that 𝑇∈ℒ(𝑉) is self-adjoint or that 𝐅= 𝐂and 𝑇∈ℒ(𝑉) is
normal. Prove that
‖𝑇‖ = max{|𝜆| ∶𝜆is an eigenvalue of 𝑇}.
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑣∈𝑉. Prove that
‖𝑇𝑣‖ = ‖𝑇‖ ‖𝑣‖ ⟺𝑇∗𝑇𝑣= ‖𝑇‖2𝑣.
Suppose 𝑇∈ℒ(𝑉, 𝑊), 𝑣∈𝑉, and ‖𝑇𝑣‖ = ‖𝑇‖ ‖𝑣‖. Prove that if 𝑢∈𝑉and
⟨𝑢, 𝑣⟩= 0, then ⟨𝑇𝑢, 𝑇𝑣⟩= 0.
Suppose 𝑈is a finite-dimensional inner product space, 𝑇∈ℒ(𝑉, 𝑈), and
𝑆∈ℒ(𝑈, 𝑊). Prove that
‖𝑆𝑇‖ ≤‖𝑆‖ ‖𝑇‖.
Prove or give a counterexample: If 𝑆, 𝑇∈ℒ(𝑉), then ‖𝑆𝑇‖ = ‖𝑇𝑆‖.
Show that defining 𝑑(𝑆, 𝑇) = ‖𝑆−𝑇‖ for 𝑆, 𝑇∈ℒ(𝑉, 𝑊) makes 𝑑a metric
on ℒ(𝑉, 𝑊).
This exercise is intended for readers who are familiar with metric spaces.
(a) Prove that if 𝑇∈ℒ(𝑉) and ‖𝐼−𝑇‖ < 1, then 𝑇is invertible.
(b) Suppose that 𝑆∈ℒ(𝑉) is invertible. Prove that if 𝑇∈ℒ(𝑉) and
‖𝑆−𝑇‖ < 1/∥𝑆−1∥, then 𝑇is invertible.
This exercise shows that the set of invertible operators in ℒ(𝑉) is an open
subset of ℒ(𝑉), using the metric defined in Exercise 7.
Suppose 𝑇∈ℒ(𝑉). Prove that for every 𝜖> 0, there exists an invertible
operator 𝑆∈ℒ(𝑉) such that 0 < ‖𝑇−𝑆‖ < 𝜖.
Suppose dim 𝑉> 1 and 𝑇∈ℒ(𝑉) is not invertible. Prove that for every
𝜖> 0, there exists 𝑆∈ℒ(𝑉) such that 0 < ‖𝑇−𝑆‖ < 𝜖and 𝑆is not
invertible.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Prove that for every 𝜖> 0 there exists a
diagonalizable operator 𝑆∈ℒ(𝑉) such that 0 < ‖𝑇−𝑆‖ < 𝜖.
Suppose 𝑇∈ℒ(𝑉) is a positive operator. Show that ∥√𝑇∥= √‖𝑇‖.
Suppose 𝑆, 𝑇∈ℒ(𝑉) are positive operators. Show that
‖𝑆−𝑇‖ ≤max{‖𝑆‖, ‖𝑇‖} ≤‖𝑆+ 𝑇‖.
Suppose 𝑈and 𝑊are subspaces of 𝑉such that ‖𝑃𝑈−𝑃𝑊‖ < 1. Prove that
dim 𝑈= dim 𝑊.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 7F
Consequences of Singular Value Decomposition
Define 𝑇∈ℒ(𝐅3) by
𝑇(𝑧1, 𝑧2, 𝑧3) = (𝑧3, 2𝑧1, 3𝑧2).
Find (explicitly) a unitary operator 𝑆∈ℒ(𝐅3) such that 𝑇= 𝑆√𝑇∗𝑇.
Suppose 𝑆∈ℒ(𝑉) is a positive invertible operator. Prove that there exists
𝛿> 0 such that 𝑇is a positive operator for every self-adjoint operator
𝑇∈ℒ(𝑉) with ‖𝑆−𝑇‖ < 𝛿.
Prove that if 𝑢∈𝑉and 𝜑𝑢is the linear functional on 𝑉defined by the
equation 𝜑𝑢(𝑣) = ⟨𝑣, 𝑢⟩, then ‖𝜑𝑢‖ = ‖𝑢‖.
Here we are thinking of the scalar field 𝐅as an inner product space with
⟨𝛼, 𝛽⟩= 𝛼𝛽for all 𝛼, 𝛽∈𝐅. Thus ‖𝜑𝑢‖ means the norm of 𝜑𝑢as a linear
map from 𝑉to 𝐅.
Suppose 𝑒1, … , 𝑒𝑛is an orthonormal basis of 𝑉and 𝑇∈ℒ(𝑉, 𝑊).
(a) Prove that max{‖𝑇𝑒1‖, … , ‖𝑇𝑒𝑛‖} ≤‖𝑇‖ ≤(‖𝑇𝑒1‖2 + ⋯+ ‖𝑇𝑒𝑛‖2)1/2.
(b) Prove that ‖𝑇‖ = (‖𝑇𝑒1‖2+⋯+‖𝑇𝑒𝑛‖2)1/2 if and only if dim range 𝑇≤1.
Here 𝑒1, … , 𝑒𝑛is an arbitrary orthonormal basis of 𝑉, not necessarily
connected with a singular value decomposition of 𝑇. If 𝑠1, … , 𝑠𝑛is the list
of singular values of 𝑇, then the right side of the inequality above equals
(𝑠1
2 + ⋯+ 𝑠𝑛
2)1/2, as was shown in Exercise 11(a) in Section 7E.
Prove that if 𝑇∈ℒ(𝑉, 𝑊), then ∥𝑇∗𝑇∥= ‖𝑇‖2.
This formula for ∥𝑇∗𝑇∥leads to the important subject of 𝐶∗-algebras.
Suppose 𝑇∈ℒ(𝑉) is normal. Prove that ∥𝑇𝑘∥= ‖𝑇‖𝑘for every positive
integer 𝑘.
Suppose dim 𝑉> 1 and dim 𝑊> 1. Prove that the norm on ℒ(𝑉, 𝑊) does
not come from an inner product. In other words, prove that there does not
exist an inner product on ℒ(𝑉, 𝑊) such that
max{‖𝑇𝑣‖ ∶𝑣∈𝑉and ‖𝑣‖ ≤1} = √⟨𝑇, 𝑇⟩
for all 𝑇∈ℒ(𝑉, 𝑊).
Suppose 𝑇∈ℒ(𝑉, 𝑊). Let 𝑛= dim 𝑉and let 𝑠1 ≥⋯≥𝑠𝑛denote the
singular values of 𝑇. Prove that if 1 ≤𝑘≤𝑛, then
min{‖𝑇|𝑈‖ ∶𝑈is a subspace of 𝑉with dim 𝑈= 𝑘} = 𝑠𝑛−𝑘+1.
Suppose 𝑇∈ℒ(𝑉, 𝑊). Show that 𝑇is uniformly continuous with respect
to the metrics on 𝑉and 𝑊that arise from the norms on those spaces (see
Exercise 23 in Section 6B).
Suppose 𝑇∈ℒ(𝑉) is invertible. Prove that
∥𝑇−1∥= ‖𝑇‖−1 ⟺
𝑇
‖𝑇‖ is a unitary operator.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 7
Operators on Inner Product Spaces
Fix 𝑢, 𝑥∈𝑉with 𝑢≠0. Define 𝑇∈ℒ(𝑉) by 𝑇𝑣= ⟨𝑣, 𝑢⟩𝑥for every
𝑣∈𝑉. Prove that
√𝑇∗𝑇𝑣= ‖𝑥‖
‖𝑢‖⟨𝑣, 𝑢⟩𝑢
for every 𝑣∈𝑉.
Suppose 𝑇∈ℒ(𝑉). Prove that 𝑇is invertible if and only if there exists a
unique unitary operator 𝑆∈ℒ(𝑉) such that 𝑇= 𝑆√𝑇∗𝑇.
Suppose 𝑇∈ℒ(𝑉) and 𝑠1, … , 𝑠𝑛are the singular values of 𝑇. Let 𝑒1, … , 𝑒𝑛
and 𝑓1, … , 𝑓𝑛be orthonormal bases of 𝑉such that
𝑇𝑣= 𝑠1⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ 𝑠𝑛⟨𝑣, 𝑒𝑛⟩𝑓𝑛
for all 𝑣∈𝑉. Define 𝑆∈ℒ(𝑉) by
𝑆𝑣= ⟨𝑣, 𝑒1⟩𝑓1 + ⋯+ ⟨𝑣, 𝑒𝑛⟩𝑓𝑛.
(a) Show that 𝑆is unitary and ‖𝑇−𝑆‖ = max{|𝑠1 −1|, … , |𝑠𝑛−1|}.
(b) Show that if 𝐸∈ℒ(𝑉) is unitary, then ‖𝑇−𝐸‖ ≥‖𝑇−𝑆‖.
This exercise finds a unitary operator 𝑆that is as close as possible (among
the unitary operators) to a given operator 𝑇.
Suppose 𝑇∈ℒ(𝑉). Prove that there exists a unitary operator 𝑆∈ℒ(𝑉)
such that 𝑇= √𝑇𝑇∗𝑆.
Suppose 𝑇∈ℒ(𝑉).
(a) Use the polar decomposition to show that there exists a unitary operator
𝑆∈ℒ(𝑉) such that 𝑇𝑇∗= 𝑆𝑇∗𝑇𝑆∗.
(b) Show how (a) implies that 𝑇and 𝑇∗have the same singular values.
Suppose 𝑇∈ℒ(𝑉), 𝑆∈ℒ(𝑉) is a unitary operator, and 𝑅∈ℒ(𝑉) is a
positive operator such that 𝑇= 𝑆𝑅. Prove that 𝑅= √𝑇∗𝑇.
This exercise shows that if we write 𝑇as the product of a unitary operator
and a positive operator (as in the polar decomposition 7.93), then the
positive operator equals √𝑇∗𝑇.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉) is normal. Prove that there exists a unitary
operator 𝑆∈ℒ(𝑉) such that 𝑇= 𝑆√𝑇∗𝑇and such that 𝑆and √𝑇∗𝑇both
have diagonal matrices with respect to the same orthonormal basis of 𝑉.
Suppose that 𝑇∈ℒ(𝑉, 𝑊) and 𝑇≠0. Let 𝑠1, … , 𝑠𝑚denote the positive
singular values of 𝑇. Show that there exists an orthonormal basis 𝑒1, … , 𝑒𝑚
of (null 𝑇)⟂such that
𝑇(𝐸(𝑒1
𝑠1
, … , 𝑒𝑚
𝑠𝑚
))
equals the ball in range 𝑇of radius 1 centered at 0.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 8
Operators on Complex Vector Spaces
In this chapter we delve deeper into the structure of operators, with most of the
attention on complex vector spaces. Some of the results in this chapter apply to
both real and complex vector spaces; thus we do not make a standing assumption
that 𝐅= 𝐂. Also, an inner product does not help with this material, so we return
to the general setting of a finite-dimensional vector space.
Even on a finite-dimensional complex vector space, an operator may not have
enough eigenvectors to form a basis of the vector space. Thus we will consider the
closely related objects called generalized eigenvectors. We will see that for each
operator on a finite-dimensional complex vector space, there is a basis of the vector
space consisting of generalized eigenvectors of the operator. The generalized
eigenspace decomposition then provides a good description of arbitrary operators
on a finite-dimensional complex vector space.
Nilpotent operators, which are operators that when raised to some power
equal 0, have an important role in these investigations. Nilpotent operators provide
a key tool in our proof that every invertible operator on a finite-dimensional
complex vector space has a square root and in our approach to Jordan form.
This chapter concludes by defining the trace and proving its key properties.
standing assumptions for this chapter
• 𝐅denotes 𝐑or 𝐂.
• 𝑉denotes a finite-dimensional nonzero vector space over 𝐅.
David Iliff CC BY-SA
The Long Room of the Old Library at the University of Dublin, where William Hamilton
(1805–1865) was a student and then a faculty member. Hamilton proved a special case
of what we now call the Cayley–Hamilton theorem in 1853.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 8
Operators on Complex Vector Spaces
8A Generalized Eigenvectors and Nilpotent Operators
Null Spaces of Powers of an Operator
We begin this chapter with a study of null spaces of powers of an operator.
8.1
sequence of increasing null spaces
Suppose 𝑇∈ℒ(𝑉). Then
{0} = null 𝑇0 ⊆null 𝑇1 ⊆⋯⊆null 𝑇𝑘⊆null 𝑇𝑘+1 ⊆⋯.
Proof
Suppose 𝑘is a nonnegative integer and 𝑣∈null 𝑇𝑘. Then 𝑇𝑘𝑣= 0,
which implies that 𝑇𝑘+1𝑣= 𝑇(𝑇𝑘𝑣) = 𝑇(0) = 0. Thus 𝑣∈null 𝑇𝑘+1. Hence
null 𝑇𝑘⊆null 𝑇𝑘+1, as desired.
For similar results about decreasing
sequences of ranges, see Exercises 6,
7, and 8.
The following result states that if two
consecutive terms in the sequence of sub-
spaces above are equal, then all later
terms in the sequence are equal.
8.2
equality in the sequence of null spaces
Suppose 𝑇∈ℒ(𝑉) and 𝑚is a nonnegative integer such that
null 𝑇𝑚= null 𝑇𝑚+1.
Then
null 𝑇𝑚= null 𝑇𝑚+1 = null 𝑇𝑚+2 = null 𝑇𝑚+3 = ⋯.
Proof
Let 𝑘be a positive integer. We want to prove that
null 𝑇𝑚+𝑘= null 𝑇𝑚+𝑘+1.
We already know from 8.1 that null 𝑇𝑚+𝑘⊆null 𝑇𝑚+𝑘+1.
To prove the inclusion in the other direction, suppose 𝑣∈null 𝑇𝑚+𝑘+1. Then
𝑇𝑚+1(𝑇𝑘𝑣) = 𝑇𝑚+𝑘+1𝑣= 0.
Hence
𝑇𝑘𝑣∈null 𝑇𝑚+1 = null 𝑇𝑚.
Thus 𝑇𝑚+𝑘𝑣= 𝑇𝑚(𝑇𝑘𝑣) = 0, which means that 𝑣∈null 𝑇𝑚+𝑘. This implies that
null 𝑇𝑚+𝑘+1 ⊆null 𝑇𝑚+𝑘, completing the proof.
The result above raises the question of whether there exists a nonnegative
integer 𝑚such that null 𝑇𝑚= null 𝑇𝑚+1. The next result shows that this equality
holds at least when 𝑚equals the dimension of the vector space on which 𝑇
operates.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 8A
Generalized Eigenvectors and Nilpotent Operators
8.3
null spaces stop growing
Suppose 𝑇∈ℒ(𝑉). Then
null 𝑇dim 𝑉= null 𝑇dim 𝑉+1 = null 𝑇dim 𝑉+2 = ⋯.
Proof
We only need to prove that null 𝑇dim 𝑉= null 𝑇dim 𝑉+1 (by 8.2). Suppose
this is not true. Then, by 8.1 and 8.2, we have
{0} = null 𝑇0 ⊊null 𝑇1 ⊊⋯⊊null 𝑇dim 𝑉⊊null 𝑇dim 𝑉+1,
where the symbol ⊊means “contained in but not equal to”. At each of the
strict inclusions in the chain above, the dimension increases by at least 1. Thus
dim null 𝑇dim 𝑉+1 ≥dim 𝑉+ 1, a contradiction because a subspace of 𝑉cannot
have a larger dimension than dim 𝑉.
It is not true that 𝑉= null 𝑇⊕range 𝑇for every 𝑇∈ℒ(𝑉). However, the
next result can be a useful substitute.
8.4
𝑉is the direct sum of null 𝑇dim 𝑉and range 𝑇dim 𝑉
Suppose 𝑇∈ℒ(𝑉). Then
𝑉= null 𝑇dim 𝑉⊕range 𝑇dim 𝑉.
Proof
Let 𝑛= dim 𝑉. First we show that
8.5
(null 𝑇𝑛) ∩(range 𝑇𝑛) = {0}.
Suppose 𝑣∈(null 𝑇𝑛) ∩(range 𝑇𝑛). Then 𝑇𝑛𝑣= 0, and there exists 𝑢∈𝑉
such that 𝑣= 𝑇𝑛𝑢. Applying 𝑇𝑛to both sides of the last equation shows that
𝑇𝑛𝑣= 𝑇2𝑛𝑢. Hence 𝑇2𝑛𝑢= 0, which implies that 𝑇𝑛𝑢= 0 (by 8.3). Thus
𝑣= 𝑇𝑛𝑢= 0, completing the proof of 8.5.
Now 8.5 implies that null 𝑇𝑛+ range 𝑇𝑛is a direct sum (by 1.46). Also,
dim(null 𝑇𝑛⊕range 𝑇𝑛) = dim null 𝑇𝑛+ dim range 𝑇𝑛= dim 𝑉,
where the first equality above comes from 3.94 and the second equality comes
from the fundamental theorem of linear maps (3.21). The equation above implies
that null 𝑇𝑛⊕range 𝑇𝑛= 𝑉(see 2.39), as desired.
For an improvement of the result above, see Exercise 19.
8.6
example: 𝐅3 = null 𝑇3 ⊕range 𝑇3 for 𝑇∈ℒ(𝐅3)
Suppose 𝑇∈ℒ(𝐅3) is defined by
𝑇(𝑧1, 𝑧2, 𝑧3) = (4𝑧2, 0, 5𝑧3).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 8
Operators on Complex Vector Spaces
Then null 𝑇= {(𝑧1, 0, 0) ∶𝑧1 ∈𝐅} and range 𝑇= {(𝑧1, 0, 𝑧3) ∶𝑧1, 𝑧3 ∈𝐅}. Thus
null 𝑇∩range 𝑇≠{0}. Hence null 𝑇+ range 𝑇is not a direct sum. Also note
that null 𝑇+ range 𝑇≠𝐅3. However, we have 𝑇3(𝑧1, 𝑧2, 𝑧3) = (0, 0, 125𝑧3). Thus
we see that
null 𝑇3 = {(𝑧1, 𝑧2, 0) ∶𝑧1, 𝑧2 ∈𝐅}
and
range 𝑇3 = {(0, 0, 𝑧3) ∶𝑧3 ∈𝐅}.
Hence 𝐅3 = null 𝑇3 ⊕range 𝑇3, as expected by 8.4.
Generalized Eigenvectors
Some operators do not have enough eigenvectors to lead to good descriptions of
their behavior. Thus in this subsection we introduce the concept of generalized
eigenvectors, which will play a major role in our description of the structure of an
operator.
To understand why we need more than eigenvectors, let’s examine the question
of describing an operator by decomposing its domain into invariant subspaces. Fix
𝑇∈ℒ(𝑉). We seek to describe 𝑇by finding a “nice” direct sum decomposition
𝑉= 𝑉1 ⊕⋯⊕𝑉𝑛,
where each 𝑉𝑘is a subspace of 𝑉invariant under 𝑇. The simplest possible nonzero
invariant subspaces are one-dimensional. A decomposition as above in which
each 𝑉𝑘is a one-dimensional subspace of 𝑉invariant under 𝑇is possible if and
only if 𝑉has a basis consisting of eigenvectors of 𝑇(see 5.55). This happens if
and only if 𝑉has an eigenspace decomposition
8.7
𝑉= 𝐸(𝜆1, 𝑇) ⊕⋯⊕𝐸(𝜆𝑚, 𝑇),
where 𝜆1, … , 𝜆𝑚are the distinct eigenvalues of 𝑇(see 5.55).
The spectral theorem in the previous chapter shows that if 𝑉is an inner product
space, then a decomposition of the form 8.7 holds for every self-adjoint operator
if 𝐅= 𝐑and for every normal operator if 𝐅= 𝐂because operators of those types
have enough eigenvectors to form a basis of 𝑉(see 7.29 and 7.31).
However, a decomposition of the form 8.7 may not hold for more general
operators, even on a complex vector space. An example was given by the operator
in 5.57, which does not have enough eigenvectors for 8.7 to hold. Generalized
eigenvectors and generalized eigenspaces, which we now introduce, will remedy
this situation.
8.8
definition: generalized eigenvector
Suppose 𝑇∈ℒ(𝑉) and 𝜆is an eigenvalue of 𝑇. A vector 𝑣∈𝑉is called a
generalized eigenvector of 𝑇corresponding to 𝜆if 𝑣≠0 and
(𝑇−𝜆𝐼)𝑘𝑣= 0
for some positive integer 𝑘.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 8A
Generalized Eigenvectors and Nilpotent Operators
Generalized eigenvalues are not de-
fined because doing so would not lead
to anything new. Reason: if (𝑇−𝜆𝐼)𝑘
is not injective for some positive inte-
ger 𝑘, then 𝑇−𝜆𝐼is not injective, and
hence 𝜆is an eigenvalue of 𝑇.
A nonzero vector 𝑣∈𝑉is a general-
ized eigenvector of 𝑇corresponding to 𝜆
if and only if
(𝑇−𝜆𝐼)dim 𝑉𝑣= 0,
as follows from applying 8.1 and 8.3 to
the operator 𝑇−𝜆𝐼.
As we know, an operator on a complex vector space may not have enough
eigenvectors to form a basis of the domain. The next result shows that on a
complex vector space there are enough generalized eigenvectors to do this.
8.9
a basis of generalized eigenvectors
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Then there is a basis of 𝑉consisting of
generalized eigenvectors of 𝑇.
Proof
Let 𝑛= dim 𝑉. We will use induction on 𝑛. To get started, note that
the desired result holds if 𝑛= 1 because then every nonzero vector in 𝑉is an
eigenvector of 𝑇.
This step is where we use the hypothesis
that 𝐅= 𝐂, because if 𝐅= 𝐑then 𝑇
may not have any eigenvalues.
Now suppose 𝑛> 1 and the de-
sired result holds for all smaller values
of dim 𝑉. Let 𝜆be an eigenvalue of 𝑇.
Applying 8.4 to 𝑇−𝜆𝐼shows that
𝑉= null(𝑇−𝜆𝐼)𝑛⊕range(𝑇−𝜆𝐼)𝑛.
If null(𝑇−𝜆𝐼)𝑛= 𝑉, then every nonzero vector in 𝑉is a generalized eigen-
vector of 𝑇, and thus in this case there is a basis of 𝑉consisting of generalized
eigenvectors of 𝑇. Hence we can assume that null(𝑇−𝜆𝐼)𝑛≠𝑉, which implies
that range(𝑇−𝜆𝐼)𝑛≠{0}.
Also, null(𝑇−𝜆𝐼)𝑛≠{0}, because 𝜆is an eigenvalue of 𝑇. Thus we have
0 < dim range(𝑇−𝜆𝐼)𝑛< 𝑛.
Furthermore, range(𝑇−𝜆𝐼)𝑛is invariant under 𝑇[by 5.18 with 𝑝(𝑧) = (𝑧−𝜆)𝑛].
Let 𝑆∈ℒ(range(𝑇−𝜆𝐼)𝑛) equal 𝑇restricted to range(𝑇−𝜆𝐼)𝑛. Our induction
hypothesis applied to the operator 𝑆implies that there is a basis of range(𝑇−𝜆𝐼)𝑛
consisting of generalized eigenvectors of 𝑆, which of course are generalized
eigenvectors of 𝑇. Adjoining that basis of range(𝑇−𝜆𝐼)𝑛to a basis of null(𝑇−𝜆𝐼)𝑛
gives a basis of 𝑉consisting of generalized eigenvectors of 𝑇.
If 𝐅= 𝐑and dim 𝑉> 1, then some operators on 𝑉have the property that
there exists a basis of 𝑉consisting of generalized eigenvectors of the operator,
and (unlike what happens when 𝐅= 𝐂) other operators do not have this property.
See Exercise 11 for a necessary and sufficient condition that determines whether
an operator has this property.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 8
Operators on Complex Vector Spaces
8.10
example: generalized eigenvectors of an operator on 𝐂3
Define 𝑇∈ℒ(𝐂3) by
𝑇(𝑧1, 𝑧2, 𝑧3) = (4𝑧2, 0, 5𝑧3)
for each (𝑧1, 𝑧2, 𝑧3) ∈𝐂3. A routine use of the definition of eigenvalue shows that
the eigenvalues of 𝑇are 0 and 5. Furthermore, the eigenvectors corresponding to
the eigenvalue 0 are the nonzero vectors of the form (𝑧1, 0, 0), and the eigenvectors
corresponding to the eigenvalue 5 are the nonzero vectors of the form (0, 0, 𝑧3).
Hence this operator does not have enough eigenvectors to span its domain 𝐂3.
We compute that 𝑇3(𝑧1, 𝑧2, 𝑧3) = (0, 0, 125𝑧3). Thus 8.1 and 8.3 imply that the
generalized eigenvectors of 𝑇corresponding to the eigenvalue 0 are the nonzero
vectors of the form (𝑧1, 𝑧2, 0).
We also have (𝑇−5𝐼)3(𝑧1, 𝑧2, 𝑧3) = (−125𝑧1 + 300𝑧2, −125𝑧2, 0). Thus the
generalized eigenvectors of 𝑇corresponding to the eigenvalue 5 are the nonzero
vectors of the form (0, 0, 𝑧3).
The paragraphs above show that each of the standard basis vectors of 𝐂3 is a
generalized eigenvector of 𝑇. Thus 𝐂3 indeed has a basis consisting of generalized
eigenvectors of 𝑇, as promised by 8.9.
If 𝑣is an eigenvector of 𝑇∈ℒ(𝑉), then the corresponding eigenvalue 𝜆is
uniquely determined by the equation 𝑇𝑣= 𝜆𝑣, which can be satisfied by only one
𝜆∈𝐅(because 𝑣≠0). However, if 𝑣is a generalized eigenvector of 𝑇, then it
is not obvious that the equation (𝑇−𝜆𝐼)dim 𝑉𝑣= 0 can be satisfied by only one
𝜆∈𝐅. Fortunately, the next result tells us that all is well on this issue.
8.11
generalized eigenvector corresponds to a unique eigenvalue
Suppose 𝑇∈ℒ(𝑉). Then each generalized eigenvector of 𝑇corresponds to
only one eigenvalue of 𝑇.
Proof
Suppose 𝑣∈𝑉is a generalized eigenvector of 𝑇corresponding to eigen-
values 𝛼and 𝜆of 𝑇. Let 𝑚be the smallest positive integer such that (𝑇−𝛼𝐼)𝑚𝑣= 0.
Let 𝑛= dim 𝑉. Then
0 = (𝑇−𝜆𝐼)𝑛𝑣
= ((𝑇−𝛼𝐼) + (𝛼−𝜆)𝐼)𝑛𝑣
=
𝑛
∑
𝑘=0
𝑏𝑘(𝛼−𝜆)𝑛−𝑘(𝑇−𝛼𝐼)𝑘𝑣,
where 𝑏0 = 1 and the values of the other binomial coefficients 𝑏𝑘do not matter.
Apply the operator (𝑇−𝛼𝐼)𝑚−1 to both sides of the equation above, getting
0 = (𝛼−𝜆)𝑛(𝑇−𝛼𝐼)𝑚−1𝑣.
Because (𝑇−𝛼𝐼)𝑚−1𝑣≠0, the equation above implies that 𝛼= 𝜆, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 8A
Generalized Eigenvectors and Nilpotent Operators
We saw earlier (5.11) that eigenvectors corresponding to distinct eigenvalues
are linearly independent. Now we prove a similar result for generalized eigen-
vectors, with a proof that roughly follows the pattern of the proof of that earlier
result.
8.12
linearly independent generalized eigenvectors
Suppose that 𝑇∈ℒ(𝑉). Then every list of generalized eigenvectors of 𝑇
corresponding to distinct eigenvalues of 𝑇is linearly independent.
Proof
Suppose the desired result is false. Then there exists a smallest positive
integer 𝑚such that there exists a linearly dependent list 𝑣1, … , 𝑣𝑚of generalized
eigenvectors of 𝑇corresponding to distinct eigenvalues 𝜆1, … , 𝜆𝑚of 𝑇(note that
𝑚≥2 because a generalized eigenvector is, by definition, nonzero). Thus there
exist 𝑎1, … , 𝑎𝑚∈𝐅, none of which are 0 (because of the minimality of 𝑚), such
that
𝑎1𝑣1 + ⋯+ 𝑎𝑚𝑣𝑚= 0.
Let 𝑛= dim 𝑉. Apply (𝑇−𝜆𝑚𝐼)𝑛to both sides of the equation above, getting
8.13
𝑎1(𝑇−𝜆𝑚𝐼)𝑛𝑣1 + ⋯+ 𝑎𝑚−1(𝑇−𝜆𝑚𝐼)𝑛𝑣𝑚−1 = 0.
Suppose 𝑘∈{1, … , 𝑚−1}. Then
(𝑇−𝜆𝑚𝐼)𝑛𝑣𝑘≠0
because otherwise 𝑣𝑘would be a generalized eigenvector of 𝑇corresponding to
the distinct eigenvalues 𝜆𝑘and 𝜆𝑚, which would contradict 8.11. However,
(𝑇−𝜆𝑘𝐼)𝑛((𝑇−𝜆𝑚𝐼)𝑛𝑣𝑘) = (𝑇−𝜆𝑚𝐼)𝑛((𝑇−𝜆𝑘𝐼)𝑛𝑣𝑘) = 0.
Thus the last two displayed equations show that (𝑇−𝜆𝑚𝐼)𝑛𝑣𝑘is a generalized
eigenvector of 𝑇corresponding to the eigenvalue 𝜆𝑘. Hence
(𝑇−𝜆𝑚𝐼)𝑛𝑣1, … , (𝑇−𝜆𝑚𝐼)𝑛𝑣𝑚−1
is a linearly dependent list (by 8.13) of 𝑚−1 generalized eigenvectors correspond-
ing to distinct eigenvalues, contradicting the minimality of 𝑚. This contradiction
completes the proof.
Nilpotent Operators
8.14
definition: nilpotent
An operator is called nilpotent if some power of it equals 0.
Thus an operator 𝑇∈ℒ(𝑉) is nilpotent if and only if every nonzero vector in
𝑉is a generalized eigenvector of 𝑇corresponding to the eigenvalue 0.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 8
Operators on Complex Vector Spaces
8.15
example: nilpotent operators
(a) The operator 𝑇∈ℒ(𝐅4) defined by
𝑇(𝑧1, 𝑧2, 𝑧3, 𝑧4) = (0, 0, 𝑧1, 𝑧2)
is nilpotent because 𝑇2 = 0.
(b) The operator on 𝐅3 whose matrix (with respect to the standard basis) is
⎛⎜⎜⎜
⎝
−3
−7
−6
⎞⎟⎟⎟
⎠
is nilpotent, as can be shown by cubing the matrix above to get the zero matrix.
(c) The operator of differentiation on 𝒫𝑚(𝐑) is nilpotent because the (𝑚+ 1)th
derivative of every polynomial of degree at most 𝑚equals 0. Note that on
this space of dimension 𝑚+ 1, we need to raise the nilpotent operator to the
power 𝑚+ 1 to get the 0 operator.
The Latin word nil means nothing or
zero; the Latin word potens means
having power. Thus nilpotent literally
means having a power that is zero.
The next result shows that when rais-
ing a nilpotent operator to a power, we
never need to use a power higher than the
dimension of the space. For a slightly
stronger result, see Exercise 18.
8.16
nilpotent operator raised to dimension of domain is 0
Suppose 𝑇∈ℒ(𝑉) is nilpotent. Then 𝑇dim 𝑉= 0.
Proof
Because 𝑇is nilpotent, there exists a positive integer 𝑘such that 𝑇𝑘= 0.
Thus null 𝑇𝑘= 𝑉. Now 8.1 and 8.3 imply that null 𝑇dim 𝑉= 𝑉. Thus 𝑇dim 𝑉= 0.
8.17
eigenvalues of nilpotent operator
Suppose 𝑇∈ℒ(𝑉).
(a) If 𝑇is nilpotent, then 0 is an eigenvalue of 𝑇and 𝑇has no other
eigenvalues.
(b) If 𝐅= 𝐂and 0 is the only eigenvalue of 𝑇, then 𝑇is nilpotent.
Proof
(a) To prove (a), suppose 𝑇is nilpotent. Hence there is a positive integer 𝑚such
that 𝑇𝑚= 0. This implies that 𝑇is not injective. Thus 0 is an eigenvalue
of 𝑇.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 8A
Generalized Eigenvectors and Nilpotent Operators
To show that 𝑇has no other eigenvalues, suppose 𝜆is an eigenvalue of 𝑇.
Then there exists a nonzero vector 𝑣∈𝑉such that
𝜆𝑣= 𝑇𝑣.
Repeatedly applying 𝑇to both sides of this equation shows that
𝜆𝑚𝑣= 𝑇𝑚𝑣= 0.
Thus 𝜆= 0, as desired.
(b) Suppose 𝐅= 𝐂and 0 is the only eigenvalue of 𝑇. By 5.27(b), the minimal
polynomial of 𝑇equals 𝑧𝑚for some positive integer 𝑚. Thus 𝑇𝑚= 0. Hence
𝑇is nilpotent.
Exercise 23 shows that the hypothesis that 𝐅= 𝐂cannot be deleted in (b) of
the result above.
Given an operator on 𝑉, we want to find a basis of 𝑉such that the matrix of
the operator with respect to this basis is as simple as possible, meaning that the
matrix contains many 0’s. The next result shows that if 𝑇is nilpotent, then we can
choose a basis of 𝑉such that the matrix of 𝑇with respect to this basis has more
than half of its entries equal to 0. Later in this chapter we will do even better.
8.18
minimal polynomial and upper-triangular matrix of nilpotent operator
Suppose 𝑇∈ℒ(𝑉). Then the following are equivalent.
(a) 𝑇is nilpotent.
(b) The minimal polynomial of 𝑇is 𝑧𝑚for some positive integer 𝑚.
(c) There is a basis of 𝑉with respect to which the matrix of 𝑇has the form
⎛⎜⎜⎜
⎝
∗
⋱
⎞⎟⎟⎟
⎠
,
where all entries on and below the diagonal equal 0.
Proof
Suppose (a) holds, so 𝑇is nilpotent. Thus there exists a positive integer
𝑛such that 𝑇𝑛= 0. Now 5.29 implies that 𝑧𝑛is a polynomial multiple of the
minimal polynomial of 𝑇. Thus the minimal polynomial of 𝑇is 𝑧𝑚for some
positive integer 𝑚, proving that (a) implies (b).
Now suppose (b) holds, so the minimal polynomial of 𝑇is 𝑧𝑚for some positive
integer 𝑚. This implies, by 5.27(a), that 0 (which is the only zero of 𝑧𝑚) is the
only eigenvalue of 𝑇. This further implies, by 5.44, that there is a basis of 𝑉with
respect to which the matrix of 𝑇is upper triangular. This also implies, by 5.41,
that all entries on the diagonal of this matrix are 0, proving that (b) implies (c).
Now suppose (c) holds. Then 5.40 implies that 𝑇dim 𝑉= 0. Thus 𝑇is nilpotent,
proving that (c) implies (a).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 8
Operators on Complex Vector Spaces
Exercises 8A
Suppose 𝑇∈ℒ(𝑉). Prove that if dim null 𝑇4 = 8 and dim null 𝑇6 = 9, then
dim null 𝑇𝑚= 9 for all integers 𝑚≥5.
Suppose 𝑇∈ℒ(𝑉), 𝑚is a positive integer, 𝑣∈𝑉, and 𝑇𝑚−1𝑣≠0 but
𝑇𝑚𝑣= 0. Prove that 𝑣, 𝑇𝑣, 𝑇2𝑣, … , 𝑇𝑚−1𝑣is linearly independent.
The result in this exercise is used in the proof of 8.45.
Suppose 𝑇∈ℒ(𝑉). Prove that
𝑉= null 𝑇⊕range 𝑇⟺null 𝑇2 = null 𝑇.
Suppose 𝑇∈ℒ(𝑉), 𝜆∈𝐅, and 𝑚is a positive integer such that the minimal
polynomial of 𝑇is a polynomial multiple of (𝑧−𝜆)𝑚. Prove that
dim null(𝑇−𝜆𝐼)𝑚≥𝑚.
Suppose 𝑇∈ℒ(𝑉) and 𝑚is a positive integer. Prove that
dim null 𝑇𝑚≤𝑚dim null 𝑇.
Hint: Exercise 21 in Section 3B may be useful.
Suppose 𝑇∈ℒ(𝑉). Show that
𝑉= range 𝑇0 ⊇range 𝑇1 ⊇⋯⊇range 𝑇𝑘⊇range 𝑇𝑘+1 ⊇⋯.
Suppose 𝑇∈ℒ(𝑉) and 𝑚is a nonnegative integer such that
range 𝑇𝑚= range 𝑇𝑚+1.
Prove that range 𝑇𝑘= range 𝑇𝑚for all 𝑘> 𝑚.
Suppose 𝑇∈ℒ(𝑉). Prove that
range 𝑇dim 𝑉= range 𝑇dim 𝑉+1 = range 𝑇dim 𝑉+2 = ⋯.
Suppose 𝑇∈ℒ(𝑉) and 𝑚is a nonnegative integer. Prove that
null 𝑇𝑚= null 𝑇𝑚+1 ⟺range 𝑇𝑚= range 𝑇𝑚+1.
Define 𝑇∈ℒ(𝐂2) by 𝑇(𝑤, 𝑧) = (𝑧, 0). Find all generalized eigenvectors
of 𝑇.
Suppose that 𝑇∈ℒ(𝑉). Prove that there is a basis of 𝑉consisting of
generalized eigenvectors of 𝑇if and only if the minimal polynomial of 𝑇
equals (𝑧−𝜆1) ⋯(𝑧−𝜆𝑚) for some 𝜆1, … , 𝜆𝑚∈𝐅.
Assume 𝐅= 𝐑because the case 𝐅= 𝐂follows from 5.27(b) and 8.9.
This exercise states that the condition for there to be a basis of 𝑉consisting
of generalized eigenvectors of 𝑇is the same as the condition for there to be
a basis with respect to which 𝑇has an upper-triangular matrix (see 5.44).
Caution: If 𝑇has an upper-triangular matrix with respect to a basis
𝑣1, … , 𝑣𝑛of 𝑉, then 𝑣1 is an eigenvector of 𝑇but it is not necessarily
true that 𝑣2, … , 𝑣𝑛are generalized eigenvectors of 𝑇.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 8A
Generalized Eigenvectors and Nilpotent Operators
Suppose 𝑇∈ℒ(𝑉) is such that every nonzero vector in 𝑉is a generalized
eigenvector of 𝑇. Prove that there exists 𝜆∈𝐅such that 𝑇−𝜆𝐼is nilpotent.
Suppose 𝑆, 𝑇∈ℒ(𝑉) and 𝑆𝑇is nilpotent. Prove that 𝑇𝑆is nilpotent.
Suppose 𝑇∈ℒ(𝑉) is nilpotent and 𝑇≠0. Prove 𝑇is not diagonalizable.
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Prove that 𝑇is diagonalizable if and only if
every generalized eigenvector of 𝑇is an eigenvector of 𝑇.
For 𝐅= 𝐂, this exercise adds another equivalence to the list of conditions
for diagonalizability in 5.55.
(a) Give an example of nilpotent operators 𝑆, 𝑇on the same vector space
such that neither 𝑆+ 𝑇nor 𝑆𝑇is nilpotent.
(b) Suppose 𝑆, 𝑇∈ℒ(𝑉) are nilpotent and 𝑆𝑇= 𝑇𝑆. Prove that 𝑆+ 𝑇and
𝑆𝑇are nilpotent.
Suppose 𝑇∈ℒ(𝑉) is nilpotent and 𝑚is a positive integer such that 𝑇𝑚= 0.
(a) Prove that 𝐼−𝑇is invertible and that (𝐼−𝑇)−1 = 𝐼+ 𝑇+ ⋯+ 𝑇𝑚−1.
(b) Explain how you would guess the formula above.
Suppose 𝑇∈ℒ(𝑉) is nilpotent. Prove that 𝑇1+dim range 𝑇= 0.
If dim range 𝑇< dim 𝑉−1, then this exercise improves 8.16.
Suppose 𝑇∈ℒ(𝑉) is not nilpotent. Show that
𝑉= null 𝑇dim 𝑉−1 ⊕range 𝑇dim 𝑉−1.
For operators that are not nilpotent, this exercise improves 8.4.
Suppose 𝑉is an inner product space and 𝑇∈ℒ(𝑉) is normal and nilpotent.
Prove that 𝑇= 0.
Suppose 𝑇∈ℒ(𝑉) is such that null 𝑇dim 𝑉−1 ≠null 𝑇dim 𝑉. Prove that 𝑇is
nilpotent and that dim null 𝑇𝑘= 𝑘for every integer 𝑘with 0 ≤𝑘≤dim 𝑉.
Suppose 𝑇∈ℒ(𝐂5) is such that range 𝑇4 ≠range 𝑇5. Prove that 𝑇is
nilpotent.
Give an example of an operator 𝑇on a finite-dimensional real vector space
such that 0 is the only eigenvalue of 𝑇but 𝑇is not nilpotent.
This exercise shows that (b) in 8.17 does not hold without the hypothesis
that 𝐅= 𝐂.
For each item in Example 8.15, find a basis of the domain vector space such
that the matrix of the nilpotent operator with respect to that basis has the
upper-triangular form promised by 8.18(c).
Suppose that 𝑉is an inner product space and 𝑇∈ℒ(𝑉) is nilpotent. Show
that there is an orthonormal basis of 𝑉with respect to which the matrix of
𝑇has the upper-triangular form promised by 8.18(c).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 8
Operators on Complex Vector Spaces
8B Generalized Eigenspace Decomposition
Generalized Eigenspaces
8.19
definition: generalized eigenspace, 𝐺(𝜆, 𝑇)
Suppose 𝑇∈ℒ(𝑉) and 𝜆∈𝐅. The generalized eigenspace of 𝑇correspond-
ing to 𝜆, denoted by 𝐺(𝜆, 𝑇), is defined by
𝐺(𝜆, 𝑇) = {𝑣∈𝑉∶(𝑇−𝜆𝐼)𝑘𝑣= 0 for some positive integer 𝑘}.
Thus 𝐺(𝜆, 𝑇) is the set of generalized eigenvectors of 𝑇corresponding to 𝜆,
along with the 0 vector.
Because every eigenvector of 𝑇is a generalized eigenvector of 𝑇(take 𝑘= 1
in the definition of generalized eigenvector), each eigenspace is contained in the
corresponding generalized eigenspace. In other words, if 𝑇∈ℒ(𝑉) and 𝜆∈𝐅,
then 𝐸(𝜆, 𝑇) ⊆𝐺(𝜆, 𝑇).
The next result implies that if 𝑇∈ℒ(𝑉) and 𝜆∈𝐅, then the generalized
eigenspace 𝐺(𝜆, 𝑇) is a subspace of 𝑉(because the null space of each linear map
on 𝑉is a subspace of 𝑉).
8.20
description of generalized eigenspaces
Suppose 𝑇∈ℒ(𝑉) and 𝜆∈𝐅. Then 𝐺(𝜆, 𝑇) = null(𝑇−𝜆𝐼)dim 𝑉.
Proof
Suppose 𝑣∈null(𝑇−𝜆𝐼)dim 𝑉. The definitions imply 𝑣∈𝐺(𝜆, 𝑇). Thus
𝐺(𝜆, 𝑇) ⊇null(𝑇−𝜆𝐼)dim 𝑉.
Conversely, suppose 𝑣∈𝐺(𝜆, 𝑇). Thus there is a positive integer 𝑘such
that 𝑣∈null(𝑇−𝜆𝐼)𝑘. From 8.1 and 8.3 (with 𝑇−𝜆𝐼replacing 𝑇), we get
𝑣∈null(𝑇−𝜆𝐼)dim 𝑉. Thus 𝐺(𝜆, 𝑇) ⊆null(𝑇−𝜆𝐼)dim 𝑉, completing the proof.
8.21
example: generalized eigenspaces of an operator on 𝐂3
Define 𝑇∈ℒ(𝐂3) by
𝑇(𝑧1, 𝑧2, 𝑧3) = (4𝑧2, 0, 5𝑧3).
In Example 8.10, we saw that the eigenvalues of 𝑇are 0 and 5, and we found
the corresponding sets of generalized eigenvectors. Taking the union of those sets
with {0}, we have
𝐺(0, 𝑇) = {(𝑧1, 𝑧2, 0) ∶𝑧1, 𝑧2 ∈𝐂}
and
𝐺(5, 𝑇) = {(0, 0, 𝑧3) ∶𝑧3 ∈𝐂}.
Note that 𝐂3 = 𝐺(0, 𝑇) ⊕𝐺(5, 𝑇).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 8B
Generalized Eigenspace Decomposition
In Example 8.21, the domain space 𝐂3 is the direct sum of the generalized
eigenspaces of the operator 𝑇in that example. Our next result shows that this
behavior holds in general. Specifically, the following major result shows that if
𝐅= 𝐂and 𝑇∈ℒ(𝑉), then 𝑉is the direct sum of the generalized eigenspaces
of 𝑇, each of which is invariant under 𝑇and on which 𝑇is a nilpotent operator
plus a scalar multiple of the identity. Thus the next result achieves our goal of
decomposing 𝑉into invariant subspaces on which 𝑇has a known behavior.
As we will see, the proof follows from putting together what we have learned
about generalized eigenspaces and then using our result that for each operator
𝑇∈ℒ(𝑉), there exists a basis of 𝑉consisting of generalized eigenvectors of 𝑇.
8.22
generalized eigenspace decomposition
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Let 𝜆1, … , 𝜆𝑚be the distinct eigenvalues
of 𝑇. Then
(a) 𝐺(𝜆𝑘, 𝑇) is invariant under 𝑇for each 𝑘= 1, … , 𝑚;
(b) (𝑇−𝜆𝑘𝐼)|𝐺(𝜆𝑘,𝑇) is nilpotent for each 𝑘= 1, … , 𝑚;
(c) 𝑉= 𝐺(𝜆1, 𝑇) ⊕⋯⊕𝐺(𝜆𝑚, 𝑇).
Proof
(a) Suppose 𝑘∈{1, … , 𝑚}. Then 8.20 shows that
𝐺(𝜆𝑘, 𝑇) = null(𝑇−𝜆𝑘𝐼)dim 𝑉.
Thus 5.18, with 𝑝(𝑧) = (𝑧−𝜆𝑘)dim 𝑉, implies that 𝐺(𝜆𝑘, 𝑇) is invariant
under 𝑇, proving (a).
(b) Suppose 𝑘∈{1, … , 𝑚}. If 𝑣∈𝐺(𝜆𝑘, 𝑇), then (𝑇−𝜆𝑘𝐼)dim 𝑉𝑣= 0 (by 8.20).
Thus ((𝑇−𝜆𝑘𝐼)|𝐺(𝜆𝑘,𝑇))dim 𝑉= 0. Hence (𝑇−𝜆𝑘𝐼)|𝐺(𝜆𝑘,𝑇) is nilpotent,
proving (b).
(c) To show that 𝐺(𝜆1, 𝑇) + ⋯+ 𝐺(𝜆𝑚, 𝑇) is a direct sum, suppose
𝑣1 + ⋯+ 𝑣𝑚= 0,
where each 𝑣𝑘is in 𝐺(𝜆𝑘, 𝑇). Because generalized eigenvectors of 𝑇cor-
responding to distinct eigenvalues are linearly independent (by 8.12), this
implies that each 𝑣𝑘equals 0. Thus 𝐺(𝜆1, 𝑇) + ⋯+ 𝐺(𝜆𝑚, 𝑇) is a direct sum
(by 1.45).
Finally, each vector in 𝑉can be written as a finite sum of generalized eigen-
vectors of 𝑇(by 8.9). Thus
𝑉= 𝐺(𝜆1, 𝑇) ⊕⋯⊕𝐺(𝜆𝑚, 𝑇),
proving (c).
For the analogous result when 𝐅= 𝐑, see Exercise 8.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 8
Operators on Complex Vector Spaces
Multiplicity of an Eigenvalue
If 𝑉is a complex vector space and 𝑇∈ℒ(𝑉), then the decomposition of 𝑉pro-
vided by the generalized eigenspace decomposition (8.22) can be a powerful tool.
The dimensions of the subspaces involved in this decomposition are sufficiently
important to get a name, which is given in the next definition.
8.23
definition: multiplicity
• Suppose 𝑇∈ℒ(𝑉). The multiplicity of an eigenvalue 𝜆of 𝑇is defined to
be the dimension of the corresponding generalized eigenspace 𝐺(𝜆, 𝑇).
• In other words, the multiplicity of an eigenvalue 𝜆of 𝑇equals
dim null(𝑇−𝜆𝐼)dim 𝑉.
The second bullet point above holds because 𝐺(𝜆, 𝑇) = null(𝑇−𝜆𝐼)dim 𝑉
(see 8.20).
8.24
example: multiplicity of each eigenvalue of an operator
Suppose 𝑇∈ℒ(𝐂3) is defined by
𝑇(𝑧1, 𝑧2, 𝑧3) = (6𝑧1 + 3𝑧2 + 4𝑧3, 6𝑧2 + 2𝑧3, 7𝑧3).
The matrix of 𝑇(with respect to the standard basis) is
⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
.
The eigenvalues of 𝑇are the diagonal entries 6 and 7, as follows from 5.41. You
can verify that the generalized eigenspaces of 𝑇are as follows:
𝐺(6, 𝑇) = span((1, 0, 0), (0, 1, 0))
and
𝐺(7, 𝑇) = span((10, 2, 1)).
In this example, the multiplicity of each
eigenvalue equals the number of times
that eigenvalue appears on the diago-
nal of an upper-triangular matrix rep-
resenting the operator. This behavior
always happens, as we will see in 8.31.
Thus the eigenvalue 6 has multiplicity 2
and the eigenvalue 7 has multiplicity 1.
The direct sum 𝐂3 = 𝐺(6, 𝑇) ⊕𝐺(7, 𝑇)
is the generalized eigenspace decom-
position promised by 8.22.
A basis
of 𝐂3 consisting of generalized eigen-
vectors of 𝑇, as promised by 8.9, is
(1, 0, 0), (0, 1, 0), (10, 2, 1). There does not exist a basis of 𝐂3 consisting of eigen-
vectors of this operator.
In the example above, the sum of the multiplicities of the eigenvalues of 𝑇
equals 3, which is the dimension of the domain of 𝑇. The next result shows that
this holds for all operators on finite-dimensional complex vector spaces.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 8B
Generalized Eigenspace Decomposition
8.25
sum of the multiplicities equals dim 𝑉
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Then the sum of the multiplicities of all
eigenvalues of 𝑇equals dim 𝑉.
Proof
The desired result follows from the generalized eigenspace decomposition
(8.22) and the formula for the dimension of a direct sum (see 3.94).
The terms algebraic multiplicity and geometric multiplicity are used in some
books. In case you encounter this terminology, be aware that the algebraic multi-
plicity is the same as the multiplicity defined here and the geometric multiplicity
is the dimension of the corresponding eigenspace. In other words, if 𝑇∈ℒ(𝑉)
and 𝜆is an eigenvalue of 𝑇, then
algebraic multiplicity of 𝜆= dim null(𝑇−𝜆𝐼)dim 𝑉= dim 𝐺(𝜆, 𝑇),
geometric multiplicity of 𝜆= dim null(𝑇−𝜆𝐼) = dim 𝐸(𝜆, 𝑇).
Note that as defined above, the algebraic multiplicity also has a geometric meaning
as the dimension of a certain null space. The definition of multiplicity given here
is cleaner than the traditional definition that involves determinants; 9.62 implies
that these definitions are equivalent.
If 𝑉is an inner product space, 𝑇∈ℒ(𝑉) is normal, and 𝜆is an eigenvalue
of 𝑇, then the algebraic multiplicity of 𝜆equals the geometric multiplicity of 𝜆,
as can be seen from applying Exercise 27 in Section 7A to the normal operator
𝑇−𝜆𝐼. As a special case, the singular values of 𝑆∈ℒ(𝑉, 𝑊) (here 𝑉and 𝑊are
both finite-dimensional inner product spaces) depend on the multiplicities (either
algebraic or geometric) of the eigenvalues of the self-adjoint operator 𝑆∗𝑆.
The next definition associates a monic polynomial with each operator on a
finite-dimensional complex vector space.
8.26
definition: characteristic polynomial
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Let 𝜆1, … , 𝜆𝑚denote the distinct eigenvalues
of 𝑇, with multiplicities 𝑑1, … , 𝑑𝑚. The polynomial
(𝑧−𝜆1)𝑑1 ⋯(𝑧−𝜆𝑚)𝑑𝑚
is called the characteristic polynomial of 𝑇.
8.27
example: the characteristic polynomial of an operator
Suppose 𝑇∈ℒ(𝐂3) is defined as in Example 8.24. Because the eigenvalues of
𝑇are 6, with multiplicity 2, and 7, with multiplicity 1, we see that the characteristic
polynomial of 𝑇is (𝑧−6)2(𝑧−7).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 8
Operators on Complex Vector Spaces
8.28
degree and zeros of characteristic polynomial
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Then
(a) the characteristic polynomial of 𝑇has degree dim 𝑉;
(b) the zeros of the characteristic polynomial of 𝑇are the eigenvalues of 𝑇.
Proof
Our result about the sum of the multiplicities (8.25) implies (a). The
definition of the characteristic polynomial implies (b).
Most texts define the characteristic polynomial using determinants (the two
definitions are equivalent by 9.62). The approach taken here, which is considerably
simpler, leads to the following nice proof of the Cayley–Hamilton theorem.
8.29
Cayley–Hamilton theorem
Suppose 𝐅= 𝐂, 𝑇∈ℒ(𝑉), and 𝑞is the characteristic polynomial of 𝑇. Then
𝑞(𝑇) = 0.
Proof
Let 𝜆1, … , 𝜆𝑚be the distinct eigenvalues of 𝑇, and let 𝑑𝑘= dim 𝐺(𝜆𝑘, 𝑇).
For each 𝑘∈{1, … , 𝑚}, we know that (𝑇−𝜆𝑘𝐼)|𝐺(𝜆𝑘,𝑇) is nilpotent. Thus we have
Arthur Cayley (1821–1895) published
three mathematics papers before com-
pleting his undergraduate degree.
(𝑇−𝜆𝑘𝐼)𝑑𝑘|𝐺(𝜆𝑘,𝑇) = 0
(by 8.16) for each 𝑘∈{1, … , 𝑚}.
The generalized eigenspace decom-
position (8.22) states that every vector in 𝑉is a sum of vectors in
𝐺(𝜆1, 𝑇), … , 𝐺(𝜆𝑚, 𝑇). Thus to prove that 𝑞(𝑇) = 0, we only need to show
that 𝑞(𝑇)|𝐺(𝜆𝑘,𝑇) = 0 for each 𝑘.
Fix 𝑘∈{1, … , 𝑚}. We have
𝑞(𝑇) = (𝑇−𝜆1𝐼)𝑑1 ⋯(𝑇−𝜆𝑚𝐼)𝑑𝑚.
The operators on the right side of the equation above all commute, so we can
move the factor (𝑇−𝜆𝑘𝐼)𝑑𝑘to be the last term in the expression on the right.
Because (𝑇−𝜆𝑘𝐼)𝑑𝑘|𝐺(𝜆𝑘,𝑇) = 0, we have 𝑞(𝑇)|𝐺(𝜆𝑘,𝑇) = 0, as desired.
The next result implies that if the minimal polynomial of an operator 𝑇∈ℒ(𝑉)
has degree dim 𝑉(as happens almost always—see the paragraphs following 5.24),
then the characteristic polynomial of 𝑇equals the minimal polynomial of 𝑇.
8.30
characteristic polynomial is a multiple of minimal polynomial
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Then the characteristic polynomial of 𝑇is a
polynomial multiple of the minimal polynomial of 𝑇.
Proof
The desired result follows immediately from the Cayley–Hamilton theo-
rem (8.29) and 5.29.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 8B
Generalized Eigenspace Decomposition
Now we can prove that the result suggested by Example 8.24 holds for all
operators on finite-dimensional complex vector spaces.
8.31
multiplicity of an eigenvalue equals number of times on diagonal
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉such that
ℳ(𝑇, (𝑣1, … , 𝑣𝑛)) is upper triangular. Then the number of times that each
eigenvalue 𝜆of 𝑇appears on the diagonal of ℳ(𝑇, (𝑣1, … , 𝑣𝑛)) equals the
multiplicity of 𝜆as an eigenvalue of 𝑇.
Proof
Let 𝐴= ℳ(𝑇, (𝑣1, … , 𝑣𝑛)). Thus 𝐴is an upper-triangular matrix. Let
𝜆1, … , 𝜆𝑛denote the entries on the diagonal of 𝐴. Thus for each 𝑘∈{1, … , 𝑛},
we have
𝑇𝑣𝑘= 𝑢𝑘+ 𝜆𝑘𝑣𝑘
for some 𝑢𝑘∈span(𝑣1, … , 𝑣𝑘−1). Hence if 𝑘∈{1, … , 𝑛} and 𝜆𝑘≠0, then 𝑇𝑣𝑘is
not a linear combination of 𝑇𝑣1, … , 𝑇𝑣𝑘−1. The linear dependence lemma (2.19)
now implies that the list of those 𝑇𝑣𝑘such that 𝜆𝑘≠0 is linearly independent.
Let 𝑑denote the number of indices 𝑘∈{1, … , 𝑛} such that 𝜆𝑘= 0. The
conclusion of the previous paragraph implies that
dim range 𝑇≥𝑛−𝑑.
Because 𝑛= dim 𝑉= dim null 𝑇+dim range 𝑇, the inequality above implies that
8.32
dim null 𝑇≤𝑑.
The matrix of the operator 𝑇𝑛with respect to the basis 𝑣1, … , 𝑣𝑛is the upper-
triangular matrix 𝐴𝑛, which has diagonal entries 𝜆1
𝑛, … , 𝜆𝑛
𝑛[see Exercise 2(b) in
Section 5C]. Because 𝜆𝑘
𝑛= 0 if and only if 𝜆𝑘= 0, the number of times that 0
appears on the diagonal of 𝐴𝑛equals 𝑑. Thus applying 8.32 with 𝑇replaced with
𝑇𝑛, we have
8.33
dim null 𝑇𝑛≤𝑑.
For 𝜆an eigenvalue of 𝑇, let 𝑚𝜆denote the multiplicity of 𝜆as an eigenvalue
of 𝑇and let 𝑑𝜆denote the number of times that 𝜆appears on the diagonal of 𝐴.
Replacing 𝑇in 8.33 with 𝑇−𝜆𝐼, we see that
8.34
𝑚𝜆≤𝑑𝜆
for each eigenvalue 𝜆of 𝑇. The sum of the multiplicities 𝑚𝜆over all eigenvalues
𝜆of 𝑇equals 𝑛, the dimension of 𝑉(by 8.25). The sum of the numbers 𝑑𝜆over
all eigenvalues 𝜆of 𝑇also equals 𝑛, because the diagonal of 𝐴has length 𝑛.
Thus summing both sides of 8.34 over all eigenvalues 𝜆of 𝑇produces an
equality. Hence 8.34 must actually be an equality for each eigenvalue 𝜆of 𝑇.
Thus the multiplicity of 𝜆as an eigenvalue of 𝑇equals the number of times that
𝜆appears on the diagonal of 𝐴, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

≈100𝜋
Chapter 8
Operators on Complex Vector Spaces
Block Diagonal Matrices
Often we can understand a matrix
better by thinking of it as composed
of smaller matrices.
To interpret our results in matrix form,
we make the following definition, gener-
alizing the notion of a diagonal matrix.
If each matrix 𝐴𝑘in the definition below
is a 1-by-1 matrix, then we actually have a diagonal matrix.
8.35
definition: block diagonal matrix
A block diagonal matrix is a square matrix of the form
⎛⎜⎜⎜
⎝
𝐴1
⋱
𝐴𝑚
⎞⎟⎟⎟
⎠
,
where 𝐴1, … , 𝐴𝑚are square matrices lying along the diagonal and all other
entries of the matrix equal 0.
8.36
example: a block diagonal matrix
The 5-by-5 matrix
𝐴=
⎛⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜
⎝
( 4 )
⎛⎜
⎝
−3
⎞⎟
⎠
⎛⎜
⎝
⎞⎟
⎠
⎞⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟
⎠
is a block diagonal matrix with
𝐴=
⎛⎜⎜⎜⎜⎜
⎝
𝐴1
𝐴2
𝐴3
⎞⎟⎟⎟⎟⎟
⎠
,
where
𝐴1 = ( 4 ) ,
𝐴2 = ⎛⎜
⎝
−3
⎞⎟
⎠
,
𝐴3 = ⎛⎜
⎝
⎞⎟
⎠
.
Here the inner matrices in the 5-by-5 matrix above are blocked off to show how
we can think of it as a block diagonal matrix.
Note that in the example above, each of 𝐴1, 𝐴2, 𝐴3 is an upper-triangular
matrix whose diagonal entries are all equal. The next result shows that with
respect to an appropriate basis, every operator on a finite-dimensional complex
vector space has a matrix of this form. Note that this result gives us many more
zeros in the matrix than are needed to make it upper triangular.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 8B
Generalized Eigenspace Decomposition
8.37
block diagonal matrix with upper-triangular blocks
Suppose 𝐅= 𝐂and 𝑇∈ℒ(𝑉). Let 𝜆1, … , 𝜆𝑚be the distinct eigenvalues of
𝑇, with multiplicities 𝑑1, … , 𝑑𝑚. Then there is a basis of 𝑉with respect to
which 𝑇has a block diagonal matrix of the form
⎛⎜⎜⎜
⎝
𝐴1
⋱
𝐴𝑚
⎞⎟⎟⎟
⎠
,
where each 𝐴𝑘is a 𝑑𝑘-by-𝑑𝑘upper-triangular matrix of the form
𝐴𝑘= ⎛⎜⎜⎜
⎝
𝜆𝑘
∗
⋱
𝜆𝑘
⎞⎟⎟⎟
⎠
.
Proof
Each (𝑇−𝜆𝑘𝐼)|𝐺(𝜆𝑘,𝑇) is nilpotent (see 8.22). For each 𝑘, choose a basis
of 𝐺(𝜆𝑘, 𝑇), which is a vector space of dimension 𝑑𝑘, such that the matrix of
(𝑇−𝜆𝑘𝐼)|𝐺(𝜆𝑘,𝑇) with respect to this basis is as in 8.18(c). Thus with respect to
this basis, the matrix of 𝑇|𝐺(𝜆𝑘,𝑇), which equals (𝑇−𝜆𝑘𝐼)|𝐺(𝜆𝑘,𝑇) + 𝜆𝑘𝐼|𝐺(𝜆𝑘,𝑇),
looks like the desired form shown above for 𝐴𝑘.
The generalized eigenspace decomposition (8.22) shows that putting together
the bases of the 𝐺(𝜆𝑘, 𝑇)’s chosen above gives a basis of 𝑉. The matrix of 𝑇with
respect to this basis has the desired form.
8.38
example: block diagonal matrix via generalized eigenvectors
Le
