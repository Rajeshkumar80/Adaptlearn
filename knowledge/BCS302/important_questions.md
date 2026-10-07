# BCS302 — Important Questions

**Subject:** BCS302 (Digital Design and Computer Organization)
**Content type:** important_questions
**Source:** important_questions.md

---

# BCS302 — Important Questions & Question Bank
**Subject:** Digital Design and Computer Organization (DDCO)
**Generated:** 2026-10-02

---

## Question Bank With Solution

MODULE 1 & 2 
1. Minimize the following boolean function- 
           F(A, B, C, D) = Σm(0, 1, 2, 5, 7, 8, 9, 10, 13, 15) 
 
Solution: 
                     
 
 
 
Thus, minimized boolean expression is- 
F(A, B, C, D) = BD + C’D + B’D’ 
 
2. Minimize the following boolean function 
F(A, B, C, D) = Σm(1, 3, 4, 6, 8, 9, 11, 13, 15) + Σd(0, 2, 14) 
 
Thus, minimized boolean expression is- 
F(A, B, C, D) = AD + B’D + B’C’ + A’D’ 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

3. Minimize the following boolean function 
            F(A, B, C) = Σm(0, 1, 6, 7) + Σd(3, 5) 
 
 
 
 
 
 
Thus, minimized boolean expression is 
F(A, B, C) = AB + A’B’ 
 
4. Minimize the following boolean function 
           F(A, B, C) = Σm(1, 2, 5, 7) + Σd(0, 4, 6) 
 
 
 
 
Thus, minimized boolean expression is 
F(A, B, C) = A + B’ + C’ 
 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

5. Minimize the following boolean function 
           F(A, B, C) = Σm(0, 1, 6, 7) + Σd(3, 4, 5) 
 
 
 
 
 
Thus, minimized boolean expression is 
F(A, B, C) = A + B’ 
 
6. Minimize the following boolean function 
           F(A, B, C, D) = Σm(0, 2, 8, 10, 14) + Σd(5, 15) 
 
 
 
Thus, minimized boolean expression is 
F(A, B, C, D) = ACD’ + B’D’ 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

7. Minimize the following boolean function- 
           F(A, B, C, D) = Σm(3, 4, 5, 7, 9, 13, 14, 15) 
 
 
 
 
Thus, minimized boolean expression is 
F(A, B, C, D) = A’BC’ + A’CD + AC’D + ABC 
 
8. Minimize the following boolean function 
           F(W, X, Y, Z) = Σm(1, 3, 4, 6, 9, 11, 12, 14) 
 
 
Thus, minimized boolean expression is- 
F(W, X, Y, Z) = X ⊕ Z 
 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

9. Minimize the following boolean function 
     F(A,B,C)=π(0,3,6,7) 
 
 
 
 
 
Thus, minimized boolean expression is- 
 
                             (A' + B’) (B’ + C’) (A + B + C)  
 
 
 
10. Minimize the following boolean function 
     F(A,B,C,D)= π (3,5,7,8,10,11,12,13)  
 
 
 
 
Thus, minimized boolean expression is- 
 
 
 
(C+D’+B’).(C’+D’+A).(A’+C+D).(A’+B+C’)  
 
 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

11. Minimize the following boolean function 
            F (P, Q, R) = π (0,3,6,7) 
 
 
 
 
 
Thus, minimized boolean expression is- 
                                                                   (A’ + B’) (A’ + C’) (A + B + C) 
 
 
12. Minimize the following boolean function 
           F (A, B, C, D) = π (3, 5, 7, 8, 10, 11, 12, 13) 
 
 
 
Thus, minimized boolean expression is- 
                                (C + D’+ B’).(C’ + D’+A).(A’+ C + D).(A’+ B + C’) 
 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

13. Write Verilog code for the following digital circuits. 
a) AND gate 
b) NOT gate 
AND gate 
 
//AND gate using Structural modeling 
module and_gate_s(a,b,y); 
input a,b; 
output y; 
 
and(y,a,b); 
                 
endmodule 
 
 
 
