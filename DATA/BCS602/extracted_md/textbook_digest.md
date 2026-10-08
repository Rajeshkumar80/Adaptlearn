<!-- PROVENANCE: subject_code=BCS602 | subject_name=Machine Learning | semester=6 | source_type=TEXTBOOK_DIGEST | source_file=textbook_notes.md | extraction_method=STRUCTURED_COMPREHENSIVE | confidence=0.95 -->

# BCS602 — Textbook Notes

**Subject:** BCS602 (Machine Learning)
**Content type:** textbook_notes
**Primary Reference:** Christopher M. Bishop — Pattern Recognition and Machine Learning & Trevor Hastie, Robert Tibshirani — The Elements of Statistical Learning

---

# BCS602 — Textbook Notes (Module-wise)
**Subject:** Machine Learning
**Prescribed Textbooks:** Christopher M. Bishop — Pattern Recognition and Machine Learning & Trevor Hastie, Robert Tibshirani — The Elements of Statistical Learning

---

## Module 1 Textbook: Introduction to Machine Learning

### Textbook Excerpt — Reference: T1_Pattern_Recognition_and_Machine_Learning_Bishop.txt

as a black arrow together with the corresponding decision boundary (black line), in which the
arrow points towards the decision region which classiﬁed as belonging to the red class. The data point circled
in green is misclassiﬁed and so its feature vector is added to the current weight vector, giving the new decision
boundary shown in the top right plot. The bottom left plot shows the next misclassiﬁed point to be considered,
indicated by the green circle, and its feature vector is again added to the weight vector giving the decision
boundary shown in the bottom right plot for which all data points are correctly classiﬁed.

Figure 4.8
Illustration of the Mark 1 perceptron hardware. The photograph on the left shows how the inputs
were obtained using a simple camera system in which an input scene, in this case a printed character, was
illuminated by powerful lights, and an image focussed onto a 20 × 20 array of cadmium sulphide photocells,
giving a primitive 400 pixel image. The perceptron also had a patch board, shown in the middle photograph,
which allowed different conﬁgurations of input features to be tried. Often these were wired up at random to
demonstrate the ability of the perceptron to learn without the need for precise wiring, in contrast to a modern
digital computer. The photograph on the right shows one of the racks of adaptive weights. Each weight was
implemented using a rotary variable resistor, also called a potentiometer, driven by an electric motor thereby
allowing the value of the weight to be adjusted automatically by the learning algorithm.
Aside from difﬁculties with the learning algorithm, the perceptron does not pro-
vide probabilistic outputs, nor does it generalize readily to K > 2 classes. The most
important limitation, however, arises from the fact that (in common with all of the
models discussed in this chapter and the previous one) it is based on linear com-
binations of ﬁxed basis functions. More detailed discussions of the limitations of
perceptrons can be found in Minsky and Papert (1969) and Bishop (1995a).
Analogue hardware implementations of the perceptron were built by Rosenblatt,
based on motor-driven variable resistors to implement the adaptive parameters wj.
These are illustrated in Figure 4.8. The inputs were obtained from a simple camera
system based on an array of photo-sensors, while the basis functions φ could be
chosen in a variety of ways, for example based on simple ﬁxed functions of randomly
chosen subsets of pixels from the input image. Typical applications involved learning
to discriminate simple shapes or characters.
At the same time that the perceptron was being developed, a closely related
system called the adaline, which is short for ‘adaptive linear element’, was being
explored by Widrow and co-workers. The functional form of the model was the same
as for the perceptron, but a different approach to training was adopted (Widrow and
Hoff, 1960; Widrow and Lehr, 1990).
We turn next to a probabilis

### Textbook Excerpt — Reference: T2_The_Elements_of_Statistical_Learning_Hastie.txt

