<!-- PROVENANCE: subject_code=BCS302 | subject_name=Digital Design & Computer Organization | semester=3 | module=1 | source_type=MODULE_NOTES | source_file=module1.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS302 — Module 1

## Introduction to Digital Design — Boolean Algebra and K-Maps

**Subject:** BCS302 (Digital Design and Computer Organization)
**Module:** Module 1
**Content type:** module_notes
**Sources:** BCS302-module-1-textbook.txt

---

30  Chapter 1  Digital Systems and Binary Numbers
into R1 and R2. The digital logic circuits produce the sum, which is transferred to register 
R3. The contents of R3 can now be transferred back to one of the memory registers. 
 The last two examples demonstrated the information‐flow capabilities of a digital 
system in a simple manner. The registers of the system are the basic elements for storing 
and holding the binary information. Digital logic circuits process the binary information 
stored in the registers. Digital logic circuits and registers are covered in Chapters 2 
through 6. The memory unit is explained in  Chapter  7 . The description of register oper-
ations at the register transfer level and the design of digital systems are covered in 
 Chapter  8 . 
 1.9  BI NA RY L O G IC 
 Binary logic deals with variables that take on two discrete values and with operations 
that assume logical meaning. The two values the variables assume may be called by dif-
ferent names (true and false, yes and no, etc.), but for our purpose, it is convenient to 
think in terms of bits and assign the values 1 and 0. The binary logic introduced in this 
section is equivalent to an algebra called Boolean algebra. The formal presentation of 
Boolean algebra is covered in more detail in  Chapter  2 . The purpose of this section is 
to introduce Boolean algebra in a heuristic manner and relate it to digital logic circuits 
and binary signals. 
 Definition of Binary Logic 
 Binary logic consists of binary variables and a set of logical operations. The variables are 
designated by letters of the alphabet, such as A, B, C, x, y, z, etc., with each variable hav-
ing two and only two distinct possible values: 1 and 0. There are three basic logical oper-
ations: AND, OR, and NOT. Each operation produces a binary result, denoted by z. 
 
1.  AND: This operation is represented by a dot or by the absence of an operator. For 
example,  x # y = z or  xy = z is read “x AND y is equal to z.” The logical operation 
AND is interpreted to mean that  z = 1 if and only if  x = 1 and  y = 1; otherwise 
 z = 0. (Remember that x, y, and z are binary variables and can be equal either to 
1 or 0, and nothing else.) The result of the operation x # y is z. 
 
2.  OR: This operation is represented by a plus sign. For example,  x + y = z is read 
“x OR y is equal to z,” meaning that  z = 1 if  x = 1 or if  y = 1 or if both  x = 1 
and  y = 1. If both  x = 0 and  y = 0, then  z = 0. 
 
3.  NOT: This operation is represented by a prime (sometimes by an overbar). For 
example,  x = z (or x = z ) is read “not x is equal to z,” meaning that z is what x 
is not. In other words, if  x = 1, then  z = 0, but if  x = 0, then  z = 1. The NOT 
operation is also referred to as the complement operation, since it changes a 1 to 
0 and a 0 to 1, i.e., the result of complementing 1 is 0, and vice versa. 
 Binary logic resembles binary arithmetic, and the operations AND and OR have 
similarities to multiplication and addition, respectively. In fact, the symbols used for 

Section 1.9  Binary Logic  31
AND and OR are the same as those used for multiplication and addition. However, 
binary logic should not be confused with binary arithmetic. One should realize that an 
arithmetic variable designates a number that may consist of many digits. A logic vari-
able is always either 1 or 0. For example, in binary arithmetic, we have  1 + 1 = 10 (read 
“one plus one is equal to 2”), whereas in binary logic, we have  1 + 1 = 1 (read “one 
OR one is equal to one”). 
 For each combination of the values of x and y, there is a value of z specified by the 
definition of the logical operation. Definitions of logical operations may be listed in a 
compact form called truth tables. A truth table is a table of all possible combinations of 
the variables, showing the relation between the values that the variables may take and 
the result of the operation. The truth tables for the operations AND and OR with vari-
ables x and y are obtained by listing all possible values that the variables may have when 
combined in pairs. For each combination, the result of the operation is then listed in a 
separate row. The truth tables for AND, OR, and NOT are given in  Table  1.8 . These 
tables clearly demonstrate the definition of the operations. 
 Logic Gates 
 Logic gates are electronic circuits that operate on one or more input signals to pro-
duce an output signal. Electrical signals such as voltages or currents exist as analog 
signals having values over a given continuous range, say, 0 to 3 V, but in a digital 
system these voltages are interpreted to be either of two recognizable values, 0 or 1. 
Voltage‐operated logic circuits respond to two separate voltage levels that represent a 
binary variable equal to logic 1 or logic 0. For example, a particular digital system may 
define logic 0 as a signal equal to 0 V and logic 1 as a signal equal to 3 V. In practice, 
each voltage level has an acceptable range, as shown in  Fig.  1.3 . The input terminals of 
digital circuits accept binary signals within the allowable range and respond at the 
output terminals with binary signals that fall within the specified range. The intermedi-
ate region between the allowed regions is crossed only during a state transition. Any 
desired information for computing or control can be operated on by passing binary 
signals through various combinations of logic gates, with each signal representing a 
particular binary variable. When the physical signal is in a particular range it is inter-
preted to be either a 0 or a 1. 
 Truth Tables of Logical Operations 
 AND 
 OR 
 NOT 
 x 
 y 
 x # y 
 x 
 y 
 x + y 
 x 
 x 
 
 
 
 

32  Chapter 1  Digital Systems and Binary Numbers
 The graphic symbols used to designate the three types of gates are shown in  Fig.  1.4 . 
The gates are blocks of hardware that produce the equivalent of logic‐1 or logic‐0 output 
signals if input logic requirements are satisfied. The input signals x and y in the AND and 
OR gates may exist in one of four possible states: 00, 10, 11, or 01. These input signals 
are shown in  Fig.  1.5 together with the corresponding output signal for each gate. The 
timing diagrams illustrate the idealized response of each gate to the four input signal 
combinations. The horizontal axis of the timing diagram represents the time, and the 
vertical axis shows the signal as it changes between the two possible voltage levels. In 
reality, the transitions between logic values occur quickly, but not instantaneously. The 
low level represents logic 0, the high level logic 1. The AND gate responds with a logic 
1 output signal when both input signals are logic 1. The OR gate responds with a logic 
1 output signal if any input signal is logic 1. The NOT gate is commonly referred to as 
an inverter. The reason for this name is apparent from the signal response in the timing 
diagram, which shows that the output signal inverts the logic sense of the input signal. 
Volts
Signal
range for
logic 1
Signal
range for
logic 0
Transition occurs
between these limits
 Signal levels for binary logic values 
x
x
(c) NOT gate or inverter
(a) Two-input AND gate
x
z  x  y
y
(b) Two-input OR gate
z  x y
x
y
 Symbols for digital logic circuits 

Problems  33
 AND and OR gates may have more than two inputs. An AND gate with three inputs 
and an OR gate with four inputs are shown in  Fig.  1.6 . The three‐input AND gate 
responds with logic 1 output if all three inputs are logic 1. The output produces logic 0 
if any input is logic 0. The four‐input OR gate responds with logic 1 if any input is logic 
1; its output becomes logic 0 only when all inputs are logic 0. 
 PR O BL E MS 
 
(Answers to problems marked with * appear at the end of the text.) 
 
1.1 
 List the octal and hexadecimal numbers from 16 to 32. Using A and B for the last two 
digits, list the numbers from 8 to 28 in base 12. 
 
1.2*  What is the exact number of bytes in a system that contains (a) 32K bytes, (b) 64M bytes, 
and (c) 6.4G bytes? 
 
1.3 
 Convert the following numbers with the indicated bases to decimal: 
 
(a) * (4310) 5 
 (b) * (198) 12 
 
(c)  (435) 8 
 (d)  (345) 6 
 
1.4 
 What is the largest binary number that can be expressed with 16 bits? What are the equiv-
alent decimal and hexadecimal numbers? 
 
1.5*  Determine the base of the numbers in each case for the following operations to be correct: 
(a) 14/2 = 5 
(b) 54/4 = 13 
(c) 24 + 17 = 40. 
 
1.6*  The solutions to the quadratic equation  x 2 - 11x + 22 = 0 are  x = 3 and  x = 6. What is the 
base of the numbers? 
x
y
AND: x  y
OR: x  y
NOT: x
 Input–output signals for gates 
A
B
C
F  ABC
G  A  B  C  D
A
B
C
D
(a) Three-input AND gate
(b) Four-input OR gate
 Gates with multiple inputs 

34  Chapter 1  Digital Systems and Binary Numbers
 
1.7*  Convert the hexadecimal number 64CD to binary, and then convert it from binary to octal. 
 
1.8 
 Convert the decimal number 431 to binary in two ways: (a) convert directly to binary; 
(b) convert first to hexadecimal and then from hexadecimal to binary. Which method is faster? 
 
1.9 
 Express the following numbers in decimal: 
 
(a) * (10110.0101) 2 
(b) * (16.5) 16 
 
(c) * (26.24) 8  
(d)  (DADA.B) 16 
 
(e)  (1010.1101) 2 
 
1.10  Convert the following binary numbers to hexadecimal and to decimal: (a) 1.10010, 
(b) 110.010. Explain why the decimal answer in (b) is 4 times that in (a). 
 
1.11  Perform the following division in binary: 111011 ÷ 101. 
 
1.12*  Add and multiply the following numbers without converting them to decimal. 
 
(a)  Binary numbers 1011 and 101. 
 
(b)  Hexadecimal numbers 2E and 34. 
 
1.13  Do the following conversion problems: 
 
(a)  Convert decimal 27.315 to binary. 
 
(b)  Calculate the binary equivalent of 2/3 out to eight places. Then convert from binary to 
decimal. How close is the result to 2/3? 
 
(c)  Convert the binary result in (b) into hexadecimal. Then convert the result to decimal. 
Is the answer the same? 
 
1.14  Obtain the 1’s and 2’s complements of the following binary numbers: 
 
(a) 00010000 
(b) 00000000
 
(c) 11011010 
(d) 10101010
 
(e) 10000101 
(f) 11111111. 
 
1.15  Find the 9’s and the 10’s complement of the following decimal numbers: 
 
(a) 25,478,036 
(b) 63, 325, 600 
 
(c) 25,000,000 
(d) 00,000,000. 
 
1.16  (a)  Find the 16’s complement of C3DF. 
 
(b)  Convert C3DF to binary. 
 
(c)  Find the 2’s complement of the result in (b). 
 
(d)  Convert the answer in (c) to hexadecimal and compare with the answer in (a). 
 
1.17  Perform subtraction on the given unsigned numbers using the 10’s complement of the 
subtrahend. Where the result should be negative, find its 10’s complement and affix a minus 
sign. Verify your answers. 
 
(a) 4,637 - 2,579 
(b) 125 - 1,800
 
(c) 2,043 - 4,361 
(d) 1,631 - 745 
 
1.18  Perform subtraction on the given unsigned binary numbers using the 2’s complement of the 
subtrahend. Where the result should be negative, find its 2’s complement and affix a minus sign. 
 
(a) 10011 - 10010 
(b) 100010 - 100110
 
(c) 1001 - 110101 
(d) 101000 - 10101 
 
1.19*  The following decimal numbers are shown in sign‐magnitude form: +9,286 and +801. 
 Convert them to signed-10’s‐complement form and perform the following operations 
(note that the sum is +10,627 and requires five digits and a sign). 
 
(a)  (+9,286) + (+801) 
(b)  (+9,286) + (-801) 
 
(c)  (-9,286) + (+801) 
(d)  (-9,286) + (-801) 

Problems  35
 
1.20  Convert decimal +49 and +29 to binary, using the signed‐2’s‐complement representation 
and enough digits to accommodate the numbers. Then perform the binary equivalent of 
(+29) + (-49), (-29) + (+49), and (-29) + (-49). Convert the answers back to decimal and 
verify that they are correct. 
 
1.21  If the numbers (+9,742) 10 and (+641) 10 are in signed magnitude format, their sum is (+10,383) 10 
and requires five digits and a sign. Convert the numbers to signed-10’s‐complement form and 
find the following sums: 
 
(a)  (+9,742) + (+641) 
(b)  (+9,742) + (-641) 
 
(c)  (-9,742) + (+641) 
(d)  (-9,742) + (-641) 
 
1.22  Convert decimal 6,514 to both BCD and ASCII codes. For ASCII, an even parity bit is to 
be appended at the left. 
 
1.23  Represent the unsigned decimal numbers 791 and 658 in BCD, and then show the steps 
necessary to form their sum. 
 
1.24  Formulate a weighted binary code for the decimal digits, using the following weights: 
 
(a) * 6, 3, 1, 1 
 
(b)  6, 4, 2, 1 
 
1.25  Represent the decimal number 6,248 in (a) BCD, (b) excess‐3 code, (c) 2421 code, and 
(d) a 6311 code. 
 
1.26  Find the 9’s complement of decimal 6,248 and express it in 2421 code. Show that the result 
is the 1’s complement of the answer to (c) in CR_PROBlem 1.25. This demonstrates that 
the 2421 code is self‐complementing. 
 
1.27  Assign a binary code in some orderly manner to the 52 playing cards. Use the minimum 
number of bits. 
 
