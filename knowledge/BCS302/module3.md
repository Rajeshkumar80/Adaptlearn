# BCS302 — Module 3

## Basic Structure of Computers — Addressing Modes

**Subject:** BCS302 (Digital Design and Computer Organization)
**Module:** Module 3
**Content type:** textbook_fallback
**Sources:** R1_Computer_Organization_and_Architecture_Stallings.txt

---

CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
At a top level, a computer consists of CPU (central processing unit), memory, and 
I/O components, with one or more modules of each type. These components are 
interconnected in some fashion to achieve the basic function of the computer, which 
is to execute programs. Thus, at a top level, we can characterize a computer system 
by describing (1) the external behavior of each component, that is, the data and 
control signals that it exchanges with other components and (2) the interconnec-
tion structure and the controls required to manage the use of the interconnection 
structure.
This top-level view of structure and function is important because of its 
explanatory power in understanding the nature of a computer. Equally important is 
its use to understand the increasingly complex issues of performance evaluation. A 
grasp of the top-level structure and function offers insight into system bottlenecks, 
alternate pathways, the magnitude of system failures if a component fails, and the 
ease of adding performance enhancements. In many cases, requirements for greater 
system power and fail-safe capabilities are being met by changing the design rather 
than merely increasing the speed and reliability of individual components.
This chapter focuses on the basic structures used for computer component 
interconnection. As background, the chapter begins with a brief examination of the 
basic components and their interface requirements. Then a functional overview is 
provided. We are then prepared to examine the use of buses to interconnect system 
components.
 3.1 COMPUTER COMPONENTS
As discussed in Chapter 2, virtually all contemporary computer designs are based 
on concepts developed by John von Neumann at the Institute for Advanced Studies, 
Princeton. Such a design is referred to as the von Neumann architecture and is based 
on three key concepts:
LEARNING OBJECTIVES
After studying this chapter, you should be able to:
 Understand the basic elements of an instruction cycle and the role of 
 interrupts.
 Describe the concept of interconnection within a computer system.
 Understand the difference between synchronous and asynchronous bus 
 timing.
 Explain the need for multiple buses arranged in a hierarchy.
 Assess the relative advantages of point-to-point interconnection compared 
to bus interconnection.
 Present an overview of QPI.
 Present an overview of PCIe.

3.1 / COMPUTER COMPONENTS  67
 
• Data and instructions are stored in a single read–write memory.
 
• The contents of this memory are addressable by location, without regard to 
the type of data contained there.
 
• Execution occurs in a sequential fashion (unless explicitly modified) from one 
instruction to the next.
The reasoning behind these concepts was discussed in Chapter 2 but is worth 
summarizing here. There is a small set of basic logic components that can be 
 combined in various ways to store binary data and perform arithmetic and  logical 
operations on that data. If there is a particular computation to be performed, a 
 configuration of logic components designed specifically for that computation could 
be constructed. We can think of the process of connecting the various components 
in the desired configuration as a form of programming. The resulting “program” is 
in the form of hardware and is termed a hardwired program.
Now consider this alternative. Suppose we construct a general-purpose 
 configuration of arithmetic and logic functions. This set of hardware will perform 
various functions on data depending on control signals applied to the hardware. 
In the original case of customized hardware, the system accepts data and produces 
results (Figure 3.1a). With general-purpose hardware, the system accepts data and 
control signals and produces results. Thus, instead of rewiring the hardware for each 
new program, the programmer merely needs to supply a new set of control signals.
How shall control signals be supplied? The answer is simple but subtle. The 
entire program is actually a sequence of steps. At each step, some arithmetic or 
Sequence of
arithmetic
and logic
functions
Data
Results
(a) Programming in hardware
Data
Results
Instruction
codes
General-purpose
arithmetic
and logic
functions
Control
signals
(b) Programming in software
Instruction
interpreter

68  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
 logical operation is performed on some data. For each step, a new set of control 
 signals is needed. Let us provide a unique code for each possible set of control 
 signals, and let us add to the general-purpose hardware a segment that can accept a 
code and generate control signals (Figure 3.1b).
Programming is now much easier. Instead of rewiring the hardware for each 
new program, all we need to do is provide a new sequence of codes. Each code 
is, in effect, an instruction, and part of the hardware interprets each instruction 
and  generates control signals. To distinguish this new method of programming, a 
sequence of codes or instructions is called software.
interpreter and a module of general-purpose arithmetic and logic functions. These 
two constitute the CPU. Several other components are needed to yield a functioning 
computer. Data and instructions must be put into the system. For this we need some 
sort of input module. This module contains basic components for accepting data 
and instructions in some form and converting them into an internal form of signals 
usable by the system. A means of reporting results is needed, and this is in the form 
of an output module. Taken together, these are referred to as I/O components.
One more component is needed. An input device will bring instructions and 
data in sequentially. But a program is not invariably executed sequentially; it may 
jump around (e.g., the IAS jump instruction). Similarly, operations on data may 
require access to more than just one element at a time in a predetermined sequence. 
Thus, there must be a place to store temporarily both instructions and data. That 
module is called memory, or main memory, to distinguish it from external storage or 
peripheral devices. Von Neumann pointed out that the same memory could be used 
to store both instructions and data.
among them. The CPU exchanges data with memory. For this purpose, it typically 
makes use of two internal (to the CPU) registers: a memory address register (MAR), 
which specifies the address in memory for the next read or write, and a memory 
buffer register (MBR), which contains the data to be written into memory or receives 
the data read from memory. Similarly, an I/O address register (I/OAR) specifies a 
particular I/O device. An I/O buffer (I/OBR) register is used for the exchange of 
data between an I/O module and the CPU.
A memory module consists of a set of locations, defined by sequentially 
 numbered addresses. Each location contains a binary number that can be interpreted 
as either an instruction or data. An I/O module transfers data from external devices 
to CPU and memory, and vice versa. It contains internal buffers for temporarily 
holding these data until they can be sent on.
Having looked briefly at these major components, we now turn to an overview 
of how these components function together to execute programs.
 3.2 COMPUTER FUNCTION
The basic function performed by a computer is execution of a program, which  consists 
of a set of instructions stored in memory. The processor does the actual work by 
executing instructions specified in the program. This section provides an overview of 

3.2 / COMPUTER FUNCTION  69
the key elements of program execution. In its simplest form, instruction  processing 
consists of two steps: The processor reads (fetches) instructions from memory one 
at a time and executes each instruction. Program execution consists of repeating the 
process of instruction fetch and instruction execution. The instruction execution may 
involve several operations and depends on the nature of the instruction (see, for 
example, the lower portion of Figure 2.4).
The processing required for a single instruction is called an instruction cycle. 
Using the simplified two-step description given previously, the instruction cycle is 
depicted in Figure 3.3. The two steps are referred to as the fetch cycle and the execute 
cycle. Program execution halts only if the machine is turned off, some sort of unrecov-
erable error occurs, or a program instruction that halts the computer is encountered.
Instruction Fetch and Execute
At the beginning of each instruction cycle, the processor fetches an instruction 
from memory. In a typical processor, a register called the program counter (PC) 
holds the address of the instruction to be fetched next. Unless told otherwise, the 
PC
MAR
IR
MBR
I/O AR
I/O BR
CPU
Main memory
System
bus
I/O Module
Buffers
Instruction
n – 2
n – 1
Data
Data
Data
Data
Instruction
Instruction
PC 
= 
Program counter
IR 
= 
Instruction register
MAR 
= 
Memory address register
MBR 
= 
Memory buffer register
I/O AR 
= 
Input/output address register
I/O BR 
= 
Input/output buffer register
Execution
unit

70  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
processor always increments the PC after each instruction fetch so that it will fetch 
the next instruction in sequence (i.e., the instruction located at the next higher mem-
ory address). So, for example, consider a computer in which each instruction occu-
pies one 16-bit word of memory. Assume that the program counter is set to memory 
location 300, where the location address refers to a 16-bit word. The processor will 
next fetch the instruction at location 300. On succeeding instruction cycles, it will 
fetch instructions from locations 301, 302, 303, and so on. This sequence may be 
altered, as explained presently.
The fetched instruction is loaded into a register in the processor known as 
the instruction register (IR). The instruction contains bits that specify the action 
the processor is to take. The processor interprets the instruction and performs the 
required action. In general, these actions fall into four categories:
 
• Processor-memory:  Data may be transferred from processor to memory or 
from memory to processor.
 
• Processor-I/O:  Data may be transferred to or from a peripheral device by 
transferring between the processor and an I/O module.
 
• Data processing:  The processor may perform some arithmetic or logic opera-
tion on data.
 
• Control:  An instruction may specify that the sequence of execution be altered. 
For example, the processor may fetch an instruction from location 149, which 
specifies that the next instruction be from location 182. The processor will 
 remember this fact by setting the program counter to 182. Thus, on the next 
fetch cycle, the instruction will be fetched from location 182 rather than 150.
An instruction’s execution may involve a combination of these actions.
Consider a simple example using a hypothetical machine that includes the 
characteristics listed in Figure 3.4. The processor contains a single data register, 
called an accumulator (AC). Both instructions and data are 16 bits long. Thus, it is 
convenient to organize memory using 16-bit words. The instruction format provides 
4 bits for the opcode, so that there can be as many as 24 = 16 different opcodes, and 
up to 212 = 4096 (4K) words of memory can be directly addressed.
 portions of memory and processor registers.1 The program fragment shown adds 
the contents of the memory word at address 940 to the contents of the memory 
START
HALT
Fetch next
instruction
Fetch cycle
Execute cycle
Execute
instruction
1Hexadecimal notation is used, in which each digit represents 4 bits. This is the most convenient notation for 
representing the contents of memory and registers when the word length is a multiple of 4. See Chapter 9 for 
a basic refresher on number systems (decimal, binary, hexadecimal).

3.2 / COMPUTER FUNCTION  71
Program counter (PC)  Address of instruction
Instruction register (IR)  Instruction being executed
Accumulator (AC)  Temporary storage
0001  Load  AC from memory
0010  Store AC to memory
0101  Add to AC from memory
(a) Instruction format
Opcode
Address
(b) Integer format
(c) Internal CPU registers
Magnitude
(d) Partial list of opcodes
PC
CPU registers
Memory
3 0 0
1 9 4 0
5 9 4 1
2 9 4 1
0 0 0 3
0 0 0 2
AC
IR
1 9 4 0
Step 1
••
••
••
••
••
••
PC
CPU registers
Memory
3 0 1
1 9 4 0
5 9 4 1
2 9 4 1
0 0 0 3
0 0 0 2
AC
IR
1 9 4 0
0 0 0 3
Step 2
PC
CPU registers
Memory
3 0 1
0 0 0 5
0 0 0 5
0 0 0 3
0 0 0 5
1 9 4 0
5 9 4 1
2 9 4 1
0 0 0 3
0 0 0 2
AC
IR
5 9 4 1
Step 3
PC
CPU registers
Memory
3 0 2
1 9 4 0
5 9 4 1
2 9 4 1
0 0 0 3
0 0 0 2
AC
IR
5 9 4 1
Step 4
PC
CPU registers
Memory
3 0
1 9 4 0
5 9 4 1
2 9 4 1
0 0 0 3
0 0 0 2
AC
IR
2 9 4 1
Step 5
PC
CPU registers
Memory
3 0 3
1 9 4 0
5 9 4 1
2 9 4 1
0 0 0 3
0 0 0 5
AC
IR
2 9 4 1
Step 6
3  2  5
registers in hexadecimal)

72  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
word at address 941 and stores the result in the latter location. Three instructions, 
which can be described as three fetch and three execute cycles, are required:
 
1. The PC contains 300, the address of the first instruction. This instruction (the 
value 1940 in hexadecimal) is loaded into the instruction register IR, and 
the PC is incremented. Note that this process involves the use of a memory 
 address register and a memory buffer register. For simplicity, these interme-
diate registers are ignored.
 
2. The first 4 bits (first hexadecimal digit) in the IR indicate that the AC is to be 
loaded. The remaining 12 bits (three hexadecimal digits) specify the address 
(940) from which data are to be loaded.
 
3. The next instruction (5941) is fetched from location 301, and the PC is 
 incremented.
 
4. The old contents of the AC and the contents of location 941 are added, and 
the result is stored in the AC.
 
5. The next instruction (2941) is fetched from location 302, and the PC is 
 incremented.
 
6. The contents of the AC are stored in location 941.
In this example, three instruction cycles, each consisting of a fetch cycle and an 
execute cycle, are needed to add the contents of location 940 to the contents of 941. 
With a more complex set of instructions, fewer cycles would be needed. Some older 
processors, for example, included instructions that contain more than one memory 
address. Thus, the execution cycle for a particular instruction on such processors could 
involve more than one reference to memory. Also, instead of memory references, an 
instruction may specify an I/O operation.
For example, the PDP-11 processor includes an instruction, expressed symboli-
cally as ADD B,A, that stores the sum of the contents of memory locations B and A 
into memory location A. A single instruction cycle with the following steps occurs:
 
• Fetch the ADD instruction.
 
• Read the contents of memory location A into the processor.
 
• Read the contents of memory location B into the processor. In order that the 
contents of A are not lost, the processor must have at least two registers for 
storing memory values, rather than a single accumulator.
 
• Add the two values.
 
• Write the result from the processor to memory location A.
Thus, the execution cycle for a particular instruction may involve more than one 
reference to memory. Also, instead of memory references, an instruction may specify 
an I/O operation. With these additional considerations in mind, Figure 3.6 provides 
a more detailed look at the basic instruction cycle of Figure 3.3. The figure is in the 
form of a state diagram. For any given instruction cycle, some states may be null and 
others may be visited more than once. The states can be described as follows:
 
• Instruction address calculation (iac): Determine the address of the next 
 instruction to be executed. Usually, this involves adding a fixed number to 

3.2 / COMPUTER FUNCTION  73
the address of the previous instruction. For example, if each instruction is 16 
bits long and memory is organized into 16-bit words, then add 1 to the previ-
ous  address. If, instead, memory is organized as individually addressable 8-bit 
bytes, then add 2 to the previous address.
 
• Instruction fetch (if):  Read instruction from its memory location into the 
processor.
 
• Instruction operation decoding (iod):  Analyze instruction to determine type 
of operation to be performed and operand(s) to be used.
 
• Operand address calculation (oac):  If the operation involves reference to an 
operand in memory or available via I/O, then determine the address of the 
operand.
 
• Operand fetch (of):  Fetch the operand from memory or read it in from I/O.
 
• Data operation (do):  Perform the operation indicated in the instruction.
 
• Operand store (os):  Write the result into memory or out to I/O.
States in the upper part of Figure 3.6 involve an exchange between the 
processor and either memory or an I/O module. States in the lower part of the 
diagram involve only internal processor operations. The oac state appears twice, 
because an instruction may involve a read, a write, or both. However, the action per-
formed during that state is fundamentally the same in both cases, and so only a single 
state identifier is needed.
Also note that the diagram allows for multiple operands and multiple results, 
because some instructions on some machines require this. For example, the PDP-11 
instruction ADD A,B results in the following sequence of states: iac, if, iod, oac, of, 
oac, of, do, oac, os.
Finally, on some machines, a single instruction can specify an operation to be per-
formed on a vector (one-dimensional array) of numbers or a string (one-dimensional 
Instruction
address
calculation
Instruction
operation
decoding
Operand
address
calculation
Data
operation
Operand
address
calculation
Instruction
fetch
Instruction complete,
fetch next instruction
Multiple
operands
Return for string
or vector data
Operand
fetch
Operand
store
Multiple
results

74  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
array) of characters. As Figure 3.6 indicates, this would involve repetitive operand fetch 
and/or store operations.
Interrupts
Virtually all computers provide a mechanism by which other modules (I/O,  memory) 
may interrupt the normal processing of the processor. Table 3.1 lists the most  common 
classes of interrupts. The specific nature of these interrupts is  examined later in this 
book, especially in Chapters 7 and 14. However, we need to introduce the concept 
now to understand more clearly the nature of the instruction cycle and the implica-
tions of interrupts on the interconnection structure. The reader need not be concerned 
at this stage about the details of the generation and processing of interrupts, but only 
focus on the communication between modules that results from interrupts.
Interrupts are provided primarily as a way to improve processing efficiency. 
For example, most external devices are much slower than the processor. Suppose 
that the processor is transferring data to a printer using the instruction cycle scheme 
of Figure 3.3. After each write operation, the processor must pause and remain 
idle until the printer catches up. The length of this pause may be on the order of 
many hundreds or even thousands of instruction cycles that do not involve memory. 
Clearly, this is a very wasteful use of the processor.
of WRITE calls interleaved with processing. Code segments 1, 2, and 3 refer to 
sequences of instructions that do not involve I/O. The WRITE calls are to an I/O 
program that is a system utility and that will perform the actual I/O operation. The 
I/O program consists of three sections:
 
• A sequence of instructions, labeled 4 in the figure, to prepare for the actual 
I/O operation. This may include copying the data to be output into a special 
buffer and preparing the parameters for a device command.
 
• The actual I/O command. Without the use of interrupts, once this command is 
issued, the program must wait for the I/O device to perform the requested  function 
(or periodically poll the device). The program might wait by simply repeatedly 
performing a test operation to determine if the I/O operation is done.
 
• A sequence of instructions, labeled 5 in the figure, to complete the operation. 
This may include setting a flag indicating the success or failure of the operation.
Program
Generated by some condition that occurs as a result of an instruction 
execution, such as arithmetic overflow, division by zero, attempt to 
execute an illegal machine instruction, or reference outside a user’s 
allowed memory space.
Timer
Generated by a timer within the processor. This allows the operating 
system to perform certain functions on a regular basis.
I/O
Generated by an I/O controller, to signal normal completion of an 
operation, request service from the processor, or to signal a variety of 
error conditions.
Hardware Failure
Generated by a failure such as power failure or memory parity error.

User
Program
WRITE
WRITE
WRITE
I/O
Program
I/O
Command
END
(a) No interrupts
= interrupt occurs during course of execution of user program
User
Program
WRITE
WRITE
WRITE
I/O
Program
I/O
Command
Interrupt
Handler
END
2a
2b
3a
3b
(b) Interrupts; short I/O wait
User
Program
WRITE
WRITE
WRITE
I/O
Program
I/O
Command
Interrupt
Handler
END
(c) Interrupts; long I/O wait

