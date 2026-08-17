# BCS602 — Machine Learning

## Module 1: Introduction to Machine Learning & Data Preprocessing

### Need for Machine Learning
- **Machine Learning (ML)**: A field of study that gives computers the ability to learn without being explicitly programmed. Tom Mitchell's formal definition: "A computer program is said to **learn** from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E."
- **Need for ML**: Complex problems cannot be hand-coded (e.g., face recognition, speech recognition); data is abundant but knowledge is hidden inside it; models adapt to new data automatically; can discover patterns humans cannot see; cheaper than writing explicit rules for every case.
- **Traditional Programming vs ML**:
  - Traditional: Data + Rules -> Answers (programmer writes explicit rules).
  - ML: Data + Answers -> Rules (algorithm learns the rules/model automatically).

| Aspect | Traditional Programming | Machine Learning |
| :--- | :--- | :--- |
| Input | Data + hand-written rules | Data + expected answers (labels) |
| Output | Answers | Rules/model |
| Rule creation | Manual, by programmer | Learned automatically |
| Adaptability | Rules must be updated manually | Model updates with new data |
| Use case | Well-understood deterministic logic | Complex, fuzzy, data-driven problems |

### Machine Learning Paradigms
- **Supervised Learning**: Model is trained on labeled data (input-output pairs) to map inputs to outputs. Examples: classification (spam detection, disease diagnosis), regression (price prediction). Types: Classification (discrete output), Regression (continuous output).
- **Unsupervised Learning**: Model finds hidden structure/patterns in unlabeled data. Examples: clustering (customer segmentation), dimensionality reduction (PCA).
- **Semi-supervised Learning**: Uses a small amount of labeled data with a large amount of unlabeled data. Reduces labeling cost; often used for web page classification, speech analysis.
- **Reinforcement Learning**: Agent learns by interacting with an environment, receiving rewards/penalties, to maximize cumulative reward. Examples: game playing (Chess, AlphaGo), robot navigation.

| Paradigm | Training data | Goal | Example applications |
| :--- | :--- | :--- | :--- |
| Supervised | Labeled (x, y) | Learn mapping x -> y | Spam filter, disease prediction |
| Unsupervised | Unlabeled (x) | Discover structure | Customer segmentation, anomaly detection |
| Semi-supervised | Few labeled + many unlabeled | Improve accuracy with less labeling | Web classification, speech recognition |
| Reinforcement | Reward signal from environment | Maximize cumulative reward | Game AI, robotics, self-driving |

- **Classification vs Regression**: Classification predicts a discrete class label; Regression predicts a continuous value.
- **Bias-Variance Tradeoff**: Bias = error from wrong model assumptions (underfitting); Variance = error from sensitivity to training data (overfitting). Tradeoff: increasing model complexity lowers bias but raises variance; the goal is to minimize total error = bias^2 + variance + irreducible error.

### ML Pipeline & Big Data Analysis Framework
- **ML Pipeline (standard workflow)**:
  1. Problem definition
  2. Data collection
  3. Data preprocessing (cleaning, missing values, outliers, scaling)
  4. Exploratory Data Analysis (EDA) / statistical analysis
  5. Feature engineering / selection
  6. Model selection and training
  7. Model evaluation and tuning
  8. Deployment and monitoring

```
[DIAGRAM: ML Pipeline
 Raw Data --> Data Preprocessing --> Exploratory Data Analysis --> Feature Engineering
   --> Model Training --> Model Evaluation --> Deployment --> Monitoring
                ^                                                 |
                |_______________ (retrain on new data) __________|
]
```

- **Big Data analysis framework**: Big data is characterized by 4 Vs — **Volume** (large amounts), **Velocity** (high speed of generation), **Variety** (structured, semi-structured, unstructured), **Veracity** (uncertainty/reliability of data). The analysis framework: Data collection -> Data storage -> Data cleaning/preprocessing -> Statistical analysis -> Visualization -> Model building -> Interpretation.

### Descriptive Statistics
- **Mean** (arithmetic average): sum of all values / number of values. Formula: mean = (x1 + x2 + ... + xn) / n. Sensitive to outliers.
- **Median**: middle value when data is sorted; for even n, average of the two middle values. Robust to outliers.
- **Mode**: the value that occurs most frequently; used for categorical data; data can be unimodal, bimodal, multimodal.
- **Variance**: average of squared deviations from the mean. Formula: variance = sum((xi - mean)^2) / n (population) or /(n-1) (sample). Measures spread.
- **Standard Deviation (SD)**: square root of variance; expresses spread in the same units as the data. Smaller SD = values close to mean; larger SD = more spread.
- **Quartiles**: divide sorted data into four parts (Q1, Q2 = median, Q3). **IQR (Interquartile Range)** = Q3 - Q1, used to detect outliers.
- **Skewness**: symmetry of distribution (positive = right tail, negative = left tail). **Kurtosis**: peakedness of the distribution.

