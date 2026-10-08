<!-- PROVENANCE: subject_code=BCS402 | subject_name=Microcontrollers | semester=4 | source_type=TEXTBOOK_DIGEST | source_file=textbook_notes.md | extraction_method=STRUCTURED_COMPREHENSIVE | confidence=0.95 -->

# BCS402 — Textbook Notes

**Subject:** BCS402 (Microcontrollers and Embedded Systems)
**Content type:** textbook_notes
**Primary Reference:** Kenneth Ayala — The 8051 Microcontroller Architecture & Muhammad Ali Mazidi — The 8051 Microcontroller & Embedded Systems & Andrew Sloss — ARM System Developer's Guide

---

# BCS402 — Textbook Notes (Module-wise)
**Subject:** Microcontrollers and Embedded Systems
**Prescribed Textbooks:** Kenneth Ayala — The 8051 Microcontroller Architecture & Muhammad Ali Mazidi — The 8051 Microcontroller & Embedded Systems & Andrew Sloss — ARM System Developer's Guide

---

## Module 1 Textbook: 8051 Microcontroller Architecture

### Textbook Excerpt — Reference: BCS402-Module-1-textbook.txt

e of two decades, however, the
distinction between RISC and CISC has blurred as CISC processors have implemented
more RISC concepts.
There are a number of physical features that have driven the ARM processor design. First,
portable embedded systems require some form of battery power. The ARM processor has
been speciﬁcally designed to be small to reduce power consumption and extend battery
operation—essential for applications such as mobile phones and personal digital assistants
(PDAs).
High code density is another major requirement since embedded systems have lim-
ited memory due to cost and/or physical size restrictions. High code density is useful for
applications that have limited on-board memory, such as mobile phones and mass storage
devices.
In addition, embedded systems are price sensitive and use slow and low-cost memory
devices. For high-volume applications like digital cameras, every cent has to be accounted
for in the design. The ability to use low-cost memory devices produces substantial savings.
Anotherimportantrequirementistoreducetheareaofthedietakenupbytheembedded
processor. For a single-chip solution, the smaller the area used by the embedded processor,
the more available space for specialized peripherals. This in turn reduces the cost of the
design and manufacturing since fewer discrete chips are required for the end product.
ARM has incorporated hardware debug technology within the processor so that software
engineers can view what is happening while the processor is executing code. With greater
visibility, software engineers can resolve issues faster, which has a direct effect on the time
to market and reduces overall development costs.
The ARM core is not a pure RISC architecture because of the constraints of its primary
application—the embedded system. In some sense, the strength of the ARM core is that
it does not take the RISC concept too far. In today’s systems the key is not raw processor
speed but total effective system performance and power consumption.

Chapter 1 ARM Embedded Systems
Instruction Set for Embedded Systems
The ARM instruction set differs from the pure RISC deﬁnition in several ways that make
the ARM instruction set suitable for embedded applications:
■
Variable cycle execution for certain instructions—Not every ARM instruction executes
in a single cycle. For example, load-store-multiple instructions vary in the number
of execution cycles depending upon the number of registers being transferred. The
transfer can occur on sequential memory addresses, which increases performance since
sequential memory accesses are often faster than random accesses. Code density is also
improved since multiple register transfers are common operations at the start and end
of functions.
■
Inline barrel shifter leading to more complex instructions—The inline barrel shifter is
a hardware component that preprocesses one of the input registers before it is used
by an instruction. This expands the capability of many instructions t

### Textbook Excerpt — Reference: BCS402-Module-3-textbook.txt

rself.

