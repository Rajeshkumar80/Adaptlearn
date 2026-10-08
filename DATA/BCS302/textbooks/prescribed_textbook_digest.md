# BCS302 — Textbook Notes

**Subject:** BCS302 (Digital Design and Computer Organization)
**Content type:** textbook_notes
**Primary Reference:** William Stallings — Computer Organization and Architecture & M. Morris Mano — Digital Logic and Computer Design

---

# BCS302 — Textbook Notes (Module-wise)
**Subject:** Digital Design and Computer Organization
**Prescribed Textbooks:** William Stallings — Computer Organization and Architecture & M. Morris Mano — Digital Logic and Computer Design

---

## Module 1 Textbook: Introduction to Digital Design — Boolean Algebra and K-Maps

### Textbook Excerpt — Reference: R1_Computer_Organization_and_Architecture_Stallings.txt

ems is essential to both their design
and their description. The designer need only deal with a particular level of the
system at a time. At each level, the system consists of a set of components and
their interrelationships. The behavior at each level depends only on a simplified,
abstracted characterization of the system at the next lower level. At each level, the
designer is concerned with structure and function:

• Structure: The way in which the components are interrelated.

• Function: The operation of each individual component as part of the structure.
In terms of description, we have two choices: starting at the bottom and build-
ing up to a complete description, or beginning with a top view and decomposing the
system into its subparts. Evidence from a number of fields suggests that the top-down
approach is the clearest and most effective [WEIN75].

The approach taken in this book follows from this viewpoint. The computer
system will be described from the top down. We begin with the major components
of a computer, describing their structure and function, and proceed to successively
lower layers of the hierarchy. The remainder of this section provides a very brief
overview of this plan of attack.
Function
Both the structure and functioning of a computer are, in essence, simple. Figure 1.1
depicts the basic functions that a computer can perform. In general terms, there are
only four:

• Data processing

• Data storage

• Data movement

• Control
Data
movement
apparatus
Operating environment
(source and destination of data)
Control
mechanism
Data
storage
facility
Data
processing
facility
Figure 1.1 A Functional View of the Computer

The computer, of course, must be able to process data. The data may take a wide
variety of forms, and the range of processing requirements is broad. However, we
shall see that there are only a few fundamental methods or types of data processing.
It is also essential that a computer store data. Even if the computer is process-
ing data on the fly (i.e., data come in and get processed, and the results go out
immediately), the computer must temporarily store at least those pieces of data
that are being worked on at any given moment. Thus, there is at least a short-term
data storage  function. Equally important, the computer performs a long-term data
storage function . Files of data are stored on the computer for subsequent retrieval
and update.
The computer must be able to move data between itself and the outside
world. The computer’s operating environment consists of devices that serve as
either sources or destinations of data. When data are received from or delivered to
a device that is directly connected to the computer, the process is known as input–
output (I/O), and the device is referred to as a peripheral. When data are moved
over longer distances, to or from a remote device, the process is known as data
communications.
Finally, there must be control of these three functions. Ultimately, this control
is exer

### Textbook Excerpt — Reference: R1_Computer_Organization_and_Architecture_Stallings.txt

e simultaneous
drive failures
Simplest RAID storage subsystem
design
Highest disk overhead of
all RAID types
(100%)—inefficient
Accounting
Payroll
Financial
Any application requiring
very high availability
(Continued)

One of the most significant developments in computer architecture in recent years
is the increasing use of solid state drives (SSDs) to complement or even replace
hard disk drives (HDDs), both as internal and external secondary memory. The
term solid state refers to electronic circuitry built with semiconductors. A solid state
drive is a memory device made with solid state components that can be used as a
replacement to a hard disk drive. The SSDs now on the market and coming on line
Level
Advantages
Disadvantages
Applications
Extremely high data transfer rates
possible
The higher the data transfer rate
required, the better the ratio of data
disks to ECC disks
Relatively simple controller design
compared to RAID levels 3, 4, & 5
Very high ratio of ECC
disks to data disks
with smaller word
sizes—inefficient
Entry level cost very
high—requires very high
transfer rate requirement
to justify
No commercial
implementations exist/
not commercially viable
Very high read data transfer rate
Very high write data transfer rate
Disk failure has an insignificant
impact on throughput
Low ratio of ECC (parity) disks to
data disks means high efficiency
Transaction rate equal to
that of a single disk drive
at best (if spindles are
synchronized)
Controller design is
fairly complex
Video production and live
streaming
Image editing
Video editing
Prepress applications
Any application requiring
high throughput
Very high Read data transaction rate
Low ratio of ECC (parity) disks to
data disks means high efficiency
Quite complex
controller design
Worst write transaction
rate and Write aggregate
transfer rate
Difficult and inefficient
data rebuild in the event
of disk failure
No commercial
implementations exist/
not commercially viable
Highest Read data transaction rate
Low ratio of ECC (parity) disks to
data disks means high efficiency
Good aggregate transfer rate
Most complex
controller design
Difficult to rebuild in
the event of a disk
failure (as compared
to RAID level 1)
File and application servers
Database servers
Web, e-mail, and
news servers
Intranet servers
Most versatile RAID level
Provides for an extremely high data
fault tolerance and can sustain mul-
tiple simultaneous drive failures
More complex
controller design
Controller overhead to
compute parity addresses
is extremely high
Perfect solution for mission
critical applications
Table 6.4 Continued