re gleason, and
percent of Gleason scores 4 or 5 pgg45. Figure 1.1 is a scatterplot matrix
of the variables. Some correlations with lpsa are evident, but a good pre-
dictive model is diﬃcult to construct by eye.
This is a supervised learning problem, known as a regression problem,
because the outcome measurement is quantitative.
Example 3: Handwritten Digit Recognition
The data from this example come from the handwritten ZIP codes on
envelopes from U.S. postal mail. Each image is a segment from a ﬁve digit
ZIP code, isolating a single digit. The images are 16×16 eight-bit grayscale
maps, with each pixel ranging in intensity from 0 to 255. Some sample
images are shown in Figure 1.2.
The images have been normalized to have approximately the same size
and orientation. The task is to predict, from the 16 × 16 matrix of pixel
intensities, the identity of each image (0, 1, . . . , 9) quickly and accurately. If
it is accurate enough, the resulting algorithm would be used as part of an
automatic sorting procedure for envelopes. This is a classiﬁcation problem
for which the error rate needs to be kept very low to avoid misdirection of

mail. In order to achieve this low error rate, some objects can be assigned
to a “don’t know” category, and sorted instead by hand.
Example 4: DNA Expression Microarrays
DNA stands for deoxyribonucleic acid, and is the basic material that makes
up human chromosomes. DNA microarrays measure the expression of a
gene in a cell by measuring the amount of mRNA (messenger ribonucleic
acid) present for that gene. Microarrays are considered a breakthrough
technology in biology, facilitating the quantitative study of thousands of
genes simultaneously from a single sample of cells.
Here is how a DNA microarray works. The nucleotide sequences for a few
thousand genes are printed on a glass slide. A target sample and a reference
sample are labeled with red and green dyes, and each are hybridized with
the DNA on the slide. Through ﬂuoroscopy, the log (red/green) intensities
of RNA hybridizing at each site is measured. The result is a few thousand
numbers, typically ranging from say −6 to 6, measuring the expression level
of each gene in the target relative to the reference sample. Positive values
indicate higher expression in the target versus the reference, and vice versa
for negative values.
A gene expression dataset collects together the expression values from a
series of DNA microarray experiments, with each column representing an
experiment. There are therefore several thousand rows representing individ-
ual genes, and tens of columns representing samples: in the particular ex-
ample of Figure 1.3 there are 6830 genes (rows) and 64 samples (columns),
although for clarity only a random sample of 100 rows are shown. The ﬁg-
ure displays the data set as a heat map, ranging from green (negative) to
red (positive). The samples are 64 cancer tumors from diﬀerent patients.
The challenge here is to understand how the genes and samples are 

---

## Module 2 Textbook: Supervised Learning

### Textbook Excerpt — Reference: T1_Pattern_Recognition_and_Machine_Learning_Bishop.txt

as a black arrow together with the corresponding decision boundary (black line), in which the
arrow points towards the decision region which classiﬁed as belonging to the red class. The data point circled
in green is misclassiﬁed and so its feature vector is added to the current weight vector, giving the new decision
boundary shown in the top right plot. The bottom left plot shows the next misclassiﬁed point to be considered,
indicated by the green circle, and its feature vector is again added to the weight vector giving the decision
boundary shown in the bottom right plot for which all data points are correctly classiﬁed.

Figure 4.8
Illustration of the Mark 1 perceptron hardware. The photograph on the left shows how the inputs
were obtained using a simple camera system in which an input scene, in this case a printed character, was
illuminated by powerful lights, and an image focussed onto a 20 × 20 array of cadmium sulphide photocells,
giving a primitive 400 pixel image. The perceptron also had a patch board, shown in the middle photograph,
which allowed different conﬁgurations of input features to be tried. Often these were wired up at random to
demonstrate the ability of the perceptron to learn without the need for precise wiring, in contrast to a modern
digital computer. The photograph on the right shows one of the racks of adaptive weights. Each weight was
implemented using a rotary variable resistor, also called a potentiometer, driven by an electric motor thereby
allowing the value of the weight to be adjusted automatically by the learning algorithm.
Aside from difﬁculties with the learning algorithm, the perceptron does not pro-
vide probabilistic outputs, nor does it generalize readily to K > 2 classes. The most
important limitation, however, arises from the fact that (in common with all of the
models discussed in this chapter and the previous one) it is based on linear com-
binations of ﬁxed basis functions. More detailed discussions of the limitations of
perceptrons can be found in Minsky and Papert (1969) and Bishop (1995a).
Analogue hardware implementations of the perceptron were built by Rosenblatt,
based on motor-driven variable resistors to implement the adaptive parameters wj.
These are illustrated in Figure 4.8. The inputs were obtained from a simple camera
system based on an array of photo-sensors, while the basis functions φ could be
chosen in a variety of ways, for example based on simple ﬁxed functions of randomly
chosen subsets of pixels from the input image. Typical applications involved learning
to discriminate simple shapes or characters.
At the same time that the perceptron was being developed, a closely related
system called the adaline, which is short for ‘adaptive linear element’, was being
explored by Widrow and co-workers. The functional form of the model was the same
as for the perceptron, but a different approach to training was adopted (Widrow and
Hoff, 1960; Widrow and Lehr, 1990).
We turn next to a probabilis

