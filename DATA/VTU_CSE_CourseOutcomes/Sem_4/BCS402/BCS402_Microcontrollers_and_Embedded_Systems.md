# BCS402 — Microcontrollers and Embedded Systems

> **VTU B.E. CSE | 2022 Scheme | 4th Semester**

---

## 📋 Course Information

| Field | Details |
|---|---|
| **Subject Name** | Microcontrollers and Embedded Systems |
| **Subject Code** | BCS402 |
| **Semester** | 4th |
| **Credits** | 04 |
| **Teaching Hours/Week** | 3L : 0T : 2P : 0S |
| **Total Pedagogy Hours** | 40 Theory + Lab |
| **CIE Marks** | 50 |
| **SEE Marks** | 50 |
| **Total Marks** | 100 |
| **Exam Duration** | 3 Hours |

---

## 🎯 Course Objectives

1. Understand microcontroller architectures, internal registers, and memory organization.
2. Write assembly and Embedded C programs for ARM Cortex-M microcontrollers.
3. Interface on-chip peripherals including Timers, PWM, and Serial communication channels.
4. Handle hardware and software interrupts using the Nested Vectored Interrupt Controller (NVIC).
5. Interface external sensors, actuators, and display devices to build cyber-physical systems.

---

## 📚 Module-Wise Syllabus

### Module 1: ARM Cortex-M Architecture & Fundamentals
- Introduction to Embedded Systems: Definition, Classification, Core components
- Microprocessors vs Microcontrollers, RISC vs CISC Architecture overview
- ARM Cortex-M Architecture: Programmer's model, Register organization, Special registers (PSR, PRIMASK)
- Memory Map, System Control Block, Endianness, Memory Protection Unit (MPU)
- Reset Sequence, Exceptions and Interrupts overview
- Low-power modes and system clock configurations

### Module 2: ARM Instruction Set & Assembly Programming
- ARM Cortex Instruction Set: Data processing instructions (Arithmetic, Logical, Shifts)
- Branch and Control Flow: Conditional branches, Loops, Function calls (BL/BX)
- Load/Store Instructions: Single register, Multiple register transfers (LDM/STM)
- Addressing Modes: Immediate, Register, Pre-indexed, Post-indexed
- Assembler Directives, Assembly Language program structure and debugging

### Module 3: Embedded C & GPIO Programming
- Embedded C Fundamentals: Data types, Bitwise operators, volatile and const qualifiers
- General Purpose I/O (GPIO) Architecture: Pin configuration, Pin direction, Pull-up/pull-down
- Reading Digital Inputs: Switches, Keypads, Contact debouncing methods
- Controlling Digital Outputs: LEDs, 7-Segment Displays, Relay drivers
- Character LCD (16x2) Interfacing: Commands, Data transfer, Timing diagrams

### Module 4: Timers, PWM & Serial Communication
- General-Purpose Timers: Prescaler, Auto-reload register, Timer delay calculation
- SysTick Timer: Architecture, Configuration, Millisecond delay generation
- Pulse Width Modulation (PWM): Duty cycle control, Frequency calculation, DC Motor speed control
- UART/USART: Baud rate generation, Transmit/Receive register buffers, Serial data transmission
- SPI and I2C Protocols: Bus topology, Master-Slave data exchange, Timing specifications

### Module 5: Interrupts, ADC/DAC & Sensor Interfacing
- Nested Vectored Interrupt Controller (NVIC): Interrupt priority, Vector table, ISR design rules
- External Interrupt Line (EXTI) configuration and handling
- Analog-to-Digital Converter (ADC): Successive approximation, Sampling time, Channel multiplexing
- Digital-to-Analog Converter (DAC): Configuration, Sine wave and Triangular wave generation
- Actuator & Sensor Interfacing: Stepper Motor drive sequences, Ultrasonic distance sensor, Temperature sensor

---

## ✅ Course Outcomes (COs)

| CO | Description |
|---|---|
| **CO1** | Explain the architectural components, programmer model, and memory hierarchy of ARM microcontrollers. |
| **CO2** | Develop and optimize Assembly and Embedded C programs for computational and control tasks. |
| **CO3** | Design and configure GPIO interfaces to control input switches, displays, and output actuators. |
| **CO4** | Program on-chip timers, PWM channels, and serial communication buses (UART/SPI/I2C). |
| **CO5** | Implement interrupt-driven embedded systems with analog-to-digital conversion and physical sensors. |

---

## 📖 Textbooks & References

- **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors** — Joseph Yiu, 3rd Edition, Elsevier / Newnes.
- **Embedded Systems: Real-Time Interfacing to ARM Cortex-M Microcontrollers** — Jonathan W. Valvano.
- **The 8051 Microcontroller and Embedded Systems Using Assembly and C** — Muhammad Ali Mazidi, Janice Gillispie Mazidi, Pearson.

---

> ⚠️ *Always refer to the official VTU website or your college's academic portal for the most current syllabus updates.*
