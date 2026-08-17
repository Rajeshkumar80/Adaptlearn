# BCS602 — Machine Learning

## Module 2: Learning Theory, Feature Engineering & Dimensionality Reduction

### Concept Learning
- **Concept Learning**: the task of inferring a Boolean-valued function from training examples of its input and output. The learned function is the **concept** that classifies examples as positive or negative.
- **Concept definition**: A concept c over instance space X is a function c: X -> {0, 1}; positive examples satisfy the concept, negative examples do not.
- **Instance**: a specific example represented as a conjunction of attribute values (e.g., Sky=Sunny, AirTemp=Warm, Humidity=Normal, Wind=Strong).
- **Hypothesis h**: a conjunction of constraints on attributes; each attribute constraint may be a specific value, "?" (any value), or "∅" (no value accepted). A hypothesis that matches all examples is more general; one that matches fewer is more specific.
- **Consistency vs Satisfying**: h satisfies x if h(x) = 1; h is consistent with training data D if for every example (x, c(x)) in D, h(x) = c(x).
- **Inductive learning hypothesis**: any hypothesis found to approximate the target function well over the training examples will also approximate it well over unseen examples (assumes i.i.d. data and a consistent target).

### Designing a Learning System
- The three key design choices (2024 Q1a):
  1. **Type of training experience**: direct vs indirect (teacher feedback vs reward), whether the learner can query the environment, how well the data represents the target distribution.
  2. **Target function representation**: how the learned function is represented (e.g., linear function, decision tree, neural network, rule set).
  3. **Learning algorithm**: the method used to search the hypothesis space for a hypothesis consistent with the training examples.
- **Performance measure (P)** and **target concept (T)** must be defined before design.

```
[DIAGRAM: Components of a Learning System
 Training Experience (E) --> Learning Algorithm --> Hypothesis (h)
                                                          |
 Performance Measure (P) <-- Target Function (T) <--------+
]
```

### Find-S Algorithm
- **Purpose**: finds the **most specific hypothesis** consistent with the training examples (only positive examples update the hypothesis).
- **Steps**:
  1. Initialize h to the most specific hypothesis: h = <∅, ∅, ..., ∅>.
  2. For each positive training example x:
     - For each attribute i: if h[i] = ∅ then set h[i] = x[i]; else if h[i] != x[i] then set h[i] = "?" (any).
  3. Negative examples are ignored.
  4. Output h (the maximally specific hypothesis).
- **Limitations**: only positive examples used; cannot detect inconsistent training data; multiple maximally specific hypotheses may exist but Find-S outputs only one; cannot determine if the target concept is learnable.
- **Example (EnjoySport)**: attributes Sky, AirTemp, Humidity, Wind, Water, Forecast.
  - Training: (Sunny, Warm, Normal, Strong, Warm, Same) + ; (Sunny, Warm, High, Strong, Warm, Same) + ; (Rainy, Cold, High, Strong, Warm, Change) - ; (Sunny, Warm, High, Strong, Cool, Change) +.
  - Start: h = <∅,∅,∅,∅,∅,∅>; after x1: <Sunny, Warm, Normal, Strong, Warm, Same>; after x2: <Sunny, Warm, ?, Strong, Warm, Same>; x3 negative (ignored); after x4: <Sunny, Warm, ?, Strong, ?, ?>.

### Candidate Elimination Algorithm
- **Version Space**: set of all hypotheses consistent with the training examples: VS = {h in H : h is consistent with D}. Represented compactly by two boundaries: **S** (maximally specific hypotheses) and **G** (maximally general hypotheses).
- **Algorithm steps**:
  1. Initialize S to the most specific hypothesis <∅,...,∅>; initialize G to the most general hypothesis <?,...,?>.
  2. For each **positive** example: remove from G any hypothesis that does not match it; generalize each hypothesis in S minimally so that it matches the example (replace conflicting attribute with "?").
  3. For each **negative** example: remove from S any hypothesis that matches it; specialize each hypothesis in G minimally so that it does not match the example (add attribute values).
  4. Output S and G; version space = all hypotheses between S and G.
- **Key facts**: version space shrinks monotonically as more examples are seen; converges when S = G (single hypothesis). The candidate elimination algorithm can detect inconsistent training data (when S and G become inconsistent/empty).
- **Example (2024 Q3a style, 4 attributes)**:
  - Training: (Sunny, Warm, Normal, Strong) + ; (Sunny, Warm, High, Strong) + ; (Rainy, Cold, High, Strong) - ; (Sunny, Warm, High, Strong) +.
  - After x1: S = <Sunny, Warm, Normal, Strong>, G = <?,?,?,?>.
  - After x2: S = <Sunny, Warm, ?, Strong>, G = <?,?,?,?>.
  - After x3 (negative): G specialized to hypotheses that exclude x3: <Sunny,?,?,?>, <?,Warm,?,?>, <?,?,?,Strong> (each member of G must not match (Rainy, Cold, High, Strong)).
  - After x4: S = <Sunny, Warm, ?, Strong>; G pruned to: <Sunny,?,?,?>, <?,Warm,?,?>, <?,?,?,Strong> (those consistent with x4 and not matching x3). Final VS covers all h between S and G.

