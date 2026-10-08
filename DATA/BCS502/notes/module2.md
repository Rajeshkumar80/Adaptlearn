# BCS502 — Module 2

## Data Link Layer

**Subject:** BCS502 (Computer Networks)
**Module:** Module 2
**Content type:** module_notes
**Sources:** BCS502-module-2-textbook.txt

---

PART III
DATA-LINK LAYER
10.1
INTRODUCTION
Let us first discuss some issues related, directly or indirectly, to error detection and
correction.
10.1.1
Types of Errors
Whenever bits flow from one point to another, they are subject to unpredictable
changes because of interference. This interference can change the shape of the signal.
The term single-bit error means that only 1 bit of a given data unit (such as a byte,
character, or packet) is changed from 1 to 0 or from 0 to 1. The term burst error means
that 2 or more bits in the data unit have changed from 1 to 0 or from 0 to 1. Figure 10.1
shows the effect of a single-bit and a burst error on a data unit. 
A burst error is more likely to occur than a single-bit error because the duration of
the noise signal is normally longer than the duration of 1 bit, which means that when
noise affects data, it affects a set of bits. The number of bits affected depends on the
data rate and duration of noise. For example, if we are sending data at 1 kbps, a noise of
1/100 second can affect 10 bits; if we are sending data at 1 Mbps, the same noise can
affect 10,000 bits. 
10.1.2
Redundancy
The central concept in detecting or correcting errors is redundancy. To be able to
detect or correct errors, we need to send some extra bits with our data. These redundant
bits are added by the sender and removed by the receiver. Their presence allows the
receiver to detect or correct corrupted bits.
10.1.3
Detection versus Correction
The correction of errors is more difficult than the detection. In error detection, we are
only looking to see if any error has occurred. The answer is a simple yes or no. We are not
even interested in the number of corrupted bits. A single-bit error is the same for us as a
burst error. In error correction, we need to know the exact number of bits that are cor-
rupted and, more importantly, their location in the message. The number of errors and the
size of the message are important factors. If we need to correct a single error in an 8-bit
data unit, we need to consider eight possible error locations; if we need to correct two
Single-bit and burst error
Sent
Received
0 1 0 1 0 1 0 0 0 1 1 0 0 0 1 1
0 1 0 0 1 1 0 1 0 1 0 0 0 0 1 1
Corrupted bits
Length of burst error (8 bits)
Corrupted bit
0 0 0 0 1 0 1 0
0 0 0 0 0 0 1 0
Sent
Received
a. Single-bit error
b. Burst error
MODULE 2

CHAPTER 10
ERROR DETECTION AND CORRECTION
errors in a data unit of the same size, we need to consider 28 (permutation of 8 by 2)
possibilities. You can imagine the receiver’s difficulty in finding 10 errors in a data unit of
1000 bits.
10.1.4
Coding
Redundancy is achieved through various coding schemes. The sender adds redundant
bits through a process that creates a relationship between the redundant bits and the
actual data bits. The receiver checks the relationships between the two sets of bits to
detect errors. The ratio of redundant bits to data bits and the robustness of the process
are important factors in any coding scheme. 
We can divide coding schemes into two broad categories: block coding and convo-
lution coding. In this book, we concentrate on block coding; convolution coding is
more complex and beyond the scope of this book. 
10.2
BLOCK CODING
In block coding, we divide our message into blocks, each of k bits, called datawords.
We add r redundant bits to each block to make the length n = k + r. The resulting n-bit
blocks are called codewords. How the extra r bits are chosen or calculated is some-
thing we will discuss later. For the moment, it is important to know that we have a set
of datawords, each of size k, and a set of codewords, each of size of n. With k bits, we
can create a combination of 2k datawords; with n bits, we can create a combination of
2n codewords. Since n > k, the number of possible codewords is larger than the num-
ber of possible datawords. The block coding process is one-to-one; the same data-
word is always encoded as the same codeword. This means that we have 2n − 2k
codewords that are not used. We call these codewords invalid or illegal. The trick in
error detection is the existence of these invalid codes, as we discuss next. If the
receiver receives an invalid codeword, this indicates that the data was corrupted dur-
ing transmission.
10.2.1
Error Detection
How can errors be detected by using block coding? If the following two conditions are
met, the receiver can detect a change in the original codeword. 
1. The receiver has (or can find) a list of valid codewords.
2. The original codeword has changed to an invalid one.
words out of datawords by using a generator that applies the rules and procedures of
encoding (discussed later). Each codeword sent to the receiver may change during
transmission. If the received codeword is the same as one of the valid codewords, the
word is accepted; the corresponding dataword is extracted for use. If the received code-
word is not valid, it is discarded. However, if the codeword is corrupted during trans-
mission but the received word still matches a valid codeword, the error remains
undetected. 

PART III
DATA-LINK LAYER
Example 10.1
Let us assume that k = 2 and n = 3. Table 10.1 shows the list of datawords and codewords. Later,
we will see how to derive a codeword from a dataword.  
Assume the sender encodes the dataword 01 as 011 and sends it to the receiver. Consider the
following cases: 
1. The receiver receives 011. It is a valid codeword. The receiver extracts the dataword 01 from it.
2. The codeword is corrupted during transmission, and 111 is received (the leftmost bit is cor-
rupted). This is not a valid codeword and is discarded.
3. The codeword is corrupted during transmission, and 000 is received (the right two bits are
corrupted). This is a valid codeword. The receiver incorrectly extracts the dataword 00. Two
corrupted bits have made the error undetectable.  
Hamming Distance
One of the central concepts in coding for error control is the idea of the Hamming dis-
tance. The Hamming distance between two words (of the same size) is the number of
differences between the corresponding bits. We show the Hamming distance between two
words x and y as d(x, y). We may wonder why Hamming distance is important for error
detection. The reason is that the Hamming distance between the received codeword and
the sent codeword is the number of bits that are corrupted during transmission. For exam-
ple, if the codeword 00000 is sent and 01101 is received, 3 bits are in error and the Ham-
ming distance between the two is d(00000, 01101) = 3. In other words, if the Hamming
Process of error detection in block coding
A code for error detection in Example 10.1
Dataword
Codeword
Dataword
Codeword
An error-detecting code can detect only the types of errors for 
which it is designed; other types of errors may remain undetected.
Extract
Decoder
k bits
n bits
Dataword
Codeword
Checker
Receiver
Unreliable
transmission
Encoder
k bits
n bits
Dataword
Codeword
Generator
Sender
Discard

CHAPTER 10
ERROR DETECTION AND CORRECTION
distance between the sent and the received codeword is not zero, the codeword has been
corrupted during transmission. 
The Hamming distance can easily be found if we apply the XOR operation (⊕) on the
two words and count the number of 1s in the result. Note that the Hamming distance is
a value greater than or equal to zero.
Example 10.2
Let us find the Hamming distance between two pairs of words.
1. The Hamming distance d(000, 011) is 2 because (000 ⊕ 011) is 011 (two 1s). 
2. The Hamming distance d(10101, 11110) is 3 because (10101 ⊕ 11110) is 01011 (three 1s). 
Minimum Hamming Distance for Error Detection
In a set of codewords, the minimum Hamming distance is the smallest Hamming dis-
tance between all possible pairs of codewords. Now let us find the minimum Hamming
distance in a code if we want to be able to detect up to s errors. If s errors occur during
transmission, the Hamming distance between the sent codeword and received codeword
is s. If our system is to detect up to s errors, the minimum distance between the valid
codes must be (s + 1), so that the received codeword does not match a valid codeword.
In other words, if the minimum distance between all valid codewords is (s + 1), the
received codeword cannot be erroneously mistaken for another codeword. The error
will be detected. We need to clarify a point here: Although a code with dmin = s + 1 may
be able to detect more than s errors in some special cases, only s or fewer errors are
guaranteed to be detected.  
We can look at this criteria geometrically. Let us assume that the sent codeword x
is at the center of a circle with radius s. All received codewords that are created by 0 to
s errors are points inside the circle or on the perimeter of the circle. All other valid
codewords must be outside the circle, as shown in Figure 10.3. This means that dmin
must be an integer greater than s or dmin = s + 1. 
Example 10.3
The minimum Hamming distance for our first code scheme (Table 10.1) is 2. This code guaran-
tees detection of only a single error. For example, if the third codeword (101) is sent and one
error occurs, the received codeword does not match any valid codeword. If two errors occur,
however, the received codeword may match a valid codeword and the errors are not detected.  
Example 10.4
A code scheme has a Hamming distance dmin = 4. This code guarantees the detection of up to
three errors (d = s + 1 or s = 3). 
The Hamming distance between two words is the number
of differences between corresponding bits.
To guarantee the detection of up to s errors in all cases, the minimum
Hamming distance in a block code must be dmin 5 s 1 1.

PART III
DATA-LINK LAYER
Linear Block Codes
Almost all block codes used today belong to a subset of block codes called linear block
codes. The use of nonlinear block codes for error detection and correction is not as
widespread because their structure makes theoretical analysis and implementation diffi-
cult. We therefore concentrate on linear block codes. The formal definition of linear
block codes requires the knowledge of abstract algebra (particularly Galois fields),
which is beyond the scope of this book. We therefore give an informal definition. For
our purposes, a linear block code is a code in which the exclusive OR (addition
modulo-2) of two valid codewords creates another valid codeword. 
Example 10.5
The code in Table 10.1 is a linear block code because the result of XORing any codeword with
any other codeword is a valid codeword. For example, the XORing of the second and third code-
words creates the fourth one.
Minimum Distance for Linear Block Codes
It is simple to find the minimum Hamming distance for a linear block code. The mini-
mum Hamming distance is the number of 1s in the nonzero valid codeword with the
smallest number of 1s. 
Example 10.6
In our first code (Table 10.1), the numbers of 1s in the nonzero codewords are 2, 2, and 2. So the
minimum Hamming distance is dmin = 2. 
Parity-Check Code
Perhaps the most familiar error-detecting code is the parity-check code. This code is
a linear block code. In this code, a k-bit dataword is changed to an n-bit codeword
where n = k + 1. The extra bit, called the parity bit, is selected to make the total
number of 1s in the codeword even. Although some implementations specify an odd
number of 1s, we discuss the even case. The minimum Hamming distance for this cat-
egory is dmin = 2, which means that the code is a single-bit error-detecting code. Our
first code (Table 10.1) is a parity-check code (k = 2 and n = 3). The code in Table 10.2
is also a parity-check code with k = 4 and n = 5.
Geometric concept explaining dmin in error detection
Radius s
x 
 y
dmin > s
Any valid codeword
Legend
Any corrupted codeword
with 1 to s errors

CHAPTER 10
ERROR DETECTION AND CORRECTION
(at the receiver). 
The calculation is done in modular arithmetic (see Appendix E). The encoder
uses a generator that takes a copy of a 4-bit dataword (a0, a1, a2, and a3) and generates
a parity bit r0. The dataword bits and the parity bit create the 5-bit codeword. The parity
bit that is added makes the number of 1s in the codeword even. This is normally done
by adding the 4 bits of the dataword (modulo-2); the result is the parity bit. In other
words,
If the number of 1s is even, the result is 0; if the number of 1s is odd, the result is 1.
In both cases, the total number of 1s in the codeword is even.
The sender sends the codeword, which may be corrupted during transmission. The
receiver receives a 5-bit word. The checker at the receiver does the same thing as the gen-
erator in the sender with one exception: The addition is done over all 5 bits. The result,
Simple parity-check code C(5, 4)
Dataword
Codeword
Dataword
Codeword
0000
00000
1000
10001
0001
00011
1001
10010
0010
00101
1010
10100
0011
00110
1011
10111
0100
01001
1100
11000
0101
01010
1101
11011
0110
01100
1110
11101
0111
01111
1111
11110
Encoder and decoder for simple parity-check code
r0 5 a3 1 a2 1 a1 1 a0
(modulo-2)
Checker
Generator
Codeword
Unreliable
transmission
Encoder
Dataword
Dataword
a3 a2 a1 a0
a3 a2 a1 a0
b3 b2 b1 b0 q0
Sender
Receiver
Decoder
Codeword
Discard
Accept
Syndrome
Parity bit
Decision
logic
s0
a3 a2 a1 a0 r0

PART III
DATA-LINK LAYER
which is called the syndrome, is just 1 bit. The syndrome is 0 when the number of 1s in
the received codeword is even; otherwise, it is 1.
The syndrome is passed to the decision logic analyzer. If the syndrome is 0, there
is no detectable error in the received codeword; the data portion of the received code-
word is accepted as the dataword; if the syndrome is 1, the data portion of the received
codeword is discarded. The dataword is not created. 
Example 10.7
Let us look at some transmission scenarios. Assume the sender sends the dataword 1011. The code-
word created from this dataword is 10111, which is sent to the receiver. We examine five cases:
1. No error occurs; the received codeword is 10111. The syndrome is 0. The dataword 1011 is
created.
2. One single-bit error changes a1. The received codeword is 10011. The syndrome is 1. No
dataword is created. 
3. One single-bit error changes r0. The received codeword is 10110. The syndrome is 1. No data-
word is created. Note that although none of the dataword bits are corrupted, no dataword is
created because the code is not sophisticated enough to show the position of the corrupted bit. 
4. An error changes r0 and a second error changes a3. The received codeword is 00110. The syn-
drome is 0. The dataword 0011 is created at the receiver. Note that here the dataword is
wrongly created due to the syndrome value. The simple parity-check decoder cannot detect an
even number of errors. The errors cancel each other out and give the syndrome a value of 0. 
5. Three bits—a3, a2, and a1—are changed by errors. The received codeword is 01011. The
syndrome is 1. The dataword is not created. This shows that the simple parity check, guaran-
teed to detect one single error, can also find any odd number of errors.  
10.3
CYCLIC CODES
Cyclic codes are special linear block codes with one extra property. In a cyclic code, if
a codeword is cyclically shifted (rotated), the result is another codeword. For example,
if 1011000 is a codeword and we cyclically left-shift, then 0110001 is also a codeword.
In this case, if we call the bits in the first word a0 to a6, and the bits in the second word
b0 to b6, we can shift the bits by using the following:
In the rightmost equation, the last bit of the first word is wrapped around and
becomes the first bit of the second word. 
10.3.1
Cyclic Redundancy Check
We can create cyclic codes to correct errors. However, the theoretical background
required is beyond the scope of this book. In this section, we simply discuss a subset of
s0 5 b3 1 b2 1 b1 1 b0 1 q0
(modulo-2)
A parity-check code can detect an odd number of errors. 
b1 5 a0 
 b2 5 a1  
  b3 5 a2  
  b4 5 a3  
b5 5 a4
  b6 5 a5  
  b0 5 a6

CHAPTER 10
ERROR DETECTION AND CORRECTION
cyclic codes called the cyclic redundancy check (CRC), which is used in networks
such as LANs and WANs. 
properties of this code.
In the encoder, the dataword has k bits (4 here); the codeword has n bits (7 here).
The size of the dataword is augmented by adding n − k (3 here) 0s to the right-hand side
of the word. The n-bit result is fed into the generator. The generator uses a divisor of size
n − k + 1 (4 here), predefined and agreed upon. The generator divides the augmented
dataword by the divisor (modulo-2 division). The quotient of the division is discarded;
the remainder (r2r1r0) is appended to the dataword to create the codeword.
The decoder receives the codeword (possibly corrupted in transition). A copy of all
n bits is fed to the checker, which is a replica of the generator. The remainder produced
A CRC code with C(7, 4)
Dataword
Codeword
Dataword
Codeword
0000
0000000
1000
1000101
0001
0001011
1001
1001110
0010
0010110
1010
1010011
0011
0011101
1011
1011000
0100
0100111
1100
1100010
0101
0101100
1101
1101001
0110
0110001
1110
1110100
0111
0111010
1111
1111111
CRC encoder and decoder
Accept
Checker
Generator
Codeword
Encoder
Dataword
Dataword
a3 a2 a1 a0
a3 a2 a1 a0
q2 q1 q0
b3 b2 b1 b0
Sender
0 0 0
Receiver
Decoder
Codeword
Discard
Syndrome
Decision
logic
s0
s1
s2
a3 a2 a1 a0 r2 r1 r0
Divisor
Shared
Remainder
d1
d3 d2
d0
Unreliable
transmission

