# BCS703 — Module 1

## Introduction to Cryptography

**Subject:** BCS703 (Information and Network Security)
**Module:** Module 1
**Content type:** module_notes
**Sources:** BCS703-module-1-pdf.txt

---

1 | P a g e 
 
 
 
 
MODULE 1 
 
 
Model for Network Security 
When two parties (called principals) exchange a message over the Internet, a logical 
information channel is established using communication protocols like TCP/IP. Security 
becomes necessary to guard this communication from opponents who may attempt to 
compromise: 
• 
Confidentiality (unauthorized access) 
• 
Authenticity (verifying sender identity) 
• 
Integrity (ensuring data is not altered) 
To achieve security, two components are typically used: 
1. Security Transformation: 
Example – Encryption scrambles the message; authentication codes verify sender identity. 
2. Secret Information: 
 
 
Shared encryption keys are used to secure and decode messages. The key must remain 

 
2 | P a g e 
 
 
 
 
unknown to the opponent. 
In some cases, a trusted third party is involved: 
• For distributing secret keys securely 
• For resolving disputes about message authenticity 
Four Basic Tasks in Designing Security Services: 
1. Design a strong security algorithm 
2. Generate secret keys 
3. Develop secure key distribution methods 
4. Specify protocols for communication using the algorithm and secret 
Unwanted Access & System Security Model 
Apart from securing message transmission, systems must be protected from unauthorized 
access: 
• Hackers: May break in for challenge or fun 
• Malicious insiders: Disgruntled employees 
• Cybercriminals: Steal data or money (e.g., credit card fraud) 
Two main types of software threats: 
1. Information Access Threats: 
Accessing or modifying data illegally 
2. Service Threats: 
Preventing legitimate users from accessing services 
o Viruses and Worms are common examples 
o These can be spread via infected disks or over the network 
 
Security Mechanisms (Refer to Figure 1.6) 
 
 
Two categories of defense mechanisms: 
1. Gatekeeper Functions: 

 
3 | P a g e 
 
 
 
 
o Password-based logins 
o Antivirus screening logic 
2. Internal Controls: 
o Monitor system activity 
o Analyze data to detect intruders or malicious behavior 
 
These systems help detect, prevent, and respond to unauthorized access 
 
 
Classical Encryption Techniques 
 
Symmetric encryption, also referred to as conventional encryption or single-key encryption, 
was the only type of encryption in use prior to the development of public-key encryption in 
the 1970s. It remains by far the most widely used of the two types of encryption. Part One 
examines a number of symmetric ciphers. In this chapter, we begin with a look at a general 
model for the symmetric encryption process; this will enable us to understand the context 
within which the algorithms are used. Next, we examine a variety of algorithms in use before 
the computer era. Finally, we look briefly at a different approach known as steganography. 
Chapter 3 examines the most widely used symmetric cipher: DES. 
. 
Before beginning, we define some terms. An original message is known as the plaintext, while 
the coded message is called the ciphertext. The process of converting from plaintext to 
ciphertext is known as enciphering or encryption; restoring the plaintext from the ciphertext 
is deciphering or decryption. The many schemes used for encryption constitute the area of 
study known as cryptography. Such a scheme is known as a cryptographic system or a 
cipher. Techniques used for deciphering a message without any knowledge of the enciphering 
details fall into the area of cryptanalysis. Cryptanalysis is what the layperson calls "breaking 
the code." The areas of cryptography and cryptanalysis together are called cryptology. 
Symmetric Cipher Model 
A symmetric encryption scheme has five ingredients (Figure 2.1): 
Plaintext: This is the original intelligible message or data that is fed into the algorithm as 
input. Encryption algorithm: The encryption algorithm performs various substitutions and 
transformations on the plaintext. 
Secret key: The secret key is also input to the encryption algorithm. The key is a value 

 
 
 
independent of the plaintext and of the algorithm. The algorithm will produce a different 
output depending on the specific key being used at the time. The exact substitutions and 
transformations performed by the algorithm depend on the key. 
Cipher text: This is the scrambled message produced as output. It depends on the plaintext 
and the secret key. For a given message, two different keys will produce two different cipher 
texts. The cipher text is an apparently random stream of data and, as it stands, is unintelligible. 
Decryption algorithm: This is essentially the encryption algorithm run in reverse. It takes 
the cipher text and the secret key and produces the original plaintext. 
 
 
 
 
 
There are two requirements for secure use of conventional encryption: 
1. We need a strong encryption algorithm. At a minimum, we would like the algorithm to be 
such that an opponent who knows the algorithm and has access to one or more ciphertexts 
would be unable to decipher the ciphertext or figure out the key. This requirement is usually 
stated in a stronger form: The opponent should be unable to decrypt ciphertext or discover the 
key even if he or she is in possession of a number of ciphertexts together with the plaintext 
that produced each ciphertext. 
2. Sender and receiver must have obtained copies of the secret key in a secure fashion and 
must keep the key secure. If someone can discover the key and knows the algorithm, all 
communication using this key is readable. 
We assume that it is impractical to decrypt a message on the basis of the ciphertext plus 
 
4 | P a g e 

 
5 | P a g e 
 
 
 
 
knowledge of the encryption/decryption algorithm. In other words, we do not need to keep 
the algorithm secret; we need to keep only the key secret. This feature of symmetric 
encryption is what makes it feasible for widespread use. The fact that the algorithm need not 
be kept secret means that manufacturers can and have developed low-cost chip 
implementations of data encryption algorithms. These chips are widely available and 
incorporated into a number of products. With the use of symmetric encryption, the principal 
security problem is maintaining the secrecy of the key. 
Let us take a closer look at the essential elements of a symmetric encryption scheme, using 
are letters in some finite alphabet. Traditionally, the alphabet usually consisted of the 26 
capital letters. Nowadays, the binary alphabet {0, 1} is typically used. For encryption, a key of 
the form K = [K1, K2, ..., KJ] is generated. If the key is generated at the message source, then it 
must also be provided to the destination by means of some secure channel. Alternatively, a 
third party could generate the key and securely deliver it to both source and destination. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
With the message X and the encryption key K as input, the encryption algorithm forms the 
ciphertext Y = [Y1, Y2, ..., YN]. We can write this As Y = E(K, X) 
This notation indicates thatY is produced by using encryption algorithm E as a function of the 
plaintexXt , with the specific function determined by the value of the key K. 
The intended receiver, in possession of the key, is able to invert the transformation: 

 
6 | P a g e 
 
 
 
 
X = D(K, Y) 
An opponent, observing Y but not having access to K or X, may attempt to recover X or K or both 
X and K. It is assumed that the opponent knows the encryption (E) and decryption (D) 
algorithms. If the opponent is interested in only this particular message, then the focus of the 
effort is to recover X by generating a plaintext estimate . Often, however, the opponent is 
interested in being able to read future messages as well, in which case an attempt is made to 
recover K by generating an estimate . 
Cryptography 
Cryptographic systems are characterized along three independent dimensions: 
1. The type of operations used for transforming plaintext to ciphertext. All encryption 
algorithms are based on two general principles: substitution, in which each element in the 
plaintext (bit, letter, group of bits or letters) is mapped into another element, and 
transposition, in which elements in the plaintext are rearranged. The fundamental 
requirement is that no information be lost (that is, that all operations are reversible). Most 
systems, referred to as product systems, involve multiple stages of substitutions and 
transpositions. 
2. The number of keys used. If both sender and receiver use the same key, the system is 
referred to as symmetric, single-key, secret-key, or conventional encryption. If the sender and 
receiver use different keys, the system is referred to as asymmetric, two-key, or public-key 
encryption. 
3. The way in which the plaintext is processed. A block cipher processes the input one block 
of elements at a time, producing an output block for each input block. A stream cipher 
processes the input elements continuously, producing output one element at a time, as it goes 
along. 
Cryptanalysis 
Typically, the objective of attacking an encryption system is to recover the key in use rather 
then simply to recover the plaintext of a single ciphertext. There are two general approaches 
to attacking a conventional encryption scheme: 
• Cryptanalysis: Cryptanalytic attacks rely on the nature of the algorithm plus perhaps 
some knowledge of the general characteristics of the plaintext or even some sample 
plaintext-ciphertext pairs. This type of attack exploits the characteristics of the 
algorithm to attempt to deduce a specific plaintext or to deduce the key being used. 

 
7 | P a g e 
 
 
 
 
• Brute-force attack: The attacker tries every possible key on a piece of ciphertext until 
an intelligible translation into plaintext is obtained. On average, half of all possible keys 
must be tried to achieve success. If either type of attack succeeds in deducing the key, 
the effect is catastrophic: All future and past messages encrypted with that key 
are compromised. 
information known to the cryptanalyst. The most difficult problem is presented when all that 
is available is the cipher text only. In some cases, not even the encryption algorithm is known, 
but in general we can assume that the opponent does know the algorithm used for encryption. 
One possible attack under these circumstances is the brute-force approach of trying all 
possible keys. If the key space is very large, this becomes impractical. Thus, the opponent must 
rely on an analysis of the cipher text itself, generally applying various statistical tests to it. 
 
 
Types of Attacks on Encrypted Messages 
Type of Attack Known to Cryptanalyst 
Cipher text only 
• Encryption algorithm 
• Cipher text 
Known plaintext 
• Encryption algorithm 
• Cipher text 
• One or more plaintext-cipher text 
pairs formed with the secret key 
Chosen plaintext 
• Encryption algorithm 
• Cipher text 
• Plaintext 
message 
chosen 
by 
cryptanalyst, 
together 
with 
its 
corresponding 
ciphertextgenerated 
with the secret key 
Chosen cipher text 
• Encryption algorithm 
• Cipher text 
• Purported ciphertext chosen by 
cryptanalyst, together with its 
corresponding 
decryptedplaintext 
generated 
with the secret key 

 
8 | P a g e 
 
 
 
 
Chosen text 
• Encryption algorithm 
• Ciphertext 
• Plaintext 
message 
chosen 
by 
cryptanalyst, 
together 
with 
its 
corresponding 
• ciphertext generated with the secret key 
• Purported ciphertext chosen by 
cryptanalyst, together with its 
corresponding 
decrypted 
plaintext generated with the 
secret key 
 