1.28  Write the expression “G. Boole” in ASCII, using an eight‐bit code. Include the period and 
the space. Treat the leftmost bit of each character as a parity bit. Each eight‐bit code should 
have odd parity. (George Boole was a 19th‐century mathematician. Boolean algebra, 
introduced in the next chapter, bears his name.) 
 
1.29*  Decode the following ASCII code: 
 
 1010011 1110100 1100101 1110110 1100101 0100000 1001010 1101111 1100010 1110011. 
 
1.30  The following is a string of ASCII characters whose bit patterns have been converted into 
hexadecimal for compactness: 73 F4 E5 76 E5 4A EF 62 73. Of the eight bits in each pair 
of digits, the leftmost is a parity bit. The remaining bits are the ASCII code. 
 
(a)  Convert the string to bit form and decode the ASCII. 
 
(b)  Determine the parity used: odd or even? 
 
1.31*  How many printing characters are there in ASCII? How many of them are special char-
acters (not letters or numerals)? 
 
1.32*  What bit must be complemented to change an ASCII letter from capital to lowercase and 
vice versa? 
 
1.33*  The state of a 12‐bit register is 100010010111. What is its content if it represents 
 
(a)  Three decimal digits in BCD? 
 
(b)  Three decimal digits in the excess‐3 code? 
 
(c)  Three decimal digits in the 84‐2‐1 code? 
 
(d)  A binary number? 

36  Chapter 1  Digital Systems and Binary Numbers
 
1.34  List the ASCII code for the 10 decimal digits with an even parity bit in the leftmost 
position. 
 
1.35  By means of a timing diagram similar to  Fig.  1.5 , show the signals of the outputs f and g in 
 Fig.  P1.35 as functions of the three inputs a, b, and c. Use all eight possible combinations 
of a, b, and c. 
f
g
a b c
 FIGURE P1.35  
f
g
a
b
 FIGURE P1.36  
 
1.36  By means of a timing diagram similar to  Fig.  1.5 , show the signals of the outputs f and g in 
 Fig.  P1.36 as functions of the two inputs a and b. Use all four possible combinations of a 
and b. 
 REFE R E NCE S 
 
1. 
 C avanagh, J. J. 1984. Digital Computer Arithmetic. New York: McGraw‐Hill. 
 
2. 
 M ano, M. M. 1988. Computer Engineering: Hardware Design. Englewood Cliffs, NJ: 
 Prentice‐Hall. 
 
 3. 
 N elson, V. P., H. T. N agle, J. D. I rwin, and B. D. C arroll . 1997. Digital Logic Circuit 
Analysis and Design. Upper Saddle River, NJ: Prentice Hall. 
 
 4. 
 S chmid, H. 1974. Decimal Computation. New York: John Wiley. 
 
 5. 
 Katz, R. H. and Borriello, G.  2004. Contemporary Logic Design, 2nd ed. Upper Saddle 
River, NJ:  Prentice‐Hall. 

Web Search Topics  37
 W EB S E A R C H T O P IC S 
 
 
 BCD code 
 
 
 ASCII 
 
 
 Storage register 
 
 
 Binary logic 
 
 
 BCD addition 
 
 
 Binary codes 
 
 
 Binary numbers 
 
 
 Excess‐3 code 

Section 2.4  Basic Theorems and Properties of Boolean Algebra  43
presentation is necessary for developing the theorems and properties of the algebraic 
system. The two‐valued Boolean algebra defined in this section is also called “switching 
algebra” by engineers. To emphasize the similarities between two‐valued Boolean alge-
bra and other binary systems, that algebra was called “binary logic” in Section 1.9. From 
here on, we shall drop the adjective “two‐valued” from Boolean algebra in subsequent 
discussions. 
 2.4  BA S IC T H E O R E M S A N D PRO P E RTI E S 
OF BOO L E A N A L G E B R A 
 Duality 
 In Section 2.3, the Huntington postulates were listed in pairs and designated by part 
(a) and part (b). One part may be obtained from the other if the binary operators and 
the identity elements are interchanged. This important property of Boolean algebra is 
called the duality principle and states that every algebraic expression deducible from 
the postulates of Boolean algebra remains valid if the operators and identity elements 
are interchanged. In a two‐valued Boolean algebra, the identity elements and the ele-
ments of the set B are the same: 1 and 0. The duality principle has many applications. If 
the dual of an algebraic expression is desired, we simply interchange OR and AND 
operators and replace 1’s by 0’s and 0’s by 1’s. 
 Basic Theorems 
is simplified by omitting the binary operator whenever doing so does not lead to 
confusion. The theorems and postulates listed are the most basic relationships in Boolean 
 Postulates and Theorems of Boolean Algebra 
 Postulate 2 
 (a) 
 x + 0 = x 
 (b) 
 x # 1 = x 
 Postulate 5 
 (a) 
 x + x  = 1 
 (b) 
 x # x = 0 
 Theorem 1 
 (a) 
 x + x = x 
 (b) 
 x # x = x 
 Theorem 2 
 (a) 
 x + 1 = 1 
 (b) 
 x # 0 = 0 
 Theorem 3, involution 
 
 (x ) = x 
 
 
 Postulate 3, commutative 
 (a) 
 x + y = y + x 
 (b) 
 xy = yx 
 Theorem 4, associative 
 (a)  x + (y + z) = (x + y) + z 
 (b) 
 x(yz) = (xy)z 
 Postulate 4, distributive 
 (a) 
 x(y + z) = xy + xz 
 (b) 
 x + yz = (x + y)(x + z) 
 Theorem 5, DeMorgan 
 (a) 
 (x + y) = x y 
 (b) 
 (xy) = x  + y 
 Theorem 6, absorption 
 (a) 
 x + xy = x 
 (b)  x(x + y) = x 

44  Chapter 2  Boolean Algebra and Logic Gates
algebra. The theorems, like the postulates, are listed in pairs; each relation is the dual of 
the one paired with it. The postulates are basic axioms of the algebraic structure and 
need no proof. The theorems must be proven from the postulates. Proofs of the theorems 
with one variable are presented next. At the right is listed the number of the postulate 
which justifies that particular step of the proof. 
 THEOREM 1(a):  x + x = x. 
 Statement 
 Justification 
 x + x = (x + x) # 1 
 postulate 2(b) 
  = (x + x)(x + x) 
 5(a) 
  = x + xx 
 4(b) 
  = x + 0 
 5(b) 
  = x 
 2(a) 
 THEOREM 1(b):  x # x = x. 
 Statement 
 Justification 
 x # x = xx + 0 
 postulate 2(a) 
 
 = xx + xx 
 5(b) 
 
 = x(x + x) 
 4(a) 
 
 = x # 1 
 5(a) 
 
 = x 
 2(b) 
 Note that theorem 1(b) is the dual of theorem 1(a) and that each step of the proof 
in part (b) is the dual of its counterpart in part (a). Any dual theorem can be similarly 
derived from the proof of its corresponding theorem. 
 THEOREM 2(a):  x + 1 = 1. 
 Statement 
 Justifi cation 
 x + 1 = 1 # (x + 1) 
 postulate 2(b) 
  = (x + x)(x + 1) 
 5(a) 
  = x + x # 1 
 4(b) 
  = x + x 
 2(b) 
  = 1 
 5(a) 
 THEOREM 2(b):  x # 0 = 0 by duality. 
 THEOREM 3:  (x) = x. From postulate 5, we have  x + x = 1 and  x # x = 0, which 
together define the complement of x. The complement of  x is x and is also  (x). 

Section 2.4  Basic Theorems and Properties of Boolean Algebra  45
Therefore, since the complement is unique, we have  (x) = x. The theorems involv-
ing two or three variables may be proven algebraically from the postulates and the 
theorems that have already been proven. Take, for example, the absorption theorem: 
 THEOREM 6(a):  x + xy = x. 
 Statement 
 Justifi cation 
 x + xy = x # 1 + xy 
 postulate 2(b) 
 = x(1 + y) 
 4(a) 
 = x(y + 1) 
 3(a) 
 = x # 1 
 2(a) 
 = x 
 2(b) 
 THEOREM 6(b):  x(x + y) = x by duality. 
 The theorems of Boolean algebra can be proven by means of truth tables. In truth 
tables, both sides of the relation are checked to see whether they yield identical results 
for all possible combinations of the variables involved. The following truth table verifies 
the first absorption theorem: 
 x 
 y 
 xy 
 x  xy 
 The algebraic proofs of the associative law and DeMorgan’s theorem are long and will 
not be shown here. However, their validity is easily shown with truth tables. For example, 
the truth table for the first DeMorgan’s theorem,  (x + y) = xy, is as follows: 
 x 
 y 
 x  y  (x  y) 
 x 
 y 
 xy 
 Operator Precedence 
 The operator precedence for evaluating Boolean expressions is (1) parentheses, 
(2) NOT, (3) AND, and (4) OR. In other words, expressions inside parentheses must be 
evaluated before all other operations. The next operation that holds precedence is the 
complement, and then follows the AND and, finally, the OR. As an example, consider 
the truth table for one of DeMorgan’s theorems. The left side of the expression is 
 (x + y). Therefore, the expression inside the parentheses is evaluated first and the 

46  Chapter 2  Boolean Algebra and Logic Gates
 Truth Tables for  F1 and  F2 
 x 
 y 
 z 
 F1 
 F2 
result then complemented. The right side of the expression is  xy, so the complement 
of x and the complement of y are both evaluated first and the result is then ANDed. 
Note that in ordinary arithmetic, the same precedence holds (except for the comple-
ment) when multiplication and addition are replaced by AND and OR, respectively. 
 2.5  BOOL E A N F U N C T IO N S 
 Boolean algebra is an algebra that deals with binary variables and logic operations. A 
Boolean function described by an algebraic expression consists of binary variables, the 
constants 0 and 1, and the logic operation symbols. For a given value of the binary variables, 
the function can be equal to either 1 or 0. As an example, consider the Boolean function 
 F1 = x + yz 
 The function  F1 is equal to 1 if x is equal to 1 or if both  y and z are equal to 1.  F1 is equal 
to 0 otherwise. The complement operation dictates that when  y = 1, y = 0. Therefore, 
 F1 = 1 if  x = 1 or if  y = 0 and  z = 1. A Boolean function expresses the logical rela-
tionship between binary variables and is evaluated by determining the binary value of 
the expression for all possible values of the variables. 
 A Boolean function can be represented in a truth table. The number of rows in the 
truth table is  2n, where n is the number of variables in the function. The binary combina-
tions for the truth table are obtained from the binary numbers by counting from 0 
through  2n - 1.  Table  2.2 shows the truth table for the function  F1. There are eight pos-
sible binary combinations for assigning bits to the three variables x, y, and z. The column 
labeled  F1 contains either 0 or 1 for each of these combinations. The table shows that 
the function is equal to 1 when  x = 1 or when  yz = 01 and is equal to 0 otherwise. 
 A Boolean function can be transformed from an algebraic expression into a circuit 
diagram composed of logic gates connected in a particular structure. The logic‐circuit 
diagram (also called a schematic) for  F1 is shown in  Fig.  2.1 . There is an inverter for input 
y to generate its complement. There is an AND gate for the term  yz and an OR gate 

Section 2.5  Boolean Functions  47
that combines x with  yz. In logic‐circuit diagrams, the variables of the function are taken 
as the inputs of the circuit and the binary variable  F1 is taken as the output of the circuit. 
The schematic expresses the relationship between the output of the circuit and its inputs. 
Rather than listing each combination of inputs and outputs, it indicates how to compute 
the logic value of each output from the logic values of the inputs. 
 There is only one way that a Boolean function can be represented in a truth table. 
However, when the function is in algebraic form, it can be expressed in a variety of ways, 
all of which have equivalent logic. The particular expression used to represent the function 
will dictate the interconnection of gates in the logic‐circuit diagram. Conversely, the inter-
connection of gates will dictate the logic expression. Here is a key fact that motivates our 
use of Boolean algebra: By manipulating a Boolean expression according to the rules of 
Boolean algebra, it is sometimes possible to obtain a simpler expression for the same 
function and thus reduce the number of gates in the circuit and the number of inputs to 
the gate. Designers are motivated to reduce the complexity and number of gates because 
their effort can significantly reduce the cost of a circuit. Consider, for example, the fol-
lowing Boolean function: 
 F2 = xyz + xyz + xy 
 A schematic of an implementation of this function with logic gates is shown in 
 Fig.  2.2 (a). Input variables x and y are complemented with inverters to obtain  x and 
 y. The three terms in the expression are implemented with three AND gates. The 
OR gate forms the logical OR of the three terms. The truth table for  F2 is listed in 
spective of the value of z) and is equal to 0 otherwise. This set of conditions produces 
four 1’s and four 0’s for  F2. 
 Now consider the possible simplification of the function by applying some of the 
identities of Boolean algebra: 
 F2 = xyz + xyz + xy = xz(y + y) + xy = xz + xy 
 The function is reduced to only two terms and can be implemented with gates as shown 
in  Fig.  2.2 (b). It is obvious that the circuit in (b) is simpler than the one in (a), yet both 
implement the same function. By means of a truth table, it is possible to verify that the 
two expressions are equivalent. The simplified expression is equal to 1 when  xz = 01 or 
when  xy = 10. This produces the same four 1’s in the truth table. Since both expressions 
F1
x
y
z
 Gate implementation of  F1  x  yz 

