# BCS302 — Module 2

## Combinational and Sequential Logic

**Subject:** BCS302 (Digital Design and Computer Organization)
**Module:** Module 2
**Content type:** module_notes
**Sources:** BCS302-module-2-textbook.txt

---

Chapter 4 
 Combinational Logic 
 4.1  INT R OD U C T IO N 
 Logic circuits for digital systems may be combinational or sequential. A combinational 
circuit consists of logic gates whose outputs at any time are determined from only the 
present combination of inputs. A combinational circuit performs an operation that can 
be specified logically by a set of Boolean functions. In contrast, sequential circuits 
employ storage elements in addition to logic gates. Their outputs are a function of the 
inputs and the state of the storage elements. Because the state of the storage elements 
is a function of previous inputs, the outputs of a sequential circuit depend not only on 
present values of inputs, but also on past inputs, and the circuit behavior must be speci-
fied by a time sequence of inputs and internal states. Sequential circuits are the building 
blocks of digital systems and are discussed in  Chapters  5  and  8 . 
 4.2  CO MB IN AT IO N A L C IR C U I TS 
 A combinational circuit consists of an interconnection of logic gates. Combinational 
logic gates react to the values of the signals at their inputs and produce the value of the 
output signal, transforming binary information from the given input data to a required 
output data. A block diagram of a combinational circuit is shown in  Fig.  4.1 . The  n input 
binary variables come from an external source; the  m output variables are produced by 
the internal combinational logic circuit and go to an external destination. Each input 
and output variable exists physically as an analog signal whose values are interpreted 
to be a binary signal that represents logic 1 and logic 0. ( Note : Logic simulators show 
only 0’s and 1’s, not the actual analog signals.) In many applications, the source and 

126  Chapter 4  Combinational Logic
destination are storage registers. If the registers are included with the combinational 
gates, then the total circuit must be considered to be a sequential circuit. 
 For  n input variables, there are  2n possible combinations of the binary inputs. For each 
possible input combination, there is one possible value for each output variable. Thus, a 
combinational circuit can be specified with a truth table that lists the output values for 
each combination of input variables. A combinational circuit also can be described by 
 m Boolean functions, one for each output variable. Each output function is expressed 
in terms of the  n input variables. 
 In  Chapter  1 , we learned about binary numbers and binary codes that represent discrete 
quantities of information. The binary variables are represented physically by electric volt-
ages or some other type of signal. The signals can be manipulated in digital logic gates to 
perform required functions. In  Chapter  2 , we introduced Boolean algebra as a way to 
express logic functions algebraically. In  Chapter  3 , we learned how to simplify Boolean 
functions to achieve economical (simpler) gate implementations. The purpose of the cur-
rent chapter is to use the knowledge acquired in previous chapters to formulate systematic 
analysis and design procedures for combinational circuits. The solution of some typical 
examples will provide a useful catalog of elementary functions that are important for the 
understanding of digital systems. We’ll address three tasks: (1) Analyze the behavior of a 
given logic circuit, (2) synthesize a circuit that will have a given behavior, and (3) write 
hardware description language (HDL) models for some common circuits. 
 There are several combinational circuits that are employed extensively in the design 
of digital systems. These circuits are available in integrated circuits and are classified as 
standard components. They perform specific digital functions commonly needed in the 
design of digital systems. In this chapter, we introduce the most important standard 
combinational circuits, such as adders, subtractors, comparators, decoders, encoders, and 
multiplexers. These components are available in integrated circuits as medium-scale 
integration (MSI) circuits. They are also used as  standard cells in complex very large-
scale integrated (VLSI) circuits such as application-specific integrated circuits (ASICs). 
The standard cell functions are interconnected within the VLSI circuit in the same way 
that they are used in multiple-IC MSI design. 
 4.3  A NA LY S IS P R O C E D U R E 
 The analysis of a combinational circuit requires that we determine the function that the 
circuit implements. This task starts with a given logic diagram and culminates with a set 
of Boolean functions, a truth table, or, possibly, an explanation of the circuit operation. 
Combinational
circuit

n inputs
m outputs
 Block diagram of combinational circuit 

Section 4.4  Design Procedure  129
 This process is illustrated with the circuit of  Fig.  4.2 . In  Table  4.1 , we form the 
eight possible combinations for the three input variables. The truth table for  F2 is 
determined directly from the values of  A ,  B , and  C , with  F2 equal to 1 for any com-
bination that has two or three inputs equal to 1. The truth table for  F2 is the comple-
ment of  F2. The truth tables for  T1 and  T2 are the OR and AND functions of the 
input variables, respectively. The values for  T3 are derived from  T1 and  F2:T3 is equal 
to 1 when both  T1 and  F2 are equal to 1, and  T3 is equal to 0 otherwise. Finally,  F1 is 
equal to 1 for those combinations in which either  T2 or  T3 or both are equal to 1. 
Inspection of the truth table combinations for  A, B, C,  F1, and  F2 shows that it is 
identical to the truth table of the full adder given in Section 4.5 for  x, y, z, S , and  C , 
respectively. 
 Another way of analyzing a combinational circuit is by means of logic simulation. 
This is not practical, however, because the number of input patterns that might be 
needed to generate meaningful outputs could be very large. But simulation has a very 
practical application in verifying that the functionality of a circuit actually matches its 
specification. In Section 4.12, we demonstrate the logic simulation and verification of 
the circuit of  Fig.  4.2 , using Verilog HDL. 
 4.4  DE S IG N P R O C E D U R E 
 The design of combinational circuits starts from the specification of the design objective 
and culminates in a logic circuit diagram or a set of Boolean functions from which the 
logic diagram can be obtained. The procedure involves the following steps: 
 
1.  From the specifications of the circuit, determine the required number of inputs 
and outputs and assign a symbol to each. 
 
2.  Derive the truth table that defines the required relationship between inputs and 
outputs. 
 Truth Table for the Logic Diagram of  Fig.  4.2 
 A 
 B 
 C 
 F 2 
 F2
 T 1 
 T 2 
 T 3 
 F 1 

130  Chapter 4  Combinational Logic
 
3.  Obtain the simplified Boolean functions for each output as a function of the input 
variables. 
 
4.  Draw the logic diagram and verify the correctness of the design (manually or by 
simulation). 
 A truth table for a combinational circuit consists of input columns and output 
columns. The input columns are obtained from the  2n binary numbers for the  n input 
variables. The binary values for the outputs are determined from the stated specifica-
tions. The output functions specified in the truth table give the exact definition of the 
combinational circuit. It is important that the verbal specifications be interpreted 
correctly in the truth table, as they are often incomplete, and any wrong interpretation 
may result in an incorrect truth table. 
 The output binary functions listed in the truth table are simplified by any available 
method, such as algebraic manipulation, the map method, or a computer-based sim-
plification program. Frequently, there is a variety of simplified expressions from 
which to choose. In a particular application, certain criteria will serve as a guide in 
the process of choosing an implementation. A practical design must consider such 
constraints as the number of gates, number of inputs to a gate, propagation time of 
the signal through the gates, number of interconnections, limitations of the driving 
capability of each gate (i.e., the number of gates to which the output of the circuit 
may be connected), and various other criteria that must be taken into consideration 
when designing integrated circuits. Since the importance of each constraint is dictated 
by the particular application, it is difficult to make a general statement about what 
constitutes an acceptable implementation. In most cases, the simplification begins by 
satisfying an elementary objective, such as producing the simplified Boolean func-
tions in a standard form. Then the simplification proceeds with further steps to meet 
other performance criteria. 
 Code Conversion Example 
 The availability of a large variety of codes for the same discrete elements of information 
results in the use of different codes by different digital systems. It is sometimes necessary 
to use the output of one system as the input to another. A conversion circuit must be 
inserted between the two systems if each uses different codes for the same information. 
Thus, a code converter is a circuit that makes the two systems compatible even though 
each uses a different binary code. 
 To convert from binary code A to binary code B, the input lines must supply the 
bit combination of elements as specified by code A and the output lines must gener-
ate the corresponding bit combination of code B. A combinational circuit performs 
this transformation by means of logic gates. The design procedure will be illustrated 
by an example that converts binary coded decimal (BCD) to the excess-3 code for the 
decimal digits. 
 The bit combinations assigned to the BCD and excess-3 codes are listed in Table 1.5 
(Section 1.7). Since each code uses four bits to represent a decimal digit, there must 

Section 4.4  Design Procedure  131
be four input variables and four output variables. We designate the four input binary 
 variables by the symbols  A, B, C, and  D, and the four output variables by  w, x, y , and 
 z . The truth table relating the input and output variables is shown in  Table  4.2 . The bit 
combinations for the inputs and their corresponding outputs are obtained directly 
from Section 1.7. Note that four binary variables may have 16 bit combinations, but 
only 10 are listed in the truth table. The six bit combinations not listed for the input 
variables are don’t-care combinations. These values have no meaning in BCD and we 
assume that they will never occur in actual operation of the circuit. Therefore, we are 
at liberty to assign to the output variables either a 1 or a 0, whichever gives a simpler 
circuit. 
 The maps in  Fig.  4.3 are plotted to obtain simplified Boolean functions for the 
outputs. Each one of the four maps represents one of the four outputs of the circuit 
as a function of the four input variables. The 1’s marked inside the squares are 
obtained from the minterms that make the output equal to 1. The 1’s are obtained 
from the truth table by going over the output columns one at a time. For example, 
the column under output  z has five 1’s; therefore, the map for  z has five 1’s, each 
being in a square corresponding to the minterm that makes  z equal to 1. The six 
don’t-care minterms 10 through 15 are marked with an  X . One possible way to sim-
plify the functions into sum-of-products form is listed under the map of each variable. 
(See  Chapter  3 .) 
 A two-level logic diagram for each output may be obtained directly from the Boolean 
expressions derived from the maps. There are various other possibilities for a logic diagram 
that implements this circuit. The expressions obtained in  Fig.  4.3 may be manipulated 
algebraically for the purpose of using common gates for two or more outputs. This manip-
ulation, shown next, illustrates the flexibility obtained with multiple-output systems when 
 Truth Table for Code Conversion Example 
 Input BCD 
 Output Excess-3 Code 
 A 
 B 
 C 
 D 
 w 
 x 
 y 
 z 

132  Chapter 4  Combinational Logic
implemented with three or more levels of gates: 
 
 z = D
 
y = CD + CD = CD + 1C + D2
x = BC + BD + BCD = B1C + D2 + BCD
 
= B1C + D2 + B1C + D2
 
w = A + BC + BD = A + B1C + D2 
 The logic diagram that implements these expressions is shown in  Fig.  4.4 . Note that the OR 
gate whose output is  C + D has been used to implement partially each of three outputs. 
 Not counting input inverters, the implementation in sum-of-products form requires 
seven AND gates and three OR gates. The implementation of  Fig.  4.4 requires four AND 
gates, four OR gates, and one inverter. If only the normal inputs are available, the first 
AB
CD
X
X
X
X
X
X
D
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
C
B
A
AB
CD
X
X
X
X
X
C
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
X
D
B
A
AB
CD
X
X
X
X
X
X
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
C
B
A
D
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
B
AB
CD
A
X
X
X
X
X
X
D
C
z  D
y  CD  CD
x  BC  BD  BCD
w  A  BC BD
 Maps for BCD-to-excess-3 code converter 

Section 4.5  Binary Adder–Subtractor  133
implementation will require inverters for variables  B, C , and  D , and the second 
 implementation will require inverters for variables  B and  D . Thus, the three-level logic 
circuit requires fewer gates, all of which in turn require no more than two inputs. 
 4.5  BINA RY A D D E R – S U B T R A CT O R 
 Digital computers perform a variety of information-processing tasks. Among the func-
tions encountered are the various arithmetic operations. The most basic arithmetic 
operation is the addition of two binary digits. This simple addition consists of four pos-
sible elementary operations:  0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1,  and  1 + 1 = 10. The 
first three operations produce a sum of one digit, but when both augend and addend 
bits are equal to 1, the binary sum consists of two digits. The higher significant bit of this 
result is called a  carry . When the augend and addend numbers contain more significant 
digits, the carry obtained from the addition of two bits is added to the next higher order 
pair of significant bits. A combinational circuit that performs the addition of two bits is 
called a  half adder . One that performs the addition of three bits (two significant bits and 
a previous carry) is a  full adder . The names of the circuits stem from the fact that two 
half adders can be employed to implement a full adder. 
x
z
y
w
D
C D
(C D)
CD
D
C
B
A
 Logic diagram for BCD-to-excess-3 code converter 

134  Chapter 4  Combinational Logic
 A binary adder–subtractor is a combinational circuit that performs the arithmetic 
operations of addition and subtraction with binary numbers. We will develop this 
circuit by means of a hierarchical design. The half adder design is carried out first, from 
which we develop the full adder. Connecting  n full adders in cascade produces a binary 
adder for two  n -bit numbers. The subtraction circuit is included in a complementing 
circuit. 
 Half Adder 
 From the verbal explanation of a half adder, we find that this circuit needs two binary 
inputs and two binary outputs. The input variables designate the augend and addend 
bits; the output variables produce the sum and carry. We assign symbols  x and  y to the 
two inputs and  S (for sum) and  C (for carry) to the outputs. The truth table for the half 
adder is listed in  Table  4.3 . The  C output is 1 only when both inputs are 1. The  S output 
represents the least significant bit of the sum. 
 The simplified Boolean functions for the two outputs can be obtained directly from 
the truth table. The simplified sum-of-products expressions are 
 S = xy + xy
 
C = xy 
 The logic diagram of the half adder implemented in sum of products is shown in 
 Fig.  4.5(a) . It can be also implemented with an exclusive-OR and an AND gate as shown 
in  Fig.  4.5(b) . This form is used to show that two half adders can be used to construct a 
full adder. 
x
y
x
y
x
y
S
C
x
y
S
C
(a) S  xy  xy
 
C  xy
(b) S  x  y
 
C  xy
 Implementation of half adder 
 Half Adder 
 x 
 y 
 C 
 S 

Section 4.5  Binary Adder–Subtractor  135
 Full Adder 
 Addition of n-bit binary numbers requires the use of a full adder, and the process of addi-
tion proceeds on a bit-by-bit basis, right to left, beginning with the least significant bit. After 
the least significant bit, addition at each position adds not only the respective bits of the 
words, but must also consider a possible carry bit from addition at the previous position. 
 A full adder is a combinational circuit that forms the arithmetic sum of three bits. It 
consists of three inputs and two outputs. Two of the input variables, denoted by  x and  y , 
represent the two significant bits to be added. The third input,  z , represents the carry from 
the previous lower significant position. Two outputs are necessary because the arithmetic 
sum of three binary digits ranges in value from 0 to 3, and binary representation of 2 or 3 
needs two bits. The two outputs are designated by the symbols  S for sum and  C for carry. 
The binary variable  S gives the value of the least significant bit of the sum. The binary 
variable  C gives the output carry formed by adding the input carry and the bits of the 
words. The truth table of the full adder is listed in  Table  4.4 . The eight rows under the input 
variables designate all possible combinations of the three variables. The output variables 
are determined from the arithmetic sum of the input bits. When all input bits are 0, the 
output is 0. The  S output is equal to 1 when only one input is equal to 1 or when all three 
inputs are equal to 1. The  C output has a carry of 1 if two or three inputs are equal to 1. 
 The input and output bits of the combinational circuit have different interpretations 
