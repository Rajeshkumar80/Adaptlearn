<!-- PROVENANCE: subject_code=BCS602 | subject_name=Machine Learning | semester=6 | module=5 | source_type=MODULE_NOTES | source_file=module5.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS602 — Module 5

## Neural Networks and Deep Learning Basics

**Subject:** BCS602 (Machine Learning)
**Module:** Module 5
**Content type:** textbook_fallback
**Sources:** T1_Pattern_Recognition_and_Machine_Learning_Bishop.txt

---

to ﬁnding the parameters of a generalized linear model,
by ﬁtting class-conditional densities and class priors separately and then applying

4. LINEAR MODELS FOR CLASSIFICATION
x1
x2
−1
−1
φ1
φ2
0.5
0.5
Illustration of the role of nonlinear basis functions in linear classiﬁcation models. The left plot
shows the original input space (x1, x2) together with data points from two classes labelled red and blue. Two
‘Gaussian’ basis functions φ1(x) and φ2(x) are deﬁned in this space with centres shown by the green crosses
and with contours shown by the green circles. The right-hand plot shows the corresponding feature space
(φ1, φ2) together with the linear decision boundary obtained given by a logistic regression model of the form
discussed in Section 4.3.2.
This corresponds to a nonlinear decision boundary in the original input space,
shown by the black curve in the left-hand plot.
Bayes’ theorem, represents an example of generative modelling, because we could
take such a model and generate synthetic data by drawing values of x from the
marginal distribution p(x). In the direct approach, we are maximizing a likelihood
function deﬁned through the conditional distribution p(Ck|x), which represents a
form of discriminative training. One advantage of the discriminative approach is
that there will typically be fewer adaptive parameters to be determined, as we shall
see shortly. It may also lead to improved predictive performance, particularly when
the class-conditional density assumptions give a poor approximation to the true dis-
tributions.
4.3.1
Fixed basis functions
So far in this chapter, we have considered classiﬁcation models that work di-
rectly with the original input vector x. However, all of the algorithms are equally
applicable if we ﬁrst make a ﬁxed nonlinear transformation of the inputs using a
vector of basis functions φ(x). The resulting decision boundaries will be linear in
the feature space φ, and these correspond to nonlinear decision boundaries in the
original x space, as illustrated in Figure 4.12. Classes that are linearly separable
in the feature space φ(x) need not be linearly separable in the original observation
space x. Note that as in our discussion of linear models for regression, one of the

4.3. Probabilistic Discriminative Models
basis functions is typically set to a constant, say φ0(x) = 1, so that the correspond-
ing parameter w0 plays the role of a bias. For the remainder of this chapter, we shall
include a ﬁxed basis function transformation φ(x), as this will highlight some useful
similarities to the regression models discussed in Chapter 3.
For many problems of practical interest, there is signiﬁcant overlap between
the class-conditional densities p(x|Ck). This corresponds to posterior probabilities
p(Ck|x), which, for at least some values of x, are not 0 or 1. In such cases, the opti-
mal solution is obtained by modelling the posterior probabilities accurately and then
applying standard decision theory, as discussed in Chapter 1. Note that nonlinear
transformations φ(x) cannot remove such class overlap. Indeed, they can increase
the level of overlap, or create overlap where none existed in the original observation
space. However, suitable choices of nonlinearity can make the process of modelling
the posterior probabilities easier.
Such ﬁxed basis function models have important limitations, and these will be
Section 3.6
resolved in later chapters by allowing the basis functions themselves to adapt to the
data. Notwithstanding these limitations, models with ﬁxed nonlinear basis functions
play an important role in applications, and a discussion of such models will intro-
duce many of the key concepts needed for an understanding of their more complex
counterparts.
4.3.2
Logistic regression
We begin our treatment of generalized linear models by considering the problem
of two-class classiﬁcation. In our discussion of generative approaches in Section 4.2,
we saw that under rather general assumptions, the posterior probability of class C1
can be written as a logistic sigmoid acting on a linear function of the feature vector
φ so that
p(C1|φ) = y(φ) = σ

wTφ

(4.87)
with p(C2|φ) = 1 −p(C1|φ). Here σ(·) is the logistic sigmoid function deﬁned by
(4.59). In the terminology of statistics, this model is known as logistic regression,
although it should be emphasized that this is a model for classiﬁcation rather than
regression.
For an M-dimensional feature space φ, this model has M adjustable parameters.
By contrast, if we had ﬁtted Gaussian class conditional densities using maximum
likelihood, we would have used 2M parameters for the means and M(M + 1)/2
parameters for the (shared) covariance matrix. Together with the class prior p(C1),
this gives a total of M(M +5)/2+1 parameters, which grows quadratically with M,
in contrast to the linear dependence on M of the number of parameters in logistic
regression. For large values of M, there is a clear advantage in working with the
logistic regression model directly.
We now use maximum likelihood to determine the parameters of the logistic
regression model. To do this, we shall make use of the derivative of the logistic sig-
moid function, which can conveniently be expressed in terms of the sigmoid function
itself
Exercise 4.12
dσ
da = σ(1 −σ).
(4.88)

4. LINEAR MODELS FOR CLASSIFICATION
For a data set {φn, tn}, where tn ∈{0, 1} and φn = φ(xn), with n =
1, . . . , N, the likelihood function can be written
p(t|w) =
N

n=1
ytn
n {1 −yn}1−tn
(4.89)
where t = (t1, . . . , tN)T and yn = p(C1|φn). As usual, we can deﬁne an error
function by taking the negative logarithm of the likelihood, which gives the cross-
entropy error function in the form
E(w) = −ln p(t|w) = −
N

n=1
{tn ln yn + (1 −tn) ln(1 −yn)}
(4.90)
where yn = σ(an) and an = wTφn. Taking the gradient of the error function with
respect to w, we obtain
Exercise 4.13
∇E(w) =
N

n=1
(yn −tn)φn
(4.91)
where we have made use of (4.88). We see that the factor involving the derivative
of the logistic sigmoid has cancelled, leading to a simpliﬁed form for the gradient
of the log likelihood. In particular, the contribution to the gradient from data point
n is given by the ‘error’ yn −tn between the target value and the prediction of the
model, times the basis function vector φn. Furthermore, comparison with (3.13)
shows that this takes precisely the same form as the gradient of the sum-of-squares
error function for the linear regression model.
Section 3.1.1
If desired, we could make use of the result (4.91) to give a sequential algorithm
in which patterns are presented one at a time, in which each of the weight vectors is
updated using (3.22) in which ∇En is the nth term in (4.91).
It is worth noting that maximum likelihood can exhibit severe over-ﬁtting for
data sets that are linearly separable. This arises because the maximum likelihood so-
lution occurs when the hyperplane corresponding to σ = 0.5, equivalent to wTφ =
0, separates the two classes and the magnitude of w goes to inﬁnity. In this case, the
logistic sigmoid function becomes inﬁnitely steep in feature space, corresponding to
a Heaviside step function, so that every training point from each class k is assigned
a posterior probability p(Ck|x) = 1. Furthermore, there is typically a continuum
Exercise 4.14
of such solutions because any separating hyperplane will give rise to the same pos-
terior probabilities at the training data points, as will be seen later in Figure 10.13.
Maximum likelihood provides no way to favour one such solution over another, and
which solution is found in practice will depend on the choice of optimization algo-
rithm and on the parameter initialization. Note that the problem will arise even if
the number of data points is large compared with the number of parameters in the
model, so long as the training data set is linearly separable. The singularity can be
avoided by inclusion of a prior and ﬁnding a MAP solution for w, or equivalently by
adding a regularization term to the error function.

4.3. Probabilistic Discriminative Models
4.3.3
Iterative reweighted least squares
In the case of the linear regression models discussed in Chapter 3, the maxi-
mum likelihood solution, on the assumption of a Gaussian noise model, leads to a
closed-form solution. This was a consequence of the quadratic dependence of the
log likelihood function on the parameter vector w. For logistic regression, there
is no longer a closed-form solution, due to the nonlinearity of the logistic sigmoid
function. However, the departure from a quadratic form is not substantial. To be
precise, the error function is concave, as we shall see shortly, and hence has a unique
minimum. Furthermore, the error function can be minimized by an efﬁcient iterative
technique based on the Newton-Raphson iterative optimization scheme, which uses a
local quadratic approximation to the log likelihood function. The Newton-Raphson
update, for minimizing a function E(w), takes the form (Fletcher, 1987; Bishop and
Nabney, 2008)
w(new) = w(old) −H−1∇E(w).
(4.92)
where H is the Hessian matrix whose elements comprise the second derivatives of
E(w) with respect to the components of w.
Let us ﬁrst of all apply the Newton-Raphson method to the linear regression
model (3.3) with the sum-of-squares error function (3.12). The gradient and Hessian
of this error function are given by
∇E(w)
=
N

n=1
(wTφn −tn)φn = ΦTΦw −ΦTt
(4.93)
H = ∇∇E(w)
=
N

n=1
φnφT
n = ΦTΦ
(4.94)
where Φ is the N × M design matrix, whose nth row is given by φT
n. The Newton-
Section 3.1.1
Raphson update then takes the form
w(new)
=
w(old) −(ΦTΦ)−1 
ΦTΦw(old) −ΦTt
=
(ΦTΦ)−1ΦTt
(4.95)
which we recognize as the standard least-squares solution. Note that the error func-
tion in this case is quadratic and hence the Newton-Raphson formula gives the exact
solution in one step.
Now let us apply the Newton-Raphson update to the cross-entropy error function
(4.90) for the logistic regression model. From (4.91) we see that the gradient and
Hessian of this error function are given by
∇E(w)
=
N

n=1
(yn −tn)φn = ΦT(y −t)
(4.96)
H
=
∇∇E(w) =
N

n=1
yn(1 −yn)φnφT
n = ΦTRΦ
(4.97)

4. LINEAR MODELS FOR CLASSIFICATION
where we have made use of (4.88). Also, we have introduced the N × N diagonal
matrix R with elements
Rnn = yn(1 −yn).
(4.98)
We see that the Hessian is no longer constant but depends on w through the weight-
ing matrix R, corresponding to the fact that the error function is no longer quadratic.
Using the property 0 < yn < 1, which follows from the form of the logistic sigmoid
function, we see that uTHu > 0 for an arbitrary vector u, and so the Hessian matrix
H is positive deﬁnite. It follows that the error function is a concave function of w
and hence has a unique minimum.
Exercise 4.15
The Newton-Raphson update formula for the logistic regression model then be-
comes
w(new)
=
w(old) −(ΦTRΦ)−1ΦT(y −t)
=
(ΦTRΦ)−1 
ΦTRΦw(old) −ΦT(y −t)
=
(ΦTRΦ)−1ΦTRz
(4.99)
where z is an N-dimensional vector with elements
z = Φw(old) −R−1(y −t).
(4.100)
We see that the update formula (4.99) takes the form of a set of normal equations for a
weighted least-squares problem. Because the weighing matrix R is not constant but
depends on the parameter vector w, we must apply the normal equations iteratively,
each time using the new weight vector w to compute a revised weighing matrix
R. For this reason, the algorithm is known as iterative reweighted least squares, or
IRLS (Rubin, 1983). As in the weighted least-squares problem, the elements of the
diagonal weighting matrix R can be interpreted as variances because the mean and
variance of t in the logistic regression model are given by
E[t]
=
σ(x) = y
(4.101)
var[t]
=
E[t2] −E[t]2 = σ(x) −σ(x)2 = y(1 −y)
(4.102)
where we have used the property t2 = t for t ∈{0, 1}. In fact, we can interpret IRLS
as the solution to a linearized problem in the space of the variable a = wTφ. The
quantity zn, which corresponds to the nth element of z, can then be given a simple
interpretation as an effective target value in this space obtained by making a local
linear approximation to the logistic sigmoid function around the current operating
point w(old)
an(w)
≃
an(w(old)) + dan
dyn

w(old)
(tn −yn)
=
φT
nw(old) −(yn −tn)
yn(1 −yn) = zn.
(4.103)

4.3. Probabilistic Discriminative Models
4.3.4
Multiclass logistic regression
In our discussion of generative models for multiclass classiﬁcation, we have
Section 4.2
seen that for a large class of distributions, the posterior probabilities are given by a
softmax transformation of linear functions of the feature variables, so that
p(Ck|φ) = yk(φ) =
exp(ak)

j exp(aj)
(4.104)
where the ‘activations’ ak are given by
ak = wT
k φ.
(4.105)
There we used maximum likelihood to determine separately the class-conditional
densities and the class priors and then found the corresponding posterior probabilities
using Bayes’ theorem, thereby implicitly determining the parameters {wk}. Here we
consider the use of maximum likelihood to determine the parameters {wk} of this
model directly. To do this, we will require the derivatives of yk with respect to all of
the activations aj. These are given by
Exercise 4.17
∂yk
∂aj
= yk(Ikj −yj)
(4.106)
where Ikj are the elements of the identity matrix.
Next we write down the likelihood function. This is most easily done using
the 1-of-K coding scheme in which the target vector tn for a feature vector φn
belonging to class Ck is a binary vector with all elements zero except for element k,
which equals one. The likelihood function is then given by
p(T|w1, . . . , wK) =
N

n=1
K

k=1
p(Ck|φn)tnk =
N

n=1
K

k=1
ytnk
nk
(4.107)
where ynk = yk(φn), and T is an N × K matrix of target variables with elements
tnk. Taking the negative logarithm then gives
E(w1, . . . , wK) = −ln p(T|w1, . . . , wK) = −
N

n=1
K

k=1
tnk ln ynk
(4.108)
which is known as the cross-entropy error function for the multiclass classiﬁcation
problem.
We now take the gradient of the error function with respect to one of the param-
eter vectors wj. Making use of the result (4.106) for the derivatives of the softmax
function, we obtain
Exercise 4.18
∇wjE(w1, . . . , wK) =
N