//AND gate using data flow modeling 
module and_gate_d(a,b,y); 
input a,b; 
output y; 
 
assign y = a & b; 
                 
endmodule 
 
//AND gate using behavioural modeling 
module nAND_gate_b(a,b,y); 
input a; 
output y; 
 
always @ (a,b) 
y = a & b; 
                 
endmodule 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

NOT gate 
 
//NOT gate using Structural modeling 
module not_gate_s(a,y); 
input a; 
output y; 
 
not(y,a); 
                 
endmodule 
 
 
 
//NOT gate using data flow modeling 
module not_gate_d(a,y); 
input a; 
output y; 
 
assign y = ~a; 
                 
endmodule 
 
//NOT gate using behavioural modeling 
module not_gate_b(a,y); 
input a; 
output reg y; 
 
always @ (a) 
y = ~a; 
                 
endmodule 
QUESTION BANK WITH SOLUTION                   BCS302
vtucode.in

14. Develop Verilog code for the following combinational logic circuts using Structural and 
Dataflow description. 
 
a) 2x4 Decoder                  b)     4x1 Multiplexer    
 
2x4 Decoder 
                   
module decoder_2_4(a,b,w,x,y,z); 
 
output w,x,y,z; 
input a,b; 
 
assign w = (~a) & (~b); 
assign x = (~a) & b; 
assign y = a & (~b); 
assign z = a & b; 
end module 
 
 
4x1 Multiplexer    
 
module m41(out, i0, i1, i2, i3, s0, s1); 
output out; 
input i0, i1, i2, i3, s0, s1; 
assign y0 = (i0 & (~s0) & (~s1)); 
assign y1 = (i1 & (~s0) & s1); 
assign y2 = (i2 & s0 & (~s1)); 
assign y3 = (i3 & s0 & s1); 
assign out = (y0 | y1 | y2 | y3); 
end module 
 
15. Explain Binary Adder (Parallel Adder) with a neat diagram 
The 4-bit binary adder using full adder circuits is capable of adding two 4-bit 
numbers resulting in a 4-bit sum and a carry output as shown in figure below 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302
vtucode.in

Since all the bits of augend and addend are fed into the adder circuits simultaneously and the 
additions in each position are taking place at the same time, this circuit is known as parallel 
adder. 
 
Let the 4-bit words to be added be represented by, 
A3A2A1A0= 1111 and B3B2B1B0= 0011 
 
 
The bits are added with full adders, starting from the least significant position, to form the sum 
it and carry bit. The input carry C0 in the least significant position must be 0. The carry output 
of the lower order stage is connected to the carry input of the next higher order stage. Hence 
this type of adder is called ripple-carry adder. 
 
In the least significant stage, A0, B0 and C0 (which is 0) are added resulting in sum S0 and carry 
C1. This carry C1 becomes the carry input to the second stage. Similarly in the second stage, 
A1, B1 and C1 are added resulting in sum S1 and carry C2, in the third stage, A2, B2 and C2 are 
added resulting in sum S2 and carry C3, in the third stage, A3, B3 and C3 are added resulting in 
sum S3 and C4, which is the output carry. 
 
Thus the circuit results in a sum (S3S2S1S0) and a carry output (Cout). 
 
16. What is Decoder? Explain 2 x 4 decoder with a neat diagram. 
A decoder is a combinational circuit that converts binary information from  n input 
lines to a maximum of  2n unique output lines. 
 
 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302              BCS302
vtucode.in

Here the 2 inputs are decoded into 4 outputs, each output representing one of the minterms of 
the two input variables.  
 
The output Y0 is active, ie., D0= 1 when inputs A= B= 0, 
D1 is active when inputs, A= 0 and B= 1, 
D2 is active, when input A= 1 and B= 0, 
D3 is active, when inputs A= B= 1. 
 
17. What is Multiplexer? Explain 4 : 1 Multiplexer with a neat diagram. 
A multiplexer or MUX, is a combinational circuit with more than one input line, one 
  output line and more than one selection line. 