76  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
Because the I/O operation may take a relatively long time to complete, the I/O 
program is hung up waiting for the operation to complete; hence, the user program 
is stopped at the point of the WRITE call for some considerable period of time.
INTERRUPTS AND THE INSTRUCTION CYCLE  With interrupts, the processor can 
be engaged in executing other instructions while an I/O operation is in progress. 
Consider the flow of control in Figure 3.7b. As before, the user program reaches a 
point at which it makes a system call in the form of a WRITE call. The I/O program 
that is invoked in this case consists only of the preparation code and the actual I/O 
command. After these few instructions have been executed, control returns to the 
user program. Meanwhile, the external device is busy accepting data from computer 
memory and printing it. This I/O operation is conducted concurrently with the 
execution of instructions in the user program.
When the external device becomes ready to be serviced—that is, when it is 
ready to accept more data from the processor—the I/O module for that external 
device sends an interrupt request signal to the processor. The processor responds by 
suspending operation of the current program, branching off to a program to service 
that particular I/O device, known as an interrupt handler, and resuming the original 
execution after the device is serviced. The points at which such interrupts occur are 
indicated by an asterisk in Figure 3.7b.
Let us try to clarify what is happening in Figure 3.7. We have a user program 
that contains two WRITE commands. There is a segment of code at the beginning, 
then one WRITE command, then a second segment of code, then a second WRITE 
command, then a third and final segment of code. The WRITE command invokes the 
I/O program provided by the OS. Similarly, the I/O program consists of a  segment of 
code, followed by an I/O command, followed by another segment of code. The I/O 
command invokes a hardware I/O operation.
USER PROGRAM
8statement9
8statement9  Code segment 1 
I/O PROGRAM
  .
  . 
  .
8statement9 
 
 
8statement9
  
 
 
8statement9
WRITE 
 
 
 
Code segment 4
 
 
 
8statement9
8statement9
8statement9  Code segment 2 
I/O command
  . 
  . 
  .
8statement9 
 
 
8statement9
  
 
 
8statement9 
Code segment 5
WRITE 
 
 
  
 
8statement9
8statement9
8statement9  Code segment 3
  . 
  . 
  .
8statement9
s
s
s
s
s
. 
. 
.
. 
. 
.

3.2 / COMPUTER FUNCTION  77
From the point of view of the user program, an interrupt is just that: an  interruption 
of the normal sequence of execution. When the interrupt processing is completed, 
execution resumes (Figure 3.8). Thus, the user program does not have to contain any 
special code to accommodate interrupts; the processor and the operating system are 
responsible for suspending the user program and then resuming it at the same point.
To accommodate interrupts, an interrupt cycle is added to the instruction 
cycle, as shown in Figure 3.9. In the interrupt cycle, the processor checks to see if 
any interrupts have occurred, indicated by the presence of an interrupt signal. If no 
interrupts are pending, the processor proceeds to the fetch cycle and fetches the 
next instruction of the current program. If an interrupt is pending, the processor 
does the following:
 
• It suspends execution of the current program being executed and saves its 
context. This means saving the address of the next instruction to be executed 
i
i  1
M
•
•
•
•
•
•
•
•
•
Interrupt
occurs here
User program
Interrupt handler
Fetch cycle
Execute cycle
Interrupt cycle
Interrupts
disabled
Interrupts
enabled
START
HALT
Fetch next
instruction
Execute
instruction
Check for
interrupt;
process interrupt

78  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
(current contents of the program counter) and any other data relevant to the 
processor’s current activity.
 
• It sets the program counter to the starting address of an interrupt handler  routine.
The processor now proceeds to the fetch cycle and fetches the first instruction 
in the interrupt handler program, which will service the interrupt. The interrupt 
handler program is generally part of the operating system. Typically, this program 
determines the nature of the interrupt and performs whatever actions are needed. 
In the example we have been using, the handler determines which I/O module 
 generated the interrupt and may branch to a program that will write more data out 
to that I/O module. When the interrupt handler routine is completed, the processor 
can resume execution of the user program at the point of interruption.
It is clear that there is some overhead involved in this process. Extra instructions 
must be executed (in the interrupt handler) to determine the nature of the  interrupt 
and to decide on the appropriate action. Nevertheless, because of the relatively large 
amount of time that would be wasted by simply waiting on an I/O operation, the 
 processor can be employed much more efficiently with the use of interrupts.
To appreciate the gain in efficiency, consider Figure 3.10, which is a timing dia-
gram based on the flow of control in Figures 3.7a and 3.7b. In this figure, user pro-
gram code segments are shaded green, and I/O program code segments are shaded 
Time
I/O operation;
processor waits
I/O operation
concurrent with
processor executing
I/O operation
concurrent with
processor executing
I/O operation;
processor waits
2a
2b
3a
3b 
(a) Without interrupts
(b) With interrupts

3.2 / COMPUTER FUNCTION  79
gray. Figure 3.10a shows the case in which interrupts are not used. The processor must 
wait while an I/O operation is performed.
Figures 3.7b and 3.10b assume that the time required for the I/O operation is 
 relatively short: less than the time to complete the execution of instructions between write 
operations in the user program. In this case, the segment of code labeled code  segment 
2 is interrupted. A portion of the code (2a) executes (while the I/O operation is per-
formed) and then the interrupt occurs (upon the completion of the I/O operation). After 
the interrupt is serviced, execution resumes with the remainder of code segment 2 (2b).
The more typical case, especially for a slow device such as a printer, is that the 
I/O operation will take much more time than executing a sequence of user instruc-
tions. Figure 3.7c indicates this state of affairs. In this case, the user program reaches 
the second WRITE call before the I/O operation spawned by the first call is com-
plete. The result is that the user program is hung up at that point. When the preced-
ing I/O operation is completed, this new WRITE call may be processed, and a new 
I/O operation may be started. Figure 3.11 shows the timing for this situation with 
Time
(a) Without interrupts
(b) With interrupts
I/O operation;
processor waits
I/O operation;
processor waits
I/O operation
concurrent with
processor executing;
then processor
waits
I/O operation
concurrent with
processor executing;
then processor
waits

80  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
and without the use of interrupts. We can see that there is still a gain in efficiency 
because part of the time during which the I/O operation is under way overlaps with 
the execution of user instructions.
 interrupt cycle processing.
MULTIPLE INTERRUPTS The discussion so far has focused only on the occurrence 
of a single interrupt. Suppose, however, that multiple interrupts can occur. 
For example, a program may be receiving data from a communications line and 
printing results. The printer will generate an interrupt every time it completes a 
print operation. The communication line controller will generate an interrupt every 
time a unit of data arrives. The unit could either be a single character or a block, 
depending on the nature of the communications discipline. In any case, it is possible 
for a communications interrupt to occur while a printer interrupt is being processed.
Two approaches can be taken to dealing with multiple interrupts. The first is to 
disable interrupts while an interrupt is being processed. A disabled interrupt  simply 
means that the processor can and will ignore that interrupt request signal. If an inter-
rupt occurs during this time, it generally remains pending and will be checked by 
the processor after the processor has enabled interrupts. Thus, when a user  program 
is executing and an interrupt occurs, interrupts are disabled immediately. After the 
interrupt handler routine completes, interrupts are enabled before resuming the 
user program, and the processor checks to see if additional interrupts have occurred. 
This approach is nice and simple, as interrupts are handled in strict sequential order 
(Figure 3.13a).
The drawback to the preceding approach is that it does not take into account 
relative priority or time-critical needs. For example, when input arrives from the 
communications line, it may need to be absorbed rapidly to make room for more 
input. If the first batch of input has not been processed before the second batch 
arrives, data may be lost.
A second approach is to define priorities for interrupts and to allow an 
interrupt of higher priority to cause a lower-priority interrupt handler to be itself 
interrupted (Figure 3.13b). As an example of this second approach, consider a 
system with three I/O devices: a printer, a disk, and a communications line, with 
increasing priorities of 2, 4, and 5, respectively. Figure 3.14 illustrates a possible 
sequence. A user program begins at t = 0. At t = 10, a printer interrupt occurs; user 
information is placed on the system stack and execution continues at the printer 
interrupt service routine (ISR). While this routine is still executing, at t = 15, a 
communications interrupt occurs. Because the communications line has higher 
priority than the printer, the interrupt is honored. The printer ISR is interrupted, 
its state is pushed onto the stack, and  execution continues at the communications 
ISR. While this routine is executing, a disk interrupt occurs (t = 20). Because this 
interrupt is of lower priority, it is simply held, and the communications ISR runs 
to completion.
When the communications ISR is complete (t = 25), the previous processor 
state is restored, which is the execution of the printer ISR. However, before even a 
single instruction in that routine can be executed, the processor honors the higher-
priority disk interrupt and control transfers to the disk ISR. Only when that routine 

No
interrupt
Interrupt
check
Interrupt
Instruction
address
calculation
Instruction
operation
decoding
Operand
address
calculation
Data
operation
Operand
address
calculation
Instruction
fetch
Instruction complete,
fetch next instruction
Multiple
operands
Return for string
or vector data
Operand
fetch
Operand
store
Multiple
results

User program
Interrupt
handler X
Interrupt
handler Y
(a) Sequential interrupt processing
(b) Nested interrupt processing
User program
Interrupt
handler X
Interrupt
handler Y

3.2 / COMPUTER FUNCTION  83
is  complete (t = 35) is the printer ISR resumed. When that routine completes (t = 40), 
control finally returns to the user program.
I/O Function
Thus far, we have discussed the operation of the computer as controlled by the 
 processor, and we have looked primarily at the interaction of processor and 
 memory. The discussion has only alluded to the role of the I/O component. This 
role is discussed in detail in Chapter 7, but a brief summary is in order here.
An I/O module (e.g., a disk controller) can exchange data directly with the 
processor. Just as the processor can initiate a read or write with memory, designating 
the address of a specific location, the processor can also read data from or write data 
to an I/O module. In this latter case, the processor identifies a specific device that is 
 controlled by a particular I/O module. Thus, an instruction sequence similar in form to 
that of Figure 3.5 could occur, with I/O instructions rather than memory-referencing 
instructions.
In some cases, it is desirable to allow I/O exchanges to occur directly with 
 memory. In such a case, the processor grants to an I/O module the authority to read 
from or write to memory, so that the I/O-memory transfer can occur without tying up 
the processor. During such a transfer, the I/O module issues read or write commands 
to memory, relieving the processor of responsibility for the exchange. This operation 
is known as direct memory access (DMA) and is examined in Chapter 7.
User program
Printer
interrupt
service routine
Communication
interrupt
service routine
Disk
interrupt
service routine
t  0
t  10
t  40
t  15
t  25
t  25
t  35

84  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
 3.3 INTERCONNECTION STRUCTURES
A computer consists of a set of components or modules of three basic types 
 (processor, memory, I/O) that communicate with each other. In effect, a computer is 
a  network of basic modules. Thus, there must be paths for connecting the modules.
The collection of paths connecting the various modules is called the intercon-
nection structure. The design of this structure will depend on the exchanges that 
must be made among modules.
major forms of input and output for each module type2:
 
• Memory:  Typically, a memory module will consist of N words of equal length. 
Each word is assigned a unique numerical address (0, 1, …, N - 1). A word of 
data can be read from or written into the memory. The nature of the operation 
2The wide arrows represent multiple signal lines carrying multiple bits of information in parallel. Each 
narrow arrow represents a single signal line.
Memory
N words
•
•
•
Data
I/O module
M ports
CPU
External
data
Interrupt
signals
Internal
data
Data
Address
Control
signals
Data
Address
Write
Read
External
data
Address
Internal
data
Write
Read
Data
Instructions
Interrupt
signals
N − 1

3.4 / BUS INTERCONNECTION  85
is indicated by read and write control signals. The location for the operation is 
specified by an address.
 
• I/O module:  From an internal (to the computer system) point of view, I/O 
is functionally similar to memory. There are two operations, read and write. 
Further, an I/O module may control more than one external device. We can 
refer to each of the interfaces to an external device as a port and give each 
a unique address (e.g., 0, 1, …, M - 1). In addition, there are external data 
paths for the input and output of data with an external device. Finally, an I/O 
 module may be able to send interrupt signals to the processor.
 
• Processor:  The processor reads in instructions and data, writes out data  after 
processing, and uses control signals to control the overall operation of the 
 system. It also receives interrupt signals.
The preceding list defines the data to be exchanged. The interconnection 
structure must support the following types of transfers:
 
• Memory to processor:  The processor reads an instruction or a unit of data 
from memory.
 
• Processor to memory:  The processor writes a unit of data to memory.
 
• I/O to processor:  The processor reads data from an I/O device via an I/O 
module.
 
• Processor to I/O:  The processor sends data to the I/O device.
 
• I/O to or from memory:  For these two cases, an I/O module is allowed to ex-
change data directly with memory, without going through the processor, using 
direct memory access.
Over the years, a number of interconnection structures have been tried. By 
far the most common are (1) the bus and various multiple-bus structures, and (2) 
point-to-point interconnection structures with packetized data transfer. We devote 
the remainder of this chapter for a discussion of these structures.
 3.4 BUS INTERCONNECTION
A bus is a communication pathway connecting two or more devices. A key charac-
teristic of a bus is that it is a shared transmission medium. Multiple devices connect 
to the bus, and a signal transmitted by any one device is available for reception by 
all other devices attached to the bus. If two devices transmit during the same time 
period, their signals will overlap and become garbled. Thus, only one device at a 
time can successfully transmit.
Typically, a bus consists of multiple communication pathways, or lines. Each 
line is capable of transmitting signals representing binary 1 and binary 0. Over time, 
a sequence of binary digits can be transmitted across a single line. Taken together, 
 several lines of a bus can be used to transmit binary digits simultaneously (in parallel). 
For example, an 8-bit unit of data can be transmitted over eight bus lines.
Computer systems contain a number of different buses that provide pathways 
between components at various levels of the computer system hierarchy. A bus that 

86  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
connects major computer components (processor, memory, I/O) is called a system 
bus. The most common computer interconnection structures are based on the use of 
one or more system buses.
Bus Structure
A system bus consists, typically, of from about fifty to hundreds of separate lines. 
Each line is assigned a particular meaning or function. Although there are many 
 different bus designs, on any bus the lines can be classified into three functional 
groups (Figure 3.16): data, address, and control lines. In addition, there may be 
power distribution lines that supply power to the attached modules.
The data lines provide a path for moving data among system modules. These 
lines, collectively, are called the data bus. The data bus may consist of 32, 64, 128, or 
even more separate lines, the number of lines being referred to as the width of the 
data bus. Because each line can carry only 1 bit at a time, the number of lines deter-
mines how many bits can be transferred at a time. The width of the data bus is a key 
factor in determining overall system performance. For example, if the data bus is 
32 bits wide and each instruction is 64 bits long, then the processor must access the 
memory module twice during each instruction cycle.
The address lines are used to designate the source or destination of the data on 
the data bus. For example, if the processor wishes to read a word (8, 16, or 32 bits) 
of data from memory, it puts the address of the desired word on the address lines. 
Clearly, the width of the address bus determines the maximum possible  memory 
capacity of the system. Furthermore, the address lines are generally also used to 
address I/O ports. Typically, the higher-order bits are used to select a particular 
module on the bus, and the lower-order bits select a memory location or I/O port 
within the module. For example, on an 8-bit address bus, address 01111111 and 
below might reference locations in a memory module (module 0) with 128 words 
of memory, and address 10000000 and above refer to devices attached to an I/O 
module (module 1).
The control lines are used to control the access to and the use of the data and 
address lines. Because the data and address lines are shared by all components, 
there must be a means of controlling their use. Control signals transmit both com-
mand and timing information among system modules. Timing signals indicate the 
validity of data and address information. Command signals specify operations to be 
performed. Typical control lines include:
CPU
Memory
Memory
• • •
I/O
Bus
I/O
Control lines
Address lines
Data lines
• • •

3.4 / BUS INTERCONNECTION  87
 
• Memory write:  causes data on the bus to be written into the addressed location
 
• Memory read:  causes data from the addressed location to be placed on the 
bus
 
• I/O write:  causes data on the bus to be output to the addressed I/O port
 
• I/O read:  causes data from the addressed I/O port to be placed on the bus
 
• Transfer ACK:  indicates that data have been accepted from or placed on the 
bus
 
• Bus request:  indicates that a module needs to gain control of the bus
 
• Bus grant:  indicates that a requesting module has been granted control of the 
bus
 
• Interrupt request:  indicates that an interrupt is pending
 
• Interrupt ACK:  acknowledges that the pending interrupt has been recognized
 
• Clock:  is used to synchronize operations
 
• Reset:  initializes all modules.
The operation of the bus is as follows. If one module wishes to send data to 
another, it must do two things: (1) obtain the use of the bus, and (2) transfer data 
via the bus. If one module wishes to request data from another module, it must (1) 
obtain the use of the bus, and (2) transfer a request to the other module over the 
appropriate control and address lines. It must then wait for that second module to 
send the data.
Multiple-Bus Hierarchies
If a great number of devices are connected to the bus, performance will suffer. 
There are two main causes:
 
1. In general, the more devices attached to the bus, the greater the bus length 
and hence the greater the propagation delay. This delay determines the time 
it takes for devices to coordinate the use of the bus. When control of the bus 
passes from one device to another frequently, these propagation delays can 
noticeably affect performance.
 
2. The bus may become a bottleneck as the aggregate data transfer demand 
approaches the capacity of the bus. This problem can be countered to some 
extent by increasing the data rate that the bus can carry and by using wider 
buses (e.g., increasing the data bus from 32 to 64 bits). However, because the 
data rates generated by attached devices (e.g., graphics and video control-
lers, network interfaces) are growing rapidly, this is a race that a single bus is 
 ultimately destined to lose.
Accordingly, most bus-based computer systems use multiple buses, generally 
laid out in a hierarchy. A typical traditional structure is shown in Figure 3.17a. There 
is a local bus that connects the processor to a cache memory and that may support 
one or more local devices. The cache memory controller connects the cache not only 
to this local bus, but to a system bus to which are attached all of the main memory 
 modules. In contemporary systems, the cache is in the same chip as the processor, and 

88  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
so an external bus or other interconnect scheme is not needed, although there may 
also be an external cache. As will be discussed in Chapter 4, the use of a cache struc-
ture insulates the processor from a requirement to access main memory  frequently. 
Hence, main memory can be moved off of the local bus onto a system bus. In this way, 
I/O transfers to and from the main memory across the system bus do not  interfere 
with the processor’s activity.
Cache
System bus
Processor
Main
memory
Local I/O
controller
Expansion
bus interface
Network
SCSI
Modem
Serial
(a) Traditional bus architecture
Expansion bus
Local bus
Expansion
bus interface
FAX
SCSI
Modem
Serial
(b) High-performance architecture
FireWire
Graphic
Main
memory
Cache/
bridge
Processor
Local bus
Video
LAN
System bus
High-speed bus
Expansion bus

