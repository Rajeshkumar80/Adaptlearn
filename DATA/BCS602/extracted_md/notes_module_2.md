<!-- PROVENANCE: subject_code=BCS602 | subject_name=Machine Learning | semester=6 | module=2 | source_type=MODULE_NOTES | source_file=module2.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS602 — Module 2

## Supervised Learning

**Subject:** BCS602 (Machine Learning)
**Module:** Module 2
**Content type:** textbook_fallback
**Sources:** T1_Pattern_Recognition_and_Machine_Learning_Bishop.txt

---

his are twofold. First, real
data will often be conﬁned to a region of the space having lower effective dimension-
ality, and in particular the directions over which important variations in the target
variables occur may be so conﬁned. Second, real data will typically exhibit some
smoothness properties (at least locally) so that for the most part small changes in the
input variables will produce small changes in the target variables, and so we can ex-
ploit local interpolation-like techniques to allow us to make predictions of the target
variables for new values of the input variables. Successful pattern recognition tech-
niques exploit one or both of these properties. Consider, for example, an application
in manufacturing in which images are captured of identical planar objects on a con-
veyor belt, in which the goal is to determine their orientation. Each image is a point
Plot of the probability density with
respect to radius r of a Gaus-
sian distribution for various values
of the dimensionality D.
In a
high-dimensional space, most of the
probability mass of a Gaussian is lo-
cated within a thin shell at a speciﬁc
radius.
D = 1
D = 2
D = 20
r
p(r)

1. INTRODUCTION
in a high-dimensional space whose dimensionality is determined by the number of
pixels. Because the objects can occur at different positions within the image and
in different orientations, there are three degrees of freedom of variability between
images, and a set of images will live on a three dimensional manifold embedded
within the high-dimensional space. Due to the complex relationships between the
object position or orientation and the pixel intensities, this manifold will be highly
nonlinear. If the goal is to learn a model that can take an input image and output the
orientation of the object irrespective of its position, then there is only one degree of
freedom of variability within the manifold that is signiﬁcant.
1.5. Decision Theory
We have seen in Section 1.2 how probability theory provides us with a consistent
mathematical framework for quantifying and manipulating uncertainty. Here we
turn to a discussion of decision theory that, when combined with probability theory,
allows us to make optimal decisions in situations involving uncertainty such as those
encountered in pattern recognition.
Suppose we have an input vector x together with a corresponding vector t of
target variables, and our goal is to predict t given a new value for x. For regression
problems, t will comprise continuous variables, whereas for classiﬁcation problems
t will represent class labels. The joint probability distribution p(x, t) provides a
complete summary of the uncertainty associated with these variables. Determination
of p(x, t) from a set of training data is an example of inference and is typically a
very difﬁcult problem whose solution forms the subject of much of this book. In
a practical application, however, we must often make a speciﬁc prediction for the
value of t, or more generally take a speciﬁc action based on our understanding of the
values t is likely to take, and this aspect is the subject of decision theory.
Consider, for example, a medical diagnosis problem in which we have taken an
X-ray image of a patient, and we wish to determine whether the patient has cancer
or not. In this case, the input vector x is the set of pixel intensities in the image,
and output variable t will represent the presence of cancer, which we denote by the
class C1, or the absence of cancer, which we denote by the class C2. We might, for
instance, choose t to be a binary variable such that t = 0 corresponds to class C1 and
t = 1 corresponds to class C2. We shall see later that this choice of label values is
particularly convenient for probabilistic models. The general inference problem then
involves determining the joint distribution p(x, Ck), or equivalently p(x, t), which
gives us the most complete probabilistic description of the situation. Although this
can be a very useful and informative quantity, in the end we must decide either to
give treatment to the patient or not, and we would like this choice to be optimal
in some appropriate sense (Duda and Hart, 1973). This is the decision step, and
it is the subject of decision theory to tell us how to make optimal decisions given
the appropriate probabilities. We shall see that the decision stage is generally very
simple, even trivial, once we have solved the inference problem.
Here we give an introduction to the key ideas of decision theory as required for

1.5. Decision Theory
the rest of the book. Further background, as well as more detailed accounts, can be
found in Berger (1985) and Bather (2000).
Before giving a more detailed analysis, let us ﬁrst consider informally how we
might expect probabilities to play a role in making decisions. When we obtain the
X-ray image x for a new patient, our goal is to decide which of the two classes to
assign to the image. We are interested in the probabilities of the two classes given
the image, which are given by p(Ck|x). Using Bayes’ theorem, these probabilities
can be expressed in the form
p(Ck|x) = p(x|Ck)p(Ck)
p(x)
.
(1.77)
Note that any of the quantities appearing in Bayes’ theorem can be obtained from
the joint distribution p(x, Ck) by either marginalizing or conditioning with respect to
the appropriate variables. We can now interpret p(Ck) as the prior probability for the
class Ck, and p(Ck|x) as the corresponding posterior probability. Thus p(C1) repre-
sents the probability that a person has cancer, before we take the X-ray measurement.
Similarly, p(C1|x) is the corresponding probability, revised using Bayes’ theorem in
light of the information contained in the X-ray. If our aim is to minimize the chance
of assigning x to the wrong class, then intuitively we would choose the class having
the higher posterior probability. We now show that this intuition is correct, and we
also discuss more general criteria for making decisions.
1.5.1
Minimizing the misclassiﬁcation rate
Suppose that our goal is simply to make as few misclassiﬁcations as possible.
We need a rule that assigns each value of x to one of the available classes. Such a
rule will divide the input space into regions Rk called decision regions, one for each
class, such that all points in Rk are assigned to class Ck. The boundaries between
decision regions are called decision boundaries or decision surfaces. Note that each
decision region need not be contiguous but could comprise some number of disjoint
regions. We shall encounter examples of decision boundaries and decision regions in
later chapters. In order to ﬁnd the optimal decision rule, consider ﬁrst of all the case
of two classes, as in the cancer problem for instance. A mistake occurs when an input
vector belonging to class C1 is assigned to class C2 or vice versa. The probability of
this occurring is given by
p(mistake)
=
p(x ∈R1, C2) + p(x ∈R2, C1)
=

R1
p(x, C2) dx +

R2
p(x, C1) dx.
(1.78)
We are free to choose the decision rule that assigns each point x to one of the two
classes. Clearly to minimize p(mistake) we should arrange that each x is assigned to
whichever class has the smaller value of the integrand in (1.78). Thus, if p(x, C1) >
p(x, C2) for a given value of x, then we should assign that x to class C1. From the
product rule of probability we have p(x, Ck) = p(Ck|x)p(x). Because the factor
p(x) is common to both terms, we can restate this result as saying that the minimum

1. INTRODUCTION
R1
R2
x0
x
p(x, C1)
p(x, C2)
x
Schematic illustration of the joint probabilities p(x, Ck) for each of two classes plotted
against x, together with the decision boundary x = bx. Values of x ⩾bx are classiﬁed as
class C2 and hence belong to decision region R2, whereas points x < bx are classiﬁed
as C1 and belong to R1. Errors arise from the blue, green, and red regions, so that for
x < bx the errors are due to points from class C2 being misclassiﬁed as C1 (represented by
the sum of the red and green regions), and conversely for points in the region x ⩾bx the
errors are due to points from class C1 being misclassiﬁed as C2 (represented by the blue
region). As we vary the location bx of the decision boundary, the combined areas of the
blue and green regions remains constant, whereas the size of the red region varies. The
optimal choice for bx is where the curves for p(x, C1) and p(x, C2) cross, corresponding to
bx = x0, because in this case the red region disappears. This is equivalent to the minimum
misclassiﬁcation rate decision rule, which assigns each value of x to the class having the
higher posterior probability p(Ck|x).
probability of making a mistake is obtained if each value of x is assigned to the class
for which the posterior probability p(Ck|x) is largest. This result is illustrated for
two classes, and a single input variable x, in Figure 1.24.
For the more general case of K classes, it is slightly easier to maximize the
probability of being correct, which is given by
p(correct)
=
K

k=1
p(x ∈Rk, Ck)
=
K

k=1

Rk
p(x, Ck) dx
(1.79)
which is maximized when the regions Rk are chosen such that each x is assigned
to the class for which p(x, Ck) is largest. Again, using the product rule p(x, Ck) =
p(Ck|x)p(x), and noting that the factor of p(x) is common to all terms, we see
that each x should be assigned to the class having the largest posterior probability
p(Ck|x).

1.5. Decision Theory
An example of a loss matrix with ele-
ments Lkj for the cancer treatment problem. The rows
correspond to the true class, whereas the columns cor-
respond to the assignment of class made by our deci-
sion criterion.
 cancer
normal
cancer
1000
normal

1.5.2
Minimizing the expected loss
For many applications, our objective will be more complex than simply mini-
mizing the number of misclassiﬁcations. Let us consider again the medical diagnosis
problem. We note that, if a patient who does not have cancer is incorrectly diagnosed
as having cancer, the consequences may be some patient distress plus the need for
further investigations. Conversely, if a patient with cancer is diagnosed as healthy,
the result may be premature death due to lack of treatment. Thus the consequences
of these two types of mistake can be dramatically different. It would clearly be better
to make fewer mistakes of the second kind, even if this was at the expense of making
more mistakes of the ﬁrst kind.
We can formalize such issues through the introduction of a loss function, also
called a cost function, which is a single, overall measure of loss incurred in taking
any of the available decisions or actions. Our goal is then to minimize the total loss
incurred. Note that some authors consider instead a utility function, whose value
they aim to maximize. These are equivalent concepts if we take the utility to be
simply the negative of the loss, and throughout this text we shall use the loss function
convention. Suppose that, for a new value of x, the true class is Ck and that we assign
x to class Cj (where j may or may not be equal to k). In so doing, we incur some
level of loss that we denote by Lkj, which we can view as the k, j element of a loss
matrix. For instance, in our cancer example, we might have a loss matrix of the form
shown in Figure 1.25. This particular loss matrix says that there is no loss incurred
if the correct decision is made, there is a loss of 1 if a healthy patient is diagnosed as
having cancer, whereas there is a loss of 1000 if a patient having cancer is diagnosed
as healthy.
The optimal solution is the one which minimizes the loss function. However,
the loss function depends on the true class, which is unknown. For a given input
vector x, our uncertainty in the true class is expressed through the joint probability
distribution p(x, Ck) and so we seek instead to minimize the average loss, where the
average is computed with respect to this distribution, which is given by
E[L] =

k

j

Rj
Lkjp(x, Ck) dx.
(1.80)
Each x can be assigned independently to one of the decision regions Rj. Our goal
is to choose the regions Rj in order to minimize the expected loss (1.80), which
implies that for each x we should minimize 
k Lkjp(x, Ck). As before, we can use
the product rule p(x, Ck) = p(Ck|x)p(x) to eliminate the common factor of p(x).
Thus the decision rule that minimizes the expected loss is the one that assigns each

1. INTRODUCTION
Illustration of the reject option. Inputs
x such that the larger of the two poste-
rior probabilities is less than or equal to
some threshold θ will be rejected.
x
p(C1|x)
p(C2|x)
0.0
1.0
θ
reject region
new x to the class j for which the quantity

k
Lkjp(Ck|x)
(1.81)
is a minimum. This is clearly trivial to do, once we know the posterior class proba-
bilities p(Ck|x).
1.5.3
The reject option
We have seen that classiﬁcation errors arise from the regions of input space
where the largest of the posterior probabilities p(Ck|x) is signiﬁcantly less than unity,
or equivalently where the joint distributions p(x, Ck) have comparable values. These
are the regions where we are relatively uncertain about class membership. In some
applications, it will be appropriate to avoid making decisions on the difﬁcult cases
in anticipation of a lower error rate on those examples for which a classiﬁcation de-
cision is made. This is known as the reject option. For example, in our hypothetical
medical illustration, it may be appropriate to use an automatic system to classify
those X-ray images for which there is little doubt as to the correct class, while leav-
ing a human expert to classify the more ambiguous cases. We can achieve this by
introducing a threshold θ and rejecting those inputs x for which the largest of the
posterior probabilities p(Ck|x) is less than or equal to θ. This is illustrated for the
case of two classes, and a single continuous input variable x, in Figure 1.26. Note
that setting θ = 1 will ensure that all examples are rejected, whereas if there are K
classes then setting θ < 1/K will ensure that no examples are rejected. Thus the
fraction of examples that get rejected is controlled by the value of θ.
We can easily extend the reject criterion to minimize the expected loss, when
a loss matrix is given, taking account of the loss incurred when a reject decision is
made.
Exercise 1.24
1.5.4
Inference and decision
We have broken the classiﬁcation problem down into two separate stages, the
inference stage in which we use training data to learn a model for p(Ck|x), and the

1.5. Decision Theory
subsequent decision stage in which we use these posterior probabilities to make op-
timal class assignments. An alternative possibility would be to solve both problems
together and simply learn a function that maps inputs x directly into decisions. Such
a function is called a discriminant function.
In fact, we can identify three distinct approaches to solving decision problems,
all of which have been used in practical applications. These are given, in decreasing
order of complexity, by:
(a) First solve the inference problem of determining the class-conditional densities
p(x|Ck) for each class Ck individually. Also separately infer the prior class
probabilities p(Ck). Then use Bayes’ theorem in the form
p(Ck|x) = p(x|Ck)p(Ck)
p(x)
(1.82)
to ﬁnd the posterior class probabilities p(Ck|x). As usual, the denominator
in Bayes’ theorem can be found in terms of the quantities appearing in the
numerator, because
p(x) =

k
p(x|Ck)p(Ck).
(1.83)
Equivalently, we can model the joint distribution p(x, Ck) directly and then
normalize to obtain the posterior probabilities. Having found the posterior
probabilities, we use decision theory to determine class membership for each
new input x. Approaches that explicitly or implicitly model the distribution of
inputs as well as outputs are known as generative models, because by sampling
from them it is possible to generate synthetic data points in the input space.
(b) First solve the inference problem of determining the posterior class probabilities
p(Ck|x), and then subsequently use decision theory to assign each new x to
one of the classes. Approaches that model the posterior probabilities directly
are called discriminative models.
(c) Find a function f(x), called a discriminant function, which maps each input x
directly onto a class label. For instance, in the case of two-class problems,
f(·) might be binary valued and such that f = 0 represents class C1 and f = 1
represents class C2. In this case, probabilities play no role.
Let us consider the relative merits of these three alternatives. Approach (a) is the
most demanding because it involves ﬁnding the joint distribution over both x and
Ck. For many applications, x will have high dimensionality, and consequently we
may need a large training set in order to be able to determine the class-conditional
densities to reasonable accuracy. Note that the class priors p(Ck) can often be esti-
mated simply from the fractions of the training set data points in each of the classes.
One advantage of approach (a), however, is that it also allows the marginal density
of data p(x) to be determined from (1.83). This can be useful for detecting new data
points that have low probability under the model and for which the predictions may