Each of the four inputs I0 through I3, is applied to one input of AND gate. 
Selection lines S1 and S0 are decoded to select a particular AND gate. The outputs of 
the AND gate are applied to a single OR gate that provides the 1-line output. 
QUESTION BANK WITH SOLUTION                   BCS302              BCS302
vtucode.in

To demonstrate the circuit operation, consider the case when S1S0= 10. The AND 
gate associated with input I2 has two of its inputs equal to 1 and the third input 
connected to I2. The other three AND gates have atleast one input equal to 0, which 
makes their outputs equal to 0. The OR output is now equal to the value of I2, providing 
a path from the selected input to the output. 
The data output is equal to I0 only if S1= 0 and S0= 0; Y= I0S1‘S0‘. 
The data output is equal to I1 only if S1= 0 and S0= 1; Y= I1S1‘S0. 
The data output is equal to I2 only if S1= 1 and S0= 0; Y= I2S1S0‘. 
The data output is equal to I3 only if S1= 1 and S0= 1; Y= I3S1S0. 
When these terms are ORed, the total expression for the data output is, 
Y= I0S1’S0’+ I1S1’S0 +I2S1S0’+ I3S1S0. 
 
QUESTION BANK WITH SOLUTION                   BCS302              BCS302
vtucode.in

18. Implement the following boolean function using 4: 1 multiplexer, 
     F (A, B, C) = Σm (1, 3, 5, 6). 
 
Solution: 
Variables, n= 3 (A, B, C) 
Select lines= n-1 = 2 (S1, S0) 
2n-1 to MUX i.e., 22 to 1 = 4 to 1 MUX 
Input lines= 2n-1 = 22 = 4 (D0, D1, D2, D3) 
 
Implementation table: 
Apply variables A and B to the select lines. The procedures for implementing the 
function are: 
i. List the input of the multiplexer 
ii. List under them all the minterms in two rows as shown below. 
The first half of the minterms is associated with A‘ and the second half with A. The 
given function is implemented by circling the minterms of the function and applying 
the following rules to find the values for the inputs of the multiplexer. 
 
1. If both the minterms in the column are not circled, apply 0 to the corresponding input. 
2. If both the minterms in the column are circled, apply 1 to the corresponding input. 
3. If the bottom minterm is circled and the top is not circled, apply C to the input. 
4. If the top minterm is circled and the bottom is not circled, apply C‘ to the input. 
 
 
 
 
Multiplexer Implementation: 
 
               
 
QUESTION BANK WITH SOLUTION                   BCS302              BCS302
vtucode.in

19. F( P, Q, R, S)= Σm (0, 1, 3, 4, 8, 9, 15) 
 
Solution: 
Variables, n= 4 (P, Q, R, S) 
Select lines= n-1 = 3 (S2, S1, S0) 
2n-1 to MUX i.e., 23 to 1 = 8 to 1 MUX 
Input lines= 2n-1 = 23 = 8 (D0, D1, D2, D3, D4, D5, D6, D7) 
 
Implementation table: 
 
 
 
 
Multiplexer Implementation: 
 
                                       
 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302              BCS302
vtucode.in

20.Derive characteristic equation for JK, T, D and SR Flipflop 
 
 
 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302              BCS302
vtucode.in

MODULE 3 
 
 
1. With a neat diagram, Explain the basic operational concepts of a computer. Give operating 
steps.10 
 
                        
 
   
The fig shows how memory & the processor can be connected. In addition to the ALU & the control 
circuitry, the processor contains a number of registers used for several different purposes.  
The instruction register (IR):- Holds the instructions that is currently being executed. Its output 
is available for the control circuits which generates the timing signals that control the various 
processing elements in one execution of instruction.  
The program counter PC:-  
This is another specialized register that keeps track of execution of a program. It contains the 
memory address of the next instruction to be fetched and executed.  
Besides IR and PC, there are n-general purpose registers R0 through Rn-1. 
 
The other two registers which facilitate communication with memory are: - 
1. MAR – (Memory Address Register):- It holds the address of the location to be 
accessed. 
2. MDR – (Memory Data Register):- It contains the data to be written into or read out 
of the address location. 
 