use a type of semiconductor memory referred to as flash memory. In this section,
we first provide an introduction to flash memory, and then look at its use in SSDs.
Flash Memory
Flash memory is a type of semiconductor memory that has been around for a num-
ber of years and is used in many consumer electronic products, including smart
phones, GPS devices, MP3 players, digital cameras, and USB device

---

## Module 2 Textbook: Combinational and Sequential Logic

### Textbook Excerpt — Reference: R1_Computer_Organization_and_Architecture_Stallings.txt

e simultaneous
drive failures
Simplest RAID storage subsystem
design
Highest disk overhead of
all RAID types
(100%)—inefficient
Accounting
Payroll
Financial
Any application requiring
very high availability
(Continued)

One of the most significant developments in computer architecture in recent years
is the increasing use of solid state drives (SSDs) to complement or even replace
hard disk drives (HDDs), both as internal and external secondary memory. The
term solid state refers to electronic circuitry built with semiconductors. A solid state
drive is a memory device made with solid state components that can be used as a
replacement to a hard disk drive. The SSDs now on the market and coming on line
Level
Advantages
Disadvantages
Applications
Extremely high data transfer rates
possible
The higher the data transfer rate
required, the better the ratio of data
disks to ECC disks
Relatively simple controller design
compared to RAID levels 3, 4, & 5
Very high ratio of ECC
disks to data disks
with smaller word
sizes—inefficient
Entry level cost very
high—requires very high
transfer rate requirement
to justify
No commercial
implementations exist/
not commercially viable
Very high read data transfer rate
Very high write data transfer rate
Disk failure has an insignificant
impact on throughput
Low ratio of ECC (parity) disks to
data disks means high efficiency
Transaction rate equal to
that of a single disk drive
at best (if spindles are
synchronized)
Controller design is
fairly complex
Video production and live
streaming
Image editing
Video editing
Prepress applications
Any application requiring
high throughput
Very high Read data transaction rate
Low ratio of ECC (parity) disks to
data disks means high efficiency
Quite complex
controller design
Worst write transaction
rate and Write aggregate
transfer rate
Difficult and inefficient
data rebuild in the event
of disk failure
No commercial
implementations exist/
not commercially viable
Highest Read data transaction rate
Low ratio of ECC (parity) disks to
data disks means high efficiency
Good aggregate transfer rate
Most complex
controller design
Difficult to rebuild in
the event of a disk
failure (as compared
to RAID level 1)
File and application servers
Database servers
Web, e-mail, and
news servers
Intranet servers
Most versatile RAID level
Provides for an extremely high data
fault tolerance and can sustain mul-
tiple simultaneous drive failures
More complex
controller design
Controller overhead to
compute parity addresses
is extremely high
Perfect solution for mission
critical applications
Table 6.4 Continued

use a type of semiconductor memory referred to as flash memory. In this section,
we first provide an introduction to flash memory, and then look at its use in SSDs.
Flash Memory
Flash memory is a type of semiconductor memory that has been around for a num-
ber of years and is used in many consumer electronic products, including smart
phones, GPS devices, MP3 players, digital cameras, and USB device

### Textbook Excerpt — Reference: R1_Computer_Organization_and_Architecture_Stallings.txt

P move
FP store
BTB
ALU
ALU
ALU
ALU
Store
AGU
Load
AGU
L1 D-Cache and D-TLB
AGU  address generation unit
BTB
branch target buffer
D-TLB  data translation lookaside buffer
I-TLB  instruction translation lookaside buffer
Figure 16.8 Pentium 4 Block Diagram


