<!-- PROVENANCE: subject_code=BCS405A | subject_name=Discrete Mathematical Structures | semester=4 | module=1 | source_type=MODULE_NOTES | source_file=module1.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS405A — Module 1

## Mathematical Logic

**Subject:** BCS405A (Discrete Mathematical Structures)
**Module:** Module 1
**Content type:** textbook_fallback
**Sources:** T1_Discrete_Mathematics_for_Computer_Science.txt

---

I. 
=ý. 
1. 
! 
•
|~ilH

Terms 
Meaning 
Section
Sets, Proof Templates, and Induction
x e A 
x is an element ofA 
1.1
x f A 
x is not an element ofA 
1.1
Ix x E A and P(x)} 
Set notation 
1.1
N 
Natural numbers 
1.1.1l
Integers 
1.1.1
Q 
Rationals 
1.1.1
R 
Real numbers 
I.1.1
A = B 
Sets A and B are equal 
1.1.3
A C B 
A is a subset of B 
1.1.5
A g B 
A is nota subset of B 
1.1.5
A C B 
A is a proper subset of B 
1.1.5
A 5 B 
A is nota proper subset of B 
1.1.5
b=•a 
bimplies a 
i.1.5
a 
b 
a if and only if b 
1.1.5
AUB 
A union B 
1.3.1
AFnB 
A intersect B 
1.3.1
UX 
Generalized union of family of sets X 
1.3.1
nX 
Generalized intersection of family of sets X 
1.3.1
Um Xi 
Xm U ... UXn 
1.3.1
nt=Mxi 
Xm n ... n Xn 
1.3.1
A - B 
Elements of A not in B 
1.3.2
A 
Elements not in A 
1.3.2
A D B 
(A U B) - (A n B) 
1.3.2
P(X) 
Power set of X 
1.3.4
X x Y 
Product of X and Y 
1.3.4
x A y 
Meet ofx and y 
1.3.5
x v y 
Join ofx and y 
1.3.5
-x 
Complement of x 
1.3.5
T 
Top 
1.15
I 
Bottom 
1.3.5
JAI 
Cardinality of A 
1.5.1
Si 
a,, + " -". + a,, 
1.7.1

Terms 
Meaning 
Section
Formal Logic
"--p 
Not p 
2.1
pAq 
p and q 
2.1
pvq 
p or q 
2.1
p 
q 
p implies q 
2.1
p 
q 
p is equivalent to q 
2.1
S 
X 
S logically implies X 
2.3.3
P 3 AKP 
Conjecture about complexity 
2.5.6
(Vx)P(x) 
For all x, P(x) 
2.7.2
(3x)P(x) 
There exists an x such that P(x) 
2.7.2
(VxE V)P(x) 
For all X EV, P(x) 
2.7.3
(3x E V)P(x) 
There exists an x E V such that P(x) 
2.7.3
A[i . .j] 
Array with elements Ail, ... , A[j] 
2.7.3
Sheffer stroke 
2.4
V 
Exclusive or 
2.4
4, 
Pierce arrow 
2.9
(x, y) E R or xRy 
x is R-related to y 
3.1
R-1 
The inverse of the relation R 
3.2.1
RoS 
Composition of relations R and S 
3.2.2
R+ 
U°° Ri 
3.4.4
R* 
URO R' 
3.4.4
n =- m(modp) 
n - m = kp for some k E N 
3.6
Idx 
Identity relation 
3.1
Lex 
Less than or equal relation 
3.1
Gtx 
Greater than relation 
3.1
Gex 
Greater than or equal relation 
3.1
[x] 
Equivalence class of x 
3.6
min 
m divides n 
3.8.1
R D. S 
Equijoin of relations R and S 
3.10.2

www.brookscole.com
www.brookscole.com is the World Wide Web site for
Brooks/Cole and is your direct source to dozens of
online resources.
At www.brookscole.com you can find out about
supplements, demonstration software, and student
resources. You can also send email to many of our
authors and preview new publications
and exciting new technologies.
www.brookscole.com
Changing the way the world learns

Discrete Mathematics
for Computer Science

fo 
Copue 
Science
Gary Haggard
Bucknell University
John Schlipf
University of Cincinnati
Sue Whitesides
McGill University
THOrVIMSO3N
BROOGKS/COLE 
Australia Canada Mexico • Singapore • Spain
United Kingdom • United States

THOIMSO>N
BROOKS/COLE
Publisher: Bob Pirtle 
Production Service: Hearthside Publishing Service;
Assistant Editor: Stacy Green 
Anne Seitz
Editorial Assistant: Katherine Cook 
Text Designer: Roy Neuhaus
Technology Project Manager: Earl Perry 
Copy Editor: Hearthside Publishing Service;
Marketing Manager: Tom Ziolkowski 
Wesley Morrison
Marketing Assistant: Erin Mitchell 
Illustrator: Hearthside Publishing Service;
Advertising Project Manager: Bryan Vann 
Jade Myers
Signing Representative: Stephanie Shedlock 
Cover Designer: Roy R. Neuhaus
Project Manager, Editorial Production: 
Cover Image: DigitalVision
Cheryll Linthicum 
Cover Printer: Phoenix Color Corp
Art Director: Vernon Boes 
Compositor: ATLIS
Print/Media Buyer: Doreen Suruki 
Printer: Phoenix Color Corp
Permissions Editor: Chelsea Junget
COPYRIGHT ® 2006 Thomson Brooks/Cole, a part of 
Thomson Higher Education
The Thomson Corporation. Thomson, the Star logo, and 
10 Davis Drive
Brooks/Cole are trademarks used herein under license. 
Belmont, CA 94002-3098
ALL RIGHTS RESERVED. No part of this work covered 
USA
by the copyright hereon may be reproduced or used in any 
Asia
form or by any means-graphic, electronic, or mechanical, 
Thomson Learning
including photocopying, recording, taping, Web distribution, 
5 Shenton Way #01-01
information storage and retrieval systems, or in any other 
UIC Building
manner-without the written permission of the publisher. 
Singapore 068808
Australia/New Zealand
Printed in the United States of America 
Thomson Learning
1 2 3 4 5 6 7 
09 08 07 06 05 
102 Dodds Street
Southbank, Victoria 3006
Australia
For more information about our products, 
Canada
contact us at: 
Nelson
Thomson Learning Academic Resource Center 
1120 Birchmount Road
1-800-423-0563 
Toronto, Ontario MIK 5G4
Canada
For permission to use material from this text or
product, submit a request online at 
Europe/Middle East/Africa
http://www.thomsonrights.com. 
Thomson Learning
Any additional questions about permissions can be 
High Holbom House
submitted by email to thomsonrights@thomson.com. 
50/51 Bedford Row
London, WC1R 4LR
United Kingdom
Library of Congress Control Number: 2004113828 
Latin America
Thomson Learning
ISBN 0-534-49501-X 
Seneca, 53
Colonia Polanco
°°• 
•.•%11560 
Mexico D.F.
• 
! 
Mexico
Spain/Portugal
4 EcyO'- 
Paraninfo
Calle Magallanes, 25
28015 Madrid
Spain

Contents
CHAPTER 
Sets, Proof Templates, and Induction
1.1 
Basic Definitions 
1.1.1 
Describing Sets Mathematically 
1.1.2 
Set Membership 
1.1.3 
Equality of Sets 4
1.1.4 
Finite and Infinite Sets 
1.1.5 
Relations Between Sets 
1.1.6 
Venn Diagrams 
1.1.7 
Templates 
1.2 Exercises 
1.3 Operations on Sets 
1.3.1 
Union and Intersection 
1.3.2 
Set Difference, Complements, and DeMorgan's Laws 
1.3.3 
New Proof Templates 
1.3.4 
Power Sets and Products 
1.3.5 
Lattices and Boolean Algebras 
1.4 Exercises 
1.5 The Principle of Inclusion-Exclusion 
1.5.1 
Finite Cardinality 
1.5.2 
Principle of Inclusion-Exclusion for Two Sets 
1.5.3 
Principle of Inclusion-Exclusion for Three Sets 
1.5.4 
Principle of Inclusion-Exclusion for Finitely Many Sets 
1.6 Exercises 
vii

viii 
Contents
1.7 Mathematical Induction 
1.71 
A First Form of Induction 
1.72 
A Template for Constructing Proofs by Induction 
1.73 
Application: Fibonacci Numbers 
1.74 
Application: Size of a Power Set 
1.75 
Application: Geometric Series 
1.8 Program Correctness 
1.8.1 
Pseudocode Conventions 
1.8.2 
An Algorithm to Generate Perfect Squares 
1.8.3 Two Algorithms for Computing Square Roots 
1.9 Exercises 
1.10 Strong Form of Mathematical Induction 
1.10.1 Using the Strong Form of Mathematical Induction 
1.10.2 Application: Algorithm to Compute Powers 
1.10.3 Application: Finding Factorizations 
1.10.4 Application: Binary Search 
1.11 Exercises 
1.12 Chapter Review 
1.12.1 Summary 
1.12.2 Starting to Review 
1.12.3 Review Questions 
1.12.4 Using Discrete Mathematics in Computer Science 
CHAPTER 2
Formal Logic 
2.1 
Introduction to Propositional Logic 
2.1.1 
Formulas 
2.1.2 
Expression Trees for Formulas 
2.1.3 
Abbreviated Notation for Formulas 
2.1.4 
Using Gates to Represent Formulas 
2.2 Exercises 
2.3 Truth and Logical Truth 
2.3.1 
Tautologies 

Contents 
ix
2.3.2 
Substitutions into Tautologies 
2.3.3 
Logically Valid Inferences 
2.3.4 Combinatorial Networks 
2.3.5 Substituting Equivalent Subformulas 
2.3.6 Simplifying Negations 
2.4 Exercises 
2.5 Normal Forms 
2.5.1 
Disjunctive Normal Form 
2.5.2 Application: DNF and Combinatorial Networks 
2.5.3 Conjunctive Normal Form 
2.5.4 Application: CNF and Combinatorial Networks 
2.5.5 Testing Satisfiability and Validity 
2.5.6 The Famous 'P Af r Conjecture 
2.5.7 Resolution Proofs: Automating Logic 
2.6 Exercises 
2.7 Predicates and Quantification 
2.71 
Predicates 
2.72 
Quantification 
2.73 
Restricted Quantification 
2.74 
Nested Quantifiers 
2.75 
Negation and Quantification 
2.76 
Quantification with Conjunction and Disjunction 
2.77 
Application: Loop Invariant Assertions 
2.8 Exercises 
2.9 Chapter Review 
2.9.1 
Summary 
2.9.2 
Starting to Review 
2.9.3 
Review Questions 
2.9.4 
Using Discrete Mathematics in Computer Science 
CHAPTER 3
Relations 
3.1 
Binary Relations 
3.1.1 
n-ary Relations 

x 
Contents
3.2 Operations on Binary Relations 
3.2.1 
Inverses 
3.2.2 Composition 
3.3 Exercises 
3.4 Special Types of Relations 
3.4.1 
Reflexive and Irreflexive Relations 
3.4.2 Symmetric and Antisymmetric Relations 
3.4.3 Transitive Relations 
3.4.4 
Reflexive, Symmetric, and Transitive Closures 
3.4.5 Application: Transitive Closures in Medicine and Engineering 
3.5 Exercises 
3.6 Equivalence Relations 
3.6.1 
Partitions 
3.6.2 Comparing Equivalence Relations 
3.7 Exercises 
3.8 Ordering Relations 
3.8.1 
Partial Orderings 
3.8.2 Linear Orderings 
3.8.3 Comparable Elements 
3.8.4 Optimal Elements in Orderings 
3.8.5 Application: Finding a Minimal Element 
3.8.6 Application: Embedding a Partial Order 200
3.9 Exercises 
3.10 Relational Databases: An Introduction 
3.10.1 Storing Information in Relations 
3.10.2 Relational Algebra 
3.11 Exercises 
3.12 Chapter Review 
3.12.1 Summary 
3.12.2 Starting to Review 
3.12.3 Review Questions 
3.12.4 Using Discrete Mathematics in Computer Science 

Contents 
xi
CHAPTER 4
Functions 
4.1 
Basic Definitions 
4.1.1 
Functions as Rules 
4.1.2 
Functions as Sets 222
4.1.3 
Recursively Defined Functions 
4.1.4 
Graphs of Functions 
4.1.5 
Equality of Functions 
4.1.6 
Restrictions of Functions 
4.1.7 
Partial Functions 
4.1.8 
1-1 and Onto Functions 231
4.1.9 
Increasing and Decreasing Functions 
4.2 Exercises 
4.3 Operations on Functions 
4.3.1 
Composition of Functions 243
4.3.2 Inverses of Functions 245
4.3.3 Other Operations on Functions 
4.4 Sequences and Subsequences 
4.5 Exercises 
4.6 The Pigeon-Hole Principle 
4.6.1 
k to 1 Functions 254
4.6.2 Proofs of the Pigeon-Hole Principle 
4.6.3 Application: Decimal Expansion of Rational Numbers 
4.6.4 Application: Problems with Divisors and Schedules 
4.6.5 Application: Two Combinatorial Results 
4.7 Exercises 
4.8 Countable and Uncountable Sets 
4.8.1 
Countably Infinite Sets 
4.8.2 
Cantor's First Diagonal Argument 
4.8.3 
Uncountable Sets and Cantor's Second Diagonal Argument 
4.8.4 Cardinalities of Power Sets 
4.9 Exercises 

xii 
Contents
4.10 Chapter Review 
4.10.1 Summary 
4.10.2 Starting to Review 
4.10.3 Review Questions 
4.10.4 Using Discrete Mathematics in Computer Science 280
CHAPTER 5
Analysis of Algorithms 
5.1 
Comparing Growth Rates of Functions 
5.1.1 
A Measure for Comparing Growth Rates 
5.1.2 
Properties of Asymptotic Domination 
5.1.3 
Polynomial Functions 
5.1.4 
Exponential and Logarithmic Functions 
5.2 
Exercises 
5.3 Complexity of Programs 
5.3.1 Counting Statements 
5.3.2 Two Algorithms Illustrating Selection 
5.3.3 An Algorithm Illustrating Repetition 
5.3.4 An Algorithm Illustrating Nested Repetition 
5.3.5 Time Complexity of an Algorithm 
5.3.6 Variants on the Definition of Complexity 
5.4 Exercises 
5.5 
Uncomputability 
5.5.1 
The Halting Problem 
5.6 Chapter Review 
5.6.1 
Summary 321
5.6.2 Starting to Review 
5.6.3 Review Questions 322
5.6.4 Using Discrete Mathematics in Computer Science 