Operating steps are 
1. Programs reside in the memory & usually get these through the I/P unit. 
2. Execution of the program starts when the PC is set to point at the first instruction of 
the program. 
QUESTION BANK WITH SOLUTION                   BCS302              BCS302
vtucode.in

3. Contents of PC are transferred to MAR and a Read Control Signal is sent to the 
memory. 
4. After the time required to access the memory elapses, the address word is read out 
of the memory and loaded into the MDR. 
5. Now contents of MDR are transferred to the IR & now the instruction is ready to 
be decoded and executed. 
6. If the instruction involves an operation by the ALU, it is necessary to obtain the 
required operands. 
7. An operand in the memory is fetched by sending its address to MAR & Initiating a 
read cycle. 
8. When the operand has been read from the memory to the MDR, it is transferred 
from MDR to the ALU. 
9. After one or two such repeated cycles, the ALU can perform the desired operation. 
10. If the result of this operation is to be stored in the memory, the result is sent to 
MDR. 
11. Address of location where the result is stored is sent to MAR & a write cycle is 
initiated. 
12. The contents of PC are incremented so that PC points to the next instruction that is 
to be executed. 
 
2. Explain Various Addressing Modes with examples.10 
 
 
 
 
In general, a program operates on data that reside in the computer’s memory. These data can be 
organized in a variety of ways. If we want to keep track of students’ names, we can write them in 
a list. Programmers use organizations called data structures to represent the data used in 
computations. These include lists, linked lists, arrays, queues, and so on.  
QUESTION BANK WITH SOLUTION                   BCS302              BCS302
vtucode.in

Programs are normally written in a high-level language, which enables the programmer to use 
constants, local and global variables, pointers, and arrays. The different ways in which  
the location of an operand is specified in an instruction are referred to as addressing modes.  
 
3. Describe Big Endian and Little Endian methods of byte addressing with proper example5 
 
 
There are two ways that byte addresses can be assigned across words, as shown in fig b. The name 
big-endian is used when lower byte addresses are used for the more significant bytes (the leftmost 
bytes) of the word. The name little-endian is used for the opposite ordering, where the lower byte 
addresses are used for the less significant bytes (the rightmost bytes) of the word. In addition to 
specifying the address ordering of bytes within a word, it is also necessary to specify the labeling 
of bits within a byte or a word. The same ordering is also used for labeling bits within a byte, that 
is, b7, b6, …., b0, from left to right.  
 
 
 
 
 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302              BCS302
vtucode.in

4. Write a note on Bus structure5 
 
The simplest and most common way of interconnecting various parts of the computer. To achieve a 
reasonable speed of operation, a computer must be organized so that all its units can handle one 
full word of data at a given time.A group of lines that serve as a connecting port for several devices 
is called a bus. 
In addition to the lines that carry the data, the bus must have lines for address and control purpose. 
Simplest way to interconnect is to use the single bus as shown. 
 
Since the bus can be used for only one transfer at a time, only two units can actively use the bus at 
any given time. Bus control lines are used to arbitrate multiple requests for use of one bus. 
Single bus structure is 
• 
Low cost 
• 
Very flexible for attaching peripheral devices 
Multiple bus structure certainly increases, the performance but also increases the 
cost 
significantly. 
 
5. Explain How to measure Performance of a Computer ? 5 
 
        At the start of execution, all program instructions and the required data are stored in the main 
memory. As the execution proceeds, instructions are fetched one by one over the bus into the 
processor, and a copy is placed in the cache later if the same instruction or data item is needed a 
second time, it is read directly from the cache. The processor and relatively small cache memory 
can be fabricated on a single IC chip.  
The internal speed of performing the basic steps of instruction processing on chip is very high and 
is considerably faster than the speed at which the instruction and data can be fetched from the main 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

