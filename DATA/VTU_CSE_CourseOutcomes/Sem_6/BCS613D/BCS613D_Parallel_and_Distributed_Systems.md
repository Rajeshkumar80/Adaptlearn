# BCS613D — Parallel and Distributed Systems

> **VTU B.E. CSE | 2022 Scheme | 6th Semester**

---

## 📋 Course Information

| Field | Details |
|---|---|
| **Subject Name** | Parallel and Distributed Systems |
| **Subject Code** | BCS613D |
| **Semester** | 6th |
| **Credits** | 03 |
| **Teaching Hours/Week** | 3L : 0T : 0P : 0S |
| **Total Pedagogy Hours** | 40 |
| **CIE Marks** | 50 |
| **SEE Marks** | 50 |
| **Total Marks** | 100 |
| **Exam Duration** | 3 Hours |

---

## 🎯 Course Objectives

1. Understand hardware and software architectures of parallel and distributed computing systems.
2. Master parallel programming models: shared memory with OpenMP and message passing with MPI.
3. Analyze synchronization, deadlock prevention, and clock synchronization in distributed systems.
4. Learn distributed consensus algorithms, replication, and fault tolerance strategies.
5. Explore modern distributed data frameworks like MapReduce, Hadoop, and Spark.

---

## 📚 Module-Wise Syllabus

### Module 1: Parallel Hardware & Computational Models
- Motivations for Parallelism, Flynn's Taxonomy: SISD, SIMD, MISD, MIMD architectures
- Shared-Memory Systems: Uniform Memory Access (UMA) vs Non-Uniform Memory Access (NUMA)
- Distributed-Memory Systems: Clusters, Massively Parallel Processors (MPPs)
- Interconnection Networks: Static topologies (Bus, Ring, Mesh, Hypercube) and Dynamic switches (Crossbar, Omega network)
- Performance Metrics: Speedup, Efficiency, Amdahl's Law, Gustafson's Law, Scalability

### Module 2: Parallel Programming (OpenMP & MPI)
- Shared-Memory Programming with OpenMP: Compiler directives (#pragma omp parallel)
- Work-sharing constructs (omp for, sections), Private vs Shared variables, Reduction clause
- Synchronization in OpenMP: critical, atomic, barrier, master directives
- Distributed-Memory Programming with MPI (Message Passing Interface): MPI environment (MPI_Init, MPI_Finalize, MPI_Comm_rank, MPI_Comm_size)
- Point-to-Point Communication: MPI_Send, MPI_Recv, Blocking vs Non-blocking communication
- Collective Communications: MPI_Bcast, MPI_Scatter, MPI_Gather, MPI_Reduce

### Module 3: Distributed System Foundations & Synchronization
- Characterization of Distributed Systems: Definition, Goals, Challenges (Heterogeneity, Scalability, Fault tolerance)
- System Models: Architectural models, Fundamental models (Interaction, Failure models)
- Time and Global States: Physical clocks, Clock skew and drift, Clock Synchronization Algorithms (Cristian's, Berkeley, NTP)
- Logical Time: Lamport's Logical Clocks, Total ordering, Vector Clocks
- Global State and Snapshot Algorithms: Chandy-Lamport snapshot algorithm

### Module 4: Distributed Coordination & Consensus
- Distributed Mutual Exclusion: Centralized algorithm, Distributed algorithm (Ricart-Agrawala), Token Ring algorithm
- Election Algorithms: Bully algorithm, Ring algorithm
- Distributed Consensus and Agreement: Consensus in synchronous vs asynchronous systems, FLP impossibility result
- Paxos Algorithm: Roles (Proposers, Acceptors, Learners), Two-phase commit protocol
- Raft Consensus Algorithm: Leader election, Log replication, Safety guarantees

### Module 5: Fault Tolerance, Distributed Storage & Big Data
- Fault Tolerance: Failure classification, Redundancy, Recovery (Backward and Forward recovery), Checkpointing
- Replication and Consistency: Data-centric consistency models (Strict, Sequential, Causal, Eventual consistency)
- Distributed File Systems: NFS (Network File System) architecture, Google File System (GFS) concepts
- Distributed Data Processing: MapReduce programming model (Map, Shuffle, Reduce)
- Apache Hadoop Ecosystem (HDFS, YARN) and Apache Spark (Resilient Distributed Datasets — RDDs)

---

## ✅ Course Outcomes (COs)

| CO | Description |
|---|---|
| **CO1** | Analyze parallel computer architectures and evaluate parallel performance using Amdahl's and Gustafson's Laws. |
| **CO2** | Develop parallel shared-memory code using OpenMP and distributed message-passing applications with MPI. |
| **CO3** | Implement clock synchronization algorithms and logical timestamping in distributed systems. |
| **CO4** | Evaluate distributed mutual exclusion, election algorithms, and consensus protocols (Paxos, Raft). |
| **CO5** | Explain fault tolerance mechanisms, distributed file systems (HDFS), and MapReduce big data execution. |

---

## 📖 Textbooks & References

- **Distributed Systems: Principles and Paradigms** — Andrew S. Tanenbaum and Maarten van Steen, 3rd Edition, Pearson.
- **An Introduction to Parallel Programming** — Peter S. Pacheco, Morgan Kaufmann.
- **Distributed Systems: Concepts and Design** — George Coulouris, Jean Dollimore, Tim Kindberg, Gordon Blair, 5th Edition, Pearson.

---

> ⚠️ *Always refer to the official VTU website or your college's academic portal for the most current syllabus updates.*