1. INTRODUCTION
p(x|C1)
p(x|C2)
x
class densities
0.2
0.4
0.6
0.8
x
p(C1|x)
p(C2|x)
0.2
0.4
0.6
0.8
0.2
0.4
0.6
0.8
1.2
Example of the class-conditional densities for two classes having a single input variable x (left
plot) together with the corresponding posterior probabilities (right plot). Note that the left-hand mode of the
class-conditional density p(x|C1), shown in blue on the left plot, has no effect on the posterior probabilities. The
vertical green line in the right plot shows the decision boundary in x that gives the minimum misclassiﬁcation
rate.
be of low accuracy, which is known as outlier detection or novelty detection (Bishop,
1994; Tarassenko, 1995).
However, if we only wish to make classiﬁcation decisions, then it can be waste-
ful of computational resources, and excessively demanding of data, to ﬁnd the joint
distribution p(x, Ck) when in fact we only really need the posterior probabilities
p(Ck|x), which can be obtained directly through approach (b). Indeed, the class-
conditional densities may contain a lot of structure that has little effect on the pos-
terior probabilities, as illustrated in Figure 1.27. There has been much interest in
exploring the relative merits of generative and discriminative approaches to machine
learning, and in ﬁnding ways to combine them (Jebara, 2004; Lasserre et al., 2006).
An even simpler approach is (c) in which we use the training data to ﬁnd a
discriminant function f(x) that maps each x directly onto a class label, thereby
combining the inference and decision stages into a single learning problem. In the
example of Figure 1.27, this would correspond to ﬁnding the value of x shown by
the vertical green line, because this is the decision boundary giving the minimum
probability of misclassiﬁcation.
With option (c), however, we no longer have access to the posterior probabilities
p(Ck|x). There are many powerful reasons for wanting to compute the posterior
probabilities, even if we subsequently use them to make decisions. These include:
Minimizing risk. Consider a problem in which the elements of the loss matrix are
subjected to revision from time to time (such as might occur in a ﬁnancial

1.5. Decision Theory
application). If we know the posterior probabilities, we can trivially revise the
minimum risk decision criterion by modifying (1.81) appropriately. If we have
only a discriminant function, then any change to the loss matrix would require
that we return to the training data and solve the classiﬁcation problem afresh.
Reject option. Posterior probabilities allow us to determine a rejection criterion that
will minimize the misclassiﬁcation rate, or more generally the expected loss,
for a given fraction of rejected data points.
Compensating for class priors. Consider our medical X-ray problem again, and
suppose that we have collected a large number of X-ray images from the gen-
eral population for use as training data in order to build an automated screening
system. Because cancer is rare amongst the general population, we might ﬁnd
that, say, only 1 in every 1,000 examples corresponds to the presence of can-
cer. If we used such a data set to train an adaptive model, we could run into
severe difﬁculties due to the small proportion of the cancer class. For instance,
a classiﬁer that assigned every point to the normal class would already achieve
99.9% accuracy and it would be difﬁcult to avoid this trivial solution. Also,
even a large data set will contain very few examples of X-ray images corre-
sponding to cancer, and so the learning algorithm will not be exposed to a
broad range of examples of such images and hence is not likely to generalize
well. A balanced data set in which we have selected equal numbers of exam-
ples from each of the classes would allow us to ﬁnd a more accurate model.
However, we then have to compensate for the effects of our modiﬁcations to
the training data. Suppose we have used such a modiﬁed data set and found
models for the posterior probabilities. From Bayes’ theorem (1.82), we see that
the posterior probabilities are proportional to the prior probabilities, which we
can interpret as the fractions of points in each class. We can therefore simply
take the posterior probabilities obtained from our artiﬁcially balanced data set
and ﬁrst divide by the class fractions in that data set and then multiply by the
class fractions in the population to which we wish to apply the model. Finally,
we need to normalize to ensure that the new posterior probabilities sum to one.
Note that this procedure cannot be applied if we have learned a discriminant
function directly instead of determining posterior probabilities.
Combining models. For complex applications, we may wish to break the problem
into a number of smaller subproblems each of which can be tackled by a sep-
arate module. For example, in our hypothetical medical diagnosis problem,
we may have information available from, say, blood tests as well as X-ray im-
ages. Rather than combine all of this heterogeneous information into one huge
input space, it may be more effective to build one system to interpret the X-
ray images and a different one to interpret the blood data. As long as each of
the two models gives posterior probabilities for the classes, we can combine
the outputs systematically using the rules of probability. One simple way to
do this is to assume that, for each class separately, the distributions of inputs
for the X-ray images, denoted by xI, and the blood data, denoted by xB, are

1. INTRODUCTION
independent, so that
p(xI, xB|Ck) = p(xI|Ck)p(xB|Ck).
(1.84)
This is an example of conditional independence property, because the indepen-
Section 8.2
dence holds when the distribution is conditioned on the class Ck. The posterior
probability, given both the X-ray and blood data, is then given by
p(Ck|xI, xB)
∝
p(xI, xB|Ck)p(Ck)
∝
p(xI|Ck)p(xB|Ck)p(Ck)
∝
p(Ck|xI)p(Ck|xB)
p(Ck)
(1.85)
Thus we need the class prior probabilities p(Ck), which we can easily estimate
from the fractions of data points in each class, and then we need to normalize
the resulting posterior probabilities so they sum to one. The particular condi-
tional independence assumption (1.84) is an example of the naive Bayes model.
Section 8.2.2
Note that the joint marginal distribution p(xI, xB) will typically not factorize
under this model. We shall see in later chapters how to construct models for
combining data that do not require the conditional independence assumption
(1.84).
1.5.5
Loss functions for regression
So far, we have discussed decision theory in the context of classiﬁcation prob-
lems. We now turn to the case of regression problems, such as the curve ﬁtting
example discussed earlier. The decision stage consists of choosing a speciﬁc esti-
Section 1.1
mate y(x) of the value of t for each input x. Suppose that in doing so, we incur a
loss L(t, y(x)). The average, or expected, loss is then given by
E[L] =

L(t, y(x))p(x, t) dx dt.
(1.86)
A common choice of loss function in regression problems is the squared loss given
by L(t, y(x)) = {y(x) −t}2. In this case, the expected loss can be written
E[L] =

{y(x) −t}2p(x, t) dx dt.
(1.87)
Our goal is to choose y(x) so as to minimize E[L]. If we assume a completely
ﬂexible function y(x), we can do this formally using the calculus of variations to
Appendix D
give
δE[L]
δy(x) = 2

{y(x) −t}p(x, t) dt = 0.
(1.88)
Solving for y(x), and using the sum and product rules of probability, we obtain
y(x) =

tp(x, t) dt
p(x)
=

tp(t|x) dt = Et[t|x]
(1.89)

1.5. Decision Theory
The regression function y(x),
which minimizes the expected
squared loss, is given by the
mean of the conditional distri-
bution p(t|x).
t
x
x0
y(x0)
y(x)
p(t|x0)
which is the conditional average of t conditioned on x and is known as the regression
function. This result is illustrated in Figure 1.28. It can readily be extended to mul-
tiple target variables represented by the vector t, in which case the optimal solution
is the conditional average y(x) = Et[t|x].
Exercise 1.25
We can also derive this result in a slightly different way, which will also shed
light on the nature of the regression problem. Armed with the knowledge that the
optimal solution is the conditional expectation, we can expand the square term as
follows
{y(x) −t}2 = {y(x) −E[t|x] + E[t|x] −t}2
=
{y(x) −E[t|x]}2 + 2{y(x) −E[t|x]}{E[t|x] −t} + {E[t|x] −t}2
where, to keep the notation uncluttered, we use E[t|x] to denote Et[t|x]. Substituting
into the loss function and performing the integral over t, we see that the cross-term
vanishes and we obtain an expression for the loss function in the form
E[L] =

{y(x) −E[t|x]}2 p(x) dx +

{E[t|x] −t}2p(x) dx.
(1.90)
The function y(x) we seek to determine enters only in the ﬁrst term, which will be
minimized when y(x) is equal to E[t|x], in which case this term will vanish. This
is simply the result that we derived previously and that shows that the optimal least
squares predictor is given by the conditional mean. The second term is the variance
of the distribution of t, averaged over x. It represents the intrinsic variability of
the target data and can be regarded as noise. Because it is independent of y(x), it
represents the irreducible minimum value of the loss function.
As with the classiﬁcation problem, we can either determine the appropriate prob-
abilities and then use these to make optimal decisions, or we can build models that
make decisions directly. Indeed, we can identify three distinct approaches to solving
regression problems given, in order of decreasing complexity, by:
(a) First solve the inference problem of determining the joint density p(x, t). Then
normalize to ﬁnd the conditional density p(t|x), and ﬁnally marginalize to ﬁnd
the conditional mean given by (1.89).

1. INTRODUCTION
(b) First solve the inference problem of determining the conditional density p(t|x),
and then subsequently marginalize to ﬁnd the conditional mean given by (1.89).
(c) Find a regression function y(x) directly from the training data.
The relative merits of these three approaches follow the same lines as for classiﬁca-
tion problems above.
The squared loss is not the only possible choice of loss function for regression.
Indeed, there are situations in which squared loss can lead to very poor results and
where we need to develop more sophisticated approaches. An important example
concerns situations in which the conditional distribution p(t|x) is multimodal, as
often arises in the solution of inverse problems. Here we consider brieﬂy one simple
Section 5.6
generalization of the squared loss, called the Minkowski loss, whose expectation is
given by
E[Lq] =

|y(x) −t|qp(x, t) dx dt
(1.91)
which reduces to the expected squared loss for q = 2. The function |y −t|q is
plotted against y −t for various values of q in Figure 1.29. The minimum of E[Lq]
is given by the conditional mean for q = 2, the conditional median for q = 1, and
the conditional mode for q →0.
Exercise 1.27
1.6. Information Theory
In this chapter, we have discussed a variety of concepts from probability theory and
decision theory that will form the foundations for much of the subsequent discussion
in this book. We close this chapter by introducing some additional concepts from
the ﬁeld of information theory, which will also prove useful in our development of
pattern recognition and machine learning techniques. Again, we shall focus only on
the key concepts, and we refer the reader elsewhere for more detailed discussions
(Viterbi and Omura, 1979; Cover and Thomas, 1991; MacKay, 2003) .
We begin by considering a discrete random variable x and we ask how much
information is received when we observe a speciﬁc value for this variable. The
amount of information can be viewed as the ‘degree of surprise’ on learning the
value of x. If we are told that a highly improbable event has just occurred, we will
have received more information than if we were told that some very likely event
has just occurred, and if we knew that the event was certain to happen we would
receive no information. Our measure of information content will therefore depend
on the probability distribution p(x), and we therefore look for a quantity h(x) that
is a monotonic function of the probability p(x) and that expresses the information
content. The form of h(·) can be found by noting that if we have two events x
and y that are unrelated, then the information gain from observing both of them
should be the sum of the information gained from each of them separately, so that
h(x, y) = h(x) + h(y). Two unrelated events will be statistically independent and
so p(x, y) = p(x)p(y). From these two relationships, it is easily shown that h(x)
must be given by the logarithm of p(x) and so we have
Exercise 1.28

1.6. Information Theory
y −t
|y −t|q
q = 0.3
−2
−1
y −t
|y −t|q
q = 1
−2
−1
y −t
|y −t|q
q = 2
−2
−1
y −t
|y −t|q
q = 10
−2
−1
Plots of the quantity Lq = |y −t|q for various values of q.
h(x) = −log2 p(x)
(1.92)
where the negative sign ensures that information is positive or zero. Note that low
probability events x correspond to high information content. The choice of basis
for the logarithm is arbitrary, and for the moment we shall adopt the convention
prevalent in information theory of using logarithms to the base of 2. In this case, as
we shall see shortly, the units of h(x) are bits (‘binary digits’).
Now suppose that a sender wishes to transmit the value of a random variable to
a receiver. The average amount of information that they transmit in the process is
obtained by taking the expectation of (1.92) with respect to the distribution p(x) and
is given by
H[x] = −

x
p(x) log2 p(x).
(1.93)
This important quantity is called the entropy of the random variable x. Note that
limp→0 p ln p = 0 and so we shall take p(x) ln p(x) = 0 whenever we encounter a
value for x such that p(x) = 0.
So far we have given a rather heuristic motivation for the deﬁnition of informa-