memory. A program will be executed faster if the movement of instructions and data between the 
main memory and the processor is minimized, which is achieved by using the cache.  
For example:- Suppose a number of instructions are executed repeatedly over a short period of time 
as happens in a program loop. If these instructions are available in the cache, they can be fetched 
quickly during the period of repeated use. The same applies to the data that are used repeatedly. 
 
6. Compare Multiprocessors and Multicomputers.5 
 
Multiprocessor & microprocessors:-  
➢ Large computers that contain a number of processor units are called multiprocessor system.  
 
➢ These systems either execute a number of different application tasks in parallel or execute 
subtasks of a single large task in parallel.  
➢ All processors usually have access to all memory locations in such system & hence they are 
called shared memory multiprocessor systems.  
➢ The high performance of these systems comes with much increased complexity and cost.  
➢ In contrast to multiprocessor systems, it is also possible to use an interconnected group of 
complete computers to achieve high total computational power. These computers normally have 
access to their own memory units when the tasks they are executing need to communicate data they 
do so by exchanging messages over a communication network. This properly distinguishes them 
from shared memory multiprocessors, leading to name message-passing multi computer.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

MODULE 4 
1. Explain DMA transfer with bus arbitration.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a. The transfer of a block of data directly b/w an external device & 
main-memory w/o continuous involvement by processor is called 
DMA. 
b. DMA controller 
→ is a control circuit that performs DMA transfers (Figure 8.13). 
→ is a part of the I/O device interface. 
→ performs the functions that would normally be carried out by processor. 
While a DMA transfer is taking place, the processor can be used to execute another program 
c. DMA interface has three registers (Figure8.12): 
i. First register is used for storing starting-address. 
ii. Second register is used for storing word-count. 
iii. Third register contains status- &control-flags. 
d. The R/W bit determines direction of transfer. 
If R/W=1, controller performs a read-operation (i.e. it transfers data from 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

memory to I/O), Otherwise, controller performs a write-operation (i.e. it transfers 
data from I/O to memory). 
e. If Done=1, the controller 
→ has completed transferring a block of data and 
→ is ready to receive another command. (IE →Interrupt Enable). 
f. If IE=1, controller raises an interrupt after it has completed transferring a 
block of data. 
g. If IRQ=1, controller requests an interrupt. 
h. Requests by DMA devices for using the bus are always given higher priority 
than processor requests. 
i. There are 2 ways in which the DMA operation can be carried out: 
i. Processor originates most memory-access cycles. 
1. DMA controller is said to "steal" memory cycles from 
processor. 
2. Hence, this technique is usually called Cycle Stealing. 
ii. DMA controller is given exclusive access to main-memory to 
transfer a block of data without any interruption. This is known 
as Block Mode (or burst mode). 
 
 
 
 
 
2. What is cache memory? Explain different mapping function with diagram. 
 
Cache memory is an architectural arrangement which makes the main memory appear faster to 
the processor than it really is. Cache memory is based on the property of computer programs 
known as “locality of reference”. 
 
Three mapping functions can be used.  
1. Direct mapping  
2. Associative mapping  
3. Set-associative mapping.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

Direct mapping                                       Associative mapping 
 
 
 
 
  
 
Set-associative mapping 
 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302                   BCS302
vtucode.in

3. Explain centralized bus arbitration 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a. A single bus-arbiter performs the required arbitration (Figure:4.20). 
b. Normally, processor is the bus-master. 
c. Processor may grant bus-mastership to one of the DMA controllers. 
d. A DMA controller indicates that it needs to become bus-master by 
activating BR line. 
e. The signal on the BR line is the logical OR of bus-requests from all 
devices connected to it. 
f. Then, processor activates BG1 signal indicating to DMA controllers to 
use bus when it becomes free. 
g. BG1 signal is connected to all DMA controllers using a daisy-chain 
arrangement. 
h. If DMA controller-1 is requesting the bus, 
Then, DMA controller-1 blocks propagation of grant-signal to 
other devices. Otherwise, DMA controller-1 passes the grant 
downstream by asserting BG2. 
i. Current bus-master indicates to all devices that it is using bus by 
activating BBSY line. 
j. The bus-arbiter is used to coordinate the activities of all devices 
QUESTION BANK WITH SOLUTION                   BCS302
vtucode.in

