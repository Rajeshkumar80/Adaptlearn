import { prisma } from "../src/db";

async function main() {
  const teacher = await prisma.user.findFirst({ where: { role: "TEACHER" } }) || await prisma.user.findFirst();
  if (!teacher) throw new Error("No teacher user found");

  console.log("Seeding comprehensive VTU tests across semesters...");

  const testDefinitions = [
    {
      subjectCode: "BCS301",
      title: "Mathematics for CS: Linear Algebra & Matrix Eigenvalues",
      moduleNumber: 1,
      durationMin: 25,
      difficulty: "MEDIUM",
      questions: [
        {
          text: "What is the condition for a square matrix A to be invertible?",
          options: ["Determinant det(A) ≠ 0", "Determinant det(A) = 0", "Matrix must be skew-symmetric", "Trace must equal 0"],
          correctIndex: 0,
          marks: 2,
        },
        {
          text: "If λ is an eigenvalue of matrix A, what is the eigenvalue of A²?",
          options: ["2λ", "λ²", "√λ", "1/λ"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "What is the dimension of the null space plus column space of an m×n matrix according to Rank-Nullity Theorem?",
          options: ["m", "n", "m + n", "min(m, n)"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "Which of the following is true for orthogonal matrices?",
          options: ["A^T = A", "A^T = -A", "A^T = A^(-1)", "det(A) = 0"],
          correctIndex: 2,
          marks: 2,
        },
      ],
    },
    {
      subjectCode: "BCS302",
      title: "Digital Design & Computer Organization: K-Maps & Addressing Modes",
      moduleNumber: 3,
      durationMin: 30,
      difficulty: "MEDIUM",
      questions: [
        {
          text: "Which 8086 addressing mode specifies the operand inside the instruction itself (e.g., MOV AX, 1234H)?",
          options: ["Direct Addressing", "Register Indirect", "Immediate Addressing", "Based Indexed"],
          correctIndex: 2,
          marks: 2,
        },
        {
          text: "In Karnaugh Map minimization, grouping 4 adjacent 1s eliminates how many boolean variables?",
          options: ["1 variable", "2 variables", "3 variables", "4 variables"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "What is the effective address calculated as in Based Indexed addressing?",
          options: ["EA = [BX/BP] + [SI/DI] + Displacement", "EA = [AX] + [BX]", "EA = Segment * 10H", "EA = SP + 2"],
          correctIndex: 0,
          marks: 2,
        },
        {
          text: "Which hazard occurs in pipelined processors when an instruction depends on the result of a previous uncompleted instruction?",
          options: ["Structural hazard", "Control hazard", "Data hazard", "Branch penalty"],
          correctIndex: 2,
          marks: 2,
        },
      ],
    },
    {
      subjectCode: "BCS303",
      title: "Operating Systems: Process Synchronization & Deadlocks",
      moduleNumber: 3,
      durationMin: 30,
      difficulty: "HARD",
      questions: [
        {
          text: "Which of the following is NOT one of the Coffman conditions required for a deadlock to occur?",
          options: ["Mutual exclusion", "Hold and wait", "Preemption allowed", "Circular wait"],
          correctIndex: 2,
          marks: 2,
        },
        {
          text: "In Banker's Algorithm, a state is considered safe if the system can allocate resources to each process in some order without entering:",
          options: ["Starvation", "Deadlock", "Context switch", "Page fault"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "What operation does semaphore wait() (P operation) perform on an integer value S?",
          options: ["Increments S by 1", "Decrements S by 1 if S > 0, otherwise waits", "Resets S to 0", "Doubles S"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "Which scheduling algorithm is proven optimal for minimizing average waiting time for a given set of stationary processes?",
          options: ["First-Come First-Served (FCFS)", "Shortest Job First (SJF)", "Round Robin (RR)", "Priority Scheduling"],
          correctIndex: 1,
          marks: 2,
        },
      ],
    },
    {
      subjectCode: "BCS401",
      title: "Analysis & Design of Algorithms: Divide-and-Conquer & Dynamic Programming",
      moduleNumber: 2,
      durationMin: 30,
      difficulty: "MEDIUM",
      questions: [
        {
          text: "What is the average time complexity of Merge Sort on an array of size n?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "Which property is essential for applying Dynamic Programming to an optimization problem?",
          options: ["Greedy choice only", "Overlapping subproblems and optimal substructure", "Strictly linear recurrence", "Divide and conquer with independent subproblems"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "In 0/1 Knapsack problem with n items and capacity W, what is the DP time complexity?",
          options: ["O(n log W)", "O(n * W)", "O(2^n)", "O(n + W)"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "Which algorithm finds the single-source shortest path in a graph with non-negative edge weights?",
          options: ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Prim's Algorithm", "Floyd-Warshall Algorithm"],
          correctIndex: 0,
          marks: 2,
        },
      ],
    },
    {
      subjectCode: "BCS403",
      title: "DBMS: Relational Model & Normalization (1NF to BCNF)",
      moduleNumber: 3,
      durationMin: 30,
      difficulty: "MEDIUM",
      questions: [
        {
          text: "A relation is in Second Normal Form (2NF) if it is in 1NF and contains no:",
          options: ["Transitive dependencies", "Partial functional dependencies on candidate keys", "Multivalued dependencies", "Composite attributes"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "In 3NF, for every functional dependency X -> A, what must be true?",
          options: ["X must be a superkey or A must be a prime attribute", "A must be a foreign key", "X must be null", "A must be a composite key"],
          correctIndex: 0,
          marks: 2,
        },
        {
          text: "Which SQL clause is used to filter groups created by GROUP BY?",
          options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "What ACID property ensures that all operations in a transaction are completed or none are?",
          options: ["Atomicity", "Consistency", "Isolation", "Durability"],
          correctIndex: 0,
          marks: 2,
        },
      ],
    },
    {
      subjectCode: "BCS501",
      title: "Software Engineering & Project Management: Agile & Architecture",
      moduleNumber: 2,
      durationMin: 25,
      difficulty: "EASY",
      questions: [
        {
          text: "Which Agile framework organizes work in fixed time-boxed iterations called Sprints (typically 2-4 weeks)?",
          options: ["Scrum", "Waterfall", "Spiral", "V-Model"],
          correctIndex: 0,
          marks: 2,
        },
        {
          text: "In Clean Architecture and MVC, what is the responsibility of the Controller?",
          options: ["Direct DB storage", "Handling user input and routing to Model/View", "Rendering HTML/CSS only", "Compiling bytecode"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "What type of testing validates whether recent code changes have disrupted existing functional features?",
          options: ["Unit testing", "Regression testing", "Smoke testing", "Stress testing"],
          correctIndex: 1,
          marks: 2,
        },
      ],
    },
    {
      subjectCode: "BCS503",
      title: "Theory of Computation: Regular Languages & Turing Machines",
      moduleNumber: 2,
      durationMin: 30,
      difficulty: "HARD",
      questions: [
        {
          text: "Which class of automata recognizes regular languages?",
          options: ["Deterministic Finite Automata (DFA)", "Pushdown Automata (PDA)", "Turing Machines", "Linear Bounded Automata"],
          correctIndex: 0,
          marks: 2,
        },
        {
          text: "What theoretical device is used by Pushdown Automata to recognize Context-Free Languages?",
          options: ["Infinite tape", "Stack", "Queue", "Matrix"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "What is the Halting Problem according to Alan Turing?",
          options: ["Decidable in polynomial time", "Undecidable", "NP-Complete", "Linear-time solvable"],
          correctIndex: 1,
          marks: 2,
        },
      ],
    },
    {
      subjectCode: "BCS601",
      title: "Compiler Design: Lexical Analysis & LR Parsing",
      moduleNumber: 2,
      durationMin: 30,
      difficulty: "HARD",
      questions: [
        {
          text: "What data structure does a compiler's Lexical Analyzer use to track identifiers, types, and scopes?",
          options: ["Abstract Syntax Tree", "Symbol Table", "Parse Tree", "Directed Acyclic Graph"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "Which type of parser scans input from Left to right and produces a Rightmost derivation in reverse?",
          options: ["LL(1) Parser", "LR Parser", "Recursive Descent Parser", "Predictive Parser"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "In intermediate code generation, what does Three-Address Code (TAC) guarantee?",
          options: ["At most three operands/addresses per instruction", "Exactly 3 registers used", "Code is in assembly", "Zero temporary variables"],
          correctIndex: 0,
          marks: 2,
        },
      ],
    },
    {
      subjectCode: "BCS701",
      title: "Internet of Things: Architecture, Sensors & Protocols",
      moduleNumber: 1,
      durationMin: 25,
      difficulty: "MEDIUM",
      questions: [
        {
          text: "Which lightweight publish-subscribe messaging protocol is widely used in IoT over TCP?",
          options: ["MQTT", "HTTP", "FTP", "SMTP"],
          correctIndex: 0,
          marks: 2,
        },
        {
          text: "What is the primary role of an actuator in an IoT edge system?",
          options: ["Converts physical quantities to electrical signals", "Converts electrical control signals into physical actions/motion", "Stores cloud databases", "Encrypts packets"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "In the 6LoWPAN protocol, what network technology is IPv6 adapted for?",
          options: ["Low-power Wireless Personal Area Networks (IEEE 802.15.4)", "Gigabit Ethernet", "Satellite fiber", "5G base stations"],
          correctIndex: 0,
          marks: 2,
        },
      ],
    },
    {
      subjectCode: "BCS703",
      title: "Cryptography & Network Security: Public Key & Hash Functions",
      moduleNumber: 3,
      durationMin: 30,
      difficulty: "HARD",
      questions: [
        {
          text: "On which mathematical problem is the security of RSA encryption primarily based?",
          options: ["Discrete logarithm problem", "Prime factorization of large composite integers", "Elliptic curve point multiplication", "Knapsack problem"],
          correctIndex: 1,
          marks: 2,
        },
        {
          text: "What property of cryptographic hash functions guarantees that finding two distinct inputs with the same hash is computationally infeasible?",
          options: ["Pre-image resistance", "Second pre-image resistance", "Collision resistance", "Non-repudiation"],
          correctIndex: 2,
          marks: 2,
        },
        {
          text: "In SSL/TLS handshake, what is asymmetric encryption primarily used for?",
          options: ["Encrypting all web traffic streaming", "Securely exchanging a symmetric session key", "Database indexing", "DNS lookup"],
          correctIndex: 1,
          marks: 2,
        },
      ],
    },
  ];

  let createdCount = 0;
  for (const def of testDefinitions) {
    const existing = await prisma.test.findFirst({
      where: { subjectCode: def.subjectCode, title: def.title }
    });

    if (existing) {
      console.log(`Test already exists: "${def.title}"`);
      continue;
    }

    const totalMarks = def.questions.reduce((sum, q) => sum + q.marks, 0);
    await prisma.test.create({
      data: {
        subjectCode: def.subjectCode,
        title: def.title,
        durationMin: def.durationMin,
        moduleNumber: def.moduleNumber,
        difficulty: def.difficulty,
        attemptLimit: 3,
        integrityThreshold: 4,
        totalMarks,
        isActive: true,
        createdByTeacherId: teacher.id,
        questions: {
          create: def.questions.map(q => ({
            text: q.text,
            options: q.options,
            correctIndex: q.correctIndex,
            marks: q.marks,
            questionType: "MCQ",
          }))
        }
      }
    });
    createdCount++;
    console.log(`Created Test: [${def.subjectCode}] ${def.title} (${def.questions.length} questions)`);
  }

  console.log(`\nSuccessfully seeded ${createdCount} new comprehensive test suites!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