A brute-force attack involves trying every possible key until an intelligible translation of the ciphertext into 
plaintext is obtained. On average, half of all possible keys must be tried to achieve success. 
Results are shown for four binary key sizes. The 56-bit key size is used with the DES (Data 
Encryption Standard) algorithm, and the 168-bit key size is used for triple DES. The minimum 
key size specified for AES (Advanced Encryption Standard) is 128 bits. Results are also shown 
for what are called substitution codes that use a 26-character key (discussed later), in which 
all possible permutations of the 26 characters serve as keys. For each key size, the results are 
shown assuming that it takes 1 ms to perform a single decryption, which is a reasonable order 
of magnitude for today's machines. With the use of massively parallel organizations of 
microprocessors, it may be possible to achieve processing rates many orders of magnitude 
greater. 
Substitution Techniques 
In this section and the next, we examine a sampling of what might be called classical 
encryption techniques. A study of these techniques enables us to illustrate the basic 
approaches to symmetric encryption used today and the types of cryptanalytic attacks that 
must be anticipated. The two basic building blocks of all encryption techniques are 
substitution and transposition. We examine these in the next two sections. Finally, we discuss 
a system that combines both substitution and transposition. A substitution technique is one 
in which the letters of plaintext are replaced by other letters or by numbers or symbols. If the 
plaintext is viewed as a sequence of bits, then substitution involves replacing plaintext bit 
patterns with ciphertext bit patterns 
Caesar Cipher 
The earliest known use of a substitution cipher, and the simplest, was by Julius Caesar. The 
Caesar cipher involves replacing each letter of the alphabet with the letter standing three 
places further down the alphabet. For example, 

 
9 | P a g e 
 
 
 
 
plain: meet me after the toga party 
Cipher: PHHW PH DIWHU WKH WRJD SDUWB 
Note that the alphabet is wrapped around, so that the letter following Z is A. We can define the 
transformation by listing all possibilities, as follows: 
plain: a b c d e f g h i j k l m n o p q r s t u v w x y z 
cipher: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C 
Let us assign a numerical equivalent to each letter: 
a b c d e f g h 
i j 
k 
l 
m 
0  1  2  3  4 5  6  7  8 
9 10 11 12 
n 
o 
p 
q 
r s 
t 
u 
v 
w x y 
z 
13 14 15 16 17 18 19 20 21 22 23 24 25 
Then the algorithm can be expressed as follows. For each plaintext letter p, substitute the 
ciphertext letter C: 
C = E(3, p) = (p + 3) mod 26 
A shift may be of any amount, so that the general Caesar algorithm is 
C = E(k, p) = (p + k) mod 26 
where k takes on a value in the range 1 to 25. The decryption algorithm is simply 
p = D(k, C) = (C k) mod 26 
If it is known that a given ciphertext is a Caesar cipher, then a brute-force cryptanalysis is easily 
performed: Simply try all the 25 possible keys. Figure 2.3 shows the results of applying this 
strategy to the example ciphertext. In this case, the plaintext leaps out as occupying the third 
line. 

 
10 | P a g e 
 
 
 
 
Three important characteristics of this problem enabled us to use a brute-force 
cryptanalysis: 
1. The encryption and decryption algorithms are known. 
2. There are only 25 keys to try. 
3. The language of the plaintext is known and easily recognizable 
 
In most networking situations, we can assume that the algorithms are known. What generally 
makes brute-force cryptanalysis impractical is the use of an algorithm that employs a large 
number of keys. For example, the triple DES algorithm, examined in Chapter 6, makes use of a 
168-bit key, giving a key space of 2 168 or greater than 3.7 x 10^5 possible keys. The third 
characteristic is also significant. If the language of the plaintext is unknown, then plaintext 
output may not be recognizable. Furthermore, the input may be abbreviated or compressed in 
some fashion, again making recognition difficult. 
Monoalphabetic Ciphers 

 
11 | P a g e 
 
 
 
 
With only 25 possible keys, the Caesar cipher is far from secure. A dramatic increase in the key 
space can be achieved by allowing an arbitrary substitution. Recall the assignment for the 
Caesar cipher: 
plain: a b c d e f g h i j k l m n o p q r s t u v w x y z 
cipher: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C 
If, instead, the "cipher" line can be any permutation of the 26 alphabetic characters, then there 
are 26! or greater than 4 x 10^26 possible keys. This is 10 orders of magnitude greater than 
the key space for DES and would seem to eliminate brute-force techniques for cryptanalysis. 
Such an approach is referred to as a monoalphabetic substitution cipher, because a 
single cipher alphabet (mapping from plain alphabet to cipher alphabet) is used per message. 
There is, however, another line of attack. If the cryptanalyst knows the nature of the 
plaintext (e.g., noncompressed English text), then the analyst can exploit the regularities of 
the language. To see how such a cryptanalysis might proceed. The ciphertext to be solved is 
UZQSOVUOHXMOPVGPOZPEVSGZWSZOPFPESXUDBMETSXAIZ 
VUEPHZHMDZSHZOWSFPAPPDTSVPQUZWYMXUZUHSX 
EPYEPOPDZSZUFPOMBZWPFUPZHMDJUDTMOHMQ 
As a first step, the relative frequency of the letters can be determined and compared to a 
standard frequency distribution for English, such as is shown in Figure 2.5. If the message were 
long enough, this technique alone might be sufficient, but because this is a relatively short 
message, we cannot expect an exact match. In any case, the relative frequencies of the letters 
in the ciphertext (in percentages) are as follows: 
 
P 13.33 
H 5.83 
F 3.33 
B 1.67 
C 0.00 
Z 11.67 
D 5.00 
W 3.33 
G 1.67 
K 0.00 
S 8.33 
E 5.00 
Q 2.50 
Y 1.67 
L 0.00 
U 8.33 
V 4.17 
T 2.50 
I 0.83 
N 0.00 
O 7.50 
X 4.17 
A 1.67 
J 0.83 
R 0.00 
M 6.67 

 
12 | P a g e 
 
 
 
 
 
 
 
