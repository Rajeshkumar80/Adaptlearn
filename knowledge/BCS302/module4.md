# BCS302 — Module 4

## Input/Output and Memory Organization

**Subject:** BCS302 (Digital Design and Computer Organization)
**Module:** Module 4
**Content type:** textbook_fallback
**Sources:** R1_Computer_Organization_and_Architecture_Stallings.txt

---

CHAPTER 4 / CACHE MEMORY
 module. This may be equal to the word length, but is often larger, such as 64, 128, or 
256 bits. To clarify this point, consider three related concepts for internal memory:
 
• Word: The “natural” unit of organization of memory. The size of a word is typi-
cally equal to the number of bits used to represent an integer and to the instruc-
tion length. Unfortunately, there are many exceptions. For example, the CRAY 
C90 (an older model CRAY supercomputer) has a 64-bit word length but uses 
a 46-bit integer representation. The Intel x86 architecture has a wide variety of 
instruction lengths, expressed as multiples of bytes, and a word size of 32 bits.
 
• Addressable units: In some systems, the addressable unit is the word. However, 
many systems allow addressing at the byte level. In any case, the relationship 
between the length in bits A of an address and the number N of addressable 
units is 2A = N.
 
• Unit of transfer: For main memory, this is the number of bits read out of or 
written into memory at a time. The unit of transfer need not equal a word or 
an addressable unit. For external memory, data are often transferred in much 
larger units than a word, and these are referred to as blocks.
Another distinction among memory types is the method of accessing units of 
data. These include the following:
 
• Sequential access: Memory is organized into units of data, called records. 
Access must be made in a specific linear sequence. Stored addressing informa-
tion is used to separate records and assist in the retrieval process. A shared 
read–write mechanism is used, and this must be moved from its current loca-
tion to the desired location, passing and rejecting each intermediate record. 
Thus, the time to access an arbitrary record is highly variable. Tape units, dis-
cussed in Chapter 6, are sequential access.
Location
Internal (e.g., processor registers, cache, main
memory)
External (e.g., optical disks, magnetic
disks, tapes)
Capacity
Number of words
Number of bytes
Unit of Transfer
Word
Block
Access Method
Sequential
Direct
Random
Associative
Performance
Access time
Cycle time
Transfer rate
Physical Type
Semiconductor
Magnetic
Optical
Magneto-optical
Physical Characteristics
Volatile/nonvolatile
Erasable/nonerasable
Organization
Memory modules

4.1 / COMPUTER MEMORY SYSTEM OVERVIEW  115
 
• Direct access: As with sequential access, direct access involves a shared 
read–write mechanism. However, individual blocks or records have a unique 
address based on physical location. Access is accomplished by direct access 
to reach a general vicinity plus sequential searching, counting, or waiting to 
reach the final location. Again, access time is variable. Disk units, discussed in 
Chapter 6, are direct access.
 
• Random access: Each addressable location in memory has a unique, physically 
wired-in addressing mechanism. The time to access a given location is inde-
pendent of the sequence of prior accesses and is constant. Thus, any location 
can be selected at random and directly addressed and accessed. Main memory 
and some cache systems are random access.
 
• Associative: This is a random access type of memory that enables one to make 
a comparison of desired bit locations within a word for a specified match, and 
to do this for all words simultaneously. Thus, a word is retrieved based on a 
portion of its contents rather than its address. As with ordinary random-access 
memory, each location has its own addressing mechanism, and retrieval time 
is constant independent of location or prior access patterns. Cache memories 
may employ associative access.
From a user’s point of view, the two most important characteristics of memory 
are capacity and performance. Three performance parameters are used:
 
• Access time (latency): For random-access memory, this is the time it takes to 
perform a read or write operation, that is, the time from the instant that an 
address is presented to the memory to the instant that data have been stored 
or made available for use. For non-random-access memory, access time is the 
time it takes to position the read–write mechanism at the desired location.
 
• Memory cycle time: This concept is primarily applied to random-access memory 
and consists of the access time plus any additional time required before a second 
access can commence. This additional time may be required for transients to die 
out on signal lines or to regenerate data if they are read destructively. Note that 
memory cycle time is concerned with the system bus, not the processor.
 
• Transfer rate: This is the rate at which data can be transferred into or out of a 
memory unit. For random-access memory, it is equal to 1/(cycle time).
For non-random-access memory, the following relationship holds:
 
Tn = TA + n
R 
(4.1)
where
Tn = Average time to read or write n bits
TA = Average access time
n = Number of bits
R = Transfer rate, in bits per second (bps)
A variety of physical types of memory have been employed. The most com-
mon today are semiconductor memory, magnetic surface memory, used for disk and 
tape, and optical and magneto-optical.

116  CHAPTER 4 / CACHE MEMORY
Several physical characteristics of data storage are important. In a volatile 
memory, information decays naturally or is lost when electrical power is switched 
off. In a nonvolatile memory, information once recorded remains without deterio-
ration until deliberately changed; no electrical power is needed to retain informa-
tion. Magnetic-surface memories are nonvolatile. Semiconductor memory (memory 
on integrated circuits) may be either volatile or nonvolatile. Nonerasable memory 
cannot be altered, except by destroying the storage unit. Semiconductor memory of 
this type is known as read-only memory (ROM). Of necessity, a practical noneras-
able memory must also be nonvolatile.
For random-access memory, the organization is a key design issue. In this con-
text, organization refers to the physical arrangement of bits to form words. The 
obvious arrangement is not always used, as is explained in Chapter 5.
The Memory Hierarchy
The design constraints on a computer’s memory can be summed up by three ques-
tions: How much? How fast? How expensive?
The question of how much is somewhat open ended. If the capacity is there, 
applications will likely be developed to use it. The question of how fast is, in a sense, 
easier to answer. To achieve greatest performance, the memory must be able to 
keep up with the processor. That is, as the processor is executing instructions, we 
would not want it to have to pause waiting for instructions or operands. The final 
question must also be considered. For a practical system, the cost of memory must 
be reasonable in relationship to other components.
As might be expected, there is a trade-off among the three key characteristics 
of memory: capacity, access time, and cost. A variety of technologies are used to 
implement memory systems, and across this spectrum of technologies, the following 
relationships hold:
 
• Faster access time, greater cost per bit
 
• Greater capacity, smaller cost per bit
 
• Greater capacity, slower access time
The dilemma facing the designer is clear. The designer would like to use mem-
ory technologies that provide for large-capacity memory, both because the capac-
ity is needed and because the cost per bit is low. However, to meet performance 
requirements, the designer needs to use expensive, relatively lower-capacity memo-
ries with short access times.
The way out of this dilemma is not to rely on a single memory component or 
technology, but to employ a memory hierarchy. A typical hierarchy is illustrated in 
 
a. Decreasing cost per bit
 b. Increasing capacity
 
c. Increasing access time
 d. Decreasing frequency of access of the memory by the processor
Thus, smaller, more expensive, faster memories are supplemented by larger, 
cheaper, slower memories. The key to the success of this organization is item (d): 

4.1 / COMPUTER MEMORY SYSTEM OVERVIEW  117
decreasing frequency of access. We examine this concept in greater detail when we 
discuss the cache, later in this chapter, and virtual memory in Chapter 8. A brief 
explanation is provided at this point.
The use of two levels of memory to reduce average access time works in prin-
ciple, but only if conditions (a) through (d) apply. By employing a variety of tech-
nologies, a spectrum of memory systems exists that satisfies conditions (a) through 
(c). Fortunately, condition (d) is also generally valid.
The basis for the validity of condition (d) is a principle known as locality of 
reference [DENN68]. During the course of execution of a program, memory refer-
ences by the processor, for both instructions and data, tend to cluster. Programs 
typically contain a number of iterative loops and subroutines. Once a loop or sub-
routine is entered, there are repeated references to a small set of instructions. 
Similarly, operations on tables and arrays involve access to a clustered set of data 
words. Over a long period of time, the clusters in use change, but over a short period 
of time, the processor is primarily working with fixed clusters of memory references.
Inboard
memory
Outboard
storage
Off-line
storage
Main
memory
Magnetic disk
CD-ROM
CD-RW
DVD-RW
DVD-RAM
Blu-Ray
Magnetic tape
Cache
Reg-
isters

118  CHAPTER 4 / CACHE MEMORY
Example 4.1 Suppose that the processor has access to two levels of memory. Level 1 
contains 1000 words and has an access time of 0.01 μs; level 2 contains 100,000 words 
and has an access time of 0.1 μs. Assume that if a word to be accessed is in level 1, then 
the processor accesses it directly. If it is in level 2, then the word is ﬁrst transferred to 
level 1 and then accessed by the processor. For simplicity, we ignore the time required 
for the processor to determine whether the word is in level 1 or level 2. Figure 4.2 shows 
the general shape of the curve that covers this situation. The ﬁgure shows the average 
access time to a two-level memory as a function of the hit ratio H, where H is deﬁned as 
the fraction of all memory accesses that are found in the faster memory (e.g., the cache), 
T1 is the access time to level 1, and T2 is the access time to level 2.1 As can be seen, for 
high percentages of level 1 access, the average total access time is much closer to that of 
level 1 than that of level 2.
In our example, suppose 95% of the memory accesses are found in level 1. Then the 
average time to access a word can be expressed as
(0.95)(0.01 ms) + (0.05)(0.01 ms + 0.1 ms) = 0.0095 + 0.0055 = 0.015 ms
The average access time is much closer to 0.01 μs than to 0.1 μs, as desired.
1If the accessed word is found in the faster memory, that is defined as a hit. A miss occurs if the accessed 
word is not found in the faster memory.
T1
T1  T2
T2
Fraction of accesses involving only level 1 (hit ratio)
Average access time
Level 1 (hit ratio)
Accordingly, it is possible to organize data across the hierarchy such that the 
percentage of accesses to each successively lower level is substantially less than that 
of the level above. Consider the two-level example already presented. Let level 2 

4.1 / COMPUTER MEMORY SYSTEM OVERVIEW  119
memory contains all program instructions and data. The current clusters can be 
temporarily placed in level 1. From time to time, one of the clusters in level 1 will 
have to be swapped back to level 2 to make room for a new cluster coming in to 
level 1. On average, however, most references will be to instructions and data con-
tained in level 1.
This principle can be applied across more than two levels of memory, as sug-
gested by the hierarchy shown in Figure 4.1. The fastest, smallest, and most expen-
sive type of memory consists of the registers internal to the processor. Typically, a 
processor will contain a few dozen such registers, although some machines contain 
hundreds of registers. Main memory is the principal internal memory system of 
the computer. Each location in main memory has a unique address. Main memory 
is usually extended with a higher-speed, smaller cache. The cache is not usually 
visible to the programmer or, indeed, to the processor. It is a device for staging 
the movement of data between main memory and processor registers to improve 
performance.
The three forms of memory just described are, typically, volatile and employ 
semiconductor technology. The use of three levels exploits the fact that semicon-
ductor memory comes in a variety of types, which differ in speed and cost. Data are 
stored more permanently on external mass storage devices, of which the most com-
mon are hard disk and removable media, such as removable magnetic disk, tape, 
and optical storage. External, nonvolatile memory is also referred to as secondary 
memory or auxiliary memory. These are used to store program and data files and 
are usually visible to the programmer only in terms of files and records, as opposed 
to individual bytes or words. Disk is also used to provide an extension to main mem-
ory known as virtual memory, which is discussed in Chapter 8.
Other forms of memory may be included in the hierarchy. For example, large 
IBM mainframes include a form of internal memory known as expanded storage. 
This uses a semiconductor technology that is slower and less expensive than that 
of main memory. Strictly speaking, this memory does not fit into the hierarchy but 
is a side branch: Data can be moved between main memory and expanded storage 
but not between expanded storage and external memory. Other forms of secondary 
memory include optical and magneto-optical disks. Finally, additional levels can be 
effectively added to the hierarchy in software. A portion of main memory can be 
used as a buffer to hold data temporarily that is to be read out to disk. Such a tech-
nique, sometimes referred to as a disk cache,2 improves performance in two ways:
 
• Disk writes are clustered. Instead of many small transfers of data, we have a 
few large transfers of data. This improves disk performance and minimizes 
processor involvement.
 
• Some data destined for write-out may be referenced by a program before the 
next dump to disk. In that case, the data are retrieved rapidly from the soft-
ware cache rather than slowly from the disk.
Appendix 4A examines the performance implications of multilevel memory 
structures.
2Disk cache is generally a purely software technique and is not examined in this book. See [STAL12] for 
a discussion.

120  CHAPTER 4 / CACHE MEMORY
 4.2 CACHE MEMORY PRINCIPLES
Cache memory is designed to combine the memory access time of expensive, high-
speed memory combined with the large memory size of less expensive, lower-speed 
 memory. The concept is illustrated in Figure 4.3a. There is a relatively large and slow 
main memory together with a smaller, faster cache memory. The cache contains a 
copy of portions of main memory. When the processor attempts to read a word of 
memory, a check is made to determine if the word is in the cache. If so, the word is 
delivered to the processor. If not, a block of main memory, consisting of some fixed 
number of words, is read into the cache and then the word is delivered to the pro-
cessor. Because of the phenomenon of locality of reference, when a block of data is 
fetched into the cache to satisfy a single memory reference, it is likely that there will 
be future references to that same memory location or to other words in the block.
and typically larger than the L1 cache, and the L3 cache is slower and typically 
larger than the L2 cache.
ory consists of up to 2n addressable words, with each word having a unique n-bit 
address. For mapping purposes, this memory is considered to consist of a number 
of fixed-length blocks of K words each. That is, there are M = 2n/K blocks in main 
memory. The cache consists of m blocks, called lines.3 Each line contains K words, 
CPU
Word transfer
Fast
Fastest
Fast
Less
fast
Slow
Block transfer
Cache
Main memory
(a) Single cache
(b) Three-level cache organization
CPU
Level 1
(L1) cache
Level 2
(L2) cache
Level 3
(L3) cache
Main
memory
Slow
3In referring to the basic unit of the cache, the term line is used, rather than the term block, for two rea-
sons: (1) to avoid confusion with a main memory block, which contains the same number of data words as 
a cache line; and (2) because a cache line includes not only K words of data, just as a main memory block, 
but also includes tag and control bits.

4.2 / CACHE MEMORY PRINCIPLES  121
Memory
address
C  1
2n  1
Word
length
Block length
(K words)
Block 0
(K words)
Block M–1
Line
number
Tag
Block
(b) Main memory
(a) Cache
•
•
•
•
•
•
plus a tag of a few bits. Each line also includes control bits (not shown), such as a 
bit to indicate whether the line has been modified since being loaded into the cache. 
The length of a line, not including tag and control bits, is the line size. The line 
size may be as small as 32 bits, with each “word” being a single byte; in this case 
the line size is 4 bytes. The number of lines is considerably less than the number 
of main memory blocks (m V M). At any time, some subset of the blocks of 
memory resides in lines in the cache. If a word in a block of memory is read, that 
block is transferred to one of the lines of the cache. Because there are more blocks 
than lines, an individual line cannot be uniquely and permanently dedicated to a 
particular block. Thus, each line includes a tag that identifies which particular block 
is currently being stored. The tag is usually a portion of the main memory address, 
as described later in this section.
address (RA) of a word to be read. If the word is contained in the cache, it is deliv-
ered to the processor. Otherwise, the block containing that word is loaded into the 
cache, and the word is delivered to the processor. Figure 4.5 shows these last two 
operations occurring in parallel and reflects the organization shown in Figure 4.6, 
which is typical of contemporary cache organizations. In this organization, the cache 
connects to the processor via data, control, and address lines. The data and address 
lines also attach to data and address buffers, which attach to a system bus from 

122  CHAPTER 4 / CACHE MEMORY
which main memory is reached. When a cache hit occurs, the data and address buff-
ers are disabled and communication is only between processor and cache, with no 
system bus traffic. When a cache miss occurs, the desired address is loaded onto the 
system bus and the data are returned through the data buffer to both the cache and 
the processor. In other organizations, the cache is physically interposed between 
the processor and the main memory for all data, address, and control lines. In this 
latter case, for a cache miss, the desired word is first read into the cache and then 
transferred from cache to processor.
A discussion of the performance parameters related to cache use is contained 
in Appendix 4A.
Receive address
RA from CPU
Is block
containing RA
in cache?
Fetch RA word
and deliver
to CPU
DONE
Access main
memory for block
containing RA
Allocate cache
line for main
memory block
Deliver RA word
to CPU
Load main
memory block
into cache line
START
No
Yes

4.3 / ELEMENTS OF CACHE DESIGN  123
 4.3 ELEMENTS OF CACHE DESIGN
This section provides an overview of cache design parameters and reports some 
typical results. We occasionally refer to the use of caches in high-performance com-
puting (HPC). HPC deals with supercomputers and their software, especially for 
scientific applications that involve large amounts of data, vector and matrix com-
putation, and the use of parallel algorithms. Cache design for HPC is quite differ-
ent than for other hardware platforms and applications. Indeed, many researchers 
have found that HPC applications perform poorly on computer architectures that 
employ caches [BAIL93]. Other researchers have since shown that a cache hierar-
chy can be useful in improving performance if the application software is tuned to 
exploit the cache [WANG99, PRES01].4
Although there are a large number of cache implementations, there are a few 
basic design elements that serve to classify and differentiate cache architectures. 
Cache Addresses
Almost all nonembedded processors, and many embedded processors, support vir-
tual memory, a concept discussed in Chapter 8. In essence, virtual memory is a facil-
ity that allows programs to address memory from a logical point of view, without 
Processor
Cache
Address
Address
buffer
Data
buffer
Control
Data
Control
System bus
4For a general discussion of HPC, see [DOWD98].

124  CHAPTER 4 / CACHE MEMORY
Cache Addresses
Logical
Physical
Cache Size
Mapping Function
Direct
Associative
Set associative
Replacement Algorithm
Least recently used (LRU)
First in first out (FIFO)
Least frequently used (LFU)
Random
Write Policy
Write through
Write back
Line Size
Number of Caches
Single or two level
Unified or split
Processor
Main
memory
Cache
Logical address
Physical address
Data
MMU
(a) Logical cache
Processor
Main
memory
Cache
Logical address
Physical address
Data
MMU
(b) Physical cache
regard to the amount of main memory physically available. When virtual memory is 
used, the address fields of machine instructions contain virtual addresses. For reads 
to and writes from main memory, a hardware memory management unit (MMU) 
translates each virtual address into a physical address in main memory.

4.3 / ELEMENTS OF CACHE DESIGN  125
When virtual addresses are used, the system designer may choose to place the 
cache between the processor and the MMU or between the MMU and main mem-
ory (Figure 4.7). A logical cache, also known as a virtual cache, stores data using 
virtual addresses. The processor accesses the cache directly, without going through 
the MMU. A physical cache stores data using main memory physical addresses.
One obvious advantage of the logical cache is that cache access speed is faster 
than for a physical cache, because the cache can respond before the MMU performs 
an address translation. The disadvantage has to do with the fact that most virtual 
memory systems supply each application with the same virtual memory address 
space. That is, each application sees a virtual memory that starts at address 0. Thus, 
the same virtual address in two different applications refers to two different physi-
cal addresses. The cache memory must therefore be completely flushed with each 
application context switch, or extra bits must be added to each line of the cache to 
identify which virtual address space this address refers to.
The subject of logical versus physical cache is a complex one, and beyond the 
scope of this book. For a more in-depth discussion, see [CEKL97] and [JACO08].
Cache Size
The first item in Table 4.2, cache size, has already been discussed. We would like the 
size of the cache to be small enough so that the overall average cost per bit is close 
to that of main memory alone and large enough so that the overall average access 
time is close to that of the cache alone. There are several other motivations for 
minimizing cache size. The larger the cache, the larger the number of gates involved 
in addressing the cache. The result is that large caches tend to be slightly slower 
than small ones—even when built with the same integrated circuit technology and 
put in the same place on chip and circuit board. The available chip and board area 
also limits cache size. Because the performance of the cache is very sensitive to the 
nature of the workload, it is impossible to arrive at a single “optimum” cache size. 
Mapping Function
Because there are fewer cache lines than main memory blocks, an algorithm is 
needed for mapping main memory blocks into cache lines. Further, a means is 
needed for determining which main memory block currently occupies a cache line. 
The choice of the mapping function dictates how the cache is organized. Three 
techniques can be used: direct, associative, and set associative. We examine each 
of these in turn. In each case, we look at the general structure and then a specific 
example.
Example 4.2 For all three cases, the example includes the following elements:
 • The cache can hold 64 Kbytes.
 • Data are transferred between main memory and the cache in blocks of 4 bytes each. 
This means that the cache is organized as 16K = 214 lines of 4 bytes each.
 • The main memory consists of 16 Mbytes, with each byte directly addressable by 
a 24-bit address (224 = 16M). Thus, for mapping purposes, we can consider main 
memory to consist of 4M blocks of 4 bytes each.

126  CHAPTER 4 / CACHE MEMORY
Processor
Type
Year of 
Introduction
L1 Cachea
L2 Cache
L3 Cache
IBM 360/85
Mainframe
1968
16–32 kB
—
—
PDP-11/70
Minicomputer
1975
1 kB
—
—
VAX 11/780
Minicomputer
1978
16 kB
—
—
IBM 3033
Mainframe
1978
64 kB
—
—
IBM 3090
Mainframe
1985
128–256 kB
—
—
Intel 80486
PC
1989
8 kB
—
—
Pentium
PC
1993
8 kB/8 kB
256–512 kB
—
PowerPC 601
PC
1993
32 kB
—
—
PowerPC 620
PC
1996
32 kB/32 kB
—
—
PowerPC G4
PC/server
1999
32 kB/32 kB
256 kB to 1 MB
2 MB
IBM S/390 G6
Mainframe
1999
256 kB
8 MB
—
Pentium 4
PC/server
2000
8 kB/8 kB
256 kB
—
IBM SP
High-end server/
supercomputer
2000
64 kB/32 kB
8 MB
—
CRAY MTAb
Supercomputer
2000
8 kB
2 MB
—
Itanium
PC/server
2001
16 kB/16 kB
96 kB
4 MB
Itanium 2
PC/server
2002
32 kB
256 kB
6 MB
IBM POWER5
High-end server
2003
64 kB
1.9 MB
36 MB
CRAY XD-1
Supercomputer
2004
64 kB/64 kB
1 MB
—
IBM POWER6
PC/server
2007
64 kB/64 kB
4 MB
32 MB
IBM z10
Mainframe
2008
64 kB/128 kB
3 MB
24–48 MB
Intel Core i7  
EE 990
Workstation/
server
2011
6 * 32 kB/
32 kB
1.5 MB
12 MB
IBM zEnterprise 
Mainframe/
server
2011
24 * 64 kB/
128 kB
24 * 1.5 MB
24 MB L3 
192 MB L4
Notes:
a Two values separated by a slash refer to instruction and data caches.
b Both caches are instruction only; no data caches.
DIRECT MAPPING The simplest technique, known as direct mapping, maps each 
block of main memory into only one possible cache line. The mapping is expressed as
i = j modulo m
where
i = cache line number
j = main memory block number
m = number of lines in the cache
block of main memory maps into one unique line of the cache. The next m blocks 

4.3 / ELEMENTS OF CACHE DESIGN  127
of main memory map into the cache in the same fashion; that is, block Bm of main 
memory maps into line L0 of cache, block Bm+1 maps into line L1, and so on.
The mapping function is easily implemented using the main memory address. 
main memory address can be viewed as consisting of three fields. The least signifi-
cant w bits identify a unique word or byte within a block of main memory; in most 
contemporary machines, the address is at the byte level. The remaining s bits specify 
one of the 2s blocks of main memory. The cache logic interprets these s bits as a 
tag of s - r bits (most significant portion) and a line field of r bits. This latter field 
identifies one of the m = 2r lines of the cache. To summarize,
 
• Address length = (s + w) bits
 
• Number of addressable units = 2s+w words or bytes
 
• Block size = line size = 2w words or bytes
 
• Number of blocks in main memory = 2s+w
2w
= 2s
 
• Number of lines in cache = m = 2r
 
• Size of cache = 2r+w words or bytes
 
• Size of tag = (s - r) bits
(a) Direct mapping
First m blocks of
main memory
(equal to size of cache)
b
L0
Lm–1
L0
Lm–1
Bm–1
B0
b = length of block in bits
t = length of tag in bits
Cache memory
m lines
b
b
t
b
t
(b) Associative mapping
One block of
main memory
Cache memory

128  CHAPTER 4 / CACHE MEMORY
Word
Line
Tag
W0
W1
W2
W3
Compare
1 if match
0 if no match
0 if match
1 if no match
W4j
W(4j+1)
W(4j+2)
W(4j+3)
Tag
Data
Cache
L0
Li
Memory address
(Miss in cache)
(Hit in cache)
w
s – r
w
r
s + w
Main memory
Bj
B0
s
w
Lm–1
s – r
Example 4.2a Figure 4.10 shows our example system using direct mapping.5 In the 
example, m = 16K = 214 and i = j modulo 214. The mapping becomes
Cache Line
Starting Memory Address of Block
000000, 010000, …, FF0000
000004, 010004, …, FF0004
f
f
214 - 1
00FFFC, 01FFFC, …, FFFFFC
Note that no two blocks that map into the same line number have the same tag num-
ber. Thus, blocks with starting addresses 000000, 010000, …, FF0000 have tag numbers 00, 
01, …, FF, respectively.
Referring back to Figure 4.5, a read operation works as follows. The cache system is 
presented with a 24-bit address. The 14-bit line number is used as an index into the cache 
to access a particular line. If the 8-bit tag number matches the tag number currently stored 
in that line, then the 2-bit word number is used to select one of the 4 bytes in that line. 
Otherwise, the 22-bit tag-plus-line ﬁeld is used to fetch a block from main memory. The 
actual address that is used for the fetch is the 22-bit tag-plus-line concatenated with two 
0 bits, so that 4 bytes are fetched starting on a block boundary.
5In this and subsequent figures, memory values are represented in hexadecimal notation. See Chapter 9 
for a basic refresher on number systems (decimal, binary, hexadecimal).

4.3 / ELEMENTS OF CACHE DESIGN  129
The effect of this mapping is that blocks of main memory are assigned to lines 
of the cache as follows:
Cache line
Main memory blocks assigned
0, m, 2m, c , 2s - m
1, m + 1, 2m + 1, c, 2s - m + 1
f
f
m - 1
m - 1, 2m - 1, 3m - 1, c, 2s - 1
Thus, the use of a portion of the address as a line number provides a unique 
mapping of each block of main memory into the cache. When a block is actually 
111111111111111111111100
111111111111111111111000
111111110000000000000000
000101101111111111111100
000101100011001110011100
111111110000000000000100
000101100000000000000100
000101100000000000000000
000000001111111111111100
000000000000000000000000
000000000000000000000100
000000001111111111111000
FF
FF
FF
FF
13579246
Tag
Tag
(hex)
Main memory address (binary)
Tag
Data
32 bits
16K line cache
8 bits
8 bits
2 bits
Tag
Main memory address =
Line
Word
Line
number
Line + Word
Data
77777777
11235813
12345678
FEDCBA98
FEDCBA98
24682468
11223344
13579246
FF
0000
0001
0CE7
3FFE
3FFF
11235813
FEDCBA98
11223344
12345678
14 bits
32 bits
16-Mbyte main memory
Note: Memory address values are
in binary representation;
other values are in hexadecimal