48  Chapter 2  Boolean Algebra and Logic Gates
produce the same truth table, they are equivalent. Therefore, the two circuits have the 
same outputs for all possible binary combinations of inputs of the three variables. Each 
circuit implements the same identical function, but the one with fewer gates and fewer 
inputs to gates is preferable because it requires fewer wires and components. In general, 
there are many equivalent representations of a logic function. Finding the most eco-
nomic representation of the logic is an important design task. 
 Algebraic Manipulation 
 When a Boolean expression is implemented with logic gates, each term requires a gate 
and each variable within the term designates an input to the gate. We define a literal to 
be a single variable within a term, in complemented or uncomplemented form. The 
function of  Fig.  2.2 (a) has three terms and eight literals, and the one in  Fig.  2.2 (b) has 
two terms and four literals. By reducing the number of terms, the number of literals, or 
both in a Boolean expression, it is often possible to obtain a simpler circuit. The manip-
ulation of Boolean algebra consists mostly of reducing an expression for the purpose of 
obtaining a simpler circuit. Functions of up to five variables can be simplified by the 
map method described in the next chapter. For complex Boolean functions and many 
(a) F2  xyz  xyz  xy
(b) F2  xy  xz
x
y
z
F2
x
y
z
F2
 Implementation of Boolean function  F2 with gates 

Section 2.5  Boolean Functions  49
different outputs, designers of digital circuits use computer minimization programs that 
are capable of producing optimal circuits with millions of logic gates. The concepts intro-
duced in this chapter provide the framework for those tools. The only manual method 
available is a cut‐and‐try procedure employing the basic relations and other manipulation 
techniques that become familiar with use, but remain, nevertheless, subject to human 
error. The examples that follow illustrate the algebraic manipulation of Boolean algebra 
to acquaint the reader with this important design task. 
 EXAMPLE 2.1  
 Simplify the following Boolean functions to a minimum number of literals. 
 
1.  x(x + y) = xx + xy = 0 + xy = xy. 
 
2. x + xy = (x + x)(x + y) = 1(x + y) = x + y.
 
3. (x + y)(x + y) = x + xy + xy + yy = x(1 + y + y) = x.
 
4. xy + xz + yz = xy + xz + yz(x + x)
 
 = xy + xz + xyz + xyz 
 
 = xy(1 + z) + xz(1 + y) 
 
 = xy + xz. 
 
5.  (x + y)(x + z)(y + z) = (x + y)(x + z), by duality from function 4. 
■
 Functions 1 and 2 are the dual of each other and use dual expressions in correspond-
ing steps. An easier way to simplify function 3 is by means of postulate 4(b) from 
an increase in the number of literals sometimes leads to a simpler final expression. 
Function 5 is not minimized directly, but can be derived from the dual of the steps used 
to derive function 4. Functions 4 and 5 are together known as the consensus theorem. 
 Complement of a Function 
 The complement of a function F is  F and is obtained from an interchange of 0’s for 1’s 
and 1’s for 0’s in the value of F. The complement of a function may be derived algebraically 
through DeMorgan’s theorems, listed in  Table  2.1 for two variables. DeMorgan’s theo-
rems can be extended to three or more variables. The three‐variable form of the first 
DeMorgan’s theorem is derived as follows, from postulates and theorems listed in  Table  2.1 : 
 (A + B + C) = (A + x)
let B + C = x
 
 = Ax
  by theorem 5(a) (DeMorgan)
 
 = A(B + C)  substitute B + C = x
 
 = A(BC)
  by theorem 5(a) (DeMorgan)
 
 = ABC
  by theorem 4(b) (associative) 

50  Chapter 2  Boolean Algebra and Logic Gates
 DeMorgan’s theorems for any number of variables resemble the two‐variable case in 
form and can be derived by successive substitutions similar to the method used in the 
preceding derivation. These theorems can be generalized as follows: 
 (A + B + C + D + g + F) = ABCD c F
 (ABCD c F) = A + B + C + D + g + F 
 The generalized form of DeMorgan’s theorems states that the complement of a func-
tion is obtained by interchanging AND and OR operators and complementing each 
literal. 
 EXAMPLE 2.2  
 Find the complement of the functions  F1 = xyz + xyz and  F2 = x(yz + yz). By 
applying DeMorgan’s theorems as many times as necessary, the complements are 
obtained as follows: 
 F =
1 = (xyz + xyz) = (xyz)(xyz) = (x + y + z)(x + y + z)
 
 F =
2 = [x(yz + yz)]  = x + (yz + yz) = x + (yz)(yz)
 
 = x + (y + z)(y + z)
 
 = x + yz + yz 
■
 A simpler procedure for deriving the complement of a function is to take the dual of 
the function and complement each literal. This method follows from the generalized 
forms of DeMorgan’s theorems. Remember that the dual of a function is obtained from 
the interchange of AND and OR operators and 1’s and 0’s. 
 EXAMPLE 2.3 
 Find the complement of the functions  F1 and  F2 of Example 2.2 by taking their duals 
and complementing each literal. 
 
1.  F1 = xyz + xyz. 
 
 
 The dual of  F1 is  (x + y + z)(x + y + z). 
 
 
 Complement each literal:  (x + y + z)(x + y + z) = F =
1. 
 
2.  F2 = x(yz + yz). 
 
 
 The dual of  F2 is  x + (y + z)(y + z). 
 
 
 Complement each literal:  x + (y + z)(y + z) = F =
2. 
■

60  Chapter 2  Boolean Algebra and Logic Gates
 Boolean algebra, as defined in Section 2.2, has two binary operators, which we have 
called AND and OR, and a unary operator, NOT (complement). From the definitions, 
we have deduced a number of properties of these operators and now have defined other 
binary operators in terms of them. There is nothing unique about this procedure. We 
could have just as well started with the operator NOR  (T), for example, and later 
defined AND, OR, and NOT in terms of it. There are, nevertheless, good reasons for 
introducing Boolean algebra in the way it has been introduced. The concepts of “and,” 
“or,” and “not” are familiar and are used by people to express everyday logical ideas. 
Moreover, the Huntington postulates reflect the dual nature of the algebra, emphasizing 
the symmetry of  + and  # with respect to each other. 
 2.8  DI G I TA L L O G IC G AT E S 
 Since Boolean functions are expressed in terms of AND, OR, and NOT operations, it is 
easier to implement a Boolean function with these type of gates. Still, the possibility of 
constructing gates for the other logic operations is of practical interest. Factors to be 
weighed in considering the construction of other types of logic gates are (1) the feasibil-
ity and economy of producing the gate with physical components, (2) the possibility of 
extending the gate to more than two inputs, (3) the basic properties of the binary oper-
ator, such as commutativity and associativity, and (4) the ability of the gate to implement 
Boolean functions alone or in conjunction with other gates. 
 Of the 16 functions defined in  Table  2.8 , two are equal to a constant and four are 
repeated. There are only 10 functions left to be considered as candidates for logic gates. 
Two—inhibition and implication—are not commutative or associative and thus are 
impractical to use as standard logic gates. The other eight—complement, transfer, AND, 
OR, NAND, NOR, exclusive‐OR, and equivalence—are used as standard gates in 
 digital design. 
 The graphic symbols and truth tables of the eight gates are shown in  Fig.  2.5 . Each 
gate has one or two binary input variables, designated by x and y, and one binary output 
variable, designated by F. The AND, OR, and inverter circuits were defined in Fig. 1.6. 
The inverter circuit inverts the logic sense of a binary variable, producing the NOT, or 
complement, function. The small circle in the output of the graphic symbol of an inverter 
(referred to as a bubble) designates the logic complement. The triangle symbol by itself 
designates a buffer circuit. A buffer produces the transfer function, but does not produce 
a logic operation, since the binary value of the output is equal to the binary value of the 
input. This circuit is used for power amplification of the signal and is equivalent to two 
inverters connected in cascade. 
 The NAND function is the complement of the AND function, as indicated by a 
graphic symbol that consists of an AND graphic symbol followed by a small circle. The 
NOR function is the complement of the OR function and uses an OR graphic symbol 
followed by a small circle. NAND and NOR gates are used extensively as standard logic 
gates and are in fact far more popular than the AND and OR gates. This is because 
NAND and NOR gates are easily constructed with transistor circuits and because  digital 
circuits can be easily implemented with them. 

Section 2.8  Digital Logic Gates  61
Name
Graphic
symbol
Algebraic
function
Truth
table
AND
OR
Inverter
Buffer
NAND
NOR
Exclusive-OR
(XOR)
Exclusive-NOR
or
equivalence
F  x · y
F  x  y
F  (xy)
F  x
F  x
x
y
F
x
y
F
x
y
F
x
y
F
x
y
F
x
y
F
x
F
x
F
F  (x  y)
F  xy  xy
F  xy  xy
F
F
F
x
F
x
F
F
F
F
x
y
x
y
x
y
 x  y
 (x  y)
x
y
x
y
x
y
Digital logic gates

62  Chapter 2  Boolean Algebra and Logic Gates
 The exclusive‐OR gate has a graphic symbol similar to that of the OR gate, except 
for the additional curved line on the input side. The equivalence, or exclusive‐NOR, gate 
is the complement of the exclusive‐OR, as indicated by the small circle on the output 
side of the graphic symbol. 
 Extension to Multiple Inputs 
 The gates shown in  Fig.  2.5 —except for the inverter and buffer—can be extended to 
have more than two inputs. A gate can be extended to have multiple inputs if the binary 
operation it represents is commutative and associative. The AND and OR operations, 
defined in Boolean algebra, possess these two properties. For the OR function, we have 
 x + y = y + x
(commutative) 
 and 
 (x + y) + z = x + (y + z) = x + y + z
(associative) 
 which indicates that the gate inputs can be interchanged and that the OR function can 
be extended to three or more variables. 
 The NAND and NOR functions are commutative, and their gates can be extended 
to have more than two inputs, provided that the definition of the operation is modified 
slightly. The difficulty is that the NAND and NOR operators are not associative 
(i.e.,  (x T y) T z  x T (y T z) ), as shown in  Fig.  2.6 and the following equations: 
 (x T y) T z = [(x + y) + z] = (x + y)z = xz + yz
 x T (y T z) = [x + (y + z)] = x(y + z) = xy + xz 
 To overcome this difficulty, we define the multiple NOR (or NAND) gate as a 
 complemented OR (or AND) gate. Thus, by definition, we have 
 x T y T z = (x + y + z)
 x c y c z = (xyz) 
 The graphic symbols for the three‐input gates are shown in  Fig.  2.7 . In writing cascaded 
NOR and NAND operations, one must use the correct parentheses to signify the proper 
sequence of the gates. To demonstrate this principle, consider the circuit of  Fig.  2.7 (c). 
The Boolean function for the circuit must be written as 
 F = [(ABC)(DE)] = ABC + DE 
 The second expression is obtained from one of DeMorgan’s theorems. It also shows that 
an expression in sum‐of‐products form can be implemented with NAND gates. (NAND 
and NOR gates are discussed further in Section 3.7.) 
 The exclusive‐OR and equivalence gates are both commutative and associative and 
can be extended to more than two inputs. However, multiple‐input exclusive‐OR gates 
are uncommon from the hardware standpoint. In fact, even a two‐input function is usu-
ally constructed with other types of gates. Moreover, the definition of the function must 
be modified when extended to more than two variables. Exclusive‐OR is an odd  function 
(i.e., it is equal to 1 if the input variables have an odd number of 1’s). The construction 

Section 2.8  Digital Logic Gates  63
of a three‐input exclusive‐OR function is shown in  Fig.  2.8 . This function is normally 
implemented by cascading two‐input gates, as shown in (a). Graphically, it can be 
 represented with a single three‐input gate, as shown in (b). The truth table in (c) clearly 
indicates that the output F is equal to 1 if only one input is equal to 1 or if all three inputs 
are equal to 1 (i.e., when the total number of 1’s in the input variables is odd).  (Exclusive‐
OR gates are discussed further in Section 3.9.) 
 Positive and Negative Logic 
 The binary signal at the inputs and outputs of any gate has one of two values, except 
during transition. One signal value represents logic 1 and the other logic 0. Since two 
signal values are assigned to two logic values, there exist two different assignments of 
(x
y) z  (x  y)z
x
y
y
x
(y  z)  x (y  z)
x
y
z
Demonstrating the nonassociativity of the NOR operator: (x T y) T z  x T (y T z)
(a) 3-input NOR gate
y
(x  y  z)
x
z
(b) 3-input NAND gate
(xyz)
y
x
z
(c) Cascaded NAND gates
D
B
F  [(ABC)  (DE)]  ABC  DE 
A
C
E
Multiple‐input and cascaded NOR and NAND gates

64  Chapter 2  Boolean Algebra and Logic Gates
signal level to logic value, as shown in  Fig.  2.9 . The higher signal level is designated by 
H and the lower signal level by L.  Choosing the high‐level H to represent logic 1 defines 
a positive logic system. Choosing the low‐level L to represent logic 1 defines a negative 
logic system. The terms positive and negative are somewhat misleading, since both sig-
nals may be positive or both may be negative. It is not the actual values of the signals 
that determine the type of logic, but rather the assignment of logic values to the relative 
amplitudes of the two signal levels. 
 Hardware digital gates are defined in terms of signal values such as H and L. It is up 
to the user to decide on a positive or negative logic polarity. Consider, for example, the 
electronic gate shown in  Fig.  2.10 (b). The truth table for this gate is listed in  Fig.  2.10 (a). 
It specifies the physical behavior of the gate when H is 3 V and L is 0 V. The truth table 
of  Fig.  2.10 (c) assumes a positive logic assignment, with  H = 1 and  L = 0. This truth 
table is the same as the one for the AND operation. The graphic symbol for a positive 
logic AND gate is shown in  Fig.  2.10 (d). 
 Now consider the negative logic assignment for the same physical gate with  L = 1 
