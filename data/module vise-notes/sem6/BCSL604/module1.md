# BCSL604 — Machine Learning Laboratory

## Module 1: Concept Learning Algorithms

This module covers the two classical concept learning algorithms from Mitchell's machine learning framework: Find-S, which finds the single most specific hypothesis, and Candidate Elimination, which outputs the complete version space bounded by the Specific boundary (S) and General boundary (G). Both algorithms operate on the standard `EnjoySport` toy dataset where each training example is a conjunction of attribute values (Sky, Temperature, Humidity, Wind, Water, Forecast) labelled as positive (+) or negative (-). These programs map to CO1: implementing concept learning algorithms in Python to build version spaces.

### Experiment 1: Find-S Concept Learning Algorithm

**Aim**: Implement and demonstrate the Find-S algorithm to find the most specific hypothesis consistent with the positive training examples of the `EnjoySport` dataset.

**Theory**: Concept learning is the task of inferring a boolean-valued function defined over a large set of training examples. In Find-S, every hypothesis is a conjunction of constraints on the attributes, where each constraint can be (i) a specific value such as `Sunny`, (ii) `?` meaning "any value is acceptable", or (iii) `\u00f8` (empty set) meaning "no value is acceptable". The algorithm searches the hypothesis space for the most specific hypothesis that covers all positive examples and rejects all negative examples.

The Find-S algorithm works as follows:
1. Initialize the hypothesis `h` to the most specific hypothesis: `(\u00f8, \u00f8, \u00f8, \u00f8, \u00f8, \u00f8)`.
2. For each positive training example, generalize `h` minimally: for every attribute `i`, if the attribute value in `h` differs from the value in the example, replace it with `?`; otherwise keep it.
3. Ignore all negative training examples (they never affect `h`).
4. Return `h` as the final most specific hypothesis.

Intuitively, each positive example forces `h` to become more general until it covers that example, while `?` marks an attribute where two positive examples disagreed. Consider the classic dataset: `x1 = (Sunny, Warm, Normal, Strong, Warm, Same) +`, `x2 = (Sunny, Warm, High, Strong, Warm, Same) +`, `x3 = (Rainy, Cold, High, Strong, Warm, Change) -`, `x4 = (Sunny, Warm, High, Strong, Cool, Change) +`. After `x1`, `h = (Sunny, Warm, Normal, Strong, Warm, Same)`; after `x2`, `h = (Sunny, Warm, ?, Strong, Warm, Same)`; `x3` is ignored; after `x4`, `h = (Sunny, Warm, ?, Strong, ?, ?)`. The final hypothesis says: play is enjoyed on sunny, warm days with strong wind, regardless of humidity, water temperature and forecast.

```
[DIAGRAM: Flowchart for Find-S algorithm
 Start --> h = (∅,∅,∅,∅,∅,∅) --> Read next training example --> End of data? --> (yes) Output h --> Stop
                                                         | (no)
                                                         v
                                                     Example positive? --> (no) Skip example
                                                         | (yes)
                                                         v
                                    For each attribute: value differs from h[i]? --> (yes) h[i] = '?'
                                                                                 --> (no) keep h[i]
                                                         |
                                                         v
                                                     (loop back to Read next example)
]
```

Advantages: Find-S is extremely simple and, for consistent data, is guaranteed to converge to a hypothesis consistent with all positive examples. Limitations: it cannot detect inconsistent training data, negative examples provide no learning signal, it returns only one hypothesis instead of the complete hypothesis space, and it may fail silently if the target concept is not representable in the hypothesis space (the algorithm still returns some `h`).

**Code**:

```python
import csv

def find_s(data):
    h = ['\u00f8'] * (len(data[0]) - 1)          # most specific hypothesis
    for row in data:
        attrs, target = row[:-1], row[-1]
        if target == 'Yes':                       # use only positive examples
            for i in range(len(h)):
                if h[i] == '\u00f8':
                    h[i] = attrs[i]
                elif h[i] != attrs[i]:
                    h[i] = '?'
    return h

data = [
    ['Sunny', 'Warm', 'Normal', 'Strong', 'Warm', 'Same', 'Yes'],
    ['Sunny', 'Warm', 'High',   'Strong', 'Warm', 'Same', 'Yes'],
    ['Rainy', 'Cold', 'High',   'Strong', 'Warm', 'Change', 'No'],
    ['Sunny', 'Warm', 'High',   'Strong', 'Cool', 'Change', 'Yes'],
]
print("Most specific hypothesis:", find_s(data))
```