requesting memory transfers. 
k. Arbiter ensures that only 1 request is granted at any 
given time according to a priority scheme. (BR →Bus-
Request, BG →Bus-Grant, BBSY →Bus Busy). 
 
l. The timing diagram shows the sequence of events for the devices 
connected to the processor. 
m. DMAcontroller-2 
→ requests and acquires bus-mastership and 
→ later releases the bus. (Figure: 4.21). 
n. After DMA controller-2 releases the bus, the processor resources bus-
mastership. 
 
4. Explain synchronous bus transfer during input operation 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a. All devices derive timing-information from a common clock-line. 
b. Equally spaced pulses on this line define equal time intervals. 
c. During a ”bus cycle‟, one data-transfer can take place. 
A sequence of events during a read-operation 
d. At time t0, the master(processor) 
→ places the device-address on address-lines & 
→ sends an appropriate command on control-lines (Figure 7.3). 
e. The command will 
→ indicate an input operation & 
→ specify the length of the operand to be read. 
f. Information travels over bus at a speed determined by physical & 
QUESTION BANK WITH SOLUTION                   BCS302
vtucode.in

electrical characteristics. 
g. Clock pulse width(t1-t0) must be longer than max. propagation-delay 
b/w devices connected to bus. 
h. The clock pulse width should be long to allow the devices to decode the 
address & control signals. 
i. The slaves take no action or place any data on the bus before t1. 
j. Information on bus is unreliable during the period t0 to t1 because 
signals are changing state. 
k. Slave places requested input-data on data-lines at time t1. 
l. At end of clock cycle (at time t2), master strobes (captures) data on 
data-lines into its input-buffer 
m. For data to be loaded correctly into a storage device, 
data must be available at input of that device for a period greater than setup-time of 
device. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302
vtucode.in

MODULE 5 
1. Illustrate the sequence of operation required to execute the instruction ADD (R3), R1 on 
single bus processor. 
Consider the instruction Add (R3),R1 which adds the contents of a memory-
location pointed by R3 to register R1. Executing this instruction requires the 
following actions:  
 
1) Fetch the instruction.  
2) Fetch the first operand.  
3) Perform the addition &  
4) Load the result into R1.  
 
 
QUESTION BANK WITH SOLUTION                   BCS302
vtucode.in

2. With a neat diagram, Explain multiple bus organization of computer and functional 
concepts 
 
QUESTION BANK WITH SOLUTION                   BCS302
vtucode.in

Disadvantage of Single-bus organization: Only one data-word can be transferred 
over the bus in a clock cycle. This increases the steps required to complete the execution 
of the instruction  
Solution: To reduce the number of steps, most processors provide multiple internal-
paths. Multiple paths enable several transfers to take place in parallel.  
• As shown in fig 7.8, three buses can be used to connect registers and the ALU of the 
processor.  
• All general-purpose registers are grouped into a single block called the Register File.  
• Register-file has 3 ports:  
1) Two output-ports allow the contents of 2 different registers to be simultaneously 
placed on buses A & B.  
2) Third input-port allows data on bus C to be loaded into a third register during the 
same clock-cycle.  
 
• Buses A and B are used to transfer source-operands to A & B inputs of ALU.  
• The result is transferred to destination over bus C.  
• Incrementer Unit is used to increment PC by 4.  
 
3. Explain pipeline performance  
 
QUESTION BANK WITH SOLUTION                   BCS302
vtucode.in

4. Explain basic idea of pipelining and 4 stage pipelining 
 
 
 
 
 
 
QUESTION BANK WITH SOLUTION                   BCS302
vtucode.in

QUESTION BANK WITH SOLUTION                   BCS302
vtucode.in

---

## Question Bank

BANGALORE INSTITUTE OF TECHNOLOGY 
K R ROAD, V V PURAM, BANGALORE-04 
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING 
Module wise Question Bank  
 
SUB (CODE): DDCO(BCS302)                                                                                                              Batch: 2022      
Academic year : 2023-24 (ODD Sem)                                                                                                    Sem: 3 
 