and  H = 0. The result is the truth table of  Fig.  2.10 (e). This table represents the OR 
operation, even though the entries are reversed. The graphic symbol for the negative‐
logic OR gate is shown in  Fig.  2.10 (f). The small triangles in the inputs and output 
(a) Using 2-input gates
(b) 3-input gate
(c) Truth table
x
F  x  y  z
y
z
y
z
F  x  y  z
x
x
y
z
F
Three‐input exclusive‐OR gate
(a) Positive logic
Logic
value
Signal
value
H
L
(b) Negative logic
Logic
value
Signal
value
H
L
Signal assignment and logic polarity

Section 2.8  Digital Logic Gates  65
 designate a polarity indicator, the presence of which along a terminal signifies that 
negative logic is assumed for the signal. Thus, the same physical gate can operate either 
as a positive‐logic AND gate or as a negative‐logic OR gate. 
 The conversion from positive logic to negative logic and vice versa is essentially 
an operation that changes 1’s to 0’s and 0’s to 1’s in both the inputs and the output 
of a gate. Since this operation produces the dual of a function, the change of all ter-
minals from one polarity to the other results in taking the dual of the function. The 
upshot is that all AND operations are converted to OR operations (or graphic sym-
bols) and vice versa. In addition, one must not forget to include the polarity‐indicator 
triangle in the graphic symbols when negative logic is assumed. In this book, we will 
not use negative logic gates and will assume that all gates operate with a positive logic 
assignment. 
(c) Truth table for
 
positive logic
(e) Truth table for
 
negative logic
(d) Positive logic AND gate
(f) Negative logic OR gate
(b) Gate block diagram
x
z
Digital
gate
y
z
x
y
z
x
y
(a) Truth table
 
with H and L
x
y
z
L
L
L
L
L
L
L
H
H
H
H
H
x
y
z
x
y
z
Demonstration of positive and negative logic

 Chapter 3 
 Gate-Level Minimization 
 3.1  INT R OD U C T IO N 
 Gate-level minimization is the design task of finding an optimal gate-level implementa-
tion of the Boolean functions describing a digital circuit. This task is well understood, 
but is difficult to execute by manual methods when the logic has more than a few inputs. 
Fortunately, computer-based logic synthesis tools can minimize a large set of Boolean 
equations efficiently and quickly. Nevertheless, it is important that a designer understand 
the underlying mathematical description and solution of the problem. This chapter serves 
as a foundation for your understanding of that important topic and will enable you to 
execute a manual design of simple circuits, preparing you for skilled use of modern 
design tools. The chapter will also introduce a hardware description language that is used 
by modern design tools. 
 3.2  T H E M A P ME T H O D 
 The complexity of the digital logic gates that implement a Boolean function is directly 
related to the complexity of the algebraic expression from which the function is imple-
mented. Although the truth table representation of a function is unique, when it is expressed 
algebraically it can appear in many different, but equivalent, forms. Boolean expressions may 
be simplified by algebraic means as discussed in Section 2.4. However, this procedure of 
minimization is awkward because it lacks specific rules to predict each succeeding step in 
the manipulative process. The map method presented here provides a simple, straightforward 
procedure for minimizing Boolean functions. This method may be regarded as a pictorial 
form of a truth table. The map method is also known as the  Karnaugh map or  K-map . 

74  Chapter 3  Gate-Level Minimization
 A K-map is a diagram made up of squares, with each square representing one minterm 
of the function that is to be minimized. Since any Boolean function can be expressed as a 
sum of minterms, it follows that a Boolean function is recognized graphically in the map 
from the area enclosed by those squares whose minterms are included in the function. In 
fact, the map presents a visual diagram of all possible ways a function may be expressed 
in standard form. By recognizing various patterns, the user can derive alternative algebraic 
expressions for the same function, from which the simplest can be selected. 
 The simplified expressions produced by the map are always in one of the two standard 
forms: sum of products or product of sums. It will be assumed that the simplest algebraic 
expression is an algebraic expression with a minimum number of terms and with the 
smallest possible number of literals in each term. This expression produces a circuit 
diagram with a minimum number of gates and the minimum number of inputs to each 
gate. We will see subsequently that the simplest expression is not unique: It is sometimes 
possible to find two or more expressions that satisfy the minimization criteria. In that 
case, either solution is satisfactory. 
 Two-Variable K-Map 
 The two-variable map is shown in  Fig.  3.1 (a). There are four minterms for two variables; 
hence, the map consists of four squares, one for each minterm. The map is redrawn in 
(b) to show the relationship between the squares and the two variables  x and  y . The 0 
and 1 marked in each row and column designate the values of variables. Variable  x 
appears primed in row 0 and unprimed in row 1. Similarly,  y appears primed in column 
0 and unprimed in column 1. 
 If we mark the squares whose minterms belong to a given function, the two-variable 
map becomes another useful way to represent any one of the 16 Boolean functions of 
two variables. As an example, the function  xy is shown in  Fig.  3.2 (a). Since  xy is equal to 
 m3, a 1 is placed inside the square that belongs to  m3. Similarly, the function  x + y is 
represented in the map of  Fig.  3.2 (b) by three squares marked with 1’s. These squares 
are found from the minterms of the function: 
 m1 + m2 + m3 = xy + xy + xy = x + y 
m0
m1
m2
m3
(a)
y
x y
x
xy
m0
xy
m1
xy
m2
xy
m3
(b)
 Two-variable K-map 

Section 3.2  The Map Method  75
 The three squares could also have been determined from the intersection of variable 
 x in the second row and variable  y in the second column, which encloses the area 
belonging to  x or  y . In each example, the minterms at which the function is asserted are 
marked with a 1. 
 Three-Variable K-Map 
 A three-variable K-map is shown in  Fig.  3.3 . There are eight minterms for three binary 
variables; therefore, the map consists of eight squares. Note that the minterms are 
arranged, not in a binary sequence, but in a sequence similar to the Gray code ( Table  1.6 ). 
The characteristic of this sequence is that  only one bit changes in value from one adjacent 
column to the next. The map drawn in part (b) is marked with numbers in each row and 
each column to show the relationship between the squares and the three variables. For 
example, the square assigned to  m5 corresponds to row 1 and column 01. When these two 
numbers are concatenated, they give the binary number 101, whose decimal equivalent 
is 5. Each cell of the map corresponds to a unique minterm, so another way of looking at 
square  m5 = xyz is to consider it to be in the row marked  x and the column belonging 
to  yz (column 01). Note that there are four squares in which each variable is equal to 1 
and four in which each is equal to 0. The variable appears unprimed in the former four 
x y
m0
m1
m2
m3
x
y
x y
y
x
x
y
(a) xy
(b) x  y
m0
m1
m2
m3
 Representation of functions in the map 
(a)
m0
m1
m3
m2
m4
m5
m7
m6
z
y
x
yz
x
xyz
xyz
xyz
xyz
xyz
xyz
xyz
xyz
m0
m1
m3
m2
m4
m5
m7
m6
(b)
 Three-variable K-map 

76  Chapter 3  Gate-Level Minimization
squares and primed in the latter. For convenience, we write the variable with its letter 
symbol under the four squares in which it is unprimed. 
 To understand the usefulness of the map in simplifying Boolean functions, we must 
recognize the basic property possessed by adjacent squares:  Any two adjacent squares 
in the map differ by only one variable, which is primed in one square and unprimed in 
the other. For example,  m5 and  m7 lie in two adjacent squares. Variable  y is primed in 
 m5 and unprimed in  m7, whereas the other two variables are the same in both squares. 
From the postulates of Boolean algebra, it follows that the sum of two minterms in 
adjacent squares can be simplified to a single product term consisting of only two liter-
als. To clarify this concept, consider the sum of two adjacent squares such as  m5 and  m7: 
 m5 + m7 = xyz + xyz = xz(y + y) = xz 
 Here, the two squares differ by the variable  y , which can be removed when the sum of 
the two minterms is formed. Thus, any two minterms in adjacent squares (vertically or 
horizontally, but not diagonally, adjacent) that are ORed together will cause a removal 
of the dissimilar variable. The next four examples explain the procedure for minimizing 
a Boolean function with a K-map. 
 EXAMPLE 3.1 
 Simplify the Boolean function 
 F (x, y, z) = (2, 3, 4, 5) 
 First, a 1 is marked in each minterm square that represents the function. This is shown 
in  Fig.  3.4 , in which the squares for minterms 010, 011, 100, and 101 are marked with 1’s. 
The next step is to find possible adjacent squares. These are indicated in the map by two 
shaded rectangles, each enclosing two 1’s. The upper right rectangle represents the area 
enclosed by  xy. This area is determined by observing that the two-square area is in row 
0, corresponding to  x, and the last two columns, corresponding to  y . Similarly, the lower 
left rectangle represents the product term  xy. (The second row represents  x and the 
two left columns represent  y. ) The sum of four minterms can be replaced by a sum of 
x
yz
m0
m1
m3
m2
m4
m5
m7
m6
xy
xy
z
y
x
 Map for  Example  3.1 ,  F (x, y, z) = (2, 3, 4, 5) = xy + xy 

Section 3.2  The Map Method  77
only two product terms. The logical sum of these two product terms gives the simplified 
expression 
 F = xy + xy 
■
 In certain cases, two squares in the map are considered to be adjacent even though 
they do not touch each other. In  Fig.  3.3 (b),  m0 is adjacent to  m2 and  m4 is adjacent to 
 m6 because their minterms differ by one variable. This difference can be readily verified 
algebraically: 
 m0 + m2 = xyz + xyz = xz(y + y) = xz 
 m4 + m6 = xyz + xyz  =  xz + (y + y) = xz 
 Consequently, we must modify the definition of adjacent squares to include this and 
other similar cases. We do so by considering the map as being drawn on a surface in 
which the right and left edges touch each other to form adjacent squares. 
 EXAMPLE 3.2 
 Simplify the Boolean function 
 F (x, y, z) = (3, 4, 6, 7) 
 The map for this function is shown in  Fig.  3.5 . There are four squares marked with 1’s, 
one for each minterm of the function. Two adjacent squares are combined in the third 
column to give a two-literal term  yz . The remaining two squares with 1’s are also adja-
cent by the new definition. These two squares, when combined, give the two-literal term 
 xz. The simplified function then becomes 
 F = yz + xz 
z
y
x
yz
x
m0
m1
m3
m2
m6
m7
m5
m4
yz
xyz
xyz
Note: xyz  xyz  xz
 Map for  Example  3.2 ,  F (x, y, z) = (3, 4, 6, 7) = yz + xz 
■

78  Chapter 3  Gate-Level Minimization
 Consider now any combination of four adjacent squares in the three-variable map. 
Any such combination represents the logical sum of four minterms and results in an 
expression with only one literal. As an example, the logical sum of the four adjacent 
minterms 0, 2, 4, and 6 reduces to the single literal term  z: 
 m0 + m2 + m4 + m6 = xyz + xyz + xyz + xyz
= xz(y + y) + xz(y + y)
= xz + xz = z(x + x) = z 
 The number of adjacent squares that may be combined must always represent a 
number that is a power of two, such as 1, 2, 4, and 8. As more adjacent squares are com-
bined, we obtain a product term with fewer literals. 
 One square represents one minterm, giving a term with three literals. 
 Two adjacent squares represent a term with two literals. 
 Four adjacent squares represent a term with one literal. 
 Eight adjacent squares encompass the entire map and produce a function that is 
always equal to 1. 
 EXAMPLE 3.3 
 Simplify the Boolean function 
 F (x, y, z) = (0, 2, 4, 5, 6) 
 The map for  F is shown in  Fig.  3.6 . First, we combine the four adjacent squares in the 
first and last columns to give the single literal term  z. The remaining single square, 
representing minterm 5, is combined with an adjacent square that has already been used 
once. This is not only permissible, but rather desirable, because the two adjacent squares 
give the two-literal term  xy and the single square represents the three-literal minterm 
 xyz. The simplified function is 
 F = z + xy 
Note: yz  yz  z
z
y
x
yz
x
xy
yz
yz
m0
m1
m3
m2
m6
m7
m5
m4
 Map for  Example  3.3 ,  F (x, y, z) = (0, 2, 4, 5, 6) = z + xy 
■

Section 3.2  The Map Method  79
 If a function is not expressed in sum-of-minterms form, it is possible to use the map to 
obtain the minterms of the function and then simplify the function to an expression with a 
minimum number of terms. It is necessary, however, to make sure that the algebraic expres-
sion is in sum-of-products form. Each product term can be plotted in the map in one, two, 
or more squares. The minterms of the function are then read directly from the map. 
 EXAMPLE 3.4 
 For the Boolean function 
 F = AC + AB + ABC + BC 
 
(a)  Express this function as a sum of minterms. 
 
(b)  Find the minimal sum-of-products expression. 
 Note that F is a sum of products. Three product terms in the expression have two literals 