130  CHAPTER 4 / CACHE MEMORY
read into its assigned line, it is necessary to tag the data to distinguish it from other 
blocks that can fit into that line. The most significant s - r bits serve this purpose.
The direct mapping technique is simple and inexpensive to implement. Its 
main disadvantage is that there is a fixed cache location for any given block. Thus, 
if a program happens to reference words repeatedly from two different blocks that 
map into the same line, then the blocks will be continually swapped in the cache, 
and the hit ratio will be low (a phenomenon known as thrashing).
Selective Victim Cache Simulator
One approach to lower the miss penalty is to remember what was discarded 
in case it is needed again. Since the discarded data has already been fetched, it can 
be used again at a small cost. Such recycling is possible using a victim cache. Victim 
cache was originally proposed as an approach to reduce the conflict misses of direct 
mapped caches without affecting its fast access time. Victim cache is a fully associative 
cache, whose size is typically 4 to 16 cache lines, residing between a direct mapped L1 
cache and the next level of memory. This concept is explored in Appendix D.
ASSOCIATIVE MAPPING Associative mapping overcomes the disadvantage of direct 
mapping by permitting each main memory block to be loaded into any line of the 
cache (Figure 4.8b). In this case, the cache control logic interprets a memory address 
simply as a Tag and a Word field. The Tag field uniquely identifies a block of main 
memory. To determine whether a block is in the cache, the cache control logic must 
simultaneously examine every line’s tag for a match. Figure 4.11 illustrates the logic. 
Tag
Word
W0
W1
W2
W3
Compare
W4j
W(4j+1)
W(4j+2)
W(4j+3)
Tag
Data
Cache
Memory address
(Miss in cache)
(Hit in cache)
w
w
s
s+w
Main memory
s
w
s
1 if match
0 if no match
0 if match
1 if no match
L0
Lj
B0
Bj
Lm–1

4.3 / ELEMENTS OF CACHE DESIGN  131
Example 4.2b Figure 4.12 shows our example using associative mapping. A main mem-
ory address consists of a 22-bit tag and a 2-bit byte number. The 22-bit tag must be stored 
with the 32-bit block of data for each line in the cache. Note that it is the leftmost (most 
signiﬁcant) 22 bits of the address that form the tag. Thus, the 24-bit hexadecimal address 
16339C has the 22-bit tag 058CE7. This is easily seen in binary notation:
memory address
0001
0110
0011
0011
1001
1100
(binary)
C
(hex)
tag (leftmost 22 bits)
0101
1000
1100
1110
0111
(binary)
C
E
(hex)
111111111111111111111100
111111111111111111111000
111111111111111111110100
000101100011001110011000
000101100011001110011100
000101100011001110100000
000000000000000000000100
000000000000000000000000
13579246
FEDCBA98
Tag
Data
32 bits
16K line cache
22 bits
Tag
Main memory address =
Word
Line
number
Data
24682468
11223344
33333333
11223344
3FFFFE
058CE7
000000
3FFFFF
0000
0001
3FFE
3FFF
FEDCBA98
13579246
3FFFFD
3FFD
33333333
24682468
32 bits
16-Mbyte main memory
2 bits
22 bits
000000
000001
Tag (hex)
058CE7
058CE8
058CE6
3FFFFE
3FFFFD
3FFFFF
Tag
Main memory address (binary)
Word
Note: Memory address values are
in binary representation;
other values are in hexadecimal

132  CHAPTER 4 / CACHE MEMORY
Note that no field in the address corresponds to the line number, so that the number 
of lines in the cache is not determined by the address format. To summarize,
 
• Address length = (s + w) bits
 
• Number of addressable units = 2s+w words or bytes
 
• Block size = line size = 2w words or bytes
 
• Number of blocks in main memory = 2s+w
2w = 2s
 
• Number of lines in cache = undetermined
 
• Size of tag = s bits
With associative mapping, there is flexibility as to which block to replace when 
a new block is read into the cache. Replacement algorithms, discussed later in this 
section, are designed to maximize the hit ratio. The principal disadvantage of asso-
ciative mapping is the complex circuitry required to examine the tags of all cache 
lines in parallel.
Cache Time Analysis Simulator
SET-ASSOCIATIVE MAPPING Set-associative mapping is a compromise that 
exhibits the strengths of both the direct and associative approaches while reducing 
their disadvantages.
In this case, the cache consists of a number sets, each of which consists of a 
number of lines. The relationships are
 m = n * k
 i = j modulo n
where
i = cache set number
j = main memory block number
m = number of lines in the cache
v = number of sets
k = number of lines in each set
This is referred to as k-way set-associative mapping. With set-associative map-
ping, block Bj can be mapped into any of the lines of set j. Figure 4.13a illustrates 
this mapping for the first n blocks of main memory. As with associative mapping, 
each word maps into multiple cache lines. For set-associative mapping, each word 
maps into all the cache lines in a specific set, so that main memory block B0 maps 
into set 0, and so on. Thus, the set-associative cache can be physically implemented 
as n associative caches. It is also possible to implement the set-associative cache as 
k direct mapping caches, as shown in Figure 4.13b. Each direct-mapped cache is 
referred to as a way, consisting of n lines. The first n lines of main memory are direct 
mapped into the n lines of each way; the next group of n lines of main memory are 
similarly mapped, and so on. The direct-mapped implementation is typically used 

4.3 / ELEMENTS OF CACHE DESIGN  133
for small degrees of associativity (small values of k) while the associative-mapped 
implementation is typically used for higher degrees of associativity [JACO08].
For set-associative mapping, the cache control logic interprets a memory 
address as three fields: Tag, Set, and Word. The d set bits specify one of n = 2d sets. 
The s bits of the Tag and Set fields specify one of the 2s blocks of main memory. 
tag in a memory address is quite large and must be compared to the tag of every line 
in the cache. With k-way set-associative mapping, the tag in a memory address is 
much smaller and is only compared to the k tags within a single set. To summarize,
 
• Address length = (s + w) bits
 
• Number of addressable units = 2s+w words or bytes
First v blocks of
main memory
(equal to number of sets)
Cache memory—way 1
Cache memory—way k
One
set
(b) k direct–mapped caches
v lines
Bv–1
B0
L0
Lv–1
(a) v associative–mapped caches
First v blocks of
main memory
(equal to number of sets)
Cache memory– set 0
Cache memory–set v–1
k lines
Bv–1
B0
L0
Lk–1

134  CHAPTER 4 / CACHE MEMORY
 
• Block size = line size = 2w words or bytes
 
• Number of blocks in main memory = 2s+w
2w
= 2s
 
• Number of lines in set = k
 
• Number of sets = n = 2d
 
• Number of lines in cache = m = kn = k * 2d
 
• Size of cache = k * 2d+w words or bytes
 
• Size of tag = (s - d) bits
Word
Set
Tag
Compare
Tag
Data
Cache
F0
Memory address
(Hit in cache)
s – d
w
d
s – d
s + w
Main memory
s + w
F1
Fk1
Fk
Fki
F2k1
Set 0
Set 1
B1
B0
Bj
1 if match
0 if no match
0 if match
1 if no match
(Miss in cache)
Example 4.2c Figure 4.15 shows our example using set-associative mapping with two 
lines in each set, referred to as two-way set-associative. The 13-bit set number identi-
ﬁes a unique set of two lines within the cache. It also gives the number of the block in 
main memory, modulo 213. This determines the mapping of blocks into lines. Thus, blocks 
000000, 008000, …, FF8000 of main memory map into cache set 0. Any of those blocks can 
be loaded into either of the two lines in the set. Note that no two blocks that map into the 
same cache set have the same tag number. For a read operation, the 13-bit set number is 
used to determine which set of two lines is to be examined. Both lines in the set are exam-
ined for a match with the tag number of the address to be accessed.

000101100111111111111100
111111111111111111111000
111111111000000000000000
000101100011001110011100
000101100000000000000000
000000001111111111111000
000000000000000000000000
13579246
Tag
(hex)
Tag
Data
32 bits
16K line cache
9 bits
Tag
Main memory address =
Set
Word
Tag
Data
Set
number
Data
77777777
11235813
12345678
FEDCBA98
FEDCBA98
24682468
11223344
02C
02C
02C
02C
1FF
1FF
1FF
1FF
77777777
13579246
02C
1FF
02C
02C
0000
0001
0CE7
1FFE
1FFF
02C
24682468
1FF
11235813
11223344
12345678
32 bits
16–Mbyte main memory
32 bits
9 bits
FEDCBA98
2 bits
13 bits
9 bits
111111111111111111111100
111111111000000000000100
000101100000000000000100
000000001111111111111100
000000000000000000000100
Tag
Main memory address (binary)
Set + Word
Note: Memory address values are
in binary representation;
other values are in hexadecimal

136  CHAPTER 4 / CACHE MEMORY
In the extreme case of n = m, k = 1, the set-associative technique reduces to 
direct mapping, and for n = 1, k = m, it reduces to associative mapping. The use of 
two lines per set (n = m/2, k = 2) is the most common set-associative organization. 
It significantly improves the hit ratio over direct mapping. Four-way set associative 
(n = m/4, k = 4) makes a modest additional improvement for a relatively small 
additional cost [MAYB84, HILL89]. Further increases in the number of lines per 
set have little effect.
performance as a function of cache size [GENU04]. The difference in performance 
between direct and two-way set associative is significant up to at least a cache size of 
64 kB. Note also that the difference between two-way and four-way at 4 kB is much 
less than the difference in going from for 4 kB to 8 kB in cache size. The complexity 
of the cache increases in proportion to the associativity, and in this case would not 
be justifiable against increasing cache size to 8 or even 16 Kbytes. A final point to 
note is that beyond about 32 kB, increase in cache size brings no significant increase 
in performance.
The results of Figure 4.16 are based on simulating the execution of a GCC 
compiler. Different applications may yield different results. For example, [CANT01] 
reports on the results for cache performance using many of the CPU2000 SPEC 
benchmarks. The results of [CANT01] in comparing hit ratio to cache size follow 
the same pattern as Figure 4.16, but the specific values are somewhat different.
Cache Simulator
Multitask Cache Simulator
0.0
1k
Hit ratio
2k
4k
8k
16k
Cache size (bytes)
Direct
Two-way
Four-way
Eight-way
Sixteen-way
32k
64k
128k
256k
512k
1M
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

4.3 / ELEMENTS OF CACHE DESIGN  137
Replacement Algorithms
Once the cache has been filled, when a new block is brought into the cache, one 
of the existing blocks must be replaced. For direct mapping, there is only one pos-
sible line for any particular block, and no choice is possible. For the associative 
and set-associative techniques, a replacement algorithm is needed. To achieve high 
speed, such an algorithm must be implemented in hardware. A number of algo-
rithms have been tried. We mention four of the most common. Probably the most 
effective is least recently used (LRU): Replace that block in the set that has been in 
the cache longest with no reference to it. For two-way set associative, this is easily 
implemented. Each line includes a USE bit. When a line is referenced, its USE bit 
is set to 1 and the USE bit of the other line in that set is set to 0. When a block is to 
be read into the set, the line whose USE bit is 0 is used. Because we are assuming 
that more recently used memory locations are more likely to be referenced, LRU 
should give the best hit ratio. LRU is also relatively easy to implement for a fully 
associative cache. The cache mechanism maintains a separate list of indexes to all 
the lines in the cache. When a line is referenced, it moves to the front of the list. 
For replacement, the line at the back of the list is used. Because of its simplicity of 
implementation, LRU is the most popular replacement algorithm.
Another possibility is first-in-first-out (FIFO): Replace that block in the set 
that has been in the cache longest. FIFO is easily implemented as a round-robin 
or circular buffer technique. Still another possibility is least frequently used (LFU): 
Replace that block in the set that has experienced the fewest references. LFU could 
be implemented by associating a counter with each line. A technique not based on 
usage (i.e., not LRU, LFU, FIFO, or some variant) is to pick a line at random from 
among the candidate lines. Simulation studies have shown that random replacement 
provides only slightly inferior performance to an algorithm based on usage [SMIT82].
Write Policy
When a block that is resident in the cache is to be replaced, there are two cases to 
consider. If the old block in the cache has not been altered, then it may be overwrit-
ten with a new block without first writing out the old block. If at least one write 
operation has been performed on a word in that line of the cache, then main mem-
ory must be updated by writing the line of cache out to the block of memory before 
bringing in the new block. A variety of write policies, with performance and eco-
nomic trade-offs, is possible. There are two problems to contend with. First, more 
than one device may have access to main memory. For example, an I/O module 
may be able to read-write directly to memory. If a word has been altered only in the 
cache, then the corresponding memory word is invalid. Further, if the I/O device 
has altered main memory, then the cache word is invalid. A more complex problem 
occurs when multiple processors are attached to the same bus and each processor 
has its own local cache. Then, if a word is altered in one cache, it could conceivably 
invalidate a word in other caches.
The simplest technique is called write through. Using this technique, all write 
operations are made to main memory as well as to the cache, ensuring that main 
memory is always valid. Any other processor–cache module can monitor traffic to 
main memory to maintain consistency within its own cache. The main disadvantage 

138  CHAPTER 4 / CACHE MEMORY
of this technique is that it generates substantial memory traffic and may create a bot-
tleneck. An alternative technique, known as write back, minimizes memory writes. 
With write back, updates are made only in the cache. When an update occurs, a 
dirty bit, or use bit, associated with the line is set. Then, when a block is replaced, it 
is written back to main memory if and only if the dirty bit is set. The problem with 
write back is that portions of main memory are invalid, and hence accesses by I/O 
modules can be allowed only through the cache. This makes for complex circuitry 
and a potential bottleneck. Experience has shown that the percentage of memory 
references that are writes is on the order of 15% [SMIT82]. However, for HPC 
applications, this number may approach 33% (vector-vector multiplication) and can 
go as high as 50% (matrix transposition).
In a bus organization in which more than one device (typically a processor) 
has a cache and main memory is shared, a new problem is introduced. If data in one 
cache are altered, this invalidates not only the corresponding word in main memory, 
but also that same word in other caches (if any other cache happens to have that 
same word). Even if a write-through policy is used, the other caches may contain 
invalid data. A system that prevents this problem is said to maintain cache coher-
ency. Possible approaches to cache coherency include the following:
 
• Bus watching with write through: Each cache controller monitors the address 
lines to detect write operations to memory by other bus masters. If another 
master writes to a location in shared memory that also resides in the cache 
memory, the cache controller invalidates that cache entry. This strategy de-
pends on the use of a write-through policy by all cache controllers.
 
• Hardware transparency: Additional hardware is used to ensure that all updates 
to main memory via cache are reflected in all caches. Thus, if one processor 
modifies a word in its cache, this update is written to main memory. In addi-
tion, any matching words in other caches are similarly updated.
 
• Noncacheable memory: Only a portion of main memory is shared by more 
than one processor, and this is designated as noncacheable. In such a system, 
all accesses to shared memory are cache misses, because the shared memory 
is never copied into the cache. The noncacheable memory can be identified 
using chip-select logic or high-address bits.
Example 4.3 Consider a cache with a line size of 32 bytes and a main memory that re-
quires 30 ns to transfer a 4-byte word. For any line that is written at least once before 
being swapped out of the cache, what is the average number of times that the line must 
be written before being swapped out for a write-back cache to be more efﬁcient that a 
write-through cache?
For the write-back case, each dirty line is written back once, at swap-out time, taking 
8 * 30 = 240 ns. For the write-through case, each update of the line requires that one 
word be written out to main memory, taking 30 ns. Therefore, if the average line that gets 
written at least once gets written more than 8 times before swap out, then write back is 
more efﬁcient.

4.3 / ELEMENTS OF CACHE DESIGN  139
Cache coherency is an active field of research. This topic is explored further 
in Part Five.
Line Size
Another design element is the line size. When a block of data is retrieved and placed 
in the cache, not only the desired word but also some number of adjacent words are 
retrieved. As the block size increases from very small to larger sizes, the hit ratio 
will at first increase because of the principle of locality, which states that data in the 
vicinity of a referenced word are likely to be referenced in the near future. As the 
block size increases, more useful data are brought into the cache. The hit ratio will 
begin to decrease, however, as the block becomes even bigger and the probability 
of using the newly fetched information becomes less than the probability of reusing 
the information that has to be replaced. Two specific effects come into play:
 
• Larger blocks reduce the number of blocks that fit into a cache. Because each 
block fetch overwrites older cache contents, a small number of blocks results 
in data being overwritten shortly after they are fetched.
 
• As a block becomes larger, each additional word is farther from the requested 
word and therefore less likely to be needed in the near future.
The relationship between block size and hit ratio is complex, depending on 
the locality characteristics of a particular program, and no definitive optimum value 
has been found. A size of from 8 to 64 bytes seems reasonably close to optimum 
[SMIT87, PRZY88, PRZY90, HAND98]. For HPC systems, 64- and 128-byte cache 
line sizes are most frequently used.
Number of Caches
When caches were originally introduced, the typical system had a single cache. More 
recently, the use of multiple caches has become the norm. Two aspects of this design 
issue concern the number of levels of caches and the use of unified versus split caches.
MULTILEVEL CACHES As logic density has increased, it has become possible to 
have a cache on the same chip as the processor: the on-chip cache. Compared with 
a cache reachable via an external bus, the on-chip cache reduces the processor’s 
external bus activity and therefore speeds up execution times and increases overall 
system performance. When the requested instruction or data is found in the on-chip 
cache, the bus access is eliminated. Because of the short data paths internal to 
the processor, compared with bus lengths, on-chip cache accesses will complete 
appreciably faster than would even zero-wait state bus cycles. Furthermore, during 
this period the bus is free to support other transfers.
The inclusion of an on-chip cache leaves open the question of whether an 
 off-chip, or external, cache is still desirable. Typically, the answer is yes, and most con-
temporary designs include both on-chip and external caches. The simplest such organi-
zation is known as a two-level cache, with the internal cache designated as level 1 (L1) 
and the external cache designated as level 2 (L2). The reason for including an L2 cache 
is the following: If there is no L2 cache and the processor makes an access request 
for a memory location not in the L1 cache, then the processor must access DRAM or 

140  CHAPTER 4 / CACHE MEMORY
ROM memory across the bus. Due to the typically slow bus speed and slow  memory 
access time, this results in poor performance. On the other hand, if an L2 SRAM (static 
RAM) cache is used, then frequently the missing information can be quickly retrieved. 
If the SRAM is fast enough to match the bus speed, then the data can be accessed 
using a zero-wait state transaction, the fastest type of bus transfer.
Two features of contemporary cache design for multilevel caches are note-
worthy. First, for an off-chip L2 cache, many designs do not use the system bus as 
the path for transfer between the L2 cache and the processor, but use a separate 
data path, so as to reduce the burden on the system bus. Second, with the continued 
shrinkage of processor components, a number of processors now incorporate the L2 
cache on the processor chip, improving performance.
The potential savings due to the use of an L2 cache depends on the hit rates 
in both the L1 and L2 caches. Several studies have shown that, in general, the use 
of a second-level cache does improve performance (e.g., see [AZIM92], [NOVI93], 
[HAND98]). However, the use of multilevel caches does complicate all of the design 
issues related to caches, including size, replacement algorithm, and write policy; see 
[HAND98] and [PEIR99] for discussions.
formance as a function of cache size [GENU04]. The figure assumes that both 
caches have the same line size and shows the total hit ratio. That is, a hit is counted 
if the desired data appears in either the L1 or the L2 cache. The figure shows the 
impact of L2 on total hits with respect to L1 size. L2 has little effect on the total 
number of cache hits until it is at least double the L1 cache size. Note that the steep-
est part of the slope for an L1 cache of 8 Kbytes is for an L2 cache of 16 Kbytes. 
Again for an L1 cache of 16 Kbytes, the steepest part of the curve is for an L2 cache 
size of 32 Kbytes. Prior to that point, the L2 cache has little, if any, impact on total 
cache performance. The need for the L2 cache to be larger than the L1 cache to 
0.78
0.80
0.82
0.84
0.86
0.88
0.90
0.92
0.94
0.96
0.98
1k
2k
4k
8k
16k
32k
L1  16k
64k
128k 256k 512k
1M
2M
Hit ratio
L2 cache size (bytes)
L1  8k

4.4 / PENTIUM 4 CACHE ORGANIZATION  141
affect performance makes sense. If the L2 cache has the same line size and capacity 
as the L1 cache, its contents will more or less mirror those of the L1 cache.
With the increasing availability of on-chip area available for cache, most con-
temporary microprocessors have moved the L2 cache onto the processor chip and 
added an L3 cache. Originally, the L3 cache was accessible over the external bus. 
More recently, most microprocessors have incorporated an on-chip L3 cache. In 
either case, there appears to be a performance advantage to adding the third level 
(e.g., see [GHAI98]). Further, large systems, such as the IBM mainframe zEnter-
prise systems, now incorporate 3 on-chip cache levels and a fourth level of cache 
shared across multiple chips [CURR11].
UNIFIED VERSUS SPLIT CACHES When the on-chip cache first made an appearance, 
many of the designs consisted of a single cache used to store references to both data 
and instructions. More recently, it has become common to split the cache into two: 
one dedicated to instructions and one dedicated to data. These two caches both exist 
at the same level, typically as two L1 caches. When the processor attempts to fetch an 
instruction from main memory, it first consults the instruction L1 cache, and when the 
processor attempts to fetch data from main memory, it first consults the data L1 cache.
There are two potential advantages of a unified cache:
 
• For a given cache size, a unified cache has a higher hit rate than split caches 
because it balances the load between instruction and data fetches automati-
cally. That is, if an execution pattern involves many more instruction fetches 
than data fetches, then the cache will tend to fill up with instructions, and if an 
execution pattern involves relatively more data fetches, the opposite will occur.
 
• Only one cache needs to be designed and implemented.
The trend is toward split caches at the L1 and unified caches for higher levels, 
particularly for superscalar machines, which emphasize parallel instruction execu-
tion and the prefetching of predicted future instructions. The key advantage of the 
split cache design is that it eliminates contention for the cache between the instruc-
tion fetch/decode unit and the execution unit. This is important in any design that 
relies on the pipelining of instructions. Typically, the processor will fetch instructions 
ahead of time and fill a buffer, or pipeline, with instructions to be executed. Suppose 
now that we have a unified instruction/data cache. When the execution unit performs 
a memory access to load and store data, the request is submitted to the unified cache. 
If, at the same time, the instruction prefetcher issues a read request to the cache for 
an instruction, that request will be temporarily blocked so that the cache can service 
the execution unit first, enabling it to complete the currently executing instruction. 
This cache contention can degrade performance by interfering with efficient use of 
the instruction pipeline. The split cache structure overcomes this difficulty.
 4.4 PENTIUM 4 CACHE ORGANIZATION
The evolution of cache organization is seen clearly in the evolution of Intel micro-
processors (Table 4.4). The 80386 does not include an on-chip cache. The 80486 
includes a single on-chip cache of 8 Kbytes, using a line size of 16 bytes and a 

142  CHAPTER 4 / CACHE MEMORY
 four-way set-associative organization. All of the Pentium processors include two 
on-chip L1 caches, one for data and one for instructions. For the Pentium 4, the 
L1 data cache is 16 Kbytes, using a line size of 64 bytes and a four-way set-associa-
tive organization. The Pentium 4 instruction cache is described subsequently. The 
Pentium II also includes an L2 cache that feeds both of the L1 caches. The L2 cache 
is eight-way set associative with a size of 512 kB and a line size of 128 bytes. An L3 
cache was added for the Pentium III and became on-chip with high-end versions of 
the Pentium 4.
lighting the placement of the three caches. The processor core consists of four major 
components:
 
• Fetch/decode unit: Fetches program instructions in order from the L2 cache, 
decodes these into a series of micro-operations, and stores the results in the L1 
instruction cache.
 
• Out-of-order execution logic: Schedules execution of the micro-operations 
subject to data dependencies and resource availability; thus, micro-operations 
may be scheduled for execution in a different order than they were fetched 
from the instruction stream. As time permits, this unit schedules speculative 
execution of micro-operations that may be required in the future.
Problem
Solution
Processor on Which 
Feature First Appears
External memory slower than the system 
bus.
Add external cache using faster 
memory technology.
Increased processor speed results in 
external bus becoming a bottleneck for 
cache access.
Move external cache on-chip, 
operating at the same speed as the 
processor.
Internal cache is rather small, due to  
limited space on chip.
Add external L2 cache using faster 
technology than main memory.
Contention occurs when both the 
Instruction Prefetcher and the Execution 
Unit simultaneously require access to 
the cache. In that case, the Prefetcher is 
stalled while the Execution Unit’s data 
access takes place.
Create separate data and instruc-
tion caches.
Pentium
Increased processor speed results in 
external bus becoming a bottleneck for 
L2 cache access.
Create separate back-side bus that 
runs at higher speed than the main 
(front-side) external bus. The BSB 
is dedicated to the L2 cache.
Pentium Pro
Move L2 cache on to the proces-
sor chip.
Pentium II
Some applications deal with massive 
databases and must have rapid access 
to large amounts of data. The on-chip 
caches are too small.
Add external L3 cache.
Pentium III
Move L3 cache on-chip.
Pentium 4

Load
address
unit
Integer register file
L1 data cache (16 kB)
FP register file
Store
address
unit
Simple
integer
ALU
Instruction
fetch/decode
unit
Out-of-order
execution
logic
L2 cache
(512 kB)
L3 cache
(1 MB)
L1 instruction
cache (12K ops)
Simple
integer
ALU
Complex
integer
ALU
FP/
MMX
unit
FP
move
unit
System bus
bits
bits

144  CHAPTER 4 / CACHE MEMORY
 
• Execution units: These units executes micro-operations, fetching the required 
data from the L1 data cache and temporarily storing results in registers.
 