3.4 / BUS INTERCONNECTION  89
It is possible to connect I/O controllers directly onto the system bus. A more 
efficient solution is to make use of one or more expansion buses for this purpose. 
An expansion bus interface buffers data transfers between the system bus and the 
I/O controllers on the expansion bus. This arrangement allows the system to  support 
a wide variety of I/O devices and at the same time insulate memory-to-processor 
 traffic from I/O traffic.
to the expansion bus. Network connections include local area networks (LANs) 
such as a 10-Mbps Ethernet and connections to wide area networks (WANs) such as 
a packet-switching network. SCSI (small computer system interface) is itself a type 
of bus used to support local disk drives and other peripherals. A serial port could be 
used to support a printer or scanner.
This traditional bus architecture is reasonably efficient but begins to break 
down as higher and higher performance is seen in the I/O devices. In response to 
these growing demands, a common approach taken by industry is to build a high-
speed bus that is closely integrated with the rest of the system, requiring only a 
bridge between the processor’s bus and the high-speed bus. This arrangement is 
sometimes known as a mezzanine architecture.
bus that connects the processor to a cache controller, which is in turn connected to 
a system bus that supports main memory. The cache controller is integrated into a 
bridge, or buffering device, that connects to the high-speed bus. This bus supports 
connections to high-speed LANs, such as Fast Ethernet at 100 Mbps, video and 
graphics workstation controllers, as well as interface controllers to local peripheral 
buses, including SCSI and FireWire. The latter is a high-speed bus arrangement 
specifically designed to support high-capacity I/O devices. Lower-speed devices are 
still supported off an expansion bus, with an interface buffering traffic between the 
expansion bus and the high-speed bus.
The advantage of this arrangement is that the high-speed bus brings high-
demand devices into closer integration with the processor and at the same time is 
independent of the processor. Thus, differences in processor and high-speed bus 
speeds and signal line definitions are tolerated. Changes in processor architecture 
do not affect the high-speed bus, and vice versa.
Elements of Bus Design
Although a variety of different bus implementations exist, there are a few basic 
parameters or design elements that serve to classify and differentiate buses. Table 3.2 
lists key elements.
BUS TYPES Bus lines can be separated into two generic types: dedicated and 
multiplexed. A dedicated bus line is permanently assigned either to one function or 
to a physical subset of computer components.
An example of functional dedication is the use of separate dedicated address 
and data lines, which is common on many buses. However, it is not essential. For 
example, address and data information may be transmitted over the same set of 
lines using an Address Valid control line. At the beginning of a data transfer, the 
address is placed on the bus and the Address Valid line is activated. At this point, 

90  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
each module has a specified period of time to copy the address and determine if 
it is the addressed module. The address is then removed from the bus, and the 
same bus connections are used for the subsequent read or write data transfer. This 
method of using the same lines for multiple purposes is known as time multiplexing.
The advantage of time multiplexing is the use of fewer lines, which saves space 
and, usually, cost. The disadvantage is that more complex circuitry is needed within 
each module. Also, there is a potential reduction in performance because certain 
events that share the same lines cannot take place in parallel.
Physical dedication refers to the use of multiple buses, each of which connects 
only a subset of modules. A typical example is the use of an I/O bus to interconnect 
all I/O modules; this bus is then connected to the main bus through some type of I/O 
adapter module. The potential advantage of physical dedication is high throughput, 
because there is less bus contention. A disadvantage is the increased size and cost of 
the system.
METHOD OF ARBITRATION In all but the simplest systems, more than one module 
may need control of the bus. For example, an I/O module may need to read or write 
directly to memory, without sending the data to the processor. Because only one unit 
at a time can successfully transmit over the bus, some method of arbitration is needed. 
The various methods can be roughly classified as being either centralized arbitration 
or distributed arbitration. In a centralized scheme, a single hardware device, referred 
to as a bus controller or arbiter, is responsible for allocating time on the bus. The 
device may be a separate module or part of the processor. In a distributed scheme, 
there is no central controller. Rather, each module contains access control logic and 
the modules act together to share the bus. With both methods of arbitration, the 
purpose is to designate one device, either the processor or an I/O module, as master. 
The master may then initiate a data transfer (e.g., read or write) with some other 
device, which acts as slave for this particular exchange.
TIMING Timing refers to the way in which events are coordinated on the bus. Buses 
use either synchronous timing or asynchronous timing.
With synchronous timing, the occurrence of events on the bus is determined 
by a clock. The bus includes a clock line upon which a clock transmits a regular 
sequence of alternating 1s and 0s of equal duration. A single 1–0 transmission is 
Type
Dedicated
Multiplexed
Method of Arbitration
Centralized
Distributed
Timing
Synchronous
Asynchronous
Bus Width
Address
Data
Data Transfer Type
Read
Write
Read-modify-write
Read-after-write
Block

3.4 / BUS INTERCONNECTION  91
referred to as a clock cycle or bus cycle and defines a time slot. All other devices on 
the bus can read the clock line, and all events start at the beginning of a clock cycle. 
and write operations (see Appendix N for a description of timing diagrams). Other 
bus signals may change at the leading edge of the clock signal (with a slight reaction 
delay). Most events occupy a single clock cycle. In this simple example, the proces-
sor places a memory address on the address lines during the first clock cycle and 
may assert various status lines. Once the address lines have stabilized, the processor 
issues an address enable signal. For a read operation, the processor issues a read 
command at the start of the second cycle. A memory module recognizes the address 
and, after a delay of one cycle, places the data on the data lines. The processor reads 
the data from the data lines and drops the read signal. For a write operation, the 
processor puts the data on the data lines at the start of the second cycle and issues a 
write command after the data lines have stabilized. The memory module copies the 
information from the data lines during the third clock cycle.
Clock
Status
lines
Data
lines
Read
cycle
Address
lines
Address
enable
Read
Data
lines
Write
cycle
Write
Status signals
Stable address
Stable address
Valid data out
Valid data in
T1
T2
T3

92  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
With asynchronous timing, the occurrence of one event on a bus follows 
and depends on the occurrence of a previous event. In the simple read example of 
ing for these signals to stabilize, it issues a read command, indicating the  presence of 
valid address and control signals. The appropriate memory decodes the address and 
responds by placing the data on the data line. Once the data lines have  stabilized, 
the memory module asserts the acknowledged line to signal the processor that the 
data are available. Once the master has read the data from the data lines, it  deasserts 
the read signal. This causes the memory module to drop the data and acknowl-
edge lines. Finally, once the acknowledge line is dropped, the master removes the 
address information.
Status
lines
(a) System bus read cycle
(b) System bus write cycle
Address
lines
Read
Data
lines
Acknowledge
Status
lines
Address
lines
Write
Data
lines
Acknowledge
Status signals
Stable address
Status signals
Stable address
Valid data
Valid data

3.5 / POINT-TO-POINT INTERCONNECT  93
master places the data on the data line at the same time that it puts signals on the 
status and address lines. The memory module responds to the write command by 
copying the data from the data lines and then asserting the acknowledge line. The 
master then drops the write signal and the memory module drops the acknowl-
edge signal.
Synchronous timing is simpler to implement and test. However, it is less 
 flexible than asynchronous timing. Because all devices on a synchronous bus are 
tied to a fixed clock rate, the system cannot take advantage of advances in device 
performance. With asynchronous timing, a mixture of slow and fast devices, using 
older and newer technology, can share a bus.
 3.5 POINT-TO-POINT INTERCONNECT
The shared bus architecture was the standard approach to interconnection between 
the processor and other components (memory, I/O, and so on) for decades. But 
contemporary systems increasingly rely on point-to-point interconnection rather 
than shared buses.
The principal reason driving the change from bus to point-to-point intercon-
nect was the electrical constraints encountered with increasing the frequency of wide 
synchronous buses. At higher and higher data rates, it becomes increasingly difficult 
to perform the synchronization and arbitration functions in a timely fashion. Further, 
with the advent of multicore chips, with multiple processors and significant memory 
on a single chip, it was found that the use of a conventional shared bus on the same 
chip magnified the difficulties of increasing bus data rate and reducing bus latency 
to keep up with the processors. Compared to the shared bus, the point-to-point 
 interconnect has lower latency, higher data rate, and better scalability.
In this section, we look at an important and representative example of the 
point-to-point interconnect approach: Intel’s QuickPath Interconnect (QPI), which 
was introduced in 2008.
The following are significant characteristics of QPI and other point-to-point 
interconnect schemes:
 
• Multiple direct connections:  Multiple components within the system enjoy 
direct pairwise connections to other components. This eliminates the need for 
arbitration found in shared transmission systems.
 
• Layered protocol architecture:  As found in network environments, such as 
TCP/IP-based data networks, these processor-level interconnects use a layered 
protocol architecture, rather than the simple use of control signals found in 
shared bus arrangements.
 
• Packetized data transfer:  Data are not sent as a raw bit stream. Rather, data 
are sent as a sequence of packets, each of which includes control headers and 
error control codes.
QPI links (indicated by the green arrow pairs in the figure) form a switching fabric 

94  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
that enables data to move throughout the network. Direct QPI connections can be 
established between each pair of core processors. If core A in Figure 3.20 needs to 
access the memory controller in core D, it sends its request through either cores B 
or C, which must in turn forward that request on to the memory controller in core D. 
Similarly, larger systems with eight or more processors can be built using processors 
with three links and routing traffic through intermediate processors.
In addition, QPI is used to connect to an I/O module, called an I/O hub (IOH). 
The IOH acts as a switch directing traffic to and from I/O devices. Typically in newer 
systems, the link from the IOH to the I/O device controller uses an interconnect 
 technology called PCI Express (PCIe), described later in this chapter. The IOH trans-
lates between the QPI protocols and formats and the PCIe protocols and formats. A 
core also links to a main memory module (typically the memory uses dynamic access 
random memory (DRAM) technology) using a dedicated memory bus.
QPI is defined as a four-layer protocol architecture,3 encompassing the 
 following layers (Figure 3.21):
 
• Physical:  Consists of the actual wires carrying the signals, as well as circuitry 
and logic to support ancillary features required in the transmission and receipt 
of the 1s and 0s. The unit of transfer at the Physical layer is 20 bits, which is 
called a Phit (physical unit).
Core
A
I/O Hub
I/O Hub
Core
B
Core
C
Core
D
DRAM
I/O device
I/O device
DRAM
DRAM
DRAM
I/O device
I/O device
QPI
PCI Express
Memory bus
3The reader unfamiliar with the concept of a protocol architecture will find a brief overview in Appendix L.

3.5 / POINT-TO-POINT INTERCONNECT  95
 
• Link:  Responsible for reliable transmission and flow control. The Link layer’s 
unit of transfer is an 80-bit Flit (flow control unit).
 
• Routing:  Provides the framework for directing packets through the fabric.
 
• Protocol:  The high-level set of rules for exchanging packets of data between 
devices. A packet is comprised of an integral number of Flits.
QPI Physical Layer
84 individual links grouped as follows. Each data path consists of a pair of wires that 
transmits data one bit at a time; the pair is referred to as a lane. There are 20 data lanes 
Link
Physical
Protocol
Packets
Flits
Phits
Routing
Link
Physical
Protocol
Routing
Transmission Lanes
Intel QuickPath Interconnect Port
COMPONENT A
COMPONENT B
Fwd Clk
Reception Lanes
Rcv Clk
Reception Lanes
Rcv Clk
Transmission Lanes
Fwd Clk
Intel QuickPath Interconnect Port

96  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
in each direction (transmit and receive), plus a clock lane in each direction. Thus, QPI 
is capable of transmitting 20 bits in parallel in each direction. The 20-bit unit is referred 
to as a phit. Typical signaling speeds of the link in current products calls for operation 
at 6.4 GT/s (transfers per second). At 20 bits per transfer, that adds up to 16 GB/s, and 
since QPI links involve dedicated bidirectional pairs, the total capacity is 32 GB/s.
The lanes in each direction are grouped into four quadrants of 5 lanes each. 
In some applications, the link can also operate at half or quarter widths in order to 
reduce power consumption or work around failures.
The form of transmission on each lane is known as differential signaling, or 
balanced transmission. With balanced transmission, signals are transmitted as a 
 current that travels down one conductor and returns on the other. The binary value 
depends on the voltage difference. Typically, one line has a positive voltage value 
and the other line has zero voltage, and one line is associated with binary 1 and one 
line is associated with binary 0. Specifically, the technique used by QPI is known as 
low-voltage differential signaling (LVDS). In a typical implementation, the transmit-
ter injects a small current into one wire or the other, depending on the logic level to 
be sent. The current passes through a resistor at the receiving end, and then returns 
in the opposite direction along the other wire. The receiver senses the polarity of the 
voltage across the resistor to determine the logic level.
Another function performed by the physical layer is that it manages the transla-
tion between 80-bit flits and 20-bit phits using a technique known as multilane distri-
bution. The flits can be considered as a bit stream that is distributed across the data 
lanes in a round-robin fashion (first bit to first lane, second bit to second lane, etc.), as 
illustrated in Figure 3.23. This approach enables QPI to achieve very high data rates 
by implementing the physical link between two ports as multiple parallel channels.
QPI Link Layer
The QPI link layer performs two key functions: flow control and error control. These 
functions are performed as part of the QPI link layer protocol, and operate on the 
#2n+1
#2n
#n+2
#n+1
#n
#2
#1
bit stream of flits
#2n+1
#n+1
#1
QPI
lane 0
#2n+2
#n+2
#2
QPI
lane 1
#3n
#2n
#n
QPI
lane 19

3.5 / POINT-TO-POINT INTERCONNECT  97
level of the flit (flow control unit). Each flit consists of a 72-bit message  payload and 
an 8-bit error control code called a cyclic redundancy check (CRC). We discuss error 
control codes in Chapter 5.
A flit payload may consist of data or message information. The data flits trans-
fer the actual bits of data between cores or between a core and an IOH. The message 
flits are used for such functions as flow control, error control, and cache coherence. 
We discuss cache coherence in Chapters 5 and 17.
The flow control function is needed to ensure that a sending QPI entity does 
not overwhelm a receiving QPI entity by sending data faster than the receiver can 
process the data and clear buffers for more incoming data. To control the flow of 
data, QPI makes use of a credit scheme. During initialization, a sender is given a set 
number of credits to send flits to a receiver. Whenever a flit is sent to the receiver, 
the sender decrements its credit counters by one credit. Whenever a buffer is freed 
at the receiver, a credit is returned to the sender for that buffer. Thus, the receiver 
controls that pace at which data is transmitted over a QPI link.
Occasionally, a bit transmitted at the physical layer is changed during trans-
mission, due to noise or some other phenomenon. The error control function at the 
link layer detects and recovers from such bit errors, and so isolates higher layers 
from experiencing bit errors. The procedure works as follows for a flow of data 
from system A to system B:
 
1. As mentioned, each 80-bit flit includes an 8-bit CRC field. The CRC is a func-
tion of the value of the remaining 72 bits. On transmission, A calculates a 
CRC value for each flit and inserts that value into the flit.
 
2. When a flit is received, B calculates a CRC value for the 72-bit payload and 
compares this value with the value of the incoming CRC value in the flit. If the 
two CRC values do not match, an error has been detected.
 
3. When B detects an error, it sends a request to A to retransmit the flit that is 
in error. However, because A may have had sufficient credit to send a stream 
of flits, so that additional flits have been transmitted after the flit in error and 
before A receives the request to retransmit. Therefore, the request is for A to 
back up and retransmit the damaged flit plus all subsequent flits.
QPI Routing Layer
The Routing layer is used to determine the course that a packet will traverse across 
the available system interconnects. Routing tables are defined by firmware and 
describe the possible paths that a packet can follow. In small configurations, such as 
a two-socket platform, the routing options are limited and the routing tables quite 
simple. For larger systems, the routing table options are more complex, giving the 
flexibility of routing and rerouting traffic depending on how (1) devices are popu-
lated in the platform, (2) system resources are partitioned, and (3) reliability events 
result in mapping around a failing resource.
QPI Protocol Layer
In this layer, the packet is defined as the unit of transfer. The packet contents 
definition is standardized with some flexibility allowed to meet differing market 

98  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
segment requirements. One key function performed at this level is a cache coher-
ency protocol, which deals with making sure that main memory values held in 
multiple caches are consistent. A typical data packet payload is a block of data 
being sent to or from a cache.
 3.6 PCI EXPRESS
The peripheral component interconnect (PCI) is a popular high-bandwidth, processor-
independent bus that can function as a mezzanine or peripheral bus. Compared with 
other common bus specifications, PCI delivers better system performance for high-
speed I/O subsystems (e.g., graphic display adapters, network interface controllers, 
and disk controllers).
Intel began work on PCI in 1990 for its Pentium-based systems. Intel soon 
released all the patents to the public domain and promoted the creation of an 
industry association, the PCI Special Interest Group (SIG), to develop further and 
maintain the compatibility of the PCI specifications. The result is that PCI has been 
widely adopted and is finding increasing use in personal computer, workstation, and 
server systems. Because the specification is in the public domain and is supported 
by a broad cross section of the microprocessor and peripheral industry, PCI prod-
ucts built by different vendors are compatible.
As with the system bus discussed in the preceding sections, the bus-based PCI 
scheme has not been able to keep pace with the data rate demands of attached 
devices. Accordingly, a new version, known as PCI Express (PCIe) has been devel-
oped. PCIe, as with QPI, is a point-to-point interconnect scheme intended to replace 
bus-based schemes such as PCI.
A key requirement for PCIe is high capacity to support the needs of higher data 
rate I/O devices, such as Gigabit Ethernet. Another requirement deals with the need 
to support time-dependent data streams. Applications such as video-on-demand and 
audio redistribution are putting real-time constraints on servers too. Many communi-
cations applications and embedded PC control systems also process data in  real-time. 
Today’s platforms must also deal with multiple concurrent transfers at ever-increasing 
data rates. It is no longer acceptable to treat all data as equal—it is more important, 
for example, to process streaming data first since late real-time data is as useless as no 
data. Data needs to be tagged so that an I/O system can prioritize its flow throughout 
the platform.
PCI Physical and Logical Architecture
 complex device, also referred to as a chipset or a host bridge, connects the proces-
sor and memory subsystem to the PCI Express switch fabric comprising one or 
more PCIe and PCIe switch devices. The root complex acts as a buffering device, to 
deal with difference in data rates between I/O controllers and memory and proces-
sor components. The root complex also translates between PCIe transaction for-
mats and the processor and memory signal and control requirements. The chipset 
will typically support multiple PCIe ports, some of which attach directly to a PCIe 

