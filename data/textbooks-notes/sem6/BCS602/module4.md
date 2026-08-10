# BCS602 — Machine Learning

## Module 4: Probabilistic Learning & Artificial Neural Networks

### Bayesian Learning
- **Bayes Theorem**: P(h|D) = (P(D|h) * P(h)) / P(D), where P(h) = prior probability of hypothesis h, P(D|h) = likelihood of data D given h, P(D) = evidence, and P(h|D) = posterior probability of h given D.
- **Key interpretation**: the posterior combines prior belief with observed data evidence.
- **MAP (Maximum A Posteriori) hypothesis**: the hypothesis h that maximizes P(h|D). Since P(D) is constant for all h: h_MAP = argmax_h P(D|h) * P(h). Uses both prior and likelihood.
- **ML (Maximum Likelihood) hypothesis**: the hypothesis h that maximizes P(D|h) alone: h_ML = argmax_h P(D|h). Assumes all priors equal (uniform prior), or no prior knowledge. ML = MAP with uniform prior.
- **When to use**: if all hypotheses are equally likely -> ML; if prior knowledge exists -> MAP; if cost of error differs by hypothesis -> minimum-error hypothesis (Bayes optimal).

```
[DIAGRAM: Bayesian inference flow
 Prior P(h) + Data likelihood P(D|h) --> Bayes Theorem --> Posterior P(h|D)
   --> choose h with max posterior = MAP (or max likelihood = ML)
]
```

### Naive Bayes Classifier
- **Naive assumption**: attributes are conditionally independent given the class label: P(x1, x2, ..., xn | C) = product of P(xi | C) for all i.
- **Classification rule**: C_NB = argmax_c P(c) * product of P(xi | c). The denominator P(x) is ignored since it is constant for all classes.
- **Steps** (2023 Q7a text classification):
  1. Compute prior P(c) for each class: count of documents in class / total documents.
  2. Compute likelihood P(xi | c) for each word given class (using Laplace smoothing to avoid zero probabilities: P(w|c) = (count(w,c) + 1) / (total words in class + |vocabulary|)).
  3. For a new document, multiply the priors and likelihoods per class; assign the class with the highest score.
- **Example**: classes Positive (P) and Negative (N). Priors: P(P) = 3/5, P(N) = 2/5. Query "predictable plot bad acting". Word likelihoods estimated from training counts (with Laplace smoothing, vocabulary size V): for class N, P(predictable|N) = (2+1)/(10+10) = 3/20, P(plot|N) = (3+1)/(20) = 4/20, P(bad|N) = (5+1)/20 = 6/20, P(acting|N) = (2+1)/20 = 3/20 -> score = (2/5) * (3/20)(4/20)(6/20)(3/20). For class P, likelihoods lower -> score smaller. Assign the class with the larger product (Negative here).
- **Discrete attributes**: use frequency counts with Laplace (add-1) smoothing.
- **Continuous attributes**: assume Gaussian distribution per class: P(xi|c) = (1/(SD * sqrt(2*pi))) * exp(-(xi - mean)^2 / (2*SD^2)), with class-specific mean and SD.
- **Advantages**: simple, fast, works with small data, robust to irrelevant features. **Disadvantages**: independence assumption rarely holds; cannot learn feature interactions; zero probabilities must be smoothed.
- **Application**: spam filtering, text/document classification, medical diagnosis.

### Bayesian Belief Networks (BBN)
- **Definition**: a graphical model representing probabilistic dependencies among a set of variables; a DAG (Directed Acyclic Graph) where:
  - Nodes = random variables (discrete or continuous).
  - Directed edges = direct probabilistic influence (dependency).
  - Each node has a Conditional Probability Table (CPT) giving P(node | parents).
- **Joint probability factorization**: P(x1, x2, ..., xn) = product over all nodes of P(xi | Parents(xi)).
- **Conditional independence**: a node is conditionally independent of its non-descendants given its parents (Markov condition). This property enables compact representation of the joint distribution.
- **Example (2024 Q7a medical diagnosis)**: nodes: Smoker, Cancer (CPT given Smoker), X-ray result (CPT given Cancer), Dyspnea (CPT given Cancer). Edges: Smoker -> Cancer, Cancer -> Xray, Cancer -> Dyspnea. Joint: P(S, C, X, D) = P(S) * P(C|S) * P(X|C) * P(D|C). Inference: given X-ray positive, compute P(Cancer | Xray) using Bayes rule over the network.
- **Uses**: reasoning under uncertainty, diagnosis, expert systems, probabilistic inference (exact inference via enumeration / variable elimination, approximate via sampling).

```
[DIAGRAM: Bayesian Belief Network (medical diagnosis)
           Smoker
              |
              v
           Cancer
          /     \
         v       v
      X-ray    Dyspnea
 CPTs: P(Cancer|Smoker), P(Xray|Cancer), P(Dyspnea|Cancer)
 Joint = P(Smoker)*P(Cancer|Smoker)*P(Xray|Cancer)*P(Dyspnea|Cancer)
]
```