PART III
DATA-LINK LAYER
by the checker is a syndrome of n − k (3 here) bits, which is fed to the decision logic
analyzer. The analyzer has a simple function. If the syndrome bits are all 0s, the 4 left-
most bits of the codeword are accepted as the dataword (interpreted as no error); other-
wise, the 4 bits are discarded (error). 
Encoder
Let us take a closer look at the encoder. The encoder takes a dataword and augments it
with n − k number of 0s. It then divides the augmented dataword by the divisor, as
shown in Figure 10.6. 
The process of modulo-2 binary division is the same as the familiar division pro-
cess we use for decimal numbers. However, addition and subtraction in this case are the
same; we use the XOR operation to do both. 
As in decimal division, the process is done step by step. In each step, a copy of the
divisor is XORed with the 4 bits of the dividend. The result of the XOR operation
(remainder) is 3 bits (in this case), which is used for the next step after 1 extra bit is
pulled down to make it 4 bits long. There is one important point we need to remember
in this type of division. If the leftmost bit of the dividend (or the part used in each step)
is 0, the step cannot use the regular divisor; we need to use an all-0s divisor. 
When there are no bits left to pull down, we have a result. The 3-bit remainder
forms the check bits (r2, r1, and r0). They are appended to the dataword to create the
codeword. 
Division in CRC encoder
Encoding
0 1
0 1
0 1
1 0
0 0
0 1
1 1
1 1
0 0
0 0
Divisor
Quotient
Dividend 
Codeword
0 0
1 1 0
Dataword plus remainder
Note:
Multiply: AND
Subtract: XOR 
0 0
Dataword
Remainder
Leftmost bit 0: 
use 0000 divisor
Discard
Leftmost bit 0: 
use 0000 divisor
0 0
0 0 0

CHAPTER 10
ERROR DETECTION AND CORRECTION
Decoder
The codeword can change during transmission. The decoder does the same division
process as the encoder. The remainder of the division is the syndrome. If
the syndrome is all 0s, there is no error with a high probability; the dataword is sepa-
rated from the received codeword and accepted. Otherwise, everything is discarded.
when no error has occurred; the syndrome is 000. The right-hand part of the figure
shows the case in which there is a single error. The syndrome is not all 0s (it is 011).
Divisor
We may be wondering how the divisor 1011 is chosen. This depends on the expecta-
tion we have from the code. We will show some standard divisors later in the chapter
(Table 10.4) after we discuss polynomials.
10.3.2
Polynomials
A better way to understand cyclic codes and how they can be analyzed is to represent
them as polynomials. Again, this section is optional. 
A pattern of 0s and 1s can be represented as a polynomial with coefficients of 0 and
1. The power of each term shows the position of the bit; the coefficient shows the value
of the bit. Figure 10.8 shows a binary pattern and its polynomial representation. In Fig-
ure 10.8a we show how to translate a binary pattern into a polynomial; in Figure 10.8b
we show how the polynomial can be shortened by removing all terms with zero coeffi-
cients and replacing x1 by x and x0 by 1.  
three terms. The benefit is even more conspicuous when we have a polynomial such as
Division in the CRC decoder for two cases
0 0
1 1 0
0 0
0 0
1 1 0
Decoder
Decoder
0 0
1 1 0
0 1
0 1
0 1
1 0
0 0
0 1
0 0
0 0
0 0
0 1
Codeword
Dataword
accepted
Syndrome
Codeword
0 0
1 1 0
0 1
0 1
0 1
1 1
0 1
0 1
0 1
0 0
0 0
1 1
Codeword
Dataword
discarded
Uncorrupted
Zero
Non-Zero
Corrupted
Syndrome
Codeword

PART III
DATA-LINK LAYER
x23 + x3 + 1. Here the bit pattern is 24 bits in length (three 1s and twenty-one 0s) while
the polynomial is just three terms. 
Degree of a Polynomial
The degree of a polynomial is the highest power in the polynomial. For example, the
degree of the polynomial x6 + x + 1 is 6. Note that the degree of a polynomial is 1 less
than the number of bits in the pattern. The bit pattern in this case has 7 bits. 
Adding and Subtracting Polynomials
Adding and subtracting polynomials in mathematics are done by adding or subtracting
the coefficients of terms with the same power. In our case, the coefficients are only 0
and 1, and adding is in modulo-2. This has two consequences. First, addition and sub-
traction are the same. Second, adding or subtracting is done by combining terms and
deleting pairs of identical terms. For example, adding x5 + x4 + x2 and x6 + x4 + x2 gives
just x6 + x5. The terms x4 and x2 are deleted. However, note that if we add, for example,
three polynomials and we get x2 three times, we delete a pair of them and keep the third.
Multiplying or Dividing Terms
In this arithmetic, multiplying a term by another term is very simple; we just add the
powers. For example, x3 × x4 is x7. For dividing, we just subtract the power of the sec-
ond term from the power of the first. For example, x5/x2 is x3. 
Multiplying Two Polynomials
Multiplying a polynomial by another is done term by term. Each term of the first polyno-
mial must be multiplied by all terms of the second. The result, of course, is then simplified,
and pairs of equal terms are deleted. The following is an example:
Dividing One Polynomial by Another
Division of polynomials is conceptually the same as the binary division we discussed
for an encoder. We divide the first term of the dividend by the first term of the divisor to
get the first term of the quotient. We multiply the term in the quotient by the divisor and
A polynomial to represent a binary word
(x5 + x3 + x2 + x)(x2 + x + 1) = x7 + x6 + x5 + x5 + x4 + x3 + x4 + x3 + x2 + x3 + x2 + x
  = x7 + x6 + x3 + x
a. Binary pattern and polynomial
b. Short form
x6  
+ 
+ x  
1x6 
0x4  
0x5  
0x3  
+ 
+ 
+ 
+ 
0x2  
1x1  
1x0  
+ 
+ 
a6
a5
a4
a3
a2
a1
a0

CHAPTER 10
ERROR DETECTION AND CORRECTION
subtract the result from the dividend. We repeat the process until the dividend degree is
less than the divisor degree. We will show an example of division later in this chapter. 
Shifting
A binary pattern is often shifted a number of bits to the right or left. Shifting to the left
means adding extra 0s as rightmost bits; shifting to the right means deleting some right-
most bits. Shifting to the left is accomplished by multiplying each term of the polynomial
by xm, where m is the number of shifted bits; shifting to the right is accomplished by
dividing each term of the polynomial by xm. The following shows shifting to the left and
to the right. Note that we do not have negative powers in the polynomial representation.
When we augmented the dataword in the encoder of Figure 10.6, we actually
shifted the bits to the left. Also note that when we concatenate two bit patterns, we shift
the first polynomial to the left and then add the second polynomial. 
10.3.3
Cyclic Code Encoder Using Polynomials
Now that we have discussed operations on polynomials, we show the creation of a code-
word from a dataword. Figure 10.9 is the polynomial version of Figure 10.6. We can see
that the process is shorter. The dataword 1001 is represented as x3 + 1. The divisor 1011
is represented as x3 + x + 1. To find the augmented dataword, we have left-shifted the
dataword 3 bits (multiplying by x3). The result is x6 + x3. Division is straightforward. We
divide the first term of the dividend, x6, by the first term of the divisor, x3. The first term
of the quotient is then x6/x3, or x3. Then we multiply x3 by the divisor and subtract
(according to our previous definition of subtraction) the result from the dividend. The
result is x4, with a degree greater than the divisor’s degree; we continue to divide until
the degree of the remainder is less than the degree of the divisor. 
Shifting left 3 bits: 10011 becomes 10011000  
Shifting right 3 bits: 10011 becomes 10  
x4 + x + 1  becomes  x7 + x4 + x3  
x4 + x  + 1  becomes  x
CRC division using polynomials
Dividend: 
augmented
dataword
Divisor
Codeword
Dataword
Remainder
x6 
x4
x3 
+ 
+ 
x4
x2 
x
+ 
+ 
x2 
x 
+ 
x4
x6 
x3 
+ 
Dataword Remainder
x2
x 
+ 
x6 
x3 
+ 
x3 
x 
+ 
x3 
x +  
+ 
x3 + 1 

PART III
DATA-LINK LAYER
It can be seen that the polynomial representation can easily simplify the operation
of division in this case, because the two steps involving all-0s divisors are not needed
here. (Of course, one could argue that the all-0s divisor step can also be eliminated in
binary division.) In a polynomial representation, the divisor is normally referred to as
the generator polynomial t(x). 
10.3.4
Cyclic Code Analysis
We can analyze a cyclic code to find its capabilities by using polynomials. We define
the following, where f(x) is a polynomial with binary coefficients.
If s(x) is not zero, then one or more bits is corrupted. However, if s(x) is zero, either
no bit is corrupted or the decoder failed to detect any errors. (Note that ¦ means divide). 
In our analysis we want to find the criteria that must be imposed on the generator,
g(x) to detect the type of error we especially want to be detected. Let us first find the
relationship among the sent codeword, error, received codeword, and the generator.
We can say
In other words, the received codeword is the sum of the sent codeword and the
error. The receiver divides the received codeword by g(x) to get the syndrome. We can
write this as 
The first term at the right-hand side of the equality has a remainder of zero
(according to the definition of codeword). So the syndrome is actually the remainder of
the second term on the right-hand side. If this term does not have a remainder (syn-
drome = 0), either e(x) is 0 or e(x) is divisible by g(x). We do not have to worry about
the first case (there is no error); the second case is very important. Those errors that are
divisible by g(x) are not caught.  
The divisor in a cyclic code is normally called the generator polynomial
or simply the generator. 
Dataword:  d(x)
Codeword: c(x)
Generator: g(x)  Syndrome: s(x)  
Error: e(x)
In a cyclic code, 
1. If  s(x) ¦ 0, one or more bits is corrupted.
2. If  s(x) = 0, either
a. No bit is corrupted, or
b. Some bits are corrupted, but the decoder failed to detect them. 
Received codeword 5 c(x) 1 e(x)
Received codeword
g x
( )
------------------------------------------------ 5 c x
( )
g x
( )
---------- 1 e x
( )
g x
( )

CHAPTER 10
ERROR DETECTION AND CORRECTION
Let us show some specific errors and see how they can be caught by a well-
designed g(x).
Single-Bit Error
What should the structure of g(x) be to guarantee the detection of a single-bit error? A
single-bit error is e(x) = xi, where i is the position of the bit. If a single-bit error is caught,
then xi is not divisible by g(x). (Note that when we say not divisible, we mean that there is
a remainder.) If g(x) has at least two terms (which is normally the case) and the coeffi-
cient of x0 is not zero (the rightmost bit is 1), then e(x) cannot be divided by g(x). 
Example 10.8
Which of the following g(x) values guarantees that a single-bit error is caught? For each case,
what is the error that cannot be caught? 
a. x + 1
b. x3 
c. 1
Solution
a. No xi can be divisible by x + 1. In other words, xi/(x + 1) always has a remainder. So the
syndrome is nonzero. Any single-bit error can be caught. 
b. If i is equal to or greater than 3, xi is divisible by g(x). The remainder of xi/x3 is zero, and
the receiver is fooled into believing that there is no error, although there might be one.
Note that in this case, the corrupted bit must be in position 4 or above. All single-bit
errors in positions 1 to 3 are caught. 
c. All values of i make xi divisible by g(x). No single-bit error can be caught. In addition, this
g(x) is useless because it means the codeword is just the dataword augmented with n − k
zeros. 
Two Isolated Single-Bit Errors
Now imagine there are two single-bit isolated errors. Under what conditions can this
type of error be caught? We can show this type of error as e(x) = xj + xi. The values of i
and j define the positions of the errors, and the difference j − i defines the distance
between the two errors, as shown in Figure 10.10. 
In a cyclic code, those e(x) errors that are divisible by g(x) are not caught.  
If the generator has more than one term and the coefficient of x0 is 1,
all single-bit errors can be caught.  
Representation of two isolated single-bit errors using polynomials
x0
xi
xj
xn–1
Difference: j – i

PART III
DATA-LINK LAYER
We can write e(x) = xi(xj–i + 1). If g(x) has more than one term and one term is x0, it
cannot divide xi, as we saw in the previous section. So if g(x) is to divide e(x), it must divide
xj–i + 1. In other words, g(x) must not divide xt + 1, where t is between 0 and n − 1. How-
ever, t = 0 is meaningless and t = 1 is needed, as we will see later. This means t should be
between 2 and n – 1. 
Example 10.9
Find the status of the following generators related to two isolated, single-bit errors. 
a. x + 1
b. x4 + 1 
c. x7 + x6 + 1
d. x15 + x14 + 1
Solution
a. This is a very poor choice for a generator. Any two errors next to each other cannot be
detected. 
b. This generator cannot detect two errors that are four positions apart. The two errors can
be anywhere, but if their distance is 4, they remain undetected. 
c. This is a good choice for this purpose.
d. This polynomial cannot divide any error of type xt + 1 if t is less than 32,768. This means
that a codeword with two isolated errors that are next to each other or up to 32,768 bits
apart can be detected by this generator. 
Odd Numbers of Errors
A generator with a factor of x + 1 can catch all odd numbers of errors. This means that
we need to make x + 1 a factor of any generator. Note that we are not saying that the
generator itself should be x + 1; we are saying that it should have a factor of x + 1. If it
is only x + 1, it cannot catch the two adjacent isolated errors (see the previous section).
For example, x4 + x2 + x + 1 can catch all odd-numbered errors since it can be written
as a product of the two polynomials x + 1 and x3 + x2 + 1.
Burst Errors
Now let us extend our analysis to the burst error, which is the most important of all. A
burst error is of the form e(x) = (xj + . . . + xi). Note the difference between a burst error
and two isolated single-bit errors. The first can have two terms or more; the second can
only have two terms. We can factor out xi and write the error as xi(xj–i + . . . + 1). If our
generator can detect a single error (minimum condition for a generator), then it cannot
divide xi. What we should worry about are those generators that divide xj–i + . . . + 1. In
other words, the remainder of (xj–i + . . . + 1)/(xr + . . . + 1) must not be zero. Note that
the denominator is the generator polynomial. We can have three cases:
If a generator cannot divide xt 1 1 (t between 0 and n 2 1),
then all isolated double errors can be detected.  
A generator that contains a factor of x 1 1 can detect all odd-numbered errors.  

CHAPTER 10
ERROR DETECTION AND CORRECTION
1. If j − i < r, the remainder can never be zero. We can write j − i = L − 1, where L is
the length of the error. So L − 1 < r or L < r + 1 or L ð r. This means all burst errors
with length smaller than or equal to the number of check bits r will be detected.
2. In some rare cases, if j − i = r, or L = r + 1, the syndrome is 0 and the error is unde-
tected. It can be proved that in these cases, the probability of undetected burst error of
length r + 1 is (1/2)r–1. For example, if our generator is x14 + x3 + 1, in which r = 14, a
burst error of length L = 15 can slip by undetected with the probability of (1/2)14–1 or
almost 1 in 10,000. 
3. In some rare cases, if j − i > r, or L > r + 1, the syndrome is 0 and the error is unde-
tected. It can be proved that in these cases, the probability of undetected burst error
of length greater than r + 1 is (1/2)r. For example, if our generator is x14 + x3 + 1, in
which r = 14, a burst error of length greater than 15 can slip by undetected with the
probability of (1/2)14 or almost 1 in 16,000 cases. 
Example 10.10
Find the suitability of the following generators in relation to burst errors of different lengths. 
a. x6 + 1
b. x18 + x7 + x + 1 
c. x32 + x23 + x7 + 1 
Solution
a. This generator can detect all burst errors with a length less than or equal to 6 bits; 3 out
of 100 burst errors with length 7 will slip by; 16 out of 1000 burst errors of length 8 or
more will slip by. 
b. This generator can detect all burst errors with a length less than or equal to 18 bits; 8 out
of 1 million burst errors with length 19 will slip by; 4 out of 1 million burst errors of
length 20 or more will slip by.
c. This generator can detect all burst errors with a length less than or equal to 32 bits; 5 out
of 10 billion burst errors with length 33 will slip by; 3 out of 10 billion burst errors of
length 34 or more will slip by. 
Summary
We can summarize the criteria for a good polynomial generator:
❑ All burst errors with L ≤ r will be detected.
❑ All burst errors with L 5 r 1 1 will be detected with probability 1 – (1/2)r–1.
❑ All burst errors with L > r 1 1 will be detected with probability 1 – (1/2)r.
A good polynomial generator needs to have the following characteristics:
1. It should have at least two terms.
2. The coefficient of the term x0 should be 1.
3. It should not divide xt 1 1, for t between 2 and n 2 1.
4. It should have the factor x 1 1.  