n=1
(ynj −tnj) φn
(4.109)

4. LINEAR MODELS FOR CLASSIFICATION
where we have made use of 
k tnk = 1. Once again, we see the same form arising
for the gradient as was found for the sum-of-squares error function with the linear
model and the cross-entropy error for the logistic regression model, namely the prod-
uct of the error (ynj −tnj) times the basis function φn. Again, we could use this
to formulate a sequential algorithm in which patterns are presented one at a time, in
which each of the weight vectors is updated using (3.22).
We have seen that the derivative of the log likelihood function for a linear regres-
sion model with respect to the parameter vector w for a data point n took the form
of the ‘error’ yn −tn times the feature vector φn. Similarly, for the combination
of logistic sigmoid activation function and cross-entropy error function (4.90), and
for the softmax activation function with the multiclass cross-entropy error function
(4.108), we again obtain this same simple form. This is an example of a more general
result, as we shall see in Section 4.3.6.
To ﬁnd a batch algorithm, we again appeal to the Newton-Raphson update to
obtain the corresponding IRLS algorithm for the multiclass problem. This requires
evaluation of the Hessian matrix that comprises blocks of size M × M in which
block j, k is given by
∇wk∇wjE(w1, . . . , wK) = −
N

n=1
ynk(Ikj −ynj)φnφT
n.
(4.110)
As with the two-class problem, the Hessian matrix for the multiclass logistic regres-
sion model is positive deﬁnite and so the error function again has a unique minimum.
Exercise 4.20
Practical details of IRLS for the multiclass case can be found in Bishop and Nabney
(2008).
4.3.5
Probit regression
We have seen that, for a broad range of class-conditional distributions, described
by the exponential family, the resulting posterior class probabilities are given by a
logistic (or softmax) transformation acting on a linear function of the feature vari-
ables. However, not all choices of class-conditional density give rise to such a simple
form for the posterior probabilities (for instance, if the class-conditional densities are
modelled using Gaussian mixtures). This suggests that it might be worth exploring
other types of discriminative probabilistic model. For the purposes of this chapter,
however, we shall return to the two-class case, and again remain within the frame-
work of generalized linear models so that
p(t = 1|a) = f(a)
(4.111)
where a = wTφ, and f(·) is the activation function.
One way to motivate an alternative choice for the link function is to consider a
noisy threshold model, as follows. For each input φn, we evaluate an = wTφn and
then we set the target value according to

tn = 1
if an ⩾θ
tn = 0
otherwise.
(4.112)

4.3. Probabilistic Discriminative Models
Schematic example of a probability density p(θ)
shown by the blue curve, given in this example by a mixture
of two Gaussians, along with its cumulative distribution function
f(a), shown by the red curve. Note that the value of the blue
curve at any point, such as that indicated by the vertical green
line, corresponds to the slope of the red curve at the same point.
Conversely, the value of the red curve at this point corresponds
to the area under the blue curve indicated by the shaded green
region. In the stochastic threshold model, the class label takes
the value t = 1 if the value of a = wTφ exceeds a threshold, oth-
erwise it takes the value t = 0. This is equivalent to an activation
function given by the cumulative distribution function f(a).
0.2
0.4
0.6
0.8
If the value of θ is drawn from a probability density p(θ), then the corresponding
activation function will be given by the cumulative distribution function
f(a) =
 a
−∞
p(θ) dθ
(4.113)
as illustrated in Figure 4.13.
As a speciﬁc example, suppose that the density p(θ) is given by a zero mean,
unit variance Gaussian. The corresponding cumulative distribution function is given
by
Φ(a) =
 a
−∞
N(θ|0, 1) dθ
(4.114)
which is known as the probit function. It has a sigmoidal shape and is compared
with the logistic sigmoid function in Figure 4.9. Note that the use of a more gen-
eral Gaussian distribution does not change the model because this is equivalent to
a re-scaling of the linear coefﬁcients w. Many numerical packages provide for the
evaluation of a closely related function deﬁned by
erf(a) =
√π
 a
exp(−θ2/2) dθ
(4.115)
and known as the erf function or error function (not to be confused with the error
function of a machine learning model). It is related to the probit function by
Exercise 4.21
Φ(a) = 1

1 + 1
√
erf(a)

.
(4.116)
The generalized linear model based on a probit activation function is known as probit
regression.
We can determine the parameters of this model using maximum likelihood, by a
straightforward extension of the ideas discussed earlier. In practice, the results found
using probit regression tend to be similar to those of logistic regression. We shall,

4. LINEAR MODELS FOR CLASSIFICATION
however, ﬁnd another use for the probit model when we discuss Bayesian treatments
of logistic regression in Section 4.5.
One issue that can occur in practical applications is that of outliers, which can
arise for instance through errors in measuring the input vector x or through misla-
belling of the target value t. Because such points can lie a long way to the wrong side
of the ideal decision boundary, they can seriously distort the classiﬁer. Note that the
logistic and probit regression models behave differently in this respect because the
tails of the logistic sigmoid decay asymptotically like exp(−x) for x →∞, whereas
for the probit activation function they decay like exp(−x2), and so the probit model
can be signiﬁcantly more sensitive to outliers.
However, both the logistic and the probit models assume the data is correctly
labelled. The effect of mislabelling is easily incorporated into a probabilistic model
by introducing a probability ϵ that the target value t has been ﬂipped to the wrong
value (Opper and Winther, 2000a), leading to a target value distribution for data point
x of the form
p(t|x)
=
(1 −ϵ)σ(x) + ϵ(1 −σ(x))
=
ϵ + (1 −2ϵ)σ(x)
(4.117)
where σ(x) is the activation function with input vector x. Here ϵ may be set in
advance, or it may be treated as a hyperparameter whose value is inferred from the
data.
4.3.6
Canonical link functions
For the linear regression model with a Gaussian noise distribution, the error
function, corresponding to the negative log likelihood, is given by (3.12). If we take
the derivative with respect to the parameter vector w of the contribution to the error
function from a data point n, this takes the form of the ‘error’ yn −tn times the
feature vector φn, where yn = wTφn. Similarly, for the combination of the logistic
sigmoid activation function and the cross-entropy error function (4.90), and for the
softmax activation function with the multiclass cross-entropy error function (4.108),
we again obtain this same simple form. We now show that this is a general result
of assuming a conditional distribution for the target variable from the exponential
family, along with a corresponding choice for the activation function known as the
canonical link function.
We again make use of the restricted form (4.84) of exponential family distribu-
tions. Note that here we are applying the assumption of exponential family distribu-
tion to the target variable t, in contrast to Section 4.2.4 where we applied it to the
input vector x. We therefore consider conditional distributions of the target variable
of the form
p(t|η, s) = 1
sh
 t
s

g(η) exp
ηt
s

.
(4.118)
Using the same line of argument as led to the derivation of the result (2.226), we see
that the conditional mean of t, which we denote by y, is given by
y ≡E[t|η] = −s d
dη ln g(η).
(4.119)

4.4. The Laplace Approximation
Thus y and η must related, and we denote this relation through η = ψ(y).
Following Nelder and Wedderburn (1972), we deﬁne a generalized linear model
to be one for which y is a nonlinear function of a linear combination of the input (or
feature) variables so that
y = f(wTφ)
(4.120)
where f(·) is known as the activation function in the machine learning literature, and
f −1(·) is known as the link function in statistics.
Now consider the log likelihood function for this model, which, as a function of
η, is given by
ln p(t|η, s) =
N

n=1
ln p(tn|η, s) =
N

n=1

ln g(ηn) + ηntn
s

+ const
(4.121)
where we are assuming that all observations share a common scale parameter (which
corresponds to the noise variance for a Gaussian distribution for instance) and so s
is independent of n. The derivative of the log likelihood with respect to the model
parameters w is then given by
∇w ln p(t|η, s)
=
N

n=1

 d
dηn
ln g(ηn) + tn
s

 dηn
dyn
dyn
dan
∇an
=
N

n=1
s {tn −yn} ψ′(yn)f ′(an)φn
(4.122)
where an = wTφn, and we have used yn = f(an) together with the result (4.119)
for E[t|η]. We now see that there is a considerable simpliﬁcation if we choose a
particular form for the link function f −1(y) given by
f −1(y) = ψ(y)
(4.123)
which gives f(ψ(y)) = y and hence f ′(ψ)ψ′(y) = 1. Also, because a = f −1(y),
we have a = ψ and hence f ′(a)ψ′(y) = 1. In this case, the gradient of the error
function reduces to
∇ln E(w) = 1
s
N

n=1
{yn −tn}φn.
(4.124)
For the Gaussian s = β−1, whereas for the logistic model s = 1.
4.4. The Laplace Approximation
In Section 4.5 we shall discuss the Bayesian treatment of logistic regression. As
we shall see, this is more complex than the Bayesian treatment of linear regression
models, discussed in Sections 3.3 and 3.5. In particular, we cannot integrate exactly

4. LINEAR MODELS FOR CLASSIFICATION
over the parameter vector w since the posterior distribution is no longer Gaussian.
It is therefore necessary to introduce some form of approximation. Later in the
book we shall consider a range of techniques based on analytical approximations
Chapter 10
and numerical sampling.
Chapter 11
Here we introduce a simple, but widely used, framework called the Laplace ap-
proximation, that aims to ﬁnd a Gaussian approximation to a probability density
deﬁned over a set of continuous variables. Consider ﬁrst the case of a single contin-
uous variable z, and suppose the distribution p(z) is deﬁned by
p(z) = 1
Z f(z)
(4.125)
where Z = 
f(z) dz is the normalization coefﬁcient. We shall suppose that the
value of Z is unknown. In the Laplace method the goal is to ﬁnd a Gaussian approx-
imation q(z) which is centred on a mode of the distribution p(z). The ﬁrst step is to
ﬁnd a mode of p(z), in other words a point z0 such that p′(z0) = 0, or equivalently
df(z)
dz

z=z0
= 0.
(4.126)
A Gaussian distribution has the property that its logarithm is a quadratic function
of the variables. We therefore consider a Taylor expansion of ln f(z) centred on the
mode z0 so that
ln f(z) ≃ln f(z0) −1
2A(z −z0)2
(4.127)
where
A = −d2
dz2 ln f(z)

z=z0
.
(4.128)
Note that the ﬁrst-order term in the Taylor expansion does not appear since z0 is a
local maximum of the distribution. Taking the exponential we obtain
f(z) ≃f(z0) exp

−A
2 (z −z0)2

.
(4.129)
We can then obtain a normalized distribution q(z) by making use of the standard
result for the normalization of a Gaussian, so that
q(z) =
 A
2π
1/2
exp

−A
2 (z −z0)2

.
(4.130)
The Laplace approximation is illustrated in Figure 4.14. Note that the Gaussian
approximation will only be well deﬁned if its precision A > 0, in other words the
stationary point z0 must be a local maximum, so that the second derivative of f(z)
at the point z0 is negative.

4.4. The Laplace Approximation
−2
−1
0.2
0.4
0.6
0.8
−2
−1
Illustration of the Laplace approximation applied to the distribution p(z) ∝exp(−z2/2)σ(20z + 4)
where σ(z) is the logistic sigmoid function deﬁned by σ(z) = (1 + e−z)−1. The left plot shows the normalized
distribution p(z) in yellow, together with the Laplace approximation centred on the mode z0 of p(z) in red. The
right plot shows the negative logarithms of the corresponding curves.
We can extend the Laplace method to approximate a distribution p(z) = f(z)/Z
deﬁned over an M-dimensional space z. At a stationary point z0 the gradient ∇f(z)
will vanish. Expanding around this stationary point we have
ln f(z) ≃ln f(z0) −1
2(z −z0)TA(z −z0)
(4.131)
where the M × M Hessian matrix A is deﬁned by
A = −∇∇ln f(z)|z=z0
(4.132)
and ∇is the gradient operator. Taking the exponential of both sides we obtain
f(z) ≃f(z0) exp

−1
2(z −z0)TA(z −z0)

.
(4.133)
The distribution q(z) is proportional to f(z) and the appropriate normalization coef-
ﬁcient can be found by inspection, using the standard result (2.43) for a normalized
multivariate Gaussian, giving
q(z) =
|A|1/2
(2π)M/2 exp

−1
2(z −z0)TA(z −z0)

= N(z|z0, A−1)
(4.134)
where |A| denotes the determinant of A. This Gaussian distribution will be well
deﬁned provided its precision matrix, given by A, is positive deﬁnite, which implies
that the stationary point z0 must be a local maximum, not a minimum or a saddle
point.
In order to apply the Laplace approximation we ﬁrst need to ﬁnd the mode z0,
and then evaluate the Hessian matrix at that mode. In practice a mode will typi-
cally be found by running some form of numerical optimization algorithm (Bishop

4. LINEAR MODELS FOR CLASSIFICATION
and Nabney, 2008). Many of the distributions encountered in practice will be mul-
timodal and so there will be different Laplace approximations according to which
mode is being considered. Note that the normalization constant Z of the true distri-
bution does not need to be known in order to apply the Laplace method. As a result
of the central limit theorem, the posterior distribution for a model is expected to
become increasingly better approximated by a Gaussian as the number of observed
data points is increased, and so we would expect the Laplace approximation to be
most useful in situations where the number of data points is relatively large.
One major weakness of the Laplace approximation is that, since it is based on a
Gaussian distribution, it is only directly applicable to real variables. In other cases
it may be possible to apply the Laplace approximation to a transformation of the
variable. For instance if 0 ⩽τ < ∞then we can consider a Laplace approximation
of ln τ. The most serious limitation of the Laplace framework, however, is that
it is based purely on the aspects of the true distribution at a speciﬁc value of the
variable, and so can fail to capture important global properties. In Chapter 10 we
shall consider alternative approaches which adopt a more global perspective.
4.4.1
Model comparison and BIC
As well as approximating the distribution p(z) we can also obtain an approxi-
mation to the normalization constant Z. Using the approximation (4.133) we have
Z
=

