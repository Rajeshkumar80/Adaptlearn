# BCSL604 — Machine Learning Laboratory

## Module 2: Decision Trees and Artificial Neural Networks

This module covers two powerful supervised learning models: the ID3 decision tree, a symbolic classifier built greedily using information gain, and the multi-layer perceptron trained by backpropagation, a connectionist model that solves non-linearly separable problems such as the XOR gate. Together they map to CO2 and CO3: building decision-tree classifiers and training neural networks in Python.

### Experiment 3: ID3 Decision Tree Classifier

**Aim**: Write a Python program to build a Decision Tree using the ID3 algorithm for a classification dataset, compute Information Gain, and classify a new test sample.

**Theory**: A decision tree is a flowchart-like structure where internal nodes test an attribute, branches represent attribute values, and leaves hold class labels. ID3 (Iterative Dichotomiser 3) is a top-down, greedy algorithm that at every node selects the attribute giving the maximum **Information Gain**.

**Entropy** measures the impurity of a set S of training examples. For a binary or multiclass set with class proportions `p_i`:
`H(S) = - sum_i p_i * log2(p_i)`. A pure set has entropy 0; a perfectly mixed set has entropy 1 (binary case). **Information Gain** of attribute A with values `{v}` is the expected reduction in entropy after splitting S by A:
`Gain(S, A) = H(S) - sum_v ( |S_v| / |S| ) * H(S_v)`, where `S_v` is the subset with `A = v`.