PART III
DATA-LINK LAYER
Standard Polynomials
Some standard polynomials used by popular protocols for CRC generation are shown
in Table 10.4 along with the corresponding bit pattern. 
10.3.5
Advantages of Cyclic Codes
We have seen that cyclic codes have a very good performance in detecting single-bit
errors, double errors, an odd number of errors, and burst errors. They can easily be
implemented in hardware and software. They are especially fast when implemented in
hardware. This has made cyclic codes a good candidate for many networks. 
10.3.6
Other Cyclic Codes
The cyclic codes we have discussed in this section are very simple. The check bits and
syndromes can be calculated by simple algebra. There are, however, more powerful
polynomials that are based on abstract algebra involving Galois fields. These are
beyond the scope of this book. One of the most interesting of these codes is the Reed-
Solomon code used today for both detection and correction. 
10.3.7
Hardware Implementation
One of the advantages of a cyclic code is that the encoder and decoder can easily and
cheaply be implemented in hardware by using a handful of electronic devices. Also, a
hardware implementation increases the rate of check bit and syndrome bit calculation.
In this section, we try to show, step by step, the process. The section, however, is
optional and does not affect the understanding of the rest of the chapter. 
Divisor
Let us first consider the divisor. We need to note the following points:
1. The divisor is repeatedly XORed with part of the dividend.
2. The divisor has n − k + 1 bits which either are predefined or are all 0s. In other
words, the bits do not change from one dataword to another. In our previous exam-
ple, the divisor bits were either 1011 or 0000. The choice was based on the leftmost
bit of the part of the augmented data bits that are active in the XOR operation. 
Standard polynomials
Name
 Polynomial
Used in
CRC-8
x8 + x2 + x + 1
100000111
ATM 
header
CRC-10
x10 + x9 + x5 + x4 + x 2 + 1
11000110101
ATM 
AAL
CRC-16
x16 + x12 + x5 + 1
10001000000100001
HDLC
CRC-32
x32 + x26 + x23 + x22 + x16 + x12 + x11 + x10 + x8 + x7 + x5 + x4 + x2 + x + 1
100000100110000010001110110110111
LANs

CHAPTER 10
ERROR DETECTION AND CORRECTION
3. A close look shows that only n − k bits of the divisor are needed in the XOR opera-
tion. The leftmost bit is not needed because the result of the operation is always 0,
no matter what the value of this bit. The reason is that the inputs to this XOR opera-
tion are either both 0s or both 1s. In our previous example, only 3 bits, not 4, are
actually used in the XOR operation. 
Using these points, we can make a fixed (hardwired) divisor that can be used for a cyclic
code if we know the divisor pattern. Figure 10.11 shows such a design for our previous
example. We have also shown the XOR devices used for the operation. 
Note that if the leftmost bit of the part of the dividend to be used in this step is 1,
the divisor bits (d2d1d0) are 011; if the leftmost bit is 0, the divisor bits are 000. The
design provides the right choice based on the leftmost bit. 
Augmented Dataword
In our paper-and-pencil division process in Figure 10.6, we show the augmented data-
word as fixed in position with the divisor bits shifting to the right, 1 bit in each step.
The divisor bits are aligned with the appropriate part of the augmented dataword. Now
that our divisor is fixed, we need instead to shift the bits of the augmented dataword to the
left (opposite direction) to align the divisor bits with the appropriate part. There is no
need to store the augmented dataword bits. 
Remainder
In our previous example, the remainder is 3 bits (n − k bits in general) in length. We can
use three registers (single-bit storage devices) to hold these bits. To find the final
remainder of the division, we need to modify our division process. The following is the
step-by-step process that can be used to simulate the division process in hardware (or
even in software).
1. We assume that the remainder is originally all 0s (000 in our example).
2. At each time click (arrival of 1 bit from an augmented dataword), we repeat the
following two actions:
a. We use the leftmost bit to make a decision about the divisor (011 or 000).
b. The other 2 bits of the remainder and the next bit from the augmented dataword
(total of 3 bits) are XORed with the 3-bit divisor to create the next remainder. 
Hardwired design of the divisor in CRC
Leftmost bit of the part
of the dividend involved
in XOR operation
XOR
XOR
d2
d1
d0
Broken line:
 this bit is always 0
+
+
+
XOR

PART III
DATA-LINK LAYER
more improvements.
At each clock tick, shown as different times, one of the bits from the augmented
dataword is used in the XOR process. If we look carefully at the design, we have seven
steps here, while in the paper-and-pencil method we had only four steps. The first three
steps have been added here to make each step equal and to make the design for each step
the same. Steps 1, 2, and 3 push the first 3 bits to the remainder registers; steps 4, 5, 6,
and 7 match the paper-and-pencil design. Note that the values in the remainder register
in steps 4 to 7 exactly match the values in the paper-and-pencil design. The final remain-
der is also the same.
The above design is for demonstration purposes only. It needs simplification to be
practical. First, we do not need to keep the intermediate values of the remainder bits;
we need only the final bits. We therefore need only 3 registers instead of 24. After the
XOR operations, we do not need the bit values of the previous remainder. Also, we do
not need 21 XOR devices; two are enough because the output of an XOR operation in
which one of the bits is 0 is simply the value of the other bit. This other bit can be used
as the output. With these two modifications, the design becomes tremendously simpler
and less expensive, as shown in Figure 10.13. 
Simulation of division in CRC encoder
Augmented dataword
Final remainder
Time: 2
Time: 4
Time: 5
Time: 6
Time: 7
Time: 1
+
+
+
+
+
+
Time: 3
+
+
+
+
+
+
+
+
+
+
+
+
+
+
+

CHAPTER 10
ERROR DETECTION AND CORRECTION
 We need, however, to make the registers shift registers. A 1-bit shift register holds
a bit for a duration of one clock time. At a time click, the shift register accepts the bit at
its input port, stores the new bit, and displays it on the output port. The content and the
output remain the same until the next input arrives. When we connect several 1-bit shift
registers together, it looks as if the contents of the register are shifting. 
General Design
A general design for the encoder and decoder is shown in Figure 10.14. 
Note that we have n − k 1-bit shift registers in both the encoder and decoder. We
have up to n − k XOR devices, but the divisors normally have several 0s in their pattern,
which reduces the number of devices. Also note that, instead of augmented datawords,
we show the dataword itself as the input because after the bits in the dataword are all
fed into the encoder, the extra bits, which all are 0s, do not have any effect on the right-
most XOR. Of course, the process needs to be continued for another n − k steps before
the check bits are ready. This fact is one of the criticisms of this design. Better schemes
have been designed to eliminate this waiting time (the check bits are ready after k steps),
but we leave this as a research topic for the reader. In the decoder, however, the entire
codeword must be fed to the decoder before the syndrome is ready. 
10.4
CHECKSUM
Checksum is an error-detecting technique that can be applied to a message of any
length. In the Internet, the checksum technique is mostly used at the network and trans-
port layer rather than the data-link layer. However, to make our discussion of error-
detecting techniques complete, we discuss the checksum in this chapter. 
The CRC encoder design using shift registers
General design of encoder and decoder of a CRC code
Augmented dataword
+
+
Dataword
The divisor line and XOR are
missing if the corresponding
bit in the divisor is 0. 
Note: 
rn–k–1
sn–k–1
dn–k–1
dn–k–1
r1
r0
d1
d0
Received 
codeword
a. Encoder
b. Decoder
s1
s0
d1
d0
+
+
+
+
+
+
• • •
• • •

PART III
DATA-LINK LAYER
At the source, the message is first divided into m-bit units. The generator then cre-
ates an extra m-bit unit called the checksum, which is sent with the message. At the
destination, the checker creates a new checksum from the combination of the message
and sent checksum. If the new checksum is all 0s, the message is accepted; otherwise,
the message is discarded (Figure 10.15). Note that in the real implementation, the
checksum unit is not necessarily added at the end of the message; it can be inserted in
the middle of the message.  
10.4.1
Concept
The idea of the traditional checksum is simple. We show this using a simple example. 
Example 10.11
Suppose the message is a list of five 4-bit numbers that we want to send to a destination. In
addition to sending these numbers, we send the sum of the numbers. For example, if the set of
numbers is (7, 11, 12, 0, 6), we send (7, 11, 12, 0, 6, 36), where 36 is the sum of the original num-
bers. The receiver adds the five numbers and compares the result with the sum. If the two are the
same, the receiver assumes no error, accepts the five numbers, and discards the sum. Otherwise,
there is an error somewhere and the message is not accepted. 
One’s Complement Addition
The previous example has one major drawback. Each number can be written as a 4-bit
word (each is less than 15) except for the sum. One solution is to use one’s comple-
ment arithmetic. In this arithmetic, we can represent unsigned numbers between 0
and 2m − 1 using only m bits. If the number has more than m bits, the extra leftmost
bits need to be added to the m rightmost bits (wrapping). 
 Checksum
Receiver
Discard
[yes]
[no]
Sender
Message
Message plus checksum
Generator
m bits
m bits
m bits
m bits
m bits
m bits
m bits
Message
Message plus checksum
Checker
m bits
m bits
m bits
m bits
m bits
m bits
m bits
m bits
All 0’s

CHAPTER 10
ERROR DETECTION AND CORRECTION
Example 10.12
In the previous example, the decimal number 36 in binary is (100100)2. To change it to a 4-bit
number we add the extra leftmost bit to the right four bits as shown below. 
Instead of sending 36 as the sum, we can send 6 as the sum (7, 11, 12, 0, 6, 6). The receiver
can add the first five numbers in one’s complement arithmetic. If the result is 6, the numbers are
accepted; otherwise, they are rejected.
Checksum
We can make the job of the receiver easier if we send the complement of the sum, the
checksum. In one’s complement arithmetic, the complement of a number is found by
completing all bits (changing all 1s to 0s and all 0s to 1s). This is the same as subtract-
ing the number from 2m − 1. In one’s complement arithmetic, we have two 0s: one pos-
itive and one negative, which are complements of each other. The positive zero has all
m bits set to 0; the negative zero has all bits set to 1 (it is 2m − 1). If we add a number
with its complement, we get a negative zero (a number with all bits set to 1). When the
receiver adds all five numbers (including the checksum), it gets a negative zero. The
receiver can complement the result again to get a positive zero. 
Example 10.13
Let us use the idea of the checksum in Example 10.12. The sender adds all five numbers in one’s
complement to get the sum = 6. The sender then complements the result to get the checksum = 9,
which is 15 − 6. Note that 6 = (0110)2 and 9 = (1001)2; they are complements of each other. The
sender sends the five data numbers and the checksum (7, 11, 12, 0, 6, 9). If there is no corruption in
transmission, the receiver receives (7, 11, 12, 0, 6, 9) and adds them in one’s complement to get 15.
The sender complements 15 to get 0. This shows that data have not been corrupted. Figure 10.16
shows the process. 
(10)2 1 (0100)2 5 (0110)2  →  (6)10
Example 10.13
7, 11, 12, 0, 6, 9
Sender
Packet
Receiver 
Received Checksum
Sum (in one’s complement)
Calculated Checksum
Initialized checksum
Sum (in one’s complement)
Actual checksum

PART III
DATA-LINK LAYER
Internet Checksum
Traditionally, the Internet has used a 16-bit checksum. The sender and the receiver follow
the steps depicted in Table 10.5. The sender or the receiver uses five steps. 
Algorithm
We can use the flow diagram of Figure 10.17 to show the algorithm for calculation of
the checksum. A program in any language can easily be written based on the algorithm.
Note that the first loop just calculates the sum of the data units in two’s complement;
the second loop wraps the extra bits created from the two’s complement calculation to
simulate the calculations in one’s complement. This is needed because almost all com-
puters today do calculation in two’s complement.  
Procedure to calculate the traditional checksum 
Sender
Receiver
1. The message is divided into 16-bit words.
1. The message and the checksum are received.
2. The value of the checksum word is 
initially set to zero.
2. The message is divided into 16-bit words.
3. All words including the checksum are 
added using one’s complement addition.
3. All words are added using one’s comple-
ment addition.
4. The sum is complemented and becomes 
the checksum.
4. The sum is complemented and becomes the 
new checksum.
5. The checksum is sent with the data.
5. If the value of the checksum is 0, the message 
is accepted; otherwise, it is rejected.
Algorithm to calculate a traditional checksum
Sum =  0
[yes]
[no]
[no]
More words?
Start
 Sum = Sum + Next Word
[yes]
a. Word and Checksum are each
 
16 bits, but Sum is 32 bits.
b. Left(Sum) can be found by shifting
 
Sum 16 bits to the right.
c. Right(Sum) can be found by
 
ANDing Sum with (0000FFFF)16 .
d. After Checksum is found, truncate
 
it to 16 bits.
Notes: 
Left(sum)
is nonzero?
Sum = Left(Sum) + Right(Sum)
Stop
Checksum = truncate (Checksum)
Checksum = Complement (Sum)

CHAPTER 10
ERROR DETECTION AND CORRECTION
Performance
The traditional checksum uses a small number of bits (16) to detect errors in a message
of any size (sometimes thousands of bits). However, it is not as strong as the CRC in
error-checking capability. For example, if the value of one word is incremented and the
value of another word is decremented by the same amount, the two errors cannot be
detected because the sum and checksum remain the same. Also, if the values of several
words are incremented but the sum and the checksum do not change, the errors are not
detected. Fletcher and Adler have proposed some weighted checksums that eliminate
the first problem. However, the tendency in the Internet, particularly in designing new
protocols, is to replace the checksum with a CRC. 
10.4.2
Other Approaches to the Checksum
As mentioned before, there is one major problem with the traditional checksum calcu-
lation. If two 16-bit items are transposed in transmission, the checksum cannot catch
this error. The reason is that the traditional checksum is not weighted: it treats each data
item equally. In other words, the order of data items is immaterial to the calculation.
Several approaches have been used to prevent this problem. We mention two of them
here: Fletcher and Adler. 
Fletcher Checksum
The Fletcher checksum was devised to weight each data item according to its position.
Fletcher has proposed two algorithms: 8-bit and 16-bit. The first, 8-bit Fletcher, calcu-
lates on 8-bit data items and creates a 16-bit checksum. The second, 16-bit Fletcher,
calculates on 16-bit data items and creates a 32-bit checksum. 
The 8-bit Fletcher is calculated over data octets (bytes) and creates a 16-bit check-
sum. The calculation is done modulo 256 (28), which means the intermediate results
are divided by 256 and the remainder is kept. The algorithm uses two accumulators,
L and R. The first simply adds data items together; the second adds a weight to the
calculation. There are many variations of the 8-bit Fletcher algorithm; we show a
simple one in Figure 10.18. 
The 16-bit Fletcher checksum is similar to the 8-bit Fletcher checksum, but it is
calculated over 16-bit data items and creates a 32-bit checksum. The calculation is done
modulo 65,536. 
Adler Checksum
The Adler checksum is a 32-bit checksum. Figure 10.19 shows a simple algorithm in
flowchart form. It is similar to the 16-bit Fletcher with three differences. First, calcula-
tion is done on single bytes instead of 2 bytes at a time. Second, the modulus is a prime
number (65,521) instead of 65,536. Third, L is initialized to 1 instead of 0. It has been
proved that a prime modulo has a better detecting capability in some combinations of
data.

PART III
DATA-LINK LAYER
10.5
FORWARD ERROR CORRECTION
We discussed error detection and retransmission in the previous sections. However,
retransmission of corrupted and lost packets is not useful for real-time multimedia
transmission because it creates an unacceptable delay in reproducing: we need to wait
until the lost or corrupted packet is resent. We need to correct the error or reproduce the
Algorithm to calculate an 8-bit Fletcher checksum
Algorithm to calculate an Adler checksum
To see the behavior of the different checksum algorithms, check some of the applets 
for this chapter at the book website. 
L
16-bit
checksum
R
R = L = 0
R = (R + Di) mod 256
L = (L + R) mod 256
Checksum = L × 256 + R
[yes]
[no]
More data?
Start
Stop
Notes
L : Left 8-bit checksum
R : Right 8-bit checksum
Di: Next 8-bit data item
L
32-bit checksum
R
R = (R + Di) mod 65,521
Checksum = L × 65,536 + R
[yes]
[no]
More data?
Start
Stop
Notes
L : Left 16-bit checksum
R : Right 16-bit checksum
Di: Next 16-bit data item
R = 1  L = 0
L = (L + R) mod 65,521