To keep our examples concrete, we have tested them using the following speciﬁc C
compilers:
■
armcc from ARM Developer Suite version 1.1 (ADS1.1). You can license this compiler,
or a later version, directly from ARM.
■
arm-elf-gcc version 2.95.2. This is the ARM target for the GNU C compiler, gcc, and is
freely available.
We have used armcc from ADS1.1 to generate the example assembler output in this
book. The following short script shows you how to invoke armcc on a C ﬁle test.c. You
can use this to reproduce our examples.
armcc -Otime -c -o test.o test.c
fromelf -text/c test.o > test.txt
By default armcc has full optimizations turned on (the -O2 command line switch). The
-Otime switch optimizes for execution efﬁciency rather than space and mainly affects the
layout of for and while loops. If you are using the gcc compiler, then the following short
script generates a similar assembler output listing:
arm-elf-gcc -O2 -fomit-frame-pointer -c -o test.o test.c
arm-elf-objdump -d test.o > test.txt
Full optimizations are turned off by default for the GNU compiler. The -fomit-frame-
pointer switch prevents the GNU compiler from maintaining a frame pointer register.
Frame pointers assist the debug view by pointing to the local variables stored on the stack
frame. However, they are inefﬁcient to maintain and shouldn’t be used in code critical to
performance.
Let’s start by looking at how ARM compilers handle the basic C data types. We will see
that some of these types are more efﬁcient to use for local variables than others. There are
also differences between the addressing modes available when loading and storing data of
each type.
ARM processors have 32-bit registers and 32-bit data processing operations. The ARM
architecture is a RISC load/store architecture. In other words you must load values from
memory into registers before acting on them. There are no arithmetic or logical instructions
that manipulate values in memory directly.
Early versions of the ARM architecture (ARMv1 to ARMv3) provided hardware
support for loading and storing unsigned 8-bit and unsigned or signed 32-bit values.

Chapter 5 Efﬁcient C Programming
Table 5.1
Load and store instructions by ARM architecture.
Architecture
Instruction
Action
Pre-ARMv4
LDRB
load an unsigned 8-bit value
STRB
store a signed or unsigned 8-bit value
LDR
load a signed or unsigned 32-bit value
STR
store a signed or unsigned 32-bit value
ARMv4
LDRSB
load a signed 8-bit value
LDRH
load an unsigned 16-bit value
LDRSH
load a signed 16-bit value
STRH
store a signed or unsigned 16-bit value
ARMv5
LDRD
load a signed or unsigned 64-bit value
STRD
store a signed or unsigned 64-bit value
These architectures were used on processors prior to the ARM7TDMI. Table 5.1 shows
the load/store instruction classes available by ARM architecture.
In Table 5.1 loads that act on 8- or 16-bit values extend the value to 32 bits before writing
to an ARM register. Unsigned values are zero-extended, and signed values sign-exte

---

## Module 2 Textbook: 8051 Instruction Set and Programming

### Textbook Excerpt — Reference: BCS402-Module-1-textbook.txt

e of two decades, however, the
distinction between RISC and CISC has blurred as CISC processors have implemented
more RISC concepts.
There are a number of physical features that have driven the ARM processor design. First,
portable embedded systems require some form of battery power. The ARM processor has
been speciﬁcally designed to be small to reduce power consumption and extend battery
operation—essential for applications such as mobile phones and personal digital assistants
(PDAs).
High code density is another major requirement since embedded systems have lim-
ited memory due to cost and/or physical size restrictions. High code density is useful for
applications that have limited on-board memory, such as mobile phones and mass storage
devices.
In addition, embedded systems are price sensitive and use slow and low-cost memory
devices. For high-volume applications like digital cameras, every cent has to be accounted
for in the design. The ability to use low-cost memory devices produces substantial savings.
Anotherimportantrequirementistoreducetheareaofthedietakenupbytheembedded
processor. For a single-chip solution, the smaller the area used by the embedded processor,
the more available space for specialized peripherals. This in turn reduces the cost of the
design and manufacturing since fewer discrete chips are required for the end product.
ARM has incorporated hardware debug technology within the processor so that software
engineers can view what is happening while the processor is executing code. With greater
visibility, software engineers can resolve issues faster, which has a direct effect on the time
to market and reduces overall development costs.
The ARM core is not a pure RISC architecture because of the constraints of its primary
application—the embedded system. In some sense, the strength of the ARM core is that
it does not take the RISC concept too far. In today’s systems the key is not raw processor
speed but total effective system performance and power consumption.

Chapter 1 ARM Embedded Systems
Instruction Set for Embedded Systems
The ARM instruction set differs from the pure RISC deﬁnition in several ways that make
the ARM instruction set suitable for embedded applications:
■
Variable cycle execution for certain instructions—Not every ARM instruction executes
in a single cycle. For example, load-store-multiple instructions vary in the number
of execution cycles depending upon the number of registers being transferred. The
transfer can occur on sequential memory addresses, which increases performance since
sequential memory accesses are often faster than random accesses. Code density is also
improved since multiple register transfers are common operations at the start and end
of functions.
■
Inline barrel shifter leading to more complex instructions—The inline barrel shifter is
a hardware component that preprocesses one of the input registers before it is used
by an instruction. This expands the capability of many instructions t