1. INTRODUCTION
tion (1.92) and the corresponding entropy (1.93). We now show that these deﬁnitions
indeed possess useful properties. Consider a random variable x having 8 possible
states, each of which is equally likely. In order to communicate the value of x to
a receiver, we would need to transmit a message of length 3 bits. Notice that the
entropy of this variable is given by
H[x] = −8 × 1
8 log2
8 = 3 bits.
Now consider an example (Cover and Thomas, 1991) of a variable having 8 pos-
sible states {a, b, c, d, e, f, g, h} for which the respective probabilities are given by
( 1
2, 1
4, 1
8, 1
16, 1
64, 1
64, 1
64, 1
64). The entropy in this case is given by
H[x] = −1
2 log2
2 −1
4 log2
4 −1
8 log2
8 −1
16 log2
16 −4
64 log2
64 = 2 bits.
We see that the nonuniform distribution has a smaller entropy than the uniform one,
and we shall gain some insight into this shortly when we discuss the interpretation of
entropy in terms of disorder. For the moment, let us consider how we would transmit
the identity of the variable’s state to a receiver. We could do this, as before, using
a 3-bit number. However, we can take advantage of the nonuniform distribution by
using shorter codes for the more probable events, at the expense of longer codes for
the less probable events, in the hope of getting a shorter average code length. This
can be done by representing the states {a, b, c, d, e, f, g, h} using, for instance, the
following set of code strings: 0, 10, 110, 1110, 111100, 111101, 111110, 111111.
The average length of the code that has to be transmitted is then
average code length = 1
2 × 1 + 1
4 × 2 + 1
8 × 3 + 1
16 × 4 + 4 × 1
64 × 6 = 2 bits
which again is the same as the entropy of the random variable. Note that shorter code
strings cannot be used because it must be possible to disambiguate a concatenation
of such strings into its component parts. For instance, 11001110 decodes uniquely
into the state sequence c, a, d.
This relation between entropy and shortest coding length is a general one. The
noiseless coding theorem (Shannon, 1948) states that the entropy is a lower bound
on the number of bits needed to transmit the state of a random variable.
From now on, we shall switch to the use of natural logarithms in deﬁning en-
tropy, as this will provide a more convenient link with ideas elsewhere in this book.
In this case, the entropy is measured in units of ‘nats’ instead of bits, which differ
simply by a factor of ln 2.
We have introduced the concept of entropy in terms of the average amount of
information needed to specify the state of a random variable. In fact, the concept of
entropy has much earlier origins in physics where it was introduced in the context
of equilibrium thermodynamics and later given a deeper interpretation as a measure
of disorder through developments in statistical mechanics. We can understand this
alternative view of entropy by considering a set of N identical objects that are to be
divided amongst a set of bins, such that there are ni objects in the ith bin. Consider

1.6. Information Theory
the number of different ways of allocating the objects to the bins. There are N
ways to choose the ﬁrst object, (N −1) ways to choose the second object, and
so on, leading to a total of N! ways to allocate all N objects to the bins, where N!
(pronounced ‘factorial N’) denotes the product N ×(N −1)×· · ·×2×1. However,
we don’t wish to distinguish between rearrangements of objects within each bin. In
the ith bin there are ni! ways of reordering the objects, and so the total number of
ways of allocating the N objects to the bins is given by
W =
N!

i ni!
(1.94)
which is called the multiplicity. The entropy is then deﬁned as the logarithm of the
multiplicity scaled by an appropriate constant
H = 1
N ln W = 1
N ln N! −1
N

i
ln ni!.
(1.95)
We now consider the limit N →∞, in which the fractions ni/N are held ﬁxed, and
apply Stirling’s approximation
ln N! ≃N ln N −N
(1.96)
which gives
H = −lim
N→∞

i
ni
N

ln
ni
N

= −

i
pi ln pi
(1.97)
where we have used 
i ni = N. Here pi = limN→∞(ni/N) is the probability
of an object being assigned to the ith bin. In physics terminology, the speciﬁc ar-
rangements of objects in the bins is called a microstate, and the overall distribution
of occupation numbers, expressed through the ratios ni/N, is called a macrostate.
The multiplicity W is also known as the weight of the macrostate.
We can interpret the bins as the states xi of a discrete random variable X, where
p(X = xi) = pi. The entropy of the random variable X is then
H[p] = −

i
p(xi) ln p(xi).
(1.98)
Distributions p(xi) that are sharply peaked around a few values will have a relatively
low entropy, whereas those that are spread more evenly across many values will
have higher entropy, as illustrated in Figure 1.30. Because 0 ⩽pi ⩽1, the entropy
is nonnegative, and it will equal its minimum value of 0 when one of the pi =
1 and all other pj̸=i = 0. The maximum entropy conﬁguration can be found by
maximizing H using a Lagrange multiplier to enforce the normalization constraint
Appendix E
on the probabilities. Thus we maximize
H = −

i
p(xi) ln p(xi) + λ

i
p(xi) −1

(1.99)

1. INTRODUCTION
probabilities
H = 1.77
0.25
0.5
probabilities
H = 3.09
0.25
0.5
Histograms of two probability distributions over 30 bins illustrating the higher value of the entropy
H for the broader distribution. The largest entropy would arise from a uniform distribution that would give H =
−ln(1/30) = 3.40.
from which we ﬁnd that all of the p(xi) are equal and are given by p(xi) = 1/M
where M is the total number of states xi. The corresponding value of the entropy
is then H = ln M. This result can also be derived from Jensen’s inequality (to be
discussed shortly). To verify that the stationary point is indeed a maximum, we can
Exercise 1.29
evaluate the second derivative of the entropy, which gives
∂H
∂p(xi)∂p(xj) = −Iij
pi
(1.100)
where Iij are the elements of the identity matrix.
We can extend the deﬁnition of entropy to include distributions p(x) over con-
tinuous variables x as follows. First divide x into bins of width ∆. Then, assuming
p(x) is continuous, the mean value theorem (Weisstein, 1999) tells us that, for each
such bin, there must exist a value xi such that
 (i+1)∆
i∆
p(x) dx = p(xi)∆.
(1.101)
We can now quantize the continuous variable x by assigning any value x to the value
xi whenever x falls in the ith bin. The probability of observing the value xi is then
p(xi)∆. This gives a discrete distribution for which the entropy takes the form
H∆= −

i
p(xi)∆ln (p(xi)∆) = −

i
p(xi)∆ln p(xi) −ln ∆
(1.102)
where we have used 
i p(xi)∆= 1, which follows from (1.101). We now omit
the second term −ln ∆on the right-hand side of (1.102) and then consider the limit

1.6. Information Theory
∆→0. The ﬁrst term on the right-hand side of (1.102) will approach the integral of
p(x) ln p(x) in this limit so that
lim
∆→0

i
p(xi)∆ln p(xi)

= −

p(x) ln p(x) dx
(1.103)
where the quantity on the right-hand side is called the differential entropy. We see
that the discrete and continuous forms of the entropy differ by a quantity ln ∆, which
diverges in the limit ∆→0. This reﬂects the fact that to specify a continuous
variable very precisely requires a large number of bits. For a density deﬁned over
multiple continuous variables, denoted collectively by the vector x, the differential
entropy is given by
H[x] = −

p(x) ln p(x) dx.
(1.104)
In the case of discrete distributions, we saw that the maximum entropy con-
ﬁguration corresponded to an equal distribution of probabilities across the possible
states of the variable. Let us now consider the maximum entropy conﬁguration for
a continuous variable. In order for this maximum to be well deﬁned, it will be nec-
essary to constrain the ﬁrst and second moments of p(x) as well as preserving the
normalization constraint. We therefore maximize the differential entropy with the
Ludwig Boltzmann
1844–1906
Ludwig Eduard Boltzmann was an
Austrian physicist who created the
ﬁeld of statistical mechanics. Prior
to Boltzmann, the concept of en-
tropy
was
already
known
from
classical thermodynamics where it
quantiﬁes the fact that when we take energy from a
system, not all of that energy is typically available
to do useful work. Boltzmann showed that the ther-
modynamic entropy S, a macroscopic quantity, could
be related to the statistical properties at the micro-
scopic level. This is expressed through the famous
equation S
= k ln W in which W represents the
number of possible microstates in a macrostate, and
k ≃1.38 × 10−23 (in units of Joules per Kelvin) is
known as Boltzmann’s constant.
Boltzmann’s ideas
were disputed by many scientists of they day. One dif-
ﬁculty they saw arose from the second law of thermo-
dynamics, which states that the entropy of a closed
system tends to increase with time. By contrast, at
the microscopic level the classical Newtonian equa-
tions of physics are reversible, and so they found it
difﬁcult to see how the latter could explain the for-
mer.
They didn’t fully appreciate Boltzmann’s argu-
ments, which were statistical in nature and which con-
cluded not that entropy could never decrease over
time but simply that with overwhelming probability it
would generally increase. Boltzmann even had a long-
running dispute with the editor of the leading German
physics journal who refused to let him refer to atoms
and molecules as anything other than convenient the-
oretical constructs. The continued attacks on his work
lead to bouts of depression, and eventually he com-
mitted suicide. Shortly after Boltzmann’s death, new
experiments by Perrin on colloidal suspensions veri-
ﬁed his theories and conﬁrmed the value of the Boltz-
mann constant. The equation S = k ln W is carved on
Boltzmann’s tombstone.

1. INTRODUCTION
three constraints
 ∞
−∞
p(x) dx
=
(1.105)
 ∞
−∞
xp(x) dx
=
µ
(1.106)
 ∞
−∞
(x −µ)2p(x) dx
=
σ2.
(1.107)
The constrained maximization can be performed using Lagrange multipliers so that
Appendix E
we maximize the following functional with respect to p(x)
−
 ∞
−∞
p(x) ln p(x) dx + λ1
 ∞
−∞
p(x) dx −1

+λ2
 ∞
−∞
xp(x) dx −µ

+ λ3
 ∞
−∞
(x −µ)2p(x) dx −σ2

.
Using the calculus of variations, we set the derivative of this functional to zero giving
Appendix D
p(x) = exp 
−1 + λ1 + λ2x + λ3(x −µ)2
.
(1.108)
The Lagrange multipliers can be found by back substitution of this result into the
three constraint equations, leading ﬁnally to the result
Exercise 1.34
p(x) =
(2πσ2)1/2 exp

−(x −µ)2
2σ2

(1.109)
and so the distribution that maximizes the differential entropy is the Gaussian. Note
that we did not constrain the distribution to be nonnegative when we maximized the
entropy. However, because the resulting distribution is indeed nonnegative, we see
with hindsight that such a constraint is not necessary.
If we evaluate the differential entropy of the Gaussian, we obtain
Exercise 1.35
H[x] = 1

1 + ln(2πσ2)
.
(1.110)
Thus we see again that the entropy increases as the distribution becomes broader,
i.e., as σ2 increases. This result also shows that the differential entropy, unlike the
discrete entropy, can be negative, because H(x) < 0 in (1.110) for σ2 < 1/(2πe).
Suppose we have a joint distribution p(x, y) from which we draw pairs of values
of x and y. If a value of x is already known, then the additional information needed
to specify the corresponding value of y is given by −ln p(y|x). Thus the average
additional information needed to specify y can be written as
H[y|x] = −

p(y, x) ln p(y|x) dy dx
(1.111)

1.6. Information Theory
which is called the conditional entropy of y given x. It is easily seen, using the
product rule, that the conditional entropy satisﬁes the relation
Exercise 1.37
H[x, y] = H[y|x] + H[x]
(1.112)
where H[x, y] is the differential entropy of p(x, y) and H[x] is the differential en-
tropy of the marginal distribution p(x). Thus the information needed to describe x
and y is given by the sum of the information needed to describe x alone plus the
additional information required to specify y given x.
1.6.1
Relative entropy and mutual information
So far in this section, we have introduced a number of concepts from information
theory, including the key notion of entropy. We now start to relate these ideas to
pattern recognition. Consider some unknown distribution p(x), and suppose that
we have modelled this using an approximating distribution q(x). If we use q(x) to
construct a coding scheme for the purpose of transmitting values of x to a receiver,
then the average additional amount of information (in nats) required to specify the
value of x (assuming we choose an efﬁcient coding scheme) as a result of using q(x)
instead of the true distribution p(x) is given by
KL(p∥q)
=
−

p(x) ln q(x) dx −

−

p(x) ln p(x) dx

=
−

p(x) ln

q(x)
p(x)

dx.
(1.113)
This is known as the relative entropy or Kullback-Leibler divergence, or KL diver-
gence (Kullback and Leibler, 1951), between the distributions p(x) and q(x). Note
that it is not a symmetrical quantity, that is to say KL(p∥q)̸ ≡KL(q∥p).
We now show that the Kullback-Leibler divergence satisﬁes KL(p∥q) ⩾0 with
equality if, and only if, p(x) = q(x). To do this we ﬁrst introduce the concept of
convex functions. A function f(x) is said to be convex if it has the property that
every chord lies on or above the function, as shown in Figure 1.31. Any value of x
in the interval from x = a to x = b can be written in the form λa + (1 −λ)b where
0 ⩽λ ⩽1. The corresponding point on the chord is given by λf(a) + (1 −λ)f(b),
Claude Shannon
1916–2001
After graduating from Michigan and
MIT, Shannon joined the AT&T Bell
Telephone laboratories in 1941. His
paper ‘A Mathematical Theory of
Communication’ published in the
Bell System Technical Journal in
1948 laid the foundations for modern information the-
ory. This paper introduced the word ‘bit’, and his con-
cept that information could be sent as a stream of 1s
and 0s paved the way for the communications revo-
lution. It is said that von Neumann recommended to
Shannon that he use the term entropy, not only be-
cause of its similarity to the quantity used in physics,
but also because “nobody knows what entropy really
is, so in any discussion you will always have an advan-
tage”.

1. INTRODUCTION
A convex function f(x) is one for which ev-
ery chord (shown in blue) lies on or above
the function (shown in red).
x
a
b
xλ
chord
xλ
f(x)
and the corresponding value of the function is f (λa + (1 −λ)b). Convexity then
implies
f(λa + (1 −λ)b) ⩽λf(a) + (1 −λ)f(b).
(1.114)
This is equivalent to the requirement that the second derivative of the function be
everywhere positive. Examples of convex functions are x ln x (for x > 0) and x2. A
Exercise 1.36
function is called strictly convex if the equality is satisﬁed only for λ = 0 and λ = 1.
If a function has the opposite property, namely that every chord lies on or below the
function, it is called concave, with a corresponding deﬁnition for strictly concave. If
a function f(x) is convex, then −f(x) will be concave.
Using the technique of proof by induction, we can show from (1.114) that a
Exercise 1.38
convex function f(x) satisﬁes
f
 M

i=1
λixi

⩽
M

i=1
λif(xi)
(1.115)
where λi ⩾0 and 
i λi = 1, for any set of points {xi}. The result (1.115) is
known as Jensen’s inequality. If we interpret the λi as the probability distribution
over a discrete variable x taking the values {xi}, then (1.115) can be written
f (E[x]) ⩽E[f(x)]
(1.116)
where E[·] denotes the expectation. For continuous variables, Jensen’s inequality
takes the form
f

xp(x) dx

⩽

f(x)p(x) dx.
(1.117)
We can apply Jensen’s inequality in the form (1.117) to the Kullback-Leibler
divergence (1.113) to give
KL(p∥q) = −

p(x) ln

q(x)
p(x)

dx ⩾−ln

q(x) dx = 0
(1.118)