| Measure | What it answers | Formula (plain text) | Outlier sensitivity |
| :--- | :--- | :--- | :--- |
| Mean | Central tendency | sum(xi)/n | High |
| Median | Central tendency (sorted) | middle value | Low |
| Mode | Most frequent value | max frequency | Low |
| Variance | Spread | sum((xi-mean)^2)/n | High |
| Std Deviation | Spread in original units | sqrt(variance) | High |
| IQR | Spread of middle 50% | Q3 - Q1 | Low |

### Univariate Data Analysis
- **Univariate analysis**: analysis of a single variable at a time; techniques include frequency distribution, mean/median/mode, variance/SD, skewness, and visualization (histogram, box plot).
- **Histogram**: bar chart of frequency distribution of a continuous variable; reveals shape (normal, skewed), modes, and outliers.
- **Box Plot (Box-and-Whisker)**: summarizes data with five numbers — minimum, Q1, median (Q2), Q3, maximum. Whiskers extend to the smallest/largest values within 1.5 x IQR of the quartiles; points beyond whiskers are potential **outliers**.
- **Scatter Plot**: used for bivariate analysis — shows relationship between two variables (positive/negative/no correlation).

```
[DIAGRAM: Box Plot structure
 Lower whisker | Q1 | median (Q2) | Q3 | Upper whisker
 (min within 1.5*IQR)        (max within 1.5*IQR)
  o  o        |---|---:---|---|         o o
 outliers          BOX (middle 50%)     outliers
]
```

### Data Preprocessing
- **Data preprocessing**: series of steps to convert raw data into clean, usable format. Steps: data cleaning, handling missing values, outlier detection, feature scaling, encoding categorical variables, train/test split.
- **Handling missing values**:
  - **Deletion**: drop rows/columns with missing values (listwise/column-wise). Simple but loses data.
  - **Imputation**: fill missing values with mean, median, mode, constant, or predicted values (regression/KNN imputation). Mean is simple but sensitive to outliers; median is more robust.
  - Also: forward/backward fill for time series.
- **Outlier detection techniques**:
  - **IQR method**: an outlier is any value below (Q1 - 1.5 x IQR) or above (Q3 + 1.5 x IQR).
  - **Box plot analysis**: points outside whiskers are flagged as outliers.
  - **Z-score method**: value is outlier if |z| > 3 (z = (x - mean)/SD); assumes normal distribution.
  - Handling: remove, cap/winsorize (clip at percentiles), or transform (log).
- **Feature scaling**: rescaling features so all have comparable ranges; needed for distance-based algorithms (KNN, K-Means, SVM) and gradient descent to converge faster.
  - **Standardization (Z-score normalization)**: z = (x - mean) / standard deviation. Result: mean = 0, SD = 1. Unbounded; robust to outliers. Formula: x_scaled = (x - mean)/SD.
  - **Min-Max Normalization**: x_scaled = (x - min) / (max - min). Result: values in [0, 1]. Sensitive to outliers. Can be generalized: x_scaled = (x - min)/(max - min) x (new_max - new_min) + new_min.
  - **Robust scaling**: (x - median)/IQR; robust to outliers.

| Method | Formula | Output range | Mean | Robust to outliers? | When to use |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Standardization | (x - mean)/SD | unbounded | 0 | Yes | Gaussian-like data, PCA, SVM |
| Min-Max Normalization | (x - min)/(max - min) | [0, 1] | depends | No | Bounded features, neural networks |

- **Example (Z-score on [10, 20, 30, 40, 50])**: mean = 30, SD = sqrt(((10-30)^2 + (20-30)^2 + (30-30)^2 + (40-30)^2 + (50-30)^2)/5) = sqrt((400+100+0+100+400)/5) = sqrt(200) = 14.14. Z-scores: (10-30)/14.14 = -1.41, (20-30)/14.14 = -0.71, 0, +0.71, +1.41.
- **Example (Min-Max on [10, 20, 30, 40, 50])**: min = 10, max = 50; scaled: 0, 0.25, 0.5, 0.75, 1.0.
- **Encoding categorical data**: Label Encoding (ordinal integers) for ordinal data; One-Hot Encoding (binary columns per category) for nominal data.
- **Train-Test split**: split data into training set (typically 70-80%) and testing set (20-30%) to evaluate generalization; may also use validation set or k-fold cross-validation.

### Exam-Focused Short Notes
- ML definition by Tom Mitchell (experience E, task T, performance measure P) is a frequent definition question.
- Comparison of the four learning paradigms with real-world applications is a 10-mark question (2023 Q1a).
- Standardization vs Min-Max normalization comparison and numerical application (2023 Q1b) — practice both formulas on small datasets.
- Outlier detection using IQR and box plot (2024 Q1b) — know thresholds: below Q1 - 1.5*IQR or above Q3 + 1.5*IQR.
- Designing a learning system: choose type of training experience, target function representation, and learning algorithm (2024 Q1a).
