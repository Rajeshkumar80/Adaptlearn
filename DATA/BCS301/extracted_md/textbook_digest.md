<!-- PROVENANCE: subject_code=BCS301 | subject_name=Mathematics for Computer Science | semester=3 | source_type=TEXTBOOK_DIGEST | source_file=textbook_notes.md | extraction_method=STRUCTURED_COMPREHENSIVE | confidence=0.95 -->

# BCS301 — Textbook Notes

**Subject:** BCS301 (Mathematics for Computer Science)
**Content type:** textbook_notes
**Primary Reference:** Sheldon Axler — Linear Algebra Done Right & Peter Bruce — Practical Statistics for Data Scientists

---

# BCS301 — Textbook Notes (Module-wise)
**Subject:** Mathematics for Computer Science
**Prescribed Textbooks:** Sheldon Axler — Linear Algebra Done Right & Peter Bruce — Practical Statistics for Data Scientists

---

## Module 1 Textbook: Linear Algebra

### Textbook Excerpt — Reference: R1_Linear_Algebra_Done_Right_Axler.txt

ilar, 1.30 and 1.31 are not identical. More precisely, 1.30 states that the
product of the scalar 0 and any vector equals the vector 0, whereas 1.31 states that
the product of any scalar and the vector 0 equals the vector 0.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 1
Vector Spaces
a number times the vector 0
𝑎0 = 0 for every 𝑎∈𝐅.
Proof
For 𝑎∈𝐅, we have
𝑎0 = 𝑎(0 + 0) = 𝑎0 + 𝑎0.
Adding the additive inverse of 𝑎0 to both sides of the equation above gives 0 = 𝑎0,
as desired.
Now we show that if an element of 𝑉is multiplied by the scalar −1, then the
result is the additive inverse of the element of 𝑉.
the number −1 times a vector
(−1)𝑣= −𝑣for every 𝑣∈𝑉.
Proof
For 𝑣∈𝑉, we have
𝑣+ (−1)𝑣= 1𝑣+ (−1)𝑣= (1 + (−1))𝑣= 0𝑣= 0.
This equation says that (−1)𝑣, when added to 𝑣, gives 0. Thus (−1)𝑣is the
additive inverse of 𝑣, as desired.
Exercises 1B
Prove that −(−𝑣) = 𝑣for every 𝑣∈𝑉.
Suppose 𝑎∈𝐅, 𝑣∈𝑉, and 𝑎𝑣= 0. Prove that 𝑎= 0 or 𝑣= 0.
Suppose 𝑣, 𝑤∈𝑉. Explain why there exists a unique 𝑥∈𝑉such that
𝑣+ 3𝑥= 𝑤.
The empty set is not a vector space. The empty set fails to satisfy only one
of the requirements listed in the definition of a vector space (1.20). Which
one?
Show that in the definition of a vector space (1.20), the additive inverse
condition can be replaced with the condition that
0𝑣= 0 for all 𝑣∈𝑉.
Here the 0 on the left side is the number 0, and the 0 on the right side is the
additive identity of 𝑉.
The phrase a “condition can be replaced” in a definition means that the
collection of objects satisfying the definition is unchanged if the original
condition is replaced with the new condition.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Section 1B
Definition of Vector Space
Let ∞and −∞denote two distinct objects, neither of which is in 𝐑. Define
an addition and scalar multiplication on 𝐑∪{∞, −∞} as you could guess
from the notation. Specifically, the sum and product of two real numbers is
as usual, and for 𝑡∈𝐑define
𝑡∞=
⎧{{
⎨{{⎩
−∞
if 𝑡< 0,
if 𝑡= 0,
∞
if 𝑡> 0,
𝑡(−∞) =
⎧{{
⎨{{⎩
∞
if 𝑡< 0,
if 𝑡= 0,
−∞
if 𝑡> 0,
and
𝑡+ ∞= ∞+ 𝑡= ∞+ ∞= ∞,
𝑡+ (−∞) = (−∞) + 𝑡= (−∞) + (−∞) = −∞,
∞+ (−∞) = (−∞) + ∞= 0.
With these operations of addition and scalar multiplication, is 𝐑∪{∞, −∞}
a vector space over 𝐑? Explain.
Suppose 𝑆is a nonempty set. Let 𝑉𝑆denote the set of functions from 𝑆to 𝑉.
Define a natural addition and scalar multiplication on 𝑉𝑆, and show that 𝑉𝑆
is a vector space with these definitions.
Suppose 𝑉is a real vector space.
•
The complexification of 𝑉, denoted by 𝑉𝐂, equals 𝑉× 𝑉. An element
of 𝑉𝐂is an ordered pair (𝑢, 𝑣), where 𝑢, 𝑣∈𝑉, but we write this as
𝑢+ 𝑖𝑣.
•
Addition on 𝑉𝐂is defined by
(𝑢1 + 𝑖𝑣1) + (𝑢2 + 𝑖𝑣2) = (𝑢1 + 𝑢2) + 𝑖(𝑣1 + 𝑣2)
for all 𝑢1, 𝑣1, 𝑢2, 𝑣2 ∈𝑉.
•
Complex scalar multiplication on 𝑉𝐂is defined by
(𝑎+ 𝑏𝑖)(𝑢+ 𝑖𝑣) = (𝑎𝑢−𝑏𝑣) + 𝑖(𝑎𝑣+ 𝑏𝑢)
for all 𝑎, 𝑏∈𝐑and all 𝑢, 𝑣∈𝑉.
Prove that with the definitions of addition and scalar multiplication as above,
𝑉𝐂is a complex vector space.
Think of 𝑉as a subset of 𝑉𝐂by ide

### Textbook Excerpt — Reference: R1_Linear_Algebra_Done_Right_Axler.txt

next result does not use the hypothesis that 𝑉and 𝑊
are finite-dimensional.
the null space of 𝑇′
Suppose 𝑉and 𝑊are finite-dimensional and 𝑇∈ℒ(𝑉, 𝑊). Then
(a) null 𝑇′ = (range 𝑇)0;
(b) dim null 𝑇′ = dim null 𝑇+ dim 𝑊−dim 𝑉.
Proof
(a) First suppose 𝜑∈null 𝑇′. Thus 0 = 𝑇′(𝜑) = 𝜑∘𝑇. Hence
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
maps (3.21).
The next result can be useful because sometimes it is easier to verify that 𝑇′
is injective than to show directly that 𝑇is surjective.
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
mat

---

## Module 2 Textbook: Calculus

### Textbook Excerpt — Reference: R1_Linear_Algebra_Done_Right_Axler.txt

tates that every linear func-
tional on 𝑉is of this form. For example,
we can take 𝑣= (2, −5, 1) in Example
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
𝑣= 𝜑(𝑒1)𝑒1 + ⋯+ 𝜑(𝑒𝑛)𝑒𝑛,
we have 𝜑(𝑢) = ⟨𝑢, 𝑣⟩for every 𝑢∈𝑉, as desired.
Now we prove that only one vector 𝑣∈𝑉has the desired behavior. Suppose
𝑣1, 𝑣2 ∈𝑉are such that
𝜑(𝑢) = ⟨𝑢, 𝑣1⟩= ⟨𝑢, 𝑣2⟩
for every 𝑢∈𝑉. Then
for every 𝑢∈𝑉. Taking 𝑢= 𝑣1 −𝑣2 shows that 𝑣1 −𝑣2 = 0. Thus 𝑣1 = 𝑣2,
completing the proof of the uniqueness part of the result.
Linear Algebra Done Right, fourth edition, by Sheldon Axler

Chapter 6
Inner Product Spaces
example: computation illustrating Riesz representation theorem
Suppose we want to find a polynomial 𝑞∈𝒫2(𝐑) such that
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
−1
√3
2𝑥
+ (∫
−1
√45
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
For two additiona

---

## Module 3 Textbook: Probability and Statistics

### Textbook Excerpt — Reference: R2_Practical_Statistics_for_Data_Scientists_Bruce.txt

deviation, nor the mean absolute deviation is
robust to outliers and extreme values (see “Median and Robust Estimates” for a
discussion of robust estimates for location). The variance and standard deviation
are especially sensitive to outliers since they are based on the squared deviations.
A robust estimate of variability is the median absolute deviation from the median
or MAD:
where m is the median. Like the median, the MAD is not influenced by extreme
values. It is also possible to compute a trimmed standard deviation analogous to
the trimmed mean (see “Mean”).
NOTE
The variance, the standard deviation, mean absolute deviation, and median absolute deviation
from the median are not equivalent estimates, even in the case where the data comes from a
normal distribution. In fact, the standard deviation is always greater than the mean absolute
deviation, which itself is greater than the median absolute deviation. Sometimes, the median
absolute deviation is multiplied by a constant scaling factor (it happens to work out to 1.4826) to
put MAD on the same scale as the standard deviation in the case of a normal distribution.

Estimates Based on Percentiles
A different approach to estimating dispersion is based on looking at the spread of
the sorted data. Statistics based on sorted (ranked) data are referred to as order
statistics. The most basic measure is the range: the difference between the largest
and smallest number. The minimum and maximum values themselves are useful to
know, and helpful in identifying outliers, but the range is extremely sensitive to
outliers and not very useful as a general measure of dispersion in the data.
To avoid the sensitivity to outliers, we can look at the range of the data after
dropping values from each end. Formally, these types of estimates are based on
differences between percentiles. In a data set, the Pth percentile is a value such
that at least P percent of the values take on this value or less and at least (100 – P)
percent of the values take on this value or more. For example, to find the 80th
percentile, sort the data. Then, starting with the smallest value, proceed 80 percent
of the way to the largest value. Note that the median is the same thing as the 50th
percentile. The percentile is essentially the same as a quantile, with quantiles
indexed by fractions (so the .8 quantile is the same as the 80th percentile).
A common measurement of variability is the difference between the 25th
percentile and the 75th percentile, called the interquartile range (or IQR). Here
is a simple example: 3,1,5,3,6,7,2,9. We sort these to get 1,2,3,3,5,6,7,9. The 25th
percentile is at 2.5, and the 75th percentile is at 6.5, so the interquartile range is
answers (see the following note); typically, these differences are smaller.
For very large data sets, calculating exact percentiles can be computationally very
expensive since it requires sorting all the data values. Machine learning and
statistical software use special algorith

### Textbook Excerpt — Reference: R2_Practical_Statistics_for_Data_Scientists_Bruce.txt

uces a result more extreme than the observed result. We can
estimate a p-value from our permutation test by taking the proportion of times that
the permutation test produces a difference equal to or greater than the observed
difference:
mean(perm_diffs > obs_pct_diff)
[1] 0.308
The p-value is 0.308, which means that we would expect to achieve the same
result by random chance over 30% of the time.
In this case, we didn’t need to use a permutation test to get a p-value. Since we
have a binomial distribution, we can approximate the p-value using the normal
distribution. In R code, we do this using the function prop.test:
> prop.test(x=c(200,182), n=c(23739,22588), alternative="greater")

data:  c(200, 182) out of c(23739, 22588)
X-squared = 0.14893, df = 1, p-value = 0.3498
alternative hypothesis: greater
-0.001057439  1.000000000
sample estimates:
prop 1  prop 2
The argument x is the number of successes for each group and the argument n is
the number of trials. The normal approximation yields a p-value of 0.3498, which
is close to the p-value obtained from the permutation test.

Alpha
Statisticians frown on the practice of leaving it to the researcher’s discretion to
determine whether a result is “too unusual” to happen by chance. Rather, a
threshold is specified in advance, as in “more extreme than 5% of the chance (null
hypothesis) results”; this threshold is known as alpha. Typical alpha levels are
the process that will guarantee correct decisions x% of the time. This is because
the probability question being answered is not “what is the probability that this
happened by chance?” but rather “given a chance model, what is the probability of
a result this extreme?” We then deduce backward about the appropriateness of the
chance model, but that judgment does not carry a probability. This point has been
the subject of much confusion.
Value of the p-value
Considerable controversy has surrounded the use of the p-value in recent years.
One psychology journal has gone so far as to “ban” the use of p-values in
submitted papers on the grounds that publication decisions based solely on the p-
value were resulting in the publication of poor research. Too many researchers,
only dimly aware of what a p-value really means, root around in the data and
among different possible hypotheses to test, until they find a combination that
yields a significant p-value and, hence, a paper suitable for publication.
The real problem is that people want more meaning from the p-value than it
contains. Here’s what we would like the p-value to convey:
The probability that the result is due to chance.
We hope for a low value, so we can conclude that we’ve proved something. This
is how many journal editors were interpreting the p-value. But here’s what the p-
value actually represents:
The probability that, given a chance model, results as extreme as the observed
results could occur.
The difference is subtle, but real. A significant p-value does not carry you quite as
far along t

---

## Module 4 Textbook: Numerical Methods

### Textbook Excerpt — Reference: R2_Practical_Statistics_for_Data_Scientists_Bruce.txt

oped during World War II at the US Aberdeen
Proving Grounds by I. J. Schoenberg, a Romanian mathematician. The polynomial
pieces are smoothly connected at a series of fixed points in a predictor variable,
referred to as knots. Formulation of splines is much more complicated than
polynomial regression; statistical software usually handles the details of fitting a
spline. The R package splines includes the function bs to create a b-spline term
in a regression model. For example, the following adds a b-spline term to the
house regression model:

library(splines)
knots <- quantile(house_98105$SqFtTotLiving, p=c(.25, .5, .75))
lm_spline <- lm(AdjSalePrice ~ bs(SqFtTotLiving, knots=knots, degree=3) +
SqFtLot + Bathrooms + Bedrooms + BldgGrade,  data=house_98105)
Two parameters need to be specified: the degree of the polynomial and the
location of the knots. In this case, the predictor SqFtTotLiving is included in the
model using a cubic spline (degree=3). By default, bs places knots at the
boundaries; in addition, knots were also placed at the lower quartile, the median
quartile, and the upper quartile.
In contrast to a linear term, for which the coefficient has a direct meaning, the
coefficients for a spline term are not interpretable. Instead, it is more useful to use
the visual display to reveal the nature of the spline fit. Figure 4-12 displays the
partial residual plot from the regression. In contrast to the polynomial model, the
spline model more closely matches the smooth, demonstrating the greater
flexibility of splines. In this case, the line more closely fits the data. Does this
mean the spline regression is a better model? Not necessarily: it doesn’t make
economic sense that very small homes (less than 1,000 square feet) would have
higher value than slightly larger homes. This is possibly an artifact of a
confounding variable; see “Confounding Variables”.

Figure 4-12. A spline regression fit for the variable SqFtTotLiving (solid line) compared to a smooth
(dashed line)

Generalized Additive Models
Suppose you suspect a nonlinear relationship between the response and a
predictor variable, either by a priori knowledge or by examining the regression
diagnostics. Polynomial terms may not flexible enough to capture the relationship,
and spline terms require specifying the knots. Generalized additive models, or
GAM, are a technique to automatically fit a spline regression. The gam package in
R can be used to fit a GAM model to the housing data:
library(mgcv)
lm_gam <- gam(AdjSalePrice ~ s(SqFtTotLiving) + SqFtLot +
Bathrooms +  Bedrooms + BldgGrade,
data=house_98105)
The term s(SqFtTotLiving) tells the gam function to find the “best” knots for a
spline term (see Figure 4-13).

Figure 4-13. A GAM regression fit for the variable SqFtTotLiving (solid line) compared to a smooth
(dashed line)
KEY IDEAS
Outliers in a regression are records with a large residual.
Multicollinearity can cause numerical instability in fitting the regression equation.
A con

---

## Module 5 Textbook: Graph Theory

### Textbook Excerpt — Reference: R2_Practical_Statistics_for_Data_Scientists_Bruce.txt

deviation, nor the mean absolute deviation is
robust to outliers and extreme values (see “Median and Robust Estimates” for a
discussion of robust estimates for location). The variance and standard deviation
are especially sensitive to outliers since they are based on the squared deviations.
A robust estimate of variability is the median absolute deviation from the median
or MAD:
where m is the median. Like the median, the MAD is not influenced by extreme
values. It is also possible to compute a trimmed standard deviation analogous to
the trimmed mean (see “Mean”).
NOTE
The variance, the standard deviation, mean absolute deviation, and median absolute deviation
from the median are not equivalent estimates, even in the case where the data comes from a
normal distribution. In fact, the standard deviation is always greater than the mean absolute
deviation, which itself is greater than the median absolute deviation. Sometimes, the median
absolute deviation is multiplied by a constant scaling factor (it happens to work out to 1.4826) to
put MAD on the same scale as the standard deviation in the case of a normal distribution.

Estimates Based on Percentiles
A different approach to estimating dispersion is based on looking at the spread of
the sorted data. Statistics based on sorted (ranked) data are referred to as order
statistics. The most basic measure is the range: the difference between the largest
and smallest number. The minimum and maximum values themselves are useful to
know, and helpful in identifying outliers, but the range is extremely sensitive to
outliers and not very useful as a general measure of dispersion in the data.
To avoid the sensitivity to outliers, we can look at the range of the data after
dropping values from each end. Formally, these types of estimates are based on
differences between percentiles. In a data set, the Pth percentile is a value such
that at least P percent of the values take on this value or less and at least (100 – P)
percent of the values take on this value or more. For example, to find the 80th
percentile, sort the data. Then, starting with the smallest value, proceed 80 percent
of the way to the largest value. Note that the median is the same thing as the 50th
percentile. The percentile is essentially the same as a quantile, with quantiles
indexed by fractions (so the .8 quantile is the same as the 80th percentile).
A common measurement of variability is the difference between the 25th
percentile and the 75th percentile, called the interquartile range (or IQR). Here
is a simple example: 3,1,5,3,6,7,2,9. We sort these to get 1,2,3,3,5,6,7,9. The 25th
percentile is at 2.5, and the 75th percentile is at 6.5, so the interquartile range is
answers (see the following note); typically, these differences are smaller.
For very large data sets, calculating exact percentiles can be computationally very
expensive since it requires sorting all the data values. Machine learning and
statistical software use special algorith

---