PART III
DATA-LINK LAYER
11.1
DLC SERVICES
The data link control (DLC) deals with procedures for communication between two
adjacent nodes—node-to-node communication—no matter whether the link is dedi-
cated or broadcast. Data link control functions include framing and flow and error
control. In this section, we first discuss framing, or how to organize the bits that are
carried by the physical layer. We then discuss flow and error control.  
11.1.1
Framing
Data transmission in the physical layer means moving bits in the form of a signal from
the source to the destination. The physical layer provides bit synchronization to ensure
that the sender and receiver use the same bit durations and timing. We discussed the
physical layer in Part II of the book.
The data-link layer, on the other hand, needs to pack bits into frames, so that each
frame is distinguishable from another. Our postal system practices a type of framing.
The simple act of inserting a letter into an envelope separates one piece of information
from another; the envelope serves as the delimiter. In addition, each envelope defines
the sender and receiver addresses, which is necessary since the postal system is a many-
to-many carrier facility. 
Framing in the data-link layer separates a message from one source to a destination
by adding a sender address and a destination address. The destination address defines
where the packet is to go; the sender address helps the recipient acknowledge the
receipt.
Although the whole message could be packed in one frame, that is not normally
done. One reason is that a frame can be very large, making flow and error control very
inefficient. When a message is carried in one very large frame, even a single-bit error
would require the retransmission of the whole frame. When a message is divided into
smaller frames, a single-bit error affects only that small frame. 
Frame Size
Frames can be of fixed or variable size. In fixed-size framing, there is no need for defin-
ing the boundaries of the frames; the size itself can be used as a delimiter. An example
of this type of framing is the ATM WAN, which uses frames of fixed size called cells.
We discuss ATM in Chapter 14. 
Our main discussion in this chapter concerns variable-size framing, prevalent in
local-area networks. In variable-size framing, we need a way to define the end of one
frame and the beginning of the next. Historically, two approaches were used for this
purpose: a character-oriented approach and a bit-oriented approach. 
Character-Oriented Framing
In character-oriented (or byte-oriented) framing, data to be carried are 8-bit characters
from a coding system such as ASCII (see Appendix A). The header, which normally
carries the source and destination addresses and other control information, and the
trailer, which carries error detection redundant bits, are also multiples of 8 bits. To
separate one frame from the next, an 8-bit (1-byte) flag is added at the beginning and the
end of a frame. The flag, composed of protocol-dependent special characters, signals the

CHAPTER 11
DATA LINK CONTROL (DLC)
start or end of a frame. Figure 11.1 shows the format of a frame in a character-oriented
protocol. 
Character-oriented framing was popular when only text was exchanged by the
data-link layers. The flag could be selected to be any character not used for text com-
munication. Now, however, we send other types of information such as graphs, audio,
and video; any character used for the flag could also be part of the information. If this
happens, the receiver, when it encounters this pattern in the middle of the data, thinks it
has reached the end of the frame. To fix this problem, a byte-stuffing strategy was
added to character-oriented framing. In byte stuffing (or character stuffing), a special
byte is added to the data section of the frame when there is a character with the same
pattern as the flag. The data section is stuffed with an extra byte. This byte is usually
called the escape character (ESC) and has a predefined bit pattern. Whenever the
receiver encounters the ESC character, it removes it from the data section and treats the
next character as data, not as a delimiting flag. Figure 11.2 shows the situation.
Byte stuffing by the escape character allows the presence of the flag in the data
section of the frame, but it creates another problem. What happens if the text contains
one or more escape characters followed by a byte with the same pattern as the flag? The
A frame in a character-oriented protocol
Byte stuffing and unstuffing
Byte stuffing is the process of adding one extra byte whenever
there is a flag or escape character in the text.
Flag
Flag
Data from upper layer
Variable number of characters
Header
Trailer
• • •
Data from upper layer
Sent frame
Received frame
Stuffed
Unstuffed
Extra
byte
Extra
byte
Flag
ESC
Data to upper layer
Flag
ESC
Flag
Flag
Header
Trailer
Flag
ESC
ESC
ESC
Flag
Flag
Header
Trailer
Flag
ESC
ESC
ESC

PART III
DATA-LINK LAYER
receiver removes the escape character, but keeps the next byte, which is incorrectly
interpreted as the end of the frame. To solve this problem, the escape characters that are
part of the text must also be marked by another escape character. In other words, if the
escape character is part of the text, an extra one is added to show that the second one is
part of the text. 
Character-oriented protocols present another problem in data communications.
The universal coding systems in use today, such as Unicode, have 16-bit and 32-bit
characters that conflict with 8-bit characters. We can say that, in general, the tendency
is moving toward the bit-oriented protocols that we discuss next.
Bit-Oriented Framing
In bit-oriented framing, the data section of a frame is a sequence of bits to be interpreted by
the upper layer as text, graphic, audio, video, and so on. However, in addition to headers
(and possible trailers), we still need a delimiter to separate one frame from the other. Most
protocols use a special 8-bit pattern flag, 01111110, as the delimiter to define the begin-
ning and the end of the frame, as shown in Figure 11.3. 
This flag can create the same type of problem we saw in the character-oriented
protocols. That is, if the flag pattern appears in the data, we need to somehow inform
the receiver that this is not the end of the frame. We do this by stuffing 1 single bit
(instead of 1 byte) to prevent the pattern from looking like a flag. The strategy is called
bit stuffing. In bit stuffing, if a 0 and five consecutive 1 bits are encountered, an extra
0 is added. This extra stuffed bit is eventually removed from the data by the receiver.
Note that the extra bit is added after one 0 followed by five 1s regardless of the value of
the next bit. This guarantees that the flag field sequence does not inadvertently appear
in the frame.
even if we have a 0 after five 1s, we still stuff a 0. The 0 will be removed by the receiver. 
This means that if the flaglike pattern 01111110 appears in the data, it will change
to 011111010 (stuffed) and is not mistaken for a flag by the receiver. The real flag
01111110 is not stuffed by the sender and is recognized by the receiver.
A frame in a bit-oriented protocol
Bit stuffing is the process of adding one extra 0 whenever five consecutive 1s follow a 0 
in the data, so that the receiver does not mistake the pattern 0111110 for a flag.
01111110
Flag
Flag
01111110
Variable number of bits
Header
Trailer
01111010110  • • •  11011110
Data from upper layer

CHAPTER 11
DATA LINK CONTROL (DLC)
11.1.2
Flow and Error Control
We briefly defined flow and error control in Chapter 9; we elaborate on these two
issues here. One of the responsibilities of the data-link control sublayer is flow and
error control at the data-link layer. 
Flow Control
Whenever an entity produces items and another entity consumes them, there should be
a balance between production and consumption rates. If the items are produced faster
than they can be consumed, the consumer can be overwhelmed and may need to discard
some items. If the items are produced more slowly than they can be consumed, the con-
sumer must wait, and the system becomes less efficient. Flow control is related to the
first issue. We need to prevent losing the data items at the consumer site. 
In communication at the data-link layer, we are dealing with four entities: network
and data-link layers at the sending node and network and data-link layers at the receiv-
ing node. Although we can have a complex relationship with more than one producer
and consumer (as we will see in Chapter 23), we ignore the relationships between net-
works and data-link layers and concentrate on the relationship between two data-link
layers, as shown in Figure 11.5.  
Bit stuffing and unstuffing
Flow control at the data-link layer
Data from upper layer
Frame sent
Data to upper layer
Stuffed
Unstuffed
0001111111001111101000
0001111111001111101000
Flag
Flag
Header
000111110110011111001000
Trailer
Flag
Flag
Header
000111110110011111001000
Trailer
Frame received
Two extra
bits
Flow control
Data-link
layer
Data-link
layer
Sending node
Receiving node
Producer
Producer
Frames are pushed

PART III
DATA-LINK LAYER
The figure shows that the data-link layer at the sending node tries to push frames
toward the data-link layer at the receiving node. If the receiving node cannot process
and deliver the packet to its network at the same rate that the frames arrive, it becomes
overwhelmed with frames. Flow control in this case can be feedback from the receiving
node to the sending node to stop or slow down pushing frames. 
Buffers
Although flow control can be implemented in several ways, one of the solutions is nor-
mally to use two buffers; one at the sending data-link layer and the other at the receiv-
ing data-link layer. A buffer is a set of memory locations that can hold packets at the
sender and receiver. The flow control communication can occur by sending signals
from the consumer to the producer. When the buffer of the receiving data-link layer is
full, it informs the sending data-link layer to stop pushing frames. 
Example 11.1
The above discussion requires that the consumers communicate with the producers on two
occasions: when the buffer is full and when there are vacancies. If the two parties use a buffer
with only one slot, the communication can be easier. Assume that each data-link layer uses one
single memory slot to hold a frame. When this single slot in the receiving data-link layer is
empty, it sends a note to the network layer to send the next frame.
Error Control
Since the underlying technology at the physical layer is not fully reliable, we need to
implement error control at the data-link layer to prevent the receiving node from deliver-
ing corrupted packets to its network layer. Error control at the data-link layer is normally
very simple and implemented using one of the following two methods. In both methods, a
CRC is added to the frame header by the sender and checked by the receiver. 
❑
In the first method, if the frame is corrupted, it is silently discarded; if it is not cor-
rupted, the packet is delivered to the network layer. This method is used mostly in
wired LANs such as Ethernet.
❑
In the second method, if the frame is corrupted, it is silently discarded; if it is not
corrupted, an acknowledgment is sent (for the purpose of both flow and error con-
trol) to the sender.
Combination of Flow and Error Control
Flow and error control can be combined. In a simple situation, the acknowledgment that
is sent for flow control can also be used for error control to tell the sender the packet has
arrived uncorrupted. The lack of acknowledgment means that there is a problem in the
sent frame. We show this situation when we discuss some simple protocols in the next
section. A frame that carries an acknowledgment is normally called an ACK to distin-
guish it from the data frame. 
11.1.3
Connectionless and Connection-Oriented
A DLC protocol can be either connectionless or connection-oriented. We will discuss
this issue very briefly here, but we return to this topic in the network and transport
layer.

CHAPTER 11
DATA LINK CONTROL (DLC)
Connectionless Protocol
In a connectionless protocol, frames are sent from one node to the next without any
relationship between the frames; each frame is independent. Note that the term connec-
tionless here does not mean that there is no physical connection (transmission medium)
between the nodes; it means that there is no connection between frames. The frames are
not numbered and there is no sense of ordering. Most of the data-link protocols for
LANs are connectionless protocols.
Connection-Oriented Protocol
In a connection-oriented protocol, a logical connection should first be established
between the two nodes (setup phase). After all frames that are somehow related to each
other are transmitted (transfer phase), the logical connection is terminated (teardown
phase). In this type of communication, the frames are numbered and sent in order. If
they are not received in order, the receiver needs to wait until all frames belonging to the
same set are received and then deliver them in order to the network layer. Connection-
oriented protocols are rare in wired LANs, but we can see them in some point-to-point
protocols, some wireless LANs, and some WANs. 
11.2
DATA-LINK LAYER  PROTOCOLS 
Traditionally four protocols have been defined for the data-link layer to deal with flow
and error control: Simple, Stop-and-Wait, Go-Back-N, and Selective-Repeat. Although
the  first two protocols still are used at the data-link layer, the last two have disap-
peared. We therefore briefly discuss the first two protocols in this chapter, in which we
need to understand some wired and wireless LANs. We postpone the discussion of all
four, in full detail, to Chapter 23, where we discuss the transport layer. 
The behavior of a data-link-layer protocol can be better shown as a finite state
machine (FSM). An FSM is thought of as a machine with a finite number of states.
The machine is always in one of the states until an event occurs. Each event is associ-
ated with two reactions: defining the list (possibly empty) of actions to be performed
and determining the next state (which can be the same as the current state). One of the
states must be defined as the initial state, the state in which the machine starts when it
turns on. In Figure 11.6, we show an example of a machine using FSM. We have used
rounded-corner rectangles to show states, colored text to show events, and regular black
text to show actions. A horizontal line is used to separate the event from the actions,
although later we replace the horizontal line with a slash. The arrow shows the move-
ment to the next state. 
The figure shows a machine with three states. There are only three possible events
and three possible actions. The machine starts in state I. If event 1 occurs, the machine
performs actions 1 and 2 and moves to state II. When the machine is in state II, two
events may occur. If event 1 occurs, the machine performs action 3 and remains in the
same state, state II. If event 3 occurs, the machine performs no action, but move to
state I.  

PART III
DATA-LINK LAYER
11.2.1
Simple Protocol
Our first protocol is a simple protocol with neither flow nor error control. We assume that
the receiver can immediately handle any frame it receives. In other words, the receiver
can never be overwhelmed with incoming frames. Figure 11.7 shows the layout for this
protocol. 
The data-link layer at the sender gets a packet from its network layer, makes a
frame out of it, and sends the frame. The data-link layer at the receiver receives a frame
from the link, extracts the packet from the frame, and delivers the packet to its network
layer. The data-link layers of the sender and receiver provide transmission services for
their network layers. 
FSMs 
The sender site should not send a frame until its network layer has a message to send.
The receiver site cannot deliver a message to its network layer until a frame arrives. We
can show these requirements using two FSMs. Each FSM has only one state, the ready
state. The sending machine remains in the ready state until a request comes from the
process in the network layer. When this event occurs, the sending machine encapsulates
the message in a frame and sends it to the receiving machine. The receiving machine
remains in the ready state until a frame arrives from the sending machine. When this
event occurs, the receiving machine decapsulates the message out of the frame and
delivers it to the process at the network layer. Figure 11.8 shows the FSMs for the sim-
ple protocol. We’ll see more in Chapter 23, which uses this protocol.  
Connectionless and connection-oriented service represented as FSMs
Simple protocol
Note:
The colored 
arrow shows the 
starting state.
Action 1.
Action 2. 
Event 1  
Action 3. 
Event 2
Event 3
State I
State II
Sending node
Receiving node
Data-link
Data-link
Logical link
Network
Network
Frame

CHAPTER 11
DATA LINK CONTROL (DLC)
Example 11.2
sender sends frames one after another without even thinking about the receiver.
11.2.2
Stop-and-Wait Protocol
Our second protocol is called  the Stop-and-Wait protocol, which uses both flow and
error control. We show a primitive version of this protocol here, but we discuss the
more sophisticated version in Chapter 23 when we have learned about sliding windows.
In this protocol, the  sender sends one frame at a time  and waits for an acknowledg-
ment before sending the next one. To detect corrupted frames, we need to add a CRC
(see Chapter 10) to each data frame. When a frame arrives at the receiver site, it is
checked. If its CRC is incorrect, the frame is corrupted and silently discarded. The
silence of the receiver is a signal for the sender that a frame was either corrupted or lost.
Every time the sender sends a frame, it starts a timer. If an acknowledgment arrives
before the timer expires, the timer is stopped and the sender sends the next frame (if it
has one to send). If the timer expires, the sender resends the previous frame, assuming
that the frame was either lost or corrupted. This means that the sender needs to keep
a copy of the frame until its acknowledgment arrives. When the corresponding
FSMs for the simple protocol
Flow diagram for Example 11.2
Sending node
Make a frame and send it. 
Ready
Receiving node
Frame arrived.
Start
Start
Ready
Packet came from network layer.  
Deliver the packet to network layer.  
Time
Time
Time
Time
Network
Sending node
Receiving node
Network
Data-link
Data-link
Packet
Frame
Packet
Packet
Packet
Frame

PART III
DATA-LINK LAYER
acknowledgment arrives, the sender discards the copy and sends the next frame if it is
ready. Figure 11.10 shows the outline for the Stop-and-Wait protocol. Note that only
one frame and one acknowledgment can be in the channels at any time.  
FSMs
We describe the sender and receiver states below.
Sender States
The sender is initially in the ready state, but it can move between the ready and block-
ing state.
Stop-and-Wait protocol
FSM for the Stop-and-Wait protocol
Timer
Sending node
Receiving node
Data-link
Data-link
Logical link (duplex)
Network
Network
Frame
ACK
CRC
CRC
Error-free ACK arrived.  
Corrupted ACK arrived.  
Sending node
Receiving node
Make a frame, save a copy, and send the frame. 
Start the timer. 
Ready
Discard the ACK. 
Stop the timer.  
Discard the saved frame. 
Packet came from network layer.  
Time-out.  
Resend the saved frame.
Restart the timer. 
Blocking
Discard the frame.  
Start
Start
Corrupted frame arrived.  
Extract and deliver the packet to network layer.  
Send ACK.  
Error-free frame arrived.  
Ready