Comparing this breakdown with Figure 2.5, it seems likely that cipher letters P and Z are the 
equivalents of plain letters e and t, but it is not certain which is which. The letters S, U, O, M, 
and H are all of relatively high frequency and probably correspond to plain letters from the 
set 
{a, h, i, n, o, r, s}.The letters with the lowest frequencies (namely, A, B, G, Y, I, J) are likely 
included in the set {b, j, k, q, v, x, z}. There are a number of ways to proceed at this point. We 
could make some tentative assignments and start to fill in the plaintext to see if it looks like 
a reasonable "skeleton" of a message. A more systematic approach is to look for other 
regularities. For example, certain words may be known to be in the text. Or we could look for 
repeating sequences of cipher letters and try to deduce their plaintext equivalents. 
A powerful tool is to look at the frequency of two-letter combinations, known as digrams. A 
table similar to Figure 2.5 could be drawn up showing the relative frequency of digrams. 
The most common such digram is th. In our cipher text, the most common digram is ZW, 
which appears three times. So we make the correspondence of Z with t and W with h. Then, 
by our earlier hypothesis, we can equate P with e. Now notice that the sequence ZWP 

 
13 | P a g e 
 
 
 
 
appears in the cipher text, and we can translate that sequence as "the." This is the most 
frequent trigram (three- letter combination) in English, which seems to indicate that we 
are on the right track. Next, notice the sequence ZWSZ in the first line. We do not know 
that these four letters form a complete word, but if they do, it is of the form th_t. If so, S 
equates 
with 
a. 
So 
far, 
then, 
we 
have 
UZQSOVUOHXMOPVGPOZPEVSGZWSZOPFPESXUDBMETSXAIZ 
t a e e te a that e e a a VUEPHZHMDZSHZOWSFPAPPDTSVPQUZWYMXUZUHSX 
e t ta t ha e ee a e th t a EPYEPOPDZSZUFPOMBZWPFUPZHMDJUDTMOHMQ 
e e e tat e the t 
Only four letters have been identified, but already we have quite a bit of the message. 
Continued analysis of frequencies plus trial and error should easily yield a solution from this 
point. The complete plaintext, with spaces added between words, follows: it was disclosed 
yesterday that several informal but direct contacts have been made with political 
representatives of the viet cong in Moscow Monoalphabetic ciphers are easy to break because 
they reflect the frequency data of the original alphabet. A countermeasure is to provide 
multiple substitutes, known as homophones, for a single letter. For example, the letter e could 
be assigned a number of different cipher symbols, such as 16, 74, 35, and 21, with each 
homophone used in rotation, or randomly. If the number of symbols assigned to each letter is 
proportional to the relative frequency of that letter, then single-letter frequency information 
is completely obliterated. The great mathematician Carl Friedrich Gauss believed that he had 
devised an unbreakable cipher using homophones. However, even with homophones, each 
element of plaintext affects only one element of ciphertext, and multiple-letter patterns (e.g., 
digram frequencies) still survive in the ciphertext, making cryptanalysis relatively 
straightforward. Two principal methods are used in substitution ciphers to lessen the extent 
to which the structure of the plaintext survives in the ciphertext: One approach is to encrypt 
multiple letters of plaintext, and the other is to use multiple cipher alphabets. We briefly 
examine each. 
Playfair Cipher 
The best-known multiple-letter encryption cipher is the Playfair, which treats digrams in the 
plaintext as single units and translates these units into ciphertext digrams. 
The Playfair algorithm is based on the use of a 5 x 5 matrix of letters constructed using a 
keyword. Here is an example, solved by Lord Peter Wimsey in Dorothy Sayers's Have His 
Carcase. 

 
14 | P a g e 
 
 
 
 
M O N A R C 
H Y B D E F G 
I/J K L P Q S 
T U V W X Z 
In this case, the keyword is monarchy. The matrix is constructed by filling in the letters of the 
keyword (minus duplicates) from left to right and from top to bottom, and then filling in the 
remainder of the matrix with the remaining letters in alphabetic order. The letters I and J count 
as one letter. Plaintext is encrypted two letters at a time, according to the following rules: 
1. Repeating plaintext letters that are in the same pair are separated with a filler letter, such 
as x, so that balloon would be treated as ba lx lo on. 
2. Two plaintext letters that fall in the same row of the matrix are each replaced by the letter 
to the right, with the first element of the row circularly following the last. For example, ar is 
encrypted as RM. 
3. Two plaintext letters that fall in the same column are each replaced by the letter beneath, 
with the top element of the column circularly following the last. For example, mu is encrypted 
as CM. 
4. Otherwise, each plaintext letter in a pair is replaced by the letter that lies in its own row 
and the column occupied by the other plaintext letter. Thus, hs becomes BP and ea becomes 
IM (or JM, as the encipherer wishes). 
The Playfair cipher is a great advance over simple monoalphabetic ciphers. For one thing, 
whereas there are only 26 letters, there are 26 x 26 = 676 digrams, so that identification of 
individual digrams is more difficult. Furthermore, the relative frequencies of individual letters 
exhibit a much greater range than that of digrams, making frequency analysis much more 
difficult. For these reasons, the Playfair cipher was for a long time considered unbreakable. It 
was used as the standard field system by the British Army in World War I and still enjoyed 
considerable use by the U.S. Army and other Allied forces during World War II. Despite this 
level of confidence in its security, the Playfair cipher is relatively easy to break because it still 
leaves much of the structure of the plaintext language intact. A few hundred letters of 
ciphertext are generally sufficient. 
Hill Cipher 
Another interesting multiletter cipher is the Hill cipher, developed by the mathematician 
Lester Hill in 1929. The encryption algorithm takes m successive plaintext letters and 

 
15 | P a g e 
 
 
 
 
substitutes for them m ciphertext letters. The substitution is determined by m linear equations 
in which each character is assigned a numerical value (a = 0, b = 1 ... z = 25). For m = 3, the 
system can be described as follows: 
c1 = (k11P1 + k12P2 + k13P3) mod 26 
c2 = (k21P1 + k22P2 + k23P3) mod 26 
c3 = (k31P1 + k32P2 + k33P3) mod 26 
This can be expressed in term of column vectors and matrices: 
 
or 
C = KP mod 26 
where C and P are column vectors of length 3, representing the plaintext and ciphertext, and K 
is a 3 x 3 matrix, representing the encryption key. Operations are performed mod 26. For 
example, consider the plaintext "paymoremoney" and use the encryption key 
 
The first three letters of the plaintext are represented by the vector 
 

 
16 | P a g e 
 
 
 
 
the ciphertext for the entire plaintext is LNSHDLEWMTRW. 
Decryption requires using the inverse of the matrix K. The inverse K-1 of a matrix K is defined 
by the equation KK-1 = K-1K = I, where I is the matrix that is all zeros except for ones along 
the main diagonal from upper left to lower right. The inverse of a matrix does not always exist, 
but when it does, it satisfies the preceding equation. In this case, the inverse 
 
This is demonstrated as follows: 
 
It is easily seen that if the matrix K-1 is applied to the ciphertext, then the plaintext is 
recovered. To explain how the inverse of a matrix is determined, we make an exceedingly brief 
excursion into linear algebra. For any square matrix (m x m) the determinant equals the sum 
of all the products that can be formed by taking exactly one element from each row and exactly 
one element from each column, with certain of the product terms preceded by a minus sign. 
For a 2*2 matrix, 
 
the determinant is k11k22 k12k21. For a 3 x 3 matrix, the value of the determinant is k 11k22k33 
+ k21k32k13 + k31k12k23 k31k22k13 
k21k12k33 k11k32k23. If a square matrixA has a nonzero determinant, then the inverse of the 
matrix is computed as𝐴1ij =(1)𝐼+𝐽(Dij)/ded(A), where (Dij) is the sub determinant formed by 
deleting the ith row and the jth column of A and det(A) is the determinant of A. For our 
purposes, all arithmetic is done mod 26. 
In general terms, the Hill system can be expressed as follows: 
C = E(K, P) = KP mod 26 

 
17 | P a g e 
 
 
 
 
P = D(K, P) = 𝐾1C mod 26 = 𝐾1 KP = P 
As with Playfair, the strength of the Hill cipher is that it completely hides single-letter 
frequencies. Indeed, with Hill, the use of a larger 
matrix hides more frequency information. Thus a 3 x 3 Hill cipher hides not only single-letter 
but also two-letter frequency information. 
Although the Hill cipher is strong against a cipher text-only attack, it is easily broken with a 
known plaintext attack. For an m x m Hill cipher, 
suppose we have m plaintext-ciphe r text pairs, each of length m. We label the pairs 
 
unknown key matrix K. Now define two m x m matrices X = (Pij) and Y = (Cij). Then we can 
form the matrix equation Y = KX. If X has an inverse, then we can determine K = YX1.If X is not 
invertible, then a new version of X can be formed with additional plaintext-ciphertext pairs 
until an invertible X is obtained. Suppose that the plaintext "friday" is encrypted using a 2 x 2 
Hill cipher to yield the ciphertext PQCFKU. Thus, we know that 
 
Using the first two plaintext-ciphertext pairs, we have 
 
The inverse of X can be computed: 
 