### Textbook Excerpt — Reference: BCS402-Module-1-textbook.txt

d may reside on-chip. Peripherals range from a simple serial communication
device to a more complex 802.11 wireless device.
All ARM peripherals are memory mapped—the programming interface is a set of
memory-addressed registers. The address of these registers is an offset from a speciﬁc
peripheral base address.
Controllers are specialized peripherals that implement higher levels of functionality
within an embedded system. Two important types of controllers are memory controllers
and interrupt controllers.
Memory Controllers
Memory controllers connect different types of memory to the processor bus. On power-up
a memory controller is conﬁgured in hardware to allow certain memory devices to be active.
These memory devices allow the initialization code to be executed. Some memory devices
must be set up by software; for example, when using DRAM, you ﬁrst have to set up the
memory timings and refresh rate before it can be accessed.

Chapter 1 ARM Embedded Systems
Interrupt Controllers
When a peripheral or device requires attention, it raises an interrupt to the processor.
An interrupt controller provides a programmable governing policy that allows software to
determine which peripheral or device can interrupt the processor at any speciﬁc time by
setting the appropriate bits in the interrupt controller registers.
There are two types of interrupt controller available for the ARM processor: the standard
interrupt controller and the vector interrupt controller (VIC).
The standard interrupt controller sends an interrupt signal to the processor core when
an external device requests servicing. It can be programmed to ignore or mask an individual
device or set of devices. The interrupt handler determines which device requires servicing
by reading a device bitmap register in the interrupt controller.
The VIC is more powerful than the standard interrupt controller because it prioritizes
interrupts and simpliﬁes the determination of which device caused the interrupt. After
associating a priority and a handler address with each interrupt, the VIC only asserts an
interrupt signal to the core if the priority of a new interrupt is higher than the currently
executing interrupt handler. Depending on its type, the VIC will either call the standard
interrupt exception handler, which can load the address of the handler for the device from
the VIC, or cause the core to jump to the handler for the device directly.
An embedded system needs software to drive it. Figure 1.4 shows four typical software
components required to control an embedded device. Each software component in the
stack uses a higher level of abstraction to separate the code from the hardware device.
Theinitializationcodeistheﬁrstcodeexecutedontheboardandisspeciﬁctoaparticular
target or group of targets. It sets up the minimum parts of the board before handing control
over to the operating system.
Application
Operating system
Initialization
Device drivers
Hardware device
Figure 1.4
Software abstraction layers 

---

## Module 3 Textbook: Timers, Counters and Serial Communication

### Textbook Excerpt — Reference: BCS402-Module-1-textbook.txt

e of two decades, however, the
distinction between RISC and CISC has blurred as CISC processors have implemented
more RISC concepts.
There are a number of physical features that have driven the ARM processor design. First,
portable embedded systems require some form of battery power. The ARM processor has
been speciﬁcally designed to be small to reduce power consumption and extend battery
operation—essential for applications such as mobile phones and personal digital assistants
(PDAs).
High code density is another major requirement since embedded systems have lim-
ited memory due to cost and/or physical size restrictions. High code density is useful for
applications that have limited on-board memory, such as mobile phones and mass storage
devices.
In addition, embedded systems are price sensitive and use slow and low-cost memory
devices. For high-volume applications like digital cameras, every cent has to be accounted
for in the design. The ability to use low-cost memory devices produces substantial savings.
Anotherimportantrequirementistoreducetheareaofthedietakenupbytheembedded
processor. For a single-chip solution, the smaller the area used by the embedded processor,
the more available space for specialized peripherals. This in turn reduces the cost of the
design and manufacturing since fewer discrete chips are required for the end product.
ARM has incorporated hardware debug technology within the processor so that software
engineers can view what is happening while the processor is executing code. With greater
visibility, software engineers can resolve issues faster, which has a direct effect on the time
to market and reduces overall development costs.
The ARM core is not a pure RISC architecture because of the constraints of its primary
application—the embedded system. In some sense, the strength of the ARM core is that
it does not take the RISC concept too far. In today’s systems the key is not raw processor
speed but total effective system performance and power consumption.