so that the micro-ops may be executed out of order.

sor’s register set in the order of the original program flow.
In effect, the Pentium 4 architecture implements a CISC instruction set architec-
ture on a RISC microarchitecture. The inner RISC micro-ops pass through a pipeline
with at least 20 stages (Figure 16.9); in some cases, the micro-op requires multiple exe-
cution stages, resulting in an even longer pipeline. This contrasts with the five-stage
pipeline (Figure 14.21) used on the earlier Intel x86 processors and on the Pentium.
We now trace the operation of the Pentium 4 pipeline, using Figure 16.10 to
illustrate its operation.
Front End
GENERATION OF MICRO-OPS The Pentium 4 organization includes an in-order
front end (Figure 16.10a) that can be considered outside the scope of the pipeline
depicted in Figure 16.9. This front end feeds into an L1 instruction cache, called
the trace cache, which is where the pipeline proper begins. Usually, the processor
operates from the trace cache; when a trace cache miss occurs, the in-order front
end feeds new instructions into the trace cache.
With the aid of the branch target buffer and the instruction lookaside buffer
(BTB & I-TLB), the fetch/decode unit fetches x86 machine instructions from the L2
cache 64 bytes at a time. As a default, instructions are fetched sequentially, so that
each L2 cache line fetch includes the next instruction to be fetched. Branch predic-
tion via the BTB & I-TLB unit may alter this sequential fetch operation. The ITLB
translates the linear instruction pointer address given it into physical addresses
needed to access the L2 cache. Static branch prediction in the front-end BTB is used
to determine which instructions to fetch next.
Once instructions are fetched, the fetch/decode unit scans the bytes to deter-
mine instruction boundaries; this is a necessary operation because of the variable
length of x86 instructions. The decoder translates each machine instruction into
from one to four micro-ops, each of which is a 118-bit RISC instruction. Note for
comparison that most pure RISC machines have an instruction length of just 32
bits. The longer micro-op length is required to accommodate the more complex
x86 instructions. Nevertheless, the micro-ops are easier to manage than the original
instructions from which they derive.
The generated micro-ops are stored in the trace cache.
Drive
Alloc
Que
Sch
Sch
Sch
Disp
Disp
RF
RF
Ex
Flgs
Br Ck
Drive
TC Nxt IP
TC Fetch
Rename
TC Next IP  trace cache next instruction pointer
TC Fetch  trace cache fetch
Alloc  allocate
Rename  register renaming
Que  micro-op queuing
Sch  micro-op scheduling
Disp  Dispatch
RF  register file
Ex  execute
Flgs  flags
Br Ck  branch check
Figure 16.9 Penti

---

## Module 3 Textbook: Basic Structure of Computers — Addressing Modes

### Textbook Excerpt — Reference: R1_Computer_Organization_and_Architecture_Stallings.txt

ems is essential to both their design
and their description. The designer need only deal with a particular level of the
system at a time. At each level, the system consists of a set of components and
their interrelationships. The behavior at each level depends only on a simplified,
abstracted characterization of the system at the next lower level. At each level, the
designer is concerned with structure and function:

• Structure: The way in which the components are interrelated.

• Function: The operation of each individual component as part of the structure.
In terms of description, we have two choices: starting at the bottom and build-
ing up to a complete description, or beginning with a top view and decomposing the
system into its subparts. Evidence from a number of fields suggests that the top-down
approach is the clearest and most effective [WEIN75].

The approach taken in this book follows from this viewpoint. The computer
system will be described from the top down. We begin with the major components
of a computer, describing their structure and function, and proceed to successively
lower layers of the hierarchy. The remainder of this section provides a very brief
overview of this plan of attack.
Function
Both the structure and functioning of a computer are, in essence, simple. Figure 1.1
depicts the basic functions that a computer can perform. In general terms, there are
only four:

• Data processing

• Data storage

• Data movement

• Control
Data
movement
apparatus
Operating environment
(source and destination of data)
Control
mechanism
Data
storage
facility
Data
processing
facility
Figure 1.1 A Functional View of the Computer

