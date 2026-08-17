# BCS515B — Artificial Intelligence (Professional Elective - I)

## Module 2: Uninformed Search & Problem Solving

### Problem Solving Agents

- A **problem-solving agent** is a goal-based agent that uses **search** to decide what to do: it first *formulates* the goal and the problem, then *searches* for a solution (a sequence of actions), and finally *executes* the action sequence.
- **Search** is the process of looking for a sequence of actions that reaches the goal; the environment is assumed to be **static, observable, deterministic, and discrete** (the classical "problem-solving world").
- The agent's algorithm works as follows:
  1. **Goal formulation**: based on the current situation and the agent's performance measure, select a goal — a set of world states that achieve the objective (e.g., "be in Bucharest").
  2. **Problem formulation**: decide which states and actions to consider, given the goal.
  3. **Search**: find a sequence of actions leading to a goal state (a solution).
  4. **Execution**: carry out the actions in the real world.

```
[DIAGRAM: Problem-Solving Agent Cycle
 Percepts --> Goal Formulation --> Problem Formulation --> Search --> Execution --> Actions
 (Environment returns new percepts; loop repeats)
]
```

### Well-Defined Problems and Solutions

- A **well-defined problem** has five components:
  - **Initial state**: the state in which the agent starts (e.g., `In(Arad)`).
  - **Actions**: the set of actions available in a state, described by the **successor function** `ACTIONS(s)` returning the set of actions executable in state s.
  - **Transition model**: `RESULT(s, a)` returns the state that results from executing action a in state s.
  - **Goal test**: a check of whether a given state is a goal state (e.g., `In(Bucharest)`; may be explicit or implicit, as in "no dirt in the vacuum world").
  - **Path cost**: a function assigning a numeric cost to each path (often the sum of step costs `c(s, a, s')`). A **step cost** is the cost of taking action a in state s to reach s'.
- **Solution**: a sequence of actions from the initial state to a goal state. An **optimal solution** is the solution with the lowest path cost among all solutions.
- The **state space** of a problem is the set of all states reachable from the initial state by any sequence of actions. The state space forms a **search tree** rooted at the initial state when expanded by the search algorithm.

### Example Problems

- **8-Puzzle**: a 3×3 board with tiles 1–8 and one blank. Actions: move the blank Up/Down/Left/Right. Goal test: tiles in the correct order. Path cost: 1 per move. State space has 9!/2 = 181,440 reachable states.
- **8-Queens Problem**: place 8 queens on an 8×8 chessboard so no two queens attack each other. Two formulations: **incremental** (start empty, add queens one at a time — search formulation, 64·63·…·57 ≈ 1.8 × 10^14 states for full formulation) and **complete-state** (start with all 8 queens on the board, move a queen to remove attacks — local search formulation). The smarter incremental formulation places one queen per column, giving 2,057 states.
- **Vacuum World**: two locations A and B, each may contain dirt. States: 2^2 × 2^2 = 8 states (position × dirt). Actions: Left, Right, Suck. Goal test: no dirt. Path cost: 1 per action.
- **Route Finding (Romania example)**: road map from Arad to Bucharest; states are cities, actions are driving along roads, step cost is road distance; goal test is `In(Bucharest)`.

### Search Tree Terminology and Evaluation

- **Node vs State**: a node is a bookkeeping data structure (parent, action, path cost, depth); a state is a configuration of the world. Nodes can share states (multiple paths to the same state); the **redundant paths** problem is avoided using a **frontier** and an **explored set** (or *closed list*).
- **Frontier (open list)**: the set of leaf nodes available for expansion. **Explored set (closed list)**: states already expanded.
- **Expansion**: taking a node off the frontier and generating its successors via the successor function.
- **Evaluation criteria for search strategies** (compare BFS, DFS, etc. on these):
  - **Completeness**: does it always find a solution if one exists?
  - **Optimality**: does it always find the *least-cost* solution?
  - **Time complexity**: number of nodes generated (measured as O(b^d)).
  - **Space complexity**: maximum number of nodes stored in memory (also O(b^d) in the worst case).
- Parameters: **b** = branching factor, **d** = depth of the shallowest solution, **m** = maximum depth of the search tree.

### Breadth-First Search (BFS)

- Strategy: expand the **shallowest** unexpanded node first; nodes are added to the frontier in FIFO order.
- **Complete**: Yes, if branching factor b is finite.
- **Optimal**: Yes, if all step costs are identical (constant cost); not optimal for general step costs.
- **Time**: O(b^d) — explores all nodes at depth d.
- **Space**: O(b^d) — keeps every node in memory (the big drawback). At b = 10, d = 14, memory is enormous (billions of nodes); exponential memory is worse than exponential time in practice.
- Uses FIFO queue; frontier is a queue.

### Uniform-Cost Search (UCS)

- Variant of BFS that expands the node with the **lowest path cost** g(n) (the cheapest path from the start to n). This is **Dijkstra's algorithm** adapted to graph search with a single goal node.
- Implemented with a **priority queue** ordered by g(n). BFS is a special case of UCS when all step costs are equal.
- **Complete**: Yes (for finite state spaces with positive step costs).
- **Optimal**: Yes — the first goal node popped is optimal because nodes are expanded in order of increasing g(n).
- Time and space: O(b^(1 + floor(C*/ε))) where C* is the cost of the optimal solution and ε is the minimum step cost — can be worse than BFS if many cheap steps are on suboptimal paths.
- Important: UCS explores nodes in increasing cost order, not depth order — it can go deep down one cheap path before touching expensive shallow nodes.