3.6 / PCI EXPRESS  99
device and one or more that attach to a switch that manages multiple PCIe streams. 
PCIe links from the chipset may attach to the following kinds of devices that imple-
ment PCIe:
 
• Switch:  The switch manages multiple PCIe streams.
 
• PCIe endpoint:  An I/O device or controller that implements PCIe, such as 
a Gigabit Ethernet switch, a graphics or video controller, disk interface, or a 
communications controller.
 
• Legacy endpoint:  Legacy endpoint category is intended for existing designs 
that have been migrated to PCI Express, and it allows legacy behaviors such 
as use of I/O space and locked transactions. PCI Express endpoints are not 
permitted to require the use of I/O space at runtime and must not use locked 
transactions. By distinguishing these categories, it is possible for a system 
designer to restrict or eliminate legacy behaviors that have negative impacts 
on system performance and robustness.
 
• PCIe/PCI bridge:  Allows older PCI devices to be connected to PCIe-based 
systems.
As with QPI, PCIe interactions are defined using a protocol architecture. The 
PCIe protocol architecture encompasses the following layers (Figure 3.25):
Chipset
Core
Core
Gigabit
Ethernet
PCIe
PCIe
PCIe
PCIe
PCIe
PCIe
PCIe
PCIe–PCI
Bridge
Memory
Memory
Legacy
endpoint
PCIe
endpoint
PCIe
endpoint
PCIe
endpoint
Switch

100  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
 
• Physical:  Consists of the actual wires carrying the signals, as well as circuitry 
and logic to support ancillary features required in the transmission and receipt 
of the 1s and 0s.
 
• Data link:  Is responsible for reliable transmission and flow control. Data 
packets generated and consumed by the DLL are called Data Link Layer 
Packets (DLLPs).
 
• Transaction:  Generates and consumes data packets used to implement load/
store data transfer mechanisms and also manages the flow control of those 
packets between the two components on a link. Data packets generated and 
consumed by the TL are called Transaction Layer Packets (TLPs).
Above the TL are software layers that generate read and write requests that 
are transported by the transaction layer to the I/O devices using a packet-based 
transaction protocol.
PCIe Physical Layer
Similar to QPI, PCIe is a point-to-point architecture. Each PCIe port consists of a 
number of bidirectional lanes (note that in QPI, the lane refers to transfer in one 
direction only). Transfer in each direction in a lane is by means of differential sig-
naling over a pair of wires. A PCI port can provide 1, 4, 6, 16, or 32 lanes. In what 
follows, we refer to the PCIe 3.0 specification, introduced in late 2010.
As with QPI, PCIe uses a multilane distribution technique. Figure 3.26 shows 
an example for a PCIe port consisting of four lanes. Data are distributed to the four 
lanes 1 byte at a time using a simple round-robin scheme. At each physical lane, 
data are buffered and processed 16 bytes (128 bits) at a time. Each block of 128 bits 
is encoded into a unique 130-bit codeword for transmission; this is referred to as 
128b/130b encoding. Thus, the effective data rate of an individual lane is reduced 
by a factor of 128/130.
To understand the rationale for the 128b/130b encoding, note that unlike 
QPI, PCIe does not use its clock line to synchronize the bit stream. That is, the 
clock line is not used to determine the start and end point of each incoming bit; it 
is used for other signaling purposes only. However, it is necessary for the receiver 
to be synchronized with the transmitter, so that the receiver knows when each bit 
begins and ends. If there is any drift between the clocks used for bit transmission 
Data Link
Physical
Transaction layer
packets (TLPs)
Data link layer
packets (DLLPs)
Transaction
Data Link
Physical
Transaction

B1
B2
B3
B4
B5
B6
B7
B0
byte stream
PCIe
lane 0
B4
B0
B5
B1
B6
B2
B7
B3
128b/
130b
PCIe
lane 1
128b/
130b
PCIe
lane 2
128b/
130b
PCIe
lane 3
128b/
130b

102  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
and reception of the transmitter and receiver, errors may occur. To compensate for 
the possibility of drift, PCIe relies on the receiver synchronizing with the transmit-
ter based on the transmitted signal. As with QPI, PCIe uses differential signaling 
over a pair of wires. Synchronization can be achieved by the receiver looking for 
transitions in the data and synchronizing its clock to the transition. However, con-
sider that with a long string of 1s or 0s using differential signaling, the output is a 
constant voltage over a long period of time. Under these circumstances, any drift 
between the clocks of transmitter and receiver will result in loss of synchronization 
between the two.
A common approach, and the one used in PCIe 3.0, to overcoming the prob-
lem of a long string of bits of one value is scrambling. Scrambling, which does 
not increase the number of bits to be transmitted, is a mapping technique that 
tends to make the data appear more random. The scrambling tends to spread 
out the number of transitions so that they appear at the receiver more uniformly 
spaced, which is good for synchronization. Also, other transmission properties, 
such as spectral properties, are enhanced if the data are more nearly of a random 
nature rather than constant or repetitive. For more discussion of scrambling, see 
Appendix M.
Another technique that can aid in synchronization is encoding, in which addi-
tional bits are inserted into the bit stream to force transitions. For PCIe 3.0, each 
group of 128 bits of input is mapped into a 130-bit block by adding a 2-bit block sync 
header. The value of the header is 10 for a data block and 01 for what is called an 
ordered set block, which refers to a link-level information block.
mitted are fed into a scrambler. The scrambled output is then fed into a 128b/130b 
encoder, which buffers 128 bits and then maps the 128-bit block into a 130-bit block. 
This block then passes through a parallel-to-serial converter and transmitted one bit 
at a time using differential signaling.
At the receiver, a clock is synchronized to the incoming data to recover the 
bit stream. This then passes through a serial-to-parallel converter to produce a 
stream of 130-bit blocks. Each block is passed through a 128b/130b decoder to 
recover the original scrambled bit pattern, which is then descrambled to produce 
the original bit stream.
Using these techniques, a data rate of 16 GB/s can be achieved. One final 
detail to mention. Each transmission of a block of data over a PCI link begins and 
ends with an 8-bit framing sequence intended to give the receiver time to synchro-
nize with the incoming physical layer bit stream.
PCIe Transaction Layer
The transaction layer (TL) receives read and write requests from the software above 
the TL and creates request packets for transmission to a destination via the link 
layer. Most transactions use a split transaction technique, which works in the follow-
ing fashion. A request packet is sent out by a source PCIe device, which then waits 
for a response, called a completion packet. The completion following a request is 
initiated by the completer only when it has the data and/or status ready for delivery. 
Each packet has a unique identifier that enables completion packets to be directed 

3.6 / PCI EXPRESS  103
to the correct originator. With the split transaction technique, the completion is 
separated in time from the request, in contrast to a typical bus operation in which 
both sides of a transaction must be available to seize and use the bus. Between the 
request and the completion, other PCIe traffic may use the link.
TL messages and some write transactions are posted transactions, meaning 
that no response is expected.
The TL packet format supports 32-bit memory addressing and extended 64-bit 
memory addressing. Packets also have attributes such as “no-snoop,” “relaxedorder-
ing,” and “priority,” which may be used to optimally route these packets through the 
I/O subsystem.
ADDRESS SPACES AND TRANSACTION TYPES The TL supports four address spaces:
 
• Memory:  The memory space includes system main memory. It also includes 
PCIe I/O devices. Certain ranges of memory addresses map into I/O devices.
 
• I/O:  This address space is used for legacy PCI devices, with reserved memory 
address ranges used to address legacy I/O devices.
Scrambler
Differential
Receiver
Data recovery
circuit
Clock recovery
circuit
8b
130b
128b
130b
1b
1b
1b
128b/130b Encoding
Parallel to serial
(a) Transmitter
Serial to parallel
Transmitter Differential
Driver
128b/130b Decoding
Descrambler
(b) Receiver
8b
8b
D+
D–
D+
D–

104  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
 
• Configuration:  This address space enables the TL to read/write configuration 
registers associated with I/O devices.
 
• Message:  This address space is for control signals related to interrupts, error 
handling, and power management.
configuration address spaces, there are read and write transactions. In the case of 
memory transactions, there is also a read lock request function. Locked operations 
occur as a result of device drivers requesting atomic access to registers on a PCIe 
device. A device driver, for example, can atomically read, modify, and then write 
to a device register. To accomplish this, the device driver causes the processor to 
execute an instruction or set of instructions. The root complex converts these proc-
essor instructions into a sequence of PCIe transactions, which perform individual 
read and write requests for the device driver. If these transactions must be executed 
atomically, the root complex locks the PCIe link while executing the transactions. 
This locking prevents transactions that are not part of the sequence from occur-
ring. This sequence of transactions is called a locked operation. The particular set 
Address Space
TLP Type
Purpose
Memory
Memory Read Request
Memory Read Lock  
Request
Memory Write Request
Transfer data to or from a location in the 
system memory map.
I/O
I/O Read Request
I/O Write Request
Transfer data to or from a location in the  
system memory map for legacy devices.
Configuration
Config Type 0 Read  
Request
Config Type 0 Write  
Request
Config Type 1 Read  
Request
Config Type 1 Write  
Request
Transfer data to or from a location in the  
configuration space of a PCIe device.
Message
Message Request
Message Request with  
Data
Provides in-band messaging and  
event reporting.
Memory, I/O, 
Configuration
Completion
Completion with Data
Completion Locked
Completion Locked with  
Data
Returned for certain requests.

3.6 / PCI EXPRESS  105
of processor instructions that can cause a locked operation to occur depends on the 
system chip set and processor architecture.
To maintain compatibility with PCI, PCIe supports both Type 0 and Type 1 con-
figuration cycles. A Type 1 cycle propagates downstream until it reaches the bridge 
interface hosting the bus (link) that the target device resides on. The configuration 
transaction is converted on the destination link from Type 1 to Type 0 by the bridge.
Finally, completion messages are used with split transactions for memory, I/O, 
and configuration transactions.
TLP PACKET ASSEMBLY PCIe transactions are conveyed using transaction 
layer packets, which are illustrated in Figure 3.28a. A TLP originates in the 
STP framing
Sequence number
ECRC
LCRC
(a) Transaction Layer Packet
(b) Data Link Layer Packet
STP framing
Appended by Physical Layer
Appended by Data Link Layer
Created by Transaction Layer
Created
by DLL
12 or 16
0 to 4096
0 or 4
Number
of octets
Data
Header
Start
DLLP
End
CRC
Appended by PL

106  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
transaction layer of the sending device and terminates at the transaction layer of 
the receiving device.
Upper layer software sends to the TL the information needed for the TL to 
create the core of the TLP, which consists of the following fields:
 
• Header:  The Header describes the type of packet and includes information 
needed by the receiver to process the packet, including any needed routing 
information. The internal header format is discussed subsequently.
 
• Data:  A Data field of up to 4096 bytes may be included in the TLP. Some 
TLPs do not contain a Data field.
 
• ECRC:  An optional end-to-end CRC field enables the destination TL layer to 
check for errors in the Header and Data portions of the TLP.
An example of a TLP header format, used for a memory request transaction, 
is shown in Figure 3.29. The fields shaded green indicate fields that are present in 
all headers. In addition to fields reserved for future use (R), these fields include the 
following:
 
• Length:  Length of the Data field in double words (DW), where one DW = 
4 bytes.
 
• Attributes:  Consists of two bits. The relaxed ordering bit indicates whether 
strict or relaxed ordering is used. With relaxed ordering, a transaction may 
be completed prior to other transactions that were already enqueued. The no 
snoop bit, when set, indicates that no cache coherency issues exist with respect 
to this TLP.
 
• EP:  Poisoned data bit. If set, this bit indicates the data in this TLP should be con-
sidered invalid, although the transaction is being allowed to complete normally.
 
• TE:  TLP digest field present. If set, indicates that the ECRC field is present.
 
• Traffic Class:  A 3-bit traffic class can be assigned to a traffic flow to enable 
PCIe to prioritize service.
 
• Type, Format:  These two fields, totaling 7 bits, specify transaction type, 
header size, and whether a data field is present.
Type
Requestor ID
Tag
Address [63:32]
Address [31:2]
R
R
Fmt
Length
32 bits
16 octets
Attr
R
R
R Traffic
Class
T
E
Last
DW BE
First
DW BE
E
P

3.6 / PCI EXPRESS  107
 
• First DW Byte Enables:  These four bits indicate, respectively, whether the 
corresponding byte in the first DW is valid.
 
• Last DW Byte Enables:  These four bits indicate, respectively, whether the 
corresponding byte in the last DW is valid. This and the preceding field have 
the effect of allowing smaller transfers that a full DW and offsetting the start 
and end addresses from the DW boundary.
Requestor ID identifies the memory requestor, telling the completer where to send 
its response. The Tag is a number assigned to this transaction by the requestor; the 
completer must include this Tag in its response so that the requestor can match 
request and response. The Address field indicates the starting memory address to 
be read from.
PCIe Data Link Layer
The purpose of the PCIe data link layer is to ensure reliable delivery of packets 
across the PCIe link. The DLL participates in the formation of TLPs and also trans-
mits DLLPs.
DATA LINK LAYER PACKETS Data link layer packets originate at the data link 
layer of a transmitting device and terminate at the DLL of the device on the 
other end of the link. Figure 3.29b shows the format of a DLLP. There are three 
important groups of DLLPs used in managing a link: flow control packets, power 
management packets, and TLP ACK and NAK packets. Power management 
packets are used in managing power platform budgeting. Flow control packets 
regulate the rate at which TLPs and DLLPs can be transmitted across a link. The 
ACK and NAK packets are used in TLP processing, discussed in the following 
paragraphs.
TRANSACTION LAYER PACKET PROCESSING The DLL adds two fields to the 
core of the TLP created by the TL (Figure 3.29a): a 16-bit sequence number and a 
32-bit link-layer CRC (LCRC). Whereas the core fields created at the TL are only 
used at the destination TL, the two fields added by the DLL are processed at each 
intermediate node on the way from source to destination.
When a TLP arrives at a device, the DLL strips off the sequence number and 
LCRC fields and checks the LCRC. There are two possibilities:
 
1. If no errors are detected, the core portion of the TLP is handed up to the local 
transaction layer. If this receiving device is the intended destination, then the 
TL processes the TLP. Otherwise, the TL determines a route for the TLP and 
passes it back down to the DLL for transmission over the next link on the way 
to the destination.
 
2. If an error is detected, the DLL schedules an NAK DLL packet to return back 
to the remote transmitter. The TLP is eliminated.
When the DLL transmits a TLP, it retains a copy of the TLP. If it receives 
an NAK for the TLP with this sequence number, it retransmits the TLP. When it 
receives an ACK, it discards the buffered TLP.

108  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
address bus
address lines
arbitration
asynchronous timing
balanced transmission
bus
bus width
centralized arbitration
control lines
data bus
data lines
differential signaling
disabled interrupt
distributed arbitration
error control function
execute cycle
fetch cycle
flit
flow control function
instruction cycle
interrupt
interrupt handler
interrupt service routine (ISR)
lane
memory address register 
(MAR)
memory buffer register (MBR)
multilane distribution
Packets
PCI Express (PCIe)
peripheral component  
interconnect (PCI)
phit
QuickPath Interconnect 
(QPI)
root complex
synchronous timing
system bus
 3.8 KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS
Key Terms
 3.7 RECOMMENDED READING
[SING10] provides a good overview of QPI. For a thorough discussion, see [MADD09]. 
[KOLB05] is a good overview of PCIe. The clearest book-length description of PCIe is 
[WILE03].
KOLB05 Kolbehdari, M., et al. “The Emergence of PCI Express* in the Next Genera-
tion of Mobile Platforms.” Intel Technology Journal, February 2005.
MADD09 Maddox, R., et al. Weaving High Performance Multiprocessor Fabric: Archi-
tectural Insights to the Intel QuickPath Interconnect. Hillsboro, OR: Intel Press, 2009.
SING10 Singh, G., et al. “The Feeding of High-Performance Processor Cores—Quickpath 
Interconnects and the New I/O Hubs.” Intel Technology Journal, September 2010.
WILE03 Wilen, A.; Schade, J.; and Thronburg, R. Introduction to PCI Express—A 
Hardware and Software Developers Guide. Hillsboro, OR: Intel Press, 2003.
Review Questions
 3.1 
What general categories of functions are specified by computer instructions?
 3.2 
List and briefly define the possible states that define an instruction execution.
 3.3 
List and briefly define two approaches to dealing with multiple interrupts.
 3.4 
What types of transfers must a computer’s interconnection structure (e.g., bus) support?
 3.5 
What is the benefit of using a multiple-bus architecture compared to a single-bus 
 architecture?
 3.6 
List and briefly define the QPI protocol layers.
 3.7 
List and briefly define the PCIe protocol layers.

3.8 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS  109
Problems
 3.1 
The hypothetical machine of Figure 3.4 also has two I/O instructions:
0011 = Load AC from I/O
0111 = Store AC to I/O
In these cases, the 12-bit address identifies a particular I/O device. Show the program 
execution (using the format of Figure 3.5) for the following program:
1. Load AC from device 5.
2. Add contents of memory location 940.
3. Store AC to device 6.
Assume that the next value retrieved from device 5 is 3 and that location 940 contains 
a value of 2.
 3.2 
The program execution of Figure 3.5 is described in the text using six steps. Expand 
this description to show the use of the MAR and MBR.
 3.3 
Consider a hypothetical 32-bit microprocessor having 32-bit instructions composed of 
two fields: the first byte contains the opcode and the remainder the immediate oper-
and or an operand address.
a. What is the maximum directly addressable memory capacity (in bytes)?
b. Discuss the impact on the system speed if the microprocessor bus has
1. a 32-bit local address bus and a 16-bit local data bus, or
2. a 16-bit local address bus and a 16-bit local data bus.
c. How many bits are needed for the program counter and the instruction register?
 3.4 
Consider a hypothetical microprocessor generating a 16-bit address (for example, 
 assume that the program counter and the address registers are 16 bits wide) and hav-
ing a 16-bit data bus.
a. What is the maximum memory address space that the processor can access  directly 
if it is connected to a “16-bit memory”?
b. What is the maximum memory address space that the processor can access  directly 
if it is connected to an “8-bit memory”?
c. What architectural features will allow this microprocessor to access a separate 
“I/O space”?
d. If an input and an output instruction can specify an 8-bit I/O port number, how 
many 8-bit I/O ports can the microprocessor support? How many 16-bit I/O ports? 
Explain.
 3.5 