The computer, of course, must be able to process data. The data may take a wide
variety of forms, and the range of processing requirements is broad. However, we
shall see that there are only a few fundamental methods or types of data processing.
It is also essential that a computer store data. Even if the computer is process-
ing data on the fly (i.e., data come in and get processed, and the results go out
immediately), the computer must temporarily store at least those pieces of data
that are being worked on at any given moment. Thus, there is at least a short-term
data storage  function. Equally important, the computer performs a long-term data
storage function . Files of data are stored on the computer for subsequent retrieval
and update.
The computer must be able to move data between itself and the outside
world. The computer’s operating environment consists of devices that serve as
either sources or destinations of data. When data are received from or delivered to
a device that is directly connected to the computer, the process is known as input–
output (I/O), and the device is referred to as a peripheral. When data are moved
over longer distances, to or from a remote device, the process is known as data
communications.
Finally, there must be control of these three functions. Ultimately, this control
is exer

### Textbook Excerpt — Reference: R1_Computer_Organization_and_Architecture_Stallings.txt

e simultaneous
drive failures
Simplest RAID storage subsystem
design
Highest disk overhead of
all RAID types
(100%)—inefficient
Accounting
Payroll
Financial
Any application requiring
very high availability
(Continued)

One of the most significant developments in computer architecture in recent years
is the increasing use of solid state drives (SSDs) to complement or even replace
hard disk drives (HDDs), both as internal and external secondary memory. The
term solid state refers to electronic circuitry built with semiconductors. A solid state
drive is a memory device made with solid state components that can be used as a
replacement to a hard disk drive. The SSDs now on the market and coming on line
Level
Advantages
Disadvantages
Applications
Extremely high data transfer rates
possible
The higher the data transfer rate
required, the better the ratio of data
disks to ECC disks
Relatively simple controller design
compared to RAID levels 3, 4, & 5
Very high ratio of ECC
disks to data disks
with smaller word
sizes—inefficient
Entry level cost very
high—requires very high
transfer rate requirement
to justify
No commercial
implementations exist/
not commercially viable
Very high read data transfer rate
Very high write data transfer rate
Disk failure has an insignificant
impact on throughput
Low ratio of ECC (parity) disks to
data disks means high efficiency
Transaction rate equal to
that of a single disk drive
at best (if spindles are
synchronized)
Controller design is
fairly complex
Video production and live
streaming
Image editing
Video editing
Prepress applications
Any application requiring
high throughput
Very high Read data transaction rate
Low ratio of ECC (parity) disks to
data disks means high efficiency
Quite complex
controller design
Worst write transaction
rate and Write aggregate
transfer rate
Difficult and inefficient
data rebuild in the event
of disk failure
No commercial
implementations exist/
not commercially viable
Highest Read data transaction rate
Low ratio of ECC (parity) disks to
data disks means high efficiency
Good aggregate transfer rate
Most complex
controller design
Difficult to rebuild in
the event of a disk
failure (as compared
to RAID level 1)
File and application servers
Database servers
Web, e-mail, and
news servers
Intranet servers
Most versatile RAID level
Provides for an extremely high data
fault tolerance and can sustain mul-
tiple simultaneous drive failures
More complex
controller design
Controller overhead to
compute parity addresses
is extremely high
Perfect solution for mission
critical applications
Table 6.4 Continued

use a type of semiconductor memory referred to as flash memory. In this section,
we first provide an introduction to flash memory, and then look at its use in SSDs.
Flash Memory
Flash memory is a type of semiconductor memory that has been around for a num-
ber of years and is used in many consumer electronic products, including smart
phones, GPS devices, MP3 players, digital cameras, and USB device

---

## Module 4 Textbook: Input/Output and Memory Organization

### Textbook Excerpt — Reference: R1_Computer_Organization_and_Architecture_Stallings.txt

ems is essential to both their design
and their description. The designer need only deal with a particular level of the
system at a time. At each level, the system consists of a set of components and
their interrelationships. The behavior at each level depends only on a simplified,
abstracted characterization of the system at the next lower level. At each level, the
designer is concerned with structure and function:

• Structure: The way in which the components are interrelated.

• Function: The operation of each individual component as part of the structure.
In terms of description, we have two choices: starting at the bottom and build-
ing up to a complete description, or beginning with a top view and decomposing the
system into its subparts. Evidence from a number of fields suggests that the top-down
approach is the clearest and most effective [WEIN75].

The approach taken in this book follows from this viewpoint. The computer
system will be described from the top down. We begin with the major components
of a computer, describing their structure and function, and proceed to successively
lower layers of the hierarchy. The remainder of this section provides a very brief
overview of this plan of attack.
Function
Both the structure and functioning of a computer are, in essence, simple. Figure 1.1
depicts the basic functions that a computer can perform. In general terms, there are
only four:

• Data processing

• Data storage