1.6. Information Theory
where we have used the fact that −ln x is a convex function, together with the nor-
malization condition 
q(x) dx = 1. In fact, −ln x is a strictly convex function,
so the equality will hold if, and only if, q(x) = p(x) for all x. Thus we can in-
terpret the Kullback-Leibler divergence as a measure of the dissimilarity of the two
distributions p(x) and q(x).
We see that there is an intimate relationship between data compression and den-
sity estimation (i.e., the problem of modelling an unknown probability distribution)
because the most efﬁcient compression is achieved when we know the true distri-
bution. If we use a distribution that is different from the true one, then we must
necessarily have a less efﬁcient coding, and on average the additional information
that must be transmitted is (at least) equal to the Kullback-Leibler divergence be-
tween the two distributions.
Suppose that data is being generated from an unknown distribution p(x) that we
wish to model. We can try to approximate this distribution using some parametric
distribution q(x|θ), governed by a set of adjustable parameters θ, for example a
multivariate Gaussian. One way to determine θ is to minimize the Kullback-Leibler
divergence between p(x) and q(x|θ) with respect to θ. We cannot do this directly
because we don’t know p(x). Suppose, however, that we have observed a ﬁnite set
of training points xn, for n = 1, . . . , N, drawn from p(x). Then the expectation
with respect to p(x) can be approximated by a ﬁnite sum over these points, using
(1.35), so that
KL(p∥q) ≃
N

n=1
{−ln q(xn|θ) + ln p(xn)} .
(1.119)
The second term on the right-hand side of (1.119) is independent of θ, and the ﬁrst
term is the negative log likelihood function for θ under the distribution q(x|θ) eval-
uated using the training set. Thus we see that minimizing this Kullback-Leibler
divergence is equivalent to maximizing the likelihood function.
Now consider the joint distribution between two sets of variables x and y given
by p(x, y). If the sets of variables are independent, then their joint distribution will
factorize into the product of their marginals p(x, y) = p(x)p(y). If the variables are
not independent, we can gain some idea of whether they are ‘close’ to being indepen-
dent by considering the Kullback-Leibler divergence between the joint distribution
and the product of the marginals, given by
I[x, y]
≡
KL(p(x, y)∥p(x)p(y))
=
−

p(x, y) ln
p(x)p(y)
p(x, y)

dx dy
(1.120)
which is called the mutual information between the variables x and y. From the
properties of the Kullback-Leibler divergence, we see that I(x, y) ⩾0 with equal-
ity if, and only if, x and y are independent. Using the sum and product rules of
probability, we see that the mutual information is related to the conditional entropy
through
Exercise 1.41
I[x, y] = H[x] −H[x|y] = H[y] −H[y|x].
(1.121)

1. INTRODUCTION
Thus we can view the mutual information as the reduction in the uncertainty about x
by virtue of being told the value of y (or vice versa). From a Bayesian perspective,
we can view p(x) as the prior distribution for x and p(x|y) as the posterior distribu-
tion after we have observed new data y. The mutual information therefore represents
the reduction in uncertainty about x as a consequence of the new observation y.
Exercises
1.1
(⋆) www
Consider the sum-of-squares error function given by (1.2) in which
the function y(x, w) is given by the polynomial (1.1). Show that the coefﬁcients
w = {wi} that minimize this error function are given by the solution to the following
set of linear equations
M

j=0
Aijwj = Ti
(1.122)
where
Aij =
N

n=1
(xn)i+j,
Ti =
N

n=1
(xn)itn.
(1.123)
Here a sufﬁx i or j denotes the index of a component, whereas (x)i denotes x raised
to the power of i.
1.2
(⋆)
Write down the set of coupled linear equations, analogous to (1.122), satisﬁed
by the coefﬁcients wi which minimize the regularized sum-of-squares error function
given by (1.4).
1.3
(⋆⋆)
Suppose that we have three coloured boxes r (red), b (blue), and g (green).
Box r contains 3 apples, 4 oranges, and 3 limes, box b contains 1 apple, 1 orange,
and 0 limes, and box g contains 3 apples, 3 oranges, and 4 limes. If a box is chosen
at random with probabilities p(r) = 0.2, p(b) = 0.2, p(g) = 0.6, and a piece of
fruit is removed from the box (with equal probability of selecting any of the items in
the box), then what is the probability of selecting an apple? If we observe that the
selected fruit is in fact an orange, what is the probability that it came from the green
box?
1.4
(⋆⋆) www
Consider a probability density px(x) deﬁned over a continuous vari-
able x, and suppose that we make a nonlinear change of variable using x = g(y),
so that the density transforms according to (1.27). By differentiating (1.27), show
that the location y of the maximum of the density in y is not in general related to the
location x of the maximum of the density over x by the simple functional relation
x = g(y) as a consequence of the Jacobian factor. This shows that the maximum
of a probability density (in contrast to a simple function) is dependent on the choice
of variable. Verify that, in the case of a linear transformation, the location of the
maximum transforms in the same way as the variable itself.
1.5
(⋆) Using the deﬁnition (1.38) show that var[f(x)] satisﬁes (1.39).

Exercises
1.6
(⋆)
Show that if two variables x and y are independent, then their covariance is
zero.
1.7
(⋆⋆) www
In this exercise, we prove the normalization condition (1.48) for the
univariate Gaussian. To do this consider, the integral
I =
 ∞
−∞
exp

−1
2σ2 x2

dx
(1.124)
which we can evaluate by ﬁrst writing its square in the form
I2 =
 ∞
−∞
 ∞
−∞
exp

−1
2σ2 x2 −
2σ2 y2

dx dy.
(1.125)
Now make the transformation from Cartesian coordinates (x, y) to polar coordinates
(r, θ) and then substitute u = r2. Show that, by performing the integrals over θ and
u, and then taking the square root of both sides, we obtain
I = 
2πσ21/2 .
(1.126)
Finally, use this result to show that the Gaussian distribution N(x|µ, σ2) is normal-
ized.
1.8
(⋆⋆) www
By using a change of variables, verify that the univariate Gaussian
distribution given by (1.46) satisﬁes (1.49). Next, by differentiating both sides of the
normalization condition
 ∞
−∞
N

x|µ, σ2
dx = 1
(1.127)
with respect to σ2, verify that the Gaussian satisﬁes (1.50). Finally, show that (1.51)
holds.
1.9
(⋆) www
Show that the mode (i.e. the maximum) of the Gaussian distribution
(1.46) is given by µ. Similarly, show that the mode of the multivariate Gaussian
(1.52) is given by µ.
1.10
(⋆) www
Suppose that the two variables x and z are statistically independent.
Show that the mean and variance of their sum satisﬁes
E[x + z]
=
E[x] + E[z]
(1.128)
var[x + z]
=
var[x] + var[z].
(1.129)
1.11
(⋆) By setting the derivatives of the log likelihood function (1.54) with respect to µ
and σ2 equal to zero, verify the results (1.55) and (1.56).

1. INTRODUCTION
1.12
(⋆⋆) www
Using the results (1.49) and (1.50), show that
E[xnxm] = µ2 + Inmσ2
(1.130)
where xn and xm denote data points sampled from a Gaussian distribution with mean
µ and variance σ2, and Inm satisﬁes Inm = 1 if n = m and Inm = 0 otherwise.
Hence prove the results (1.57) and (1.58).
1.13
(⋆) Suppose that the variance of a Gaussian is estimated using the result (1.56) but
with the maximum likelihood estimate µML replaced with the true value µ of the
mean. Show that this estimator has the property that its expectation is given by the
true variance σ2.
1.14
(⋆⋆)
Show that an arbitrary square matrix with elements wij can be written in
the form wij = wS
ij + wA
ij where wS
ij and wA
ij are symmetric and anti-symmetric
matrices, respectively, satisfying wS
ij = wS
ji and wA
ij = −wA
ji for all i and j. Now
consider the second order term in a higher order polynomial in D dimensions, given
by
D

i=1
D

j=1
wijxixj.
(1.131)
Show that
D

i=1
D

j=1
wijxixj =
D

i=1
D

j=1
wS
ijxixj
(1.132)
so that the contribution from the anti-symmetric matrix vanishes. We therefore see
that, without loss of generality, the matrix of coefﬁcients wij can be chosen to be
symmetric, and so not all of the D2 elements of this matrix can be chosen indepen-
dently. Show that the number of independent parameters in the matrix wS
ij is given
by D(D + 1)/2.
1.15
(⋆⋆⋆) www
In this exercise and the next, we explore how the number of indepen-
dent parameters in a polynomial grows with the order M of the polynomial and with
the dimensionality D of the input space. We start by writing down the M th order
term for a polynomial in D dimensions in the form
D

i1=1
D

i2=1
· · ·
D

iM =1
wi1i2···iMxi1xi2 · · · xiM.
(1.133)
The coefﬁcients wi1i2···iM comprise DM elements, but the number of independent
parameters is signiﬁcantly fewer due to the many interchange symmetries of the
factor xi1xi2 · · · xiM . Begin by showing that the redundancy in the coefﬁcients can
be removed by rewriting this M th order term in the form
D

i1=1
i1

i2=1
· · ·
iM−1

iM =1
wi1i2···iMxi1xi2 · · · xiM.
(1.134)

Exercises
Note that the precise relationship between the w coefﬁcients and w coefﬁcients need
not be made explicit. Use this result to show that the number of independent param-
eters n(D, M), which appear at order M, satisﬁes the following recursion relation
n(D, M) =
D

i=1
n(i, M −1).
(1.135)
Next use proof by induction to show that the following result holds
D

i=1
(i + M −2)!
(i −1)! (M −1)! = (D + M −1)!
(D −1)! M!
(1.136)
which can be done by ﬁrst proving the result for D = 1 and arbitrary M by making
use of the result 0! = 1, then assuming it is correct for dimension D and verifying
that it is correct for dimension D + 1. Finally, use the two previous results, together
with proof by induction, to show
n(D, M) = (D + M −1)!
(D −1)! M! .
(1.137)
To do this, ﬁrst show that the result is true for M = 2, and any value of D ⩾1,
by comparison with the result of Exercise 1.14. Then make use of (1.135), together
with (1.136), to show that, if the result holds at order M −1, then it will also hold at
order M
1.16
(⋆⋆⋆) In Exercise 1.15, we proved the result (1.135) for the number of independent
parameters in the M th order term of a D-dimensional polynomial. We now ﬁnd an
expression for the total number N(D, M) of independent parameters in all of the
terms up to and including the M6th order. First show that N(D, M) satisﬁes
N(D, M) =
M

m=0
n(D, m)
(1.138)
where n(D, m) is the number of independent parameters in the term of order m.
Now make use of the result (1.137), together with proof by induction, to show that
N(d, M) = (D + M)!
D! M!
.
(1.139)
This can be done by ﬁrst proving that the result holds for M = 0 and arbitrary
D ⩾1, then assuming that it holds at order M, and hence showing that it holds at
order M + 1. Finally, make use of Stirling’s approximation in the form
n! ≃nne−n
(1.140)
for large n to show that, for D ≫M, the quantity N(D, M) grows like DM,
and for M ≫D it grows like M D. Consider a cubic (M = 3) polynomial in D
dimensions, and evaluate numerically the total number of independent parameters
for (i) D = 10 and (ii) D = 100, which correspond to typical small-scale and
medium-scale machine learning applications.

1. INTRODUCTION
1.17
(⋆⋆) www
The gamma function is deﬁned by
Γ(x) ≡
 ∞
ux−1e−u du.
(1.141)
Using integration by parts, prove the relation Γ(x + 1) = xΓ(x). Show also that
Γ(1) = 1 and hence that Γ(x + 1) = x! when x is an integer.
1.18
(⋆⋆) www
We can use the result (1.126) to derive an expression for the surface
area SD, and the volume VD, of a sphere of unit radius in D dimensions. To do this,
consider the following result, which is obtained by transforming from Cartesian to
polar coordinates
D

i=1
 ∞
−∞
e−x2
i dxi = SD
 ∞
e−r2rD−1 dr.
(1.142)
Using the deﬁnition (1.141) of the Gamma function, together with (1.126), evaluate
both sides of this equation, and hence show that
SD = 2πD/2
Γ(D/2).
(1.143)
Next, by integrating with respect to radius from 0 to 1, show that the volume of the
unit sphere in D dimensions is given by
VD = SD
D .
(1.144)
Finally, use the results Γ(1) = 1 and Γ(3/2) = √π/2 to show that (1.143) and
(1.144) reduce to the usual expressions for D = 2 and D = 3.
1.19
(⋆⋆)
Consider a sphere of radius a in D-dimensions together with the concentric
hypercube of side 2a, so that the sphere touches the hypercube at the centres of each
of its sides. By using the results of Exercise 1.18, show that the ratio of the volume
of the sphere to the volume of the cube is given by
volume of sphere
volume of cube =
πD/2
D2D−1Γ(D/2).
(1.145)
Now make use of Stirling’s formula in the form
Γ(x + 1) ≃(2π)1/2e−xxx+1/2
(1.146)
which is valid for x ≫1, to show that, as D →∞, the ratio (1.145) goes to zero.
Show also that the ratio of the distance from the centre of the hypercube to one of
the corners, divided by the perpendicular distance to one of the sides, is
√
D, which
therefore goes to ∞as D →∞. From these results we see that, in a space of high
dimensionality, most of the volume of a cube is concentrated in the large number of
corners, which themselves become very long ‘spikes’!

Exercises
1.20
(⋆⋆) www
In this exercise, we explore the behaviour of the Gaussian distribution
in high-dimensional spaces. Consider a Gaussian distribution in D dimensions given
by
p(x) =
(2πσ2)D/2 exp

−∥x∥2
2σ2

.
(1.147)
We wish to ﬁnd the density with respect to radius in polar coordinates in which the
direction variables have been integrated out. To do this, show that the integral of
the probability density over a thin shell of radius r and thickness ϵ, where ϵ ≪1, is
given by p(r)ϵ where
p(r) =
SDrD−1
(2πσ2)D/2 exp

−r2
2σ2

(1.148)
where SD is the surface area of a unit sphere in D dimensions. Show that the function
p(r) has a single stationary point located, for large D, at r ≃
√
Dσ. By considering
p(r + ϵ) where ϵ ≪r, show that for large D,
p(r + ϵ) = p(r) exp

−3ϵ2
2σ2