Consider a 32-bit microprocessor, with a 16-bit external data bus, driven by an 8-MHz 
input clock. Assume that this microprocessor has a bus cycle whose minimum dura-
tion equals four input clock cycles. What is the maximum data transfer rate across 
the bus that this microprocessor can sustain, in bytes/s? To increase its performance, 
would it be better to make its external data bus 32 bits or to double the external clock 
frequency supplied to the microprocessor? State any other assumptions you make, 
and explain. Hint: Determine the number of bytes that can be transferred per bus 
cycle.
 3.6 
Consider a computer system that contains an I/O module controlling a simple key-
board/printer teletype. The following registers are contained in the processor and con-
nected directly to the system bus:
INPR: Input Register, 8 bits
OUTR: Output Register, 8 bits
FGI: Input Flag, 1 bit
FGO: Output Flag, 1 bit
IEN: Interrupt Enable, 1 bit
Keystroke input from the teletype and printer output to the teletype are controlled 
by the I/O module. The teletype is able to encode an alphanumeric symbol to an 8-bit 
word and decode an 8-bit word into an alphanumeric symbol.

110  CHAPTER 3 / A TOP-LEVEL VIEW OF COMPUTER FUNCTION
a. Describe how the processor, using the first four registers listed in this problem, can 
achieve I/O with the teletype.
b. Describe how the function can be performed more efficiently by also employing 
IEN.
 3.7 
Consider two microprocessors having 8- and 16-bit-wide external data buses, respec-
tively. The two processors are identical otherwise and their bus cycles take just as long.
a. Suppose all instructions and operands are two bytes long. By what factor do the 
maximum data transfer rates differ?
b. Repeat assuming that half of the operands and instructions are one byte long.
 3.8 
lete bus scheme known as Multibus I. Agents are daisy-chained physically in priority 
order. The left-most agent in the diagram receives a constant bus priority in (BPRN) 
signal indicating that no higher-priority agent desires the bus. If the agent does not 
require the bus, it asserts its bus priority out (BPRO) line. At the beginning of a clock 
cycle, any agent can request control of the bus by lowering its BPRO line. This lowers 
the BPRN line of the next agent in the chain, which is in turn required to lower its 
BPRO line. Thus, the signal is propagated the length of the chain. At the end of this 
chain reaction, there should be only one agent whose BPRN is asserted and whose 
BPRO is not. This agent has priority. If, at the beginning of a bus cycle, the bus is not 
busy (BUSY inactive), the agent that has priority may seize control of the bus by 
 asserting the BUSY line.
It takes a certain amount of time for the BPR signal to propagate from the highest-
priority agent to the lowest. Must this time be less than the clock cycle? Explain.
 3.9 
The VAX SBI bus uses a distributed, synchronous arbitration scheme. Each SBI 
device (i.e., processor, memory, I/O module) has a unique priority and is assigned a 
unique transfer request (TR) line. The SBI has 16 such lines (TR0, TR1, …, TR15), 
with TR0 having the highest priority. When a device wants to use the bus, it places a 
reservation for a future time slot by asserting its TR line during the current time slot. 
At the end of the current time slot, each device with a pending reservation examines 
the TR lines; the highest-priority device with a reservation uses the next time slot.
A maximum of 17 devices can be attached to the bus. The device with priority 
16 has no TR line. Why not?
 3.10 
On the VAX SBI, the lowest-priority device usually has the lowest average wait time. 
For this reason, the processor is usually given the lowest priority on the SBI. Why does 
the priority 16 device usually have the lowest average wait time? Under what circum-
stances would this not be true?
 3.11 
For a synchronous read operation (Figure 3.18), the memory module must place the 
data on the bus sufficiently ahead of the falling edge of the Read signal to allow for 
Bus
terminator
Bus
terminator
BPRN
BPRO
BPRN
BPRO
BPRN
BPRO
(highest priority)
Master 1
Master 2
Master 3
(lowest priority)

3.8 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS  111
signal settling. Assume a microprocessor bus is clocked at 10 MHz and that the Read 
signal begins to fall in the middle of the second half of T3.
a. Determine the length of the memory read instruction cycle.
b. When, at the latest, should memory data be placed on the bus? Allow 20 ns for the 
settling of data lines.
 3.12 
Consider a microprocessor that has a memory read timing as shown in Figure 3.18. 
After some analysis, a designer determines that the memory falls short of providing 
read data on time by about 180 ns.
a. How many wait states (clock cycles) need to be inserted for proper system opera-
tion if the bus clocking rate is 8 MHz?
b. To enforce the wait states, a Ready status line is employed. Once the processor 
has issued a Read command, it must wait until the Ready line is asserted before 
attempting to read data. At what time interval must we keep the Ready line low in 
order to force the processor to insert the required number of wait states?
 3.13 
A microprocessor has a memory write timing as shown in Figure 3.18. Its manufac-
turer specifies that the width of the Write signal can be determined by T – 50, where 
T is the clock period in ns.
a. What width should we expect for the Write signal if bus clocking rate is 5 MHz?
b. The data sheet for the microprocessor specifies that the data remain valid for 
20 ns after the falling edge of the Write signal. What is the total duration of valid 
data presentation to memory?
c. How many wait states should we insert if memory requires valid data presentation 
for at least 190 ns?
 3.14 
A microprocessor has an increment memory direct instruction, which adds 1 to the 
value in a memory location. The instruction has five stages: fetch opcode (four bus 
clock cycles), fetch operand address (three cycles), fetch operand (three cycles), add 1 
to operand (three cycles), and store operand (three cycles).
a. By what amount (in percent) will the duration of the instruction increase if we have 
to insert two bus wait states in each memory read and memory write operation?
b. Repeat assuming that the increment operation takes 13 cycles instead of 3 cycles.
 3.15 
The Intel 8088 microprocessor has a read bus timing similar to that of Figure 3.18, 
but requires four processor clock cycles. The valid data is on the bus for an amount 
of time that extends into the fourth processor clock cycle. Assume a processor clock 
rate of 8 MHz.
a. What is the maximum data transfer rate?
b. Repeat but assume the need to insert one wait state per byte transferred.
 3.16 
The Intel 8086 is a 16-bit processor similar in many ways to the 8-bit 8088. The 8086 
uses a 16-bit bus that can transfer 2 bytes at a time, provided that the lower-order 
byte has an even address. However, the 8086 allows both even- and odd-aligned word 
operands. If an odd-aligned word is referenced, two memory cycles, each consisting of 
four bus cycles, are required to transfer the word. Consider an instruction on the 8086 
that involves two 16-bit operands. How long does it take to fetch the operands? Give 
the range of possible answers. Assume a clocking rate of 4 MHz and no wait states.
 3.17 
Consider a 32-bit microprocessor whose bus cycle is the same duration as that of a 
16-bit microprocessor. Assume that, on average, 20% of the operands and instruc-
tions are 32 bits long, 40% are 16 bits long, and 40% are only 8 bits long. Calculate 
the improvement achieved when fetching instructions and operands with the 32-bit 
microprocessor.
 3.18 
The microprocessor of Problem 3.14 initiates the fetch operand stage of the incre-
ment memory direct instruction at the same time that a keyboard actives an interrupt 
request line. After how long does the processor enter the interrupt processing cycle? 
Assume a bus clocking rate of 10 MHz.

CHAPTER
CACHE MEMORY
4.1 
Computer Memory System Overview
Characteristics of Memory Systems
The Memory Hierarchy
4.2 
Cache Memory Principles
4.3 
Elements of Cache Design
Cache Addresses
Cache Size
Mapping Function
Replacement Algorithms
Write Policy
Line Size
Number of Caches
4.4 
Pentium 4 Cache Organization
4.5 
ARM Cache Organization
4.6 
Recommended Reading
4.7 
Key Terms, Review Questions, and Problems
Appendix 4A Performance Characteristics of Two-Level Memories
Locality
Operation of Two-Level Memory
Performance

4.1 / COMPUTER MEMORY SYSTEM OVERVIEW  113
Although seemingly simple in concept, computer memory exhibits perhaps the wid-
est range of type, technology, organization, performance, and cost of any feature 
of a computer system. No single technology is optimal in satisfying the memory 
requirements for a computer system. As a consequence, the typical computer 
system is equipped with a hierarchy of memory subsystems, some internal to the 
system (directly accessible by the processor) and some external (accessible by the 
processor via an I/O module).
This chapter and the next focus on internal memory elements, while Chapter 6 
is devoted to external memory. To begin, the first section examines key characteristics 
of computer memories. The remainder of the chapter examines an essential  element 
of all modern computer systems: cache memory.
 4.1 COMPUTER MEMORY SYSTEM OVERVIEW
Characteristics of Memory Systems
The complex subject of computer memory is made more manageable if we classify 
memory systems according to their key characteristics. The most important of these 
are listed in Table 4.1.
The term location in Table 4.1 refers to whether memory is internal and exter-
nal to the computer. Internal memory is often equated with main memory. But there 
are other forms of internal memory. The processor requires its own local memory, in 
the form of registers (e.g., see Figure 2.3). Further, as we shall see, the control unit 
portion of the processor may also require its own internal memory. We will defer 
discussion of these latter two types of internal memory to later chapters. Cache is 
another form of internal memory. External memory consists of peripheral storage 
devices, such as disk and tape, that are accessible to the processor via I/O controllers.
An obvious characteristic of memory is its capacity. For internal memory, this is 
typically expressed in terms of bytes (1 byte = 8 bits) or words. Common word lengths 
are 8, 16, and 32 bits. External memory capacity is typically expressed in terms of bytes.
A related concept is the unit of transfer. For internal memory, the unit 
of transfer is equal to the number of electrical lines into and out of the memory 
LEARNING OBJECTIVES
After studying this chapter, you should be able to:
 Present an overview of the main characteristics of computer memory systems 
and the use of a memory hierarchy.
 Describe the basic concepts and intent of cache memory.
 Discuss the key elements of cache design.
 Distinguish among direct mapping, associative mapping, and set-associative 
mapping.
 Explain the reasons for using multiple levels of cache.
 Understand the performance implications of multiple levels of memory.


CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
In Chapter 12, we focused on what an instruction set does. Specifically, we examined 
the types of operands and operations that may be specified by machine instructions. 
This chapter turns to the question of how to specify the operands and operations of 
instructions. Two issues arise. First, how is the address of an operand specified, and 
second, how are the bits of an instruction organized to define the operand addresses 
and operation of that instruction?
 13.1 ADDRESSING MODES
The address field or fields in a typical instruction format are relatively small. We 
would like to be able to reference a large range of locations in main memory or, for 
some systems, virtual memory. To achieve this objective, a variety of addressing 
techniques has been employed. They all involve some trade-off between address 
range and/or addressing flexibility, on the one hand, and the number of memory 
references in the instruction and/or the complexity of address calculation, on the 
other. In this section, we examine the most common addressing techniques, or 
modes:
 
• Immediate
 
• Direct
 
• Indirect
 
• Register
 
• Register indirect
 
• Displacement
 
• Stack
These modes are illustrated in Figure 13.1. In this section, we use the following 
notation:
A = contents of an address field in the instruction
R = contents of an address field in the instruction that refers to a register
LEARNING OBJECTIVES
After studying this chapter, you should be able to:
 Describe the various types of addressing modes common in instruction sets.
 Present an overview of x86 and ARM addressing modes.
 Summarize the issues and trade-offs involved in designing an instruction 
format.
 Present an overview of x86 and ARM instruction formats.
 Understand the distinction between machine language and assembly 
 language.

13.1 / ADDRESSING MODES  453
EA = actual (effective) address of the location containing the referenced 
operand
(X) = contents of memory location X or register X
mode.
(b) Direct
Memory
Instruction
A
Operand
(a) Immediate
Instruction
Operand
Registers
(d) Register
Instruction
R
(c) Indirect
Memory
Instruction
A
Registers
(f) Displacement
Memory
Instruction
A
R
Registers
(e) Register indirect
Memory
Instruction
R
Top of stack
register
(g) Stack
Implicit
Instruction
Operand
Operand
Operand


454  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
Before beginning this discussion, two comments need to be made. First, virtu-
ally all computer architectures provide more than one of these addressing modes. 
The question arises as to how the processor can determine which address mode 
is being used in a particular instruction. Several approaches are taken. Often, dif-
ferent opcodes will use different addressing modes. Also, one or more bits in the 
instruction format can be used as a mode field. The value of the mode field deter-
mines which addressing mode is to be used.
The second comment concerns the interpretation of the effective address 
(EA). In a system without virtual memory, the effective address will be either a main 
memory address or a register. In a virtual memory system, the effective address is a 
virtual address or a register. The actual mapping to a physical address is a function 
of the memory management unit (MMU) and is invisible to the programmer.
Immediate Addressing
The simplest form of addressing is immediate addressing, in which the operand 
value is present in the instruction
Operand = A
This mode can be used to define and use constants or set initial values of variables. 
Typically, the number will be stored in twos complement form; the leftmost bit of 
the operand field is used as a sign bit. When the operand is loaded into a data reg-
ister, the sign bit is extended to the left to the full data word size. In some cases, the 
immediate binary value is interpreted as an unsigned nonnegative integer.
The advantage of immediate addressing is that no memory reference other 
than the instruction fetch is required to obtain the operand, thus saving one mem-
ory or cache cycle in the instruction cycle. The disadvantage is that the size of the 
number is restricted to the size of the address field, which, in most instruction sets, 
is small compared with the word length.
Direct Addressing
A very simple form of addressing is direct addressing, in which the address field 
contains the effective address of the operand:
EA = A
Mode
Algorithm
Principal Advantage
Principal Disadvantage
Immediate
Operand = A
No memory reference
Limited operand magnitude
Direct
EA = A
Simple
Limited address space
Indirect
EA = (A)
Large address space
Multiple memory references
Register
EA = R
No memory reference
Limited address space
Register indirect
EA = (R)
Large address space
Extra memory reference
Displacement
EA = A + (R)
Flexibility
Complexity
Stack
EA = top of stack
No memory reference
Limited applicability

13.1 / ADDRESSING MODES  455
The technique was common in earlier generations of computers but is not com-
mon on contemporary architectures. It requires only one memory reference and 
no special calculation. The obvious limitation is that it provides only a limited 
address space.
Indirect Addressing
With direct addressing, the length of the address field is usually less than the word 
length, thus limiting the address range. One solution is to have the address field refer 
to the address of a word in memory, which in turn contains a full-length address of 
the operand. This is known as indirect addressing:
EA = (A)
As defined earlier, the parentheses are to be interpreted as meaning contents of. 
The obvious advantage of this approach is that for a word length of N, an address space 
of 2N is now available. The disadvantage is that instruction execution requires two mem-
ory references to fetch the operand: one to get its address and a second to get its value.
Although the number of words that can be addressed is now equal to 2N, the 
number of different effective addresses that may be referenced at any one time is 
limited to 2K, where K is the length of the address field. Typically, this is not a bur-
densome restriction, and it can be an asset. In a virtual memory environment, all 
the effective address locations can be confined to page 0 of any process. Because 
the address field of an instruction is small, it will naturally produce low-numbered 
direct addresses, which would appear in page 0. (The only restriction is that the 
page size must be greater than or equal to 2K.) When a process is active, there will 
be repeated references to page 0, causing it to remain in real memory. Thus, an indi-
rect memory reference will involve, at most, one page fault rather than two.
A rarely used variant of indirect addressing is multilevel or cascaded indirect 
addressing:
EA = (c(A)c)
In this case, one bit of a full-word address is an indirect flag (I). If the I bit is 0, 
then the word contains the EA. If the I bit is 1, then another level of indirection is 
invoked. There does not appear to be any particular advantage to this approach, 
and its disadvantage is that three or more memory references could be required to 
fetch an operand.
Register Addressing
Register addressing is similar to direct addressing. The only difference is that the 
address field refers to a register rather than a main memory address:
EA = R
To clarify, if the contents of a register address field in an instruction is 5, 
then register R5 is the intended address, and the operand value is contained in R5. 
Typically, an address field that references registers will have from 3 to 5 bits, so that 
a total of from 8 to 32 general-purpose registers can be referenced.

456  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
The advantages of register addressing are that (1) only a small address field 
is needed in the instruction, and (2) no time-consuming memory references are 
required. As was discussed in Chapter 4, the memory access time for a register 
internal to the processor is much less than that for a main memory address. The 
disadvantage of register addressing is that the address space is very limited.
If register addressing is heavily used in an instruction set, this implies that the 
processor registers will be heavily used. Because of the severely limited number of 
registers (compared with main memory locations), their use in this fashion makes 
sense only if they are employed efficiently. If every operand is brought into a regis-
ter from main memory, operated on once, and then returned to main memory, then 
a wasteful intermediate step has been added. If, instead, the operand in a register 
remains in use for multiple operations, then a real savings is achieved. An example 
is the intermediate result in a calculation. In particular, suppose that the algorithm 
for twos complement multiplication were to be implemented in software. The loca-
tion labeled A in the flowchart (Figure 10.12) is referenced many times and should 
be implemented in a register rather than a main memory location.
It is up to the programmer or compiler to decide which values should remain 
in registers and which should be stored in main memory. Most modern processors 
employ multiple general-purpose registers, placing a burden for efficient execution 
on the assembly-language programmer (e.g., compiler writer).
Register Indirect Addressing
Just as register addressing is analogous to direct addressing, register indirect 
addressing is analogous to indirect addressing. In both cases, the only difference is 
whether the address field refers to a memory location or a register. Thus, for regis-
ter indirect address,
EA = (R)
The advantages and limitations of register indirect addressing are basically the same 
as for indirect addressing. In both cases, the address space limitation (limited range 
of addresses) of the address field is overcome by having that field refer to a word-
length location containing an address. In addition, register indirect addressing uses 
one less memory reference than indirect addressing.
Displacement Addressing
A very powerful mode of addressing combines the capabilities of direct addressing 
and register indirect addressing. It is known by a variety of names depending on 
the context of its use, but the basic mechanism is the same. We will refer to this as 
displacement addressing:
EA = A + (R)
Displacement addressing requires that the instruction have two address fields, 
at least one of which is explicit. The value contained in one address field 
(value = A) is used directly. The other address field, or an implicit reference 
based on opcode, refers to a register whose contents are added to A to produce 
the effective address.

13.1 / ADDRESSING MODES  457
We will describe three of the most common uses of displacement addressing:
 
• Relative addressing
 
• Base-register addressing
 