• Memory subsystem: This unit includes the L2 and L3 caches and the system 
bus, which is used to access main memory when the L1 and L2 caches have a 
cache miss and to access the system I/O resources.
Unlike the organization used in all previous Pentium models, and in most 
other processors, the Pentium 4 instruction cache sits between the instruction 
decode logic and the execution core. The reasoning behind this design decision is 
as follows: As discussed more fully in Chapter 16, the Pentium process decodes, or 
translates, Pentium machine instructions into simple RISC-like instructions called 
micro-operations. The use of simple, fixed-length micro-operations enables the use 
of superscalar pipelining and scheduling techniques that enhance performance. 
However, the Pentium machine instructions are cumbersome to decode; they have a 
variable number of bytes and many different options. It turns out that performance 
is enhanced if this decoding is done independently of the scheduling and pipelining 
logic. We return to this topic in Chapter 16.
The data cache employs a write-back policy: Data are written to main mem-
ory only when they are removed from the cache and there has been an update. The 
Pentium 4 processor can be dynamically configured to support write-through caching.
The L1 data cache is controlled by two bits in one of the control registers, 
labeled the CD (cache disable) and NW (not write-through) bits (Table 4.5). There 
are also two Pentium 4 instructions that can be used to control the data cache: INVD 
invalidates (flushes) the internal cache memory and signals the external cache (if 
any) to invalidate. WBINVD writes back and invalidates internal cache and then 
writes back and invalidates external cache.
Both the L2 and L3 caches are eight-way setassociative with a line size of 
128 bytes.
 4.5 ARM CACHE ORGANIZATION
The ARM cache organization has evolved with the overall architecture of the ARM 
family, reflecting the relentless pursuit of performance that is the driving force for 
all microprocessor designers.
while all subsequent models use a split instruction/data cache. All of the ARM 
Control Bits
Operating Mode
CD
NW
Cache Fills
Write Throughs
Invalidates
Enabled
Enabled
Enabled
Disabled
Enabled
Enabled
Disabled
Disabled
Disabled
Note: CD = 0; NW = 1 is an invalid combination.

4.5 / ARM CACHE ORGANIZATION  145
designs use a set-associative cache, with the degree of associativity and the line size 
varying. ARM cached cores with an MMU use a logical cache for processor families 
ARM7 through ARM10, including the Intel StongARM and Intel Xscale proces-
sors. The ARM11 family uses a physical cache. The distinction between logical and 
physical cache is discussed earlier in this chapter (Figure 4.7).
An interesting feature of the ARM architecture is the use of a small first-in-
first out (FIFO) write buffer to enhance memory write performance. The write 
buffer is interposed between the cache and main memory and consists of a set of 
addresses and a set of data words. The write buffer is small compared to the cache, 
and may hold up to four independent addresses. Typically, the write buffer is ena-
bled for all of main memory, although it may be selectively disabled at the page 
level. Figure 4.19, taken from [SLOS04], shows the relationship among the write 
buffer, cache, and main memory.
Core
Cache 
Type
Cache Size 
(kB)
Cache Line 
Size (words)
Associativity
Location
Write 
Buffer Size 
(words)
ARM720T
Unified
4-way
Logical
ARM920T
Split
16/16 D/I
64-way
Logical
ARM926EJ-S
Split
4-128/4-128 D/I
4-way
Logical
ARM1022E
Split
16/16 D/I
64-way
Logical
ARM1026EJ-S
Split
4-128/4-128 D/I
4-way
Logical
Intel 
StrongARM
Split
16/16 D/I
32-way
Logical
Intel Xscale
Split
32/32 D/I
32-way
Logical
ARM1136-JF-S
Split
4-64/4-64 D/I
4-way
Physical
Write
buffer
ARM core
Main
memory
Level 1
cache(s)
Level 2
cache
R15
R0
Address
translation
Virtual
address
Physical address

146  CHAPTER 4 / CACHE MEMORY
The write buffer operates as follows: When the processor performs a write to 
a bufferable area, the data are placed in the write buffer at processor clock speed 
and the processor continues execution. A write occurs when data in the cache are 
written back to main memory. Thus, the data to be written are transferred from the 
cache to the write buffer. The write buffer then performs the external write in paral-
lel. If, however, the write buffer is full (either because there are already the maxi-
mum number of words of data in the buffer or because there is no slot for the new 
address) then the processor is stalled until there is sufficient space in the buffer. As 
non-write operations proceed, the write buffer continues to write to main memory 
until the buffer is completely empty.
Data written to the write buffer are not available for reading back into the 
cache until the data have transferred from the write buffer to main memory. This 
is the principal reason that the write buffer is quite small. Even so, unless there 
is a high proportion of writes in an executing program, the write buffer improves 
performance.
 4.6 RECOMMENDED READING
[JACO08] is an excellent, up-to-date treatment of cache design. Another thorough treat-
ment is [HAND98]. A classic paper that is still well worth reading is [SMIT82]; it surveys 
the various elements of cache design and presents the results of an extensive set of analyses. 
Another interesting classic is [WILK65], which is probably the first paper to introduce the 
concept of the cache. [GOOD83] also provides a useful analysis of cache behavior. Another 
worthwhile analysis is [BELL74]. [AGAR89] presents a detailed examination of a variety of 
cache design issues related to multiprogramming and multiprocessing. [HIGB90] provides a 
set of simple formulas that can be used to estimate cache performance as a function of vari-
ous cache parameters.
AGAR89 Agarwal, A. Analysis of Cache Performance for Operating Systems and 
Multiprogramming. Boston: Kluwer Academic Publishers, 1989.
BELL74 Bell, J.; Casasent, D.; and Bell, C. “An Investigation into Alternative Cache 
Organizations.” IEEE Transactions on Computers, April 1974.
GOOD83 Goodman, J. “Using Cache Memory to Reduce Processor-Memory Band-
width.” Proceedings, 10th Annual International Symposium on Computer Archi-
tecture, 1983. Reprinted in [HILL00].
HAND98 Handy, J. The Cache Memory Book. San Diego: Academic Press, 1998.
HIGB90 Higbie, L. “Quick and Easy Cache Performance Analysis.” Computer Archi-
tecture News, June 1990.
JACO08 Jacob, B.; Ng, S.; and Wang, D. Memory Systems: Cache, DRAM, Disk. 
Boston: Morgan Kaufmann, 2008.
SMIT82 Smith, A. “Cache Memories.” ACM Computing Surveys, September 1982.
WILK65 Wilkes, M. “Slave Memories and Dynamic Storage Allocation,” IEEE 
Transactions on Electronic Computers, April 1965. Reprinted in [HILL00].

4.7 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS  147
 4.7 KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS
Key Terms
access time
associative mapping
secondary memory
cache hit
cache line
cache memory
cache miss
cache set
data cache
direct access
direct mapping
high-performance computing 
(HPC)
hit
hit ratio
instruction cache
L1 cache
L2 cache
L3 cache
line
locality
logical cache
memory hierarchy
miss
multilevel cache
physical address
physical cache
random access
replacement algorithm
secondary memory
sequential access
set-associative mapping
spatial locality
split cache
tag
temporal locality
unified cache
virtual address
virtual cache
write back
write through
Review Questions
 4.1 
What are the differences among sequential access, direct access, and random access?
 4.2 
What is the general relationship among access time, memory cost, and capacity?
 4.3 
How does the principle of locality relate to the use of multiple memory levels?
 4.4 
What are the differences among direct mapping, associative mapping, and set-associa-
tive mapping?
 4.5 
For a direct-mapped cache, a main memory address is viewed as consisting of three 
fields. List and define the three fields.
 4.6 
For an associative cache, a main memory address is viewed as consisting of two fields. 
List and define the two fields.
 4.7 
For a set-associative cache, a main memory address is viewed as consisting of three 
fields. List and define the three fields.
 4.8 
What is the distinction between spatial locality and temporal locality?
 4.9 
In general, what are the strategies for exploiting spatial locality and temporal locality?
Problems
 4.1 
A set-associative cache consists of 64 lines, or slots, divided into four-line sets. Main 
memory contains 4K blocks of 128 words each. Show the format of main memory 
addresses.
 4.2 
A two-way set-associative cache has lines of 16 bytes and a total size of 8 Kbytes. The 
64-Mbyte main memory is byte addressable. Show the format of main memory addresses.
 4.3 
For the hexadecimal main memory addresses 111111, 666666, BBBBBB, show the 
following information, in hexadecimal format:
a. Tag, Line, and Word values for a direct-mapped cache, using the format of 
b. Tag and Word values for an associative cache, using the format of Figure 4.12
c. Tag, Set, and Word values for a two-way set-associative cache, using the format of 

148  CHAPTER 4 / CACHE MEMORY
 4.4 
List the following values:
a. For the direct cache example of Figure 4.10: address length, number of address-
able units, block size, number of blocks in main memory, number of lines in cache, 
size of tag
b. For the associative cache example of Figure 4.12: address length, number of 
addressable units, block size, number of blocks in main memory, number of lines 
in cache, size of tag
c. For the two-way set-associative cache example of Figure 4.15: address length, 
number of addressable units, block size, number of blocks in main memory, num-
ber of lines in set, number of sets, number of lines in cache, size of tag
 4.5 
Consider a 32-bit microprocessor that has an on-chip 16-Kbyte four-way set-
associative cache. Assume that the cache has a line size of four 32-bit words. Draw a 
block diagram of this cache showing its organization and how the different address 
fields are used to determine a cache hit/miss. Where in the cache is the word from 
memory location ABCDE8F8 mapped?
 4.6 
Given the following specifications for an external cache memory: four-way set asso-
ciative; line size of two 16-bit words; able to accommodate a total of 4K 32-bit words 
from main memory; used with a 16-bit processor that issues 24-bit addresses. Design 
the cache structure with all pertinent information and show how it interprets the pro-
cessor’s addresses.
 4.7 
The Intel 80486 has an on-chip, unified cache. It contains 8 Kbytes and has a four-
way set-associative organization and a block length of four 32-bit words. The cache is 
organized into 128 sets. There is a single “line valid bit” and three bits, B0, B1, and B2 
(the “LRU” bits), per line. On a cache miss, the 80486 reads a 16-byte line from main 
memory in a bus memory read burst. Draw a simplified diagram of the cache and 
show how the different fields of the address are interpreted.
 4.8 
Consider a machine with a byte addressable main memory of 216 bytes and block size 
of 8 bytes. Assume that a direct mapped cache consisting of 32 lines is used with this 
machine.
a. How is a 16-bit memory address divided into tag, line number, and byte 
number?
b. Into what line would bytes with each of the following addresses be stored?
0001 0001 0001 1011
1100 0011 0011 0100
1101 0000 0001 1101
1010 1010 1010 1010
c. Suppose the byte with address 0001 1010 0001 1010 is stored in the cache. What are 
the addresses of the other bytes stored along with it?
d. How many total bytes of memory can be stored in the cache?
e. Why is the tag also stored in the cache?
 4.9 
For its on-chip cache, the Intel 80486 uses a replacement algorithm referred to as 
pseudo least recently used. Associated with each of the 128 sets of four lines (labeled 
L0, L1, L2, L3) are three bits B0, B1, and B2. The replacement algorithm works as fol-
lows: When a line must be replaced, the cache will first determine whether the most 
recent use was from L0 and L1 or L2 and L3. Then the cache will determine which 
of the pair of blocks was least recently used and mark it for replacement. Figure 4.20 
illustrates the logic.
a. Specify how the bits B0, B1, and B2 are set and then describe in words how they 
are used in the replacement algorithm depicted in Figure 4.20.
b. Show that the 80486 algorithm approximates a true LRU algorithm. Hint: Con-
sider the case in which the most recent order of usage is L0, L2, L3, L1.
c. Demonstrate that a true LRU algorithm would require 6 bits per set.

4.7 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS  149
 4.10 
A set-associative cache has a block size of four 16-bit words and a set size of 2. The 
cache can accommodate a total of 4096 words. The main memory size that is cacheable 
is 64K * 32 bits. Design the cache structure and show how the processor’s addresses 
are interpreted.
 4.11 
Consider a memory system that uses a 32-bit address to address at the byte level, plus 
a cache that uses a 64-byte line size.
a. Assume a direct mapped cache with a tag field in the address of 20 bits. Show 
the address format and determine the following parameters: number of address-
able units, number of blocks in main memory, number of lines in cache, size 
of tag.
b. Assume an associative cache. Show the address format and determine the follow-
ing parameters: number of addressable units, number of blocks in main memory, 
number of lines in cache, size of tag.
c. Assume a four-way set-associative cache with a tag field in the address of 9 bits. 
Show the address format and determine the following parameters: number of ad-
dressable units, number of blocks in main memory, number of lines in set, number 
of sets in cache, number of lines in cache, size of tag.
 4.12 
Consider a computer with the following characteristics: total of 1Mbyte of main 
memory; word size of 1 byte; block size of 16 bytes; and cache size of 64 Kbytes.
a. For the main memory addresses of F0010, 01234, and CABBE, give the corre-
sponding tag, cache line address, and word offsets for a direct-mapped cache.
b. Give any two main memory addresses with different tags that map to the same 
cache slot for a direct-mapped cache.
c. For the main memory addresses of F0010 and CABBE, give the corresponding tag 
and offset values for a fully-associative cache.
d. For the main memory addresses of F0010 and CABBE, give the corresponding 
tag, cache set, and offset values for a two-way set-associative cache.
 4.13 
Describe a simple technique for implementing an LRU replacement algorithm in a 
four-way set-associative cache.
 4.14 
Consider again Example 4.3. How does the answer change if the main memory uses a 
block transfer capability that has a first-word access time of 30 ns and an access time 
of 5 ns for each word thereafter?
All four lines in
the set valid?
B0  0?
Yes
Yes
No
Yes
No
Yes, L0 or L1
least recently used
No, L2 or L3
least recently used
No
B1  0?
Replace
L0
Replace
L1
Replace
L2
Replace
L3
B2  0?
Replace
nonvalid line

150  CHAPTER 4 / CACHE MEMORY
 4.15 
Consider the following code:
for (i = 0; i 6 20; i+ +)
for (j = 0; j 6 10; j+ +)
a[i] = a[i]* j
a. Give one example of the spatial locality in the code.
b. Give one example of the temporal locality in the code.
 4.16 
Generalize Equations (4.2) and (4.3), in Appendix 4A, to N-level memory hierarchies.
 4.17 
A computer system contains a main memory of 32K 16-bit words. It also has a 4K-
word cache divided into four-line sets with 64 words per line. Assume that the cache 
is initially empty. The processor fetches words from locations 0, 1, 2, . . . , 4351 in that 
order. It then repeats this fetch sequence nine more times. The cache is 10 times faster 
than main memory. Estimate the improvement resulting from the use of the cache. 
Assume an LRU policy for block replacement.
 4.18 
Consider a cache of 4 lines of 16 bytes each. Main memory is divided into blocks of 
16 bytes each. That is, block 0 has bytes with addresses 0 through 15, and so on. Now 
consider a program that accesses memory in the following sequence of addresses:
Once: 63 through 70
Loop ten times: 15 through 32; 80 through 95
a. Suppose the cache is organized as direct mapped. Memory blocks 0, 4, and so on 
are assigned to line 1; blocks 1, 5, and so on to line 2; and so on. Compute the hit 
ratio.
b. Suppose the cache is organized as two-way set associative, with two sets of two 
lines each. Even-numbered blocks are assigned to set 0 and odd-numbered blocks 
are assigned to set 1. Compute the hit ratio for the two-way set-associative cache 
using the least recently used replacement scheme.
 4.19 
Consider a memory system with the following parameters:
 Tc = 100 ns  Cc = 10-4 +/bit
 Tm = 1200 ns  Cm = 10-5 +/bit
a. What is the cost of 1 Mbyte of main memory?
b. What is the cost of 1 Mbyte of main memory using cache memory technology?
c. If the effective access time is 10% greater than the cache access time, what is the 
hit ratio H?
 4.20 
a.  Consider an L1 cache with an access time of 1 ns and a hit ratio of H = 0.95. Sup-
pose that we can change the cache design (size of cache, cache organization) such 
that we increase H to 0.97, but increase access time to 1.5 ns. What conditions must 
be met for this change to result in improved performance?
b. Explain why this result makes intuitive sense.
 4.21 
Consider a single-level cache with an access time of 2.5 ns, a line size of 64 bytes, 
and a hit ratio of H = 0.95. Main memory uses a block transfer capability that has 
a first-word (4 bytes) access time of 50 ns and an access time of 5 ns for each word 
thereafter.
a. What is the access time when there is a cache miss? Assume that the cache waits 
until the line has been fetched from main memory and then re-executes for a hit.
b. Suppose that increasing the line size to 128 bytes increases the H to 0.97. Does this 
reduce the average memory access time?
 4.22 
A computer has a cache, main memory, and a disk used for virtual memory. If a refer-
enced word is in the cache, 20 ns are required to access it. If it is in main memory but 
not in the cache, 60 ns are needed to load it into the cache, and then the reference is 
started again. If the word is not in main memory, 12 ms are required to fetch the word 
from disk, followed by 60 ns to copy it to the cache, and then the reference is started 
again. The cache hit ratio is 0.9 and the main memory hit ratio is 0.6. What is the aver-
age time in nanoseconds required to access a referenced word on this system?

4.7 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS  151
 4.23 
Consider a cache with a line size of 64 bytes. Assume that on average 30% of the lines 
in the cache are dirty. A word consists of 8 bytes.
a. Assume there is a 3% miss rate (0.97 hit ratio). Compute the amount of main 
memory traffic, in terms of bytes per instruction for both write-through and write-
back policies. Memory is read into cache one line at a time. However, for write 
back, a single word can be written from cache to main memory.
b. Repeat part a for a 5% rate.
c. Repeat part a for a 7% rate.
d. What conclusion can you draw from these results?
 4.24 
On the Motorola 68020 microprocessor, a cache access takes two clock cycles. Data 
access from main memory over the bus to the processor takes three clock cycles in the 
case of no wait state insertion; the data are delivered to the processor in parallel with 
delivery to the cache.
a. Calculate the effective length of a memory cycle given a hit ratio of 0.9 and a 
clocking rate of 16.67 MHz.
b. Repeat the calculations assuming insertion of two wait states of one cycle each per 
memory cycle. What conclusion can you draw from the results?
 4.25 
Assume a processor having a memory cycle time of 300 ns and an instruction process-
ing rate of 1 MIPS. On average, each instruction requires one bus memory cycle for 
instruction fetch and one for the operand it involves.
a. Calculate the utilization of the bus by the processor.
b. Suppose the processor is equipped with an instruction cache and the associated hit 
ratio is 0.5. Determine the impact on bus utilization.
 4.26 
The performance of a single-level cache system for a read operation can be character-
ized by the following equation:
Ta = Tc + (1 - H)Tm
where Ta is the average access time, Tc is the cache access time, Tm is the memory 
access time (memory to processor register), and H is the hit ratio. For simplicity, we 
assume that the word in question is loaded into the cache in parallel with the load to 
processor register. This is the same form as Equation (4.2).
a. Define Tb = time to transfer a line between cache and main memory, and W = 
fraction of write references. Revise the preceding equation to account for writes 
as well as reads, using a write-through policy.
b. Define Wb as the probability that a line in the cache has been altered. Provide an 
equation for Ta for the write-back policy.
 4.27 
For a system with two levels of cache, define Tc1 = first-level cache access time; Tc2 =
 second-level cache access time; Tm = memory access time; H1 = first-level cache hit 
ratio; H2 = combined first/second level cache hit ratio. Provide an equation for Ta for 
a read operation.
 4.28 
Assume the following performance characteristics on a cache read miss: one clock 
cycle to send an address to main memory and four clock cycles to access a 32-bit word 
from main memory and transfer it to the processor and cache.
a. If the cache line size is one word, what is the miss penalty (i.e., additional time 
required for a read in the event of a read miss)?
b. What is the miss penalty if the cache line size is four words and a multiple, non-
burst transfer is executed?
c. What is the miss penalty if the cache line size is four words and a transfer is 
executed, with one clock cycle per word transfer?
 4.29 
For the cache design of the preceding problem, suppose that increasing the line size 
from one word to four words results in a decrease of the read miss rate from 3.2% to 
1.1%. For both the nonburst transfer and the burst transfer case, what is the average 
miss penalty, averaged over all reads, for the two different line sizes?

152  CHAPTER 4 / CACHE MEMORY
APPENDIX 4A  PERFORMANCE CHARACTERISTICS  
OF TWO-LEVEL MEMORIES
In this chapter, reference is made to a cache that acts as a buffer between main 
memory and processor, creating a two-level internal memory. This two-level archi-
tecture exploits a property known as locality to provide improved performance over 
a comparable one-level memory.
The main memory cache mechanism is part of the computer architecture, 
implemented in hardware and typically invisible to the operating system. There are 
two other instances of a two-level memory approach that also exploit locality and 
that are, at least partially, implemented in the operating system: virtual memory 
and the disk cache (Table 4.7). Virtual memory is explored in Chapter 8; disk cache 
is beyond the scope of this book but is examined in [STAL12]. In this appendix, 
we look at some of the performance characteristics of two-level memories that are 
common to all three approaches.
Locality
The basis for the performance advantage of a two-level memory is a principle 
known as locality of reference [DENN68]. This principle states that memory ref-
erences tend to cluster. Over a long period of time, the clusters in use change, but 
over a short period of time, the processor is primarily working with fixed clusters of 
memory references.
Intuitively, the principle of locality makes sense. Consider the following line 
of reasoning:
 
1. Except for branch and call instructions, which constitute only a small fraction 
of all program instructions, program execution is sequential. Hence, in most 
cases, the next instruction to be fetched immediately follows the last instruc-
tion fetched.
 
2. It is rare to have a long uninterrupted sequence of procedure calls followed by 
the corresponding sequence of returns. Rather, a program remains confined to a 
rather narrow window of procedure-invocation depth. Thus, over a short period 
of time references to instructions tend to be localized to a few procedures.
Main Memory 
Cache
Virtual Memory  
(paging)
Disk Cache
Typical access time 
ratios
5 : 1 (main memory 
vs. cache)
106 : 1 (main memory vs. 
disk)
106 : 1 (main memory 
vs. disk)
Memory management 
system
Implemented by  
special hardware
Combination of hard-
ware and system software
System software
Typical block or page 
size
4 to 128 bytes  
(cache block)
64 to 4096 bytes (virtual 
memory page)
64 to 4096 bytes  
(disk block or pages)
Access of processor 
to second level
Direct access
Indirect access
Indirect access

APPENDIX 4A  153
 
3. Most iterative constructs consist of a relatively small number of instructions 
repeated many times. For the duration of the iteration, computation is there-
fore confined to a small contiguous portion of a program.
 
4. In many programs, much of the computation involves processing data struc-
tures, such as arrays or sequences of records. In many cases, successive refer-
ences to these data structures will be to closely located data items.
This line of reasoning has been confirmed in many studies. With reference 
to point 1, a variety of studies have analyzed the behavior of high-level language 
programs. Table 4.8 includes key results, measuring the appearance of various 
statement types during execution, from the following studies. The earliest study of 
programming language behavior, performed by Knuth [KNUT71], examined a col-
lection of FORTRAN programs used as student exercises. Tanenbaum [TANE78] 
published measurements collected from over 300 procedures used in operating-
system programs and written in a language that supports structured programming 
(SAL). Patterson and Sequein [PATT82a] analyzed a set of measurements taken 
from compilers and programs for typesetting, computer-aided design (CAD), sort-
ing, and file comparison. The programming languages C and Pascal were studied. 
Huck [HUCK83] analyzed four programs intended to represent a mix of general-
purpose scientific computing, including fast Fourier transform and the integration 
of systems of differential equations. There is good agreement in the results of this 
mixture of languages and applications that branching and call instructions represent 
only a fraction of statements executed during the lifetime of a program. Thus, these 
studies confirm assertion 1.
With respect to assertion 2, studies reported in [PATT85a] provide confirma-
tion. This is illustrated in Figure 4.21, which shows call-return behavior. Each call is 
represented by the line moving down and to the right, and each return by the line 
moving up and to the right. In the figure, a window with depth equal to 5 is defined. 
Only a sequence of calls and returns with a net movement of 6 in either direction 
causes the window to move. As can be seen, the executing program can remain 
within a stationary window for long periods of time. A study by the same analysts of 
C and Pascal programs showed that a window of depth 8 will need to shift only on 
less than 1% of the calls or returns [TAMI83].
Study
Language
Workload
[HUCK83]
Pascal
Scientific
[KNUT71]
FORTRAN
Student
[PATT82a]
[TANE78]
SAL
System
Pascal
System
C
System
Assign
Loop
Call
IF
GOTO
—
—
Other
—

154  CHAPTER 4 / CACHE MEMORY
A distinction is made in the literature between spatial locality and temporal 
locality. Spatial locality refers to the tendency of execution to involve a number of 
memory locations that are clustered. This reflects the tendency of a processor to 
access instructions sequentially. Spatial location also reflects the tendency of a pro-
gram to access data locations sequentially, such as when processing a table of data. 
Temporal locality refers to the tendency for a processor to access memory locations 
that have been used recently. For example, when an iteration loop is executed, the 
processor executes the same set of instructions repeatedly.
Traditionally, temporal locality is exploited by keeping recently used instruc-
tion and data values in cache memory and by exploiting a cache hierarchy. Spatial 
locality is generally exploited by using larger cache blocks and by incorporating 
prefetching mechanisms (fetching items of anticipated use) into the cache control 
logic. Recently, there has been considerable research on refining these techniques 
to achieve greater performance, but the basic strategies remain the same.
Operation of Two-Level Memory
The locality property can be exploited in the formation of a two-level memory. The 
upper-level memory (M1) is smaller, faster, and more expensive (per bit) than the 
lower-level memory (M2). M1 is used as a temporary store for part of the contents 
of the larger M2. When a memory reference is made, an attempt is made to access 
the item in M1. If this succeeds, then a quick access is made. If not, then a block of 
memory locations is copied from M2 to M1 and the access then takes place via M1. 
Because of locality, once a block is brought into M1, there should be a number of 
accesses to locations in that block, resulting in fast overall service.
To express the average time to access an item, we must consider not only the 
speeds of the two levels of memory, but also the probability that a given reference 
can be found in M1. We have
Ts = H * T1 + (1 - H) * (T1 + T2)
 
= T1 + (1 - H) * T2 
(4.2)
w  5
t  33
Time
(in units of calls/returns)
Nesting
depth
Return
Call

APPENDIX 4A  155
where
Ts = average (system) access time
T1 = access time of M1 (e.g., cache, disk cache)
T2 = access time of M2 (e.g., main memory, disk)
H = hit ratio (fraction of time reference is found in M1)
for a high percentage of hits, the average total access time is much closer to that of 
M1 than M2.
Performance
Let us look at some of the parameters relevant to an assessment of a two-level 
memory mechanism. First consider cost. We have
 
Cs = C1S1 + C2S2
S1 + S2
 
(4.3)
where
Cs = average cost per bit for the combined two-level memory
C1 = average cost per bit of upper-level memory M1
C2 = average cost per bit of lower-level memory M2
S1 = size of M1
S2 = size of M2
We would like Cs  C2. Given that C1 W C2, this requires S1 6 S2. 
Next, consider access time. For a two-level memory to provide a significant 
performance improvement, we need to have Ts approximately equal to T1 (Ts  T1). 
Given that T1 is much less than T2 (T1 V T2), a hit ratio of close to 1 is needed.
So we would like M1 to be small to hold down cost, and large to improve the 
hit ratio and therefore the performance. Is there a size of M1 that satisfies both 
requirements to a reasonable extent? We can answer this question with a series of 
subquestions:
 