f(z) dz
≃
f(z0)

exp

−1
2(z −z0)TA(z −z0)

dz
=
f(z0)(2π)M/2
|A|1/2
(4.135)
where we have noted that the integrand is Gaussian and made use of the standard
result (2.43) for a normalized Gaussian distribution. We can use the result (4.135) to
obtain an approximation to the model evidence which, as discussed in Section 3.4,
plays a central role in Bayesian model comparison.
Consider a data set D and a set of models {Mi} having parameters {θi}. For
each model we deﬁne a likelihood function p(D|θi, Mi). If we introduce a prior
p(θi|Mi) over the parameters, then we are interested in computing the model evi-
dence p(D|Mi) for the various models. From now on we omit the conditioning on
Mi to keep the notation uncluttered. From Bayes’ theorem the model evidence is
given by
p(D) =

p(D|θ)p(θ) dθ.
(4.136)
Identifying f(θ) = p(D|θ)p(θ) and Z = p(D), and applying the result (4.135), we
obtain
Exercise 4.22
ln p(D) ≃ln p(D|θMAP) + ln p(θMAP) + M
2 ln(2π) −1
2 ln |A|
(
)*
+
Occam factor
(4.137)

4.5. Bayesian Logistic Regression
where θMAP is the value of θ at the mode of the posterior distribution, and A is the
Hessian matrix of second derivatives of the negative log posterior
A = −∇∇ln p(D|θMAP)p(θMAP) = −∇∇ln p(θMAP|D).
(4.138)
The ﬁrst term on the right hand side of (4.137) represents the log likelihood evalu-
ated using the optimized parameters, while the remaining three terms comprise the
‘Occam factor’ which penalizes model complexity.
If we assume that the Gaussian prior distribution over parameters is broad, and
that the Hessian has full rank, then we can approximate (4.137) very roughly using
Exercise 4.23
ln p(D) ≃ln p(D|θMAP) −1
2M ln N
(4.139)
where N is the number of data points, M is the number of parameters in θ and
we have omitted additive constants. This is known as the Bayesian Information
Criterion (BIC) or the Schwarz criterion (Schwarz, 1978). Note that, compared to
AIC given by (1.73), this penalizes model complexity more heavily.
Complexity measures such as AIC and BIC have the virtue of being easy to
evaluate, but can also give misleading results. In particular, the assumption that the
Hessian matrix has full rank is often not valid since many of the parameters are not
‘well-determined’. We can use the result (4.137) to obtain a more accurate estimate
Section 3.5.3
of the model evidence starting from the Laplace approximation, as we illustrate in
the context of neural networks in Section 5.7.
4.5. Bayesian Logistic Regression
We now turn to a Bayesian treatment of logistic regression. Exact Bayesian infer-
ence for logistic regression is intractable. In particular, evaluation of the posterior
distribution would require normalization of the product of a prior distribution and a
likelihood function that itself comprises a product of logistic sigmoid functions, one
for every data point. Evaluation of the predictive distribution is similarly intractable.
Here we consider the application of the Laplace approximation to the problem of
Bayesian logistic regression (Spiegelhalter and Lauritzen, 1990; MacKay, 1992b).
4.5.1
Laplace approximation
Recall from Section 4.4 that the Laplace approximation is obtained by ﬁnding
the mode of the posterior distribution and then ﬁtting a Gaussian centred at that
mode. This requires evaluation of the second derivatives of the log posterior, which
is equivalent to ﬁnding the Hessian matrix.
Because we seek a Gaussian representation for the posterior distribution, it is
natural to begin with a Gaussian prior, which we write in the general form
p(w) = N(w|m0, S0)
(4.140)

4. LINEAR MODELS FOR CLASSIFICATION
where m0 and S0 are ﬁxed hyperparameters. The posterior distribution over w is
given by
p(w|t) ∝p(w)p(t|w)
(4.141)
where t = (t1, . . . , tN)T. Taking the log of both sides, and substituting for the prior
distribution using (4.140), and for the likelihood function using (4.89), we obtain
ln p(w|t)
=
−1
2(w −m0)TS−1
0 (w −m0)
+
N

n=1
{tn ln yn + (1 −tn) ln(1 −yn)} + const
(4.142)
where yn = σ(wTφn). To obtain a Gaussian approximation to the posterior dis-
tribution, we ﬁrst maximize the posterior distribution to give the MAP (maximum
posterior) solution wMAP, which deﬁnes the mean of the Gaussian. The covariance
is then given by the inverse of the matrix of second derivatives of the negative log
likelihood, which takes the form
SN = −∇∇ln p(w|t) = S−1
+
N

n=1
yn(1 −yn)φnφT
n.
(4.143)
The Gaussian approximation to the posterior distribution therefore takes the form
q(w) = N(w|wMAP, SN).
(4.144)
Having obtained a Gaussian approximation to the posterior distribution, there
remains the task of marginalizing with respect to this distribution in order to make
predictions.
4.5.2
Predictive distribution
The predictive distribution for class C1, given a new feature vector φ(x), is
obtained by marginalizing with respect to the posterior distribution p(w|t), which is
itself approximated by a Gaussian distribution q(w) so that
p(C1|φ, t) =

p(C1|φ, w)p(w|t) dw ≃

σ(wTφ)q(w) dw
(4.145)
with the corresponding probability for class C2 given by p(C2|φ, t) = 1−p(C1|φ, t).
To evaluate the predictive distribution, we ﬁrst note that the function σ(wTφ) de-
pends on w only through its projection onto φ. Denoting a = wTφ, we have
σ(wTφ) =

δ(a −wTφ)σ(a) da
(4.146)
where δ(·) is the Dirac delta function. From this we obtain

σ(wTφ)q(w) dw =

σ(a)p(a) da
(4.147)

4.5. Bayesian Logistic Regression
where
p(a) =

δ(a −wTφ)q(w) dw.
(4.148)
We can evaluate p(a) by noting that the delta function imposes a linear constraint
on w and so forms a marginal distribution from the joint distribution q(w) by inte-
grating out all directions orthogonal to φ. Because q(w) is Gaussian, we know from
Section 2.3.2 that the marginal distribution will also be Gaussian. We can evaluate
the mean and covariance of this distribution by taking moments, and interchanging
the order of integration over a and w, so that
µa = E[a] =

p(a)a da =

q(w)wTφ dw = wT
MAPφ
(4.149)
where we have used the result (4.144) for the variational posterior distribution q(w).
Similarly
σ2
a
=
var[a] =

p(a) 
a2 −E[a]2
da
=

q(w) 
(wTφ)2 −(mT
Nφ)2
dw = φTSNφ.
(4.150)
Note that the distribution of a takes the same form as the predictive distribution
(3.58) for the linear regression model, with the noise variance set to zero. Thus our
variational approximation to the predictive distribution becomes
p(C1|t) =

σ(a)p(a) da =

σ(a)N(a|µa, σ2
a) da.
(4.151)
This result can also be derived directly by making use of the results for the marginal
of a Gaussian distribution given in Section 2.3.2.
Exercise 4.24
The integral over a represents the convolution of a Gaussian with a logistic sig-
moid, and cannot be evaluated analytically. We can, however, obtain a good approx-
imation (Spiegelhalter and Lauritzen, 1990; MacKay, 1992b; Barber and Bishop,
1998a) by making use of the close similarity between the logistic sigmoid function
σ(a) deﬁned by (4.59) and the probit function Φ(a) deﬁned by (4.114). In order to
obtain the best approximation to the logistic function we need to re-scale the hori-
zontal axis, so that we approximate σ(a) by Φ(λa). We can ﬁnd a suitable value of
λ by requiring that the two functions have the same slope at the origin, which gives
λ2 = π/8. The similarity of the logistic sigmoid and the probit function, for this
Exercise 4.25
choice of λ, is illustrated in Figure 4.9.
The advantage of using a probit function is that its convolution with a Gaussian
can be expressed analytically in terms of another probit function. Speciﬁcally we
can show that
Exercise 4.26

Φ(λa)N(a|µ, σ2) da = Φ

µ
(λ−2 + σ2)1/2

.
(4.152)

4. LINEAR MODELS FOR CLASSIFICATION
We now apply the approximation σ(a) ≃Φ(λa) to the probit functions appearing
on both sides of this equation, leading to the following approximation for the convo-
lution of a logistic sigmoid with a Gaussian

σ(a)N(a|µ, σ2) da ≃σ 
κ(σ2)µ
(4.153)
where we have deﬁned
κ(σ2) = (1 + πσ2/8)−1/2.
(4.154)
Applying this result to (4.151) we obtain the approximate predictive distribution
in the form
p(C1|φ, t) = σ

κ(σ2
a)µa

(4.155)
where µa and σ2
a are deﬁned by (4.149) and (4.150), respectively, and κ(σ2
a) is de-
ﬁned by (4.154).
Note that the decision boundary corresponding to p(C1|φ, t) = 0.5 is given by
µa = 0, which is the same as the decision boundary obtained by using the MAP
value for w. Thus if the decision criterion is based on minimizing misclassiﬁca-
tion rate, with equal prior probabilities, then the marginalization over w has no ef-
fect. However, for more complex decision criteria it will play an important role.
Marginalization of the logistic sigmoid model under a Gaussian approximation to
the posterior distribution will be illustrated in the context of variational inference in
Exercises
4.1
(⋆⋆) Given a set of data points {xn}, we can deﬁne the convex hull to be the set of
all points x given by
x =

n
αnxn
(4.156)
where αn ⩾0 and 
n αn = 1. Consider a second set of points {yn} together with
their corresponding convex hull. By deﬁnition, the two sets of points will be linearly
separable if there exists a vector w and a scalar w0 such that wTxn + w0 > 0 for all
xn, and wTyn +w0 < 0 for all yn. Show that if their convex hulls intersect, the two
sets of points cannot be linearly separable, and conversely that if they are linearly
separable, their convex hulls do not intersect.
4.2
(⋆⋆) www
Consider the minimization of a sum-of-squares error function (4.15),
and suppose that all of the target vectors in the training set satisfy a linear constraint
aTtn + b = 0
(4.157)
where tn corresponds to the nth row of the matrix T in (4.15). Show that as a
consequence of this constraint, the elements of the model prediction y(x) given by
the least-squares solution (4.17) also satisfy this constraint, so that
aTy(x) + b = 0.
(4.158)

Exercises
To do so, assume that one of the basis functions φ0(x) = 1 so that the corresponding
parameter w0 plays the role of a bias.
4.3
(⋆⋆)
Extend the result of Exercise 4.2 to show that if multiple linear constraints
are satisﬁed simultaneously by the target vectors, then the same constraints will also
be satisﬁed by the least-squares prediction of a linear model.
4.4
(⋆) www
Show that maximization of the class separation criterion given by (4.23)
with respect to w, using a Lagrange multiplier to enforce the constraint wTw = 1,
leads to the result that w ∝(m2 −m1).
4.5
(⋆) By making use of (4.20), (4.23), and (4.24), show that the Fisher criterion (4.25)
can be written in the form (4.26).
4.6
(⋆) Using the deﬁnitions of the between-class and within-class covariance matrices
given by (4.27) and (4.28), respectively, together with (4.34) and (4.36) and the
choice of target values described in Section 4.1.5, show that the expression (4.33)
that minimizes the sum-of-squares error function can be written in the form (4.37).
4.7
(⋆) www
Show that the logistic sigmoid function (4.59) satisﬁes the property
σ(−a) = 1 −σ(a) and that its inverse is given by σ−1(y) = ln {y/(1 −y)}.
4.8
(⋆) Using (4.57) and (4.58), derive the result (4.65) for the posterior class probability
in the two-class generative model with Gaussian densities, and verify the results
(4.66) and (4.67) for the parameters w and w0.
4.9
(⋆) www
Consider a generative classiﬁcation model for K classes deﬁned by
prior class probabilities p(Ck) = πk and general class-conditional densities p(φ|Ck)
where φ is the input feature vector. Suppose we are given a training data set {φn, tn}
where n = 1, . . . , N, and tn is a binary target vector of length K that uses the 1-of-
K coding scheme, so that it has components tnj = Ijk if pattern n is from class Ck.
Assuming that the data points are drawn independently from this model, show that
the maximum-likelihood solution for the prior probabilities is given by
πk = Nk
N
(4.159)
where Nk is the number of data points assigned to class Ck.
4.10
(⋆⋆)
Consider the classiﬁcation model of Exercise 4.9 and now suppose that the
class-conditional densities are given by Gaussian distributions with a shared covari-
ance matrix, so that
p(φ|Ck) = N(φ|µk, Σ).
(4.160)
Show that the maximum likelihood solution for the mean of the Gaussian distribution
for class Ck is given by
µk = 1
Nk
N

n=1
tnkφn
(4.161)

4. LINEAR MODELS FOR CLASSIFICATION
which represents the mean of those feature vectors assigned to class Ck. Similarly,
show that the maximum likelihood solution for the shared covariance matrix is given
by
Σ =
K

k=1
Nk
N Sk
(4.162)
where
Sk = 1
Nk
N