• Indexing
RELATIVE ADDRESSING For relative addressing, also called PC-relative addressing, 
the implicitly referenced register is the program counter (PC). That is, the next 
instruction address is added to the address field to produce the EA. Typically, the 
address field is treated as a twos complement number for this operation. Thus, the 
effective address is a displacement relative to the address of the instruction.
Relative addressing exploits the concept of locality that was discussed in Chapters 
4 and 8. If most memory references are relatively near to the instruction being exe-
cuted, then the use of relative addressing saves address bits in the instruction.
BASE-REGISTER ADDRESSING For base-register addressing, the interpretation is 
the following: The referenced register contains a main memory address, and the 
address field contains a displacement (usually an unsigned integer representation) 
from that address. The register reference may be explicit or implicit.
Base-register addressing also exploits the locality of memory references. It is a 
convenient means of implementing segmentation, which was discussed in Chapter 8. 
In some implementations, a single segment-base register is employed and is used 
implicitly. In others, the programmer may choose a register to hold the base address 
of a segment, and the instruction must reference it explicitly. In this latter case, if 
the length of the address field is K and the number of possible registers is N, then 
one instruction can reference any one of N areas of 2K words.
INDEXING For indexing, the interpretation is typically the following: The address 
field references a main memory address, and the referenced register contains a 
positive displacement from that address. Note that this usage is just the opposite 
of the interpretation for base-register addressing. Of course, it is more than just 
a matter of user interpretation. Because the address field is considered to be a 
memory address in indexing, it generally contains more bits than an address field 
in a comparable base-register instruction. Also, we shall see that there are some 
refinements to indexing that would not be as useful in the base-register context. 
Nevertheless, the method of calculating the EA is the same for both base-register 
addressing and indexing, and in both cases the register reference is sometimes 
explicit and sometimes implicit (for different processor types).
An important use of indexing is to provide an efficient mechanism for per-
forming iterative operations. Consider, for example, a list of numbers stored start-
ing at location A. Suppose that we would like to add 1 to each element on the list. 
We need to fetch each value, add 1 to it, and store it back. The sequence of effective 
addresses that we need is A, A + 1, A + 2, . . . , up to the last location on the list. 
With indexing, this is easily done. The value A is stored in the instruction’s address 
field, and the chosen register, called an index register, is initialized to 0. After each 
operation, the index register is incremented by 1.
Because index registers are commonly used for such iterative tasks, it is 
 typical that there is a need to increment or decrement the index register after 

458  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
each  reference to it. Because this is such a common operation, some systems 
will automatically do this as part of the same instruction cycle. This is known as 
autoindexing. If certain registers are devoted exclusively to indexing, then autoin-
dexing can be invoked implicitly and automatically. If general-purpose registers 
are used, the autoindex operation may need to be signaled by a bit in the instruc-
tion. Autoindexing using increment can be depicted as follows.
EA = A + (R)
(R) d (R) + 1
In some machines, both indirect addressing and indexing are provided, and it 
is possible to employ both in the same instruction. There are two possibilities: the 
indexing is performed either before or after the indirection.
If indexing is performed after the indirection, it is termed postindexing:
EA = (A) + (R)
First, the contents of the address field are used to access a memory location contain-
ing a direct address. This address is then indexed by the register value. This tech-
nique is useful for accessing one of a number of blocks of data of a fixed format. For 
example, it was described in Chapter 8 that the operating system needs to employ 
a process control block for each process. The operations performed are the same 
regardless of which block is being manipulated. Thus, the addresses in the instruc-
tions that reference the block could point to a location (value = A) containing a 
variable pointer to the start of a process control block. The index register contains 
the displacement within the block.
With preindexing, the indexing is performed before the indirection:
EA = (A + (R))
An address is calculated as with simple indexing. In this case, however, the calcu-
lated address contains not the operand, but the address of the operand. An example 
of the use of this technique is to construct a multiway branch table. At a particular 
point in a program, there may be a branch to one of a number of locations depend-
ing on conditions. A table of addresses can be set up starting at location A. By 
indexing into this table, the required location can be found.
Typically, an instruction set will not include both preindexing and postindexing.
Stack Addressing
The final addressing mode that we consider is stack addressing. As defined in 
Appendix O, a stack is a linear array of locations. It is sometimes referred to as a 
pushdown list or last-in-first-out queue. The stack is a reserved block of locations. 
Items are appended to the top of the stack so that, at any given time, the block is 
partially filled. Associated with the stack is a pointer whose value is the address of 
the top of the stack. Alternatively, the top two elements of the stack may be in pro-
cessor registers, in which case the stack pointer references the third element of the 
stack. The stack pointer is maintained in a register. Thus, references to stack loca-
tions in memory are in fact register indirect addresses.

13.2 / x86 AND ARM ADDRESSING MODES  459
The stack mode of addressing is a form of implied addressing. The machine 
instructions need not include a memory reference but implicitly operate on the top 
of the stack.
 13.2 x86 AND ARM ADDRESSING MODES
x86 Addressing Modes
Recall from Figure 8.21 that the x86 address translation mechanism produces an 
address, called a virtual or effective address, that is an offset into a segment. The 
sum of the starting address of the segment and the effective address produces a 
linear address. If paging is being used, this linear address must pass through a page-
translation mechanism to produce a physical address. In what follows, we ignore 
this last step because it is transparent to the instruction set and to the programmer.
The x86 is equipped with a variety of addressing modes intended to allow the 
efficient execution of high-level languages. Figure 13.2 indicates the logic involved. 
The segment register determines the segment that is the subject of the reference. 
There are six segment registers; the one being used for a particular reference 
depends on the context of execution and the instruction. Each segment  register 
Access rights
Limit
Base Address
SS
Access rights
Limit
Base Address
GS
Access rights
Limit
Base Address
FS
Access rights
Limit
Base Address
ES
Access rights
Limit
Base Address
DS
Access rights
Limit
Base Address
CS
Selector
Selector
Selector
Selector
Selector
Selector
SS
GS
FS
ES
DS
CS
Segment registers
Descriptor registers
Base register
Index register
Scale
1, 2, 4, or 8
Displacement
(in instruction;
0, 8, or 32 bits)
Limit

Effective
address
Linear
address
Segment
base
address

460  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
holds an index into the segment descriptor table (Figure 8.20), which holds the 
starting address of the corresponding segments. Associated with each user-visible 
segment register is a segment descriptor register (not programmer visible), which 
records the access rights for the segment as well as the starting address and limit 
(length) of the segment. In addition, there are two registers that may be used in 
constructing an address: the base register and the index register.
For the immediate mode, the operand is included in the instruction. The 
 operand can be a byte, word, or doubleword of data.
For register operand mode, the operand is located in a register. For general 
instructions, such as data transfer, arithmetic, and logical instructions, the operand 
can be one of the 32-bit general registers (EAX, EBX, ECX, EDX, ESI, EDI, ESP, 
EBP), one of the 16-bit general registers (AX, BX, CX, DX, SI, DI, SP, BP), or one of 
the 8-bit general registers (AH, BH, CH, DH, AL, BL, CL, DL). There are also some 
instructions that reference the segment selector registers (CS, DS, ES, SS, FS, GS).
The remaining addressing modes reference locations in memory. The memory 
location must be specified in terms of the segment containing the location and the off-
set from the beginning of the segment. In some cases, a segment is specified explicitly; 
in others, the segment is specified by simple rules that assign a segment by default.
In the displacement mode, the operand’s offset (the effective address 
of Figure13.2) is contained as part of the instruction as an 8-, 16-, or 32-bit dis-
placement. With segmentation, all addresses in instructions refer merely to an 
 offset in a segment. The displacement addressing mode is found on few machines 
because, as mentioned earlier, it leads to long instructions. In the case of the x86, 
Mode
Algorithm
Immediate
Operand = A
Register Operand
LA = R
Displacement
LA = (SR) + A
Base
LA = (SR) + (B)
Base with Displacement
LA = (SR) + (B) + A
Scaled Index with Displacement
LA = (SR) + (I) * S + A
Base with Index and Displacement
LA = (SR) + (B) + (I) + A
Base with Scaled Index and Displacement
LA = (SR) + (I) * S + (B) + A
Relative
LA = (PC) + A
LA = linear address
(X) = contents of X
SR = segment register
PC = program counter
A
= contents of an address field in the instruction
R  = register
B 
= base register
I 
= index register
S 
= scaling factor

13.2 / x86 AND ARM ADDRESSING MODES  461
the  displacement value can be as long as 32 bits, making for a 6-byte instruction. 
Displacement addressing can be useful for referencing global variables.
The remaining addressing modes are indirect, in the sense that the address 
portion of the instruction tells the processor where to look to find the address. The 
base mode specifies that one of the 8-, 16-, or 32-bit registers contains the effective 
address. This is equivalent to what we have referred to as register indirect addressing.
In the base with displacement mode, the instruction includes a displacement 
to be added to a base register, which may be any of the general-purpose registers. 
Examples of uses of this mode are as follows:
 
• Used by a compiler to point to the start of a local variable area. For example, 
the base register could point to the beginning of a stack frame, which contains 
the local variables for the corresponding procedure.
 
• Used to index into an array when the element size is not 1, 2, 4, or 8 bytes and 
which therefore cannot be indexed using an index register. In this case, the 
displacement points to the beginning of the array, and the base register holds 
the results of a calculation to determine the offset to a specific element within 
the array.
 
• Used to access a field of a record. The base register points to the beginning of 
the record, while the displacement is an offset to the field.
In the scaled index with displacement mode, the instruction includes a dis-
placement to be added to a register, in this case called an index register. The index 
register may be any of the general-purpose registers except the one called ESP, 
which is generally used for stack processing. In calculating the effective address, the 
contents of the index register are multiplied by a scaling factor of 1, 2, 4, or 8, and 
then added to a displacement. This mode is very convenient for indexing arrays. A 
scaling factor of 2 can be used for an array of 16-bit integers. A scaling factor of 4 
can be used for 32-bit integers or floating-point numbers. Finally, a scaling factor of 
8 can be used for an array of double-precision floating-point numbers.
The base with index and displacement mode sums the contents of the base 
register, the index register, and a displacement to form the effective address. Again, 
the base register can be any general-purpose register and the index register can 
be any general-purpose register except ESP. As an example, this addressing mode 
could be used for accessing a local array on a stack frame. This mode can also be 
used to support a two-dimensional array; in this case, the displacement points to the 
beginning of the array, and each register handles one dimension of the array.
The based scaled index with displacement mode sums the contents of the index 
register multiplied by a scaling factor, the contents of the base register, and the displace-
ment. This is useful if an array is stored in a stack frame; in this case, the array elements 
would be 2, 4, or 8 bytes each in length. This mode also provides efficient indexing of a 
two-dimensional array when the array elements are 2, 4, or 8 bytes in length.
Finally, relative addressing can be used in transfer-of-control instructions. A dis-
placement is added to the value of the program counter, which points to the next instruc-
tion. In this case, the displacement is treated as a signed byte, word, or  doubleword 
value, and that value either increases or decreases the address in the program counter.

462  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
ARM Addressing Modes
Typically, a RISC machine, unlike a CISC machine, uses a simple and relatively 
straightforward set of addressing modes. The ARM architecture departs somewhat 
from this tradition by providing a relatively rich set of addressing modes. These 
modes are most conveniently classified with respect to the type of instruction.1
LOAD/STORE ADDRESSING Load and store instructions are the only instructions 
that reference memory. This is always done indirectly through a base register plus 
offset. There are three alternatives with respect to indexing (Figure 13.3):
 