(1.149)
which shows that r is a maximum of the radial probability density and also that p(r)
decays exponentially away from its maximum at r with length scale σ. We have
already seen that σ ≪r for large D, and so we see that most of the probability
mass is concentrated in a thin shell at large radius. Finally, show that the probability
density p(x) is larger at the origin than at the radius r by a factor of exp(D/2).
We therefore see that most of the probability mass in a high-dimensional Gaussian
distribution is located at a different radius from the region of high probability density.
This property of distributions in spaces of high dimensionality will have important
consequences when we consider Bayesian inference of model parameters in later
chapters.
1.21
(⋆⋆)
Consider two nonnegative numbers a and b, and show that, if a ⩽b, then
a ⩽(ab)1/2. Use this result to show that, if the decision regions of a two-class
classiﬁcation problem are chosen to minimize the probability of misclassiﬁcation,
this probability will satisfy
p(mistake) ⩽

{p(x, C1)p(x, C2)}1/2 dx.
(1.150)
1.22
(⋆) www
Given a loss matrix with elements Lkj, the expected risk is minimized
if, for each x, we choose the class that minimizes (1.81). Verify that, when the
loss matrix is given by Lkj = 1 −Ikj, where Ikj are the elements of the identity
matrix, this reduces to the criterion of choosing the class having the largest posterior
probability. What is the interpretation of this form of loss matrix?
1.23
(⋆)
Derive the criterion for minimizing the expected loss when there is a general
loss matrix and general prior probabilities for the classes.

1. INTRODUCTION
1.24
(⋆⋆) www
Consider a classiﬁcation problem in which the loss incurred when
an input vector from class Ck is classiﬁed as belonging to class Cj is given by the
loss matrix Lkj, and for which the loss incurred in selecting the reject option is λ.
Find the decision criterion that will give the minimum expected loss. Verify that this
reduces to the reject criterion discussed in Section 1.5.3 when the loss matrix is given
by Lkj = 1 −Ikj. What is the relationship between λ and the rejection threshold θ?
1.25
(⋆) www
Consider the generalization of the squared loss function (1.87) for a
single target variable t to the case of multiple target variables described by the vector
t given by
E[L(t, y(x))] =

∥y(x) −t∥2p(x, t) dx dt.
(1.151)
Using the calculus of variations, show that the function y(x) for which this expected
loss is minimized is given by y(x) = Et[t|x]. Show that this result reduces to (1.89)
for the case of a single target variable t.
1.26
(⋆)
By expansion of the square in (1.151), derive a result analogous to (1.90) and
hence show that the function y(x) that minimizes the expected squared loss for the
case of a vector t of target variables is again given by the conditional expectation of
t.
1.27
(⋆⋆) www
Consider the expected loss for regression problems under the Lq loss
function given by (1.91). Write down the condition that y(x) must satisfy in order
to minimize E[Lq]. Show that, for q = 1, this solution represents the conditional
median, i.e., the function y(x) such that the probability mass for t < y(x) is the
same as for t ⩾y(x). Also show that the minimum expected Lq loss for q →0 is
given by the conditional mode, i.e., by the function y(x) equal to the value of t that
maximizes p(t|x) for each x.
1.28
(⋆) In Section 1.6, we introduced the idea of entropy h(x) as the information gained
on observing the value of a random variable x having distribution p(x). We saw
that, for independent variables x and y for which p(x, y) = p(x)p(y), the entropy
functions are additive, so that h(x, y) = h(x) + h(y). In this exercise, we derive the
relation between h and p in the form of a function h(p). First show that h(p2) =
2h(p), and hence by induction that h(pn) = nh(p) where n is a positive integer.
Hence show that h(pn/m) = (n/m)h(p) where m is also a positive integer. This
implies that h(px) = xh(p) where x is a positive rational number, and hence by
continuity when it is a positive real number. Finally, show that this implies h(p)
must take the form h(p) ∝ln p.
1.29
(⋆) www
Consider an M-state discrete random variable x, and use Jensen’s in-
equality in the form (1.115) to show that the entropy of its distribution p(x) satisﬁes
H[x] ⩽ln M.
1.30
(⋆⋆)
Evaluate the Kullback-Leibler divergence (1.113) between two Gaussians
p(x) = N(x|µ, σ2) and q(x) = N(x|m, s2).

Exercises
The joint distribution p(x, y) for two binary variables
x and y used in Exercise 1.39.
y
x
1/3
1/3
1/3
1.31
(⋆⋆) www
Consider two variables x and y having joint distribution p(x, y). Show
that the differential entropy of this pair of variables satisﬁes
H[x, y] ⩽H[x] + H[y]
(1.152)
with equality if, and only if, x and y are statistically independent.
1.32
(⋆)
Consider a vector x of continuous variables with distribution p(x) and corre-
sponding entropy H[x]. Suppose that we make a nonsingular linear transformation
of x to obtain a new variable y = Ax. Show that the corresponding entropy is given
by H[y] = H[x] + ln |A| where |A| denotes the determinant of A.
1.33
(⋆⋆)
Suppose that the conditional entropy H[y|x] between two discrete random
variables x and y is zero. Show that, for all values of x such that p(x) > 0, the
variable y must be a function of x, in other words for each x there is only one value
of y such that p(y|x)̸ = 0.
1.34
(⋆⋆) www
Use the calculus of variations to show that the stationary point of the
functional (1.108) is given by (1.108). Then use the constraints (1.105), (1.106),
and (1.107) to eliminate the Lagrange multipliers and hence show that the maximum
entropy solution is given by the Gaussian (1.109).
1.35
(⋆) www
Use the results (1.106) and (1.107) to show that the entropy of the
univariate Gaussian (1.109) is given by (1.110).
1.36
(⋆)
A strictly convex function is deﬁned as one for which every chord lies above
the function. Show that this is equivalent to the condition that the second derivative
of the function be positive.
1.37
(⋆) Using the deﬁnition (1.111) together with the product rule of probability, prove
the result (1.112).
1.38
(⋆⋆) www
Using proof by induction, show that the inequality (1.114) for convex
functions implies the result (1.115).
1.39
(⋆⋆⋆) Consider two binary variables x and y having the joint distribution given in
Evaluate the following quantities
(a) H[x]
(c) H[y|x]
(e) H[x, y]
(b) H[y]
(d) H[x|y]
(f) I[x, y].
Draw a diagram to show the relationship between these various quantities.

1. INTRODUCTION
1.40
(⋆)
By applying Jensen’s inequality (1.115) with f(x) = ln x, show that the arith-
metic mean of a set of real numbers is never less than their geometrical mean.
1.41
(⋆) www
Using the sum and product rules of probability, show that the mutual
information I(x, y) satisﬁes the relation (1.121).

Probability
Distributions
In Chapter 1, we emphasized the central role played by probability theory in the
solution of pattern recognition problems. We turn now to an exploration of some
particular examples of probability distributions and their properties. As well as be-
ing of great interest in their own right, these distributions can form building blocks
for more complex models and will be used extensively throughout the book. The
distributions introduced in this chapter will also serve another important purpose,
namely to provide us with the opportunity to discuss some key statistical concepts,
such as Bayesian inference, in the context of simple models before we encounter
them in more complex situations in later chapters.
One role for the distributions discussed in this chapter is to model the prob-
ability distribution p(x) of a random variable x, given a ﬁnite set x1, . . . , xN of
observations. This problem is known as density estimation. For the purposes of
this chapter, we shall assume that the data points are independent and identically
distributed. It should be emphasized that the problem of density estimation is fun-

2. PROBABILITY DISTRIBUTIONS
damentally ill-posed, because there are inﬁnitely many probability distributions that
could have given rise to the observed ﬁnite data set. Indeed, any distribution p(x)
that is nonzero at each of the data points x1, . . . , xN is a potential candidate. The
issue of choosing an appropriate distribution relates to the problem of model selec-
tion that has already been encountered in the context of polynomial curve ﬁtting in
Chapter 1 and that is a central issue in pattern recognition.
We begin by considering the binomial and multinomial distributions for discrete
random variables and the Gaussian distribution for continuous random variables.
These are speciﬁc examples of parametric distributions, so-called because they are
governed by a small number of adaptive parameters, such as the mean and variance in
the case of a Gaussian for example. To apply such models to the problem of density
estimation, we need a procedure for determining suitable values for the parameters,
given an observed data set. In a frequentist treatment, we choose speciﬁc values
for the parameters by optimizing some criterion, such as the likelihood function. By
contrast, in a Bayesian treatment we introduce prior distributions over the parameters
and then use Bayes’ theorem to compute the corresponding posterior distribution
given the observed data.
We shall see that an important role is played by conjugate priors, that lead to
posterior distributions having the same functional form as the prior, and that there-
fore lead to a greatly simpliﬁed Bayesian analysis. For example, the conjugate prior
for the parameters of the multinomial distribution is called the Dirichlet distribution,
while the conjugate prior for the mean of a Gaussian is another Gaussian. All of these
distributions are examples of the exponential family of distributions, which possess
a number of important properties, and which will be discussed in some detail.
One limitation of the parametric approach is that it assumes a speciﬁc functional
form for the distribution, which may turn out to be inappropriate for a particular
application. An alternative approach is given by nonparametric density estimation
methods in which the form of the distribution typically depends on the size of the data
set. Such models still contain parameters, but these control the model complexity
rather than the form of the distribution. We end this chapter by considering three
nonparametric methods based respectively on histograms, nearest-neighbours, and
kernels.
2.1. Binary Variables
We begin by considering a single binary random variable x ∈{0, 1}. For example,
x might describe the outcome of ﬂipping a coin, with x = 1 representing ‘heads’,
and x = 0 representing ‘tails’. We can imagine that this is a damaged coin so that
the probability of landing heads is not necessarily the same as that of landing tails.
The probability of x = 1 will be denoted by the parameter µ so that
p(x = 1|µ) = µ
(2.1)

2.1. Binary Variables
where 0 ⩽µ ⩽1, from which it follows that p(x = 0|µ) = 1 −µ. The probability
distribution over x can therefore be written in the form
Bern(x|µ) = µx(1 −µ)1−x
(2.2)
which is known as the Bernoulli distribution. It is easily veriﬁed that this distribution
Exercise 2.1
is normalized and that it has mean and variance given by
E[x]
=
µ
(2.3)
var[x]
=
µ(1 −µ).
(2.4)
Now suppose we have a data set D = {x1, . . . , xN} of observed values of x.
We can construct the likelihood function, which is a function of µ, on the assumption
that the observations are drawn independently from p(x|µ), so that
p(D|µ) =
N

n=1
p(xn|µ) =
N

n=1
µxn(1 −µ)1−xn.
(2.5)
In a frequentist setting, we can estimate a value for µ by maximizing the likelihood
function, or equivalently by maximizing the logarithm of the likelihood. In the case
of the Bernoulli distribution, the log likelihood function is given by
ln p(D|µ) =
N

n=1
ln p(xn|µ) =
N

n=1
{xn ln µ + (1 −xn) ln(1 −µ)} .
(2.6)
At this point, it is worth noting that the log likelihood function depends on the N
observations xn only through their sum 
n xn. This sum provides an example of a
sufﬁcient statistic for the data under this distribution, and we shall study the impor-
tant role of sufﬁcient statistics in some detail. If we set the derivative of ln p(D|µ)
Section 2.4
with respect to µ equal to zero, we obtain the maximum likelihood estimator
µML = 1
N
N

n=1
xn
(2.7)
Jacob Bernoulli
1654–1705
Jacob Bernoulli,
also known as
Jacques or James Bernoulli, was a
Swiss mathematician and was the
ﬁrst of many in the Bernoulli family
to pursue a career in science and
mathematics.
Although compelled
to study philosophy and theology against his will by
his parents, he travelled extensively after graduating
in order to meet with many of the leading scientists of
his time, including Boyle and Hooke in England. When
he returned to Switzerland, he taught mechanics and
became Professor of Mathematics at Basel in 1687.
Unfortunately, rivalry between Jacob and his younger
brother Johann turned an initially productive collabora-
tion into a bitter and public dispute. Jacob’s most sig-
niﬁcant contributions to mathematics appeared in The
Art of Conjecture published in 1713, eight years after
his death, which deals with topics in probability the-
ory including what has become known as the Bernoulli
distribution.

2. PROBABILITY DISTRIBUTIONS
Histogram plot of the binomial dis-
tribution (2.9) as a function of m for
N = 10 and µ = 0.25.
m
0.1
0.2
0.3
which is also known as the sample mean. If we denote the number of observations
of x = 1 (heads) within this data set by m, then we can write (2.7) in the form
µML = m
N
(2.8)
so that the probability of landing heads is given, in this maximum likelihood frame-
work, by the fraction of observations of heads in the data set.
Now suppose we ﬂip a coin, say, 3 times and happen to observe 3 heads. Then
N = m = 3 and µML = 1. In this case, the maximum likelihood result would
predict that all future observations should give heads. Common sense tells us that
this is unreasonable, and in fact this is an extreme example of the over-ﬁtting associ-
ated with maximum likelihood. We shall see shortly how to arrive at more sensible
conclusions through the introduction of a prior distribution over µ.
We can also work out the distribution of the number m of observations of x = 1,
given that the data set has size N. This is called the binomial distribution, and
from (2.5) we see that it is proportional to µm(1 −µ)N−m. In order to obtain the
normalization coefﬁcient we note that out of N coin ﬂips, we have to add up all
of the possible ways of obtaining m heads, so that the binomial distribution can be
written
Bin(m|N, µ) =
N
m

µm(1 −µ)N−m
(2.9)
where
N
m

≡
N!
(N −m)!m!
(2.10)
is the number of ways of choosing m objects out of a total of N identical objects.
Exercise 2.3
The mean and variance of the binomial distribution can be found by using the
result of Exercise 1.10, which shows that for independent events the mean of the
sum is the sum of the means, and the variance of the sum is the sum of the variances.
Because m = x1 + . . . + xN, and for each observation the mean and variance are

2.1. Binary Variables
given by (2.3) and (2.4), respectively, we have
E[m] ≡
N

m=0
mBin(m|N, µ)
=
Nµ
(2.11)
var[m] ≡
N