n=1
tnk(φn −µk)(φn −µk)T.
(4.163)
Thus Σ is given by a weighted average of the covariances of the data associated with
each class, in which the weighting coefﬁcients are given by the prior probabilities of
the classes.
4.11
(⋆⋆) Consider a classiﬁcation problem with K classes for which the feature vector
φ has M components each of which can take L discrete states. Let the values of the
components be represented by a 1-of-L binary coding scheme. Further suppose that,
conditioned on the class Ck, the M components of φ are independent, so that the
class-conditional density factorizes with respect to the feature vector components.
Show that the quantities ak given by (4.63), which appear in the argument to the
softmax function describing the posterior class probabilities, are linear functions of
the components of φ. Note that this represents an example of the naive Bayes model
which is discussed in Section 8.2.2.
4.12
(⋆) www
Verify the relation (4.88) for the derivative of the logistic sigmoid func-
tion deﬁned by (4.59).
4.13
(⋆) www
By making use of the result (4.88) for the derivative of the logistic sig-
moid, show that the derivative of the error function (4.90) for the logistic regression
model is given by (4.91).
4.14
(⋆)
Show that for a linearly separable data set, the maximum likelihood solution
for the logistic regression model is obtained by ﬁnding a vector w whose decision
boundary wTφ(x) = 0 separates the classes and then taking the magnitude of w to
inﬁnity.
4.15
(⋆⋆)
Show that the Hessian matrix H for the logistic regression model, given by
(4.97), is positive deﬁnite. Here R is a diagonal matrix with elements yn(1 −yn),
and yn is the output of the logistic regression model for input vector xn. Hence show
that the error function is a concave function of w and that it has a unique minimum.
4.16
(⋆) Consider a binary classiﬁcation problem in which each observation xn is known
to belong to one of two classes, corresponding to t = 0 and t = 1, and suppose that
the procedure for collecting training data is imperfect, so that training points are
sometimes mislabelled. For every data point xn, instead of having a value t for the
class label, we have instead a value πn representing the probability that tn = 1.
Given a probabilistic model p(t = 1|φ), write down the log likelihood function
appropriate to such a data set.

Exercises
4.17
(⋆) www
Show that the derivatives of the softmax activation function (4.104),
where the ak are deﬁned by (4.105), are given by (4.106).
4.18
(⋆)
Using the result (4.91) for the derivatives of the softmax activation function,
show that the gradients of the cross-entropy error (4.108) are given by (4.109).
4.19
(⋆) www
Write down expressions for the gradient of the log likelihood, as well
as the corresponding Hessian matrix, for the probit regression model deﬁned in Sec-
tion 4.3.5. These are the quantities that would be required to train such a model using
IRLS.
4.20
(⋆⋆)
Show that the Hessian matrix for the multiclass logistic regression problem,
deﬁned by (4.110), is positive semideﬁnite. Note that the full Hessian matrix for
this problem is of size MK × MK, where M is the number of parameters and K
is the number of classes. To prove the positive semideﬁnite property, consider the
product uTHu where u is an arbitrary vector of length MK, and then apply Jensen’s
inequality.
4.21
(⋆) Show that the probit function (4.114) and the erf function (4.115) are related by
(4.116).
4.22
(⋆)
Using the result (4.135), derive the expression (4.137) for the log model evi-
dence under the Laplace approximation.
4.23
(⋆⋆) www
In this exercise, we derive the BIC result (4.139) starting from the
Laplace approximation to the model evidence given by (4.137). Show that if the
prior over parameters is Gaussian of the form p(θ) = N(θ|m, V0), the log model
evidence under the Laplace approximation takes the form
ln p(D) ≃ln p(D|θMAP) −1
2(θMAP −m)TV−1
0 (θMAP −m) −1
2 ln |H| + const
where H is the matrix of second derivatives of the log likelihood ln p(D|θ) evaluated
at θMAP. Now assume that the prior is broad so that V−1
is small and the second
term on the right-hand side above can be neglected. Furthermore, consider the case
of independent, identically distributed data so that H is the sum of terms one for each
data point. Show that the log model evidence can then be written approximately in
the form of the BIC expression (4.139).
4.24
(⋆⋆) Use the results from Section 2.3.2 to derive the result (4.151) for the marginal-
ization of the logistic regression model with respect to a Gaussian posterior distribu-
tion over the parameters w.
4.25
(⋆⋆)
Suppose we wish to approximate the logistic sigmoid σ(a) deﬁned by (4.59)
by a scaled probit function Φ(λa), where Φ(a) is deﬁned by (4.114). Show that if
λ is chosen so that the derivatives of the two functions are equal at a = 0, then
λ2 = π/8.

4. LINEAR MODELS FOR CLASSIFICATION
4.26
(⋆⋆)
In this exercise, we prove the relation (4.152) for the convolution of a probit
function with a Gaussian distribution. To do this, show that the derivative of the left-
hand side with respect to µ is equal to the derivative of the right-hand side, and then
integrate both sides with respect to µ and then show that the constant of integration
vanishes. Note that before differentiating the left-hand side, it is convenient ﬁrst
to introduce a change of variable given by a = µ + σz so that the integral over a
is replaced by an integral over z. When we differentiate the left-hand side of the
relation (4.152), we will then obtain a Gaussian integral over z that can be evaluated
analytically.

Neural
Networks
In Chapters 3 and 4 we considered models for regression and classiﬁcation that com-
prised linear combinations of ﬁxed basis functions. We saw that such models have
useful analytical and computational properties but that their practical applicability
was limited by the curse of dimensionality. In order to apply such models to large-
scale problems, it is necessary to adapt the basis functions to the data.
Support vector machines (SVMs), discussed in Chapter 7, address this by ﬁrst
deﬁning basis functions that are centred on the training data points and then selecting
a subset of these during training. One advantage of SVMs is that, although the
training involves nonlinear optimization, the objective function is convex, and so the
solution of the optimization problem is relatively straightforward. The number of
basis functions in the resulting models is generally much smaller than the number of
training points, although it is often still relatively large and typically increases with
the size of the training set. The relevance vector machine, discussed in Section 7.2,
also chooses a subset from a ﬁxed set of basis functions and typically results in much

5. NEURAL NETWORKS
sparser models. Unlike the SVM it also produces probabilistic outputs, although this
is at the expense of a nonconvex optimization during training.
An alternative approach is to ﬁx the number of basis functions in advance but
allow them to be adaptive, in other words to use parametric forms for the basis func-
tions in which the parameter values are adapted during training. The most successful
model of this type in the context of pattern recognition is the feed-forward neural
network, also known as the multilayer perceptron, discussed in this chapter. In fact,
‘multilayer perceptron’ is really a misnomer, because the model comprises multi-
ple layers of logistic regression models (with continuous nonlinearities) rather than
multiple perceptrons (with discontinuous nonlinearities). For many applications, the
resulting model can be signiﬁcantly more compact, and hence faster to evaluate, than
a support vector machine having the same generalization performance. The price to
be paid for this compactness, as with the relevance vector machine, is that the like-
lihood function, which forms the basis for network training, is no longer a convex
function of the model parameters. In practice, however, it is often worth investing
substantial computational resources during the training phase in order to obtain a
compact model that is fast at processing new data.
The term ‘neural network’ has its origins in attempts to ﬁnd mathematical rep-
resentations of information processing in biological systems (McCulloch and Pitts,
1943; Widrow and Hoff, 1960; Rosenblatt, 1962; Rumelhart et al., 1986). Indeed,
it has been used very broadly to cover a wide range of different models, many of
which have been the subject of exaggerated claims regarding their biological plau-
sibility. From the perspective of practical applications of pattern recognition, how-
ever, biological realism would impose entirely unnecessary constraints. Our focus in
this chapter is therefore on neural networks as efﬁcient models for statistical pattern
recognition. In particular, we shall restrict our attention to the speciﬁc class of neu-
ral networks that have proven to be of greatest practical value, namely the multilayer
perceptron.
We begin by considering the functional form of the network model, including
the speciﬁc parameterization of the basis functions, and we then discuss the prob-
lem of determining the network parameters within a maximum likelihood frame-
work, which involves the solution of a nonlinear optimization problem. This requires
the evaluation of derivatives of the log likelihood function with respect to the net-
work parameters, and we shall see how these can be obtained efﬁciently using the
technique of error backpropagation. We shall also show how the backpropagation
framework can be extended to allow other derivatives to be evaluated, such as the
Jacobian and Hessian matrices. Next we discuss various approaches to regulariza-
tion of neural network training and the relationships between them. We also consider
some extensions to the neural network model, and in particular we describe a gen-
eral framework for modelling conditional probability distributions known as mixture
density networks. Finally, we discuss the use of Bayesian treatments of neural net-
works. Additional background on neural network models can be found in Bishop
(1995a).

5.1. Feed-forward Network Functions
5.1. Feed-forward Network Functions
The linear models for regression and classiﬁcation discussed in Chapters 3 and 4, re-
spectively, are based on linear combinations of ﬁxed nonlinear basis functions φj(x)
and take the form
y(x, w) = f
 M

j=1
wjφj(x)

(5.1)
where f(·) is a nonlinear activation function in the case of classiﬁcation and is the
identity in the case of regression. Our goal is to extend this model by making the
basis functions φj(x) depend on parameters and then to allow these parameters to
be adjusted, along with the coefﬁcients {wj}, during training. There are, of course,
many ways to construct parametric nonlinear basis functions. Neural networks use
basis functions that follow the same form as (5.1), so that each basis function is itself
a nonlinear function of a linear combination of the inputs, where the coefﬁcients in
the linear combination are adaptive parameters.
This leads to the basic neural network model, which can be described a series
of functional transformations. First we construct M linear combinations of the input
variables x1, . . . , xD in the form
aj =
D

i=1
w(1)
ji xi + w(1)
j0
(5.2)
where j = 1, . . . , M, and the superscript (1) indicates that the corresponding param-
eters are in the ﬁrst ‘layer’ of the network. We shall refer to the parameters w(1)
ji as
weights and the parameters w(1)
j0 as biases, following the nomenclature of Chapter 3.
The quantities aj are known as activations. Each of them is then transformed using
a differentiable, nonlinear activation function h(·) to give
zj = h(aj).
(5.3)
These quantities correspond to the outputs of the basis functions in (5.1) that, in the
context of neural networks, are called hidden units. The nonlinear functions h(·) are
generally chosen to be sigmoidal functions such as the logistic sigmoid or the ‘tanh’
function. Following (5.1), these values are again linearly combined to give output
Exercise 5.1
unit activations
ak =
M

j=1
w(2)
kj zj + w(2)
k0
(5.4)
where k = 1, . . . , K, and K is the total number of outputs. This transformation cor-
responds to the second layer of the network, and again the w(2)
k0 are bias parameters.
Finally, the output unit activations are transformed using an appropriate activation
function to give a set of network outputs yk. The choice of activation function is
determined by the nature of the data and the assumed distribution of target variables

5. NEURAL NETWORKS
Network diagram for the two-
layer
neural
network
corre-
sponding to (5.7).
The input,
hidden, and output variables
are represented by nodes, and
the weight parameters are rep-
resented by links between the
nodes, in which the bias pa-
rameters are denoted by links
coming from additional input
and hidden variables x0 and
z0.
Arrows denote the direc-
tion of information ﬂow through
the
network
during
forward
propagation.
x0
x1
xD
z0
z1
zM
y1
yK
w(1)
MD
w(2)
KM
w(2)
hidden units
inputs
outputs
and follows the same considerations as for linear models discussed in Chapters 3 and
4. Thus for standard regression problems, the activation function is the identity so
that yk = ak. Similarly, for multiple binary classiﬁcation problems, each output unit
activation is transformed using a logistic sigmoid function so that
yk = σ(ak)
(5.5)
where
σ(a) =
1 + exp(−a).
(5.6)
Finally, for multiclass problems, a softmax activation function of the form (4.62)
is used. The choice of output unit activation function is discussed in detail in Sec-
tion 5.2.
We can combine these various stages to give the overall network function that,
for sigmoidal output unit activation functions, takes the form
yk(x, w) = σ
 M

j=1
w(2)
kj h
 D

i=1
w(1)
ji xi + w(1)
j0

+ w(2)
k0

(5.7)
where the set of all weight and bias parameters have been grouped together into a
vector w. Thus the neural network model is simply a nonlinear function from a set
of input variables {xi} to a set of output variables {yk} controlled by a vector w of
adjustable parameters.
This function can be represented in the form of a network diagram as shown
in Figure 5.1. The process of evaluating (5.7) can then be interpreted as a forward
propagation of information through the network. It should be emphasized that these
diagrams do not represent probabilistic graphical models of the kind to be consid-
ered in Chapter 8 because the internal nodes represent deterministic variables rather
than stochastic ones. For this reason, we have adopted a slightly different graphical

5.1. Feed-forward Network Functions
notation for the two kinds of model. We shall see later how to give a probabilistic
interpretation to a neural network.
As discussed in Section 3.1, the bias parameters in (5.2) can be absorbed into
the set of weight parameters by deﬁning an additional input variable x0 whose value
is clamped at x0 = 1, so that (5.2) takes the form
aj =
D

i=0
w(1)
ji xi.
(5.8)
We can similarly absorb the second-layer biases into the second-layer weights, so
that the overall network function becomes
yk(x, w) = σ
 M

j=0
w(2)
kj h
 D

i=0
w(1)
ji xi

.
(5.9)
As can be seen from Figure 5.1, the neural network model comprises two stages
of processing, each of which resembles the perceptron model of Section 4.1.7, and
for this reason the neural network is also known as the multilayer perceptron, or
MLP. A key difference compared to the perceptron, however, is that the neural net-
work uses continuous sigmoidal nonlinearities in the hidden units, whereas the per-
ceptron uses step-function nonlinearities. This means that the neural network func-
tion is differentiable with respect to the network parameters, and this property will
play a central role in network training.
If the activation functions of all the hidden units in a network are taken to be
linear, then for any such network we can always ﬁnd an equivalent network without
hidden units. This follows from the fact that the composition of successive linear
transformations is itself a linear transformation. However, if the number of hidden
units is smaller than either the number of input or output units, then the transforma-
tions that the network can generate are not the most general possible linear trans-
formations from inputs to outputs because information is lost in the dimensionality
reduction at the hidden units. In Section 12.4.2, we show that networks of linear
units give rise to principal component analysis. In general, however, there is little
interest in multilayer networks of linear units.
The network architecture shown in Figure 5.1 is the most commonly used one
in practice. However, it is easily generalized, for instance by considering additional
layers of processing each consisting of a weighted linear combination of the form
(5.4) followed by an element-wise transformation using a nonlinear activation func-
tion. Note that there is some confusion in the literature regarding the terminology
for counting the number of layers in such networks. Thus the network in Figure 5.1
may be described as a 3-layer network (which counts the number of layers of units,
and treats the inputs as units) or sometimes as a single-hidden-layer network (which
counts the number of layers of hidden units). We recommend a terminology in which
tive weights that is important for determining the network properties.
Another generalization of the network architecture is to include skip-layer con-
nections, each of which is associated with a corresponding adaptive parameter. For