### Textbook Excerpt — Reference: T2_The_Elements_of_Statistical_Learning_Hastie.txt

re gleason, and
percent of Gleason scores 4 or 5 pgg45. Figure 1.1 is a scatterplot matrix
of the variables. Some correlations with lpsa are evident, but a good pre-
dictive model is diﬃcult to construct by eye.
This is a supervised learning problem, known as a regression problem,
because the outcome measurement is quantitative.
Example 3: Handwritten Digit Recognition
The data from this example come from the handwritten ZIP codes on
envelopes from U.S. postal mail. Each image is a segment from a ﬁve digit
ZIP code, isolating a single digit. The images are 16×16 eight-bit grayscale
maps, with each pixel ranging in intensity from 0 to 255. Some sample
images are shown in Figure 1.2.
The images have been normalized to have approximately the same size
and orientation. The task is to predict, from the 16 × 16 matrix of pixel
intensities, the identity of each image (0, 1, . . . , 9) quickly and accurately. If
it is accurate enough, the resulting algorithm would be used as part of an
automatic sorting procedure for envelopes. This is a classiﬁcation problem
for which the error rate needs to be kept very low to avoid misdirection of

mail. In order to achieve this low error rate, some objects can be assigned
to a “don’t know” category, and sorted instead by hand.
Example 4: DNA Expression Microarrays
DNA stands for deoxyribonucleic acid, and is the basic material that makes
up human chromosomes. DNA microarrays measure the expression of a
gene in a cell by measuring the amount of mRNA (messenger ribonucleic
acid) present for that gene. Microarrays are considered a breakthrough
technology in biology, facilitating the quantitative study of thousands of
genes simultaneously from a single sample of cells.
Here is how a DNA microarray works. The nucleotide sequences for a few
thousand genes are printed on a glass slide. A target sample and a reference
sample are labeled with red and green dyes, and each are hybridized with
the DNA on the slide. Through ﬂuoroscopy, the log (red/green) intensities
of RNA hybridizing at each site is measured. The result is a few thousand
numbers, typically ranging from say −6 to 6, measuring the expression level
of each gene in the target relative to the reference sample. Positive values
indicate higher expression in the target versus the reference, and vice versa
for negative values.
A gene expression dataset collects together the expression values from a
series of DNA microarray experiments, with each column representing an
experiment. There are therefore several thousand rows representing individ-
ual genes, and tens of columns representing samples: in the particular ex-
ample of Figure 1.3 there are 6830 genes (rows) and 64 samples (columns),
although for clarity only a random sample of 100 rows are shown. The ﬁg-
ure displays the data set as a heat map, ranging from green (negative) to
red (positive). The samples are 64 cancer tumors from diﬀerent patients.
The challenge here is to understand how the genes and samples are 

---

## Module 3 Textbook: Unsupervised Learning

### Textbook Excerpt — Reference: T1_Pattern_Recognition_and_Machine_Learning_Bishop.txt