CHAPTER 11
DATA LINK CONTROL (DLC)
❑
Ready State. When the sender is in this state, it is only waiting for a packet from
the network layer. If a packet comes from the network layer, the sender creates a
frame, saves a copy of the frame, starts the only timer and sends the frame. The
sender then moves to the blocking state. 
❑
Blocking State. When the sender is in this state, three events can occur:
a. If a time-out occurs, the sender resends the saved copy of the frame and restarts
the timer. 
b. If a corrupted ACK arrives, it is discarded. 
c. If an error-free ACK arrives, the sender stops the timer and discards the saved
copy of the frame. It then moves to the ready state. 
Receiver
The receiver is always in the ready state. Two events may occur:
a. If an error-free frame arrives, the message in the frame is delivered to the net-
work layer and an ACK is sent.  
b. If a corrupted frame arrives, the frame is discarded.
Example 11.3
sent, but lost. After time-out, it is resent. The third frame is sent and acknowledged, but the
acknowledgment is lost. The frame is resent. However, there is a problem with this scheme. The
network layer at the receiver site receives two copies of the third packet, which is not right. In the
next section, we will see how we can correct this problem using sequence numbers and acknowl-
edgment numbers.  
Sequence and Acknowledgment Numbers
We saw a problem in Example 11.3 that needs to be addressed and corrected. Duplicate packets,
as much as corrupted packets, need to be avoided. As an example, assume we are ordering some
item online. If each packet defines the specification of an item to be ordered, duplicate packets
mean ordering an item more than once. To correct the problem in Example 11.3, we need to add
sequence numbers to the data frames and acknowledgment numbers to the ACK frames. How-
ever, numbering in this case is very simple. Sequence numbers are 0, 1, 0, 1, 0, 1, . . . ; the
acknowledgment numbers can also be 1, 0, 1, 0, 1, 0, … In other words, the sequence numbers
start with 0, the acknowledgment numbers start with 1. An acknowledgment number always
defines the sequence number of the next frame to receive. 
Example 11.4
duplicates. The first frame is sent and acknowledged. The second frame is sent, but lost. After
time-out, it is resent. The third frame is sent and acknowledged, but the acknowledgment is lost.
The frame is resent. 
FSMs with Sequence and Acknowledgment Numbers
We can change the FSM in Figure 11.11 to include the sequence and acknowledgment
numbers, but we leave this as a problem at the end of the chapter. 

PART III
DATA-LINK LAYER
11.2.3
Piggybacking
The two protocols we discussed in this section are designed for unidirectional commu-
nication, in which data is flowing only in one direction although the acknowledgment
may travel in the other direction. Protocols have been designed in the past to allow data
to flow in both directions. However, to make the communication more efficient, the
data in one direction is piggybacked with the acknowledgment in the other direction. In
other words, when node A is sending data to node B, Node A also acknowledges the
data received from node B. Because piggybacking makes communication at the data-
link layer more complicated, it is not a common practice. We discuss two-way commu-
nication and piggybacking in more detail in Chapter 23.  
11.3
HDLC
High-level Data Link Control (HDLC) is a bit-oriented protocol for communication
over point-to-point and multipoint links. It implements the Stop-and-Wait protocol we
discussed earlier. Although this protocol is more a theoretical issue than practical, most
of the concept defined in this protocol is the basis for other practical protocols such as
PPP, which we discuss next, or the Ethernet protocol, which we discuss in wired LANs
(Chapter 13), or in wireless LANs (Chapter 15).
Flow diagram for Example 11.3
Lost
Lost
Frame
Frame
Frame
Frame (resent)
Frame (resent)
ACK
ACK
ACK
Packet
Notes:
A lost frame means
either lost or corrupted.
Legend
A lost ACK means either
lost or corrupted.
Packet
Time
Time
Time
Time
Network
Network
Data-link
Data-link
Packet
Packet
Packet
Packet
Duplicate
Packet
Start the timer.
Stop the timer.
Restart a time-out timer.
Sending node
Receiving node

CHAPTER 11
DATA LINK CONTROL (DLC)
11.3.1
Configurations and Transfer Modes
HDLC provides two common transfer modes that can be used in different configurations:
normal response mode (NRM) and asynchronous balanced mode (ABM). In normal
response mode (NRM), the station configuration is unbalanced. We have one primary
station and multiple secondary stations. A primary station can send commands; a
secondary station can only respond. The NRM is used for both point-to-point and mul-
tipoint links, as shown in Figure 11.14. 
In ABM, the configuration is balanced. The link is point-to-point, and each station
can function as a primary and a secondary (acting as peers), as shown in Figure 11.15.
This is the common mode today. 
11.3.2
Framing
To provide the flexibility necessary to support all the options possible in the modes and
configurations just described, HDLC defines three types of frames: information frames
(I-frames), supervisory frames (S-frames), and unnumbered frames (U-frames). Each type
of frame serves as an envelope for the transmission of a different type of message. I-
frames are used to data-link user data and control information relating to user data (piggy-
backing). S-frames are used only to transport control information. U-frames are reserved
for system management. Information carried by U-frames is intended for managing the
Flow diagram for Example 11.4
Lost
Lost
Frame 0
Frame 0
Frame 1
Frame 1 (resent)
Frame 0 (resent)
ACK 1
ACK 0
ACK 1
ACK 1
Packet
Notes:
A lost frame means
either lost or corrupted.
Legend
A lost ACK means either
lost or corrupted.
Frame 0 is discarded
because the receiver
expects frame 1. 
Packet
Time
Time
Time
Time
Network
Network
Data-link
Data-link
Packet
Packet
Packet
Packet
Start the timer.
Stop the timer.
Restart a time-out timer.
Sending node
Receiving node

PART III
DATA-LINK LAYER
link itself. Each frame in HDLC may contain up to six fields, as shown in Figure 11.16: a
beginning flag field, an address field, a control field, an information field, a frame check
sequence (FCS) field, and an ending flag field. In multiple-frame transmissions, the end-
ing flag of one frame can serve as the beginning flag of the next frame.  
Let us now discuss the fields and their use in different frame types. 
❑
Flag field. This field contains synchronization pattern 01111110, which identifies
both the beginning and the end of a frame.
❑
Address field. This field contains the address of the secondary station. If a primary
station created the frame, it contains a to address. If a secondary station creates the
frame, it contains a from address. The address field can be one byte or several bytes
long, depending on the needs of the network. 
Normal response mode
Asynchronous balanced mode
HDLC frames
a. Point-to-point
Command
Primary
Secondary
b. Multipoint
Response
Command
Primary
Secondary
Secondary
Response
Response
Command/response
Command/response
Combined
Combined
S-frame
I-frame
U-frame
User
information
Address
Control
FCS Flag
Flag
Flag
Address
Control
FCS
Flag
Address
Control
FCS Flag
Flag
Management
information

CHAPTER 11
DATA LINK CONTROL (DLC)
❑
Control field. The control field is one or two bytes used for flow and error control.
The interpretation of bits are discussed later. 
❑
Information field. The information field contains the user’s data from the network
layer or management information. Its length can vary from one network to another. 
❑
FCS field. The frame check sequence (FCS) is the HDLC error detection field. It
can contain either a 2- or 4-byte CRC.
The control field determines the type of frame and defines its functionality. So let
us discuss the format of this field in detail. The format is specific for the type of frame,
as shown in Figure 11.17.
Control Field for I-Frames
I-frames are designed to carry user data from the network layer. In addition, they can
include flow- and error-control information (piggybacking). The subfields in the con-
trol field are used to define these functions. The first bit defines the type. If the first
bit of the control field is 0, this means the frame is an I-frame. The next 3 bits, called
N(S), define the sequence number of the frame. Note that with 3 bits, we can define a
sequence number between 0 and 7. The last 3 bits, called N(R), correspond to the
acknowledgment number when piggybacking is used. The single bit between N(S)
and N(R) is called the P/F bit. The P/F field is a single bit with a dual purpose. It has
meaning only when it is set (bit = 1) and can mean poll or final. It means poll when
the frame is sent by a primary station to a secondary (when the address field contains
the address of the receiver). It means final when the frame is sent by a secondary to a
primary (when the address field contains the address of the sender). 
Control Field for S-Frames
Supervisory frames are used for flow and error control whenever piggybacking is either
impossible or inappropriate. S-frames do not have information fields. If the first 2 bits of
the control field are 10, this means the frame is an S-frame. The last 3 bits, called N(R),
correspond to the acknowledgment number (ACK) or negative acknowledgment num-
ber (NAK), depending on the type of S-frame. The 2 bits called code are used to define
the type of S-frame itself. With 2 bits, we can have four types of S-frames, as described
below: 
❑
Receive ready (RR). If the value of the code subfield is 00, it is an RR S-frame.
This kind of frame acknowledges the receipt of a safe and sound frame or
group of frames. In this case, the value of the N(R) field defines the acknowledg-
ment number. 
Control field format for the different frame types
N(S)
N(R)
N(R)
P
  F
Code
Code
I-frame
S-frame
U-frame
Code
P
  F
P
  F

PART III
DATA-LINK LAYER
❑
Receive not ready (RNR). If the value of the code subfield is 10, it is an RNR S-
frame. This kind of frame is an RR frame with additional functions. It acknowl-
edges the receipt of a frame or group of frames, and it announces that the receiver
is busy and cannot receive more frames. It acts as a kind of congestion-control
mechanism by asking the sender to slow down. The value of N(R) is the acknowl-
edgment number. 
❑
Reject (REJ). If the value of the code subfield is 01, it is an REJ S-frame. This is a
NAK frame, but not like the one used for Selective Repeat ARQ. It is a NAK that
can be used in Go-Back-N ARQ to improve the efficiency of the process by
informing the sender, before the sender timer expires, that the last frame is lost or
damaged. The value of N(R) is the negative acknowledgment number.
❑
Selective reject (SREJ). If the value of the code subfield is 11, it is an SREJ S-
frame. This is a NAK frame used in Selective Repeat ARQ. Note that the HDLC
Protocol uses the term selective reject instead of selective repeat. The value of
N(R) is the negative acknowledgment number.
Control Field for U-Frames
Unnumbered frames are used to exchange session management and control informa-
tion between connected devices. Unlike S-frames, U-frames contain an information
field, but one used for system management information, not user data. As with S-frames,
however, much of the information carried by U-frames is contained in codes included in
the control field. U-frame codes are divided into two sections: a 2-bit prefix before the P/
F bit and a 3-bit suffix after the P/F bit. Together, these two segments (5 bits) can be used
to create up to 32 different types of U-frames. 
Control Field for U-Frames
Unnumbered frames are used to exchange session management and control information
between connected devices. Unlike S-frames, U-frames contain an information field,
but one used for system management information, not user data. As with S-frames,
however, much of the information carried by U-frames is contained in codes included
in the control field. U-frame codes are divided into two sections: a 2-bit prefix before
the P/F bit and a 3-bit suffix after the P/F bit. Together, these two segments (5 bits) can
be used to create up to 32 different types of U-frames. 
Example 11.5
release. Node A asks for a connection with a set asynchronous balanced mode (SABM) frame;
node B gives a positive response with an unnumbered acknowledgment (UA) frame. After these
two exchanges, data can be transferred between the two nodes (not shown in the figure). After
data transfer, node A sends a DISC (disconnect) frame to release the connection; it is confirmed
by node B responding with a UA (unnumbered acknowledgment).
Example 11.6
occurred; the second is the case where an error has occurred and some frames are discarded. 

CHAPTER 11
DATA LINK CONTROL (DLC)
11.4
POINT-TO-POINT PROTOCOL (PPP)
One of the most common protocols for point-to-point access is the Point-to-Point
Protocol (PPP). Today, millions of Internet users who need to connect their home
computers to the server of an Internet service provider use PPP. The majority of these
users have a traditional modem; they are connected to the Internet through a telephone
line, which provides the services of the physical layer. But to control and manage
the transfer of data, there is a need for a point-to-point protocol at the data-link layer.
PPP is by far the most common.
11.4.1
Services
The designers of PPP have included several services to make it suitable for a point-to-
point protocol, but have ignored some traditional services to make it simple. 
Services Provided by PPP 
PPP defines the format of the frame to be exchanged between devices. It also defines how
two devices can negotiate the establishment of the link and the exchange of data. PPP is
designed to accept payloads from several network layers (not only IP). Authentication is
also provided in the protocol, but it is optional. The new version of PPP, called Multilink
PPP, provides connections over multiple links. One interesting feature of PPP is that it pro-
vides network address configuration. This is particularly useful when a home user needs a
temporary network address to connect to the Internet.
Example of connection and disconnection 
Node A
Node B
Time
Time
Data transfer
Connection
establishment
Connection
release
U-frame (SABM)
Mg.
data
B
F
C
S
Control
Flag
Flag
U-frame (UA)
Mg.
data
A
F
C
S
Control
Flag
Flag
U-frame (DISC)
Mg.
data
B
F
C
S
Control
Flag
Flag
U-frame (UA)
Mg.
data
A
F
C
S
Control
Flag
Flag

PART III
DATA-LINK LAYER
Services Not Provided by PPP
PPP does not provide flow control. A sender can send several frames one after another
with no concern about overwhelming the receiver. PPP has a very simple mechanism
for error control. A CRC field is used to detect errors. If the frame is corrupted, it is
silently discarded; the upper-layer protocol needs to take care of the problem. Lack of
error control and sequence numbering may cause a packet to be received out of order.
PPP does not provide a sophisticated addressing mechanism to handle frames in a mul-
tipoint configuration.  
11.4.2
Framing
PPP uses a character-oriented (or byte-oriented) frame. Figure 11.20 shows the format
of a PPP frame. The description of each field follows:
❑
Flag. A PPP frame starts and ends with a 1-byte flag with the bit pattern 01111110. 
Example of piggybacking with and without error 
Node A
a. The case of no error
b. The case with error
Node B
Time
Time
I-frame (data frame 0)
Data
B
F
C
S
Control
Flag
Flag
I-frame (data frame 1)
Data
B
F
C
S
Control
Flag
Flag
S-frame (RR), an ACK 3
B
F
C
S
Control
Flag
Flag
RR
I-frame (data frame 0)
Data
A
F
C
S
Control
Flag
Flag
I-frame (data frame 1)
Data
A
F
C
S
Control
Flag
Flag
I-frame (data frame 2)
Data
A
F
C
S
Control
Flag
Flag
Node A
Node B
Time
Time
I-frame (data frame 0)
Data
A
F
C
S
Control
Flag
Flag
I-frame (data frame 1)
Data
A
F
C
S
Control
Flag
Flag
S-frame (RR 3), an ACK
B
F
C
S
Control
Flag
Flag
RR
I-frame (data frame 2)
Data
A
F
C
S
Control
Flag
Flag
S-frame (REJ 1), a NAK
B
F
C
S
Control
Flag
Flag
REJ
I-frame (data frame 1)
Data
A
F
C
S
Control
Flag
Flag
Discarded
Resent
Resent
Lost
I-frame (data frame 2)
Data
A
F
C
S
Control
Flag
Flag