• Data movement

• Control
Data
movement
apparatus
Operating environment
(source and destination of data)
Control
mechanism
Data
storage
facility
Data
processing
facility
Figure 1.1 A Functional View of the Computer

The computer, of course, must be able to process data. The data may take a wide
variety of forms, and the range of processing requirements is broad. However, we
shall see that there are only a few fundamental methods or types of data processing.
It is also essential that a computer store data. Even if the computer is process-
ing data on the fly (i.e., data come in and get processed, and the results go out
immediately), the computer must temporarily store at least those pieces of data
that are being worked on at any given moment. Thus, there is at least a short-term
data storage  function. Equally important, the computer performs a long-term data
storage function . Files of data are stored on the computer for subsequent retrieval
and update.
The computer must be able to move data between itself and the outside
world. The computer’s operating environment consists of devices that serve as
either sources or destinations of data. When data are received from or delivered to
a device that is directly connected to the computer, the process is known as input–
output (I/O), and the device is referred to as a peripheral. When data are moved
over longer distances, to or from a remote device, the process is known as data
communications.
Finally, there must be control of these three functions. Ultimately, this control
is exer

### Textbook Excerpt — Reference: R1_Computer_Organization_and_Architecture_Stallings.txt

e simultaneous
drive failures
Simplest RAID storage subsystem
design
Highest disk overhead of
all RAID types
(100%)—inefficient
Accounting
Payroll
Financial
Any application requiring
very high availability
(Continued)

One of the most significant developments in computer architecture in recent years
is the increasing use of solid state drives (SSDs) to complement or even replace
hard disk drives (HDDs), both as internal and external secondary memory. The
term solid state refers to electronic circuitry built with semiconductors. A solid state
drive is a memory device made with solid state components that can be used as a
replacement to a hard disk drive. The SSDs now on the market and coming on line
Level
Advantages
Disadvantages
Applications
Extremely high data transfer rates
possible
The higher the data transfer rate
required, the better the ratio of data
disks to ECC disks
Relatively simple controller design
compared to RAID levels 3, 4, & 5
Very high ratio of ECC
disks to data disks
with smaller word
sizes—inefficient
Entry level cost very
high—requires very high
transfer rate requirement
to justify
No commercial
implementations exist/
not commercially viable
Very high read data transfer rate
Very high write data transfer rate
Disk failure has an insignificant
impact on throughput
Low ratio of ECC (parity) disks to
data disks means high efficiency
Transaction rate equal to
that of a single disk drive
at best (if spindles are
synchronized)
Controller design is
fairly complex
Video production and live
streaming
Image editing
Video editing
Prepress applications
Any application requiring
high throughput
Very high Read data transaction rate
Low ratio of ECC (parity) disks to
data disks means high efficiency
Quite complex
controller design
Worst write transaction
rate and Write aggregate
transfer rate
Difficult and inefficient
data rebuild in the event
of disk failure
No commercial
implementations exist/
not commercially viable
Highest Read data transaction rate
Low ratio of ECC (parity) disks to
data disks means high efficiency
Good aggregate transfer rate
Most complex
controller design
Difficult to rebuild in
the event of a disk
failure (as compared
to RAID level 1)
File and application servers
Database servers
Web, e-mail, and
news servers
Intranet servers
Most versatile RAID level
Provides for an extremely high data
fault tolerance and can sustain mul-
tiple simultaneous drive failures
More complex
controller design
Controller overhead to
compute parity addresses
is extremely high
Perfect solution for mission
critical applications
Table 6.4 Continued

use a type of semiconductor memory referred to as flash memory. In this section,
we first provide an introduction to flash memory, and then look at its use in SSDs.
Flash Memory
Flash memory is a type of semiconductor memory that has been around for a num-
ber of years and is used in many consumer electronic products, including smart
phones, GPS devices, MP3 players, digital cameras, and USB device

---

## Module 5 Textbook: Basic Processing Unit and Pipelining

### Textbook Excerpt — Reference: R1_Computer_Organization_and_Architecture_Stallings.txt

ems is essential to both their design
and their description. The designer need only deal with a particular level of the
system at a time. At each level, the system consists of a set of components and
their interrelationships. The behavior at each level depends only on a simplified,
abstracted characterization of the system at the next lower level. At each level, the
designer is concerned with structure and function:

• Structure: The way in which the components are interrelated.