5. NEURAL NETWORKS
Example of a neural network having a
general feed-forward topology. Note that
each hidden and output unit has an
associated bias parameter (omitted for
clarity).
x1
x2
z1
z3
z2
y1
y2
inputs
outputs
instance, in a two-layer network these would go directly from inputs to outputs. In
principle, a network with sigmoidal hidden units can always mimic skip layer con-
nections (for bounded input values) by using a sufﬁciently small ﬁrst-layer weight
that, over its operating range, the hidden unit is effectively linear, and then com-
pensating with a large weight value from the hidden unit to the output. In practice,
however, it may be advantageous to include skip-layer connections explicitly.
Furthermore, the network can be sparse, with not all possible connections within
a layer being present. We shall see an example of a sparse network architecture when
we consider convolutional neural networks in Section 5.5.6.
Because there is a direct correspondence between a network diagram and its
mathematical function, we can develop more general network mappings by con-
sidering more complex network diagrams. However, these must be restricted to a
feed-forward architecture, in other words to one having no closed directed cycles, to
ensure that the outputs are deterministic functions of the inputs. This is illustrated
with a simple example in Figure 5.2. Each (hidden or output) unit in such a network
computes a function given by
zk = h

j
wkjzj

(5.10)
where the sum runs over all units that send connections to unit k (and a bias param-
eter is included in the summation). For a given set of values applied to the inputs of
the network, successive application of (5.10) allows the activations of all units in the
network to be evaluated including those of the output units.
The approximation properties of feed-forward networks have been widely stud-
ied (Funahashi, 1989; Cybenko, 1989; Hornik et al., 1989; Stinchecombe and White,
1989; Cotter, 1990; Ito, 1991; Hornik, 1991; Kreinovich, 1991; Ripley, 1996) and
found to be very general. Neural networks are therefore said to be universal ap-
proximators. For example, a two-layer network with linear outputs can uniformly
approximate any continuous function on a compact input domain to arbitrary accu-
racy provided the network has a sufﬁciently large number of hidden units. This result
holds for a wide range of hidden unit activation functions, but excluding polynomi-
als. Although such theorems are reassuring, the key problem is how to ﬁnd suitable
parameter values given a set of training data, and in later sections of this chapter we

5.1. Feed-forward Network Functions
Illustration of the ca-
pability of a multilayer perceptron
to approximate four different func-
tions comprising (a) f(x) = x2, (b)
f(x)
=
sin(x), (c), f(x)
=
|x|,
and (d) f(x) = H(x) where H(x)
is the Heaviside step function.
In
each case, N
= 50 data points,
shown as blue dots, have been sam-
pled uniformly in x over the interval
(−1, 1) and the corresponding val-
ues of f(x) evaluated. These data
points are then used to train a two-
layer network having 3 hidden units
with ‘tanh’ activation functions and
linear output units.
The resulting
network functions are shown by the
red curves, and the outputs of the
three hidden units are shown by the
three dashed curves.
(a)
(b)
(c)
(d)
will show that there exist effective solutions to this problem based on both maximum
likelihood and Bayesian approaches.
The capability of a two-layer network to model a broad range of functions is
illustrated in Figure 5.3.
This ﬁgure also shows how individual hidden units work
collaboratively to approximate the ﬁnal function. The role of hidden units in a simple
classiﬁcation problem is illustrated in Figure 5.4 using the synthetic classiﬁcation
data set described in Appendix A.
5.1.1
Weight-space symmetries
One property of feed-forward networks, which will play a role when we consider
Bayesian model comparison, is that multiple distinct choices for the weight vector
w can all give rise to the same mapping function from inputs to outputs (Chen et al.,
1993). Consider a two-layer network of the form shown in Figure 5.1 with M hidden
units having ‘tanh’ activation functions and full connectivity in both layers. If we
change the sign of all of the weights and the bias feeding into a particular hidden
unit, then, for a given input pattern, the sign of the activation of the hidden unit will
be reversed, because ‘tanh’ is an odd function, so that tanh(−a) = −tanh(a). This
transformation can be exactly compensated by changing the sign of all of the weights
leading out of that hidden unit. Thus, by changing the signs of a particular group of
weights (and a bias), the input–output mapping function represented by the network
is unchanged, and so we have found two different weight vectors that give rise to
the same mapping function. For M hidden units, there will be M such ‘sign-ﬂip’

5. NEURAL NETWORKS
Example of the solution of a simple two-
class classiﬁcation problem involving
synthetic data using a neural network
having two inputs, two hidden units with
‘tanh’ activation functions, and a single
output having a logistic sigmoid activa-
tion function.
The dashed blue lines
show the z = 0.5 contours for each of
the hidden units, and the red line shows
the y = 0.5 decision surface for the net-
work.
For comparison, the green line
denotes the optimal decision boundary
computed from the distributions used to
generate the data.
−2
−1
−2
−1
symmetries, and thus any given weight vector will be one of a set 2M equivalent
weight vectors .
Similarly, imagine that we interchange the values of all of the weights (and the
bias) leading both into and out of a particular hidden unit with the corresponding
values of the weights (and bias) associated with a different hidden unit. Again, this
clearly leaves the network input–output mapping function unchanged, but it corre-
sponds to a different choice of weight vector. For M hidden units, any given weight
vector will belong to a set of M! equivalent weight vectors associated with this inter-
change symmetry, corresponding to the M! different orderings of the hidden units.
The network will therefore have an overall weight-space symmetry factor of M!2M.
For networks with more than two layers of weights, the total level of symmetry will
be given by the product of such factors, one for each layer of hidden units.
It turns out that these factors account for all of the symmetries in weight space
(except for possible accidental symmetries due to speciﬁc choices for the weight val-
ues). Furthermore, the existence of these symmetries is not a particular property of
the ‘tanh’ function but applies to a wide range of activation functions (K˙urkov´a and
Kainen, 1994). In many cases, these symmetries in weight space are of little practi-
cal consequence, although in Section 5.7 we shall encounter a situation in which we
need to take them into account.
5.2. Network Training
So far, we have viewed neural networks as a general class of parametric nonlinear
functions from a vector x of input variables to a vector y of output variables. A
simple approach to the problem of determining the network parameters is to make an
analogy with the discussion of polynomial curve ﬁtting in Section 1.1, and therefore
to minimize a sum-of-squares error function. Given a training set comprising a set
of input vectors {xn}, where n = 1, . . . , N, together with a corresponding set of

5.2. Network Training
target vectors {tn}, we minimize the error function
E(w) = 1
N

n=1
∥y(xn, w) −tn∥2.
(5.11)
However, we can provide a much more general view of network training by ﬁrst
giving a probabilistic interpretation to the network outputs. We have already seen
many advantages of using probabilistic predictions in Section 1.5.4. Here it will also
provide us with a clearer motivation both for the choice of output unit nonlinearity
and the choice of error function.
We start by discussing regression problems, and for the moment we consider
a single target variable t that can take any real value. Following the discussions
in Section 1.2.5 and 3.1, we assume that t has a Gaussian distribution with an x-
dependent mean, which is given by the output of the neural network, so that
p(t|x, w) = N

t|y(x, w), β−1
(5.12)
where β is the precision (inverse variance) of the Gaussian noise. Of course this
is a somewhat restrictive assumption, and in Section 5.6 we shall see how to extend
this approach to allow for more general conditional distributions. For the conditional
distribution given by (5.12), it is sufﬁcient to take the output unit activation function
to be the identity, because such a network can approximate any continuous function
from x to y. Given a data set of N independent, identically distributed observations
X = {x1, . . . , xN}, along with corresponding target values t = {t1, . . . , tN}, we
can construct the corresponding likelihood function
p(t|X, w, β) =
N

n=1
p(tn|xn, w, β).
Taking the negative logarithm, we obtain the error function
β
N

n=1
{y(xn, w) −tn}2 −N
2 ln β + N
2 ln(2π)
(5.13)
which can be used to learn the parameters w and β. In Section 5.7, we shall dis-
cuss the Bayesian treatment of neural networks, while here we consider a maximum
likelihood approach. Note that in the neural networks literature, it is usual to con-
sider the minimization of an error function rather than the maximization of the (log)
likelihood, and so here we shall follow this convention. Consider ﬁrst the determi-
nation of w. Maximizing the likelihood function is equivalent to minimizing the
sum-of-squares error function given by
E(w) = 1
N

n=1
{y(xn, w) −tn}2
(5.14)

5. NEURAL NETWORKS
where we have discarded additive and multiplicative constants. The value of w found
by minimizing E(w) will be denoted wML because it corresponds to the maximum
likelihood solution. In practice, the nonlinearity of the network function y(xn, w)
causes the error E(w) to be nonconvex, and so in practice local maxima of the
likelihood may be found, corresponding to local minima of the error function, as
discussed in Section 5.2.1.
Having found wML, the value of β can be found by minimizing the negative log
likelihood to give
βML
= 1
N
N

n=1
{y(xn, wML) −tn}2.
(5.15)
Note that this can be evaluated once the iterative optimization required to ﬁnd wML
is completed. If we have multiple target variables, and we assume that they are inde-
pendent conditional on x and w with shared noise precision β, then the conditional
distribution of the target values is given by
p(t|x, w) = N

t|y(x, w), β−1I

.
(5.16)
Following the same argument as for a single target variable, we see that the maximum
likelihood weights are determined by minimizing the sum-of-squares error function
(5.11). The noise precision is then given by
Exercise 5.2
βML
=
NK
N

n=1
∥y(xn, wML) −tn∥2
(5.17)
where K is the number of target variables. The assumption of independence can be
dropped at the expense of a slightly more complex optimization problem.
Exercise 5.3
Recall from Section 4.3.6 that there is a natural pairing of the error function
(given by the negative log likelihood) and the output unit activation function. In the
regression case, we can view the network as having an output activation function that
is the identity, so that yk = ak. The corresponding sum-of-squares error function
has the property
∂E
∂ak
= yk −tk
(5.18)
which we shall make use of when discussing error backpropagation in Section 5.3.
Now consider the case of binary classiﬁcation in which we have a single target
variable t such that t = 1 denotes class C1 and t = 0 denotes class C2. Following
the discussion of canonical link functions in Section 4.3.6, we consider a network
having a single output whose activation function is a logistic sigmoid
y = σ(a) ≡
1 + exp(−a)
(5.19)
so that 0 ⩽y(x, w) ⩽1. We can interpret y(x, w) as the conditional probability
p(C1|x), with p(C2|x) given by 1 −y(x, w). The conditional distribution of targets
given inputs is then a Bernoulli distribution of the form
p(t|x, w) = y(x, w)t {1 −y(x, w)}1−t .
(5.20)

5.2. Network Training
If we consider a training set of independent observations, then the error function,
which is given by the negative log likelihood, is then a cross-entropy error function
of the form
E(w) = −
N

n=1
{tn ln yn + (1 −tn) ln(1 −yn)}
(5.21)
where yn denotes y(xn, w). Note that there is no analogue of the noise precision β
because the target values are assumed to be correctly labelled. However, the model
is easily extended to allow for labelling errors. Simard et al. (2003) found that using
Exercise 5.4
the cross-entropy error function instead of the sum-of-squares for a classiﬁcation
problem leads to faster training as well as improved generalization.
If we have K separate binary classiﬁcations to perform, then we can use a net-
work having K outputs each of which has a logistic sigmoid activation function.
Associated with each output is a binary class label tk ∈{0, 1}, where k = 1, . . . , K.
If we assume that the class labels are independent, given the input vector, then the
conditional distribution of the targets is
p(t|x, w) =
K

k=1
yk(x, w)tk [1 −yk(x, w)]1−tk .
(5.22)
Taking the negative logarithm of the corresponding likelihood function then gives
the following error function
Exercise 5.5
E(w) = −
N

n=1
K

k=1
{tnk ln ynk + (1 −tnk) ln(1 −ynk)}
(5.23)
where ynk denotes yk(xn, w). Again, the derivative of the error function with re-
spect to the activation for a particular output unit takes the form (5.18) just as in the
Exercise 5.6
regression case.
It is interesting to contrast the neural network solution to this problem with the
corresponding approach based on a linear classiﬁcation model of the kind discussed
in Chapter 4. Suppose that we are using a standard two-layer network of the kind
shown in Figure 5.1. We see that the weight parameters in the ﬁrst layer of the
network are shared between the various outputs, whereas in the linear model each
classiﬁcation problem is solved independently. The ﬁrst layer of the network can
be viewed as performing a nonlinear feature extraction, and the sharing of features
between the different outputs can save on computation and can also lead to improved
generalization.
Finally, we consider the standard multiclass classiﬁcation problem in which each
input is assigned to one of K mutually exclusive classes. The binary target variables
tk ∈{0, 1} have a 1-of-K coding scheme indicating the class, and the network
outputs are interpreted as yk(x, w) = p(tk = 1|x), leading to the following error
function
E(w) = −
N

n=1
K

k=1
tkn ln yk(xn, w).
(5.24)

