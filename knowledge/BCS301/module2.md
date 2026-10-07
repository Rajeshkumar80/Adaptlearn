# BCS301 — Module 2

## Calculus

**Subject:** BCS301 (Mathematics for Computer Science)
**Module:** Module 2
**Content type:** textbook_fallback
**Sources:** R1_Linear_Algebra_Done_Right_Axler.txt

---

mined on 𝑉, as
desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3A
Vector Space of Linear Maps
Algebraic Operations on ℒ(𝑉, 𝑊)
We begin by defining addition and scalar multiplication on ℒ(𝑉, 𝑊).
3.5
definition: addition and scalar multiplication on ℒ(𝑉, 𝑊)
Suppose 𝑆, 𝑇∈ℒ(𝑉, 𝑊) and 𝜆∈𝐅. The sum 𝑆+ 𝑇and the product 𝜆𝑇are
the linear maps from 𝑉to 𝑊defined by
(𝑆+ 𝑇)(𝑣) = 𝑆𝑣+ 𝑇𝑣
and
(𝜆𝑇)(𝑣) = 𝜆(𝑇𝑣)
for all 𝑣∈𝑉.
Linear maps are pervasive throughout
mathematics. However, they are not as
ubiquitous as imagined by people who
seem to think cos is a linear map from
𝐑to 𝐑when they incorrectly write that
cos(𝑥+𝑦) equals cos 𝑥+cos 𝑦and that
cos 2𝑥equals 2 cos 𝑥.
You should verify that 𝑆+ 𝑇and 𝜆𝑇
as defined above are indeed linear maps.
In other words, if 𝑆, 𝑇∈ℒ(𝑉, 𝑊) and
𝜆∈𝐅, then 𝑆+ 𝑇∈ℒ(𝑉, 𝑊) and 𝜆𝑇∈
ℒ(𝑉, 𝑊).
Because we took the trouble to de-
fine addition and scalar multiplication on
ℒ(𝑉, 𝑊), the next result should not be a
surprise.
3.6
ℒ(𝑉, 𝑊) is a vector space
With the operations of addition and scalar multiplication as defined above,
ℒ(𝑉, 𝑊) is a vector space.
The routine proof of the result above is left to the reader. Note that the additive
identity of ℒ(𝑉, 𝑊) is the zero linear map defined in Example 3.3.
Usually it makes no sense to multiply together two elements of a vector space,
but for some pairs of linear maps a useful product exists, as in the next definition.
3.7
definition: product of linear maps
If 𝑇∈ℒ(𝑈, 𝑉) and 𝑆∈ℒ(𝑉, 𝑊), then the product 𝑆𝑇∈ℒ(𝑈, 𝑊) is
defined by
(𝑆𝑇)(𝑢) = 𝑆(𝑇𝑢)
for all 𝑢∈𝑈.
Thus 𝑆𝑇is just the usual composition 𝑆∘𝑇of two functions, but when both
functions are linear, we usually write 𝑆𝑇instead of 𝑆∘𝑇. The product notation
𝑆𝑇helps make the distributive properties (see next result) seem natural.
Note that 𝑆𝑇is defined only when 𝑇maps into the domain of 𝑆. You should
verify that 𝑆𝑇is indeed a linear map from 𝑈to 𝑊whenever 𝑇∈ℒ(𝑈, 𝑉) and
𝑆∈ℒ(𝑉, 𝑊).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
3.8
algebraic properties of products of linear maps
associativity
(𝑇1𝑇2)𝑇3 = 𝑇1(𝑇2𝑇3) whenever 𝑇1, 𝑇2, and 𝑇3 are linear maps such that
the products make sense (meaning 𝑇3 maps into the domain of 𝑇2, and 𝑇2
maps into the domain of 𝑇1).
identity
𝑇𝐼= 𝐼𝑇= 𝑇whenever 𝑇∈ℒ(𝑉, 𝑊); here the first 𝐼is the identity
operator on 𝑉, and the second 𝐼is the identity operator on 𝑊.
distributive properties
(𝑆1 + 𝑆2)𝑇= 𝑆1𝑇+ 𝑆2𝑇
and
𝑆(𝑇1 + 𝑇2) = 𝑆𝑇1 + 𝑆𝑇2 whenever
𝑇, 𝑇1, 𝑇2 ∈ℒ(𝑈, 𝑉) and 𝑆, 𝑆1, 𝑆2 ∈ℒ(𝑉, 𝑊).
The routine proof of the result above is left to the reader.
Multiplication of linear maps is not commutative. In other words, it is not
necessarily true that 𝑆𝑇= 𝑇𝑆, even if both sides of the equation make sense.
3.9
example: two noncommuting linear maps from 𝒫(𝐑) to 𝒫(𝐑)
Suppose 𝐷∈ℒ(𝒫(𝐑)) is the differentiation map defined in Example 3.3
and 𝑇∈ℒ(𝒫(𝐑)) is the multiplication by 𝑥2 map defined earlier in this section.
Then
((𝑇𝐷)𝑝)(𝑥) = 𝑥2𝑝′(𝑥)
but
((𝐷𝑇)𝑝)(𝑥) = 𝑥2𝑝′(𝑥) + 2𝑥𝑝(𝑥).
Thus 𝑇𝐷≠𝐷𝑇—differentiating and then multiplying by 𝑥2 is not the same as
multiplying by 𝑥2 and then differentiating.
3.10
linear maps take 0 to 0
Suppose 𝑇is a linear map from 𝑉to 𝑊. Then 𝑇(0) = 0.
Proof
By additivity, we have
𝑇(0) = 𝑇(0 + 0) = 𝑇(0) + 𝑇(0).
Add the additive inverse of 𝑇(0) to each side of the equation above to conclude
that 𝑇(0) = 0.
Suppose 𝑚, 𝑏∈𝐑. The function 𝑓∶𝐑→𝐑defined by
𝑓(𝑥) = 𝑚𝑥+ 𝑏
is a linear map if and only if 𝑏= 0 (use 3.10). Thus the linear functions of high
school algebra are not the same as linear maps in the context of linear algebra.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3A
Vector Space of Linear Maps
Exercises 3A
Suppose 𝑏, 𝑐∈𝐑. Define 𝑇∶𝐑3 →𝐑2 by
𝑇(𝑥, 𝑦, 𝑧) = (2𝑥−4𝑦+ 3𝑧+ 𝑏, 6𝑥+ 𝑐𝑥𝑦𝑧).
Show that 𝑇is linear if and only if 𝑏= 𝑐= 0.
Suppose 𝑏, 𝑐∈𝐑. Define 𝑇∶𝒫(𝐑) →𝐑2 by
𝑇𝑝= (3𝑝(4) + 5𝑝′(6) + 𝑏𝑝(1)𝑝(2), ∫
−1 𝑥3𝑝(𝑥) 𝑑𝑥+ 𝑐sin 𝑝(0)).
Show that 𝑇is linear if and only if 𝑏= 𝑐= 0.
Suppose that 𝑇∈ℒ(𝐅𝑛, 𝐅𝑚). Show that there exist scalars 𝐴𝑗,𝑘∈𝐅for
𝑗= 1, … , 𝑚and 𝑘= 1, … , 𝑛such that
𝑇(𝑥1, … , 𝑥𝑛) = (𝐴1,1𝑥1 + ⋯+ 𝐴1,𝑛𝑥𝑛, … , 𝐴𝑚,1𝑥1 + ⋯+ 𝐴𝑚,𝑛𝑥𝑛)
for every (𝑥1, … , 𝑥𝑛) ∈𝐅𝑛.
This exercise shows that the linear map 𝑇has the form promised in the
second to last item of Example 3.3.
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑣1, … , 𝑣𝑚is a list of vectors in 𝑉such that
𝑇𝑣1, … , 𝑇𝑣𝑚is a linearly independent list in 𝑊. Prove that 𝑣1, … , 𝑣𝑚is
linearly independent.
Prove that ℒ(𝑉, 𝑊) is a vector space, as was asserted in 3.6.
Prove that multiplication of linear maps has the associative, identity, and
distributive properties asserted in 3.8.
Show that every linear map from a one-dimensional vector space to itself is
multiplication by some scalar. More precisely, prove that if dim 𝑉= 1 and
𝑇∈ℒ(𝑉), then there exists 𝜆∈𝐅such that 𝑇𝑣= 𝜆𝑣for all 𝑣∈𝑉.
Give an example of a function 𝜑∶𝐑2 →𝐑such that
𝜑(𝑎𝑣) = 𝑎𝜑(𝑣)
for all 𝑎∈𝐑and all 𝑣∈𝐑2 but 𝜑is not linear.
This exercise and the next exercise show that neither homogeneity nor
additivity alone is enough to imply that a function is a linear map.
Give an example of a function 𝜑∶𝐂→𝐂such that
𝜑(𝑤+ 𝑧) = 𝜑(𝑤) + 𝜑(𝑧)
for all 𝑤, 𝑧∈𝐂but 𝜑is not linear. (Here 𝐂is thought of as a complex vector
space.)
There also exists a function 𝜑∶𝐑→𝐑such that 𝜑satisfies the additivity
condition above but 𝜑is not linear. However, showing the existence of such
a function involves considerably more advanced tools.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Prove or give a counterexample: If 𝑞∈𝒫(𝐑) and 𝑇∶𝒫(𝐑) →𝒫(𝐑) is
defined by 𝑇𝑝= 𝑞∘𝑝, then 𝑇is a linear map.
The function 𝑇defined here differs from the function 𝑇defined in the last
bullet point of 3.3 by the order of the functions in the compositions.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that 𝑇is a scalar
multiple of the identity if and only if 𝑆𝑇= 𝑇𝑆for every 𝑆∈ℒ(𝑉).
Suppose 𝑈is a subspace of 𝑉with 𝑈≠𝑉. Suppose 𝑆∈ℒ(𝑈, 𝑊) and
𝑆≠0 (which means that 𝑆𝑢≠0 for some 𝑢∈𝑈). Define 𝑇∶𝑉→𝑊by
𝑇𝑣=
⎧{
⎨{⎩
𝑆𝑣
if 𝑣∈𝑈,
if 𝑣∈𝑉and 𝑣∉𝑈.
Prove that 𝑇is not a linear map on 𝑉.
Suppose 𝑉is finite-dimensional. Prove that every linear map on a subspace
of 𝑉can be extended to a linear map on 𝑉. In other words, show that if 𝑈
is a subspace of 𝑉and 𝑆∈ℒ(𝑈, 𝑊), then there exists 𝑇∈ℒ(𝑉, 𝑊) such
that 𝑇𝑢= 𝑆𝑢for all 𝑢∈𝑈.
The result in this exercise is used in the proof of 3.125.
Suppose 𝑉is finite-dimensional with dim 𝑉> 0, and suppose 𝑊is infinite-
dimensional. Prove that ℒ(𝑉, 𝑊) is infinite-dimensional.
Suppose 𝑣1, … , 𝑣𝑚is a linearly dependent list of vectors in 𝑉. Suppose
also that 𝑊≠{0}. Prove that there exist 𝑤1, … , 𝑤𝑚∈𝑊such that no
𝑇∈ℒ(𝑉, 𝑊) satisfies 𝑇𝑣𝑘= 𝑤𝑘for each 𝑘= 1, … , 𝑚.
Suppose 𝑉is finite-dimensional with dim 𝑉> 1. Prove that there exist
𝑆, 𝑇∈ℒ(𝑉) such that 𝑆𝑇≠𝑇𝑆.
Suppose 𝑉is finite-dimensional. Show that the only two-sided ideals of
ℒ(𝑉) are {0} and ℒ(𝑉).
A subspace ℰof ℒ(𝑉) is called a two-sided ideal of ℒ(𝑉) if 𝑇𝐸∈ℰand
𝐸𝑇∈ℰfor all 𝐸∈ℰand all 𝑇∈ℒ(𝑉).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3B
Null Spaces and Ranges
3B Null Spaces and Ranges
Null Space and Injectivity
In this section we will learn about two subspaces that are intimately connected
with each linear map. We begin with the set of vectors that get mapped to 0.
3.11
definition: null space, null 𝑇
For 𝑇∈ℒ(𝑉, 𝑊), the null space of 𝑇, denoted by null 𝑇, is the subset of 𝑉
consisting of those vectors that 𝑇maps to 0:
null 𝑇= {𝑣∈𝑉∶𝑇𝑣= 0}.
3.12
example: null space
• If 𝑇is the zero map from 𝑉to 𝑊, meaning that 𝑇𝑣= 0 for every 𝑣∈𝑉, then
null 𝑇= 𝑉.
• Suppose 𝜑∈ℒ(𝐂3, 𝐂) is defined by 𝜑(𝑧1, 𝑧2, 𝑧3) = 𝑧1 + 2𝑧2 + 3𝑧3. Then
null 𝜑equals {(𝑧1, 𝑧2, 𝑧3) ∈𝐂3 ∶𝑧1 + 2𝑧2 + 3𝑧3 = 0}, which is a subspace of
the domain of 𝜑. We will soon see that the null space of each linear map is a
subspace of its domain.
•
The word “null” means zero. Thus the
term “null space”should remind you
of the connection to 0. Some mathe-
maticians use the term kernel instead
of null space.
Suppose 𝐷∈ℒ(𝒫(𝐑)) is the dif-
ferentiation map defined by 𝐷𝑝= 𝑝′.
The only functions whose derivative
equals the zero function are the con-
stant functions. Thus the null space of
𝐷equals the set of constant functions.
• Suppose that 𝑇∈ℒ(𝒫(𝐑)) is the multiplication by 𝑥2 map defined by
(𝑇𝑝)(𝑥) = 𝑥2𝑝(𝑥). The only polynomial 𝑝such that 𝑥2𝑝(𝑥) = 0 for all 𝑥∈𝐑
is the 0 polynomial. Thus null 𝑇= {0}.
• Suppose 𝑇∈ℒ(𝐅∞) is the backward shift defined by
𝑇(𝑥1, 𝑥2, 𝑥3, … ) = (𝑥2, 𝑥3, … ).
Then 𝑇(𝑥1, 𝑥2, 𝑥3, … ) equals 0 if and only if the numbers 𝑥2, 𝑥3, … are all 0.
Thus null 𝑇= {(𝑎, 0, 0, … ) ∶𝑎∈𝐅}.
The next result shows that the null space of each linear map is a subspace of
the domain. In particular, 0 is in the null space of every linear map.
3.13
the null space is a subspace
Suppose 𝑇∈ℒ(𝑉, 𝑊). Then null 𝑇is a subspace of 𝑉.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Proof
Because 𝑇is a linear map, 𝑇(0) = 0 (by 3.10). Thus 0 ∈null 𝑇.
Suppose 𝑢, 𝑣∈null 𝑇. Then
𝑇(𝑢+ 𝑣) = 𝑇𝑢+ 𝑇𝑣= 0 + 0 = 0.
Hence 𝑢+ 𝑣∈null 𝑇. Thus null 𝑇is closed under addition.
Suppose 𝑢∈null 𝑇and 𝜆∈𝐅. Then
𝑇(𝜆𝑢) = 𝜆𝑇𝑢= 𝜆0 = 0.
Hence 𝜆𝑢∈null 𝑇. Thus null 𝑇is closed under scalar multiplication.
We have shown that null 𝑇contains 0 and is closed under addition and scalar
multiplication. Thus null 𝑇is a subspace of 𝑉(by 1.34).
As we will soon see, for a linear map the next definition is closely connected
to the null space.
3.14
definition: injective
A function 𝑇∶𝑉→𝑊is called injective if 𝑇𝑢= 𝑇𝑣implies 𝑢= 𝑣.
The term one-to-one means the same
as injective.
We could rephrase the definition
above to say that 𝑇is injective if 𝑢≠𝑣
implies that 𝑇𝑢≠𝑇𝑣. Thus 𝑇is injective
if and only if it maps distinct inputs to distinct outputs.
The next result says that we can check whether a linear map is injective
by checking whether 0 is the only vector that gets mapped to 0. As a simple
application of this result, we see that of the linear maps whose null spaces we
computed in 3.12, only multiplication by 𝑥2 is injective (except that the zero map
is injective in the special case 𝑉= {0}).
3.15
injectivity ⟺null space equals {0}
Let 𝑇∈ℒ(𝑉, 𝑊). Then 𝑇is injective if and only if null 𝑇= {0}.
Proof
First suppose 𝑇is injective. We want to prove that null 𝑇= {0}. We
already know that {0} ⊆null 𝑇(by 3.10). To prove the inclusion in the other
direction, suppose 𝑣∈null 𝑇. Then
𝑇(𝑣) = 0 = 𝑇(0).
Because 𝑇is injective, the equation above implies that 𝑣= 0. Thus we can
conclude that null 𝑇= {0}, as desired.
To prove the implication in the other direction, now suppose null 𝑇= {0}. We
want to prove that 𝑇is injective. To do this, suppose 𝑢, 𝑣∈𝑉and 𝑇𝑢= 𝑇𝑣. Then
0 = 𝑇𝑢−𝑇𝑣= 𝑇(𝑢−𝑣).
Thus 𝑢−𝑣is in null 𝑇, which equals {0}. Hence 𝑢−𝑣= 0, which implies that
𝑢= 𝑣. Hence 𝑇is injective, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3B
Null Spaces and Ranges
Range and Surjectivity
Now we give a name to the set of outputs of a linear map.
3.16
definition: range
For 𝑇∈ℒ(𝑉, 𝑊), the range of 𝑇is the subset of 𝑊consisting of those vectors
that are equal to 𝑇𝑣for some 𝑣∈𝑉:
range 𝑇= {𝑇𝑣∶𝑣∈𝑉}.
3.17
example: range
• If 𝑇is the zero map from 𝑉to 𝑊, meaning that 𝑇𝑣= 0 for every 𝑣∈𝑉, then
range 𝑇= {0}.
• Suppose 𝑇∈ℒ(𝐑2, 𝐑3) is defined by 𝑇(𝑥, 𝑦) = (2𝑥, 5𝑦, 𝑥+ 𝑦). Then
range 𝑇= {(2𝑥, 5𝑦, 𝑥+ 𝑦) ∶𝑥, 𝑦∈𝐑}.
Note that range 𝑇is a subspace of 𝐑3. We will soon see that the range of each
element of ℒ(𝑉, 𝑊) is a subspace of 𝑊.
• Suppose 𝐷∈ℒ(𝒫(𝐑)) is the differentiation map defined by 𝐷𝑝= 𝑝′. Because
for every polynomial 𝑞∈𝒫(𝐑) there exists a polynomial 𝑝∈𝒫(𝐑) such that
𝑝′ = 𝑞, the range of 𝐷is 𝒫(𝐑).
The next result shows that the range of each linear map is a subspace of the
vector space into which it is being mapped.
3.18
the range is a subspace
If 𝑇∈ℒ(𝑉, 𝑊), then range 𝑇is a subspace of 𝑊.
Proof
Suppose 𝑇∈ℒ(𝑉, 𝑊). Then 𝑇(0) = 0 (by 3.10), which implies that
0 ∈range 𝑇.
If 𝑤1, 𝑤2 ∈range 𝑇, then there exist 𝑣1, 𝑣2 ∈𝑉such that 𝑇𝑣1 = 𝑤1 and
𝑇𝑣2 = 𝑤2. Thus
𝑇(𝑣1 + 𝑣2) = 𝑇𝑣1 + 𝑇𝑣2 = 𝑤1 + 𝑤2.
Hence 𝑤1 + 𝑤2 ∈range 𝑇. Thus range 𝑇is closed under addition.
If 𝑤∈range 𝑇and 𝜆∈𝐅, then there exists 𝑣∈𝑉such that 𝑇𝑣= 𝑤. Thus
𝑇(𝜆𝑣) = 𝜆𝑇𝑣= 𝜆𝑤.
Hence 𝜆𝑤∈range 𝑇. Thus range 𝑇is closed under scalar multiplication.
We have shown that range 𝑇contains 0 and is closed under addition and scalar
multiplication. Thus range 𝑇is a subspace of 𝑊(by 1.34).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
3.19
definition: surjective
A function 𝑇∶𝑉→𝑊is called surjective if its range equals 𝑊.
To illustrate the definition above, note that of the ranges we computed in 3.17,
only the differentiation map is surjective (except that the zero map is surjective in
the special case 𝑊= {0}).
Some people use the term onto, which
means the same as surjective.
Whether a linear map is surjective de-
pends on what we are thinking of as the
vector space into which it maps.
3.20
example: surjectivity depends on the target space
The differentiation map 𝐷∈ℒ(𝒫5(𝐑)) defined by 𝐷𝑝= 𝑝′ is not surjective,
because the polynomial 𝑥5 is not in the range of 𝐷. However, the differentiation
map 𝑆∈ℒ(𝒫5(𝐑), 𝒫4(𝐑)) defined by 𝑆𝑝= 𝑝′ is surjective, because its range
equals 𝒫4(𝐑), which is the vector space into which 𝑆maps.
Fundamental Theorem of Linear Maps
The next result is so important that it gets a dramatic name.
3.21
fundamental theorem of linear maps
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Then range 𝑇is finite-
dimensional and
dim 𝑉= dim null 𝑇+ dim range 𝑇.
Proof
Let 𝑢1, … , 𝑢𝑚be a basis of null 𝑇; thus dim null 𝑇= 𝑚. The linearly
independent list 𝑢1, … , 𝑢𝑚can be extended to a basis
𝑢1, … , 𝑢𝑚, 𝑣1, … , 𝑣𝑛
of 𝑉(by 2.32). Thus dim 𝑉= 𝑚+𝑛. To complete the proof, we need to show that
range 𝑇is finite-dimensional and dim range 𝑇= 𝑛. We will do this by proving
that 𝑇𝑣1, … , 𝑇𝑣𝑛is a basis of range 𝑇.
Let 𝑣∈𝑉. Because 𝑢1, … , 𝑢𝑚, 𝑣1, … , 𝑣𝑛spans 𝑉, we can write
𝑣= 𝑎1𝑢1 + ⋯+ 𝑎𝑚𝑢𝑚+ 𝑏1𝑣1 + ⋯+ 𝑏𝑛𝑣𝑛,
where the 𝑎’s and 𝑏’s are in 𝐅. Applying 𝑇to both sides of this equation, we get
𝑇𝑣= 𝑏1𝑇𝑣1 + ⋯+ 𝑏𝑛𝑇𝑣𝑛,
where the terms of the form 𝑇𝑢𝑘disappeared because each 𝑢𝑘is in null 𝑇. The last
equation implies that the list 𝑇𝑣1, … , 𝑇𝑣𝑛spans range 𝑇. In particular, range 𝑇is
finite-dimensional.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3B
Null Spaces and Ranges
To show 𝑇𝑣1, … , 𝑇𝑣𝑛is linearly independent, suppose 𝑐1, … , 𝑐𝑛∈𝐅and
𝑐1𝑇𝑣1 + ⋯+ 𝑐𝑛𝑇𝑣𝑛= 0.
Then
𝑇(𝑐1𝑣1 + ⋯+ 𝑐𝑛𝑣𝑛) = 0.
Hence
𝑐1𝑣1 + ⋯+ 𝑐𝑛𝑣𝑛∈null 𝑇.
Because 𝑢1, … , 𝑢𝑚spans null 𝑇, we can write
𝑐1𝑣1 + ⋯+ 𝑐𝑛𝑣𝑛= 𝑑1𝑢1 + ⋯+ 𝑑𝑚𝑢𝑚,
where the 𝑑’s are in 𝐅. This equation implies that all the 𝑐’s (and 𝑑’s) are 0 (be-
cause 𝑢1, … , 𝑢𝑚, 𝑣1, … , 𝑣𝑛is linearly independent). Thus 𝑇𝑣1, … , 𝑇𝑣𝑛is linearly
independent and hence is a basis of range 𝑇, as desired.
Now we can show that no linear map from a finite-dimensional vector space
to a “smaller” vector space can be injective, where “smaller” is measured by
dimension.
3.22
linear map to a lower-dimensional space is not injective
Suppose 𝑉and 𝑊are finite-dimensional vector spaces such that
dim 𝑉> dim 𝑊. Then no linear map from 𝑉to 𝑊is injective.
Proof
Let 𝑇∈ℒ(𝑉, 𝑊). Then
dim null 𝑇= dim 𝑉−dim range 𝑇
≥dim 𝑉−dim 𝑊
> 0,
where the first line above comes from the fundamental theorem of linear maps
(3.21) and the second line follows from 2.37. The inequality above states that
dim null 𝑇> 0. This means that null 𝑇contains vectors other than 0. Thus 𝑇is
not injective (by 3.15).
3.23
example: linear map from 𝐅4 to 𝐅3 is not injective
Define a linear map 𝑇∶𝐅4 →𝐅3 by
𝑇(𝑧1, 𝑧2, 𝑧3, 𝑧4) = (√7𝑧1 + 𝜋𝑧2 + 𝑧4, 97𝑧1 + 3𝑧2 + 2𝑧3, 𝑧2 + 6𝑧3 + 7𝑧4).
Because dim 𝐅4 > dim 𝐅3, we can use 3.22 to assert that 𝑇is not injective, without
doing any calculations.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
The next result shows that no linear map from a finite-dimensional vector
space to a “bigger” vector space can be surjective, where “bigger” is measured by
dimension.
3.24
linear map to a higher-dimensional space is not surjective
Suppose 𝑉and 𝑊are finite-dimensional vector spaces such that
dim 𝑉< dim 𝑊. Then no linear map from 𝑉to 𝑊is surjective.
Proof
Let 𝑇∈ℒ(𝑉, 𝑊). Then
dim range 𝑇= dim 𝑉−dim null 𝑇
≤dim 𝑉
< dim 𝑊,
where the equality above comes from the fundamental theorem of linear maps
(3.21). The inequality above states that dim range 𝑇< dim 𝑊. This means that
range 𝑇cannot equal 𝑊. Thus 𝑇is not surjective.
As we will soon see, 3.22 and 3.24 have important consequences in the theory
of linear equations. The idea is to express questions about systems of linear
equations in terms of linear maps. Let’s begin by rephrasing in terms of linear
maps the question of whether a homogeneous system of linear equations has a
nonzero solution.
Homogeneous, in this context, means
that the constant term on the right side
of each equation below is 0.
Fix positive integers 𝑚and 𝑛, and let
𝐴𝑗,𝑘∈𝐅for 𝑗= 1, … , 𝑚and 𝑘= 1, … , 𝑛.
Consider the homogeneous system of lin-
ear equations
𝑛
∑
𝑘=1
𝐴1,𝑘𝑥𝑘= 0
⋮
𝑛
∑
𝑘=1
𝐴𝑚,𝑘𝑥𝑘= 0.
Clearly 𝑥1 = ⋯= 𝑥𝑛= 0 is a solution of the system of equations above; the
question here is whether any other solutions exist.
Define 𝑇∶𝐅𝑛→𝐅𝑚by
3.25
𝑇(𝑥1, … , 𝑥𝑛) = (
𝑛
∑
𝑘=1
𝐴1,𝑘𝑥𝑘, … ,
𝑛
∑
𝑘=1
𝐴𝑚,𝑘𝑥𝑘).
The equation 𝑇(𝑥1, … , 𝑥𝑛) = 0 (the 0 here is the additive identity in 𝐅𝑚, namely,
the list of length 𝑚of all 0’s) is the same as the homogeneous system of linear
equations above.
Thus we want to know if null 𝑇is strictly bigger than {0}, which is equivalent
to 𝑇not being injective (by 3.15). The next result gives an important condition
for ensuring that 𝑇is not injective.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3B
Null Spaces and Ranges
3.26
homogeneous system of linear equations
A homogeneous system of linear equations with more variables than equations
has nonzero solutions.
Proof
Use the notation and result from the discussion above. Thus 𝑇is a linear
map from 𝐅𝑛to 𝐅𝑚, and we have a homogeneous system of 𝑚linear equations
with 𝑛variables 𝑥1, … , 𝑥𝑛. From 3.22 we see that 𝑇is not injective if 𝑛> 𝑚.
Example of the result above: a homogeneous system of four linear equations
with five variables has nonzero solutions.
Now we consider the question of whether a system of linear equations has no
solutions for some choice of the constant terms. To rephrase this question in terms
of a linear map, fix positive integers 𝑚and 𝑛, and let 𝐴𝑗,𝑘∈𝐅for all 𝑗= 1, … , 𝑚
and all 𝑘= 1, … , 𝑛. For 𝑐1, … , 𝑐𝑚∈𝐅, consider the system of linear equations
𝑛
∑
𝑘=1
𝐴1,𝑘𝑥𝑘= 𝑐1
⋮
3.27
𝑛
∑
𝑘=1
𝐴𝑚,𝑘𝑥𝑘= 𝑐𝑚.
With this notation, the question here is whether there is some choice of the constant
terms 𝑐1, … , 𝑐𝑚∈𝐅such that no solution exists to the system above.
The results 3.26 and 3.28, which com-
pare the number of variables and
the number of equations, can also
be proved using Gaussian elimina-
tion. The abstract approach taken here
seems to provide cleaner proofs.
Define 𝑇∶𝐅𝑛→𝐅𝑚as in 3.25. The
equation 𝑇(𝑥1, … , 𝑥𝑛) = (𝑐1, … , 𝑐𝑚) is
the same as the system of equations 3.27.
Thus we want to know if range 𝑇≠𝐅𝑚.
Hence we can rephrase our question
about not having a solution for some
choice of 𝑐1, … , 𝑐𝑚∈𝐅as follows: What
condition ensures that 𝑇is not surjective? The next result gives one such condition.
3.28
system of linear equations with more equations than variables
A system of linear equations with more equations than variables has no solution
for some choice of the constant terms.
Proof
Use the notation from the discussion above. Thus 𝑇is a linear map from
𝐅𝑛to 𝐅𝑚, and we have a system of 𝑚equations with 𝑛variables 𝑥1, … , 𝑥𝑛; see
3.27. If 𝑛< 𝑚, then 3.24 implies that 𝑇is not surjective. As discussed above,
this shows that if we have more equations than variables in a system of linear
equations, then there is no solution for some choice of the constant terms.
Example of the result above: a system of five linear equations with four
variables has no solution for some choice of the constant terms.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Exercises 3B
Give an example of a linear map 𝑇with dim null 𝑇= 3 and dim range 𝑇= 2.
Suppose 𝑆, 𝑇∈ℒ(𝑉) are such that range 𝑆⊆null 𝑇. Prove that (𝑆𝑇)2 = 0.
Suppose 𝑣1, … , 𝑣𝑚is a list of vectors in 𝑉. Define 𝑇∈ℒ(𝐅𝑚, 𝑉) by
𝑇(𝑧1, … , 𝑧𝑚) = 𝑧1𝑣1 + ⋯+ 𝑧𝑚𝑣𝑚.
(a) What property of 𝑇corresponds to 𝑣1, … , 𝑣𝑚spanning 𝑉?
(b) What property of 𝑇corresponds to the list 𝑣1, … , 𝑣𝑚being linearly
independent?
Show that {𝑇∈ℒ(𝐑5, 𝐑4) ∶dim null 𝑇> 2} is not a subspace of ℒ(𝐑5, 𝐑4).
Give an example of 𝑇∈ℒ(𝐑4) such that range 𝑇= null 𝑇.
Prove that there does not exist 𝑇∈ℒ(𝐑5) such that range 𝑇= null 𝑇.
Suppose 𝑉and 𝑊are finite-dimensional with 2 ≤dim 𝑉≤dim 𝑊. Show
that {𝑇∈ℒ(𝑉, 𝑊) ∶𝑇is not injective} is not a subspace of ℒ(𝑉, 𝑊).
Suppose 𝑉and 𝑊are finite-dimensional with dim 𝑉≥dim 𝑊≥2. Show
that {𝑇∈ℒ(𝑉, 𝑊) ∶𝑇is not surjective} is not a subspace of ℒ(𝑉, 𝑊).
Suppose 𝑇∈ℒ(𝑉, 𝑊) is injective and 𝑣1, … , 𝑣𝑛is linearly independent
in 𝑉. Prove that 𝑇𝑣1, … , 𝑇𝑣𝑛is linearly independent in 𝑊.
Suppose 𝑣1, … , 𝑣𝑛spans 𝑉and 𝑇∈ℒ(𝑉, 𝑊). Show that 𝑇𝑣1, … , 𝑇𝑣𝑛spans
range 𝑇.
Suppose that 𝑉is finite-dimensional and that 𝑇∈ℒ(𝑉, 𝑊). Prove that
there exists a subspace 𝑈of 𝑉such that
𝑈∩null 𝑇= {0}
and
range 𝑇= {𝑇𝑢∶𝑢∈𝑈}.
Suppose 𝑇is a linear map from 𝐅4 to 𝐅2 such that
null 𝑇= {(𝑥1, 𝑥2, 𝑥3, 𝑥4) ∈𝐅4 ∶𝑥1 = 5𝑥2 and 𝑥3 = 7𝑥4}.
Prove that 𝑇is surjective.
Suppose 𝑈is a three-dimensional subspace of 𝐑8 and that 𝑇is a linear map
from 𝐑8 to 𝐑5 such that null 𝑇= 𝑈. Prove that 𝑇is surjective.
Prove that there does not exist a linear map from 𝐅5 to 𝐅2 whose null space
equals {(𝑥1, 𝑥2, 𝑥3, 𝑥4, 𝑥5) ∈𝐅5 ∶𝑥1 = 3𝑥2 and 𝑥3 = 𝑥4 = 𝑥5}.
Suppose there exists a linear map on 𝑉whose null space and range are both
finite-dimensional. Prove that 𝑉is finite-dimensional.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3B
Null Spaces and Ranges
Suppose 𝑉and 𝑊are both finite-dimensional. Prove that there exists an
injective linear map from 𝑉to 𝑊if and only if dim 𝑉≤dim 𝑊.
Suppose 𝑉and 𝑊are both finite-dimensional. Prove that there exists a
surjective linear map from 𝑉onto 𝑊if and only if dim 𝑉≥dim 𝑊.
Suppose 𝑉and 𝑊are finite-dimensional and that 𝑈is a subspace of 𝑉.
Prove that there exists 𝑇∈ℒ(𝑉, 𝑊) such that null 𝑇= 𝑈if and only if
dim 𝑈≥dim 𝑉−dim 𝑊.
Suppose 𝑊is finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Prove that 𝑇is injective
if and only if there exists 𝑆∈ℒ(𝑊, 𝑉) such that 𝑆𝑇is the identity operator
on 𝑉.
Suppose 𝑊is finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Prove that 𝑇is sur-
jective if and only if there exists 𝑆∈ℒ(𝑊, 𝑉) such that 𝑇𝑆is the identity
operator on 𝑊.
Suppose 𝑉is finite-dimensional, 𝑇∈ℒ(𝑉, 𝑊), and 𝑈is a subspace of 𝑊.
Prove that {𝑣∈𝑉∶𝑇𝑣∈𝑈} is a subspace of 𝑉and
dim{𝑣∈𝑉∶𝑇𝑣∈𝑈} = dim null 𝑇+ dim(𝑈∩range 𝑇).
Suppose 𝑈and 𝑉are finite-dimensional vector spaces and 𝑆∈ℒ(𝑉, 𝑊)
and 𝑇∈ℒ(𝑈, 𝑉). Prove that
dim null 𝑆𝑇≤dim null 𝑆+ dim null 𝑇.
Suppose 𝑈and 𝑉are finite-dimensional vector spaces and 𝑆∈ℒ(𝑉, 𝑊)
and 𝑇∈ℒ(𝑈, 𝑉). Prove that
dim range 𝑆𝑇≤min{dim range 𝑆, dim range 𝑇}.
(a) Suppose dim 𝑉= 5 and 𝑆, 𝑇∈ℒ(𝑉) are such that 𝑆𝑇= 0. Prove that
dim range 𝑇𝑆≤2.
(b) Give an example of 𝑆, 𝑇∈ℒ(𝐅5) with 𝑆𝑇= 0 and dim range 𝑇𝑆= 2.
Suppose that 𝑊is finite-dimensional and 𝑆, 𝑇∈ℒ(𝑉, 𝑊). Prove that
null 𝑆⊆null 𝑇if and only if there exists 𝐸∈ℒ(𝑊) such that 𝑇= 𝐸𝑆.
Suppose that 𝑉is finite-dimensional and 𝑆, 𝑇∈ℒ(𝑉, 𝑊). Prove that
range 𝑆⊆range 𝑇if and only if there exists 𝐸∈ℒ(𝑉) such that 𝑆= 𝑇𝐸.
Suppose 𝑃∈ℒ(𝑉) and 𝑃2 = 𝑃. Prove that 𝑉= null 𝑃⊕range 𝑃.
Suppose 𝐷∈ℒ(𝒫(𝐑)) is such that deg 𝐷𝑝= (deg 𝑝) −1 for every non-
constant polynomial 𝑝∈𝒫(𝐑). Prove that 𝐷is surjective.
The notation 𝐷is used above to remind you of the differentiation map that
sends a polynomial 𝑝to 𝑝′.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Suppose 𝑝∈𝒫(𝐑). Prove that there exists a polynomial 𝑞∈𝒫(𝐑) such
that 5𝑞″ + 3𝑞′ = 𝑝.
This exercise can be done without linear algebra, but it’s more fun to do it
using linear algebra.
Suppose 𝜑∈ℒ(𝑉, 𝐅) and 𝜑≠0. Suppose 𝑢∈𝑉is not in null 𝜑. Prove
that
𝑉= null 𝜑⊕{𝑎𝑢∶𝑎∈𝐅}.
Suppose 𝑉is finite-dimensional, 𝑋is a subspace of 𝑉, and 𝑌is a finite-
dimensional subspace of 𝑊. Prove that there exists 𝑇∈ℒ(𝑉, 𝑊) such that
null 𝑇= 𝑋and range 𝑇= 𝑌if and only if dim 𝑋+ dim 𝑌= dim 𝑉.
Suppose 𝑉is finite-dimensional with dim 𝑉> 1. Show that if 𝜑∶ℒ(𝑉)→𝐅
is a linear map such that 𝜑(𝑆𝑇) = 𝜑(𝑆)𝜑(𝑇) for all 𝑆, 𝑇∈ℒ(𝑉), then
𝜑= 0.
Hint: The description of the two-sided ideals of ℒ(𝑉) given by Exercise 17
in Section 3A might be useful.
Suppose that 𝑉and 𝑊are real vector spaces and 𝑇∈ℒ(𝑉, 𝑊). Define
𝑇𝐂∶𝑉𝐂→𝑊𝐂by
𝑇𝐂(𝑢+ 𝑖𝑣) = 𝑇𝑢+ 𝑖𝑇𝑣
for all 𝑢, 𝑣∈𝑉.
(a) Show that 𝑇𝐂is a (complex) linear map from 𝑉𝐂to 𝑊𝐂.
(b) Show that 𝑇𝐂is injective if and only if 𝑇is injective.
(c) Show that range 𝑇𝐂= 𝑊𝐂if and only if range 𝑇= 𝑊.
See Exercise 8 in Section 1B for the definition of the complexification 𝑉𝐂.
The linear map 𝑇𝐂is called the complexification of the linear map 𝑇.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3C
Matrices
3C Matrices
Representing a Linear Map by a Matrix
We know that if 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝑇∶𝑉→𝑊is linear, then the values
of 𝑇𝑣1, … , 𝑇𝑣𝑛determine the values of 𝑇on arbitrary vectors in 𝑉—see the linear
map lemma (3.4). As we will soon see, matrices provide an efficient method of
recording the values of the 𝑇𝑣𝑘’s in terms of a basis of 𝑊.
3.29
definition: matrix, 𝐴𝑗,𝑘
Suppose 𝑚and 𝑛are nonnegative integers. An 𝑚-by-𝑛matrix 𝐴is a rectangular
array of elements of 𝐅with 𝑚rows and 𝑛columns:
𝐴= ⎛⎜⎜⎜
⎝
𝐴1,1
⋯
𝐴1,𝑛
⋮
⋮
𝐴𝑚,1
⋯
𝐴𝑚,𝑛
⎞⎟⎟⎟
⎠
.
The notation 𝐴𝑗,𝑘denotes the entry in row 𝑗, column 𝑘of 𝐴.
3.30
example: 𝐴𝑗,𝑘equals entry in row 𝑗, column 𝑘of 𝐴
When dealing with matrices, the first
index refers to the row number; the sec-
ond index refers to the column number.
Suppose 𝐴
=
( 8
5 −3𝑖
).
Thus 𝐴2,3 refers to the entry in the second
row, third column of 𝐴, which means that
𝐴2,3 = 7.
Now we come to the key definition in this section.
3.31
definition: matrix of a linear map, ℳ(𝑇)
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝑤1, … , 𝑤𝑚is a basis
of 𝑊. The matrix of 𝑇with respect to these bases is the 𝑚-by-𝑛matrix ℳ(𝑇)
whose entries 𝐴𝑗,𝑘are defined by
𝑇𝑣𝑘= 𝐴1,𝑘𝑤1 + ⋯+ 𝐴𝑚,𝑘𝑤𝑚.
If the bases 𝑣1, … , 𝑣𝑛and 𝑤1, … , 𝑤𝑚are not clear from the context, then the
notation ℳ(𝑇, (𝑣1, … , 𝑣𝑛), (𝑤1, … , 𝑤𝑚)) is used.
The matrix ℳ(𝑇) of a linear map 𝑇∈ℒ(𝑉, 𝑊) depends on the basis 𝑣1, … , 𝑣𝑛
of 𝑉and the basis 𝑤1, … , 𝑤𝑚of 𝑊, as well as on 𝑇. However, the bases should
be clear from the context, and thus they are often not included in the notation.
To remember how ℳ(𝑇) is constructed from 𝑇, you might write across the
top of the matrix the basis vectors 𝑣1, … , 𝑣𝑛for the domain and along the left the
basis vectors 𝑤1, … , 𝑤𝑚for the vector space into which 𝑇maps, as follows:
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
𝑣1
⋯
𝑣𝑘
⋯
𝑣𝑛
𝑤1
ℳ(𝑇) =
⋮
𝑤𝑚
⎛⎜⎜⎜
⎝
𝐴1,𝑘
⋮
𝐴𝑚,𝑘
⎞⎟⎟⎟
⎠
.
The 𝑘th column of ℳ(𝑇) consists of
the scalars needed to write 𝑇𝑣𝑘as a
linear combination of 𝑤1, … , 𝑤𝑚:
𝑇𝑣𝑘=
𝑚
∑
𝑗=1
𝐴𝑗,𝑘𝑤𝑗.
In the matrix above only the 𝑘th col-
umn is shown. Thus the second index of
each displayed entry of the matrix above
is 𝑘. The picture above should remind you
that 𝑇𝑣𝑘can be computed from ℳ(𝑇) by
multiplying each entry in the 𝑘th column
by the corresponding 𝑤𝑗from the left col-
umn, and then adding up the resulting
vectors.
If
𝑇
is a linear map from an
𝑛-dimensional vector space to an
𝑚-dimensional vector space,
then
ℳ(𝑇) is an 𝑚-by-𝑛matrix.
If 𝑇is a linear map from 𝐅𝑛to 𝐅𝑚,
then unless stated otherwise, assume the
bases in question are the standard ones
(where the 𝑘th basis vector is 1 in the 𝑘th
slot and 0 in all other slots). If you think
of elements of 𝐅𝑚as columns of 𝑚numbers, then you can think of the 𝑘th column
of ℳ(𝑇) as 𝑇applied to the 𝑘th standard basis vector.
3.32
example: the matrix of a linear map from 𝐅2 to 𝐅3
Suppose 𝑇∈ℒ(𝐅2, 𝐅3) is defined by
𝑇(𝑥, 𝑦) = (𝑥+ 3𝑦, 2𝑥+ 5𝑦, 7𝑥+ 9𝑦).
Because 𝑇(1, 0) = (1, 2, 7) and 𝑇(0, 1) = (3, 5, 9), the matrix of 𝑇with respect
to the standard bases is the 3-by-2 matrix below:
ℳ(𝑇) = ⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
.
When working with 𝒫𝑚(𝐅), use the standard basis 1, 𝑥, 𝑥2, … , 𝑥𝑚unless the
context indicates otherwise.
3.33
example: matrix of the differentiation map from 𝒫3(𝐑) to 𝒫2(𝐑)
Suppose 𝐷∈ℒ(𝒫3(𝐑), 𝒫2(𝐑)) is the differentiation map defined by 𝐷𝑝= 𝑝′.
Because (𝑥𝑛)′ = 𝑛𝑥𝑛−1, the matrix of 𝐷with respect to the standard bases is the
3-by-4 matrix below:
ℳ(𝐷) = ⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3C
Matrices
Addition and Scalar Multiplication of Matrices
For the rest of this section, assume that 𝑈, 𝑉, and 𝑊are finite-dimensional and
that a basis has been chosen for each of these vector spaces. Thus for each linear
map from 𝑉to 𝑊, we can talk about its matrix (with respect to the chosen bases).
Is the matrix of the sum of two linear maps equal to the sum of the matrices of
the two maps? Right now this question does not yet make sense because although
we have defined the sum of two linear maps, we have not defined the sum of two
matrices. Fortunately, the natural definition of the sum of two matrices has the
right properties. Specifically, we make the following definition.
3.34
definition: matrix addition
The sum of two matrices of the same size is the matrix obtained by adding
corresponding entries in the matrices:
⎛⎜⎜⎜
⎝
𝐴1,1
⋯
𝐴1,𝑛
⋮
⋮
𝐴𝑚,1
⋯
𝐴𝑚,𝑛
⎞⎟⎟⎟
⎠
+ ⎛⎜⎜⎜
⎝
𝐶1,1
⋯
𝐶1,𝑛
⋮
⋮
𝐶𝑚,1
⋯
𝐶𝑚,𝑛
⎞⎟⎟⎟
⎠
= ⎛⎜⎜⎜
⎝
𝐴1,1 + 𝐶1,1
⋯
𝐴1,𝑛+ 𝐶1,𝑛
⋮
⋮
𝐴𝑚,1 + 𝐶𝑚,1
⋯
𝐴𝑚,𝑛+ 𝐶𝑚,𝑛
⎞⎟⎟⎟
⎠
.
In the next result, the assumption is that the same bases are used for all three
linear maps 𝑆+ 𝑇, 𝑆, and 𝑇.
3.35
matrix of the sum of linear maps
Suppose 𝑆, 𝑇∈ℒ(𝑉, 𝑊). Then ℳ(𝑆+ 𝑇) = ℳ(𝑆) + ℳ(𝑇).
The verification of the result above follows from the definitions and is left to
the reader.
Still assuming that we have some bases in mind, is the matrix of a scalar times
a linear map equal to the scalar times the matrix of the linear map? Again, the
question does not yet make sense because we have not defined scalar multiplication
on matrices. Fortunately, the natural definition again has the right properties.
3.36
definition: scalar multiplication of a matrix
The product of a scalar and a matrix is the matrix obtained by multiplying
each entry in the matrix by the scalar:
𝜆⎛⎜⎜⎜
⎝
𝐴1,1
⋯
𝐴1,𝑛
⋮
⋮
𝐴𝑚,1
⋯
𝐴𝑚,𝑛
⎞⎟⎟⎟
⎠
= ⎛⎜⎜⎜
⎝
𝜆𝐴1,1
⋯
𝜆𝐴1,𝑛
⋮
⋮
𝜆𝐴𝑚,1
⋯
𝜆𝐴𝑚,𝑛
⎞⎟⎟⎟
⎠
.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
3.37
example: addition and scalar multiplication of matrices
2 (
−1
5 ) + ( 4
6 ) = (
−2
10 ) + ( 4
6 ) = ( 10
−1
16 )
In the next result, the assumption is that the same bases are used for both the
linear maps 𝜆𝑇and 𝑇.
3.38
the matrix of a scalar times a linear map
Suppose 𝜆∈𝐅and 𝑇∈ℒ(𝑉, 𝑊). Then ℳ(𝜆𝑇) = 𝜆ℳ(𝑇).
The verification of the result above is also left to the reader.
Because addition and scalar multiplication have now been defined for matrices,
you should not be surprised that a vector space is about to appear. First we
introduce a bit of notation so that this new vector space has a name, and then we
find the dimension of this new vector space.
3.39
notation: 𝐅𝑚,𝑛
For 𝑚and 𝑛positive integers, the set of all 𝑚-by-𝑛matrices with entries in 𝐅
is denoted by 𝐅𝑚,𝑛.
3.40
dim 𝐅𝑚,𝑛= 𝑚𝑛
Suppose 𝑚and 𝑛are positive integers. With addition and scalar multiplication
defined as above, 𝐅𝑚,𝑛is a vector space of dimension 𝑚𝑛.
Proof
The verification that 𝐅𝑚,𝑛is a vector space is left to the reader. Note that
the additive identity of 𝐅𝑚,𝑛is the 𝑚-by-𝑛matrix all of whose entries equal 0.
The reader should also verify that the list of distinct 𝑚-by-𝑛matrices that have
0 in all entries except for a 1 in one entry is a basis of 𝐅𝑚,𝑛. There are 𝑚𝑛such
matrices, so the dimension of 𝐅𝑚,𝑛equals 𝑚𝑛.
Matrix Multiplication
Suppose, as previously, that 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝑤1, … , 𝑤𝑚is a basis
of 𝑊. Suppose also that 𝑢1, … , 𝑢𝑝is a basis of 𝑈.
Consider linear maps 𝑇∶𝑈→𝑉and 𝑆∶𝑉→𝑊. The composition 𝑆𝑇is a
linear map from 𝑈to 𝑊. Does ℳ(𝑆𝑇) equal ℳ(𝑆)ℳ(𝑇)? This question does
not yet make sense because we have not defined the product of two matrices. We
will choose a definition of matrix multiplication that forces this question to have
a positive answer. Let’s see how to do this.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3C
Matrices
Suppose ℳ(𝑆) = 𝐴and ℳ(𝑇) = 𝐵. For 1 ≤𝑘≤𝑝, we have
(𝑆𝑇)𝑢𝑘= 𝑆(
𝑛
∑
𝑟=1
𝐵𝑟,𝑘𝑣𝑟)
=
𝑛
∑
𝑟=1
𝐵𝑟,𝑘𝑆𝑣𝑟
=
𝑛
∑
𝑟=1
𝐵𝑟,𝑘
𝑚
∑
𝑗=1
𝐴𝑗,𝑟𝑤𝑗
=
𝑚
∑
𝑗=1
(
𝑛
∑
𝑟=1
𝐴𝑗,𝑟𝐵𝑟,𝑘)𝑤𝑗.
Thus ℳ(𝑆𝑇) is the 𝑚-by-𝑝matrix whose entry in row 𝑗, column 𝑘, equals
𝑛
∑
𝑟=1
𝐴𝑗,𝑟𝐵𝑟,𝑘.
Now we see how to define matrix multiplication so that the desired equation
ℳ(𝑆𝑇) = ℳ(𝑆)ℳ(𝑇) holds.
3.41
definition: matrix multiplication
Suppose 𝐴is an 𝑚-by-𝑛matrix and 𝐵is an 𝑛-by-𝑝matrix. Then 𝐴𝐵is defined
to be the 𝑚-by-𝑝matrix whose entry in row 𝑗, column 𝑘, is given by the
equation
(𝐴𝐵)𝑗,𝑘=
𝑛
∑
𝑟=1
𝐴𝑗,𝑟𝐵𝑟,𝑘.
Thus the entry in row 𝑗, column 𝑘, of 𝐴𝐵is computed by taking row 𝑗of 𝐴and
column 𝑘of 𝐵, multiplying together corresponding entries, and then summing.
You may have learned this definition
of matrix multiplication in an earlier
course, although you may not have
seen this motivation for it.
Note that we define the product of
two matrices only when the number of
columns of the first matrix equals the
number of rows of the second matrix.
3.42
example: matrix multiplication
Here we multiply together a 3-by-2 matrix and a 2-by-4 matrix, obtaining a
3-by-4 matrix:
⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
( 6
−1 ) = ⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
.
Matrix multiplication is not commutative—𝐴𝐵is not necessarily equal to
𝐵𝐴even if both products are defined (see Exercise 10). Matrix multiplication is
distributive and associative (see Exercises 11 and 12).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
In the next result, we assume that the same basis of 𝑉is used in considering
𝑇∈ℒ(𝑈, 𝑉) and 𝑆∈ℒ(𝑉, 𝑊), the same basis of 𝑊is used in considering
𝑆∈ℒ(𝑉, 𝑊) and 𝑆𝑇∈ℒ(𝑈, 𝑊), and the same basis of 𝑈is used in considering
𝑇∈ℒ(𝑈, 𝑉) and 𝑆𝑇∈ℒ(𝑈, 𝑊).
3.43
matrix of product of linear maps
If 𝑇∈ℒ(𝑈, 𝑉) and 𝑆∈ℒ(𝑉, 𝑊), then ℳ(𝑆𝑇) = ℳ(𝑆)ℳ(𝑇).
The proof of the result above is the calculation that was done as motivation
before the definition of matrix multiplication.
In the next piece of notation, note that as usual the first index refers to a row
and the second index refers to a column, with a vertically centered dot used as a
placeholder.
3.44
notation: 𝐴𝑗,⋅, 𝐴⋅,𝑘
Suppose 𝐴is an 𝑚-by-𝑛matrix.
• If 1 ≤𝑗≤𝑚, then 𝐴𝑗,⋅denotes the 1-by-𝑛matrix consisting of row 𝑗of 𝐴.
• If 1 ≤𝑘≤𝑛, then 𝐴⋅,𝑘denotes the 𝑚-by-1 matrix consisting of column 𝑘
of 𝐴.
3.45
example: 𝐴𝑗,⋅equals 𝑗th row of 𝐴and 𝐴⋅,𝑘equals 𝑘th column of 𝐴
The notation 𝐴2,⋅denotes the second row of 𝐴and 𝐴⋅,2 denotes the second
column of 𝐴. Thus if 𝐴= ( 8
7 ), then
𝐴2,⋅= ( 1
7 )
and
𝐴⋅,2 = ( 4
9 ) .
The product of a 1-by-𝑛matrix and an 𝑛-by-1 matrix is a 1-by-1 matrix. How-
ever, we will frequently identify a 1-by-1 matrix with its entry. For example,
( 3
4 ) ( 6
2 ) = ( 26 )
because 3 ⋅6 + 4 ⋅2 = 26. However, we can identify ( 26 ) with 26, writing
( 3
4 ) ( 6
2 ) = 26.
The next result uses the convention discussed in the paragraph above to give
another way to think of matrix multiplication. For example, the next result and
the calculation in the paragraph above explain why the entry in row 2, column 1,
of the product in Example 3.42 equals 26.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3C
Matrices
3.46
entry of matrix product equals row times column
Suppose 𝐴is an 𝑚-by-𝑛matrix and 𝐵is an 𝑛-by-𝑝matrix. Then
(𝐴𝐵)𝑗,𝑘= 𝐴𝑗,⋅𝐵⋅,𝑘
if 1 ≤𝑗≤𝑚and 1 ≤𝑘≤𝑝. In other words, the entry in row 𝑗, column 𝑘, of
𝐴𝐵equals (row 𝑗of 𝐴) times (column 𝑘of 𝐵).
Proof
Suppose 1 ≤𝑗≤𝑚and 1 ≤𝑘≤𝑝. The definition of matrix multiplication
states that
3.47
(𝐴𝐵)𝑗,𝑘= 𝐴𝑗,1𝐵1,𝑘+ ⋯+ 𝐴𝑗,𝑛𝐵𝑛,𝑘.
The definition of matrix multiplication also implies that the product of the 1-by-𝑛
matrix 𝐴𝑗,⋅and the 𝑛-by-1 matrix 𝐵⋅,𝑘is the 1-by-1 matrix whose entry is the
number on the right side of the equation above. Thus the entry in row 𝑗, column 𝑘,
of 𝐴𝐵equals (row 𝑗of 𝐴) times (column 𝑘of 𝐵).
The next result gives yet another way to think of matrix multiplication. In
the result below, (𝐴𝐵)⋅,𝑘is column 𝑘of the 𝑚-by-𝑝matrix 𝐴𝐵. Thus (𝐴𝐵)⋅,𝑘is
an 𝑚-by-1 matrix. Also, 𝐴𝐵⋅,𝑘is an 𝑚-by-1 matrix because it is the product of an
𝑚-by-𝑛matrix and an 𝑛-by-1 matrix. Thus the two sides of the equation in the
result below have the same size, making it reasonable that they might be equal.
3.48
column of matrix product equals matrix times column
Suppose 𝐴is an 𝑚-by-𝑛matrix and 𝐵is an 𝑛-by-𝑝matrix. Then
(𝐴𝐵)⋅,𝑘= 𝐴𝐵⋅,𝑘
if 1 ≤𝑘≤𝑝. In other words, column 𝑘of 𝐴𝐵equals 𝐴times column 𝑘of 𝐵.
Proof
As discussed above, (𝐴𝐵)⋅,𝑘and 𝐴𝐵⋅,𝑘are both 𝑚-by-1 matrices. If 1 ≤
𝑗≤𝑚, then the entry in row 𝑗of (𝐴𝐵)⋅,𝑘is the left side of 3.47 and the entry in
row 𝑗of 𝐴𝐵⋅,𝑘is the right side of 3.47. Thus (𝐴𝐵)⋅,𝑘= 𝐴𝐵⋅,𝑘.
Our next result will give another way of thinking about the product of an
𝑚-by-𝑛matrix and an 𝑛-by-1 matrix, motivated by the next example.
3.49
example: product of a 3-by-2 matrix and a 2-by-1 matrix
Use our definitions and basic arithmetic to verify that
⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
( 5
1 ) = ⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
= 5 ⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
+ 1 ⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
.
Thus in this example, the product of a 3-by-2 matrix and a 2-by-1 matrix is a
linear combination of the columns of the 3-by-2 matrix, with the scalars (5 and 1)
that multiply the columns coming from the 2-by-1 matrix.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
The next result generalizes the example above.
3.50
linear combination of columns
Suppose 𝐴is an 𝑚-by-𝑛matrix and 𝑏= ⎛⎜⎜⎜
⎝
𝑏1
⋮
𝑏𝑛
⎞⎟⎟⎟
⎠
is an 𝑛-by-1 matrix. Then
𝐴𝑏= 𝑏1𝐴⋅,1 + ⋯+ 𝑏𝑛𝐴⋅,𝑛.
In other words, 𝐴𝑏is a linear combination of the columns of 𝐴, with the
scalars that multiply the columns coming from 𝑏.
Proof
If 𝑘∈{1, … , 𝑚}, then the definition of matrix multiplication implies that
the entry in row 𝑘of the 𝑚-by-1 matrix 𝐴𝑏is
𝐴𝑘,1𝑏1 + ⋯+ 𝐴𝑘,𝑛𝑏𝑛.
The entry in row 𝑘of 𝑏1𝐴⋅,1 + ⋯+ 𝑏𝑛𝐴⋅,𝑛also equals the number displayed above.
Because 𝐴𝑏and 𝑏1𝐴⋅,1 + ⋯+ 𝑏𝑛𝐴⋅,𝑛have the same entry in row 𝑘for each
𝑘∈{1, … , 𝑚}, we conclude that 𝐴𝑏= 𝑏1𝐴⋅,1 + ⋯+ 𝑏𝑛𝐴⋅,𝑛.
Our two previous results focus on the columns of a matrix. Analogous results
hold for the rows of a matrix. Specifically, see Exercises 8 and 9, which can be
proved using appropriate modifications of the proofs of 3.48 and 3.50.
The next result is the main tool used in the next subsection to prove the
column–row factorization (3.56) and to prove that the column rank of a matrix
equals the row rank (3.57). To be consistent with the notation often used with the
column–row factorization, including in the next subsection, the matrices in the
next result are called 𝐶and 𝑅instead of 𝐴and 𝐵.
3.51
matrix multiplication as linear combinations of columns or rows
Suppose 𝐶is an 𝑚-by-𝑐matrix and 𝑅is a 𝑐-by-𝑛matrix.
(a) If 𝑘∈{1, … , 𝑛}, then column 𝑘of 𝐶𝑅is a linear combination of the
columns of 𝐶, with the coefficients of this linear combination coming
from column 𝑘of 𝑅.
(b) If 𝑗∈{1, … , 𝑚}, then row 𝑗of 𝐶𝑅is a linear combination of the rows of
𝑅, with the coefficients of this linear combination coming from row 𝑗of
𝐶.
Proof
Suppose 𝑘∈{1, … , 𝑛}. Then column 𝑘of 𝐶𝑅equals 𝐶𝑅⋅,𝑘(by 3.48),
which equals the linear combination of the columns of 𝐶with coefficients coming
from 𝑅⋅,𝑘(by 3.50). Thus (a) holds.
To prove (b), follow the pattern of the proof of (a) but use rows instead of
columns and use Exercises 8 and 9 instead of 3.48 and 3.50.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3C
Matrices
Column–Row Factorization and Rank of a Matrix
We begin by defining two nonnegative integers associated with each matrix.
3.52
definition: column rank, row rank
Suppose 𝐴is an 𝑚-by-𝑛matrix with entries in 𝐅.
• The column rank of 𝐴is the dimension of the span of the columns of 𝐴
in 𝐅𝑚,1.
• The row rank of 𝐴is the dimension of the span of the rows of 𝐴in 𝐅1,𝑛.
If 𝐴is an 𝑚-by-𝑛matrix, then the column rank of 𝐴is at most 𝑛(because 𝐴has
𝑛columns) and the column rank of 𝐴is also at most 𝑚(because dim 𝐅𝑚,1 = 𝑚).
Similarly, the row rank of 𝐴is also at most min{𝑚, 𝑛}.
3.53
example: column rank and row rank of a 2-by-4 matrix
Suppose
𝐴= ( 4
9 ) .
The column rank of 𝐴is the dimension of
span ⎛⎜⎜
⎝
( 4
3 ) , ( 7
5 ) , ( 1
2 ) , ( 8
9 )⎞⎟⎟
⎠
in 𝐅2,1. Neither of the first two vectors listed above in 𝐅2,1 is a scalar multiple of
the other. Thus the span of this list of length four has dimension at least two. The
span of this list of vectors in 𝐅2,1 cannot have dimension larger than two because
dim 𝐅2,1 = 2. Thus the span of this list has dimension two, which means that the
column rank of 𝐴is two.
The row rank of 𝐴is the dimension of
span(( 4
8 ) , ( 3
9 ))
in 𝐅1,4. Neither of the two vectors listed above in 𝐅1,4 is a scalar multiple of the
other. Thus the span of this list of length two has dimension two, which means
that the row rank of 𝐴is two.
We now define the transpose of a matrix.
3.54
definition: transpose, 𝐴t
The transpose of a matrix 𝐴, denoted by 𝐴t, is the matrix obtained from 𝐴by
interchanging rows and columns. Specifically, if 𝐴is an 𝑚-by-𝑛matrix, then
𝐴t is the 𝑛-by-𝑚matrix whose entries are given by the equation
(𝐴t)𝑘,𝑗= 𝐴𝑗,𝑘.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
3.55
example: transpose of a matrix
If 𝐴= ⎛⎜⎜⎜
⎝
−7
−4
⎞⎟⎟⎟
⎠
, then 𝐴t = (
−4
−7
).
Note that here 𝐴is a 3-by-2 matrix and 𝐴t is a 2-by-3 matrix.
The transpose has nice algebraic properties: (𝐴+ 𝐵)t = 𝐴t + 𝐵t, (𝜆𝐴)t = 𝜆𝐴t,
and (𝐴𝐶)t = 𝐶t𝐴t for all 𝑚-by-𝑛matrices 𝐴, 𝐵, all 𝜆∈𝐅, and all 𝑛-by-𝑝matrices
𝐶(see Exercises 14 and 15).
The next result will be the main tool used to prove that the column rank equals
the row rank (see 3.57).
3.56
column–row factorization
Suppose 𝐴is an 𝑚-by-𝑛matrix with entries in 𝐅and column rank 𝑐≥1. Then
there exist an 𝑚-by-𝑐matrix 𝐶and a 𝑐-by-𝑛matrix 𝑅, both with entries in 𝐅,
such that 𝐴= 𝐶𝑅.
Proof
Each column of 𝐴is an 𝑚-by-1 matrix. The list 𝐴⋅,1, … , 𝐴⋅,𝑛of columns
of 𝐴can be reduced to a basis of the span of the columns of 𝐴(by 2.30). This
basis has length 𝑐, by the definition of the column rank. The 𝑐columns in this
basis can be put together to form an 𝑚-by-𝑐matrix 𝐶.
If 𝑘∈{1, … , 𝑛}, then column 𝑘of 𝐴is a linear combination of the columns
of 𝐶. Make the coefficients of this linear combination into column 𝑘of a 𝑐-by-𝑛
matrix that we call 𝑅. Then 𝐴= 𝐶𝑅, as follows from 3.51(a).
In Example 3.53, the column rank and row rank turned out to equal each other.
The next result states that this happens for all matrices.
3.57
column rank equals row rank
Suppose 𝐴∈𝐅𝑚,𝑛. Then the column rank of 𝐴equals the row rank of 𝐴.
Proof
Let 𝑐denote the column rank of 𝐴. If 𝑐= 0, then 𝐴= 0 and hence the
row rank of 𝐴also equals 0. Thus we can assume that 𝑐≥1.
Let 𝐴= 𝐶𝑅be the column–row factorization of 𝐴given by 3.56, where 𝐶is
an 𝑚-by-𝑐matrix and 𝑅is a 𝑐-by-𝑛matrix. Then 3.51(b) tells us that every row
of 𝐴is a linear combination of the rows of 𝑅. Because 𝑅has 𝑐rows, this implies
that the row rank of 𝐴is less than or equal to the column rank 𝑐of 𝐴.
To prove the inequality in the other direction, apply the previous paragraph
result to 𝐴t, getting
column rank of 𝐴= row rank of 𝐴t
≤column rank of 𝐴t
= row rank of 𝐴.
Thus the column rank of 𝐴equals the row rank of 𝐴.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3C
Matrices
Because the column rank equals the row rank, the last result allows us to
dispense with the terms “column rank” and “row rank” and just use the simpler
term “rank”.
3.58
definition: rank
The rank of a matrix 𝐴∈𝐅𝑚,𝑛is the column rank of 𝐴.
See 3.133 and Exercise 8 in Section 7A for alternative proofs that the column
rank equals the row rank.
Exercises 3C
Suppose 𝑇∈ℒ(𝑉, 𝑊). Show that with respect to each choice of bases of
𝑉and 𝑊, the matrix of 𝑇has at least dim range 𝑇nonzero entries.
Suppose 𝑇∈ℒ(𝑉, 𝑊), where 𝑉and 𝑊are finite-dimensional and nonzero.
Prove that dim range 𝑇= 1 if and only if there exist a basis of 𝑉and a basis
of 𝑊such that with respect to these bases, all entries of ℳ(𝑇) equal 1.
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝑤1, … , 𝑤𝑚is a basis of 𝑊.
(a) Show that if 𝑆, 𝑇∈ℒ(𝑉, 𝑊), then ℳ(𝑆+ 𝑇) = ℳ(𝑆) + ℳ(𝑇).
(b) Show that if 𝜆∈𝐅and 𝑇∈ℒ(𝑉, 𝑊), then ℳ(𝜆𝑇) = 𝜆ℳ(𝑇).
This exercise asks you to verify 3.35 and 3.38.
Suppose that 𝐷∈ℒ(𝒫3(𝐑), 𝒫2(𝐑)) is the differentiation map defined by
𝐷𝑝= 𝑝′. Find a basis of 𝒫3(𝐑) and a basis of 𝒫2(𝐑) such that the matrix of
𝐷with respect to these bases is
⎛⎜⎜⎜
⎝
⎞⎟⎟⎟
⎠
.
Compare with Example 3.33. The next exercise generalizes this exercise.
Suppose 𝑉and 𝑊are finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Prove that there
exist a basis of 𝑉and a basis of 𝑊such that with respect to these bases, all
entries of ℳ(𝑇) are 0 except that the entries in row 𝑘, column 𝑘, equal 1 if
1 ≤𝑘≤dim range 𝑇.
Suppose 𝑣1, … , 𝑣𝑚is a basis of 𝑉and 𝑊is finite-dimensional. Suppose
𝑇∈ℒ(𝑉, 𝑊). Prove that there exists a basis 𝑤1, … , 𝑤𝑛of 𝑊such that all
entries in the first column of ℳ(𝑇) [with respect to the bases 𝑣1, … , 𝑣𝑚and
𝑤1, … , 𝑤𝑛] are 0 except for possibly a 1 in the first row, first column.
In this exercise, unlike Exercise 5, you are given the basis of 𝑉instead of
being able to choose a basis of 𝑉.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Suppose 𝑤1, … , 𝑤𝑛is a basis of 𝑊and 𝑉is finite-dimensional. Suppose
𝑇∈ℒ(𝑉, 𝑊). Prove that there exists a basis 𝑣1, … , 𝑣𝑚of 𝑉such that all
entries in the first row of ℳ(𝑇) [with respect to the bases 𝑣1, … , 𝑣𝑚and
𝑤1, … , 𝑤𝑛] are 0 except for possibly a 1 in the first row, first column.
In this exercise, unlike Exercise 5, you are given the basis of 𝑊instead of
being able to choose a basis of 𝑊.
Suppose 𝐴is an 𝑚-by-𝑛matrix and 𝐵is an 𝑛-by-𝑝matrix. Prove that
(𝐴𝐵)𝑗,⋅= 𝐴𝑗,⋅𝐵
for each 1 ≤𝑗≤𝑚. In other words, show that row 𝑗of 𝐴𝐵equals (row 𝑗of 𝐴)
times 𝐵.
This exercise gives the row version of 3.48.
Suppose 𝑎= ( 𝑎1
⋯
𝑎𝑛) is a 1-by-𝑛matrix and 𝐵is an 𝑛-by-𝑝matrix.
Prove that
𝑎𝐵= 𝑎1𝐵1,⋅+ ⋯+ 𝑎𝑛𝐵𝑛,⋅.
In other words, show that 𝑎𝐵is a linear combination of the rows of 𝐵, with
the scalars that multiply the rows coming from 𝑎.
This exercise gives the row version of 3.50.
Give an example of 2-by-2 matrices 𝐴and 𝐵such that 𝐴𝐵≠𝐵𝐴.
Prove that the distributive property holds for matrix addition and matrix
multiplication. In other words, suppose 𝐴, 𝐵, 𝐶, 𝐷, 𝐸, and 𝐹are matrices
whose sizes are such that 𝐴(𝐵+ 𝐶) and (𝐷+ 𝐸)𝐹make sense. Explain why
𝐴𝐵+ 𝐴𝐶and 𝐷𝐹+ 𝐸𝐹both make sense and prove that
𝐴(𝐵+ 𝐶) = 𝐴𝐵+ 𝐴𝐶
and
(𝐷+ 𝐸)𝐹= 𝐷𝐹+ 𝐸𝐹.
Prove that matrix multiplication is associative. In other words, suppose 𝐴, 𝐵,
and 𝐶are matrices whose sizes are such that (𝐴𝐵)𝐶makes sense. Explain
why 𝐴(𝐵𝐶) makes sense and prove that
(𝐴𝐵)𝐶= 𝐴(𝐵𝐶).
Try to find a clean proof that illustrates the following quote from Emil Artin:
“It is my experience that proofs involving matrices can be shortened by 50%
if one throws the matrices out.”
Suppose 𝐴is an 𝑛-by-𝑛matrix and 1 ≤𝑗, 𝑘≤𝑛. Show that the entry in
row 𝑗, column 𝑘, of 𝐴3 (which is defined to mean 𝐴𝐴𝐴) is
𝑛
∑
𝑝=1
𝑛
∑
𝑟=1
𝐴𝑗,𝑝𝐴𝑝,𝑟𝐴𝑟,𝑘.
Suppose 𝑚and 𝑛are positive integers. Prove that the function 𝐴↦𝐴t is a
linear map from 𝐅𝑚,𝑛to 𝐅𝑛,𝑚.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3C
Matrices
Prove that if 𝐴is an 𝑚-by-𝑛matrix and 𝐶is an 𝑛-by-𝑝matrix, then
(𝐴𝐶)t = 𝐶t𝐴t.
This exercise shows that the transpose of the product of two matrices is the
product of the transposes in the opposite order.
Suppose 𝐴is an 𝑚-by-𝑛matrix with 𝐴≠0. Prove that the rank of 𝐴is 1
if and only if there exist (𝑐1, … , 𝑐𝑚) ∈𝐅𝑚and (𝑑1, … , 𝑑𝑛) ∈𝐅𝑛such that
𝐴𝑗,𝑘= 𝑐𝑗𝑑𝑘for every 𝑗= 1, … , 𝑚and every 𝑘= 1, … , 𝑛.
Suppose 𝑇∈ℒ(𝑉), and 𝑢1, … , 𝑢𝑛and 𝑣1, … , 𝑣𝑛are bases of 𝑉. Prove that
the following are equivalent.
(a) 𝑇is injective.
(b) The columns of ℳ(𝑇) are linearly independent in 𝐅𝑛,1.
(c) The columns of ℳ(𝑇) span 𝐅𝑛,1.
(d) The rows of ℳ(𝑇) span 𝐅1,𝑛.
(e) The rows of ℳ(𝑇) are linearly independent in 𝐅1,𝑛.
Here ℳ(𝑇) means ℳ(𝑇, (𝑢1, … , 𝑢𝑛), (𝑣1, … , 𝑣𝑛)).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
3D Invertibility and Isomorphisms
Invertible Linear Maps
We begin this section by defining the notions of invertible and inverse in the
context of linear maps.
3.59
definition: invertible, inverse
• A linear map 𝑇∈ℒ(𝑉, 𝑊) is called invertible if there exists a linear map
𝑆∈ℒ(𝑊, 𝑉) such that 𝑆𝑇equals the identity operator on 𝑉and 𝑇𝑆equals
the identity operator on 𝑊.
• A linear map 𝑆∈ℒ(𝑊, 𝑉) satisfying 𝑆𝑇= 𝐼and 𝑇𝑆= 𝐼is called an
inverse of 𝑇(note that the first 𝐼is the identity operator on 𝑉and the second
𝐼is the identity operator on 𝑊).
The definition above mentions “an inverse”. However, the next result shows
that we can change this terminology to “the inverse”.
3.60
inverse is unique
An invertible linear map has a unique inverse.
Proof
Suppose 𝑇∈ℒ(𝑉, 𝑊) is invertible and 𝑆1 and 𝑆2 are inverses of 𝑇. Then
𝑆1 = 𝑆1𝐼= 𝑆1(𝑇𝑆2) = (𝑆1𝑇)𝑆2 = 𝐼𝑆2 = 𝑆2.
Thus 𝑆1 = 𝑆2.
Now that we know that the inverse is unique, we can give it a notation.
3.61
notation: 𝑇−1
If 𝑇is invertible, then its inverse is denoted by 𝑇−1. In other words, if
𝑇∈ℒ(𝑉, 𝑊) is invertible, then 𝑇−1 is the unique element of ℒ(𝑊, 𝑉) such
that 𝑇−1𝑇= 𝐼and 𝑇𝑇−1 = 𝐼.
3.62
example: inverse of a linear map from 𝐑3 to 𝐑3
Suppose 𝑇∈ℒ(𝐑3) is defined by 𝑇(𝑥, 𝑦, 𝑧) = (−𝑦, 𝑥, 4𝑧). Thus 𝑇is a
counterclockwise rotation by 90∘in the 𝑥𝑦-plane and a stretch by a factor of 4 in
the direction of the 𝑧-axis.
Hence the inverse map 𝑇−1 ∈ℒ(𝐑3) is the clockwise rotation by 90∘in the
𝑥𝑦-plane and a stretch by a factor of 1
4 in the direction of the 𝑧-axis:
𝑇−1(𝑥, 𝑦, 𝑧) = (𝑦, −𝑥, 1
4𝑧).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3D
Invertibility and Isomorphisms
The next result shows that a linear map is invertible if and only if it is one-to-
one and onto.
3.63
invertibility ⟺injectivity and surjectivity
A linear map is invertible if and only if it is injective and surjective.
Proof
Suppose 𝑇∈ℒ(𝑉, 𝑊). We need to show that 𝑇is invertible if and only
if it is injective and surjective.
First suppose 𝑇is invertible. To show that 𝑇is injective, suppose 𝑢, 𝑣∈𝑉
and 𝑇𝑢= 𝑇𝑣. Then
𝑢= 𝑇−1(𝑇𝑢) = 𝑇−1(𝑇𝑣) = 𝑣,
so 𝑢= 𝑣. Hence 𝑇is injective.
We are still assuming that 𝑇is invertible. Now we want to prove that 𝑇is
surjective. To do this, let 𝑤∈𝑊. Then 𝑤= 𝑇(𝑇−1𝑤), which shows that 𝑤is
in the range of 𝑇. Thus range 𝑇= 𝑊. Hence 𝑇is surjective, completing this
direction of the proof.
Now suppose 𝑇is injective and surjective. We want to prove that 𝑇is invertible.
For each 𝑤∈𝑊, define 𝑆(𝑤) to be the unique element of 𝑉such that 𝑇(𝑆(𝑤)) =
𝑤(the existence and uniqueness of such an element follow from the surjectivity
and injectivity of 𝑇). The definition of 𝑆implies that 𝑇∘𝑆equals the identity
operator on 𝑊.
To prove that 𝑆∘𝑇equals the identity operator on 𝑉, let 𝑣∈𝑉. Then
𝑇((𝑆∘𝑇)𝑣) = (𝑇∘𝑆)(𝑇𝑣) = 𝐼(𝑇𝑣) = 𝑇𝑣.
This equation implies that (𝑆∘𝑇)𝑣= 𝑣(because 𝑇is injective). Thus 𝑆∘𝑇equals
the identity operator on 𝑉.
To complete the proof, we need to show that 𝑆is linear. To do this, suppose
𝑤1, 𝑤2 ∈𝑊. Then
𝑇(𝑆(𝑤1) + 𝑆(𝑤2)) = 𝑇(𝑆(𝑤1)) + 𝑇(𝑆(𝑤2)) = 𝑤1 + 𝑤2.
Thus 𝑆(𝑤1) + 𝑆(𝑤2) is the unique element of 𝑉that 𝑇maps to 𝑤1 + 𝑤2. By the
definition of 𝑆, this implies that 𝑆(𝑤1 + 𝑤2) = 𝑆(𝑤1) + 𝑆(𝑤2). Hence 𝑆satisfies
the additive property required for linearity.
The proof of homogeneity is similar. Specifically, if 𝑤∈𝑊and 𝜆∈𝐅, then
𝑇(𝜆𝑆(𝑤)) = 𝜆𝑇(𝑆(𝑤)) = 𝜆𝑤.
Thus 𝜆𝑆(𝑤) is the unique element of 𝑉that 𝑇maps to 𝜆𝑤. By the definition of
𝑆, this implies that 𝑆(𝜆𝑤) = 𝜆𝑆(𝑤). Hence 𝑆is linear, as desired.
For a linear map from a vector space to itself, you might wonder whether
injectivity alone, or surjectivity alone, is enough to imply invertibility. On infinite-
dimensional vector spaces, neither condition alone implies invertibility, as illus-
trated by the next example, which uses two familiar linear maps from Example 3.3.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
3.64
example: neither injectivity nor surjectivity implies invertibility
• The multiplication by 𝑥2 linear map from 𝒫(𝐑) to 𝒫(𝐑) (see 3.3) is injective
but it is not invertible because it is not surjective (the polynomial 1 is not in
the range).
• The backward shift linear map from 𝐅∞to 𝐅∞(see 3.3) is surjective but it is
not invertible because it is not injective [the vector (1, 0, 0, 0, … ) is in the null
space].
In view of the example above, the next result is remarkable—it states that for
a linear map from a finite-dimensional vector space to a vector space of the same
dimension, either injectivity or surjectivity alone implies the other condition.
Note that the hypothesis below that dim 𝑉= dim 𝑊is automatically satisfied in
the important special case where 𝑉is finite-dimensional and 𝑊= 𝑉.
3.65
injectivity is equivalent to surjectivity (if dim 𝑉= dim 𝑊< ∞)
Suppose that 𝑉and 𝑊are finite-dimensional vector spaces, dim 𝑉= dim 𝑊,
and 𝑇∈ℒ(𝑉, 𝑊). Then
𝑇is invertible
⟺𝑇is injective
⟺𝑇is surjective.
Proof
The fundamental theorem of linear maps (3.21) states that
3.66
dim 𝑉= dim null 𝑇+ dim range 𝑇.
If 𝑇is injective (which by 3.15 is equivalent to the condition dim null 𝑇= 0),
then the equation above implies that
dim range 𝑇= dim 𝑉−dim null 𝑇= dim 𝑉= dim 𝑊,
which implies that 𝑇is surjective (by 2.39).
Conversely, if 𝑇is surjective, then 3.66 implies that
dim null 𝑇= dim 𝑉−dim range 𝑇= dim 𝑉−dim 𝑊= 0,
which implies that 𝑇is injective.
Thus we have shown that 𝑇is injective if and only if 𝑇is surjective. Thus if
𝑇is either injective or surjective, then 𝑇is both injective and surjective, which
implies that 𝑇is invertible. Hence 𝑇is invertible if and only if 𝑇is injective if
and only if 𝑇is surjective.
The next example illustrates the power of the previous result. Although it is
possible to prove the result in the example below without using linear algebra, the
proof using linear algebra is cleaner and easier.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3D
Invertibility and Isomorphisms
3.67
example: there exists a polynomial 𝑝such that ((𝑥2 + 5𝑥+ 7)𝑝)″ = 𝑞
The linear map
𝑝↦((𝑥2 + 5𝑥+ 7)𝑝)″
from 𝒫(𝐑) to itself is injective, as you can show. Thus we are tempted to use 3.65
to show that this map is surjective. However, Example 3.64 shows that the magic
of 3.65 does not apply to the infinite-dimensional vector space 𝒫(𝐑). We will
get around this problem by restricting attention to the finite-dimensional vector
space 𝒫𝑚(𝐑).
Suppose 𝑞∈𝒫(𝐑). There exists a nonnegative integer 𝑚such that 𝑞∈𝒫𝑚(𝐑).
Define 𝑇∶𝒫𝑚(𝐑) →𝒫𝑚(𝐑) by
𝑇𝑝= ((𝑥2 + 5𝑥+ 7)𝑝)″.
Multiplying a nonzero polynomial by (𝑥2 + 5𝑥+ 7) increases the degree by 2, and
then differentiating twice reduces the degree by 2. Thus 𝑇is indeed a linear map
from 𝒫𝑚(𝐑) to itself.
Every polynomial whose second derivative equals 0 is of the form 𝑎𝑥+ 𝑏,
where 𝑎, 𝑏∈𝐑. Thus null 𝑇= {0}. Hence 𝑇is injective.
Thus 𝑇is surjective (by 3.65), which means that there exists a polynomial
𝑝∈𝒫𝑚(𝐑) such that ((𝑥2 +5𝑥+7)𝑝)″ = 𝑞, as claimed in the title of this example.
Exercise 35 in Section 6A gives a similar but more spectacular example of
using 3.65.
The hypothesis in the result below that dim 𝑉= dim 𝑊holds in the important
special case in which 𝑉is finite-dimensional and 𝑊= 𝑉. Thus in that case, the
equation 𝑆𝑇= 𝐼implies that 𝑆𝑇= 𝑇𝑆, even though we do not have multiplicative
commutativity of arbitrary linear maps from 𝑉to 𝑉.
3.68
𝑆𝑇= 𝐼⟺𝑇𝑆= 𝐼(on vector spaces of the same dimension)
Suppose 𝑉and 𝑊are finite-dimensional vector spaces of the same dimension,
𝑆∈ℒ(𝑊, 𝑉), and 𝑇∈ℒ(𝑉, 𝑊). Then 𝑆𝑇= 𝐼if and only if 𝑇𝑆= 𝐼.
Proof
First suppose 𝑆𝑇= 𝐼. If 𝑣∈𝑉and 𝑇𝑣= 0, then
𝑣= 𝐼𝑣= (𝑆𝑇)𝑣= 𝑆(𝑇𝑣) = 𝑆(0) = 0.
Thus 𝑇is injective (by 3.15). Because 𝑉and 𝑊have the same dimension, this
implies that 𝑇is invertible (by 3.65).
Now multiply both sides of the equation 𝑆𝑇= 𝐼by 𝑇−1 on the right, getting
𝑆= 𝑇−1.
Thus 𝑇𝑆= 𝑇𝑇−1 = 𝐼, as desired.
To prove the implication in the other direction, simply reverse the roles of 𝑆
and 𝑇(and 𝑉and 𝑊) in the direction we have already proved, showing that if
𝑇𝑆= 𝐼, then 𝑆𝑇= 𝐼.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Isomorphic Vector Spaces
The next definition captures the idea of two vector spaces that are essentially the
same, except for the names of their elements.
3.69
definition: isomorphism, isomorphic
• An isomorphism is an invertible linear map.
• Two vector spaces are called isomorphic if there is an isomorphism from
one vector space onto the other one.
Think of an isomorphism 𝑇∶𝑉→𝑊as relabeling 𝑣∈𝑉as 𝑇𝑣∈𝑊. This
viewpoint explains why two isomorphic vector spaces have the same vector space
properties. The terms “isomorphism” and “invertible linear map” mean the same
thing. Use “isomorphism” when you want to emphasize that the two spaces are
essentially the same.
It can be difficult to determine whether two mathematical structures (such as
groups or topological spaces) are essentially the same, differing only in the names
of the elements of underlying sets. However, the next result shows that we need
to look at only a single number (the dimension) to determine whether two vector
spaces are isomorphic.
3.70
dimension shows whether vector spaces are isomorphic
Two finite-dimensional vector spaces over 𝐅are isomorphic if and only if they
have the same dimension.
Proof
First suppose 𝑉and 𝑊are isomorphic finite-dimensional vector spaces.
Thus there exists an isomorphism 𝑇from 𝑉onto 𝑊. Because 𝑇is invertible, we
have null 𝑇= {0} and range 𝑇= 𝑊. Thus
dim null 𝑇= 0
and
dim range 𝑇= dim 𝑊.
The formula
dim 𝑉= dim null 𝑇+ dim range 𝑇
(the fundamental theorem of linear maps, which is 3.21) thus becomes the equation
dim 𝑉= dim 𝑊, completing the proof in one direction.
To prove the other direction, suppose 𝑉and 𝑊are finite-dimensional vector
spaces of the same dimension. Let 𝑣1, … , 𝑣𝑛be a basis of 𝑉and 𝑤1, … , 𝑤𝑛be a
basis of 𝑊. Let 𝑇∈ℒ(𝑉, 𝑊) be defined by
𝑇(𝑐1𝑣1 + ⋯+ 𝑐𝑛𝑣𝑛) = 𝑐1𝑤1 + ⋯+ 𝑐𝑛𝑤𝑛.
Then 𝑇is a well-defined linear map because 𝑣1, … , 𝑣𝑛is a basis of 𝑉. Also, 𝑇
is surjective because 𝑤1, … , 𝑤𝑛spans 𝑊. Furthermore, null 𝑇= {0} because
𝑤1, … , 𝑤𝑛is linearly independent. Thus 𝑇is injective. Because 𝑇is injective and
surjective, it is an isomorphism (see 3.63). Hence 𝑉and 𝑊are isomorphic.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3D
Invertibility and Isomorphisms
Every finite-dimensional vector space
is isomorphic to some 𝐅𝑛. Thus why not
just study 𝐅𝑛instead of more general
vector spaces? To answer this ques-
tion, note that an investigation of 𝐅𝑛
would soon lead to other vector spaces.
For example, we would encounter the
null space and range of linear maps.
Although each of these vector spaces
is isomorphic to some 𝐅𝑚, thinking of
them that way often adds complexity
but no new insight.
The previous result implies that each
finite-dimensional vector space 𝑉is iso-
morphic to 𝐅𝑛, where 𝑛= dim 𝑉. For
example, if 𝑚is a nonnegative integer,
then 𝒫𝑚(𝐅) is isomorphic to 𝐅𝑚+1.
Recall that the notation 𝐅𝑚,𝑛denotes
the vector space of 𝑚-by-𝑛matrices with
entries in 𝐅. If 𝑣1, … , 𝑣𝑛is a basis of 𝑉
and 𝑤1, … , 𝑤𝑚is a basis of 𝑊, then for
each 𝑇∈ℒ(𝑉, 𝑊), we have a matrix
ℳ(𝑇) ∈𝐅𝑚,𝑛. Thus once bases have
been fixed for 𝑉and 𝑊, ℳbecomes a
function from ℒ(𝑉, 𝑊) to 𝐅𝑚,𝑛. Notice
that 3.35 and 3.38 show that ℳis a lin-
ear map. This linear map is actually an
isomorphism, as we now show.
3.71
ℒ(𝑉, 𝑊) and 𝐅𝑚,𝑛are isomorphic
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝑤1, … , 𝑤𝑚is a basis of 𝑊. Then ℳis
an isomorphism between ℒ(𝑉, 𝑊) and 𝐅𝑚,𝑛.
Proof
We already noted that ℳis linear. We need to prove that ℳis injective
and surjective.
We begin with injectivity. If 𝑇∈ℒ(𝑉, 𝑊) and ℳ(𝑇) = 0, then 𝑇𝑣𝑘= 0 for
each 𝑘= 1, … , 𝑛. Because 𝑣1, … , 𝑣𝑛is a basis of 𝑉, this implies 𝑇= 0. Thus ℳ
is injective (by 3.15).
To prove that ℳis surjective, suppose 𝐴∈𝐅𝑚,𝑛. By the linear map lemma
(3.4), there exists 𝑇∈ℒ(𝑉, 𝑊) such that
𝑇𝑣𝑘=
𝑚
∑
𝑗=1
𝐴𝑗,𝑘𝑤𝑗
for each 𝑘= 1, … , 𝑛. Because ℳ(𝑇) equals 𝐴, the range of ℳequals 𝐅𝑚,𝑛, as
desired.
Now we can determine the dimension of the vector space of linear maps from
one finite-dimensional vector space to another.
3.72
dim ℒ(𝑉, 𝑊) = (dim 𝑉)(dim 𝑊)
Suppose 𝑉and 𝑊are finite-dimensional. Then ℒ(𝑉, 𝑊) is finite-dimensional
and
dim ℒ(𝑉, 𝑊) = (dim 𝑉)(dim 𝑊).
Proof
The desired result follows from 3.71, 3.70, and 3.40.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Linear Maps Thought of as Matrix Multiplication
Previously we defined the matrix of a linear map. Now we define the matrix of a
vector.
3.73
definition: matrix of a vector, ℳ(𝑣)
Suppose 𝑣∈𝑉and 𝑣1, … , 𝑣𝑛is a basis of 𝑉. The matrix of 𝑣with respect to
this basis is the 𝑛-by-1 matrix
ℳ(𝑣) = ⎛⎜⎜⎜
⎝
𝑏1
⋮
𝑏𝑛
⎞⎟⎟⎟
⎠
,
where 𝑏1, … , 𝑏𝑛are the scalars such that
𝑣= 𝑏1𝑣1 + ⋯+ 𝑏𝑛𝑣𝑛.
The matrix ℳ(𝑣) of a vector 𝑣∈𝑉depends on the basis 𝑣1, … , 𝑣𝑛of 𝑉, as
well as on 𝑣. However, the basis should be clear from the context and thus it is
not included in the notation.
3.74
example: matrix of a vector
• The matrix of the polynomial 2 −7𝑥+ 5𝑥3 + 𝑥4 with respect to the standard
basis of 𝒫4(𝐑) is
⎛⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜
⎝
−7
⎞⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟
⎠
.
• The matrix of a vector 𝑥∈𝐅𝑛with respect to the standard basis is obtained by
writing the coordinates of 𝑥as the entries in an 𝑛-by-1 matrix. In other words,
if 𝑥= (𝑥1, … , 𝑥𝑛) ∈𝐅𝑛, then
ℳ(𝑥) = ⎛⎜⎜⎜
⎝
𝑥1
⋮
𝑥𝑛
⎞⎟⎟⎟
⎠
.
Occasionally we want to think of elements of 𝑉as relabeled to be 𝑛-by-1
matrices. Once a basis 𝑣1, … , 𝑣𝑛is chosen, the function ℳthat takes 𝑣∈𝑉to
ℳ(𝑣) is an isomorphism of 𝑉onto 𝐅𝑛,1 that implements this relabeling.
Recall that if 𝐴is an 𝑚-by-𝑛matrix, then 𝐴⋅,𝑘denotes the 𝑘th column of 𝐴,
thought of as an 𝑚-by-1 matrix. In the next result, ℳ(𝑇𝑣𝑘) is computed with
respect to the basis 𝑤1, … , 𝑤𝑚of 𝑊.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3D
Invertibility and Isomorphisms
3.75
ℳ(𝑇)⋅,𝑘= ℳ(𝑇𝑣𝑘)
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝑤1, … , 𝑤𝑚is a basis
of 𝑊. Let 1 ≤𝑘≤𝑛. Then the 𝑘th column of ℳ(𝑇), which is denoted by
ℳ(𝑇)⋅,𝑘, equals ℳ(𝑇𝑣𝑘).
Proof
The desired result follows immediately from the definitions of ℳ(𝑇) and
ℳ(𝑇𝑣𝑘).
The next result shows how the notions of the matrix of a linear map, the matrix
of a vector, and matrix multiplication fit together.
3.76
linear maps act like matrix multiplication
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑣∈𝑉. Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉and
𝑤1, … , 𝑤𝑚is a basis of 𝑊. Then
ℳ(𝑇𝑣) = ℳ(𝑇)ℳ(𝑣).
Proof
Suppose 𝑣= 𝑏1𝑣1 + ⋯+ 𝑏𝑛𝑣𝑛, where 𝑏1, … , 𝑏𝑛∈𝐅. Thus
3.77
𝑇𝑣= 𝑏1𝑇𝑣1 + ⋯+ 𝑏𝑛𝑇𝑣𝑛.
Hence
ℳ(𝑇𝑣) = 𝑏1ℳ(𝑇𝑣1) + ⋯+ 𝑏𝑛ℳ(𝑇𝑣𝑛)
= 𝑏1ℳ(𝑇)⋅,1 + ⋯+ 𝑏𝑛ℳ(𝑇)⋅,𝑛
= ℳ(𝑇)ℳ(𝑣),
where the first equality follows from 3.77 and the linearity of ℳ, the second
equality comes from 3.75, and the last equality comes from 3.50.
Each 𝑚-by-𝑛matrix 𝐴induces a linear map from 𝐅𝑛,1 to 𝐅𝑚,1, namely the
matrix multiplication function that takes 𝑥∈𝐅𝑛,1 to 𝐴𝑥∈𝐅𝑚,1. The result above
can be used to think of every linear map (from a finite-dimensional vector space
to another finite-dimensional vector space) as a matrix multiplication map after
suitable relabeling via the isomorphisms given by ℳ. Specifically, if 𝑇∈ℒ(𝑉, 𝑊)
and we identify 𝑣∈𝑉with ℳ(𝑣) ∈𝐅𝑛,1, then the result above says that we can
identify 𝑇𝑣with ℳ(𝑇)ℳ(𝑣).
Because the result above allows us to think (via isomorphisms) of each linear
map as multiplication on 𝐅𝑛,1 by some matrix 𝐴, keep in mind that the specific
matrix 𝐴depends not only on the linear map but also on the choice of bases. One
of the themes of many of the most important results in later chapters will be the
choice of a basis that makes the matrix 𝐴as simple as possible.
In this book, we concentrate on linear maps rather than on matrices. However,
sometimes thinking of linear maps as matrices (or thinking of matrices as linear
maps) gives important insights that we will find useful.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Notice that no bases are in sight in the statement of the next result. Although
ℳ(𝑇) in the next result depends on a choice of bases of 𝑉and 𝑊, the next result
shows that the column rank of ℳ(𝑇) is the same for all such choices (because
range 𝑇does not depend on a choice of basis).
3.78
dimension of range 𝑇equals column rank of ℳ(𝑇)
Suppose 𝑉and 𝑊are finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Then dim range 𝑇
equals the column rank of ℳ(𝑇).
Proof
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝑤1, … , 𝑤𝑚is a basis of 𝑊. The linear
map that takes 𝑤∈𝑊to ℳ(𝑤) is an isomorphism from 𝑊onto the space 𝐅𝑚,1
of 𝑚-by-1 column vectors. The restriction of this isomorphism to range 𝑇[which
equals span(𝑇𝑣1, … , 𝑇𝑣𝑛) by Exercise 10 in Section 3B] is an isomorphism from
range 𝑇onto span(ℳ(𝑇𝑣1), … , ℳ(𝑇𝑣𝑛)). For each 𝑘∈{1, … , 𝑛}, the 𝑚-by-1
matrix ℳ(𝑇𝑣𝑘) equals column 𝑘of ℳ(𝑇). Thus
dim range 𝑇= the column rank of ℳ(𝑇),
as desired.
Change of Basis
In Section 3C we defined the matrix
ℳ(𝑇, (𝑣1, … , 𝑣𝑛), (𝑤1, … , 𝑤𝑚))
of a linear map 𝑇from 𝑉to a possibly different vector space 𝑊, where 𝑣1, … , 𝑣𝑛
is a basis of 𝑉and 𝑤1, … , 𝑤𝑚is a basis of 𝑊. For linear maps from a vector space
to itself, we usually use the same basis for both the domain vector space and the
target vector space. When using a single basis in both capacities, we often write
the basis only once. In other words, if 𝑇∈ℒ(𝑉) and 𝑣1, … , 𝑣𝑛is a basis of 𝑉,
then the notation ℳ(𝑇, (𝑣1, … , 𝑣𝑛)) is defined by the equation
ℳ(𝑇, (𝑣1, … , 𝑣𝑛)) = ℳ(𝑇, (𝑣1, … , 𝑣𝑛), (𝑣1, … , 𝑣𝑛)).
If the basis 𝑣1, … , 𝑣𝑛is clear from the context, then we can write just ℳ(𝑇).
3.79
definition: identity matrix, I
Suppose 𝑛is a positive integer. The 𝑛-by-𝑛matrix
⎛⎜⎜⎜
⎝
⋱
⎞⎟⎟⎟
⎠
with 1’s on the diagonal (the entries where the row number equals the column
number) and 0’s elsewhere is called the identity matrix and is denoted by 𝐼.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3D
Invertibility and Isomorphisms
In the definition above, the 0 in the lower left corner of the matrix indicates that
all entries below the diagonal are 0, and the 0 in the upper right corner indicates
that all entries above the diagonal are 0.
With respect to each basis of 𝑉, the matrix of the identity operator 𝐼∈ℒ(𝑉)
is the identity matrix 𝐼. Note that the symbol 𝐼is used to denote both the identity
operator and the identity matrix. The context indicates which meaning of 𝐼is
intended. For example, consider the equation ℳ(𝐼) = 𝐼; on the left side 𝐼denotes
the identity operator, and on the right side 𝐼denotes the identity matrix.
If 𝐴is a square matrix (meaning it has the same number of rows as columns)
with the same size as 𝐼, then 𝐴𝐼= 𝐼𝐴= 𝐴, as you should verify.
3.80
definition: invertible, inverse, 𝐴−1
A square matrix 𝐴is called invertible if there is a square matrix 𝐵of the same
size such that 𝐴𝐵= 𝐵𝐴= 𝐼; we call 𝐵the inverse of 𝐴and denote it by 𝐴−1.
Some mathematicians use the terms
nonsingular and singular,
which
mean the same as invertible and non-
invertible.
The same proof as used in 3.60 shows
that if 𝐴is an invertible square matrix,
then there is a unique matrix 𝐵such that
𝐴𝐵= 𝐵𝐴= 𝐼(and thus the notation
𝐵= 𝐴−1 is justified).
If 𝐴is an invertible matrix, then (𝐴−1)
−1 = 𝐴because
𝐴−1𝐴= 𝐴𝐴−1 = 𝐼.
Also, if 𝐴and 𝐶are invertible square matrices of the same size, then 𝐴𝐶is
invertible and (𝐴𝐶)−1 = 𝐶−1𝐴−1 because
(𝐴𝐶)(𝐶−1𝐴−1) = 𝐴(𝐶𝐶−1)𝐴−1
= 𝐴𝐼𝐴−1
= 𝐴𝐴−1
= 𝐼,
and similarly (𝐶−1𝐴−1)(𝐴𝐶) = 𝐼.
The next result holds because we defined matrix multiplication to make it
true—see 3.43 and the material preceding it. Now we are just being more explicit
about the bases involved.
3.81
matrix of product of linear maps
Suppose 𝑇∈ℒ(𝑈, 𝑉) and 𝑆∈ℒ(𝑉, 𝑊). If 𝑢1, … , 𝑢𝑚is a basis of 𝑈,
𝑣1, … , 𝑣𝑛is a basis of 𝑉, and 𝑤1, … , 𝑤𝑝is a basis of 𝑊, then
ℳ(𝑆𝑇, (𝑢1, … , 𝑢𝑚), (𝑤1, … , 𝑤𝑝)) =
ℳ(𝑆, (𝑣1, … , 𝑣𝑛), (𝑤1, … , 𝑤𝑝))ℳ(𝑇, (𝑢1, … , 𝑢𝑚), (𝑣1, … , 𝑣𝑛)).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
The next result deals with the matrix of the identity operator 𝐼with respect to
two different bases. Note that the 𝑘th column of ℳ(𝐼, (𝑢1, … , 𝑢𝑛), (𝑣1, … , 𝑣𝑛))
consists of the scalars needed to write 𝑢𝑘as a linear combination of the basis
𝑣1, … , 𝑣𝑛.
In the statement of the next result, 𝐼denotes the identity operator from 𝑉to 𝑉.
In the proof, 𝐼also denotes the 𝑛-by-𝑛identity matrix.
3.82
matrix of identity operator with respect to two bases
Suppose that 𝑢1, … , 𝑢𝑛and 𝑣1, … , 𝑣𝑛are bases of 𝑉. Then the matrices
ℳ(𝐼, (𝑢1, … , 𝑢𝑛), (𝑣1, … , 𝑣𝑛))
and
ℳ(𝐼, (𝑣1, … , 𝑣𝑛), (𝑢1, … , 𝑢𝑛))
are invertible, and each is the inverse of the other.
Proof
In 3.81, replace 𝑤𝑘with 𝑢𝑘, and replace 𝑆and 𝑇with 𝐼, getting
𝐼= ℳ(𝐼, (𝑣1, … , 𝑣𝑛), (𝑢1, … , 𝑢𝑛))ℳ(𝐼, (𝑢1, … , 𝑢𝑛), (𝑣1, … , 𝑣𝑛)).
Now interchange the roles of the 𝑢’s and 𝑣’s, getting
𝐼= ℳ(𝐼, (𝑢1, … , 𝑢𝑛), (𝑣1, … , 𝑣𝑛))ℳ(𝐼, (𝑣1, … , 𝑣𝑛), (𝑢1, … , 𝑢𝑛)).
These two equations above give the desired result.
3.83
example: matrix of identity operator on 𝐅2 with respect to two bases
Consider the bases (4, 2), (5, 3) and (1, 0), (0, 1) of 𝐅2. Because 𝐼(4, 2) =
4(1, 0) + 2(0, 1) and 𝐼(5, 3) = 5(1, 0) + 3(0, 1), we have
ℳ(𝐼, ((4, 2), (5, 3)), ((1, 0), (0, 1))) = ( 4
3 ) .
The inverse of the matrix above is
⎛⎜
⎝
−5
−1
⎞⎟
⎠
,
as you should verify. Thus 3.82 implies that
ℳ(𝐼, ((1, 0), (0, 1)), ((4, 2), (5, 3))) = ⎛⎜
⎝
−5
−1
⎞⎟
⎠
.
Our next result shows how the matrix of 𝑇changes when we change bases. In
the next result, we have two different bases of 𝑉, each of which is used as a basis for
the domain space and as a basis for the target space. Recall our shorthand notation
that allows us to display a basis only once when it is used in both capacities:
ℳ(𝑇, (𝑢1, … , 𝑢𝑛)) = ℳ(𝑇, (𝑢1, … , 𝑢𝑛), (𝑢1, … , 𝑢𝑛)).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3D
Invertibility and Isomorphisms
3.84
change-of-basis formula
Suppose 𝑇∈ℒ(𝑉). Suppose 𝑢1, … , 𝑢𝑛and 𝑣1, … , 𝑣𝑛are bases of 𝑉. Let
𝐴= ℳ(𝑇, (𝑢1, … , 𝑢𝑛))
and
𝐵= ℳ(𝑇, (𝑣1, … , 𝑣𝑛))
and 𝐶= ℳ(𝐼, (𝑢1, … , 𝑢𝑛), (𝑣1, … , 𝑣𝑛)). Then
𝐴= 𝐶−1𝐵𝐶.
Proof
In 3.81, replace 𝑤𝑘with 𝑢𝑘and replace 𝑆with 𝐼, getting
3.85
𝐴= 𝐶−1ℳ(𝑇, (𝑢1, … , 𝑢𝑛), (𝑣1, … , 𝑣𝑛)),
where we have used 3.82.
Again use 3.81, this time replacing 𝑤𝑘with 𝑣𝑘. Also replace 𝑇with 𝐼and
replace 𝑆with 𝑇, getting
ℳ(𝑇, (𝑢1, … , 𝑢𝑛), (𝑣1, … , 𝑣𝑛)) = 𝐵𝐶.
Substituting the equation above into 3.85 gives the equation 𝐴= 𝐶−1𝐵𝐶.
The proof of the next result is left as an exercise.
3.86
matrix of inverse equals inverse of matrix
Suppose that 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝑇∈ℒ(𝑉) is invertible. Then
ℳ(𝑇−1) = (ℳ(𝑇))−1, where both matrices are with respect to the basis
𝑣1, … , 𝑣𝑛.
Exercises 3D
Suppose 𝑇∈ℒ(𝑉, 𝑊) is invertible. Show that 𝑇−1 is invertible and
(𝑇−1)−1 = 𝑇.
Suppose 𝑇∈ℒ(𝑈, 𝑉) and 𝑆∈ℒ(𝑉, 𝑊) are both invertible linear maps.
Prove that 𝑆𝑇∈ℒ(𝑈, 𝑊) is invertible and that (𝑆𝑇)−1 = 𝑇−1𝑆−1.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that the following
are equivalent.
(a) 𝑇is invertible.
(b) 𝑇𝑣1, … , 𝑇𝑣𝑛is a basis of 𝑉for every basis 𝑣1, … , 𝑣𝑛of 𝑉.
(c) 𝑇𝑣1, … , 𝑇𝑣𝑛is a basis of 𝑉for some basis 𝑣1, … , 𝑣𝑛of 𝑉.
Suppose 𝑉is finite-dimensional and dim 𝑉> 1. Prove that the set of
noninvertible linear maps from 𝑉to itself is not a subspace of ℒ(𝑉).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Suppose 𝑉is finite-dimensional, 𝑈is a subspace of 𝑉, and 𝑆∈ℒ(𝑈, 𝑉).
Prove that there exists an invertible linear map 𝑇from 𝑉to itself such that
𝑇𝑢= 𝑆𝑢for every 𝑢∈𝑈if and only if 𝑆is injective.
Suppose that 𝑊is finite-dimensional and 𝑆, 𝑇∈ℒ(𝑉, 𝑊). Prove that
null 𝑆= null 𝑇if and only if there exists an invertible 𝐸∈ℒ(𝑊) such that
𝑆= 𝐸𝑇.
Suppose that 𝑉is finite-dimensional and 𝑆, 𝑇∈ℒ(𝑉, 𝑊). Prove that
range 𝑆= range 𝑇if and only if there exists an invertible 𝐸∈ℒ(𝑉) such
that 𝑆= 𝑇𝐸.
Suppose 𝑉and 𝑊are finite-dimensional and 𝑆, 𝑇∈ℒ(𝑉, 𝑊). Prove that
there exist invertible 𝐸1 ∈ℒ(𝑉) and 𝐸2 ∈ℒ(𝑊) such that 𝑆= 𝐸2𝑇𝐸1 if
and only if dim null 𝑆= dim null 𝑇.
Suppose 𝑉is finite-dimensional and 𝑇∶𝑉→𝑊is a surjective linear map
of 𝑉onto 𝑊. Prove that there is a subspace 𝑈of 𝑉such that 𝑇|𝑈is an
isomorphism of 𝑈onto 𝑊.
Here 𝑇|𝑈means the function 𝑇restricted to 𝑈. Thus 𝑇|𝑈is the function
whose domain is 𝑈, with 𝑇|𝑈defined by 𝑇|𝑈(𝑢) = 𝑇𝑢for every 𝑢∈𝑈.
Suppose 𝑉and 𝑊are finite-dimensional and 𝑈is a subspace of 𝑉. Let
ℰ= {𝑇∈ℒ(𝑉, 𝑊) ∶𝑈⊆null 𝑇}.
(a) Show that ℰis a subspace of ℒ(𝑉, 𝑊).
(b) Find a formula for dim ℰin terms of dim 𝑉, dim 𝑊, and dim 𝑈.
Hint: Define Φ∶ℒ(𝑉, 𝑊) →ℒ(𝑈, 𝑊) by Φ(𝑇) = 𝑇|𝑈. What is null Φ?
What is range Φ?
Suppose 𝑉is finite-dimensional and 𝑆, 𝑇∈ℒ(𝑉). Prove that
𝑆𝑇is invertible ⟺𝑆and 𝑇are invertible.
Suppose 𝑉is finite-dimensional and 𝑆, 𝑇, 𝑈∈ℒ(𝑉) and 𝑆𝑇𝑈= 𝐼. Show
that 𝑇is invertible and that 𝑇−1 = 𝑈𝑆.
Show that the result in Exercise 12 can fail without the hypothesis that 𝑉is
finite-dimensional.
Prove or give a counterexample: If 𝑉is a finite-dimensional vector space
and 𝑅, 𝑆, 𝑇∈ℒ(𝑉) are such that 𝑅𝑆𝑇is surjective, then 𝑆is injective.
Suppose 𝑇∈ℒ(𝑉) and 𝑣1, … , 𝑣𝑚is a list in 𝑉such that 𝑇𝑣1, … , 𝑇𝑣𝑚
spans 𝑉. Prove that 𝑣1, … , 𝑣𝑚spans 𝑉.
Prove that every linear map from 𝐅𝑛,1 to 𝐅𝑚,1 is given by a matrix multipli-
cation. In other words, prove that if 𝑇∈ℒ(𝐅𝑛,1, 𝐅𝑚,1), then there exists an
𝑚-by-𝑛matrix 𝐴such that 𝑇𝑥= 𝐴𝑥for every 𝑥∈𝐅𝑛,1.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3D
Invertibility and Isomorphisms
Suppose 𝑉is finite-dimensional and 𝑆∈ℒ(𝑉). Define 𝒜∈ℒ(ℒ(𝑉)) by
𝒜(𝑇) = 𝑆𝑇
for 𝑇∈ℒ(𝑉).
(a) Show that dim null 𝒜= (dim 𝑉)(dim null 𝑆).
(b) Show that dim range 𝒜= (dim 𝑉)(dim range 𝑆).
Show that 𝑉and ℒ(𝐅, 𝑉) are isomorphic vector spaces.
Suppose 𝑉is finite-dimensional and 𝑇∈ℒ(𝑉). Prove that 𝑇has the same
matrix with respect to every basis of 𝑉if and only if 𝑇is a scalar multiple
of the identity operator.
Suppose 𝑞∈𝒫(𝐑). Prove that there exists a polynomial 𝑝∈𝒫(𝐑) such
that
𝑞(𝑥) = (𝑥2 + 𝑥)𝑝″(𝑥) + 2𝑥𝑝′(𝑥) + 𝑝(3)
for all 𝑥∈𝐑.
Suppose 𝑛is a positive integer and 𝐴𝑗,𝑘∈𝐅for all 𝑗, 𝑘= 1, … , 𝑛. Prove that
the following are equivalent (note that in both parts below, the number of
equations equals the number of variables).
(a) The trivial solution 𝑥1 = ⋯= 𝑥𝑛= 0 is the only solution to the
homogeneous system of equations
𝑛
∑
𝑘=1
𝐴1,𝑘𝑥𝑘= 0
⋮
𝑛
∑
𝑘=1
𝐴𝑛,𝑘𝑥𝑘= 0.
(b) For every 𝑐1, … , 𝑐𝑛∈𝐅, there exists a solution to the system of equations
𝑛
∑
𝑘=1
𝐴1,𝑘𝑥𝑘= 𝑐1
⋮
𝑛
∑
𝑘=1
𝐴𝑛,𝑘𝑥𝑘= 𝑐𝑛.
Suppose 𝑇∈ℒ(𝑉) and 𝑣1, … , 𝑣𝑛is a basis of 𝑉. Prove that
ℳ(𝑇, (𝑣1, … , 𝑣𝑛)) is invertible ⟺𝑇is invertible.
Suppose that 𝑢1, … , 𝑢𝑛and 𝑣1, … , 𝑣𝑛are bases of 𝑉. Let 𝑇∈ℒ(𝑉) be such
that 𝑇𝑣𝑘= 𝑢𝑘for each 𝑘= 1, … , 𝑛. Prove that
ℳ(𝑇, (𝑣1, … , 𝑣𝑛)) = ℳ(𝐼, (𝑢1, … , 𝑢𝑛), (𝑣1, … , 𝑣𝑛)).
Suppose 𝐴and 𝐵are square matrices of the same size and 𝐴𝐵= 𝐼. Prove
that 𝐵𝐴= 𝐼.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
3E Products and Quotients of Vector Spaces
Products of Vector Spaces
As usual when dealing with more than one vector space, all vector spaces in use
should be over the same field.
3.87
definition: product of vector spaces
Suppose 𝑉1, … , 𝑉𝑚are vector spaces over 𝐅.
• The product 𝑉1 × ⋯× 𝑉𝑚is defined by
𝑉1 × ⋯× 𝑉𝑚= {(𝑣1, … , 𝑣𝑚) ∶𝑣1 ∈𝑉1, … , 𝑣𝑚∈𝑉𝑚}.
• Addition on 𝑉1 × ⋯× 𝑉𝑚is defined by
(𝑢1, … , 𝑢𝑚) + (𝑣1, … , 𝑣𝑚) = (𝑢1 + 𝑣1, … , 𝑢𝑚+ 𝑣𝑚).
• Scalar multiplication on 𝑉1 × ⋯× 𝑉𝑚is defined by
𝜆(𝑣1, … , 𝑣𝑚) = (𝜆𝑣1, … , 𝜆𝑣𝑚).
3.88
example: product of the vector spaces 𝒫5(𝐑) and 𝐑3
Elements of 𝒫5(𝐑) × 𝐑3 are lists of length two, with the first item in the list
an element of 𝒫5(𝐑) and the second item in the list an element of 𝐑3.
For example, (5 −6𝑥+ 4𝑥2, (3, 8, 7)) and (𝑥+ 9𝑥5, (2, 2, 2)) are elements of
𝒫5(𝐑) × 𝐑3. Their sum is defined by
(5 −6𝑥+ 4𝑥2, (3, 8, 7)) + (𝑥+ 9𝑥5, (2, 2, 2))
= (5 −5𝑥+ 4𝑥2 + 9𝑥5, (5, 10, 9)).
Also, 2(5 −6𝑥+ 4𝑥2, (3, 8, 7)) = (10 −12𝑥+ 8𝑥2, (6, 16, 14)).
The next result should be interpreted to mean that the product of vector spaces
is a vector space with the operations of addition and scalar multiplication as
defined by 3.87.
3.89
product of vector spaces is a vector space
Suppose 𝑉1, … , 𝑉𝑚are vector spaces over 𝐅. Then 𝑉1 × ⋯× 𝑉𝑚is a vector
space over 𝐅.
The proof of the result above is left to the reader. Note that the additive identity
of 𝑉1 × ⋯× 𝑉𝑚is (0, … , 0), where the 0 in the 𝑘th slot is the additive identity
of 𝑉𝑘. The additive inverse of (𝑣1, … , 𝑣𝑚) ∈𝑉1 × ⋯× 𝑉𝑚is (−𝑣1, … , −𝑣𝑚).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3E
Products and Quotients of Vector Spaces
3.90
example: 𝐑2 × 𝐑3 ≠𝐑5 but 𝐑2 × 𝐑3 is isomorphic to 𝐑5
Elements of the vector space 𝐑2 × 𝐑3 are lists
((𝑥1, 𝑥2), (𝑥3, 𝑥4, 𝑥5)),
where 𝑥1, 𝑥2, 𝑥3, 𝑥4, 𝑥5 ∈𝐑. Elements of 𝐑5 are lists
(𝑥1, 𝑥2, 𝑥3, 𝑥4, 𝑥5),
where 𝑥1, 𝑥2, 𝑥3, 𝑥4, 𝑥5 ∈𝐑.
Although elements of 𝐑2 × 𝐑3 and 𝐑5 look similar, they are not the same kind
of object. Elements of 𝐑2 × 𝐑3 are lists of length two (with the first item itself a
list of length two and the second item a list of length three), and elements of 𝐑5
are lists of length five. Thus 𝐑2 × 𝐑3 does not equal 𝐑5.
This isomorphism is so natural that
we should think of it as a relabel-
ing. Some people informally say that
𝐑2×𝐑3 equals 𝐑5, which is not techni-
cally correct but which captures the
spirit of identification via relabeling.
The linear map
((𝑥1, 𝑥2), (𝑥3, 𝑥4, 𝑥5)) ↦(𝑥1, 𝑥2, 𝑥3, 𝑥4, 𝑥5)
is an isomorphism of the vector space
𝐑2 × 𝐑3 onto the vector space 𝐑5. Thus
these two vector spaces are isomorphic, al-
though they are not equal.
The next example illustrates the idea that we will use in the proof of 3.92.
3.91
example: a basis of 𝒫2(𝐑) × 𝐑2
Consider this list of length five of elements of 𝒫2(𝐑) × 𝐑2:
(1, (0, 0)), (𝑥, (0, 0)), (𝑥2, (0, 0)), (0, (1, 0)), (0, (0, 1)).
The list above is linearly independent and it spans 𝒫2(𝐑) × 𝐑2. Thus it is a basis
of 𝒫2(𝐑) × 𝐑2.
3.92
dimension of a product is the sum of dimensions
Suppose 𝑉1, … , 𝑉𝑚are finite-dimensional vector spaces. Then 𝑉1 × ⋯× 𝑉𝑚
is finite-dimensional and
dim(𝑉1 × ⋯× 𝑉𝑚) = dim 𝑉1 + ⋯+ dim 𝑉𝑚.
Proof
Choose a basis of each 𝑉𝑘. For each basis vector of each 𝑉𝑘, consider the
element of 𝑉1 ×⋯×𝑉𝑚that equals the basis vector in the 𝑘th slot and 0 in the other
slots. The list of all such vectors is linearly independent and spans 𝑉1 × ⋯× 𝑉𝑚.
Thus it is a basis of 𝑉1 × ⋯× 𝑉𝑚. The length of this basis is dim 𝑉1 + ⋯+dim 𝑉𝑚,
as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
In the next result, the map Γ is surjective by the definition of 𝑉1+⋯+𝑉𝑚. Thus
the last word in the result below could be changed from “injective” to “invertible”.
3.93
products and direct sums
Suppose that 𝑉1, … , 𝑉𝑚are subspaces of 𝑉.
Define a linear map
Γ ∶𝑉1 × ⋯× 𝑉𝑚→𝑉1 + ⋯+ 𝑉𝑚by
Γ(𝑣1, … , 𝑣𝑚) = 𝑣1 + ⋯+ 𝑣𝑚.
Then 𝑉1 + ⋯+ 𝑉𝑚is a direct sum if and only if Γ is injective.
Proof
By 3.15, Γ is injective if and only if the only way to write 0 as a sum
𝑣1 + ⋯+ 𝑣𝑚, where each 𝑣𝑘is in 𝑉𝑘, is by taking each 𝑣𝑘equal to 0. Thus 1.45
shows that Γ is injective if and only if 𝑉1 + ⋯+ 𝑉𝑚is a direct sum, as desired.
3.94
a sum is a direct sum if and only if dimensions add up
Suppose 𝑉is finite-dimensional and 𝑉1, … , 𝑉𝑚are subspaces of 𝑉. Then
𝑉1 + ⋯+ 𝑉𝑚is a direct sum if and only if
dim(𝑉1 + ⋯+ 𝑉𝑚) = dim 𝑉1 + ⋯+ dim 𝑉𝑚.
Proof
The map Γ in 3.93 is surjective. Thus by the fundamental theorem of
linear maps (3.21), Γ is injective if and only if
dim(𝑉1 + ⋯+ 𝑉𝑚) = dim(𝑉1 × ⋯× 𝑉𝑚).
Combining 3.93 and 3.92 now shows that 𝑉1 + ⋯+ 𝑉𝑚is a direct sum if and only
if
dim(𝑉1 + ⋯+ 𝑉𝑚) = dim 𝑉1 + ⋯+ dim 𝑉𝑚,
as desired.
In the special case 𝑚= 2, an alternative proof that 𝑉1 + 𝑉2 is a direct sum if
and only if dim(𝑉1 + 𝑉2) = dim 𝑉1 + dim 𝑉2 can be obtained by combining 1.46
and 2.43.
Quotient Spaces
We begin our approach to quotient spaces by defining the sum of a vector and a
subset.
3.95
notation: 𝑣+ 𝑈
Suppose 𝑣∈𝑉and 𝑈⊆𝑉. Then 𝑣+ 𝑈is the subset of 𝑉defined by
𝑣+ 𝑈= {𝑣+ 𝑢∶𝑢∈𝑈}.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3E
Products and Quotients of Vector Spaces
3.96
example: sum of a vector and a one-dimensional subspace of 𝐑2
(17, 20) + 𝑈is parallel
to the subspace 𝑈.
Suppose
𝑈= {(𝑥, 2𝑥) ∈𝐑2 ∶𝑥∈𝐑}.
Hence 𝑈is the line in 𝐑2 through the origin with
slope 2. Thus
(17, 20) + 𝑈
is the line in 𝐑2 that contains the point (17, 20)
and has slope 2.
Because
(10, 20) ∈𝑈
and
(17, 20) ∈(17, 20) + 𝑈,
we see that (17, 20) + 𝑈is obtained by moving 𝑈
to the right by 7 units.
3.97
definition: translate
For 𝑣∈𝑉and 𝑈a subset of 𝑉, the set 𝑣+ 𝑈is said to be a translate of 𝑈.
3.98
example: translates
• If 𝑈is the line in 𝐑2 defined by 𝑈= {(𝑥, 2𝑥) ∈𝐑2 ∶𝑥∈𝐑}, then all lines in
𝐑2 with slope 2 are translates of 𝑈. See Example 3.96 above for a drawing of
𝑈and one of its translates.
• More generally, if 𝑈is a line in 𝐑2, then the set of all translates of 𝑈is the set
of all lines in 𝐑2 that are parallel to 𝑈.
• If 𝑈= {(𝑥, 𝑦, 0) ∈𝐑3 ∶𝑥, 𝑦∈𝐑}, then the translates of 𝑈are the planes in
𝐑3 that are parallel to the 𝑥𝑦-plane 𝑈.
• More generally, if 𝑈is a plane in 𝐑3, then the set of all translates of 𝑈is the
set of all planes in 𝐑3 that are parallel to 𝑈(see, for example, Exercise 7).
3.99
definition: quotient space, 𝑉/𝑈
Suppose 𝑈is a subspace of 𝑉. Then the quotient space 𝑉/𝑈is the set of all
translates of 𝑈. Thus
𝑉/𝑈= {𝑣+ 𝑈∶𝑣∈𝑉}.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
3.100
example: quotient spaces
• If 𝑈= {(𝑥, 2𝑥) ∈𝐑2 ∶𝑥∈𝐑}, then 𝐑2/𝑈is the set of all lines in 𝐑2 that have
slope 2.
• If 𝑈is a line in 𝐑3 containing the origin, then 𝐑3/𝑈is the set of all lines in 𝐑3
parallel to 𝑈.
• If 𝑈is a plane in 𝐑3 containing the origin, then 𝐑3/𝑈is the set of all planes in
𝐑3 parallel to 𝑈.
Our next goal is to make 𝑉/𝑈into a vector space. To do this, we will need
the next result.
3.101
two translates of a subspace are equal or disjoint
Suppose 𝑈is a subspace of 𝑉and 𝑣, 𝑤∈𝑉. Then
𝑣−𝑤∈𝑈⟺𝑣+ 𝑈= 𝑤+ 𝑈⟺(𝑣+ 𝑈) ∩(𝑤+ 𝑈) ≠∅.
Proof
First suppose 𝑣−𝑤∈𝑈. If 𝑢∈𝑈, then
𝑣+ 𝑢= 𝑤+ ((𝑣−𝑤) + 𝑢) ∈𝑤+ 𝑈.
Thus 𝑣+𝑈⊆𝑤+𝑈. Similarly, 𝑤+𝑈⊆𝑣+𝑈. Thus 𝑣+𝑈= 𝑤+𝑈, completing
the proof that 𝑣−𝑤∈𝑈implies 𝑣+ 𝑈= 𝑤+ 𝑈.
The equation 𝑣+ 𝑈= 𝑤+ 𝑈implies that (𝑣+ 𝑈) ∩(𝑤+ 𝑈) ≠∅.
Now suppose (𝑣+ 𝑈) ∩(𝑤+ 𝑈) ≠∅. Thus there exist 𝑢1, 𝑢2 ∈𝑈such that
𝑣+ 𝑢1 = 𝑤+ 𝑢2.
Thus 𝑣−𝑤= 𝑢2 −𝑢1. Hence 𝑣−𝑤∈𝑈, showing that (𝑣+ 𝑈) ∩(𝑤+ 𝑈) ≠∅
implies 𝑣−𝑤∈𝑈, which completes the proof.
Now we can define addition and scalar multiplication on 𝑉/𝑈.
3.102
definition: addition and scalar multiplication on 𝑉/𝑈
Suppose 𝑈is a subspace of 𝑉. Then addition and scalar multiplication are
defined on 𝑉/𝑈by
(𝑣+ 𝑈) + (𝑤+ 𝑈) = (𝑣+ 𝑤) + 𝑈
𝜆(𝑣+ 𝑈) = (𝜆𝑣) + 𝑈
for all 𝑣, 𝑤∈𝑉and all 𝜆∈𝐅.
As part of the proof of the next result, we will show that the definitions above
make sense.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3E
Products and Quotients of Vector Spaces
3.103
quotient space is a vector space
Suppose 𝑈is a subspace of 𝑉. Then 𝑉/𝑈, with the operations of addition and
scalar multiplication as defined above, is a vector space.
Proof
The potential problem with the definitions above of addition and scalar
multiplication on 𝑉/𝑈is that the representation of a translate of 𝑈is not unique.
Specifically, suppose 𝑣1, 𝑣2, 𝑤1, 𝑤2 ∈𝑉are such that
𝑣1 + 𝑈= 𝑣2 + 𝑈
and
𝑤1 + 𝑈= 𝑤2 + 𝑈.
To show that the definition of addition on 𝑉/𝑈given above makes sense, we must
show that (𝑣1 + 𝑤1) + 𝑈= (𝑣2 + 𝑤2) + 𝑈.
By 3.101, we have
𝑣1 −𝑣2 ∈𝑈
and
𝑤1 −𝑤2 ∈𝑈.
Because 𝑈is a subspace of 𝑉and thus is closed under addition, this implies that
(𝑣1 −𝑣2) + (𝑤1 −𝑤2) ∈𝑈. Thus (𝑣1 + 𝑤1) −(𝑣2 + 𝑤2) ∈𝑈. Using 3.101 again,
we see that
(𝑣1 + 𝑤1) + 𝑈= (𝑣2 + 𝑤2) + 𝑈,
as desired. Thus the definition of addition on 𝑉/𝑈makes sense.
Similarly, suppose 𝜆∈𝐅. We are still assuming that 𝑣1 + 𝑈= 𝑣2 + 𝑈.
Because 𝑈is a subspace of 𝑉and thus is closed under scalar multiplication, we
have 𝜆(𝑣1 −𝑣2) ∈𝑈. Thus 𝜆𝑣1 −𝜆𝑣2 ∈𝑈. Hence 3.101 implies that
(𝜆𝑣1) + 𝑈= (𝜆𝑣2) + 𝑈.
Thus the definition of scalar multiplication on 𝑉/𝑈makes sense.
Now that addition and scalar multiplication have been defined on 𝑉/𝑈, the
verification that these operations make 𝑉/𝑈into a vector space is straightforward
and is left to the reader. Note that the additive identity of 𝑉/𝑈is 0 + 𝑈(which
equals 𝑈) and that the additive inverse of 𝑣+ 𝑈is (−𝑣) + 𝑈.
The next concept will lead to a computation of the dimension of 𝑉/𝑈.
3.104
definition: quotient map, 𝜋
Suppose 𝑈is a subspace of 𝑉. The quotient map 𝜋∶𝑉→𝑉/𝑈is the linear
map defined by
𝜋(𝑣) = 𝑣+ 𝑈
for each 𝑣∈𝑉.
The reader should verify that 𝜋is indeed a linear map. Although 𝜋depends
on 𝑈as well as 𝑉, these spaces are left out of the notation because they should be
clear from the context.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
3.105
dimension of quotient space
Suppose 𝑉is finite-dimensional and 𝑈is a subspace of 𝑉. Then
dim 𝑉/𝑈= dim 𝑉−dim 𝑈.
Proof
Let 𝜋denote the quotient map from 𝑉to 𝑉/𝑈. If 𝑣∈𝑉, then 𝑣+𝑈= 0+𝑈
if and only if 𝑣∈𝑈(by 3.101), which implies that null 𝜋= 𝑈. The definition of
𝜋implies range 𝜋= 𝑉/𝑈. The fundamental theorem of linear maps (3.21) now
implies dim 𝑉= dim 𝑈+ dim 𝑉/𝑈, which gives the desired result.
Each linear map 𝑇on 𝑉induces a linear map̃ 𝑇on 𝑉/(null 𝑇), as defined
below.
3.106
notation:̃ 𝑇
Suppose 𝑇∈ℒ(𝑉, 𝑊). Definẽ 𝑇∶𝑉/(null 𝑇) →𝑊bỹ
𝑇(𝑣+ null 𝑇) = 𝑇𝑣.
To show that the definition of̃ 𝑇makes sense, suppose 𝑢, 𝑣∈𝑉are such that
𝑢+ null 𝑇= 𝑣+ null 𝑇. By 3.101, we have 𝑢−𝑣∈null 𝑇. Thus 𝑇(𝑢−𝑣) = 0.
Hence 𝑇𝑢= 𝑇𝑣. Thus the definition of̃ 𝑇indeed makes sense. The routine
verification that̃ 𝑇is a linear map from 𝑉/(null 𝑇) to 𝑊is left to the reader.
The next result shows that we can think of̃ 𝑇as a modified version of 𝑇, with
a domain that produces a one-to-one map.
3.107
null space and range of̃ 𝑇
Suppose 𝑇∈ℒ(𝑉, 𝑊). Then
(a)̃ 𝑇∘𝜋= 𝑇, where 𝜋is the quotient map of 𝑉onto 𝑉/(null 𝑇);
(b)̃ 𝑇is injective;
(c) rangẽ 𝑇= range 𝑇;
(d) 𝑉/(null 𝑇) and range 𝑇are isomorphic vector spaces.
Proof
(a) If 𝑣∈𝑉, then (̃𝑇∘𝜋)(𝑣) =̃ 𝑇(𝜋(𝑣)) =̃ 𝑇(𝑣+ null 𝑇) = 𝑇𝑣, as desired.
(b) Suppose 𝑣∈𝑉and̃ 𝑇(𝑣+ null 𝑇) = 0. Then 𝑇𝑣= 0. Thus 𝑣∈null 𝑇.
Hence 3.101 implies that 𝑣+ null 𝑇= 0 + null 𝑇. This implies that null̃ 𝑇=
{0 + null 𝑇}. Hencẽ 𝑇is injective, as desired.
(c) The definition of̃ 𝑇shows that rangẽ 𝑇= range 𝑇.
(d) Now (b) and (c) imply that if we think of̃ 𝑇as mapping into range 𝑇, theñ 𝑇
is an isomorphism from 𝑉/(null 𝑇) onto range 𝑇.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3E
Products and Quotients of Vector Spaces
Exercises 3E
Suppose 𝑇is a function from 𝑉to 𝑊. The graph of 𝑇is the subset of 𝑉× 𝑊
defined by
graph of 𝑇= {(𝑣, 𝑇𝑣) ∈𝑉× 𝑊∶𝑣∈𝑉}.
Prove that 𝑇is a linear map if and only if the graph of 𝑇is a subspace of
𝑉× 𝑊.
Formally, a function 𝑇from 𝑉to 𝑊is a subset 𝑇of 𝑉× 𝑊such that for
each 𝑣∈𝑉, there exists exactly one element (𝑣, 𝑤) ∈𝑇. In other words,
formally a function is what is called above its graph. We do not usually
think of functions in this formal manner. However, if we do become formal,
then this exercise could be rephrased as follows: Prove that a function 𝑇
from 𝑉to 𝑊is a linear map if and only if 𝑇is a subspace of 𝑉× 𝑊.
Suppose that 𝑉1, … , 𝑉𝑚are vector spaces such that 𝑉1 × ⋯× 𝑉𝑚is finite-
dimensional. Prove that 𝑉𝑘is finite-dimensional for each 𝑘= 1, … , 𝑚.
Suppose 𝑉1, … , 𝑉𝑚are vector spaces. Prove that ℒ(𝑉1 × ⋯× 𝑉𝑚, 𝑊) and
ℒ(𝑉1, 𝑊) × ⋯× ℒ(𝑉𝑚, 𝑊) are isomorphic vector spaces.
There is no assumption in the exercise above or in the two following exercises
that the vector spaces are finite-dimensional.
Suppose 𝑊1, … , 𝑊𝑚are vector spaces. Prove that ℒ(𝑉, 𝑊1 × ⋯× 𝑊𝑚) and
ℒ(𝑉, 𝑊1) × ⋯× ℒ(𝑉, 𝑊𝑚) are isomorphic vector spaces.
For 𝑚a positive integer, define 𝑉𝑚by
𝑉𝑚= 𝑉× ⋯× 𝑉
⏟
𝑚times
.
Prove that 𝑉𝑚and ℒ(𝐅𝑚, 𝑉) are isomorphic vector spaces.
Suppose that 𝑣, 𝑥are vectors in 𝑉and that 𝑈, 𝑊are subspaces of 𝑉such
that 𝑣+ 𝑈= 𝑥+ 𝑊. Prove that 𝑈= 𝑊.
Let 𝑈= {(𝑥, 𝑦, 𝑧) ∈𝐑3 ∶2𝑥+ 3𝑦+ 5𝑧= 0}. Suppose 𝐴⊆𝐑3. Prove that
𝐴is a translate of 𝑈if and only if there exists 𝑐∈𝐑such that
𝐴= {(𝑥, 𝑦, 𝑧) ∈𝐑3 ∶2𝑥+ 3𝑦+ 5𝑧= 𝑐}.
(a) Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑐∈𝑊. Prove that {𝑥∈𝑉∶𝑇𝑥= 𝑐} is
either the empty set or is a translate of null 𝑇.
(b) Explain why the set of solutions to a system of linear equations such as
3.27 is either the empty set or is a translate of some subspace of 𝐅𝑛.
Prove that a nonempty subset 𝐴of 𝑉is a translate of some subspace of 𝑉if
and only if 𝜆𝑣+ (1 −𝜆)𝑤∈𝐴for all 𝑣, 𝑤∈𝐴and all 𝜆∈𝐅.
Suppose 𝐴1 = 𝑣+ 𝑈1 and 𝐴2 = 𝑤+ 𝑈2 for some 𝑣, 𝑤∈𝑉and some
subspaces 𝑈1, 𝑈2 of 𝑉. Prove that the intersection 𝐴1 ∩𝐴2 is either a
translate of some subspace of 𝑉or is the empty set.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Suppose 𝑈= {(𝑥1, 𝑥2, … ) ∈𝐅∞∶𝑥𝑘≠0 for only finitely many 𝑘}.
(a) Show that 𝑈is a subspace of 𝐅∞.
(b) Prove that 𝐅∞/𝑈is infinite-dimensional.
Suppose 𝑣1, … , 𝑣𝑚∈𝑉. Let
𝐴= {𝜆1𝑣1 + ⋯+ 𝜆𝑚𝑣𝑚∶𝜆1, … , 𝜆𝑚∈𝐅and 𝜆1 + ⋯+ 𝜆𝑚= 1}.
(a) Prove that 𝐴is a translate of some subspace of 𝑉.
(b) Prove that if 𝐵is a translate of some subspace of 𝑉and {𝑣1, … , 𝑣𝑚} ⊆𝐵,
then 𝐴⊆𝐵.
(c) Prove that 𝐴is a translate of some subspace of 𝑉of dimension less
than 𝑚.
Suppose 𝑈is a subspace of 𝑉such that 𝑉/𝑈is finite-dimensional. Prove
that 𝑉is isomorphic to 𝑈× (𝑉/𝑈).
Suppose 𝑈and 𝑊are subspaces of 𝑉and 𝑉= 𝑈⊕𝑊. Suppose 𝑤1, … , 𝑤𝑚
is a basis of 𝑊. Prove that 𝑤1 + 𝑈, … , 𝑤𝑚+ 𝑈is a basis of 𝑉/𝑈.
Suppose 𝑈is a subspace of 𝑉and 𝑣1 + 𝑈, … , 𝑣𝑚+ 𝑈is a basis of 𝑉/𝑈and
𝑢1, … , 𝑢𝑛is a basis of 𝑈. Prove that 𝑣1, … , 𝑣𝑚, 𝑢1, … , 𝑢𝑛is a basis of 𝑉.
Suppose 𝜑∈ℒ(𝑉, 𝐅) and 𝜑≠0. Prove that dim 𝑉/(null 𝜑) = 1.
Suppose 𝑈is a subspace of 𝑉such that dim 𝑉/𝑈= 1. Prove that there
exists 𝜑∈ℒ(𝑉, 𝐅) such that null 𝜑= 𝑈.
Suppose that 𝑈is a subspace of 𝑉such that 𝑉/𝑈is finite-dimensional.
(a) Show that if 𝑊is a finite-dimensional subspace of 𝑉and 𝑉= 𝑈+ 𝑊,
then dim 𝑊≥dim 𝑉/𝑈.
(b) Prove that there exists a finite-dimensional subspace 𝑊of 𝑉such that
dim 𝑊= dim 𝑉/𝑈and 𝑉= 𝑈⊕𝑊.
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑈is a subspace of 𝑉. Let 𝜋denote the quotient
map from 𝑉onto 𝑉/𝑈. Prove that there exists 𝑆∈ℒ(𝑉/𝑈, 𝑊) such that
𝑇= 𝑆∘𝜋if and only if 𝑈⊆null 𝑇.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3F
Duality
3F Duality
Dual Space and Dual Map
Linear maps into the scalar field 𝐅play a special role in linear algebra, and thus
they get a special name.
3.108
definition: linear functional
A linear functional on 𝑉is a linear map from 𝑉to 𝐅. In other words, a linear
functional is an element of ℒ(𝑉, 𝐅).
3.109
example: linear functionals
• Define 𝜑∶𝐑3 →𝐑by 𝜑(𝑥, 𝑦, 𝑧) = 4𝑥−5𝑦+ 2𝑧. Then 𝜑is a linear functional
on 𝐑3.
• Fix (𝑐1, … , 𝑐𝑛) ∈𝐅𝑛. Define 𝜑∶𝐅𝑛→𝐅by 𝜑(𝑥1, … , 𝑥𝑛) = 𝑐1𝑥1 + ⋯+ 𝑐𝑛𝑥𝑛.
Then 𝜑is a linear functional on 𝐅𝑛.
• Define 𝜑∶𝒫(𝐑) →𝐑by
𝜑(𝑝) = 3𝑝″(5) + 7𝑝(4).
Then 𝜑is a linear functional on 𝒫(𝐑).
• Define 𝜑∶𝒫(𝐑) →𝐑by
𝜑(𝑝) = ∫
0 𝑝
for each 𝑝∈𝒫(𝐑). Then 𝜑is a linear functional on 𝒫(𝐑).
The vector space ℒ(𝑉, 𝐅) also gets a special name and special notation.
3.110
definition: dual space, 𝑉′
The dual space of 𝑉, denoted by 𝑉′, is the vector space of all linear functionals
on 𝑉. In other words, 𝑉′ = ℒ(𝑉, 𝐅).
3.111
dim 𝑉′ = dim 𝑉
Suppose 𝑉is finite-dimensional. Then 𝑉′ is also finite-dimensional and
dim 𝑉′ = dim 𝑉.
Proof
By 3.72 we have
dim 𝑉′ = dim ℒ(𝑉, 𝐅) = (dim 𝑉)(dim 𝐅) = dim 𝑉,
as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
In the following definition, the linear map lemma (3.4) implies that each 𝜑𝑗is
well defined.
3.112
definition: dual basis
If 𝑣1, … , 𝑣𝑛is a basis of 𝑉, then the dual basis of 𝑣1, … , 𝑣𝑛is the list 𝜑1, … , 𝜑𝑛
of elements of 𝑉′, where each 𝜑𝑗is the linear functional on 𝑉such that
𝜑𝑗(𝑣𝑘) =
⎧{
⎨{⎩
if 𝑘= 𝑗,
if 𝑘≠𝑗.
3.113
example: the dual basis of the standard basis of 𝐅𝑛
Suppose 𝑛is a positive integer. For 1 ≤𝑗≤𝑛, define 𝜑𝑗to be the linear
functional on 𝐅𝑛that selects the 𝑗th coordinate of a vector in 𝐅𝑛. Thus
𝜑𝑗(𝑥1, … , 𝑥𝑛) = 𝑥𝑗
for each (𝑥1, … , 𝑥𝑛) ∈𝐅𝑛.
Let 𝑒1, … , 𝑒𝑛be the standard basis of 𝐅𝑛. Then
𝜑𝑗(𝑒𝑘) =
⎧{
⎨{⎩
if 𝑘= 𝑗,
if 𝑘≠𝑗.
Thus 𝜑1, … , 𝜑𝑛is the dual basis of the standard basis 𝑒1, … , 𝑒𝑛of 𝐅𝑛.
The next result shows that the dual basis of a basis of 𝑉consists of the linear
functionals on 𝑉that give the coefficients for expressing a vector in 𝑉as a linear
combination of the basis vectors.
3.114
dual basis gives coefficients for linear combination
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝜑1, … , 𝜑𝑛is the dual basis. Then
𝑣= 𝜑1(𝑣)𝑣1 + ⋯+ 𝜑𝑛(𝑣)𝑣𝑛
for each 𝑣∈𝑉.
Proof
Suppose 𝑣∈𝑉. Then there exist 𝑐1, … , 𝑐𝑛∈𝐅such that
3.115
𝑣= 𝑐1𝑣1 + ⋯+ 𝑐𝑛𝑣𝑛.
If 𝑗∈{1, … , 𝑛}, then applying 𝜑𝑗to both sides of the equation above gives
𝜑𝑗(𝑣) = 𝑐𝑗.
Substituting the values for 𝑐1, … , 𝑐𝑛given by the equation above into 3.115 shows
that 𝑣= 𝜑1(𝑣)𝑣1 + ⋯+ 𝜑𝑛(𝑣)𝑣𝑛.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3F
Duality
The next result shows that the dual basis is indeed a basis of the dual space.
Thus the terminology “dual basis” is justified.
3.116
dual basis is a basis of the dual space
Suppose 𝑉is finite-dimensional. Then the dual basis of a basis of 𝑉is a basis
of 𝑉′.
Proof
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉. Let 𝜑1, … , 𝜑𝑛denote the dual basis.
To show that 𝜑1, … , 𝜑𝑛is a linearly independent list of elements of 𝑉′, suppose
𝑎1, … , 𝑎𝑛∈𝐅are such that
3.117
𝑎1𝜑1 + ⋯+ 𝑎𝑛𝜑𝑛= 0.
Now
(𝑎1𝜑1 + ⋯+ 𝑎𝑛𝜑𝑛)(𝑣𝑘) = 𝑎𝑘
for each 𝑘= 1, … , 𝑛. Thus 3.117 shows that 𝑎1 = ⋯= 𝑎𝑛= 0. Hence 𝜑1, … , 𝜑𝑛
is linearly independent.
Because 𝜑1, … , 𝜑𝑛is a linearly independent list in 𝑉′ whose length equals
dim 𝑉′ (by 3.111), we can conclude that 𝜑1, … , 𝜑𝑛is a basis of 𝑉′(see 2.38).
In the definition below, note that if 𝑇is a linear map from 𝑉to 𝑊then 𝑇′ is a
linear map from 𝑊′ to 𝑉′.
3.118
definition: dual map, 𝑇′
Suppose 𝑇∈ℒ(𝑉, 𝑊). The dual map of 𝑇is the linear map 𝑇′ ∈ℒ(𝑊′, 𝑉′)
defined for each 𝜑∈𝑊′by
𝑇′(𝜑) = 𝜑∘𝑇.
If 𝑇∈ℒ(𝑉, 𝑊) and 𝜑∈𝑊′, then 𝑇′(𝜑) is defined above to be the composition
of the linear maps 𝜑and 𝑇. Thus 𝑇′(𝜑) is indeed a linear map from 𝑉to 𝐅; in
other words, 𝑇′(𝜑) ∈𝑉′.
The following two bullet points show that 𝑇′ is a linear map from 𝑊′ to 𝑉′.
• If 𝜑, 𝜓∈𝑊′, then
𝑇′(𝜑+ 𝜓) = (𝜑+ 𝜓) ∘𝑇= 𝜑∘𝑇+ 𝜓∘𝑇= 𝑇′(𝜑) + 𝑇′(𝜓).
• If 𝜆∈𝐅and 𝜑∈𝑊′, then
𝑇′(𝜆𝜑) = (𝜆𝜑) ∘𝑇= 𝜆(𝜑∘𝑇) = 𝜆𝑇′(𝜑).
The prime notation appears with two unrelated meanings in the next example:
𝐷′ denotes the dual of the linear map 𝐷, and 𝑝′ denotes the derivative of a
polynomial 𝑝.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
3.119
example: dual map of the differentiation linear map
Define 𝐷∶𝒫(𝐑) →𝒫(𝐑) by 𝐷𝑝= 𝑝′.
• Suppose 𝜑is the linear functional on 𝒫(𝐑) defined by 𝜑(𝑝) = 𝑝(3). Then
𝐷′(𝜑) is the linear functional on 𝒫(𝐑) given by
(𝐷′(𝜑))(𝑝) = (𝜑∘𝐷)(𝑝) = 𝜑(𝐷𝑝) = 𝜑(𝑝′) = 𝑝′(3).
Thus 𝐷′(𝜑) is the linear functional on 𝒫(𝐑) taking 𝑝to 𝑝′(3).
• Suppose 𝜑is the linear functional on 𝒫(𝐑) defined by 𝜑(𝑝) = ∫1
0 𝑝. Then
𝐷′(𝜑) is the linear functional on 𝒫(𝐑) given by
(𝐷′(𝜑))(𝑝) = (𝜑∘𝐷)(𝑝)
= 𝜑(𝐷𝑝)
= 𝜑(𝑝′)
= ∫
0 𝑝′
= 𝑝(1) −𝑝(0).
Thus 𝐷′(𝜑) is the linear functional on 𝒫(𝐑) taking 𝑝to 𝑝(1) −𝑝(0).
In the next result, (a) and (b) imply that the function that takes 𝑇to 𝑇′ is a
linear map from ℒ(𝑉, 𝑊) to ℒ(𝑊′, 𝑉′).
In (c) below, note the reversal of order from 𝑆𝑇on the left to 𝑇′𝑆′ on the right.
3.120
algebraic properties of dual maps
Suppose 𝑇∈ℒ(𝑉, 𝑊). Then
(a) (𝑆+ 𝑇)′ = 𝑆′ + 𝑇′ for all 𝑆∈ℒ(𝑉, 𝑊);
(b) (𝜆𝑇)′ = 𝜆𝑇′ for all 𝜆∈𝐅;
(c) (𝑆𝑇)′ = 𝑇′𝑆′ for all 𝑆∈ℒ(𝑊, 𝑈).
Proof
The proofs of (a) and (b) are left to the reader.
To prove (c), suppose 𝜑∈𝑈′. Then
(𝑆𝑇)′(𝜑) = 𝜑∘(𝑆𝑇) = (𝜑∘𝑆) ∘𝑇= 𝑇′(𝜑∘𝑆) = 𝑇′(𝑆′(𝜑)) = (𝑇′𝑆′)(𝜑),
Some books use the notation 𝑉∗and
𝑇∗for duality instead of 𝑉′ and 𝑇′.
However, here we reserve the notation
𝑇∗for the adjoint, which will be intro-
duced when we study linear maps on
inner product spaces in Chapter 7.
where the first, third, and fourth equal-
ities above hold because of the defini-
tion of the dual map, the second equality
holds because composition of functions
is associative, and the last equality fol-
lows from the definition of composition.
The equation above shows that
(𝑆𝑇)′(𝜑) = (𝑇′𝑆′)(𝜑) for all 𝜑∈𝑈′.
Thus (𝑆𝑇)′ = 𝑇′𝑆′.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3F
Duality
Null Space and Range of Dual of Linear Map
Our goal in this subsection is to describe null 𝑇′ and range 𝑇′ in terms of range 𝑇
and null 𝑇. To do this, we will need the next definition.
3.121
definition: annihilator, 𝑈0
For 𝑈⊆𝑉, the annihilator of 𝑈, denoted by 𝑈0, is defined by
𝑈0 = {𝜑∈𝑉′ ∶𝜑(𝑢) = 0 for all 𝑢∈𝑈}.
3.122
example: element of an annihilator
Suppose 𝑈is the subspace of 𝒫(𝐑) consisting of polynomial multiples of 𝑥2.
If 𝜑is the linear functional on 𝒫(𝐑) defined by 𝜑(𝑝) = 𝑝′(0), then 𝜑∈𝑈0.
For 𝑈⊆𝑉, the annihilator 𝑈0 is a subset of the dual space 𝑉′. Thus 𝑈0
depends on the vector space containing 𝑈, so a notation such as 𝑈0
𝑉would be
more precise. However, the containing vector space will always be clear from the
context, so we will use the simpler notation 𝑈0.
3.123
example: the annihilator of a two-dimensional subspace of 𝐑5
Let 𝑒1, 𝑒2, 𝑒3, 𝑒4, 𝑒5 denote the standard basis of 𝐑5; let 𝜑1, 𝜑2, 𝜑3, 𝜑4, 𝜑5 ∈
(𝐑5)
′denote the dual basis of 𝑒1, 𝑒2, 𝑒3, 𝑒4, 𝑒5. Suppose
𝑈= span(𝑒1, 𝑒2) = {(𝑥1, 𝑥2, 0, 0, 0) ∈𝐑5 ∶𝑥1, 𝑥2 ∈𝐑}.
We want to show that 𝑈0 = span(𝜑3, 𝜑4, 𝜑5).
Recall (see 3.113) that 𝜑𝑗is the linear functional on 𝐑5 that selects the 𝑗th
coordinate: 𝜑𝑗(𝑥1, 𝑥2, 𝑥3, 𝑥4, 𝑥5) = 𝑥𝑗.
First suppose 𝜑∈span(𝜑3, 𝜑4, 𝜑5). Then there exist 𝑐3, 𝑐4, 𝑐5 ∈𝐑such that
𝜑= 𝑐3𝜑3 + 𝑐4𝜑4 + 𝑐5𝜑5. If (𝑥1, 𝑥2, 0, 0, 0) ∈𝑈, then
𝜑(𝑥1, 𝑥2, 0, 0, 0) = (𝑐3𝜑3 + 𝑐4𝜑4 + 𝑐5𝜑5)(𝑥1, 𝑥2, 0, 0, 0) = 0.
Thus 𝜑∈𝑈0. Hence we have shown that span(𝜑3, 𝜑4, 𝜑5) ⊆𝑈0.
To show the inclusion in the other direction, suppose that 𝜑∈𝑈0. Be-
cause the dual basis is a basis of (𝐑5)
′, there exist 𝑐1, 𝑐2, 𝑐3, 𝑐4, 𝑐5 ∈𝐑such that
𝜑= 𝑐1𝜑1 + 𝑐2𝜑2 + 𝑐3𝜑3 + 𝑐4𝜑4 + 𝑐5𝜑5. Because 𝑒1 ∈𝑈and 𝜑∈𝑈0, we have
0 = 𝜑(𝑒1) = (𝑐1𝜑1 + 𝑐2𝜑2 + 𝑐3𝜑3 + 𝑐4𝜑4 + 𝑐5𝜑5)(𝑒1) = 𝑐1.
Similarly, 𝑒2 ∈𝑈and thus 𝑐2 = 0. Hence 𝜑= 𝑐3𝜑3 + 𝑐4𝜑4 + 𝑐5𝜑5. Thus
𝜑∈span(𝜑3, 𝜑4, 𝜑5), which shows that 𝑈0 ⊆span(𝜑3, 𝜑4, 𝜑5).
Thus 𝑈0 = span(𝜑3, 𝜑4, 𝜑5).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
3.124
the annihilator is a subspace
Suppose 𝑈⊆𝑉. Then 𝑈0 is a subspace of 𝑉′.
Proof
Note that 0 ∈𝑈0 (here 0 is the zero linear functional on 𝑉) because the
zero linear functional applied to every vector in 𝑈equals 0 ∈𝐅.
Suppose 𝜑, 𝜓∈𝑈0. Thus 𝜑, 𝜓∈𝑉′ and 𝜑(𝑢) = 𝜓(𝑢) = 0 for every 𝑢∈𝑈.
If 𝑢∈𝑈, then
(𝜑+ 𝜓)(𝑢) = 𝜑(𝑢) + 𝜓(𝑢) = 0 + 0 = 0.
Thus 𝜑+ 𝜓∈𝑈0.
Similarly, 𝑈0 is closed under scalar multiplication. Thus 1.34 implies that 𝑈0
is a subspace of 𝑉′.
The next result shows that dim 𝑈0 is the difference of dim 𝑉and dim 𝑈. For
example, this shows that if 𝑈is a two-dimensional subspace of 𝐑5, then 𝑈0 is a
three-dimensional subspace of (𝐑5)
′, as in Example 3.123.
The next result can be proved following the pattern of Example 3.123: choose a
basis 𝑢1, … , 𝑢𝑚of 𝑈, extend to a basis 𝑢1, … , 𝑢𝑚, … , 𝑢𝑛of 𝑉, let 𝜑1, … , 𝜑𝑚, … , 𝜑𝑛
be the dual basis of 𝑉′, and then show that 𝜑𝑚+1, … , 𝜑𝑛is a basis of 𝑈0, which
implies the desired result. You should construct the proof just outlined, even
though a slicker proof is presented here.
3.125
dimension of the annihilator
Suppose 𝑉is finite-dimensional and 𝑈is a subspace of 𝑉. Then
dim 𝑈0 = dim 𝑉−dim 𝑈.
Proof
Let 𝑖∈ℒ(𝑈, 𝑉) be the inclusion map defined by 𝑖(𝑢) = 𝑢for each
𝑢∈𝑈. Thus 𝑖′ is a linear map from 𝑉′ to 𝑈′. The fundamental theorem of linear
maps (3.21) applied to 𝑖′ shows that
dim range 𝑖′ + dim null 𝑖′ = dim 𝑉′.
However, null 𝑖′ = 𝑈0 (as can be seen by thinking about the definitions) and
dim 𝑉′ = dim 𝑉(by 3.111), so we can rewrite the equation above as
3.126
dim range 𝑖′ + dim 𝑈0 = dim 𝑉.
If 𝜑∈𝑈′, then 𝜑can be extended to a linear functional 𝜓on 𝑉(see, for
example, Exercise 13 in Section 3A). The definition of 𝑖′ shows that 𝑖′(𝜓) = 𝜑.
Thus 𝜑∈range 𝑖′, which implies that range 𝑖′ = 𝑈′. Hence
dim range 𝑖′ = dim 𝑈′ = dim 𝑈,
and then 3.126 becomes the equation dim 𝑈+ dim 𝑈0 = dim 𝑉, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3F
Duality
The next result can be a useful tool to show that a subspace is as big as
possible—see (a)—or to show that a subspace is as small as possible—see (b).
3.127
condition for the annihilator to equal {0} or the whole space
Suppose 𝑉is finite-dimensional and 𝑈is a subspace of 𝑉. Then
(a) 𝑈0 = {0} ⟺𝑈= 𝑉;
(b) 𝑈0 = 𝑉′ ⟺𝑈= {0}.
Proof
To prove (a), we have
𝑈0 = {0} ⟺dim 𝑈0 = 0
⟺dim 𝑈= dim 𝑉
⟺𝑈= 𝑉,
where the second equivalence follows from 3.125 and the third equivalence follows
from 2.39.
Similarly, to prove (b) we have
𝑈0 = 𝑉′ ⟺dim 𝑈0 = dim 𝑉′
⟺dim 𝑈0 = dim 𝑉
⟺dim 𝑈= 0
⟺𝑈= {0},
where one direction of the first equivalence follows from 2.39, the second equiva-
lence follows from 3.111, and the third equivalence follows from 3.125.
The proof of (a) in the next result does not use the hypothesis that 𝑉and 𝑊
are finite-dimensional.
3.128
the null space of 𝑇′
Suppose 𝑉and 𝑊are finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Then
(a) null 𝑇′ = (range 𝑇)0;
(b) dim null 𝑇′ = dim null 𝑇+ dim 𝑊−dim 𝑉.
Proof
(a) First suppose 𝜑∈null 𝑇′. Thus 0 = 𝑇′(𝜑) = 𝜑∘𝑇. Hence
0 = (𝜑∘𝑇)(𝑣) = 𝜑(𝑇𝑣)
for every 𝑣∈𝑉.
Thus 𝜑∈(range 𝑇)0. This implies that null 𝑇′ ⊆(range 𝑇)0.
To prove the inclusion in the opposite direction, now suppose 𝜑∈(range 𝑇)0.
Thus 𝜑(𝑇𝑣) = 0 for every vector 𝑣∈𝑉. Hence 0 = 𝜑∘𝑇= 𝑇′(𝜑). In other
words, 𝜑∈null 𝑇′, which shows that (range 𝑇)0 ⊆null 𝑇′, completing the
proof of (a).
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
(b) We have
dim null 𝑇′ = dim(range 𝑇)0
= dim 𝑊−dim range 𝑇
= dim 𝑊−(dim 𝑉−dim null 𝑇)
= dim null 𝑇+ dim 𝑊−dim 𝑉,
where the first equality comes from (a), the second equality comes from
3.125, and the third equality comes from the fundamental theorem of linear
maps (3.21).
The next result can be useful because sometimes it is easier to verify that 𝑇′
is injective than to show directly that 𝑇is surjective.
3.129
𝑇surjective is equivalent to 𝑇′ injective
Suppose 𝑉and 𝑊are finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Then
𝑇is surjective ⟺𝑇′ is injective.
Proof
We have
𝑇∈ℒ(𝑉, 𝑊) is surjective ⟺range 𝑇= 𝑊
⟺(range 𝑇)0 = {0}
⟺null 𝑇′ = {0}
⟺𝑇′ is injective,
where the second equivalence comes from 3.127(a) and the third equivalence
comes from 3.128(a).
3.130
the range of 𝑇′
Suppose 𝑉and 𝑊are finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Then
(a) dim range 𝑇′ = dim range 𝑇;
(b) range 𝑇′ = (null 𝑇)0.
Proof
(a) We have
dim range 𝑇′ = dim 𝑊′ −dim null 𝑇′
= dim 𝑊−dim(range 𝑇)0
= dim range 𝑇,
where the first equality comes from 3.21, the second equality comes from
3.111 and 3.128(a), and the third equality comes from 3.125.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3F
Duality
(b) First suppose 𝜑∈range 𝑇′. Thus there exists 𝜓∈𝑊′ such that 𝜑= 𝑇′(𝜓).
If 𝑣∈null 𝑇, then
𝜑(𝑣) = (𝑇′(𝜓))𝑣= (𝜓∘𝑇)(𝑣) = 𝜓(𝑇𝑣) = 𝜓(0) = 0.
Hence 𝜑∈(null 𝑇)0. This implies that range 𝑇′ ⊆(null 𝑇)0.
We will complete the proof by showing that range 𝑇′ and (null 𝑇)0 have the
same dimension. To do this, note that
dim range 𝑇′ = dim range 𝑇
= dim 𝑉−dim null 𝑇
= dim(null 𝑇)0,
where the first equality comes from (a), the second equality comes from 3.21,
and the third equality comes from 3.125.
The next result should be compared to 3.129.
3.131
𝑇injective is equivalent to 𝑇′ surjective
Suppose 𝑉and 𝑊are finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Then
𝑇is injective ⟺𝑇′ is surjective.
Proof
We have
𝑇is injective ⟺null 𝑇= {0}
⟺(null 𝑇)0 = 𝑉′
⟺range 𝑇′ = 𝑉′,
where the second equivalence follows from 3.127(b) and the third equivalence
follows from 3.130(b).
Matrix of Dual of Linear Map
The setting for the next result is the assumption that we have a basis 𝑣1, … , 𝑣𝑛
of 𝑉, along with its dual basis 𝜑1, … , 𝜑𝑛of 𝑉′. We also have a basis 𝑤1, … , 𝑤𝑚
of 𝑊, along with its dual basis 𝜓1, … , 𝜓𝑚of 𝑊′. Thus ℳ(𝑇) is computed with
respect to the bases just mentioned of 𝑉and 𝑊, and ℳ(𝑇′) is computed with
respect to the dual bases just mentioned of 𝑊′ and 𝑉′. Using these bases gives
the following pretty result.
3.132
matrix of 𝑇′ is transpose of matrix of 𝑇
Suppose 𝑉and 𝑊are finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Then
ℳ(𝑇′) = (ℳ(𝑇))t.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Proof
Let 𝐴= ℳ(𝑇) and 𝐶= ℳ(𝑇′). Suppose 1 ≤𝑗≤𝑚and 1 ≤𝑘≤𝑛.
From the definition of ℳ(𝑇′) we have
𝑇′(𝜓𝑗) =
𝑛
∑
𝑟=1
𝐶𝑟,𝑗𝜑𝑟.
The left side of the equation above equals 𝜓𝑗∘𝑇. Thus applying both sides of the
equation above to 𝑣𝑘gives
(𝜓𝑗∘𝑇)(𝑣𝑘) =
𝑛
∑
𝑟=1
𝐶𝑟,𝑗𝜑𝑟(𝑣𝑘)
= 𝐶𝑘,𝑗.
We also have
(𝜓𝑗∘𝑇)(𝑣𝑘) = 𝜓𝑗(𝑇𝑣𝑘)
= 𝜓𝑗(
𝑚
∑
𝑟=1
𝐴𝑟,𝑘𝑤𝑟)
=
𝑚
∑
𝑟=1
𝐴𝑟,𝑘𝜓𝑗(𝑤𝑟)
= 𝐴𝑗,𝑘.
Comparing the last line of the last two sets of equations, we have 𝐶𝑘,𝑗= 𝐴𝑗,𝑘.
Thus 𝐶= 𝐴t. In other words, ℳ(𝑇′) = (ℳ(𝑇))t, as desired.
Now we use duality to give an alternative proof that the column rank of a
matrix equals the row rank of the matrix. This result was previously proved using
different tools—see 3.57.
3.133
column rank equals row rank
Suppose 𝐴∈𝐅𝑚,𝑛. Then the column rank of 𝐴equals the row rank of 𝐴.
Proof
Define 𝑇∶𝐅𝑛,1 →𝐅𝑚,1 by 𝑇𝑥= 𝐴𝑥. Thus ℳ(𝑇) = 𝐴, where ℳ(𝑇) is
computed with respect to the standard bases of 𝐅𝑛,1 and 𝐅𝑚,1. Now
column rank of 𝐴= column rank of ℳ(𝑇)
= dim range 𝑇
= dim range 𝑇′
= column rank of ℳ(𝑇′)
= column rank of 𝐴t
= row rank of 𝐴,
where the second equality comes from 3.78, the third equality comes from 3.130(a),
the fourth equality comes from 3.78, the fifth equality comes from 3.132, and the
last equality follows from the definitions of row and column rank.
See Exercise 8 in Section 7A for another alternative proof of the result above.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3F
Duality
Exercises 3F
Explain why each linear functional is surjective or is the zero map.
Give three distinct examples of linear functionals on 𝐑[0,1].
Suppose 𝑉is finite-dimensional and 𝑣∈𝑉with 𝑣≠0. Prove that there
exists 𝜑∈𝑉′ such that 𝜑(𝑣) = 1.
Suppose 𝑉is finite-dimensional and 𝑈is a subspace of 𝑉such that 𝑈≠𝑉.
Prove that there exists 𝜑∈𝑉′ such that 𝜑(𝑢) = 0 for every 𝑢∈𝑈but 𝜑≠0.
Suppose 𝑇∈ℒ(𝑉, 𝑊) and 𝑤1, … , 𝑤𝑚is a basis of range 𝑇. Hence for each
𝑣∈𝑉, there exist unique numbers 𝜑1(𝑣), … , 𝜑𝑚(𝑣) such that
𝑇𝑣= 𝜑1(𝑣)𝑤1 + ⋯+ 𝜑𝑚(𝑣)𝑤𝑚,
thus defining functions 𝜑1, … , 𝜑𝑚from 𝑉to 𝐅. Show that each of the
functions 𝜑1, … , 𝜑𝑚is a linear functional on 𝑉.
Suppose 𝜑, 𝛽∈𝑉′. Prove that null 𝜑⊆null 𝛽if and only if there exists
𝑐∈𝐅such that 𝛽= 𝑐𝜑.
Suppose that 𝑉1, … , 𝑉𝑚are vector spaces. Prove that (𝑉1 × ⋯× 𝑉𝑚)′ and
𝑉1
′ × ⋯× 𝑉𝑚
′ are isomorphic vector spaces.
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝜑1, … , 𝜑𝑛is the dual basis of 𝑉′. Define
Γ∶𝑉→𝐅𝑛and Λ∶𝐅𝑛→𝑉by
Γ(𝑣) = (𝜑1(𝑣), … , 𝜑𝑛(𝑣))
and
Λ(𝑎1, … , 𝑎𝑛) = 𝑎1𝑣1 + ⋯+ 𝑎𝑛𝑣𝑛.
Explain why Γ and Λ are inverses of each other.
Suppose 𝑚is a positive integer. Show that the dual basis of the basis
1, 𝑥, … , 𝑥𝑚of 𝒫𝑚(𝐑) is 𝜑0, 𝜑1, … , 𝜑𝑚, where
𝜑𝑘(𝑝) = 𝑝(𝑘)(0)
𝑘!
.
Here 𝑝(𝑘) denotes the 𝑘th derivative of 𝑝, with the understanding that the 0th
derivative of 𝑝is 𝑝.
Suppose 𝑚is a positive integer.
(a) Show that 1, 𝑥−5, … , (𝑥−5)𝑚is a basis of 𝒫𝑚(𝐑).
(b) What is the dual basis of the basis in (a)?
Suppose 𝑣1, … , 𝑣𝑛is a basis of 𝑉and 𝜑1, … , 𝜑𝑛is the corresponding dual
basis of 𝑉′. Suppose 𝜓∈𝑉′. Prove that
𝜓= 𝜓(𝑣1)𝜑1 + ⋯+ 𝜓(𝑣𝑛)𝜑𝑛.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
Suppose 𝑆, 𝑇∈ℒ(𝑉, 𝑊).
(a) Prove that (𝑆+ 𝑇)′ = 𝑆′ + 𝑇′.
(b) Prove that (𝜆𝑇)′ = 𝜆𝑇′ for all 𝜆∈𝐅.
This exercise asks you to verify (a) and (b) in 3.120.
Show that the dual map of the identity operator on 𝑉is the identity operator
on 𝑉′.
Define 𝑇∶𝐑3 →𝐑2 by
𝑇(𝑥, 𝑦, 𝑧) = (4𝑥+ 5𝑦+ 6𝑧, 7𝑥+ 8𝑦+ 9𝑧).
Suppose 𝜑1, 𝜑2 denotes the dual basis of the standard basis of 𝐑2 and
𝜓1, 𝜓2, 𝜓3 denotes the dual basis of the standard basis of 𝐑3.
(a) Describe the linear functionals 𝑇′(𝜑1) and 𝑇′(𝜑2).
(b) Write 𝑇′(𝜑1) and 𝑇′(𝜑2) as linear combinations of 𝜓1, 𝜓2, 𝜓3.
Define 𝑇∶𝒫(𝐑) →𝒫(𝐑) by
(𝑇𝑝)(𝑥) = 𝑥2𝑝(𝑥) + 𝑝″(𝑥)
for each 𝑥∈𝐑.
(a) Suppose 𝜑∈𝒫(𝐑)′ is defined by 𝜑(𝑝) = 𝑝′(4). Describe the linear
functional 𝑇′(𝜑) on 𝒫(𝐑).
(b) Suppose 𝜑∈𝒫(𝐑)′ is defined by 𝜑(𝑝) = ∫1
0 𝑝. Evaluate (𝑇′(𝜑))(𝑥3).
Suppose 𝑊is finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Prove that
𝑇′ = 0 ⟺𝑇= 0.
Suppose 𝑉and 𝑊are finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Prove that 𝑇is
invertible if and only if 𝑇′ ∈ℒ(𝑊′, 𝑉′) is invertible.
Suppose 𝑉and 𝑊are finite-dimensional. Prove that the map that takes
𝑇∈ℒ(𝑉, 𝑊) to 𝑇′ ∈ℒ(𝑊′, 𝑉′) is an isomorphism of ℒ(𝑉, 𝑊) onto
ℒ(𝑊′, 𝑉′).
Suppose 𝑈⊆𝑉. Explain why
𝑈0 = {𝜑∈𝑉′ ∶𝑈⊆null 𝜑}.
Suppose 𝑉is finite-dimensional and 𝑈is a subspace of 𝑉. Show that
𝑈= {𝑣∈𝑉∶𝜑(𝑣) = 0 for every 𝜑∈𝑈0}.
Suppose 𝑉is finite-dimensional and 𝑈and 𝑊are subspaces of 𝑉.
(a) Prove that 𝑊0 ⊆𝑈0 if and only if 𝑈⊆𝑊.
(b) Prove that 𝑊0 = 𝑈0 if and only if 𝑈= 𝑊.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 3F
Duality
Suppose 𝑉is finite-dimensional and 𝑈and 𝑊are subspaces of 𝑉.
(a) Show that (𝑈+ 𝑊)0 = 𝑈0 ∩𝑊0.
(b) Show that (𝑈∩𝑊)0 = 𝑈0 + 𝑊0.
Suppose 𝑉is finite-dimensional and 𝜑1, … , 𝜑𝑚∈𝑉′. Prove that the follow-
ing three sets are equal to each other.
(a) span(𝜑1, … , 𝜑𝑚)
(b) ((null 𝜑1) ∩⋯∩(null 𝜑𝑚))0
(c) {𝜑∈𝑉′ ∶(null 𝜑1) ∩⋯∩(null 𝜑𝑚) ⊆null 𝜑}
Suppose 𝑉is finite-dimensional and 𝑣1, … , 𝑣𝑚∈𝑉. Define a linear map
Γ∶𝑉′ →𝐅𝑚by Γ(𝜑) = (𝜑(𝑣1), … , 𝜑(𝑣𝑚)).
(a) Prove that 𝑣1, … , 𝑣𝑚spans 𝑉if and only if Γ is injective.
(b) Prove that 𝑣1, … , 𝑣𝑚is linearly independent if and only if Γ is surjective.
Suppose 𝑉is finite-dimensional and 𝜑1, … , 𝜑𝑚∈𝑉′. Define a linear map
Γ∶𝑉→𝐅𝑚by Γ(𝑣) = (𝜑1(𝑣), … , 𝜑𝑚(𝑣)).
(a) Prove that 𝜑1, … , 𝜑𝑚spans 𝑉′ if and only if Γ is injective.
(b) Prove that 𝜑1, … , 𝜑𝑚is linearly independent if and only if Γ is surjective.
Suppose 𝑉is finite-dimensional and Ω is a subspace of 𝑉′. Prove that
Ω = {𝑣∈𝑉∶𝜑(𝑣) = 0 for every 𝜑∈Ω}0.
Suppose 𝑇∈ℒ(𝒫5(𝐑)) and null 𝑇′ = span(𝜑), where 𝜑is the linear
functional on 𝒫5(𝐑) defined by 𝜑(𝑝) = 𝑝(8). Prove that
range 𝑇= {𝑝∈𝒫5(𝐑) ∶𝑝(8) = 0}.
Suppose 𝑉is finite-dimensional and 𝜑1, … , 𝜑𝑚is a linearly independent list
in 𝑉′. Prove that
dim((null 𝜑1) ∩⋯∩(null 𝜑𝑚)) = (dim 𝑉) −𝑚.
Suppose 𝑉and 𝑊are finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊).
(a) Prove that if 𝜑∈𝑊′ and null 𝑇′ = span(𝜑), then range 𝑇= null 𝜑.
(b) Prove that if 𝜓∈𝑉′ and range 𝑇′ = span(𝜓), then null 𝑇= null 𝜓.
Suppose 𝑉is finite-dimensional and 𝜑1, … , 𝜑𝑛is a basis of 𝑉′. Show that
there exists a basis of 𝑉whose dual basis is 𝜑1, … , 𝜑𝑛.
Suppose 𝑈is a subspace of 𝑉. Let 𝑖∶𝑈→𝑉be the inclusion map defined
by 𝑖(𝑢) = 𝑢. Thus 𝑖′ ∈ℒ(𝑉′, 𝑈′).
(a) Show that null 𝑖′ = 𝑈0.
(b) Prove that if 𝑉is finite-dimensional, then range 𝑖′ = 𝑈′.
(c) Prove that if 𝑉is finite-dimensional, theñ 𝑖′ is an isomorphism from
𝑉′/𝑈0 onto 𝑈′.
The isomorphism in (c) is natural in that it does not depend on a choice of
basis in either vector space.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 3
Linear Maps
The double dual space of 𝑉, denoted by 𝑉″, is defined to be the dual space
of 𝑉′. In other words, 𝑉″ = (𝑉′)′. Define Λ∶𝑉→𝑉″ by
(Λ𝑣)(𝜑) = 𝜑(𝑣)
for each 𝑣∈𝑉and each 𝜑∈𝑉′.
(a) Show that Λ is a linear map from 𝑉to 𝑉″.
(b) Show that if 𝑇∈ℒ(𝑉), then 𝑇″ ∘Λ = Λ ∘𝑇, where 𝑇″ = (𝑇′)′.
(c) Show that if 𝑉is finite-dimensional, then Λ is an isomorphism from 𝑉
onto 𝑉″.
Suppose 𝑉is finite-dimensional. Then 𝑉and 𝑉′ are isomorphic, but finding
an isomorphism from 𝑉onto 𝑉′ generally requires choosing a basis of 𝑉.
In contrast, the isomorphism Λ from 𝑉onto 𝑉″ does not require a choice
of basis and thus is considered more natural.
Suppose 𝑈is a subspace of 𝑉. Let 𝜋∶𝑉→𝑉/𝑈be the usual quotient map.
Thus 𝜋′ ∈ℒ((𝑉/𝑈)′, 𝑉′).
(a) Show that 𝜋′ is injective.
(b) Show that range 𝜋′ = 𝑈0.
(c) Conclude that 𝜋′ is an isomorphism from (𝑉/𝑈)′ onto 𝑈0.
The isomorphism in (c) is natural in that it does not depend on a choice of
basis in either vector space. In fact, there is no assumption here that any of
these vector spaces are finite-dimensional.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
This chapter contains material on polynomials that we will use to investigate
linear maps from a vector space to itself. Many results in this chapter will already
be familiar to you from other courses; they are included here for completeness.
Because this chapter is not about linear algebra, your instructor may go through
it rapidly. You may not be asked to scrutinize all the proofs. Make sure, however,
that you at least read and understand the statements of all results in this chapter—
they will be used in later chapters.
This chapter begins with a brief discussion of algebraic properties of the
complex numbers. Then we prove that a nonconstant polynomial cannot have
more zeros than its degree. We also give a linear-algebra-based proof of the
division algorithm for polynomials, which is worth reading even if you are already
familiar with a proof that does not use linear algebra.
As we will see, the fundamental theorem of algebra leads to a factorization of
every polynomial into degree-one factors if the scalar field is 𝐂or to factors of
degree at most two if the scalar field is 𝐑.
standing assumption for this chapter
• 𝐅denotes 𝐑or 𝐂.
Alireza Javaheri CC BY
Statue of mathematician and poet Omar Khayyam (1048–1131), whose algebra
book written in 1070 contained the first serious study of cubic polynomials.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
Before discussing polynomials with complex or real coefficients, we need to
learn a bit more about the complex numbers.
4.1
definition: real part, Re 𝑧, imaginary part, Im 𝑧
Suppose 𝑧= 𝑎+ 𝑏𝑖, where 𝑎and 𝑏are real numbers.
• The real part of 𝑧, denoted by Re 𝑧, is defined by Re 𝑧= 𝑎.
• The imaginary part of 𝑧, denoted by Im 𝑧, is defined by Im 𝑧= 𝑏.
Thus for every complex number 𝑧, we have
𝑧= Re 𝑧+ (Im 𝑧)𝑖.
4.2
definition: complex conjugate, 𝑧, absolute value, |𝑧|
Suppose 𝑧∈𝐂.
• The complex conjugate of 𝑧∈𝐂, denoted by 𝑧, is defined by
𝑧= Re 𝑧−(Im 𝑧)𝑖.
• The absolute value of a complex number 𝑧, denoted by |𝑧|, is defined by
|𝑧| = √(Re 𝑧)2 + (Im 𝑧)2.
4.3
example: real and imaginary part, complex conjugate, absolute value
Suppose 𝑧= 3 + 2𝑖. Then
• Re 𝑧= 3 and Im 𝑧= 2;
• 𝑧= 3 −2𝑖;
• |𝑧| = √32 + 22 = √13.
Identifying a complex number 𝑧∈𝐂with the ordered pair (Re 𝑧, Im 𝑧) ∈𝐑2
identifies 𝐂with 𝐑2. Note that 𝐂is a one-dimensional complex vector space,
but we can also think of 𝐂(identified with 𝐑2) as a two-dimensional real vector
space.
The absolute value of each complex number is a nonnegative number. Specif-
ically, if 𝑧∈𝐂, then |𝑧| equals the distance from the origin in 𝐑2 to the point
(Re 𝑧, Im 𝑧) ∈𝐑2.
You should verify that 𝑧= 𝑧if and only
if 𝑧is a real number.
The real and imaginary parts, com-
plex conjugate, and absolute value have
the properties listed in the following
multipart result.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
4.4
properties of complex numbers
Suppose 𝑤, 𝑧∈𝐂. Then the following equalities and inequalities hold.
sum of 𝑧and 𝑧
𝑧+ 𝑧= 2 Re 𝑧.
difference of 𝑧and 𝑧
𝑧−𝑧= 2(Im 𝑧)𝑖.
product of 𝑧and 𝑧
𝑧𝑧= |𝑧|2.
additivity and multiplicativity of complex conjugate
𝑤+ 𝑧= 𝑤+ 𝑧and 𝑤𝑧= 𝑤𝑧.
double complex conjugate
𝑧= 𝑧.
real and imaginary parts are bounded by |𝑧|
| Re 𝑧| ≤|𝑧| and | Im 𝑧| ≤|𝑧|.
absolute value of the complex conjugate
∣𝑧∣= |𝑧|.
multiplicativity of absolute value
|𝑤𝑧| = |𝑤| |𝑧|.
triangle inequality
|𝑤+ 𝑧| ≤|𝑤| + |𝑧|.
Geometric interpretation of triangle in-
equality: The length of each side of a
triangle is less than or equal to the sum
of the lengths of the two other sides.
Proof
Except for the last item above,
the routine verifications of the assertions
above are left to the reader. To verify the
triangle inequality, we have
|𝑤+ 𝑧|2 = (𝑤+ 𝑧)(𝑤+ 𝑧)
= 𝑤𝑤+ 𝑧𝑧+ 𝑤𝑧+ 𝑧𝑤
= |𝑤|2 + |𝑧|2 + 𝑤𝑧+ 𝑤𝑧
= |𝑤|2 + |𝑧|2 + 2 Re(𝑤𝑧)
≤|𝑤|2 + |𝑧|2 + 2∣𝑤𝑧∣
= |𝑤|2 + |𝑧|2 + 2|𝑤| |𝑧|
= (|𝑤| + |𝑧|)2.
See Exercise 2 for the reverse triangle
inequality.
Taking square roots now gives the desired
inequality |𝑤+ 𝑧| ≤|𝑤| + |𝑧|.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
Zeros of Polynomials
Recall that a function 𝑝∶𝐅→𝐅is called a polynomial of degree 𝑚if there exist
𝑎0, … , 𝑎𝑚∈𝐅with 𝑎𝑚≠0 such that
𝑝(𝑧) = 𝑎0 + 𝑎1𝑧+ ⋯+ 𝑎𝑚𝑧𝑚
for all 𝑧∈𝐅. A polynomial could have more than one degree if the representation
of 𝑝in the form above were not unique. Our first task is to show that this cannot
happen.
The solutions to the equation 𝑝(𝑧) = 0 play a crucial role in the study of a
polynomial 𝑝∈𝒫(𝐅). Thus these solutions have a special name.
4.5
definition: zero of a polynomial
A number 𝜆∈𝐅is called a zero (or root) of a polynomial 𝑝∈𝒫(𝐅) if
𝑝(𝜆) = 0.
The next result is the key tool that we will use to show that the degree of a
polynomial is unique.
4.6
each zero of a polynomial corresponds to a degree-one factor
Suppose 𝑚is a positive integer and 𝑝∈𝒫(𝐅) is a polynomial of degree 𝑚.
Suppose 𝜆∈𝐅. Then 𝑝(𝜆) = 0 if and only if there exists a polynomial
𝑞∈𝒫(𝐅) of degree 𝑚−1 such that
𝑝(𝑧) = (𝑧−𝜆)𝑞(𝑧)
for every 𝑧∈𝐅.
Proof
First suppose 𝑝(𝜆) = 0. Let 𝑎0, 𝑎1, … , 𝑎𝑚∈𝐅be such that
𝑝(𝑧) = 𝑎0 + 𝑎1𝑧+ ⋯+ 𝑎𝑚𝑧𝑚
for all 𝑧∈𝐅. Then
4.7
𝑝(𝑧) = 𝑝(𝑧) −𝑝(𝜆) = 𝑎1(𝑧−𝜆) + ⋯+ 𝑎𝑚(𝑧𝑚−𝜆𝑚)
for all 𝑧∈𝐅. For each 𝑘∈{1, … , 𝑚}, the equation
𝑧𝑘−𝜆𝑘= (𝑧−𝜆)
𝑘
∑
𝑗=1
𝜆𝑗−1𝑧𝑘−𝑗
shows that 𝑧𝑘−𝜆𝑘equals 𝑧−𝜆times some polynomial of degree 𝑘−1. Thus 4.7
shows that 𝑝equals 𝑧−𝜆times some polynomial of degree 𝑚−1, as desired.
To prove the implication in the other direction, now suppose that there is
a polynomial 𝑞∈𝒫(𝐅) such that 𝑝(𝑧) = (𝑧−𝜆)𝑞(𝑧) for every 𝑧∈𝐅. Then
𝑝(𝜆) = (𝜆−𝜆)𝑞(𝜆) = 0, as desired.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 4
Polynomials
Now we can prove that polynomials do not have too many zeros.
4.8
degree 𝑚implies at most 𝑚zeros
Suppose 𝑚is a positive integer and 𝑝∈𝒫(𝐅) is a polynomial of degree 𝑚.
Then 𝑝has at most 𝑚zeros in 𝐅.
Proof
We will use induction on 𝑚. The desired result holds if 𝑚= 1 because
if 𝑎1 ≠0 then the polynomial 𝑎0 + 𝑎1𝑧has only one zero (which equals −𝑎0/𝑎1).
Thus assume that 𝑚> 1 and the desired result holds for 𝑚−1.
If 𝑝has no zeros in 𝐅, then the desired result holds and we are done. Thus
suppose 𝑝has a zero 𝜆∈𝐅. By 4.6, there is a polynomial 𝑞∈𝒫(𝐅) of degree
𝑚−1 such that
𝑝(𝑧) = (𝑧−𝜆)𝑞(𝑧)
for every 𝑧∈𝐅. Our induction hypothesis implies that 𝑞has at most 𝑚−1 zeros
in 𝐅. The equation above shows that the zeros of 𝑝in 𝐅are exactly the zeros of 𝑞
in 𝐅along with 𝜆. Thus 𝑝has at most 𝑚zeros in 𝐅.
The result above implies that the coefficients of a polynomial are uniquely
determined (because if a polynomial had two different sets of coefficients, then
subtracting the two representations of the polynomial would give a polynomial
with some nonzero coefficients but infinitely many zeros). In particular, the degree
of a polynomial is uniquely defined.
The 0 polynomial is declared to have
degree −∞so that exceptions are not
needed for various reasonable results
such as deg(𝑝𝑞) = deg 𝑝+ deg 𝑞.
Recall that the degree of the 0 poly-
nomial is defined to be −∞.
When
necessary, use the expected arithmetic
with −∞. For example, −∞< 𝑚and
−∞+ 𝑚= −∞for every integer 𝑚.
Division Algorithm for Polynomials
If 𝑝and 𝑠are nonnegative integers, with 𝑠≠0, then there exist nonnegative
integers 𝑞and 𝑟such that
𝑝= 𝑠𝑞+ 𝑟
and 𝑟< 𝑠. Think of dividing 𝑝by 𝑠, getting quotient 𝑞with remainder 𝑟. Our next
result gives an analogous result for polynomials. Thus the next result is often