and are represented in a three-variable map by two squares each. The two squares cor-
responding to the first term,  AC, are found in  Fig.  3.7 from the coincidence of  A (first 
row) and  C (two middle columns) to give squares 001 and 011. Note that, in marking 
1’s in the squares, it is possible to find a 1 already placed there from a preceding term. 
This happens with the second term,  AB, which has 1’s in squares 011 and 010. Square 
011 is common with the first term,  AC, though, so only one 1 is marked in it. Continu-
ing in this fashion, we determine that the term  ABC belongs in square 101, correspond-
ing to minterm 5, and the term  BC has two 1’s in squares 011 and 111. The function has 
a total of five minterms, as indicated by the five 1’s in the map of  Fig.  3.7 .  The minterms 
are read directly from the map to be 1, 2, 3, 5, and 7. The function can be expressed in 
sum-of-minterms form as 
 F (A, B, C) = (1, 2, 3, 5, 7) 
 The sum-of-products expression, as originally given, has too many terms. It can be 
simplified, as shown in the map, to an expression with only two terms: 
 F = C + AB 
C
B
A BC
A
AB
C
m0
m1
m3
m2
m6
m7
m5
m4
 Map of  Example  3.4 ,  AC  AB  ABC  BC  C  AB 
■

80  Chapter 3  Gate-Level Minimization
 3.3  FOU R -VA R IA B L E K - MA P 
 The map for Boolean functions of four binary variables (w, x, y, z) is shown in  Fig.  3.8 . 
In Fig. 3.8(a) are listed the 16 minterms and the squares assigned to each. In Fig. 3.8(b), 
the map is redrawn to show the relationship between the squares and the four variables. 
The rows and columns are numbered in a Gray code sequence, with only one digit 
changing value between two adjacent rows or columns. The minterm corresponding to 
each square can be obtained from the concatenation of the row number with the column 
number. For example, the numbers of the third row (11) and the second column (01), 
when concatenated, give the binary number 1101, the binary equivalent of decimal 13. 
Thus, the square in the third row and second column represents minterm  m13. 
 The map minimization of four-variable Boolean functions is similar to the method 
used to minimize three-variable functions. Adjacent squares are defined to be squares 
next to each other. In addition, the map is considered to lie on a surface with the top 
and bottom edges, as well as the right and left edges, touching each other to form adja-
cent squares. For example,  m0 and  m2 form adjacent squares, as do  m3 and  m11. The 
combination of adjacent squares that is useful during the simplification process is easily 
determined from inspection of the four-variable map: 
 One square represents one minterm, giving a term with four literals. 
 Two adjacent squares represent a term with three literals. 
 Four adjacent squares represent a term with two literals. 
 Eight adjacent squares represent a term with one literal. 
 Sixteen adjacent squares produce a function that is always equal to 1. 
 No other combination of squares can simplify the function. The next two examples 
show the procedure used to simplify four-variable Boolean functions. 
m0
m1
m3
m2
m4
m5
m7
m6
m12
m13
m15
m14
m8
m9
m11
m10
(a)
(b)
m0
m1
m3
m2
m6
m7
m5
m4
m14
m15
m13
m12
m10
m11
m9
m8
x
y
wx yz
w
z
wxyz wxyz
wxyz
wxyz
wxyz
wxyz
wxyz
wxyz
wxyz
wxyz
wxyz
wxyz
wxyz
wxyz
wxyz
wxyz
 Four-variable map 

Section 3.3  Four-Variable K-Map  81
 EXAMPLE 3.5 
 Simplify the Boolean function 
 F (w, x, y, z) = (0, 1, 2, 4, 5, 6, 8, 9, 12, 13, 14) 
 Since the function has four variables, a four-variable map must be used. The minterms 
listed in the sum are marked by 1’s in the map of  Fig.  3.9 . Eight adjacent squares marked 
with 1’s can be combined to form the one literal term  y. The remaining three 1’s on the 
right cannot be combined to give a simplified term; they must be combined as two or 
four adjacent squares. The larger the number of squares combined, the smaller is the 
number of literals in the term. In this example, the top two 1’s on the right are combined 
with the top two 1’s on the left to give the term  wz . Note that it is permissible to use 
the same square more than once. We are now left with a square marked by 1 in the third 
row and fourth column (square 1110). Instead of taking this square alone (which will 
give a term with four literals), we combine it with squares already used to form an area 
of four adjacent squares. These squares make up the two middle rows and the two end 
columns, giving the term  xz. The simplified function is 
 F = y + wz + xz 
Note: wyz  wyz  wz
  xyz  xyz  xz
m0
m1
m3
m2
m6
m7
m5
m4
m12
m8
m13
m9
m15
m14
m10
m11
x
y
wx yz
w
z
wyz
xyz
wyz
xyz
y
 Map for  Example  3.5 ,  F(w, x, y, z)  (0,1, 2, 4, 5, 6, 8, 9, 12, 13, 14) 
 y wz  xz 
■
 EXAMPLE 3.6 
 Simplify the Boolean function 
 F = ABC + BCD + ABCD + ABC 
 The area in the map covered by this function consists of the squares marked with 1’s in 
 Fig.  3.10 . The function has four variables and, as expressed, consists of three terms with 

82  Chapter 3  Gate-Level Minimization
three literals each and one term with four literals. Each term with three literals is repre-
sented in the map by two squares. For example,  ABC is represented in squares 0000 
and 0001. The function can be simplified in the map by taking the 1’s in the four corners 
to give the term  BD. This is possible because these four squares are adjacent when the 
map is drawn in a surface with top and bottom edges, as well as left and right edges, 
touching one another. The two left-hand 1’s in the top row are combined with the two 
1’s in the bottom row to give the term  BC. The remaining 1 may be combined in a two-
square area to give the term  ACD. The simplified function is 
 F = BD + BC + ACD 
■
 Prime Implicants 
 In choosing adjacent squares in a map, we must ensure that (1) all the minterms of the 
function are covered when we combine the squares, (2) the number of terms in the 
expression is minimized, and (3) there are no redundant terms (i.e., minterms already 
covered by other terms). Sometimes there may be two or more expressions that satisfy 
the simplification criteria. The procedure for combining squares in the map may be made 
more systematic if we understand the meaning of two special types of terms.  A  prime 
implicant  is a product term obtained by combining the maximum possible number of 
adjacent squares in the map. If a minterm in a square is covered by only one prime 
implicant, that prime implicant is said to be  essential. 
Note: ABCD  ABCD  ABD
 
ABCD  ABCD  ABD
 
ABD  ABD  BD
 
ABC  ABC  BC
m0
m1
m3
m2
m6
m7
m5
m4
m12
m8
m13
m9
m15
m14
m10
m11
B
C
AB
CD
A
D
ABCD
ABCD
ABCD
ABCD
ABC
ABC
ACD
 Map for  Example  3.6 ,  ABC  BCD  ABCD  ABC  BD  BC  ACD 

Section 3.3  Four-Variable K-Map  83
 The prime implicants of a function can be obtained from the map by combining all 
possible maximum numbers of squares. This means that a single 1 on a map represents 
a prime implicant if it is not adjacent to any other 1’s. Two adjacent 1’s form a prime 
implicant, provided that they are not within a group of four adjacent squares. Four 
adjacent 1’s form a prime implicant if they are not within a group of eight adjacent 
squares, and so on. The essential prime implicants are found by looking at each square 
marked with a 1 and checking the number of prime implicants that cover it. The prime 
implicant is essential if it is the only prime implicant that covers the minterm. 
 Consider the following four-variable Boolean function: 
 F(A, B, C, D) = (0, 2, 3, 5, 7, 8, 9, 10, 11, 13, 15) 
 The minterms of the function are marked with 1’s in the maps of  Fig.  3.11 . The partial 
map (Fig. 3.11(a)) shows two essential prime implicants, each formed by collapsing four 
cells into a term having only two literals. One term is essential because there is only one 
way to include minterm  m0 within four adjacent squares. These four squares define the 
term  BD. Similarly, there is only one way that minterm  m5 can be combined with four 
adjacent squares, and this gives the second term  BD . The two essential prime implicants 
cover eight minterms. The three minterms that were omitted from the partial map 
( m3, m9, and  m11 ) must be considered next. 
prime implicants. Minterm  m3 can be covered with either prime implicant  CD or prime 
implicant  BC. Minterm  m9 can be covered with either  AD or  AB. Minterm  m11 is 
covered with any one of the four prime implicants. The simplified expression is obtained 
from the logical sum of the two essential prime implicants and any two prime implicants 
(b) Prime implicants CD, BC,
AD, and AB
AB CD
BC
AB
AD
m0
m1
m3
m2
m12
m13
m15
m14
m8
m9
m11
m10
m4
m5
m7
m6
C
A
B
CD
Note: ABCD  ABCD  ABD
 
ABCD  ABCD  ABD
 
ABD  ABD  BD
(a) Essential prime implicants
BD and BD
ABCD
ABCD
ABCD
ABCD
BD
D
D
m0
m1
m3
m2
m12
m13
m15
m14
m8
m9
m11
m10
m4
m5
m7
m6
B
C
AB CD
A
 Simplification using prime implicants 

84  Chapter 3  Gate-Level Minimization
that cover minterms  m3, m9, and  m11. There are four possible ways that the function can 
be expressed with four product terms of two literals each: 
  F = BD + BD + CD + AD 
  = BD + BD + CD + AB 
 = BD + BD + BC + AD 
 = BD + BD + BC + AB 
 The previous example has demonstrated that the identification of the prime implicants in 
the map helps in determining the alternatives that are available for obtaining a simplified 
expression. 
 The procedure for finding the simplified expression from the map requires that we 
first determine all the essential prime implicants. The simplified expression is obtained 
from the logical sum of all the essential prime implicants, plus other prime implicants 
that may be needed to cover any remaining minterms not covered by the essential prime 
implicants. Occasionally, there may be more than one way of combining squares, and 
each combination may produce an equally simplified expression. 
 Five-Variable Map 
 Maps for more than four variables are not as simple to use as maps for four or fewer 
variables. A five-variable map needs 32 squares and a six-variable map needs 64 squares. 
When the number of variables becomes large, the number of squares becomes excessive 
and the geometry for combining adjacent squares becomes more involved. 
 Maps for more than four variables are difficult to use and will not be considered here. 
 3.4  P R ODU C T- O F - S U M S S IM P L I FI CATI O N 
 The minimized Boolean functions derived from the map in all previous examples were 
expressed in sum-of-products form. With a minor modification, the product-of-sums 
form can be obtained. 
 The procedure for obtaining a minimized function in product-of-sums form follows 
from the basic properties of Boolean functions. The 1’s placed in the squares of the 
map represent the minterms of the function. The minterms not included in the standard 
sum-of-products form of a function denote the complement of the function. From this 
observation, we see that the complement of a function is represented in the map by 
the squares not marked by 1’s. If we mark the empty squares by 0’s and combine them 
into valid adjacent squares, we obtain a simplified sum-of-products expression of the 
complement of the function (i.e., of  F ). The complement of  F gives us back the func-
tion  F in product-of-sums form (a consequence of DeMorgan’s theorem). Because of 
the generalized DeMorgan’s theorem, the function so obtained is automatically in 
product-of-sums form. The best way to show this is by example. 

88  Chapter 3  Gate-Level Minimization
 and then marking 0’s in the squares representing the minterms of  F. The remaining 
squares are marked with 1’s. 
 3.5  DON’ T-C A R E C O N D IT IO N S 
 The logical sum of the minterms associated with a Boolean function specifies the con-
ditions under which the function is equal to 1. The function is equal to 0 for the rest of 
the minterms. This pair of conditions assumes that all the combinations of the values 
for the variables of the function are valid. In practice, in some applications the function 
is not specified for certain combinations of the variables. As an example, the four-bit 
binary code for the decimal digits has six combinations that are not used and conse-
quently are considered to be unspecified. Functions that have unspecified outputs for 
some input combinations are called  incompletely specified functions . In most applica-
tions, we simply don’t care what value is assumed by the function for the unspecified 
minterms. For this reason, it is customary to call the unspecified minterms of a function 
 don’t-care conditions . These don’t-care conditions can be used on a map to provide 
further simplification of the Boolean expression. 
 A don’t-care minterm is a combination of variables whose logical value is not speci-
fied. Such a minterm cannot be marked with a 1 in the map, because it would require 
that the function always be a 1 for such a combination. Likewise, putting a 0 on the 
square requires the function to be 0. To distinguish the don’t-care condition from 1’s and 
0’s, an  X is used. Thus, an  X inside a square in the map indicates that we don’t care 
whether the value of 0 or 1 is assigned to  F for the particular minterm. 
 In choosing adjacent squares to simplify the function in a map, the don’t-care min-
terms may be assumed to be either 0 or 1. When simplifying the function, we can choose 
to include each don’t-care minterm with either the 1’s or the 0’s, depending on which 
combination gives the simplest expression. 
 EXAMPLE 3.8 
 Simplify the Boolean function 
 F (w, x, y, z) = (1, 3, 7, 11, 15) 
 which has the don’t-care conditions 
 d (w, x, y, z) = (0, 2, 5) 
 The minterms of  F are the variable combinations that make the function equal to 1. The 
minterms of  d are the don’t-care minterms that may be assigned either 0 or 1. The map 
simplification is shown in  Fig.  3.15 . The minterms of  F are marked by 1’s, those of  d are 
marked by X’s, and the remaining squares are filled with 0’s. To get the simplified expres-
sion in sum-of-products form, we must include all five 1’s in the map, but we may or may 
not include any of the X’s, depending on the way the function is simplified. The term  yz 
covers the four minterms in the third column. The remaining minterm,  m1, can be combined 