CHAPTER 11
DATA LINK CONTROL (DLC)
❑
Address. The address field in this protocol is a constant value and set to 11111111
(broadcast address). 
❑
Control. This field is set to the constant value 00000011 (imitating unnumbered
frames in HDLC). As we will discuss later, PPP does not provide any flow control.
Error control is also limited to error detection. 
❑
Protocol. The protocol field defines what is being carried in the data field: either
user data or other information. This field is by default 2 bytes long, but the two
parties can agree to use only 1 byte. 
❑
Payload field. This field carries either the user data or other information that we
will discuss shortly. The data field is a sequence of bytes with the default of a
maximum of 1500 bytes; but this can be changed during negotiation. The data field
is byte-stuffed if the flag byte pattern appears in this field. Because there is no field
defining the size of the data field, padding is needed if the size is less than the max-
imum default value or the maximum negotiated value.
❑
FCS. The frame check sequence (FCS) is simply a 2-byte or 4-byte standard CRC.
Byte Stuffing
Since PPP is a byte-oriented protocol, the flag in PPP is a byte that needs to be escaped
whenever it appears in the data section of the frame. The escape byte is 01111101,
which means that every time the flaglike pattern appears in the data, this extra byte is
stuffed to tell the receiver that the next byte is not a flag. Obviously, the escape byte
itself should be stuffed with another escape byte. 
11.4.3
Transition Phases
A PPP connection goes through phases which can be shown in a transition phase diagram
(see Figure 11.21). The transition diagram, which is an FSM, starts with the dead state. In
this state, there is no active carrier (at the physical layer) and the line is quiet. When one
of the two nodes starts the communication, the connection goes into the establish state. In
this state, options are negotiated between the two parties. If the two parties agree that they
need authentication (for example, if they do not know each other), then the system needs
to do authentication (an extra step); otherwise, the parties can simply start communica-
tion. The link-control protocol packets, discussed shortly, are used for this purpose. Sev-
eral packets may be exchanged here. Data transfer takes place in the open state. When a
connection reaches this state, the exchange of data packets can be started. The connection
remains in this state until one of the endpoints wants to terminate the connection. In this
case, the system goes to the terminate state. The system remains in this state until the car-
rier (physical-layer signal) is dropped, which moves the system to the dead state again. 
PPP frame format
1 byte
1 byte
1 byte
1–2 bytes
Variable
2–4 bytes 1 byte
Flag
Address Control
(11111111)2
(00000011)2
Protocol
Payload
FCS
Flag

PART III
DATA-LINK LAYER
11.4.4
Multiplexing
Although PPP is a link-layer protocol, it uses another set of protocols to establish the
link, authenticate the parties involved, and carry the network-layer data. Three sets of
protocols are defined to make PPP powerful: the Link Control Protocol (LCP), two
Authentication Protocols (APs), and several Network Control Protocols (NCPs). At any
moment, a PPP packet can carry data from one of these protocols in its data field, as
shown in Figure 11.22. Note that there are one LCP, two APs, and several NCPs. Data
may also come from several different network layers. 
Link Control Protocol
The Link Control Protocol (LCP) is responsible for establishing, maintaining, config-
uring, and terminating links. It also provides negotiation mechanisms to set options
between the two endpoints. Both endpoints of the link must reach an agreement about
the options before the link can be established. See Figure 11.21.
Transition phases
Multiplexing in PPP
Carrier 
detected
Carrier 
dropped
Start
Authentication
needed
Authentication
successful
Network-layer
configuration
Carrier detection failed
Data Transfer State
Authentication failed
Done
Open
Dead
Establish
Authenticate
Terminate
Network
Flag
Flag
FCS
Address
Legend
Control Protocol
NCP
AP
Data 
Data-link
layer 
Network
layer 
LCP
LCP: Link control protocol
  AP: Authentication protocol
NCP: Network control protocol
Protocol values:
IPCP
OSI CP
PAP
CHAP
Data from different
networking protocols
LCP : 0xC021
AP: 0xC023 and 0xC223
NCP: 0x8021 and ....
Data: 0x0021 and ....
• • •

CHAPTER 11
DATA LINK CONTROL (DLC)
All LCP packets are carried in the payload field of the PPP frame with the protocol
field set to C021 in hexadecimal (see Figure 11.23). 
The code field defines the type of LCP packet. There are 11 types of packets, as
shown in Table 11.1. 
There are three categories of packets. The first category, comprising the first
four packet types, is used for link configuration during the establish phase. The
second category, comprising packet types 5 and 6, is used for link termination dur-
ing the termination phase. The last five packets are used for link monitoring and
debugging. 
The ID field holds a value that matches a request with a reply. One endpoint inserts
a value in this field, which will be copied into the reply packet. The length field defines
the length of the entire LCP packet. The information field contains information, such as
options, needed for some LCP packets. 
There are many options that can be negotiated between the two endpoints. Options
are inserted in the information field of the configuration packets. In this case, the
LCP packet encapsulated in a frame
LCP packets
Code
Packet Type
Description
0x01
Configure-request
Contains the list of proposed options and their values
0x02
Configure-ack
Accepts all options proposed
0x03
Configure-nak
Announces that some options are not acceptable
0x04
Configure-reject
Announces that some options are not recognized
0x05
Terminate-request
Request to shut down the line
0x06
Terminate-ack
Accept the shutdown request
0x07
Code-reject
Announces an unknown code
0x08
Protocol-reject
Announces an unknown protocol
0x09
Echo-request
A type of hello message to check if the other end is alive
0x0A
Echo-reply
The response to the echo-request message
0x0B
Discard-request
A request to discard the packet
Variable
LCP packet
ID
Length
Code
Information
Payload
(and padding)
Flag
Address
Control
FCS
Flag
0xC021

PART III
DATA-LINK LAYER
information field is divided into three fields: option type, option length, and option
data. We list some of the most common options in Table 11.2. 
Authentication Protocols
Authentication plays a very important role in PPP because PPP is designed for use over
dial-up links where verification of user identity is necessary. Authentication means val-
idating the identity of a user who needs to access a set of resources. PPP has created
two protocols for authentication: Password Authentication Protocol and Challenge
Handshake Authentication Protocol. Note that these protocols are used during the
authentication phase.
PAP 
The Password Authentication Protocol (PAP) is a simple authentication procedure
with a two-step process: 
a. The user who wants to access a system sends an authentication identification
(usually the user name) and a password. 
b. The system checks the validity of the identification and password and either
accepts or denies connection. 
exchanged. When a PPP frame is carrying any PAP packets, the value of the protocol
field is 0xC023. The three PAP packets are authenticate-request, authenticate-ack, and
authenticate-nak. The first packet is used by the user to send the user name and pass-
word. The second is used by the system to allow access. The third is used by the system
to deny access. 
CHAP 
The Challenge Handshake Authentication Protocol (CHAP) is a three-way hand-
shaking authentication protocol that provides greater security than PAP. In this method,
the password is kept secret; it is never sent online.
a. The system sends the user a challenge packet containing a challenge value, usu-
ally a few bytes.
b. The user applies a predefined function that takes the challenge value and the
user’s own password and creates a result. The user sends the result in the
response packet to the system.
c. The system does the same. It applies the same function to the password of the
user (known to the system) and the challenge value to create a result. If the
Common options
Option
Default
Maximum receive unit (payload field size)
1500
Authentication protocol
None
Protocol field compression
Off
Address and control field compression
Off

CHAPTER 11
DATA LINK CONTROL (DLC)
result created is the same as the result sent in the response packet, access is
granted; otherwise, it is denied. CHAP is more secure than PAP, especially if
the system continuously changes the challenge value. Even if the intruder learns
the challenge value and the result, the password is still secret. Figure 11.25
shows the packets and how they are used. 
PAP packets encapsulated in a PPP frame
CHAP packets encapsulated in a PPP frame
PAP packets 
Authenticate-ack
Authenticate-nak
Variable
Variable
ID
Length
User name
length
Password
length
Password
User name
Code: 1
ID
Length
User name
Code: 2
ID
Length
User name
Code: 3
FCS
Flag
Flag
Address
Control
Payload
(and padding)
C02316
Authenticate-request 
Authenticate-ack or authenticate-nak 
Message
length
Message
length
Authenticate-request
System
User
CHAP packets 
Variable
Variable 
FCS
Flag
Flag
Address
Control
Payload
(and padding)
0xC223
Response
Challenge
Success or failure
System
User
Response
Response
value
Name
ID
Length
Code: 2
Response
length
Success
ID
Length
Code: 3
Message
ID
Length
Code: 4
Message
Failure
ID
Length
Challenge
length
Challenge
value
Name
Code: 1
Challenge

PART III
DATA-LINK LAYER
CHAP packets are encapsulated in the PPP frame with the protocol value C223 in
hexadecimal. There are four CHAP packets: challenge, response, success, and failure.
The first packet is used by the system to send the challenge value. The second is used by
the user to return the result of the calculation. The third is used by the system to allow
access to the system. The fourth is used by the system to deny access to the system. 
Network Control Protocols
PPP is a multiple-network-layer protocol. It can carry a network-layer data packet from
protocols defined by the Internet, OSI, Xerox, DECnet, AppleTalk, Novel, and so on.
To do this, PPP has defined a specific Network Control Protocol for each network pro-
tocol. For example, IPCP (Internet Protocol Control Protocol) configures the link for
carrying IP data packets. Xerox CP does the same for the Xerox protocol data packets,
and so on. Note that none of the NCP packets carry network-layer data; they just
configure the link at the network layer for the incoming data. 
IPCP
One NCP protocol is the Internet Protocol Control Protocol (IPCP). This protocol
configures the link used to carry IP packets in the Internet. IPCP is especially of interest
to us. The format of an IPCP packet is shown in Figure 11.26. Note that the value of the
protocol field in hexadecimal is 8021. 
IPCP defines seven packets, distinguished by their code values, as shown in
IPCP packet encapsulated in PPP frame
Code value for IPCP packets
Code
IPCP Packet
0x01
Configure-request
0x02
Configure-ack
0x03
Configure-nak
0x04
Configure-reject
0x05
Terminate-request
0x06
Terminate-ack
0x07
Code-reject
FCS
Flag
Flag
Address
Control
Payload
(and padding)
0x8021
ID
Length
Code
IPCP information
Variable
IPCP
packet

CHAPTER 11
DATA LINK CONTROL (DLC)
Other Protocols
There are other NCP protocols for other network-layer protocols. The OSI Network
Layer Control Protocol has a protocol field value of 8023; the Xerox NS IDP Control
Protocol has a protocol field value of 8025; and so on. 
Data from the Network Layer 
After the network-layer configuration is completed by one of the NCP protocols, the
users can exchange data packets from the network layer. Here again, there are different
protocol fields for different network layers. For example, if PPP is carrying data from
the IP network layer, the field value is 0021 (note that the three rightmost digits are the
same as for IPCP). If PPP is carrying data from the OSI network layer, the value of the
protocol field is 0023, and so on. Figure 11.27 shows the frame for IP. 
Multilink PPP
PPP was originally designed for a single-channel point-to-point physical link. The
availability of multiple channels in a single point-to-point link motivated the develop-
ment of Multilink PPP. In this case, a logical PPP frame is divided into several actual
PPP frames. A segment of the logical frame is carried in the payload of an actual PPP
frame, as shown in Figure 11.28. To show that the actual PPP frame is carrying a frag-
ment of a logical PPP frame, the protocol field is set to (003d)16. This new development
adds complexity. For example, a sequence number needs to be added to the actual PPP
frame to show a fragment’s position in the logical frame.
IP datagram encapsulated in a PPP frame
Multilink PPP
FCS
Flag
Flag
Address
Control
Payload
(and padding)
0x0021
Header
User data
IP packet
Logical PPP
Payload
PPP
PPP
PPP
Protocol field: (003d)16
PPP
Payload
Payload
Payload
Payload
Channel 1
Channel 2

PART III
DATA-LINK LAYER
Example 11.7
Let us go through the phases followed by a network layer packet as it is transmitted through a
PPP connection. Figure 11.29 shows the steps. For simplicity, we assume unidirectional move-
ment of data from the user site to the system site (such as sending an e-mail through an ISP). 
The first two frames show link establishment. We have chosen two options (not shown in the
figure): using PAP for authentication and suppressing the address control fields. Frames 3 and 4
are for authentication. Frames 5 and 6 establish the network layer connection using IPCP. 
The next several frames show that some IP packets are encapsulated in the PPP frame. The
system (receiver) may have been running several network layer protocols, but it knows that the
incoming data must be delivered to the IP protocol because the NCP protocol used before the data
transfer was IPCP. 
An example
Flag
Flag
Flag
Flag
C021
Options
Configure-request
Time
Time
Establish
Termination
Data Transfer
Network
Authenticate
C021
C023
Name
Name
Password
Authenticate-request
System
User
 LCP
 LCP
Flag
Flag
Flag
Flag
C021
Options
C021
 LCP
 LCP
Flag
Flag
Flag
Flag
8021
Options
8021
 IPCP
 IPCP
Terminate-request
 PAP
C023
Authenticate-ack
 PAP
Flag
Flag
Terminate-ack
Configure-ack
Configure-ack
Configure-request

CHAPTER 11
DATA LINK CONTROL (DLC)
After data transfer, the user then terminates the data-link connection, which is acknowl-
edged by the system. Of course the user or the system could have chosen to terminate the
network-layer IPCP and keep the data-link layer running if it wanted to run another NCP protocol. 
11.5
END-CHAPTER MATERIALS
11.5.1
Recommended Reading
For more details about subjects discussed in this chapter, we recommend the following
books. The items in brackets […] refer to the reference list at the end of the text.
Books
Several  books discuss link-layer issues. Among them we recommend [Ham 80], [Zar 02],
[Ror 96], [Tan 03], [GW 04], [For 03], [KMK 04], [Sta 04], [Kes 02], [PD 03],
[Kei 02], [Spu 00], [KCK 98], [Sau 98], [Izz 00], [Per 00], and [WV 00].
11.5.2
Key Terms
11.5.3
Summary
Data link control deals with the design and procedures for communication between two
adjacent nodes: node-to-node communication. Framing in the data-link layer separates
one packet from another. In fixed-size framing, there is no need for defining the boundar-
ies of frames; in variable-size framing, we need a delimiter (flag) to define the boundary
of two frames. Variable-size framing uses two categories of protocols: byte-oriented (or
character-oriented) and bit-oriented. In a byte-oriented protocol, the data section of a
frame is a sequence of bytes; in a bit-oriented protocol, the data section of a frame is a
sequence of bits. In byte-oriented protocols, we use byte stuffing; in bit-oriented
protocols, we use bit stuffing. 
Another duty of DLC is flow and error control. At the data-link layer, flow control
means creating a balance between the frames sent by a node and the frames that can be
handled by the next node. Error control at the data-link layer is normally implemented
very simply. Corrupted frames are silently discarded; uncorrupted frames are accepted
with or without sending acknowledgments to the sender. 
A DLC protocol can be either connectionless or connection-oriented. In a connec-
tionless protocol, frames are sent from one node to the next without any relationship
between the frames; each frame is independent. In a connection-oriented protocol, a logi-
cal connection should first be established between the two nodes before sending the data
frames. After all related frames are transmitted, the logical connection is terminated.
acknowledgment number
bit stuffing
byte stuffing
Challenge Handshake Authentication 
Protocol (CHAP)
data link control (DLC)
finite state machine (FSM)
flag
High-level Data Link Control (HDLC)
Internet Protocol Control Protocol (IPCP)
Link Control Protocol (LCP)
Password Authentication Protocol (PAP)
piggybacking
Point-to-Point Protocol (PPP)
sequence number
Simple Protocol 
Stop-and-Wait Protocol

PART III
DATA-LINK LAYER
12.1
RANDOM ACCESS
In random-access or contention methods, no station is superior to another station and
none is assigned control over another. At each instance, a station that has data to send
uses a procedure defined by the protocol to make a decision on whether or not to send.
This decision depends on the state of the medium (idle or busy). In other words, each
station can transmit when it desires on the condition that it follows the predefined pro-
cedure, including testing the state of the medium. 
Two features give this method its name. First, there is no scheduled time for a
station to transmit. Transmission is random among the stations. That is why these
methods are called random access. Second, no rules specify which station should send
next. Stations compete with one another to access the medium. That is why these meth-
ods are also called contention methods.
In a random-access method, each station has the right to the medium without being
controlled by any other station. However, if more than one station tries to send, there is
an access conflict—collision—and the frames will be either destroyed or modified. To
avoid access conflict or to resolve it when it happens, each station follows a procedure
that answers the following questions:
❑
When can the station access the medium?
❑
What can the station do if the medium is busy?
❑
How can the station determine the success or failure of the transmission?
❑
What can the station do if there is an access conflict?
The random-access methods we study in this chapter have evolved from a very
interesting protocol known as ALOHA, which used a very simple procedure called mul-
tiple access (MA). The method was improved with the addition of a procedure that
forces the station to sense the medium before transmitting. This was called carrier
sense multiple access (CSMA). This method later evolved into two parallel methods:
carrier sense multiple access with collision detection (CSMA/CD), which tells the station
what to do when a collision is detected, and carrier sense multiple access with collision
avoidance (CSMA/CA), which tries to avoid the collision. 
12.1.1
ALOHA
ALOHA, the earliest random access method, was developed at the University of Hawaii
in early 1970. It was designed for a radio (wireless) LAN, but it can be used on any
shared medium. 
It is obvious that there are potential collisions in this arrangement. The medium is
shared between the stations. When a station sends data, another station may attempt to
do so at the same time. The data from the two stations collide and become garbled.
Pure ALOHA
The original ALOHA protocol is called pure ALOHA. This is a simple but elegant pro-
tocol. The idea is that each station sends a frame whenever it has a frame to send (mul-
tiple access). However, since there is only one channel to share, there is the possibility
of collision between frames from different stations. Figure 12.2 shows an example of
frame collisions in pure ALOHA. 

