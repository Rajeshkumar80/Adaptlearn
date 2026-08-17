# BCS602 — Machine Learning

## Module 5: Unsupervised Clustering & Reinforcement Learning

### Clustering Basics & Proximity Measures
- **Clustering**: unsupervised technique that groups similar objects so that objects in the same cluster are similar (intra-cluster similarity high) and objects in different clusters are dissimilar (inter-cluster similarity low).
- **Applications**: customer segmentation, image segmentation, document grouping, anomaly detection.
- **Proximity measures** (distance/similarity between objects):
  - **Euclidean distance**: d = sqrt(sum((xi - yi)^2)).
  - **Manhattan distance**: d = sum(|xi - yi|).
  - **Minkowski distance**: d = (sum(|xi - yi|^p))^(1/p).
  - **Cosine similarity**: cos(x, y) = (x . y) / (|x| . |y|); range [-1, 1]; used for text/document vectors.
  - **Jaccard similarity**: |A intersect B| / |A union B|; for binary/sets.
  - **Mahalanobis distance**: accounts for correlations between features (covariance-scaled).
- **Quality of clustering**: evaluated by inertia (SSE), silhouette coefficient (range -1 to 1; higher = better separation), and Dunn index.

### Partitioning Clustering — K-Means
- **K-Means algorithm (2023 Q9a)**:
  1. Choose K (number of clusters) and initialize K cluster centroids (randomly or by K-Means++).
  2. Assignment step: assign each data point to the cluster of the nearest centroid (using Euclidean distance).
  3. Update step: recompute each centroid as the mean of all points assigned to its cluster.
  4. Repeat steps 2-3 until centroids do not change (convergence) or a maximum iteration count is reached.
- **Objective**: minimize the sum of squared errors (inertia): SSE = sum over k of sum over points in cluster k of |x - centroid_k|^2.
- **Example (2023 Q9a)**: points A(2,10), B(5,8), C(1,2), D(3,4); initial centroids C1(2,10), C2(5,8).
  - Distances to C1: A = 0, B = sqrt((5-2)^2 + (8-10)^2) = sqrt(9+4) = 3.61, C = sqrt((1-2)^2 + (2-10)^2) = sqrt(1+64) = 8.06, D = sqrt((3-2)^2 + (4-10)^2) = sqrt(1+36) = 6.08.
  - Distances to C2: A = sqrt((2-5)^2 + (10-8)^2) = sqrt(9+4) = 3.61, B = 0, C = sqrt((1-5)^2 + (2-8)^2) = sqrt(16+36) = 7.21, D = sqrt((3-5)^2 + (4-8)^2) = sqrt(4+16) = 4.47.
  - Assignment: A -> C1; B -> C2; C -> C1 (8.06 < 7.21? No, C -> C2? 7.21 > 8.06, so C -> C1); recompute: C1 = mean(A, C) = ((2+1)/2, (10+2)/2) = (1.5, 6); C2 = mean(B, D) = ((5+3)/2, (8+4)/2) = (4, 6). New centroids after 1 iteration: C1 = (1.5, 6), C2 = (4, 6).
- **Elbow method for K selection**: plot SSE vs K; the "elbow" point (where SSE decrease flattens) is the best K. Rationale: adding clusters beyond the elbow gives diminishing returns.
- **Properties**: fast, O(n*k*t); sensitive to initial centroids and outliers; assumes spherical clusters of similar size; result can be a local minimum (run multiple times with different seeds or use K-Means++).
- **K-Means++**: initialize centroids far apart to improve convergence and quality.

```
[DIAGRAM: K-Means iterations
 Initial centroids C1, C2
   --> Step A: assign each point to nearest centroid
   --> Step B: recompute centroids = mean of assigned points
   --> repeat A and B until centroids stable (convergence)
]
```

### Hierarchical Clustering
- **AGNES (Agglomerative Nesting)**: bottom-up approach — start with each point as its own cluster; repeatedly merge the two closest clusters until one cluster remains (2024 Q9b).
- **DIANA (Divisive Analysis)**: top-down approach — start with one cluster containing all points; repeatedly split the cluster into two until each point is its own cluster.
- **Linkage criteria** (distance between clusters):
  - **Single-linkage**: distance between two clusters = minimum distance between any two points in the clusters. Produces elongated ("chaining") clusters.
  - **Complete-linkage**: distance = maximum distance between any two points. Produces compact, spherical clusters; sensitive to outliers.
  - **Average-linkage**: distance = mean of all pairwise distances between points in the clusters. Middle ground.
  - **Centroid/Ward's method**: distance between centroids; Ward minimizes the total within-cluster variance.
- **Dendrogram**: a tree diagram showing the sequence of merges (AGNES) or splits (DIANA); the y-axis shows the distance/height at which clusters merge. Cutting the dendrogram at a chosen height gives the desired number of clusters.

```
[DIAGRAM: AGNES hierarchical clustering
 Points p1 p2 p3 p4
   --> each point = own cluster {p1} {p2} {p3} {p4}
   --> merge closest pair (e.g., {p1},{p2} at height d1) --> {p1,p2} {p3} {p4}
   --> merge next closest (e.g., {p3},{p4} at d2) --> {p1,p2} {p3,p4}
   --> merge (at d3) --> {p1,p2,p3,p4} (single cluster)
 Dendrogram shows merges at heights d1 < d2 < d3
]
```

| Criterion | Definition | Property |
| :--- | :--- | :--- |
| Single-linkage | min pairwise distance | Chaining effect, elongated clusters |
| Complete-linkage | max pairwise distance | Compact clusters, outlier sensitive |
| Average-linkage | mean pairwise distance | Balanced, robust |