MODULE 1 
1. Describe positive logic and negative logic. List the equivalences in positive and negative 
logic. 
2. Realize the XOR gate using (i) NAND gate (ii) NOR gate. 
3. Define canonical Minterm form and canonical Maxterm form. 
4. Express the function F=x+yz as the sum of its minterms and product of  maxterms 
5. Convert the following 4-variable POS  to SOP form. 
      (i) ΠM(1,3,4,7)  (ii) ΠM(0,1,2,4,10,13,15) 
      
6. Find the minimal SOP and minimal POS of the following Boolean function using K-Map. 
       
( , , , )
(6,7,9,10,13)
(1,4,5,11)
f a b c d
m
d
=
+

  
7. With an example explain duality?  
8. List all Postulates and Theorems available in Boolean algebra?  
9. State and Prove Absorption Theorem.  
10. Find the complement and simplify  the Boolean function and also write logic circuit 
             F = A ′ B ′C ′ + A ′ B  C .  
11. Draw a two-level logic diagram to implement the Boolean function  
             F = BC ′ + A B + A C D .  
12. Demonstrating the non-associativity of the below operator: 
             ( x ↓y ) ↓ z ≠ x ↓ ( y ↓ z )  (3M) 
13. Define negative logic and Write the equivalent negative logic for positive NAND gate.   
14. Implement the Boolean function F = yz + z ′ y ′ + x ′ z With NAND and inverter gates. 
15. Simplify the following using K-Map  technique and find the Essential Prime Implicants. 
     
( )
( , , , )
(7,9,12,13,14,15)
(4,11) 
( )
( , , , )
(0,1,2,6,7,9,10,12)
(3,5). Verify the result using K-map.
(
) ( , ,
,
)
(0,1,2,3,10,11,12,13,14,15)
( ) (
,
, ,
)
(1,3,6,7,8,9,10,12
i P
f w x y z
m
d
ii Y
f a b c d
d
iii f A B C D
m
iv f W X Y Z
m
=
=
+
=
=
+
=
=




,13,14)

 
16. Simplify the following expressions using Karnaugh map. Implement the simplified 
circuit  using the gates as indicated: 
     ( ) ( , , , )
(1,5,7,9,10,13,15)
(8,11,14) using NAND gates.
(ii) ( , , ,
)
(0,1,2,4,5,6,8,9,12,13,14) using NOR gates.
i f w x y z
m
d
f A B C D
M
=
+
= 

 
         Question Bank
Digital Design and Computer Organization BCS302
  Module Wise Questions
website:vtucode.in

 
MODULE 2  
 
1. What is a multiplexer? Design a 4 to 1 multiplexer using logic gates. Write the truth table 
     and explain its working principle. 
2. Construct 4:1 multiplexer using only 2:1 multiplexer and also write Verilog program. 
3. Construct 8:1 multiplexer using only 2:1 multiplexer. 
4. Design  32 to 1 multiplexer using 16 to 1 multiplexer and one 2 to 1 multiplexer. 
5. Mention the differences between decoder and demultiplexer. 
6. (a) Realize Y
A B
B C
ABC


=
+
+
 using an 8 to 1 Multiplexer. 
     (b) Can it be realized with a 4 to 1 multiplxer? 
7. Design a priority encoder for a system with a 3 inputs, the middle bit with highest priority 
encoding to 10, the MSB with the next priority encoding to 11, while the LSB with least 
priority encoding to 01. 
8. Give state transition diagram of SR, D, JK and T flip flops. 
9. Obtain the characteristic equation of  SR, JK, D and T flip flops. 
      10. Explain the operation of edge triggered ‘SR’ flip flop with the help of a logic diagram     
            and truth table. Also draw the relevant waveforms. 
     11. Explain the working of Master Slave J K flip flops with logic diagram. 
     12. Derive the Excitation table for equation for D, T,SR, and JK Flip flops. 
     13 .with a example explain the syntax of conditional signal assignment statement in VHDL      
       and Verilog.     
      14. Differentiate between Latch and flip flop. 
      15. write Verilog program for demjultiplexer. 
      16.Explain the structure of VHDL and verilog program. Write Verilog  code for 4 bit parallel   
          adder using full adder as component. 