• Offset: For this addressing method, indexing is not used. An offset value is 
added to or subtracted from the value in the base register to form the memory 
address. As an example Figure 13.3a illustrates this method with the assembly 
language instruction STRB r0, [r1, #12]. This is the store byte instruc-
tion. In this case the base address is in register r1 and the displacement is an 
immediate value of decimal 12. The resulting address (base plus offset) is the 
location where the least significant byte from r0 is to be stored.
 
• Preindex: The memory address is formed in the same way as for offset address-
ing. The memory address is also written back to the base register. In other 
words, the base register value is incremented or decremented by the offset 
value. Figure 13.3b illustrates this method with the assembly language instruc-
tion STRB r0, [r1, #12]!. The exclamation point signifies preindexing.
 
• Postindex: The memory address is the base register value. An offset is added 
to or subtracted from the base register value and the result is written back to 
the base register. Figure 13.3c illustrates this method with the assembly lan-
guage instruction STRB r0, [r1], #12.
Note that what ARM refers to as a base register acts as an index register for 
preindex and postindex addressing. The offset value can either be an immediate 
value stored in the instruction or it can be in another register. If the offset value 
is in a register, another useful feature is available: scaled register addressing. The 
value in the offset register is scaled by one of the shift operators: Logical Shift Left, 
Logical Shift Right, Arithmetic Shift Right, Rotate Right, or Rotate Right Extended 
(which includes the carry bit in the rotation). The amount of the shift is specified as 
an immediate value in the instruction.
DATA PROCESSING INSTRUCTION ADDRESSING Data processing instructions use 
either register addressing or a mixture of register and immediate addressing. For 
register addressing, the value in one of the register operands may be scaled using 
one of the five shift operators defined in the preceding paragraph.
BRANCH INSTRUCTIONS The only form of addressing for branch instructions is 
immediate addressing. The branch instruction contains a 24-bit value. For address 
calculation, this value is shifted left 2 bits, so that the address is on a word boundary. 
Thus the effective address range is {32 MB from the program counter.
1As with our discussion of x86 addressing, we ignore the translation from virtual to physical address in 
the following discussion.

13.2 / x86 AND ARM ADDRESSING MODES  463
LOAD/STORE MULTIPLE ADDRESSING Load Multiple instructions load a subset 
(possibly all) of the general-purpose registers from memory. Store Multiple 
instructions store a subset (possibly all) of the general-purpose registers to 
memory. The list of registers for the load or store is specified in a 16-bit field in the 
instruction with each bit corresponding to one of the 16 registers. Load and Store 
Multiple addressing modes produce a sequential range of memory addresses. The 
lowest-numbered register is stored at the lowest memory address and the highest-
numbered register at the highest memory address. Four addressing modes are used 
0x200
0x200
0x20C
0x20C
0xC
r1
r1
Original
base register
(b) Preindex
(c) Postindex
Destination
register
for STR
Updated
base register
0x5
0x5
r0
Offset
STRB r0, [r1, #12]!
0x200
0x200
0x20C
0x20C
0xC
r1
r1
Original
base register
Destination
register
for STR
Updated
base register
0x5
0x5
r0
Offset
STRB r0, [r1], #12
0x200
0x200
0x20C
0xC
r1
Original
base register
(a) Offset
Destination
register
for STR
0x5
0x5
r0
Offset
STRB r0, [r1, #12]

464  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
(Figure 13.4): increment after, increment before, decrement after, and decrement 
before. A base register specifies a main memory address where register values 
are stored in or loaded from in ascending (increment) or descending (decrement) 
word locations. Incrementing or decrementing starts either before or after the first 
memory access.
These instructions are useful for block loads or stores, stack operations, and 
procedure exit sequences.
 13.3 INSTRUCTION FORMATS
An instruction format defines the layout of the bits of an instruction, in terms of 
its constituent fields. An instruction format must include an opcode and, implicitly 
or explicitly, zero or more operands. Each explicit operand is referenced using one 
of the addressing modes described in Section 13.1. The format must, implicitly or 
explicitly, indicate the addressing mode for each operand. For most instruction sets, 
more than one instruction format is used.
The design of an instruction format is a complex art, and an amazing variety of 
designs have been implemented. We examine the key design issues, looking briefly 
at some designs to illustrate points, and then we examine the x86 and ARM solu-
tions in detail.
Instruction Length
The most basic design issue to be faced is the instruction format length. This deci-
sion affects, and is affected by, memory size, memory organization, bus structure, 
processor complexity, and processor speed. This decision determines the richness 
and flexibility of the machine as seen by the assembly-language programmer.
The most obvious trade-off here is between the desire for a powerful instruc-
tion repertoire and a need to save space. Programmers want more opcodes, more 
operands, more addressing modes, and greater address range. More opcodes and 
more operands make life easier for the programmer, because shorter programs can 
0x20C
0x210
0x214
0x20C
(r0)
(r1)
(r4)
(r0)
(r1)
(r4)
(r0)
(r1)
(r4)
(r0)
(r1)
(r4)
0x208
0x204
0x200
0x218
r10
Base register
Increment
after (IA)
Increment
before (IB)
Decrement
after (DA)
Decrement
before (DB)
LDMxx r10, {r0, r1, r4}
STMxx r10, {r0, r1, r4}

13.3 / INSTRUCTION FORMATS  465
be written to accomplish given tasks. Similarly, more addressing modes give the pro-
grammer greater flexibility in implementing certain functions, such as table manipu-
lations and multiple-way branching. And, of course, with the increase in main mem-
ory size and the increasing use of virtual memory, programmers want to be able to 
address larger memory ranges. All of these things (opcodes, operands, addressing 
modes, address range) require bits and push in the direction of longer instruction 
lengths. But longer instruction length may be wasteful. A 64-bit instruction occupies 
twice the space of a 32-bit instruction but is probably less than twice as useful.
Beyond this basic trade-off, there are other considerations. Either the instruc-
tion length should be equal to the memory-transfer length (in a bus system, data-
bus length) or one should be a multiple of the other. Otherwise, we will not get 
an integral number of instructions during a fetch cycle. A related consideration 
is the memory transfer rate. This rate has not kept up with increases in processor 
speed. Accordingly, memory can become a bottleneck if the processor can execute 
instructions faster than it can fetch them. One solution to this problem is to use 
cache memory (see Section 4.3); another is to use shorter instructions. Thus, 16-bit 
instructions can be fetched at twice the rate of 32-bit instructions but probably can 
be executed less than twice as rapidly.
A seemingly mundane but nevertheless important feature is that the instruc-
tion length should be a multiple of the character length, which is usually 8 bits, and 
of the length of fixed-point numbers. To see this, we need to make use of that unfor-
tunately ill-defined word, word [FRAI83]. The word length of memory is, in some 
sense, the “natural” unit of organization. The size of a word usually determines the 
size of fixed-point numbers (usually the two are equal). Word size is also typically 
equal to, or at least integrally related to, the memory transfer size. Because a com-
mon form of data is character data, we would like a word to store an integral number 
of characters. Otherwise, there are wasted bits in each word when storing multiple 
characters, or a character will have to straddle a word boundary. The importance 
of this point is such that IBM, when it introduced the System/360 and wanted to 
employ 8-bit characters, made the wrenching decision to move from the 36-bit archi-
tecture of the scientific members of the 700/7000 series to a 32-bit architecture.
Allocation of Bits
We’ve looked at some of the factors that go into deciding the length of the instruc-
tion format. An equally difficult issue is how to allocate the bits in that format. The 
trade-offs here are complex.
For a given instruction length, there is clearly a trade-off between the number 
of opcodes and the power of the addressing capability. More opcodes obviously 
mean more bits in the opcode field. For an instruction format of a given length, 
this reduces the number of bits available for addressing. There is one interesting 
refinement to this trade-off, and that is the use of variable-length opcodes. In this 
approach, there is a minimum opcode length but, for some opcodes, additional 
operations may be specified by using additional bits in the instruction. For a fixed-
length instruction, this leaves fewer bits for addressing. Thus, this feature is used 
for those instructions that require fewer operands and/or less powerful addressing.

466  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
The following interrelated factors go into determining the use of the address-
ing bits.
 
• Number of addressing modes: Sometimes an addressing mode can be indi-
cated implicitly. For example, certain opcodes might always call for indexing. 
In other cases, the addressing modes must be explicit, and one or more mode 
bits will be needed.
 
• Number of operands: We have seen that fewer addresses can make for longer, 
more awkward programs (e.g., Figure 10.3). Typical instruction formats on 
today’s machines include two operands. Each operand address in the instruc-
tion might require its own mode indicator, or the use of a mode indicator 
could be limited to just one of the address fields.
 
• Register versus memory: A machine must have registers so that data can be 
brought into the processor for processing. With a single user-visible register 
(usually called the accumulator), one operand address is implicit and con-
sumes no instruction bits. However, single-register programming is awkward 
and requires many instructions. Even with multiple registers, only a few bits 
are needed to specify the register. The more that registers can be used for 
operand references, the fewer bits are needed. A number of studies indicate 
that a total of 8 to 32 user-visible registers is desirable [LUND77, HUCK83]. 
Most contemporary architectures have at least 32 registers.
 
• Number of register sets: Most contemporary machines have one set of general-
purpose registers, with typically 32 or more registers in the set. These registers 
can be used to store data and can be used to store addresses for displacement 
addressing. Some architectures, including that of the x86, have a collection of 
two or more specialized sets (such as data and displacement). One advantage 
of this latter approach is that, for a fixed number of registers, a functional split 
requires fewer bits to be used in the instruction. For example, with two sets 
of eight registers, only 3 bits are required to identify a register; the opcode or 
mode register will determine which set of registers is being referenced.
 
• Address range: For addresses that reference memory, the range of addresses 
that can be referenced is related to the number of address bits. Because this 
imposes a severe limitation, direct addressing is rarely used. With displace-
ment addressing, the range is opened up to the length of the address register. 
Even so, it is still convenient to allow rather large displacements from the reg-
ister address, which requires a relatively large number of address bits in the 
instruction.
 
• Address granularity: For addresses that reference memory rather than reg-
isters, another factor is the granularity of addressing. In a system with 16- or 
32-bit words, an address can reference a word or a byte at the designer’s 
choice. Byte addressing is convenient for character manipulation but requires, 
for a fixed-size memory, more address bits.
Thus, the designer is faced with a host of factors to consider and balance. 
How critical the various choices are is not clear. As an example, we cite one study 
[CRAG79] that compared various instruction format approaches, including the use 

13.3 / INSTRUCTION FORMATS  467
of a stack, general-purpose registers, an accumulator, and only memory-to-register 
approaches. Using a consistent set of assumptions, no significant difference in code 
space or execution time was observed.
Let us briefly look at how two historical machine designs balance these vari-
ous factors.
PDP-8 One of the simplest instruction designs for a general-purpose computer 
was for the PDP-8 [BELL78b]. The PDP-8 uses 12-bit instructions and operates on 
12-bit words. There is a single general-purpose register, the accumulator.
Despite the limitations of this design, the addressing is quite flexible. Each 
memory reference consists of 7 bits plus two 1-bit modifiers. The memory is divided 
into fixed-length pages of 27 = 128 words each. Address calculation is based on 
references to page 0 or the current page (page containing this instruction) as deter-
mined by the page bit. The second modifier bit indicates whether direct or indirect 
addressing is to be used. These two modes can be used in combination, so that an 
indirect address is a 12-bit address contained in a word of page 0 or the current 
page. In addition, 8 dedicated words on page 0 are autoindex “registers.” When an 
indirect reference is made to one of these locations, preindexing occurs.
three types of instructions. For opcodes 0 through 5, the format is a single-address 
memory reference instruction including a page bit and an indirect bit. Thus, there 
are only six basic operations. To enlarge the group of operations, opcode 7 defines 
Memory reference instructions
Opcode
D/I
Z/C
Displacement
Input/output instructions
Device
Opcode
Register reference instructions
Group 1 microinstructions
CLA
CLL
CMA
CML
RAR
RAL
BSW
IAC
Group 2 microinstructions
Group 3 microinstructions
CLA
SMA
SZA
SNL
RSS
OSR
HLT
CLA
MQA
MQL
D/I  Direct/Indirect address
Z/C  Page 0 or Current page
CLA  Clear Accumulator
CLL  Clear Link
CMA  CoMplement Accumulator
CML  CoMplement Link
RAR  Rotate Accumulator Right
RAL  Rotate Accumulator Left
BSW  Byte SWap
IAC  Increment ACcumulator
SMA  Skip on Minus Accumulator
SZA  Skip on Zero Accumulator
SNL  Skip on Nonzero Link
RSS  Reverse Skip Sense
OSR  Or with Switch Register
HLT  HaLT
MQA Multiplier Quotient into Accumulator
MQL  Multiplier Quotient Load

468  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
a register reference or microinstruction. In this format, the remaining bits are used 
to encode additional operations. In general, each bit defines a specific operation 
(e.g., clear accumulator), and these bits can be combined in a single instruction. The 
microinstruction strategy was used as far back as the PDP-1 by DEC and is, in a 
sense, a forerunner of today’s microprogrammed machines, to be discussed in Part 
Four. Opcode 6 is the I/O operation; 6 bits are used to select one of 64 devices, and 
3 bits specify a particular I/O command.
The PDP-8 instruction format is remarkably efficient. It supports indirect 
addressing, displacement addressing, and indexing. With the use of the opcode 
extension, it supports a total of approximately 35 instructions. Given the constraints 
of a 12-bit instruction length, the designers could hardly have done better.
PDP-10 A sharp contrast to the instruction set of the PDP-8 is that of the PDP-10. 
The PDP-10 was designed to be a large-scale time-shared system, with an emphasis 
on making the system easy to program, even if additional hardware expense was 
involved.
Among the design principles employed in designing the instruction set were 
the following [BELL78c]:
 
• Orthogonality: Orthogonality is a principle by which two variables are inde-
pendent of each other. In the context of an instruction set, the term indicates 
that other elements of an instruction are independent of (not determined by) 
the opcode. The PDP-10 designers use the term to describe the fact that an 
address is always computed in the same way, independent of the opcode. This 
is in contrast to many machines, where the address mode sometimes depends 
implicitly on the operator being used.
 
• Completeness: Each arithmetic data type (integer, fixed-point, floating-point) 
should have a complete and identical set of operations.
 
• Direct addressing: Base plus displacement addressing, which places a mem-
ory organization burden on the programmer, was avoided in favor of direct 
 addressing.
Each of these principles advances the main goal of ease of programming.
The PDP-10 has a 36-bit word length and a 36-bit instruction length. The fixed 
instruction format is shown in Figure 13.6. The opcode occupies 9 bits, allowing 
up to 512 operations. In fact, a total of 365 different instructions are defined. Most 
instructions have two addresses, one of which is one of 16 general-purpose registers. 
Thus, this operand reference occupies 4 bits. The other operand reference starts 
with an 18-bit memory address field. This can be used as an immediate operand or 
a memory address. In the latter usage, both indexing and indirect addressing are 
allowed. The same general-purpose registers are also used as index registers.
Index
register
Memory address
17 18
I  indirect bit
Opcode
Register
I

13.3 / INSTRUCTION FORMATS  469
A 36-bit instruction length is true luxury. There is no need to do clever things 
to get more opcodes; a 9-bit opcode field is more than adequate. Addressing is also 
straightforward. An 18-bit address field makes direct addressing desirable. For 
memory sizes greater than 218, indirection is provided. For the ease of the program-
mer, indexing is provided for table manipulation and iterative programs. Also, with 
an 18-bit operand field, immediate addressing becomes attractive.
The PDP-10 instruction set design does accomplish the objectives listed ear-
lier [LUND77]. It eases the task of the programmer or compiler at the expense of 
an inefficient utilization of space. This was a conscious choice made by the designers 
and therefore cannot be faulted as poor design.
Variable-Length Instructions
The examples we have looked at so far have used a single fixed instruction length, 
and we have implicitly discussed trade-offs in that context. But the designer may 
choose instead to provide a variety of instruction formats of different lengths. This 
tactic makes it easy to provide a large repertoire of opcodes, with different opcode 
lengths. Addressing can be more flexible, with various combinations of register and 
memory references plus addressing modes. With variable-length instructions, these 
many variations can be provided efficiently and compactly.
The principal price to pay for variable-length instructions is an increase in the 
complexity of the processor. Falling hardware prices, the use of microprogramming 
(discussed in Part Four), and a general increase in understanding the principles of 
processor design have all contributed to making this a small price to pay. However, 
we will see that RISC and superscalar machines can exploit the use of fixed-length 
instructions to provide improved performance.
The use of variable-length instructions does not remove the desirability of 
making all of the instruction lengths integrally related to the word length. Because 
the processor does not know the length of the next instruction to be fetched, a 
typical strategy is to fetch a number of bytes or words equal to at least the longest 
possible instruction. This means that sometimes multiple instructions are fetched. 
However, as we shall see in Chapter 14, this is a good strategy to follow in any case.
PDP-11 The PDP-11 was designed to provide a powerful and flexible instruction 
set within the constraints of a 16-bit minicomputer [BELL70].
The PDP-11 employs a set of eight 16-bit general-purpose registers. Two of 
these registers have additional significance: one is used as a stack pointer for spe-
cial-purpose stack operations, and one is used as the program counter, which con-
tains the address of the next instruction.
are used, encompassing zero-, one-, and two-address instruction types. The opcode 
can vary from 4 to 16 bits in length. Register references are 6 bits in length. Three 
bits identify the register, and the remaining 3 bits identify the addressing mode. The 
PDP-11 is endowed with a rich set of addressing modes. One advantage of linking 
the addressing mode to the operand rather than the opcode, as is sometimes done, 
is that any addressing mode can be used with any opcode. As was mentioned, this 
independence is referred to as orthogonality.

Opcode
Opcode
Offset
Numbers below fields indicate bit length
Source and destination each contain a 3-bit addressing mode field and a 3-bit register number
FP indicates one of four floating-point registers
R indicates one of the general-purpose registers
CC is the condition code field
R
Source
Source
Destination
Opcode
Opcode
Opcode
Opcode
CC
FP
Destination
Destination
Opcode
Opcode
Opcode
Source
Destination
Memory address
R
Opcode
Source
Source
Destination
Destination
Memory address
Memory address
Memory address
Memory address 1
Memory address 2
R
Opcode
FP
Opcode
Opcode
Source

13.3 / INSTRUCTION FORMATS  471
PDP-11 instructions are usually one word (16 bits) long. For some  instructions, 
one or two memory addresses are appended, so that 32-bit and 48-bit instructions 
are part of the repertoire. This provides for further flexibility in addressing.
The PDP-11 instruction set and addressing capability are complex. This 
increases both hardware cost and programming complexity. The advantage is that 
more efficient or compact programs can be developed.
VAX Most architectures provide a relatively small number of fixed instruction 
formats. This can cause two problems for the programmer. First, addressing mode 
and opcode are not orthogonal. For example, for a given operation, one operand 
must come from a register and another from memory, or both from registers, and so 
on. Second, only a limited number of operands can be accommodated: typically up 
to two or three. Because some operations inherently require more operands, various 
strategies must be used to achieve the desired result using two or more instructions.
To avoid these problems, two criteria were used in designing the VAX instruc-
tion format [STRE78]:
 
1. All instructions should have the “natural” number of operands.
 
2. All operands should have the same generality in specification.
The result is a highly variable instruction format. An instruction consists of a 1- or 
2-byte opcode followed by from zero to six operand specifiers, depending on the 
opcode. The minimal instruction length is 1 byte, and instructions up to 37 bytes can 
be constructed. Figure 13.8 gives a few examples.
The VAX instruction begins with a 1-byte opcode. This suffices to handle 
most VAX instructions. However, as there are over 300 different instructions, 8 bits 
are not enough. The hexadecimal codes FD and FF indicate an extended opcode, 
with the actual opcode being specified in the second byte.
The remainder of the instruction consists of up to six operand specifiers. An 
operand specifier is, at minimum, a 1-byte format in which the leftmost 4 bits are 
the address mode specifier. The only exception to this rule is the literal mode, 
which is signaled by the pattern 00 in the leftmost 2 bits, leaving space for a 6-bit 
literal. Because of this exception, a total of 12 different addressing modes can be 
specified.
An operand specifier often consists of just one byte, with the rightmost 4 
bits specifying one of 16 general-purpose registers. The length of the operand 
specifier can be extended in one of two ways. First, a constant value of one or 
more bytes may immediately follow the first byte of the operand specifier. An 
example of this is the displacement mode, in which an 8-, 16-, or 32-bit displace-
ment is used. Second, an index mode of addressing may be used. In this case, the 
first byte of the operand specifier consists of the 4-bit addressing mode code of 
0100 and a 4-bit index register identifier. The remainder of the operand specifier 
consists of the base address specifier, which may itself be one or more bytes in 
length.
The reader may be wondering, as the author did, what kind of instruction requires 
six operands. Surprisingly, the VAX has a number of such instructions. Consider
ADDP6 OP1, OP2, OP3, OP4, OP5, OP6

472  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
This instruction adds two packed decimal numbers. OP1 and OP2 specify the length 
and starting address of one decimal string; OP3 and OP4 specify a second string. 
These two strings are added and the result is stored in the decimal string whose 
length and starting location are specified by OP5 and OP6.
The VAX instruction set provides for a wide variety of operations and address-
ing modes. This gives a programmer, such as a compiler writer, a very powerful 
and flexible tool for developing programs. In theory, this should lead to efficient 
machine-language compilations of high-level language programs and, in general, to 
effective and efficient use of processor resources. The penalty to be paid for these 
benefits is the increased complexity of the processor compared with a processor 
with a simpler instruction set and format.
We return to these matters in Chapter 15, where we examine the case for very 
simple instruction sets.
Opcode for RSB
Hexadecimal
Format
Assembler Notation
and Description
Explanation
8 bits
D
B
C
A
B
C
D
F
RSB
Return from subroutine
Opcode for CLRL
Register R9
CLRL R9
Clear register R9
Opcode for MOVW
Word displacement mode,
Register R4
Byte displacement mode,
Register R11
25 in hexadecimal
356 in hexadecimal
MOVW 356(R4), 25(R11)
Move a word from address
that is 356 plus contents
of R4 to address that is
25 plus contents of R11
Opcode for ADDL3
Short literal 5
Register mode R0
Index prefix R2
Indirect word relative
(displacement from PC)
ADDL3 #5, R0, @A[R2]
Add 5 to a 32-bit integer in
R0 and store the result in
location whose address is
sum of A and 4 times the
contents of R2
Amount of displacement from
PC relative to location A

13.4 / x86 AND ARM INSTRUCTION FORMATS  473
 13.4 x86 AND ARM INSTRUCTION FORMATS
x86 Instruction Formats
The x86 is equipped with a variety of instruction formats. Of the elements described 
in this subsection, only the opcode field is always present. Figure 13.9 illustrates the 
general instruction format. Instructions are made up of from zero to four optional 
instruction prefixes, a 1- or 2-byte opcode, an optional address specifier (which con-
sists of the ModR/M byte and the Scale Index Base byte) an optional displacement, 
and an optional immediate field.
Let us first consider the prefix bytes:
 
• Instruction prefixes: The instruction prefix, if present, consists of the LOCK 
prefix or one of the repeat prefixes. The LOCK prefix is used to ensure 
 exclusive use of shared memory in multiprocessor environments. The  repeat 
prefixes specify repeated operation of a string, which enables the x86 to pro-
cess strings much faster than with a regular software loop. There are five dif-
ferent repeat prefixes: REP, REPE, REPZ, REPNE, and REPNZ. When the 
absolute REP prefix is present, the operation specified in the instruction is 
executed repeatedly on successive elements of the string; the number of repeti-
tions is specified in register CX. The conditional REP prefix causes the instruc-
tion to repeat until the count in CX goes to zero or until the  condition is met.
 
• Segment override: Explicitly specifies which segment register an instruction 
should use, overriding the default segment-register selection generated by the 
x86 for that instruction.
Mod
bytes
0 or 1
0, 1, 2, 3, or 4 bytes
0, 1, 2, or 4
0, 1, 2, or 4
1, 2, or 3
0 or 1
0 or 1
0 or 1
0 or 1
0 or 1
Instruction prefixes
Opcode
ModR/M
SIB
Displacement
Immediate
Instruction
prefix
Segment
override
Operand
size
override
Address
size
override
Reg/Opcode
R/M
Scale
Index
Base

474  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
 
• Operand size: An instruction has a default operand size of 16 or 32 bits, and 
the operand prefix switches between 32-bit and 16-bit operands.
 
• Address size: The processor can address memory using either 16- or 32-bit 
addresses. The address size determines the displacement size in instructions 
and the size of address offsets generated during effective address calculation. 
One of these sizes is designated as default, and the address size prefix switches 
between 32-bit and 16-bit address generation.
The instruction itself includes the following fields:
 
• Opcode: The opcode field is 1, 2, or 3 bytes in length. The opcode may also 
include bits that specify if data is byte- or full-size (16 or 32 bits depending on 
context), direction of data operation (to or from memory), and whether an im-
mediate data field must be sign extended.
 
• ModR/M: This byte, and the next, provide addressing information. The 
ModR/M byte specifies whether an operand is in a register or in memory; if 
it is in memory, then fields within the byte specify the addressing mode to be 
used. The ModR/M byte consists of three fields: The Mod field (2 bits) com-
bines with the R/M field to form 32 possible values: 8 registers and 24 index-
ing modes; the Reg/Opcode field (3 bits) specifies either a register number or 
three more bits of opcode information; the r/m field (3 bits) can specify a reg-
ister as the location of an operand, or it can form part of the addressing-mode 
encoding in combination with the Mod field.
 
• SIB: Certain encoding of the ModR/M byte specifies the inclusion of the SIB 
byte to specify fully the addressing mode. The SIB byte consists of three fields: 
The Scale field (2 bits) specifies the scale factor for scaled indexing; the Index 
field (3 bits) specifies the index register; the Base field (3 bits) specifies the 
base register.
 
• Displacement: When the addressing-mode specifier indicates that a displace-
ment is used, an 8-, 16-, or 32-bit signed integer displacement field is added.
 
• Immediate: Provides the value of an 8-, 16-, or 32-bit operand.
Several comparisons may be useful here. In the x86 format, the addressing mode 
is provided as part of the opcode sequence rather than with each operand. Because 
only one operand can have address-mode information, only one memory operand 
can be referenced in an instruction. In contrast, the VAX carries the address-mode 
information with each operand, allowing memory-to-memory operations. The x86 
instructions are therefore more compact. However, if a memory- to-memory opera-
tion is required, the VAX can accomplish this in a single instruction.
The x86 format allows the use of not only 1-byte, but also 2-byte and 4-byte 
offsets for indexing. Although the use of the larger index offsets results in longer 
instructions, this feature provides needed flexibility. For example, it is useful in 
addressing large arrays or large stack frames. In contrast, the IBM S/370 instruc-
tion format allows offsets no greater than 4 Kbytes (12 bits of offset information), 
and the offset must be positive. When a location is not in reach of this offset, the 
compiler must generate extra code to generate the needed address. This problem is 

13.4 / x86 AND ARM INSTRUCTION FORMATS  475
especially apparent in dealing with stack frames that have local variables  occupying 
in excess of 4 Kbytes. As [DEWA90] puts it, “generating code for the 370 is so 
 painful as a result of that restriction that there have even been compilers for the 370 
that simply chose to limit the size of the stack frame to 4 Kbytes.”
As can be seen, the encoding of the x86 instruction set is very complex. This 
has to do partly with the need to be backward compatible with the 8086 machine 
and partly with a desire on the part of the designers to provide every possible assist-
ance to the compiler writer in producing efficient code. It is a matter of some debate 
whether an instruction set as complex as this is preferable to the opposite extreme 
of the RISC instruction sets.
ARM Instruction Formats
All instructions in the ARM architecture are 32 bits long and follow a regular for-
mat (Figure 13.10). The first four bits of an instruction are the condition code. 
As  discussed in Chapter 12, virtually all ARM instructions can be conditionally 
 executed. The next three bits specify the general type of instruction. For most instruc-
tions other than branch instructions, the next five bits constitute an opcode and/or 
modifier bits for the operation. The remaining 20 bits are for operand addressing. The 
regular structure of the instruction formats eases the job of the instruction decode units.
0 0
S
Rn
Rm
Rd
Shift amount Shift
Shift amount Shift
Cond
Opcode
Data processing
immediate shift
0 1
S
Rn
Rd
Rotate
Immediate
Cond
Opcode
Data processing
immediate
1 0
L
W
B
U
P
Rn
Rd
Immediate
Cond
Load/store
immediate offset
1 1
L
W
B
U
P
Rn
Rd
Cond
Load/store
register offset
0 0
S
Rn
Rm
Rm
Register list
0 0
L
W
S
U
P
Rn
Cond
Load/store
multiple
24-Bit offset
0 1 L
Cond
Branch/branch
with link
S = For data processing instructions, signifies that the instruction
  updates the condition codes
S = For load/store multiple instructions, signifies whether instruction 
  execution is restricted to supervisor mode
P, U, W = Bits that distinguish among
  different types of addressing_mode
B = Distinguishes between an unsigned
  byte (B==1) and a word (B==0) access
L = For load/store instructions, distinguishes
  between a Load (L==1) and a Store (L==0)
L = For branch instructions, determines whether a
  return address is stored in the link register 
Rd
Rs
Shift
Cond
Opcode
Data processing
register shift
14 13
17 16
20 19
22 21
24 23
26 25
28 27
30 29

476  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
IMMEDIATE CONSTANTS To achieve a greater range of immediate values, the 
data processing immediate format specifies both an immediate value and a rotate 
value. The 8-bit immediate value is expanded to 32 bits and then rotated right by a 
number of bits equal to twice the 4-bit rotate value. Several examples are shown in 
THUMB INSTRUCTION SET The Thumb instruction set is a re-encoded subset of 
the ARM instruction set. Thumb is designed to increase the performance of ARM 
implementations that use a 16-bit or narrower memory data bus and to allow better 
code density than provided by the ARM instruction set. The Thumb instruction set 
contains a subset of the ARM 32-bit instruction set recoded into 16-bit instructions. 
The savings is achieved in the following way:
 
1. Thumb instructions are unconditional, so the condition code field is not used. 
Also, all Thumb arithmetic and logic instructions update the condition flags, 
so that the update-flag bit is not needed. Savings: 5 bits.
 
2. Thumb has only a subset of the operations in the full instruction set and uses 
only a 2-bit opcode field, plus a 3-bit type field. Savings: 2 bits.
 
3. The remaining savings of 9 bits comes from reductions in the operand specifi-
cations. For example, Thumb instructions reference only registers r0 through 
r7, so only 3 bits are required for register references, rather than 4 bits. 
Immediate values do not include a 4-bit rotate field.
The ARM processor can execute a program consisting of a mixture of Thumb 
instructions and 32-bit ARM instructions. A bit in the processor control register 
determines which type of instruction is currently being executed. Figure 13.12 shows 
an example. The figure shows both the general format and a specific instance of an 
instruction in both 16-bit and 32-bit formats.
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
ror #0—range 0 through 0x000000FF—step 0x00000001 
14 13
17 16
20 19
22 21
24 23
26 25
28 27
30 29
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
ror #8—range 0 through 0xFF000000—step 0x01000000 
14 13
17 16
20 19
22 21
24 23
26 25
28 27
30 29
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0
ror #30—range 0 through 0x000003FC—step 0x00000004 
14 13
17 16
20 19
22 21
24 23
26 25
28 27
30 29

13.5 / ASSEMBLY LANGUAGE  477
 13.5 ASSEMBLY LANGUAGE
A processor can understand and execute machine instructions. Such instructions are 
simply binary numbers stored in the computer. If a programmer wished to program 
directly in machine language, then it would be necessary to enter the program as 
binary data.
Consider the simple BASIC statement
N = I + J + K
Suppose we wished to program this statement in machine language and to initialize 
I, J, and K to 2, 3, and 4, respectively. This is shown in Figure 13.13a. The program 
starts in location 101 (hexadecimal). Memory is reserved for the four variables start-
ing at location 201. The program consists of four instructions:
 
1. Load the contents of location 201 into the AC.
 
2. Add the contents of location 202 to the AC.
 
3. Add the contents of location 203 to the AC.
 
4. Store the contents of the AC in location 204.
This is clearly a tedious and very error-prone process.
A slight improvement is to write the program in hexadecimal rather than 
binary notation (Figure 10.11b). We could write the program as a series of lines. 
Each line contains the address of a memory location and the hexadecimal code of 
the binary value to be stored in that location. Then we need a program that will 
accept this input, translate each line into a binary number, and store it in the speci-
fied location.
For more improvement, we can make use of the symbolic name or mnemonic 
of each instruction. This results in the symbolic program shown in Figure 10.11c. 
Each line of input still represents one memory location. Each line consists of three 
0 1
1 0
0 1
0 1
0 1
1 1
0 0 0 0
0 0
0 1 1
ADD r3, #19
ADDS r3, r3, #19
Data processing
immediate format
14 13
17 16
20 19
22 21
24 23
26 25
28 27
30 29
0 1
1 0
1 1
0 0 1 0
1 1
Add/subtract/compare/move
immediate format
Always
condition
code
Update
condition
flags
Zero
rotation
0 1
Rd/Rn
Opcode
Immediate
14 13
0 1
S
Rn
Rd
Rotate
Immediate
Cond
Opcode

478  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
fields, separated by spaces. The first field contains the address of a location. For an 
instruction, the second field contains the three-letter symbol for the opcode. If it is 
a memory-referencing instruction, then a third field contains the address. To store 
arbitrary data in a location, we invent a pseudoinstruction with the symbol DAT. 
This is merely an indication that the third field on the line contains a hexadecimal 
number to be stored in the location specified in the first field.
For this type of input we need a slightly more complex program. The program 
accepts each line of input, generates a binary number based on the second and third 
(if present) fields, and stores it in the location specified by the first field.
The use of a symbolic program makes life much easier but is still awkward. 
In particular, we must give an absolute address for each word. This means that the 
program and data can be loaded into only one place in memory, and we must know 
that place ahead of time. Worse, suppose we wish to change the program some day 
by adding or deleting a line. This will change the addresses of all subsequent words.
A much better system, and one commonly used, is to use symbolic addresses. 
This is illustrated in Figure 10.11d. Each line still consists of three fields. The first 
field is still for the address, but a symbol is used instead of an absolute numerical 
address. Some lines have no address, implying that the address of that line is one 
more than the address of the previous line. For memory-reference instructions, the 
third field also contains a symbolic address.
With this last refinement, we have an assembly language. Programs written in 
assembly language (assembly programs) are translated into machine language by an 
assembler. This program must not only do the symbolic translation discussed earlier 
but also assign some form of memory addresses to symbolic addresses.
Address
Contents
0010
0010
2201
2201
0001
0010
1202
1202
0001
0010
1203
1203
0011
0010
3204
3204
0000
0000
0002
0002
0000
0000
0003
0003
0000
0000
0004
0004
0000
0000
0000
0000
(a) Binary program
(b) Hexadecimal program
Address
Instruction
Label
Operation
Operand
LDA
FORMUL
LDA
I
ADD
ADD
J
ADD
ADD
K
STA
STA
N
DAT
I
DATA
DAT
J
DATA
DAT
K
DATA
DAT
N
DATA
(c) Symbolic  program
(d) Assembly program
Contents
Address

13.7 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS  479
Review Questions
 13.1 
Briefly define immediate addressing.
 13.2 
Briefly define direct addressing.
 13.3 
Briefly define indirect addressing.
 13.4 
Briefly define register addressing.
 13.5 
Briefly define register indirect addressing.
 13.6 
Briefly define displacement addressing.
 13.7 
Briefly define relative addressing.
 13.8 
What is the advantage of autoindexing?
 13.9 
What is the difference between postindexing and preindexing?
 13.10 
What facts go into determining the use of the addressing bits of an instruction?
 13.11 
What are the advantages and disadvantages of using a variable-length instruction 
 format?
BLAA97 Blaauw, G., and Brooks, F. Computer Architecture: Concepts and Evolution. 
Reading, MA: Addison-Wesley, 1997.
FLYN85 Flynn, M.; Johnson, J.; and Wakefield, S. “On Instruction Sets and Their 
 Formats.” IEEE Transactions on Computers, March 1985.
The development of assembly language was a major milestone in the evolu-
tion of computer technology. It was the first step to the high-level languages in use 
today. Although few programmers use assembly language, virtually all machines 
provide one. They are used, if at all, for systems programs such as compilers and 
I/O routines.
Appendix B provides a more detailed examination of assembly language.
 13.6 RECOMMENDED READING
The references cited in Chapter 12 are equally applicable to the material of this chapter. 
[BLAA97] contains a detailed discussion of instruction formats and addressing modes. In 
addition, the reader may wish to consult [FLYN85] for a discussion and analysis of instruc-
tion set design issues, particularly those relating to formats.
autoindexing
base-register addressing
direct addressing
displacement addressing
effective address
immediate addressing
indexing
indirect addressing
instruction format
postindexing
preindexing
register addressing
register indirect addressing
relative addressing
word
 13.7 KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS
Key Terms

480  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
Problems
 13.1 
Given the following memory values and a one-address machine with an accumulator, 
what values do the following instructions load into the accumulator?
• Word 20 contains 40.
• Word 30 contains 50.
• Word 40 contains 60.
• Word 50 contains 70.
a. LOAD IMMEDIATE 20
b. LOAD DIRECT 20
c. LOAD INDIRECT 20
d. LOAD IMMEDIATE 30
e. LOAD DIRECT 30
f. LOAD INDIRECT 30
 13.2 
Let the address stored in the program counter be designated by the symbol X1. The 
instruction stored in X1 has an address part (operand reference) X2. The operand 
needed to execute the instruction is stored in the memory word with address X3. An 
index register contains the value X4. What is the relationship between these various 
quantities if the addressing mode of the instruction is (a) direct; (b) indirect; (c) PC 
relative; (d) indexed?
 13.3 
An address field in an instruction contains decimal value 14. Where is the correspond-
ing operand located for
a. immediate addressing?
b. direct addressing?
c. indirect addressing?
d. register addressing?
e. register indirect addressing?
 13.4 
Consider a 16-bit processor in which the following appears in main memory, starting 
at location 200:
Load to AC
Mode
Next instruction
The first part of the first word indicates that this instruction loads a value into an ac-
cumulator. The Mode field specifies an addressing mode and, if appropriate, indicates 
a source register; assume that when used, the source register is R1, which has a value 
of 400. There is also a base register that contains the value 100. The value of 500 in 
location 201 may be part of the address calculation. Assume that location 399 contains 
the value 999, location 400 contains the value 1000, and so on. Determine the effective 
address and the operand to be loaded for the following address modes:
a. Direct
b. Immediate
c. Indirect
d. PC relative
e. Displacement
f. Register
g. Register indirect
h. Autoindexing with increment, using R1
 13.5 
A PC-relative mode branch instruction is 3 bytes long. The address of the instruction, 
in decimal, is 256028. Determine the branch target address if the signed displacement 
in the instruction is -31.
 13.6 
A PC-relative mode branch instruction is stored in memory at address 62010. The 
branch is made to location 53010. The address field in the instruction is 10 bits long. 
What is the binary value in the instruction?

13.7 / KEY TERMS, REVIEW QUESTIONS, AND PROBLEMS  481
 13.7 
How many times does the processor need to refer to memory when it fetches and 
executes an indirect-address-mode instruction if the instruction is (a) a computation 
requiring a single operand; (b) a branch?
 13.8 
The IBM 370 does not provide indirect addressing. Assume that the address of an 
operand is in main memory. How would you access the operand?
 13.9 
In [COOK82], the author proposes that the PC-relative addressing modes be elimi-
nated in favor of other modes, such as the use of a stack. What is the disadvantage of 
this proposal?
 13.10 
The x86 includes the following instruction:
IMUL op1, op2, immediate
This instruction multiplies op2, which may be either register or memory, by the imme-
diate operand value, and places the result in op1, which must be a register. There is no 
other three-operand instruction of this sort in the instruction set. What is the possible 
use of such an instruction? (Hint: Consider indexing.)
 13.11 
Consider a processor that includes a base with indexing addressing mode. Suppose an 
instruction is encountered that employs this addressing mode and specifies a displace-
ment of 1970, in decimal. Currently the base and index register contain the decimal 
numbers 48,022 and 8, respectively. What is the address of the operand?
 13.12 
Define: EA = (X)+ is the effective address equal to the contents of location X, with X 
incremented by one word length after the effective address is calculated; EA = -(X) 
is the effective address equal to the contents of location X, with X decremented by 
one word length before the effective address is calculated; EA = (X)- is the effec-
tive address equal to the contents of location X, with X decremented by one word 
length after the effective address is calculated. Consider the following instructions, 
each in the format (Operation Source Operand, Destination Operand), with the result 
of the operation placed in the destination operand.
a. OP X, (X)
b. OP (X), (X)+
c. OP (X)+, (X)
d. OP - (X), (X)
e. OP - (X), (X)+
f. OP (X)+, (X)+
g. OP (X)-, (X)
Using X as the stack pointer, which of these instructions can pop the top two elements 
from the stack, perform the designated operation (e.g., ADD source to destination 
and store in destination), and push the result back on the stack? For each such instruc-
tion, does the stack grow toward memory location 0 or in the opposite direction?
 13.13 
Assume a stack-oriented processor that includes the stack operations PUSH and POP. 
Arithmetic operations automatically involve the top one or two stack elements. Begin 
with an empty stack. What stack elements remain after the following instructions are 
executed?
PUSH 4
PUSH 7
PUSH 8
ADD
PUSH 10
SUB
MUL
 13.14 
Justify the assertion that a 32-bit instruction is probably much less than twice as useful 
as a 16-bit instruction.
 13.15 
Why was IBM’s decision to move from 36 bits to 32 bits per word wrenching, and to 
whom?

482  CHAPTER 13 / INSTRUCTION SETS: ADDRESSING MODES AND FORMATS
 13.16 
Assume an instruction set that uses a fixed 16-bit instruction length. Operand speci-
fiers are 6 bits in length. There are K two-operand instructions and L zero-operand 
instructions. What is the maximum number of one-operand instructions that can be 
supported?
 13.17 
Design a variable-length opcode to allow all of the following to be encoded in a 36-bit 
instruction:
• instructions with two 15-bit addresses and one 3-bit register number
• instructions with one 15-bit address and one 3-bit register number
• instructions with no addresses or registers
 13.18 
Consider the results of Problem 10.6. Assume that M is a 16-bit memory address and 
that X, Y, and Z are either 16-bit addresses or 4-bit register numbers. The one-address 
machine uses an accumulator, and the two- and three-address machines have 16 regis-
ters and instructions operating on all combinations of memory locations and registers. 
Assuming 8-bit opcodes and instruction lengths that are multiples of 4 bits, how many 
bits does each machine need to compute X?
 13.19 
Is there any possible justification for an instruction with two opcodes?
 13.20 
The 16-bit Zilog Z8001 has the following general instruction format:
15  14  13  12  11  10  9  8  7  6  5  4  3  2  1  0
Mode
Opcode
w/b
Operand 2
Operand 1
The mode field specifies how to locate the operands from the operand fields. The w/b 
field is used in certain instructions to specify whether the operands are bytes or 16-bit 
words. The operand 1 field may (depending on the mode field contents) specify one 
of 16 general-purpose registers. The operand 2 field may specify any general-purpose 
registers except register 0. When the operand 2 field is all zeros, each of the original 
opcodes takes on a new meaning.
a. How many opcodes are provided on the Z8001?
b. Suggest an efficient way to provide more opcodes and indicate the trade-off 
 involved.

PROCESSOR STRUCTURE  
AND FUNCTION
14.1 Processor Organization
14.2 Register Organization
User-Visible Registers
Control and Status Registers
Example Microprocessor Register Organizations
14.3 Instruction Cycle
The Indirect Cycle
Data Flow
14.4 Instruction Pipelining
Pipelining Strategy
Pipeline Performance
Pipeline Hazards
Dealing with Branches
Intel 80486 Pipelining
14.5 The x86 Processor Family
Register Organization
Interrupt Processing
14.6 The Arm Processor
Processor Organization
Processor Modes
Register Organization
Interrupt Processing
14.7 Recommended Reading
14.8 Key Terms, Review Questions, and Problems
CHAPTER