Polyalphabetic Ciphers 
Another way to improve on the simple monoalphabetic technique is to use different 
monoalphabetic substitutions as one proceeds through the plaintext message. The general 
name for this approach is polyalphabetic substitution cipher. All these techniques have the 
following features in common: 
1. A set of related monoalphabetic substitution rules is used. 
2. A key determines which particular rule is chosen for a given transformation. 

 
18 | P a g e 
 
 
 
 
The best known, and one of the simplest, such algorithm is referred to as the Vigenère cipher. In 
this scheme, the set of related monoalphabetic substitution rules consists of the 26 Caesar ciphers, 
with shifts of 0 through 25. Each cipher is denoted by a key letter, M which is the ciphertext letter 
that substitutes for the plaintext letter a. Thus, a Caesar cipher with a shift of 3 is denoted by the 
key value d. To aid in understanding the scheme and to aid in its use, a matrix known as the 
Vigenère tableau is constructed (Table 2.3). Each of the 26 ciphers is laid out horizontally, with 
the key letter for each cipher to its left. A normal alphabet for the plaintext runs across the top. 
The process of encryption is simple: Given a key letter x and a plaintext letter y, the ciphertext 
letter is at the intersection of the row labeled x and the column labeled y; in this case the ciphertext 
is V. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
To encrypt a message, a key is needed that is as long as the message. Usually, the key is a 
repeating keyword. For example, if the keyword is deceptive, the message "we are discovered 
save yourself" is encrypted as follows: 
key: deceptivedeceptivedeceptive 
plaintext: 
wearediscoveredsaveyourself 
ciphertext: ZICVTWQNGRZGVTWAVZHCQYGLMGJ 
Decryption is equally simple. The key letter again identifies the row. The position of the 
ciphertext letter in that row determines the column, and the plaintext letter is at the top of 
that column. The strength of this cipher is that there are multiple ciphertext letters for each 

 
19 | P a g e 
 
 
 
 
plaintext letter, one for each unique letter of the keyword. Thus, the letter frequency 
information is obscured. However, not all knowledge of the plaintext structure is lost. For 
example, Figure 2.6 shows the frequency distribution for a Vigenère cipher with a keyword of 
length 9. An improvement is achieved over the Playfair cipher, but considerable frequency 
information remains. 
It is instructive to sketch a method of breaking this cipher, because the method reveals some 
of the mathematical principles that apply in cryptanalysis. First, suppose that the opponent 
believes that the ciphertext was encrypted using either monoalphabetic substitution or a 
Vigenère cipher. A simple test can be made to make a determination. If a monoalphabetic 
substitution is used, then the statistical properties of the ciphertext should be the same as that 
of the language of the plaintext. Thus, referring to Figure 2.5, there should be one cipher letter 
with a relative frequency of occurrence of about 12.7%, one with about 9.06%, and so on. 
If only a single message is available for analysis, we would not expect an exact match of 
this small sample with the statistical profile of the plaintext language. Nevertheless, if the 
correspondence is close, we can assume a monoalphabetic substitution. If, on the other hand, 
a Vigenère cipher is suspected, then progress depends on determining the length of the 
keyword, as will be seen in a moment. For now, let us concentrate on how the keyword length 
can be determined. The important insight that leads to a solution is the following: If two 
identical sequences of plaintext letters occur at a distance that is an integer multiple of the 
keyword length, they will generate identical ciphertext sequences. In the foregoing example, 
two instances of the sequence "red" are separated by nine character positions. Consequently, 
in both cases, r is encrypted using key letter e, e is encrypted using key letter p, and d is 
encrypted using keyM letter t. Thus, in both cases the ciphertext sequence is VTW. An 
analyst looking at only the ciphertext would detect the repeated sequences VTW at a 
displacement of 9 and make the assumption that the keyword is either three or nine letters 
in length. The appearance of VTW twice could be by chance and not reflect identical 
plaintext letters encrypted with identical key letters. However, if the message is long enough, 
there will be a number of such repeated cipher text sequences. By looking for common factors 
in the displacements of the various sequences, the analyst should be able to make a good guess 
of the keyword length. Solution of the cipher now depends on an important insight. If the 
keyword length is N, then the cipher, in effect, consists of N monoalphabetic substitution 
ciphers. For example, with the keyword DECEPTIVE, the letters in positions 1, 10, 19, and 

 
20 | P a g e 
 
 
 
 
so on are all encrypted with the same monoalphabetic cipher. Thus, we can use the known 
frequency characteristics of the plaintext language to attack each of the monoalphabetic 
ciphers separately. The periodic nature of the keyword can be eliminated by using a 
nonrepeating keyword that is as long as the message itself. Vigenère proposed what is referred 
to as an autokey system, in which a keyword is concatenated with the plaintext itself to 
provide a running key. 
For our example, 
key: deceptivewearediscoveredsav 
plaintext: 
wearediscoveredsaveyourself 
ciphertext: ZICVTWQNGKZEIIGASXSTSLVVWLA 
The ultimate defense against such a cryptanalysis is to choose a keyword that is as long as the 
plaintext and has no statistical relationship to it. Such a system was introduced by an AT&T 
engineer named Gilbert Vernam in 1918. His system works on binary data rather than letters. 
The system can be expressed succinctly as follows: 
ci = pi + ki 
where 
pi = ith binary digit of plaintext 
ki = ith binary digit of key 
ci = ith binary digit of cipher text ‘+’= 
exclusive-or (XOR) operation 
Thus, the ciphertext is generated by performing the bitwise XOR of the plaintext and the key. 
Because of the properties of the XOR, decryption simply involves the same bitwise operation: 
pi = ci +ki 
The essence of this technique is the means of construction of the key. Vernam proposed the 
use of a running loop of tape that eventually repeated the key, so that in fact the system worked 
with a very long but repeating keyword. Although such a scheme, with a long key, presents 
formidable cryptanalytic difficulties, it can be broken with sufficient ciphertext, the use of 
known or probable plaintext sequences, or both. 
One-Time Pad 
An Army Signal Corp officer, Joseph Mauborgne, proposed an improvement to the Vernam 
cipher that yields the ultimate in security. Mauborgne suggested using a random key that is as 
long as the message, so that the key need not be repeated. In addition, the key is to 

 
21 | P a g e 
 
 
 
 
be used to encrypt and decrypt a single message, and then is discarded. Each new message 
requires a new key of the same length as the new message. Such a scheme, known as a one- 
time pad, is unbreakable. It produces random output that bears no statistical relationship to 
the plaintext. Because the ciphertext contains no information whatsoever about the plaintext, 
there is simply no way to break the code. An example should illustrate our point. Suppose that 
we are using a Vigenère scheme with 27 characters in which the twenty-seventh character is 
the space character, but with a one-time key that is as long as the message. Thus, the tableau 
of 
Table 
2.3 
must 
be 
expanded 
to 
x 
27. 
Consider 
the 
ciphertext 
ANKYODKYUREPFJBYOJDSPLREYIUNOFDOIUERFPLUYTS 
We now show two different decryptions using two different keys: 
ciphertext: ANKYODKYUREPFJBYOJDSPLREYIUNOFDOIUERFPLUYTS 
Key: pxlmvmsydofuyrvzwc tnlebnecvgdupahfzzlmnyih 
Plaintext: mr mustard with the candlestick in the hall 
Cipher text: ANKYODKYUREPFJBYOJDSPLREYIUNOFDOIUERFPLUYTS 
Key: mfugpmiydgaxgoufhklllmhsqdqogtewbqfgyovuhwt 
Plaintext: miss scarlet with the knife in the library 
Suppose that a cryptanalyst had managed to find these two keys. Two plausible plaintexts are 
produced. How is the cryptanalyst to decide which is the correct decryption (i.e., which is the 
correct key)? If the actual key were produced in a truly random fashion, then them 
cryptanalyst cannot say that one of these two keys is more likely than the other. Thus, there is 
no way to decide which key is correct and therefore which plaintext is correct. 
In fact, given any plaintext of equal length to the ciphertext, there is a key that produces that 
plaintext. Therefore, if you did an exhaustive search of all possible keys, you would end up with 
many legible plaintexts, with no way of knowing which was the intended plaintext. 
Therefore, the code is unbreakable. The security of the one-time pad is entirely due to the 
randomness of the key. If the stream of characters that constitute the key is truly random, then 
the stream of characters that constitute the ciphertext will be truly random. Thus, there are no 
patterns or regularities that a cryptanalyst can use to attack the ciphertext. In theory, we need 
look no further for a cipher. The one-time pad offers complete security but, in practice, has two 
fundamental difficulties: 
1. There is the practical problem of making large quantities of random keys. Any heavily used 
system might require millions of random characters on a regular basis. Supplying truly 
random characters in this volume is a significant task. 

 
22 | P a g e 
 
 
 
 
2. Even more daunting is the problem of key distribution and protection. For every message to 
be sent, a key of equal length is needed by both sender and receiver. Thus, a mammoth key 
distribution problem exists. 
Because of these difficulties, the one-time pad is of limited utility, and is useful primarily for 
low-bandwidth channels requiring very high security. 
 
Transposition Techniques 
All the techniques examined so far involve the substitution of a ciphertext symbol for a 
plaintext symbol. A very different kind of mapping is achieved by performing some sort of 
permutation on the plaintext letters. This technique is referred to as a transposition cipher. 
The simplest such cipher is the rail fence technique, in which the plaintext is written down as 
a sequence of diagonals and then read off as a sequence of rows. For example, to encipher the 
message "meet me after the toga party" with a rail fence of depth 2, we write the following: 
 
