<!-- PROVENANCE: subject_code=BCS303 | subject_name=Operating Systems | semester=3 | source_type=TEXTBOOK_DIGEST | source_file=textbook_notes.md | extraction_method=STRUCTURED_COMPREHENSIVE | confidence=0.95 -->

# BCS303 — Textbook Notes

**Subject:** BCS303 (Operating Systems)
**Content type:** textbook_notes
**Source:** textbook_notes.md

---

# BCS303 — Textbook Notes (Module-wise)
**Subject:** Operating Systems
**Generated:** 2026-10-02

---

## Module 1 Textbook

1.1 
CH 
ER 
An 
is a program that manages the computer hardware. It 
also provides a basis for application programs and acts as an intermediary 
between the computer user and the computer hardware. An amazing aspect 
of operating systems is how varied they are in accomplishing these tasks. 
Mainframe operating systems are designed primarily to optimize utilization 
of hardware. Personal computer (PC) operating systems support complex 
games, business applications, and everything in between. Operating systems 
for handheld computers are designed to provide an environment in which a 
user can easily interface with the computer to execute programs. Thus, some 
operating systems are designed to be convenient, others to be efficient, and others 
some combination of the two. 
Before we can explore the details of computer system operation, we need 
to know something about system structure. We begin by discussing the basic 
functions of system startup, I/0, and storage. We also describe the basic 
computer architecture that makes it possible to write a functional operating 
system. 
Because an operating system is large and complex, it must be created 
piece by piece. Each of these pieces should be a well-delineated portion of the 
system, with carefully defined inputs, outputs, and functions. In this chapter, 
we provide a general overview of the major components of an operating 
system. 
To provide a grand tour of the major components of operating systems. 
To describe the basic organization of computer systems. 
We begin our discussion by looking at the operating system's role in the 
overall computer system. A computer system can be divided roughly into 

Chapter 1 
compiler 
assembler 
text editor 
operating system 
database 
system 
Figure 1.1 
Abstract view of the components of a computer system. 
four components: the hardware/ the operating system, the application programs/ 
and the users (Figure 1.1). 
The hardwa.te-the 
the 
and the 
<ievices-provides the basic computing resources for the 
system. The 
as word processors/ spreadsheets/ 
compilers, and Web browsers-define the ways in which these resources are 
used to solve users' computing problems. The operating system controls the 
hardware and coordinates its use among the various application programs for 
the various users. 
We can also view a computer system as consisting of hardware/ software/ 
and data. The operating system provides the means for proper use of these 
resources in the operation of the computer system. An operating system is 
similar to a government. Like a government, it performs no useful function by 
itself. It simply provides an environment within which other programs can do 
useful work. 
To understand more fully the operating systemfs role, we next explore 
operating systems from two viewpoints: that of the user and that of the system. 
1.1.1 
User View 
The user's view of the computer varies according to the interface being 
used. Most computer users sit in front of a PC, consisting of a monitor/ 
keyboard/ mouse, and system unit. Such a system is designed for one user 
to monopolize its resources. The goal is to maximize the work (or play) that 
the user is performing. In this case/ the operating system is designed mostly 
for 
with some attention paid to performance and none paid 
to 
various hardware and software resources are 
shared. Performance is, of course, important to the user; but such systems 

1.1 

are optimized for the single-user experience rather than the requirements of 
multiple users. 
In other cases, a user sits at a terminal connected to a 
or a 
Other users are accessing the sance computer through other 
terminals. These users share resources and may exchange information. The 
operating system in S"Llclc cases is designed to maximize resource utilization-
to assure that all available CPU time, memory, and I/0 are used efficiently and 
tbat no individual user takes more than her fair share. 
In still otber cases, users sit at 
connected to networks of 
other workstations and 
These users have dedicated resources at their 
disposal, but they also share resources such as networking and servers-file, 
compute, and print servers. Therefore, their operating system is designed to 
compromise between individual usability and resource utilization. 
Recently, many varieties of handheld computers have come into fashion. 
Most of these devices are standalone units for individual users. Some are 
connected to networks, either directly by wire or (more often) through wireless 
modems and networking. Because of power, speed, and interface limitations, 
they perform relatively few remote operations. Their operating systems are 
designed mostly for individual usability, but performance per unit of battery 
life is important as well. 
Some computers have little or no user view. For example, embedded 
computers in home devices and automobiles may have numeric keypads and 
may turn indicator lights on or off to show status, but they and their operating 
systems are designed primarily to run without user intervention. 
1.1.2 System View 
From the computer's point of view, the operating system is the program 
most intimately involved with the hardware. In this context, we can view 
an operating system as a 
. A computer system has many 
resources that may be required to solve a problem: CPU time, memory space, 
file-storage space, I/0 devices, and so on. The operating system acts as the 
manager of these resources. Facing numerous and possibly conflicting requests 
for resources, the operating system must decide how to allocate them to specific 
programs and users so that it can operate the computer system efficiently and 
fairly. As we have seen, resource allocation is especially important where many 
users access the same mainframe or minicomputer. 
A slightly different view of an operating system emphasizes the need to 
control the various I/0 devices and user programs. An operating system is a 
control program. A 
manages the execution of user programs 
to prevent errors and improper use of the computer. It is especially concerned 
with the operation and control of I/O devices. 
1.1.3 Defining Operating Systems 
We have looked at the operating system's role from the views of the user 
and of the system. How, though, can we define what an operating system 
is? In general, we have no completely adequate definition of an operating 
system. Operating systems exist because they offer a reasonable way to solve 
the problem of creating a usable computing system. The fundamental goal 
of computer systems is to execute user programs and to make solving user 

Chapter 1 
1.2 
STORAGE DEFINITIONS AND NOTATION 
A 
is the basic unit of computer storage. It can contain one of two values, 
zero and one. All other storage in a computer is based on collections of bits. 
Given enough bits, it is amazing how many things a computer can represent: 
numbers, letters, images, movies, sounds, documents, and programs, to name 
a few. A 
is 8 bits, and on most computers it is the smallest convenient 
chunk of storage. For example, most computers don't have an instruction 
to move a bit but do have one to move a byte. A less common term is 
which is a given computer architecture's native storage unit. A word is 
generally made up of one or more bytes. For example, a computer may have 
instructions to move 64-bit (8-byte) words. 
A kilobyte, or KB, is 1,024 bytes; a megabyte, or MB, is 1,0242 bytes; and 
a gigabyte, or GB, !s 1,0243 bytes. Computer manufacturers often round off 
these numbers and say that a megabyte is 1 million bytes and a gigabyte is 1 
billion bytes. 
problems easier. Toward this goal, computer hardware is constructed. Since 
bare hardware alone is not particularly easy to use, application programs are 
developed. These programs require certain common operations, such as those 
controlling the II 0 devices. The common functions of controlling and allocating 
resources are then brought together into one piece of software: the operating 
system. 
In addition, we have no universally accepted definition of what is part of the 
operating system. A simple viewpoint is that it includes everything a vendor 
ships when you order "the operating system." The features included, however, 
vary greatly across systems. Some systems take up less than 1 megabyte of 
space and lack even a full-screen editor, whereas others require gigabytes of 
space and are entirely based on graphical windowing systems. A more common 
definition, and the one that we usually follow, is that the operating system 
is the one program running at all times on the computer-usually called 
the 
. (Along with the kernel, there are two other types of programs: 
which are associated with the operating system but are not 
part of the kernel, and 
which include all programs not 
associated with the operation of the system.) 
The matter of what constitutes an operating system has become increas-
ingly important. In 1998, the United States Deparhnent of Justice filed suit 
against Microsoft, in essence claiming that Microsoft included too much func-
tionality in its operating systems and thus prevented application vendors from 
competing. For example, a Web browser was an integral part of the operating 
systems. As a result, Microsoft was found guilty of using its operating-system 
monopoly to limit competition. 
Before we can explore the details of how computer systems operate, we need 
general knowledge of the structure of a computer system. In this section, 
we look at several parts of this structure. The section is mostly concerned 

1.2 
THE STUDY OFOPERATING SYSTEMS 
There has neverbeenarnore interestirighnwtostud yoperating systems:· and 
it has neverb.een.e~sier.Theopen-sourc;e movernent has overtaken .operating 
systems, caJ.tsing marly ofthenctobemadeavailable in both source and binary 
(e~ecuta]Jle) fonnat.·.This Iistindud~~Linu)(, BSDUNIX/Solat•is,and part of• 
]\II~cos.x. Th~availa~ilityqf·source.code.q,llowsus.tostudyoperq,til}.gsy?tems 
frorrt theinsid,eout' . Questionsthat previo)1sly could onlyb~ answerecL~y 
looking atdocumentaticmor thebehayior.ofan op~rating system c.annow be 
answered by examining the code itself. 
In additi?n,. the rise of virtualization as a ll}.ainsfreafll. ( andfrequelltly free) 
cmnp)1ter ftmctionmakesitpos;~i1Jlet()runnmnyoperqtingsystems.ontop.of 
onecoresystem .. Forexample,VMware(J:lttp.://www .• vmwarE:).com):provides 
afree·''player'' on which hundreds.of free .''virtualappliilnces'' cann.m.Using 
this method,students call tryolit hundreds. ofoperatingsystems.withintheir 
existing operatingsystems .atno cost. 
... ··. . .. 
.·. ·.. · 
... · 
Operating .sy~temsthat are no lortge~ ~ofllmerci~lly viableltave been 
opell-~o}lrced asvvell, ·enablirtg·.usto study how system~ pperated i~< 
time.of•.•f~v.r~r CPU, ll}.emory,•·•etnd.storcrge•·•·.resoJ.trces,·····.An ... exten~iye.b).It·•not 
complete .•. list ()f 9pen'-sourct operafirtg-"system pr?j~?ts is .. availa~le £rom 
ht~p :// dm()~ ' org/ C:omp)1ters/Softp(lre /Operati»g:-Systems/p~~m._Sourc~/-
S. i.m 
.. • .. •· .. ·.u. l·a·t·o . .rs.•· .. o··.f······s·· .. P 
... e 
... c 
.. i.fi 
.. ·.·c·· . ·. ·•.h 
..... a 
... ·.r 
... ·.d 
...• w ... •·.a .•. r 
... e 
..... ·.· .... ar .. e· 
.. · .a·l·s·o 
.. · 
...... a·.··v 
.. •· ... a.il .. ·<1. b 
... ·.·.le·· ... ·.i·n···.· 
. · 
... · ... s .. om 
.•. ·. · 
. e. •.·.c.·.· .... a····.·s·e· s. '···· ... al . I.·.o 
....... w.· 
.•.. m.· .•··.g .. 
th~ operat~<g systell}.to.runon.''na~ve''.hardware, ... all~ithrrtthec?l}.fines 
of a modem CO!TIPJ-Iter and moderJ1 OPf/'atirtg ~ystem. For: example, a 
DECSYSTEMc20 simulator running on Mac OS X can boot TOPS-20, loa~. the 
~ource.tages;.·and modify al'ld comp~le·<l·.J:t.evvTOPS-20 .k~rneL ··Art·interested 
stltdent ~ar• search theint~rnet to find the origillal papers that de~cribe the 
operating systemand .. the.origipa~ manuals: 
Tl<e adve~t?fogen-source operafirtg sy~te1Tis also l}."lal<es it easy t?··.make 
the move fromstu~enttooper<:lting~systemdeveloper.With some knov.rledge, 
som~ effo1't, a11d an Internet connection,a student c;al'leven create a new 
operating-systemdistribution! Justa. fev.r years, ~go itwas diffic]_llt or 
if1Lpossible ··to. get acce~s·. to ·source co?e . . N?v.r·. that access is.·liJnited only 
bylt()wmuchtimeand disk space a student has. 
· 

with computer-system organization, so you can skim or skip it if you already 
understand the concepts. 
1.2.1 Computer-System Operation 
A modern general-purpose computer system consists of one or more CPUs 
and a number of device controllers connected through a common bus that 
provides access to shared memory (Figure 1.2). Each device controller is in 
charge of a specific type of device (for example, disk drives, audio devices, and 
video displays). The CPU and the device controllers can execute concurrently, 
competing for memory cycles. To ensure orderly access to the shared memory, 
a memory controller is provided whose function is to synchronize access to the 
memory. 
For a computer to start rum<ing-for instance, when it is powered 
up or rebooted-it needs to have an initial program to run. This initial 

Chapter 1 
mouse 
keyboard 
printer 
monitor 
O ~~~ 
(_rlo•i-nneh b 
Figure 1.2 A modern computer system. 
program, or 
tends to be simple. Typically, it is stored 
in read-only memory 
or electrically erasable programmable read-only 
memory 
known by the general term 
within the computer 
hardware. It initializes all aspects of the system, from CPU registers to device 
controllers to memory contents. The bootstrap program must know how to load 
the operating system and how to start executing that system. To accomplish this 
goal, the bootstrap program must locate and load into memory the operating-
system kernel. The operating system then starts executing the first process, 
such as "init," and waits for some event to occur. 
The occurrence of an event is usually signaled by an 
from either 
the hardware or the software. Hardware may trigger an interrupt at any time 
by sending a signal to the CPU, usually by way of the system bus. Software 
may trigger an interrupt 
executing a special operation called a 
(also called a 
When the CPU is interrupted, it stops what it is doing and immediately 
transfers execution to a fixed location. The fixed location usually contains 
the starting address where the service routine for the interrupt is located. 
The interrupt service routine executes; on completion, the CPU resumes the 
interrupted computation. A time line of this operation is shown in Figure 1.3. 
Interrupts are an important part of a computer architecture. Each computer 
design has its own interrupt mechanism, but several functions are common. 
The interrupt must transfer control to the appropriate interrupt service routine. 
The straightforward method for handling this transfer would be to invoke a 
generic routine to examine the interrupt information; the routine, in turn, 
would call the interrupt-specific handler. However, interrupts must be handled 
quickly. Since only a predefined number of interrupts is possible, a table of 
pointers to interrupt routines can be used instead to provide the necessary 
speed. The interrupt routine is called indirectly through the table, with no 
intermediate routine needed. Generally, the table of pointers is stored in low 
memory (the first hundred or so locations). These locations hold the addresses 
of the interrupt service routines for the various devices. This array, or 
of addresses is then indexed by a unique device number, given with 
the interrupt request, to provide the address of the interrupt service routine for 

CPU 
user 
1/0 
device 
process 
executing 
1/0 interrupt 
processing 
idle 
"~""~-~-
tmcefeniog 
I L 
.. 
1/0 
request 
1.2 
ll 
v 
-~~'"''''''~'"''"-~~ -~~-"] 
t---~---
''m'] 
L,~"~~~ 
transfer 
done 
1/0 
transfer 
request 
done 
Figure 1.3 Interrupt time line for a single process doing output. 

the interrupting device. Operating systems as different as Windows and UNIX 
dispatch interrupts in this manner. 
The interrupt architecture must also save the address of the interrupted 
instruction. Many old designs simply stored the interrupt address in a 
fixed location or in a location indexed by the device number. More recent 
architectures store the return address on the system stack. If the interrupt 
routine needs to modify the processor state-for instance, by modifying 
register values-it must explicitly save the current state and then restore that 
state before returning. After the interrupt is serviced, the saved return address 
is loaded into the program counter, and the interrupted computation resumes 
as though the interrupt had not occurred. 
1.2.2 Storage Structure 
The CPU can load instructions only from memory, so any programs to run must 
be stored there. General-purpose computers run most of their programs from 
rewriteable memory, called main memory (also called 
or RAM). Main 
commonly is implemented in a semiconductor 
technology called 
Computers use 
other forms of memory as well. Because the read-only memory (ROM) camwt 
be changed, only static programs are stored there. The immutability of ROM 
is of use in game cartridges. EEPROM camwt be changed frequently and so 
contains mostly static programs. For example, smartphones have EEPROM to 
store their factory-il<stalled programs. 
All forms of memory provide an array of words. Each word has its 
own address. Interaction is achieved through a sequence of load or store 
instructions to specific memory addresses. The load instruction moves a word 
from main memory to an internal register within the CPU, whereas the store 
instruction moves the content of a register to main memory. Aside from explicit 
loads and stores, the CPU automatically loads instructions from main memory 
for execution. 
A typical instruction-execution cycle, as executed on a system with a 
architecture, first fetches an il1struction from memory and stores 
that instruction in the 
. The instruction is then decoded 
and may cause operands to be fetched from memory and stored in some 

Chapter 1 
internal register. After the instruction on the operands has been executed, the 
result may be stored back in memory. Notice that the memory unit sees only 
a stream of memory addresses; it does not know how they are generated (by 
the instruction counter, indexing, indirection, literal addresses, or some other 
means) or what they are for (instructions or data). Accordingly, we can ignore 
how a memory address is generated by a program. We are interested only in 
the sequence of memory addresses generated by the running program. 
Ideally, we want the programs and data to reside in main ncemory 
permanently. This arrangement usually is not possible for the following two 
reasons: 
Main memory is usually too small to store all needed programs and data 
permanently. 
Main memory is a volatile storage device that loses its contents when 
power is turned off or otherwise lost. 
Thus, most computer systems provide 
as an extension 
of main memory. The main requirement for secondary storage is that it be able 
to hold large quantities of data permanently. 
The most common secondary-storage device is a 
which 
provides storage for both programs and data. Most programs (system and 
application) are stored on a disk until they are loaded into memory. Many 
programs then use the disk as both the source and the destination of their 
processing. Hence, the proper management of disk storage is of central 
importance to a computer system, as we discuss in Chapter 12. 
In a larger sense, however, the storage structure that we have described-
consisting of registers, main memory, and magnetic disks-is only one of many 
possible storage systems. Others include cache memory, CD-ROM, magnetic 
tapes, and so on. Each storage system provides the basic functions of storing 
a datum and holding that datum until it is retrieved at a later time. The main 
differences among the various storage systems lie in speed, cost, size, and 
volatility. 
The wide variety of storage systems in a computer system can be organized 
in a hierarchy (Figure 1.4) according to speed and cost. The higher levels are 
expensive, but they are fast. As we move down the hierarchy, the cost per bit 
generally decreases, whereas the access time generally increases. This trade-off 
is reasonable; if a given storage system were both faster and less expensive 
than another-other properties being the same-then there would be no 
reason to use the slower, more expensive memory. In fact, many early storage 
devices, including paper tape and core memories, are relegated to museums 
now that magnetic tape and 
have become faster and 
cheaper. The top four levels of memory in Figure 1.4 may be constructed using 
semiconductor memory. 
In addition to differing in speed and cost, the various storage systems 
are either volatile or nonvolatile. As mentioned earlier, 
loses 
its contents when the power to the device is removed. In the absence of 
expensive battery and generator backup systems, data must be written to 
for safekeeping. In the hierarchy shown in Figure 1.4, the 
the electronic disk are volatile, whereas those below 

1.3 

Figure 1.6 Symmetric multiprocessing architecture. 
Solaris. The benefit of this model is that many processes can run simultaneously 
-N processes can run if there are N CPUs-without causing a significant 
deterioration of performance. However, we must carefully control I/0 to 
ensure that the data reach the appropriate processor. Also, since the CPUs 
are separate, one may be sitting idle while another is overloaded, resulting in 
inefficiencies. These inefficiencies can be avoided if the processors share certain 
data structures. A multiprocessor system of this form will allow processes and 
resources-such as memory-to be shared dynamically among the various 
processors and can lower the variance among the processors. Such a system 
must be written carefully, as we shall see in Chapter 6. Virtually all modern 
operating systems-including Windows, Windows XP, Mac OS X, and Linux 
-now provide support for SMP. 
The difference between symmetric and asymmetric multiprocessing may 
result from either hardware or software. Special hardware can differentiate the 
multiple processors, or the software can be written to allow only one master and 
multiple slaves. For instance, Sun's operating system SunOS Version 4 provided 
asymmetric multiprocessing, whereas Version 5 (Solaris) is symmetric on the 
same hardware. 
Multiprocessing adds CPUs to increase computing power. If the CPU has an 
integrated memory controller, then adding CPUs can also increase the amount 
of memory addressable in the system. Either way, multiprocessing can cause 
a system to change its memory access model from uniform memory access 
to non-uniform memory access 
UMA is defined as the situation 
in which access to any RAM from any CPU takes the same amount of time. With 
NUMA, some parts of memory may take longer to access than other parts, 
creating a performance penalty. Operating systems can minimize the NUMA 
penalty through resource management_, as discussed in Section 9.5.4. 
A recent trend in CPU design is to in.clude multiple computing 
on 
a single chip. In essence, these are multiprocessor chips. They can be more 
efficient than multiple chips with single cores because on-chip communication 
is faster than between-chip communication. In addition, one chip with multiple 
cores uses significantly less power than multiple single-core chips. As a result, 
multicore systems are especially well suited for server systems such as database 
and Web servers. 

Chapter 1 
Figure 1.7 A dual-core design with two cores placed on the same chip. 
In Figure 1.7, we show a dual-core design with two cores on the same 
chip. In this design, each core has its own register set as well as its own local 
cache; other designs might use a shared cache or a combination of local and 
shared caches. Aside from architectural considerations, such as cache, memory, 
and bus contention, these multicore CPUs appear to the operating system 
as N standard processors. This tendency puts pressure on operating system 
designers-and application programmers-to make use of those CPUs. 
Finally, 
are a recent development in which multiple processor 
boards, I/0 boards, and networking boards are placed in the same chassis. 
The difference between these and traditional multiprocessor systems is that 
each blade-processor board boots independently and runs its own operating 
system. Some blade-server boards are n1.ultiprocessor as well, which blurs the 
lines between types of computers. In essence, these servers consist of multiple 
independent multiprocessor systems. 
1.3.3 Clustered Systems 
Another type of multiple-CPU system is the 
Like multipro-
cessor systems, clustered systems gather together multiple CPUs to accomplish 
computational work. Clustered systems differ from multiprocessor systems, 
however, in that they are composed of two or more individual systems-or 
nodes-joined together. The definition of the term clustered is not concrete; 
many commercial packages wrestle with what a clustered system is and why 
one form is better than another. The generally accepted definition is that clus-
tered computers share storage and are closely linked via a JC'.H.a,,·o.x 
(as described in Section 1.10) or a faster interconnect, such as InfiniBand. 
Clustering is usually used to provide 
service; that is, 
service will continue even if one or more systems in the cluster faiL High 
availability is generally obtained by adding a level of redundancy in the 
system. A layer of cluster software runs on the cluster nodes. Each node can 
monitor one or more of the others (over the LAN). If the monitored machine 
fails, the monitoring machine can take ownership of its storage and restart the 
applications that were running on the failed machine. The users and clients of 
the applications see only a brief interruption of service. 

1.3 
BEOWULF CLUSTERS 
Beowulf clusters are designed for solving high-performance computing 
tasks. These clusters are built using comm.odi ty hard ware-such as. personal 
computers-that are connected via a simple local area network Interestingly, 
a Beowulf duster uses no one specific software package but rather consists 
of a set of open-source software libraries that allow the con1puting nodes 
in the cluster to communicate with one another .. Thus,.there are a variety of 
approaches for constructing a Beowulf cluster, although Beowulf computing 
nodes typically run the Linux operating system. Since Beowulf clusters 
require no special hardware and operate using open~source software that 
is freely available, they offer a low-cost strategy for building a high~ 
performance computing cluster. In fact, some Beowulf clusters built from 
collections of discarded personal computers are using ht.mdreds of cornputing 
nodes to solve computationally expensive problems in scientific computing. 
Clusterin.g can be structured 
or symmetrically. In 

one machine is in 
while the other is 
rmming the applications. The hot-standby host machine does nothing but 
monitor the active server. If that server fails, the hot-standby host becomes the 
active server. In 
two or more hosts are rmming applications 
and are monitoring each other. This mode is obviously more efficient, as it uses 
all of the available hardware. It does require that more than one application be 
available to run. 
As a cluster consists of several 
clusters may also be used to provide 
environ-
ments. Such systems can supply significantly greater computational power 
than single-processor or even SMP systems because they are capable of running 
an application concurrently on all computers in the cluster. However, appli-
cations must be written 
to take advantage of the cluster by using 
a technique known as 
which consists of dividing a program 
into separate components that run in parallel on individual computers in the 
cluster. Typically, these applications are designed so that once each computing 
node in the cluster has solved its portion of the problem, the results from all 
the nodes are combined into a final solution. 
Other forms of clusters include parallel clusters and clustering over a 
wide-area network (WAN) (as described in Section 1.10). Parallel clusters allow 
multiple hosts to access the same data on the shared storage. Because most 
operating systems lack support for simultaneous data access by multiple hosts, 
parallel clusters are usually accomplished by use of special versions of software 
and special releases of applications. For example, Oracle Real Application 
Cluster is a version of Oracle's database that has been designed to run on 
a parallel cluster. Each machine runs Oracle, and a layer of software tracks 
access to the shared disk. Each machine has full access to all data in the 
database. To provide this shared access to data, the system must also supply 
access control and locking to ensure that no conflicting operations occur. This 
function, commonly known as a 
is included 
in some cluster technology. 

Chapter 1 
1.4 
interconnect 
interconnect 
computer 
computer 
computer 
Figure 1.8 General structure of a clustered system. 
Cluster technology is changing rapidly. Some cluster products support 
dozens of systems in a cluster, as well as clustered nodes that are separated 
by miles. Many of these improvements are made possible by 
(SAJ·~Is), as described in Section 12.3.3, which allow many systems 
to attach to a pool of storage. If the applications and their data are stored on 
the SAN, then the cluster software can assign the application to run on any 
host that is attached to the SAN. If the host fails, then any other host can take 
over. In a database cluster, dozens of hosts can share the same database, greatly 
increasing performance and reliability. Figure 1.8 depicts the general structure 
of a clustered system. 
Now that we have discussed basic information about computer-system orga-
nization and architecture, we are ready to talk about operating systems. 
An operating system provides the envirorunent within which programs are 
executed. Internally, operating systems vary greatly in their makeup, since 
they are organized along many different lines. There are, however, many 
commonalities, which we consider in this section. 
One of the most important aspects of operating systems is the ability 
to multiprogram. A single program cannot, in generat k~~p~ith_er thg CPU 
ortbt?J/Qgey:ic:es 1Jusy_C1t all times: Single users frequently have multiple 
programs running. Il.ul 
increases CPU utilization byorganizing 
jobs(codeand datafso 
. 
. ... . . _ 
hasoi1(0tO execl1te. 
-
· 
---- fhe idea is as follows: The op-ei:atlng system keeps several jobs in memory 
simultaneously (Figure 1.9). Since, in generat main memory is too small to 
accommodate all jobs, the jobs are kept initially on the disk in the 
This pool consists of all processes residing on disk awaiting allocation of main 
memory. 
Ih~ setofjobs inmemg_ry_canbe asubt:;et of the jobs kept in thejql:Jpoo1. 
The operating system picks and begins to execute one of the jobs in memory. 
Eventually, the job may have to wait for some task, such as an I/O operation, 

1.4 

Figure 1.9 Memory layout for a multiprogramming system. 
!()_C()_tnpl~te: In a non-multiprogrammed system, the CPU would sit idle. In 
a multiprogrammed system, the operatilcg system simply switches to, and 
executes, another job. When that job needs to wait, the CPU is switched to 
another job, and so on. Eventually the first job finishes waiting and gets the 
CPU back. As long as at least one job needs to execute, the CPU is never idle. 
This idea is common in other life situations. A lawyer does not work for 
only one client at a time, for example. While one case is waiting to go to trial 
or have papers typed, the lawyer can work on another case. If he has enough 
clients, the lawyer will never be idle for lack of work. (Idle lawyers tend to 
become politicians, so there is a certain social value in keeping lawyers busy.) 
Multiprogrammed systems provide an environment in which the various 
system resources (for example, CPU, memory, and peripheral devices) are 
utilized effectively, but they do not provide for user interaction with the 
computer system. 
is_~l()gi~alex_tension of 
multiprogramming. ~' time-s!caring syste~s,the CPl] execu~eslnl1ltiplejobs 
by switcll.Ing~ainong them, but the switches occur so frequently that the ~1sers 
canh~teract with eachprograffi~v Ere l.t1sil.mning.--···· 
-Ti1ne shar:il~g requi.i-es an 
. . (or 
-
which provides direct communication between the user and the system. The 
user gives instructions to the operating system or to a program directly, using a 
input device such as a keyboard or a mouse, and waits for immediate results on 
an output device. Accordingly, !!'te 
sho~1ld be sh()rt=typically 
less than one second. 
A time-shared operating system allows many users to share the computer 
simultaneously. Since each action or command in a time-shared system tends 
to be short, only a little CPU time is needed for each user. As the system switches 
rapidly from one user to the next, each user is given the impression that the 
entire computer system is dedicated to his use, even though it is being shared 
among many users. 
A time-shared operating system 11ses CPU scheduling and multiprogram-
ming to provide each user with a small portion of a time-shared computer. 
Eachuserhas atleast or:t_e S§parateprogra111inmemory. A program loaded into 

1.5 
Chapter 1 
memory and executing is called a 
When a process executes, it typically 
executes for only a short tirne 
it either finishes or needs to perform I/0. 
I/0 may be interactive; that is, output goes to a display for the user, and input 
comes from a user keyboard, mouse, or other device. Since interactive I/0 
typically runs at "people speeds," it may take a long time to complete. Input, 
for example, may be bounded by the user's typing speed; seven characters per 
second is fast for people but incredibly slow for computers. Rather than let 
the CPU sit idle as this interactive input takes place, the operating system will 
rapidly switch the CPU to the program of some other user. 
Time sharing and multiprogramming require that several jobs be kept 
simultaneously in memory. If several jobs are ready to be brought into memory, 
and if there is not enough room for all of them, then the system must choose 
among them. Making this decision is 
which is discussed in 
Chapter 5. When the operating system selects a job from the job pool, it loads 
that job into memory for execution. Having several programs in memory at the 
same time requires some form of memory management, which is covered in 
Chapters 8 and 9. In addition, !f_s~veraJjq}Jsaxere(lclY to rw~at the same time, 
the system must choose among them. Making this decision i~ _ _ sd1,2dviii·lg, 
which is discussed in Chapter 5. Finally, running multiple jobscoi~cl.lrl:ei1Hy 
requires that their ability to affect one another be limited in all phases of the 
operating system, including process scheduling, disk storage, and memory 
management. These considerations are discussed throughout the text. 
In a time-sharing system, the operating system must ensure reasonable 
response time, which is sometimes accomplished through 
where 
processes are swapped in and out of main memory to the disk. A more common 
method for achieving this goal 
tec:hDiql1~_fuC!t __ CillQws._ 
the execution of aprocessthat isnot completely inl1le1Yl_clD~- (Chapter 9). 
The main advai1tage of the virtual-memory scheme is that it enables users 
to run programs that are larger than actual 
. Further, it 
abstracts main memory into a large, uniform array of storage, separating logical 
as viewed by the user from physical memory. This arrangement frees 
programmers from concern over memory-storage limitations. 
Time-sharing systems must also provide a file system (Chapters 10 and 11). 
The file system resides on a collection of disks; hence, disk management must 
be provided (Chapter 12). Also, time-sharing systems provide a mechanism for 
protecting resources from inappropriate use (Chapter 14). To ensure orderly 
execution, the system must provide mechanisms for job synchronization and 
communication (Chapter 6), and it may ensure that jobs do not get stuck in a 
deadlock, forever waiting for one another (Chapter 7). 
}\SI1[e11tio11ecl ~arlier, rn()clETnopexatli1KSYStems_m~e _ 
If there 
are no processes to execute, no I/0 devices to service, and no users to whom 
to respond, an operating system will sit quietly waiting for something to 
happen. Events are almost always signaled by the occurrence of an interrupt 
or a trap. 
(or an 
is_ a software~generated interruptca~seci 
~it[ler byan error (for 
division byzero or invalid memory acc~ss_) 
or by a specific request from a user program that an operating-system service 

1.5 

be performed. The interrupt-driven nature of an operating system defines 
that system's general structure. For each type of interrupt, separate segments 
of code in the operating system determine what action should be taken. An 
interrupt service routine is provided that is responsible for dealing with the 
interrupt. 
Since the operating system and the users share the hardware and software 
resources of the computer system, we need to make sure that an error in a 
user program could cause problems only for the one program running. With 
sharing, many processes could be adversely affected by a bug in one program. 
For example, if a process gets stuck in an infinite loop, this loop could prev.ent 
the correct operation of many other processes. More subtle errors can occur 
in a multiprogramming system, where one erroneous program might modify 
another program, the data of another program, or even the operating system 
itself. 
Without protection against these sorts of errors, either the computer must 
execute only one process at a time or all output must be suspect. A properly 
designed operating system must ensure that an incorrect (or malicious) 
program cannot cause other program~ to .~X.t;cute incorrectly. 
~~,;~,_C: 
·· 
;·..c·~ 
1.5.1 Dual-Mode Operation · 
In order to ensure the proper execution of the operating system, we must be 
able to distinguish between the execution of operating-system code and user-
defined code. The approach taken by most computer systems is to provide 
hardware support that allows us to differentiate among various modes of 
execution. 
At the very least we need two 
and 
(also called 
or 
A bit, called the 
is added to the hardware of the computer to 
indicate the current mode: kernel (0) or user (1). \!Viththeplode1:Jit\!Ve2lrea]Jle 
to distinguishbetween a task that is executed onbehalf of the operating system 
aicd one that is executeci on behalfoftheJJser, When tl~e computer systel.n1s 
executing on behalf of a user application, the system is in user mode. However, 
when a user application requests a service from the operating system (via a 
.. system call), it must transition from user to kernel mode to fulfill the request. 
/ This is shown in Figure 1.10. As we shall see, this architectural enhancement is 
useful for many other aspects of system operation as well. 
execute system call 
Figure 1. i 0 Transition from user to kernel mode. 
user mode 
(mode bit = I) 
kernel mode 
(mode bit = 0) 

Chapter 1 
At system boot time, the hardware starts in kernel mode. The operating 
system is then loaded and starts user applications in user mode. Whenever a 
trap or interrupt occurs, the hardware switches from user mode to kernel mode 
(that is, changes the state of the mode bit to 0). Thus, whenever the operating 
system gains control of the computer, it is in kernel mode. The system always 
switches to user mode (by setting the mode bit to 1) before passing control to 
a user program. 
The dual mode of operation provides us with the means for protecting the 
operating system from errant users-and errant users from one another. }Ye 
_(!CC011lplishthis protection by designating some ofthe machineinE;tructions~ha! 
:trliJjT cal1_seJ~i:i~l11 
ins trucrci\}]<§l: Il1e hardware all~\<\'Spl·iyileg~d 
instrl]ctionsto be 
o11ly inkern~Ll11QQ_~, If an attempt is made to 
execute a privileged instruction in user mode, the hardware does not execute 
the instruction but rather treats it as illegal and traps it to the operating system. 
The instruction to switch to kernel mode is an example of a privileged 
instruction. Some other examples include I/0 controt timer management and 
interrupt management. As we shall see throughout the text, there are many 
additional privileged instructions. 
We can now see the life cycle of instruction execution in a computer system. 
Initial control resides in the operating system, where instructions are executed 
in kernel mode. When control is given to a user application, the mode is set to 
user mode. Eventually, control is switched back to the operating system via an 
interrupt, a trap, or a system call. 
_5ysiemcalls proyide the means for auser program to ask the operating 
2}'St~m to perforp:t tasks re_?erved forjhe operating syst~m gr1 the 1.lser 
.12l.:Qgra1ll'sbeha,lf A system call is invoked in a variety of ways, depending 
on the functionality provided by the underlying processor. In all forms, it is the 
method used by a process to request action by the operating system. A system 
call usually takes the form of a trap to a specific location in the interrupt vector. 
This trap can be executed by a generic trap instruction, although some systems 
(such as the MIPS R2000 family) have a specific syscall instruction. 
When asystep1 calljs e)(ecutect it is treated by the hardware as a software 
-i:rlt~rr:l.l:[if:C()iltrol passes through the interrupt vector to a service routine in 
the operating system/ and the m()de bit is set to kernel mode. The system-
caflserv1ce routine is a part of the operating system. The-kernel examines 
the interrupting instruction to determine what system call has occurred; a 
~ parameter indicates what type of service the user program is requesting. 
Additional information needed for the r~quest_may be passed in registers, 
on the stack/ or in memory (with pointers to the memory locations passed in 
registers). The kernel vedfies that the parameters are correct and legat executes 
ti1erequest, and returns control to the instruction following the system call. We 
describe system calls more fully in Section 2.3. 
The lack of a hardware-supported dual mode can cause serious shortcom-
ings in an operating system. For instance, MS-DOS was written for the Intel 
8088 architecture, which has no mode bit and therefore no dual mode. A user 
program rum1ing awry can wipe out the operating system by writing over it 
with data; and multiple programs are able to write to a device at the same time, 
with potentially disastrous results. Recent versions of the Intel CPU do provide 
dual-mode operation. Accordingly, most contemporary operating systems-
such as Microsoft Vista and Windows XP, as well as Unix, Linux, and Solaris 

1.6 
1.6 

-take advantage of this dual-mode feature and provide greater protection for 
the operating system. 
Once hardware protection is in place, it detects errors that violate modes. 
These errors are normally handled by the operating system. If a user program 
fails in some way-such as by making an attempt either to execute an illegal 
instruction or to access memory that is not in the user's address space-then 
the hardware traps to the operating system. The trap transfers control through 
the interrupt vector to the operating system, just as an interrupt does. When 
a program error occurs, the operating system must terminate the program 
abnormally. This situation is handled by the same code as a user-requested 
abnormal termination. An appropriate error message is given, and the memory 
of the program may be dumped. The memory dump is usually written to a 
file so that the user or programmer can examine it and perhaps correct it and 
restart the program. 
1.5.2 Timer 
Wer:r1,_ust ensure th<t! the ope:J;atil}gsystemiJ:taintains t:ontrol overthe C}J_!:l_~ 
We cam1.ot allow a userp~ogram to_ get stuc:kin e1ninfinite loop or to fail 
to call syste1n seryices and never retltrn control to the c:>perating system. To 
~c<:9!ll£1I:S~ tl1.1s=g~at we_can usea 
_A_tirn~r_can beset to interrupt 
th~ c:c:>mp_ut~r af_t~ril §p~c:ified peri() d. The period may be fixed (for example, 
1/60 second) or variable (for example, from 1 millisecond to 1 second). A 
is generally implemented by a fixed-rate clock and a counter. 
The operating system sets the counter. Every time the clock ticks, the counter 
is decremented. When the counter reaches 0, an interrupt occurs. For instance, 
a 10-bit counter with a 1-millisecond clock allows interrupts at intervals from 
1 millisecond to 1,024 milliseconds, in steps of 1 millisecond. 
Before turning over control to the user, the operating system ensures 
that the timer is set to interrupt. lL~ll.~ __ tiJ11e_£_il1t~rrl1pts/control transfers 
automatically totll.e ()pel:9:t~~Y§!epl,_"\Thicfl__!l-1(1Ytreat the interrupt as a faiaf 
error or n:taygi-y_etll.ep_rograrn rnc:>r~!i:rn~:. Clearly,il~structions that modify the 
content of the timer are privileged. 
Thus, we can use the timer to prevent a user program from running too 
long. A simple technique is to il1.itialize a counter with the amount of time that a 
program is allowed to run. A program with a 7-minute time limit, for example, 
would have its counter initialized to 420. Every second, the timer interrupts 
and the counter is decremented by 1. As long as the counter is positive, control 
is returned to the user program. When the counter becomes negative, the 
operating system terminates the program for exceeding the assigned time 
limit. 
A program does nothing unless its instructions are executed by a CPU. A 
program in execution, as mentioned, is a process. A time-shared user program 
such as a compiler is a process. A word-processing program being run by an 
individual user on a PC is a process. A system task, such as sending output 
to a printer, can also be a process (or at least part of one). For now, you can 
consider a process to be a job or a time-shared program, but later you will learn 

Chapter 1 
1.7 
that the concept is more general. As we shall see in Chapter 3, it is possible 
to provide system calls that allow processes to create subprocesses to execute 
concurrent! y. 
A process needs certain resources---including CPU time, me111ory, files, 
and-I;o devices:::_:_ to accomplish its:task These i·esources are e!tl1er given to 
the process when it is created or-allocated to it while it is running. In addition 
to the various physical and logical resources that a process obtains when it is 
created, various initialization data (input) may be passed along. For example, 
consider a process whose function is to display the status of a file on the screen 
of a terminal. The process will be given as an input the name of the file and will 
execute the appropriate instructions and system calls to obtain and display 
on the terminal the desired information. When the process terminates, the 
operating system will reclaim any reusable resources. 
l"Ve ~_111pl:t21size that a program by itselfis nota process; a program is a 
· y_assive er~!~ty, likt:tl1e C()I1terltsof a fil(?storecl_m1 c!iskL~A.ThereasC\_pr(Jce~~s_1s 21~1 
aCtive entity. A si-Dgl~::1hr:eaded proc~ss has on~_pr_ogra111 cou11!er s:eecifying the 
nexf1il~r:Uc_tiogt()_eX~ClJte. (Threads are covered in Chapter 4.) The -execi.rtioil. 
of such a process must be sequential. The CPU executes one instruction of the 
process after another, until the process completes. Further, at any time, one 
instruction at most is executed on behalf of the process. Thus, although two 
processes may be associated with the same program, they are nevertheless 
considered two separate execution sequences. A multithreaded process has 
multiple program counters, each pointing to the next instruction to execute for 
a given thread. 
A process is the unit of work in a system. Such a system consists of a 
collection of processes, some of which are operating-system processes (those 
that execute system code) and the rest of which are user processes (those that 
execute user code). Al]Jheseprocesses canp()t~!ltially execute concurrently-
_llY.IJ:lli}!p_l~)(_i!lg ()I'\a sir1gle _C:Pl],for_~)(ample. 
- -
-
--- ----
The operating system is responsible for the following activities in connec-
tion with process management: 
Scheduling processes and threads on the CPUs 
Creating and deleting both user and system processes 
Suspending and resuming processes 
Providing mechanisms for process synchronization 
Providing mechanisms for process communication 
We discuss process-management techniques in Chapters 3 through 6. 
As we discussed in Section 1.2.2, the main memory is central to the operation 
of a modern computer system. Main memory is a large array of words or bytes, 
ranging in size from hundreds of thousands to billions. Each word or byte has 
its own address. Main memory is a repository of quickly accessible data shared 
by the CPU and I/0 devices. The central processor reads instructions from main 

1.8 
1.8 

memory during the instruction-fetch cycle and both reads and writes data from 
main memory during the data-fetch cycle (on a von Neumann architecture). 
As noted earlier, the main memory is generallythe only large storage device 
that the CPU is able to address and access directly. For example, for the CPU to 
process data from disk, those data mu.st first be transferred to main n"lemory 
by CPU-generated I/0 calls. In the same way, instructions must be in memory 
for the CPU to execute them. 
For a program to be executed, it must be mapped to absolute addresses and 
loaded into memory. As the program executes, it accesses program instructions 
and data from memory by generating these absolute addresses. Eventually, 
the program terminates, its memory space is declared available, and the next 
program can be loaded and executed. 
To improve both the utilization of the CPU and the speed of the computer's 
response to its users, general-purpose computers must keep several programs 
in memory, creating a need for memory management. Many different memory-
management schemes are used. These schemes reflect various approaches, and 
the effectiveness of any given algorithm depends on the situation. In selecting a 
memory-management scheme for a specific system, we must take into account 
many factors-especially the hardware design of the system. Each algorithm 
requires its own hardware support. 
The operating system is responsible for the following activities in connec-
tion with memory management: 
Keeping track of which parts of memory are currently being used and by 
whom 
Deciding which processes (or parts thereof) and data to move into and out 
of memory 
Allocating and deallocating memory space as needed 
Memory-management techniques are discussed il1 Chapters 8 and 9. 
To make the computer system convenient for users, the operating system 
provides a uniform, logical view of information storage. The operating system 
abstracts from the physical properties of its storage devices to define a logical 
storage unit, the file. The operating system maps files onto physical media and 
accesses these files via the storage devices. 
1.8.1 File-System Management 
Pile management is one of the most visible components of an operating system. 
Computers can store information on several different types of physical media. 
Magnetic disk, optical disk, and magnetic tape are the most common. Each 
of these media has its own characteristics and physical organization. Each 
medium is controlled by a device, such as a disk drive or tape drive, that 
also has its own unique characteristics. These properties include access speed, 
capacity, data-transfer rate, and access method (sequential or randmn). 

Chapter 1 
A file is a collection of related information defined by its creator. Commonly, 
files represent programs (both source and object forms) and data. Data files may 
be numeric, alphabetic, alphanumeric, or binary. Files may be free-form (for 
example, text files), or they may be formatted rigidly (for example, fixed fields). 
Clearly, the concept of a file is an extremely general one. 
The operating system implements the abstract concept of a file by managing 
mass-storage media, such as tapes and disks, and the devices that control them. 
Also, files are normally organized into directories to make them easier to use. 
Finally, when multiple users have access to files, it may be desirable to control 
by whom and in what ways (for example, read, write, append) files may be 
accessed. 
The operating system is responsible for the following activities in connec-
tion with file management: 
Creating and deleting files 
Creating and deleting directories to organize files 
Supporting primitives for manipulating files and directories 
Mapping files onto secondary storage 
Backing up files on stable (nonvolatile) storage media 
File-management teclmiques are discussed in Chapters 10 and 11. 
1.8.2 Mass-Storage Management 
As we have already seen, because main memory is too small to accommodate 
all data and programs, and because the data that it holds are lost when power 
is lost, the computer system must provide secondary storage to back up main 
memory. Most modern computer systems use disks as the principal on-line 
storage medium for both programs and data. Most programs-including 
compilers, assemblers, word processors, editors, and formatters-are stored 
on a disk until loaded into memory and then use the disk as both the source 
and destination of their processing. Hence, the proper management of disk 
storage is of central importance to a computer system. The operating system is 
responsible for the following activities in connection with disk management: 
Free-space management 
Storage allocation 
Disk scheduling 
Because secondary storage is used frequently, it must be used efficiently. The 
entire speed of operation of a computer may hinge on the speeds of the disk 
subsystem and the algorithms that manipulate that subsystem. 
There are, however, many uses for storage that is slower and lower in cost 
(and sometimes of higher capacity) than secondary storage. Backups of disk 
data, seldom-used data, and long-term archival storage are some examples. 
Magnetic 
drives and their tapes and CD and DVD drives and platters are 
typical 
devices. The media (tapes and optical platters) vary 
between 
(write-once, read-many-times) and 
(read-write) formats. 

1.8 

Tertiary storage is not crucial to systern performance, but it still must 
be managed. Some operating systems take on this task, while others leave 
tertiary-storage management to application progran1s. Some of the functions 
that operating systerns can provide include mounting and unmounting rnedia 
in devices, allocating and freeing the devices for exclusive use by processes, 
and migrating data from secondary to tertiary storage. 
Techniques for secondary and tertiary storage management are discussed 
in Chapter 12. 
1.8.3 Caching 
is an important principle of computer systems. Information is 
normally kept in some storage system (such as main memory). As it is used, 
it is copied into a faster storage system-the cache-on a temporary basis. 
When we need a particular piece of information, we first check whether it is 
in the cache. If it is, we use the information directly from the cache; if it is not, 
we use the information from the source, putting a copy in the cache under the 
assumption that we will need it again soon. 
In addition, internal programmable registers, . such as index registers, 
provide a high-speed cache for main memory. The programmer (or compiler) 
implements the register-allocation and register-replacement algorithms to 
decide which information to keep in registers and which to keep in main 
memory. There are also caches that are implemented totally in hardware. 
For instance, most systems have an instruction cache to hold the instructions 
expected to be executed next. Without this cache, the CPU would have to wait 
several cycles while an instruction was fetched from main memory. For similar 
reasons, most systems have one or more high-speed data caches in the memory 
hierarchy. We are not concerned with these hardware-only caches in this text, 
since they are outside the control of the operating system. 
Because caches have limited size, 
is an important 
design problem. Careful selection of the cache size and of a replacement policy 
can result in greatly increased performance. Figure 1.11 compares storage 
performance in large workstations and small servers. Various replacement 
algorithms for software-controlled caches are discussed in Chapter 9. 
Typical size 
<16MB 
<64GB 
>100GB 
Implementation 
custom memory with 
on-chip. or off-chip CMOS DRAM 
magnetic disk 
technology 
multiple ports, CMOS 
CMOSSRAM 
Access time (ns) 
0.25-0.5 
0.5-25 
80-250 
5,000.000 
Bandwidth (MB/sec) 20,000 ~ 100,000 
5000- 10,000 
1000-5000 
20-150 
Managed by 
compiler 
hardware 
operating system operating system 
Backed by 
cache 
main memory 
disk 
CD or tape 
Figure 1.11 
Performance of various levels of storage. 

Chapter 1 
Main memory can be viewed as a fast cache for secondary storage, since 
data in secondary storage must be copied into main memory for use, and 
data must be in main memory before being moved to secondary storage for 
safekeeping. The file-system data, which resides permanently on secondary 
storage, may appear on several levels in the storage hierarchy. At the highest 
level, the operating system may maintain a cache of file-system data in main 
memory. In addition, electronic RAM disks (also known as 
may be used for high-speed storage that is accessed through the file-system 
interface. The bulk of secondary storage is on magnetic disks. The magnetic-
disk storage, in turn, is often backed up onto magnetic tapes or removable 
disks to protect against data loss in case of a hard-disk failure. Some systems 
autoinatically archive old file data from secondary storage to tertiary storage, 
such as tape jukeboxes, to lower the storage cost (see Chapter 12). 
The movement of information between levels of a storage hierarchy may 
be either explicit or implicit, depending on the hardware design and the 
controlling operating-system software. f_o].')!LStilnce,datatransfe~ from cache 
_l~CPU 
~'11~cl_ !"~g~~!~:r-_s _is __ ~1suall y ahardvvare function, with no op-era t[ii.g=sy-s tern 
intervention. In contrast, transfer of daTa-from- aisk to memory is usually 
controlledby the-op~ra-t!:ri.g"system. 
-
- fn a 11ier2rrchical storage structure, the same data may appear in different 
levels of the storage system. For example, suppose that an integer A that is to 
be incremented by 1 is located in file B, and file B resides on magnetic disk. 
The increment operation proceeds by first issuing an I/O operation to copy the 
disk block on which A resides to main memory. This operation is followed by 
copying A to the cache and to an internal register. Thus, the copy of A appears 
in several places: on the magnetic disk, in main memory, in the cache, and in an 
internal register (see Figure 1.12). Once the increment takes place in the internal 
register, the value of A differs in the various storage systems. The value of A 
becomes the same only after the new value of A is written from the internal 
register back to the magnetic disk. 
In a computing environment where only one process executes at a tim.e, 
this arrangement poses no difficulties, since an access to integer A will always 
be to the copy at the highest level of the hierarchy. However, in a multitasking 
environment, where the CPU is switched back and -forth-among var1ous 
processes~ extreme care must be taken to ensure that, if several processe~vv:is}l 
i:o-accessA, then each of these processes will obtain the most recently updated 
___ c_=--.C. of A. 
-
-
-
-
The situation becomes more complicated in a multiprocessor environment 
where, in addition to maintaining internal registers, each of the CPUs also 
contains a local cache (Figure 1.6). ~'"1_ su~bC1:.1l_<:_n~i£o!_l:_Il'l_~1lt,~S<2EY()f_A IJ.t~y 
exist simultaneouslyinseyeral caches. Since the variousCPUs can all execute 
.S:2~1c~r~~l~tly,"\,Ve-must1nake surethat an 
to the value ofA in one cache 
Figure 1.12 Migration of integer A from disk to register. 

1.9 
1.9 

1.8.4 1/0 Systems 
One of the purposes of a11 operating system is to hide the peculiarities ofspecific 
hardware d~~ic:~Jro1n th~l1S~J:: For example, in UNIX, the peculiarities of I/O 
devices are hidden from the bulk of the operating system itself by the I/0 
subsystem. The I/O subsystem consists of several components: 
A memory-management component that includes buffering, caching, and 
spooling 
A general device-driver interface 
Drivers for specific hardware devices 
Only the device driver knows the peculiarities of the specific device to which 
it is assigned. 
We discussed in Section 1.2.3 how interrupt handlers and device drivers are 
used in the construction of efficient I/O subsystems. In Chapter 13, we discuss 
how the I/O subsystem interfaces to the other system components, manages 
devices, transfers data, and detects I/0 completion. 
If a computer system has multiple users and allows the concurrent execution 
of multiple processes, then access to data must be regulated. For that purpose, 
mechanisms ensure that files, memory segments, CPU, and other resources can 
be operated on by only those processes that have gained proper authoriza-
tion from the operating system. For example, memory-addressing hardware 
ensures that a process can execute only within its own address space. The 
timer ensures that no process can gain control of the CPU without eventually 
relinquishing control. Device-control registers are not accessible to users, so 
the integrity of the various peripheral devices is protected. 
Protection, then, is any mechanism for controlling the access of processes 
or users-to the resourcesdefined by a computer system. This mechanism rni1st 
provide means to speCify the confrols to be imposed and means to enforce the 
controls. 
Protection can improve reliability by detecting latent errors at the interfaces 
between component subsystems. Early detection of interface errors can often 
prevent contamination of a healthy subsystem by another subsystem that is 

Chapter 1 
1.10 
malfunctioning. Furthermore, an unprotected resource cannot defend against 
use (or n<isuse) by an unauthorized or incompetent user. A protection-oriented 
system provides a means to distinguish between authorized and unauthorized 
usage, as we discuss in Chapter 14. 
6§yt:;terl<_ca1lhave adequateprotection but still be prone to failure and 
aDo_w inappr()priat~ acs~s~: Consider a user whose authentication information 
(her means of identifying herself to the system) is stolen. Her data could be 
copied or deleted, even though file and memory protection are working. It is 
the job of 
to defend a system from external and internal attacks. Such 
attacks spread across a huge range and include viruses and worms, denial-of-
service attacks (which use all of a system's resources and so keep legitimate 
users out of the system), identity theft, and theft of service (unauthorized use 
of a system). Prevention of some of these attacks is considered an operating-
system function on some systems, while other systems leave the prevention to 
policy or additional software. Due to the alarming rise in security incidents, 
operating-system security features represent a fast-growing area of research 
and implementation. Security is discussed in Chapter 15. 
Protection and security require the system to be able to distinguish among 
all its users. Most 
maintain a list of user names and 
--·--
-
In Windows Vista parlance, this is _<1_ 
These numerical IDs are unique, one per user. When a user 
logs in 
system, the authentication stage determines the appropriate user 
ID for the user. That user ID is associated with all of the user's processes and 
threads. When an ID needs to be user readable, it is translated back to the user 
name via the user name list. 
In some circumstances, we wish to distinguish among sets of users rather 
than individual users. For example, the owner of a file on a UNIX system may be 
allowed to issue all operations on that file, whereas a selected set of users may 
only be allowed to read the file. To accomplish this, we need to define a group 
name and the set of users belonging to that group. Group functionality can 
be implemented as a system-wide list of group names and 
ic'1entifiers. 
A user can be in one or more groups, depending on operating-system design 
decisions. The user's group IDs are also included in every associated process 
and thread. 
In the course of normal use of a system, the user ID and 
are s-l.iffici.e11t. HoV\Tever; a user sometimes needs to 
to gain 
extra permissions for an activity. The user may need access to a 
fhatis 
resh;icted,for examp1e.Operatmg systems provide various methods to allow 
privilege escalation. On UNIX, for example, the setuid attribute on a program 
causes that program to run with the user ID of the owner of the file, rather than 
the current user's ID. The process runs with this 
until it turns off 
the extra privileges or terminates. 
A distributed system is a collection of physically separate, possibly heteroge-
neous, computer systems that are networked to provide the users with access 
to the various resources that the system maintains. Access to a shared resource 

1.10 

increases computation speed, functionality, data availability, and reliability. 
Some operating systems generalize network access as a form of file access, with 
the details of networking contained in the network interface's device driver. 
Others make users specifically invoke network functions. Generally, systems 
contain a mix of the two modes-for example FTP and NFS. The protocols 
that create a distributed system can greatly affect that system's utility and 
popularity. 
A 
in the simplest terms, is a communication path between 
two or more systems. Distributed systems depend on networking for their 
functionality. Networks vary by the protocols used, the distances between 
nodes, and the transport media. TCP /IP is the most common network protocol, 
although ATM and other protocols are in widespread use. Likewise, operating-
system support of protocols varies. Most operating systems support TCP /IP, 
including the Windows and UNIX operating systems. Some systems support 
proprietary protocols to suit their needs. To an operating system, a network 
protocol simply needs an interface device-a network adapter, for example-
with a device driver to manage it, as well as software to handle data. These 
concepts are discussed throughout this book. 
Networks are characterized based on the distances between their nodes. 
A 
computers within a room, a floor, 
or a building. A 
N) usually links buildings, cities, 
or countries. A global company may have a WAN to com1ect its offices 
worldwide. These networks may run one protocol or several protocols. The 
continuing advent of new technologies brings about new forms of networks. 
For example, a 
{]'/!Al··I} could link buildings within 
'.::a city. BlueTooth and 802.11 devices use wireless technology to commt.micate 
over a distance of several feet, in essence creating a 
such 
as might be found in a home. 
The media to carry networks are equally varied. They include copper wires, 
fiber strands, and wireless transmissions between satellites, microwave dishes, 
and radios. When computing devices are connected to cellular phones, they 
create a network. Even very short-range infrared communication can be used 
for networking. At a rudimentary level, whenever computers communicate, 
they use or create a network. These networks also vary in their performance 
and reliability. 
Some operating systems have taken the concept of networks and dis-
tributed systems further than the notion of providing network connectivity. A 
is an operating system that provides features such 
as file sharing across the network and that includes a communication scheme 
that allows different processes on different computers to exchange messages. 
A computer rmming a network operating system acts autonomously from all 
other computers on the network, although it is aware of the network and is 
able to communicate with other networked computers. A distributed operat-
ing system provides a less autonomous envirorunent: The different operating 
systems comm"Lmicate closely enough to provide the illusion that only a single 
operating system controls the network. 
We cover computer networks and distributed systems in Chapters 16 
through 18. 

Chapter 1 
1.11 
The discussion thus far has focused on the general-purpose computer systems 
that we are all familiar with. There are, however, other classes of computer 
systems whose functions are more limited and whose objective is to deal with 
limited computation domains. 
1.11.1 
Real-Time Embedded Systems 
Embedded computers are the most prevalent form of computers in existence. 
These devices are found everywhere, from car engines and manufacturing 
robots to DVDs and microwave ovens. They tend to have very specific tasks. 
The systencs they run on are usually primitive, and so the operating systems 
provide limited features. Usually, they have little or no user interface, preferring 
to spend their time monitoring and managing hardware devices, such as 
automobile engines and robotic arms. 
These embedded systems vary considerably. Some are general-purpose 
computers, running standard operating systems-such as UNIX-with 
special-purpose applications to implement the functionality. Others are 
hardware devices with a special-purpose embedded operating system 
providing just the functionality desired. Yet others are hardware devices 
with application-specific integrated circuits 
that perform their tasks 
without an operating system. 
The use of embedded systems continues to expand. The power of these 
devices, both as standalone units and as elements of networks and the Web, 
is sure to increase as well. Even now, entire houses can be computerized, so 
that a central computer-either a general-purpose computer or an embedded 
system-can control heating and lighting, alarm systems, and even coffee 
makers. Web access can enable a home owner to tell the house to heat up 
before she arrives home. Someday, the refrigerator may call the grocery store 
when it notices the milk is gone. 
Embedded systems almost always run 
A 
real-time system is used when rigid time requirements 
been placed on 
the operation of a processor or the flow of data; thus, it is often used as a 
control device in a dedicated application. Sensors bring data to the computer. 
The computer must analyze the data and possibly adjust controls to modify 
the sensor inputs. Systems that control scientific experiments, medical imaging 
systems, industrial control systems, and certain display systems are real-
time systems. Some automobile-engine fuel-injection systems, home-appliance 
controllers, and weapon systems are also real-time systems. 
A real-time system has well-defined, fixed time constraints. Processing 
must be done within the defined constraints, or the system will fail. For instance, 
it would not do for a robot arm to be instructed to halt after it had smashed 
into the car it was building. A real-time system functions correctly only if it 
returns the correct result within its time constraints. Contrast this system with 
a time-sharing system, where it is desirable (but not mandatory) to respond 
quickly or a batch system, which may have no time constraints at all. 
In Chapter 19, we cover real-time embedded systems in great detail. In 
Chapter 5, we consider the scheduling facility needed to implement real-time 
functionality in an operating system. In Chapter 9, we describe the design 

1.11 

of memory management for real-time computing. Finally, in Chapter 22, we 
describe the real-time components of the Windows XP operating system. 
1.11.2 Multimedia Systems 
Most operating systems are designed to handle conventional data such as 
text files, progran'ls, word-processing documents, and spreadsheets. However, 
a recent trend in technology is the incorporation of multimedia data into 
computer systems. Multimedia data consist of audio and video files as well as 
conventional files. These data differ from conventional data in that multimedia 
data-such as frames of video-must be delivered (streamed) according to 
certain time restrictions (for example, 30 frames per second). 
Multimedia describes a wide range of applications in popular use today. 
These include audio files such as MP3, DVD movies, video conferencing, and 
short video clips of movie previews or news stories downloaded over the 
Internet. Multimedia applications may also include live webcasts (broadcasting 
over the World Wide Web) of speeches or sporting events and even live 
webcams that allow a viewer in Manhattan to observe customers at a cafe 
in Paris. Multimedia applications need not be either audio or video; rather, a 
multimedia application often includes a combination of both. For example, a 
movie may consist of separate audio and video tracks. Nor must multimedia 
applications be delivered only to desktop personal computers. Increasingly, 
they are being directed toward smaller devices, including PDAs and cellular 
telephones. For example, a stock trader may have stock quotes delivered 
wirelessly and in real time to his PDA. 
In Chapter 20, we explore the demands of multimedia applications, 
describe how multimedia data differ from conventional data, and explain how 
the nature of these data affects the design of operating systems that support 
the requirements of multimedia systems. 
1.11.3 Handheld Systems 
include personal digital assistants (PDAs), such as Palm 
and Pocket-Pes, and cellular telephones, many of which use special-purpose 
embedded operating systems. Developers of handheld systems and applica-
tions face many challenges, most of which are due to the limited size of such 
devices. For example, a PDA is typically about 5 inches in height and 3 inches 
in width, and it weighs less than one-half pound. Because of their size, most 
handheld devices have small amounts of memory, slow processors, and small 
display screens. We take a look now at each of these limitations. 
The amount of physical memory in a handheld depends on the device, but 
typically it is somewhere between 1 MB and 1 GB. (Contrast this with a typical 
PC or workstation, which may have several gigabytes of memory.) As a result, 
the operating system and applications must manage memory efficiently. This 
includes returning all allocated memory to the memory manager when the 
memory is not being used. In Chapter 9, we explore virtual memory, which 
allows developers to write programs that behave as if the system has more 
memory than is physically available. Currently, not many handheld devices 
use virtual memory techniques, so program developers must work within the 
confines of limited physical memory. 

Chapter 1 
1.12 
A second issue of concern to developers of handheld devices is the speed 
of the processor used in the devices. Processors for most handheld devices 
run at a fraction of the speed of a processor in a PC. Faster processors require 
more power. To include a faster processor in a handheld device would require 
a larger battery, which would take up more space and would have to be 
replaced (or recharged) more frequently. Most handheld devices use smaller, 
slower processors that consume less power. Therefore, the operating system 
and applications must be designed not to tax the processor. 
The last issue confronting program designers for handheld devices is l/0. 
A lack of physical space limits input methods to small keyboards, handwriting 
recognition, or small screen-based keyboards. The small display screens limit 
output options. Whereas a monitor for a home computer may measure up to 
30 inches, the display for a handheld device is often no more than 3 inches 
square. Familiar tasks, such as reading e-mail and browsing Web pages, must 
be condensed into smaller displays. One approach for displaying the content 
in Web pages is 
where only a small subset of a Web page is 
delivered and displayed on the handheld device. 
Some handheld devices use wireless technology, such as BlueTooth or 
802.11, allowing remote access to e-mail and Web browsing. Cellular telephones 
with connectivity to the Internet fall into this category. However, for PDAs that 
do not provide wireless access, downloading data typically requires the user 
first to download the data to a PC or workstation and then download the data 
to the PDA. Some PDAs allow data to be directly copied from one device to 
another using an infrared link 
Generally, the limitations in the functionality of PDAs are balanced by 
their convenience and portability. Their use continues to expand as network 
com1ections become more available and other options, such as digital cameras 
and MP3 players, expand their utility. 
So far, we have provided an overview of computer-system organization and 
major operating-system components. We conclude with a brief overview of 
how these are used in a variety of computing environments. 
1.12.1 Traditional Computing 
As computing matures, the lines separating many of the traditional computing 
environments are blurring. Consider the "typical office environment." Just a 
few years ago, this environment consisted of PCs connected to a network, 
with servers providing file and print services. Remote access was awkward, 
and portability was achieved by use of laptop computers. Terminals attached 
to mainframes were prevalent at many companies as well, with even fewer 
remote access and portability options. 
The current trend is toward providing more ways to access these computing 
environments. Web technologies are stretching the boundaries of traditional 
computing. Companies establish 
which provide Web accessibility 
to their internal servers. 
ccxEpu1as are essentially terminals that 
understand Web-based computing. Handheld computers can synchronize with 

1.12 

PCs to allow very portable use of con1pany information. Handheld PDAs can 
also connect to 
to use the company's Web portal (as well as 
the myriad other Web resources). 
At home, most users had a single computer with a slow modem connection 
to the office, the Internet, or both. Today, network-connection speeds once 
available only at great cost are relatively inexpensive, giving home users more 
access to more data. These fast data connections are allowing home computers 
to serve up Web pages and to run networks that include printers, client PCs, 
and servers. Some homes even have 
to protect their networks from 
security breaches. Those firewalls cost thousands of dollars a few years ago 
and did not even exist a decade ago. 
In the latter half of the previous century, computing resources were scarce. 
(Before that, they were nonexistent!) For a period of time, systems were either 
batch or interactive. Batch systems processed jobs in bulk, with predetermined 
input (from files or other sources of data). Interactive systems waited for 
input from users. To optimize the use of the computing resources, multiple 
users shared time on these systems. Time-sharing systems used a timer and 
scheduling algorithms to rapidly cycle processes through the CPU, giving each 
user a share of the resources. 
Today, traditional time-sharing systems are uncommon. The same schedul-
ing technique is still in use on workstations and servers, but frequently the 
processes are all owned by the same user (or a single user and the operating 
system). User processes, and system processes that provide services to the user, 
are managed so that each frequently gets a slice of computer time. Consider 
the windows created while a user is working on a PC, for example, and the fact 
that they may be performing different tasks at the same time. 
1.12.2 Client-Server Computing 
As PCs have become faste1~ more powerful, and cheaper, designers have shifted 
away from centralized system architecture. Terminals connected to centralized 
systems are now being supplanted by PCs. Correspondingly, user-interface 
functionality once handled directly by centralized systems is increasingly being 
handled by PCs. As a result, many of today' s systems act as 
to satisfy requests generated by 
This form of specialized 
distributed system, called a 
system, has the general structure 
depicted in Figure 1.13. 
Server systems can be broadly categorized as compute servers and file 
servers: 
Figure 1.13 General structure of a client-server system. 

Chapter 1 
The 
provides an interface to which a client can 
send a request to perform an action (for example, read data); in response, 
the server executes the action and sends back results to the client A server 
running a database that responds to client requests for data is an example 
of such a system. 
The 
provides a file-system interface where clients can 
create, update, read, and delete files. An example of such a system is a Web 
server that delivers files to clients running Web browsers. 
1.12.3 Peer-to-Peer Computing 
Another structure for a distributed system is the peer-to-peer (P2P) system 
model. In this model, clients and servers are not distinguished from one 
another; instead, all nodes within the system are considered peers, and each 
ncay act as either a client or a server, depending on whether it is requesting or 
providing a service. Peer-to-peer systems offer an advantage over traditional 
client-server systems. In a client-server system, the server is a bottleneck; but 
in a peer-to-peer system, services can be provided by several nodes distributed 
throughout the network. 
To participate in a peer-to-peer system, a node must first join the network 
of peers. Once a node has joined the network, it can begin providing services 
to-and requesting services from -other nodes in the network. Determining 
what services are available is accomplished in one of two general ways: 
When a node joins a network, it registers its service with a centralized 
lookup service on the network. Any node desiring a specific service first 
contacts this centralized lookup service to determine which node provides 
the service. The remainder of the communication takes place between the 
client and the service provider. 
A peer acting as a client must first discover what node provides a desired 
service by broadcasting a request for the service to all other nodes in the 
network. The node (or nodes) providing that service responds to the peer 
making the request. To support this approach, a discovery protocol must be 
provided that allows peers to discover services provided by other peers in 
the network. 
Peer-to-peer networks gained widespread popularity in the late 1990s with 
several file-sharing services, such as Napster and Gnutella, that enable peers 
to exchange files with one another. The Napster system uses an approach 
similar to the first type described above: a centralized server maintains an 
index of all files stored on peer nodes in the Napster network, and the actual 
exchanging of files takes place between the peer nodes. The Gnutella system 
uses a technique similar to the second type: a client broadcasts file requests 
to other nodes in the system, and nodes that can service the request respond 
directly to the client. The future of exchanging files remains uncertain because 
many of the files are copyrighted (music, for example), and there are laws 
governing the distribution of copyrighted material. In any case, though, peer-
to-peer technology undoubtedly will play a role in the future of many services, 
such as searching, file exchange, and e-mail. 

1.13 
1.13 

1.12.4 Web-Based Computing 
The Web has become ubiquitous/ leading to more access by a wider variety of 
devices than was dreamt of a few years ago. PCs are still the most prevalent 
access devices/ with workstations/ handheld PDAs 1 and even cell phones also 
providing access. 
Web computing has increased the emphasis on networking. Devices that 
were not previously networked now include wired or wireless access. Devices 
that were networked now have faster network connectivity/ provided by either 
improved networking technology optimized network implementation code/ 
or both. 
The implementation of Web-based computing has given rise to new 
categories of devices/ such as 
which distribute network 
connections an1.ong a pool of similar servers. Operating systems like Windows 
95 1 which acted as Web clients/ have evolved into Linux and Windows XP 1 which 
can act as Web servers as well as clients. Generally/ the Web has increased the 
complexity of devices because their users require them to be Web-enabled. 
The study of operating systems/ as noted earlier/ is made easier by the 
availability of a vast number of open-source releases. 
are those made available in source-code format rather than as 
compiled binary code. Linux is the most famous open- source operating system, 
while Microsoft Windows is a well-known example of the opposite dosed-
approach. Starting with the source code allows the programmer to 
produce binary code that can be executed on a system. Doing the opposite-
the source code from the binaries-is quite a lot of work1 
and useful items such as comments are never recovered. Learning operating 
systems by examining the actual source code1 rather than reading summaries of 
that code/ can be extremely useful. With the source code in hand/ a student can 
modify the operating system and then compile and nm the code to try out those 
changes1 which is another excellent learning tool. This text indudes projects 
that involve modifying operating system source code/ while also describing 
algorithms at a high level to be sure all important operating system topics are 
covered. Throughout the text1 we provide pointers to examples of open-source 
code for deeper study. 
There are many benefits to open-source operating systems/ including a 
commtmity of interested (and usually unpaid) programmers who contribute 
to the code by helping to debug it analyze it/ provide support/ and suggest 
changes. Arguably/ open-source code is more secure than closed-source code 
because many more eyes are viewing the code. Certainly open-source code has 
bugs/ but open-source advocates argue that bugs tend to be found and fixed 
faster owing to the number of people using and viewing the code. Companies 
that earn revenue from selling their programs tend to be hesitant to open-source 
their code/ but Red Hat/ SUSE1 Sun/ and a myriad of other companies are doing 
just that and showing that commercial companies benefit/ rather than suffer/ 
when they open-source their code. Revenue can be generated through support 
contracts and the sale of hardware on which the software runs/ for example. 

2.1 
An operating system provides the environment within which programs are 
executed. Internally, operating systems vary greatly in their makeup, since 
they are organized along many different lines. The design of a new operating 
system is a major task. It is important that the goals of the system be well 
defined before the design begins. These goals form the basis for choices among 
various algorithms and strategies. 
We can view an operating system from several vantage points. One view 
focuses on the services that the system provides; another, on the interface that 
it makes available to users and programmers; a third, on its components and 
their interconnections. In this chapter, we explore all three aspects of operating 
systems, showin.g the viewpoints of users, programmers, and operating-system 
designers. We consider what services an operating system provides, how 
they are provided, how they are debugged, and what the various method-
ologies are for designing such systems. Finally, we describe how operating 
systems are created and how a computer starts its operating system. 
To describe the services an operating system provides to users, processes, 
and other systems. 
To discuss the various ways of structuring an operating system. 
To explain how operating systems are installed and customized and how 
they boot. 
An operating system provides an environment for the execution of programs. 
It provides certain services to programs and to the users of those programs. 
The specific services provided, of course, differ from one operating system to 
another, but we can identify common classes. These operating-system services 
are provided for the convenience of the programmer, to n1.ake the programming 

Chapter 2 
user and other system programs 
hardware 
Figure 2. i 
A view of operating system services. 
task easier. Figure 2.1 shows one view of the various operating-system services 
and how they interrelate. 
One set of operating-system services provides functions that are helpfuJ to 
the user. 
~ 
~ 
User interface. Almost all operating systems have a 
This interface can take several forms. One is a Dcfr'":c;~, 
which uses text commands and a method for entering them 
(say, a program to allow entering and editing of commands). Another is 
a batch 
in which commands and directives to control those 
commands are entered into files, and those files are executed. Most 
commonly, a 
is used. Here, the interface 
is a window system with a pointing device to direct I/0, choose from 
menus, and make selections and a keyboard to enter text. Some systems 
provide two or all three of these variations. 
Program execution. The system must be able to load a program into 
memory and to run that program. The program must be able to end its 
execution, either normally or abnormally (indicating error). 
I/O operations. A running program may require I/0, which may involve a 
file or an I/0 device. For specific devices, special functions may be desired 
(such as recording to a CD or DVD drive or blanking a display screen). For 
efficiency and protection, users usually cannot control I/0 devices directly. 
Therefore, the operating system must provide a means to do I/0. 
File-system manipulation. The file system is of particular interest. Obvi-
ously, programs need to read and write files and directories. They also 
need to create and delete them by name, search for a given file, and list file 
information. Finally, some programs include permissions management to 
allow or deny access to files or directories based on file ownership. Many 
operating systems provide a variety of file systems, sometimes to allow 
personal choice, and sometimes to provide specific features or performance 
characteristics. 

2.1 

Communications. There are many circumstances in which one process 
needs to exchange information with another process. Such communication 
ncay occur between processes that are executing on the same computer 
or between processes that are executing on different computer systems 
tied together by a computer network. Communications may be imple-
mented via shared rnenwry or through message passing, in which packets of 
information are moved between processes by the operating system. 
Error detection. The operating system needs to be constantly aware of 
possible errors. Errors may occur in the CPU and memory hardware (such 
as a memory error or a power failure), in I/0 devices (such as a parity error 
on tape, a connection failure on a network, or lack of paper in the printer), 
and in the user program (such as an arithmetic overflow, an attempt to 
access an illegal memory location, or a too-great use of CPU time). For each 
type of error, the operating system should take the appropriate action to 
ensure correct and consistent computing. Of course, there is variation in 
how operating systems react to and correct errors. Debugging facilities can 
greatly enhance the user's and programmer's abilities to use the system 
efficiently. 
Another set of operating-system functions exists not for helping the user 
but rather for ensuring the efficient operation of the system itself. Systems with 
multiple users can gain efficiency by sharing the computer resources among 
the users. 
Resource allocation. When there are I}lultiple usersormultiple jobs 
rmuung at the sametime, resources must be allocated to each of them. 
Many d1Herent -types of resources are managed by the operating system. 
Some (such as CPU cycles, main memory, and file storage) may have special 
allocation code, whereas others (such as I/0 devices) may have much more 
general request and release code. For instance, in determining how best to 
use the CPU, operating systems have CPU-scheduling routines that take into 
account the speed of the CPU, the jobs that must be executed, the number of 
registers available, and other factors. There may also be routines to allocate 
printers, modems, USB storage drives, and other peripheral devices. 
Accounting. Vl[e want to_keeptrack of whichusers use}lovy rnL1C:hand 
what kindsofcomputer resources. This record keeping may be used for 
accoun:tii1g (so thai: users can be billed) or simply for accumulating usage 
statistics. Usage statistics may be a valuable tool for researchers who wish 
to reconfigure the system to improve computing services. 
Protection and security. The owners of information stored in a multiuser or 
networked computer system may want to control use of that information. 
When. several separate processes execute concurrently, it ~hould not be 
possible for one process to interfere with the others or with the operating 
system itself. Protection iiwolves ensuring that all access to systerr1-
resources 1S -controlled. Security of the system from outsiders is also 
important. Such security starts with requiring each user to authenticate 
himself or herself to the system, usually by means of a password, to gain 
access to system resources. It extends to defending external I/0 devices, 

Chapter 2 
2.2 
including modems and network adapters, from invalid access attempts 
and to recording all such connections for detection of break-ins. If a system 
is to be protected and secure, precautions must be instituted throughout 
it. A chain is only as strong as its weakest link. 
We mentioned earlier that there are several ways for users to interface with 
the operating system. Here, we discuss two fundamental approaches. One 
provides a command-line interface, or 
that allows users 
to directly enter commands to be performed by the operating system. The 
other allows users to interface with the operating system via a graphical user 
interface, or GUI. 
2.2.1 Command Interpreter 
Some operating systems include the command interpreter in the kernel. Others, 
such as Windows XP and UNIX, treat the command interpreter as a special 
program that is rmming when a job is initiated or when a user first logs on 
(on interactive systems). On systems with multiple command interpreters to 
choose from, the interpreters are known as shells. For example, on UNIX and 
Linux systems, a user may choose among several different shells, including 
the Bourne shell, C shell, Bourne-Again shell, Korn shell, and others. Third-party 
shells and free user-written shells are also available. Most shells provide similar 
functionality, and a user's choice of which shell to use is generally based on 
personal preference. Figure 2.2 shows the Bourne shell command interpreter 
being used on Solaris 10. 
The main function of the command interpreter is to get and execute the next 
user-specified command. Many of the commands given at this level manipulate 
files: create, delete, list, print, copy, execute, and so on. The MS-DOS and UNIX 
shells operate in this way. These commands can be implemented in two general 
ways. 
In one approach, the command interpreter itself contains the code to 
execute the command. For example, a command to delete a file may cause 
the command interpreter to jump to a section of its code that sets up the 
parameters and makes the appropriate system call. In this case, the number of 
comn'lands that can be given determines the size of the command interpreter, 
since each command requires its own implementing code. 
An alternative approach -used by UNIX, among other operating systems 
-implements most commands through system programs. In this case, the 
command interpreter does not understand the cmnmand in any way; it merely 
uses the command to identify a file to be loaded into memory and executed. 
Thus, the UNIX command to delete a file 
rm file.txt 
would search for a file called rm, load the file into memory, and execute it with 
the parameter file. txt. The function associated with the rm command would 
be defined completely by the code in the file rm. In this way, programmers can 
add new commands to the system easily by creating new files with the proper 

0.0 
0.0 
r/s 
0.0 
0.6 
console 
2.2 
0.2 
0.0 
0.2 

0.0 
0.0 
0.0 0.0 
0.0 
0.0 

extended device statistics 
w/s 
0.0 
0.0 
kr./s 
klv/s 
0.0 
0.0 
0.0 
1 ogi nell 
idle 
1SJ un0718days 
wai ·t actv 
svc_t 
9{tN 
1i~b 
0.0 
0.0 
0.0 

load average: 0.09, 0.11, 8.66 
JCPU 
PCPU 
what 

/usr/bin/ssh-agent -- /usr/bi 

4 w 
Figure 2.2 The Bourne shell command interpreter in Solaris I 0. 

names. The command-interpreter program, which can be small, does not have 
to be changed for new commands to be added. 
2.2.2 Graphical User Interfaces 
A second strategy for interfacing with the operating system is through a user-
friendly graphical user interface, or CUI. Here, rather than entering commands 
directly via a command-line interface, users employ a mouse-based window-
and-nl.enu system characterized by a 
metaphor. The user moves the 
mouse to position its pointer on images, or 
on the screen (the desktop) 
that represent programs, files, directories, and system functions. Depending 
on the mouse pointer's location, clicking a button on the mouse can invoke a 
program, select a file or directory-known as a folder-or pull down a menu 
that contains commands. 
Graphical user interfaces first appeared due in part to research taking place 
in the early 1970s at Xerox PARC research facility. The first CUI appeared on 
the Xerox Alto computer in 1973. However, graphical interfaces became more 
widespread with the advent of Apple Macintosh computers in the 1980s. The 
user interface for the Macintosh operating system (Mac OS) has undergone 
various changes over the years, the most significant being the adoption of 
the Aqua interface that appeared with Mac OS X. Microsoft's first version of 
Windows-Version 1.0-was based on the addition of a CUI interface to the 
MS-DOS operating system. Later versions of Windows have made cosmetic 
changes in the appearance of the CUI along with several enhancements in its 
functionality, including Windows Explorer. 

Chapter 2 
Traditionally, UNIX systencs have been dominated by command-line inter-
faces. Various GUl interfaces are available, however, including the Common 
Desktop Environment (CDE) and X-Windows systems, which are common 
on commercial versions of UNIX, such as Solaris and IBM's AIX system. In 
addition, there has been significant development in GUI designs from various 
projects, such as I< Desktop Environment (or KDE) and the GNOME 
desktop by the GNU project. Both the KDE and GNOME desktops run on Linux 
and various UNIX systems and are available under open-source licenses, which 
means their source code is readily available for reading and for modification 
under specific license terms. 
The choice of whether to use a command-line or GUI interface is mostly 
one of personal preference. As a very general rule, many UNIX users prefer 
command-line interfaces, as they often provide powerful shell interfaces. 
In contrast, most Windows users are pleased to use the Windows GUI 
environment and almost never use the MS-DOS shell interface. The various 
changes undergone by the Macintosh operating systems provide a nice study 
in contrast. Historically, Mac OS has not provided a command-line interface, 
always requiring its users to interface with the operating system using its GUI. 
However, with the release of Mac OS X (which is in part implemented using a 
UNIX kernel), the operating system now provides both a new Aqua interface 
and a command-line interface. Figure 2.3 is a screenshot of the Mac OS X GUI. 
The user interface can vary from system to system and even from user 
to user within a system. It typically is substantially removed from the actual 
system structure. The design of a useful and friendly user interface is therefore 
Figure 2.3 The Mac OS X GUI. 

2.3 
2.3 

not a direct function of the operating systenc. In this book, we concentrate on 
the fundamental problems of providing adequate service to user programs. 
From the point of view of the operating system, we do not distinguish between 
user programs and systern programs. 
System calls provide an interface to the services made available by an operating 
system. These calls are generally available as routines written in C and 
C++, although certain low-level tasks (for example, tasks where hardware 
must be accessed directly), may need to be written using assembly-language 
instructions. 
Before we discuss how an operating system makes system calls available, 
let's first use an example to illustrate how system calls are used: writing a 
simple program to read data from one file and copy them to another file. The 
first input that the program will need is the names of the two files: the input file 
and the output file. These names can be specified in many ways, depending 
on the operating-system design. One approach is for the program to ask the 
user for the names of the two files. In an interactive system, this approach will 
require a sequence of system calls, first to write a prompting message on the 
screen and then to read from the keyboard the characters that define the two 
files. On mouse-based and icon-based systems, a menu of file names is usually 
displayed in a window. The user can then use the mouse to select the source 
name, and a window can be opened for the destination name to be specified. 
This sequence requires many I/0 system calls. 
Once the two file names are obtained, the program must open the input file 
and create the output file. Each of these operations requires another system call. 
There are also possible error conditions for each operation. When the program 
tries to open the input file, it may find that there is no file of that name or that 
the file is protected against access. In these cases, the program should print a 
message on the console (another sequence of system calls) and then terminate 
abnormally (another system call). If the input file exists, then we must create a 
new output file. We may find that there is already an output file with the same 
name. This situation may cause the program to abort (a system call), or we 
may delete the existing file (another system call) and create a new one (another 
system call). Another option, in an interactive system, is to ask the user (via 
a sequence of system calls to output the prompting message and to read the 
response from the termin.al) whether to replace the existing file or to abort the 
program. 
Now that both files are set up, we enter a loop that reads from the input 
file (a system call) and writes to the output file (another system call). Each read 
and write must return status information regarding various possible error 
conditions. On input, the program may find that the end of the file has been 
reached or that there was a hardware failure in the read (such as a parity error). 
The write operation may encounter various errors, depending on the output 
device (no more disk space, printer out of paper, and so on). 
Finally, after the entire file is copied, the program may close both files 
(another system call), write a message to the console or window (more 
system calls), and finally terminate normally (the final system call). As we 

Chapter 2 
can see1 even simple programs may make heavy use of the operating system. 
Frequently/ systems execute thousands of system calls per second. This system-
call sequence is shown in Figure 2A. 
Most programmers never see this level of detail however. Typically/ appli-
caTiol1 developers design program.s accordir1g to an 
---·-----~Jl~J'I}. Tl1e AJ'Ispecifies a set of functions 
application programmer/ including the parameters that are passed to each 
function and the return values the programmer can expect. Three of the most 
common APis available to application programmers are the Win32 API for Win-
dows systems, the POSIX API for POSIX-based systems (which include virtually 
all versions of UNIX, Linux/ and Mac OS X), and the Java API for designing 
programs that run on the Java virtual machine. Note that-unless specified 
-the system-call names used throughout this text are generic examples. Each 
operating system has its own name for each system call. 
Behind the scenes/ the functions that make up an API typically invoke the 
actual system calls on behalf of the application programmer. For example, the 
Win32 function CreateProcess () (which unsurprisingly is used to create 
a new process) actually calls the NTCreateProcess () system call in the 
Windows kernel. Why would an application programnl.er prefer programming 
according to an API rather than invoking actual system calls? There are several 
reasons for doing so. One benefit of programming according to an API concerns 
program portability: An application programmer designing a program using 
an API can expect her program to compile and run on any system that supports 
the same API (although in reality/ architectural differences often make this 
more difficult than it may appear). Furthermore/ actual system calls can often 
be more detailed and difficult to work with than the API available to an 
application programmer. Regardless/ there often exists a strong correlation 
between a function in the API and its associated system call within the kernel. 
Example System Call Sequence 
Acquire input file name 
Write prompt to screen 
Accept input 
Acquire output file name 
Write prompt to screen 
Accept input 
Open the input file 
if file doesn't exist, abort 
Create output file 
if file exists, abort 
Loop 
Read from input file 
Write to output file 
Until. read fails 
Close output file 
Write completion message to screen 
Terminate normally 
Figure 2.4 Example of how system calls are used. 

2.3 
EXAMPLE OF STANDARD API 
As an example of a standard APT, consider the ReadFile 0 £unction in the 
Win32 API-a function for reading £rom a file. The API for this function 
appears in Figure 2.5 . 
.. · 
return value 
~ 
BOOL 
ReadFile c 
t 
function name 
(HANDLE 
LPVOID 
DWORD 
LPDWORD 
LPOVERLAPPED 
file, 
~ 
buffer, 
bytes To Read, 
parameters 
bytes Read, 
ovl); 
Figure 2.5 The API for the ReadFile () function. 
A description of the parameters passed to ReadFile 0 is as follows: 
HANDLE file-the file to be read 
LPVOID buffer-a buffer where the data will be read into and written 
from 
DWORD bytesToRead-the number of bytes to be read into the buffer 
LPDWORD bytesRead -the number of bytes read during the last read 
LPOVERLAPPED ovl-indicates if overlapped I/0 is being used 

In fact, many of the POSIX and Win32 APis are similar to the native system calls 
provided by the UNIX, Linux, and Windows operating systems. 
The run-time support system (a set of functions built into libraries included 
with a compiler) for most programming languages provides a system-call 
interface that serves as the link to system calls made available by the operating 
system. The system-call interface intercepts function calls in the API and 
invokes the necessary system calls within the operating system. Typically, 
a number is associated with each system call, and the system-call interface 
maintains a table indexed according to these nun'lbers. The system call interface 
then invokes the intended system call in the operating-system kernel and 
returns the status of the system call and any return values. 
The caller need know nothing about how the system call is implemented or 
what it does during execution. Rathel~ it need only obey the API and understand 
what the operating system will do as a result of the execution of that system 
calL Thus, most of the details of the operating-system interface are hidden from 
the programmer by the API and are managed by the run-time support library. 
The relationship between an API, the system-call interface, and the operating 

Chapter 2 
2.4 
user 
mode 
kernel 
mode 
user application 
opeo () ( 
J 
open () 
Implementation 
of open () 
system call 
return 
Figure 2.6 The handling of a user application invoking the open() system call. 
system is shown in Figure 2.6, which illustrates how the operating system 
handles a user application invoking the open() system call. 
System calls occur in different ways, depending onthe COJ:rlpl1te.rjJlll§e. 
Often, more information is required than simply the identity of the desired 
system call. The exact type and ammmt of information vary according to the 
particular operating system and call. For example, to get input, we may need 
to specify the file or device to use as the source, as well as the address and 
length of the memory buffer into which the input should be read. Of course, 
the device or file and length may be implicit in the call. 
Three general methods are used to pass parameters to the operating 
system. The simplest approach is to pass the param.eters in registers. In some 
cases, however, there may be more parameters than registers. In these cases, 
the parameters are generally stored in a block, or table, in memory, and the 
address of the block is passed as a parameter in a register (Figure 2.7). This 
is the approach taken by Linux and Solaris. Parameters also can be placed, or 
pushed, onto the stack by the program and popped oH the stacl( by the operatirl:g 
~yste111: Some operating syste1ns prefer the block or stack method because those 
approaches do not limit the number or length of parameters being passed. 
System calls can be grouped ~oughly intc) six major categories: process 
control, file manipuJation, device manipulation, information maintenance, 
coinmuiii~a1ioii.~; <:lndpr{}tediol}. In Seci:lo:ri.s 2.4.l.~Hi.i=o~l.gli 2.L[6~·we diSCllSS 
briefly the types of system calls that may be provided by an operating system. 
Most of these system calls support, or are supported by, concepts and functions 

X: parameters 
for call 
load address X 
system call 13 +-~---
user program 
2.4 
register 
operating system 
Figure 2.7 Passing of parameters as a table. 

that are discussed in later chapters. Figure 2.8 summarizes the types of system 
calls normally provided by an operating system. 
2.4.1 Process Control 
A running program needs to be able to halt its execution either normally (end) 
or abnormally (abort). If a system call is made to terminate the currently 
ruru1il1g program abnormally, or if the program runs into a problem and 
causes an error trap, a dump of memory is sometimes taken and an error 
message generated. The dump is written to disk and may be examined by a 
system program designed to aid the programmer in finding and 
correcting bugs-to determine the cause of the problem. Under either normal 
or abnormal circumstances, the operating system must transfer control to the 
invoking command mterpreter. The command interpreter then reads the next 
cominand. In an interactive system, the command interpreter simply continues 
with the next command; it is assumed that the user will issue an appropriate 
command to respond to any error. In a GUI system, a pop-up wmdow might 
alert the user to the error and ask for guidance. In a batch system, the command 
interpreter usually terminates the entire job and continues with the next job. 
Some systems allow control cards to indicate special recovery actions in case 
an error occurs. A 
is a batch-system concept. It is a command to 
manage the execution of a process. If the program discovers an error in its input 
and wants to terminate abnormally, it may also want to define an error level. 
More severe errors can be indicated by a higher-level error parameter. It is then 
possible to combi11e normal and abnormal termination by defining a normal 
termination as an error at level 0. The command interpreter or a following 
program can use this error level to determine the next action automatically. 
A process or jobexecuting one P!()gral11_11l<:ly __ \;\'(ll1tto Joad andexecut~ 
anotEer pro-gra1:n:.-Th1s feafl:11:e allows the cmnmand i11terpreter to execute a 
program as directed by, for example, a user command, the click of a mouse, 
or a batch command. An interesting question is where to return control when 
the loaded program terminates. This question is related to the problem of 

Chapter 2 
Process control 
o end, abort 
o load, execute 
o create process, terminate process 
o get process attributes, set process attributes 
o wait for time 
o wait event, signal event 
o allocate and free memory 
File management 
o create file, delete file 
o open, close 
o read, write, reposition 
o get file attributes, set file attributes 
e: Device management 
o request device, release device 
o read, write, reposition 
o get device attributes, set device attributes 
o logically attach or detach devices 
Information maintenance 
o get time or date, set time or date 
o get system data, set system data 
o get process, file, or device attributes 
o set process, file, or device attributes 
Communications 
o create, delete communication connection 
o send, receive messages 
o transfer status information 
o attach or detach remote devices 
Figure 2.8 Types of system calls. 
whether the existing program is lost, saved, or allowed to continue execution 
concurrently with the new program. 
If control returns to the existing program when the new program termi-
nates, we must save the memory image of the existing program; thus, we have 
effectively created a mechanism for one program to call another program. If 
both programs continue concurrently, we have created a new job or process to 

2.4 

EXAMPLES OF WINDOWS AND UNIX SYSTEM CALLS 
Windows 
Unix 
Process 
CreateProcessO 
fork() 
Control 
Exi tProcess () 
exit() 
WaitForSingleObject() 
wait() 
File 
CreateFile () 
open() 
Manipulation 
ReadFile() 
read() 
WriteFile () 
write() 
CloseHandle () 
close() 
Device 
SetConsoleMode() 
ioctl() 
Manipulation 
ReadConsole() 
read() 
WriteConsole() 
write() 
Information 
GetCurrentProcessiD() 
getpid() 
Maintenance 
SetTimerO 
alarm() 
Sleep() 
sleep() 
Communication 
CreatePipe () 
pipe() 
CreateFileMapping() 
shmget() 
MapViewOfFile () 
mmapO 
Protection 
SetFileSecurity() 
chmod() 
InitlializeSecurityDescriptor() 
umask() 
SetSecurityDescriptorGroup() 
chown() 
be multi programmed. Often, there is a system call specifically for this purpose 
(create process or submit job). 
If we create a new job or process, or perhaps even a set of jobs or processes, 
we should be able to control its execution. This control requires the ability 
to determine and reset the attributes of a job or process, including the job's 
priority, its maximum allowable execution time, and so on (get process 
attributes and set process attributes). We may also want to terminate 
a job or process that we created (terminate process) if we find that it is 
incorrect or is no longer needed. 
Having created new jobs or processes, we may need to wait for them 
to finish their execution. We may want to wait for a certain amount of time 
to pass (wait time); more probably, we will want to wait for a specific event to 
occur (wait event). The jobs or processes should then signal when that event 
has occurred (signal event). Quite often, two or more processes may share 
data. To ensure the integrity of the data being shared, operating systems often 
provide system calls allowing a process to lock shared data, thus preventing 
another process from accessing the data while it is locked. Typically such 
system calls include acquire lock and release lock. System calls of these 

Chapter 2 
EXAMPLE OF STANDARD C LIBRARY 
The standard C library provides a portion o£ the system-call interface for 
many versions of UNIX and Linux. As an example, let's assume a C program 
invokes the printf () statement The C library intercepts this call and 
invokes the necessary system call(s) in the operating system-in this instance, 
the write() system call. The C library takes the value returned by write() 
and passes it back to the user program. This is shown in Figure 2.9. 
user 
mode 
kernel 
mode 
I 
I 
#include <stdio.h> 
int main () 
{ 
-
printf ("Greetings"); I+ 
return 0; 
standard C library 
write ( ) 
system call 
I 
I 
) 
Figure 2.9 
Standard C library handling of write(). 
types, dealilcg with the coordination of concurrent processes, are discussed in 
great detail in Chapter 6. 
There are so many facets of and variations in process and job control that 
we next use two examples-one involving a single-tasking system and the 
other a multitasking system -to clarify these concepts. The MS-DOS operating 
system is an example of a single-tasking system. It has a command interpreter 
that is invoked when the computer is started (Figure 2.10(a)). Because MS-DOS 
is single-tasking, it uses a sincple method to run a program and does not create 
a new process. It loads the program into memory, writing over most of itself to 
give the program as much memory as possible (Figure 2.10(b)). Next, it sets the 
instruction pointer to the first instruction of the program. The program then 
runs, and either an error causes a trap, or the program executes a system call 
to terminate. In either case, the error code is saved in the system memory for 
later use. Following this action, the small portion of the command interpreter 
that was not overwritten resumes execution. Its first task is to reload the rest 

free memory 
command 
interpreter 
(a) 
2.4 
free memory 
process 
command 
interpreter 
(b) 
Figure 2.10 MS-DOS execution. (a) At system startup. (b) Running a program. 

of the command interpreter from disk Then the command interpreter makes 
the previous error code available to the user or to the next program. 
Fre~_J?_S_I)(der_i_\'~c!Jr()In B(:>J,"~eley UNIX) is an example of a multitasking 
syst(:'~ When a user logs on to the system~ the shell oTthe user's-choice-
is run. This shell is similar to the MS-DOS shell in that it accepts commands 
and executes programs that the user requests. However, since FreeBSD is a 
multitasking system, the command interpreter may continue running while 
another program is executed (Figure 2.11). Io startanew:__process,_th_es1w1L 
execu~£2\_:for-k()sy~tem call. Then, the selected program is loaded into 
memory via an exec() system call, and the program is executed. Depending 
on the way the command was issued, the shell then either waits for the process 
to finish or runs the process "in the background." In the latter case, the shell 
immediately requests another command. When a process is rmming in the 
background, it cannot receive input directly fron1. the keyboard, because the 
process D 
free memory 
process c 
interpreter 
Figure 2.11 
FreeBSD running multiple programs. 

Chapter 2 
shell is using this resource. I/O is therefore done through files or through a CUI 
interface. Meanwhile, the user is free to ask the shell to run other programs, to 
monitor the progress of the running process, to change that program's priority, 
and so on. When the process is done, it executes an exit () system call to 
terminate, returning to the invoking process a status code of 0 or a nonzero 
error code. This status or error code is then available to the shell or other 
programs. Processes are discussed in Chapter 3 with a program example using 
thefork() and exec() systemcalls. 
2.4.2 File Management 
The file system is discussed in more detail in Chapters 10 and 11. We can, 
however, identify several common system calls dealing with files. 
We first need to be able to create and delete files. Either system call 
requires the name of the file and perhaps some of the file's attributes. Once the 
file is created, we need to open it and to use it. We may also read, write, or 
reposition (rewinding or skipping to the end of the file, for example). Finally, 
we need to close the file, indicating that we are no longer using it. 
We may need these same sets of operations for directories if we have a 
directory structure for organizing files in the file system. In addition, for either 
files or directories, we need to be able to determine the values of various 
attributes and perhaps to reset them if necessary. File attributes include the 
file name, file type, protection codes, accounting information, and so on. At 
least two system calls, get file attribute and set file attribute, are 
required for this function. Some operating systems provide many more calls, 
such as calls for file move and copy. Others might provide an API that performs 
those operations using code and other system calls, and others might just 
provide system programs to perform those tasks. If the system programs are 
callable by other programs, then each can be considered an API by other system 
programs. 
2.4.3 Device Management 
A process may need several resources to execute-main memory, disk drives, 
access to files, and so on. If the resources are available, they can be granted, 
and control can be returned to the user process. Otherwise, the process will 
have to wait until sufficient resources are available. 
The various resources controlled by the operating system can be thought 
of as devices. Some of these devices are physical devices (for example, disk 
drives), while others can be thought of as abstract or virtual devices (for 
example, files). A system with multiple users may require us to first request 
the device, to ensure exclusive use of it. After we are finished with the device, 
we release it. These functions are similar to the open and close system 
calls for files. Other operating systems allow Llnmanaged access to devices. 
The hazard then is the potential for device contention and perhaps deadlock, 
which is described in Chapter 7. 
Once the device has been requested (and allocated to us), we can read, 
write, and (possibly) reposition the device, just as we can with files. In fact, 
the similarity between I/0 devices and files is so great that many operating 
systems, including UNIX, merge the two into a combined file-device structure. 
In this case, a set of system calls is used on both files and devices. Sometimes, 

2.4 

l/0 devices are identified by special file names, directory placement, or file 
attributes. 
The user interface can also ncake files and devices appear to be similar1 even 
though the underlying system calls are dissimilar. This is another example of 
the many design decisions that go into building an operating system and user 
interface. 
2.4.4 Information Maintenance 
Many system calls exist simply for the purpose of transferring information 
between the user program and the operating system. For example, most 
systems have a system call to return the current time and date. Other system 
calls may return information about the system, such as the number of current 
users, the version number of the operating system, the amount of free memory 
or disk space, and so on. 
Another set of system calls is helpful in debugging a program. Many 
systems provide system calls to dump memory. This provision is useful for 
debugging. A program trace lists each system call as it is executed. Even 
microprocessors provide a CPU mode known as single step, in which a trap is 
executed by the CPU after every instruction. The trap is usually caught by a 
debugger. 
Many operating systems provide a time profile of a program to indicate 
the amount of time that the program executes at a particular location or set 
of locations. A time prof~~~~(C_92:1i!~~~i!!'ceE a t~(lC~Ki2l<:ility_S?E!:egl1lar _tii"!'_eE 
interrupts. At every occurrence of the timer interrupt, the value of the program 
c6l-i:i~te1·-ls recorded. With sufficiently frequent timer interrupts, a statistical 
picture of the time spent on various parts of the program can be obtained. 
In addition, the operating system keeps information about all its processes, 
and system calls are used to access this information. Generally, calls are 
also used to reset the process information (get process attributes and 
set process attributes). In Section 3.1.3, we discuss what information is 
normally kept. 
2.4.5 Communication 
Th~~e~e two C()ll1l~cJ:JI1 __ mod_e_l~_()fi!'!e_!El·()_c~ss_col'rll"!'~~nica tion: the .. l"!'~ssag_e::_ 
passing model and the shared-memory model. !nth~Il!~S~~g_e .. pa,s~iJ1gl"!'()'leL 
t_l:t_~_C():rrtll12InJfa_fii~gpr§c~~§:~~-e)(c£lailg~ Il'l-es~~ges with one another to transfer 
i:tcfo_rillaJi()J}. Messages can be exchanged between the processes either directly 
or indirectly through a common mailbox. Before communication can take 
place, a connection must be opened. The name of the other communicator 
must be known, be it another process on the same system or a process on 
another computer comcected by a communications network. Each computer 
in a network has a host name by which it is commonly known. A host also 
has a network identifier, such as an IP address. Similarly, each process has 
a process narne, and this name is translated into an identifier by which the 
operating systemcanrefertotheprocess. The get hostidand get processid 
system calls do this translation. The identifiers are then passed to the general-
purpose open and close calls provided by the file system or to specific 
open connection and close connection system calls, depending on the 
system's model of communication. The recipient process usually must give its 

Chapter 2 
2.5 
permission for comnmnication to take place with an accept connection call. 
Most processes that will be receiving connections are special-purpose daemons, 
which are systems programs provided for that purpose. They execute a wait 
for connection call and are awakened when a connection is rna de. The source 
of the communication, known as the client, and the receiving daenwn, known as 
a server, then exchange messages by using read message and write message 
system calls. The close connection call terminates the communication. 
_!11 the shared-me_1llorytllodel,proc~sses use s:tlared memorycreate and 
shared memory attach system calls to create 2rt1d gain access toi·egions oT 
n1emory owned by other processes. Recall that, normally, the operatinisystein 
hiesf() prevei1foiie process-from accessing another process's memory. Shared 
memory requires that two or more processes agree to remove this restriction. 
They can then exchange information by reading and writing data in the shared 
areas. The form of the data is determined by the processes and are not under 
the operating system's control. The processes are also responsible for ensuring 
that they are not writing to the same location sirnultaneously. Such mechanisms 
are discussed in Chapter 6. In Chapter 4, we look at a variation of the process 
scheme-threads-in which memory is shared by default. 
Both of the models just discussed are common in operating systems, 
and most systems implement both. Message passing is useful for exchanging 
smaller amounts of data, because no conflicts need be avoided. It is also easier to 
implement than is shared memory for intercomputer communication. Shared 
memory allows maximum speed and convenience of communication, since it 
can be done at memory transfer speeds when it takes place within a computer. 
Problems exist, however, in the areas of protection and synchronization 
between the processes sharing memory. 
2.4.6 Protection 
Protection provides a mechanism for controlling access to the resources 
provided by a computer system. Historically, protection was a concern only on 
multiprogrammed computer systems with several users. However, with the 
advent of networking and the Internet, all computer systems, from servers to 
PDAs, must be concerned with protection. 
Typically, system calls providing protection include set permission and 
get permission, which manipulate the permission settings of resources 
such as files and disks. The allow user and deny user system calls spec-
ify whether particular users can-or cannot-be allowed access to certain 
resources. 
We cover protection in Chapter 14 and the much larger issue of security in 
Chapter 15. 
Another aspect of a modern system is the collection of system programs. Recall 
Figure 1.1, which depicted the logical computer hierarchy. At the lowest level is 
hardware. Next is the operating system, then the system programs, and finally 
the application programs. System programs, also known as system utilities, 
provide a convenient enviromnenf1orprograrn-aevelopmeiiTa1inexecuhon. 

2.5 

Some of them are simply user interfaces to system calls; others are considerably 
more complex. They can be divided into these categories: 
File management. These programs create, delete, copy, rename, print, 
dump, list, and generally ncanipulate files and directories. 
Status information. Some programs simply ask the system for the date, 
time, amount of available memory or disk space, number of users, or 
similar status information. Others are more complex, providing detailed 
performance, logging, and debugging information. Typically, these pro-
grams format and print the output to the terminal or other output devices 
or files or display it in a window of the GUI. Some systems also support a 
which is used to store and retrieve configuration information. 
File modification. Several text editors may be available to create and 
modify the content of files stored on disk or other storage devices. There 
may also be special commands to search contents of files or perform 
transformations of the text. 
Programming-language support. Compilers, assemblers, debuggers, and 
interpreters for common programming languages (such as C, C++, Java, 
Visual Basic, and PERL) are often provided to the user with the operating 
system. 
Program loading and execution. Once a program is assembled or com-
piled, it must be loaded into memory to be executed. The system may 
provide absolute loaders, relocatable loaders, linkage editors, and overlay 
loaders. Debugging systems for either higher-level languages or machine 
language are needed as well. 
Communications. These programs provide the mechanism for creating 
virtual comcections among processes, users, and computer systems. They 
allow users to send rnessages to one another's screens, to browse Web 
pages, to send electronic-mail messages, to log in remotely, or to transfer 
files from one machine to another. 
In addition to systems programs, most operating systems are supplied 
with programs that are useful in solving common problems or performing 
common operations. Such application]JJ:"Ogr!lJ1lS iitclLlde'if\T~l:l l:Jrg_wsf2r~, worg 
processors an<i text f6-rinattEis,spreadsheets, database systems, compilers, 
plott1i1g ana s-tafistica]-analysis packages, ancl gan1es~ - -- -
- --------
-----
___ Tne viewoClne Opei;ating-sysrerri-seen b)T inost users is defined by the 
application and system programs, rather than by the actual systern calls. 
Consider a user's PC. When a user's computer is rumcing the Mac OS X 
operating system, the user might see the GUI, featuring a mouse-and-windows 
interface. Alternatively, or even in one of the windows, the user might have 
a command-line UNIX shell. Both use the same set of system calls, but the 
system calls look different and act in different ways. Further confusing the 
user view, consider the user dual-booting from Mac OS X into Windows Vista. 
Now the same user on the same hardware has two entirely different interfaces 
and two sets of applications using the same physical resources. On the same 

Chapter 2 
2.6 
hardware, then, a user can be exposed to multiple user interfaces sequentially 
or concurrently. 
In this section, we discuss problems we face in designing and implementing an 
operating system. There are, of course, no complete solutions to such problems, 
but there are approaches that have proved successful. 
2.6.1 
Design Goals 
The first problem in designing a system is to define goals and specifications. 
At the highest level, the design of the system will be affected by the choice of 
hardware and the type of system: batch, time shared, single user, multiuser, 
distributed, real time, or general purpose. 
Beyond this highest design level, the requirements may be much harder to 
specify. The requirements can, however, be divided into two basic groups: user 
goals and system goals. 
Users desire certain obvious properties in a system. The system should be 
convenient to use, easy to learn and to use, reliable, safe, and fast. Of course, 
these specifications are not particularly useful in the system design, since there 
is no general agreement on how to achieve them. 
A similar set of requirements can be defined by those people who must 
design, create, maintain, and operate the system. The system should be easy to 
design, implement, and maintain; and it should be flexible, reliable, error free, 
and efficient. Again, these requirements are vague and may be interpreted in 
various ways. 
There is, in short, no unique solution to the problem of defining the 
requirements for an operating system. The wide range of systems in existence 
shows that different requirements can result in a large variety of solutions for 
different environments. For example, the requirements for VxWorks, a real-
time operating system for embedded systems, must have been substantially 
different from those for MVS, a large multiuser, multiaccess operating system 
for IBM mainframes. 
Specifying and designing an operating system is a highly creative task. 
Although no textbook can tell you how to do it, general principles have 
been developed in the field of software engineering, and we turn now to 
a discussion of some of these principles. 
c 
-
2.6.2 Mechanisms and Policies 
., 
I 
One important principle is the separation of policy from mechanisiil~echa:: 
1'lis~s (:leter111il1e hcnu !Q_c:@-son'l~tl-til1g; p()lic:les (i~termir<e . zul1dT wilCbe done. 
For example, the timer construct (see Section 1.5.2) is a mechani.sril:-forensill1ng 
CPU protection, but deciding how long the timer is to be set for a particular 
user is a policy decision. 
_]'h~_S_§122l!Cl_tig!l:()fP.Qli_cy_an_ci~T1_echanism is imp()rtant for flexibility. Policies 
are likely to change across places o1:'over- time. 'rri tll'e worst case, each change 
in policy would require a change in the underlying mechanism. A general 
mechanism insensitive to changes in policy would be more desirable. A change 

2.6 

in policy would then require redefinition of only certain parameters of the 
system. For instance, consider a mechanism for giving priority to certain types 
of programs over others. If the mechanism. is properly separated from policy, 
it can be used either to support a policy decision that I/O-intensive progran1.s 
should have priority over CPU-intensive ones or to support the opposite policy. 
Microkernel=based operati1lg sy_sh:~ms(Section 2-?.3)take the separation of 
mechai~1Sinai~Cfp?Hcyto one extreme byimplementing a basicset()j_pri111.iti_y~ 
1Jiwding bfocks. These blocks are almost policy free, allowing more advanced 
-1necharnsms and policies to be added via user-created kernel modules or via 
user programs themselves. As an example, consider the history of UNIX. At 
first, it had a time-sharing scheduler. In the latest version of Solaris, scheduling 
is controlled by loadable tables. Depending on the table currently loaded, 
the system can be time shared, batch processing, real time, fair share, or 
any combination. Making the scheduling mechanism general purpose allows 
vast policy changes to be made with a single load-new-table command. At 
th_~ ()th~r extreme is_il_~~~t~l"Il ~:ttC:l~-as _\1\t'i_!l_t:l()!YJ'c_~ \1\T~~icJ:l ~Qt~ J1"leC:!'.c:l~~~1l~ 
and_p()_1i_c_y__a_:r~_epc:()ciec:lj~1._!he sy~te~_ t(J_e_Ilforce__~gl()~~l()Ok an_cl_ fe_eL All 
applications have similar interfaces, because the interface itself is built into 
the kernel and system libraries. The Mac OS X operating system has similar 
functionality. 
Policy decisions are important for all resource allocation. Whenever it is 
necessary to decide whether or not to allocate a resource, a policy decision must 
be made. Whenever the question is how rather than what, it is a mechanism that 
must be determined. 
2.6.3 Implementation 
Once an operating system is designed, it must be implemented. Traditionally, 
operating systems have been written in assembly language. Now, however, 
they are most commonly written in higher-level languages such as Cor C++. 
The first system that was not written in assembly language was probably 
the Master Control Program (MCP) for Burroughs computers. MCP was written 
in a variant of ALGOL. MULTICS, developed at MIT, was written mainly in 
PL/1. The Linux and Windows XP operating systems are written mostly in C, 
although there are some small sections of assembly code for device drivers and 
for saving and restoring the state of registers. 
The advantages of using a higher-level language, or at least a systems-
implementation language, for implementing operating systems are the same 
as those accrued when the language is used for application programs: the 
code can be written faster, is more compact, and is easier to understand and 
debug. In addition, improvements in compiler technology will improve the 
generated code for the entire operating system by simple recompilation. Finally, 
an operating system is far easier to port-to move to some other hardware-if 
it is written in a higher-level language. For example, MS-DOS was written in Intel 
8088 assembly language. Consequently, it runs natively only on the Intel X86 
family of CPUs. (Although MS-DOS runs natively only on Intel X86, emulators 
of the X86 instruction set allow the operating system to run non-natively-
slower, with more resource use-on other CPUs. 
are programs that 
duplicate the functionality of one system with another system.) The Linux 

Chapter 2 
2.7 
operating system, in contrast, is written mostly inC and is available natively on 
a number of different CPUs, including Intel X86, Sun SPARC, and IBMPowerPC. 
The only possible disadvantages of implementing an operating system in a 
higher-level language are reduced speed and increased storage requirements. 
This, howeve1~ is no longer a major issue in today's systems. Although an 
expert assembly-language programmer can produce efficient small routines, 
for large programs a modern compiler can perform complex analysis and apply 
sophisticated optimizations that produce excellent code. Modern processors 
have deep pipelining and n1.ultiple functional units that can handle the details 
of complex dependencies much more easily than can the human mind. 
As is true in other systems, major performance improvements in operating 
systems are more likely to be the result of better data structures and algorithms 
than of excellent assembly-language code. In addition, although operating sys-
tems are large, only a small amount of the code is critical to high performance; 
the memory manager and the CPU scheduler are probably the most critical rou-
tines. After the system is written and is working correctly, bottleneck routines 
can be identified and can be replaced with assembly-language equivalents. 
A system as large and complex as a modern operating system must be 
engineered carefully if it is to function properly and be modified easily. A 
common approach is to partition the task into small components rather than 
have one monolithic system. Each of these modules should be a well-defined 
portion of the system, with carefully defined inputs, outputs, and functions. 
We have already discussed briefly in Chapter 1 the common components 
of operating systems. In this section, we discuss how these components are 
interconnected and melded into a kernel. 
2.7.1 Simple Structure 
Many commercial operating systen1.s do not have well-defined structures. 
Frequently, such systems started as small, simple, and limited systems and 
then grew beyond their original scope. MS-DOS is an example of such a systen1.. 
It was originally designed and implemented by a few people who had no 
idea that it would become so popular. It was written to provide the most 
functionality in the least space, so it was not divided into modules carefully. 
Figure 2.12 shows its structure. 
In MS-DOS, the interfaces and levels of functionality are not wellseparated. 
For rnstai1.ce, appii.cat1on programs aie able to access the basic I) b 1:outiri.es 
to write directly to the display and disk drives. Such freedom leaves MS-DOS 
vulnerable to errant (or malicio"LlS) programs, causing entire system crashes 
when user programs fail. Of course, MS-DOS was also limited by the hardware 
of its era. Because the Intel 8088 for which it was written provides no dual 
mode and no hardware protection, the designers of MS-DOS had no choice but 
to leave the base hardware accessible. 
Another example of limited structuring is the original UNIX operating 
systein. Like MS~Dc5S, UNix initially was limited· by hard ware ft1il.cfionali.ty. ft 
consistsoftwo separahlepai;fS: thei<:eril.el ai1d the system prograrns:·Thekei:nel 

2.7 

ROM BIOS device drivers 
Figure 2.12 MS-DOS layer structure. 
is further separated into a series of interfaces and device drivers, which have 
been added and expanded over the years as UNIX has evolved. We can view the 
traditional UNIX operating system as being layered, as shown in Figure 2.13. 
Everything below the system-call interface and above the physical hardware 
is the kernel. Tb~l<(Ol"ll~Lp:rgvides__i:h~_fil~syste:rn, C::P_l!_s~h~duLiJl,g, memory 
management, and other operating-system fm1ctions through system calls. 
Taken i.n sum~thatl.sai1 enormous an1ol.lnt of functionality to be combined into 
one level. This monolithic structure was difficult to implement and maintain. 
2.7.2 Layered Approach 
Withproper J:tarc:l\A!<lre support, operating systems can be brokeninto pieces 
that are smaller and more app1:opriate thar:t}hose allowed by the _ _2!i2;g~af 
(the users) 
shells and commands 
compilers and. interpreters 
system libraries 
signals terminal 
handling 
character 1/0 system 
terminal drivers 
file system 
swapping block 1/0 
system 
disk and tape drivers 
CPU scheduling 
page replacement 
demand paging 
virtual memory 
Figure 2.13 Traditional UNIX system structure. 

Chapter 2 
Figure 2.14 A layered operating system. 
M~-:.QOi'ilncil]l'J_IX systeill~· The operating system can then retain much greater 
control over the computer and over the applications that make use of that 
computer. Implementers have more freedom in changing the inner workin.gs 
of the system and in creating modular operating systems. Under a top-
down approach, the overall functionality and features are determined and 
are separated into components. Information hiding is also important, because 
it leaves programmers free to implement the low-level routines as they see fit, 
provided that the external interface of the routine stays unchanged and that 
the routine itself performs the advertised task. 
A system can be made modular in many ways. Qne method is the layered 
approach, in which the operating system is broken ii1to a 1l.umberoflayers 
""(lever8J.TI1eoottom.Iiiyer.(layer 0).1stheTiarawai;e; the nig:Ytesl: (layerN) .. 1sfhe 
user interface. This layering structure is depicted in Figure 2.14. 
An operating-system layer is an implementation of an abstract object made 
up of data and the operations that can manipulate those data. A typical 
operating-system layer-say, layer M -consists of data structures and a set 
of routines that can be invoked by higher-level layers. Layer M, in turn, can 
invoke operations on lower-level layers. 
The main advantage of the layered approach is simplicity of construction 
and debugging. The layers are selected so that each uses functions (operations) 
and services of only lower-level layers. This approach simplifies debugging 
and .system verification. The first layer can be debugged without any concern 
for the rest of the system, because, by definition, it uses only the basic hardware 
(which is assumed correct) to implement its functions. Once the first layer is 
debugged, its correct functioning can be assumed while the second layer is 
debugged, and so on. If an error is found during the debugging of a particular 
layer, the error must be on that layer, because the layers below it are already 
debugged. Thus, the design and implementation of the system are simplified. 

2.7 

Each layer is implemented with only those operations provided by lower-
level layers. A layer does not need to know how these operations are 
implemented; it needs to know only what these operations do. Hence, each 
layer hides the existence of certain data structures, operations, and hardware 
from higher-level layers. 
The major difficulty with the layered approach involves appropriately 
defining the various layers. Because a layer can use only lower-level layers, 
careful planning is necessary. For example, the device driver for the backing 
store (disk space used by virtual-memory algorithms) must be at a lower 
level than the memory-management routines, because memory management 
requires the ability to use the backing store. 
Other requirements may not be so obvious. The backing-store driver would 
normally be above the CPU scheduler, because the driver may need to wait for 
I/0 and the CPU can be rescheduled during this time. However, on a large 
system, the CPU scheduler m.ay have more information about all the active 
processes than can fit in memory. Therefore, this u1.formation may need to be 
swapped u1. and out of memory, requiring the backu1.g-store driver routine to 
be below the CPU scheduler. 
A final problem with layered implementations is that they tend to be less 
efficient than other types. For instance, when a user program executes an I/0 
operation, it executes a system call that is trapped to the I/0 layer, which calls 
the memory-management laye1~ which in tum calls the CPU-scheduling layer, 
which is then passed to the hardware. At each layer, the parameters may be 
modified, data may need to be passed, and so on. Each layer adds overhead to 
the system call; the net result is a system call that takes longer than does one 
on a nonlayered system. 
These limitations have caused a small backlash against layering in recent 
years. Fewer layers with more functionality are beu1.g designed, providu1.g most 
of the advantages of modularized code while avoidu1.g the difficult problems 
of layer definition and interaction. 
2.7.3 Microkernels 
We have already seen that as UNIX expanded, the kernel became large 
and difficult to manage. In the mid-1980s, researchers at Carnegie Mellon 
University developed an operatu1.g system called Mach that modularized 
the kernel using the ~i~roke~ll:~_!_~EE1~()2lC:~~I.b~._gL~!b_()_<:!_0ructl.~~~~--t!~e 
operatingsystem by removing all nonessential cornponentsfrom thekemel and 
1mp~e_l?:l~-ll:!~~~itil~!?::t~~s-~~fe_l"Il~~~~rl.ls_~l:~i~\r~}:Jr()greili~~:· the.reslin is-a smarrei: 
kernel. There is little consensus regarding which services should remain u1. the 
kernel and which should be implemented in user space. Typically, however, 
microkernels provide minimal process and memory management, in addition 
to a communication facility. 
The main function of the micro kernel is to provide a communication facility 
between the client program and the various services that are also rum1.ing 
in user space. Communication is provided by message passing, which was 
described in Section 2.4.5. For example, if the client program wishes to access 
a file, it must interact with the file server. The client program and service never 
interact directly. Rathel~ they communicate indirectly by exchanging messages 
with the microkemel. 

Chapter 2 
One benefit of the microkernel approach is ease of extending the operating 
system. All new services are added to user space and consequently do not 
require modification of the kernel. When the kernel does have to be modified, 
the changes tend to be fewer, because the microkernel is a smaller kernel. 
The resulting operating system is easier to port from one hardware design 
to another. The microkernel also provides more security and reliability, since 
most services are running as user-rather than kernel-processes. If a service 
fails, the rest of the operating system remains untouched. 
Several contemporary operating systems have used the microkernel 
approach. Tru64 UNIX (formerly Digital UNIX) provides a UNIX interface to the 
user, but it is implemented with a Mach kernel. The Mach kernel maps UNIX 
system calls into messages to the appropriate user-level services. The Mac OS 
X kernel (also known as Darwin) is also based on the Mach micro kernel. 
Another example is QNX, a real-time operating system. The QNX nl.icro-
kernel provides services for message passing and process scheduling. It also 
handles low-level network communication and hardware interrupts. All other 
services in QNX are provided by standard processes that run outside the kernel 
in user mode. 
Unfortunately, microkernels can suffer from performance decreases due 
to increased system function overhead. Consider the history of Windows NT. 
The first release had a layered microkernel organization. However, this version 
delivered low performance compared with that of Windows 95. Windows NT 
4.0 partially redressed the performance problem by moving layers from user 
space to kernel space and integrating them more closely. By the time Windows 
XP was designed, its architecture was more monolithic than microkernel. 
2.7.4 Modules 
Perhaps the best current methodology for operating-system design involves 
using object-oriented programming techniques to create a modular kernel. 
Here, the kernel has a set of core components and links in additional services 
either during boot time or during run time. Such a strategy uses dynamically 
loadable modules and is common in modern implementations of UNIX, such 
as Solaris, Linux, and Mac OS X. For example, the Solaris operating system 
structure, shown in Figure 2.15, is organized armmd a core kernel with seven 
types of loadable kernel modules: 
Scheduling classes 
File systems 
Loadable system calls 
Executable formats 
STREAMS modules 
Miscellaneous 
Device and bus drivers 
Such a design allows the kernel to provide core services yet also allows 
certain features to be implemented dynamically. For example, device and 

2.7 
file systems 
Figure 2.15 Solaris loadable modules. 
loadable 
system calls 

bus drivers for specific hardware can be added to the kernel, and support 
for different file systems can be added as loadable modules. The overall 
result resembles a layered system in that each kernel section has defined, 
protected interfaces; but it is more flexible than a layered system in that any 
module can call any other module. Furthermore, the approach is like the 
microkernel approach in that the primary module has only core functions 
and knowledge of how to load and communicate with other modules; but it 
is more efficient, because modules do not need to invoke message passing in 
order to communicate. 
The Apple Mac OS X operating system uses a hybrid structure. It is a layered 
system in which one layer consists of the Mach microkernel. The structure of 
Mac OS X appears in Figure 2.16. The top layers include application environ-
ments and a set of services providing a graphical interface to applications. 
Below these layers is the kernel environment, which consists primarily of the 
Mach microkernel and the BSD kernel. Mach provides memory management; 
support for remote procedure calls (RPCs) and interprocess communication 
(IPC) facilities, including message passing; and thread scheduling. The BSD 
component provides a BSD command line interface, support for networking 
and file systems, and an implementation of POSIX APis, including Pthreads. 
kernel 
environment 
application environments 
and common services 
Figure 2.16 The Mac OS X structure. 

Chapter 2 
2.8 
In addition to Mach and BSD, the kernel environment provides an I/0 kit for 
development of device drivers and dynamically loadable modules (which Mac 
OS X refers to as kernel extensions). As shown in the figure, applications and 
comn:10n services can make use of either the Mach or BSD facilities directly. 
The layered approach described in Section 2.7.2 is taken to its logical conclusion 
in the concept of a 
The fundamental idea behind a virtual 
machine is to abstract the hardware of a si11.gle computer (the CPU, memory, 
disk drives, network interface cards, and so forth) into several different 
execution environments, thereby creating the illusion that each separate 
execution environment is run.ning its own private computer. 
By using CPU scheduling (Chapter 5) and virtual-memory techniques 
(Chapter 9), an operating system 
can create the illusion that a process 
has its own processor with its own (virtual) memory. The virtual machine 
provides an interface that is identical to the underlying bare hardware. Each 
process is provided with a (virtual) copy of the underlying computer 
(Figure 2.17). Usually, the guest process is in fact an operating system, and 
that is how a single physical machine can run multiple operating systems 
concurrently, each in its own virtual machine. 
2.8.1 
History 
Virtual machines first appeared commercially on IBM mainframes via the VM 
operating system in 1972. VM has evolved and is still available, and many of 
processes 
programming/ 
/ 
interface 
1----~-----1 
kernel 
(a) 
processes 
processes 
processes 
kernel 
kernel 
kernel 
VM1 
VM2 
VM3 
virtual-machine 
implementation 
(b) 
Figure 2.17 System models. (a) Nonvirtual machine. (b) Virtual machine. 

2.8 

the original concepts are found in other systems, making this facility worth 
exploring. 
IBM VM370 divided a mainframe into nmltiple virtual machines, each 
numing its own operating system. A ncajor difficulty with the VM virtual-
machine approach involved disk systems. Suppose that the physical machine 
had three disk drives but wanted to support seven virtual machines. Clearly, it 
could not allocate a disk drive to each virtual machine, because the virtual-
machine software itself needed substantial disk space to provide virtual 
memory and spooling. The solution was to provide virtual disks-termed 
minidislcs in IBM's VM operating system -that are identical in all respects except 
size. The system implemented each minidisk by allocating as many tracks on 
the physical disks as the minidisk needed. 
Once these virtual machines were created, users could run any of the 
operating systems or software packages that were available on the underlying 
machine. For the IBM VM system, a user normally ran CMS-a single-user 
interactive operating system. 
2.8.2 Benefits 
There are several reasons for creating a virtual machine. Most of them are 
fundarnentally related to being able to share the same hardware yet run 
several different execution environments (that is, different operating systems) 
concurrently. 
One important advantage is that the host system is protected from the 
virtual machines, just as the virtual machines are protected from each other. A 
virus inside a guest operating system might damage that operating system but 
is unlikely to affect the host or the other guests. Because each virtual machine 
is completely isolated from all other virtual machines, there are no protection 
problems. At the same time, however, there is no direct sharing of resources. 
Two approaches to provide sharing have been implemented. First, it is possible 
to share a file-system volume and thus to share files. Second, it is possible to 
define a network of virtual machines, each of which can send information over 
the virtual communications network. The network is modeled after physical 
communication networks but is implemented in software. 
A virtual-machine system is a perfect vehicle for operating-systems 
research and development. Normally, changing an operating system is a diffi-
cult task. Operating systems are large and complex programs, and it is difficult 
to be sure that a change in one part will not cause obscure bugs to appear 
in some other part. The power of the operating system makes changing it 
particularly dangerous. Because the operating system executes in kernel mode, 
a wrong change in a pointer could cause an error that would destroy the entire 
file system. Thus, it is necessary to test all changes to the operating system 
carefully. 
The operating system, however, runs on and controls the entire machine. 
Therefore, tlle current system must be stopped and taken out of use while 
changes are made and tested. This period is comnconly called system-
development time. Since it makes the system unavailable to users, system-
development time is often scheduled late at night or on weekends, when system 
load is low. 

Chapter 2 
A virtual-machine system can eliminate much of this problem. System 
programmers are given their own virtual machine, and system development is 
done on the virtual machine instead of on a physical machine. Normal system 
operation seldom needs to be disrupted for system development. 
Another advantage of virtual machines for developers is that multiple 
operating systems can be running on the developer's workstation concur-
rently. This virtualized workstation allows for rapid porting and testing of 
programs in varying enviromnents. Sin'lilarly, quality-assurance engineers can 
test their applications in multiple environments without buying, powering, 
and maintaining a computer for each environment. 
A major advantage of virtual machines in production data-center use is 
system 
which involves taking two or more separate systems 
and running them in virtual machines on one system. Such physical-to-virtual 
conversions result in resource optimization, as many lightly used systems can 
be combined to create one more heavily used system. 
If the use of virtual machines continues to spread, application deployment 
will evolve accordingly. If a system can easily add, remove, and move a 
virtual machine, then why install applications on that system directly? Instead, 
application developers would pre-install the application on a tuned and 
customized operating system in a virh1al machine. That virtual environment 
would be the release mechanism for the application. This method would be 
an improvement for application developers; application management would 
become easier, less tuning would required, and technical support of the 
application would be more straightforward. System administrators would 
find the environment easier to manage as well. Installation would be simple, 
and redeploying the application to another system would be much easier 
than the usual steps of uninstalling and reinstalling. For widespread adoption 
of this methodology to occur, though, the format of virtual machines must 
be standardized so that any virtual machine will run on any virtualization 
platform. The "Open Virtual Machine Format" is an attempt to do just that, 
and it could succeed in unifying virtual-machine formats. 
2.8.3 Simulation 
System virtualization as discussed so far is just one of many system-emulation 
methodologies. Virtualization is the most common because it makes guest 
operating systems and applications "believe" they are running on native 
hardware. Because only the system's resources need to be virtualized, these 
guests run at almost full speed. 
Another methodology is 
in which the host system has one 
system architecture and the guest system was compiled for a different archi-
tecture. For example, suppose a company has replaced its outdated computer 
system with a new system but would like to continue to run certain important 
programs that were compiled for the old system. The programs could be run 
in an e1nulator that translates each of the outdated system's instructions into 
the native instruction set of the new system. Emulation can increase the life of 
programs and allow us to explore old architectures without having an actual 
old machine, but its major challenge is performance. Instruction-set emulation 
can run an order of magnitude slower than native instructions. Thus, unless 
the new machine is ten times faster than the old, the program running on 

2.8 

the new machine will run slower than it did on its native hardware. Another 
challenge is that it is difficult to create a correct emulator because, in essence, 
this involves writing an entire CPU in software. 
2.8.4 Para-virtualization 
is another vanat10n on this theme. Rather than try to 
trick a guest operating system into believing it has a system to itself, para-
virtualization presents the guest with a system that is similar but not identical 
to the guest's preferred system. The guest must be modified to run on the 
paravirtualized hardware. The gain for this extra work is more efficient use of 
resources and a smaller virtualization layer. 
Solaris 10 includes 
or 
that create a virtual layer between 
the operating system and the applications. In this system, only one kernel is 
installed, and the hardware is not virtualized. Rather, the operating system 
and its devices are virtualized, providing processes within a container with 
the impression that they are the only processes on the system. One or more 
containers can be created, and each can have its own applications, network 
stacks, network address and ports, user accounts, and so on. CPU resources 
can be divided up among the containers and the systemwide processes. Figure 
2.18 shows a Solaris 10 system with two containers and the standard "global" 
user space. 
user programs 
system programs 
CPU resources 
memory resources 
global zone 
user programs 
system programs 
network addresses 
device access 
CPU resources 
user programs 
system programs 
network addresses 
device access 
CPU resources 
memory resources 
memory resources 
zone 1 
zone 2 
virtual platform 
device management 
Figure 2.18 Solaris I 0 with two containers. 

Chapter 2 
2.8.5 Implementation 
Although the virtual-machine concept is usefut it is difficult to implement. 
Much work is required to provide an exact duplicate of the underlying machine. 
Remember that the underlying machine typically has two modes: user mode 
and kernel mode. The virtual-machine software can run in kernel mode, since 
it is the operating system. The virtual machine itself can execute in only user 
mode. Just as the physical machine has two modes, however, so must the virtual 
machine. Consequently, we must have a virtual user mode and a virtual kernel 
mode, both of which run in a physical user mode. Those actions that cause a 
transfer from user mode to kernel mode on a real machine (such as a system 
call or an attempt to execute a privileged instruction) must also cause a transfer 
from virtual user mode to virtual kernel mode on a virtual machine. 
Such a transfer can be accomplished as follows. When a system calt for 
example, is made by a program running on a virtual machine in virtual user 
mode, it will cause a transfer to the virtual-machine monitor in the real machine. 
When the virtual-machine monitor gains controt it can change the register 
contents and program counter for the virtual machine to simulate the effect of 
the system calL It can then restart the virtual machine, noting that it is now in 
virtual kernel mode. 
The major difference, of course, is time. Whereas the real I/O might have 
taken 100 milliseconds, the virtual I/O might take less time (because it is 
spooled) or more time (because it is interpreted). In addition, the CPU is 
being multi programmed among many virtual machines, further slowing down 
the virtual machines in unpredictable ways. In the extreme case, it may be 
necessary to simulate all instructions to provide a true virtual machine. VM, 
discussed earlier, works for IBM machines because normal instructions for the 
virtual machines can execute directly on the hardware. Only the privileged 
instructions (needed mainly for I/0) must be simulated and hence execute 
more slowly. 
Without some level of hardware support, virtualization would be impos-
sible. The more hardware support available within a system, the more feature 
rich, stable, and well performing the virtual machines can be. All major general-
purpose CPUs provide some amount of hardware support for virtualization. 
For example, AMD virtualization technology is found in several AMD proces-
sors. It defines two new modes of operation-host and guest. Virtual machine 
software can enable host mode, define the characteristics of each guest virtual 
machine, and then switch the system to guest mode, passing control of the 
system to the guest operating system that is running in the virtual machine. 
In guest mode, the virtualized operating system thinks it is rum1.ing on native 
hardware and sees certain devices (those included in the host's definition of 
the guest). If the guest tries to access a virtualized resource, then control is 
passed to the host to manage that interaction. 
2.8.6 Examples 
Despite the advantages of virtual machines, they received little attention for 
a number of years after they were first developed. Today, however, virtual 
machines are coming into fashion as a means of solving system compatibility 
problems. In this section, we explore two popular contemporary virtual 
machines: the VMware Workstation and the Java virtual machine. As you 

2.8 

will see, these virtual machines can typically run on top of operating systems 
of any of the design types discussed earlier. Thus, operating system design 
methods-simple layers, microkernels, n:wdules, and virtual machines-are 
not mutually exclusive. 
2.8.6.1 
VMware 
Most of the virtualization techniques discussed in this section require virtual-
ization to be supported by the kernel. Another method involves writing the 
virtualization tool to run in user mode as an application on top of the operating 
system. Virtual machines running within this tool believe they are rum<ing on 
bare hardware but in fact are running inside a user-level application. 
is a popular commercial application that abstracts 
Intel X86 and compatible hardware into isolated virtual machines. VMware 
Workstation runs as an application on a host operating system such as Windows 
or Linux and allows this host system to concurrently run several different guest 
operating systems as independent virtual machines. 
The architecture of such a system is shown in Figure 2.19. In this scenario, 
Linux is running as the host operating system; and FreeBSD, Windows NT, and 
Windows XP are rum<ing as guest operating systems. The virtualization layer is 
the heart of VMware, as it abstracts the physical hardware into isolated virtual 
machines running as guest operating systems. Each virtual machine has its 
own virtual CPU, memory, disk drives, network interfaces, and so forth. 
The physical disk the guest owns and manages is really just a file within the 
file system of the host operating system. To create an identical guest instance, 
we can simply copy the file. Copying the file to another location protects the 
guest instance against a disaster at the original site. Moving the file to another 
application 
application 
application 
application 
guest operating 
guest operating 
guest operating 
system 
system 
system 
(free BSD) 
(Windows NT) 
(Windows XP) 
virtual CPU 
virtual CPU 
virtual CPU 
virtual memory 
virtual memory 
virtual memory 
virtual devices 
virtual devices 
virtual devices 
virtualization layer 
hardware 
I· 
QPU· •.. ·•[ 
I r!Jemgfy 
Figure 2.19 VMware architecture. 

Chapter 2 
location moves the guest system. These scenarios show how virtualization can 
improve the efficiency of system administration as well as system resource use. 
2.8.6.2 The Java Virtual Machine 
Java is a popular object-oriented programming language introduced by Sun 
Microsystems in 1995. In addition to a language specification and a large API 
library, Java also provides a specification for a Java virtual machine-or JVM. 
Java objects are specified with the class construct; a Java program 
consists of one or more classes. For each Java class, the compiler produces 
an architecture-neutral bytecode output (.class) file that will run on any 
implementation of the JVM. 
The JVM is a specification for an abstract computer. It consists of a class 
loader and a Java interpreter that executes the architecture-neutral bytecodes, 
as diagrammed in Figure 2.20. The class loader loads the compiled . class 
files from both the Java program and the Java API for execution by the Java 
interpreter. After a class is loaded, the verifier checks that the . class file is 
valid Java bytecode and does not overflow or underflow the stack It also 
ensures that the bytecode does not perform pointer arithmetic, which could 
provide illegal memory access. If the class passes verification, it is run by the 
Java interpreter. The JVM also automatically manages memory by performing 
garbage collection -the practice of reclaiming memory from objects no longer 
in use and returning it to the system. Much research focuses on garbage 
collection algorithms for increasing the performance of Java programs in the 
virtual machine. 
The JVM may be implemented in software on top of a host operating 
system, such as Windows, Linux, or Mac OS X, or as part of a Web browser. 
Alternatively, the JVM may be implemented in hardware on a chip specifically 
designed to nm Java programs. If the JVM is implemented in. software, the 
Java interpreter interprets the bytecode operations one at a time. A faster 
software technique is to use a just-in-time (JIT) compiler. Here, the first time a 
Java method is invoked, the bytecodes for the method are turned into native 
machine language for the host system. These operations are then cached so that 
subsequent invocations of a method are performed using the native machine 
instructions and the bytecode operations need not be interpreted all over again. 
A technique that is potentially even faster is to nm the JVM in hardware on a 
Java program 
.class files 
-•I class loader 1-+-
+ 
I 
Java I 
interpreter 
t 
host system 
(Windows, Linux, etc.) 
Figure 2.20 The Java virtual machine. 

2.8 
THE .NET FRAMEWORK 
The .NET Framework is a collection of technologies, including a set of class 
libraries, and an execution environment that come together to provide a 
platform for developing software. This platform allows programs to be 
written to target the .NET Framework instead of a specific architecture. A 
program written for the .NET Framework need not worry aboutthe specifics 
of the hardware or the operating system on which it will run. Thus, any 
architecture implementing .NET will be able to successfully execute the 
program. This is because the execution environment abstracts these details 
and provides a virtual machine as an intermediary between the executing 
program and the underlying architecture. 
At the core of the .NET Framework is the Common Language Runtime 
(CLR). The CLR is the implementation of the .NET virtual machine. Itprovides 
an environment for execution of programs written in any of the languages 
targeted at the .NET Framework. Programs written in languages such as 
C# (pronounced C-sharp) and VB.NET are compiled into an intermediate, 
architecture-independent language called Microsoft Intermediate Language 
(MS-IL). These compiled files, called assemblies, include MS-IL instructions 
and metadata. They have file extensions of either .EXE or .DLL. Upon 
execution of a program, the CLR loads assemblies into what .is known as 
the Application Domain. As instructions are requested by the executing 
program, the CLR converts the MS-IL instructions inside the assemblies into 
native code that is specific to the underlying architecture using just-in-time 
compilation. Once instructions have been converted to native code, they are 
kept and will continue to run as native code for the CPU. The architecture of 
the CLR for the .NET framework is shown in Figure 2.21. 
compilation 
CLR 
C++ 
source 
MS-IL 
assembly 
VB.Net 
source 
MS-IL 
assembly 
host system 
Figure 2.21 
ArchiteCture ofthe.CLR for the .NET Framework. 

Chapter 2 
2.9 
special Java chip that executes the Java bytecode operations as native code, thus 
bypassing the need for either a software interpreter or a just-in-tim.e compiler. 
Broadly, 
is the activity of finding and fixing errors, or 
in a 
system. Debugging seeks to find and fix errors in both hardware and software. 
Performance problems are considered bugs, so debugging can also include 
which seeks to improve performance by removing 
-""'-·"'-·-···" in the processing taking place within a system. A discussion of 
hardware debugging is outside of the scope of this text. In this section, we 
explore debugging kernel and process errors and performance problems. 
2.9.1 
Failure Analysis 
If a process fails, most operating systems write the error information to a 
to alert system operators or users that the problem occurred. The operating 
system can also take a 
capture of the memory (referred to as the 
"core" in the early days of computing) of the process. This core image is stored 
in a file for later analysis. Running programs and core dumps can be probed 
by a 
a tool designed to allow a programmer to explore the code and 
memory 
a process. 
Debugging user-level process code is a challenge. Operating system kernel 
debugging even more complex because of the size and complexity of the kernel, 
its control of the hardware, and the lack of user-level debugging tools. A kernel 
failure is called a 
As with a process failure, error information is saved to 
a log file, and the memory state is saved to a 
Operating system debugging frequently uses different tools and techniques 
than process debugging due to the very different nature of these two tasks. 
Consider that a kernel failure in the file-system code would make it risky for 
the kernel to try to save its state to a file on the file system before rebooting. 
A common technique is to save the kernel's memory state to a section of disk 
set aside for this purpose that contains no file system .. If the kernel detects 
an unrecoverable error, it writes the entire contents of memory, or at least the 
kernel-owned parts of the system memory, to the disk area. When the system 
reboots, a process runs to gather the data from that area and write it to a crash 
dump file within a file system for analysis. 
2.9.2 Performance Tuning 
To identify bottlenecks, we must be able to monitor system performance. Code 
must be added to compute and display measures of system behavior. In a 
number of systems, the operating system does this task by producing trace 
listings of system behavior. All interesting events are logged with their time and 
important parameters and are written to a file. Later, an analysis program can 
process the log file to determine system performance and to identify bottlenecks 
and inefficiencies. These same traces can be run as input for a simulation of 
a suggested improved system. Traces also can help people to find errors in 
operating-system behavior. 

2.9 
Kernighan's Law 
"Debugging is twice as hard as writing the code in the first place. Therefore, 
if you write the code as cleverly as possible, you are, by definition, not smart 
enough to debug it." 

Another approach to performance tuning is to include interactive tools 
with the system that allow users and administrators to question the state of 
various components of the system to look for bottlenecks. The UNIX command 
top displays resources used on the system, as well as a sorted list of the "top" 
resource-using processes. Other tools display the state of disk I/0, memory 
allocation, and network traffic. The authors of these single-purpose tools try to 
guess what a user would want to see while analyzing a system and to provide 
that information. 
Making running operating systems easier to understand, debug, and tune 
is an active area of operating system research and implementation. The cycle 
of enabling tracing as system problems occur and analyzing the traces later 
is being broken by a new generation of kernel-enabled performance analysis 
tools. Further, these tools are not single-purpose or merely for sections of code 
that were written to emit debugging data. The Solaris 10 DTrace dynamic 
tracing facility is a leading example of such a tool. 
2.9.3 DTrace 
is a facility that dynamically adds probes to a running system, both 
i11 user processes and in the kernel. These probes can be queried via the D 
programming language to determine an astonishing amount about the kernel, 
the system state, and process activities. For example, Figure 2.22 follows an 
application as it executes a system call (ioctl) and further shows the functional 
calls within the kernel as they execute to perform the system call. Lines ending 
with "U" are executed in user mode, and lines ending in "K" in kernel mode. 
Debugging the interactions between user-level and kernel code is nearly 
impossible without a toolset that understands both sets of code and can 
instrument the interactions. For that toolset to be truly useful, it must be able 
to debug any area of a system, including areas that were not written with 
debugging in mind, and do so without affecting system reliability. This tool 
must also have a minimum performance impact-ideally it should have no 
impact when not in use and a proportional impact during use. The DTrace tool 
meets these requirements and provides a dynamic, safe, low-impact debugging 
environncent. 
Until the DTrace framework and tools became available with Solaris 10, 
kernel debugging was usually shrouded in mystery and accomplished via 
happenstance and archaic code and tools. For example, CPUs have a breakpoint 
feature that will halt execution and allow a debugger to examine the state of the 
system. Then execution can continue until the next breakpoint or termination. 
This method cannot be used in a multiuser operating-system kernel without 
negatively affecting all of the users on the system. Pn:rEEn,g, which periodically 
samples the instruction pointer to determine which code is being executed, can 
show statistical trends but not individual activities. Code can be included in 
the kernel to emit specific data under specific circumstances, but that code 

Chapter 2 
# ./all.d 'pgrep xclock' XEventsQueued 
dtrace: script './all.d' matched 52377 probes 
CPU FUNCTION 
0 -> XEventsQueued 

-> _XEventsQueued 
u 
u 

-> _XllTransBytesReadable 
U 

<- _XllTransBytesReadable 
U 

-> _XllTransSocketBytesReadable U 

<- _XllTransSocketBytesreadable U 

-> ioctl 
U 

0 <-
<-
<-
-
-> ioctl 
<-
-> getf 
-> set active fd 
<- set active fd 
<- getf 
-> get udatamodel 
<- get udatamodel 
-> releasef 
-> clear active 
-
<- clear active 
-> cv broadcast 
<- cv broadcast 
<- releasef 
ioctl 
ioctl 
XEventsQueued 
XEventsQueued 
fd 
fd 
K 
K 
K 
K 
K 
K 
K 
K 
K 
K 
K 
K 
K 
K 
u 
u 
u 
Figure 2.22 Solaris 10 dtrace follows a system call within the kernel. 
slows down the kernel and tends not to be included in the part of the kernel 
where the specific problem being debugged is occurring. 
In contrast, DTrace runs on production systems-systems that are running 
important or critical applications-and causes no harm to the system. It 
slows activities while enabled, but after execution it resets the system to its 
pre-debugging state. It is also a broad and deep tool. It can broadly debug 
everything happening in the system (both at the user and kernel levels and 
between the user and kernel layers). DTrace can also delve deeply into code, 
showing individual CPU instructions or kernel subroutine activities. 
is composed of a compiler, a framework, 
of 
written within that framework, and 
of those probes. DTrace 
providers create probes. Kernel structures exist to keep track of all probes that 
the providers have created. The probes are stored in a hash table data structure 
that is hashed by name and indexed according to unique probe identifiers. 
When a probe is enabled, a bit of code in the area to be probed is rewritten 
to call dtrace_probe (probe identifier) and then continue with the code's 
original operation. Different providers create different kinds of probes. For 
example, a kernel system-call probe works differently from a user-process 
probe, and that is different from an I/O probe. 
DTrace features a compiler that generates a byte code that is run in the 
kernel. This code is assured to be "safe" by the compiler. For example, no 

2.9 

loops are allowed, and only specific kernel state modifications are allowed 
when specifically requested. Only users with the DTrace "privileges" (or "root" 
users) are allowed to use DT!·ace, as it can retrieve private kernel data (and 
modify data if requested). The generated code runs in the kernel and enables 
probes. It also enables consumers in user mode and enables communications 
between the two. 
A DT!·ace consumer is code that is interested in a probe and its results. 
A consumer requests that the provider create one or more probes. When a 
probe fires, it emits data that are managed by the kernel. Within the kernel, 
actions called 
or 
are performed when probes 
fire. One probe can cause multiple ECBs to execute if more than one consumer 
is interested in that probe. Each ECB contains a predicate ("if statement") that 
can filter out that ECB. Otherwise, the list of actions in the ECB is executed. The 
most usual action is to capture some bit of data, such as a variable's value at 
that point of the probe execution. By gathering such data, a complete picture of 
a user or kernel action can be built. Further, probes firing from both user space 
and the kernel can show how a user-level action caused kernel-level reactions. 
Such data are invaluable for performance monitoril1.g and code optimization. 
Once the probe consumer tennil1.ates, its ECBs are removed. If there are no 
ECBs consuming a probe, the probe is removed. That involves rewriting the 
code to remove the dtrace_probe call and put back the original code. Thus, 
before a probe is created and after it is destroyed, the system is exactly the 
same, as if no probing occurred. 
DTrace takes care to assure that probes do not use too much memory or 
CPU capacity, which could harm the running system. The buffers used to hold 
the probe results are monitored for exceeding default and maximum limits. 
CPU time for probe execution is monitored as well. If limits are exceeded, the 
consumer is terminated, along with the offending probes. Buffers are allocated 
per CPU to avoid contention and data loss. 
An example ofD code and its output shows some of its utility. The following 
program shows the DTrace code to enable scheduler probes and record the 
amount of CPU time of each process running with user ID 101 while those 
probes are enabled (that is, while the program nms): 
sched:: :on-cpu 
uid == 101 
{ 
self->ts 
timestamp; 
} 
sched: : :off -cpu 
self->ts 
{ 
} 
©time [execname] 
self->ts = 0; 
sum(timestamp- self->ts); 
The output of the program, showing the processes and how much time (in 
nanoseconds) they spend running on the CPUs, is shown in Figure 2.23. 

Chapter 2 
2.10 
# dtrace -s sched.d 
dtrace: script 'sched.d' matched 6 probes 
Ac 
grwme-settings-d 
gnome-vfs-daemon 
dsdm 
wnck-applet 
gnome-panel 
clock-applet 
mapping-daemon 
xscreensaver 
meta city 
Xorg 
gnome-terminal 
mixer _applet2 
Java 

Figure 2.23 Output of the 0 code. 
Because DTrace is part of the open-source Solaris 10 operating system, 
it is being added to other operating systems when those systems do not 
have conflicting license agreements. For example, DTrace has been added to 
Mac OS X 10.5 and FreeBSD and will likely spread further due to its unique 
capabilities. Other operating systems, especially the Linux derivatives, are 
adding kernel-tracing functionality as well. Still other operating systems are 
beginning to include performance and tracing tools fostered by research at 
various institutions, including the Paradyn project. 
It is possible to design, code, and implement an operating system specifically 
for one machine at one site. More commonly, however, operating systems 
are designed to nm on any of a class of machines at a variety of sites with 
a variety of peripheral configurations. The system must then be configured 
or generated for each specific computer site, a process sometimes known as 
system generation (SYSGEN). 
The operating system is normally distributed on disk, on CD-ROM or 
DVD-ROM, or as an "ISO" image, which is a file in the format of a CD-ROM 
or DVD-ROM. To generate a system, we use a special program. This SYSGEN 
program reads from a given file, or asks the operator of the system for 
information concerning the specific configuration of the hardware systenc, or 
probes the hardware directly to determine what components are there. The 
following kinds of information must be determined. 
What CPU is to be used? What options (extended instruction sets, floating-
point arithmetic, and so on) are installed? For multiple CPU systems, each 
CPU may be described. 

2.11 
2.11 

How will the boot disk be formatted? How many sections, or "partitions," 
will it be separated into, and what will go into each partition? 
How much memory is available? Some systems will determine this value 
themselves by referencing memory location after memory location until an 
"illegal address" fault is generated. This procedure defines the final legal 
address and hence the amount of available memory. 
What devices are available? The system will need to know how to address 
each device (the device number), the device interrupt number, the device's 
type and model, and any special device characteristics. 
What operating-system options are desired, or what parameter values are 
to be used? These options or values might include how many buffers of 
which sizes should be used, what type of CPU-scheduling algorithm is 
desired, what the maximum number of processes to be supported is, and 
so on. 
Once this information is determined, it can be used in several ways. At one 
extreme, a system administrator can use it to modify a copy of the source code of 
the operating system. The operating system then is completely compiled. Data 
declarations, initializations, and constants, along with conditional compilation, 
produce an output-object version of the operating system that is tailored to the 
system described. 
At a slightly less tailored level, the system description can lead to the 
creation of tables and the selection of modules from a precompiled library. 
These modules are linked together to form the generated operating system. 
Selection allows the library to contain the device drivers for all supported I/0 
devices, but only those needed are linked into the operating system. Because 
the system is not recompiled, system generation is faster, but the resulting 
system may be overly general. 
At the other extreme, it is possible to construct a system that is completely 
table driven. All the code is always part of the system, and selection occurs at 
execution time, rather than at compile or lil1.k time. System generation involves 
simply creating the appropriate tables to describe the system. 
The major differences among these approaches are the size and generality 
of the generated system and the ease of modifying it as the hardware 
configuration changes. Consider the cost of modifying the system to support a 
newly acquired graphics termil1.al or another disk drive. Balanced against that 
cost, of course, is the frequency (or infrequency) of such changes. 
After an operating system is generated, it must be made available for use by 
the hardware. But how does the hardware know where the kernel is or how to 
load that kernel? The procedure of starting a computer by loading the kernel 
is known as booting the system. On most computer systems, a small piece of 
code known as the bootstrap program or bootstrap loader locates the kernel, 
loads it into main memory, and starts its execution. Some computer systems, 
such as PCs, use a two-step process in which a simple bootstrap loader fetches 
a more complex boot program from disk, which in turn loads the kernel. 

Chapter 2 
2.12 
When a CPU receives a reset event-for instance, when it is powered up 
or rebooted -the instruction register is loaded with a predefined memory 
location, and execution starts there. At that location is the initial bootstrap 
program. This program is in the form of read-only memory (ROM), because 
the RAM is in an unknown state at system startup. ROM is convenient because 
it needs no initialization and cannot easily be infected by a computer virus. 
The bootstrap program can perform a variety of tasks. Usually, one task 
is to run diagnostics to determine the state of the machine. If the diagnostics 
pass, the program can continue with the booting steps. It can also initialize all 
aspects of the system, from CPU registers to device controllers and the contents 
of main memory. Sooner or later, it starts the operating system. 
Some systems-such as cellular phones, PDAs, and game consoles-store 
the entire operating system in ROM. Storing the operating system in ROM is 
suitable for small operating systems, simple supporting hardware, and rugged 
operation. A problem with this approach is that changing the bootstrap code 
requires changing the ROM hardware chips. Some systems resolve this problem 
by using erasable programmable read-only memory (EPROM), which is read-
only except when explicitly given a command to become writable. All forms 
of ROM are also known as firmware, since their characteristics fall somewhere 
between those of hardware and those of software. A problem with firmware 
in general is that executing code there is slower thart executing code in RAM. 
Some systems store the operating system in firmware and copy it to RAM for 
fast execution. A final issue with firmware is that it is relatively expensive, so 
usually only small ammmts are available. 
For large operating systems (including most general-purpose operating 
systems like Windows, Mac OS X, and UNIX) or for systems that change 
frequently, the bootstrap loader is stored in firmware, and the operating system 
is on disk. In this case, the bootstrap nms diagnostics and has a bit of code 
that can read a single block at a fixed location (say block zero) from disk into 
memory and execute the code from that 
b!ock. The program stored in the 
boot block may be sophisticated enough to load the entire operating system 
into memory and begin its execution. More typically, it is simple code (as it fits 
in a single disk block) and knows only the address on disk and length of the 
remainder of the bootstrap program. 
is an example of an open-source 
bootstrap program for Linux systems. All of the disk-bound bootstrap, and the 
operating system itself, can be easily changed by writing new versions to disk. 
A disk that has a boot partition (more on that in Section 12.5.1) is called a boot 
disk or system disk. 
Now that the full bootsh·ap program has been loaded, it can traverse the 
file system to find the operating system kernel, load it into memory, and start 
its execution. It is only at this point that the system is said to be running. 
Operating systems provide a number of services. At the lowest level, system 
calls allow a running program to make requests from the operating system 
directly. At a higher level, the command interpreter or shell provides a 
mechanism for a user to issue a request without writing a program. Commands 
may come from files during batch-mode execution or directly from a terminal

---

## Module 2 Textbook

3.1 
CHAPTER 
Early computer systems allowed only one program to be executed at a 
time. This program had complete control of the system and had access to 
all the system's resources. In contrast, current-day computer systems allow 
multiple programs to be loaded into memory and executed concurrently. 
This evolution required firmer control and more compartmentalization of the 
various programs; and these needs resulted in the notion of a process/ which is 
a program in execution. A process is the unit of work in a modern time-sharing 
system. 
The more complex the operating system is, the more it is expected to do on 
behalf of its users. Although its main concern is the execution of user programs, 
it also needs to take care of various system tasks that are better left outside the 
kernel itself. A system therefore consists of a collection of processes: operating-
system processes executing system code and user processes executing user 
code. Potentially/ all these processes can execute concurrently/ with the CPU (or 
CPUs) multiplexed among them. By switching the CPU between processes, the 
operating system can make the computer more productive. In this chapter/ you 
will read about what processes are and how they work. 
To introduce the notion of a process- a program in execution, which forms 
the basis of all computation. 
To describe the various features of processes, including scheduling, 
creation and termination, and communication. 
To describe communication in client-server systems. 
A question that arises in discussing operating systems involves what to call all 
the CPU activities,_f\_QCIJ:C:hJ3ystem~xeq_l_~§_LQQ.S_;.I'\'b§'X{C9::? _ 
_2l_!_i_!11_e:-::?_l<(it~ds_ys!~:r:tl 
has user programs, or tas~~- Even on a single-user system such as Microsoft 

Chapter 3 
Windows, a user may be able to run several programs at one time: a word 
processor, a Web browse1~ and an e-mail package. And even if the user can 
execute only one program at a time, the operating system may need to support 
its own internal programmed activities, such as memory management. In many 
respects, all these activities are similar, so we call all of them processes. 
_The ten:ns~Job i:!DQ pL~e~.s etif:'_lised almost interchangeably in this te)(t. 
Although we personally prefer the term process, much of operat1ng-system 
theory and terminology was developed during a time when the major activity 
of operating systems was job processing. It would be misleading to avoid 
the use of commonly accepted terms that include the word job (such as job 
scheduling) simply because process has superseded job. 
3.1.1 The Process 
Informally, as mentioned earlier, a process is a program in execution. A process 
is more than the program code, which is sometimes known as the text section. 
It also includes the current activity, as represented by the value of the program 
counter and the contents of the processor's registers. A process generally also 
includes the process stack, which contains temporary data (such as function 
parameters, return addresses, and local variables), and a data section, which 
contains global variables. A process may also include a heap, which is memory 
thatis dynamically allocated during process run time. The structure of a process 
in memory is shown in Figure 3.1. 
We emphasize that a program by itself is not a process; a program is a passive 
entity, such as a file containing a list of instructions stored on disk (often called 
an executable file), whereas a process is an active entity, with a program counter 
specifying the next instruction to execute and a set of associated resources. A 
program becomes a process when an executable file is loaded into memory. 
Two common techniques for loading executable files are double-clicking an 
icon representing the executable file and entering the name of the executable 
file on the command line (as in prog. exe or a. out.) 

figure 3.1 
Process in memory.< 

3.1 

1/0 or event completion 
Figure 3.2 Diagram of process state. 
Although two processes may be associated with the same program, they 
are nevertheless considered two separate execution sequences. For instance, 
several users may be running different copies of the mail program, or the same 
user may invoke many copies of the Web browser program. Each of these is a 
separate process; and although the text sections are equivalent, the data, heap, 
and stack sections vary. It is also common to have a process that spawns many 
processes as it runs. We discuss such matters in Section 3.4. 
3.1.2 Process State 
As a proces::; excr:utes, it changes state. The state of a process is defil1.ed in 
part by the current activity of that process. Each process may be in one of the 
following states: 
New. The process is being created. 
Running. Instructions are being executed. 
Waiting. The process is waiting for some event to occur (such as an I/0 
completion or reception of a signal). 
Ready. The process is waiting to be assigned to a processor. 
Terminated. The process has finished execution. 
These names are arbitrary, and they vary across operating systems. The states 
that they represent are found on all systems, however. Certain operating 
systems also more finely delineate process states. It is important to realize 
that only one process can be running on any processor at any instant. Many 
processes may be ready and waiting, however. The state diagram corresponding 
to these states is presented in Figure 3.2. 
3.1.3 Process Control Block 
"§_(1cb pr()cess isrepreserlt~pjnthe operatir1,g system l:Jy a process_ coptrol blo_ck _ 
(PCB)-alsocalled a taskcontroZbloclc. A PCB is shown in Figure 3.3. It contains 
mi:my pieces of iil.format1o11assodated with a specific process, including these: 

Chapter 3 
• • • 
Figure 3.3 Process control block (PCB). 
Process state. The state may be new, ready runnil•g, waiting, halted, and 
so on. 
Program counter. The counter indicates the address of the next instruction 
to be executed for this process. 
CPU registers. The registers vary in number and type, depending on 
the computer architecture. They mclude accumulators, index registers, 
stack pointers, and general-purpose registers, plus any condition-code 
information. Along with the program counter, this state information must 
be saved when an mterrupt occurs, to allow the process to be continued 
correctly afterward (Figure 3.4). 
CPU-scheduling information. This information includes a process priority, 
pointers to scheduling queues, and any other scheduling parameters. 
(Chapter 5 describes process scheduling.) 
Memory-management information. This information may include such 
information as the value of the base and limit registers, the page tables, 
or the segment tables, dependmg on the memory system used by the 
operating system (Chapter 8). 
Accounting information. This mformation includes the amount of CPU 
and real time used, time limits, account numbers, job or process numbers, 
and so on. 
I/O status information. This information includes the list of I/O devices 
allocated to the process, a list of open files, and so on. 
In briet the PCB simply serves as the repository for any information that may 
vary from process to process. 
3.1.4 Threads 
The process model discussed so far has implied that a process is a program 
that performs a single thread of execution. For example, when a process is 
running a word-processor program, a single thread of instructions is being 
executed. This single thread of control allows the process to perform only one 

3.2 
process P0 
idle 
3.2 
operating system 
interrupt or system call 
• 
• 
process P 1 
executing 
idle 
Figure 3.4 Diagram showing CPU switch from process to process. 

task at one time. The user cannot simultaneously type in characters and run the 
spell checker within the same process, for example. Many modern operatin.g 
systems have extended the process concept to allow a process to have multiple 
threads of execution and thus to perform more than one task at a time. On a 
system that supports threads, the PCB is expanded to include information for 
each thread. Other changes throughout the system are also needed to support 
threads. Chapter 4 explores multithreaded processes in detail. 
The objective of multiprogramming is to have some process nnming at all 
times, to maximize CPU utilization. The objective of time sharing is to switch the 
CPU among processes so frequently that users can interact with each program 
while it is run.ning. To meet these objectives, the process scheduler selects 
an available process (possibly from a set of several available processes) for 
program execution on the CPU. For a single-processor system, there will never 
be more than one running process. If there are more processes, the rest will 
have to wait until the CPU is free and can be rescheduled. 
3.2.1 Scheduling Queues 
As processes enter the system, they are put into a job queue, which consists 
of all processes in the system. The processes that are residing in main memory 
and are ready and waiting to execute are kept on a list called the ready queue. 

Chapter 3 
PROCESS REPRESENTATION IN LINUX 
The process control block in the Linux operating system is represented 
by the C struch1re task_struct. This structure contains all the necessary 
information for representing a process, including the state of the process, 
scheduling and memory-management information, list of open files, and 
pointers to the process's parent and any of its children. (A process's parent is 
the process that created it; its children are any processes that it creates.) Some 
of these fields include: 
pid_t pid; I* process identifier *I 
long state; I* state of the process *I 
unsigned int time_slice I* scheduling information *I 
struct task_struct *parent; I* this process's parent *I 
struct list__head children; I* this process's children *I 
struct files_struct *files; I* list of open files *I 
struct mm_struct *mm; I* address space of this process *I 
For example, the state of a process isrepresented by the field long state 
in this structure. Within the Linux kernel, all active processes are represented 
using a doubly linked list of task_struct, and the kernel maintains a pointer 
-current -to the process currently executing on the system. This is shown 
in Figure 3.5. 
struct task_struct 
process information 
struct task_struct 
process information 
t 
current 
(currently executing proccess) 
Figure 3.5 Active processes in Linux. 
struct task_struct 
process information 
As an illustration of how the kernel might manipulate one of the fields in 
the task_struct for a specified process, let's assume the system would like 
to change the state of the process currently running to the value new_state. 
If currentis a pointer to the process currently executing, its state is changed 
with the following: 
current->state = new_state; 
This queue is generally stored as a linked list. A ready-queue header contains 
pointers to the first and final PCBs in the list. Each PCB includes a pointer field 
that points to the next PCB in the ready queue. 

3.2 

queue header 
mag 
tape ~=7:C""77~""""" 
unit 0 k:\\t_82_11~~il-== 
Figure 3.6 The ready queue and various 1/0 device queues. 
The system also includes other queues. When a process is allocated the 
CPU, it executes for a while and eventually quits, is interrupted, or waits for 
the occurrence of a particular event, such as the completion of an I/0 request. 
Suppose the process makes an I/O request to a shared device, such as a disk. 
Since there are many processes in the system, the disk may be busy with the 
I/0 request of some other process. The process therefore may have to wait for 
the disk. The list of processes waiting for a particular I/0 device is called a 
device queue. Each device has its own device queue (Figure 3.6). 
A common representation of process scheduling is a queueing diagram, 
such as that in Figure 3.7. Each rectangular box represents a queue. Two types 
of queues are present: the ready queue and a set of device queues. The circles 
represent the resources that serve the queues, and the arrows indicate the flow 
of processes in the system. 
A new process is initially put in the ready queue. It waits there until it is 
selected for execution, or is dispatched. Once the process is allocated the CPU 
and is executing, one of several events could occur: 
The process could issue an I/0 request and then be placed in an I/0 queue. 
The process could create a new subprocess and wait for the subprocess's 
termination. 
The process could be removed forcibly from the CPU, as a result of an 
interrupt, and be put back in the ready queue. 

Chapter 3 
Figure 3.7 Queueing-diagram representation of process scheduling. 
In the first two cases, the process eventually switches from the waiting state 
to the ready state and is then put back in the ready queue. A process continues 
this cycle until it terminates, at which time it is removed from all queues and 
has its PCB and resources deallocated. 
3.2.2 Schedulers 
A process migrates among the various scheduling queues throughout its 
lifetime. The operating system must select, for scheduling purposes, processes 
from these queues in some fashion. The selection process is carried out by the 
appropriate scheduler. 
Often, in a batch system, more processes are submitted than can be executed 
immediately. These processes are spooled to a mass-storage device (typically a 
disk), where they are kept for later execution. The long-term scheduler, or job 
scheduler, selects processes from this pool and loads them into memory for 
execution. The short-term scheduler, or CPU scheduler, selects from among 
the processes that are ready to execute and allocates the CPU to one of them. 
The primary distinction between these two schedulers lies in frequency 
of execution. The short-term scheduler must select a new process for the CPU 
frequently. A process may execute for only a few milliseconds before waiting 
for an I/0 request. Often, the short-term scheduler executes at least once every 
100 milliseconds. Because of the short time between executions, the short-term 
scheduler must be fast. If it takes 10 milliseconds to decide to execute a process 
for 100 milliseconds, then 10 I (100 + 10) = 9 percent of the CPU is being used 
(wasted) simply for scheduling the work. 
The long-term scheduler executes much less freqvently; minutes may sep-
arate the creation of one new process and the next. The long-term scheduler 
controls the degree of multiprogramming (the number of processes in mem-
ory). If the degree of multiprogramming is stable, then the average rate of 
process creation must be equal to the average departure rate of processes 
leaving the system. Thus, the long-term scheduler may need to be invoked 

3.2 

only when a process leaves the system. Because of the longer interval between 
executions, the long-term scheduler can afford to take more tin<e to decide 
which process should be selected for execution. 
It is important that the long-term scheduler make a careful selection. In 
general, most processes can be described as either I/ 0 bound or CPU bound. An 
I/O-bound process is one that spends more of its time doing I/O than it spends 
doing computations. A CPU-bound process, in contrast, generates I/0 requests 
infrequently, using more of its time doing computations. It is important that the 
long-term scheduler select a good process mix of I/O-bound and CPU-bound 
processes. If all processes are I/0 bound, the ready queue will almost always 
be empty, and the short-term scheduler will have little to do. If all processes 
are CPU bound, the I/0 waiting queue will almost always be empty, devices 
will go unused, and again the system will be unbalanced. The system with the 
best performance will thus have a combination of CPU-bound and I/O-bound 
processes. 
On some systems, the long-term scheduler may be absent or minimal. 
For example, time-sharing systems such as UNIX and Microsoft Windows 
systems often have no long-term scheduler but simply put every new process in 
memory for the short-term scheduler. The stability of these systems depends 
either on a physical limitation (such as the number of available terminals) 
or on the self-adjusting nature of human users. If performance declines to 
m<acceptable levels on a multiuser system, some users will simply quit. 
Some operating systems, such as time-sharing systems, may introduce an 
additional, intermediate level of scheduling. This medium-term scheduler is 
diagrammed in Figure 3.8. The key idea behind a medium-term scheduler 
is that sometimes it can be advantageous to remove processes from mem-
ory (and from active contention for the CPU) and thus reduce the degree 
of multiprogramrning. Later, the process can be reintroduced into memory, 
and its execution can be continued where it left off. This scheme is called 
swapping. The process is swapped out, and is later swapped in, by the 
medium-term scheduler. Swapping may be necessary to improve the pro-
cess mix or because a change in memory requirements has overcommitted 
available memory, requiring memory to be freed up. Swapping is discussed in 
Chapter 8. 
swap in 
.·.····••·.· •. ··. partiaii}' exec~t~d 
•sw11pped-out processes·. 
swap out 
Figure 3.8 Addition of medium-term scheduling to the queueing diagram. 

Chapter 3 
3.3 
3.2.3 Context Switch 
As mentioned in Section 1.2.1, interrupts cause the operating system to change 
a CPU from its current task and to run a kernel routine. Such operations happen 
frequently on general-purpose systems. When an interrupt occurs, the system 
needs to save the current 
of the process running on the CPU so that 
it can restore that context when its processing is done, essentially suspending 
the process and then resuming it. The context is represented in the PCB of the 
process; it includes the value of the CPU registers, the process state (see Figure 
3.2), and memory-management information. Generically, we perform a 
of the current state of the CPU, be it in kernel or user mode, and then a 
to resu.me operations. 
Switching the CPU to another process requires performing a state save 
of the current process and a state restore of a different process. This task is 
known as a 
When a context switch occurs, the kernel saves the 
context of the old process in its PCB and loads the saved context of the new 
process scheduled to run. Context-switch time is pure overhead, because the 
system does no useful work while switching. Its speed varies from machine to 
machine, depending on the memory speed, the number of registers that must 
be copied, and the existence of special instructions (such as a single instruction 
to load or store all registers). Typical speeds are a few milliseconds. 
Context-switch times are highly dependent on hardware support. For 
instance, some processors (such as the Sun UltraSPARC) provide multiple sets 
of registers. A context switch here simply requires changing the pointer to the 
current register set. Of course, if there are more active processes than there are 
register sets, the system resorts to copying register data to and from memory, 
as before. Also, the more complex the operating system, the more work must 
be done during a context switch. As we will see in Chapter 8, advanced 
memory-management techniques may require extra data to be switched with 
each context. For instance, the address space of the current process must be 
preserved as the space of the next task is prepared for use. How the address 
space is preserved, and what amount of work is needed to preserve it, depend 
on the memory-management method of the operating system. 
The processes in most systems can execute concurrently, and they may 
be created and deleted dynamically. Thus, these systems must provide a 
mechanism for process creation and termination. In this section, we explore 
the n1.echanisms involved in creating processes and illustrate process creation 
on UNIX and Windows systems. 
3.3.1 Process Creation 
A process may create several new processes, via a create-process system call, 
during the course of execution. The creating process is called a parent process, 
and the new processes are called the children of that process. Each of these 
new processes may in turn create other processes, forming a tree of processes. 
Most operating systems (including UNIX and the Windows family of 
operating systems) identify processes according to a unique process identifier 

3.3 

(or pid), which is typically an integer number. Figure 3.9 illustrates a typical 
process tree for the Solaris operating system, showing the name of each process 
and its pid. In Solaris, the process at the top of the tree is the sched process, 
with pid of 0. The sched process creates several children processes-including 
pageout and fsflush. These processes are responsible for managing memory 
and file systems. The sched process also creates the ini t process, which serves 
as the root parent process for all user processes. In Figure 3.9, we see two 
children of ini t-inetd and dtlogin. inetd is responsible for networking 
services such as telnet and ftp; dtlogin is the process representing a user 
login screen. When a user logs in, dtlogin creates an X-windows session 
(Xsession), which in turns creates the sdt_shel process. Below sdLshel, a 
user's command-line shell-the C-shell or csh-is created. In this command-
line interface, the user can then invoke various child processes, such as the ls 
and cat commands. We also see a csh process with pid of 7778 representing a 
user who has logged onto the system using telnet. This user has started the 
Netscape browser (pid of 7785) and the emacs editor (pid of 8105). 
On UNIX, we can obtain a listing of processes by using the ps command. For 
example, the command ps -el will list complete information for all processes 
currently active in the system. It is easy to construct a process tree similar to 
what is shown in Figure 3.9 by recursively tracing parent processes all the way 
to the ini t process. 
In general, a process will need certain resources (CPU time, memory, files, 
I/0 devices) to accomplish its task. When a process creates a subprocess, that 
inetd 
pid=140 
dtlogin 
pid = 251 
Figure 3.9 A tree of processes on a typical Solaris system. 

Chapter 3 
subprocess may be able to obtain its resources directly from the operating 
system, or it may be constrained to a subset of the resources of the parent 
process. The parent may have to partition its resources among its children, 
or it may be able to share some resources (such as ncemory or files) among 
several of its children. Restricting a child process to a subset of the parent's 
resources prevents any process from overloading the system by creating too 
many subprocesses. 
In addition to the various physical and logical resources that a process 
obtains when it is created, initialization data (input) may be passed along by 
the parent process to the child process. For example, consider a process whose 
function is to display the contents of a file-say, img.jpg-on the screen of a 
terminal. When it is created, it will get, as an input from its parent process, 
the name of the file img.jpg, and it will use that file name, open the file, and 
write the contents out. It may also get the name of the output device. Some 
operating systems pass resources to child processes. On such a system, the 
new process may get two open files, img.jpg and the terminal device, and may 
simply transfer the datum between the two. 
When a process creates a new process, two possibilities exist in terms of 
execution: 
The parent continues to execute concurrently with its children. 
The parent waits until some or all of its children have terminated. 
There are also two possibilities in terms of the address space of the new process: 
The child process is a duplicate of the parent process (it has the same 
program and data as the parent). 
The child process has a new program loaded into it. 
To illustrate these differences, let's first consider the UNIX operating system. 
In UNIX, as we've seen, each process is identified by its process identifier, 
which is a tmique integer. A new process is created by the fork() system 
call. The new process consists of a copy of the address space of the original 
process. This mechanism allows the parent process to communicate easily with 
its child process. Both processes (the parent and the child) continue execution 
at the instruction after the fork () , with one difference: the return code for 
the fork() is zero for the new (child) process, whereas the (nonzero) process 
identifier of the child is returned to the parent. 
Typically, the exec() system call is used after a fork() system call by 
one of the two processes to replace the process's memory space with a new 
program. The exec() system call loads a binary file into memory (destroying 
the memory image of the program containing the exec() system call) and 
starts its execution. In this manner, the two processes are able to communicate 
and then go their separate ways. The parent can then create more children; or, 
if it has nothing else to do while the child runs, it can issue await() system 
call to move itself off the ready queue until the termination of the child. 
The C program shown in Figure 3.10 illustrates the UNIX system calls 
previously described. We now have two different processes running copies of 
the same program. The only difference is that the value of pid (the process 

3.3 
#include <sysltypes.h> 
#include <stdio.h> 
#include <unistd.h> 
int main() 
{ 
pid_t pid; 
} 
I* fork a child process *I 
pid =fork(); 
if (pid < 0) { I* error occurred *I 
fprintf(stderr, "Fork Failed"); 
return 1; 
} 
else if (pid == 0) { I* child process *I 
execlp("lbinlls","ls",NULL); 
} 
else { I* parent process *I 
} 
I* parent will wait for the child to complete *I 
wait (NULL) ; 
printf("Child Complete"); 
return 0; 
Figure 3.10 Creating a separate process using the UNIX fork() system call. 

identifier) for the child process is zero, while that for the parent is an integer 
value greater than zero (in fact, it is the actual pid of the child process). The 
child process inherits privileges and scheduling attributes from the parent, 
as well certain resources, such as open files. The child process then overlays 
its address space with the UNIX command lbin/ls (used to get a directory 
listing) using the execlp() system call (execlp() is a version of the exec() 
system call). The parent waits for the child process to complete with the wait() 
system call. When the child process completes (by either implicitly or explicitly 
invoking exit ()) the parent process resumes from the call to wait (),where it 
completes using the exit() system call. This is also illustrated in Figure 3.11. 
parent 
wait 
resumes 
child 
~--------+( 
exit() 
Figure 3.11 
Process creation using fork() system call. 

Chapter 3 
#include <stdio.h> 
#include <windows.h> 
int main(VOID) 
{ 
STARTUPINFO si; 
PROCESS_INFORMATION pi; 
} 
II allocate memory 
ZeroMemory(&si, sizeof(si)); 
si.cb = sizeof(si); 
ZeroMemory(&pi, sizeof(pi)); 
II create child process 
if (!CreateProcess(NULL, II use command line 
"C:\\WINDOWS\\system32\\mspaint.exe", II command line 
NULL, II don't inherit process handle 
{ 
} 
NULL, II don't inherit thread handle 
FALSE, II disable handle inheritance 
0, II no creation flags 
NULL, II use parent's environment block 
NULL, II use parent's existing directory 
&si, 
&pi)) 
fprintf(stderr, "Create Process Failed"); 
return -1; 
II parent will wait for the child to complete 
WaitForSingleObject(pi.hProcess, INFINITE); 
printf("Child Complete"); 
II close handles 
CloseHandle(pi.hProcess); 
CloseHandle(pi.hThread); 
Figure 3.12 Creating a separate process using the Win32 API. 
As an alternative examplef we next consider process creation in Windows. 
Processes are created in the Win32 API using the CreateProcess () functionf 
which is similar to fork () in that a parent creates a new child process. Howeverf 
whereas fork() has the child process inheriting the address space of its parent 
CreateProcess () requires loading a specified program into the address space 
of the child process at process creation. Furthermoref whereas fork() is passed 
no parametersf CreateProcess () expects no fewer than ten parameters. 
The C program shown in Figure 3.12 illustrates the CreateProcess () 
functionf which creates a child process that loads the application mspaint. ex e. 
We opt for many of the default values of the ten parameters passed to 
CreateProcess (). Readers interested in pursuing the details of process 

3.3 

creation and management in the Win32 API are encouraged to consult the 
bibliographical notes at the end of this chapter. 
Two parameters passed to CreateProcess () are instances of the START-
UPINFO and PROCESS_INFORMATION structures. STARTUPINFO specifies many 
properties of the new process, such as window size and appearance and han-
dles to standard input and output files. The PROCESS_INFORMATION structure 
contains a handle and the identifiers to the newly created process and its thread. 
We invoke the ZeroMemory () function to allocate memory for each of these 
structures before proceeding with CreateProcess (). 
The first two parameters passed to CreateProcess () are the application 
name and command-line parameters. If the application name is NULL (as 
it is in this case), the command-line parameter specifies the application to 
load. In this instance, we are loading the Microsoft Windows mspaint.exe 
application. Beyond these two initial parameters, we use the default parameters 
for inheriting process and thread handles as well as specifying no creation flags. 
We also use the parent's existing environment block and starting directory. 
Last, we provide two pointers to the STARTUPINFO and PROCESS.lNFORMATION 
structures created at the beginning of the program. In Figure 3.10, the parent 
process waits for the child to complete by invoking the wait () system 
calL The equivalent of this in Win32 is Wai tForSingleObj ect (), which is 
passed a handle of the child process-pi. hProcess-and waits for this 
process to complete. Once the child process exits, control returns from the 
Wai tForSingleObj ect () function in the parent process. 
3.3.2 Process Termination 
A process terminates when it finishes executing its final statement and asks the 
operating system to delete it by using the exit () system calL At that point, the 
process may return a status value (typically an integer) to its parent process 
(via the wait() system call). All the resources of the process-including 
physical and virtual memory, open files, and I/0 buffers-are deallocated 
by the operating system. 
Termination can occur in other circumstances as welL A process can cause 
the termination of another process via an appropriate system call (for example, 
TerminateProcess () in Win32). Usually, such a system call can be invoked 
only by the parent of the process that is to be terminated. Otherwise, users 
could arbitrarily kill each other's jobs. Note that a parent needs to know the 
identities of its children. Thus, when one process creates a new process, the 
identity of the newly created process is passed to the parent. 
A parent may terminate the execution of one of its children for a variety of 
reasons, such as these: 
The child has exceeded its usage of some of the resources that it has been 
allocated. (To determine whether this has occurred, the parent m.ust have 
a mechanism to inspect the state of its children.) 
The task assigned to the child is no longer required. 
The parent is exiting, and the operating system does not allow a child to 
continue if its parent terminates. 

Chapter 3 
3.4 
Some systencs, including VMS, do not allow a child to exist if its parent 
has terminated. In such systems, if a process terminates (either normally or 
abnormally), then all its children must also be terminated. This phenomenon, 
referred to as cascading termination, is normally initiated by the operating 
system. 
To illustrate process execution and termination, consider that, in UNIX, we 
can terminate a process by using the exit() system call; its parent process 
may wait for the termination of a child process by using the wait() system 
call. The wait() system call returns the process identifier of a terminated child 
so that the parent can tell which of its children has terminated. If the parent 
terminates, however, all its children have assigned as their new parent the 
ini t process. Thus, the children still have a parent to collect their status and 
execution statistics. 
Processes executing concurrently in the operating system may be either 
independent processes or cooperating processes. A process is independent 
if it cannot affect or be affected by the other processes executing in the system. 
Any process that does not share data with any other process is independent. A 
process is cooperating if it can affect or be affected by the other processes 
executing in the system. Clearly, any process that shares data with other 
processes is a cooperating process. 
There are several reasons for providing an environment that allows process 
cooperation: 
Information sharing. Since several users may be interested in the same 
piece of information (for instance, a shared file), we must provide an 
environment to allow concurrent access to such information. 
Computation speedup. If we want a particular task to run faster, we must 
break it into subtasks, each of which will be executing in parallel with the 
others. Notice that such a speedup can be achieved only if the computer 
has multiple processing elements (such as CPUs or I/O channels). 
Modularity. We may want to construct the system in a modular fashion, 
dividing the system functions into separate processes or threads, as we 
discussed in Chapter 2. 
Convenience. Even an individual user may work on many tasks at the 
same time. For instance, a user may be editing, printing, and compiling in 
parallel. 
Cooperating processes require an interprocess communication (IPC) mech-
anism that will allow them to exchange data and information. There are two 
fundamental models of interprocess communication: (1) shared memory and 
(2) message passing. In the shared-memory model, a region of memory that 
is shared by cooperating processes is established. Processes can then exchange 
information by reading and writing data to the shared region. In the message-
passing model, communication takes place by means of messages exchanged 

3.4 

process A 
process A 

kernel 
(a) 
(b) 
Figure 3.13 Communications models. (a) Message passing. (b) Shared memory. 
between the cooperating processes. The two communications models are 
conh·asted in Figure 3.13. 
Both of the models just discussed are common in operating systems, and 
many systems implement both. Message passing is useful for exchanging 
smaller ammmts of data, because no conflicts need be avoided. Message 
passing is also easier to implement than is shared memory for intercomputer 
communication. Shared memory allows maximum speed and convenience of 
communication. Shared memory is faster than message passing, as message-
passing system.s are typically implemented using system calls and thus require 
the more time-consuming task of kernel irttervention. In contrast, in shared-
memory systems, system calls are required only to establish shared-memory 
regions. Once shared memory is established, all accesses are treated as routine 
memory accesses, and no assistance from the kernel is required. In the 
ren1.ainder of this section, we explore each of these IPC models in more detail. 
3.4.1 Shared-Memory Systems 
Interprocess communication using shared memory requires communicating 
processes to establish a region of shared memory. Typically, a shared-memory 
region resides in the address space of the process creating the shared-
memory segment. Other processes that wish to communicate using this shared-
memory segment must attach it to their address space. Recall that, normally, the 
operating system tries to prevent one process from accessing another process's 
memory. Shared memory requires that two or more processes agree to remove 
this restriction. They can then excbange information by reading and writing 
data in the shared areas. The form of the data and the location are determined by 
these processes and are not under the operating system's control. The processes 
are also responsible for ensuring that they are not writing to the same location 
simultaneously. 

Chapter 3 
To illustrate the concept of cooperating processes, let's consider the 
producer-consumer problem, which is a common paradigm for cooperating 
processes. A producer process produces information that is consumed by a 
consumer process. For example, a compiler may produce assembly code, 
which is consumed by an assembler. The assembler, in turn, ncay produce 
object modules, which are consumed by the loader. The producer-consumer 
problem also provides a useful metaphor for the client-server paradigm. We 
generally think of a server as a producer and a client as a consumer. For 
example, a Web server produces (that is, provides) HTML files and images, 
which are consumed (that is, read) by the client Web browser requesting the 
resource. 
One solution to the producer-consumer problem uses shared memory. To 
allow producer and consumer processes to run concurrently, we must have 
available a buffer of items that can be filled by the producer and emptied by 
the consumer. This buffer will reside in a region of memory that is shared 
by the producer and consumer processes. A producer can produce one item 
while the consumer is consuming another item. The producer and consumer 
must be synchronized, so that the consumer does not try to consume an item 
that has not yet been produced. 
Two types of buffers can be used. The 
places no practical 
limit on the size of the buffer. The consumer may have to wait for new items, 
but the producer can always produce new items. The 
assumes 
a fixed buffer size. In this case, the consumer must wait if the buffer is empty, 
and the producer must wait if the buffer is full. 
Let's look more closely at how the bounded buffer can be used to enable 
processes to share memory. The following variables reside in a region of 
memory shared by the producer and consumer processes: 
#define BUFFER_SIZE 10 
typedef struct 
}item; 
item buffer[BUFFER_SIZE]; 
int in = 0; 
int out = 0; 
The shared buffer is implemented as a circular array with two logical 
pointers: in and out. The variable in points to the next free position in the 
buffer; out points to the first full position in the buffer. The buffer is empty 
when in== out; the buffer is full when ((in+ 1)% BUFFER_SIZE) == out. 
The code for the producer and consumer processes is shown in Figures 3.14 
and 3.15, respectively. The producer process has a local variable nextProduced 
in which the new item to be produced is stored. The consumer process has a 
local variable next Consumed in which the item to be consumed is stored. 
This scheme allows at most BUFFER_SIZE - 1 items in the buffer at the same 
time. We leave it as an exercise for you to provide a solution where BUFFER_SIZE 
items can be in the buffer at the same time. In Section 3.5.1, we illustrate the 
POSIX API for shared memory. 

3.4 
item nextProduced; 
while (true) { 
} 
I* produce an item in nextProduced *I 
while ( ((in + 1) % BUFFER_SIZE) == out) 
; I* do nothing *I 
buffer[in] = nextProduced; 
in = (in + 1) % BUFFER_SIZE; 
Figure 3.'14 The producer process. 

One issue this illustration does not address concerns the situation in which 
both the producer process and the consumer process attempt to access the 
shared buffer concurrently. In Chapter 6, we discuss how synchronization 
among cooperating processes can be implemented effectively in a shared-
memory environment. 
3.4.2 Message-Passing Systems 
lrt Section 3.4.1, we showed how cooperating processes can communicate in a 
shared-memory environment. The scheme requires that these processes share a 
region of memory and that the code for accessing and manipulating the shared 
memory be written explicitly by the application programmer. Another way to 
achieve the same effect is for the operating system to provide the means for 
cooperating processes to comm"Lmicate with each other via a message-passing 
facility. 
Message passing provides a mechanism to allow processes to communicate 
and to synchronize their actions without sharing the same address space and 
is particularly useful in a distributed environment, where the communicating 
processes may reside on different computers connected by a network. For 
example, a chat program used on the World Wide Web could be designed so 
that chat participants communicate with one another by exchanging messages. 
A message-passing facility provides at least two operations: send(message) 
and recei ve(message). Messages sent by a process can be of either fixed 
or variable size. If only fixed-sized messages can be sent, the system-level 
implementation is straightforward. This restriction, however, makes the task 
item nextConsumed; 
while (true) { 
} 
while (in == out) 
; II do nothing 
nextConsumed = buffer[out]; 
out = (out + 1) % BUFFER_SIZE; 
I* consume the item in nextConsumed *I 
Figure 3.15 The consumer process. 

Chapter 3 
of programming more difficult. Conversely, variable-sized messages require 
a 1nore complex system-level implementation, but the programming task 
becomes simpler. This is a COITlmon kind of tradeoff seen throughout operating-
system design. 
If processes P and Q want to communicate, they must send messages to and 
receive messages from each other; a communication link must exist between 
them. This link can be implemented in a variety of ways. We are concerned here 
not with the link's physical implementation (such as shared memory, hardware 
bus, or network, which are covered in Chapter 16) but rather with its logical 
implementation. Here are several methods for logically implementing a link 
and the send 0 I receive() operations: 
Direct or indirect communication 
Synchronous or asynchronous communication 
Automatic or explicit buffering 
We look at issues related to each of these features next. 
3.4.2.1 Naming 
Processes that want to communicate must have a way to refer to each other. 
They can use either direct or indirect communication. 
Under direct communication, each process that wants to comm"Lmicate 
must explicitly name the recipient or sender of the communication. In this 
scheme, the send() and receive() primitives are defined as: 
send(P, message) -Send a message to process P. 
receive (Q, message)-Receive a message from process Q. 
A communication link in this scheme has the following properties: 
A link is established automatically between every pair of processes that 
want to communicate. The processes need to know only each other's 
identity to communicate. 
A link is associated with exactly two processes. 
Between each pair of processes, there exists exactly one link. 
This scheme exhibits symmetry in addressing; that is, both the sender 
process and the receiver process must name the other to communicate. A 
variant of this scheme employs asymmetry in addressing. Here, only the sender 
names the recipient; the recipient is not required to name the sender. In this 
scheme, the send() and receive() primitives are defined as follows: 
send(P, message) -Send a message to process P. 
receive (id, message) -Receive a message from any process; the vari-
able id is set to the name of the process with which communication has 
taken place. 
The disadvantage in both of these schemes (symmetric and asymmetric) 
is the limited modularity of the resulting process definitions. Changing the 
identifier of a process may necessitate examining all other process definitions. 
All references to the old identifier must be found, so that they can be modified 

3.4 

to the new identifier. In general, any such hard-coding techniques, where 
identifiers must be explicitly stated, are less desirable than techniques involving 
indirection, as described next. 
With indirect communication, the messages are sent to and received from 
mailboxes, or ports. A mailbox can be viewed abstractly as an object into which 
messages can be placed by processes and from which messages can be removed. 
Each mailbox has a w1.ique identification. For example, POSIX message queues 
use an integer value to identify a mailbox. In this scheme, a process can 
communicate with some other process via a number of different mailboxes. 
Two processes can communicate only if the processes have a shared mailbox, 
however. The send() and receive 0 primitives are defined as follows: 
send (A, message) -Send a message to mailbox A. 
receive (A, message)-Receive a message from mailbox A. 
In this scheme, a communication link has the following properties: 
A link is established between a pair of processes only if both members of 
the pair have a shared mailbox. 
A link may be associated with more than two processes. 
Between each pair of communicating processes, there may be a number of 
different links, with each link corresponding to one mailbox. 
Now suppose that processes P1, P2, and P3 all share mailbox A. Process 
P1 sends a message to A, while both P2 and P3 execute a receive 0 from A. 
Which process will receive the message sent by P1? The answer depends on 
which of the following methods we choose: 
Allow a link to be associated with two processes at most. 
Allow at most one process at a time to execute a receive 0 operation. 
Allow the system to select arbitrarily which process will receive the 
message (that is, either P2 or P3, but not both, will receive the message). 
The system also may define an algorithm for selecting which process 
will receive the message (that is, round robin, where processes take turns 
receiving messages). The system may identify the receiver to the sender. 
A mailbox may be owned eith~r by a process or by the operating system. 
If the mailbox is owned by a process (that is, the mailbox is part of the address 
space of the process), then we distinguish between the owner (which can 
only receive messages through this mailbox) and the user (which can only 
send messages to the mailbox). Since each mailbox has a unique owner, there 
can be no confusion about which process should receive a message sent to 
this mailbox. When a process that owns a mailbox terminates, the mailbox 
disappears. Any process that subsequently sends a message to this mailbox 
must be notified that the mailbox no longer exists. 
In contrast, a mailbox that is owned by the operating system has an 
existence of its own. It is independent and is not attached to any particular 
process. The operating system then must provide a mechanism that allows a 
process to do the following: 

Chapter 3 
Create a new mailbox. 
Send and receive messages through the mailbox. 
Delete a mailbox. 
The process that creates a new mailbox is that mailbox's owner by default. 
Initially, the owner is the only process that can receive messages through this 
n:tailbox. However, the ownership and receiving privilege may be passed to 
other processes through appropriate system calls. Of course, this provision 
could result in multiple receivers for each mailbox. 
3.4.2.2 
Synchronization 
Communication between processes takes place through calls to send() and 
receive () primitives. There are different design options for implementing 
each primitive. Message passing may be either blocking or nonblocking-
also known as synchronous and asynchronous. 
Blocking send. The sending process is blocked until the message is 
received by the receiving process or by the mailbox. 
Nonblocking send. The sending process sends the message and resumes 
operation. 
Blocking receive. The receiver blocks until a message is available. 
Nonblocking receive. The receiver retrieves either a valid message or a 
null. 
Different combinations of send() and receive() are possible. When both 
send() and receive() are blocking, we have a rendezvous between the 
sender and the receiver. The solution to the producer-consumer problem 
becomes trivial when we use blocking send() and receive() statements. 
The producer merely invokes the blocking send() call and waits until the 
message is delivered to either the receiver or the mailbox. Likewise, when the 
consumer invokes receive(), it blocks until a message is available. 
Note that the concepts of synchronous and asynchronous occur frequently 
in operating-system I/0 algorithms, as you will see throughout this text. 
3.4.2.3 
Buffering 
Whether communication is direct or indirect, messages exchanged by commu-
nicating processes reside in a temporary queue. Basically, such queues can be 
implemented in three ways: 
Zero capacity. The queue has a maximum length of zero; thus, the link 
cannot have any messages waiting in it. In this case, the sender must block 
until the recipient receives the message. 
Bounded capacity. The que~ue has finite length n; thus, at most n messages 
can reside in it. If the queue is not full when a new message is sent, the 
message is placed in the queue (either the message is copied or a pointer 
to the message is kept), and the sender can continue execution without 

3.5 
3.5 

waiting. The link's capacity is finite, however. If the link is full, the sender 
must block until space is available in the queLie. 
Unbounded capacity. The queue's length is potentially infinite; thus, any 
number of messages can wait in it. The sender never blocks. 
The zero-capacity case is sometimes referred to as a message system with no 
buffering; the other cases are referred to as systems with automatic buffering. 
In this section, we explore three different IPC systems. We first cover the 
POSIX API for shared memory and then discuss message passing in the Mach 
operating system. We conclude with Windows XP, which interestingly uses 
shared memory as a mechanism for providing certain types of message passing. 
3.5.1 An Example: POSIX Shared Memory 
Several IPC mechanisms are available for POSIX systems, including shared 
memory and message passing. Here, we explore the POSIX API for shared 
memory. 
A process must first create a shared memory segment using the shmget () 
system call (shmget () is derived from SHared Memory GET). The following 
example illustrates the use of shmget (): 
segment_id = shmget (IPCPRIVATE, size, S_lRUSR I S_lWUSR) ; 
This first parameter specifies the key (or identifier) of the shared-memory 
segment. If this is set to IPCPRIVATE, a new shared-memory segment is created. 
The second parameter specifies the size (in bytes) of the shared-memory 
segment. Finally, the third parameter identifies the mode, which indicates 
how the shared-memory segment is to be used-that is, for reading, writing, 
or both. By setting the mode to S_lRUSR 
1 S_lWUSR, we are indicating that the 
owner may read or write to the shared-memory segment. A successful call to 
shmget () returns an integer identifier for the shared-memory segment. Other 
processes that want to use this region of shared memory must specify this 
identifier. 
Processes that wish to access a shared-memory segment must attach it to 
their address space using the shmat () (SHared Memory ATtach) system call. 
The call to shmat () expects three parameters as well. The first is the integer 
identifier of the shared-memory segment being attached, and the second is 
a pointer location in memory indicating where the shared ncemory will be 
attached. If we pass a value of NULL, the operating system selects the location 
on the user's behalf. The third parameter identifies a flag that allows the shared-
memory region to be attached in read-only or read-write mode; by passing a 
parameter of 0, we allow both reads and writes to the shared region. We attach 
a region of shared memory using shmat () as follows: 
shared_memory =(char*) shmat(id, NULL, 0); 
If successful, shmat () returns a pointer to the beginning location in memory 
where the shared-memory region has been attached. 

4.1 
CHAPTER 
The process model introduced in Chapter 3 assumed that a process was an 
executing program with a single thread of control. Most modern operating 
systems now provide features enabling a process to contain multiple threads of 
control. This chapter introduces many concepts associated with multithreaded 
computer systems, including a discussion of the APis for the Pthreads, Win32, 
and Java thread libraries. We look at many issues related to multithreaded 
programming and its effect on the design of operating systems. Finally, we 
explore how the Windows XP and Linux operating systems support threads at 
the kernel level. 
To introduce the notion of a thread- a fundamental unit of CPU utilization 
that forms the basis of multithreaded computer systems. 
To discuss the APis for the Pthreads, Win32, and Java thread libraries. 
To examine issues related to multithreaded programming. 
A thread is a basic unit of CPU utilization; it comprises a thread ID, a program 
counter, a register set, and a stack. It shares with other threads belonging 
to the same process its code section, data section, and other operating-system 
resources, such as open files and signals. A traditional (or heavrvveighl:) process 
has a single thread of control. If a process has multiple threads of control, it 
can perform more than one task at a time. Figure 4.1 illustrates the difference 
between a traditional 
process and a 
process. 
4.1.1 
Motivation 
Many software packages that run on modern desktop PCs are multithreaded. 
An application typically is implemented as a separate process with several 
threads of control. A Web browser might have one thread display images or 

Chapter 4 
thread--+ 
single-threaded process 
multithreaded process 
Figure 4.1 
Single-threaded and multithreaded processes. 
text while another thread retrieves data from the network, for example. A 
word processor may have a thread for displaying graphics, another thread 
for responding to keystrokes from the user, and a third thread for performing 
spelling and grammar checking in the background. 
In certain situations, a single application may be required to perform 
several similar tasks. For example, a Web server accepts client requests for 
Web pages, images, sound, and so forth. A busy Web server may have several 
(perhaps thousands of) clients concurrently accessing it. If the Web server ran 
as a traditional single-tlu·eaded process, it would be able to service only one 
client at a time, artd a client might have to wait a very long time for its request 
to be serviced. 
One solution is to have the server run as a single process that accepts 
requests. When the server receives a request, it creates a separate process 
to service that request. In fact, this process-creation method was in common 
use before threads became popular. Process creation is time consuming and 
resource intensive, however. If the new process will perform the same tasks as 
the existing process, why incur all that overhead? It is generally more efficient 
to use one process that contains multiple threads. If the Web-server process 
is multithreaded, the server will create a separate thread that listens for client 
requests. When a request is made, rather than creating another process, the 
server will create a new thread to service the request and resume listening for 
additional requests. This is illustrated in Figure 4.2. 
Threads also play a vital role in remote procedure call (RPC) systems. Recall 
from Chapter 3 that RPCs allow interprocess communication by providing a 
communication mechanism similar to ordinary function or procedure calls. 
Typically, RPC servers are multithreaded. When a server receives a message, it 
services the message using a separate thread. This allows the server to service 
several concurrent requests. 
Finally, most operating system kernels are now multithreaded; several 
threads operate in the kernel, and each thread performs a specific task, such 

client 
(1) request 
4.1 
(2) create new 
thread to service 
the request 
1-------•1 thread 
'------.--r---10 
server 
(3) resume listening 
for additional 
client requests 
Figure 4.2 Multithreaded server architecture. 

as managing devices or interrupt handling. For examplef Solaris creates a set 
of threads in the kernel specifically for interrupt handling; Linux uses a kernel 
thread for managing the amount of free memory in the system. 
4.1.2 Benefits 
The benefits of multithreaded programming can be broken down into four 
major categories: 
Responsiveness. Multithreading an interactive application may allow a 
program to continue running even if part of it is blocked or is performing 
a lengthy operation, thereby increasing responsiveness to the user. For 
instancef a multithreaded Web browser could allow user interaction in 
one thread while an image was being loaded in another thread. 
Resource sharing. Processes may only share resources through tech-
niques such as shared memory or message passing. Such techniques must 
be explicitly arranged by the programmer. However, threads share the 
memory and the resources of the process to which they belong by default. 
The benefit of sharing code and data is that it allows an application to 
have several different threads of activity within the same address space. 
3. Economy. Allocating memory and resources for process creation is costly. 
Because threads share the resources of the process to which they belong, 
it is more economical to create and context-switch threads. Empirically 
gauging the difference in overhead can be difficult, but in general it is 
much more time consuming to create and manage processes than threads. 
In Solarisf for example, creating a process is about thirty times slower than 
is creating a thread, and context switching is about five times slower. 
Scalability. The benefits of multithreading can be greatly increased in a 
multiprocessor architecture, where threads may be running in parallel 
on different processors. A single-threaded process can only run on one 
processor, regardless how many are available. Multithreading on a multi-
CPU machine increases parallelism. We explore this issue further in the 
following section. 

Chapter 4 
time 
Figure 4.3 Concurrent execution on a single-core system. 
4.1.3 Multicore Programming 
A recent trend in system design has been to place multiple computing cores on 
a single chip, where each core appears as a separate processor to the operating 
system (Section 1.3.2). Multithreaded programming provides a mechanism 
for more efficient use of multiple cores and improved concurrency. Consider 
an application with four threads. On a system with a single computing core, 
concurrency merely means that the execution of the threads will be interleaved 
over time (Figure 4.3), as the processing core is capable of executing only one 
thread at a time. On a system with multiple cores, however, concurrency means 
that the threads can run in parallel, as the system can assign a separate thread 
to each core (Figure 4.4). 
The trend towards multicore systems has placed pressure on system 
designers as well as application programmers to make better use of the multiple 
computing cores. Designers of operating systems must write scheduling 
algorithms that use multiple processing cores to allow the parallel execution 
shown in Figure 4.4. For application programmers, the challenge is to modify 
existing programs as well as design new programs that are multithreaded to 
take advantage of multicore systems. In general, five areas present challenges 
in programming for multicore systems: 
Dividing activities. This involves examining applications to find areas 
that can be divided into separate, concurrent tasks and thus can run in 
parallel on individual cores. 
Balance. While identifying tasks that can run in parallel, programmers 
must also ensure that the tasks perform equal work of equal value. In 
some instances, a certain task may not contribute as much value to the 
overall process as other tasks; using a separate execution core to run that 
task may not be worth the cost. 
Data splitting. Just as applications are divided into separate tasks, the 
data accessed and manipulated by the tasks must be divided to run on 
separate cores. 
core 1 l<T1 I T3 
T1 
T3 I 
Ti 
core 2 [i] T4 
T2 
T4 I 
Tz 
time 
Figure 4.4 Parallel execution on a multicore system. 

4.2 
4.2 

Data dependency. The data accessed by the tasks must be examined 
for dependencies between two or more tasks. In instances where one 
task depends on data from another, programmers must ensure that 
the execution of the tasks is synchronized to accommodate the data 
dependency. We examine such strategies in Chapter 6. 
Testing and debugging. When a program is running in parallel on 
multiple cores, there are many different execution paths. Testing and 
debugging such concurrent programs is inherently more difficult than 
testing and debugging single-threaded applications. 
Because of these challenges, many software developers argue that the advent of 
multicore systems will require an entirely new approach to designing software 
systems in the future. 
Our discussion so far has treated threads in a generic sense. However, support 
for threads may be provided either at the user level, for 
or by the 
kernel, for 
threads. User threads are supported above the kernel and 
are managed without kernel support, whereas kernel threads are supported 
and managed directly by the operating system. Virtually all contemporary 
operating systems-including Wiridows XP, Linux, Mac OS X, Solaris, and 
Tru64 UNIX (formerly Digital UNIX)-support kernel threads. 
Ultimately, a relationship must exist between user threads and kernel 
threads. In this section, we look at three common ways of establishing such a 
relationship. 
4.2.1 
Many-to-One Model 
The many-to-one model (Figure 4.5) maps many user-level threads to one 
kernel thread. Thread management is done by the thread library in user 
Figure 4.5 Many-to-one model. 

Chapter 4 
-
user thread 
Figure 4.6 One-to-one model. 
space, so it is efficient; but the entire process will block if a thread makes a 
blocking system call. Also, because only one thread can access the kernel at a 
time, multiple threads are unable to nm in parallel on multiprocessors. 
-a thread library available for Solaris-uses this modet as does GNU 
4.2.2 One-to-One Model 
The one-to-one model (Figure 4.6) maps each user thread to a kernel thread. It 
provides more concurrency than the many-to-one model by allowing another 
thread to run when a thread makes a blocking system call; it also allows 
multiple threads to run in parallel on multiprocessors. The only drawback to 
this model is that creating a user thread requires creating the corresponding 
kernel thread. Because the overhead of creating kernel threads can burden the 
performance of an application, most implementations of this model restrict the 
number of threads supported by the system. Linux, along with the family of 
Windows operating systems, implement the one-to-one model. 
4.2.3 Many-to-Many Model 
The many-to-many model (Figure 4.7) multiplexes many user-level threads to 
a smaller or equal number of kernel threads. The number of kernel threads 
may be specific to either a particular application or a particular machine (an 
application may be allocated more kernel threads on a multiprocessor than 
on a uniprocessor). Whereas the many-to-one model allows the developer to 
user thread 
k 
+--- kernel thread 
Figure 4.7 Many-to-many model. 

4.3 
4.3 

::., 
( 
I 
~ 
( 
( 
/ 
' 
' 
/ 
( 
') 
......._ user thread 
( 
( 
( 
0 -kernel thread 
Figure 4.8 Two-level model. 
create as many user threads as she wishes, true concurrency is not gained 
because the kernel can schedule only one thread at a time. The one-to-one 
model allows for greater concurrency, but the developer has to be careful not 
to create too many threads within an application (and in some instances may 
be limited in the number of threads she can create). The many-to-many model 
suffers from neither of these shortcomings: developers can create as many user 
threads as necessary, and the corresponding kernel threads can run in parallel 
on a multiprocessor. Also, when a thread performs a blocking system call, the 
kernel can schedule another thread for execution. 
One popular variation on the many-to-many model still multiplexes many 
user-level threads to a smaller or equal number of kernel threads but also allows 
a user-level thread to be bound to a kernel thread. This variation, sometimes 
referred to as the two-level model (Figure 4.8), is supported by operating systems 
such as IRlX, HP-UX, and Tru64 UNIX. The Solaris operating system supported 
the two-level model in versions older than Solaris 9. However, beginning with 
Solaris 9, this system uses the one-to-one model. 
A 
provides the programmer with an API for creating and 
managing threads. There are two primary ways of implementii<g a thread 
library. The first approach is to provide a library entirely in user space with no 
kernel support. All code and data structures for the library exist ii< user space. 
This means that invoking a function in the library results in a local function 
call in user space and not a system call. 
The second approach is to implement a kernel-level library supported 
directly by the operating system. In this case, code and data structures for 
the library exist in kernel space. Invoking a function in the API for the library 
typically results in a system call to the kernel. 
Three main thread libraries are in use today: (1) POSIX Pthreads, (2) Win32, 
and (3) Java. Pthreads, the threads extension of the POSIX standard, may be 
provided as either a user- or kernel-level library. The Win32 thread library 
is a kernel-level library available on Windows systems. The Java thread API 
allows threads to be created and managed directly in Java programs. However, 
because in most instances the JVM is running on top of a host operating system, 

Chapter 4 
the Java thread API is generally implemented using a thread library available 
on the host system. This means that on Windows systems, Java threads are 
typically implemented using the Win32 API; UNIX and Linux systems often use 
Pthreads. 
In the remainder of this section, we describe basic thread creation using 
these three thread libraries. As an illustrative example, we design a multi-
threaded program that performs the summation of a non-negative integer in a 
separate thread using the well-known summation function: 
N 
sum= I~> 
i=O 
For example, if N were 5, this function would represent the summation of 
integers from 0 to 5, which is 15. Each of the three programs will be n.m with 
the upper bounds of the summation entered on the command line; thus, if the 
user enters 8, the summation of the integer values from 0 to 8 will be output. 
4.3.1 Pthreads 
refers to the POSIX standard (IEEE 1003.lc) defining an API for thread 
creation and synchronization. This is a specification for thread behavim~ not an 
implementation. Operating system designers may implement the specification in 
any way they wish. Numerous systems implement the Pthreads specification, 
including Solaris, Linux, Mac OS X, and Tru64 UNIX. Shareware implementations 
are available in the public domain for the various Windows operating systems 
as well. 
The C program shown in Figure 4.9 demonstrates the basic Pthreads API for 
constructing a multithreaded program that calculates the summation of a non-
negative integer in a separate thread. In a Pthreads program, separate threads 
begin execution in a specified function. In Figure 4.9, this is the runner() 
function. When this program begins, a single thread of control begins in 
main (). After some initialization, main () creates a second thread that begins 
control in the runner () function. Both threads share the global data sum. 
Let's look more closely at this program. All Pthreads programs must 
include the pthread. h header file. The statement pthread_t tid declares 
the identifier for the thread we will create. Each thread has a set of attributes, 
including stack size and scheduling information. The pthread_attr_t attr 
declaration represents the attributes for the thread. We set the attributes in the 
function call pthread_attr _ini t (&attr). Because we did not explicitly set 
any attributes, we use the default attributes provided. (In Chapter 5, we discuss 
some of the scheduling attributes provided by the Pthreads API.) A separate 
thread is created with the pthread_create () function call. In addition to 
passirtg the thread identifier and the attributes for the thread, we also pass the 
name of the function where the new thread will begin execution-in this case, 
the runner () function. Last, we pass the integer parameter that was provided 
on the command line, argv [1]. 
At this point, the program has two threads: the initial (or parent) thread 
in main() and the summation (or child) thread performing the summation 

4.3 
#include <pthread.h> 
#include <stdio.h> 
int sum; I* this data is shared by the thread(s) *I 
void *runner(void *param); I* the thread *I 
int main(int argc, char *argv[]) 
{ 
} 
pthread_t tid; I* the thread identifier *I 
pthread_attr_t attr; I* set of thread attributes *I 
if (argc != 2) { 
} 
fprintf(stderr,"usage: a.out <integer value>\n"); 
return -1; 
if (atoi(argv[1]) < 0) { 
} 
fprintf(stderr,"%d must be>= 0\n",atoi(argv[1])); 
return -1; 
I* get the default attributes *I 
pthread_attr_init(&attr); 
I* create the thread *I 
pthread_create(&tid,&attr,runner,argv[1]); 
I* wait for the thread to exit *I 
pthread_join(tid,NULL); 
printf("sum = %d\n",sum); 
I* The thread will begin control in this function *I 
void *runner(void *param) 
{ 
} 
inti, upper= atoi(param); 
sum = 0; 
for (i = 1; i <= upper; i++) 
sum += i; 
pthread_exi t ( 0) ; 
Figure 4.9 Multithreaded C program using the Pthreads API. 

operation in the runner() function. After creating the summation threadf 
the parent thread will wait for it to complete by calling the pthread_j oin () 
function. The summation thread will complete when it calls the function 
pthread_exi t (). Once the summation thread has returnedf the parent thread 
will output the value of the shared data sum. 

Chapter 4 
4.3.2 Win32 Threads 
The technique for creating threads using the Win32 thread library is similar 
to the Pthreads technique in several ways. We illustrate the Win32 thread 
API in the C program shown in Figure 4.10. Notice that we must include the 
windows . h header file when using the Win32 API. 
Just as in the Pthreads version shown in Figure 4.9, data shared by the 
separate threads-in this case, Sum-are declared globally (the DWORD data 
type is an unsigned 32-bit integer). We also define the Summation() function 
that is to be performed in a separate thread. This function is passed a pointer to 
a void, which Win32 defines as LPVOID. The thread performing this function 
sets the global data Sum to the value of the summation from 0 to the parameter 
passed to Summation() . 
Threads are created in the Win32 API using the CreateThread () function, 
and-just as in Pthreads-a set of attributes for the thread is passed to this 
function. These attributes il1.clude security information, the size of the stack, 
and a flag that can be set to indicate if the thread is to start in a suspended 
state. In this program, we use the default values for these attributes (which do 
not initially set the thread to a suspended state and instead make it eligible 
to be rm1. by the CPU scheduler). Once the summation thread is created, the 
parent must wait for it to complete before outputting the value of Sum, as 
the value is set by the summation thread. Recall that the Pthread program 
(Figure 4.9) had the parent thread wait for the summation thread using the 
pthread_j oin () statement. We perform the equivalent of this in the Win32 API 
using the Wai tForSingleObj ect ()function, which causes the creatil1.gthread 
to block until the summation thread has exited. (We cover synchronization 
objects in more detail in Chapter 6.) 
4.3.3 Java Threads 
Tlu·eads are the fundamental model of program execution in a Java program, 
and the Java language and its API provide a rich set of features for the creation 
and management of threads. All Java programs comprise at least a single thread 
of control-even a simple Java program consisting of only a main() method 
runs as a single thread in the JVM. 
There are two teclmiques for creating threads in a Java program. One 
approach is to create a new class that is derived from the Thread class and 
to override its run() method. An alternative-and more commonly used-
teclmique is to define a class that implements the Runnable interface. The 
Runnable interface is defined as follows: 
public interface Runnable 
{ 
public abstract void run(); 
When a class implements Runnable, it must define a run() method. The code 
implementing the run() method is what runs as a separate thread. 
Figure 4.11 shows the Java version of a multithreaded program that 
determines the summation of a non-negative integer. The Summation class 
implements the Runnable interface. Thread creation is performed by creating 

4.3 
#include <Windows.h> 
#include <stdio.h> 
DWORD Sum; I* data is shared by the thread(s) *I 
I* the thread runs in this separate function *I 
DWORD WINAPI Sumrnation(LPVOID Param) 
{ 
} 
DWORD Upper = *(DWORD*)Param; 
for (DWORD i = 0; i <= Upper; i++) 
Sum += i; 
return 0; 
int main(int argc, char *argv[]) 
{ 
} 
DWORD Threadid; 
HANDLE ThreadHandle; 
int Param; 
I* perform some basic error checking *I 
if (argc != 2) { 
} 
fprintf(stderr,"An integer parameter is required\n"); 
return -1; 
Param = atoi(argv[1]); 
if (Param < 0) { 
} 
fprintf(stderr,"An integer>= 0 is required\n"); 
return -1; 
II create the thread 
ThreadHandle = CreateThread( 
NULL, II default security attributes 
0, II default stack size 
Summation, II thread function 
&Param, II parameter to thread function 
0, II default creation flags 
&Threadid); II returns the thread identifier 
if (ThreadHandle != NULL) { 
} 
II now wait for the thread to finish 
WaitForSingleObject(ThreadHandle,INFINITE); 
II close the thread handle 
CloseHandle(ThreadHandle); 
printf("surn = %d\n" ,Sum); 
Figure 4.10 Multithreaded C program using the Win32 API. 

Chapter 4 
class Sum 
{ 
} 
private int sum; 
public int getSum() { 
return sum; 
} 
public void setSum(int sum) { 
this.sum 
sum; 
} 
class Summation implements Runnable 
{ 
} 
private int upper; 
private Sum sumValue; 
public Summation(int upper, Sum sumValue) { 
this.upper = upper; 
this.sumValue = sumValue; 
} 
public void run() { 
int sum = 0; 
} 
for (int i = 0; i <= upper; i++) 
sum += i; 
sumValue.setSum(sum); 
public class Driver 
{ 
} 
public static void main(String[] args) { 
if (args.length > 0) { 
} 
if (Integer.parseint(args[O]) < 0) 
System.err.println(args[O] + "must be>= 0."); 
else { 
II create the object to be shared 
Sum sumObject = new Sum(); 
int upper= Integer.parseint(args[O]); 
Thread thrd =new Thread(new Summation(upper, sumObject)); 
thrd.start(); 
try { 
thrd. join () ; 
System.out.println 
("The sum of "+upper+" is "+sumObject.getSum()); 
} catch (InterruptedException ie) { } 
} 
else 
System.err.println("Usage: Summation <integer value>"); } 
Figure 4.11 
Java program for the summation of a non-negative integer. 

4.4 
4.4 

an object instance of the Thread class and passing the constructor a Runnable 
object. 
Creating a Thread object does not specifically create the new thread; rather, 
it is the start() method that creates the new thread. Calling the start() 
method for the new object does two things: 
It allocates memory and initializes a new thread in the JVM. 
It calls the run() method, making the thread eligible to be run by the 
JVM. (Note that we never call the run() method directly. Rathel~ we call 
the start() method, and it calls the run() method on our behalf.) 
When the summation program runs, two threads are created by the JVM. 
The first is the parent thread, which starts execution in the main () method. 
The second thread is created when the start() method on the Thread object 
is invoked. This child thread begins execution in the run () method of the 
Summation class. After outputting the value of the summation, this thread 
terminates when it exits from its run() method. 
Sharing of data between threads occurs easily in Win32 and Pthreads, since 
shared data are simply declared globally. As a pure object-oriented language, 
Java has no such notion of global data; if two or more threads are to share 
data in a Java program, the sharing occurs by passing references to the shared 
object to the appropriate threads. In. the Java program shown in Figure 4.11, 
the main thread and the summation thread share the object instance of the Sum 
class. This shared object is referenced through the appropriate get Sum () and 
setSum() methods. (You might wonder why we don't use an Integer object 
rather than designing a new sum class. The reason is that the Integer class is 
immutable-that is, once its value is set, it cannot change.) 
Recall that the parent threads in the Pthreads and Win32 libraries use 
pthread_j oin () and Wai tForSingleDbj ect () (respectively) to wait for 
the summation threads to finish before proceeding. The join() method 
in Java provides similar functionality. (Notice that join() can throw an 
InterruptedException, which we choose to ignore.) 
In this section, we discuss some of the issues to consider with multithreaded 
programs. 
4.4.1 The fork() and exec() System Calls 
In Chapter 3, we described how the fork() system call is used to create a 
separate, duplicate process. The semantics of the fork() and exec() system 
calls change in a multithreaded program. 
If one thread in a program calls fork(), does the new process duplicate 
all threads, or is the new process single-threaded? Some UNIX systems have 
chosen to have two versions of fork(), one that duplicates all threads and 
another that duplicates only the thread that invoked the fork() system call. 
The exec() system call typically works in the same way as described 
in Chapter 3. That is, if a thread invokes the exec() system call, the program 

Chapter 4 
The JVM and the Host Operating System 
The JVM is typically implemented on top of a host operating system (see 
Figure 2.20). This setup allows the JVM to hide the implementation details 
of the underlying operating system and to provide a consistent, abstract 
environment that allows Java programs to operate on any platform that 
supports a JVM. The specification for the JVM does not indicate how Java 
threads are to be mapped to the underlying operating system, instead leaving 
that decision to the particular implementation of the JVM. For example, the 
Windows XP operating system uses the one-to-one model; therefore, each 
Java thread for a JVM running on such a. system maps to .a kernel thread: On 
operating systems that use the many-to-many model (such as Tru64 UNIX), a 
Java thread is mapped according to the many-to-manymodel. Solaris initially 
implemented the JVM using themany~to-one model (the greenthreads library, 
mentioned earlier). Later releases of the JVM were implementedusing the 
many-to-:inany model. Beginning with Solaris 9, Java threads were mapped 
using the one~ to-one model. In addition, there may be a relationship between 
the Java thread library and the thread library on the host operating system. 
For .example, implementations of a JVM for the Windows family of operating 
systems might use the Win32 API when creating Java threads; Linux, Solaris, 
and Mac OS X systems might use the Pthreads API. 
specified in the parameter to exec () will replace the entire process-including 
all threads. 
Which of the two versions of fork() to use depends on the application. 
If exec() is called immediately after forking, then duplicating all threads is 
unnecessary, as the program specified in the parameters to exec() will replace 
the process. In this instance, duplicating only the calling thread is appropriate. 
If, however, the separate process does not call exec () after forking, the separate 
process should duplicate all threads. 
4.4.2 Cancellation 
""·"'''-'C'"''"·""'"" is the task of terminating a thread before it has completed. 
For example, if multiple threads are concurrently searching through a database 
and one thread returns the result, the remaining threads might be canceled. 
Another situation might occur when a user presses a button on a Web browser 
that stops a Web page from loading any further. Often, a Web page is loaded 
using several threads-each image is loaded in a separate thread. When a 
user presses the stop button on the browser, all threads loading the page are 
canceled. 
A thread that is to be canceled is often referred to as the 
Cancellation of a target thread may occur in two different scenarios: 
Asynchronous cancellation. One thread immediately terminates the 
target thread. 

4.4 

Deferred cancellation. The target thread periodically checks whether it 
should terminate, allowing it an opportunity to terminate itself in an 
orderly fashion. 
The difficulty with cancellation occurs in situations where resources have 
been allocated to a canceled thread or where a thread is canceled while in 
the midst of updating data it is sharing with other threads. This becomes 
especially troublesome with asynchronous cancellation. Often, the operating 
system will reclaim system resources from a canceled thread but will not 
reclaim all resources. Therefore, canceling a thread asynchronously may not 
free a necessary system-wide resource. 
With deferred cancellation, in contrast, one thread indicates that a target 
thread is to be canceled, but cancellation occurs only after the target thread has 
checked a flag to determine whether or not it should be canceled. The thread 
can perform this check at a 
at which it can be canceled safely. Pthreads 
refers to such points as 
4.4.3 Signal Handling 
A 
is used in UNIX systems to notify a process that a particular event has 
occurred. A signal may be received either synchronously or asynchronously, 
depending on the source of and the reason for the event being signaled. All 
signals, whether synchronous or asynchronous, follow the same pattern: 
A signal is generated by the occurrence of a particular event. 
A generated signal is delivered to a process. 
Once delivered, the signal must be handled. 
Examples of synchronous signals include illegal memory access and 
division by 0. If a running program performs either of these actions, a signal 
is generated. Synchronous signals are delivered to the same process that 
performed the operation that caused the signal (that is the reason they are 
considered synchronous). 
When a signal is generated by an event external to a running process, that 
process receives the signal asynchronously. Examples of such signals include 
terminating a process with specific keystrokes (such as <control> <C>) and 
having a timer expire. Typically, an asynchronous signal is sent to another 
process. 
A signal may be handled by one of two possible handlers: 
A default signal handler 
A user-defilced signal handler 
Every signal has a 
that is run by the kernel when 
handling that signal. This default action can be overridden by a 
signal handle~ that is called to handle the signal. Signals are handled in 
different ways. Some signals (such as changing the size of a window) are 
simply ignored; others (such as an illegal memory access) are handled by 
terminating the program. 

Chapter 4 
Handling signals in single-threaded programs is straightforward: signals 
are always delivered to a process. However, delivering signals is more 
complicated in multithreaded programs, where a process may have several 
threads. Where, then, should a signal be delivered? 
In generat the following options exist: 
Deliver the signal to the thread to which the signal applies. 
Deliver the signal to every thread in the process. 
Deliver the signal to certain threads in the process. 
Assign a specific thread to receive all signals for the process. 
The method for delivering a signal depends on the type of signal generated. 
For example, synchronous signals need to be delivered to the thread causing 
the signal and not to other threads in the process. However, the situation with 
asynchronous signals is not as clear. Some asynchronous signals-such as a 
signal that terminates a process ( <control><C>, for example)-should be 
sent to all threads. 
Most multithreaded versions of UNIX allow a thread to specify which 
signals it will accept and which it will block. Therefore, in some cases, an 
asynchronous signal may be delivered only to those threads that are not 
blocking it. However, because signals need to be handled only once, a signal 
is typically delivered only to the first thread found that is not blocking it. 
The standard UNIX function for delivering a signal is kill (pid_t pid, int 
signal), which specifies the process (pi d) to which a particular signal is to be 
delivered. POSIX Pthreads provides the pthread_kill (pthread_t tid, int 
signal) function, which allows a signal to be delivered to a specified thread 
(tid). 
Although Windows does not explicitly 
support for signals, they 
can be emulated using 
(APCs). The APC facility 
allows a user thread to specify a function that is to be called when the user 
thread receives notification of a particular event. As indicated by its name, 
an APC is roughly equivalent to an asynchronous signal in UNIX. However, 
whereas UNIX must contend with how to deal with signals in a multithreaded 
environment, the APC facility is more straightforward, since an APC is delivered 
to a particular thread rather than a process. 
4.4.4 Thread Pools 
In Section 4.1, we mentioned multithreading in a Web server. In this situation, 
whenever the server receives a request, it creates a separate thread to service 
the request. Whereas creating a separate thread is certainly superior to creating 
a separate process, a multithreaded server nonetheless has potential problems. 
The first issue concerns the amount of time required to create the thread prior 
to servicing the request, together with the fact that this thread will be discarded 
once it has completed its work. The second issue is more troublesome: if we 
allow all concurrent requests to be serviced in a new thread, we have not placed 
a bound on the number of threads concurrently active in the system. Unlimited 
threads could exhaust system resources, such as CPU tince or memory. One 
solution to this problem is to use a 

4.4 

The general idea beh_ind a thread pool is to create a number of threads at 
process startup and place them into a pool, where they sit and wait for work. 
When a server receives a request, it awakens a thread from this pool-if one 
is available-and passes it the request for service. Once the thread completes 
its service, it returns to the pool and awaits more work. If the pool contains no 
available thread, the server waits until one becomes free. 
Thread pools offer these benefits: 
Servicing a request with an existing thread is usually faster than waiting 
to create a thread. 
A thread pool limits the number of threads that exist at any one point. 
This is particularly important on systems that cannot support a large 
number of concurrent threads. 
The number of threads in the pool can be set heuristically based on factors 
such as the number of CPUs in the system, the amount of physical memory, 
and the expected number of concurrent client requests. More sophisticated 
thread-pool architectures can dynamically adjust the number of threads in the 
pool according to usage patterns. Such architectures provide the further benefit 
of having a smaller pool-thereby consuming less memory-when the load 
on the system is low. 
The Win32 API provides several functions related to thread pools. Using 
the thread pool API is similar to creating a thread with the Thread Create() 
function, as described in Section 4.3.2. Here, a function that is to run as a 
separate thread is defin_ed. Such a function may appear as follows: 
DWORD WINAPI PoolFunction(AVOID Param) 
/** 
* this function runs as a separate thread. 
**/ 
A pointer to PoolFunction() is passed to one of the functions in the thread 
pool API, and a thread from the pool executes this function. One such member 
in the thread pool API is the QueueUserWorkitemO function, which is passed 
three paranceters: 
LPTHREAD_STARLROUTINE Function-a pointer to the function that is to 
nm as a separate thread 
PVOID Param-the parameter passed to Function 
ULONG Flags-flags indicating how the thread pool is to create and 
manage execution of the thread 
An example of invoking a function is: 
QueueUserWorkitem(&PoolFunction, NULL, 0); 
This causes a thread from the thread pool to invoke PoolFunction() 
on behalf of the programmer. In this instance, we pass no parameters to 

Chapter 4 
-
lightweight process 
'-----'-'-----" 
d0~ 
kamalthcead 
Figure 4.12 Lightweight process (LWP). 
PoolFunction(). Because we specify 0 as a flag, we provide the thread pool 
with no special instructions for thread creation. 
Other members in the Win32 thread pool API include utilities that invoke 
functions at periodic intervals or when an asynchronous I/0 request completes. 
The java. util. concurrent package in Java 1.5 provides a thread pool utility 
as welL 
4.4.5 Thread-Specific Data 
Threads belonging to a process share the data of the process. Indeed, this 
sharing of data provides one of the benefits of multithreaded programming. 
However, in some circumstances, each thread 
need its own copy of 
certain data. We will call such data 
For example, in a 
transaction-processing system, we might service each transaction in a separate 
thread. Furthermore, each transaction might be assigned a unique identifier. To 
associate each thread with its unique identifier, we could use thread-specific 
data. Most thread libraries-including Win32 and Pthreads-provide some 
form of support for thread-specific data. Java provides support as well. 
4.4.6 Scheduler Activations 
A final issue to be considered with multithreaded programs concerns com-
munication between the kernel and the thread library, which may be required 
by the many-to-many and two-level models discussed in Section 4.2.3. Such 
coordination allows the number of kernel threads to be dynamically adjusted 
to help ensure the best performance. 
Many systems implementing either the many-to-many or the two-level 
model place an intermediate data structure between the user and kernel 
threads. This data structure-typically known as a lightweight process, or 
LWP-is shown in Figure 4.12. To the user-thread library, the LWP appears to 
be a virtual processor on which the application can schedule a user thread to 
run. Each LWP is attached to a kernel thread, and it is kernel threads that the 
operating system schedules to run on physical processors. If a kernel thread 
blocks (such as while waiting for an I/0 operation to complete), the LWP blocks 
as well. Up the chain, the user-level thread attached to the LWP also blocks. 
An application may require any number of LWPs to run efficiently. Consider 
a CPU-bound application running on a single processor. In this scenario, only 

4.5 
4.5 

one thread can run at once, so one LWP is sufficient. An application that is I/O-
intensive may require multiple LWPs to execute, however. Typically, an LWP is 
required for each concurrent blocking system call. Suppose, for example, that 
five different file-read requests occur simultaneously. Five LWPs are needed, 
because all could be waiting for I/0 completion in the kernel. If a process has 
only four LWPs, then the fifth request must wait for one of the LWPs to return 
from the kernel. 
One scheme for communication between the user-thread library and the 
kernel is known as 
It works as follows: The kernel 
provides an application with a set of virtual processors (LWPs), and the 
application can schedule user threads onto an available virtual processor. 
Furthermore, the kernel must inform an application about certain events. This 
procedure is known as an 
Upcalls are handled by the thread library 
with an 
and upcall handlers must run on a virtual processor. 
One event that triggers an upcall occurs when an application thread is about to 
block. In this scenario, the kernel makes an upcall to the application informing 
it that a thread is about to block and identifying the specific thread. The kernel 
then allocates a new virtual processor to the application. The application runs 
an upcall handler on this new virtual processor, which saves the state of the 
blocking thread and relinquishes the virtual processor on which the blocking 
thread is running. The upcall handler then schedules another thread that is 
eligible to run on the new virtual processor. When the event that the blocking 
thread was waiting for occurs, the kernel makes another upcall to the thread 
library informilcg it that the previously blocked thread is now eligible to run. 
The up call handler for this event also requires a virtual processor, and the kernel 
may allocate a new virtual processor or preempt one of the user threads and 
run the upcall handler on its virtual processor. After marking the 1-mblocked 
thread as eligible to run, the application schedules an eligible thread to run on 
an available virtual processor. 
In this section, we explore how threads are implemented in Windows XP and 
Linux systems. 
4.5.1 Windows XP Threads 
Windows XP implements the Win32 API, which is the primary API for the 
family of Microsoft operating systems (Windows 95, 98, NT, 2000, and XP). 
Indeed, much of what is mentioned in this section applies to this entire family 
of operating systems. 
A Windows XP application runs as a separate process, and each process 
may contain one or more threads. The Win32 API for creating threads is 
covered in Section 4.3.2. Windows XP uses the one-to-one mapping described 
in Section 4.2.2, where each user-level thread maps to an associated kernel 
thread. However, Windows XP also provides support for a 
library, which 
provides the functionality of the many-to-many model (Section 4.2.3). By using 
the thread library, any thread belonging to a process can access the address 
space of the process. 

5.1 
CPU scheduling is the basis of multiprogrammed operating systems. By 
switching the CPU among processes, the operating system can make the 
computer more productive. In this chapter, we introduce basic CPU-scheduling 
concepts and present several CPU-scheduling algorithms. We also consider the 
problem of selecting an algorithm for a particular system. 
In Chapter 4, we introduced threads to the process model. On operating 
systems that support them., it is kernel-level threads-not processes-that are 
in fact being scheduled by the operating system. However, the terms process 
scheduling and thread scheduling are often used interchangeably. In this 
chapter, we use process scheduling when discussing general scheduling concepts 
and thread scheduling to refer to thread-specific ideas. 
To introduce CPU scheduling, which is the basis for multiprogrammed 
operating systems. 
To describe various CPU-scheduling algorithms. 
To discuss evaluation criteria for selecting a CPU-scheduling algorithm for 
a particular system. 
In a single-processor system, only one process can run at a time; any others 
must wait until the CPU is free and can be rescheduled. The objective of 
multiprogramming is to have some process rum1ing at all times, to maximize 
CPU utilization. The idea is relatively simple. A process is executed until 
it must wait, typically for the completion of some I/O request. In a simple 
computer system, the CPU then just sits idle. All this waiting time is wasted; 
no useful work is accomplished. With multiprogramming, we try to use this 
time productively. Several processes are kept in memory at one time. When 
one process has to wait, the operating system takes the CPU away from that 

Chapter 5 
load store 
add store 
read from file 
wait for 110 
store increment 
index 
write to file 
wait for 1/0 
load store 
add store 
read from file 
[ 
Wait.tor;l/0 
CPU burst 
1/0 burst 
CPU burst 
1/0 burst 
CPU burst 
1/0 burst 
Figure 5.i Alternating sequence of CPU and 1/0 bursts. 
process and gives the CPU to another process. This pattern continues. Every 
time one process has to wait, another process can take over use of the CPU. 
Scheduling of this kind is a fundamental operating-system function. 
Almost all computer resources are scheduled before use. The CPU is, of course, 
one of the primary computer resources. Thus, its scheduling is central to 
operating-system design. 
5.1.1 CPU-i/O Burst Cycle 
The success of CPU scheduling depends on an observed property of processes: 
process execution consists of a cycle of CPU execution and I/0 wait. Processes 
alternate between these two states. Process execution begins with a CPU burst. 
That is followed by an I/O burst, which is followed by another CPU burst, then 
another I/0 burst, and so on. Eventually, the final CPU burst ends with a system 
request to terminate execution (Figure 5.1). 
The durations of CPU bursts have been measured extensively. Although 
they vary greatly from process to process and from computer to compute1~ 
they tend to have a frequency curve similar to that shown in Figure 5.2. The 
curve is generally characterized as exponential or hyperexponential, with a 
large number of short CPU bursts and a small number of long CPU bursts. 
An I/O-bound program typically has many short CPU bursts. A CPU-bound 

5.1 

>- 100 
0 c 
aJ 
:::l 
u 

~ 

burst duration (milliseconds) 
Figure 5.2 Histogram of CPU-burst durations. 
program might have a few long CPU bursts. This distribution can be important 
in the selection of an appropriate CPU-scheduling algorithm. 
5.1.2 CPU Scheduler 
Whenever the CPU becomes idle, the operating system must select one of the 
processes in the ready queue to be executed. The selection process is carried 
out by the short-term scheduler (or CPU scheduler). The scheduler selects a 
process from the processes in memory that are ready to execute and allocates 
the CPU to that process. 
Note that the ready queue is not necessarily a first-in, first-out (FIFO) queue. 
As we shall see when we consider the various scheduling algorithms, a ready 
queue can be implen<ented as a FIFO queue, a priority queue, a tree, or sirnply 
an unordered linked list. Conceptually, howeve1~ all the processes in the ready 
queue are lined up waiting for a chance to run on the CPU. The records in the 
queues are generally process control blocks (PCBs) of the processes. 
5.1.3 Preemptive Scheduling 
CPU-scheduling decisions may take place under the following four circum-
stances: 
When a process switches from the running state to the waiting state (for 
example, as the result of an I/0 request or an invocation of wait for the 
termination of one of the child processes) 
When a process switches from the numing state to the ready state (for 
example, when an interrupt occurs) 

Chapter 5 
When a process switches from the waiting state to the ready state (for 
example, at completion of I/0) 
When a process terminates 
For situations 1 and 4, there is no choice in terms of scheduling. A new process 
(if one exists in the ready queue) must be selected for execution. There is a 
choice, however, for situations 2 and 3. 
When scheduling takes place only under circumstances 1 and 4, we say 
that the scheduling scheme is nonpreemptive or cooperative; otherwise, it 
is preemptive. Under nonpreemptive scheduling, once the CPU has been 
allocated to a process, the process keeps the CPU until it releases the CPU either 
by terminating or by switching to the waiting state. This scheduling method 
was used by Microsoft Windows 3.x; Windows 95 introduced preemptive 
scheduling, and all subsequent versions of Windows operating systems have 
used preemptive scheduling. The Mac OS X operating system for the Macintosh 
also uses preemptive scheduling; previous versions of the Macintosh operating 
system relied on cooperative scheduling. Cooperative scheduling is the only 
method that can be used on certain hardware platforms, because it does not 
require the special hardware (for example, a timer) needed for preemptive 
scheduling. 
Unfortunately, preemptive scheduling incurs a cost associated with access 
to shared data. Consider the case of two processes that share data. While one 
is updating the data, it is preempted so that the second process can run. The 
second process then tries to read the data, which are in an inconsistent state. In 
such situations, we need new mechanisms to coordinate access to shared data; 
we discuss this topic in Chapter 6. 
Preemption also affects the design of the operating-system kernel. During 
the processing of a system call, the kernel may be busy with an activity on 
behalf of a process. Such activities may involve changing important kernel 
data (for instance, I/0 queues). What happens if the process is preempted 
in the middle of these changes and the kernel (or the device driver) needs 
to read or modify the same structure? Chaos ensues. Certain operating sys-
tems, including most versions of UNIX, deal with this problem by waiting 
either for a system call to com.plete or for an I/O block to take place before 
doing a context switch. This scheme ensures that the kernel structure is 
simple, since the kernel will not preempt a process while the kernel data 
structures are in an inconsistent state. Unfortunately, this kernel-execution 
model is a poor one for supportil1g real-time computing and multipro-
cessing. These problems, and their solutions, are described i.J.1 Sections 5.5 
and 19.5. 
Because interrupts can, by definition, occur at any time, and because 
they cannot always be ignored by the kernel, the sections of code affected 
by interrupts must be guarded from simultaneous use. The operating system 
needs to accept interrupts at almost all times; otherwise, input might be lost or 
output overwritten. So that these sections of code are not accessed concurrently 
by several processes, they disable interrupts at entry and reenable interrupts 
at exit. It is important to note that sections of code that disable interrupts do 
not occur very often and typically contain few instructions. 

5.2 
5.2 

5.1.4 Dispatcher 
Another component involved in the CPU-scheduling function is the dispatcher. 
The dispatcher is the module that gives control of the CPU to the process selected 
by the short-term scheduler. This function involves the following: 
Switching context 
Switching to user mode 
Jumping to the proper location in the user program to restart that program 
The dispatcher should be as fast as possible, since it is invoked during every 
process switch. The time it takes for the dispatcher to stop one process and 
start another running is known as the dispatch latency. 
Different CPU-scheduling algorithms have different properties, and the choice 
of a particular algorithm may favor one class of processes over another. In 
choosing which algorithm to use in a particular situation, we must consider 
the properties of the various algorithms. 
Many criteria have been suggested for comparing CPU-scheduling algo-
rithms. Which characteristics are used for comparison can make a substantial 
difference in which algorithm is judged to be best. The criteria include the 
following: 
CPU utilization. We want to keep the CPU as busy as possible. Concep-
tually, CPU utilization can range from 0 to 100 percent. In a real system, it 
should range from 40 percent (for a lightly loaded system) to 90 percent 
(for a heavily used system). 
Throughput. If the CPU is busy executing processes, then work is being 
done. One measure of work is the number of processes that are completed 
per time unit, called throughput. For long processes, this rate may be one 
process per hour; for short transactions, it may be ten processes per second. 
Turnaround time. From the point of view of a particular process, the 
important criterion is how long it takes to execute that process. The interval 
from the time of submission of a process to the time of completion is the 
turnaround time. Turnaround tim.e is the sum of the periods spent waiting 
to get into memory, waiting in the ready queue, executing on the CPU, and 
doing I/0. 
Waiting time. The CPU-scheduling algorithm does not affect the amount 
of time during which a process executes or does I/0; it affects only the 
an1.ount of time that a process spends waiting in the ready queue. Waiting 
time is the sum of the periods spent waiting in the ready queue. 
Response time. In an interactive system, turnaround time may not be 
the best criterion. Often, a process can produce some output fairly early 
and can continue computing new results while previous results are being 

Chapter 5 
5.3 
output to the user. Thus, another measure is the time from the submission 
of a request until the first response is produced. This measure, called 
response time, is the tince it takes to start responding, not the time it takes 
to output the response. The turnaround time is generally limited by the 
speed of the output device. 
It is desirable to maximize CPU utilization and throughput and to minirnize 
turnaround time, waiting time, and response time. In most cases, we optimize 
the average measure. However, under some circumstances, it is desirable 
to optimize the minimum or maximum values rather than the average. For 
example, to guarantee that all users get good service, we may want to minirnize 
the maximum response time. 
Investigators have suggested that, for interactive systems (such as time-
sharing systerns), it is more important to minimize the variance in the response 
time than to minimize the average response time. A system with reasonable 
and predictable response time may be considered more desirable than a system 
that is faster on the average but is highly variable. Howeve1~ little work has 
been done on CPU-scheduling algorithms that minimize variance. 
As we discuss various CPU-scheduling algorithms in the following section, 
we illustrate their operation. An accurate illustration should involve many 
processes, each a sequence of several hundred CPU bursts and I/O bursts. 
For simplicity, though, we consider only one CPU burst (in milliseconds) per 
process in our examples. Our measure of comparison is the average waiting 
time. More elaborate evaluation mechanisms are discussed in Section 5.7. 
CPU scheduling deals with the problem of deciding which of the processes in the 
ready queue is to be allocated the CPU. There are many different CPU-scheduling 
algorithms. In this section, we describe several of them. 
5.3.1 First-Come, First-Served Scheduling 
By far the simplest CPU-scheduling algorithm is the first-come, first-served 
(FCFS) scheduling algorithm. With this scheme, the process that requests the 
CPU first is allocated the CPU first. The implementation of the FCFS policy is 
easily managed with a FIFO queue. When a process enters the ready queue, its 
PCB is linked onto the tail of the queue. When the CPU is free, it is allocated to 
the process at the head of the queue. The running process is then removed from 
the queue. The code for FCFS scheduling is simple to write and understand. 
On the negative side, the average waiting time under the FCFS policy is 
often quite long. Consider the following set of processes that arrive at time 0, 
with the length of the CPU burst given in milliseconds: 
Process 
Burst Time 
-----
p] 

p2 

Po 
:) 

5.3 

If the processes ani ve in the order P1, P2, P3, and are served in FCFS order, 
we get the result shown in the following Gantt chart, which is a bar chart that 
illustrates a particular schedule, including the start and finish times of each of 
the participating processes: 

The waiting time is 0 milliseconds for process P1, 24 milliseconds for process 
P2, and 27 milliseconds for process P3 . Thus, the average waiting time is (0 
+ 24 + 27)/3 = 17 ncilliseconds. If the processes arrive in the order P2, P3, P1, 
however, the results will be as shown in the following Gantt chart: 

The average waiting time is now (6 + 0 + 3)/3 = 3 milliseconds. This reduction 
is substantial. Thus, the average waiting time under an FCFS policy is generally 
not minimal and may vary substantially if the processes CPU burst times vary 
greatly. 
In addition, consider the performance of FCFS scheduling in a dynamic 
situation. Assume we have one CPU-bound process and many I/O-bound 
processes. As the processes flow armmd the system, the following scenario 
may result. The CPU-bound process will get and hold the CPU. During this 
time, all the other processes will finish their I/0 and will move into the ready 
queue, waiting for the CPU. While the processes wait in the ready queue, the 
I/0 devices are idle. Eventually, the CPU-bound process finishes its CPU burst 
and moves to an I/0 device. All the I/O-bound processes, which have short 
CPU bursts, execute quickly and move back to the I/0 queues. At this point, 
the CPU sits idle. The CPU-bound process will then move back to the ready 
queue and be allocated the CPU. Again, all the I/0 processes end up waiting in 
the ready queue until the CPU-bound process is done. There is a convoy effect 
as all the other processes wait for the one big process to get off the CPU. This 
effect results in lower CPU and device utilization than might be possible if the 
shorter processes were allowed to go first. 
Note also that the FCFS scheduling algorithm is nonpreemptive. Once the 
CPU has been allocated to a process, that process keeps the CPU until it releases 
the CPU, either by terminating or by requesting I/0. The FCFS algorithm is thus 
particularly troublesome for time-sharing systems, where it is important that 
each user get a share of the CPU at regular intervals. It would be disastrous to 
allow one process to keep the CPU for an extended period. 
5.3.2 Shortest-Job-First Scheduling 
A different approach to CPU scheduling is the shortest-job-first (SJF) schedul-
ing algorithm. This algorithm associates with each process the length of the 
process's next CPU burst. When the CPU is available, it is assigned to the process 

Chapter 5 
that has the smallest next CPU burst. If the next CPU bursts of two processes are 
the same, FCFS scheduling is used to break the tie. Note that a more appropriate 
term for this scheduling method would be the shortest-next-CPU-burst algorithm, 
because scheduling depends on the length of the next CPU burst of a process, 
rather than its total length. We use the term SJF because m.ost people and 
textbooks use this term to refer to this type of scheduling. 
As an example of SJF scheduling, consider the following set of processes, 
with the length of the CPU burst given in milliseconds: 
Process 
Burst Time 
pl 

p2 

p3 

p4 

Using SJF scheduling, we would schedule these processes according to the 
following Gantt chart: 

The waiting time is 3 milliseconds for process P1, 16 milliseconds for process 
P2, 9 milliseconds for process P3, and 0 milliseconds for process P4 . Thus, the 
average waiting time is (3 + 16 + 9 + 0) I 4 = 7 milliseconds. By comparison, if 
we were using the FCFS scheduling scheme, the average waiting time would 
be 10.25 milliseconds. 
The SJF scheduling algorithm is provably optimal, in that it gives the 
minimum average waiting time for a given set of processes. Moving a short 
process before a long one decreases the waiting time of the short process more 
than it increases the waiting time of the long process. Consequently, the average 
waiting time decreases. 
The real difficulty with the SJF algorithm is knowing the length of the next 
CPU request. For long-term (job) scheduling in a batch system, we can use as 
the length the process time limit that a user specifies when he submits the 
job. Thus, users are motivated to estimate the process time limit accurately, 
since a lower value may mean faster response. (Too low a value will cause 
a time-limit-exceeded error and require resubmission.) SJF scheduling is used 
frequently in long-term scheduling. 
Although the SJF algorithm is optimal, it cannot be implemented at the level 
of short-term CPU scheduling. With short-term scheduling, there is no way to 
know the length of the next CPU burst. One approach is to try to approximate 
SJF scheduling. We may not know the length of the next CPU burst, but we may 
be able to predict its value. We expect that the next CPU burst will be similar 
in length to the previous ones. By computing an approximation of the length 
of the next CPU burst, we can pick the process with the shortest predicted CPU 
burst. 

5.3 

The next CPU burst is generally predicted as an exponential average of 
the measured lengths of previous CPU bursts. We can define the exponential 
average with the following formula. Let t11 be the length of the nth CPU burst, 
and let T11+t be our predicted value for the next CPU burst. Then, for a, 0 :s a < 
1, define 
The value of tn contains our most recent information; T11 stores the past history. 
The parameter a controls the relative weight of recent and past history in 
our prediction. If a= 0, then Tn+l = T11, and recent history has no effect (current 
conditions are assumed to be transient). If a= 1, then Tn+l = t11 , and only the most 
recent CPU burst matters (history is assumed to be old and irrelevant). More 
commonly, a= 1/2, so recent history and past history are equally weighted. 
The initial To can be defined as a constant or as an overall system average. 
Figure 5.3 shows an exponential average with a= 1/2 and To= 10. 
To Lmderstand the behavior of the exponential average, we can expand the 
formula for Tn+l by substituting for T 11, to find 
) 
j 
JJ ' 1 
Tn+l = atn + (1 -
a atn-1 + · · · + (1- a) atn-j + · · · + (1- a) 'To. 
Since both a and (1 -
a) are less than or equal to 1, each successive term has 
less weight than its predecessor. 
The SJF algorithm can be either preemptive or nonpreemptive. The choice 
arises when a new process arrives at the ready queue while a previous process is 
still executing. The next CPU burst of the newly arrived process may be shorter 
time---+ 
CPU burst (f) 

"guess" (T;) 

1 1 

Figure 5.3 Prediction of the length of the next CPU burst. 

Chapter 5 
than what is left of the currently executing process. A preemptive SJF algorithm 
will preempt the currently executing process, whereas a nonpreemptive SJF 
algorithm will allow the currently running process to finish its CPU burst. 
Preemptive SJF scheduling is sometimes called shortest-remaining-time-first 
scheduling. 
As an example, consider the following four processes, with the length of 
the CPU burst given in milliseconds: 
Process 
Arrival Time 
Burst Time 
pl 

p2 

p3 

p4 

If the processes arrive at the ready queue at the times shown and need the 
indicated burst times, then the resulting preemptive SJF schedule is as depicted 
in the following Gantt chart: 

Process P1 is started at time 0, since it is the only process in the queue. Process 
P2 arrives at time 1. The remaining time for process P1 (7 milliseconds) is 
larger than the time required by process P2 (4 milliseconds), so process P1 is 
preempted, and process P2 is scheduled. The average waiting time for this 
example is [(10- 1) + (1 - 1) + (17- 2) +(5-3)]/ 4 = 26/4 = 6.5 milliseconds. 
Nonpreemptive SJF scheduling would result in an average waiting time of 7.75 
milliseconds. 
5.3.3 Priority Scheduling 
The SJF algorithm is a special case of the general priority scheduling algorithm. 
A priority is associated with each process, and the CPU is allocated to the process 
with the highest priority. Equal-priority processes are scheduled in FCFS order. 
An SJF algorithm is simply a priority algorithm where the priority (p) is the 
inverse of the (predicted) next CPU burst. The larger the CPU burst, the lower 
the priority, and vice versa. 
Note that we discuss scheduling in terms of high priority and low priority. 
Priorities are generally indicated by some fixed range of numbers, such as 0 
to 7 or 0 to 4,095. However, there is no general agreement on whether 0 is the 
highest or lowest priority. Some systems use low numbers to represent low 
priority; others use low numbers for high priority. This difference can lead to 
confusion. In this text, we assume that low numbers represent high priority. 
As an example, consider the following set of processes, assumed to have 
arrived at time 0 in the order P1, P2, · · ·, Ps, with the length of the CPU burst 
given in milliseconds: 

5.3 

Process 
Burst Time 
~[~()rity 
pl 

,., 

p2 

p3 

p4 

Ps 

Using priority scheduling, we would schedule these processes according to the 
following Gantt chart: 

18 19 
The average waiting time is 8.2 milliseconds. 
Priorities can be defined either internally or externally. Internally defined 
priorities use some nceasurable quantity or quantities to compute the priority 
of a process. For example, time limits, memory requirements, the number of 
open files, and the ratio of average I/0 burst to average CPU burst have been 
used in computing priorities. External priorities are set by criteria outside the 
operating system, such as the importance of the process, the type and amount 
of funds being paid for computer use, the department sponsoring the work, 
and other, often politicat factors. 
Priority scheduling can be either preemptive or nonpreemptive. When a 
process arrives at the ready queue, its priority is compared with the priority 
of the currently running process. A preemptive priority scheduling algorithm 
will preempt the CPU if the priority of the newly arrived process is higher 
than the priority of the currently running process. A nonpreemptive priority 
scheduling algorithm will simply put the new process at the head of the ready 
queue. 
A rnajor problem with priority scheduling algorithms is indefinite block-
ing, or starvation. A process that is ready to run but waiting for the CPU can 
be considered blocked. A priority scheduling algorithm can leave some low-
priority processes waiting indefinitely. In a heavily loaded computer system, a 
steady stream of higher-priority processes can prevent a low-priority process 
from ever getting the CPU. Generally, one of two things will happen. Either the 
process will eventually be run (at 2 A.M. Sunday, when the system is finally 
lightly loaded), or the cornputer systern will eventually crash and lose all 
unfinished low-priority processes. (Rumor has it that when they shut down 
the IBM 7094 at MIT in 1973, they found a low-priority process that had been 
submitted in 1967 and had not yet been run.) 
A solution to the problem of indefinite blockage of low-priority processes 
is aging. Aging is a techniqtJe of gradually increasing the priority of processes 
that wait in the system for a long time. For example, if priorities range from 
127 (low) to 0 (high), we could increase the priority of a waiting process by 
1 every 15 minutes. Eventually, even a process with an initial priority of 127 
would have the highest priority in the system and would be executed. In fact, 
it would take no more than 32 hours for a priority-127 process to age to a 
priority-0 process. 

Chapter 5 
5.3.4 Round-Robin Scheduling 
The round-robin (RR) scheduling algorithm is designed especially for time-
sharing systems. It is similar to FCFS scheduling, but preemption is added to 
enable the system to switch between processes. A small unit of time, called a 
time quantum or time slice, is defined. A time quantum is generally fronc 10 
to 100 milliseconds in length. The ready queue is treated as a circular queue. 
The CPU scheduler goes around the ready queue, allocating the CPU to each 
process for a time interval of up to 1 time quantum. 
To implement RR scheduling, we keep the ready queue as a FIFO queue o£ 
processes. New processes are added to the tail of the ready queue. The CPU 
scheduler picks the first process from the ready queue, sets a timer to interrupt 
after 1 time quantum, and dispatches the process. 
One of two things will then happen. The process may have a CPU burst of 
less than 1 time quantum. In this case, the process itself will release the CPU 
voluntarily. The scheduler will then proceed to the next process in the ready 
queue. Otherwise, if the CPU burst of the currently running process is longer 
than 1 time quantum, the timer will go off and will cause an interrupt to the 
operating system. A context switch will be executed, and the process will be 
put at the tail o£ the ready queue. The CPU scheduler will then select the next 
process in the ready queue. 
The average waiting time under the RR policy is often long. Consider the 
following set of processes that arrive at time 0, with the length of the CPU burst 
given in milliseconds: 
Process 
Burst Time 
If we use a time quantum of 4 milliseconds, then process P1 gets the first 4 
milliseconds. Since it requires another 20 milliseconds, it is preempted after 
the first time quantum, and the CPU is given to the next process in the queue, 
process P2 . Process P2 does not need 4 milliseconds, so it quits before its time 
quantum expires. The CPU is then given to the next process, process P3. Once 
each process has received 1 time quantum, the CPU is returned to process P1 
for an additional time quantum. The resulting RR schedule is as follows: 

Let's calculate the average waiting time for the above schedule. P1 waits for 6 
millisconds (10- 4), P2 waits for 4 millisconds, and P3 waits for 7 millisconds. 
Thus, the average waiting time is 17/3 = 5.66 milliseconds. 
In the RR scheduling algorithm, no process is allocated the CPU for more 
than 1 time quantum in a row (unless it is the only runnable process). If a 

5.3 

process's CPU burst exceeds 1 time quantum, that process is preempted and is 
p11t back in the ready queue. The RR scheduling algorithm is thus preemptive. 
If there are n. processes in the ready queue and the time quantum is q, 
then each process gets 1 In of the CPU time in chunks of at most q time units. 
Each process must wait no longer than (11 -
1) x q time units until its 
next time quantum. For example, with five processes and a time quantum of 20 
milliseconds, each process will get up to 20 milliseconds every 100 milliseconds. 
The performance of the RR algorithm depends heavily on the size of the 
time quantum. At one extreme, if the time quantum is extremely large, the 
RR policy is the same as the FCFS policy. In contrast, if the time quantum 
is extremely small (say, 1 millisecond), the RR approach is called processor 
sharing and (in theory) creates the appearance that each of 11 processes has its 
own processor running at 1 I 11 the speed of the real processor. This approach 
was used in Control Data Corporation (CDC) hardware to implement ten 
peripheral processors with only one set of hardware and ten sets of registers. 
The hardware executes one instruction for one set of registers, then goes on to 
the next. This cycle continues, resulting in ten slow processors rather than one 
fast one. (Actually, since the processor was much faster than memory and each 
instruction referenced memory, the processors were not much slower than ten 
real processors would have been.) 
In software, we need also to consider the effect of context switching on the 
performance of RR scheduling. Assume, for example, that we have only one 
process of 10 time units. If the quantum is 12 time units, the process finishes 
in. less than 1 time quantum, with no overhead. If the quantum is 6 time units, 
however, the process requires 2 quanta, resulting in a context switch. If the 
time quantum is 1 time unit, then nine context switches will occur, slowing the 
execution of the process accordingly (Figure 5.4). 
Thus, we want the time quantum to be large with respect to the context-
switch time. If the context-switch time is approximately 10 percent of the 
time quantum, then about 10 percent of the CPU time will be spent in context 
switching. In practice, most modern systems have time quanta ranging from 
10 to 100 milliseconds. The time required for a context switch is typically less 
than 10 microseconds; thus, the context-switch time is a small fraction of the 
time quantum. 
process time = 10 
quantum 
context 
switches 

r.r >r-.· ... r •. ·r .•. ·-···.r· 
r-···-lr·-··-r··•··r 

Figure 5.4 How a smaller time quantum increases context switches. 

Chapter 5 
process 
time 
12.5 
.P1 

12.0 
Pz 

p3 

Q) 11.5 
P4. 

E 
·.;::; 
"0 
c 
11.0 
::J 

(a 10.5 
E 
.2 
Q) 10.0 
en 
~ 
Q) > 
9.5 
C1l 
9.0 

time quantum 
Figure 5.5 How turnaround time varies with the time quantum. 
Turnaround time also depends on the size of the time quantum. As we 
can see from Figure 5.5, the average turnaround time of a set of processes 
does not necessarily improve as the time-quantum size increases. In general, 
the average turnaround time can be improved if most processes finish their 
next CPU burst in a single time quantum. For example, given three processes 
of 10 time units each and a quantum of 1 time unit, the average turnaround 
time is 29. If the time quantum is 10, however, the average turnaround time 
drops to 20. If context-switch time is added in, the average turnaround time 
increases even more for a smaller time quantum, since more context switches 
are required. 
Although the time quantum should be large compared with the context-
switch time, it should not be too large. If the time quantum is too large, RR 
scheduling degenerates to an FCFS policy. A rule of thumb is that 80 percent of 
the CPU bursts should be shorter than the time quantum. 
5.3.5 Multilevel Queue Scheduling 
Another class of scheduling algorithms has been created for situations in 
which processes are easily classified into different groups. For example, a 
common division is made between foreground (interactive) processes and 
background (batch) processes. These two types of processes have different 
response-time requirements and so may have different scheduling needs. In 
addition, foreground processes may have priority (externally defined) over 
background processes. 
A multilevel queue scheduling algorithm partitions the ready queue into 
several separate queues (Figure 5.6). The processes are permanently assigned to 
one queue, generally based on some property of the process, such as memory 

5.3 

highest priority 
====~'-------'i-'-n_te_r~ac_t_iv_e_e...:.d_it~in_g'-'-p~r-.o'-c_·e'---ss~e-s"--------"--'-'---l====i> 
======~'---------'b_a_tc_h_p_r_o_ce_s_s_e_s ______ _J======~> 
======·~'-------s_tu_d_e_n_t_p_ro_c_e_s_s_es _____ __jl======i> 
lowest priority 
Figure 5.6 Multilevel queue scheduling. 
size, process priority, or process type. Each queue has its own scheduling 
algorithm. For example, separate queues might be used for foreground and 
background processes. The foreground queue might be scheduled by an RR 
algorithm, while the background queue is scheduled by an FCFS algorithm. 
In addition, there must be scheduling among the queues, which is com-
monly implemented as fixed-priority preemptive scheduling. For example, the 
foreground queue may have absolute priority over the background queue. 
Let's look at an example of a multilevel queue scheduling algorithm with 
five queues, listed below in order of priority: 
System processes 
Interactive processes 
Interactive editing processes 
Batch processes 
Student processes 
Each queue has absolute priority over lower-priority queues. No process in the 
batch queue, for example, could run unless the queues for system processes, 
interactive processes, and interactive editing processes were all empty. If an 
interactive editing process entered the ready queue while a batch process was 
running, the batch process would be preempted. 
Another possibility is to time-slice among the queues. Here, each queue gets 
a certain portion of the CPU time, which it can then schedule among its various 
processes. For instance, in the foreground-background queue example, the 
foreground queue can be given 80 percent of the CPU time for RR scheduling 
among its processes, whereas the background queue receives 20 percent of the 
CPU to give to its processes on an FCFS basis. 

Chapter 5 
5.3.6 Multilevel Feedback Queue Scheduling 
Normally, when the multilevel queue scheduling algorithm is used, processes 
are permanently assigned to a queue when they enter the system. If there 
are separate queues for foreground and background processes, for example, 
processes do not move from one queue to the other, since processes do not 
change their foreground or background nature. This setup has the advantage 
of low scheduling overhead, but it is inflexible. 
The multilevel feedback queue scheduling algorithm, in contrast, allows 
a process to move between queues. The idea is to separate processes according 
to the characteristics of their CPU bursts. If a process uses too much CPU time, 
it will be moved to a lower-priority queue. This scheme leaves I/O-bound and 
interactive processes in the higher-priority queues. In addition, a process that 
waits too long in a lower-priority queue may be moved to a higher-priority 
queue. This form of aging prevents starvation. 
For example, consider a multilevel feedback queue scheduler with three 
queues, numbered from 0 to 2 (Figure 5.7). The scheduler first executes all 
processes in queue 0. Only when queue 0 is empty will it execute processes 
in queue 1. Similarly, processes in queue 2 will only be executed if queues 0 
and 1 are empty. A process that arrives for queue 1 will preempt a process in 
queue 2. A process in queue 1 will in turn be preempted by a process arriving 
for queue 0. 
A process entering the ready queue is put in queue 0. A process in queue 0 
is given a time quantum of 8 milliseconds. If it does not filcish within this time, 
it is moved to the tail of queue 1. If queue 0 is empty, the process at the head 
of queue 1 is given a quantum of 16 milliseconds. If it does not complete, it is 
preempted and is put into queue 2. Processes in queue 2 are run on an FCFS 
basis but are run only when queues 0 and 1 are empty. 
This scheduling algorithm gives highest priority to any process with a CPU 
burst of 8 milliseconds or less. Such a process will quickly get the CPU, finish 
its CPU burst, and go off to its next I/0 burst. Processes that need more than 
8 but less than 24 milliseconds are also served quickly, although with lower 
priority than shorter processes. Long processes automatically sink to queue 
2 and are served in FCFS order with any CPU cycles left over from queues 0 
and 1. 
Figure 5.7 Multilevel feedback queues. 

5.4 
5.4 

In general, a multilevel feedback queue scheduler is defined by the 
following parameters: 
The number of queues 
The scheduling algorithm for each queue 
The method used to determine when to upgrade a process to a higher-
priority queue 
The method used to determine when to demote a process to a lower-
priority queue 
The method used to determine which queue a process will enter when that 
process needs service 
The definition of a multilevel feedback queue scheduler makes it the most 
general CPU-scheduling algorithm. It can be configured to match a specific 
system under design. Unfortunately, it is also the most complex algorithm, 
since defining the best scheduler requires some means by which to select 
values for all the parameters. 
In Chapter 4, we introduced threads to the process model, distinguishing 
between user-level and kernel-level threads. On operating systems that support 
them, it is kernel-level threads-not processes-that are being scheduled by 
the operating system. User-level threads are managed by a thread library, 
and the kernel is unaware of them. To run on a CPU, user-level threads 
must ultimately be mapped to an associated kernel-level thread, although 
this mapping may be indirect and may use a lightweight process (LWP). In this 
section, we explore scheduling issues involving user-level and kernel-level 
threads and offer specific examples of scheduling for Pthreads. 
5.4.1 
Contention Scope 
One distinction between user-level and kernel-level threads lies in how they 
are scheduled. On systems implementing the many-to-one (Section 4.2.1) and 
many-to-many (Section 4.2.3) models, the thread library schedules user-level 
threads to run on an available LWP, a scheme known as process-contention 
scope (PCS), since competition for the CPU takes place among threads belonging 
to the same process. When we say the thread library schedules user threads onto 
available LWPs, we do not mean that the thread is actually running on a CPU; 
this would require the operating system to schedule the kernel thread onto 
a physical CPU. To decide which kernel thread to schedule onto a CPU, the 
kernel uses system-contention scope (SCS). Competition for the CPU with SCS 
scheduling takes place among all threads in the system. Systems usilcg the 
one-to-one model (Section 4.2.2), such as Windows XP, Solaris, and Linux, 
schedule threads using only SCS. 
Typically, PCS is done according to priority-the scheduler selects the 
runnable thread with the highest priority to run. User-level thread priorities 

Chapter 5 
5.5 
are set by the programmer and are not adjusted by the thread library, although 
some thread libraries may allow the programmer to change the priority of 
a thread. It is important to note that PCS will typically preempt the thread 
currently running in favor of a higher-priority thread; however, there is no 
guarantee of time slicing (Section 5.3.4) among threads of equal priority. 
5.4.2 Pthread Scheduling 
We provided a sample POSTX Pthread program in Section 4.3.1, along with an 
introduction to thread creation with Pthreads. Now, we highlight the POSIX 
Pthread API that allows specifying either PCS or SCS during thread creation. 
Pthreads identifies the following contention scope values: 
PTHREAD_SCOPE_PROCESS schedules threads using PCS scheduling. 
PTHREAD_SCOPE_SYSTEM schedules threads using SCS scheduling. 
On 
systems 
implementing 
the 
many-to-many 
model, 
the 
PTHREAD_SCOPE_PROCESS policy schedules user-level threads onto available 
LWPs. The number of LWPs is maintained by the thread library, perhaps using 
scheduler activations (Section 4.4.6). The PTHREAD_SCOPE_SYSTEM scheduling 
policy will create and bind an LWP for each user-level thread on many-to-many 
systems, effectively mapping threads using the one-to-one policy. 
The Pthread IPC provides two functions for getting-and setting-the 
contention scope policy: 
pthread_attr_setscope(pthread_attr_t *attr, int scope) 
pthread_attr_getscope(pthread_attr_t *attr, int *scope) 
The first parameter for both functions contains a pointer to the attribute set for 
the thread. The second parameter for the pthread_attr_setscope () function 
is passed either the PTHREAD_SCOPE_SYSTEM or the PTHREAD_SCOPE_PROCESS 
value, indicating how the contention scope is to be set. In the case of 
pthread_attr_getscope (), this second parameter contaiilS a pointer to an 
int value that is set to the current value of the contention scope. If an error 
occurs, each of these functions returns a non-zero value. 
In Figure 5.8, we illustrate a Pthread scheduling API. The pro-
gram first determines the existing contention scope and sets it to 
PTHREAD_SCOPLPROCESS. It then creates five separate threads that will 
run using the SCS scheduling policy. Note that on some systems, only certain 
contention scope values are allowed. For example, Linux and Mac OS X 
systems allow only PTHREAD_SCOPE_SYSTEM. 
Our discussion thus far has focused on the problems of scheduling the CPU in 
a system with a single processor. If multiple CPUs are available, load sharing 
becomes possible; however, the scheduling problem becomes correspondingly 

#include <pthreadoh> 
#include <stdiooh> 
#define NUM_THREADS 5 
int main(int argc, char *argv[]) 
{ 
} 
int i, scope; 
pthread_t tid[NUM_THREADS]; 
pthread_attr_t attr; 
I* get the default attributes *I 
pthread_attr_init(&attr); 
I* first inquire on the current scope *I 
if (pthread_attr_getscope(&attr, &scope) != 0) 
fprintf(stderr, "Unable to get scheduling scope\n"); 
else { 
} 
if (scope == PTHREAD_SCOPE_PROCESS) 
printf("PTHREAD_SCOPLPROCESS"); 
else if (scope == PTHREAD_SCOPE_SYSTEM) 
printf("PTHREAD_SCOPE_SYSTEM"); 
else 
fprintf(stderr, "Illegal scope valueo\n"); 
I* set the scheduling algorithm to PCS or SCS *I 
pthread_attr_setscope(&attr, PTHREAD_SCOPE_SYSTEM); 
I* create the threads *I 
for (i = 0; i < NUM_THREADS; i++) 
pthread_create(&tid[i] ,&attr,runner,NULL); 
I* now join on each thread *I 
for (i = 0; i < NUM_THREADS; i++) 
pthread_join(tid[i], NULL); 
I* Each thread will begin control in this function *I 
void *runner(void *param) 
{ 
I* do some work 0 0 0 *I 
pthread_exi t ( 0) ; 
} 
Figure 508 
Pthread scheduling API. 

more complex. Many possibilities have been tried; and as we saw with single-
processor CPU scheduling, there is no one best solution. Here, we discuss 
several concerns in multiprocessor scheduling. We concentrate on systems 

Chapter 5 
in which the processors are identical-homogeneous-in terms of their 
functionality; we can then use any available processor to run any process 
in the queue. (Note, however, that even with homogeneous multiprocessors, 
there are sometimes limitations on scheduling. Consider a system with an l/0 
device attached to a private bus of one processor. Processes that wish to use 
that device must be scheduled to run on that processor.) 
5.5.1 Approaches to Multiple-Processor Scheduling 
One approach to CPU scheduling in a n1.ultiprocessor system has all scheduling 
decisions, I/O processing, and other system activities handled by a single 
processor-the master server. The other processors execute only user code. 
This asymmetric multiprocessing is simple because only one processor 
accesses the system data structures, reducing the need for data sharing. 
A second approach uses symmetric multiprocessing (SMP), where each 
processor is self-scheduling. All processes may be in a common ready queue, or 
each processor may have its own private queue of ready processes. Regardless, 
scheduling proceeds by having the scheduler for each processor examine the 
ready queue and select a process to execute. As we shall see in Chapter 61 
if we have multiple processors trying to access and update a common data 
structure, the scheduler must be programmed carefully. We must ensure that 
two processors do not choose the same process and that processes are not lost 
from the queue. Virtually all modern operating systems support SMP, including 
Windows XP, Windows 2000, Solaris, Linux, and Mac OS X. In the remainder of 
this section, we discuss issues concerning SMP systems. 
5.5.2 Processor Affinity 
Consider what happens to cache memory when a process has been running on 
a specific processor. The data most recently accessed by the process populate 
the cache for the processor; and as a result, successive memory accesses by 
the process are often satisfied in cache memory. Now consider what happens 
if the process migrates to another processor. The contents of cache memory 
must be invalidated for the first processor, and the cache for the second 
processor must be repopulated. Because of the high cost of invalidating and 
repopulating caches, most SMP systems try to avoid migration of processes 
from one processor to another and instead attempt to keep a process rumung 
on the same processor. This is known as processor affinity-that is, a process 
has an affinity for the processor on which it is currently rumting. 
Processor affinity takes several forms. When an operating system has a 
policy of attempting to keep a process running on the same processor-but 
not guaranteeing that it will do so-we have a situation known as soft affinity. 
Here, it is possible for a process to migrate between processors. Some systems 
-such as Lim.IX -also provide system calls that support hard affinity, thereby 
allowing a process to specify that it is not to migrate to other processors. Solaris 
allows processes to be assigned to 
limiting which processes can 
run on which CPUs. It also implements soft affinity. 
The main-memory architecture of a system can affect processor affinity 
issues. Figure 5.9 illustrates an architecture featuring non-uniform memory 
access (NUMA), in which a CPU has faster access to some parts of main memory 
than to other parts. Typically, this occurs in systems containing combined CPU 

5.5 

computer 
Figure 5.9 NUMA and CPU scheduling. 
and memory boards. The CPUs on a board can access the memory on that board 
with less delay than they can access memory on other boards in the system. 
If the operating system's CPU scheduler and memory-placement algorithms 
work together, then a process that is assigned affinity to a particular CPU 
can be allocated memory on the board where that CPU resides. This example 
also shows that operating systems are frequently not as cleanly defined and 
implemented as described in operating-system textbooks. Rather, the "solid 
lines" between sections of an operating system are frequently only "dotted 
lines," with algorithms creating connections in ways aimed at optimizing 
performance and reliability. 
5.5.3 Load Balancing 
On SMP systems, it is important to keep the workload balanced among all 
processors to fully utilize the benefits of having more than one processor. 
Otherwise, one or more processors may sit idle while other processors have 
high workloads, along with lists of processes awaiting the CPU. Load balancing 
attempts to keep the workload evenly distributed across all processors in 
an SMP system. It is important to note that load balancing is typically only 
necessary on systems where each processor has its own private queue of eligible 
processes to execute. On systems with a common run queue, load balancing 
is often unnecessary, because once a processor becomes idle, it immediately 
extracts a rmmable process from the common run queue. It is also important to 
note, howeve1~ that in most contemporary operating systems supporting SMP, 
each processor does have a private queue of eligible processes. 
There are two general approaches to load balancing: push migration and 
pull migration. With push migration, a specific task periodically checks the 
load on each processor and -if it finds an imbalance-evenly distributes the 
load by moving (or pushing) processes from overloaded to idle or less-busy 
processors. Pull migration occurs when an idle processor pulls a waiting task 
from a busy processor. Push and pull migration need not be mutually exclusive 
and are in fact often implemented in parallel on load-balancing systems. For 
example, the Linux scheduler (described in Section 5.6.3) and the ULE scheduler 

Chapter 5 
available for FreeBSD systems implement both techniqL1es. Linux runs its load-
balancing algorithm every 200 milliseconds (push migration) or whenever the 
run queue for a processor is empty (pull migration). 
Interestingly, load balancing often counteracts the benefits of processor 
affinity, discussed in Section 5.5.2. That is, the benefit of keeping a process 
running on the same processor is that the process can take advantage of its data 
being in that processor's cache memory. Either pulling or pushing a process 
from one processor to another invalidates this benefit. As is often the case 
in systems engineering, there is no absolute rule concerning what policy is 
best. Thus, in some systems, an idle processor always pulls a process from 
a non-idle processor; and in other systems, processes are moved only if the 
imbalance exceeds a certain threshold. 
5.5.4 Multicore Processors 
Traditionally, SMP systems have allowed several threads to run concurrently by 
providing multiple physical processors. However, a recent trend in computer 
hardware has been to place multiple processor cores on the same physical chip, 
resulting in a 
. Each core has a register set to maintain its 
architectural state and 
appears to the operating system to be a separate 
physical processor. SMP systems that use multicore processors are faster and 
consume less power than systems in which each processor has its own physical 
chip. 
Multicore processors may complicate scheduling issues. Let's consider how 
this can happen. Researchers have discovered that when a processor accesses 
memory, it spends a significant amount of time waiting for the data to become 
available. This situation, known as a 
may occur for various 
reasons, such as a cache miss (accessing data that is not in cache memory). 
Figure 5.10 illustrates a memory stall. In this scenario, the processor can spend 
up to 50 percent of its time waiting for data to become available from memory. 
To remedy this situation, many recent hardware designs have implemented 
multithreaded processor cores in which two (or more) hardware threads are 
assigned to each core. That way, if one thread stalls while waiting for memory, 
the core can switch to another thread. Figure 5.11 illustrates a dual-threaded 
processor core on which the execution of thread 0 and the execution of thread 1 
are interleaved. From an operating-system perspective, each hardware thread 
appears as a logical processor that is available to run a software thread. Thus, 
on a dual-threaded, dual-core system, four logical processors are presented to 
the operating system. The UltraSPARC Tl CPU has eight cores per chip and four 

compute cycle 
~memory 
stall cycle 
thread 
c 
M 
c 
M 
c 
M 
c 
M 
time 
Figure 5.10 Memory stall. 

5.5 

thread1 
c 
M 
c 
M 
c 
M 
c 
thread0 
c 
M 
c 
M 
c 
M 
c 
time 
Figure 5.11 
Multithreaded multicore system. 
hardware threads per core; from the perspective of the operating system, there 
appear to be 32 logical processors. 
In general, there are two ways to multithread a processor: ~__u.,u."·c-).;u:•cHccu 
multithreading. With coarse-grained multithreading, a thread 
executes on a processor until a long-latency event such as a memory stall occurs. 
Because of the delay caused by the long-latency event, the processor must 
switch to another thread to begin execution. However, the cost of switching 
between threads is high, as the instruction pipeline must be flushed before 
the other thread can begin execution on the processor core. Once this new 
thread begins execution, it begins filling the pipeline with its instructions. 
Fine-grained (or interleaved) multithreading switches between threads at a 
much finer level of granularity-typically at the boundary of an instruction 
cycle. However, the architectural design of fine-grained systems includes logic 
for thread switching. As a result, the cost of switching between threads is small. 
Notice that a multithreaded multicore processor actually requires two 
different levels of scheduling. On one level are the scheduling decisions that 
must be made by the operating system as it chooses which software thread to 
run on each hardware thread (logical processor). For this level of scheduling, 
the operating system may choose any scheduling algorithm, such as those 
described in Section 5.3. A second level of scheduling specifies how each core 
decides which hardware thread to run. There are several strategies to adopt 
in this situation. The UltraSPARC Tl, mentioned earlier, uses a simple round-
robin algorithm to schedule the four hardware threads to each core. Another 
example, the Intel Itanium, is a dual-core processor with hvo hardware-
managed threads per core. Assigned to each hardware thread is a dynamic 
urgency value ranging from 0 to 7, with 0 representing the lowest urgency, 
and 7 the highest. The Itanium. identifies five different events that may trigger 
a thread switch. When one of these events occurs, the thread-switching logic 
compares the urgency of the two threads and selects the thread with the highest 
urgency value to execute on the processor core. 
5.5.5 Virtualization and Scheduling 
A system with virtualization, even a single-CPU system, frequently acts like 
a multiprocessor system. The virtualization software presents one or more 
virtual CPUs to each of the virtual machines rum1.ing on the system and 
then schedules the use of the physical CPUs among the virtual machines. 
The significant variations between virtualization technologies make it difficult 
to summarize the effect of virtualization on scheduling (see Section 2.8). 
In general, though, most virtualized environments have one host operating 

Chapter 5 
5.6 
system and many guest operating systems. The host operating system creates 
and manages the virtual machines, and each virtual n<achine has a guest 
operating system installed and applications running within that guest. Eacb 
guest operating system may be fine-tuned for specific use cases, applications, 
and users, including time sharing or even real-time operation. 
Any guest operating-system scheduling algorithm that assumes a certain 
amount of progress in a given amount of time will be negatively impacted by 
virtualization. Consider a time-sharing operating system that tries to allot 100 
milliseconds to each time slice to give users a reasonable response time. Within 
a virtual machine, this operating system is at the mercy of the virtualization 
system as to what CPU resources it actually receives. A given 100-millisecond 
time slice may take much more than 100 milliseconds of virtual CPU time. 
Depending on how busy the system is, the time slice may take a second or more, 
resulting in very poor response times for users logged into that virtual machine. 
The effect on a real-time operating system would be even more catastrophic. 
The net effect of such scheduling layering is that individual virtualized 
operating systems receive only a portion of the available CPU cycles, even 
though they believe they are receiving all of the cycles and indeed that they 
are scheduling all of those cycles. Commonly, the time-of-day clocks in virtual 
machines are incorrect because timers take longer to trigger than they would on 
dedicated CPUs. Virtualization can thus "Lmdo the good scheduling-algorithm 
efforts of the operating systems within virtual machines. 
We turn next to a description of the scheduling policies of the Solaris, Windows 
XP, and Linux operating systems. It is important to remember that we are 
describing the scheduling of kernel tlueads with Solaris and Windows XP. 
Recall that Linux does not distinguish between processes and threads; thus, 
we use the term task when discussing the Linux scheduler. 
5.6.1 
Example: Solaris Scheduling 
Solaris uses priority-based thread scheduling where each thread belongs to 
one of six classes: 
Time sharing (TS) 
Interactive (IA) 
Real time (RT) 
System (SYS) 
Fair share (FSS) 
Fixed priority (FP) 
Within each class there are different priorities and different scheduling algo-
rithms. 
The default scheduling class for a process is time sharing. The scheduling 
policy for the time-sharing class dynamically alters priorities and assigns time

---

## Module 3 Textbook

6.1 
c 
ER 
A cooperating process is one that can affect or be affected by other processes 
executing in the system. Cooperating processes can either directly share a 
logical address space (that is, both code and data) or be allowed to share data 
only through files or messages. The former case is achieved through the use of 
threads, discussed in Chapter 4. Concurrent access to shared data may result in 
data inconsistency, however. In this chapter, we discuss various mechanisms 
to ensure the orderly execution of cooperating processes that share a logical 
address space, so that data consistency is maintained. 
To introduce the critical-section problem, whose solutions can be used to 
ensure the consistency of shared data. 
To present both software and hardware solutions of the critical-section 
problem. 
To introduce the concept of an atomic transaction and describe mecha-
nisms to ensure atomicity. 
In Chapter 3, we developed a model of a system consisting of cooperating 
sequential processes or threads, all running asynchronously and possibly 
sharing data. We illustrated this model with the producer-consumer problem, 
which is representative of operating systems. Specifically, in Section 3.4.1, we 
described how a bounded buffer could be used to enable processes to share 
memory. 
Let's return to our consideration of the bounded buffer. As we pointed 
out, our original solution allowed at most BUFFER_SIZE - 1 items in the buffer 
at the same time. Suppose we want to modify the algorithm to remedy this 
deficiency. One possibility is to add an integer variable counter, initialized to 
0. counter is incremented every time we add a new item to the buffer and is 

Chapter 6 
decremented every time we remove one item from the buffer. The code for the 
producer process can be modified as follows: 
while (true) { 
} 
I* produce an item in nextProduced *I 
while (counter == BUFFER_SIZE) 
; I* do nothing *I 
buffer[in] = nextProduced; 
in = (in + 1) % BUFFER_SIZE ; 
counter++; 
The code for the consumer process can be modified as follows: 
while (true) { 
} 
while (counter == 0) 
; I* do nothing *I 
nextConsumed = buffer[out]; 
out = (out + 1) % BUFFER_SIZE; 
counter--; 
I* consume the item in nextConsumed *I 
Although both the producer and consumer routines shown above are 
correct separately, they may not function correctly when executed concurrently. 
As an illustration, suppose that the value of the variable counter is currently 
5 and that the producer and consumer processes execute the statements 
"counter++" and "counter--" concurrently. Following the execution of these 
two statements, the value of the variable counter may be 4, 5, or 6! The only 
correct result, though, is counter == 5, which is generated correctly if the 
producer and consumer execute separately. 
We can show that the value of counter may be incorrect as follows. Note 
that the statement" counter++" may be implemented in machine language (on 
a typical machine) as 
register1 = counter 
register1 = register1 + 1 
counter= register1 
where register1 is one of the local CPU registers. Similarly, the statement 
register2"counter--" is implemented as follows: 
register2 = counter 
register2 = register2 ~ 1 
counter= register2 
where again register2 is on eo£ the local CPU registers. Even though register1 and 
register2 may be the same physical register (an accumulator, say), remember 
that the contents of this register will be saved and restored by the interrupt 
handler (Section 1.2.3). 

6.2 
6.2 

The concurrent execution of "counter++" and "counter--" is equivalent 
to a sequential execution in which the lower-level statements presented 
previously are interleaved in some arbitrary order (but the order within each 
high-level statement is preserved). One such interleaving is 
To: 
producer 
execute 
register1 =counter 
{register1 = 5} 
T1: 
producer 
execute 
register1 = register1 + 1 {register1 = 6} 
T2: 
consumer execute 
register2 = counter 
{register2 = 5} 
T3: 
consumer execute 
register2 = register2 
1 {register2 = 4} 
T4: 
producer 
execute 
counter= register1 
{counter = 6} 
Ts: 
consumer execute 
counter = register2 
{counter = 4} 
Notice that we have arrived at the incorrect state "counter == 4", indicating 
that four buffers are full, when, in fact, five buffers are full. If we reversed the 
order of the statements at T4 and T5, we would arrive at the incorrect state 
"counter== 6". 
We would arrive at this incorrect state because we allowed both processes 
to manipulate the variable counter concurrently. A situation like this, where 
several processes access and manipulate the same data concurrently and the 
outcome of the execution depends on the particular order in which the access 
takes place, is called a 
To guard against the race condition 
above, we need to ensure that only one process at a time can be manipulating 
the variable counter. To make such a guarantee, we require that the processes 
be synchronized in some way. 
Situations such as the one just described occur frequently in operating 
systems as different parts of the system manipulate resources. Furthermore, 
with the growth of multicore systems, there is an increased emphasis on 
developing multithreaded applications wherein several threads-which are 
quite possibly sharing data-are rmming in parallel on different processing 
cores. Clearly, we want any changes that result from such activities not 
to interfere with one another. Because of the importance of this issue, a 
major portion of this chapter is concerned with 
and 
amongst cooperating processes. 
Consider a system consisting of n processes {Po, P1 , ... , P11 _ I}. Each process 
has a segment of code, called a cdticall 
in which the process may 
be changing common variables, updating a table, writing a file, and so on. 
The important feature of the system is that, when one process is executing in 
its critical section, no other process is to be allowed to execute in its critical 
section. That is, no two processes are executing in their critical sections at the 
same time. The critical-section problem is to design a protocol that the processes 
can use to cooperate. Each process must request permission to enter its critical 
section. The section of code implementing this request is the 
The 
critical section may be followed by an exit 
The remaining code is the 
The general structure of a typical process Pi is shown in 

Chapter 6 
do { 
I entry section I 
critical section 
I exit section I 
remainder section 
} while (TRUE); 
Figure 6.1 
General structure of a typical process A. 
Figure 6.1. The entry section and exit section are enclosed in boxes to highlight 
these important segments of code. 
A solution to the critical-section problem must satisfy the following three 
requirements: 
1. Mutual exclusion. If process Pi is executing in its critical section, then no 
other processes can be executing in their critical sections. 
2. Progress. If no process is executing in its critical section and some 
processes wish to enter their critical sections, then only those processes 
that are not executing in their remainder sections can participate in 
deciding which will enter its critical section next, and this selection carmot 
be postponed indefinitely. 
Bounded waiting. There exists a bound, or limit, on the number of times 
that other processes are allowed to enter their critical sections after a 
process has made a request to enter its critical section and before that 
request is granted. 
We assume that each process is executing at a nonzero speed. However, we can 
make no assumption concerning the relative 
of the n processes. 
At a given point in time, many kernel-mode processes may be active in the 
operating system. As a result, the code implementing an operating system 
(kernel code) is subject to several possible race conditions. Consider as an 
example a kernel data structure that maintains a list of all open files in the 
system. This list must be modified when a new file is opened or closed (adding 
the file to the list or removing it from the list). If two processes were to open files 
simultaneously, the separate updates to this list could result in a race condition. 
Other kernel data structures that are prone to possible race conditions include 
structures for maintaining memory allocation, for maintaining process lists, 
and for interrupt handling. It is up to kernel developers to ensure that the 
operating system is free from such race conditions. 
Two general approaches are used to handle critical sections in operating 
systems: (1) preemptive kernels and (2) nonpreemptive kernels. A preemptive 
kernel allows a process to be preempted while it is running in kernel mode. 
A nonpreemptive kernel does not allow a process running in kernel mode 

6.3 
6.3 

to be preempted; a kernel-mode process will run until it exits kernel mode, 
blocks, or voluntarily yields control of the CPU. Obviously, a nonpreemptive 
kernel is essentially free from race conditions on kernel data structures, as only 
one process is active in the kernel at a time. We cannot say the same about 
preemptive kernels, so they must be carefully designed to ensure that shared 
kernel data are free from race conditions. Preemptive kernels are especially 
difficult to design for SMP architectures, since in these environments it is 
possible for two kernel-mode processes to run simultaneously on different 
processors. 
Why, then, would anyone favor a preemptive kernel over a nonpreemptive 
one? A preemptive kernel is more suitable for real-time programming, as it will 
allow a real-time process to preempt a process currently running in the kernel. 
Furthermore, a preemptive kernel may be more responsive, since there is less 
risk that a kernel-mode process will run for an arbitrarily long period before 
relinquishing the processor to waiting processes. Of course, this effect can be 
minimized by designing kernel code that does not behave in this way. Later in 
this chapter, we explore how various operating systems manage preemption 
within the kernel. 
Next, we illustrate a classic software-based solution to the critical-section 
problem known as Peterson's solution. Because of the way modern computer 
architectures perform basic machine-language instructions, such as load and 
store, there are no guarantees that Peterson's solution will work correctly on 
such architectures. Howeve1~ we present the solution because it provides a good 
algorithmic description of solving the critical-section problem and illustrates 
some of the complexities involved in designing software that addresses the 
requirements of mutual exclusion, progress, and bomcded waiting. 
Peterson's solution is restricted to two processes that alternate execution 
between their critical sections and remainder sections. The processes are 
numbered Po and P1. For convenience, when presenting Pi, we use Pj to 
denote the other process; that is, j equals 1 - i. 
Peterson's solution requires the two processes to share two data items: 
int turn; 
boolean flag[2]; 
The variable turn indicates whose turn it is to enter its critical section. That is, 
if turn == i, then process Pi is allowed to execute in its critical section. The 
flag array is used to indicate if a process is ready to enter its critical section. 
For example, if flag [i] is true, this value indicates that Pi is ready to enter 
its critical section. With an explanation of these data structures complete, we 
are now ready to describe the algorithm shown in Figure 6.2. 
To enter the critical section, process Pi first sets flag [i] to be true and 
then sets turn to the value j, thereby asserting that if the other process wishes 
to enter the critical section, it can do so. If both processes try to enter at the same 
time, turn will be set to both i and j at roughly the sance time. Only one of these 
assignments will last; the other will occur but will be overwritten immediately. 

Chapter 6 
do { 
flag [i] = TRUE; 
turn= j; 
while (flag[j] && turn 
j); 
critical section 
I flag [i] = FALSE; I 
remainder section 
} while (TRUE); 
Figure 6.2 The structure of process A in Peterson's solution. 
The eventual value of turn determines which of the two processes is allowed 
to enter its critical section first. 
We now prove that this solution is correct. We need to show that: 
Mutual exclusion is preserved. 
The progress requirement is satisfied. 
The bounded-waiting requirement is met. 
To prove property 1, we note that each P; enters its critical section only 
if either flag [j] == false or turn == i. Also note that, if both processes 
can be executing in their critical sections at the same time, then flag [0] == 
flag [1] ==true. These two observations imply that Po and P1 could not have 
successfully executed their while statements at about the same time, since the 
value of turn can be either 0 or 1 but camwt be both. Hence, one of the processes 
-say, Pi -must have successfully executed the while statencent, whereas P; 
had to execute at least one additional statement ("turn== j"). However, at 
that time, flag [j] == true and turn == j, and this condition will persist as 
long as Pi is in its critical section; as a result, mutual exclusion is preserved. 
To prove properties 2 and 3, we note that a process P; can be prevented from 
entering the critical section only if it is stuck in the while loop with the condition 
flag [j] ==true and turn=== j; this loop is the only one possible. If Pi is not 
ready to enter the critical section, then flag [j] ==false, and P; can enter its 
critical section. If Pj has set flag [j] to true and is also executing in its while 
statement, then either turn === i or turn === j. If turn == i, then P; will enter 
the critical section. If turn== j, then Pi will enter the critical section. However, 
once Pi exits its critical section, it will reset flag [j] to false, allowing P; to 
enter its critical section. If Pi resets flag [j] to true, it must also set turn to i. 
Thus, since P; does not change the value of the variable turn while executing 
the while statement, P; will enter the critical section (progress) after at most 
one entry by P1 (bounded waiting). 

6.4 
6.4 

do { 
acquire lock 
critical section 
I release lock I 
remainder section 
} while (TRUE); 
Figure 6.3 Solution to the critical-section problem using locks. 
We have just described one software-based solution to the critical-section 
problem. However, as mentioned, software-based solutions such as Peterson's 
are not guaranteed to work on modern computer architectures. Instead, we 
can generally state that any solution to the critical-section problem requires a 
simple tool-a lock. Race conditions are prevented by requiring that critical 
regions be protected by locks. That is, a process must acquire a lock before 
entering a critical section; it releases the lock when it exits the critical section. 
This is illustrated in Figure 6.3. 
In the following discussions, we explore several more solutions to the 
critical-section problem using techniques ranging from hardware to software-
based APis available to application programmers. All these solutions are based 
on the premise of locking; however, as we shall see, the designs of such locks 
can be quite sophisticated. 
We start by presenting some simple hardware instructions that are available 
on many systems and showing how they can be used effectively in solving the 
critical-section problem. Hardware features can make any programming task 
easier and improve system efficiency. 
The critical-section problem could be solved simply in a uniprocessor envi-
ronment if we could prevent interrupts from occurring while a shared variable 
was being modified. In this manner, we could be sure that the current sequence 
of instructions would be allowed to execute in order without preemption. No 
other instructions would be run, so no unexpected modifications could be 
made to the shared variable. This is often the approach taken by nonpreemptive 
kernels. 
Unfortunately, this solution is not as feasible in a multiprocessor environ-
ment. Disabling interrupts on a multiprocessor can be time consuming, as the 
boolean TestAndSet(boolean *target) { 
boolean rv = *target; 
*target = TRUE; 
return rv; 
} 
Figure 6.4 The definition of the TestAndSet () instruction. 

Chapter 6 
do { 
while (TestAndSet(&lock)) 
; II do nothing 
II critical section 
lock = FALSE; 
II remainder section 
} while (TRUE); 
Figure 6.5 Mutual-exclusion implementation with TestAndSet (). 
message is passed to all the processors. This message passing delays entry into 
each critical section, and system efficiency decreases. Also consider the effect 
on a system's clock if the clock is kept updated by interrupts. 
Many modern computer systems therefore provide special hardware 
instructions that allow us either to test and modify the content of a word or 
to swap the contents of two words 
is, as one unin.terruptible 
unit. We can use these special instructions to solve the critical-section problem 
in a relatively simple manner. Rather than discussing one specific instruction 
for one specific machine, we abstract the main concepts behind these types of 
instructions by describing the TestAndSet () and Swap() instructions. 
The TestAndSet () instruction can be defined as shown in Figure 6.4. The 
important characteristic of this instruction is that it is executed atomically. 
Thus, if two TestAndSet () instructions are executed simultaneously (each on 
a different CPU), they will be executed sequentially in some arbitrary order. If 
the machine supports the TestAndSet () instruction, then we can implement 
mutual exclusion by declaring a Boolean variable lock, initialized to false. 
The structure of process P; is shown in Figure 6.5. 
The Swap() instruction, in contrast to the TestAndSet () instruction, 
operates on the contents of two words; it is defined as shown in Figure 6.6. 
Like the TestAndSet () instruction, it is executed atomically. If the machine 
supports the Swap() instruction, then mutual exclusion can be provided as 
follows. A global Boolean variable lock is declared and is initialized to false. 
In addition, each process has a local Boolean variable key. The structure of 
process P; is shown in Figure 6.7. 
Although these algorithms satisfy the mutual-exclusion requirement, they 
do not satisfy the bounded-waiting requirement. In Figure 6.8, we present 
another algorithm using the TestAndSet () instruction that satisfies all the 
critical-section requirements. The common data structures are 
void Swap(boolean *a, boolean *b) { 
boolean temp = *a; 
*a 
*b; 
*b = temp; 
} 
Figure 6.6 The definition of the Swap () instruction. 

6.4 
do { 
key = TRUE; 
while (key == TRUE) 
Swap(&lock, &key); 
II critical section 
lock = FALSE; 
II remainder section 
} while (TRUE); 
Figure 6.7 Mutual-exclusion implementation with the Swap() instruction. 
boolean waiting[n]; 
boolean lock; 

These data structures are initialized to false. To prove that the mutual-
exclusion requirement is met, we note that process P; can enter its critical 
section only if either waiting [i] == false or key == false. The value 
of key can become false only if the TestAndSet () is executed. The first 
process to execute the TestAndSet () will find key== false; all others must 
wait. The variable waiting [i] can become false only if another process 
leaves its critical section; only one waiting [i] is set to false, maintaining the 
mutual-exclusion requirement. 
do { 
waiting[i] = TRUE; 
key = TRUE; 
while (waiting[i] && key) 
key= TestAndSet(&lock); 
waiting[i] = FALSE; 
II critical section 
j = (i + 1) % n; 
while ((j != i) && !waiting[j]) 
j = (j + 1) % n; 
if (j == i) 
lock = FALSE; 
else 
waiting[j] = FALSE; 
II remainder section 
} while (TRUE) ; 
Figure 6.8 Bounded-waiting mutual exclusion with TestAndSet (). 

Chapter 6 
6.5 
To prove that the progress requirement is met, we note that the arguments 
presented for mutual exclusion also apply here, since a process exiting the 
critical section either sets lock to false or sets waiting[j] to false. Both 
allow a process that is waiting to enter its critical section to proceed. 
To prove that the bounded-waiting requirement is met, we note that, when 
a process leaves its critical section, it scans the array waiting in the cyclic 
ordering (i + 1, i + 2, ... , n 
1, 0, ... , i 
1). It designates the first process in this 
ordering that is in the entry section (waiting[j] ==true) as the next one to 
enter the critical section. Any process waiting to enter its critical section will 
thus do so within n - 1 turns. 
Unfortunately for hardware designers, implementing atomic TestAnd-
Set () instructions on multiprocessors is not a trivial task. Such implementa-
tions are discussed in books on computer architecture. 
The hardware-based solutions to the critical-section problem presented in 
Section 6.4 are complicated for application programmers to use. To overcmrte 
this difficulty, we can use a synchronization tool called a 
A semaphore S is an integer variable that, apart from initialization, is 
accessed only through two standard atomic operations: wait () and signal (). 
The wait () operation was originally termed P (from the Dutch proberen, "to 
test"); signal() was originally called V (from verhogen, "to increment"). The 
definition of wait () is as follows: 
wait(S) { 
} 
while S <= 0 
II no-op 
s--· ' 
The definition of signal() is as follows: 
signal(S) { 
S++; 
} 
All modifications to the integer value of the semaphore in the wait () and 
signal() operations must be executed indivisibly. That is, when one process 
modifies the semaphore value, no other process can simultaneously modify 
that same semaphore value. In addition, in the case of wait (S), the testing of 
the integer value of S (S :S 0), as well as its possible modification (S--), must 
be executed without interruption. We shall see how these operations can be 
implemented in Section 6.5.2; first, let us see how semaphores can be used. 
6.5.1 Usage 
Operating systems often distinguish between counting and binary semaphores. 
The value of a counting semaphore can range over an unrestricted domain. 
The value of a binary semaphore can range only between 0 and 1. On some 

6.5 

systems, binary semaphores are lmown as mutex locks, as they are locks that 
provide mutual exclusion. 
We can use binary semaphores to deal with the critical-section problem £or 
mlJltiple processes. Then processes share a semaphore, mutex, initialized to 1. 
Each process Pi is organized as shown in Figure 6.9. 
Counting semaphores can be used to control access to a given resource 
consisting of a finite number o£ instances. The semaphore is initialized to the 
number of resources available. Each process that wishes to use a resource 
performs a wait() operation on the semaphore (thereby decrementing the 
count). When a process releases a resource, it performs a signal() operation 
(incrementing the count). When the count for the semaphore goes to 0, all 
resources are being used. After that, processes that wish to use a resource will 
block until the count becomes greater than 0. 
We can also use semaphores to solve various synchronization problems. 
For example, consider two concurrently numing processes: P1 with a statement 
51 and P2 with a statement 52. Suppose we require that 52 be executed only 
after 51 has completed. We can implement this scheme readily by letting P1 
and P2 share a common semaphore synch, initialized to 0, and by inserting the 
statements 
51; 
signal(synch) ; 
in process P1 and the statements 
wait(synch); 
52; 
in process P2. Because synch is initialized to 0, P2 will execute 52 only after P1 
has invoked signal (synch), which is after statement 51 has been executed. 
6.5.2 Implementation 
The main disadvantage of the semaphore definition given here is thatit requires 
While a process is in its critical section, any other process that 
tries to enter its critical section must loop continuously in the entry code. This 
continual looping is clearly a problem in a real multiprogramming system, 
do { 
wait (mutex) ; 
II critical section 
signal(mutex); 
II remainder section 
} while (TRUE); 
Figure 6.9 Mutual-exclusion implementation with semaphores. 

Chapter 6 
where a single CPU is shared among ncany processes. Busy waiting wastes 
CPU cycles that some other process might be able to use productively. This 
type of semaphore is also called a 
because the process "spins" while 
waiting for the lock. (Spinlocks do have an advantage in that no context switch 
is required when a process must wait on a lock, and a context switch may 
take considerable time. Thus, when locks are expected to be held for short 
times, spinlocks are useful; they are often employed on multiprocessor systems 
where one thread can "spin" on one processor while another thread performs 
its critical section on another processor.) 
To overcome the need for busy waiting, we can modify the definition of 
the wait() and signal() semaphore operations. When a process executes the 
wait () operation and finds that the semaphore value is not positive, it must 
wait. However, rather than engaging in busy waiting, the process can block 
itself. The block operation places a process into a waiting queue associated 
with the semaphore, and the state of the process is switched to the waiting 
state. Then control is transferred to the CPU scheduler, which selects another 
process to execute. 
A process that is blocked, waiting on a semaphore S, should be restarted 
when some other process executes a signal() operation. The process is 
restarted by a wakeup () operation, which changes the process from the waiting 
state to the ready state. The process is then placed in the ready queue. (The 
CPU may or may not be switched from the running process to the newly ready 
process, depending on the CPU-scheduling algorithm.) 
To implement semaphores under this definition, we define a semaphore as 
a "C' struct: 
typedef struct { 
int value; 
struct process *list; 
} semaphore; 
Each semaphore has an integer value and a list of processes list. When 
a process must wait on a semaphore, it is added to the list of processes. A 
signal() operation removes one process from the list of waiting processes 
and awakens that process. 
The wait() semaphore operation can now be defined as 
wait(semaphore *S) { 
S->value--; 
} 
if (S->value < 0) { 
} 
add this process to S->list; 
block(); 
The signal () semaphore operation can now be defined as 

signal(semaphore *S) { 
S->value++; 
if (S->value <= 0) { 
6.5 
remove a process P fron< S->list; 
wakeup(P); 
} 
} 

The block() operation suspends the process that invokes it. The wakeup(P) 
operation resumes the execution of a blocked process P. These two operations 
are provided by the operating system as basic system calls. 
Note that in this implementation, semaphore values may be negative, 
although semaphore values are never negative under the classical definition of 
semaphores with busy waiting. If a semaphore value is negative, its magnitude 
is the number of processes waiting on that semaphore. This fact results from 
switching the order of the decrement and the test in the implementation of the 
wait () operation. 
The list of waiting processes can be easily implemented by a link field in 
each process control block (PCB). Each semaphore contains an integer value and 
a pointer to a list of PCBs. One way to add and rernove processes from the list 
so as to ensure bounded waiting is to use a FIFO queue, where the semaphore 
contains both head and tail pointers to the queue. In general, howeve1~ the list 
can use any queueing strategy. Correct usage of semaphores does not depend 
on a particular queueing strategy for the semaphore lists. 
It is critical that semaphores be executed atomically. We must guarantee 
that no two processes can execute wait() and signal() operations on the 
same semaphore at the same time. This is a critical-section problem; and 
in a single-processor environment (that is, where only one CPU exists), we 
can solve it by simply inhibiting interrupts during the time the wait() and 
signal() operations are executing. This scheme works in a single-processor 
environment because, once interrupts are inhibited, instructions from different 
processes cannot be interleaved. Only the currently running process executes 
until interrupts are reenabled and the scheduler can regain control. 
In a multiprocessor environment, interrupts must be disabled on every 
processor; otherwise, instructions from different processes (running on differ-
ent processors) may be interleaved in some arbitrary way. Disabling interrupts 
on every processor can be a difficult task and furthermore can seriously dimin-
ish performance. Therefore, SMP systems must provide alternative locking 
techniques-such as spinlocks-to ensure that wait() and signal() are 
performed atomically. 
It is important to admit that we have not completely eliminated busy 
waiting with this definition of the wait () and signal () operations. Rather, 
we have moved busy waiting from the entry section to the critical sections 
of application programs. Furthermore, we have limited busy waiting to the 
critical sections of the wait () and signal () opera times, and these sections are 
short (if properly coded, they sbould be no more than about ten instructions). 
Thus, the critical section is almost never occupied, and busy waiting occurs 
rarely, and then for only a short time. An entirely different situation exists 
with application programs whose critical sections may be long (minutes or 

Chapter 6 
even hours) or may almost always be occupied. In such casesf busy waiting is 
extremely inefficient. 
6.5.3 Deadlocks and Starvation 
The implementation of a semaphore with a waiting queue may result in a 
situation where two or more processes are waiting indefinitely for an event 
that can be caused only by one of the waiting processes. The event in question 
is the execution of a signal() 
When such a state is reached, these 
processes are said to be 
To illustrate this, we consider a system consisting of two processes, Po and 
P1, each accessing two semaphores, S and Q, set to the value 1: 
Po 
wait(S); 
wait(Q); 
signal(S); 
signal(Q); 
pl 
wait(Q); 
wait(S); 
signal(Q); 
signal(S); 
Suppose that Po executes wait (S) and then P1 executes wait (Q). When Po 
executes wait (Q), it must wait until P1 executes signal (Q). Similarly, when 
P1 executes wait (S), it must wait until Po executes signal(S). Since these 
signal() operations cam1ot be executed, Po and P1 are deadlocked. 
We say that a set of processes is in a deadlock state when every process 
in the set is waiting for an event that can be caused only by another process 
in the set. The events with which we are mainly concerned here are resource 
acquisition and release. However, other types of events may result in deadlocks, 
as we show in Chapter 7. In that chapter, we describe various mechanisms for 
dealing with the deadlock problem. 
Another problem related to deadlocks is 
or 
a situation in which processes wait indefinitely within the semaphore. 
Indefinite blocking may occur if we remove processes from the list associated 
with a semaphore in LIFO (last-in, first-out) order. 
6.5.4 Priority Inversion 
A scheduling challenge arises when a higher-priority process needs to read 
or modify kernel data that are currently being accessed by a lower-priority 
process-or a chain of lower-priority processes. Since kernel data are typically 
protected with a lock, the higher-priority process will have to wait for a 
lower-priority one to finish with the resource. The situation becomes more 
complicated if the lower-priority process is preempted in favor of another 
process with a higher priority. As an example, assume we have three processes, 
Lf M, and H, whose priorities follow the order L < M < H. Assume that 
process H requires resource R, which is currently being accessed by process L. 
Ordinarily, process H would wait for L to finish using resource R. However, 
now suppose that process M becomes runnable, thereby preempting process 

6.6 
6.6 

PRIORITY INVERSION AND THE MARS PATHFINDER 
Priority inversion can be more than a scheduling inconvenience. On systems 
with tight time constraints (such as real-time systems-see Chapter 19), 
priority inversion can cause a process to take longer than it should to 
accomplish a task. When that happens, other failures can cascade, resulting 
in system failure. 
Consider the Mars Pathfinde1~ a NASA space probe that landed a robot, the 
Sojourner rove1~ on Mars in 1997 to conduct experiments. Shortly after the 
Sojourner began operating, it started to experience frequent computer resets. 
Each reset reinitialized all hardware and software, including communica-
tions. If the problem had not been solved, the Sojourner would have failed in 
its mission. 
The problem was caused by the fact that one high-priority task, "bcdist," 
was taking longer than expected to complete its work. This task was being 
forced to wait for a shared resource that was held by the lower-priority 
"ASI/MET" task, which in turn was preempted by multiple medium-priority 
tasks. The "bcdist" task would stall waiting for the shared resource, and 
ultimately the "bc_sched" task would discover the problem and perform the 
reset. The Sojourner was suffering from a typical case of priority inversion. 
The operating system on the Sojourner was VxWorks (see Section 19.6), 
which had a global variable to enable priority inheritance on all semaphores. 
After testing, the variable was set on the Sojourner (on Mars!), and the 
problem was solved. 
A full description of the problem, its detection, and its solu-
tion was written by the software team lead and is available at 
research.microsoft.com/ mbj /MarsYathfinder I Authoritative_Account.html. 
L. Indirectly, a process with a lower priority-process M-has affected how 
long process H must wait for L to relinquish resource R. 
This problem is known as 
It occurs only in systems with 
more than two priorities, so one solution is to have only two priorities. That is 
insufficient for most general-purpose operating systems, however. Typically 
these systems solve the problem by implementing a 
2Tic?x,u" 
:. According to this protocol, all processes that are accessing resources 
needed by a higher-priority process inherit the higher priority until they are 
finished with the resources in question. When they are finished, their priorities 
revert to their original values. In the exan1.ple above, a priority-inheritance 
protocol would allow process L to temporarily inherit the priority of process 
H, thereby preventing process M from preempting its execution. When process 
L had finished using resource R, it would relinquish its inherited priority from 
Hand assume its original priority. Because resource R would now be available, 
process H-not M-would run next. 
In this section, we present a number of synchronization problems as examples 
of a large class of concurrency-control problems. These problems are used for 

Chapter 6 
do { 
II produce an item in nextp 
wait(empty); 
wait(mutex); 
II add nextp to buffer 
signal(mutex); 
signal(full); 
} while (TRUE); 
Figure 6.10 The structure of the producer process. 
testing nearly every newly proposed synchronization scheme. In our solutions 
to the problems, we use semaphores for synchronization. 
6.6.1 The Bounded-Buffer Problem 
The bounded-buffer problem was introduced in Section 6.1; it is commonly used 
to illustrate the power of synchronization primitives. Here, we present a 
general structure of this scheme without committing ourselves to any particular 
implementation; we provide a related programming project in the exercises at 
the end of the chapter. 
We assume that the pool consists of n buffers, each capable of holding 
one item. The mutex semaphore provides mutual exclusion for accesses to the 
buffer pool and is initialized to the value 1. The empty and full semaphores 
comct the number of empty and full buffers. The semaphore empty is initialized 
to the value n; the semaphore full is initialized to the value 0. 
The code for the producer process is shown in Figure 6.10; the code for 
the consumer process is shown in Figure 6.11. Note the symmetry between 
the producer and the consumer. We can interpret this code as the producer 
producing full buffers for the consumer or as the consumer producing empty 
buffers for the producer. 
do { 
wait (full); 
wait (mutex) ; 
II remove an item from buffer to nextc 
signal(mutex); 
signal(empty); 
II consume the item in nextc 
} while (TRUE); 
Figure 6.11 The structure of the consumer process. 

6.6 

6.6.2 The Readers-Writers Problem 
Suppose that a database is to be shared among several concurrent processes. 
Some of these processes may want only to read the database, whereas others 
may want to update (that is, to read and write) the database. We distinguish 
between these two types of processes by referring to the former as readers 
and to the latter as writers. Obviously, if two readers access the shared data 
simultaneously, no adverse effects will result. However, if a writer and some 
other process (either a reader or a writer) access the database simultaneously, 
chaos may ensue. 
To ensure that these difficulties do not arise, we require that the writers 
have exclusive access to the shared database while writing to the database. This 
synchronization problem is referred to as the readers-writers problem. Since it 
was originally stated, it has been used to test nearly every new synchronization 
primitive. The readers-writers problem has several variations, all involving 
priorities. The simplest one, referred to as the first readers-writers problem, 
requires that no reader be kept waiting unless a writer has already obtained 
permission to use the shared object. In other words, no reader should wait for 
other readers to finish simply because a writer is waiting. The second readers-
writers problem requires that, once a writer is ready, that writer performs its 
write as soon as possible. In other words, if a writer is waiting to access the 
object, no new readers may start reading. 
A solution to either problem may result in starvation. In the first case, 
writers may starve; in the second case, readers may starve. For this reason, 
other variants of the problem have been proposed. Next, we present a solution 
to the first readers-writers problem. Refer to the bibliographical notes at the 
end of the chapter for references describing starvation-free solutions to the 
second readers-writers problem. 
In the solution to the first readers-writers problem, the reader processes 
share the following data structures: 
semaphore mutex, wrt; 
int readcount; 
The semaphores mutex and wrt are initialized to 1; readcount is initialized 
to 0. The semaphore wrt is common to both reader and writer processes. 
The mutex semaphore is used to ensure mutual exclusion when the variable 
readcount is updated. The readcount variable keeps track of how many 
processes are currently reading the object. The semaphore wrt functions as a 
mutual-exclusion semaphore for the writers. It is also used by the first or last 
reader that enters or exits the critical section. It is not used by readers who 
enter or exit while other readers are in their critical sections. 
The code for a writer process is shown in Figure 6.12; the code for a reader 
process is shown in Figure 6.13. Note that, if a writer is in the critical section 
and n readers are waiting, then one reader is queued on wrt, and n- 1 readers 
are queued on mutex. Also observe that, when a writer executes signal ( wrt), 
we may resume the execution of either the waiting readers or a single waiting 
writer. The selection is made by the scheduler. 
The readers-writers problem and its solutions have been generalized to 
provide 
locks on some systems. Acquiring a reader-writer lock 

Chapter 6 
do { 
wait(wrt); 
II writing is performed 
signal(wrt); 
} while (TRUE); 
Figure 6. i 2 The structure of a writer process. 
requires specifying the mode of the lock either read or write access. When a 
process wishes only to read shared data, it requests the reader-writer lock 
in read mode; a process wishing to modify the shared data must request the 
lock in write mode. Multiple processes are permitted to concurrently acquire 
a reader-writer lock in read mode, but only one process may acquire the lock 
for writing, as exclusive access is required for writers. 
Reader-writer locks are most useful in the following situations: 
In applications where it is easy to identify which processes only read shared 
data and which processes only write shared data. 
In applications that have more readers than writers. This is because reader-
writer locks generally require more overhead to establish than semaphores 
or mutual-exclusion locks. The increased concurrency of allowing multiple 
readers compensates for the overhead involved in setting up the reader-
writer lock. 
6.6.3 The Dining-Philosophers Problem 
Consider five philosophers who spend their lives thinking and eating. The 
philosophers share a circular table surrounded by five chairs, each belonging 
do { 
wait (mutex); 
readcount++; 
if (readcount 
1) 
wait (wrt); 
signal(mutex); 
II reading is performed 
wait(mutex); 
readcount--; 
if (readcount 
0) 
signal(wrt); 
signal(mutex); 
} while (TRUE); 
Figure 6.13 The structure of a reader process. 

6.6 

Figure 6.14 The situation of the dining philosophers. 
to one philosopher. In the center of the table is a bowl of rice, and the table is laid 
with five single chopsticks (Figure 6.14). When a philosopher thinks, she does 
not interact with her colleagues. From time to time, a philosopher gets hungry 
and tries to pick up the two chopsticks that are closest to her (the chopsticks 
that are between her and her left and right neighbors). A philosopher may pick 
up only one chopstick at a time. Obviously, she cam1ot pick up a chopstick that 
is already in the hand of a neighbor. When a htmgry philosopher has both her 
chopsticks at the same time, she eats without releasing her chopsticks. When 
she is finished eating, she puts down both of her chopsticks and starts thinking 
again. 
The dining-philosophers problem is considered a classic synchronization 
problem neither because of its practical importance nor because computer 
scientists dislike philosophers but because it is an example of a large class 
of concurrency-control problems. It is a simple representation of the need 
to allocate several resources among several processes in a deadlock-free and 
starvation-free mam1er. 
One simple solution is to represent each chopstick with a semaphore. A 
philosopher tries to grab a chopstick by executing await () operation on that 
semaphore; she releases her chopsticks by executing the signal() operation 
on the appropriate semaphores. Thus, the shared data are 
semaphore chopstick[5]; 
where all the elements of chopstick are initialized to 1. The structure of 
philosopher i is shown in Figure 6.15. 
Although this solution guarantees that no two neighbors are eating 
simultaneously, it nevertheless must be rejected because it could create a 
deadlock. Suppose that all five philosophers become hungry simultaneously 
and each grabs her left chopstick. All the elements of chopstick will now be 
equal to 0. When each philosopher tries to grab her right chopstick, she will be 
delayed forever. 
Several possible remedies to the deadlock problem are listed next. 
Allow at most four philosophers to be sitting simultaneously at the table. 

Chapter 6 
6.7 
do { 
wait(chopstick[i]); 
wait(chopstick[(i+l) % 5]); 
I I eat 
signal(chopstick[i]); 
signal(chopstick[(i+l) % 5]); 
II think 
} while (TRUE); 
Figure 6.15 The structure of philosopher i. 
Allow a philosopher to pick up her chopsticks only if both chopsticks are 
available (to do this, she must pick them up in a critical section). 
Use an asymmetric solution; that is, an odd philosopher picks up first her 
left chopstick and then her right chopstick, whereas an even philosopher 
picks up her right chopstick and then her left chopstick 
In Section 6.7, we present a solution to the dining-philosophers problem 
that ensures freedom from deadlocks. Note, however, that any satisfactory 
solution to the dining-philosophers problem must guard against the possibility 
that one of the philosophers will starve to death. A deadlock-free solution does 
not necessarily eliminate the possibility of starvation. 
Although semaphores provide a convenient and effective mechanism for 
process synchronization, using them incorrectly can result in timing errors 
that are difficult to detect, since these errors happen only if some particular 
execution sequences take place and these sequences do not always occur. 
We have seen an example of such errors in the use of counters in our 
solution to the producer-consumer problem (Section 6.1). In that example, 
the timing problem happened only rarely, and even then the counter value 
appeared to be reasonable-off by only 1. Nevertheless, the solution is 
obviously not an acceptable one. It is for this reason that semaphores were 
introduced in the first place. 
Unfortunately, such timing errors can still occur when semaphores are 
used. To illustrate how, we review the semaphore solution to the critical-section 
problem. All processes share a semaphore variable mutex, which is initialized 
to 1. Each process must execute wait (mutex) before entering the critical section 
and signal (mutex) afterward. If this sequence is not observed, two processes 
may be in their critical sections simultaneously. Next, we examine the various 
difficulties that may result. Note that these difficulties will arise even if a 
single process is not well behaved. This situation may be caused by an honest 
programming error or an uncooperative programmer. 

7.1 
CH 
ER 
In a multiprogramming environment, several processes may compete for a 
finite number of resources. A process requests resources; if the resources are 
not available at that time, the process enters a waiting state. Sometimes, a 
waiting process is never again able to change state, because the resources it 
has requested are held by other waiting processes. This situation is called 
a deadlock We discussed this issue briefly in Chapter 6 in cmmection with 
semaphores. 
Perhaps the best illustration of a deadlock can be drawn from a law passed 
by the Kansas legislature early in the 20th century. It said, in part: "When two 
trains approach each other at a crossing, both shall come to a full stop and 
neither shall start up again until the other has gone." 
In this chapter, we describe methods that an operating system can use 
to prevent or deal with deadlocks. Although some applications can identify 
programs that may deadlock, operating systems typically do not provide 
deadlock-prevention facilities, and it remains the responsibility of program-
mers to ensure that they design deadlock-free programs. Deadlock problems 
can only become more common, given current trends, including larger num-
bers of processes, multithreaded programs, many more resources withirt a 
system, and an emphasis on long-lived file and database servers rather than 
batch systems. 
To develop a description of deadlocks, which prevent sets of concurrent 
processes from completing their tasks. 
To present a number of different methods for preventing or avoiding 
deadlocks in a computer system. 
A system consists of a finite number of resources to be distributed among 
a number of competing processes. The resources are partitioned into several 

Chapter 7 
types, each consisting of some number of identical instances. Memory space, 
CPU cycles, files, and I/0 devices (such as printers and DVD drives) are examples 
of resource types. If a system has two CPUs, then the resource type CPU has 
two instances. Similarly, the resource type printer may have five instances. 
If a process requests an instance of a resource type, the allocation of any 
instance of the type will satisfy the request. If it will not, then the instances are 
not identical, and the resource type classes have not been defined properly. For 
example, a system may have two printers. These two printers may be defined to 
be in the same resource class if no one cares which printer prints which output. 
However, if one printer is on the ninth floor and the other is in the basement, 
then people on the ninth floor may not see both printers as equivalent, and 
separate resource classes may need to be defined for each printer. 
A process must request a resource before using it and must release the 
resource after using it. A process may request as many resources as it requires 
to carry out its designated task. Obviously, the number of resources requested 
may not exceed the total number of resources available in the system. In other 
words, a process cannot request three printers if the system has only two. 
Under the normal mode of operation, a process may utilize a resource in 
only the following sequence: 
Request. The process requests the resource. If the request cannot be 
granted immediately (for example, if the resource is being used by another 
process), then the requesting process must wait until it can acquire the 
resource. 
Use. The process can operate on the resource (for example, if the resource 
is a printer, the process can print on the printer). 
Release. The process releases the resource. 
The request and release of resources are system calls, as explained in 
Chapter 2. Examples are the request() and release() device, open() and 
close() file, and allocate() and free() memory system calls. Request and 
release of resources that are not managed by the operating system can be 
accomplished through the wait() and signal() operations on semaphores 
or through acquisition and release of a mutex lock. For each use of a kernel-
managed resource by a process or thread, the operating system checks to 
make sure that the process has requested and has been allocated the resource. 
A system table records whether each resource is free or allocated; for each 
resource that is allocated, the table also records the process to which it is 
allocated. If a process requests a resource that is currently allocated to another 
process, it can be added to a queue of processes waiting for this resource. 
A set of processes is in a deadlocked state when every process in the set is 
waiting for an event that can be caused only by another process in the set. The 
events with which we are mainly concerned here are resource acquisition and 
release. The resources may be either physical resources (for example, printers, 
tape drives, memory space, and CPU cycles) or logical resources (for example, 
files, semaphores, and monitors). However, other types of events may result in 
deadlocks (for example, the IPC facilities discussed in Chapter 3). 
To illustrate a deadlocked state, consider a system with three CD RW drives. 
Suppose each of three processes holds one of these CD RW drives. If each process 

7.2 
7.2 

now requests another drive, the three processes will be in a deadlocked state. 
Each is waiting for the event "CD RW is released," which can be caused only 
by one of the other waiting processes. This example illustrates a deadlock 
involving the same resource type. 
Deadlocks may also involve different resource types. For example, consider 
a system with one printer and one DVD drive. Suppose that process P; is holding 
the DVD and process Pi is holding the printer. If P; requests the printer and P1 
requests the DVD drive, a deadlock occurs. 
A programmer who is developing multithreaded applications must pay 
particular attention to this problem. Multithreaded programs are good candi-
dates for deadlock because multiple threads can compete for shared resources. 
In a deadlock, processes never finish executing, and system resources are tied 
up, preventing other jobs from starting. Before we discuss the various methods 
for dealing with the deadlock problem, we look more closely at features that 
characterize deadlocks. 
7.2.1 Necessary Conditions 
A deadlock situation can arise if the following four conditions hold simultane-
ously in a system: 
Mutual exclusion. At least one resource must be held in a nonsharable 
mode; that is, only one process at a time can use the resource. If another 
DEADLOCK WITH MUTEX LOCKS 
Let's see how deadlock can occur in a multithreaded Pthread program 
using mutex locks. The pthread....mutex_ini t () function initializes 
an unlocked mutex. Mutex locks are acquired and released using 
pthread....mutex_lock() 
and 
pthread....mutex_unlock (), 
respec-
tively. If a thread attempts to acquire a locked mutex, the call to 
pthread....mutex_lock 0 blocks the thread until the owner of the mutex 
lock invokes pthread....mutex_unlock (). 
Two mutex locks are created in the following code example: 
I* Create and initialize the mutex locks *I 
pthread....mutex_t first....mutex; 
pthread....mutex_t second_nmtex; 
pthread....mutex_ini t (&first....mutex, NULL) ; 
pthread....mutex_ini t (&second....mutex, NULL) ; 
Next, two threads-thread_one and thread_two-'-are created, and both 
these threads have access to both mutex locks. thread_one and thread_ two 
run in the functions do_work_one () and do_work_two (), respectively, as 
shown in Figure 7.1. 

Chapter 7 
DEADLOCK WITH MUTEX LOCKS (Continued) 
I* thread_one runs in this function *I 
void *do_work_one(void *param) 
{ 
} 
pthread_mutex_lock(&first_mutex); 
pthread_mutex_lock(&second_mutex); 
I** 
* Do some work 
*I 
pthread_mutex:_unlock (&second_mutex) ; 
pthread_mutex_unlock(&first_mutex); 
pthread_exit ( 0) ; 
I* thread_two runs in this function *I 
void *do_work_two(void *param) 
{ 
} 
pthread_mutex_lock (&second_mutex) ; 
pthread_mutex_lock(&first_mutex); 
I** 
* Do some work 
*I 
pthread_mutex_unlock (&first_mutex) ; 
pthread_mutex_unlock (&second_mutex) ; 
pthread_exi t ( 0) ; 
Figure 7.1 
Deadlock example. 
In this example, thread_one attempts to acquire the mutex locks in the 
order (1) first_mutex, (2) second_mutex, while thread_two attempts to 
acquire the mutex locks in the order (1) second__mutex, (2) first_mutex. 
Deadlock is possible if thread_one acquires first __mutex while thread_ two 
aacquites second__mutex. 
Note that, even though deadlock is possible, it will not occur if thread_one 
is able to acquire and release the mutex locks for first_mutex and sec-
ond_mutex before thread_two attemptsto acquire the locks. This example 
illustrates a problem with handling deadlocks: it is difficult to identify and 
test for deadlocks that may occur only under certain circumstances. 
process requests that resource, the requesting process must be delayed 
until the resource has been released. 
Hold and wait. A process must be holding at least one resource and 
waiting to acquire additional resources that are cmrently being held by 
other processes. 

7.2 

No preemption. Resources cannot be preempted; that is, a resource can 
be released only voluntarily by the process holding it, after that process 
has completed its task. 
Circular wait. A set { P0, Pl, ... , P11 } of waiting processes must exist such 
that Po is waiting for a resource held by P1, P1 is waiting for a resource 
held by P2, ... , Pn-1 is waiting for a resource held by P,v and P11 is waiting 
for a resource held by Po. 
We emphasize that all four conditions must hold for a deadlock to 
occur. The circular-wait condition implies the hold-and-wait condition, so the 
four conditions are not completely independent. We shall see in Section 7.4, 
however, that it is useful to consider each condition separately. 
7.2.2 Resource-Allocation Graph 
Deadlocks can be described more precisely in terms of a directed graph called 
a 
graph. This graph consists of a set of vertices V 
and a set of edges E. The set of vertices Vis partitioned into two different types 
of nodes: P == { P1, P2, ... , Pn}, the set consisting of all the active processes in the 
system, and R == {R1, R2, ... , RmL the set consisting of all resource types in the 
system. 
A directed edge from process g to resource type Rj is denoted by P; -+ Rj; 
it signifies that process P; has requested an instance of resource type Rj and 
is currently waiting for that resource. A directed edge from resource type Rj 
to process P; is denoted by R1 -+ P;; it signifies that an instance of resource 
type R1 has been allocated to process P;. A directed edge P; -+ Rj is called a 
edge; a directed edge R1 -+ P; is called an 
Pictorially we represent each process P; as a circle and each resource type 
Rj as a rectangle. Since resource type Ri may have more than one instance, we 
represent each such instance as a dot within the rectangle. Note that a request 
edge points to only the rectangle R1, whereas an assignment edge must also 
designate one of the dots in the rectangle. 
When process P; requests an instance of resource type Ri, a request edge 
is inserted in the resource-allocation graph. When this request can be fulfilled, 
the request edge is instantaneously transformed to an assignment edge. When 
the process no longer needs access to the resource, it releases the resource; as a 
result, the assignment edge is deleted. 
The resource-allocation graph shown in Figure 7.2 depicts the following 
situation. 
The sets P, K and E: 
o P == {P1, P2, P3} 
oR== {R1, R2, R3, ~} 
0 E == {Pl-+ RlF p2-+ R3F Rl-+ p2F R2-+ p2F R2-+ Pl, R3-+ P3} 
Resource instances: 
o One instance of resource type R1 
o Two instances of resource type R2 

Chapter 7 
Figure 7.2 Resource-allocation graph. 
o One instance of resource type R3 
o Three instances of resource type ~ 
Process states: 
o Process P1 is holding an instance of resource type R2 and is waiting for 
an instance of resource type R1 . 
o Process P2 is holding an instance of R1 and an instance of R2 and is 
waiting for an instance of R3. 
o Process P3 is holding an instance of R3. 
Given the definition of a resource-allocation graph, it can be shown that, if 
the graph contains no cycles, then no process in the system is deadlocked. If 
the graph does contain a cycle, then a deadlock may exist. 
If each resource type has exactly one instance, then a cycle implies that a 
deadlock has occurred. If the cycle involves only a set of resource types, each 
of which has only a single instance, then a deadlock has occurred. Each process 
involved in the cycle is deadlocked. In this case, a cycle in the graph is both a 
necessary and a sufficient condition for the existence of deadlock. 
If each resource type has several instances, then a cycle does not necessarily 
imply that a deadlock has occurred. In this case, a cycle in. the graph is a 
necessary but not a sufficient condition for the existence of deadlock. 
To illustrate this concept, we return to the resource-allocation graph 
depicted in Figure 7.2. Suppose that process P3 requests an instance of resource 
type R2. Since no resource instance is currently available, a request edge P3 ---+ 
R2 is added to the graph (Figure 7.3). At this point, two minimal cycles exist in 
the system: 
P1 ---+ R 1 ---+ P2 ---+ R3 ---+ P3 ---+ R2 ---+ P1 
P2 ---+ R3 ---+ P3 ---+ R2 ---+ P2 

7.2 Deadlock Characterization 

Figure 7.3 Resource-allocation graph with a deadlock. 
Processes P1, Pz, and P3 are deadlocked. Process Pz is waiting for the resource 
R3, which is held by process P3. Process P3 is waiting for either process P1 or 
process Pz to release resource R2. In addition, process P1 is waiting for process 
Pz to release resource R1. 
Now consider the resource-allocation graph in Figure 7.4. In this example, 
we also have a cycle: 
However, there is no deadlock. Observe that process P4 may release its instance 
of resource type R2. That resource can then be allocated to P3, breaking the cycle. 
In summary, if a resource-allocation graph does not have a cycle, then the 
system is not in a deadlocked state. If there is a cycle, then the system may or 
may not be in a deadlocked state. This observation is important when we deal 
with the deadlock problem. 
Figure 7.4 Resource-allocation graph with a cycle but no deadlock. 

Chapter 7 
7.3 
Generally speaking, we can deal with the deadlock problem in one of three 
ways: 
We can use a protocol to prevent or avoid deadlocks, ensuring that the 
system will never enter a deadlocked state. 
We can allow the system to enter a deadlocked state, detect it, and recover. 
We can ignore the problem altogether and pretend that deadlocks never 
occur in the system. 
The third solution is the one used by most operating systems, including UNIX 
and Windows; it is then up to the application developer to write programs that 
handle deadlocks. 
Next, we elaborate briefly on each of the three methods for handling 
deadlocks. Then, in Sections 7.4 through 7.7, we present detailed algorithms. 
Before proceeding, we should mention that some researchers have argued that 
none of the basic approaches alone is appropriate for the entire spectrum of 
resource-allocation problems in operating systems. The basic approaches can 
be combined, however, allowing us to select an optimal approach for each class 
of resources in a system. 
To ensure that deadlocks never occur, the 
prevention or a deadlock-avoidance scheme. 
provides 
a set of methods for ensuring that at least one of the necessary conditions 
(Section 7.2.1) cannot hold. These methods prevent deadlocks by constraining 
how requests for resources can be made. We discuss these methods in 
Section 7.4. 
requires that the operating system be given in 
advance additional information concerning which resources a process will 
request and use during its lifetime. With this additional knowledge, it can 
decide for each request whether or not the process should wait. To decide 
whether the current request can be satisfied or must be delayed, the system 
must consider the resources currently available, the resources currently allo-
cated to each process, and the future requests and releases of each process. We 
discuss these schemes in Section 7.5. 
If a system does not employ either a deadlock-prevention or a deadlock-
avoidance algorithm, then a deadlock situation may arise. In this environment, 
the system can provide an algorithm that examines the state of the system to 
determine whether a deadlock has occurred and an algorithm to recover from 
the deadlock (if a deadlock has indeed occurred). We discuss these issues in 
Section 7.6 and Section 7.7. 
In the absence of algorithms to detect and recover from deadlocks, we may 
arrive at a situation in which the system is in a deadlock state yet has no way 
of recognizing what has happened. In this case, the undetected deadlock will 
result in deterioration of the system's performance, because resources are being 
held by processes that cannot run and because more and more processes, as 
they make requests for resources, will enter a deadlocked state. Eventually, the 
system will stop functioning and will need to be restarted manually. 

7.4 
7.4 

Although this method may not seem to be a viable approach to the deadlock 
problem, it is nevertheless used in most operating systems, as mentioned 
earlier. In many systems, deadlocks occur infrequently (say, once per year); 
thus, this method is cheaper than the prevention, avoidance, or detection and 
recovery methods, which must be used constantly. Also, in some circumstances, 
a system is in a frozen state but not in a deadlocked state. We see this situation, 
for example, with a real-time process running at the highest priority (or any 
process running on a nonpreemptive scheduler) and never returning control 
to the operating system. The system must have manual recovery methods for 
such conditions and may simply use those techniques for deadlock recovery. 
As we noted in Section 7.2.1, for a deadlock to occur, each of the four necessary 
conditions must hold. By ensuring that at least one of these conditions cannot 
hold, we can prevent the occurrence of a deadlock. We elaborate on this 
approach by examining each of the four necessary conditions separately. 
7.4.1 
Mutual Exclusion 
The mutual-exclusion condition must hold for nonsharable resources. For 
example, a printer cannot be simultaneously shared by several processes. 
Sharable resources, in contrast, do not require mutually exclusive access and 
thus cannot be involved in a deadlock. Read-only files are a good example of 
a sharable resource. If several processes attempt to open a read-only file at the 
same time, they can be granted simultaneous access to the file. A process never 
needs to wait for a sharable resource. In general, however, we cannot prevent 
deadlocks by denying the mutual-exclusion condition, because some resources 
are intrinsically nonsharable. 
7.4.2 Hold and Wait 
To ensure that the hold-and-wait condition never occurs in the system, we must 
guarantee that, whenever a process requests a resource, it does not hold any 
other resources. One protocol that can be used requires each process to request 
and be allocated all its resources before it begins execution. We can implement 
this provision by requiring that system calls requesting resources for a process 
precede all other system calls. 
An alternative protocol allows a process to request resources only when it 
has none. A process may request some resources and use them. Before it can 
request any additional resources, however, it must release all the resources that 
it is currently allocated. 
To illustrate the difference between these two protocols, we consider a 
process that copies data from a DVD drive to a file on disk, sorts the file, and 
then prints the results to a printer. If all resources must be requested at the 
beginning of the process, then the process must initially request the DVD drive, 
disk file, and printer. It will hold the printer for its entire execution, even though 
it needs the printer only at the end. 
The second method allows the process to request initially only the DVD 
drive and disk file. It copies from the DVD drive to the disk and then releases 

Chapter 7 
both the DVD drive and the disk file. The process must then again request the 
disk file and the printer. After copying the disk file to the printer, it releases 
these two resources and terminates. 
Both these protocols have two main disadvantages. First, resource utiliza-
tion may be low, since resources may be allocated but unused for a long period. 
In the example given, for instance, we can release the DVD drive and disk file, 
and then again request the disk file and printe1~ only if we can be sure that our 
data will remain on the disk file. Otherwise, we must request all resources at 
the beginning for both protocols. 
Second, starvation is possible. A process that needs several popular 
resources may have to wait indefinitely, because at least one of the resources 
that it needs is always allocated to some other process. 
7.4.3 No Preemption 
The third necessary condition for deadlocks is that there be no preemption 
of resources that have already been allocated. To ensure that this condition 
does not hold, we can use the following protocol. If a process is holding 
some resources and requests another resource that cannot be immediately 
allocated to it (that is, the process must wait), then all resources the process is 
currently holding are preempted. In other words, these resources are implicitly 
released. The preempted resources are added to the list of resources for which 
the process is waiting. The process will be restarted only when it can regain its 
old resources, as well as the new ones that it is requesting. 
Alternatively, if a process requests some resources, we first check whether 
they are available. If they are, we allocate them. If they are not, we check 
whether they are allocated to some other process that is waiting for additional 
resources. If so, we preempt the desired resources from the waiting process and 
allocate them to the requesting process. If the resources are neither available 
nor held by a waiting process, the requesting process must wait. While it is 
waiting, some of its resources may be preempted, but only if another process 
requests them. A process can be restarted only when it is allocated the new 
resources it is requesting and recovers any resources that were preempted 
while it was waiting. 
This protocol is often applied to resources whose state can be easily saved 
and restored later, such as CPU registers and memory space. It cannot generally 
be applied to such resources as printers and tape drives. 
7 .4.4 Circular Wait 
The fourth and final condition for deadlocks is the circular-wait condition. One 
way to ensure that this condition never holds is to impose a total ordering of 
all resource types and to require that each process requests resources in an 
increasing order of enumeration. 
To illustrate, we let R = { R1, R2, ... , Rm} be the set of resource types. We 
assign to each resource type a unique integer number, which allows us to 
compare two resources and to determine whether one precedes another in our 
ordering. Formally, we define a one-to-one hmction F: R ___,. N, where N is the 
set of natural numbers. For example, if the set of resource types R includes 
tape drives, disk drives, and printers, then the function F might be defined as 
follows: 

7.4 
F (tape drive) = 1 
F (disk drive) = 5 
F (printer) = 12 

We can now consider the following protocol to prevent deadlocks: Each 
process can request resources only in an increasing order of enumeration. That 
is, a process can initially request any number of instances of a resource type 
-say, R;. After that, the process can request instances of resource type Rj if 
and only if F(Rj) > F(R;). For example, using the function defined previously, 
a process that wants to use the tape drive and printer at the same time must 
first request the tape drive and then request the printer. Alternatively, we can 
require that a process requesting an instance of resource type Rj must have 
released any resources R; such that F(Ri) ::=:: F(Rj). It must also be noted that if 
several iilstances of the same resource type are needed, a single request for all 
of them must be issued. 
If these two protocols are used, then the circular-wait condition cannot 
hold. We can demonstrate this fact by assuming that a circular wait exists 
(proof by contradiction). Let the set of processes involved in the circular wait be 
{ P0, P1, ... , P11 }, where Pi is waiting for a resource R;, which is held by process 
Pi+l· (Modulo arithmetic is used on the indexes, so that P 11 is waiting for 
a resource R11 held by P0 .) Then, since process Pi+l is holding resource Ri 
while requesting resource Ri+l' we must have F(Ri) < F(R;H) for all i. But 
this condition means that F(Ro) < F(R1) < ... < F(R11) < F (Ro). By transitivity, 
F(Ro) < F(Ro), which is impossible. Therefore, there can be no circular wait. 
We can accomplish this scheme in an application program by developing 
an ordering among all synchronization objects in the system. All requests for 
synchronization objects must be made in increasing order. For example, if the 
lock ordering in the Pthread program shown in Figure 7.1 was 
F (first_mutex) = 1 
F (second_mutex) = 5 
then thread_ two could not request the locks out of order. 
Keep in mind that developing an ordering, or hierarchy, does not in itself 
prevent deadlock. It is up to application developers to write programs that 
follow the ordering. Also note that the function F should be defined according 
to the normal order of usage of the resources in a system. For example, because 
the tape drive is usually needed before the printer, it would be reasonable to 
define F(tape drive) < F(printer). 
Although ensuring that resources are acquired in the proper order is the 
responsibility of application developers, certain software can be used to verify 
that locks are acquired in the proper order and to give appropriate warnings 
when locks are acquired out of order and deadlock is possible. One lock-order 
verifier, which works on BSD versions of UNIX such as FreeBSD, is known as 
witness. Witness uses mutual-exclusion locks to protect critical sections, as 
described in Chapter 6; it works by dynamically maintaining the relationship 
of lock orders in a system. Let's use the program shown in Figure 7.1 as an 
example. Assume that thread_one is the first to acquire the locks and does so in 
the order (1) first_mutex, (2) second_mutex. Wih1ess records the relationship 
that first_mutex must be acquired before second_mutex. If thread_two later 

Chapter 7 
7.5 
acquires the locks out of order, witness generates a warning message on the 
system console. 
It is also important to note that imposing a lock ordering does not guarantee 
deadlock prevention if locks can be acquired dynamically. For example, assume 
we have a function that transfers funds between two accounts. To prevent a 
race condition, each account has an associated semaphore that is obtained from 
a get Lock () function such as the following: 
void transaction(Account from, Account to, double amount) 
{ 
} 
Semaphore lock1, lock2; 
lock1 
getLock(from); 
lock2 = getLock(to); 
wait(lock1); 
wait(lock2); 
withdraw(from, amount); 
deposit(to, amount); 
signal(lock2); 
signal (lock1) ; 
Deadlock is possible if two threads simultaneously invoke the trans action () 
function, transposing different accounts. That is, one thread might invoke 
transaction(checkingAccount, savingsAccount, 25); 
and another might invoke 
transaction(savingsAccount, checkingAccount, 50); 
We leave it as an exercise for students to fix this situation. 
Deadlock-prevention algorithms, as discussed in Section 7.4, prevent deadlocks 
by restraining how requests can be made. The restraints ensure that at least 
one of the necessary conditions for deadlock cannot occur and, hence, that 
deadlocks cannot hold. Possible side effects of preventing deadlocks by this 
method, however, are low device utilization and reduced system throughput. 
An alternative method for avoiding deadlocks is to require additional 
information about how resources are to be requested. For example, in a system 
with one tape drive and one printer, the system might need to know that 
process P will request first the tape drive and then the printer before releasing 
both resources, whereas process Q will request first the printer and then the 
tape drive. With this knowledge of the complete sequence of requests and 
releases for each process, the system can decide for each request whether or 
not the process should wait in order to avoid a possible future deadlock. Each 
request requires that in making this decision the system consider the resources 

7.5 Deadlock Avoidance 

currently available, the resources currently allocated to each process, and the 
future requests and releases of each process. 
The various algorithms that use this approach differ in the amount and type 
of information required. The simplest and most useful model requires that each 
process declare the maximum number of resources of each type that it may need. 
Given this a priori information, it is possible to construct an algorithm that 
ensures that the system will never enter a deadlocked state. Such an algorithm 
defines the deadlock-avoidance approach. A deadlock-avoidance algorithm 
dynamically examines the resource-allocation state to ensure that a circular-
wait condition can never exist. The resource-allocation state is defined by the 
number of available and allocated resources and the maximum demands of 
the processes. In the following sections, we explore two deadlock-avoidance 
algorithms. 
7.5.1 Safe State 
A state is safe if the system can allocate resources to each process (up to its 
maximum) in some order and still avoid a deadlock. More formally, a system 
is in a safe state only if there exists a safe sequence. A sequence of processes 
<P1, P2, ... , Pn> is a safe sequence for the current allocation state if, for each 
Pi, the resource requests that Pi can still make can be satisfied by the currently 
available resources plus the resources held by all Pj, with j < i. In this situation, 
if the resources that Pi needs are not immediately available, then Pi can wait 
until all Pj have finished. When they have finished, Pi can obtain all of its 
needed resources, complete its designated task, return its allocated resources, 
and terminate. When Pi terminates, Pi+l can obtain its needed resources, and 
so on. If no such sequence exists, then the system state is said to be unsafe. 
A safe state is not a deadlocked state. Conversely, a deadlocked state is 
an unsafe state. Not all unsafe states are deadlocks, however (Figure 7.5). 
An unsafe state may lead to a deadlock. As long as the state is safe, the 
operating system can avoid unsafe (and deadlocked) states. In an unsafe state, 
the operating system cannot prevent processes from requesting resources in 
such a way that a deadlock occurs. The behavior of the processes controls 
unsafe states. 
Figure 7.5 Safe, unsafe, and deadlocked state spaces. 

Chapter 7 Deadlocks 
To illustrate, we consider a system with twelve magnetic tape drives and 
three processes: Po, P1, and P2. Process Po requires ten tape drives, process P1 
may need as many as four tape drives, and process P2 may need up to nine tape 
drives. Suppose that, at time to, process Po is holding five tape drives, process 
P1 is holding two tape drives, and process P2 is holding two tape drives. (Thus, 
there are three free tape drives.) 
Maximum Needs 
Current Needs 

At time t0, the system is in a safe state. The sequence <P1, P0, P2> satisfies 
the safety condition. Process P1 can immediately be allocated all its tape drives 
and then return them (the system will then have five available tape drives); 
then process Po can get all its tape drives and return them (the system will then 
have ten available tape drives); and finally process P2 can get all its tape drives 
and return them (the system will then have all twelve tape drives available). 
A system can go from a safe state to an unsafe state. Suppose that, at time 
t1, process P2 requests and is allocated one more tape drive. The system is no 
longer in a safe state. At this point, only process P1 can be allocated all its tape 
drives. When it returns them, the system will have only four available tape 
drives. Since process Po is allocated five tape drives but has a maximum of ten, 
it may request five more tape drives. If it does so, it will have to wait, because 
they are unavailable. Similarly, process P2 may request six additional tape 
drives and have to wait, resulting in a deadlock. Our mistake was in granting 
the request from process P2 for one more tape drive. If we had made P2 wait 
until either of the other processes had finished and released its resources, then 
we could have avoided the deadlock. 
Given the concept of a safe state, we can define avoidance algorithms that 
ensure that the system will never deadlock. The idea is simply to ensure that the 
system will always remain in a safe state. Initially, the system is in a safe state. 
Whenever a process requests a resource that is currently available, the system 
must decide whether the resource can be allocated immediately or whether 
the process must wait. The request is granted only if the allocation leaves the 
system in a safe state. 
In this scheme, if a process requests a resource that is currently available, 
it may still have to wait. Thus, resource utilization may be lower than it would 
otherwise be. 
7.5.2 Resource-Allocation-Graph Algorithm 
If we have a resource-allocation system with only one instance of each resource 
type, we can use a variant of the resource-allocation graph defined in Section 
7.2.2 for deadlock avoidance. In addition to the request and assignment edges 
already described, we introduce a new type of edge, called a claim edge. 
A claim edge Pi ~ Rj indicates that process Pi may request resource Rj at 
some time in the future. This edge resembles a request edge in direction but is 
represented in the graph by a dashed line. When process Pi requests resource 

7.5 

Figure 7.6 Resource-allocation graph for deadlock avoidance. 
R1, the claim edge P; -+ R1 is converted to a request edge. Similarly, when a 
resource R1 is released by P;, the assignment edge Rj -+ P; is reconverted to a 
claim edge P; -+ Rj. 
We note that the resources must be claimed a priori in the system. That is, 
before process P; starts executing, all its claim edges must already appear in 
the resource-allocation graph. We can relax this condition by allowing a claim 
edge P; -+ R1 to be added to the graph only if all the edges associated with 
process P; are claim edges. 
Now suppose that process P; requests resource Rj. The request can be 
granted only if converting the request edge P; -+ Rj to an assignment edge 
R1 -+ P; does not result in the formation of a cycle in the resource-allocation 
graph. We check for safety by using a cycle-detection algorithm. An algorithm 
for detecting a cycle in this graph requires an order of n2 operations, where n 
is the number of processes in the system. 
If no cycle exists, then the allocation of the resource will leave the system 
in a safe state. If a cycle is found, then the allocation will put the system in 
an unsafe state. In that case, process P; will have to wait for its requests to be 
satisfied. 
To illustrate this algorithm, we consider the resource-allocation graph of 
Figure 7.6. Suppose that P2 requests R2 . Although R2 is currently free, we 
cannot allocate it to P2, since this action will create a cycle in the graph (Figure 
7.7). A cycle, as mentioned, indicates that the system is in an unsafe state. If P1 
requests R2, and P2 requests R1, then a deadlock will occur. 
Figure 7.7 An unsafe state in a resource-allocation graph. 

Chapter 7 
7.5.3 Banker's Algorithm 
The resource-allocation-graph algorithm is not applicable to a resource-
allocation system with multiple instances of each resource type. The deadlock-
avoidance algorithm that we describe next is applicable to such a system but 
is less efficient than the resource-allocation graph scheme. This algorithm is 
commonly known as the banker's algorithm. The name was chosen because the 
algorithm. could be used in a banking system to ensure that the bank never 
allocated its available cash in such a way that it could no longer satisfy the 
needs of all its customers. 
When a new process enters the system, it must declare the maximum 
number of instances of each resource type that it may need. This nun1.ber may 
not exceed the total number of resources in the system. When a user requests 
a set of resources, the system must determine whether the allocation of these 
resources will leave the system in a safe state. If it will, the resources are 
allocated; otherwise, the process must wait until some other process releases 
enough resources. 
Several data structures must be maintained to implement the banker's 
algorithm. These data structures encode the state of the resource-allocation 
system. We need the following data structures, where n is the number of 
processes in the system and m is the number of resource types: 
Available. A vector of length m indicates the number of available resources 
of each type. If Available[j] equals k, then k instances of resource type Ri 
are available. 
Max. An n x m matrix defines the maximum demand of each process. 
If Max[i] [j] equals k, then process P; may request at most k instances of 
resource type Ri. 
Allocation. An 11 x m matrix defines the number of resources of each type 
currently allocated to each process. If Allocation[i][j] equals lc, then process 
P; is currently allocated lc instances of resource type Rj. 
Need. An n x m matrix indicates the remaining resource need of each 
process. If Need[i][j] equals k, then process P; may need k more instances of 
resource type Ri to complete its task. Note that Need[i][j] equals Max[i][j] 
- Allocation [i][j]. 
These data structures vary over time in both size and value. 
To simplify the presentation of the banker's algorithm, we next establish 
some notation. Let X andY be vectors of length 11. We say that X::= Y if and 
only if X[i] ::= Y[i] for all i = 1, 2, ... , n. For example, if X = (1,7,3,2) and Y = 
(0,3,2,1), then Y ::=X. In addition, Y < X if Y ::=X andY# X. 
We can treat each row in the matrices Allocation and Need as vectors 
and refer to them as Allocation; and Need;. The vector Allocation; specifies 
the resources currently allocated to process P;; the vector Need; specifies the 
additional resources that process P; may still request to complete its task. 
7.5.3.1 
Safety Algorithm 
We can now present the algorithm for finding out whether or not a systern is 
in a safe state. This algorithm can be described as follows: 

7.5 

Let Work and Finish be vectors of length m and n, respectively. Initialize 
Work= Available and Finish[i] =false for i = 0, 1, ... , n - 1. 
Find an index i such that both 
a. Finish[i] ==false 
b. Need; ::; Work 
If no such i exists, go to step 4. 
Work = Work + Allocation; 
Finish[i] = true 
Go to step 2. 
If Finish[i] ==true for all i, then the system is in a safe state. 
This algorithm may require an order of m x n2 operations to determine whether 
a state is safe. 
7.5.3.2 
Resource-Request Algorithm 
Next, we describe the algorithm for determining whether requests can be safely 
granted. 
Let Request; be the request vector for process P;. If Request; [j] == k, then 
process P; wants k instances of resource type Rj. When a request for resources 
is made by process P;, the following actions are taken: 
If Request; ::::; Need;, go to step 2. Otherwise, raise an error condition, since 
the process has exceeded its maximum claim. 
If Request; ::; Available, go to step 3. Otherwise, P; must wait, since the 
resources are not available. 
Have the system pretend to have allocated the requested resources to 
process P; by modifyil1.g the state as follows: 
Available= Available- Request;; 
Allocation; =Allocation; +Request;; 
Need; =Need;- Request;; 
If the resulting resource-allocation state is safe, the transaction is com-
pleted, and process P; is allocated its resources. However, if the new state 
is unsafe, then P; must wait for Request;, and the old resource-allocation 
state is restored. 
7.5.3.3 An Illustrative Example 
To illustrate the use of the banker's algorithm, consider a system with five 
processes Po through P4 and three resource types A, B, and C. Resource type A 
has ten instances, resource type B has five instances, and resource type C has 
seven instances. Suppose that, at time T0, the following snapshot of the system 
has been taken: 

Chapter 7 
Allocation 
Max 
Available 
ABC 
ABC 
ABC 
Po 

pl 

p2 

p3 
2 11 

p4 

The content of the matrix Need is defined to be Max - Allocation and is as 
follows: 
Need 
ABC 
Po 

pl 

p2 

p3 

p4 

We claim that the system is currently in a safe state. Indeed, the sequence 
< Plt P3, P4, P2, Po> satisfies the safety criteria. Suppose now that process 
P1 requests one additional instance of resource type A and two instances of 
resource type C, so Request1 = (1,0,2). To decide whether this request can be 
immediately granted, we first check that Request1 s Available-that is, that 
(1,0,2) s (3,3,2), which is true. We then pretend that this request has been 
fulfilled, and we arrive at the following new state: 
Allocation 
Need 
Available 
ABC 
ABC 
ABC 
Po 

pl 

p2 

p3 

0 11 
p4 

We must determine whether this new system state is safe. To do so, we 
execute our safety algorithm and find that the sequence <P1, P3, P4, Po, P2> 
satisfies the safety requirement. Hence, we can immediately grant the request 
of process P1. 
You should be able to see, however, that when the system is in this state, a 
request for (3,3,0) by P4 cannot be granted, since the resources are not available. 
Furthermore, a request for (0,2,0) by Po cannot be granted, even though the 
resources are available, since the resulting state is unsafe. 
We leave it as a programming exercise for students to implement the 
banker's algorithm. 

7.6 
7.6 

If a system does not employ either a deadlock-prevention or a deadlock-
avoidance algorithm, then a deadlock situation may occur. In this environment, 
the system may provide: 
An algorithm that examines the state of the system to determine whether 
a deadlock has occurred 
An algorithm to recover from the deadlock 
In the following discussion, we elaborate on these two requirements as they 
pertain to systems with only a single instance of each resource type, as well as to 
systems with several instances of each resource type. At this point, however, we 
note that a detection-and-recovery scheme requires overhead that includes not 
only the run-time costs of maintaining the necessary information and executing 
the detection algorithm but also the potential losses inherent in recovering from 
a deadlock. 
7.6.1 Single Instance of Each Resource Type 
If all resources have only a single instance, then we can define a deadlock-
detection algorithm that uses a variant of the resource-allocation graph, called 
a wait-for graph. We obtain this graph from the resource-allocation graph by 
removing the resource nodes and collapsing the appropriate edges. 
More precisely, an edge from Pi to Pi in a wait-for graph implies that 
process Pz is waiting for process P1 to release a resource that P; needs. An edge 
Pz --+ Pi exists iil a wait-for graph if and only if the corresponding resource-
allocation graph contains two edges Pz --+ Rq and Rq --+ Pi for some resource 
Rq. For example, in Figure 7.8, we present a resource-allocation graph and the 
corresponding wait-for graph. 
As before, a deadlock exists in the system if and only if the wait-for graph 
contains a cycle. To detect deadlocks, the system needs to maintain the wait-for 
graph and periodically invoke an algorithm that searches for a cycle in the graph. 
An algorithm to detect a cycle in a graph requires an order of n2 operations, 
where n is the number of vertices in the graph. 
7.6.2 Several Instances of a Resource Type 
The wait-for graph scheme is not applicable to a resource-allocation system 
with multiple instances of each resource type. We turn now to a deadlock-
detection algorithm that is applicable to such a system. The algorithm employs 
several time-varying data structures that are similar to those used in the 
banker's algorithm (Section 7.5.3): 
Available. A vector of length nz indicates the number of available resources 
of each type. 
Allocation. Ann x nz matrix defines the number of resources of each type 
currently allocated to each process. 

Chapter 7 
(a) 
(b) 
Figure 7.8 (a) Resource-allocation graph. (b) Corresponding wait-for graph. 
Request. An n x m matrix indicates the current request of each process. 
If Request[i][j] equals k, then process P; is requesting k more instances of 
resource type Rj. 
The:::: relation between two vectors is defined as in Section 7.5.3. To simplify 
notation, we again treat the rows in the matrices Allocation and Request as 
vectors; we refer to them as Allocation; and Request;. The detection algorithm 
described here simply investigates every possible allocation sequence for the 
processes that remain to be completed. Compare this algorithm with the 
banker's algorithm of Section 7.5.3. 
Let Work and Finish be vectors of length m and n, respectively. Initialize 
Work= Available. Fori= 0, 1, ... , n-1, if Allocation; # 0, then Finish[i] =false; 
otherwise, Finish[i] = tme. 
2. Find an index i such that both 
a. Finish[i] ==false 
b. Request; :::: Work 
If no such i exists, go to step 4. 
Work= Work+ Allocation; 
Finish[i] = true 
Go to step 2. 
4. If Finish[i] ==false for some i, 0 :::: i < n, then the system is in a deadlocked 
state. Moreover, if Finish[i] ==false, then process P; is deadlocked. 
This algorithm requires an order o£ m x n2 operations to detect whether the 
system is in a deadlocked state. 

7.6 

You may wonder why we reclaim the resources of process P; (in step 3) 
as soon as we determine that Request; :S Work (in step 2b). We know that P; 
is currently not involved in a deadlock (since Request; :S Work). Thus, we take 
an optimistic attitude and assume that P; will require no more resources to 
complete its task; it will thus soon return all currently allocated resources to 
the system. If our assumption is incorrect, a deadlock may occur later. That 
deadlock will be detected the next tince the deadlock-detection algorithm is 
invoked. 
To illustrate this algorithm, we consider a system with five processes Po 
through P4 and three resource types A, B, and C. Resource type A has seven 
instances, resource type B has two instances, and resource type C has six 
instances. Suppose that, at time T0, we have the following resource-allocation 
state: 
Allocation 
Request 
Available 
ABC 
ABC 
ABC 
Po 
0 1 0 

pl 

p2 

p3 
2 11 

p4 

We claim that the system is not in a deadlocked state. Indeed, if we execute 
our algorithm, we will find that the sequence <Po, P2, P3, Plt P4> results in 
Finish[i] == true for all i. 
Suppose now that process P2 makes one additional request for an instance 
of type C. The Request matrix is modified as follows: 
Request 
ABC 
Po 

pl 

p2 

p3 

p4 

We claim that the system is now deadlocked. Although we can reclaim the 
resources held by process Po, the number of available resources is not sufficient 
to fulfill the requests of the other processes. Thus, a deadlock exists, consisting 
of processes P1, P2, P3, and P4. 
7.6.3 Detection-Algorithm Usage 
When should we invoke the detection algorithm? The answer depends on two 
factors: 
1. How often is a deadlock likely to occur? 
How many processes will be affected by deadlock when it happens? 

Chapter 7 
7.7 
If deadlocks occur frequently, then the detection algorithm should be invoked 
frequently. Resources allocated to deadlocked processes will be idle until the 
deadlock can be broken. In addition, the number of processes involved in the 
deadlock cycle may grow. 
Deadlocks occur only when some process makes a request that cannot be 
granted immediately. This request may be the final request that completes a 
chain of waiting processes. In the extreme, then, we can invoke the deadlock-
detection algorithm every time a request for allocation cannot be granted 
immediately. In this case, we can identify not only the deadlocked set of 
processes but also the specific process that "caused" the deadlock (In reality, 
each of the deadlocked processes is a link in the cycle in the resource graph, so 
all of them, jointly, caused the deadlock) If there are many different resource 
types, one request may create many cycles in the resource graph, each cycle 
completed by the most recent request and "caused" by the one identifiable 
process. 
Of course, invoking the deadlock-detection algorithm for every resource 
request will incur considerable overhead in computation time. A less expensive 
alternative is simply to invoke the algorithm at defined intervals-for example, 
once per hour or whenever CPU utilization drops below 40 percent. (A deadlock 
eventually cripples system throughput and causes CPU utilization to drop.) If 
the detection algorithm is invoked at arbitrary points in time, the resource 
graph may contain many cycles. In this case, we generally cannot tell which of 
the many deadlocked processes "caused" the deadlock 
When a detection algorithm determines that a deadlock exists, several alter-
natives are available. One possibility is to inform the operator that a deadlock 
has occurred and to let the operator deal with the deadlock manually. Another 
possibility is to let the system recover from the deadlock automatically. There 
are two options for breaking a deadlock One is simply to abort one or more 
processes to break the circular wait. The other is to preempt some resources 
from one or more of the deadlocked processes. 
7.7.1 Process Termination 
To eliminate deadlocks by aborting a process, we use one of two methods. In 
both methods, the system reclaims all resources allocated to the terminated 
processes. 
Abort all deadlocked processes. This method clearly will break the 
deadlock cycle, but at great expense; the deadlocked processes may have 
computed for a long time, and the results of these partial computations 
must be discarded and probably will have to be recomputed later. 
Abort one process at a time until the deadlock cycle is eliminated. This 
method incurs considerable overhead, since after each process is aborted, a 
deadlock-detection algorithnc rnust be invoked to determine whether any 
processes are still deadlocked. 

7.7 

Aborting a process may not be easy. If the process was in the midst of 
updating a file, terminating it will leave that file in an incorrect state. Similarly, 
if the process was in the midst of printing data on a printer, the system must 
reset the printer to a correct state before printing the next job. 
If the partial termination method is used, then we must determine which 
deadlocked process (or processes) should be terminated. This determination is 
a policy decision, similar to CPU-scheduling decisions. The question is basically 
an economic one; we should abort those processes whose termination will incur 
the minimum cost. Unfortunately, the term minimum cost is not a precise one. 
Many factors may affect which process is chosen, including: 
1. What the priority of the process is 
2. How long the process has computed and how much longer the process 
will compute before completing its designated task 
How many and what types of resources the process has used (for example, 
whether the resources are simple to preempt) 
How many more resources the process needs in order to complete 
5. How many processes will need to be terminated 
Whether the process is interactive or batch 
7.7.2 Resource Preemption 
To eliminate deadlocks using resource preemption, we successively preempt 
some resources from processes and give these resources to other processes 1-m til 
the deadlock cycle is broken. 
If preemption is required to deal with deadlocks, then three issues need to 
be addressed: 
Selecting a victim. Which resources and which processes are to be 
preempted? As in process termil<ation, we must determine the order of 
preemption to minimize cost. Cost factors may include such parameters 
as the number of resources a deadlocked process is holding and the 
amount of time the process has thus far consumed during its execution. 
Rollback. If we preempt a resource from a process, what should be done 
with that process? Clearly, it cannot contil<ue with its normal execution; it 
is missing some needed resource. We must roll back the process to some 
safe state and restart it from that state. 
Since, in general, it is difficult to determine what a safe state is, the 
simplest solution is a total rollback: abort the process and then restart 
it. Although it is more effective to roll back the process only as far as 
necessary to break the deadlock, this method requires the system to keep 
more information about the state of all running processes. 
Starvation. How do we ensure that starvation will not occur? That is, 
how can we guarantee that resources will not always be preempted from 
the same process? 

Chapter 7 
7.8 
In a system where victim selection is based primarily on cost factors, 
it may happen that the same process is always picked as a victim. As 
a result, this process never completes its designated task, a starvation 
situation that must be dealt with in any practical system. Clearly, we 
must ensure that a process can be picked as a victim" only a (small) finite 
number of times. The most common solution is to include the number of 
rollbacks in the cost factor. 
A deadlocked state occurs when two or more processes are waiting indefinitely 
for an event that can be caused only by one of the waiting processes. There are 
three principal methods for dealing with deadlocks: 
Use some protocol to prevent or avoid deadlocks, ensuring that the system 
will never enter a deadlocked state. 
Allow the system to enter a deadlocked state, detect it, and then recover. 
Ignore the problem altogether and pretend that deadlocks never occur in 
the system. 
The third solution is the one used by most operating systems, including UNIX 
and Windows. 
A deadlock can occur only if four necessary conditions hold simultaneously 
in the system: mutual exclusion, hold and wait, no preemption, and circular 
wait. To prevent deadlocks, we can ensure that at least one of the necessary 
conditions never holds. 
A method for avoiding deadlocks, rather than preventing them, requires 
that the operating system have a priori information about how each process 
will utilize system resources. The banker's algorithm, for example, requires 
a priori information about the maximunl. number of each resource class that 
each process may request. Using this information, we can define a deadlock-
avoidance algorithm. 
If a system does not employ a protocol to ensure that deadlocks will never 
occur, then a detection-and-recovery scheme may be employed. A deadlock-
detection algorithm must be invoked to detennine whether a deadlock 
has occurred. If a deadlock is detected, the system must recover either by 
terminating some of the deadlocked processes or by preempting resources 
from some of the deadlocked processes. 
Where preemption is used to deal with deadlocks, three issues must be 
addressed: selecting a victim, rollback, and starvation. In a system that selects 
victims for rollback primarily on the basis of cost factors, starvation may occur, 
and the selected process can never complete its designated task. 
Researchers have argued that none of the basic approaches alone is appro-
priate for the entire spectrum of resource-allocation problems in operating 
systems. The basic approaches can be combined, however, allowing us to select 
an optimal approach for each class of resources in a system.

---

## Module 4 Textbook

8.1 
c 
In Chapter 5, we showed how the CPU can be shared by a set of processes. As 
a result of CPU scheduling, we can improve both the utilization of the CPU and 
the speed of the computer's response to its users. To realize this increase in 
performance, however, we must keep several processes in memory; that is, we 
must share memory. 
In this chapter, we discuss various ways to manage memory. The memory-
management algorithms vary from a primitive bare-machine approach to 
paging and segmentation strategies. Each approach has its own advantages 
and disadvantages. Selection of a memory-management method for a specific 
system depends on many factors, especially on the hardware design of the 
system. As we shall see, many algorithms require hardware support, although 
recent designs have closely integrated the hardware and operating system. 
To provide a detailed description of various ways of organizing memory 
hardware. 
To discuss various memory-management techniques, including paging 
and segmentation. 
To provide a detailed description of the Intel Pentium, which supports both 
pure segmentation and segmentation with paging. 
As we saw in Chapter 1, memory is central to the operation of a modern 
computer system. Memory consists of a large array of words or bytes, each 
with its own address. The CPU fetches instructions from memory according 
to the value of the program counter. These instructions may cause additional 
loading from and storing to specific memory addresses. 
A typical instruction-execution cycle, for example, first fetches an instruc-
tion from memory. The instruction is then decoded and may cause operands 
to be fetched from memory. After the instruction has been executed on the 

Chapter 8 
operands, results may be stored back in memory. The mernory unit sees only a 
stream of memory addresses; it does not know how they are generated (by the 
instruction counter, indexing, indirection, literal addresses, and so on) or what 
they are for (instructions or data). Accordingly, we can ignore hozu a program 
generates a memory address. We are interested only in the sequence of memory 
addresses generated by the running program. 
We begin our discussion by covering several issues that are pertinent to the 
various techniques for managing memory. This coverage includes an overview 
of basic hardware issues, the binding of symbolic memory addresses to actual 
physical addresses, and the distinction between logical and physical addresses. 
We conclude the section with a discussion of dynamically loading and linking 
code and shared libraries. 
8.1.1 
Basic Hardware 
Main memory and the registers built into the processor itself are the only 
storage that the CPU can access directly. There are machine instructions that take 
memory addresses as arguments, but none that take disk addresses. Therefore, 
any instructions in execution, and any data being used by the instructions, 
must be in one of these direct-access storage devices. If the data are not in 
memory, they must be moved there before the CPU can operate on them. 
Registers that are built into the CPU are generally accessible within one 
cycle of the CPU clock. Most CPUs can decode instructions and perform simple 
operations on register contents at the rate of one or more operations per 
clock tick The same cannot be said of main memory, which is accessed via 
a transaction on the memory bus. Completing a memory access may take 
many cycles of the CPU clock. In such cases, the processor normally needs 
to stall, since it does not have the data required to complete the instruction 
that it is executing. This situation is intolerable because of the frequency of 
memory accesses. The remedy is to add fast memory between the CPU and 

" 
operating 
system 
"" 

process 

i soa(?LJ.o "I 
process 
base 

I 120!1GO I 
I"" . 
limit 
process 

Figure 8.1 
A base and a limit register define a logical address space. 

8.1 

main memory. A memory buffer used to accommodate a speed differential, 
called a 
is described in Section 1.8.3. 
Not only are we concerned with the relative speed of accessing physical 
memory, but we also must ensure correct operation to protect the operating 
system from access by user processes and, in addition, to protect user processes 
from one another. This protection must be provided by the hardware. It can be 
implemented in several ways, as we shall see throughout the chapter. In this 
section, we outline one possible implementation. 
We first need to make sure that each process has a separate memory space. 
To do this, we need the ability to determine the range of legal addresses that 
the process may access and to ensure that the process can access only these 
legal addresses. We can provide this protection by using two registers, usually 
a base and a limit, as illustrated in Figure 8.1. The base 
holds the 
smallest legal physical memory address; the 
specifies the size of 
the range. For example, if the base register holds 300040 and the limit register is 
120900, then the program can legally access all addresses from 300040 through 
420939 (inclusive). 
Protection of memory space is accomplished by having the CPU hardware 
compare every address generated in user mode with the registers. Any attempt 
by a program executing in user mode to access operating-system memory or 
other users' memory results in a trap to the operating system, which treats the 
attempt as a fatal error (Figure 8.2). This scheme prevents a user program from 
(accidentally or deliberately) modifying the code or data structures of either 
the operating system or other users. 
The base and limit registers can be loaded only by the operating system, 
which uses a special privileged instruction. Since privileged instructions can 
be executed only in kernel mode, and since only the operating system executes 
in kernel mode, only the operating system can load the base and limit registers. 
This scheme allows the operating system to change the value of the registers 
but prevents user programs from changing the registers' contents. 
The operating system, executing in kernel mode, is given unrestricted 
access to both operating system memory and users' memory. This provision 
allows the operating system to load users' programs into users' memory, to 
yes 
no 
trap to operating system 
monitor-addressing error 
memory 
Figure 8.2 Hardware address protection with base and limit registers. 

Chapter 8 
dump out those programs in case of errors, to access and modify parameters 
of system calls, and so on. 
8.1.2 Address Binding 
Usually, a program resides on a disk as a binary executable file. To be executed, 
the program must be brought into memory and placed within a process. 
Depending on the memory management in use, the process may be moved 
between disk and memory during its execution. The processes on the disk that 
are waiting to be brought into memory for execution form the 
The normal procedure is to select one of the processes in the input queue 
and to load that process into memory. As the process is executed, it accesses 
instructions and data from memory. Eventually, the process terminates, and its 
memory space is declared available. 
Most systems allow a user process to reside in any part of the physical 
memory. Thus, although the address space of the computer starts at 00000, 
the first address of the user process need not be 00000. This approach affects 
the addresses that the user program can use. In most cases, a user program 
will go through several steps-some of which may be optional-before bein.g 
executed (Figure 8.3). Addresses may be represented in different ways during 
these steps. Addresses in the source program are generally symbolic (such as 
count). A compiler will typically bind these symbolic addresses to relocatable 
addresses (such as "14 bytes from the beginning of this module"). The lin.kage 
editor or loader will in turn bind the relocatable addresses to absolute addresses 
(such as 74014). Each binding is a mapping from one address space to another. 
Classically, the binding of instructions and data to memory addresses can 
be done at any step along the way: 
Compile time. If you know at compile time where the process will reside 
in memory, then 
can be generated. For example, if you krww 
that a user process will reside starting at location R, then the generated 
compiler code will start at that location and extend up from there. If, at 
some later time, the starting location changes, then it will be necessary 
to recompile this code. The MS-DOS .COM-format programs are bound at 
compile time. 
Load time. If it is not known at compile time where the process will reside 
in memory, then the compiler must generate 
In this case, 
final binding is delayed until load time. If the starting address changes, we 
need only reload the user code to incorporate this changed value. 
Execution time. If the process can be moved during its execution from 
one memory segment to another, then binding must be delayed until run 
time. Special hardware must be available for this scheme to work, as will 
be discussed in Section 8.1.3. Most general-purpose operating systems 11se 
this method. 
A major portion of this chapter is devoted to showing how these vari-
ous bindings can be implemented effectively in a computer system and to 
discussing appropriate hardware support. 

8.1 
compile 
time 
load 
time 
} 
execution 
time (run 
time) 
Figure 8.3 Multistep processing of a user program. 
8.1.3 Logical versus Physical Address Space 
An address generated by the CPU is commonly referred to as a 

whereas an address seen by the memory unit-that is, the one loaded into 
the 
of the memory-is commonly referred to as a 
The compile-time and load-time address-binding methods generate iden-
tical logical and physical addresses. However, the execution-time address-
binding scheme results in differing logical and 
addresses. In this case, 
we usually refer to the logical address as a 
We use logical address 
and virtual address interchangeably in this text. The set of all logical addresses 
generated by a program is a logical 
the set of all physical 
addresses corresponding to these logical addresses is a physical 
Thus, in_ the execution-time address-binding scheme, the logical and physical 
address spaces differ. 
The run-time mapping from virtual to physical addresses is done by a 
hardware device called the 
We can choose 
from many different methods to accomplish such mapping, as we discuss in 

Chapter 8 
Figure 8.4 Dynamic relocation using a relocation register. 
Sections 8.3 through 8.7. For the time being, we illustrate this mapping with 
a simple MMU scheme that is a generalization of the base-register scheme 
described in Section 8.1.1. The base register is now called a 
The value in the relocation register is added to every address generated by a user 
process at the time the address is sent to memory (see Figure 8.4). For example, 
if the base is at 14000, then an attempt by the user to address location 0 is 
dynamically relocated to location 14000; an access to location 346 is mapped 
to location 14346. The MS-DOS operating system running on the Intel 80x86 
family of processors used four relocation registers when loading and running 
processes. 
The user program never sees the real physical addresses. The program can 
create a pointer to location 346, store it in memory, manipulate it, and compare it 
with other addresses-all as the number 346. Only when it is used as a memory 
address (in an indirect load or store, perhaps) is it relocated relative to the base 
register. The user program deals with logical addresses. The memory-mapping 
hardware converts logical addresses into physical addresses. This form of 
execution-time binding was discussed in Section 8.1.2. The final location of 
a referenced memory address is not determined until the reference is made. 
We now have two different types of addresses: logical addresses (in the 
range 0 to max) and physical addresses (in the rangeR+ 0 toR+ max for a base 
valueR). The user generates only logical addresses and thinks that the process 
runs in locations 0 to max. The user program generates only logical addresses 
and thinks that the process runs in locations 0 to max. However, these logical 
addresses must be mapped to physical addresses before they are used. 
The concept of a logical address space that is bound to a separate physical 
address space is central to proper memory management. 
8.1.4 Dynamic Loading 
In our discussion so far, it has been necessary for the entire program and all 
data of a process to be in physical memory for the process to execute. The size 
of a process has thus been limited to the size of physical memory. To obtain 
better memory-space utilization, we can use dynamic 
With dynancic 

8.1 

loading, a routine is not loaded until it is called. All routines are kept on disk 
in a relocatable load format. The main program is loaded into memory and 
is executed. When a routine needs to call another routine, the calling routine 
first checks to see whether the other routine has been loaded. If it has not, the 
relocatable linking loader is called to load the desired routine into menwry and 
to update the program's address tables to reflect this change. Then control is 
passed to the newly loaded routine. 
The advantage of dynamic loading is that an unused routine is never 
loaded. This method is particularly useful when large amounts of code are 
needed to handle infrequently occurring cases, such as error routines. In this 
case, although the total program size may be large, the portion that is used 
(and hence loaded) may be much smaller. 
Dynamic loading does not require special support from the operating 
system. It is the responsibility of the users to design their programs to take 
advantage of such a method. Operating systems may help the programmer, 
however, by providing library routines to implement dynamic loading. 
8.1.5 Dynamic Linking and Shared Libraries 
Figure 8.3 also shows 
Some operating systems 
support only 
linking, in 
system language libraries are treated 
like any other object module and are combined by the loader into the binary 
program image. Dynamic linking, in contrast, is similar to dynamic loading. 
Here, though, linking, rather than loading, is postponed until execution time. 
This feature is usually used with system libraries, such as language subroutine 
libraries. Without this facility, each program on a system must include a copy 
of its language library (or at least the routines referenced by the program) in the 
executable image. This requirement wastes both disk space and main memory. 
With dynamic linking, a stub is included in the image for each library-
routine reference. The stub is a small piece of code that indicates how to locate 
the appropriate memory-resident library routine or how to load the library if 
the routine is not already present. When the stub is executed, it checks to see 
whether the needed routine is already in memory. If it is not, the program loads 
the routine into memory. Either way, the stub replaces itself with the address 
of the routine and executes the routine. Thus, the next time that particular 
code segment is reached, the library routine is executed directly, incurring no 
cost for dynamic linking. Under this scheme, all processes that use a language 
library execute only one copy of the library code. 
This feature can be extended to library updates (such as bug fixes). A library 
may be replaced by a new version, and all programs that reference the library 
will automatically use the new version. Without dynamic linking, all such 
programs would need to be relinked to gain access to the new library. So that 
programs will not accidentally execute new, incompatible versions of libraries, 
version information is included in both the program and the library. More than 
one version of a library may be loaded into memory, and each program uses its 
version information to decide which copy of the library to use. Versions with 
minor changes retain the same version number, whereas versions with major 
changes increment the number. Thus, only programs that are compiled with 
the new library version are affected by any incompatible changes incorporated 

Chapter 8 
8.2 
in it. Other programs linked before the new library was installed will continue 
using the older library. This system is also known as "'H•"-"='"" 
Unlike dynamic loading, dynamic linking generally requires help from the 
operating system. If the processes in memory are protected from one another, 
then the operating system is the only entity that can check to see whether the 
needed routine is in another process's memory space or that can allow multiple 
processes to access the same memory addresses. We elaborate on this concept 
when we discuss paging in Section 8.4.4. 
A process must be in memory to be executed. A process, however, can be 
temporarily out of memory to a 
and then brought 
into memory for continued execution. For example, assume a multipro-
gramming environment with a round-robin CPU-scheduling algorithm. When 
a quantum expires, the memory manager will start to swap out the process that 
just finished and to swap another process into the memory space that has been 
freed (Figure 8.5). In the meantime, the CPU scheduler will allocate a time slice 
to some other process in memory. When each process finishes its quantum, it 
will be swapped with another process. Ideally, the memory manager can swap 
processes fast enough that some processes will be in memory, ready to execute, 
when the CPU scheduler wants to reschedule the CPU. In addition, the quantum 
must be large enough to allow reasonable amounts of computing to be done 
between swaps. 
A variant of this swapping policy is used for priority-based scheduling 
algorithms. If a higher-priority process arrives and wants service, the memory 
manager can swap out the lower-priority process and then load and execute 
the higher-priority process. When the higher-priority process finishes, the 
@swap out 
@swap in 
backing store 
main memory 
Figure 8.5 Swapping of two processes using a disk as a backing store. 

8.2 

lower-priority process can be swapped back in and continued. This variant 
of swapping is sometimes called roll 
Normally, a process that is swapped out will be swapped back into the 
same memory space it occupied previously. This restriction is dictated by the 
method of address binding. If binding is done at assembly or load time, then 
the process cannot be easily moved to a different location. If execution-time 
binding is being used, however, then a process can be swapped into a different 
memory space, because the physical addresses are computed during execution 
time. 
Swapping requires a backing store. The backing store is commonly a fast 
disk. It must be large enough to accommodate copies of all memory images 
for all users, and it must provide direct access to these memory images. The 
system maintains a 
consisting of all processes whose memory 
images are on the backing store or in memory and are ready to run. Whenever 
the CPU scheduler decides to execute a process, it calls the dispatcher. The 
dispatcher checks to see whether the next process in the queue is in memory. 
If it is not, and if there is no free memory region, the dispatcher swaps out a 
process currently in memory and swaps in the desired process. It then reloads 
registers and transfers control to the selected process. 
The context-switch time in such a swapping system is fairly high. To get 
an idea of the context-switch time, let us assume that the user process is 100 
MB in size and the backing store is a standard hard disk with a transfer rate of 
50MB per second. The actual transfer of the 100-MB process to or from main 
memory takes 
100MB/50MB per second= 2 seconds. 
Assuming an average latency of 8 milliseconds, the swap time is 2008 
milliseconds. Since we must both swap out and swap in, the total swap time is 
about 4016 milliseconds. 
Notice that the major part of the swap time is transfer time. The total 
transfer time is directly proportional to the amount of memory swapped. If we 
have a computer system with 4 GB of main memory and a resident operating 
system taking 1 GB, the maximum size of the user process is 3GB. However, 
many user processes may be much smaller than this-say, 100 MB. A 100-MB 
process could be swapped out in 2 seconds, compared with the 60 seconds 
required for swapping 3 GB. Clearly, it would be useful to know exactly how 
much memory a user process is using, not simply how much it might be using. 
Then we would need to swap only what is actually used, reducing swap time. 
For this method to be effective, the user must keep the system informed of 
any changes in memory requirements. Thus, a process with dynamic memory 
requirements will need to issue system calls (request memory and release 
memory) to inform the operating system of its changing memory needs. 
Swapping is constrained by other factors as well. If we want to swap 
a process, we must be sure that it is completely idle. Of particular concern 
is any pending I/0. A process may be waiting for an I/0 operation when 
we want to swap that process to free up memory. However, if the I/0 is 
asynchronously accessing the user memory for I/0 buffers, then the process 
cannot be swapped. Assume that the I/0 operation is queued because the 
device is busy. If we were to swap out process P1 and swap in process P2, the 

Chapter 8 
8.3 
I/0 operation might then attempt to use memory that now belongs to process 
P2 . There are two main solutions to this problem: never swap a process with 
pending I/0, or execute I/0 operations only into operating-system buffers. 
Transfers between operating-system buffers and process memory then occur 
only when the process is swapped in. 
The assumption, mentioned earlier, that swapping requires few, if any, 
head seeks needs further explanation. We postpone discussing this issue until 
Chapter 12, where secondary-storage structure is covered. Generally, swap 
space is allocated as a chunk of disk, separate from the file system, so that its 
use is as fast as possible. 
Currently, standard swapping is used in few systems. It requires too 
much swapping time and provides too little execution time to be a reasonable 
memory-management solution. Modified versions of swapping, however, are 
found on many systems. 
A modification of swapping is used in many versions of UNIX. Swapping is 
normally disabled but will start if many processes are running and are using a 
threshold amount of memory. Swapping is again halted when the load on the 
system is reduced. Memory management in UNIX is described fully in Sections 
21.7 and A.6. 
Early PCs-which lacked the sophistication to implement more advanced 
memory-management methods-ran multiple large processes by using a 
modified version of swapping. A prime example is the Microsoft Windows 
3.1 operating system, which supports concurrent execution of processes in 
memory. If a new process is loaded and there is insufficient main memory, 
an old process is swapped to disk This operating system does not provide 
full swapping, however, because the user, rather than the scheduler, decides 
when it is time to preempt one process for another. Any swapped-out process 
remains swapped out (and not executing) until the user selects that process to 
run. Subsequent versions of Microsoft operating systems take advantage of the 
advanced MMU features now found in PCs. We explore such features in Section 
8.4 and in Chapter 9, where we cover virtual memory. 
The main memory must accommodate both the operating system and the 
various user processes. We therefore need to allocate main menlOry in the most 
efficient way possible. This section explains one common method, contiguous 
memory allocation. 
The memory is usually divided into two partitions: one for the resident 
operating system and one for the user processes. We can place the operating 
system in either low memory or high memory. The major factor affecting this 
decision is the location of the interrupt vector. Since the interrupt vector is 
often in low memory, programmers usually place the operating system in low 
memory as well. Thus, in this text, we discuss only the situation in which 
the operating system resides in low memory. The development of the other 
situation is similar. 
We usually want several user processes to reside in memory at the same 
time. We therefore need to consider how to allocate available memory to the 
processes that are in the input queue waiting to be brought into memory. 

8.3 

In. contiguous memory allocation, each process is contained in a single 
contiguous section of memory. 
8.3.1 Memory Mapping and Protection 
Before discussing memory allocation further, we must discuss the issue of 
memory mapping and protection. We can provide these features by using a 
relocation register, as discussed in Section 8.1.3, together with a limit register, 
as discussed in Section 8.1.1. The relocation register contaiTlS the value of 
the smallest physical address; the limit register contains the range of logical 
addresses (for example, relocation= 100040 and limit= 74600). With relocation 
and limit registers, each logical address must be less than the limit register; the 
MMU maps the logical address dynamically by adding the value in the relocation 
register. This mapped address is sent to memory (Figure 8.6). 
When the CPU scheduler selects a process for execution, the dispatcher 
loads the relocation and limit registers with the correct values as part of the 
context switch. Because every address generated by a CPU is checked against 
these registers, we can protect both the operating system and the other users' 
programs and data from being modified by this running process. 
The relocation-register scheme provides an effective way to allow the 
operating system's size to change dynamically. This flexibility is desirable in 
many situations. For example, the operating system contains code and buffer 
space for device drivers. If a device driver (or other operating-system service) 
is not commonly used, we do not want to keep the code and data in memory, as 
we might be able to use that space for other purposes. Such code is sometimes 
called transient operating-system code; it comes and goes as needed. Thus, 
using this code changes the size of the operating system during program 
execution. 
8.3.2 Memory Allocation 
Now we are ready to turn to memory allocation. One of the simplest 
methods for allocating memory is to divide memory into several fixed-sized 
Each partition may contain exactly one process. Thus, the degree 
no 
trap: addressing error 
Figure 8.6 Hardware supportfor relocation and limit registers. 

Chapter 8 
of multiprogramming is bound by the number of partitions. In this 
when a partition is free, a process is selected from the input 
queue and is loaded into the free partition. When the process terminates, the 
partition becomes available for another process. This method was originally 
used by the IBM OS/360 operating system (called MFT); it is no longer in use. 
The method described next is a generalization of the fixed-partition scheme 
(called MVT); it is used primarily in batch environments. Many of the ideas 
presented here are also applicable to a time-sharing environment in which 
pure segmentation is used for memory management (Section 8.6). 
In the 
scheme, the operating system keeps a table 
indicating which parts of memory are available and which are occupied. 
Initially, all memory is available for user processes and is considered one 
large block of available memory a 
Eventually as you will see, memory 
contains a set of holes of various sizes. 
As processes enter the system, they are put into an input queue. The 
operating system takes into account the memory requirements of each process 
and the amount of available memory space in determining which processes are 
allocated memory. When a process is allocated space, it is loaded into memory, 
and it can then compete for CPU time. When a process terminates, it releases its 
memory which the operating system may then fill with another process from 
the input queue. 
At any given time, then, we have a list of available block sizes and an 
input queue. The operating system can order the input queue according to 
a scheduling algorithm. Memory is allocated to processes untit finally, the 
memory requirements of the next process cannot be satisfied -that is, no 
available block of memory (or hole) is large enough to hold that process. The 
operating system can then wait until a large enough block is available, or it can 
skip down the input queue to see whether the smaller memory requirements 
of some other process can be met. 
In generat as mentioned, the memory blocks available comprise a set of 
holes of various sizes scattered throughout memory. When a process arrives 
and needs memory, the system searches the set for a hole that is large enough 
for this process. If the hole is too large, it is split into two parts. One part is 
allocated to the arriving process; the other is returned to the set of holes. When 
a process terminates, it releases its block of memory, which is then placed back 
in the set of holes. If the new hole is adjacent to other holes, these adjacent holes 
are merged to form one larger hole. At this point, the system may need to check 
whether there are processes waiting for memory and whether this newly freed 
and recombined memory could satisfy the demands of any of these waiting 
processes. 
This procedure is a particular instance of the general 
which concerns how to satisfy a request of size n from a 
There are many solutions to this problem. The 
and 
strategies are the ones most commonly used to select a free hole 
from the set of available holes. 
First fit. Allocate the first hole that is big enough. Searching can start either 
at the beginning of the set of holes or at the location where the previous 
first-fit search ended. We can stop searching as soon as we find a free hole 
that is large enough. 

8.3 

Best fit. Allocate the smallest hole that is big enough. We must search the 
entire list, unless the list is ordered by size. This strategy produces the 
smallest leftover hole. 
Worst fit. Allocate the largest hole. Again, we must search the entire list, 
unless it is sorted by size. This strategy produces the largest leftover hole, 
which may be more useful than the smaller leftover hole from a best-fit 
approach. 
Simulations have shown that both first fit and best fit are better than worst 
fit in terms of decreasing time and storage utilization. Neither first fit nor best 
fit is clearly better than the other in terms of storage utilization, but first fit is 
generally faster. 
8.3.3 Fragmentation 
Both the first-fit and best-fit strategies for memory allocation suffer from 
external 
As processes are loaded and removed from memory, 
the free memory space is broken into little pieces. External fragmentation exists 
when there is enough total memory space to satisfy a request but the available 
spaces are not contiguous; storage is fragmented into a large number of small 
holes. This fragmentation problem can be severe. In the worst case, we could 
have a block of free (or wasted) memory between every two processes. If all 
these small pieces of memory were in one big free block instead, we might be 
able to run several more processes. 
Whether we are using the first-fit or best-fit strategy can affect the amount 
of fragmentation. (First fit is better for some systems, whereas best fit is better 
for others.) Another factor is which end of a free block is allocated. (Which is 
the leftover piece-the one on the top or the one on the bottom?) No matter 
which algorithm is used, however, external fragmentation will be a problem. 
Depending on the total amount of memory storage and the average process 
size, external fragmentation may be a minor or a major problem. Statistical 
analysis of first fit, for instance, reveals that, even with some optimization, 
given N allocated blocks, another 0.5 N blocks will be lost to fragmentation. 
That is, one-third of memory may be unusable! This property is known as the 
Memory fragmentation can be internal as well as external. Consider a 
multiple-partition allocation scheme with a hole of 18,464 bytes. Suppose that 
the next process requests 18,462 bytes. If we allocate exactly the requested block, 
we are left with a hole of 2 bytes. The overhead to keep track of this hole will be 
substantially larger than the hole itself. The general approach to avoiding this 
problem is to break the physical memory into fixed-sized blocks and allocate 
memory in units based on block size. With this approach, the memory allocated 
to a process may be slightly larger than the requested memory. The difference 
between these two numbers is internal 
memory that 
is internal to a partition. 
One solution to the problem of external fragmentation is 
The 
goal is to shuffle the memory contents so as to place all free n'lemory together 
in one large block. Compaction is not always possible, however. If relocation 
is static and is done at assembly or load time, compaction cannot be done; 
compaction is possible only if relocation is dynamic and is done at execution 

Chapter 8 
8.4 
time. If addresses are relocated dynamically, relocation requires only moving 
the program and data and then changing the base register to reflect the new 
base address. When compaction is possible, we must determine its cost. The 
simplest compaction algorithm is to move all processes toward one end of 
memory; all holes move in the other direction, producing one large hole of 
available memory. This scheme can be expensive. 
Another possible solution to the external-fragmentation problem is to 
permit the logical address space of the processes to be noncontiguous, thus 
allowing a process to be allocated physical memory wherever such memory 
is available. Two complementary techniques achieve this solution: paging 
(Section 8.4) and segmentation (Section 8.6). These techniques can also be 
combined (Section 8.7). 
is a memory-management scheme that permits the physical address 
space 
a process to be noncontiguous. Paging avoids external fragmentation 
and the need for compaction. It also solves the considerable problem of 
fitting memory chunks of varying sizes onto the backin.g store; most memory-
management schemes used before the introduction of paging suffered from 
this problem. The problem arises because, when some code fragments or data 
residing in main memory need to be swapped out, space must be fmmd on 
the backing store. The backing store has the same fragmentation problems 
discussed in connection with main memory, but access is much slower, so 
compaction is impossible. Because of its advantages over earlier methods, 
paging in its various forms is used in most operating systems. 
physical 
address 
fOOOO •.. 0000 
f1111 ... 1111 
page table 
Figure 8.7 Paging hardware. 
1---------1 
physical 
memory 

8.4 

Traditionally, support for paging has been handled by hardware. However, 
recent designs have implemented paging by closely integrating the hardware 
and operating system, especially on 64-bit microprocessors. 
8.4.1 Basic Method 
The basic method for implementing paging involves breaking physical mem-
ory into fixed-sized blocks called harnes and breaking logical memory into 
blocks of the same size called 
When a process is to be executed, its 
pages are loaded into any available memory frames from their source (a file 
system or the backing store). The backing store is divided into fixed-sized 
blocks that are of the san1.e size as the memory frames. 
The hardware support for paging is illustrated in Figure 8.7. Every address 
generated 
the CPU is divided into two parts: a 
{p) and a 
. The page number is used as an index into a 
The 
page table contains the base address of each page in physical memory. This 
base address is combined with the page offset to define the physical memory 
address that is sent to the memory unit. The paging model of memory is shown 
in Figure 8.8. 
The page size (like the frame size) is defined by the hardware. The size 
of a page is typically a power of 2, varying between 512 bytes and 16 MB per 
page, depending on the computer architecture. The selection of a power of 2 as 
a page size makes the translation of a logical address into a page number and 
page offset particularly easy. If the size of the logical address space is 2m, and 
a page size is 271 addressing units (bytes or wordst then the high-order m- n 
bits of a logical address designate the page number, and the n low-order bits 
designate the page offset. Thus, the logical address is as follows: 
logical 
memory 
~w 
page table 
frame 
number 
physical 
memory 
Figure 8.8 Paging model of logical and physical memory. 

Chapter 8 
page number 
page offset 
d 
m -n 
n 
where p is an index into the page table and d is the displacement within the 
page. 
As a concrete (although minuscule) example, consider the memory in 
Figure 8.9. Here, in the logical address, n= 2 and m = 4. Using a page size 
of 4 bytes and a physical memory of 32 bytes (8 pages), we show how the 
user's view of memory can be mapped into physical memory. Logical address 
0 is page 0, offset 0. Indexing into the page table, we find that page 0 is in frame 
5. Thus, logical address 0 maps to physical address 20 [= (5 x 4) + 0]. Logical 
address 3 (page 0, offset 3) maps to physical address 23 [ = (5 x 4) + 3]. Logical 
address 4 is page 1, offset 0; according to the page table, page 1 is mapped to 
frame 6. Thus, logical address 4 maps to physical address 24 [ = ( 6 x 4) + O]. 
Logical address 13 maps to physical address 9. 
You may have noticed that paging itself is a form of dynamic relocation. 
Every logical address is bound by the paging hardware to some physical 
address. Using paging is similar to using a table of base (or relocation) registers, 
one for each frame of memory. 
~m6 
2 1 
3 2 
page table 
logical memory 
physical memory 
Figure 8.9 Paging example for a 32-byte memory with 4-byte pages. 

8.4 

When we use a paging scheme, we have no external fragmentation: any free 
frame can be allocated to a process that needs it. However, we may have some 
internal fragmentation. Notice that frames are allocated as units. If the memory 
requirements of a process do not happen to coincide with page boundaries, 
the last frame allocated may not be completely full. For example, if page size 
is 2,048 bytes, a process of 72,766 bytes will need 35 pages plus 1,086 bytes. It 
will be allocated 36 frames, resulting in internal fragmentation of 2,048 - 1,086 
= 962 bytes. In the worst case, a process would need 11 pages plus 1 byte. It 
would be allocated 11 + 1 frames, resulting in internal fragmentation of almost 
an entire frame. 
If process size is independent of page size, we expect internal fragmentation 
to average one-half page per process. This consideration suggests that small 
page sizes are desirable. However, overhead is involved in each page-table 
entry, and this overhead is reduced as the size of the pages increases. Also, 
disk I/0 is more efficient when the amount data being transferred is larger 
(Chapter 12). Generally, page sizes have grown over time as processes, data 
sets, and main memory have become larger. Today, pages typically are between 
4 KB and 8 KB in size, and some systems support even larger page sizes. Some 
CPUs and kernels even support multiple page sizes. For instance, Solaris uses 
page sizes of 8 KB and 4 MB, depending on the data stored by the pages. 
Researchers are now developing support for variable on-the-fly page size. 
Usually, each page-table entry is 4 bytes long, but that size can vary as well. 
A 32-bit entry can point to one of 232 physical page frames. If frame size is 4 KB, 
then a system with 4-byte entries can address 244 bytes (or 16 TB) of physical 
memory. 
When a process arrives in the system to be executed, its size, expressed 
in pages, is examined. Each page of the process needs one frame. Thus, if the 
process requires 11 pages, at least 11 frames must be available in memory. If n 
frames are available, they are allocated to this arriving process. The first page 
of the process is loaded inJo one of the allocated frames, and the frame number 
is put in the page table for this process. The next page is loaded into another 
frame, its frame number is put into the page table, and so on (Figure 8.10). 
An important aspect of paging is the clear separation between the user's 
view of memory and the actual physical memory. The user program views 
memory as one single space, containing only this one program. In fact, the user 
program is scattered throughout physical memory, which also holds other 
programs. The difference between the user's view of memory and the actual 
physical memory is reconciled by the address-translation hardware. The logical 
addresses are translated into physical addresses. This mapping is hidden from 
the user and is controlled by the operating system. Notice that the user process 
by definition is unable to access memory it does not own. It has no way of 
addressing memory outside of its page table, and the table includes only those 
pages that the process owns. 
Since the operating system is managing physical memory, it must be aware 
of the allocation details of physical memory-which frames are allocated, 
which frames are available, how many total frames there are, and so on. This 
information is generally kept in a data structure called a frame 
The frame 
table has one entry for each physical page frame, indicating whether the latter 
is free or allocated and, if it is allocated, to which page of which process or 
processes. 

Chapter 8 
free-frame list 
free-frame list 

1 13 

2 18 

3.20 

new-process page table 

(a) 
(b) 
Figure 8.10 Free frames (a) before allocation and (b) after allocation. 
In addition, the operating system must be aware that user processes operate 
in user space, and all logical addresses must be mapped to produce physical 
addresses. If a user makes a system call (to do I/0, for example) and provides 
an address as a parameter (a buffe1~ for instance), that address must be mapped 
to produce the correct physical address. The operating system maintains a copy 
of the page table for each process, just as it maintains a copy of the instruction 
counter and register contents. This copy is used to translate logical addresses to 
physical addresses whenever the operating system must map a logical address 
to a physical address manually. It is also used by the CPU dispatcher to define 
the hardware page table when a process is to be allocated the CPU. Paging 
therefore increases the context-switch time. 
8.4.2 Hardware Support 
Each operating system has its own methods for storing page tables. Most 
allocate a page table for each process. A pointer to the page table is stored with 
the other register values (like the instruction counter) in the process control 
block. When the dispatcher is told to start a process, it must reload the user 
registers and define the correct hardware page-table values from the stored 
user page table. 
The hardware implementation of the page table can be done in several 
In the simplest case, the page table is implemented as a set of dedicated 
These registers should be built with very high-speed logic to make the 
paging-address translation efficient. Every access to memory nlust go through 
the paging map, so efficiency is a major consideration. The CPU dispatcher 
reloads these registers, just as it reloads the other registers. Instructions to load 
or modify the page-table registers are, of course, privileged, so that only the 
operating system can change the memory map. The DEC PDP-11 is an example 
of such an architecture. The address consists of 16 bits, and the page size is 8 
KB. The page table thus consists of eight entries that are kept in fast registers. 

8.4 

The use of registers for the page table is satisfactory if the page table is 
reasonably sncall (for example, 256 entries). Most contemporary computers, 
however, allow the page table to be very large (for example, 1 million entries). 
For these machines, the use of fast registers to implement the page table is 
not feasible. Rather, the page table is kept in main memory, and a 
points to the page table. Changing page tables requires 
changing only this one register, substantially reducing context-switch time. 
The problem with this approach is the time required to access a user 
memory location. If we want to access location i, we must first index into 
the page table, using the value in the PTBR offset by the page number fori. This 
task requires a memory access. It provides us with the frame number, which 
is combined with the page offset to produce the actual address. We can then 
access the desired place in memory. With this scheme, two memory accesses are 
needed to access a byte (one for the page-table entry, one for the byte). Thus, 
memory access is slowed by a factor of 2. This delay would be intolerable under 
most circumstances. We might as well resort to swapping! 
The standard solution to this problem is to use a special, small, fast-
lookup hardware cache, called a 
bc.1Her 
The TLB 
is associative, high-speed memory. Each entry in the TLB consists of two parts: 
a key (or tag) and a value. When the associative memory is presented with an 
item, the item is compared with all keys simultaneously. If the item is found, 
the corresponding value field is returned. The search is fast; the hardware, 
however, is expensive. Typically, the number of entries in a TLB is small, often 
numbering between 64 and 1,024. 
The TLB is used with page tables in the following way. The TLB contains 
only a few of the page-table entries. When a logical address is generated by 
the CPU, its page number is presented to the TLB. If the page number is found, 
its frame number is immediately available and is used to access memory. The 
whole task may take less than 10 percent longer than it would if an unmapped 
memory reference were used. 
If the page number is not in the TLB (known as a 
a memory 
reference to the page table must be made. When the frame number is obtained, 
we can use it to access memory (Figure 8.11). In addition, we add the page 
number and frame number to the TLB, so that they will be found quickly on the 
next reference. If the TLB is already full of entries, the operating system must 
select one for replacement. Replacement policies range from least recently 
used (LRU) to random. Furthermore, some TLBs allow certain entries to be 
meaning that they cannot be removed from the TLB. Typically, 
TLB entries for kernel code are wired down. 
Some TLBs store 
in each TLB entry. An 
ASID uniquely identifies each process and is used to provide address-space 
protection for that process. When the TLB attempts to resolve virtual page 
numbers, it ensures that the ASID for the currently running process matches the 
ASID associated with the virtual page. If the ASIDs do not match, the attempt is 
treated as a TLB miss. In addition to providing address-space protection, an ASID 
allows the TLB to contain entries for several different processes simultaneously. 
If the TLB does not support separate ASIDs, then every time a new 
table 
is selected (for instance, with each context switch), the TLB must 
(or erased) to ensure that the next executing process does not use the wrong 
translation information. Otherwise, the TLB could include old entries that 

Chapter 8 
TLB hit 
TLB 
p 
TLB miss 
page table 
Figure 8.11 
Paging hardware with TLB. 
physical 
memory 
contain valid virtual addresses but have incorrect or invalid physical addresses 
left over from the previous process. 
The percentage of times that a particular page number is found in the TLB 
is called the 
An 80-percent hit ratio, for example, means that we 
find the desired page number in the TLB 80 percent of the time. If it takes 20 
nanoseconds to search the TLB and 100 nanoseconds to access memory, then 
a mapped-memory access takes 120 nanoseconds when the page number is 
in the TLB. If we fail to find the page number in the TLB (20 nanoseconds), 
then we must first access memory for the page table and frame number (100 
nanoseconds) and then access the desired byte in memory (100 nanoseconds), 
for a total of 220 nanoseconds. To find the effective 
we 
weight the case by its probability: 
effective access time = 0.80 x 120 + 0.20 x 220 
= 140 nanoseconds. 
In this example, we suffer a 40-percent slowdown in memory-access time (from 
100 to 140 nanoseconds). 
For a 98-percent hit ratio, we have 
effective access time = 0.98 x 120 + 0.02 x 220 
= 122 nanoseconds. 
This increased hit rate produces only a 22 percent slowdown in access time. 
We will further explore the impact of the hit ratio on the TLB in Chapter 9. 

8.4 

8.4.3 Protection 
Memory protection in a paged environment is accomplished by protection bits 
associated with each frame. Normally, these bits are kept in the page table. 
One bit can define a page to be read-write or read-only. Every reference 
to memory goes through the page table to find the correct frame nuncber. At 
the same time that the physical address is being computed, the protection bits 
can be checked to verify that no writes are being made to a read-only page. An 
attempt to write to a read-only page causes a hardware trap to the operating 
system (or memory-protection violation). 
We can easily expand this approach to provide a finer level of protection. 
We can create hardware to provide read-only, read-write, or execute-only 
protection; or, by providing separate protection bits for each kind of access, we 
can allow any combination of these accesses. Illegal attempts will be trapped 
to the operating system. 
One additional bit is generally attached to each entry in the page table: a 
bit. When this bit is set to "valid," the associated page is in the 
process's logical address space and is thus a legal (or valid) page. When the bit 
is set to"invalid," the page is not in the process's logical address space. Illegal 
addresses are trapped by use of the valid -invalid bit. The operating system 
sets this bit for each page to allow or disallow access to the page. 
Suppose, for example, that in a system with a 14-bit address space (0 to 
16383), we have a program that should use only addresses 0 to 10468. Given 
a page size of 2 KB, we have the situation shown in Figure 8.12. Addresses in 

frame number 
j valid-invalid bit 

10,468 
1 2,287 '-----'--'--'-' 
page n 
Figure 8. i 2 Valid (v) or invalid (i) bit in a page table. 

Chapter 8 
pages 0, 1, 2, 3, 4, and 5 are mapped normally through the page table. Any 
attempt to generate an address in pages 6 or 7, however, will find that the 
valid -invalid bit is set to invalid, and the computer will trap to flee operating 
system (invalid page reference). 
Notice that this scheme has created a problem. Because the program 
extends only to address 10468, any reference beyond that address is illegal. 
Howeve1~ references to page 5 are classified as valid, so accesses to addresses 
up to 12287 are valid. Only the addresses from 12288 to 16383 are invalid. This 
problem is a result of the 2-KB page size and reflects the internal fragmentation 
of paging. 
Rarely does a process use all its address range. In fact many processes 
use only a small fraction of the address space available to them. It would be 
wasteful in these cases to create a page table with entries for every page in the 
address range. Most of this table would be unused but would take up valuable 
memory space. Some systems provide hardware, in the form of a 
length 
to indicate the size of the page table. 
value is 
checked against every logical address to verify that the address is in the valid 
range for the process. Failure of this test causes an error trap to the operating 
system. 
8.4.4 Shared Pages 
An advantage of paging is the possibility of sharing common code. This con-
sideration is particularly important in a time-sharing environment. Consider a 
system that supports 40 users, each of whom executes a text editor. If the text 
editor consists of 150 KB of code and 50 KB of data space, we need 8,000 KB to 
support the 40 users. If the code is 
(or pure 
however, it 
can be shared, as shown in Figure 8.13. Here we see a three-page editor-each 
page 50 KB in size (the large page size is used to simplify the figure)-being 
shared among three processes. Each process has its own data page. 
Reentrant code is non-self-modifying code: it never changes during execu-
tion. Thus, two or more processes can execute the same code at the same time. 
Each process has its own copy of registers and data storage to hold the data for 
the process's execution. The data for two different processes wilt of course, be 
different. 
Only one copy of the editor need be kept in physical memory. Each user's 
page table maps onto the same physical copy of the editor, but data pages are 
mapped onto different frames. Thus, to support 40 users, we need only one 
copy of the editor (150 KB), plus 40 copies of the 50 KB of data space per user. 
The total space required is now 2)50 KB instead of 8,000 KB-a significant 
savings. 
Other heavily used programs can also be shared -compilers, window 
systems, run-time libraries, database systems, and so on. To be sharable, the 
code must be reentrant. The read-only nature of shared code should not be 
left to the correctness of the code; the operating system should enforce this 
property. 
The sharing of memory among processes on a system is similar to the 
sharing of the address space of a task by threads, described in Chapter 4. 
Furthermore, recall that in Chapter 3 we described shared memory as a method 

8.5 
ed 1 
.. 
ed 2 
ed 3 
data .1 
process P1 
process P3 
page table 
for P1 
page table 
for P3 
8.5 
ed 1 
ed 2 
ed 3 
data 2 
process P2 

data 1 

data 3 

ed 1 
ed 2 
ed 3 
[ 

data 2 
page table 
for P2 

Figure 8.13 Sharing of code in a paging environment. 

of interprocess corrununication. Some operating systems implement shared 
memory using shared pages. 
Organizing memory according to pages provides numerous benefits in 
addition to allowing several processes to share the same physical pages. We 
cover several other benefits in Chapter 9. 
In this section, we explore some of the most common techniques for structuring 
the page table. 
8.5.1 Hierarchical Paging 
Most modern computer systems support a large logical address space 
(232 to 264). In such an environment, the page table itself becomes excessively 
large. For example, consider a system with a 32-bit logical address space. If 
the page size in such a system is 4 KB (212), then a page table may consist of 
up to 1 million entries (232 /212). Assuming that each entry consists of 4 bytes, 
each process may need up to 4MB of physical address space for the page table 
alone. Clearly, we would not want to allocate the page table contiguously in 
main memory. One simple solution to this problem is to divide the page table 
into smaller pieces. We can accomplish this division in several ways. 
One way is to use a two-level paging algorithm, in which the page table 
itself is also paged (Figure 8.14). For example, consider again the system with 

Chapter 8 

page table 
memory 
Figure 8.14 A two-level page-table scheme. 
a 32-bit logical address space and a page size of 4 KB. A logical address is 
divided into a page number consisting of 20 bits and a page offset consisting 
of 12 bits. Because we page the page table, the page number is further divided 
into a 10-bit page number and a 10-bit page offset. Thus, a logical address is as 
follows: 
page number 
page offset 
d 

where p1 is an index into the outer page table and P2 is the displacement 
within the page of the outer page table. The address-translation method for this 
architecture is shown in Figure 8.15. Because address translation works from 
the outer page table inward, this scheme is also known as a 
The VAX architecture supports a variation of two-level paging. The VAX is 
a 32-bit machine with a page size of 512 bytes. The logical address space of a 
process is divided into four equal sections, each of which consists of 230 bytes. 
Each section represents a different part of the logical address space of a process. 
The first 2 high-order bits of the logical address designate the appropriate 
section. The next 21 bits represent the logical page number of that section, and 
the final 9 bits represent an offset in the desired page. By partitioning the page 

outer page 
table 
8.5 
Figure 8."15 Address translation for a two-level 32-bit paging architecture. 

table in this manner, the operating system can leave partitions unused until a 
process needs them. An address on the VAX architecture is as follows: 
section 
page 
offset 
s 
p 
d 

where s designates the section number, p is an index into the page table, and d 
is the displacement within the page. Even when this scheme is used, the size 
of a one-level page table for a VAX process using one section is 221 bits * 4 
bytes per entry= 8MB. To further reduce main-memory use, the VAX pages the 
user-process page tables. 
For a system with a 64-bit logical address space, a two-level paging scheme 
is no longer appropriate. To illustrate this point, let us suppose that the page 
size in such a system is 4 KB (212). In this case, the page table consists of up 
to 252 entries. If we use a two-level paging scheme, then the iml.er page tables 
can conveniently be one page long, or contain 210 4-byte entries. The addresses 
look like this: 
outer page 
inner page 
offset 
I .. Pl 
· .. · I 
P2 
·. I 
d 

The outer page table consists of 242 entries, or 244 bytes. The obvious way to 
avoid such a large table is to divide the outer page table into smaller pieces. 
(This approach is also used on some 32-bit processors for added flexibility and 
efficiency.) 
We can divide the outer page table in various ways. We can page the outer 
page table, giving us a three-level paging scheme. Suppose that the outer page 
table is made up of standard-size pages (210 entries, or 212 bytes). In this case, 
a 64-bit address space is still daunting: 
2nd outer page 
outer page 
inner page 
offset 
I 
Pr< 
.· ) 
P2 
I 
P3 
I 
d 

The outer page table is sti11234 bytes in size. 

Chapter 8 
The next step would be a four-level paging scheme, where the second-level 
outer page table itself is also paged, and so forth. The 64-bit UltraSPARC would 
require seven levels of paging-a prohibitive number of memory accesses-
to translate each logical address. You can see from this example why, for 64-bit 
architectures, hierarchical page tables are generally considered inappropriate. 
8.5.2 Hashed Page Tables 
A common approach for handling address spaces larger than 32 bits is to use 
a 
with the hash value being the virtual page number. Each 
entry in the hash table contains a linked list of elements that hash to the same 
location (to handle collisions). Each element consists of three fields: (1) the 
virtual page number, (2) the value of the mapped page frame, and (3) a pointer 
to the next element in the linked list. 
The algorithm works as follows: The virtual page number in the virtual 
address is hashed into the hash table. The virtual page number is compared 
with field 1 in the first element in the linked list. If there is a match, the 
corresponding page frame (field 2) is used to form the desired physical address. 
If there is no match, subsequent entries in the linked list are searched for a 
matching virtual page number. This scheme is shown in Figure 8.16. 
A variation of this scheme that is favorable for 64-bit address spaces has 
been proposed. This variation uses 
which are similar to 
hashed page tables except that each entry in the hash table refers to several 
pages (such as 16) rather than a single page. Therefore, a single page-table 
entry can store the mappings for multiple physical-page frames. Clustered 
page tables are particularly useful for 
address spaces, where memory 
references are noncontiguous and scattered throughout the address space. 
8.5.3 Inverted Page Tables 
Usually, each process has an associated page table. The page table has one 
entry for each page that the process is using (or one slot for each virtual 
hash table 
Figure 8.16 Hashed page table. 
physical 
address 
physical 
memory 

8.5 

address, regardless of the latter's validity). This table representation is a natural 
one, since processes reference pages through the pages' virtual addresses. The 
operating system must then translate this reference into a physical memory 
address. Since the table is sorted by virtual address, the operating system is 
able to calculate where in the table the associated physical address entry is 
located and to use that value directly. One of the drawbacks of this method 
is that each page table may consist of millions of entries. These tables may 
consume large amounts of physical memory just to keep track of how other 
physical memory is being used. 
To solve this problem, we can use an 
page 
An inverted 
page table has one entry for each real page (or frame) of memory. Each entry 
consists of the virtual address of the page stored in that real memory location, 
with information about the process that owns the page. Thus, only one page 
table is in the system, and it has only one entry for each page of physical 
memory. Figure 8.17 shows the operation of an inverted page table. Compare 
it with Figure 8.7, which depicts a standard page table in operation. Inverted 
page tables often require that an address-space identifier (Section 8.4.2) be 
stored in each entry of the page table, since the table usually contains several 
different address spaces mapping physical memory. Storing the address-space 
identifier ensures that a logical page for a particular process is mapped to the 
corresponding physical page frame. Examples of systems using inverted page 
tables include the 64-bit UltraSPARC and PowerPC. 
To illustrate this method, we describe a simplified version of the i11verted 
page table used in the IBM RT. Each virtual address in the system consists of a 
triple: 
<process-id, page-number, offset>. 
Each inverted page-table entry is a pair <process-id, page-number> where the 
process-id assumes the role of the address-space identifier. When a memory 
page table 
physical 
address 
Figure 8.17 Inverted page table. 
physical 
memory 

Chapter 8 
8.6 
reference occurs, part of the virtual address, consisting of <process-id, page-
number>, is presented to the memory subsystem. The inverted page table 
is then searched for a match. If a match is found-say, at entry i-then the 
physical address <i, offset> is generated. If no match is found, then an illegal 
address access has been attempted. 
Although this scheme decreases the amount of memory needed to store 
each page table, it increases the amount of time needed to search the table when 
a page reference occurs. Because the inverted page table is sorted by physical 
address, but lookups occur on virtual addresses, the whole table might need to 
be searched for a match. This search would take far too long. To alleviate this 
problem, we use a hash table, as described in Section 8.5.2, to limit the search 
to one-or at most a few-page-table entries. Of course, each access to the 
hash table adds a memory reference to the procedure, so one virtual memory 
reference requires at least two real memory reads-one for the hash-table entry 
and one for the page table. (Recall that the TLB is searched first, before the hash 
table is consulted, offering some performance improvement.) 
Systems that use inverted page tables have difficulty implementing shared 
memory. Shared memory is usually implemented as multiple virtual addresses 
(one for each process sharing the memory) that are mapped to one physical 
address. This standard method cannot be used with inverted page tables; 
because there is only one virtual page entry for every physical page, one 
physical page cannot have two (or more) shared virtual addresses. A simple 
technique for addressing this issue is to allow the page table to contain only 
one mapping of a virtual address to the shared physical address. This means 
that references to virtual addresses that are not mapped result in page faults. 
An. important aspect of memory management that became unavoidable with 
paging is the separation of the user's view of memory from the actual physical 
memory. As we have already seen, the user's view of memory is not the 
same as the actual physical memory. The user's view is mapped onto physical 
memory. This mapping allows differentiation between logical memory and 
physical memory. 
8.6.1 
Basic Method 
Do users think of memory as a linear array of bytes, some containing 
instructions and others containing data? Most people would say no. Rather, 
users prefer to view memory as a collection of variable-sized segments, with 
no necessary ordering among segments (Figure 8.18). 
Consider how you think of a program when you are writing it. You think 
of it as a main program with a set of methods, procedures, or functions. It 
may also include various data structures: objects, arrays, stacks, variables, and 
so on. Each of these modules or data elements is referred to by name. You 
talk about "the stack," "the math library," "the n1.ain program," without caring 
what addresses in memory these elements occupy. You are not concerned 
with whether the stack is stored before or after the Sqrt () function. Each 
of these segments is of variable length; the length is intrinsically defined by 

subroutine 
symbol 
table 
·. 
main 
program 
logical address 
8.6 
Figure 8.18 User's view of a program. 

the purpose of the segment in the program. Elements within a segment are 
identified by their offset from the begim1.ing of the segment: the first statement 
of the program, the seventh stack frame entry in the stack, the fifth instruction 
of the Sqrt (), and so on. 
is a memory-management scheme that supports this user 
view of memory. A logical address space is a collection of segments. Each 
segment has a name and a length. The addresses specify both the segment name 
and the offset within the segment. The user therefore specifies each address 
by two quantities: a segment name and an offset. (Contrast this scheme with 
the paging scheme, in which the user specifies only a single address, which is 
partitioned by the hardware into a page number and an offset, all invisible to 
the programmer.) 
For simplicity of implementation, segments are numbered and are referred 
to by a segn"lent number, rather than by a segment name. Thus, a logical address 
consists of a two tuple: 
<segment-number, offset>. 
Normally, the user program is compiled, and the compiler automatically 
constructs segments reflecting the input program. 
A C compiler might create separate segments for the following: 
The code 
Global variables 
The heap, from which memory is allocated 
The stacks used by each thread 
The standard C library 

Chapter 8 
< 
no 
segment 
table 
yes 
trap: addressing error 
+ 
Figure 8.19 Segmentation hardware. 
physical memory 
Libraries that are linked in during compile time might be assign.ed separate 
segments. The loader would take all these segments and assign them segment 
numbers. 
8.6.2 Hardware 
Although the user can now refer to objects in the program by a two-dimensional 
address, the actual physical memory is still, of course, a one-dimensional 
sequence of bytes. Thus, we must define an implementation to map two-
dimensional user-defined addresses into one-dimensional physical addresses. 
This mapping is effected by a 
Each entry in the segment table 
has a segment base and a segment limit. The segment base contains the startilcg 
physical address where the segment resides in memory, and the segment limit 
specifies the length of the segment. 
The use of a segment table is illustrated in Figure 8.19. A logical address 
consists of two parts: a segment number, s, and an offset into that segment, d. 
The segment number is used as an index to the segment table. The offset d of 
the logical address must be between 0 and the segment limit. If it is not, we trap 
to the operating system (logical addressing attempt beyond end of segment). 
When an offset is legal, it is added to the segment base to produce the address 
in physical memory of the desired byte. The segment table is thus essentially 
an array of base-limit register pairs. 
As an example, consider the situation shown in Figure 8.20. We have five 
segments numbered from 0 through 4. The segments are stored in physical 
memory as shown. The segment table has a separate entry for each segment, 
giving the beginning address of the segment in physical memory (or base) and 
the length of that segment (or limit). For example, segment 2 is 400 bytes long 
and begins at location 4300. Thus, a reference to byte 53 of segment 2 is mapped 

8.7 
subroutine 
segment o 
segment1 
symbol 
table 
.· 
segment 4 
main 
program 
segment 2 
logical address space 
8.7 

limit 
base 

segment table 
Figure 8.20 Example of segmentation. 
14001---1 
segment o 

3200 1-----1 
segment 3 
4300 1--~--1 
4700 segment 2 
segment 4 
5700 f--------1 
6300 . 
. 
s~gt\1e!it 1 

physical memory 

onto location 4300 +53= 4353. A reference to segment 3, byte 852, is mapped to 
3200 (the base of segment 3) + 852 = 4052. A reference to byte 1222 of segment 
0 would result in a trap to the operating system, as this segment is only tOOO 
bytes long. 
Both paging and segmentation have advantages and disadvantages. In fact 
some architectures provide both. In this section, we discuss the Intel Pentium 
architecture, which supports both pure segmentation and segmentation with 
paging. We do not give a complete description of the memory-management 
structure of the Pentium in this text. Rather, we present the major ideas on 
which it is based. We conclude our discussion with an overview of Linux 
address translation on Pentium systems. 
In Pentium systems, the CPU generates logical addresses, which are given 
to the segmentation unit. The segmentation unit produces a linear address for 
each logical address. The linear address is then given to the paging unit, which 
in turn generates the physical address in main memory. Thus, the segmentation 
and paging units form the equivalent of the memory-management unit (MMU). 
This scheme is shown in Figure 8.21. 
8.7.1 
Pentium Segmentation 
The Pentium architecture allows a segment to be as large as 4 GB, and the 
maximum number of segments per process is 16 K. The logical-address space 

9.1 
c 
ER 
In Chapter 8, we discussed various memory-management strategies used in 
computer systems. All these strategies have the same goal: to keep many 
processes in memory simultaneously to allow multiprogramming. However, 
they tend to require that an entire process be in memory before it can execute. 
Virtual memory is a tecrucique that allows the execution of processes 
that are not completely in memory. One major advantage of this scheme is 
that programs can be larger than physical memory. Further, virtual memory 
abstracts main memory into an extremely large, uniform array of storage, 
separating logical memory as viewed by the user from physical memory. 
This technique frees programmers from the concerns of memory-storage 
limitations. Virtual memory also allows processes to share files easily and 
to implement shared memory. In addition, it provides an efficient mechanism 
for process creation. Virtual memory is not easy to implement, however, and 
may substantially decrease performance if it is used carelessly. In this chapter, 
we discuss virtual memory in the form of demand paging and examine its 
complexity and cost. 
To describe the benefits of a virtual memory system. 
To explain the concepts of demand paging, page-replacement algorithms, 
and allocation of page frames. 
To discuss the principles of the working-set model. 
The memory-management algorithms outlined in Chapter 8 are necessary 
because of one basic requirement: The instructions being executed must be 
in physical memory. The first approach to meeting this requirement is to place 
the entire logical address space in physical memory. Dynamic loading can help 
to ease this restriction, but it generally requires special precautions and extra 
work by the programmer. 

Chapter 9 
The requirement that instructions m.ust be in physical memory to be 
executed seems both necessary and reasonable; but it is also unfortunate, since 
it limits the size of a program to the size of physical memory. In fact, an 
examination of real programs shows us that, in many cases, the entire program 
is not needed. For instance, consider the following: 
Programs often have code to handle unusual error conditions. Since these 
errors seldom, if ever, occur in practice, this code is almost never executed. 
Arrays,lists, and tables are often allocated more memory than they actually 
need. An array may be declared 100 by 100 elements, even though it is 
seldom larger than 10 by 10 elements. An assembler symbol table may 
have room for 3,000 symbols, although the average program has less than 
200 symbols. 
Certain options and features of a program may be used rarely. For instance, 
the routines on U.S. government computers that balance the budget have 
not been used in many years. 
Even in those cases where the entire program is needed, it may not all be 
needed at the same time. 
The ability to execute a program that is only partially in memory would 
confer many benefits: 
A program would no longer be constrained by the amount of physical 
memory that is available. Users would be able to write programs for an 
extremely large virtual address space, simplifying the programming task. 
page 0 
page 1 
page 2 
page v 
virtual 
memory 
memory 
map 
physical 
memory 
Figure 9.1 
Diagram showing virtual memory that is larger than physical memory. 

9.1 

Because each user program could take less physical memory, more 
programs could be run at the sance time, with a corresponding increase in 
CPU utilization and throughput but with no increase in response time or 
turnaround time. 
Less I/O would be needed to load or swap user programs into memory, so 
each user program would run faster. 
Thus, running a program that is not entirely in memory would benefit both 
the system and the user. 
involves the separation of logical memory as perceived 
by users from physical memory. This separation allows an extremely large 
virtual memory to be provided for programmers when only a smaller physical 
memory is available (Figure 9.1). Virtual memory makes the task of program-
ming much easier, because the programmer no longer needs to worry about 
the amount of physical memory available; she can concentrate instead on the 
problem to be programmed. 
The 
address space of a process refers to the logical (or virtual) view 
of how a process is stored in memory. Typically, this view is that a process 
begins at a certain logical address-say, address 0-and exists in contiguous 
memory, as shown in Figure 9.2. Recall from Chapter 8, though, that in fact 
physical memory may be organized in page frames and that the physical page 
frames assigned to a process may not be contiguous. It is up to the memory-
management unit (MMU) to map logical pages to physical page frames in 
memory. 
Note in Figure 9.2 that we allow for the heap to grow upward in memory 
as it is used for dynamic memory allocation. Similarly, we allow for the stack to 
grow downward in memory through successive function calls. The large blank 
space (or hole) between the heap and the stack is part of the virtual address 
Figure 9.2 Virtual address space. 

Chapter 9 
space but will require actual physical pages only if the heap or stack grows. 
Virtual address spaces that include holes are known as sparse address spaces. 
Using a sparse address space is beneficial because the holes can be filled as the 
stack or heap segments grow or if we wish to dynam.ically link libraries (or 
possibly other shared objects) during program execution. 
In addition to separating logical memory from physical memory, virtual 
memory allows files and memory to be shared by two or more processes 
through page sharing (Section 8.4.4). This leads to the following benefits: 
System libraries can be shared by several processes through mapping 
of the shared object into a virtual address space. Although each process 
considers the shared libraries to be part of its virtual address space, the 
actual pages where the libraries reside in physical memory are shared by 
all the processes (Figure 9.3). Typically, a library is mapped read-only into 
the space of each process that is linked with it. 
Similarly, virtual memory enables processes to share memory. Recall from 
Chapter 3 that two or more processes can communicate through the use 
of shared memory. Virtual memory allows one process to create a region 
of memory that it can share with another process. Processes sharing this 
region consider it part of their virtual address space, yet the actual physical 
pages of memory are shared, much as is illustrated in Figure 9.3. 
Virtual memory can allow pages to be shared during process creation with 
the fork() system calt thus speeding up process creation. 
We further explore these-and other-benefits of virtual memory later in 
this chapter. First though, we discuss implementing virtual memory through 
demand paging. 
shared library 
shared 
pages 
shared library 
Figure 9.3 Shared library using virtual memory. 

9.2 
9.2 

Consider how an executable program might be loaded from disk into n'lemory. 
One option is to load the entire program in physical memory at program 
execution time. However, a problent with this approach is that we may not 
initially need the entire program in memory. Suppose a program starts with 
a list of available options from which the user is to select. Loading the entire 
program into memory results in loading the executable code for all options, 
regardless of whether an option is ultimately selected by the user or not. An 
alternative strategy is to load pages only as they are needed. This technique is 
known as 
paging and is commonly used in virtual memory systems. 
With demand-paged virtual memory, pages are only loaded when they are 
demanded during program execution; pages that are never accessed are thus 
never loaded into physical memory. 
A demand-paging system is similar to a paging system with swapping 
(Figure 9.4) where processes reside in secondary memory (usually a disk). 
When we want to execute a process, we swap it into memory. Rather than 
swapping the entire process into memory, however, we use a 
A 
lazy swapper never swaps a page into memory unless that page will be needed. 
Since we are now viewing a process as a sequence of pages, rather than as one 
large contiguous address space, use of the term swapper is technically incorrect. 
A swapper manipulates entire processes, whereas a 
is concerned with 
the individual pages of a process. We thus use pager, rather than swapper, in 
connection with demand paging. 
program 
A 
program 
B 
main 
memory 
swap out 
so 90100110 

swap in 

Figure 9.4 Transfer of a paged memory to contiguous disk space. 

Chapter 9 
9.2.1 Basic Concepts 
When a process is to be swapped in, the pager guesses which pages will be 
used before the process is swapped out again. Instead of swapping in a whole 
process, the pager brings only those pages into memory. Thus, it avoids reading 
into memory pages that will not be used anyway, decreasing the swap time 
and the amount of physical memory needed. 
With this scheme, we need some form of hardware support to distinguish 
between the pages that are in memory and the pages that are on the disk. 
The valid -invalid bit scheme described in Section 8.4.3 can be used for this 
purpose. This time, however, when this bit is set to "valid/' the associated page 
is both legal and in n1.emory. If the bit is set to "invalid/' the page either is not 
valid (that is, not in the logical address space of the process) or is valid but 
is currently on the disk. The page-table entry for a page that is brought into 
memory is set as usuat but the page-table entry for a page that is not currently 
in memory is either simply marked invalid or contains the address of the page 
on disk. This situation is depicted in Figure 9.5. 
Notice that marking a page invalid will have no effect if the process never 
attempts to access that page. Hence, if we guess right and page in all and only 
those pages that are actually needed, the process will run exactly as though we 
had brought in all pages. While the process executes and accesses pages that 
are 
execution proceeds normally. 

valid-invalid 
frame 
bit 
'\. I 
0 4 v 
logical 
memory 
physical memory 
DOD 
D 
[1J 
[.@JtB] 
ODD 
Figure 9.5 Page table when some pages are not in main memory. 

operating 
system 
reference 
(,;\, page is on 
\.:V backing store 
® 
trap 
restart 
instruction 
page table 
® 
reset page 
table 
physical 
memory 
9.2 

bring in 
missing page 
Figure 9.6 Steps in handling a page fault. 

But what happens if the process tries to access a page that was not brought 
into memory? Access to a page marked invalid causes a 
The paging 
hardware, in translating the address through the page table, will notice that 
the invalid bit is set, causing a trap to the operating system. This trap is the 
result of the operating system's failure to bring the desired page into memory. 
The procedure for handling this page fault is straightforward (Figure 9.6): 
We check an internal table (usually kept with the process control block) 
for this process to determine whether the reference was a valid or an 
invalid memory access. 
If the reference was invalid, we terminate the process. If it was valid, but 
we have not yet brought in that page, we now page it in. 
We find a free frame (by taking one from the free-frame list, for example). 
We schedule a disk operation to read the desired page into the newly 
allocated frame. 
When the disk read is complete, we modify the internal table kept with 
the process and the page table to indicate that the page is now in memory. 
We restart the instruction that was interrupted by the trap. The process 
can now access the page as though it had always been in memory. 
In the extreme case, we can start executing a process with no pages in 
memory. When the operating system sets the instruction pointer to the first 

Chapter 9 
instruction of the process, which is on a non-memory-resident page, the process 
immediately faults for the page. After this page is brought into memory, the 
process continues to execute, faulting as necessary until every page that it 
needs is in memory. At that 
it can execute with no more faults. This 
scheme is 
never bring a page into memory until it is 
required. 
Theoretically, some programs could access several new pages of memory 
with each instruction execution (one page for the instruction and many for 
data), possibly causing multiple page faults per instruction. This situation 
would result in unacceptable system performance. Fortunately, analysis of 
running processes shows that this behavior is exceedingly unlikely. Programs 
tend to have 
described in Section 9.6.1, which results in 
reasonable performance from demand paging. 
The hardware to support demand paging is the same as the hardware for 
paging and swapping: 
Page table. This table has the ability to mark an entry invalid through a 
valid -invalid bit or a special value of protection bits. 
Secondary memory. This memory holds those pages that are not present 
in main memory. The secondary memory is usually a high-speed disk. It is 
known as the swap device, and the section of disk used for this purpose is 
known as 
Swap-space allocation is discussed in Chapter 12. 
A crucial requirement for demand paging is the ability to restart any 
instruction after a page fault. Because we save the state (registers, condition 
code, instruction counter) of the interrupted process when the page fault 
occurs, we must be able to restart the process in exactly the same place and 
state, except that the desired page is now in memory and is accessible. In most 
cases, this requirement is easy to meet. A page fault may occur at any memory 
reference. If the page fault occurs on the instruction fetch, we can restart by 
fetching the instruction again. If a page fault occurs while we are fetching an 
operand, we must fetch and decode the instruction again and then fetch the 
operand. 
As a worst-case example, consider a three-address instruction such as ADD 
the content of A to B, placing the result in C. These are the steps to execute this 
instruction: 
Fetch and decode the instruction (ADD). 
Fetch A 
Fetch B. 
Add A and B. 
Store the sum in C. 
If we fault when we try to store inC (because C is in a page not currently 
in memory), we will have to get the desired page, bring it in, correct the 
page table, and restart the instruction. The restart will require fetching the 
instruction again, decoding it again, fetching the two operands again, and 

9.2 

then adding again. However, there is not much repeated work (less than one 
complete instruction), and the repetition is necessary only when a page fault 
occurs. 
The major difficulty arises when one instruction may modify several 
different locations. For example, consider the IBM System 360/370 MVC (move 
character) instruction, which can ncove up to 256 bytes from one location to 
another (possibly overlapping) location. If either block (source or destination) 
straddles a page boundary, a page fault might occur after the move is partially 
done. In addition, if the source and destination blocks overlap, the source 
block may have been modified, in which case we cannot simply restart the 
instruction. 
This problem can be solved in two different ways. In one solution, the 
microcode computes and attempts to access both ends of both blocks. If a page 
fault is going to occm~ it will happen at this step, before anything is modified. 
The move can then take place; we know that no page fault can occur, since all 
the relevant pages are in memory. The other solution uses temporary registers 
to hold the values of overwritten locations. If there is a page fault, all the old 
values are written back into memory before the trap occurs. This action restores 
memory to its state before the instruction was started, so that the instruction 
can be repeated. 
This is by no means the only architectural problem resulting from adding 
paging to an existing architecture to allow demand paging, but it illustrates 
some of the difficulties involved. Paging is added between the CPU and the 
memory in a computer system. It should be entirely transparent to the user 
process. Thus, people often assume that paging can be added to any system. 
Although this assumption is true for a non-demand-paging environment, 
where a page fault represents a fatal errm~ it is not true where a page fault 
means only that an additional page must be brought into memory and the 
process restarted. 
9.2.2 Performance of Demand Paging 
Demand paging can significantly affect the performance of a computer system. 
To see why, let's compute the effective access time for a demand-paged 
memory. For most computer systems, the memory-access time, denoted ma, 
ranges from 10 to 200 nanoseconds. As long as we have no page faults, the 
effective access time is equal to the memory access time. If, howeve1~ a page 
fault occurs, we must first read the relevant page from disk and then access the 
desired word. 
Let p be the probability of a page fault (0 :::; p :::; 1). We would expect p to 
be close to zero-that is, we would expect to have only a few page faults. The 
<>t'tP>r'!·nrr-> access 
is then 
effective access time= (1 - p) x ma + p x page fault time. 
To compute the effective access time, we must know how much time is 
needed to service a page fault. A page fault causes the following sequence to 
occur: 
Trap to the operating system. 
Save the user registers and process state. 

Chapter 9 
Deterncine that the interrupt was a page fault. 
Check that the page reference was legal and determine the location of the 
page on the disk 
Issue a read from the disk to a free frame: 
a. Wait in a queue for this device until the read request is serviced. 
b. Wait for the device seek and/ or latency time. 
c. Begin the transfer of the page to a free frame. 
While waiting, allocate the CPU to some other user (CPU scheduling, 
optional). 
Receive an interrupt from the disk I/0 subsystem (I/0 completed). 
Save the registers and process state for the other user (if step 6 is executed). 
Determine that the interrupt was from the disk 
Correct the page table and other tables to show that the desired page is 
now in memory. 
Wait for the CPU to be allocated to this process again. 
Restore the user registers, process state, and new page table, and then 
resume the interrupted instruction. 
Not all of these steps are necessary in every case. For example, we are assuming 
that, in step 6, the CPU is allocated to another process while the I/O occurs. 
This arrangement allows multiprogramming to maintain CPU utilization but 
requires additional time to resume the page-fault service routine when the I/0 
transfer is complete. 
In any case, we are faced with tlu·ee major components of the page-fault 
service time: 
Service the page-fault interrupt. 
Read in the page. 
Restart the process. 
The first and third tasks can be reduced, with careful coding, to several 
hundred instructions. These tasks may take from 1 to 100 microseconds each. 
The page-switch time, however, will probably be close to 8 milliseconds. 
(A typical hard disk has an average latency of 3 milliseconds, a seek of 
5 milliseconds, and a transfer time of 0.05 milliseconds. Thus, the total 
paging time is about 8 milliseconds, including hardware and software time.) 
Remember also that we are looking at only the device-service time. If a queue 
of processes is waiting for the device, we have to add device-queueing time as 
we wait for the paging device to be free to service our request, increasing even 
more the time to swap. 
With an average page-fault service time of 8 milliseconds and a memory-
access time of 200 nanoseconds, the effective access time in nanoseconds is 

9.3 
effective access time= (1 - p) x (200) + p (8 milliseconds) 
= (1 
p) X 200 + p X 8,000,000 
= 200 + 7,999,800 X p. 

We see, then, that the effective access time is directly proportional to the 
If one access out of 1,000 causes a page fault, the effective 
access time is 8.2 microseconds. The computer will be slowed down by a factor 
of 40 because of demand paging! If we want performance degradation to be 
less than 10 percent, we need 
220 > 200 + 7,999,800 X p, 
20 > 7,999,800 X p, 
p < 0.0000025. 
That is, to keep the slowdown due to paging at a reasonable level, we can 
allow fewer than one memory access out of 399,990 to page-fault. In sum, 
it is important to keep the page-fault rate low in a demand-paging system. 
Otherwise, the effective access time increases, slowing process execution 
dramatically. 
An additional aspect of demand paging is the handling and overall use 
of swap space. Disk I/0 to swap space is generally faster than that to the file 
system. It is faster because swap space is allocated in much larger blocks, and 
file lookups and indirect allocation methods are not used (Chapter 12). The 
system can therefore gain better paging throughput by copying an entire file 
image into the swap space at process startup and then performing demand 
paging from the swap space. Another option is to demand pages from the file 
system initially but to write the pages to swap space as they are replaced. This 
approach will ensure that only needed pages are read from the file system but 
that all subsequent paging is done from swap space. 
Some systems attempt to limit the amount of swap space used through 
demand paging of binary files. Demand pages for such files are brought directly 
from the file system. However, when page replacement is called for, these 
frames can simply be overwritten (because they are never modified), and the 
pages can be read in from the file system again if needed. Using this approach, 
the file system itself serves as the backing store. Howeve1~ swap space must 
still be used for pages not associated with a file; these pages include the stack 
and heap for a process. This method appears to be a good compromise and is 
used in several systems, including Solaris and BSD UNIX. 
In Section 9 .2, we illustrated how a process can start quickly by merely demand-
paging in the page containing the first instruction. However, process creation 
using the fork() system call may initially bypass the need for demand paging 
by using a technique similar to page sharing (covered in Section 8.4.4). This 
technique provides for rapid process creation and minimizes the number of 
new pages that must be allocated to the newly created process. 

Chapter 9 
physical 
Figure 9.7 Before process I modifies page C. 
Recall thatthe fork() system call creates a child process that is a duplicate 
of its parent. Traditionally, fork() worked by creating a copy of the parent's 
address space for the child, duplicating the pages belonging to the parent. 
However, considering that many child processes invoke the exec() system 
call immediately after creation, the copying of the parent's address space may 
be unnecessary. Instead, we can use a technique known as 
which works by allowing the parent and child processes initially to share the 
same pages. These shared pages are marked as copy-on-write pages, meaning 
that if either process writes to a shared page, a copy of the shared page is 
created. Copy-on-write is illustrated in Figures 9.7 and Figure 9.8, which show 
the contents of the physical memory before and after process 1 modifies page 
c. 
For example, assume that the child process attempts to modify a page 
containing portions of the stack, with the pages set to be copy-on-write. The 
operating system will create a copy of this page, nl.apping it to the address space 
of the child process. The child process will then modify its copied page and not 
the page belonging to the parent process. Obviously, when the copy-on-write 
technique is used, only the pages that are modified by either process are copied; 
all unmodified pages can be shared by the parent and child processes. Note, too, 
process1 
physical 
memory 
Figure 9.8 After process 1 modifies page C. 
process2 

9.4 
9.4 

that only pages that can be nwdified need be m~arked as copy-on-write. Pages 
that cannot be modified (pages containing executable code) can be shared by 
the parent and child. Copy-on-write is a common technique used by several 
operating systems, including Windows XP, Linux, and Solaris. 
When it is determined that a page is going to be duplicated using copy-
on-write, it is important to note the location from which the free page will 
be allocated. Many operating systems provide a 
of free pages for such 
requests. These free pages are typically allocated when the stack or heap for a 
process must expand or when there are copy-on-write pages to be managed. 
Operating systems typically allocate these pages using a technique known as 
zem-fHl-on-den:1and. Zero-fill-on-demand pages have been zeroed-out before 
being allocated, thus erasing the previous contents. 
Several versions of UNIX (including Solaris and Linux) provide a variation 
ofthe fork() system call-vfork() (for 
fori()- that operates 
differently from fork() with copy-on-write. With vfork(), the parent process 
is suspended, and the child process uses the address space of the parent. 
Because vfork() does not use copy-on-write, if the child process changes 
any pages of the parent's address space, the altered pages will be visible to the 
parent once it resumes. Therefore, vf ork () must be used with caution to ensure 
that the child process does not modify the address space of the parent. vf or k () 
is intended to be used when the child process calls exec() immediately after 
creation. Because no copying of pages takes place, vf ork () is an extremely 
efficient method of process creation and is sometimes used to implement UNIX 
command-line shell interfaces. 
In our earlier discussion of the page-fault rate, we assumed that each page 
faults at most once, when it is first referenced. This representation is not strictly 
accurate, however. If a process of ten pages actually uses only half of them, then 
demand paging saves the I/0 necessary to load the five pages that are never 
used. We could also increase our degree of multiprogramming by running 
twice as many processes. Thus, if we had forty frames, we could run eight 
processes, rather than the four that could run if each required ten frames (five 
of which were never used). 
If we increase our degree of multiprogramming, we are 
memory. If we run six processes, each of which is ten pages in size but 
uses only five pages, we have higher CPU utilization and throughput, 
ten frames to spare. It is possible, however, that each of these processes, for a 
particular data set, may suddenly try to use all ten of its pages, resulting in a 
need for sixty frames when only forty are available. 
Further, consider that system memory is not used only for holding program 
pages. Buffers for I/ 0 also consume a considerable amount of memory. This use 
can increase the strain on memory-placement algorithms. Deciding how much 
memory to allocate to I/0 and how much to program pages is a significant 
challenge. Some systems allocate a fixed percentage of memory for I/0 buffers, 
whereas others allow both user processes and the I/0 subsystem to compete 
for all system memory. 

Chapter 9 
valid-invalid 
PC--::"-_='-~~==: !came f il 
logical memory 
for user 1 
page table 
for user 1 
valid-invalid 

frame ~bi~ 
r---~ 
v 
v 
~-------'--' 

logical memory 
for user 2 
page table 
for user 2 

monitor 

J 

A 

E 
physical 
memory 
Figure 9.9 Need for page replacement 
Over-allocation of memory manifests itself as follows. While a user process 
is executing, a page fault occurs. The operating system determines where the 
desired page is residing on the disk but then finds that there are no free frames 
on the free-frame list; all memory is in use (Figure 9.9). 
The operating system has several options at this point. It could terminate 
the user process. However, demand paging is the operating system's attempt to 
improve the computer system's utilization and throughput. Users should not 
be aware that their processes are running on a paged system-paging should 
be logically transparent to the user. So this option is not the best choice. 
The operating system could instead swap out a process, freeing all its 
frames and reducing the level of multiprogramming. This option is a good one 
in certain circumstances, and we consider it further in Section 9.6. Here, we 
discuss the most common solution: 
9.4.1 Basic Page Replacement 
Page replacement takes the following approach. If no frame is free, we find 
one that is not currently being used and free it. We can free a frame by writing 
its contents to swap space and changing the page table (and all other tables) to 
indicate that the page is no longer in memory (Figure 9.10). We can now use 
the freed frame to hold the page for which the process faulted. We modify the 
page-fault service routine to include page replacement: 
Find the location of the desired page on the disk. 
Find a free frame: 
a. If there is a free frame, use it. 

9.4 

b. If there is no free frame, use a page-replacement algorithnc to select 
a 
c. Write the victim frame to the disk; change the page and frame tables 
accordingly. 
Read the desired page into the newly freed frame; change the page and 
frame tables. 
Restart the user process. 
Notice that, if no frames are free, two page transfers (one out and one in) are 
required. This situation effectively doubles the page-fault service time and 
increases the effective access time accordingly. 
We can reduce this overhead by using a 
(or 
When this 
scheme is used, each page or frame has a modify bit associated with it in the 
hardware. The modify bit for a page is set by the hardware whenever any word 
or byte in the page is written into, indicating that the page has been modified. 
When we select a page for replacement, we examine its modify bit. If the bit 
is set, we know that the page has been modified since it was read in from the 
disk. In this case, we must write the page to the disk. If the modify bit is not set, 
however, the page has not been modified since it was read into memory. In this 
case, we need not write the memory page to the disk: it is already there. This 
technique also applies to read-only pages (for example, pages of binary code). 
Such pages cannot be modified; thus, they may be discarded when desired. 
This scheme can significantly reduce the time required to service a page fault, 
since it reduces I/O time by one-half if the page has not been modified. 
frame 
valid-invalid bit 
'\. 
/ 
physical 
memory 
Figure 9.10 Page replacement 

Chapter 9 
Page replacement is basic to demand paging. It completes the separation 
between logical memory and physical memory. With this mechanism, an 
enormous virtual memory can be provided for programn'lers on a smaller 
physical memory. With no demand paging, user addresses are mapped into 
physical addresses, so the two sets of addresses can be different. All the pages of 
a process still must be in physical memory, however. With demand paging, the 
size of the logical address space is no longer constrained by physical memory. 
If we have a user process of twenty pages, we can execute it in ten frames 
simply by using demand paging and using a replacement algorithm to find 
a free frame whenever necessary. If a page that has been modified is to be 
replaced, its contents are copied to the disk. A later reference to that page will 
cause a page fault. At that time, the page will be brought back into memory, 
perhaps replacing some other page in the process. 
We must solve two major problems to implement demand 
develop a 
algorithm and a '"''"""""-"'"'""l<tcemE~lU ~~F"'-'~~"''H'" 
That is, if we have multiple processes in memory, we must decide how many 
frames to allocate to each process; and when page replacement is required, 
we must select the frames that are to be replaced. Designing appropriate 
algorithms to solve these problems is an important task, because disk I/0 
is so expensive. Even slight improvements in demand-paging methods yield 
large gains in system performance. 
There are many different page-replacement algorithms. Every operating 
system probably has its own replacement scheme. How do we select a 
particular replacement algorithm? In general, we want the one with the lowest 
page-fault rate. 
We evaluate an algorithm by running it on a particular string of memory 
references and computing the number of page faults. The string of memory 
references is called a reference 
We can generate reference strings 
artificially (by using a random-number generator, for example), or we can trace 
a given system and record the address of each memory reference. The latter 
choice produces a large number of data (on the order of 1 million addresses 
per second). To reduce the number of data, we use two facts. 
First, for a given page size (and the page size is generally fixed by the 
hardware or system), we need to consider only the page number, rather than 
the entire address. Second, if we have a reference to a page p, then any references 
to page p that immediately follow will never cause a page fault. Page p will be in 
memory after the first reference, so the immediately following references will 
not fault. 
For example, if we trace a particular process, we might record the following 
address sequence: 
0100,0432,0101,0612,0102,0103,0104,0101,0611,0102,0103, 
0104,0101,0610,0102,0103,0104,0101,0609,0102,0105 
At 100 bytes per page, this sequence is reduced to the following reference 
string: 
1, 4, 1, 6, 1, 6, 1, 6, 1, 6, 1 

9.4 

g) 14 
:::J 
.;2 12 
Q) 
Ol 10 
cO 
0.. 

'-
Q) 
..0 

E 
:::J c 

number of frames 
Figure 9.1 i 
Graph of page faults versus number of frames. 
To determine the number of page faults for a particular reference string and 
page-replacement algorithm, we also need to know the number of page frames 
available. Obviously, as the number of frames available increases, the number 
of page faults decreases. For the reference stril'lg considered previously, for 
example, if we had three or more frames, we would have only three faults-
one fault for the first reference to each page. In contrast, with only one frame 
available, we would have a replacement with every reference, resulting in 
eleven faults. In general, we expect a curve such as that in Figure 9.11. As the 
number of frames increases, the number of page faults drops to some minimal 
level. Of course, adding physical memory increases the number of frames. 
We next illustrate several page-replacement algorithms. In doing so, we 
use the reference string 
for a memory with three frames. 
9.4.2 FIFO Page Replacement 
The simplest page-replacement algorithm is a first-in, first-out (FIFO) algorithm. 
A FIFO replacement algorithm associates with each page the time when that 
page was brought into memory. When a page must be replaced, the oldest 
page is chosen. Notice that it is not strictly necessary to record the time when 
a page is brought in. We can create a FIFO queue to hold all pages in memory. 
We replace the page at the head of the queue. When a page is brought into 
memory, we insert it at the tail of the queue. 
For our example reference string, our three frames are initially empty. The 
first three references (7, 0, 1) cause page faults and are brought into these empty 
frames. The next reference (2) replaces page 7, because page 7 was brought in 
first. Since 0 is the next reference and 0 is already in memory, we have no fault 
for this reference. The first reference to 3 results in replacement of page 0, since 

Chapter 9 
reference string 

page frames 
Figure 9.12 FIFO page-replacement algorithm. 
it is now first in line. Because of this replacement, the next reference, to 0, will 
fault. Page 1 is then replaced by page 0. This process continues as shown in 
Figure 9.12. Every time a fault occurs, we show which pages are in our three 
frames. There are fifteen faults altogether. 
The FIFO page-replacement algorithm is easy to Lmderstand and program. 
However, its performance is not always good. On the one hand, the page 
replaced may be an initialization module that was used a long time ago and is 
no longer needed. On the other hand, it could contain a heavily used variable 
that was initialized early and is in constant use. 
Notice that, even if we select for replacement a page that is in active use, 
everything still works correctly. After we replace an active page with a new 
one, a fault occurs almost immediately to retrieve the active page. Some other 
page must be replaced to bring the active page back into memory. Thus, a bad 
replacement choice increases the page-fault rate and slows process execution. 
It does not, however, cause incorrect execution. 
To illustrate the problems that are possible with a FIFO page-replacement 
algorithm, we consider the following reference string: 
1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 
Figure 9.13 shows the curve of page faults for this reference string versus the 
number of available frames. Notice that the number of faults for four frames 
(ten) is greater than the number of faults for three frames (nine)! This most 
unexpected result is known as 
. for some page-replacement 
algorithms, the page-fault rate may increase as the number of allocated frames 
increases. We would expect that giving more memory to a process would 
improve its performance. In some early research, investigators noticed that 
this assumption was not always true. Belady's anomaly was discovered as a 
result. 
9.4.3 Optimal Page Replacement 
of Belady's anomaly was the search for an 
which has the lowest page-fault rate of all 
algorithms and will never suffer from Belady's anomaly. Such an algorithm 
does exist and has been called OPT or MIN. It is simply this: 
Replace the page that will not be used 
for the longest period of time. 

9.4 

~ 
:::5 2 12 
CJ) 
OJ 10 
m 
0.. 

CJ 
_o 

E 
:::5 c 

number of frames 
Figure 9.13 Page-fault curve for FIFO replacement on a reference string. 
Use of this page-replacement algorithm guarantees the lowest possible page-
fault rate for a fixed number of frames. 
For example, on our sample reference string, the optimal page-replacement 
algorithm would yield nine page faults, as shown in Figure 9.14. The first three 
references cause faults that fill the three empty frames. The reference to page 
2 replaces page 7, because page 7 will not be used until reference 18, whereas 
page 0 will be used at 5, and page 1 at 14. The reference to page 3 replaces 
page 1, as page 1 will be the last of the three pages in memory to be referenced 
again. With only nine page faults, optimal replacement is much better than 
a FIFO algorithm, which results in fifteen faults. (If we ignore the first three, 
which all algorithms must suffer, then optimal replacement is twice as good as 
FIFO replacement.) Irt fact, no replacement algorithm can process this reference 
string in three frames with fewer than nine faults. 
Unfortunately, the optimal page-replacement algorithm is difficult to 
implement, because it requires future knowledge of the reference string. (We 
encountered a similar situation with the SJF CPU-schedulin.g algorithm in 
Section 5.3.2.) As a result, the optimal algorithm is used mainly for comparison 
studies. For instance, it may be useful to know that, although a new algorithm 
reference string 

page frames 
Figure 9.14 Optimal page-replacement algorithm. 

Chapter 9 
is not optimat it is within 12.3 percent of optimal at worst and within 4.7 
percent on average. 
9.4.4 LRU Page Replacement 
lf the optimal algorithm is not feasible, perhaps an approximation of the 
optimal algorithm is possible. The key distinction between the FIFO and OPT 
algorithms (other than looking backward versus forward in time) is that the 
FIFO algorithm uses the time when a page was brought into memory, whereas 
the OPT algorithm uses the time when a page is to be used. If we use the 
recent past as an approximation of the near future, then we can replace the 
that has not been used for the longest period of time. This approach is the 
LRU replacement associates with each page the time of that page's last use. 
When a page must be replaced, LRU chooses the page that has not been used 
for the longest period of time. We can think of this strategy as the optimal 
page-replacement algorithm looking backward in time, rather than forward. 
(Strangely, if we let sR be the reverse of a reference stringS, then the page-fault 
rate for the OPT algorithm on Sis the same as the page-fault rate for the OPT 
algorithm on SR. Similarly, the page-fault rate for the LRU algorithm on Sis the 
same as the page-fault rate for the LRU algorithm on sR.) 
The result of applying LRU replacement to our example reference string is 
shown in Figure 9.15. The LRU algorithm produces twelve faults. Notice that 
the first five faults are the same as those for optimal replacement. When the 
reference to page 4 occurs, however, LRU replacement sees that, of the three 
frames in memory, page 2 was used least recently. Thus, the LRU algorithm 
replaces page 2, not knowing that page 2 is about to be used. When it then faults 
for page 2, the LRU algorithm replaces page 3, since it is now the least recently 
used of the three pages in memory. Despite these problems, LRU replacement 
with twelve faults is much better than FIFO replacement with fifteen. 
The LRU policy is often used as a page-replacement algorithm and 
is considered to be good. The major problem is how to implement LRU 
replacement. An LRU page-replacement algorithm may require substantial 
hardware assistance. The problem is to determine an order for the frames 
defined by the time of last use. Two implementations are feasible: 
Counters. In the simplest case, we associate with each page-table entry a 
time-of-use field and add to the CPU a logical clock or counter. The clock is 
reference string 

page frames 
Figure 9.15 LRU page-replacement algorithm. 

9.4 

incremented for every memory reference. Whenever a reference to a page 
is made, the contents of the clock register are copied to the ti1ne-of-use 
field in the page-table entry for that page. In this way, we always have 
the "time" of the last reference to each page. We replace the page with the 
smallest time value. This scheme requires a search of the page table to find 
the LRU page and a write to memory (to the time-of-use field in the page 
table) for each memory access. The times must also be m~aintained when 
page tables are changed (due to CPU scheduling). Overflow of the clock 
must be considered. 
Stack Another approach to implementing LRU replacement is to keep 
a stack of page numbers. Whenever a page is referenced, it is removed 
from the stack and put on the top. In this way, the most recently used 
page is always at the top of the stack and the least recently used page is 
always at the bottom (Figure 9.16). Because entries must be removed from 
the middle of the stack, it is best to implement this approach by using a 
doubly linked list with a head pointer and a tail pointer. Removing a page 
and putting it on the top of the stack then requires changing six pointers 
at worst. Each update is a little more expensive, but there is no search for 
a replacement; the tail pointer points to the bottom of the stack, which is 
the LRU page. This approach is particularly appropriate for software or 
microcode implementations of LRU replacement. 
Like optimal replacement, LRU replacement does not suffer from Belady's 
Both belong to a class of page-replacement algorithms, called si:ack 
that can never exhibit Belady's anomaly. A stack algorithm is 
an algorithm for which it can be shown that the set of pages in memory for n 
frames is always a subset of the set of pages that would be in memory with n + 1 
frames. For LRU replacement, the set of pages in memory would be the n most 
recently referenced pages. If the number of frames is increased, these n pages 
will still be the most recently referenced and so will still be in memory. 
Note that neither implementation of LRU would be conceivable without 
hardware assistance beyond the standard TLB registers. The updating of the 
reference string 

stack 
before 
a 

stack 
after 
b 

i l 
a 
b 
Figure 9.16 Use of a stack to record the most recent page references. 

Chapter 9 
clock fields or stack must be done for every memory reference. If we were to 
use an interrupt for every reference to allow software to update such data 
structures, it would slow every memory reference by a factor of at least ten, 
hence slowing every user process by a factor of ten. Few systems could tolerate 
that level of overhead for memory management. 
9.4.5 LRU-Approximation Page Replacement 
Few computer systems provide sufficient hardware support for true LRU page 
replacement. Some systems provide no hardware support, and other page-
replacement algorithms (such as a FIFO algorithm) must be used. Many systems 
provide some help, however, in the form of a 
The reference bit 
for a page is set by the hardware whenever that page is referenced (either a 
read or a write to any byte in the page). Reference bits are associated with each 
entry in the page table. 
Initially, all bits are cleared (to 0) by the operating system. As a user process 
executes, the bit associated with each page referenced is set (to 1) by the 
hardware. After some time, we can determine which pages have been used and 
which have not been used by examining the reference bits, although we do not 
know the order of use. This information is the basis for many page-replacement 
algorithms that approximate LRU replacement. 
9.4.5.1 
Additional-Reference-Bits Algorithm 
We can gain additional ordering information by recording the reference bits at 
regular intervals. We can keep an 8-bit byte for each page in a table in memory. 
At regular intervals (say, every 100 milliseconds), a timer interrupt transfers 
control to the operating system. The operating system shifts the reference bit 
for each page into the high-order bit of its 8-bit byte, shifting the other bits right 
by 1 bit and discarding the low-order bit. These 8-bit shift registers contain the 
history of page use for the last eight time periods. If the shift register contains 
00000000, for example, then the page has not been used for eight time periods; 
a page that is used at least once in each period has a shift register value of 
11111111. A page with a history register value of 11000100 has been used more 
recently than one with a value of 01110111. If we interpret these 8-bit bytes 
as unsigned integers, the page with the lowest number is the LRU page, and 
it can be replaced. Notice that the numbers are not guaranteed to be unique, 
however. We can either replace (swap out) all pages with the smallest value or 
use the FIFO method to choose among them. 
The number of bits of history included in the shift register can be varied, 
of course, and is selected (depending on the hardware available) to make 
the updating as fast as possible. In the extreme case, the number can be 
reduced to zero, leaving only the reference bit itself. This algorithm is called 
the 
9.4.5.2 
Second-Chance Algorithm 
The basic algorithm of second-chance replacement is a FIFO replacement 
algorithm. When a page has been selected, however, we inspect its reference 
bit. If the value is 0, we proceed to replace this page; but if the reference bit 
is set to 1, we give the page a second chance and move on to select the next 

next 
victim 
9.4 
reference 
pages 
reference 
pages 
bits 
bits 
circular queue of pages 
circular queue of pages 
(a) 
(b) 
Figure 9.17 Second-chance (clock) page-replacement algorithm. 

FIFO page. When a page gets a second chance, its reference bit is cleared, and 
its arrival time is reset to the current time. Thus, a page that is given a second 
chance will not be replaced until all other pages have been replaced (or given 
second chances). In addition, if a page is used often enough to keep its reference 
bit set, it will never be replaced. 
One way to implement the second-chance algorithm (sometimes referred 
to as the clock algorithm) is as a circular queue. A poi11ter (that is, a hand on 
the clock) indicates which page is to be replaced next. When a frame is needed, 
the pointer advances until it finds a page with a 0 reference bit. As it advances, 
it clears the reference bits (Figure 9.17). Once a victim page is found, the page 
is replaced, and the new page is inserted in the circular queue in that position. 
Notice that, in the worst case, when all bits are set, the pointer cycles through 
the whole queue, giving each page a second chance. It clears all the reference 
bits before selecting the next page for replacement. Second-chance replacement 
degenerates to FIFO replacement if all bits are set. 
9.4.5.3 
Enhanced Second-Chance Algorithm 
We can enhance the second-chance algorithm by considering the reference bit 
and the modify bit (described in Section 9.4.1) as an ordered pair. With these 
two bits, we have the following four possible classes: 
(0, 0) neither recently used nor modified -best page to replace 

Chapter 9 
(0, 1) not recently used hut modified-not quite as good, because the 
page will need to be written out before replacement 
(1, 0) recently used but clean-probably will be used again soon 
(1, 1) recently used and modified -probably will be used again soon, and 
the page will be need to be written out to disk before it can be replaced 
Each page is in one of these four classes. When page replacement is called for, 
we use the same scheme as in the clock algorithm; but instead of examining 
whether the page to which we are pointing has the reference bit set to 1, 
we examine the class to which that page belongs. We replace the first page 
encountered in the lowest nonempty class. Notice that we may have to scan 
the circular queue several times before we find a page to be replaced. 
The major difference between this algorithm and the simpler clock algo-
rithm is that here we give preference to those pages that have been modified 
to reduce the number of I/Os required. 
9.4.6 Counting-Based Page Replacement 
There are many other algorithms that can be used for page replacement. For 
example, we can keep a counter of the number of references that have been 
made to each page and develop the following two schemes. 
The least frequently used (LFU) page-replacement algorithm requires 
that the page with the smallest count be replaced. The reason for this 
selection is that an actively used page should have a large reference count. 
A problem arises, however, when a page is used heavily during the initial 
phase of a process but then is never used again. Since it was used heavily, 
it has a large count and remains in memory even though it is no longer 
needed. One solution is to shift the counts right by 1 bit at regular intervals, 
forming an exponentially decaying average usage count. 
The most frequently used (MFU) page-replacement algorithm is based 
on the argument that the page with the smallest count was probably just 
brought in and has yet to be used. 
As you might expect, neither MFU nor LFU replacement is common. The 
implementation of these algorithms is expensive, and they do not approxin'late 
OPT replacement well. 
9.4.7 Page-Buffering Algorithms 
Other procedures are often used in addition to a specific page-replacement 
algorithm. For example, systems commonly keep a pool of free frames. When 
a page fault occurs, a victim frame is chosen as before. However, the desired 
page is read into a free frame from the pool before the victim is written out. This 
procedure allows the process to restart as soon as possible, without waiting 
for the victim page to be written out. When the victim is later written out, its 
frame is added to the free-frame pool. 

9.4 

An expansion of this idea is to maintain a list of modified pages. Whenever 
the paging device is idle, a modified page is selected and is written to the disk. 
Its modify bit is then reset. This scheme increases the probability that a page 
will be clean when it is selected for replacement and will not need to be written 
out. 
Another modification is to keep a pool of free frames but to remember 
which page was in each frame. Since the frame contents are not modified when 
a frame is written to the disk, the old page can be reused directly fronc the 
free-frame pool if it is needed before that frame is reused. No I/O is needed in 
this case. When a page fault occurs, we first check whether the desired page is 
in the free-frame pool. If it is not, we must select a free frame and read into it. 
This technique is used in the VAX/VMS system along with a FIFO replace-
ment algorithm. When the FIFO replacement algorithm mistakenly replaces a 
page that is still in active use, that page is quickly retrieved from the free-frame 
pool, and no I/O is necessary. The free-frame buffer provides protection against 
the relatively poor, but sirnple, FIFO replacement algorithm. This method is 
necessary because the early versions of VAX did not implement the reference 
bit correctly. 
Some versions of the UNIX system use this method in conjunction with 
the second-chance algorithm. It can be a useful augmentation to any page-
replacement algorithm, to reduce the penalty incurred if the wrong victim 
page is selected. 
9.4.8 Applications and Page Replacement 
In certain cases, applications accessing data through the operating system's 
virtual memory perform worse than if the operating system provided no 
buffering at all. A typical example is a database, which provides its own 
memory management and I/0 buffering. Applications like this understand 
their memory use and disk use better than does an operating system that is 
implementing algorithms for general-purpose use. If the operating system is 
buffering I/0, and the application is doing so as well, then twice the memory 
is being used for a set of I/0. 
In another example, data warehouses frequently perform massive sequen-
tial disk reads, followed by computations and writes. The LRU algorithm would 
be removing old pages and preserving new ones, while the application would 
more likely be reading older pages than newer ones (as it starts its sequential 
reads again). Here, MFU would actually be more efficient than LRU. 
Because of such problems, some operating systems give special programs 
the ability to use a disk partition as a large sequential array of logical blocks, 
without any file-system data structures. This array is sometimes called the raw 
disk, and I/O to this array is termed raw I/0. Raw I/0 bypasses all the file-
system services, such as file I/0 demand paging, file locking, prefetching, space 
allocation, file names, and directories. Note that although certain applications 
are more efficient when implementing their own special-purpose storage 
services on a raw partition, most applications perform better when they use 
the regular file-system services. 

Chapter 9 
9.5 
We turn next to the issue of allocation. How do we allocate the fixed amount 
of free memory among the various processes? If we have 93 free frames and 
two processes, how many frames does each process get? 
The simplest case is the single-user system. Consider a single-user system 
with 128 KB of memory composed of pages 1 KB in size. This system has 128 
frames. The operating system may take 35 KB, leaving 93 frames for the user 
process. Under pure demand paging, all 93 frames would initially be put on 
the free-frame list. When a user process started execution, it would generate a 
sequence of page faults. The first 93 page faults would all get free frames from 
the free-frame list. When the free-frame list was exhausted, a page-replacement 
algorithm would be used to select one of the 93 in-memory pages to be replaced 
with the 94th, and so on. When the process terminated, the 93 frames would 
once again be placed on the free-frame list. 
There are many variations on this simple strategy. We can require that the 
operating system allocate all its buffer and table space from the free-frame list. 
When this space is not in use by the operating system, it can be used to support 
user paging. We can try to keep three free frames reserved on the free-frame list 
at all times. Thus, when a page fault occurs, there is a free frame available to 
page into. While the page swap is taking place, a replacement can be selected, 
which is then written to the disk as the user process continues to execute. 
Other variants are also possible, but the basic strategy is clear: the user process 
is allocated any free frame. 
9.5.1 Minimum Number of Frames 
Our strategies for the allocation of frames are constrained in various ways. We 
cannot, for example, allocate more than the total number of available frames 
(unless there is page sharing). We must also allocate at least a minimum number 
of frames. Here, we look more closely at the latter requirement. 
One reason for allocating at least a minimum number of frames involves 
performance. Obviously, as the number of frames allocated to each process 
decreases, the page-fault rate increases, slowing process execution. In addition, 
remember that when a page fault occurs before an executing ilcstruction 
is complete, the instruction must be restarted. Consequently. we must have 
enough frames to hold all the different pages that any single ilcstruction can 
reference. 
For example, consider a machine in which all memory-reference instruc-
tions may reference only one memory address. In this case, we need at least one 
frame for the instruction and one frame for the mernory reference. In addition, 
if one-level indirect addressing is allowed (for example, a load instruction on 
page 16 can refer to an address on page 0, which is an indirect reference to page 
23), then paging requires at least three frames per process. Think about what 
might happen if a process had only two frames. 
The minimum number of frames is defined by the computer architecture. 
For example, the move instruction for the PDP-11 includes more than one word 
for some addressing modes, and thus the ilcstruction itself may straddle two 
pages. In addition, each of its two operands may be indirect references, for a 
total of six frames. Another example is the IBM 370 MVC instruction. Since the 

9.5 

instruction is from storage location to storage location, it takes 6 bytes and can 
straddle two pages. The block of characters to move and the area to which it 
is to be m.oved can each also straddle two pages. This situation would require 
six frames. The worst case occurs when the MVC instruction is the operand of 
an EXECUTE instruction that straddles a page boundary; in this case, we need 
eight frames. 
The worst-case scenario occurs in computer architectures that allow 
multiple levels of indirection (for example, each 16-bit word could contain 
a 15-bit address plus a 1-bit indirect indicator). Theoretically, a simple load 
instruction could reference an indirect address that could reference an indirect 
address (on another page) that could also reference an indirect address (on yet 
another page), and so on, until every page in virtual memory had been touched. 
Thus, in the worst case, the entire virtual memory must be in physical memory. 
To overcome this difficulty, we must place a limit on the levels of indirection (for 
example, limit an instruction to at most 16levels of indirection). When the first 
indirection occurs, a counter is set to 16; the counter is then decremented for 
each successive irtdirection for this instruction. If the counter is decremented to 
0, a trap occurs (excessive indirection). This limitation reduces the maximum 
number of memory references per instruction to 17, requiring the same number 
of frames. 
Whereas the minimum number of frames per process is defined by the 
architecture, the maximum number is defined by the amount of available 
physical memory. In between, we are still left with significant choice in frame 
allocation. 
9.5.2 Allocation Algorithms 
The easiest way to split m frames among n processes is to give everyone an 
equal share, m/n frames. For instance, if there are 93 frames and five processes, 
each process will get 18 frames. The three leftover frames can be used as a 
free-frame buffer pool. This scheme is called 
An alternative is to recognize that various processes will need differing 
amounts of memory. Consider a system with a 1-KB frame size. If a small 
student process of 10 KB and an interactive database of 127 KB are the only 
two processes running in a system with 62 free frames, it does not make much 
sense to give each process 31 frames. The student process does not need more 
than 10 frames, so the other 21 are, strictly speaking, wasted. 
To solve this problem, we can use 
in which we 
allocate available memory to each process according to its size. Let the size of 
the virtual memory for process p; be s;, and define 
S="Ls;. 
Then, if the total number of available frames is m, we allocate a; frames to 
process p;, where a; is approximately 
a;= s;/S x m. 

Chapter 9 
Of course, we must adjust each ai to be an integer that is greater than the 
ncinimum number of frames required by tl1e instruction set, with a sum not 
exceeding m. 
With proportional allocation, we would split 62 frames between two 
processes, one of 10 pages and one of 127 pages, by allocating 4 frames and 57 
frames, respectively, since 
10/137 x 62 ~ 4, and 
127/137 X 62 ~57. 
In this way, both processes share the available frames according to their 
"needs," rather than equally. 
In both equal and proportional allocation, of course, the allocation may 
vary according to the multiprogramming level. If the multiprogramming level 
is increased, each process will lose some frames to provide the memory needed 
for the new process. Conversely, if the multiprogramming level decreases, the 
frames that were allocated to the departed process can be spread over the 
remaining processes. 
Notice that, with either equal or proportional allocation, a high-priority 
process is treated the same as a low-priority process. By its definition, however, 
we may want to give the high-priority process more memory to speed its 
execution, to the detriment of low-priority processes. One solution is to use 
a proportional allocation scheme wherein the ratio of frames depends not on 
the relative sizes of processes but rather on the priorities of processes or on a 
combination of size and priority. 
9.5.3 Global versus Local Allocation 
Another important factor in the way frames are allocated to the various 
processes is page replacement. With multiple processes competing for frames, 
we can classify page-replacement algorithms into two broad categories: 
;.no'·'-c'u~''" and local 
Global replacement allows a process to 
a replacement frame from the set of all frames, even if that frame is 
currently allocated to some other process; that is, one process can take a frame 
from another. Local replacement requires that each process select from only its 
own set of allocated frames. 
For example, consider an allocation scheme wherein we allow high-priority 
processes to select frames from low-priority processes for replacement. A 
process can select a replacement from among its own frames or the frames 
of any lower-priority process. This approach allows a high-priority process to 
increase its frame allocation at the expense of a low-priority process. With a 
local replacement strategy, the number of frames allocated to a process does not 
change. With global replacement, a process may happen to select only frames 
allocated to other processes, thus increasing the number of frames allocated to 
it (assuming that other processes do not choose its frames for replacement). 
One problem with a global replacement algorithm is that a process cannot 
control its own page-fault rate. The set of pages in memory for a process 
depends not only on the paging behavior of that process but also on the paging 
behavior of other processes. Therefore, the same process may perform quite 

9.5 

differently (for example, taking 0.5 seconds for one execution and 10.3 seconds 
for the next execution) because of totally external circuntstances. Such is not 
the case with a local replacement algorithm. Under local replacement, the 
set of pages in memory for a process is affected by the paging behavior of 
only that process. Local replacement might hinder a process, however, by 
not making available to it other, less used pages of memory. Thus, global 
replacement generally results in greater system throughput and is therefore 
the more common method. 
9.5.4 Non-Uniform Memory Access 
Thus far in our coverage of virtual memory, we have assumed that all main 
memory is created equal-or at least that it is accessed equally. On many 
computer systems, that is not the case. Often, in systems with multiple CPUs 
(Section 1.3.2), a given CPU can access some sections of main memory faster 
than it can access others. These performance differences are caused by how 
CPUs and memory are interconnected in the system. Frequently, such a system 
is made up of several system boards, each containing multiple CPUs and some 
memory. The system boards are interconnected in various ways, ranging from 
system busses to high-speed network connections like InfiniBand. As you 
might expect, the CPUs on a particular board can access the memory on that 
board with less delay than they can access memory on other boards in the 
system. Systems in which memory access times vary significantly are known 
collectively as 
systems, and without 
exception, they are slower than systems in which memory and CPUs are located 
on the same motherboard. 
Managing which page frames are stored at which locations can significantly 
affect performance in NUMA systems. If we treat memory as uniform in such 
a system, CPUs may wait significantly longer for memory access than if we 
modify memory allocation algorithms to take NUMA into account. Similar 
changes must be rnade to the scheduling system. The goal of these changes is 
to have memory frames allocated "as close as possible" to the CPU on which 
the process is running. The definition of "close" is "with minimum latency," 
which typically means on the same system board as the CPU. 
The algorithmic changes consist of having the scheduler track the last CPU 
on which each process ran. If the scheduler tries to schedule each process onto 
its previous CPU, and the memory-management system tries to allocate frames 
for the process close to the CPU on which it is being scheduled, then improved 
cache hits and decreased memory access times will result. 
The picture is more complicated once threads are added. For example, a 
process with many running threads may end up with those threads scheduled 
on many different system boards. How is the memory to be allocated in this 
case? Solaris solves the problem by creating an 
entity in the kernel. Each 
lgroup gathers together close CPUs and memory. In fact, there is a hierarchy 
of lgroups based on the amount of latency between the groups. Solaris tries to 
schedule all threads of a process and allocate all memory of a process within 
an lgroup. If that is not possible, it picks nearby lgroups for the rest of the 
resources needed. In this manner, overall memory latency is minimized, and 
CPU cache hit rates are maximized. 

Chapter 9 
9.6 
If the number of frames allocated to a low-priority process falls below the 
minimum number required by the computer architecture, we must suspend 
that process's execution. We should then page out its remaining pages, freeing 
all its allocated frames. This provision introduces a swap-in, swap-out level of 
intermediate CPU scheduling. 
In fact, look at any process that does not have "enough" frames. If the 
process does not have the num.ber of frames it needs to support pages in 
active use, it will quickly page-fault. At this point, it must replace some page. 
However, since all its pages are in active use, it must replace a page that will 
be needed again right away. Consequently, it quickly faults again, and again, 
and again, replacing pages that it must 
back in immediately. 
This high paging activity is called 
A process is thrashing if it is 
spending more time paging than executing. 
9.6.1 Cause of Thrashing 
Thrashing results in severe performance problems. Consider the following 
scenario, which is based on the actual behavior of early paging systems. 
The operating system monitors CPU utilization. If CPU utilization is too low, 
we increase the degree of multiprogramming by introducing a new process 
to the system. A global page-replacement algorithm is used; it replaces pages 
without regard to the process to which they belong. Now suppose that a process 
enters a new phase in its execution and needs more frames. It starts faulting and 
taking frames away from other processes. These processes need those pages, 
however, and so they also fault, taking frames from other processes. These 
faulting processes must use the pagin.g device to swap pages in and out. As 
they queue up for the paging device, the ready queue empties. As processes 
wait for the paging device, CPU utilization decreases. 
The CPU scheduler sees the decreasing CPU utilization and increases the 
degree of multiprogramming as a result. The new process tries to get started 
by taking frames from running processes, causing more page faults and a longer 
queue for the paging device. As a result, CPU utilization drops even further, 
and the CPU scheduler tries to increase the degree of multiprogramming even 
more. Thrashing has occurred, and system throughput plunges. The page-
fault rate increases tremendously. As a result, the effective m.emory-access 
time increases. No work is getting done, because the processes are spending 
all their time paging. 
This phenomenon is illustrated in Figure 9.18, in which CPU utilization 
is plotted against the degree of multiprogramming. As the degree of multi-
programming increases, CPU utilization also ilccreases, although more slowly, 
until a maximum is reached. If the degree of multiprogramming is increased 
even further, thrashing sets in, and CPU utilization drops sharply. At this point, 
to increase CPU utilization and stop thrashing, we must decrease the degree of 
multiprogramming. 
We can limit the effects of thrashing by using a 
(or 
With local replacement, if one process 
starts thrashing, it cannot 
frames from another process and cause the latter 
to thrash as well. However, the problem is not entirely solved. If processes are 

9.6 

degree of multiprogramming 
Figure 9.18 Thrashing. 
thrashing, they will be in the queue for the paging device most of the time. The 
average service time for a page fault will increase because of the longer average 
queue for the paging device. Thus, the effective access time will increase even 
for a process that is not thrashing. 
To prevent thTashing, we must provide a process with as many frames as 
it needs. But how do we know how many frames it "needs"? There are several 
teclmiques. The working-set strategy (Section 9.6.2) starts by looking at how 
frames a process is actually using. This approach defines the locality 
of process execution. 
The locality model states that, as a process executes, it moves from locality 
to locality. A locality is a set of pages that are actively used together (Figure 
9.19). A program is generally composed of several different localities, which 
may overlap. 
For example, when a function is called, it defines a new locality. In this 
locality, memory references are made to the instructions of the function call, its 
local variables, and a subset of the global variables. When we exit the function, 
the process leaves this locality, since the local variables and instructions of the 
function are no longer in active use. We may return to this locality later. 
Thus, we see that localities are defined by the program structure and its 
data structures. The locality model states that all programs will exhibit this 
basic memory reference structure. Note that the locality model is the unstated 
principle behind the caching discussions so far in this book If accesses to any 
types of data were random rather than patterned, caching would be useless. 
Suppose we allocate enough frames to a process to accommodate its current 
locality. It will fault for the pages in its locality until all these pages are in 
memory; then, it will not fault again until it changes localities. If we do not 
allocate enough frames to accommodate the size of the current locality, the 
process will thrash, since it cannot keep in memory all the pages that it is 
actively using. 
9.6.2 Working-Set Model 
As mentioned, the 
is based on the assumption of locality. 
This model uses a paramete1~ /':,, to define the 
vrindovv. The idea 

Chapter 9 
32~~----~~==~~~~~WL~~#-~~--~~~-
\jjl:jlli111 

(j) 
(j) 
(!:> 
""0 
""0 
(lj 26 
I' 
c 
I" 

I 
E 
(lJ 
E 
execution time -------.. 
Figure 9.19 Locality in a memory-reference pattern. 
is to examine the most recent 6 
references. The set of pages in the most 
recent 6 page references is the 
(Figure 9.20). If a page is in active 
use, it will be in the working set. If it is no longer being used, it will drop from 
the working set 6 time units after its last reference. Thus, the working set is an 
approximation of the program's locality. 
For example, given the sequence of memory references shown in Figure 
9.20, if 6 = 10 memory references, then the working set at time t1 is {1, 2, 5, 
6, 7}. By time t2, the working set has changed to {3, 4}. 
The accuracy of the working set depends on the selection of 6. If 6 is too 
small, it will not encompass the entire locality; if 6 is too large, it may overlap 

9.6 
page reference table 
. . . 2 6 1 5 7 7 7 7 5 1 6 2 3 4 1 2 3 4 4 4 3 4 3 4 4 4 1 3 2 3 4 4 4 3 4 4 4 . 
~ 
~r 
~ 
r 
t1 
WS(t1) = {1 ,2,5,6,7} 
Figure 9.20 Working-set model. 

several localities. In the extrem.e, if L. is infinite, the working set is the set of 
pages touched during the process execution. 
The most important property of the working set, then, is its size. If we 
compute the working-set size, WSS;, for each process in the system, we can 
then consider that 
where Dis the total demand for frames. Each process is actively using the pages 
in its working set. Thus, process i needs WSS; frames. If the total demand is 
greater than the total number of available frames (D > m), thrashing will occur, 
because some processes will not have enough frames. 
Once L. has been selected, use of the working-set model is simple. The 
operating system monitors the working set of each process and allocates to 
that working set enough frames to provide it with its working-set size. If there 
are enough extra frames, another process can be initiated. If the sum of the 
working-set sizes increases, exceeding the total number of available frames, 
the operating system selects a process to suspend. The process's pages are 
written out (swapped), and its frames are reallocated to other processes. The 
suspended process can be restarted later. 
This working-set strategy prevents thrashing while keeping the degree of 
multiprogramming as high as possible. Thus, it optimizes CPU utilization. 
The difficulty with the working-set model is keeping track of the working 
set. The working-set window is a moving window. At each memory reference, 
a new reference appears at one end and the oldest reference drops off the other 
end. A page is in the working set if it is referenced anywhere in the working-set 
window. 
We can approximate the working-set model with a fixed-interval timer 
interrupt and a reference bit. For example, assum.e that L. equals 10,000 
references and that we can cause a timer interrupt every 5,000 references. 
When we get a timer interrupt, we copy and clear the reference-bit values for 
each page. Thus, if a page fault occurs, we can examine the current reference 
bit and two in-memory bits to determine whether a page was used within the 
last 10,000 to 15,000 references. If it was used, at least one of these bits will be 
on. If it has not been used, these bits will be off. Those pages with at least one 
bit on will be considered to be in the working set. Note that this arrangement 
is not entirely accurate, because we cannot tell where, within an interval of 
5,000, a reference occurred. We can reduce the uncertainty by increasing the 
number of history bits and the frequency of interrupts (for example, 10 bits 
and interrupts every 1,000 references). However, the cost to service these more 
frequent interrupts will be correspondingly higher. 

Chapter 9 
9.7 
number of frames 
Figure 9.21 
Page-fault frequency. 
9.6.3 Page-Fault Frequency 
The working-set model is successful, and knowledge of the working set can 
be useful for prepaging (Section 9.9.1), but it seems a clumsy way to control 
thrashilcg. A strategy that uses the 
takes a more 
direct approach. 
The specific problem is how to prevent thrashilcg. Thrashing has a high 
page-fault rate. Thus, we want to control the page-fault rate. When it is too 
high, we know that the process needs more frames. Conversely, if the page-fault 
rate is too low, then the process may have too many frames. We can establish 
upper and lower bounds on the desired page-fault rate (Figure 9.21). If the 
actual page-fault rate exceeds the upper limit, we allocate the process another 
frame; if the page-fault rate falls below the lower limit, we remove a frame 
from the process. Thus, we can directly measure and control the page-fault 
rate to prevent thrashing. 
As with the working-set strategy, we may have to suspend a process. If the 
page-fault rate ilccreases and no free frames are available, we must select some 
process and suspend it. The freed frames are then distributed to processes with 
high page-fault rates. 
Consider a sequential read of a file on disk using the standard system calls 
open (),read (), and write (). Each file access requires a system call and disk 
access. Alternatively, we can use the virtual memory techniques discussed 
so far to treat file I/0 as routine memory accesses. This approach, known as 
a file, allows a part of the virtual address space to be logically 
associated with the file. As we shall see, this can lead to significant performance 
increases when performing I/0.

---

## Module 5 Textbook

10.1 
R 
For most users, the file system is the most visible aspect of an operating system. 
It provides the mechanism for on-line storage of and access to both data and 
programs of the operating system and all the users of the computer system. The 
file system consists of two distinct parts: a collection of files, each storing related 
data, and a directory structure, which organizes and provides information about 
all the files in the system. File systems live on devices, which we explore fully 
irl the following chapters but touch upon here. In this chapter, we consider 
the various aspects of files and the major directory structures. We also discuss 
the semantics of sharing files among multiple processes, users, and computers. 
Finally, we discuss ways to handle file protection, necessary when we have 
multiple users and we want to control who may access files and how files may 
be accessed. 
To explain the function of file systems. 
To describe the interfaces to file systems. 
To discuss file-system design tradeoffs, including access methods, file 
sharing, file locking, and directory structures. 
To explore file-system protection. 
Computers can store information on various storage media, such as magnetic 
disks, magnetic tapes, and optical disks. So that the computer system will 
be convenient to use, the operating system provides a uniform logical view 
of information storage. The operating system abstracts from the physical 
properties of its storage devices to define a logical storage unit, the file. Files are 
mapped by the operating system onto physical devices. These storage devices 
are usually nonvolatile, so the contents are persistent through power failures 
and system reboots. 

Chapter 10 
A file is a named collection of related information that is recorded on 
secondary storage. From a user's perspective, a file is the smallest allotment 
of logical secondary storage; that is, data cannot be written to secondary 
storage unless they are within a file. Commonly, files represent programs (both 
source and object forms) and data. Data files may be numeric, alphabetic, 
alphanumeric, or binary. Files may be free form, such as text files, or may be 
formatted rigidly. In general, a file is a sequence of bits, bytes, lines, or records, 
the meaning of which is defined by the file's creator and user. The concept of 
a file is thus extremely generaL 
The information in a file is defined by its creator. Many different types 
of information may be stored in a file-source programs, object programs, 
executable programs, numeric data, text, payroll records, graphic images, 
sound recordings, and so on. A file has a certain defined 
which 
depends on its type. A text file is a sequence of characters organized into 
lines (and possibly pages). A source file is a sequence of subroutines and 
functions, each of which is further organized as declarations followed by 
executable statements. An object file is a sequence of bytes organized in.to 
blocks nnderstandable by the system's linker. An executable file is a series of 
code sections that the loader can bring into memory and execute. 
10.1.1 
File Attributes 
A file is named, for the convenience of its human users, and is referred to by 
its name. A name is usually a string of characters, such as example.c. Some 
systems differentiate between uppercase and lowercase characters in names, 
whereas other systems do not. When a file is named, it becomes independent 
of the process, the user, and even the system that created it. For instance, one 
user might create the file example.c, and another user might edit that file by 
specifying its name. The file's owner might write the file to a floppy disk, send 
it in an e-mail, or copy it across a network, and it could still be called example.c 
on the destination system. 
A file's attributes vary from one operating system to another but typically 
consist of these: 
Name. The symbolic file name is the only information kept in human-
readable form. 
Identifier. This unique tag, usually a number, identifies the file within the 
file system; it is the non-human-readable name for the file. 
Type. This information is needed for systems that support different types 
of files. 
Location. This information is a pointer to a device and to the location of 
the file on that device. 
Size. The current size of the file (in bytes, words, or blocks) and possibly 
the maximum allowed size are included in this attribute. 
Protection. Access-control information determines who can do reading, 
writing, executing, and so on. 

10.1 

Time, date, and user identification. This information may be kept for 
creation, last modification, and last use. These data can be useful for 
protection, security, and usage monitoring. 
The information about all files is kept in the directory structure, which also 
resides on secondary storage. Typically, a directory entry consists of the file's 
name and its unique identifier. The identifier in turn locates the other file 
attributes. It may take more than a kilobyte to record this information for 
each file. In a system with many files, the size of the directory itself may be 
megabytes. Because directories, like files, must be nonvolatile, they must be 
stored on the device and brought into memory piecemeal, as needed. 
10.1.2 File Operations 
A file is an 
To define a file properly, we need to consider the 
operations that can be performed on files. The operating system can provide 
system calls to create, write, read, reposition, delete, and truncate files. Let's 
examine what the operating system must do to perform each of these six basic 
file operations. It should then be easy to see how other similar operations, such 
as renaming a file, can be implemented. 
Creating a file. Two steps are necessary to create a file. First, space in the 
file system must be found for the file. We discuss how to allocate space for 
the file in Chapter 11. Second, an entry for the new file must be made in 
the directory. 
Writing a file. To write a file, we make a system call specifying both the 
name of the file and the information to be written to the file. Given the 
name of the file, the system searches the directory to find the file's location. 
The system must keep a write pointer to the location in the file where the 
next write is to take place. The write pointer must be updated whenever a 
write occurs. 
Reading a file. To read from a file, we use a system call that specifies the 
name of the file and where (in memory) the next block of the file should 
be put. Again, the directory is searched for the associated entry, and the 
system needs to keep a read pointer to the location in the file where the 
next read is to take place. Once the read has taken place, the read pointer 
is updated. Because a process is usually either reading from or writing to 
a file, the current operation location can be kept as a per-process 
. Both the read and write operations use this same 
pointer, saving space and reducing system complexity. 
Repositioning within a file. The directory is searched for the appropriate 
entry, and the current-file-position pointer is repositioned to a given value. 
Repositioning within a file need not involve any actual I/0. This file 
operation is also kn.own as a file seek. 
Deleting a file. To delete a file, we search the directory for the named file. 
Having found the associated directory entry, we release all file space, so 
that it can be reused by other files, and erase the directory entry. 

Chapter 10 
Truncating a file. The user may want to erase the contents of a file but 
keep its attributes. Rather than forcing the user to delete the file and then 
recreate it, this function allows all attributes to remain unchanged -except 
for file length-but lets the file be reset to length zero and its file space 
released. 
These six basic operations comprise the minimal set of required file 
operations. Other common operations include appending new information 
to the end of an existing file and renaming an existing file. These primitive 
operations can then be combined to perform other file operations. For instance, 
we can create a copy of a file, or copy the file to another I/O device, such as 
a printer or a display, by creating a new file and then reading from the old 
and writing to the new. We also want to have operations that allow a user to 
get and set the various attributes of a file. For example, we may want to have 
operations that allow a user to determine the status of a file, such as the file's 
length, and to set file attributes, such as the file's owner. 
Most of the file operations mentioned involve searching the directory for 
the entry associated with the named file. To avoid this constant searching, many 
systems require that an open () system call be made before a file is first used 
actively. The operating system keeps a small table, called the 
containing information about all open files. When a file operation is requested, 
the file is specified via an index into this table, so no searching is required. 
When the file is no longer being actively used, it is closed by the process, and 
the operating system removes its entry from the open-file table. create and 
delete are system calls that work with closed rather than open files. 
Some systems implicitly open a file when the first reference to it is made. 
The file is automatically closed when the job or program that opened the 
file terminates. Most systems, however, require that the programmer open a 
file explicitly with the open() system call before that file can be used. The 
open() operation takes a file name and searches the directory, copying the 
directory entry into the open-file table. The open() call can also accept access-
mode information-create, read-only, read-write, append-only, and so on. 
This mode is checked against the file's permissions. If the request mode is 
allowed, the file is opened for the process. The open () system call typically 
returns a pointer to the entry in the open-file table. This pointer, not the actual 
file name, is used in all I/0 operations, avoiding any further searching and 
simplifying the system-call interface. 
The implementation of the open() and close() operations is more 
complicated in an environment where several processes may open the file 
simultaneously. This may occur in a system~ where several different applications 
open the same file at the same time. Typically, the operating system uses two 
levels of internal tables: a per-process table and a system-wide table. The per-
process table tracks all files that a process has open. Stored in this table is 
information regarding the use of the file by the process. For instance, the 
current file pointer for each file is found here. Access rights to the file and 
accounting information can also be included. 
Each entry in the per-process table in turn points to a system-wide open-file 
table. The system-wide table contains process-independent information, such 
as the location of the file on disk, access dates, and file size. Once a file has been 
opened by one process, the system-wide table includes an entry for the file. 

10.1 

When another process executes an open() calt a new entry is simply added 
to the process's open-file table pointing to the appropriate entry in the system-
wide table. Typically, the open-file table also has an open count associated with 
each file to indicate how ncany processes have the file open. Each close() 
decreases this open count, and when the open count reaches zero, the file is no 
longer in use, and the file's entry is removed from the open-file table. 
In summary, several pieces of information are associated with an open file. 
File pointer. On systems that do not include a file offset as part of the 
read() and write() system calls, the systein must track the last read-
write location as a current-file-position pointer. This pointer is unique to 
each process operating on the file and therefore must be kept separate from 
the on-disk file attributes. 
File-open count. As files are closed, the operating system must reuse its 
open-file table entries, or it could run out of space in the table. Because 
multiple processes may have opened a file, the system must wait for the 
last file to close before removing the open-file table entry. The file-open 
counter tracks the number of opens and closes and reaches zero on the last 
close. The system can then remove the entry. 
Disk location of the file. Most file operations require the system to modify 
data within the file. The information needed to locate the file on disk is 
kept in memory so that the system does not have to read it from disk for 
each operation. 
Access rights. Each process opens a file in an access mode. This information 
is stored on the per-process table so the operating system can allow or deny 
subsequent I/0 requests. 
Some operating systems provide facilities for locking an open file (or 
sections of a file). File locks allow one process to lock a file and prevent other 
processes from gaining access to it. File locks are useful for files that are shared 
by several processes-for example, a system log file that can be accessed and 
modified by a number of processes in the system. 
FILE LOCKING IN JAVA 
In the Java. API, acquiring a. lock requires firstobtaini:ng the F:i..leChannel 
fbr thefile to be locked. The loc;k() method of the FileChannel is. used to 
acquir(o the lock. The API of the lock() ·method is 
FileLock lock{l.ong begin, long end, l;>ooleqn shared) 
where begin and end are the h:~gi1iningand ending positions of the region 
being locked. Settingshared to true isfb~ shared locks; setting shared 
to false acquires the lock exclusively. Tice lock is released by invoking the 
release () of the FileLock returned by the lock (} operati?n. 
The program in Figure 10.1 illusttates file locking in Java, This program 
acquires two locks on thefilefile .. txt>The first half of.the file is acquired as an 
exclusive lock~ the lock for the second half is a shared lock. 

Chapter 10 
File locks provide functionality similar to reader-writer locks, covered in 
Section 6.6.2. A shared lock is akin to a reader lock in that several processes 
can acquire the lock concurrently. An exclusive lock behaves like a writer lock; 
only one process at a time can acquire such a lock. It is important to note 

10.1 

that not aU operating systems provide both types of locks; some systems only 
provide exclusive file locking. 
Furthermore, operating systems may provide either mandatory or advi-
sory file-locking mechanisms. If a lock is n1.andatory, then once a process 
acquires an exclusive lock, the operating system will prevent any other process 
from accessing the locked file. For example, assume a process acquires an 
exclusive lock on the file system .log. If we attempt to open system .log 
from another process-for example, a text editor-the operating system will 
prevent access until the exclusive lock is released. This occurs even if the text 
editor is not written explicitly to acquire the lock. Alternatively, if the lock 
is advisory, then the operating system will not prevent the text editor from 
acquiring access to system .log. Rather, the text editor must be written so that 
it manually acquires the lock before accessing the file. In other words, if the 
locking scheme is mandatory, the operating system ensures locking integrity. 
For advisory locking, it is up to software developers to ensure that locks are 
appropriately acquired and released. As a general rule, Windows operating 
systems adopt mandatory locking, and UNIX systems employ advisory locks. 
The use of file locks requires the same precautions as ordinary process 
synchronization. For example, programmers developing on systems with 
mandatory locking must be careful to hold exclusive file locks only while 
they are accessing the file; otherwise, they will prevent other processes from 
accessing the file as well. Furthermore, some measures must be taken to ensure 
that two or more processes do not become involved in a deadlock while trying 
to acquire file locks. 
10.1.3 File Types 
When we design a file system-indeed, an entire operating system-we 
always consider whether the operating system should recognize and support 
file types. If an operating system recognizes the type of a file, it can then operate 
on the file in reasonable ways. For example, a common mistake occurs when a 
user tries to print the binary-object form of a program. This attempt normally 
produces garbage; however, the attempt can succeed if the operating system 
has been told that the file is a binary-object program. 
A common technique for implementing file types is to include the type as 
part of the file name. The name is split into two parts-a name and an extension, 
usually separated by a period character (Figure 10.2). In this way, the user and 
the operating system can tell from the name alone what the type of a file is. 
For example, most operating systems allow users to specify a file name as a 
sequence of characters followed by a period and terminated by an extension of 
additional characters. File name examples include resume.doc, Server.java, and 
ReaderThread. c. 
The system uses the extension to indicate the type of the file and the type 
of operations that can be done on that file. Only a file with a .com, .exe, or .bat 
extension can be executed, for instance. The .com and .exe files are two forms of 
binary executable files, whereas a .bat file is a 
containing, in ASCII 
format, commands to the operating system. MS-DOS recognizes only a few 
extensions, but application programs also use extensions to indicate file types 
in which they are interested. For example, assemblers expect source files to have 
an .asm extension, and the Microsoft Word word processor expects its files to 

Chapter 10 
!}:iSnl~1:f'"-~·:,.·j\·. ir~i:tJI ~·· 
.~.: "''' r,~~:r:::~ ·;· ,'u:~rt~tt~~·~ .. ~\ 
•·· ... · ... ·.·••·. 
:'·'>·~··· :. 
':·:•c •·· 
executable 
exe, com, bin 
ready~to-run machine-
or none 
language program 
object 
obj, o 
compiled, machine 
language, not linked 
source code 
c, cc, java, pas, 
source code in various 
asm, a 
languages 
batch 
bat, sh 
commands to the command 
interpreter 
text 
txt, doc 
textual data, documents 
wo rdprocessor wp,tex, rtf, 
various wordcprocessor 
doc 
formats 
library 
lib, a, so, dll 
libraries o.troutines for 
.programmers 
print or view 
ps, pdf, jpg 
ASCII or binary file in a 
format for printing or 
viewing 
archive 
arc, zip, .tar 
1·· related files grouped into 
.one file,sometimes com-
pressed, for archiving 
or storage 
multimedia 
mpeg, mov, rm, 
binary file containing 
mp3, avi 
audio or A/V information 
Figure 10.2 Common file types. 
end with a .doc extension. These extensions are not required, so a user may 
specify a file without the extension (to save typing), and the application will 
look for a file with the given name and the extension it expects. Because these 
extensions are not supported by the operating system, they can be considered 
as "hints" to the applications that operate on them. 
Another example of the utility of file types comes from the TOPS-20 
operating system. If the user tries to execute an object program whose source file 
has been modified (or edited) since the object file was produced, the source file 
will be recompiled automatically. This function ensures that the user always 
runs an up-to-date object file. Otherwise, the user could waste a significant 
amount of time executing the old object file. For this function to be possible, 
the operating system must be able to discriminate the source file from the 
object file, to check the time that each file was created or last modified, and 
to determine the language of the source program (in order to use the correct 
compiler). 
Consider, too, the Mac OS X operating system. In this system, each file has 
a type, such as TEXT (for text file) or APPL (for application). Each file also has 
a creator attribute containing the name of the program that created it. This 
attribute is set by the operating system during the create() call, so its use 
is enforced and supported by the system. For instance, a file produced by a 
word processor has the word processor's name as its creator. When the user 
opens that file, by double-clicking the mouse on the icon representing the file, 

10.1 

the word processor is invoked automatically, and the file is loaded, ready to be 
edited. 
The UNIX system uses a crude 
stored at the beginning of 
some files to indicate roughly the type of the file-executable program, batch 
file (or 
PostScript file, and so on. Not all files have magic numbers, 
so system features cannot be based solely on this information. UNIX does not 
record the name of the creating program, either. UNIX does allow file-name-
extension hints, but these extensions are neither enforced nor depended on by 
the operating system; they are meant mostly to aid users in determining what 
type of contents the file contains. Extensions can be used or ignored by a given 
application, but that is up to the application's programmer. 
10.1.4 File Structure 
File types also can be used to indicate the internal structure of the file. As 
mentioned in Section 10.1.3, source and object files have structures that match 
the expectations of the programs that read them. Further, certain files must 
conform to a required structure that is understood by the operating system. For 
example, the operating system requires that an executable file have a specific 
structure so that it can determine where in memory to load the file and what 
the location of the first instruction is. Some operating systems extend this idea 
into a set of system-supported file structures, with sets of special operations 
for manipulating files with those structures. For instance, DEC's VMS operating 
system has a file system that supports three defined file structures. 
This point brings us to one of the disadvantages of having the operating 
system support multiple file structures: the resulting size of the operating 
system is cumbersome. If the operating system defines five different file 
structures, it needs to contain the code to support these file structures. 
In addition, it may be necessary to define every file as one of the file 
types supported by the operating system. When new applications require 
information structured in ways not supported by the operating system, severe 
problems may result. 
For example, assume that a system supports two types of files: text files 
(composed of ASCII characters separated by a carriage return and line feed) 
and executable binary files. Now, if we (as users) want to define an encrypted 
file to protect the contents from being read by unauthorized people, we may 
find neither file type to be appropriate. The encrypted file is not ASCII text lines 
but rather is (apparently) random bits. Although it may appear to be a binary 
file, it is not executable. As a result, we may have to circumvent or misuse the 
operating system's file-type mechanism or abandon our encryption scheme. 
Some operating systems impose (and support) a minimal number of file 
structures. This approach has been adopted in UNIX, MS-DOS, and others. UN1X 
considers each file to be a sequence of 8-bit bytes; no interpretation of these bits 
is made by the operating systen'l. This scheme provides maximum flexibility 
but little support. Each application program must include its own code to 
interpret an input file as to the appropriate structure. However, all operating 
systems must support at least one structure-that of an executable file-so 
that the system is able to load and run programs. 
The Macintosh operating system also supports a minimal number of 
file structures. It expects files to contain two parts: a 
and a 

Chapter 10 
10.2 
The resource fork contains information of interest to the user. 
For instance, it holds the labels of any buttons displayed by the program. 
A foreign user may want to re-label these buttons in his own language, and 
the Macintosh operating system provides tools to allow modification of the 
data in the resource fork. The data fork contains program code or data-the 
traditional file contents. To accomplish the same task on a UNIX or MS-DOS 
system, the programmer would need to change and recompile the source code, 
unless she created her own user-changeable data file. Clearly, it is useful for 
an operating system to support structures that will be used frequently and 
that will save the programmer substantial effort. Too few structures make 
programming inconvenient, whereas too many cause operating-system bloat 
and programmer confusion. 
10.1.5 Internal File Structure 
Internally, locating an offset within a file can be complicated for the operating 
system. Disk systems typically have a well-defined block size determined by 
the size of a sector. All disk I/0 is performed in units of one block (physical 
record), and all blocks are the same size. It is unlikely that the physical record 
size will exactly match the length of the desired logical record. Logical records 
may even vary in length. Paddng a number of logical records into physical 
blocks is a common solution to this problem. 
For example, the UNIX operating system defines all files to be simply 
streams of bytes. Each byte is individually addressable by its offset from the 
begi1ming (or end) of the file. In this case, the logical record size is 1 byte. The 
file system automatically packs and unpacks bytes into physical disk blocks-
say, 512 bytes per block-as necessary. 
The logical record size, physical block size, and packing technique deter-
mine how many logical records are in each physical block. The packing can be 
done either by the user's application program or by the operating system. In 
either case, the file may be considered a sequence of blocks. All the basic I/O 
functions operate in terms of blocks. The conversion from logical records to 
physical blocks is a relatively simple software problem. 
Because disk space is always allocated in blocks, some portion of the last 
block of each file is generally wasted. If each block were 512 bytes, for example, 
then a file of 1,949 bytes would be allocated four blocks (2,048 bytes); the last 
99 bytes would be wasted. The waste incurred to keep everything in units 
of blocks (instead of bytes) is 
All file systems suffer 
from internal fragmentation; the larger the block size, the greater the internal 
fragmentation. 
Files store information. When it is used, this information must be accessed and 
read into computer memory. The information in the file can be accessed in 
several ways. Some systems provide only one access method for files. Other 
systems, such as those of IBM, support many access methods, and choosing the 
right one for a particular application is a major design problem. 

10.2 

beginning 
current position 
end 
<];:::::,,,===, rewind~ 
read or write~ 
Figure 10.3 Sequential-access file. 
10.2.1 Sequential Access 
The simplest access method is 
. Information in the file is 
processed in order, one record after the other. This mode of access is by far the 
most common; for example, editors and compilers usually access files in this 
fashion. 
Reads and writes make up the bulk of the operations on a file. A read 
operation-read next-reads the next portion of the file and automatically 
advances a file pointer, which tracks the I/O location. Similarly, the write 
operation-write next-appends to the end of the file and advances to the 
end of the newly written material (the new end of file). Such a file can be reset 
to the beginning; and on some systems, a program may be able to skip forward 
or backward n records for some integer n-perhaps only for n = 1. Sequential 
access, which is depicted in Figure 10.3, is based on a tape model of a file and 
works as well on sequential-access devices as it does on random-access ones. 
10.2.2 Direct Access 
(or 
A file is made up of fixed-
length 
that allow programs to read and write records rapidly 
in no particular order. The direct-access method is based on a disk model of 
a file, since disks allow random access to any file block. For direct access, the 
file is viewed as a numbered sequence of blocks or records. Thus, we may read 
block 14, then read block 53, and then write block 7. There are no restrictions 
on the order of reading or writing for a direct-access file. 
Direct-access files are of great use for immediate access to large amounts 
of information. Databases are often of this type. When a query concerning a 
particular subject arrives, we compute which block contains the answer and 
then read that block directly to provide the desired information. 
As a simple example, on an airline-reservation system, we might store all 
the information about a particular flight (for example, flight 713) in the block 
identified by the flight number. Thus, the number of available seats for flight 
713 is stored in block 713 of the reservation file. To store il1formation about a 
larger set such as people, we might compute a hash function on the people's 
names or search a small in-ncemory index to determine a block to read and 
search. 
For the direct-access method, the file operations must be modified to 
include the block number as a parameter. Thus, we have read n, where n is 
the block number, rather than read next, and ·write n rather than write next. An 
alternative approach is to retain read next and write next, as with sequential 

Chapter 10 
Figure 10.4 Simulation of sequential access on a direct-access file. 
access, and to add an operation position file to n, where n is the block number. 
Then, to effect a read n, we would position to n and then read next. 
The block number 
by the user to the operating system is normally 
a 
A relative block number is an index relative to the 
begirm.ing of the file. Thus, the first relative block of the file is 0, the next is 
1, and so on, even though the absolute disk address may be 14703 for the 
first block and 3192 for the second. The use of relative block numbers allows 
the operating system to decide where the file should be placed (called the 
allocation problem, as discussed in Chapter 11) and helps to prevent the user 
from accessing portions of the file system that may not be part of her file. Some 
systems start their relative block numbers at 0; others start at 1. 
How, then, does the system satisfy a request for record Nina file? Assuming 
we have a logical record length L, the request for record N is turned into an I/0 
request for L bytes starting at location L * (N) within the file (assuming the first 
record is N = 0). Since logical records are of a fixed size, it is also easy to read, 
write, or delete a record. 
Not all operating systems support both sequential and direct access for 
files. Some systems allow only sequential file access; others allow only direct 
access. Some systems require that a file be defined as sequential or direct when 
it is created; such a file can be accessed only in a manner consistent with its 
declaration. We can easily simulate sequential access on a direct-access file by 
simply keeping a variable cp that defines our current position, as shown in 
Figure 10.4. Simulating a direct-access file on a sequential-access file, however, 
is extremely inefficient and clumsy. 
10.2.3 Other Access Methods 
Other access methods can be built on top of a direct-access method. These 
methods generally involve the construction of an index for the file. The 
like an index in the back of a 
contains pointers to the various blocks. To 
find a record in the file, we first search the index and then use the 
to 
access the file directly and to find the desired record. 
For example, a retail-price file might list the universal 
codes (UPCs) 
items, with the associated prices. Each record consists 
a 10-digit UPC and 
a 6-digit price, 
a 16-byte record. If our disk has 1,024 bytes per 
we 
can store 64 records per block. A file of 120,000 records would occupy about 
2,000 blocks (2 million bytes). By keeping the file sorted by UPC, we can define 
an index consisting of the first UPC in each block. This index would have 
entries of 10 digits each, or 20,000 bytes, and thus could be kept in memory. To 

10.3 
10.3 

logical record 
last name 
number 
Adams 
Arthur 
Asher 
• 
sm!th,jol:iR!social~security[ age 
. 
/ 
• 
e 
..... smith ·· 
.'. 
'<:/ 
index file 
relative file 
Figure 10.5 Example of iRdex and relative files. 
find the price of a particular item, we can make a binary search of the index. 
From this search, we learn exactly which block contains the desired record and 
access that block. This structure allows us to search a large file doing little I/0. 
With large files, the index file itself may become too large to be kept in 
memory. One solution is to create an index for the index file. The primary 
index file would contain pointers to secondary index files, which would point 
to the actual data items. 
For example, IBM's indexed sequential-access method (ISAM) uses a small 
master index that points to disk blocks of a secondary index. The secondary 
index blocks point to the actual file blocks. The file is kept sorted on a defined 
key. To find a particular item, we first make a binary search of the master index, 
which provides the block number of the secondary index. This block is read 
in, and again a binary search is used to find the block containing the desired 
record. Finally, this block is searched sequentially. In this way, any record can 
be located from its key by at most two direct-access reads. Figure 10.5 shows a 
similar situation as implemented by VMS index and relative files. 
Next, we consider how to store files. Certainly, no general-purpose computer 
stores just one file. There are typically thousand, millions, and even billions 
of files within a computer. Files are stored on random-access storage devices, 
including hard disks, optical disks, and solid state (memory-based) disks. 
A storage device can be used in its entirety for a file system. It can also be 
subdivided for finer-grained control. For example, a disk can be 
into quarters, and each quarter can hold a file system. Storage devices can also 
be collected together into RAID sets that provide protection from the failure of 
a single disk (as described in Section 12.7). Sometimes, disks are subdivided 
and also collected into RAID sets. 
Partitioning is useful for limiting the sizes of individual file systems, 
putting multiple file-system types on the same device, or leaving part of the 
device available for other uses, such as swap space or unformatted (rz;c:.v) disk 

Chapter 10 
directory 
. directory 
partition A 
files 
disk 2 
1-7--~~···~ 
disk 1 
directory 
partition C 
files 
partition B 
files 
disk 3 
Figure 10.6 A typical file-system organization. 
space. Partitions are also known as 
or (in the IBM world) 
A file 
system can be created on each of these parts of the disk. Any entity containing 
a file system is generally known as a 
The volume may be a subset 
of a device, a whole device, or multiple devices linked together into a RAID 
set. Each volume can be thought of as a virtual disk. Volumes can also store 
multiple operating systems, allowing a system to boot and run more than one 
operating system. 
Each volume that contains a file system must also contain information 
about the files in the system. This information is kept in entries in a 
or 
~ 
The device directory (more commonly 
known simply as that 
records information -such as name, location, 
size, and type-for all files on that volume. Figure 10.6 shows a typical 
file-system organization. 
10.3.1 Storage Structure 
As we have just seen, a general-purpose computer system has multiple storage 
devices, and those devices can be sliced up into volumes that hold file systems. 
Computer systems may have zero or more file systems, and the file systems 
may be of varying types. For example, a typical Solaris system may have dozens 
of file systems of a dozen different types, as shown in the file system list in 
Fig1-1re 10.7. 
In this book, we consider only general-purpose file systems. It is worth 
noting, though, that there are many special-purpose file systems. Consider the 
types of file systems in the Solaris example mentioned above: 
tmpfs-a "temporary" file system. that is created in volatile main memory 
and has its contents erased if the system reboots or crashes 
objfs-a "virtual" file system (essentially an interface to the kernel that 
looks like a file system) that gives debuggers access to kernel symbols 
dfs-a virtual file system that maintains "contract" information to manage 
which processes start when the system boots and must continue to run 
during operation 

10.3 

I 
ufs 
/devices 
devfs 
/dev 
dev 
I system/ contract 
ctfs 
/proc 
proc 
/etc/mnttab 
mntfs 
I etc/ svc/volatile 
tmpfs 
I system/ object 
objfs 
/lib /libc.so.l 
lofs 
/dev/fd 
fd 
/var 
ufs 
/tmp 
tmpfs 
/var/run 
tmpfs 
/opt 
ufs 
/zpbge 
zfs 
I zpbge/backup 
zfs 
I export/home 
zfs 
/var/mail 
zfs 
/var/spool/Inqueue 
zfs 
/zpbg 
zfs 
/zpbg/zones 
zfs 
Figure 10.7 Solaris File System. 
lofs-a "loop back" file system that allows one file system to be accessed 
in place of another one 
prods-a virtual file system that presents information on all processes as 
a file system 
ufs, zfs-general-purpose file systems 
The file systems of computers, then, can be extensive. Even within a file 
system, it is useful to segregate files into groups and manage and act on those 
groups. This organization involves the use of directories. In the remainder of 
this section, we explore the topic of directory structure. 
10.3.2 Directory Overview 
The directory can be viewed as a symbol table that translates file names into 
their directory entries. If we take such a view, we see that the directory itself 
can be organized in many ways. We want to be able to insert entries, to delete 
entries, to search for a named entry, and to list all the entries in the directory. 
In this section, we examine several schemes for defining the logical structure 
of the directory system. 
When considering a particular directory structure, we need to keep in mind 
the operations that are to be performed on a directory: 
Search for a file. We need to be able to search a directory structure to find 
the entry for a particular file. Since files have symbolic names, and similar 

Chapter 10 
names may indicate a relationship between files, we may want to be able 
to find all files whose names match a particular pattern. 
Create a file. New files need to be created and added to the directory. 
Delete a file. When a file is no longer needed, we want to be able to remove 
it from the directory. 
List a directory. We need to be able to list the files in a directory and the 
contents of the directory entry for each file in the list. 
Rename a file. Because the name of a file represents its contents to its users, 
we must be able to change the name when the contents or use of the file 
changes. Renaming a file may also allow its position within the directory 
structure to be changed. 
Traverse the file system. We may wish to access every directory and every 
file within a directory structure. For reliability, it is a good idea to save the 
contents and structure of the entire file system at regular intervals. Often, 
we do this by copyin.g all files to magn.etic tape. This technique provides a 
backup copy in case of system failure. In addition, if a file is no longer in 
use, the file can be copied to tape and the disk space of that file released 
for reuse by another file. 
In. the following sections, we describe the most common schemes for defining 
the logical structure of a directory. 
10.3.3 Single-level Directory 
The simplest directory structure is the single-level directory. All files are 
contained in the same directory, which is easy to support and understand 
(Figure 10.8). 
A single-level directory has significant limitations, however, when the 
number of files increases or when the system has more than one user. Since all 
files are in the same directory, they must have unique names. If two users call 
their data file test, then the unique-name rule is violated. For example, in one 
programming class, 23 students called the program for their second assignment 
prog2; another 11 called it assign2. Although file names are generally selected to 
reflect the content of the file, they are often limited in length, complicating the 
task of making file names unique. The MS-DOS operating system allows only 
11-character file names; UNIX, in contrast, allows 255 characters. 
Even a single user on a single-level directory may find it difficult to 
remember the names of all the files as the number of files increases. It is not 
directory 
files 
Figure 10.8 Single-level directory. 

10.3 

uncommon for a user to have hundreds of files on one computer system and an 
equal number of additional files on another system. Keeping track of so many 
files is a daunting task. 
10.3.4 Two-Level Directory 
As we have seen, a single-level directory often leads to confusion of file names 
among different users. The standard solution is to create a separate directory 
for each user. 
In the two-level directory structure, each user has his own 
The UFDs have similar structures, but each lists only the files 
of a single user. W11en a user job starts or a user logs in, the system's 
is searched. The MFD is indexed by user name or account 
number, and each entry points to the UFD for that user (Figure 10.9). 
When a user refers to a particular file, only his own UFD is searched. Thus, 
different users may have files with the same name, as long as all the file names 
within each UFD are unique. To create a file for a user, the operating system 
searches only that user's UFD to ascertain whether another file of that name 
exists. To delete a file, the operating system confines its search to the local UFD; 
thus, it cannot accidentally delete another user's file that has the same name. 
The user directories themselves must be created and deleted as necessary. 
A special system program is run with the appropriate user name and account 
information. The program creates a new UFD and adds an entry for it to the MFD. 
The execution of this program might be restricted to system administrators. The 
allocation of disk space for user directories can be handled with the teduciques 
discussed in Chapter 11 for files themselves. 
Although the two-level directory structure solves the name-collision prob-
lem, it still has disadvantages. This structure effectively isolates one user from 
another. Isolation is an advantage when the users are completely independent 
but is a disadvantage when the users want to cooperate on some task and to 
access one another's files. Some systems simply do not allow local user files to 
be accessed by other users. 
If access is to be pennitted, one user must have the ability to name a file 
in another user's directory. To name a particular file "Lmiquely in a two-level 
directory, we must give both the user name and the file name. A two-level 
directory can be thought of as a tree, or an inverted tree, of height 2. The root 
of the tree is the MFD. Its direct descendants are the UFDs. The descendants of 
user file 
directory 
Figure i 0.9 Two-level directory structure. 

Chapter 10 
the UFDs are the files themselves. The files are the leaves of the tree. Specifying 
a user name and a file name defines a path in the tree from the root (the MFD) 
to a leaf (the specified file). Thus, a user name and a file name define a path 
name. Every file in the system has a path name. To name a file uniquely, a user 
must know the path name of the file desired. 
For example, if user A wishes to access her own test file named test, she can 
simply refer to test. To access the file named test of user B (with directory-entry 
name userb), however, she might have to refer to /userb/test. Every system has 
its own syntax for naming files in directories other than the user's own. 
Additional syntax is needed to specify the volume of a file. For instance, 
in MS-DOS a volume is specified by a letter followed by a colon. Thus, a file 
specification might be C:\userb\fest. Some systems go even further and separate 
the volume, directory name, and file name parts of the specification. For 
instance, in VMS, the file login.com might be specified as: u:[sst.jdeck]login.com;l, 
where u is the name of the volume, sst is the name of the directory, jdeck is the 
name of the subdirectory, and 1 is the version number. Other systems simply 
treat the volume name as part of the directory name. The first name given is 
that of the volume, and the rest is the directory and file. For instance, /u/pbg/test 
might specify volume u, directory pbg, and file test. 
A special case of this situation occurs with the system files. Programs pro-
vided as part of the system -loaders, assemblers, compilers, utility routines, 
libraries, and so on-are generally defined as files. When the appropriate 
commands are given to the operating system, these files are read by the loader 
and executed. Many command interpreters simply treat such a command as the 
name of a file to load and execute. As the directory system is defined presently, 
this file name would be searched for in the current UFD. One solution would 
be to copy the system files into each UFD. However, copying all the system files 
would waste an enormous amount of space. (If the system files require 5 MB, 
then supporting 12 users would require 5 x 12 == 60 MB just for copies of the 
system files.) 
The standard solution is to complicate the search procedure slightly. A 
special user directory is defined to contain the system files (for example, user 
0). Whenever a file name is given to be loaded, the operating system first 
searches the local UFD. If the file is found, it is used. If it is not found, the system 
automatically searches the special user directory that contains the system files. 
The sequence of directories searched when a file is named is called the 
. The search path can be extended to contain an unlimited list of directories 
to search when a command name is given. This method is the one most used 
in UNIX and MS-DOS. Systems can also be designed so that each user has his 
own search path. 
10.3.5 Tree-Structured Directories 
Once we have seen how to view a two-level directory as a two-level tree, 
the natural generalization is to extend the directory structure to a tree of 
arbitrary height (Figure 10.10). This generalization allows users to create their 
own subdirectories and to organize their files accordingly. A tree is the most 
common directory structure. The tree has a root directory, and every file in the 
system has a unique path name. 

10.3 

root 
ITITI 
0 0 
Figure i 0.10 Tree-structured directory structure. 
A directory (or subdirectory) contains a set of files or subdirectories. A 
directory is simply another file, but it is treated in a special way. All directories 
have the same internal format. One bit in each directory entry defines the entry 
as a file (0) or as a subdirectory (1). Special system calls are used to create and 
delete directories. 
In normal use, each process has a current directory. The 
should contain most of the files that are of current interest to the process. 
When reference is made to a file, the current directory is searched. If a file is 
needed that is not in the current directory, then the user usually must either 
specify a path name or change the current directory to be the directory holding 
that file. To change directories, a system call is provided that takes a directory 
name as a parameter and uses it to redefine the current directory. Thus, the 
user can change his current directory whenever he desires. From one change 
directory system call to the next, all open system calls search the current 
directory for the specified file. Note that the search path may or may not 
contain a special entry that stands for "the current directory." 
The initial current directory of the login shell of a user is designated when 
the user job starts or the user logs in. The operating system searches the 
accounting file (or some other predefined location) to find an entry for this 
user (for accounting purposes). In the accounting file is a pointer to (or the 
name of) the user's initial directory. This pointer is copied to a local variable 
for this user that specifies the user's initial current directory. From that shell, 
other processes can be spawned. The current directory of any subprocess is 
usually the current directory of the parent when it was spawned. 
Path names can be of two types: absolute and relative. An 
begins at the root and follows a 
down to the specified file, giving 
the directory names on the path. A 
defi11es a path from the 
current directory. For example, in the tree-structured file system of Figure 10.10, 

Chapter 10 
if the current directory is root/spell/mail, then the relative path nan<e prt/jirst 
refers to the same file as does the absolute path name root/spell/mail/prt/jirst. 
Allowing a user to define her own subdirectories permits her to impose 
a structure on her files. This structure might result in separate directories for 
files associated with different topics (for example, a subdirectory was created 
to hold the text of this book) or different forms of information (for example, the 
directory programs may contain source programs; the directory bin may store 
all the binaries). 
An interesting policy decision in a tree-structured directory concerns how 
to handle the deletion of a directory. If a directory is empty, its entry in the 
directory that contains it can simply be deleted. However, suppose the directory 
to be deleted is not ernpty but contains several files or subdirectories. One of 
two approaches can be taken. Some systems, such as MS-DOS, will not delete a 
directory unless it is empty. Thus, to delete a directory, the user must first delete 
all the files in that directory. If any subdirectories exist this procedure must 
be applied recursively to them, so that they can be deleted also. This approach 
can result in a substantial amount of work. An alternative approach, such as 
that taken by the UNIX rm command, is to provide an option: when a request is 
made to delete a directory, all that directory's files and subdirectories are also 
to be deleted. Either approach is fairly easy to implement; the choice is one 
of policy. The latter policy is more convenient, but it is also more dangerous, 
because an entire directory structure can be removed with one command. If 
that command is issued in error, a large number of files and directories will 
need to be restored (assuming a backup exists). 
With a tree-structured directory system, users can be allowed to access, in 
addition to their files, the files of other users. For example, user B can access a 
file of user A by specifying its path names. User B can specify either an absolute 
or a relative path name. Alternatively, user B can change her current directory 
to be user A's directory and access the file by its file names. 
A path to a file in a tree-struch1red directory can be longer than a path 
in a two-level directory. To allow users to access programs without having to 
remember these long paths, the Macintosh operating system automates the 
search for executable programs. One method it uses is to maintain a file, called 
the Desktop File, containing the metadata code and the name and location 
of all executable programs it has seen. When a new hard disk is added to the 
system, or the network is accessed, the operating system traverses the directory 
structure, searching for executable programs on the device and recording the 
pertinent information. This mechanism supports the double-dick execution 
functionality described previously. A double-dick on a file causes its creator-
attribute data to be read and the Desktop File to be searched for a match. Once 
the match is found, the appropriate executable program is started with the 
clicked-on file as its input. 
10.3.6 Acyclic-Graph Directories 
Consider two programmers who are working on a joint project. The files asso-
ciated with that project can be stored in a subdirectory, separating them from 
other projects and files of the two programmers. But since both programmers 
are equally responsible for the project, both want the subdirectory to be in 

10.3 Directory and Disk Structure 

Figure 10.11 
Acyclic-graph directory structure. 
their own directories. The common subdirectory should be shared. A shared 
directory or file will exist in the file system in two (or more) places at once. 
A tree structure prohibits the sharing of files or directories. An acyclic graph 
-that is, a graph with no cycles-allows directories to share subdirectories 
and files (Figure 10.11). The same file or subdirectory may be in two different 
directories. The acyclic graph is a natural generalization of the tree-structured 
directory scheme. 
It is important to note that a shared file (or directory) is not the same as two 
copies of the file. With two copies, each programmer can view the copy rather 
than the original, but if one programmer changes the file, the changes will not 
appear in the other's copy. With a shared file, only one actual file exists, so any 
changes made by one person are immediately visible to the other. Sharing is 
particularly important for subdirectories; a new file created by one person will 
automatically appear in all the shared subdirectories. 
When people are working as a team, all the files they want to share can be 
put into one directory. The UFD of each team member will contain this directory 
of shared files as a subdirectory. Even in the case of a single user, the user's file 
organization may require that some file be placed in different subdirectories. 
For example, a program written for a particular project should be both in the 
directory of all programs and in the directory for that project. 
Shared files and subdirectories can be implemented in several ways. A 
common way, exemplified by many of the UNIX systems, is to create a new 
directory entry called a link. A link is effectively a pointer to another file 
or subdirectory. For example, a link may be implemented as an absolute or a 
relative path name. When a reference to a file is made, we search the directory. If 
the directory entry is marked as a link, then the name of the real file is included 
in the link information. We resolve the link by using that path name to locate 
the real file. Links are easily identified by their format in the directory entry 
(or by having a special type on systems that support types) and are effectively 

Chapter 10 
indirect pointers. The operating system ignores these links when traversing 
directory trees to preserve the acyclic structure of the system. 
Another common approach to implementing shared files is simply to 
duplicate all information about them in both sharing directories. Thus, both 
entries are identical and equal. Consider the difference between this approach 
and the creation of a link. The link is clearly different from the original directory 
entry; thus, the two are not equal. Duplicate directory entries, however, make 
the original and the copy indistinguishable. A major problem with duplicate 
directory entries is maintaining consistency when a file is modified. 
An acyclic-graph directory structure is more flexible than is a simple tree 
structure, but it is also more complex. Several problems must be considered 
carefully. A file may now have multiple absolute path names. Consequently, 
distinct file names may refer to the same file. This situation is similar to the 
aliasing problem for programming languages. If we are trying to traverse the 
entire file system-to find a file, to accumulate statistics on all files, or to copy 
all files to backup storage-this problem becomes significant, since we do not 
want to traverse shared structures more than once. 
Another problem involves deletion. When can the space allocated to a 
shared file be deallocated and reused? One possibility is to remove the file 
whenever anyone deletes it, but this action may leave dangling pointers to the 
now-nonexistent file. Worse, if the remaining file pointers contain actual disk 
addresses, and the space is subsequently reused for other files, these dangling 
pointers may point into the middle of other files. 
In a system where sharing is implemented by symbolic links, this situation 
is somewhat easier to handle. The deletion of a link need not affect the original 
file; only the link is removed. If the file entry itself is deleted, the space for 
the file is deallocated, leaving the links dangling. We can search for these links 
and remove them as well, but unless a list of the associated links is kept with 
each file, this search can be expensive. Alternatively, we can leave the links 
until an attempt is made to use them. At that time, we can determine that the 
file of the name given by the link does not exist and can fail to resolve the 
link name; the access is treated just as with any other illegal file name. (In this 
case, the system designer should consider carefully what to do when a file is 
deleted and another file of the same name is created, before a symbolic link to 
the original file is used.) In the case of UNIX, symbolic links are left when a file 
is deleted, and it is up to the user to realize that the orig:llcal file is gone or has 
been replaced. Microsoft Windows (all flavors) uses the same approach. 
Another approach to deletion is to preserve the file until all references to 
it are deleted. To implement this approach, we must have some mechanism 
for determining that the last reference to the file has been deleted. We could 
keep a list of all references to a file (directory entries or symbolic links). When 
a link or a copy of the directory entry is established, a new entry is added to 
the file-reference list. When a link or directory entry is deleted, we remove its 
entry on the list. The file is deleted when its file-reference list is empty. 
The trouble with this approach is the variable and potentially large size of 
the file-reference list. However, we really do not need to keep the entire list 
-we need to keep only a count of the number of references. Adding a new 
link or directory entry increments the reference count; deleting a link or entry 
decrements the count. When the count is 0, the file can be deleted; there are 
no remaining references to it. The UNIX operating system uses this approach 

10.3 

for nonsymbolic links (or 
keeping a reference count in the file 
information block (or inode; see Appendix A.7.2). By effectively prohibiting 
multiple references to directories, we maintain an acyclic-graph structure. 
To avoid problems such as the ones just discussed, some systems do 
not allow shared directories or links. For example, in MS-DOS, the directory 
structure is a tree structure rather than an acyclic graph. 
10.3.7 General Graph Directory 
A serious problem with using an acyclic-graph structure is ensuring that there 
are no cycles. If we start with a two-level directory and allow users to create 
subdirectories, a tree-structured directory results. It should be fairly easy to see 
that simply adding new files and subdirectories to an existing tree-structured 
directory preserves the tree-structured nature. Howeve1~ when we add links, 
the tree structure is destroyed, resulting in a simple graph structure (Figure 
10.12). 
The primary advantage of an acyclic graph is the relative simplicity of the 
algorithms to traverse the graph and to determine when there are no more 
references to a file. We want to avoid traversing shared sections of an acyclic 
graph twice, mainly for performance reasons. If we have just searched a major 
shared subdirectory for a particular file without finding it, we want to avoid 
searching that subdirectory again; the second search would be a waste of time. 
If cycles are allowed to exist in the directory, we likewise want to 
avoid searching any component twice, for reasons of correctness as well as 
performance. A poorly designed algorithm might result in an infinite loop 
continually searching through the cycle and never terminating. One solution 
is to limit arbitrarily the number of directories that will be accessed during a 
search. 
A similar problem exists when we are trying to determine when a file 
can be deleted. With acyclic-graph directory structures, a value of 0 in the 
reference count means that there are no more references to the file or directory, 
Figure 10.12 General graph directory. 

Chapter 10 
10.4 
and the file can be deleted. However, when cycles exist, the reference count 
may not be 0 even when it is no longer possible to refer to a directory or file. 
This anomaly results from the possibility of self-referencing (or a cycle) in the 
directory structure. In this case, we generally need to use a garbage-collection 
scheme to determine when the last reference has been deleted and the disk 
space can be reallocated. Garbage collection involves traversing the entire file 
system, marking everything that can be accessed. Then, a second pass collects 
everything that is not marked onto a list of free space. (A similar marking 
procedure can be used to ensure that a traversal or search will cover everything 
in the file system once and only once.) Garbage collection for a disk-based file 
system, however, is extremely time consuming and is thus seldom attempted. 
Garbage collection is necessary only because of possible cycles in the graph. 
Thus, an acyclic-graph structure is much easier to work with. The difficulty 
is to avoid cycles as new links are added to the structure. How do we know 
when a new lir1k will complete a cycle? There are algorithms to detect cycles 
in graphs; however, they are computationally expensive, especially when the 
graph is on disk storage. A simpler algorithm in the special case of directories 
and links is to bypass links during directory traversal. Cycles are avoided, and 
no extra overhead is incurred. 
Just as a file must be opened before it is used, a file system must be mounted before 
it can be available to processes on the system. More specifically, the directory 
structure may be built out of multiple volumes, which must be mounted to 
make them available within the file-system name space. 
The mount procedure is straightforward. The operating system is given the 
name of the device and the 
location within the file structure 
where the file system is to be attached. Some operating systems require that a 
file system type be provided, while others inspect the structures of the device 
and determine the type of file system. Typically, a mount point is an empty 
directory. For instance, on a UNIX system, a file system containing a user's home 
directories might be mounted as /home; then, to access the directory structure 
within that file system, we could precede the directory names with /home, as 
in /home/jane. Motmting that file system under /users would result in the path 
name /users/jane, which we could use to reach the same directory. 
Next, the operating system verifies that the device contains a valid file 
system. It does so by asking the device driver to read the device directory 
and verifying that the directory has the expected format. Finally, the operating 
system notes in its directory structure that a file system is n1.ounted at the 
specified mount point. This scheme enables the operating system to traverse 
its directory structure, switching among file systems, and even file systems of 
varying types, as appropriate. 
To illustrate file mounting, consider the file system depicted in Figure 
10.13, where the triangles represent subtrees of directories that are of interest. 
Figure 10.13(a) shows an existing file system, while Figure 10.13(b) shows an 
unmounted volume residing on /device/ds!c. At this point, only the files on the 
existing file system can be accessed. Figure 10.14 shows the effects of mounting 

10.4 File-System Mounting 

bill 
(a) 
(b) 
Figure 10.13 File system. (a) Existing system. (b) Unmounted volume. 
the volume residing on /device/dsk over /users. If the volume is unmounted, the 
file system is restored to the situation depicted in Figure 10.13. 
Systems impose semantics to clarify functionality. For example, a system 
may disallow a mount over a directory that contains files; or it may make the 
mounted file system available at that directory and obscure the directory's 
existing files until the file system is unmounted, terminating the use of the file 
system and allowing access to the original files in that directory. As another 
example, a system may allow the same file system to be mounted repeatedly, 
at different mount points; or it may only allow one mount per file system. 
Consider the actions of the classic Macintosh operating system. Whenever 
the system encounters a disk for the first time (hard disks are found at boot 
time, and optical disks are seen when they are inserted into the drive), the 
Macintosh operating system searches for a file system on the device. If it finds 
one, it automatically mounts the file system at the root level, adding a folder 
icon on the screen labeled with the name of the file system (as stored in the 
I 
Figure 10.14 Mount point. 

Chapter 10 
10.5 
device directory). The user is then able to click on the icon and thus display the 
newly mounted file system. Mac OS X behaves much like BSD UNIX, on which it 
is based. All file systems are mounted under the /Volumes directory. The Mac 
OS X GUI hides this fact and shows the file systems as if they were all mounted 
at the root level. 
The Microsoft Windows family of operating systems (95, 98, NT, small 
2000, 2003, XP, Vista) maintains an extended two-level directory structure, 
with devices and volumes assigned drive letters. Volumes have a general graph 
directory structure associated with the drive letter. The path to a specific file 
takes the form of drive-letter:\path \to \file. The more recent versions of Windows 
allow a file system to be mounted anywhere in the directory tree, just as 
UNIX does. Windows operating systems automatically discover all devices and 
mount all located file systems at boot time. In some systems, like UNIX, the 
mount commands are explicit. A system configuration file contains a list of 
devices and mount points for automatic mounting at boot time, but other 
mounts may be executed manually. 
Issues concerning file system mounting are further discussed in Section 
11.2.2 and in Appendix A.7.5. 
In the previous sections, we explored the motivation for file sharing and some of 
the difficulties involved in allowing users to share files. Such file sharing is very 
desirable for users who want to collaborate and to reduce the effort required 
to achieve a computing goal. Therefore, user-oriented operating systems must 
accommodate the need to share files in spite of the inherent difficulties. 
In this section, we examine more aspects of file sharing. We begin by 
discussing general issues that arise when multiple users share files. Once 
multiple users are allowed to share files, the challenge is to extend sharing to 
multiple file systems, including remote file systems; we discuss that challenge 
as well. Finally, we consider what to do about conflicting actions occurring on 
shared files. For instance, if multiple users are writing to a file, should all the 
writes be allowed to occurf or should the operating system protect the users' 
actions from one another? 
10.5.1 Multiple Users 
When an operating system accommodates multiple users, the issues of file 
sharing, file naming, and file protection become preeminent. Given a directory 
structure that allows files to be shared by users, the system must mediate the 
file sharing. The system can either allow a user to access the files of other users 
by default or require that a user specifically grant access to the files. These are 
the issues of access control and protection, which are covered in Section 10.6. 
To implement sharing and protection, the system must maintain more file 
and directory attributes than are needed on a single-user system. Although 
many approaches have been taken to meet this requirement, most systems 
have evolved to use the concepts of file (or directory) owner (or user) and group. 
The owner is the user who can change attributes and grant access and who has 
the most control over the file. The group attribute defines a subset of users who 

10.5 

can share access to the file. For example, the owner of a file on a UNIX system 
can issue all operations on a file, while members of the file's group can execute 
one subset of those operations, and all other users can execute another subset 
of operations. Exactly which operations can be executed by group members 
and other users is definable by the file's owner. More details on permission 
attributes are included in the next section. 
The owner and group IDs of a given file (or directory) are stored with the 
other file attributes. When a user requests an operation on a file, the user ID can 
be compared with the owner attribute to determine if the requesting user is the 
owner of the file. Likewise, the group IDs can be compared. The result indicates 
which permissions are applicable. The system then applies those permissions 
to the requested operation and allows or denies it. 
Many systems have multiple local file systems, including volumes of a 
single disk or multiple volumes on multiple attached disks. In these cases, 
the ID checking and permission matching are straightforward, once the file 
systems are mounted. 
10.5.2 Remote File Systems 
With the advent of networks (Chapter 16), communication among remote 
computers became possible. Networking allows the sharing of resources spread 
across a campus or even around the world. One obvious resource to share is 
data in the form of files. 
Through the evolution of network and file technology, remote file-sharing 
methods have changed. The first implemented method involves manually 
transferring files between machines via programs like ftp. The second major 
method uses a 
(DFS) in which remote directories are 
visible from a local machine. In some ways, the third method, the 
is a reversion to the first. A browser is needed to gain access to the 
remote files, and separate operations (essentially a wrapper for ftp) are used 
to transfer files. 
ftp is used for both anonymous and authenticated access. 
allows a user to transfer files without having an account on the remote 
system. The World Wide Web uses anonymous file exchange almost exclusively. 
DFS involves a much tighter integration between the machine that is accessing 
the remote files and the machine providing the files. This integration adds 
complexity, which we describe in this section. 
10.5.2.1 The Client-Server Model 
Remote file systems allow a computer to mom1.t one or more file systems 
from one or more remote machines. In this case, the machine containing the 
files is the server, and the machine seeking access to the files is the client. The 
client-server relationship is common with networked machines. Generally, 
the server declares that a resource is available to clients and specifies exactly 
which resource (in this case, which files) and exactly which clients. A server 
can serve multiple clients, and a client can use multiple servers, depending on 
the implementation details of a given client-server facility. 
The server usually specifies the available files on a volume or directory 
level. Client identification is more difficult. A client can be specified 
network name or other identifier, such as an IP address, but these can be 

Chapter 10 
or imitated. As a result of spoofing, an unauthorized client could be allowed 
access to the server. More secure solutions include secure authentication of the 
client via encrypted keys. Unfortunately, with security come many challenges, 
including ensuring compatibility of the client and server (they must use the 
same encryption algorithms) and security of key exchanges (intercepted keys 
could again allow unauthorized access). Because of the difficulty of solving 
these problems, unsecure authentication methods are most commonly used. 
In the case of UNIX and its network file system (NFS), authentication takes 
place via the client networking information, by default. In this scheme, the 
user's IDs on the client and server must match. lf they do not, the server will 
be unable to determine access rights to files. Consider the example of a user 
who has an ID of 1000 on the client and 2000 on the server. A request from 
the client to the server for a specific file will not be handled appropriately, as 
the server will determine if user 1000 has access to the file rather than basing 
the determination on the real user ID of 2000. Access is thus granted or denied 
based on incorrect authentication information. The server must trust the client 
to present the correct user ID. Note that the NFS protocols allow many-to-many 
relationships. That is, many servers can provide files to many clients. In fact 
a given machine can be both a server to some NFS clients and a client of other 
NFS servers. 
Once the remote file system is mounted, file operation requests are sent 
on behalf of the user across the network to the server via the DFS protocol. 
Typically, a file-open request is sent along with the ID of the requesting user. 
The server then applies the standard access checks to determine if the user has 
credentials to access the file in the mode requested. The request is either allowed 
or denied. If it is allowed, a file handle is returned to the client application, 
and the application then can perform read, write, and other operations on the 
file. The client closes the file when access is completed. The operating system 
may apply semantics similar to those for a local file-system mount or may use 
different semantics. 
10.5.2.2 Distributed Information Systems 
To make client-server systems easier to manage, 
also known as 
provide unified access 
to the information needed for remote computing. The 
provides host-name-to-network-address translations for the entire 
Internet (including the World Wide Web). Before DNS became widespread, 
files containing the same information were sent via e-mail or ftp between all 
networked hosts. This methodology was not scalable. DNS is further discussed 
in Section 16.5.1. 
Other distributed information systems provide user name/password/user 
ID/group ID space for a distributed facility. UNIX systems have employed a wide 
variety of distributed-information methods. Sun Microsystems introduced 
yellow pages (since renamed 
or 
and most of 
the industry adopted its use. It centralizes storage of user names, host names, 
printer information, and the like. Unfortunately, it uses unsecure authentication 
methods, including sending user passwords unencrypted (in clear text) and 
identifying hosts by IP address. Sun's NIS+ is a much more secure replacement 
for NIS but is also much more complicated and has not been widely adopted. 

10.5 

network 
information is used in conjunction with user authentication (user name and 
password) to create a 
that the server uses to decide whether 
to allow or deny access to a requested file system. For this authentication 
to be valid, the user names m.u.st match from machine to machine (as with 
NFS). Microsoft uses two distributed naming structures to provide a single 
name space for users. The older naming technology is 
The newer 
technology, available in Windows XP and Windows 2000, is 
Once established, the distributed naming facility is used by all clients 
servers to authenticate users. 
The industry is moving toward use of the 
as a secure distributed naming mechanism. In fact, active 
is based on LDAP. Sun Microsystems includes LDAP with the 
operating system and allows it to be employed for user authentication as 
well as system-wide retrieval of information, such as availability of printers. 
Conceivably, one distributed LDAP directory could be used by an organization 
to store all user and resource information for all the organization's computers. 
The result would be 
for users, who would enter 
their authentication information once for access to all computers within the 
organization. It would also ease system-administration efforts by combining, 
in one location, information that is currently scattered in various files on each 
system or in different distributed information services. 
10.5.2.3 Failure Modes 
Local file systems can fail for a variety of reasons, including failure of the 
disk containing the file system, corruption of the directory structure or other 
disk-management information (collectively called 
disk-controller 
failure, cable failure, and host-adapter failure. User or system-administrator 
failure can also cause files to be lost or entire directories or volumes to be 
deleted. Many of these failures will cause a host to crash and an error condition 
to be displayed, and human intervention will be required to repair the damage. 
Remote file systems have even more failure modes. Because of the 
complexity of network systems and the required interactions between remote 
machines, many more problems can interfere with the proper operation of 
remote file systems. In the case of networks, the network can be interrupted 
between two hosts. Such interruptions can result from hardware failure, poor 
hardware configuration, or networking implementation issues. Although some 
networks have built-in resiliency, including multiple paths between hosts, 
many do not. Any single failure can thus interrupt the flow of DFS commands. 
Consider a client in the midst of using a remote file system. It has files open 
from the remote host; among other activities, it may be performing directory 
lookups to open files, reading or writing data to files, and closing files. Now 
consider a partitioning of the network, a crash of the server, or even a scheduled 
shutdown of the server. Suddenly, the remote file system is no longer reachable. 
This scenario is rather common, so it would not be appropriate for the client 
system to act as it would if a local file system were lost. Rather, the system can 
either terminate all operations to the lost server or delay operations until the 
server is again reachable. These failure semantics are defined and in<plemented 
as part of the remote-file-system protocol. Termination of all operations can 

Chapter 10 
result in users' losing data-and patience. Thus, most DFS protocols either 
enforce or allow delaying of file-system operations to rencote hosts, with the 
hope that the remote host will become available again. 
To implement this kind of recovery from failure, some kind of 
may be maintained on both the client and the server. If both server 
and client maintain knowledge of their current activities and open files, then 
they can seamlessly recover from a failure. In the situation where the server 
crashes but must recognize that it has remotely rnounted exported file systems 
and opened files, NFS takes a simple approach, implementing a 
DFS. 
In essence, it assumes that a client request for a file read or write would not 
have occurred unless the file system had been remotely mounted and the file 
had been previously open. The NFS protocol carries all the information needed 
to locate the appropriate file and perform the requested operation. Similarly, 
it does not track which clients have the exported volumes mounted, again 
assuming that if a request comes in, it must be legitimate. While this stateless 
approach makes NFS resilient and rather easy to implement, it also makes it 
unsecure. For example, forged read or write requests could be allowed by an 
NFS server even though the requisite mount request and permission check 
had not taken place. These issues are addressed in the industry standard NFS 
Version 4, in which NFS is made stateful to improve its security, performance, 
and functionality. 
10.5.3 Consistency Semantics 
represent an important criterion for evaluating any 
file system that supports file sharing. These semantics specify how multiple 
users of a system are to access a shared file simultaneously. In particular, they 
specify when modifications of data by one user will be observable by other 
users. These semantics are typically implemented as code with the file system. 
Consistency semantics are directly related to the process-synchronization 
algorithms of Chapter 6. However, the complex algorithms of that chapter tend 
not to be implemented in the case of file I/0 because of the great latencies and 
slow transfer rates of disks and networks. For example, performing an atomic 
transaction to a remote disk could involve several network communications, 
several disk reads and writes, or both. Systems that attempt such a full set of 
functionalities tend to perform poorly. A successful implementation of complex 
sharing semantics can be found in the Andrew file system. 
For the following discussion, we assume that a series of file accesses (that 
is, reads and writes) attempted by a user to the same file is always enclosed 
between the open() and close() operations. The series of accesses between 
the open() and close() operations makes up a 
To illustrate the 
concept, we sketch several prominent examples of consistency semantics. 
10.5.3.1 UNIX Semantics 
The UNIX file system (Chapter 17) uses the following consistency semantics: 
Writes to an open file by a user are visible immediately to other users who 
have this file open. 
One mode of sharing allows users to share the pointer of current location 
into the file. Thus, the advancing of the pointer by one user affects all 

10.6 
10.6 

sharing users. Here, a file has a single image that interleaves all accesses, 
regardless of their origin. 
In the UNIX semantics, a file is associated with a single physical image that 
is accessed as an exclusive resource. Contention for this single image causes 
delays in user processes. 
10.5.3.2 
Session Semantics 
The Andrew file system (AFS) (Chapter 17) uses the following consistency 
semantics: 
Writes to an open file by a user are not visible immediately to other users 
that have the same file open. 
Once a file is closed, the changes made to it are visible only in sessions 
starting later. Already open instances of the file do not reflect these changes. 
According to these semantics, a file may be associated temporarily with several 
(possibly different) images at the same time. Consequently, multiple users are 
allowed to perform both read and write accesses concurrently on their images 
of the file, without delay. Almost no constraints are enforced on scheduling 
accesses. 
10.5.3.3 Immutable-Shared-Files Semantics 
A unique approach is that of 
Once a file is declared 
as shared by its creator, it cam1ot be modified. An immutable £ile has two key 
properties: its name may not be reused, and its contents may not be altered. 
Thus, the name of an immutable file signifies that the contents of the file are 
fixed. The implementation of these semantics in a distributed system (Chapter 
17) is simple, because the sharing is disciplined (read-only). 
When information is stored in a computer system, we want to keep it safe 
from physical damage (the issue of reliability) and improper access (the issue 
of protection). 
Reliability is generally provided by duplicate copies of files. Many comput-
ers have systems programs that automatically (or through computer-operator 
intervention) copy disk files to tape at regular intervals (once per day or week 
or month) to maintain a copy should a file system be accidentally destroyed. 
File systems can be damaged by hardware problems (such as errors in reading 
or writing), power surges or failures, head crashes, dirt, temperature extremes, 
and vandalism. Files may be deleted accidentally. Bugs in the file-system soft-
ware can also cause file contents to be lost. Reliability is covered in more detail 
in Chapter 12. 
Protection can be provided in many ways. For a small single-user system, 
we might provide protection by physically removing the floppy disks and 
locking them in a desk drawer or file cabinet. In a multiuser system, however, 
other mechanisms are needed. 

11.1 
c 
As we saw in Chapter 10, the file system provides the mechanism for on-line 
storage and access to file contents, including data and programs. The file system 
resides permanently on secondary storage, which is designed to hold a large 
amount of data permanently. This chapter is primarily concerned with issues 
surrounding file storage and access on the most common secondary-storage 
medium, the disk. We explore ways to structure file use, to allocate disk space, 
to recover freed space, to track the locations of data, and to interface other 
parts of the operating system to secondary storage. Performance issues are 
considered throughout the chapter. 
To describe the details of implementing local file systems and directory 
structures. 
To describe the implementation of remote file systems. 
To discuss block allocation and free-block algorithms and trade-offs. 
Disks provide the bulk of secondary storage on which a file system is 
maintained. They have two characteristics that make them a convenient 
medium for storing multiple files: 
A disk can be rewritten in place; it is possible to read a block from the 
disk, modify the block, and write it back into the sance place. 
A disk can access directly any block of information it contains. Thus, it is 
simple to access any file either sequentially or randomly, and switching 
from one file to another requires only moving the read-write heads and 
waiting for the disk to rotate. 
We discuss disk structure in great detail in Chapter 12. 

Chapter 11 
To improve I/0 efficiency, I/0 transfers between memory and disk are 
performed in units of blocks. Each block has one or more sectors. Depending 
on the disk drive, sector size varies from 32 bytes to 4,096 bytes; the usual size 
is 512 bytes. 
provide efficient and convenient access to the disk by allowing 
data to be stored, located, and retrieved easily. A file system poses two quite 
different design problems. The first problem is defining how the file system 
should look to the user. This task involves defining a file and its attributes, 
the operations allowed on a file, and the directory structure for organizing 
files. The second problem is creating algorithms and data structures to map the 
logical file system onto the physical secondary-storage devices. 
The file system itself is generally composed of many different levels. The 
structure shown in Figure 11.1 is an example of a layered design. Each level in 
the design uses the features of lower levels to create new features for use by 
higher levels. 
The lowest level, the I/O control, consists of 
and interrupt 
handlers to transfer information between the main memory and the disk 
system. A device driver can be thought of as a translator. Its input consists of 
high-level commands such as "retrieve block 123." Its output consists of low-
level, hardware-specific instructions that are used by the hardware controller, 
which interfaces the I/0 device to the rest of the system. The device driver 
usually writes specific bit patterns to special locations in the I/0 controller's 
memory to tell the controller which device location to act on and what actions 
to take. The details of device drivers and the I/O infrastructure are covered in 
Chapter 13. 
The 
needs only to issue generic commands to the 
appropriate device driver to read and write physical blocks on the disk. Each 
physical block is identified by its numeric disk address (for example, drive 1, 
cylilcder 73, track 2, sector 10). This layer also manages the memory buffers 
and caches that hold various file-system, directory, and data blocks. A block 
application programs 
~ 
logical file system 
~ 
file-organization module 
~ 
basic file system 
~ 
1/0 control 
devices 
Figure 11.1 
Layered file system. 

11.1 

in the buffer is allocated before the transfer of a disk block can occur. When 
the buffer is full, the buffer m~anager must find more buffer ncemory or free 
up buffer space to allow a requested I/O to complete. Caches are used to hold 
frequently used file-system metadata to improve performance, so managing 
their contents is critical for optimum system performance. 
The 
knows about files and their logical blocks, 
as well as physical blocks. By knowing the type of file allocation used and 
the location of the file, the file-organization module can translate logical block 
addresses to physical block addresses for the basic file system to transfer. 
Each file's logical blocks are numbered from 0 (or 1) through N. Since the 
physical blocks containing the data usually do not match the logical numbers, 
a translation is needed to locate each block. The file-organization module also 
includes the free-space manager, which tracks unallocated blocks and provides 
these blocks to the file-organization module when requested. 
Finally, the 
f!Je 
manages metadata information. Metadata 
includes all of the file-system structure except the actual data (or contents of the 
files). The logical file system manages the directory structure to provide the file-
organization module with the information the latter needs, given a symbolic 
file name. It maintains file structure via file-control blocks. A flle-corttml 
(an 
in most UNIX file systems) contains information about the 
file, including ownership, permissions, and location of the file contents. The 
logical file system is also responsible for protection and security, as discussed 
in Chapters 10 and 14. 
When a layered structure is used for file-system implementation, duplica-
tion of code is minimized. The I/O control and sometimes the basic file-system 
code can be used by multiple file systems. Each file system can then have its 
own logical file-system and file-organization modules. Unfortunately, layering 
can introduce more operating system overhead, which may result in decreased 
performance. The use of layering, including the decision about how many 
layers to use and what each layer should do, is a major challenge in designing 
new systems. 
Many file systems are in use today. Most operating systems support 
more than one. For example, most CD-ROMs are written in the ISO 9660 
format, a standard format agreed on by CD-ROM manufacturers. In addition 
to removable-media file systems, each operating system has one or more disk-
based file systems. UNIX uses the 
fEe 
which is based on 
the Berkeley Fast File System (FFS). Windows NT, 2000, and XP support disk 
file-system formats of FAT, FAT32, and NTFS (or Windows NT File System), as 
well as CD-ROM, DVD, and floppy-disk file-system formats. Although Linux 
supports over forty different file systerns, the standard Linux file system is 
known as the 
with the most common versions being 
ext2 and ext3. There are also distributed file systems in which a file system on 
a server is mounted by one or more client computers across a network. 
File-system research continues to be an active area of operating-system 
design and implementation. Coogle created its own file system to meet the 
company's specific storage and retrieval needs. Another interesting project 
is the FUSE file-system, which provides flexibility in file-system use by 
implementing and executing file systems as user-level rather than kernel-level 
code. Using FUSE, a user can add a new file system to a variety of operating 
systems and can use that file system to manage her files. 

Chapter 11 
11.2 
As was described in Section 10.1.2, operating systems implement open() 
and close() systems calls for processes to request access to file contents. 
In this section, we delve into the structures and operations used to implement 
file-system operations. 
11.2.1 Overview 
Several on-disk and in-memory structures are used to implement a file system. 
These structures vary depending on the operating system and the file system, 
but some general principles apply. 
On disk, the file system may contain information about how to boot an 
operating system stored there, the total number of blocks, the number and 
location of free blocks, the directory structure, and individual files. Many of 
these structures are detailed throughout the remainder of this chapter; here, 
we describe them briefly: 
A 
(per volume) can contain information needed by the 
system to boot an operating system from that volume. If the disk does not 
contain an operating system, this block can be empty. It is typically the 
first block of a volume. In UFS, it is called the 
b,Jsck; in NTFS, it is the 
(per volume) contains volume (or partition) 
details, such as the number of blocks in the partition, the size of the blocks, 
a free-block count and free-block pointers, and a free-FCB count and FCB 
pointers. In UFS, this is called a 
in NTFS, it is stored in the 
A directory structure (per file system) is used to organize the files. In UFS, 
this includes file names and associated inode numbers. In NTFS, it is stored 
in the master file table. 
A per-file FCB contains many details about the file. It has a unique 
identifier number to allow association with a directory entry. In NTFS, 
this information is actually stored within the master file table, which uses 
a relational database structure, with a row per file. 
The in-memory in.formation is used for both file-system management and 
performance improvement via caching. The data are loaded at mount time, 
updated during file-system operations, and discarded at dismount. Several 
types of structures may be included. 
An in-memory 
volume. 
contains information about each mounted 
An in-memory directory-structure cache holds the directory information 
of recently accessed directories. (For directories at which volumes are 
mounted, it can contain a pointer to the volume table.) 
The 
contains a copy of the FCB of each open 
file, as well as other information. 

11.2 

file dates(create, access, write) 
file owner,. group, ACL 
file data blocks or pointers to file data blocks 
Figure 11.2 A typical file-control block. 
The 
contains a pointer to the appropriate entry 
in the system-wide open-file table, as well as other information. 
Buffers hold file-system blocks when they are being read from disk or 
written to disk. 
To create a new file, an application program calls the logical file system. 
The logical file system knows the format of the directory structures. To create a 
new file, it allocates a new FCB. (Alternatively, if the file-system implementation 
creates all FCBs at file-system creation time, an FCB is allocated from the set 
of free FCBs.) The system then reads the appropriate directory into memory, 
updates it with the new file name and FCB, and writes it back to the disk. A 
typical FCB is shown in Figure 11.2. 
Some operating systems, including UNIX, treat a directory exactly the same 
as a file-one with a "type" field indicating that it is a directory. Other operating 
systems, includii<g Windows NT, implement separate system calls for files and 
directories and treat directories as entities separate from files. Whatever the 
larger structural issues, the logical file system can call the file-organization 
module to map the directory I/0 into disk-block numbers, which are passed 
on to the basic file system and I/O control system. 
Now that a file has been created, it can be used for I/0. First, though, it 
must be opened. The open () call passes a file name to the logical file system. 
The open() system call first searches the system-wide open-file table to see 
if the file is already in use by another process. If it is, a per-process open-file 
table entry is created pointing to the existing system-wide open-file table. This 
algorithm can save substantial overhead. If the file is not already open, the 
directory structure is searched for the given file name. Parts of the directory 
structure are usually cached in memory to speed directory operations. Once 
the file is found, the FCB is copied into a system-wide open-file table in memory. 
This table not only stores the FCB but also tracks the number of processes that 
have the file open. 
Next, an entry is made in the per-process open-file table, with a pointer 
to the entry in the system-wide open-file table and some other fields. These 
other fields may include a pointer to the current location in the file (for the next 
read() or write() operation) and the access mode in which the file is open. 
The open() call returns a pointer to the appropriate entry in the per-process 

Chapter 11 
user space 
user space 
kernel memory 
(a) 
kernel memory 
(b) 
,-:---..,...---:+-t-ilEJ D 
DO 
secondary storage 
secondary storage 
Figure 11.3 In-memory file-system structures. (a) File open. (b) File read. 
file-system table. All file operations are then performed via this pointer. The 
file name may not be part of the open-file table, as the system has no use for 
it once the appropriate FCB is located on disk. It could be cached, though, to 
save time on subsequent opens of the same file. The name given to the entry 
varies. UNIX systems refer to it as a 
Windows refers to it as a 
When a process closes the file, the per-process table entry is removed, and 
the system-wide entry's open count is decremented. When all users that have 
opened the file close it, any updated metadata is copied back to the disk-based 
directory structure, and the system-wide open-file table entry is removed. 
Some systems complicate this scheme further by using the file system as an 
interface to other system aspects, such as networking. For example, in UFS, the 
system-wide open-file table holds the inodes and other information for files 
and directories. It also holds similar information for network connections and 
devices. In this way, one mechanism can be used for multiple purposes. 
The caching aspects of file-system structures should not be overlooked. 
Most systems keep all information about an open file, except for its actual data 
blocks, in memory. The BSD UNIX system is typical in its use of caches wherever 
disk I/0 can be saved. Its average cache hit rate of 85 percent shows that these 
techniques are well worth implementing. The BSD UNIX system is described 
fully in Appendix A. 
The operating structures of a file-system implementation are summarized 
in Figure 11.3. 

11.2 

11.2.2 Partitions and Mounting 
The layout of a disk can have many variations, depending on the operating 
system. A disk can be sliced into multiple partitions, or a volume can span 
multiple partitions on multiple disks. The former layout is discussed here, 
while the latter, which is more appropriately considered a form of RAID, is 
covered in Section 12.7. 
Each partition can be either "raw," containing no file system, or "cooked," 
containing a file system. 
is used where no file system is appropriate. 
UNIX swap space can use a raw partition, for example, as it uses its own format 
on disk and does not use a file system. Likewise, some databases use raw disk 
and format the data to suit their needs. Raw disk can also hold information 
needed by disk RAID systems, such as bit maps indicating which blocks are 
mirrored and which have changed and need to be mirrored. Similarly, raw disk 
can contain a miniature database holding RAID configuration information, such 
as which disks are members of each RAID set. Raw disk use is further discussed 
in Section 12.5.1. 
Boot information can be stored in a separate partition. Again, it has its 
own format, because at boot time the system does not have the file-system 
code loaded and therefore cannot interpret the file-system format. Rather, boot 
information is usually a sequential series of blocks, loaded as an image into 
memory. Execution of the image starts at a predefined location, such as the first 
byte. This 
in turn knows enough about the file-system structure to 
be able to find and load the kernel and start it executing. It can contain more 
than the instructions for how to boot a specific operating system. For instance, 
PCs and other systems can be 
Multiple operating systems can be 
installed on such a system. How does the system know which one to boot? 
A boot loader that understands multiple file systems and multiple operating 
systems can occupy the boot space. Once loaded, it can boot one of the operating 
systems available on the disk. The disk can have multiple partitions, each 
containing a different type of file system and a different operating system. 
The 
which contains the operating-system kernel and some-
times other system files, is mounted at boot time. Other volumes can be 
automatically mounted at boot or manually mounted later, depending on 
the operating system. As part of a successful mount operation, the operating 
system verifies that the device contains a valid file system. It does so by asking 
the device driver to read the device directory and verifying that the directory 
has the expected format. If the format is invalid, the partition must have 
its consistency checked and possibly corrected, either with or without user 
intervention. Finally, the operating system notes in its in-memory mount table 
that a file system is mounted, along with the type of the file system. The details 
of this function depend on the operating system. Microsoft Windows-based 
systems mount each volume in a separate name space, denoted by a letter 
and a colon. To record that a file system is mounted at F:, for example, the 
operating system places a pointer to the file system in a field of the device 
structure corresponding to F: . When a process specifies the driver letter, 
the operating system finds the appropriate file-system pointer and traverses 
the directory structures on that device to find the specified file or directory. 
Later versions of Windows can mount a file system at any point within the 
existing directory structure. 

Chapter 11 
On UNIX, file systems can be mounted at any directory. Mounting is 
implemented by setting a flag in the in-memory copy of the inode for that 
directory. The flag indicates that the directory is a mount point. A field then 
points to an entry in the mount table, indicating which device is mounted there. 
The mount table entry contains a pointer to the superblock of the file system. on 
that device. This scheme enables the operating system to traverse its directory 
structure, switching seamlessly among file systems of varying types. 
11.2.3 Virtual File Systems 
The previous section m.akes it clear that modern operating systems must 
concurrently support multiple types of file systems. But how does an operating 
system allow multiple types of file systems to be integrated into a directory 
structure? And how can users seamlessly move between file-system types 
as they navigate the file-system space? We now discuss some of these 
implementation details. 
An obvious but suboptimal method of implementing multiple types of file 
systems is to write directory and file routines for each type. Instead, however, 
most operating systems, including UNIX, use object-oriented techniques to 
simplify, organize, and modularize the implementation. The use of these 
methods allows very dissimilar file-system types to be implemented within 
the same structure, including network file systems, such as NFS. Users can 
access files that are contained within multiple file systems on the local disk or 
even on file systems available across the network. 
Data structures and procedures are used to isolate the basic system-
call functionality from the implementation details. Thus, the file-system 
implementation consists of three major layers, as depicted schematically in 
Figure 11.4. The first layer is the file-system interface, based on the open(), 
read(), write(), and close() calls and on file descriptors. 
The second layer is called the 
layer. The VFS layer 
serves two important functions: 
It separates file-system-generic operations from their implementation 
by defining a clean VFS interface. Several implementations for the VFS 
interface may coexist on the same machine, allowing transparent access 
to different types of file systems mounted locally. 
It provides a mechanism for uniquely representing a file throughout a 
network. The VFS is based on a file-representation structure, called a 
that contains a numerical designator for a network-wide unique 
file. (UNIX inodes are unique within only a single file system.) This 
network-wide uniqueness is required for support of network file systems. 
The kernel maintains one vnode structure for each active node (file or 
directory). 
Thus, the VFS distinguishes local files from remote ones, and local files are 
further distinguished according to their file-system types. 
The VFS activates file-system-specific operations to handle local requests 
according to their file-system types and calls the NFS protocol procedures for 
remote requests. File handles are constructed from the relevant vnodes and 
are passed as arguments to these procedures. The layer implementing the 

11.2 

network 
Figure 11.4 Schematic view of a virtual file system. 
file-system type or the remote-file-system protocol is the third layer of the 
architecture. 
Let's briefly examine the VFS architecture in Linux. The four main object 
types defined by the Linux VFS are: 
The inode object, which represents an individual file 
The file object, which represents an open file 
The superblock object, which represents an entire file system 
The dentry object, which represents an individual directory entry 
For each of these four object types, the VFS defines a set of operations that 
must be implemented. Every object of one of these types contains a pointer to 
a f1.mction table. The function table lists the addresses of the actual functions 
that implement the defined operations for that particular object. For example, 
an abbreviated API for some of the operations for the file object include: 
int open ( . . . ) -Open a file. 
ssize_t read(. . . ) -Read from a file. 
ssize_t write (. . . ) -Write to a file. 
int mmap( ... ) -Memory-map a file. 
An implementation of the file object for a specific file type is required to imple-
ment each function specified in the definition of the file object. (The complete 
definition ofthe file object is specified in the struct f ile_operat ions, which 
is located in the file /usr/include/linux/fs .h.) 

Chapter 11 
11.3 
Thus, the VFS software layer can perform an operation on one of these 
objects by calling the appropriate function from the object's function table, 
without having to know in advance exactly what kind of object it is dealing 
with. The VFS does not know, or care, whether an inode represents a disk file, 
a directory file, or a remote file. The appropriate function for that file's read() 
operation will always be at the same place in its function table, and the VFS 
software layer will call that function without caring how the data are actually 
read. 
The selection of directory-allocation and directory-management algorithms 
significantly affects the efficiency, performance, and reliability of the file 
system. In this section, we discuss the trade-offs involved in choosing one 
of these algorithms. 
11.3.1 Linear List 
The simplest method of implementing a directory is to use a linear list of file 
names with pointers to the data blocks. This method is simple to program 
but time-consuming to execute. To create a new file, we must first search the 
directory to be sure that no existing file has the same name. Then, we add a 
new entry at the end of the directory. To delete a file, we search the directory for 
the named file and then release the space allocated to it. To reuse the directory 
entry, we can do one of several things. We can mark the entry as unused (by 
assigning it a special name, such as an all-blank name, or with a used -unused 
bit in each entry), or we can attach it to a list of free directory entries. A third 
alternative is to copy the last entry in the directory into the freed location and 
to decrease the length of the directory. A linked list can also be used to decrease 
the time required to delete a file. 
The real disadvantage of a linear list of directory entries is that finding a 
file requires a linear search. Directory information is used frequently, and users 
will notice if access to it is slow. In fact, many operating systems implement a 
software cache to store the most recently used directory information. A cache 
hit avoids the need to constantly reread the information from disk. A sorted 
list allows a binary search and decreases the average search time. However, the 
requirement that the list be kept sorted may complicate creating and deleting 
files, since we may have to move substantial amounts of directory information 
to maintain a sorted directory. A more sophisticated tree data structure, such 
as a B-h·ee, might help here. An advantage of the sorted list is that a sorted 
directory listing can be produced without a separate sort step. 
11.3.2 Hash Table 
Another data structure used for a file directory is a 
With this 
method, a linear list stores the directory entries, but a hash data structure is 
also used. The hash table takes a value computed from the file name and returns 
a pointer to the file name in the linear list. Therefore, it can greatly decrease the 
directory search time. Insertion and deletion are also fairly straightforward, 
although some provision must be made for collisions-situations in which 
two file names hash to the same location. 

11.4 
11.4 

The major difficulties with a hash table are its generally fixed size and the 
dependence of the hash function on that size. For example, assume that we 
make a linear-probing hash table that holds 64 entries. The hash function 
converts file names into integers from 0 to 63, for instance, by using the 
remainder of a division by 64. If we later try to create a 65th file, we must 
enlarge the directory hash table-say, to 128 entries. As a result, we need 
a new hash function that must map file narnes to the range 0 to 127, and we 
must reorganize the existing directory entries to reflect their new hash-function 
values. 
Alternatively, a chained-overflow hash table can be used. Each hash entry 
can be a linked list instead of an individual value, and we can resolve collisions 
by adding the new entry to the linked list. Lookups may be somewhat slowed, 
because searching for a name might require stepping through a linked list of 
colliding table entries. Still, this method is likely to be much faster than a linear 
search through the entire directory. 
The direct-access nature of disks allows us flexibility in the implementation of 
files. In almost every case, many files are stored on the same disk. The main 
problem is how to allocate space to these files so that disk space is utilized 
effectively and files can be accessed quickly. Three major methods of allocating 
disk space are in wide use: contiguous, linked, and indexed. Each method has 
advantages and disadvantages. Some systems (such as Data General's RDOS 
for its Nova line of computers) support all three. More commonly, a system 
uses one method for all files within a file-system type. 
11.4.1 Contiguous Allocation 
requires that each file occupy a set of contiguous blocks 
on 
disk. Disk addresses define a linear ordering on the disk. With this 
ordering, assuming that only one job is accessil1.g the disk, accessing block b + 
1 after block b normally requires no head movement. When head movement 
is needed (from the last sector of one cylil1.der to the first sector of the next 
cylinder), the head need only move from one track to the next. Thus, the number 
of disk seeks required for accessing contiguously allocated files is minimal, as 
is seek time when a seek is finally needed. The IBM VM/CMS operatil1.g system 
uses contiguous allocation because it provides such good performance. 
Contiguous allocation of a file is defined by the disk address and length (in 
block units) of the first block. If the file is n blocks long and starts at location 
b, then it occupies blocks b, b + 1, b + 2, ... , b + n - 1. The directory entry for 
each file indicates the address of the starting block and the length of the area 
allocated for this file (Figure 11.5). 
Accessing a file that has been allocated contiguously is easy. For sequential 
access, the file system remembers the disk address of the last block referenced 
and, when necessary, reads the next block. For direct access to block i of a 
file that starts at block b, we can immediately access block b + i. Thus, both 
sequential and direct access can be supported by contiguous allocation. 

Chapter 11 
directory 
file 
start length 
count 

tr 

mail 

list 

f 

Figure 1 i .5 Contiguous allocation of disk space. 
Contiguous allocation has some problems, however. One difficulty is 
finding space for a new file. The system chosen to manage free space determines 
how this task is accomplished; these management systems are discussed in 
Section 11.5. Any management system can be used, but some are slower than 
others. 
The contiguous-allocation problem can be seen as a particular application 
of the general 
problem discussed in Section 8.3, 
which involves 
to satisfy a request of size n from a list of free holes. First 
fit and best fit are the most common strategies used to select a free hole from 
the set of available holes. Simulations have shown that both first fit and best fit 
are more efficient than worst fit in terms of both time and storage utilization. 
Neither first fit nor best fit is clearly best in terms of storage utilization, but 
first fit is generally faster. 
All these algorithms suffer from the problem of 
As files are allocated and deleted, the free disk space is broken into 
pieces. 
External fragmentation exists whenever free space is broken into chunks. It 
becomes a problem when the largest contiguous chunk is insufficient for a 
request; storage is fragncented into a number of holes, none of which is large 
enough to store the data. Depending on the total amount of disk storage and the 
average file size, external fragmentation may be a minor or a major problem. 
One strategy for preventing loss of significant amounts of disk space to 
external fragmentation is to copy an entire file system onto another disk or 
tape. The original disk is then freed completely, creating one large contiguous 
free space. We then copy the files back onto the original disk by allocating 
contiguous space from this one large hole. This scheme effectively 
all free space into one contiguous space, solving the fragmentation 
However, the cost of this compaction is time and it can be particularly severe for 
large hard disks that use contiguous allocation, where compacting all the space 

11.4 

may take hours and may be necessary on a weekly basis. Some systems require 
that this function be done 
with the file system unmounted. During 
this 
normal system operation generally cannot be permitted, so 
such compaction is avoided at all costs on production machines. Most modern 
systems that need defragmentation can perform it 
during normal 
system operations, but the performance penalty can be substantial. 
Another problem with contiguous allocation is determining how much 
space is needed for a file. When the file is created, the total amount of space 
it will need must be found and allocated. How does the creator (program or 
person) know the size of the file to be created? In some cases, this detennination 
may be fairly simple (copying an existing file, for example); in general, however, 
the size of an output file may be difficult to estimate. 
If we allocate too little space to a file, we may find that the file cannot 
be extended. Especially with a best-fit allocation strategy, the space on both 
sides of the file may be in use. Hence, we cannot make the file larger in place. 
Two possibilities then exist. First, the user program can be terminated, with 
an appropriate error message. The user must then allocate more space and 
run the program again. These repeated runs may be costly. To prevent them, 
the user will normally overestimate the amount of space needed, resulting in 
considerable wasted space. The other possibility is to find a larger hole, copy 
the contents of the file to the new space, and release the previous space. This 
series of actions can be repeated as long as space exists, although it can be time 
consuming. However, the user need never be informed explicitly about what 
is happening; the system continues despite the problem, although more and 
more slowly. 
Even if the total amount of space needed for a file is known in advance, 
preallocation may be inefficient. A file that will grow slowly over a long period 
(months or years) must be allocated enough space for its final size, even though 
much of that space will be unused for a long time. The file therefore has a large 
amount of internal fragmentation. 
To minimize these drawbacks, some operating systems use a modified 
contiguous-allocation scheme. Here, a contiguous chunk of space is allocated 
initially; then, if that amount proves not to be large enough, another chunk of 
contiguous space, known as an 
is added. The location of a file's blocks 
is then recorded as a location and a block count, plus a link to the first block 
of the next extent. On some systems, the owner of the file can set the extent 
size, but this setting results in inefficiencies if the owner is incorrect. Internal 
fragm.entation can still be a problem if the extents are too large, and external 
fragmentation can become a problem as extents of varying sizes are allocated 
and deallocated. The commercial Veritas file system uses extents to optimize 
performance. It is a high-performance replacement for the standard UNIX UFS. 
11.4.2 Linked Allocation 
solves all problems of contiguous allocation. With linked 
allocation, each file is a linked list of disk blocks; the disk blocks may be 
scattered anywhere on the disk. The directory contains a pointer to the first 
and last blocks of the file. For example, a file of five blocks might start at block 
9 and continue at block 16, then block 1, then block 10, and finally block 25 
(Figure 11.6). Each block contains a pointer to the next block. These pointers 

Chapter 11 
directory 

20021~_20_.~23_0-4------------~ 
2402Sc.51:260270 

Figure i 1.6 Linked allocation of disk space. 
are not made available to the user. Thus, if each block is 512 bytes in size, and 
a disk address (the poileter) requires 4 bytes, then the user sees blocks of 508 
bytes. 
To create a new file, we simply create a new entry ile the directory. With 
linked allocation, each directory entry has a pointer to the first disk block of the 
file. This pointer is initialized to nil (the end-of-list pointer value) to signify an 
empty file. The size field is also set to 0. A write to the file causes the free-space 
management system to filed a free block, and this new block is written to 
and is linked to the end of the file. To read a file, we simply read blocks by 
following the pointers from block to block. There is no external fragmentation 
with linked allocation, and any free block on the free-space list can be used to 
satisfy a request. The size of a file need not be declared when that file is created. 
A file can continue to grow as long as free blocks are available. Consequently, 
it is never necessary to compact disk space. 
Linked allocation does have disadvantages, however. The major problem 
is that it can be used effectively only for sequential-access files. To filed the 
ith block of a file, we must start at the begirueing of that file and follow the 
pointers rnetil we get to the ith block. Each access to a pointer requires a disk 
read, and some require a disk seek. Consequently, it is inefficient to support a 
direct-access capability for linked-allocation files. 
Another disadvantage is the space required for the pointers. If a pointer 
requires 4 bytes out of a 512-byte block, then 0.78 percent of the disk is being 
used for pointers, rather than for information. Each file requires slightly more 
space than it would otherwise. 
The usual solution to this problem is to collect blocks into multiples, called 
and to allocate clusters rather than blocks. For instance, the file system 
may define a cluster as four blocks and operate on the disk only in cluster 
units. Pointers then use a much smaller percentage of the file's disk space. 
This method allows the logical-to-physical block mapping to remain simple 

11.4 

but improves disk throughput (because fewer disk-head seeks are required) 
and decreases the space needed for block allocation and free-list management. 
The cost of this approach is an increase in internal fragmentation, because 
more space is wasted when a cluster is partially full than when a block is 
partially full. Clusters can be used to improve the disk-access time for many 
other algorithms as welt so they are used in most file systems. 
Yet another problem of linked allocation is reliability. Recall that the files 
are linked together by pointers scattered all over the disk, and consider what 
would happen if a pointer were lost or damaged. A bug in the operating-system 
software or a disk hardware failure might result in picking up the wrong 
pointer. This error could in turn result in linking into the free-space list or into 
another file. One partial solution is to use doubly linked lists, and another is 
to store the file name and relative block number in each block; however, these 
schemes require even more overhead for each file. 
An important variation on linked allocation is the use of a 
(FAT!. This simple but efficient method of disk-space allocation is used 
by the MS-DOS and OS/2 operating systems. A section of disk at the beginning 
of each volume is set aside to contain the table. The table has one entry for 
each disk block and is indexed by block number. The FAT is used in much the 
same way as a linked list. The directory entry contains the block number of the 
first block of the file. The table entry indexed by that block number contains 
the block number of the next block in the file. This chain continues until it 
reaches the last block, which has a special end-of-file value as the table entry. 
An unused block is indicated by a table value of 0. Allocating a new block to 
a file is a simple matter of finding the first 0-valued table entry and replacing 
the previous end-of-file value with the address of the new block. The 0 is then 
replaced with the end-of-file value. An illustrative example is the FAT structure 
shown in Figure 11.7 for a file consisting of disk blocks 217, 618, and 339. 
directory entry 
name 
start block 

-

number of disk blocks 
-1 
FAT 
Figure 11.7 File-allocation table. 

Chapter 11 
The FAT allocation scheme can result in a significant number of disk head 
seeks, unless the FAT is cached. The disk head must move to the start of the 
volume to read the FAT and find the location of the block in question, then 
move to the location of the block itself. In the worst case, both moves occur for 
each of the blocks. A benefit is that random-access time is improved, because 
the disk head can find the location of any block by reading the information in 
the FAT. 
11.4.3 Indexed Allocation 
Linked allocation solves the external-fragmentation and size-declaration prob-
lems of contiguous allocation. However, in the absence of a FAT, linked 
allocation cannot support efficient direct access, since the pointers to the blocks 
are scattered with the blocks themselves all over the disk and must be retrieved 
in order. 
solves this problem by bringil1.g all the pointers 
together into one location: the 
blo;ct:. 
Each file has its own index block, which is an array of disk-block addresses. 
The i th entry in the index block points to the i 111 block of the file. The directory 
contains the address of the index block (Figure 11.8). To find and read the i 1Jz 
block, we use the pointer in the i 1lz index-block entry. This scheme is similar to 
the paging scheme described il1. Section 8.4. 
When the file is created, all pointers in the index block are set to nil. When 
the ith block is first written, a block is obtained from the free-space manage1~ 
and its address is put in the ith index-block entry. 
Indexed allocation supports direct access, without suffering from external 
fragmentation, because any free block on the disk can satisfy a request for more 
space. Indexed allocation does suffer from wasted space, however. The pointer 
overhead of the index block is generally greater than the pointer overhead of 
linked allocation. Consider a common case in which we have a file of only one 
or two blocks. With linked allocation, we lose the space of only one pointer per 
directory 
file 
jeep 

Figure 11.8 Indexed allocation of disk space. 

11.4 Allocation Methods 

block. With indexed allocation, an entire index block must be allocated, even 
if only one or two pointers will be non-nil. 
This point raises the question of how large the index block should be. Every 
file must have an index block, so we want the index block to be as small as 
possible. If the index block is too small, however, it will not be able to hold 
enough pointers for a large file, and a mechanism will have to be available to 
deal with this issue. Mechanisms for this purpose include the following: 
c Linked scheme. An index block is normally one disk block. Thus, it can 
be read and written directly by itself. To allow for large files, we can link 
together several index blocks. For example, an index block might contain a 
small header giving the name of the file and a set of the first 100 disk-block 
addresses. The next address (the last word in the index block) is nil (for a 
small file) or is a pointer to another index block (for a large file). 
• Multilevel index. A variant of linked representation uses a first-level index 
block to point to a set of second-level index blocks, which in tum point to 
the file blocks. To access a block, the operating system uses the first-level 
index to find a second-level index block and then uses that block to find the 
desired data block. This approach could be continued to a third or fourth 
level, depending on the desired maximum file size. With 4,096-byte blocks, 
we could store 1,024 four-byte pointers in an index block. Two levels of 
indexes allow 1,048,576 data blocks and a file size of up to 4GB. 
• Combined scheme. Another alternative, used in the UFS, is to keep the 
first, say, 15 pointers of the index block in the file's inode. The first 12 
of these pointers point to direct blocks; that is, they contain addresses of 
blocks that contain data of the file. Thus, the data for small files (of no more 
than 12 blocks) do not need a separate index block. If the block size is 4 KB, 
then up to 48 KB of data can be accessed directly. The next three pointers 
point to indirect blocks. The first points to a single indirect block, which 
is an index block containing not data but the addresses of blocks that do 
contain data. The second points to a double indirect block, which contains 
the address of a block that contains the addresses of blocks that contain 
pointers to the actual data blocks. The last pointer contains the address of a 
triple indirect block. Under this method, the number of blocks that can be 
allocated to a file exceeds the amount of space addressable by the four-byte 
file pointers used by many operating systems. A 32-bit file pointer reaches 
only 232 bytes, or 4GB. Many UNIX implementations, including Solaris and 
IBM's AIX, now support up to 64-bit file pointers. Pointers of this size allow 
files and file systems to be terabytes in size. A UNIX inode is shown in 
Figure 11.9. 
Indexed-allocation schemes suffer from some of the same performance 
problems as does linked allocation. Specifically, the index blocks can be cached 
in memory, but the data blocks may be spread all over a volume. 
11.4.4 Performance 
The allocation methods that we have discussed vary in their storage efficiency 
and data-block access times. Both are important criteria in selecting the proper 
method or methods for an operating system to implement. 

Chapter 11 Implementing File Systems 
Figure 11.9 The UNIX inode. 
Before selecting an allocation method, we need to determine how the 
systems will be used. A system with mostly sequential access should not use 
the same method as a system with mostly random access. 
For any type of access, contiguous allocation requires only one access to get 
a disk block. Since we can easily keep the initial address of the file in memory, 
we can calculate immediately the disk address of the ith block (or the next 
block) and read it directly. 
For linked allocation, we can also keep the address of the next block in 
memory and read it directly. This method is fine for sequential access; for 
direct access, however, an access to the ith block might require i disk reads. This 
problem indicates why linked allocation should not be used for an application 
requiring direct access. 
As a result, some systems support direct-access files by using contiguous 
allocation and sequential-access files by using linked allocation. For these 
systems, the type of access to be made must be declared when the file is 
created. A file created for sequential access will be linked and cannot be used 
for direct access. A file created for direct access will be contiguous and can 
support both direct access and sequential access, but its maximum length must 
be declared when it is created. In this case, the operating system must have 
appropriate data structures and algorithms to support both allocation methods. 
Files can be converted from one type to another by the creation of a new file of 
the desired type, into which the contents of the old file are copied. The old file 
may then be deleted and the new file renamed. 
Indexed allocation is more complex. If the index block is already in memory, 
then the access can be made directly. However, keeping the index block in 
memory requires considerable space. If this memory space is not available, 
then we may have to read first the index block and then the desired data 
block. For a two-level index, two index-block reads might be necessary. For an 

11.5 
11.5 

extremely large file, accessing a block near the end of the file would require 
reading in all the index blocks before the needed data block finally could 
be read. Thus, the performance of indexed allocation depends on the index 
structure, on the size of the file, and on the position of the block desired. 
Some systems combine contiguous allocation with indexed allocation by 
using contiguous allocation for small files (up to three or four blocks) and 
automatically switching to an indexed allocation if the file grows large. Since 
most files are small, and contiguous allocation is efficient for small files, average 
performance can be quite good. 
For instance, the version of the UNIX operating system from Sun Microsys-
tems was changed in 1991 to improve performance in the file-system allocation 
algorithm. The performance measurements indicated that the maximum disk 
throughput on a typical workstation (a 12-MIPS SPARCstation1) took 50 percent 
of the CPU and produced a disk bandwidth of only 1.5 ME per second. To 
improve performance, Sun made changes to allocate space in clusters of 56 KB 
whenever possible (56 KB was the maximum size of a DMA transfer on Sun 
systems at that time). This allocation reduced external fragmentation, and thus 
seek and latency times. In addition, the disk-reading routines were optimized 
to read in these large clusters. The inode structure was left unchanged. As a 
result of these changes, plus the use of read-ahead and free-behind (discussed 
in Section 11.6.2), 25 percent less CPU was used, and throughput substantially 
improved. 
Many other optimizations are in use. Given the disparity between CPU 
speed and disk speed, it is not unreasonable to add thousands of extra 
instructions to the operating system to save just a few disk-head movements. 
Furthermore, this disparity is increasing over time, to the point where hundreds 
of thousands of instructions reasonably could be used to optimize head 
movements. 
Since disk space is limited, we need to reuse the space from deleted files for new 
files, if possible. (Write-once optical disks only allow one write to any given 
sector, and thus such reuse is not physically possible.) To keep track of free disk 
space, the system maintains a 
The free-space list records all free 
disk blocks-those not allocated to some file or directory. To create a file, we 
search the free-space list for the required amount of space and allocate that 
space to the new file. This space is then removed from the free-space list. When 
a file is deleted, its disk space is added to the free-space list. The free-space list, 
despite its name, might not be implemented as a list, as we discuss next. 
11.5.1 Bit Vector 
Frequently, the free-space list is implemented as a 
or 
Each 
block is represented by 1 bit. If the block is free, the bit is 1; if the block is 
allocated, the bit is 0. 
For example, consider a disk where blocks 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 17, 
18, 25, 26, and 27 are free and the rest of the blocks are allocated. The free-space 
bit map would be 

Chapter 11 
001111001111110001100000011100000 ... 
The main advantage of this approach is its relative simplicity and its 
efficiency in finding the first free block or n consecutive free blocks on the 
disk. Indeed, many computers supply bit-manipulation instructions that can 
be used effectively for that purpose. For example, the Intel family starting with 
the 80386 and the Motorola family starting with the 68020 have instructions 
that return the offset in a word of the first bit with the value 1 (these processors 
have powered PCs and Macintosh systems, respectively). One technique for 
finding the first free block on a system that uses a bit-vector to allocate disk 
space is to sequentially check each word in the bit map to see whether that 
value is not 0, since a 0-valued word contains only 0 bits and represents a set 
of allocated blocks. The first non-0 word is scanned for the first 1 bit, which is 
the location of the first free block. The calculation of the block number is 
(number of bits per word) x (number of 0-value words) +offset of first 1 bit. 
Again, we see hardware features driving software functionality. Unfor-
tunately, bit vectors are inefficient unless the entire vector is kept in main 
memory (and is written to disk occasionally for recovery needs). Keeping it in 
main memory is possible for smaller disks but not necessarily for larger ones. 
A 1.3-GB disk with 512-byte blocks would need a bit map of over 332 KB to 
track its free blocks, although clustering the blocks in groups of four reduces 
this number to around 83 KB per disk. A 1-TB disk with 4-KB blocks requires 32 
MB to store its bit map. Given that disk size constantly increases, the problem 
with bit vectors will continue to escalate. A 1-PB file system would take a 32-GB 
bitmap just to manage its free space. 
11.5.2 Linked List 
Another approach to free-space management is to link together all the free 
disk blocks, keeping a pointer to the first free block in a special location on the 
disk and caching it in memory. This first block contains a pointer to the next 
free disk block, and so on. Recall our earlier example (Section 11.5.1), in which 
blocks 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 17, 18, 25, 26, and 27 were free and the 
rest of the blocks were allocated. In this situation, we would keep a pointer to 
block 2 as the first free block. Block 2 would contain a pointer to block 3, which 
would point to block 4, which would point to block 5, which would point to 
block 8, and so on (Figure 11.10). This scheme is not efficient; to traverse the 
list, we must read each block, which requires substantial I/0 time. Fortunately, 
however, traversing the free list is not a frequent action. Usually, the operating 
system simply needs a free block so that it can allocate that block to a file, so 
the first block in the free list is used. The FAT method incorporates free-block 
accounting into the allocation data structure. No separate method is needed. 
11.5.3 Grouping 
A modification of the free-list approach stores the addresses of n free blocks 
in the first free block. The first n-1 of these blocks are actually free. The last 
block contains the addresses of another n free blocks, and so on. The addresses 

11.5 

Figure 11.10 Linked free-space list on disk. 
of a large number of free blocks can now be found quickly, unlike the situation 
when the standard linked-list approach is used. 
11.5.4 Counting 
Another approach takes advantage of the fact that, generally, several contigu-
ous blocks may be allocated or freed simultaneously, particularly when space is 
allocated with the contiguous-allocation algorithm or through clustering. Thus, 
rather than keeping a list of n free disk addresses, we can keep the address of 
the first free block and the number (n) of free contiguous blocks that follow the 
first block. Each entry in the free-space list then consists of a disk address and 
a count. Although each entry requires more space than would a simple disk 
address, the overall list is shorter, as long as the count is generally greater than 
1. Note that this method of tracking free space is similar to the extent method 
of allocating blocks. These entries can be stored in a B-tree, rather than a linked 
list for efficient lookup, insertion, and deletion. 
11.5.5 Space Maps 
Sun's ZFS file system was designed to encompass huge numbers of files, 
directories, and even file systems (in ZFS, we can create file-system hierarchies). 
The resulting data structures could have been large and inefficient if they had 
not been designed and implemented properly. On these scales, metadata I/0 
can have a large performance impact. Conside1~ for example, that if the free-
space list is implemented as a bit map, bit maps must be modified both when 
blocks are allocated and when they are freed. Freeing 1GB of data on a 1-TB 
disk could cause thousands of blocks of bit maps to be updated, because those 
data blocks could be scattered over the entire disk. 

Chapter 11 
11.6 
ZFS uses a combination of techniques in its free-space managem.ent 
algorithm to control the size of data structures and minimize the I/0 needed 
to manage those structures. First, ZFS creates 
to divide the space 
on the device into chucks of manageable size. A given volume may contain 
hundreds of metaslabs. Each metaslab has an associated space map. ZFS uses 
the counting algorithm to store information about free blocks. Rather than 
write count structures to disk, it uses log-structured file- system techniques 
to record them. The space map is a log of all block activity (allocatil<g and 
freemg), in time order, in countil<g format. When ZFS decides to allocate or 
free space from a metaslab, it loads the associated space map into memory 
in a balanced-tree structure (for very efficient operation), indexed by offset, 
and replays the log into that structure. The in-memory space map is then an 
accurate representation of the allocated and free space in the metaslab. ZFS also 
condenses the map as much as possible by combining contiguous free blocks 
into a sil<gle entry. Finally, the free-space list is updated on disk as part of 
the transaction-oriented operations of ZFS. During the collection and sortmg 
phase, block requests can still occur, and ZFS satisfies these requests from the 
log. In essence, the log plus the balanced tree is the free list. 
Now that we have discussed various block-allocation and directory-
management options, we can further consider their effect on performance 
and efficient disk use. Disks tend to represent a major bottleneck in system 
performance, since they are the slowest main computer component. In this 
section, we discuss a variety of techniques used to improve the efficiency and 
performance of secondary storage. 
11.6.1 
Efficiency 
The efficient use of disk space depends heavily on the disk allocation and 
directory algorithms in use. For instance, UNIX inodes are preallocated on a 
volume. Even an "empty" disk has a percentage of its space lost to inodes. 
However, by preallocating the inodes and spreading them across the volume, 
we improve the file system's performance. This improved performance results 
from the UNIX allocation and free-space algorithms, which try to keep a file's 
data blocks near that file's inode block to reduce seek time. 
As another example, let's reconsider the clustermg scheme discussed in 
Section 11.4, which aids in file-seek and file-transfer performance at the cost 
of internal fragmentation. To reduce this fragmentation, BSD UNIX varies the 
cluster size as a file grows. Large clusters are used where they can be filled, and 
small clusters are used for small files and the last cluster of a file. This system 
is described in Appendix A. 
The types of data normally kept in a file's directory (or inode) entry also 
require consideration. Commonly, a "last write date" is recorded to supply 
information to the user and to determine whether the file needs to be backed 
up. Some systems also keep a "last access date," so that a user can determine 
when the file was last read. The result of keeping this information is that, 
whenever the file is read, a field in the directory structure must be written 

12.1 
The file system can be viewed logically as consisting of three parts. In Chapter 
10, we examined the user and programmer interface to the file system. In 
Chapter 11, we described the internal data structures and algorithms used 
by the operating system to implement this interface. In this chapter, we 
discuss the lowest level of the file system: the secondary and tertiary storage 
structures. We first describe the physical structure of magenetic disks and 
magnetic tapes. We then describe disk-scheduling algorithms, which schedule 
the order of disk I/ Os to improve performance. Next, we discuss disk formatting 
and management of boot blocks, damaged blocks, and swap space. We then 
examine secondary storage structure, covering disk reliability and stable-
storage implementation. We conclude with a brief description of tertiary 
storage devices and the problems that arise when an operating system uses 
tertiary storage. 
To describe the physical structure of secondary and tertiary storage 
devices and its effects on the uses of the devices. 
To explain the performance characteristics of mass-storage devices. 
To discuss operating-system services provided for mass storage, including 
RAID and HSM. 
In this section, we present a general overview of the physical structure of 
secondary and tertiary storage devices. 
12.1.1 
Magnetic Disks 
provide the bulk of secondary storage for modern computer 
systems. Conceptually, disks are relatively simple (Figure 12.1). Each disk 
platter has a flat circular shape, like a CD. Common platter diameters range 

Chapter 12 
arm assembly 
rotation 
Figure 12.1 
Moving-head disk mechanism. 
from 1.8 to 5.25 inches. The two surfaces of a platter are covered with a magnetic 
material. We store information by recording it magnetically on the platters. 
A read -write head "flies" just above each surface of every platter. The 
heads are attached to a 
that moves all the heads as a unit. The surface 
of a platter is logically divided into circular 
which are subdivided into 
The set of tracks that are at one arm position makes up a 
There may be thousands of concentric cylinders in a disk drive, and each track 
may contain hundreds of sectors. The storage capacity of common disk drives 
is measured iil gigabytes. 
When the disk is in use, a drive motor spins it at high speed. Most drives 
rotate 60 to 200 times per second. Disk speed has two parts. The 
is the rate at which data flow between the drive and the computer. The 
sometimes called the 
consists of the 
time necessary to move the disk arm to the desired cylinder, called the 
and the time necessary for the desired sector to rotate to the disk head, 
called the 
Typical disks can transfer several megabytes of 
data per second, and they 
seek times and rotational latencies of several 
milliseconds. 
Because the disk head flies on an extremely thin cushion of air (measured 
in microns), there is a danger that the head will make contact with the disk 
surface. Although the disk platters are coated with a thin protective laye1~ the 
head will sometimes damage the magnetic surface. This accident is called a 
A head crash normally cannot be repaired; the entire disk must be 
replaced. 
A disk can be 
allowing different disks to be mounted as needed. 
Removable magnetic disks generally consist of one platter, held in a plastic case 
to prevent damage while not in the disk drive. 
are inexpensive 
removable magnetic disks that have a soft plastic case containing a flexible 
platter. The head of a floppy-disk drive generally sits directly on the disk 

12.1 

DISK TRANSFER RATES 
As with many aspects of computingf published performance numbers for 
disks are not the same as real-world performance numbers. Stated transfer 
rates are always lower than 
for example. The transfer 
rate may be the rate at which bits can be read from the magnetic media by 
the disk head, but that is different from the rate at which blocks are delivered 
to the operating system. 
surface, so the drive is designed to rotate more slowly than a hard-disk drive 
to reduce the wear on the disk surface. The storage capacity of a floppy disk 
is typically only 1.44MB or so. Removable disks are available that work much 
like normal hard disks and have capacities measured in gigabytes. 
A disk drive is attached to a computer by a set of wires called an 
Several kinds of buses are available, including 
buses. The data transfers on a bus are carried out by special 
electronic processors called 
The 
is the controller at 
the computer end of the bus. A 
is built into each disk drive. To 
perform a disk I/0 operation, the computer places a command into the host 
controller, typically using memory-mapped I/0 portsf as described in Section 
9.7.3. The host controller then sends the command via messages to the disk 
controller, and the disk controller operates the disk-drive hardware to carry 
out the command. Disk controllers usually have a built-in cache. Data transfer 
at the disk drive happens between the cache and the disk surface, and data 
transfer to the host, at fast electronic speeds, occurs between the cache and the 
host controller. 
12.1.2 Magnetic Tapes 
was used as an early secondary-storage medium. Although it 
is relatively permanent and can hold large quantities of dataf its access time 
is slow compared with that of main memory and magnetic disk. In addition, 
random access to magnetic tape is about a thousand times slower than random 
access to magnetic disk, so tapes are not very useful for secondary storage. 
Tapes are used mainly for backup, for storage of infrequently used information, 
and as a medium for transferring information from one system to another. 
A tape is kept in a spool and is wound or rewound past a read-write head. 
Moving to the correct spot on a tape can take minutes, but once positioned, 
tape drives can write data at speeds comparable to disk drives. Tape capacities 
vary greatly, depending on the particular kind of tape drive. Typically, they 
store from 20GB to 200GB. Some have built-in compression that can more than 
double the effective storage. Tapes and their drivers are usually categorized 
by width, includil1.g 4, 8f and 19 millimeters and 1/4 and 1/2 inch. Some are 
named according to technology, such as LT0-2 and SDLT. Tape storage is further 
described in Section 12.9. 

Chapter 12 
12.2 
FIRE WIRE 
refers to an interface designed for connecting peripheral devices 
such as hard drives, DVD drives, and digital video cameras to a computer 
system. Fire Wire was first developed by Apple Computer and became 
the IEEE 1394 standard in 1995. The originaLFireWire standard provided 
bandwidth up to 400 megabits per second. Recently, a new standard-
FireWire 2-has emerged and is identified by the IEEE 1394b standard. 
FireWire 2 provides double the data rate of the original FireWire-800 
megabits per second. 
Modern disk drives are addressed as large one-dimensional arrays of 
where the logical block is the smallest unit of transfer. The size of 
a logical block is usually 512 bytes, although some disks can be 
to have a different logical block size, such as 1,024 bytes. This option 
is described in Section 12.5.1. The one-dimensional array of logical blocks is 
mapped onto the sectors of the disk sequentially. Sector 0 is the first sector 
of the first track on the outermost cylinder. The mapping proceeds in order 
through that track, then through the rest of the tracks in that cylinder, and then 
through the rest of the cylinders from outermost to innermost. 
By using this mapping, we can -at least in theory-convert a logical block 
number into an old-style disk address that consists of a cylinder number, a track 
number within that cylinder, and a sector number within that track. In practice, 
it is difficult to perform this translation, for two reasons. First, most disks have 
some defective sectors, but the mapping hides this by substituting spare sectors 
from elsewhere on the disk. Second, the number of sectors per track is not a 
constant on smne drives. 
Let's look more closely at the second reason. On media that use 
the density of bits per track is uniform. The farther a track 
is from the center of the disk, the greater its length, so the more sectors it can 
hold. As we move from outer zones to inner zones, the number of sectors per 
track decreases. Tracks in the outermost zone typically hold 40 percent more 
sectors than do tracks in the innermost zone. The drive increases its rotation 
speed as the head moves from the outer to the inner tracks to keep the same rate 
of data moving under the head. This method is used in CD-ROM and DVD-ROM 
drives. Alternatively, the disk rotation speed can stay constant; in this case, the 
density of bits decreases from inner tracks to outer tracks to keep the data rate 
constant. This method is used in hard disks and is known as 
The number of sectors per track has been increasing as disk technology 
improves, and the outer zone of a disk usually has several hundred sectors per 
track. Similarly, the number of cylinders per disk has been increasing; large 
disks have tens of thousands of cylinders. 

12.3 
12.3 

Computers access disk storage in two ways. One way is via I/O ports (or 
this is common on small systems. The other way is via 
a remote host in a distributed file system; this is referred to as 
12.3.1 Host-Attached Storage 
Host-attached storage is storage accessed through local I/0 ports. These ports 
use several technologies. The typical desktop PC uses an I/0 bus architecture 
called IDE or ATA. This architecture supports a maximum of two drives per I/0 
bus. A newer, similar protocol that has simplified cabling is SATA. High-end 
workstations and servers generally use more sophisticated I/0 architectures, 
such as SCSI and fiber charmel (FC). 
SCSI is a bus architecture. Its physical medium is usually a ribbon cable with 
a large number of conductors (typically 50 or 68). The SCSI protocol supports a 
maximum of 16 devices per bus. Generally, the devices include one controller 
card in the host (the 
and up to 15 storage devices (the 
to.rgr:::ts). A SCSI disk is a common SCSI target, but the protocol provides the 
ability to address up to 8 
in each SCSI target. A typical use of 
logical unit addressing is to 
commands to components of a RAID array 
or components of a removable media library (such as a CD jukebox sendil<g 
commands to the media-changer mechanism or to one of the drives). 
FC is a high-speed serial architecture that can operate over optical fiber or 
over a four-conductor copper cable. It has two variants. One is a large switched 
fabric having a 24-bit address space. This variant is expected to dominate 
in the future and is the basis of 
(SJld',;s), discussed in 
Section 12.3.3. Because of the large 
space and the switched nature of 
the communication, multiple hosts and storage devices can attach to the fabric, 
allowing great flexibility in I/0 communication. The other FC variant is an 
that can address 126 devices (drives and controllers). 
A wide variety of storage devices are suitable for use as host-attached 
storage. Among these are hard disk drives, RAID arrays, and CD, DVD, and 
tape drives. The I/0 commands that initiate data transfers to a host-attached 
storage device are reads and writes of logical data blocks directed to specifically 
identified storage units (such as bus ID, SCSI ID, and target logical unit). 
12.3.2 Network-Attached Storage 
A network-attached storage (NAS) device is a special-purpose storage system 
that is accessed remotely over a data network (Figure 12.2). Clients access 
network-attached storage via a remote-procedure-call interface such as NFS 
for UNIX systems or CIFS for Windows machines. The remote procedure calls 
(RPCs) are carried via TCP or UDP over an IP network-usually the same 
local-area network (LAN) that carries all data traffic to the clients. The network-
attached storage unit is usually implemented as a RAID array with software that 
implements the RPC interface. It is easiest to thil<k of NAS as simply another 
storage-access protocol. For example, rather than using a SCSI device driver 
and SCSI protocols to access storage, a system using NAS would use RPC over 
TCP /IP. 

Chapter 12 
12.4 
LAN/WAN 
Figure 12.2 Network-attached storage. 
Network-attached storage provides a convenient way for all the computers 
on a LAN to share a pool of storage with the same ease of naming and access 
enjoyed with local host-attached storage. However, it tends to be less efficient 
and have lower performance than some direct-attached storage options. 
is the latest network-attached storage protocol. In essence, it uses the 
IP network protocol to carry the SCSI protocol. Thus, networks-rather than 
SCSI cables-can be used as the interconnects between hosts and their storage. 
As a result, hosts can treat their storage as if it were directly attached, even if 
the storage is distant from the host. 
12.3.3 Storage-Area Network 
One drawback of network-attached storage systems is that the storage I/O 
operations consume bandwidth on the data network, thereby increasing the 
latency of network communication. This problem can be particularly acute 
in large client-server installations-the communication between servers and 
clients competes for bandwidth with the communication among servers and 
storage devices. 
A storage-area network (SAN) is a private network (using storage protocols 
rather than networking protocols) connecting servers and storage units, as 
shown in Figure 12.3. The power of a SAN lies in its flexibility. Multiple hosts 
and multiple storage arrays can attach to the same SAN, and storage can 
be dynamically allocated to hosts. A SAN switch allows or prohibits access 
between the hosts and the storage. As one example, if a host is running low 
on disk space, the SAN can be configured to allocate more storage to that host. 
SANs make it possible for clusters of servers to share the same storage and for 
storage arrays to include multiple direct host com1.ections. SANs typically have 
more ports, and less expensive ports, than storage arrays. 
FC is the most common SAN interconnect, although the simplicity of iSCSI is 
increasing its use. An emerging alternative is a special-purpose bus architecture 
named InfiniBand, which provides hardware and software support for high-
speed interconnection networks for servers and storage units. 
One of the responsibilities of the operating system is to use the hardware 
efficiently. For the disk drives, meeting this responsibility entails having 

12.4 

Figure 12.3 Storage-area network. 
fast access time and large disk bandwidth. The access time has two major 
components (also see Section 12.1.1). The 
is the time for the disk arm 
to move the heads to the cylinder containing the desired sector. The 
is the additional time for the disk to rotate the desired sector to the disk 
head. The disk 
is the total number of bytes transferred, divided 
by the total time between the first request for service and the completion of 
the last transfer. We can improve both the access time and the bandwidth by 
managing the order in which disk I/O requests are serviced. 
Whenever a process needs I/0 to or from the disk, it issues a system call to 
the operating system. The request specifies several pieces of information: 
Whether this operation is input or output 
What the disk address for the transfer is 
What the memory address for the transfer is 
What the number of sectors to be transferred is 
If the desired disk drive and controller are available, the request can be 
serviced immediately. If the drive or controller is busy, any new requests 
for service will be placed in the queue of pending requests for that drive. 
For a multiprogramming system with many processes, the disk queue may 
often have several pending requests. Thus, when one request is completed, the 
operating system chooses which pending request to service next. How does 
the operating system make this choice? Any one of several disk-scheduling 
algorithms can be used, and we discuss them next. 
12.4.1 FCFS Scheduling 
The simplest form of disk scheduling is, of course, the first-come, first-served 
(FCFS) algorithm. This algorithm is intrinsically fair, but it generally does not 
provide the fastest service. Consider, for example, a disk queue with requests 
for I/0 to blocks on cylinders 
98, 183, 37, 122, 14, 124, 65, 67, 

Chapter 12 
queue= 98, 183,37,122, 14,124,65,67 
head starts at 53 
0 14 
37 536567 

Figure 12.4 FCFS disk scheduling. 

in that order. If the disk head is initially at cylinder 53, it will first move from 
53 to 98, then to 183, 37, 122, 14, 124, 65, and finally to 67, for a total head 
movement of 640 cylinders. This schedule is diagrammed in Figure 12.4. 
The wild swing from 122 to 14 and then back to 124 illustrates the problem 
with this schedule. If the requests for cylinders 37 and 14 could be serviced 
together, before or after the requests for 122 and 124, the total head movement 
could be decreased substantially, and performance could be thereby improved. 
12.4.2 SSTF Scheduling 
It seems reasonable to service all the requests close to the current head position 
before moving the head far 
to service other 
This assumption is 
the basis for the 
The SSTF algorithm 
selects the request with the least seek time from the current head position. 
Since seek time increases with the number of cylinders traversed by the head, 
SSTF chooses the pending request closest to the current head position. 
For our example request queue, the closest request to the initial head 
position (53) is at cylinder 65. Once we are at cylinder 65, the next closest 
request is at cylinder 67. From there, the request at cylinder 37 is closer than the 
one at 98, so 37 is served next. Continuing, we service the request at cylinder 14, 
then 98, 122, 124, and finally 183 (Figure 12.5). This scheduling method results 
in a total head movement of only 236 cylinders-little more than one-third 
of the distance needed for FCFS scheduling of this request queue. Clearly, this 
algorithm gives a substantial improvement in performance. 
SSTF scheduling is essentially a form of shortest-job-first (SJF) scheduling; 
and like SJF scheduling, it may cause starvation of some requests. Remember 
that requests may arrive at any time. Suppose that we have two requests in 
the queue, for cylinders 14 and 186, and while the request from 14 is being 
serviced, a new request near 14 arrives. This new request will be serviced 
next, making the request at 186 wait. While this request is being serviced, 
another request close to 14 could arrive. In theory, a continual stream of requests 
near one another could cause the request for cylinder 186 to wait indefinitely. 

12.4 
queue= 98, 183, 37, 122, 14, 124, 65, 67 
head starts at 53 
0 14 
37 536567 

Figure 12.5 SSTF disk scheduling. 

This scenario becomes increasingly likely as the pending-request queue grows 
longer. 
Although the SSTF algorithm is a substantial improvement over the FCFS 
algorithm, it is not optimal. In the example, we can do better by moving the 
head from 53 to 37, even though the latter is not closest, and then to 14, before 
turning around to service 65, 67, 98, 122, 124, and 183. This strategy reduces 
the total head movement to 208 cylinders. 
12.4.3 SCAN Scheduling 
In the 
toward the 
end, servicing requests as it reaches each cylinder, until it gets 
to the other end of the disk. At the other end, the direction of head movement 
is reversed, and servicing continues. The head continuously scans back and 
forth across the disk. The SCAN algorithm is sometimes called the 
since the disk arm behaves just like an elevator in a building, first 
servicing all the requests going up and then reversing to service requests the 
other way. 
Let's return to our example to illustrate. Before applying SCAN to schedule 
the requests on cylinders 98, 183,37, 122, 14, 124, 65, and 67, we need to know 
the direction of head movement in addition to the head's current position. 
Assuming that the disk arm is moving toward 0 and that the initial head 
position is again 53, the head will next service 37 and then 14. At cylinder 0, 
the arm will reverse and will move toward the other end of the disk, servicil"lg 
the requests at 65, 67, 98, 122, 124, and 183 (Figure 12.6). If a request arrives 
in the queue just in front of the head, it will be serviced almost immediately; a 
request arriving just behind the head will have to wait until the arm moves to 
the end of the disk, reverses direction, and comes back. 
Assuming a uniform distribution of requests for cylinders, consider the 
density of requests when the head reaches one end and reverses direction. At 
this point, relatively few requests are immediately in front of the head, since 
these cylinders have recently been serviced. The heaviest density of requests 

Chapter 12 
queue= 98, 183,37,122, 14,124,65,67 
head starts at 53 
0 14 
37 536567 

Figure 12.6 SCAN disk scheduling. 

is at the other end of the disk These requests have also waited the longest so 
why not go there first? That is the idea of the next algorithm. 
12.4.4 C-SCAN Scheduling 
is a variant of SCAN designed to provide 
a more uniform wait time. Like SCAN, C-SCAN moves the head from one end 
of the disk to the other, servicing requests along the way. When the head 
reaches the other end, however, it immediately returns to the beginning of 
the disk without servicing any requests on the return trip (Figure 12.7). The 
C-SCAN scheduling algorithm essentially treats the cylinders as a circular list 
that wraps around from the final cylinder to the first one. 
queue= 98, 183, 37, 122, 14, 124, 65, 67 
head starts at 53 
0 1 4 
37 53 65 67 
98 1 22 1 24 
Figure 12.7 C-SCAN disk scheduling. 

12.4 
queue = 98, 183, 37, 122, 14, 124, 65, 67 
head starts at 53 
0 14 
37 536567 

Figure 12.8 C-LOOK disk scheduling. 
12.4.5 LOOK Scheduling 

As we described themf both SCAN and C-SCAN move the disk arm across the 
full width of the disk In practicef neither algorithm is often implemented this 
way. More commonlyf the arm goes only as far as the final request in each 
direction. Then, it reverses direction immediatelyf without going all the way to 
the end of the disk Versions of SCAN and C-SCAN that follow this pattern are 
called 
and 
because they look for a request before 
continuing to move in a given direction (Figure 12.8). 
12.4.6 Selection of a Disk-Scheduling Algorithm 
Given so many disk-scheduling algorithmsf how do we choose the best one? 
SSTF is common and has a natural appeal because it increases performance over 
FCFS. SCAN and C-SCAN perform better for systems that place a heavy load on 
the diskf because they are less likely to cause a starvation problem. For any 
particular list of requestsf we can define an optimal order of retrievat but the 
computation needed to find an optimal schedule may not justify the savings 
over SSTF or SCAN. With any scheduling algoritlunf howeverf performance 
depends heavily on the number and types of requests. For instance, suppose 
that the queue usually has just one outstanding request. Thenf all scheduling 
algorithms behave the samef because they have only one choice of where to 
move the disk head: they all behave like FCFS scheduling. 
Requests for disk service can be greatly influenced by the file-allocation 
method. A program reading a contiguously allocated file will generate several 
requests that are close together on the disk, resulting in limited head movement. 
A linked or indexed fik in contrastf may include blocks that are widely 
scattered on the diskf resulting in greater head movement. 
The location of directories and index blocks is also important. Since every 
file must be opened to be usedf and opening a file requires searching the 
directory structuref the directories will be accessed frequently. Suppose that a 
directory entry is on the first cylinder and a filef s data are on the final cylinder. In 
this casef the disk head has to move the entire width of the disk If the directory 

Chapter 12 
12.5 
entry were on the middle cylinder, the head would have to move only one-half 
the width. Caching the directories and index blocks in main memory can also 
help to reduce disk-arm movement particularly for read requests. 
Because of these complexities, the disk-scheduling algorithm should be 
written as a separate module of the operating system, so that it can be replaced 
with a different algorithm if necessary. Either SSTF or LOOK is a reasonable 
choice for the default algorithm. 
The scheduling algorithms described here consider only the seek distances. 
For modern disks, the rotational latency can be nearly as large as the 
average seek time. It is difficult for the operating system to schedule for 
improved rotational latency, though, because modern disks do not disclose the 
physical location of logical blocks. Disk manufacturers have been alleviating 
this problem by implementing disk-scheduling algorithms in the controller 
hardware built into the disk drive. If the operating system sends a batch of 
requests to the controller, the controller can queue them and then schedule 
them to improve both the seek time and the rotational latency. 
If I/O performance were the only consideration, the operating system 
would gladly turn over the responsibility of disk scheduling to the disk hard-
ware. In practice, however, the operating system may have other constraints on 
the service order for requests. For instance, demand paging may take priority 
over application I/0, and writes are more urgent than reads if the cache is 
running out of free pages. Also, it may be desirable to guarantee the order of a 
set of disk writes to make the file system robust in the face of system crashes. 
Consider what could happen if the operating system allocated a disk page to a 
file and the application wrote data into that page before the operating system 
had a chance to flush the modified inode and free-space list back to disk. To 
accommodate such requirements, an operating system may choose to do its 
own disk scheduling and to spoon-feed the requests to the disk controller, one 
by one, for some types of I/0. 
The operating system is responsible for several other aspects of disk manage-
ment, too. Here we discuss disk initialization, booting from disk, and bad-block 
recovery. 
12.5.1 Disk Formatting 
A new magnetic disk is a blank slate: it is just a platter of a magnetic recording 
material. Before a disk can store data, it must be divided into sectors that the 
disk controller can read and write. This process is called 
or 
Low-level formatting fills the disk with a special data 
structure for each sector. The data structure for a sector typically consists of a 
header, a data area (usually 512 bytes in size), and a trailer. The header and 
trailer contain information used by the disk controller, such as a sector number 
and an 
. When the controller writes a sector of data 
during normal I/0, the ECC is updated with a value calculated from all the bytes 
in the data area. When the sector is read, the ECC is recalculated and compared 
with the stored value. If the stored and calculated numbers are different, this 

12.5 

mismatch indicates that the data area of the sector has become corrupted and 
that the disk sector may be bad (Section 12.5.3). The ECC is an error-correcting 
code because it contains enough information, if only a few bits of data have 
been corrupted, to enable the controller to identify which bits have changed 
and calculate what their correct values should be. It then reports a recoverable 
. The controller automatically does the ECC processing whenever a 
sector is read or written. 
Most hard disks are low-level-formatted at the factory as a part of the 
manufacturing process. This formatting enables the manufacturer to test the 
disk and to initialize the mapping from logical block numbers to defect-free 
sectors on the disk. For many hard disks, when the disk controller is instructed 
to low-level-format the disk, it can also be told how many bytes of data space 
to leave between the header and trailer of all sectors. It is usually possible to 
choose among a few sizes, such as 256,512, and 1,024 bytes. Formatting a disk 
with a larger sector size means that fewer sectors can fit on each track; but it 
also means that fewer headers and trailers are written on each track and more 
space is available for user data. Some operating systems can handle only a 
sector size of 512 bytes. 
Before it can use a disk to hold files, the operating system still needs to 
record its own data structures on the disk. It does so in two steps. The first step 
is to 
the disk into one or more groups of cylinders. The operatiltg 
system can treat each partition as though it were a separate disk. For instance, 
one partition can hold a copy of the operating system's executable code, while 
another holds user files. The second step is icgicz;i 
or creation of a 
file system. In this step, the operating system stores the iltitial file-system data 
structures onto the disk. These data structures may include maps of free and 
allocated space (a FAT or inodes) and an initial empty directory. 
To increase efficiency, most file systems group blocks together into larger 
chunks, frequently called 
Disk I/0 is done via blocks, but file system 
II 0 is done via clusters, effectively assuring that II 0 has more sequential-access 
and fewer random-access characteristics. 
Some operating systems give special programs the ability to use a disk 
partition as a large sequential array of logical blocks, without any file-system 
data structures. This array is sometimes called the raw disk, and II 0 to this array 
is termed raw l/0. For example, some database systems prefer raw IIO because 
it enables them to control the exact disk location where each database record is 
stored. Raw l/0 bypasses all the file-system services, such as the buffer cache, 
file locking, prefetching, space allocation, file names, and directories. We can 
make certain applications more efficient by allowing them to implement their 
own special-purpose storage services on a raw partition, but most applications 
perform better when they use the regular file-system services. 
12.5.2 Boot Block 
For a computer to start running-for instance, when it is powered up 
or rebooted -it must have an initial program to run. This initial bootstrap 
program tends to be simple. It initializes all aspects of the system, from CPU 
registers to device controllers and the contents of main memory, and then 
starts the operating system. To do its job, the bootstrap program finds the 

Chapter 12 
operating-system kernel on disk, loads that kernel into memory, and jumps to 
an initial address to begin the operating-system execution. 
For most computers, the bootstrap is stored in 
This location is convenient, because ROM needs no initialization and is at a fixed 
location that the processor can start executing when powered up or reset. And, 
since ROM is read only, it cannot be infected by a computer virus. The problem is 
that changing this bootstrap code requires changing the ROM hardware chips. 
For this reason, most systems store a tiny bootstrap loader program in the boot 
ROM whose only job is to bring in a full bootstrap program from disk. The full 
bootstrap program can be changed easily: a new version is simply written onto 
the disk. The full bootstrap program is stored in the "boot blocks" at a fixed 
location on the disk. A disk that has a boot partition is called a 
or 
The code in the boot ROM instructs the disk controller to read the boot 
blocks into memory (no device drivers are loaded at this point) and then starts 
executing that code. The full bootstrap program is more sophisticated than the 
bootstrap loader in the boot ROM; it is able to load the entire operating system 
from a non-fixed location on disk and to start the operating system ruru1ing. 
Even so, the full bootstrap code may be small. 
Let's consider as an example the boot process in Windows 2000. The 
Windows 2000 system places its boot code in the first sector on the hard disk 
(which it terms the 
or 
Furthermore, Windows 2000 
allows a hard disk to be divided into one or more partitions; one partition, 
identified as the 
contains the operating system and device 
drivers. Bootil1g begins in a Windows 2000 system by running code that is 
resident in the system's ROM memory. This code directs the system to read 
the boot code from the MBR. In addition to containing boot code, the MBR 
contains a table listing the partitions for the hard disk and a flag indicating 
which partition the system is to be booted from, as illustrated in Figure 12.9. 
Once the system identifies the boot partition, it reads the first sector from that 
partition (which is called the 
and contilmes with the remainder of 
the boot process, which includes loading the various subsystems and system 
services. 
MBR 
partition 1 
partition 2 
partition 3 
partition 4 
boot 
code 
partition 
table 
boot partition 
Figure 12.9 Booting from disk in Windows 2000. 

12.5 

12.5.3 Bad Blocks 
Because disks have moving parts and small tolerances (recall that the disk 
head flies just above the disk surface), they are prone to failure. Sometimes the 
failure is complete; in this case, the disk needs to be replaced and its contents 
restored from backup media to the new disk. More frequently, one or more 
sectors become defective. Most disks even con'le from the factory with 
Depending on the disk and controller in use, these blocks are handled 
in a variety of ways. 
On simple disks, such as some disks with IDE controllers, bad blocks are 
handled manually. For instance, the MS-DOS format command performs logical 
formatting and, as a part of the process, scans the disk to find bad blocks. If 
format finds a bad block, it writes a special value into the corresponding FAT 
entry to tell the allocation routines not to use that block. If blocks go bad during 
normal operation, a special program (such as chkdsk) must be run manually 
to search for the bad blocks and to lock them away. Data that resided on the 
bad blocks usually are lost. 
More sophisticated disks, such as the SCSI disks used in high-end PCs 
and most workstations and servers, are smarter about bad-block recovery. The 
controller maintains a list of bad blocks on the disk. The list is initialized during 
the low-level formatting at the factory and is updated over the life of the disk. 
Low-level formatting also sets aside spare sectors not visible to the operating 
system. The controller can be told to replace each bad sector logically with one 
of the spare sectors. This scheme is known as 
or 
A typical bad-sector transaction might be as follows: 
The operating system tries to read logical block 87. 
The controller calculates the ECC and finds that the sector is bad. It reports 
this finding to the operating system. 
The next time the system is rebooted, a special command is run to tell the 
SCSI controller to replace the bad sector with a spare. 
After that, whenever the system requests logical block 87, the request is 
translated into the replacement sector's address by the controller. 
Note that such a redirection by the controller could invalidate any opti-
mization by the operating system's disk-scheduling algorithm! For this reason, 
most disks are formatted to provide a few spare sectors in each cylinder and 
a spare cylinder as well. When a bad block is remapped, the controller uses a 
spare sector from the same cylinder, if possible. 
As an alternative to sector 
some controllers can be instructed to 
replace a bad block by 
Here is an example: Suppose that 
logical block 17 becomes defective and the first available spare follows sector 
202. Then, sector slipping remaps all the sectors front 17 to 202, moving them 
all down one spot. That is, sector 202 is copied into the spare, then sector 201 
into 202, then 200 into 201, and so on, until sector 18 is copied into sector 19. 
Slipping the sectors in this way frees up the space of sector 18, so sector 17 can 
be mapped to it. 
The replacement of a bad block generally is not totally automatic because 
the data in the bad block are usually lost. Soft errors may trigger a process in 

Chapter 12 
12.6 
which a copy of the block data is made and the block is spared or slipped. 
An unrecoverable 
howeverf results in lost data. Whatever file was 
using th.at block must be repaired (for instancef by restoration from a backup 
tape)f and that requires manual intervention. 
Swapping was first presented in Section 8.2f where we discussed moving 
entire processes between disk and main memory. Swapping in that setting 
occurs when the amount of physical memory reaches a critically low point and 
processes are moved from memory to swap space to free available memory. 
In practicef very few modern operating systems implement swapping in 
this fashion. Rathel~ systems now combine swapping with virtual memory 
techniques (Chapter 9) and swap pagesf not necessarily entire processes. In 
fact some systems now use the terms swapping and paging interchangeablyf 
reflecting the merging of these two concepts. 
is another low-level task of the operating 
system. Virtual memory uses disk space as an extension of main memory. 
Since disk access is much slower than memory accessf using swap space 
significantly decreases system performance. The main goal for the design and 
implementation of swap space is to provide the best throughput for the virtual 
memory system. In this sectionf we discuss how swap space is usedf where 
swap space is located on diskf and how swap space is managed. 
12.6.1 Swap-Space Use 
Swap space is used in various ways by different operating systemsf depending 
on the memory-management algorithms in use. For instancef systems that 
implement swapping may use swap space to hold an entire process imagef 
including the code and data segments. Paging systems may simply store pages 
that have been pushed out of main memory. The amount of swap space needed 
on a system can therefore vary from a few megabytes of disk space to gigabytesf 
depending on the amow1.t of physical memoryf the amount of virtual memory 
it is backingf and the way in which the virtual memory is used. 
Note that it may be safer to overestimate than to underestimate the amount 
of swap space requiredf because if a system runs out of swap space it may be 
forced to abort processes or may crash entirely. Overestimation wastes disk 
space that could otherwise be used for filesf but it does no other harm. Some 
systems recommend the amount to be set aside for swap space. Solarisf for 
examplef suggests setting swap space equal to the amount by which virtual 
memory exceeds pageable physical memory. In the past Linux has suggested 
setting swap space to double the amount of physical memoryf although most 
Linux systems now use considerably less swap space. In factf there is currently 
much debate in the Linux community about whether to set aside swap space 
at all! 
Some operating systems-including Linux-allow the use of multiple 
swap spaces. These swap spaces are usually put on separate disks so that the 
load placed on the I/0 system. by paging and swapping can be spread over the 
systemfs I/O devices. 

14.1 
CHAPTER 
The processes in an operating system must be protected from one another's 
activities. To provide such protection, we can use various mechanisms to ensure 
that only processes that have gained proper authorization from the operating 
system can operate on the files, memory segments, CPU, and other resources 
of a system. 
Protection refers to a mechanism for controlling the access of programs, 
processes, or users to the resources defined by a computer system. This 
mechanism must provide a means for specifying the controls to be imposed, 
together with a means of enforcement. We distinguish between protection and 
security, which is a measure of confidence that the integrity of a system and 
its data will be preserved. In this chapter, we focus on protection. Security 
assurance is a much broader topic, and we address it in Chapter 15. 
To discuss the goals and principles of protection in a modern computer 
system. 
" To explain how protection domains, combined with an access matrix, are 
used to specify the resources a process may access. 
To examine capability- and language-based protection systems. 
As computer systems have become more sophisticated and pervasive in their 
applications, the need to protect their integrity has also grown. Protection was 
originally conceived as an adjunct to multiprogramming operating systems, 
so that untrustworthy users might safely share a common logical name space, 
such as a directory of files, or share a common physical name space, such as 
memory. Modern protection concepts have evolved to increase the reliability 
of any complex system that makes use of shared resources. 
We need to provide protection for several reasons. The most obvious is the 
need to prevent the mischievous, intentional violation of an access restriction 

Chapter 14 
14.2 
by a user. Of more general importance, however, is the need to ensure that 
each program component active in a system uses system resources only in 
ways consistent with stated policies. This requirement is an absolute one for a 
reliable system. 
Protection can improve reliability by detecting latent errors at the interfaces 
between component subsystems. Early detection of interface errors can often 
prevent contamination of a healthy subsystem by a malfunctioning subsystem. 
Also, an unprotected resource cannot defend against use (or misuse) by an 
unauthorized or incompetent user. A protection-oriented system provides 
means to distinguish between authorized and unauthorized usage. 
The role of protection in a computer system is to provide a mechanism for 
the enforcement of the policies governing resource use. These policies can be 
established in a variety of ways. Some are fixed in the design of the system, 
while others are formulated by the management of a system. Still others are 
defined by the individual users to protect their own files and programs. A 
protection system must have the flexibility to enforce a variety of policies. 
Policies for resource use may vary by application, and they may change 
over time. For these reasons, protection is no longer the concern solely of 
the designer of an operating system. The application programmer needs to 
use protection mechanisms as well, to guard resources created and supported 
by an application subsystem against misuse. In this chapter, we describe the 
protection mechanisms the operating system should provide, but application 
designers can use them as well in designing their own protection software. 
Note that mechanisms are distinct from policies. Mechanisms determine how 
something will be done; policies decide what will be done. The separation 
of policy and mechanism is important for flexibility. Policies are likely to 
change from place to place or time to time. In the worst case, every change 
in policy would require a change in the underlying mechanism. Using general 
mechanisms enables us to avoid such a situation. 
Frequently, a guiding principle can be used throughout a project, such as 
the design of an operating system. Following this principle simplifies design 
decisions and keeps the system consistent and easy to understand. A key, 
time-tested guiding principle for protection is the 
It 
dictates that programs, users, and even systems be given just enough privileges 
to perform their tasks. 
Consider the analogy of a security guard with a passkey. If this key allows 
the guard into just the public areas that she guards, then misuse of the key 
will result in minimal damage. If, however, the passkey allows access to all 
areas, then damage from its being lost, stolen, misused, copied, or otherwise 
compromised will be much greater. 
An operating system following the principle of least privilege implements 
its features, programs, system calls, and data structures so that failure or 
compromise of a component does the minimum damage and allows the 
n1inimum damage to be done. The overflow of a buffer in a system daemon 
might cause the daemon process to fail, for example, but should not allow the 
execution of code from the daemon process's stack that would enable a remote 

14.3 
14.3 

user to gain maximum privileges and access to the entire system (as happens 
too often today). 
Such an operating system also provides system calls and services that 
allow applications to be written with fine-grained access controls. It provides 
mechanisms to enable privileges when they are needed and to disable them 
when they are not needed. Also beneficial is the creation of audit trails for 
all privileged function access. The audit trail allows the prograrnmer, systems 
administrator, or law-enforcement officer to trace all protection and security 
activities on the system. 
Managing users with the principle of least privilege entails creating a 
separate account for each user, with just the privileges that the user needs. An 
operator who needs to mount tapes and back up files on the system has access 
to just those commands and files needed to accomplish the job. Some systems 
implement role-based access control (RBAC) to provide this functionality. 
Computers implemented in a computing facility under the principle of least 
privilege can be limited to running specific services, accessing specific remote 
hosts via specific services, and doing so during specific times. Typically, these 
restrictions are implemented through enabling or disabling each service and 
through using access control lists, as described in Sections 10.6.2 and 14.6. 
The principle of least privilege can help produce a more secure computing 
environment. Unfortunately, it frequently does not. For example, Windows 
2000 has a complex protection scheme at its core and yet has many security 
holes. By comparison, Solaris is considered relatively secure, even though it 
is a variant of UNIX, which historically was designed with little protection 
in mind. One reason for the difference may be that Windows 2000 has more 
lines of code and more services than Solaris and thus has more to secure and 
protect. Another reason could be that the protection scheme in Windows 2000 
is irtcomplete or protects the wrong aspects of the operating system, leaving 
other areas vulnerable. 
A computer system is a collection of processes and objects. By objects, we mean 
both 
(such as the CPU, memory segments, printers, disks, and 
tape drives) and 
(such as files, programs, and semaphores). 
Each object has a unique name that differentiates it from all other objects in the 
system, and each can be accessed only through well-defined and meaningful 
operations. Objects are essentially abstract data types. 
The operations that are possible may depend on the object. For example, 
on a CPU, we can only execute. Memory segments can be read and written, 
whereas a CD-ROM or DVD-ROM can only be read. Tape drives can be read, 
written, and rewound. Data files can be created, opened, read, written, closed, 
and deleted; program files can be read, written, executed, and deleted. 
A process should be allowed to access only those resources for which it 
has authorization. Furthermore, at any time, a process should be able to access 
only those reso1Jrces that it currently reqLlires to complete its task. This second 
requirement, conunonly referred to as the need-to-know principle, is useful in 
limiting the amount of damage a faulty process can cause in the system. For 
example, when process p invokes procedure A(), the procedure should be 

Chapter14 
allowed to access only its own variables and the formal parameters passed 
to it; it should not be able to access all the variables of process p. Similarly, 
consider the case in which process p invokes a compiler to compile a particular 
file. The compiler should not be able to access files arbitrarily but should have 
access only to a well-defined subset of files (such as the source file, listing file, 
and so on) related to the file to be compiled. Conversely, the compiler may have 
private files used for accounting or optimization purposes that process p should 
not be able to access. The need-to-know principle is similar to the principle of 
least privilege discussed in Section 14.2 in that the goals of protection are to 
minimize the risks of possible security violations. 
14.3.1 Domain Structure 
To facilitate the scheme just described, a process operates within a 
which specifies the resources that the process may access. Each 
domain defines a set of objects and the types of operations that may be invoked 
on each object. The ability to execute an operation on an object is an 
A domain is a collection of access rights, each of which is an ordered pair 
<object-name, rights-set>. For example, if domain D has the access right <file F, 
{read, write}>, then a process executing in domain D can both read and write 
file F; it cannot, however, perform any other operation on that object. 
Domains do not need to be disjoint; they may share access rights. For 
example, in Figure 14.1, we have three domains: D1, D2, and D3. The access 
right < 0 4, {print}> is shared by D2 and D3, implying that a process executing 
in either of these two domains can print object 0 4. Note that a process must be 
executing in domain D1 to read and write object 0 1, while only processes in 
domain D3 may execute object 0 1. 
The association between a process and a domain may be either 
if 
the set of resources available to the process is fixed throughout the process's 
lifetime, or 
As might be expected, establishing dynamic protection 
domains is more complicated than establishing static protection domains. 
If the association between processes and domains is fixed, and we want to 
adhere to the need-to-know principle, then a mechanism must be available to 
change the content of a domain. The reason stems from the fact that a process 
may execute in two different phases and may, for example, need read access 
in one phase and write access in another. If a domain is static, we must define 
the domain to include both read and write access. However, this arrangement 
provides more rights than are needed in each of the two phases, since we have 
read access in the phase where we need only write access, and vice versa. 
Thus, the need-to-know principle is violated. We must allow the contents of 
< 0 3, {read, write} > 
< 0 1,.{read, write}> 
< 0 2 , {execute} > 
< 0 2, {write}> 
<•01, {execute}> 
< 0 3, {read}> 
Figure 14.1 
System with three protection domains. 

14.3 

a domain to be modified so that the domain always reflects the n1inimum 
necessary access rights. 
If the association is dynamic, a mechanism is available to allow 
enabling the process to switch from one domain to another. We may 
also want to allow the content of a domain to be changed. If we cannot change 
the content of a domain, we can provide the same effect by creating a new 
domain with the changed content and switching to that new domain when we 
want to change the domain content. 
A domain can be realized in a variety of ways: 
Each user may be a domain. In this case, the set of objects that can be 
accessed depends on the identity of the user. Domain switching occurs 
when the user is changed -generally when one user logs out and another 
user logs in. 
Each process may be a domain. In this case, the set of objects that can be 
accessed depends on the identity of the process. Domain switching occurs 
when one process sends a message to another process and then waits for 
a response. 
Each procedure may be a domain. In this case, the set of objects that can be 
accessed corresponds to the local variables defined within the procedure. 
Domain switching occurs when a procedure call is made. 
We discuss domain switching in greater detail in Section 14.4. 
Consider the standard dual-mode (monitor-user mode) model of 
operating-system execution. When a process executes in monitor mode, it 
can execute privileged instructions and thus gain complete control of the 
computer system. In contrast, when a process executes in user mode, it can 
invoke only nonprivileged instructions. Consequently, it can execute only 
within its predefined memory space. These two modes protect the operating 
system (executing in monitor domain) from the user processes (executing 
in user domain). In a multiprogrammed operating system, two protection 
domains are insufficient, since users also want to be protected from one 
another. Therefore, a more elaborate scheme is needed. We illustrate such a 
scheme by examining two influential operating systems-UNIX and MULTICS 
-to see how they implement these concepts. 
14.3.2 An Example: UNIX 
In the UNIX operating system, a domain is associated with the user. Switching 
the domain corresponds to changing the user identification temporarily. 
This change is accomplished tbough the file system as follows. An owner 
identification and a domain bit (known as the setuid bit) are associated with 
each file. When the setuid bit is on, and a user executes that file, the user ID is 
set to that of the owner of the file; when the bit is off, however, the user ID does 
not change. For example, when a user A (that is, a user with useriD =A) starts 
executing a file owned by B, whose associated domain bit is off, the useriD of 
the process is set to A. When the setuid bit is on, the useriD is set to that of 
the owner of the file: B. When the process exits, this temporary useriD change 
ends. 

Chapter 14 
Other methods are used to change domains in operating systems in which 
user IDs are used for domain definition, because almost all systems need 
to provide such a mechanism. This mechanism is used when an otherwise 
privileged facility needs to be made available to the general user population. 
For instance, it might be desirable to allow users to access a network without 
letting them write their own networking programs. In such a case, on a UNIX 
system, the setuid bit on a networking program. would be set, causing the user 
lD to change when the program was run. The user lD would change to that 
of a user with network access privilege (such as root, the most powerful user 
ID). One problem with this method is that if a user manages to create a file 
with user ID root and with its setuid bit on, that user can become root and do 
anything and everything on the system. The setuid mechanism is discussed 
further in Appendix A. 
An alternative to this method used in other operating systems is to place 
privileged programs in a special directory. The operating system would be 
designed to change the user lD of any program run from this directory, either 
to the equivalent of root or to the user lD of the owner of the directory. This 
eliminates one security problem with setuid programs in which crackers create 
and hide such programs for later use (using obscure file or directory names). 
This method is less flexible than that used in UNIX, however. 
Even more restrictive, and thus more protective, are systems that simply 
do not allow a change of user ID. In these instances, special techniques must 
be used to allow users access to privileged facilities. For instance, a 
may be started at boot time and run as a special user ID. Users then 
run a separate program, which sends requests to this process whenever they 
need to use the facility. This method is used by the TOPS-20 operating system. 
In any of these systems, great care must be taken in writing privileged 
programs. Any oversight can result in a total lack of protection on the system. 
Generally, these programs are the first to be attacked by people trying to 
break into a system; unfortunately, the attackers are frequently successful. 
For example, security has been breached on many UNIX systems because of the 
setuid feature. We discuss security in Chapter 15. 
14.3.3 An Example: MUL TICS 
In the MULTICS system, the protection domains are organized hierarchically 
into a ring structure. Each ring corresponds to a single domain (Figure 14.2). 
The rings are numbered from 0 to 7. Let D; and Dj be any two domain rings. 
If j < i, then D; is a subset of Dj- That is, a process executing in domain Dj 
has more privileges than does a process executing in domain D;. A process 
executing in domain Do has the most privileges. If only two rings exist, this 
scheme is equivalent to the monitor-user n1ode of execution, where monitor 
mode corresponds to Do and user mode corresponds to D1. 
MULTICS has a segmented address space; each segment is a file, and each 
segment is associated with one of the rings. A segm.ent description includes an 
entry that identifies the ring number. In addition, it includes three access bits 
to control reading, writing, and execution. The association between segments 
and rings is a policy decision with which we are not concerned here. 
A current-ring-number counter is associated with each process, identifying 
the ring in which the process is executing currently. When a process is executing 

14.3 

Figure 14.2 MULTICS ring structure. 
in ring i, it cmmot access a segment associated with ring j (j < i). It can access a 
segment associated with ring k (k::: i). The type of access, however, is restricted 
according to the access bits associated with that segment. 
Domain switching in MULTICS occurs when a process crosses from one ring 
to another by calling a procedure in a different ring. Obviously, this switch must 
be done in a controlled mmmer; otherwise, a process could start executing in 
ring 0, and no protection would be provided. To allow controlled domain 
switching, we modify the ring field of the segment descriptor to include the 
following: 
Access bracket. A pair of integers, bl and b2, such that bl ::=: b2. 
Limit. An integer b3 such that b3 > b2. 
List of gates. Identifies the entry points (or 
may be called. 
at which the segments 
If a process executing in ring i calls a procedure (or segncent) with access bracket 
(bl,b2), then the call is allowed if bl ::=: i ::=: b2, and the current ring number of 
the process remains i. Otherwise, a trap to the operating system occurs, and 
the situation is handled as follows: 
If i < bl, then the call is allowed to occur, because we have a transfer to a 
ring (or domain) with fewer privileges. However, if parameters are passed 
that refer to segments in a lower ring (that is, segments not accessible to 
the called procedure), then these segments must be copied into an area 
that can be accessed by the called procedure. 
If i > b2, then the call is allowed to occur only if b3 is greater than or equal 
to i and the call has been directed to one of the designated entry points in 
the list of gates. This scheme allows processes with limited access rights to 
call procedures in lower rings that have more access rights, but only in a 
carefully controlled mmmer. 

Chapter 14 
14.4 
The main disadvantage of the ring (or hierarchical) structure is that it does 
not allow us to enforce the need-to-know principle. In particular, if an object 
must be accessible in domain 0 J but not accessible in domain Oi, then we must 
have j < i. But this requirement means that every segment accessible in Oi is 
also accessible in 0 1. 
The MULTICS protection system is generally more complex and less efficient 
than are those used in current operating systems. If protection interferes with 
the ease of use of the system or significantly decreases system performance, 
then its use must be weighed carefully against the purpose of the system. For 
instance, we would want to have a complex protection system on a computer 
used by a university to process students' grades and also used by students for 
classwork. A similar protection system would not be suited to a computer being 
used for number crunching, in which performance is of utmost importance. We 
would prefer to separate the mechanism from the protection policy, allowing 
the same system to have complex or simple protection depending on the needs 
of its users. To separate mechanism from policy, we require a more general 
model of protection. 
Our model of protection can be viewed abstractly as a matrix, called an 
The rows of the access matrix represent domains, and the columns 
represent objects. Each entry in the matrix consists of a set of access rights. 
Because the column defines objects explicitly, we can omit the object name 
from the access right. The entry access(i,j) defines the set of operations that a 
process executing in domain Oi can invoke on object OJ. 
To illustrate these concepts, we consider the access matrix shown in Figure 
14.3. There are four domains and four objects-three files (F1, F2, F3) and one 
laser printer. A process executing in domain 0 1 can read files F1 and F3 . A 
process executing in domain 0 4 has the same privileges as one executing in 
domain 0 1; but in addition, it can also write onto files F1 and F3 . Note that the 
laser printer can be accessed only by a process executing in domain 0 2. 
The access-matrix scheme provides us with the mechanism for specifying 
a variety of policies. The mechanism consists of implementing the access 

read 
read 

print 

read 
execute 

read 
read 
write 
write 
Figure 14.3 Access matrix. 

14.4 

matrix and ensuring that the semantic properties we have outlined hold. 
More specifically, we must ensure that a process executing in domain n can 
access only those objects specified in row ( and then only as allowed by the 
access-matrix entries. 
The access matrix can implement policy decisions concerning protection. 
The policy decisions involve which rights should be included in the (i,j)th 
entry. We must also decide the domain in which each process executes. This 
last policy is usually decided by the operating system. 
The users normally decide the contents of the access-matrix entries. When 
a user creates a new object Oi, the column Oi is added to the access matrix 
with the appropriate initialization entries, as dictated by the creator. The user 
may decide to enter some rights in some entries in cohum1 j and other rights 
in other entries, as needed. 
The access matrix provides an appropriate mechanism for defining and 
implementing strict control for both the static and dynamic association between 
processes and domains. When we switch a process from one domain to another, 
we are executing an operation (switch) on an object (the domain). We can 
control domain switching by including domains among the objects of the 
access matrix. Similarly, when we change the content of the access matrix, 
we are performing an operation on an object: the access matrix. Again, we 
can control these changes by including the access matrix itself as an object. 
Actually, since each entry in the access matrix may be modified individually, 
we must consider each entry in the access matrix as an object to be protected. 
Now, we need to consider only the operations possible on these new objects 
(domains and the access matrix) and decide how we want processes to be able 
to execute these operations. 
Processes should be able to switch from one domain to another. Switching 
from domain D; to domain Di is allowed if and only if the access right switch 
E access(i,j). Thus, in Figure 14.4, a process executing in domain D2 can switch 
to domain D3 or to domain D4. A process in domain D4 can switch to D1, and 
one in domain D1 can switch to D2-
Allowing controlled change in the contents of the access-matrix entries 
requires three additional operations: copy, owner, and control. We examine 
these operations next. 

read 
read 
switch 

print 
switch switch 

read 
execute 

read 
read 
switch 
write 
write 
Figure 14.4 Access matrix of Figure 14.3 with domains as objects. 

Chapter 14 
(a) 
execute 
read* 
execute 
execute 
read 
(b) 
Figure 14.5 Access matrix with copy rights. 
The ability to copy an access right from one domain (or row) of the access 
matrix to another is denoted by an asterisk (*) appended to the access right. 
The copy right allows the access right to be copied only within the colurrm. 
(that is, for the object) for which the right is defined. For example, in Figure 
14.5(a), a process executing in domain D2 can copy the read operation into any 
entry associated with file F2 . Hence, the access matrix of Figure 14.5(a) can be 
modified to the access matrix shown in Figure 14.5(b ). 
This scheme has two variants: 
A right is copied from access(i, j) to access(Jc, j); it is then removed from 
access(i, j). This action is a transfer of a right, rather than a copy. 
Propagation of the copy right may be limited. That is, when the right 
R* is copied from access(i,j) to access(lc,j), only the right R (not R*) 
is created. A process executing in domain D~r cannot further copy the 
right R. 
A system may select only one of these three copy rights, or it may provide all 
three by identifying them as separate rights: copy, transfer, and limited copy. 
We also need a mechanism to allow addition of new rights and removal of 
some rights. The owner right controls these operations. If access(i, j) includes 
the owner right, then a process executing in domain Di can add and remove 
any right in any entry in column j. For example, in Figure 14.6(a), domain D1 
is the owner of F1 and thus can add and delete any valid right in column F1. 
Similarly, domain D2 is the owner of F2 and F3 and thus can add and remove 
any valid right within these two columns. Thus, the access matrix of Figure 
14.6(a) can be modified to the access matrix shown in Figure 14.6(b). 

14.4 

owner 
write 
execute 
read* 
read* 

owner 
owner 
write 

execute 
(a) 

owner 
write 
execute 
owner 
read* 

read* 
owner 
write* 
write 

write 
write 
(b) 
Figure 14.6 Access matrix with owner rights. 
The copy and owner rights allow a process to change the entries in a column. 
A mechanism is also needed to change the entries in a row. The control right 
is applicable only to domain objects. If access(i, j) includes the control right, 
then a process executing in domain Di can remove any access right from 
row j. For example, suppose that, in Figure 14.4, we include the control right in 
access(D2, D4). Then, a process executil1.g in domain D2 could modify domai11 
D4, as shown in Figure 14.7. 
read 
read 
switch 
print 
switch switch 
control 
read 
execute 
write 
write 
switch 
Figure 14.7 Modified access matrix of Figure 14.4. 

Chapter 14 
14.5 
The copy and owner rights provide us with a mechanism to limit the 
propagation of access rights. However, they do not give us the appropriate tools 
for preventing the propagation (or disclosure) of information. The problem. of 
guaranteeing that no information initially held in an object can migrate outside 
of its execution environment is called the 
. This problem 
is in general unsolvable (see the bibliographical notes at the end of the chapter). 
These operations on the domains and the access matrix are not in them-
selves important, but they illustrate the ability of the access-matrix model to 
allow the implementation and control of dynamic protection requirements. 
New objects and new domains can be created dynamically and included in the 
access-matrix model. However, we have shown only that the basic mechanism 
exists; system designers and users must make the policy decisions concerning 
which domains are to have access to which objects in which ways. 
How can the access matrix be implemented effectively? In general, the matrix 
will be sparse; that is, most of the entries will be empty. Although data-
structure techniques are available for representing sparse matrices, they are 
not particularly useful for this application, because of the way in which 
the protection facility is used. Here, we first describe several methods of 
implementing the access matrix and then compare the methods. 
14.5.1 Global Table 
The simplest implementation of the access matrix is a global table consisting 
of a set of ordered triples <domain, object, rights-set>. Whenever an operation 
M is executed on an object Oj within domain D;, the global table is searched 
for a triple <D;, 0 1, R~c>, with ME R~c. If this triple is found, the operation is 
allowed to continue; otherwise, an exception (or error) condition is raised. 
This implementation suffers from several drawbacks. The table is usually 
large and thus cannot be kept in main memory, so additional I/0 is needed. 
Virtual memory techniques are often used for managing this table. In addition, 
it is difficult to take advantage of special groupings of objects or domains. 
For example, if everyone can read a particular object, this object must have a 
separate entry in every domain. 
14.5.2 Access Lists for Objects 
Each column in the access matrix can be implemented as an access list for 
one object, as described in Section 10.6.2. Obviously, the empty entries can be 
discarded. The resulting list for each object consists of ordered pairs <domain, 
rights-set>, which define all domains with a nonempty set of access rights for 
that object. 
This approach can be extended easily to define a list plus a default set of 
access rights. When an operation M on an object Oi is attempted in domain 
D;, we search the access list for object 0 i, looking for an entry < D;, R1c > with 
ME RJc. If the entry is found, we allow the operation; if it is not, we check the 
default set. If M is in the default set, we allow the access. Otherwise, access is

---