Chapter 1 ARM Embedded Systems
Instruction Set for Embedded Systems
The ARM instruction set differs from the pure RISC deﬁnition in several ways that make
the ARM instruction set suitable for embedded applications:
■
Variable cycle execution for certain instructions—Not every ARM instruction executes
in a single cycle. For example, load-store-multiple instructions vary in the number
of execution cycles depending upon the number of registers being transferred. The
transfer can occur on sequential memory addresses, which increases performance since
sequential memory accesses are often faster than random accesses. Code density is also
improved since multiple register transfers are common operations at the start and end
of functions.
■
Inline barrel shifter leading to more complex instructions—The inline barrel shifter is
a hardware component that preprocesses one of the input registers before it is used
by an instruction. This expands the capability of many instructions t

### Textbook Excerpt — Reference: BCS402-Module-1-textbook.txt

d may reside on-chip. Peripherals range from a simple serial communication
device to a more complex 802.11 wireless device.
All ARM peripherals are memory mapped—the programming interface is a set of
memory-addressed registers. The address of these registers is an offset from a speciﬁc
peripheral base address.
Controllers are specialized peripherals that implement higher levels of functionality
within an embedded system. Two important types of controllers are memory controllers
and interrupt controllers.
Memory Controllers
Memory controllers connect different types of memory to the processor bus. On power-up
a memory controller is conﬁgured in hardware to allow certain memory devices to be active.
These memory devices allow the initialization code to be executed. Some memory devices
must be set up by software; for example, when using DRAM, you ﬁrst have to set up the
memory timings and refresh rate before it can be accessed.

Chapter 1 ARM Embedded Systems
Interrupt Controllers
When a peripheral or device requires attention, it raises an interrupt to the processor.
An interrupt controller provides a programmable governing policy that allows software to
determine which peripheral or device can interrupt the processor at any speciﬁc time by
setting the appropriate bits in the interrupt controller registers.
There are two types of interrupt controller available for the ARM processor: the standard
interrupt controller and the vector interrupt controller (VIC).
The standard interrupt controller sends an interrupt signal to the processor core when
an external device requests servicing. It can be programmed to ignore or mask an individual
device or set of devices. The interrupt handler determines which device requires servicing
by reading a device bitmap register in the interrupt controller.
The VIC is more powerful than the standard interrupt controller because it prioritizes
interrupts and simpliﬁes the determination of which device caused the interrupt. After
associating a priority and a handler address with each interrupt, the VIC only asserts an
interrupt signal to the core if the priority of a new interrupt is higher than the currently
executing interrupt handler. Depending on its type, the VIC will either call the standard
interrupt exception handler, which can load the address of the handler for the device from
the VIC, or cause the core to jump to the handler for the device directly.
An embedded system needs software to drive it. Figure 1.4 shows four typical software
components required to control an embedded device. Each software component in the
stack uses a higher level of abstraction to separate the code from the hardware device.
Theinitializationcodeistheﬁrstcodeexecutedontheboardandisspeciﬁctoaparticular
target or group of targets. It sets up the minimum parts of the board before handing control
over to the operating system.
Application
Operating system
Initialization
Device drivers
Hardware device
Figure 1.4
Software abstraction layers 

---

## Module 4 Textbook: Interrupts and Interfacing

### Textbook Excerpt — Reference: BCS402-Module-1-textbook.txt

d may reside on-chip. Peripherals range from a simple serial communication
device to a more complex 802.11 wireless device.
All ARM peripherals are memory mapped—the programming interface is a set of
memory-addressed registers. The address of these registers is an offset from a speciﬁc
peripheral base address.
Controllers are specialized peripherals that implement higher levels of functionality
within an embedded system. Two important types of controllers are memory controllers
and interrupt controllers.
Memory Controllers
Memory controllers connect different types of memory to the processor bus. On power-up
a memory controller is conﬁgured in hardware to allow certain memory devices to be active.
These memory devices allow the initialization code to be executed. Some memory devices
must be set up by software; for example, when using DRAM, you ﬁrst have to set up the
memory timings and refresh rate before it can be accessed.