### Multivariate Statistics & Feature Engineering
- **Multivariate statistics**: analysis of more than two variables jointly; uses covariance matrix, correlation matrix, and joint distributions to capture relationships between features.
- **Covariance**: measures direction of linear relationship between two variables: cov(x, y) = sum((xi - x_mean)(yi - y_mean)) / n. Positive = both move together; negative = opposite; zero = no linear relation.
- **Correlation**: normalized covariance: r = cov(x, y)/(SD_x . SD_y), always in [-1, 1].
- **Covariance matrix**: symmetric n x n matrix whose (i, j) entry is cov(feature_i, feature_j); diagonal entries are variances.
- **Feature engineering**: process of creating/selecting features that improve model performance; includes scaling, encoding, binning, interaction terms, and extracting statistics.
- **Feature selection vs Feature extraction**: Selection picks a subset of original features (keeps interpretability); Extraction creates new lower-dimensional features from combinations (PCA, LDA).

### Principal Component Analysis (PCA)
- **Purpose**: unsupervised dimensionality reduction technique that projects data onto the directions of **maximum variance** (principal components), while minimizing reconstruction error.
- **Key idea**: find orthogonal directions (eigenvectors of the covariance matrix) along which data varies most; the eigenvalue gives the variance captured by that component.
- **Steps (exam-frequent, 2023 Q3b)**:
  1. Standardize the data (each feature: z = (x - mean)/SD) so every feature contributes equally.
  2. Compute the covariance matrix of standardized data (n x n for n features).
  3. Compute eigenvalues and eigenvectors of the covariance matrix.
  4. Sort eigenvectors by decreasing eigenvalue; the eigenvector with the largest eigenvalue is PC1, next is PC2, and so on (components are orthogonal).
  5. Choose k components capturing ~95% variance: variance explained = sum of top k eigenvalues / total sum of eigenvalues.
  6. Project data: new data = standardized data x matrix of top k eigenvectors (score matrix).
- **Properties**: components are uncorrelated and ordered by variance; reduces multicollinearity; removes redundancy; the number of components <= number of features.
- **Limitations**: loses interpretability (components are linear combinations of all features); sensitive to scaling; assumes linearity.

```
[DIAGRAM: PCA projection
 Original 2D data (x1, x2) --standardize--> centered data
   --> covariance matrix --> eigen decomposition
   --> PC1 (max variance direction), PC2 (orthogonal)
   --> project points onto PC1 axis (1D representation)
]
```

### Linear Discriminant Analysis (LDA)
- **Purpose**: supervised dimensionality reduction that projects data onto directions that **maximize class separation** (maximizes between-class scatter, minimizes within-class scatter).
- **Steps**:
  1. Compute mean vector of each class.
  2. Compute between-class scatter matrix S_B and within-class scatter matrix S_W.
  3. Compute eigenvalues/eigenvectors of the matrix (S_W)^-1 . S_B.
  4. Sort eigenvectors by eigenvalue; keep top k (< number of classes - 1).
  5. Project data onto these discriminant vectors.
- **LDA vs PCA (2024 Q3b comparison)**:

| Criterion | PCA | LDA |
| :--- | :--- | :--- |
| Type | Unsupervised | Supervised (uses class labels) |
| Objective | Maximize variance | Maximize class separation |
| Directions | Principal components | Discriminant components |
| Uses | Dimensionality reduction, compression, visualization | Dimensionality reduction + classification |
| Max components | Any up to n features | At most c - 1 (c = number of classes) |
| Class labels | Not needed | Required |
| Application | EDA, denoising | Face recognition, classification pre-step |

### Exam-Focused Short Notes
- Find-S: initialize with most specific hypothesis, update only on positive examples, replace mismatched attribute with "?" — 10-mark numerical problem (2023 Q3a).
- Candidate Elimination: trace S and G boundaries over all examples, positive generalizes S / negative specializes G (2024 Q3a).
- Version space definition: all hypotheses consistent with training data, bounded by S and G.
- PCA steps: standardize -> covariance matrix -> eigenvalues/eigenvectors -> sort -> project (2023 Q3b).
- PCA vs LDA comparison table (2024 Q3b).
- Covariance matrix diagonal = variances; symmetric; positive semi-definite.