5. NEURAL NETWORKS
Geometrical view of the error function E(w) as
a surface sitting over weight space. Point wA is
a local minimum and wB is the global minimum.
At any point wC, the local gradient of the error
surface is given by the vector ∇E.
w1
w2
E(w)
wA
wB
wC
∇E
Following the discussion of Section 4.3.4, we see that the output unit activation
function, which corresponds to the canonical link, is given by the softmax function
yk(x, w) =
exp(ak(x, w))

j
exp(aj(x, w))
(5.25)
which satisﬁes 0 ⩽yk ⩽1 and 
k yk = 1. Note that the yk(x, w) are unchanged
if a constant is added to all of the ak(x, w), causing the error function to be constant
for some directions in weight space. This degeneracy is removed if an appropriate
regularization term (Section 5.5) is added to the error function.
Once again, the derivative of the error function with respect to the activation for
a particular output unit takes the familiar form (5.18).
Exercise 5.7
In summary, there is a natural choice of both output unit activation function
and matching error function, according to the type of problem being solved. For re-
gression we use linear outputs and a sum-of-squares error, for (multiple independent)
binary classiﬁcations we use logistic sigmoid outputs and a cross-entropy error func-
tion, and for multiclass classiﬁcation we use softmax outputs with the corresponding
multiclass cross-entropy error function. For classiﬁcation problems involving two
classes, we can use a single logistic sigmoid output, or alternatively we can use a
network with two outputs having a softmax output activation function.
5.2.1
Parameter optimization
We turn next to the task of ﬁnding a weight vector w which minimizes the
chosen function E(w). At this point, it is useful to have a geometrical picture of the
error function, which we can view as a surface sitting over weight space as shown in
then the change in the error function is δE ≃δwT∇E(w), where the vector ∇E(w)
points in the direction of greatest rate of increase of the error function. Because the
error E(w) is a smooth continuous function of w, its smallest value will occur at a

5.2. Network Training
point in weight space such that the gradient of the error function vanishes, so that
∇E(w) = 0
(5.26)
as otherwise we could make a small step in the direction of −∇E(w) and thereby
further reduce the error. Points at which the gradient vanishes are called stationary
points, and may be further classiﬁed into minima, maxima, and saddle points.
Our goal is to ﬁnd a vector w such that E(w) takes its smallest value. How-
ever, the error function typically has a highly nonlinear dependence on the weights
and bias parameters, and so there will be many points in weight space at which the
gradient vanishes (or is numerically very small). Indeed, from the discussion in Sec-
tion 5.1.1 we see that for any point w that is a local minimum, there will be other
points in weight space that are equivalent minima. For instance, in a two-layer net-
work of the kind shown in Figure 5.1, with M hidden units, each point in weight
space is a member of a family of M!2M equivalent points.
Section 5.1.1
Furthermore, there will typically be multiple inequivalent stationary points and
in particular multiple inequivalent minima. A minimum that corresponds to the
smallest value of the error function for any weight vector is said to be a global
minimum. Any other minima corresponding to higher values of the error function
are said to be local minima. For a successful application of neural networks, it may
not be necessary to ﬁnd the global minimum (and in general it will not be known
whether the global minimum has been found) but it may be necessary to compare
several local minima in order to ﬁnd a sufﬁciently good solution.
Because there is clearly no hope of ﬁnding an analytical solution to the equa-
tion ∇E(w) = 0 we resort to iterative numerical procedures. The optimization of
continuous nonlinear functions is a widely studied problem and there exists an ex-
tensive literature on how to solve it efﬁciently. Most techniques involve choosing
some initial value w(0) for the weight vector and then moving through weight space
in a succession of steps of the form
w(τ+1) = w(τ) + ∆w(τ)
(5.27)
where τ labels the iteration step. Different algorithms involve different choices for
the weight vector update ∆w(τ). Many algorithms make use of gradient information
and therefore require that, after each update, the value of ∇E(w) is evaluated at
the new weight vector w(τ+1). In order to understand the importance of gradient
information, it is useful to consider a local approximation to the error function based
on a Taylor expansion.
5.2.2
Local quadratic approximation
Insight into the optimization problem, and into the various techniques for solv-
ing it, can be obtained by considering a local quadratic approximation to the error
function.
Consider the Taylor expansion of E(w) around some point w in weight space
E(w) ≃E(w) + (w −w)Tb + 1
2(w −w)TH(w −w)
(5.28)

5. NEURAL NETWORKS
where cubic and higher terms have been omitted. Here b is deﬁned to be the gradient
of E evaluated at w
b ≡∇E|w=b
w
(5.29)
and the Hessian matrix H = ∇∇E has elements
(H)ij ≡
∂E
∂wi∂wj

w=b
w
.
(5.30)
From (5.28), the corresponding local approximation to the gradient is given by
∇E ≃b + H(w −w).
(5.31)
For points w that are sufﬁciently close to w, these expressions will give reasonable
approximations for the error and its gradient.
Consider the particular case of a local quadratic approximation around a point
w⋆that is a minimum of the error function. In this case there is no linear term,
because ∇E = 0 at w⋆, and (5.28) becomes
E(w) = E(w⋆) + 1
2(w −w⋆)TH(w −w⋆)
(5.32)
where the Hessian H is evaluated at w⋆. In order to interpret this geometrically,
consider the eigenvalue equation for the Hessian matrix
Hui = λiui
(5.33)
where the eigenvectors ui form a complete orthonormal set (Appendix C) so that
uT
i uj = δij.
(5.34)
We now expand (w −w⋆) as a linear combination of the eigenvectors in the form
w −w⋆=

i
αiui.
(5.35)
This can be regarded as a transformation of the coordinate system in which the origin
is translated to the point w⋆, and the axes are rotated to align with the eigenvectors
(through the orthogonal matrix whose columns are the ui), and is discussed in more
detail in Appendix C. Substituting (5.35) into (5.32), and using (5.33) and (5.34),
allows the error function to be written in the form
E(w) = E(w⋆) + 1

i
λiα2
i.
(5.36)
A matrix H is said to be positive deﬁnite if, and only if,
vTHv > 0
for all v.
(5.37)

5.2. Network Training
In the neighbourhood of a min-
imum w⋆, the error function
can
be
approximated
by
a
quadratic.
Contours of con-
stant error are then ellipses
whose axes are aligned with
the eigenvectors ui of the Hes-
sian matrix, with lengths that
are inversely proportional to the
square roots of the correspond-
ing eigenvectors λi.
w1
w2
λ−1/2
λ−1/2
u1
w⋆
u2
Because the eigenvectors {ui} form a complete set, an arbitrary vector v can be
written in the form
v =

i
ciui.
(5.38)
From (5.33) and (5.34), we then have
vTHv =

i
c2
iλi
(5.39)
and so H will be positive deﬁnite if, and only if, all of its eigenvalues are positive.
Exercise 5.10
In the new coordinate system, whose basis vectors are given by the eigenvectors
{ui}, the contours of constant E are ellipses centred on the origin, as illustrated
Exercise 5.11
in Figure 5.6. For a one-dimensional weight space, a stationary point w⋆will be a
minimum if
∂2E
∂w2

w⋆
> 0.
(5.40)
The corresponding result in D-dimensions is that the Hessian matrix, evaluated at
w⋆, should be positive deﬁnite.
Exercise 5.12
5.2.3
Use of gradient information
As we shall see in Section 5.3, it is possible to evaluate the gradient of an error
function efﬁciently by means of the backpropagation procedure. The use of this
gradient information can lead to signiﬁcant improvements in the speed with which
the minima of the error function can be located. We can see why this is so, as follows.
In the quadratic approximation to the error function, given in (5.28), the error
surface is speciﬁed by the quantities b and H, which contain a total of W(W +
3)/2 independent elements (because the matrix H is symmetric), where W is the
Exercise 5.13
dimensionality of w (i.e., the total number of adaptive parameters in the network).
The location of the minimum of this quadratic approximation therefore depends on
O(W 2) parameters, and we should not expect to be able to locate the minimum until
we have gathered O(W 2) independent pieces of information. If we do not make
use of gradient information, we would expect to have to perform O(W 2) function

5. NEURAL NETWORKS
evaluations, each of which would require O(W) steps. Thus, the computational
effort needed to ﬁnd the minimum using such an approach would be O(W 3).
Now compare this with an algorithm that makes use of the gradient information.
Because each evaluation of ∇E brings W items of information, we might hope to
ﬁnd the minimum of the function in O(W) gradient evaluations. As we shall see,
by using error backpropagation, each such evaluation takes only O(W) steps and so
the minimum can now be found in O(W 2) steps. For this reason, the use of gradient
information forms the basis of practical algorithms for training neural networks.
5.2.4
Gradient descent optimization
The simplest approach to using gradient information is to choose the weight
update in (5.27) to comprise a small step in the direction of the negative gradient, so
that
w(τ+1) = w(τ) −η∇E(w(τ))
(5.41)
where the parameter η > 0 is known as the learning rate. After each such update, the
gradient is re-evaluated for the new weight vector and the process repeated. Note that
the error function is deﬁned with respect to a training set, and so each step requires
that the entire training set be processed in order to evaluate ∇E. Techniques that
use the whole data set at once are called batch methods. At each step the weight
vector is moved in the direction of the greatest rate of decrease of the error function,
and so this approach is known as gradient descent or steepest descent. Although
such an approach might intuitively seem reasonable, in fact it turns out to be a poor
algorithm, for reasons discussed in Bishop and Nabney (2008).
For batch optimization, there are more efﬁcient methods, such as conjugate gra-
dients and quasi-Newton methods, which are much more robust and much faster
than simple gradient descent (Gill et al., 1981; Fletcher, 1987; Nocedal and Wright,
1999). Unlike gradient descent, these algorithms have the property that the error
function always decreases at each iteration unless the weight vector has arrived at a
local or global minimum.
In order to ﬁnd a sufﬁciently good minimum, it may be necessary to run a
gradient-based algorithm multiple times, each time using a different randomly cho-
sen starting point, and comparing the resulting performance on an independent vali-
dation set.
There is, however, an on-line version of gradient descent that has proved useful
in practice for training neural networks on large data sets (Le Cun et al., 1989).
Error functions based on maximum likelihood for a set of independent observations
comprise a sum of terms, one for each data point
E(w) =
N

n=1
En(w).
(5.42)
On-line gradient descent, also known as sequential gradient descent or stochastic
gradient descent, makes an update to the weight vector based on one data point at a
time, so that
w(τ+1) = w(τ) −η∇En(w(τ)).
(5.43)

5.3. Error Backpropagation
This update is repeated by cycling through the data either in sequence or by selecting
points at random with replacement. There are of course intermediate scenarios in
which the updates are based on batches of data points.
One advantage of on-line methods compared to batch methods is that the former
handle redundancy in the data much more efﬁciently. To see, this consider an ex-
treme example in which we take a data set and double its size by duplicating every
data point. Note that this simply multiplies the error function by a factor of 2 and so
is equivalent to using the original error function. Batch methods will require double
the computational effort to evaluate the batch error function gradient, whereas on-
line methods will be unaffected. Another property of on-line gradient descent is the
possibility of escaping from local minima, since a stationary point with respect to
the error function for the whole data set will generally not be a stationary point for
each data point individually.
Nonlinear optimization algorithms, and their practical application to neural net-
work training, are discussed in detail in Bishop and Nabney (2008).
5.3. Error Backpropagation
Our goal in this section is to ﬁnd an efﬁcient technique for evaluating the gradient
of an error function E(w) for a feed-forward neural network. We shall see that
this can be achieved using a local message passing scheme in which information is
sent alternately forwards and backwards through the network and is known as error
backpropagation, or sometimes simply as backprop.
It should be noted that the term backpropagation is used in the neural com-
puting literature to mean a variety of different things. For instance, the multilayer
perceptron architecture is sometimes called a backpropagation network. The term
backpropagation is also used to describe the training of a multilayer perceptron us-
ing gradient descent applied to a sum-of-squares error function. In order to clarify
the terminology, it is useful to consider the nature of the training process more care-
fully. Most training algorithms involve an iterative procedure for minimization of an
error function, with adjustments to the weights being made in a sequence of steps. At
each such step, we can distinguish between two distinct stages. In the ﬁrst stage, the
derivatives of the error function with respect to the weights must be evaluated. As
we shall see, the important contribution of the backpropagation technique is in pro-
viding a computationally efﬁcient method for evaluating such derivatives. Because
it is at this stage that errors are propagated backwards through the network, we shall
use the term backpropagation speciﬁcally to describe the evaluation of derivatives.
In the second stage, the derivatives are then used to compute the adjustments to be
made to the weights. The simplest such technique, and the one originally considered
by Rumelhart et al. (1986), involves gradient descent. It is important to recognize
that the two stages are distinct. Thus, the ﬁrst stage, namely the propagation of er-
rors backwards through the network in order to evaluate derivatives, can be applied
to many other kinds of network and not just the multilayer perceptron. It can also be
applied to error functions other that just the simple sum-of-squares, and to the eval-

5. NEURAL NETWORKS
uation of other derivatives such as the Jacobian and Hessian matrices, as we shall
see later in this chapter. Similarly, the second stage of weight adjustment using the
calculated derivatives can be tackled using a variety of optimization schemes, many
of which are substantially more powerful than simple gradient descent.
5.3.1
Evaluation of error-function derivatives
We now derive the backpropagation algorithm for a general network having ar-
bitrary feed-forward topology, arbitrary differentiable nonlinear activation functions,
and a broad class of error function. The resulting formulae will then be illustrated
using a simple layered network structure having a single layer of sigmoidal hidden
units together with a sum-of-squares error.
Many error functions of practical interest, for instance those deﬁned by maxi-
mum likelihood for a set of i.i.d. data, comprise a sum of terms, one for each data
point in the training set, so that
E(w) =
N