Chapter 1 ARM Embedded Systems
Interrupt Controllers
When a peripheral or device requires attention, it raises an interrupt to the processor.
An interrupt controller provides a programmable governing policy that allows software to
determine which peripheral or device can interrupt the processor at any speciﬁc time by
setting the appropriate bits in the interrupt controller registers.
There are two types of interrupt controller available for the ARM processor: the standard
interrupt controller and the vector interrupt controller (VIC).
The standard interrupt controller sends an interrupt signal to the processor core when
an external device requests servicing. It can be programmed to ignore or mask an individual
device or set of devices. The interrupt handler determines which device requires servicing
by reading a device bitmap register in the interrupt controller.
The VIC is more powerful than the standard interrupt controller because it prioritizes
interrupts and simpliﬁes the determination of which device caused the interrupt. After
associating a priority and a handler address with each interrupt, the VIC only asserts an
interrupt signal to the core if the priority of a new interrupt is higher than the currently
executing interrupt handler. Depending on its type, the VIC will either call the standard
interrupt exception handler, which can load the address of the handler for the device from
the VIC, or cause the core to jump to the handler for the device directly.
An embedded system needs software to drive it. Figure 1.4 shows four typical software
components required to control an embedded device. Each software component in the
stack uses a higher level of abstraction to separate the code from the hardware device.
Theinitializationcodeistheﬁrstcodeexecutedontheboardandisspeciﬁctoaparticular
target or group of targets. It sets up the minimum parts of the board before handing control
over to the operating system.
Application
Operating system
Initialization
Device drivers
Hardware device
Figure 1.4
Software abstraction layers 

### Textbook Excerpt — Reference: BCS402-Module-1-textbook.txt

on, the processor compares the
condition attribute with the condition ﬂags in the cpsr. If they match, then the instruction
is executed; otherwise the instruction is ignored.
The condition attribute is postﬁxed to the instruction mnemonic, which is encoded
into the instruction. Table 2.5 lists the conditional execution code mnemonics. When a
condition mnemonic is not present, the default behavior is to set it to always (AL) execute.
A pipeline is the mechanism a RISC processor uses to execute instructions. Using a pipeline
speeds up execution by fetching the next instruction while other instructions are being
decoded and executed. One way to view the pipeline is to think of it as an automobile
assembly line, with each stage carrying out a particular task to manufacture the vehicle.

Chapter 2 ARM Processor Fundamentals
Execute
Decode
Fetch
Figure 2.7
ARM7 Three-stage pipeline.
Figure 2.7 shows a three-stage pipeline:
■
Fetch loads an instruction from memory.
■
Decode identiﬁes the instruction to be executed.
■
Execute processes the instruction and writes the result back to a register.
Figure 2.8 illustrates the pipeline using a simple example. It shows a sequence of three
instructions being fetched, decoded, and executed by the processor. Each instruction takes
a single cycle to complete after the pipeline is ﬁlled.
The three instructions are placed into the pipeline sequentially. In the ﬁrst cycle the
core fetches the ADD instruction from memory. In the second cycle the core fetches the
SUB instruction and decodes the ADD instruction. In the third cycle, both the SUB and
ADD instructions are moved along the pipeline. The ADD instruction is executed, the SUB
instruction is decoded, and the CMP instruction is fetched. This procedure is called ﬁlling
the pipeline. The pipeline allows the core to execute an instruction every cycle.
As the pipeline length increases, the amount of work done at each stage is reduced,
which allows the processor to attain a higher operating frequency. This in turn increases
the performance. The system latency also increases because it takes more cycles to ﬁll the
pipeline before the core can execute an instruction. The increased pipeline length also means
there can be data dependency between certain stages. You can write code to reduce this
dependencybyusinginstructionscheduling(formoreinformationoninstructionscheduling
take a look at Chapter 6).
ADD
Execute
Decode
Fetch
ADD
SUB
ADD
SUB
CMP
Cycle 1
Cycle 2
Time
Cycle 3
Figure 2.8
Pipelined instruction sequence.

Execute
Memory
Write
Decode
Fetch
Figure 2.9
ARM9 ﬁve-stage pipeline.
Decode
Execute
Memory
Write
Issue
Fetch
Figure2.10
ARM10 six-stage pipeline.
The pipeline design for each ARM family differs. For example, The ARM9 core increases
the pipeline length to ﬁve stages, as shown in Figure 2.9. The ARM9 adds a memory and
writeback stage, which allows the ARM9 to process on average 1.1 Dhrystone MIPS per
MHz—an increase in instruction throughput by around 13% compared

---

## Module 5 Textbook: ARM Architecture and Embedded Systems

### Textbook Excerpt — Reference: BCS402-Module-1-textbook.txt