as a black arrow together with the corresponding decision boundary (black line), in which the
arrow points towards the decision region which classiﬁed as belonging to the red class. The data point circled
in green is misclassiﬁed and so its feature vector is added to the current weight vector, giving the new decision
boundary shown in the top right plot. The bottom left plot shows the next misclassiﬁed point to be considered,
indicated by the green circle, and its feature vector is again added to the weight vector giving the decision
boundary shown in the bottom right plot for which all data points are correctly classiﬁed.

Figure 4.8
Illustration of the Mark 1 perceptron hardware. The photograph on the left shows how the inputs
were obtained using a simple camera system in which an input scene, in this case a printed character, was
illuminated by powerful lights, and an image focussed onto a 20 × 20 array of cadmium sulphide photocells,
giving a primitive 400 pixel image. The perceptron also had a patch board, shown in the middle photograph,
which allowed different conﬁgurations of input features to be tried. Often these were wired up at random to
demonstrate the ability of the perceptron to learn without the need for precise wiring, in contrast to a modern
digital computer. The photograph on the right shows one of the racks of adaptive weights. Each weight was
implemented using a rotary variable resistor, also called a potentiometer, driven by an electric motor thereby
allowing the value of the weight to be adjusted automatically by the learning algorithm.
Aside from difﬁculties with the learning algorithm, the perceptron does not pro-
vide probabilistic outputs, nor does it generalize readily to K > 2 classes. The most
important limitation, however, arises from the fact that (in common with all of the
models discussed in this chapter and the previous one) it is based on linear com-
binations of ﬁxed basis functions. More detailed discussions of the limitations of
perceptrons can be found in Minsky and Papert (1969) and Bishop (1995a).
Analogue hardware implementations of the perceptron were built by Rosenblatt,
based on motor-driven variable resistors to implement the adaptive parameters wj.
These are illustrated in Figure 4.8. The inputs were obtained from a simple camera
system based on an array of photo-sensors, while the basis functions φ could be
chosen in a variety of ways, for example based on simple ﬁxed functions of randomly
chosen subsets of pixels from the input image. Typical applications involved learning
to discriminate simple shapes or characters.
At the same time that the perceptron was being developed, a closely related
system called the adaline, which is short for ‘adaptive linear element’, was being
explored by Widrow and co-workers. The functional form of the model was the same
as for the perceptron, but a different approach to training was adopted (Widrow and
Hoff, 1960; Widrow and Lehr, 1990).
We turn next to a probabilis

### Textbook Excerpt — Reference: T2_The_Elements_of_Statistical_Learning_Hastie.txt

re gleason, and
percent of Gleason scores 4 or 5 pgg45. Figure 1.1 is a scatterplot matrix
of the variables. Some correlations with lpsa are evident, but a good pre-
dictive model is diﬃcult to construct by eye.
This is a supervised learning problem, known as a regression problem,
because the outcome measurement is quantitative.
Example 3: Handwritten Digit Recognition
The data from this example come from the handwritten ZIP codes on
envelopes from U.S. postal mail. Each image is a segment from a ﬁve digit
ZIP code, isolating a single digit. The images are 16×16 eight-bit grayscale
maps, with each pixel ranging in intensity from 0 to 255. Some sample
images are shown in Figure 1.2.
The images have been normalized to have approximately the same size
and orientation. The task is to predict, from the 16 × 16 matrix of pixel
intensities, the identity of each image (0, 1, . . . , 9) quickly and accurately. If
it is accurate enough, the resulting algorithm would be used as part of an
automatic sorting procedure for envelopes. This is a classiﬁcation problem
for which the error rate needs to be kept very low to avoid misdirection of

