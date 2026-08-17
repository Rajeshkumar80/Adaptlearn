# BCSL604 — Machine Learning Laboratory

## Module 5: Regression and Dimensionality Reduction

This module closes the lab with two topics from the second half of the course: Locally Weighted Regression, a non-parametric model that fits a smooth curve to noisy non-linear data, and Principal Component Analysis, a dimensionality reduction technique used to project high-dimensional data (Breast Cancer dataset) into a 2D scatter plot. These map to CO2 and CO5.

### Experiment 9: Locally Weighted Regression (LWR)

**Aim**: Write a Python program to implement the non-parametric Locally Weighted Regression (LWR) algorithm and plot the smooth fit curve over a noisy non-linear dataset.

**Theory**: Standard linear regression is **parametric**: it fits one global line `y = theta.x` to all training points and cannot capture curvature. Locally Weighted Regression is **non-parametric (instance-based)**: no global parameters are learned; instead, for every query point x, a fresh weighted linear model is fitted using only the training points close to x. Points far from x receive near-zero weight, so the local model follows the underlying curve.

For a query point x, LWR computes the weights `w_i = exp( -(x - x_i)^2 / (2 * tau^2) )`, where `tau` is the **bandwidth** parameter controlling the locality of the fit. This Gaussian kernel assigns weight close to 1 to training points at distance 0 and exponentially decaying weight to distant points. The locally weighted solution of least squares is the closed form:
`theta = (X^T W X)^(-1) X^T W y`,
where W is the diagonal weight matrix with `W_ii = w_i`, and the prediction is `y_hat = theta.x`. This is the same normal equation as ordinary least squares, but with every example re-weighted by its proximity to the query point.

The bandwidth `tau` controls the bias-variance tradeoff: a small `tau` (e.g., 0.1) gives only the immediate neighbours high weight, producing a wiggly curve that overfits noise; a large `tau` (e.g., 5) approaches global linear regression and underfits. A value around 0.5 typically tracks a sinusoidal dataset well. The steps for prediction are: (1) for each query point in a dense grid, compute the weight vector w; (2) solve the weighted normal equation; (3) record the prediction; (4) plot the predictions as a smooth curve over the noisy scatter. LWR costs O(n) per query, so it is slow on large datasets, but it can represent any smooth function without an explicit non-linear basis.

```
[DIAGRAM: LWR at two query points on noisy sine data
 y ^
   |    .   .      ..                          query x=q1: weight window
   |   .  .  .  .     .                        centered near the sine peak,
   |  . .    ..   .                             fitted line slopes downhill
   | .      .  .     . .     query x=q2: new window, fitted line
   |.          .   .     ..                    follows the rising part
   +----------------------------------> x
   Each prediction refits a local line with Gaussian weights exp(-(x-xi)^2/2tau^2)
]
```

**Code**:

```python
import numpy as np
import matplotlib.pyplot as plt

np.random.seed(42)
x = np.sort(np.random.uniform(0, 2 * np.pi, 100))
y = np.sin(x) + np.random.normal(0, 0.2, 100)     # noisy non-linear data

def lwr(x_train, y_train, x_query, tau=0.5):
    w = np.exp(-((x_train - x_query) ** 2) / (2 * tau ** 2))
    X = np.c_[np.ones_like(x_train), x_train]     # design matrix with bias
    W = np.diag(w)
    theta = np.linalg.inv(X.T @ W @ X) @ X.T @ W @ y_train
    return np.array([1, x_query]) @ theta          # prediction at x_query

x_grid = np.linspace(0, 2 * np.pi, 200)
y_fit = [lwr(x, y, q, tau=0.5) for q in x_grid]

plt.scatter(x, y, s=10, label='Noisy data')
plt.plot(x_grid, y_fit, 'r-', label='LWR fit (tau=0.5)')
plt.plot(x_grid, np.sin(x_grid), 'g--', label='True curve')
plt.legend(); plt.show()
```

**Expected output**: A red smooth curve closely hugging the green true sine wave through the noisy blue scatter; with `tau=0.5` the mean squared error against the true curve stays below 0.05.

### Experiment 10: Principal Component Analysis (PCA)

**Aim**: Implement Principal Component Analysis (PCA) for dimensionality reduction on high-dimensional data (e.g., the Breast Cancer dataset) and plot the 2D projected principal components.

**Theory**: PCA is an unsupervised linear transformation that reduces d-dimensional data to k dimensions (k << d) by projecting onto the k orthogonal directions of **maximum variance**, called principal components. It removes redundancy (correlated features), mitigates the curse of dimensionality, speeds up subsequent classifiers, and enables 2D/3D visualization.

The algorithm:
1. **Standardize** each feature: `z_ij = (x_ij - mu_j) / sigma_j`. Scaling is essential because PCA maximizes variance and would otherwise be dominated by features with large numeric ranges.
2. Compute the covariance matrix `Sigma = (1/n) X^T X` (a d x d matrix whose entry (i,j) is the covariance of features i and j).
3. Perform **eigen-decomposition** `Sigma = V Lambda V^T` (equivalently singular value decomposition `X = U S V^T`). Each eigenvector `v_j` is a principal component direction; its eigenvalue `lambda_j` equals the variance of the data projected onto it.
4. Sort the eigenvectors by descending eigenvalue and keep the top k to form the projection matrix `V_k` (d x k).
5. Project: `X' = X V_k` (n x k). The projected coordinates are the new k-dimensional representation.

Two properties matter for interpretation: **explained variance ratio** `lambda_j / sum(lambda)`, which states what fraction of total variance each component captures (cumulative ratios guide the choice of k), and the fact that the transformed features are **decorrelated** (the covariance matrix of X' is diagonal). On the Breast Cancer dataset (569 samples, 30 numeric features, 2 classes: benign/malignant), the first two principal components typically retain about 63% of the total variance, and the 2D scatter plot shows the two classes forming two well-separated clouds, proving the data is largely low-rank. A practical recipe: fit `PCA(n_components=2)`, transform the standardized data, color the scatter by the diagnosis labels, and print `explained_variance_ratio_`.

```
[DIAGRAM: PCA projection from 3D to 2D
              feature 2
                 ^
                 |    * * *
                 |   * * *    ellipsoidal cloud of points
                 |  * * * *
                 +----------------> feature 1
   PC1: direction of maximum variance (long axis of the ellipsoid)
   PC2: orthogonal direction of next-maximum variance (short axis)
   Projection: drop the component with smallest eigenvalue to get 2D coordinates
]
```

**Code**:

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import load_breast_cancer
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

data = load_breast_cancer()
X = StandardScaler().fit_transform(data.data)        # standardize (mu=0, sigma=1)
pca = PCA(n_components=2)                            # keep top 2 components
X2 = pca.fit_transform(X)

print("Explained variance ratio:", np.round(pca.explained_variance_ratio_, 3))
print("Total variance kept:", round(pca.explained_variance_ratio_.sum(), 3))

plt.figure(figsize=(6, 5))
plt.scatter(X2[:, 0], X2[:, 1], c=data.target, cmap='coolwarm', s=15)
plt.xlabel('PC1'); plt.ylabel('PC2')
plt.title('Breast Cancer dataset projected onto 2 principal components')
plt.show()
```

**Expected output**: `Explained variance ratio: [0.443 0.19 ]` and `Total variance kept: 0.633` — a 2D scatter plot where benign (blue) and malignant (red) samples separate into two distinct clusters along PC1.