**Expected output**: `Most specific hypothesis: ['Sunny', 'Warm', '?', 'Strong', '?', '?']`

### Experiment 2: Candidate Elimination Concept Learning Algorithm

**Aim**: Implement the Candidate Elimination algorithm to output the Version Space, i.e., the Specific boundary S and the General boundary G, for a given set of training data.

**Theory**: A hypothesis `h` is *consistent* with a training set D if `h(x) = c(x)` for every example `(x, c(x))` in D. The **version space** `VS_H,D` is the set of all hypotheses in H consistent with D: `VS_H,D = { h in H : consistent(h, D) }`. Instead of enumerating this space (which may be exponential), Candidate Elimination maintains only its two boundaries: the **Specific boundary S**, the set of maximally specific hypotheses, and the **General boundary G**, the set of maximally general hypotheses. Every hypothesis in the version space lies between S and G.

The algorithm processes each example as follows:
1. **Positive example**: generalize every hypothesis in S minimally so it covers the example; remove any hypothesis in G that does not cover the example.
2. **Negative example**: specialize every hypothesis in G minimally (replace `?` with a value, or a value with a more specific value) so it rejects the example; remove any hypothesis in S that covers the example.
3. Cleanup: remove any hypothesis in S that is more general than another, and any in G that is more specific than another.

Running on the same four examples: initially `S0 = {(\u00f8,\u00f8,\u00f8,\u00f8,\u00f8,\u00f8)}` and `G0 = {(?,?,?,?,?,?)}`. After the two positive examples, `S = {(Sunny, Warm, ?, Strong, Warm, Same)}`; the negative example `x3` forces specialization of G: `G = {(Sunny, ?, ?, ?, ?, ?), (?, Warm, ?, ?, ?, ?), (?, ?, ?, Strong, ?, ?), (?, ?, ?, ?, Warm, ?), (?, ?, ?, ?, ?, Same)}`. After `x4`, S becomes `{(Sunny, Warm, ?, Strong, ?, ?)}` and G converges to `{(Sunny, ?, ?, ?, ?, ?), (?, Warm, ?, ?, ?, ?)}`. The version space is every hypothesis that is at least as general as the S elements and at least as specific as the G elements.

```
[DIAGRAM: Version space with boundaries
     G = { (Sunny,?,?,?,?,?), (?,Warm,?,?,?,?) }        <- maximally general
                    |  (generalizes)
     all hypotheses in the version space
                    |  (specializes)
     S = { (Sunny,Warm,?,Strong,?,?) }                  <- maximally specific
]
```

Candidate Elimination is strictly more powerful than Find-S: it detects inconsistent data (both boundaries become empty) and represents the full hypothesis space. Its main drawback is combinatorial explosion of the boundary sets on large attribute spaces.

**Code**:

```python
def candidate_elimination(data, attr_names):
    S = [['\u00f8'] * len(attr_names)]
    G = [['?'] * len(attr_names)]
    for row in data:
        attrs, target = row[:-1], row[-1]
        if target == 'Yes':                      # positive: generalize S, prune G
            newS = []
            for h in S:
                for i, v in enumerate(attrs):
                    if h[i] not in (v, '?'):
                        h[i] = '?'               # minimally generalize
                newS.append(h)
            S = [h for h in newS if h not in G]  # drop hypotheses covering negatives
            G = [g for g in G if all(g[i] in (attrs[i], '?') for i in range(len(g)))]
        else:                                    # negative: specialize G, prune S
            newG = []
            for g in G:
                for i, v in enumerate(attrs):
                    if g[i] == '?':
                        spec = list(g); spec[i] = v
                        if spec not in newG: newG.append(spec)
            G = newG
            S = [h for h in S if not all(h[i] in (attrs[i], '?') for i in range(len(h)))]
    return S, G
```

**Expected output**: `S: [['Sunny', 'Warm', '?', 'Strong', '?', '?']]  G: [['Sunny','?','?','?','?','?'], ['?','Warm','?','?','?','?']]`

**Viva questions**: What is the difference between S and G boundaries? Why are negative examples essential for Candidate Elimination but ignored by Find-S? What happens to the version space when training data is noisy? How does a `?` in a hypothesis differ from `\u00f8`?