Section 3.5  Don’t-Care Conditions  89
with minterm  m3 to give the three-literal term  wxz. However, by including one or 
two adjacent X’s we can combine four adjacent squares to give a two-literal term. In 
Fig. 3.15(a), don’t-care minterms 0 and 2 are included with the 1’s, resulting in the simpli-
fied function 
 F = yz + wx 
 In Fig. 3.15(b), don’t-care minterm 5 is included with the 1’s, and the simplified func-
tion is now 
 F = yz + wz 
 Either one of the preceding two expressions satisfies the conditions stated for this 
 example. 
■
 The previous example has shown that the don’t-care minterms in the map are ini-
tially marked with X’s and are considered as being either 0 or 1. The choice between 0 
and 1 is made depending on the way the incompletely specified function is simplified. 
Once the choice is made, the simplified function obtained will consist of a sum of min-
terms that includes those minterms which were initially unspecified and have been 
chosen to be included with the 1’s. Consider the two simplified expressions obtained 
in  Example  3.8 : 
 F (w, x, y, z) = yz + wx = (0, 1, 2, 3, 7, 11, 15)
F (w, x, y, z) = yz + wz = (1, 3, 5, 7, 11, 15) 
 Both expressions include minterms 1, 3, 7, 11, and 15 that make the function  F equal 
to 1. The don’t-care minterms 0, 2, and 5 are treated differently in each expression. 
m0
m1
m3
m2
m12
m13
m15
m14
m8
m9
m11
m10
m4
m5
m7
m6
x
y
wx
yz
w
X
X
X
wz
yz
z
wx
yz
z
X
X
X
wx
yz
x
w
y
m0
m1
m3
m2
m12
m13
m15
m14
m8
m9
m11
m10
m4
m5
m7
m6
(a) F  yz  wx
(b) F  yz  wz
 Example with don’t-care conditions 

90  Chapter 3  Gate-Level Minimization
The first expression includes minterms 0 and 2 with the 1’s and leaves minterm 5 with 
the 0’s. The second expression includes minterm 5 with the 1’s and leaves minterms 0 
and 2 with the 0’s. The two expressions represent two functions that are not algebra-
ically equal. Both cover the specified minterms of the function, but each covers dif-
ferent don’t-care minterms. As far as the incompletely specified function is concerned, 
either expression is acceptable because the only difference is in the value of  F for the 
don’t-care minterms. 
 It is also possible to obtain a simplified product-of-sums expression for the function 
of  Fig.  3.15 . In this case, the only way to combine the 0’s is to include don’t-care minterms 
0 and 2 with the 0’s to give a simplified complemented function: 
 F = z + wy 
 Taking the complement of  F gives the simplified expression in product-of-sums form: 
 F (w, x, y, z) = z(w + y) = (1, 3, 5, 7, 11, 15) 
 In this case, we include minterms 0 and 2 with the 0’s and minterm 5 with the 1’s. 
 3.6  NA ND A N D N O R IM P L E MEN TATI O N 
 Digital circuits are frequently constructed with NAND or NOR gates rather than with 
AND and OR gates. NAND and NOR gates are easier to fabricate with electronic 
components and are the basic gates used in all IC digital logic families. Because of the 
prominence of NAND and NOR gates in the design of digital circuits, rules and proce-
dures have been developed for the conversion from Boolean functions given in terms 
of AND, OR, and NOT into equivalent NAND and NOR logic diagrams. 
 NAND Circuits 
 The NAND gate is said to be a  universal gate because any logic circuit can be imple-
mented with it. To show that any Boolean function can be implemented with NAND 
gates, we need only show that the logical operations of AND, OR, and complement can 
be obtained with NAND  gates alone. This is indeed shown in  Fig.  3.16 . The complement 
operation is obtained from a one-input NAND gate that behaves exactly like an inverter. 
The AND operation requires two NAND gates. The first produces the NAND operation 
and the second inverts the logical sense of the signal. The OR operation is achieved 
through a NAND gate with additional inverters in each input. 
 A convenient way to implement a Boolean function with NAND gates is to obtain 
the simplified Boolean function in terms of Boolean operators and then convert the 
function to NAND logic. The conversion of an algebraic expression from AND, OR, and 
complement to NAND can be done by simple circuit manipulation techniques that 
change AND–OR diagrams to NAND diagrams. 
 To facilitate the conversion to NAND logic, it is convenient to define an alternative 
graphic symbol for the gate. Two equivalent graphic symbols for the NAND gate are 
shown in  Fig.  3.17 . The AND-invert symbol has been defined previously and consists 

Section 3.6  NAND and NOR Implementation  91
of an AND graphic symbol followed by a small circle negation indicator referred to as 
a bubble. Alternatively, it is possible to represent a NAND gate by an OR graphic 
symbol that is preceded by a bubble in each input. The invert-OR symbol for the 
NAND gate follows DeMorgan’s theorem and the convention that the negation indica-
tor (bubble) denotes complementation. The two graphic symbols’ representations are 
useful in the analysis and design of NAND circuits. When both symbols are mixed in 
the same diagram, the circuit is said to be in mixed notation. 
 Two-Level Implementation 
 The implementation of Boolean functions with NAND gates requires that the functions 
be in sum-of-products form. To see the relationship between a sum-of-products expres-
sion and its equivalent NAND implementation, consider the logic diagrams drawn in 
 Fig.  3.18 . All three diagrams are equivalent and implement the function 
 F = AB + CD 
 The function is implemented in Fig. 3.18(a) with AND and OR gates. In Fig. 3.18(b), the 
AND gates are replaced by NAND gates and the OR gate is replaced by a NAND gate 
with an OR-invert graphic symbol. Remember that a bubble denotes complementation 
and two bubbles along the same line represent double complementation, so both can be 
removed. Removing the bubbles on the gates of (b) produces the circuit of (a). Therefore, 
the two diagrams implement the same function and are equivalent. 
(xy)  x  y
y
x
x
x
y
xy
x
Inverter
AND
OR
 Logic operations with NAND gates 
x
y
z
(xyz)
x
y
z
x  y  z  (xyz)
(a) AND-invert 
(b) Invert-OR
 Two graphic symbols for a three-input NAND gate 

92  Chapter 3  Gate-Level Minimization
 In  Fig.  3.18 (c), the output NAND gate is redrawn with the AND-invert graphic symbol. 
In drawing NAND logic diagrams, the circuit shown in either Fig. 3.18(b) or (c) is accept-
able. The one in Fig. 3.18(b) is in mixed notation and represents a more direct relationship 
to the Boolean expression it implements. The NAND implementation in  Fig.  3.18 (c) can 
be verified algebraically. The function it implements can easily be converted to sum- of-
products form by DeMorgan’s theorem: 
 F = ((AB)(CD)) = AB + CD 
 EXAMPLE 3.9 
 Implement the following Boolean function with NAND gates: 
 F (x, y, z) = (1, 2, 3, 4, 5, 7) 
 The first step is to simplify the function into sum-of-products form. This is done by 
means of the map of  Fig.  3.19 (a), from which the simplified function is obtained: 
 F = xy + xy + z 
 The two-level NAND implementation is shown in  Fig.  3.19 (b) in mixed notation. Note 
that input  z must have a one-input NAND gate (an inverter) to compensate for the 
bubble in the second-level gate. An alternative way of drawing the logic diagram is given 
in  Fig.  3.19 (c). Here, all the NAND gates are drawn with the same graphic symbol. The 
inverter with input  z has been removed, but the input variable is complemented and 
denoted by  z. 
■
(a)
C
D
A
B
F
F
(b)
C
D
A
B
(c)
C
D
A
B
F
 Three ways to implement  F = AB + CD 

Section 3.6  NAND and NOR Implementation  93
 The procedure described in the previous example indicates that a Boolean function 
can be implemented with two levels of NAND gates. The procedure for obtaining the 
logic diagram from a Boolean function is as follows: 
 
1.  Simplify the function and express it in sum-of-products form. 
 
2.  Draw a NAND gate for each product term of the expression that has at least two 
literals. The inputs to each NAND gate are the literals of the term. This procedure 
produces a group of first-level gates. 
 
3.  Draw a single gate using the AND-invert or the invert-OR graphic symbol in the 
second level, with inputs coming from outputs of first-level gates. 
 
4.  A term with a single literal requires an inverter in the first level. However, if the 
single literal is complemented, it can be connected directly to an input of the second-
level NAND gate. 
 Multilevel NAND Circuits 
 The standard form of expressing Boolean functions results in a two-level implementation. 
There are occasions, however, when the design of digital systems results in gating structures 
with three or more levels. The most common procedure in the design of multilevel circuits 
is to express the Boolean function in terms of AND, OR, and complement operations. The 
function can then be implemented with AND and OR gates. After that, if necessary, it can 
be converted into an all-NAND circuit. Consider, for example, the Boolean function 
 F = A (CD + B) + BC 
x
y
x
y
z
(b)
(a)
x
y
x
y
z
(c)
F
F
z
y
x
yz
x
xy
xy
z
m4
m5
m7
m6
m0
m1
m3
m2
F  xy  xy  z
 Solution to  Example  3.9 

94  Chapter 3  Gate-Level Minimization
 Although it is possible to remove the parentheses and reduce the expression into a standard 
sum-of-products form, we choose to implement it as a multilevel circuit for illustration. The 
AND–OR implementation is shown in  Fig.  3.20 (a). There are four levels of gating in the 
circuit. The first level has two AND gates. The second level has an OR gate followed by an 
AND gate in the third level and an OR gate in the fourth level. A logic diagram with a pat-
tern of alternating levels of AND and OR gates can easily be converted into a NAND circuit 
with the use of mixed notation, shown in  Fig.  3.20 (b). The procedure is to change every AND 
gate to an AND-invert graphic symbol and every OR gate to an invert-OR graphic symbol. 
The NAND circuit performs the same logic as the AND–OR diagram as long as there are 
two bubbles along the same line. The bubble associated with input  B causes an extra comple-
mentation, which must be compensated for by changing the input literal to  B. 
 The general procedure for converting a multilevel AND–OR diagram into an all-NAND 
diagram using mixed notation is as follows: 
 
1.  Convert all AND gates to NAND gates with AND-invert graphic symbols. 
 
2.  Convert all OR gates to NAND gates with invert-OR graphic symbols. 
 
3.  Check all the bubbles in the diagram. For every bubble that is not compensated 
by another small circle along the same line, insert an inverter (a one-input NAND 
gate) or complement the input literal. 
 As another example, consider the multilevel Boolean function 
 F = (AB + AB)(C + D) 
(a) AND–OR gates 
(b) NAND gates
F
B
C
D
B
A
C
F
C
D
B
A
B
C
 Implementing  F = A(CD + B) + BC 

Section 3.6  NAND and NOR Implementation  95
 The AND–OR implementation of this function is shown in  Fig.  3.21 (a) with three levels 
of gating. The conversion to NAND with mixed notation is presented in Fig. 3.21(b) of 
the diagram. The two additional bubbles associated with inputs  C and  D cause these 
two literals to be complemented to  C and  D . The bubble in the output NAND gate 
complements the output value, so we need to insert an inverter gate at the output in 
order to complement the signal again and get the original value back. 
 NOR Implementation 
 The NOR operation is the dual of the NAND operation. Therefore, all procedures and 
rules for NOR logic are the duals of the corresponding procedures and rules developed 
for NAND logic. The NOR gate is another universal gate that can be used to implement 
any Boolean function. The implementation of the complement, OR, and AND operations 
with NOR gates is shown in  Fig.  3.22 . The complement operation is obtained from a one-
input NOR gate that behaves exactly like an inverter. The OR operation requires two NOR 
gates, and the AND operation is obtained with a NOR gate that has inverters in each input. 
 The two graphic symbols for the mixed notation are shown in  Fig.  3.23 . The OR-invert 
symbol defines the NOR operation as an OR followed by a complement. The invert-AND 
symbol complements each input and then performs an AND operation. The two symbols 
designate the same NOR operation and are logically identical because of  DeMorgan’s 
theorem. 
F
A
B
A
B
C
D
(a) AND–OR gates
F
A
B
A
B
C
D
(b) NAND gates
 Implementing  F = (AB + AB) (C + D) 

96  Chapter 3  Gate-Level Minimization
 A two-level implementation with NOR gates requires that the function be simplified 
into product-of-sums form. Remember that the simplified product-of-sums expression 
is obtained from the map by combining the 0’s and complementing. A product-of-sums 
expression is implemented with a first level of OR gates that produce the sum terms 
followed by a second-level AND gate to produce the product. The transformation from 
the OR–AND diagram to a NOR diagram is achieved by changing the OR gates to 
NOR gates with OR-invert graphic symbols and the AND gate to a NOR gate with an 
invert-AND graphic symbol. A single literal term going into the second-level gate must 
be complemented.  Figure  3.24 shows the NOR implementation of a function expressed 
as a product of sums: 
 F = (A + B)(C + D)E 
 The OR–AND pattern can easily be detected by the removal of the bubbles along the 
same line. Variable  E is complemented to compensate for the third bubble at the input 
of the second-level gate. 
 The procedure for converting a multilevel AND–OR diagram to an all-NOR diagram 
is similar to the one presented for NAND gates. For the NOR case, we must convert 
each OR gate to an OR-invert symbol and each AND gate to an invert-AND symbol. 
Any bubble that is not compensated by another bubble along the same line needs an 
inverter, or the complementation of the input literal. 
 The transformation of the AND–OR diagram of  Fig.  3.21 (a) into a NOR diagram is 
shown in  Fig.  3.25 . The Boolean function for this circuit is 
 F = (AB + AB)(C + D) 
