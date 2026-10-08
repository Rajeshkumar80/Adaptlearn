<!-- PROVENANCE: subject_code=BCS301 | subject_name=Mathematics for Computer Science | semester=3 | module=1 | source_type=MODULE_NOTES | source_file=module1.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS301 — Module 1

## Linear Algebra

**Subject:** BCS301 (Mathematics for Computer Science)
**Module:** Module 1
**Content type:** module_notes
**Sources:** BCS301-module-1-pdf.txt

---

Mathematics for Computer Science (III Semester) 
BCS301 - Module 1 
Probability distributions 
Syllabus: 
Review of basic probability theory: 
Set theory 
Probability 
Universal set 
Sample space 
Set 
Event 
Elements  
Outcome  
Disjoint sets 
Mutually exclusive events 
 
❖ Sample space S is the set of all possible outcomes. 
❖ The probability P is a real valued function whose domain is S and range is the interval 
[0,1] satisfying the following axioms:  
(i) For any event E, 𝑃 (𝐸) ≥ 0  
(ii) 𝑃 (𝑆) = 1 
(iii) If E and F are mutually exclusive events, then 𝑃(𝐸 ∪ 𝐹) = 𝑃(𝐸) + 𝑃(𝐹). 
❖ If  E and F are equally likely to occur then 𝑃(𝐸) = 𝑃(𝐹). 
❖ If E and F are any two events then 𝑃(𝐸∪𝐹) = 𝑃(𝐸) + 𝑃(𝐹) −𝑃(𝐸∩𝐹). 
❖ If E and F are mutually exclusive events then 𝑃(𝐸∩𝐹) = 0.  
 
 

 
 
 
 
 
 
 
 
 
 
1.1 Discrete probability distribution 
Introduction: 
❖ A random experiment is a process that leads to a single outcome that can’t be predicted 
with certainty. Example: Tossing coin, playing cricket. 
 
❖ In a random experiment, if a real variable is associated with every outcome then it is called 
a random variable (or) stochastic variable. 
Example: Suppose a coin is tossed twice. Now, 1 is associated with head and 0 is associated 
with tail. 𝑆= {𝐻𝐻, 𝐻𝑇, 𝑇𝐻, 𝑇𝑇} 
Outcomes 
𝐻𝐻 𝐻𝑇 𝑇𝐻 𝑇𝑇 
Random variable (X) 
 
❖ If a random variable takes any discrete value (nonnegative integer) then it is called discrete 
random variable. 
Example: Number of students in a class, Number of leaves in a tree. 
 
❖ For each value of 𝑥𝑖 of a discrete random variable 𝑋, we assign a real number 𝑃(𝑥𝑖) such 
that ∑
𝑃(𝑥𝑖) = 1
𝑛
𝑖=1
 then 
𝑋 
  𝑥1 
𝑥2 
𝑥3 
… 
  𝑥𝑛 
𝑃(𝑋) 𝑃(𝑥1) 𝑃(𝑥2) 𝑃(𝑥3) 
… 
𝑃(𝑥𝑛) 
is called a discrete probability distribution of  X. 
 
 
❖ The function 𝑃(𝑥) is called probability mass function. 
 
❖ The discrete function 𝐹(𝑥) defined by 𝐹(𝑥) = 𝑃(𝑋≤𝑥) = ∑
𝑃(𝑥𝑖)
𝑥
𝑖=1
 is called 
cumulative distribution function or distribution function. 
 
❖ Expectation 𝐸(𝑥) = ∑
𝑥𝑖𝑃(𝑥𝑖)
𝑛
𝑖=1
  and  𝐸(𝑥2) = ∑
𝑥𝑖
2𝑃(𝑥𝑖)
𝑛
𝑖=1
 
 
❖ Mean = 𝐸(𝑥), Variance = 𝐸(𝑥2) – [𝐸(𝑥)]2, Standard deviation = √𝑉𝑎𝑟𝑖𝑎𝑛𝑐𝑒 

 
 
 
 
 
 
 
 
 
 
 
1. Find the mean and standard deviation for the following probability distribution: 
  
 
 
𝐸(𝑥𝑖) = Σ𝑥𝑖𝑝(𝑥𝑖) = (−5) 1
4 + (−4) 1
8 + (1) 1
2 + (2) 1
8 = −1  
𝐸(𝑥𝑖
2) = Σ𝑥𝑖
2𝑝(𝑥𝑖) = (−5)2 1
4 + (−4)2 1
8 + (1)2 1
2 + (2)2 1
8 = 9.25  
Mean = 𝐸(𝑥𝑖) = −1 
Variance = 𝐸(𝑥𝑖
2) −[𝐸(𝑥𝑖)]2 = 9.25 −1 = 8.25 
Standard deviation = √8.25 = 2.8723 
 
2.  Find the mean and standard deviation for the following probability distribution: 
 
  
 
  𝐸(𝑥𝑖) = Σ𝑥𝑖𝑝(𝑥𝑖) = 1(0.4) + 3(0.1) + 4(0.2) + 5(0.3) = 3 
𝐸(𝑥𝑖
2) = Σ𝑥𝑖
2𝑝(𝑥𝑖) = 12(0.4) + 32(0.1) + 42(0.2) + 52(0.3) = 12  
Mean = 𝐸(𝑥𝑖) = −1 
Variance = 𝐸(𝑥𝑖
2) −[𝐸(𝑥𝑖)]2 = 12 −9 = 3 
Standard deviation = √3 = 1.7320 
 
 
 
 
 
 
 
 
 
 
 
𝒙𝒊 
-5  -4  1  2 
𝑷(𝒙𝒊) 
1/4  1/8  1/2  1/8  
𝒙𝒊 
1  3  4  5 
𝑷(𝒙𝒊) 
0.4  0.1  0.2  0.3  

 
 
 
 
 
 
 
 
 
 
3. The probability density function P(x) of a variate x is given by the following table: 
 
 
 
  (i) For what value of k, does this represent a valid probability distribution. 
  (ii) Find  𝒑(𝒙< 𝟒), 𝒑(𝒙≥𝟓) 𝒂𝒏𝒅 𝒑(𝟑< 𝒙≤𝟔) 
  (iii) Determine the minimum value of k so that 𝑷(𝑿≤𝟐) ≥𝟎. 𝟑 
Case (i) 
Since it is a probability distribution, 
Σ𝑝(𝑥𝑖) = 1 ⟹49𝑘= 1 ⟹𝑘= 1/49  
Case (ii) 
𝑝(𝑥< 4) = 𝑝(0) + 𝑝(1) + 𝑝(2) + 𝑝(3) = 𝑘+ 3𝑘+ 5𝑘+ 7𝑘= 16𝑘= 16/49 
𝑝(𝑥≥5) = 𝑝(5) + 𝑝(6) = 11𝑘+ 13𝑘= 24𝑘= 24/49 
𝑝(3 < 𝑥≤6) = 𝑝(4) + 𝑝(5) + 𝑝(6) = 9𝑘+ 11𝑘+ 13𝑘= 33𝑘= 33/49 
  Case (iii) 
  𝑝(𝑥≤2) ≥0.3 ⟹𝑝(0) + 𝑝(1) + 𝑝(2) ≥0.3 
  ⟹𝑘+ 3𝑘+ 5𝑘≥0.3 ⟹9𝑘≥0.3 ⟹𝑘≥1/30 
  
Therefore, minimum value of 𝑘 is 1/30. 
 
 
 
 
 
 
 
 
 
 
 
 
 
x 
  0  1  2  3  4  5  6 
p(x) 
k  3k  5k  7k  9k  11k  13k 

 
 
 
 
 
 
 
 
 
 
4. The probability distribution of a finite random variable is given by  
 
 
 
(i) Determine the value of k and find the mean and standard deviation. 
(ii) Find  𝒑(𝒙< 𝟏), 𝒑(−𝟏< 𝒙≤𝟐) 𝒂𝒏𝒅 𝒑(𝒙> −𝟏) 
Case (i) 
Since it is a probability distribution, 
Σ𝑝(𝑥𝑖) = 1 ⟹4𝑘+ 0.6 = 1 ⟹𝑘= 0.1  
𝐸(𝑥𝑖)  = Σ𝑥𝑖𝑝(𝑥𝑖) = (−2)0.1 + (−1)𝑘+ (0)0.2 + (1)2𝑘+ (2)0.3 + (3)𝑘 
  = 4𝑘+ 0.4 = 0.8 
𝐸(𝑥𝑖
2) = Σ𝑥𝑖
2𝑝(𝑥𝑖) = (−2)20.1 + (−1)2𝑘+ (0)20.2 + (1)22𝑘+ (2)20.3 + (3)2𝑘 
  = 12𝑘+ 1.6 = 2.8  
 
Mean = 𝐸(𝑥𝑖) = 0.8 
Variance = 𝐸(𝑥𝑖
2) −[𝐸(𝑥𝑖)]2 = 2.8 −0.64 = 2.16 
Standard deviation = √2.16 = 1.4697 
 
Case (ii) 
𝑝(𝑥< 1) = 𝑝(−2) + 𝑝(−1) + 𝑝(0) = 0.1 + 𝑘+ 0.2 = 0.4 
𝑝(−1 < 𝑥≤2) = 𝑝(0) + 𝑝(1) + 𝑝(2) = 0.2 + 2𝑘+ 0.3 = 2𝑘+ 0.5 = 0.7 
𝑝(𝑥> −1) = 𝑝(0) + 𝑝(1) + 𝑝(2) + 𝑝(3) = 0.2 + 2𝑘+ 0.3 + 𝑘= 3𝑘+ 0.5 = 0.8 
  
 
 
 
 
 
 
 
 
𝒙𝒊 
  -2  -1  0  1  2  3  
p(𝒙𝒊) 
0.1  k  0.2  2k  0.3  k  

 
 
 
 
 
 
 
 
 
 
5. A random variable X has the following probability function: 
 
 
 
(i) Find the value of 𝒌. (ii) Evaluate 𝑷(𝑿< 𝟔), 𝑷(𝒙≥𝟔)  (iii) 𝑷(𝟎< 𝒙< 𝟓). 
Case (i) 
Since it is a probability distribution, 
Σ𝑝(𝑥𝑖) = 1 ⟹0 + 𝑘+ 2𝑘+ 2𝑘+ 3𝑘+ 𝑘2 + 2𝑘2 + 7𝑘2 + 𝑘= 1 
  ⟹10𝑘2 + 9𝑘−1 = 0  
 ⟹𝑘= 0.1 (The other value is more than 1) 
Case (ii) 
𝑝(𝑥< 6) = 𝑝(0) + 𝑝(1) + 𝑝(2) + 𝑝(3) + 𝑝(4) + 𝑝(5) 
  = 0 + 𝑘+ 2𝑘+ 2𝑘+ 3𝑘+ 𝑘2 = 𝑘2 + 8𝑘= 0.81 (∵𝑘= 0.1) 
𝑝(𝑥≥6) = 𝑝(6) + 𝑝(7) = 2𝑘2 + 7𝑘2 + 𝑘= 0.19 
Case (iii) 
𝑝(0 < 𝑥< 5) = 𝑝(0) + 𝑝(1) + 𝑝(2) + 𝑝(3) + 𝑝(4) = 0 + 𝑘+ 2𝑘+ 2𝑘+ 3𝑘= 8𝑘
= 0.8 
6. A fair coin is tossed 3 times. Let X denote the number of heads showing up. Find the 
distribution of X.  Also find its mean, variance and SD. 
By data, 𝑆= {𝐻𝐻𝐻, 𝐻𝐻𝑇, 𝐻𝑇𝐻, 𝐻𝑇𝑇, 𝑇𝐻𝐻, 𝑇𝐻𝑇, 𝑇𝑇𝐻, 𝑇𝑇𝑇} 
𝑥= Number of heads= {0, 1, 2, 3} 
 