• Function: The operation of each individual component as part of the structure.
In terms of description, we have two choices: starting at the bottom and build-
ing up to a complete description, or beginning with a top view and decomposing the
system into its subparts. Evidence from a number of fields suggests that the top-down
approach is the clearest and most effective [WEIN75].

The approach taken in this book follows from this viewpoint. The computer
system will be described from the top down. We begin with the major components
of a computer, describing their structure and function, and proceed to successively
lower layers of the hierarchy. The remainder of this section provides a very brief
overview of this plan of attack.
Function
Both the structure and functioning of a computer are, in essence, simple. Figure 1.1
depicts the basic functions that a computer can perform. In general terms, there are
only four:

• Data processing

• Data storage

• Data movement

• Control
Data
movement
apparatus
Operating environment
(source and destination of data)
Control
mechanism
Data
storage
facility
Data
processing
facility
Figure 1.1 A Functional View of the Computer

The computer, of course, must be able to process data. The data may take a wide
variety of forms, and the range of processing requirements is broad. However, we
shall see that there are only a few fundamental methods or types of data processing.
It is also essential that a computer store data. Even if the computer is process-
ing data on the fly (i.e., data come in and get processed, and the results go out
immediately), the computer must temporarily store at least those pieces of data
that are being worked on at any given moment. Thus, there is at least a short-term
data storage  function. Equally important, the computer performs a long-term data
storage function . Files of data are stored on the computer for subsequent retrieval
and update.
The computer must be able to move data between itself and the outside
world. The computer’s operating environment consists of devices that serve as
either sources or destinations of data. When data are received from or delivered to
a device that is directly connected to the computer, the process is known as input–
output (I/O), and the device is referred to as a peripheral. When data are moved
over longer distances, to or from a remote device, the process is known as data
communications.
Finally, there must be control of these three functions. Ultimately, this control
is exer

### Textbook Excerpt — Reference: R1_Computer_Organization_and_Architecture_Stallings.txt

e simultaneous
drive failures
Simplest RAID storage subsystem
design
Highest disk overhead of
all RAID types
(100%)—inefficient
Accounting
Payroll
Financial
Any application requiring
very high availability
(Continued)

One of the most significant developments in computer architecture in recent years
is the increasing use of solid state drives (SSDs) to complement or even replace
hard disk drives (HDDs), both as internal and external secondary memory. The
term solid state refers to electronic circuitry built with semiconductors. A solid state
drive is a memory device made with solid state components that can be used as a
replacement to a hard disk drive. The SSDs now on the market and coming on line
Level
Advantages
Disadvantages
Applications
Extremely high data transfer rates
possible
The higher the data transfer rate
required, the better the ratio of data
disks to ECC disks
Relatively simple controller design
compared to RAID levels 3, 4, & 5
Very high ratio of ECC
disks to data disks
with smaller word
sizes—inefficient
Entry level cost very
high—requires very high
transfer rate requirement
to justify
No commercial
implementations exist/
not commercially viable
Very high read data transfer rate
Very high write data transfer rate
Disk failure has an insignificant
impact on throughput
Low ratio of ECC (parity) disks to
data disks means high efficiency
Transaction rate equal to
that of a single disk drive
at best (if spindles are
synchronized)
Controller design is
fairly complex
Video production and live
streaming
Image editing
Video editing
Prepress applications
Any application requiring
high throughput
Very high Read data transaction rate
Low ratio of ECC (parity) disks to
data disks means high efficiency
Quite complex
controller design
Worst write transaction
rate and Write aggregate
transfer rate
Difficult and inefficient
data rebuild in the event
of disk failure
No commercial
implementations exist/
not commercially viable
Highest Read data transaction rate
Low ratio of ECC (parity) disks to
data disks means high efficiency
Good aggregate transfer rate
Most complex
controller design
Difficult to rebuild in
the event of a disk
failure (as compared
to RAID level 1)
File and application servers
Database servers
Web, e-mail, and
news servers
Intranet servers
Most versatile RAID level
Provides for an extremely high data
fault tolerance and can sustain mul-
tiple simultaneous drive failures
More complex
controller design
Controller overhead to
compute parity addresses
is extremely high
Perfect solution for mission
critical applications
Table 6.4 Continued

use a type of semiconductor memory referred to as flash memory. In this section,
we first provide an introduction to flash memory, and then look at its use in SSDs.
Flash Memory
Flash memory is a type of semiconductor memory that has been around for a num-
ber of years and is used in many consumer electronic products, including smart
phones, GPS devices, MP3 players, digital cameras, and USB device

---