n=1
En(w).
(5.44)
Here we shall consider the problem of evaluating ∇En(w) for one such term in the
error function. This may be used directly for sequential optimization, or the results
can be accumulated over the training set in the case of batch methods.
Consider ﬁrst a simple linear model in which the outputs yk are linear combina-
tions of the input variables xi so that
yk =

i
wkixi
(5.45)
together with an error function that, for a particular input pattern n, takes the form
En = 1

k
(ynk −tnk)2
(5.46)
where ynk = yk(xn, w). The gradient of this error function with respect to a weight
wji is given by
∂En
∂wji
= (ynj −tnj)xni
(5.47)
which can be interpreted as a ‘local’ computation involving the product of an ‘error
signal’ ynj −tnj associated with the output end of the link wji and the variable xni
associated with the input end of the link. In Section 4.3.2, we saw how a similar
formula arises with the logistic sigmoid activation function together with the cross
entropy error function, and similarly for the softmax activation function together
with its matching cross-entropy error function. We shall now see how this simple
result extends to the more complex setting of multilayer feed-forward networks.
In a general feed-forward network, each unit computes a weighted sum of its
inputs of the form
aj =

i
wjizi
(5.48)

5.3. Error Backpropagation
where zi is the activation of a unit, or input, that sends a connection to unit j, and wji
is the weight associated with that connection. In Section 5.1, we saw that biases can
be included in this sum by introducing an extra unit, or input, with activation ﬁxed
at +1. We therefore do not need to deal with biases explicitly. The sum in (5.48) is
transformed by a nonlinear activation function h(·) to give the activation zj of unit j
in the form
zj = h(aj).
(5.49)
Note that one or more of the variables zi in the sum in (5.48) could be an input, and
similarly, the unit j in (5.49) could be an output.
For each pattern in the training set, we shall suppose that we have supplied the
corresponding input vector to the network and calculated the activations of all of
the hidden and output units in the network by successive application of (5.48) and
(5.49). This process is often called forward propagation because it can be regarded
as a forward ﬂow of information through the network.
Now consider the evaluation of the derivative of En with respect to a weight
wji. The outputs of the various units will depend on the particular input pattern n.
However, in order to keep the notation uncluttered, we shall omit the subscript n
from the network variables. First we note that En depends on the weight wji only
via the summed input aj to unit j. We can therefore apply the chain rule for partial
derivatives to give
∂En
∂wji
= ∂En
∂aj
∂aj
∂wji
.
(5.50)
We now introduce a useful notation
δj ≡∂En
∂aj
(5.51)
where the δ’s are often referred to as errors for reasons we shall see shortly. Using
(5.48), we can write
∂aj
∂wji
= zi.
(5.52)
Substituting (5.51) and (5.52) into (5.50), we then obtain
∂En
∂wji
= δjzi.
(5.53)
Equation (5.53) tells us that the required derivative is obtained simply by multiplying
the value of δ for the unit at the output end of the weight by the value of z for the unit
at the input end of the weight (where z = 1 in the case of a bias). Note that this takes
the same form as for the simple linear model considered at the start of this section.
Thus, in order to evaluate the derivatives, we need only to calculate the value of δj
for each hidden and output unit in the network, and then apply (5.53).
As we have seen already, for the output units, we have
δk = yk −tk
(5.54)

5. NEURAL NETWORKS
Illustration of the calculation of δj for hidden unit j by
backpropagation of the δ’s from those units k to which
unit j sends connections. The blue arrow denotes the
direction of information ﬂow during forward propagation,
and the red arrows indicate the backward propagation
of error information.
zi
zj
δj
δk
δ1
wji
wkj
provided we are using the canonical link as the output-unit activation function. To
evaluate the δ’s for hidden units, we again make use of the chain rule for partial
derivatives,
δj ≡∂En
∂aj
=

k
∂En
∂ak
∂ak
∂aj
(5.55)
where the sum runs over all units k to which unit j sends connections. The arrange-
ment of units and weights is illustrated in Figure 5.7. Note that the units labelled k
could include other hidden units and/or output units. In writing down (5.55), we are
making use of the fact that variations in aj give rise to variations in the error func-
tion only through variations in the variables ak. If we now substitute the deﬁnition
of δ given by (5.51) into (5.55), and make use of (5.48) and (5.49), we obtain the
following backpropagation formula
δj = h′(aj)

k
wkjδk
(5.56)
which tells us that the value of δ for a particular hidden unit can be obtained by
propagating the δ’s backwards from units higher up in the network, as illustrated
in Figure 5.7. Note that the summation in (5.56) is taken over the ﬁrst index on
wkj (corresponding to backward propagation of information through the network),
whereas in the forward propagation equation (5.10) it is taken over the second index.
Because we already know the values of the δ’s for the output units, it follows that
by recursively applying (5.56) we can evaluate the δ’s for all of the hidden units in a
feed-forward network, regardless of its topology.
The backpropagation procedure can therefore be summarized as follows.
Error Backpropagation
1. Apply an input vector xn to the network and forward propagate through
the network using (5.48) and (5.49) to ﬁnd the activations of all the hidden
and output units.
2. Evaluate the δk for all the output units using (5.54).
3. Backpropagate the δ’s using (5.56) to obtain δj for each hidden unit in the
network.
4. Use (5.53) to evaluate the required derivatives.

5.3. Error Backpropagation
For batch methods, the derivative of the total error E can then be obtained by
repeating the above steps for each pattern in the training set and then summing over
all patterns:
∂E
∂wji
=

n
∂En
∂wji
.
(5.57)
In the above derivation we have implicitly assumed that each hidden or output unit in
the network has the same activation function h(·). The derivation is easily general-
ized, however, to allow different units to have individual activation functions, simply
by keeping track of which form of h(·) goes with which unit.
5.3.2
A simple example
The above derivation of the backpropagation procedure allowed for general
forms for the error function, the activation functions, and the network topology. In
order to illustrate the application of this algorithm, we shall consider a particular
example. This is chosen both for its simplicity and for its practical importance, be-
cause many applications of neural networks reported in the literature make use of
this type of network. Speciﬁcally, we shall consider a two-layer network of the form
illustrated in Figure 5.1, together with a sum-of-squares error, in which the output
units have linear activation functions, so that yk = ak, while the hidden units have
logistic sigmoid activation functions given by
h(a) ≡tanh(a)
(5.58)
where
tanh(a) = ea −e−a
ea + e−a .
(5.59)
A useful feature of this function is that its derivative can be expressed in a par-
ticularly simple form:
h′(a) = 1 −h(a)2.
(5.60)
We also consider a standard sum-of-squares error function, so that for pattern n the
error is given by
En = 1
K

k=1
(yk −tk)2
(5.61)
where yk is the activation of output unit k, and tk is the corresponding target, for a
particular input pattern xn.
For each pattern in the training set in turn, we ﬁrst perform a forward propagation
using
aj
=
D

i=0
w(1)
ji xi
(5.62)
zj
=
tanh(aj)
(5.63)
yk
=
M

j=0
w(2)
kj zj.
(5.64)

5. NEURAL NETWORKS
Next we compute the δ’s for each output unit using
δk = yk −tk.
(5.65)
Then we backpropagate these to obtain δs for the hidden units using
δj = (1 −z2
j)
K

k=1
wkjδk.
(5.66)
Finally, the derivatives with respect to the ﬁrst-layer and second-layer weights are
given by
∂En
∂w(1)
ji
= δjxi,
∂En
∂w(2)
kj
= δkzj.
(5.67)
5.3.3
Efﬁciency of backpropagation
One of the most important aspects of backpropagation is its computational efﬁ-
ciency. To understand this, let us examine how the number of computer operations
required to evaluate the derivatives of the error function scales with the total number
W of weights and biases in the network. A single evaluation of the error function
(for a given input pattern) would require O(W) operations, for sufﬁciently large W.
This follows from the fact that, except for a network with very sparse connections,
the number of weights is typically much greater than the number of units, and so the
bulk of the computational effort in forward propagation is concerned with evaluat-
ing the sums in (5.48), with the evaluation of the activation functions representing a
small overhead. Each term in the sum in (5.48) requires one multiplication and one
addition, leading to an overall computational cost that is O(W).
An alternative approach to backpropagation for computing the derivatives of the
error function is to use ﬁnite differences. This can be done by perturbing each weight
in turn, and approximating the derivatives by the expression
∂En
∂wji
= En(wji + ϵ) −En(wji)
ϵ
+ O(ϵ)
(5.68)
where ϵ ≪1. In a software simulation, the accuracy of the approximation to the
derivatives can be improved by making ϵ smaller, until numerical roundoff problems
arise. The accuracy of the ﬁnite differences method can be improved signiﬁcantly
by using symmetrical central differences of the form
∂En
∂wji
= En(wji + ϵ) −En(wji −ϵ)
2ϵ
+ O(ϵ2).
(5.69)
In this case, the O(ϵ) corrections cancel, as can be veriﬁed by Taylor expansion on
Exercise 5.14
the right-hand side of (5.69), and so the residual corrections are O(ϵ2). The number
of computational steps is, however, roughly doubled compared with (5.68).
The main problem with numerical differentiation is that the highly desirable
O(W) scaling has been lost. Each forward propagation requires O(W) steps, and

5.3. Error Backpropagation
Illustration of a modular pattern
recognition system in which the
Jacobian matrix can be used
to backpropagate error signals
from the outputs through to ear-
lier modules in the system.
x
u
w
y
z
v
there are W weights in the network each of which must be perturbed individually, so
that the overall scaling is O(W 2).
However, numerical differentiation plays an important role in practice, because a
comparison of the derivatives calculated by backpropagation with those obtained us-
ing central differences provides a powerful check on the correctness of any software
implementation of the backpropagation algorithm. When training networks in prac-
tice, derivatives should be evaluated using backpropagation, because this gives the
greatest accuracy and numerical efﬁciency. However, the results should be compared
with numerical differentiation using (5.69) for some test cases in order to check the
correctness of the implementation.
5.3.4
The Jacobian matrix
We have seen how the derivatives of an error function with respect to the weights
can be obtained by the propagation of errors backwards through the network. The
technique of backpropagation can also be applied to the calculation of other deriva-
tives. Here we consider the evaluation of the Jacobian matrix, whose elements are
given by the derivatives of the network outputs with respect to the inputs
Jki ≡∂yk
∂xi
(5.70)
where each such derivative is evaluated with all other inputs held ﬁxed. Jacobian
matrices play a useful role in systems built from a number of distinct modules, as
illustrated in Figure 5.8. Each module can comprise a ﬁxed or adaptive function,
which can be linear or nonlinear, so long as it is differentiable. Suppose we wish
to minimize an error function E with respect to the parameter w in Figure 5.8. The
derivative of the error function is given by
∂E
∂w =

k,j
∂E
∂yk
∂yk
∂zj
∂zj
∂w
(5.71)
in which the Jacobian matrix for the red module in Figure 5.8 appears in the middle
term.
Because the Jacobian matrix provides a measure of the local sensitivity of the
outputs to changes in each of the input variables, it also allows any known errors ∆xi

5. NEURAL NETWORKS
associated with the inputs to be propagated through the trained network in order to
estimate their contribution ∆yk to the errors at the outputs, through the relation
∆yk ≃

i
∂yk
∂xi
∆xi
(5.72)
which is valid provided the |∆xi| are small. In general, the network mapping rep-
resented by a trained neural network will be nonlinear, and so the elements of the
Jacobian matrix will not be constants but will depend on the particular input vector
used. Thus (5.72) is valid only for small perturbations of the inputs, and the Jacobian
itself must be re-evaluated for each new input vector.
The Jacobian matrix can be evaluated using a backpropagation procedure that is
similar to the one derived earlier for evaluating the derivatives of an error function
with respect to the weights. We start by writing the element Jki in the form
Jki = ∂yk
∂xi
=

j
∂yk
∂aj
∂aj
∂xi
=

j
wji
∂yk
∂aj
(5.73)
where we have made use of (5.48). The sum in (5.73) runs over all units j to which
the input unit i sends connections (for example, over all units in the ﬁrst hidden
layer in the layered topology considered earlier). We now write down a recursive
backpropagation formula to determine the derivatives ∂yk/∂aj
∂yk
∂aj
=

l
∂yk
∂al
∂al
∂aj
=
h′(aj)

l
wlj
∂yk
∂al
(5.74)
where the sum runs over all units l to which unit j sends connections (corresponding
to the ﬁrst index of wlj). Again, we have made use of (5.48) and (5.49). This
backpropagation starts at the output units for which the required derivatives can be
found directly from the functional form of the output-unit activation function. For
instance, if we have individual sigmoidal activation functions at each output unit,
then
∂yk
∂aj
= δkjσ′(aj)
(5.75)
whereas for softmax outputs we have
∂yk
∂aj
= δkjyk −ykyj.
(5.76)
We can summarize the procedure for evaluating the Jacobian matrix as follows.
Apply the input vector corresponding to the point in input space at which the Ja-
cobian matrix is to be found, and forward propagate in the usual way to obtain the

