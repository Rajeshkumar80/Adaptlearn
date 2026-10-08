<!-- PROVENANCE: subject_code=BCS601 | subject_name=Cloud Computing (Open Stack /Google) | semester=6 | module=5 | source_type=MODULE_NOTES | source_file=module5.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS601 — Module 5

## Code Optimization, Run-Time Environments & Target Code Generation

**Subject:** BCS601 (Compiler Design)
**Module:** Module 5
**Content type:** primary_module
**Sources:** Compilers: Principles, Techniques, and Tools (Dragon Book, 2nd Edition), VTU BCS601 Syllabus

---

### 1. Run-Time Storage Organization

The run-time storage space of an executing target program is typically partitioned into logical segments:
1. **Target Code Segment:** Fixed-size read-only area containing generated machine instructions.
2. **Static Data Segment:** Fixed-size global variables and compiler constants known at compile time.
3. **Stack Segment:** Grows dynamically downward; allocates **Activation Records (Stack Frames)** for procedure calls (local variables, return address, saved registers, parameters).
4. **Heap Segment:** Grows dynamically upward; manages dynamically allocated memory (via `malloc` or `new`) and garbage collection.

---

### 2. Principal Sources of Code Optimization

Optimizations transform intermediate code to execute faster and use fewer resources without altering the program's observable semantics.

#### A. Basic Blocks and Flow Graphs:
- A **Basic Block** is a sequence of consecutive three-address statements in which control enters exclusively at the first statement and leaves exclusively at the last statement without halting or branching in the middle.
- **Algorithm to Identify Basic Blocks:**
  1. Determine **leaders** (first statement in program; target of any conditional/unconditional jump; statement immediately following any jump).
  2. For each leader, its basic block consists of the leader and all statements up to but not including the next leader.
- A **Flow Graph** is a directed graph where nodes are basic blocks and directed edges represent control-flow transfers between blocks.

#### B. Core Optimization Techniques:
1. **Local Optimizations (within Basic Blocks):**
   - *Common Subexpression Elimination:* If `t1 = b + c` and later `t2 = b + c` where neither `b` nor `c` has changed, replace with `t2 = t1`.
   - *Copy Propagation:* If `x = y`, substitute `y` for `x` in subsequent uses to eliminate redundant temporary variables.
   - *Dead Code Elimination:* Remove computations whose results are never read.
2. **Loop Optimizations (across Basic Blocks):**
   - *Code Motion (Loop Invariant Computation):* Move expressions computed inside a loop whose operands never change outside before the loop header.
   - *Induction Variable Elimination & Reduction in Strength:* Replace expensive operations (multiplication `i * 4`) with cheaper operations (addition `offset + 4`) tied to loop counter variables.
3. **Peephole Optimization:**
   A target-code optimization technique that inspects a small sliding window ("peephole") of generated instructions to eliminate redundant loads/stores, unreachable jumps, and algebraic identities (`x + 0`, `x * 1`).

---

### 3. Issues in the Design of a Code Generator

The code generator converts optimized intermediate code into target machine instructions:
1. **Instruction Selection:** Choosing the best target machine instructions matching TAC statements while minimizing cost.
2. **Register Allocation and Assignment:**
   - *Register Allocation:* Deciding which program variables reside in fast CPU registers rather than main memory.
   - *Register Assignment:* Deciding the specific register (e.g., `R0`, `R1`) assigned to each variable.
3. **Evaluation Order:** Ordering target instructions to minimize the number of temporary registers needed.\n