OR x
y
x  y
Inverter x
x
x
y
AND
(x  y)  xy
 Logic operations with NOR gates 
x
y
z
x
y
z
xyz  (x  y  z)
(x  y  z)
(a) OR-invert
(b) Invert-AND
 Two graphic symbols for the NOR gate 

Section 3.7  Other Two-Level Implementations  97
 The equivalent AND–OR diagram can be recognized from the NOR diagram by remov-
ing all the bubbles. To compensate for the bubbles in four inputs, it is necessary to 
complement the corresponding input literals. 
 3.7  OT H E R T W O - L E V E L IMPL EM E N TATI O N S 
 The types of gates most often found in integrated circuits are NAND and NOR gates. 
For this reason, NAND and NOR logic implementations are the most important from 
a practical point of view. Some (but not all) NAND or NOR gates allow the possibility 
of a wire connection between the outputs of two gates to provide a specific logic func-
tion. This type of logic is called  wired logic. For example, open-collector TTL NAND 
gates, when tied together, perform wired-AND logic. The wired-AND logic performed 
with two NAND gates is depicted in  Fig.  3.26 (a). The AND gate is drawn with the lines 
going through the center of the gate to distinguish it from a conventional gate. The 
wired-AND gate is not a physical gate, but only a symbol to designate the function 
obtained from the indicated wired connection. The logic function implemented by the 
circuit of  Fig.  3.26 (a) is 
 F = (AB) c (CD) = (AB + CD) = (A + B)(C + D) 
 and is called an AND–OR–INVERT function. 
A
B
C
D
E
F
 Implementing  F = (A + B)(C + D)E 
C
F
D
A
B
A
B
 Implementing  F = (AB + AB)(C + D) with NOR gates 

