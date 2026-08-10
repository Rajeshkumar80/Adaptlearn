# BCS602 — Machine Learning

## Module 3: Instance-Based Learning, Regression & Decision Trees

### Instance-Based Learning
- **Instance-based learning (lazy learning)**: stores all training instances and delays generalization until a new query arrives; no model is built at training time (training is just storing data). KNN and LWR are lazy; model-based methods (neural nets, trees) are eager.
- **Advantages**: simple, adapts to new data instantly, no training cost. **Disadvantages**: slow prediction for large data, sensitive to irrelevant attributes and distance measure, high memory usage.

### K-Nearest Neighbors (KNN)
- **Algorithm (2023 Q5b)**: Given training set, distance metric d, value K, and query point P:
  1. Compute distance from P to every training point.
  2. Select the K training points with the smallest distance (K nearest neighbors).
  3. For classification: assign the class by majority vote among the K neighbors (ties broken arbitrarily). For regression: output the average (or weighted average) of the K neighbors' target values.
  4. Output the predicted class/value.
- **Choosing K**: small K -> high variance (overfitting, sensitive to noise); large K -> high bias (smoothing, underfitting). Typical choice: K = sqrt(n) or tuned by cross-validation. Always use odd K for binary classification to avoid ties.
- **Distance metrics**:
  - **Euclidean distance**: d = sqrt(sum((xi - yi)^2)). Most common; straight-line distance.
  - **Manhattan distance**: d = sum(|xi - yi|). Grid-like distance (L1 norm).
  - **Minkowski distance**: d = (sum(|xi - yi|)^p)^(1/p). Generalization: p = 1 gives Manhattan, p = 2 gives Euclidean, p -> infinity gives Chebyshev (max of |xi - yi|).
- **Weighted KNN**: closer neighbors vote more strongly; weight w = 1/(distance + epsilon) or w = 1/d^2. Improves accuracy when neighbors are at unequal distances.
- **Example (2023 Q5b)**: training points A(1,1) class 0, B(2,3) class 0, C(5,4) class 1, D(6,2) class 1; query P(3,4), K = 3.
  - d(P,A) = sqrt((3-1)^2 + (4-1)^2) = sqrt(4+9) = 3.61
  - d(P,B) = sqrt((3-2)^2 + (4-3)^2) = sqrt(1+1) = 1.41
  - d(P,C) = sqrt((3-5)^2 + (4-4)^2) = sqrt(4+0) = 2
  - d(P,D) = sqrt((3-6)^2 + (4-2)^2) = sqrt(9+4) = 3.61
  - K nearest: B (1.41), C (2), A or D (3.61) -> with K = 3, neighbors B, C and A; classes: 0, 1, 0 -> majority class 0. P is classified as class 0.
- **Nearest Centroid Classifier**: compute the mean (centroid) vector of each class; classify a query by the distance to each centroid (assign to nearest centroid). Very fast, but assumes spherical classes.
- **Locally Weighted Regression (LWR)**: for query x, fit a regression model using only nearby training points, weighted by a kernel (e.g., Gaussian kernel w = exp(-(d^2)/(2*tau^2))). Prediction: weighted least squares at query point. Lazy — no global fit.

```
[DIAGRAM: KNN classification
 Query P(3,4) --> distance to all training points --> sort distances ascending
   --> pick K=3 nearest: B(1.41, class 0), C(2.0, class 1), A(3.61, class 0)
   --> majority vote: class 0 --> P classified as class 0
]
```

### Regression Models
- **Regression**: supervised learning that predicts a continuous target variable from input features.
- **Simple Linear Regression**: model y = theta0 + theta1*x. theta0 = intercept, theta1 = slope. Estimated by minimizing the cost function (mean squared error): J(theta0, theta1) = (1/2m) * sum((h(xi) - yi)^2), where h(xi) = theta0 + theta1*xi.
  - Closed-form least squares: theta1 = sum((xi - x_mean)(yi - y_mean)) / sum((xi - x_mean)^2); theta0 = y_mean - theta1*x_mean.
- **Multiple Linear Regression**: y = theta0 + theta1*x1 + theta2*x2 + ... + thetan*xn. Hypothesis h(x) = theta.T . x. Cost: J(theta) = (1/2m) * sum((h(xi) - yi)^2). Solved via normal equation (closed form) or gradient descent.
- **Polynomial Regression**: y = theta0 + theta1*x + theta2*x^2 + ... + thetan*x^n. Still linear in the parameters; features are powers of x. Captures curvature.
- **Normal Equation**: theta = (X.T . X)^-1 . X.T . y. No iteration needed, but expensive for large n (matrix inversion is O(n^3)).
- **Gradient Descent (2024 Q5a)**: iterative optimization that updates parameters in the direction of the negative gradient of the cost function.
  - Update rule (simultaneous update): theta_j := theta_j - alpha * (d/dtheta_j) J(theta) for all j.
  - For simple linear regression cost J = (1/2m) * sum((h(xi) - yi)^2):
    - dJ/dtheta0 = (1/m) * sum((h(xi) - yi))
    - dJ/dtheta1 = (1/m) * sum((h(xi) - yi) * xi)
  - So: theta0 := theta0 - (alpha/m) * sum((h(xi) - yi)); theta1 := theta1 - (alpha/m) * sum((h(xi) - yi) * xi). Update theta0 and theta1 simultaneously.
  - **alpha (learning rate)**: too large -> overshoots/diverges; too small -> slow convergence. 
  - **Feature scaling**: required for faster convergence when features have different scales.
  - Batch vs Stochastic vs Mini-batch: Batch uses whole dataset per step; Stochastic uses one sample per step (noisy but fast); Mini-batch uses a small random subset.