CHAPTER 12
MEDIA ACCESS CONTROL (MAC)
There are four stations (unrealistic assumption) that contend with one another for
access to the shared channel. The figure shows that each station sends two frames; there
are a total of eight frames on the shared medium. Some of these frames collide because
multiple frames are in contention for the shared channel. Figure 12.2 shows that only
two frames survive: one frame from station 1 and one frame from station 3. We need to
mention that even if one bit of a frame coexists on the channel with one bit from
another frame, there is a collision and both will be destroyed. It is obvious that we need
to resend the frames that have been destroyed during transmission. 
The pure ALOHA protocol relies on acknowledgments from the receiver. When a
station sends a frame, it expects the receiver to send an acknowledgment. If the
acknowledgment does not arrive after a time-out period, the station assumes that the
frame (or the acknowledgment) has been destroyed and resends the frame. 
A collision involves two or more stations. If all these stations try to resend their
frames after the time-out, the frames will collide again. Pure ALOHA dictates that
when the time-out period passes, each station waits a random amount of time before
resending its frame. The randomness will help avoid more collisions. We call this time
the backoff time TB.
Pure ALOHA has a second method to prevent congesting the channel with retrans-
mitted frames. After a maximum number of retransmission attempts Kmax, a station
must give up and try later. Figure 12.3 shows the procedure for pure ALOHA based on
the above strategy. 
The time-out period is equal to the maximum possible round-trip propagation delay,
which is twice the amount of time required to send a frame between the two most widely
separated stations (2 × Tp). The backoff time TB is a random value that normally depends
on K (the number of attempted unsuccessful transmissions). The formula for TB depends
on the implementation. One common formula is the binary exponential backoff. In this
method, for each retransmission, a multiplier R = 0 to 2K − 1 is randomly chosen and mul-
tiplied by Tp (maximum propagation time) or Tfr (the average time required to send out a
frame) to find TB. Note that in this procedure, the range of the random numbers increases
after each collision. The value of Kmax is usually chosen as 15.  
Frames in a pure ALOHA network
Collision
duration
Collision
duration
Station 1
Time
Station 2
Station 3
Station 4

PART III
DATA-LINK LAYER
Example 12.1
The stations on a wireless ALOHA network are a maximum of 600 km apart. If we assume that
signals propagate at 3 × 108 m/s, we find Tp = (600 × 103) / (3 × 108) = 2 ms. For K = 2, the range
of R is {0, 1, 2, 3}. This means that TB can be 0, 2, 4, or 6 ms, based on the outcome of the ran-
dom variable R. 
Vulnerable time
Let us find the vulnerable time, the length of time in which there is a possibility of colli-
sion. We assume that the stations send fixed-length frames with each frame taking Tfr sec-
onds to send. Figure 12.4 shows the vulnerable time for station B. 
Station B starts to send a frame at time t. Now imagine station A has started to send
its frame after t − Tfr. This leads to a collision between the frames from station B and
Procedure for pure ALOHA protocol 
Vulnerable time for pure ALOHA protocol
K : Number of attempts
Tp: Maximum propagation time
Tfr: Average transmission time 
TB: (Backoff time): R × Tp or R × Tfr
R : (Random number): 0 to 2K – 1
Station has
a frame to send
Success
Legend
Abort
[true]
[true]
[false]
[false]
K = 0
K = K + 1
Send the
frame
Choose
R
K > Kmax
ACK
received?
Wait 
(2 × Tp)
Wait TB
Time
A’s end
collides with
B’s beginning
B’s end
collides with
C’s beginning
t – Tfr
t
t + Tfr
Vulnerable time = 2 × Tfr
A
B
C

CHAPTER 12
MEDIA ACCESS CONTROL (MAC)
station A. On the other hand, suppose that station C starts to send a frame before time
t + Tfr. Here, there is also a collision between frames from station B and station C. 
Looking at Figure 12.4, we see that the vulnerable time during which a collision
may occur in pure ALOHA is 2 times the frame transmission time.
Example 12.2
A pure ALOHA network transmits 200-bit frames on a shared channel of 200 kbps. What is the
requirement to make this frame collision-free?
Solution
Average frame transmission time Tfr is 200 bits/200 kbps or 1 ms. The vulnerable time is 2 × 1 ms =
2 ms. This means no station should send later than 1 ms before this station starts transmission and
no station should start sending during the period (1 ms) that this station is sending.  
Throughput
Let us call G the average number of frames generated by the system during one frame
transmission time. Then it can be proven that the average number of successfully trans-
mitted frames for pure ALOHA is S = G × e−2G. The maximum throughput Smax is 0.184,
for G = 1/2. (We can find it by setting the derivative of S with respect to G to 0; see Exer-
cises.) In other words, if one-half a frame is generated during one frame transmission
time (one frame during two frame transmission times), then 18.4 percent of these frames
reach their destination successfully. We expect G = 1/2 to produce the maximum through-
put because the vulnerable time is 2 times the frame transmission time. Therefore, if a
station generates only one frame in this vulnerable time (and no other stations generate a
frame during this time), the frame will reach its destination successfully. 
Example 12.3 
A pure ALOHA network transmits 200-bit frames on a shared channel of 200 kbps. What is the
throughput if the system (all stations together) produces
a. 1000 frames per second?
b. 500 frames per second?
c. 250 frames per second?
Solution
The frame transmission time is 200/200 kbps or 1 ms. 
a. If the system creates 1000 frames per second, or 1 frame per millisecond, then G = 1. In
this case S = G × e−2G = 0.135 (13.5 percent). This means that the throughput is 1000 ×
0.135 = 135 frames. Only 135 frames out of 1000 will probably survive. 
b. If the system creates 500 frames per second, or 1/2 frames per millisecond, then G = 1/2.
In this case S = G × e−2G = 0.184 (18.4 percent). This means that the throughput is 500 ×
0.184 = 92 and that only 92 frames out of 500 will probably survive. Note that this is the
maximum throughput case, percentagewise.
Pure ALOHA vulnerable time 5 2 3 Tfr
The throughput for pure ALOHA is S 5 G 3 e22G. 
The maximum throughput Smax 5 1/(2e) 5 0.184 when G 5 (1/2).

PART III
DATA-LINK LAYER
c. If the system creates 250 frames per second, or 1/4 frames per millisecond, then G = 1/4.
In this case S = G × e−2G = 0.152 (15.2 percent). This means that the throughput is
250 × 0.152 = 38. Only 38 frames out of 250 will probably survive.
Slotted ALOHA
Pure ALOHA has a vulnerable time of 2 × Tfr. This is so because there is no rule that
defines when the station can send. A station may send soon after another station has
started or just before another station has finished. Slotted ALOHA was invented to
improve the efficiency of pure ALOHA.
In slotted ALOHA we divide the time into slots of Tfr seconds and force the sta-
tion to send only at the beginning of the time slot. Figure 12.5 shows an example of
frame collisions in slotted ALOHA.
Because a station is allowed to send only at the beginning of the synchronized time
slot, if a station misses this moment, it must wait until the beginning of the next time
slot. This means that the station which started at the beginning of this slot has already
finished sending its frame. Of course, there is still the possibility of collision if two
stations try to send at the beginning of the same time slot. However, the vulnerable time
is now reduced to one-half, equal to Tfr. Figure 12.6 shows the situation.  
Frames in a slotted ALOHA network
Vulnerable time for slotted ALOHA protocol
Slot 6
Slot 5
Slot 4
Slot 3
Slot 2
Slot 1
Collision
duration
Collision
duration
Station 1
Time
Station 2
Station 3
Station 4
B collides with C
t
t – Tfr
t + Tfr
Vulnerable time = Tfr
Time
A
B
C

CHAPTER 12
MEDIA ACCESS CONTROL (MAC)
Throughput
It can be proven that the average number of successful transmissions for slotted ALOHA is
S = G × e−G. The maximum throughput Smax is 0.368, when G = 1. In other words, if one
frame is generated during one frame transmission time, then 36.8 percent of these frames
reach their destination successfully. We expect G = 1 to produce maximum throughput
because the vulnerable time is equal to the frame transmission time. Therefore, if a station
generates only one frame in this vulnerable time (and no other station generates a frame
during this time), the frame will reach its destination successfully. 
Example 12.4
A slotted ALOHA network transmits 200-bit frames using a shared channel with a 200-kbps
bandwidth. Find the throughput if the system (all stations together) produces
a. 1000 frames per second.
b. 500 frames per second.
c. 250 frames per second.
Solution
This situation is similar to the previous exercise except that the network is using slotted ALOHA
instead of pure ALOHA. The frame transmission time is 200/200 kbps or 1 ms. 
a. In this case G is 1. So S = G × e−G = 0.368 (36.8 percent). This means that the throughput
is 1000 × 0.0368 = 368 frames. Only 368 out of 1000 frames will probably survive. Note
that this is the maximum throughput case, percentagewise.
b. Here G is 1/2. In this case S = G × e−G = 0.303 (30.3 percent). This means that the
throughput is 500 × 0.0303 = 151. Only 151 frames out of 500 will probably survive. 
c. Now G is 1/4. In this case S = G × e−G = 0.195 (19.5 percent). This means that the
throughput is 250 × 0.195 = 49. Only 49 frames out of 250 will probably survive.
12.1.2
CSMA
To minimize the chance of collision and, therefore, increase the performance, the
CSMA method was developed. The chance of collision can be reduced if a station
senses the medium before trying to use it. Carrier sense multiple access (CSMA)
requires that each station first listen to the medium (or check the state of the medium)
before sending. In other words, CSMA is based on the principle “sense before transmit”
or “listen before talk.” 
CSMA can reduce the possibility of collision, but it cannot eliminate it. The reason
for this is shown in Figure 12.7, a space and time model of a CSMA network. Stations
are connected to a shared channel (usually a dedicated medium). 
The possibility of collision still exists because of propagation delay; when a station
sends a frame, it still takes time (although very short) for the first bit to reach every station
and for every station to sense it. In other words, a station may sense the medium and find
it idle, only because the first bit sent by another station has not yet been received. 
Slotted ALOHA vulnerable time 5 Tfr
The throughput for slotted ALOHA is S 5 G 3 e2G.
The maximum throughput Smax 5 0.368 when G 5 1.

PART III
DATA-LINK LAYER
At time t1, station B senses the medium and finds it idle, so it sends a frame. At
time t2 (t2 > t1), station C senses the medium and finds it idle because, at this time, the
first bits from station B have not reached station C. Station C also sends a frame. The
two signals collide and both frames are destroyed.
Vulnerable Time
The vulnerable time for CSMA is the propagation time Tp. This is the time needed for
a signal to propagate from one end of the medium to the other. When a station sends a
frame and any other station tries to send a frame during this time, a collision will result.
But if the first bit of the frame reaches the end of the medium, every station will already
have heard the bit and will refrain from sending. Figure 12.8 shows the worst case. The
leftmost station, A, sends a frame at time t1, which reaches the rightmost station, D, at
time t1 + Tp. The gray area shows the vulnerable area in time and space. 
Space/time model of a collision in CSMA
Vulnerable time in CSMA
t1
t2
Time
Time
B starts
at time t1
Area where
B’s signal exists
Area where
both signals exist
Area where
C’s signal exists
C starts
at time t2
B
A
C
D
t1
Time
B senses
 here
C senses
 here
D senses
 here
Time
Frame propagation
Vulnerable time
=
propagation time
A
C
D
B

CHAPTER 12
MEDIA ACCESS CONTROL (MAC)
Persistence Methods
What should a station do if the channel is busy? What should a station do if the channel
is idle? Three methods have been devised to answer these questions: the 1-persistent
method, the nonpersistent method, and the p-persistent method. Figure 12.9 shows
the behavior of three persistence methods when a station finds a channel busy.  
1-Persistent
The 1-persistent method is simple and straightforward. In this method, after the station
finds the line idle, it sends its frame immediately (with probability 1). This method has
the highest chance of collision because two or more stations may find the line idle and
send their frames immediately. We will see later that Ethernet uses this method.
Nonpersistent
In the nonpersistent method, a station that has a frame to send senses the line. If the line
is idle, it sends immediately. If the line is not idle, it waits a random amount of time and
then senses the line again. The nonpersistent approach reduces the chance of collision
because it is unlikely that two or more stations will wait the same amount of time and
retry to send simultaneously. However, this method reduces the efficiency of the net-
work because the medium remains idle when there may be stations with frames to send. 
p-Persistent
The p-persistent method is used if the channel has time slots with a slot duration equal
to or greater than the maximum propagation time. The p-persistent approach combines
the advantages of the other two strategies. It reduces the chance of collision and
improves efficiency. In this method, after the station finds the line idle it follows these
steps:
1. With probability p, the station sends its frame.
Behavior of three persistence methods
Busy
Sense
Sense
b. Nonpersistent
c. p-Persistent
a. 1-Persistent
Wait
Wait a time slot
otherwise
Wait a time slot
otherwise
Wait a backoff 
time
Wait
Time
Busy
Continuously sense
Send if
R < p.
Send if
R < p.
Send if
R < p.
Transmit
Transmit
Time
Busy
Busy
Continuously sense
Time

PART III
DATA-LINK LAYER
2. With probability q = 1 − p, the station waits for the beginning of the next time slot
and checks the line again.
a. If the line is idle, it goes to step 1. 
b. If the line is busy, it acts as though a collision has occurred and uses the back-
off procedure.
12.1.3
CSMA/CD
The CSMA method does not specify the procedure following a collision. Carrier sense
multiple access with collision detection (CSMA/CD) augments the algorithm to
handle the collision. 
In this method, a station monitors the medium after it sends a frame to see if the
transmission was successful. If so, the station is finished. If, however, there is a colli-
sion, the frame is sent again.
To better understand CSMA/CD, let us look at the first bits transmitted by the two
stations involved in the collision. Although each station continues to send bits in the
frame until it detects the collision, we show what happens as the first bits collide. In
Flow diagram for three persistence methods
a. 1-Persistent
c. p-Persistent
b. Nonpersistent 
Use backoff process
as though collision occurred.
[true]
[true]
[true]
[false]
[false]
[false]
Generate a 
random number
(R = 0 to 1)
Channel
busy?
Channel
busy?
R ≤ p
Wait
a slot
Station 
can transmit.
Station 
can transmit.
[true]
[false]
Channel
busy?
[true]
[false]
Channel
busy?
Wait
randomly
Station 
can transmit.

CHAPTER 12
MEDIA ACCESS CONTROL (MAC)
At time t1, station A has executed its persistence procedure and starts sending
the bits of its frame. At time t2, station C has not yet sensed the first bit sent by
A. Station C executes its persistence procedure and starts sending the bits in its
frame, which propagate both to the left and to the right. The collision occurs some-
time after time t2. Station C detects a collision at time t3 when it receives the first
bit of A’s frame. Station C immediately (or after a short time, but we assume imme-
diately) aborts transmission. Station A detects collision at time t4 when it receives
the first bit of C’s frame; it also immediately aborts transmission. Looking at the
figure, we see that A transmits for the duration t4 − t1; C transmits for the duration
t3 − t2. 
Now that we know the time durations for the two transmissions, we can show a
more complete graph in Figure 12.12. 
Minimum Frame Size
For CSMA/CD to work, we need a restriction on the frame size. Before sending the last
bit of the frame, the sending station must detect a collision, if any, and abort the transmis-
sion. This is so because the station, once the entire frame is sent, does not keep a copy of
Collision of the first bits in CSMA/CD 
Collision and abortion in CSMA/CD
Collision
occurs
t4
t2
t3
First bit of A
First bit of C
Transmission
time
Transmission
time
C’s collision
detection and
abortion
A’s collision
detection
and abortion
t1
Time
B
A
C
D
Time
Collision
occurs
Part of A’s frame
Part of C’s frame
A detects
collision and
aborts
C detects
collision
and aborts
t4
t2
t3
Transmission
time
Transmission
time
t1
Time
Time
B
A
C
D