• What value of hit ratio is needed so that Ts  T1?
 
• What size of M1 will assure the needed hit ratio?
 
• Does this size satisfy the cost requirement?
To get at this, consider the quantity T1/Ts, which is referred to as the access effi-
ciency. It is a measure of how close average access time (Ts) is to M1 access time 
(T1). From Equation (4.2),
 
T1
Ts
=
1 + (1 - H) T2
T1
 
(4.4)
parameter. Typically, on-chip cache access time is about 25 to 50 times faster than 
main memory access time (i.e., T2/T1 is 25 to 50), off-chip cache access time is about 
5 to 15 times faster than main memory access time (i.e., T2/T1 is 5 to 15), and main 

156  CHAPTER 4 / CACHE MEMORY
Access efficiency  T1/Ts
0.0
0.2
0.4
0.6
0.8
1.0
Hit ratio  H
0.1
0.01
0.001
r  10
r  1
r  100
r  1000
8 9100
Relative size of two levels (S2/S1)
Relative combined cost (Cs/C2)
(C1/C2)  1000
(C1/C2)  100
(C1/C2)  10
8 91000
8 9 10
1000

APPENDIX 4A  157
memory access time is about 1000 times faster than disk access time (T2/T1 = 1000). 
Thus, a hit ratio in the range of near 0.9 would seem to be needed to satisfy the per-
formance requirement.
We can now phrase the question about relative memory size more exactly. Is a 
hit ratio of, say, 0.8 or better reasonable for S1 V S2? This will depend on a number 
of factors, including the nature of the software being executed and the details of the 
design of the two-level memory. The main determinant is, of course, the degree of 
locality. Figure 4.24 suggests the effect that locality has on the hit ratio. Clearly, if 
M1 is the same size as M2, then the hit ratio will be 1.0: All of the items in M2 are 
always stored also in M1. Now suppose that there is no locality; that is, references 
are completely random. In that case the hit ratio should be a strictly linear func-
tion of the relative memory size. For example, if M1 is half the size of M2, then at 
any time half of the items from M2 are also in M1 and the hit ratio will be 0.5. In 
practice, however, there is some degree of locality in the references. The effects of 
moderate and strong locality are indicated in the figure. Note that Figure 4.24 is not 
derived from any specific data or model; the figure suggests the type of performance 
that is seen with various degrees of locality.
So if there is strong locality, it is possible to achieve high values of hit ratio 
even with relatively small upper-level memory size. For example, numerous studies 
have shown that rather small cache sizes will yield a hit ratio above 0.75 regardless of 
the size of main memory (e.g., [AGAR89], [PRZY88], [STRE83], and [SMIT82]). A 
cache in the range of 1K to 128K words is generally adequate, whereas main mem-
ory is now typically in the gigabyte range. When we consider virtual  memory and 
No locality
Moderate
locality
Strong
locality
Hit ratio
Relative memory size (S1/S2)
0.0
0.0
0.2
0.4
0.6
0.8
1.0
0.2
0.4
0.6
0.8
1.0

158  CHAPTER 4 / CACHE MEMORY
disk cache, we will cite other studies that confirm the same phenomenon, namely 
that a relatively small M1 yields a high value of hit ratio because of locality.
This brings us to the last question listed earlier: Does the relative size of the 
two memories satisfy the cost requirement? The answer is clearly yes. If we need 
only a relatively small upper-level memory to achieve good performance, then the 
average cost per bit of the two levels of memory will approach that of the cheaper 
lower-level memory.
Please note that with L2 cache, or even L2 and L3 caches, involved, analysis is 
much more complex. See [PEIR99] and [HAND98] for discussions.

CHAPTER
INTERNAL MEMORY
 5.1  Semiconductor Main Memory
Organization
DRAM and SRAM
Types of ROM
Chip Logic
Chip Packaging
Module Organization
Interleaved Memory
 5.2  Error Correction
 5.3  Advanced DRAM Organization
Synchronous DRAM
Rambus DRAM
DDR SDRAM
Cache DRAM
 5.4  Recommended Reading
 5.5  Key Terms, Review Questions, and Problems

160  CHAPTER 5 / INTERNAL MEMORY
We begin this chapter with a survey of semiconductor main memory subsystems, 
including ROM, DRAM, and SRAM memories. Then we look at error control 
techniques used to enhance memory reliability. Following this, we look at more 
advanced DRAM architectures.
 5.1 SEMICONDUCTOR MAIN MEMORY
In earlier computers, the most common form of random-access storage for com-
puter main memory employed an array of doughnut-shaped ferromagnetic loops 
referred to as cores. Hence, main memory was often referred to as core, a term that 
persists to this day. The advent of, and advantages of, microelectronics has long 
since vanquished the magnetic core memory. Today, the use of semiconductor chips 
for main memory is almost universal. Key aspects of this technology are explored 
in this section.
Organization
The basic element of a semiconductor memory is the memory cell. Although a vari-
ety of electronic technologies are used, all semiconductor memory cells share cer-
tain properties:
 
• They exhibit two stable (or semistable) states, which can be used to represent 
binary 1 and 0.
 
• They are capable of being written into (at least once), to set the state.
 
• They are capable of being read to sense the state.
has three functional terminals capable of carrying an electrical signal. The select 
 terminal, as the name suggests, selects a memory cell for a read or write opera-
tion. The control terminal indicates read or write. For writing, the other terminal 
 provides an electrical signal that sets the state of the cell to 1 or 0. For reading, that 
terminal is used for output of the cell’s state. The details of the internal organiza-
tion, functioning, and timing of the memory cell depend on the specific integrated 
circuit technology used and are beyond the scope of this book, except for a brief 
summary. For our purposes, we will take it as given that individual cells can be 
selected for reading and writing operations.
LEARNING OBJECTIVES
After studying this chapter, you should be able to:
 Present an overview of the principle types of semiconductor main memory.
 Understand the operation of a basic code that can detect and correct single-
bit errors in 8-bit words.
 Summarize the properties of contemporary advanced DRAM organizations.

5.1 / SEMICONDUCTOR MAIN MEMORY  161
DRAM and SRAM
All of the memory types that we will explore in this chapter are random access. That is, 
individual words of memory are directly accessed through wired-in addressing logic.
is referred to as random-access memory (RAM). This is, in fact, a misuse of the 
term, because all of the types listed in the table are random access. One distin-
guishing characteristic of memory that is designated as RAM is that it is possible 
both to read data from the memory and to write new data into the memory easily 
and rapidly. Both the reading and writing are accomplished through the use of 
electrical signals.
The other distinguishing characteristic of RAM is that it is volatile. A RAM 
must be provided with a constant power supply. If the power is interrupted, then 
the data are lost. Thus, RAM can be used only as temporary storage. The two tradi-
tional forms of RAM used in computers are DRAM and SRAM.
DYNAMIC RAM RAM technology is divided into two technologies: dynamic and 
static. A dynamic RAM (DRAM) is made with cells that store data as charge on 
capacitors. The presence or absence of charge in a capacitor is interpreted as a 
binary 1 or 0. Because capacitors have a natural tendency to discharge, dynamic 
Cell
Select
Data in
Control
(a) Write
Cell
Select
Sense
Control
(b) Read
Memory Type
Category
Erasure
Write 
Mechanism
Volatility
Random-access memory  
(RAM)
Read-write 
memory
Electrically, 
byte-level
Electrically
Volatile
Read-only memory (ROM)
Programmable ROM (PROM)
Read-only 
memory
Not possible
Masks
Erasable PROM (EPROM)
UV light, 
chip-level
Electrically Erasable PROM 
(EEPROM)
Read-mostly 
memory
Electrically, 
byte-level
Electrically
Nonvolatile
Flash memory
Electrically, 
block-level

162  CHAPTER 5 / INTERNAL MEMORY
RAMs require periodic charge refreshing to maintain data storage. The term 
dynamic refers to this tendency of the stored charge to leak away, even with power 
continuously applied.
The address line is activated when the bit value from this cell is to be read or written. 
The transistor acts as a switch that is closed (allowing current to flow) if a voltage is 
applied to the address line and open (no current flows) if no voltage is present on 
the address line.
For the write operation, a voltage signal is applied to the bit line; a high volt-
age represents 1, and a low voltage represents 0. A signal is then applied to the 
address line, allowing a charge to be transferred to the capacitor.
For the read operation, when the address line is selected, the transistor turns 
on and the charge stored on the capacitor is fed out onto a bit line and to a sense 
amplifier. The sense amplifier compares the capacitor voltage to a reference value 
and determines if the cell contains a logic 1 or a logic 0. The readout from the cell 
discharges the capacitor, which must be restored to complete the operation.
Although the DRAM cell is used to store a single bit (0 or 1), it is essentially 
an analog device. The capacitor can store any charge value within a range; a thresh-
old value determines whether the charge is interpreted as 1 or 0.
STATIC RAM In contrast, a static RAM (SRAM) is a digital device that uses the 
same logic elements used in the processor. In a SRAM, binary values are stored 
using traditional flip-flop logic-gate configurations (see Chapter 11 for a description 
of flip-flops). A static RAM will hold its data as long as power is supplied to it.
Bit line
B
Address line
Ground
dc voltage
Address
line
(b) Static RAM (SRAM) cell
(a) Dynamic RAM (DRAM) cell
Bit line
B
T5
T6
T3
T4
T1
T2
C1
C2
Bit line
B
Transistor
Ground
Storage
capacitor

5.1 / SEMICONDUCTOR MAIN MEMORY  163
(T1, T2, T3, T4) are cross connected in an arrangement that produces a stable logic 
state. In logic state 1, point C1 is high and point C2 is low; in this state, T1 and T4 are off 
and T2 and T3 are on.1 In logic state 0, point C1 is low and point C2 is high; in this state, 
T1 and T4 are on and T2 and T3 are off. Both states are stable as long as the direct 
 current (dc) voltage is applied. Unlike the DRAM, no refresh is needed to retain data.
As in the DRAM, the SRAM address line is used to open or close a switch. 
The address line controls two transistors (T5 and T6). When a signal is applied to 
this line, the two transistors are switched on, allowing a read or write operation. For 
a write operation, the desired bit value is applied to line B, while its complement 
is applied to line B. This forces the four transistors (T1, T2, T3, T4) into the proper 
state. For a read operation, the bit value is read from line B.
SRAM VERSUS DRAM Both static and dynamic RAMs are volatile; that is, 
power must be continuously supplied to the memory to preserve the bit values. 
A dynamic memory cell is simpler and smaller than a static memory cell. Thus, a 
DRAM is more dense (smaller cells = more cells per unit area) and less expensive 
than a corresponding SRAM. On the other hand, a DRAM requires the supporting 
refresh circuitry. For larger memories, the fixed cost of the refresh circuitry is more 
than compensated for by the smaller variable cost of DRAM cells. Thus, DRAMs 
tend to be favored for large memory requirements. A final point is that SRAMs are 
somewhat faster than DRAMs. Because of these relative characteristics, SRAM is 
used for cache memory (both on and off chip), and DRAM is used for main memory.
Types of ROM
As the name suggests, a read-only memory (ROM) contains a permanent pattern 
of data that cannot be changed. A ROM is nonvolatile; that is, no power source is 
required to maintain the bit values in memory. While it is possible to read a ROM, 
it is not possible to write new data into it. An important application of ROMs is 
microprogramming, discussed in Part Four. Other potential applications include
 
• Library subroutines for frequently wanted functions
 
• System programs
 
• Function tables
For a modest-sized requirement, the advantage of ROM is that the data or program 
is permanently in main memory and need never be loaded from a secondary storage 
device.
A ROM is created like any other integrated circuit chip, with the data actually 
wired into the chip as part of the fabrication process. This presents two problems:
 
• The data insertion step includes a relatively large fixed cost, whether one or 
thousands of copies of a particular ROM are fabricated.
 
• There is no room for error. If one bit is wrong, the whole batch of ROMs must 
be thrown out.
1The circles associated with T3 and T4 in Figure 5.2b indicate signal negation.

164  CHAPTER 5 / INTERNAL MEMORY
When only a small number of ROMs with a particular memory content is 
needed, a less expensive alternative is the programmable ROM (PROM). Like the 
ROM, the PROM is nonvolatile and may be written into only once. For the PROM, 
the writing process is performed electrically and may be performed by a supplier 
or customer at a time later than the original chip fabrication. Special equipment is 
required for the writing or “programming” process. PROMs provide flexibility and 
convenience. The ROM remains attractive for high-volume production runs.
Another variation on read-only memory is the read-mostly memory, which is 
useful for applications in which read operations are far more frequent than write 
operations but for which nonvolatile storage is required. There are three common 
forms of read-mostly memory: EPROM, EEPROM, and flash memory.
The optically erasable programmable read-only memory (EPROM) is read 
and written electrically, as with PROM. However, before a write operation, all the 
storage cells must be erased to the same initial state by exposure of the packaged 
chip to ultraviolet radiation. Erasure is performed by shining an intense ultraviolet 
light through a window that is designed into the memory chip. This erasure proc-
ess can be performed repeatedly; each erasure can take as much as 20 minutes to 
perform. Thus, the EPROM can be altered multiple times and, like the ROM and 
PROM, holds its data virtually indefinitely. For comparable amounts of storage, the 
EPROM is more expensive than PROM, but it has the advantage of the multiple 
update capability.
A more attractive form of read-mostly memory is electrically erasable pro-
grammable read-only memory (EEPROM). This is a read-mostly memory that can 
be written into at any time without erasing prior contents; only the byte or bytes 
addressed are updated. The write operation takes considerably longer than the read 
operation, on the order of several hundred microseconds per byte. The EEPROM 
combines the advantage of nonvolatility with the flexibility of being updatable in 
place, using ordinary bus control, address, and data lines. EEPROM is more expen-
sive than EPROM and also is less dense, supporting fewer bits per chip.
Another form of semiconductor memory is flash memory (so named because 
of the speed with which it can be reprogrammed). First introduced in the mid-1980s, 
flash memory is intermediate between EPROM and EEPROM in both cost and 
functionality. Like EEPROM, flash memory uses an electrical erasing technology. 
An entire flash memory can be erased in one or a few seconds, which is much faster 
than EPROM. In addition, it is possible to erase just blocks of memory rather than 
an entire chip. Flash memory gets its name because the microchip is organized so 
that a section of memory cells are erased in a single action or “flash.” However, 
flash memory does not provide byte-level erasure. Like EPROM, flash memory 
uses only one transistor per bit, and so achieves the high density (compared with 
EEPROM) of EPROM.
Chip Logic
As with other integrated circuit products, semiconductor memory comes in pack-
aged chips (Figure 2.7). Each chip contains an array of memory cells.
In the memory hierarchy as a whole, we saw that there are trade-offs among 
speed, capacity, and cost. These trade-offs also exist when we consider the organization 

5.1 / SEMICONDUCTOR MAIN MEMORY  165
of memory cells and functional logic on a chip. For semiconductor memories, one of the 
key design issues is the number of bits of data that may be read/written at a time. At one 
extreme is an organization in which the physical arrangement of cells in the array is the 
same as the logical arrangement (as perceived by the processor) of words in memory. 
The array is organized into W words of B bits each. For example, a 16-Mbit chip could 
be organized as 1M 16-bit words. At the other extreme is the so-called 1-bit-per-chip 
organization, in which data are read/written 1 bit at a time. We will illustrate memory 
chip organization with a DRAM; ROM organization is similar, though simpler.
are read or written at a time. Logically, the memory array is organized as four square 
arrays of 2048 by 2048 elements. Various physical arrangements are possible. In any 
case, the elements of the array are connected by both horizontal (row) and vertical 
(column) lines. Each horizontal line connects to the Select terminal of each cell in its 
row; each vertical line connects to the Data-In/Sense terminal of each cell in its column.
Address lines supply the address of the word to be selected. A total of log2 W 
lines are needed. In our example, 11 address lines are needed to select one of 2048 
rows. These 11 lines are fed into a row decoder, which has 11 lines of input and 2048 
lines for output. The logic of the decoder activates a single one of the 2048 outputs 
depending on the bit pattern on the 11 input lines (211 = 2048).
An additional 11 address lines select one of 2048 columns of 4 bits per column. 
Four data lines are used for the input and output of 4 bits to and from a data buffer. 
On input (write), the bit driver of each bit line is activated for a 1 or 0 according to 
the value of the corresponding data line. On output (read), the value of each bit line 
is passed through a sense amplifier and presented to the data lines. The row line 
selects which row of cells is used for reading or writing.
Because only 4 bits are read/written to this DRAM, there must be multiple 
DRAMs connected to the memory controller to read/write a word of data to the bus.
Note that there are only 11 address lines (A0–A10), half the number you 
would expect for a 2048 * 2048 array. This is done to save on the number of pins. 
The 22 required address lines are passed through select logic external to the chip 
and multiplexed onto the 11 address lines. First, 11 address signals are passed to the 
chip to define the row address of the array, and then the other 11 address signals are 
presented for the column address. These signals are accompanied by row address 
select (RAS) and column address select (CAS) signals to provide timing to the chip.
The write enable (WE) and output enable (OE) pins determine whether a 
write or read operation is performed. Two other pins, not shown in Figure 5.3, are 
ground (Vss) and a voltage source (Vcc).
As an aside, multiplexed addressing plus the use of square arrays result in a 
quadrupling of memory size with each new generation of memory chips. One more 
pin devoted to addressing doubles the number of rows and columns, and so the size 
of the chip memory grows by a factor of 4.
a refresh operation. A simple technique for refreshing is, in effect, to disable the 
DRAM chip while all data cells are refreshed. The refresh counter steps through all 
of the row values. For each row, the output lines from the refresh counter are sup-
plied to the row decoder and the RAS line is activated. The data are read out and 
written back into the same location. This causes each cell in the row to be refreshed.

Column decoder
Refresh circuitry
•  •  •
Memory array
(2048  2048  4)
Row
de-
coder
A0
A1
A10
Row
address
buffer
Column
address
buffer
Timing and control
MUX
Refresh
counter
Data input
buffer
Data output
buffer
D1
D2
D3
D4
•
•
•
•
•
•
RAS
CAS
WE
OE

5.1 / SEMICONDUCTOR MAIN MEMORY  167
Chip Packaging
As was mentioned in Chapter 2, an integrated circuit is mounted on a package that 
contains pins for connection to the outside world.
organized as 1M * 8. In this case, the organization is treated as a one-word-per-chip 
package. The package includes 32 pins, which is one of the standard chip package 
sizes. The pins support the following signal lines:
 
• The address of the word being accessed. For 1M words, a total of 20 (220 = 1M) 
pins are needed (A0–A19).
 
• The data to be read out, consisting of 8 lines (D0–D7).
 
• The power supply to the chip (Vcc).
 
• A ground pin (Vss).
 
• A chip enable (CE) pin. Because there may be more than one memory chip, 
each of which is connected to the same address bus, the CE pin is used to indi-
cate whether or not the address is valid for this chip. The CE pin is activated 
by logic connected to the higher-order bits of the address bus (i.e., address bits 
above A19). The use of this signal is illustrated presently.
 
• A program voltage (Vpp) that is supplied during programming (write operations).
A typical DRAM pin configuration is shown in Figure 5.4b, for a 16-Mbit chip 
organized as 4M * 4. There are several differences from a ROM chip. Because 
a RAM can be updated, the data pins are input/output. The write enable (WE) 
and output enable (OE) pins indicate whether this is a write or read operation. 
A19
A16
A15
A12
A7
A6
A5
A4
A3
A2
A1
A0
D0
D1
D2
Vss
Vcc
A18
A17
A14
A13
A8
A9
A11
Vpp
A10
CE
D7
D6
D5
D4
D3
32-Pin Dip
0.6"
Top View
Vcc
D0
D1
WE
RAS
NC
A10
A0
A1
A2
A3
Vcc
Vss
D3
D2
CAS
OE
A9
A8
A7
A6
A5
A4
Vss
(a) 8-Mbit EPROM
(b) 16-Mbit DRAM
24-Pin Dip
0.6"
Top View

168  CHAPTER 5 / INTERNAL MEMORY
Because the DRAM is accessed by row and column, and the address is multi-
plexed, only 11 address pins are needed to specify the 4M row/column combinations 
(211 * 211 = 222 = 4M). The functions of the row address select (RAS) and  column 
address select (CAS) pins were discussed previously. Finally, the no connect (NC) 
pin is provided so that there are an even number of pins.
Module Organization
If a RAM chip contains only 1 bit per word, then clearly we will need at least a 
 number of chips equal to the number of bits per word. As an example, Figure 5.5 
shows how a memory module consisting of 256K 8-bit words could be organized. For 
256K words, an 18-bit address is needed and is supplied to the module from some 
external source (e.g., the address lines of a bus to which the module is attached). 
The address is presented to 8 256K * 1-bit chips, each of which provides the input/
output of 1 bit.
512 words by
512 bits
Chip #1
Memory buffer
register (MBR)
Memory address
register (MBR)
Decode 1 of
512 bit-sense
Decode 1 of
512 words by
512 bits
Chip #8
Decode 1 of
512 bit-sense
Decode 1 of
•
•
•
•
•
•
•
•
•

5.1 / SEMICONDUCTOR MAIN MEMORY  169
1/512
1/512
A1
1/512
1/512
B1
C1
D1
1/512
1/512
A8
1/512
1/512
B8
C8
D8
E
E
Bit 1
All chips 512 words by
512 bits. 2-terminal cells
E
E
E
A2
A7
E
Bit 8
E
E
E
B7
B2
C7
D7
Memory
buffer
register
(MBR)
Memory
address
register
(MAR)
Chip
group
enable
Select 1
of 4
groups
A
Group
B
C
D
This organization works as long as the size of memory equals the number of 
bits per chip. In the case in which larger memory is required, an array of chips is 
needed. Figure 5.6 shows the possible organization of a memory consisting of 1M 
word by 8 bits per word. In this case, we have four columns of chips, each column 
containing 256K words arranged as in Figure 5.5. For 1M word, 20 address lines are 
needed. The 18 least significant bits are routed to all 32 modules. The high-order 
2 bits are input to a group select logic module that sends a chip enable signal to one 
of the four columns of modules.
Interleaved Memory Simulator
Interleaved Memory
Main memory is composed of a collection of DRAM memory chips. A number of 
chips can be grouped together to form a memory bank. It is possible to organize 
the memory banks in a way known as interleaved memory. Each bank is inde-
pendently able to service a memory read or write request, so that a system with 
K banks can service K requests simultaneously, increasing memory read or write 
rates by a factor of K. If consecutive words of memory are stored in different 
banks, then the transfer of a block of memory is speeded up. Appendix E explores 
the topic of interleaved memory.

170  CHAPTER 5 / INTERNAL MEMORY
 5.2 ERROR CORRECTION
A semiconductor memory system is subject to errors. These can be categorized as 
hard failures and soft errors. A hard failure is a permanent physical defect so that 
the memory cell or cells affected cannot reliably store data but become stuck at 
0 or 1 or switch erratically between 0 and 1. Hard errors can be caused by harsh 
environmental abuse, manufacturing defects, and wear. A soft error is a random, 
nondestructive event that alters the contents of one or more memory cells with-
out damaging the memory. Soft errors can be caused by power supply problems 
or alpha particles. These particles result from radioactive decay and are distress-
ingly common because radioactive nuclei are found in small quantities in nearly all 
materials. Both hard and soft errors are clearly undesirable, and most modern main 
memory systems include logic for both detecting and correcting errors.
data are to be written into memory, a calculation, depicted as a function f, is per-
formed on the data to produce a code. Both the code and the data are stored. Thus, 
if an M-bit word of data is to be stored and the code is of length K bits, then the 
actual size of the stored word is M + K bits.
When the previously stored word is read out, the code is used to detect and pos-
sibly correct errors. A new set of K code bits is generated from the M data bits and 
compared with the fetched code bits. The comparison yields one of three results:
 
• No errors are detected. The fetched data bits are sent out.
 
• An error is detected, and it is possible to correct the error. The data bits plus 
error correction bits are fed into a corrector, which produces a corrected set of 
M bits to be sent out.
 
• An error is detected, but it is not possible to correct it. This condition is reported.
Codes that operate in this fashion are referred to as error-correcting codes. A 
code is characterized by the number of bit errors in a word that it can correct and detect.
f
f
Compare
Corrector
Memory
Data in
Data out
Error signal
M
K
M
M
K
K

5.2 / ERROR CORRECTION  171
The simplest of the error-correcting codes is the Hamming code devised by 
Richard Hamming at Bell Laboratories. Figure 5.8 uses Venn diagrams to illus-
trate the use of this code on 4-bit words (M = 4). With three intersecting circles, 
there are seven compartments. We assign the 4 data bits to the inner compartments 
(Figure5.8a). The remaining compartments are filled with what are called parity 
bits. Each parity bit is chosen so that the total number of 1s in its circle is even 
(Figure5.8b). Thus, because circle A includes three data 1s, the parity bit in that 
circle is set to 1. Now, if an error changes one of the data bits (Figure 5.8c), it is eas-
ily found. By checking the parity bits, discrepancies are found in circle A and circle 
C but not in circle B. Only one of the seven compartments is in A and C but not B. 
The error can therefore be corrected by changing that bit.
To clarify the concepts involved, we will develop a code that can detect and 
correct single-bit errors in 8-bit words.
To start, let us determine how long the code must be. Referring to Figure 5.7, 
the comparison logic receives as input two K-bit values. A bit-by-bit comparison is 
done by taking the exclusive-OR of the two inputs. The result is called the  syndrome 
word. Thus, each bit of the syndrome is 0 or 1 according to if there is or is not a 
match in that bit position for the two inputs.
The syndrome word is therefore K bits wide and has a range between 0 and 
2K - 1. The value 0 indicates that no error was detected, leaving 2K - 1 values to 
indicate, if there is an error, which bit was in error. Now, because an error could 
occur on any of the M data bits or K check bits, we must have
2K - 1 Ú M + K
A
(a)
(b)
(d)
(c)
B
C

172  CHAPTER 5 / INTERNAL MEMORY
This inequality gives the number of bits needed to correct a single bit error in a word 
containing M data bits. For example, for a word of 8 data bits (M = 8), we have
 
• K = 3: 23 - 1 6 8 + 3
 
• K = 4: 24 - 1 7 8 + 4
Thus, eight data bits require four check bits. The first three columns of Table 5.2 
lists the number of check bits required for various data word lengths.
For convenience, we would like to generate a 4-bit syndrome for an 8-bit data 
word with the following characteristics:
 
• If the syndrome contains all 0s, no error has been detected.
 
• If the syndrome contains one and only one bit set to 1, then an error has 
occurred in one of the 4 check bits. No correction is needed.
 