m e m a t r h t g p r y e 
t e f e t e o a a t 
The 
encrypted 
message 
is 
MEMATRHTGPRYETEFETEOAAT 
This sort of thing would be trivial to cryptanalyze. A more complex scheme is to write the 
message in a rectangle, row by row, and read the message off, column by column, but permute 
the order of the columns. The order of the columns then becomes the key to the algorithm. For 
example, 
Key: 4 3 1 2 5 6 7 
Plaintext: a t t a c k p o 
s t p o n e 
d u n t i l t 
w o a m x y z 
Ciphertext: TTNAAPTMTSUOAODWCOIXKNLYPETZ 
A pure transposition cipher is easily recognized because it has the same letter frequencies as 
the original plaintext. For the type of columnar transposition just shown, cryptanalysis is fairly 
straightforward and involves laying out the ciphertext in a matrix and playing around 
with column positions. Digram and trigram frequency tables can be useful. The transposition 
cipher can be made significantly more secure by performing more than one stage of 

 
23 | P a g e 
 
 
 
 
transposition. The result is a more complex permutation that is not easily reconstructed. Thus, 
if the foregoing message is reencrypted using the same algorithm, 
Key: 4 3 1 2 5 6 7 
Input: t t n a a p t m 
t s u o a o 
d w c o i x k n l 
y p e t z 
Output: NSCYAUOPTTWLTMDNAOIEPAXTTOKZ 
To visualize the result of this double transposition, designate the letters in the original 
plaintext message by the numbers designating their position. Thus, with 28 letters in the 
message, the original sequence of letters is 
01 02 03 04 05 06 07 08 09 10 11 12 13 14 
15 16 17 18 19 20 21 22 23 24 25 26 27 28 
After the first transposition we have 
03 10 17 24 04 11 18 25 02 09 16 23 01 08 
15 22 05 12 19 26 06 13 20 27 07 14 21 28 
which has a somewhat regular structure. But after the second transposition, we 
have 17 09 05 27 24 16 12 07 10 02 22 20 03 25 
15 13 04 23 19 14 11 01 26 21 18 08 06 28 
This is a much less structured permutation and is much more difficult to cryptanalyze. 
Rotor Machines 
The example just given suggests that multiple stages of encryption can produce an algorithm 
that is significantly more difficult to cryptanalyze. This is as true of substitution ciphers as it is 
of transposition ciphers. Before the introduction of DES, the most important application of the 
principle of multiple stages of encryption was a class of systems known as rotor machines. 
The basic principle of the rotor machine is illustrated in Figure 2.7. The machine consists of a 
set of independently rotating cylinders through which electrical pulses can flow. Each cylinder 
has 26 input pins and 26 output pins, with internal wiring that connects each input pin to a 
unique output pin. For simplicity, only three of the internal connections in each cylinder are 
shown. 

 
24 | P a g e 
 
 
 
 
 
If we associate each input and output pin with a letter of the alphabet, then a single cylinder 
defines a monoalphabetic substitution. For example, in Figure 2.7, if an operator depresses the 
key for the letter A, an electric signal is applied to the first pin of the first cylinder and flows 
through the internal connection to the twenty-fifth output pin. Consider a machine with a single 
cylinder. After each input key is depressed, the cylinder rotates one position, so that the internal 
connections are shifted accordingly. Thus, a different monoalphabetic substitution cipher is 
defined. After 26 letters of plaintext, the cylinder would be back to the initial position. Thus, we 
have a polyalphabetic substitution algorithm with a period of 26. A single-cylinder system is 
trivial and does not present a formidable cryptanalytic task. The power of the rotor machine is in 
the use of multiple cylinders, in which the output pins of one cylinder are connected to the input 
pins of the next. Figure 2.7 shows a three-cylinder system. The left half of the figure shows a 
position in which the input from the operator to the first pin (plaintext letter a) is routed through 
the three cylinders to appear at the output of the second pin (ciphertext letter B). 
With multiple cylinders, the one closest to the operator input rotates one pin position with each 
keystroke. The right half of Figure 2.7 shows the system's configuration after a single keystroke. 

 
25 | P a g e 
 
 
 
 
For every complete rotation of the inner cylinder, the middle cylinder rotates one pin position. 
Finally, for every complete rotation of the middle cylinder, the outer cylinder rotates one pin 
position. This is the same type of operation seen with an odometer. The result is that there are 26 
x 26 x 26 = 17,576 different substitution alphabets used before the system repeats. The addition 
of fourth and fifth rotors results in periods of 456,976 and 11,881,376 letters, respectively. As 
David Kahn eloquently put it, referring to a five-rotor machine [KAHN96, page 413]: 
A period of that length thwarts any practical possibility of a straightforward solution on the basis 
of letter frequency. This general solution would need about 50 letters per cipher alphabet, 
meaning that all five rotors would have to go through their combined cycle 50 times. The 
ciphertext would have to be as long as all the speeches made on the floor of the Senate and the 
House of Representatives in three successive sessions of Congress. No cryptanalyst is likely to bag 
that kind of trophy in his lifetime; even diplomats, who can be as verbose as politicians, rarely 
scale those heights of loquacity. 
Steganography 
We conclude with a discussion of a technique that is, strictly speaking, not encryption, namely, 
steganography. A plaintext message may be hidden in one of two ways. The methods of 
steganography conceal the existence of the message, whereas the methods of cryptography 
render the message unintelligible to outsiders by various transformations of the text. 
Steganography was an obsolete word that was revived by David Kahn. A simple form of 
steganography, but one that is time-consuming to construct, is one in which an arrangement 
of words or letters within an apparently innocuous text spells out the real message. For 
example, the sequence of first letters of each word of the overall message spells out the hidden 
message. 
 
Various other techniques have been used historically; some examples are the following 
Character marking: Selected letters of printed or typewritten text are overwritten in pencil. 
The marks are ordinarily not visible unless the paper is held at an angle to bright light. 
Invisible ink: A number of substances can be used for writing but leave no visible trace 
until heat or some chemical is applied to the paper. 
Pin punctures: Small pin punctures on selected letters are ordinarily not visible unless the 
paper is held up in front of a light. 
Typewriter correction ribbon: Used between lines typed with a black ribbon, the results of 

 
26 | P a g e 
 
 
 
 
typing with the correction tape are visible only under a strong light. 
Although these techniques may seem archaic, they have contemporary equivalents. [WAYN93] 
proposes hiding a message by using the least significant bits of frames on a CD. For example, 
the Kodak Photo CD format's maximum resolution is 2048 by 3072 pixels, with each pixel 
containing 24 bits of RGB color information. The least significant bit of each 24-bit pixel can be 
changed without greatly affecting the quality of the image. The result is that you can hide a 2.3- 
megabyte message in a single digital snapshot. There are now a number of software packages 
available that take this type of approach to steganography. Steganography has a number of 
drawbacks when compared to encryption. It requires a lot of overhead to hide a relatively few 
bits of information, although using some scheme like that proposed in the preceding paragraph 
may make it more effective. Also, once the system is discovered, it becomes virtually worthless. 
This problem, too, can be overcome if the insertion method depends on some sort of key (e.g., 
see Problem 2.11). Alternatively, a message can be first encrypted and then hidden using 
steganography. The advantage of steganography is that it can be employed by parties who have 
something to lose should the fact of their secret communication (not necessarily the content) 
be discovered. Encryption flags traffic as important or secret or may identify the sender or 
receiver as someone with something to hide. 
 
Block Ciphers and the Data Encryption Standard 
Block Cipher Principles 
Most symmetric block encryption algorithms in current use are based on a structure referred 
to as a Feistel block cipher. For that reason, it is important to examine the design principles of 
the Feistel cipher. We begin with a comparison of stream ciphers and block ciphers. Then we 
discuss the motivation for the Feistel block cipher structure. Finally, we discuss some of its 
implications. 
Stream Ciphers and Block Ciphers 
A stream cipher is one that encrypts a digital data stream one bit or one byte at a time. 
Examples of classical stream ciphers are the autokeyed Vigenère cipher and the Vernam 
cipher. 
A block cipher is one in which a block of plaintext is treated as a whole and used to 
produce a ciphertext block of equal length. Typically, a block size of 64 or 128 bits is used. 
Using some of the modes of operation, a block cipher can be used to achieve the same effect as 

 
27 | P a g e 
 
 
 
 
a stream cipher. Far more effort has gone into analyzing block ciphers. In general, they seem 
applicable to a broader range of applications than stream ciphers. The vast majority of 
network- based symmetric cryptographic applications make use of block ciphers. 
The Feistel Cipher 
Feistel proposed that we can approximate the ideal block cipher by utilizing the concept of a 
product cipher, which is the execution of two or more simple ciphers in sequence in such a way 
that the final result or product is cryptographically stronger than any of the component 
ciphers. The essence of the approach is to develop a block cipher with a key length of k bits and 
a block length of n bits, allowing a total of 2k possible transformations, rather than the 2𝑛! 
transformations available with the ideal block cipher. In particular, Feistel proposed the use of 
a cipher that alternates substitutions and permutations. In fact, this is a practical application a 
proposal by Claude Shannon to develop a product cipher that alternates confusion and diffusion 
functions. We look next at these concepts of diffusion and confusion and then present the 
Feistel cipher. 
Diffusion and Confusion 
The terms diffusion and confusion were introduced by Claude Shannon to capture the two basic 
building blocks for any cryptographic system.Shannon's concern was to thwart 
cryptanalysis based on statistical analysis. The reasoning is as follows. Assume the attacker 
has some knowledge of the statistical characteristics of the plaintext. For example, in a 
human-readable message in some language, the frequency distribution of the various letters 
may be known. Or there may be words or phrases likely to appear in the message (probable 
words). If these statistics are in any way reflected in the ciphertext, the cryptanalyst may be 
able to deduce the encryption key, or part of the key, or at least a set of keys likely to contain 
the exact key. 
Other than recourse to ideal systems, Shannon suggests two methods for frustrating statistical 
cryptanalysis: diffusion and confusion. In diffusion, the statistical structure of the plaintext 
is dissipated into long-range statistics of the ciphertext. This is achieved by having each plaintext 
digit affect the value of many ciphertext digits; generally this is equivalent to having each 
ciphertext digit be affected by many plaintext digits. An example of diffusion is to encrypt a 
message M = m1, m2, m3,... of characters with an averaging operation: adding k successive letters 
to get a ciphertext letter yn. One can show that the statistical structure of the plaintext has been 
dissipated. Thus, the letter frequencies in the ciphertext will be more nearly equal than in the 

 
28 | P a g e 
 
 
 
 
plaintext; the digram frequencies will also be more nearly equal, and so on. In a binary block 
cipher, diffusion can be achieved by repeatedly performing some permutation on the data 
followed by applying a function to that permutation; the effect is that bits from different 
positions in the original plaintext contribute to a single bit of cipher text. 
 
