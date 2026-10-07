# BCS602 — Module 3

## Unsupervised Learning

**Subject:** BCS602 (Machine Learning)
**Module:** Module 3
**Content type:** textbook_fallback
**Sources:** T1_Pattern_Recognition_and_Machine_Learning_Bishop.txt

---

[z] = R−1 =

Λ−1
Λ−1AT
AΛ−1
L−1 + AΛ−1AT

.
(2.105)

2. PROBABILITY DISTRIBUTIONS
Similarly, we can ﬁnd the mean of the Gaussian distribution over z by identify-
ing the linear terms in (2.102), which are given by
xTΛµ −xTATLb + yTLb =

x
y
T 
Λµ −ATLb
Lb

.
(2.106)
Using our earlier result (2.71) obtained by completing the square over the quadratic
form of a multivariate Gaussian, we ﬁnd that the mean of z is given by
E[z] = R−1

Λµ −ATLb
Lb

.
(2.107)
Making use of (2.105), we then obtain
Exercise 2.30
E[z] =

µ
Aµ + b

.
(2.108)
Next we ﬁnd an expression for the marginal distribution p(y) in which we have
marginalized over x. Recall that the marginal distribution over a subset of the com-
ponents of a Gaussian random vector takes a particularly simple form when ex-
pressed in terms of the partitioned covariance matrix. Speciﬁcally, its mean and
Section 2.3
covariance are given by (2.92) and (2.93), respectively. Making use of (2.105) and
(2.108) we see that the mean and covariance of the marginal distribution p(y) are
given by
E[y]
=
Aµ + b
(2.109)
cov[y]
=
L−1 + AΛ−1AT.
(2.110)
A special case of this result is when A = I, in which case it reduces to the convolu-
tion of two Gaussians, for which we see that the mean of the convolution is the sum
of the mean of the two Gaussians, and the covariance of the convolution is the sum
of their covariances.
Finally, we seek an expression for the conditional p(x|y). Recall that the results
for the conditional distribution are most easily expressed in terms of the partitioned
precision matrix, using (2.73) and (2.75). Applying these results to (2.105) and
Section 2.3
(2.108) we see that the conditional distribution p(x|y) has mean and covariance
given by
E[x|y]
=
(Λ + ATLA)−1 
ATL(y −b) + Λµ

(2.111)
cov[x|y]
=
(Λ + ATLA)−1.
(2.112)
The evaluation of this conditional can be seen as an example of Bayes’ theorem.
We can interpret the distribution p(x) as a prior distribution over x. If the variable
y is observed, then the conditional distribution p(x|y) represents the corresponding
posterior distribution over x. Having found the marginal and conditional distribu-
tions, we effectively expressed the joint distribution p(z) = p(x)p(y|x) in the form
p(x|y)p(y). These results are summarized below.

2.3. The Gaussian Distribution
Marginal and Conditional Gaussians
Given a marginal Gaussian distribution for x and a conditional Gaussian distri-
bution for y given x in the form
p(x)
=
N(x|µ, Λ−1)
(2.113)
p(y|x)
=
N(y|Ax + b, L−1)
(2.114)
the marginal distribution of y and the conditional distribution of x given y are
given by
p(y)
=
N(y|Aµ + b, L−1 + AΛ−1AT)
(2.115)
p(x|y)
=
N(x|Σ{ATL(y −b) + Λµ}, Σ)
(2.116)
where
Σ = (Λ + ATLA)−1.
(2.117)
2.3.4
Maximum likelihood for the Gaussian
Given a data set X = (x1, . . . , xN)T in which the observations {xn} are as-
sumed to be drawn independently from a multivariate Gaussian distribution, we can
estimate the parameters of the distribution by maximum likelihood. The log likeli-
hood function is given by
ln p(X|µ, Σ) = −ND
ln(2π)−N
2 ln |Σ|−1
N

n=1
(xn−µ)TΣ−1(xn−µ). (2.118)
By simple rearrangement, we see that the likelihood function depends on the data set
only through the two quantities
N

n=1
xn,
N

n=1
xnxT
n.
(2.119)
These are known as the sufﬁcient statistics for the Gaussian distribution. Using
(C.19), the derivative of the log likelihood with respect to µ is given by
Appendix C
∂
∂µ ln p(X|µ, Σ) =
N

n=1
Σ−1(xn −µ)
(2.120)
and setting this derivative to zero, we obtain the solution for the maximum likelihood
estimate of the mean given by
µML = 1
N
N

n=1
xn
(2.121)

2. PROBABILITY DISTRIBUTIONS
which is the mean of the observed set of data points. The maximization of (2.118)
with respect to Σ is rather more involved. The simplest approach is to ignore the
symmetry constraint and show that the resulting solution is symmetric as required.
Exercise 2.34
Alternative derivations of this result, which impose the symmetry and positive deﬁ-
niteness constraints explicitly, can be found in Magnus and Neudecker (1999). The
result is as expected and takes the form
ΣML = 1
N
N

n=1
(xn −µML)(xn −µML)T
(2.122)
which involves µML because this is the result of a joint maximization with respect
to µ and Σ. Note that the solution (2.121) for µML does not depend on ΣML, and so
we can ﬁrst evaluate µML and then use this to evaluate ΣML.
If we evaluate the expectations of the maximum likelihood solutions under the
true distribution, we obtain the following results
Exercise 2.35
E[µML]
=
µ
(2.123)
E[ΣML]
=
N −1
N
Σ.
(2.124)
We see that the expectation of the maximum likelihood estimate for the mean is equal
to the true mean. However, the maximum likelihood estimate for the covariance has
an expectation that is less than the true value, and hence it is biased. We can correct
this bias by deﬁning a different estimator Σ given by
Σ =
N −1
N

n=1
(xn −µML)(xn −µML)T.
(2.125)
Clearly from (2.122) and (2.124), the expectation of Σ is equal to Σ.
2.3.5
Sequential estimation
Our discussion of the maximum likelihood solution for the parameters of a Gaus-
sian distribution provides a convenient opportunity to give a more general discussion
of the topic of sequential estimation for maximum likelihood. Sequential methods
allow data points to be processed one at a time and then discarded and are important
for on-line applications, and also where large data sets are involved so that batch
processing of all data points at once is infeasible.
Consider the result (2.121) for the maximum likelihood estimator of the mean
µML, which we will denote by µ(N)
ML when it is based on N observations. If we

2.3. The Gaussian Distribution
A schematic illustration of two correlated ran-
dom variables z and θ, together with the
regression function f(θ) given by the con-
ditional expectation E[z|θ].
The Robbins-
Monro algorithm provides a general sequen-
tial procedure for ﬁnding the root θ⋆of such
functions.
θ
z
θ⋆
f(θ)
dissect out the contribution from the ﬁnal data point xN, we obtain
µ(N)
ML
=
N
N

n=1
xn
=
N xN + 1
N
N−1

n=1
xn
=
N xN + N −1
N
µ(N−1)
ML
=
µ(N−1)
ML
+ 1
N (xN −µ(N−1)
ML
).
(2.126)
This result has a nice interpretation, as follows. After observing N −1 data points
we have estimated µ by µ(N−1)
ML
. We now observe data point xN, and we obtain our
revised estimate µ(N)
ML by moving the old estimate a small amount, proportional to
1/N, in the direction of the ‘error signal’ (xN −µ(N−1)
ML
). Note that, as N increases,
so the contribution from successive data points gets smaller.
The result (2.126) will clearly give the same answer as the batch result (2.121)
because the two formulae are equivalent. However, we will not always be able to de-
rive a sequential algorithm by this route, and so we seek a more general formulation
of sequential learning, which leads us to the Robbins-Monro algorithm. Consider a
pair of random variables θ and z governed by a joint distribution p(z, θ). The con-
ditional expectation of z given θ deﬁnes a deterministic function f(θ) that is given
by
f(θ) ≡E[z|θ] =

zp(z|θ) dz
(2.127)
and is illustrated schematically in Figure 2.10. Functions deﬁned in this way are
called regression functions.
Our goal is to ﬁnd the root θ⋆at which f(θ⋆) = 0. If we had a large data set
of observations of z and θ, then we could model the regression function directly and
then obtain an estimate of its root. Suppose, however, that we observe values of
z one at a time and we wish to ﬁnd a corresponding sequential estimation scheme
for θ⋆. The following general procedure for solving such problems was given by

2. PROBABILITY DISTRIBUTIONS
Robbins and Monro (1951). We shall assume that the conditional variance of z is
ﬁnite so that
E 
(z −f)2 | θ	
< ∞
(2.128)
and we shall also, without loss of generality, consider the case where f(θ) > 0 for
θ > θ⋆and f(θ) < 0 for θ < θ⋆, as is the case in Figure 2.10. The Robbins-Monro
procedure then deﬁnes a sequence of successive estimates of the root θ⋆given by
θ(N) = θ(N−1) + aN−1z(θ(N−1))
(2.129)
where z(θ(N)) is an observed value of z when θ takes the value θ(N). The coefﬁcients
{aN} represent a sequence of positive numbers that satisfy the conditions
lim
N→∞aN
=
(2.130)
∞

N=1
aN
=
∞
(2.131)
∞

N=1
a2
N
<
∞.
(2.132)
It can then be shown (Robbins and Monro, 1951; Fukunaga, 1990) that the sequence
of estimates given by (2.129) does indeed converge to the root with probability one.
Note that the ﬁrst condition (2.130) ensures that the successive corrections decrease
in magnitude so that the process can converge to a limiting value. The second con-
dition (2.131) is required to ensure that the algorithm does not converge short of the
root, and the third condition (2.132) is needed to ensure that the accumulated noise
has ﬁnite variance and hence does not spoil convergence.
Now let us consider how a general maximum likelihood problem can be solved
sequentially using the Robbins-Monro algorithm. By deﬁnition, the maximum like-
lihood solution θML is a stationary point of the log likelihood function and hence
satisﬁes
∂
∂θ

N
N

n=1
ln p(xn|θ)

θML
= 0.
(2.133)
Exchanging the derivative and the summation, and taking the limit N →∞we have
lim
N→∞
N
N

n=1
∂
∂θ ln p(xn|θ) = Ex
 ∂
∂θ ln p(x|θ)

(2.134)
and so we see that ﬁnding the maximum likelihood solution corresponds to ﬁnd-
ing the root of a regression function. We can therefore apply the Robbins-Monro
procedure, which now takes the form
θ(N) = θ(N−1) + aN−1
∂
∂θ(N−1) ln p(xN|θ(N−1)).
(2.135)

2.3. The Gaussian Distribution
In the case of a Gaussian distribution, with θ
corresponding to the mean µ, the regression
function illustrated in Figure 2.10 takes the form
of a straight line, as shown in red.
In this
case, the random variable z corresponds to the
derivative of the log likelihood function and is
given by (x −µML)/σ2, and its expectation that
deﬁnes the regression function is a straight line
given by (µ −µML)/σ2. The root of the regres-
sion function corresponds to the maximum like-
lihood estimator µML.
µ
z
p(z|µ)
µML
As a speciﬁc example, we consider once again the sequential estimation of the
mean of a Gaussian distribution, in which case the parameter θ(N) is the estimate
µ(N)
ML of the mean of the Gaussian, and the random variable z is given by
z =
∂
∂µML
ln p(x|µML, σ2) = 1
σ2 (x −µML).
(2.136)
Thus the distribution of z is Gaussian with mean µ −µML, as illustrated in Fig-
ure 2.11. Substituting (2.136) into (2.135), we obtain the univariate form of (2.126),
provided we choose the coefﬁcients aN to have the form aN = σ2/N. Note that
although we have focussed on the case of a single variable, the same technique,
together with the same restrictions (2.130)–(2.132) on the coefﬁcients aN, apply
equally to the multivariate case (Blum, 1965).
2.3.6
Bayesian inference for the Gaussian
The maximum likelihood framework gave point estimates for the parameters µ
and Σ. Now we develop a Bayesian treatment by introducing prior distributions
over these parameters. Let us begin with a simple example in which we consider a
single Gaussian random variable x. We shall suppose that the variance σ2 is known,
and we consider the task of inferring the mean µ given a set of N observations
X = {x1, . . . , xN}. The likelihood function, that is the probability of the observed
data given µ, viewed as a function of µ, is given by
p(X|µ) =
N

n=1
p(xn|µ) =
(2πσ2)N/2 exp

−1
2σ2
N

n=1
(xn −µ)2

.
(2.137)
Again we emphasize that the likelihood function p(X|µ) is not a probability distri-
bution over µ and is not normalized.
We see that the likelihood function takes the form of the exponential of a quad-
ratic form in µ. Thus if we choose a prior p(µ) given by a Gaussian, it will be a

2. PROBABILITY DISTRIBUTIONS
conjugate distribution for this likelihood function because the corresponding poste-
rior will be a product of two exponentials of quadratic functions of µ and hence will
also be Gaussian. We therefore take our prior distribution to be
p(µ) = N

µ|µ0, σ2

(2.138)
and the posterior distribution is given by
p(µ|X) ∝p(X|µ)p(µ).
(2.139)
Simple manipulation involving completing the square in the exponent shows that the
Exercise 2.38
posterior distribution is given by
p(µ|X) = N

µ|µN, σ2
N

(2.140)
where
µN
=
σ2
Nσ2
0 + σ2 µ0 +
Nσ2
Nσ2
0 + σ2 µML
(2.141)
σ2
N
=
σ2
+ N
σ2
(2.142)
in which µML is the maximum likelihood solution for µ given by the sample mean
µML = 1
N
N

n=1
xn.
(2.143)
It is worth spending a moment studying the form of the posterior mean and
variance. First of all, we note that the mean of the posterior distribution given by
(2.141) is a compromise between the prior mean µ0 and the maximum likelihood
solution µML. If the number of observed data points N = 0, then (2.141) reduces
to the prior mean as expected. For N →∞, the posterior mean is given by the
maximum likelihood solution. Similarly, consider the result (2.142) for the variance
of the posterior distribution. We see that this is most naturally expressed in terms
of the inverse variance, which is called the precision. Furthermore, the precisions
are additive, so that the precision of the posterior is given by the precision of the
prior plus one contribution of the data precision from each of the observed data
points. As we increase the number of observed data points, the precision steadily
increases, corresponding to a posterior distribution with steadily decreasing variance.
With no observed data points, we have the prior variance, whereas if the number of
data points N →∞, the variance σ2
N goes to zero and the posterior distribution
becomes inﬁnitely peaked around the maximum likelihood solution. We therefore
see that the maximum likelihood result of a point estimate for µ given by (2.143) is
recovered precisely from the Bayesian formalism in the limit of an inﬁnite number
of observations. Note also that for ﬁnite N, if we take the limit σ2
0 →∞in which the
prior has inﬁnite variance then the posterior mean (2.141) reduces to the maximum
likelihood result, while from (2.142) the posterior variance is given by σ2
N = σ2/N.