mail. In order to achieve this low error rate, some objects can be assigned
to a “don’t know” category, and sorted instead by hand.
Example 4: DNA Expression Microarrays
DNA stands for deoxyribonucleic acid, and is the basic material that makes
up human chromosomes. DNA microarrays measure the expression of a
gene in a cell by measuring the amount of mRNA (messenger ribonucleic
acid) present for that gene. Microarrays are considered a breakthrough
technology in biology, facilitating the quantitative study of thousands of
genes simultaneously from a single sample of cells.
Here is how a DNA microarray works. The nucleotide sequences for a few
thousand genes are printed on a glass slide. A target sample and a reference
sample are labeled with red and green dyes, and each are hybridized with
the DNA on the slide. Through ﬂuoroscopy, the log (red/green) intensities
of RNA hybridizing at each site is measured. The result is a few thousand
numbers, typically ranging from say −6 to 6, measuring the expression level
of each gene in the target relative to the reference sample. Positive values
indicate higher expression in the target versus the reference, and vice versa
for negative values.
A gene expression dataset collects together the expression values from a
series of DNA microarray experiments, with each column representing an
experiment. There are therefore several thousand rows representing individ-
ual genes, and tens of columns representing samples: in the particular ex-
ample of Figure 1.3 there are 6830 genes (rows) and 64 samples (columns),
although for clarity only a random sample of 100 rows are shown. The ﬁg-
ure displays the data set as a heat map, ranging from green (negative) to
red (positive). The samples are 64 cancer tumors from diﬀerent patients.
The challenge here is to understand how the genes and samples are 

---

## Module 4 Textbook: Ensemble Methods and Model Evaluation

### Textbook Excerpt — Reference: T1_Pattern_Recognition_and_Machine_Learning_Bishop.txt

n y(x, w⋆) exhibits wild oscillations.
This may seem paradoxical because a polynomial of given order contains all
lower order polynomials as special cases. The M = 9 polynomial is therefore capa-
ble of generating results at least as good as the M = 3 polynomial. Furthermore, we
might suppose that the best predictor of new data would be the function sin(2πx)
from which the data was generated (and we shall see later that this is indeed the
case). We know that a power series expansion of the function sin(2πx) contains
terms of all orders, so we might expect that results should improve monotonically as
we increase M.
We can gain some insight into the problem by examining the values of the co-
efﬁcients w⋆obtained from polynomials of various order, as shown in Table 1.1.
We see that, as M increases, the magnitude of the coefﬁcients typically gets larger.
In particular for the M = 9 polynomial, the coefﬁcients have become ﬁnely tuned
to the data by developing large positive and negative values so that the correspond-
Table 1.1
Table of the coefﬁcients w⋆for
polynomials of various order.
Observe how the typical mag-
nitude of the coefﬁcients in-
creases dramatically as the or-
der of the polynomial increases.
M = 0
M = 1
M = 6
M = 9
w⋆
w⋆
-1.27
w⋆
-25.43
-5321.83
w⋆
48568.31
w⋆
-231639.30
w⋆
640042.26
w⋆
-1061800.52
w⋆
1042400.18
w⋆
-557682.99
w⋆
125201.43

x
t
N = 15
−1
x
t
N = 100
−1
Figure 1.6
Plots of the solutions obtained by minimizing the sum-of-squares error function using the M = 9
polynomial for N = 15 data points (left plot) and N = 100 data points (right plot). We see that increasing the
size of the data set reduces the over-ﬁtting problem.
ing polynomial function matches each of the data points exactly, but between data
points (particularly near the ends of the range) the function exhibits the large oscilla-
tions observed in Figure 1.4. Intuitively, what is happening is that the more ﬂexible
polynomials with larger values of M are becoming increasingly tuned to the random
noise on the target values.
It is also interesting to examine the behaviour of a given model as the size of the
data set is varied, as shown in Figure 1.6. We see that, for a given model complexity,
the over-ﬁtting problem become less severe as the size of the data set increases.
Another way to say this is that the larger the data set, the more complex (in other
words more ﬂexible) the model that we can afford to ﬁt to the data. One rough
heuristic that is sometimes advocated is that the number of data points should be
no less than some multiple (say 5 or 10) of the number of adaptive parameters in
the model. However, as we shall see in Chapter 3, the number of parameters is not
necessarily the most appropriate measure of model complexity.
Also, there is something rather unsatisfying about having to limit the number of
parameters in a model according to the size of the available training set. It would
seem more reasonable to choose the complexity of the model according t