- **Evaluation metrics for regression**: MSE (mean squared error), RMSE (sqrt(MSE)), MAE (mean absolute error), R^2 (coefficient of determination: fraction of variance explained; 1 = perfect fit).

### Decision Tree Learning
- **Decision tree representation**: a tree where each **internal node** tests an attribute, each **branch** is an attribute value (outcome), and each **leaf node** assigns a class (or value). The path from root to leaf is a conjunction of tests — the tree is a disjunction of these paths.
- **Top-down induction**: root = best attribute (highest information gain), recursively split on remaining attributes until all examples in a node belong to one class (or attributes exhausted).

```
[DIAGRAM: Decision Tree structure
            Outlook
           /   |    \
       Sunny  Overcast  Rain
       /                |   \
   Humidity          Wind   Play = No
    /    \           /   \
  High    Normal    Strong  Weak
 Play=No Play=Yes Play=No Play=Yes
]
```

- **Entropy**: measure of impurity/uncertainty of a collection S: Entropy(S) = -sum(p_i * log2(p_i)) over all classes i, where p_i = proportion of class i in S.
  - Binary case: if p = proportion of positives, Entropy = -p*log2(p) - (1-p)*log2(1-p). Range [0, 1] bits for binary.
  - Entropy = 0 when all examples are of one class (pure); = 1 when classes are equally split (binary, most impure).
- **Information Gain**: reduction in entropy after splitting on attribute A: Gain(S, A) = Entropy(S) - sum over values v of A of (|Sv|/|S|) * Entropy(Sv), where Sv = subset of S with attribute A = v.
- **ID3 Algorithm (2023 Q5a)**:
  1. Compute Entropy(S) of the root.
  2. For each attribute, compute Gain(S, A).
  3. Pick the attribute with the **highest gain** as the splitting attribute.
  4. Create a branch for each value of the attribute; recurse on each subset until pure or attributes exhausted.
- **Example**: dataset with 9 Yes, 5 No -> Entropy(S) = -(9/14)log2(9/14) - (5/14)log2(5/14) = 0.94. For attribute with values v1(7 ex: 2Y,5N), v2(7 ex: 7Y,0N): Entropy(v1) = -(2/7)log2(2/7) - (5/7)log2(5/7) = 0.863; Entropy(v2) = 0. Gain = 0.94 - ((7/14)*0.863 + (7/14)*0) = 0.94 - 0.4315 = 0.5085. The attribute with the maximum gain is chosen at the root.
- **C4.5 algorithm**: successor of ID3; handles continuous attributes (by threshold splits), missing values, and pruning; uses **Gain Ratio** instead of Gain to reduce bias toward attributes with many values: GainRatio = Gain(S, A) / SplitInfo(A), where SplitInfo(A) = -sum(|Sv|/|S|) * log2(|Sv|/|S|).
- **Overfitting**: when the tree fits training noise and memorizes training data (zero training error but poor test performance). Causes: too many branches, noisy data, insufficient examples.
- **Tree pruning** (2024 Q5b):
  - **Pre-pruning**: stop growing the tree early (stop when gain falls below a threshold, or node has few examples) — risk of underfitting.
  - **Post-pruning**: grow the full tree, then remove subtrees that do not improve validation performance.
  - **Reduced Error Pruning (REP)**: replace a subtree by its most frequent class leaf if accuracy on a validation set does not decrease.
  - **Cost Complexity Pruning (CCP)**: prune subtrees using cost = Error + alpha * (number of leaves); increase alpha gradually and pick the subtree sequence that minimizes the cost on validation data (weakest link pruning).

### Exam-Focused Short Notes
- KNN algorithm + numerical classification with Euclidean distance (2023 Q5b); know all three distance metric formulas.
- Entropy and Information Gain computation, build ID3 root node (2023 Q5a) — practice the gain formula.
- Gradient descent derivation for simple linear regression cost J(theta0, theta1) = (1/2m)*sum((h - y)^2) (2024 Q5a): both partial derivatives and simultaneous update rule.
- Overfitting in trees and pruning: REP vs CCP (2024 Q5b).
- Comparison: ID3 vs C4.5 (gain vs gain ratio, continuous attributes, pruning built in).