2.3. The Gaussian Distribution
Illustration of Bayesian inference for
the mean µ of a Gaussian distri-
bution, in which the variance is as-
sumed to be known.
The curves
show the prior distribution over µ
(the curve labelled N = 0), which
in this case is itself Gaussian, along
with the posterior distribution given
by (2.140) for increasing numbers N
of data points. The data points are
generated from a Gaussian of mean
0.8 and variance 0.1, and the prior is
chosen to have mean 0. In both the
prior and the likelihood function, the
variance is set to the true value.
N = 0
N = 1
N = 2
N = 10
−1
We illustrate our analysis of Bayesian inference for the mean of a Gaussian
distribution in Figure 2.12. The generalization of this result to the case of a D-
dimensional Gaussian random variable x with known covariance and unknown mean
is straightforward.
Exercise 2.40
We have already seen how the maximum likelihood expression for the mean of
a Gaussian can be re-cast as a sequential update formula in which the mean after
Section 2.3.5
observing N data points was expressed in terms of the mean after observing N −1
data points together with the contribution from data point xN. In fact, the Bayesian
paradigm leads very naturally to a sequential view of the inference problem. To see
this in the context of the inference of the mean of a Gaussian, we write the posterior
distribution with the contribution from the ﬁnal data point xN separated out so that
p(µ|D) ∝

p(µ)
N−1

n=1
p(xn|µ)
 
p(xN|µ).
(2.144)
The term in square brackets is (up to a normalization coefﬁcient) just the posterior
distribution after observing N −1 data points. We see that this can be viewed as
a prior distribution, which is combined using Bayes’ theorem with the likelihood
function associated with data point xN to arrive at the posterior distribution after
observing N data points. This sequential view of Bayesian inference is very general
and applies to any problem in which the observed data are assumed to be independent
and identically distributed.
So far, we have assumed that the variance of the Gaussian distribution over the
data is known and our goal is to infer the mean. Now let us suppose that the mean
is known and we wish to infer the variance. Again, our calculations will be greatly
simpliﬁed if we choose a conjugate form for the prior distribution. It turns out to be
most convenient to work with the precision λ ≡1/σ2. The likelihood function for λ
takes the form
p(X|λ) =
N

n=1
N(xn|µ, λ−1) ∝λN/2 exp

−λ
N

n=1
(xn −µ)2

.
(2.145)

2. PROBABILITY DISTRIBUTIONS
λ
a = 0.1
b = 0.1
λ
a = 1
b = 1
λ
a = 4
b = 6
Plot of the gamma distribution Gam(λ|a, b) deﬁned by (2.146) for various values of the parameters
a and b.
The corresponding conjugate prior should therefore be proportional to the product
of a power of λ and the exponential of a linear function of λ. This corresponds to
the gamma distribution which is deﬁned by
Gam(λ|a, b) =
Γ(a)baλa−1 exp(−bλ).
(2.146)
Here Γ(a) is the gamma function that is deﬁned by (1.141) and that ensures that
(2.146) is correctly normalized. The gamma distribution has a ﬁnite integral if a > 0,
Exercise 2.41
and the distribution itself is ﬁnite if a ⩾1. It is plotted, for various values of a and
b, in Figure 2.13. The mean and variance of the gamma distribution are given by
Exercise 2.42
E[λ]
=
a
b
(2.147)
var[λ]
=
a
b2 .
(2.148)
Consider a prior distribution Gam(λ|a0, b0). If we multiply by the likelihood
function (2.145), then we obtain a posterior distribution
p(λ|X) ∝λa0−1λN/2 exp

−b0λ −λ
N

n=1
(xn −µ)2

(2.149)
which we recognize as a gamma distribution of the form Gam(λ|aN, bN) where
aN
=
a0 + N
(2.150)
bN
=
b0 + 1
N

n=1
(xn −µ)2 = b0 + N
2 σ2
ML
(2.151)
where σ2
ML is the maximum likelihood estimator of the variance. Note that in (2.149)
there is no need to keep track of the normalization constants in the prior and the
likelihood function because, if required, the correct coefﬁcient can be found at the
end using the normalized form (2.146) for the gamma distribution.

2.3. The Gaussian Distribution
From (2.150), we see that the effect of observing N data points is to increase
the value of the coefﬁcient a by N/2. Thus we can interpret the parameter a0 in
the prior in terms of 2a0 ‘effective’ prior observations. Similarly, from (2.151) we
see that the N data points contribute Nσ2
ML/2 to the parameter b, where σ2
ML is
the variance, and so we can interpret the parameter b0 in the prior as arising from
the 2a0 ‘effective’ prior observations having variance 2b0/(2a0) = b0/a0. Recall
that we made an analogous interpretation for the Dirichlet prior. These distributions
Section 2.2
are examples of the exponential family, and we shall see that the interpretation of
a conjugate prior in terms of effective ﬁctitious data points is a general one for the
exponential family of distributions.
Instead of working with the precision, we can consider the variance itself. The
conjugate prior in this case is called the inverse gamma distribution, although we
shall not discuss this further because we will ﬁnd it more convenient to work with
the precision.
Now suppose that both the mean and the precision are unknown. To ﬁnd a
conjugate prior, we consider the dependence of the likelihood function on µ and λ
p(X|µ, λ) =
N

n=1
 λ
2π
1/2
exp

−λ
2 (xn −µ)2

∝

λ1/2 exp

−λµ2
N
exp

λµ
N

n=1
xn −λ
N

n=1
x2
n

.
(2.152)
We now wish to identify a prior distribution p(µ, λ) that has the same functional
dependence on µ and λ as the likelihood function and that should therefore take the
form
p(µ, λ) ∝

λ1/2 exp

−λµ2
β
exp {cλµ −dλ}
=
exp

−βλ
2 (µ −c/β)2

λβ/2 exp

−

d −c2
2β

λ

(2.153)
where c, d, and β are constants. Since we can always write p(µ, λ) = p(µ|λ)p(λ),
we can ﬁnd p(µ|λ) and p(λ) by inspection. In particular, we see that p(µ|λ) is a
Gaussian whose precision is a linear function of λ and that p(λ) is a gamma distri-
bution, so that the normalized prior takes the form
p(µ, λ) = N(µ|µ0, (βλ)−1)Gam(λ|a, b)
(2.154)
where we have deﬁned new constants given by µ0 = c/β, a = 1 + β/2, b =
d−c2/2β. The distribution (2.154) is called the normal-gamma or Gaussian-gamma
distribution and is plotted in Figure 2.14. Note that this is not simply the product
of an independent Gaussian prior over µ and a gamma prior over λ, because the
precision of µ is a linear function of λ. Even if we chose a prior in which µ and λ
were independent, the posterior distribution would exhibit a coupling between the
precision of µ and the value of λ.

2. PROBABILITY DISTRIBUTIONS
Contour plot of the normal-gamma
distribution (2.154) for parameter
values µ0 = 0, β = 2, a = 5 and
b = 6.
µ
λ
−2
In the case of the multivariate Gaussian distribution N 
x|µ, Λ−1
for a D-
dimensional variable x, the conjugate prior distribution for the mean µ, assuming
the precision is known, is again a Gaussian. For known mean and unknown precision
matrix Λ, the conjugate prior is the Wishart distribution given by
Exercise 2.45
W(Λ|W, ν) = B|Λ|(ν−D−1)/2 exp

−1
2Tr(W−1Λ)

(2.155)
where ν is called the number of degrees of freedom of the distribution, W is a D×D
scale matrix, and Tr(·) denotes the trace. The normalization constant B is given by
B(W, ν) = |W|−ν/2

2νD/2 πD(D−1)/4
D

i=1
Γ
ν + 1 −i
−1
.
(2.156)
Again, it is also possible to deﬁne a conjugate prior over the covariance matrix itself,
rather than over the precision matrix, which leads to the inverse Wishart distribu-
tion, although we shall not discuss this further. If both the mean and the precision
are unknown, then, following a similar line of reasoning to the univariate case, the
conjugate prior is given by
p(µ, Λ|µ0, β, W, ν) = N(µ|µ0, (βΛ)−1) W(Λ|W, ν)
(2.157)
which is known as the normal-Wishart or Gaussian-Wishart distribution.
2.3.7
Student’s t-distribution
We have seen that the conjugate prior for the precision of a Gaussian is given
by a gamma distribution. If we have a univariate Gaussian N(x|µ, τ −1) together
Section 2.3.6
with a Gamma prior Gam(τ|a, b) and we integrate out the precision, we obtain the
marginal distribution of x in the form
Exercise 2.46

2.3. The Gaussian Distribution
Plot of Student’s t-distribution (2.159)
for µ = 0 and λ = 1 for various values
of ν. The limit ν →∞corresponds
to a Gaussian distribution with mean
µ and precision λ.
ν →∞
ν = 1.0
ν = 0.1
−5
0.1
0.2
0.3
0.4
0.5
p(x|µ, a, b)
=
 ∞
N(x|µ, τ −1)Gam(τ|a, b) dτ
(2.158)
=
 ∞
bae(−bτ)τ a−1
Γ(a)
 τ
2π
1/2
exp

−τ
2(x −µ)2
dτ
=
ba
Γ(a)
2π
1/2 
b + (x −µ)2
−a−1/2
Γ(a + 1/2)
where we have made the change of variable z = τ[b + (x −µ)2/2]. By convention
we deﬁne new parameters given by ν = 2a and λ = a/b, in terms of which the
distribution p(x|µ, a, b) takes the form
St(x|µ, λ, ν) = Γ(ν/2 + 1/2)
Γ(ν/2)
 λ