### Textbook Excerpt — Reference: T1_Pattern_Recognition_and_Machine_Learning_Bishop.txt

as a black arrow together with the corresponding decision boundary (black line), in which the
arrow points towards the decision region which classiﬁed as belonging to the red class. The data point circled
in green is misclassiﬁed and so its feature vector is added to the current weight vector, giving the new decision
boundary shown in the top right plot. The bottom left plot shows the next misclassiﬁed point to be considered,
indicated by the green circle, and its feature vector is again added to the weight vector giving the decision
boundary shown in the bottom right plot for which all data points are correctly classiﬁed.

Figure 4.8
Illustration of the Mark 1 perceptron hardware. The photograph on the left shows how the inputs
were obtained using a simple camera system in which an input scene, in this case a printed character, was
illuminated by powerful lights, and an image focussed onto a 20 × 20 array of cadmium sulphide photocells,
giving a primitive 400 pixel image. The perceptron also had a patch board, shown in the middle photograph,
which allowed different conﬁgurations of input features to be tried. Often these were wired up at random to
demonstrate the ability of the perceptron to learn without the need for precise wiring, in contrast to a modern
digital computer. The photograph on the right shows one of the racks of adaptive weights. Each weight was
implemented using a rotary variable resistor, also called a potentiometer, driven by an electric motor thereby
allowing the value of the weight to be adjusted automatically by the learning algorithm.
Aside from difﬁculties with the learning algorithm, the perceptron does not pro-
vide probabilistic outputs, nor does it generalize readily to K > 2 classes. The most
important limitation, however, arises from the fact that (in common with all of the
models discussed in this chapter and the previous one) it is based on linear com-
binations of ﬁxed basis functions. More detailed discussions of the limitations of
perceptrons can be found in Minsky and Papert (1969) and Bishop (1995a).
Analogue hardware implementations of the perceptron were built by Rosenblatt,
based on motor-driven variable resistors to implement the adaptive parameters wj.
These are illustrated in Figure 4.8. The inputs were obtained from a simple camera
system based on an array of photo-sensors, while the basis functions φ could be
chosen in a variety of ways, for example based on simple ﬁxed functions of randomly
chosen subsets of pixels from the input image. Typical applications involved learning
to discriminate simple shapes or characters.
At the same time that the perceptron was being developed, a closely related
system called the adaline, which is short for ‘adaptive linear element’, was being
explored by Widrow and co-workers. The functional form of the model was the same
as for the perceptron, but a different approach to training was adopted (Widrow and
Hoff, 1960; Widrow and Lehr, 1990).
We turn next to a probabilis

---

## Module 5 Textbook: Neural Networks and Deep Learning Basics

### Textbook Excerpt — Reference: T1_Pattern_Recognition_and_Machine_Learning_Bishop.txt

n y(x, w⋆) exhibits wild oscillations.
This may seem paradoxical because a polynomial of given order contains all
lower order polynomials as special cases. The M = 9 polynomial is therefore capa-
ble of generating results at least as good as the M = 3 polynomial. Furthermore, we
might suppose that the best predictor of new data would be the function sin(2πx)
from which the data was generated (and we shall see later that this is indeed the
case). We know that a power series expansion of the function sin(2πx) contains
terms of all orders, so we might expect that results should improve monotonically as
we increase M.
We can gain some insight into the problem by examining the values of the co-
efﬁcients w⋆obtained from polynomials of various order, as shown in Table 1.1.
We see that, as M increases, the magnitude of the coefﬁcients typically gets larger.
In particular for the M = 9 polynomial, the coefﬁcients have become ﬁnely tuned
to the data by developing large positive and negative values so that the correspond-
Table 1.1
Table of the coefﬁcients w⋆for
polynomials of various order.
Observe how the typical mag-
nitude of the coefﬁcients in-
creases dramatically as the or-
der of the polynomial increases.
M = 0
M = 1
M = 6
M = 9
w⋆
w⋆
-1.27
w⋆
-25.43
-5321.83
w⋆
48568.31
w⋆
-231639.30
w⋆
640042.26
w⋆
-1061800.52
w⋆
1042400.18
w⋆
-557682.99
w⋆
125201.43