PART III
DATA-LINK LAYER
the frame and does not monitor the line for collision detection. Therefore, the frame trans-
mission time Tfr must be at least two times the maximum propagation time Tp. To under-
stand the reason, let us think about the worst-case scenario. If the two stations involved in
a collision are the maximum distance apart, the signal from the first takes time Tp to reach
the second, and the effect of the collision takes another time TP to reach the first. So the
requirement is that the first station must still be transmitting after 2Tp. 
Example 12.5
A network using CSMA/CD has a bandwidth of 10 Mbps. If the maximum propagation time
(including the delays in the devices and ignoring the time needed to send a jamming signal, as we
see later) is 25.6 μs, what is the minimum size of the frame? 
Solution
The minimum frame transmission time is Tfr = 2 × Tp = 51.2 μs. This means, in the worst case, a
station needs to transmit for a period of 51.2 μs to detect the collision. The minimum size of the
frame is 10 Mbps × 51.2 μs = 512 bits or 64 bytes. This is actually the minimum size of the frame
for Standard Ethernet, as we will see later in the chapter. 
Procedure
Now let us look at the flow diagram for CSMA/CD in Figure 12.13. It is similar to the
one for the ALOHA protocol, but there are differences. 
The first difference is the addition of the persistence process. We need to sense the
channel before we start sending the frame by using one of the persistence processes we
discussed previously (nonpersistent, 1-persistent, or p-persistent). The corresponding
box can be replaced by one of the persistence processes shown in Figure 12.10. 
Flow diagram for the CSMA/CD 
Station has
a frame to send
Legend
Success
Abort
Tfr: Frame average transmission
  time 
K : Number of attempts
R  : (random number): 0 to 2K _ 1
TB: (Backoff time) = R × Tfr  
[true]
[true]
[true]
[false]
[false]
[false]
K = 0
K = K + 1
Wait TB
seconds 
Transmit
and receive
Send a
jamming
signal
Create random 
number R 
Done or
collision?
Collision 
detected?
K < 15 ?
Apply one of the
persistence methods

CHAPTER 12
MEDIA ACCESS CONTROL (MAC)
The second difference is the frame transmission. In ALOHA, we first transmit
the entire frame and then wait for an acknowledgment. In CSMA/CD, transmission
and collision detection are continuous processes. We do not send the entire frame and
then look for a collision. The station transmits and receives continuously and simulta-
neously (using two different ports or a bidirectional port). We use a loop to show that
transmission is a continuous process. We constantly monitor in order to detect one of
two conditions: either transmission is finished or a collision is detected. Either event
stops transmission. When we come out of the loop, if a collision has not been
detected, it means that transmission is complete; the entire frame is transmitted.
Otherwise, a collision has occurred.
The third difference is the sending of a short jamming signal to make sure that all
other stations become aware of the collision.
Energy Level
We can say that the level of energy in a channel can have three values: zero, normal,
and abnormal. At the zero level, the channel is idle. At the normal level, a station has
successfully captured the channel and is sending its frame. At the abnormal level, there
is a collision and the level of the energy is twice the normal level. A station that has a
frame to send or is sending a frame needs to monitor the energy level to determine if the
channel is idle, busy, or in collision mode. Figure 12.14 shows the situation.  
Throughput
The throughput of CSMA/CD is greater than that of pure or slotted ALOHA. The max-
imum throughput occurs at a different value of G and is based on the persistence
method and the value of p in the p-persistent approach. For the 1-persistent method, the
maximum throughput is around 50 percent when G = 1. For the nonpersistent method,
the maximum throughput can go up to 90 percent when G is between 3 and 8. 
Traditional Ethernet
One of the LAN protocols that used CSMA/CD is the traditional Ethernet with the data
rate of 10 Mbps. We discuss the Ethernet LANs in Chapter 13, but it is good to know
that the traditional Ethernet was a broadcast LAN that used the 1-persistence method to
control access to the common media. Later versions of Ethernet try to move from
CSMA/CD access methods for the reason that we discuss in Chapter 13. 
Energy level during transmission, idleness, or collision
Time
Energy
Frame transmission
Collision
Idle
Frame transmission

PART III
DATA-LINK LAYER
12.1.4
CSMA/CA
Carrier sense multiple access with collision avoidance (CSMA/CA) was invented
for wireless networks. Collisions are avoided through the use of CSMA/CA’s three
strategies: the interframe space, the contention window, and acknowledgments, as
shown in Figure 12.15. We discuss RTS and CTS frames later. 
❑
Interframe Space (IFS). First, collisions are avoided by deferring transmission even
if the channel is found idle. When an idle channel is found, the station does not send
immediately. It waits for a period of time called the interframe space or IFS. Even
though the channel may appear idle when it is sensed, a distant station may have
already started transmitting. The distant station’s signal has not yet reached this
Flow diagram of CSMA/CA
Station has
a frame to send
Carrier sense
Transmission
Contention
window
Legend
Success
Abort
[true]
[true]
[true]
[true]
[false]
[false]
[false]
[false]
K = 0
Wait IFS
Send RTS
Set a timer
Wait IFS
Send 
the frame
Choose a random number
R between 0 and 2K − 1
and use the Rth slot
Set a timer
K = K + 1
Wait TB
seconds 
Channel free?
ACK received
before time-out?
CTS received
before time-out?
K < limit ?
TB: Backoff time 
IFS: Interframe Space  
RTS: Request to send  
CTS: Clear to send  
K: Number of attempts 

CHAPTER 12
MEDIA ACCESS CONTROL (MAC)
station. The IFS time allows the front of the transmitted signal by the distant station to
reach this station. After waiting an IFS time, if the channel is still idle, the station can
send, but it still needs to wait a time equal to the contention window (described next).
The IFS variable can also be used to prioritize stations or frame types. For example, a
station that is assigned a shorter IFS has a higher priority. 
❑
Contention Window. The contention window is an amount of time divided into
slots. A station that is ready to send chooses a random number of slots as its wait
time. The number of slots in the window changes according to the binary exponen-
tial backoff strategy. This means that it is set to one slot the first time and then dou-
bles each time the station cannot detect an idle channel after the IFS time. This is
very similar to the p-persistent method except that a random outcome defines the
number of slots taken by the waiting station. One interesting point about the con-
tention window is that the station needs to sense the channel after each time slot.
However, if the station finds the channel busy, it does not restart the process; it just
stops the timer and restarts it when the channel is sensed as idle. This gives priority
to the station with the longest waiting time. See Figure 12.16. 
❑
Acknowledgment. With all these precautions, there still may be a collision resulting
in destroyed data. In addition, the data may be corrupted during the transmission.
The positive acknowledgment and the time-out timer can help guarantee that the
receiver has received the frame.
Frame Exchange Time Line
1. Before sending a frame, the source station senses the medium by checking the
energy level at the carrier frequency. 
a. The channel uses a persistence strategy with backoff until the channel is idle. 
b. After the station is found to be idle, the station waits for a period of time called
the DCF interframe space (DIFS); then the station sends a control frame called
the request to send (RTS). 
2. After receiving the RTS and waiting a period of time called the short interframe
space (SIFS), the destination station sends a control frame, called the clear to
send (CTS), to the source station. This control frame indicates that the destination
station is ready to receive data. 
Contention window
Contention window
Size: 
binary exponential
IFS
Busy
Found
idle
Continuously sense
Time

PART III
DATA-LINK LAYER
3. The source station sends data after waiting an amount of time equal to SIFS.
4. The destination station, after waiting an amount of time equal to SIFS, sends an
acknowledgment to show that the frame has been received. Acknowledgment is
needed in this protocol because the station does not have any means to check for
the successful arrival of its data at the destination. On the other hand, the lack of
collision in CSMA/CD is a kind of indication to the source that data have
arrived.
Network Allocation Vector
How do other stations defer sending their data if one station acquires access? In other
words, how is the collision avoidance aspect of this protocol accomplished? The key is
a feature called NAV.
When a station sends an RTS frame, it includes the duration of time that it needs to
occupy the channel. The stations that are affected by this transmission create a timer
called a network allocation vector (NAV) that shows how much time must pass before
these stations are allowed to check the channel for idleness. Each time a station
accesses the system and sends an RTS frame, other stations start their NAV. In other
words, each station, before sensing the physical medium to see if it is idle, first checks
its NAV to see if it has expired. Figure 12.17 shows the idea of NAV.
Collision During Handshaking
What happens if there is a collision during the time when RTS or CTS control frames
are in transition, often called the handshaking period? Two or more stations may try to
send RTS frames at the same time. These control frames may collide. However,
because there is no mechanism for collision detection, the sender assumes there has
been a collision if it has not received a CTS frame from the receiver. The backoff strat-
egy is employed, and the sender tries again. 
CSMA/CA and NAV
All other stations
• • •
DIFS
SIFS
NAV
SIFS
SIFS
Source
Destination
Time
Time
Time
Time
RTS
CTS
CTS
ACK
Data
ACK
A
B
C
D

CHAPTER 12
MEDIA ACCESS CONTROL (MAC)
Hidden-Station Problem
The solution to the hidden station problem is the use of the handshake frames (RTS and
CTS).  Figure 12.17 also shows that the RTS message from B reaches A, but not C.
However, because both B and C are within the range of A, the CTS message, which
contains the duration of data transmission from B to A, reaches C. Station C knows that
some hidden station is using the channel and refrains from transmitting until that dura-
tion is over.  
CSMA/CA and Wireless Networks
CSMA/CA was mostly intended for use in wireless networks. The procedure described
above, however, is not sophisticated enough to handle some particular issues related to
wireless networks, such as hidden terminals or exposed terminals. We will see how
these issues are solved by augmenting the above protocol with handshaking features.
The use of CSMA/CA in wireless networks will be discussed in Chapter 15.
12.2
CONTROLLED ACCESS 
In controlled access, the stations consult one another to find which station has the right
to send. A station cannot send unless it has been authorized by other stations. We dis-
cuss three controlled-access methods.
12.2.1
Reservation
In the reservation method, a station needs to make a reservation before sending data.
Time is divided into intervals. In each interval, a reservation frame precedes the data
frames sent in that interval. 
If there are N stations in the system, there are exactly N reservation minislots in the
reservation frame. Each minislot belongs to a station. When a station needs to send a
data frame, it makes a reservation in its own minislot. The stations that have made res-
ervations can send their data frames after the reservation frame. 
frame. In the first interval, only stations 1, 3, and 4 have made reservations. In the sec-
ond interval, only station 1 has made a reservation.
Reservation access method
Data
station 1
Data
station 4
Direction of packet movement
Data
station 1
Data
station 3
Reservation
frame

PART III
DATA-LINK LAYER
12.2.2
Polling
Polling works with topologies in which one device is designated as a primary station and
the other devices are secondary stations. All data exchanges must be made through the
primary device even when the ultimate destination is a secondary device. The primary
device controls the link; the secondary devices follow its instructions. It is up to the pri-
mary device to determine which device is allowed to use the channel at a given time. The
primary device, therefore, is always the initiator of a session (see Figure 12.19). This
method uses poll and select functions to prevent collisions. However, the drawback is if
the primary station fails, the system goes down. 
Select
The select function is used whenever the primary device has something to send.
Remember that the primary controls the link. If the primary is neither sending nor
receiving data, it knows the link is available. If it has something to send, the primary
device sends it. What it does not know, however, is whether the target device is pre-
pared to receive. So the primary must alert the secondary to the upcoming transmission
and wait for an acknowledgment of the secondary’s ready status. Before sending data,
the primary creates and transmits a select (SEL) frame, one field of which includes the
address of the intended secondary. 
Poll
The poll function is used by the primary device to solicit transmissions from the sec-
ondary devices. When the primary is ready to receive data, it must ask (poll) each
device in turn if it has anything to send. When the first secondary is approached, it
responds either with a NAK frame if it has nothing to send or with data (in the form of
a data frame) if it does. If the response is negative (a NAK frame), then the primary
polls the next secondary in the same manner until it finds one with data to send. When
the response is positive (a data frame), the primary reads the frame and returns an
acknowledgment (ACK frame), verifying its receipt. 
Select and poll functions in polling-access method
SEL
ACK
Data
ACK
Primary
Select
Poll
Poll
NAK
Primary
B
A
B
A
Poll
Data
ACK

CHAPTER 12
MEDIA ACCESS CONTROL (MAC)
12.2.3
Token Passing
In the token-passing method, the stations in a network are organized in a logical ring.
In other words, for each station, there is a predecessor and a successor. The predeces-
sor is the station which is logically before the station in the ring; the successor is the
station which is after the station in the ring. The current station is the one that is
accessing the channel now. The right to this access has been passed from the predeces-
sor to the current station. The right will be passed to the successor when the current
station has no more data to send.
But how is the right to access the channel passed from one station to another? In
this method, a special packet called a token circulates through the ring. The possession
of the token gives the station the right to access the channel and send its data. When a
station has some data to send, it waits until it receives the token from its predecessor. It
then holds the token and sends its data. When the station has no more data to send, it
releases the token, passing it to the next logical station in the ring. The station cannot
send data until it receives the token again in the next round. In this process, when a sta-
tion receives the token and has no data to send, it just passes the data to the next station. 
Token management is needed for this access method. Stations must be limited in the
time they can have possession of the token. The token must be monitored to ensure it has
not been lost or destroyed. For example, if a station that is holding the token fails, the token
will disappear from the network. Another function of token management is to assign prior-
ities to the stations and to the types of data being transmitted. And finally, token manage-
ment is needed to make low-priority stations release the token to high-priority stations. 
Logical Ring
In a token-passing network, stations do not have to be physically connected in a ring;
the ring can be a logical one. Figure 12.20 shows four different physical topologies that
can create a logical ring. 
Logical ring and physical topology in token-passing access method
a. Physical ring
b. Dual ring
c. Bus ring
d. Star ring

PART III
DATA-LINK LAYER
In the physical ring topology, when a station sends the token to its successor, the
token cannot be seen by other stations; the successor is the next one in line. This
means that the token does not have to have the address of the next successor. The prob-
lem with this topology is that if one of the links—the medium between two adjacent
stations—fails, the whole system fails. 
The dual ring topology uses a second (auxiliary) ring which operates in the reverse
direction compared with the main ring. The second ring is for emergencies only (such
as a spare tire for a car). If one of the links in the main ring fails, the system automati-
cally combines the two rings to form a temporary ring. After the failed link is restored,
the auxiliary ring becomes idle again. Note that for this topology to work, each station
needs to have two transmitter ports and two receiver ports. The high-speed Token Ring
networks called FDDI (Fiber Distributed Data Interface) and CDDI (Copper Distrib-
uted Data Interface) use this topology.
In the bus ring topology, also called a token bus, the stations are connected to a sin-
gle cable called a bus. They, however, make a logical ring, because each station knows
the address of its successor (and also predecessor for token management purposes).
When a station has finished sending its data, it releases the token and inserts the address
of its successor in the token. Only the station with the address matching the destination
address of the token gets the token to access the shared media. The Token Bus LAN,
standardized by IEEE, uses this topology. 
In a star ring topology, the physical topology is a star. There is a hub, however, that
acts as the connector. The wiring inside the hub makes the ring; the stations are con-
nected to this ring through the two wire connections. This topology makes the network
less prone to failure because if a link goes down, it will be bypassed by the hub and the
rest of the stations can operate. Also adding and removing stations from the ring is easier.
This topology is still used in the Token Ring LAN designed by IBM. 
12.3
CHANNELIZATION
Channelization (or channel partition, as it is sometimes called) is a multiple-access
method in which the available bandwidth of a link is shared in time, frequency, or
through code, among different stations. In this section, we discuss three channelization
protocols: FDMA, TDMA, and CDMA.
12.3.1
FDMA
In frequency-division multiple access (FDMA), the available bandwidth is divided
into frequency bands. Each station is allocated a band to send its data. In other words,
each band is reserved for a specific station, and it belongs to the station all the time.
Each station also uses a bandpass filter to confine the transmitter frequencies. To prevent
We see the application of all these methods in Chapter 16
when we discuss cellular phone systems.