m=0
(m −E[m])2 Bin(m|N, µ)
=
Nµ(1 −µ).
(2.12)
These results can also be proved directly using calculus.
Exercise 2.4
2.1.1
The beta distribution
We have seen in (2.8) that the maximum likelihood setting for the parameter µ
in the Bernoulli distribution, and hence in the binomial distribution, is given by the
fraction of the observations in the data set having x = 1. As we have already noted,
this can give severely over-ﬁtted results for small data sets. In order to develop a
Bayesian treatment for this problem, we need to introduce a prior distribution p(µ)
over the parameter µ. Here we consider a form of prior distribution that has a simple
interpretation as well as some useful analytical properties. To motivate this prior,
we note that the likelihood function takes the form of the product of factors of the
form µx(1 −µ)1−x. If we choose a prior to be proportional to powers of µ and
(1 −µ), then the posterior distribution, which is proportional to the product of the
prior and the likelihood function, will have the same functional form as the prior.
This property is called conjugacy and we will see several examples of it later in this
chapter. We therefore choose a prior, called the beta distribution, given by
Beta(µ|a, b) = Γ(a + b)
Γ(a)Γ(b)µa−1(1 −µ)b−1
(2.13)
where Γ(x) is the gamma function deﬁned by (1.141), and the coefﬁcient in (2.13)
ensures that the beta distribution is normalized, so that
Exercise 2.5
Beta(µ|a, b) dµ = 1.
(2.14)
The mean and variance of the beta distribution are given by
Exercise 2.6
E[µ]
=
a
a + b
(2.15)
var[µ]
=
ab
(a + b)2(a + b + 1).
(2.16)
The parameters a and b are often called hyperparameters because they control the
distribution of the parameter µ. Figure 2.2 shows plots of the beta distribution for
various values of the hyperparameters.
The posterior distribution of µ is now obtained by multiplying the beta prior
(2.13) by the binomial likelihood function (2.9) and normalizing. Keeping only the
factors that depend on µ, we see that this posterior distribution has the form
p(µ|m, l, a, b) ∝µm+a−1(1 −µ)l+b−1
(2.17)

2. PROBABILITY DISTRIBUTIONS
µ
a = 0.1
b = 0.1
0.5
µ
a = 1
b = 1
0.5
µ
a = 2
b = 3
0.5
µ
a = 8
b = 4
0.5
Plots of the beta distribution Beta(µ|a, b) given by (2.13) as a function of µ for various values of the
hyperparameters a and b.
where l = N −m, and therefore corresponds to the number of ‘tails’ in the coin
example. We see that (2.17) has the same functional dependence on µ as the prior
distribution, reﬂecting the conjugacy properties of the prior with respect to the like-
lihood function. Indeed, it is simply another beta distribution, and its normalization
coefﬁcient can therefore be obtained by comparison with (2.13) to give
p(µ|m, l, a, b) = Γ(m + a + l + b)
Γ(m + a)Γ(l + b)µm+a−1(1 −µ)l+b−1.
(2.18)
We see that the effect of observing a data set of m observations of x = 1 and
l observations of x = 0 has been to increase the value of a by m, and the value of
b by l, in going from the prior distribution to the posterior distribution. This allows
us to provide a simple interpretation of the hyperparameters a and b in the prior as
an effective number of observations of x = 1 and x = 0, respectively. Note that
a and b need not be integers. Furthermore, the posterior distribution can act as the
prior if we subsequently observe additional data. To see this, we can imagine taking
observations one at a time and after each observation updating the current posterior

2.1. Binary Variables
µ
prior
0.5
µ
likelihood function
0.5
µ
posterior
0.5
Illustration of one step of sequential Bayesian inference. The prior is given by a beta distribution
with parameters a = 2, b = 2, and the likelihood function, given by (2.9) with N = m = 1, corresponds to a
single observation of x = 1, so that the posterior is given by a beta distribution with parameters a = 3, b = 2.
distribution by multiplying by the likelihood function for the new observation and
then normalizing to obtain the new, revised posterior distribution. At each stage, the
posterior is a beta distribution with some total number of (prior and actual) observed
values for x = 1 and x = 0 given by the parameters a and b. Incorporation of an
additional observation of x = 1 simply corresponds to incrementing the value of a
by 1, whereas for an observation of x = 0 we increment b by 1. Figure 2.3 illustrates
one step in this process.
We see that this sequential approach to learning arises naturally when we adopt
a Bayesian viewpoint. It is independent of the choice of prior and of the likelihood
function and depends only on the assumption of i.i.d. data. Sequential methods make
use of observations one at a time, or in small batches, and then discard them before
the next observations are used. They can be used, for example, in real-time learning
scenarios where a steady stream of data is arriving, and predictions must be made
before all of the data is seen. Because they do not require the whole data set to be
stored or loaded into memory, sequential methods are also useful for large data sets.
Maximum likelihood methods can also be cast into a sequential framework.
Section 2.3.5
If our goal is to predict, as best we can, the outcome of the next trial, then we
must evaluate the predictive distribution of x, given the observed data set D. From
the sum and product rules of probability, this takes the form
p(x = 1|D) =
p(x = 1|µ)p(µ|D) dµ =
µp(µ|D) dµ = E[µ|D].
(2.19)
Using the result (2.18) for the posterior distribution p(µ|D), together with the result
(2.15) for the mean of the beta distribution, we obtain
p(x = 1|D) =
m + a
m + a + l + b
(2.20)
which has a simple interpretation as the total fraction of observations (both real ob-
servations and ﬁctitious prior observations) that correspond to x = 1. Note that in
the limit of an inﬁnitely large data set m, l →∞the result (2.20) reduces to the
maximum likelihood result (2.8). As we shall see, it is a very general property that
the Bayesian and maximum likelihood results will agree in the limit of an inﬁnitely

2. PROBABILITY DISTRIBUTIONS
large data set. For a ﬁnite data set, the posterior mean for µ always lies between the
prior mean and the maximum likelihood estimate for µ corresponding to the relative
frequencies of events given by (2.7).
Exercise 2.7
From Figure 2.2, we see that as the number of observations increases, so the
posterior distribution becomes more sharply peaked. This can also be seen from
the result (2.16) for the variance of the beta distribution, in which we see that the
variance goes to zero for a →∞or b →∞. In fact, we might wonder whether it is
a general property of Bayesian learning that, as we observe more and more data, the
uncertainty represented by the posterior distribution will steadily decrease.
To address this, we can take a frequentist view of Bayesian learning and show
that, on average, such a property does indeed hold. Consider a general Bayesian
inference problem for a parameter θ for which we have observed a data set D, de-
scribed by the joint distribution p(θ, D). The following result
Exercise 2.8
Eθ[θ] = ED [Eθ[θ|D]]
(2.21)
where
Eθ[θ]
≡

p(θ)θ dθ
(2.22)
ED[Eθ[θ|D]]
≡
 

θp(θ|D) dθ

p(D) dD
(2.23)
says that the posterior mean of θ, averaged over the distribution generating the data,
is equal to the prior mean of θ. Similarly, we can show that
varθ[θ] = ED [varθ[θ|D]] + varD [Eθ[θ|D]] .
(2.24)
The term on the left-hand side of (2.24) is the prior variance of θ. On the right-
hand side, the ﬁrst term is the average posterior variance of θ, and the second term
measures the variance in the posterior mean of θ. Because this variance is a positive
quantity, this result shows that, on average, the posterior variance of θ is smaller than
the prior variance. The reduction in variance is greater if the variance in the posterior
mean is greater. Note, however, that this result only holds on average, and that for a
particular observed data set it is possible for the posterior variance to be larger than
the prior variance.
2.2. Multinomial Variables
Binary variables can be used to describe quantities that can take one of two possible
values. Often, however, we encounter discrete variables that can take on one of K
possible mutually exclusive states. Although there are various alternative ways to
express such variables, we shall see shortly that a particularly convenient represen-
tation is the 1-of-K scheme in which the variable is represented by a K-dimensional
vector x in which one of the elements xk equals 1, and all remaining elements equal

2.2. Multinomial Variables
0. So, for instance if we have a variable that can take K = 6 states and a particular
observation of the variable happens to correspond to the state where x3 = 1, then x
will be represented by
x = (0, 0, 1, 0, 0, 0)T.
(2.25)
Note that such vectors satisfy K
k=1 xk = 1. If we denote the probability of xk = 1
by the parameter µk, then the distribution of x is given
p(x|µ) =
K

k=1
µxk
k
(2.26)
where µ = (µ1, . . . , µK)T, and the parameters µk are constrained to satisfy µk ⩾0
and 
k µk = 1, because they represent probabilities. The distribution (2.26) can be
regarded as a generalization of the Bernoulli distribution to more than two outcomes.
It is easily seen that the distribution is normalized

x
p(x|µ) =
K

k=1
µk = 1
(2.27)
and that
E[x|µ] =

x
p(x|µ)x = (µ1, . . . , µM)T = µ.
(2.28)
Now consider a data set D of N independent observations x1, . . . , xN. The
corresponding likelihood function takes the form
p(D|µ) =
N

n=1
K

k=1
µxnk
k
=
K

k=1
µ(
P
n xnk)
k
=
K

k=1
µmk
k .
(2.29)
We see that the likelihood function depends on the N data points only through the
K quantities
mk =

n
xnk
(2.30)
which represent the number of observations of xk = 1. These are called the sufﬁcient
statistics for this distribution.
Section 2.4
In order to ﬁnd the maximum likelihood solution for µ, we need to maximize
ln p(D|µ) with respect to µk taking account of the constraint that the µk must sum
to one. This can be achieved using a Lagrange multiplier λ and maximizing
Appendix E
K

k=1
mk ln µk + λ
 K

k=1
µk −1

.
(2.31)
Setting the derivative of (2.31) with respect to µk to zero, we obtain
µk = −mk/λ.
(2.32)

2. PROBABILITY DISTRIBUTIONS
We can solve for the Lagrange multiplier λ by substituting (2.32) into the constraint

k µk = 1 to give λ = −N. Thus we obtain the maximum likelihood solution in
the form
µML
k
= mk
N
(2.33)
which is the fraction of the N observations for which xk = 1.
We can consider the joint distribution of the quantities m1, . . . , mK, conditioned
on the parameters µ and on the total number N of observations. From (2.29) this
takes the form
Mult(m1, m2, . . . , mK|µ, N) =

N
m1m2 . . . mK
 K

k=1
µmk
k
(2.34)
which is known as the multinomial distribution. The normalization coefﬁcient is the
number of ways of partitioning N objects into K groups of size m1, . . . , mK and is
given by

N
m1m2 . . . mK

=
N!
m1!m2! . . . mK!.
(2.35)
Note that the variables mk are subject to the constraint
K

k=1
mk = N.
(2.36)
2.2.1
The Dirichlet distribution
We now introduce a family of prior distributions for the parameters {µk} of
the multinomial distribution (2.34). By inspection of the form of the multinomial
distribution, we see that the conjugate prior is given by
p(µ|α) ∝
K

k=1
µαk−1
k
(2.37)
where 0 ⩽µk ⩽1 and 
k µk = 1. Here α1, . . . , αK are the parameters of the
distribution, and α denotes (α1, . . . , αK)T. Note that, because of the summation
constraint, the distribution over the space of the {µk} is conﬁned to a simplex of
dimensionality K −1, as illustrated for K = 3 in Figure 2.4.
The normalized form for this distribution is by
Exercise 2.9
Dir(µ|α) =
Γ(α0)
Γ(α1) · · · Γ(αK)
K

k=1
µαk−1
k
(2.38)
which is called the Dirichlet distribution. Here Γ(x) is the gamma function deﬁned
by (1.141) while
α0 =
K

k=1
αk.
(2.39)

2.2. Multinomial Variables
The Dirichlet distribution over three variables µ1, µ2, µ3
is conﬁned to a simplex (a bounded linear manifold) of
the form shown, as a consequence of the constraints
0 ⩽µk ⩽1 and P
k µk = 1.
µ1
µ2
µ3
Plots of the Dirichlet distribution over the simplex, for various settings of the param-
eters αk, are shown in Figure 2.5.
Multiplying the prior (2.38) by the likelihood function (2.34), we obtain the
posterior distribution for the parameters {µk} in the form
p(µ|D, α) ∝p(D|µ)p(µ|α) ∝
K

k=1
µαk+mk−1
k
.
(2.40)
We see that the posterior distribution again takes the form of a Dirichlet distribution,
conﬁrming that the Dirichlet is indeed a conjugate prior for the multinomial. This
allows us to determine the normalization coefﬁcient by comparison with (2.38) so
that
p(µ|D, α)
=
Dir(µ|α + m)
=
Γ(α0 + N)
Γ(α1 + m1) · · · Γ(αK + mK)
K

k=1
µαk+mk−1
k
(2.41)
where we have denoted m = (m1, . . . , mK)T. As for the case of the binomial
distribution with its beta prior, we can interpret the parameters αk of the Dirichlet
prior as an effective number of observations of xk = 1.
Note that two-state quantities can either be represented as binary variables and
Lejeune Dirichlet
1805–1859
Johann
Peter
Gustav
Lejeune
Dirichlet was a modest and re-
served mathematician who made
contributions in number theory, me-
chanics, and astronomy, and who
gave the ﬁrst rigorous analysis of
Fourier series.
His family originated from Richelet
in Belgium, and the name Lejeune Dirichlet comes
from ‘le jeune de Richelet’ (the young person from
Richelet). Dirichlet’s ﬁrst paper, which was published
in 1825, brought him instant fame. It concerned Fer-
mat’s last theorem, which claims that there are no
positive integer solutions to xn + yn = zn for n > 2.
Dirichlet gave a partial proof for the case n = 5, which
was sent to Legendre for review and who in turn com-
pleted the proof. Later, Dirichlet gave a complete proof
for n = 14, although a full proof of Fermat’s last theo-
rem for arbitrary n had to wait until the work of Andrew
Wiles in the closing years of the 20th century.

2. PROBABILITY DISTRIBUTIONS
Plots of the Dirichlet distribution over three variables, where the two horizontal axes are coordinates
in the plane of the simplex and the vertical axis corresponds to the value of the density. Here {αk} = 0.1 on the
left plot, {αk} = 1 in the centre plot, and {αk} = 10 in the right plot.
modelled using the binomial distribution (2.9) or as 1-of-2 variables and modelled
using the multinomial distribution (2.34) with K = 2.
2.3. The Gaussian Distribution
The Gaussian, also known as the normal distribution, is a widely used model for the
distribution of continuous variables. In the case of a single variable x, the Gaussian
distribution can be written in the form
N (x|µ, σ2) =
(2πσ2)1/2 exp