adding k successive letters to get a ciphertext letter yn. One can show that the statistical 
structure of the plaintext has been dissipated. 
Thus, the letter frequencies in the ciphertext will be more nearly equal than in the plaintext; 
the digram frequencies will also be more nearly equal, and so on. In a binary block cipher, 
diffusion can be achieved by repeatedly performing some permutation on the data followed 
by applying a function to that permutation; the effect is that bits from different positions in 
the original plaintext contribute to a single bit of cipher text Every block cipher involves a 
transformation of a block of plaintext into a block of ciphertext, where the transformation 
depends on the key. The mechanism of diffusion seeks to make the statistical relationship 
between the plaintext and ciphertext as complex as possible in order to thwart attempts to 
deduce the key. On the other hand, confusion seeks to make the relationship between the 
statistics of the ciphertext and the value of the encryption key as complex as possible, again 
to thwart attempts to discover the key. Thus, even if the attacker can get some handle on 
the statistics of the ciphertext, the way in which the key was used to produce that ciphertext 
is so complex as to make it difficult to deduce the key. This is achieved by the use of a complex 
substitution algorithm. In contrast, a simple linear substitution function would add little 
confusion. 
Feistel Cipher Structure 
are a plaintext block of length 2w bits and a key K. The plaintext block is divided into two 
halves, L0 and R0. The two halves of the data pass through n rounds of processing and then 
combine to produce the ciphertext block. Each round i has as inputs Li-1 and Ri-1, derived from 
the previous round, as well as a subkey Ki, derived from the overall K. In general, the subkeys 
Ki are different from K and from each other. 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
The exact realization of a Feistel network depends on the choice of the following parameters 
and design features: 
 
29 | P a g e 
 

 
 
 
Block size: Larger block sizes mean greater security (all other things being equal) but reduced 
encryption/decryption speed for a given algorithm. The greater security is achieved by greater 
diffusion Traditionally, a block size of 64 bits has been considered a reasonable tradeoff and 
was nearly universal in block cipher design. However, the new AES uses a 128-bit block size. 
Key size: Larger key size means greater security but may decrease encryption/decryption 
speed. The greater security is achieved by greater resistance to brute-force attacks and greater 
confusion. Key sizes of 64 bits or less are now widely considered to be inadequate, and 128 
bits has become a common size. 
Number of rounds: The essence of the Feistel cipher is that a single round offers inadequate 
security but that multiple rounds offer increasing security. A typical size is 16 rounds. 
Subkey generation algorithm: Greater complexity in this algorithm should lead to greater 
difficulty of cryptanalysis. 
Round function: Again, greater complexity generally means greater resistance to 
cryptanalysis. There are two other considerations in the design of a Feistel cipher: 
Fast software encryption/decryption: In many cases, encryption is embedded in 
applications or utility functions in such a way as to preclude a hardware implementation. 
Accordingly, the speed of execution of the algorithm becomes a concern. 
Ease of analysis: Although we would like to make our algorithm as difficult as possible to 
cryptanalyze, there is great benefit in making the algorithm easy to analyze. That is, if the 
algorithm can be concisely and clearly explained, it is easier to analyze that algorithm for 
cryptanalytic vulnerabilities and therefore develop a higher level of assurance as to its 
strength. DES, for example, does not have an easily analyzed functionality. 
Feistel Decryption Algorithm 
The process of decryption with a Feistel cipher is essentially the same as the encryption 
process. The rule is as follows: Use the cipher text as input to the algorithm, but use the subkeys 
Ki in reverse order. That is, use Kn in the first round, Kn-1 in the second round, and so on until 
K1 is used in the last round. This is a nice feature because it means we need not implement two 
different algorithms, one for encryption and one for decryption. To see that the same algorithm 
with a reversed key order produces the correct result, consider Figure 3.3, which shows the 
encryption process going down the left-hand side and the decryption process going up the 
right- hand side for a 16-round algorithm (the result would be the same for any number of 
rounds). For clarity, we use the notation LEi and REi for data traveling through the encryption 
algorithm and LDi and RDi for data traveling through the decryption algorithm. The diagram 
30 | P a g e 
 

 
 
 
indicates that, at every round, the intermediate value of the decryption process is equal to the 
corresponding value of the encryption process with the two halves of the value swapped. To 
put this another way, let the output of the ith encryption round be LEi||REi (Li concatenated 
with Ri). Then the corresponding input to the (16i)th decryption round is REi||LEi or, 
equivalently, RD16-i||LD16-i. 
Feistel Encryption and Decryption 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
After the last iteration of the encryption process, 
the two halves of the output are swapped, so that the ciphertext is RE16||LE16. The output of 
that round is the ciphertext. Now take that ciphertext and use it as input to the same algorithm. 
The input to the first round is RE16||LE16, which is equal to the 32-bit swap of the output of 
the sixteenth round of the encryption process. 
Now we would like to show that the output of the first round of the decryption process is equal 
 