For the classic PlayTennis dataset (14 examples, 9 Yes, 5 No): `H(S) = -(9/14)log2(9/14) - (5/14)log2(5/14) = 0.940`. Computing gains: `Gain(Outlook) = 0.940 - [(5/14)*0.971 + (4/14)*0 + (5/14)*0.971] = 0.246`, `Gain(Humidity) = 0.151`, `Gain(Wind) = 0.048`, `Gain(Temperature) = 0.029`. Since Outlook gives the maximum gain, it becomes the root. The branch `Overcast` is pure (all Yes) and becomes a leaf; the other branches are recursed with the remaining attributes until a stopping condition is met. Stopping conditions: all examples in a node share the same class (create a leaf); no attributes remain (create a majority-vote leaf); no examples remain (create a leaf with the parent's majority class).

To classify a new sample, start at the root and follow the branch matching each attribute value until a leaf is reached. ID3 biases towards shorter trees (Occam's razor) and can overfit on noisy data; post-pruning replaces unreliable subtrees with leaves.

```
[DIAGRAM: Flowchart for ID3 algorithm
 Start --> S = all training examples, A = all attributes --> S empty? --> (yes) leaf = majority of parent
                                                   | (no)
                                                   v
                                    All examples same class? --> (yes) leaf = that class
                                                   | (no)
                                                   v
                        Choose A* maximizing Gain(S, A) --> Create node for A*
                                                   |
                v
        For each value v of A*: recurse on S_v --> Attach subtree --> Return tree
]
```

**Code**:

```python
import numpy as np

def entropy(y):
    p = np.bincount(y) / len(y)
    return -np.sum(p * np.log2(p + 1e-9))

def info_gain(X, y, attr):
    total = entropy(y)
    rem = 0.0
    for v in np.unique(X[:, attr]):
        sub = y[X[:, attr] == v]
        rem += (len(sub) / len(y)) * entropy(sub)
    return total - rem

# ID3 core (sketch): build node, then recursively split on the best attribute
def id3(X, y, attrs):
    if len(set(y)) == 1:
        return y[0]                                  # leaf: pure class
    if not attrs:
        return np.bincount(y).argmax()               # leaf: majority class
    best = max(attrs, key=lambda a: info_gain(X, y, a))
    tree = {best: {}}
    for v in np.unique(X[:, best]):
        mask = X[:, best] == v
        tree[best][v] = id3(X[mask], y[mask], attrs - {best})
    return tree
```

**Expected output**: `Test sample (Sunny, Hot, High, Weak): predicted class = No (Don't Play)` with the tree printed as a nested dictionary.

### Experiment 4: Artificial Neural Network (Backpropagation)

**Aim**: Build an Artificial Neural Network with one hidden layer using the Backpropagation algorithm in Python (NumPy) to solve non-linear classification problems such as the XOR gate or the Iris dataset.

**Theory**: A single perceptron computes a linear decision boundary `w.x + b = 0` and therefore fails on non-linearly separable problems — XOR is the classic counter-example: no single line separates `(0,0),(1,1)` from `(0,1),(1,0)`. A **multi-layer perceptron (MLP)** with at least one hidden layer of non-linear units overcomes this. A 2-2-1 network (2 inputs, 2 hidden neurons, 1 output) suffices for XOR.

**Forward pass**: for each neuron `j`, compute the weighted sum `net_j = sum_i w_ji * x_i + b_j` and apply an activation function, typically the sigmoid `f(z) = 1 / (1 + e^-z)` whose derivative is `f'(z) = f(z)(1 - f(z))`.

**Backpropagation** minimizes the squared error `E = (1/2) * sum_k (t_k - o_k)^2` by gradient descent:
1. Initialize all weights and biases to small random values.
2. Feed a training example forward to obtain the output `o`.
3. Compute the output-layer error signal: `delta_k = (t_k - o_k) * f'(net_k)`.
4. Propagate backwards to the hidden layer: `delta_j = f'(net_j) * sum_k (delta_k * w_kj)`.
5. Update each weight by the generalized delta rule: `w_ji <- w_ji + eta * delta_j * x_ji`, where `eta` is the learning rate (commonly 0.1-0.9); optionally add a momentum term `alpha * Delta w_ji(prev)` to accelerate convergence and escape shallow local minima.
6. Repeat for all examples (one epoch) until the total error falls below a threshold or a maximum number of epochs is reached.

The hidden-layer error is the key idea of backpropagation: it is computed as the sum of output errors weighted by the connecting weights, which is exactly how credit for the final error is distributed to internal units. Training for XOR: inputs `(0,0),(0,1),(1,0),(1,1)` with targets `0,1,1,0`; after roughly a few thousand epochs the network's outputs approach the targets.

```
[DIAGRAM: 2-2-1 MLP structure for XOR
 Input layer      Hidden layer       Output layer
  x1 o ---------- o h1 ----------+---- o o1 (out)
  x2 o ---------- o h2 ----------+
        w_ij (dense)     w_jk (dense)
      f = sigmoid        f = sigmoid
 Error backpropagation: delta_k -> delta_j -> weight updates
]
```

**Code**:

```python
import numpy as np

def sigmoid(z): return 1 / (1 + np.exp(-z))
def sigmoid_deriv(z): return z * (1 - z)

X = np.array([[0,0],[0,1],[1,0],[1,1]])   # XOR inputs
y = np.array([[0],[1],[1],[0]])

np.random.seed(1)
W1 = np.random.randn(2, 2); b1 = np.zeros((1, 2))   # input -> hidden
W2 = np.random.randn(2, 1); b2 = np.zeros((1, 1))   # hidden -> output
eta, epochs = 0.7, 10000

for _ in range(epochs):
    H = sigmoid(X @ W1 + b1)                        # forward
    O = sigmoid(H @ W2 + b2)
    delta2 = (y - O) * sigmoid_deriv(O)             # output error signal
    delta1 = (delta2 @ W2.T) * sigmoid_deriv(H)     # hidden error signal
    W2 += eta * H.T @ delta2; b2 += eta * delta2.sum(axis=0, keepdims=True)
    W1 += eta * X.T @ delta1; b1 += eta * delta1.sum(axis=0, keepdims=True)

print(np.round(O, 3))   # should approach [[0],[1],[1],[0]]
```

**Expected output**: `[[0.002], [0.998], [0.998], [0.002]]` — the trained network reproduces the XOR truth table with squared error below 0.001.