−1
2σ2(x −µ)2

(2.42)
where µ is the mean and σ2 is the variance. For a D-dimensional vector x, the
multivariate Gaussian distribution takes the form
N (x|µ, Σ) =
(2π)D/2
|Σ|1/2 exp

−1
2(x −µ)TΣ−1(x −µ)

(2.43)
where µ is a D-dimensional mean vector, Σ is a D × D covariance matrix, and |Σ|
denotes the determinant of Σ.
The Gaussian distribution arises in many different contexts and can be motivated
from a variety of different perspectives. For example, we have already seen that for
Section 1.6
a single real variable, the distribution that maximizes the entropy is the Gaussian.
This property applies also to the multivariate Gaussian.
Exercise 2.14
Another situation in which the Gaussian distribution arises is when we consider
the sum of multiple random variables. The central limit theorem (due to Laplace)
tells us that, subject to certain mild conditions, the sum of a set of random variables,
which is of course itself a random variable, has a distribution that becomes increas-
ingly Gaussian as the number of terms in the sum increases (Walker, 1969). We can

2.3. The Gaussian Distribution
N = 1
0.5
N = 2
0.5
N = 10
0.5
Histogram plots of the mean of N uniformly distributed numbers for various values of N.
We
observe that as N increases, the distribution tends towards a Gaussian.
illustrate this by considering N variables x1, . . . , xN each of which has a uniform
distribution over the interval [0, 1] and then considering the distribution of the mean
(x1 + · · · + xN)/N. For large N, this distribution tends to a Gaussian, as illustrated
in Figure 2.6.
In practice, the convergence to a Gaussian as N increases can be
very rapid. One consequence of this result is that the binomial distribution (2.9),
which is a distribution over m deﬁned by the sum of N observations of the random
binary variable x, will tend to a Gaussian as N →∞(see Figure 2.1 for the case of
N = 10).
The Gaussian distribution has many important analytical properties, and we shall
consider several of these in detail. As a result, this section will be rather more tech-
nically involved than some of the earlier sections, and will require familiarity with
various matrix identities. However, we strongly encourage the reader to become pro-
Appendix C
ﬁcient in manipulating Gaussian distributions using the techniques presented here as
this will prove invaluable in understanding the more complex models presented in
later chapters.
We begin by considering the geometrical form of the Gaussian distribution. The
Carl Friedrich Gauss
1777–1855
It is said that when Gauss went
to elementary school at age 7, his
teacher B¨uttner, trying to keep the
class occupied, asked the pupils to
sum the integers from 1 to 100. To
the teacher’s amazement, Gauss
arrived at the answer in a matter of moments by noting
that the sum can be represented as 50 pairs (1 + 100,
2+99, etc.) each of which added to 101, giving the an-
swer 5,050. It is now believed that the problem which
was actually set was of the same form but somewhat
harder in that the sequence had a larger starting value
and a larger increment. Gauss was a German math-
ematician and scientist with a reputation for being a
hard-working perfectionist. One of his many contribu-
tions was to show that least squares can be derived
under the assumption of normally distributed errors.
He also created an early formulation of non-Euclidean
geometry (a self-consistent geometrical theory that vi-
olates the axioms of Euclid) but was reluctant to dis-
cuss it openly for fear that his reputation might suffer
if it were seen that he believed in such a geometry.
At one point, Gauss was asked to conduct a geodetic
survey of the state of Hanover, which led to his for-
mulation of the normal distribution, now also known
as the Gaussian. After his death, a study of his di-
aries revealed that he had discovered several impor-
tant mathematical results years or even decades be-
fore they were published by others.

2. PROBABILITY DISTRIBUTIONS
functional dependence of the Gaussian on x is through the quadratic form
∆2 = (x −µ)TΣ−1(x −µ)
(2.44)
which appears in the exponent. The quantity ∆is called the Mahalanobis distance
from µ to x and reduces to the Euclidean distance when Σ is the identity matrix. The
Gaussian distribution will be constant on surfaces in x-space for which this quadratic
form is constant.
First of all, we note that the matrix Σ can be taken to be symmetric, without
loss of generality, because any antisymmetric component would disappear from the
exponent. Now consider the eigenvector equation for the covariance matrix
Exercise 2.17
Σui = λiui
(2.45)
where i = 1, . . . , D. Because Σ is a real, symmetric matrix its eigenvalues will be
real, and its eigenvectors can be chosen to form an orthonormal set, so that
Exercise 2.18
uT
i uj = Iij
(2.46)
where Iij is the i, j element of the identity matrix and satisﬁes
Iij =

1,
if i = j
0,
otherwise.
(2.47)
The covariance matrix Σ can be expressed as an expansion in terms of its eigenvec-
tors in the form
Exercise 2.19
Σ =
D

i=1
λiuiuT
i
(2.48)
and similarly the inverse covariance matrix Σ−1 can be expressed as
Σ−1 =
D

i=1
λi
uiuT
i .
(2.49)
Substituting (2.49) into (2.44), the quadratic form becomes
∆2 =
D

i=1
y2
i
λi
(2.50)
where we have deﬁned
yi = uT
i (x −µ).
(2.51)
We can interpret {yi} as a new coordinate system deﬁned by the orthonormal vectors
ui that are shifted and rotated with respect to the original xi coordinates. Forming
the vector y = (y1, . . . , yD)T, we have
y = U(x −µ)
(2.52)

2.3. The Gaussian Distribution
The red curve shows the ellip-
tical surface of constant proba-
bility density for a Gaussian in
a two-dimensional space x =
(x1, x2) on which the density
is exp(−1/2) of its value at
x = µ.
The major axes of
the ellipse are deﬁned by the
eigenvectors ui of the covari-
ance matrix, with correspond-
ing eigenvalues λi.
x1
x2
λ1/2
λ1/2
y1
y2
u1
u2
µ
where U is a matrix whose rows are given by uT
i . From (2.46) it follows that U is
an orthogonal matrix, i.e., it satisﬁes UUT = I, and hence also UTU = I, where I
Appendix C
is the identity matrix.
The quadratic form, and hence the Gaussian density, will be constant on surfaces
for which (2.51) is constant. If all of the eigenvalues λi are positive, then these
surfaces represent ellipsoids, with their centres at µ and their axes oriented along ui,
and with scaling factors in the directions of the axes given by λ1/2
i
, as illustrated in
For the Gaussian distribution to be well deﬁned, it is necessary for all of the
eigenvalues λi of the covariance matrix to be strictly positive, otherwise the dis-
tribution cannot be properly normalized. A matrix whose eigenvalues are strictly
positive is said to be positive deﬁnite. In Chapter 12, we will encounter Gaussian
distributions for which one or more of the eigenvalues are zero, in which case the
distribution is singular and is conﬁned to a subspace of lower dimensionality. If all
of the eigenvalues are nonnegative, then the covariance matrix is said to be positive
semideﬁnite.
Now consider the form of the Gaussian distribution in the new coordinate system
deﬁned by the yi. In going from the x to the y coordinate system, we have a Jacobian
matrix J with elements given by
Jij = ∂xi
∂yj
= Uji
(2.53)
where Uji are the elements of the matrix UT. Using the orthonormality property of
the matrix U, we see that the square of the determinant of the Jacobian matrix is
|J|2 =
UT2 =
UT |U| =
UTU
 = |I| = 1
(2.54)
and hence |J| = 1. Also, the determinant |Σ| of the covariance matrix can be written

2. PROBABILITY DISTRIBUTIONS
as the product of its eigenvalues, and hence
|Σ|1/2 =
D

j=1
λ1/2
j
.
(2.55)
Thus in the yj coordinate system, the Gaussian distribution takes the form
p(y) = p(x)|J| =
D

j=1
(2πλj)1/2 exp

−y2
j
2λj

(2.56)
which is the product of D independent univariate Gaussian distributions. The eigen-
vectors therefore deﬁne a new set of shifted and rotated coordinates with respect
to which the joint probability distribution factorizes into a product of independent
distributions. The integral of the distribution in the y coordinate system is then

p(y) dy =
D

j=1
 ∞
−∞
(2πλj)1/2 exp

−y2
j
2λj

dyj = 1
(2.57)
where we have used the result (1.48) for the normalization of the univariate Gaussian.
This conﬁrms that the multivariate Gaussian (2.43) is indeed normalized.
We now look at the moments of the Gaussian distribution and thereby provide an
interpretation of the parameters µ and Σ. The expectation of x under the Gaussian
distribution is given by
E[x]
=
(2π)D/2
|Σ|1/2

exp

−1
2(x −µ)TΣ−1(x −µ)

x dx
=
(2π)D/2
|Σ|1/2

exp

−1
2zTΣ−1z

(z + µ) dz
(2.58)
where we have changed variables using z = x −µ. We now note that the exponent
is an even function of the components of z and, because the integrals over these are
taken over the range (−∞, ∞), the term in z in the factor (z + µ) will vanish by
symmetry. Thus
E[x] = µ
(2.59)
and so we refer to µ as the mean of the Gaussian distribution.
We now consider second order moments of the Gaussian. In the univariate case,
we considered the second order moment given by E[x2]. For the multivariate Gaus-
sian, there are D2 second order moments given by E[xixj], which we can group
together to form the matrix E[xxT]. This matrix can be written as
E[xxT] =
(2π)D/2
|Σ|1/2

exp

−1
2(x −µ)TΣ−1(x −µ)

xxT dx
=
(2π)D/2
|Σ|1/2

exp

−1
2zTΣ−1z

(z + µ)(z + µ)T dz

2.3. The Gaussian Distribution
where again we have changed variables using z = x −µ. Note that the cross-terms
involving µzT and µTz will again vanish by symmetry. The term µµT is constant
and can be taken outside the integral, which itself is unity because the Gaussian
distribution is normalized. Consider the term involving zzT. Again, we can make
use of the eigenvector expansion of the covariance matrix given by (2.45), together
with the completeness of the set of eigenvectors, to write
z =
D

j=1
yjuj
(2.60)
where yj = uT
j z, which gives
(2π)D/2
|Σ|1/2

exp

−1
2zTΣ−1z

zzT dz
=
(2π)D/2
|Σ|1/2
D

i=1
D

j=1
uiuT
j

exp

−
D

k=1
y2
k
2λk

yiyj dy
=
D

i=1
uiuT
i λi = Σ
(2.61)
where we have made use of the eigenvector equation (2.45), together with the fact
that the integral on the right-hand side of the middle line vanishes by symmetry
unless i = j, and in the ﬁnal line we have made use of the results (1.50) and (2.55),
together with (2.48). Thus we have
E[xxT] = µµT + Σ.
(2.62)
For single random variables, we subtracted the mean before taking second mo-
ments in order to deﬁne a variance. Similarly, in the multivariate case it is again
convenient to subtract off the mean, giving rise to the covariance of a random vector
x deﬁned by
cov[x] = E 
(x −E[x])(x −E[x])T	
.
(2.63)
For the speciﬁc case of a Gaussian distribution, we can make use of E[x] = µ,
together with the result (2.62), to give
cov[x] = Σ.
(2.64)
Because the parameter matrix Σ governs the covariance of x under the Gaussian
distribution, it is called the covariance matrix.
Although the Gaussian distribution (2.43) is widely used as a density model, it
suffers from some signiﬁcant limitations. Consider the number of free parameters in
the distribution. A general symmetric covariance matrix Σ will have D(D + 1)/2
independent parameters, and there are another D independent parameters in µ, giv-
Exercise 2.21
ing D(D + 3)/2 parameters in total. For large D, the total number of parameters

2. PROBABILITY DISTRIBUTIONS
Contours of constant
probability density for a Gaussian
distribution in two dimensions in
which the covariance matrix is (a) of
general form, (b) diagonal, in which
the elliptical contours are aligned
with the coordinate axes, and (c)
proportional to the identity matrix, in
which the contours are concentric
circles.
x1
x2
(a)
x1
x2
(b)
x1
x2
(c)
therefore grows quadratically with D, and the computational task of manipulating
and inverting large matrices can become prohibitive. One way to address this prob-
lem is to use restricted forms of the covariance matrix. If we consider covariance
matrices that are diagonal, so that Σ = diag(σ2
i ), we then have a total of 2D inde-
pendent parameters in the density model. The corresponding contours of constant
density are given by axis-aligned ellipsoids. We could further restrict the covariance
matrix to be proportional to the identity matrix, Σ = σ2I, known as an isotropic co-
variance, giving D + 1 independent parameters in the model and spherical surfaces
of constant density. The three possibilities of general, diagonal, and isotropic covari-
ance matrices are illustrated in Figure 2.8. Unfortunately, whereas such approaches
limit the number of degrees of freedom in the distribution and make inversion of the
covariance matrix a much faster operation, they also greatly restrict the form of the
probability density and limit its ability to capture interesting correlations in the data.
A further limitation of the Gaussian distribution is that it is intrinsically uni-
modal (i.e., has a single maximum) and so is unable to provide a good approximation
to multimodal distributions. Thus the Gaussian distribution can be both too ﬂexible,
in the sense of having too many parameters, while also being too limited in the range
of distributions that it can adequately represent. We will see later that the introduc-
tion of latent variables, also called hidden variables or unobserved variables, allows
both of these problems to be addressed. In particular, a rich family of multimodal
distributions is obtained by introducing discrete latent variables leading to mixtures
of Gaussians, as discussed in Section 2.3.9. Similarly, the introduction of continuous
latent variables, as described in Chapter 12, leads to models in which the number of
free parameters can be controlled independently of the dimensionality D of the data
space while still allowing the model to capture the dominant correlations in the data
set. Indeed, these two approaches can be combined and further extended to derive
a very rich set of hierarchical models that can be adapted to a broad range of prac-
tical applications. For instance, the Gaussian version of the Markov random ﬁeld,
Section 8.3
which is widely used as a probabilistic model of images, is a Gaussian distribution
over the joint space of pixel intensities but rendered tractable through the imposition
of considerable structure reﬂecting the spatial organization of the pixels. Similarly,
the linear dynamical system, used to model time series data for applications such
Section 13.3
as tracking, is also a joint Gaussian distribution over a potentially large number of
observed and latent variables and again is tractable due to the structure imposed on
the distribution. A powerful framework for expressing the form and properties of