MODULE 3 
1. With a neat diagram explain the different processor registers. 
 
2. What are the factors that affect the performance?Explain any 4. 
 
3. What is performance measurement? Explain the overall SPEC rating for a computer in a 
program suite. 
 
4. Write the difference b/w RISC and CISC processors. 
 
5. A program contains 1000 instructions. Out of that 25% instructions requires 4 clock cycles, 
40% instructions requires 5 clock cycles and remaining requires 3 clock cycles for execution. 
Find the total time required to execute the program running in a 1GHz machine. 
 
6. Write a note on byte addressability,big-endian and little-endian assignment. 
 

7. Explain the basic operational concepts b/w the processor and the memory. 
 
8. Derive the basic performance equation? Discuss the measures to improve the performance. 
 
9. Explain processor clock and clock rate. 
 
10. What is an addressing mode? Explain any four addressing modes. 
 
11. Write ALP program to copy ‘N’ numbers from array ‘A’ to array ‘B’ using indirect 
addresses.(AssumeAandBarethestartingmemorylocationofaarray). 
 
12. With a neat block diagram, describe the I/O operation. 
 
13. Explain functional units of computer. 
 
14. Discuss connection between processor and memory . 
 
15.Mention four types of operations to be performed by instructions in a computer. Explain with 
basic types of instructions formats to carry out C<-[A]+[B]. 
 
16.How input and output operation performed by Processor? 
 
MODULE 4 
 
1. Define bus arbitration.Explain in detail both approach of bus arbitration. 
2. What is an interrupt? With example illustrate the concept of interrupts 
 
3. Explain in detail the situation where a number of devices capable of initiating interrupts are 
connected to the processor? How to resolve the problems? 
4. 
Explain the following terms a) interrupt service routine b) interrupt latency c) interrupt 
disabling. 
5. Draw the arrangement of a single bus structure and brief about memory mapped I/O. 
6. Explain interrupt enabling,interrupt disabling,edge triggering with respect to interrupts 
7. Draw the arrangement for bus arbitrations using a daisychain and explain in brief. 
8. With neat sketches explain various methods for handling multiple interrupt requests. 
9. Define memory mapped I/0 and I/0 mapped I/0 with examples 
 
10. Explain how interrupt request from several I/0 devices can be communicated toaprocessor 
through a single INTR line. 
 

11. What are the different methods of DMA. Explain in brief. 
13. Show with diagram the memory hierarchy with respect to speed , size and cost 
14.What is DMA? Explain the hardware registers that are required in a DMA controller chip.
Explain the use of DMA controller in a computer system with a neat diagram 
15.Explain with a block diagram a general 8 bit parallel interface. 
 
16. Explain different mapping functions used in cache memory. 
 
MODULE 5 
 
1. Discuss Connection of the memory to the processor with diagram, 
2.Explain with need diagram a single-bus structure. 
3. Discuss synchronous Bus operation with neat diagram. 
4. Discuss asynchronous Bus operation with neat diagram. 
5.Explain multiplebus organization and its advantages. 
6.Explain the role of cache memory in pipelining. 
7.Explain pipelining performance. 
8.Explain the processing and control capabilities of Microwave oven and Digital 
camera. 
 
 
            9.Explain the structure of General Purpose Multiprocessors. 
10.Describe the classifications of Parallel Structures. 
11.Describe the three bus organization of the datapath and describe in detail. 
12.Write control sequence for the instruction Add R1, R2, R3. 
13.Explain a complete processor with a neat diagram 
            14.Write and explain the control sequences for the execution of the following  
                instruction: Add(R3),R1. 
15. Explain Field coded micro Instructions with a neat diagram. 
 
16. Discuss with neat diagram I/O interface for an input device. 
 
 
Course Coordinator: Dr. Maya B S

---
