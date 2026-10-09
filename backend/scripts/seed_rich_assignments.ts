import { prisma } from "../src/db";

async function main() {
  const teacher = await prisma.user.findFirst({ where: { role: "TEACHER" } }) || await prisma.user.findFirst();
  const student = await prisma.user.findFirst({ where: { role: "STUDENT" } });
  if (!teacher) throw new Error("No teacher found");

  console.log("Seeding rich assignments across VTU subjects...");

  const assignmentDefs = [
    {
      subjectCode: "BCS301",
      title: "Matrix Decomposition and Eigenvalue Computation",
      description: "Implement QR decomposition and power iteration method for finding dominant eigenvalues of symmetric 4x4 matrices. Submit code and mathematical derivation.",
      dueOffsetDays: 7,
      submission: {
        content: "Completed QR decomposition using Gram-Schmidt orthogonalization in Python. Dominant eigenvalue converged in 12 iterations: λ_max = 8.414.",
        marks: 18,
        feedback: "Excellent convergence analysis. Clean implementation of orthonormal basis vectors.",
      },
    },
    {
      subjectCode: "BCS302",
      title: "K-Map Minimization and 4-Bit ALU Circuit Design",
      description: "Design and simulate a 4-bit Arithmetic Logic Unit supporting ADD, SUB, AND, OR operations using basic NAND/NOR logic gates. Include truth tables and timing diagrams.",
      dueOffsetDays: 10,
    },
    {
      subjectCode: "BCS303",
      title: "Process Scheduling Simulation & Deadlock Detection",
      description: "Write a C program simulating Round Robin scheduling with time quantum Q=4ms and implement Banker's Safety Algorithm to prevent resource deadlocks.",
      dueOffsetDays: 5,
      submission: {
        content: "Implemented round-robin scheduler with Gantt chart generator. Tested on 5 concurrent processes with Banker's safety state matrix check.",
        marks: 19,
        feedback: "Great job! Accurate calculation of average turnaround time and waiting time.",
      },
    },
    {
      subjectCode: "BCS304",
      title: "Self-Balancing AVL Tree and Dijkstra Graph Search",
      description: "Implement an AVL Tree with LL, RR, LR, and RL rotations. Benchmark insertion and deletion against standard Binary Search Tree on 10,000 random integers.",
      dueOffsetDays: 8,
    },
    {
      subjectCode: "BCS401",
      title: "Dynamic Programming Knapsack & Greedy Huffman Codes",
      description: "Solve 0/1 Knapsack using dynamic programming memoization. Construct optimal prefix codes using Huffman's greedy algorithm and calculate compression ratio.",
      dueOffsetDays: 12,
    },
    {
      subjectCode: "BCS402",
      title: "8051 Stepper Motor Interfacing and Delay Subroutines",
      description: "Write assembly language program to rotate a stepper motor 360 degrees clockwise and counter-clockwise in half-step mode with 500ms delay between steps.",
      dueOffsetDays: 6,
    },
    {
      subjectCode: "BCS403",
      title: "University Database Schema & BCNF Normalization",
      description: "Design a complete relational schema for university student course registration. Identify all functional dependencies and normalize tables from 1NF to BCNF.",
      dueOffsetDays: 14,
      submission: {
        content: "Normalized course registration table. Decomposed into Student, Course, Instructor, and Enrollment tables. Verified zero lossless-join and dependency preservation.",
        marks: 20,
        feedback: "Perfect decomposition. All FDs preserved in BCNF.",
      },
    },
    {
      subjectCode: "BCS501",
      title: "Software Requirements Specification (SRS) for Health Tracker",
      description: "Develop an IEEE 830 compliant SRS document including functional and non-functional requirements, use case diagrams, and sequence diagrams.",
      dueOffsetDays: 9,
    },
    {
      subjectCode: "BCS502",
      title: "Multi-Client TCP Chat Server with Socket Programming",
      description: "Create a multithreaded socket server in C or Python handling concurrent client connections with message broadcast and private messaging features.",
      dueOffsetDays: 11,
    },
    {
      subjectCode: "BCS503",
      title: "NFA to DFA Conversion and Minimization",
      description: "Given an NFA with ε-transitions, compute ε-closure, construct equivalent DFA using subset construction, and minimize states using table filling method.",
      dueOffsetDays: 4,
    },
    {
      subjectCode: "BCS601",
      title: "Lexical Analyzer and Recursive Descent Parser",
      description: "Implement a Lexical Analyzer in Python/C that tokens arithmetic expressions, handles identifiers, constants, and operators, and validates grammar with recursive descent parsing.",
      dueOffsetDays: 15,
    },
    {
      subjectCode: "BCS602",
      title: "Housing Price Prediction using Regression Models",
      description: "Train Linear, Ridge, and Lasso Regression models on the Boston/California housing dataset. Report RMSE, R² scores, and feature importance rankings.",
      dueOffsetDays: 8,
      submission: {
        content: "Applied Ridge regression (alpha=1.5) with StandardScaler preprocessing. Achieved R² of 0.82 and RMSE of 4.12 on test split.",
        marks: 17,
        feedback: "Good baseline results. Try hyperparameter tuning with GridSearchCV next.",
      },
    },
    {
      subjectCode: "BCS701",
      title: "ESP32 Sensor Telemetry over MQTT Protocol",
      description: "Configure simulated or hardware ESP32 to publish temperature and humidity telemetry to an MQTT broker over TLS. Include JSON payload formatting.",
      dueOffsetDays: 10,
    },
    {
      subjectCode: "BCS702",
      title: "Convolutional Neural Network for Image Classification",
      description: "Build and train a 4-layer CNN with BatchNormalization and Dropout on CIFAR-10 or MNIST. Compare accuracy curves with and without data augmentation.",
      dueOffsetDays: 13,
    },
    {
      subjectCode: "BCS703",
      title: "RSA Key Generation and Digital Signature Verification",
      description: "Implement 1024-bit RSA key generation using Miller-Rabin primality test. Sign a sample message hash using SHA-256 and verify validity of signature.",
      dueOffsetDays: 7,
    },
  ];

  let added = 0;
  for (const a of assignmentDefs) {
    const existing = await prisma.assignment.findFirst({
      where: { subjectCode: a.subjectCode, title: a.title }
    });

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + a.dueOffsetDays);

    let assignmentRecord = existing;
    if (!existing) {
      assignmentRecord = await prisma.assignment.create({
        data: {
          subjectCode: a.subjectCode,
          title: a.title,
          description: a.description,
          dueDate,
          createdByTeacherId: teacher.id,
        }
      });
      added++;
      console.log(`Created Assignment: [${a.subjectCode}] ${a.title}`);
    }

    // Add submission if specified and student exists
    if (student && a.submission && assignmentRecord) {
      await prisma.assignmentSubmission.upsert({
        where: {
          assignmentId_studentId: {
            assignmentId: assignmentRecord.id,
            studentId: student.id,
          }
        },
        update: {
          content: a.submission.content,
          marks: a.submission.marks,
          feedback: a.submission.feedback,
          gradedAt: new Date(),
        },
        create: {
          assignmentId: assignmentRecord.id,
          studentId: student.id,
          content: a.submission.content,
          marks: a.submission.marks,
          feedback: a.submission.feedback,
          gradedAt: new Date(),
        }
      });
    }
  }

  console.log(`\nSuccessfully populated ${added} new assignments across all semesters!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