```
[DIAGRAM: Uniform-Cost Search Order
 Start --> expand lowest g(n) each time
 (priority queue ordered by accumulated path cost g(n))
 Node with smallest g(n) popped --> successors inserted by cost
 First goal popped from queue is guaranteed optimal
]
```

### Depth-First Search (DFS)

- Strategy: expand the **deepest** unexpanded node first; frontier is a **LIFO stack**.
- **Complete**: No (in infinite or cyclic state spaces it may go down an infinite path); complete for finite trees without cycles. In graph search with an explored set, it is complete on finite graphs.
- **Optimal**: No — it may find a deep goal when a shallow one exists.
- **Time**: O(b^m) where m is the maximum depth — can be worse than BFS if m is much larger than d.
- **Space**: O(bm) — excellent; only one path plus siblings need be stored. For b = 10, m = 14: about 10 KB memory, vs BFS's petabytes.

### Depth-Limited Search (DLS)

- DFS with a **depth limit l**: nodes at depth l are treated as having no successors. Solves the infinite-path problem.
- **Complete**: Yes if l ≥ d (the shallowest solution depth).
- **Optimal**: No.
- Space: O(bl); time: O(b^l). The limit l is chosen from domain knowledge (e.g., 15 for a 15-puzzle).
- **DLS = DFS with depth cutoff**.

### Iterative Deepening Depth-First Search (IDDFS)

- Repeatedly runs **depth-limited search** with increasing depth limit: l = 0, 1, 2, 3, … until a goal is found.
- Combines the **space efficiency of DFS** with the **completeness and optimality of BFS** (for unit costs).
- **Complete**: Yes. **Optimal**: Yes, for unit step costs (all paths same cost).
- **Time**: O(b^d); **Space**: O(bd).
- Overhead: nodes at shallow depths are regenerated many times, but this overhead is small — b/(b−1) for a constant branching factor (e.g., b = 10 → about 11% extra work, which is negligible).
- IDDFS is the preferred **uninformed search** method when the search space is large and the depth of the solution is unknown.

```
[DIAGRAM: Iterative Deepening DFS
 limit 0: expand root only
 limit 1: root + its children
 limit 2: root, children, grandchildren
 ... increase limit until goal found
 (same tree searched again at each increasing limit)
]
```

### Bidirectional Search

- Runs **two simultaneous searches**: one forward from the initial state and one backward from the goal, stopping when the two frontiers **meet**.
- The backward search needs to know the **predecessors** of a state: actions that could have led to it.
- **Complete**: Yes (finite branching factor). **Optimal**: Yes, for unit step costs (with careful implementation).
- **Time**: O(b^(d/2)) each side; **Space**: O(b^(d/2)) — one frontier must be kept in memory to check for intersection (the smaller frontier can be stored).
- The reduction from b^d to 2·b^(d/2) is huge: for b = 10, d = 6, forward search = 1M nodes vs bidirectional = 2 × 1000 = 2000 nodes.
- Practical difficulty: the goal state may not be unique, and computing predecessors may be hard; also the goal test must check frontier intersection, not a single state.

### Comparing Search Strategies (Key Exam Table)

| Criterion | BFS | UCS | DFS | DLS | IDDFS | Bidirectional |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Completeness | Yes (finite b) | Yes (positive costs) | No (infinite/cyclic); yes on finite graphs | Yes if l ≥ d | Yes | Yes |
| Optimality | Yes if all step costs equal | Yes | No | No | Yes (unit costs) | Yes (unit costs) |
| Time | O(b^d) | O(b^(1+C*/ε)) | O(b^m) | O(b^l) | O(b^d) | O(b^(d/2)) |
| Space | O(b^d) | O(b^(1+C*/ε)) | O(bm) | O(bl) | O(bd) | O(b^(d/2)) |
| Data structure | FIFO queue | Priority queue | LIFO stack | Stack + limit | Repeated DLS | Two frontiers |

- **Memory is the primary resource** in AI search: DFS uses O(bm) (linear in depth), which is why IDDFS is preferred over BFS for large spaces.
- For problems with **variable step costs**, UCS is the uninformed strategy of choice.

### Solved Example: 8-Puzzle Formulation

- **States**: all arrangements of tiles 1–8 and blank on a 3×3 grid (9! = 362,880 states; half reachable).
- **Initial state**: any given board configuration.
- **Actions**: Move blank Up, Down, Left, Right (some moves unavailable at edges).
- **Transition model**: `RESULT(s, action)` returns the board after sliding a tile into the blank.
- **Goal test**: configuration matches the goal board.
- **Path cost**: 1 per move; total path cost = number of moves.

### Key Exam Facts

- Graph search vs tree search: graph search adds the **explored set** to avoid revisiting states — essential for problems with redundant paths (e.g., route finding).
- Complete-state 8-Queens (local search formulation) and incremental formulation both appear in exams; state counts (64·63·…·57 vs 2057) are frequently asked.
- IDDFS "best of both worlds": completeness + optimality of BFS with DFS's linear space.
- In BFS the frontier size alone at depth d is b^d nodes; with 10 MB available, BFS can barely reach depth 6 while IDDFS reaches depth 14.
