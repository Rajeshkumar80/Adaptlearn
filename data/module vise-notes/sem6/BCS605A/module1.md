# BCS605A — Blockchain Technology

## Module 1: Blockchain Fundamentals & Cryptography

### Blockchain Overview

**Definition:** A blockchain is a decentralized, distributed, and immutable digital ledger that records transactions across a peer-to-peer network. Each transaction is grouped into a block, and blocks are cryptographically chained in chronological order, so altering any recorded data is computationally infeasible.

**Key characteristics of blockchain:**
- Decentralization: no single authority controls the network; every node maintains a copy of the ledger
- Immutability: once a block is appended and confirmed, its data cannot be modified without redoing all subsequent blocks
- Transparency: all participants can verify transactions (in public blockchains)
- Pseudonymity: participants are identified by public addresses, not real identities
- Auditability: a complete, tamper-evident history of all transactions exists
- Consensus-driven: all nodes agree on ledger state via a consensus algorithm

### Centralized vs Decentralized vs Distributed Systems

- **Centralized system:** one central server/authority controls data, processing, and decisions. All clients depend on it. Example: a traditional bank's ledger. Single point of failure; easy to govern.
- **Decentralized system:** control and decision-making are spread across multiple independent nodes; no single authority. Example: Bitcoin network (no central bank or server). Harder to censor or take down.
- **Distributed system:** data and computation are spread across multiple machines, but control may still be centralized. Example: a CDN or distributed database owned by one company. Decentralization is about control; distribution is about geography/computation.

**Comparison table:**

| Aspect | Centralized | Decentralized | Distributed |
| :--- | :--- | :--- | :--- |
| Control | Single authority | No single authority | May be single authority |
| Failure tolerance | Single point of failure | Resilient | Resilient to node failure |
| Performance | High (simple) | Lower (consensus overhead) | High (parallel) |
| Censorship resistance | Low | High | Medium |
| Example | Bank database | Bitcoin, Ethereum | Google data centers, CDN |

### History of Blockchain

- 1982: David Chaum proposes ecash (digital cash concept)
- 1991: Haber and Stornetta introduce timestamping of digital documents using cryptographic hashes
- 1998: Nick Szabo proposes "bit gold" (decentralized digital currency)
- 2008: Satoshi Nakamoto publishes the Bitcoin whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System"
- 2009: Bitcoin genesis block mined (3 January 2009), solving double-spending without a trusted third party
- 2013: Vitalik Buterin proposes Ethereum; Ethereum launched in 2015 with smart contracts
- 2015: Hyperledger project launched by the Linux Foundation for enterprise blockchains
- 2020 onward: DeFi, NFTs, permissioned blockchains, and enterprise adoption

### Distributed Ledger Technology (DLT) Architecture

**Definition:** DLT is a broader term for any system of shared, replicated, synchronized, and immutable data spread across multiple sites, institutions, or geographies. Blockchain is one type of DLT.

**Core layers of DLT architecture:**
- Data layer: blocks, transactions, hashes, Merkle trees
- Network layer: P2P propagation, gossip protocol
- Consensus layer: PoW, PoS, PBFT etc., for agreeing on state
- Incentive layer: mining rewards, transaction fees
- Contract layer: scripts/smart contracts (Ethereum, Hyperledger)
- Application layer: dApps, wallets, user interfaces

**Differences: Blockchain vs DLT:**
- All blockchains are DLTs, but not all DLTs are blockchains
- Blockchain organizes data into chained blocks; other DLTs may use other structures (e.g., directed acyclic graphs)
- Blockchain uses a linear chain; DLT may use different data models

```
[DIAGRAM: DLT layered architecture
 Application layer (dApps, wallets)
        |
 Contract layer (smart contracts, chaincode)
        |
 Incentive layer (mining rewards, fees)
        |
 Consensus layer (PoW, PoS, PBFT)
        |
 Network layer (P2P, gossip propagation)
        |
 Data layer (blocks, hashes, Merkle trees)
]
```

### Generic Blockchain Structure

A blockchain is a chain of blocks, each block containing a header and a body.

**Block header fields:**
- Version number: software/protocol version used
- Previous block hash: hash (SHA-256) of the previous block's header; this creates the chain and ensures tamper-evidence
- Merkle root: root hash of all transactions in the block body
- Timestamp: time of block creation (Unix time)
- Difficulty target (Bits): encoded difficulty for PoW
- Nonce: a 32-bit counter that miners vary to find a valid block hash
- Block hash: not stored inside the block; computed as SHA-256(SHA-256(header))

**Block body:** contains the list of validated transactions and the Merkle tree structure of those transactions.

```
[DIAGRAM: Block structure and blockchain linkage
 Block N-1 header (hash H(N-1))
        |
        v
 Block N header: Version | PrevHash = H(N-1) | MerkleRoot | Timestamp | Difficulty | Nonce
        |
        +----------------------+
        v                      v
 Block N body:            Merkle tree of
 transactions list        all transactions
        |
        v
 Block N+1 header: Version | PrevHash = H(N) | ...
]
```

**Why previous hash matters:** changing any byte in a block changes its hash, which changes every subsequent block's "previous hash", making alteration detectable and requiring re-mining of the whole chain.

### Cryptographic Hash Functions

**Definition:** A hash function H maps input of arbitrary length to a fixed-size output (digest). A cryptographic hash function must satisfy:

**Properties of cryptographic hash functions:**
- Preimage resistance (one-way): given y, it is infeasible to find x such that H(x) = y
- Second preimage resistance: given x, it is infeasible to find x' != x with H(x) = H(x')
- Collision resistance: infeasible to find any two distinct inputs x, x' with H(x) = H(x')
- Determinism: same input always produces the same output
- Avalanche effect: a one-bit change in input changes roughly 50% of output bits
- Efficiency: computation is fast for legitimate use

**SHA-256 (Secure Hash Algorithm 256):**
- Produces a 256-bit (32-byte) digest
- Uses Merkle-Damgard construction with 64 rounds of compression
- Used in Bitcoin for block hashing and double-SHA256: H = SHA256(SHA256(data))
- Output is typically shown as a 64-character hexadecimal string
- In Bitcoin, a valid block hash must start with a required number of leading zeros (below difficulty target)

**Collision resistance in practice:** for a 256-bit hash, an attacker needs about 2^128 operations (birthday bound) to find a collision — computationally infeasible with current technology.

### Merkle Trees

**Definition:** A Merkle tree (hash tree) is a binary tree where leaf nodes are hashes of data items (transactions) and each internal node is the hash of the concatenation of its two children. The root node is the Merkle root.

**Construction steps:**
1. Hash each transaction: leaf = SHA-256(tx)
2. Pair adjacent leaves and hash their concatenation to form parent nodes
3. Repeat pairing upward until a single root hash remains
4. If an odd number of nodes exists, duplicate the last node (hash it with itself)

```
[DIAGRAM: Merkle tree for 4 transactions
            Merkle Root = H(AB || CD)
            /                    \
      H(AB) = H(A||B)        H(CD) = H(C||D)
       /        \              /        \
   H(A)        H(B)        H(C)        H(D)
    |           |           |           |
  Tx A        Tx B        Tx C        Tx D
]
```

**Verification (Merkle proof):** to prove transaction D is in the block, a lightweight node needs only the root and sibling hashes H(C), H(AB) along the path — just log2(n) hashes, not all transactions. This enables Simplified Payment Verification (SPV) in Bitcoin wallets.

**Uses of Merkle trees:**
- Efficient and compact verification of block contents
- Quick tamper detection: changing one transaction changes the root
- Enables light clients (SPV nodes) to verify transactions without the full chain
- Reduces storage/bandwidth: root stored in header is 32 bytes regardless of block size

### Public Key Cryptography and ECDSA

**Definition:** Public key cryptography (asymmetric cryptography) uses a pair of keys: a private key kept secret and a public key derived from it. Messages signed with the private key can be verified by anyone holding the public key.

**Elliptic Curve Cryptography (ECC):**
- Based on the algebraic structure of elliptic curves over finite fields: y^2 = x^3 + ax + b (mod p)
- Offers equivalent security to RSA with much smaller keys (256-bit ECC ~ 3072-bit RSA)
- Bitcoin/Ethereum use the secp256k1 curve: y^2 = x^3 + 7 (mod p), where p is a 256-bit prime

**ECDSA key generation:**
- Choose a private key d: a random 256-bit integer in [1, n-1]
- Compute public key Q = d * G, where G is the fixed generator point on the curve and * is point multiplication (repeated point addition)
- Q is a point (x, y); the x-coordinate is used in Bitcoin addresses

**ECDSA signing (message m, private key d):**
1. Compute hash z = H(m) (usually truncated)
2. Pick random nonce k, compute R = k * G; r = R.x mod n
3. Compute s = k^-1 (z + r*d) mod n
4. Signature is the pair (r, s)

**ECDSA verification (message m, public key Q, signature (r, s)):**
1. Compute z = H(m)
2. Compute w = s^-1 mod n, u1 = z*w mod n, u2 = r*w mod n
3. Compute point P = u1*G + u2*Q
4. Signature is valid if P.x mod n == r

```
[DIAGRAM: ECDSA flow
 Private key d (random) --> Public key Q = d * G
 Message m --> z = H(m) --> (r, s) = Sign(d, z)
 (r, s) + Q + m --> Verify: u1*G + u2*Q == r ?
          Valid --> Accept signature
]
```

### Digital Signatures

**Definition:** A digital signature is a cryptographic mechanism that provides authenticity, integrity, and non-repudiation for a message, using the signer's private key.

**Core properties:**
- Authenticity: proves the message came from the holder of the private key
- Integrity: any modification to the message invalidates the signature
- Non-repudiation: the signer cannot deny having signed the message

**Why digital signatures are essential in blockchain:**
- Transaction authorization: only the owner of the private key can spend the associated coins (UTXO unlocking scripts)
- Identity: addresses are derived from public keys
- Proof of ownership without revealing the private key

**Typical blockchain transaction flow:**
1. Sender constructs a transaction (recipient address, amount, inputs)
2. Signs the transaction hash with their private key (ECDSA)
3. Broadcasts (transaction, signature) to the network
4. Any node verifies the signature with the sender's public key before accepting

**Comparison: Hash vs Digital signature**

| Property | Hash | Digital Signature |
| :--- | :--- | :--- |
| Purpose | Integrity only | Integrity + authenticity + non-repudiation |
| Keys | None (public algorithm) | Private + public key pair |
| Verifier | Anyone | Anyone with public key |
| Can be forged | No (collision resistance) | No (ECDLP hardness) |

**Security basis:** ECDSA security relies on the Elliptic Curve Discrete Logarithm Problem (ECDLP) — given Q and G, finding d such that Q = d*G is computationally infeasible.

**Note on nonce reuse:** reusing the signing nonce k in ECDSA leaks the private key — a famous practical attack on faulty Bitcoin wallets (2013).