2.3. The Gaussian Distribution
such complex distributions is that of probabilistic graphical models, which will form
the subject of Chapter 8.
2.3.1
Conditional Gaussian distributions
An important property of the multivariate Gaussian distribution is that if two
sets of variables are jointly Gaussian, then the conditional distribution of one set
conditioned on the other is again Gaussian. Similarly, the marginal distribution of
either set is also Gaussian.
Consider ﬁrst the case of conditional distributions. Suppose x is a D-dimensional
vector with Gaussian distribution N(x|µ, Σ) and that we partition x into two dis-
joint subsets xa and xb. Without loss of generality, we can take xa to form the ﬁrst
M components of x, with xb comprising the remaining D −M components, so that
x =

xa
xb

.
(2.65)
We also deﬁne corresponding partitions of the mean vector µ given by
µ =

µa
µb

(2.66)
and of the covariance matrix Σ given by
Σ =

Σaa
Σab
Σba
Σbb

.
(2.67)
Note that the symmetry ΣT = Σ of the covariance matrix implies that Σaa and Σbb
are symmetric, while Σba = ΣT
ab.
In many situations, it will be convenient to work with the inverse of the covari-
ance matrix
Λ ≡Σ−1
(2.68)
which is known as the precision matrix. In fact, we shall see that some properties
of Gaussian distributions are most naturally expressed in terms of the covariance,
whereas others take a simpler form when viewed in terms of the precision. We
therefore also introduce the partitioned form of the precision matrix
Λ =

Λaa
Λab
Λba
Λbb

(2.69)
corresponding to the partitioning (2.65) of the vector x. Because the inverse of a
symmetric matrix is also symmetric, we see that Λaa and Λbb are symmetric, while
Exercise 2.22
ΛT
ab = Λba. It should be stressed at this point that, for instance, Λaa is not simply
given by the inverse of Σaa. In fact, we shall shortly examine the relation between
the inverse of a partitioned matrix and the inverses of its partitions.
Let us begin by ﬁnding an expression for the conditional distribution p(xa|xb).
From the product rule of probability, we see that this conditional distribution can be

2. PROBABILITY DISTRIBUTIONS
evaluated from the joint distribution p(x) = p(xa, xb) simply by ﬁxing xb to the
observed value and normalizing the resulting expression to obtain a valid probability
distribution over xa. Instead of performing this normalization explicitly, we can
obtain the solution more efﬁciently by considering the quadratic form in the exponent
of the Gaussian distribution given by (2.44) and then reinstating the normalization
coefﬁcient at the end of the calculation. If we make use of the partitioning (2.65),
(2.66), and (2.69), we obtain
−1
2(x −µ)TΣ−1(x −µ) =
−1
2(xa −µa)TΛaa(xa −µa) −1
2(xa −µa)TΛab(xb −µb)
−1
2(xb −µb)TΛba(xa −µa) −1
2(xb −µb)TΛbb(xb −µb).
(2.70)
We see that as a function of xa, this is again a quadratic form, and hence the cor-
responding conditional distribution p(xa|xb) will be Gaussian. Because this distri-
bution is completely characterized by its mean and its covariance, our goal will be
to identify expressions for the mean and covariance of p(xa|xb) by inspection of
(2.70).
This is an example of a rather common operation associated with Gaussian
distributions, sometimes called ‘completing the square’, in which we are given a
quadratic form deﬁning the exponent terms in a Gaussian distribution, and we need
to determine the corresponding mean and covariance. Such problems can be solved
straightforwardly by noting that the exponent in a general Gaussian distribution
N(x|µ, Σ) can be written
−1
2(x −µ)TΣ−1(x −µ) = −1
2xTΣ−1x + xTΣ−1µ + const
(2.71)
where ‘const’ denotes terms which are independent of x, and we have made use of
the symmetry of Σ. Thus if we take our general quadratic form and express it in
the form given by the right-hand side of (2.71), then we can immediately equate the
matrix of coefﬁcients entering the second order term in x to the inverse covariance
matrix Σ−1 and the coefﬁcient of the linear term in x to Σ−1µ, from which we can
obtain µ.
Now let us apply this procedure to the conditional Gaussian distribution p(xa|xb)
for which the quadratic form in the exponent is given by (2.70). We will denote the
mean and covariance of this distribution by µa|b and Σa|b, respectively. Consider
the functional dependence of (2.70) on xa in which xb is regarded as a constant. If
we pick out all terms that are second order in xa, we have
−1
2xT
a Λaaxa
(2.72)
from which we can immediately conclude that the covariance (inverse precision) of
p(xa|xb) is given by
Σa|b = Λ−1
aa .
(2.73)

2.3. The Gaussian Distribution
Now consider all of the terms in (2.70) that are linear in xa
xT
a {Λaaµa −Λab(xb −µb)}
(2.74)
where we have used ΛT
ba = Λab. From our discussion of the general form (2.71),
the coefﬁcient of xa in this expression must equal Σ−1
a|bµa|b and hence
µa|b
=
Σa|b {Λaaµa −Λab(xb −µb)}
=
µa −Λ−1
aa Λab(xb −µb)
(2.75)
where we have made use of (2.73).
The results (2.73) and (2.75) are expressed in terms of the partitioned precision
matrix of the original joint distribution p(xa, xb). We can also express these results
in terms of the corresponding partitioned covariance matrix. To do this, we make use
of the following identity for the inverse of a partitioned matrix
Exercise 2.24

A
B
C
D
−1
=

M
−MBD−1
−D−1CM
D−1 + D−1CMBD−1

(2.76)
where we have deﬁned
M = (A −BD−1C)−1.
(2.77)
The quantity M−1 is known as the Schur complement of the matrix on the left-hand
side of (2.76) with respect to the submatrix D. Using the deﬁnition

Σaa
Σab
Σba
Σbb
−1
=

Λaa
Λab
Λba
Λbb

(2.78)
and making use of (2.76), we have
Λaa
=
(Σaa −ΣabΣ−1
bb Σba)−1
(2.79)
Λab
=
−(Σaa −ΣabΣ−1
bb Σba)−1ΣabΣ−1
bb .
(2.80)
From these we obtain the following expressions for the mean and covariance of the
conditional distribution p(xa|xb)
µa|b
=
µa + ΣabΣ−1
bb (xb −µb)
(2.81)
Σa|b
=
Σaa −ΣabΣ−1
bb Σba.
(2.82)
Comparing (2.73) and (2.82), we see that the conditional distribution p(xa|xb) takes
a simpler form when expressed in terms of the partitioned precision matrix than
when it is expressed in terms of the partitioned covariance matrix. Note that the
mean of the conditional distribution p(xa|xb), given by (2.81), is a linear function of
xb and that the covariance, given by (2.82), is independent of xa. This represents an
example of a linear-Gaussian model.
Section 8.1.4

2. PROBABILITY DISTRIBUTIONS
2.3.2
Marginal Gaussian distributions
We have seen that if a joint distribution p(xa, xb) is Gaussian, then the condi-
tional distribution p(xa|xb) will again be Gaussian. Now we turn to a discussion of
the marginal distribution given by
p(xa) =

p(xa, xb) dxb
(2.83)
which, as we shall see, is also Gaussian. Once again, our strategy for evaluating this
distribution efﬁciently will be to focus on the quadratic form in the exponent of the
joint distribution and thereby to identify the mean and covariance of the marginal
distribution p(xa).
The quadratic form for the joint distribution can be expressed, using the par-
titioned precision matrix, in the form (2.70). Because our goal is to integrate out
xb, this is most easily achieved by ﬁrst considering the terms involving xb and then
completing the square in order to facilitate integration. Picking out just those terms
that involve xb, we have
−1
2xT
b Λbbxb+xT
b m = −1
2(xb−Λ−1
bb m)TΛbb(xb−Λ−1
bb m)+1
2mTΛ−1
bb m (2.84)
where we have deﬁned
m = Λbbµb −Λba(xa −µa).
(2.85)
We see that the dependence on xb has been cast into the standard quadratic form of a
Gaussian distribution corresponding to the ﬁrst term on the right-hand side of (2.84),
plus a term that does not depend on xb (but that does depend on xa). Thus, when
we take the exponential of this quadratic form, we see that the integration over xb
required by (2.83) will take the form

exp

−1
2(xb −Λ−1
bb m)TΛbb(xb −Λ−1
bb m)

dxb.
(2.86)
This integration is easily performed by noting that it is the integral over an unnor-
malized Gaussian, and so the result will be the reciprocal of the normalization co-
efﬁcient. We know from the form of the normalized Gaussian given by (2.43), that
this coefﬁcient is independent of the mean and depends only on the determinant of
the covariance matrix. Thus, by completing the square with respect to xb, we can
integrate out xb and the only term remaining from the contributions on the left-hand
side of (2.84) that depends on xa is the last term on the right-hand side of (2.84) in
which m is given by (2.85). Combining this term with the remaining terms from

2.3. The Gaussian Distribution
(2.70) that depend on xa, we obtain
2 [Λbbµb −Λba(xa −µa)]T Λ−1
bb [Λbbµb −Λba(xa −µa)]
−1
2xT
a Λaaxa + xT
a (Λaaµa + Λabµb) + const
=
−1
2xT
a (Λaa −ΛabΛ−1
bb Λba)xa
+xT
a (Λaa −ΛabΛ−1
bb Λba)−1µa + const
(2.87)
where ‘const’ denotes quantities independent of xa. Again, by comparison with
(2.71), we see that the covariance of the marginal distribution of p(xa) is given by
Σa = (Λaa −ΛabΛ−1
bb Λba)−1.
(2.88)
Similarly, the mean is given by
Σa(Λaa −ΛabΛ−1
bb Λba)µa = µa
(2.89)
where we have used (2.88). The covariance in (2.88) is expressed in terms of the
partitioned precision matrix given by (2.69). We can rewrite this in terms of the
corresponding partitioning of the covariance matrix given by (2.67), as we did for
the conditional distribution. These partitioned matrices are related by

Λaa
Λab
Λba
Λbb
−1
=

Σaa
Σab
Σba
Σbb

(2.90)
Making use of (2.76), we then have

Λaa −ΛabΛ−1
bb Λba
−1 = Σaa.
(2.91)
Thus we obtain the intuitively satisfying result that the marginal distribution p(xa)
has mean and covariance given by
E[xa]
=
µa
(2.92)
cov[xa]
=
Σaa.
(2.93)
We see that for a marginal distribution, the mean and covariance are most simply ex-
pressed in terms of the partitioned covariance matrix, in contrast to the conditional
distribution for which the partitioned precision matrix gives rise to simpler expres-
sions.
Our results for the marginal and conditional distributions of a partitioned Gaus-
sian are summarized below.
Partitioned Gaussians
Given a joint Gaussian distribution N(x|µ, Σ) with Λ ≡Σ−1 and
x =

xa
xb

,
µ =

µa
µb

(2.94)

2. PROBABILITY DISTRIBUTIONS
xa
xb = 0.7
xb
p(xa,xb)
0.5
0.5
xa
p(xa)
p(xa|xb = 0.7)
0.5
The plot on the left shows the contours of a Gaussian distribution p(xa, xb) over two variables, and
the plot on the right shows the marginal distribution p(xa) (blue curve) and the conditional distribution p(xa|xb)
for xb = 0.7 (red curve).
Σ =

Σaa
Σab
Σba
Σbb

,
Λ =

Λaa
Λab
Λba
Λbb

.
(2.95)
Conditional distribution:
p(xa|xb)
=
N(x|µa|b, Λ−1
aa )
(2.96)
µa|b
=
µa −Λ−1
aa Λab(xb −µb).
(2.97)
Marginal distribution:
p(xa) = N(xa|µa, Σaa).
(2.98)
We illustrate the idea of conditional and marginal distributions associated with
a multivariate Gaussian using an example involving two variables in Figure 2.9.
2.3.3
Bayes’ theorem for Gaussian variables
In Sections 2.3.1 and 2.3.2, we considered a Gaussian p(x) in which we parti-
tioned the vector x into two subvectors x = (xa, xb) and then found expressions for
the conditional distribution p(xa|xb) and the marginal distribution p(xa). We noted
that the mean of the conditional distribution p(xa|xb) was a linear function of xb.
Here we shall suppose that we are given a Gaussian marginal distribution p(x) and a
Gaussian conditional distribution p(y|x) in which p(y|x) has a mean that is a linear
function of x, and a covariance which is independent of x. This is an example of

2.3. The Gaussian Distribution
a linear Gaussian model (Roweis and Ghahramani, 1999), which we shall study in
greater generality in Section 8.1.4. We wish to ﬁnd the marginal distribution p(y)
and the conditional distribution p(x|y). This is a problem that will arise frequently
in subsequent chapters, and it will prove convenient to derive the general results here.
We shall take the marginal and conditional distributions to be
p(x)
=
N 
x|µ, Λ−1
(2.99)
p(y|x)
=
N

y|Ax + b, L−1
(2.100)
where µ, A, and b are parameters governing the means, and Λ and L are precision
matrices. If x has dimensionality M and y has dimensionality D, then the matrix A
has size D × M.
First we ﬁnd an expression for the joint distribution over x and y. To do this, we
deﬁne
z =

x
y

(2.101)
and then consider the log of the joint distribution
ln p(z)
=
ln p(x) + ln p(y|x)
=
−1
2(x −µ)TΛ(x −µ)
−1
2(y −Ax −b)TL(y −Ax −b) + const
(2.102)
where ‘const’ denotes terms independent of x and y. As before, we see that this is a
quadratic function of the components of z, and hence p(z) is Gaussian distribution.
To ﬁnd the precision of this Gaussian, we consider the second order terms in (2.102),
which can be written as
−1
2xT(Λ + ATLA)x −1
2yTLy + 1
2yTLAx + 1
2xTATLy
=
−1

x
y
T 
Λ + ATLA
−ATL
−LA
L
 
x
y

= −1
2zTRz
(2.103)
and so the Gaussian distribution over z has precision (inverse covariance) matrix
given by
R =

Λ + ATLA
−ATL
−LA
L

.
(2.104)
The covariance matrix is found by taking the inverse of the precision, which can be
done using the matrix inversion formula (2.76) to give
Exercise 2.29
cov