e of two decades, however, the
distinction between RISC and CISC has blurred as CISC processors have implemented
more RISC concepts.
There are a number of physical features that have driven the ARM processor design. First,
portable embedded systems require some form of battery power. The ARM processor has
been speciﬁcally designed to be small to reduce power consumption and extend battery
operation—essential for applications such as mobile phones and personal digital assistants
(PDAs).
High code density is another major requirement since embedded systems have lim-
ited memory due to cost and/or physical size restrictions. High code density is useful for
applications that have limited on-board memory, such as mobile phones and mass storage
devices.
In addition, embedded systems are price sensitive and use slow and low-cost memory
devices. For high-volume applications like digital cameras, every cent has to be accounted
for in the design. The ability to use low-cost memory devices produces substantial savings.
Anotherimportantrequirementistoreducetheareaofthedietakenupbytheembedded
processor. For a single-chip solution, the smaller the area used by the embedded processor,
the more available space for specialized peripherals. This in turn reduces the cost of the
design and manufacturing since fewer discrete chips are required for the end product.
ARM has incorporated hardware debug technology within the processor so that software
engineers can view what is happening while the processor is executing code. With greater
visibility, software engineers can resolve issues faster, which has a direct effect on the time
to market and reduces overall development costs.
The ARM core is not a pure RISC architecture because of the constraints of its primary
application—the embedded system. In some sense, the strength of the ARM core is that
it does not take the RISC concept too far. In today’s systems the key is not raw processor
speed but total effective system performance and power consumption.

Chapter 1 ARM Embedded Systems
Instruction Set for Embedded Systems
The ARM instruction set differs from the pure RISC deﬁnition in several ways that make
the ARM instruction set suitable for embedded applications:
■
Variable cycle execution for certain instructions—Not every ARM instruction executes
in a single cycle. For example, load-store-multiple instructions vary in the number
of execution cycles depending upon the number of registers being transferred. The
transfer can occur on sequential memory addresses, which increases performance since
sequential memory accesses are often faster than random accesses. Code density is also
improved since multiple register transfers are common operations at the start and end
of functions.
■
Inline barrel shifter leading to more complex instructions—The inline barrel shifter is
a hardware component that preprocesses one of the input registers before it is used
by an instruction. This expands the capability of many instructions t

### Textbook Excerpt — Reference: BCS402-Module-1-textbook.txt

d may reside on-chip. Peripherals range from a simple serial communication
device to a more complex 802.11 wireless device.
All ARM peripherals are memory mapped—the programming interface is a set of
memory-addressed registers. The address of these registers is an offset from a speciﬁc
peripheral base address.
Controllers are specialized peripherals that implement higher levels of functionality
within an embedded system. Two important types of controllers are memory controllers
and interrupt controllers.
Memory Controllers
Memory controllers connect different types of memory to the processor bus. On power-up
a memory controller is conﬁgured in hardware to allow certain memory devices to be active.
These memory devices allow the initialization code to be executed. Some memory devices
must be set up by software; for example, when using DRAM, you ﬁrst have to set up the
memory timings and refresh rate before it can be accessed.

Chapter 1 ARM Embedded Systems
Interrupt Controllers
When a peripheral or device requires attention, it raises an interrupt to the processor.
An interrupt controller provides a programmable governing policy that allows software to
determine which peripheral or device can interrupt the processor at any speciﬁc time by
setting the appropriate bits in the interrupt controller registers.
There are two types of interrupt controller available for the ARM processor: the standard
interrupt controller and the vector interrupt controller (VIC).
The standard interrupt controller sends an interrupt signal to the processor core when
an external device requests servicing. It can be programmed to ignore or mask an individual
device or set of devices. The interrupt handler determines which device requires servicing
by reading a device bitmap register in the interrupt controller.
The VIC is more powerful than the standard interrupt controller because it prioritizes
interrupts and simpliﬁes the determination of which device caused the interrupt. After
associating a priority and a handler address with each interrupt, the VIC only asserts an
interrupt signal to the core if the priority of a new interrupt is higher than the currently
executing interrupt handler. Depending on its type, the VIC will either call the standard
interrupt exception handler, which can load the address of the handler for the device from
the VIC, or cause the core to jump to the handler for the device directly.
An embedded system needs software to drive it. Figure 1.4 shows four typical software
components required to control an embedded device. Each software component in the
stack uses a higher level of abstraction to separate the code from the hardware device.
Theinitializationcodeistheﬁrstcodeexecutedontheboardandisspeciﬁctoaparticular
target or group of targets. It sets up the minimum parts of the board before handing control
over to the operating system.
Application
Operating system
Initialization
Device drivers
Hardware device
Figure 1.4
Software abstraction layers 

---