Contents 
xiii
CHAPTER 6
Graph Theory 
6.1 
Introduction to Graph Theory 
6.1.1 
Definitions 
6.1.2 
Subgraphs 
6.2 The Handshaking Problem 
6.3 Paths and Cycles 
6.3.1 
Hamiltonian Cycles 
6.4 Graph Isomorphism 
6.5 Representation of Graphs 
6.5.1 
Adjacency Matrix 
6.5.2 Adjacency Lists 347
6.6 Exercises 
6.7 
Connected Graphs 
6.71 
The Relation CONN 352
6.7.2 
Depth First Search 
6.7.3 
Complexity of Dfs 357
6.74 
Breadth First Search 
6.7.5 
Finding Connected Components 
6.8 The K6nigsberg Bridge Problem 
6.8.1 
Graph Tracing 
6.9 Exercises 
6.10 Trees 
6.10.1 Definition of Trees 371
6.10.2 Characterization of Trees 
6.11 Spanning Trees 
6.11.1 Kruskal's Algorithm 
6.11.2 Correctness of Kruskal's Algorithm 
6.11.3 Kruskal's Algorithm for Weighted Graphs 
6.11.4 Correctness of Kruskal's Weighted Graph Algorithm 

xiv 
Contents
6.12 Rooted Trees 
6.12.1 Binary Trees 380
6.12.2 Binary Search Trees 
6.12.3 Tree Traversals 
6.12.4 Application: Decision Trees 387
6.13 Exercises 
6.14 Directed Graphs 
6.14.1 Basic Definitions 
6.14.2 Directed Trails, Paths, Circuits, and Cycles 394
6.14.3 Directed Graph Isomorphism 394
6.15 Application: Scheduling a Meeting Facility 
6.15.1 WAITFOR Graphs 
6.16 Finding a Cycle in a Directed Graph 
6.16.1 Directed Cycle Detection Algorithm 
6.16.2 Correctness of Directed Cycle Detection 
6.17 Priority in Scheduling 
6.171 Algorithm for Topological Sort 400
6.172 Correctness of Topological Sort Algorithm 
6.18 Connectivity in Directed Graphs 
6.18.1 Strongly Connected Directed Graphs 
6.18.2 Application: Designing One-Way Street Grids 
6.19 Eulerian Circuits in Directed Graphs 
6.20 Exercises 
6.21 Chapter Review 
6.21.1 Summary 
6.21.2 Starting to Review 
6.21.3 Review Questions 
6.21.4 Using Discrete Mathematics in Computer Science 
CHAPTER 7
Counting and Combinatorics 
7.1 Traveling Salesperson's Problem 

Contents 
xv
7.2 Counting Principles 
7.2.1 
The Multiplication Principle 424
72.2 
Addition Principle 
7.3 Set Decomposition Principle 
7.3.1 
Counting the Complement 429
73.2 
Using the Pigeon-Hole Principle 
7.3.3 
Application: UNIX Logon Passwords 
7.4 Exercises 
7.5 Permutations and Combinations 
7.5.1 
Permutations 
7.5.2 
Linear Arrangements 
75.3 
Circular Permutations 
7.5.4 
Combinations 
7.5.5 
Poker Hands 
75.6 
Counting the Complement 
7.5.7 
Decomposition into Subproblems 
7.6 Constructing the kth Permutation 
7.7 Exercises 
7.8 Counting with Repeated Objects 
7.8.1 
Permutations with Repetitions 
78.2 
Combinations with Repetitions 
7.9 Combinatorial Identities 
79.1 
Binomial Coefficients 
79.2 
Multinomials 462
7.10 Pascal's Triangle 
7.11 Exercises 
7.12 Chapter Review 
712.1 Summary 470
7.12.2 Starting to Review 
712.3 Review Questions 471
7.12.4 Using Discrete Mathematics in Computer Science 472

xvi 
Contents
CHAPTER 8
Discrete Probability 
8.1 
Ideas of Chance in Computer Science 
8.11 
Introductory Examples 
8.1.2 
Basic Definitions 
8.1.3 
Frequency Interpretation of Probability 
8.1.4 
Introductory Example Reconsidered 
8.1.5 
The Combinatorics of Uniform Probability Density 482
8.1.6 
Set Theory and the Probability of Events 
8.2 Exercises 
8.3 Cross Product Sample Spaces 
8.3.1 
A Multiplication Principle 492
8.3.2 The Cross Product of Sample Spaces 495
8.3.3 
Bernoulli Trial Processes 498
8.3.4 Events of Cross Product Form 
8.3.5 Two Ways of Viewing Events 
8.4 Exercises 
8.5 Independent Events and Conditional Probability 
8.5.1 
Independent Events 
8.5.2 Introduction to Conditional Probability 
8.5.3 Exploring Conditional Probability 
8.5.4 Using Bayes' Rule with the Theorem of Total Probability 
8.6 Exercises 
8.7 Discrete Random Variables 
8.7.1 
Distributions of a Random Variable 
8.72 
The Binomial Distribution 
8.73 
The Hypergeometric Distribution 
8.74 
Expectation of a Random Variable 
8.75 
The Sum of Random Variables 
8.8 Exercises 
8.9 Variance, Standard Deviation, and the Law of Averages 
8.9.1 
Variance and Standard Deviation 
8.9.2 
Independent Random Variables 

Contents 
xvii
8.10 Exercises 
8.11 Chapter Review 
8.11.1 Summary 
8.11.2 Starting to Review 
8.11.3 Review Questions 
8.11.4 Using Discrete Mathematics in Computer Science 
CHAPTER 9
Recurrence Relations 
9.1 
The Tower of Hanoi Problem 
9.1.1 
Recurrence Relation for the Tower of Hanoi Problem 
9.1.2 
Solving the Tower of Hanoi Recurrence 
9.2 Solving First-Order Recurrence Relations 
9.2.1 
Solving First-Order Recurrences Using Back Substitution 
9.3 Exercises 
9.4 Fibonacci Recurrence Relation 
9.4.1 
Second Order-Recurrence Relations 
9.4.2 Solving the Fibonacci Recurrence 
9.4.3 Rules for Solving Second-Order Recurrence Relations 
9.5 Exercises 
9.6 
Divide and Conquer Paradigm 
9.7 
Binary Search 
9.71 
Correctness 
9.72 
Complexity 
9.8 
Merge Sort 
9.8.1 
Correctness 
9.8.2 Example 
9.8.3 Complexity 572
9.9 Multiplication of n-Bit Numbers 
9.10 Divide-and-Conquer Recurrence Relations 
9.10.1 Complexity of Divide-and-Conquer Recurrence Relations 

xviii 
Contents
9.11 Exercises 
9.12 Chapter Review 
9.12.1 Summary 
9.12.2 Starting to Review 
9.12.3 Review Questions 
9.12.4 Using Discrete Mathematics in Computer Science 
APPENDIX
Appendix A 
Appendix B 
Index 

Preface
As the discipline of computer science has matured, it has become clear that a study of dis-
crete mathematical topics is an essential part of the computer science major. The course in
discrete structures has two primary aims. The first is to introduce students to the rich math-
ematical structures that naturally describe much of the content of the computer science
discipline, including many structures that are frequently used in modeling and implement-
ing solutions to problems. The second is to help students develop the skills of mathematical
reasoning to learn new concepts and material in computer science. This learning takes place
not only while they are students but also after graduation and throughout their professional
life.
During the past few years, researchers in areas of computer science as diverse as
the analysis of algorithms, database systems, and artificial intelligence have made ever-
increasing use of discrete mathematical structures to clarify and explain key concepts and
problems. As a reflection of this emphasis, careful discussions of applications such as a
relational database system, the complexity of a computation, and normal forms of propo-
sitions are included in this text. The discussions of these topics build on a strong, focused
development of fundamental ideas about sets, logic, relations, and functions as well as
graph theory and combinatorics.
The diagram that follows gives an indication of the order in which the material can
be covered. The six chapters referred to in the box contain the fundamental topics. These
chapters are used to guide students in learning how to express mathematically precise ideas
in the language of mathematics.
The two chapters dealing with graph theory and combinatorics are also core material
for a discrete structures course, but this material always seems more intuitive to students
than the formalism of the first four chapters. Topics from the first four chapters are freely
used in these later chapters. The chapter on discrete probability builds on the chapter on
combinatorics. The chapter on the analysis of algorithms uses notions from the core chap-
ters but can be presented at an informal level to motivate the topic without spending a lot of
time with the details of the chapter. Finally, the chapter on recurrence relations primarily
uses the early material on induction and an intuitive understanding of the chapter on the
analysis of algorithms.
xix

xx 
Preface
PREFACE
Chapter 1: Sets,
Proof Templates
and Induction
Chapter 2: Formal Logic
Chapter 3: Relations
Chapter 4: Functions
Chapter 6: Graph Theory 
Chapter 7: Counting and -
Chapter 5: Analysis of 
Combinatorics
Algorithms 
Chapter 8: Discrete
I 
Probability
Chapter 9: Recurrence
Relations
The material in Chapters 1 through 4 deals with sets, logic, relations, and functions.
This material should be mastered by all students. A course can cover this material at differ-
ent levels and paces depending on the program and the background of the students when
they take the course. Chapter 6 introduces graph theory, with an emphasis on examples
that are encountered in computer science. Undirected graphs, trees, and directed graphs
are studied. Chapter 7 deals with counting and combinatorics, with topics ranging from the
addition and multiplication principles to permutations and combinations of distinguishable
or indistinguishable sets of elements to combinatorial identities.
Enrichment topics such as relational databases, languages and regular sets, uncom-
putability, finite probability, and recurrence relations all provide insights regarding how
discrete structures describe the important notions studied and used in computer science.
Obviously, these additional topics cannot be dealt with along with the all the core material
in a one-semester course, but the topics provide attractive alternatives for a variety of pro-
grams. This text can also be used as a reference in courses. The many problems provide
ample opportunity for students to deal with the material presented.
To the Student
A major aim of this book is to help you develop mathematical maturity-elusive as this
objective may be. We interpret this as preparing you to understand how to do proofs of
results about discrete structures that represent concepts you deal with in computer science.
A correct proof can be viewed as a set of reasoned steps that persuade another student,
the course grader, or the instructor about the truth of the assertion. Writing proofs is hard
work even for the most experienced person, but it is a skill that needs to be developed
through practice. We can only encourage you to be patient with the process. Keep trying
out your proofs on other students, graders, and instructors to gain the confidence that will
help you in using proofs as a natural part of your ability to solve problems and understand
new material.
Solutions for the odd numbered Exercises are included on the CD that comes with the
text. These solutions provide models for solving problems.

Preface 
xxi
Outline for One-Semester Course
This text contains much more material than can be covered in a typical one-semester
course. This diversity of material, however, allows a much broader range of courses to
use the text. For a program that requires a one semester (13-14 weeks) study of discrete
topics, the following outline provides coverage of the fundamental material:
Chapter 1: Sets, Proof Templates, and Induction 
(8 lectures)
Basic Definitions
Operations on Sets
The Principle of Inclusion-Exclusion
Mathematical Induction
A Second Form of Induction
Chapter 2: Formal Logic 
(4 lectures)
Introduction to Propositional Logic
Truth and Logical Truth
Predicates and Quantification
Chapter 3: Relations 
(5 lectures)
Definitions and Operations
Special Types of Relations
Equivalence Relations
Ordering Relations
Chapter 4: Functions 
(4 lectures)
Basic Definitions
Operations on Functions
The Pigeon-Hole Principle
Chapter 5: Analysis of Algorithms 
(2 lectures)
Comparing Growth Rates of Functions
Complexity of Programs
Chapter 6: Graph Theory 
(4 lectures)
Definitions
Connected Graphs
The Kbnigsberg Bridge Problem
Trees
Spanning Trees
Directed Graphs (Optional)
Chapter 7: Counting and Combinatorics 
(4-5 lectures)
Counting Principles
Permutations and Combinations
Permutations and Combinations with Repetitions
Combinatorial Identities (Optional)
Pascal's Triangle (Optional)
With a semester comprising about 40 lectures, this schedule provides time for exams
and additional time to modify the course to respond to particular curricular and/or student
needs. The one chapter that is quite often left to other courses is Chapter 5. If time permits,

xxii 
Preface
however, this material gives a good overview of the relationship between programs and
their complexity.
Many variations can be made based on what other courses are included in the
program. In some programs, topics in Chapters 1 through 4, particularly basic properties
of sets and functions, will be covered in prerequisite courses and may be reviewed quickly
in a discrete mathematics course. The sections on Induction, the Principle of Inclusion-
Exclusion, and the Pigeon-Hole Principle, however, should normally be covered. In other
programs, if material on the analysis of algorithms has already been discussed in computer
science courses, then Chapter 4 might be a review, to a certain extent, and take less time.
Optionally, material on directed graphs might be eliminated. Depending on the needs of
the program, the lectures saved above may be spent on other material on the book.
Outline for a One-Quarter Course
With only 30 lectures in a one-quarter course, the syllabus presented earlier needs to be cut
to about 27 lectures.
Provided the material of Chapter 5 is covered in other computer science courses, this
chapter can be omitted without difficulty. If other mathematics courses explain the idea of
a function, the only necessary material in Chapter 4 is the Pigeon-Hole Principle, which
can save at least one lecture. Finally, eliminating the material on directed graphs should
allow the basic ideas of graph theory to be covered in four lectures. In addition, the nine
lectures scheduled for Chapters 1 and 2 may be shortened one or two lectures.
Incorporating these suggestions, the following is a possible syllabus for a one-quarter
course (10 weeks):
Chapter 1: Sets 
(7 lectures)
Basic Definitions
Operations on Sets
The Principle of Inclusion-Exclusion
Mathematical Induction
A Second Form of Induction
Chapter 2: Formal Logic 
(3 lectures)
Introduction to Propositional Logic
Truth and Logical Truth
Predicates and Quantification
Chapter 3: Relations 
(4 lectures)
Definitions and Operations
Special Types of Relations
Equivalence Relations
Ordering Relations
Chapter 4: Functions 
(3 lectures)
Basic Definitions
Operations on Functions
The Pigeon-Hole Principle
Chapter 6: Graph Theory 
(4 lectures)
Definitions

Preface 
xxiii
Connected Graphs
The Konigsberg Bridge Problem
Trees
Spanning Trees
Chapter 7: Counting and Combinatorics 
(4 lectures)
Counting Principles
Permutations and Combinations
Permutations and Combinations with Repetitions
In both sample syllabi the number of lectures committed to material should leave time
for two or three exams and for review days. In addition, instructors should find time to
spend a full day on problems of special interest without being forced to give up material
from the outline.
Help Requested
The authors have tried their best to make the text as error-free as possible. Needless to say,
we are not perfect and likely have missed some problems that really need to be corrected
to improve the text. We would appreciate it very much if any errors would be brought
to our attention. (We intend to provide a small reward for the first notice of any problem
brought to our attention.) Send comments to haggard@bucknell.edu along with your snail-
mail address. We will acknowledge any help we receive and let you know if anyone else
has already noticed the problem you uncovered. We will be very grateful for any help we
receive as we intend to make this text the best learning tool we can. A collection of the
changes we make will be posted at http://www.eg.bucknell.edu/-discrete/errorfile.pdf.
Gary Haggard
John Schlipf
Sue Whitesides