5.4. The Hessian Matrix
activations of all of the hidden and output units in the network. Next, for each row
k of the Jacobian matrix, corresponding to the output unit k, backpropagate using
the recursive relation (5.74), starting with (5.75) or (5.76), for all of the hidden units
in the network. Finally, use (5.73) to do the backpropagation to the inputs. The
Jacobian can also be evaluated using an alternative forward propagation formalism,
which can be derived in an analogous way to the backpropagation approach given
here.
Exercise 5.15
Again, the implementation of such algorithms can be checked by using numeri-
cal differentiation in the form
∂yk
∂xi
= yk(xi + ϵ) −yk(xi −ϵ)
2ϵ
+ O(ϵ2)
(5.77)
which involves 2D forward propagations for a network having D inputs.
5.4. The Hessian Matrix
We have shown how the technique of backpropagation can be used to obtain the ﬁrst
derivatives of an error function with respect to the weights in the network. Back-
propagation can also be used to evaluate the second derivatives of the error, given
by
∂2E
∂wji∂wlk
.
(5.78)
Note that it is sometimes convenient to consider all of the weight and bias parameters
as elements wi of a single vector, denoted w, in which case the second derivatives
form the elements Hij of the Hessian matrix H, where i, j ∈{1, . . . , W} and W is
the total number of weights and biases. The Hessian plays an important role in many
aspects of neural computing, including the following:
1. Several nonlinear optimization algorithms used for training neural networks
are based on considerations of the second-order properties of the error surface,
which are controlled by the Hessian matrix (Bishop and Nabney, 2008).
2. The Hessian forms the basis of a fast procedure for re-training a feed-forward
network following a small change in the training data (Bishop, 1991).
3. The inverse of the Hessian has been used to identify the least signiﬁcant weights
in a network as part of network ‘pruning’ algorithms (Le Cun et al., 1990).
4. The Hessian plays a central role in the Laplace approximation for a Bayesian
neural network (see Section 5.7). Its inverse is used to determine the predic-
tive distribution for a trained network, its eigenvalues determine the values of
hyperparameters, and its determinant is used to evaluate the model evidence.
Various approximation schemes have been used to evaluate the Hessian matrix
for a neural network. However, the Hessian can also be calculated exactly using an
extension of the backpropagation technique.

5. NEURAL NETWORKS
An important consideration for many applications of the Hessian is the efﬁciency
with which it can be evaluated. If there are W parameters (weights and biases) in the
network, then the Hessian matrix has dimensions W × W and so the computational
effort needed to evaluate the Hessian will scale like O(W 2) for each pattern in the
data set. As we shall see, there are efﬁcient methods for evaluating the Hessian
whose scaling is indeed O(W 2).
5.4.1
Diagonal approximation
Some of the applications for the Hessian matrix discussed above require the
inverse of the Hessian, rather than the Hessian itself. For this reason, there has
been some interest in using a diagonal approximation to the Hessian, in other words
one that simply replaces the off-diagonal elements with zeros, because its inverse is
trivial to evaluate. Again, we shall consider an error function that consists of a sum
of terms, one for each pattern in the data set, so that E = 
n En. The Hessian can
then be obtained by considering one pattern at a time, and then summing the results
over all patterns. From (5.48), the diagonal elements of the Hessian, for pattern n,
can be written
∂2En
∂w2
ji
= ∂2En
∂a2
j
z2
i .
(5.79)
Using (5.48) and (5.49), the second derivatives on the right-hand side of (5.79) can
be found recursively using the chain rule of differential calculus to give a backprop-
agation equation of the form
∂2En
∂a2
j
= h′(aj)2 
k

k′
wkjwk′j
∂2En
∂ak∂ak′ + h′′(aj)

k
wkj
∂En
∂ak
.
(5.80)
If we now neglect off-diagonal elements in the second-derivative terms, we obtain
(Becker and Le Cun, 1989; Le Cun et al., 1990)
∂2En
∂a2
j
= h′(aj)2 
k
w2
kj
∂2En
∂a2
k
+ h′′(aj)

k
wkj
∂En
∂ak
.
(5.81)
Note that the number of computational steps required to evaluate this approximation
is O(W), where W is the total number of weight and bias parameters in the network,
compared with O(W 2) for the full Hessian.
Ricotti et al. (1988) also used the diagonal approximation to the Hessian, but
they retained all terms in the evaluation of ∂2En/∂a2
j and so obtained exact expres-
sions for the diagonal terms. Note that this no longer has O(W) scaling. The major
problem with diagonal approximations, however, is that in practice the Hessian is
typically found to be strongly nondiagonal, and so these approximations, which are
driven mainly be computational convenience, must be treated with care.

5.4. The Hessian Matrix
5.4.2
Outer product approximation
When neural networks are applied to regression problems, it is common to use
a sum-of-squares error function of the form
E = 1
N

n=1
(yn −tn)2
(5.82)
where we have considered the case of a single output in order to keep the notation
simple (the extension to several outputs is straightforward). We can then write the
Exercise 5.16
Hessian matrix in the form
H = ∇∇E =
N

n=1
∇yn∇yn +
N

n=1
(yn −tn)∇∇yn.
(5.83)
If the network has been trained on the data set, and its outputs yn happen to be very
close to the target values tn, then the second term in (5.83) will be small and can
be neglected. More generally, however, it may be appropriate to neglect this term
by the following argument. Recall from Section 1.5.5 that the optimal function that
minimizes a sum-of-squares loss is the conditional average of the target data. The
quantity (yn −tn) is then a random variable with zero mean. If we assume that its
value is uncorrelated with the value of the second derivative term on the right-hand
side of (5.83), then the whole term will average to zero in the summation over n.
Exercise 5.17
By neglecting the second term in (5.83), we arrive at the Levenberg–Marquardt
approximation or outer product approximation (because the Hessian matrix is built
up from a sum of outer products of vectors), given by
H ≃
N

n=1
bnbT
n
(5.84)
where bn = ∇yn = ∇an because the activation function for the output units is
simply the identity. Evaluation of the outer product approximation for the Hessian
is straightforward as it only involves ﬁrst derivatives of the error function, which
can be evaluated efﬁciently in O(W) steps using standard backpropagation. The
elements of the matrix can then be found in O(W 2) steps by simple multiplication.
It is important to emphasize that this approximation is only likely to be valid for a
network that has been trained appropriately, and that for a general network mapping
the second derivative terms on the right-hand side of (5.83) will typically not be
negligible.
In the case of the cross-entropy error function for a network with logistic sigmoid
output-unit activation functions, the corresponding approximation is given by
Exercise 5.19
H ≃
N

n=1
yn(1 −yn)bnbT
n.
(5.85)
An analogous result can be obtained for multiclass networks having softmax output-
unit activation functions.
Exercise 5.20

5. NEURAL NETWORKS
5.4.3
Inverse Hessian
We can use the outer-product approximation to develop a computationally ef-
ﬁcient procedure for approximating the inverse of the Hessian (Hassibi and Stork,
1993). First we write the outer-product approximation in matrix notation as
HN =
N

n=1
bnbT
n
(5.86)
where bn ≡∇wan is the contribution to the gradient of the output unit activation
arising from data point n. We now derive a sequential procedure for building up the
Hessian by including data points one at a time. Suppose we have already obtained
the inverse Hessian using the ﬁrst L data points. By separating off the contribution
from data point L + 1, we obtain
HL+1 = HL + bL+1bT
L+1.
(5.87)
In order to evaluate the inverse of the Hessian, we now consider the matrix identity

M + vvT−1 = M−1 −(M−1v)

vTM−1
1 + vTM−1v
(5.88)
where I is the unit matrix, which is simply a special case of the Woodbury identity
(C.7). If we now identify HL with M and bL+1 with v, we obtain
H−1
L+1 = H−1
L −H−1
L bL+1bT
L+1H−1
L
1 + bT
L+1H−1
L bL+1
.
(5.89)
In this way, data points are sequentially absorbed until L+1 = N and the whole data
set has been processed. This result therefore represents a procedure for evaluating
the inverse of the Hessian using a single pass through the data set. The initial matrix
H0 is chosen to be αI, where α is a small quantity, so that the algorithm actually
ﬁnds the inverse of H + αI. The results are not particularly sensitive to the precise
value of α. Extension of this algorithm to networks having more than one output is
straightforward.
Exercise 5.21
We note here that the Hessian matrix can sometimes be calculated indirectly as
part of the network training algorithm. In particular, quasi-Newton nonlinear opti-
mization algorithms gradually build up an approximation to the inverse of the Hes-
sian during training. Such algorithms are discussed in detail in Bishop and Nabney
(2008).
5.4.4
Finite differences
As in the case of the ﬁrst derivatives of the error function, we can ﬁnd the second
derivatives by using ﬁnite differences, with accuracy limited by numerical precision.
If we perturb each possible pair of weights in turn, we obtain
∂2E
∂wji∂wlk
=
4ϵ2 {E(wji + ϵ, wlk + ϵ) −E(wji + ϵ, wlk −ϵ)
−E(wji −ϵ, wlk + ϵ) + E(wji −ϵ, wlk −ϵ)} + O(ϵ2).
(5.90)

5.4. The Hessian Matrix
Again, by using a symmetrical central differences formulation, we ensure that the
residual errors are O(ϵ2) rather than O(ϵ). Because there are W 2 elements in the
Hessian matrix, and because the evaluation of each element requires four forward
propagations each needing O(W) operations (per pattern), we see that this approach
will require O(W 3) operations to evaluate the complete Hessian. It therefore has
poor scaling properties, although in practice it is very useful as a check on the soft-
ware implementation of backpropagation methods.
A more efﬁcient version of numerical differentiation can be found by applying
central differences to the ﬁrst derivatives of the error function, which are themselves
calculated using backpropagation. This gives
∂2E
∂wji∂wlk
= 1
2ϵ

 ∂E
∂wji
(wlk + ϵ) −∂E
∂wji
(wlk −ϵ)

+ O(ϵ2).
(5.91)
Because there are now only W weights to be perturbed, and because the gradients
can be evaluated in O(W) steps, we see that this method gives the Hessian in O(W 2)
operations.
5.4.5
Exact evaluation of the Hessian
So far, we have considered various approximation schemes for evaluating the
Hessian matrix or its inverse. The Hessian can also be evaluated exactly, for a net-
work of arbitrary feed-forward topology, using extension of the technique of back-
propagation used to evaluate ﬁrst derivatives, which shares many of its desirable
features including computational efﬁciency (Bishop, 1991; Bishop, 1992). It can be
applied to any differentiable error function that can be expressed as a function of
the network outputs and to networks having arbitrary differentiable activation func-
tions. The number of computational steps needed to evaluate the Hessian scales
like O(W 2). Similar algorithms have also been considered by Buntine and Weigend
(1993).
Here we consider the speciﬁc case of a network having two layers of weights,
for which the required equations are easily derived. We shall use indices i and i′
Exercise 5.22
to denote inputs, indices j and j′ to denoted hidden units, and indices k and k′ to
denote outputs. We ﬁrst deﬁne
δk = ∂En
∂ak
,
Mkk′ ≡
∂2En
∂ak∂ak′
(5.92)
where En is the contribution to the error from data point n. The Hessian matrix for
this network can then be considered in three separate blocks as follows.
1. Both weights in the second layer:
∂2En
∂w(2)
kj ∂w(2)
k′j′
= zjzj′Mkk′.
(5.93)

5. NEURAL NETWORKS
2. Both weights in the ﬁrst layer:
∂2En
∂w(1)
ji ∂w(1)
j′i′
= xixi′h′′(aj′)Ijj′

k
w(2)
kj′δk
+xixi′h′(aj′)h′(aj)

k

k′
w(2)
k′j′w(2)
kj Mkk′.
(5.94)
3. One weight in each layer:
∂2En
∂w(1)
ji ∂w(2)
kj′
= xih′(aj′)

δkIjj′ + zj

k′
w(2)
k′j′Hkk′

.
(5.95)
Here Ijj′ is the j, j′ element of the identity matrix. If one or both of the weights is
a bias term, then the corresponding expressions are obtained simply by setting the
appropriate activation(s) to 1. Inclusion of skip-layer connections is straightforward.
Exercise 5.23
5.4.6
Fast multiplication by the Hessian
For many applications of the Hessian, the quantity of interest is not the Hessian
matrix H itself but the product of H with some vector v. We have seen that the
evaluation of the Hessian takes O(W 2) operations, and it also requires storage that is
O(W 2). The vector vTH that we wish to calculate, however, has only W elements,
so instead of computing the Hessian as an intermediate step, we can instead try to
ﬁnd an efﬁcient approach to evaluating vTH directly in a way that requires only
O(W) operations.
To do this, we ﬁrst note that
vTH = vT∇(∇E)
(5.96)
where ∇denotes the gradient operator in weight space. We can then write down
the standard forward-propagation and backpropagation equations for the evaluation
of ∇E and apply (5.96) to these equations to give a set of forward-propagation and
backpropagation equations for the evaluation of vTH (Møller, 1993; Pearlmutter,
1994). This corresponds to acting on the original forward-propagation and back-
propagation equations with a differential operator vT∇. Pearlmutter (1994) used the
notation R{·} to denote the operator vT∇, and we shall follow this convention. The
analysis is straightforward and makes use of the usual rules of differential calculus,
together with the result
R{w} = v.
(5.97)
The technique is best illustrated with a simple example, and again we choose a
two-layer network of the form shown in Figure 5.1, with linear output units and a
sum-of-squares error function. As before, we consider the contribution to the error
function from one pattern in the data set. The required vector is then obtained as

5.4. The Hessian Matrix
usual by summing over the contributions from each of the patterns separately. For
the two-layer network, the forward-propagation equations are given by
aj
=

i
wjixi
(5.98)
zj
=
h(aj)
(5.99)
yk
=

j
wkjzj.
(5.100)
We now act on these equations using the R{·} operator to obtain a set of forward
propagation equations in the form
R{aj}
=

i
vjixi
(5.101)
R{zj}
=
h′(aj)R{aj}
(5.102)
R{yk}
=

j
wkjR{zj} +

j
vkjzj
(5.103)
where vji is the element of the vector v that corresponds to the weight wji. Quan-
tities of the form R{zj}, R{aj} and R{yk} are to be regarded as new variables
whose values are found using the above equations.
Because we are considering a sum-of-squares error function, we have the fol-
lowing standard backpropagation expressions:
δk
=
yk −tk
(5.104)
δj
=
h′(aj)

k
wkjδk.
(5.105)
A