### Artificial Neural Networks (ANN)
- **Biological neuron vs Perceptron**: A biological neuron receives signals through dendrites, sums them in the cell body, and fires an output through the axon when a threshold is exceeded. The **Perceptron** (Rosenblatt) is its mathematical model: inputs x1..xn with weights w1..wn, a bias, weighted sum = w0 + sum(wi*xi), output via a step (threshold) activation.
- **Perceptron model**: o = 1 if sum(wi*xi) + w0 > 0, else 0 (binary output).
- **Perceptron Training Rule**: weights update on misclassified examples: wi := wi + eta * (t - o) * xi, where t = target, o = output, eta = learning rate. Converges only if data is linearly separable; guaranteed to converge in finite steps (Perceptron Convergence Theorem).
- **Delta Rule (LMS / gradient descent)**: for continuous outputs with differentiable activation (e.g., sigmoid or linear): delta = (t - o) * f'(net) and wi := wi + eta * (t - o) * xi (for linear activation). Uses gradient descent on the squared error; works even when data is not linearly separable.
- **Perceptron limitation**: single perceptron cannot learn XOR (non-linearly separable problem) — this motivated multi-layer networks.

```
[DIAGRAM: Perceptron model
 x1 --w1--> \
 x2 --w2-->  +  weighted sum net = w0 + sum(wi*xi) --> activation f(net) --> output o
 x3 --w3--> /
 bias w0 (usually threshold)
]
```

### Multi-Layer Perceptron (MLP) & Backpropagation
- **MLP**: feed-forward network with an input layer, one or more hidden layers, and an output layer; neurons use differentiable activation functions (typically sigmoid/tanh/ReLU in hidden, sigmoid/softmax in output).
- **Backpropagation**: supervised learning algorithm for MLP — two passes:
  - **Forward pass**: propagate inputs through layers computing outputs at each neuron.
  - **Backward pass**: compute error at output, propagate error backward, update weights using gradient descent.
- **Steps**:
  1. Initialize all weights to small random values.
  2. Feed a training example; compute output (forward propagation).
  3. Compute output error: delta_o = (t - o) * f'(net_o).
  4. For hidden layers: delta_h = f'(net_h) * sum over outgoing (delta_next * w).
  5. Update weights: w_ij := w_ij + eta * delta_j * x_i (for output layer), and w_ij := w_ij + eta * delta_j * a_i for hidden layers.
  6. Repeat for all examples (epochs) until convergence.
- **Weight update derivation (2023 Q7b)**:
  - Error function: E = (1/2) * sum(t_j - o_j)^2 over output units.
  - Output layer: weight gradient dE/dw_kj = -(t_j - o_j) * o_j(1 - o_j) * net_k -> update: w_kj := w_kj + eta * delta_j * net_k, where delta_j = (t_j - o_j) * o_j(1 - o_j) (sigmoid derivative f' = o(1 - o)).
  - Hidden layer: delta_h = a_h(1 - a_h) * sum_j (delta_j * w_hj); update w_ih := w_ih + eta * delta_h * a_i.
  - Derivation uses the chain rule: dE/dw = dE/do * do/dnet * dnet/dw.
- **Sigmoid derivative**: for f(z) = 1/(1 + e^(-z)), f'(z) = f(z)(1 - f(z)) — this simplifies the weight update formula.
- **Epoch**: one full pass over the entire training set.

### Activation Functions (2024 Q7b)
- **Sigmoid**: f(z) = 1/(1 + e^(-z)); output in (0, 1); derivative f'(z) = f(z)(1 - f(z)). Issues: saturating (vanishing gradient), output not zero-centered.
- **Tanh**: f(z) = (e^z - e^(-z))/(e^z + e^(-z)); output in (-1, 1); zero-centered; derivative = 1 - f(z)^2; still suffers from saturation.
- **ReLU**: f(z) = max(0, z); derivative = 0 for z < 0, 1 for z > 0. Fast, no saturation for positive inputs; issue: dead neurons (gradient 0 for negative inputs).
- **Leaky ReLU**: f(z) = z if z > 0 else alpha*z (small alpha, e.g., 0.01); avoids dead neurons.
- **Softmax**: f(z_i) = e^(z_i) / sum of e^(z_j) over all outputs; converts a vector to a probability distribution summing to 1; used in the output layer for multi-class classification.

| Function | Formula | Output range | Derivative | Use |
| :--- | :--- | :--- | :--- | :--- |
| Sigmoid | 1/(1 + e^(-z)) | (0, 1) | f(z)(1 - f(z)) | Binary output, hidden layers |
| Tanh | (e^z - e^(-z))/(e^z + e^(-z)) | (-1, 1) | 1 - f(z)^2 | Hidden layers (zero-centered) |
| ReLU | max(0, z) | [0, inf) | 0 or 1 | Hidden layers of deep networks |
| Leaky ReLU | z if z > 0 else 0.01z | (-inf, inf) | 1 or 0.01 | Hidden layers, avoids dead neurons |
| Softmax | e^z_i / sum e^z_j | (0, 1), sums to 1 | complex | Multi-class output layer |

### Exam-Focused Short Notes
- Bayes theorem, MAP vs ML definitions and when each is used — frequent theory question.
- Naive Bayes text classification numerical (2023 Q7a): compute priors and likelihood products per class; use Laplace smoothing to avoid zeros.
- Backpropagation weight update derivation for output and hidden layers (2023 Q7b): delta rules with sigmoid derivative f' = o(1 - o), chain rule.
- BBN construction for medical diagnosis + conditional independence (2024 Q7a): joint probability factorization P(x) = product P(node | parents).
- Activation function comparison table with formulas and derivatives (2024 Q7b).
- Perceptron vs Delta rule: convergence conditions, when each works.