at various stages of the problem. On the one hand, physically, the binary signals of the 
inputs are considered binary digits to be added arithmetically to form a two-digit sum 
at the output. On the other hand, the same binary values are considered as variables of 
Boolean functions when expressed in the truth table or when the circuit is implemented 
with logic gates. The maps for the outputs of the full adder are shown in  Fig.  4.6 . The 
simplified expressions are 
 S = xyz + xyz + xyz + xyz
 C = xy + xz + yz
 The logic diagram for the full adder implemented in sum-of-products form is shown 
in  Fig.  4.7 . It can also be implemented with two half adders and one OR gate, as shown 
 Full Adder 
 x 
 y 
 z 
 C 
 S 

136  Chapter 4  Combinational Logic
in  Fig.  4.8 . The  S output from the second half adder is the exclusive-OR of  z and the 
output of the first half adder, giving 
 
 S = z { 1x { y2
 
= z1xy + xy2 + z1xy + xy2
 
= z1xy + xy2 + z1xy + xy2
 
= xyz + xyz + xyz + xyz 
The carry output is
 C = z1xy + xy2 + xy = xyz + xyz + xy 
 Binary Adder 
 A binary adder is a digital circuit that produces the arithmetic sum of two binary num-
bers. It can be constructed with full adders connected in cascade, with the output carry 
from each full adder connected to the input carry of the next full adder in the chain. 
x
y
x
z
y
z
C
x
y
z
x
y
z
x
y
z
x
y
z
S
 Implementation of full adder in sum-of-products form 
x
yz
x
m0
m1
m3
m2
m0
m1
m3
m2
m4
m5
m7
m6
m4
(a) S  xyz  xyz  xyz  xyz
(b) C  xy  xz  yz
y
x yz
z
m5
m7
m6
z
x
y
 K-Maps for full adder 

Section 4.5  Binary Adder–Subtractor  137
Addition of n-bit numbers requires a chain of n full adders or a chain of one-half adder 
and n 9 1 full adders. In the former case, the input carry to the least significant position 
is fixed at 0.  Figure  4.9 shows the interconnection of four full-adder (FA) circuits to 
provide a four-bit binary ripple carry adder. The augend bits of  A and the addend bits 
of  B are designated by subscript numbers from right to left, with subscript 0 denoting 
the least significant bit. The carries are connected in a chain through the full adders. The 
input carry to the adder is  C0, and it ripples through the full adders to the output carry 
 C4. The  S outputs generate the required sum bits. An  n -bit adder requires  n full adders, 
with each output carry connected to the input carry of the next higher order full adder. 
 To demonstrate with a specific example, consider the two binary numbers  A = 1011 
and  B = 0011. Their sum  S = 1110 is formed with the four-bit adder as follows: 
 Subscript i: 
 
 Input carry 
 Ci 
 Augend 
 Ai 
 Addend 
 Bi 
 Sum 
 Si 
 Output carry 
 Ci+1 
 The bits are added with full adders, starting from the least significant position (subscript 
0), to form the sum bit and carry bit. The input carry  C0 in the least significant position 
must be 0. The value of  Ci+1 in a given significant position is the output carry of the full 
adder. This value is transferred into the input carry of the full adder that adds the bits 
one higher significant position to the left. The sum bits are thus generated starting from 
the rightmost position and are available as soon as the corresponding previous carry 
bit is generated. All the carries must be generated for the correct sum bits to appear at 
the outputs. 
 The four-bit adder is a typical example of a standard component. It can be used in 
many applications involving arithmetic operations. Observe that the design of this circuit 
x
y
z
S
C
x  y
xy
(x  y) z  xy
(x  y)  z
(x  y) z
 Implementation of full adder with two half adders and an OR gate 

138  Chapter 4  Combinational Logic
by the classical method would require a truth table with  29 = 512 entries, since there 
are nine inputs to the circuit. By using an iterative method of cascading a standard func-
tion, it is possible to obtain a simple and straightforward implementation. 
 Carry Propagation 
 The addition of two binary numbers in parallel implies that all the bits of the augend 
and addend are available for computation at the same time. As in any combinational 
circuit, the signal must propagate through the gates before the correct output sum is 
available in the output terminals. The total propagation time is equal to the propagation 
delay of a typical gate, times the number of gate levels in the circuit. The longest propa-
gation delay time in an adder is the time it takes the carry to propagate through the full 
adders. Since each bit of the sum output depends on the value of the input carry, the 
value of  Si at any given stage in the adder will be in its steady-state final value only after 
the input carry to that stage has been propagated. In this regard, consider output  S3 in 
 Fig.  4.9 . Inputs  A3 and  B3 are available as soon as input signals are applied to the adder. 
However, input carry  C3 does not settle to its final value until  C2 is available from the 
previous stage. Similarly,  C2 has to wait for  C1 and so on down to  C0. Thus, only after 
the carry propagates and ripples through all stages will the last output  S3 and carry  C4 
settle to their final correct value. 
 The number of gate levels for the carry propagation can be found from the circuit 
of the full adder. The circuit is redrawn with different labels in  Fig.  4.10 for convenience. 
The input and output variables use the subscript  i to denote a typical stage of the adder. 
The signals at  Pi and  Gi settle to their steady-state values after they propagate through 
their respective gates. These two signals are common to all half adders and depend on 
only the input augend and addend bits. The signal from the input carry  Ci to the output 
carry  Ci+1 propagates through an AND gate and an OR gate, which constitute two gate 
levels. If there are four full adders in the adder, the output carry  C4 would have 
 2 * 4 = 8 gate levels from  C0 to  C4. For an  n -bit adder, there are 2 n gate levels for the 
carry to propagate from input to output. 
B3
C4
S3
A3
FA
B2
C3
S2
A2
FA
B1
C2
S1
A1
FA
B0
C1
S0
A0
FA
C0
 Four-bit adder 

Section 4.5  Binary Adder–Subtractor  139
 The carry propagation time is an important attribute of the adder because it limits 
the speed with which two numbers are added. Although the adder—or, for that matter, 
any combinational circuit—will always have some value at its output terminals, the 
outputs will not be correct unless the signals are given enough time to propagate through 
the gates connected from the inputs to the outputs. Since all other arithmetic operations 
are implemented by successive additions, the time consumed during the addition process 
is critical. An obvious solution for reducing the carry propagation delay time is to 
employ faster gates with reduced delays. However, physical circuits have a limit to their 
capability. Another solution is to increase the complexity of the equipment in such a 
way that the carry delay time is reduced. There are several techniques for reducing the 
carry propagation time in a parallel adder. The most widely used technique employs the 
principle of  carry  lookahead logic . 
 Consider the circuit of the full adder shown in  Fig.  4.10 . If we define two new binary 
variables 
 Pi = Ai { Bi
 
Gi = AiBi 
 the output sum and carry can respectively be expressed as 
 Si = Pi { Ci
 
Ci+1 = Gi + PiCi 
 Gi is called a  carry generate , and it produces a carry of 1 when both  Ai and  Bi are 1, 
regardless of the input carry  Ci. Pi is called a  carry propagate , because it determines 
whether a carry into stage  i will propagate into stage  i + 1 (i.e., whether an assertion of 
 Ci will propagate to an assertion of  Ci+1 ). 
 We now write the Boolean functions for the carry outputs of each stage and substitute 
the value of each  Ci from the previous equations: 
 C0 = input carry
C1 = G0 + P0C0
Si
Ci  1
Ai
Pi
PiCi  Gi 
Gi
Half adder
Half adder
Bi
Ci
Pi  Ci
 Full adder with  P and  G shown 

140  Chapter 4  Combinational Logic
C2 = G1 + P1C1 = G1 + P11G0 + P0C02 = G1 + P1G0 + P1P0C0
 
C3 = G2 + P2C2 = G2 + P2G1 + P2P1G0 = P2P1P0C0 
 Since the Boolean function for each output carry is expressed in sum-of-products form, 
each function can be implemented with one level of AND gates followed by an OR gate 
(or by a two-level NAND). The three Boolean functions for  C1, C2, and  C3 are imple-
mented in the carry lookahead generator shown in  Fig.  4.11 . Note that this circuit can 
add in less time because  C3 does not have to wait for  C2 and  C1 to propagate; in fact,  C3
 is propagated at the same time as  C1 and  C2. This gain in speed of operation is achieved 
at the expense of additional complexity (hardware). 
 The construction of a four-bit adder with a carry lookahead scheme is shown in  Fig.  4.12 . 
Each sum output requires two exclusive-OR gates. The output of the first exclusive-OR 
gate generates the  Pi variable, and the AND gate generates the  Gi variable. The carries 
are propagated through the carry lookahead generator (similar to that in  Fig.  4.11 ) and 
applied as inputs to the second exclusive-OR gate. All output carries are generated after 
C3
C2
C1
P2
G2
P1
G1
P0
G0
C0
 Logic diagram of carry lookahead generator 

Section 4.5  Binary Adder–Subtractor  141
a delay through two levels of gates. Thus, outputs  S1 through  S3 have equal propagation 
delay times. The two-level circuit for the output carry  C4 is not shown. This circuit can 
easily be derived by the equation-substitution method. 
 Binary Subtractor 
 The subtraction of unsigned binary numbers can be done most conveniently by means 
of complements, as discussed in Section 1.5. Remember that the subtraction  A - B can 
be done by taking the 2’s complement of  B and adding it to  A . The 2’s complement can 
be obtained by taking the 1’s complement and adding 1 to the least significant pair of 
bits. The 1’s complement can be implemented with inverters, and a 1 can be added to 
the sum through the input carry. 
B3
P3
G3
P2
G2
P1
G1
P0
G0
C0
A3
P3
C3
C4
S3
C4
P2
C2
S2
P1
C1
S1
P0
S0
B2
A2
B1
A1
B0
A0
C0
Carry
Lookahead
Generator
 Four-bit adder with carry lookahead 

142  Chapter 4  Combinational Logic
 The circuit for subtracting  A - B consists of an adder with inverters placed between 
each data input  B and the corresponding input of the full adder. The input carry  C0 must 
be equal to 1 when subtraction is performed. The operation thus performed becomes  A , 
plus the 1’s complement of  B , plus 1. This is equal to  A plus the 2’s complement of  B . 
For unsigned numbers, that gives  A - B if  A Ú B or the 2’s complement of  1B - A2 
if  A 6 B. For signed numbers, the result is  A - B, provided that there is no overflow. 
(See Section 1.6.) 
 The addition and subtraction operations can be combined into one circuit with one 
common binary adder by including an exclusive-OR gate with each full adder. A four-bit 
adder–subtractor circuit is shown in  Fig.  4.13 . The mode input  M controls the operation. 
When  M = 0, the circuit is an adder, and when  M = 1, the circuit becomes a subtractor. 
Each exclusive-OR gate receives input  M and one of the inputs of  B . When  M = 0, we 
have  B { 0 = B. The full adders receive the value of  B , the input carry is 0, and the 
circuit performs  A plus  B . When  M = 1, we have  B { 1 = B and  C0 = 1. The  B inputs 
are all complemented and a 1 is added through the input carry. The circuit performs the 
operation  A plus the 2’s complement of  B . (The exclusive-OR with output  V is for 
detecting an overflow.) 
 It is worth noting that binary numbers in the signed-complement system are added 
and subtracted by the same basic addition and subtraction rules as are unsigned num-
bers. Therefore, computers need only one common hardware circuit to handle both types 
of arithmetic. The user or programmer must interpret the results of such addition or 
subtraction differently, depending on whether it is assumed that the numbers are signed 
or unsigned. 
B3
C4
C
V
S3
A3
FA
B2
C3
S2
A2
FA
B1
C2
S1
A1
FA
B0
C1
S0
A0
FA
C0
M
 Four-bit adder–subtractor (with overflow detection) 

Section 4.5  Binary Adder–Subtractor  143
 Overflow 
 When two numbers with  n digits each are added and the sum is a number occupying 
 n + 1 digits, we say that an overflow occurred. This is true for binary or decimal num-
bers, signed or unsigned. When the addition is performed with paper and pencil, an 
overflow is not a problem, since there is no limit by the width of the page to write down 
the sum. Overflow is a problem in digital computers because the number of bits that 
hold the number is finite and a result that contains  n + 1 bits cannot be accommodated 
by an  n -bit word. For this reason, many computers detect the occurrence of an overflow, 
and when it occurs, a corresponding flip-flop is set that can then be checked by the user. 
 The detection of an overflow after the addition of two binary numbers depends on 
whether the numbers are considered to be signed or unsigned. When two unsigned 
numbers are added, an overflow is detected from the end carry out of the most signifi-
cant position. In the case of signed numbers, two details are important: the leftmost bit 
always represents the sign, and negative numbers are in 2’s-complement form. When 
two signed numbers are added, the sign bit is treated as part of the number and the end 
carry does not indicate an overflow. 
 An overflow cannot occur after an addition if one number is positive and the other 
is negative, since adding a positive number to a negative number produces a result 
whose magnitude is smaller than the larger of the two original numbers. An overflow 
may occur if the two numbers added are both positive or both negative. To see how this 
can happen, consider the following example: Two signed binary numbers,  +70  and  +80, 
are stored in two eight-bit registers. The range of numbers that each register can accom-
modate is from binary  +127 to binary  -128. Since the sum of the two numbers is  +150, 
it exceeds the capacity of an eight-bit register. This is also true for  -70 and  -80. The two 
additions in binary are shown next, together with the last two carries: 
 
carries:
  0 1
  
carries:
1 0
+70
 
0  1000110
-70
1  0111010
+80
 
0  1010000
-80
1  0110000
  +150
  
1  0010110
  
-150
0  1101010
 
 Note that the eight-bit result that should have been positive has a negative sign bit (i.e., 
the eighth bit) and the eight-bit result that should have been negative has a positive sign 
bit. If, however, the carry out of the sign bit position is taken as the sign bit of the result, 
then the nine-bit answer so obtained will be correct. But since the answer cannot be 
accommodated within eight bits, we say that an overflow has occurred. 
 An overflow condition can be detected by observing the carry into the sign bit position 
and the carry out of the sign bit position. If these two carries are not equal, an overflow 
has occurred. This is indicated in the examples in which the two carries are explicitly 
shown. If the two carries are applied to an exclusive-OR gate, an overflow is detected 
when the output of the gate is equal to 1. For this method to work correctly, the 2’s comple-
ment of a negative number must be computed by taking the 1’s complement and adding 1. 
This takes care of the condition when the maximum negative number is complemented. 

144  Chapter 4  Combinational Logic
 The binary adder–subtractor circuit with outputs  C and  V is shown in  Fig.  4.13 . If the 
two binary numbers are considered to be unsigned, then the  C bit detects a carry after 
addition or a borrow after subtraction. If the numbers are considered to be signed, then 
the  V bit detects an overflow. If  V = 0 after an addition or subtraction, then no overflow 
occurred and the  n -bit result is correct. If  V = 1, then the result of the operation contains 
 n + 1 bits, but only the rightmost  n bits of the number fit in the space available, so an 
overflow has occurred. The  1n + 12 th bit is the actual sign and has been shifted out of 
position. 
 4.6  DE CI MA L A D D E R 
 Computers or calculators that perform arithmetic operations directly in the decimal 
number system represent decimal numbers in binary coded form. An adder for such 
a computer must employ arithmetic circuits that accept coded decimal numbers and 
present results in the same code. For binary addition, it is sufficient to consider a 
pair of significant bits together with a previous carry. A decimal adder requires a 
minimum of nine inputs and five outputs, since four bits are required to code each 
decimal digit and the circuit must have an input and output carry. There is a wide 
variety of possible decimal adder circuits, depending upon the code used to repre-
sent the decimal digits. Here we examine a decimal adder for the BCD code. (See 
Section 1.7.) 
 BCD Adder 
 Consider the arithmetic addition of two decimal digits in BCD, together with an input 
carry from a previous stage. Since each input digit does not exceed 9, the output sum 
cannot be greater than  9 + 9 + 1 = 19, the 1 in the sum being an input carry. Sup-
pose we apply two BCD digits to a four-bit binary adder. The adder will form the sum 
in  binary and produce a result that ranges from 0 through 19. These binary numbers 
are listed in  Table  4.5 and are labeled by symbols  K, Z8, Z4, Z2, and  Z1.  K is the carry, 
and the subscripts under the letter  Z represent the weights 8, 4, 2, and 1 that can be 
assigned to the four bits in the BCD code. The columns under the binary sum list the 
binary value that appears in the outputs of the four-bit binary adder. The output sum 
of two decimal digits must be represented in BCD and should appear in the form 
listed in the columns under “BCD Sum.” The problem is to find a rule by which the 
binary sum is converted to the correct BCD digit representation of the number in the 
BCD sum. 
 In examining the contents of the table, it becomes apparent that when the binary sum 
is equal to or less than 1001, the corresponding BCD number is identical, and therefore 
no conversion is needed. When the binary sum is greater than 1001, we obtain an invalid 
BCD representation. The addition of binary 6 (0110) to the binary sum converts it to 
the correct BCD representation and also produces an output carry as required. 

150  Chapter 4  Combinational Logic
with exclusive-NOR circuits and are applied to an AND gate to give the output binary 
variable  1A = B2 . The other two outputs use the  x variables to generate the Boolean 
functions listed previously. This is a multilevel implementation and has a regular pattern. 
The procedure for obtaining magnitude comparator circuits for binary numbers with 
more than four bits is obvious from this example. 
 4.9  DE CO DE R S 
 Discrete quantities of information are represented in digital systems by binary codes. 
A binary code of  n bits is capable of representing up to  2n distinct elements of coded 
information. A  decoder is a combinational circuit that converts binary information from 
(A  B)
(A  B)
(A  B)
x3
A3
B3
A2
B2
A1
B1
A0
B0
x2
x1
x0
 Four-bit magnitude comparator 

Section 4.9  Decoders  151
 n input lines to a maximum of  2n unique output lines. If the  n -bit coded information has 
unused combinations, the decoder may have fewer than  2n outputs. 
 The decoders presented here are called  n -to- m -line decoders, where  m … 2n. Their 
purpose is to generate the  2n (or fewer) minterms of  n input variables. Each combination 
of inputs will assert a unique output. The name  decoder is also used in conjunction with 
other code converters, such as a BCD-to-seven-segment decoder. 
 As an example, consider the three-to-eight-line decoder circuit of  Fig.  4.18 . The three 
inputs are decoded into eight outputs, each representing one of the minterms of the 
three input variables. The three inverters provide the complement of the inputs, and each 
one of the eight AND gates generates one of the minterms. A particular application of 
this decoder is binary-to-octal conversion. The input variables represent a binary num-
ber, and the outputs represent the eight digits of a number in the octal number system. 
However, a three-to-eight-line decoder can be used for decoding  any three-bit code to 
provide eight outputs, one for each element of the code. 
D0  xyz 
D1  xyz
D2  xyz 
D3  xyz 
D4  xyz 
D5  xyz 
D6  xyz 
D7  xyz 
z
y
x
 Three-to-eight-line decoder 

152  Chapter 4  Combinational Logic
 The operation of the decoder may be clarified by the truth table listed in  Table  4.6 . 
For each possible input combination, there are seven outputs that are equal to 0 and 
only one that is equal to 1. The output whose value is equal to 1 represents the minterm 
equivalent of the binary number currently available in the input lines. 
 Some decoders are constructed with NAND gates. Since a NAND gate produces the 
AND operation with an inverted output, it becomes more economical to generate the 
decoder minterms in their complemented form. Furthermore, decoders include one or 
more  enable inputs to control the circuit operation. A two-to-four-line decoder with an 
enable input constructed with NAND gates is shown in  Fig.  4.19 . The circuit operates 
with complemented outputs and a complement enable input. The decoder is enabled 
when  E is equal to 0 (i.e., active-low enable). As indicated by the truth table, only one 
 Truth Table of a Three-to-Eight-Line Decoder 
 Inputs 
 Outputs 
 x 
 y 
 z 
 D 0 
 D 1 
 D 2 
 D 3 
 D 4 
 D 5 
 D 6 
 D 7 
D0
D1
D2
A
B
E
D3
(a) Logic diagram
(b) Truth table
E
A
B
D0
D1
D2
D3
X
X
 Two-to-four-line decoder with enable input 

Section 4.9  Decoders  153
output can be equal to 0 at any given time; all other outputs are equal to 1. The output 
whose value is equal to 0 represents the minterm selected by inputs  A and  B . The circuit 
is disabled when  E is equal to 1, regardless of the values of the other two inputs. When 
the circuit is disabled, none of the outputs are equal to 0 and none of the minterms are 
selected. In general, a decoder may operate with complemented or uncomplemented 
outputs. The enable input may be activated with a 0 or with a 1 signal. Some decoders 
have two or more enable inputs that must satisfy a given logic condition in order to 
enable the circuit. 
 A decoder with enable input can function as a  demultiplexer— a circuit that receives 
information from a single line and directs it to one of  2n possible output lines. The 
selection of a specific output is controlled by the bit combination of  n selection lines. 
The decoder of  Fig.  4.19 can function as a one-to-four-line demultiplexer when  E is 
taken as a data input line and  A and  B are taken as the selection inputs. The single 
input variable  E has a path to all four outputs, but the input information is directed to 
only one of the output lines, as specified by the binary combination of the two selection 
lines  A and  B . This feature can be verified from the truth table of the circuit. For 
example, if the selection lines  AB = 10, output  D2 will be the same as the input value 
 E , while all other outputs are maintained at 1. Because decoder and demultiplexer 
operations are obtained from the same circuit, a decoder with an enable input is 
referred to as a  decoder – demultiplexer . 
 Decoders with enable inputs can be connected together to form a larger decoder 
circuit.  Figure  4.20 shows two 3-to-8-line decoders with enable inputs connected to form 
a 4-to-16-line decoder. When  w  0, the top decoder is enabled and the other is disabled. 
The bottom decoder outputs are all 0’s, and the top eight outputs generate minterms 
0000 to 0111. When  w  1, the enable conditions are reversed: The bottom decoder 
outputs generate minterms 1000 to 1111, while the outputs of the top decoder are all 
0’s. This example demonstrates the usefulness of enable inputs in decoders and other 
 4 * 16 decoder constructed with two  3 * 8 decoders 
x
y
z
w
D0 to D7
D8 to D15
3  8
decoder
E
3  8
decoder
E

154  Chapter 4  Combinational Logic
combinational logic components. In general, enable inputs are a convenient feature for 
interconnecting two or more standard components for the purpose of combining them 
into a similar function with more inputs and outputs. 
 Combinational Logic Implementation 
 A decoder provides the  2n minterms of  n input variables. Each asserted output of the 
decoder is associated with a unique pattern of input bits. Since any Boolean function 
can be expressed in sum-of-minterms form, a decoder that generates the minterms of 
the function, together with an external OR gate that forms their logical sum, provides 
a hardware implementation of the function. In this way, any combinational circuit with 
 n inputs and  m outputs can be implemented with an  n -to-2  n  -line decoder and  m OR 
gates. 
 The procedure for implementing a combinational circuit by means of a decoder and 
OR gates requires that the Boolean function for the circuit be expressed as a sum of 
minterms. A decoder is then chosen that generates all the minterms of the input vari-
ables. The inputs to each OR gate are selected from the decoder outputs according to 
the list of minterms of each function. This procedure will be illustrated by an example 
that implements a full-adder circuit. 
 From the truth table of the full adder (see  Table  4.4 ), we obtain the functions for the 
combinational circuit in sum-of-minterms form: 
 S(x, y, z) = (1, 2, 4, 7)
C(x, y, z) = (3, 5, 6, 7) 
 Since there are three inputs and a total of eight minterms, we need a three-to-eight-line 
decoder. The implementation is shown in  Fig.  4.21 . The decoder generates the eight 
minterms for  x ,  y , and  z . The OR gate for output  S forms the logical sum of minterms 1, 
2, 4, and 7. The OR gate for output  C forms the logical sum of minterms 3, 5, 6, and 7. 
S
C
x
y
z
3  8
decoder
 Implementation of a full adder with a decoder 

Section 4.10  Encoders  155
 A function with a long list of minterms requires an OR gate with a large number of 
inputs. A function having a list of  k minterms can be expressed in its complemented form 
 F with  2n - k minterms. If the number of minterms in the function is greater than  2n>2, 
then  F can be expressed with fewer minterms. In such a case, it is advantageous to use 
a NOR gate to sum the minterms of  F. The output of the NOR gate complements this 
sum and generates the normal output  F . If NAND gates are used for the decoder, as in 
 Fig.  4.19 , then the external gates must be NAND gates instead of OR gates. This is 
because a two-level NAND gate circuit implements a sum-of-minterms function and is 
equivalent to a two-level AND–OR circuit. 
 4.10  E NC OD E R S 
 An encoder is a digital circuit that performs the inverse operation of a decoder. An 
encoder has  2n (or fewer) input lines and  n output lines. The output lines, as an aggregate, 
generate the binary code corresponding to the input value. An example of an encoder 
is the octal-to-binary encoder whose truth table is given in  Table  4.7 . It has eight inputs 
(one for each of the octal digits) and three outputs that generate the corresponding 
binary number. It is assumed that only one input has a value of 1 at any given time. 
 The encoder can be implemented with OR gates whose inputs are determined 
directly from the truth table. Output  z is equal to 1 when the input octal digit is 1, 3, 5, 
or 7. Output  y is 1 for octal digits 2, 3, 6, or 7, and output  x is 1 for digits 4, 5, 6, or 7. These 
conditions can be expressed by the following Boolean output functions: 
 z = D1 + D3 + D5 + D7
y = D2 + D3 + D6 + D7
x = D4 + D5 + D6 + D7 
 The encoder can be implemented with three OR gates. 
 Truth Table of an Octal-to-Binary Encoder 
 Inputs 
 Outputs 
 D 0 
 D 1 
 D 2 
 D 3 
 D 4 
 D 5 
 D 6 
 D 7 
 x 
 y 
 z 

156  Chapter 4  Combinational Logic
 The encoder defined in  Table  4.7 has the limitation that only one input can be active 
at any given time. If two inputs are active simultaneously, the output produces an unde-
fined combination. For example, if  D3 and  D6 are 1 simultaneously, the output of the 
encoder will be 111 because all three outputs are equal to 1. The output 111 does not 
represent either binary 3 or binary 6. To resolve this ambiguity, encoder circuits must 
establish an input priority to ensure that only one input is encoded. If we establish a 
higher priority for inputs with higher subscript numbers, and if both  D3 and  D6 are 1 at 
the same time, the output will be 110 because  D6 has higher priority than  D3. 
 Another ambiguity in the octal-to-binary encoder is that an output with all 0’s is 
generated when all the inputs are 0; but this output is the same as when  D0 is equal to 1. 
The discrepancy can be resolved by providing one more output to indicate whether at 
least one input is equal to 1. 
 Priority Encoder 
 A priority encoder is an encoder circuit that includes the priority function. The operation 
of the priority encoder is such that if two or more inputs are equal to 1 at the same time, 
the input having the highest priority will take precedence. The truth table of a four-input 
priority encoder is given in  Table  4.8 . In addition to the two outputs  x and  y , the circuit 
has a third output designated by  V ; this is a  valid bit indicator that is set to 1 when one or 
more inputs are equal to 1. If all inputs are 0, there is no valid input and  V is equal to 0. 
The other two outputs are not inspected when  V equals 0 and are specified as don’t-care 
conditions. Note that whereas  X ’s in output columns represent don’t-care conditions, the 
 X ’s in the input columns are useful for representing a truth table in condensed form. 
Instead of listing all 16 minterms of four variables, the truth table uses an  X to represent 
either 1 or 0. For example,  X 100 represents the two minterms 0100 and 1100. 
 According to  Table  4.8 , the higher the subscript number, the higher the priority of 
the input. Input  D3 has the highest priority, so, regardless of the values of the other 
inputs, when this input is 1, the output for  xy is 11 (binary 3).  D2 has the next priority 
level. The output is 10 if  D2 = 1, provided that  D3 = 0, regardless of the values of the 
other two lower priority inputs. The output for  D1 is generated only if higher priority 
inputs are 0, and so on down the priority levels. 
 Truth Table of a Priority Encoder 
 Inputs 
 Outputs 
 D 0 
 D 1 
 D 2 
 D 3 
 x 
 y 
 V 
 X 
 X 
 X 
 X 
 X 
 X 
 X 
 X 

Section 4.10  Encoders  157
 The maps for simplifying outputs  x and  y are shown in  Fig.  4.22 . The minterms for the 
two functions are derived from Table 4.8. Although the table has only five rows, when 
each X in a row is replaced first by 0 and then by 1, we obtain all 16 possible input com-
binations. For example, the fourth row in the table, with inputs XX10, represents the four 
minterms 0010, 0110, 1010, and 1110. The simplified Boolean expressions for the priority 
encoder are obtained from the maps. The condition for output  V is an OR function of 
all the input variables. The priority encoder is implemented in  Fig.  4.23 according to the 
following Boolean functions: 
 
 x = D2 + D3
 
y = D3 + D1  D2
V = D0 + D1 + D2 + D3 
X
D0D1
D2D3
X
D0
D1
D3
D2
m0
m1
m3
m2
m4
m5
m7
m6
m14
m15
m10
m13
m12
m9
m11
m8
X
D0D1
D2D3
D0
D1
D3
D2
m0
m1
m3
m2
m4
m5
m7
m6
m14
m15
m10
m13
m12
m9
m11
m8
x  D2  D3
y  D3  D1D2
 Maps for a priority encoder 
D3
D2
D1
D0
y
x
V
 Four-input priority encoder 

158  Chapter 4  Combinational Logic
 4.11  M U LT I P L E X E R S 
 A multiplexer is a combinational circuit that selects binary information from one of 
many input lines and directs it to a single output line. The selection of a particular input 
line is controlled by a set of selection lines. Normally, there are  2n input lines and  n selec-
tion lines whose bit combinations determine which input is selected. 
 A two-to-one-line multiplexer connects one of two 1-bit sources to a common desti-
nation, as shown in  Fig.  4.24 . The circuit has two data input lines, one output line, and 
one selection line  S . When  S = 0, the upper AND gate is enabled and  I0 has a path to 
the output. When  S = 1, the lower AND gate is enabled and  I1 has a path to the output. 
The multiplexer acts like an electronic switch that selects one of two sources. The block 
diagram of a multiplexer is sometimes depicted by a wedge-shaped symbol, as shown in 
 Fig.  4.24(b) . It suggests visually how a selected one of multiple data sources is directed 
into a single destination. The multiplexer is often labeled “MUX” in block diagrams. 
 A four-to-one-line multiplexer is shown in  Fig.  4.25 . Each of the four inputs,  I0 
through  I3, is applied to one input of an AND gate. Selection lines  S1 and  S0 are decoded 
to select a particular AND gate. The outputs of the AND gates are applied to a single 
OR gate that provides the one-line output. The function table lists the input that is 
passed to the output for each combination of the binary selection values. To demonstrate 
the operation of the circuit, consider the case when  S1S0 = 10. The AND gate associated 
with input  I2 has two of its inputs equal to 1 and the third input connected to  I2. The 
other three AND gates have at least one input equal to 0, which makes their outputs 
equal to 0. The output of the OR gate is now equal to the value of  I2, providing a path 
from the selected input to the output. A multiplexer is also called a  data selector , since 
it selects one of many inputs and steers the binary information to the output line. 
 The AND gates and inverters in the multiplexer resemble a decoder circuit, and indeed, 
they decode the selection input lines. In general, a 2  n  -to-1-line multiplexer is constructed 
from an  n -to-2  n  decoder by adding  2n input lines to it, one to each AND gate. The outputs 
of the AND gates are applied to a single OR gate. The size of a multiplexer is specified by 
Y
I0
I1
S
(a) Logic diagram
(b) Block diagram
I0
S
Y
I1
MUX
 Two-to-one-line multiplexer 

Section 4.11  Multiplexers  159
the number  2n of its data input lines and the single output line. The  n selection lines are 
implied from the  2n data lines. As in decoders, multiplexers may have an enable input to 
control the operation of the unit. When the enable input is in the inactive state, the outputs 
are disabled, and when it is in the active state, the circuit functions as a normal multiplexer. 
 Multiplexer circuits can be combined with common selection inputs to provide 
 multiple-bit selection logic. As an illustration, a quadruple 2-to-1-line multiplexer is shown 
in  Fig.  4.26 . The circuit has four multiplexers, each capable of selecting one of two input 
lines. Output  Y0 can be selected to come from either input  A0 or input  B0. Similarly, 
output  Y1 may have the value of  A1 or  B1, and so on. Input selection line  S selects one of 
the lines in each of the four multiplexers. The enable input  E must be active (i.e., asserted) 
for normal operation. Although the circuit contains four 2-to-1-line multiplexers, we are 
more likely to view it as a circuit that selects one of two 4-bit sets of data lines. As shown 
in the function table, the unit is enabled when  E = 0. Then, if  S = 0, the four  A inputs 
have a path to the four outputs. If, by contrast,  S = 1, the four  B inputs are applied to the 
outputs. The outputs have all 0’s when  E = 1, regardless of the value of  S . 
 Boolean Function Implementation 
 In Section 4.9, it was shown that a decoder can be used to implement Boolean functions 
by employing external OR gates. An examination of the logic diagram of a multiplexer 
reveals that it is essentially a decoder that includes the OR gate within the unit. The 
(a) Logic diagram
(b) Function table
Y
I0
I1
I2
I3
S1
S0
Y
S1
S0
I0
I1
I2
I3
 Four-to-one-line multiplexer 

160  Chapter 4  Combinational Logic
minterms of a function are generated in a multiplexer by the circuit associated with the 
selection inputs. The individual minterms can be selected by the data inputs, thereby 
providing a method of implementing a Boolean function of  n variables with a multi-
plexer that has  n selection inputs and  2n data inputs, one for each minterm. 
 We will now show a more efficient method for implementing a Boolean function of 
 n variables with a multiplexer that has  n - 1 selection inputs. The first  n - 1 variables 
of the function are connected to the selection inputs of the multiplexer. The remaining 
single variable of the function is used for the data inputs. If the single variable is denoted 
A0
Y0
Y1
Y2
Y3
A1
A2
A3
B0
B1
B2
B3
S
E
(select)
(enable)
Function table
E
S
Output Y
all 0’s
select A
select B
X
 Quadruple two-to-one-line multiplexer 

Section 4.11  Multiplexers  161
by  z , each data input of the multiplexer will be  z ,  z, 1, or 0. To demonstrate this proce-
dure, consider the Boolean function 
 F (x, y, z) = (1, 2, 6, 7) 
 This function of three variables can be implemented with a four-to-one-line multiplexer 
as shown in  Fig.  4.27 . The two variables  x and  y are applied to the selection lines in that 
order;  x is connected to the  S1 input and  y to the  S0 input. The values for the data input 
lines are determined from the truth table of the function. When  xy = 00, output  F is 
equal to  z because  F = 0 when  z = 0 and  F = 1 when  z = 1. This requires that variable 
 z be applied to data input 0. The operation of the multiplexer is such that when  xy = 00, 
data input 0 has a path to the output, and that makes  F equal to  z . In a similar fashion, 
we can determine the required input to data lines 1, 2, and 3 from the value of  F when 
 xy = 01, 10, and 11, respectively. This particular example shows all four possibilities that 
can be obtained for the data inputs. 
 The general procedure for implementing any Boolean function of  n variables with a 
multiplexer with  n - 1 selection inputs and  2n-1 data inputs follows from the previous 
example. To begin with, Boolean function is listed in a truth table. Then first  n - 1 vari-
ables in the table are applied to the selection inputs of the multiplexer. For each com-
bination of the selection variables, we evaluate the output as a function of the last 
variable. This function can be 0, 1, the variable, or the complement of the variable. These 
values are then applied to the data inputs in the proper order. 
 As a second example, consider the implementation of the Boolean function 
 F (A, B, C, D) = (1, 3, 4, 11, 12, 13, 14, 15) 
 This function is implemented with a multiplexer with three selection inputs as shown in 
 Fig.  4.28 . Note that the first variable  A must be connected to selection input  S2 so that 
 A ,  B, and  C correspond to selection inputs  S2, S1, and  S0, respectively. The values for the 
S0
S1
y
x
z
z
F
(b) Multiplexer implementation
(a) Truth table
4  1 MUX
x
y
z
F
F  z
F  z
F  0
F  1
 Implementing a Boolean function with a multiplexer 

162  Chapter 4  Combinational Logic
data inputs are determined from the truth table listed in the figure. The corresponding 
data line number is determined from the binary combination of  ABC . For example, the 
table shows that when  ABC = 101, F = D, so the input variable  D is applied to data 
input 5. The binary constants 0 and 1 correspond to two fixed signal values. When inte-
grated circuits are used, logic 0 corresponds to signal ground and logic 1 is equivalent to 
the power signal, depending on the technology (e.g., 3 V). 
 Three-State Gates 
 A multiplexer can be constructed with three-state gates—digital circuits that exhibit 
three states. Two of the states are signals equivalent to logic 1 and logic 0 as in a conven-
tional gate. The third state is a  high-impedance state in which (1) the logic behaves like 
an open circuit, which means that the output appears to be disconnected, (2) the circuit 
has no logic significance, and (3) the circuit connected to the output of the three-state 
gate is not affected by the inputs to the gate. Three-state gates may perform any con-
ventional logic, such as AND or NAND. However, the one most commonly used is the 
buffer gate. 
 The graphic symbol for a three-state buffer gate is shown in  Fig.  4.29 . It is distinguished 
from a normal buffer by an input control line entering the bottom of the symbol. The 
buffer has a normal input, an output, and a control input that determines the state of the 
output. When the control input is equal to 1, the output is enabled and the gate behaves 
like a conventional buffer, with the output equal to the normal input. When the control 
S0
S1
S2
8  1 MUX
F
C
B
A
D
A
B
C
D
F
F  D
F  D
F  D
F  0
F  0
F  D
F  1
F  1
 Implementing a four-input function with a multiplexer 

Section 4.11  Multiplexers  163
input is 0, the output is disabled and the gate goes to a high-impedance state, regardless 
of the value in the normal input. The high-impedance state of a three-state gate provides 
a special feature not available in other gates. Because of this feature, a large number of 
three-state gate outputs can be connected with wires to form a common line without 
endangering loading effects. 
 The construction of multiplexers with three-state buffers is demonstrated in  Fig.  4.30 . 
buffers and an inverter. The two outputs are connected together to form a single output 
line. (Note that this type of connection cannot be made with gates that do not have 
three-state outputs.) When the select input is 0, the upper buffer is enabled by its control 
input and the lower buffer is disabled. Output  Y is then equal to input  A . When the select 
input is 1, the lower buffer is enabled and  Y is equal to  B . 
 The construction of a four-to-one-line multiplexer is shown in  Fig.  4.30(b) . The out-
puts of 4 three-state buffers are connected together to form a single output line. The 
control inputs to the buffers determine which one of the four normal inputs  I0 through 
Normal input A
Output Y  A if C  1
High-impedance if C  0
Control input C
 Graphic symbol for a three-state buffer 
I0
I1
I2
I3
Select
Enable
Y
A
B
Y
Select
(a) 2-to-1-line mux
(b) 4-to-1-line mux
2  4
decoder
S1
S0
EN
 Multiplexers with three-state gates 

164  Chapter 4  Combinational Logic
 I3 will be connected to the output line. No more than one buffer may be in the active 
state at any given time. The connected buffers must be controlled so that only 1 three-
state buffer has access to the output while all other buffers are maintained in a high-
impedance state. One way to ensure that no more than one control input is active at any 
given time is to use a decoder, as shown in the diagram. When the enable input of the 
decoder is 0, all of its four outputs are 0 and the bus line is in a high-impedance state 
because all four buffers are disabled. When the enable input is active, one of the three-
state buffers will be active, depending on the binary value in the select inputs of the 
decoder. Careful investigation reveals that this circuit is another way of constructing a 
four-to-one-line multiplexer. 
 4.12  H DL M O D E L S O F C O M B IN ATI O N A L 
CI RCUIT S 
 The Verilog HDL was introduced in Section 3.10. In the current section, we introduce 
additional features of Verilog, present more elaborate examples, and compare alternative 
descriptions of combinational circuits in Verilog. Sequential circuits are presented in 
Chapter 5. As mentioned previously, the module is the basic building block for modeling 
hardware with the Verilog HDL. The logic of a module can be described in any one (or a 
combination) of the following modeling styles: 
 
•  Gate-level modeling using instantiations of predefined and user-defined primitive 
gates. 
 
•  Dataflow modeling using continuous assignment statements with the keyword 
 assign . 
 
•  Behavioral modeling using procedural assignment statements with the keyword 
 always . 
 Gate-level (structural) modeling describes a circuit by specifying its gates and how they 
are connected with each other. Dataflow modeling is used mostly for describing the 
Boolean equations of combinational logic. We’ll also consider here behavioral modeling 
that is used to describe combinational and sequential circuits at a higher level of abstrac-
tion. Combinational logic can be designed with truth tables, Boolean equations, and 
schematics; Verilog has a construct corresponding to each of these “classical” approaches 
to design: user-defined primitives, continuous assignments, and primitives, as shown in 
 Fig.  4.31 . There is one other modeling style, called switch-level modeling. It is sometimes 
used in the simulation of MOS transistor circuit models, but not in logic synthesis. We 
will not consider switch-level modeling. 
 Gate-Level Modeling 
 Gate-level modeling was introduced in Section 3.10 with a simple example. In this type 
of representation, a circuit is specified by its logic gates and their interconnections. Gate-
level modeling provides a textual description of a schematic diagram. The Verilog HDL 

Section 4.12  HDL Models of Combinational Circuits  165
includes 12 basic gates as predefined primitives. Four of these primitive gates are of the 
three-state type. The other eight are the same as the ones listed in Section 2.8. They are 
all declared with the lowercase keywords  and, nand, or, nor, xor, xnor, not, and  buf . 
Primitives such as  and are  n -input primitives. They can have any number of scalar inputs 
(e.g., a three-input  and primitive). The  buf and  not primitives are  n -output primitives. 
A single input can drive multiple output lines distinguished by their identifiers. 
 The Verilog language includes a functional description of each type of gate, too. The 
logic of each gate is based on a four-valued system. When the gates are simulated, 
the simulator assigns one value to the output of each gate at any instant. In addition to 
the two logic values of 0 and 1, there are two other values:  unknown and  high impedance . 
An unknown value is denoted by  x and a high impedance by  z . An unknown value is 
assigned during simulation when the logic value of a signal is ambiguous—for instance, 
if it cannot be determined whether its value is 0 or 1 (e.g., a flip-flop without a reset 
condition). A high-impedance condition occurs at the output of three-state gates that 
are not enabled or if a wire is inadvertently left unconnected. The four-valued logic truth 
tables for the  and, or, xor, and  not primitives are shown in  Table  4.9 . The truth table for 
the other four gates is the same, except that the outputs are complemented. Note that 
for the  and gate, the output is 1 only when both inputs are 1 and the output is 0 if any 
input is 0. Otherwise, if one input is  x or  z , the output is  x . The output of the  or gate is 0 
if both inputs are 0, is 1 if any input is 1, and is  x otherwise. 
 When a primitive gate is listed in a module, we say that it is  instantiated in the module. 
In general, component instantiations are statements that reference lower level compo-
nents in the design, essentially creating unique copies (or  instances ) of those components 
in the higher level module. Thus, a module that uses a gate in its description is said to 
Boolean equation
Continuous assignment
Primitive (gate)
User-defined primitive
Truth table
Schematic
Verilog model
(combinational logic)
 Relationship of Verilog constructs to truth tables, Boolean equations, and schematics 

166  Chapter 4  Combinational Logic
 instantiate the gate. Think of instantiation as the HDL counterpart of placing and 
 connecting parts on a circuit board. 
 We now present two examples of gate-level modeling. Both examples use identifiers 
having multiple bit widths, called  vectors . The syntax specifying a vector includes within 
square brackets two numbers separated with a colon. The following Verilog statements 
specify two vectors: 
 output [0: 3] D;
 wire 
[7: 0] SUM; 
 The first statement declares an output vector  D with four bits, 0 through 3. The second 
declares a wire vector  SUM with eight bits numbered 7 through 0. ( Note : The first (left-
most) number (array index) listed is always the most significant bit of the vector.) The 
individual bits are specified within square brackets, so  D[2] specifies bit 2 of  D . It is also 
possible to address parts (contiguous bits) of vectors. For example,  SUM[2: 0] specifies 
the three least significant bits of vector  SUM . 
 HDL Example 4.1 shows the gate-level description of a two-to-four-line decoder. 
(See  Fig.  4.19 .) This decoder has two data inputs  A and  B and an enable input  E . The 
four outputs are specified with the vector  D . The  wire declaration is for internal connec-
tions. Three  not gates produce the complement of the inputs, and four  nand gates provide 
the outputs for  D . Remember that  the output is always listed first in the port list of a 
primitive , followed by the inputs. This example describes the decoder of  Fig.  4.19 and 
follows the procedures established in Section 3.10. Note that the keywords  not and  nand 
are written only once and do not have to be repeated for each gate, but commas must 
be inserted at the end of each of the gates in the series, except for the last statement, 
which must be terminated with a semicolon. 
 Truth Table for Predefined Primitive Gates 
 and 
 x 
 z 
 or 
 x 
 z 
 x 
 x 
 x 
 x 
 x 
 x 
 x 
 x 
 x 
 x 
 x 
 x 
 z 
 x 
 x 
 x 
 z 
 x 
 x 
 x 
 xor 
 x 
 z 
 not 
 input 
 output 
 x 
 x 
 
 x 
 x 
 
 x 
 x 
 x 
 x 
 x 
 
 x 
 x 
 z 
 x 
 x 
 x 
 x 
 
 z 
 x 

Section 4.12  HDL Models of Combinational Circuits  167
 HDL Example 4.1 (Two-to-Four-Line Decoder) 
 // Gate-level description of two-to-four-line decoder
 // Refer to  Fig.  4.19 with symbol  E replaced by  enable , for clarity.
 module decoder_2x4_gates (D, A, B, enable);
 output 
[0: 3] 
D;
 input 
 
A, B;
 input 
 
enable;
 wire 
 
A_not,B_not, enable_not;
 not
 G1  (A_not, A),
 G2  (B_not, B),
 G3  (enable_not, enable);
 nand
  G4  (D[0], A_not, B_not, enable_not),
 G5  (D[1], A_not, B, enable_not),
 G6  (D[2], A, B_not, enable_not),
 G7  (D[3], A, B, enable_not);
 endmodule 
 Two or more modules can be combined to build a hierarchical description of a design. 
There are two basic types of design methodologies: top down and bottom up. In a 
 top-down design, the top-level block is defined and then the subblocks necessary to 
build the top-level block are identified. In a  bottom-up design, the building blocks are 
first identified and then combined to build the top-level block. Take, for example, the 
binary adder of  Fig.  4.9 . It can be considered as a top-block component built with four 
full-adder blocks, while each full adder is built with two half-adder blocks. In a top-down 
design, the four-bit adder is defined first, and then the two adders are described. In a 
bottom-up design, the half adder is defined, then each full adder is constructed, and then 
the four-bit adder is built from the full adders. 
 A bottom-up hierarchical description of a four-bit adder is shown in HDL 
 Example 4.2. The half adder is defined by instantiating primitive gates. The next mod-
ule describes the full adder by instantiating and connecting two half adders. The third 
module describes the four-bit adder by instantiating and connecting four full adders. 
Note that the first character of an identifier cannot be a number, but can be an under-
score, so the module name  _4bitadder is valid. An alternative name that is meaningful, 
but does not require a leading underscore, is  adder_4_bit . The instantiation is done by 
using the name of the module that is instantiated together with a new (or the same) 
set of port names. For example, the half adder  HA1 inside the full adder module is 
instantiated with ports  S1 ,  C1 ,  x, and  y . This produces a half adder with outputs  S1 and 
 C1 and inputs  x and  y . 

168  Chapter 4  Combinational Logic
 HDL Example 4.2 (Ripple-Carry Adder) 
 // Gate-level description of four-bit ripple carry adder
 // Description of half adder ( Fig.  4.5b )
 //  module half_adder (S, C, x, y); 
// Verilog 1995 syntax
 //  output S, C;
 //  input 
x, y;
 module half_adder ( output S, C,  input x, y); 
 // Verilog 2001, 2005 syntax
 // Instantiate primitive gates
 xor (S, x, y);
 and (C, x, y);
 endmodule 
 // Description of full adder ( Fig.  4.8 ) 
 // Verilog 1995 syntax
 //  module full_adder (S, C, x, y, z);
 //  output 
S, C;
 //  input 
x, y, z;
 module full_adder ( output S, C,  input x, y, z); 
// Verilog 2001, 2005 syntax
 wire S1, C1, C2;
 // Instantiate half adders
 half_adder HA1 (S1, C1, x, y);
 half_adder HA2 (S, C2, S1, z);
 or G1 (C, C2, C1);
 endmodule 
 // Description of four-bit adder ( Fig.  4.9 ) 
// Verilog 1995 syntax
 //  module ripple_carry_4_bit_adder (Sum, C4, A, B, C0);
 //  output [3: 0] 
Sum;
 //  output 
C4;
 // input  [3: 0] 
A, B;
 //  input  
C0;
 // Alternative Verilog 2001, 2005 syntax:
 module ripple_carry_4_bit_adder (  output [3: 0] Sum,  output C4,  
input [3: 0] A, B,  input C0);
 wire 
C1, C2, C3; 
// Intermediate carries
 // Instantiate chain of full adders
 full_adder 
FA0 (Sum[0], C1, A[0], B[0], C0),
 
FA1 (Sum[1], C2, A[1], B[1], C1),
 
FA2 (Sum[2], C3, A[2], B[2], C2),
 
FA3 (Sum[3], C4, A[3], B[3], C3);
 endmodule 
 HDL Example 4.2 illustrates Verilog 2001, 2005 syntax, which eliminates extra typing 
of identifiers declaring the mode (e.g.,  output ), type ( reg ), and declaration of a vector range 
(e.g., [3: 0]) of a port. The first version of the standard (1995) uses separate statements for 
these declarations. 

Section 4.12  HDL Models of Combinational Circuits  169
 Note that modules can be instantiated (nested) within other modules, but module 
declarations cannot be nested; that is, a module definition (declaration) cannot be placed 
within another module declaration. In other words, a module definition cannot be 
inserted into the text between the  module and  endmodule keywords of another module. 
The only way one module definition can be incorporated into another module is by 
instantiating it. Instantiating modules within other modules creates a hierarchical 
decomposition of a design. A description of a module is said to be a  structural descrip-
tion if it is composed of instantiations of other modules. Note also that instance names 
must be specified when defined modules are instantiated (such as  FA0 for the first full 
adder in the third module), but using a name is optional when instantiating primitive 
gates. Module  ripple_carry_4_bit_adder is composed of instantiated and interconnected 
full adders, each of which is itself composed of half adders and some  glue logic . The top 
level, or parent module, of the design hierarchy is the module  ripple_carry_4_ bit_adder. 
Four copies of  full_adder are its child modules, etc.  C0 is an input of the cell forming the 
least significant bit of the chain, and  C4 is the output of the cell forming the most 
 significant bit. 
 Three-State Gates 
 As mentioned in Section 4.11, a three-state gate has a control input that can place the 
gate into a high-impedance state. The high-impedance state is symbolized by  z in Verilog. 
There are four types of three-state gates, as shown in  Fig.  4.32 . The  bufif1 gate behaves 
like a normal buffer if  control = 1. The output goes to a high-impedance state  z when 
 control = 0. The  bufif0 gate behaves in a similar fashion, except that the high-impedance 
state occurs when  control = 1. The two  notif gates operate in a similar manner, except 
that the output is the complement of the input when the gate is not in a high-impedance 
state. The gates are instantiated with the statement 
 gatename 1output,input,control2; 
in
out
control
bufif1
in
out
control
bufif0
in
out
control
notif1
in
out
control
notif0
 Three-state gates 

170  Chapter 4  Combinational Logic
 The gate name can be that of any 1 of the 4 three-state gates. In simulation, the output 
can result in 0, 1,  x , or  z . Two examples of gate instantiation are 
 bufif1 
(OUT, A, control);
 notif0 
(Y, B, enable); 
 In the first example, input  A is transferred to  OUT when  control = 1.  OUT goes to  z 
when  control = 0. In the second example, output  Y = z when  enable = 1 and output 
 Y = B when  enable = 0. 
 The outputs of three-state gates can be connected together to form a common output 
line. To identify such a connection, Verilog HDL uses the keyword  tri (for tristate) to 
indicate that the output has multiple drivers. As an example, consider the two-to-one-
line multiplexer with three-state gates shown in  Fig.  4.33 . 
A
B
m_out
select
 Two-to-one-line multiplexer with three-state buffers 
 The HDL description must use a  tri data type for the output:
 //  Mux with three-state output
 module mux_tri (m_out, A, B, select);
 output m_out;
 input 
A, B, select;
 tri 
m_out;
 bufif1 (m_out, A, select);
 bufif0 (m_out, B, select);
 endmodule 
 The 2 three-state buffers have the same output. In order to show that they have a com-
mon connection, it is necessary to declare  m_out with the keyword  tri. 
 Keywords  wire and  tri are examples of a set of data types called  nets , which represent 
connections between hardware elements. In simulation, their value is determined by a 
continuous assignment statement or by the device whose output they represent. The word 
 net is not a keyword, but represents a class of data types, such as  wir e , wor, wand, tri, 
 supply1, and supply0. The  wire declaration is used most frequently. In fact, if an identifier 
is used, but not declared, the language specifies that it will be interpreted (by default) as 
a  wire . The net  wor models the hardware implementation of the wired-OR configuration 
(emitter-coupled logic). The  wand models the wired-AND configuration (open-collector 
technology; see  Fig.  3.26 ). The nets  supply1 and  supply0 represent power supply and 
ground, respectively. They are used to hardwire an input of a device to either 1 or 0. 

Section 4.12  HDL Models of Combinational Circuits  171
 Dataflow Modeling 
 Dataflow modeling of combinational logic uses a number of operators that act on binary 
operands to produce a binary result. Verilog HDL provides about 30 different operators. 
form. (A complete list of operators supported by Verilog 2001, 2005 can be found in 
operations, so different symbols are used for each. The plus symbol  1+2 indicates the 
arithmetic operation of addition; the bitwise logic AND operation (conjunction) uses 
the symbol &. There are special symbols for bitwise logical OR (disjunction), NOT, and 
XOR. The equality symbol uses two equals signs (without spaces between them) to 
distinguish it from the equals sign used with the  assign statement. The bitwise operators 
operate bit by bit on a pair of vector operands to produce a vector result. The concat-
enation operator provides a mechanism for appending multiple operands. For example, 
two operands with two bits each can be concatenated to form an operand with four bits. 
The conditional operator acts like a multiplexer and is explained later, in conjunction 
with HDL Example 4.6. 
 It should be noted that a bitwise operator (e.g., &) and its corresponding logical 
operator (e.g., ! ) may produce different results, depending on their operand. If the 
operands are scalar the results will be identical; if the operands are vectors the result 
will not necessarily match. For example, & (1010) is (0101), and !(1010) is 0. A binary 
value is considered to be logically true if it is not 0. In general, use the bitwise opera-
tors to describe arithmetic operations and the logical operators to describe logical 
operations. 
 Dataflow modeling uses continuous assignments and the keyword assign. A continu-
ous assignment is a statement that assigns a value to a net. The data type family  net is 
used in Verilog HDL to represent a physical connection between circuit elements. A net 
 Some Verilog HDL Operators 
 Symbol 
 Operation 
Symbol
 Operation 
  
 binary addition 
 
  
 binary subtraction 
 
 & 
 bitwise AND 
&&
 logical AND 
  
 bitwise OR 
||
 logical OR 
 ^ 
 bitwise XOR 
 
 ∼ 
 bitwise NOT 
!
 logical NOT 
  
 equality 
 
  
 greater than 
 
  
 less than 
 
 {} 
 concatenation 
 
 ?: 
 conditional 
 

172  Chapter 4  Combinational Logic
is declared explicitly by a net keyword (e.g.,  wire ) or by declaring an identifier to be an 
input port. The logic value associated with a net is determined by what the net is con-
nected to. If the net is connected to an output of a gate, the net is said to be  driven by 
the gate, and the logic value of the net is determined by the logic values of the inputs to 
the gate and the truth table of the gate. If the identifier of a net is the left-hand side of 
a continuous assignment statement or a procedural assignment statement, the value 
assigned to the net is specified by a Boolean expression that uses operands and opera-
tors. As an example, assuming that the variables were declared, a two-to-one-line mul-
tiplexer with scalar data inputs  A and  B , select input  S , and output  Y is described with 
the continuous assignment 
 assign Y  (A && S) || (B && S) 
 The relationship between  Y ,  A ,  B , and  S is declared by the keyword  assign , followed by 
the target output  Y and an equals sign. Following the equals sign is a Boolean expres-
sion. In hardware terms, this assignment would be equivalent to connecting the output 
of the OR gate to wire  Y . 
 The next two examples show the dataflow models of the two previous gate-level 
examples. The dataflow description of a two-to-four-line decoder with active-low output 
enable and inverted output is shown in HDL Example 4.3. The circuit is defined with 
four continuous assignment statements using Boolean expressions, one for each output. 
The dataflow description of the four-bit adder is shown in HDL Example 4.4. The addi-
tion logic is described by a single statement using the operators of addition and concat-
enation. The plus symbol () specifies the binary addition of the four bits of  A with the 
four bits of  B and the one bit of  C _ in . The target output is the  concatenation of the 
output carry  C _ out and the four bits of  Sum . Concatenation of operands is expressed 
within braces and a comma separating the operands. Thus,  {C_out, Sum} represents the 
five-bit result of the addition operation. 
 HDL Example 4.3 (Dataflow: Two-to-Four Line Decoder) 
 // Dataflow description of two-to-four-line decoder
 // See  Fig.  4.19 . Note: The figure uses symbol E, but the
 // Verilog model uses enable to clearly indicate functionality.
 module decoder_2x4_df ( 
// Verilog 2001, 2005 syntax
  output 
[0: 3] 
  D,
  input 
 
  A, B,
 
 
  enable
 );
  assign 
D[0]  !((!A) && (!B) && (!enable)), 
 
 D[1]  !(*!A) && B && (!enable)), 
 
 D[2]  !(A && B && (!enable) 
 
 D[3]  !(A && B && (!enable)) 
 endmodule 

Section 4.12  HDL Models of Combinational Circuits  173
 Dataflow HDL models describe combinational circuits by their  function rather than 
by their gate structure. To show how dataflow descriptions facilitate digital design, con-
sider the 4-bit magnitude comparator described in HDL Example 4.5. The module 
specifies two 4-bit inputs  A and  B and three outputs. One output ( A_lt_B ) is logic 1 if 
 A is less than  B , a second output ( A_gt_B ) is logic 1 if  A is greater than  B , and a third 
output ( A_eq_B ) is logic 1 if  A is equal to  B . Note that equality (identity) is symbolized 
with two equals signs ( ) to distinguish the operation from that of the assignment 
operator (). A Verilog HDL synthesis compiler can accept this module description as 
input, execute synthesis algorithms, and provide an output netlist and a schematic of a 
circuit equivalent to the one in  Fig.  4.17 , all without manual intervention! The designer 
need not draw the schematic. 
 HDL Example 4.4 (Dataflow: Four-Bit Adder) 
 // Dataflow description of four-bit adder
 // Verilog 2001, 2005 module port syntax
 module binary_adder (
  output [3: 0] 
Sum,
  output 
C_out,
  input [3: 0] 
A, B,
  input 
C_in
 );
  assign {C_out, Sum}  A  B  C_in;
 endmodule 
 HDL Example 4.5 (Dataflow: Four-Bit Comparator) 
 // Dataflow description of a four-bit comparator //V2001, 2005 syntax
 module mag_compare
 (  output 
  A_lt_B, A_eq_B, A_gt_B,
  input [3: 0] 
  A, B
 );
  assign A_lt_B  (A  B);
  assign A_gt_B  (A  B);
  assign A_eq_B  (A  B);
 endmodule 
 The next example uses the conditional operator ( ? : ). This operator takes three 
operands: 
 condition ? true-expression : false-expression; 
 The condition is evaluated. If the result is logic 1, the true expression is evaluated and 
used to assign a value to the left-hand side of an assignment statement. If the result is 

174  Chapter 4  Combinational Logic
logic 0, the false expression is evaluated. The two conditions together are equivalent to 
an if–else condition. HDL Example 4.6 describes a two-to-one-line multiplexer using 
the conditional operator. The continuous assignment 
 assign OUT  select ? A : B; 
 specifies the condition that  OUT  A if  select  1, else  OUT  B if  select  0. 
 HDL Example 4.6 (Dataflow: Two-to-One Multiplexer) 
 // Dataflow description of two-to-one-line multiplexer
 module mux_2x1_df(m_out, A, B, select);
  output 
m_out;
  input 
A, B;
  input 
select;
  assign m_out  (select)? A : B;
 endmodule 
 Behavioral Modeling 
 Behavioral modeling represents digital circuits at a functional and algorithmic level. It 
is used mostly to describe sequential circuits, but can also be used to describe combina-
tional circuits. Here, we give two simple combinational circuit examples to introduce the 
subject. Behavioral modeling is presented in more detail in Section 5.6, after the study 
of sequential circuits. 
 Behavioral descriptions use the keyword  always , followed by an optional event con-
trol expression and a list of procedural assignment statements. The event control expres-
sion specifies when the statements will execute. The target output of a procedural 
assignment statement must be of the  reg data type. Contrary to the  wire data type, 
whereby the target output of an assignment may be continuously updated, a  reg data 
type retains its value until a new value is assigned. 
 HDL Example 4.7 shows the behavioral description of a two-to-one-line multiplexer. 
(Compare it with HDL Example 4.6.) Since variable  m_out is a target output, it must 
be declared as  reg data (in addition to the  output declaration). The procedural assign-
ment statements inside the  always block are executed every time there is a change in 
any of the variables listed after the @ symbol. (Note that there is no semicolon (;) at the 
end of the  always statement.) In this case, these variables are the input variables  A ,  B , 
and  select. The statements execute if  A, B , or  select changes value. Note that the keyword 
 or , instead of the bitwise logical OR operator “|”, is used between variables. The condi-
tional statement  if–else provides a decision based upon the value of the  select input. The 
 if statement can be written without the equality symbol: 
 if (select) OUT  A; 
 The statement implies that  select is checked for logic 1. 

Section 4.12  HDL Models of Combinational Circuits  175
 HDL Example 4.8 describes the function of a four-to-one-line multiplexer. The  select 
input is defined as a two-bit vector, and output  y is declared to have type  reg . The  always 
statement, in this example, has a sequential block enclosed between the keywords  case 
and  endcase . The block is executed whenever any of the inputs listed after the  @ symbol 
changes in value. The  case statement is a multiway conditional branch construct. When-
ever  in_0, in_1, in_2, in_3 or  select change, the case expression ( select ) is evaluated and 
its value compared, from top to bottom, with the values in the list of statements that 
follow, the so-called  case items. The statement associated with the first  case item that 
matches the  case expression is executed. In the absence of a match, no statement is 
executed. Since  select is a two-bit number, it can be equal to 00, 01, 10, or 11. The  case 
items have an implied priority because the list is evaluated from top to bottom. 
 The list is called a  sensitivity list (Verilog 2001, 2005) and is equivalent to the  event 
control expression (Verilog 1995) formed by “ORing” the signals. Combinational logic 
is reactive—when an input changes an output may change. 
 HDL Example 4.7 (Behavioral: Two-to-One Line Multiplexer) 
 // Behavioral description of two-to-one-line multiplexer
 module mux_2x1_beh (m_out, A, B, select);
  output 
m_out;
  input 
A, B, select;
  reg 
m_out;
  always  
@(A or B or select)
 
 if (select  1) m_out  A;
 
 else m_out 5 B;
 endmodule 
 HDL Example 4.8 (Behavioral: Four-to-One Line Multiplexer) 
 // Behavioral description of four-to-one line multiplexer
 // Verilog 2001, 2005 port syntax
 module mux_4x1_beh
 (  output reg m_out,
  input 
in_0, in_1, in_2, in_3,
  input [1: 0] select
 );
 always @ (in_0, in_1, in_2, in_3, select) 
// Verilog 2001, 2005 syntax
  case (select)
 
 2’b00: 
m_out  in_0;
 
 2’b01: 
m_out  in_1;
 
 2’b10: 
m_out  in_2;
 
 2’b11: 
m_out  in_3;
  endcase 
 endmodule 

176  Chapter 4  Combinational Logic
 Binary numbers in Verilog are specified and interpreted with the letter  b preceded 
by a prime. The size of the number is written first and then its value. Thus,  2b01 speci-
fies a two-bit binary number whose value is 01. Numbers are stored as a bit pattern in 
memory, but they can be referenced in decimal, octal, or hexadecimal formats with the 
letters  d o, and  h, respectively. For example, 4HA  4d10  4b1010 and have the 
same internal representation in a simulator. If the base of the number is not specified, 
its interpretation defaults to decimal. If the size of the number is not specified, the 
system assumes that the size of the number is at least 32 bits; if a host simulator has a 
larger word length—say, 64 bits—the language will use that value to store unsized 
numbers. The integer data type (keyword integer) is stored in a 32-bit representation. 
The underscore (_) may be inserted in a number to improve readability of the code 
(e.g.,  16b0101_1110_0101_0011 ). It has no other effect. 
 The  case construct has two important variations:  casex and  casez . The first will treat 
as don’t-cares any bits of the  case expression or the  case item that have logic value  x or 
 z . The  casez construct treats as don’t-cares only the logic value  z , for the purpose of 
detecting a match between the  case expression and a  case item. 
 The list of case items need not be complete. If the list of  case items does not include 
all possible bit patterns of the  case expression, no match can be detected. Unlisted  case 
items, i.e., bit patterns that are not explicitly decoded can be treated by using the  default 
keyword as the last item in the list of  case items. The associated statement will execute 
when no other match is found. This feature is useful, for example, when there are more 
possible state codes in a sequential machine than are actually used. Having a  default 
case item lets the designer map all of the unused states to a desired next state without 
having to elaborate each individual state, rather than allowing the synthesis tool to 
arbitrarily assign the next state. 
 The examples of behavioral descriptions of combinational circuits shown here are 
simple ones. Behavioral modeling and procedural assignment statements require knowl-
edge of sequential circuits and are covered in more detail in Section 5.6. 
 Writing a Simple Test Bench 
 A test bench is an HDL program used for describing and applying a stimulus to an HDL 
model of a circuit in order to test it and observe its response during simulation. Test 
benches can be quite complex and lengthy and may take longer to develop than the 
design that is tested. The results of a test are only as good as the test bench that is used 
to test a circuit. Care must be taken to write stimuli that will test a circuit thoroughly, 
exercising all of the operating features that are specified. However, the test benches 
considered here are relatively simple, since the circuits we want to test implement only 
combinational logic. The examples are presented to demonstrate some basic features of 
HDL stimulus modules.  Chapter  8 considers test benches in greater depth. 
 In addition to employing the  always statement, test benches use the  initial statement 
to provide a stimulus to the circuit being tested. We use the term “ always statement” 
loosely. Actually,  always is a Verilog language construct specifying  how the associated 
statement is to execute (subject to the event control expression). The  always statement 

Section 4.12  HDL Models of Combinational Circuits  177
executes repeatedly in a loop. The  initial statement executes only once, starting from 
simulation time 0, and may continue with any operations that are delayed by a given 
number of time units, as specified by the symbol #. For example, consider the  initial 
block 
 initial 
 begin 
 
A  0; B  0;
  #10 A  1;
  #20 A  0; B  1;
 end 
 The block is enclosed between the keywords  begin and  end . At time 0,  A and  B are set 
to 0. Ten time units later,  A is changed to 1. Twenty time units after that (at  t  30 ),  A  is 
changed to 0 and  B to 1. Inputs specified by a three-bit truth table can be generated with 
the  initial block: 
 initial 
 begin 
 D  3’b000;
  repeat (7)
 #10 D  D  3’b001;
 end 
 When the simulator runs, the three-bit vector  D is initialized to 000 at  time  0. The 
keyword  repeat specifies a looping statement:  D is incremented by 1 seven times, once 
every 10 time units. The result is a sequence of binary numbers from 000 to 111. 
 A stimulus module has the following form: 
 module test_module_name;
  // Declare local  reg and  wire identifiers.
  // Instantiate the design module under test.
  // Specify a stopwatch, using $finish to terminate the simulation.
  // Generate stimulus, using initial and always statements.
  // Display the output response (text or graphics (or both)).
 endmodule 
 A test module is written like any other module, but it typically has no inputs or outputs. 
The signals that are applied as inputs to the design module for simulation are declared 
in the stimulus module as local  reg data type. The outputs of the design module that are 
displayed for testing are declared in the stimulus module as local  wire data type. The 
module under test is then instantiated, using the local identifiers in its port list. 
design module by declaring local identifiers  t_A and  t_B as  reg type and checks the 
output of the design unit with the  wire identifier  t_C . The local identifiers are then used 
to instantiate the design module being tested. The simulator associates the (actual) local 
identifiers within the test bench,  t_A, t_B , and  t_C, with the formal identifiers of the 

178  Chapter 4  Combinational Logic
module ( A, B, C ). The association shown here is based on  position in the port list, which 
is adequate for the examples that we will consider. The reader should note, however, 
that Verilog  provides a more flexible  name association mechanism for connecting ports 
in larger circuits. 
 The response to the stimulus generated by the  initial and  al ways blocks will 
appear in text format as standard output and as waveforms (timing diagrams) in 
simulators having graphical output capability. Numerical outputs are displayed by 
using Verilog  system tasks . These are built-in system functions that are recognized 
by keywords that begin with the symbol  $ . Some of the system tasks that are useful 
for display are 
 
 $display —display a one-time value of variables or strings with an end-of-line return, 
 
 $write —same as  $display , but without going to next line, 
 
 $monitor —display variables whenever a value changes during a simulation run, 
 
 $time —display the simulation time, 
 
 $finish —terminate the simulation. 
 The syntax for  $display, $write, and $monitor is of the form 
 Task-name (format specification, argumentlist); 
 The format specification uses the symbol % to specify the radix of the numbers that are 
displayed and may have a string enclosed in quotes (). The base may be binary, decimal, 
hexadecimal, or octal, identified with the symbols %b, %d, %h, and %o, respectively 
(%B, %D, %H, and %O are valid too). For example, the statement 
 $display ("%d %b %b", C, A, B); 
 specifies the display of  C in decimal and of  A and  B in binary. Note that there are no 
commas in the format specification, that the format specification and argument list 
module t_circuit;
reg t_A, t_B;
wire t_C;
// Stimulus generators for
// t_A and t_B go here
initial # stop_time $finish;
endmodule
module circuit ( C , A, B )
input
A, B;
output
C;
// Description goes here
endmodule
parameter stop_time  1000 ;
  circuit M ( t_C,  t_A, t_B );
 Interaction between stimulus and design modules 

Section 4.12  HDL Models of Combinational Circuits  179
are separated by a comma, and that the argument list has commas between the 
 variables. An example that specifies a string enclosed in quotes may look like the 
statement 
 $display ("time  %0d A  %b", $time, A, B); 
 and will produce the display 
 time  3 A  10 B  1 
 where (time  ), (A  ), and (B  ) are part of the string to be displayed. The format 
specifiers %0d, %b, and %b specify the base for  $time ,  A , and  B , respectively. In display-
ing time values, it is better to use the format %0d instead of %d. This provides a display 
of the significant digits without the leading spaces that %d will include. (%d will display 
about 10 leading spaces because time is calculated as a 32-bit number.) 
 An example of a stimulus module is shown in HDL Example 4.9. The circuit to be 
tested is the two-to-one-line multiplexer described in Example 4.6. The module 
 t_mux_2x1_df has no ports. The inputs for the mux are declared with a  reg keyword and 
the outputs with a  wire keyword. The mux is instantiated with the local variables. The 
 initial block specifies a sequence of binary values to be applied during the simulation. 
The output response is checked with the  $monitor system task. Every time a variable in 
its argument changes value, the simulator displays the inputs, output, and time. The result 
of the simulation is listed under the simulation log in the example. It shows that 
 m_out  A when  select  1 and  m_out  B when  select  0 verifying the operation of 
the multiplexer. 
 HDL Example 4.9 (Test Bench) 
 // Test bench with stimulus for mux_2x1_df
 module t_mux_2x1_df;
  wire 
t_mux_out;
  reg 
t_A, t_B;
  reg 
t_select;
  parameter stop_time  50;
 mux_2x1_df M1 (t_mux_out, t_A, t_B, t_select); 
// Instantiation of circuit to be tested
 initial # stop_time $finish;
  initial  begin 
// Stimulus generator
 
 t_select  1; t_A  0; t_B  1;
  #10 t_A  1; t_B  0;
  #10 t_select  0;
  #10 t_A  0; t_B  1;
 end 
 initial begin 
// Response monitor
  //  $display ( time Select A B m_out );
  //  $monitor ( $time ,,  %b %b %b %b ,  t_select, t_A, t_B, t_m_out);

180  Chapter 4  Combinational Logic
 Logic simulation is a fast and accurate method of verifying that a model of a 
combinational circuit is correct. There are two types of verification: functional and 
timing. In  functional verification, we study the circuit logical operation indepen-
dently of timing considerations. This can be done by deriving the truth table of the 
combinational circuit. In  timing verification, we study the circuit’s operation by 
including the effect of delays through the gates. This can be done by observing the 
waveforms at the outputs of the gates when they respond to a given input. An exam-
ple of a circuit with gate delays was presented in Section 3.10 in HDL  Example  3.3 . 
We next show an HDL example that produces the truth table of a combinational 
circuit. A  $monitor system task displays the output caused by the given stimulus. 
A commented alternative statement having a  $displ ay task would create a header 
that could be used with a  $monitor statement to eliminate the repetition of names 
on each line of output. 
 The analysis of combinational circuits was covered in Section 4.3. A multilevel 
circuit of a full adder was analyzed, and its truth table was derived by inspection. The 
gate-level description of this circuit is shown in HDL Example 4.10. The circuit has 
three inputs, two outputs, and nine gates. The description of the circuit follows the 
interconnections between the gates according to the schematic diagram of  Fig.  4.2 . 
The stimulus for the circuit is listed in the second module. The inputs for simulating 
the circuit are specified with a three-bit  reg vector  D .  D[2] is equivalent to input  A , 
 D[1] to input  B , and  D[0] to input  C . The outputs of the circuit  F1 and  F2 are declared 
as wire. The complement of  F2 is named  F2_b to illustrate a common industry practice 
for designating the complement of a signal (instead of appending  _not ). This  procedure 
  $monitor ( time  ,  $time ,,  select  %b A  %b B  %b OUT  %b ,
  t_select, t_A, t_B, t_mux_out);
 end 
 endmodule 
 // Dataflow description of two-to-one-line multiplexer
 // from Example 4.6
 module mux_2x1_df (m_out, A, B, select);
  output 
m_out;
  input 
A, B;
  input 
select;
 assign m_out  (select)? A : B;
 endmodule 
 Simulation log:
 select  1 A  0 B  1 OUT  0 time  0
 select  1 A  1 B  0 OUT  1 time  10
 select  0 A  1 B  0 OUT  0 time  20
 select  0 A  0 B  1 OUT  1 time  30 

Section 4.12  HDL Models of Combinational Circuits  181
follows the steps outlined in  Fig.  4.34 . The  repeat loop provides the seven binary num-
bers after 000 for the truth table. The result of the simulation generates the output 
truth table displayed with the example. The truth table listed shows that the circuit is 
a full adder. 
 HDL Example 4.10 (Gate-Level Circuit) 
 // Gate-level description of circuit of  Fig.  4.2 
 module Circuit_of_Fig_4_2 (A, B, C, F1, F2);
  input A, B, C;
  output  F1, F2;
  wire T1, T2, T3, F2_b, E1, E2, E3;
  or g1 (T1, A, B, C);
  and g2 (T2, A, B, C);
  and g3 (E1, A, B);
  and g4 (E2, A, C);
  and g5 (E3, B, C);
  or g6 (F2, E1, E2, E3);
  not  g7 (F2_b, F2);
  and g8 (T3, T1, F2_b);
  or g9 (F1, T2, T3);
 endmodule 
 // Stimulus to analyze the circuit
 module test_circuit;
  reg [2: 0] D;
  wire F1, F2;
  Circuit_of_Fig_4_2 (D[2], D[1], D[0], F1, F2);
  initial 
  begin 
  D  3’b000;
  repeat (7) #10 D  D 1 1’b1;
  end 
  initial 
  $monitor ( ABC  %b F1  %b F2 %b , D, F1, F2);
 endmodule 
 Simulation log:  ABC  000 F1  0 F2 0
 ABC  001 F1  1 F2 0 ABC  010 F1  1 F2 0
 ABC  011 F1  0 F2 1 ABC  100 F1  1 F2 0
 ABC  101 F1  0 F2 1 ABC  110 F1  0 F2 1
 ABC  111 F1  1 F2 1 

 Chapter 5 
 Synchronous Sequential Logic 
 5.1  I NT ROD U C T IO N 
 Hand-held devices, cell phones, navigation receivers, personal computers, digital cameras, 
personal media players, and virtually all electronic consumer products have the ability to 
send, receive, store, retrieve, and process information represented in a binary format. The 
technology enabling and supporting these devices is critically dependent on electronic 
components that can store information, i.e., have memory. This chapter examines the 
operation and control of these devices and their use in circuits and enables you to better 
understand what is happening in these devices when you interact with them. The digital 
circuits considered thus far have been combinational—their output depends only and 
immediately on their inputs—they have no memory, i.e., dependence on past values of 
their inputs. Sequential circuits, however, act as storage elements and have memory. They 
can store, retain, and then retrieve information when needed at a later time. Our treatment 
will distinguish sequential logic from combinational logic. 
 5.2  S E QU E N T IA L C IR C U IT S 
 A block diagram of a sequential circuit is shown in  Fig.  5.1 . It consists of a combinational 
circuit to which storage elements are connected to form a feedback path. The storage 
elements are devices capable of storing binary information. The binary information 
stored in these elements at any given time defines the  state of the sequential circuit at 
that time. The sequential circuit receives binary information from external inputs that, 
together with the present state of the storage elements, determine the binary value of 
the outputs. These external inputs also determine the condition for changing the state 

Section 5.2  Sequential Circuits  191
in the storage elements. The block diagram demonstrates that the outputs in a sequen-
tial circuit are a function not only of the inputs, but also of the present state of the stor-
age elements. The next state of the storage elements is also a function of external inputs 
and the present state. Thus,  a sequential circuit is specified by a time sequence of inputs, 
outputs, and internal states . In contrast, the outputs of combinational logic depend only 
on the present values of the inputs. 
 There are two main types of sequential circuits, and their classification is a function of 
the timing of their signals. A  synchronous sequential circuit is a system whose behavior 
can be defined from the knowledge of its signals at discrete instants of time. The behavior 
of an  asynchronous sequential circuit depends upon the input signals at any instant of time 
 and the order in which the inputs change. The storage elements commonly used in asyn-
chronous sequential circuits are time-delay devices. The storage capability of a time-delay 
device varies with the time it takes for the signal to propagate through the device. In prac-
tice, the internal propagation delay of logic gates is of sufficient duration to produce the 
needed delay, so that actual delay units may not be necessary. In gate-type asynchronous 
systems, the storage elements consist of logic gates whose propagation delay provides the 
required storage. Thus, an asynchronous sequential circuit may be regarded as a combina-
tional circuit with feedback. Because of the feedback among logic gates, an asynchronous 
sequential circuit may become unstable at times. The instability problem imposes many 
difficulties on the designer. These circuits will not be covered in this text. 
 A synchronous sequential circuit employs signals that affect the storage elements at 
only discrete instants of time. Synchronization is achieved by a timing device called a 
 clock generator, which provides a clock signal having the form of a periodic train of  clock 
pulses . The clock signal is commonly denoted by the identifiers  clock and  clk . The clock 
pulses are distributed throughout the system in such a way that storage elements are 
affected only with the arrival of each pulse. In practice, the clock pulses determine  when 
computational activity will occur within the circuit, and other signals (external inputs 
and otherwise) determine  what changes will take place affecting the storage elements 
and the outputs. For example, a circuit that is to add and store two binary numbers would 
compute their sum from the values of the numbers and store the sum at the occurrence 
of a clock pulse. Synchronous sequential circuits that use clock pulses to control storage 
elements are called  clocked sequential circuits and are the type most frequently encoun-
tered in practice. They are called  synchronous circuits because the activity within the 
circuit and the resulting updating of stored values is synchronized to the occurrence of 
 Block diagram of sequential circuit 
Combinational
circuit
Memory
elements
Inputs
Outputs

192  Chapter 5  Synchronous Sequential Logic
clock pulses. The design of synchronous circuits is feasible because they seldom manifest 
instability problems and their timing is easily broken down into independent discrete 
steps, each of which can be considered separately. 
 The storage elements (memory) used in clocked sequential circuits are called  flip-
flops. A flip-flop is a binary storage device capable of storing one bit of information. In 
a stable state, the output of a flip-flop is either 0 or 1. A sequential circuit may use many 
flip-flops to store as many bits as necessary. The block diagram of a synchronous clocked 
sequential circuit is shown in  Fig.  5.2 . The  outputs are formed by a combinational logic 
function of the inputs to the circuit or the values stored in the flip-flops (or both). The 
value that is stored in a flip-flop when the clock pulse occurs is also determined by the 
inputs to the circuit or the values presently stored in the flip-flop (or both). The new 
value is stored (i.e., the flip-flop is updated) when a pulse of the clock signal occurs. 
Prior to the occurrence of the clock pulse, the combinational logic forming the next 
value of the flip-flop must have reached a stable value. Consequently, the speed at 
which the combinational logic circuits operate is critical. If the clock (synchronizing) 
pulses arrive at a regular interval, as shown in the timing diagram in  Fig.  5.2 , the com-
binational logic must respond to a change in the state of the flip-flop in time to be 
updated before the next pulse arrives. Propagation delays play an important role in 
determining the minimum interval between clock pulses that will allow the circuit to 
operate correctly. A change in state of the flip-flops is initiated only by a clock pulse 
transition—for example, when the value of the clock signals changes from 0 to 1. When 
a clock pulse is not active, the feedback loop between the value stored in the flip-flop 
and the value formed at the input to the flip-flop is effectively broken because the flip-
flop outputs cannot change even if the outputs of the combinational circuit driving their 
inputs change in value. Thus, the transition from one state to the next occurs only at 
predetermined intervals dictated by the clock pulses. 
 Synchronous clocked sequential circuit 
Combinational
circuit
Flip-flops
Inputs
Outputs
Clock pulses
(a) Block diagram
(b) Timing diagram of clock pulses

Section 5.3  Storage Elements: Latches  193
 5.3  S T OR A G E E L E ME N T S : L ATCHES 
 A storage element in a digital circuit can maintain a binary state indefinitely (as long 
as power is delivered to the circuit), until directed by an input signal to switch states. 
The major differences among various types of storage elements are in the number of 
inputs they possess and in the manner in which the inputs affect the binary state.  Storage 
elements that operate with signal levels (rather than signal transitions) are referred to as 
 latches ;  those controlled by a clock transition are flip-flops . Latches are said to be level 
sensitive devices; flip-flops are edge-sensitive devices. The two types of storage elements 
are related because latches are the basic circuits from which all flip-flops are con-
structed. Although latches are useful for storing binary information and for the design 
of asynchronous sequential circuits, they are not practical for use as storage elements 
in synchronous sequential circuits. Because they are the building blocks of flip-flops, 
however, we will consider the fundamental storage mechanism used in latches before 
considering flip-flops in the next section. 
 SR Latch 
 The  SR latch is a circuit with two cross-coupled NOR gates or two cross-coupled NAND 
gates, and two inputs labeled  S for set and  R for reset. The  SR latch constructed with two 
cross-coupled NOR gates is shown in  Fig.  5.3 . The latch has two useful states. When output 
 Q = 1 and  Q = 0, the latch is said to be in the  set state . When  Q = 0 and  Q = 1, it is 
in the  reset state . Outputs  Q and  Q are normally the complement of each other. However, 
when both inputs are equal to 1 at the same time, a condition in which both outputs are 
equal to 0 (rather than be mutually complementary) occurs. If both inputs are then switched 
to 0 simultaneously, the device will enter an unpredictable or undefined state or a meta-
stable state. Consequently, in practical applications, setting both inputs to 1 is forbidden. 
 Under normal conditions, both inputs of the latch remain at 0 unless the state has to be 
changed. The application of a momentary 1 to the  S input causes the latch to go to the set 
state. The  S input must go back to 0 before any other changes take place, in order to avoid 
the occurrence of an undefined next state that results from the forbidden input condition. 
As shown in the function table of  Fig.  5.3 (b), two input conditions cause the circuit to be in 
 SR latch with NOR gates 
R (reset)
S (set)
Q
Q
(a) Logic diagram
(b) Function table
(after S  1, R  0)
(after S  0, R  1)
Q
Q
R
S
(forbidden)

194  Chapter 5  Synchronous Sequential Logic
the set state. The first condition  (S = 1,R = 0) is the action that must be taken by input 
 S to bring the circuit to the set state. Removing the active input from  S leaves the circuit in 
the same state. After both inputs return to 0, it is then possible to shift to the reset state by 
momentary applying a 1 to the  R input. The 1 can then be removed from  R, whereupon the 
circuit remains in the reset state. Thus, when both inputs  S and  R are equal to 0, the latch 
can be in either the set or the reset state, depending on which input was most recently a 1. 
 If a 1 is applied to both the  S and  R inputs of the latch, both outputs go to 0. This 
action produces an undefined next state, because the state that results from the input 
transitions depends on the order in which they return to 0. It also violates the require-
ment that outputs be the complement of each other. In normal operation, this condition 
is avoided by making sure that 1’s are not applied to both inputs simultaneously. 
 The  SR latch with two cross-coupled NAND gates is shown in  Fig.  5.4 . It operates with 
both inputs normally at 1, unless the state of the latch has to be changed. The application 
of 0 to the S input causes output  Q to go to 1, putting the latch in the set state. When the  S 
input goes back to 1, the circuit remains in the set state. After both inputs go back to 1, we 
are allowed to change the state of the latch by placing a 0 in the  R input. This action causes 
the circuit to go to the reset state and stay there even after both inputs return to 1. The 
condition that is forbidden for the NAND latch is both inputs being equal to 0 at the same 
time, an input combination that should be avoided. 
 In comparing the NAND with the NOR latch, note that the input signals for the 
NAND require the complement of those values used for the NOR latch. Because the 
NAND latch requires a 0 signal to change its state, it is sometimes referred to as an  SR 
latch. The primes (or, sometimes, bars over the letters) designate the fact that the inputs 
must be in their complement form to activate the circuit. 
 The operation of the basic  SR latch can be modified by providing an additional input 
signal that determines (controls)  when the state of the latch can be changed by determining 
whether  S and  R (or  S  and  R ) can affect the circuit. An  SR latch with a control input is 
shown in  Fig.  5.5 . It consists of the basic  SR latch and two additional NAND gates. The 
control input  En acts as an  enable signal for the other two inputs.  The outputs of the  NAND 
gates stay at the logic-1 level as long as the enable signal remains at 0. This is the quiescent 
condition for the  SR latch. When the enable input goes to 1, information from the  S or  R 
input is allowed to affect the latch. The set state is reached with  S = 1, R = 0, and  En = 1 
 SR latch with NAND gates 
S (set)
R (reset)
Q
Q
(a) Logic diagram
(b) Function table
(after S  1, R  0)
(after S  0, R  1)
Q
Q
R
S
(forbidden)

Section 5.3  Storage Elements: Latches  195
(active-high enabled). To change to the reset state, the inputs must be  S = 0, R = 1, and 
 En = 1. In either case, when  En returns to 0, the circuit remains in its current state. The 
control input disables the circuit by applying 0 to  En, so that the state of the output does 
not change regardless of the values of  S and  R . Moreover, when  En = 1 and both the  S 
and  R inputs are equal to 0, the state of the circuit does not change. These conditions are 
listed in the function table accompanying the diagram. 
 An indeterminate condition occurs when all three inputs are equal to 1. This condition 
places 0’s on both inputs of the basic  SR latch, which puts it in the undefined state. When 
the enable input goes back to 0, one cannot conclusively determine the next state, because 
it depends on whether the  S or  R input goes to 0 first. This indeterminate condition makes 
this circuit difficult to manage, and it is seldom used in practice. Nevertheless, the SR latch 
is an important circuit because other useful latches and flip-flops are constructed from it. 
 D Latch (Transparent Latch) 
 One way to eliminate the undesirable condition of the indeterminate state in the  SR 
latch is to ensure that inputs  S and  R are never equal to 1 at the same time. This is 
done in the  D latch, shown in  Fig.  5.6 . This latch has only two inputs:  D (data) and 
 SR latch with control input 
(a) Logic diagram
(b) Function table
Q
Q
S
En
R
Next state of Q
No change
Indeterminate
No change
Q  0; reset state
Q  1; set state
S
En
R
X
X
 D latch 
Q
Q
(a) Logic diagram
(b) Function table
D
En
Next state of Q
No change
Q  0; reset state
Q  1; set state
X
En D

196  Chapter 5  Synchronous Sequential Logic
 En  (enable). The  D input goes directly to the  S input, and its complement is applied 
to the  R input. As long as the enable input is at 0, the cross-coupled  SR latch has both 
inputs at the 1 level and the circuit cannot change state regardless of the value of  D . 
The  D input is sampled when  En = 1. If  D = 1, the  Q output goes to 1, placing the 
circuit in the set state. If  D = 0, output  Q goes to 0, placing the circuit in the reset 
state. 
 The  D latch receives that designation from its ability to hold  data in its internal stor-
age. It is suited for use as a temporary storage for binary information between a unit 
and its environment. The binary information present at the data input of the  D latch is 
transferred to the  Q output when the enable input is asserted. The output follows 
changes in the data input as long as the enable input is asserted. This situation provides 
a path from input  D to the output, and for this reason, the circuit is often called a  trans-
parent latch. When the enable input signal is de-asserted, the binary information that 
was present at the data input at the time the transition occurred is retained (i.e., stored) 
at the  Q output until the enable input is asserted again. Note that an inverter could be 
placed at the enable input. Then, depending on the physical circuit, the external enabling 
signal will be a value of 0 (active low) or 1 (active high). 
 The graphic symbols for the various latches are shown in  Fig.  5.7 . A latch is designated 
by a rectangular block with inputs on the left and outputs on the right. One output 
designates the normal output, and the other (with the bubble designation) designates 
the complement output. The graphic symbol for the  SR latch has inputs  S and  R indi-
cated inside the block. In the case of a NAND gate latch, bubbles are added to the inputs 
to indicate that setting and resetting occur with a logic-0 signal. The graphic symbol for 
the  D latch has inputs  D and  En indicated inside the block. 
 5.4  S T OR A G E E L E ME N T S : F L IP-FLO PS 
 The state of a latch or flip-flop is switched by a change in the control input. This momentary 
change is called a  trigger, and the transition it causes is said to trigger the flip-flop. The  D 
latch with pulses in its control input is essentially a flip-flop that is triggered every time the 
pulse goes to the logic-1 level. As long as the pulse input remains at this level, any changes 
in the data input will change the output and the state of the latch. 
 Graphic symbols for latches 
S
R
SR
S
R
SR
D
En
D

Section 5.4  Storage Elements: Flip-Flops  197
 As seen from the block diagram of  Fig.  5.2 , a sequential circuit has a feedback path 
from the outputs of the flip-flops to the input of the combinational circuit. Conse-
quently, the inputs of the flip-flops are derived in part from the outputs of the same and 
other flip-flops. When latches are used for the storage elements, a serious difficulty 
arises. The state transitions of the latches start as soon as the clock pulse changes to the 
logic-1 level. The new state of a latch appears at the output while the pulse is still active. 
This output is connected to the inputs of the latches through the combinational circuit. 
If the inputs applied to the latches change while the clock pulse is still at the logic-1 
level, the latches will respond to new values and a new output state may occur. The 
result is an unpredictable situation, since the state of the latches may keep changing for 
as long as the clock pulse stays at the active level. Because of this unreliable operation, 
the output of a latch cannot be applied directly or through combinational logic to the 
input of the same or another latch when all the latches are triggered by a common clock 
source. 
 Flip-flop circuits are constructed in such a way as to make them operate properly 
when they are part of a sequential circuit that employs a common clock. The problem 
with the latch is that it responds to a change in the  level of a clock pulse. As shown in 
 Fig.  5.8 (a), a positive level response in the enable input allows changes in the output 
when the  D input changes while the clock pulse stays at logic 1. The key to the proper 
operation of a flip-flop is to trigger it only during a signal  transition . This can be accom-
plished by eliminating the feedback path that is inherent in the operation of the sequen-
tial circuit using latches. A clock pulse goes through two transitions: from 0 to 1 and the 
return from 1 to 0. As shown in  Fig.  5.8 , the positive transition is defined as the positive 
edge and the negative transition as the negative edge. There are two ways that a latch 
can be modified to form a flip-flop. One way is to employ two latches in a special con-
figuration that isolates the output of the flip-flop and prevents it from being affected 
while the input to the flip-flop is changing. Another way is to produce a flip-flop that 
 Clock response in latch and flip-flop 
(a) Response to positive level
(b) Positive-edge response
(c) Negative-edge response

198  Chapter 5  Synchronous Sequential Logic
triggers only during a signal transition (from 0 to 1 or from 1 to 0) of the synchronizing 
signal (clock) and is disabled during the rest of the clock pulse. We will now proceed to 
show the implementation of both types of flip-flops. 
 Edge-Triggered  D Flip-Flop 
 The construction of a  D flip-flop with two  D latches and an inverter is shown in  Fig.  5.9 . 
The first latch is called the master and the second the slave. The circuit samples the  D 
input and changes its output  Q only at the negative edge of the synchronizing or control-
ling clock (designated as  Clk ). When the clock is 0, the output of the inverter is 1. The 
slave latch is enabled, and its output  Q is equal to the master output  Y . The master latch 
is disabled because  Clk = 0. When the input pulse changes to the logic-1 level, the data 
from the external  D input are transferred to the master. The slave, however, is disabled 
as long as the clock remains at the 1 level, because its  enable input is equal to 0. Any 
change in the input changes the master output at  Y, but cannot affect the slave output. 
When the clock pulse returns to 0, the master is disabled and is isolated from the  D 
input. At the same time, the slave is enabled and the value of  Y is transferred to the 
output of the flip-flop at  Q . Thus,  a change in the output of the flip-flop can be triggered 
only by and during the transition of the clock from 1 to 0. 
 The behavior of the master–slave flip-flop just described dictates that (1) the output 
may change only once, (2) a change in the output is triggered by the negative edge of 
the clock, and (3) the change may occur only during the clock’s negative level. The value 
that is produced at the output of the flip-flop is the value that was  stored in the master 
stage immediately before the negative edge occurred . It is also possible to design the 
circuit so that the flip-flop output changes on the positive edge of the clock. This hap-
pens in a flip-flop that has an additional inverter between the  Clk terminal and the 
junction between the other inverter and input  En of the master latch. Such a flip-flop is 
triggered with a negative pulse, so that the negative edge of the clock affects the master 
and the positive edge affects the slave and the output terminal. 
 Another construction of an edge-triggered  D flip-flop uses three  SR latches as shown 
in  Fig.  5.10 . Two latches respond to the external  D (data) and  Clk (clock) inputs. The 
third latch provides the outputs for the flip-flop. The  S and  R inputs of the output latch 
 Master–slave  D flip-flop 
D
Q
D
En
D
En
D latch
(master)
D latch
(slave)
Y
Clk

Section 5.4  Storage Elements: Flip-Flops  199
are maintained at the logic-1 level when  Clk = 0. This causes the output to remain in 
its present state. Input  D may be equal to 0 or 1. If  D = 0 when  Clk becomes 1,  R 
changes to 0. This causes the flip-flop to go to the reset state, making  Q = 0. If there is 
a change in the  D input while  Clk = 1, terminal  R remains at 0 because  Q is 0. Thus, the 
flip-flop is locked out and is unresponsive to further changes in the input. When the 
clock returns to 0,  R goes to 1, placing the output latch in the quiescent condition with-
out changing the output. Similarly, if  D = 1 when  Clk goes from 0 to 1,  S changes to 0. 
This causes the circuit to go to the set state, making  Q = 1. Any change in  D while 
 Clk = 1 does not affect the output. 
 In sum, when the input clock in the positive-edge-triggered flip-flop makes a positive 
transition, the value of  D is transferred to  Q . A negative transition of the clock (i.e., from 
1 to 0) does not affect the output, nor is the output affected by changes in D when  Clk 
is in the steady logic-1 level or the logic-0 level. Hence, this type of flip-flop responds to 
the transition from 0 to 1 and nothing else. 
 The timing of the response of a flip-flop to input data and to the clock must be taken 
into consideration when one is using edge-triggered flip-flops. There is a minimum time 
called the  setup time during which the  D input must be maintained at a constant value prior 
to the occurrence of the clock transition. Similarly, there is a minimum time called the  hold 
time during which the  D input must not change after the application of the positive transi-
tion of the clock. The propagation delay time of the flip-flop is defined as the interval 
between the trigger edge and the stabilization of the output to a new state. These and other 
parameters are specified in manufacturers’ data books for specific logic families. 
 D -type positive-edge-triggered flip-flop 
Q
Q
S
R
Clk
D

200  Chapter 5  Synchronous Sequential Logic
 The graphic symbol for the edge-triggered  D flip-flop is shown in  Fig.  5.11 . It is simi-
lar to the symbol used for the  D latch, except for the arrowhead-like symbol in front of 
the letter  Clk, designating a  dynamic input. The  dynamic indicator (>) denotes the fact 
that the flip-flop responds to the edge transition of the clock. A bubble outside the block 
adjacent to the dynamic indicator designates a negative edge for triggering the circuit. 
The absence of a bubble designates a positive-edge response. 
 Other Flip-Flops 
 Very large-scale integration circuits contain several thousands of gates within one pack-
age. Circuits are constructed by interconnecting the various gates to provide a digital 
system. Each flip-flop is constructed from an interconnection of gates. The most eco-
nomical and efficient flip-flop constructed in this manner is the edge-triggered  D flip-
flop, because it requires the smallest number of gates. Other types of flip-flops can be 
constructed by using the  D flip-flop and external logic. Two flip-flops less widely used 
in the design of digital systems are the  JK and  T flip-flops. 
 There are three operations that can be performed with a flip-flop: Set it to 1, reset it 
to 0, or complement its output. With only a single input, the  D flip-flop can set or reset 
the output, depending on the value of the  D input immediately before the clock transi-
tion. Synchronized by a clock signal, the  JK flip-flop has two inputs and performs all 
three operations. The circuit diagram of a  JK flip-flop constructed with a  D flip-flop and 
gates is shown in  Fig.  5.12 (a). The  J input sets the flip-flop to 1, the  K input resets it to 
0, and when both inputs are enabled, the output is complemented. This can be verified 
by investigating the circuit applied to the  D input: 
 D = JQ + KQ 
 When  J = 1 and  K = 0, D = Q + Q = 1, so the next clock edge sets the output to 1. 
When  J = 0 and  K = 1, D = 0, so the next clock edge resets the output to 0. When 
both  J = K = 1 and  D = Q, the next clock edge complements the output. When both 
 J = K = 0 and  D = Q, the clock edge leaves the output unchanged. The graphic sym-
bol for the  JK flip-flop is shown in  Fig.  5.12 (b). It is similar to the graphic symbol of the 
 D flip-flop, except that now the inputs are marked  J and  K . 
 The  T (toggle) flip-flop is a complementing flip-flop and can be obtained from a  JK 
flip-flop when inputs  J and  K are tied together. This is shown in  Fig.  5.13 (a). When 
 Graphic symbol for edge-triggered  D flip-flop 
D
Clk
(a) Positive-edge
D
Clk
(a) Negative-edge

Section 5.4  Storage Elements: Flip-Flops  201
 T = 0 (J = K = 0), a clock edge does not change the output. When  T = 1 (J = K = 1), 
a clock edge complements the output. The complementing flip-flop is useful for design-
ing binary counters. 
 The  T flip-flop can be constructed with a  D flip-flop and an exclusive-OR gate as 
shown in  Fig.  5.13 (b). The expression for the  D input is 
 D = T { Q = TQ + TQ 
 When  T = 0, D = Q and there is no change in the output. When  T = 1, D = Q and 
the output complements. The graphic symbol for this flip-flop has a  T symbol in the input. 
 Characteristic Tables 
 A characteristic table defines the logical properties of a flip-flop by describing its oper-
ation in tabular form. The characteristic tables of three types of flip-flops are presented 
in  Table  5.1 . They define the next state (i.e., the state that results from a clock transition) 
 JK flip-flop 
D
J
K
Clk
J
K
Q
Q
Clk
Clk
(a) Circuit diagram
(b) Graphic symbol
 T flip-flop 
J
K
Clk
(a) From JK flip-flop
T
(c) Graphic symbol
T
Clk
(b) From D flip-flop
T
D
Clk

202  Chapter 5  Synchronous Sequential Logic
as a function of the inputs and the present state.  Q ( t ) refers to the present state (i.e., the 
state present prior to the application of a clock edge).  Q(t + 1) is the next state one 
clock period later. Note that the clock edge input is not included in the characteristic 
table, but is implied to occur between times  t and  t + 1. Thus,  Q(t) denotes the state of 
the flip-flop immediately before the clock edge, and  Q(t + 1) denotes the state that 
results from the clock transition. 
 The characteristic table for the  JK flip-flop shows that the next state is equal to the 
present state when inputs  J and  K are both equal to 0. This condition can be expressed 
as  Q(t + 1) = Q(t), indicating that the clock produces no change of state. When  K = 1 
and  J = 0, the clock resets the flip-flop and  Q(t + 1) = 0. With  J = 1 and  K = 0, the 
flip-flop sets and  Q(t + 1) = 1. When both  J and  K are equal to 1, the next state changes 
to the complement of the present state, a transition that can be expressed as 
 Q(t + 1) = Q(t). 
 The next state of a  D flip-flop is dependent only on the  D input and is independent 
of the present state. This can be expressed as  Q(t + 1) = D. It means that the next-state 
value is equal to the value of  D . Note that the  D flip-flop does not have a “no-change” 
condition. Such a condition can be accomplished either by disabling the clock or by 
operating the clock by having the output of the flip-flop connected into the  D input. 
Either method effectively circulates the output of the flip-flop when the state of the 
flip-flop must remain unchanged. 
 The characteristic table of the  T flip-flop has only two conditions: When  T = 0, the 
clock edge does not change the state; when  T = 1, the clock edge complements the state 
of the flip-flop. 
 Flip-Flop Characteristic Tables 
 JK Flip-Flop 
 J 
 K 
 Q(t  1)  
 Q ( t ) 
 No change 
 Reset 
 Set 
 Q(t) 
 Complement 
 D Flip-Flop 
 T Flip-Flop 
 D 
 Q(t  1)  
 T 
 Q(t  1)  
 Reset 
 Q ( t ) 
 No change 
 Set 
 Q(t) 
 Complement 

Section 5.4  Storage Elements: Flip-Flops  203
 Characteristic Equations 
 The logical properties of a flip-flop, as described in the characteristic table, can be 
expressed algebraically with a characteristic equation. For the  D flip-flop, we have the 
characteristic equation 
 Q(t + 1) = D 
 which states that the next state of the output will be equal to the value of input  D in the 
present state. The characteristic equation for the  JK flip-flop can be derived from the 
characteristic table or from the circuit of  Fig.  5.12 . We obtain 
 Q(t + 1) = JQ + KQ 
 where  Q is the value of the flip-flop output prior to the application of a clock edge. The 
characteristic equation for the  T flip-flop is obtained from the circuit of  Fig.  5.13 : 
 Q(t + 1) = T { Q = TQ + TQ 
 Direct Inputs 
 Some flip-flops have asynchronous inputs that are used to force the flip-flop to a par-
ticular state independently of the clock. The input that sets the flip-flop to 1 is called 
 preset or  direct set . The input that clears the flip-flop to 0 is called  clear or  direct reset . 
When power is turned on in a digital system, the state of the flip-flops is unknown. The 
direct inputs are useful for bringing all flip-flops in the system to a known starting state 
prior to the clocked operation. 
 A positive-edge-triggered  D flip-flop with active-low asynchronous reset is shown 
in  Fig.  5.14 . The circuit diagram is the same as the one in  Fig.  5.10 , except for the 
additional reset input connections to three NAND gates. When the reset input is 0, 
it forces output  Q to stay at 1, which, in turn, clears output  Q to 0, thus resetting the 
flip-flop. Two other connections from the reset input ensure that the  S input of the 
third  SR latch stays at logic 1 while the reset input is at 0, regardless of the values of 
 D and  Clk . 
 The graphic symbol for the  D flip-flop with a direct reset has an additional input 
marked with  R . The bubble along the input indicates that the reset is active at the logic-0 
level. Flip-flops with a direct set use the symbol  S for the asynchronous set input. 
 The function table specifies the operation of the circuit. When  R = 0, the output 
is reset to 0. This state is independent of the values of  D or  Clk . Normal clock opera-
tion can proceed only after the reset input goes to logic 1. The clock at  Clk is shown 
with an upward arrow to indicate that the flip-flop triggers on the positive edge of 
the clock. The value in  D is transferred to  Q with every positive-edge clock signal, 
provided that  R = 1. 

204  Chapter 5  Synchronous Sequential Logic
 5.5  A NA LY S IS O F C L O C K E D 
S E QU E N T IA L C IR C U IT S 
 Analysis describes what a given circuit will do under certain operating conditions. The 
behavior of a clocked sequential circuit is determined from the inputs, the outputs, and 
the state of its flip-flops. The outputs and the next state are both a function of the inputs 
and the present state. The analysis of a sequential circuit consists of obtaining a table or 
a diagram for the time sequence of inputs, outputs, and internal states. It is also possible 
Q
Q
S
R
Clock
Reset
D
(a) Circuit diagram
D
Q
Q
R
Clk
(b) Graphic symbol
Data
Clock
Reset
(b) Function table
R
Clk
D
Q Q
X
X
 D flip-flop with asynchronous reset
