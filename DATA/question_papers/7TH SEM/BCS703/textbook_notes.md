# BCS703 — Textbook Notes (Module-wise)
**Subject:** Cloud Computing
**Generated:** 2026-10-02

---

## Module 1 Textbook

1.8 / A MODEL FOR NETWORK SECURITY 41
 1.8 A MODEL FOR NETWORK SECURITY
A model for much of what we will be discussing is captured, in very general terms, in 
Figure 1.5. A message is to be transferred from one party to another across some sort 
of Internet service. The two parties, who are the principals in this transaction, must 
cooperate for the exchange to take place. A logical information channel is  established 
by defining a route through the Internet from source to destination and by the coop-
erative use of communication protocols (e.g., TCP/IP) by the two principals.
Security aspects come into play when it is necessary or desirable to protect the 
information transmission from an opponent who may present a threat to confidentiality, 
authenticity, and so on. All the techniques for providing security have two components:
 
■A security-related transformation on the information to be sent. Examples 
include the encryption of the message, which scrambles the message so that it 
is unreadable by the opponent, and the addition of a code based on the con-
tents of the message, which can be used to verify the identity of the sender.
 
■Some secret information shared by the two principals and, it is hoped, 
 unknown to the opponent. An example is an encryption key used in conjunc-
tion with the transformation to scramble the message before transmission 
and unscramble it on reception.6
A trusted third party may be needed to achieve secure transmission. For 
example, a third party may be responsible for distributing the secret information 
6Part Two discusses a form of encryption, known as a symmetric encryption, in which only one of the two 
principals needs to have the secret information.
Figure 1.5 Model for Network Security
Information
channel
Security-related
transformation
Sender
Secret
information
Message
Message
Secure
message
Secure
message
Recipient
Opponent
Trusted third party
(e.g., arbiter, distributer
of secret information)
Security-related
transformation
Secret
information
MODULE 1

42  CHAPTER 1 / COMPUTER AND NETWORK SECURITY CONCEPTS 
to the two principals while keeping it from any opponent. Or a third party may be 
needed to arbitrate disputes between the two principals concerning the authenticity 
of a message transmission.
This general model shows that there are four basic tasks in designing a par-
ticular security service:
1. Design an algorithm for performing the security-related transformation. The 
algorithm should be such that an opponent cannot defeat its purpose.
2. Generate the secret information to be used with the algorithm.
3. Develop methods for the distribution and sharing of the secret information.
4. Specify a protocol to be used by the two principals that makes use of the 
 security algorithm and the secret information to achieve a particular security 
service.
Parts One through Five of this book concentrate on the types of security 
mechanisms and services that fit into the model shown in Figure 1.5. However, 
there are other security-related situations of interest that do not neatly fit this 
model but are considered in this book. A general model of these other situations 
is illustrated in Figure 1.6, which reflects a concern for protecting an information 
system from unwanted access. Most readers are familiar with the concerns caused 
by the existence of hackers, who attempt to penetrate systems that can be accessed 
over a network. The hacker can be someone who, with no malign intent, simply gets 
satisfaction from breaking and entering a computer system. The intruder can be a 
disgruntled employee who wishes to do damage or a criminal who seeks to exploit 
computer assets for financial gain (e.g., obtaining credit card numbers or perform-
ing illegal money transfers).
Another type of unwanted access is the placement in a computer system of 
logic that exploits vulnerabilities in the system and that can affect application pro-
grams as well as utility programs, such as editors and compilers. Programs can pres-
ent two kinds of threats:
 
■Information access threats: Intercept or modify data on behalf of users who 
should not have access to that data.
 
■Service threats: Exploit service flaws in computers to inhibit use by legitimate 
users.
Figure 1.6 Network Access Security Model
Computing resources
 
(processor, memory, I/O)
Data
Processes
Software
Internal security controls
Information system
Gatekeeper
function
Opponent
—human (e.g., hacker)
—software
         (e.g., virus, worm)
Access channel

1.9 / STANDARDS 43
Viruses and worms are two examples of software attacks. Such attacks can be 
introduced into a system by means of a disk that contains the unwanted logic con-
cealed in otherwise useful software. They can also be inserted into a system across a 
network; this latter mechanism is of more concern in network security.
The security mechanisms needed to cope with unwanted access fall into two 
broad categories (see Figure 1.6). The first category might be termed a gatekeeper 
function. It includes password-based login procedures that are designed to deny 
access to all but authorized users and screening logic that is designed to detect and 
reject worms, viruses, and other similar attacks. Once either an unwanted user 
or unwanted software gains access, the second line of defense consists of a vari-
ety of internal controls that monitor activity and analyze stored information in an 
attempt to detect the presence of unwanted intruders. These issues are explored 
in Part Six.
 1.9 STANDARDS
Many of the security techniques and applications described in this book have been 
specified as standards. Additionally, standards have been developed to cover man-
agement practices and the overall architecture of security mechanisms and services. 
Throughout this book, we describe the most important standards in use or that are 
being developed for various aspects of cryptography and network security. Various 
organizations have been involved in the development or promotion of these stan-
dards. The most important (in the current context) of these organizations are as 
follows:
 
■National Institute of Standards and Technology: NIST is a U.S. federal agency 
that deals with measurement science, standards, and technology related to 
U.S. government use and to the promotion of U.S. private-sector innovation. 
Despite its national scope, NIST Federal Information Processing Standards 
(FIPS) and Special Publications (SP) have a worldwide impact.
 
■Internet Society: ISOC is a professional membership society with world-
wide organizational and individual membership. It provides leadership in 
addressing issues that confront the future of the Internet and is the organiza-
tion home for the groups responsible for Internet infrastructure standards, 
including the Internet Engineering Task Force (IETF) and the Internet 
Architecture Board (IAB). These organizations develop Internet stan-
dards and related specifications, all of which are published as Requests for 
Comments (RFCs).
 
■ITU-T: The International Telecommunication Union (ITU) is an interna-
tional organization within the United Nations System in which governments 
and the private sector coordinate global telecom networks and services. The 
ITU Telecommunication Standardization Sector (ITU-T) is one of the three 
sectors of the ITU. ITU-T’s mission is the development of technical standards 
covering all fields of telecommunications. ITU-T standards are referred to as 
Recommendations.

86  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
Symmetric encryption, also referred to as conventional encryption or single-key 
encryption, was the only type of encryption in use prior to the development of public-
key encryption in the 1970s. It remains by far the most widely used of the two types 
of encryption. Part One examines a number of symmetric ciphers. In this chapter, we 
begin with a look at a general model for the symmetric encryption process; this will 
enable us to understand the context within which the algorithms are used. Next, we 
examine a variety of algorithms in use before the computer era. Finally, we look briefly 
at a different approach known as steganography. Chapters 4 and 6 introduce the two 
most widely used symmetric cipher: DES and AES.
Before beginning, we define some terms. An original message is known as the 
plaintext, while the coded message is called the ciphertext. The process of convert-
ing from plaintext to ciphertext is known as enciphering or encryption; restoring the 
plaintext from the ciphertext is deciphering or decryption. The many schemes used 
for encryption constitute the area of study known as cryptography. Such a scheme 
is known as a cryptographic system or a cipher. Techniques used for deciphering a 
message without any knowledge of the enciphering details fall into the area of crypt-
analysis. Cryptanalysis is what the layperson calls “breaking the code.” The areas of 
cryptography and cryptanalysis together are called cryptology.
 3.1 SYMMETRIC CIPHER MODEL
A symmetric encryption scheme has five ingredients (Figure 3.1):
 
■Plaintext:  This is the original intelligible message or data that is fed into the 
algorithm as input.
 
■Encryption algorithm:  The encryption algorithm performs various substitu-
tions and transformations on the plaintext.
 
■Secret key:  The secret key is also input to the encryption algorithm. The key is 
a value independent of the plaintext and of the algorithm. The algorithm will 
produce a different output depending on the specific key being used at the 
time. The exact substitutions and transformations performed by the  algorithm 
depend on the key.
LEARNING OBJECTIVES
After studying this chapter, you should be able to:
 
◆
Present an overview of the main concepts of symmetric cryptography.
 
◆
Explain the difference between cryptanalysis and brute-force attack.
 
◆
Understand the operation of a monoalphabetic substitution cipher.
 
◆
Understand the operation of a polyalphabetic cipher.
 
◆
Present an overview of the Hill cipher.
 
◆
Describe the operation of a rotor machine.

3.1 / SYMMETRIC CIPHER MODEL 87
 
■Ciphertext:  This is the scrambled message produced as output. It depends on 
the plaintext and the secret key. For a given message, two different keys will 
produce two different ciphertexts. The ciphertext is an apparently random 
stream of data and, as it stands, is unintelligible.
 
■Decryption algorithm:  This is essentially the encryption algorithm run in 
reverse. It takes the ciphertext and the secret key and produces the original 
plaintext.
There are two requirements for secure use of conventional encryption:
1. We need a strong encryption algorithm. At a minimum, we would like the algo-
rithm to be such that an opponent who knows the algorithm and has access to 
one or more ciphertexts would be unable to decipher the ciphertext or figure 
out the key. This requirement is usually stated in a stronger form: The oppo-
nent should be unable to decrypt ciphertext or discover the key even if he or 
she is in possession of a number of ciphertexts together with the plaintext that 
produced each ciphertext.
2. Sender and receiver must have obtained copies of the secret key in a secure 
fashion and must keep the key secure. If someone can discover the key and 
knows the algorithm, all communication using this key is readable.
We assume that it is impractical to decrypt a message on the basis of the 
ciphertext plus knowledge of the encryption/decryption algorithm. In other words, 
we do not need to keep the algorithm secret; we need to keep only the key secret. 
This feature of symmetric encryption is what makes it feasible for widespread use. 
The fact that the algorithm need not be kept secret means that manufacturers can 
and have developed low-cost chip implementations of data encryption algorithms. 
These chips are widely available and incorporated into a number of products. With 
the use of symmetric encryption, the principal security problem is maintaining the 
secrecy of the key.
Let us take a closer look at the essential elements of a symmetric encryp-
tion scheme, using Figure 3.2. A source produces a message in plaintext, 
X = [X1, X2, c , XM]. The M elements of X are letters in some finite alphabet. 
Traditionally, the alphabet usually consisted of the 26 capital letters. Nowadays, 
Figure 3.1 Simplified Model of Symmetric Encryption
Plaintext
input
Y = E(K, X )
X = D(K, Y )
X
K
K
Transmitted
ciphertext
Plaintext
output
Secret key shared by
sender and recipient
Secret key shared by
sender and recipient
Encryption algorithm
(e.g., AES)
Decryption algorithm
(reverse of encryption
algorithm)

88  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
the binary alphabet {0, 1} is typically used. For encryption, a key of the form 
K = [K1, K2, c , KJ] is generated. If the key is generated at the message source, 
then it must also be provided to the destination by means of some secure channel. 
Alternatively, a third party could generate the key and securely deliver it to both 
source and destination.
With the message X and the encryption key K as input, the encryption algo-
rithm forms the ciphertext Y = [Y1, Y2, c , YN]. We can write this as
 
Y = E(K, X) 
This notation indicates that Y is produced by using encryption algorithm E as a 
function of the plaintext X, with the specific function determined by the value of 
the key K.
The intended receiver, in possession of the key, is able to invert the 
transformation:
 
X = D(K, Y) 
An opponent, observing Y but not having access to K or X, may attempt to 
recover X or K or both X and K. It is assumed that the opponent knows the encryp-
tion (E) and decryption (D) algorithms. If the opponent is interested in only this 
particular message, then the focus of the effort is to recover X by generating a plain-
text estimate Xn. Often, however, the opponent is interested in being able to read 
future messages as well, in which case an attempt is made to recover K by generat-
ing an estimate Kn.
Figure 3.2 Model of Symmetric Cryptosystem
Message
source
Cryptanalyst
Key
source
Destination
X
X
X
K
Y = E(K, X)
Secure channel
K
Encryption
algorithm
Decryption
algorithm

3.1 / SYMMETRIC CIPHER MODEL 89
Cryptography
Cryptographic systems are characterized along three independent dimensions:
1. The type of operations used for transforming plaintext to ciphertext. All 
encryption algorithms are based on two general principles: substitution, 
in which each element in the plaintext (bit, letter, group of bits or letters) 
is mapped into another element, and transposition, in which elements 
in the plaintext are rearranged. The fundamental requirement is that no 
information be lost (i.e., that all operations are reversible). Most systems, 
referred to as product systems, involve multiple stages of substitutions and 
transpositions.
2. The number of keys used. If both sender and receiver use the same key, the 
system is referred to as symmetric, single-key, secret-key, or conventional 
 encryption. If the sender and receiver use different keys, the system is referred 
to as asymmetric, two-key, or public-key encryption.
3. The way in which the plaintext is processed. A block cipher processes the input 
one block of elements at a time, producing an output block for each input 
block. A stream cipher processes the input elements continuously, producing 
output one element at a time, as it goes along.
Cryptanalysis and Brute-Force Attack
Typically, the objective of attacking an encryption system is to recover the key in 
use rather than simply to recover the plaintext of a single ciphertext. There are two 
general approaches to attacking a conventional encryption scheme:
 
■Cryptanalysis:  Cryptanalytic attacks rely on the nature of the algorithm plus 
perhaps some knowledge of the general characteristics of the plaintext or even 
some sample plaintext–ciphertext pairs. This type of attack exploits the charac-
teristics of the algorithm to attempt to deduce a specific plaintext or to deduce 
the key being used.
 
■Brute-force attack:  The attacker tries every possible key on a piece of cipher-
text until an intelligible translation into plaintext is obtained. On average, half 
of all possible keys must be tried to achieve success.
If either type of attack succeeds in deducing the key, the effect is catastrophic: 
All future and past messages encrypted with that key are compromised.
We first consider cryptanalysis and then discuss brute-force attacks.
Table 3.1 summarizes the various types of cryptanalytic attacks based on the 
amount of information known to the cryptanalyst. The most difficult problem is 
presented when all that is available is the ciphertext only. In some cases, not even 
the encryption algorithm is known, but in general, we can assume that the opponent 
does know the algorithm used for encryption. One possible attack under these cir-
cumstances is the brute-force approach of trying all possible keys. If the key space 
is very large, this becomes impractical. Thus, the opponent must rely on an analysis 
of the ciphertext itself, generally applying various statistical tests to it. To use this 

90  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
approach, the opponent must have some general idea of the type of plaintext that 
is concealed, such as English or French text, an EXE file, a Java source listing, an 
accounting file, and so on.
The ciphertext-only attack is the easiest to defend against because the oppo-
nent has the least amount of information to work with. In many cases, however, 
the analyst has more information. The analyst may be able to capture one or more 
plaintext messages as well as their encryptions. Or the analyst may know that certain 
plaintext patterns will appear in a message. For example, a file that is encoded in the 
Postscript format always begins with the same pattern, or there may be a standard-
ized header or banner to an electronic funds transfer message, and so on. All these 
are examples of known plaintext. With this knowledge, the analyst may be able to 
deduce the key on the basis of the way in which the known plaintext is transformed.
Closely related to the known-plaintext attack is what might be referred to as a 
probable-word attack. If the opponent is working with the encryption of some gen-
eral prose message, he or she may have little knowledge of what is in the message. 
However, if the opponent is after some very specific information, then parts of the 
message may be known. For example, if an entire accounting file is being transmit-
ted, the opponent may know the placement of certain key words in the header of the 
file. As another example, the source code for a program developed by Corporation 
X might include a copyright statement in some standardized position.
If the analyst is able somehow to get the source system to insert into the sys-
tem a message chosen by the analyst, then a chosen-plaintext attack is possible. 
An example of this strategy is differential cryptanalysis, explored in Appendix S. 
Type of Attack
Known to Cryptanalyst
Ciphertext Only
■ Encryption algorithm
■ Ciphertext
Known Plaintext
■ Encryption algorithm
■ Ciphertext
■ One or more plaintext–ciphertext pairs formed with the secret key
Chosen Plaintext
■ Encryption algorithm
■ Ciphertext
■  Plaintext message chosen by cryptanalyst, together with its corresponding 
 ciphertext generated with the secret key
Chosen Ciphertext
■ Encryption algorithm
■ Ciphertext
■  Ciphertext chosen by cryptanalyst, together with its corresponding decrypted 
plaintext generated with the secret key
Chosen Text
■ Encryption algorithm
■ Ciphertext
■  Plaintext message chosen by cryptanalyst, together with its corresponding 
 ciphertext generated with the secret key
■  Ciphertext chosen by cryptanalyst, together with its corresponding decrypted 
plaintext generated with the secret key
Table 3.1 Types of Attacks on Encrypted Messages

3.1 / SYMMETRIC CIPHER MODEL 91
In general, if the analyst is able to choose the messages to encrypt, the analyst may 
deliberately pick patterns that can be expected to reveal the structure of the key.
Table 3.1 lists two other types of attack: chosen ciphertext and chosen text. 
These are less commonly employed as cryptanalytic techniques but are nevertheless 
possible avenues of attack.
Only relatively weak algorithms fail to withstand a ciphertext-only attack. 
Generally, an encryption algorithm is designed to withstand a known-plaintext 
attack.
Two more definitions are worthy of note. An encryption scheme is 
 unconditionally secure if the ciphertext generated by the scheme does not contain 
enough information to determine uniquely the corresponding plaintext, no matter 
how much ciphertext is available. That is, no matter how much time an opponent 
has, it is impossible for him or her to decrypt the ciphertext simply because the 
required information is not there. With the exception of a scheme known as the 
one-time pad (described later in this chapter), there is no encryption algorithm that 
is unconditionally secure. Therefore, all that the users of an encryption algorithm 
can strive for is an algorithm that meets one or both of the following criteria:
 
■The cost of breaking the cipher exceeds the value of the encrypted information.
 
■The time required to break the cipher exceeds the useful lifetime of the 
information.
An encryption scheme is said to be computationally secure if either of the 
foregoing two criteria are met. Unfortunately, it is very difficult to estimate the 
amount of effort required to cryptanalyze ciphertext successfully.
All forms of cryptanalysis for symmetric encryption schemes are designed 
to exploit the fact that traces of structure or pattern in the plaintext may survive 
encryption and be discernible in the ciphertext. This will become clear as we exam-
ine various symmetric encryption schemes in this chapter. We will see in Part Two 
that cryptanalysis for public-key schemes proceeds from a fundamentally different 
premise, namely, that the mathematical properties of the pair of keys may make it 
possible for one of the two keys to be deduced from the other.
A brute-force attack involves trying every possible key until an intelligible 
translation of the ciphertext into plaintext is obtained. On average, half of all pos-
sible keys must be tried to achieve success. That is, if there are X different keys, on 
average an attacker would discover the actual key after X/2 tries. It is important to 
note that there is more to a brute-force attack than simply running through all pos-
sible keys. Unless known plaintext is provided, the analyst must be able to recognize 
plaintext as plaintext. If the message is just plain text in English, then the result pops 
out easily, although the task of recognizing English would have to be automated. If 
the text message has been compressed before encryption, then recognition is more 
difficult. And if the message is some more general type of data, such as a numeri-
cal file, and this has been compressed, the problem becomes even more difficult to 
automate. Thus, to supplement the brute-force approach, some degree of knowl-
edge about the expected plaintext is needed, and some means of automatically dis-
tinguishing plaintext from garble is also needed.

92  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
 3.2 SUBSTITUTION TECHNIQUES
In this section and the next, we examine a sampling of what might be called classical 
encryption techniques. A study of these techniques enables us to illustrate the basic 
approaches to symmetric encryption used today and the types of cryptanalytic at-
tacks that must be anticipated.
The two basic building blocks of all encryption techniques are substitution 
and transposition. We examine these in the next two sections. Finally, we discuss a 
system that combines both substitution and transposition.
A substitution technique is one in which the letters of plaintext are replaced 
by other letters or by numbers or symbols.1 If the plaintext is viewed as a sequence 
of bits, then substitution involves replacing plaintext bit patterns with ciphertext bit 
patterns.
Caesar Cipher
The earliest known, and the simplest, use of a substitution cipher was by Julius 
Caesar. The Caesar cipher involves replacing each letter of the alphabet with the 
letter standing three places further down the alphabet. For example,
plain:   meet me after the toga party
cipher: PHHW PH DIWHU WKH WRJD SDUWB
Note that the alphabet is wrapped around, so that the letter following Z is A. 
We can define the transformation by listing all possibilities, as follows:
plain:   a b c d e f g h i j k l m n o p q r s t u v w x y z
cipher: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
Let us assign a numerical equivalent to each letter:
a
b
c
d
e
f
g
h
i
j
k
l
m

n
o
p
q
r
s
t
u
v
w
x
y
z

Then the algorithm can be expressed as follows. For each plaintext letter p, substi-
tute the ciphertext letter C:2
 
C = E(3, p) = (p + 3) mod 26 
A shift may be of any amount, so that the general Caesar algorithm is
  
C = E(k, p) = (p + k) mod 26 
  (3.1)
1When letters are involved, the following conventions are used in this book. Plaintext is always in 
 lowercase; ciphertext is in uppercase; key values are in italicized lowercase.
2We define a mod n to be the remainder when a is divided by n. For example, 11 mod 7 = 4. See Chapter  2 
for a further discussion of modular arithmetic.

3.2 / SUBSTITUTION TECHNIQUES 93
where k takes on a value in the range 1 to 25. The decryption algorithm is simply
  
p = D(k, C) = (C - k) mod 26 
  (3.2)
If it is known that a given ciphertext is a Caesar cipher, then a brute-force 
cryptanalysis is easily performed: simply try all the 25 possible keys. Figure 3.3 
shows the results of applying this strategy to the example ciphertext. In this case, the 
plaintext leaps out as occupying the third line.
Three important characteristics of this problem enabled us to use a brute-
force cryptanalysis:
1. The encryption and decryption algorithms are known.
2. There are only 25 keys to try.
3. The language of the plaintext is known and easily recognizable.
In most networking situations, we can assume that the algorithms are known. 
What generally makes brute-force cryptanalysis impractical is the use of an algo-
rithm that employs a large number of keys. For example, the triple DES algorithm, 
Figure 3.3 Brute-Force Cryptanalysis of Caesar Cipher
PHHW PH DIWHU WKH WRJD SDUWB
KEY

oggv og chvgt vjg vqic rctva

nffu nf bgufs uif uphb qbsuz

meet me after the toga party

ldds ld zesdq sgd snfz ozqsx

kccr kc ydrcp rfc rmey nyprw

jbbq jb xcqbo qeb qldx mxoqv

iaap ia wbpan pda pkcw lwnpu

hzzo hz vaozm ocz ojbv kvmot

gyyn gy uznyl nby niau julns

fxxm fx tymxk max mhzt itkmr

ewwl ew sxlwj lzw lgys hsjlq

dvvk dv rwkvi kyv kfxr grikp

cuuj cu qvjuh jxu jewq fqhjo

btti bt puitg iwt idvp epgin

assh as othsf hvs hcuo dofhm

zrrg zr nsgre gur gbtn cnegl

yqqf yq mrfqd ftq fasm bmdfk

xppe xp lqepc esp ezrl alcej

wood wo kpdob dro dyqk zkbdi

vnnc vn jocna cqn cxpj yjach

ummb um inbmz bpm bwoi xizbg

tlla tl hmaly aol avnh whyaf

skkz sk glzkx znk zumg vgxze

rjjy rj fkyjw ymj ytlf ufwyd

qiix qi ejxiv xli xske tevxc

94  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
examined in Chapter 7, makes use of a 168-bit key, giving a key space of 2168 or 
greater than 3.7 * 1050 possible keys.
The third characteristic is also significant. If the language of the plaintext is 
unknown, then plaintext output may not be recognizable. Furthermore, the input 
may be abbreviated or compressed in some fashion, again making recognition dif-
ficult. For example, Figure 3.4 shows a portion of a text file compressed using an 
algorithm called ZIP. If this file is then encrypted with a simple substitution cipher 
(expanded to include more than just 26 alphabetic characters), then the plaintext 
may not be recognized when it is uncovered in the brute-force cryptanalysis.
Monoalphabetic Ciphers
With only 25 possible keys, the Caesar cipher is far from secure. A dramatic increase 
in the key space can be achieved by allowing an arbitrary substitution. Before pro-
ceeding, we define the term permutation. A permutation of a finite set of elements S 
is an ordered sequence of all the elements of S, with each element appearing exactly 
once. For example, if S = {a, b, c}, there are six permutations of S:
 
abc, acb, bac, bca, cab, cba 
In general, there are n! permutations of a set of n elements, because the first 
element can be chosen in one of n ways, the second in n - 1 ways, the third in n - 2 
ways, and so on.
Recall the assignment for the Caesar cipher:
plain:  a b c d e f g h i j k l m n o p q r s t u v w x y z
cipher: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
If, instead, the “cipher” line can be any permutation of the 26 alphabetic characters, 
then there are 26! or greater than 4 * 1026 possible keys. This is 10 orders of mag-
nitude greater than the key space for DES and would seem to eliminate brute-force 
techniques for cryptanalysis. Such an approach is referred to as a monoalphabetic 
substitution cipher, because a single cipher alphabet (mapping from plain alphabet 
to cipher alphabet) is used per message.
There is, however, another line of attack. If the cryptanalyst knows the nature 
of the plaintext (e.g., noncompressed English text), then the analyst can exploit the 
regularities of the language. To see how such a cryptanalysis might proceed, we give 
a partial example here that is adapted from one in [SINK09]. The ciphertext to be 
solved is
Figure 3.4 Sample of Compressed Text

3.2 / SUBSTITUTION TECHNIQUES 95
UZQSOVUOHXMOPVGPOZPEVSGZWSZOPFPESXUDBMETSXAIZ
VUEPHZHMDZSHZOWSFPAPPDTSVPQUZWYMXUZUHSX
EPYEPOPDZSZUFPOMBZWPFUPZHMDJUDTMOHMQ
As a first step, the relative frequency of the letters can be determined and 
compared to a standard frequency distribution for English, such as is shown in 
Figure 3.5 (based on [LEWA00]). If the message were long enough, this technique 
alone might be sufficient, but because this is a relatively short message, we cannot 
expect an exact match. In any case, the relative frequencies of the letters in the 
ciphertext (in percentages) are as follows:
P 13.33
H 5.83
F  3.33
B  1.67
C 0.00
Z 11.67
D 5.00
W  3.33
G 1.67
K 0.00
S   8.33
E 5.00
Q 2.50
Y 1.67
L 0.00
U  8.33
V 4.17
T  2.50
I   0.83
N 0.00
O  7.50
X 4.17
A 1.67
J   0.83
R 0.00
M   6.67
Comparing this breakdown with Figure 3.5, it seems likely that cipher letters 
P and Z are the equivalents of plain letters e and t, but it is not certain which is which. 
The letters S, U, O, M, and H are all of relatively high frequency and probably 
Figure 3.5 Relative Frequency of Letters in English Text

A
8.167
1.492
2.782
4.253
12.702
2.228
2.015
6.094
6.996
0.153
0.772
4.025
2.406
6.749
7.507
1.929
0.095
5.987
6.327
9.056
2.758
0.978
2.360
0.150
1.974
0.074
B
C
D
E
F
G
H
I
J
K
L
M
N
Relative frequency (%)
O
P
Q
R
S
T
U
V
W
X
Y
Z

96  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
correspond to plain letters from the set {a, h, i, n, o, r, s}. The letters with the lowest 
frequencies (namely, A, B, G, Y, I, J) are likely included in the set {b, j, k, q, v, x, z}.
There are a number of ways to proceed at this point. We could make some 
tentative assignments and start to fill in the plaintext to see if it looks like a rea-
sonable “skeleton” of a message. A more systematic approach is to look for other 
regularities. For example, certain words may be known to be in the text. Or we 
could look for repeating sequences of cipher letters and try to deduce their plaintext 
equivalents.
A powerful tool is to look at the frequency of two-letter combinations, known 
as digrams. A table similar to Figure 3.5 could be drawn up showing the relative fre-
quency of digrams. The most common such digram is th. In our ciphertext, the most 
common digram is ZW, which appears three times. So we make the correspondence 
of Z with t and W with h. Then, by our earlier hypothesis, we can equate P with e. 
Now notice that the sequence ZWP appears in the ciphertext, and we can translate 
that sequence as “the.” This is the most frequent trigram (three-letter combination) 
in English, which seems to indicate that we are on the right track.
Next, notice the sequence ZWSZ in the first line. We do not know that these 
four letters form a complete word, but if they do, it is of the form th_t. If so, S 
equates with a.
So far, then, we have
UZQSOVUOHXMOPVGPOZPEVSGZWSZOPFPESXUDBMETSXAIZ
t a       e  e te  a that e e a     a
VUEPHZHMDZSHZOWSFPAPPDTSVPQUZWYMXUZUHSX
e t   ta t ha e ee  a e  th     t  a
EPYEPOPDZSZUFPOMBZWPFUPZHMDJUDTMOHMQ
e  e e tat  e   the   t
Only four letters have been identified, but already we have quite a bit of the 
message. Continued analysis of frequencies plus trial and error should easily yield a 
solution from this point. The complete plaintext, with spaces added between words, 
follows:
it was disclosed yesterday that several informal but
direct contacts have been made with political
representatives of the viet cong in moscow
Monoalphabetic ciphers are easy to break because they reflect the frequency 
data of the original alphabet. A countermeasure is to provide multiple substi-
tutes, known as homophones, for a single letter. For example, the letter e could 
be assigned a number of different cipher symbols, such as 16, 74, 35, and 21, with 
each homophone assigned to a letter in rotation or randomly. If the number of 
symbols assigned to each letter is proportional to the relative frequency of that let-
ter, then single-letter frequency information is completely obliterated. The great 
mathematician Carl Friedrich Gauss believed that he had devised an unbreak-
able cipher using homophones. However, even with homophones, each element 
of plaintext affects only one element of ciphertext, and multiple-letter patterns 

3.2 / SUBSTITUTION TECHNIQUES 97
(e.g., digram frequencies) still survive in the ciphertext, making cryptanalysis rela-
tively straightforward.
Two principal methods are used in substitution ciphers to lessen the extent to 
which the structure of the plaintext survives in the ciphertext: One approach is to 
encrypt multiple letters of plaintext, and the other is to use multiple cipher alpha-
bets. We briefly examine each.
Playfair Cipher
The best-known multiple-letter encryption cipher is the Playfair, which treats di-
grams in the plaintext as single units and translates these units into ciphertext 
digrams.3
The Playfair algorithm is based on the use of a 5 * 5 matrix of letters con-
structed using a keyword. Here is an example, solved by Lord Peter Wimsey in 
Dorothy Sayers’s Have His Carcase:4
M
O
N
A
R
C
H
Y
B
D
E
F
G
I/J
K
L
P
Q
S
T
U
V
W
X
Z
In this case, the keyword is monarchy. The matrix is constructed by filling 
in the letters of the keyword (minus duplicates) from left to right and from top to 
bottom, and then filling in the remainder of the matrix with the remaining letters in 
alphabetic order. The letters I and J count as one letter. Plaintext is encrypted two 
letters at a time, according to the following rules:
1. Repeating plaintext letters that are in the same pair are separated with a filler 
letter, such as x, so that balloon would be treated as ba lx lo on.
2. Two plaintext letters that fall in the same row of the matrix are each replaced 
by the letter to the right, with the first element of the row circularly following 
the last. For example, ar is encrypted as RM.
3. Two plaintext letters that fall in the same column are each replaced by the let-
ter beneath, with the top element of the column circularly following the last. 
For example, mu is encrypted as CM.
4. Otherwise, each plaintext letter in a pair is replaced by the letter that lies in 
its own row and the column occupied by the other plaintext letter. Thus, hs 
becomes BP and ea becomes IM (or JM, as the encipherer wishes).
The Playfair cipher is a great advance over simple monoalphabetic ciphers. 
For one thing, whereas there are only 26 letters, there are 26 * 26 = 676 digrams, 
3This cipher was actually invented by British scientist Sir Charles Wheatstone in 1854, but it bears the 
name of his friend Baron Playfair of St. Andrews, who championed the cipher at the British foreign office.
4The book provides an absorbing account of a probable-word attack.

98  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
so that identification of individual digrams is more difficult. Furthermore, the rela-
tive frequencies of individual letters exhibit a much greater range than that of 
digrams, making frequency analysis much more difficult. For these reasons, the 
Playfair cipher was for a long time considered unbreakable. It was used as the stan-
dard field system by the British Army in World War I and still enjoyed considerable 
use by the U.S. Army and other Allied forces during World War II.
Despite this level of confidence in its security, the Playfair cipher is relatively 
easy to break, because it still leaves much of the structure of the plaintext language 
intact. A few hundred letters of ciphertext are generally sufficient.
One way of revealing the effectiveness of the Playfair and other ciphers is 
shown in Figure 3.6. The line labeled plaintext plots a typical frequency distribution 
of the 26 alphabetic characters (no distinction between upper and lower case) in 
ordinary text. This is also the frequency distribution of any monoalphabetic substi-
tution cipher, because the frequency values for individual letters are the same, just 
with different letters substituted for the original letters. The plot is developed in the 
following way: The number of occurrences of each letter in the text is counted and 
divided by the number of occurrences of the most frequently used letter. Using the 
results of Figure 3.5, we see that e is the most frequently used letter. As a result, e 
has a relative frequency of 1, t of 9.056/12.702 ≈0.72, and so on. The points on the 
horizontal axis correspond to the letters in order of decreasing frequency.
Figure 3.6 also shows the frequency distribution that results when the text is 
encrypted using the Playfair cipher. To normalize the plot, the number of occur-
rences of each letter in the ciphertext was again divided by the number of occur-
rences of e in the plaintext. The resulting plot therefore shows the extent to which 
the frequency distribution of letters, which makes it trivial to solve substitution 
Figure 3.6 Relative Frequency of Occurrence of Letters

9 10 10 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
Plaintext
Playfair
Vigenère
Random polyalphabetic
Frequency ranked letters (decreasing frequency)
Normalized relative frequency
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0

3.2 / SUBSTITUTION TECHNIQUES 99
ciphers, is masked by encryption. If the frequency distribution information were 
totally concealed in the encryption process, the ciphertext plot of frequencies would 
be flat, and cryptanalysis using ciphertext only would be effectively impossible. As 
the figure shows, the Playfair cipher has a flatter distribution than does plaintext, 
but nevertheless, it reveals plenty of structure for a cryptanalyst to work with. The 
plot also shows the Vigenère cipher, discussed subsequently. The Hill and Vigenère 
curves on the plot are based on results reported in [SIMM93].
Hill Cipher5
Another interesting multiletter cipher is the Hill cipher, developed by the math-
ematician Lester Hill in 1929.
CONCEPTS FROM LINEAR ALGEBRA Before describing the Hill cipher, let us briefly 
review some terminology from linear algebra. In this discussion, we are concerned 
with matrix arithmetic modulo 26. For the reader who needs a refresher on matrix 
multiplication and inversion, see Appendix E.
We define the inverse M-1 of a square matrix M by the equation M(M-1) =
M-1M = I, where I is the identity matrix. I is a square matrix that is all zeros except 
for ones along the main diagonal from upper left to lower right. The inverse of a 
matrix does not always exist, but when it does, it satisfies the preceding equation. 
For example,
 A = ¢ 5

3≤  A-1 mod 26 = ¢9

15≤
 AA-1 = ¢ (5 * 9) + (8 * 1)
(5 * 2) + (8 * 15)
(17 * 9) + (3 * 1)
(17 * 2) + (3 * 15)≤
 = ¢ 53

79 ≤ mod 26 = ¢1

1≤
To explain how the inverse of a matrix is computed, we begin with the concept 
of determinant. For any square matrix (m * m), the determinant equals the sum of 
all the products that can be formed by taking exactly one element from each row 
and exactly one element from each column, with certain of the product terms pre-
ceded by a minus sign. For a 2 * 2 matrix,
 
¢k11
k12
k21
k22
≤ 
the determinant is k11k22 - k12k21. For a 3 * 3 matrix, the value of the determinant 
is k11k22k33 + k21k32k13 + k31k12k23 - k31k22k13 - k21k12k33 - k11k32k23. If a square 
5This cipher is somewhat more difficult to understand than the others in this chapter, but it illustrates an 
important point about cryptanalysis that will be useful later on. This subsection can be skipped on a first 
reading.

100  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
matrix A has a nonzero determinant, then the inverse of the matrix is computed 
as [A-1]ij = (det A)-1(-1)i+j(Dji), where (Dji) is the subdeterminant formed by 
deleting the jth row and the ith column of A, det(A) is the determinant of A, and 
(det A)-1 is the multiplicative inverse of (det A) mod 26.
Continuing our example,
 
det ¢ 5

3≤= (5 * 3) - (8 * 17) = -121 mod 26 = 9 
We can show that 9-1 mod 26 = 3, because 9 * 3 = 27 mod 26 = 1 (see 
Chapter 2 or Appendix E). Therefore, we compute the inverse of A as
 A = ¢ 5

3≤
 
 A-1 mod 26 = 3¢ 3
-8
-17
5 ≤= 3¢3

5 ≤= ¢ 9

15≤= ¢9

15≤ 
THE HILL ALGORITHM This encryption algorithm takes m successive plaintext let-
ters and substitutes for them m ciphertext letters. The substitution is determined 
by m linear equations in which each character is assigned a numerical value 
(a = 0, b = 1, c , z = 25). For m = 3, the system can be described as
 c1 = (k11p1 + k21p2 + k31p3) mod 26
 c2 = (k12p1 + k22p2 + k32p3) mod 26
 c3 = (k13p1 + k23p2 + k33p3) mod 26
This can be expressed in terms of row vectors and matrices:6
 
(c1 c2 c3) = (p1 p2 p3)£
k11
k12
k13
k21
k22
k23
k31
k32
k33
≥ mod 26 
or
 
C = PK mod 26 
where C and P are row vectors of length 3 representing the plaintext and ciphertext, 
and K is a 3 * 3 matrix representing the encryption key. Operations are performed 
mod 26.
6Some cryptography books express the plaintext and ciphertext as column vectors, so that the column 
vector is placed after the matrix rather than the row vector placed before the matrix. Sage uses row vec-
tors, so we adopt that convention.

3.2 / SUBSTITUTION TECHNIQUES 101
For example, consider the plaintext “paymoremoney” and use the encryption key
 
K = £

≥ 
The first three letters of the plaintext are represented by the vector (15 0 24). 
Then (15 0 24)K = (303 303 531) mod 26 = (17 17 11) = RRL. Continuing in this 
fashion, the ciphertext for the entire plaintext is RRLMWBKASPDH.
Decryption requires using the inverse of the matrix K. We can compute det 
K = 23, and therefore, (det K)-1 mod 26 = 17. We can then compute the inverse as7
 
K-1 = £

≥ 
This is demonstrated as
 
£

≥£

≥= £

≥ mod 26 = £

≥ 
It is easily seen that if the matrix K-1 is applied to the ciphertext, then the 
plaintext is recovered.
In general terms, the Hill system can be expressed as
 C = E(K, P) = PK mod 26
 P = D(K, C) = CK-1 mod 26 = PKK-1 = P
As with Playfair, the strength of the Hill cipher is that it completely hides 
single-letter frequencies. Indeed, with Hill, the use of a larger matrix hides more 
frequency information. Thus, a 3 * 3 Hill cipher hides not only single-letter but 
also two-letter frequency information.
Although the Hill cipher is strong against a ciphertext-only attack, it is easily 
broken with a known plaintext attack. For an m * m Hill cipher, suppose we have m 
plaintext–ciphertext pairs, each of length m. We label the pairs Pj = (p1jp1j c pmj) 
and Cj = (c1jc1j c cmj) such that Cj = PjK for 1 … j … m and for some unknown 
key matrix K. Now define two m * m matrices X = (pij) and Y = (cij). Then we 
can form the matrix equation Y = XK. If X has an inverse, then we can determine 
K = X-1Y. If X is not invertible, then a new version of X can be formed with addi-
tional plaintext–ciphertext pairs until an invertible X is obtained.
Consider this example. Suppose that the plaintext “hillcipher” is encrypted 
using a 2 * 2 Hill cipher to yield the ciphertext HCRZSSXNSP. Thus, we know 
that (7 8)K mod 26 = (7 2); (11 11)K mod 26 = (17 25); and so on. Using 
the first two plaintext-ciphertext pairs, we have
7The calculations for this example are provided in detail in Appendix E.

102  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
 
¢ 7

25≤= ¢ 7

11≤K mod 26 
The inverse of X can be computed:
 
¢ 7

11≤
-1
= ¢25

23≤ 
so
 
K = ¢25

23≤¢ 7

25≤= ¢549

577≤ mod 26 = ¢3

5≤ 
This result is verified by testing the remaining plaintext–ciphertext pairs.
Polyalphabetic Ciphers
Another way to improve on the simple monoalphabetic technique is to use differ-
ent monoalphabetic substitutions as one proceeds through the plaintext message. 
The general name for this approach is polyalphabetic substitution cipher. All these 
techniques have the following features in common:
1. A set of related monoalphabetic substitution rules is used.
2. A key determines which particular rule is chosen for a given transformation.
VIGENÈRE CIPHER The best known, and one of the simplest, polyalphabetic ciphers 
is the Vigenère cipher. In this scheme, the set of related monoalphabetic substitu-
tion rules consists of the 26 Caesar ciphers with shifts of 0 through 25. Each cipher is 
denoted by a key letter, which is the ciphertext letter that substitutes for the plain-
text letter a. Thus, a Caesar cipher with a shift of 3 is denoted by the key value 3.8
We can express the Vigenère cipher in the following manner. Assume a 
sequence of plaintext letters P = p0, p1, p2, c , pn-1 and a key consisting of the 
sequence of letters K = k0, k1, k2, c , km-1, where typically m 6 n. The sequence 
of ciphertext letters C = C0, C1, C2, c , Cn-1 is calculated as follows:
 C = C0, C1, C2, c , Cn-1 = E(K, P) = E[(k0, k1, k2, c , km-1), (p0, p1, p2, c , pn-1)]
 = (p0 + k0) mod 26, (p1 + k1) mod 26, c ,(pm-1 + km-1) mod 26,
(pm + k0) mod 26, (pm+1 + k1) mod 26, c , (p2m-1 + km-1) mod 26, c
Thus, the first letter of the key is added to the first letter of the plaintext, mod 26, 
the second letters are added, and so on through the first m letters of the plaintext. 
For the next m letters of the plaintext, the key letters are repeated. This process 
8To aid in understanding this scheme and also to aid in it use, a matrix known as the Vigenère tableau is 
often used. This tableau is discussed in a document at box.com/Crypto7e.

3.2 / SUBSTITUTION TECHNIQUES 103
continues until all of the plaintext sequence is encrypted. A general equation of the 
encryption process is
  
Ci = (pi + ki mod m) mod 26 
  (3.3)
Compare this with Equation (3.1) for the Caesar cipher. In essence, each plain-
text character is encrypted with a different Caesar cipher, depending on the corre-
sponding key character. Similarly, decryption is a generalization of Equation (3.2):
  
pi = (Ci - ki mod m) mod 26 
  (3.4)
To encrypt a message, a key is needed that is as long as the message. Usually, 
the key is a repeating keyword. For example, if the keyword is deceptive, the mes-
sage “we are discovered save yourself” is encrypted as
key: 
 
deceptivedeceptivedeceptive
plaintext: 
wearediscoveredsaveyourself
ciphertext: 
ZICVTWQNGRZGVTWAVZHCQYGLMGJ
Expressed numerically, we have the following result.
key

plaintext

ciphertext

key

plaintext

ciphertext

The strength of this cipher is that there are multiple ciphertext letters for 
each plaintext letter, one for each unique letter of the keyword. Thus, the letter fre-
quency information is obscured. However, not all knowledge of the plaintext struc-
ture is lost. For example, Figure 3.6 shows the frequency distribution for a Vigenère 
cipher with a keyword of length 9. An improvement is achieved over the Playfair 
cipher, but considerable frequency information remains.
It is instructive to sketch a method of breaking this cipher, because the method 
reveals some of the mathematical principles that apply in cryptanalysis.
First, suppose that the opponent believes that the ciphertext was encrypted 
using either monoalphabetic substitution or a Vigenère cipher. A simple test can 
be made to make a determination. If a monoalphabetic substitution is used, then 
the statistical properties of the ciphertext should be the same as that of the lan-
guage of the plaintext. Thus, referring to Figure 3.5, there should be one cipher let-
ter with a relative frequency of occurrence of about 12.7%, one with about 9.06%, 
and so on. If only a single message is available for analysis, we would not expect 
an exact match of this small sample with the statistical profile of the plaintext lan-
guage. Nevertheless, if the correspondence is close, we can assume a monoalpha-
betic substitution.

104  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
If, on the other hand, a Vigenère cipher is suspected, then progress depends on 
determining the length of the keyword, as will be seen in a moment. For now, let us 
concentrate on how the keyword length can be determined. The important insight 
that leads to a solution is the following: If two identical sequences of plaintext let-
ters occur at a distance that is an integer multiple of the keyword length, they will 
generate identical ciphertext sequences. In the foregoing example, two instances 
of the sequence “red” are separated by nine character positions. Consequently, in 
both cases, r is encrypted using key letter e, e is encrypted using key letter p, and d 
is encrypted using key letter t. Thus, in both cases, the ciphertext sequence is VTW. 
We indicate this above by underlining the relevant ciphertext letters and shading 
the relevant ciphertext numbers.
An analyst looking at only the ciphertext would detect the repeated sequences 
VTW at a displacement of 9 and make the assumption that the keyword is either 
three or nine letters in length. The appearance of VTW twice could be by chance 
and may not reflect identical plaintext letters encrypted with identical key letters. 
However, if the message is long enough, there will be a number of such repeated 
ciphertext sequences. By looking for common factors in the displacements of the vari-
ous sequences, the analyst should be able to make a good guess of the keyword length.
Solution of the cipher now depends on an important insight. If the keyword 
length is m, then the cipher, in effect, consists of m monoalphabetic substitution 
ciphers. For example, with the keyword DECEPTIVE, the letters in positions 1, 10, 
19, and so on are all encrypted with the same monoalphabetic cipher. Thus, we can 
use the known frequency characteristics of the plaintext language to attack each of 
the monoalphabetic ciphers separately.
The periodic nature of the keyword can be eliminated by using a nonrepeating 
keyword that is as long as the message itself. Vigenère proposed what is referred to 
as an autokey system, in which a keyword is concatenated with the plaintext itself to 
provide a running key. For our example,
key: 
 
deceptivewearediscoveredsav
plaintext: 
wearediscoveredsaveyourself
ciphertext: 
ZICVTWQNGKZEIIGASXSTSLVVWLA
Even this scheme is vulnerable to cryptanalysis. Because the key and the 
plaintext share the same frequency distribution of letters, a statistical technique can 
be applied. For example, e enciphered by e, by Figure 3.5, can be expected to occur 
with a frequency of (0.127)2 ≈0.016, whereas t enciphered by t would occur only 
about half as often. These regularities can be exploited to achieve successful 
cryptanalysis.9
VERNAM CIPHER The ultimate defense against such a cryptanalysis is to choose a 
keyword that is as long as the plaintext and has no statistical relationship to it. Such 
a system was introduced by an AT&T engineer named Gilbert Vernam in 1918.
9Although the techniques for breaking a Vigenère cipher are by no means complex, a 1917 issue of 
Scientific American characterized this system as “impossible of translation.” This is a point worth remem-
bering when similar claims are made for modern algorithms.

3.2 / SUBSTITUTION TECHNIQUES 105
His system works on binary data (bits) rather than letters. The system can be 
expressed succinctly as follows (Figure 3.7):
 
ci = pi ⊕ki 
where
pi = ith binary digit of plaintext
ki = ith binary digit of key
ci = ith binary digit of ciphertext
⊕= exclusive@or (XOR) operation
Compare this with Equation (3.3) for the Vigenère cipher.
Thus, the ciphertext is generated by performing the bitwise XOR of the plain-
text and the key. Because of the properties of the XOR, decryption simply involves 
the same bitwise operation:
 
pi = ci ⊕ki 
which compares with Equation (3.4).
The essence of this technique is the means of construction of the key. Vernam 
proposed the use of a running loop of tape that eventually repeated the key, so that 
in fact the system worked with a very long but repeating keyword. Although such 
a scheme, with a long key, presents formidable cryptanalytic difficulties, it can be 
broken with sufficient ciphertext, the use of known or probable plaintext sequences, 
or both.
One-Time Pad
An Army Signal Corp officer, Joseph Mauborgne, proposed an improvement to the 
Vernam cipher that yields the ultimate in security. Mauborgne suggested using a 
random key that is as long as the message, so that the key need not be repeated. In 
addition, the key is to be used to encrypt and decrypt a single message, and then is 
discarded. Each new message requires a new key of the same length as the new mes-
sage. Such a scheme, known as a one-time pad, is unbreakable. It produces random 
output that bears no statistical relationship to the plaintext. Because the ciphertext 
Figure 3.7 Vernam Cipher
Key stream
generator
Cryptographic
bit stream (ki) 
Cryptographic
bit stream (ki) 
Plaintext
(pi) 
Plaintext
(pi)
Ciphertext
(ci ) 
Key stream
generator

106  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
contains no information whatsoever about the plaintext, there is simply no way to 
break the code.
An example should illustrate our point. Suppose that we are using a Vigenère 
scheme with 27 characters in which the twenty-seventh character is the space 
character, but with a one-time key that is as long as the message. Consider the 
ciphertext
ANKYODKYUREPFJBYOJDSPLREYIUNOFDOIUERFPLUYTS
We now show two different decryptions using two different keys:
ciphertext: ANKYODKYUREPFJBYOJDSPLREYIUNOFDOIUERFPLUYTS
key: 
 
pxlmvmsydofuyrvzwc tnlebnecvgdupahfzzlmnyih
plaintext: 
mr mustard with the candlestick in the hall
ciphertext: ANKYODKYUREPFJBYOJDSPLREYIUNOFDOIUERFPLUYTS
key: 
 
pftgpmiydgaxgoufhklllmhsqdqogtewbqfgyovuhwt
plaintext: 
miss scarlet with the knife in the library
Suppose that a cryptanalyst had managed to find these two keys. Two plau-
sible plaintexts are produced. How is the cryptanalyst to decide which is the correct 
decryption (i.e., which is the correct key)? If the actual key were produced in a truly 
random fashion, then the cryptanalyst cannot say that one of these two keys is more 
likely than the other. Thus, there is no way to decide which key is correct and there-
fore which plaintext is correct.
In fact, given any plaintext of equal length to the ciphertext, there is a key that 
produces that plaintext. Therefore, if you did an exhaustive search of all possible 
keys, you would end up with many legible plaintexts, with no way of knowing which 
was the intended plaintext. Therefore, the code is unbreakable.
The security of the one-time pad is entirely due to the randomness of the key. 
If the stream of characters that constitute the key is truly random, then the stream 
of characters that constitute the ciphertext will be truly random. Thus, there are no 
patterns or regularities that a cryptanalyst can use to attack the ciphertext.
In theory, we need look no further for a cipher. The one-time pad offers com-
plete security but, in practice, has two fundamental difficulties:
1. There is the practical problem of making large quantities of random keys. Any 
heavily used system might require millions of random characters on a regular 
basis. Supplying truly random characters in this volume is a significant task.
2. Even more daunting is the problem of key distribution and protection. For 
every message to be sent, a key of equal length is needed by both sender and 
receiver. Thus, a mammoth key distribution problem exists.
Because of these difficulties, the one-time pad is of limited utility and is useful 
primarily for low-bandwidth channels requiring very high security.
The one-time pad is the only cryptosystem that exhibits what is referred to as 
perfect secrecy. This concept is explored in Appendix F.

110  CHAPTER 3 / CLASSICAL ENCRYPTION TECHNIQUES
repeats. The addition of fourth and fifth rotors results in periods of 456,976 and 
11,881,376 letters, respectively. Thus, a given setting of a 5-rotor machine is equiva-
lent to a Vigenère cipher with a key length of 11,881,376.
Such a scheme presents a formidable cryptanalytic challenge. If, for example, 
the cryptanalyst attempts to use a letter frequency analysis approach, the analyst 
is faced with the equivalent of over 11 million monoalphabetic ciphers. We might 
need on the order of 50 letters in each monalphabetic cipher for a solution, which 
means that the analyst would need to be in possession of a ciphertext with a length 
of over half a billion letters.
The significance of the rotor machine today is that it points the way to a large 
class of symmetric ciphers, of which the Data Encryption Standard (DES) is the 
most prominent. DES is introduced in Chapter 4. 
 3.5 STEGANOGRAPHY
We conclude with a discussion of a technique that (strictly speaking), is not encryp-
tion, namely, steganography.
A plaintext message may be hidden in one of two ways. The methods of 
 steganography conceal the existence of the message, whereas the methods of cryp-
tography render the message unintelligible to outsiders by various transformations 
of the text.11
A simple form of steganography, but one that is time-consuming to construct, 
is one in which an arrangement of words or letters within an apparently innocuous 
text spells out the real message. For example, the sequence of first letters of each 
word of the overall message spells out the hidden message. Figure 3.9 shows an 
example in which a subset of the words of the overall message is used to convey the 
hidden message. See if you can decipher this; it’s not too hard.
Various other techniques have been used historically; some examples are the 
following [MYER91]:
 
■Character marking: Selected letters of printed or typewritten text are over-
written in pencil. The marks are ordinarily not visible unless the paper is held 
at an angle to bright light.
 
■Invisible ink: A number of substances can be used for writing but leave no vis-
ible trace until heat or some chemical is applied to the paper.
 
■Pin punctures: Small pin punctures on selected letters are ordinarily not vis-
ible unless the paper is held up in front of a light.
 
■Typewriter correction ribbon: Used between lines typed with a black ribbon, 
the results of typing with the correction tape are visible only under a strong 
light.
11Steganography was an obsolete word that was revived by David Kahn and given the meaning it has 
today [KAHN96].

3.5 / STEGANOGRAPHY 111
Although these techniques may seem archaic, they have contemporary equiv-
alents. [WAYN09] proposes hiding a message by using the least significant bits of 
frames on a CD. For example, the Kodak Photo CD format’s maximum resolution 
is 3096 * 6144 pixels, with each pixel containing 24 bits of RGB color information. 
The least significant bit of each 24-bit pixel can be changed without greatly affecting 
the quality of the image. The result is that you can hide a 130-kB message in a single 
digital snapshot. There are now a number of software packages available that take 
this type of approach to steganography.
Steganography has a number of drawbacks when compared to encryption. 
It requires a lot of overhead to hide a relatively few bits of information, although 
using a scheme like that proposed in the preceding paragraph may make it more 
effective. Also, once the system is discovered, it becomes virtually worthless. This 
problem, too, can be overcome if the insertion method depends on some sort of key 
(e.g., see Problem 3.22). Alternatively, a message can be first encrypted and then 
hidden using steganography.
The advantage of steganography is that it can be employed by parties who 
have something to lose should the fact of their secret communication (not necessar-
ily the content) be discovered. Encryption flags traffic as important or secret or may 
identify the sender or receiver as someone with something to hide.
Figure 3.9 A Puzzle for Inspector Morse
(From The Silent World of Nicholas Quinn, by Colin Dexter)

4.1 / TRADITIONAL BLOCK CIPHER STRUCTURE 119
The objective of this chapter is to illustrate the principles of modern symmetric 
ciphers. For this purpose, we focus on the most widely used symmetric cipher: the Data 
Encryption Standard (DES). Although numerous symmetric ciphers have been devel-
oped since the introduction of DES, and although it is destined to be replaced by the 
Advanced Encryption Standard (AES), DES remains the most important such algo-
rithm. Furthermore, a detailed study of DES provides an understanding of the prin-
ciples used in other symmetric ciphers.
This chapter begins with a discussion of the general principles of symmetric block 
ciphers, which are the principal type of symmetric ciphers studied in this book. The 
other form of symmetric ciphers, stream ciphers, are discussed in Chapter 8. Next, we 
cover full DES. Following this look at a specific algorithm, we return to a more general 
discussion of block cipher design.
Compared to public-key ciphers, such as RSA, the structure of DES and most 
symmetric ciphers is very complex and cannot be explained as easily as RSA and simi-
lar algorithms. Accordingly, the reader may wish to begin with a simplified version of 
DES, which is described in Appendix G. This version allows the reader to perform 
encryption and decryption by hand and gain a good understanding of the working of 
the algorithm details. Classroom experience indicates that a study of this simplified 
version enhances understanding of DES.1
 4.1 TRADITIONAL BLOCK CIPHER STRUCTURE
Several important symmetric block encryption algorithms in current use are based 
on a structure referred to as a Feistel block cipher [FEIS73]. For that reason, it is 
important to examine the design principles of the Feistel cipher. We begin with a 
comparison of stream ciphers and block ciphers. Then we discuss the motivation for 
the Feistel block cipher structure. Finally, we discuss some of its implications.
1However, you may safely skip Appendix G, at least on a first reading. If you get lost or bogged down in 
the details of DES, then you can go back and start with simplified DES.
LEARNING OBJECTIVES
After studying this chapter, you should be able to
 
◆
Understand the distinction between stream ciphers and block ciphers.
 
◆
Present an overview of the Feistel cipher and explain how decryption is 
the inverse of encryption.
 
◆
Present an overview of Data Encryption Standard (DES).
 
◆
Explain the concept of the avalanche effect.
 
◆
Discuss the cryptographic strength of DES.
 
◆
Summarize the principal block cipher design principles.

120  CHAPTER 4 / BLOCK CIPHERS AND THE DATA ENCRYPTION STANDARD
Stream Ciphers and Block Ciphers
A stream cipher is one that encrypts a digital data stream one bit or one byte at a 
time. Examples of classical stream ciphers are the autokeyed Vigenère cipher and 
the Vernam cipher. In the ideal case, a one-time pad version of the Vernam cipher 
would be used (Figure 3.7), in which the keystream (ki) is as long as the plaintext bit 
stream (pi). If the cryptographic keystream is random, then this cipher is unbreakable 
by any means other than acquiring the keystream. However, the keystream must be 
provided to both users in advance via some independent and secure channel. This 
introduces insurmountable logistical problems if the intended data traffic is very large.
Accordingly, for practical reasons, the bit-stream generator must be imple-
mented as an algorithmic procedure, so that the cryptographic bit stream can be 
produced by both users. In this approach (Figure 4.1a), the bit-stream generator is 
a key-controlled algorithm and must produce a bit stream that is cryptographically 
strong. That is, it must be computationally impractical to predict future portions of 
the bit stream based on previous portions of the bit stream. The two users need only 
share the generating key, and each can produce the keystream.
A block cipher is one in which a block of plaintext is treated as a whole and 
used to produce a ciphertext block of equal length. Typically, a block size of 64 or 
Figure 4.1 Stream Cipher and Block Cipher
Bit-stream
generation
algorithm
ENCRYPTION
(a) Stream cipher using algorithmic bit-stream generator
(b) Block cipher
Key
( K )
Encryption
algorithm
Plaintext
b bits
b bits
Key
( K )
ki
Plaintext
(pi)
Plaintext
(pi)
Bit-stream
generation
algorithm
DECRYPTION
Key
( K )
ki
Ciphertext
(ci)
Ciphertext
Decryption
algorithm
Ciphertext
b bits
b bits
Key
( K )
Plaintext

4.1 / TRADITIONAL BLOCK CIPHER STRUCTURE 121
128 bits is used. As with a stream cipher, the two users share a symmetric encryption 
key (Figure 4.1b). Using some of the modes of operation explained in Chapter 7, a 
block cipher can be used to achieve the same effect as a stream cipher.
Far more effort has gone into analyzing block ciphers. In general, they seem 
applicable to a broader range of applications than stream ciphers. The vast majority 
of network-based symmetric cryptographic applications make use of block ciphers. 
Accordingly, the concern in this chapter, and in our discussions throughout the 
book of symmetric encryption, will primarily focus on block ciphers.
Motivation for the Feistel Cipher Structure
A block cipher operates on a plaintext block of n bits to produce a ciphertext block 
of n bits. There are 2n possible different plaintext blocks and, for the encryption 
to be reversible (i.e., for decryption to be possible), each must produce a unique 
ciphertext block. Such a transformation is called reversible, or nonsingular. The fol-
lowing examples illustrate nonsingular and singular transformations for n = 2.
Reversible Mapping
Irreversible Mapping
Plaintext
Ciphertext
Plaintext
Ciphertext

In the latter case, a ciphertext of 01 could have been produced by one of two plain-
text blocks. So if we limit ourselves to reversible mappings, the number of different 
transformations is 2n!.2
Figure 4.2 illustrates the logic of a general substitution cipher for n = 4.  
A 4-bit input produces one of 16 possible input states, which is mapped by the sub-
stitution cipher into a unique one of 16 possible output states, each of which is repre-
sented by 4 ciphertext bits. The encryption and decryption mappings can be defined 
by a tabulation, as shown in Table 4.1. This is the most general form of block cipher 
and can be used to define any reversible mapping between plaintext and ciphertext. 
Feistel refers to this as the ideal block cipher, because it allows for the maximum 
number of possible encryption mappings from the plaintext block [FEIS75].
But there is a practical problem with the ideal block cipher. If a small block 
size, such as n = 4, is used, then the system is equivalent to a classical substitution 
cipher. Such systems, as we have seen, are vulnerable to a statistical analysis of the 
plaintext. This weakness is not inherent in the use of a substitution cipher but rather 
results from the use of a small block size. If n is sufficiently large and an arbitrary 
reversible substitution between plaintext and ciphertext is allowed, then the statisti-
cal characteristics of the source plaintext are masked to such an extent that this type 
of cryptanalysis is infeasible.
2The reasoning is as follows: For the first plaintext, we can choose any of 2n ciphertext blocks. For the 
second plaintext, we choose from among 2n - 1 remaining ciphertext blocks, and so on.

122  CHAPTER 4 / BLOCK CIPHERS AND THE DATA ENCRYPTION STANDARD
An arbitrary reversible substitution cipher (the ideal block cipher) for a large 
block size is not practical, however, from an implementation and performance 
point of view. For such a transformation, the mapping itself constitutes the key. 
Consider again Table 4.1, which defines one particular reversible mapping from 
Figure 4.2 General n-bit-n-bit Block Substitution (shown with n = 4)
4-bit input
4 to 16 decoder
16 to 4 encoder
4-bit output

Table 4.1 Encryption and Decryption Tables for Substitution Cipher of Figure 4.2
Plaintext
Ciphertext

Ciphertext
Plaintext

4.1 / TRADITIONAL BLOCK CIPHER STRUCTURE 123
plaintext to ciphertext for n = 4. The mapping can be defined by the entries in the 
second column, which show the value of the ciphertext for each plaintext block. 
This, in essence, is the key that determines the specific mapping from among all 
possible mappings. In this case, using this straightforward method of defining the 
key, the required key length is (4 bits) * (16 rows) = 64 bits. In general, for an 
n-bit ideal block cipher, the length of the key defined in this fashion is n * 2n bits. 
For a 64-bit block, which is a desirable length to thwart statistical attacks, the 
required key length is 64 * 264 = 270 ≈1021 bits.
In considering these difficulties, Feistel points out that what is needed is an 
approximation to the ideal block cipher system for large n, built up out of compo-
nents that are easily realizable [FEIS75]. But before turning to Feistel’s approach, 
let us make one other observation. We could use the general block substitution 
cipher but, to make its implementation tractable, confine ourselves to a subset of 
the 2n! possible reversible mappings. For example, suppose we define the mapping 
in terms of a set of linear equations. In the case of n = 4, we have
 y1 = k11x1 + k12x2 + k13x3 + k14x4
 y2 = k21x1 + k22x2 + k23x3 + k24x4
 y3 = k31x1 + k32x2 + k33x3 + k34x4
 y4 = k41x1 + k42x2 + k43x3 + k44x4
where the xi are the four binary digits of the plaintext block, the yi are the four bi-
nary digits of the ciphertext block, the kij are the binary coefficients, and arithmetic 
is mod 2. The key size is just n2, in this case 16 bits. The danger with this kind of for-
mulation is that it may be vulnerable to cryptanalysis by an attacker that is aware of 
the structure of the algorithm. In this example, what we have is essentially the Hill 
cipher discussed in Chapter 3, applied to binary data rather than characters. As we 
saw in Chapter 3, a simple linear system such as this is quite vulnerable.
The Feistel Cipher
Feistel proposed [FEIS73] that we can approximate the ideal block cipher by utiliz-
ing the concept of a product cipher, which is the execution of two or more simple 
ciphers in sequence in such a way that the final result or product is cryptographi-
cally stronger than any of the component ciphers. The essence of the approach is 
to develop a block cipher with a key length of k bits and a block length of n bits, 
allowing a total of 2k possible transformations, rather than the 2n! transformations 
available with the ideal block cipher.
In particular, Feistel proposed the use of a cipher that alternates substitutions 
and permutations, where these terms are defined as follows:
 
■Substitution: Each plaintext element or group of elements is uniquely  replaced 
by a corresponding ciphertext element or group of elements.
 
■Permutation: A sequence of plaintext elements is replaced by a permutation 
of that sequence. That is, no elements are added or deleted or replaced in the 
sequence, rather the order in which the elements appear in the sequence is 
changed.

124  CHAPTER 4 / BLOCK CIPHERS AND THE DATA ENCRYPTION STANDARD
In fact, Feistel’s is a practical application of a proposal by Claude Shannon 
to develop a product cipher that alternates confusion and diffusion functions 
[SHAN49].3 We look next at these concepts of diffusion and confusion and then 
present the Feistel cipher. But first, it is worth commenting on this remarkable fact: 
The Feistel cipher structure, which dates back over a quarter century and which, in 
turn, is based on Shannon’s proposal of 1945, is the structure used by a number of 
significant symmetric block ciphers currently in use. In particular, the Feistel struc-
ture is used for Triple Data Encryption Algorithm (TDEA), which is one of the two 
encryption algorithms (along with AES), approved for general use by the National 
Institute of Standards and Technology (NIST). The Feistel structure is also used for 
several schemes for format-preserving encryption, which have recently come into 
prominence. In addition, the Camellia block cipher is a Feistel structure; it is one 
of the possible symmetric ciphers in TLS and a number of other Internet security 
protocols. Both TDEA and format-preserving encryption are covered in Chapter 7. 
DIFFUSION AND CONFUSION The terms diffusion and confusion were introduced by 
Claude Shannon to capture the two basic building blocks for any cryptographic sys-
tem [SHAN49]. Shannon’s concern was to thwart cryptanalysis based on statisti-
cal analysis. The reasoning is as follows. Assume the attacker has some knowledge 
of the statistical characteristics of the plaintext. For example, in a human-readable 
message in some language, the frequency distribution of the various letters may be 
known. Or there may be words or phrases likely to appear in the message (probable 
words). If these statistics are in any way reflected in the ciphertext, the cryptanalyst 
may be able to deduce the encryption key, part of the key, or at least a set of keys 
likely to contain the exact key. In what Shannon refers to as a strongly ideal cipher, 
all statistics of the ciphertext are independent of the particular key used. The arbi-
trary substitution cipher that we discussed previously (Figure 4.2) is such a cipher, 
but as we have seen, it is impractical.4
Other than recourse to ideal systems, Shannon suggests two methods for 
frustrating statistical cryptanalysis: diffusion and confusion. In diffusion, the sta-
tistical structure of the plaintext is dissipated into long-range statistics of the 
ciphertext. This is achieved by having each plaintext digit affect the value of many 
ciphertext digits; generally, this is equivalent to having each ciphertext digit be 
affected by many plaintext digits. An example of diffusion is to encrypt a message 
M = m1, m2, m3, c of characters with an averaging operation:
 
yn = ¢ a
k
i=1
mn+i≤ mod 26 
3The paper is available at box.com/Crypto7e. Shannon’s 1949 paper appeared originally as a classified 
report in 1945. Shannon enjoys an amazing and unique position in the history of computer and informa-
tion science. He not only developed the seminal ideas of modern cryptography but is also responsible for 
inventing the discipline of information theory. Based on his work in information theory, he developed 
a formula for the capacity of a data communications channel, which is still used today. In addition, he 
founded another discipline, the application of Boolean algebra to the study of digital circuits; this last he 
managed to toss off as a master’s thesis.
4Appendix F expands on Shannon’s concepts concerning measures of secrecy and the security of crypto-
graphic algorithms.

4.1 / TRADITIONAL BLOCK CIPHER STRUCTURE 125
adding k successive letters to get a ciphertext letter yn. One can show that the sta-
tistical structure of the plaintext has been dissipated. Thus, the letter frequencies in 
the ciphertext will be more nearly equal than in the plaintext; the digram frequen-
cies will also be more nearly equal, and so on. In a binary block cipher, diffusion can 
be achieved by repeatedly performing some permutation on the data followed by 
applying a function to that permutation; the effect is that bits from different posi-
tions in the original plaintext contribute to a single bit of ciphertext.5
Every block cipher involves a transformation of a block of plaintext into a 
block of ciphertext, where the transformation depends on the key. The mechanism 
of diffusion seeks to make the statistical relationship between the plaintext and 
ciphertext as complex as possible in order to thwart attempts to deduce the key. On 
the other hand, confusion seeks to make the relationship between the statistics of 
the ciphertext and the value of the encryption key as complex as possible, again to 
thwart attempts to discover the key. Thus, even if the attacker can get some handle 
on the statistics of the ciphertext, the way in which the key was used to produce that 
ciphertext is so complex as to make it difficult to deduce the key. This is achieved by 
the use of a complex substitution algorithm. In contrast, a simple linear substitution 
function would add little confusion.
As [ROBS95b] points out, so successful are diffusion and confusion in captur-
ing the essence of the desired attributes of a block cipher that they have become the 
cornerstone of modern block cipher design.
FEISTEL CIPHER STRUCTURE The left-hand side of Figure 4.3 depicts the encryption 
structure proposed by Feistel. The inputs to the encryption algorithm are a plaintext 
block of length 2w bits and a key K. The plaintext block is divided into two halves, 
LE0 and RE0. The two halves of the data pass through n rounds of processing and 
then combine to produce the ciphertext block. Each round i has as inputs LEi-1 and 
REi-1 derived from the previous round, as well as a subkey Ki derived from the over-
all K. In general, the subkeys Ki are different from K and from each other. In Figure 
4.3, 16 rounds are used, although any number of rounds could be implemented.
All rounds have the same structure. A substitution is performed on the left 
half of the data. This is done by applying a round function F to the right half of the 
data and then taking the exclusive-OR of the output of that function and the left 
half of the data. The round function has the same general structure for each round 
but is parameterized by the round subkey Ki. Another way to express this is to say 
that F is a function of right-half block of w bits and a subkey of y bits, which pro-
duces an output value of length w bits: F(REi, Ki+1). Following this substitution, a 
permutation is performed that consists of the interchange of the two halves of the 
data.6 This structure is a particular form of the substitution-permutation network 
(SPN) proposed by Shannon.
5Some books on cryptography equate permutation with diffusion. This is incorrect. Permutation, by itself, 
does not change the statistics of the plaintext at the level of individual letters or permuted blocks. For exam-
ple, in DES, the permutation swaps two 32-bit blocks, so statistics of strings of 32 bits or less are preserved.
6The final round is followed by an interchange that undoes the interchange that is part of the final round. 
One could simply leave both interchanges out of the diagram, at the sacrifice of some consistency of pre-
sentation. In any case, the effective lack of a swap in the final round is done to simplify the implementa-
tion of the decryption process, as we shall see.

126  CHAPTER 4 / BLOCK CIPHERS AND THE DATA ENCRYPTION STANDARD
The exact realization of a Feistel network depends on the choice of the follow-
ing parameters and design features:
 
■Block size: Larger block sizes mean greater security (all other things being 
equal) but reduced encryption/decryption speed for a given algorithm. The 
greater security is achieved by greater diffusion. Traditionally, a block size of 
64 bits has been considered a reasonable tradeoff and was nearly universal in 
block cipher design. However, the new AES uses a 128-bit block size.
Figure 4.3 Feistel Encryption and Decryption (16 rounds)
Output (ciphertext)
K1
LD0 = RE16
RD0 = LE16
LD2 = RE14
RD2 = LE14
LD14 = RE2
RD14 = LE2
LD16 = RE0
LD17 = RE0
RD16 = LE0
RD17 = LE0
RD1 = LE15
LD1 = RE15
RD15 = LE1
LD15 = RE1
Input (ciphertext)
Output (plaintext)
Round 1
K1
K2
K15
K16
K2
K15
K16
F
LE0
RE0
Input (plaintext)
LE1
RE1
LE2
RE2
F
F
LE14
RE14
LE15
RE15
LE16
RE16
LE17
RE17
F
F
F
F
F
Round 2
Round 15
Round 16
Round 16
Round 15
Round 2
Round 1

4.1 / TRADITIONAL BLOCK CIPHER STRUCTURE 127
 
■Key size: Larger key size means greater security but may decrease encryption/
decryption speed. The greater security is achieved by greater resistance to 
brute-force attacks and greater confusion. Key sizes of 64 bits or less are now 
widely considered to be inadequate, and 128 bits has become a common size.
 
■Number of rounds: The essence of the Feistel cipher is that a single round 
offers inadequate security but that multiple rounds offer increasing security. 
A typical size is 16 rounds.
 
■Subkey generation algorithm: Greater complexity in this algorithm should 
lead to greater difficulty of cryptanalysis.
 
■Round function F: Again, greater complexity generally means greater resis-
tance to cryptanalysis.
There are two other considerations in the design of a Feistel cipher:
 
■Fast software encryption/decryption: In many cases, encryption is embedded 
in applications or utility functions in such a way as to preclude a hardware im-
plementation. Accordingly, the speed of execution of the algorithm becomes a 
concern.
 
■Ease of analysis: Although we would like to make our algorithm as difficult as 
possible to cryptanalyze, there is great benefit in making the algorithm easy 
to analyze. That is, if the algorithm can be concisely and clearly explained, it is 
easier to analyze that algorithm for cryptanalytic vulnerabilities and therefore 
develop a higher level of assurance as to its strength. DES, for example, does 
not have an easily analyzed functionality.
FEISTEL DECRYPTION ALGORITHM The process of decryption with a Feistel cipher 
is essentially the same as the encryption process. The rule is as follows: Use the 
ciphertext as input to the algorithm, but use the subkeys Ki in reverse order. That 
is, use Kn in the first round, Kn-1 in the second round, and so on, until K1 is used in 
the last round. This is a nice feature, because it means we need not implement two 
different algorithms; one for encryption and one for decryption.
To see that the same algorithm with a reversed key order produces the cor-
rect result, Figure 4.3 shows the encryption process going down the left-hand side 
and the decryption process going up the right-hand side for a 16-round algorithm. 
For clarity, we use the notation LEi and REi for data traveling through the encryp-
tion algorithm and LDi and RDi for data traveling through the decryption algo-
rithm. The diagram indicates that, at every round, the intermediate value of the 
decryption process is equal to the corresponding value of the encryption process 
with the two halves of the value swapped. To put this another way, let the output 
of the ith encryption round be LEi‘REi (LEi concatenated with REi). Then the cor-
responding output of the (16 - i)th decryption round is REi‘LEi or, equivalently, 
LD16-i‘RD16-i.
Let us walk through Figure 4.3 to demonstrate the validity of the preceding 
assertions. After the last iteration of the encryption process, the two halves of the 
output are swapped, so that the ciphertext is RE16‘LE16. The output of that round 
is the ciphertext. Now take that ciphertext and use it as input to the same algorithm. 
The input to the first round is RE16‘LE16, which is equal to the 32-bit swap of the 
output of the sixteenth round of the encryption process.

128  CHAPTER 4 / BLOCK CIPHERS AND THE DATA ENCRYPTION STANDARD
Now we would like to show that the output of the first round of the decryption 
process is equal to a 32-bit swap of the input to the sixteenth round of the encryp-
tion process. First, consider the encryption process. We see that
 LE16 = RE15
 RE16 = LE15 ⊕F(RE15, K16)
On the decryption side,
 LD1 = RD0 = LE16 = RE15
 RD1 = LD0 ⊕F(RD0, K16)
 = RE16 ⊕F(RE15, K16)
 = [LE15 ⊕F(RE15, K16)] ⊕F(RE15, K16)
The XOR has the following properties:
 [A ⊕B] ⊕C = A ⊕[B ⊕C]
 D ⊕D = 0
 E ⊕0 = E
Thus, we have LD1 = RE15 and RD1 = LE15. Therefore, the output of the first 
round of the decryption process is RE15‘LE15, which is the 32-bit swap of the input 
to the sixteenth round of the encryption. This correspondence holds all the way 
through the 16 iterations, as is easily shown. We can cast this process in general 
terms. For the ith iteration of the encryption algorithm,
 LEi = REi-1
 REi = LEi-1 ⊕F(REi-1, Ki)
Rearranging terms:
 REi-1 = LEi
 LEi-1 = REi ⊕F(REi-1, Ki) = REi ⊕F(LEi, Ki)
Thus, we have described the inputs to the ith iteration as a function of the outputs, and 
these equations confirm the assignments shown in the right-hand side of Figure 4.3.
Finally, we see that the output of the last round of the decryption process is 
RE0‘LE0. A 32-bit swap recovers the original plaintext, demonstrating the validity 
of the Feistel decryption process.
Note that the derivation does not require that F be a reversible function. To 
see this, take a limiting case in which F produces a constant output (e.g., all ones) 
regardless of the values of its two arguments. The equations still hold.
To help clarify the preceding concepts, let us look at a specific example 
(Figure 4.4 and focus on the fifteenth round of encryption, corresponding to the sec-
ond round of decryption. Suppose that the blocks at each stage are 32 bits (two 16-bit 
halves) and that the key size is 24 bits. Suppose that at the end of encryption round 
fourteen, the value of the intermediate block (in hexadecimal) is DE7F03A6. Then 
LE14 = DE7F and RE14 = 03A6. Also assume that the value of K15 is 12DE52. 
After round 15, we have LE15 = 03A6 and RE15 = F(03A6, 12DE52) ⊕DE7F.

4.2 / THE DATA ENCRYPTION STANDARD 129
Now let’s look at the decryption. We assume that LD1 = RE15 and 
RD1 = LE15, as shown in Figure 4.3, and we want to demonstrate that LD2 = RE14 
and RD2 = LE14. So, we start with LD1 = F(03A6, 12DE52) ⊕DE7F and 
RD1 = 03A6. Then, from Figure 4.3, LD2 = 03A6 = RE14 and RD2 =
F(03A6, 12DE52) ⊕[F(03A6, 12DE52) ⊕DE7F] = DE7F = LE14.
 4.2 THE DATA ENCRYPTION STANDARD
Until the introduction of the Advanced Encryption Standard (AES) in 2001, the 
Data Encryption Standard (DES) was the most widely used encryption scheme. 
DES was issued in 1977 by the National Bureau of Standards, now the National 
Institute of Standards and Technology (NIST), as Federal Information Processing 
Standard 46 (FIPS PUB 46). The algorithm itself is referred to as the Data 
Encryption Algorithm (DEA).7 For DEA, data are encrypted in 64-bit blocks using 
a 56-bit key. The algorithm transforms 64-bit input in a series of steps into a 64-bit 
output. The same steps, with the same key, are used to reverse the encryption.
Over the years, DES became the dominant symmetric encryption algorithm, 
especially in financial applications. In 1994, NIST reaffirmed DES for federal use 
for another five years; NIST recommended the use of DES for applications other 
than the protection of classified information. In 1999, NIST issued a new version 
of its standard (FIPS PUB 46-3) that indicated that DES should be used only 
for legacy systems and that triple DES (which in essence involves repeating the 
DES algorithm three times on the plaintext using two or three different keys to 
produce the ciphertext) be used. We study triple DES in Chapter 7. Because the 
underlying encryption and decryption algorithms are the same for DES and triple 
DES, it remains important to understand the DES cipher. This section provides an 
overview.For the interested reader, Appendix S provides further detail.
7The terminology is a bit confusing. Until recently, the terms DES and DEA could be used interchange-
ably. However, the most recent edition of the DES document includes a specification of the DEA 
described here plus the triple DEA (TDEA) described in Chapter 7. Both DEA and TDEA are part of 
the Data Encryption Standard. Further, until the recent adoption of the official term TDEA, the triple 
DEA algorithm was typically referred to as triple DES and written as 3DES. For the sake of convenience, 
we will use the term 3DES.
Figure 4.4 Feistel Example
12DE52
12DE52
F
DE7F
03A6
Decryption round
Encryption round
03A6

A

A

F(03A6, 12DE52)     DE7F
F(03A6, 12DE52)     DE7F
F(03A6, 12DE52)     
[F(03A6, 12DE52)     DE7F]
= DE7F
F
Round 15
Round 2

130  CHAPTER 4 / BLOCK CIPHERS AND THE DATA ENCRYPTION STANDARD
DES Encryption
The overall scheme for DES encryption is illustrated in Figure 4.5. As with any 
encryption scheme, there are two inputs to the encryption function: the plaintext to 
be encrypted and the key. In this case, the plaintext must be 64 bits in length and the 
key is 56 bits in length.8
Looking at the left-hand side of the figure, we can see that the processing 
of the plaintext proceeds in three phases. First, the 64-bit plaintext passes through 
an initial permutation (IP) that rearranges the bits to produce the permuted input. 
8Actually, the function expects a 64-bit key as input. However, only 56 of these bits are ever used; the 
other 8 bits can be used as parity bits or simply set arbitrarily.
Figure 4.5 General Depiction of DES Encryption Algorithm
Initial permutation
Permuted choice 2
Round 1
32-bit swap
Inverse initial
permutation
Permuted choice 1
Round 2
Round 16
64-bit plaintext
64-bit key
K1
K2
K16
64-bit ciphertext
Left circular shift
Permuted choice 2
Left circular shift
Permuted choice 2
Left circular shift

64 bits 
% % % % % % % % %
% % % % % % % % %
% % % % % % % % %

4.3 / A DES EXAMPLE 131
This is followed by a phase consisting of sixteen rounds of the same function, which 
involves both permutation and substitution functions. The output of the last (six-
teenth) round consists of 64 bits that are a function of the input plaintext and the 
key. The left and right halves of the output are swapped to produce the preoutput. 
Finally, the preoutput is passed through a permutation [IP-1] that is the inverse of 
the initial permutation function, to produce the 64-bit ciphertext. With the excep-
tion of the initial and final permutations, DES has the exact structure of a Feistel 
cipher, as shown in Figure 4.3.
The right-hand portion of Figure 4.5 shows the way in which the 56-bit key is 
used. Initially, the key is passed through a permutation function. Then, for each of 
the sixteen rounds, a subkey (Ki) is produced by the combination of a left circular 
shift and a permutation. The permutation function is the same for each round, but a 
different subkey is produced because of the repeated shifts of the key bits.
DES Decryption
As with any Feistel cipher, decryption uses the same algorithm as encryption, except 
that the application of the subkeys is reversed. Additionally, the initial and final 
permutations are reversed.
 4.3 A DES EXAMPLE
We now work through an example and consider some of its implications. Although 
you are not expected to duplicate the example by hand, you will find it informative 
to study the hex patterns that occur from one step to the next.
For this example, the plaintext is a hexadecimal palindrome. The plaintext, 
key, and resulting ciphertext are as follows:
Plaintext:
02468aceeca86420
Key:
0f1571c947d9e859
Ciphertext:
da02ce3a89ecac3b
Results
Table 4.2 shows the progression of the algorithm. The first row shows the 32-bit 
values of the left and right halves of data after the initial permutation. The next 16 
rows show the results after each round. Also shown is the value of the 48-bit subkey 
generated for each round. Note that Li = Ri-1. The final row shows the left- and 
right-hand values after the inverse initial permutation. These two values combined 
form the ciphertext.
The Avalanche Effect
A desirable property of any encryption algorithm is that a small change in either 
the plaintext or the key should produce a significant change in the ciphertext. In 
particular, a change in one bit of the plaintext or one bit of the key should produce 

132  CHAPTER 4 / BLOCK CIPHERS AND THE DATA ENCRYPTION STANDARD
a change in many bits of the ciphertext. This is referred to as the avalanche effect. 
If the change were small, this might provide a way to reduce the size of the plaintext 
or key space to be searched.
Using the example from Table 4.2, Table 4.3 shows the result when the fourth 
bit of the plaintext is changed, so that the plaintext is 12468aceeca86420. The 
second column of the table shows the intermediate 64-bit values at the end of each 
round for the two plaintexts. The third column shows the number of bits that differ 
between the two intermediate values. The table shows that, after just three rounds, 
18 bits differ between the two blocks. On completion, the two ciphertexts differ in 
32 bit positions.
Table 4.4 shows a similar test using the original plaintext of with two keys that 
differ in only the fourth bit position: the original key, 0f1571c947d9e859, and 
the altered key, 1f1571c947d9e859. Again, the results show that about half of 
the bits in the ciphertext differ and that the avalanche effect is pronounced after just 
a few rounds.
Round
Ki
Li
Ri
IP
5a005a00
3cf03c0f

1e030f03080d2930
3cf03c0f
bad22845

0a31293432242318
bad22845
99e9b723

23072318201d0c1d
99e9b723
0bae3b9e

05261d3824311a20
0bae3b9e

3325340136002c25

18b3fa41

123a2d0d04262a1c
18b3fa41
9616fe23

021f120b1c130611
9616fe23
67117cf2

1c10372a2832002b
67117cf2
c11bfc09

04292a380c341f03
c11bfc09
887fbc6c

887fbc6c
600f7e8b

2826390c31261504
600f7e8b
f596506e

12071c241a0a0f08
f596506e
738538b8

300935393c0d100b
738538b8
c6a62c4e

311e09231321182a
c6a62c4e
56b0bd75

283d3e0227072528
56b0bd75
75e8fd8f

2921080b13143025
75e8fd8f

IP −1
da02ce3a
89ecac3b
Note: DES subkeys are shown as eight 6-bit values in hex format
Table 4.2 DES Example

4.3 / A DES EXAMPLE 133
Table 4.3 Avalanche Effect in DES: Change in Plaintext
Round
D

c11bfc09887fbc6c
99f911532eed7d94

887fbc6c600f7e8b
2eed7d94d0f23094

600f7e8bf596506e
d0f23094455da9c4

f596506e738538b8
455da9c47f6e3cf3

738538b8c6a62c4e
7f6e3cf34bc1a8d9

c6a62c4e56b0bd75
4bc1a8d91e07d409

56b0bd7575e8fd8f
1e07d4091ce2e6dc

75e8fd8f25896490
1ce2e6dc365e5f59

IP −1
da02ce3a89ecac3b
057cde97d7683f2a

Round
D
02468aceeca86420
12468aceeca86420

3cf03c0fbad22845
3cf03c0fbad32845

bad2284599e9b723
bad3284539a9b7a3

99e9b7230bae3b9e
39a9b7a3171cb8b3

0bae3b9e42415649
171cb8b3ccaca55e

4241564918b3fa41
ccaca55ed16c3653

18b3fa419616fe23
d16c3653cf402c68

9616fe2367117cf2
cf402c682b2cefbc

67117cf2c11bfc09
2b2cefbc99f91153

Table 4.4 Avalanche Effect in DES: Change in Key
Round
D
02468aceeca86420
02468aceeca86420

3cf03c0fbad22845
3cf03c0f9ad628c5

bad2284599e9b723
9ad628c59939136b

99e9b7230bae3b9e
9939136b768067b7

0bae3b9e42415649
768067b75a8807c5

4241564918b3fa41
5a8807c5488dbe94

18b3fa419616fe23
488dbe94aba7fe53

9616fe2367117cf2
aba7fe53177d21e4

67117cf2c11bfc09
177d21e4548f1de4

Round
D

c11bfc09887fbc6c
548f1de471f64dfd

887fbc6c600f7e8b
71f64dfd4279876c

600f7e8bf596506e
4279876c399fdc0d

f596506e738538b8
399fdc0d6d208dbb

738538b8c6a62c4e
6d208dbbb9bdeeaa

c6a62c4e56b0bd75
b9bdeeaad2c3a56f

56b0bd7575e8fd8f
d2c3a56f2765c1fb

75e8fd8f25896490
2765c1fb01263dc4

IP −1
da02ce3a89ecac3b
ee92b50606b62b0b

134  CHAPTER 4 / BLOCK CIPHERS AND THE DATA ENCRYPTION STANDARD
 4.4 THE STRENGTH OF DES
Since its adoption as a federal standard, there have been lingering concerns about 
the level of security provided by DES. These concerns, by and large, fall into two 
areas: key size and the nature of the algorithm.
The Use of 56-Bit Keys
With a key length of 56 bits, there are 256 possible keys, which is approximately 
7.2 * 1016 keys. Thus, on the face of it, a brute-force attack appears impractical. 
Assuming that, on average, half the key space has to be searched, a single machine 
performing one DES encryption per microsecond would take more than a thousand 
years to break the cipher.
However, the assumption of one encryption per microsecond is overly con-
servative. As far back as 1977, Diffie and Hellman postulated that the technology 
existed to build a parallel machine with 1 million encryption devices, each of which 
could perform one encryption per microsecond [DIFF77]. This would bring the 
average search time down to about 10 hours. The authors estimated that the cost 
would be about $20 million in 1977 dollars.
With current technology, it is not even necessary to use special, purpose-built 
hardware. Rather, the speed of commercial, off-the-shelf processors threaten the 
security of DES. A recent paper from Seagate Technology [SEAG08] suggests that 
a rate of 1 billion (109) key combinations per second is reasonable for today’s mul-
ticore computers. Recent offerings confirm this. Both Intel and AMD now offer 
hardware-based instructions to accelerate the use of AES. Tests run on a contem-
porary multicore Intel machine resulted in an encryption rate of about half a bil-
lion encryptions per second [BASU12]. Another recent analysis suggests that with 
contemporary supercomputer technology, a rate of 1013 encryptions per second is 
reasonable [AROR12].
With these results in mind, Table 4.5 shows how much time is required for a 
brute-force attack for various key sizes. As can be seen, a single PC can break DES in 
about a year; if multiple PCs work in parallel, the time is drastically shortened. And 
today’s supercomputers should be able to find a key in about an hour. Key sizes of 
128 bits or greater are effectively unbreakable using simply a brute-force approach. 
Even if we managed to speed up the attacking system by a factor of 1  trillion (1012), 
it would still take over 100,000 years to break a code using a 128-bit key.
Fortunately, there are a number of alternatives to DES, the most important of 
which are AES and triple DES, discussed in Chapters 6 and 7, respectively.
The Nature of the DES Algorithm
Another concern is the possibility that cryptanalysis is possible by exploiting 
the characteristics of the DES algorithm. The focus of concern has been on the 
eight substitution tables, or S-boxes, that are used in each iteration (described in 
Appendix S). Because the design criteria for these boxes, and indeed for the entire 
algorithm, were not made public, there is a suspicion that the boxes were con-
structed in such a way that cryptanalysis is possible for an opponent who knows 

4.5 / BLOCK CIPHER DESIGN PRINCIPLES 135
Key Size (bits)
Cipher
Number of 
Alternative 
Keys
Time Required at 109 
Decryptions/s
Time Required 
at 1013 
Decryptions/s

DES
256 ≈7.2 * 1016
255 ns = 1.125 years
1 hour

AES
2128 ≈3.4 * 1038
2127 ns = 5.3 * 1021 years
5.3 * 1017 years

Triple DES
2168 ≈3.7 * 1050
2167 ns = 5.8 * 1033 years
5.8 * 1029 years

AES
2192 ≈6.3 * 1057
2191 ns = 9.8 * 1040 years
9.8 * 1036 years

AES
2256 ≈1.2 * 1077
2255 ns = 1.8 * 1060 years
1.8 * 1056 years
26 characters 
(permutation)
Monoalphabetic
2! = 4 * 1026
2 * 1026 ns = 6.3 * 109 years
6.3 * 106 years
Table 4.5 Average Time Required for Exhaustive Key Search
the weaknesses in the S-boxes. This assertion is tantalizing, and over the years a 
number of regularities and unexpected behaviors of the S-boxes have been discov-
ered. Despite this, no one has so far succeeded in discovering the supposed fatal 
 weaknesses in the S-boxes.9
Timing Attacks
We discuss timing attacks in more detail in Part Two, as they relate to public-key 
algorithms. However, the issue may also be relevant for symmetric ciphers. In 
essence, a timing attack is one in which information about the key or the plaintext is 
obtained by observing how long it takes a given implementation to perform decryp-
tions on various ciphertexts. A timing attack exploits the fact that an encryption 
or decryption algorithm often takes slightly different amounts of time on different 
inputs. [HEVI99] reports on an approach that yields the Hamming weight (number 
of bits equal to one) of the secret key. This is a long way from knowing the actual 
key, but it is an intriguing first step. The authors conclude that DES appears to be 
fairly resistant to a successful timing attack but suggest some avenues to explore. 
Although this is an interesting line of attack, it so far appears unlikely that this tech-
nique will ever be successful against DES or more powerful symmetric ciphers such 
as triple DES and AES.
 4.5 BLOCK CIPHER DESIGN PRINCIPLES
Although much progress has been made in designing block ciphers that are cryp-
tographically strong, the basic principles have not changed all that much since the 
work of Feistel and the DES design team in the early 1970s. In this section we look 
at three critical aspects of block cipher design: the number of rounds, design of the 
function F, and key scheduling.
9At least, no one has publicly acknowledged such a discovery.

136  CHAPTER 4 / BLOCK CIPHERS AND THE DATA ENCRYPTION STANDARD
Number of Rounds
The cryptographic strength of a Feistel cipher derives from three aspects of the 
design: the number of rounds, the function F, and the key schedule algorithm. Let 
us look first at the choice of the number of rounds.
The greater the number of rounds, the more difficult it is to perform crypt-
analysis, even for a relatively weak F. In general, the criterion should be that the 
number of rounds is chosen so that known cryptanalytic efforts require greater 
effort than a simple brute-force key search attack. This criterion was certainly used 
in the design of DES. Schneier [SCHN96] observes that for 16-round DES, a dif-
ferential cryptanalysis attack is slightly less efficient than brute force: The differen-
tial cryptanalysis attack requires 255.1 operations,10 whereas brute force requires 255. 
If DES had 15 or fewer rounds, differential cryptanalysis would require less effort 
than a brute-force key search.
This criterion is attractive, because it makes it easy to judge the strength of 
an algorithm and to compare different algorithms. In the absence of a cryptana-
lytic breakthrough, the strength of any algorithm that satisfies the criterion can be 
judged solely on key length.
Design of Function F
The heart of a Feistel block cipher is the function F, which provides the element of 
confusion in a Feistel cipher. Thus, it must be difficult to “unscramble” the substitu-
tion performed by F. One obvious criterion is that F be nonlinear, as we discussed 
previously. The more nonlinear F, the more difficult any type of cryptanalysis will be. 
There are several measures of nonlinearity, which are beyond the scope of this 
book. In rough terms, the more difficult it is to approximate F by a set of linear 
equations, the more nonlinear F is.
Several other criteria should be considered in designing F. We would like the 
algorithm to have good avalanche properties. Recall that, in general, this means that 
a change in one bit of the input should produce a change in many bits of the output. 
A more stringent version of this is the strict avalanche criterion (SAC) [WEBS86], 
which states that any output bit j of an S-box (see Appendix S for a discussion of 
S-boxes) should change with probability 1/2 when any single input bit i is inverted 
for all i, j. Although SAC is expressed in terms of S-boxes, a similar criterion could 
be applied to F as a whole. This is important when considering designs that do not 
include S-boxes.
Another criterion proposed in [WEBS86] is the bit independence criterion 
(BIC), which states that output bits j and k should change independently when any 
single input bit i is inverted for all i, j, and k. The SAC and BIC criteria appear to 
strengthen the effectiveness of the confusion function.
10Differential cryptanalysis of DES requires 247 chosen plaintext. If all you have to work with is known 
plaintext, then you must sort through a large quantity of known plaintext–ciphertext pairs looking for the 
useful ones. This brings the level of effort up to 255.1.

4.6 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS 137
Key Schedule Algorithm
With any Feistel block cipher, the key is used to generate one subkey for each round. 
In general, we would like to select subkeys to maximize the difficulty of deducing 
individual subkeys and the difficulty of working back to the main key. No general 
principles for this have yet been promulgated.
Adams suggests [ADAM94] that, at minimum, the key schedule should guar-
antee key/ciphertext Strict Avalanche Criterion and Bit Independence Criterion.
 4.6 KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS
Key Terms 
avalanche effect
block cipher
confusion
Data Encryption Standard 
(DES)
diffusion
Feistel cipher
irreversible mapping
key
permutation
product cipher
reversible mapping
round
round function
subkey
substitution
Review Questions 
 
4.1 
Briefly define a nonsingular transformation.
 
4.2 
What is the difference between a block cipher and a stream cipher?
 
4.3 
Why is it not practical to use an arbitrary reversible substitution cipher of the kind 
shown in Table 4.1?
 
4.4 
Briefly define the terms substitution and permutation.
 
4.5 
What is the difference between diffusion and confusion?
 
4.6 
Which parameters and design choices determine the actual algorithm of a Feistel 
cipher?
 
4.7 
What are the critical aspects of Feistel cipher design?
Problems 
 
4.1 
a.  In Section 4.1, under the subsection on the motivation for the Feistel cipher struc-
ture, it was stated that, for a block of n bits, the number of different reversible 
mappings for the ideal block cipher is 2n!. Justify.
b. In that same discussion, it was stated that for the ideal block cipher, which allows all 
possible reversible mappings, the size of the key is n * 2n bits. But, if there are 2n! 
possible mappings, it should take log2 2n! bits to discriminate among the different 
mappings, and so the key length should be log2 2n!. However, log2 2n! 6 n * 2n. 
Explain the discrepancy.

---

## Module 2 Textbook

258  CHAPTER 8 / RANDOM BIT GENERATION AND STREAM CIPHERS
cryptanalysis. Thus, cryptographic algorithms can serve as the core of PRNGs. 
Three broad categories of cryptographic algorithms are commonly used to 
 create PRNGs:
–Symmetric block ciphers: This approach is discussed in Section 8.3.
–Asymmetric ciphers: The number theoretic concepts used for an asymmet-
ric cipher can also be adapted for a PRNG; this approach is examined in 
Chapter 10.
–Hash functions and message authentication codes: This approach is exam-
ined in Chapter 12.
Any of these approaches can yield a cryptographically strong PRNG. 
A  purpose-built algorithm may be provided by an operating system for general use. 
For applications that already use certain cryptographic algorithms for encryption or 
 authentication, it makes sense to reuse the same code for the PRNG. Thus, all of 
these approaches are in common use.
 8.2 PSEUDORANDOM NUMBER GENERATORS
In this section, we look at two types of algorithms for PRNGs.
Linear Congruential Generators
A widely used technique for pseudorandom number generation is an algorithm first 
proposed by Lehmer [LEHM51], which is known as the linear congruential method. 
The algorithm is parameterized with four numbers, as follows:
m
the modulus
m 7 0
a
the multiplier
0 6 a 6 m
c
the increment
0 … c 6 m
X0
the starting value, or seed
0 … X0 6 m
The sequence of random numbers {Xn} is obtained via the following iterative 
equation:
 
Xn+1 = (aXn + c) mod m 
If m, a, c, and X0 are integers, then this technique will produce a sequence of inte-
gers with each integer in the range 0 … Xn 6 m.
The selection of values for a, c, and m is critical in developing a good ran-
dom number generator. For example, consider a = c = 1. The sequence produced 
is obviously not satisfactory. Now consider the values a = 7, c = 0, m = 32, and 
X0 = 1. This generates the sequence {7, 17, 23, 1, 7, etc.}, which is also clearly 
 unsatisfactory. Of the 32 possible values, only four are used; thus, the sequence 
is said to have a period of 4. If, instead, we change the value of a to 5, then the 
 sequence is {5, 25, 29, 17, 21, 9, 13, 1, 5, etc. }, which increases the period to 8.
We would like m to be very large, so that there is the potential for producing 
a long series of distinct random numbers. A common criterion is that m be nearly 
MODULE 2

8.2 / PSEUDORANDOM NUMBER GENERATORS 259
equal to the maximum representable nonnegative integer for a given computer. 
Thus, a value of m near to or equal to 231 is typically chosen.
[PARK88] proposes three tests to be used in evaluating a random number 
generator:
T1:
The function should be a full-period generating function. That is, the function 
should generate all the numbers from 0 through m - 1 before repeating.
T2:
The generated sequence should appear random.
T3:
The function should implement efficiently with 32-bit arithmetic.
With appropriate values of a, c, and m, these three tests can be passed. With 
respect to T1, it can be shown that if m is prime and c = 0, then for certain values 
of a the period of the generating function is m - 1, with only the value 0 missing. 
For 32-bit arithmetic, a convenient prime value of m is 231 - 1. Thus, the generating 
function becomes
 
Xn+1 = (aXn) mod (231 - 1) 
Of the more than 2 billion possible choices for a, only a handful of multipliers 
pass all three tests. One such value is a = 75 = 16807, which was originally selected 
for use in the IBM 360 family of computers [LEWI69]. This generator is widely 
used and has been subjected to a more thorough testing than any other PRNG. It is 
 frequently recommended for statistical and simulation work (e.g., [JAIN91]).
The strength of the linear congruential algorithm is that if the multiplier and 
modulus are properly chosen, the resulting sequence of numbers will be statistically 
indistinguishable from a sequence drawn at random (but without replacement) from 
the set 1, 2, c , m - 1. But there is nothing random at all about the algorithm, apart 
from the choice of the initial value X0. Once that value is chosen, the remaining num-
bers in the sequence follow deterministically. This has implications for cryptanalysis.
If an opponent knows that the linear congruential algorithm is being used and 
if the parameters are known (e.g., a = 75, c = 0, m = 231 - 1), then once a single 
number is discovered, all subsequent numbers are known. Even if the opponent 
knows only that a linear congruential algorithm is being used, knowledge of a small 
part of the sequence is sufficient to determine the parameters of the algorithm. 
Suppose that the opponent is able to determine values for X0, X1, X2, and X3. Then
 X1 = (aX0 + c) mod m
 X2 = (aX1 + c) mod m
 X3 = (aX2 + c) mod m
These equations can be solved for a, c, and m.
Thus, although it is nice to be able to use a good PRNG, it is desirable to make 
the actual sequence used nonreproducible, so that knowledge of part of the se-
quence on the part of an opponent is insufficient to determine future elements of the 
sequence. This goal can be achieved in a number of ways. For example, [BRIG79] 
suggests using an internal system clock to modify the random number stream. One 
way to use the clock would be to restart the sequence after every N numbers using 
the current clock value (mod m) as the new seed. Another way would be simply to 
add the current clock value to each random number (mod m).

260  CHAPTER 8 / RANDOM BIT GENERATION AND STREAM CIPHERS
Blum Blum Shub Generator
A popular approach to generating secure pseudorandom numbers is known as 
the Blum Blum Shub (BBS) generator (see Figure 8.3), named for its developers 
[BLUM86]. It has perhaps the strongest public proof of its cryptographic strength 
of any purpose-built algorithm. The procedure is as follows. First, choose two large 
prime numbers, p and q, that both have a remainder of 3 when divided by 4. That is,
 
p K q K 3(mod 4) 
This notation, explained more fully in Chapter 4, simply means that (p mod 4) =
(q mod 4) = 3. For example, the prime numbers 7 and 11 satisfy 7 K 11 K 3(mod 4). 
Let n = p * q. Next, choose a random number s, such that s is relatively prime to n; 
this is equivalent to saying that neither p nor q is a factor of s. Then the BBS genera-
tor produces a sequence of bits Bi according to the following algorithm:
X0 = s2 mod n
for i = 1 to ∞
Xi = (Xi−1)2 mod n
Bi = Xi mod 2
Thus, the least significant bit is taken at each iteration. Table 8.1 shows an example 
of BBS operation. Here, n = 192649 = 383 * 503, and the seed s = 101355.
The BBS is referred to as a cryptographically secure pseudorandom bit 
 generator (CSPRBG). A CSPRBG is defined as one that passes the next-bit test, 
which, in turn, is defined as follows [MENE97]: A pseudorandom bit generator is 
said to pass the next-bit test if there is not a polynomial-time algorithm1 that, on 
input of the first k bits of an output sequence, can predict the (k + 1)st bit with 
probability significantly greater than 1/2. In other words, given the first k bits of the 
1A polynomial-time algorithm of order k is one whose running time is bounded by a polynomial of order k.
Figure 8.3 Blum Blum Shub Block Diagram
Generate
x2 mod n
Select least
significant bit
Initialize
with seed s
[0, 1]

8.3 / PSEUDORANDOM NUMBER GENERATION USING A BLOCK CIPHER 261
sequence, there is not a practical algorithm that can even allow you to state that the 
next bit will be 1 (or 0) with probability greater than 1/2. For all practical purposes, 
the sequence is unpredictable. The security of BBS is based on the difficulty of 
 factoring n. That is, given n, we need to determine its two prime factors p and q.
 8.3 PSEUDORANDOM NUMBER GENERATION USING 
A BLOCK CIPHER
A popular approach to PRNG construction is to use a symmetric block cipher as 
the heart of the PRNG mechanism. For any block of plaintext, a symmetric block 
cipher produces an output block that is apparently random. That is, there are no 
patterns or regularities in the ciphertext that provide information that can be used 
to deduce the plaintext. Thus, a symmetric block cipher is a good candidate for 
building a pseudorandom number generator.
If an established, standardized block cipher is used, such as DES or AES, then 
the security characteristics of the PRNG can be established. Further, many applica-
tions already make use of DES or AES, so the inclusion of the block cipher as part 
of the PRNG algorithm is straightforward.
PRNG Using Block Cipher Modes of Operation
Two approaches that use a block cipher to build a PNRG have gained widespread 
acceptance: the CTR mode and the OFB mode. The CTR mode is recommended in 
NIST SP 800-90A, in the ANSI standard X9.82 (Random Number Generation), and 
in RFC 4086 (Randomness Requirements for Security, June 2005). The OFB mode is 
recommended in X9.82 and RFC 4086.
Figure 8.4 illustrates the two methods. In each case, the seed consists of two 
parts: the encryption key value and a value V that will be updated after each block 
of pseudorandom numbers is generated. Thus, for AES-128, the seed consists of a 
128-bit key and a 128-bit V value. In the CTR case, the value of V is incremented 
Table 8.1 Example Operation of BBS Generator
i
Xi
Bi

i
Xi
Bi

9.1 / PRINCIPLES OF PUBLIC-KEY CRYPTOSYSTEMS 285
Finally, there is a feeling that key distribution is trivial when using public-key 
encryption, compared to the rather cumbersome handshaking involved with key dis-
tribution centers for symmetric encryption. In fact, some form of protocol is needed, 
generally involving a central agent, and the procedures involved are not simpler nor 
any more efficient than those required for symmetric encryption (e.g., see analysis in 
[NEED78]).
This chapter and the next provide an overview of public-key cryptography. First, 
we look at its conceptual framework. Interestingly, the concept for this technique was 
developed and published before it was shown to be practical to adopt it. Next, we ex-
amine the RSA algorithm, which is the most important encryption/decryption algo-
rithm that has been shown to be feasible for public-key encryption. Other important 
public-key cryptographic algorithms are covered in Chapter 10.
Much of the theory of public-key cryptosystems is based on number theory. If 
one is prepared to accept the results given in this chapter, an understanding of  number 
theory is not strictly necessary. However, to gain a full appreciation of public-key 
 algorithms, some understanding of number theory is required. Chapter 2 provides the 
necessary background in number theory.
Table 9.1 defines some key terms.
 9.1 PRINCIPLES OF PUBLIC-KEY CRYPTOSYSTEMS
The concept of public-key cryptography evolved from an attempt to attack two of 
the most difficult problems associated with symmetric encryption. The first problem 
is that of key distribution, which is examined in some detail in Chapter 14.
As Chapter 14 discusses, key distribution under symmetric encryption requires 
either (1) that two communicants already share a key, which somehow has been dis-
tributed to them; or (2) the use of a key distribution center. Whitfield Diffie, one 
Asymmetric Keys
Two related keys, a public key and a private key, that are used to perform complementary operations, such as 
encryption and decryption or signature generation and signature verification.
Public Key Certificate
A digital document issued and digitally signed by the private key of a Certification Authority that binds the 
name of a subscriber to a public key. The certificate indicates that the subscriber identified in the certificate 
has sole control and access to the corresponding private key.
Public Key (Asymmetric) Cryptographic Algorithm
A cryptographic algorithm that uses two related keys, a public key and a private key. The two keys have the 
property that deriving the private key from the public key is computationally infeasible.
Public Key Infrastructure (PKI)
A set of policies, processes, server platforms, software and workstations used for the purpose of administer-
ing certificates and public-private key pairs, including the ability to issue, maintain, and revoke public key 
 certificates.
Source: Glossary of Key Information Security Terms, NIST IR 7298 [KISS06].
Table 9.1 Terminology Related to Asymmetric Encryption

286  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
of the discoverers of public-key encryption (along with Martin Hellman, both at 
Stanford University at the time), reasoned that this second requirement negated the 
very essence of cryptography: the ability to maintain total secrecy over your own 
communication. As Diffie put it [DIFF88], “what good would it do after all to de-
velop impenetrable cryptosystems, if their users were forced to share their keys with 
a KDC that could be compromised by either burglary or subpoena?”
The second problem that Diffie pondered, and one that was apparently un-
related to the first, was that of digital signatures. If the use of cryptography was to 
become widespread, not just in military situations but for commercial and private 
purposes, then electronic messages and documents would need the equivalent of 
signatures used in paper documents. That is, could a method be devised that would 
stipulate, to the satisfaction of all parties, that a digital message had been sent by a 
particular person? This is a somewhat broader requirement than that of authentica-
tion, and its characteristics and ramifications are explored in Chapter 13.
Diffie and Hellman achieved an astounding breakthrough in 1976 [DIFF76 a, b] 
by coming up with a method that addressed both problems and was radically different 
from all previous approaches to cryptography, going back over four millennia.1
In the next subsection, we look at the overall framework for public-key cryp-
tography. Then we examine the requirements for the encryption/decryption algo-
rithm that is at the heart of the scheme.
Public-Key Cryptosystems
Asymmetric algorithms rely on one key for encryption and a different but related 
key for decryption. These algorithms have the following important characteristic.
 
■It is computationally infeasible to determine the decryption key given only 
knowledge of the cryptographic algorithm and the encryption key.
In addition, some algorithms, such as RSA, also exhibit the following characteristic.
 
■Either of the two related keys can be used for encryption, with the other used 
for decryption.
A public-key encryption scheme has six ingredients (Figure 9.1a; compare 
with Figure 3.1).
 
■Plaintext: This is the readable message or data that is fed into the algorithm 
as input.
 
■Encryption algorithm: The encryption algorithm performs various transfor-
mations on the plaintext.
1Diffie and Hellman first publicly introduced the concepts of public-key cryptography in 1976. Hellman 
credits Merkle with independently discovering the concept at that same time, although Merkle did not 
publish until 1978 [MERK78]. In fact, the first unclassified document describing public-key distribution 
and public-key cryptography was a 1974 project proposal by Merkle (http://merkle.com/1974). However, 
this is not the true beginning. Admiral Bobby Inman, while director of the National Security Agency 
(NSA), claimed that public-key cryptography had been discovered at NSA in the mid-1960s [SIMM93]. 
The first documented introduction of these concepts came in 1970, from the Communications-Electronics 
Security Group, Britain’s counterpart to NSA, in a classified report by James Ellis [ELLI70]. Ellis re-
ferred to the technique as nonsecret encryption and describes the discovery in [ELLI99].

9.1 / PRINCIPLES OF PUBLIC-KEY CRYPTOSYSTEMS 287
 
■Public and private keys: This is a pair of keys that have been selected so that if 
one is used for encryption, the other is used for decryption. The exact transfor-
mations performed by the algorithm depend on the public or private key that 
is provided as input.
 
■Ciphertext: This is the encrypted message produced as output. It depends on 
the plaintext and the key. For a given message, two different keys will produce 
two different ciphertexts.
Figure 9.1 Public-Key Cryptography
Plaintext
input
Bobs's
public-key
ring
Transmitted
ciphertext
Plaintext
output
Encryption algorithm
(e.g., RSA)
Decryption algorithm
Joy
Mike
Mike
Bob
Ted
Alice
Alice's public
key
Alice's private
key
(a) Encryption with public key
Plaintext
input
Transmitted
ciphertext
Plaintext
output
Encryption algorithm
(e.g., RSA)
Decryption algorithm
Bob's private
key
Bob
Bob's public
key
Alice's
public key
ring
Joy
Ted
(b) Encryption with private key
X
X
PUa
PUb
PRa
PRb
Y = E[PUa, X]
Y = E[PRb, X]
X =
D[PRa, Y]
X =
D[PUb, Y]
Alice
Bob
Alice

288  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
 
■Decryption algorithm: This algorithm accepts the ciphertext and the matching 
key and produces the original plaintext.
The essential steps are the following.
1. Each user generates a pair of keys to be used for the encryption and decryp-
tion of messages.
2. Each user places one of the two keys in a public register or other accessible 
file. This is the public key. The companion key is kept private. As Figure 9.1a 
suggests, each user maintains a collection of public keys obtained from others.
3. If Bob wishes to send a confidential message to Alice, Bob encrypts the mes-
sage using Alice’s public key.
4. When Alice receives the message, she decrypts it using her private key. No 
other recipient can decrypt the message because only Alice knows Alice’s pri-
vate key.
With this approach, all participants have access to public keys, and private 
keys are generated locally by each participant and therefore need never be distrib-
uted. As long as a user’s private key remains protected and secret, incoming com-
munication is secure. At any time, a system can change its private key and publish 
the companion public key to replace its old public key.
Table 9.2 summarizes some of the important aspects of symmetric and public-
key encryption. To discriminate between the two, we refer to the key used in sym-
metric encryption as a secret key. The two keys used for asymmetric encryption are 
referred to as the public key and the private key.2 Invariably, the private key is kept 
secret, but it is referred to as a private key rather than a secret key to avoid confu-
sion with symmetric encryption.
Let us take a closer look at the essential elements of a public-key encryption 
scheme, using Figure 9.2 (compare with Figure 3.2). There is some source A that 
produces a message in plaintext, X = [X1, X2, c , XM]. The M elements of X are 
letters in some finite alphabet. The message is intended for destination B. B gener-
ates a related pair of keys: a public key, PUb, and a private key, PRb. PRb is known 
only to B, whereas PUb is publicly available and therefore accessible by A.
With the message X and the encryption key PUb as input, A forms the cipher-
text Y = [Y1, Y2, c , YN]:
 
Y = E(PUb, X) 
The intended receiver, in possession of the matching private key, is able to invert 
the transformation:
 
X = D(PRb,Y) 
2The following notation is used consistently throughout. A secret key is represented by Km, where m is 
some modifier; for example, Ka is a secret key owned by user A. A public key is represented by PUa, for 
user A, and the corresponding private key is PRa. Encryption of plaintext X can be performed with a 
secret key, a public key, or a private key, denoted by E(Ka, X), E(PUa, X), and E(PRa, X), respectively. 
Similarly, decryption of ciphertext Y can be performed with a secret key, a public key, or a private key, 
denoted by D(Ka, Y), D(PUa, Y), and D(PRa, Y), respectively.

9.1 / PRINCIPLES OF PUBLIC-KEY CRYPTOSYSTEMS 289
An adversary, observing Y and having access to PUb, but not having access to PRb 
or X, must attempt to recover X and/or PRb. It is assumed that the adversary does 
have knowledge of the encryption (E) and decryption (D) algorithms. If the ad-
versary is interested only in this particular message, then the focus of effort is to 
recover X by generating a plaintext estimate Xn. Often, however, the adversary is 
interested in being able to read future messages as well, in which case an attempt is 
made to recover PRb by generating an estimate PRnb.
Conventional Encryption
Public-Key Encryption
Needed to Work:
1. The same algorithm with the same key is 
used for encryption and decryption.
2. The sender and receiver must share the 
algorithm and the key.
Needed for Security:
1. The key must be kept secret.
2. It must be impossible or at least impractical 
to decipher a message if the key is kept 
secret.
3. Knowledge of the algorithm plus samples of 
ciphertext must be insufficient to determine 
the key.
Needed to Work:
1. One algorithm is used for encryption and a related 
algorithm for decryption with a pair of keys, one for 
encryption and one for decryption.
2. The sender and receiver must each have one of the 
matched pair of keys (not the same one).
Needed for Security:
1. One of the two keys must be kept secret.
2. It must be impossible or at least impractical to 
decipher a message if one of the keys is kept secret.
3. Knowledge of the algorithm plus one of the keys 
plus samples of ciphertext must be insufficient to 
determine the other key.
Table 9.2 Conventional and Public-Key Encryption
Figure 9.2 Public-Key Cryptosystem: Confidentiality
Message
source
Cryptanalyst
Key pair
source
Destination
X
^PRb
PUb
Encryption
algorithm
Decryption
algorithm
PRb
^
X
Source A
Destination B
Y = E[PUb, X]
X =
D[PRb, Y]

290  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
Figure 9.3 Public-Key Cryptosystem: Authentication
Message
source
Cryptanalyst
Key pair
source
Destination
X
^
PRa
PRa
PUa
Encryption
algorithm
Decryption
algorithm
Source A
Destination B
Y = E[PRa, X]
X =
D[PUa, Y]
We mentioned earlier that either of the two related keys can be used for en-
cryption, with the other being used for decryption. This enables a rather differ-
ent cryptographic scheme to be implemented. Whereas the scheme illustrated in 
Figure 9.2 provides confidentiality, Figures 9.1b and 9.3 show the use of public-key 
encryption to provide authentication:
 Y = E(PRa,X)
 X = D(PUa,Y)
In this case, A prepares a message to B and encrypts it using A’s private key 
before transmitting it. B can decrypt the message using A’s public key. Because the 
message was encrypted using A’s private key, only A could have prepared the mes-
sage. Therefore, the entire encrypted message serves as a digital  signature. In addi-
tion, it is impossible to alter the message without access to A’s private key, so the 
message is authenticated both in terms of source and in terms of data integrity.
In the preceding scheme, the entire message is encrypted, which, although val-
idating both author and contents, requires a great deal of storage. Each document 
must be kept in plaintext to be used for practical purposes. A copy also must be 
stored in ciphertext so that the origin and contents can be verified in case of a dis-
pute. A more efficient way of achieving the same results is to encrypt a small block 
of bits that is a function of the document. Such a block, called an authenticator, 
must have the property that it is infeasible to change the document without chang-
ing the authenticator. If the authenticator is encrypted with the sender’s private 
key, it serves as a signature that verifies origin, content, and sequencing. Chapter 13 
examines this technique in detail.

9.1 / PRINCIPLES OF PUBLIC-KEY CRYPTOSYSTEMS 291
It is important to emphasize that the encryption process depicted in Figures 9.1b 
and 9.3 does not provide confidentiality. That is, the message being sent is safe from 
alteration but not from eavesdropping. This is obvious in the case of a signature 
based on a portion of the message, because the rest of the message is transmitted in 
the clear. Even in the case of complete encryption, as shown in Figure 9.3, there is 
no protection of confidentiality because any observer can decrypt the message by 
using the sender’s public key.
It is, however, possible to provide both the authentication function and confi-
dentiality by a double use of the public-key scheme (Figure 9.4):
 Z = E(PUb, E(PRa,X))
 X = D(PUa, D(PRb,Z))
In this case, we begin as before by encrypting a message, using the sender’s private 
key. This provides the digital signature. Next, we encrypt again, using the receiver’s 
public key. The final ciphertext can be decrypted only by the intended receiver, who 
alone has the matching private key. Thus, confidentiality is provided. The disadvan-
tage of this approach is that the public-key algorithm, which is complex, must be 
exercised four times rather than two in each communication.
Applications for Public-Key Cryptosystems
Before proceeding, we need to clarify one aspect of public-key cryptosystems that 
is otherwise likely to lead to confusion. Public-key systems are characterized by the 
use of a cryptographic algorithm with two keys, one held private and one available 
publicly. Depending on the application, the sender uses either the sender’s private 
key or the receiver’s public key, or both, to perform some type of cryptographic 
Figure 9.4 Public-Key Cryptosystem: Authentication and Secrecy
Message
source
Message
dest.
X
Encryption
algorithm
Key pair
source
PUb
PRb
Source A
Destination B
Key pair
source
PRa
PUa
Y
Encryption
algorithm
Z
Decryption
algorithm
Y
Decryption
algorithm
X

292  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
function. In broad terms, we can classify the use of public-key cryptosystems into 
three categories
 
■Encryption/decryption: The sender encrypts a message with the recipient’s 
public key, and the recipient decrypts the message with the recipient’s private 
key.
 
■Digital signature: The sender “signs” a message with its private key. Signing 
is achieved by a cryptographic algorithm applied to the message or to a small 
block of data that is a function of the message.
 
■Key exchange: Two sides cooperate to exchange a session key, which is a secret 
key for symmetric encryption generated for use for a particular transaction (or 
session) and valid for a short period of time. Several different approaches are 
possible, involving the private key(s) of one or both parties; this is discussed in 
Chapter 10.
Some algorithms are suitable for all three applications, whereas others can be 
used only for one or two of these applications. Table 9.3 indicates the applications 
supported by the algorithms discussed in this book.
Requirements for Public-Key Cryptography
The cryptosystem illustrated in Figures 9.2 through 9.4 depends on a cryptographic 
algorithm based on two related keys. Diffie and Hellman postulated this system 
without demonstrating that such algorithms exist. However, they did lay out the 
conditions that such algorithms must fulfill [DIFF76b].
1. It is computationally easy for a party B to generate a key pair (public key PUb, 
private key PRb).
2. It is computationally easy for a sender A, knowing the public key and the mes-
sage to be encrypted, M, to generate the corresponding ciphertext:
C = E(PUb, M)
3. It is computationally easy for the receiver B to decrypt the resulting ciphertext 
using the private key to recover the original message:
M = D(PRb, C) = D[PRb, E(PUb, M)]
4. It is computationally infeasible for an adversary, knowing the public key, PUb, 
to determine the private key, PRb.
Algorithm
Encryption/Decryption
Digital Signature
Key Exchange
RSA
Yes
Yes
Yes
Elliptic Curve
Yes
Yes
Yes
Diffie–Hellman
No
No
Yes
DSS
No
Yes
No
Table 9.3 Applications for Public-Key Cryptosystems

9.1 / PRINCIPLES OF PUBLIC-KEY CRYPTOSYSTEMS 293
5. It is computationally infeasible for an adversary, knowing the public key, PUb, 
and a ciphertext, C, to recover the original message, M.
We can add a sixth requirement that, although useful, is not necessary for all 
public-key applications:
6. The two keys can be applied in either order:
M = D[PUb, E(PRb, M)] = D[PRb, E(PUb, M)]
These are formidable requirements, as evidenced by the fact that only a few 
algorithms (RSA, elliptic curve cryptography, Diffie–Hellman, DSS) have received 
widespread acceptance in the several decades since the concept of public-key cryp-
tography was proposed.
Before elaborating on why the requirements are so formidable, let us first re-
cast them. The requirements boil down to the need for a trap-door one-way func-
tion. A one-way function3 is one that maps a domain into a range such that every 
function value has a unique inverse, with the condition that the calculation of the 
function is easy, whereas the calculation of the inverse is infeasible:
 Y = f(X)     easy
 X = f -1(Y) infeasible
Generally, easy is defined to mean a problem that can be solved in polynomial 
time as a function of input length. Thus, if the length of the input is n bits, then the 
time to compute the function is proportional to na, where a is a fixed constant. Such 
algorithms are said to belong to the class P. The term infeasible is a much fuzzier 
concept. In general, we can say a problem is infeasible if the effort to solve it grows 
faster than polynomial time as a function of input size. For example, if the length 
of the input is n bits and the time to compute the function is proportional to 2n, 
the problem is considered infeasible. Unfortunately, it is difficult to determine if a 
particular algorithm exhibits this complexity. Furthermore, traditional notions of 
computational complexity focus on the worst-case or average-case complexity of 
an algorithm. These measures are inadequate for cryptography, which requires that 
it be infeasible to invert a function for virtually all inputs, not for the worst case or 
even average case. A brief introduction to some of these concepts is provided in 
Appendix W.
We now turn to the definition of a trap-door one-way function, which is easy 
to calculate in one direction and infeasible to calculate in the other direction un-
less certain additional information is known. With the additional information the 
inverse can be calculated in polynomial time. We can summarize as follows: A trap-
door one-way function is a family of invertible functions fk, such that
 Y = fk(X)   easy, if k and X are known
 X = fk
-1(Y) easy, if k and Y are known
 X = fk
-1(Y) infeasible, if Y is known but k is not known
3Not to be confused with a one-way hash function, which takes an arbitrarily large data field as its 
 argument and maps it to a fixed output. Such functions are used for authentication (see Chapter 11).

294  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
Thus, the development of a practical public-key scheme depends on discovery of a 
suitable trap-door one-way function.
Public-Key Cryptanalysis
As with symmetric encryption, a public-key encryption scheme is vulnerable to a 
brute-force attack. The countermeasure is the same: Use large keys. However, there 
is a tradeoff to be considered. Public-key systems depend on the use of some sort of 
invertible mathematical function. The complexity of calculating these functions may 
not scale linearly with the number of bits in the key but grow more rapidly than that. 
Thus, the key size must be large enough to make brute-force attack impractical but 
small enough for practical encryption and decryption. In practice, the key sizes that 
have been proposed do make brute-force attack impractical but result in encryp-
tion/decryption speeds that are too slow for general-purpose use. Instead, as was 
mentioned earlier, public-key encryption is currently confined to key management 
and signature applications.
Another form of attack is to find some way to compute the private key given 
the public key. To date, it has not been mathematically proven that this form of at-
tack is infeasible for a particular public-key algorithm. Thus, any given algorithm, 
including the widely used RSA algorithm, is suspect. The history of cryptanalysis 
shows that a problem that seems insoluble from one perspective can be found to 
have a solution if looked at in an entirely different way.
Finally, there is a form of attack that is peculiar to public-key systems. This is, 
in essence, a probable-message attack. Suppose, for example, that a message were 
to be sent that consisted solely of a 56-bit DES key. An adversary could encrypt all 
possible 56-bit DES keys using the public key and could discover the encrypted key 
by matching the transmitted ciphertext. Thus, no matter how large the key size of the 
public-key scheme, the attack is reduced to a brute-force attack on a 56-bit key. This 
attack can be thwarted by appending some random bits to such simple messages.
 9.2 THE RSA ALGORITHM
The pioneering paper by Diffie and Hellman [DIFF76b] introduced a new approach 
to cryptography and, in effect, challenged cryptologists to come up with a crypto-
graphic algorithm that met the requirements for public-key systems. A number of 
algorithms have been proposed for public-key cryptography. Some of these, though 
initially promising, turned out to be breakable.4
One of the first successful responses to the challenge was developed in 1977 
by Ron Rivest, Adi Shamir, and Len Adleman at MIT and first published in 1978 
[RIVE78].5 The Rivest-Shamir-Adleman (RSA) scheme has since that time reigned 
supreme as the most widely accepted and implemented general-purpose approach 
to public-key encryption.
4The most famous of the fallen contenders is the trapdoor knapsack proposed by Ralph Merkle. We 
describe this in Appendix J.
5Apparently, the first workable public-key system for encryption/decryption was put forward by Clifford 
Cocks of Britain’s CESG in 1973 [COCK73]; Cocks’ method is virtually identical to RSA.

9.2 / THE RSA ALGORITHM 295
The RSA scheme is a cipher in which the plaintext and ciphertext are integers 
between 0 and n - 1 for some n. A typical size for n is 1024 bits, or 309 decimal 
digits. That is, n is less than 21024. We examine RSA in this section in some detail, 
beginning with an explanation of the algorithm. Then we examine some of the com-
putational and cryptanalytical implications of RSA.
Description of the Algorithm
RSA makes use of an expression with exponentials. Plaintext is encrypted in blocks, 
with each block having a binary value less than some number n. That is, the block 
size must be less than or equal to log2(n) + 1; in practice, the block size is i bits, 
where 2i 6 n … 2i+1. Encryption and decryption are of the following form, for 
some plaintext block M and ciphertext block C.
 C = Me mod n
 M = Cd mod n = (Me)d mod n = Med mod n
Both sender and receiver must know the value of n. The sender knows 
the value of e, and only the receiver knows the value of d. Thus, this is a public-
key encryption algorithm with a public key of PU = {e, n} and a private key of 
PR = {d, n}. For this algorithm to be satisfactory for public-key encryption, the fol-
lowing requirements must be met.
1. It is possible to find values of e, d, and n such that Med mod n = M for all M 6 n.
2. It is relatively easy to calculate Me mod n and Cd mod n for all values of M 6 n.
3. It is infeasible to determine d given e and n.
For now, we focus on the first requirement and consider the other questions 
later. We need to find a relationship of the form
 
Med mod n = M 
The preceding relationship holds if e and d are multiplicative inverses modulo f(n), 
where f(n) is the Euler totient function. It is shown in Chapter 2 that for p, q prime, 
f(pq) = (p - 1)(q - 1). The relationship between e and d can be expressed as
  
ed mod f(n) = 1 
  (9.1)
This is equivalent to saying
 ed K 1 mod f(n)
 d K e-1 mod f(n)
That is, e and d are multiplicative inverses mod f(n). Note that, according to the 
rules of modular arithmetic, this is true only if d (and therefore e) is relatively 
prime to f(n). Equivalently, gcd(f(n), d) = 1. See Appendix R for a proof that 
Equation (9.1) satisfies the requirement for RSA.
We are now ready to state the RSA scheme. The ingredients are the following:
p, q, two prime numbers
(private, chosen)
n = pq
(public, calculated)
e, with gcd(f(n), e) = 1; 1 6 e 6 f(n)
(public, chosen)
d K e-1 (mod f(n))
(private, calculated)

296  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
The private key consists of {d, n} and the public key consists of {e, n}. Suppose 
that user A has published its public key and that user B wishes to send the message 
M to A. Then B calculates C = Me mod n and transmits C. On receipt of this ci-
phertext, user A decrypts by calculating M = Cd mod n.
Figure 9.5 summarizes the RSA algorithm. It corresponds to Figure 9.1a: Alice 
generates a public/private key pair; Bob encrypts using Alice’s public key; and Alice 
decrypts using her private key. An example from [SING99] is shown in Figure 9.6. 
For this example, the keys were generated as follows.
1. Select two prime numbers, p = 17 and q = 11.
2. Calculate n = pq = 17 * 11 = 187.
3. Calculate f(n) = (p - 1)(q - 1) = 16 * 10 = 160.
4. Select e such that e is relatively prime to f(n) = 160 and less than f(n); we 
choose e = 7.
5. Determine d such that de K 1 (mod 160) and d 6 160. The correct value is 
d = 23, because 23 * 7 = 161 = (1 * 160) + 1; d can be calculated using 
the extended Euclid’s algorithm (Chapter 2).
The resulting keys are public key PU = {7, 187} and private key PR = {23, 187}. 
The example shows the use of these keys for a plaintext input of M = 88. For 
 encryption, we need to calculate C = 887 mod 187. Exploiting the properties of 
modular arithmetic, we can do this as follows.
 887 mod 187 = [(884 mod 187) * (882 mod 187)
        * (881 mod 187)] mod 187
 881 mod 187 = 88
 882 mod 187 = 7744 mod 187 = 77
 884 mod 187 = 59,969,536 mod 187 = 132
 887 mod 187 = (88 * 77 * 132) mod 187 = 894,432 mod 187 = 11
For decryption, we calculate M = 1123 mod 187:
 1123 mod 187 = [(111 mod 187) * (112 mod 187) * (114 mod 187)
    
 
  
 * (118 mod 187) * (118 mod 187)] mod 187
 111 mod 187 = 11
 112 mod 187 = 121
 114 mod 187 = 14,641 mod 187 = 55
 118 mod 187 = 214,358,881 mod 187 = 33
 1123 mod 187 = (11 * 121 * 55 * 33 * 33) mod 187
       = 79,720,245 mod 187 = 88
We now look at an example from [HELL79], which shows the use of RSA to 
process multiple blocks of data. In this simple example, the plaintext is an alpha-
numeric string. Each plaintext symbol is assigned a unique code of two decimal 

9.2 / THE RSA ALGORITHM 297
digits (e.g., a = 00, A = 26).6 A plaintext block consists of four decimal digits, or 
two alphanumeric characters. Figure 9.7a illustrates the sequence of events for the 
encryption of multiple blocks, and Figure 9.7b gives a specific example. The circled 
numbers indicate the order in which operations are performed.
Computational Aspects
We now turn to the issue of the complexity of the computation required to use 
RSA. There are actually two issues to consider: encryption/decryption and key 
 generation. Let us look first at the process of encryption and decryption and then 
consider key generation.
6 The complete mapping of alphanumeric characters to decimal digits is at box.com/Crypto7e in the doc-
ument RSAexample.pdf.
Figure 9.6 Example of RSA Algorithm
Encryption
Plaintext

Plaintext

Ciphertext

88  mod 187 = 11
PU = 7, 187
Decryption

11    mod 187 = 88
PR  23, 187

Figure 9.5 The RSA Algorithm
Key Generation by Alice
Select p, q 
p and q both prime, p ≠q
Calculate n = p * q 
Calcuate f(n) = (p - 1)(q - 1) 
Select integer e 
gcd (f(n), e) = 1; 1 6 e 6 f(n)
Calculate d 
d K e-1 (mod f(n))
Public key 
PU = {e, n}
Private key 
 PR = {d, n}
Encryption by Bob with Alice’s Public Key
Plaintext: 
M 6 n
Ciphertext: 
C = Me mod n
Decryption by Alice with Alice’s Public Key
Ciphertext: 
C
Plaintext: 
M = Cd mod n

298  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
EXPONENTIATION IN MODULAR ARITHMETIC Both encryption and decryption in RSA 
involve raising an integer to an integer power, mod n. If the exponentiation is done 
over the integers and then reduced modulo n, the intermediate values would be 
gargantuan. Fortunately, as the preceding example shows, we can make use of a 
property of modular arithmetic:
 
[(a mod n) * (b mod n)] mod n = (a * b) mod n 
Thus, we can reduce intermediate results modulo n. This makes the calculation 
practical.
Another consideration is the efficiency of exponentiation, because with RSA, 
we are dealing with potentially large exponents. To see how efficiency might be in-
creased, consider that we wish to compute x16. A straightforward approach requires 
15 multiplications:
 
x16 = x * x * x * x * x * x * x * x * x * x * x * x * x * x * x * x 
Figure 9.7 RSA Processing of Multiple Blocks
Plaintext P
Decimal string
Sender
Receiver
(a) General approach
(b) Example
Blocks of numbers
Transmit
P1, P2,
P1 = C1
d mod n
P2 = C2
d mod n
Ciphertext C
C1 = P1
e mod n
C2 = P2
e mod n
Recovered
decimal text
n = pq
Random number
generator
e, p, q
Private key
d, n
Public key
e, n
How_are_you?
33 14 22 62 00 17 04 62 24 14 20 66
Sender
Receiver
Transmit
P1 = 3314 P2 = 2262 P3 = 0017
P4 = 0462 P5 = 2414 P6 = 2066
C1 = 331411 mod 11023 = 10260
C2 = 226211 mod 11023 = 9489
C3 = 1711 mod 11023 = 1782
C4 = 46211 mod 11023 = 727
C5 = 241411 mod 11023 = 10032
C6 = 206611 mod 11023 = 2253
P1 = 102605891 mod 11023 = 3314
P2 = 94895891 mod 11023 = 2262
P3 = 17825891 mod 11023 = 0017
P4 = 7275891 mod 11023 = 0462
P5 = 100325891 mod 11023 = 2414
P6 = 22535891 mod 11023 = 2066
11023 = 73   151
5891 = 11–1 mod 10800
10800 = (73 – 1)(151 – 1)
11023 = 73   51
Random number
generator
e = 11
 n = 11023
d = 5891
 n = 11023
e = 11
 p = 73, q = 151

d = e–1 mod f(n)
  f(n) = (p – 1)(q – 1)
n = pq

9.2 / THE RSA ALGORITHM 299
However, we can achieve the same final result with only four multiplications if we 
 repeatedly take the square of each partial result, successively forming (x2, x4, x8, x16). 
As another example, suppose we wish to calculate x11 mod n for some integers x  
and n. Observe that x11 = x1+2+8 = (x)(x2)(x8). In this case, we compute x mod n,  
x2 mod n, x4 mod n, and x8 mod n and then calculate [(x mod n) * (x2 mod n) *
(x8 mod n)] mod n.
More generally, suppose we wish to find the value ab mod n with a, b, and m 
positive integers. If we express b as a binary number bkbk-1 c b0, then we have
b = a
bi≠0
2i
Therefore,
ab = a
¢
Σ2i
bi≠0≤
= q
bi≠0
a(2i)
ab mod n = J q
bi≠0
a(2i) R mod n = ¢ q
bi≠0
Ja(2i) mod nR ≤ mod n
We can therefore develop the algorithm7 for computing ab mod n, shown in 
Figure 9.8. Table 9.4 shows an example of the execution of this algorithm. Note that 
the variable c is not needed; it is included for explanatory purposes. The final value 
of c is the value of the exponent.
EFFICIENT OPERATION USING THE PUBLIC KEY To speed up the operation of the 
RSA algorithm using the public key, a specific choice of e is usually made. The most 
common choice is 65537 (216 + 1); two other popular choices are 3 and 17. Each of 
these choices has only two 1 bits, so the number of multiplications required to per-
form exponentiation is minimized.
7The algorithm has a long history; this particular pseudocode expression is from [CORM09].
Figure 9.8 Algorithm for Computing ab mod n
c   0; f   1
c   2 × c
do
bi = 1
then c   c + 1
if
f   (f × f) mod n
f   (f × a) mod n
for i   k downto 0
return f
Note: The integer b is expressed as a 
binary number bkbk-1cb0.

300  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
However, with a very small public key, such as e = 3, RSA becomes vulner-
able to a simple attack. Suppose we have three different RSA users who all use 
the value e = 3 but have unique values of n, namely (n1, n2, n3). If user A sends 
the same encrypted message M to all three users, then the three ciphertexts are 
C1 = M3 mod n1, C2 = M3 mod n2, and C3 = M3 mod n3. It is likely that n1, n2, 
and n3 are pairwise relatively prime. Therefore, one can use the Chinese remainder 
theorem (CRT) to compute M3 mod (n1n2n3). By the rules of the RSA algorithm, 
M is less than each of the ni; therefore M3 6 n1n2n3. Accordingly, the attacker need 
only compute the cube root of M3. This attack can be countered by adding a unique 
pseudorandom bit string as padding to each instance of M to be encrypted. This ap-
proach is discussed subsequently.
The reader may have noted that the definition of the RSA algorithm 
(Figure 9.5) requires that during key generation the user selects a value of e that is 
relatively prime to f(n). Thus, if a value of e is selected first and the primes p and q 
are generated, it may turn out that gcd(f(n), e) ≠1. In that case, the user must 
reject the p, q values and generate a new p, q pair.
EFFICIENT OPERATION USING THE PRIVATE KEY We cannot similarly choose a small 
constant value of d for efficient operation. A small value of d is vulnerable to a 
brute-force attack and to other forms of cryptanalysis [WIEN90]. However, there 
is a way to speed up computation using the CRT. We wish to compute the value 
M = Cd mod n. Let us define the following intermediate results:
 
Vp = Cd mod p Vq = Cd mod q 
Following the CRT using Equation (8.8), define the quantities
 
Xp = q * (q-1 mod p) Xq = p * (p-1 mod q) 
The CRT then shows, using Equation (8.9), that
 
M = (VpXp + VqXq) mod n 
Furthermore, we can simplify the calculation of Vp and Vq using Fermat’s 
theorem, which states that ap-1 K 1 (mod p) if p and a are relatively prime. Some 
thought should convince you that the following are valid.
 
Vp = Cd mod p = Cd mod(p-1) mod p Vq = Cd mod q = Cd mod(q-1) mod q 
i

bi

c

f

Table 9.4 Result of the Fast Modular Exponentiation Algorithm for ab mod n, where a = 7, 
b = 560 = 1000110000, and n = 561

9.2 / THE RSA ALGORITHM 301
The quantities d mod (p - 1) and d mod (q - 1) can be precalculated. The 
end result is that the calculation is approximately four times as fast as evaluating 
M = Cd mod n directly [BONE02].
KEY GENERATION Before the application of the public-key cryptosystem, each par-
ticipant must generate a pair of keys. This involves the following tasks.
 
■Determining two prime numbers, p and q.
 
■Selecting either e or d and calculating the other.
First, consider the selection of p and q. Because the value of n = pq will be 
known to any potential adversary, in order to prevent the discovery of p and q 
by exhaustive methods, these primes must be chosen from a sufficiently large set 
(i.e., p and q must be large numbers). On the other hand, the method used for find-
ing large primes must be reasonably efficient.
At present, there are no useful techniques that yield arbitrarily large primes, 
so some other means of tackling the problem is needed. The procedure that is gen-
erally used is to pick at random an odd number of the desired order of magnitude 
and test whether that number is prime. If not, pick successive random numbers until 
one is found that tests prime.
A variety of tests for primality have been developed (e.g., see [KNUT98] for 
a description of a number of such tests). Almost invariably, the tests are probabi-
listic. That is, the test will merely determine that a given integer is probably prime. 
Despite this lack of certainty, these tests can be run in such a way as to make the 
probability as close to 1.0 as desired. As an example, one of the more efficient 
and popular algorithms, the Miller–Rabin algorithm, is described in Chapter 2. 
With this algorithm and most such algorithms, the procedure for testing whether 
a given integer n is prime is to perform some calculation that involves n and a 
randomly chosen integer a. If n “fails” the test, then n is not prime. If n “passes” 
the test, then n may be prime or nonprime. If n passes many such tests with many 
different randomly chosen values for a, then we can have high confidence that n 
is, in fact, prime.
In summary, the procedure for picking a prime number is as follows.
1. Pick an odd integer n at random (e.g., using a pseudorandom number 
generator).
2. Pick an integer a 6 n at random.
3. Perform the probabilistic primality test, such as Miller–Rabin, with a as a 
 parameter. If n fails the test, reject the value n and go to step 1.
4. If n has passed a sufficient number of tests, accept n; otherwise, go to step 2.
This is a somewhat tedious procedure. However, remember that this process is per-
formed relatively infrequently: only when a new pair (PU, PR) is needed.
It is worth noting how many numbers are likely to be rejected before a 
prime number is found. A result from number theory, known as the prime  number 
theorem, states that the primes near N are spaced on the average one every 

302  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
ln (N) integers. Thus, on average, one would have to test on the order of ln(N) 
integers before a prime is found. Actually, because all even integers can be im-
mediately rejected, the correct figure is ln(N)/2. For example, if a prime on the 
order of magnitude of 2200 were sought, then about ln(2200)/2 = 70 trials would be 
needed to find a prime.
Having determined prime numbers p and q, the process of key generation is 
completed by selecting a value of e and calculating d or, alternatively, selecting a 
value of d and calculating e. Assuming the former, then we need to select an e such 
that gcd(f(n), e) = 1 and then calculate d K e-1 (mod f(n)). Fortunately, there is 
a single algorithm that will, at the same time, calculate the greatest common divi-
sor of two integers and, if the gcd is 1, determine the inverse of one of the integers 
modulo the other. The algorithm, referred to as the extended Euclid’s algorithm, 
is explained in Chapter 2. Thus, the procedure is to generate a series of random 
numbers, testing each against f(n) until a number relatively prime to f(n) is found. 
Again, we can ask the question: How many random numbers must we test to find 
a usable number, that is, a number relatively prime to f(n)? It can be shown easily 
that the probability that two random numbers are relatively prime is about 0.6; thus, 
very few tests would be needed to find a suitable integer (see Problem 2.18).
The Security of RSA
Five possible approaches to attacking the RSA algorithm are
 
■Brute force: This involves trying all possible private keys.
 
■Mathematical attacks: There are several approaches, all equivalent in effort to 
factoring the product of two primes.
 
■Timing attacks: These depend on the running time of the decryption algorithm.
 
■Hardware fault-based attack: This involves inducing hardware faults in the 
processor that is generating digital signatures.
 
■Chosen ciphertext attacks: This type of attack exploits properties of the RSA 
algorithm.
The defense against the brute-force approach is the same for RSA as for other 
cryptosystems, namely, to use a large key space. Thus, the larger the number of bits 
in d, the better. However, because the calculations involved, both in key generation 
and in encryption/decryption, are complex, the larger the size of the key, the slower 
the system will run.
In this subsection, we provide an overview of mathematical and timing attacks.
THE FACTORING PROBLEM We can identify three approaches to attacking RSA 
mathematically.
1. Factor n into its two prime factors. This enables calculation of f(n) =
(p - 1) * (q - 1), which in turn enables determination of d K e-1 (mod f(n)).
2. Determine f(n) directly, without first determining p and q. Again, this enables 
determination of d K e-1 (mod f(n)).
3. Determine d directly, without first determining f(n).

9.2 / THE RSA ALGORITHM 303
Most discussions of the cryptanalysis of RSA have focused on the task of 
 factoring n into its two prime factors. Determining f(n) given n is equivalent to 
factoring n [RIBE96]. With presently known algorithms, determining d given 
e and n appears to be at least as time-consuming as the factoring problem [KALI95]. 
Hence, we can use factoring performance as a benchmark against which to evaluate 
the security of RSA.
For a large n with large prime factors, factoring is a hard problem, but it is not 
as hard as it used to be. A striking illustration of this is the following. In 1977, the 
three inventors of RSA dared Scientific American readers to decode a cipher they 
printed in Martin Gardner’s “Mathematical Games” column [GARD77]. They of-
fered a $100 reward for the return of a plaintext sentence, an event they predicted 
might not occur for some 40 quadrillion years. In April of 1994, a group working 
over the Internet claimed the prize after only eight months of work [LEUT94]. This 
challenge used a public key size (length of n) of 129 decimal digits, or around 428 
bits. In the meantime, just as they had done for DES, RSA Laboratories had issued 
challenges for the RSA cipher with key sizes of 100, 110, 120, and so on, digits. The 
latest challenge to be met is the RSA-768 challenge with a key length of 232 decimal 
digits, or 768 bits. Table 9.5 shows the results.
A striking fact about the progress reflected in Table 9.5 concerns the method 
used. Until the mid-1990s, factoring attacks were made using an approach known 
as the quadratic sieve. The attack on RSA-130 used a newer algorithm, the gen-
eralized number field sieve (GNFS), and was able to factor a larger number than 
RSA-129 at only 20% of the computing effort.
The threat to larger key sizes is twofold: the continuing increase in computing 
power and the continuing refinement of factoring algorithms. We have seen that 
the move to a different algorithm resulted in a tremendous speedup. We can expect 
further refinements in the GNFS, and the use of an even better algorithm is also 
a possibility. In fact, a related algorithm, the special number field sieve (SNFS), 
Number of Decimal Digits
Number of Bits
Date Achieved

April 1991

April 1992

June 1993

April 1994

April 1996

February 1999

August 1999

April 2003

December 2003

May 2005

November 2005

December 2009
Table 9.5 Progress in RSA Factorization

304  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
can factor numbers with a specialized form considerably faster than the generalized 
number field sieve. Figure 9.9 compares the performance of the two algorithms. It is 
reasonable to expect a breakthrough that would enable a general factoring perfor-
mance in about the same time as SNFS, or even better [ODLY95]. Thus, we need 
to be careful in choosing a key size for RSA. The team that produced the 768-bit 
factorization [KLEI10] observed that factoring a 1024-bit RSA modulus would be 
about a thousand times harder than factoring a 768-bit modulus, and a 768-bit RSA 
modulus is several thousands times harder to factor than a 512-bit one. Based on the 
amount of time between the 512-bit and 768-bit factorization successes, the team 
felt it to be reasonable to expect that the 1024-bit RSA moduli could be factored 
well within the next decade by a similar academic effort. Thus, they recommended 
phasing out usage of 1024-bit RSA within the next few years (from 2010).
Figure 9.9 MIPS-years Needed to Factor

MIPS-years needed to factor

Bits
General number 
field sieve
Special number 
field sieve

9.2 / THE RSA ALGORITHM 305
In addition to specifying the size of n, a number of other constraints have been 
suggested by researchers. To avoid values of n that may be factored more easily, the 
algorithm’s inventors suggest the following constraints on p and q.
1. p and q should differ in length by only a few digits. Thus, for a 1024-bit key 
(309 decimal digits), both p and q should be on the order of magnitude of 
1075 to 10100.
2. Both (p - 1) and (q - 1) should contain a large prime factor.
3. gcd(p - 1, q - 1) should be small.
In addition, it has been demonstrated that if e 6 n and d 6 n1/4, then d can be  easily 
determined [WIEN90].
TIMING ATTACKS If one needed yet another lesson about how difficult it is to  assess 
the security of a cryptographic algorithm, the appearance of timing attacks  provides 
a stunning one. Paul Kocher, a cryptographic consultant, demonstrated that a 
snooper can determine a private key by keeping track of how long a computer takes 
to decipher messages [KOCH96, KALI96b]. Timing attacks are applicable not just 
to RSA, but to other public-key cryptography systems. This attack is alarming for 
two reasons: It comes from a completely unexpected direction, and it is a ciphertext-
only attack.
A timing attack is somewhat analogous to a burglar guessing the combi-
nation of a safe by observing how long it takes for someone to turn the dial 
from number to number. We can explain the attack using the modular expo-
nentiation algorithm of Figure 9.8, but the attack can be adapted to work with 
any implementation that does not run in fixed time. In this algorithm, modular 
exponentiation is accomplished bit by bit, with one modular multiplication per-
formed at each iteration and an additional modular multiplication performed 
for each 1 bit.
As Kocher points out in his paper, the attack is simplest to understand in an 
extreme case. Suppose the target system uses a modular multiplication function that 
is very fast in almost all cases but in a few cases takes much more time than an entire 
average modular exponentiation. The attack proceeds bit-by-bit starting with the 
leftmost bit, bk. Suppose that the first j bits are known (to obtain the entire exponent, 
start with j = 0 and repeat the attack until the entire exponent is known). For a 
given ciphertext, the attacker can complete the first j iterations of the for loop. The 
operation of the subsequent step depends on the unknown exponent bit. If the bit 
is set, d d (d * a) mod n will be executed. For a few values of a and d, the modu-
lar multiplication will be extremely slow, and the attacker knows which these are. 
Therefore, if the observed time to execute the decryption algorithm is always slow 
when this particular iteration is slow with a 1 bit, then this bit is assumed to be 1. 
If a number of observed execution times for the entire algorithm are fast, then this 
bit is assumed to be 0.
In practice, modular exponentiation implementations do not have such ex-
treme timing variations, in which the execution time of a single iteration can ex-
ceed the mean execution time of the entire algorithm. Nevertheless, there is enough 
variation to make this attack practical. For details, see [KOCH96].

306  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
Although the timing attack is a serious threat, there are simple countermea-
sures that can be used, including the following.
 
■Constant exponentiation time: Ensure that all exponentiations take the same 
amount of time before returning a result. This is a simple fix but does degrade 
performance.
 
■Random delay: Better performance could be achieved by adding a random 
delay to the exponentiation algorithm to confuse the timing attack. Kocher 
points out that if defenders don’t add enough noise, attackers could still suc-
ceed by collecting additional measurements to compensate for the random 
delays.
 
■Blinding: Multiply the ciphertext by a random number before performing ex-
ponentiation. This process prevents the attacker from knowing what cipher-
text bits are being processed inside the computer and therefore prevents the 
bit-by-bit analysis essential to the timing attack.
RSA Data Security incorporates a blinding feature into some of its products. 
The private-key operation M = Cd mod n is implemented as follows.
1. Generate a secret random number r between 0 and n - 1.
2. Compute C′ = C(r e) mod n, where e is the public exponent.
3. Compute M′ = (C′)d mod n with the ordinary RSA implementation.
4. Compute M = M′r -1 mod n. In this equation, r -1 is the multiplicative inverse 
of r mod n; see Chapter 2 for a discussion of this concept. It can be demon-
strated that this is the correct result by observing that r ed mod n = r mod n.
RSA Data Security reports a 2 to 10% performance penalty for blinding.
FAULT-BASED ATTACK Still another unorthodox approach to attacking RSA is re-
ported in [PELL10]. The approach is an attack on a processor that is generating 
RSA digital signatures. The attack induces faults in the signature computation by 
reducing the power to the processor. The faults cause the software to produce in-
valid signatures, which can then be analyzed by the attacker to recover the private 
key. The authors show how such an analysis can be done and then demonstrate it 
by extracting a 1024-bit private RSA key in approximately 100 hours, using a com-
mercially available microprocessor.
The attack algorithm involves inducing single-bit errors and observing the re-
sults. The details are provided in [PELL10], which also references other proposed 
hardware fault-based attacks against RSA.
This attack, while worthy of consideration, does not appear to be a serious 
threat to RSA. It requires that the attacker have physical access to the target ma-
chine and that the attacker is able to directly control the input power to the pro-
cessor. Controlling the input power would for most hardware require more than 
simply controlling the AC power, but would also involve the power supply control 
hardware on the chip.

9.2 / THE RSA ALGORITHM 307
CHOSEN CIPHERTEXT ATTACK AND OPTIMAL ASYMMETRIC ENCRYPTION PADDING The 
basic RSA algorithm is vulnerable to a chosen ciphertext attack (CCA). CCA is 
defined as an attack in which the adversary chooses a number of ciphertexts and 
is then given the corresponding plaintexts, decrypted with the target’s private key. 
Thus, the adversary could select a plaintext, encrypt it with the target’s public key, 
and then be able to get the plaintext back by having it decrypted with the private 
key. Clearly, this provides the adversary with no new information. Instead, the ad-
versary exploits properties of RSA and selects blocks of data that, when processed 
using the target’s private key, yield information needed for cryptanalysis.
A simple example of a CCA against RSA takes advantage of the following 
property of RSA:
  
E(PU, M1) * E(PU, M2) = E(PU, [M1 * M2]) 
  (9.2)
We can decrypt C = Me mod n using a CCA as follows.
1. Compute X = (C * 2e) mod n.
2. Submit X as a chosen ciphertext and receive back Y = Xd mod n.
But now note that
 X = (C mod n) * (2e mod n)
 = (Me mod n) * (2e mod n)
 = (2M)e mod n
Therefore, Y = (2M) mod n. From this, we can deduce M. To overcome this 
simple attack, practical RSA-based cryptosystems randomly pad the plaintext prior 
to encryption. This randomizes the ciphertext so that Equation (9.2) no longer 
holds. However, more sophisticated CCAs are possible, and a simple padding with a 
random value has been shown to be insufficient to provide the desired security. To 
counter such attacks, RSA Security Inc., a leading RSA vendor and former holder 
of the RSA patent, recommends modifying the plaintext using a procedure known 
as optimal asymmetric encryption padding (OAEP). A full discussion of the threats 
and OAEP are beyond our scope; see [POIN02] for an introduction and [BELL94] 
for a thorough analysis. Here, we simply summarize the OAEP procedure.
Figure 9.10 depicts OAEP encryption. As a first step, the message M to be en-
crypted is padded. A set of optional parameters, P, is passed through a hash func-
tion, H.8 The output is then padded with zeros to get the desired length in the overall 
data block (DB). Next, a random seed is generated and passed through another hash 
function, called the mask generating function (MGF). The resulting hash value is bit-
by-bit XORed with DB to produce a maskedDB. The maskedDB is in turn passed 
through the MGF to form a hash that is XORed with the seed to produce the masked-
seed. The concatenation of the maskedseed and the maskedDB forms the encoded 
message EM. Note that the EM includes the padded message, masked by the seed, 
and the seed, masked by the maskedDB. The EM is then encrypted using RSA.
8A hash function maps a variable-length data block or message into a fixed-length value called a hash 
code. Hash functions are discussed in depth in Chapter 11.

308  CHAPTER 9 / PUBLIC-KEY CRYPTOGRAPHY AND RSA
 9.3 KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS
Figure 9.10  Encryption Using Optimal Asymmetric 
Encryption Padding (OAEP)
Seed
Maskedseed
DB
MaskedDB
M
EM
Padding
H(P)
MGF
MGF
P
P = encoding parameters
M = message to be encoded
H = hash function
DB = data block
MGF = mask generating function
EM = encoded message
Key Terms 
chosen ciphertext attack  
(CCA)
digital signature
key exchange
one-way function
optimal asymmetric  encryption 
padding (OAEP)
private key
public key
public-key cryptography
public-key cryptosystems
public-key encryption
RSA
timing attack
trap-door one-way function
Review Questions 
 
9.1 
What is a public key certificate?
 
9.2 
What are the roles of the public and private key?
 
9.3 
What are three broad categories of applications of public-key cryptosystems?

314  CHAPTER 10 / OTHER PUBLIC-KEY CRYPTOSYSTEMS
This chapter begins with a description of one of the earliest and simplest PKCS: 
Diffie–Hellman key exchange. The chapter then looks at another important scheme, 
the Elgamal PKCS. Next, we look at the increasingly important PKCS known as  elliptic 
curve cryptography. Finally, the use of public-key algorithms for pseudorandom num-
ber generation is examined.
 10.1 DIFFIE–HELLMAN KEY EXCHANGE
The first published public-key algorithm appeared in the seminal paper by Diffie 
and Hellman that defined public-key cryptography [DIFF76b] and is generally re-
ferred to as Diffie–Hellman key exchange.1 A number of commercial products em-
ploy this key exchange technique.
The purpose of the algorithm is to enable two users to securely exchange a 
key that can then be used for subsequent symmetric encryption of messages. The 
algorithm itself is limited to the exchange of secret values.
The Diffie–Hellman algorithm depends for its effectiveness on the difficulty 
of computing discrete logarithms. Briefly, we can define the discrete logarithm in 
the following way. Recall from Chapter 2 that a primitive root of a prime number p 
is one whose powers modulo p generate all the integers from 1 to p - 1. That is, if 
a is a primitive root of the prime number p, then the numbers
 
a mod p, a2 mod p, c , ap-1 mod p 
are distinct and consist of the integers from 1 through p - 1 in some permutation.
For any integer b and a primitive root a of prime number p, we can find a 
unique exponent i such that
 
b K ai (mod p)  where 0 … i … (p - 1) 
1Williamson of Britain’s CESG published the identical scheme a few months earlier in a classified docu-
ment [WILL76] and claims to have discovered it several years prior to that; see [ELLI99] for a discussion.
LEARNING OBJECTIVES
After studying this chapter, you should be able to:
 
◆
Define Diffie–Hellman key exchange.
 
◆
Understand the man-in-the-middle attack.
 
◆
Present an overview of the Elgamal cryptographic system.
 
◆
Understand elliptic curve arithmetic.
 
◆
Present an overview of elliptic curve cryptography.
 
◆
Present two techniques for generating pseudorandom numbers using an 
asymmetric cipher.

10.1 / DIFFIE–HELLMAN KEY EXCHANGE 315
The exponent i is referred to as the discrete logarithm of b for the base a, mod p. We 
express this value as dloga,p(b). See Chapter 2 for an extended discussion of discrete 
logarithms.
The Algorithm
Figure 10.1 summarizes the Diffie–Hellman key exchange algorithm. For this 
scheme, there are two publicly known numbers: a prime number q and an inte-
ger a that is a primitive root of q. Suppose the users A and B wish to create a 
shared key.
User A selects a random integer XA 6 q and computes YA = aXA mod q. 
Similarly, user B independently selects a random integer XB 6 q and computes 
YB = aXB mod q. Each side keeps the X value private and makes the Y value avail-
able publicly to the other side. Thus, XA is A’s private key and YA is A’s correspond-
ing public key, and similarly for B. User A computes the key as K = (YB)XA mod q 
and user B computes the key as K = (YA)XB mod q. These two calculations produce 
identical results:
Figure 10.1 The Diffie–Hellman Key Exchange
Alice
Bob
Alice and Bob share a
prime number q and an
integer A, such that A < q and
A is a primitive root of q
Alice generates a private
key XA such that XA < q
Alice calculates a public
key YA = AXA mod q
Alice receives Bob’s
public key YB in plaintext
Alice calculates shared
secret key K = (YB)XA mod q
Bob calculates shared
secret key K = (YA)XB mod q
Bob receives Alice’s
public key YA in plaintext
Bob calculates a public
key YB = AXB mod q
Bob generates a private
key XB such that XB < q
Alice and Bob share a
prime number q and an
integer A, such that A < q and
A is a primitive root of q
YA
YB

316  CHAPTER 10 / OTHER PUBLIC-KEY CRYPTOSYSTEMS
 K = (YB)XA mod q
 = (aXB mod q)XA mod q
 = (aXB)XA mod q       by the rules of modular arithmetic
 = aXBXA mod q
 = (aXA)XB mod q
 = (aXA mod q)XB mod q
 = (YA)XB mod q
The result is that the two sides have exchanged a secret value. Typically, this 
secret value is used as shared symmetric secret key. Now consider an adversary who 
can observe the key exchange and wishes to determine the secret key K. Because 
XA and XB are private, an adversary only has the following ingredients to work with: 
q, a, YA, and YB. Thus, the adversary is forced to take a discrete logarithm to deter-
mine the key. For example, to determine the private key of user B, an adversary 
must compute
 
XB = dloga,q(YB) 
The adversary can then calculate the key K in the same manner as user B calculates 
it. That is, the adversary can calculate K as
 
K = (YA)XB mod q 
The security of the Diffie–Hellman key exchange lies in the fact that, while 
it is relatively easy to calculate exponentials modulo a prime, it is very difficult 
to calculate discrete logarithms. For large primes, the latter task is considered 
infeasible.
Here is an example. Key exchange is based on the use of the prime number 
q = 353 and a primitive root of 353, in this case a = 3. A and B select private keys 
XA = 97 and XB = 233, respectively. Each computes its public key:
A computes YA = 397 mod 353 = 40.
B computes YB = 3233 mod 353 = 248.
After they exchange public keys, each can compute the common secret key:
A computes K = (YB)XA mod 353 = 24897 mod 353 = 160.
B computes K = (YA)XB mod 353 = 40233 mod 353 = 160.
We assume an attacker would have available the following information:
 
q = 353; a = 3; YA = 40; YB = 248 
In this simple example, it would be possible by brute force to determine the secret 
key 160. In particular, an attacker E can determine the common key by discovering 
a solution to the equation 3a mod 353 = 40 or the equation 3b mod 353 = 248. The 
brute-force approach is to calculate powers of 3 modulo 353, stopping when the re-
sult equals either 40 or 248. The desired answer is reached with the exponent value 
of 97, which provides 397 mod 353 = 40.
With larger numbers, the problem becomes impractical.

10.1 / DIFFIE–HELLMAN KEY EXCHANGE 317
Key Exchange Protocols
Figure 10.1 shows a simple protocol that makes use of the Diffie–Hellman calcula-
tion. Suppose that user A wishes to set up a connection with user B and use a secret 
key to encrypt messages on that connection. User A can generate a one-time pri-
vate key XA, calculate YA, and send that to user B. User B responds by generating 
a private value XB, calculating YB, and sending YB to user A. Both users can now 
calculate the key. The necessary public values q and a would need to be known 
ahead of time. Alternatively, user A could pick values for q and a and include those 
in the first message.
As an example of another use of the Diffie–Hellman algorithm, suppose that a 
group of users (e.g., all users on a LAN) each generate a long-lasting private value Xi 
(for user i) and calculate a public value Yi. These public values, together with global 
public values for q and a, are stored in some central directory. At any time, user j 
can access user i’s public value, calculate a secret key, and use that to send an en-
crypted message to user A. If the central directory is trusted, then this form of com-
munication provides both confidentiality and a degree of authentication. Because 
only i and j can determine the key, no other user can read the message (confidential-
ity). Recipient i knows that only user j could have created a message using this key 
(authentication). However, the technique does not protect against replay attacks.
Man-in-the-Middle Attack
The protocol depicted in Figure 10.1 is insecure against a man-in-the-middle attack. 
Suppose Alice and Bob wish to exchange keys, and Darth is the adversary. The at-
tack proceeds as follows (Figure 10.2).
1. Darth prepares for the attack by generating two random private keys XD1 and 
XD2 and then computing the corresponding public keys YD1 and YD2.
2. Alice transmits YA to Bob.
3. Darth intercepts YA and transmits YD1 to Bob. Darth also calculates 
K2 = (YA)XD2 mod q.
4. Bob receives YD1 and calculates K1 = (YD1)XB mod q.
5. Bob transmits YB to Alice.
6. Darth intercepts YB and transmits YD2 to Alice. Darth calculates 
K1 = (YB)XD1 mod q.
7. Alice receives YD2 and calculates K2 = (YD2)XA mod q.
At this point, Bob and Alice think that they share a secret key, but instead 
Bob and Darth share secret key K1 and Alice and Darth share secret key K2. All 
future communication between Bob and Alice is compromised in the following way.
1. Alice sends an encrypted message M: E(K2, M).
2. Darth intercepts the encrypted message and decrypts it to recover M.
3. Darth sends Bob E(K1, M) or E(K1, M=), where M= is any message. In the first 
case, Darth simply wants to eavesdrop on the communication without altering 
it. In the second case, Darth wants to modify the message going to Bob.

318  CHAPTER 10 / OTHER PUBLIC-KEY CRYPTOSYSTEMS
The key exchange protocol is vulnerable to such an attack because it does not 
authenticate the participants. This vulnerability can be overcome with the use of digital 
signatures and public-key certificates; these topics are explored in Chapters 13 and 14.
 10.2 ELGAMAL CRYPTOGRAPHIC SYSTEM
In 1984, T. Elgamal announced a public-key scheme based on discrete  logarithms, 
closely related to the Diffie–Hellman technique [ELGA84, ELGA85]. The Elgamal2 
cryptosystem is used in some form in a number of standards including the digital 
signature standard (DSS), which is covered in Chapter 13, and the S/MIME email 
standard (Chapter 19).
2For no apparent reason, most of the literature uses the term ElGamal, although Mr. Elgamal’s last name 
does not have a capital letter G.
Figure 10.2 Man-in-the-Middle Attack
Alice
Darth
Bob
Private key XA
Public key
YA = AXA mod q 
Private key XB
Public key
YB = AXB mod q 
Private keys XD1, XD2
Public keys
YD1 = AXD1 mod q
YD2 = AXD2 mod q
YA 
Secret key
K2 = (YA)XD2 mod q
Secret key
K1 = (YB)XD1 mod q
Secret key
K1 = (YD1)XB mod q
Secret key
K2 = (YD2)XA mod q
Alice and Darth
share K2
Bob and Darth
share K1
  
YD2 
YD1 
YB 

330  CHAPTER 10 / OTHER PUBLIC-KEY CRYPTOSYSTEMS
4. If P = (xP, yP) then R = 2P = (xR, yR) is determined by the following rules:
 xR = l2 + l + a
 yR = xP
2 + (l + 1)xR
where
l = xP + yP
xP
 10.4 ELLIPTIC CURVE CRYPTOGRAPHY
The addition operation in ECC is the counterpart of modular multiplication in 
RSA, and multiple addition is the counterpart of modular exponentiation. To form 
a cryptographic system using elliptic curves, we need to find a “hard problem” cor-
responding to factoring the product of two primes or taking the discrete logarithm.
Consider the equation Q = kP where Q, P ∈EP(a, b) and k 6 p. It is rela-
tively easy to calculate Q given k and P, but it is hard to determine k given Q and P. 
This is called the discrete logarithm problem for elliptic curves.
We give an example taken from the Certicom Web site (www.certicom.
com). Consider the group E23(9,17). This is the group defined by the equation 
y2 mod 23 = (x3 + 9x + 17) mod 23. What is the discrete logarithm k of Q = (4, 5) 
to the base P = (16, 5)? The brute-force method is to compute multiples of P until 
Q is found. Thus,
 P = (16,5); 2P = (20, 20); 3P = (14, 14); 4P = (19, 20); 5P = (13, 10);
 6P = (7, 3); 7P = (8, 7); 8P = (12, 17); 9P = (4, 5)
Figure 10.6 The Elliptic Curve E24(g4, 1)

g
g2
g3
g4
g5
g6
g7
g8
g9
g10
g11
g12
g13
g14

g
g2 g3 g4 g5 g6 g7 g8 g9 g10 g11
x
y
g12 g13 g14 0

10.4 / ELLIPTIC CURVE CRYPTOGRAPHY 331
Because 9P = (4, 5) = Q, the discrete logarithm Q = (4, 5) to the base 
P = (16, 5) is k = 9. In a real application, k would be so large as to make the brute-
force approach infeasible.
In the remainder of this section, we show two approaches to ECC that give the 
flavor of this technique.
Analog of Diffie–Hellman Key Exchange
Key exchange using elliptic curves can be done in the following manner. First pick 
a large integer q, which is either a prime number p or an integer of the form 2m, 
and elliptic curve parameters a and b for Equation (10.5) or Equation (10.7). This 
defines the elliptic group of points Eq(a, b). Next, pick a base point G = (x1, y1) in 
Ep(a, b) whose order is a very large value n. The order n of a point G on an elliptic 
curve is the smallest positive integer n such that nG = 0 and G are parameters of 
the cryptosystem known to all participants.
A key exchange between users A and B can be accomplished as follows 
(Figure 10.7).
1. A selects an integer nA less than n. This is A’s private key. A then generates a 
public key PA = nA * G; the public key is a point in Eq(a, b).
2. B similarly selects a private key nB and computes a public key PB.
3. A generates the secret key k = nA * PB. B generates the secret key 
k = nB * PA.
The two calculations in step 3 produce the same result because
 
nA * PB = nA * (nB * G) = nB * (nA * G) = nB * PA 
To break this scheme, an attacker would need to be able to compute k given G 
and kG, which is assumed to be hard.
As an example,6 take p = 211; Ep(0, -4), which is equivalent to the curve 
y2 = x3 - 4; and G = (2, 2). One can calculate that 240G = O. A’s private key 
is nA = 121, so A’s public key is PA = 121(2, 2) = (115, 48). B’s private key is 
nB = 203, so B’s public key is 203(2, 3) = (130, 203). The shared secret key is 
121(130, 203) = 203(115, 48) = (161, 69).
Note that the secret key is a pair of numbers. If this key is to be used as a ses-
sion key for conventional encryption, then a single number must be generated. We 
could simply use the x coordinates or some simple function of the x coordinate.
Elliptic Curve Encryption/Decryption
Several approaches to encryption/decryption using elliptic curves have been ana-
lyzed in the literature. In this subsection, we look at perhaps the simplest. The 
first task in this system is to encode the plaintext message m to be sent as an (x, y) 
point Pm.
6Provided by Ed Schaefer of Santa Clara University.

332  CHAPTER 10 / OTHER PUBLIC-KEY CRYPTOSYSTEMS
It is the point Pm that will be encrypted as a ciphertext and subsequently decrypted. 
Note that we cannot simply encode the message as the x or y coordinate of a point, 
because not all such coordinates are in Eq(a, b); for example, see Table 10.1. Again, 
there are several approaches to this encoding, which we will not address here, but 
suffice it to say that there are relatively straightforward techniques that can be 
used.
As with the key exchange system, an encryption/decryption system requires a 
point G and an elliptic group Eq(a, b) as parameters. Each user A selects a private 
key nA and generates a public key PA = nA * G.
To encrypt and send a message Pm to B, A chooses a random positive integer 
k and produces the ciphertext Cm consisting of the pair of points:
 
Cm = {kG, Pm + kPB} 
Note that A has used B’s public key PB. To decrypt the ciphertext, B multiplies the 
first point in the pair by B’s private key and subtracts the result from the second 
point:
 
Pm + kPB - nB(kG) = Pm + k(nBG) - nB(kG) = Pm 
Figure 10.7 ECC Diffie–Hellman Key Exchange
 
Global Public Elements
Eq(a, b) 
elliptic curve with parameters a, b, and q, where q is a  
 
prime or an integer of the form 2m
G 
point on elliptic curve whose order is large value n
User A Key Generation
Select private nA 
nA 6 n
Calculate public PA 
PA = nA * G
User B Key Generation
Select private nB 
nB 6 n
Calculate public PB 
PB = nB * G
Calculation of Secret Key by User A
K = nA * PB
Calculation of Secret Key by User B
K = nB * PA

10.4 / ELLIPTIC CURVE CRYPTOGRAPHY 333
A has masked the message Pm by adding kPB to it. Nobody but A knows 
the value of k, so even though Pb is a public key, nobody can remove the mask 
kPB. However, A also includes a “clue,” which is enough to remove the mask if 
one knows the private key nB. For an attacker to recover the message, the attacker 
would have to compute k given G and kG, which is assumed to be hard.
Let us consider a simple example. The global public elements are q = 257; 
Eq(a, b) = E257(0, -4), which is equivalent to the curve y2 = x3 - 4; and G = 
(2, 2). Bob’s private key is nB = 101, and his public key is  PB = nBG = 101(2, 2) = 
(197, 167). Alice wishes to send a message to Bob that is encoded in the elliptic 
point Pm = (112, 26). Alice chooses random integer k = 41 and computes kG = 
41(2, 2) = (136, 128), kPB = 41(197, 167) = (68, 84) and Pm + kPB = (112, 26) 
+ (68, 84) = (246, 174). Alice sends the ciphertext Cm = (C1, C2) = {(136, 128),
(246, 174)} to Bob. Bob receives the ciphertext and computes C2 - nBC1 =
(246, 174) - 101(136, 128) = (246, 174) - (68, 84) = (112, 26).
Security of Elliptic Curve Cryptography
The security of ECC depends on how difficult it is to determine k given kP and P. 
This is referred to as the elliptic curve logarithm problem. The fastest known tech-
nique for taking the elliptic curve logarithm is known as the Pollard rho method. 
Table 10.3, from NIST SP 800-57 (Recommendation for Key Management—Part 1: 
General, September 2015), compares various algorithms by showing comparable 
key sizes in terms of computational effort for cryptanalysis. As can be seen, a con-
siderably smaller key size can be used for ECC compared to RSA.
Based on this analysis, SP 800-57 recommends that at least through 2030, ac-
ceptable key lengths are from 3072 to 14,360 bits for RSA and 256 to 512 bits for 
ECC. Similarly, the European Union Agency for Network and Information Security 
(ENISA) recommends in their 2014 report (Algorithms, Key Size and Parameters 
report—2014, November 2014) minimum key lengths for future system of 3072 bits 
and 256 bits for RSA and ECC, respectively.
Symmetric Key 
Algorithms
Diffie–Hellman, Digital 
Signature Algorithm
RSA  
(size of n in bits)
ECC  
(modulus size in bits)

L = 1024
N = 160

160–223

L = 2048
N = 224

224–255

L = 3072
N = 256

256–383

L = 7680
N = 384

384–511

L = 15,360
N = 512
15,360
512+
Note: L = size of public key, N = size of private key.
Table 10.3 Comparable Key Sizes in Terms of Computational  
Effort for Cryptanalysis (NIST SP-800-57)

334  CHAPTER 10 / OTHER PUBLIC-KEY CRYPTOSYSTEMS
Analysis indicates that for equal key lengths, the computational effort re-
quired for ECC and RSA is comparable [JURI97]. Thus, there is a computational 
advantage to using ECC with a shorter key length than a comparably secure RSA.
 10.5 PSEUDORANDOM NUMBER GENERATION BASED 
ON AN ASYMMETRIC CIPHER
We noted in Chapter 8 that because a symmetric block cipher produces an appar-
ently random output, it can serve as the basis of a pseudorandom number generator 
(PRNG). Similarly, an asymmetric encryption algorithm produces apparently ran-
dom output and can be used to build a PRNG. Because asymmetric algorithms are 
typically much slower than symmetric algorithms, asymmetric algorithms are not 
used to generate open-ended PRNG bit streams. Rather, the asymmetric approach 
is useful for creating a pseudorandom function (PRF) for generating a short pseu-
dorandom bit sequence. 
In this section, we examine two PRNG designs based on pseudorandom 
functions.
PRNG Based on RSA
For a sufficient key length, the RSA algorithm is considered secure and is a good 
candidate to form the basis of a PRNG. Such a PRNG, known as the Micali–Schnorr 
PRNG [MICA91], is recommended in the ANSI standard X9.82 (Random Number 
Generation) and in the ISO standard 18031 (Random Bit Generation).
The PRNG is illustrated in Figure 10.8. As can be seen, this PRNG has much 
the same structure as the output feedback (OFB) mode used as a PRNG (see Figure 
8.4b and the portion of Figure 7.6a enclosed with a dashed box). In this case, the 
encryption algorithm is RSA rather than a symmetric block cipher. Also, a portion 
of the output is fed back to the next iteration of the encryption algorithm and the 
remainder of the output is used as pseudorandom bits. The motivation for this sepa-
ration of the output into two distinct parts is so that the pseudorandom bits from 
one stage do not provide input to the next stage. This separation should contribute 
to forward unpredictability.
Figure 10.8 Micali–Schnorr Pseudorandom Bit Generator
Seed = x0
x1 = r most
significant bits
z1 = k least
significant bits
y1 = x0 mod n
e
n, e, r, k
n, e, r, k
n, e, r, k
x2 = r most
significant bits
z2 = k least
significant bits
x3 = r most
significant bits
z3 = k least
significant bits
y2 = x1 mod n
e
y3 = x2 mod n
e
Encrypt
Encrypt
Encrypt

---

## Module 3 Textbook

11.1 / APPLICATIONS OF CRYPTOGRAPHIC HASH FUNCTIONS 341
 11.1 APPLICATIONS OF CRYPTOGRAPHIC HASH FUNCTIONS
Perhaps the most versatile cryptographic algorithm is the cryptographic hash func-
tion. It is used in a wide variety of security applications and Internet protocols. 
To better understand some of the requirements and security implications for cryp-
tographic hash functions, it is useful to look at the range of applications in which it 
is employed.
Message Authentication
Message authentication is a mechanism or service used to verify the integrity of 
a message. Message authentication assures that data received are exactly as sent 
(i.e., there is no modification, insertion, deletion, or replay). In many cases, there is 
a requirement that the authentication mechanism assures that purported identity of 
the sender is valid. When a hash function is used to provide message authentication, 
the hash function value is often referred to as a message digest.1
The essence of the use of a hash function for message integrity is as follows. 
The sender computes a hash value as a function of the bits in the message and trans-
mits both the hash value and the message. The receiver performs the same hash cal-
culation on the message bits and compares this value with the incoming hash value. 
Figure 11.1 Cryptographic Hash Function; h = H(M)
Message or data block M (variable length)
P, L
P, L = padding plus length field
L bits
Hash value h
(fixed length)
H
1The topic of this section is invariably referred to as message authentication. However, the concepts and 
techniques apply equally to data at rest. For example, authentication techniques can be applied to a file 
in storage to assure that the file is not tampered with.
MODULE 3

342  CHAPTER 11 / CRYPTOGRAPHIC HASH FUNCTIONS
If there is a mismatch, the receiver knows that the message (or possibly the hash 
value) has been altered (Figure 11.2a).
The hash value must be transmitted in a secure fashion. That is, the hash value 
must be protected so that if an adversary alters or replaces the message, it is not 
feasible for adversary to also alter the hash value to fool the receiver. This type 
of attack is shown in Figure 11.2b. In this example, Alice transmits a data block 
and  attaches a hash value. Darth intercepts the message, alters or replaces the data 
block, and calculates and attaches a new hash value. Bob receives the altered data 
with the new hash value and does not detect the change. To prevent this attack, the 
hash value generated by Alice must be protected.
Figure 11.2 Attack Against Hash Function
(b) Man-in-the-middle attack
Alice
Darth
Bob
Bob
Alice
COMPARE
data
data
data
H
data
data
data
H
H
(a) Use of hash function to check data integrity
COMPARE
data
data
data
H
H

11.1 / APPLICATIONS OF CRYPTOGRAPHIC HASH FUNCTIONS 343
Figure 11.3 illustrates a variety of ways in which a hash code can be used to 
provide message authentication, as follows.
a. The message plus concatenated hash code is encrypted using symmetric 
encryption. Because only A and B share the secret key, the message must have 
come from A and has not been altered. The hash code provides the structure or 
redundancy required to achieve authentication. Because encryption is applied 
to the entire message plus hash code, confidentiality is also provided.
b. Only the hash code is encrypted, using symmetric encryption. This reduces the 
processing burden for those applications that do not require confidentiality.
Figure 11.3 Simplified Examples of the Use of a Hash Function for Message Authentication
E
K
M
H
| |
D
K
M
H(M )
H
Compare
(a)
M
H
| |
K
(b)
M
D
H
Compare
K
E
E(K, [M || H(M )])
E(K, H(M ))
Destination B
Source A
| |
S
M
H
| |
S
(c)
| |
M
H(M || S)
H(M || S)
H
Compare
M
H
| |
S
(d)
| |
E
K
| |
S
H
Compare
M
D
K
E(K, [M || H(M || S)])

344  CHAPTER 11 / CRYPTOGRAPHIC HASH FUNCTIONS
c. It is possible to use a hash function but no encryption for message authentica-
tion. The technique assumes that the two communicating parties share a common 
secret value S. A computes the hash value over the concatenation of M and S and 
appends the resulting hash value to M. Because B possesses S, it can recompute 
the hash value to verify. Because the secret value itself is not sent, an opponent 
cannot modify an intercepted message and cannot generate a false message.
d. Confidentiality can be added to the approach of method (c) by encrypting the 
entire message plus the hash code.
When confidentiality is not required, method (b) has an advantage over 
methods (a) and (d), which encrypts the entire message, in that less computa-
tion is required. Nevertheless, there has been growing interest in techniques that 
avoid encryption (Figure 11.3c). Several reasons for this interest are pointed out 
in [TSUD92].
 
■Encryption software is relatively slow. Even though the amount of data to be 
encrypted per message is small, there may be a steady stream of messages into 
and out of a system.
 
■Encryption hardware costs are not negligible. Low-cost chip implementations 
of DES are available, but the cost adds up if all nodes in a network must have 
this capability.
 
■Encryption hardware is optimized toward large data sizes. For small blocks of 
data, a high proportion of the time is spent in initialization/invocation overhead.
 
■Encryption algorithms may be covered by patents, and there is a cost associ-
ated with licensing their use.
More commonly, message authentication is achieved using a message 
 authentication code (MAC), also known as a keyed hash function. Typically, MACs 
are used between two parties that share a secret key to authenticate information 
 exchanged between those parties. A MAC function takes as input a secret key and 
a data block and produces a hash value, referred to as the MAC, which is associ-
ated with the protected message. If the integrity of the message needs to be checked, 
the MAC function can be applied to the message and the result compared with the 
 associated MAC value. An attacker who alters the message will be unable to alter the 
associated MAC value without knowledge of the secret key. Note that the verifying 
party also knows who the sending party is because no one else knows the secret key.
Note that the combination of hashing and encryption results in an overall 
function that is, in fact, a MAC (Figure 11.3b). That is, E(K, H(M)) is a function of 
a variable-length message M and a secret key K, and it produces a fixed-size output 
that is secure against an opponent who does not know the secret key. In practice, 
specific MAC algorithms are designed that are generally more efficient than an 
 encryption algorithm.
We discuss MACs in Chapter 12.
Digital Signatures
Another important application, which is similar to the message authentication 
 application, is the digital signature. The operation of the digital signature is similar 
to that of the MAC. In the case of the digital signature, the hash value of a message 

11.1 / APPLICATIONS OF CRYPTOGRAPHIC HASH FUNCTIONS 345
is encrypted with a user’s private key. Anyone who knows the user’s public key can 
verify the integrity of the message that is associated with the digital signature. In 
this case, an attacker who wishes to alter the message would need to know the user’s 
private key. As we shall see in Chapter 14, the implications of digital signatures go 
beyond just message authentication.
Figure 11.4 illustrates, in a simplified fashion, how a hash code is used to 
 provide a digital signature.
a. The hash code is encrypted, using public-key encryption with the sender’s 
 private key. As with Figure 11.3b, this provides authentication. It also provides 
a digital signature, because only the sender could have produced the encrypted 
hash code. In fact, this is the essence of the digital signature technique.
b. If confidentiality as well as a digital signature is desired, then the message 
plus the private-key-encrypted hash code can be encrypted using a symmetric 
 secret key. This is a common technique.
Other Applications
Hash functions are commonly used to create a one-way password file. Chapter 21 
explains a scheme in which a hash of a password is stored by an operating system 
rather than the password itself. Thus, the actual password is not retrievable by a 
hacker who gains access to the password file. In simple terms, when a user enters a 
password, the hash of that password is compared to the stored hash value for veri-
fication. This approach to password protection is used by most operating systems.
Hash functions can be used for intrusion detection and virus detection. Store 
H(F) for each file on a system and secure the hash values (e.g., on a CD-R that is 
Figure 11.4 Simplified Examples of Digital Signatures
M
H
| |
E
E
K
D
K
M
D
H
Compare
(b)
E(PRa, H(M ))
E(K, [M || E(PRa, H(M ))]) 
Destination B
Source A
PRa
PRa
PUa
PUa
M
H
| |
(a)
M
E
D
H
Compare
E(PRa, H(M ))

346  CHAPTER 11 / CRYPTOGRAPHIC HASH FUNCTIONS
kept secure). One can later determine if a file has been modified by recomputing 
H(F). An intruder would need to change F without changing H(F).
A cryptographic hash function can be used to construct a pseudorandom 
 function (PRF) or a pseudorandom number generator (PRNG). A common 
 application for a hash-based PRF is for the generation of symmetric keys. We  discuss 
this  application in Chapter 12.
 11.2 TWO SIMPLE HASH FUNCTIONS
To get some feel for the security considerations involved in cryptographic hash 
functions, we present two simple, insecure hash functions in this section. All hash 
functions operate using the following general principles. The input (message, file, 
etc.) is viewed as a sequence of n -bit blocks. The input is processed one block at a 
time in an iterative fashion to produce an n-bit hash function.
One of the simplest hash functions is the bit-by-bit exclusive-OR (XOR) of 
every block. This can be expressed as
 
Ci = bi1 ⊕bi2 ⊕g ⊕bim 
where
Ci = ith bit of the hash code, 1 … i … n
m = number of n@bit blocks in the input
bij = ith bit in jth block
⊕= XOR operation
This operation produces a simple parity bit for each bit position and is known 
as a longitudinal redundancy check. It is reasonably effective for random data as a 
data integrity check. Each n-bit hash value is equally likely. Thus, the probability 
that a data error will result in an unchanged hash value is 2-n. With more predict-
ably formatted data, the function is less effective. For example, in most normal text 
files, the high-order bit of each octet is always zero. So if a 128-bit hash value is 
used, instead of an effectiveness of 2-128, the hash function on this type of data has 
an effectiveness of 2-112.
A simple way to improve matters is to perform a one-bit circular shift, or 
 rotation, on the hash value after each block is processed. The procedure can be 
summarized as follows.
1. Initially set the n-bit hash value to zero.
2. Process each successive n-bit block of data as follows:
a. Rotate the current hash value to the left by one bit.
b. XOR the block into the hash value.
This has the effect of “randomizing” the input more completely and overcoming 
any regularities that appear in the input. Figure 11.5 illustrates these two types of 
hash functions for 16-bit hash values.

11.2 / TWO SIMPLE HASH FUNCTIONS 347
Although the second procedure provides a good measure of data integrity, it is 
virtually useless for data security when an encrypted hash code is used with a plain-
text message, as in Figures 11.3b and 11.4a. Given a message, it is an easy  matter 
to produce a new message that yields that hash code: Simply prepare the  desired 
alternate message and then append an n-bit block that forces the new  message plus 
block to yield the desired hash code.
Although a simple XOR or rotated XOR (RXOR) is insufficient if only the 
hash code is encrypted, you may still feel that such a simple function could be 
 useful when the message together with the hash code is encrypted (Figure 11.3a). 
But you must be careful. A technique originally proposed by the National 
Bureau of Standards used the simple XOR applied to 64-bit blocks of the mes-
sage and then an encryption of the entire message that used the cipher block 
chaining (CBC) mode. We can define the scheme as follows: Given a message M 
consisting of a sequence of 64-bit blocks X1, X2, c , XN, define the hash code 
Figure 11.5 Two Simple Hash Functions
XOR of every 16-bit block
XOR with 1-bit r otation to the right
16 bits

348  CHAPTER 11 / CRYPTOGRAPHIC HASH FUNCTIONS
h = H(M) as the block-by-block XOR of all blocks and append the hash code as 
the final block:
 
h = XN+1 = X1 ⊕X2 ⊕c ⊕XN 
Next, encrypt the entire message plus hash code using CBC mode to produce the 
encrypted message Y1, Y2, c , YN+1. [JUEN85] points out several ways in which 
the ciphertext of this message can be manipulated in such a way that it is not detect-
able by the hash code. For example, by the definition of CBC (Figure 6.4), we have
 X1 = IV ⊕D(K,Y1)
 Xi = Yi-1 ⊕D(K, Yi)
 XN+1 = YN ⊕D(K, YN+1)
But XN+1 is the hash code:
 XN+1 = X1 ⊕X2 ⊕c ⊕XN
 = [IV ⊕D(K, Y1)] ⊕[Y1 ⊕D(K, Y2)] ⊕c ⊕[YN-1 ⊕D(K, YN)] 
Because the terms in the preceding equation can be XORed in any order, it follows 
that the hash code would not change if the ciphertext blocks were permuted.
 11.3 REQUIREMENTS AND SECURITY
Before proceeding, we need to define two terms. For a hash value h = H(x), we 
say that x is the preimage of h. That is, x is a data block whose hash value, using the 
function H, is h. Because H is a many-to-one mapping, for any given hash value h, 
there will in general be multiple preimages. A collision occurs if we have x ≠y and 
H(x) = H(y). Because we are using hash functions for data integrity, collisions are 
clearly undesirable.
Let us consider how many preimages are there for a given hash value, which is 
a measure of the number of potential collisions for a given hash value. Suppose the 
length of the hash code is n bits, and the function H takes as input messages or data 
blocks of length b bits with b 7 n. Then, the total number of possible messages is 
2b and the total number of possible hash values is 2n. On average, each hash value 
corresponds to 2b-n preimages. If H tends to uniformly distribute hash values then, 
in fact, each hash value will have close to 2b-n preimages. If we now allow inputs 
of arbitrary length, not just a fixed length of some number of bits, then the number 
of preimages per hash value is arbitrarily large. However, the security risks in the 
use of a hash function are not as severe as they might appear from this analysis. 
To  understand better the security implications of cryptographic hash functions, we 
need precisely define their security requirements.
Security Requirements for Cryptographic Hash Functions
Table 11.1 lists the generally accepted requirements for a cryptographic hash func-
tion. The first three properties are requirements for the practical application of a 
hash function.

442  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
The topics of cryptographic key management and cryptographic key distribution are 
complex, involving cryptographic, protocol, and management considerations. The pur-
pose of this chapter is to give the reader a feel for the issues involved and a broad sur-
vey of the various aspects of key management and distribution. For more information, 
the place to start is the three-volume NIST SP 800-57, followed by the recommended 
readings listed at the end of this chapter.
 14.1 SYMMETRIC KEY DISTRIBUTION USING 
SYMMETRIC ENCRYPTION
For symmetric encryption to work, the two parties to an exchange must share the 
same key, and that key must be protected from access by others. Furthermore, fre-
quent key changes are usually desirable to limit the amount of data compromised 
if an attacker learns the key. Therefore, the strength of any cryptographic system 
rests with the key distribution technique, a term that refers to the means of delivering 
a key to two parties who wish to exchange data without allowing others to see the 
key. For two parties A and B, key distribution can be achieved in a number of ways, 
as follows:
1. A can select a key and physically deliver it to B.
2. A third party can select the key and physically deliver it to A and B.
3. If A and B have previously and recently used a key, one party can transmit the 
new key to the other, encrypted using the old key.
4. If A and B each has an encrypted connection to a third party C, C can deliver 
a key on the encrypted links to A and B.
Options 1 and 2 call for manual delivery of a key. For link encryption, this 
is a reasonable requirement, because each link encryption device is going to be 
 exchanging data only with its partner on the other end of the link. However, for 
 end-to-end encryption over a network, manual delivery is awkward. In a distributed 
system, any given host or terminal may need to engage in exchanges with many other 
LEARNING OBJECTIVES
After studying this chapter, you should be able to:
 
◆
Discuss the concept of a key hierarchy.
 
◆
Understand the issues involved in using asymmetric encryption to distribute 
symmetric keys.
 
◆
Present an overview of approaches to public-key distribution and analyze 
the risks involved in various approaches.
 
◆
List and explain the elements in an X.509 certificate.
 
◆
Present an overview of public-key infrastructure concepts.

14.1 / SYMMETRIC KEY DISTRIBUTION USING SYMMETRIC ENCRYPTION 443
hosts and terminals over time. Thus, each device needs a number of keys supplied 
dynamically. The problem is especially difficult in a wide-area distributed system.
The scale of the problem depends on the number of communicating pairs that 
must be supported. If end-to-end encryption is done at a network or IP level, then a 
key is needed for each pair of hosts on the network that wish to communicate. Thus, 
if there are N hosts, the number of required keys is [N(N - 1)]/2. If encryption is 
done at the application level, then a key is needed for every pair of users or pro-
cesses that require communication. Thus, a network may have hundreds of hosts 
but thousands of users and processes. Figure 14.1 illustrates the magnitude of the 
key distribution task for end-to-end encryption.1 A network using node-level 
 encryption with 1000 nodes would conceivably need to distribute as many as half a 
million keys. If that same network supported 10,000 applications, then as many as 
50 million keys may be required for application-level encryption.
Returning to our list, option 3 is a possibility for either link encryption or 
 end-to-end encryption, but if an attacker ever succeeds in gaining access to one key, 
then all subsequent keys will be revealed. Furthermore, the initial distribution of 
potentially millions of keys still must be made.
1Note that this figure uses a log-log scale, so that a linear graph indicates exponential growth. A basic 
review of log scales is in the math refresher document at the Computer Science Student Resource Site at 
WilliamStallings.com/StudentSupport.html.
Figure 14.1  Number of Keys Required to Support Arbitrary Connections between 
Endpoints

Number of keys

8 9

8 9

8 9
Number of endpoints

444  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
For end-to-end encryption, some variation on option 4 has been widely 
 adopted. In this scheme, a key distribution center is responsible for distributing 
keys to pairs of users (hosts, processes, applications) as needed. Each user must 
share a unique key with the key distribution center for purposes of key distribution.
The use of a key distribution center is based on the use of a hierarchy of keys. 
At a minimum, two levels of keys are used (Figure 14.2). Communication between 
end systems is encrypted using a temporary key, often referred to as a session key. 
Typically, the session key is used for the duration of a logical connection, such as a 
frame relay connection or transport connection, and then discarded. Each session 
key is obtained from the key distribution center over the same networking facili-
ties used for end-user communication. Accordingly, session keys are transmitted in 
encrypted form, using a master key that is shared by the key distribution center and 
an end system or user.
For each end system or user, there is a unique master key that it shares with 
the key distribution center. Of course, these master keys must be securely distrib-
uted in some fashion. However, the scale of the problem is vastly reduced. If there 
are N entities that wish to communicate in pairs, then, as was mentioned, as many 
as [N(N - 1)]/2 session keys are needed at any one time. However, only N master 
keys are required, one for each entity. Thus, master keys can be distributed in some 
non-cryptographic way, such as physical delivery.
A Key Distribution Scenario
The key distribution concept can be deployed in a number of ways. A  typical 
 scenario is illustrated in Figure 14.3, which is based on a figure in [POPE79]. The sce-
nario assumes that each user shares a unique master key with the key  distribution 
center (KDC).
Let us assume that user A wishes to establish a logical connection with B and 
requires a one-time session key to protect the data transmitted over the connection. 
Figure 14.2 The Use of a Key Hierarchy
Data
Cryptographic
protection
Session keys
Cryptographic
protection
Master keys
Non-cryptographic
protection

14.1 / SYMMETRIC KEY DISTRIBUTION USING SYMMETRIC ENCRYPTION 445
A has a master key, Ka, known only to itself and the KDC; similarly, B shares the 
master key Kb with the KDC. The following steps occur.
1. A issues a request to the KDC for a session key to protect a logical connection 
to B. The message includes the identity of A and B and a unique identifier, N1, 
for this transaction, which we refer to as a nonce. The nonce may be a timestamp, 
a counter, or a random number; the minimum requirement is that it differs with 
each request. Also, to prevent masquerade, it should be difficult for an opponent 
to guess the nonce. Thus, a random number is a good choice for a nonce.
2. The KDC responds with a message encrypted using Ka. Thus, A is the only one 
who can successfully read the message, and A knows that it originated at the 
KDC. The message includes two items intended for A:
 
■The one-time session key, Ks, to be used for the session
 
■The original request message, including the nonce, to enable A to match 
this response with the appropriate request
Thus, A can verify that its original request was not altered before reception by 
the KDC and, because of the nonce, that this is not a replay of some previous 
request.
In addition, the message includes two items intended for B:
 
■The one-time session key, Ks, to be used for the session
 
■An identifier of A (e.g., its network address), IDA
These last two items are encrypted with Kb (the master key that the KDC 
shares with B). They are to be sent to B to establish the connection and prove 
A’s identity.
Figure 14.3 Key Distribution Scenario
Key Distribution
Center (KDC)
Key
distribution
steps
Authentication
steps
Initiator A
Responder B
(1) IDA || IDB || N1
(2) E(Ka, [Ks || IDA || IDB || N1])
|| E(Kb, [Ks || IDA])
(3) E(Kb, [Ks || IDA])
(4) E(Ks, N2)
(5) E(Ks, f(N2))

446  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
3. A stores the session key for use in the upcoming session and forwards to B 
the  information that originated at the KDC for B, namely, E(Kb,[Ks }IDA]). 
Because this information is encrypted with Kb, it is protected from eavesdrop-
ping. B now knows the session key (Ks), knows that the other party is A (from 
IDA), and knows that the information originated at the KDC  (because it is 
encrypted using Kb).
At this point, a session key has been securely delivered to A and B, and they 
may begin their protected exchange. However, two additional steps are desirable:
4. Using the newly minted session key for encryption, B sends a nonce, N2, to A.
5. Also, using Ks, A responds with f(N2), where f is a function that performs some 
transformation on N2 (e.g., adding one).
These steps assure B that the original message it received (step 3) was not a replay.
Note that the actual key distribution involves only steps 1 through 3, but that 
steps 4 and 5, as well as step 3, perform an authentication function.
Hierarchical Key Control
It is not necessary to limit the key distribution function to a single KDC. Indeed, for 
very large networks, it may not be practical to do so. As an alternative, a hierarchy 
of KDCs can be established. For example, there can be local KDCs, each respon-
sible for a small domain of the overall internetwork, such as a single LAN or a single 
building. For communication among entities within the same local domain, the local 
KDC is responsible for key distribution. If two entities in different domains desire a 
shared key, then the corresponding local KDCs can communicate through a global 
KDC. In this case, any one of the three KDCs involved can actually select the key. 
The hierarchical concept can be extended to three or even more layers, depending 
on the size of the user population and the geographic scope of the internetwork.
A hierarchical scheme minimizes the effort involved in master key distri-
bution, because most master keys are those shared by a local KDC with its local 
 entities. Furthermore, such a scheme limits the damage of a faulty or subverted 
KDC to its local area only.
Session Key Lifetime
The more frequently session keys are exchanged, the more secure they are, because 
the opponent has less ciphertext to work with for any given session key. On the 
other hand, the distribution of session keys delays the start of any exchange and 
places a burden on network capacity. A security manager must try to balance these 
competing considerations in determining the lifetime of a particular session key.
For connection-oriented protocols, one obvious choice is to use the same ses-
sion key for the length of time that the connection is open, using a new session key 
for each new session. If a logical connection has a very long lifetime, then it would 
be prudent to change the session key periodically, perhaps every time the PDU 
(protocol data unit) sequence number cycles.
For a connectionless protocol, such as a transaction-oriented protocol, there 
is no explicit connection initiation or termination. Thus, it is not obvious how often 
one needs to change the session key. The most secure approach is to use a new 

14.1 / SYMMETRIC KEY DISTRIBUTION USING SYMMETRIC ENCRYPTION 447
session key for each exchange. However, this negates one of the principal benefits 
of connectionless protocols, which is minimum overhead and delay for each transac-
tion. A better strategy is to use a given session key for a certain fixed period only or 
for a certain number of transactions.
A Transparent Key Control Scheme
The approach suggested in Figure 14.3 has many variations, one of which is 
 described in this subsection. The scheme (Figure 14.4) is useful for providing 
 end-to-end  encryption at a network or transport level in a way that is transpar-
ent to the end users. The approach assumes that communication makes use of a 
connection- oriented end-to-end protocol, such as TCP. The noteworthy element of 
this  approach is a session security module (SSM), which may consist of functionality 
Figure 14.4 Automatic Key Distribution for Connection-Oriented Protocol
Key
distribution
center
Network
1. Host sends packet requesting connection.
2. Security service buffers packet; asks
    KDC for session key.
3. KDC distributes session key to both hosts.
4. Buffered packet transmitted.
HOST
Application 
Security
service
HOST
Application 
Security
service

448  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
at one protocol layer, that performs end-to-end encryption and obtains session keys 
on behalf of its host or terminal.
The steps involved in establishing a connection are shown in Figure 14.4. When 
one host wishes to set up a connection to another host, it transmits a connection- 
request packet (step 1). The SSM saves that packet and applies to the KDC for 
 permission to establish the connection (step 2). The communication between the 
SSM and the KDC is encrypted using a master key shared only by this SSM and 
the KDC. If the KDC approves the connection request, it generates the session 
key and delivers it to the two appropriate SSMs, using a unique permanent key for 
each SSM (step 3). The requesting SSM can now release the connection request 
packet, and a connection is set up between the two end systems (step 4). All user 
data  exchanged between the two end systems are encrypted by their respective SSMs 
using the  one-time session key.
The automated key distribution approach provides the flexibility and dynamic 
characteristics needed to allow a number of terminal users to access a number of 
hosts and for the hosts to exchange data with each other.
Decentralized Key Control
The use of a key distribution center imposes the requirement that the KDC be 
trusted and be protected from subversion. This requirement can be avoided if key 
distribution is fully decentralized. Although full decentralization is not practical for 
larger networks using symmetric encryption only, it may be useful within a local 
context.
A decentralized approach requires that each end system be able to commu-
nicate in a secure manner with all potential partner end systems for purposes of 
session key distribution. Thus, there may need to be as many as [n(n - 1)]/2 master 
keys for a configuration with n end systems.
A session key may be established with the following sequence of steps 
(Figure 14.5).
1. A issues a request to B for a session key and includes a nonce, N1.
2. B responds with a message that is encrypted using the shared master key. The 
response includes the session key selected by B, an identifier of B, the value 
f(N1), and another nonce, N2.
3. Using the new session key, A returns f(N2) to B.
Figure 14.5 Decentralized Key Distribution
(1) IDA || N1
(2) E(Km, [Ks || IDA  || IDB || f(N1) || N2 ])
Initiator
A
Responder
B
(3) E(Ks, f(N2))

14.1 / SYMMETRIC KEY DISTRIBUTION USING SYMMETRIC ENCRYPTION 449
Thus, although each node must maintain at most (n - 1) master keys, as many 
session keys as required may be generated and used. Because the messages trans-
ferred using the master key are short, cryptanalysis is difficult. As before, session 
keys are used for only a limited time to protect them.
Controlling Key Usage
The concept of a key hierarchy and the use of automated key distribution techniques 
greatly reduce the number of keys that must be manually managed and  distributed. 
It also may be desirable to impose some control on the way in which automatically 
distributed keys are used. For example, in addition to separating master keys from 
session keys, we may wish to define different types of session keys on the basis of 
use, such as
 
■Data-encrypting key, for general communication across a network
 
■PIN-encrypting key, for personal identification numbers (PINs) used in 
 electronic funds transfer and point-of-sale applications
 
■File-encrypting key, for encrypting files stored in publicly accessible locations
To illustrate the value of separating keys by type, consider the risk that a  master 
key is imported as a data-encrypting key into a device. Normally, the master key is 
physically secured within the cryptographic hardware of the key distribution center 
and of the end systems. Session keys encrypted with this master key are available to 
application programs, as are the data encrypted with such session keys. However, 
if a master key is treated as a session key, it may be possible for an unauthorized 
 application to obtain plaintext of session keys encrypted with that master key.
Thus, it may be desirable to institute controls in systems that limit the ways 
in which keys are used, based on characteristics associated with those keys. One 
simple plan is to associate a tag with each key ([JONE82]; see also [DAVI89]). 
The proposed technique is for use with DES and makes use of the extra 8 bits in 
each  64-bit DES key. That is, the eight non-key bits ordinarily reserved for parity 
 checking form the key tag. The bits have the following interpretation:
 
■One bit indicates whether the key is a session key or a master key
 
■One bit indicates whether the key can be used for encryption
 
■One bit indicates whether the key can be used for decryption
 
■The remaining bits are spares for future use.
Because the tag is embedded in the key, it is encrypted along with the key when that 
key is distributed, thus providing protection. The drawbacks of this scheme are
1. The tag length is limited to 8 bits, limiting its flexibility and functionality.
2. Because the tag is not transmitted in clear form, it can be used only at the 
point of decryption, limiting the ways in which key use can be controlled.
A more flexible scheme, referred to as the control vector, is described in 
[MATY91a and b]. In this scheme, each session key has an associated control vector 
consisting of a number of fields that specify the uses and restrictions for that session 
key. The length of the control vector may vary.

450  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
The control vector is cryptographically coupled with the key at the time of 
key generation at the KDC. The coupling and decoupling processes are illustrated 
in Figure 14.6. As a first step, the control vector is passed through a hash func-
tion that produces a value whose length is equal to the encryption key length. Hash 
functions are discussed in detail in Chapter 11. In essence, a hash function maps 
values from a larger range into a smaller range with a reasonably uniform spread. 
Thus, for  example, if numbers in the range 1 to 100 are hashed into numbers in the 
range 1 to 10, approximately 10% of the source values should map into each of the 
target values.
The hash value is then XORed with the master key to produce an output that 
is used as the key input for encrypting the session key. Thus,
 Hash value = H = h(CV)
 Key input = Km ⊕H
 Ciphertext = E([Km ⊕H], Ks)
where Km is the master key and Ks is the session key. The session key is recovered 
in plaintext by the reverse operation:
 
D([Km ⊕H], E([Km ⊕H], Ks)) 
When a session key is delivered to a user from the KDC, it is accompanied 
by the control vector in clear form. The session key can be recovered only by using 
both the master key that the user shares with the KDC and the control vector. Thus, 
the linkage between the session key and its control vector is maintained.
Figure 14.6 Control Vector Encryption and Decryption
Control
vector
Master
key
Session
key
Hashing
function
Key
input
Key
input
Ciphertext
input
Plaintext
input
Encryption
function
Encrypted
session key
(a) Control vector encryption
Control
vector
Master
key
Encrypted
session key
Hashing
function
Decryption
function
Session key
(b) Control vector decryption

14.2 / SYMMETRIC KEY DISTRIBUTION USING ASYMMETRIC ENCRYPTION 451
Use of the control vector has two advantages over use of an 8-bit tag. First, 
there is no restriction on length of the control vector, which enables arbitrarily com-
plex controls to be imposed on key use. Second, the control vector is available in 
clear form at all stages of operation. Thus, control of key use can be exercised in 
multiple locations.
 14.2 SYMMETRIC KEY DISTRIBUTION USING 
ASYMMETRIC ENCRYPTION
Because of the inefficiency of public-key cryptosystems, they are almost never used 
for the direct encryption of sizable blocks of data, but are limited to relatively small 
blocks. One of the most important uses of a public-key cryptosystem is to encrypt 
secret keys for distribution. We see many specific examples of this in Part Five. 
Here, we discuss general principles and typical approaches.
Simple Secret Key Distribution
An extremely simple scheme was put forward by Merkle [MERK79], as illustrated 
in Figure 14.7. If A wishes to communicate with B, the following procedure is 
employed:
1. A generates a public/private key pair {PUa, PRa} and transmits a message to B 
consisting of PUa and an identifier of A, IDA.
2. B generates a secret key, Ks, and transmits it to A, which is encrypted with A’s 
public key.
3. A computes D(PRa, E(PUa, Ks)) to recover the secret key. Because only A can 
decrypt the message, only A and B will know the identity of Ks.
4. A discards PUa and PRa and B discards PUa.
A and B can now securely communicate using conventional encryption and 
the session key Ks. At the completion of the exchange, both A and B discard Ks. 
Despite its simplicity, this is an attractive protocol. No keys exist before the start of 
the communication and none exist after the completion of communication. Thus, 
the risk of compromise of the keys is minimal. At the same time, the communication 
is secure from eavesdropping.
The protocol depicted in Figure 14.7 is insecure against an adversary who can 
 intercept messages and then either relay the intercepted message or substitute  another 
message (see Figure 1.3c). Such an attack is known as a man-in-the-middle attack 
[RIVE84]. We saw this type of attack in Chapter 10 (Figure 10.2). In the present 
Figure 14.7 Simple Use of Public-Key Encryption to Establish a Session Key
B
A
(1) PUa || IDA
(2) E(PUa, Ks)

452  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
case, if an adversary, D, has control of the intervening communication channel, 
then D can compromise the communication in the following fashion without being 
 detected (Figure 14.8).
1. A generates a public/private key pair {PUa, PRa} and transmits a message 
 intended for B consisting of PUa and an identifier of A, IDA.
2. D intercepts the message, creates its own public/private key pair {PUd, PRd} 
and transmits PUd }IDA to B.
3. B generates a secret key, Ks, and transmits E(PUd, Ks).
4. D intercepts the message and learns Ks by computing D(PRd, E(PUd, Ks)).
5. D transmits E(PUa, Ks) to A.
Figure 14.8 Another Man-in-the-Middle Attack
Alice
Darth
Bob
Private key PRa
Public key PUa
Private key PRb
Public key PUb
Secret key Ks 
Ks =
D(PRd, E(PUd, Ks))  
Private key PRd
Public key PUd
PUa, IDA
PUd, IDA
E(PUd, Ks)
Alice, Bob, and
Darth share K1
  
E(PUa, Ks)

14.2 / SYMMETRIC KEY DISTRIBUTION USING ASYMMETRIC ENCRYPTION 453
The result is that both A and B know Ks and are unaware that Ks has also been 
revealed to D. A and B can now exchange messages using Ks. D no longer  actively 
interferes with the communications channel but simply eavesdrops. Knowing Ks, 
D can decrypt all messages, and both A and B are unaware of the problem. Thus, 
this simple protocol is only useful in an environment where the only threat is 
eavesdropping.
Secret Key Distribution with Confidentiality 
and Authentication
Figure 14.9, based on an approach suggested in [NEED78], provides protection 
against both active and passive attacks. We begin at a point when it is assumed that 
A and B have exchanged public keys by one of the schemes described subsequently 
in this chapter. Then the following steps occur.
1. A uses B’s public key to encrypt a message to B containing an identifier of 
A(IDA) and a nonce (N1), which is used to identify this transaction uniquely.
2. B sends a message to A encrypted with PUa and containing A’s nonce (N1) 
as well as a new nonce generated by B (N2). Because only B could have 
 decrypted message (1), the presence of N1 in message (2) assures A that the 
correspondent is B.
3. A returns N2, encrypted using B’s public key, to assure B that its correspon-
dent is A.
4. A selects a secret key Ks and sends M = E(PUb, E(PRa, Ks)) to B. Encryption 
of this message with B’s public key ensures that only B can read it; encryption 
with A’s private key ensures that only A could have sent it.
5. B computes D(PUa, D(PRb, M)) to recover the secret key.
The result is that this scheme ensures both confidentiality and authentication 
in the exchange of a secret key.
Figure 14.9 Public-Key Distribution of Secret Keys
Initiator
A
Responder
B
(1) E(PUb, [N1 || IDA])
(4) E(PUb, E(PRa, Ks))
(3) E(PUb, N2)
(2) E(PUa, [N1 || N2])

454  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
A Hybrid Scheme
Yet another way to use public-key encryption to distribute secret keys is a hybrid 
approach in use on IBM mainframes [LE93]. This scheme retains the use of a key 
distribution center (KDC) that shares a secret master key with each user and dis-
tributes secret session keys encrypted with the master key. A public-key scheme is 
used to distribute the master keys. The following rationale is provided for using this 
three-level approach:
 
■Performance: There are many applications, especially transaction-oriented 
 applications, in which the session keys change frequently. Distribution of ses-
sion keys by public-key encryption could degrade overall system performance 
because of the relatively high computational load of public-key encryption 
and decryption. With a three-level hierarchy, public-key encryption is used 
only occasionally to update the master key between a user and the KDC.
 
■Backward compatibility: The hybrid scheme is easily overlaid on an existing 
KDC scheme with minimal disruption or software changes.
The addition of a public-key layer provides a secure, efficient means of dis-
tributing master keys. This is an advantage in a configuration in which a single KDC 
serves a widely distributed set of users.
 14.3 DISTRIBUTION OF PUBLIC KEYS
Several techniques have been proposed for the distribution of public keys. Virtually 
all these proposals can be grouped into the following general schemes:
 
■Public announcement
 
■Publicly available directory
 
■Public-key authority
 
■Public-key certificates
Public Announcement of Public Keys
On the face of it, the point of public-key encryption is that the public key is public. 
Thus, if there is some broadly accepted public-key algorithm, such as RSA, any 
participant can send his or her public key to any other participant or broadcast the 
key to the community at large (Figure 14.10). For example, because of the growing 
popularity of PGP (pretty good privacy, discussed in Chapter 19), which makes use 
of RSA, many PGP users have adopted the practice of appending their public key 
to messages that they send to public forums, such as USENET newsgroups and 
Internet mailing lists.
Although this approach is convenient, it has a major weakness. Anyone can 
forge such a public announcement. That is, some user could pretend to be user A 
and send a public key to another participant or broadcast such a public key. Until 
such time as user A discovers the forgery and alerts other participants, the forger is 
able to read all encrypted messages intended for A and can use the forged keys for 
authentication (see Figure 9.3).

14.3 / DISTRIBUTION OF PUBLIC KEYS 455
Publicly Available Directory
A greater degree of security can be achieved by maintaining a publicly available 
 dynamic directory of public keys. Maintenance and distribution of the public 
 directory would have to be the responsibility of some trusted entity or organization 
(Figure 14.11). Such a scheme would include the following elements:
1. The authority maintains a directory with a {name, public key} entry for each 
participant.
2. Each participant registers a public key with the directory authority. 
Registration would have to be in person or by some form of secure authenti-
cated communication.
3. A participant may replace the existing key with a new one at any time, either 
because of the desire to replace a public key that has already been used for 
a large amount of data, or because the corresponding private key has been 
 compromised in some way.
4. Participants could also access the directory electronically. For this purpose, 
secure, authenticated communication from the authority to the participant is 
mandatory.
Figure 14.10 Uncontrolled Public-Key Distribution
PUa
PUa
PUa
PUa
PUb
PUb
PUb
PUb
B
A
Figure 14.11 Public-Key Publication
Public-key
directory
PUa
PUb
A
B

456  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
This scheme is clearly more secure than individual public announcements 
but still has vulnerabilities. If an adversary succeeds in obtaining or computing the 
private key of the directory authority, the adversary could authoritatively pass out 
counterfeit public keys and subsequently impersonate any participant and eaves-
drop on messages sent to any participant. Another way to achieve the same end is 
for the adversary to tamper with the records kept by the authority.
Public-Key Authority
Stronger security for public-key distribution can be achieved by providing tighter 
control over the distribution of public keys from the directory. A typical scenario is 
illustrated in Figure 14.12, which is based on a figure in [POPE79]. As before, the 
scenario assumes that a central authority maintains a dynamic directory of public 
keys of all participants. In addition, each participant reliably knows a public key for 
the authority, with only the authority knowing the corresponding private key. The 
following steps (matched by number to Figure 14.12) occur.
1. A sends a timestamped message to the public-key authority containing a 
 request for the current public key of B.
2. The authority responds with a message that is encrypted using the authority’s 
private key, PRauth. Thus, A is able to decrypt the message using the author-
ity’s public key. Therefore, A is assured that the message originated with the 
authority. The message includes the following:
 
■B’s public key, PUb, which A can use to encrypt messages destined for B
 
■The original request used to enable A to match this response with the cor-
responding earlier request and to verify that the original request was not 
altered before reception by the authority
 
■The original timestamp given so A can determine that this is not an old mes-
sage from the authority containing a key other than B’s current public key
3. A stores B’s public key and also uses it to encrypt a message to B containing 
an identifier of A (IDA) and a nonce (N1), which is used to identify this trans-
action uniquely.
 
4, 5. B retrieves A’s public key from the authority in the same manner as A  retrieved 
B’s public key.
At this point, public keys have been securely delivered to A and B, and they 
may begin their protected exchange. However, two additional steps are desirable:
6. B sends a message to A encrypted with PUa and containing A’s nonce (N1) 
as well as a new nonce generated by B (N2). Because only B could have 
 decrypted message (3), the presence of N1 in message (6) assures A that the 
correspondent is B.
7. A returns N2, which is encrypted using B’s public key, to assure B that its 
 correspondent is A.
Thus, a total of seven messages are required. However, the initial five 
 messages need be used only infrequently because both A and B can save the other’s 
public key for future use—a technique known as caching. Periodically, a user should 
 request fresh copies of the public keys of its correspondents to ensure currency.

14.3 / DISTRIBUTION OF PUBLIC KEYS 457
Public-Key Certificates
The scenario of Figure 14.12 is attractive, yet it has some drawbacks. The  public-key 
authority could be somewhat of a bottleneck in the system, for a user must  appeal 
to the authority for a public key for every other user that it wishes to contact. 
As  before, the directory of names and public keys maintained by the authority is 
vulnerable to tampering.
An alternative approach, first suggested by Kohnfelder [KOHN78], is to use 
certificates that can be used by participants to exchange keys without contacting a 
public-key authority, in a way that is as reliable as if the keys were obtained directly 
from a public-key authority. In essence, a certificate consists of a public key, an 
identifier of the key owner, and the whole block signed by a trusted third party. 
Typically, the third party is a certificate authority, such as a government agency or 
a financial institution, that is trusted by the user community. A user can present 
his or her public key to the authority in a secure manner and obtain a certificate. 
The user can then publish the certificate. Anyone needing this user’s public key can 
obtain the certificate and verify that it is valid by way of the attached trusted signa-
ture. A participant can also convey its key information to another by transmitting 
its certificate. Other participants can verify that the certificate was created by the 
authority. We can place the following requirements on this scheme:
1. Any participant can read a certificate to determine the name and public key of 
the certificate’s owner.
2. Any participant can verify that the certificate originated from the certificate 
authority and is not counterfeit.
3. Only the certificate authority can create and update certificates.
Figure 14.12 Public-Key Distribution Scenario
Public-key
authority
Initiator A
Responder B
(1)  Request || T1
(2) E(PRauth, [PUb || Request || T1])
(3) E(PUb, [ IDA || N1])
(4)  Request || T2
(5) E(PRauth, [PUa || Request || T2])
(6) E(PUa, [ N1 || N2])
(7) E(PUb, N2)

458  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
These requirements are satisfied by the original proposal in [KOHN78]. Denning 
[DENN83] added the following additional requirement:
4. Any participant can verify the time validity of the certificate.
A certificate scheme is illustrated in Figure 14.13. Each participant applies 
to the certificate authority, supplying a public key and requesting a certificate. 
Application must be in person or by some form of secure authenticated communi-
cation. For participant A, the authority provides a certificate of the form
 
CA = E(PRauth, [T}IDA}PUa]) 
where PRauth is the private key used by the authority and T is a timestamp. A may 
then pass this certificate on to any other participant, who reads and verifies the 
 certificate as follows:
 
D(PUauth, CA) = D(PUauth, E(PRauth, [T}IDA}PUa])) = (T}IDA}PUa) 
The recipient uses the authority’s public key, PUauth, to decrypt the certifi-
cate. Because the certificate is readable only using the authority’s public key, this 
verifies that the certificate came from the certificate authority. The elements IDA 
and PUa provide the recipient with the name and public key of the certificate’s 
holder. The timestamp T validates the currency of the certificate. The timestamp 
Figure 14.13 Exchange of Public-Key Certificates
(a) Obtaining certificates from CA
(b) Exchanging certificates
PUa
PUb
A
B
Certificate
Authority
CA = E(PRauth, [T1 || IDA || PUa])
CB = E(PRauth, [T2 || IDB || PUb])
(1) CA
(2) CB
A
B

14.4 / X.509 CERTIFICATES 459
counters the following scenario. A’s private key is learned by an adversary. 
A  generates a new private/public key pair and applies to the certificate authority 
for a new  certificate. Meanwhile, the adversary replays the old certificate to B. If B 
then  encrypts  messages using the compromised old public key, the adversary can 
read those messages.
In this context, the compromise of a private key is comparable to the loss of a 
credit card. The owner cancels the credit card number but is at risk until all possible 
communicants are aware that the old credit card is obsolete. Thus, the timestamp 
serves as something like an expiration date. If a certificate is sufficiently old, it is 
assumed to be expired.
One scheme has become universally accepted for formatting public-key 
 certificates: the X.509 standard. X.509 certificates are used in most network security 
applications, including IP security, transport layer security (TLS), and S/MIME, all 
of which are discussed in Part Five. X.509 is examined in detail in the next section.
 14.4 X.509 CERTIFICATES
ITU-T recommendation X.509 is part of the X.500 series of recommendations that 
define a directory service. The directory is, in effect, a server or distributed set 
of servers that maintains a database of information about users. The information 
 includes a mapping from user name to network address, as well as other attributes 
and information about the users.
X.509 defines a framework for the provision of authentication services by the 
X.500 directory to its users. The directory may serve as a repository of public-key 
certificates of the type discussed in Section 14.3. Each certificate contains the public 
key of a user and is signed with the private key of a trusted certification authority. 
In addition, X.509 defines alternative authentication protocols based on the use of 
public-key certificates.
X.509 is an important standard because the certificate structure and authenti-
cation protocols defined in X.509 are used in a variety of contexts. For example, the 
X.509 certificate format is used in S/MIME (Chapter 19), IP Security (Chapter 20), 
and SSL/TLS (Chapter 17).
X.509 was initially issued in 1988. The standard was subsequently revised 
in 1993 to address some of the security concerns documented in [IANS90] and 
[MITC90]. The standard is currently at version 7, issued in 2012.
X.509 is based on the use of public-key cryptography and digital signatures. 
The standard does not dictate the use of a specific digital signature algorithm nor a 
specific hash function. Figure 14.14 illustrates the overall X.509 scheme for genera-
tion of a public-key certificate. The certificate for Bob’s public key includes unique 
identifying information for Bob, Bob’s public key, and identifying information 
about the CA, plus other information as explained subsequently. This information 
is then signed by computing a hash value of the information and generating a digital 
signature using the hash value and the CA’s private key. X.509 indicates that the 
signature is formed by encrypting the hash value. This suggests the use of one of the 
RSA schemes discussed in Section 13.6. However, the current version of X.509 does 

460  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
not dictate a specific digital signature algorithm. If the NIST DSA (Section 13.4) or 
the ECDSA (Section 13.5) scheme is used, then the hash value is not encrypted but 
serves as input to a digital signature generation algorithm.
Certificates
The heart of the X.509 scheme is the public-key certificate associated with each 
user. These user certificates are assumed to be created by some trusted certification 
authority (CA) and placed in the directory by the CA or by the user. The directory 
server itself is not responsible for the creation of public keys or for the certifica-
tion function; it merely provides an easily accessible location for users to obtain 
certificates.
Figure 14.15a shows the general format of a certificate, which includes the 
 following elements.
 
■Version: Differentiates among successive versions of the certificate format; the 
default is version 1. If the issuer unique identifier or subject unique identifier 
are present, the value must be version 2. If one or more extensions are present, 
the version must be version 3. Although the X.509 specification is currently at 
version 7, no changes have been made to the fields that make up the certificate 
since version 3.
 
■Serial number: An integer value unique within the issuing CA that is unam-
biguously associated with this certificate.
 
■Signature algorithm identifier: The algorithm used to sign the certificate 
 together with any associated parameters. Because this information is repeated 
in the signature field at the end of the certificate, this field has little, if any, utility.
Figure 14.14 X.509 Public-Key Certificate Use
Unsigned certificate:
contains user ID,
user's public key
Signed certificate
Recipient can verify
signature by comparing
hash code values
Generate hash
code of unsigned
certificate
Encrypt hash code
with CA's private key
to form signature
H
H
Bob's ID
information
CA
information
Bob's public key
E
D
Decrypt signature
with CA's public key
to recover hash code
Use certificate to
verify Bob's public key
Create signed
digital certificate

14.4 / X.509 CERTIFICATES 461
 
■Issuer name: X.500 name of the CA that created and signed this certificate.
 
■Period of validity: Consists of two dates: the first and last on which the certifi-
cate is valid.
 
■Subject name: The name of the user to whom this certificate refers. That is, this 
certificate certifies the public key of the subject who holds the corresponding 
private key.
 
■Subject’s public-key information: The public key of the subject, plus an identi-
fier of the algorithm for which this key is to be used, together with any associ-
ated parameters.
 
■Issuer unique identifier: An optional-bit string field used to identify uniquely 
the issuing CA in the event the X.500 name has been reused for different 
entities.
 
■Subject unique identifier: An optional-bit string field used to identify uniquely 
the subject in the event the X.500 name has been reused for different entities.
 
■Extensions: A set of one or more extension fields. Extensions were added in 
version 3 and are discussed later in this section.
 
■Signature: Covers all of the other fields of the certificate. One component of 
this field is the digital signature applied to the other fields of the certificate. 
This field includes the signature algorithm identifier.
The unique identifier fields were added in version 2 to handle the possible 
reuse of subject and/or issuer names over time. These fields are rarely used.
Figure 14.15 X.509 Formats
Certificate
serial number
Version
Issuer name
Signature
algorithm
identifier
Subject name
Extensions
Issuer unique
identifier
Subject unique
identifier
Algorithm
Parameters
Not before
Algorithms
Parameters
Key
Algorithms
Parameters
Signature of certificate
(a) X.509 certificate
Not after
Subject's
public key
info
Signature
Period of
validity
Version 1
Version 2
Version 3
All
versions
Issuer name
This update date
Next update date
•
•
•
Signature
algorithm
identifier
Algorithm
Parameters
User certificate serial #
(b) Certificate revocation list
Revocation date
Algorithms
Parameters
Signature of certificate
Signature
Revoked
certificate
User certificate serial #
Revocation date
Revoked
certificate

462  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
The standard uses the following notation to define a certificate:
 
CA VAW
= CA {V, SN, AI, CA, UCA, A, UA, Ap, TA} 
where
Y V XW
= the certificate of user X issued by certification authority Y
Y {I} = the signing of I by Y. It consists of I with an encrypted hash 
code appended
V = version of the certificate
SN = serial number of the certificate
AI = identifier of the algorithm used to sign the certificate
CA = name of certificate authority
UCA = optional unique identifier of the CA
A = name of user A
UA = optional unique identifier of the user A
Ap = public key of user A
TA = period of validity of the certificate
The CA signs the certificate with its private key. If the corresponding public 
key is known to a user, then that user can verify that a certificate signed by the CA is 
valid. This is the typical digital signature approach illustrated in Figure 13.2.
OBTAINING A USER’S CERTIFICATE User certificates generated by a CA have the 
 following characteristics:
 
■Any user with access to the public key of the CA can verify the user public key 
that was certified.
 
■No party other than the certification authority can modify the certificate 
 without this being detected.
Because certificates are unforgeable, they can be placed in a directory without the 
need for the directory to make special efforts to protect them.
If all users subscribe to the same CA, then there is a common trust of that CA. 
All user certificates can be placed in the directory for access by all users. In addi-
tion, a user can transmit his or her certificate directly to other users. In either case, 
once B is in possession of A’s certificate, B has confidence that messages it encrypts 
with A’s public key will be secure from eavesdropping and that messages signed 
with A’s private key are unforgeable.
If there is a large community of users, it may not be practical for all users to 
subscribe to the same CA. Because it is the CA that signs certificates, each partici-
pating user must have a copy of the CA’s own public key to verify signatures. This 
public key must be provided to each user in an absolutely secure (with respect 
to integrity and authenticity) way so that the user has confidence in the associ-
ated certificates. Thus, with many users, it may be more practical for there to be 
a number of CAs, each of which securely provides its public key to some fraction 
of the users.

14.4 / X.509 CERTIFICATES 463
Now suppose that A has obtained a certificate from certification  authority 
X1 and B has obtained a certificate from CA X2. If A does not securely know the 
public key of X2, then B’s certificate, issued by X2, is useless to A. A can read B’s 
 certificate, but A cannot verify the signature. However, if the two CAs have  securely 
exchanged their own public keys, the following procedure will enable A to obtain 
B’s public key.
Step 1 A obtains from the directory the certificate of X2 signed by X1. Because 
A securely knows X1>s public key, A can obtain X2>s public key from its 
 certificate and verify it by means of X1>s signature on the certificate.
Step 2 A then goes back to the directory and obtains the certificate of B signed by 
X2. Because A now has a trusted copy of X2>s public key, A can verify the 
signature and securely obtain B’s public key.
A has used a chain of certificates to obtain B’s public key. In the notation of 
X.509, this chain is expressed as
 
X1 V X2 W X2 V B W 
In the same fashion, B can obtain A’s public key with the reverse chain:
 
X2 V X1 W X1 V A W 
This scheme need not be limited to a chain of two certificates. An arbitrarily 
long path of CAs can be followed to produce a chain. A chain with N elements 
would be expressed as
 
X1 V X2 W X2 V X3 W c XN V B W 
In this case, each pair of CAs in the chain (Xi, Xi+1) must have created certifi-
cates for each other.
All these certificates of CAs by CAs need to appear in the directory, and the 
user needs to know how they are linked to follow a path to another user’s public-key 
certificate. X.509 suggests that CAs be arranged in a hierarchy so that  navigation is 
straightforward.
Figure 14.16, taken from X.509, is an example of such a hierarchy. The con-
nected circles indicate the hierarchical relationship among the CAs; the associated 
boxes indicate certificates maintained in the directory for each CA entry. The direc-
tory entry for each CA includes two types of certificates:
 
■Forward certificates: Certificates of X generated by other CAs
 
■Reverse certificates: Certificates generated by X that are the certificates of 
other CAs
In this example, user A can acquire the following certificates from the direc-
tory to establish a certification path to B:
 
X V W W W V V W V V Y W Y V Z W Z V B W 
When A has obtained these certificates, it can unwrap the certification path in 
sequence to recover a trusted copy of B’s public key. Using this public key, A can 
send encrypted messages to B. If A wishes to receive encrypted messages back 

464  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
from B, or to sign messages sent to B, then B will require A’s public key, which can 
be obtained from the following certification path:
 
Z V Y W Y V V W V V W W W V X W X V A W 
B can obtain this set of certificates from the directory, or A can provide them 
as part of its initial message to B.
REVOCATION OF CERTIFICATES Recall from Figure 14.15 that each certificate  includes 
a period of validity, much like a credit card. Typically, a new certificate is issued just 
before the expiration of the old one. In addition, it may be desirable on occasion to 
revoke a certificate before it expires, for one of the following reasons.
1. The user’s private key is assumed to be compromised.
2. The user is no longer certified by this CA. Reasons for this include that the 
subject’s name has changed, the certificate is superseded, or the certificate was 
not issued in conformance with the CA’s policies.
3. The CA’s certificate is assumed to be compromised.
Each CA must maintain a list consisting of all revoked but not expired 
 certificates issued by that CA, including both those issued to users and to other 
CAs. These lists should also be posted on the directory.
Figure 14.16 X.509 Hierarchy: A Hypothetical Example
U
V
W
Y
Z
B
X
C
A
U<<V>>
V<<U>>
V<<W>>
W<<V>>
V<<Y>>
Y<<V>>
W<<X>>
X<<W>>
X<<Z>>
Y<<Z>>
Z<<Y>>
Z<<X>>
X<<C>>
X<<A>>
Z<<B>>

14.4 / X.509 CERTIFICATES 465
Each certificate revocation list (CRL) posted to the directory is signed by the 
issuer and includes (Figure 14.15b) the issuer’s name, the date the list was created, 
the date the next CRL is scheduled to be issued, and an entry for each revoked 
certificate. Each entry consists of the serial number of a certificate and revocation 
date for that certificate. Because serial numbers are unique within a CA, the serial 
number is sufficient to identify the certificate.
When a user receives a certificate in a message, the user must determine 
whether the certificate has been revoked. The user could check the directory each 
time a certificate is received. To avoid the delays (and possible costs) associated 
with directory searches, it is likely that the user would maintain a local cache of 
 certificates and lists of revoked certificates.
X.509 Version 3
The X.509 version 2 format does not convey all of the information that recent  design 
and implementation experience has shown to be needed. [FORD95] lists the follow-
ing requirements not satisfied by version 2.
1. The subject field is inadequate to convey the identity of a key owner to a 
 public-key user. X.509 names may be relatively short and lacking in obvious 
identification details that may be needed by the user.
2. The subject field is also inadequate for many applications, which typically 
 recognize entities by an Internet email address, a URL, or some other Internet-
related identification.
3. There is a need to indicate security policy information. This enables a security 
application or function, such as IPSec, to relate an X.509 certificate to a given 
policy.
4. There is a need to limit the damage that can result from a faulty or malicious 
CA by setting constraints on the applicability of a particular certificate.
5. It is important to be able to identify different keys used by the same owner at 
different times. This feature supports key lifecycle management: in particular, 
the ability to update key pairs for users and CAs on a regular basis or under 
exceptional circumstances.
Rather than continue to add fields to a fixed format, standards developers 
felt that a more flexible approach was needed. Thus, version 3 includes a number 
of  optional extensions that may be added to the version 2 format. Each extension 
consists of an extension identifier, a criticality indicator, and an extension value. 
The criticality indicator indicates whether an extension can be safely ignored. If the 
indicator has a value of TRUE and an implementation does not recognize the 
 extension, it must treat the certificate as invalid.
The certificate extensions fall into three main categories: key and policy 
 information, subject and issuer attributes, and certification path constraints.
KEY AND POLICY INFORMATION These extensions convey additional information 
about the subject and issuer keys, plus indicators of certificate policy. A certif-
icate policy is a named set of rules that indicates the applicability of a certifi-
cate to a particular community and/or class of application with common security 
 requirements. For example, a policy might be applicable to the authentication of 

466  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
electronic data interchange (EDI) transactions for the trading of goods within a 
given price range.
This area includes:
 
■Authority key identifier: Identifies the public key to be used to verify the 
 signature on this certificate or CRL. Enables distinct keys of the same CA to 
be differentiated. One use of this field is to handle CA key pair updating.
 
■Subject key identifier: Identifies the public key being certified. Useful for sub-
ject key pair updating. Also, a subject may have multiple key pairs and, cor-
respondingly, different certificates for different purposes (e.g., digital signature 
and encryption key agreement).
 
■Key usage: Indicates a restriction imposed as to the purposes for which, and 
the policies under which, the certified public key may be used. May indicate 
one or more of the following: digital signature, nonrepudiation, key encryp-
tion, data encryption, key agreement, CA signature verification on certificates, 
CA signature verification on CRLs.
 
■Private-key usage period: Indicates the period of use of the private key cor-
responding to the public key. Typically, the private key is used over a different 
period from the validity of the public key. For example, with digital signature 
keys, the usage period for the signing private key is typically shorter than that 
for the verifying public key.
 
■Certificate policies: Certificates may be used in environments where multiple 
policies apply. This extension lists policies that the certificate is recognized as 
supporting, together with optional qualifier information.
 
■Policy mappings: Used only in certificates for CAs issued by other CAs. Policy 
mappings allow an issuing CA to indicate that one or more of that issuer’s 
policies can be considered equivalent to another policy used in the subject 
CA’s domain.
CERTIFICATE SUBJECT AND ISSUER ATTRIBUTES These extensions support alterna-
tive names, in alternative formats, for a certificate subject or certificate issuer and 
can convey additional information about the certificate subject to increase a cer-
tificate user’s confidence that the certificate subject is a particular person or entity. 
For  example, information such as postal address, position within a corporation, or 
picture image may be required.
The extension fields in this area include:
 
■Subject alternative name: Contains one or more alternative names, using any 
of a variety of forms. This field is important for supporting certain applications, 
such as electronic mail, EDI, and IPSec, which may employ their own name 
forms.
 
■Issuer alternative name: Contains one or more alternative names, using any of 
a variety of forms.
 
■Subject directory attributes: Conveys any desired X.500 directory attribute 
values for the subject of this certificate.

14.5 / PUBLIC-KEY INFRASTRUCTURE 467
CERTIFICATION PATH CONSTRAINTS These extensions allow constraint specifications 
to be included in certificates issued for CAs by other CAs. The constraints may 
 restrict the types of certificates that can be issued by the subject CA or that may 
occur subsequently in a certification chain.
The extension fields in this area include:
 
■Basic constraints: Indicates if the subject may act as a CA. If so, a certification 
path length constraint may be specified.
 
■Name constraints: Indicates a name space within which all subject names in 
subsequent certificates in a certification path must be located.
 
■Policy constraints: Specifies constraints that may require explicit certifi-
cate policy identification or inhibit policy mapping for the remainder of the 
 certification path.
 14.5 PUBLIC-KEY INFRASTRUCTURE
RFC 4949 (Internet Security Glossary) defines public-key infrastructure (PKI) as 
the set of hardware, software, people, policies, and procedures needed to  create, 
manage, store, distribute, and revoke digital certificates based on asymmetric 
 cryptography. The principal objective for developing a PKI is to enable secure, 
convenient, and efficient acquisition of public keys. The Internet Engineering Task 
Force (IETF) Public Key Infrastructure X.509 (PKIX) working group has been the 
 driving force behind setting up a formal (and generic) model based on X.509 that is 
suitable for deploying a certificate-based architecture on the Internet. This section 
describes the PKIX model.
Figure 14.17 shows the interrelationship among the key elements of the PKIX 
model. These elements are
 
■End entity: A generic term used to denote end users, devices (e.g., servers, 
routers), or any other entity that can be identified in the subject field of a 
 public-key certificate. End entities typically consume and/or support PKI-
related services.
 
■Certification authority (CA): The issuer of certificates and (usually) certifi-
cate revocation lists (CRLs). It may also support a variety of administrative 
functions, although these are often delegated to one or more Registration 
Authorities.
 
■Registration authority (RA): An optional component that can assume a num-
ber of administrative functions from the CA. The RA is often associated with 
the end entity registration process but can assist in a number of other areas 
as well.
 
■CRL issuer: An optional component that a CA can delegate to publish CRLs.
 
■Repository: A generic term used to denote any method for storing certificates 
and CRLs so that they can be retrieved by end entities.

468  CHAPTER 14 / KEY MANAGEMENT AND DISTRIBUTION
PKIX Management Functions
PKIX identifies a number of management functions that potentially need to be 
 supported by management protocols. These are indicated in Figure 14.17 and 
 include the following:
 
■Registration: This is the process whereby a user first makes itself known to 
a CA (directly or through an RA), prior to that CA issuing a certificate or 
certificates for that user. Registration begins the process of enrolling in a PKI. 
Registration usually involves some offline or online procedure for mutual 
 authentication. Typically, the end entity is issued one or more shared secret 
keys used for subsequent authentication.
 
■Initialization: Before a client system can operate securely, it is necessary to 
install key materials that have the appropriate relationship with keys stored 
elsewhere in the infrastructure. For example, the client needs to be securely 
initialized with the public key and other assured information of the trusted 
CA(s), to be used in validating certificate paths.
 
■Certification: This is the process in which a CA issues a certificate for a user’s 
public key, returns that certificate to the user’s client system, and/or posts that 
certificate in a repository.
 
■Key pair recovery: Key pairs can be used to support digital signature creation 
and verification, encryption and decryption, or both. When a key pair is used for 
Figure 14.17 PKIX Architectural Model
End entity
Certificate/CRL retrieval
Certificate
publication
Certificate/CRL
publication
CRL
publication
Cross
certification
Certificate/CRL Repository
Certificate
authority
Registration
authority
Certificate
authority
Registration,
initialization,
certification,
key pair recovery,
key pair update
revocation request
PKI
users
PKI
management
entities
CRL issuer

14.6 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS 469
encryption/decryption, it is important to provide a mechanism to recover the 
 necessary decryption keys when normal access to the keying material is no longer 
possible, otherwise it will not be possible to recover the encrypted data. Loss of 
access to the decryption key can result from forgotten passwords/PINs, corrupted 
disk drives, damage to hardware tokens, and so on. Key pair recovery allows end 
entities to restore their encryption/decryption key pair from an authorized key 
backup facility (typically, the CA that issued the end entity’s certificate).
 
■Key pair update: All key pairs need to be updated regularly (i.e., replaced 
with a new key pair) and new certificates issued. Update is required when the 
 certificate lifetime expires and as a result of certificate revocation.
 
■Revocation request: An authorized person advises a CA of an abnormal situ-
ation requiring certificate revocation. Reasons for revocation include private-
key compromise, change in affiliation, and name change.
 
■Cross certification: Two CAs exchange information used in establishing a 
cross-certificate. A cross-certificate is a certificate issued by one CA to another 
CA that contains a CA signature key used for issuing certificates.
PKIX Management Protocols
The PKIX working group has defines two alternative management protocols 
 between PKIX entities that support the management functions listed in the pre-
ceding subsection. RFC 2510 defines the certificate management protocols (CMP). 
Within CMP, each of the management functions is explicitly identified by specific 
protocol exchanges. CMP is designed to be a flexible protocol able to accommodate 
a variety of technical, operational, and business models.
RFC 2797 defines certificate management messages over CMS (CMC), where 
CMS refers to RFC 2630, cryptographic message syntax. CMC is built on earlier work 
and is intended to leverage existing implementations. Although all of the PKIX func-
tions are supported, the functions do not all map into specific protocol exchanges.
 14.6 KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS
Key Terms 
Review Questions 
 
14.1 
Explain why man-in-the-middle attacks are ineffective on the secret key distribution 
protocol discussed in Figure 14.3.
 
14.2 
What is the major issue in end to end key distribution? How does the key hierarchy 
concept address that issue?
 
14.3 
What is a nonce?
 
14.4 
What is a key distribution center?
 
14.5 
What are two different uses of public-key cryptography related to key distribution?
end-to-end encryption
key distribution
key distribution center (KDC)
key management
man-in-the-middle attack
master key
nonce
public-key certificate
public-key directory
X.509 certificate

---

## Module 4 Textbook

474  CHAPTER 15 / USER AUTHENTICATION
This chapter examines some of the authentication functions that have been developed 
to support network-based user authentication. The chapter begins with an introduc-
tion to some of the concepts and key considerations for user authentication over a 
network or the Internet. The next section examines user-authentication protocols that 
rely on symmetric encryption. This is followed by a section on one of the earliest and 
also one of the most widely used authentication services: Kerberos. Next, the chapter 
looks at user-authentication protocols that rely on asymmetric encryption. This is fol-
lowed by a discussion of the X.509 user-authentication protocol. Finally, the concept of 
federated identity is introduced.
 15.1 REMOTE USER-AUTHENTICATION PRINCIPLES
In most computer security contexts, user authentication is the fundamental build-
ing block and the primary line of defense. User authentication is the basis for most 
types of access control and for user accountability. RFC 4949 (Internet Security 
Glossary) defines user authentication as the process of verifying an identity claimed 
by or for a system entity. This process consists of two steps:
 
■Identification step: Presenting an identifier to the security system. (Identifiers 
should be assigned carefully, because authenticated identities are the basis for 
other security services, such as access control service.)
 
■Verification step: Presenting or generating authentication information that 
corroborates the binding between the entity and the identifier.
For example, user Alice Toklas could have the user identifier ABTOKLAS. 
This information needs to be stored on any server or computer system that Alice 
wishes to use and could be known to system administrators and other users. 
LEARNING OBJECTIVES
After studying this chapter, you should be able to:
 
◆
Understand the distinction between identification and verification.
 
◆
Present an overview of techniques for remote user authentication using 
symmetric encryption.
 
◆
Give a presentation on Kerberos.
 
◆
Explain the differences between versions 4 and 5 of Kerberos.
 
◆
Describe the use of Kerberos in multiple realms.
 
◆
Present an overview of techniques for remote user authentication using 
asymmetric encryption.
 
◆
Understand the need for a federated identity management system.
 
◆
Explain the use of PIV mechanisms as part of a user authentication system.
MODULE 4

15.1 / REMOTE USER-AUTHENTICATION PRINCIPLES 475
A typical item of authentication information associated with this user ID is a pass-
word, which is kept secret (known only to Alice and to the system). If no one is 
able to obtain or guess Alice’s password, then the combination of Alice’s user ID 
and password enables administrators to set up Alice’s access permissions and audit 
her activity. Because Alice’s ID is not secret, system users can send her email, but 
because her password is secret, no one can pretend to be Alice.
In essence, identification is the means by which a user provides a claimed 
identity to the system; user authentication is the means of establishing the validity 
of the claim. Note that user authentication is distinct from message authentication. 
As defined in Chapter 12, message authentication is a procedure that allows com-
municating parties to verify that the contents of a received message have not been 
altered and that the source is authentic. This chapter is concerned solely with user 
authentication.
The NIST Model for Electronic User Authentication
NIST SP 800-63-2 (Electronic Authentication Guideline, August 2013) defines elec-
tronic user authentication as the process of establishing confidence in user identi-
ties that are presented electronically to an information system. Systems can use the 
 authenticated identity to determine if the authenticated individual is authorized to 
 perform particular functions, such as database transactions or access to system re-
sources. In many cases, the authentication and transaction or other authorized function 
takes place across an open network such as the Internet. Equally authentication and 
subsequent authorization can take place locally, such as across a local area network.
SP 800-63-2 defines a general model for user authentication that involves a num-
ber of entities and procedures. We discuss this model with reference to Figure 15.1.
The initial requirement for performing user authentication is that the user 
must be registered with the system. The following is a typical sequence for registra-
tion. An applicant applies to a registration authority (RA) to become a subscriber 
Figure 15.1 The NIST SP 800-63-2 E-Authentication Architectural Model
Registration
authority (RA)
Registration, credential issuance,
and maintenance
E-Authentication using
token and credential
Identity proofing
User registration
Token, credential
Registration/issuance
Authenticated session
Authenticated protocol
Exchange
Authenticated
assertion
Registration
Confirmation
Token/credential
Validation
Relying
party (RP)
Verifier
Subscriber/
claimant
Credential
service
provider (RA)

476  CHAPTER 15 / USER AUTHENTICATION
of a credential service provider (CSP). In this model, the RA is a trusted entity that 
establishes and vouches for the identity of an applicant to a CSP. The CSP then 
engages in an exchange with the subscriber. Depending on the details of the over-
all authentication system, the CSP issues some sort of electronic credential to the 
subscriber. The credential is a data structure that authoritatively binds an identity 
and additional attributes to a token possessed by a subscriber, and can be verified 
when presented to the verifier in an authentication transaction. The token could 
be an encryption key or an encrypted password that identifies the subscriber. The 
token may be issued by the CSP, generated directly by the subscriber, or provided 
by a third party. The token and credential may be used in subsequent authentica-
tion events.
Once a user is registered as a subscriber, the actual authentication process can 
take place between the subscriber and one or more systems that perform authen-
tication and, subsequently, authorization. The party to be authenticated is called a 
claimant and the party verifying that identity is called a verifier. When a claimant 
successfully demonstrates possession and control of a token to a verifier through an 
authentication protocol, the verifier can verify that the claimant is the subscriber 
named in the corresponding credential. The verifier passes on an assertion about the 
identity of the subscriber to the relying party (RP). That assertion includes identity 
information about a subscriber, such as the subscriber name, an identifier assigned 
at registration, or other subscriber attributes that were verified in the registration 
process. The RP can use the authenticated information provided by the verifier to 
make access control or authorization decisions.
An implemented system for authentication will differ from or be more com-
plex than this simplified model, but the model illustrates the key roles and functions 
needed for a secure authentication system.
Means of Authentication
There are four general means of authenticating a user’s identity, which can be used 
alone or in combination:
 
■Something the individual knows: Examples include a password, a personal 
identification number (PIN), or answers to a prearranged set of questions.
 
■Something the individual possesses: Examples include cryptographic keys, 
electronic keycards, smart cards, and physical keys. This type of authenticator 
is referred to as a token.
 
■Something the individual is (static biometrics): Examples include recognition 
by fingerprint, retina, and face.
 
■Something the individual does (dynamic biometrics): Examples include recog-
nition by voice pattern, handwriting characteristics, and typing rhythm.
All of these methods, properly implemented and used, can provide secure 
user authentication. However, each method has problems. An adversary may be 
able to guess or steal a password. Similarly, an adversary may be able to forge or 
steal a token. A user may forget a password or lose a token. Furthermore, there is a 
significant administrative overhead for managing password and token information 
on systems and securing such information on systems. With respect to biometric 

15.1 / REMOTE USER-AUTHENTICATION PRINCIPLES 477
authenticators, there are a variety of problems, including dealing with false positives 
and false negatives, user acceptance, cost, and convenience. For network-based user 
authentication, the most important methods involve cryptographic keys and some-
thing the individual knows, such as a password.
Mutual Authentication
An important application area is that of mutual authentication protocols. Such pro-
tocols enable communicating parties to satisfy themselves mutually about each oth-
er’s identity and to exchange session keys. This topic was examined in Chapter 14. 
There, the focus was key distribution. We return to this topic here to consider the 
wider implications of authentication.
Central to the problem of authenticated key exchange are two issues: confi-
dentiality and timeliness. To prevent masquerade and to prevent compromise of 
session keys, essential identification and session-key information must be commu-
nicated in encrypted form. This requires the prior existence of secret or public keys 
that can be used for this purpose. The second issue, timeliness, is important because 
of the threat of message replays. Such replays, at worst, could allow an opponent to 
compromise a session key or successfully impersonate another party. At minimum, 
a successful replay can disrupt operations by presenting parties with messages that 
appear genuine but are not.
[GONG93] lists the following examples of replay attacks:
1. The simplest replay attack is one in which the opponent simply copies a mes-
sage and replays it later.
2. An opponent can replay a timestamped message within the valid time window. 
If both the original and the replay arrive within then time window, this inci-
dent can be logged.
3. As with example (2), an opponent can replay a timestamped message within 
the valid time window, but in addition, the opponent suppresses the original 
message. Thus, the repetition cannot be detected.
4. Another attack involves a backward replay without modification. This is a re-
play back to the message sender. This attack is possible if symmetric encryp-
tion is used and the sender cannot easily recognize the difference between 
messages sent and messages received on the basis of content.
One approach to coping with replay attacks is to attach a sequence number to 
each message used in an authentication exchange. A new message is accepted only 
if its sequence number is in the proper order. The difficulty with this approach is 
that it requires each party to keep track of the last sequence number for each claim-
ant it has dealt with. Because of this overhead, sequence numbers are generally not 
used for authentication and key exchange. Instead, one of the following two general 
approaches is used:
 
■Timestamps: Party A accepts a message as fresh only if the message contains 
a timestamp that, in A’s judgment, is close enough to A’s knowledge of cur-
rent time. This approach requires that clocks among the various participants 
be synchronized.

478  CHAPTER 15 / USER AUTHENTICATION
 
■Challenge/response: Party A, expecting a fresh message from B, first sends B 
a nonce (challenge) and requires that the subsequent message (response) re-
ceived from B contain the correct nonce value.
It can be argued (e.g., [LAM92a]) that the timestamp approach should not be 
used for connection-oriented applications because of the inherent difficulties with 
this technique. First, some sort of protocol is needed to maintain synchronization 
among the various processor clocks. This protocol must be both fault tolerant, to 
cope with network errors, and secure, to cope with hostile attacks. Second, the oppor-
tunity for a successful attack will arise if there is a temporary loss of synchronization 
resulting from a fault in the clock mechanism of one of the parties. Finally,  because 
of the variable and unpredictable nature of network delays, distributed clocks cannot 
be expected to maintain precise synchronization. Therefore, any timestamp-based 
procedure must allow for a window of time sufficiently large to accommodate net-
work delays yet sufficiently small to minimize the opportunity for attack.
On the other hand, the challenge-response approach is unsuitable for a con-
nectionless type of application, because it requires the overhead of a handshake be-
fore any connectionless transmission, effectively negating the chief characteristic of 
a connectionless transaction. For such applications, reliance on some sort of secure 
time server and a consistent attempt by each party to keep its clocks in synchroniza-
tion may be the best approach (e.g., [LAM92b]).
One-Way Authentication
One application for which encryption is growing in popularity is electronic mail 
(email). The very nature of electronic mail, and its chief benefit, is that it is not nec-
essary for the sender and receiver to be online at the same time. Instead, the email 
message is forwarded to the receiver’s electronic mailbox, where it is buffered until 
the receiver is available to read it.
The “envelope” or header of the email message must be in the clear, so that 
the message can be handled by the store-and-forward email protocol, such as the 
Simple Mail Transfer Protocol (SMTP) or X.400. However, it is often desirable that 
the mail-handling protocol not require access to the plaintext form of the message, 
because that would require trusting the mail-handling mechanism. Accordingly, the 
email message should be encrypted such that the mail-handling system is not in 
 possession of the decryption key.
A second requirement is that of authentication. Typically, the recipient wants 
some assurance that the message is from the alleged sender.
 15.2 REMOTE USER-AUTHENTICATION USING 
SYMMETRIC ENCRYPTION
Mutual Authentication
As was discussed in Chapter 14, a two-level hierarchy of symmetric encryption keys 
can be used to provide confidentiality for communication in a distributed environ-
ment. In general, this strategy involves the use of a trusted key distribution center 

482  CHAPTER 15 / USER AUTHENTICATION
One-Way Authentication
Using symmetric encryption, the decentralized key distribution scenario illustrated 
in Figure 14.5 is impractical. This scheme requires the sender to issue a request to 
the intended recipient, await a response that includes a session key, and only then 
send the message.
With some refinement, the KDC strategy illustrated in Figure 14.3 is a can-
didate for encrypted electronic mail. Because we wish to avoid requiring that the 
recipient (B) be on line at the same time as the sender (A), steps 4 and 5 must be 
eliminated. For a message with content M, the sequence is as follows:
1. A S KDC: IDA }IDB }N1
2. KDC S A: E(Ka, [Ks }IDB }N1 }E(Kb, [Ks }IDA])])
3. A S B:      E(Kb, [Ks }IDA]) }E(Ks, M)
This approach guarantees that only the intended recipient of a message will be 
able to read it. It also provides a level of authentication that the sender is A. As 
 specified, the protocol does not protect against replays. Some measure of defense 
could be provided by including a timestamp with the message. However, because 
of the potential delays in the email process, such timestamps may have limited 
usefulness.
 15.3 KERBEROS
Kerberos4 is an authentication service developed as part of Project Athena at MIT. 
The problem that Kerberos addresses is this: Assume an open distributed environ-
ment in which users at workstations wish to access services on servers distributed 
throughout the network. We would like for servers to be able to restrict access to 
authorized users and to be able to authenticate requests for service. In this envi-
ronment, a workstation cannot be trusted to identify its users correctly to network 
services. In particular, the following three threats exist:
1. A user may gain access to a particular workstation and pretend to be another 
user operating from that workstation.
2. A user may alter the network address of a workstation so that the requests 
sent from the altered workstation appear to come from the impersonated 
workstation.
3. A user may eavesdrop on exchanges and use a replay attack to gain entrance 
to a server or to disrupt operations.
In any of these cases, an unauthorized user may be able to gain access to services 
and data that he or she is not authorized to access. Rather than building in elaborate 
4“In Greek mythology, a many headed dog, commonly three, perhaps with a serpent’s tail, the guardian 
of the entrance of Hades.” From Dictionary of Subjects and Symbols in Art, by James Hall, Harper & 
Row, 1979. Just as the Greek Kerberos has three heads, the modern Kerberos was intended to have three 
components to guard a network’s gate: authentication, accounting, and audit. The last two heads were 
never implemented.

15.3 / KERBEROS 483
authentication protocols at each server, Kerberos provides a centralized authenti-
cation server whose function is to authenticate users to servers and servers to users. 
Unlike most other authentication schemes described in this book, Kerberos relies 
exclusively on symmetric encryption, making no use of public-key encryption.
Two versions of Kerberos are in common use. Version 4 [MILL88, STEI88] 
implementations still exist. Version 5 [KOHL94] corrects some of the security defi-
ciencies of version 4 and has been issued as a proposed Internet Standard (RFC 
4120 and RFC 4121).5
We begin this section with a brief discussion of the motivation for the Kerberos 
approach. Then, because of the complexity of Kerberos, it is best to start with a de-
scription of the authentication protocol used in version 4. This enables us to see the 
essence of the Kerberos strategy without considering some of the details required to 
handle subtle security threats. Finally, we examine version 5.
Motivation
If a set of users is provided with dedicated personal computers that have no network 
connections, then a user’s resources and files can be protected by physically secur-
ing each personal computer. When these users instead are served by a centralized 
time-sharing system, the time-sharing operating system must provide the security. 
The operating system can enforce access-control policies based on user identity and 
use the logon procedure to identify users.
Today, neither of these scenarios is typical. More common is a distributed 
architecture consisting of dedicated user workstations (clients) and distributed 
or centralized servers. In this environment, three approaches to security can be 
envisioned.
1. Rely on each individual client workstation to assure the identity of its user or 
users and rely on each server to enforce a security policy based on user iden-
tification (ID).
2. Require that client systems authenticate themselves to servers, but trust the 
client system concerning the identity of its user.
3. Require the user to prove his or her identity for each service invoked. Also 
require that servers prove their identity to clients.
In a small, closed environment in which all systems are owned and operated 
by a single organization, the first or perhaps the second strategy may suffice.6 But 
in a more open environment in which network connections to other machines are 
supported, the third approach is needed to protect user information and resources 
housed at the server. Kerberos supports this third approach. Kerberos assumes a 
distributed client/server architecture and employs one or more Kerberos servers to 
provide an authentication service.
5Versions 1 through 3 were internal development versions. Version 4 is the “original” Kerberos.
6However, even a closed environment faces the threat of attack by a disgruntled employee.

484  CHAPTER 15 / USER AUTHENTICATION
The first published report on Kerberos [STEI88] listed the following 
requirements.
 
■Secure: A network eavesdropper should not be able to obtain the necessary 
information to impersonate a user. More generally, Kerberos should be strong 
enough that a potential opponent does not find it to be the weak link.
 
■Reliable: For all services that rely on Kerberos for access control, lack of 
 availability of the Kerberos service means lack of availability of the supported 
services. Hence, Kerberos should be highly reliable and should employ a 
 distributed server architecture with one system able to back up another.
 
■Transparent: Ideally, the user should not be aware that authentication is taking 
place beyond the requirement to enter a password.
 
■Scalable: The system should be capable of supporting large numbers of clients 
and servers. This suggests a modular, distributed architecture.
To support these requirements, the overall scheme of Kerberos is that of a 
trusted third-party authentication service that uses a protocol based on that pro-
posed by Needham and Schroeder [NEED78], which was discussed in Section 15.2. 
It is trusted in the sense that clients and servers trust Kerberos to mediate their 
mutual authentication. Assuming the Kerberos protocol is well designed, then the 
authentication service is secure if the Kerberos server itself is secure.7
Kerberos Version 4
Version 4 of Kerberos makes use of DES, in a rather elaborate protocol, to pro-
vide the authentication service. Viewing the protocol as a whole, it is difficult to see 
the need for the many elements contained therein. Therefore, we adopt a strategy 
used by Bill Bryant of Project Athena [BRYA88] and build up to the full protocol 
by looking first at several hypothetical dialogues. Each successive dialogue adds 
additional complexity to counter security vulnerabilities revealed in the preceding 
dialogue.
After examining the protocol, we look at some other aspects of version 4.
A SIMPLE AUTHENTICATION DIALOGUE In an unprotected network environment, any 
client can apply to any server for service. The obvious security risk is that of im-
personation. An opponent can pretend to be another client and obtain unauthor-
ized privileges on server machines. To counter this threat, servers must be able to 
confirm the identities of clients who request service. Each server can be required to 
undertake this task for each client/server interaction, but in an open environment, 
this places a substantial burden on each server.
7Remember that the security of the Kerberos server should not automatically be assumed but must be 
guarded carefully (e.g., in a locked room). It is well to remember the fate of the Greek Kerberos, whom 
Hercules was ordered by Eurystheus to capture as his Twelfth Labor: “Hercules found the great dog on its 
chain and seized it by the throat. At once the three heads tried to attack, and Kerberos lashed about with 
his powerful tail. Hercules hung on grimly, and Kerberos relaxed into unconsciousness. Eurystheus may 
have been surprised to see Hercules alive—when he saw the three slavering heads and the huge dog they 
belonged to he was frightened out of his wits, and leapt back into the safety of his great bronze jar.” From 
The Hamlyn Concise Dictionary of Greek and Roman Mythology, by Michael Stapleton, Hamlyn, 1982.

15.3 / KERBEROS 485
An alternative is to use an authentication server (AS) that knows the 
 passwords of all users and stores these in a centralized database. In addition, the AS 
shares a unique secret key with each server. These keys have been distributed physi-
cally or in some other secure manner. Consider the following hypothetical dialogue:
(1) C S AS:    IDC }PC }IDV
(2) AS S C:    Ticket
(3) C S V:   IDC }Ticket
Ticket = E(Kv, [IDC }ADC }IDV])
where
 C = client
 AS = authentication server
 V = server
 IDC = identifier of user on C
 IDV = identifier of V
 PC = password of user on C
 ADC = network address of C
 Kv = secret encryption key shared by AS and V
In this scenario, the user logs on to a workstation and requests access to server V. 
The client module C in the user’s workstation requests the user’s password and then 
sends a message to the AS that includes the user’s ID, the server’s ID, and the user’s 
password. The AS checks its database to see if the user has supplied the proper 
password for this user ID and whether this user is permitted access to server V. If 
both tests are passed, the AS accepts the user as authentic and must now convince 
the server that this user is authentic. To do so, the AS creates a ticket that con-
tains the user’s ID and network address and the server’s ID. This ticket is encrypted 
using the secret key shared by the AS and this server. This ticket is then sent back 
to C. Because the ticket is encrypted, it cannot be altered by C or by an opponent.
With this ticket, C can now apply to V for service. C sends a message to V con-
taining C’s ID and the ticket. V decrypts the ticket and verifies that the user ID in 
the ticket is the same as the unencrypted user ID in the message. If these two match, 
the server considers the user authenticated and grants the requested service.
Each of the ingredients of message (3) is significant. The ticket is encrypted to 
prevent alteration or forgery. The server’s ID (IDV) is included in the ticket so that 
the server can verify that it has decrypted the ticket properly. IDC is included in the 
ticket to indicate that this ticket has been issued on behalf of C. Finally, ADC serves 
to counter the following threat. An opponent could capture the ticket transmitted 
in message (2), then use the name IDC and transmit a message of form (3) from 
another workstation. The server would receive a valid ticket that matches the user 
ID and grant access to the user on that other workstation. To prevent this attack, 
the AS includes in the ticket the network address from which the original request 
came. Now the ticket is valid only if it is transmitted from the same workstation that 
initially requested the ticket.

486  CHAPTER 15 / USER AUTHENTICATION
A MORE SECURE AUTHENTICATION DIALOGUE Although the foregoing scenario solves 
some of the problems of authentication in an open network environment, problems 
remain. Two in particular stand out. First, we would like to minimize the number 
of times that a user has to enter a password. Suppose each ticket can be used only 
once. If user C logs on to a workstation in the morning and wishes to check his or her 
mail at a mail server, C must supply a password to get a ticket for the mail server. If 
C wishes to check the mail several times during the day, each attempt requires re-
entering the password. We can improve matters by saying that tickets are reusable. 
For a single logon session, the workstation can store the mail server ticket after it is 
received and use it on behalf of the user for multiple accesses to the mail server.
However, under this scheme, it remains the case that a user would need a new 
ticket for every different service. If a user wished to access a print server, a mail 
server, a file server, and so on, the first instance of each access would require a new 
ticket and hence require the user to enter the password.
The second problem is that the earlier scenario involved a plaintext transmis-
sion of the password [message (1)]. An eavesdropper could capture the password 
and use any service accessible to the victim.
To solve these additional problems, we introduce a scheme for avoiding plain-
text passwords and a new server, known as the ticket-granting server (TGS). The 
new (but still hypothetical) scenario is as follows.
Once per user logon session:
(1) C S AS:    IDC }IDtgs
(2) AS S C:    E(Kc, Tickettgs)
Once per type of service:
(3) C S TGS: IDC }IDV }Tickettgs
(4) TGS S C: Ticketv
Once per service session:
(5) C S V:   IDC }Ticketv
Tickettgs = E(Ktgs, [IDC }ADC }IDtgs }TS1 }Lifetime1])
Ticketv = E(Kv, [IDC }ADC }IDv }TS2 }Lifetime2])
The new service, TGS, issues tickets to users who have been authenticated to 
AS. Thus, the user first requests a ticket-granting ticket (Tickettgs) from the AS. The 
client module in the user workstation saves this ticket. Each time the user requires 
access to a new service, the client applies to the TGS, using the ticket to authenti-
cate itself. The TGS then grants a ticket for the particular service. The client saves 
each service-granting ticket and uses it to authenticate its user to a server each time 
a particular service is requested. Let us look at the details of this scheme:
1. The client requests a ticket-granting ticket on behalf of the user by sending its 
user’s ID to the AS, together with the TGS ID, indicating a request to use the 
TGS service.

15.3 / KERBEROS 487
2. The AS responds with a ticket that is encrypted with a key that is derived from 
the user’s password (Kc), which is already stored at the AS. When this response 
arrives at the client, the client prompts the user for his or her password, gen-
erates the key, and attempts to decrypt the incoming message. If the correct 
password is supplied, the ticket is successfully recovered.
Because only the correct user should know the password, only the correct user 
can recover the ticket. Thus, we have used the password to obtain credentials from 
Kerberos without having to transmit the password in plaintext. The ticket itself 
consists of the ID and network address of the user, and the ID of the TGS. This 
corresponds to the first scenario. The idea is that the client can use this ticket to 
request multiple service-granting tickets. So the ticket-granting ticket is to be reus-
able. However, we do not wish an opponent to be able to capture the ticket and use 
it. Consider the following scenario: An opponent captures the login ticket and waits 
until the user has logged off his or her workstation. Then the opponent either gains 
access to that workstation or configures his workstation with the same network ad-
dress as that of the victim. The opponent would be able to reuse the ticket to spoof 
the TGS. To counter this, the ticket includes a timestamp, indicating the date and 
time at which the ticket was issued, and a lifetime, indicating the length of time for 
which the ticket is valid (e.g., eight hours). Thus, the client now has a reusable ticket 
and need not bother the user for a password for each new service request. Finally, 
note that the ticket-granting ticket is encrypted with a secret key known only to the 
AS and the TGS. This prevents alteration of the ticket. The ticket is reencrypted 
with a key based on the user’s password. This assures that the ticket can be recov-
ered only by the correct user, providing the authentication.
Now that the client has a ticket-granting ticket, access to any server can be 
obtained with steps 3 and 4.
3. The client requests a service-granting ticket on behalf of the user. For this pur-
pose, the client transmits a message to the TGS containing the user’s ID, the 
ID of the desired service, and the ticket-granting ticket.
4. The TGS decrypts the incoming ticket using a key shared only by the AS and 
the TGS (Ktgs) and verifies the success of the decryption by the presence of its 
ID. It checks to make sure that the lifetime has not expired. Then it compares 
the user ID and network address with the incoming information to authenti-
cate the user. If the user is permitted access to the server V, the TGS issues a 
ticket to grant access to the requested service.
The service-granting ticket has the same structure as the ticket-granting ticket. 
Indeed, because the TGS is a server, we would expect that the same elements are 
needed to authenticate a client to the TGS and to authenticate a client to an appli-
cation server. Again, the ticket contains a timestamp and lifetime. If the user wants 
access to the same service at a later time, the client can simply use the previously 
acquired service-granting ticket and need not bother the user for a password. Note 
that the ticket is encrypted with a secret key (Kv) known only to the TGS and the 
server, preventing alteration.
Finally, with a particular service-granting ticket, the client can gain access to 
the corresponding service with step 5.

488  CHAPTER 15 / USER AUTHENTICATION
5. The client requests access to a service on behalf of the user. For this purpose, the 
client transmits a message to the server containing the user’s ID and the service-
granting ticket. The server authenticates by using the contents of the ticket.
This new scenario satisfies the two requirements of only one password query 
per user session and protection of the user password.
THE VERSION 4 AUTHENTICATION DIALOGUE Although the foregoing scenario en-
hances security compared to the first attempt, two additional problems remain. The 
heart of the first problem is the lifetime associated with the ticket-granting ticket. 
If this lifetime is very short (e.g., minutes), then the user will be repeatedly asked 
for a password. If the lifetime is long (e.g., hours), then an opponent has a greater 
opportunity for replay. An opponent could eavesdrop on the network and capture 
a copy of the ticket-granting ticket and then wait for the legitimate user to log out. 
Then the opponent could forge the legitimate user’s network address and send the 
message of step (3) to the TGS. This would give the opponent unlimited access to 
the resources and files available to the legitimate user.
Similarly, if an opponent captures a service-granting ticket and uses it before it 
expires, the opponent has access to the corresponding service.
Thus, we arrive at an additional requirement. A network service (the TGS or 
an application service) must be able to prove that the person using a ticket is the 
same person to whom that ticket was issued.
The second problem is that there may be a requirement for servers to authen-
ticate themselves to users. Without such authentication, an opponent could sabo-
tage the configuration so that messages to a server were directed to another loca-
tion. The false server would then be in a position to act as a real server and capture 
any information from the user and deny the true service to the user.
We examine these problems in turn and refer to Table 15.1, which shows the 
actual Kerberos protocol. Figure 15.2 provides a simplified overview.
(1)
C S AS IDc }IDtgs}TS1
(2)
AS S C E(Kc, [Kc, tgs }IDtgs}TS2 }Lifetime2 }Tickettgs])
Tickettgs = E(Ktgs, [Kc, tgs }IDC}ADC}IDtgs}TS2 }Lifetime2])
(a) Authentication Service Exchange to obtain ticket-granting ticket
(3)
C S TGS IDv }Tickettgs}Authenticatorc
(4)
TGS S C E(Kc, tgs, [Kc, v }IDv }TS4 }Ticketv])
Tickettgs = E(Ktgs, [Kc, tgs }IDC}ADC}IDtgs}TS2 }Lifetime2])
Ticketv = E(Kv, [Kc, v }IDC}ADC}IDv }TS4 }Lifetime4])
Authenticatorc = E(Kc, tgs, [IDC}ADC}TS3])
(b) Ticket-Granting Service Exchange to obtain service-granting ticket
(5)
C S V Ticketv }Authenticatorc
(6)
V S C E(Kc,v, [TS5 + 1]) (for mutual authentication)
Ticketv = E(Kv, [Kc, v }IDC}ADC}IDv }TS4 }Lifetime4])
Authenticatorc = E(Kc, v, [IDC}ADC}TS5])
(c) Client/Server Authentication Exchange to obtain service
Table 15.1 Summary of Kerberos Version 4 Message Exchanges

15.3 / KERBEROS 489
First, consider the problem of captured ticket-granting tickets and the need 
to determine that the ticket presenter is the same as the client for whom the ticket 
was issued. The threat is that an opponent will steal the ticket and use it before it 
expires. To get around this problem, let us have the AS provide both the client and 
the TGS with a secret piece of information in a secure manner. Then the client can 
prove its identity to the TGS by revealing the secret information—again in a secure 
manner. An efficient way of accomplishing this is to use an encryption key as the 
secure information; this is referred to as a session key in Kerberos.
Table 15.1a shows the technique for distributing the session key. As before, 
the client sends a message to the AS requesting access to the TGS. The AS re-
sponds with a message, encrypted with a key derived from the user’s password 
(Kc), that contains the ticket. The encrypted message also contains a copy of the 
session key, Kc,tgs, where the subscripts indicate that this is a session key for C and 
TGS. Because this session key is inside the message encrypted with Kc, only the 
user’s client can read it. The same session key is included in the ticket, which can 
be read only by the TGS. Thus, the session key has been securely delivered to both 
C and the TGS.
Figure 15.2 Overview of Kerberos
Authentication
server
Ticket-
granting
server (TGS)
Host/
application
server
request ticket-
granting ticket
once per
user logon
session
1. User logs on to
workstation and
requests service on host
3. Workstation prompts
user for password to decrypt
incoming message, and then
send ticket and
authenticator that contains
user’s name, network
address, and time to TGS.
ticket + session key
request service-
granting ticket
ticket + session key
once per
type of service
4. TGS decrypts ticket and
authenticator, verifies request,
and then creates ticket for
requested application server.
Kerberos
5. Workstation sends
ticket and authenticator
to host.
6. Host verifies that
ticket and authenticator
match, and then grants
access to service. If
mutual authentication is
required, server returns
an authenticator.
request service
provide server
authenticator
once per
service session
2. AS verifies user’s access right in
database, and creates ticket-granting ticket
and session key. Results are encrypted
using key derived from user’s password.

490  CHAPTER 15 / USER AUTHENTICATION
Note that several additional pieces of information have been added to this 
first phase of the dialogue. Message (1) includes a timestamp, so that the AS knows 
that the message is timely. Message (2) includes several elements of the ticket in a 
form accessible to C. This enables C to confirm that this ticket is for the TGS and to 
learn its expiration time.
Armed with the ticket and the session key, C is ready to approach the TGS. 
As before, C sends the TGS a message that includes the ticket plus the ID of the 
requested service [message (3) in Table 15.1b]. In addition, C transmits an authentica-
tor, which includes the ID and address of C’s user and a timestamp. Unlike the ticket, 
which is reusable, the authenticator is intended for use only once and has a very short 
lifetime. The TGS can decrypt the ticket with the key that it shares with the AS. This 
ticket indicates that user C has been provided with the session key Kc,tgs. In effect, 
the ticket says, “Anyone who uses Kc,tgs must be C.” The TGS uses the session key to 
decrypt the authenticator. The TGS can then check the name and address from the 
authenticator with that of the ticket and with the network address of the incoming 
message. If all match, then the TGS is assured that the sender of the ticket is indeed 
the ticket’s real owner. In effect, the authenticator says, “At time TS3, I hereby use 
Kc,tgs.” Note that the ticket does not prove anyone’s identity but is a way to distribute 
keys securely. It is the authenticator that proves the client’s identity. Because the au-
thenticator can be used only once and has a short lifetime, the threat of an opponent 
stealing both the ticket and the authenticator for presentation later is countered.
The reply from the TGS in message (4) follows the form of message (2). The 
message is encrypted with the session key shared by the TGS and C and includes 
a session key to be shared between C and the server V, the ID of V, and the time-
stamp of the ticket. The ticket itself includes the same session key.
C now has a reusable service-granting ticket for V. When C presents this ticket, 
as shown in message (5), it also sends an authenticator. The server can decrypt the 
ticket, recover the session key, and decrypt the authenticator.
If mutual authentication is required, the server can reply as shown in message 
(6) of Table 15.1. The server returns the value of the timestamp from the authenti-
cator, incremented by 1, and encrypted in the session key. C can decrypt this mes-
sage to recover the incremented timestamp. Because the message was encrypted by 
the session key, C is assured that it could have been created only by V. The contents 
of the message assure C that this is not a replay of an old reply.
Finally, at the conclusion of this process, the client and server share a secret 
key. This key can be used to encrypt future messages between the two or to ex-
change a new random session key for that purpose.
Figure 15.3 illustrates the Kerberos exchanges among the parties. Table 15.2 
summarizes the justification for each of the elements in the Kerberos protocol.
KERBEROS REALMS AND MULTIPLE KERBERI A full-service Kerberos environment 
consisting of a Kerberos server, a number of clients, and a number of application 
servers requires the following:
1. The Kerberos server must have the user ID and hashed passwords of all partic-
ipating users in its database. All users are registered with the Kerberos server.
2. The Kerberos server must share a secret key with each server. All servers are 
registered with the Kerberos server.

15.3 / KERBEROS 491
Message (1)
Client requests ticket-granting ticket.
IDC
Tells AS identity of user from this client.
IDtgs
Tells AS that user requests access to TGS.
TS1
Allows AS to verify that client’s clock is synchronized with that of AS.
Message (2)
AS returns ticket-granting ticket.
Kc
Encryption is based on user’s password, enabling AS and client to verify password, and 
protecting contents of message (2).
Kc, tgs
Copy of session key accessible to client created by AS to permit secure exchange between 
client and TGS without requiring them to share a permanent key.
IDtgs
Confirms that this ticket is for the TGS.
TS2
Informs client of time this ticket was issued.
Lifetime2
Informs client of the lifetime of this ticket.
Tickettgs
Ticket to be used by client to access TGS.
(a) Authentication Service Exchange
Message (3)
Client requests service-granting ticket.
IDV
Tells TGS that user requests access to server V.
Tickettgs
Assures TGS that this user has been authenticated by AS.
Authenticatorc
Generated by client to validate ticket.
Table 15.2 Rationale for the Elements of the Kerberos Version 4 Protocol
Figure 15.3 Kerberos Exchanges
Client
Client authentication
IDc || IDtgs || TS1
Tickettgs, server ID, and client authentication
IDv || Tickettgs || Authenticatorc
Shared key and ticket
E(Kc,tgs, [Kc,v || IDv || TS4 || Ticketv])
Ticketv and client authentication
Ticketv || Authenticatorc
Service granted
E(Kc,v, [TS5 + 1])
Shared key and ticket
E(Kc, [Kc,tgs || IDtgs || TS2 ||
Lifetime2 || Tickettgs])
Authentication
server (AS)
Ticket-granting
server (TGS)
Service
provider
(Continued)

492  CHAPTER 15 / USER AUTHENTICATION
Message (4)
TGS returns service-granting ticket.
Kc, tgs
Key shared only by C and TGS protects contents of message (4).
Kc, v
Copy of session key accessible to client created by TGS to permit secure exchange between 
client and server without requiring them to share a permanent key.
IDV
Confirms that this ticket is for server V.
TS4
Informs client of time this ticket was issued.
TicketV
Ticket to be used by client to access server V.
Tickettgs
Reusable so that user does not have to reenter password.
Ktgs
Ticket is encrypted with key known only to AS and TGS, to prevent tampering.
Kc, tgs
Copy of session key accessible to TGS used to decrypt authenticator, thereby  authenticating 
ticket.
IDC
Indicates the rightful owner of this ticket.
ADC
Prevents use of ticket from workstation other than one that initially requested the ticket.
IDtgs
Assures server that it has decrypted ticket properly.
TS2
Informs TGS of time this ticket was issued.
Lifetime2
Prevents replay after ticket has expired.
Authenticatorc
Assures TGS that the ticket presenter is the same as the client for whom the ticket was 
issued has very short lifetime to prevent replay.
Kc, tgs
Authenticator is encrypted with key known only to client and TGS, to prevent tampering.
IDC
Must match ID in ticket to authenticate ticket.
ADC
Must match address in ticket to authenticate ticket.
TS3
Informs TGS of time this authenticator was generated.
(b) Ticket-Granting Service Exchange
Message (5)
Client requests service.
TicketV
Assures server that this user has been authenticated by AS.
Authenticatorc
Generated by client to validate ticket.
Message (6)
Optional authentication of server to client.
Kc, v
Assures C that this message is from V.
TS5 + 1
Assures C that this is not a replay of an old reply.
Ticketv
Reusable so that client does not need to request a new ticket from TGS for each access to 
the same server.
Kv
Ticket is encrypted with key known only to TGS and server, to prevent tampering.
Kc, v
Copy of session key accessible to client; used to decrypt authenticator, thereby  authenticating 
ticket.
IDC
Indicates the rightful owner of this ticket.
ADC
Prevents use of ticket from workstation other than one that initially requested the ticket.
IDV
Assures server that it has decrypted ticket properly.
TS4
Informs server of time this ticket was issued.
Lifetime4
Prevents replay after ticket has expired.
Authenticatorc
Assures server that the ticket presenter is the same as the client for whom the ticket was 
issued; has very short lifetime to prevent replay.
Kc, v
Authenticator is encrypted with key known only to client and server, to prevent tampering.
IDC
Must match ID in ticket to authenticate ticket.
ADC
Must match address in ticket to authenticate ticket.
TS5
Informs server of time this authenticator was generated.
(c) Client/Server Authentication Exchange
Table 15.2 Continued

15.3 / KERBEROS 493
Such an environment is referred to as a Kerberos realm. The concept of 
realm can be explained as follows. A Kerberos realm is a set of managed nodes 
that share the same Kerberos database. The Kerberos database resides on the 
Kerberos master computer system, which should be kept in a physically secure 
room. A read-only copy of the Kerberos database might also reside on other 
Kerberos computer systems. However, all changes to the database must be 
made on the master computer system. Changing or accessing the contents of a 
Kerberos database requires the Kerberos master password. A related concept 
is that of a Kerberos principal, which is a service or user that is known to the 
Kerberos system. Each Kerberos principal is identified by its principal name. 
Principal names consist of three parts: a service or user name, an instance name, 
and a realm name.
Networks of clients and servers under different administrative organizations 
typically constitute different realms. That is, it generally is not practical or does 
not conform to administrative policy to have users and servers in one administra-
tive domain registered with a Kerberos server elsewhere. However, users in one 
realm may need access to servers in other realms, and some servers may be will-
ing to provide service to users from other realms, provided that those users are 
authenticated.
Kerberos provides a mechanism for supporting such interrealm  authentication. 
For two realms to support interrealm authentication, a third requirement is added:
3. The Kerberos server in each interoperating realm shares a secret key with the 
server in the other realm. The two Kerberos servers are registered with each 
other.
The scheme requires that the Kerberos server in one realm trust the Kerberos 
server in the other realm to authenticate its users. Furthermore, the participating 
servers in the second realm must also be willing to trust the Kerberos server in the 
first realm.
With these ground rules in place, we can describe the mechanism as follows 
(Figure 15.4): A user wishing service on a server in another realm needs a ticket for 
that server. The user’s client follows the usual procedures to gain access to the local 
TGS and then requests a ticket-granting ticket for a remote TGS (TGS in another 
realm). The client can then apply to the remote TGS for a service-granting ticket for 
the desired server in the realm of the remote TGS.
The details of the exchanges illustrated in Figure 15.4 are as follows (compare 
Table 15.1).
(1) C S AS:    IDc }IDtgs }TS1
(2) AS S C:      E(Kc, [Kc, tgs }IDtgs }TS2 }Lifetime2 }Tickettgs])
(3) C S TGS:   IDtgsrem}Tickettgs }Authenticatorc
(4) TGS S C:    E(Kc,tgs, [Kc, tgsrem}IDtgsrem}TS4 }Tickettgsrem])
(5) C S TGSrem: IDvrem}Tickettgsrem}Authenticatorc
(6) TGSrem S C: E(Kc,tgsrem, [Kc, vrem}IDvrem}TS6 }Ticketvrem])
(7) C S Vrem:     Ticketvrem}Authenticatorc

494  CHAPTER 15 / USER AUTHENTICATION
The ticket presented to the remote server (Vrem) indicates the realm in which 
the user was originally authenticated. The server chooses whether to honor the re-
mote request.
One problem presented by the foregoing approach is that it does not scale well 
to many realms. If there are N realms, then there must be N(N - 1)/2 secure key 
exchanges so that each Kerberos realm can interoperate with all other Kerberos 
realms.
Kerberos Version 5
Kerberos version 5 is specified in RFC 4120 and provides a number of improve-
ments over version 4 [KOHL94]. To begin, we provide an overview of the changes 
from version 4 to version 5 and then look at the version 5 protocol.
Figure 15.4 Request for Service in Another Realm
Authentication
server (AS)
Ticket-
granting
server (TGS)
Kerberos
Authentication
server (AS)
Ticket-
granting
server (TGS)
Kerberos
Client
Realm A
Host/
application
server
Realm B
1. Request ticket for local TGS
2. Ticket for local TGS
3. Request ticket for remote
TGS
4. Ticket for remote TGS
5. Request ticket
for remote server
6. Ticket for remote server
7. Request remote service

15.3 / KERBEROS 495
DIFFERENCES BETWEEN VERSIONS 4 AND 5 Version 5 is intended to address the limita-
tions of version 4 in two areas: environmental shortcomings and technical deficien-
cies. Let us briefly summarize the improvements in each area.8
Kerberos version 4 was developed for use within the Project Athena environ-
ment and, accordingly, did not fully address the need to be of general purpose. This 
led to the following environmental shortcomings.
1. Encryption system dependence: Version 4 requires the use of DES. Export 
restriction on DES as well as doubts about the strength of DES were thus of 
concern. In version 5, ciphertext is tagged with an encryption-type identifier 
so that any encryption technique may be used. Encryption keys are tagged 
with a type and a length, allowing the same key to be used in different al-
gorithms and allowing the specification of different variations on a given 
algorithm.
2. Internet protocol dependence: Version 4 requires the use of Internet Protocol 
(IP) addresses. Other address types, such as the ISO network address, are not 
accommodated. Version 5 network addresses are tagged with type and length, 
allowing any network address type to be used.
3. Message byte ordering: In version 4, the sender of a message employs a byte 
ordering of its own choosing and tags the message to indicate least signifi-
cant byte in lowest address or most significant byte in lowest address. This 
techniques works but does not follow established conventions. In version 
5, all message structures are defined using Abstract Syntax Notation One 
(ASN.1) and Basic Encoding Rules (BER), which provide an unambiguous 
byte ordering.
4. Ticket lifetime: Lifetime values in version 4 are encoded in an 8-bit quantity 
in units of five minutes. Thus, the maximum lifetime that can be expressed is 
28 * 5 = 1280 minutes (a little over 21 hours). This may be inadequate for 
some applications (e.g., a long-running simulation that requires valid Kerberos 
credentials throughout execution). In version 5, tickets include an explicit start 
time and end time, allowing tickets with arbitrary lifetimes.
5. Authentication forwarding: Version 4 does not allow credentials issued to one 
client to be forwarded to some other host and used by some other client. This 
capability would enable a client to access a server and have that server access 
another server on behalf of the client. For example, a client issues a request to 
a print server that then accesses the client’s file from a file server, using the cli-
ent’s credentials for access. Version 5 provides this capability.
6. Interrealm authentication: In version 4, interoperability among N realms 
 requires on the order of N2 Kerberos-to-Kerberos relationships, as described 
earlier. Version 5 supports a method that requires fewer relationships, as de-
scribed shortly.
8The following discussion follows the presentation in [KOHL94].

496  CHAPTER 15 / USER AUTHENTICATION
Apart from these environmental limitations, there are technical  deficiencies 
in the version 4 protocol itself. Most of these deficiencies were documented in 
[BELL90], and version 5 attempts to address these. The deficiencies are the 
following.
1. Double encryption: Note in Table 15.1 [messages (2) and (4)] that tickets pro-
vided to clients are encrypted twice—once with the secret key of the target 
server and then again with a secret key known to the client. The second en-
cryption is not necessary and is computationally wasteful.
2. PCBC encryption: Encryption in version 4 makes use of a nonstandard mode 
of DES known as propagating cipher block chaining (PCBC).9 It has been 
demonstrated that this mode is vulnerable to an attack involving the inter-
change of ciphertext blocks [KOHL89]. PCBC was intended to provide an in-
tegrity check as part of the encryption operation. Version 5 provides explicit 
integrity mechanisms, allowing the standard CBC mode to be used for encryp-
tion. In particular, a checksum or hash code is attached to the message prior to 
encryption using CBC.
3. Session keys: Each ticket includes a session key that is used by the client 
to encrypt the authenticator sent to the service associated with that ticket. 
In addition, the session key may subsequently be used by the client and the 
server to protect messages passed during that session. However, because 
the same ticket may be used repeatedly to gain service from a particular 
server, there is the risk that an opponent will replay messages from an old 
session to the client or the server. In version 5, it is possible for a client 
and server to negotiate a subsession key, which is to be used only for that 
one connection. A new access by the client would result in the use of a new 
subsession key.
4. Password attacks: Both versions are vulnerable to a password attack. The mes-
sage from the AS to the client includes material encrypted with a key based 
on the client’s password.10 An opponent can capture this message and attempt 
to decrypt it by trying various passwords. If the result of a test decryption is of 
the proper form, then the opponent has discovered the client’s password and 
may subsequently use it to gain authentication credentials from Kerberos. This 
is the same type of password attack described in Chapter 21, with the same 
kinds of countermeasures being applicable. Version 5 does provide a mecha-
nism known as preauthentication, which should make password attacks more 
difficult, but it does not prevent them.
THE VERSION 5 AUTHENTICATION DIALOGUE Table 15.3 summarizes the basic ver-
sion 5 dialogue. This is best explained by comparison with version 4 (Table 15.1).
First, consider the authentication service exchange. Message (1) is a client re-
quest for a ticket-granting ticket. As before, it includes the ID of the user and the TGS. 
The following new elements are added:
9This is described in Appendix T.
10Appendix T describes the mapping of passwords to encryption keys.

15.3 / KERBEROS 497
(1)
C S AS Options }IDc }Realmc }IDtgs}Times }Nonce1
(2)
AS S C RealmC}IDC}Tickettgs}E(Kc, [Kc,tgs}Times }Nonce1 }Realmtgs}IDtgs])
Tickettgs = E(Ktgs, [Flags }Kc,tgs}Realmc }IDC}ADC}Times])
(a) Authentication Service Exchange to obtain ticket-granting ticket
(3)
C S TGS Options }IDv }Times }Nonce2 }Tickettgs}Authenticatorc
(4)
TGS S C Realmc }IDC}Ticketv }E(Kc,tgs, [Kc,v }Times }Nonce2 }Realmv }IDv])
Tickettgs = E(Ktgs, [Flags }Kc,tgs}Realmc }IDC}ADC}Times])
Ticketv = E(Kv, [Flags }Kc,v }Realmc }IDC}ADC}Times])
Authenticatorc = E(Kc,tgs, [IDC}Realmc }TS1])
(b) Ticket-Granting Service Exchange to obtain service-granting ticket
(5)
C S V Options }Ticketv }Authenticatorc
(6)
V S C EKc,v[TS2 }Subkey }Seq #]
Ticketv = E(Kv, [Flag }Kc,v }Realmc }IDC}ADC}Times])
Authenticatorc = E(Kc,v, [IDC}Relamc }TS2 }Subkey }Seq #])
(c) Client/Server Authentication Exchange to obtain service
Table 15.3 Summary of Kerberos Version 5 Message Exchanges
 
■Realm: Indicates realm of user
 
■Options: Used to request that certain flags be set in the returned ticket
 
■Times: Used by the client to request the following time settings in the ticket:
—from: the desired start time for the requested ticket
—till: the requested expiration time for the requested ticket
—rtime: requested renew-till time
 
■Nonce: A random value to be repeated in message (2) to assure that the re-
sponse is fresh and has not been replayed by an opponent
Message (2) returns a ticket-granting ticket, identifying information for the 
client, and a block encrypted using the encryption key based on the user’s password. 
This block includes the session key to be used between the client and the TGS, 
times specified in message (1), the nonce from message (1), and TGS identifying 
information. The ticket itself includes the session key, identifying information for 
the client, the requested time values, and flags that reflect the status of this ticket 
and the requested options. These flags introduce significant new functionality to 
 version 5. For now, we defer a discussion of these flags and concentrate on the over-
all  structure of the version 5 protocol.
Let us now compare the ticket-granting service exchange for versions 
4 and 5. We see that message (3) for both versions includes an authenticator, a 
ticket, and the name of the requested service. In addition, version 5 includes re-
quested times and options for the ticket and a nonce—all with functions similar 
to those of message (1). The authenticator itself is essentially the same as the one 
used in version 4.

498  CHAPTER 15 / USER AUTHENTICATION
Message (4) has the same structure as message (2). It returns a ticket plus 
information needed by the client, with the information encrypted using the session 
key now shared by the client and the TGS.
Finally, for the client/server authentication exchange, several new features 
 appear in version 5. In message (5), the client may request as an option that mutual 
authentication is required. The authenticator includes several new fields:
 
■Subkey: The client’s choice for an encryption key to be used to protect this 
specific application session. If this field is omitted, the session key from the 
ticket (Kc,v) is used.
 
■Sequence number: An optional field that specifies the starting sequence num-
ber to be used by the server for messages sent to the client during this session. 
Messages may be sequence numbered to detect replays.
If mutual authentication is required, the server responds with message (6). 
This message includes the timestamp from the authenticator. Note that in version 4, 
the timestamp was incremented by one. This is not necessary in version 5, because 
the nature of the format of messages is such that it is not possible for an oppo-
nent to create message (6) without knowledge of the appropriate encryption keys. 
The subkey field, if present, overrides the subkey field, if present, in message (5).  
The optional sequence number field specifies the starting sequence number to be 
used by the client.
TICKET FLAGS The flags field included in tickets in version 5 supports expanded 
functionality compared to that available in version 4. Table 15.4 summarizes the 
flags that may be included in a ticket.
INITIAL
This ticket was issued using the AS protocol and not issued based on a 
ticket-granting ticket.
PRE-AUTHENT
During initial authentication, the client was authenticated by the KDC 
before a ticket was issued.
HW-AUTHENT
The protocol employed for initial authentication required the use of hard-
ware expected to be possessed solely by the named client.
RENEWABLE
Tells TGS that this ticket can be used to obtain a replacement ticket that 
expires at a later date.
MAY-POSTDATE
Tells TGS that a postdated ticket may be issued based on this ticket-
granting ticket.
POSTDATED
Indicates that this ticket has been postdated; the end server can check the 
authtime field to see when the original authentication occurred.
INVALID
This ticket is invalid and must be validated by the KDC before use.
PROXIABLE
Tells TGS that a new service-granting ticket with a different network 
address may be issued based on the presented ticket.
PROXY
Indicates that this ticket is a proxy.
FORWARDABLE
Tells TGS that a new ticket-granting ticket with a different network 
address may be issued based on this ticket-granting ticket.
FORWARDED
Indicates that this ticket has either been forwarded or was issued based on 
authentication involving a forwarded ticket-granting ticket.
Table 15.4 Kerberos Version 5 Flags

15.3 / KERBEROS 499
The INITIAL flag indicates that this ticket was issued by the AS, not by the 
TGS. When a client requests a service-granting ticket from the TGS, it presents a 
ticket-granting ticket obtained from the AS. In version 4, this was the only way to 
obtain a service-granting ticket. Version 5 provides the additional capability that 
the client can get a service-granting ticket directly from the AS. The utility of this is 
as follows: A server, such as a password-changing server, may wish to know that the 
client’s password was recently tested.
The PRE-AUTHENT flag, if set, indicates that when the AS received the ini-
tial request [message (1)], it authenticated the client before issuing a ticket. The 
exact form of this preauthentication is left unspecified. As an example, the MIT 
implementation of version 5 has encrypted timestamp preauthentication, enabled 
by default. When a user wants to get a ticket, it has to send to the AS a preauthen-
tication block containing a random confounder, a version number, and a timestamp 
all encrypted in the client’s password-based key. The AS decrypts the block and will 
not send a ticket-granting ticket back unless the timestamp in the preauthentica-
tion block is within the allowable time skew (time interval to account for clock drift 
and network delays). Another possibility is the use of a smart card that generates 
continually changing passwords that are included in the preauthenticated messages. 
The passwords generated by the card can be based on a user’s password but be 
transformed by the card so that, in effect, arbitrary passwords are used. This pre-
vents an attack based on easily guessed passwords. If a smart card or similar device 
was used, this is indicated by the HW-AUTHENT flag.
When a ticket has a long lifetime, there is the potential for it to be stolen and 
used by an opponent for a considerable period. If a short lifetime is used to lessen 
the threat, then overhead is involved in acquiring new tickets. In the case of a ticket-
granting ticket, the client would either have to store the user’s secret key, which is 
clearly risky, or repeatedly ask the user for a password. A compromise scheme is 
the use of renewable tickets. A ticket with the RENEWABLE flag set includes two 
expiration times: One for this specific ticket and one that is the latest permissible 
value for an expiration time. A client can have the ticket renewed by presenting it 
to the TGS with a requested new expiration time. If the new time is within the limit 
of the latest permissible value, the TGS can issue a new ticket with a new session 
time and a later specific expiration time. The advantage of this mechanism is that 
the TGS may refuse to renew a ticket reported as stolen.
A client may request that the AS provide a ticket-granting ticket with the 
MAY-POSTDATE flag set. The client can then use this ticket to request a ticket 
that is flagged as POSTDATED and INVALID from the TGS. Subsequently, the 
client may submit the postdated ticket for validation. This scheme can be useful 
for running a long batch job on a server that requires a ticket periodically. The 
client can obtain a number of tickets for this session at once, with spread out time 
values. All but the first ticket are initially invalid. When the execution reaches a 
point in time when a new ticket is required, the client can get the appropriate ticket 
validated. With this approach, the client does not have to repeatedly use its ticket-
granting ticket to obtain a service-granting ticket.
In version 5, it is possible for a server to act as a proxy on behalf of a client, in 
effect adopting the credentials and privileges of the client to request a service from 
another server. If a client wishes to use this mechanism, it requests a ticket-granting 

500  CHAPTER 15 / USER AUTHENTICATION
ticket with the PROXIABLE flag set. When this ticket is presented to the TGS, the 
TGS is permitted to issue a service-granting ticket with a different network address; 
this latter ticket will have its PROXY flag set. An application receiving such a ticket 
may accept it or require additional authentication to provide an audit trail.11
The proxy concept is a limited case of the more powerful forwarding procedure. 
If a ticket is set with the FORWARDABLE flag, a TGS can issue to the requestor a 
ticket-granting ticket with a different network address and the FORWARDED flag 
set. This ticket then can be presented to a remote TGS. This capability allows a cli-
ent to gain access to a server on another realm without requiring that each Kerberos 
maintain a secret key with Kerberos servers in every other realm. For example, 
realms could be structured hierarchically. Then a client could walk up the tree to a 
common node and then back down to reach a target realm. Each step of the walk 
would involve forwarding a ticket-granting ticket to the next TGS in the path.
 15.4 REMOTE USER-AUTHENTICATION USING 
ASYMMETRIC ENCRYPTION
Mutual Authentication
In Chapter 14, we presented one approach to the use of public-key encryption for 
the purpose of session-key distribution (Figure 14.9). This protocol assumes that 
each of the two parties is in possession of the current public key of the other. It may 
not be practical to require this assumption.
A protocol using timestamps is provided in [DENN81]:
1. A S AS: IDA}IDB
2. AS S A: E(PRas, [IDA}PUa }T]) }E(PRas, [IDB }PUb }T])
3. A S B:    E(PRas, [IDA}PUa }T]) }E(PRas, [IDB }PUb }T]) } 
 
E(PUb, E(PRa, [Ks }T]))
In this case, the central system is referred to as an authentication server (AS), 
because it is not actually responsible for secret-key distribution. Rather, the AS pro-
vides public-key certificates. The session key is chosen and encrypted by A; hence, 
there is no risk of exposure by the AS. The timestamps protect against replays of 
compromised keys.
This protocol is compact but, as before, requires the synchronization of clocks. 
Another approach, proposed by Woo and Lam [WOO92a], makes use of nonces. 
The protocol consists of the following steps.
1. A S KDC: IDA}IDB
2. KDC S A: E(PRauth, [IDB }PUb])
3. A S B:    E(PUb, [Na }IDA])
4. B S KDC: IDA}IDB }E(PUauth, Na)
5. KDC S B: E(PRauth, [IDA}PUa]) }E(PUb, E(PRauth, [Na }Ks }IDB]))
11For a discussion of some of the possible uses of the proxy capability, see [NEUM93b].

15.4 / REMOTE USER-AUTHENTICATION USING ASYMMETRIC ENCRYPTION 501
6. B S A:    E(PUa, [E(PRauth, [(Na }Ks }IDB)]) }Nb])
7. A S B:    E(Ks, Nb)
In step 1, A informs the KDC of its intention to establish a secure connection 
with B. The KDC returns to A a copy of B’s public-key certificate (step 2). Using B’s 
public key, A informs B of its desire to communicate and sends a nonce Na (step 3). 
In step 4, B asks the KDC for A’s public-key certificate and requests a session key; 
B includes A’s nonce so that the KDC can stamp the session key with that nonce. 
The nonce is protected using the KDC’s public key. In step 5, the KDC returns to 
B a copy of A’s public-key certificate, plus the information {Na, Ks, IDB}. This infor-
mation basically says that Ks is a secret key generated by the KDC on behalf of B 
and tied to Na; the binding of Ks and Na will assure A that Ks is fresh. This triple is 
encrypted using the KDC’s private key to allow B to verify that the triple is in fact 
from the KDC. It is also encrypted using B’s public key so that no other entity may 
use the triple in an attempt to establish a fraudulent connection with A. In step 6, 
the triple {Na, Ks, IDB}, still encrypted with the KDC’s private key, is relayed to A, 
together with a nonce Nb generated by B. All the foregoing are encrypted using A’s 
public key. A retrieves the session key Ks, uses it to encrypt Nb, and returns it to B. 
This last message assures B of A’s knowledge of the session key.
This seems to be a secure protocol that takes into account the various attacks. 
However, the authors themselves spotted a flaw and submitted a revised version of 
the algorithm in [WOO92b]:
1. A S KDC: IDA}IDB
2. KDC S A:     E(PRauth, [IDB }PUb])
3. A S B:     E(PUb, [Na }IDA])
4. B S KDC: IDA}IDB }E(PUauth, Na)
5. KDC S B: E(PRauth, [IDA}PUa]) }E(PUb, E(PRauth, [Na }Ks }IDA}IDB]))
6. B S A:    E(PUa, [Nb }E(PRauth, [Na }Ks }IDA}IDB])])
7. A S B:    E(Ks, Nb)
The identifier of A, IDA, is added to the set of items encrypted with the KDC’s 
private key in steps 5 and 6. This binds the session key Ks to the identities of the two 
parties that will be engaged in the session. This inclusion of IDA accounts for the 
fact that the nonce value Na is considered unique only among all nonces generated 
by A, not among all nonces generated by all parties. Thus, it is the pair {IDA, Na} 
that uniquely identifies the connection request of A.
In both this example and the protocols described earlier, protocols that ap-
peared secure were revised after additional analysis. These examples highlight the 
difficulty of getting things right in the area of authentication.
One-Way Authentication
We have already presented public-key encryption approaches that are suited to 
electronic mail, including the straightforward encryption of the entire message for 
confidentiality (Figure 12.1b), authentication (Figure 12.1c), or both (Figure 12.1d). 
These approaches require that either the sender know the recipient’s public key 

502  CHAPTER 15 / USER AUTHENTICATION
(confidentiality), the recipient know the sender’s public key (authentication), or 
both (confidentiality plus authentication). In addition, the public-key algorithm 
must be applied once or twice to what may be a long message.
If confidentiality is the primary concern, then the following may be more efficient:
A S B: E(PUb, Ks) }E(Ks, M)
In this case, the message is encrypted with a one-time secret key. A also encrypts this 
one-time key with B’s public key. Only B will be able to use the corresponding private 
key to recover the one-time key and then use that key to decrypt the message. This 
scheme is more efficient than simply encrypting the entire message with B’s public key.
If authentication is the primary concern, then a digital signature may suffice, 
as was illustrated in Figure 13.2:
A S B: M }E(PRa, H(M))
This method guarantees that A cannot later deny having sent the message. 
However, this technique is open to another kind of fraud. Bob composes a mes-
sage to his boss Alice that contains an idea that will save the company money. He 
 appends his digital signature and sends it into the email system. Eventually, the 
message will get delivered to Alice’s mailbox. But suppose that Max has heard of 
Bob’s idea and gains access to the mail queue before delivery. He finds Bob’s mes-
sage, strips off his signature, appends his, and requeues the message to be delivered 
to Alice. Max gets credit for Bob’s idea.
To counter such a scheme, both the message and signature can be encrypted 
with the recipient’s public key:
A S B: E(PUb, [M }E(PRa, H(M))])
The latter two schemes require that B know A’s public key and be convinced 
that it is timely. An effective way to provide this assurance is the digital certificate, 
described in Chapter 14. Now we have
A S B: M }E(PRa, H(M)) }E(PRas, [T}IDA}PUa])
In addition to the message, A sends B the signature encrypted with A’s private 
key and A’s certificate encrypted with the private key of the authentication server. 
The recipient of the message first uses the certificate to obtain the sender’s public 
key and verify that it is authentic and then uses the public key to verify the message 
itself. If confidentiality is required, then the entire message can be encrypted with 
B’s public key. Alternatively, the entire message can be encrypted with a one-time 
secret key; the secret key is also transmitted, encrypted with B’s public key. This ap-
proach is explored in Chapter 19.
 15.5 FEDERATED IDENTITY MANAGEMENT
Federated identity management is a relatively new concept dealing with the use of 
a common identity management scheme across multiple enterprises and numerous 
applications and supporting many thousands, even millions, of users. We begin our 
overview with a discussion of the concept of identity management and then examine 
federated identity management.

17.1 / WEB SECURITY CONSIDERATIONS 547
Virtually all businesses, most government agencies, and many individuals now have 
Web sites. The number of individuals and companies with Internet access is expanding 
rapidly and all of these have graphical Web browsers. As a result, businesses are enthu-
siastic about setting up facilities on the Web for electronic commerce. But the reality 
is that the Internet and the Web are extremely vulnerable to compromises of various 
sorts. As businesses wake up to this reality, the demand for secure Web services grows.
The topic of Web security is a broad one and can easily fill a book. In this chap-
ter, we begin with a discussion of the general requirements for Web security and then 
focus on three standardized schemes that are becoming increasingly important as part 
of Web commerce and that focus on security at the transport layer: SSL/TLS, HTTPS, 
and SSH.
 17.1 WEB SECURITY CONSIDERATIONS
The World Wide Web is fundamentally a client/server application running over the 
Internet and TCP/IP intranets. As such, the security tools and approaches discussed 
so far in this book are relevant to the issue of Web security. However, the following 
characteristics of Web usage suggest the need for tailored security tools:
 
■Although Web browsers are very easy to use, Web servers are relatively easy 
to configure and manage, and Web content is increasingly easy to develop, the 
underlying software is extraordinarily complex. This complex software may 
hide many potential security flaws. The short history of the Web is filled with 
examples of new and upgraded systems, properly installed, that are vulnerable 
to a variety of security attacks.
 
■A Web server can be exploited as a launching pad into the corporation’s or 
agency’s entire computer complex. Once the Web server is subverted, an 
attacker may be able to gain access to data and systems not part of the Web 
itself but connected to the server at the local site.
LEARNING OBJECTIVES
After studying this chapter, you should be able to:
 
◆
Summarize Web security threats and Web traffic security approaches.
 
◆
Present an overview of Transport Layer Security (TLS).
 
◆
Understand the differences between Secure Sockets Layer and Transport 
Layer Security.
 
◆
Compare the pseudorandom function used in Transport Layer Security 
with those discussed earlier in the book.
 
◆
Present an overview of HTTPS (HTTP over SSL).
 
◆
Present an overview of Secure Shell (SSH).

548  CHAPTER 17 / TRANSPORT-LEVEL SECURITY
 
■Casual and untrained (in security matters) users are common clients for Web-
based services. Such users are not necessarily aware of the security risks that 
exist and do not have the tools or knowledge to take effective countermeasures.
Web Security Threats
Table 17.1 provides a summary of the types of security threats faced when using the 
Web. One way to group these threats is in terms of passive and active attacks. Passive 
attacks include eavesdropping on network traffic between browser and server and 
gaining access to information on a Web site that is supposed to be restricted. Active 
attacks include impersonating another user, altering messages in transit between 
client and server, and altering information on a Web site.
Another way to classify Web security threats is in terms of the location of the 
threat: Web server, Web browser, and network traffic between browser and server. 
Issues of server and browser security fall into the category of computer system secu-
rity; Part Six of this book addresses the issue of system security in general but is also 
applicable to Web system security. Issues of traffic security fall into the category of 
network security and are addressed in this chapter.
Web Traffic Security Approaches
A number of approaches to providing Web security are possible. The various 
approaches that have been considered are similar in the services they provide and, 
to some extent, in the mechanisms that they use, but they differ with respect to their 
scope of applicability and their relative location within the TCP/IP protocol stack.
Threats
Consequences
Countermeasures
Integrity
r Modification of user data
r Trojan horse browser
r Modification of memory
r Modification of message 
 traffic in transit
r Loss of information
r Compromise of machine
r Vulnerability to all other 
threats
Cryptographic 
checksums
Confidentiality
r Eavesdropping on the net
r Theft of info from server
r Theft of data from client
r Info about network 
configuration
r Info about which client talks 
to server
r Loss of information
r Loss of privacy
Encryption, Web 
proxies
Denial of 
Service
r Killing of user threads
r Flooding machine with bogus 
requests
r Filling up disk or memory
r Isolating machine by DNS 
attacks
r Disruptive
r Annoying
r Prevent user from getting work 
done
Difficult to prevent
Authentication
r Impersonation of legitimate 
users
r Data forgery
r Misrepresentation of user
r Belief that false information 
is valid
Cryptographic 
techniques
Table 17.1 A Comparison of Threats on the Web

17.2 / TRANSPORT LAYER SECURITY 549
Figure 17.1 illustrates this difference. One way to provide Web security is 
to use IP security (IPsec) (Figure 17.1a). The advantage of using IPsec is that it is 
transparent to end users and applications and provides a general-purpose solution. 
Furthermore, IPsec includes a filtering capability so that only selected traffic need 
incur the overhead of IPsec processing.
Another relatively general-purpose solution is to implement security just 
above TCP (Figure 17.1b). The foremost example of this approach is the Secure 
Sockets Layer (SSL) and the follow-on Internet standard known as Transport 
Layer Security (TLS). At this level, there are two implementation choices. For full 
generality, SSL (or TLS) could be provided as part of the underlying protocol suite 
and therefore be transparent to applications. Alternatively, TLS can be embedded 
in specific packages. For example, virtually all browsers come equipped with TLS, 
and most Web servers have implemented the protocol.
Application-specific security services are embedded within the particular 
application. Figure 17.1c shows examples of this architecture. The advantage of this 
approach is that the service can be tailored to the specific needs of a given application.
 17.2 TRANSPORT LAYER SECURITY
One of the most widely used security services is Transport Layer Security (TSL); 
the current version is Version 1.2, defined in RFC 5246. TLS is an Internet stan-
dard that evolved from a commercial protocol known as Secure Sockets Layer 
(SSL). Although SSL implementations are still around, it has been deprecated by 
IETF and is disabled by most corporations offering TLS software. TLS is a general-
purpose service implemented as a set of protocols that rely on TCP. At this level, 
there are two implementation choices. For full generality, TLS could be provided 
as part of the underlying protocol suite and therefore be transparent to applica-
tions. Alternatively, TLS can be embedded in specific packages. For example, most 
browsers come equipped with TLS, and most Web servers have implemented the 
protocol.
TLS Architecture
TLS is designed to make use of TCP to provide a reliable end-to-end secure ser-
vice. TLS is not a single protocol but rather two layers of protocols, as illustrated in 
Figure 17.2.
Figure 17.1 Relative Location of Security Facilities in the TCP/IP Protocol Stack
SMTP
HTTP
TCP
IP/IPSec
(a) Network level
FTP
SMTP
HTTP
TCP
SSL or TLS
IP
(b) Transport level
FTP
IP
S/MIME
HTTP
Kerberos
UDP
SMTP
(c) Application level
TCP

550  CHAPTER 17 / TRANSPORT-LEVEL SECURITY
The TLS Record Protocol provides basic security services to various higher-
layer protocols. In particular, the Hypertext Transfer Protocol (HTTP), which 
provides the transfer service for Web client/server interaction, can operate on top 
of TLS. Three higher-layer protocols are defined as part of TLS: the Handshake 
Protocol; the Change Cipher Spec Protocol; and the Alert Protocol. These TLS-
specific protocols are used in the management of TLS exchanges and are examined 
later in this section. A fourth protocol, the Heartbeat Protocol, is defined in a sepa-
rate RFC and is also discussed subsequently in this section.
Two important TLS concepts are the TLS session and the TLS connection, 
which are defined in the specification as follows:
 
■Connection: A connection is a transport (in the OSI layering model definition) 
that provides a suitable type of service. For TLS, such connections are peer-to-
peer relationships. The connections are transient. Every connection is associ-
ated with one session.
 
■Session: A TLS session is an association between a client and a server. Sessions 
are created by the Handshake Protocol. Sessions define a set of cryptographic 
security parameters, which can be shared among multiple connections. Sessions 
are used to avoid the expensive negotiation of new security parameters for 
each connection.
Between any pair of parties (applications such as HTTP on client and server), 
there may be multiple secure connections. In theory, there may also be multiple 
simultaneous sessions between parties, but this feature is not used in practice.
There are a number of states associated with each session. Once a session is 
 established, there is a current operating state for both read and write (i.e., receive 
and send). In addition, during the Handshake Protocol, pending read and write 
states are created. Upon successful conclusion of the Handshake Protocol, the 
pending states become the current states.
A session state is defined by the following parameters:
 
■Session identifier: An arbitrary byte sequence chosen by the server to identify 
an active or resumable session state.
 
■Peer certificate: An X509.v3 certificate of the peer. This element of the state 
may be null.
Figure 17.2 TLS Protocol Stack
IP
TCP
Record protocol
Handshake
protocol
Change
cipher spec
protocol
Alert
protocol
HTTP
Heartbeat
protocol

17.2 / TRANSPORT LAYER SECURITY 551
 
■Compression method: The algorithm used to compress data prior to encryption.
 
■Cipher spec: Specifies the bulk data encryption algorithm (such as null, AES, 
etc.) and a hash algorithm (such as MD5 or SHA-1) used for MAC calculation. 
It also defines cryptographic attributes such as the hash_size.
 
■Master secret: 48-byte secret shared between the client and server.
 
■Is resumable: A flag indicating whether the session can be used to initiate new 
connections.
A connection state is defined by the following parameters:
 
■Server and client random: Byte sequences that are chosen by the server and 
client for each connection.
 
■Server write MAC secret: The secret key used in MAC operations on data sent 
by the server.
 
■Client write MAC secret: The symmetric key used in MAC operations on data 
sent by the client.
 
■Server write key: The symmetric encryption key for data encrypted by the 
server and decrypted by the client.
 
■Client write key: The symmetric encryption key for data encrypted by the 
 client and decrypted by the server.
 
■Initialization vectors: When a block cipher in CBC mode is used, an initial-
ization vector (IV) is maintained for each key. This field is first initialized by 
the TLS Handshake Protocol. Thereafter, the final ciphertext block from each 
 record is preserved for use as the IV with the following record.
 
■Sequence numbers: Each party maintains separate sequence numbers for 
transmitted and received messages for each connection. When a party sends or 
receives a “change cipher spec message,” the appropriate sequence number is 
set to zero. Sequence numbers may not exceed 264 - 1.
TLS Record Protocol
The TLS Record Protocol provides two services for TLS connections:
 
■Confidentiality: The Handshake Protocol defines a shared secret key that is 
used for conventional encryption of TLS payloads.
 
■Message Integrity: The Handshake Protocol also defines a shared secret key 
that is used to form a message authentication code (MAC).
Figure 17.3 indicates the overall operation of the TLS Record Protocol. The 
Record Protocol takes an application message to be transmitted, fragments the data 
into manageable blocks, optionally compresses the data, applies a MAC, encrypts, 
adds a header, and transmits the resulting unit in a TCP segment. Received data 
are decrypted, verified, decompressed, and reassembled before being delivered to 
higher-level users.
The first step is fragmentation. Each upper-layer message is fragmented into 
blocks of 214 bytes (16,384 bytes) or less. Next, compression is optionally applied. 
Compression must be lossless and may not increase the content length by more than 

552  CHAPTER 17 / TRANSPORT-LEVEL SECURITY
1024 bytes.1 In TLSv2, no compression algorithm is specified, so the default com-
pression algorithm is null.
The next step in processing is to compute a message authentication code over 
the compressed data. TLS makes use of the HMAC algorithm defined in RFC 2104. 
Recall from Chapter 12 that HMAC is defined as
 
HMACK(M) = H[(K+ ⊕opad) ‘ H[(K+ ⊕ipad) ‘ M]] 
where
H     = embedded hash function (for TLS, either MD5 or SHA-1)
M     = message input to HMAC
K+    = secret key padded with zeros on the left so that the result is equal to 
the block length of the hash code (for MD5 and SHA-1, block 
length = 512 bits)
ipad = 00110110 (36 in hexadecimal) repeated 64 times (512 bits)
opad = 01011100 (5C in hexadecimal) repeated 64 times (512 bits)
For TLS, the MAC calculation encompasses the fields indicated in the 
 following expression:
HMAC_hash(MAC_write_secret, seq_num ‘ TLSCompressed.type ‘ 
TLSCompressed.version ‘ TLSCompressed.length ‘ TLSCompressed.fragment)
The MAC calculation covers all of the fields XXX, plus the field 
TLSCompressed.version, which is the version of the protocol being employed.
Next, the compressed message plus the MAC are encrypted using symmetric 
encryption. Encryption may not increase the content length by more than 1024 bytes, 
Figure 17.3 TLS Record Protocol Operation
Application data
Fragment
Compress
Add MAC
Encrypt
Append TLS
record header
1Of course, one hopes that compression shrinks rather than expands the data. However, for very short 
blocks, it is possible, because of formatting conventions, that the compression algorithm will actually pro-
vide output that is longer than the input.

17.2 / TRANSPORT LAYER SECURITY 553
so that the total length may not exceed 214 + 2048. The following encryption algo-
rithms are permitted:
Block Cipher
Stream Cipher
Algorithm
Key Size
Algorithm
Key Size
AES
3DES
128, 256

RC4-128

For stream encryption, the compressed message plus the MAC are encrypted. 
Note that the MAC is computed before encryption takes place and that the MAC is 
then encrypted along with the plaintext or compressed plaintext.
For block encryption, padding may be added after the MAC prior to encryp-
tion. The padding is in the form of a number of padding bytes followed by a one-
byte indication of the length of the padding. The padding can be any amount that 
results in a total that is a multiple of the cipher’s block length, up to a maximum 
of 255 bytes. For example, if the cipher block length is 16 bytes (e.g., AES) and if 
the plaintext (or compressed text if compression is used) plus MAC plus padding 
length byte is 79 bytes long, then the padding length (in bytes) can be 1, 17, 33, and 
so on, up to 161. At a padding length of 161, the total length is 79 + 161 = 240. A 
variable padding length may be used to frustrate attacks based on an analysis of 
the lengths of exchanged messages.
The final step of TLS Record Protocol processing is to prepend a header con-
sisting of the following fields:
 
■Content Type (8 bits): The higher-layer protocol used to process the enclosed 
fragment.
 
■Major Version (8 bits): Indicates major version of TLS in use. For TLSv2, the 
value is 3.
 
■Minor Version (8 bits): Indicates minor version in use. For TLSv2, the value is 1.
 
■Compressed Length (16 bits): The length in bytes of the plaintext fragment 
(or compressed fragment if compression is used). The maximum value is 
214 + 2048.
The content types that have been defined are change_cipher_spec, 
alert, handshake, and application_data. The first three are the TLS-
specific protocols, discussed next. Note that no distinction is made among the vari-
ous applications (e.g., HTTP) that might use TLS; the content of the data created by 
such applications is opaque to TLS. 
Figure 17.4 illustrates the TLS record format.
Change Cipher Spec Protocol
The Change Cipher Spec Protocol is one of the four TLS-specific protocols that use 
the TLS Record Protocol, and it is the simplest. This protocol consists of a single 
message (Figure 17.5a), which consists of a single byte with the value 1. The sole 
purpose of this message is to cause the pending state to be copied into the current 
state, which updates the cipher suite to be used on this connection.

554  CHAPTER 17 / TRANSPORT-LEVEL SECURITY
Alert Protocol
The Alert Protocol is used to convey TLS-related alerts to the peer entity. As with 
other applications that use TLS, alert messages are compressed and encrypted, as 
specified by the current state.
Each message in this protocol consists of two bytes (Figure 17.5b). The first 
byte takes the value warning (1) or fatal (2) to convey the severity of the message. 
If the level is fatal, TLS immediately terminates the connection. Other connections 
on the same session may continue, but no new connections on this session may 
be established. The second byte contains a code that indicates the specific alert. 
The  following alerts are always fatal:
 
■unexpected_message: An inappropriate message was received.
 
■bad_record_mac: An incorrect MAC was received.
 
■decompression_failure: The decompression function received improper input 
(e.g., unable to decompress or decompress to greater than maximum allowable 
length).
 
■handshake_failure: Sender was unable to negotiate an acceptable set of secu-
rity parameters given the options available.
 
■illegal_parameter: A field in a handshake message was out of range or incon-
sistent with other fields.
Figure 17.5 TLS Record Protocol Payload

(a) Change Cipher Spec Protocol
1 byte
Type
(c) Handshake Protocol
1 byte
Length
3 bytes
Content
Ú 0 bytes
(d) Other Upper-Layer Protocol (e.g., HTTP)
Opaque content
Ú 1 byte
Level
(b) Alert Protocol
1 byte 1 byte
Alert
Figure 17.4 TLS Record Format
Content
type
Major
version
Minor
version
Compressed
length
Plaintext
(optionally
compressed)
MAC (0, 16, or 20 bytes)
Encrypted

17.2 / TRANSPORT LAYER SECURITY 555
 
■decryption_failed: A ciphertext decrypted in an invalid way; either it was not 
an even multiple of the block length or its padding values, when checked, were 
incorrect.
 
■record_overflow: A TLS record was received with a payload (ciphertext) 
whose length exceeds 214 + 2048 bytes, or the ciphertext decrypted to a length 
of greater than 214 + 1024 bytes.
 
■unknown_ca: A valid certificate chain or partial chain was received, but the 
certificate was not accepted because the CA certificate could not be located or 
could not be matched with a known, trusted CA.
 
■access_denied: A valid certificate was received, but when access control was 
applied, the sender decided not to proceed with the negotiation.
 
■decode_error: A message could not be decoded, because either a field was out 
of its specified range or the length of the message was incorrect.
 
■export_restriction: A negotiation not in compliance with export restrictions on 
key length was detected.
 
■protocol_version: The protocol version the client attempted to negotiate is 
recognized but not supported.
 
■insufficient_security: Returned instead of handshake_failure when a negotia-
tion has failed specifically because the server requires ciphers more secure 
than those supported by the client.
 
■internal_error: An internal error unrelated to the peer or the correctness of 
the protocol makes it impossible to continue.
The remaining alerts are the following.
 
■close_notify: Notifies the recipient that the sender will not send any more mes-
sages on this connection. Each party is required to send a close_notify alert 
before closing the write side of a connection.
 
■bad_certificate: A received certificate was corrupt (e.g., contained a signature 
that did not verify).
 
■unsupported_certificate: The type of the received certificate is not supported.
 
■certificate_revoked: A certificate has been revoked by its signer.
 
■certificate_expired: A certificate has expired.
 
■certificate_unknown: Some other unspecified issue arose in processing the 
certificate, rendering it unacceptable.
 
■decrypt_error: A handshake cryptographic operation failed, including being 
unable to verify a signature, decrypt a key exchange, or validate a finished 
message.
 
■user_canceled: This handshake is being canceled for some reason unrelated to 
a protocol failure.
 
■no_renegotiation: Sent by a client in response to a hello request or by the 
server in response to a client hello after initial handshaking. Either of these 
messages would normally result in renegotiation, but this alert indicates that 
the sender is not able to renegotiate. This message is always a warning.

556  CHAPTER 17 / TRANSPORT-LEVEL SECURITY
Handshake Protocol
The most complex part of TLS is the Handshake Protocol. This protocol allows 
the server and client to authenticate each other and to negotiate an encryption and 
MAC algorithm and cryptographic keys to be used to protect data sent in a TLS 
record. The Handshake Protocol is used before any application data is transmitted.
The Handshake Protocol consists of a series of messages exchanged by client 
and server. All of these have the format shown in Figure 17.5c . Each message has 
three fields:
 
■Type (1 byte): Indicates one of 10 messages. Table 17.2 lists the defined mes-
sage types.
 
■Length (3 bytes): The length of the message in bytes.
 
■
Content (# 0 bytes): The parameters associated with this message; these are 
listed in Table 17.2.
Figure 17.6 shows the initial exchange needed to establish a logical connection 
between client and server. The exchange can be viewed as having four phases.
PHASE 1. ESTABLISH SECURITY CAPABILITIES Phase 1 initiates a logical connection 
and establishes the security capabilities that will be associated with it. The exchange 
is initiated by the client, which sends a client_hello message with the following 
parameters:
 
■Version: The highest TLS version understood by the client.
 
■Random: A client-generated random structure consisting of a 32-bit time-
stamp and 28 bytes generated by a secure random number generator. These 
values serve as nonces and are used during key exchange to prevent replay 
attacks.
 
■Session ID: A variable-length session identifier. A nonzero value indicates that 
the client wishes to update the parameters of an existing connection or to cre-
ate a new connection on this session. A zero value indicates that the client 
wishes to establish a new connection on a new session.
Message Type
Parameters
hello_request
null
client_hello
version, random, session id, cipher suite, compression method
server_hello
version, random, session id, cipher suite, compression method
certificate
chain of X.509v3 certificates
server_key_exchange
parameters, signature
certificate_request
type, authorities
server_done
null
certificate_verify
signature
client_key_exchange
parameters, signature
finished
hash value
Table 17.2 TLS Handshake Protocol Message Types

17.2 / TRANSPORT LAYER SECURITY 557
 
■CipherSuite: This is a list that contains the combinations of cryptographic 
algorithms supported by the client, in decreasing order of preference. Each 
element of the list (each cipher suite) defines both a key exchange algorithm 
and a CipherSpec; these are discussed subsequently.
 
■Compression Method: This is a list of the compression methods the client 
supports.
After sending the client_hello message, the client waits for the server_
hello message, which contains the same parameters as the client_hello 
Figure 17.6 Handshake Protocol Action
Client
Server
Phase 1
Establish security capabilities, including
protocol version, session ID, cipher suite,
compression method, and initial random
numbers.
Phase 2
Server may send certificate, key exchange,
and request certificate. Server signals end
of hello message phase.
Phase 3
Client sends certificate if requested. Client
sends key exchange. Client may send
certificate verification.
Phase 4
Change cipher suite and finish
handshake protocol.
Note: Shaded transfers are
optional or situation-dependent
messages that are not always sent.
finished
change_cipher_spec
finished
change_cipher_spec
certificate_verify
client_key_exchange
certificate
server_hello_done
certificate_request
server_key_exchange
certificate
server_hello
client_hello
Time

558  CHAPTER 17 / TRANSPORT-LEVEL SECURITY
 message. For the server_hello message, the following conventions apply. The 
Version field contains the lowest of the version suggested by the client and the highest 
supported by the server. The Random field is generated by the server and is indepen-
dent of the client’s Random field. If the SessionID field of the client was nonzero, the 
same value is used by the server; otherwise the server’s SessionID field contains the 
value for a new session. The CipherSuite field contains the single cipher suite selected 
by the server from those proposed by the client. The Compression field contains the 
compression method selected by the server from those proposed by the client.
The first element of the Ciphersuite parameter is the key exchange method 
(i.e., the means by which the cryptographic keys for conventional encryption and 
MAC are exchanged). The following key exchange methods are supported.
 
■RSA: The secret key is encrypted with the receiver’s RSA public key. A public-
key certificate for the receiver’s key must be made available.
 
■Fixed Diffie–Hellman: This is a Diffie–Hellman key exchange in which the 
server’s certificate contains the Diffie–Hellman public parameters signed by 
the certificate authority (CA). That is, the public-key certificate contains the 
Diffie–Hellman public-key parameters. The client provides its Diffie–Hellman 
public-key parameters either in a certificate, if client authentication is re-
quired, or in a key exchange message. This method results in a fixed secret key 
between two peers based on the Diffie–Hellman calculation using the fixed 
public keys.
 
■Ephemeral Diffie-Hellman: This technique is used to create ephemeral (tem-
porary, one-time) secret keys. In this case, the Diffie–Hellman public keys are 
exchanged and signed using the sender’s private RSA or DSS key. The receiver 
can use the corresponding public key to verify the signature. Certificates are used 
to authenticate the public keys. This would appear to be the most secure of the 
three Diffie–Hellman options because it results in a temporary, authenticated key.
 
■Anonymous Diffie–Hellman: The base Diffie–Hellman algorithm is used 
with no authentication. That is, each side sends its public Diffie–Hellman pa-
rameters to the other with no authentication. This approach is vulnerable to 
man-in-the-middle attacks, in which the attacker conducts anonymous Diffie–
Hellman with both parties.
Following the definition of a key exchange method is the CipherSpec, which 
includes the following fields:
 
■CipherAlgorithm: Any of the algorithms mentioned earlier: RC4, RC2, DES, 
3DES, DES40, or IDEA
 
■MACAlgorithm: MD5 or SHA-1
 
■CipherType: Stream or Block
 
■IsExportable: True or False
 
■HashSize: 0, 16 (for MD5), or 20 (for SHA-1) bytes
 
■Key Material: A sequence of bytes that contain data used in generating the 
write keys
 
■IV Size: The size of the Initialization Value for Cipher Block Chaining (CBC) 
encryption

17.2 / TRANSPORT LAYER SECURITY 559
PHASE 2. SERVER AUTHENTICATION AND KEY EXCHANGE The server begins this 
phase by sending its certificate if it needs to be authenticated; the message con-
tains one or a chain of X.509 certificates. The certificate message is required for 
any agreed-on key exchange method except anonymous Diffie–Hellman. Note 
that if fixed Diffie–Hellman is used, this certificate message functions as the serv-
er’s key exchange message because it contains the server’s public Diffie–Hellman 
parameters.
Next, a server_key_exchange message may be sent if it is required. It is not 
required in two instances: (1) The server has sent a certificate with fixed Diffie–
Hellman parameters; or (2) RSA key exchange is to be used. The server_key_ 
exchange message is needed for the following:
 
■Anonymous Diffie–Hellman: The message content consists of the two global 
Diffie–Hellman values (a prime number and a primitive root of that number) 
plus the server’s public Diffie–Hellman key (see Figure 10.1).
 
■Ephemeral Diffie–Hellman: The message content includes the three Diffie–
Hellman parameters provided for anonymous Diffie–Hellman plus a signature 
of those parameters.
 
■RSA key exchange (in which the server is using RSA but has a signature-only 
RSA key): Accordingly, the client cannot simply send a secret key encrypted 
with the server’s public key. Instead, the server must create a temporary RSA 
public/private key pair and use the server_key_exchange message to send the 
public key. The message content includes the two parameters of the temporary 
RSA public key (exponent and modulus; see Figure 9.5) plus a signature of 
those parameters.
Some further details about the signatures are warranted. As usual, a signature 
is created by taking the hash of a message and encrypting it with the sender’s private 
key. In this case, the hash is defined as
 
hash(ClientHello.random ‘ ServerHello.random ‘ ServerParams) 
So the hash covers not only the Diffie–Hellman or RSA parameters but also the 
two nonces from the initial hello messages. This ensures against replay attacks and 
misrepresentation. In the case of a DSS signature, the hash is performed using the 
SHA-1 algorithm. In the case of an RSA signature, both an MD5 and an SHA-1 
hash are calculated, and the concatenation of the two hashes (36 bytes) is encrypted 
with the server’s private key.
Next, a nonanonymous server (server not using anonymous Diffie–Hellman) 
can request a certificate from the client. The certificate_request message includes 
two parameters: certificate_type and certificate_authorities. The certificate type in-
dicates the public-key algorithm and its use:
 
■RSA, signature only
 
■DSS, signature only
 
■RSA for fixed Diffie–Hellman; in this case the signature is used only for 
authentication, by sending a certificate signed with RSA
 
■DSS for fixed Diffie–Hellman; again, used only for authentication

560  CHAPTER 17 / TRANSPORT-LEVEL SECURITY
The second parameter in the certificate_request message is a list of the distin-
guished names of acceptable certificate authorities.
The final message in phase 2, and one that is always required, is the server_
done message, which is sent by the server to indicate the end of the server hello and 
associated messages. After sending this message, the server will wait for a client 
response. This message has no parameters.
PHASE 3. CLIENT AUTHENTICATION AND KEY EXCHANGE Upon receipt of the 
server_done message, the client should verify that the server provided a valid 
certificate (if required) and check that the server_hello parameters are accept-
able. If all is satisfactory, the client sends one or more messages back to the server.
If the server has requested a certificate, the client begins this phase by send-
ing a certificate message. If no suitable certificate is available, the client sends a 
no_certificate alert instead.
Next is the client_key_exchange message, which must be sent in this phase. 
The content of the message depends on the type of key exchange, as follows:
 
■RSA: The client generates a 48-byte pre-master secret and encrypts with the 
public key from the server’s certificate or temporary RSA key from a server_
key_exchange message. Its use to compute a master secret is explained later.
 
■Ephemeral or Anonymous Diffie–Hellman: The client’s public Diffie–Hellman 
parameters are sent.
 
■Fixed Diffie–Hellman: The client’s public Diffie–Hellman parameters were 
sent in a certificate message, so the content of this message is null.
Finally, in this phase, the client may send a certificate_verify message to pro-
vide explicit verification of a client certificate. This message is only sent following 
any client certificate that has signing capability (i.e., all certificates except those 
containing fixed Diffie–Hellman parameters). This message signs a hash code based 
on the preceding messages, defined as
CertificateVerify.signature.md5_hash
 MD5(handshake_messages);
Certificate.signature.sha_hash
 SHA(handshake_messages);
where handshake_messages refers to all Handshake Protocol messages sent or 
received starting at client_hello but not including this message. If the user’s 
private key is DSS, then it is used to encrypt the SHA-1 hash. If the user’s private 
key is RSA, it is used to encrypt the concatenation of the MD5 and SHA-1 hashes. 
In either case, the purpose is to verify the client’s ownership of the private key for 
the client certificate. Even if someone is misusing the client’s certificate, he or she 
would be unable to send this message.
PHASE 4. FINISH Phase 4 completes the setting up of a secure connection. The  client 
sends a change_cipher_spec message and copies the pending CipherSpec into the 
current CipherSpec. Note that this message is not considered part of the Handshake 
Protocol but is sent using the Change Cipher Spec Protocol. The client then imme-
diately sends the finished message under the new algorithms, keys, and secrets. 

17.2 / TRANSPORT LAYER SECURITY 561
The finished message verifies that the key exchange and authentication processes 
were successful. The content of the finished message is:
PRF(master_secret, finished_label, MD5(handshake_messages) ‘ SHA@1
(handshake_messages))
where finished_label is the string “client finished” for the client and “server 
finished” for the server.
In response to these two messages, the server sends its own change_ cipher_
spec message, transfers the pending to the current CipherSpec, and sends its fin-
ished message. At this point, the handshake is complete and the client and server 
may begin to exchange application-layer data.
Cryptographic Computations
Two further items are of interest: (1) the creation of a shared master secret by 
means of the key exchange; and (2) the generation of cryptographic parameters 
from the master secret.
MASTER SECRET CREATION The shared master secret is a one-time 48-byte value 
(384 bits) generated for this session by means of secure key exchange. The creation 
is in two stages. First, a pre_master_secret is exchanged. Second, the  master_
secret is calculated by both parties. For pre_master_secret exchange, there 
are two possibilities.
 
■RSA: A 48-byte pre_master_secret is generated by the client, encrypted with 
the server’s public RSA key, and sent to the server. The server decrypts the 
ciphertext using its private key to recover the pre_master_secret.
 
■Diffie–Hellman: Both client and server generate a Diffie–Hellman public key. 
After these are exchanged, each side performs the Diffie–Hellman calculation 
to create the shared pre_master_secret.
Both sides now compute the master_secret as
master_secret =
 PRF(pre_master_secret, “master secret”, ClientHello.random ‘ ServerHello 
.random)
where ClientHello.random and ServerHello.random are the two nonce 
values exchanged in the initial hello messages.
The algorithm is performed until 48 bytes of pseudorandom output are pro-
duced. The calculation of the key block material (MAC secret keys, session encryp-
tion keys, and IVs) is defined as
key_block =
 PRF(SecurityParameters.master_secret, “key expansion”,
SecurityParameters.server_random ‘ SecurityParameters.client_random)
until enough output has been generated.

562  CHAPTER 17 / TRANSPORT-LEVEL SECURITY
GENERATION OF CRYPTOGRAPHIC PARAMETERS CipherSpecs require a client write 
MAC secret, a server write MAC secret, a client write key, a server write key, a 
client write IV, and a server write IV, which are generated from the master secret 
in that order. These parameters are generated from the master secret by hashing 
the master secret into a sequence of secure bytes of sufficient length for all needed 
parameters.
The generation of the key material from the master secret uses the same for-
mat for generation of the master secret from the pre-master secret as
key_block = MD5(master_secret ‘ SHA(=A> ‘ master_secret ‘
ServerHello.random ‘ ClientHello.random)) ‘ 
MD5(master_secret ‘ SHA(=BB> ‘ master_secret ‘ 
ServerHello.random ‘ ClientHello.random)) ‘ 
MD5(master_secret ‘ SHA(=CCC> ‘ master_secret ‘ 
ServerHello.random ‘ ClientHello.random)) ‘ c
until enough output has been generated. The result of this algorithmic structure is a 
pseudorandom function. We can view the master_secret as the pseudorandom 
seed value to the function. The client and server random numbers can be viewed as 
salt values to complicate cryptanalysis (see Chapter 21 for a discussion of the use of 
salt values).
PSEUDORANDOM FUNCTION TLS makes use of a pseudorandom function referred 
to as PRF to expand secrets into blocks of data for purposes of key generation or 
validation. The objective is to make use of a relatively small, shared secret value but 
to generate longer blocks of data in a way that is secure from the kinds of attacks 
made on hash functions and MACs. The PRF is based on the data expansion func-
tion (Figure 17.7) given as
 
P_hash(secret, seed) = HMAC_hash(secret, A(1) ‘ seed) ‘
                                          HMAC_hash(secret, A(2) ‘ seed) ‘
                                         HMAC_hash(secret, A(3) ‘ seed) ‘
 
where A() is defined as
A(0) = seed
A(i) = HMAC_hash(secret, A(i - 1))
The data expansion function makes use of the HMAC algorithm with either MD5 
or SHA-1 as the underlying hash function. As can be seen, P_hash can be iterated 
as many times as necessary to produce the required quantity of data. For example, if 
P_SHA256 was used to generate 80 bytes of data, it would have to be iterated three 
times (through A(3)), producing 96 bytes of data of which the last 16 would be dis-
carded. In this case, P_MD5 would have to be iterated four times, producing exactly 
64 bytes of data. Note that each iteration involves two executions of HMAC, each 
of which in turn involves two executions of the underlying hash algorithm.

17.2 / TRANSPORT LAYER SECURITY 563
To make PRF as secure as possible, it uses two hash algorithms in a way that 
should guarantee its security if either algorithm remains secure. PRF is defined as
 
PRF(secret, label, seed) = P_6hash7(secret, label ‘ seed) 
PRF takes as input a secret value, an identifying label, and a seed value and 
produces an output of arbitrary length.
Heartbeat Protocol
In the context of computer networks, a heartbeat is a periodic signal generated by 
hardware or software to indicate normal operation or to synchronize other parts of 
a system. A heartbeat protocol is typically used to monitor the availability of a pro-
tocol entity. In the specific case of TLS, a Heartbeat protocol was defined in 2012 in 
RFC 6250 (Transport Layer Security (TLS) and Datagram Transport Layer Security 
(DTLS) Heartbeat Extension).
Figure 17.7 TLS Function P_hash(secret, seed)
Secret
Seed
Seed
A(1)
HMAC
Secret
Secret
Length = hash size
Secret
Seed
A(2)
HMAC
HMAC
Secret
Seed
A(3)
HMAC
HMAC
Secret
HMAC

564  CHAPTER 17 / TRANSPORT-LEVEL SECURITY
The Heartbeat protocol runs on top of the TLS Record Protocol and con-
sists of two message types: heartbeat_request and heartbeat_response. 
The use of the Heartbeat protocol is established during Phase 1 of the Handshake 
protocol (Figure 17.6). Each peer indicates whether it supports heartbeats. If heart-
beats are supported, the peer indicates whether it is willing to receive heartbeat_ 
request messages and respond with heartbeat_response messages or only 
willing to send heartbeat_request messages.
A heartbeat_request message can be sent at any time. Whenever a re-
quest message is received, it should be answered promptly with a corresponding 
heartbeat_response message. The heartbeat_request message includes 
payload length, payload, and padding fields. The payload is a random content 
between 16 bytes and 64 Kbytes in length. The corresponding heartbeat_ 
response message must include an exact copy of the received payload. The pad-
ding is also random content. The padding enables the sender to perform a path 
MTU (maximum transfer unit) discovery operation, by sending requests with in-
creasing padding until there is no answer anymore, because one of the hosts on 
the path cannot handle the message.
The heartbeat serves two purposes. First, it assures the sender that the recipi-
ent is still alive, even though there may not have been any activity over the under-
lying TCP connection for a while. Second, the heartbeat generates activity across 
the connection during idle periods, which avoids closure by a firewall that does not 
tolerate idle connections.
The requirement for the exchange of a payload was designed into the Heartbeat 
protocol to support its use in a connectionless version of TLS known as Datagram 
Transport Layer Security (DTLS). Because a connectionless service is subject 
to packet loss, the payload enables the requestor to match response messages to 
request messages. For simplicity, the same version of the Heartbeat protocol is used 
with both TLS and DTLS. Thus, the payload is required for both TLS and DTLS.
SSL/TLS ATTACKS
Since the first introduction of SSL in 1994, and the subsequent standardization of 
TLS, numerous attacks have been devised against these protocols. The appearance 
of each attack has necessitated changes in the protocol, the encryption tools used, or 
some aspect of the implementation of SSL and TLS to counter these threats.
ATTACK CATEGORIES We can group the attacks into four general categories:
 
■Attacks on the handshake protocol: As early as 1998, an approach to com-
promising the handshake protocol based on exploiting the formatting and 
implementation of the RSA encryption scheme was presented [BLEI98]. As 
 countermeasures were implemented the attack was refined and adjusted to not 
only thwart the countermeasures but also speed up the attack [e.g., BARD12].
 
■Attacks on the record and application data protocols: A number of vulnerabili-
ties have been discovered in these protocols, leading to patches to counter the 
new threats. As a recent example, in 2011, researchers Thai Duong and Juliano 
Rizzo demonstrated a proof of concept called BEAST (Browser Exploit Against 
SSL/TLS) that turned what had been considered only a theoretical vulnerability 

17.2 / TRANSPORT LAYER SECURITY 565
into a practical attack [GOOD11]. BEAST leverages a type of cryptographic 
attack called a chosen-plaintext attack. The attacker mounts the attack by 
choosing a guess for the plaintext that is associated with a known ciphertext. The 
researchers developed a practical algorithm for launching successful attacks. 
Subsequent patches were able to thwart this attack. The authors of the BEAST 
attack are also the creators of the 2012 CRIME (Compression Ratio Info-leak 
Made Easy) attack, which can allow an attacker to recover the content of web 
cookies when data compression is used along with TLS [GOOD12]. When used 
to recover the content of secret authentication cookies, it allows an attacker to 
perform session hijacking on an authenticated web session.
 
■Attacks on the PKI: Checking the validity of X.509 certificates is an activity 
subject to a variety of attacks, both in the context of SSL/TLS and elsewhere. 
For example, [GEOR12] demonstrated that commonly used libraries for 
SSL/TLS suffer from vulnerable certificate validation implementations. The 
 authors revealed weaknesses in the source code of OpenSSL, GnuTLS, JSSE, 
ApacheHttpClient, Weberknecht, cURL, PHP, Python and applications built 
upon or with these products.
 
■Other attacks: [MEYE13] lists a number of attacks that do not fit into any of 
the preceding categories. One example is an attack announced in 2011 by the 
German hacker group The Hackers Choice, which is a DoS attack [KUMA11]. 
The attack creates a heavy processing load on a server by overwhelming the 
target with SSL/TLS handshake requests. Boosting system load is done by 
establishing new connections or using renegotiation. Assuming that the major-
ity of computation during a handshake is done by the server, the attack creates 
more system load on the server than on the source device, leading to a DoS. 
The server is forced to continuously recompute random numbers and keys.
The history of attacks and countermeasures for SSL/TLS is representative of 
that for other Internet-based protocols. A “perfect” protocol and a “perfect” imple-
mentation strategy are never achieved. A constant back-and-forth between threats 
and countermeasures determines the evolution of Internet-based protocols.
TLSv1.3
In 2014, the IETF TLS working group began work on a version 1.3 of TLS. The 
primary aim is to improve the security of TLS. As of this writing, TLSv1.3 is still 
in a draft stage, but the final standard is likely to be very close to the current draft. 
Among the significant changes from version 1.2 are the following:
 
■TLSv1.3 removes support for a number of options and functions. Remov-
ing code that implements functions no longer needed reduces the chances 
of potentially dangerous coding errors and reduces the attack surface. The 
deleted items include:
–Compression
–Ciphers that do not offer authenticated encryption
–Static RSA and DH key exchange
–32-bit timestamp as part of the Random parameter in the client_hello 
message

566  CHAPTER 17 / TRANSPORT-LEVEL SECURITY
–Renegotiation
–Change Cipher Spec Protocol
–RC4
–Use of MD5 and SHA-224 hashes with signatures
 
■TLSv1.3 uses Diffie–Hellman or Elliptic Curve Diffie–Hellman for key 
exchange and does not permit RSA. The danger with RSA is that if the private 
key is compromised, all handshakes using these cipher suites will be compro-
mised. With DH or ECDH, a new key is negotiated for each handshake.
 
■TLSv1.3 allows for a “1 round trip time” handshake by changing the order of 
message sent with establishing a secure connection. The client sends a  Client 
Key Exchange message containing its cryptographic parameters for key estab-
lishment before a cipher suite has been negotiated. This enables a server 
to  calculate keys for encryption and authentication before sending its first 
response. Reducing the number of packets sent during this handshake phase 
speeds up the process and reduces the attack surface.
These changes should improve the efficiency and security of TLS.
 17.3 HTTPS
HTTPS (HTTP over SSL) refers to the combination of HTTP and SSL to imple-
ment secure communication between a Web browser and a Web server. The HTTPS 
capability is built into all modern Web browsers. Its use depends on the Web server 
supporting HTTPS communication. For example, some search engines do not sup-
port HTTPS.
The principal difference seen by a user of a Web browser is that URL (uniform 
resource locator) addresses begin with https:// rather than http://. A normal HTTP 
connection uses port 80. If HTTPS is specified, port 443 is used, which invokes SSL.
When HTTPS is used, the following elements of the communication are 
encrypted:
 
■URL of the requested document
 
■Contents of the document
 
■Contents of browser forms (filled in by browser user)
 
■Cookies sent from browser to server and from server to browser
 
■Contents of HTTP header
HTTPS is documented in RFC 2818, HTTP Over TLS. There is no fundamen-
tal change in using HTTP over either SSL or TLS, and both implementations are 
referred to as HTTPS.
Connection Initiation
For HTTPS, the agent acting as the HTTP client also acts as the TLS client. The 
client initiates a connection to the server on the appropriate port and then sends 
the TLS ClientHello to begin the TLS handshake. When the TLS handshake has 

19.3 / EMAIL THREATS AND COMPREHENSIVE EMAIL SECURITY 625
the local model for the representation of some form of information. Examples 
include a UNIX-style text file, or a Sun raster image, or a VMS indexed file, and 
audio data in a system-dependent format stored only in memory. In  essence, 
the data are created in the native form that corresponds to the type specified 
by the media type.
 
■Canonical form: The entire body, including out-of-band information such as 
record lengths and possibly file attribute information, is converted to a univer-
sal canonical form. The specific media type of the body as well as its associated 
attributes dictates the nature of the canonical form that is used. Conversion to 
the proper canonical form may involve character set conversion, transforma-
tion of audio data, compression, or various other operations specific to the 
various media types.
 19.3 EMAIL THREATS AND COMPREHENSIVE EMAIL SECURITY
For both organizations and individuals, email is both pervasive and especially vul-
nerable to a wide range of security threats. In general terms, email security threats 
can be classified as follows:
 
■Authenticity-related threats: Could result in unauthorized access to an enter-
prise’s email system.
 
■Integrity-related threats: Could result in unauthorized modification of email 
content.
 
■Confidentiality-related threats: Could result in unauthorized disclosure of 
 sensitive information.
 
■Availability-related threats: Could prevent end users from being able to send 
or receive email.
A useful list of specific email threats, together with approaches to mitigation, 
is provided in NIST SP 800-177 (Trustworthy Email, September 2015) and is shown 
in Table 19.3.
SP 800-177 recommends use of a variety of standardized protocols as a means 
for countering these threats. These include:
 
■STARTTLS: An SMTP security extension that provides authentication, integ-
rity, non-repudiation (via digital signatures) and confidentiality (via encryp-
tion) for the entire SMTP message by running SMTP over TLS.
 
■S/MIME: Provides authentication, integrity, non-repudiation (via digital 
 signatures) and confidentiality (via encryption) of the message body carried 
in SMTP messages.
 
■DNS Security Extensions (DNSSEC): Provides authentication and integ-
rity protection of DNS data, and is an underlying tool used by various email 
 security protocols.
 
■DNS-based Authentication of Named Entities (DANE): Is designed to over-
come problems in the certificate authority (CA) system by providing an 
 alternative channel for authenticating public keys based on DNSSEC, with the 

626  CHAPTER 19 / ELECTRONIC MAIL SECURITY
Threat
Impact on Purported 
Sender
Impact on Receiver
Mitigation
Email sent by 
unauthorized MTA in 
enterprise (e.g., malware 
botnet)
Loss of reputation, valid 
email from enterprise 
may be blocked as 
possible spam/phishing 
attack.
UBE and/or email 
containing malicious 
links may be delivered 
into user inboxes.
Deployment of domain-
based authentication 
techniques. Use of 
digital signatures over 
email.
Email message sent 
using spoofed or 
unregistered sending 
domain
Loss of reputation, valid 
email from enterprise 
may be blocked as 
possible spam/phishing 
attack.
UBE and/or email 
containing malicious 
links may be delivered 
into user inboxes.
Deployment of domain-
based authentication 
techniques. Use of 
digital signatures over 
email.
Email message sent 
using forged sending 
address or email address 
(i.e., phishing, spear 
phishing)
Loss of reputation, valid 
email from enterprise 
may be blocked as 
possible spam/phishing 
attack.
UBE and/or email 
containing malicious 
links may be delivered. 
Users may inadvertently 
divulge sensitive 
information or PII.
Deployment of domain-
based authentication 
techniques. Use of 
digital signatures over 
email.
Email modified in transit
Leak of sensitive 
information or PII.
Leak of sensitive 
information, altered 
message may contain 
malicious information.
Use of TLS to encrypt 
email transfer between 
servers. Use of end-to-
end email encryption.
Disclosure of sensitive 
information (e.g., PII) 
via monitoring and 
capturing of email traffic
Leak of sensitive 
information or PII.
Leak of sensitive 
information, altered 
message may contain 
malicious information.
Use of TLS to encrypt 
email transfer between 
servers. Use of end-to-
end email encryption.
Unsolicited Bulk Email 
(UBE) (i.e., spam)
None, unless purported 
sender is spoofed.
UBE and/or email 
containing malicious 
links may be delivered 
into user inboxes.
Techniques to address 
UBE.
DoS/DDoS attack 
against an enterprises’ 
email servers
Inability to send email.
Inability to receive 
email.
Multiple mail servers, 
use of cloud-based email 
providers.
Table 19.3 Email Threats and Mitigations
result that the same trust relationships used to certify IP addresses are used to 
certify servers operating on those addresses.
 
■Sender Policy Framework (SPF): Uses the Domain Name System (DNS) to 
allow domain owners to create records that associate the domain name with a 
specific IP address range of authorized message senders. It is a simple matter 
for receivers to check the SPF TXT record in the DNS to confirm that the pur-
ported sender of a message is permitted to use that source address and reject 
mail that does not come from an authorized IP address.
 
■DomainKeys Identified Mail (DKIM): Enables an MTA to sign selected 
 headers and the body of a message. This validates the source domain of the 
mail and provides message body integrity.
 
■Domain-based Message Authentication, Reporting, and Conformance 
(DMARC): Lets senders know the proportionate effectiveness of their SPF 
and DKIM policies, and signals to receivers what action should be taken in 
various individual and bulk attack scenarios.

19.4 / S/MIME 627
Figure 19.4 shows how these components interact to provide message authen-
ticity and integrity. Not shown, for simplicity, is that S/MIME also provides message 
confidentiality by encrypting messages.
 19.4 S/MIME
Secure/Multipurpose Internet Mail Extension (S/MIME) is a security enhancement 
to the MIME Internet email format standard based on technology from RSA Data 
Security. S/MIME is a complex capability that is defined in a number of documents. 
The most important documents relevant to S/MIME include the following:
 
■RFC 5750, S/MIME Version 3.2 Certificate Handling: Specifies conventions 
for X.509 certificate usage by (S/MIME) v3.2.
Figure 19.4  The Interrelationship of DNSSEC, SPF, DKIM, DMARC, DANE, and  
S/MIME for Assuring Message Authenticity and Integrity
msg
msg
sig
msg
sig
msg
sig
Sender
MUA
Sender’s S/MIME
signing key
(private key)
DKIM
signature
DKIM TXT RR provides
sending MTA’s public key
to receiving MTA
DMARC TXT tells receiving
MTA that sender uses
DKIM and SPF
DANE TLSA RR
specifies SMTP
TLS certificate
Receiver MUA
verifies S/MIME
signature
DNSSEC secured
DNSSEC secured
MTA’s DKIM
signing key
DANE = DNS-based Authentication of Named Entities
DKIM = DomainKeys Identified Mail
DMARC = Domain-based Message Authentication, Reporting, and Conformance
DNSSEC = Domain Name System Security Extensions
SPF = Sender Policy Framework
S/MIME = Secure Multi-Purpose Internet Mail Extensions
TLSA RR = Transport Layer Security Authentication Resource Record
SPF TXT specfies
sender’s IP address
Sender
DNS
Receiver
DNS
Receiver
MUA
Sending
MTA
Receiving
MTA

628  CHAPTER 19 / ELECTRONIC MAIL SECURITY
 
■RFC 5751, S/MIME) Version 3.2 Message Specification: The principal defining 
document for S/MIME message creation and processing.
 
■RFC 4134, Examples of S/MIME Messages: Gives examples of message  bodies 
formatted using S/MIME.
 
■RFC 2634, Enhanced Security Services for S/MIME: Describes four optional 
security service extensions for S/MIME.
 
■RFC 5652, Cryptographic Message Syntax (CMS): Describes the Crypto-
graphic Message Syntax (CMS). This syntax is used to digitally sign, digest, 
authenticate, or encrypt arbitrary message content.
 
■RFC 3370, CMS Algorithms: Describes the conventions for using several 
 cryptographic algorithms with the CMS.
 
■RFC 5752, Multiple Signatures in CMS: Describes the use of multiple, parallel 
signatures for a message.
 
■RFC 1847, Security Multiparts for MIME—Multipart/Signed and Multipart/
Encrypted: Defines a framework within which security services may be applied 
to MIME body parts. The use of a digital signature is relevant to S/MIME, as 
explained subsequently.
Operational Description
S/MIME provides for four message-related services: authentication, confidential-
ity, compression, and email compatibility (Table 19.4). This subsection provides 
an overview. We then look in more detail at this capability by examining message 
 formats and message preparation.
AUTHENTICATION Authentication is provided by means of a digital  signature, using 
the general scheme discussed in Chapter 13 and illustrated in Figure 13.1. Most 
commonly RSA with SHA-256 is used. The sequence is as follows:
1. The sender creates a message.
2. SHA-256 is used to generate a 256-bit message digest of the message.
Function
Typical Algorithm
Typical Action
Digital signature
RSA/SHA-256
A hash code of a message is created using SHA-256. 
This message digest is encrypted using SHA-256 
with the sender’s private key and included with 
the message.
Message encryption
AES-128 with CBC
A message is encrypted using AES-128 with CBC 
with a one-time session key generated by the 
sender. The session key is encrypted using RSA 
with the recipient’s public key and included with 
the message.
Compression
unspecified
A message may be compressed for storage or 
transmission.
Email compatibility
Radix-64 conversion
To provide transparency for email applications, an 
encrypted message may be converted to an ASCII 
string using radix-64 conversion.
Table 19.4 Summary of S/MIME Services

19.4 / S/MIME 629
3. The message digest is encrypted with RSA using the sender’s private key, and 
the result is appended to the message. Also appended is identifying information 
for the signer, which will enable the receiver to retrieve the  signer’s public key.
4. The receiver uses RSA with the sender’s public key to decrypt and recover the 
message digest.
5. The receiver generates a new message digest for the message and compares 
it with the decrypted hash code. If the two match, the message is accepted as 
authentic.
The combination of SHA-256 and RSA provides an effective digital signature 
scheme. Because of the strength of RSA, the recipient is assured that only the pos-
sessor of the matching private key can generate the signature. Because of the strength 
of SHA-256, the recipient is assured that no one else could generate a new message 
that matches the hash code and, hence, the signature of the original message.
Although signatures normally are found attached to the message or file that 
they sign, this is not always the case: Detached signatures are supported. A  detached 
signature may be stored and transmitted separately from the message it signs. This 
is useful in several contexts. A user may wish to maintain a separate signature log 
of all messages sent or received. A detached signature of an executable program 
can detect subsequent virus infection. Finally, detached signatures can be used 
when more than one party must sign a document, such as a legal contract. Each 
person’s signature is independent and therefore is applied only to the document. 
Otherwise, signatures would have to be nested, with the second signer signing both 
the  document and the first signature, and so on.
CONFIDENTIALITY S/MIME provides confidentiality by encrypting messages. Most 
commonly AES with a 128-bit key is used, with the cipher block chaining (CBC) 
mode. The key itself is also encrypted, typically with RSA, as explained below.
As always, one must address the problem of key distribution. In S/MIME, 
each symmetric key, referred to as a content-encryption key, is used only once. That 
is, a new key is generated as a random number for each message. Because it is to be 
used only once, the content-encryption key is bound to the message and transmit-
ted with it. To protect the key, it is encrypted with the receiver’s public key. The 
sequence can be described as follows:
1. The sender generates a message and a random 128-bit number to be used as a 
content-encryption key for this message only.
2. The message is encrypted using the content-encryption key.
3. The content-encryption key is encrypted with RSA using the recipient’s public 
key and is attached to the message.
4. The receiver uses RSA with its private key to decrypt and recover the 
 content-encryption key.
5. The content-encryption key is used to decrypt the message.
Several observations may be made. First, to reduce encryption time, the com-
bination of symmetric and public-key encryption is used in preference to simply 
using public-key encryption to encrypt the message directly: Symmetric algorithms 

630  CHAPTER 19 / ELECTRONIC MAIL SECURITY
are substantially faster than asymmetric ones for a large block of content. Second, 
the use of the public-key algorithm solves the session-key distribution problem, 
because only the recipient is able to recover the session key that is bound to the 
message. Note that we do not need a session-key exchange protocol of the type 
discussed in Chapter 14,  because we are not beginning an ongoing session. Rather, 
each message is a one-time independent event with its own key. Furthermore, given 
the store-and-forward nature of electronic mail, the use of handshaking to assure 
that both sides have the same session key is not practical. Finally, the use of one-
time symmetric keys strengthens what is already a strong symmetric encryption 
 approach. Only a small amount of plaintext is encrypted with each key, and there is 
no relationship among the keys. Thus, to the extent that the public-key algorithm is 
secure, the entire scheme is secure.
CONFIDENTIALITY AND AUTHENTICATION As Figure 19.5 illustrates, both confi-
dentiality and encryption may be used for the same message. The figure shows a 
 sequence in which a signature is generated for the plaintext message and appended 
to the message. Then the plaintext message and signature are encrypted as a single 
block using symmetric encryption and the symmetric encryption key is encrypted 
using public-key encryption.
S/MIME allows the signing and message encryption operations to be per-
formed in either order. If signing is done first, the identity of the signer is hidden 
by the encryption. Plus, it is generally more convenient to store a signature with a 
plaintext version of a message. Furthermore, for purposes of third-party verifica-
tion, if the signature is performed first, a third party need not be concerned with the 
symmetric key when verifying the signature.
If encryption is done first, it is possible to verify a signature without exposing 
the message content. This can be useful in a context in which automatic signature 
verification is desired, as no private key material is required to verify a signature. 
However, in this case the recipient cannot determine any relationship between the 
signer and the unencrypted content of the message.
EMAIL COMPATIBILITY When S/MIME is used, at least part of the block to be trans-
mitted is encrypted. If only the signature service is used, then the message digest is 
encrypted (with the sender’s private key). If the confidentiality service is used, the 
message plus signature (if present) are encrypted (with a one-time symmetric key). 
Thus, part or all of the resulting block consists of a stream of arbitrary 8-bit octets. 
However, many electronic mail systems only permit the use of blocks consisting 
of ASCII text. To accommodate this restriction, S/MIME provides the service of 
converting the raw 8-bit binary stream to a stream of printable ASCII characters, 
a process referred to as 7-bit encoding.
The scheme typically used for this purpose is Base64 conversion. Each group 
of three octets of binary data is mapped into four ASCII characters. See Appendix 
X for a description.
One noteworthy aspect of the Base64 algorithm is that it blindly converts the 
input stream to Base64 format regardless of content, even if the input happens to 
be ASCII text. Thus, if a message is signed but not encrypted and the conversion 
is  applied to the entire block, the output will be unreadable to the casual observer, 
which provides a certain level of confidentiality.

19.4 / S/MIME 631
RFC 5751 also recommends that even if outer 7-bit encoding is not used, the 
original MIME content should be 7-bit encoded. The reason for this is that it allows 
the MIME entity to be handled in any environment without changing it. For exam-
ple, a trusted gateway might remove the encryption, but not the signature, of a mes-
sage, and then forward the signed message on to the end recipient so that they can 
verify the signatures directly. If the transport internal to the site is not 8-bit clean, 
such as on a wide area network with a single mail gateway, verifying the signature 
will not be possible unless the original MIME entity was only 7-bit data.
COMPRESSION S/MIME also offers the ability to compress a message. This has the 
benefit of saving space both for email transmission and for file storage. Compression 
Figure 19.5 Simplified S/MIME Functional Flow
Sign
(e.g., RSA/
SHA-256)
Sender’s
private key
(a) Sender signs, then encrypts message
(b) Receiver decrypts message, then verifies sender’s signature
One-time
secret key
Encrypt
(e.g,
AES-128/
CBC 
Encrypt
(e.g., RSA)
msg
msg
sig
sig
sig
msg
sig
Receiver’s
public key
Sender’s
public key
Decrypt
(e.g., RSA)
Receiver’s
private key
Secret key
generated by
sender
Decrypt
(e.g,
AES-128/
CBC
Verify
signature
(e.g., RSA/
SHA-256)
msg
msg

632  CHAPTER 19 / ELECTRONIC MAIL SECURITY
can be applied in any order with respect to the signing and message encryption 
 operations. RFC 5751 provides the following guidelines:
 
■Compression of binary encoded encrypted data is discouraged, since it will not 
yield significant compression. Base64 encrypted data could very well benefit, 
however.
 
■If a lossy compression algorithm is used with signing, you will need to  compress 
first, then sign.
S/MIME Message Content Types
S/MIME uses the following message content types, which are defined in RFC 5652, 
Cryptographic Message Syntax:
 
■Data: Refers to the inner MIME-encoded message content, which may then 
be encapsulated in a SignedData, EnvelopedData, or CompressedData con-
tent type.
 
■SignedData: Used to apply a digital signature to a message.
 
■EnvelopedData: This consists of encrypted content of any type and encrypted-
content encryption keys for one or more recipients.
 
■CompressedData: Used to apply data compression to a message.
The Data content type is also used for a procedure known as clear signing. 
For clear signing, a digital signature is calculated for a MIME-encoded message and 
the two parts, the message and signature, form a multipart MIME message. Unlike 
SignedData, which involves encapsulating the message and signature in a special 
format, clear-signed messages can be read and their signatures verified by email 
entities that do not implement S/MIME.
Approved Cryptographic Algorithms
Table 19.5 summarizes the cryptographic algorithms used in S/MIME. S/MIME 
uses the following terminology taken from RFC 2119 (Key Words for use in RFCs to 
Indicate Requirement Levels, March 1997) to specify the requirement level:
 
■MUST: The definition is an absolute requirement of the specification. An 
 implementation must include this feature or function to be in conformance 
with the specification.
 
■SHOULD: There may exist valid reasons in particular circumstances to ignore 
this feature or function, but it is recommended that an implementation include 
the feature or function.
The S/MIME specification includes a discussion of the procedure for deciding 
which content encryption algorithm to use. In essence, a sending agent has two deci-
sions to make. First, the sending agent must determine if the receiving agent is  capable 
of decrypting using a given encryption algorithm. Second, if the receiving agent is only 
capable of accepting weakly encrypted content, the sending agent must decide if it is 
acceptable to send using weak encryption. To support this decision process, a sending 
agent may announce its decrypting capabilities in order of preference for any message 
that it sends out. A receiving agent may store that information for future use.

19.4 / S/MIME 633
The following rules, in the following order, should be followed by a sending agent.
1. If the sending agent has a list of preferred decrypting capabilities from an 
 intended recipient, it SHOULD choose the first (highest preference) capabil-
ity on the list that it is capable of using.
2. If the sending agent has no such list of capabilities from an intended recipient 
but has received one or more messages from the recipient, then the outgoing 
message SHOULD use the same encryption algorithm as was used on the last 
signed and encrypted message received from that intended recipient.
3. If the sending agent has no knowledge about the decryption capabilities of the 
intended recipient and is willing to risk that the recipient may not be able to 
decrypt the message, then the sending agent SHOULD use triple DES.
4. If the sending agent has no knowledge about the decryption capabilities of the 
intended recipient and is not willing to risk that the recipient may not be able 
to decrypt the message, then the sending agent MUST use RC2/40.
If a message is to be sent to multiple recipients and a common encryption 
 algorithm cannot be selected for all, then the sending agent will need to send two 
messages. However, in that case, it is important to note that the security of the 
 message is made vulnerable by the transmission of one copy with lower security.
S/MIME Messages
S/MIME makes use of a number of new MIME content types. All of the new applica-
tion types use the designation PKCS. This refers to a set of public-key cryptography 
specifications issued by RSA Laboratories and made available for the S/MIME effort.
Function
Requirement
Create a message digest to be used in 
forming a digital signature.
MUST support SHA-256
SHOULD support SHA-1
Receiver SHOULD support MD5 for backward compatibility
Use message digest to form a digital 
signature.
MUST support RSA with SHA-256
SHOULD support
—DSA with SHA-256
—RSASSA-PSS with SHA-256
—RSA with SHA-1
—DSA with SHA-1
—RSA with MD5
Encrypt session key for transmission with 
a message.
MUST support RSA encryption
SHOULD support
—RSAES-OAEP
—Diffie–Hellman ephemeral-static mode
Encrypt message for transmission with a 
one-time session key.
MUST support AES-128 with CBC
SHOULD support
—AES-192 CBC and AES-256 CBC
—Triple DES CBC
Table 19.5 Cryptographic Algorithms Used in S/MIME

634  CHAPTER 19 / ELECTRONIC MAIL SECURITY
We examine each of these in turn after first looking at the general procedures 
for S/MIME message preparation.
SECURING A MIME ENTITY S/MIME secures a MIME entity with a signature, 
 encryption, or both. A MIME entity may be an entire message (except for the RFC 
5322 headers), or if the MIME content type is multipart, then a MIME entity is one 
or more of the subparts of the message. The MIME entity is prepared according 
to the normal rules for MIME message preparation. Then the MIME entity plus 
some security-related data, such as algorithm identifiers and certificates, are pro-
cessed by S/MIME to produce what is known as a PKCS object. A PKCS object is 
then treated as message content and wrapped in MIME (provided with appropriate 
MIME headers). This process should become clear as we look at specific objects 
and provide examples.
In all cases, the message to be sent is converted to canonical form. In par-
ticular, for a given type and subtype, the appropriate canonical form is used for the 
message content. For a multipart message, the appropriate canonical form is used 
for each subpart.
The use of transfer encoding requires special attention. For most cases, the 
result of applying the security algorithm will be to produce an object that is partially 
or totally represented in arbitrary binary data. This will then be wrapped in an outer 
MIME message and transfer encoding can be applied at that point, typically base64. 
However, in the case of a multipart signed message (described in more detail later), 
the message content in one of the subparts is unchanged by the security process. 
Unless that content is 7 bit, it should be transfer encoded using base64 or quoted-
printable so that there is no danger of altering the content to which the signature 
was applied.
We now look at each of the S/MIME content types.
ENVELOPEDDATA An application/pkcs7-mime subtype is used for one of four cat-
egories of S/MIME processing, each with a unique smime-type parameter. In all 
cases, the resulting entity, (referred to as an object) is represented in a form known 
as Basic Encoding Rules (BER), which is defined in ITU-T Recommendation 
X.209. The BER format consists of arbitrary octet strings and is therefore binary 
data. Such an object should be transfer encoded with base64 in the outer MIME 
message. We first look at envelopedData.
The steps for preparing an envelopedData MIME entity are:
1. Generate a pseudorandom session key for a particular symmetric encryption 
algorithm (RC2/40 or triple DES).
2. For each recipient, encrypt the session key with the recipient’s public RSA key.
3. For each recipient, prepare a block known as RecipientInfo that contains 
an identifier of the recipient’s public-key certificate,1 an identifier of the 
 algorithm used to encrypt the session key, and the encrypted session key.
4. Encrypt the message content with the session key.
1This is an X.509 certificate, discussed later in this section.

19.4 / S/MIME 635
The RecipientInfo blocks followed by the encrypted content constitute the 
envelopedData. This information is then encoded into base64. A sample message 
(excluding the RFC 5322 headers) is given below.
Content-Type: application/pkcs7-mime; smime-type=enveloped-
data; name=smime.p7m
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=smime.p7m
rfvbnj756tbBghyHhHUujhJhjH77n8HHGT9HG4VQpfyF467GhIGfHfYT6
7n8HHGghyHhHUujhJh4VQpfyF467GhIGfHfYGTrfvbnjT6jH7756tbB9H
f8HHGTrfvhJhjH776tbB9HG4VQbnj7567GhIGfHfYT6ghyHhHUujpfyF4
0GhIGfHfQbnj756YT64V
To recover the encrypted message, the recipient first strips off the base64 
 encoding. Then the recipient’s private key is used to recover the session key. Finally, 
the message content is decrypted with the session key.
SIGNEDDATA The signedData smime-type can be used with one or more signers. 
For clarity, we confine our description to the case of a single digital signature. The 
steps for preparing a signedData MIME entity are as follows.
1. Select a message digest algorithm (SHA or MD5).
2. Compute the message digest (hash function) of the content to be signed.
3. Encrypt the message digest with the signer’s private key.
4. Prepare a block known as SignerInfo that contains the signer’s public-key 
certificate, an identifier of the message digest algorithm, an identifier of the 
 algorithm used to encrypt the message digest, and the encrypted message 
digest.
The signedData entity consists of a series of blocks, including a message 
digest algorithm identifier, the message being signed, and SignerInfo. The 
signedData entity may also include a set of public-key certificates sufficient to 
constitute a chain from a recognized root or top-level certification authority to the 
signer. This information is then encoded into base64. A sample message (excluding 
the RFC 5322 headers) is the following.
Content-Type: application/pkcs7-mime; smime-type=signed-
data; name=smime.p7m
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=smime.p7m
567GhIGfHfYT6ghyHhHUujpfyF4f8HHGTrfvhJhjH776tbB9HG4VQbnj7
77n8HHGT9HG4VQpfyF467GhIGfHfYT6rfvbnj756tbBghyHhHUujhJhjH
HUujhJh4VQpfyF467GhIGfHfYGTrfvbnjT6jH7756tbB9H7n8HHGghyHh
6YT64V0GhIGfHfQbnj75

636  CHAPTER 19 / ELECTRONIC MAIL SECURITY
To recover the signed message and verify the signature, the recipient first strips 
off the base64 encoding. Then the signer’s public key is used to decrypt the message 
digest. The recipient independently computes the message digest and  compares it to 
the decrypted message digest to verify the signature.
CLEAR SIGNING Clear signing is achieved using the multipart content type with 
a signed subtype. As was mentioned, this signing process does not involve trans-
forming the message to be signed, so that the message is sent “in the clear.” Thus, 
recipients with MIME capability but not S/MIME capability are able to read the 
 incoming message.
A multipart/signed message has two parts. The first part can be any MIME 
type but must be prepared so that it will not be altered during transfer from source 
to destination. This means that if the first part is not 7 bit, then it needs to be  encoded 
using base64 or quoted-printable. Then this part is processed in the same manner 
as signedData, but in this case an object with signedData format is created that 
has an empty message content field. This object is a detached signature. It is then 
transfer encoded using base64 to become the second part of the multipart/signed 
message. This second part has a MIME content type of application and a subtype of 
pkcs7-signature. Here is a sample message:
Content-Type: multipart/signed;
protocol=”application/pkcs7-signature”;
micalg=sha1; boundary=boundary42
—boundary42
Content-Type: text/plain
This is a clear-signed message.
—boundary42
Content-Type: application/pkcs7-signature; name=smime.p7s
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=smime.p7s
ghyHhHUujhJhjH77n8HHGTrfvbnj756tbB9HG4VQpfyF467GhIGfHfYT6
4VQpfyF467GhIGfHfYT6jH77n8HHGghyHhHUujhJh756tbB9HGTrfvbnj
n8HHGTrfvhJhjH776tbB9HG4VQbnj7567GhIGfHfYT6ghyHhHUujpfyF4
7GhIGfHfYT64VQbnj756
—boundary42—
The protocol parameter indicates that this is a two-part clear-signed entity. 
The micalg parameter indicates the type of message digest used. The receiver can 
verify the signature by taking the message digest of the first part and comparing this 
to the message digest recovered from the signature in the second part.
REGISTRATION REQUEST Typically, an application or user will apply to a certi-
fication authority for a public-key certificate. The application/pkcs10 S/MIME 

19.4 / S/MIME 637
 entity is used to transfer a certification request. The certification  request 
 includes  certificationRequestInfo block, followed by an  identifier 
of the public-key  encryption algorithm, followed by the signature of the 
 certificationRequestInfo block, made using the sender’s private key. The 
certificationRequestInfo block includes a name of the certificate subject 
(the entity whose public key is to be certified) and a bit-string representation of the 
user’s public key.
CERTIFICATES-ONLY MESSAGE A message containing only certificates or a certificate 
revocation list (CRL) can be sent in response to a registration request. The message 
is an application/pkcs7-mime type/subtype with an smime-type parameter of degen-
erate. The steps involved are the same as those for creating a signedData  message, 
except that there is no message content and the signerInfo field is empty.
S/MIME Certificate Processing
S/MIME uses public-key certificates that conform to version 3 of X.509 (see 
Chapter 14). S/MIME managers and/or users must configure each client with a list of 
trusted keys and with certificate revocation lists. That is, the responsibility is local for 
maintaining the certificates needed to verify incoming signatures and to encrypt outgo-
ing messages. On the other hand, the certificates are signed by certification authorities.
USER AGENT ROLE An S/MIME user has several key management functions to 
perform.
 
■Key generation: The user of some related administrative utility (e.g., one 
 associated with LAN management) MUST be capable of generating separate 
Diffie–Hellman and DSS key pairs and SHOULD be capable of generating 
RSA key pairs. Each key pair MUST be generated from a good source of 
nondeterministic random input and be protected in a secure fashion. A user 
agent SHOULD generate RSA key pairs with a length in the range of 768 to 
1024 bits and MUST NOT generate a length of less than 512 bits.
 
■Registration: A user’s public key must be registered with a certification 
 authority in order to receive an X.509 public-key certificate.
 
■Certificate storage and retrieval: A user requires access to a local list of certifi-
cates in order to verify incoming signatures and to encrypt outgoing messages. 
Such a list could be maintained by the user or by some local administrative 
entity on behalf of a number of users.
Enhanced Security Services
RFC 2634 defines four enhanced security services for S/MIME:
 
■Signed receipts: A signed receipt may be requested in a SignedData  object. 
Returning a signed receipt provides proof of delivery to the originator of a 
message and allows the originator to demonstrate to a third party that the 
 recipient received the message. In essence, the recipient signs the entire 
 original message plus the original (sender’s) signature and appends the new 
signature to form a new S/MIME message.

638  CHAPTER 19 / ELECTRONIC MAIL SECURITY
 
■Security labels: A security label may be included in the authenticated  attributes 
of a SignedData object. A security label is a set of security information 
 regarding the sensitivity of the content that is protected by S/MIME encapsu-
lation. The labels may be used for access control, by indicating which users are 
permitted access to an object. Other uses include priority (secret, confidential, 
restricted, and so on) or role based, describing which kind of people can see 
the information (e.g., patient’s health-care team, medical billing agents).
 
■Secure mailing lists: When a user sends a message to multiple recipients, a 
certain amount of per-recipient processing is required, including the use of 
each recipient’s public key. The user can be relieved of this work by employ-
ing the services of an S/MIME Mail List Agent (MLA). An MLA can take a 
single incoming message, perform the recipient-specific encryption for each 
recipient, and forward the message. The originator of a message need only 
send the message to the MLA with encryption performed using the MLA’s 
public key.
 
■Signing certificates: This service is used to securely bind a sender’s certificate 
to their signature through a signing certificate attribute.
 19.5 PRETTY GOOD PRIVACY
An alternative email security protocol is Pretty Good Privacy (PGP), which has 
 essentially the same functionality as S/MIME. PGP was created by Phil Zimmerman 
and implemented as a product first released in 1991. It was made available free of 
charge and became quite popular for personal use. The initial PGP protocol was 
proprietary and used some encryption algorithms with intellectual property restric-
tions. In 1996, version 5.x of PGP was defined in IETF RFC 1991, PGP Message 
Exchange Formats. Subsequently, OpenPGP was developed as a new standard 
protocol based on PGP version 5.x. OpenPGP is defined in RFC 4880 (OpenPGP 
Message Format, November 2007) and RFC 3156 (MIME Security with OpenPGP, 
August 2001).
There are two significant differences between S/MIME and OpenPGP:
 
■Key Certification: S/MIME uses X.509 certificates that are issued by Certificate 
Authorities (or local agencies that have been delegated authority by a CA to 
issue certificates). In OpenPGP, users generate their own OpenPGP public 
and private keys and then solicit signatures for their public keys from individu-
als or organizations to which they are known. Whereas X.509 certificates are 
trusted if there is a valid PKIX chain to a trusted root, an OpenPGP public key 
is trusted if it is signed by another OpenPGP public key that is trusted by the 
recipient. This is called the Web-of-Trust.
 
■Key Distribution: OpenPGP does not include the sender’s public key with 
each message, so it is necessary for recipients of OpenPGP messages to sepa-
rately obtain the sender’s public key in order to verify the message. Many 
 organizations post OpenPGP keys on TLS-protected websites: People who 
wish to verify digital signatures or send these organizations encrypted mail 

19.6 / DNSSEC 639
need to manually download these keys and add them to their OpenPGP 
 clients. Keys may also be registered with the OpenPGP public key servers, 
which are servers that maintain a database of PGP public keys organized by 
email  address. Anyone may post a public key to the OpenPGP key servers, 
and that public key may contain any email address. There is no vetting of 
OpenPGP keys, so users must use the Web-of-Trust to decide whether to trust 
a given public key.
NIST 800-177 recommends the use of S/MIME rather than PGP because of 
the greater confidence in the CA system of verifying public keys.
Appendix P provides an overview of PGP.
 19.6 DNSSEC
DNS Security Extensions (DNSSEC) are used by several protocols that provide 
email security. This section provides a brief overview of the Domain Name System 
(DNS) and then looks at DNSSEC.
Domain Name System
DNS is a directory lookup service that provides a mapping between the name of a 
host on the Internet and its numeric IP address. DNS is essential to the functioning 
of the Internet. The DNS is used by MUAs and MTAs to find the address of the 
next hop server for mail delivery. Sending MTAs query DNS for the Mail Exchange 
Resource Record (MX RR) of the recipient’s domain (the right hand side of the 
“@” symbol) in order to find the receiving MTA to contact.
Four elements comprise the DNS:
 
■Domain name space: DNS uses a tree-structured name space to identify 
 resources on the Internet.
 
■DNS database: Conceptually, each node and leaf in the name space tree struc-
ture names a set of information (e.g., IP address, name server for this domain 
name) that is contained in resource record. The collection of all RRs is orga-
nized into a distributed database.
 
■Name servers: These are server programs that hold information about a por-
tion of the domain name tree structure and the associated RRs.
 
■Resolvers: These are programs that extract information from name servers in 
response to client requests. A typical client request is for an IP address corre-
sponding to a given domain name.
THE DNS DATABASE DNS is based on a hierarchical database containing resource 
records (RRs) that include the name, IP address, and other information about hosts. 
The key features of the database are as follows:
 
■Variable-depth hierarchy for names: DNS allows essentially unlimited levels 
and uses the period (.) as the level delimiter in printed names, as described 
earlier.

---

## Module 5 Textbook

648  CHAPTER 19 / ELECTRONIC MAIL SECURITY
which may result in blocking the transmission of the email content. Alternatively, 
the entire message can be absorbed and buffered until all the checks are finished. 
In either case, checks must be completed before the mail message is sent to the end 
user’s inbox.
The checking involves the following rules:
1. If no SPF TXT RR is returned, the default behavior is to accept the message.
2. If the SPF TXT RR has formatting errors, the default behavior is to accept the 
message.
3. Otherwise the mechanisms and modifiers in the RR are used to determine 
disposition of the email message.
Figure 19.9 illustrates SPF operation.
 19.9 DOMAINKEYS IDENTIFIED MAIL
DomainKeys Identified Mail (DKIM) is a specification for cryptographically 
signing email messages, permitting a signing domain to claim responsibility for a 
message in the mail stream. Message recipients (or agents acting in their  behalf) 
can verify the signature by querying the signer’s domain directly to  retrieve the 
appropriate public key and thereby can confirm that the message was attested to 
by a party in possession of the private key for the signing domain. DKIM is an 
Internet Standard (RFC 6376: DomainKeys Identified Mail (DKIM) Signatures). 
DKIM has been widely adopted by a range of email providers, including 
 corporations, government agencies, gmail, Yahoo!, and many Internet Service 
Providers (ISPs).
Figure 19.9 Sender Policy Framework Operation
Sender
Inbound
mail server
SPF record
lookup
Authorization
pass/fail
Further
policy
checks
Inbox
Junk email
Quarantine
Block/delete
DNS
Internet
MODULE 5

19.9 / DOMAINKEYS IDENTIFIED MAIL 649
Email Threats
RFC 4686 (Analysis of Threats Motivating DomainKeys Identified Mail) describes 
the threats being addressed by DKIM in terms of the characteristics, capabilities, 
and location of potential attackers.
CHARACTERISTICS RFC 4686 characterizes the range of attackers on a spectrum of 
three levels of threat.
1. At the low end are attackers who simply want to send email that a  recipient 
does not want to receive. The attacker can use one of a number of  commercially 
available tools that allow the sender to falsify the origin address of messages. 
This makes it difficult for the receiver to filter spam on the basis of originating 
address or domain.
2. At the next level are professional senders of bulk spam mail. These attackers 
often operate as commercial enterprises and send messages on behalf of third 
parties. They employ more comprehensive tools for attack, including Mail 
Transfer Agents (MTAs) and registered domains and networks of compro-
mised computers (zombies), to send messages and (in some cases) to harvest 
addresses to which to send.
3. The most sophisticated and financially motivated senders of messages are 
those who stand to receive substantial financial benefit, such as from an email-
based fraud scheme. These attackers can be expected to employ all of the 
above mechanisms and additionally may attack the Internet infrastructure 
 itself, including DNS cache-poisoning attacks and IP routing attacks.
CAPABILITIES RFC 4686 lists the following as capabilities that an attacker might 
have.
1. Submit messages to MTAs and Message Submission Agents (MSAs) at 
 multiple locations in the Internet.
2. Construct arbitrary Message Header fields, including those claiming to be 
mailing lists, resenders, and other mail agents.
3. Sign messages on behalf of domains under their control.
4. Generate substantial numbers of either unsigned or apparently signed 
 messages that might be used to attempt a denial-of-service attack.
5. Resend messages that may have been previously signed by the domain.
6. Transmit messages using any envelope information desired.
7. Act as an authorized submitter for messages from a compromised computer.
8. Manipulation of IP routing. This could be used to submit messages from 
 specific IP addresses or difficult-to-trace addresses, or to cause diversion of 
messages to a specific domain.
9. Limited influence over portions of DNS using mechanisms such as cache 
 poisoning. This might be used to influence message routing or to falsify adver-
tisements of DNS-based keys or signing practices.

650  CHAPTER 19 / ELECTRONIC MAIL SECURITY
10. Access to significant computing resources, for example, through the conscrip-
tion of worm-infected “zombie” computers. This could allow the “bad actor” to 
perform various types of brute-force attacks.
11. Ability to eavesdrop on existing traffic, perhaps from a wireless network.
LOCATION DKIM focuses primarily on attackers located outside of the administra-
tive units of the claimed originator and the recipient. These administrative units 
frequently correspond to the protected portions of the network adjacent to the orig-
inator and recipient. It is in this area that the trust relationships required for authen-
ticated message submission do not exist and do not scale adequately to be practical. 
Conversely, within these administrative units, there are other mechanisms (such as 
authenticated message submission) that are easier to deploy and more likely to be 
used than DKIM. External bad actors are usually attempting to exploit the “any-to-
any” nature of email that motivates most recipient MTAs to accept messages from 
anywhere for delivery to their local domain. They may generate messages without 
signatures, with incorrect signatures, or with correct signatures from domains with 
little traceability. They may also pose as mailing lists, greeting cards, or other agents 
that legitimately send or resend messages on behalf of others.
DKIM Strategy
DKIM is designed to provide an email authentication technique that is transparent 
to the end user. In essence, a user’s email message is signed by a private key of the 
administrative domain from which the email originates. The signature covers all of 
the content of the message and some of the RFC 5322 message headers. At the 
 receiving end, the MDA can access the corresponding public key via a DNS and 
verify the signature, thus authenticating that the message comes from the claimed 
administrative domain. Thus, mail that originates from somewhere else but claims 
to come from a given domain will not pass the authentication test and can be 
 rejected. This approach differs from that of S/MIME and PGP, which use the origi-
nator’s private key to sign the content of the message. The motivation for DKIM is 
based on the following reasoning:2
1. S/MIME depends on both the sending and receiving users employing S/MIME. 
For almost all users, the bulk of incoming mail does not use S/MIME, and the 
bulk of the mail the user wants to send is to recipients not using S/MIME.
2. S/MIME signs only the message content. Thus, RFC 5322 header information 
concerning origin can be compromised.
3. DKIM is not implemented in client programs (MUAs) and is therefore trans-
parent to the user; the user need not take any action.
4. DKIM applies to all mail from cooperating domains.
5. DKIM allows good senders to prove that they did send a particular message 
and to prevent forgers from masquerading as good senders.
2 The reasoning is expressed in terms of the use of S/MIME. The same argument applies to PGP.

19.9 / DOMAINKEYS IDENTIFIED MAIL 651
Figure 19.10 Simple Example of DKIM Deployment
Mail origination
network
Mail delivery
network
DNS Public key query/response
DNS = Domain Name System
MDA = Mail Delivery Agent
MSA = Mail Submission Agent
MTA = Message Transfer Agent
MUA = Message User Agent
SMTP
MUA
MUA
SMTP
SMTP
Signer
Verifier
SMTP
POP, IMAP
MTA
MSA
MTA
MDA
DNS
Figure 19.10 is a simple example of the operation of DKIM. We begin with a 
message generated by a user and transmitted into the MHS to an MSA that is within 
the user’s administrative domain. An email message is generated by an email client 
program. The content of the message, plus selected RFC 5322 headers, is signed by 
the email provider using the provider’s private key. The signer is associated with a 
domain, which could be a corporate local network, an ISP, or a public email facility 
such as gmail. The signed message then passes through the Internet via a sequence 
of MTAs. At the destination, the MDA retrieves the public key for the incoming 
signature and verifies the signature before passing the message on to the destination 
email client. The default signing algorithm is RSA with SHA-256. RSA with SHA-1 
also may be used.
DKIM Functional Flow
Figure 19.11 provides a more detailed look at the elements of DKIM operation. 
Basic message processing is divided between a signing Administrative Management 
Domain (ADMD) and a verifying ADMD. At its simplest, this is between the origi-
nating ADMD and the delivering ADMD, but it can involve other ADMDs in the 
handling path.
Signing is performed by an authorized module within the signing ADMD 
and uses private information from a Key Store. Within the originating ADMD, 

652  CHAPTER 19 / ELECTRONIC MAIL SECURITY
this might be performed by the MUA, MSA, or an MTA. Verifying is  performed 
by an authorized module within the verifying ADMD. Within a delivering 
ADMD, verifying might be performed by an MTA, MDA or MUA. The mod-
ule verifies the signature or determines whether a particular signature was 
 required. Verifying the signature uses public information from the Key Store. 
If the signature passes, reputation information is used to assess the signer and 
that information is passed to the message filtering system. If the signature fails 
or there is no signature using the author’s domain, information about signing 
practices related to the author can be retrieved remotely and/or locally, and that 
information is passed to the message filtering system. For example, if the sender 
(e.g., gmail) uses DKIM but no DKIM signature is present, then the message 
may be  considered fraudulent.
Figure 19.11 DKIM Functional Flow
Originating or relaying ADMD:
Sign message with SDID
RFC 5322 message
yes
pass
fail
no
Relaying or delivering ADMD:
Message signed?
Verify
signature
Private
key
store
(paired)
Public
key
store
Remote
sender
practices
Local info
on sender
practices
Reputation/
accreditation
information
Assessments
Message
filtering
engine
Check
signing
practices
Internet

19.9 / DOMAINKEYS IDENTIFIED MAIL 653
The signature is inserted into the RFC 5322 message as an additional header 
entry, starting with the keyword Dkim-Signature. You can view examples from your 
own incoming mail by using the View Long Headers (or similar wording) option for 
an incoming message. Here is an example:
Dkim-Signature: 
v=1; a=rsa-sha256; c=relaxed/relaxed;  
 
 
d=gmail.com; s=gamma; h=domainkey- 
 
 
signature:mime-version:received:date: 
 
 
message-id:subject :from:to:content-type: 
 
 
content-transfer-encoding; 
 
 
bh=5mZvQDyCRuyLb1Y28K4zgS2MPOemFToDBgvbJ 
 
 
7GO90s=; 
 
 
 b=PcUvPSDygb4ya5Dyj1rbZGp/VyRiScuaz7TTG 
J5qW5slM+klzv6kcfYdGDHzEVJW+Z 
 
 
FetuPfF1ETOVhELtwH0zjSccOyPkEiblOf6gILO
 
 
bm3DDRm3Ys1/FVrbhVOlA+/jH9Aei 
 
 
uIIw/5iFnRbSH6qPDVv/beDQqAWQfA/wF7O5k=
Before a message is signed, a process known as canonicalization is performed 
on both the header and body of the RFC 5322 message. Canonicalization is necessary 
to deal with the possibility of minor changes in the message made en route, includ-
ing character encoding, treatment of trailing white space in message lines, and the 
“folding” and “unfolding” of header lines. The intent of canonicalization is to make a 
minimal transformation of the message (for the purpose of signing; the message itself 
is not changed, so the canonicalization must be performed again by the verifier) that 
will give it its best chance of producing the same canonical value at the receiving end. 
DKIM defines two header canonicalization algorithms (“simple” and “relaxed”) and 
two for the body (with the same names). The simple algorithm tolerates almost no 
modification, while the relaxed algorithm tolerates common modifications.
The signature includes a number of fields. Each field begins with a tag consist-
ing of a tag code followed by an equals sign and ends with a semicolon. The fields 
include the following:
 
■v= DKIM version/
 
■a= Algorithm used to generate the signature; must be either rsa-sha1 or 
rsa-sha256
 
■c= Canonicalization method used on the header and the body.
 
■d= A domain name used as an identifier to refer to the identity of a responsible 
person or organization. In DKIM, this identifier is called the Signing Domain 
IDentifier (SDID). In our example, this field indicates that the sender is using 
a gmail address.
 
■s= In order that different keys may be used in different circumstances for the 
same signing domain (allowing expiration of old keys, separate departmen-
tal signing, or the like), DKIM defines a selector (a name associated with a 
key) that is used by the verifier to retrieve the proper key during signature 
verification.

654  CHAPTER 19 / ELECTRONIC MAIL SECURITY
 
■h= Signed Header fields. A colon-separated list of header field names that 
identify the header fields presented to the signing algorithm. Note that in our 
example above, the signature covers the domainkey-signature field. This refers 
to an older algorithm (since replaced by DKIM) that is still in use.
 
■bh= The hash of the canonicalized body part of the message. This provides 
 additional information for diagnosing signature verification failures.
 
■b= The signature data in base64 format; this is the encrypted hash code.
 19.10  DOMAIN-BASED MESSAGE AUTHENTICATION, 
REPORTING, AND CONFORMANCE
Domain-Based Message Authentication, Reporting, and Conformance (DMARC) 
 allows email senders to specify policy on how their mail should be handled, the 
types of reports that receivers can send back, and the frequency those reports 
should be sent. It is defined in RFC 7489 (Domain-based Message Authentication, 
Reporting, and Conformance, March 2015).
DMARC works with SPF and DKIM. SPF and DKM enable senders to advise 
receivers, via DNS, whether mail purporting to come from the sender is valid, and 
whether it should be delivered, flagged, or discarded. However, neither SPF nor 
DKIM include a mechanism to tell receivers if SPF or DKIM are in use, nor do they 
have feedback mechanism to inform senders of the effectiveness of the anti-spam 
techniques. For example, if a message arrives at a receiver without a DKIM signa-
ture, DKIM provides no mechanism to allow the receiver to learn if the message is 
authentic but was sent from a sender that did not implement DKIM, or if the mes-
sage is a spoof. DMARC addresses these issues essentially by standardizing how 
email receivers perform email authentication using SPF and DKIM mechanisms.
Identifier Alignment
DKIM, SPF, and DMARC authenticate various aspects of an individual mes-
sage. DKIM authenticates the domain that affixed a signature to the message. SPF 
 focuses on the SMTP envelope, defined in RFC 5321. It can authenticate either the 
domain that appears in the MAIL FROM portion of the SMTP envelope or the 
HELO domain, or both. These may be different domains, and they are typically not 
visible to the end user.
DMARC authentication deals with the From domain in the message header, 
as defined in RFC 5322. This field is used as the central identity of the DMARC 
mechanism because it is a required message header field and therefore guaranteed 
to be present in compliant messages, and most MUAs represent the RFC 5322 From 
field as the originator of the message and render some or all of this header field’s 
content to end users. The email address in this field is the one used by end users to 
identify the source of the message and therefore is a prime target for abuse.
DMARC requires that From address match (be aligned with) an Authenticated 
Identifier from DKIM or SPF. In the case of DKIM, the match is made between 
the DKIM signing domain and the From domain. In the case of SPF, the match is 
 between the SPF-authenticated domain and the From domain.

662  CHAPTER 20 / IP SECURITY
There are application-specific security mechanisms for a number of application 
areas, including electronic mail (S/MIME, PGP), client/server (Kerberos), Web ac-
cess (Secure Sockets Layer), and others. However, users have security concerns that 
cut across protocol layers. For example, an enterprise can run a secure, private IP 
network by disallowing links to untrusted sites, encrypting packets that leave the 
premises, and authenticating packets that enter the premises. By implementing se-
curity at the IP level, an organization can ensure secure networking not only for 
applications that have security mechanisms but also for the many security-ignorant 
applications.
IP-level security encompasses three functional areas: authentication, confiden-
tiality, and key management. The authentication mechanism assures that a received 
packet was, in fact, transmitted by the party identified as the source in the packet 
header. In addition, this mechanism assures that the packet has not been altered in 
transit. The confidentiality facility enables communicating nodes to encrypt messages 
to prevent eavesdropping by third parties. The key management facility is concerned 
with the secure exchange of keys.
We begin this chapter with an overview of IP security (IPsec) and an introduc-
tion to the IPsec architecture. We then look at each of the three functional areas in 
detail. Appendix L reviews Internet protocols.
 20.1 IP SECURITY OVERVIEW
In 1994, the Internet Architecture Board (IAB) issued a report titled “Security in 
the Internet Architecture” (RFC 1636). The report identified key areas for security 
mechanisms. Among these were the need to secure the network infrastructure from 
LEARNING OBJECTIVES
After studying this chapter, you should be able to:
 
◆
Present an overview of IP security (IPsec).
 
◆
Explain the difference between transport mode and tunnel mode.
 
◆
Understand the concept of security association.
 
◆
Explain the difference between the security association database and the 
security policy database.
 
◆
Summarize the traffic processing functions performed by IPsec for out-
bound packets and for inbound packets.
 
◆
Present an overview of Encapsulating Security Payload.
 
◆
Discuss the alternatives for combining security associations.
 
◆
Present an overview of Internet Key Exchange.
 
◆
Summarize the alternative cryptographic suites approved for use with IPsec.

20.1 / IP SECURITY OVERVIEW 663
unauthorized monitoring and control of network traffic and the need to secure end-
user-to-end-user traffic using authentication and encryption mechanisms.
To provide security, the IAB included authentication and encryption as nec-
essary security features in the next-generation IP, which has been issued as IPv6. 
Fortunately, these security capabilities were designed to be usable both with the 
current IPv4 and the future IPv6. This means that vendors can begin offering these 
features now, and many vendors now do have some IPsec capability in their prod-
ucts. The IPsec specification now exists as a set of Internet standards.
Applications of IPsec
IPsec provides the capability to secure communications across a LAN, across pri-
vate and public WANs, and across the Internet. Examples of its use include:
 
■Secure branch office connectivity over the Internet: A company can build a 
secure virtual private network over the Internet or over a public WAN. This 
enables a business to rely heavily on the Internet and reduce its need for pri-
vate networks, saving costs and network management overhead.
 
■Secure remote access over the Internet: An end user whose system is equipped 
with IP security protocols can make a local call to an Internet Service Provider 
(ISP) and gain secure access to a company network. This reduces the cost of 
toll charges for traveling employees and telecommuters.
 
■Establishing extranet and intranet connectivity with partners: IPsec can be 
used to secure communication with other organizations, ensuring authentica-
tion and confidentiality and providing a key exchange mechanism.
 
■Enhancing electronic commerce security: Even though some Web and elec-
tronic commerce applications have built-in security protocols, the use of IPsec 
enhances that security. IPsec guarantees that all traffic designated by the net-
work administrator is both encrypted and authenticated, adding an additional 
layer of security to whatever is provided at the application layer.
The principal feature of IPsec that enables it to support these varied applica-
tions is that it can encrypt and/or authenticate all traffic at the IP level. Thus, all dis-
tributed applications (including remote logon, client/server, email, file transfer, Web 
access, and so on) can be secured. Figure 20.1a shows a simplified packet format for 
an IPsec option known as tunnel mode, described subsequently. Tunnel mode makes 
use of an IPsec function, a combined authentication/encryption  function called 
Encapsulating Security Payload (ESP), and a key exchange function. For VPNs, 
both authentication and encryption are generally desired, because it is important 
both to (1) assure that unauthorized users do not penetrate the VPN, and (2) assure 
that eavesdroppers on the Internet cannot read messages sent over the VPN.
Figure 20.1b is a typical scenario of IPsec usage. An organization maintains 
LANs at dispersed locations. Nonsecure IP traffic is conducted on each LAN. For 
traffic offsite, through some sort of private or public WAN, IPsec protocols are used. 
These protocols operate in networking devices, such as a router or firewall, that 
connect each LAN to the outside world. The IPsec networking device will  typically 
encrypt all traffic going into the WAN and decrypt traffic coming from the WAN; 
these operations are transparent to workstations and servers on the LAN. Secure 

664  CHAPTER 20 / IP SECURITY
transmission is also possible with individual users who dial into the WAN. Such user 
workstations must implement the IPsec protocols to provide security.
Benefits of IPsec
Some of the benefits of IPsec:
 
■When IPsec is implemented in a firewall or router, it provides strong security 
that can be applied to all traffic crossing the perimeter. Traffic within a com-
pany or workgroup does not incur the overhead of security-related processing.
Figure 20.1 An IPSec VPN Scenario
Networking device
with IPSec
Ethernet
switch
Unprotected
IP traffic
Legend:
User system
with IPSec
(a) Tunnel-mode format
(b) Example configuration
Public (Internet)
or private
network
authenticated
encrypted
ESP
auth
orig IP
hdr
IP payload
ESP
trlr
ESP
hdr
IP traffic
protected
by IPSec
Virtual tunnel:
protected
by IPSec
New IP
hdr

20.1 / IP SECURITY OVERVIEW 665
 
■IPsec in a firewall is resistant to bypass if all traffic from the outside must use 
IP and the firewall is the only means of entrance from the Internet into the 
organization.
 
■IPsec is below the transport layer (TCP, UDP) and so is transparent to appli-
cations. There is no need to change software on a user or server system when 
IPsec is implemented in the firewall or router. Even if IPsec is implemented in 
end systems, upper-layer software, including applications, is not affected.
 
■IPsec can be transparent to end users. There is no need to train users on secu-
rity mechanisms, issue keying material on a per-user basis, or revoke keying 
material when users leave the organization.
 
■IPsec can provide security for individual users if needed. This is useful for off-
site workers and for setting up a secure virtual subnetwork within an organiza-
tion for sensitive applications.
Routing Applications
In addition to supporting end users and protecting premises systems and networks, 
IPsec can play a vital role in the routing architecture required for internetworking. 
[HUIT98] lists the following examples of the use of IPsec. IPsec can assure that
 
■A router advertisement (a new router advertises its presence) comes from an 
authorized router.
 
■A neighbor advertisement (a router seeks to establish or maintain a neighbor 
relationship with a router in another routing domain) comes from an autho-
rized router.
 
■A redirect message comes from the router to which the initial IP packet was sent.
 
■A routing update is not forged.
Without such security measures, an opponent can disrupt communications 
or divert some traffic. Routing protocols such as Open Shortest Path First (OSPF) 
should be run on top of security associations between routers that are defined by 
IPsec.
IPsec Documents
IPsec encompasses three functional areas: authentication, confidentiality, and key 
management. The totality of the IPsec specification is scattered across dozens of 
RFCs and draft IETF documents, making this the most complex and difficult to 
grasp of all IETF specifications. The best way to grasp the scope of IPsec is to 
consult the latest version of the IPsec document roadmap, which as of this writ-
ing is RFC 6071 [IP Security (IPsec) and Internet Key Exchange (IKE) Document 
Roadmap, February 2011]. The documents can be categorized into the following 
groups.
 
■Architecture: Covers the general concepts, security requirements, definitions, 
and mechanisms defining IPsec technology. The current specification is RFC 
4301, Security Architecture for the Internet Protocol.

666  CHAPTER 20 / IP SECURITY
 
■Authentication Header (AH): AH is an extension header to provide mes-
sage authentication. The current specification is RFC 4302, IP Authentication 
Header. Because message authentication is provided by ESP, the use of 
AH is deprecated. It is included in IPsecv3 for backward compatibility 
but should not be used in new applications. We do not discuss AH in this 
chapter.
 
■Encapsulating Security Payload (ESP): ESP consists of an encapsulat-
ing header and trailer used to provide encryption or combined encryption/ 
authentication. The current specification is RFC 4303, IP Encapsulating 
Security Payload (ESP).
 
■Internet Key Exchange (IKE): This is a collection of documents describing 
the key management schemes for use with IPsec. The main specification is 
RFC 7296, Internet Key Exchange (IKEv2) Protocol, but there are a number 
of  related RFCs.
 
■Cryptographic algorithms: This category encompasses a large set of docu-
ments that define and describe cryptographic algorithms for encryption, mes-
sage authentication, pseudorandom functions (PRFs), and cryptographic key 
exchange.
 
■Other: There are a variety of other IPsec-related RFCs, including those deal-
ing with security policy and management information base (MIB) content.
IPsec Services
IPsec provides security services at the IP layer by enabling a system to select 
 required security protocols, determine the algorithm(s) to use for the service(s), 
and put in place any cryptographic keys required to provide the requested  services. 
Two protocols are used to provide security: an authentication protocol designated 
by the header of the protocol, Authentication Header (AH); and a combined 
 encryption/authentication protocol designated by the format of the packet for 
that protocol, Encapsulating Security Payload (ESP). RFC 4301 lists the following 
services:
 
■Access control
 
■Connectionless integrity
 
■Data origin authentication
 
■Rejection of replayed packets (a form of partial sequence integrity)
 
■Confidentiality (encryption)
 
■Limited traffic flow confidentiality
Transport and Tunnel Modes
Both AH and ESP support two modes of use: transport and tunnel mode. The oper-
ation of these two modes is best understood in the context of a description of ESP, 
which is covered in Section 20.3. Here we provide a brief overview.

20.1 / IP SECURITY OVERVIEW 667
TRANSPORT MODE Transport mode provides protection primarily for upper-layer 
protocols. That is, transport mode protection extends to the payload of an IP 
packet.1 Examples include a TCP or UDP segment or an ICMP packet, all of which 
operate directly above IP in a host protocol stack. Typically, transport mode is used 
for end-to-end communication between two hosts (e.g., a client and a server, or two 
workstations). When a host runs AH or ESP over IPv4, the payload is the data that 
normally follow the IP header. For IPv6, the payload is the data that normally fol-
low both the IP header and any IPv6 extensions headers that are present, with the 
possible exception of the destination options header, which may be included in the 
protection.
ESP in transport mode encrypts and optionally authenticates the IP payload 
but not the IP header. AH in transport mode authenticates the IP payload and 
 selected portions of the IP header.
TUNNEL MODE Tunnel mode provides protection to the entire IP packet. To achieve 
this, after the AH or ESP fields are added to the IP packet, the entire packet plus 
security fields is treated as the payload of new outer IP packet with a new outer 
IP header. The entire original, inner, packet travels through a tunnel from one 
point of an IP network to another; no routers along the way are able to examine 
the inner IP header. Because the original packet is encapsulated, the new, larger 
packet may have totally different source and destination addresses, adding to the 
security. Tunnel mode is used when one or both ends of a security association (SA) 
are a security gateway, such as a firewall or router that implements IPsec. With tun-
nel mode, a number of hosts on networks behind firewalls may engage in secure 
communications without implementing IPsec. The unprotected packets generated 
by such hosts are tunneled through external networks by tunnel mode SAs set up 
by the IPsec software in the firewall or secure router at the boundary of the local 
network.
Here is an example of how tunnel mode IPsec operates. Host A on a network 
generates an IP packet with the destination address of host B on another network. 
This packet is routed from the originating host to a firewall or secure router at the 
boundary of A’s network. The firewall filters all outgoing packets to determine the 
need for IPsec processing. If this packet from A to B requires IPsec, the firewall 
performs IPsec processing and encapsulates the packet with an outer IP header. 
The source IP address of this outer IP packet is this firewall, and the destination 
address may be a firewall that forms the boundary to B’s local network. This packet 
is now routed to B’s firewall, with intermediate routers examining only the outer IP 
header. At B’s firewall, the outer IP header is stripped off, and the inner packet is 
delivered to B.
ESP in tunnel mode encrypts and optionally authenticates the entire inner IP 
packet, including the inner IP header. AH in tunnel mode authenticates the entire 
inner IP packet and selected portions of the outer IP header.
Table 20.1 summarizes transport and tunnel mode functionality.
1In this chapter, the term IP packet refers to either an IPv4 datagram or an IPv6 packet.

668  CHAPTER 20 / IP SECURITY
 20.2 IP SECURITY POLICY
Fundamental to the operation of IPsec is the concept of a security policy  applied 
to each IP packet that transits from a source to a destination. IPsec policy is 
 determined primarily by the interaction of two databases, the security association 
 database (SAD) and the security policy database (SPD). This section provides an 
overview of these two databases and then summarizes their use during IPsec opera-
tion. Figure 20.2 illustrates the relevant relationships.
Security Associations
A key concept that appears in both the authentication and confidentiality mecha-
nisms for IP is the security association (SA). An association is a one-way logical 
connection between a sender and a receiver that affords security services to the traf-
fic carried on it. If a peer relationship is needed for two-way secure exchange, then 
two security associations are required.
A security association is uniquely identified by three parameters.
 
■Security Parameters Index (SPI): A 32-bit unsigned integer assigned to this 
SA and having local significance only. The SPI is carried in AH and ESP head-
ers to enable the receiving system to select the SA under which a received 
packet will be processed.
 
■IP Destination Address: This is the address of the destination endpoint of the 
SA, which may be an end-user system or a network system such as a firewall 
or router.
 
■Security Protocol Identifier: This field from the outer IP header indicates 
whether the association is an AH or ESP security association.
Hence, in any IP packet, the security association is uniquely identified by the 
Destination Address in the IPv4 or IPv6 header and the SPI in the enclosed exten-
sion header (AH or ESP).
Transport Mode SA
Tunnel Mode SA
AH
Authenticates IP payload and selected 
portions of IP header and IPv6 
extension headers.
Authenticates entire inner IP packet (inner 
header plus IP payload) plus selected portions 
of outer IP header and outer IPv6 extension 
headers.
ESP
Encrypts IP payload and any IPv6 
extension headers following the ESP 
header.
Encrypts entire inner IP packet.
ESP with 
Authentication
Encrypts IP payload and any IPv6 
extension headers following the ESP 
header. Authenticates IP payload but 
not IP header.
Encrypts entire inner IP packet. Authenticates 
inner IP packet.
Table 20.1 Tunnel Mode and Transport Mode Functionality

20.2 / IP SECURITY POLICY 669
Security Association Database
In each IPsec implementation, there is a nominal2 Security Association Database 
that defines the parameters associated with each SA. A security association is nor-
mally defined by the following parameters in an SAD entry.
 
■Security Parameter Index: A 32-bit value selected by the receiving end of an 
SA to uniquely identify the SA. In an SAD entry for an outbound SA, the SPI 
is used to construct the packet’s AH or ESP header. In an SAD entry for an 
inbound SA, the SPI is used to map traffic to the appropriate SA.
 
■Sequence Number Counter: A 32-bit value used to generate the Sequence 
Number field in AH or ESP headers, described in Section 20.3 (required for all 
implementations).
 
■Sequence Counter Overflow: A flag indicating whether overflow of the 
Sequence Number Counter should generate an auditable event and prevent 
further transmission of packets on this SA (required for all implementations).
 
■Anti-Replay Window: Used to determine whether an inbound AH or ESP 
packet is a replay, described in Section 20.3 (required for all implementations).
 
■AH Information: Authentication algorithm, keys, key lifetimes, and related 
parameters being used with AH (required for AH implementations).
 
■ESP Information: Encryption and authentication algorithm, keys, initialization 
values, key lifetimes, and related parameters being used with ESP  (required 
for ESP implementations).
 
■Lifetime of this Security Association: A time interval or byte count after 
which an SA must be replaced with a new SA (and new SPI) or terminated, 
plus an indication of which of these actions should occur (required for all 
implementations).
2Nominal in the sense that the functionality provided by a Security Association Database must be present 
in any IPsec implementation, but the way in which that functionality is provided is up to the implementer.
Figure 20.2 IPsec Architecture
SPD
SPD
SAD
IKEv2
IKEv2
IPsecv3
IPsecv3
Security
association
database
Key exchange
IKE SA
IPsec SA Pair
ESP protects data
Security
association
database
Security
policy
database
Security
policy
database
SAD

670  CHAPTER 20 / IP SECURITY
 
■IPsec Protocol Mode: Tunnel, transport, or wildcard.
 
■Path MTU: Any observed path maximum transmission unit (maximum size of 
a packet that can be transmitted without fragmentation) and aging variables 
(required for all implementations).
The key management mechanism that is used to distribute keys is coupled to 
the authentication and privacy mechanisms only by way of the Security Parameters 
Index (SPI). Hence, authentication and privacy have been specified independent of 
any specific key management mechanism.
IPsec provides the user with considerable flexibility in the way in which IPsec 
services are applied to IP traffic. As we will see later, SAs can be combined in a 
number of ways to yield the desired user configuration. Furthermore, IPsec pro-
vides a high degree of granularity in discriminating between traffic that is afforded 
IPsec protection and traffic that is allowed to bypass IPsec, as in the former case 
relating IP traffic to specific SAs.
Security Policy Database
The means by which IP traffic is related to specific SAs (or no SA in the case of traffic 
allowed to bypass IPsec) is the nominal Security Policy Database (SPD). In its simplest 
form, an SPD contains entries, each of which defines a subset of IP traffic and points 
to an SA for that traffic. In more complex environments, there may be multiple entries 
that potentially relate to a single SA or multiple SAs associated with a single SPD 
entry. The reader is referred to the relevant IPsec documents for a full discussion.
Each SPD entry is defined by a set of IP and upper-layer protocol field values, 
called selectors. In effect, these selectors are used to filter outgoing traffic in order 
to map it into a particular SA. Outbound processing obeys the following general 
sequence for each IP packet.
1. Compare the values of the appropriate fields in the packet (the selector fields) 
against the SPD to find a matching SPD entry, which will point to zero or more SAs.
2. Determine the SA if any for this packet and its associated SPI.
3. Do the required IPsec processing (i.e., AH or ESP processing).
The following selectors determine an SPD entry:
 
■Remote IP Address: This may be a single IP address, an enumerated list or 
range of addresses, or a wildcard (mask) address. The latter two are required to 
support more than one destination system sharing the same SA (e.g., behind 
a firewall).
 
■Local IP Address: This may be a single IP address, an enumerated list or range 
of addresses, or a wildcard (mask) address. The latter two are required to sup-
port more than one source system sharing the same SA (e.g., behind a firewall).
 
■Next Layer Protocol: The IP protocol header (IPv4, IPv6, or IPv6 Extension) 
includes a field (Protocol for IPv4, Next Header for IPv6 or IPv6 Extension) 
that designates the protocol operating over IP. This is an individual protocol 
number, ANY, or for IPv6 only, OPAQUE. If AH or ESP is used, then this IP 
protocol header immediately precedes the AH or ESP header in the packet.

20.2 / IP SECURITY POLICY 671
 
■Name: A user identifier from the operating system. This is not a field in the IP 
or upper-layer headers but is available if IPsec is running on the same operat-
ing system as the user.
 
■Local and Remote Ports: These may be individual TCP or UDP port values, an 
enumerated list of ports, or a wildcard port.
Table 20.2 provides an example of an SPD on a host system (as opposed to 
a network system such as a firewall or router). This table reflects the following 
configuration: A local network configuration consists of two networks. The basic 
corporate network configuration has the IP network number 1.2.3.0/24. The local 
configuration also includes a secure LAN, often known as a DMZ, that is identified 
as 1.2.4.0/24. The DMZ is protected from both the outside world and the rest of the 
corporate LAN by firewalls. The host in this example has the IP address 1.2.3.10, 
and it is authorized to connect to the server 1.2.4.10 in the DMZ.
The entries in the SPD should be self-explanatory. For example, UDP port 
500 is the designated port for IKE. Any traffic from the local host to a remote host 
for purposes of an IKE exchange bypasses the IPsec processing.
IP Traffic Processing
IPsec is executed on a packet-by-packet basis. When IPsec is implemented, each 
outbound IP packet is processed by the IPsec logic before transmission, and each 
inbound packet is processed by the IPsec logic after reception and before passing 
the packet contents on to the next higher layer (e.g., TCP or UDP). We look at the 
logic of these two situations in turn.
OUTBOUND PACKETS Figure 20.3 highlights the main elements of IPsec processing 
for outbound traffic. A block of data from a higher layer, such as TCP, is passed 
down to the IP layer and an IP packet is formed, consisting of an IP header and an 
IP body. Then the  following steps occur:
1. IPsec searches the SPD for a match to this packet.
2. If no match is found, then the packet is discarded and an error message is generated.
Protocol
Local IP
Port
Remote IP
Port
Action
Comment
UDP
1.2.3.101

*

BYPASS
IKE
ICMP
1.2.3.101
*
*
*
BYPASS
Error messages
*
1.2.3.101
*
1.2.3.0/24
*
PROTECT: ESP 
intransport-mode
Encrypt intranet traffic
TCP
1.2.3.101
*
1.2.4.10

PROTECT: ESP 
intransport-mode
Encrypt to server
TCP
1.2.3.101
*
1.2.4.10

BYPASS
TLS: avoid double encryption
*
1.2.3.101
*
1.2.4.0/24
*
DISCARD
Others in DMZ
*
1.2.3.101
*
*
*
BYPASS
Internet
Table 20.2 Host SPD Example

672  CHAPTER 20 / IP SECURITY
3. If a match is found, further processing is determined by the first matching 
entry in the SPD. If the policy for this packet is DISCARD, then the packet is 
discarded. If the policy is BYPASS, then there is no further IPsec processing; 
the packet is forwarded to the network for transmission.
4. If the policy is PROTECT, then a search is made of the SAD for a matching 
entry. If no entry is found, then IKE is invoked to create an SA with the ap-
propriate keys and an entry is made in the SA.
5. The matching entry in the SAD determines the processing for this packet. 
Either encryption, authentication, or both can be performed, and either trans-
port or tunnel mode can be used. The packet is then forwarded to the network 
for transmission.
INBOUND PACKETS Figure 20.4 highlights the main elements of IPsec processing for 
inbound traffic. An incoming IP packet triggers the IPsec processing. The following 
steps occur:
1. IPsec determines whether this is an unsecured IP packet or one that has ESP 
or AH headers/trailers, by examining the IP Protocol field (IPv4) or Next 
Header field (IPv6).
Figure 20.3 Processing Model for Outbound Packets
Search
security policy
database
Search
security association
database
Determine
policy
Outbound IP packet
(e.g., from TCP or UDP)
Discard
packet
No match
found
No match
found
Match found
Match
found
DISCARD
PROTECT
BYPASS
Forward
packet via
IP
Internet
key
exchange
Process
(AH/ESP)

20.3 / ENCAPSULATING SECURITY PAYLOAD 673
2. If the packet is unsecured, IPsec searches the SPD for a match to this packet. 
If the first matching entry has a policy of BYPASS, the IP header is processed 
and stripped off and the packet body is delivered to the next higher layer, such 
as TCP. If the first matching entry has a policy of PROTECT or DISCARD, or 
if there is no matching entry, the packet is discarded.
3. For a secured packet, IPsec searches the SAD. If no match is found, the packet 
is discarded. Otherwise, IPsec applies the appropriate ESP or AH processing. 
Then, the IP header is processed and stripped off and the packet body is deliv-
ered to the next higher layer, such as TCP.
 20.3 ENCAPSULATING SECURITY PAYLOAD
ESP can be used to provide confidentiality, data origin authentication, connection-
less integrity, an anti-replay service (a form of partial sequence integrity), and (lim-
ited) traffic flow confidentiality. The set of services provided depends on options 
selected at the time of Security Association (SA) establishment and on the location 
of the implementation in a network topology.
ESP can work with a variety of encryption and authentication algorithms, in-
cluding authenticated encryption algorithms such as GCM.
Figure 20.4 Processing Model for Inbound Packets
Search
security policy
database
Search
security association
database
Packet
type
Inbound IP packet
(from Internet)
Discard
packet
No match
found
c
e
s
P
I
P
I
Not
BYPASS
Match
found
BYPASS
Deliver packet
to higher layer
(e.g., TCP, UDP)
Process
(AH/ESP)

674  CHAPTER 20 / IP SECURITY
ESP Format
Figure 20.5a shows the top-level format of an ESP packet. It contains the following fields.
 
■Security Parameters Index (32 bits): Identifies a security association.
 
■Sequence Number (32 bits): A monotonically increasing counter value; this 
provides an anti-replay function, as discussed for AH.
 
■Payload Data (variable): This is a transport-level segment (transport mode) or 
IP packet (tunnel mode) that is protected by encryption.
 
■Padding (0–255 bytes): The purpose of this field is discussed later.
 
■Pad Length (8 bits): Indicates the number of pad bytes immediately preceding 
this field.
 
■Next Header (8 bits): Identifies the type of data contained in the payload data 
field by identifying the first header in that payload (e.g., an extension header 
in IPv6, or an upper-layer protocol such as TCP).
 
■Integrity Check Value (variable): A variable-length field (must be an integral 
number of 32-bit words) that contains the Integrity Check Value computed 
over the ESP packet minus the Authentication Data field.
Figure 20.5 ESP Packet Format
Security parameters index (SPI)
32 bits
Sequence number 
Padding (0–255 bytes)
Pad length
Next header
Payload data (variable)
Integrity check value - ICV (variable)
ICV coverage
Encrypted
Encrypted
(a)  Top-level format of an ESP Packet
(b)  Substructure of payload data
Security parameters index (SPI)
Sequence number 
Initialization value - IV (optional)
Padding (0–255 bytes)
TFC padding (optional, variable)
Pad length
Next header
Rest of payload data (variable)
Integrity check value - ICV (variable)
ICV coverage
Payload

20.3 / ENCAPSULATING SECURITY PAYLOAD 675
When any combined mode algorithm is employed, the algorithm itself is ex-
pected to return both decrypted plaintext and a pass/fail indication for the integrity 
check. For combined mode algorithms, the ICV that would normally appear at the 
end of the ESP packet (when integrity is selected) may be omitted. When the ICV 
is omitted and integrity is selected, it is the responsibility of the combined mode 
algorithm to encode within the Payload Data an ICV-equivalent means of verifying 
the integrity of the packet.
Two additional fields may be present in the payload (Figure 20.5b). 
An  initialization value (IV), or nonce, is present if this is required by the encryption 
or authenticated encryption algorithm used for ESP. If tunnel mode is being used, 
then the IPsec implementation may add traffic flow confidentiality (TFC) padding 
after the Payload Data and before the Padding field, as explained subsequently.
Encryption and Authentication Algorithms
The Payload Data, Padding, Pad Length, and Next Header fields are encrypted by 
the ESP service. If the algorithm used to encrypt the payload requires cryptographic 
synchronization data, such as an initialization vector (IV), then these data may be 
carried explicitly at the beginning of the Payload Data field. If included, an IV is 
usually not encrypted, although it is often referred to as being part of the ciphertext.
The ICV field is optional. It is present only if the integrity service is selected 
and is provided by either a separate integrity algorithm or a combined mode algo-
rithm that uses an ICV. The ICV is computed after the encryption is performed. 
This order of processing facilitates rapid detection and rejection of replayed or 
bogus packets by the receiver prior to decrypting the packet, hence potentially re-
ducing the impact of denial of service (DoS) attacks. It also allows for the possibility 
of parallel processing of packets at the receiver that is decryption can take place in 
parallel with integrity checking. Note that because the ICV is not protected by en-
cryption, a keyed integrity algorithm must be employed to compute the ICV.
Padding
The Padding field serves several purposes:
 
■If an encryption algorithm requires the plaintext to be a multiple of some 
number of bytes (e.g., the multiple of a single block for a block cipher), the 
Padding field is used to expand the plaintext (consisting of the Payload Data, 
Padding, Pad Length, and Next Header fields) to the required length.
 
■The ESP format requires that the Pad Length and Next Header fields be right 
aligned within a 32-bit word. Equivalently, the ciphertext must be an integer 
multiple of 32 bits. The Padding field is used to assure this alignment.
 
■Additional padding may be added to provide partial traffic-flow confidential-
ity by concealing the actual length of the payload.
Anti-Replay Service
A replay attack is one in which an attacker obtains a copy of an authenticated 
packet and later transmits it to the intended destination. The receipt of duplicate, 
authenticated IP packets may disrupt service in some way or may have some other 

676  CHAPTER 20 / IP SECURITY
undesired consequence. The Sequence Number field is designed to thwart such at-
tacks. First, we discuss sequence number generation by the sender, and then we 
look at how it is processed by the recipient.
When a new SA is established, the sender initializes a sequence number 
 counter to 0. Each time that a packet is sent on this SA, the sender increments the 
counter and places the value in the Sequence Number field. Thus, the first value to 
be used is 1. If anti-replay is enabled (the default), the sender must not allow the 
sequence number to cycle past 232 - 1 back to zero. Otherwise, there would be mul-
tiple valid packets with the same sequence number. If the limit of 232 - 1 is reached, 
the sender should terminate this SA and negotiate a new SA with a new key.
Because IP is a connectionless, unreliable service, the protocol does not guar-
antee that packets will be delivered in order and does not guarantee that all packets 
will be delivered. Therefore, the IPsec authentication document dictates that the 
receiver should implement a window of size W, with a default of W = 64. The right 
edge of the window represents the highest sequence number, N, so far received for a 
valid packet. For any packet with a sequence number in the range from N - W + 1 
to N that has been correctly received (i.e., properly authenticated), the correspond-
ing slot in the window is marked (Figure 20.6). Inbound processing proceeds as fol-
lows when a packet is received:
1. If the received packet falls within the window and is new, the MAC is checked. 
If the packet is authenticated, the corresponding slot in the window is marked.
2. If the received packet is to the right of the window and is new, the MAC is 
checked. If the packet is authenticated, the window is advanced so that this 
sequence number is the right edge of the window, and the corresponding slot 
in the window is marked.
3. If the received packet is to the left of the window or if authentication fails, the 
packet is discarded; this is an auditable event.
Transport and Tunnel Modes
Figure 20.7 shows two ways in which the IPsec ESP service can be used. In the upper 
part of the figure, encryption (and optionally authentication) is provided directly be-
tween two hosts. Figure 20.7b shows how tunnel mode operation can be used to set up 
Figure 20.6 Anti-replay Mechanism
Fixed window size W
N
N + 1
N – W
Marked if valid
packet received
Unmarked if valid
packet not yet received
   
Advance window if
valid packet to the
right is received

20.3 / ENCAPSULATING SECURITY PAYLOAD 677
a virtual private network. In this example, an organization has four private networks 
interconnected across the Internet. Hosts on the internal networks use the Internet 
for transport of data but do not interact with other Internet-based hosts. By terminat-
ing the tunnels at the security gateway to each internal network, the configuration al-
lows the hosts to avoid implementing the security capability. The former technique is 
supported by a transport mode SA, while the latter technique uses a tunnel mode SA.
In this section, we look at the scope of ESP for the two modes. The consid-
erations are somewhat different for IPv4 and IPv6. We use the packet formats of 
Figure 20.8a as a starting point.
TRANSPORT MODE ESP Transport mode ESP is used to encrypt and optionally au-
thenticate the data carried by IP (e.g., a TCP segment), as shown in Figure 20.8b. 
For this mode using IPv4, the ESP header is inserted into the IP packet immedi-
ately prior to the transport-layer header (e.g., TCP, UDP, ICMP), and an ESP 
trailer (Padding, Pad Length, and Next Header fields) is placed after the IP packet. 
If authentication is selected, the ESP Authentication Data field is added after the 
ESP trailer. The entire transport-level segment plus the ESP trailer are encrypted. 
Authentication covers all of the ciphertext plus the ESP header.
In the context of IPv6, ESP is viewed as an end-to-end payload; that is, it is 
not examined or processed by intermediate routers. Therefore, the ESP header ap-
pears after the IPv6 base header and the hop-by-hop, routing, and fragment exten-
sion headers. The destination options extension header could appear before or after 
the ESP header, depending on the semantics desired. For IPv6, encryption covers 
Figure 20.7 Transport-Mode versus Tunnel-Mode Encryptionx
Internal
Network
External
Network
Encrypted
TCP Session
(a) Transport-level security
Internet
Corporate
network
Corporate
network
Corporate
network
Corporate
network
(b) A virtual private network via tunnel mode
Encrypted tunnels
carrying IP traffic

678  CHAPTER 20 / IP SECURITY
the entire transport-level segment plus the ESP trailer plus the destination options 
extension header if it occurs after the ESP header. Again, authentication covers the 
ciphertext plus the ESP header.
Transport mode operation may be summarized as follows.
1. At the source, the block of data consisting of the ESP trailer plus the entire 
transport-layer segment is encrypted and the plaintext of this block is replaced 
Figure 20.8 Scope of ESP Encryption and Authentication
Orig IP
hdr
Hop-by-hop, dest,
routing, fragment
IPv6
Orig IP
hdr
IPv4
New IP
hdr
IPv4
(b) Transport Mode
New IP
hdr
Ext
headers
IPv6
authenticated
encrypted
authenticated
encrypted
authenticated
encrypted
authenticated
encrypted
(c) Tunnel Mode
Orig IP
hdr
Ext
headers
TCP
Data
ESP
trlr
ESP
auth
ESP
hdr
ESP
auth
Orig IP
hdr
TCP
Data
ESP
trlr
ESP
auth
ESP
hdr
Dest
TCP
Data
TCP
Data
ESP
trlr
ESP
auth
ESP
trlr
ESP
hdr
ESP
hdr
Orig IP
hdr
Extension headers
(if present)
TCP
Data
IPv6
Orig IP
hdr
TCP
Data
IPv4
(a) Before Applying ESP

20.3 / ENCAPSULATING SECURITY PAYLOAD 679
with its ciphertext to form the IP packet for transmission. Authentication is 
added if this option is selected.
2. The packet is then routed to the destination. Each intermediate router needs 
to examine and process the IP header plus any plaintext IP extension headers 
but does not need to examine the ciphertext.
3. The destination node examines and processes the IP header plus any plaintext 
IP extension headers. Then, on the basis of the SPI in the ESP header, the 
destination node decrypts the remainder of the packet to recover the plaintext 
transport-layer segment.
Transport mode operation provides confidentiality for any application that 
uses it, thus avoiding the need to implement confidentiality in every individual ap-
plication. One drawback to this mode is that it is possible to do traffic analysis on 
the transmitted packets.
TUNNEL MODE ESP Tunnel mode ESP is used to encrypt an entire IP packet (Figure 
20.8c). For this mode, the ESP header is prefixed to the packet and then the packet 
plus the ESP trailer is encrypted. This method can be used to counter traffic analysis.
Because the IP header contains the destination address and possibly source 
routing directives and hop-by-hop option information, it is not possible simply to 
transmit the encrypted IP packet prefixed by the ESP header. Intermediate routers 
would be unable to process such a packet. Therefore, it is necessary to encapsulate 
the entire block (ESP header plus ciphertext plus Authentication Data, if present) 
with a new IP header that will contain sufficient information for routing but not for 
traffic analysis.
Whereas the transport mode is suitable for protecting connections between 
hosts that support the ESP feature, the tunnel mode is useful in a configuration that 
includes a firewall or other sort of security gateway that protects a trusted network 
from external networks. In this latter case, encryption occurs only between an exter-
nal host and the security gateway or between two security gateways. This relieves 
hosts on the internal network of the processing burden of encryption and simplifies 
the key distribution task by reducing the number of needed keys. Further, it thwarts 
traffic analysis based on ultimate destination.
Consider a case in which an external host wishes to communicate with a host 
on an internal network protected by a firewall, and in which ESP is implemented 
in the external host and the firewalls. The following steps occur for transfer of a 
transport-layer segment from the external host to the internal host.
1. The source prepares an inner IP packet with a destination address of the target 
internal host. This packet is prefixed by an ESP header; then the packet and 
ESP trailer are encrypted and Authentication Data may be added. The result-
ing block is encapsulated with a new IP header (base header plus optional ex-
tensions such as routing and hop-by-hop options for IPv6) whose destination 
address is the firewall; this forms the outer IP packet.
2. The outer packet is routed to the destination firewall. Each intermediate 
router needs to examine and process the outer IP header plus any outer IP 
extension headers but does not need to examine the ciphertext.

680  CHAPTER 20 / IP SECURITY
3. The destination firewall examines and processes the outer IP header plus any 
outer IP extension headers. Then, on the basis of the SPI in the ESP header, the 
destination node decrypts the remainder of the packet to recover the plaintext 
inner IP packet. This packet is then transmitted in the internal network.
4. The inner packet is routed through zero or more routers in the internal net-
work to the destination host.
Figure 20.9 shows the protocol architecture for the two modes.
Figure 20.9 Protocol Operation for ESP
Data
Data
TCP
hdr
Data
TCP
hdr
Data
Orig IP
hdr
TCP
hdr
Data
ESP
trlr
ESP
hdr
Orig IP
hdr
ESP
auth
New IP
hdr
TCP
hdr
Data
ESP
trlr
ESP
hdr
Orig IP
hdr
ESP
auth
TCP
hdr
Data
Orig IP
hdr
TCP
hdr
Data
Orig IP
hdr
TCP
hdr
Data
(a) Transport mode
(b) Tunnel mode
ESP
trlr
ESP
hdr
ESP
auth
Application
TCP
IP
IPsec
Application
TCP
IP
IPsec
IP

20.4 / COMBINING SECURITY ASSOCIATIONS 681
 20.4 COMBINING SECURITY ASSOCIATIONS
An individual SA can implement either the AH or ESP protocol but not both. 
Sometimes a particular traffic flow will call for the services provided by both AH 
and ESP. Further, a particular traffic flow may require IPsec services between hosts 
and, for that same flow, separate services between security gateways, such as fire-
walls. In all of these cases, multiple SAs must be employed for the same traffic flow 
to achieve the desired IPsec services. The term security association bundle refers to 
a sequence of SAs through which traffic must be processed to provide a desired set 
of IPsec services. The SAs in a bundle may terminate at different endpoints or at 
the same endpoints.
Security associations may be combined into bundles in two ways:
 
■Transport adjacency: Refers to applying more than one security protocol to 
the same IP packet without invoking tunneling. This approach to combining 
AH and ESP allows for only one level of combination; further nesting yields 
no added benefit since the processing is performed at one IPsec instance: the 
(ultimate) destination.
 
■Iterated tunneling: Refers to the application of multiple layers of security pro-
tocols effected through IP tunneling. This approach allows for multiple levels 
of nesting, since each tunnel can originate or terminate at a different IPsec site 
along the path.
The two approaches can be combined, for example, by having a transport SA be-
tween hosts travel part of the way through a tunnel SA between security gateways.
One interesting issue that arises when considering SA bundles is the order in 
which authentication and encryption may be applied between a given pair of end-
points and the ways of doing so. We examine that issue next. Then we look at com-
binations of SAs that involve at least one tunnel.
Authentication Plus Confidentiality
Encryption and authentication can be combined in order to transmit an IP packet 
that has both confidentiality and authentication between hosts. We look at several 
approaches.
ESP WITH AUTHENTICATION OPTION This approach is illustrated in Figure 20.8. 
In this approach, the user first applies ESP to the data to be protected and then 
 appends the authentication data field. There are actually two subcases:
 
■Transport mode ESP: Authentication and encryption apply to the IP payload 
delivered to the host, but the IP header is not protected.
 
■Tunnel mode ESP: Authentication applies to the entire IP packet delivered 
to the outer IP destination address (e.g., a firewall), and authentication is per-
formed at that destination. The entire inner IP packet is protected by the pri-
vacy mechanism for delivery to the inner IP destination.
For both cases, authentication applies to the ciphertext rather than the plaintext.

682  CHAPTER 20 / IP SECURITY
TRANSPORT ADJACENCY Another way to apply authentication after encryption is to 
use two bundled transport SAs, with the inner being an ESP SA and the outer being 
an AH SA. In this case, ESP is used without its authentication option. Because the 
inner SA is a transport SA, encryption is applied to the IP payload. The resulting 
packet consists of an IP header (and possibly IPv6 header extensions) followed by 
an ESP. AH is then applied in transport mode, so that authentication covers the 
ESP plus the original IP header (and extensions) except for mutable fields. The 
advantage of this approach over simply using a single ESP SA with the ESP authen-
tication option is that the authentication covers more fields, including the source 
and destination IP addresses. The disadvantage is the overhead of two SAs versus 
one SA.
TRANSPORT-TUNNEL BUNDLE The use of authentication prior to encryption might 
be preferable for several reasons. First, because the authentication data are pro-
tected by encryption, it is impossible for anyone to intercept the message and alter 
the authentication data without detection. Second, it may be desirable to store the 
authentication information with the message at the destination for later reference. 
It is more convenient to do this if the authentication information applies to the un-
encrypted message; otherwise the message would have to be reencrypted to verify 
the authentication information.
One approach to applying authentication before encryption between two hosts 
is to use a bundle consisting of an inner AH transport SA and an outer ESP tunnel 
SA. In this case, authentication is applied to the IP payload plus the IP header (and 
extensions) except for mutable fields. The resulting IP packet is then processed in 
tunnel mode by ESP; the result is that the entire, authenticated inner packet is en-
crypted and a new outer IP header (and extensions) is added.
Basic Combinations of Security Associations
The IPsec Architecture document lists four examples of combinations of SAs that 
must be supported by compliant IPsec hosts (e.g., workstation, server) or security 
gateways (e.g., firewall, router). These are illustrated in Figure 20.10. The lower 
part of each case in the figure represents the physical connectivity of the elements; 
the upper part represents logical connectivity via one or more nested SAs. Each SA 
can be either AH or ESP. For host-to-host SAs, the mode may be either transport 
or tunnel; otherwise it must be tunnel mode.
Case 1. All security is provided between end systems that implement IPsec. 
For any two end systems to communicate via an SA, they must share the appropri-
ate secret keys. Among the possible combinations are
a. AH in transport mode
b. ESP in transport mode
c. ESP followed by AH in transport mode (an ESP SA inside an AH SA)
d. Any one of a, b, or c inside an AH or ESP in tunnel mode
We have already discussed how these various combinations can be used to 
support authentication, encryption, authentication before encryption, and authenti-
cation after encryption.

20.4 / COMBINING SECURITY ASSOCIATIONS 683
Figure 20.10 Basic Combinations of Security Associations
Internet
Tunnel SA
One or Two SAs
Local
Intranet
Local
Intranet
Host*
Host*
Security
Gateway*
Security
Gateway*
(c) Case 3
Internet
Tunnel SA
Local
Intranet
Local
Intranet
Host
Host
Security
Gateway*
Security
Gateway*
(b) Case 2 
* = implements IPsec
Internet
One or More SAs
Local
Intranet
Local
Intranet
Host*
Host*
Router
Router
(a) Case 1
Internet
Local
Intranet
Host*
Host*
Security
Gateway*
(d) Case 4
Tunnel SA
One or Two SAs

684  CHAPTER 20 / IP SECURITY
Case 2. Security is provided only between gateways (routers, firewalls, etc.) 
and no hosts implement IPsec. This case illustrates simple virtual private network 
support. The security architecture document specifies that only a single tunnel SA is 
needed for this case. The tunnel could support AH, ESP, or ESP with the authenti-
cation option. Nested tunnels are not required, because the IPsec services apply to 
the entire inner packet.
Case 3. This builds on case 2 by adding end-to-end security. The same combi-
nations discussed for cases 1 and 2 are allowed here. The gateway-to-gateway tun-
nel provides either authentication, confidentiality, or both for all traffic between 
end systems. When the gateway-to-gateway tunnel is ESP, it also provides a limited 
form of traffic confidentiality. Individual hosts can implement any additional IPsec 
services required for given applications or given users by means of end-to-end SAs.
Case 4. This provides support for a remote host that uses the Internet to reach 
an organization’s firewall and then to gain access to some server or workstation 
behind the firewall. Only tunnel mode is required between the remote host and the 
firewall. As in case 1, one or two SAs may be used between the remote host and the 
local host.
 20.5 INTERNET KEY EXCHANGE
The key management portion of IPsec involves the determination and distribution 
of secret keys. A typical requirement is four keys for communication between two 
applications: transmit and receive pairs for both integrity and confidentiality. The 
IPsec Architecture document mandates support for two types of key management:
 
■Manual: A system administrator manually configures each system with its own 
keys and with the keys of other communicating systems. This is practical for 
small, relatively static environments.
 
■Automated: An automated system enables the on-demand creation of keys for 
SAs and facilitates the use of keys in a large distributed system with an evolv-
ing configuration.
The default automated key management protocol for IPsec is referred to as 
ISAKMP/Oakley and consists of the following elements:
 
■Oakley Key Determination Protocol: Oakley is a key exchange protocol based 
on the Diffie–Hellman algorithm but providing added security. Oakley is ge-
neric in that it does not dictate specific formats.
 
■Internet Security Association and Key Management Protocol (ISAKMP): 
ISAKMP provides a framework for Internet key management and provides 
the specific protocol support, including formats, for negotiation of security 
attributes.
ISAKMP by itself does not dictate a specific key exchange algorithm; rather, 
ISAKMP consists of a set of message types that enable the use of a variety of key 
exchange algorithms. Oakley is the specific key exchange algorithm mandated for 
use with the initial version of ISAKMP.

20.5 / INTERNET KEY EXCHANGE 685
In IKEv2, the terms Oakley and ISAKMP are no longer used, and there 
are significant differences from the use of Oakley and ISAKMP in IKEv1. 
Nevertheless, the basic functionality is the same. In this section, we describe the 
IKEv2 specification.
Key Determination Protocol
IKE key determination is a refinement of the Diffie–Hellman key exchange algo-
rithm. Recall that Diffie–Hellman involves the following interaction between users 
A and B. There is prior agreement on two global parameters: q, a large prime num-
ber; and a, a primitive root of q. A selects a random integer XA as its private key and 
transmits to B its public key ΥA = aXA mod q. Similarly, B selects a random integer 
XB as its private key and transmits to A its public key ΥB = aXB mod q. Each side 
can now compute the secret session key:
 
K = (ΥB)XA mod q = (ΥA)XB mod q = aXAXB mod q 
The Diffie–Hellman algorithm has two attractive features:
 
■Secret keys are created only when needed. There is no need to store secret 
keys for a long period of time, exposing them to increased vulnerability.
 
■The exchange requires no pre-existing infrastructure other than an agreement 
on the global parameters.
However, there are a number of weaknesses to Diffie–Hellman, as pointed out in 
[HUIT98].
 
■It does not provide any information about the identities of the parties.
 
■It is subject to a man-in-the-middle attack, in which a third party C imperson-
ates B while communicating with A and impersonates A while communicating 
with B. Both A and B end up negotiating a key with C, which can then listen to 
and pass on traffic. The man-in-the-middle attack proceeds as
1. B sends his public key YB in a message addressed to A (see Figure 10.2).
2. The enemy (E) intercepts this message. E saves B’s public key and sends a 
message to A that has B’s User ID but E’s public key YE. This message is 
sent in such a way that it appears as though it was sent from B’s host system. 
A receives E’s message and stores E’s public key with B’s User ID. Similarly, 
E sends a message to B with E’s public key, purporting to come from A.
3. B computes a secret key K1 based on B’s private key and YE. A computes 
a secret key K2 based on A’s private key and YE. E computes K1 using E’s 
secret key XE and YB and computers K2 using XE and YA.
4. From now on, E is able to relay messages from A to B and from B to A, 
appropriately changing their encipherment en route in such a way that nei-
ther A nor B will know that they share their communication with E.
 
■It is computationally intensive. As a result, it is vulnerable to a clogging attack, 
in which an opponent requests a high number of keys. The victim spends con-
siderable computing resources doing useless modular exponentiation rather 
than real work.

686  CHAPTER 20 / IP SECURITY
IKE key determination is designed to retain the advantages of Diffie–Hellman, 
while countering its weaknesses.
FEATURES OF IKE KEY DETERMINATION The IKE key determination algorithm is 
characterized by five important features:
1. It employs a mechanism known as cookies to thwart clogging attacks.
2. It enables the two parties to negotiate a group; this, in essence, specifies the 
global parameters of the Diffie–Hellman key exchange.
3. It uses nonces to ensure against replay attacks.
4. It enables the exchange of Diffie–Hellman public key values.
5. It authenticates the Diffie–Hellman exchange to thwart man-in-the-middle 
attacks.
We have already discussed Diffie–Hellman. Let us look at the remainder of 
these elements in turn. First, consider the problem of clogging attacks. In this at-
tack, an opponent forges the source address of a legitimate user and sends a public 
Diffie–Hellman key to the victim. The victim then performs a modular exponentia-
tion to compute the secret key. Repeated messages of this type can clog the vic-
tim’s system with useless work. The cookie exchange requires that each side send 
a pseudorandom number, the cookie, in the initial message, which the other side 
acknowledges. This acknowledgment must be repeated in the first message of the 
Diffie–Hellman key exchange. If the source address was forged, the opponent gets 
no answer. Thus, an opponent can only force a user to generate acknowledgments 
and not to perform the Diffie–Hellman calculation.
IKE mandates that cookie generation satisfy three basic requirements:
1. The cookie must depend on the specific parties. This prevents an attacker from 
obtaining a cookie using a real IP address and UDP port and then using it to 
swamp the victim with requests from randomly chosen IP addresses or ports.
2. It must not be possible for anyone other than the issuing entity to generate 
cookies that will be accepted by that entity. This implies that the issuing entity 
will use local secret information in the generation and subsequent verification 
of a cookie. It must not be possible to deduce this secret information from any 
particular cookie. The point of this requirement is that the issuing entity need 
not save copies of its cookies, which are then more vulnerable to discovery, but 
can verify an incoming cookie acknowledgment when it needs to.
3. The cookie generation and verification methods must be fast to thwart attacks 
intended to sabotage processor resources.
The recommended method for creating the cookie is to perform a fast hash 
(e.g., MD5) over the IP Source and Destination addresses, the UDP Source and 
Destination ports, and a locally generated secret value.
IKE key determination supports the use of different groups for the Diffie–
Hellman key exchange. Each group includes the definition of the two global pa-
rameters and the identity of the algorithm. The current specification includes the 
following groups.

20.5 / INTERNET KEY EXCHANGE 687
 
■Modular exponentiation with a 768-bit modulus
q = 2768 - 2704 - 1 + 264 * (:2638 * p; + 149686)
a = 2
 
■Modular exponentiation with a 1024-bit modulus
q = 21024 - 2960 - 1 + 264 * (:2894 * p; + 129093)
a = 2
 
■Modular exponentiation with a 1536-bit modulus
 
■Parameters to be determined
 
■Elliptic curve group over 2155
 
■Generator (hexadecimal): X = 7B, Y = 1C8
 
■Elliptic curve parameters (hexadecimal): A = 0, Y = 7338F
 
■Elliptic curve group over 2185
 
■Generator (hexadecimal): X = 18, Y = D
 
■Elliptic curve parameters (hexadecimal): A = 0, Y = 1EE9
The first three groups are the classic Diffie–Hellman algorithm using modular 
exponentiation. The last two groups use the elliptic curve analog to Diffie–Hellman, 
which was described in Chapter 10.
IKE key determination employs nonces to ensure against replay attacks. Each 
nonce is a locally generated pseudorandom number. Nonces appear in responses 
and are encrypted during certain portions of the exchange to secure their use.
Three different authentication methods can be used with IKE key determination:
 
■Digital signatures: The exchange is authenticated by signing a mutually ob-
tainable hash; each party encrypts the hash with its private key. The hash is 
generated over important parameters, such as user IDs and nonces.
 
■Public-key encryption: The exchange is authenticated by encrypting param-
eters such as IDs and nonces with the sender’s private key.
 
■Symmetric-key encryption: A key derived by some out-of-band mechanism 
can be used to authenticate the exchange by symmetric encryption of ex-
change parameters.
IKEV2 EXCHANGES The IKEv2 protocol involves the exchange of messages 
in pairs. The first two pairs of exchanges are referred to as the initial exchanges 
(Figure  20.11a). In the first exchange, the two peers exchange information concern-
ing cryptographic algorithms and other security parameters they are willing to use 
along with nonces and Diffie–Hellman (DH) values. The result of this exchange is to 
set up a special SA called the IKE SA (see Figure 20.2). This SA defines parameters 
for a secure channel between the peers over which subsequent message exchanges 
take place. Thus, all subsequent IKE message exchanges are protected by encryp-
tion and message authentication. In the second exchange, the two parties authenti-
cate one another and set up a first IPsec SA to be placed in the SADB and used for 

688  CHAPTER 20 / IP SECURITY
Figure 20.11 IKEv2 Exchanges
HDR, SAi1, KEi, Ni
Responder
Initiator
(a) Initial exchanges
HDR, SAr1, KEr, Nr, [CERTREQ]
HDR, SK {IDi, [CERT,] [CERTREQ,] [IDr,] AUTH, SAi2, TSi, TSr}
HDR, SK {IDr, [CERT,] AUTH, SAr2, TSi, TSr}
HDR, SK {[N], SA, Ni, [KEi], [TSi, TSr]}
(b) CREATE_CHILD_SA exchange
HDR, SK {SA, Nr, [KEr], [TSi, TSr]}
HDR, SK {[N,] [D,] [CP,] ...}
(c) Informational exchange
HDR, SK {[N,] [D,] [CP], ...}
HDR = IKE header
SAx1 = offered and chosen algorithms, DH group
KEx = Diffie–Hellman public key
Nx= nonces
CERTREQ = Certificate request
IDx = identity
CERT = certificate
SK {...} = MAC and encrypt
AUTH = Authentication
SAx2 = algorithms, parameters for IPsec SA
TSx = traffic selectors for IPsec SA
N = Notify
D = Delete
CP = Configuration
protecting ordinary (i.e. non-IKE) communications between the peers. Thus, four 
messages are needed to establish the first SA for general use.
The CREATE_CHILD_SA exchange can be used to establish further SAs 
for protecting traffic. The informational exchange is used to exchange management 
information, IKEv2 error messages, and other notifications.
Header and Payload Formats
IKE defines procedures and packet formats to establish, negotiate, modify, and de-
lete security associations. As part of SA establishment, IKE defines payloads for 
exchanging key generation and authentication data. These payload formats provide 
a consistent framework independent of the specific key exchange protocol, encryp-
tion algorithm, and authentication mechanism.
IKE HEADER FORMAT An IKE message consists of an IKE header followed by one 
or more payloads. All of this is carried in a transport protocol. The specification dic-
tates that implementations must support the use of UDP for the transport protocol.

20.5 / INTERNET KEY EXCHANGE 689
Figure 20.12a shows the header format for an IKE message. It consists of the 
following fields.
 
■Initiator SPI (64 bits): A value chosen by the initiator to identify a unique IKE 
security association (SA).
 
■Responder SPI (64 bits): A value chosen by the responder to identify a unique 
IKE SA.
 
■Next Payload (8 bits): Indicates the type of the first payload in the message; 
payloads are discussed in the next subsection.
 
■Major Version (4 bits): Indicates major version of IKE in use.
 
■Minor Version (4 bits): Indicates minor version in use.
 
■Exchange Type (8 bits): Indicates the type of exchange; these are discussed 
later in this section.
 
■Flags (8 bits): Indicates specific options set for this IKE exchange. Three bits 
are defined so far. The initiator bit indicates whether this packet is sent by 
the SA initiator. The version bit indicates whether the transmitter is capable 
of using a higher major version number than the one currently indicated. The 
response bit indicates whether this is a response to a message containing the 
same message ID.
 
■Message ID (32 bits): Used to control retransmission of lost packets and 
matching of requests and responses.
 
■Length (32 bits): Length of total message (header plus all payloads) in octets.
IKE PAYLOAD TYPES All IKE payloads begin with the same generic payload header 
shown in Figure 20.12b. The Next Payload field has a value of 0 if this is the last 
Figure 20.12 IKE Formats
MjVer
MnVer
Exchange Type
Flags
Next Payload
Message ID
Length
(a) IKE header
(b) Generic Payload header
Initiator’s Security Parameter Index (SPI)
Responder’s Security Parameter Index (SPI)

Bit:

RESERVED
Payload Length
Next Payload
C

Bit:

690  CHAPTER 20 / IP SECURITY
Type
Parameters
Security Association
Proposals
Key Exchange
DH Group #, Key Exchange Data
Identification
ID Type, ID Data
Certificate
Cert Encoding, Certificate Data
Certificate Request
Cert Encoding, Certification Authority
Authentication
Auth Method, Authentication Data
Nonce
Nonce Data
Notify
Protocol-ID, SPI Size, Notify Message Type, SPI, Notification Data
Delete
Protocol-ID, SPI Size, # of SPIs, SPI (one or more)
Vendor ID
Vendor ID
Traffic Selector
Number of TSs, Traffic Selectors
Encrypted
IV, Encrypted IKE payloads, Padding, Pad Length, ICV
Configuration
CFG Type, Configuration Attributes
Extensible Authentication 
Protocol
EAP Message
Table 20.3 IKE Payload Types
payload in the message; otherwise its value is the type of the next payload. The 
Payload Length field indicates the length in octets of this payload, including the 
generic payload header.
The critical bit is 0 if the sender wants the recipient to skip this payload if it 
does not understand the payload type code in the Next Payload field of the previous 
payload. It is set to 1 if the sender wants the recipient to reject this entire message if 
it does not understand the payload type.
Table 20.3 summarizes the payload types defined for IKE and lists the fields, 
or parameters, that are part of each payload. The SA payload is used to begin the 
establishment of an SA. The payload has a complex, hierarchical structure. The 
payload may contain multiple proposals. Each proposal may contain multiple pro-
tocols. Each protocol may contain multiple transforms. And each transform may 
contain multiple attributes. These elements are formatted as substructures within 
the payload as follows.
 
■Proposal: This substructure includes a proposal number, a protocol ID (AH, 
ESP, or IKE), an indicator of the number of transforms, and then a transform 
substructure. If more than one protocol is to be included in a proposal, then 
there is a subsequent proposal substructure with the same proposal number.
 
■Transform: Different protocols support different transform types. The trans-
forms are used primarily to define cryptographic algorithms to be used with a 
particular protocol.
 
■Attribute: Each transform may include attributes that modify or complete the 
specification of the transform. An example is key length.

20.5 / INTERNET KEY EXCHANGE 691
The Key Exchange payload can be used for a variety of key exchange tech-
niques, including Oakley, Diffie–Hellman, and the RSA-based key exchange used 
by PGP. The Key Exchange data field contains the data required to generate a ses-
sion key and is dependent on the key exchange algorithm used.
The Identification payload is used to determine the identity of communicating 
peers and may be used for determining authenticity of information. Typically the 
ID Data field will contain an IPv4 or IPv6 address.
The Certificate payload transfers a public-key certificate. The Certificate 
Encoding field indicates the type of certificate or certificate-related information, 
which may include the following:
 
■PKCS #7 wrapped X.509 certificate
 
■PGP certificate
 
■DNS signed key
 
■X.509 certificate—signature
 
■X.509 certificate—key exchange
 
■Kerberos tokens
 
■Certificate Revocation List (CRL)
 
■Authority Revocation List (ARL)
 
■SPKI certificate
At any point in an IKE exchange, the sender may include a Certificate Request 
payload to request the certificate of the other communicating entity. The payload 
may list more than one certificate type that is acceptable and more than one certifi-
cate authority that is acceptable.
The Authentication payload contains data used for message authentication 
purposes. The authentication method types so far defined are RSA digital signa-
ture, shared-key message integrity code, and DSS digital signature.
The Nonce payload contains random data used to guarantee liveness during 
an exchange and to protect against replay attacks.
The Notify payload contains either error or status information associated with 
this SA or this SA negotiation. The following table lists the IKE notify messages.
Error Messages
Status Messages
Unsupported Critical
Initial Contact
Payload
Set Window Size
Invalid IKE SPI
Additional TS Possible
Invalid Major Version
IPCOMP Supported
Invalid Syntax
NAT Detection Source IP
Invalid Payload Type
NAT Detection Destination IP
Invalid Message ID
Cookie
Invalid SPI
Use Transport Mode

692  CHAPTER 20 / IP SECURITY
Error Messages
Status Messages
No Proposal Chosen
HTTP Cert Lookup Supported
Invalid KE Payload
Rekey SA
Authentication Failed
ESP TFC Padding Not Supported
Single Pair Required
Non First Fragments Also
No Additional SAS
Internal Address Failure
Failed CP Required
TS Unacceptable
Invalid Selectors
The Delete payload indicates one or more SAs that the sender has deleted 
from its database and that therefore are no longer valid.
The Vendor ID payload contains a vendor-defined constant. The constant is 
used by vendors to identify and recognize remote instances of their implementa-
tions. This mechanism allows a vendor to experiment with new features while main-
taining backward compatibility.
The Traffic Selector payload allows peers to identify packet flows for process-
ing by IPsec services.
The Encrypted payload contains other payloads in encrypted form. The en-
crypted payload format is similar to that of ESP. It may include an IV if the encryp-
tion algorithm requires it and an ICV if authentication is selected.
The Configuration payload is used to exchange configuration information be-
tween IKE peers.
The Extensible Authentication Protocol (EAP) payload allows IKE SAs to 
be authenticated using EAP, which was discussed in Chapter 16.
 20.6 CRYPTOGRAPHIC SUITES
The IPsecv3 and IKEv3 protocols rely on a variety of types of cryptographic algo-
rithms. As we have seen in this book, there are many cryptographic algorithms of 
each type, each with a variety of parameters, such as key size. To promote interop-
erability, two RFCs define recommended suites of cryptographic algorithms and 
parameters for various applications.
RFC 4308 defines two cryptographic suites for establishing virtual private net-
works. Suite VPN-A matches the commonly used corporate VPN security used in 
older IKEv1 implementations at the time of the issuance of IKEv2 in 2005. Suite 
VPN-B provides stronger security and is recommended for new VPNs that imple-
ment IPsecv3 and IKEv2.
Table 20.4a lists the algorithms and parameters for the two suites. There are 
several points to note about these two suites. Note that for symmetric cryptography,

---