108  Chapter 3  Gate-Level Minimization
represents an odd function. The parity checker can be implemented with exclusive-
OR gates: 
 C = x { y { z { P
 
 The logic diagram of the parity checker is shown in  Fig.  3.34 (b). 
 It is worth noting that the parity generator can be implemented with the circuit of 
Fig.  3.34 (b) if the input  P is connected to logic 0 and the output is marked with  P . This is 
because  z { 0 = z, causing the value of  z to pass through the gate unchanged. The advan-
tage of this strategy is that the same circuit can be used for both parity generation and 
checking. 
 It is obvious from the foregoing example that parity generation and checking circuits 
always have an output function that includes half of the minterms whose numerical  values 
have either an odd or even number of 1’s. As a consequence, they can be  implemented 
with exclusive-OR gates. A function with an even number of 1’s is the complement of an 
odd function. It is implemented with exclusive-OR gates, except that the gate associated 
with the output must be an exclusive-NOR to provide the required complementation. 
 3.9  H A R DWA R E D E S C R IP T IO N L A N GUA GE 
 Manual methods for designing logic circuits are feasible only when the circuit is small. 
For anything else (i.e., a practical circuit), designers use computer-based design tools. 
Coupled with the correct-by-construction methodology, computer-based design tools 
 Even-Parity-Checker Truth Table 
 Four Bits 
Received 
 Parity Error 
Check 
 x 
 y 
 z 
 P 
 C 

Section 3.9  Hardware Description Language  109
leverage the creativity and the effort of a designer and reduce the risk of producing a 
flawed design. Prototype integrated circuits are too expensive and time consuming to 
build, so all modern design tools rely on a hardware description language to describe, 
design, and test a circuit in software before it is ever manufactured. 
 A  hardware description language (HDL) is a computer-based language that describes 
the hardware of digital systems in a textual form. It resembles an ordinary computer 
programming language, such as C, but is specifically oriented to describing hardware 
structures and the behavior of logic circuits. It can be used to represent logic diagrams, 
truth tables, Boolean expressions, and complex abstractions of the behavior of a digital 
system. One way to view an HDL is to observe that it describes a relationship between 
signals that are the inputs to a circuit and the signals that are the outputs of the circuit. 
For example, an HDL description of an AND gate describes how the logic value of the 
gate’s output is determined by the logic values of its inputs. 
 As a  documentation language, an HDL is used to represent and document digital 
systems in a form that can be read by both humans and computers and is suitable as 
an exchange language between designers. The language content can be stored, 
retrieved, edited, and transmitted easily and processed by computer software in 
an  efficient manner. 
 HDLs are used in several major steps in the design flow of an integrated circuit: 
design entry, functional simulation or verification, logic synthesis, timing verification, 
and fault simulation. 
 Design entry creates an HDL-based description of the functionality that is to be 
implemented in hardware. Depending on the HDL, the description can be in a variety 
of forms: Boolean logic equations, truth tables, a netlist of interconnected gates, or an 
abstract behavioral model. The HDL model may also represent a partition of a larger 
circuit into smaller interconnected and interacting functional units. 
 Logic simulation displays the behavior of a digital system through the use of a com-
puter. A simulator interprets the HDL description and either produces readable output, 
such as a time-ordered sequence of input and output signal values, or displays wave-
forms of the signals. The simulation of a circuit predicts how the hardware will behave 
before it is actually fabricated. Simulation detects functional errors in a design without 
having to physically create and operate the circuit. Errors that are detected during a 
simulation can be corrected by modifying the appropriate HDL statements. The stimu-
lus (i.e., the logic values of the inputs to a circuit) that tests the functionality of the design 
is called a  test bench. Thus, to simulate a digital system, the design is first described in 
an HDL and then verified by simulating the design and checking it with a test bench, 
which is also written in the HDL. An alternative and more complex approach relies on 
formal mathematical methods to prove that a circuit is functionally correct. We will focus 
exclusively on simulation. 
 Logic synthesis is the process of deriving a list of physical components and their 
interconnections (called a  netlist ) from the model of a digital system described in an 
HDL. The netlist can be used to fabricate an integrated circuit or to lay out a printed 
circuit board with the hardware counterparts of the gates in the list. Logic synthesis is 
similar to compiling a program in a conventional high-level language. The difference is 

110  Chapter 3  Gate-Level Minimization
that, instead of producing an object code, logic synthesis produces a database describing 
the elements and structure of a circuit. The database specifies how to fabricate a physi-
cal integrated circuit that implements in silicon the functionality described by statements 
made in an HDL. Logic synthesis is based on formal exact procedures that implement 
digital circuits and addresses that part of a digital design which can be automated with 
computer software. The design of today’s large, complex circuits is made possible by 
logic synthesis software. 
 Timing verification confirms that the fabricated, integrated circuit will operate at a 
specified speed. Because each logic gate in a circuit has a propagation delay, a signal 
transition at the input of a circuit cannot immediately cause a change in the logic value 
of the output of a circuit. Propagation delays ultimately limit the speed at which 
a circuit can operate. Timing verification checks each signal path to verify that it is 
not compromised by propagation delay. This step is done after logic synthesis specifies 
the actual devices that will compose a circuit and before the circuit is released for 
production. 
 In VLSI circuit design,  fault simulation compares the behavior of an ideal circuit with 
the behavior of a circuit that contains a process-induced flaw. Dust and other particu-
lates in the atmosphere of the clean room can cause a circuit to be fabricated with a 
fault. A circuit with a fault will not exhibit the same functionality as a fault-free circuit. 
Fault simulation is used to identify input stimuli that can be used to reveal the difference 
between the faulty circuit and the fault-free circuit. These test patterns will be used to 
test fabricated devices to ensure that only good devices are shipped to the customer. 
Test generation and fault simulation may occur at different steps in the design process, 
but they are always done before production in order to avoid the disaster of producing 
a circuit whose internal logic cannot be tested. 
 Companies that design integrated circuits use proprietary and public HDLs. In the 
public domain, there are two standard HDLs that are supported by the IEEE: VHDL 
and Verilog. VHDL is a Department of Defense–mandated language. (The  V in VHDL 
stands for the first letter in VHSIC, an acronym for very high-speed integrated circuit.) 
Verilog began as a proprietary HDL of Cadence Design Systems, but Cadence trans-
ferred control of Verilog to a consortium of companies and universities known as Open 
Verilog International (OVI) as a step leading to its adoption as an IEEE standard. 
VHDL is more difficult to learn than Verilog. Because Verilog is an easier language than 
VHDL to describe, learn, and use, we have chosen it for this book. However, the Verilog 
HDL descriptions listed throughout the book are not just about Verilog, but also serve 
to introduce a design methodology based on the concept of computer-aided modeling 
of digital systems by means of a typical hardware description language. Our emphasis 
will be on the modeling, verification, and synthesis (both manual and automated) of 
Verilog models of circuits having specified behavior. The Verilog HDL was initially 
approved as a standard HDL in 1995; revised and enhanced versions of the language 
were approved in 2001 and 2005. We will address only those features of Verilog, includ-
ing the latest standard, that support our discussion of HDL-based design methodology 
for integrated circuits. 

Section 3.9  Hardware Description Language  111
 Module Declaration 
 The language reference manual for the Verilog HDL presents a syntax that describes 
precisely the constructs that can be used in the language. In particular, a Verilog 
model is composed of text using keywords, of which there are about 100. Keywords 
are predefined lowercase identifiers that define the language constructs. Examples of 
keywords are  module, endmodule, input, output, wire, and, or, and  not. For clarity, 
keywords will be displayed in boldface in the text in all examples of code and wher-
ever it is appropriate to call attention to their use. Any text between two forward 
slashes ( // ) and the end of the line is interpreted as a comment and will have no effect 
on a simulation using the model. Multiline comments begin with / * and terminate 
with  * /. Blank spaces are ignored, but they may not appear within the text of a key-
word, a user-specified identifier, an operator, or the representation of a number. Ver-
ilog is case sensitive, which means that uppercase and lowercase letters are 
distinguishable (e.g.,  not is not the same as NOT). The term  module refers to the text 
enclosed by the keyword pair  module . . .  endmodule. A module is the fundamental 
descriptive unit in the Verilog language. It is declared by the keyword  module and 
must always be terminated by the keyword  endmodule. 
 Combinational logic can be described by a schematic connection of gates, by a set of 
Boolean equations, or by a truth table. Each type of description can be developed in 
Verilog. We will demonstrate each style, beginning with a simple example of a Verilog 
gate-level description to illustrate some aspects of the language. 
 The HDL description of the circuit of  Fig.  3.35 is shown in HDL  Example  3.1 . The 
first line of text is a comment (optional) providing useful information to the reader. The 
second line begins with the keyword  module and starts the declaration (description) of 
the module; the last line completes the declaration with the keyword  endmodule. The 
keyword  module is followed by a name and a list of ports. The name ( Simple_Circuit in 
this example) is an identifier. Identifiers are names given to modules, variables (e.g., a 
signal), and other elements of the language so that they can be referenced in the design. 
In general, we choose meaningful names for modules. Identifiers are composed of alpha-
numeric characters and the underscore (_), and are case sensitive. Identifiers must start 
with an alphabetic character or an underscore, but they cannot start with a number. 
A
w1
B
C
D
E
G1
G2
G3
 Circuit to demonstrate an HDL 

112  Chapter 3  Gate-Level Minimization
 The  port list of a module is the interface between the module and its environment. 
In this example, the ports are the inputs and outputs of the circuit. The logic values of 
the inputs to a circuit are determined by the environment; the logic values of the outputs 
are determined within the circuit and result from the action of the inputs on the circuit. 
The port list is enclosed in parentheses, and commas are used to separate elements of 
the list. The statement is terminated with a semicolon (;). In our examples, all keywords 
(which must be in lowercase) are printed in bold for clarity, but that is not a requirement 
of the language. Next, the keywords  input and  output specify which of the ports are 
inputs and which are outputs. Internal connections are declared as wires. The circuit in 
this example has one internal connection, at terminal  w1 , and is declared with the key-
word  wire. The structure of the circuit is specified by a list of (predefined)  primitive 
gates, each identified by a descriptive keyword ( and, not, or ). The elements of the list 
are referred to as  instantiations of a gate, each of which is referred to as a  gate instance . 
Each  gate instantiation consists of an optional name (such as  G1, G2 , etc.) followed by 
the gate output and inputs separated by commas and enclosed within parentheses. The 
output of a primitive gate is always listed first, followed by the inputs. For example, the 
OR gate of the schematic is represented by the  or primitive, is named  G3 , and has out-
put  D and inputs  w1 and  E . ( Note : The output of a primitive must be listed first, but the 
inputs and outputs of a module may be listed in any order.) The module description ends 
with the keyword  endmodule. Each statement must be terminated with a semicolon, but 
there is no semicolon after  endmodule. 
 It is important to understand the distinction between the terms  declaration and  instan-
tiation . A Verilog module is declared. Its declaration specifies the input–output behavior 
of the hardware that it represents. Predefined primitives are not declared, because their 
definition is specified by the language and is not subject to change by the user. Primitives 
are used (i.e., instantiated), just as gates are used to populate a printed circuit board. 
We’ll see that once a module has been declared, it may be used (instantiated) within a 
design. Note that  Simple_Circuit is not a computational model like those developed in 
an ordinary programming language: The sequential ordering of the statements instanti-
ating gates in the model has no significance and does not specify a sequence of compu-
tations. A Verilog model is a  descriptive model.  Simple_Circuit describes what primitives 
form a circuit and how they are connected. The input–output behavior of the circuit is 
 HDL Example 3.1 (Combinational Logic Modeled with Primitives) 
// Verilog model of circuit of Figure 3.35. IEEE 1364–1995 Syntax
module  Simple_Circuit (A, B, C, D, E);
output 
D, E;
input 
A, B, C;
wire 
w1;
and 
G1 (w1, A, B); // Optional gate instance name
not 
G2 (E, C);
or 
G3 (D, w1, E);
endmodule

Section 3.9  Hardware Description Language  113
implicitly specified by the description because the behavior of each logic gate is defined. 
Thus, an HDL-based model can be used to simulate the circuit that it represents. 
 Gate Delays 
 All physical circuits exhibit a propagation delay between the transition of an input and a 
resulting transition of an output. When an HDL model of a circuit is simulated, it is some-
times necessary to specify the amount of delay from the input to the output of its gates. 
In Verilog, the propagation delay of a gate is specified in terms of  time units and by the 
symbol #. The numbers associated with time delays in Verilog are dimensionless. The 
association of a time unit with physical time is made with the  timescale compiler direc-
tive. (Compiler directives start with the () back quote, or grave accent, symbol.) Such a 
directive is specified before the declaration of a module and applies to all numerical 
values of time in the code that follows. An example of a timescale directive is 
 timescale 1ns/100ps 
 The first number specifies the unit of measurement for time delays. The second number 
specifies the precision for which the delays are rounded off, in this case to 0.1 ns. If no 
timescale is specified, a simulator may display dimensionless values or default to a certain 
time unit, usually  1ns(=10-9 s).  Our examples will use only the default time unit. 
 HDL  Example  3.2 repeats the description of the simple circuit of  Example  3.1 , but 
with propagation delays specified for each gate. The  and, or , and  not gates have a time 
delay of 30, 20, and 10 ns, respectively. If the circuit is simulated and the inputs change 
from  A ,  B ,  C = 0 to  A ,  B ,  C = 1, the outputs change as shown in  Table  3.5 (calculated 
by hand or generated by a simulator). The output of the inverter at  E changes from 1 to 
0 after a 10-ns delay. The output of the AND gate at  w1 changes from 0 to 1 after a 30-ns 
delay. The output of the OR gate at  D changes from 1 to 0 at  t = 30 ns and then changes 
back to 1 at  t = 50 ns. In both cases, the change in the output of the OR gate results 
from a change in its inputs 20 ns earlier. It is clear from this result that although output 
 D eventually returns to a final value of 1 after the input changes, the gate delays produce 
a negative spike that lasts 20 ns before the final value is reached. 
 Output of Gates after Delay 
 
 Time Units 
(ns) 
 Input 
 Output 
 
 ABC 
 E w1 D 
 Initial 
 — 
 0 0 0 
 1  0  1 
 Change 
 — 
 1 1 1 
 1  0  1 
 
 1 1 1 
 0  0  1 
 
 1 1 1 
 0  0  1 
 
 1 1 1 
 0  1  0 
 
 1 1 1 
 0  1  0 
 
 1 1 1 
 0  1  1 

114  Chapter 3  Gate-Level Minimization
 In order to simulate a circuit with an HDL, it is necessary to apply inputs to the circuit 
so that the simulator will generate an output response. An HDL description that provides 
the stimulus to a design is called a  test bench. The writing of test benches is explained in 
more detail at the end of Section 4.12. Here, we demonstrate the procedure with a simple 
example without dwelling on too many details. HDL  Example  3.3 shows a test bench for 
simulating the circuit with delay. (Note the distinguishing name  Simple_Circuit_prop_
delay .) In its simplest form, a test bench is a module containing a signal generator and 
an instantiation of the model that is to be verified. Note that the test bench ( t_Simple_
Circuit_prop_delay ) has no input or output ports, because it does not interact with its 
environment. In general, we prefer to name the test bench with the prefix  t_ concatenated 
with the name of the module that is to be tested by the test bench, but that choice is left 
to the designer. Within the test bench, the inputs to the circuit are declared with keyword 
 reg and the outputs are declared with the keyword  wire . The module  Simple_Circuit_
prop_delay is instantiated with the instance name M1. Every instantiation of a module 
must include a unique instance name. Note that using a test bench is similar to testing 
actual hardware by attaching signal generators to the inputs of a circuit and attaching 
 HDL Example 3.2 (Gate-Level Model with Propagation Delays) 
// Verilog model of simple circuit with propagation delay
module Simple_Circuit_prop_delay (A, B, C, D, E);
 output D, E;
input A, B, C;
wire 
w1;
and 
#(30) G1 (w1, A, B);
not 
#(10) G2 (E, C);
or 
#(20) G3 (D, w1, E);
endmodule
 HDL Example 3.3 (Test Bench) 
// Test bench for Simple_Circuit_prop_delay
module  t_Simple_Circuit_prop_delay;
wire 
D, E;
reg 
A, B, C;
Simple_Circuit_prop_delay M1 (A, B, C, D, E); // Instance name required
initial
begin
A = 1'b0; B = 1'b0; C = 1'b0;
#100 A = 1'b1; B = 1'b1; C = 1'b1;
end
initial #200 $finish;
endmodule

Section 3.9  Hardware Description Language  115
probes (wires) to the outputs of the circuit. (The interaction between the signal genera-
tors of the stimulus module and the instantiated circuit module is illustrated in  Fig.  4.36 .) 
 Hardware signal generators are not used to verify an HDL model:  The entire simula-
tion exercise is done with software models executing on a digital computer under the 
direction of an HDL simulator. The waveforms of the input signals are abstractly modeled 
(generated) by Verilog statements specifying waveform values and transitions. The  initial 
 keyword is used with a set of statements that begin executing when the simulation is ini-
tialized; the signal activity associated with  initial terminates execution when the last state-
ment has finished executing. The  initial statements are commonly used to describe 
waveforms in a test bench. The set of statements to be executed is called a  block statement 
and consists of several statements enclosed by the keywords  begin and  end. The action 
specified by the statements begins when the simulation is launched, and the statements 
are executed in sequence, left to right, from top to bottom, by a simulator in order to 
provide the input to the circuit. Initially,  A, B, C = 0. ( A, B, and  C are each set to  1b0, 
which signifies one binary digit with a value of 0.) After 100 ns, the inputs change to 
 A, B, C = 1. After another 100 ns, the simulation terminates at time 200 ns. A second 
 initial statement uses the  $finish system task to specify termination of the simulation. If a 
statement is preceded by a delay value (e.g., #100), the simulator postpones executing the 
statement until the specified time delay has elapsed. The timing diagram of waveforms 
that result from the simulation is shown in Figure 3.36. The total simulation generates 
waveforms over an interval of 200 ns. The inputs  A, B, and  C change from 0 to 1 after 100 
ns. Output  E is unknown for the first 10 ns (denoted by shading), and output  D is unknown 
for the first 30 ns. Output  E goes from 1 to 0 at 110 ns. Output  D goes from 1 to 0 at 130 
ns and back to 1 at 150 ns, just as we predicted in  Table  3.5 . 
 Boolean Expressions 
 Boolean equations describing combinational logic are specified in Verilog with a con-
tinuous assignment statement consisting of the keyword  assign followed by a Boolean 
expression. To distinguish arithmetic operators from logical operators, Verilog uses the 
symbols (&), (/), and (&) for AND, OR, and NOT (complement), respectively. Thus, to 
Name 0.0 ns
58.0 ns
116.0 ns
174.0 ns
A
B
C
D
E
 Simulation output of HDL  Example  3.3 

116  Chapter 3  Gate-Level Minimization
describe the simple circuit of  Fig.  3.35 with a Boolean expression, we use the statement 
 assign D = (A && B)  (!C); 
 HDL  Example  3.4 describes a circuit that is specified with the following two Boolean 
expressions: 
  E = A + BC + BD 
 F = BC + BCD 
 The equations specify how the logic values  E and  F are determined by the values of 
 A, B, C, and  D . 
 HDL Example 3.4 (Combinational Logic Modeled with Boolean Equations) 
// Verilog model: Circuit with Boolean expressions
module Circuit_Boolean_CA (E, F, A, B, C, D);
output 
E, F;
input 
A, B, C, D;
assign E  A || (B && C) || ((!B) && D);
assign F  ((!B) && C) || (B && (!C) && (!D));
endmodule
 The circuit has two outputs  E and  F and four inputs  A, B, C, and  D . The two  assign 
statements describe the Boolean equations. The values of  E and  F during simulation are 
determined dynamically by the values of  A ,  B ,  C , and  D . The simulator detects when the 
test bench changes a value of one or more of the inputs. When this happens, the simula-
tor updates the values of  E and  F . The continuous assignment mechanism is so named 
because the relationship between the assigned value and the variables is permanent. The 
mechanism acts just like combinational logic, has a gate-level equivalent circuit, and is 
referred to as  implicit combinational logic . 
 We have shown that a digital circuit can be described with HDL statements, just as 
it can be drawn in a circuit diagram or specified with a Boolean expression. A third 
alternative is to describe combinational logic with a truth table. 
 User-Defined Primitives 
 The logic gates used in Verilog descriptions with keywords  and, or, etc., are defined by 
the system and are referred to as  system primitives. (Caution: Other languages may use 
these words differently . ) The user can create additional primitives by defining them in 
tabular form. These types of circuits are referred to as  user-defined primitives (UDPs). 
One way of specifying a digital circuit in tabular form is by means of a truth table. UDP 
descriptions do not use the keyword pair  module . . .  endmodule. Instead, they are 
declared with the keyword pair  primitive . . .  endprimitive. The best way to demonstrate 
a UDP declaration is by means of an example. 

Section 3.9  Hardware Description Language  117
 HDL  Example  3.5 defines a UDP with a truth table. It proceeds according to the 
following general rules: 
 •  It is declared with the keyword  primitive , followed by a name and port list. 
 •  There can be only one output, and it must be listed ﬁ rst in the port list and declared 
with keyword  output . 
 •  There can be any number of inputs. The order in which they are listed in the  input
declaration must conform to the order in which they are given values in the table that 
follows. 
 •  The truth table is enclosed within the keywords  table and  endtable. 
 •  The values of the inputs are listed in order, ending with a colon (:). The output is al-
ways the last entry in a row and is followed by a semicolon (;). 
 •  The declaration of a UDP ends with the keyword  endprimitive. 
 HDL Example 3.5 (User-Defined Primitive) 
// Verilog model: User-defined Primitive
primitive UDP_02467 (D, A, B, C);
output D;
input  A, B, C;
//Truth table for D 5 f (A, B, C) 5 (0, 2, 4, 6, 7);
 table 
// 
A 
B 
C 
: 
D 
// Column header comment
: 
1;
: 
0;
: 
1;
: 
0;
: 
1;
: 
0;
: 
1;
: 
1;
 endtable 
endprimitive 
// Instantiate primitive
// Verilog model: Circuit instantiation of Circuit_UDP_02467
module Circuit_with_UDP_02467 (e, f, a, b, c, d);
output 
e, f;
input 
a, b, c, d
 UDP_02467 
(e, a, b, c);
and 
(f, e, d); 
// Option gate instance name omitted
endmodule

118  Chapter 3  Gate-Level Minimization
 Note that the variables listed on top of the table are part of a comment and are shown 
only for clarity. The system recognizes the variables by the order in which they are listed 
in the input declaration. A user-defined primitive can be instantiated in the construction 
of other modules (digital circuits), just as the system primitives are used. For example, 
the declaration 
 Circuit _with _UDP_ 02467 (E, F, A, B, C, D); 
 will produce a circuit that implements the hardware shown in  Figure  3.37 . 
 Although Verilog HDL uses this kind of description for UDPs only, other HDLs and 
computer-aided design (CAD) systems use other procedures to specify digital circuits 
in tabular form. The tables can be processed by CAD software to derive an efficient gate 
structure of the design. None of Verilog’s predefined primitives describes sequential 
logic. The model of a sequential UDP requires that its output be declared as a  reg data 
type, and that a column be added to the truth table to describe the next state. So the 
columns are organized as inputs : state : next state. 
 In this section, we introduced the Verilog HDL and presented simple examples to 
illustrate alternatives for modeling combinational logic. A more detailed presentation 
of Verilog HDL can be found in the next chapter. The reader familiar with combina-
tional circuits can go directly to Section 4.12 to continue with this subject. 
 PRO BL E MS 
 
 (Answers to problems marked with * appear at the end of the text.) 
 
3.1*  Simplify the following Boolean functions, using three-variable maps: 
 
(a)  F1x, y, z2 = 10, 2, 4, 52 
 (b)  F1x, y, z2 = 10, 2, 4, 5, 62 
 
(c)  F1x, y, z2 = 10, 1, 2, 3, 52 
 (d)  F1x, y, z2 = 11, 2, 3, 72 
 
3.2 
 Simplify the following Boolean functions, using three-variable maps: 
 
(a) *  F (x, y, z) = (0, 1, 5, 7) 
 (b) *  F (x, y, z) = (1, 2, 3, 6, 7) 
 
(c)  F1x, y, z2 = 12, 3, 4, 52 
 (d)  F1x, y, z2 = 11, 2, 3, 5, 6, 72 
 
(e)  F1x, y, z2 = 10, 2, 4, 62 
 (f)  F1x, y, z2 = 13, 4, 5, 6, 72 
 
3.3*  Simplify the following Boolean expressions, using three-variable maps: 
 
(a) *  xy + xyz + xyz 
 (b) *  xy + yz + xyz 
 
(c) *  F1x, y, z2 = xy + yz + yz 
 (d)  F1x, y, z2 = xyz + xyz + xyz 
A
E
F
B
C
D
UDP_02467
 Schematic for  Circuit with_UDP_02467