• If the syndrome contains more than one bit set to 1, then the numerical value 
of the syndrome indicates the position of the data bit in error. This data bit is 
inverted for correction.
To achieve these characteristics, the data and check bits are arranged into a 
12-bit word as depicted in Figure 5.9. The bit positions are numbered from 1 to 12. 
Those bit positions whose position numbers are powers of 2 are designated as check 
bits. The check bits are calculated as follows, where the symbol { designates the 
exclusive-OR operation:
C1 = D1 {  D2 {  D4 { D5 {  D7
C2 = D1 { 
 
  D3 { D4 {  D6 {  D7
C4 = 
 
 D2 { D3 { D4 {  
 
 
 
 
  
  D8
C8 =  D5 {  D6 {  D7 {  D8
Single-Error Correction
Single-Error Correction/ 
Double-Error Detection
Data Bits
Check Bits
% Increase
Check Bits
% Increase
62.5
31.25
37.5
18.75
21.875
10.94
12.5
 6.25
7.03
 3.52
3.91
Bit 
position
1100
D8
Position
number
Data bit
Check bit
1011
D7
1010
D6
1001
D5
C8
1000
0111
D4
0110
D3
0101
D2
0100
0011
D1
0010
0001
C4
C2
C1

5.2 / ERROR CORRECTION  173
Each check bit operates on every data bit whose position number contains a 1 
in the same bit position as the position number of that check bit. Thus, data bit posi-
tions 3, 5, 7, 9, and 11 (D1, D2, D4, D5, D7) all contain a 1 in the least significant bit 
of their position number as does C1; bit positions 3, 6, 7, 10, and 11 all contain a 1 in 
the second bit position, as does C2; and so on. Looked at another way, bit position n 
is checked by those bits Ci such that gi = n. For example, position 7 is checked by 
bits in position 4, 2, and 1; and 7 = 4 + 2 + 1.
Let us verify that this scheme works with an example. Assume that the 8-bit 
input word is 00111001, with data bit D1 in the rightmost position. The calculations 
are as follows:
C1 = 1 { 0 { 1 { 1 { 0 = 1
C2 = 1 { 0 { 1 { 1 { 0 = 1
C4 = 0 { 0 { 1 { 0 = 1
C8 = 1 { 1 { 0 { 0 = 0
Suppose now that data bit 3 sustains an error and is changed from 0 to 1. When the 
check bits are recalculated, we have
C1 = 1 { 0 { 1 { 1 { 0 = 1
C2 = 1 { 1 { 1 { 1 { 0 = 0
C4 = 0 { 1 { 1 { 0 = 0
C8 = 1 { 1 { 0 { 0 = 0
When the new check bits are compared with the old check bits, the syndrome word 
is formed:
C8 C4 C2 C1
0  1  1  1
{  0  0  0  1  
  0  1  1  0  
The result is 0110, indicating that bit position 6, which contains data bit 3, is in error.
 positioned properly in the 12-bit word. Four of the data bits have a value 1 (shaded 
in the table), and their bit position values are XORed to produce the Hamming 
code 0111, which forms the four check digits. The entire block that is stored is 
Bit 
position
1100
D8
Position
number
Data bit
Check bit
1011
D7
1010
D6
1001
D5
C8
1000
0111
D4
0110
D3
0101
D2
0100
0011
D1
0010
0001
C4
C2
C1
Word
stored as
1100
Word
fetched as
Position
number
Check bit
1011
1010
1001
1000
0111
0110
0101
0100
0011
0010
0001

174  CHAPTER 5 / INTERNAL MEMORY
001101001111. Suppose now that data bit 3, in bit position 6, sustains an error and is 
changed from 0 to 1. The resulting block is 001101101111, with a Hamming code of 
0111. An XOR of the Hamming code and all of the bit position values for nonzero 
data bits results in 0110. The nonzero result detects an error and indicates that the 
error is in bit position 6.
The code just described is known as a single-error-correcting (SEC) code. 
More commonly, semiconductor memory is equipped with a single-error-correcting, 
double-error-detecting (SEC-DED) code. As Table 5.2 shows, such codes require 
one additional bit compared with SEC codes.
The sequence shows that if two errors occur (Figure 5.11c), the checking procedure 
goes astray (d) and worsens the problem by creating a third error (e). To overcome 
the problem, an eighth bit is added that is set so that the total number of 1s in the 
diagram is even. The extra parity bit catches the error (f).
An error-correcting code enhances the reliability of the memory at the cost of 
added complexity. With a 1-bit-per-chip organization, an SEC-DED code is generally 
considered adequate. For example, the IBM 30xx implementations used an 8-bit SEC-
DED code for each 64 bits of data in main memory. Thus, the size of main memory is 
actually about 12% larger than is apparent to the user. The VAX computers used a 7-bit 
SEC-DED for each 32 bits of memory, for a 22% overhead. A number of contempo-
rary DRAMs use 9 check bits for each 128 bits of data, for a 7% overhead [SHAR97].
 5.3 ADVANCED DRAM ORGANIZATION
As discussed in Chapter 2, one of the most critical system bottlenecks when using 
high-performance processors is the interface to main internal memory. This inter-
face is the most important pathway in the entire computer system. The basic build-
ing block of main memory remains the DRAM chip, as it has for decades; until 
(a)
(c)
(d)
(e)
(f)
(b)

5.3 / ADVANCED DRAM ORGANIZATION  175
recently, there had been no significant changes in DRAM architecture since the 
early 1970s. The traditional DRAM chip is constrained both by its internal architec-
ture and by its interface to the processor’s memory bus.
We have seen that one attack on the performance problem of DRAM 
main memory has been to insert one or more levels of high-speed SRAM cache 
between the DRAM main memory and the processor. But SRAM is much costlier 
than DRAM, and expanding cache size beyond a certain point yields diminishing 
returns.
In recent years, a number of enhancements to the basic DRAM architecture 
have been explored, and some of these are now on the market. The schemes that cur-
rently dominate the market are SDRAM, DDR-DRAM, and RDRAM. Table 5.3 
provides a performance comparison. CDRAM has also received considerable atten-
tion. We examine each of these approaches in this section.
Synchronous DRAM
One of the most widely used forms of DRAM is the synchronous DRAM 
(SDRAM) [VOGL94]. Unlike the traditional DRAM, which is asynchronous, the 
SDRAM exchanges data with the processor synchronized to an external clock sig-
nal and running at the full speed of the processor/memory bus without imposing 
wait states.
In a typical DRAM, the processor presents addresses and control levels to 
the memory, indicating that a set of data at a particular location in memory should 
be either read from or written into the DRAM. After a delay, the access time, the 
DRAM either writes or reads the data. During the access-time delay, the DRAM 
performs various internal functions, such as activating the high capacitance of the 
row and column lines, sensing the data, and routing the data out through the out-
put buffers. The processor must simply wait through this delay, slowing system 
performance.
With synchronous access, the DRAM moves data in and out under control of 
the system clock. The processor or other master issues the instruction and address 
information, which is latched by the DRAM. The DRAM then responds after a set 
number of clock cycles. Meanwhile, the master can safely do other tasks while the 
SDRAM is processing the request.
is typical of SDRAM organization, and Table 5.4 defines the various pin assign-
ments. The SDRAM employs a burst mode to eliminate the address setup time and 
row and column line precharge time after the first access. In burst mode, a series of 
Clock Frequency 
(MHz)
Transfer Rate 
(GB/s)
Access Time (ns)
Pin Count
SDRAM
1.3
DDR
3.2
12.5
RDRAM
4.8

CLK
Sense amplifiers
Column decoder
Cell array
memory bank 0
(2 Mb  8)
DRAM
Row decoder
Sense amplifiers
Column decoder
Cell array
memory bank 1
(2 Mb  8)
DRAM
Row decoder
Sense amplifiers
Column decoder
Cell array
memory bank 2
(2 Mb  8)
DRAM
Row decoder
Sense amplifiers
Column decoder
Cell array
memory bank 3
(2 Mb  8)
DRAM
Row decoder
A0
DQ0
DQ1
DQ2
DQ3
DQ4
DQ5
DQ6
DQ7
DQM
Data control
circuitry
Address buffers (14)
Command
decoder
Control
signal
generator
CAC  Column address
 
 
counter
MR  Mode register
RC  Refresh counter
CLK buffer
CKE buffer
Data I/O buffers
CKE
CAC
RC
MR
A1
A2
A3
A4
A5
A6
A7
A8
A9
A11
CS
RAS
CAS
WE
A12
A13
A10

5.3 / ADVANCED DRAM ORGANIZATION  177
data bits can be clocked out rapidly after the first bit has been accessed. This mode 
is useful when all the bits to be accessed are in sequence and in the same row of the 
array as the initial access. In addition, the SDRAM has a multiple-bank internal 
architecture that improves opportunities for on-chip parallelism.
The mode register and associated control logic is another key feature dif-
ferentiating SDRAMs from conventional DRAMs. It provides a mechanism to 
 customize the SDRAM to suit specific system needs. The mode register specifies 
the burst length, which is the number of separate units of data synchronously fed 
onto the bus. The register also allows the programmer to adjust the latency between 
receipt of a read request and the beginning of data transfer.
The SDRAM performs best when it is transferring large blocks of data seri-
ally, such as for applications like word processing, spreadsheets, and multimedia.
length is 4 and the latency is 2. The burst read command is initiated by having CS 
and CAS low while holding RAS and WE high at the rising edge of the clock. The 
address inputs determine the starting column address for the burst, and the mode 
register sets the type of burst (sequential or interleave) and the burst length (1, 2, 
4, 8, full page). The delay from the start of the command to when the data from the 
first cell appears on the outputs is equal to the value of the CAS latency that is set 
in the mode register.
A0 to A13
Address inputs
CLK
Clock input
CKE
Clock enable
CS
Chip select
RAS
Row address strobe
CAS
Column address strobe
WE
Write enable
DQ0 to DQ7
Data input/output
DQM
Data mask
T0
CLK
COMMAND
DQs
T1
T2
T3
T4
T5
T6
T7
T8
DOUT A0
NOP
NOP
NOP
NOP
NOP
NOP
NOP
NOP
DOUT A1
DOUT A2
DOUT A3
READ A

178  CHAPTER 5 / INTERNAL MEMORY
There is now an enhanced version of SDRAM, known as double data rate 
SDRAM (DDR-SDRAM) that overcomes the once-per-cycle limitation. DDR-
SDRAM can send data to the processor twice per clock cycle.
Rambus DRAM
RDRAM, developed by Rambus [FARM92, CRIS97], has been adopted by Intel 
for its Pentium and Itanium processors. It has become the main competitor to 
SDRAM. RDRAM chips are vertical packages, with all pins on one side. The chip 
exchanges data with the processor over 28 wires no more than 12 centimeters long. 
The bus can address up to 320 RDRAM chips and is rated at 1.6 GBps.
The special RDRAM bus delivers address and control information using 
an asynchronous block-oriented protocol. After an initial 480 ns access time, 
this produces the 1.6 GBps data rate. What makes this speed possible is the bus 
itself, which defines impedances, clocking, and signals very precisely. Rather than 
being controlled by the explicit RAS, CAS, R/W, and CE signals used in conven-
tional DRAMs, an RDRAM gets a memory request over the high-speed bus. This 
request contains the desired address, the type of operation, and the number of 
bytes in the operation.
a controller and a number of RDRAM modules connected via a common bus. 
The controller is at one end of the configuration, and the far end of the bus is 
a parallel termination of the bus lines. The bus includes 18 data lines (16 actual 
data, two parity) cycling at twice the clock rate; that is, 1 bit is sent at the lead-
ing and following edge of each clock signal. This results in a signal rate on each 
data line of 800 Mbps. There is a separate set of 8 lines (RC) used for address 
and control signals. There is also a clock signal that starts at the far end from 
the controller propagates to the controller end and then loops back. A RDRAM 
module sends data to the controller synchronously to the clock to master, and the 
controller sends data to an RDRAM synchronously with the clock signal in the 
opposite direction. The remaining bus lines include a reference voltage, ground, 
and power source.
Controller
INIT
INITo
RDRAM 1
RDRAM 2
• • •
• • •
RDRAM n
Bus data [18:0]
RC [7:0]
RClk [2]
TClk [2]
Vref
Gnd (32/18)
Vd(4)
Vterm

5.3 / ADVANCED DRAM ORGANIZATION  179
DDR SDRAM
SDRAM is limited by the fact that it can only send data to the processor once per 
bus clock cycle. A new version of SDRAM, referred to as double-data-rate SDRAM 
can send data twice per clock cycle, once on the rising edge of the clock pulse and 
once on the falling edge.
DDR DRAM was developed by the JEDEC Solid State Technology 
Association, the Electronic Industries Alliance’s semiconductor-engineering-stand-
ardization body. Numerous companies make DDR chips, which are widely used in 
desktop computers and servers.
chronized to both the rising and falling edge of the clock. It is also synchronized to 
a bidirectional data strobe (DQS) signal that is provided by the memory controller 
during a read and by the DRAM during a write. In typical implementations the 
Clock
Address
RAS
RAS = Row address select
CAS = Column address select
DQ = Data (in or out)
DQS = DQ select
CAS
DQS
DQ
Column
address
Row
address
Valid
data
Valid
data
Valid
data
Valid
data

180  CHAPTER 5 / INTERNAL MEMORY
DQS is ignored during the read. An explanation of the use of DQS on writes is 
beyond our scope; see [JACO08] for details.
There have been two generations of improvement to the DDR technology. 
DDR2 increases the data transfer rate by increasing the operational frequency 
of the RAM chip and by increasing the prefetch buffer from 2 bits to 4 bits 
per chip. The prefetch buffer is a memory cache located on the RAM chip. The 
buffer enables theRAM chip to preposition bits to be placed on the data bus as 
rapidly as possible. DDR3, introduced in 2007, increases the prefetch buffer size 
to 8 bits.
Theoretically, a DDR module can transfer data at a clock rate in the range of 
200 to 600 MHz; a DDR2 module transfers at a clock rate of 400 to 1066 MHz; and 
a DDR3 module transfers at a clock rate of 800 to 1600 MHz. In practice, somewhat 
smaller rates are achieved.
Appendix K provides more detail on DDR technology.
Cache DRAM
Cache DRAM (CDRAM), developed by Mitsubishi [HIDA90, ZHAN01], inte-
grates a small SRAM cache (16 Kb) onto a generic DRAM chip.
The SRAM on the CDRAM can be used in two ways. First, it can be used as a 
true cache, consisting of a number of 64-bit lines. The cache mode of the CDRAM 
is effective for ordinary random access to memory.
The SRAM on the CDRAM can also be used as a buffer to support the serial 
access of a block of data. For example, to refresh a bit-mapped screen, the CDRAM 
can prefetch the data from the DRAM into the SRAM buffer. Subsequent accesses 
to the chip result in accesses solely to the SRAM.
 5.4 RECOMMENDED READING
[PRIN97] provides a comprehensive treatment of semiconductor memory technologies, 
including SRAM, DRAM, and flash memories. [SHAR97] covers the same material, with 
more emphasis on testing and reliability issues. [SHAR03] and [PRIN02] focus on advanced 
DRAM and SRAM architectures. For an in-depth look at DRAM, see [JACO08] and 
[KEET01]. [CUPP01] provides an interesting performance comparison of various DRAM 
schemes. [BEZ03] is a comprehensive introduction to flash memory technology.
A good explanation of error-correcting codes is contained in [MCEL85]. For a deeper 
study, worthwhile book-length treatments are [ADAM91] and [BLAH83]. A readable theo-
retical and mathematical treatment of error-correcting codes is [ASH90]. [SHAR97] contains 
a good survey of codes used in contemporary main memories.
ADAM91 Adamek, J. Foundations of Coding. New York: Wiley, 1991.
ASH90 Ash, R. Information Theory. New York: Dover, 1990.
BEZ03 Bez, R.; et al. Introduction to Flash Memory. Proceedings of the IEEE, 
April 2003.
BLAH83 Blahut, R. Theory and Practice of Error Control Codes. Reading, MA: 
Addison-Wesley, 1983.

5.5 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS  181
CUPP01 Cuppu, V., et al. “High Performance DRAMS in Workstation Environments.” 
IEEE Transactions on Computers, November 2001.
JACO08 Jacob, B.; Ng, S.; and Wang, D. Memory Systems: Cache, DRAM, Disk. 
Boston: Morgan Kaufmann, 2008.
KEET01 Keeth, B., and Baker, R. DRAM Circuit Design: A Tutorial. Piscataway, NJ: 
IEEE Press, 2001.
MCEL85 McEliece, R. “The Reliability of Computer Memories.” Scientific American, 
January 1985.
PRIN97 Prince, B. Semiconductor Memories. New York: Wiley, 1997.
PRIN02 Prince, B. Emerging Memories: Technologies and Trends. Norwell, MA: 
Kluwer, 2002.
SHAR97 Sharma, A. Semiconductor Memories: Technology, Testing, and Reliability. 
New York: IEEE Press, 1997.
SHAR03 Sharma, A. Advanced Semiconductor Memories: Architectures, Designs, and 
Applications. New York: IEEE Press, 2003.
 5.5 KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS
Key Terms
cache DRAM (CDRAM)
dynamic RAM (DRAM)
electrically erasable  
programmable ROM 
(EEPROM)
erasable programmable  
ROM (EPROM)
error correcting code  
(ECC)
error correction
flash memory
Hamming code
hard failure
nonvolatile memory
programmable ROM 
(PROM)
RamBus DRAM  
(RDRAM)
read-mostly memory
read-only memory  
(ROM)
semiconductor memory
single-error-correcting  
(SEC) code
single-error-correcting,  
double-error-detecting 
(SEC-DED) code
soft error
static RAM (SRAM)
synchronous DRAM 
(SDRAM)
syndrome
volatile memory
Review Questions
 5.1 
What are the key properties of semiconductor memory?
 5.2 
What are two interpretations of the term random-access memory?
 5.3 
What is the difference between DRAM and SRAM in terms of application?
 5.4 
What is the difference between DRAM and SRAM in terms of characteristics such as 
speed, size, and cost?
 5.5 
Explain why one type of RAM is considered to be analog and the other digital.
 5.6 
What are some applications for ROM?
 5.7 
What are the differences among EPROM, EEPROM, and flash memory?
 5.8 
Explain the function of each pin in Figure 5.4b.

182  CHAPTER 5 / INTERNAL MEMORY
 5.9 
What is a parity bit?
 5.10 
How is the syndrome for the Hamming code interpreted?
 5.11 
How does SDRAM differ from ordinary DRAM?
Problems
 5.1 
Suggest reasons why RAMs traditionally have been organized as only 1 bit per chip 
whereas ROMs are usually organized with multiple bits per chip.
 5.2 
Consider a dynamic RAM that must be given a refresh cycle 64 times per ms. Each 
refresh operation requires 150 ns; a memory cycle requires 250 ns. What percentage of 
the memory’s total operating time must be given to refreshes?
 5.3 
The access time is considered to last from t1 to t2. Then there is a recharge time, lasting 
from t2 to t3, during which the DRAM chips will have to recharge before the proces-
sor can access them again.
a. Assume that the access time is 60 ns and the recharge time is 40 ns. What is the 
memory cycle time? What is the maximum data rate this DRAM can sustain, as-
suming a 1-bit output?
b. Constructing a 32-bit wide memory system using these chips yields what data 
transfer rate?
 5.4 
on a group of four 256-Kbyte chips. Let’s say this module of chips is packaged as a 
single 1-Mbyte chip, where the word size is 1 byte. Give a high-level chip diagram of 
how to construct an 8-Mbyte computer memory using eight 1-Mbyte chips. Be sure to 
show the address lines in your diagram and what the address lines are used for.
 5.5 
On a typical Intel 8086-based system, connected via system bus to DRAM memory, 
for a read operation, RAS is activated by the trailing edge of the Address Enable 
signal (Figure 3.19). However, due to propagation and other delays, RAS does not go 
active until 50 ns after Address Enable returns to a low. Assume the latter occurs in 
the middle of the second half of state T1 (somewhat earlier than in Figure 3.19). Data 
are read by the processor at the end of T3. For timely presentation to the processor, 
however, data must be provided 60 ns earlier by memory. This interval accounts for 
Address
lines
t1
t2
t3
Data
lines
R/W
CAS
RAS
Row address
Data out valid
Column address

5.5 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS  183
propagation delays along the data paths (from memory to processor) and processor 
data hold time requirements. Assume a clocking rate of 10 MHz.
a. How fast (access time) should the DRAMs be if no wait states are to be inserted?
b. How many wait states do we have to insert per memory read operation if the 
 access time of the DRAMs is 150 ns?
 5.6 
The memory of a particular microcomputer is built from 64K * 1 DRAMs. Accord-
ing to the data sheet, the cell array of the DRAM is organized into 256 rows. Each 
row must be refreshed at least once every 4 ms. Suppose we refresh the memory on a 
strictly periodic basis.
a. What is the time period between successive refresh requests?
b. How long a refresh address counter do we need?
 5.7 
stores 16 4-bit words.
(b) Truth table
(c) Pulse train
Operating
Mode
Inputs
Outputs
Write
H  high voltage level
L  low voltage level
X  don’t care
Read
Inhibit
writing
Store - disable
outputs
Dn
CS
R/W
L
L
L
H
L
L
X
L
H
L
H
L
H
H
L
X
On
L
H
Data
H
L
H
H
H
D3
O3
O2
D2
GND
Vcc
A2
A1
A0
D0
O0
D1
O1
Signetics
7489
16  4
SRAM
CS
R/W
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
A0
A1
A2
A3
CS
R/W
D3
D2
D1
D0
A3

184  CHAPTER 5 / INTERNAL MEMORY
a. List the mode of operation of the chip for each CS input pulse shown in Figure 5.17c.
b. List the memory contents of word locations 0 through 6 after pulse n.
c. What is the state of the output data leads for the input pulses h through m?
 5.8 
Design a 16-bit memory of total capacity 8192 bits using SRAM chips of size 64 * 1 
bit. Give the array configuration of the chips on the memory board showing all re-
quired input and output signals for assigning this memory to the lowest address space. 
The design should allow for both byte and 16-bit word accesses.
 5.9 
A common unit of measure for failure rates of electronic components is the Failure 
unIT (FIT), expressed as a rate of failures per billion device hours. Another well 
known but less used measure is mean time between failures (MTBF), which is the 
average time of operation of a particular component until it fails. Consider a 1 MB 
memory of a 16-bit microprocessor with 256K * 1 DRAMs. Calculate its MTBF 
 assuming 2000 FITS for each DRAM.
 5.10 
For the Hamming code shown in Figure 5.10, show what happens when a check bit 
rather than a data bit is in error?
 5.11 
Suppose an 8-bit data word stored in memory is 11000010. Using the Hamming al-
gorithm, determine what check bits would be stored in memory with the data word. 
Show how you got your answer.
 5.12 
For the 8-bit word 00111001, the check bits stored with it would be 0111. Suppose 
when the word is read from memory, the check bits are calculated to be 1101. What is 
the data word that was read from memory?
 5.13 
How many check bits are needed if the Hamming error correction code is used to 
detect single bit errors in a 1024-bit data word?
 5.14 
Develop an SEC code for a 16-bit data word. Generate the code for the data word 
0101000000111001. Show that the code will correctly identify an error in data bit 5.

CHAPTER
EXTERNAL MEMORY
6.1 
Magnetic Disk
Magnetic Read and Write Mechanisms
Data Organization and Formatting
Physical Characteristics
Disk Performance Parameters
6.2 
RAID
RAID Level 0
RAID Level 1
RAID Level 2
RAID Level 3
RAID Level 4
RAID Level 5
RAID Level 6
6.3 
Solid State Drives
Flash Memory
SSD Compared to HDD
SSD Organization
Practical Issues
6.4 
Optical Memory
Compact Disk
Digital Versatile Disk
High-Definition Optical Disks
6.5 
Magnetic Tape
6.6 
Recommended Reading
6.7 
Key Terms, Review Questions, and Problems


CHAPTER 7 / INPUT/OUTPUT
I/O System Design Tool
In addition to the processor and a set of memory modules, the third key element 
of a computer system is a set of I/O modules. Each module interfaces to the system 
bus or central switch and controls one or more peripheral devices. An I/O module 
is not simply a set of mechanical connectors that wire a device into the system bus. 
Rather, the I/O module contains logic for performing a communication function 
between the peripheral and the bus.
The reader may wonder why one does not connect peripherals directly to the 
system bus. The reasons are as follows:
 
• There are a wide variety of peripherals with various methods of operation. It 
would be impractical to incorporate the necessary logic within the processor 
to control a range of devices.
 
• The data transfer rate of peripherals is often much slower than that of the 
memory or processor. Thus, it is impractical to use the high-speed system bus 
to communicate directly with a peripheral.
 
• On the other hand, the data transfer rate of some peripherals is faster than 
that of the memory or processor. Again, the mismatch would lead to ineffi-
ciencies if not managed properly.
 
• Peripherals often use different data formats and word lengths than the 
 computer to which they are attached.
Thus, an I/O module is required. This module has two major functions 
(Figure 7.1):
 
• Interface to the processor and memory via the system bus or central switch
 
• Interface to one or more peripheral devices by tailored data links
LEARNING OBJECTIVES
After studying this chapter, you should be able to:
 Explain the use of I/O modules as part of a computer organization.
 Understand the difference between programmed I/O and interrupt-driven 
I/O and discuss their relative merits.
 Present an overview of the operation of direct memory access.
 Explain the function and use of I/O channels.
 Present an overview of Thunderbolt.
 Present an overview of InfiniBand.

7.1 / EXTERNAL DEVICES  223
We begin this chapter with a brief discussion of external devices, followed by 
an overview of the structure and function of an I/O module. Then we look at the 
various ways in which the I/O function can be performed in cooperation with the 
processor and memory: the internal I/O interface. Finally, we examine the external 
I/O interface, between the I/O module and the outside world.
 7.1 EXTERNAL DEVICES
I/O operations are accomplished through a wide assortment of external devices 
that provide a means of exchanging data between the external environment 
and the computer. An external device attaches to the computer by a link to 
an I/O module (Figure 7.1). The link is used to exchange control, status, and 
data between the I/O module and the external device. An external device con-
nected to an I/O module is often referred to as a peripheral device or, simply, a 
peripheral.
We can broadly classify external devices into three categories:
 
• Human readable: Suitable for communicating with the computer user
 
• Machine readable: Suitable for communicating with equipment
 
• Communication: Suitable for communicating with remote devices
I/O module
Links to
peripheral
devices
Address lines
System
bus
Data lines
Control lines

224  CHAPTER 7 / INPUT/OUTPUT
Examples of human-readable devices are video display terminals (VDTs) and 
printers. Examples of machine-readable devices are magnetic disk and tape sys-
tems, and sensors and actuators, such as are used in a robotics application. Note 
that we are viewing disk and tape systems as I/O devices in this chapter, whereas 
in Chapter 6 we viewed them as memory devices. From a functional point of view, 
these devices are part of the memory hierarchy, and their use is appropriately dis-
cussed in Chapter 6. From a structural point of view, these devices are controlled by 
I/O modules and are hence to be considered in this chapter.
Communication devices allow a computer to exchange data with a remote 
device, which may be a human-readable device, such as a terminal, a machine-
readable device, or even another computer.
In very general terms, the nature of an external device is indicated in 
signals. Control signals determine the function that the device will perform, such as 
send data to the I/O module (INPUT or READ), accept data from the I/O module 
(OUTPUT or WRITE), report status, or perform some control function particular 
to the device (e.g., position a disk head). Data are in the form of a set of bits to 
be sent to or received from the I/O module. Status signals indicate the state of the 
device. Examples are READY/NOT-READY to show whether the device is ready 
for data transfer.
Control logic associated with the device controls the device’s operation in 
response to direction from the I/O module. The transducer converts data from elec-
trical to other forms of energy during output and from other forms to electrical dur-
ing input. Typically, a buffer is associated with the transducer to temporarily hold 
Buffer
Transducer
Control
logic
Control
signals from
I/O module
Status
signals to
I/O module
Data bits
to and from
I/O module
Data (device-unique)
to and from
environment

7.1 / EXTERNAL DEVICES  225
data being transferred between the I/O module and the external environment; a 
buffer size of 8 to 16 bits is common.
The interface between the I/O module and the external device will be 
examined in Section 7.7. The interface between the external device and the envi-
ronment is beyond the scope of this book, but several brief examples are given 
here.
Keyboard/Monitor
The most common means of computer/user interaction is a keyboard/monitor 
arrangement. The user provides input through the keyboard. This input is then 
transmitted to the computer and may also be displayed on the monitor. In addition, 
the monitor displays data provided by the computer.
The basic unit of exchange is the character. Associated with each character 
is a code, typically 7 or 8 bits in length. The most commonly used text code is the 
International Reference Alphabet (IRA).1 Each character in this code is repre-
sented by a unique 7-bit binary code; thus, 128 different characters can be repre-
sented. Characters are of two types: printable and control. Printable characters are 
the alphabetic, numeric, and special characters that can be printed on paper or dis-
played on a screen. Some of the control characters have to do with controlling the 
printing or displaying of characters; an example is carriage return. Other control 
characters are concerned with communications procedures. See Appendix F for 
details.
For keyboard input, when the user depresses a key, this generates an 
 electronic signal that is interpreted by the transducer in the keyboard and 
 translated into the bit pattern of the corresponding IRA code. This bit pattern 
is then transmitted to the I/O module in the computer. At the computer, the 
text can be stored in the same IRA code. On output, IRA code characters are 
transmitted to an external device from the I/O module. The transducer at the 
device interprets this code and sends the required electronic signals to the out-
put device either to display the indicated character or perform the requested 
control function.
Disk Drive
A disk drive contains electronics for exchanging data, control, and status signals 
with an I/O module plus the electronics for controlling the disk read/write mecha-
nism. In a fixed-head disk, the transducer is capable of converting between the mag-
netic patterns on the moving disk surface and bits in the device’s buffer (Figure 7.2). 
A moving-head disk must also be able to cause the disk arm to move radially in and 
out across the disk’s surface.
1IRA is defined in ITU-T Recommendation T.50 and was formerly known as International Alphabet 
Number 5 (IA5). The U.S. national version of IRA is referred to as the American Standard Code for 
Information Interchange (ASCII).

226  CHAPTER 7 / INPUT/OUTPUT
 7.2 I/O MODULES
Module Function
The major functions or requirements for an I/O module fall into the following 
 categories:
 
• Control and timing
 
• Processor communication
 
• Device communication
 
• Data buffering
 
• Error detection
During any period of time, the processor may communicate with one or more 
external devices in unpredictable patterns, depending on the program’s need for I/O. 
The internal resources, such as main memory and the system bus, must be shared 
among a number of activities, including data I/O. Thus, the I/O function includes a 
control and timing requirement, to coordinate the flow of traffic between internal 
resources and external devices. For example, the control of the transfer of data from 
an external device to the processor might involve the following sequence of steps:
 
1. The processor interrogates the I/O module to check the status of the attached 
device.
 
2. The I/O module returns the device status.
 
3. If the device is operational and ready to transmit, the processor requests the 
transfer of data, by means of a command to the I/O module.
 
4. The I/O module obtains a unit of data (e.g., 8 or 16 bits) from the external device.
 
5. The data are transferred from the I/O module to the processor.
If the system employs a bus, then each of the interactions between the proces-
sor and the I/O module involves one or more bus arbitrations.
The preceding simplified scenario also illustrates that the I/O module must 
communicate with the processor and with the external device. Processor communi-
cation involves the following:
 
• Command decoding: The I/O module accepts commands from the processor, 
typically sent as signals on the control bus. For example, an I/O module for a 
disk drive might accept the following commands: READ SECTOR, WRITE 
SECTOR, SEEK track number, and SCAN record ID. The latter two com-
mands each include a parameter that is sent on the data bus.
 
• Data: Data are exchanged between the processor and the I/O module over the 
data bus.
 
• Status reporting: Because peripherals are so slow, it is important to know the 
status of the I/O module. For example, if an I/O module is asked to send data 
to the processor (read), it may not be ready to do so because it is still working 
on the previous I/O command. This fact can be reported with a status signal. 

7.2 / I/O MODULES  227
Common status signals are BUSY and READY. There may also be signals to 
report various error conditions.
 
• Address recognition: Just as each word of memory has an address, so does 
each I/O device. Thus, an I/O module must recognize one unique address for 
each peripheral it controls.
On the other side, the I/O module must be able to perform device commu-
nication. This communication involves commands, status information, and data 
(Figure 7.2).
An essential task of an I/O module is data buffering. The need for this func-
tion is apparent from Figure 2.11. Whereas the transfer rate into and out of main 
memory or the processor is quite high, the rate is orders of magnitude lower for 
many peripheral devices and covers a wide range. Data coming from main memory 
are sent to an I/O module in a rapid burst. The data are buffered in the I/O module 
and then sent to the peripheral device at its data rate. In the opposite direction, data 
are buffered so as not to tie up the memory in a slow transfer operation. Thus, the 
I/O module must be able to operate at both device and memory speeds. Similarly, if 
the I/O device operates at a rate higher than the memory access rate, then the I/O 
module performs the needed buffering operation.
Finally, an I/O module is often responsible for error detection and for subse-
quently reporting errors to the processor. One class of errors includes mechanical 
and electrical malfunctions reported by the device (e.g., paper jam, bad disk track). 
Another class consists of unintentional changes to the bit pattern as it is transmit-
ted from device to I/O module. Some form of error-detecting code is often used 
to detect transmission errors. A simple example is the use of a parity bit on each 
character of data. For example, the IRA character code occupies 7 bits of a byte. 
The eighth bit is set so that the total number of 1s in the byte is even (even parity) 
or odd (odd parity). When a byte is received, the I/O module checks the parity to 
determine whether an error has occurred.
I/O Module Structure
I/O modules vary considerably in complexity and the number of external devices 
that they control. We will attempt only a very general description here. (One specific 
device, the Intel 82C55A, is described in Section 7.4.) Figure 7.3 provides a general 
block diagram of an I/O module. The module connects to the rest of the computer 
through a set of signal lines (e.g., system bus lines). Data transferred to and from the 
module are buffered in one or more data registers. There may also be one or more 
status registers that provide current status information. A status register may also 
function as a control register, to accept detailed control information from the pro-
cessor. The logic within the module interacts with the processor via a set of control 
lines. The processor uses the control lines to issue commands to the I/O module. 
Some of the control lines may be used by the I/O module (e.g., for arbitration and 
status signals). The module must also be able to recognize and generate addresses 
associated with the devices it controls. Each I/O module has a unique address or, if 
it controls more than one external device, a unique set of addresses. Finally, the I/O 
module contains logic specific to the interface with each device that it controls.

228  CHAPTER 7 / INPUT/OUTPUT
An I/O module functions to allow the processor to view a wide range of devices 
in a simple-minded way. There is a spectrum of capabilities that may be provided. 
The I/O module may hide the details of timing, formats, and the electromechanics 
of an external device so that the processor can function in terms of simple read and 
write commands, and possibly open and close file commands. In its simplest form, 
the I/O module may still leave much of the work of controlling a device (e.g., rewind 
a tape) visible to the processor.
An I/O module that takes on most of the detailed processing burden, present-
ing a high-level interface to the processor, is usually referred to as an I/O channel or 
I/O processor. An I/O module that is quite primitive and requires detailed control 
is usually referred to as an I/O controller or device controller. I/O controllers are 
commonly seen on microcomputers, whereas I/O channels are used on mainframes.
In what follows, we will use the generic term I/O module when no confusion 
results and will use more specific terms where necessary.
 7.3 PROGRAMMED I/O
Three techniques are possible for I/O operations. With programmed I/O, data are 
exchanged between the processor and the I/O module. The processor executes a pro-
gram that gives it direct control of the I/O operation, including sensing device sta-
tus, sending a read or write command, and transferring the data. When the processor 
issues a command to the I/O module, it must wait until the I/O operation is com-
plete. If the processor is faster than the I/O module, this is wasteful of processor time. 
With interrupt-driven I/O, the processor issues an I/O command, continues to execute 
Status/control registers
Data registers
Interface to
system bus
I/O
logic
Control
lines
Address
lines
Data
lines
External
device
interface
logic
Data
Status
Control
External
device
interface
logic
•
•
•
Data
Status
Control
Interface to
external device

7.3 / PROGRAMMED I/O  229
other instructions, and is interrupted by the I/O module when the latter has completed 
its work. With both programmed and interrupt I/O, the processor is responsible for 
extracting data from main memory for output and storing data in main memory for 
input. The alternative is known as direct memory access (DMA). In this mode, the I/O 
module and main memory exchange data directly, without processor involvement.
we explore programmed I/O. Interrupt I/O and DMA are explored in the following 
two sections, respectively.
Overview of Programmed I/O
When the processor is executing a program and encounters an instruction relat-
ing to I/O, it executes that instruction by issuing a command to the appropriate 
I/O  module. With programmed I/O, the I/O module will perform the requested 
action and then set the appropriate bits in the I/O status register (Figure 7.3). The 
I/O module takes no further action to alert the processor. In particular, it does not 
interrupt the processor. Thus, it is the responsibility of the processor periodically to 
check the status of the I/O module until it finds that the operation is complete.
To explain the programmed I/O technique, we view it first from the point of 
view of the I/O commands issued by the processor to the I/O module, and then from 
the point of view of the I/O instructions executed by the processor.
I/O Commands
To execute an I/O-related instruction, the processor issues an address, specifying the 
particular I/O module and external device, and an I/O command. There are four types 
of I/O commands that an I/O module may receive when it is addressed by a processor:
 
• Control: Used to activate a peripheral and tell it what to do. For example, a 
magnetic-tape unit may be instructed to rewind or to move forward one record. 
These commands are tailored to the particular type of peripheral device.
 
• Test: Used to test various status conditions associated with an I/O module and 
its peripherals. The processor will want to know that the peripheral of inter-
est is powered on and available for use. It will also want to know if the most 
recent I/O operation is completed and if any errors occurred.
 
• Read: Causes the I/O module to obtain an item of data from the peripheral 
and place it in an internal buffer (depicted as a data register in Figure 7.3). The 
processor can then obtain the data item by requesting that the I/O module 
place it on the data bus.
 
• Write: Causes the I/O module to take an item of data (byte or word) from the 
data bus and subsequently transmit that data item to the peripheral.
No Interrupts
Use of Interrupts
I/O-to-memory transfer through processor
Programmed I/O
Interrupt-driven I/O
Direct I/O-to-memory transfer
Direct memory access (DMA)

230  CHAPTER 7 / INPUT/OUTPUT
data from a peripheral device (e.g., a record from tape) into memory. Data are read 
in one word (e.g., 16 bits) at a time. For each word that is read in, the processor must 
remain in a status-checking cycle until it determines that the word is available in the 
I/O module’s data register. This flowchart highlights the main disadvantage of this 
technique: it is a time-consuming process that keeps the processor busy needlessly.
I/O Instructions
With programmed I/O, there is a close correspondence between the I/O-related 
instructions that the processor fetches from memory and the I/O commands that the 
processor issues to an I/O module to execute the instructions. That is, the instruc-
tions are easily mapped into I/O commands, and there is often a simple  one-to-one 
relationship. The form of the instruction depends on the way in which external 
devices are addressed.
Typically, there will be many I/O devices connected through I/O modules to 
the system. Each device is given a unique identifier or address. When the processor 
issues an I/O command, the command contains the address of the desired device. 
Thus, each I/O module must interpret the address lines to determine if the com-
mand is for itself.
Issue read
command to
I/O module
Read status
of I/O
module
Check
Status
Read word
from I/O
module
Write word
into memory
Done?
Next instruction
(a) Programmed I/O
Error
condition
Ready
Ready
Yes
Yes
No
Not
ready
Issue read
command to
I/O module
Do something
else
Interrupt
Read status
of I/O
module
Check
status
Read word
from I/O
module
Write word
into memory
Done?
Next instruction
(b) Interrupt-Driven I/O
Do something
else
Interrupt
Error
condition
No
Issue read
block command
to I/O module
Read status
of DMA
module
Next instruction
(c) Direct Memory Access
CPU  DMA
DMA  CPU
CPU  I/O
CPU  I/O
I/O  CPU
I/O  CPU
I/O  CPU
CPU  Memory
I/O  CPU
CPU  Memory

7.3 / PROGRAMMED I/O  231
When the processor, main memory, and I/O share a common bus, two modes 
of addressing are possible: memory mapped and isolated. With memory-mapped 
I/O, there is a single address space for memory locations and I/O devices. The proc-
essor treats the status and data registers of I/O modules as memory locations and 
uses the same machine instructions to access both memory and I/O devices. So, for 
example, with 10 address lines, a combined total of 210 = 1024 memory locations 
and I/O addresses can be supported, in any combination.
With memory-mapped I/O, a single read line and a single write line are needed 
on the bus. Alternatively, the bus may be equipped with memory read and write 
plus input and output command lines. Now, the command line specifies whether the 
address refers to a memory location or an I/O device. The full range of addresses 
may be available for both. Again, with 10 address lines, the system may now support 
both 1024 memory locations and 1024 I/O addresses. Because the address space for 
I/O is isolated from that for memory, this is referred to as isolated I/O.
how the interface for a simple input device such as a terminal keyboard might appear 
to a programmer using memory-mapped I/O. Assume a 10-bit address, with a 512-
bit memory (locations 0–511) and up to 512 I/O addresses (locations 512–1023). 
Two addresses are dedicated to keyboard input from a particular terminal. Address 
516 refers to the data register and address 517 refers to the status register, which 
also functions as a control register for receiving processor commands. The program 
shown will read 1 byte of data from the keyboard into an accumulator register in the 
processor. Note that the processor loops until the data byte is available.
Keyboard input data register
(a) Memory-mapped I/O
Keyboard input status
and control register
1  ready
0  busy
Set to 1 to
start read
 
ADDRESS 
INSTRUCTION 
OPERAND 
COMMENT
 
Load AC 
"1" 
Load accumulator
 
 
Store AC 
Initiate keyboard read
 
Load AC 
Get status byte
 
 
Branch if Sign  0 
Loop until ready
 
 
Load AC 
Load data byte
(b) Isolated I/O
 
ADDRESS 
INSTRUCTION 
OPERAND 
COMMENT
 
Load I/O 
Initiate keyboard read
 
Test I/O 
Check for completion
 
 
Branch Not Ready 
Loop until complete
 
 
In 
Load data byte

232  CHAPTER 7 / INPUT/OUTPUT
With isolated I/O (Figure 7.5b), the I/O ports are accessible only by special 
I/O commands, which activate the I/O command lines on the bus.
For most types of processors, there is a relatively large set of different instruc-
tions for referencing memory. If isolated I/O is used, there are only a few I/O 
instructions. Thus, an advantage of memory-mapped I/O is that this large repertoire 
of instructions can be used, allowing more efficient programming. A disadvantage is 
that valuable memory address space is used up. Both memory-mapped and isolated 
I/O are in common use.
 7.4 INTERRUPT-DRIVEN I/O
The problem with programmed I/O is that the processor has to wait a long time 
for the I/O module of concern to be ready for either reception or transmission of 
data. The processor, while waiting, must repeatedly interrogate the status of the I/O 
module. As a result, the level of the performance of the entire system is severely 
degraded.
An alternative is for the processor to issue an I/O command to a module and 
then go on to do some other useful work. The I/O module will then interrupt the 
processor to request service when it is ready to exchange data with the proces-
sor. The processor then executes the data transfer, as before, and then resumes its 
former processing.
Let us consider how this works, first from the point of view of the I/O module. 
For input, the I/O module receives a READ command from the processor. The I/O 
module then proceeds to read data in from an associated peripheral. Once the data 
are in the module’s data register, the module signals an interrupt to the processor 
over a control line. The module then waits until its data are requested by the proc-
essor. When the request is made, the module places its data on the data bus and is 
then ready for another I/O operation.
From the processor’s point of view, the action for input is as follows. The proc-
essor issues a READ command. It then goes off and does something else (e.g., the 
processor may be working on several different programs at the same time). At the 
end of each instruction cycle, the processor checks for interrupts (Figure 3.9). When 
the interrupt from the I/O module occurs, the processor saves the context (e.g., pro-
gram counter and processor registers) of the current program and processes the 
interrupt. In this case, the processor reads the word of data from the I/O module 
and stores it in memory. It then restores the context of the program it was working 
on (or some other program) and resumes execution.
Compare this with Figure 7.4a. Interrupt I/O is more efficient than programmed I/O 
because it eliminates needless waiting. However, interrupt I/O still consumes a lot of 
processor time, because every word of data that goes from memory to I/O module 
or from I/O module to memory must pass through the processor.
Interrupt Processing
Let us consider the role of the processor in interrupt-driven I/O in more detail. 
The occurrence of an interrupt triggers a number of events, both in the processor 

7.4 / INTERRUPT-DRIVEN I/O  233
 hardware and in software. Figure 7.6 shows a typical sequence. When an I/O device 
completes an I/O operation, the following sequence of hardware events occurs:
 
1. The device issues an interrupt signal to the processor.
 
2. The processor finishes execution of the current instruction before responding 
to the interrupt, as indicated in Figure 3.9.
 
3. The processor tests for an interrupt, determines that there is one, and sends an 
acknowledgment signal to the device that issued the interrupt. The acknowl-
edgment allows the device to remove its interrupt signal.
 
4. The processor now needs to prepare to transfer control to the interrupt routine. 
To begin, it needs to save information needed to resume the current program at 
the point of interrupt. The minimum information required is (a) the status of the 
processor, which is contained in a register called the program status word (PSW), 
and (b) the location of the next instruction to be executed, which is contained in 
the program counter. These can be pushed onto the system control stack.2
 
5. The processor now loads the program counter with the entry location of the 
interrupt-handling program that will respond to this interrupt. Depending on 
the computer architecture and operating system design, there may be a single 
Device controller or
other system hardware
issues an interrupt
Processor finishes
execution of current
instruction
Processor signals
acknowledgment
of interrupt
Processor pushes PSW
and PC onto control
stack
Processor loads new
PC value based on
interrupt
Save remainder of
process state
information
Process interrupt
Restore process state
information
Restore old PSW
and PC
Hardware
Software
2See Appendix O for a discussion of stack operation.

234  CHAPTER 7 / INPUT/OUTPUT
program; one program for each type of interrupt; or one program for each 
device and each type of interrupt. If there is more than one interrupt-handling 
routine, the processor must determine which one to invoke. This information 
may have been included in the original interrupt signal, or the processor may 
have to issue a request to the device that issued the interrupt to get a response 
that contains the needed information.
Once the program counter has been loaded, the processor proceeds to the 
next instruction cycle, which begins with an instruction fetch. Because the instruc-
tion fetch is determined by the contents of the program counter, the result is that 
control is transferred to the interrupt-handler program. The execution of this pro-
gram results in the following operations:
 
6. At this point, the program counter and PSW relating to the interrupted 
 program have been saved on the system stack. However, there is other infor-
mation that is considered part of the “state” of the executing program. In par-
ticular, the contents of the processor registers need to be saved, because these 
registers may be used by the interrupt handler. So, all of these values, plus any 
other state information, need to be saved. Typically, the interrupt handler will 
begin by saving the contents of all registers on the stack. Figure 7.7a shows a 
simple example. In this case, a user program is interrupted after the instruction 
at location N. The contents of all of the registers plus the address of the next 
instruction (N + 1) are pushed onto the stack. The stack pointer is updated to 
point to the new top of stack, and the program counter is updated to point to 
the beginning of the interrupt service routine.
 
7. The interrupt handler next processes the interrupt. This includes an examina-
tion of status information relating to the I/O operation or other event that 
caused an interrupt. It may also involve sending additional commands or 
acknowledgments to the I/O device.
 
8. When interrupt processing is complete, the saved register values are retrieved 
from the stack and restored to the registers (e.g., see Figure 7.7b).
 
9. The final act is to restore the PSW and program counter values from the stack. 
As a result, the next instruction to be executed will be from the previously 
interrupted program.
Note that it is important to save all the state information about the interrupted 
program for later resumption. This is because the interrupt is not a routine called 
from the program. Rather, the interrupt can occur at any time and therefore at any 
point in the execution of a user program. Its occurrence is unpredictable. Indeed, as 
we will see in the next chapter, the two programs may not have anything in common 
and may belong to two different users.
Design Issues
Two design issues arise in implementing interrupt I/O. First, because there will 
almost invariably be multiple I/O modules, how does the processor determine which 
device issued the interrupt? And second, if multiple interrupts have occurred, how 
does the processor decide which one to process?

7.4 / INTERRUPT-DRIVEN I/O  235
Let us consider device identification first. Four general categories of  techniques 
are in common use:
 
• Multiple interrupt lines
 
• Software poll
 
• Daisy chain (hardware poll, vectored)
 
• Bus arbitration (vectored)
The most straightforward approach to the problem is to provide multiple inter-
rupt lines between the processor and the I/O modules. However, it is impractical to 
dedicate more than a few bus lines or processor pins to interrupt lines. Consequently, 
even if multiple lines are used, it is likely that each line will have multiple I/O mod-
ules attached to it. Thus, one of the other three techniques must be used on each line.
Start
N  1
Y  L
N
Y
Y
T
Return
User’s
program
Main
memory
Processor
General
registers
Program
counter
Stack
pointer
N  1
T  M
T  M
T
Control
stack
Interrupt-
service
routine
User’s
program
Interrupt-
service
routine
(a)  Interrupt occurs after instruction
at location N
(b)  Return from interrupt
Start
N  1
Y  L
N
Y
T
Return
Main
memory
Processor
General
registers
Program
counter
Stack
pointer
Y  L
T  M
T  M
T
Control
stack
N  1

236  CHAPTER 7 / INPUT/OUTPUT
One alternative is the software poll. When the processor detects an interrupt, 
it branches to an interrupt-service routine whose job it is to poll each I/O module 
to determine which module caused the interrupt. The poll could be in the form of a 
separate command line (e.g., TESTI/O). In this case, the processor raises TESTI/O 
and places the address of a particular I/O module on the address lines. The I/O mod-
ule responds positively if it sets the interrupt. Alternatively, each I/O module could 
contain an addressable status register. The processor then reads the status register 
of each I/O module to identify the interrupting module. Once the correct module is 
identified, the processor branches to a device-service routine specific to that device.
The disadvantage of the software poll is that it is time consuming. A more efficient 
technique is to use a daisy chain, which provides, in effect, a hardware poll. An example 
of a daisy-chain configuration is shown in Figure 3.30. For interrupts, all I/O modules 
share a common interrupt request line. The interrupt acknowledge line is daisy chained 
through the modules. When the processor senses an interrupt, it sends out an interrupt 
acknowledge. This signal propagates through a series of I/O modules until it gets to a 
requesting module. The requesting module typically responds by placing a word on 
the data lines. This word is referred to as a vector and is either the address of the I/O 
module or some other unique identifier. In either case, the processor uses the vector as 
a pointer to the appropriate device-service routine. This avoids the need to execute a 
general interrupt-service routine first. This technique is called a vectored interrupt.
There is another technique that makes use of vectored interrupts, and that is 
bus arbitration. With bus arbitration, an I/O module must first gain control of the 
bus before it can raise the interrupt request line. Thus, only one module can raise the 
line at a time. When the processor detects the interrupt, it responds on the interrupt 
acknowledge line. The requesting module then places its vector on the data lines.
The aforementioned techniques serve to identify the requesting I/O  module. 
They also provide a way of assigning priorities when more than one device is request-
ing interrupt service. With multiple lines, the processor just picks the interrupt line 
with the highest priority. With software polling, the order in which modules are 
polled determines their priority. Similarly, the order of modules on a daisy chain 
determines their priority. Finally, bus arbitration can employ a priority scheme, as 
discussed in Section 3.4.
We now turn to two examples of interrupt structures.
Intel 82C59A Interrupt Controller
The Intel 80386 provides a single Interrupt Request (INTR) and a single Interrupt 
Acknowledge (INTA) line. To allow the 80386 to handle a variety of devices and pri-
ority structures, it is usually configured with an external interrupt arbiter, the 82C59A. 
External devices are connected to the 82C59A, which in turn connects to the 80386.
80386. A single 82C59A can handle up to eight modules. If control for more than eight 
modules is required, a cascade arrangement can be used to handle up to 64 modules.
The 82C59A’s sole responsibility is the management of interrupts. It accepts 
interrupt requests from attached modules, determines which interrupt has the highest 
priority, and then signals the processor by raising the INTR line. The processor 
acknowledges via the INTA line. This prompts the 82C59A to place the appropriate 

7.4 / INTERRUPT-DRIVEN I/O  237
vector information on the data bus. The processor can then proceed to process the 
interrupt and to communicate directly with the I/O module to read or write data.
The 82C59A is programmable. The 80386 determines the priority scheme to 
be used by setting a control word in the 82C59A. The following interrupt modes are 
possible:
 
• Fully nested: The interrupt requests are ordered in priority from 0 (IR0) 
through 7 (IR7).
External device 00
Slave
82C59A
interrupt
controller
External device 07
IR0
IR1  INT
IR2
IR3
IR4
IR5
IR6
IR7
External device 01
External device 08
Slave
82C59A
interrupt
controller
External device 15
IR0
IR1  INT
IR2
IR3
IR4
IR5
IR6
IR7
Master
82C59A
interrupt
controller
IR0
IR1  INT
IR2
IR3
IR4
IR5
IR6
IR7
External device 09
80386
processor
INTR
External device 56
Slave
82C59A
interrupt
controller
External device 63
IR0
IR1  INT
IR2
IR3
IR4
IR5
IR6
IR7
External device 57

238  CHAPTER 7 / INPUT/OUTPUT
 
• Rotating: In some applications a number of interrupting devices are of equal 
priority. In this mode a device, after being serviced, receives the lowest prior-
ity in the group.
 
• Special mask: This allows the processor to inhibit interrupts from certain devices.
The Intel 82C55A Programmable Peripheral Interface
As an example of an I/O module used for programmed I/O and interrupt-driven I/O, 
we consider the Intel 82C55A Programmable Peripheral Interface. The 82C55A is 
a single-chip, general-purpose I/O module designed for use with the Intel 80386 
processor. Figure 7.9 shows a general block diagram plus the pin assignment for the 
40-pin package in which it is housed.
The right side of the block diagram is the external interface of the 82C55A. 
The 24 I/O lines are programmable by the 80386 by means of the control register. 
The 80386 can set the value of the control register to specify a variety of operating 
modes and configurations. The 24 lines are divided into three 8-bit groups (A, B, C). 
Each group can function as an 8-bit I/O port. In addition, group C is subdivided into 
4-bit groups (CA and CB), which may be used in conjunction with the A and B I/O 
ports. Configured in this manner, group C lines carry control and status signals.
The left side of the block diagram is the internal interface to the 80386 bus. It 
includes an 8-bit bidirectional data bus (D0 through D7), used to transfer data to 
and from the I/O ports and to transfer control information to the control register. 
The two address lines specify one of the three I/O ports or the control register. 
A transfer takes place when the CHIP SELECT line is enabled together with either 
the READ or WRITE line. The RESET line is used to initialize the module.
Data
buffer
Control
logic
Control
register
Data
buffers
5 volts
A
CA
PA4
PA3
CB
B
ground
8086
Data bus
8-bit
internal
bus
Power
supplies
A0
Address
Lines A1
Read
Write
Reset
Chip
select
(a) Block diagram
(b) Pin layout
PA5
PA2
PA6
PA1
PA7
PA0
Write
Read
Reset
Chip select
D0
Ground
D1
A1
D2
A0
D3
PC7
D4
PC6
D5
PC5
D6
PC4
D7
PC3
V
PC2
PB7
PC1
PB6
PC0
PB5
PB0
PB4
PB1
PB3
PB2

7.4 / INTERRUPT-DRIVEN I/O  239
The control register is loaded by the processor to control the mode of operation 
and to define signals, if any. In Mode 0 operation, the three groups of eight exter-
nal lines function as three 8-bit I/O ports. Each port can be designated as input or 
output. Otherwise, groups A and B function as I/O ports, and the lines of group C 
serve as control lines for A and B. The control signals serve two principal purposes: 
“handshaking” and interrupt request. Handshaking is a simple timing mechanism. 
One control line is used by the sender as a DATA READY line, to indicate when 
the data are present on the I/O data lines. Another line is used by the receiver as an 
ACKNOWLEDGE, indicating that the data have been read and the data lines may 
be cleared. Another line may be designated as an INTERRUPT REQUEST line and 
tied back to the system bus.
Because the 82C55A is programmable via the control register, it can be used to 
control a variety of simple peripheral devices. Figure 7.10 illustrates its use to control 
A0
A1
A2
A3
A4
A5
A6
A7
C3
Interrupt
request
Interrupt
request
C0
INPUT
PORT
KEYBOARD
OUTPUT
PORT
82C55A
B0
B1
B2
B3
B4
B5
B6
B7
C1
C2
C6
C7
C4
C5
R0
R1
R2
R3
R4
R5
Shift
Control
Data ready
Acknowledge
DISPLAY
S0
S1
S2
S3
S4
S5
Backspace
Clear
Data ready
Acknowledge
Blanking
Clear line

240  CHAPTER 7 / INPUT/OUTPUT
a keyboard/display terminal. The keyboard provides 8 bits of input. Two of these 
bits, SHIFT and CONTROL, have special meaning to the keyboard-handling pro-
gram executing in the processor. However, this interpretation is transparent to the 
82C55A, which simply accepts the 8 bits of data and presents them on the system 
data bus. Two handshaking control lines are provided for use with the keyboard.
The display is also linked by an 8-bit data port. Again, two of the bits have spe-
cial meanings that are transparent to the 82C55A. In addition to two handshaking 
lines, two lines provide additional control functions.
 7.5 DIRECT MEMORY ACCESS
Drawbacks of Programmed and Interrupt-Driven I/O
Interrupt-driven I/O, though more efficient than simple programmed I/O, still 
requires the active intervention of the processor to transfer data between memory 
and an I/O module, and any data transfer must traverse a path through the proces-
sor. Thus, both these forms of I/O suffer from two inherent drawbacks:
 
1. The I/O transfer rate is limited by the speed with which the processor can test 
and service a device.
 
2. The processor is tied up in managing an I/O transfer; a number of instructions 
must be executed for each I/O transfer (e.g., Figure 7.5).
There is somewhat of a trade-off between these two drawbacks. Consider the 
transfer of a block of data. Using simple programmed I/O, the processor is dedi-
cated to the task of I/O and can move data at a rather high rate, at the cost of doing 
nothing else. Interrupt I/O frees up the processor to some extent at the expense of 
the I/O transfer rate. Nevertheless, both methods have an adverse impact on both 
processor activity and I/O transfer rate.
When large volumes of data are to be moved, a more efficient technique is 
required: direct memory access (DMA).
DMA Function
DMA involves an additional module on the system bus. The DMA module 
(Figure 7.11) is capable of mimicking the processor and, indeed, of taking over 
control of the system from the processor. It needs to do this to transfer data to 
and from memory over the system bus. For this purpose, the DMA module must 
use the bus only when the processor does not need it, or it must force the proces-
sor to suspend operation temporarily. The latter technique is more common and is 
referred to as cycle stealing, because the DMA module in effect steals a bus cycle.
When the processor wishes to read or write a block of data, it issues a 
 command to the DMA module, by sending to the DMA module the following 
information:
 
• Whether a read or write is requested, using the read or write control line 
 between the processor and the DMA module
 
• The address of the I/O device involved, communicated on the data lines

7.5 / DIRECT MEMORY ACCESS  241
 
• The starting location in memory to read from or write to, communicated on 
the data lines and stored by the DMA module in its address register
 
• The number of words to be read or written, again communicated via the data 
lines and stored in the data count register
The processor then continues with other work. It has delegated this I/O opera-
tion to the DMA module. The DMA module transfers the entire block of data, one 
word at a time, directly to or from memory, without going through the processor. 
When the transfer is complete, the DMA module sends an interrupt signal to the 
processor. Thus, the processor is involved only at the beginning and end of the 
transfer (Figure 7.4c).
pended. In each case, the processor is suspended just before it needs to use the bus. 
The DMA module then transfers one word and returns control to the processor. 
Note that this is not an interrupt; the processor does not save a context and do 
something else. Rather, the processor pauses for one bus cycle. The overall effect 
is to cause the processor to execute more slowly. Nevertheless, for a multiple-word 
I/O transfer, DMA is far more efficient than interrupt-driven or programmed I/O.
The DMA mechanism can be configured in a variety of ways. Some possibili-
ties are shown in Figure 7.13. In the first example, all modules share the same system 
bus. The DMA module, acting as a surrogate processor, uses programmed I/O to 
exchange data between memory and an I/O module through the DMA module. This 
configuration, while it may be inexpensive, is clearly inefficient. As with processor-
controlled programmed I/O, each transfer of a word consumes two bus cycles.
The number of required bus cycles can be cut substantially by integrating the 
DMA and I/O functions. As Figure 7.13b indicates, this means that there is a path 
Address
register
Control
logic
Data
register
Data
count
Data lines
Address lines
Request to DMA
Acknowledge from DMA
Interrupt
Read
Write

242  CHAPTER 7 / INPUT/OUTPUT
Processor
DMA
(a) Single-bus, detached DMA
(b) Single-bus, integrated DMA-I/O
(c) I/O bus
I/O bus
System bus
I/O
•  •  •
I/O
Memory
Processor
DMA
Memory
I/O
I/O
I/O
Processor
DMA
DMA
I/O
I/O
I/O
Memory
Processor
cycle
Fetch
instruction
Processor
cycle
Decode
instruction
Processor
cycle
Instruction cycle
Time
DMA
breakpoints
Interrupt
breakpoint
Fetch
operand
Processor
cycle
Execute
instruction
Processor
cycle
Store
result
Processor
cycle
Process
interrupt

7.5 / DIRECT MEMORY ACCESS  243
between the DMA module and one or more I/O modules that does not include the 
system bus. The DMA logic may actually be a part of an I/O module, or it may be a 
separate module that controls one or more I/O modules. This concept can be taken 
one step further by connecting I/O modules to the DMA module using an I/O bus 
(Figure 7.13c). This reduces the number of I/O interfaces in the DMA module to one 
and provides for an easily expandable configuration. In both of these cases (Figures 
7.13b and c), the system bus that the DMA module shares with the processor and 
memory is used by the DMA module only to exchange data with memory. The 
exchange of data between the DMA and I/O modules takes place off the  system bus.
Intel 8237A DMA Controller
The Intel 8237A DMA controller interfaces to the 80 x 86 family of processors and 
to DRAM memory to provide a DMA capability. Figure 7.14 indicates the location 
of the DMA module. When the DMA module needs to use the system buses (data, 
address, and control) to transfer data, it sends a signal called HOLD to the proces-
sor. The processor responds with the HLDA (hold acknowledge) signal, indicating 
that the DMA module can use the buses. For example, if the DMA module is to 
transfer a block of data from memory to disk, it will do the following:
 
1. The peripheral device (such as the disk controller) will request the service of 
DMA by pulling DREQ (DMA request) high.
 
2. The DMA will put a high on its HRQ (hold request), signaling the CPU 
through its HOLD pin that it needs to use the buses.
CPU
DACK  DMA acknowledge
DREQ  DMA request
HLDA  HOLD acknowledge
HRQ  HOLD request
Data bus
DACK
DREQ
Address bus
Control bus (IOR, IOW, MEMR, MEMW)
8237 DMA
chip
Main
memory
Disk
controller
HRQ
HLDA

244  CHAPTER 7 / INPUT/OUTPUT
 
3. The CPU will finish the present bus cycle (not necessarily the present instruc-
tion) and respond to the DMA request by putting high on its HDLA (hold 
acknowledge), thus telling the 8237 DMA that it can go ahead and use the 
buses to perform its task. HOLD must remain active high as long as DMA is 
performing its task.
 
4. DMA will activate DACK (DMA acknowledge), which tells the peripheral 
device that it will start to transfer the data.
 
5. DMA starts to transfer the data from memory to peripheral by putting the 
address of the first byte of the block on the address bus and activating MEMR, 
thereby reading the byte from memory into the data bus; it then activates IOW 
to write it to the peripheral. Then DMA decrements the counter and incre-
ments the address pointer and repeats this process until the count reaches zero 
and the task is finished.
 
6. After the DMA has finished its job it will deactivate HRQ, signaling the CPU 
that it can regain control over its buses.
While the DMA is using the buses to transfer data, the processor is idle. 
Similarly, when the processor is using the bus, the DMA is idle. The 8237 DMA 
is known as a fly-by DMA controller. This means that the data being moved from 
one location to another does not pass through the DMA chip and is not stored in 
the DMA chip. Therefore, the DMA can only transfer data between an I/O port 
and a memory address, but not between two I/O ports or two memory locations. 
However, as explained subsequently, the DMA chip can perform a memory-to-
memory transfer via a register.
The 8237 contains four DMA channels that can be programmed independ-
ently, and any one of the channels may be active at any moment. These channels are 
numbered 0, 1, 2, and 3.
The 8237 has a set of five control/command registers to program and control 
DMA operation over one of its channels (Table 7.2):
 
• Command: The processor loads this register to control the operation of the 
DMA. D0 enables a memory-to-memory transfer, in which channel 0 is used 
to transfer a byte into an 8237 temporary register and channel 1 is used to 
transfer the byte from the register to memory. When memory-to-memory is 
enabled, D1 can be used to disable increment/decrement on channel 0 so that 
a fixed value can be written into a block of memory. D2 enables or disables 
DMA.
 
• Status: The processor reads this register to determine DMA status. Bits 
D0–D3 are used to indicate if channels 0–3 have reached their TC (terminal 
count). Bits D4–D7 are used by the processor to determine if any channel has 
a DMA request pending.
 
• Mode: The processor sets this register to determine the mode of operation 
of the DMA. Bits D0 and D1 are used to select a channel. The other bits 
select various operation modes for the selected channel. Bits D2 and D3 
determine if the transfer is from an I/O device to memory (write) or from 
memory to I/O (read), or a verify operation. If D4 is set, then the  memory 

Bit
Command
Status
Mode
Single Mask
All Mask
D0
Memory-to-memory E/D
Channel 0 has reached TC
Channel select
Select channel mask bit
Clear/set channel 0 mask bit
D1
Channel 0 address  
hold E/D
Channel 1 has reached TC
Clear/set channel 1 mask bit
D2
Controller E/D
Channel 2 has reached TC
Verify/write/ read transfer
Clear/set mask bit
Clear/set channel 2 mask bit
D3
Normal/compressed timing
Channel 3 has reached TC
Not used
Clear/set channel 3 mask bit
D4
Fixed/rotating priority
Channel 0 request
Auto-initialization E/D
Not used
D5
Late/extended write  
selection
Channel 0 request
Address increment/ 
decrement select
D6
DREQ sense active  
high/low
Channel 0 request
D7
DACK sense active  
high/low
Channel 0 request
Demand/single/block/ 
cascade mode select
E/D  enable/disable
TC  terminal count

246  CHAPTER 7 / INPUT/OUTPUT
address register and the count register are reloaded with their  original 
values at the end of a DMA data transfer. Bits D6 and D7 determine the 
way in which the 8237 is used. In single mode, a single byte of data is trans-
ferred. Block and demand modes are used for a block transfer, with the 
demand mode allowing for  premature ending of the transfer. Cascade 
mode allows multiple 8237s to be cascaded to expand the number of chan-
nels to more than 4.
 
• Single Mask: The processor sets this register. Bits D0 and D1 select the chan-
nel. Bit D2 clears or sets the mask bit for that channel. It is through this reg-
ister that the DREQ input of a specific channel can be masked (disabled) or 
unmasked (enabled). While the command register can be used to disable the 
whole DMA chip, the single mask register allows the programmer to disable 
or enable a specific channel.
 
• All Mask: This register is similar to the single mask register except that all four 
channels can be masked or unmasked with one write operation.
In addition, the 8237A has eight data registers: one memory address register 
and one count register for each channel. The processor sets these registers to indi-
cate the location of size of main memory to be affected by the transfers.
 7.6 I/O CHANNELS AND PROCESSORS
The Evolution of the I/O Function
As computer systems have evolved, there has been a pattern of increasing complex-
ity and sophistication of individual components. Nowhere is this more evident than 
in the I/O function. We have already seen part of that evolution. The evolutionary 
steps can be summarized as follows:
 
1. The CPU directly controls a peripheral device. This is seen in simple micro-
processor-controlled devices.
 
2. A controller or I/O module is added. The CPU uses programmed I/O without 
interrupts. With this step, the CPU becomes somewhat divorced from the spe-
cific details of external device interfaces.
 
3. The same configuration as in step 2 is used, but now interrupts are employed. 
The CPU need not spend time waiting for an I/O operation to be performed, 
thus increasing efficiency.
 
4. The I/O module is given direct access to memory via DMA. It can now move 
a block of data to or from memory without involving the CPU, except at the 
beginning and end of the transfer.
 
5. The I/O module is enhanced to become a processor in its own right, with a 
specialized instruction set tailored for I/O. The CPU directs the I/O processor 

7.6 / I/O CHANNELS AND PROCESSORS  247
to execute an I/O program in memory. The I/O processor fetches and executes 
these instructions without CPU intervention. This allows the CPU to specify a 
sequence of I/O activities and to be interrupted only when the entire sequence 
has been performed.
 
6. The I/O module has a local memory of its own and is, in fact, a computer 
in its own right. With this architecture, a large set of I/O devices can be 
 controlled, with minimal CPU involvement. A common use for such an 
architecture has been to control communication with interactive terminals. 
The I/O processor takes care of most of the tasks involved in controlling the 
terminals.
As one proceeds along this evolutionary path, more and more of the I/O 
function is performed without CPU involvement. The CPU is increasingly 
relieved of I/O-related tasks, improving performance. With the last two steps 
(5–6), a major change occurs with the introduction of the concept of an I/O mod-
ule capable of executing a program. For step 5, the I/O module is often referred 
to as an I/O channel. For step 6, the term I/O processor is often used. However, 
both terms are on occasion applied to both situations. In what follows, we will use 
the term I/O channel.
Characteristics of I/O Channels
The I/O channel represents an extension of the DMA concept. An I/O 
channel has the ability to execute I/O instructions, which gives it complete con-
trol over I/O operations. In a computer system with such devices, the CPU does 
not execute I/O instructions. Such instructions are stored in main memory to 
be executed by a special-purpose processor in the I/O channel itself. Thus, the 
CPU initiates an I/O transfer by instructing the I/O channel to execute a pro-
gram in memory. The program will specify the device or devices, the area or 
areas of memory for storage, priority, and actions to be taken for certain error 
conditions. The I/O channel follows these instructions and controls the data 
transfer.
Two types of I/O channels are common, as illustrated in Figure 7.15. A 
 selector channel controls multiple high-speed devices and, at any one time, is 
dedicated to the transfer of data with one of those devices. Thus, the I/O chan-
nel selects one device and effects the data transfer. Each device, or a small set of 
devices, is handled by a controller, or I/O module, that is much like the I/O mod-
ules we have been discussing. Thus, the I/O channel serves in place of the CPU in 
controlling these I/O controllers. A multiplexor channel can handle I/O with mul-
tiple devices at the same time. For low-speed devices, a byte multiplexor accepts or 
transmits characters as fast as possible to multiple devices. For example, the result-
ant character stream from three devices with different rates and individual streams 
A1A2A3A4 …, B1B2B3B4 …, and C1C2C3C4 … might be A1B1C1A2C2A3B2C3A4, 
and so on. For high-speed devices, a block multiplexor interleaves blocks of data 
from several devices.

248  CHAPTER 7 / INPUT/OUTPUT
 7.7 THE EXTERNAL INTERFACE: THUNDERBOLT 
AND INFINIBAND
Types of Interfaces
The interface to a peripheral from an I/O module must be tailored to the nature 
and operation of the peripheral. One major characteristic of the interface is whether 
it is serial or parallel (Figure 7.16). In a parallel interface, there are multiple lines 
connecting the I/O module and the peripheral, and multiple bits are transferred 
simultaneously, just as all of the bits of a word are transferred simultaneously over 
the data bus. In a serial interface, there is only one line used to transmit data, and 
bits must be transmitted one at a time. A parallel interface has traditionally been 
Selector
channel
Control signal
path to CPU
Data and
address channel
to main memory
I/O
controller
I/O
controller
I/O
controller
(a) Selector
(b) Multiplexor
I/O
controller
• • •
• • •
Multiplexor
channel
Control signal
path to CPU
Data and
address channel
to main memory
I/O
controller
I/O
controller

7.7 / THE EXTERNAL INTERFACE: THUNDERBOLT AND INFINIBAND  249
used for higher-speed peripherals, such as tape and disk, while the serial interface 
has traditionally been used for printers and terminals. With a new generation of 
high-speed serial interfaces, parallel interfaces are becoming much less common.
In either case, the I/O module must engage in a dialogue with the peripheral. 
In general terms, the dialogue for a write operation is as follows:
 
1. The I/O module sends a control signal requesting permission to send data.
 
2. The peripheral acknowledges the request.
 
3. The I/O module transfers data (one word or a block depending on the 
peripheral).
 
4. The peripheral acknowledges receipt of the data.
A read operation proceeds similarly.
Key to the operation of an I/O module is an internal buffer that can store data 
being passed between the peripheral and the rest of the system. This buffer allows 
the I/O module to compensate for the differences in speed between the system bus 
and its external lines.
Point-to-Point and Multipoint Configurations
The connection between an I/O module in a computer system and external devices 
can be either point-to-point or multipoint. A point-to-point interface provides a 
dedicated line between the I/O module and the external device. On small systems 
(PCs, workstations), typical point-to-point links include those to the keyboard, 
printer, and external modem. A typical example of such an interface is the EIA-232 
specification (see [STAL11] for a description).
Of increasing importance are multipoint external interfaces, used to sup-
port external mass storage devices (disk and tape drives) and multimedia devices 
I/O module
Buffer
To system
bus
(a) Parallel I/O
To
peripheral
I/O module
Buffer
To system
bus
(b) Serial I/O
To
peripheral

250  CHAPTER 7 / INPUT/OUTPUT
(CD-ROMs, video, audio). These multipoint interfaces are in effect external buses, 
and they exhibit the same type of logic as the buses discussed in Chapter 3. In this 
section, we look at two key examples: Thunderbolt and InfiniBand.
Thunderbolt
The most recent, and fastest, peripheral connection technology to become available for 
general-purpose use is Thunderbolt, developed by Intel with collaboration from Apple. 
One Thunderbolt cable can manage the work previously required of multiple cables. 
The technology combines data, video, audio, and power into a single high-speed con-
nection for peripherals such as hard drives, RAID (Redundant Array of Independent 
Disks) arrays, video-capture boxes, and network interfaces. It provides up to 10 Gbps 
throughput in each direction and up to 10 Watts of power to connected peripherals.
Although the technology and its associated specifications have stabilized, the 
introduction of Thunderbolt-equipped devices into the marketplace has, as of this writ-
ing, only slowly begun to develop. This is because a Thunderbolt-compatible periph-
eral interface is considerably more complex than that of a simple USB device. The 
first generation of Thunderbolt products are primarily aimed at the prosumer (pro-
fessional-consumer) market such as audiovisual editors who want to be able to move 
large volumes of data quickly between storage devices and laptops. As the technology 
becomes cheaper, Thunderbolt will find mass consumer uses, such as enabling very 
high-speed data backups and editing high-definition photos. Thunderbolt is already a 
standard feature of Apple’s MacBook Pro laptop and iMac desktop computers.
THUNDERBOLT CONFIGURATION Figure 7.17 shows a typical computer 
configuration that makes use of Thunderbolt. From the point of view of I/O, the 
central element in this configuration is the Thunderbolt controller, which is a 
high-performance, cross-bar switch. Unlike bus-based I/O architectures, each 
Thunderbolt port on a computer is capable of providing the full data transfer rate 
of the link in both directions with no sharing of data transmission capacity between 
ports or between upstream and downstream directions.
For communication internal to the computer, the Thunderbolt controller 
includes one or more DisplayPort protocol adapter ports. DisplayPort is a digital dis-
play interface standard now widely adopted for computer monitors, laptop displays, 
and other graphics and video interfaces. The controller also includes a PCI Express 
switch with up to four PCI Express protocol adapter ports for internal communication.
The Thunderbolt controller provides access to external devices through one or 
more Thunderbolt connectors. Each connector can provide one or two  full-duplex 
channels, with each channel providing up to 10 Gbps in each direction. The same 
connector can be used for electrical or optical cables. The electrical cable can extend 
up to 3 meters, while the optical cable can extend into the tens of meters.
Users can connect high-performance peripherals to their PC over a cable, 
daisy chaining one after another, up to a total of 7 devices, 1 or 2 of which can be 
high- resolution DisplayPort displays (depending on the controller configuration in 
the host PC). Because Thunderbolt technology delivers two full-bandwidth chan-
nels, the user can realize high bandwidth not only on the first device attached but on 
downstream devices as well.

7.7 / THE EXTERNAL INTERFACE: THUNDERBOLT AND INFINIBAND  251
THUNDERBOLT PROTOCOL ARCHITECTURE Figure 7.18 illustrates the 
Thunderbolt protocol architecture. The cable and connector layer provides 
transmission medium access. This layer specifies the physical and electrical 
attributes of the connector port.
The Thunderbolt protocol physical layer is responsible for link maintenance 
including hot-plug3 detection and data encoding to provide highly efficient data 
transfer. The physical layer has been designed to introduce very minimal overhead 
and provides full-duplex 10 Gbps of usable capacity to the upper layers.
The common transport layer is the key to the operation of Thunderbolt and 
what makes it attractive as a high-speed peripheral I/O technology. Some of the 
features include:
 
• A high-performance, low-power, switching architecture.
 
• A highly efficient, low-overhead packet format with flexible quality of service 
(QoS) support that allows multiplexing of bursty PCI Express transactions 
Processor
COMPUTER
Platform
controller
hub (PCH)
Thunderbolt
controller
Memory
TC
TC
TC
Daisy
chain
Thunderbolt
connector
Thunderbolt
20 Gbps (max)
PCIe x4
DisplayPort
Graphics
Sub-
system
DisplayPort
3The term hot plug is defined as pulling out a component from a system and plugging in a new one while 
the main power is still on. It allows an external drive, network adapter, or other peripheral to be plugged 
in without having to power down the computer.

252  CHAPTER 7 / INPUT/OUTPUT
with DisplayPort communication on the same link. The transport layer has the 
ability to flexibly allocate link bandwidth using priority and bandwidth reser-
vation mechanisms.
 
• The use of small packet sizes to achieve low latency.
 
• The use of credit-based flow control to achieve small buffer sizes.
 
• A symmetric architecture that supports flexible topologies (star, tree, daisy 
chaining, etc.) and enables peer-to-peer communication (via software) 
between devices.
 
• A novel time synchronization protocol that allows all the Thunderbolt prod-
ucts connected in a domain to synchronize their time within 8ns of each 
other.
The application layer contains I/O protocols that are mapped onto the trans-
port layer. Initially, Thunderbolt provides full support for PCIe and DisplayPort 
protocols. This function is provided by a protocol adapter, which is responsible for 
efficient encapsulation of the mapped protocol information into transport layer 
packets. Mapped protocol packets between a source device and a destination device 
may be routed over a path that may cross multiple Thunderbolt controllers. At the 
destination device, a protocol adapter re-creates the mapped protocol in a way that 
is indistinguishable from what was received by the source device. The advantage of 
doing protocol mapping in this way is that Thunderbolt technology–enabled prod-
uct devices appear as PCIe or DisplayPort devices to the operating system of the 
host computer, thereby enabling the use of standard drivers that are available in 
many operating systems today.
Common transport
PCIe
Displayport
I/O protocol
Electrical/optical physical
Cable and connector
THUNDERBOLT TECHNOLOGY
APPLICATION-SPECIFIC
PROTOCOL STACKS

7.7 / THE EXTERNAL INTERFACE: THUNDERBOLT AND INFINIBAND  253
InfiniBand
InfiniBand is a recent I/O specification aimed at the high-end server market.4 The 
first version of the specification was released in early 2001 and has attracted numer-
ous vendors. The standard describes an architecture and specifications for data flow 
among processors and intelligent I/O devices. InfiniBand has become a popular 
interface for storage area networking and other large storage configurations. In 
essence, InfiniBand enables servers, remote storage, and other network devices to 
be attached in a central fabric of switches and links. The switch-based architecture 
can connect up to 64,000 servers, storage systems, and networking devices.
INFINIBAND ARCHITECTURE Although PCI is a reliable interconnect method 
and continues to provide increased speeds, up to 4 Gbps, it is a limited architecture 
compared to InfiniBand. With InfiniBand, it is not necessary to have the basic I/O 
interface hardware inside the server chassis. With InfiniBand, remote storage, 
networking, and connections between servers are accomplished by attaching all 
devices to a central fabric of switches and links. Removing I/O from the server 
chassis allows greater server density and allows for a more flexible and scalable data 
center, as independent nodes may be added as needed.
Unlike PCI, which measures distances from a CPU motherboard in centim-
eters, InfiniBand’s channel design enables I/O devices to be placed up to 17 meters 
away from the server using copper, up to 300 m using multimode optical fiber, and 
up to 10 km with single-mode optical fiber. Transmission rates has high as 30 Gbps 
can be achieved.
follows:
 
• Host channel adapter (HCA): Instead of a number of PCI slots, a typical 
server needs a single interface to an HCA that links the server to an InfiniBand 
switch. The HCA attaches to the server at a memory controller, which has 
 access to the system bus and controls traffic between the processor and mem-
ory and between the HCA and memory. The HCA uses direct-memory access 
(DMA) to read and write memory.
 
• Target channel adapter (TCA): A TCA is used to connect storage systems, 
routers, and other peripheral devices to an InfiniBand switch.
 
• InfiniBand switch: A switch provides point-to-point physical connections to a 
variety of devices and switches traffic from one link to another. Servers and 
devices communicate through their adapters, via the switch. The switch’s 
intelligence manages the linkage without interrupting the servers’ operation.
 
• Links: The link between a switch and a channel adapter, or between two 
switches.
 
• Subnet: A subnet consists of one or more interconnected switches plus the links 
that connect other devices to those switches. Figure 7.19 shows a subnet with 
4InfiniBand is the result of the merger of two competing projects: Future I/O (backed by Cisco, HP, Com-
paq, and IBM) and Next Generation I/O (developed by Intel and backed by a number of other companies).

254  CHAPTER 7 / INPUT/OUTPUT
a single switch, but more complex subnets are required when a large number 
of devices are to be interconnected. Subnets allow administrators to confine 
broadcast and multicast transmissions within the subnet.
 
• Router: Connects InfiniBand subnets, or connects an InfiniBand switch to 
a network, such as a local area network, wide area network, or storage area 
 network.
The channel adapters are intelligent devices that handle all I/O functions with-
out the need to interrupt the server’s processor. For example, there is a control 
protocol by which a switch discovers all TCAs and HCAs in the fabric and assigns 
logical addresses to each. This is done without processor involvement.
The InfiniBand switch temporarily opens up channels between the proces-
sor and devices with which it is communicating. The devices do not have to share a 
channel’s capacity, as is the case with a bus-based design such as PCI, which requires 
that devices arbitrate for access to the processor. Additional devices are added to 
the configuration by hooking up each device’s TCA to the switch.
INFINIBAND OPERATION Each physical link between a switch and an attached 
interface (HCA or TCA) can be support up to 16 logical channels, called virtual 
lanes. One lane is reserved for fabric management and the other lanes for data 
transport. Data are sent in the form of a stream of packets, with each packet 
containing some portion of the total data to be transferred, plus addressing and 
control information. Thus, a set of communications protocols are used to manage 
the transfer of data. A virtual lane is temporarily dedicated to the transfer of data 
from one end node to another over the InfiniBand fabric. The InfiniBand switch 
maps traffic from an incoming lane to an outgoing lane to route the data between 
the desired end points.
Router
CPU
HCA
CPU
System
memory
Internal bus
Host server
Memory
controller
IB link
IB link
InfiniBand
switch
IB link
Target
device
IB link
Router
IB link
TCA
Target
device
T
C
A
Subnet
IB  InfiniBand
HCA  host channel adapter
TCA  target channel adapter

7.7 / THE EXTERNAL INTERFACE: THUNDERBOLT AND INFINIBAND  255
InfiniBand. To account for the fact that some devices can send data faster than 
another destination device can receive it, a pair of queues at both ends of each link 
temporarily buffers excess outbound and inbound data. The queues can be located 
in the channel adapter or in the attached device’s memory. A separate pair of queues 
is used for each virtual lane. The host uses these queues in the following fashion. 
The host places a transaction, called a work queue entry (WQE) into either the 
send or receive queue of the queue pair. The two most important WQEs are SEND 
and RECEIVE. For a SEND operation, the WQE specifies a block of data in the 
device’s memory space for the hardware to send to the destination. A RECEIVE 
WQE specifies where the hardware is to place data received from another device 
when that consumer executes a SEND operation. The channel adapter processes 
each posted WQE in the proper prioritized order and generates a completion queue 
entry (CQE) to indicate the completion status.
ing of four layers:
 
• Physical: The physical-layer specification defines three link speeds (1X, 
4X, and 12X) giving transmission rates of 2.5, 10, and 30 Gbps, respectively 
(Table 7.3). The physical layer also defines the physical media, including cop-
per and optical fiber.
 
• Link:  This layer defines the basic packet structure used to exchange data, 
including an addressing scheme that assigns a unique link address to every 
device in a subnet. This level includes the logic for setting up virtual lanes and 
for switching data through switches from source to destination within a subnet. 
The packet structure includes an error-detection code to provide reliability.
Client process
Transport engine
Host
channel
adapter
Transport layer
Network layer
Link layer
Physical layer
Server process
Port
Physical link
Physical link
Packet
CQE
WQE
IB  InfiniBand
WQE  work queue element
CQE  completion queue entry
QP  queue pair
QP
Send
Receive
Packet relay
Packet
Port
Port
Transport engine
Target
channel
adapter
Port
Fabric
Packet
CQE
WQE
QP
Transactions
(IB operations)
Send
Receive
IB operations
(IB packets)
IB packets

256  CHAPTER 7 / INPUT/OUTPUT
 
• Network:  The network layer routes packets between different InfiniBand 
subnets.
 
• Transport:  The transport layer provides reliability mechanism for end-to-end 
transfer of packets across one or more subnets.
 7.8 IBM zENTERPRISE 196 I/O STRUCTURE
The zEnterprise 196 is IBM’s latest mainframe computer offering (at the time of 
this writing), introduced in 2010. The system is based on the use of the z196 chip, 
which is a 5.2-GHz multicore chip with four cores. The z196 architecture can have a 
maximum of 24 processor chips for a total of 96 cores. In this section, we look at the 
I/O structure of the zEnterprise 196.
Channel Structure
The zEnterprise 196 has a dedicated I/O subsystem that manages all I/O operations, 
completely off-loading this processing and memory burden from the main proces-
sors. Figure 7.21 shows the logical structure of the I/O subsystem. Of the 96 core pro-
cessors, up to 4 of these can be dedicated for I/O use, creating 4 channel subsystems 
(CSS). Each CSS is made up of the following elements:
 
• System assist processor (SAP): The SAP is a core processor configured for I/O 
operation. Its role is to offload I/O operations and manage channels and the 
I/O operations queues. It relieves the other processors of all I/O tasks, allow-
ing them to be dedicated to application logic.
 
• Hardware system area (HSA): The HSA is a reserved part of the system mem-
ory containing the I/O configuration. It is used by SAPs. A fixed amount of 
16 GB is reserved, which is not part of the customer-purchased memory. This 
provides for greater configuration flexibility and higher availability by elimi-
nating planned and preplanned outages.
 
• Logical partitions: A logical partition is a form of virtual machine, which is in 
essence, a logical processor defined at the operating system level.5 Each CSS 
supports up to 16 logical partitions.
 
Link
Signal rate  
(unidirectional)
Usable capacity (80%  
of signal rate)
Effective data throughput 
(send + receive)
1-wide
2.5 Gbps
2 Gbps (250 MBps)
(250 + 250) MBps
4-wide
10 Gbps
8 Gbps (1 GBps)
(1 + 1) GBps
12-wide
30 Gbps
24 Gbps (3 GBps)
(3 + 3) Gbps
5A virtual machine is an instance of an operating system along with one or more applications running in 
an isolated memory partition within the computer. It enables different operating systems to run in the 
same computer at the same time as well as prevents applications from interfering with each other. See 
[STAL12] for a discussion of virtual machines.

7.8 / IBM zENTERPRISE 196 I/O STRUCTURE  257
 
• Subchannels: A subchannel appear to a program as a logical device and con-
tain the information required to perform an I/O operation. One subchannel 
exists for each I/O device addressable by the CSS. A subchannel is used by the 
channel subsystem code running on a partition to pass an I/O request to the 
channel subsystem. A subchannel is assigned for each device defined to the 
logical partition. Up to 196k subchannels are supported per CSS.
 
• Channel path: A channel path is a single interface between a channel subsys-
tem and one or more control units, via a channel. Commands and data are sent 
across a channel path to perform I/O requests. Each CSS can have up to 256 
channel paths.
 
• Channel: Channels are small processors that communicate with the I/O con-
trol units (CUs). They manage the data transfer between memory and the 
external devices.
This elaborate structure enables the mainframe to manage a massive number 
of I/O devices and communication links. All I/O processing is offloaded from the 
application and server processors, enhancing performance. The channel subsys-
tem processors are somewhat general in configuration, enabling them to manage 
a wide variety of I/O duties and to keep up with evolving requirements. The chan-
nel processors are specifically programmed for the I/O control units to which they 
interface.
Partition
15 partitions per channel subsystem
256 channels per channel subsystem
Subchannels
Channel
Channel
Channel
Subsystem
Channel
Subsystem
Channel
subsystem
Channel
Subsystem
Channel
subsystem
4 channel
subsystems
Channel
subsystem
Channel
subsystem
Partition
Subchannels
Partition
Subchannels
Partition
Subchannels
60 partitions per system
1024 partitions per system
Channel
Channel

258  CHAPTER 7 / INPUT/OUTPUT
I/O System Organization
To explain the I/O system organization, we need to first briefly explain the physical 
layout of the zEnterprise 196. Figure 7.22 is a front view of the water-cooled ver-
sion of the machine (there is an air-cooled version). The system has the following 
characteristics:
 
• Weight: 2185 kg (4817 lbs)
 
• Width: 1.534 m (5 ft)
 
• Depth: 1.375 m (4.5 ft)
 
• Height: 2.012 m (6.6 ft)
Not exactly a laptop.
The system consists of two large bays, called frames, that house the various 
components of the zEnterprise 196. The right hand A frame includes two large 
cages, plus room for cabling and other components. The upper cage is a processor 
cage, with four slots to house up to four processor books that are fully intercon-
nected. Each book contains a multichip module (MCM), memory cards, and I/O 
cage connections. Each MCM is a board that houses six multicore chips and two 
storage control chips.
The lower cage in the A frame is an I/O cage, which contains I/O hardware, 
including multiplexors and channels. The I/O cage is a fixed unit installed by IBM to 
the customer specifications at the factory.
Internal
batteries
(optional)
Power
supplies
I/O cage
Processor books,
memory, MBA and
HCA cards
2 × Water
cooling
units
InfiniBand I/O
interconnects
Support
elements
Ethernet cables for
internal system LAN
connecting flexible
service processor
(FSP) cage controller
cards
I/O drawers

The left hand Z frame contains internal batteries and power supplies and 
room for one or more support elements, which are used by a system manager for 
platform management. The Z frame also contains slots for two or more I/O draw-
ers. An I/O drawer contains similar components to an I/O cage. The differences are 
that the drawer is smaller and easily swapped in and out at the customer site to meet 
changing requirements.
With this background, we now show a typical configuration of the zEnterprise 
196 I/O system structure (Figure 7.23). The z196 processor book supports two inter-
nal (i.e., internal to the A and Z frames) I/O infrastructures: InfiniBand for I/O 
cages and I/O drawers, and PCI Express (PCIe) for I/O drawers. These channel 
controllers are referred to as fanouts.
The InfiniBand connections from the processor book to the I/O cages and I/O 
drawers are via a Host Channel Adapter (HCA) fanout, which has InfiniBand links 
to InfiniBand multiplexors in the I/O cage or drawer. The InfiniBand multiplexors 
are used to interconnect servers, communications infrastructure equipment, storage, 
and embedded systems. In addition to using InfiniBand to interconnect systems, 
all of which use InfiniBand, the InfiniBand multiplexor supports other I/O tech-
nologies. ESCON (Enterprise Systems Connection) supports connectivity to disks, 
tapes, and printer devices using a proprietary fiber-based technology. Ethernet con-
nections provide 1-Gbps and 10-Gbps connections to a variety of devices that sup-
port this popular local area network technology. One noteworthy use of Ethernet is 
PCIe (8X)
PCIe (8X)
BOOK
PCIe I/O Drawer
I/O Cage Domain
or I/O Drawer
HCA2 C (6X)
HCA2 C (6X)
PCIe
switch
PCIe
switch
PCIe
switch
PCIe
switch
InfiniBand
multiplexor
InfiniB and
multiplexor
Channels
Ports
1-Gbps
Ethernet controller
Fibre Channel
controller
ESCON
10-Gbps
Ethernet controller
7.8 / IBM zENTERPRISE 196 I/O STRUCTURE  259

260  CHAPTER 7 / INPUT/OUTPUT
to construct large server farms, particularly to interconnect blade servers with each 
other and with other mainframes.6
The PCIe connections from the processor book to the I/O drawers are via a 
PCIe fanout to PCIe switches. The PCIe switches can connect to a number of I/O 
device controllers. Typical examples for zEnterprise 196 are 1-Gbps and 10-Gbps 
Ethernet and Fiber Channel.
Each book contains a combination of up to 8 InfiniBand HCA and PCIe 
fanouts. Each fanout supports up to 32 connections, for a total maximum of 256 
connections per processor book, each connection controlled by a channel processor.
 7.9 RECOMMENDED READING
A good discussion of Intel I/O modules and architecture, including the 82C59A, 82C55A, and 
8237A, can be found in [BREY09] and [MAZI10].
InfiniBand is covered in great detail in [SHAN03] and [FUTR01]. [KAGA01] provides 
a concise overview.
6A blade server is a server architecture that houses multiple server modules (blades) in a single chassis. It 
is widely used in data centers to save space and improve system management. Either self-standing or rack 
mounted, the chassis provides the power supply, and each blade has its own CPU, memory, and hard disk.
BREY09 Brey, B. The Intel Microprocessors: 8086/8066, 80186/80188, 80286, 
80386, 80486, Pentium, Pentium Pro Processor, Pentium II, Pentium III, 
Pentium 4 and Core2 with 64-bit Extensions. Upper Saddle River, NJ: 
Prentice Hall, 2009.
FUTR01 Futral, W. InfiniBand Architecture: Development and Deployment. 
Hillsboro, OR: Intel Press, 2001.
KAGA01 Kagan, M. “InfiniBand: Thinking Outside the Box Design.” 
Communications System Design, September 2001. (www.csdmag.com)
MAZI10 Mazidi, M.; Mazidi, J.; and Causey, D. The x86 PC: Assembly Language, 
Design and Interfacing. Upper Saddle River, NJ: Prentice Hall, 2010.
SHAN03 Shanley, T. InfinBand Network Architecture. Reading, MA: Addison-
Wesley, 2003.
 7.10 KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS
Key Terms
cycle stealing
direct memory access (DMA)
InfiniBand
interrupt
interrupt-driven I/O
I/O channel
I/O command
I/O module
I/O processor
isolated I/O
memory-mapped I/O
multiplexor channel
parallel I/O
peripheral device
programmed I/O
selector channel
serial I/O
Thunderbolt

7.10 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS  261
Review Questions
 7.1 
List three broad classifications of external, or peripheral, devices.
 7.2 
What is the International Reference Alphabet?
 7.3 
What are the major functions of an I/O module?
 7.4 
List and briefly define three techniques for performing I/O.
 7.5 
What is the difference between memory-mapped I/O and isolated I/O?
 7.6 
When a device interrupt occurs, how does the processor determine which device 
 issued the interrupt?
 7.7 
When a DMA module takes control of a bus, and while it retains control of the bus, 
what does the processor do?
Problems
 7.1 
On a typical microprocessor, a distinct I/O address is used to refer to the I/O data 
registers and a distinct address for the control and status registers in an I/O controller 
for a given device. Such registers are referred to as ports. In the Intel 8088, two I/O 
instruction formats are used. In one format, the 8-bit opcode specifies an I/O opera-
tion; this is followed by an 8-bit port address. Other I/O opcodes imply that the port 
address is in the 16-bit DX register. How many ports can the 8088 address in each I/O 
addressing mode? .
 7.2 
A similar instruction format is used in the Zilog Z8000 microprocessor family. In this 
case, there is a direct port addressing capability, in which a 16-bit port address is part 
of the instruction, and an indirect port addressing capability, in which the instruction 
references one of the 16-bit general purpose registers, which contains the port ad-
dress. How many ports can the Z8000 address in each I/O addressing mode?
 7.3 
The Z8000 also includes a block I/O transfer capability that, unlike DMA, is under the 
direct control of the processor. The block transfer instructions specify a port address 
register (Rp), a count register (Rc), and a destination register (Rd). Rd contains the 
main memory address at which the first byte read from the input port is to be stored. Rc 
is any of the 16-bit general purpose registers. How large a data block can be transferred?
 7.4 
Consider a microprocessor that has a block I/O transfer instruction such as that found 
on the Z8000. Following its first execution, such an instruction takes five clock cycles 
to re-execute. However, if we employ a nonblocking I/O instruction, it takes a total 
of 20 clock cycles for fetching and execution. Calculate the increase in speed with the 
block I/O instruction when transferring blocks of 128 bytes.
 7.5 
A system is based on an 8-bit microprocessor and has two I/O devices. The I/O con-
trollers for this system use separate control and status registers. Both devices handle 
data on a 1-byte-at-a-time basis. The first device has two status lines and three control 
lines. The second device has three status lines and four control lines.
a. How many 8-bit I/O control module registers do we need for status reading and 
control of each device?
b. What is the total number of needed control module registers given that the first 
device is an output-only device?
c. How many distinct addresses are needed to control the two devices?
 7.6 
For programmed I/O, Figure 7.5 indicates that the processor is stuck in a wait loop 
doing status checking of an I/O device. To increase efficiency, the I/O software could 
be written so that the processor periodically checks the status of the device. If the 
device is not ready, the processor can jump to other tasks. After some timed interval, 
the processor comes back to check status again.
a. Consider the above scheme for outputting data one character at a time to a 
printer that operates at 10 characters per second (cps). What will happen if its 
status is scanned every 200 ms?

262  CHAPTER 7 / INPUT/OUTPUT
b. Next consider a keyboard with a single character buffer. On average, characters 
are entered at a rate of 10 cps. However, the time interval between two consecu-
tive key depressions can be as short as 60 ms. At what frequency should the key-
board be scanned by the I/O program?
 7.7 
A microprocessor scans the status of an output I/O device every 20 ms. This is 
 accomplished by means of a timer alerting the processor every 20 ms. The interface of 
the device includes two ports: one for status and one for data output. How long does 
it take to scan and service the device given a clocking rate of 8 MHz? Assume for 
simplicity that all pertinent instruction cycles take 12 clock cycles.
 7.8 
In Section 7.3, one advantage and one disadvantage of memory-mapped I/O, compared 
with isolated I/O, were listed. List two more advantages and two more disadvantages.
 7.9 
A particular system is controlled by an operator through commands entered from a 
keyboard. The average number of commands entered in an 8-hour interval is 60.
a. Suppose the processor scans the keyboard every 100 ms. How many times will the 
keyboard be checked in an 8-hour period?
b. By what fraction would the number of processor visits to the keyboard be reduced 
if interrupt-driven I/O were used?
 7.10 
Consider a system employing interrupt-driven I/O for a particular device that trans-
fers data at an average of 8 KB/s on a continuous basis.
a. Assume that interrupt processing takes about 100 ms (i.e., the time to jump to 
the interrupt service routine (ISR), execute it, and return to the main program). 
 Determine what fraction of processor time is consumed by this I/O device if it 
interrupts for every byte.
b. Now assume that the device has two 16-byte buffers and interrupts the proces-
sor when one of the buffers is full. Naturally, interrupt processing takes longer, 
 because the ISR must transfer 16 bytes. While executing the ISR, the processor 
takes about 8 ms for the transfer of each byte. Determine what fraction of proces-
sor time is consumed by this I/O device in this case.
c. Now assume that the processor is equipped with a block transfer I/O instruction 
such as that found on the Z8000. This permits the associated ISR to transfer each 
byte of a block in only 2 ms. Determine what fraction of processor time is con-
sumed by this I/O device in this case.
 7.11 
In virtually all systems that include DMA modules, DMA access to main memory is 
given higher priority than CPU access to main memory. Why?
 7.12 
A DMA module is transferring characters to memory using cycle stealing, from a 
device transmitting at 9600 bps. The processor is fetching instructions at the rate of 
1 million instructions per second (1 MIPS). By how much will the processor be slowed 
down due to the DMA activity?
 7.13 
Consider a system in which bus cycles takes 500 ns. Transfer of bus control in either direc-
tion, from processor to I/O device or vice versa, takes 250 ns. One of the I/O  devices has 
a data transfer rate of 50 KB/s and employs DMA. Data are transferred 1 byte at a time.
a. Suppose we employ DMA in a burst mode. That is, the DMA interface gains bus 
mastership prior to the start of a block transfer and maintains control of the bus 
until the whole block is transferred. For how long would the device tie up the 
bus when transferring a block of 128 bytes?
b. Repeat the calculation for cycle-stealing mode.
 7.14 
Examination of the timing diagram of the 8237A indicates that once a block transfer 
begins, it takes three bus clock cycles per DMA cycle. During the DMA cycle, the 
8237A transfers one byte of information between memory and I/O device.
a. Suppose we clock the 8237A at a rate of 5 MHz. How long does it take to transfer 
one byte?
b. What would be the maximum attainable data transfer rate?
c. Assume that the memory is not fast enough and we have to insert two wait states 
per DMA cycle. What will be the actual data transfer rate?

7.10 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS  263
 7.15 
Assume that in the system of the preceding problem, a memory cycle takes 750 ns. To 
what value could we reduce the clocking rate of the bus without effect on the attain-
able data transfer rate?
 7.16 
A DMA controller serves four receive-only telecommunication links (one per DMA 
channel) having a speed of 64 Kbps each.
a. Would you operate the controller in burst mode or in cycle-stealing mode?
b. What priority scheme would you employ for service of the DMA channels?
 7.17 
A 32-bit computer has two selector channels and one multiplexor channel. Each selec-
tor channel supports two magnetic disk and two magnetic tape units. The multiplexor 
channel has two line printers, two card readers, and 10 VDT terminals connected to it. 
Assume the following transfer rates:
Disk drive
800 Kbytes/s
Magnetic tape drive
200 Kbytes/s
Line printer
6.6 Kbytes/s
Card reader
1.2 Kbytes/s
VDT
1 Kbyte/s
Estimate the maximum aggregate I/O transfer rate in this system.
 7.18 
A computer consists of a processor and an I/O device D connected to main memory 
M via a shared bus with a data bus width of one word. The processor can execute a 
maximum of 106 instructions per second. An average instruction requires five 
 machine cycles, three of which use the memory bus. A memory read or write 
 operation uses one machine cycle. Suppose that the processor is continuously exe-
cuting “background” programs that require 95% of its instruction execution rate but 
not any I/O instructions. Assume that one processor cycle equals one bus cycle. Now 
suppose the I/O device is to be used to transfer very large blocks of data  between 
M and D.
a. If programmed I/O is used and each one-word I/O transfer requires the processor 
to execute two instructions, estimate the maximum I/O data-transfer rate, in words 
per second, possible through D.
b. Estimate the same rate if DMA is used.
 7.19 
A data source produces 7-bit IRA characters, to each of which is appended a parity 
bit. Derive an expression for the maximum effective data rate (rate of IRA data bits) 
over an R-bps line for the following:
a. Asynchronous transmission, with a 1.5-unit stop bit
b. Bit-synchronous transmission, with a frame consisting of 48 control bits and 128 
information bits
c. Same as (b), with a 1024-bit information field
d. Character-synchronous, with 9 control characters per frame and 16 information 
characters
e. Same as (d), with 128 information characters
 7.20 
The following problem is based on a suggested illustration of I/O mechanisms in 
[ECKE90] (Figure 7.24):
Two women are on either side of a high fence. One of the women, named 
 Apple-server, has a beautiful apple tree loaded with delicious apples growing on her 
side of the fence; she is happy to supply apples to the other woman whenever needed. 
The other woman, named Apple-eater, loves to eat apples but has none. In fact, she 
must eat her apples at a fixed rate (an apple a day keeps the doctor away). If she eats 
them faster than that rate, she will get sick. If she eats them slower, she will suffer mal-
nutrition. Neither woman can talk, and so the problem is to get apples from Apple-
server to Apple-eater at the correct rate.
a. Assume that there is an alarm clock sitting on top of the fence and that the clock 
can have multiple alarm settings. How can the clock be used to solve the problem? 
Draw a timing diagram to illustrate the solution.

264  CHAPTER 7 / INPUT/OUTPUT
b. Now assume that there is no alarm clock. Instead Apple-eater has a flag that 
she can wave whenever she needs an apple. Suggest a new solution. Would it be 
 helpful for Apple-server also to have a flag? If so, incorporate this into the solu-
tion. Discuss the drawbacks of this approach.
c. Now take away the flag and assume the existence of a long piece of string. Suggest 
a solution that is superior to that of (b) using the string.
 7.21 
Assume that one 16-bit and two 8-bit microprocessors are to be interfaced to a system 
bus. The following details are given:
1. All microprocessors have the hardware features necessary for any type of data 
transfer: programmed I/O, interrupt-driven I/O, and DMA.
2. All microprocessors have a 16-bit address bus.
3. Two memory boards, each of 64-Kbytes capacity, are interfaced with the bus. The 
designer wishes to use a shared memory that is as large as possible.
4. The system bus supports a maximum of four interrupt lines and one DMA line.
Make any other assumptions necessary, and
a. Give the system bus specifications in terms of number and types of lines.
b. Describe a possible protocol for communicating on the bus (i.e., read-write, inter-
rupt, and DMA sequences).
c. Explain how the aforementioned devices are interfaced to the system bus.

CHAPTER
OPERATING SYSTEM SUPPORT
8.1 
Operating System Overview
Operating System Objectives and Functions
Types of Operating Systems
8.2 
Scheduling
Long-Term Scheduling
Medium-Term Scheduling
Short-Term Scheduling
8.3 
Memory Management
Swapping
Partitioning
Paging
Virtual Memory
Translation Lookaside Buffer
Segmentation
8.4 
Pentium Memory Management
Address Spaces
Segmentation
Paging
8.5 
ARM Memory Management
Memory System Organization
Virtual Memory Address Translation
Memory-Management Formats
Access Control
8.6 
Recommended Reading
8.7 
Key Terms, Review Questions, and Problems
