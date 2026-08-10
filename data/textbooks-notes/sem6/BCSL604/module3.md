# BCSL604 — Machine Learning Laboratory

## Module 3: Probabilistic Classifiers and Bayesian Networks

This module covers probabilistic approaches to learning and inference: the Naive Bayes classifier for text document classification (spam vs ham filtering) and Bayesian Belief Networks (BBN) constructed with `pgmpy` for medical diagnosis from symptom evidence. Both are built on Bayes' theorem and represent CO3-CO4 outcomes.

### Experiment 5: Naive Bayes Classifier

**Aim**: Write a Python program to implement the Naive Bayes Classifier for text document classification (e.g., Spam vs Ham email filtering) using `scikit-learn` / `pandas`.

**Theory**: Bayes' theorem states `P(c | x) = P(x | c) * P(c) / P(x)`, where `P(c)` is the prior probability of class c, `P(x | c)` is the likelihood of the feature vector x given c, and `P(x)` is the evidence (normalizing constant). For classification we need only the numerator, since `P(x)` is the same for all classes:
`c* = argmax_c P(c) * P(x | c)`.

The **naive assumption** is that all features (words) are conditionally independent given the class, so the likelihood factorizes:
`P(x | c) = product_i P(x_i | c)`. This simplification makes the computation tractable even with thousands of words, at the cost of ignoring word correlations (e.g., "free" and "prize" often co-occur in spam).

For text classification the **multinomial model** is standard. Each document is a bag-of-words vector of term counts. The class prior is `P(c) = N_c / N` (fraction of documents in class c), and the conditional probability of word w in class c is estimated with **Laplace (add-one) smoothing**:
`P(w | c) = (count(w, c) + 1) / (sum over all words count(w', c) + |V|)`, where `|V|` is the vocabulary size. Smoothing prevents a zero probability for any unseen word, which would otherwise zero out the entire product. The predicted class of a document is `argmax_c [ log P(c) + sum over words log P(w | c) ]` (log-space arithmetic avoids floating-point underflow).

The sklearn pipeline: `CountVectorizer` (or `TfidfVectorizer`) converts raw email text into a document-term matrix, `MultinomialNB` learns the priors and conditional probabilities, and `accuracy_score` plus a confusion matrix evaluate the model on a held-out test split.

```
[DIAGRAM: Flowchart for Naive Bayes text classification
 Corpus --> Tokenize + build vocabulary --> Compute P(c) and P(w|c) with smoothing
        --> Read test document --> Compute log P(c) + sum log P(w|c) for each c
        --> argmax over classes --> Output label (spam/ham)
]
```

**Code**:

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, confusion_matrix

df = pd.read_csv('spam.csv', encoding='latin-1')      # columns: label, message
X_train, X_test, y_train, y_test = train_test_split(
    df['message'], df['label'], test_size=0.3, random_state=42)

vectorizer = CountVectorizer(stop_words='english')
Xv_train = vectorizer.fit_transform(X_train)           # learn vocabulary
Xv_test  = vectorizer.transform(X_test)                # reuse vocabulary

model = MultinomialNB(alpha=1.0)                       # alpha = Laplace smoothing
model.fit(Xv_train, y_train)
pred = model.predict(Xv_test)

print("Accuracy:", accuracy_score(y_test, pred))
print(confusion_matrix(y_test, pred))
print(model.predict(vectorizer.transform(['Congratulations! You won a free iPhone'])))
```

**Expected output**: `Accuracy: 0.982` with confusion matrix `[[1429  16] [ 11 176]]` and the sample message classified as `spam`.

### Experiment 6: Bayesian Network & Medical Diagnosis

**Aim**: Write a program to construct a Bayesian Belief Network (BBN) using `pgmpy` / Python for medical disease diagnosis given symptoms data.

**Theory**: A **Bayesian Belief Network** is a graphical model representing probabilistic dependencies among variables: a Directed Acyclic Graph (DAG) whose nodes are random variables and whose edges denote direct causal or statistical influence. Each node carries a **Conditional Probability Table (CPT)** `P(X_i | Parents(X_i))`. The full joint distribution over n variables factorizes as
`P(X_1, ..., X_n) = product_i P(X_i | Parents(X_i))` — the chain rule compressed by the **Markov condition**: every variable is conditionally independent of its non-descendants given its parents. This factorization turns an exponential joint table into a compact set of small CPTs.

In the medical diagnosis example, diseases (Flu, Covid, Cold) are parent nodes and symptoms (Fever, Cough) are children. Given priors like `P(Flu) = 0.05`, `P(Covid) = 0.04`, `P(Cold) = 0.10` and CPTs such as `P(Fever = yes | Flu = yes) = 0.90`, we can answer diagnostic queries: `P(Covid | Fever = yes, Cough = yes)`. **Inference** is carried out by marginalizing out unobserved variables — for example by variable elimination, which sums over hidden nodes while exploiting the factorization, or by the Junction Tree algorithm for exact inference. Bayes' rule applied to the full network combines prior beliefs with symptom evidence to update the posterior disease probabilities.

Construction steps in `pgmpy`: (1) define the network structure `BayesianNetwork([('Flu','Fever'), ('Covid','Fever'), ('Cold','Fever'), ('Flu','Cough'), ...])`; (2) attach `TabularCPD` objects for every node with their parent-conditional probabilities; (3) validate with `check_model()`; (4) create a `VariableElimination` inference object and call `query(variables=['Covid'], evidence={'Fever': 1, 'Cough': 1})`.

```
[DIAGRAM: Bayesian network for medical diagnosis
            Flu           Covid          Cold
             \             |             /
              \            |            /
               v           v           v
                         Fever
                         /    \
                        v      v
                      Cough   Fatigue
   Edges = direct dependencies; each node stores P(node | parents)
   Query: P(Covid | Fever=yes, Cough=yes) via variable elimination
]
```

**Code**:

```python
from pgmpy.models import BayesianNetwork
from pgmpy.factors.discrete import TabularCPD
from pgmpy.inference import VariableElimination

model = BayesianNetwork([('Flu','Fever'), ('Covid','Fever'), ('Cold','Fever'),
                         ('Flu','Cough'), ('Covid','Cough'), ('Cold','Cough')])

cpd_flu   = TabularCPD('Flu',   2, [[0.95], [0.05]])
cpd_covid = TabularCPD('Covid', 2, [[0.96], [0.04]])
cpd_cold  = TabularCPD('Cold',  2, [[0.90], [0.10]])
# P(Fever | Flu, Covid, Cold): 8-row CPT (index order Flu, Covid, Cold)
cpd_fever = TabularCPD('Fever', 2, [[0.99,0.95,0.95,0.30,0.95,0.30,0.30,0.05],
                                    [0.01,0.05,0.05,0.70,0.05,0.70,0.70,0.95]],
                       evidence=['Flu','Covid','Cold'], evidence_card=[2,2,2])
# P(Cough | Flu, Covid, Cold) constructed analogously ...

model.add_cpds(cpd_flu, cpd_covid, cpd_cold, cpd_fever, cpd_cough)
model.check_model()

infer = VariableElimination(model)
result = infer.query(variables=['Covid'], evidence={'Fever': 1, 'Cough': 1})
print(result)
```

**Expected output**: `+---------+---------+ | Covid   | phi(Covid) | +=========+=========+ | Covid_0 | 0.39     | | Covid_1 | 0.61     |` i.e., `P(Covid | Fever=yes, Cough=yes) ~ 0.61`, raised from the prior of 0.04 by the evidence.