31 | P a g e 
 

 
32 | P a g e 
 
 
 
 
to a 32-bit swap of the input to the sixteenth round of the encryption process. First, consider 
the encryption process. We see that 
LE16 = RE15 
RE16 = LE15 x F(RE15, K16) 
On the decryption side, LD1 
= RD0 = LE16 = RE15 RD1 = 
LD0 x F(RD0, K16) 
= RE16 x F(RE15, K16) 
= [LE15 x F(RE15, K16)] x F(RE15, K16) 
The XOR has the following properties: 
[A x B] x C = A x [B x C] 
D x D = 0 
E x 0 = E 
Thus, we have LD1 = RE15 and RD1 = LE15. Therefore, the output of the first round of the 
decryption process is LE15||RE15, which is the 32-bit swap of the input to the sixteenth round 
of the encryption. This correspondence holds all the way through the 16 iterations, as is easily 
shown. We can cast this process in general terms. For the ith iteration of the encryption 
algorithm, 
LEi = REi-1 
REi =LEi-1 x F(REi-1, Ki) 
Rearranging terms, 
REi-1 = LEi 
LEi-1 = REi x F(REi-1, Ki2 = REi x F(LEi, Ki) 
The Data Encryption Standard 
The most widely used encryption scheme is based on the Data Encryption Standard (DES) 
adopted in 1977 by the National Bureau of Standards, now the National Institute of Standards 
and Technology (NIST), as Federal Information Processing Standard 46 (FIPS PUB 46). The 
algorithm itself is referred to as the Data Encryption Algorithm (DEA). 
For DES, data are encrypted in 64-bit blocks using a 56-bit key. The algorithm transforms 64- 
bit input in a series of steps into a 64-bit output. The same steps, with the same key, are used 
to reverse the encryption. 
ES Encryption 

 
33 | P a g e 
 
 
 
 
The overall scheme for DES encryption is illustrated in Figure 3.4. As with any encryption 
scheme, there are two inputs to the encryption function: the plaintext to be encrypted and the 
key. In this case, the plaintext must be 64 bits in length and the key is 56 bits in length. 
Looking at the left-hand side of the figure, we can see that the processing of the plaintext 
proceeds in three phases. First, the 64-bit plaintext passes through an initial permutation (IP) 
that rearranges the bits to produce the permuted input. This is followed by a phase consisting 
of 16 rounds of the same function, which involves both permutation and substitution 
functions. The output of the last (sixteenth) round consists of 64 bits that are a function of the 
input plaintext and the key. The left and right halves of the output are swapped to produce the 
preoutput. Finally, the preoutput is passed through a permutation (IP-1) that is the inverse of 
the initial permutation function, to produce the 64-bit ciphertext. With the exception of the 
initial and final permutations, DES has the exact structure of a Feistel cipher, as shown in 
 

 
34 | P a g e 
 
 
 
Details of Single Round 
hand side of the diagram. The left and right halves of each 64-bit intermediate value are 
treated as separate 32-bit quantities, labeled L (left) and R (right). As in any classic Feistel 
cipher, the overall processing at each round can be summarized in the following formulas: 
Li = Ri-1 
Ri = Li-1 x F(Ri-1, Ki) 
[Page 77] 
 
The round key Ki is 48 bits. The R input is 32 bits. This R input is first expanded to 48 bits by 
using a table that defines a permutation plus an expansion that involves duplication of 16 of 
the R bits (Table 3.2c). The resulting 48 bits are XORed with Ki. This 48-bit result passes 
through a substitution function that produces a 32-bit output, which is permuted as defined 
by Table 3.2d. 

 
35 | P a g e 
 
 
 
 
 
The role of the S-boxes in the function F is illustrated in Figure 3.6. The substitution consists of 
a set of eight S-boxes, each of which accepts 6 bits as input and produces 4 bits as output. These 
transformations are defined in Table 3.3, which is interpreted as follows: The first and last bits 
of the input to box Si form a 2-bit binary number to select one of four substitutions defined by 
the four rows in the table for Si. The middle four bits select one of the sixteen columns. The 
decimal value in the cell selected by the row and column is then converted to its 4-bit 
representation to produce the output. For example, in S1 for input 011001, the row is 01 (row 
1) and the column is 1100 (column 12). The value in row 1, column 12 is 9, so the output is 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
1001. 

 
36 | P a g e 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
37 | P a g e 
 
 
 
 
 
Key Generation 
we see that a 64-bit key is used as input to the algorithm. The bits of the key are numbered 
from 1 through 64; every eighth bit is ignored.The key is first subjected to a permutation 
governed by a table labeled Permuted Choice One. The resulting 56-bit key is then treated as 
two 28-bit quantities, labeledC 0 and D0. At each round, Ci-1 and Di-1 are separately subjected 
to a circular left shift, or rotation, of 1 or 2 bits. These shifted values serve as input to the next 
round. They also serve as input to Permuted Choice Two, which produces a 48-bit output that 
serves as input to the function F(Ri-1, Ki). 
The Strength of DES 
Since its adoption as a federal standard, there have been lingering concerns about the level of 
security provided by DES. These concerns, by and large, fall into two areas: key size and the 
nature of the algorithm. 
The Use of 56-Bit Keys 
With a key length of 56 bits, there are 2 56 possible keys, which is approximately 7.2 x 10 
16Thus, on the face of it, a brute-force attack appears impractical. Assuming that, on average, 
half the key space has to be searched, a single machine performing one DES encryption per 
microsecond would take more than a thousand years (see Table 2.2) to break the cipher. 
however, the assumption of one encryption per microsecond is overly conservative. As far 
back as 1977, Diffie and Hellman postulated that the technology existed to build a parallel 
machine with 1 million encryption devices, each of which could perform one encryption per 
microsecond [DIFF77]. This would bring the average search time down to about 10 hours. The 
authors estimated that the cost would be about $20 million in 1977 dollars. It is important to 
note that there is more to a key-search attack than simply running through all possible keys. 
Unless known plaintext is provided, the analyst must be able to recognize plaintext as 
plaintext. If the message is just plain text in English, then the result pops out easily, although 
the task of recognizing English would have to be automated. If the text message has been 
compressed before 
encryption, then recognition is more difficult. And if the message is some more general type of 
data, such as a numerical file, and this has been compressed, the problem becomes even more 
difficult to automate. Thus, to supplement the brute-force approach, some degree of 
knowledge about the expected plaintext is needed, and some means of automatically 
distinguishing plaintext from garble is also needed. The EFF approach addresses this issue as 

 
38 | P a g e 
 
 
 
 
well and introduces some automated techniques that would be effective in many contexts. 
Fortunately, there are a number of alternatives to DES, the most important of which are AES 
and triple DES, discussed in Chapters 5 and 6, respectively. 
The Nature of the DES Algorithm 
Another concern is the possibility that cryptanalysis is possible by exploiting the 
characteristics of the DES algorithm. The focus of concern has been on the eight substitution 
tables, or S-boxes, that are used in each iteration. Because the design criteria for these boxes, 
and indeed for the entire algorithm, were not made public, there is a suspicion that the boxes 
were constructed in such a way that cryptanalysis is possible for an opponent who knows the 
weaknesses in the S- boxes. This assertion is tantalizing, and over the years a number of 
regularities and unexpected behaviors of the S-boxes have been discovered. Despite this, no 
one has so far succeeded in discovering the supposed fatal weaknesses in the S-boxes. 
Timing Attacks 
We discuss timing attacks in more detail in Part Two, as they relate to public-key algorithms. 
However, the issue may also be relevant for symmetric ciphers. In essence, a timing attack is 
one in which information about the key or the plaintext is obtained by observing how long it 
takes a given implementation to perform decryptions on various ciphertexts. A timing attack 
exploits the fact that an encryption or decryption algorithm often takes slightly different 
amounts of time on different inputs on an approach that yields the Hamming weight (number 
of bits equal to one) of the secret key. This is a long way from knowing the actual key, but it is 
an intriguing first step. The authors conclude that DES appears to be fairly resistant to a 
successful timing attack but suggest some avenues to explore. Although this is an interesting 
line of attack, it so far appears unlikely that this technique will ever be successful against DES 
or more powerful symmetric ciphers such as triple DES and AES. 
DES Design Criteria 
The criteria used in the design of DES,focused on the design of the S-boxes and on the P 
function that takes 
the output of the S boxes (Figure 3.6). The criteria for the S-boxes are as follows: 
1. No output bit of any S-box should be too close a linear function of the input bits. Specifically, 
if we select any output bit and any subset of the six input bits, the fraction of inputs for 
which this output bit equals the XOR of these input bits should not be close to 0 or 1, but rather should 
be near 1/2. 

 
39 | P a g e 
 
 
 
 
 
2. Each row of an S-box (determined by a fixed value of the leftmost and rightmost input bits) 
should include all 16 possible output bit combinations. 
3. If two inputs to an S-box differ in exactly one bit, the outputs must differ in at least two bits. 
4. If two inputs to an S-box differ in the two middle bits exactly, the outputs must differ in at 
least two bits. 
5. If two inputs to an S-box differ in their first two bits and are identical in their last two bits, 
the two outputs must not be the same. 
6. For any nonzero 6-bit difference between inputs, no more than 8 of the 32 pairs of inputs 
exhibiting that difference may result in the same output difference. 
7. This is a criterion similar to the previous one, but for the case of three S-boxes. Coppersmith 
pointed out that the first criterion in the preceding list was needed because the S-boxes are 
the only nonlinear part of DES. 
If the S-boxes were linear (i.e., each output bit is a linear combination of the input bits), the 
entire algorithm would be linear and easily broken. We have seen this phenomenon with the 
Hill cipher, which is linear. The remaining criteria were primarily aimed at thwarting 
differential cryptanalysis and at providing good confusion properties. The criteria for the 
permutation P are as follows: 
1. The four output bits from each S-box at round i are distributed so that two of them affect 
(provide input for) "middle bits" of round (i + 1) and the other two affect end bits. The two 
middle bits of input to an S-box are not shared with adjacent S-boxes. The end bits are the two 
left-hand bits and the two right-hand bits, which are shared with adjacent S-boxes. 
2. The four output bits from each S-box affect six different S-boxes on the next round, and no 
two affect the same S-box. 
3. For two S-boxes j, k, if an output bit from Sj affects a middle bit of Sk on the next round, then 
an output bit from Sk cannot affect a middle bit of Sj. This implies that for j = k, an output bit 
from Sj must not affect a middle bit of Sj. 
These criteria are intended to increase the diffusion of the algorithm. 
Number of Rounds 
The cryptographic strength of a Feistel cipher derives from three aspects of the design: the 
number of rounds, the function F, and the key schedule algorithm. Let us look first at the choice 
of the number of rounds. The greater the number of rounds, the more difficult it is to perform 
cryptanalysis, even for a relatively weak F. In general, the criterion should be that the number 

 
40 | P a g e 
 
 
 
 
of rounds is chosen so that known cryptanalytic efforts require greater effort than a simple 
brute- force key search attack. This criterion was certainly used in the design of DES. Schneier 
observes that for 16-round DES, a differential cryptanalysis attack is slightly less efficient than 
brute force: the differential cryptanalysis attack requires perations,whereasbrute force 
requires 2^ 
55. If DES had 15 or fewer rounds, differential cryptanalysis would require less effort than 
brute- force key search. 
Design of Function F 
The heart of a Feistel block cipher is the function F. As we have seen, in DES, this function 
relies on the use of S-boxes. This is also the case for most other symmetric block ciphers, as we 
shall see in Chapter 4. However, we can make some general comments about the criteria for 
designing F. After that, we look specifically at S-box design. 
Design Criteria for F 
The function F provides the element of confusion in a Feistel cipher. Thus, it must be difficult 
to "unscramble" the substitution performed by F. One obvious criterion is that F be nonlinear, 
as we discussed previously. The more nonlinear F, the more difficult any type of cryptanalysis 
will be. There are several measures of nonlinearity, which are beyond the scope of this book. 
In rough terms, the more difficult it is to approximate F by a set of linear equations, the more 
nonlinear F is. 
S-Box Design 
One of the most intense areas of research in the field of symmetric block ciphers is that of S- 
box design. The papers are almost too numerous to count. Here we mention some general 
principles. In essence, we would like any change to the input vector to an S-box to result in 
random-looking changes to the output. The relationship should be nonlinear and difficult to 
approximate with linear functions. Obvious characteristic of the S-box is its size. An n x m S- 
box has n input bits and m output bits. DES has 6 x 4 S-boxes. Blowfish, has 8 x 32 S-boxes. 
Larger S-boxes, by and large, are more resistant to differential and linear cryptanalysis. On the 
other hand, the larger the dimension n , the (exponentially) larger the lookup table. Thus, for 
practical reasons, a limit on f Equal to about 8 to 10 is usually imposed. Another practical 
consideration is that the larger the S- box, the more difficult it is to design it properly. S-boxes 
are typically organized in a different manner than used in DES. An n x m S-box typically 
consists of 2n rows of m bits each. The n bits of input select one of the rows of the S-box, and 
the m bits in that row are the output. For example, in an 8 x 32 S-box, if the input is 00001001, 

 
41 | P a g e 
 
 
 
 
the output consists of the 32 bits in row 9 (the first row is labeled row 0). 
 
 
 
Differential and Linear Cryptanalysis 
For most of its life, the prime concern with DES has been its vulnerability to brute-force attack 
because of its relatively short (56 bits) key length. However, there has also been interest in 
finding cryptanalytic attacks on DES. With the increasing popularity of block ciphers with 
longer key lengths, including triple DES, brute-force attacks have become increasingly 
impractical. Thus, there has been increased emphasis on cryptanalytic attacks on DES and 
other symmetric block ciphers. In this section, we provide a brief overview of the two most 
powerful and promising approaches: differential cryptanalysis and linear cryptanalysis. 
 
Differential Cryptanalysis 
One of the most significant advances in cryptanalysis in recent years is differential 
cryptanalysis. In this section, we discuss the technique and its applicability to DES. 
 
History 
Although differential cryptanalysis is a powerful tool, it does not do very well against DES. The 
reason, according to a member of the IBM team that designed DES [COPP94], is that differential 
cryptanalysis was known to the team as early as 1974. The need to strengthen DES against 
attacks using differential cryptanalysis played a large part in the design of the S-boxes and the 
permutation P. As evidence of the impact of these changes, consider these comparable results 
reported in [BIHA93]. Differential cryptanalysis of an eight-round LUCIFER algorithm requires 
only 256 chosen plaintexts, whereas an attack on an eight-round version of DES requires 2 14 
chosen plaintexts. 
 
Differential Cryptanalysis Attack 
The differential cryptanalysis attack is complex; [BIHA93] provides a complete description. 
The rationale behind differential cryptanalysis is to observe the behavior of pairs of text blocks 
evolving along each round of the cipher, instead of observing the evolution of a single text 
block. Here, we provide a brief overview so that you can get the flavor of the attack. 
We begin with a change in notation for DES. Consider the original plaintext block m to consist 
of two halves m0,m1. Each round of DES maps the right-hand input into the left-hand output 

 
42 | P a g e 
 
 
 
 
and sets the right-hand output to be a function of the left-hand input and the subkey for this 
round. So, at each round, only one new 32-bit block is created. If we label each new block m1 
17), then the intermediate message halves are related as follows: 
 