πν
1/2 
1 + λ(x −µ)2
ν
−ν/2−1/2
(2.159)
which is known as Student’s t-distribution. The parameter λ is sometimes called the
precision of the t-distribution, even though it is not in general equal to the inverse
of the variance. The parameter ν is called the degrees of freedom, and its effect is
illustrated in Figure 2.15. For the particular case of ν = 1, the t-distribution reduces
to the Cauchy distribution, while in the limit ν →∞the t-distribution St(x|µ, λ, ν)
becomes a Gaussian N(x|µ, λ−1) with mean µ and precision λ.
Exercise 2.47
From (2.158), we see that Student’s t-distribution is obtained by adding up an
inﬁnite number of Gaussian distributions having the same mean but different preci-
sions. This can be interpreted as an inﬁnite mixture of Gaussians (Gaussian mixtures
will be discussed in detail in Section 2.3.9. The result is a distribution that in gen-
eral has longer ‘tails’ than a Gaussian, as was seen in Figure 2.15. This gives the t-
distribution an important property called robustness, which means that it is much less
sensitive than the Gaussian to the presence of a few data points which are outliers.
The robustness of the t-distribution is illustrated in Figure 2.16, which compares the
maximum likelihood solutions for a Gaussian and a t-distribution. Note that the max-
imum likelihood solution for the t-distribution can be found using the expectation-
maximization (EM) algorithm. Here we see that the effect of a small number of
Exercise 12.24

2. PROBABILITY DISTRIBUTIONS
(a)
−5
0.1
0.2
0.3
0.4
0.5
(b)
−5
0.1
0.2
0.3
0.4
0.5
Illustration of the robustness of Student’s t-distribution compared to a Gaussian. (a) Histogram
distribution of 30 data points drawn from a Gaussian distribution, together with the maximum likelihood ﬁt ob-
tained from a t-distribution (red curve) and a Gaussian (green curve, largely hidden by the red curve). Because
the t-distribution contains the Gaussian as a special case it gives almost the same solution as the Gaussian.
(b) The same data set but with three additional outlying data points showing how the Gaussian (green curve) is
strongly distorted by the outliers, whereas the t-distribution (red curve) is relatively unaffected.
outliers is much less signiﬁcant for the t-distribution than for the Gaussian. Outliers
can arise in practical applications either because the process that generates the data
corresponds to a distribution having a heavy tail or simply through mislabelled data.
Robustness is also an important property for regression problems. Unsurprisingly,
the least squares approach to regression does not exhibit robustness, because it cor-
responds to maximum likelihood under a (conditional) Gaussian distribution. By
basing a regression model on a heavy-tailed distribution such as a t-distribution, we
obtain a more robust model.
If we go back to (2.158) and substitute the alternative parameters ν = 2a, λ =
a/b, and η = τb/a, we see that the t-distribution can be written in the form
St(x|µ, λ, ν) =
 ∞
N 
x|µ, (ηλ)−1
Gam(η|ν/2, ν/2) dη.
(2.160)
We can then generalize this to a multivariate Gaussian N(x|µ, Λ) to obtain the cor-
responding multivariate Student’s t-distribution in the form
St(x|µ, Λ, ν) =
 ∞
N(x|µ, (ηΛ)−1)Gam(η|ν/2, ν/2) dη.
(2.161)
Using the same technique as for the univariate case, we can evaluate this integral to
give
Exercise 2.48

2.3. The Gaussian Distribution
St(x|µ, Λ, ν) = Γ(D/2 + ν/2)
Γ(ν/2)
|Λ|1/2
(πν)D/2

1 + ∆2
ν
−D/2−ν/2
(2.162)
where D is the dimensionality of x, and ∆2 is the squared Mahalanobis distance
deﬁned by
∆2 = (x −µ)TΛ(x −µ).
(2.163)
This is the multivariate form of Student’s t-distribution and satisﬁes the following
properties
Exercise 2.49
E[x]
=
µ,
if
ν > 1
(2.164)
cov[x]
=
ν
(ν −2)Λ−1,
if
ν > 2
(2.165)
mode[x]
=
µ
(2.166)
with corresponding results for the univariate case.
2.3.8
Periodic variables
Although Gaussian distributions are of great practical signiﬁcance, both in their
own right and as building blocks for more complex probabilistic models, there are
situations in which they are inappropriate as density models for continuous vari-
ables. One important case, which arises in practical applications, is that of periodic
variables.
An example of a periodic variable would be the wind direction at a particular
geographical location. We might, for instance, measure values of wind direction on a
number of days and wish to summarize this using a parametric distribution. Another
example is calendar time, where we may be interested in modelling quantities that
are believed to be periodic over 24 hours or over an annual cycle. Such quantities
can conveniently be represented using an angular (polar) coordinate 0 ⩽θ < 2π.
We might be tempted to treat periodic variables by choosing some direction
as the origin and then applying a conventional distribution such as the Gaussian.
Such an approach, however, would give results that were strongly dependent on the
arbitrary choice of origin. Suppose, for instance, that we have two observations at
θ1 = 1◦and θ2 = 359◦, and we model them using a standard univariate Gaussian
distribution. If we choose the origin at 0◦, then the sample mean of this data set
will be 180◦with standard deviation 179◦, whereas if we choose the origin at 180◦,
then the mean will be 0◦and the standard deviation will be 1◦. We clearly need to
develop a special approach for the treatment of periodic variables.
Let us consider the problem of evaluating the mean of a set of observations
D = {θ1, . . . , θN} of a periodic variable. From now on, we shall assume that θ is
measured in radians. We have already seen that the simple average (θ1+· · ·+θN)/N
will be strongly coordinate dependent. To ﬁnd an invariant measure of the mean, we
note that the observations can be viewed as points on the unit circle and can therefore
be described instead by two-dimensional unit vectors x1, . . . , xN where ∥xn∥= 1
for n = 1, . . . , N, as illustrated in Figure 2.17. We can average the vectors {xn}

2. PROBABILITY DISTRIBUTIONS
Illustration of the representation of val-
ues θn of a periodic variable as two-
dimensional vectors xn living on the unit
circle. Also shown is the average x of
those vectors.
x1
x2
x1
x2
x3
x4
¯x
¯r
¯θ
instead to give
x = 1
N
N

n=1
xn
(2.167)
and then ﬁnd the corresponding angle θ of this average. Clearly, this deﬁnition will
ensure that the location of the mean is independent of the origin of the angular coor-
dinate. Note that x will typically lie inside the unit circle. The Cartesian coordinates
of the observations are given by xn = (cos θn, sin θn), and we can write the Carte-
sian coordinates of the sample mean in the form x = (r cos θ, r sin θ). Substituting
into (2.167) and equating the x1 and x2 components then gives
r cos θ = 1
N
N

n=1
cos θn,
r sin θ = 1
N
N

n=1
sin θn.
(2.168)
Taking the ratio, and using the identity tan θ = sin θ/ cos θ, we can solve for θ to
give
θ = tan−1

 
n sin θn

n cos θn

.
(2.169)
Shortly, we shall see how this result arises naturally as the maximum likelihood
estimator for an appropriately deﬁned distribution over a periodic variable.
We now consider a periodic generalization of the Gaussian called the von Mises
distribution. Here we shall limit our attention to univariate distributions, although
periodic distributions can also be found over hyperspheres of arbitrary dimension.
For an extensive discussion of periodic distributions, see Mardia and Jupp (2000).
By convention, we will consider distributions p(θ) that have period 2π. Any
probability density p(θ) deﬁned over θ must not only be nonnegative and integrate

2.3. The Gaussian Distribution
The von Mises distribution can be derived by considering
a two-dimensional Gaussian of the form (2.173), whose
density contours are shown in blue and conditioning on
the unit circle shown in red.
x1
x2
p(x)
r = 1
to one, but it must also be periodic. Thus p(θ) must satisfy the three conditions
p(θ)
⩾
(2.170)
 2π
p(θ) dθ
=
(2.171)
p(θ + 2π)
=
p(θ).
(2.172)
From (2.172), it follows that p(θ + M2π) = p(θ) for any integer M.
We can easily obtain a Gaussian-like distribution that satisﬁes these three prop-
erties as follows. Consider a Gaussian distribution over two variables x = (x1, x2)
having mean µ = (µ1, µ2) and a covariance matrix Σ = σ2I where I is the 2 × 2
identity matrix, so that
p(x1, x2) =
2πσ2 exp

−(x1 −µ1)2 + (x2 −µ2)2
2σ2

.
(2.173)
The contours of constant p(x) are circles, as illustrated in Figure 2.18. Now suppose
we consider the value of this distribution along a circle of ﬁxed radius. Then by con-
struction this distribution will be periodic, although it will not be normalized. We can
determine the form of this distribution by transforming from Cartesian coordinates
(x1, x2) to polar coordinates (r, θ) so that
x1 = r cos θ,
x2 = r sin θ.
(2.174)
We also map the mean µ into polar coordinates by writing
µ1 = r0 cos θ0,
µ2 = r0 sin θ0.
(2.175)
Next we substitute these transformations into the two-dimensional Gaussian distribu-
tion (2.173), and then condition on the unit circle r = 1, noting that we are interested
only in the dependence on θ. Focussing on the exponent in the Gaussian distribution
we have
−1
2σ2

(r cos θ −r0 cos θ0)2 + (r sin θ −r0 sin θ0)2
=
−1
2σ2

1 + r2
0 −2r0 cos θ cos θ0 −2r0 sin θ sin θ0

=
r0
σ2 cos(θ −θ0) + const
(2.176)

2. PROBABILITY DISTRIBUTIONS
m = 5, θ0 = π/4
m = 1, θ0 = 3π/4
2π
π/4
3π/4
m = 5, θ0 = π/4
m = 1, θ0 = 3π/4
The von Mises distribution plotted for two different parameter values, shown as a Cartesian plot
on the left and as the corresponding polar plot on the right.
where ‘const’ denotes terms independent of θ, and we have made use of the following
trigonometrical identities
Exercise 2.51
cos2 A + sin2 A
=
(2.177)
cos A cos B + sin A sin B
=
cos(A −B).
(2.178)
If we now deﬁne m = r0/σ2, we obtain our ﬁnal expression for the distribution of
p(θ) along the unit circle r = 1 in the form
p(θ|θ0, m) =
2πI0(m) exp {m cos(θ −θ0)}
(2.179)
which is called the von Mises distribution, or the circular normal. Here the param-
eter θ0 corresponds to the mean of the distribution, while m, which is known as
the concentration parameter, is analogous to the inverse variance (precision) for the
Gaussian. The normalization coefﬁcient in (2.179) is expressed in terms of I0(m),
which is the zeroth-order Bessel function of the ﬁrst kind (Abramowitz and Stegun,
1965) and is deﬁned by
I0(m) = 1
2π
 2π
exp {m cos θ} dθ.
(2.180)
For large m, the distribution becomes approximately Gaussian. The von Mises dis-
Exercise 2.52
tribution is plotted in Figure 2.19, and the function I0(m) is plotted in Figure 2.20.
Now consider the maximum likelihood estimators for the parameters θ0 and m
for the von Mises distribution. The log likelihood function is given by
ln p(D|θ0, m) = −N ln(2π) −N ln I0(m) + m
N

n=1
cos(θn −θ0).
(2.181)

2.3. The Gaussian Distribution
I0(m)
m
1000
2000
3000
A(m)
m
0.5
Plot of the Bessel function I0(m) deﬁned by (2.180), together with the function A(m) deﬁned by
(2.186).
Setting the derivative with respect to θ0 equal to zero gives
N

n=1
sin(θn −θ0) = 0.
(2.182)
To solve for θ0, we make use of the trigonometric identity
sin(A −B) = cos B sin A −cos A sin B
(2.183)
from which we obtain
Exercise 2.53
θML
= tan−1

 
n sin θn

n cos θn

(2.184)
which we recognize as the result (2.169) obtained earlier for the mean of the obser-
vations viewed in a two-dimensional Cartesian space.
Similarly, maximizing (2.181) with respect to m, and making use of I′
0(m) =
I1(m) (Abramowitz and Stegun, 1965), we have
A(m) = 1
N
N

n=1
cos(θn −θML
)
(2.185)
where we have substituted for the maximum likelihood solution for θML
(recalling
that we are performing a joint optimization over θ and m), and we have deﬁned
A(m) = I1(m)
I0(m).
(2.186)
The function A(m) is plotted in Figure 2.20. Making use of the trigonometric iden-
tity (2.178), we can write (2.185) in the form
A(mML) =

N
N

n=1
cos θn

cos θML
−

N
N

n=1
sin θn

sin θML
.
(2.187)

2. PROBABILITY DISTRIBUTIONS
Plots of the ‘old faith-
ful’ data in which the blue curves
show contours of constant proba-
bility density.
On the left is a
single Gaussian distribution which
has been ﬁtted to the data us-
ing maximum likelihood. Note that
this distribution fails to capture the
two clumps in the data and indeed
places much of its probability mass
in the central region between the
clumps where the data are relatively
sparse. On the right the distribution
is given by a linear combination of
two Gaussians which has been ﬁtted
to the data by maximum likelihood
using techniques discussed Chap-
ter 9, and which gives a better rep-
resentation of the data.
The right-hand side of (2.187) is easily evaluated, and the function A(m) can be
inverted numerically.
For completeness, we mention brieﬂy some alternative techniques for the con-
struction of periodic distributions. The simplest approach is to use a histogram of
observations in which the angular coordinate is divided into ﬁxed bins. This has the
virtue of simplicity and ﬂexibility but also suffers from signiﬁcant limitations, as we
shall see when we discuss histogram methods in more detail in Section 2.5. Another
approach starts, like the von Mises distribution, from a Gaussian distribution over a
Euclidean space but now marginalizes onto the unit circle rather than conditioning
(Mardia and Jupp, 2000). However, this leads to more complex forms of distribution
and will not be discussed further. Finally, any valid distribution over the real axis
(such as a Gaussian) can be turned into a periodic distribution by mapping succes-
sive intervals of width 2π onto the periodic variable (0, 2π), which corresponds to
‘wrapping’ the real axis around unit circle. Again, the resulting distribution is more
complex to handle than the von Mises distribution.
One limitation of the von Mises distribution is that it is unimodal. By forming
mixtures of von Mises distributions, we obtain a ﬂexible framework for modelling
periodic variables that can handle multimodality. For an example of a machine learn-
ing application that makes use of von Mises distributions, see Lawrence et al. (2002),
and for extensions to modelling conditional densities for regression problems, see
Bishop and Nabney (1996).
2.3.9
Mixtures of Gaussians
While the Gaussian distribution has some important analytical properties, it suf-
fers from signiﬁcant limitations when it comes to modelling real data sets. Consider
the example shown in Figure 2.21. This is known as the ‘Old Faithful’ data set,
and comprises 272 measurements of the eruption of the Old Faithful geyser at Yel-
lowstone National Park in the USA. Each measurement comprises the duration of
Appendix A

2.3. The Gaussian Distribution
Example of a Gaussian mixture distribution
in one dimension showing three Gaussians
(each scaled by a coefﬁcient) in blue and
their sum in red.
x
p(x)
the eruption in minutes (horizontal axis) and the time in minutes to the next erup-
tion (vertical axis). We see that the data set forms two dominant clumps, and that
a simple Gaussian distribution is unable to capture this structure, whereas a linear
superposition of two Gaussians gives a better characterization of the data set.
Such superpositions, formed by taking linear combinations of more basic dis-
tributions such as Gaussians, can be formulated as probabilistic models known as
mixture distributions (McLachlan and Basford, 1988; McLachlan and Peel, 2000).
In Figure 2.22 we see that a linear combination of Gaussians can give rise to very
complex densities. By using a sufﬁcient number of Gaussians, and by adjusting their
means and covariances as well as the coefﬁcients in the linear combination, almost
any continuous density can be approximated to arbitrary accuracy.
We therefore consider a superposition of K Gaussian densities of the form
p(x) =
K

k=1
πkN(x|µk, Σk)
(2.188)
which is called a mixture of Gaussians. Each Gaussian density N(x|µk, Σk) is
called a component of the mixture and has its own mean µk and covariance Σk.
Contour and surface plots for a Gaussian mixture having 3 components are shown in
In this section we shall consider Gaussian components to illustrate the frame-
work of mixture models. More generally, mixture models can comprise linear com-
binations of other distributions. For instance, in Section 9.3.3 we shall consider
mixtures of Bernoulli distributions as an example of a mixture model for discrete
variables.
Section 9.3.3
The parameters πk in (2.188) are called mixing coefﬁcients. If we integrate both
sides of (2.188) with respect to x, and note that both p(x) and the individual Gaussian
components are normalized, we obtain
K

k=1
πk = 1.
(2.189)
Also, the requirement that p(x) ⩾0, together with N(x|µk, Σk) ⩾0, implies
πk ⩾0 for all k. Combining this with the condition (2.189) we obtain
0 ⩽πk ⩽1.
(2.190)

2. PROBABILITY DISTRIBUTIONS
0.5
0.3
0.2
(a)
0.5
0.5
(b)
0.5
0.5
Illustration of a mixture of 3 Gaussians in a two-dimensional space. (a) Contours of constant
density for each of the mixture components, in which the 3 components are denoted red, blue and green, and
the values of the mixing coefﬁcients are shown below each component. (b) Contours of the marginal probability
density p(x) of the mixture distribution. (c) A surface plot of the distribution p(x).
We therefore see that the mixing coefﬁcients satisfy the requirements to be probabil-
ities.
From the sum and product rules, the marginal density is given by
p(x) =
K

k=1
p(k)p(x|k)
(2.191)
which is equivalent to (2.188) in which we can view πk = p(k) as the prior prob-
ability of picking the kth component, and the density N(x|µk, Σk) = p(x|k) as
the probability of x conditioned on k. As we shall see in later chapters, an impor-
tant role is played by the posterior probabilities p(k|x), which are also known as
responsibilities. From Bayes’ theorem these are given by
γk(x)
≡
p(k|x)
=
p(k)p(x|k)

l p(l)p(x|l)
=
πkN(x|µk, Σk)

l πlN(x|µl, Σl).
(2.192)
We shall discuss the probabilistic interpretation of the mixture distribution in greater
detail in Chapter 9.
The form of the Gaussian mixture distribution is governed by the parameters π,
µ and Σ, where we have used the notation π ≡{π1, . . . , πK}, µ ≡{µ1, . . . , µK}
and Σ ≡{Σ1, . . . ΣK}. One way to set the values of these parameters is to use
maximum likelihood. From (2.188) the log of the likelihood function is given by
ln p(X|π, µ, Σ) =
N

n=1
ln
 K

k=1
πkN(xn|µk, Σk)

(2.193)

2.4. The Exponential Family
where X = {x1, . . . , xN}. We immediately see that the situation is now much
more complex than with a single Gaussian, due to the presence of the summation
over k inside the logarithm. As a result, the maximum likelihood solution for the
parameters no longer has a closed-form analytical solution. One approach to maxi-
mizing the likelihood function is to use iterative numerical optimization techniques
(Fletcher, 1987; Nocedal and Wright, 1999; Bishop and Nabney, 2008). Alterna-
tively we can employ a powerful framework called expectation maximization, which
will be discussed at length in Chapter 9.
2.4. The Exponential Family
The probability distributions that we have studied so far in this chapter (with the
exception of the Gaussian mixture) are speciﬁc examples of a broad class of distri-
butions called the exponential family (Duda and Hart, 1973; Bernardo and Smith,
1994). Members of the exponential family have many important properties in com-
mon, and it is illuminating to discuss these properties in some generality.
The exponential family of distributions over x, given parameters η, is deﬁned to
be the set of distributions of the form
p(x|η) = h(x)g(η) exp 
ηTu(x)
(2.194)
where x may be scalar or vector, and may be discrete or continuous. Here η are
called the natural parameters of the distribution, and u(x) is some function of x.
The function g(η) can be interpreted as the coefﬁcient that ensures that the distribu-
tion is normalized and therefore satisﬁes
g(η)

h(x) exp 
ηTu(x)
dx = 1
(2.195)
where the integration is replaced by summation if x is a discrete variable.
We begin by taking some examples of the distributions introduced earlier in
the chapter and showing that they are indeed members of the exponential family.
Consider ﬁrst the Bernoulli distribution
p(x|µ) = Bern(x|µ) = µx(1 −µ)1−x.
(2.196)
Expressing the right-hand side as the exponential of the logarithm, we have
p(x|µ)
=
exp {x ln µ + (1 −x) ln(1 −µ)}
=
(1 −µ) exp

ln

µ
1 −µ

x

.
(2.197)
Comparison with (2.194) allows us to identify
η = ln

µ
1 −µ

(2.198)

2. PROBABILITY DISTRIBUTIONS
which we can solve for µ to give µ = σ(η), where
σ(η) =
1 + exp(−η)
(2.199)
is called the logistic sigmoid function. Thus we can write the Bernoulli distribution
using the standard representation (2.194) in the form
p(x|η) = σ(−η) exp(ηx)
(2.200)
where we have used 1 −σ(η) = σ(−η), which is easily proved from (2.199). Com-
parison with (2.194) shows that
u(x)
=
x
(2.201)
h(x)
=
(2.202)
g(η)
=
σ(−η).
(2.203)
Next consider the multinomial distribution that, for a single observation x, takes
the form
p(x|µ) =
M

k=1
µxk
k = exp
 M

k=1
xk ln µk

(2.204)
where x = (x1, . . . , xN)T. Again, we can write this in the standard representation
(2.194) so that
p(x|η) = exp(ηTx)
(2.205)
where ηk = ln µk, and we have deﬁned η = (η1, . . . , ηM)T. Again, comparing with
(2.194) we have
u(x)
=
x
(2.206)
h(x)
=
(2.207)
g(η)
=
1.
(2.208)
Note that the parameters ηk are not independent because the parameters µk are sub-
ject to the constraint
M

k=1
µk = 1
(2.209)
so that, given any M −1 of the parameters µk, the value of the remaining parameter
is ﬁxed. In some circumstances, it will be convenient to remove this constraint by
expressing the distribution in terms of only M −1 parameters. This can be achieved
by using the relationship (2.209) to eliminate µM by expressing it in terms of the
remaining {µk} where k = 1, . . . , M −1, thereby leaving M −1 parameters. Note
that these remaining parameters are still subject to the constraints
0 ⩽µk ⩽1,
M−1

k=1
µk ⩽1.
(2.210)

2.4. The Exponential Family
Making use of the constraint (2.209), the multinomial distribution in this representa-
tion then becomes
exp
 M

k=1
xk ln µk

=
exp
M−1

k=1
xk ln µk +

1 −
M−1

k=1
xk

ln

1 −
M−1

k=1
µk

=
exp
M−1

k=1
xk ln

µk
1 −M−1
j=1 µj

+ ln

1 −
M−1

k=1
µk

.
(2.211)
We now identify
ln

µk
1 −
j µj

= ηk
(2.212)
which we can solve for µk by ﬁrst summing both sides over k and then rearranging
and back-substituting to give
µk =
exp(ηk)
1 + 
j exp(ηj).
(2.213)
This is called the softmax function, or the normalized exponential. In this represen-
tation, the multinomial distribution therefore takes the form
p(x|η) =

1 +
M−1

k=1
exp(ηk)
−1
exp(ηTx).
(2.214)
This is the standard form of the exponential family, with parameter vector η =
(η1, . . . , ηM−1)T in which
u(x)
=
x
(2.215)
h(x)
=
(2.216)
g(η)
=

1 +
M−1

k=1
exp(ηk)
−1
.
(2.217)
Finally, let us consider the Gaussian distribution. For the univariate Gaussian,
we have
p(x|µ, σ2)
=
(2πσ2)1/2 exp

−1
2σ2 (x −µ)2

(2.218)
=
(2πσ2)1/2 exp

−1
2σ2 x2 + µ
σ2 x −
2σ2 µ2

(2.219)

2. PROBABILITY DISTRIBUTIONS
which, after some simple rearrangement, can be cast in the standard exponential
family form (2.194) with
Exercise 2.57
η
=

µ/σ2
−1/2σ2

(2.220)
u(x)
=

x
x2

(2.221)
h(x)
=
(2π)−1/2
(2.222)
g(η)
=
(−2η2)1/2 exp
 η2
4η2

.
(2.223)
2.4.1
Maximum likelihood and sufﬁcient statistics
Let us now consider the problem of estimating the parameter vector η in the gen-
eral exponential family distribution (2.194) using the technique of maximum likeli-
hood. Taking the gradient of both sides of (2.195) with respect to η, we have
∇g(η)

h(x) exp 
ηTu(x)
dx
+
g(η)

h(x) exp

ηTu(x)

u(x) dx = 0.
(2.224)
Rearranging, and making use again of (2.195) then gives
−
g(η)∇g(η) = g(η)

h(x) exp

ηTu(x)

u(x) dx = E[u(x)]
(2.225)
where we have used (2.194). We therefore obtain the result
−∇ln g(η) = E[u(x)].
(2.226)
Note that the covariance of u(x) can be expressed in terms of the second derivatives
of g(η), and similarly for higher order moments. Thus, provided we can normalize a
Exercise 2.58
distribution from the exponential family, we can always ﬁnd its moments by simple
differentiation.
Now consider a set of independent identically distributed data denoted by X =
{x1, . . . , xn}, for which the likelihood function is given by
p(X|η) =
 N

n=1
h(xn)

g(η)N exp

ηT
N

n=1
u(xn)

.
(2.227)
Setting the gradient of ln p(X|η) with respect to η to zero, we get the following
condition to be satisﬁed by the maximum likelihood estimator ηML
−∇ln g(ηML) = 1
N
N

n=1
u(xn)
(2.228)

2.4. The Exponential Family
which can in principle be solved to obtain ηML. We see that the solution for the
maximum likelihood estimator depends on the data only through 
n u(xn), which
is therefore called the sufﬁcient statistic of the distribution (2.194). We do not need
to store the entire data set itself but only the value of the sufﬁcient statistic. For
the Bernoulli distribution, for example, the function u(x) is given just by x and
so we need only keep the sum of the data points {xn}, whereas for the Gaussian
u(x) = (x, x2)T, and so we should keep both the sum of {xn} and the sum of {x2
n}.
If we consider the limit N →∞, then the right-hand side of (2.228) becomes
E[u(x)], and so by comparing with (2.226) we see that in this limit ηML will equal
the true value η.
In fact, this sufﬁciency property holds also for Bayesian inference, although
we shall defer discussion of this until Chapter 8 when we have equipped ourselves
with the tools of graphical models and can thereby gain a deeper insight into these
important concepts.
2.4.2
Conjugate priors
We have already encountered the concept of a conjugate prior several times, for
example in the context of the Bernoulli distribution (for which the conjugate prior
is the beta distribution) or the Gaussian (where the conjugate prior for the mean is
a Gaussian, and the conjugate prior for the precision is the Wishart distribution). In
general, for a given probability distribution p(x|η), we can seek a prior p(η) that is
conjugate to the likelihood function, so that the posterior distribution has the same
functional form as the prior. For any member of the exponential family (2.194), there
exists a conjugate prior that can be written in the form
p(η|χ, ν) = f(χ, ν)g(η)ν exp

νηTχ

(2.229)
where f(χ, ν) is a normalization coefﬁcient, and g(η) is the same function as ap-
pears in (2.194). To see that this is indeed conjugate, let us multiply the prior (2.229)
by the likelihood function (2.227) to obtain the posterior distribution, up to a nor-
malization coefﬁcient, in the form
p(η|X, χ, ν) ∝g(η)ν+N exp

ηT
 N

n=1
u(xn) + νχ

.
(2.230)
This again takes the same functional form as the prior (2.229), conﬁrming conjugacy.
Furthermore, we see that the parameter ν can be interpreted as a effective number of
pseudo-observations in the prior, each of which has a value for the sufﬁcient statistic
u(x) given by χ.
2.4.3
Noninformative priors
In some applications of probabilistic inference, we may have prior knowledge
that can be conveniently expressed through the prior distribution. For example, if
the prior assigns zero probability to some value of variable, then the posterior dis-
tribution will necessarily also assign zero probability to that value, irrespective of

2. PROBABILITY DISTRIBUTIONS
any subsequent observations of data. In many cases, however, we may have little
idea of what form the distribution should take. We may then seek a form of prior
distribution, called a noninformative prior, which is intended to have as little inﬂu-
ence on the posterior distribution as possible (Jeffries, 1946; Box and Tao, 1973;
Bernardo and Smith, 1994). This is sometimes referred to as ‘letting the data speak
for themselves’.
If we have a distribution p(x|λ) governed by a parameter λ, we might be tempted
to propose a prior distribution p(λ) = const as a suitable prior. If λ is a discrete
variable with K states, this simply amounts to setting the prior probability of each
state to 1/K. In the case of continuous parameters, however, there are two potential
difﬁculties with this approach. The ﬁrst is that, if the domain of λ is unbounded,
this prior distribution cannot be correctly normalized because the integral over λ
diverges. Such priors are called improper. In practice, improper priors can often
be used provided the corresponding posterior distribution is proper, i.e., that it can
be correctly normalized. For instance, if we put a uniform prior distribution over
the mean of a Gaussian, then the posterior distribution for the mean, once we have
observed at least one data point, will be proper.
A second difﬁculty arises from the transformation behaviour of a probability
density under a nonlinear change of variables, given by (1.27). If a function h(λ)
is constant, and we change variables to λ = η2, then h(η) = h(η2) will also be
constant. However, if we choose the density pλ(λ) to be constant, then the density
of η will be given, from (1.27), by
pη(η) = pλ(λ)

dλ
dη
 = pλ(η2)2η ∝η
(2.231)
and so the density over η will not be constant. This issue does not arise when we use
maximum likelihood, because the likelihood function p(x|λ) is a simple function of
λ and so we are free to use any convenient parameterization. If, however, we are to
choose a prior distribution that is constant, we must take care to use an appropriate
representation for the parameters.
Here we consider two simple examples of noninformative priors (Berger, 1985).
First of all, if a density takes the form
p(x|µ) = f(x −µ)
(2.232)
then the parameter µ is known as a location parameter. This family of densities
exhibits translation invariance because if we shift x by a constant to give x = x + c,
then
p(x|µ) = f(x −µ)
(2.233)
where we have deﬁned µ = µ + c. Thus the density takes the same form in the
new variable as in the original one, and so the density is independent of the choice
of origin. We would like to choose a prior distribution that reﬂects this translation
invariance property, and so we choose a prior that assigns equal probability mass to

2.4. The Exponential Family
an interval A ⩽µ ⩽B as to the shifted interval A −c ⩽µ ⩽B −c. This implies
 B
A
p(µ) dµ =
 B−c
A−c
p(µ) dµ =
 B
A
p(µ −c) dµ
(2.234)
and because this must hold for all choices of A and B, we have
p(µ −c) = p(µ)
(2.235)
which implies that p(µ) is constant. An example of a location parameter would be
the mean µ of a Gaussian distribution. As we have seen, the conjugate prior distri-
bution for µ in this case is a Gaussian p(µ|µ0, σ2
0) = N(µ|µ0, σ2
0), and we obtain a
noninformative prior by taking the limit σ2
0 →∞. Indeed, from (2.141) and (2.142)
we see that this gives a posterior distribution over µ in which the contributions from
the prior vanish.
As a second example, consider a density of the form
p(x|σ) = 1
σ f
x
σ

(2.236)
where σ > 0. Note that this will be a normalized density provided f(x) is correctly
normalized. The parameter σ is known as a scale parameter, and the density exhibits
Exercise 2.59
scale invariance because if we scale x by a constant to give x = cx, then
p(x|σ) = 1
σ f
x
σ

(2.237)
where we have deﬁned σ = cσ. This transformation corresponds to a change of
scale, for example from meters to kilometers if x is a length, and we would like
to choose a prior distribution that reﬂects this scale invariance. If we consider an
interval A ⩽σ ⩽B, and a scaled interval A/c ⩽σ ⩽B/c, then the prior should
assign equal probability mass to these two intervals. Thus we have
 B
A
p(σ) dσ =
 B/c
A/c
p(σ) dσ =
 B
A
p
cσ
c dσ
(2.238)
and because this must hold for choices of A and B, we have
p(σ) = p
cσ
c
(2.239)
and hence p(σ) ∝1/σ. Note that again this is an improper prior because the integral
of the distribution over 0 ⩽σ ⩽∞is divergent. It is sometimes also convenient
to think of the prior distribution for a scale parameter in terms of the density of the
log of the parameter. Using the transformation rule (1.27) for densities we see that
p(ln σ) = const. Thus, for this prior there is the same probability mass in the range
1 ⩽σ ⩽10 as in the range 10 ⩽σ ⩽100 and in 100 ⩽σ ⩽1000.

2. PROBABILITY DISTRIBUTIONS
An example of a scale parameter would be the standard deviation σ of a Gaussian
distribution, after we have taken account of the location parameter µ, because
N(x|µ, σ2) ∝σ−1 exp 
−(x/σ)2
(2.240)
where x = x −µ. As discussed earlier, it is often more convenient to work in terms
of the precision λ = 1/σ2 rather than σ itself. Using the transformation rule for
densities, we see that a distribution p(σ) ∝1/σ corresponds to a distribution over λ
of the form p(λ) ∝1/λ. We have seen that the conjugate prior for λ was the gamma
distribution Gam(λ|a0, b0) given by (2.146). The noninformative prior is obtained
Section 2.3
as the special case a0 = b0 = 0. Again, if we examine the results (2.150) and (2.151)
for the posterior distribution of λ, we see that for a0 = b0 = 0, the posterior depends
only on terms arising from the data and not from the prior.
2.5. Nonparametric Methods
Throughout this chapter, we have focussed on the use of probability distributions
having speciﬁc functional forms governed by a small number of parameters whose
values are to be determined from a data set. This is called the parametric approach
to density modelling. An important limitation of this approach is that the chosen
density might be a poor model of the distribution that generates the data, which can
result in poor predictive performance. For instance, if the process that generates the
data is multimodal, then this aspect of the distribution can never be captured by a
Gaussian, which is necessarily unimodal.
In this ﬁnal section, we consider some nonparametric approaches to density es-
timation that make few assumptions about the form of the distribution. Here we shall
focus mainly on simple frequentist methods. The reader should be aware, however,
that nonparametric Bayesian methods are attracting increasing interest (Walker et al.,
1999; Neal, 2000; M¨uller and Quintana, 2004; Teh et al., 2006).
Let us start with a discussion of histogram methods for density estimation, which
we have already encountered in the context of marginal and conditional distributions
in Figure 1.11 and in the context of the central limit theorem in Figure 2.6. Here we
explore the properties of histogram density models in more detail, focussing on the
case of a single continuous variable x. Standard histograms simply partition x into
distinct bins of width ∆i and then count the number ni of observations of x falling
in bin i. In order to turn this count into a normalized probability density, we simply
divide by the total number N of observations and by the width ∆i of the bins to
obtain probability values for each bin given by
pi =
ni
N∆i
(2.241)
for which it is easily seen that 
p(x) dx = 1. This gives a model for the density
p(x) that is constant over the width of each bin, and often the bins are chosen to have
the same width ∆i = ∆.

2.5. Nonparametric Methods
An illustration of the histogram approach
to density estimation, in which a data set
of 50 data points is generated from the
distribution shown by the green curve.
Histogram density estimates, based on
(2.241), with a common bin width ∆are
shown for various values of ∆.
∆= 0.04
0.5
∆= 0.08
0.5
∆= 0.25
0.5
In Figure 2.24, we show an example of histogram density estimation. Here
the data is drawn from the distribution, corresponding to the green curve, which is
formed from a mixture of two Gaussians. Also shown are three examples of his-
togram density estimates corresponding to three different choices for the bin width
∆. We see that when ∆is very small (top ﬁgure), the resulting density model is very
spiky, with a lot of structure that is not present in the underlying distribution that
generated the data set. Conversely, if ∆is too large (bottom ﬁgure) then the result is
a model that is too smooth and that consequently fails to capture the bimodal prop-
erty of the green curve. The best results are obtained for some intermediate value
of ∆(middle ﬁgure). In principle, a histogram density model is also dependent on
the choice of edge location for the bins, though this is typically much less signiﬁcant
than the value of ∆.
Note that the histogram method has the property (unlike the methods to be dis-
cussed shortly) that, once the histogram has been computed, the data set itself can
be discarded, which can be advantageous if the data set is large. Also, the histogram
approach is easily applied if the data points are arriving sequentially.
In practice, the histogram technique can be useful for obtaining a quick visual-
ization of data in one or two dimensions but is unsuited to most density estimation
applications. One obvious problem is that the estimated density has discontinuities
that are due to the bin edges rather than any property of the underlying distribution
that generated the data. Another major limitation of the histogram approach is its
scaling with dimensionality. If we divide each variable in a D-dimensional space
into M bins, then the total number of bins will be M D. This exponential scaling
with D is an example of the curse of dimensionality. In a space of high dimensional-
Section 1.4
ity, the quantity of data needed to provide meaningful estimates of local probability
density would be prohibitive.
The histogram approach to density estimation does, however, teach us two im-
portant lessons. First, to estimate the probability density at a particular location,
we should consider the data points that lie within some local neighbourhood of that
point. Note that the concept of locality requires that we assume some form of dis-
tance measure, and here we have been assuming Euclidean distance. For histograms,

2. PROBABILITY DISTRIBUTIONS
this neighbourhood property was deﬁned by the bins, and there is a natural ‘smooth-
ing’ parameter describing the spatial extent of the local region, in this case the bin
width. Second, the value of the smoothing parameter should be neither too large nor
too small in order to obtain good results. This is reminiscent of the choice of model
complexity in polynomial curve ﬁtting discussed in Chapter 1 where the degree M
of the polynomial, or alternatively the value α of the regularization parameter, was
optimal for some intermediate value, neither too large nor too small. Armed with
these insights, we turn now to a discussion of two widely used nonparametric tech-
niques for density estimation, kernel estimators and nearest neighbours, which have
better scaling with dimensionality than the simple histogram model.
2.5.1
Kernel density estimators
Let us suppose that observations are being drawn from some unknown probabil-
ity density p(x) in some D-dimensional space, which we shall take to be Euclidean,
and we wish to estimate the value of p(x). From our earlier discussion of locality,
let us consider some small region R containing x. The probability mass associated
with this region is given by
P =

R
p(x) dx.
(2.242)
Now suppose that we have collected a data set comprising N observations drawn
from p(x). Because each data point has a probability P of falling within R, the total
number K of points that lie inside R will be distributed according to the binomial
distribution
Section 2.1
Bin(K|N, P) =
N!
K!(N −K)!P K(1 −P)1−K.
(2.243)
Using (2.11), we see that the mean fraction of points falling inside the region is
E[K/N] = P, and similarly using (2.12) we see that the variance around this mean
is var[K/N] = P(1 −P)/N. For large N, this distribution will be sharply peaked
around the mean and so
K ≃NP.
(2.244)
If, however, we also assume that the region R is sufﬁciently small that the probability
density p(x) is roughly constant over the region, then we have
P ≃p(x)V
(2.245)
where V is the volume of R. Combining (2.244) and (2.245), we obtain our density
estimate in the form
p(x) = K
NV .
(2.246)
Note that the validity of (2.246) depends on two contradictory assumptions, namely
that the region R be sufﬁciently small that the density is approximately constant over
the region and yet sufﬁciently large (in relation to the value of that density) that the
number K of points falling inside the region is sufﬁcient for the binomial distribution
to be sharply peaked.

2.5. Nonparametric Methods
We can exploit the result (2.246) in two different ways. Either we can ﬁx K and
determine the value of V from the data, which gives rise to the K-nearest-neighbour
technique discussed shortly, or we can ﬁx V and determine K from the data, giv-
ing rise to the kernel approach. It can be shown that both the K-nearest-neighbour
density estimator and the kernel density estimator converge to the true probability
density in the limit N →∞provided V shrinks suitably with N, and K grows with
N (Duda and Hart, 1973).
We begin by discussing the kernel method in detail, and to start with we take
the region R to be a small hypercube centred on the point x at which we wish to
determine the probability density. In order to count the number K of points falling
within this region, it is convenient to deﬁne the following function
k(u) =

1,
|ui| ⩽1/2,
i = 1, . . . , D,
0,
otherwise
(2.247)
which represents a unit cube centred on the origin. The function k(u) is an example
of a kernel function, and in this context is also called a Parzen window. From (2.247),
the quantity k((x −xn)/h) will be one if the data point xn lies inside a cube of side
h centred on x, and zero otherwise. The total number of data points lying inside this
cube will therefore be
K =
N

n=1
k
x −xn
h

.
(2.248)
Substituting this expression into (2.246) then gives the following result for the esti-
mated density at x
p(x) = 1
N
N

n=1
hD k
x −xn
h

(2.249)
where we have used V = hD for the volume of a hypercube of side h in D di-
mensions. Using the symmetry of the function k(u), we can now re-interpret this
equation, not as a single cube centred on x but as the sum over N cubes centred on
the N data points xn.
As it stands, the kernel density estimator (2.249) will suffer from one of the same
problems that the histogram method suffered from, namely the presence of artiﬁcial
discontinuities, in this case at the boundaries of the cubes. We can obtain a smoother
density model if we choose a smoother kernel function, and a common choice is the
Gaussian, which gives rise to the following kernel density model
p(x) = 1
N
N

n=1
(2πh2)1/2 exp

−∥x −xn∥2
2h2

(2.250)
where h represents the standard deviation of the Gaussian components. Thus our
density model is obtained by placing a Gaussian over each data point and then adding
up the contributions over the whole data set, and then dividing by N so that the den-
sity is correctly normalized. In Figure 2.25, we apply the model (2.250) to the data

2. PROBABILITY DISTRIBUTIONS
Illustration of the kernel density model
(2.250) applied to the same data set used
to demonstrate the histogram approach in
We see that h acts as a
smoothing parameter and that if it is set
too small (top panel), the result is a very
noisy density model, whereas if it is set
too large (bottom panel), then the bimodal
nature of the underlying distribution from
which the data is generated (shown by the
green curve) is washed out. The best den-
sity model is obtained for some intermedi-
ate value of h (middle panel).
h = 0.005
0.5
h = 0.07
0.5
h = 0.2
0.5
set used earlier to demonstrate the histogram technique. We see that, as expected,
the parameter h plays the role of a smoothing parameter, and there is a trade-off
between sensitivity to noise at small h and over-smoothing at large h. Again, the
optimization of h is a problem in model complexity, analogous to the choice of bin
width in histogram density estimation, or the degree of the polynomial used in curve
ﬁtting.
We can choose any other kernel function k(u) in (2.249) subject to the condi-
tions
k(u)
⩾
0,
(2.251)

k(u) du
=
(2.252)
which ensure that the resulting probability distribution is nonnegative everywhere
and integrates to one. The class of density model given by (2.249) is called a kernel
density estimator, or Parzen estimator. It has a great merit that there is no compu-
tation involved in the ‘training’ phase because this simply requires storage of the
training set. However, this is also one of its great weaknesses because the computa-
tional cost of evaluating the density grows linearly with the size of the data set.
2.5.2
Nearest-neighbour methods
One of the difﬁculties with the kernel approach to density estimation is that the
parameter h governing the kernel width is ﬁxed for all kernels. In regions of high
data density, a large value of h may lead to over-smoothing and a washing out of
structure that might otherwise be extracted from the data. However, reducing h may
lead to noisy estimates elsewhere in data space where the density is smaller. Thus
the optimal choice for h may be dependent on location within the data space. This
issue is addressed by nearest-neighbour methods for density estimation.
We therefore return to our general result (2.246) for local density estimation,
and instead of ﬁxing V and determining the value of K from the data, we consider
a ﬁxed value of K and use the data to ﬁnd an appropriate value for V . To do this,
we consider a small sphere centred on the point x at which we wish to estimate the

2.5. Nonparametric Methods
Illustration of K-nearest-neighbour den-
sity estimation using the same data set
as in Figures 2.25 and 2.24.
We see
that the parameter K governs the degree
of smoothing, so that a small value of
K leads to a very noisy density model
(top panel), whereas a large value (bot-
tom panel) smoothes out the bimodal na-
ture of the true distribution (shown by the
green curve) from which the data set was
generated.
K = 1
0.5
K = 5
0.5
K = 30
0.5
density p(x), and we allow the radius of the sphere to grow until it contains precisely
K data points. The estimate of the density p(x) is then given by (2.246) with V set to
the volume of the resulting sphere. This technique is known as K nearest neighbours
and is illustrated in Figure 2.26, for various choices of the parameter K, using the
same data set as used in Figure 2.24 and Figure 2.25. We see that the value of K
now governs the degree of smoothing and that again there is an optimum choice for
K that is neither too large nor too small. Note that the model produced by K nearest
neighbours is not a true density model because the integral over all space diverges.
Exercise 2.61
We close this chapter by showing how the K-nearest-neighbour technique for
density estimation can be extended to the problem of classiﬁcation. To do this, we
apply the K-nearest-neighbour density estimation technique to each class separately
and then make use of Bayes’ theorem. Let us suppose that we have a data set com-
prising Nk points in class Ck with N points in total, so that 
k Nk = N. If we
wish to classify a new point x, we draw a sphere centred on x containing precisely
K points irrespective of their class. Suppose this sphere has volume V and contains
Kk points from class Ck. Then (2.246) provides an estimate of the density associated
with each class
p(x|Ck) = Kk
NkV .
(2.253)
Similarly, the unconditional density is given by
p(x) = K
NV
(2.254)
while the class priors are given by
p(Ck) = Nk
N .
(2.255)
We can now combine (2.253), (2.254), and (2.255) using Bayes’ theorem to obtain
the posterior probability of class membership
p(Ck|x) = p(x|Ck)p(Ck)
p(x)
= Kk
K .
(2.256)

2. PROBABILITY DISTRIBUTIONS
(a) In the K-nearest-
neighbour classiﬁer, a new point,
shown by the black diamond, is clas-
siﬁed according to the majority class
membership of the K closest train-
ing data points, in this case K =
3.
(b) In the nearest-neighbour
(K = 1) approach to classiﬁcation,
the resulting decision boundary is
composed of hyperplanes that form
perpendicular bisectors of pairs of
points from different classes.
x1
x2
(a)
x1
x2
(b)
If we wish to minimize the probability of misclassiﬁcation, this is done by assigning
the test point x to the class having the largest posterior probability, corresponding to
the largest value of Kk/K. Thus to classify a new point, we identify the K nearest
points from the training data set and then assign the new point to the class having the
largest number of representatives amongst this set. Ties can be broken at random.
The particular case of K = 1 is called the nearest-neighbour rule, because a test
point is simply assigned to the same class as the nearest point from the training set.
These concepts are illustrated in Figure 2.27.
In Figure 2.28, we show the results of applying the K-nearest-neighbour algo-
rithm to the oil ﬂow data, introduced in Chapter 1, for various values of K. As
expected, we see that K controls the degree of smoothing, so that small K produces
many small regions of each class, whereas large K leads to fewer larger regions.
x6
x7
K = 1
x6
x7
K = 3
x6
x7
K = 31
Plot of 200 data points from the oil data set showing values of x6 plotted against x7, where the
red, green, and blue points correspond to the ‘laminar’, ‘annular’, and ‘homogeneous’ classes, respectively. Also
shown are the classiﬁcations of the input space given by the K-nearest-neighbour algorithm for various values
of K.

Exercises
An interesting property of the nearest-neighbour (K = 1) classiﬁer is that, in the
limit N →∞, the error rate is never more than twice the minimum achievable error
rate of an optimal classiﬁer, i.e., one that uses the true class distributions (Cover and
Hart, 1967) .
As discussed so far, both the K-nearest-neighbour method, and the kernel den-
sity estimator, require the entire training data set to be stored, leading to expensive
computation if the data set is large. This effect can be offset, at the expense of some
additional one-off computation, by constructing tree-based search structures to allow
(approximate) near neighbours to be found efﬁciently without doing an exhaustive
search of the data set. Nevertheless, these nonparametric methods are still severely
limited. On the other hand, we have seen that simple parametric models are very
restricted in terms of the forms of distribution that they can represent. We therefore
need to ﬁnd density models that are very ﬂexible and yet for which the complexity
of the models can be controlled independently of the size of the training set, and we
shall see in subsequent chapters how to achieve this.
Exercises
2.1
(⋆) www
Verify that the Bernoulli distribution (2.2) satisﬁes the following prop-
erties

x=0
p(x|µ)
=
(2.257)
E[x]
=
µ
(2.258)
var[x]
=
µ(1 −µ).
(2.259)
Show that the entropy H[x] of a Bernoulli distributed random binary variable x is
given by
H[x] = −µ ln µ −(1 −µ) ln(1 −µ).
(2.260)
2.2
(⋆⋆)
The form of the Bernoulli distribution given by (2.2) is not symmetric be-
tween the two values of x. In some situations, it will be more convenient to use an
equivalent formulation for which x ∈{−1, 1}, in which case the distribution can be
written
p(x|µ) =
1 −µ
(1−x)/2 1 + µ
(1+x)/2
(2.261)
where µ ∈[−1, 1]. Show that the distribution (2.261) is normalized, and evaluate its
mean, variance, and entropy.
2.3
(⋆⋆) www
In this exercise, we prove that the binomial distribution (2.9) is nor-
malized. First use the deﬁnition (2.10) of the number of combinations of m identical
objects chosen from a total of N to show that
N
m

+

N
m −1

=
N + 1
m

.
(2.262)

2. PROBABILITY DISTRIBUTIONS
Use this result to prove by induction the following result
(1 + x)N =
N

m=0
N
m

xm
(2.263)
which is known as the binomial theorem, and which is valid for all real values of x.
Finally, show that the binomial distribution is normalized, so that
N

m=0
N
m

µm(1 −µ)N−m = 1
(2.264)
which can be done by ﬁrst pulling out a factor (1 −µ)N out of the summation and
then making use of the binomial theorem.
2.4
(⋆⋆) Show that the mean of the binomial distribution is given by (2.11). To do this,
differentiate both sides of the normalization condition (2.264) with respect to µ and
then rearrange to obtain an expression for the mean of n. Similarly, by differentiating
(2.264) twice with respect to µ and making use of the result (2.11) for the mean of
the binomial distribution prove the result (2.12) for the variance of the binomial.
2.5
(⋆⋆) www
In this exercise, we prove that the beta distribution, given by (2.13), is
correctly normalized, so that (2.14) holds. This is equivalent to showing that
µa−1(1 −µ)b−1 dµ = Γ(a)Γ(b)
Γ(a + b) .
(2.265)
From the deﬁnition (1.141) of the gamma function, we have
Γ(a)Γ(b) =
 ∞
exp(−x)xa−1 dx
 ∞
exp(−y)yb−1 dy.
(2.266)
Use this expression to prove (2.265) as follows. First bring the integral over y inside
the integrand of the integral over x, next make the change of variable t = y + x
where x is ﬁxed, then interchange the order of the x and t integrations, and ﬁnally
make the change of variable x = tµ where t is ﬁxed.
2.6
(⋆) Make use of the result (2.265) to show that the mean, variance, and mode of the
beta distribution (2.13) are given respectively by
E[µ]
=
a
a + b
(2.267)
var[µ]
=
ab
(a + b)2(a + b + 1)
(2.268)
mode[µ]
=
a −1
a + b −2.
(2.269)

Exercises
2.7
(⋆⋆) Consider a binomial random variable x given by (2.9), with prior distribution
for µ given by the beta distribution (2.13), and suppose we have observed m occur-
rences of x = 1 and l occurrences of x = 0. Show that the posterior mean value of x
lies between the prior mean and the maximum likelihood estimate for µ. To do this,
show that the posterior mean can be written as λ times the prior mean plus (1 −λ)
times the maximum likelihood estimate, where 0 ⩽λ ⩽1. This illustrates the con-
cept of the posterior distribution being a compromise between the prior distribution
and the maximum likelihood solution.
2.8
(⋆) Consider two variables x and y with joint distribution p(x, y). Prove the follow-
ing two results
E[x]
=
Ey [Ex[x|y]]
(2.270)
var[x]
=
Ey [varx[x|y]] + vary [Ex[x|y]] .
(2.271)
Here Ex[x|y] denotes the expectation of x under the conditional distribution p(x|y),
with a similar notation for the conditional variance.
2.9
(⋆⋆⋆) www
. In this exercise, we prove the normalization of the Dirichlet dis-
tribution (2.38) using induction. We have already shown in Exercise 2.5 that the
beta distribution, which is a special case of the Dirichlet for M = 2, is normalized.
We now assume that the Dirichlet distribution is normalized for M −1 variables
and prove that it is normalized for M variables. To do this, consider the Dirichlet
distribution over M variables, and take account of the constraint M
k=1 µk = 1 by
eliminating µM, so that the Dirichlet is written
pM(µ1, . . . , µM−1) = CM
M−1

k=1
µαk−1
k

1 −
M−1

j=1
µj
αM−1
(2.272)
and our goal is to ﬁnd an expression for CM. To do this, integrate over µM−1, taking
care over the limits of integration, and then make a change of variable so that this
integral has limits 0 and 1. By assuming the correct result for CM−1 and making use
of (2.265), derive the expression for CM.
2.10
(⋆⋆)
Using the property Γ(x + 1) = xΓ(x) of the gamma function, derive the
following results for the mean, variance, and covariance of the Dirichlet distribution
given by (2.38)
E[µj]
=
αj
α0
(2.273)
var[µj]
=
αj(α0 −αj)
α2
0(α0 + 1)
(2.274)
cov[µjµl]
=
−
αjαl
α2
0(α0 + 1),
j̸ = l
(2.275)
where α0 is deﬁned by (2.39).

2. PROBABILITY DISTRIBUTIONS
2.11
(⋆) www
By expressing the expectation of ln µj under the Dirichlet distribution
(2.38) as a derivative with respect to αj, show that
E[ln µj] = ψ(αj) −ψ(α0)
(2.276)
where α0 is given by (2.39) and
ψ(a) ≡d
da ln Γ(a)
(2.277)
is the digamma function.
2.12
(⋆) The uniform distribution for a continuous variable x is deﬁned by
U(x|a, b) =
b −a,
a ⩽x ⩽b.
(2.278)
Verify that this distribution is normalized, and ﬁnd expressions for its mean and
variance.
2.13
(⋆⋆)
Evaluate the Kullback-Leibler divergence (1.113) between two Gaussians
p(x) = N(x|µ, Σ) and q(x) = N(x|m, L).
2.14
(⋆⋆) www
This exercise demonstrates that the multivariate distribution with max-
imum entropy, for a given covariance, is a Gaussian. The entropy of a distribution
p(x) is given by
H[x] = −

p(x) ln p(x) dx.
(2.279)
We wish to maximize H[x] over all distributions p(x) subject to the constraints that
p(x) be normalized and that it have a speciﬁc mean and covariance, so that

p(x) dx = 1
(2.280)

p(x)x dx = µ
(2.281)

p(x)(x −µ)(x −µ)T dx = Σ.
(2.282)
By performing a variational maximization of (2.279) and using Lagrange multipliers
to enforce the constraints (2.280), (2.281), and (2.282), show that the maximum
likelihood distribution is given by the Gaussian (2.43).
2.15
(⋆⋆) Show that the entropy of the multivariate Gaussian N(x|µ, Σ) is given by
H[x] = 1
2 ln |Σ| + D
2 (1 + ln(2π))
(2.283)
where D is the dimensionality of x.

Exercises
2.16
(⋆⋆⋆) www
Consider two random variables x1 and x2 having Gaussian distri-
butions with means µ1, µ2 and precisions τ1, τ2 respectively. Derive an expression
for the differential entropy of the variable x = x1 + x2. To do this, ﬁrst ﬁnd the
distribution of x by using the relation
p(x) =
 ∞
−∞
p(x|x2)p(x2) dx2
(2.284)
and completing the square in the exponent. Then observe that this represents the
convolution of two Gaussian distributions, which itself will be Gaussian, and ﬁnally
make use of the result (1.110) for the entropy of the univariate Gaussian.
2.17
(⋆) www
Consider the multivariate Gaussian distribution given by (2.43). By
writing the precision matrix (inverse covariance matrix) Σ−1 as the sum of a sym-
metric and an anti-symmetric matrix, show that the anti-symmetric term does not
appear in the exponent of the Gaussian, and hence that the precision matrix may be
taken to be symmetric without loss of generality. Because the inverse of a symmetric
matrix is also symmetric (see Exercise 2.22), it follows that the covariance matrix
may also be chosen to be symmetric without loss of generality.
2.18
(⋆⋆⋆)
Consider a real, symmetric matrix Σ whose eigenvalue equation is given
by (2.45). By taking the complex conjugate of this equation and subtracting the
original equation, and then forming the inner product with eigenvector ui, show that
the eigenvalues λi are real. Similarly, use the symmetry property of Σ to show that
two eigenvectors ui and uj will be orthogonal provided λj̸ = λi. Finally, show that
without loss of generality, the set of eigenvectors can be chosen to be orthonormal,
so that they satisfy (2.46), even if some of the eigenvalues are zero.
2.19
(⋆⋆) Show that a real, symmetric matrix Σ having the eigenvector equation (2.45)
can be expressed as an expansion in the eigenvectors, with coefﬁcients given by the
eigenvalues, of the form (2.48). Similarly, show that the inverse matrix Σ−1 has a
representation of the form (2.49).
2.20
(⋆⋆) www
A positive deﬁnite matrix Σ can be deﬁned as one for which the
quadratic form
aTΣa
(2.285)
is positive for any real value of the vector a. Show that a necessary and sufﬁcient
condition for Σ to be positive deﬁnite is that all of the eigenvalues λi of Σ, deﬁned
by (2.45), are positive.
2.21
(⋆) Show that a real, symmetric matrix of size D ×D has D(D +1)/2 independent
parameters.
2.22
(⋆) www
Show that the inverse of a symmetric matrix is itself symmetric.
2.23
(⋆⋆) By diagonalizing the coordinate system using the eigenvector expansion (2.45),
show that the volume contained within the hyperellipsoid corresponding to a constant

2. PROBABILITY DISTRIBUTIONS
Mahalanobis distance ∆is given by
VD|Σ|1/2∆D
(2.286)
where VD is the volume of the unit sphere in D dimensions, and the Mahalanobis
distance is deﬁned by (2.44).
2.24
(⋆⋆) www
Prove the identity (2.76) by multiplying both sides by the matrix

A
B
C
D

(2.287)
and making use of the deﬁnition (2.77).
2.25
(⋆⋆) In Sections 2.3.1 and 2.3.2, we considered the conditional and marginal distri-
butions for a multivariate Gaussian. More generally, we can consider a partitioning
of the components of x into three groups xa, xb, and xc, with a corresponding par-
titioning of the mean vector µ and of the covariance matrix Σ in the form
µ =
µa
µb
µc

,
Σ =
Σaa
Σab
Σac
Σba
Σbb
Σbc
Σca
Σcb
Σcc

.
(2.288)
By making use of the results of Section 2.3, ﬁnd an expression for the conditional
distribution p(xa|xb) in which xc has been marginalized out.
2.26
(⋆⋆)
A very useful result from linear algebra is the Woodbury matrix inversion
formula given by
(A + BCD)−1 = A−1 −A−1B(C−1 + DA−1B)−1DA−1.
(2.289)
By multiplying both sides by (A + BCD) prove the correctness of this result.
2.27
(⋆)
Let x and z be two independent random vectors, so that p(x, z) = p(x)p(z).
Show that the mean of their sum y = x+z is given by the sum of the means of each
of the variable separately. Similarly, show that the covariance matrix of y is given by
the sum of the covariance matrices of x and z. Conﬁrm that this result agrees with
that of Exercise 1.10.
2.28
(⋆⋆⋆) www
Consider a joint distribution over the variable
z =

x
y

(2.290)
whose mean and covariance are given by (2.108) and (2.105) respectively. By mak-
ing use of the results (2.92) and (2.93) show that the marginal distribution p(x) is
given (2.99). Similarly, by making use of the results (2.81) and (2.82) show that the
conditional distribution p(y|x) is given by (2.100).

Exercises
2.29
(⋆⋆) Using the partitioned matrix inversion formula (2.76), show that the inverse of
the precision matrix (2.104) is given by the covariance matrix (2.105).
2.30
(⋆)
By starting from (2.107) and making use of the result (2.105), verify the result
(2.108).
2.31
(⋆⋆)
Consider two multidimensional random vectors x and z having Gaussian
distributions p(x) = N(x|µx, Σx) and p(z) = N(z|µz, Σz) respectively, together
with their sum y = x+z. Use the results (2.109) and (2.110) to ﬁnd an expression for
the marginal distribution p(y) by considering the linear-Gaussian model comprising
the product of the marginal distribution p(x) and the conditional distribution p(y|x).
2.32
(⋆⋆⋆) www
This exercise and the next provide practice at manipulating the
quadratic forms that arise in linear-Gaussian models, as well as giving an indepen-
dent check of results derived in the main text. Consider a joint distribution p(x, y)
deﬁned by the marginal and conditional distributions given by (2.99) and (2.100).
By examining the quadratic form in the exponent of the joint distribution, and using
the technique of ‘completing the square’ discussed in Section 2.3, ﬁnd expressions
for the mean and covariance of the marginal distribution p(y) in which the variable
x has been integrated out. To do this, make use of the Woodbury matrix inversion
formula (2.289). Verify that these results agree with (2.109) and (2.110) obtained
using the results of Chapter 2.
2.33
(⋆⋆⋆)
Consider the same joint distribution as in Exercise 2.32, but now use the
technique of completing the square to ﬁnd expressions for the mean and covariance
of the conditional distribution p(x|y). Again, verify that these agree with the corre-
sponding expressions (2.111) and (2.112).
2.34
(⋆⋆) www
To ﬁnd the maximum likelihood solution for the covariance matrix
of a multivariate Gaussian, we need to maximize the log likelihood function (2.118)
with respect to Σ, noting that the covariance matrix must be symmetric and positive
deﬁnite. Here we proceed by ignoring these constraints and doing a straightforward
maximization. Using the results (C.21), (C.26), and (C.28) from Appendix C, show
that the covariance matrix Σ that maximizes the log likelihood function (2.118) is
given by the sample covariance (2.122). We note that the ﬁnal result is necessarily
symmetric and positive deﬁnite (provided the sample covariance is nonsingular).
2.35
(⋆⋆) Use the result (2.59) to prove (2.62). Now, using the results (2.59), and (2.62),
show that
E[xnxm] = µµT + InmΣ
(2.291)
where xn denotes a data point sampled from a Gaussian distribution with mean µ
and covariance Σ, and Inm denotes the (n, m) element of the identity matrix. Hence
prove the result (2.124).
2.36
(⋆⋆) www
Using an analogous procedure to that used to obtain (2.126), derive
an expression for the sequential estimation of the variance of a univariate Gaussian

2. PROBABILITY DISTRIBUTIONS
distribution, by starting with the maximum likelihood expression
σ2
ML = 1
N
N

n=1
(xn −µ)2.
(2.292)
Verify that substituting the expression for a Gaussian distribution into the Robbins-
Monro sequential estimation formula (2.135) gives a result of the same form, and
hence obtain an expression for the corresponding coefﬁcients aN.
2.37
(⋆⋆)
Using an analogous procedure to that used to obtain (2.126), derive an ex-
pression for the sequential estimation of the covariance of a multivariate Gaussian
distribution, by starting with the maximum likelihood expression (2.122). Verify that
substituting the expression for a Gaussian distribution into the Robbins-Monro se-
quential estimation formula (2.135) gives a result of the same form, and hence obtain
an expression for the corresponding coefﬁcients aN.
2.38
(⋆) Use the technique of completing the square for the quadratic form in the expo-
nent to derive the results (2.141) and (2.142).
2.39
(⋆⋆)
Starting from the results (2.141) and (2.142) for the posterior distribution
of the mean of a Gaussian random variable, dissect out the contributions from the
ﬁrst N −1 data points and hence obtain expressions for the sequential update of
µN and σ2
N. Now derive the same results starting from the posterior distribution
p(µ|x1, . . . , xN−1) = N(µ|µN−1, σ2
N−1) and multiplying by the likelihood func-
tion p(xN|µ) = N(xN|µ, σ2) and then completing the square and normalizing to
obtain the posterior distribution after N observations.
2.40
(⋆⋆) www
Consider a D-dimensional Gaussian random variable x with distribu-
tion N(x|µ, Σ) in which the covariance Σ is known and for which we wish to infer
the mean µ from a set of observations X = {x1, . . . , xN}. Given a prior distribution
p(µ) = N(µ|µ0, Σ0), ﬁnd the corresponding posterior distribution p(µ|X).
2.41
(⋆)
Use the deﬁnition of the gamma function (1.141) to show that the gamma dis-
tribution (2.146) is normalized.
2.42
(⋆⋆) Evaluate the mean, variance, and mode of the gamma distribution (2.146).
2.43
(⋆) The following distribution
p(x|σ2, q) =
q
2(2σ2)1/qΓ(1/q) exp

−|x|q
2σ2

(2.293)
is a generalization of the univariate Gaussian distribution. Show that this distribution
is normalized so that
 ∞
−∞
p(x|σ2, q) dx = 1
(2.294)
and that it reduces to the Gaussian when q = 2. Consider a regression model in
which the target variable is given by t = y(x, w) + ϵ and ϵ is a random noise

Exercises
variable drawn from the distribution (2.293). Show that the log likelihood function
over w and σ2, for an observed data set of input vectors X = {x1, . . . , xN} and
corresponding target variables t = (t1, . . . , tN)T, is given by
ln p(t|X, w, σ2) = −1
2σ2
N

n=1
|y(xn, w) −tn|q −N
q ln(2σ2) + const
(2.295)
where ‘const’ denotes terms independent of both w and σ2. Note that, as a function
of w, this is the Lq error function considered in Section 1.5.5.
2.44
(⋆⋆)
Consider a univariate Gaussian distribution N(x|µ, τ −1) having conjugate
Gaussian-gamma prior given by (2.154), and a data set x = {x1, . . . , xN} of i.i.d.
observations. Show that the posterior distribution is also a Gaussian-gamma distri-
bution of the same functional form as the prior, and write down expressions for the
parameters of this posterior distribution.
2.45
(⋆)
Verify that the Wishart distribution deﬁned by (2.155) is indeed a conjugate
prior for the precision matrix of a multivariate Gaussian.
2.46
(⋆) www
Verify that evaluating the integral in (2.158) leads to the result (2.159).
2.47
(⋆) www
Show that in the limit ν →∞, the t-distribution (2.159) becomes a
Gaussian. Hint: ignore the normalization coefﬁcient, and simply look at the depen-
dence on x.
2.48
(⋆)
By following analogous steps to those used to derive the univariate Student’s
t-distribution (2.159), verify the result (2.162) for the multivariate form of the Stu-
dent’s t-distribution, by marginalizing over the variable η in (2.161). Using the
deﬁnition (2.161), show by exchanging integration variables that the multivariate
t-distribution is correctly normalized.
2.49
(⋆⋆) By using the deﬁnition (2.161) of the multivariate Student’s t-distribution as a
convolution of a Gaussian with a gamma distribution, verify the properties (2.164),
(2.165), and (2.166) for the multivariate t-distribution deﬁned by (2.162).
2.50
(⋆) Show that in the limit ν →∞, the multivariate Student’s t-distribution (2.162)
reduces to a Gaussian with mean µ and precision Λ.
2.51
(⋆) www
The various trigonometric identities used in the discussion of periodic
variables in this chapter can be proven easily from the relation
exp(iA) = cos A + i sin A
(2.296)
in which i is the square root of minus one. By considering the identity
exp(iA) exp(−iA) = 1
(2.297)
prove the result (2.177). Similarly, using the identity
cos(A −B) = ℜexp{i(A −B)}
(2.298)

2. PROBABILITY DISTRIBUTIONS
where ℜdenotes the real part, prove (2.178). Finally, by using sin(A −B) =
ℑexp{i(A −B)}, where ℑdenotes the imaginary part, prove the result (2.183).
2.52
(⋆⋆)
For large m, the von Mises distribution (2.179) becomes sharply peaked
around the mode θ0. By deﬁning ξ = m1/2(θ −θ0) and making the Taylor ex-
pansion of the cosine function given by
cos α = 1 −α2
2 + O(α4)
(2.299)
show that as m →∞, the von Mises distribution tends to a Gaussian.
2.53
(⋆) Using the trigonometric identity (2.183), show that solution of (2.182) for θ0 is
given by (2.184).
2.54
(⋆) By computing ﬁrst and second derivatives of the von Mises distribution (2.179),
and using I0(m) > 0 for m > 0, show that the maximum of the distribution occurs
when θ = θ0 and that the minimum occurs when θ = θ0 + π (mod 2π).
2.55
(⋆) By making use of the result (2.168), together with (2.184) and the trigonometric
identity (2.178), show that the maximum likelihood solution mML for the concentra-
tion of the von Mises distribution satisﬁes A(mML) = r where r is the radius of the
mean of the observations viewed as unit vectors in the two-dimensional Euclidean
plane, as illustrated in Figure 2.17.
2.56
(⋆⋆) www
Express the beta distribution (2.13), the gamma distribution (2.146),
and the von Mises distribution (2.179) as members of the exponential family (2.194)
and thereby identify their natural parameters.
2.57
(⋆)
Verify that the multivariate Gaussian distribution can be cast in exponential
family form (2.194) and derive expressions for η, u(x), h(x) and g(η) analogous to
(2.220)–(2.223).
2.58
(⋆) The result (2.226) showed that the negative gradient of ln g(η) for the exponen-
tial family is given by the expectation of u(x). By taking the second derivatives of
(2.195), show that
−∇∇ln g(η) = E[u(x)u(x)T] −E[u(x)]E[u(x)T] = cov[u(x)].
(2.300)
2.59
(⋆)
By changing variables using y = x/σ, show that the density (2.236) will be
correctly normalized, provided f(x) is correctly normalized.
2.60
(⋆⋆) www
Consider a histogram-like density model in which the space x is di-
vided into ﬁxed regions for which the density p(x) takes the constant value hi over
the ith region, and that the volume of region i is denoted ∆i. Suppose we have a set
of N observations of x such that ni of these observations fall in region i. Using a
Lagrange multiplier to enforce the normalization constraint on the density, derive an
expression for the maximum likelihood estimator for the {hi}.
2.61
(⋆) Show that the K-nearest-neighbour density model deﬁnes an improper distribu-
tion whose integral over all space is divergent.

Linear
Models for
Regression
The focus so far in this book has been on unsupervised learning, including topics
such as density estimation and data clustering. We turn now to a discussion of super-
vised learning, starting with regression. The goal of regression is to predict the value
of one or more continuous target variables t given the value of a D-dimensional vec-
tor x of input variables. We have already encountered an example of a regression
problem when we considered polynomial curve ﬁtting in Chapter 1. The polynomial
is a speciﬁc example of a broad class of functions called linear regression models,
which share the property of being linear functions of the adjustable parameters, and
which will form the focus of this chapter. The simplest form of linear regression
models are also linear functions of the input variables. However, we can obtain a
much more useful class of functions by taking linear combinations of a ﬁxed set of
nonlinear functions of the input variables, known as basis functions. Such models
are linear functions of the parameters, which gives them simple analytical properties,
and yet can be nonlinear with respect to the input variables.

3. LINEAR MODELS FOR REGRESSION
Given a training data set comprising N observations {xn}, where n = 1, . . . , N,
together with corresponding target values {tn}, the goal is to predict the value of t
for a new value of x. In the simplest approach, this can be done by directly con-
structing an appropriate function y(x) whose values for new inputs x constitute the
predictions for the corresponding values of t. More generally, from a probabilistic
perspective, we aim to model the predictive distribution p(t|x) because this expresses
our uncertainty about the value of t for each value of x. From this conditional dis-
tribution we can make predictions of t, for any new value of x, in such a way as to
minimize the expected value of a suitably chosen loss function. As discussed in Sec-
tion 1.5.5, a common choice of loss function for real-valued variables is the squared
loss, for which the optimal solution is given by the conditional expectation of t.
Although linear models have signiﬁcant limitations as practical techniques for
pattern recognition, particularly for problems involving input spaces of high dimen-
sionality, they have nice analytical properties and form the foundation for more so-
phisticated models to be discussed in later chapters.
3.1. Linear Basis Function Models
The simplest linear model for regression is one that involves a linear combination of
the input variables
y(x, w) = w0 + w1x1 + . . . + wDxD
(3.1)
where x = (x1, . . . , xD)T. This is often simply known as linear regression. The key
property of this model is that it is a linear function of the parameters w0, . . . , wD. It is
also, however, a linear function of the input variables xi, and this imposes signiﬁcant
limitations on the model. We therefore extend the class of models by considering
linear combinations of ﬁxed nonlinear functions of the input variables, of the form
y(x, w) = w0 +
M−1

j=1
wjφj(x)
(3.2)
where φj(x) are known as basis functions. By denoting the maximum value of the
index j by M −1, the total number of parameters in this model will be M.
The parameter w0 allows for any ﬁxed offset in the data and is sometimes called
a bias parameter (not to be confused with ‘bias’ in a statistical sense). It is often
convenient to deﬁne an additional dummy ‘basis function’ φ0(x) = 1 so that
y(x, w) =
M−1

j=0
wjφj(x) = wTφ(x)
(3.3)
where w = (w0, . . . , wM−1)T and φ = (φ0, . . . , φM−1)T. In many practical ap-
plications of pattern recognition, we will apply some form of ﬁxed pre-processing,

3.1. Linear Basis Function Models
or feature extraction, to the original data variables. If the original variables com-
prise the vector x, then the features can be expressed in terms of the basis functions
{φj(x)}.
By using nonlinear basis functions, we allow the function y(x, w) to be a non-
linear function of the input vector x. Functions of the form (3.2) are called linear
models, however, because this function is linear in w. It is this linearity in the pa-
rameters that will greatly simplify the analysis of this class of models. However, it
also leads to some signiﬁcant limitations, as we discuss in Section 3.6.
The example of polynomial regression considered in Chapter 1 is a particular
example of this model in which there is a single input variable x, and the basis func-
tions take the form of powers of x so that φj(x) = xj. One limitation of polynomial
basis functions is that they are global functions of the input variable, so that changes
in one region of input space affect all other regions. This can be resolved by dividing
the input space up into regions and ﬁt a different polynomial in each region, leading
to spline functions (Hastie et al., 2001).
There are many other possible choices for the basis functions, for example
φj(x) = exp

−(x −µj)2
2s2

(3.4)
where the µj govern the locations of the basis functions in input space, and the pa-
rameter s governs their spatial scale. These are usually referred to as ‘Gaussian’
basis functions, although it should be noted that they are not required to have a prob-
abilistic interpretation, and in particular the normalization coefﬁcient is unimportant
because these basis functions will be multiplied by adaptive parameters wj.
Another possibility is the sigmoidal basis function of the form
φj(x) = σ
x −µj
s

(3.5)
where σ(a) is the logistic sigmoid function deﬁned by
σ(a) =
1 + exp(−a).
(3.6)
Equivalently, we can use the ‘tanh’ function because this is related to the logistic
sigmoid by tanh(a) = 2σ(a) −1, and so a general linear combination of logistic
sigmoid functions is equivalent to a general linear combination of ‘tanh’ functions.
These various choices of basis function are illustrated in Figure 3.1.
Yet another possible choice of basis function is the Fourier basis, which leads to
an expansion in sinusoidal functions. Each basis function represents a speciﬁc fre-
quency and has inﬁnite spatial extent. By contrast, basis functions that are localized
to ﬁnite regions of input space necessarily comprise a spectrum of different spatial
frequencies. In many signal processing applications, it is of interest to consider ba-
sis functions that are localized in both space and frequency, leading to a class of
functions known as wavelets. These are also deﬁned to be mutually orthogonal, to
simplify their application. Wavelets are most applicable when the input values live

3. LINEAR MODELS FOR REGRESSION
−1
−1
−0.5
0.5
−1
0.25
0.5
0.75
−1
0.25
0.5
0.75
Examples of basis functions, showing polynomials on the left, Gaussians of the form (3.4) in the
centre, and sigmoidal of the form (3.5) on the right.
on a regular lattice, such as the successive time points in a temporal sequence, or the
pixels in an image. Useful texts on wavelets include Ogden (1997), Mallat (1999),
and Vidakovic (1999).
Most of the discussion in this chapter, however, is independent of the particular
choice of basis function set, and so for most of our discussion we shall not specify
the particular form of the basis functions, except for the purposes of numerical il-
lustration. Indeed, much of our discussion will be equally applicable to the situation
in which the vector φ(x) of basis functions is simply the identity φ(x) = x. Fur-
thermore, in order to keep the notation simple, we shall focus on the case of a single
target variable t. However, in Section 3.1.5, we consider brieﬂy the modiﬁcations
needed to deal with multiple target variables.
3.1.1
Maximum likelihood and least squares
In Chapter 1, we ﬁtted polynomial functions to data sets by minimizing a sum-
of-squares error function. We also showed that this error function could be motivated
as the maximum likelihood solution under an assumed Gaussian noise model. Let
us return to this discussion and consider the least squares approach, and its relation
to maximum likelihood, in more detail.
As before, we assume that the target variable t is given by a deterministic func-
tion y(x, w) with additive Gaussian noise so that
t = y(x, w) + ϵ
(3.7)
where ϵ is a zero mean Gaussian random variable with precision (inverse variance)
β. Thus we can write
p(t|x, w, β) = N(t|y(x, w), β−1).
(3.8)
Recall that, if we assume a squared loss function, then the optimal prediction, for a
new value of x, will be given by the conditional mean of the target variable. In the
Section 1.5.5
case of a Gaussian conditional distribution of the form (3.8), the conditional mean

3.1. Linear Basis Function Models
will be simply
E[t|x] =

tp(t|x) dt = y(x, w).
(3.9)
Note that the Gaussian noise assumption implies that the conditional distribution of
t given x is unimodal, which may be inappropriate for some applications. An ex-
tension to mixtures of conditional Gaussian distributions, which permit multimodal
conditional distributions, will be discussed in Section 14.5.1.
Now consider a data set of inputs X = {x1, . . . , xN} with corresponding target
values t1, . . . , tN. We group the target variables {tn} into a column vector that we
denote by t where the typeface is chosen to distinguish it from a single observation
of a multivariate target, which would be denoted t. Making the assumption that
these data points are drawn independently from the distribution (3.8), we obtain the
following expression for the likelihood function, which is a function of the adjustable
parameters w and β, in the form
p(t|X, w, β) =
N

n=1
N(tn|wTφ(xn), β−1)
(3.10)
where we have used (3.3). Note that in supervised learning problems such as regres-
sion (and classiﬁcation), we are not seeking to model the distribution of the input
variables. Thus x will always appear in the set of conditioning variables, and so
from now on we will drop the explicit x from expressions such as p(t|x, w, β) in or-
der to keep the notation uncluttered. Taking the logarithm of the likelihood function,
and making use of the standard form (1.46) for the univariate Gaussian, we have
ln p(t|w, β)
=
N

n=1
ln N(tn|wTφ(xn), β−1)
=
N
2 ln β −N
2 ln(2π) −βED(w)
(3.11)
where the sum-of-squares error function is deﬁned by
ED(w) = 1
N

n=1
{tn −wTφ(xn)}2.
(3.12)
Having written down the likelihood function, we can use maximum likelihood to
determine w and β. Consider ﬁrst the maximization with respect to w. As observed
already in Section 1.2.5, we see that maximization of the likelihood function under a
conditional Gaussian noise distribution for a linear model is equivalent to minimizing
a sum-of-squares error function given by ED(w). The gradient of the log likelihood
function (3.11) takes the form
∇ln p(t|w, β) =
N

n=1

tn −wTφ(xn)

φ(xn)T.
(3.13)

3. LINEAR MODELS FOR REGRESSION
Setting this gradient to zero gives
0 =
N

n=1
tnφ(xn)T −wT
 N

n=1
φ(xn)φ(xn)T

.
(3.14)
Solving for w we obtain
wML = 
ΦTΦ−1 ΦTt
(3.15)
which are known as the normal equations for the least squares problem. Here Φ is an
N×M matrix, called the design matrix, whose elements are given by Φnj = φj(xn),
so that
Φ =
⎛
⎜
⎜
⎝
φ0(x1)
φ1(x1)
· · ·
φM−1(x1)
φ0(x2)
φ1(x2)
· · ·
φM−1(x2)
...
...
...
...
φ0(xN)
φ1(xN)
· · ·
φM−1(xN)
⎞
⎟
⎟
⎠.
(3.16)
The quantity
Φ† ≡
ΦTΦ−1 ΦT
(3.17)
is known as the Moore-Penrose pseudo-inverse of the matrix Φ (Rao and Mitra,
1971; Golub and Van Loan, 1996). It can be regarded as a generalization of the
notion of matrix inverse to nonsquare matrices. Indeed, if Φ is square and invertible,
then using the property (AB)−1 = B−1A−1 we see that Φ† ≡Φ−1.
At this point, we can gain some insight into the role of the bias parameter w0. If
we make the bias parameter explicit, then the error function (3.12) becomes
ED(w) = 1
N

n=1
{tn −w0 −
M−1

j=1
wjφj(xn)}2.
(3.18)
Setting the derivative with respect to w0 equal to zero, and solving for w0, we obtain
w0 = t −
M−1

j=1
wjφj
(3.19)
where we have deﬁned
t = 1
N
N

n=1
tn,
φj = 1
N
N

n=1
φj(xn).
(3.20)
Thus the bias w0 compensates for the difference between the averages (over the
training set) of the target values and the weighted sum of the averages of the basis
function values.
We can also maximize the log likelihood function (3.11) with respect to the noise
precision parameter β, giving
βML
= 1
N
N

n=1
{tn −wT
MLφ(xn)}2
(3.21)

3.1. Linear Basis Function Models
Geometrical interpretation of the least-squares
solution, in an N-dimensional space whose axes
are the values of t1, . . . , tN. The least-squares
regression function is obtained by ﬁnding the or-
thogonal projection of the data vector t onto the
subspace spanned by the basis functions φj(x)
in which each basis function is viewed as a vec-
tor ϕj of length N with elements φj(xn).
S
t
y
ϕ1
ϕ2
and so we see that the inverse of the noise precision is given by the residual variance
of the target values around the regression function.
3.1.2
Geometry of least squares
At this point, it is instructive to consider the geometrical interpretation of the
least-squares solution. To do this we consider an N-dimensional space whose axes
are given by the tn, so that t = (t1, . . . , tN)T is a vector in this space. Each basis
function φj(xn), evaluated at the N data points, can also be represented as a vector in
the same space, denoted by ϕj, as illustrated in Figure 3.2. Note that ϕj corresponds
to the jth column of Φ, whereas φ(xn) corresponds to the nth row of Φ. If the
number M of basis functions is smaller than the number N of data points, then the
M vectors φj(xn) will span a linear subspace S of dimensionality M. We deﬁne
y to be an N-dimensional vector whose nth element is given by y(xn, w), where
n = 1, . . . , N. Because y is an arbitrary linear combination of the vectors ϕj, it can
live anywhere in the M-dimensional subspace. The sum-of-squares error (3.12) is
then equal (up to a factor of 1/2) to the squared Euclidean distance between y and
t. Thus the least-squares solution for w corresponds to that choice of y that lies in
subspace S and that is closest to t. Intuitively, from Figure 3.2, we anticipate that
this solution corresponds to the orthogonal projection of t onto the subspace S. This
is indeed the case, as can easily be veriﬁed by noting that the solution for y is given
by ΦwML, and then conﬁrming that this takes the form of an orthogonal projection.
Exercise 3.2
In practice, a direct solution of the normal equations can lead to numerical difﬁ-
culties when ΦTΦ is close to singular. In particular, when two or more of the basis
vectors ϕj are co-linear, or nearly so, the resulting parameter values can have large
magnitudes. Such near degeneracies will not be uncommon when dealing with real
data sets. The resulting numerical difﬁculties can be addressed using the technique
of singular value decomposition, or SVD (Press et al., 1992; Bishop and Nabney,
2008). Note that the addition of a regularization term ensures that the matrix is non-
singular, even in the presence of degeneracies.
3.1.3
Sequential learning
Batch techniques, such as the maximum likelihood solution (3.15), which in-
volve processing the entire training set in one go, can be computationally costly for
large data sets. As we have discussed in Chapter 1, if the data set is sufﬁciently large,
it may be worthwhile to use sequential algorithms, also known as on-line algorithms,

3. LINEAR MODELS FOR REGRESSION
in which the data points are considered one at a time, and the model parameters up-
dated after each such presentation. Sequential learning is also appropriate for real-
time applications in which the data observations are arriving in a continuous stream,
and predictions must be made before all of the data points are seen.
We can obtain a sequential learning algorithm by applying the technique of
stochastic gradient descent, also known as sequential gradient descent, as follows. If
the error function comprises a sum over data points E = 
n En, then after presen-
tation of pattern n, the stochastic gradient descent algorithm updates the parameter
vector w using
w(τ+1) = w(τ) −η∇En
(3.22)
where τ denotes the iteration number, and η is a learning rate parameter. We shall
discuss the choice of value for η shortly. The value of w is initialized to some starting
vector w(0). For the case of the sum-of-squares error function (3.12), this gives
w(τ+1) = w(τ) + η(tn −w(τ)Tφn)φn
(3.23)
where φn = φ(xn). This is known as least-mean-squares or the LMS algorithm.
The value of η needs to be chosen with care to ensure that the algorithm converges
(Bishop and Nabney, 2008).
3.1.4
Regularized least squares
In Section 1.1, we introduced the idea of adding a regularization term to an
error function in order to control over-ﬁtting, so that the total error function to be
minimized takes the form
ED(w) + λEW (w)
(3.24)
where λ is the regularization coefﬁcient that controls the relative importance of the
data-dependent error ED(w) and the regularization term EW (w). One of the sim-
plest forms of regularizer is given by the sum-of-squares of the weight vector ele-
ments
EW (w) = 1
2wTw.
(3.25)
If we also consider the sum-of-squares error function given by
E(w) = 1
N

n=1
{tn −wTφ(xn)}2
(3.26)
then the total error function becomes
N

n=1
{tn −wTφ(xn)}2 + λ
2 wTw.
(3.27)
This particular choice of regularizer is known in the machine learning literature as
weight decay because in sequential learning algorithms, it encourages weight values
to decay towards zero, unless supported by the data. In statistics, it provides an ex-
ample of a parameter shrinkage method because it shrinks parameter values towards

3.1. Linear Basis Function Models
q = 0.5
q = 1
q = 2
q = 4
Contours of the regularization term in (3.29) for various values of the parameter q.
zero. It has the advantage that the error function remains a quadratic function of
w, and so its exact minimizer can be found in closed form. Speciﬁcally, setting the
gradient of (3.27) with respect to w to zero, and solving for w as before, we obtain
w =

λI + ΦTΦ
−1 ΦTt.
(3.28)
This represents a simple extension of the least-squares solution (3.15).
A more general regularizer is sometimes used, for which the regularized error
takes the form
N

n=1
{tn −wTφ(xn)}2 + λ
M

j=1
|wj|q
(3.29)
where q = 2 corresponds to the quadratic regularizer (3.27). Figure 3.3 shows con-
tours of the regularization function for different values of q.
The case of q = 1 is know as the lasso in the statistics literature (Tibshirani,
1996). It has the property that if λ is sufﬁciently large, some of the coefﬁcients
wj are driven to zero, leading to a sparse model in which the corresponding basis
functions play no role. To see this, we ﬁrst note that minimizing (3.29) is equivalent
to minimizing the unregularized sum-of-squares error (3.12) subject to the constraint
Exercise 3.5
M

j=1
|wj|q ⩽η
(3.30)
for an appropriate value of the parameter η, where the two approaches can be related
using Lagrange multipliers. The origin of the sparsity can be seen from Figure 3.4,
Appendix E
which shows that the minimum of the error function, subject to the constraint (3.30).
As λ is increased, so an increasing number of parameters are driven to zero.
Regularization allows complex models to be trained on data sets of limited size
without severe over-ﬁtting, essentially by limiting the effective model complexity.
However, the problem of determining the optimal model complexity is then shifted
from one of ﬁnding the appropriate number of basis functions to one of determining
a suitable value of the regularization coefﬁcient λ. We shall return to the issue of
model complexity later in this chapter.

3. LINEAR MODELS FOR REGRESSION
Plot
of
the
contours
of the unregularized error function
(blue) along with the constraint re-
gion (3.30) for the quadratic regular-
izer q = 2 on the left and the lasso
regularizer q = 1 on the right, in
which the optimum value for the pa-
rameter vector w is denoted by w⋆.
The lasso gives a sparse solution in
which w⋆
1 = 0.
w1
w2
w⋆
w1
w2
w⋆
For the remainder of this chapter we shall focus on the quadratic regularizer
(3.27) both for its practical importance and its analytical tractability.
3.1.5
Multiple outputs
So far, we have considered the case of a single target variable t. In some applica-
tions, we may wish to predict K > 1 target variables, which we denote collectively
by the target vector t. This could be done by introducing a different set of basis func-
tions for each component of t, leading to multiple, independent regression problems.
However, a more interesting, and more common, approach is to use the same set of
basis functions to model all of the components of the target vector so that
y(x, w) = WTφ(x)
(3.31)
where y is a K-dimensional column vector, W is an M × K matrix of parameters,
and φ(x) is an M-dimensional column vector with elements φj(x), with φ0(x) = 1
as before. Suppose we take the conditional distribution of the target vector to be an
isotropic Gaussian of the form
p(t|x, W, β) = N(t|WTφ(x), β−1I).
(3.32)
If we have a set of observations t1, . . . , tN, we can combine these into a matrix T
of size N × K such that the nth row is given by tT
n. Similarly, we can combine the
input vectors x1, . . . , xN into a matrix X. The log likelihood function is then given
by
ln p(T|X, W, β)
=
N

n=1
ln N(tn|WTφ(xn), β−1I)
=
NK
ln
 β
2π

−β
N

n=1
''tn −WTφ(xn)
''2 . (3.33)

3.2. The Bias-Variance Decomposition
As before, we can maximize this function with respect to W, giving
WML = 
ΦTΦ−1 ΦTT.
(3.34)
If we examine this result for each target variable tk, we have
wk = 
ΦTΦ−1 ΦTtk = Φ†tk
(3.35)
where tk is an N-dimensional column vector with components tnk for n = 1, . . . N.
Thus the solution to the regression problem decouples between the different target
variables, and we need only compute a single pseudo-inverse matrix Φ†, which is
shared by all of the vectors wk.
The extension to general Gaussian noise distributions having arbitrary covari-
ance matrices is straightforward. Again, this leads to a decoupling into K inde-
Exercise 3.6
pendent regression problems. This result is unsurprising because the parameters W
deﬁne only the mean of the Gaussian noise distribution, and we know from Sec-
tion 2.3.4 that the maximum likelihood solution for the mean of a multivariate Gaus-
sian is independent of the covariance. From now on, we shall therefore consider a
single target variable t for simplicity.
3.2. The Bias-Variance Decomposition
So far in our discussion of linear models for regression, we have assumed that the
form and number of basis functions are both ﬁxed. As we have seen in Chapter 1,
the use of maximum likelihood, or equivalently least squares, can lead to severe
over-ﬁtting if complex models are trained using data sets of limited size. However,
limiting the number of basis functions in order to avoid over-ﬁtting has the side
effect of limiting the ﬂexibility of the model to capture interesting and important
trends in the data. Although the introduction of regularization terms can control
over-ﬁtting for models with many parameters, this raises the question of how to
determine a suitable value for the regularization coefﬁcient λ. Seeking the solution
that minimizes the regularized error function with respect to both the weight vector
w and the regularization coefﬁcient λ is clearly not the right approach since this
leads to the unregularized solution with λ = 0.
As we have seen in earlier chapters, the phenomenon of over-ﬁtting is really an
unfortunate property of maximum likelihood and does not arise when we marginalize
over parameters in a Bayesian setting. In this chapter, we shall consider the Bayesian
view of model complexity in some depth. Before doing so, however, it is instructive
to consider a frequentist viewpoint of the model complexity issue, known as the bias-
variance trade-off. Although we shall introduce this concept in the context of linear
basis function models, where it is easy to illustrate the ideas using simple e