The probability distribution is 
 
𝐸(𝑥) = Σx𝑝(𝑥) = (0) 1
8 + (1) 3
8 + (2) 3
8 + (3) 1
8 = 3/2 
𝐸(𝑥2) = Σx2𝑝(𝑥) = (0)2 1
8 + (1)2 3
8 + (2)2 3
8 + (3)2 1
8 = 3 
Mean = 𝐸(𝑥) =
Variance = 𝐸(𝑥2) −[𝐸(𝑥)]2 = 3 −
4 = 3/4 
Standard deviation = √𝑉𝑎𝑟= √3/4 
𝒙𝒊 
  0  1  2  3  4  5  6  7  
P(𝒙𝒊) 
  0  𝒌  𝟐𝒌  𝟐𝒌  𝟑𝒌  𝒌𝟐  𝟐𝒌𝟐  𝟕𝒌𝟐+ 𝒌 
𝑥 
𝑝(𝑥) 1/8 
3/8 
3/8 
1/8 

 
 
 
 
 
 
 
 
 
 
7. A random variable x has the density function 𝑷(𝑿) = {𝒌𝒙𝟐,  𝒙= 𝟎, 𝟏, 𝟐, 𝟑
𝟎,  𝒆𝒍𝒔𝒆𝒘𝒉𝒆𝒓𝒆 evaluate k. 
Also find 𝑷(𝑿≤𝟏), 𝑷(𝟏≤𝒙≤𝟐), 𝑷(𝑿> 𝟏) 𝒂𝒏𝒅 𝑷(𝑿> 𝟐) 
By data, 
 
 
Since 𝑝(𝑥) is a probability density function, 
Σ𝑝(𝑥) = 1 ⟹𝑘+ 4𝑘+ 9𝑘= 1 ⟹𝑘= 1/14 
𝑝(𝑥≤1) = 𝑝(0) + 𝑝(1) = 0 + 𝑘= 1/14 
𝑝(1 ≤𝑥≤2) = 𝑝(1) + 𝑝(2) = 𝑘+ 4𝑘= 5𝑘= 5/14 
𝑝(𝑥> 1) = 𝑝(2) + 𝑝(3) = 4𝑘+ 9𝑘= 13𝑘= 13/14 
 𝑝(𝑥> 2) = 𝑝(3) = 9𝑘= 9/14 
8. A box contains 12 items of which 4 are defectives. A sample of 3 items is selected from 
the box. Let X denote the number of defective items in the sample. Find the 
probability distribution of X. Determine the mean and Standard deviation. 
𝑥= Number of defectives= {0, 1, 2, 3} 
𝑃(0) = 8𝐶3
12𝐶3
= 14
55 ,
𝑃(1) = 4𝐶1 × 8𝐶2
12𝐶3
= 28
  𝑃(2) = 4𝐶2 × 8𝐶1
12𝐶3
= 12
55 , 𝑃(3) = 4𝐶3
12𝐶3
= 1
Probability distribution is  
 
 
 
𝐸(𝑥) = 0𝑝(0) + 1𝑝(1) + 2𝑝(2) + 3𝑝(3) 
= 0 (14
55) + 1 (28
55) + 2 (12
55) + 3 ( 1
55) = 1 
 𝐸(𝑥2) = 02𝑝(0) + 12𝑝(1) + 22𝑝(2) + 32𝑝(3) 
= 0 (14
55) + 1 (28
55) + 4 (12
55) + 9 ( 1
55) = 17
 𝑀𝑒𝑎𝑛= 𝐸(𝑥) = 1  
𝑉𝑎𝑟𝑖𝑎𝑛𝑐𝑒= 𝐸(𝑥2) −[𝐸(𝑥)]2 =
11 −1 =
11 .  
 
𝑥 
𝑝(𝑥) 
𝑘 
4𝑘 
9𝑘 
𝑥 
𝑝(𝑥) 14/55 28/55 12/55 1/55 

 
 
 
 
 
 
 
 
 
 
Home work: 
9. A die is tossed thrice. A success is getting 1 or 6 on a toss. Find mean and variance of the 
number of successes. 
10. Four coins are tossed. Find the expectation of the number of heads. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
1.2 Binomial distribution  
Introduction: 
❖ 𝑝 is the probability of success and 𝑞 is the probability of failure. 
 
❖  𝑞= 1 −𝑝 (𝑜𝑟) 𝑝+ 𝑞= 1. 
 
❖ 𝑛𝐶0𝑝0𝑞𝑛+ 𝑛𝐶1𝑝1𝑞𝑛−1 + 𝑛𝐶2𝑝2𝑞𝑛−2 + ⋯+ 𝑛𝐶𝑛𝑝𝑛𝑞0 = ∑𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥 = (𝑝+ 𝑞)𝑛= 1 
 
❖ The probability density function is said to follow binomial distribution if 𝑃(𝑥) satisfies the 
condition  𝑷(𝒙) = 𝒏𝑪𝒙𝒑𝒙𝒒𝒏−𝒙. Where 𝑝 is the probability of success and 𝑞= 1 −𝑝 is the 
probability of failure. 
 
❖ The binomial distribution with 4 Bernoullian trials is given by 
𝑥𝑖 
𝑃(𝑥𝑖) 
4𝐶0𝑝0𝑞4−0 
4𝐶1𝑝1𝑞4−1 
4𝐶2𝑝2𝑞4−2 
4𝐶3𝑝3𝑞4−3 
4𝐶4𝑝4𝑞4−4 
 
 
❖  
 
❖  
 
 
 
 
 
 
 
 
 
 
 
x is at least 2  x is at most 2  
𝑥≥2 
𝑥≤2 
Mean (𝜇) Variance (𝜎2) Standard deviation (𝜎) 
𝑛𝑝 
𝑛𝑝𝑞 
√𝑛𝑝𝑞 

 
 
 
 
 
 
 
 
 
 
1. Find mean and standard deviation of Binomial distribution. 
Mean= ∑𝑥𝑃(𝑥) 
 = ∑𝑥(𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥) 
 = ∑𝑥(
𝑛!
𝑥!(𝑛−𝑥)! 𝑝𝑥𝑞𝑛−𝑥) 
 = 𝑛𝑝∑𝑥(
(𝑛 −1)!
(𝑥−1)!(𝑛−𝑥)! 𝑝𝑥−1𝑞𝑛−𝑥) 
 = 𝑛𝑝∑(𝑛−1)𝐶𝑥−1𝑝𝑥−1𝑞𝑛−𝑥 
 = 𝑛𝑝 (𝑝+ 𝑞)𝑛−1 
 = 𝑛𝑝 
Variance = 𝐸(𝑥2) −[𝐸(𝑥)]2 
 = 𝐸(𝑥2 −𝑥+ 𝑥) −[𝐸(𝑥)]2 
 = 𝐸[𝑥(𝑥−1) + 𝑥] −[𝐸(𝑥)]2 
 = 𝐸(𝑥(𝑥−1)) + 𝐸(𝑥) −[𝐸(𝑥)]2 
 = ∑𝑥(𝑥−1)(𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥) + 𝑛𝑝−(𝑛𝑝)2 
 = ∑𝑥(𝑥−1) (
𝑛!
𝑥!(𝑛−𝑥)!𝑝𝑥𝑞𝑛−𝑥) + 𝑛𝑝−𝑛2𝑝2 
 = 𝑛(𝑛−1)𝑝2 ∑(
(𝑛−2)!
(𝑥−2)!(𝑛−𝑥)! 𝑝𝑥−2𝑞𝑛−𝑥) + 𝑛𝑝−𝑛2𝑝2 
 = 𝑛(𝑛−1)𝑝2 ∑(
𝑚!
𝑟!(𝑚−𝑟)!𝑝𝑟𝑞𝑚−𝑟) + 𝑛𝑝−𝑛2𝑝2 
 = (𝑛2 −𝑛)𝑝2 ∑(𝑚𝐶𝑟𝑝𝑟𝑞𝑚−𝑟) + 𝑛𝑝−𝑛2𝑝2 
 = (𝑛2 −𝑛)𝑝2(𝑝+ 𝑞)𝑚+ 𝑛𝑝−𝑛2𝑝2 
 = (𝑛2 −𝑛)𝑝2 + 𝑛𝑝−𝑛2𝑝2 
 = 𝑛2𝑝2 −𝑛𝑝2 + 𝑛𝑝−𝑛2𝑝2 
 = −𝑛𝑝2 + 𝑛𝑝 
 = 𝑛𝑝(1 −𝑝) 
 = 𝑛𝑝𝑞 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
2. Determine the Binomial distribution for which mean is twice the variance and the 
sum of mean and variance is 3. Also find 𝑷(𝒙≤𝟑). 
  To find: 𝒏, 𝒑, 𝒒 
By data, Mean = 2 Variance 
  𝑛𝑝 = 2𝑛𝑝𝑞 .  
By solving, 𝑞=
2 , 𝑝= 1 −
2 =
By data, 𝑀𝑒𝑎𝑛 + 𝑉𝑎𝑟𝑖𝑎𝑛𝑐𝑒= 3  
𝑛𝑝+ 𝑛𝑝𝑞= 3 
 𝑛(
2) + 𝑛(
2) (
2) = 3 
By solving, 𝑛= 4. 
Therefore, 𝑛= 4, 𝑝=
2 , 𝑞=
 To find: 𝒑(𝒙) 
It follows Binomial distribution. 
Probability function is given by  
 𝑃(𝑥) = 𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥 
  = 4𝐶𝑥(
2)
𝑥
(
2)
4−𝑥
 
  = 4𝐶𝑥(
2)
 
  =
16 × 4𝐶𝑥 
To find: 𝒑(𝒙≤𝟑) 
𝑝(𝑥≤3) = 1 −𝑝(𝑥> 3) 
= 1 −𝑝(4) 
= 1 −1
16 4𝐶4 
  =
 
 
 
  

 
 
 
 
 
 
 
 
 
 
3. Mean and standard deviation of a binomial distribution are 2 and 𝟐/√𝟑 
respectively. Find the corresponding probability density function. 
To find:  𝒏, 𝒑, 𝒒 
By data, Mean = 𝑛𝑝= 2  
  Variance = 𝑛𝑝𝑞=
3 .  
By dividing, 𝑞=
6 =
3 , 𝑝= 1 −𝑞=
3 , 𝑛=
𝑝= 6 
Therefore, 𝑛= 6, 𝑝=
3 , 𝑞=
To find:  𝒑(𝒙) 
It follows Binomial distribution. 
Probability function is given by  
 𝑝(𝑥) = 𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥= 6𝐶𝑥(
3)
𝑥
(
3)
6−𝑥
 
 
4. In 256 sets of 12 tosses of a coin, in how many cases one can expect 8 heads and 4 
tails? 
To find: 𝒏, 𝒑, 𝒒 𝒂𝒏𝒅 𝑵 
While tossing a coin, 
 𝑝= 𝑃(𝐻𝑒𝑎𝑑) =
2 , 𝑞= 𝑃(𝑡𝑎𝑖𝑙) =
By data, 𝑛= 12, 𝑁= 256.  
To find: 𝒑(𝒙) 
It follows Binomial distribution. 
Probability density function is given by 
𝑃(𝑥) = 𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥= 12𝐶𝑥(1
2)
𝑥
(1
2)
12−𝑥
= 1
212 × 12𝐶𝑥 
To find: Number of cases 
No. of cases one can expect 8 heads  = 𝑁𝑃(8) 
  
 
 
 
  = 256 (
212) (12𝐶8) 
  
  =
16 × 495 
  = 31 
 

 
 
 
 
 
 
 
 
 
 
5. A die is tossed thrice. A success is ‘𝒈𝒆𝒕𝒕𝒊𝒏𝒈 𝟏 𝒐𝒓 𝟔’ on a toss. Find the mean and 
variance of the number of successes. 
To find: 𝒏, 𝒑, 𝒒 
𝑛= 3 
𝑝= 𝑃(𝑔𝑒𝑡𝑡𝑖𝑛𝑔 1 𝑜𝑟 6) = 2
6 = 1
𝑞= 1 −𝑝= 1 −1
3 = 2
 To find: Mean, Variance 
It follows Binomial distribution. 
Mean = 𝑛𝑝= 3 (
3) = 1 
Variance = 𝑛𝑝𝑞= 3 (
3) (
3) =
 
6. A die is thrown 5 times. If getting an odd number is a success, find the probability of 
getting at least 4 successes. 
 To find: 𝒏, 𝒑, 𝒒 
𝑛= 5 
𝑝= 𝑃(𝑔𝑒𝑡𝑡𝑖𝑛𝑔 𝑜𝑑𝑑 𝑛𝑢𝑚𝑏𝑒𝑟) =
6 =
  𝑞= 1 −
2 =
To find: 𝑷(𝒙) 
It follows Binomial distribution. 
Probability function is given by 
𝑃(𝑥) = 𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥= 5𝐶𝑥(1
2)
𝑥
(1
2)
5−𝑥
= 1
25 × 5𝐶𝑥 
To find: P (at least 4 successes) 
P(at least 4 successes)  = 𝑃(𝑥≥4) 
= 𝑃(4) + 𝑃(5) 
= 1
25 × 5𝐶4 + 1
25 × 5𝐶5 
= 1
32 (5 + 1) = 6
32 = 3
 

 
 
 
 
 
 
 
 
 
 
7. If the probability that a new-born child is a male is 0.6, find the probability that in a 
family of 5 children there are exactly 3 boys. 
To find: 𝒏, 𝒑, 𝒒 
By data, 𝑛= 5 
𝑝= 𝑃(𝑚𝑎𝑙𝑒 𝑐ℎ𝑖𝑙𝑑) = 0.6  
  𝑞= 1 −0.6 = 0.4 
To find: 𝑷(𝒙) 
It follows Binomial distribution. 
Probability function is given by 
𝑃(𝑥) = 𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥= 5𝐶𝑥(0.6)𝑥(0.4)5−𝑥 
 
To find: P (exactly 3 boys) 
P(exactly 3 boys)  = 𝑃(3) 
= 5𝐶3(0.6)3(0.4)5−3 
= 0.3456 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
8. The probability that a pen manufactured by a company will be defective is 0.1. If 12 
such pens are selected, find the probability that (i) exactly 2 will be defective (ii) at 
least 2 will be defective (iii) none will be defective.  
To find: 𝒏, 𝒑, 𝒒 
By data, 𝑛= 12 
𝑝= 𝑃(𝑑𝑒𝑓𝑒𝑐𝑡𝑖𝑣𝑒 𝑝𝑒𝑛) = 0.1  
𝑞= 1 −0.1 = 0.9 
To find: 𝒑(𝒙) 
It follows Binomial distribution. 
Probability density function is given by 
𝑃(𝑥) = 𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥= 12𝐶𝑥(0.1)𝑥(0.9)12−𝑥 
 
To find: Required probabilities 
(i) 
P(exactly 2 defectives)  = 𝑃(2) 
  = 12𝐶2(0.1)2(0.9)12−2 
  = 0.2301 
(ii) 
P(at least 2 defectives)  = 𝑃(𝑥≥2) 
  = 1 −𝑃(𝑥< 2) 
  = 1 −[𝑃(0) + 𝑃(1)] 
= 1 −[12𝐶0(0.1)0(0.9)12−0 + 12𝐶1(0.1)1(0.9)12−1] 
= 1 −0.911(0.9 + 1.2) 
= 0.3410 
(iii) 
P(none will be defective)  = 𝑃(0) 
= 12𝐶0(0.1)0(0.9)12 
= 0.2825 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
9. The number of telephone lines busy at an instant of time is a binomial variate with 
probability 0.2. If at an instant 10 lines are chosen at random, what is the 
probability that (i) no line is busy? (ii) 5 lines are busy? (iii) at least one line is busy? 
(iv) at most 2 lines are busy? (v) all lines are busy? 
By data,  𝑛= 10, 𝑝= 0.2, 𝑞= 0.8  
It follows Binomial distribution. 
 Probability function is given by  
𝑃(𝑥) = 𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥= 10𝐶𝑥(0.2)𝑥(0.8)10−𝑥 
(i) P (No line is busy) 
= 𝑃(0)  
= 10𝐶0(0.2)0(0.8)10−0  
= 0.1074 
(ii) P(5 lines are busy)  
 = 𝑃(5) 
 = 10𝐶5(0.2)5(0.8)10−5 
 = 0.0264  
(iii) P ( At least one line is busy) = 𝑃(𝑋≥1)  
= 1 −𝑃(𝑋< 1) 
= 1 −𝑃(0) 
= 1 −0.1074 = 0.8926 
(iv) P (At most two lines are busy) 
 = 𝑃(𝑥≤2) 
= 𝑃(0) + 𝑃(1) + 𝑃(2) 
= 10𝐶0(0.2)0(0.8)10 + 10𝐶1(0.2)1(0.8)9 + 10𝐶2(0.2)2(0.8)8 
= (0.8)8[0.64 + 1.6 + 1.80] 
= 0.6778 
(v) P (All lines are busy) 
 = 𝑃(10) 
= 10𝐶10(0.2)10(0.8)0 
= (0.2)10 
 

 
 
 
 
 
 
 
 
 
 
10. In a large number of parts manufactured by a machine, the mean number of 
defectives in a sample of 20 is 2. Out of 1000 such samples, how many would be 
expected to contain at least 3 defective parts?  
Hint: 𝑃(𝑥) = 20𝐶𝑥(0.1)𝑥(0.9)20−𝑥,𝑓(𝑥≥3) = 1000 × 𝑃(𝑥≥3) = 566 
Solution:  
To find: 𝒏, 𝒑, 𝒒 
By data,  𝑛= 20, 𝑥̅ = 𝑛𝑝= 2  
𝑝= 2
𝑛= 2
20 = 0.1 
𝑞= 1 −𝑝= 1 −0.1 = 0.9 
To find: 𝑷(𝒙) 
It follows Binomial distribution. 
Probability function is given by  
𝑝(𝑥) = 𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥= 20𝐶𝑥(0.1)𝑥(0.9)20−𝑥 
To find: No. of samples  
No. of samples containing at least 3 defective parts 
= 𝑁× 𝑃(𝑥) 
= 1000 × 𝑃(𝑥≥3) 
= 1000 × [1 −𝑃(𝑥< 3)] 
= 1000 × [1 −[𝑃(0) + 𝑃(1) + 𝑃(2)]] 
= 1000 × [1 −(20𝐶0(0.1)0(0.9)20−0 
  +20𝐶1(0.1)1(0.9)20−1 + 20𝐶2(0.1)2(0.9)20−2)] 
= 1000 × [1 −0.918(0.81 + 1.8 + 1.9)] 
= 1000 × [1 −0.1501(4.51)] 
= 1000 × 0.3231 ≅323 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
11. Fit a binomial distribution to the following data: 
𝒙𝒊 
  0  1  2  3  4  5 
𝒇(𝒙𝒊) 
  2  14  20  34  22  8 
 
Solution: 
Find: 𝒏, 𝑵, 𝒑, 𝒒 
𝑛= 5 𝑎𝑛𝑑 𝑁= Σ𝑓(𝑥𝑖) = 100 
𝑥̅ = Σ𝑥𝑖𝑓(𝑥𝑖)
𝑁
 
  =
0(2)+1(14)+2(20)+3(34)+4(22)+5(8)
 
  = 2.84 
For a Binomial distribution, 𝑥̅ = 𝑛𝑝 
Put 𝑛= 5, 𝑥̅ = 2.84  
we get 𝑝= 0.5680 and 𝑞= 1 −𝑝= 0.4320 
Therefore, 𝑛= 5, 𝑁= 100, 𝑝= 0.5680, 𝑞= 0.4320 
Find: 𝒇(𝒙) 
Probability density function is given by 
𝑃(𝑥) = 𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥 
= 5𝐶𝑥(0.568)𝑥(0.432)5−𝑥 
Therefore, 
𝑓(𝑥) = 𝑁× 𝑃(𝑥) 
= 100 × 5𝐶𝑥(0.568)𝑥(0.432)5−𝑥 
 
Fitting Binomial distribution 
Theoretical frequencies are 
𝑓(0) = 100 × 5𝐶0(0.568)0(0.432)5−0 ≅2 
𝑓(1) = 100 × 5𝐶1(0.568)1(0.432)5−1 ≅10 
𝑓(2) = 100 × 5𝐶2(0.568)2(0.432)5−2 ≅26 
𝑓(3) = 100 × 5𝐶3(0.568)3(0.432)5−3 ≅34 
𝑓(4) = 100 × 5𝐶4(0.568)4(0.432)5−4 ≅22 
𝑓(5) = 100 × 5𝐶5(0.568)5(0.432)5−5 ≅6  

 
 
 
 
 
 
 
 
 
 
12.  Fit a binomial distribution to the following data:  
𝒙𝒊 
  0  1  2  3  
𝒇(𝒙𝒊) 
  28  62  10  4  
 
To find: 𝒏, 𝒑, 𝒒 
𝑛= 3 𝑎𝑛𝑑 𝑁= Σ𝑓(𝑥𝑖) = 104 
𝑥̅ = Σ𝑥𝑖𝑓(𝑥𝑖)
𝑁
 
  =
0(28)+1(62)+2(10)+3(4)
 
  = 0.9038 
For a Binomial distribution, 𝑥̅ = 𝑛𝑝 
Put 𝑛= 3, 𝑥̅ = 0.9038  
we get 𝑝= 0.3 and 𝑞= 1 −𝑝= 0.7 
To find: 𝒇(𝒙) 
Probability density function is given by 
𝑃(𝑥) = 𝑛𝐶𝑥𝑝𝑥𝑞𝑛−𝑥 
= 3𝐶𝑥(0.3)𝑥(0.7)3−𝑥 
Therefore, 
𝑓(𝑥) = 𝑁× 𝑃(𝑥) 
= 104 × 3𝐶𝑥(0.568)𝑥(0.7)3−𝑥 
 
Fitting Binomial distribution 
Theoretical frequencies are 
𝑓(0) = 104 × 3𝐶0(0.3)0(0.7)3−0 ≅36 
𝑓(1) = 104 × 3𝐶1(0.3)1(0.7)3−1 ≅46 
𝑓(2) = 104 × 3𝐶2(0.3)2(0.7)3−2 ≅19 
𝑓(3) = 104 × 3𝐶3(0.3)3(0.7)3−3 ≅3 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
1.3 Poisson distribution 
Introduction: 
❖ A probability distribution which satisfies the probability density function 
 
𝑃(𝑥) = 𝑒−𝑚𝑚𝑥
𝑥! is called Poisson distribution. 
❖ Poisson distribution is a limiting form of binomial distribution. 
That means, Binomial distribution becomes Poisson distribution 
If 𝑛→∞, 𝑝→0, 𝑛𝑝= 𝑚. 
❖ Mean = Variance = m.  
❖ ∑
𝑚𝑥
𝑥!
∞
𝑥=0
= ∑
𝑚𝑥−1
(𝑥−1)!
∞
𝑥=1
= ∑
𝑚𝑥−2
(𝑥−2)!
∞
𝑥=2
= 𝑒𝑚 
Problems: 
1. Find the mean and Standard deviation of Poisson distribution. 
𝑀𝑒𝑎𝑛= 𝐸(𝑥) 
  = ∑𝑥𝑝(𝑥)  
  = ∑𝑥
𝑚𝑥𝑒−𝑚
𝑥!
  
  = 𝑚𝑒−𝑚∑𝑚𝑥−1
(𝑥−1)!  
  = 𝑚𝑒−𝑚(1 +
𝑚1
1! +
𝑚2
2! + ⋯)𝑒𝑚  
  = 𝑚𝑒−𝑚𝑒𝑚  
  = 𝑚.  
𝑉𝑎𝑟𝑖𝑎𝑛𝑐𝑒= 𝐸(𝑥2) −[𝐸(𝑥)]2  
  = 𝐸[𝑥(𝑥−1) + 𝑥] −[𝐸(𝑥)]2  
  = 𝐸[𝑥(𝑥−1)] + 𝐸(𝑥) −[𝐸(𝑥)]2  
  = ∑[𝑥(𝑥−1)]𝑝(𝑥) + 𝑚−𝑚2  
  = ∑[𝑥(𝑥−1)]
𝑚𝑥𝑒−𝑚
𝑥!
+ 𝑚−𝑚2  
  = 𝑚2𝑒−𝑚∑𝑚𝑥−2
(𝑥−2)! + 𝑚−𝑚2  
  = 𝑚2𝑒−𝑚 (1 +
𝑚1
1! +
𝑚2
2! + ⋯) + 𝑚−𝑚2  
  = 𝑚2𝑒−𝑚 𝑒𝑚+ 𝑚−𝑚2  
  = 𝑚2 + 𝑚−𝑚2  
  = 𝑚.  
 

 
 
 
 
 
 
 
 
 
 
2. The probabilities of a Poisson variate taking the values 3 and 4 are equal. Calculate 
the probabilities of the variate taking the values 0 and 1. Also find the mean and 
variance of the Poisson distribution.  
To find 𝒑(𝒙): 
It follows Poisson distribution. 
Probability density function is 
𝒑(𝒙) = 𝒆−𝒎𝒎𝒙
𝒙!  
By data,  𝑝(3) = 𝑝(4)  
𝑚3𝑒−𝑚
3!
=
𝑚4𝑒−𝑚
4!
  
⇒𝑚= 4.  
Therefore, 𝒑(𝒙) = 𝒆−𝟒𝟒𝒙
𝒙!  
 
(i) 𝑝(0) =
40𝑒−4
0!
= 0.0183  
(ii)  𝑝(1) =
41𝑒−4
1!
= 0.0733  
(iii) Mean=Variance= 𝑚= 4.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
3. X is a Poisson variate and it is found that the probability that 𝒙= 𝟐 is two third of 
the probability that 𝒙= 𝟏. Find the probability that 𝒙= 𝟎 and the probability that 
𝒙= 𝟏. What is the probability that 𝒙 exceeds 3?  
  
To find: 𝒎, 𝒑(𝒙) 
It follows Poisson distribution. 
Probability density function is 
𝑝(𝑥) = 𝑒−𝑚𝑚𝑥
𝑥! 
By data,  𝑝(2) =
3 𝑝(1)  
𝑚2𝑒−𝑚
2!
=
3 ×
𝑚1𝑒−𝑚
1!
  
𝑚=
Therefore, 𝑝(𝑥) = 𝑒−4
(4
3)
𝑥
𝑥!  
To find: 𝒑(𝟎), 𝒑(𝟏), 𝒑(𝒙> 𝟑) 
(i) 𝑝(0) = 𝑒−4
(4
3)
0! = 0.2636  
(ii) 𝑝(1) = 𝑒−4
(4
3)
1! = 0.3515 
(iii) 𝑝(𝑥> 3) 
  = 1 −𝑝(𝑥≤3) 
  = 1 −[𝑝(0) + 𝑝(1) + 𝑝(2) + 𝑝(3)] 
  = 1 −𝑒−4
3 [
(4
3)
0! +
(4
3)
1! +
(4
3)
2! +
(4
3)
3! ] 
  = 0.1506  
 
 
4. 2% of the fuses manufactured by a firm are found to be defective. Find the 
probability that the box containing 200 fuses contains (i) no defective fuse (ii) 3 or 
more defective fuses.  
To Find: 𝒎, 𝒑(𝒙) 
By data, 𝑛= 200, 𝑝= 0.02 
It follows Poisson distribution. 
Probability density function is 
𝑝(𝑥) = 𝑒−𝑚𝑚𝑥
𝑥! 
𝑚= 𝑚𝑒𝑎𝑛= 𝑛𝑝= 4  
 𝑃(𝑥) = 𝑒−4 (4)𝑥
𝑥! 
  
(i)  𝑝(𝑛𝑜 𝑑𝑒𝑓𝑒𝑐𝑡𝑖𝑣𝑒 𝑓𝑢𝑠𝑒) 
  = 𝑒−4 (4)0
0! = 0.0183  
(ii) 𝑝(3 𝑜𝑟 𝑚𝑜𝑟𝑒 𝑑𝑒𝑓𝑒𝑐𝑡𝑖𝑣𝑒 𝑓𝑢𝑠𝑒𝑠) 
 = 𝑝(𝑥≥3) 
= 1 −𝑝(𝑥< 3)  
= 1 −[𝑝(0) + 𝑝(1) + 𝑝(2)]  
= 1 −𝑒−4 [
(4)0
0! +
(4)1
1! +
(4)2
2! ]  
= 0.7619 
  
  

 
 
 
 
 
 
 
 
 
 
5. A certain screw manufacturing machine produces on an average of 2 defective 
screws out of 100 and packs them in boxes of 500. Find the probability that a box 
contains (i) 3 defective (ii) at least one defective (iii) 15 defective screws.  
To find: 𝒎, 𝒑(𝒙) 
By data, 𝑛= 500, 𝑝= 2/100 
It follows Poisson distribution. 
Probability density function is 
𝑝(𝑥) = 𝑒−𝑚𝑚𝑥
𝑥! 
 𝑚= 𝑚𝑒𝑎𝑛= 𝑛𝑝= 10  
𝑝(𝑥) = 𝑒−10 (10)𝑥
𝑥!  
(i) 𝑝(box contains 3 defective screws) 
  = 𝑒−10 (10)3
3! 
  = 0.00757  
 
(ii) 𝑝(box contains at least 1 defective) 
 = 𝑝(𝑥≥1) 
 = 1 −𝑝(𝑥< 1) 
 = 1 −𝑝(0) 
 = 1 −𝑒−10 
 = 1 
(iii) 𝑝(box contains 15 defective screws) 
 = 𝑝(15) 
 = 𝑒−10 (10)15
15! 
 = 0.0347 
 
6. If the probability of a bad reaction from a certain injection is 0.001. Determine the 
chance that out of 2000 individuals more than 2 will get a bad reaction.  
To find: 𝒎, 𝒑(𝒙) 
By data, 𝑛= 2000, 𝑝= 0.001 
It follows Poisson distribution. 
Probability density function is 
𝑝(𝑥) = 𝑒−𝑚𝑚𝑥
𝑥! 
 𝑚= 𝑚𝑒𝑎𝑛= 𝑛𝑝= 2  
Therefore, 𝑝(𝑥) = 𝑒−2 (2)𝑥
𝑥!  
 
𝑝(more than 2 will get a bad reaction) 
 = 𝑝(𝑥> 2) 
 = 1 −𝑝(𝑥≤2) 
 = 1 −[𝑝(0) + 𝑝(1) + 𝑝(2)] 
 = 1 −𝑒−2 [
(2)0
0! +
(2)1
1! +
(2)2
2! ] 
 = 1 −0.6767 
 = 0.3233  
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
7. In a certain factory turning out razor blades there is a small probability of 1/500 for 
any blade to be defective. The blades are supplied in packets of 10. Use Poisson 
distribution to calculate the approximate number of packets containing (i) no 
defective, (ii) one defective, and (iii) two defective blades in a consignment of 10000 
packets. 
To find: 𝒎, 𝒑(𝒙) 
By data, 
 𝑛= 10, 𝑝= 0.002 and 𝑁= 10000. 
 𝑚= 𝑚𝑒𝑎𝑛= 𝑛𝑝= 0.02  
Since 𝑝 is too small, 
It follows Poisson distribution. 
Probability density function is 
𝑝(𝑥) = 𝑒−𝑚𝑚𝑥
𝑥! 
Put  𝑚= 𝑚𝑒𝑎𝑛= 𝑛𝑝= 0.02  
Therefore, 𝑝(𝑥) = 𝑒−0.02 (0.02)𝑥
𝑥!
  
(i) Number of packets containing  
  no defectives = 𝑁× 𝑝(0) 
 = 10000 × 𝑒−0.02 (0.02)0
0!
 
= 9802  
(ii) Number of packets containing  
  one defective= 𝑁× 𝑝(1) 
  = 10000 × 𝑒−0.02 (0.02)1
1!
 
  
  = 196  
(iii) Number of packets containing  
  two defectives = 𝑁× 𝑝(2) 
 = 10000 × 𝑒−0.02 (0.02)2
2!
 
  = 2  
  
8. Alpha particles are emitted by a radioactive source at an average rate of 5 in a 20 
minutes’ interval. Using Poisson distribution, find the probability that there will 
be (i) exactly two emissions, and (ii) at least two emissions, in a randomly chosen 
20 minutes’ interval. 
To find: 𝒎, 𝒑(𝒙) 
It follows Poisson distribution. 
Probability density function is 
𝑝(𝑥) = 𝑒−𝑚𝑚𝑥
𝑥! 
By data, 𝑚=average rate= 5 
Therefore, 𝑝(𝑥) = 𝑒−5 5𝑥
𝑥!  
(i) 𝑝(exactly two emissions) 
  = 𝑝(2) = 𝑒−5 52
2! = 0.0842 
(ii) 𝑝(at least two emissions ) 
  = 𝑝(𝑥≥2) = 1 −𝑝(𝑥< 2) 
  = 1 −{𝑝(0) + 𝑝(1)} 
  = 1 −{𝑒−5 + 5𝑒−5} = 0.9596. 
 

 
 
 
 
 
 
 
 
 
 
9. A car hire firm has two cars which it hire out day by day. The number of demand for 
a car on each day is distributed as a Poisson distribution with mean 1.5, Calculate the 
proportion of days (i) on which there is no demand (ii) On which demand is refused.  
To find: 𝒑(𝒙) 
It follows Poisson distribution. 
Probability function is 
𝑝(𝑥) = 𝑒−𝑚𝑚𝑥
𝑥! 
By data, 𝑚= 1.5 
Therefore, 𝑝(𝑥) = 𝑒−1.5 (1.5)𝑥
𝑥!  
  (i) 𝑃(No demands)= 𝑝(0) 
  = 𝑒−1.5 (1.5)0
0!
= 0.2231  
(ii) 𝑝(demand is refused)  
 = 𝑝(𝑥> 2) 
 = 1 −𝑝(𝑥≤2) 
 = 1 −[𝑝(0) + 𝑝(1) + 𝑝(2)]  
 = 1 −𝑒−1.5 [
(1.5)0
0!
+
(1.5)1
1!
+
(1.5)2
2! ]  
 = 0.1912  
 
  
10. The probability that a news reader commits no mistake in reading the news is 𝟏/𝒆𝟑. 
Find the probability that on a particular news broadcast he commits (i) Only 2 
mistakes (ii) More than 3 mistakes  (iii) At most 3 mistakes.  
  
To find: 𝒑(𝒙) 
By data, 𝑝(0) = 𝑒−3 ------(1) 
It follows Poisson distribution. 
Probability function is 
𝑝(𝑥) = 𝑒−𝑚𝑚𝑥
𝑥! 
𝑝(0) = 𝑒−𝑚𝑚0
0! = 𝑒−𝑚-----(2)  
Equating (1) and (2), 
𝑚= 3  
Therefore, 𝑝(𝑥) = 𝑒−3 3𝑥
𝑥! 
 
(i) 𝑝(Only 2 mistakes) 
 = 𝑝(2) = 𝑒−3 32
2! = 0.2240  
(ii) 𝑝( More than 3 mistakes) 
 = 𝑝(𝑥> 3) 
 = 1 −𝑝(𝑥≤3) 
 = 1 −[𝑝(0) + 𝑝(1) + 𝑝(2) + 𝑝(3)]  
 = 1 −𝑒−3 [
0! +
1! +
2! +
3!]  
 = 0.3527  
(iii) 𝑝( at most 3 mistakes)  
  = 𝑝(𝑥≤3) 
= 𝑝(0) + 𝑝(1) + 𝑝(2) + 𝑝(3)  
= 𝑒−3 [
0! +
1! +
2! +
3!] = 0.6472  
  

 
 
 
 
 
 
 
 
 
 
11. Fit a Poisson distribution for the data 
𝒙:  0  1  2  3  4 
𝒇:  46  38  22  9  1  
 
To find: 𝑵, 𝒎, 𝒇(𝒙) 
Here,  𝑁= ∑𝑓𝑖= 46 + 38 + 22 + 9 + 1 = 116 
∑𝑥𝑖𝑓𝑖= (0 × 46) + (1 × 38) + (2 × 22) + (3 × 9) + (4 × 1) = 113. 
m=mean = 𝑋=
∑𝑥𝑖𝑓𝑖
𝑁
= 113
116 = 0.9741  
Probability function of a Poisson distribution is  
 𝑝(𝑥) =
𝑒−𝑚𝑚𝑥
𝑥!
=
𝑒−0.9741 0.9741 𝑥
𝑥!
 
 
𝑓(𝑥) = 𝑁× 𝑝(𝑥) = 116 × 𝑒−0.9741 0.9741 𝑥
𝑥!
 
 
Fitting Poisson distribution 
 
Theoretical frequencies are 
 
𝑓(0) = 116 × 𝑝(0) = 200 × 𝑒−0.9741 = 200 × 0.6065 ≅44 
  𝑓(1) = 116 × 𝑝(1) = 200 × 𝑒−0.9741 × 0.9741 ≅43 
  𝑓(2) = 116 × 𝑝(2) = 200 × 𝑒−0.9741 ×
2 (0.9741 )2 ≅21 
  𝑓(3) = 116 × 𝑝(3) = 200 × 𝑒−0.9741 ×
3! (0.9741 )3 ≅7 
  𝑓(4) = 116 × 𝑝(4) = 200 × 𝑒−0.9741 ×
4! (0.9741 )4 ≅1 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
12. Fit a Poisson distribution to the set of observations: 
𝒙:  0  1  2  3  4 
𝒇:  122  60  15  2  1  
 
To find: 𝑵, 𝒎, 𝒇(𝒙) 
Here,  𝑁= ∑𝑓𝑖= 122 + 60 + 15 + 2 + 1 = 200, 
∑𝑥𝑖𝑓𝑖= (0 × 122) + (1 × 60) + (2 × 15) + (3 × 2) + (4 × 1) = 100. 
m = mean = 𝑋=
∑𝑥𝑖𝑓𝑖
𝑁
=
200 = 0.5 
Probability function of a Poisson distribution is  
 𝑝(𝑥) =
𝑒−𝑚𝑚𝑥
𝑥!
=
𝑒−0.50.5𝑥
𝑥!
 
 𝑓(𝑥) = 𝑁× 𝑝(𝑥) = 200 × 𝑒−0.5 (0.5)𝑥
𝑥! 
 
Fitting Poisson distribution 
 
Theoretical frequencies are 
  𝑓(0) = 200 × 𝑝(0) = 200 × 𝑒−0.5 = 200 × 0.6065 ≅121 
  𝑓(1) = 200 × 𝑝(1) = 200 × 𝑒−0.5 × 0.5 ≅61 
  𝑓(2) = 200 × 𝑝(2) = 200 × 𝑒−0.5 ×
2 (0.5)2 ≅15 
  𝑓(3) = 200 × 𝑝(3) = 200 × 𝑒−0.5 ×
3! (0.5)3 ≅3 
  𝑓(4) = 200 × 𝑝(4) = 200 × 𝑒−0.5 ×
4! (0.5)4 ≅0 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
1.4 Continuous probability distributions 
Introduction: 
❖ If a random variable takes any real value in the specified interval then it is called continuous 
random variable.  Ex: height of students in a class, length of leaves in a tree. 
❖ P(x) is the probability density function of the continuous random variable x if (i) 𝑝(𝑥) ≥0  (ii) 
∫
𝑝(𝑥) 𝑑𝑥
∞
−∞
= 1. 
❖ 𝐸(𝑥) = ∫
𝑥𝑝(𝑥) 𝑑𝑥
∞
−∞
, 𝐸(𝑥2) = ∫
𝑥2𝑝(𝑥) 𝑑𝑥
∞
−∞
 
❖ If p(x) is the probability density function of the continuous random variable x then cumulative 
distribution function 𝐹(𝑡) = 𝑝(𝑥≤𝑡) = ∫
𝑝(𝑥)𝑑𝑥
𝑡
−∞
.Then 𝐹′(𝑡) = 𝑝(𝑡) 
❖ 𝑝(𝑎≤𝑥≤𝑏) = 𝑝(𝑎≤𝑥< 𝑏) = 𝑝(𝑎< 𝑥≤𝑏) = 𝑝(𝑎< 𝑥< 𝑏) = 𝐹(𝑏) −𝐹(𝑎) 
Problems: 
1. Find the constant k so that 𝒇(𝒙) = {(
𝒙
𝟔) + 𝒌, 𝟎≤𝒙≤𝟑
𝟎,  𝒆𝒍𝒔𝒆𝒘𝒉𝒆𝒓𝒆
  is a probability density 
function. 𝐓𝐡𝐞𝐧 𝐟𝐢𝐧𝐝 𝒑(𝟏≤𝒙≤𝟐) .  
To find: 𝒌 
  1 = ∫
𝑝(𝑥) 𝑑𝑥
∞
−∞
 
= ∫𝑝(𝑥)𝑑𝑥
 
= ∫(𝑥
6 + 𝑘) 𝑑𝑥
 
= ∫(𝑥
6) 𝑑𝑥
+ 𝑘∫𝑑𝑥
 
= 9
12 + 3𝑘 
  1 −
12 = 3𝑘 
  Therefore,  𝑘=
12 =
 
 𝑝(1 ≤𝑥≤2) 
= ∫𝑝(𝑥)𝑑𝑥 
 
= ∫(𝑥
6 + 𝑘) 𝑑𝑥 
 
= ∫(𝑥
6 + 1
12) 𝑑𝑥 
 
= 1
 
  
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
2. A random variable x has the density function 𝒑(𝒙) = { 𝒌𝒙𝟐, 𝟎≤𝒙≤𝟑
𝟎,  𝒆𝒍𝒔𝒆𝒘𝒉𝒆𝒓𝒆  
Evaluate k and find 𝒑(𝒙≤𝟏), 𝒑(𝟏≤𝒙≤𝟐), 𝒑(𝒙≤𝟐)𝒂𝒏𝒅 𝒑(𝒙> 𝟏)  
To find: 𝒌 
  1 = ∫
𝑝(𝑥) 𝑑𝑥
∞
−∞
 
= ∫𝑝(𝑥)𝑑𝑥
  
= ∫𝑘𝑥2𝑑𝑥
  
 = 𝑘∫𝑥2𝑑𝑥
 
 = 9𝑘 
𝑘= 1/9.  
 
(i) 𝑃(𝑥≤1) 
= ∫
𝑝(𝑥)𝑑𝑥= 𝑘∫𝑥2𝑑𝑥= 1
9 (1
3) = 1
−∞
 
(ii) 𝑃(1 ≤𝑥≤2) 
= ∫𝑝(𝑥)𝑑𝑥= 𝑘∫𝑥2𝑑𝑥= 1
9 (7
3) = 7
 
(iii) 𝑃(𝑥≤2) 
= ∫
𝑝(𝑥)𝑑𝑥= 𝑘∫𝑥2𝑑𝑥
−∞
= 1
9 (8
3) = 8
(iv) 𝑃(𝑥> 1) 
= ∫𝑝(𝑥)𝑑𝑥= 𝑘∫𝑥2𝑑𝑥= 1
9 (26
3 ) =
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
3. The probability density function of a continuous random variable x is  
𝒑(𝒙) = {
𝒌𝒙,  𝒇𝒐𝒓 𝟎≤𝒙< 𝟐
𝟐𝒌,  𝒇𝒐𝒓 𝟐≤𝒙< 𝟒
𝟔𝒌−𝒌𝒙, 𝒇𝒐𝒓 𝟒≤𝒙≤𝟔
𝟎,  𝒆𝒍𝒔𝒆𝒘𝒉𝒆𝒓𝒆
  find k and then determine the mean of x. 
To find: 𝒌 
  By data, 1 = ∫
𝑝(𝑥)𝑑𝑥
∞
−∞
 
= ∫
𝑝(𝑥)𝑑𝑥
∞
−∞
 
= ∫𝑝(𝑥)𝑑𝑥
 
= ∫𝑘𝑥𝑑𝑥+ ∫2𝑘𝑑𝑥+ ∫(6𝑘−𝑘𝑥)𝑑𝑥
 
= 𝑘∫𝑥𝑑𝑥+ 2𝑘∫𝑑𝑥
+ 6𝑘∫𝑑𝑥
−𝑘∫𝑥𝑑𝑥
 
= 2𝑘+ 4𝑘+ 12𝑘−10𝑘 
  
Therefore,  1= 8𝑘  or  𝑘= 1/8 
 To find: Mean  
Mean = ∫
𝑥 𝑝(𝑥)𝑑𝑥
∞
−∞
  
  = ∫𝑥 𝑝(𝑥)𝑑𝑥
 
  = ∫𝑘𝑥2𝑑𝑥+ ∫2𝑘𝑥𝑑𝑥+ ∫(6𝑘−𝑘𝑥)𝑥𝑑𝑥
 
= 𝑘∫𝑥2𝑑𝑥+ 2𝑘∫𝑥𝑑𝑥+ 6𝑘∫𝑥𝑑𝑥
−k ∫𝑥2𝑑𝑥
 
  
  =
8 (
3) +
8 (6) +
8 (10) −
8 (
3 ) = 3. 
 
 

 
 
 
 
 
 
 
 
 
 
4. The frequency distribution of a measurable characteristic varying between 0 and 2 
is as 𝒇(𝒙) = { 𝒙𝟑,  𝟎≤𝒙≤𝟏
(𝟐−𝒙)𝟐, 𝟏≤𝒙≤𝟐  Calculate mean and standard deviation. 
𝐸(𝑥) = ∫
𝑥𝑓(𝑥)𝑑𝑥
∞
−∞
 
  = ∫𝑥𝑓(𝑥)𝑑𝑥
 
  = ∫𝑥4𝑑𝑥
+ ∫(4𝑥+ 𝑥3 −4𝑥2)𝑑𝑥
 
  = 0.2 + 0.4167 
  = 0.6167 
𝐸(𝑥2) = ∫
𝑥2𝑓(𝑥)𝑑𝑥
∞
−∞
 
  = ∫𝑥2𝑓(𝑥)𝑑𝑥
 
  = ∫𝑥5𝑑𝑥
+ ∫(4𝑥2 + 𝑥4 −4𝑥3)𝑑𝑥
 
  =
6 + 0.5333 
  = 0.7 
 
𝑀𝑒𝑎𝑛= 𝐸(𝑥) = 0.6167 
Standard deviation = √𝐸(𝑥2) −[𝐸(𝑥)]2 = √0.7 −0.61672 = √0.3197 = 0.5654 
5. The probability density function of a continuous random variable x is 
 𝒑(𝒙) = {𝒌𝒙(𝟏−𝒙)𝒆𝒙, 𝟎≤𝒙≤𝟏
𝟎,  𝒆𝒍𝒔𝒆𝒘𝒉𝒆𝒓𝒆  .  Find the value of k and evaluate mean and 
standard deviation of the distribution. 
1 = ∫
𝑝(𝑥)𝑑𝑥
∞
−∞
 
  = ∫𝑝(𝑥)𝑑𝑥
 
  = ∫𝑘𝑥(1 −𝑥)𝑒𝑥𝑑𝑥
 
  = 𝑘∫(𝑥−𝑥2)𝑒𝑥𝑑𝑥
 
  = 𝑘(0.2817) 
 𝑘 = 3.5496 
𝐸(𝑥) = ∫
𝑥𝑝(𝑥)𝑑𝑥
∞
−∞
 
= 𝑘∫𝑥2(1 −𝑥)𝑒𝑥𝑑𝑥
 
= 𝑘∫(𝑥2 −𝑥3)𝑒𝑥𝑑𝑥
 
= 3.5496 × 0.1549 
= 0.5496 
𝐸(𝑥2) = ∫
𝑥2𝑝(𝑥)𝑑𝑥
∞
−∞
 
= 𝑘∫𝑥2(𝑥−𝑥2)𝑒𝑥𝑑𝑥
 
= 𝑘∫(𝑥3 −𝑥4)𝑒𝑥𝑑𝑥
 
= 3.5496 × 0.0989 
= 0.3511 
 
Mean= 𝐸(𝑥) = 0.5496 
Standard deviation = √𝐸(𝑥2) −[𝐸(𝑥)]2 = √0.3511 −(0.5496)2 
= √0.04904 = 0.2214 

 
 
 
 
 
 
 
 
 
 
6. For the probability distribution given by the cumulative distribution function  
𝑭(𝒕) = {
𝟎,  𝒕> 𝟎
𝒕𝟐,  𝟎≤𝒕≤𝟏
𝟏,  𝒕> 𝟏
  Find the probability density function.  
Also evaluate (i) 𝒑(𝟎. 𝟓< 𝒙< 𝟎. 𝟕𝟓)  (ii) 𝒑(𝒙≤𝟎. 𝟓)  (iii) 𝒑(𝒙> 𝟎. 𝟕𝟓) 
Find: Probability density function 
𝐹(𝑡) = {
0,
𝑡> 0
𝑡2
0 ≤𝑡≤1
1,
𝑡> 1
 
𝑝(𝑡) = 𝐹′(𝑡) = {
0,
𝑡> 0
2𝑡,
0 ≤𝑡≤1
0,
𝑡> 1
  
 𝑝(𝑥) = {
0,
𝑥> 0
2𝑥,
0 ≤𝑥≤1
0,
𝑥> 1
 
This is the required probability density function. 
 (i)  𝑝(0.5 < 𝑥< 0.75) = 𝐹(0.75) −𝐹(0.5) = (0.75)2−(0.5)2 = 0.3125 
 (ii)  𝑝(𝑥≤0.5) = 𝐹(0.5) = (0.5)2 = 0.25 
(iv) 
𝑝(𝑥> 0.75) = 1 −𝑝(𝑥≤0.75) = 1 −𝐹(0.75) = 1 −(0.75)2 = 0.4375. 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
7. A function is defined as 𝒇(𝒙) = {
𝒌,  𝒙𝟏< 𝒙< 𝒙𝟐
 𝟎,  𝒆𝒍𝒔𝒆𝒘𝒉𝒆𝒓𝒆
 Find the cumulative 
distribution of the variate 𝒙 when 𝒌 satisfies the requirements for 𝒇(𝒙) to be a 
density function. 
1 = ∫
𝑝(𝑥)𝑑𝑥
∞
−∞
 
= ∫
𝑝(𝑥)𝑑𝑥
𝑥2
𝑥1
 
= ∫
𝑘𝑑𝑥
𝑥2
𝑥1
 
= 1
𝑘∫
𝑑𝑥
𝑥2
𝑥1
 
= 1
𝑘(𝑥2 −𝑥1) 
𝑘= 𝑥2 −𝑥1 
𝐹(𝑥) = ∫
𝑝(𝑥)𝑑𝑥
𝑥
−∞
 
  = ∫𝑝(𝑥)𝑑𝑥
𝑥
𝑥1
 
  = ∫
𝑘𝑑𝑥
𝑥
𝑥1
 
  =
𝑘∫𝑑𝑥
𝑥
𝑥1
 
  =
𝑘(𝑥−𝑥1)  
  = 
𝑥−𝑥1
𝑥2−𝑥1 
 
8. 𝒇(𝒙) = {
𝟐(𝒙+ 𝟏), −𝟏< 𝒙< 𝟏
𝟎,  𝒆𝒍𝒔𝒆𝒘𝒉𝒆𝒓𝒆
 represents the density of a r.v X, Find 𝑬(𝒙), 𝑽𝒂𝒓(𝒙). 
 
 
 
 
 
 
Variance = 𝐸(𝑥2) −[𝐸(𝑥)]2 = 0.3334 −(0.3334)2 = 0.2222  
 
 
 
 
 
E(x) = ∫
𝑥𝑓(𝑥)𝑑𝑥
∞
−∞
 
  =
2 ∫(𝑥2 + 𝑥)𝑑𝑥
−1
 
  =
2 (0.6667) 
  = 0.3334 
 𝐸(𝑥2) = ∫
𝑥2𝑝(𝑥)𝑑𝑥
∞
−∞
 
  
=
2 ∫
𝑥2(𝑥+ 1)𝑑𝑥
−1
 
  =
2 ∫(𝑥3 + 𝑥2)
−1
𝑑𝑥 
  = 0.3334 

 
 
 
 
 
 
 
 
 
 
Home work: 
9. If a random variable x has the probability density function 
𝑓(𝑥) = {2𝑒−2𝑥,  𝑥> 0
0,  𝑥≤0  find  𝑝(1 < 𝑥< 3)𝑎𝑛𝑑 𝑝(𝑥> 0.5). Also find the variance. 
 
10. The frequency function of a continuous r.v is given by 𝑓(𝑥) = 𝑦0𝑥(2 −𝑥), 0 ≤𝑥≤2.  
Find mean and S.D 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
1.5 Normal distribution 
Introduction: 
❖ The continuous probability distribution having the probability density function  
 𝑓(𝑥) =
𝜎√2𝜋𝑒−(𝑥−𝜇)2/2𝜎2 is called the normal distribution. 
❖ 𝑓(𝑥) ≥0, ∫
𝑓(𝑥)𝑑𝑥
∞
−∞
= 1, Mean = 𝜇, variance = 𝜎2 
❖ A normal distribution with 𝜇= 0 𝑎𝑛𝑑  𝜎= 1 is called standard normal distribution .  
 𝑧=
𝑥−𝜇
𝜎 is called the standard normal variate. 
❖ Standard normal curve is symmetric about the line 𝑧= 0. 
❖ The total area is 1 and the area on either side of is 0.5 
 
❖ How to find the area under the standard normal curve using calculator? 
In 𝑚𝑠, go to SD, press 𝑠ℎ𝑖𝑓𝑡𝑑𝑖𝑠𝑡𝑟𝑛 In es, go to stat, 𝑠ℎ𝑖𝑓𝑡𝑠𝑡𝑎𝑡𝑑𝑖𝑠𝑡𝑟𝑛 
𝑃(𝑎) = 𝐴(−∞, 𝑎), 𝑄(𝑎) = 𝐴(0, 𝑎), 𝑅(𝑎) = 𝐴(𝑎, ∞) 
 
Pictorial representation: 
 
𝑝(𝑧< −1) = 𝑃(−1) = 0.1587  𝑝(𝑧> 1) = 𝑅(1) = 0.1587  𝑝(0 < 𝑧< 1) = 𝑄(1) = 0.3413 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
1. For the standard normal distribution of a random variable z evaluate the following:  
(i) 𝑷(𝟎≤𝒛≤𝟏. 𝟒𝟓)  (ii) 𝑷(−𝟐. 𝟔𝟎≤𝒛≤𝟎)  (iii)𝑷(−𝟑. 𝟒𝟎≤𝒛≤𝟐. 𝟏)  
(iv) 𝑷(𝟏. 𝟐𝟓≤𝒛≤𝟐. 𝟏)  (v) 𝑷(−𝟐. 𝟓𝟓≤𝒛≤−𝟎. 𝟖)  (vi) 𝑷(𝒛≥𝟏. 𝟕)  
(vii) 𝑷(𝒛≤−𝟑. 𝟑𝟓)  (viii) 𝑷(|𝒛| ≤𝟏. 𝟖𝟓) 
 (i) 𝑃(0 ≤𝑧≤1.45) = 𝑄(1.45) = 0.4265  
 
(ii) 𝑃(−2.60 ≤𝑧≤0) = 𝑄(−2.60) = 0.4953  
 
(iii)𝑃(−3.40 ≤𝑧≤2.1) = 𝑄(−3.40) + 𝑄(2.1) = 0.9818 
 
 

 
 
 
 
 
 
 
 
 
 
 
(iv) 𝑃(1.25 ≤𝑧≤2.1) = 𝑄(2.1) −𝑄(1.25) = 0.0878  
 
(v) 𝑃(−2.55 ≤𝑧≤−0.8) = 𝑄(−2.55) −𝑄(−0.8) = 0.2065 
 
(vi) 𝑃(𝑧≥1.7) = 𝑅(1.7) = 0.0446  
 
 
 (vii) 𝑃(𝑧≤−3.35) = 𝑃(−3.35) = 0.0004  

 
 
 
 
 
 
 
 
 
 
  
 
 
(viii) 𝑃(|𝑧| ≤1.85) = 𝑃(−1.85 ≤𝑧≤1.85) = 𝑄(−1.85) −𝑄(1.85) = 0.9357  
  
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
2. For the normal distribution with mean 2 and standard deviation 4 evaluate the 
following probabilities: (i) 𝑷(−𝟔< 𝒙< 𝟑)  (ii) 𝑷(𝟏< 𝒙< 𝟓)  (iii) 𝑷(𝒙≥𝟓)  (iv) 
𝑷(|𝒙| < 𝟒)  (v) 𝑷(|𝒙| > 𝟑)  (vi) 𝑷(|𝒙−𝟐| > 𝟏)  
By data, 𝑧=
𝑥−𝜇
𝜎=
𝑥−2
(i) 𝑝(−6 < 𝑥< 3) = 𝑝(
−6−2
<
𝑥−2
4 <
3−2
4 ) 
 
 
 
= 𝑝(−2 < 𝑧< 0.25) 
 
 
 
= 𝑄(−2) + 𝑄(0.25) 
 
 
 
 
 
  
= 0.5760 
  
(ii) 𝑃(1 < 𝑥< 5) = 𝑝(
1−2
4 <
𝑥−2
4 <
5−2
4 )  
 
 
 
 
= 𝑝(−0.25 < 𝑧< 0.75) 
 
 
 
= 𝑄(−0.25) + 𝑄(0.75) 
 
 
 
= 0.3721 
 
(iii) 𝑃(𝑥≥5) = 𝑝(
𝑥−2
4 ≥
5−2
4 )  
 
 
 
= 𝑝(𝑧≥0.75) 
 
 
 
= 𝑅(0.75) 
 
 
 
= 0.2266  
 
 
(iv) 𝑃(|𝑥| < 4) = 𝑝(
−4−2
<
𝑥−2
4 <
4−2
4 )  
 
 
 
= 𝑝(−1.5 < 𝑧< 0.5) 
 
 
 
= 𝑄(−1.5) + 𝑄(0.5) 
 
 
 
= 0.6247  
  
(v) 𝑃(|𝑥| > 3) = 1 −𝑝(|𝑥| ≤3) 
  
 
 
= 1 −𝑝(−3 ≤𝑥≤3) 
 
 
 
= 1 −𝑝(
−3−2
<
𝑥−2
4 <
3−2
4 ) 
 
 
 
= 1 −𝑝(−1.25 < 𝑧< 0.25) 
 
 
 
= 1 −[𝑄(−1.25) + 𝑄(0.25)] 
 
 
 
= 1 −0.4931 
 
 
 
= 0.5069  
 
 

 
 
 
 
 
 
 
 
 
 
(vi) 𝑃(|𝑥−2| > 1) = 1 −𝑝(|𝑥−2| ≤1) 
  
 
= 1 −𝑝(−1 ≤𝑥−2 ≤1) 
  
 
= 1 −𝑝(−
4 ≤
𝑥−2
4 ≤
4) 
 
 
= 1 −𝑝(−0.25 < 𝑧< 0.25)  
 
 
= 1 −[𝑄(−0.25) + 𝑄(0.25)] 
 
 
= 1 −0.1974  
 
 
= 0.8026  
  
3. If X is a normal variate with mean 30 and S.D 5, find the probabilities that  
(i) 
𝟐𝟔≤𝒙≤𝟒𝟎 (ii) |𝑿−𝟑𝟎| > 𝟓. 
 
By data, 𝜇= 30, 𝜎= 5. Therefore, 𝑧=
𝑥−𝜇
𝜎=
𝑥−30
(i) 𝑃(26 ≤𝑥≤40) = 𝑝(
26−30
≤
𝑥−30
≤
40−30
)  
 
 
 
 
= 𝑝(−0.8 ≤𝑧≤2) 
 
 
 
= 𝑄(−0.8) + 𝑄(2) 
 
 
 
 
= 0.7654 
 
(ii) 𝑝(|𝑥−30| > 5) = 1 −𝑝(|𝑥−30| ≤5) 
  
 
 
= 1 −𝑝(−5 ≤𝑥−30 ≤5) 
  
 
 
= 1 −𝑝(−1 ≤
𝑥−30
≤1)  
 
 
 
= 1 −𝑝(−1 ≤𝑧≤1)  
 
 
 
= 1 −0.6826 
 
 
 
= 0.3174 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
4. The mean and standard deviation of the marks obtained by 1000 students in an 
examination are respectively 34.4 and 16.5. Assuming the normality of the distribution 
find the approximate number of students expected to obtain the marks between 30 and 
60. 
By data, 𝜇= 34.4, 𝜎= 16.55.  
Therefore, 𝑧=
𝑥−𝜇
𝜎=
𝑥−34.4
16.5 
Approximate number of students 
 
= 𝑁× 𝑃(30 ≤𝑥≤60)  
 
= 1000 × 𝑝(
30−34.4
16.5
≤
𝑥−34.4
16.5 ≤
60−34.4.
16.5 )  
 
 
= 1000 × 𝑝(−0.2667 ≤𝑧≤1.5515) 
 
 
= 1000 × 0.5458  
 
 
≅546 
5. The mean weight of 500 students at a certain school is 50 kgs and the standard 
deviation is 6 kgs. Assuming that the weights are normally distributed, find the 
expected number of students weighing between (i)between 40 and 50 kgs (ii) more than 
60 kgs.  
By data, 𝜇= 50, 𝜎= 6. Therefore, 𝑧=
𝑥−𝜇
𝜎=
𝑥−50
 
(i) Expected number of students weighing between 40 and 50 kgs. 
 
 
= 𝑁× 𝑃(40 ≤𝑥≤50)  
 
 
= 500 × 𝑝(
40−50
≤
𝑥−50
≤
50−50
)  
 
 
 
= 500 × 𝑝(−1.6667 ≤𝑧≤0) 
  
 
 
= 500 × 𝑄(−1.6667) 
  
 
= 500 × 0.4522 
  
 
≅226 
 (ii) Expected number of students weighing more than 60 kgs. 
 
 
= 𝑁× 𝑃(𝑥> 60)  
 
 
= 500 × 𝑝(
𝑥−50
>
60−50
)  
 
 
 
= 500 × 𝑝(𝑧> 1.6667) 
  
 
 
= 500 × 𝑅(1.1667) 
  
 
= 500 × 0.0478 ≅ 24 

 
 
 
 
 
 
 
 
 
 
6. The life of a certain electric lamps is normally distributed with mean of 2040 hours and 
standard deviation 60 hours. In a consignment of 2000 lamps, find how many would be 
expected to burn for (i) more than 2150 hours (ii) less than 1950 hours and (iii) between 
1920 hours and 2160 hours.  
 
By data, 𝜇= 2040, 𝜎= 60. Therefore, 𝑧=
𝑥−𝜇
𝜎=
𝑥−2040
 
 
(i) No. of lamps expected to burn more than 2150 hours 
 
 
= 𝑁× 𝑃(𝑥> 2150)  
 
 
= 2000 × 𝑝(
𝑥−2040
>
2150−2040
)  
 
 
 
= 2000 × 𝑝(𝑧> 1.8333) 
  
 
 
= 2000 × 𝑅(1.8333) 
  
 
 
= 2000 × 0.0334 
  
 
 
≅67 
  (ii) No. of lamps expected to burn less than 1950 hours 
 
 
= 𝑁× 𝑃(𝑥< 1950)  
 
 
= 2000 × 𝑝(
𝑥−2040
<
1950−2040
)  
 
 
 
= 2000 × 𝑝(𝑧< −1.5) 
  
 
 
= 2000 × 𝑃(−1.5) 
  
 
 
= 2000 × 0.0668 
  
 
 
≅134 
(iii) No. of lamps expected to burn between 1920 hours and 2160 hours 
 
 
= 𝑁× 𝑃(1920 < 𝑥< 2160)  
 
 
= 2000 × 𝑝(
1920−2040
<
𝑥−2040
<
2160−2040
)  
 
 
 
= 2000 × 𝑝(−2 < 𝑧< 2) 
  
 
 
= 2000 × [𝑄(−2) + 𝑄(2)] 
  
 
 
= 2000 × 0.9545 
  
 
 
≅1909  
 

 
 
 
 
 
 
 
 
 
 
 
 
7. In a normal distribution, 31% of the items are under 45 and 8% are over 64. Find the 
mean and standard deviation.  
 
 
 
By solving (1 ) and (2) we get 𝜇= 50 , 𝜎= 10 
Therefore, mean is 50 and standard deviation is 10. 
 
8. A certain number of articles manufactured in one batch were classified in to three 
categories according to a particular characteristic, being less than 50, between 50 and 60 
and greater than 60. If this characteristic is known to be normally distributed, determine 
the mean and standard deviation of this batch if 60%, 35% and 5% were found in these 
categories. 
 
 
 
 
 
 
 
By solving (1 ) and (2) we get 𝜇= 48.17 , 𝜎= 7.19 
Therefore, mean is 48.17 and standard deviation is 7.19  
 
 
 
 
 
 
 
 
 
 
 
 𝑝(𝑥< 45) = 0.31 
 𝑝(
𝑥−𝜇
𝜎<
45−𝜇
𝜎) = 0.31 
 𝑝(𝑧<
45−𝜇
𝜎) = 0.31 
 
45−𝜇
𝜎
= −0.5 
 𝜇−0.5𝜎= 45 -----  (1) 
 𝑝(𝑥> 64) = 0.08 
 𝑝(
𝑥−𝜇
𝜎>
64−𝜇
𝜎) = 0.08 
 𝑝(𝑧>
64−𝜇
𝜎) = 0.08 
 
64−𝜇
𝜎
= 1.4 
 𝜇+ 1.4𝜎= 64 ---- (2) 
𝑝(𝑥< 50) = 60% 
 𝑝(
𝑥−𝜇
𝜎<
50−𝜇
𝜎) = 0.6 
 𝑝(𝑧<
50−𝜇
𝜎) = 0.6 
 
50−𝜇
𝜎
= 0.2545 
 𝜇+ 0.2545𝜎= 50 -----  (1) 
 𝑝(𝑥> 60) = 5% 
 𝑝(
𝑥−𝜇
𝜎>
60−𝜇
𝜎) = 0.05 
 𝑝(𝑧>
60−𝜇
𝜎) = 0.05 
 
60−𝜇
𝜎
= 1.6450 
 𝜇+ 1.6450𝜎= 60 ---- (2) 

 
 
 
 
 
 
 
 
 
 
9. The IQ of students in a certain college is assumed to be normally distributed with mean 
70 and variance 25. If two students are selected at random, find the probability that (i) 
both of them (ii) at least one of them have IQ between 72 and 80.  
 
𝑝= 𝑃(120 ≤𝑥≤155)  
  = 𝑝(
72−80
≤
𝑥−70
≤
80−70
)  
 
  = 𝑝(−1.6 ≤𝑧≤2)  
  = 𝑄(−1.6) −𝑄(2) 
  = 0.9225 
  
 
 
 
 
 
(i) Probability that both of them have IQ between 72 and 80 
  
= 𝑝× 𝑝 
  
 
= 0.9225 × 0.9225 
  
 
= 0.8510 
(ii) the probability that at least one of them have IQ between 72 and 80. 
  
 
= 1 −(𝑞× 𝑞) 
  
 
= 1 −(0.0775 × 0.0775)  
  
 
= 0.9940 
 
Home work: 
10. In a normal distribution 7% are under 35 and 89% are under 60. Find the mean and standard 
deviation.  
Ans: 48.65, 9.22 
 
11. A sample of 100 dry battery cells produced by a certain company was tested for their lengths 
of life, and the test yielded the following data. Mean life = 12 hours. Standard deviation = 3 
hours. Using normal distribution, find how many cells are expected to have their life lengths 
(i) greater than 15 hours, (ii) between 10 and 14 hours, and (iii) less than 6 hours. 
Ans: 16, 50, 2 
12. In an examination taken by 500 candidates, the average and S.D. of marks obtained are 40% 
and 10% respectively. Assuming normal distribution, find (i) how many have scored  above 
60% (ii) how many will pass if 50% is fixed as the minimum marks for passing (iii) how many 
will pass if 40% is fixed as the minimum marks for passing and (iv) what should be the 
minimum percentage of marks for passing so that 350 candidates pass. 
Ans: 11, 79, 250, 35  
 
 

 
 
 
 
 
 
 
 
 
 
1.6 Exponential distribution 
Introduction: 
 
❖ The continuous probability distribution having the probability density function  
𝑓(𝑥) = {𝛼𝑒−𝛼𝑥, 0 ≤𝑥< ∞
0,  𝑒𝑙𝑠𝑒𝑤ℎ𝑒𝑟𝑒is called the exponential distribution. 
❖ 𝑓(𝑥) ≥0, ∫
𝑓(𝑥)𝑑𝑥
∞
−∞
= 1 
❖ Mean =
𝛼 ,  Standard deviation=
𝛼 
❖ ∫
𝑓(𝑥)𝑑𝑥
𝑘
−∞
= ∫𝑓(𝑥)𝑑𝑥
𝑘
  (∵ It is defined only 0 ≤𝑥< ∞)  
❖ ∫
𝑓(𝑥)𝑑𝑥
∞
𝑘
= 1 −∫𝑓(𝑥)𝑑𝑥
𝑘
 (∵ It is defined only 0 ≤𝑥< ∞) 
 
1. If 𝒙 is an exponential variate with mean 4, evaluate the following: 
 (i) 𝑷(𝟎< 𝒙< 𝟏)  (ii) 𝑷(𝒙> 𝟐)  (iii) 𝑷(−∞< 𝒙< 𝟏𝟎). 
By data, mean = 
𝛼= 4  
Therefore, 𝛼=
4 = 0.25  
Probability density function is 
 𝑝(𝑥) = 𝛼𝑒−𝛼𝑥, 𝑥> 0 
  = 0.25 𝑒−0.25𝑥, 𝑥> 0 
(i)  𝑃(0 < 𝑥< 1) = 0.25 ∫𝑒−0.25𝑥𝑑𝑥=
0.2212 
  (ii)  𝑃(𝑥> 2) = 1 −𝑃(𝑥< 2) = 1 −0.25 ∫𝑒−0.25𝑥𝑑𝑥
= 0.6065 
(iii)  𝑃(−∞< 𝑥< 10) = 0.25 ∫
𝑒−0.25𝑥𝑑𝑥= 0.9179
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
2. In a certain town the duration of a shower is exponentially distributed with mean 5 
minutes. What is the probability that a shower will last for (i) less than 10 minutes (ii) 
10 minutes or more? 
 By data, mean = 
𝛼= 5  
 Therefore, 𝛼=
5 = 0.2  
 Probability density function is 
 𝑝(𝑥) = 𝛼𝑒−𝛼𝑥, 𝑥> 0 
  = 0.2𝑒−0.2𝑥, 𝑥> 0 
 (i) P (shower lasts for less than 10 minutes) 
  = 𝑃(𝑥< 10) = 0.2 ∫
𝑒−0.2𝑥𝑑𝑥=
0.8647 
(ii) P (shower lasts for 10 minutes or more) 
  = 𝑃(𝑥> 10) = 1 −𝑃(𝑥< 10) = 1 −0.8647 = 0.1353 
 
3. The length of telephone conversation in a booth has been an exponential distribution 
and found on an average to be 3 minutes. Find the probability that a random call made 
from this booth (i) Ends less than 3 minutes (ii) between 3 and 5 minutes.  
By data, mean = 
𝛼= 3  
Therefore, 𝛼=
Probability density function is 
 𝑝(𝑥) = 𝛼𝑒−𝛼𝑥, 𝑥> 0 
  =
3 𝑒−1
3𝑥, 𝑥> 0 
(i)  𝑃(Call ends in less than 3mins.)=
3 ∫𝑒−1
3𝑥𝑑𝑥=
0.6321 
  (ii)  𝑃(Call made between 3 and 5 mins.)=
3 ∫𝑒−1
3𝑥𝑑𝑥
= 0.1789 
 
 
 

 
 
 
 
 
 
 
 
 
 
4. The sales per day for a shop is exponentially distributed with the average sale 
amounting to ₹100 and net profit is 8%. Find the probability that the net profit 
exceeds ₹30 on two consecutive days.  
By data, mean = 
𝛼= 100  
Therefore, 𝛼=
100 = 0.01  
Probability density function is 
 𝑝(𝑥) = 𝛼𝑒−𝛼𝑥, 𝑥> 0 
  = 0.01 𝑒−0.01𝑥, 𝑥> 0 
 8% 𝑜𝑓 𝑎𝑛 𝑎𝑚𝑜𝑢𝑛𝑡= 𝑃𝑟𝑜𝑓𝑖𝑡 
 0.08 𝑜𝑓 𝑎𝑛 𝑎𝑚𝑜𝑢𝑛𝑡= 30 
𝐴𝑚𝑜𝑢𝑛𝑡=
0.08 = 375  
 𝑃(net profit exceeds ₹30) = 𝑃(Amount exceeds ₹375) 
  
 
 
 
  = 𝑃(𝑥> 375) 
  
 
 
 
  = 1 −𝑃(𝑥< 375) 
  
 
 
  = 1 −0.01 ∫
𝑒−0.01𝑥𝑑𝑥=
0.0235 
P(net profit exceeds ₹30 on two consecutive days) = 0.0235 × 0.0235 = 0.0005 
 
5. The average daily turnout of a departmental store is ₹10,000 and the net profit is 8%. 
If the turnout has an exponential distribution, find the probability that the net profit 
will exceed ₹3000 each on two consecutive days chosen at random.  
  
By data, mean = 
𝛼= 10000  
Therefore, 𝛼=
10000 = 0.0001  
Probability density function is 
 𝑝(𝑥) = 𝛼𝑒−𝛼𝑥, 𝑥> 0 
  = 0.0001 𝑒−0.0001𝑥, 𝑥>
 8% 𝑜𝑓 𝑎𝑛 𝑎𝑚𝑜𝑢𝑛𝑡= 𝑃𝑟𝑜𝑓𝑖𝑡 
 0.08 𝑜𝑓 𝑎𝑛 𝑎𝑚𝑜𝑢𝑛𝑡= 3000 
𝐴𝑚𝑜𝑢𝑛𝑡=
3000
0.08 = 37500  
 𝑝(net profit exceeds ₹3000) 
 = 𝑃(Amount exceeds ₹37500) 
= 𝑃(𝑥> 37500) 
= 1 −𝑃(𝑥< 37500) 
= 1 −0.0001 ∫
𝑒−0.0001𝑥𝑑𝑥
37500
 
= 0.0235 
p(net profit exceeds ₹3000 on two 
consecutive days)  
= 0.0235 × 0.0235 
  = 0.0005 

 
 
 
 
 
 
 
 
 
 
 
6. At a certain city bus stop, three buses arrive per hour on an average. Assuming that 
the time between successive arrivals is exponentially distributed, find the probability 
that the time between the arrival of successive buses is (i) less than 10 minutes (ii) at 
least 30 minutes.  
Average number of busses per hour = 3 
Average time between arrivals =
3 = 20 minutes. 
By data, mean = 
𝛼= 20  
Therefore, 𝛼=
20 = 0.05  
Probability density function is 
 𝑝(𝑥) = 𝛼𝑒−𝛼𝑥, 𝑥> 0 
  = 0.05 𝑒−0.05𝑥, 𝑥> 0 
(i) P (Time between the arrival of successive buses is less than 10 minutes) 
  
= 𝑃(𝑥< 10) = ∫
0.05𝑒−0.05𝑥𝑑𝑥= 0.3935
 
(ii) P (Time between the arrival of successive buses is at least 30 minutes) 
  
= 𝑃(𝑥≥30) = ∫
0.05𝑒−0.05𝑥𝑑𝑥
∞
 
  = 1 −∫
0.05𝑒−0.05𝑥𝑑𝑥= 1 −0.7769 = 0.2231
3 0
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
7. After the appointment of a new sales manager, the sales in a two-wheeler show-
room is exponentially distributed with mean equal to 4. If two days are selected at 
random, what is the probability that (i) on both days the sales is over 5 units, (ii) 
the sales is over 5 units on at least one of the two days? 
By data, mean = 
𝛼= 4  
Therefore, 𝛼=
4 = 0.25  
Probability density function is 
 𝑝(𝑥) = 𝛼𝑒−𝛼𝑥, 𝑥> 0 
  = 0.25 𝑒−0.25𝑥, 𝑥> 0 
(i) P (The sales is over 5 units on a randomly chosen day) 
 
 
= 𝑃(𝑥> 5) = ∫
0.25𝑒−0.25𝑥𝑑𝑥
∞
= 1 −∫0.25𝑒−0.25𝑥𝑑𝑥
= 0.2865 
If two days are selected, 
(ii) P (The sales is over 5 units on both days)  
 
 
= 𝑃(𝑥> 5) × 𝑃(𝑥> 5) = 0.0821 
(iii) P (The sales is over 5 units on at least one day) 
= 1 −𝑃(𝑥< 5) × 𝑃(𝑥< 5) = 1 −0.71352 = 0.4909  
8. The daily turnover in a medical shop is exponentially distributed with ₹6000 as the 
average with a net profit of 8%. Find the probability that the net profit exceeds ₹500 
on a randomly chosen day. 
By data, mean = 
𝛼= 6000  
Therefore, 𝛼=
6000 = 0.0002  
Probability density function is 
 𝑝(𝑥) = 𝛼𝑒−𝛼𝑥, 𝑥> 0 
  = 0.0002 𝑒−0.0002𝑥, 𝑥> 0 
 8% 𝑜𝑓 𝑎𝑛 𝑎𝑚𝑜𝑢𝑛𝑡= 𝑃𝑟𝑜𝑓𝑖𝑡 
 0.08 𝑜𝑓 𝑎𝑛 𝑎𝑚𝑜𝑢𝑛𝑡= 500 
𝐴𝑚𝑜𝑢𝑛𝑡=
0.08 = 6250  
 𝑃(net profit exceeds ₹500) 
= 𝑃(Amount exceeds ₹6250) 
  = 𝑃(𝑥> 6250) 
= 1 −𝑃(𝑥< 6250)
= 1 −0.0002 ∫𝑒−0.0002𝑥𝑑𝑥
6250
= 0.2865 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
Home work: 
9. If x is an exponential variate with mean 5 evaluate  
(i) 𝑃(0 < 𝑥< 1), (ii)𝑃(−∞< 𝑥< 10) and (iii)𝑃(𝑥≤0 𝑜𝑟 𝑥≥ 1)  
Ans: 0.1813, 0.8647, 0.8187 
10. The life a T.V. tube manufactured by a company is known to have a mean of 200 
months. Assuming that the life has an exponential distribution, find the probability 
that the life of a tube manufactured by the company is (i) less than 200 months, (ii) 
between 100 and 300 months. 
  [Ans. 1 −𝑒−1; 𝑒−0.5 −𝑒−1.5] 
11. If the life time of a certain type of electric bulbs is distributed as an exponential 
variate with mean of 100 hours, what is the probability that a bulb will last for more 
than 1500 hours? If two bulbs are selected at random, find the probability that (i) 
both the bulbs, (ii) at least one bulb will last for more than 1500 hours.  
[Ans. 𝑒−3/2, 𝑒−3, (2𝑒−3/2 −𝑒−3)] 
12. In a certain town, the duration of a shower is exponentially distributed with mean 
equal to 5 minutes. What is the probability that (i) a shower will last for at least 2 
minutes more, given that it has already lasted for 5 minutes, (ii) a shower will last 
for not more than 6 minutes more if it has already lasted for 3 minutes  
[Ans. (i) 𝑒−2/5  (ii) 1 −𝑒−6/5]