mi+1 = mi-1 Xor f(mi, Ki), i = 1, 2, ..., 16 
In differential cryptanalysis, we start with two messages, m and m', with a known XOR 
difference Dm = m Xor m', and consider the difference between the intermediate message 
halves: mi = mi Xor mi' Then we have: 
 
 
 
Now, suppose that many pairs of inputs to f with the same difference yield the same output 
difference if the same subkey is used. To put this more precisely, let us say that X may cause Y 
with probability p, if for a fraction p of the pairs in which the input XOR is X, the output XOR 
equals Y. We want to suppose that there are a number of values ofX that have high probability 
of causing a particular output difference. Therefore, if we know Dmi-1 and Dmi with high 
probability, then we know Dmi+1 with high probability. Furthermore, if a number of such 
differences are determined, it is feasible to determine the subkey used in the function f. 
The overall strategy of differential cryptanalysis is based on these considerations for a single 
round. The procedure is to begin with two plaintext messages m and m' with a given difference 
and trace through a probable pattern of differences after each round to yield a probable 
difference for the ciphertext. Actually, there are two probable patterns of differences for the 
two 32-bit halves: (Dm17||m16). Next, we submit m and m' for encryption to determine the 
actual difference under the unknown key and compare the result to the probable difference. If 
there is a match, 
E(K, m)Xor E(K, m') = (Dm17||m16) 
then we suspect that all the probable patterns at all the intermediate rounds are correct. With 
that assumption, we can make some deductions about the key bits. This procedure must be 
repeated many times to determine all the key bits. 

 
43 | P a g e 
 
 
 
 
Linear Cryptanalysis 
A more recent development is linear cryptanalysis, described in [MATS93]. This attack is based 
on finding linear approximations to describe the transformations performed in DES. This 
method can find a DES key given 2 43 known plaintexts, as compared to 2 47 chosen plaintexts 
for differential cryptanalysis. Although this is a minor improvement, because it may be easier 
to acquire known plaintext rather than chosen plaintext, it still leaves linear cryptanalysis 
infeasible as an attack on DES. So far, little work has been done by other groups to validate the 
linear cryptanalytic approach. 
 
We now give a brief summary of the principle on which linear cryptanalysis is based. For a 
cipher with n-bit plaintext and ciphertext blocks 
and an m-bit key, let the plaintext block be labeled P[1], ... P[n], the cipher text block C[1], ... 
C[n], and the key K[1], ... K[m]. Then define 
A[i, j, ..., k] = A[i] xor A[j]xor ... A[k] 
The objective of linear cryptanalysis is to find an effective linear equation of the form: 
P[a1, a2, ..., aa] XOR C[b1, b2, ..., bb] = K[g1, g2, ..., gc] 
(where x = 0 or 1; 1 ≤a, b≤ n, 1 ≤c ≤m, and where the a, b and g terms represent fixed, unique bit 
locations) that holds with probability p 0.5. The further p is from 0.5, the more effective the 
equation. Once a proposed relation is determined, the procedure is to compute the results of the 
left-hand side of the preceding equation for a large number of plaintext-ciphertext pairs. If the 
result is 0 more than half the time, assume K[g1, g2, ..., gc] = 0. If it is 1 most of the time, assume 
Kg[1, g2, ..., gc] = 1. This gives us a linear equation on the key bits. Try to get more such relations 
so that we can solve for the key bits. Because we are dealing with linear equations, the problem 
can be approached one round of the cipher at a time, with the results combined. 
 
Block Cipher Design Principles 
Although much progress has been made in designing block ciphers that are cryptographically 
strong, the basic principles have not changed all that much since the work of Feistel and the 
DES design team in the early 1970s. It is useful to begin this discussion by looking at the 
published design criteria used in the DES effort. Then we look at three critical aspects of block 
cipher design: the number of rounds, design of the function F, and key scheduling. 
 
DES Design Criteria 

 
44 | P a g e 
 
 
 
 
The criteria used in the design of DES, as reported in [COPP94], focused on the design of the S- 
boxes and on the P function that takes the output of the S boxes (Figure 3.6). The criteria for 
the S-boxes are as follows: 
1. No output bit of any S-box should be too close a linear function of the input bits. Specifically, 
if we select any output bit and any subset of the six input bits, the fraction of inputs for which 
this output bit equals the XOR of these input bits should not be close to 0 or 1, but rather should 
be near 1/2. 
2. Each row of an S-box (determined by a fixed value of the leftmost and rightmost input bits) 
should include all 16 possible output bit combinations. 
3. If two inputs to an S-box differ in exactly one bit, the outputs must differ in at least two bits. 
 
4. If two inputs to an S-box differ in the two middle bits exactly, the outputs must differ in at 
least two bits. 
5. If two inputs to an S-box differ in their first two bits and are identical in their last two bits, 
the two outputs must not be the same. 
6. For any nonzero 6-bit difference between inputs, no more than 8 of the 32 pairs of inputs 
exhibiting that difference may result in the same output difference. 
 
7. This is a criterion similar to the previous one, but for the case of three S-boxes. 
Coppersmith pointed out that the first criterion in the preceding list was needed because the 
S- boxes are the only nonlinear part of DES. 
If the S-boxes were linear (i.e., each output bit is a linear combination of the input bits), the 
entire algorithm would be linear and easily broken. We have seen this phenomenon with the 
Hill cipher, which is linear. The remaining criteria were primarily aimed at thwarting 
differential cryptanalysis and at providing good confusion properties. 
The criteria for the permutation P are as follows: 
1. The four output bits from each S-box at round i are distributed so that two of them affect 
(provide input for) "middle bits" of round (i + 1) and the other two affect end bits. The two 
middle bits of input to an S-box are not shared with adjacent S-boxes. 
The end bits are the two left-hand bits and the two right-hand bits, which are shared with 
adjacent S-boxes. 
2. The four output bits from each S-box affect six different S-boxes on the next round, and no 

 
45 | P a g e 
 
 
 
 
two affect the same S-box. 
3. For two S-boxes j, k, if an output bit from Sj affects a middle bit of Sk on the next round, then 
an output bit from Sk cannot affect a middle bit of Sj. This implies that for j = k, an output bit 
from Sj must not affect a middle bit of Sj. 
These criteria are intended to increase the diffusion of the algorithm.