- **Comparison**: K-Means needs K in advance and numeric features; hierarchical needs no K but is O(n^2) memory/time and merges cannot be undone.

### Density-Based Clustering — DBSCAN
- **DBSCAN (Density-Based Spatial Clustering of Applications with Noise)** (2024 Q9a): clusters regions of high density separated by low-density regions; finds arbitrarily shaped clusters and identifies noise.
- **Parameters**: 
  - **Eps (epsilon)**: radius of the neighborhood around a point.
  - **MinPts**: minimum number of points required within Eps to form a dense region.
- **Point types**:
  - **Core point**: has at least MinPts points (including itself) within Eps.
  - **Border point**: within Eps of a core point but has fewer than MinPts points in its own neighborhood.
  - **Noise point**: neither core nor border (not reachable from any core point).
- **Algorithm**:
  1. For each unvisited point p, find all points within Eps (neighborhood).
  2. If p is a core point, start a new cluster: expand it by adding all directly density-reachable points (recursively, adding neighbors of core points).
  3. If p is a border point, assign it to the cluster; if p is a noise point, label it noise.
  4. Repeat until all points are visited.
- **Density-reachable**: a point q is density-reachable from p if there is a chain of core points linking them, each within Eps of the previous.
- **Choosing Eps and MinPts**: MinPts >= dimensionality + 1 (typically 2*d for d-dimensional data); Eps from the k-distance graph (k = MinPts; find the knee of the sorted k-distance curve).
- **Properties**: no need to specify K; finds arbitrary shapes; robust to outliers; parameters sensitive to scale (must standardize features); fails when densities vary widely.

```
[DIAGRAM: DBSCAN point types
   o  o
   \   \
  (core)----(core)----(border)
   .          |        .
   .      (noise) x    .
 Points in Eps-neighborhood >= MinPts --> core; near core --> border; else noise
 Cluster = connected core points + their border points; noise points excluded
]
```

### Reinforcement Learning
- **Reinforcement Learning (RL)**: learning by trial and error — an **agent** interacts with an **environment**, takes **actions**, receives **rewards**, and learns a **policy** that maximizes cumulative reward over time. No supervision; delayed rewards.
- **Markov Decision Process (MDP)**: formal framework for RL; defined by the tuple (S, A, P, R):
  - S = set of states.
  - A = set of actions.
  - P = transition probabilities P(s' | s, a).
  - R = reward function R(s, a).
  - **Markov property**: the next state depends only on the current state and action, not on the history.
- **Policy (pi)**: mapping from states to actions, pi(s) -> a. **Value function V(s)**: expected cumulative reward from state s following policy pi. **Q-value Q(s, a)**: expected cumulative reward of taking action a in state s.
- **Passive vs Active RL**:
  - **Passive RL**: the agent follows a fixed policy and only learns the value function (no action choice; e.g., value iteration / policy evaluation by experience).
  - **Active RL**: the agent chooses actions (exploration vs exploitation) and simultaneously learns the policy and value function (e.g., Q-learning).

```
[DIAGRAM: Reinforcement learning loop
              action a_t
   Agent  ------------------->  Environment
     ^                           (state s_t, reward r_t)
     |___________________________|
         state s_(t+1), reward r_t
 Agent goal: maximize sum of discounted rewards sum(gamma^t * r_t)
]
```

- **Q-Learning (2023 Q9b)**: model-free, off-policy, active RL algorithm that learns the optimal action-value function Q*(s, a).
- **Q-Learning update rule (Bellman equation)**:
  - Q(s, a) := Q(s, a) + alpha * (r + gamma * max_a' Q(s', a') - Q(s, a))
  - where alpha = learning rate (0 < alpha <= 1), gamma = discount factor (0 <= gamma < 1), r = immediate reward, s' = next state, max_a' Q(s', a') = best future estimate.
- **Terms**:
  - **TD target**: r + gamma * max_a' Q(s', a') — combines immediate reward with best future value.
  - **TD error**: (r + gamma * max_a' Q(s', a')) - Q(s, a) — the correction applied to the current Q-value.
- **Bellman Optimality Equation**: V*(s) = max_a [R(s, a) + gamma * sum_s' P(s'|s, a) * V*(s')]; the optimal value function satisfies this; for Q: Q*(s, a) = R(s, a) + gamma * sum_s' P(s'|s, a) * max_a' Q*(s', a').
- **Q-Learning algorithm steps**:
  1. Initialize Q(s, a) = 0 for all states and actions.
  2. For each episode: observe current state s; choose action a (epsilon-greedy: random with probability epsilon, else best Q).
  3. Take action, observe reward r and next state s'.
  4. Update Q(s, a) using the Q-learning update rule.
  5. Move to s' and repeat until the episode ends; repeat for many episodes until Q converges to Q*.
- **Discount factor gamma**: gamma near 0 = immediate rewards matter most; gamma near 1 = future rewards matter.
- **Exploration vs Exploitation**: exploration (try new actions to discover rewards) vs exploitation (use best known actions); epsilon-greedy balances both.
- **Applications**: game playing (Chess, Go, Atari), robot control, autonomous driving, recommendation.

### Exam-Focused Short Notes
- K-Means numerical problem: assignment + centroid update for one iteration (2023 Q9a); know SSE objective and elbow method.
- Q-Learning: Bellman update equation, TD target, alpha and gamma roles (2023 Q9b).
- DBSCAN: define core, border, noise points, Eps and MinPts (2024 Q9a).
- AGNES with single/complete linkage and dendrogram interpretation (2024 Q9b).
- MDP tuple (S, A, P, R) and Markov property definition.
- Passive vs active RL difference.