x
t
N = 15
−1
x
t
N = 100
−1
Figure 1.6
Plots of the solutions obtained by minimizing the sum-of-squares error function using the M = 9
polynomial for N = 15 data points (left plot) and N = 100 data points (right plot). We see that increasing the
size of the data set reduces the over-ﬁtting problem.
ing polynomial function matches each of the data points exactly, but between data
points (particularly near the ends of the range) the function exhibits the large oscilla-
tions observed in Figure 1.4. Intuitively, what is happening is that the more ﬂexible
polynomials with larger values of M are becoming increasingly tuned to the random
noise on the target values.
It is also interesting to examine the behaviour of a given model as the size of the
data set is varied, as shown in Figure 1.6. We see that, for a given model complexity,
the over-ﬁtting problem become less severe as the size of the data set increases.
Another way to say this is that the larger the data set, the more complex (in other
words more ﬂexible) the model that we can afford to ﬁt to the data. One rough
heuristic that is sometimes advocated is that the number of data points should be
no less than some multiple (say 5 or 10) of the number of adaptive parameters in
the model. However, as we shall see in Chapter 3, the number of parameters is not
necessarily the most appropriate measure of model complexity.
Also, there is something rather unsatisfying about having to limit the number of
parameters in a model according to the size of the available training set. It would
seem more reasonable to choose the complexity of the model according t

### Textbook Excerpt — Reference: T1_Pattern_Recognition_and_Machine_Learning_Bishop.txt

as a black arrow together with the corresponding decision boundary (black line), in which the
arrow points towards the decision region which classiﬁed as belonging to the red class. The data point circled
in green is misclassiﬁed and so its feature vector is added to the current weight vector, giving the new decision
boundary shown in the top right plot. The bottom left plot shows the next misclassiﬁed point to be considered,
indicated by the green circle, and its feature vector is again added to the weight vector giving the decision
boundary shown in the bottom right plot for which all data points are correctly classiﬁed.

Figure 4.8
Illustration of the Mark 1 perceptron hardware. The photograph on the left shows how the inputs
were obtained using a simple camera system in which an input scene, in this case a printed character, was
illuminated by powerful lights, and an image focussed onto a 20 × 20 array of cadmium sulphide photocells,
giving a primitive 400 pixel image. The perceptron also had a patch board, shown in the middle photograph,
which allowed different conﬁgurations of input features to be tried. Often these were wired up at random to
demonstrate the ability of the perceptron to learn without the need for precise wiring, in contrast to a modern
digital computer. The photograph on the right shows one of the racks of adaptive weights. Each weight was
implemented using a rotary variable resistor, also called a potentiometer, driven by an electric motor thereby
allowing the value of the weight to be adjusted automatically by the learning algorithm.
Aside from difﬁculties with the learning algorithm, the perceptron does not pro-
vide probabilistic outputs, nor does it generalize readily to K > 2 classes. The most
important limitation, however, arises from the fact that (in common with all of the
models discussed in this chapter and the previous one) it is based on linear com-
binations of ﬁxed basis functions. More detailed discussions of the limitations of
perceptrons can be found in Minsky and Papert (1969) and Bishop (1995a).
Analogue hardware implementations of the perceptron were built by Rosenblatt,
based on motor-driven variable resistors to implement the adaptive parameters wj.
These are illustrated in Figure 4.8. The inputs were obtained from a simple camera
system based on an array of photo-sensors, while the basis functions φ could be
chosen in a variety of ways, for example based on simple ﬁxed functions of randomly
chosen subsets of pixels from the input image. Typical applications involved learning
to discriminate simple shapes or characters.
At the same time that the perceptron was being developed, a closely related
system called the adaline, which is short for ‘adaptive linear element’, was being
explored by Widrow and co-workers. The functional form of the model was the same
as for the perceptron, but a different approach to training was adopted (Widrow and
Hoff, 1960; Widrow and Lehr, 1990).
We turn next to a probabilis

---