Sets, Proof Templates,
and Induction
The concept of a set underlies most of modem mathematics and much of computer sci-
ence. To use sets as a foundation for all the other structures in this text, we first need to
understand both the language used to describe sets and the operations normally associ-
ated with sets. The language of sets is very precise. When we use this language carefully,
we gain precision in expressing problems and describing solutions to problems. Under-
standing basic operations on sets and the properties of these operations is a model for the
approach that is used to introduce most other discrete structures in this text. In extending
our understanding of operations on sets, we will learn proof techniques to explore other
discrete mathematical topics, such as relations, functions, and graphs. We will use these
proof techniques, for example, to prove that algorithms are correct and to determine how
well we have chosen an algorithm for a given task.
This chapter has five main sections. The first introduces the notion of a set and the
language for describing collections of elements. In addition, this section introduces several
proof templates that are guides to both understanding and constructing proofs. The second
deals with the common operations on sets: unions, intersections, complements, products,
and the power set of a set. Some additional proof templates are introduced that are drawn
from proofs in this section. The third provides a way to count the number of elements in
a collection of sets in which some of the sets may contain some of the same elements that
the other sets contain. The fourth and fifth deal with important proof techniques called the
Principle of Mathematical Induction and the Strong Form of Mathematical Induction. We
use induction to find the set of elements for which a statement about the integers is true.
An important application of the Principle of Mathematical Induction, in both its forms,
is to show how algorithms can be proven to be correct without any execution by a computer.
Basic Definitions
The idea of a set is simple: A set is a collection of elements. The set {white, red,
green) contains the names of the colors white, red, and green and nothing else. The set
{0, 1, 2, 3, 4, 5, 1003456792311 contains seven integers. The set {red, yellow, blue) con-
tains the names of primary colors. A set of stamps stored in loose-leaf notebooks on a shelf
I

CHAPTER 1 Sets, Proof Templates, and Induction
is usually called a stamp collection. The set of past presidents of the United States consists
of
fGeorge Washington, John Adams, Thomas Jefferson, ...
The "..." 
is called an ellipsis and indicates that the list contains other elements.
What is the basic characteristic of a set? For any set A and any element b, either b is
in A or b is not in A. If you ask whether an element is in a set, the answer is either yes or
no.
Is 0 in {1, 21? No.
Is 0 in {0, 1, 2, 3, 4, 5, 1003456792311? Yes.
Is New York in {Liverpool, London, Los Angeles I? No.
Is green in {red, yellow, blue)? No.
Is New York in {England, France, United States)? No.
In mathematical terminology, 0 is an element of {0, 1, 2, 3, 4, 5, 1003456792311, and
green is not an element of {red, yellow, blue).
The expression "is an element of" is denoted by the symbol E, a form of the Greek
letter epsilon. For example, we write
0 E {0, 1,2,3,4,5, 1003456792311
and
green 0 {red, blue, yellow)
The slash through the E symbol means not, just as it does in A. Is a member of, is con-
tained in, or simply is in means the same as "is an element of." Mathematics, like ordinary
language, is full of synonyms.
Despite its frequent use, the term set is not defined in terms of other concepts. Like
the terms point and line in plane geometry, set is a primitive concept. Just assume there are
elements, there are sets, and that for a set A and an element b, the assertion b E A is either
true or false.
An important distinction needs to be made between I and I 1}. They are not the same.
By itself, I is a number but not a set, and { 11 is the set containing the element 1. Similarly,
{1} and {{1}} are not the same thing: 1 E {1}, but {1) 0 {1}. So, also, {1} E {{1)), but 1 V
I{l1}. Similarly, the set {1, 2) has two elements, 1 and 2, but {{1, 2)} has only one element,
{1, 2).
The number of times an element is listed and the order in which elements are listed
are both unimportant. For example, the elements of {2, 3} are 2 and 3. The elements of
{3, 2, 21 are also 2 and 3. Consequently, these two sets contain the same elements. That is,
these two sets are equal, as we shall see later.
1.1.1 
Describing Sets Mathematically
We present three different methods to describe a set. The first is by a list of all the elements.
The second is by a description of some property the elements have. The third is by a
description based on some other sets. In all these methods, we use the symbols { and I
to indicate that a set is being defined. The "language" used to describe sets is called set-
theoretic notation.

Basic Definitions 
Set-Theoretic Notation
Three methods to describe the set with elements 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9 are:
1. List the elements in braces: {0, 1, 2, 3, 4, 5, 6, 7, 8, 91. We can also abbreviate this
list as 10, 1, 2,..., 9}.
2. Describe the elements in terms of some property they satisfy:
{x : x is an integer and x > -1/2 and x < 19/2)
This notation is read as "the set of (all) x such that x is an integer and x is greater
than minus one-half and x is less than nineteen halves." The colon is read as "such
that." The description following the colon tells what property these x's have.
3. Describe the elements as the set of all elements in some other set that satisfy some
property. Here, if Z denotes the set of integers, then the set can be defined as
{x E Z : x> -1/2 andx < 19/21
Methods 2 and 3 are almost the same. Method 3 is preferred, however, because in
some really peculiar circumstances, method 2 can cause trouble.1
There is a particular disadvantage to using ellipses with method 1. If someone writes
A = {0, 1,2,..., 71
it is assumed everyone will understand what is intended-that is, the set A contains the
elements 0, 1, 2, 3, 4, 5, 6, and 7. Frequently, however, the intended pattern is not as
obvious as the person using the ellipsis thinks. Suppose
A = {2, 4,..., 655361
What are the other elements? Guessing what was meant requires understanding the pattern
that gives rise to the elements listed. Since 65536 = 216, one conjecture might be
A = {2', 22, 2', 24, 25, 26, 2', 28, 2', 210, 211, 212, 213, 214, 215, 2161
It could just as well be conjectured that
A = {, 
2 22 2222} = {2, 4, 16, 655361
There are endless other possibilities, with no real way to choose among them. (Nobody
said the pattern had to be simple.) This notation should only be used when it is obvious
from the context exactly what is meant.
1 After Cantor defined set theory, researchers found some paradoxes. The most famous is Russell's paradox,
which is similar to the so-called "liar's paradox": "This sentence is a lie." Work through it: If it is false, then it is
true, and if it is true, then it is false.
Russell's paradox is this. Let x be the set of all sets that are not elements of themselves. Now, is x an element
of itself?
Work through it: If it is, then it is not, and if it is not, then it is. What's wrong? Most modem set theorists assert
that using definition method 2 is at fault-note that Bertrand Russell (English mathematician and philosopher,
1872-1970) used that form in defining x. The set of all sets which are not elements of themselves is deemed "too
big" to be a set. By using definition method 3, we avoid constructing sets which are "too big."
Because we are not going into axiomatic set theory, however, we will be unable to avoid method 2 entirely in
this book.

CHAPTER 1 Sets, Proof Templates, and Induction
We often list the elements of a set in a way that shows an obvious association between
the natural numbers and the elements of the set. For example, 1, 2, 22, 2', 24 ..... We call
such a set a sequence. We can refer to a sequence by ao, al, a2 ..... 
In the above example,
we have ao = 1, al = 2, a2 = 22 ...
, a, = 2n ..... 
The notion of a sequence will be
examined more carefully in Section 4.4. At this time, we just need to have a way to refer
to sets of this form.
Special Sets
There are special names for certain common sets of numbers. Some of them are listed here.
Special Sets
N: the set of natural numbers, or the set of non-negative integers {0, 1, 2, 3, 4, ... .
Z: the set of integers, or {. .. ,-3, -2, -1, 0, 1, 2, 3 ... }.
Q: the set of rational numbers, or the set of fractions of integers with nonzero de-
nominator, such as I or 9-7
R: the set of real numbers, or the set of numbers written with a decimal point, such
as 7r = 3.14159. .. , -2.715, or 2.35353535....
0: the empty set, or the set I } with no elements.
In some circumstances, it is convenient to write the set of squares of natural numbers
as {x2 : x e N} rather than as {x : x E N and for some k E N, x = k2}.
1.1.2 
Set Membership
To prove an element is a member of a set, you must prove that the element shares the
property that defines membership. For example, we can define the notion of a number
being a prime without knowing that any particular number is a prime. We must then show
that any number we think is a prime has the defining property. First, we need to know what
a divisor is before we can define a prime. For integers m and n, we say m is a divisor of n,
denoted as mIn, if there is a natural number k such that n = m . k. A natural number p is
prime if p : 1 and its only divisors are 1 and p. Let P = {n : n E N and n is a prime). In
Example 1, we will show that P is nonempty.
Example 1. Prove that 3 is a prime-that is, that 3 E P.
Solution. We must show 3 has the property that its only divisors are 1 and 3. Since the
only other possibility is 2 and 2 does not divide 3, 3 is therefore a prime. 
U
A divisor of an integer is also called a factor.
1.1.3 
Equality of Sets
In mathematics, precise language is important if we are all to understand the same meaning
for a statement. For example, what does it mean for two sets to be equal?

Basic Definitions 
Definition 1. Let A and B be sets. Then, A = B or A is equal to B if both A and B have
the same elements.
The word if has a special meaning when used in definitions. Definition 1 states that
A = B if A and B have the same elements. Since the word if is inside a definition, it is
implied that A A B whenever the condition is not satisfied. Thus, "A = B" is just a short
way to say "A and B have the same elements."
Example 2.
(a) {nEZ:n 2 - n-2=01={nEZ:(n-2)(n+1)=0}={2,--1}.
(b) {n ENn: 2 n-2=0}={2}because-1 0lN.
(c) {x 
N: (x + 1)2 -
(x -
1)2 -4x =0) =Nbecause
(x+1)2 -(x-1)2 -4x=x
2 +2x+l-x
2 +2x-l-4x
=0
is an algebraic identity (true for all x).
The empty set 0 can be described in several ways; for example,
{x E N : x <x).
The set of continents south of Antarctica.
The set of round squares.
Why is {x e N : x < xJ equal to the set of round squares? We know that if two sets
are equal, then they must have the same elements. So, if
{x E N : x < x} A the set of round squares
then there is an element in one of these sets that is not in the other set. This cannot be true,
however, since neither set has any elements at all.
1.1.4 
Finite and Infinite Sets
Some sets, like {0, 1, 2, 3}, have the property that a person could list their elements
and finish listing them. We can describe this condition a little more formally: Ei-
ther the set has no elements, or its elements can be matched with the elements of
some subset {1, 2 .... n} of the natural numbers. Such sets are called a finite set. So,
{Liverpool, London, Los Angeles) is a finite set-that is, elements could be matched as
1 (Liverpool), 2 (London), and 3 (Los Angeles)
The empty set 0 has zero elements, so it is also finite.
Some sets are infinite sets, or not finite sets, like Z, R•, and N'. There is no way to
match all the elements of Z with a set {1, 2, ..... n for any fixed n.
1.1.5 
Relations Between Sets
Besides equality, another important relation between sets occurs when all the elements of
one set are also elements of a second set.

CHAPTER 1 Sets, Proof Templates, and Induction
Definition 2. 
Let A and B be sets. A is a subset of B, written as A C B, if every element
of A is also an element of B. A is a proper subset of B, written A C B, if A c B but
A#B.
"Is not a subset" is denoted with 9, whereas "is not a proper subset" is denoted
with ýt. For example, {1, 2, 3} 7 {1, 3, 4}, since 2 E {1, 2, 31 and 2 0 {1, 3, 4}. Similarly,
11, 4} 5 11,2, 3}, since 4 e (1, 4} and 4 0 11,2, 3). Also, (1,2,3,2, 1} C {1, 2, 3}, but
{1, 2, 3, 2,41} ý1 [1, 2, 3}1.
We now state formally two facts that follow immediately from the definitions.
Theorem 1. Let A be a set.
(a) A C A.
(b) 0 c A.
Proof.
(a) To say that A C A, according to Definition 2, means that each element of A is an
element of A, which is clearly true.
(b) Since 0 has no elements, the statement "for every element x, if x E 0, then x e A"
cannot be false, because 0 has no elements. In this case we say the statement is vacuously
true. 
U
We use the filled box that appears at the end of a Proof for a theorem or the end of
Solution for an example as a separator. In some instances, when an example includes a
discussion, we also use this to separate the example from the following text.
The idea behind proving that one set is a subset of a second set involves proving that
every element of the first set is an element of the second set. It would not be very convenient
if each element of the first set had to have its own proof of membership in the second set.
Example 3 uses a proof that each element of the first set is an element of the second set by
simply proving the result for a completely arbitrary element of the first set. A completely
arbitrary element is one that has no property to use in the proof except that it is a member of
the first set. An "arbitrary element of a set" is a (hypothetical) element whose only property
is that it belongs to that set. In mathematics, the phrase "let x E A" means "x is my name
for an arbitrary element of A." Assuming that we are dealing with a completely arbitrary
element allows us to prove the membership of every element with a single proof.
Example 3. Prove that the sets A = (2 1, 22, 2', 24 . . .. and B = (2, 4, 6, 8, .... satisfy
AC B.
Solution. An arbitrary element of A is of the form 2i for some i E 11, 2, 3, 
.1..1. 
An
arbitrary element of B is of the form 2. j for some j c {1, 2, 3, . . .). Clearly, 2' = 2. j
for the integer j = 2i-1. Since an arbitrary element of A is an element of B, we conclude
AC B. 
U
If and Only If
Mathematical statements about how facts are related, including many mathematical the-
orems, are implications. For example, "if you eat your carrots, you will grow big and
strong," or "if Sally is in the science lab, then she is doing her chemistry experiment," or
"if x > 1, then x2 > x" are all implications. An implication starts with a hypothesis that
is assumed to be true and then uses various means to prove a conclusion. We denote an
implication as a =ý b, where a is the hypothesis and b is the conclusion. Two implications

Basic Definitions 
are used in the standard mathematical expression if and only if. The statement
a if and only if b
means that if a is true then b is true (a =# b) and that ifb is true then a is true (b => a).
Equivalently, it means that a and b are either both true or both false.
In a proof of an if and only if statement, a proof of "if a, then b" is usually labeled
(=>), whereas a proof of "if b, then a" is usually labeled (.=). The if and only if statement
is often denoted by .=*. The arrow notation is used in Theorem 2.
Theorem 2. 
Let A and B be sets. Then, A = B if and only if A C B and B C A.
(What the Proof entails:) 
We must prove two things. The first that A = B implies that A C
B and B C A. The second is that if A C B and B c A, then A = B.
Proof
(==•) Prove that if A = B, then A C B and B C A. Suppose A = B. Then, A C B and
B C A by Theorem 1.
(•<=) Prove that if A C B and B C A, then A = B. To prove this, begin by supposing
that A C B and B C A. Then, for any x, if x E A, x E B, since A c B. Furthermore, if
x E B, then x e A, since B C A. Therefore, the sets A and B have the same elements. By
Definition 1, A = B. 
1.1.6 
Venn Diagrams
In most discussions, attention is limited to elements and subsets of a fixed set. For example,
elementary arithmetic is usually limited to elements and subsets of Z (the integers) or of
Q (the rationals). In a study of some period of history, attention may be limited to the set
of all persons living at that time. In computer science, it may be the set of all file names on
a hard disk. Such sets are called universal sets, or universes. They are the "universes of
discourse" for a time.
There is a very convenient type of diagram, called a Venn diagram, for illustrating set-
theoretic relationships. Start with a rectangle, and let the points in the rectangle represent
the elements of a universal set, as shown in Figure 1.1.
U
Venn diagram of a universal set U.
Subsets of the universal set are represented by circles or ovals in the rectangle, as
shown in Figure 1.2. For example, suppose that A, B, and C are subsets of the universal
set U. The region within the circle for A represent the elements of A, and similarly for B
and C. Figure 1.2 shows A, B, and C where A C B. A and C have no elements in common,
and B and C have elements in common but neither is a subset of the other.

CHAPTER 1 Sets, Proof Templates, and Induction
U
I 
CM
Sample Venn diagram.
Venn diagrams are frequently used to build intuition for proofs. The diagrams are
designed to present fairly general pictures of what is known, and these pictures can often
help a person to see set-theoretic relationships. A good Venn diagram can be very useful,
but a Venn diagram itself is not a proof. In particular, if a mistake is made in drawing the
Venn diagram, it is often possible to think that a property is true when it really is not. In
especially complicated cases, it may be very difficult to see whether the picture is correct.
The picture may be vague on certain points as well. For example, Figure 1.2 suggests
that there are elements of B that are in neither A nor C. This may or may not be true.
Nevertheless, a good Venn diagram is valuable both in suggesting whether a statement
could be true and in motivating and illustrating the proof.
Theorem 3. 
Let A, B, and C be sets. If A C B and B C C, then A C C.
U
C
A c B and B c C.
(The Venn diagram in Figure 1.3 is drawn so that A # B and B # C, but this is not nec-
essarily true. The Venn diagram suggests that if you start with an element of A, then that
element is in B. Then, if the element is in B, it suggests that it is also in C. The proof will
proceed using these two steps.)
Proof We must prove that if A C B and B C C, then A C C. Let x E A, and prove that
x E C. (Think of this as starting the proof by picking x arbitrarily from A.) Then, since
A C B, x E B. We now have x E B, and we are given that B C C. So, it follows that
x E C. Since every element of A is an element of C, it follows that A c C. 
U
1.1.7 
Templates
The proofs in this section use very typical techniques that you will see throughout the book.
When you try to construct a proof, getting started is always a bit daunting. The templates
shown here will give you ideas about what you need to do in a proof. The templates will
describe what is needed to prove that an element is in a set, that one set is or is not a subset

Basic Definitions 
of another set, and that two sets are or are not equal. First, we state a template for proving
that an element is a member of a set.
Let A be a given set. To prove x E A, show that x has the property that defines mem-
bership in A.
Example4. LetA={n:nENandn=3k+5forsomekEN}.ls23EA?
Solution. To show that 23 c A, we must find a natural number ko such that
23 = 3k0 + 5
since every element of A has the form 3k + 5 for some k E N. To find out if there is such
a k, we simply solve the equation for ko and see if the solution is an integer.
3k0 + 5 = 23
3k0 = 23 - 5
ko = 18/3 = 6
Since 6 is a natural number, we know 3- 6 + 5 = 23 E A. 
We use the template for element membership in a set to develop a template for proving
that one set is a subset of another set.
To prove that one set is a subset of another (A C_ B), show that every element x of A
is also in B.
Example 5. 
Let
A = In n = 2k + 5 for some k E NJ
and
B = {n n = 2j + 1 for some j c N}
Is A C B?
Solution. By writing out a few of the elements in each of these sets, we can at least get
an idea about whether we think A C B. The first six elements of A are 5, 7, 9, 11, 13, and
15. The first six elements of B are 1, 3, 5, 7, 9, and 11. The difference between the two sets
seems to be the initial values. To show that A C B, we must take an arbitrary element of
A, say, n = 2k0 + 5 for some ko E N, and show that this can be written as 2j + 1 for some

CHAPTER 1 Sets, Proof Templates, and Induction
j e N, which would prove that 2k0 + 5 = 2j + 1 E B. The algebra needed to see if this is
possible involves solving for j in terms of ko. This computation
2j+] 
=2k0 +5
2j =2k0 +5-1 
=2k0 +4
j =k0+2
shows that for any ko, the needed j is ko + 2, which is clearly an element of N. This says
that we can write an element of A as 2k0 + 5 = 2(ko + 2) + 1 for k0 + 2 E N. Therefore,
since an arbitrary element of A is an element of B, we have A C B. 
U
If the condition in Template 1.2 is not satisfied-that is, for two sets A and B, we
have A Z B-this means that there is an element in A that is not an element of B. We
summarize this observation in Template 1.3.
To prove that one set is not a subset of another (A g B), show that some element x of
A is not in B.
Example 6. 
Let
A={ncN:n=2k -3forsomek 
EN)
and
B = {n: n 
N and n = j2 + 3 for some j E NJ
Prove that A g B.
Solution. We must find some element of A that is not an element of B. If we list
the first few elements of A and B, perhaps a candidate element will appear. A =
{-3, -1, 5, 15, 47 .... }, and B = {3, 4, 7, 12, 19, . .. 1. An obvious candidate is -3, 
since
-3 
E A and -3 
V B. We need to show that there is some fixed integer of the form 2k0 - 3,
for ko e N, that can be written as j2 + 3 for some choice ofj c N. If such a j existed, we
would have 2k0 - 3 = j2 + 3. In the case ko = 0, the element j would have to satisfy
-3 = j 2 +3 
or j 2 + 
6 = 0 for -3 to be in B. Since no such j exists, -3 
0 B. 
U
One last possibility for set inclusion: One set can be a subset of a second subset, but
not every element of the first set need be an element of the second set. This proper inclusion
is formalized in the next template.
To prove that one set is a proper subset of another (A C B), first prove that A __ B,
and then show that some element x of B is not in A.

Basic Definitions 
Example 7. 
Let
A = {n c N 
n > 2 and n = 4j -
5 for some j e N}
and
B = in E N n > 0 and n = 2k + 1 for some k e NJ
Prove that A C B.
Solution. 
To show that A C B, we must show that every element of A is an element
of B. Let n = 4j0 -
5 be an arbitrary element of A for some fixed jo E N. To show that
n c B, we must show that n = 2k + 1 for some k e N. We see if this is possible by solving
for k:
2k+1 =4j 0 -5
2k = 4 jo - 6
k = 2j 0-3
Now, 2jo - 3 > 0, since jo > 2. Since 2(2jo -
3) + 1 = 4j 0 - 5, every element of A is
an element of B, and A C B.
For 0 E N, 2.0 + 1 = 1 e B. If 1 E A, then 1 = 4j -
5 for some j G N. By solving
for j, we find that j must be equal to 3/2, which is not a natural number. Therefore, no j
exists. Therefore, 1 E B, and 1 0 A. It follows that A C B. 
The next step is to deal with set equality and set inequality.
In the case that we have two set descriptions and want to know that the sets are
equal, there are actually two things to prove. The proof that two sets are equal follows
Template 1.5.
Example 8. 
Let
A =In : n = 2j for some j E N}
and
B = {n : n = 2k + 2 for some k E Z and k > - 1)
Prove that A = B.
Solution. To show that an arbitrary element of A, say, 2jo for some jo e N, is an element
of B, we must find a k E Z such that k > -1 and 2jo = 2k + 2. Solving for k gives k =
jo -
1. Since jo > 0, k = j0 - 1 > - 1, and 2k + 2 e B. To show that an arbitrary element

CHAPTER 1 Sets, Proof Templates, and Induction
of B, say, 2ko + 2 for some k0 E Z and ko > -1, is an element of A, we must find a
j E N such that 2j = 2k0 + 2. This implies that j must satisfy j = ko + 1 if 2k0 + 2 is an
element of A. Since ko > -1, we have ko + 1 > 0, and k0 + 1 defines an element of A.
Because A C B and B C A, it follows that A = B. 
U
There are often many different descriptions for a single set. One problem is to make
sure that the set description that is given in fact describes the set intended. The idea of a
proof to show that two sets are not equal is given in the next template.
The way to show that A C B is false is to find an element x such that x G A and x g B.
Showing that B C A is false is done analogously, but only one of these implications needs
to be shown to prove that A A B.
Example 9. 
Let
A = {n: n E N and n = 4j2 - 3 for some j G N}
and
B = {n E N: n = 2k 2 - 3 for somek E N}
Prove that A A B.
Solution. 
To show that A : B, it suffices to find an element in A that is not an element
of B. We will show that 1 is such an element.
We can write 1 = 4(1)2 - 3. Therefore, 1 E A. If 1 E B, then 1 = 2k 2 -
3 for some
k : N. If this were so, then the element k would satisfy the equation k2 -
2. Since no such
k exists in N, 1 0 B. 
I
Other Proofs
In Theorem 2 (Section 1.1.5) we needed to prove two things to conclude the result. This
kind of a proof is typical when you are trying to prove that two statements are simply
different ways of saying the same thing. In Theorem 2 we found that set equality could be
stated either in terms of element membership or in terms of the subset relation. The proof
is formalized in Template 1.7.

Exercises 
To prove "if a, then b" and "a if and only if b" results, use one of the two forms:
Form 1: To prove "if a, then b," assume a and derive b.
Form 2: To prove "a if and only if b," prove "if a, then b," and then prove "if b,
then a."
In a proof of an if and only if statement, a proof of "if a, then b" is usually labeled
(=#), whereas a proof of "if b, then a" is usually labeled (4=). The if and only if
statement is often written using •.
rnExercises
1. Let X be the set of all students at a university. Let A be the set of students who are first-
year students, B the set of students who are second-year students, C the set of students
who are in a discrete mathematics course, D the set of students who are international
relations majors, E the set of students who went to a concert on Monday night, and F
the set of students who studied until 2 AM on Tuesday. Express in set theoretic notation
the following sets of students:
(a) All second-year students in the discrete mathematics course.
Sample Solution. 
{X E X : x E B and x c C}.
(b) All first-year students who studied until 2 AM on Tuesday.
(c) All students who are international relations majors and went to the concert on
Monday night.
(d) All students who studied until 2 AM on Tuesday, are second-year students, and are
not international relations majors.
(e) All first- and second-year students who did not go to the concert on Monday night
but are international relations majors.
(f) All students who are first-year international relations majors or who studied until
2 AM on Tuesday.
(g) All students who are first- or second-year students who went to a concert on Mon-
day night.
(h) All first-year students who are international relations majors or went to a concert
on Monday night.
2. Find at least two different ways to fill in the ellipses in the set descriptions given.
For example, {2, 4 ...
, 121 could be written either {2n : 1 < n < 6 and n G N} or
{n+ I :n E {1,3,5,7, 111}.
(a) {1, 3,..., 311
(b) 11, 2,..., 26)
(c) {2, 5,..., 321

CHAPTER 1 Sets, Proof Templates, and Induction
3. Write three descriptions of the elements of the set {2, 5, 8, 11, 14).
4. How many elements does each of the following sets have?
(a) A= 0
(b) B = {0}
(c) C = {(0, 1), 
{1, 2)}
(d) D - {0, 1, 2, {0, 1}, (1,21, {0, 1, 2}, A)
(e) E = (0, 
{{1, {3, 5), {4, 5,7}, 8)))
5. Which of the following pairs of sets are equal? For each pair that is unequal, find an
element that is in one but is not in the other.
(a) (0, 1, 2) and {0, 0, 1, 2, 2, 11
(b) (0, 1, 3, 11,2}) and (0, 1, 2, (2, 3))
(c) {{1, 3, 5), {2, 4, 6), f5, 5, 1, 3}) and {{3, 5, 1}, {6, 4, 4, 4, 2), {2, 4, 4, 2, 6))
(d) {{5, 3, 5, 1,51, (2, 
4, 6), 
15, 1, 3, 3)) and {{1, 3, 5, 1), 
{6, 4, 2), 
(6, 
6, 4, 4, 6))
(e) 0 and{xe N:x > landx 2 =x)
(f) 0 and (0)
6. This problem concerns the following six sets:
A-={0,2,4,61 
B-=11,3,5) 
C={0,1,2,3,4,5,6,7}
D---0 E=EN F={{0,2,4,6))
(a) What sets are subsets of A?
(b) What sets are subsets of B?
(c) What sets are subsets of C?
(d) What sets are subsets of D?
(e) What sets are subsets of E?
(f) What sets are subsets of F?
7. Let A={n:nn N and n=2k+1 for some kEN},B={n :n EN and n=
4k + 1 for somek e N), and C = (MeE N 
m = 2k -
1 andk E N and k> 1). Prove
the following:
(a) 35 E A
(b) 35 e C
(c) 35 € B
(d) A = C
(e) B C A
(f) B C C
(g) B C A
(h) B C C
8. Let A={n :n eN and n=3k+2 for some keN},B={n:n EN and n=
5k- 
1 for some k E N such that k> 5), and C= {m EN•:m =6k-4 
andkE N
and k > 1). Prove the following:
(a) C C A
(b) A # B
(c) B 5 C
(d) A : C
(e) C C A

Operations on Sets 
9. Describe in words the difference between 0 and {0}.
10. Let A, B, and C be sets.
(a) Prove that if A C B and B c C, then A C C.
(b) Prove that if A C B and B C C, then A C C.
(c) Prove that if A C B and A Z C, then B Z C.
rnOperations on Sets
In many areas of computer science and mathematics, from formal logic to object-oriented
programming, the operations to be performed must be considered in the context of a spe-
cific set. For example, familiar operations, such as addition, subtraction, multiplication,
and division, are performed within a specific set of numbers, such as the integers, ratio-
nals, or reals. This section discusses operations on sets and introduces the most common
operations: union, intersection, difference, complement, product, and power set of a set. We
study the laws these operations satisfy as well as how they interact with one another. We
then extend our discussion to lattices and boolean algebras. Lattices and boolean algebras
have two operations defined on their elements such that a set of special axioms for these
operations holds. An example of a lattice is a family of sets with the operations defined as
set union and set intersection.
1.3.1 
Union and Intersection
The two simplest operations on sets involve combining two sets into one (union) and find-
ing common elements in two sets (intersection). These operations obey many of the gen-
eral rules that addition and multiplication with real numbers also satisfy. The first operation
consists of combining two sets into a set containing the elements of both sets.
Definition 1. Let A and B be sets. The union of A and B, denoted A U B, is
{x :x E A orx G B}
U
MA 
B
Figure1.4 AUB.
The Venn diagram for set union (shown in Figure 1.4) illustrates what was stated in
the definition. We do, however, need to clarify the meaning of the word or in the definition.
When mathematicians say x E A or x E B, they generally mean x E A or x E B or both.
This interpretation is called the inclusive or because it includes the possibility that both
may be true.

CHAPTER 1 Sets, Proof Templates, and Induction
Example 1.
(a) 11, 2, 31 U 13, 4, 5) = 11, 2, 3, 3, 4, 5} = {1, 2, 3, 4, 5}.
(b) {1, 2, {1, 2, 3}} U {1, 2, 3, 11, 21) = {1, 2, 3, {1, 2}, {1, 2, 311.
(c) NUZ=Z.
(d) For any set A, A U 0 = A.
Why was the definition of the union of three or more sets not given? The more
general union operation, for any finite number of sets, is handled by the assumption that
A U B U C means (A U B) U C. Therefore, it is only necessary to find unions of two sets
at a time, and that has already been defined. The shaded region in Figure 1.5 shows the
union of three sets.
U
a 
B
C
The next theorem proves some fundamental results about set union.
Theorem 1. Let A, B, and C be sets. Then:
(a) AUA=A.
(b) ACAUBandBCAUB.
(c) A U B = B U A. 
(Commutative Law for Union)
(d) A U (B U C) = (A U B) U C. 
(Associative Law for Union)
(What the proof entails.) 
Parts (a) and (b) follow directly from the definition of union.
The proof of (c) will be given. Since the proof of (d) uses an argument similar to the one
used in (c), it will be left as an exercise for the reader. Part (c) says that the order in which
the union of two sets is formed does not matter. Part (d) states that A U B U C makes sense
even without parentheses.
Proof (c) Follow the template for set equality to prove that (i) A U B C B U A and (ii)
B U A C A U B. For (i), use the template for set inclusion to prove that for any x E A U B,
it follows that x E B U A.
Suppose that x e A U B. Then (ia) x e A or (ib) x E B. In case (ia), since x E A,
by Definition 1 we have x e B U A. In case (ib), since x E B, by Definition 1 we have
x e B U A. This completes the proof of (i).
The proof of (ii) is analogous. 
U
What do we mean when we say that one proof is analogous to another? In this context,
it means that the two proofs have essentially the same logic. Here, for example, one can
form the proof of part (ii) from the proof of part (i) by interchanging A and B.
The second important set operation, intersection, forms a set from the elements
common to two sets.

Operations on Sets 
Definition 2. 
Let A and B be sets. The intersection of A and B, denoted by A n B, is
{x :xE A and x E B)
The intersection of A and B is shaded in Figure 1.6.
U
A n B.
Example 2.
(a) {1,2, 3} n {3,4,51 = 13).
(b) {1, 2, 31 n 14, 5, 6) = 0.
(c) N•nZ =N.
(d) For any set A, A n 0 =0.
(e) {1, 2, 3) n {{1, 2, 3}1 = 0. (The first set has three elements, 1, 2, and 3, whereas the
second set has only one element, (1, 2, 31.)
Theorem 2 proves some fundamental results about set intersection. Like set union, set
intersection satisfies the commutative and associative laws.
Theorem 2. 
Let A, B, and C be sets.
(a) ANA=A.
(b) ANBCAandANBCB.
(c) A n B = B n A. 
(Commutative Law for Intersection)
(d) A n (B n C) = (A n B) n C. 
(Associative Law for Intersection)
(What the proof entails.) 
Parts (a) and (b) follow directly from the definition of inter-
section. Part (c) says that the order in which the intersection of two sets is formed does not
matter. Part (d) states that A n B n C makes sense even without parentheses.
Proof 
(c) Again, follow Template 1.5 (Set Equality). Prove that (i) A n B C B n A
and (ii) B n A C A n B. For (i), follow the template for proving one set is a subset of
another. That is, assume x E A n B, and show x E B n A.
Suppose x E A n B. Then, x E A and x E B. Equivalently, x E B and x E A, since
no order is implied by the word and. Therefore, x E B n A. The proof of (ii) is analogous.
(d) This part is left as an exercise for the reader. 
The distributive laws for addition and multiplication for real numbers have analogues
with the operations of union and intersection with sets, as Theorem 3 shows.
Theorem 3. 
(Set Distributivity) 
Let A, B, and C be sets. Then:
(a) A U (B n C) = (A U B) n (A U C). 
(Distributive Law for Union)
(b) A A (B U C) = (A n B) U (A n C). 
(Distributive Law for Intersection)

CHAPTER 1 Sets, Proof Templates, and Induction
Proof. The proofs are left as an exercise for the reader. 
U
The intersection of two sets may not contain any elements. If there are no elements in
a set intersection, we call the sets disjoint.
Definition 3. 
Let A and B be sets. Then, A and B are disjoint sets if A n B = 0.
Example 3.
(a) Verify that {1, 2, 31 and 14, 5, 6} are disjoint.
(b) Verify that {1, 2, 31 and {{1, 2, 3}} are disjoint.
(c) For any set A, verify that A and 0 are disjoint.
The reader may be asking whether there is any reason or need to prove additional
theorems about the union and intersection operations on sets. There are two reasons to
prove additional theorems. First (and most obviously), the results will be needed later.
Second, proofs of these results are fairly easy examples of proofs, and they provide good
models for constructing other proofs. Additional opportunities to write proofs will be given
in the exercises.
Theorem 4 shows how set inclusion and the operations of union and intersection are
related.
Theorem 4. 
Let A, B, and C be sets. Then:
(a) If AC B or AC C, then AC B U C.
(b) IfBCAandCCA, thenBUCCA.
(c) IfACBandA 
C, thenACBNC.
(d) IfBCAorCCA, thenBnCCA.
(Motivation for the proof.) 
For part (a), there are two cases: (i) A C B, and (ii) A C C.
The Venn diagrams (see Figure 1.7) illustrate both parts of (a) and will help in understand-
ing the proof.
U 
U
9D 
P
Figurel.7 
A.AcB • AcBUC. B.AcC • AcBuC.
For part (b), one Venn diagram suffices (see Figure 1.8).
U
A
Figurel.8 
BcAandCcA=4BuCcA.

Operations on Sets 
Proof. (a) Suppose that A C B or A C C.
Case 1: 
A C B. Follow Template 1.2 (Set Inclusion) for proving that one set is a subset
of another. Show that every element of A is also an element of B U C.
Let x E A. The goal is to show that x e B U C. Since x E A and A C B, we have
x E B. But,
BUC = {x x E B orx E C}
Therefore, x E B U C.
Case 2: 
A C C. The proof is analogous to that in part (a).
(b) Suppose x E B U C. Then, either x E B or x c C.
Case 1: 
x E B. Since B C A, it follows that x c A.
Case 2: x E C. Since C C A, it follows that x E A. Therefore, B U C C A.
(c)-(d) Exercises for the reader. 
M
The proof of Theorem 4 shows how a template can be used. It also demonstrates
another proof technique: proof by cases. The assumption was that A C B or A C C. The
proof breaks down into the two ways that this could happen: (1) A c B, or (2) A C C.
Each case was handled separately. This is a general approach: If there are relatively few
ways that some assumption can be met, then one can handle them separately.
Let's review what Theorem 4 asserts. Contrast the following two statements:
(a) "If A is a subset of both B and C, then A is a subset of their union."
IfA C BorA C C, thenA C BUC
(b) "If A is a subset of the union of B and C, then A is a subset of either B or C."
IfA C BUC, thenA C BorA CC
Theorem 4 asserts that statement (a) is true. Theorem 4 does not assert statement (b). In
fact, statement (b) is false in general. How would it be shown that statement (b) is false?
Statement (b) asserts that some relationship is true for all sets A, B, and C. To prove it to
be false, then, we must find just one example where it is false. That is, we must find three
sets A, B, and C such that A c B U C but (i) A Z B and (ii) A 7 C (see Exercise 9 in
Section 1.4).
The theorems proved so far can easily be used to show something that is not entirely
obvious.
Theorem 5. 
(An Absorption Law) 
Let A and B be sets. Then,
A U (A n B) = A
Proof As usual, prove that A U (A n B) C A and A C A U (A n B). For the first part,
we have A C A by Theorem 1 in Section 1.1.5 and A n B c A by Theorem 2(b) in Secton
1.3.1. These two conditions imply that A U (A n B) C A by Theorem 4(b) in Section 1.3.1.
For the second part, start with A C A, which gives A C A U (A n B) by Theorem 4(a) in
Section 1.3.1. 
U
This result is one that is needed later. When we discuss boolean algebras and their
relation to electrical circuits, this Absorption Law is particularly useful.

CHAPTER 1 Sets, Proof Templates, and Induction
Generalized Unions and Intersections
The definitions of union and intersection make good sense for any finite number of sets,
because the operations are associative. There are occasions, however, when one would
like to express the idea of the union of an infinite collection of sets. This leads to the
generalization of the notion of set union and intersection given in the next definition.
Definition 4. Let X be a set of sets. Then,
UX = {x x is contained in some set in X}
and
NX = {x x is contained in every set in X)
If
X = {X0, X1 .
Xn...
That is, the elements of X are indexed with the natural numbers, the union of sets UX is
usually written as
U7oXi = XO U X 1 U X 2 U ... U X, 
U ...
and the intersection of sets nX is usually written as
nr=oXi = X0 n X1 nX 2n ... n X, n ...
Example 4.
(a) Ui = (-I/i, 
I/i) C JR where i E N - {0}. Then, UlUi = (-1, 1), NF1 =iUi = {o}.
(b) Vi = (i, i + 2) g R, where i ••N - {0}. Then, U?= Vi = (1, oo), N 
_.
1.3.2 
Set Difference, Complements, and DeMorgan's Laws
In Venn diagrams, pairs of sets are often drawn so that it appears as if there are elements
in each of the sets that are not in the other set. Often, it is important to find these elements.
This operation on sets is called set difference. In other instances, we are interested in the
elements that are not in a set. The operation of finding these elements is called comple-
mentation. Finally, we would like to understand how union and intersection interact with
the operation of set difference and complementation. The relationships are described by
DeMorgan's Laws. We start this section by defining set difference.
Definition 5. 
Let A and B be sets. The set difference of A and B, denoted A - B, is
{x:x E A andx ý BI
U
0rA 
B
A - B.

Operations on Sets 
Example 5.
(a) Let A ={1, 2. 
10} and B = {3, 5, 7, 9}. Then, A - B = {1, 2, 4, 6, 8, 101.
(b) Let A =N and B = {2i i E NJ. Then, A - B = {2i + 1: i E N}.
The difference A - B is also sometimes call the relative difference. The Venn dia-
gram (shown in Figure 1.9) gives an intuitive understanding of this notion. Remember that
Venn diagrams suggest relations between or among sets but are not actually proofs of rela-
tionships between or among sets. Theorem 6 proves some key relationships involving the
difference of two sets, A - B and B -
A.
Theorem 6. 
Let A and B be sets. Then:
(a) A - B and B -
A are disjoint, A - B and A n B are disjoint, and A n B and B - A
are disjoint.
(b) A=(A--B) U(ANB).
(c) AUB=(A-B) U(ANB) U (B -
A).
(d) ACBifandonlyifA--B=0.
Proof. If you look at a Venn diagram for two sets and identify A - B, B -
A, and A n B,
it looks like the sets are disjoint. This theorem says that your intuition from the diagram is
correct. The proofs of (a)-(d) are left as exercises for the reader. 
U
Complement of a Set
Recall that a universal set is a set that contains as a subset every set currently being dis-
cussed. In a context in which there is a universal set, another set theoretic operation can be
defined.
Definition 6. 
Let U be a universal set and A be a subset of U. The complement of A,
denoted A, is
{x : x E U andx ý A}
Sometimes, to emphasize that U is a universal set, A is also called the absolute difference.
With this definition, we can restate Definition 5 as A - B = A nf B. Some important
identities concern complements, especially how they interact with other set-theoretic oper-
ations.
Theorem 7. 
Let U be a universal set and A and B be subsets of U. Then:
(a) A = A. 
(A is the complement of A.)
(b) A C B if and only if B C A.
(c) A = B if and only if A = B.
(What the proof entails.) 
Part (a) tells us that the complement only produces something
new the first time it is applied. Part (b) says that if A is a subset of B, then set inclusion
goes the other way for the complements; that is, the complement of B is contained in the
complement of A. In part (c), we prove that if two sets are equal, then their complements
are equal.

CHAPTER 1 Sets, Proof Templates, and Induction
Proof. (a) Show that (i) A _ A and (ii) A C A. To prove (i), suppose x E A. Then, x E U
and x € A. But, then x E A. To prove (ii), suppose x e A. Then, x G U, but x € A. So,
X E A.
(b) (•) Show that if A C B, then B C A. Prove the result by contradiction (see Template
1.3). Assume that for some subsets A and B of U, A C B and B 7 A, and derive a con-
tradiction. Since B 7 A, there is some x E B - A. Pick such an x. Since x 0 A, it follows
that x e A. Since A C B, we have x e B. But, it was assumed that x E B; hence, x has the
property that x 0 B. Since both x c B and x g B were proved, this gives a contradiction.
(.@) The proof is analogous to the proof of (•:) using (a).
(c) Exercise 11 in Section 1.4. 
U
A Computer Representation for Sets
Let U = {1, 2, 3, 4, 5, 6} be a set, and let X C U. A bit representation for X is a six-digit
binary number x1x2x3x4x5x6 with bit xi for 1 < i < 6 defined as
10f if ( X
for i 0 X
For example, if B = (2, 
3, 61, then B = 011001. The operations of union, intersection,
and complement can be carried out using operators UNION, INTER, DIFF, and COMP
that operate on binary numbers bit-by-bit. Let B, C c U with B = blb 2b3b4b5b6 and C =
c1c2c3c4c5C6. Define the union as UNION(B, C) = xix2x3x4x5x6 where for 1 < i < 6,
1 if bi = I or ci = I
xi 
0 otherwise
Define the intersection as INTER(B, C) = X1X2X3X4X5X6, where for 1 < i < 6,
1 ifbi = 1 and ci = 1
xi 
0 otherwise
Define the complement as COMP(B) =- XX2X3X4X5X6, where for 1 < i < 6,
1 ifbi=0
Xi 
0 otherwise
Define the relative difference as DIFF(B, C) = X1X2X3X4X5X6, where for 1 < i < 6,
1 if bi =1 Iand ci = 0
xi 
0 otherwise
Example 6. 
Let B = {1, 2, 3, 4, 51 and C = {3, 4, 5, 6, 7, 81 be subsets of the universal
set U = [1, 2,..., 9). Find UNION(B, C), INTER(B, C), COMP(C), and DIFF(B, C).
Solution. BUC={1,2,3,4,5,6,7,8}. BfnC={3,4,51. C={1,2,9). B-C=
11, 21. Therefore,
UNION(B, C) = 111111110
INTER(B, C) = 001110000
COMP(C) = 110000001
DIFF(B, C) = 110000000 
U

Operations on Sets 
DeMorgan's Laws
DeMorgan's Laws are among the most important and useful results about sets. These laws
describe how union, intersection, and complement are related. Figure 1.10 indicates what
the laws tell us.
MA 
B 
A 
B
AuB=ArB 
ArB=AuB
DeMorgan's Laws.
Theorem 8. (DeMorgan's Laws) Let U be a universal set, and let A and B be subsets
of U. Then:
(a) (A U B) = A n B. 
(DeMorgan's Law for Union)
(b) (A ( B) = A U B. 
(DeMorgan's Law for Intersection)
Proof.
(a) Show that (i) (A UB) c A 
WB and (ii) A n B c (A U B).
(i) Pick an arbitrary x E (A U B). Since x e U - (A U B), it follows that x 0 A U B.
For x not to be in this union means it may not be in either of the sets. So, x 0 A
and x 0 B. Hence, since x e U - A = A and x E U - B = B, it follows that x
A (2B.
(ii) Pick an arbitrary X E A n B. Then, x e A, so x 0 A. Also, x E B, so x § B.
Therefore, x g (A U B), and consequently, x e (A U B).
(b) The proof is left for the reader. 
N
Theorem 8 resembles the ways that and and or interact with not (which are also called
DeMorgan's Laws in logic). For example, "not (x is greater than 3 or x is odd)" is equiva-
lent to "x is not greater than 3, and x is not odd." A more thorough study of logic is given
in Chapter 2.
Example 7. 
Verify DeMorgan's Laws for the sets A = 11, 2, 3, 4} and B = {3, 5, 6, 8}
when the universal set is U = {1, 2, 3, 4, 5, 6, 7, 8).
Solution. AUB={l,2,3,4,5,6,8}={7}. 
-A={5,6,7,81. B={1,2,4,7}.
An B = {7}. It now follows that A U B = A; B. 
U
DeMorgan's Laws are important tools for proving results about how union, intersec-
tion, and complementation interact. The notion of the symmetric difference is a particular
instance of this. Symmetric difference identifies the elements of two sets that are not in
their intersection. This set (A U B) - (A n B) is shown in Figure 1.11.
AF 
B
Elements in two sets that are not in the intersection: A U B - A n B.

CHAPTER 1 Sets, Proof Templates, and Induction
We can define the elements of two sets that are not in their intersection in terms of
unions, intersections, and complements of the sets. After the definition of this set, we
will show that the operation of forming this set satisfies both the commutative and the
associative law.
Definition 7. 
Let A and B be sets. The set
A G B = (A - B) U (B - A)
is the symmetric difference of A and B.
Example 8. 
Let A = {1, 2,3,41 and B ={3, 4,5, 6}. Then, A • B = {1, 2,5,61.
Some obvious facts about the symmetric difference are collected in Theorem 9.
Theorem 9.
(a) For any set A, we have A B 0= A.
(b) For any set A, we have A EA = 0.
(c) For any two sets A and B it follows that A E B = B & A.
Proof. (a) and (b) follow directly from the definition.
(c) SinceAEB=(A-B) U(B-A)=(B-A)U(A-B)=B ®A
the result follows. 
U
In Theorem 9(c), it is shown that E is a commutative operation. The next theorem
shows how you prove that symmetric difference is also an associative operation.
Theoreml0. 
A E(BDC)=(AEB)EDC.
Proof
(A E B) E C = ((A ED B) - C) U (C -
(A E B))
= (((A - B) U (B - A)) - C) U (C - ((A - B) U (B - A)))
To simplify the proof, we will reduce the two terms on the right side separately. When we
have reduced these two terms, we can combine the reductions to complete a reduction of
(A G B) q C.
The first step will be to replace various expressions of the form X -
Y with X n Y
where X and Y represent any pair of the sets A, B, and C:
((A -
B) U (B -
A)) -
C = ((A n B) U (B n A)) n C
=(An W n C) U (An B n C) 
(Distributive Law)
The second term involves a few more steps than the first term:
C -
((A - B) U (B -
A)) = C n ((A n B) U (B nA))
= C n ((A n B) n (B Af 
A)) 
(DeMorgan's Law)
= C n ((A U B) n (B U A)) 
(DeMorgan's Law and A = A)
= C n (((A U B) A B) U ((A U B) n A)) 
(Distributive Law)
= C n (((A n B) U (B n B)) U ((A n A) U (B A A))) 
(Distributive Law)

Operations on Sets 
=CO((ANiB)U(BNA)) 
(ANfA=BNB=o)
= (C n A nf B) U (C n A n B) 
(Distributive Law)
Putting the reduced form of these two terms together gives a new description of
(A D B) E C.
((AeB)®C) = (AnBNC)u(ANBNeC)u(AnBnC)U(AnBnC)
By similar steps, the term A E (B E C) can be reduced to these same expression. We
leave this reduction to the reader. After this second reduction, we can conclude
A ED (B ED C) = (A ED B)C E
The Logic of Statements
Theorem 8(b) is closely tied to an issue in the logic of sentences. The issue is the relation-
ship between an if-then statement and its converse, its inverse, and its contrapositive. A
statement such as "if a, then b" can be rewritten as "if b, then a," and you might wonder
if the first statement is true whether or not you can deduce anything about the truth of the
second. We start with a statement such as "if a, then b." The obvious variants of this state-
ment are "if b, then a," "if not a, then not b," and "if not b, then not a." What we would
like to understand is whether any one of these statements being true (or false) implies that
any other of these statements is true (or false). Consider the statement
"If George is a horse, then George is an animal."
The inverse of this statement is
"If George is not a horse, then George is not an animal."
The converse of this statement is
"If George is an animal, then George is a horse."
And, finally, the contrapositive of the statement is
"If George is not an animal, then George is not a horse."
The statement and its contrapositive are both true, whereas the inverse and converse are
probably false (depending on who George is).
As another example, consider the following:
Statement: 
"If my cat is a horse, then my cat is an animal."
Inverse: 
"If my cat is not a horse, then my cat is not an animal."
Converse: 
"If my cat is an animal, then my cat is a horse."
Contrapositive: 
"If my cat is not an animal, then my cat is not a horse."
As the two examples illustrate, the if-then statements are equivalent statements to their
contrapositives. It can be shown that in general, based on logic alone, a statement is true
if and only if its contrapositive is true. In writing a proof, it may be easier to use the
contrapositive of a statement than to use the statement itself. A proof of the contrapositive
of your objective is called an indirect proof. In the cat/horse example, the statement and
its contrapositive are vacuously true, but the inverse and converse are false. An if-then

CHAPTER 1 Sets, Proof Templates, and Induction
statement is normally not equivalent to its inverse or to its converse, but the converse and
inverse are always equivalent to each other.
1.3.3 
New Proof Templates
The first new proof idea was used in Theorem 4 (Section 1.3.1). In Theorem 4(a) there were
two possibilities in the hypothesis. We needed to prove that regardless of which possibility
was true, the conclusion followed. The proof was actually two proofs! In general, there can
be any number of cases. The proof technique is outlined in Template 1.8.
To prove a theorem by cases:
1. List all possible cases that will cover every circumstance in which the hypothesis
might hold.
2. For each possible case, prove the conclusion separately.
The proof of Theorem 4 is a simple proof by cases; we will present more complicated
examples later. As you proceed, be aware of the following recommendations in using a
proof by cases:
1. Make sure you need to use a proof by cases. If you break a proof into cases, you must
normally treat each case separately, which tends to make your proof long. If you don't
need to break the proof into cases, your proof will often be shorter. If only one step
of your proof needs to be broken into cases, then break only that step into cases. Even
more risky is breaking cases into subcases. Suppose you write a proof breaking into four
cases, and each case breaks into four subcases, and each subcase breaks into four sub-
subcases. That gives you 4.4.4 = 64 cases in all to prove, and that almost inevitably
makes your proof longer than it otherwise might be.
2. Make sure you list all possible cases. The proof of Theorem 4(a) in Section 1.3.1, con-
sisted of only two possible cases, and they were obvious from the problem. However,
problems sometimes break down into more than two cases, and when they do, it is easy
to miss some cases.
3. You need to prove that your list of cases covers all possible cases.
4. When claiming that two cases are analogous, make sure that one case is truly analogous
to another. There may well be logical subtleties that arise in one case that didn't arise
in an earlier case. (Indeed, that is often why we break a problem into cases in the first
place!) Before saying that two cases are analogous, think carefully through the details
to make sure they are!
The discussion following Theorem 4 pointed out another proof technique. In dis-
cussing the statement of Theorem 4(a), it was pointed out that it is useful to understand
what a theorem does not say. Quite often, it is not true that what seems intuitively to be

Operations on Sets 
quite reasonable is, in fact, true. In the case discussed following Theorem 4, a counterex-
ample would give a concrete instance of sets that satisfy the hypothesis of the alternate
statement, whereas the same sets do not satisfy the conclusion. This proof idea is shown in
Template 1.9.
To disprove results starting "for every x c A," find an x that can be proven to be in A
and for which the result fails.
Theorem 7 in Section 1.3.2 proved that if A C B, then B C A by assuming that A C
B and B 
K 
A. We then showed this led to a contradiction. The format for this proof is
summarized in Template 1.10.
To prove an assertion a by contradiction, use one of the following two forms:
Form 1: Assume assertion a is false, and prove that some other assertion b is false
where assertion b is known to be true.
Form 2: Assume assertion a is false. For some assertion b, prove that both assertion
b is true and assertion b is false.
The statement of Theorem 7(b) can be construed as saying that a statement and its con-
trapositive have the same truth value. For example, think of "A C B" as being translated
"if x E A, then x E B." Similarly, think of "B C A" as "if x 0 B, then x 0 A." How
would an if-then statement be proved to be true or false just when its contrapositive is?
The answer is almost exactly the way that Theorem 7(b) was proved. The idea of this proof
technique is summarized in Template 1.11.
To prove a theorem using an indirect proof, prove "if p, then q" by proving "if not q,
then not p."

CHAPTER 1 Sets, Proof Templates, and Induction
1.3.4 
Power Sets and Products
We started by introducing you to thinking about sets of objects and not just individual
objects. After introducing sets, we made precise what it means for one set to be a subset
of another. We can also take one more step, however, and think of the set consisting of all
subsets of a set.
Definition 8. 
Let A be a set. The power set of A, denoted P(A), is
P(A) = {X: X C A)
Example 9.
(a) P(0) = (0). Even though 0 has no elements, P(0) has the one element 0.
(b) P(P(0)) = P({0)) = {0, 1011.
(c) P({1, 2}) = {0, {1), {2), {1, 2}}.
(d) P({l, 2, 3}) = {0, (1}, (2), (3), {1, 2}, {2,3}, {1, 3), (1, 
2,3)).
(e) P({1, 2, 13)1) = {0, (1}, (2), {{3)), {1, 2), {2, {3}}, {1, (3)), (1,2, (3111.
(f) P({{1, 2, 3}1) = {0, {1, 2, 311. This is true, because the set {{1, 2, 3}} has only one ele-
ment, {1, 2, 3}. So, there are only two subsets of {{1, 2, 3}}, one that contains {1, 2, 31
and one that does not.
Products of Sets
The next operation on sets is familiar, because it is the formalism behind the way we are
used to seeing points in two-dimensional space represented as ordered pairs.
Definition 9. 
For any sets X and Y, the product X x Y is the set of all ordered pairs
(a, b) such that a E X and b E Y. When X = Y, this set is also denoted X2. Similarly,
the product of n sets X1 ..... 
Xn is the set of all ordered n-tuples (xl, ... 
, Xn) of elements
such that xI E X 1..... 
and Xn G Xn . When n copies of the same set X are used, the re-
sulting Cartesian product X x ... x X is the set of all ordered n-tuples of elements in X,
denoted Xn.
Example 10. 
Let X = (0, 11 and C = [a, b}. Then, X x C = ((0, a), (0, b), (1, a),
(1, b)), and C x C = I(a, a), (a, b), (b, a), (b, b)}. The product of two sets is sometimes
referred to as the Cartesian product.
1.3.5 
Lattices and Boolean Algebras
The design of computer chips involves very complex interactions of very small components
or building blocks called gates. The complete design that is of a computer chip is called
a combinatorial circuit. The mathematical structure we will introduce here can be used to
design, represent, and optimize combinatorial circuits. We will look more closely at gates
and combinatorial circuits in Chapter 2, but we first need to understand the underlying
mathematical structure.
Definition 10. 
A lattice is a set X with two operations, called meet, denoted as A, and
join, denoted as v, that satisfy the following properties for all x, y, z E X :

Operations on Sets 
"x 
A y = y A x 
Commutative Law for Meet
"x 
V y = y V x 
Commutative Law for Join
"x 
A (y A z) = (x A y) A z 
Associative Law for Meet
"x V (y V z) = (x v y) V z 
Associative Law for Join
"x 
A (x V y) = x 
Absorption Law for Meet
"x 
V (x A y) = x 
Absorption Law for Join
To say that something is a lattice, we must explicitly say (i) what the set of objects
is and (ii) what the meet and join operations are. After specifying these, we must show
that meet and join so interpreted satisfy all the required axioms. Meet and join can be any
operations on the set so long as the axioms are satisfied. The operations of meet and join can
be as simple as union and intersection defined on a set of sets. Whatever the operations are
defined to be, however, the first task is to show that the operations satisfy the Commutative
and Associative Laws.
Example 11. 
Let X be a set, and let L = P(X). Let join be defined as the union of two
subsets of X and meet as the intersection of two subsets of X. Then, L together with union
and intersection is a lattice.
Solution. By Theorems 1 and 2 in Section 1.3.1, the Commutative and Associative Laws
hold. To prove that the Absorption Law holds, we use the result of Theorem 5 in Section
1.3.1. 
E
The next example shows that the interpretation of meet and join can be rather different
from unions and intersections.
Example 12. 
Let X C _R. Let meet be defined as the minimum of two elements of X and
join as the maximum of two elements of X. Then, X together with the minimum and the
maximum operations is a lattice.
Solution. The Commutative Law for Meet in this context says that the minimum of two
real numbers is the same regardless of the order in which you consider the elements. The
remainder of the Commutative and Associative Laws for Meet and Join are straightforward
to verify. The Absorption Law for Meet says that the minimum of an element x together
with the maximum of the two elements x and y where y is any other element is just x.
This just says that either x is the minimum of {x, x} or the minimum of Ix, y} where
y > x. In either case, the result follows. The remaining details are left as Exercise 21 in
Section 1.4. 
U
There are two additional properties that are used to distinguish different kinds of lat-
tices. The first of these laws, the Distributive Law, is familiar in the context of union and
intersection.
Definition 11. 
Let X with the operations meet (A) and join (v) be a lattice. X is a dis-
tributive lattice if the following two properties are satisfied for all x, y, z G X:
"x A (y V z) = (x A y) V (x A z) 
Distributive Law for Meet
"x V (y A z) = (x V y) A (x V z) 
Distributive Law for Join

CHAPTER 1 Sets, Proof Templates, and Induction
The Distributive Laws for Meet and Join are proved for the interpretation of meet as
intersection and join as union in Theorem 3 (Section 1.3.1).
The final property we need is stated abstractly in terms of two special elements that
must be identified in the set of elements forming a lattice. The usual way to prove this
result is to assume that the lattice has this property and then determine what these special
elements must be.
Definition 12. Let X together with the operations meet (A) and join (v) be a lattice. X is
a complemented lattice if
1. There are two (unequal) elements, one called the minimum element, denoted I (read
bottom), and the other called the maximum element, denoted T (read top), such that
for every x E X,
xAT=x, xAL=_L, xvT=T, 
andxvL=x
2. For each x E X, there is an element -x E X such that x A -x = -L and x v -x = T.
Example 13. 
Let A be a set, and let X = P(A). The lattice on X with meet defined as
intersection and join defined as union is a complemented lattice.
Solution. Let T = A and -L = 0. Since for any B E X we have BnT=BOA = B,
B nl1=B n 0=0, B UT=B UA=A, andBU-_=B U 0 =B, Xisacomple-
mented lattice. 
M
The definition does not tell you what elements of a lattice should be -L and T or what
the relationship between -x and x is. For the lattice of subsets of a set A, we can use 0 =1L
and A itself as T. We also define -x as the complement of x. With these definitions of T,
-L, and --x for this lattice, you can show that the lattice is complemented. The details are
left as Exercise 23 in Section 1.4.
The mathematical structure that is of importance in computer science can now be
defined.
Definition 13. 
A boolean algebra is a complemented, distributive lattice.
The boolean algebra used by computer scientists to model combinatorial circuits is
based on the set of elements {0, 11 and the operations shown in Table 1.1 where v is the
meet and A is the join.
Operations for a
Boolean Algebra
V 
A 
Example 14. 
Let B be a set of elements assigned values from the set {0, 1 }, and let the
operations v and A be defined on B as described in Table 1.1. B together with v as meet
and A as join forms a boolean algebra.

Exercises 
Here, it turns out that there is only one possible choice for each of T, 1, and -':
T=1, 1_=0, --0=1, and-1 =0
Indeed, there is always only one possible choice (see Exercise 24 in Section 1.4). Thus, in
any boolean algebra, we may refer to T, 1, and each -x without ambiguity.
Solution. The proof requires showing that no matter what value x, y e B have, the ax-
ioms of a boolean algebra hold. As an example, we will show that the operation meet is
commutative. Let x, y E B. Then,
y 
x
V 
v 
X 0 
1y 
We can simply check that for all possible pairs, x V y = y V x for the meet operation.
Similar proofs are needed for the other axioms and will be left for the reader. 
N
In Section 2.1.4, we will consider this boolean algebra by another name. In place of 1
and 0, we will call the values of the elements TRUE and FALSE. The operations will be or
and and. Then, for example, we can interpret a variable x to be TRUE if there is a current
flowing in a wire X-and similarly, y to be TRUE if there is a current flowing in wire Y.
This turns out to be a very natural way to look at computer circuits.
* 
Exercises
1. Let A ={1, 2, 3 ...
, 10), B = {2, 3, 6, 81, 
and C = {3, 5, 4, 8, 2}. Find the follow-
ing:
(a) BUC
(b) BnC
(c) B - C
(d) A - B
(e) A - C
2. Let U={0,1,2,3,4,5, 6,7,8,9), 
A={0,1,2,3}, B={0,2,4}, and C=
{0, 3, 6, 9).
(a) FindAUB, AnB, A, (A n B), and (B U C) - A.
(b) Find P(A), P(B), 7P(A n B), P(A) n P(B).
(c) Is P(A U B) = P(A) U P(B)? Prove your answer.
(d) Why doesn't P(A) make sense?
3. Let A = {0, 3) and B = {x, y, z}. Find the following:
(a) A x B
(b) A x A x B
(c) B x A
(d) B x A x B

CHAPTER 1 Sets, Proof Templates, and Induction
4. Let X = {2, 4}, Y = {1, 4}, and Z = {0, 4, 8}. Construct the following sets:
(a) X x Y
(b) X x Y x Z
(c) Y x Z
(d) ZxYxX
(e) ZxXxY
5. Prove Theorem l(d).
6. Prove Theorem 2(d).
7. (a) Draw Venn diagrams to illustrate Theorems 3(a) and 3(b).
(b) Prove Theorem 3(a).
(c) Prove Theorem 3(b).
8. (a) Draw Venn diagrams to illustrate Theorems 4(c) and 4(d).
(b) Prove Theorem 4(c).
(c) Prove Theorem 4(d).
9. Find three sets A, B, and C where A C B U C but A 7 B and A • C.
10. (a) Draw Venn diagrams illustrating the four parts of Theorem 6.
(b) Prove Theorem 6(a).
(c) Prove Theorem 6(b).
(d) Prove Theorem 6(c).
(e) Prove Theorem 6(d).
11. Prove Theorem 7(c).
12. (a) Prove Theorem 9(b) using as a model the proof of Theorem 9(a).
(b) Prove Theorem 9(b) using Theorem 7(c).
13. Let A = {1, 2, {{l, 2}}}.
(a) How many elements does A have? How many elements does 'P(A) have? How
many elements does 7P(P (A)) have?
In parts (b)-(m) determine, whether each of the following is true, and if not,
explain why not.
(b) I E A
(c) {1,2leA
(d) {{1,21) E A
(e) 0EA
(f) 
Ie EP(A)
(g) {1,2} e P(A)
(h) {{1,2)} e P(A)
(i) 0 E P(A)
(j) 1 E P(P (A))
(k) {1, 2} E P(P (A))
(1) {{1, 211 E P(P(A))
(m) 0 e P'(P(A))
14. For each of the following statements, find the corresponding inverse, converse, and
contrapositive.
(a) If the stars are shining, then it is the middle of the night.
(b) If the Wizards won, then they scored at least 100 points.
(c) If the exam is hard, then the highest grade is less than 90.

Exercises 
15. Which of the following statements are correct? Prove each correct statement. Disprove
each incorrect statement by finding a counterexample.
(a) A and B are disjoint if and only if B and A are disjoint. (Read the statement
carefully-the order in which the sets are listed might matter!)
(b) A U B and C are disjoint if and only if both the following are true: (i) A and C are
disjoint and (ii) B and C are disjoint.
(c) A n B and C are disjoint if and only if both the following are true: (i) A and C are
disjoint and (ii) B and C are disjoint.
(d) A U B and C are disjoint if and only if one of the following is true: (i) A and C
are disjoint or (ii) B and C are disjoint.
(e) A n B and C are disjoint if and only if one of the following is true: (i) A and C
are disjoint or (ii) B and C are disjoint.
(f) Let U be a universal set with A, B C U. A and B are disjoint if and only if A and
B are disjoint.
16. For (a) and (b), prove the stated result. For (c) and (d), find a counterexample to show
that these conjectures are false.
(a) AE)B=(AUB)-(ANB)
(b) A n (B e C) = (A n B) ® (A n C)
(c) (AOB)@(CND)C(AEC)fA(BED)
(d) (A U B) @ (C U D) _ (A U C) ® (B U D)
17. Given any four integers xI, X2, X3, and x4, none of which is even and none of which is
a multiple of 5, prove that some consecutive product of these integers ends in the digit
1. A consecutive product is one term, two terms in a row, three terms in a row, or all
four terms in a row using the order in which the integers appear in the list xl, x2, X3, X4.
(Hint: Use a proof by cases.)
18. Prove by contradiction that 7 is a prime number.
19. Prove by contradiction that V/2 is not a rational number.
20. Prove by contradiction that Z has no smallest element.
21. Complete the proof of Example 12.
22. For parts (a) and (b), let U be any set, and let X = P(U).
(a) Prove that X with the operations n for meet and U for join is a distributive lattice.
(b) Prove that X with the operations U for meet and n for join is a distributive lattice.
23. Let U be any set, and let X = P(U). Prove that X with the operations U for meet and
n for join is a complemented lattice.
24. Recall that in the definition of a boolean algebra, we did not require that T, I, and
each -x be specified; we merely said they must exist. So, it is natural to ask whether
there might be several elements that could equally well be chosen as T or I or, for
some element x of the boolean algebra, several different possible choices for -x. Show
that in a complemented lattice:
(a) There is only one possible choice of elements T and I satisfying the definition
of a complemented lattice. (Hint: Suppose there were two possible choices for T,
say, T"1 and T 2 . Evaluate T 1 A T 2 in two different ways.)
(b) For each element x of a complemented, distributive lattice, there is only one possi-
ble choice for -x that satisfies the definition of -x. (Hint: Suppose there were two
choices, say, -xl and -x2, for --x. Find two ways to evaluate --xl A x V -X2.)

CHAPTER 1 Sets, Proof Templates, and Induction
25. Prove that in a boolean algebra
a V (b Ac) = (a v b) A C
if and only if
a V (b A (a V c)) = (a v b) A (a V c)
and
a A (b V (a A c)) = (a A b) V (a A c)
This property of a boolean algebra is called modularity.
26. Prove that in a boolean algebra, DeMorgan's Laws hold; that is,
-,(x V y) = -x A -,y
-,(x A y) = -X V -'y
27. Let U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 101 be a universal set. Let A, B, C C U such that
A = {1, 3, 4, 81, B = {2, 3, 4, 5, 9, 101, and C = {3, 5, 7, 9, 101. Use bit representa-
tions for A, B, and C together with UNION, INTER, DIFF, and COMP to find the bit
representation for the following:
(a) AUB
(b) ANBNC
(c) (AUC) nB
(d) (A-B) UC
(e) AAn(B-(CnB))
(f) A-(B-C)
(g) (AUB) U(C-B)
rnThe Principle of Inclusion-Exclusion
A great deal can often be learned just by counting the elements in a set. Unfortunately, it
turns out that even though counting is sometimes very easy, it is sometimes very difficult,
especially if the set whose elements are being counted has a very complicated description.
As we show later, the Principle of Inclusion-Exclusion is a widely used method for count-
ing the number of elements in the union or the intersection of sets.
1.5.1 
Finite Cardinality
Before we focus on counting elements in unions of sets that are not disjoint, we need to
make clear some fundamental ideas about how we compute the number of elements in a set.
Definition 1. 
(Informal) 
For a finite set, the cardinality of A is the number of elements
in A. If A is infinite, then the cardinality of A is infinite. The cardinality of A is denoted
by IA I.
Example 1. 
1{1, 2,311 = 3. 101 = 0. 1IP(0) I = 1. i{{1, 2,3}}I = 1. IZI is infinite.
This definition should be viewed as a temporary one. The topic of cardinality will be
dealt with in Chapter 4, in which this informal definition will be replaced with a more
formal one. In Chapter 4, the idea of two sets having the same cardinality (I X I = I Y I)
will be extended to include sets with infinitely many elements. The informal definition of
cardinality suffices for finite sets; and in this section, only finite sets are considered.

The Principle of Inclusion-Exclusion 
Theorem 1. (Basic Counting Theorem) Let A and B be subsets of a finite universal
set U.
(a) Let B C A. Then:
i. IBI<IAI.
ii. IA-BI=IAI-IBI.
iii. IBI = IAlifandonlyifB =A.
(b) Let A and B be disjoint finite sets. Then, I A n B I = 0, and I A U B I = IA + I B
(c) IAI=IUI-IAI.
Proof. The proof is left to the reader. 
M
Example 2. The population of Atlanteas is 830, of which 250 are adult females and 380
are children.
(a) How many adults live in Atlanteas?
(b) How many adult males live in Atlanteas?
(c) How many "females and children" live in Atlanteas?
Solution. The universal set is U = {residents of Atlanteas}. The subsets of interest are
A = {adults}, F = {adult females), M = {adult males), and C = {children}
(a) 
AI =IUI - ICI =830 - 380 =450 (part (c))
(b) IMI = AI -
IFI = 450 - 250 = 200 (since M C A use part (a))
(c) IFUCI = IFI + ICI - IFnCI =250+380-0=630 (since FnC = 0, usepart
(b)) 
The results in parts (a) and (b) of Theorem 1 are very special, because they make
strong assumptions about A and B. If these assumptions fail, the conclusions are generally
incorrect.
Example3. LetU={0,1,2),A={0,1},andB={1,2).
(a) Since A is not a subset of B, the hypothesis of part (a) does not hold. Neither does the
conclusion. JAI = I B I, but A # B, and IA -
B I = 1 #0 = IA I - IBI.
(b) The sets A and B are not disjoint sets, so the hypothesis of part (b) does not hold. We
have IANBj= fl} = 1 #0 
and IAUBI = 10,1,211 =3A4= iAI+IBI,
so neither conclusion holds.
A more interesting question is the cardinalities of I A n B I and I A U B I when neither
A nor B is a subset of the other and the sets are not disjoint. There are, of course, some
trivial truths, such as 0 < I A n B I and I A n B I < I A 1. What is interesting, however, is
the relationship between I A n B I and I A U B I. The reader should study the two examples
below and then, before reading any further, try to identify a pattern.
Example 4. 
Let A = {0, 1, 2, 3, 4, 5, 6, 7} and B = {4, 5, 6, 7, 8, 9, 10, 11, 12, 13}. So,
I A I = 8, 1 B I = 10, I A n B I = 4, and I A U B I = 14.
Example 5. 
The population of Atlantis is 834, of which 500 are females. There are 175
people who are at least two meters tall, and only 10 of the females are at least two meters
tall. How many males are less than two meters tall?

CHAPTER 1 Sets, Proof Templates, and Induction
Solution. Of the 834 people, 500 are females, so 334 are males. Of the 175 people at
least two meters tall, 10 are females. This says that there are at 175 - 10 = 165 males who
are at least two meters tall.
Since there are 334 males in total and 165 of them are at least two meters tall, there
are 169 = 334 -
165 males who are less than two meters tall. The situation is shown in
Males 
Females
At least two
meters tall
Less than two
meters tall
Population characteristics.
In Example 5 we first counted how many males were at most two meters tall by di-
viding the set of all Atlanteans up into two sets, one consisting of all the females and the
other consisting of all the males. We did this correctly, because we knew the number of
Atlanteans and the number of females. We then made another such count to find the num-
ber of males who were at least two meters tall. We knew the total number of Atlanteans
who were at least two meters tall and the number of females who were at least two meters
tall. A simple subtraction gave the number of males at least two meters tall. We see that in
computing the size of both sets, we knew the size of two of the sets, and the two subsets
were disjoint. This result is an application of Theorem l(b) in Section 1.5.1. We next deal
with the case in which A and B are not disjoint.
1.5.2 
Principle of Inclusion-Exclusion for Two Sets
Example 6. 
A deck of cards has four suits: Clubs, Diamonds, Hearts, and Spades. Dia-
monds and Hearts are called red suits; Clubs and Spades are called black suits. Each suit
contains 13 cards with values Ace(l), 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, and King. How
many cards are black or have the value of 3?
Solution. Let A be the set of black cards and B the set of 3's. The example asks for the
size of I A U B I. Clearly, I A I = 26, and I B I = 4. The problem is that two of the 3's are
also black. In this case, I A n B I # 0. The count I A I + I B I overcounts by I A n B I. The
answer is
IAUB = IAI+IBI-IAnBI =26+4-2=28 
U
The card problem in Example 6 is a special example of the Principle of Inclusion-
Exclusion that we prove in more generality next.
Theorem 2. (Principle of Inclusion-Exclusion for Two Sets) Let A and B be finite
sets. Then,
IAUBI = IAI+IBI - IAnBI

The Principle of Inclusion-Exclusion 
The number of elements in the union of two finite sets is the sum of the number of elements
in each of the sets minus the number of elements in their intersection. A Venn diagram for
these sets is shown in Figure 1.13.
U
A 
B
ArnB
Figurel.13 
IAuBI.
(What the proof entails.) 
What procedure could be used to count the elements in A U B?
First, count all the elements of A. Then, count all the elements of B. In the process,
all the elements of A n B have been counted twice, so subtract I A n B I to compen-
sate.
Proof The set AUB=(A-B) U(AAB)U(B-A), and any pair of (A-B),
(A n B), and (B -
A) are disjoint (Theorem 6 in Section 1.3.2). It follows immediately
that (A - B) and (A n B) U (B -
A) are also disjoint. Hence, by using Theorem l(b) of
this section, we get
IA U B I =IA -
B I + I (AN B) U (B -
A)I
=I[A--BI+IANBF+IB--AI
By Theorem 6(b)
IAI=IA-BI+IANBI
IBI = IAnBI-+-IB- AI
Putting the last two equations together gives
I A I+ IB I=A - BI+2. 1AAnB I+ IB -A I
IAI+IBI-IAnBI = IA-BI+IAABI+IB-AI
Now, substituting this into the equation for I A U B I, we get the required result:
IAUBI=IAI+IBI-IAnBI I
1.5.3 
Principle of Inclusion-Exclusion for Three Sets
U
Figurel.14 
IAuBUCI. 
A 
B
C

CHAPTER 1 Sets, Proof Templates, and Induction
The decomposition of two sets into disjoint subsets is fairly obvious. For three or more
sets, however, this is not as obvious a step. Figure 1.14 will help you to understand the next
theorem if you identify each of the regions of A U B U C.
The sets of interest are identified as A, B, C, A n B, A n C, B n C, and A n B n C.
Theorem 3. (Principle of Inclusion-Exclusion for Three Sets) Let A, B, and C be
finite sets. Then,
IAUBUCI = IAI+IBI+ICI-+AnBI-IAAnCI-lBnCI+IAAnBfnCI
Proof. The same style of proof as used in Theorem 2 could be used, but in this case, there
would be seven pieces to keep track of instead of three. A clearer way to proceed is to use
Theorem 2 in Section 1.5.2.
A U B U C = I (A U B) U C I (by the definition of the union of three sets)
= IA U B I + I C I - I (A U B) n C I (by Theorem 2 in Section 1.5.2)
= I A U B + I C I - I (A n C) U (B n C) I (by Distributive Law for Intersection)
= I A U B + I C I - (I A n C I + I B n C I - I (A n C) n (B n C) I) (by Theorem 2
in Section 1.5.2 on (A n C) U (B n C))
= I A U B I + I C I - I A n C -
B 
CI + I(A n C) n (B A C)I
(removing parentheses)
=IAUBI+ICI-IAnCI-IBnCI+IAnBACI
(simplifying I(A n C) n (B n C)I)
=IAI+IBI-IAnBI÷ICI-IAnCI-IBnCI+IAnBnCI
(by Theorem 2 in Section 1.5.2 again)
=IAI+IBI+ICI-IAnBI-IAnCI-IBnCI+IAnBnCI
When the Principle of Inclusion-Exclusion is applied in the next example, the solution
becomes straightforward.
Example 7. 
A particular political campaign mailing is expected to appeal to three groups
of people: liberals, people earning more than $45,000 a year, and people with children un-
der five years of age. The mailing list includes 30,000 people, including 15,000 conserva-
tives and 15,000 liberals. Of the 30,000 on the mailing list, 17,500 earn more than $45,000
a year, including 10,001 of the liberals. In the set of people, 3500 have children under five
years of age, including 1000 conservatives, 2500 liberals, and 900 of those who earn more
than $45,000 a year. Only one of the liberals earns more than $45,000 a year and also has
children under the age of five. How many people on the mailing list are liberals, or earn
more than $45,000 a year, or have children under five years of age? (As usual, by or we
mean the inclusive or.)
Solution. Among people on the mailing list, let L be the set of liberals, E the set of
people who earn more than $45,000 a year, and C the set of people who have children
under five years of age (see Figure 1.15).

The Principle of Inclusion-Exclusion 
L 
E 
U
2499 
C
Counting liberals and children.
The Principle of Inclusion-Exclusion for Three Sets says that
ILUEUCI=ILI+IEI+ICI-ILAnEI-ILAnCI-IEAnCI+ 
ILAnE nCI
= 15,000 + 17,500 + 3500 - 10,001 - 2500 - 900 + 1
= 22,600 
U
Here, as often happens, there is a different way to count this collection of elements.
First, note that of the 900 people who have children under five years of age and who
earn more than $45,000 a year, only one is a liberal; the other 899 are conservatives. So,
among the 1000 conservatives with children under five years of age, 1000 - 899 = 101
do not earn more than $45,000. There are 15,000 liberals, plus 17,500 - 10,001 = 7499
conservatives making more than $45,000 a year, plus 101 conservatives with children under
five years of age. Therefore, the answer is
15,000 + 7,499 + 101 = 22,600
The Principle of Inclusion-Exclusion is also used to solve problems in number theory.
Before we explain that example, we need to remind ourselves of one fact from number
theory: For 2, 5, and 30, it is clear that 2130 and 5130. Moreover, it is clear that 2.5 =
10130. It is not always true, however, that the product of two divisors of a number is again
a divisor of the number. For example, 5, 10, and 30 have the property that 5130 and 10130,
but 5. 10 = 50130 is false. What is true is that if m is an integer and both p and q are
primes such that pim and qim, then p. q~m.
Example 8. 
How many natural numbers between 1 and 30,000,000 (including 1 and
30,000,000) are divisible by 2, 3, or 5?
Solution. Let
Di = {n e- N: 1 < n < 30,000,000 and n is divisible by i}
What is I D2 U D3 U D5 I? The number is difficult to count directly, so we use the Principle
of Inclusion-Exclusion. I D2 I = 15,000,000, I D3 I = 10,000,000, and I D5 I = 6,000,000.
How about I D2 n D3 I? Since 2 and 3 are both prime, an integer n is divisible by both 2
and 3 if and only if n is divisible by 2.3 = 6. So D2 n D3 = D 6, and I D6I = 5,000,000.
Similarly,
I D2 n D5 I = I DioI = 3,000,000
I D3 
Ds I = I D15I = 2,000,000

CHAPTER 1 Sets, Proof Templates, and Induction
and
I D2 n D3 n D 5 1 = I D301 = 1,000,000
Now, by the Principle of Inclusion-Exclusion for Three Sets,
I D 2 U D 3 U D5 I = I D21 + I 
I + I D 
- I D2 n D3 I - I D 2 n D5 I
-I D 3 n D5 1 + I D2 n D 3 n D5 I
= 22,000,000 
U
Often, a problem is posed in terms of finding how many objects do not have one or
more of a set of properties. For example, suppose we were asked to find the number of
integers between 1 and 30,000,000 that are not divisible by any of the integers 2, 3, or 5.
The solution is I D2 U D3 U D5 I where D2, D3, and D5 are defined as in Example 8. The
answer is
I D2 U D3 U D5 I= 30,000,000 - I D2 U D3 U D5 I
In Example 8 we have shown that
I D2 U D3 U D5 I = 22,000,000
so
ID2 U D3 U D51 = 8,000,000
Next, we study an example that looks quite different from counting the number of
values having some set of properties.
Example 9. 
(The Hat Check Problem) Three Victorian gentlemen, called G1, G2,
and G3, arrive at a restaurant and check their top hats. The cloakroom attendant loses the
numbers on the three hats and doesn't know which hat is whose. Rather than admitting
the error, the attendant gives the three hats back to the three gentlemen at random. Let
hi represent the hat that belongs to gentleman Gi where 1 < i < 3. The notation hihjhk
represents hat hi being given to G1 by the attendant, hj being given to G2 by the attendant,
and hk being given to G3 by the attendant.
How many random assignments of hats result in at least one gentleman receiving his
own hat?
Solution. There are six ways the three hats can be handed back. The first gentleman to
request his hat back may be given any of the three hats. The second gentleman may be
given either of the two remaining hats. The third gentleman must get the last hat. Multiply
3 x 2 x 1 = 6 to get the number of possible ways.
Of those six ways to hand back the hats, obviously only one gets each hat back to
its owner. How many ways get at least one hat back to its owner? This question can be
answered using the Principle of Inclusion-Exclusion.
Let U be the set of all six ways the attendant can give the three top hats back. Let Hi,
for 1 < i < 3, be the set of all the ways where Gi gets his own hat back. Now, I H1 I = 2,
for if G1 gets his own hat back, then there are two hats to return to G2 and G3. These
two hats can be returned to these two gentlemen in two different ways. By symmetry,
InlI = InH21 = I H31 = 2. If G1 and G2 get their own hats returned, then there is one hat

The Principle of Inclusion-Exclusion 
left to be given to G3. There is one way to return this hat to G3. Therefore, IH, n/H21 = 1.
By symmetry, IHt n /21 
= IHt n/ H31 = IH2 n H31 = 1. Finally, IH, n H 2 n H31 = 1.
By the Principle of Inclusion-Exclusion, we compute I H1 U H2 U H31 as
I H, U H2 U H3 I = I H1 I + I H2 I + I H3 I- 
HI n1H21 - I H, nn 31
-I 12 n H3 I + I H, nn 2 n H31
=2+2+2-1-1-1+1=4
That is, of the six possible ways to hand back the hats, in four of them at least one gentle-
man gets his own hat back. 
1.5.4 
Principle of Inclusion-Exclusion for Finitely Many Sets
Notice the alternating plus and minus signs in the Principle of Inclusion-Exclusion. For the
union of three sets, add the sizes of all the individual sets (intersections of one set), subtract
the sizes of the intersections of two sets, and add the size of the intersection of all three
sets. This alternation continues for computing the size of the union of more than three sets.
To state the next theorem neatly, we define two terms. Neither term is commonly used,
but each is quite understandable in the context of the Principle of Inclusion-Exclusion.
Definition 2. 
Let A 1, A2,..., A, be sets. An odd intersection from
A 1, A2,..... A.
is an intersection of an odd number of the Ai 's. An even intersection is an intersection of
an even, positive number of Ai 's.
Example 10. 
Let A 1 , A2, A3 , A4 , and A5 be sets. Odd intersections are:
n = 1 : A 1 , A2 , A3 , A4 , A5
n = 3: A 1 n A 2 n A3 , A1 n A2 n A4 , A, A A2 n A5 , A1 n A3 n A4 ,
A1 A A3 A A5 , A 1 n A4 n A5 , A2 n A3 A A4 , A2 n A3 n A5 ,
A2 n A4 n A5, A3 A A4 n A5
n = 5: A, A A2 A A3 A A4 n A5
Even intersections are:
n=0:0
n =2 : A1 A A2 , A2 A A3 , A3 A A4 , A4 A A5 ,
A, n A3 , A2 A A4, A3 A A5,
A 1 n A4 , A2 n A5 ,
A1 A A5
n = 4: A1 n A2 n A3 A A4 , A 1 A A2 A A3 A A5 ,
A1 n A3 n A4 n A5, A2 A A3 n A4 n A5 
U
Theorem 4. (Principle of Inclusion-Exclusion For Finitely Many Sets) 
Let A1, A2,
A.... 
A, be finite sets (n > 1). Then, I A, U A2 U ... U An I equals the sum of the
cardinalities of all odd intersections from A1, A2 ...
, An (including single sets) minus
the sum of the cardinalities of all even intersections from A1, A2 . .... An.

CHAPTER 1 Sets, Proof Templates, and Induction
rn Exercises
1. In a class of 35 students who are either biology majors or have blonde hair, there are
27 biology majors and 21 blondes. How many biology majors must be blonde?
2. A film class had 33 students who liked Hitchcock movies, 21 students who liked Spiel-
berg movies, and 17 students who liked both kinds of films. How many students were
in the class if every student is represented in the survey?
3. A tennis camp has 39 players. There are 25 left-handed players and 22 players who
have a two-handed back stroke. How many left-handed players have a two-handed
back stroke if every player is represented in these two counts?
4. A car manufacturer determines that automatic transmission, power steering, and a
CD player are the three most important features in generating sales. The production
schedule for the next day has these features incorporated in cars as shown in the fol-
lowing table:
Car 
Automatic Transmission 
Power Steering 
CD Player
A 
x 
x
B 
x 
x 
x
C 
x
D 
x 
x
E 
x
F 
x 
x
G 
x 
x
H 
x 
x
(a) How many cars have at least one of these features? Even though you can see the
answer, use the Principle of Inclusion-Exclusion to derive it.
(b) How many cars have two or more of these features? Again, use the Principle of
Inclusion-Exclusion to derive the answer.
5. A marketing class did a survey of the number of fast-food outlets near campus. The
results of the survey showed the following:
Type of Food Sold 
No. of Outlets
Hamburgers 
Tacos 
Pizza 
Hamburgers and tacos 
Hamburgers and pizza 
Tacos and pizza 
Hamburgers and tacos and pizza 
Served none of these items 

Exercises 
How many fast food outlets are there near campus?
6. At the beginning of the semester, an instructor of a music appreciation class wants to
find out how many of the 250 students had heard recordings of the music of Mozart,
Beethoven, Haydn, or Bach. The survey showed the following:
Composer Listened to by Students 
No. of Students
Mozart 
Beethoven 
Haydn 
Bach 
Mozart and Beethoven 
Mozart and Haydn 
Mozart and Bach 
Beethoven and Haydn 
Beethoven and Bach 
Haydn and Bach 
Mozart, Beethoven, and Haydn 
Mozart, Beethoven, and Bach 
Mozart, Haydn, and Bach 
Beethoven, Haydn, and Bach 
Mozart, Beethoven, Haydn, and Bach 
How many students had listened to none of the composers?
7. A marketing class did a sample survey to find out how many of a class of 125 people
owned CDs of the Beatles, Alabama, or Bob Marley. The results of the survey showed
the following:
Recording Artist 
No. of Students Owning CDs
Beatles 
Alabama 
Bob Marley 
Beatles and Alabama 
Beatles and Bob Marley 
Bob Marley and Alabama 
Beatles, Bob Marley, and Alabama 
How many of the students owned no CD featuring these performers?

CHAPTER 1 Sets, Proof Templates, and Induction
8. The language department wanted to know how many of the 2000 students at the uni-
versity were not studying a language. Class rosters showed the number of students
studying some combination of French, German, and Spanish, as recapped in the fol-
lowing table:
Language 
No. of Students
French 
German 
Spanish 
French and German 
French and Spanish 
German and Spanish 
French and German and Spanish 
How many students were not studying a language?
9. How many integers between 1 and 250 are divisible by 3 or 5?
10. In the game of tic-tac-toe, every game ends with one player winning or with a draw.
In a tic-tac-toe tournament, the players merely count the number of times they win
or draw. The match winner is the player with the larger total. If a match between two
players A and B consists of 25 games, player A has a score of 19, and player B has a
score of 23, how many draws were there?
11. There are 76 students enrolled in Anth229, Intermediate Anthropology. Each of these
students is also required to enroll in either one or both of Bio1313, Physiology, and
Engl218, Victorian Poets. Of these 76 students, there are 35 in Bio1313 and 49 in
Engl218. How many students are enrolled in all three classes?
12. The enrollment for the four courses Bio1212, Polil 15, Econ313, and Fina215 is 108,
203, 315, and 212, respectively. No student is in all four of these courses. No student is
in the three courses Biology 212, Fina215, and Poli 115. No student takes Econ313 and
Fina215 in the same semester. Polil 15 and Fina215 are not allowed in the same term.
There are 39 students in both Bio1212 and Poli 115, and 48 students in both Polil115
and Econ313 as well as in the two courses Bio1212 and Econ313. Bio1212, Poli115,
and Econ313 have a common enrollment of 73. Bio1212 and Fina215
