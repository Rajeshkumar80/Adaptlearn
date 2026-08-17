# BCS605A — Blockchain Technology

## Module 4: Permissioned Blockchains & Hyperledger Fabric

### Permissioned Blockchains

**Definition:** A permissioned (private/consortium) blockchain restricts participation — who can read, write, and validate — through an identity and access-control layer (typically X.509 certificates). Only pre-approved, known entities join the network.

**Public vs Private vs Consortium blockchains:**

| Aspect | Public (Bitcoin, Ethereum) | Private | Consortium (Fabric, Corda) |
| :--- | :--- | :--- | :--- |
| Access | Permissionless, anyone | Single organization | Multiple approved organizations |
| Identity | Pseudonymous | Known members | Known members |
| Consensus | PoW/PoS, incentives | PoA/PBFT, trust-based | PBFT/Raft/Pluggable |
| Throughput | Low (7-20 TPS) | High | High (thousands of TPS) |
| Privacy | Limited (transparent) | Complete within org | Private channels/data |
| Token needed | Yes | Optional | Usually not |
| Governance | Community/DAO | One company | Consortium of companies |

**Enterprise blockchain use cases:**
- Cross-organizational data sharing (supply chains, trade finance)
- Regulatory compliance and audit trails (banking, KYC)
- Inter-company settlement without reconciliation overhead
- Healthcare data exchange between hospitals, labs, insurers
- Government records (land registry, identity, licenses)
- Key requirement: privacy (competitors share a ledger but not data), known identities, high throughput

**Comparison: Public vs Permissioned blockchains**
- Public blockchains: open participation, native token incentives, probabilistic consensus, transparent, censorship-resistant, but slow and limited privacy
- Permissioned: closed membership, identity-based access control, high performance, privacy via channels, regulatory-friendly, but requires trust in the governing authority

### Hyperledger Project Overview

**Definition:** Hyperledger is an open-source collaborative effort hosted by the Linux Foundation (2015) for cross-industry enterprise blockchain frameworks. It is not a single blockchain — it is a collection of projects.

**Key Hyperledger projects:**
- Hyperledger Fabric: modular, permissioned blockchain platform (Go/Node.js chaincode); most widely used enterprise framework
- Hyperledger Sawtooth: modular, supports PoET (Proof of Elapsed Time)
- Hyperledger Besu: Ethereum client for both public and permissioned networks
- Hyperledger Indy: self-sovereign decentralized identity
- Hyperledger Aries: identity communication layer
- Hyperledger Cello, Caliper (benchmarking), Ursa (crypto library)

**Fabric's distinguishing design goals:**
- Execute-then-order architecture (execute/validate/order/commit), unlike order-then-execute (Bitcoin/Ethereum)
- No native cryptocurrency required
- Pluggable consensus, pluggable membership (MSP), channels for data isolation
- Confidentiality via private data collections

### Hyperledger Fabric Components

**Peer nodes:**
- The fundamental network entities that host the ledger and chaincode (smart contracts)
- Maintain: world state database (LevelDB or CouchDB — JSON queries) and blockchain (transaction log)
- Each peer hosts one or more channels; ledger state is channel-scoped
- Peers can be endorsing peers (endorse proposals), anchor peers (discovery bridge), or committers

**Endorsing peers:**
- Peers designated (by chaincode endorsement policy) to simulate/validate a transaction proposal and return an endorsement (read-write set + signature)
- Endorsement policy: e.g., "AND(Org1.peer, Org2.peer)" — which organizations must endorse
- Endorsing peers do NOT commit alone; they only simulate and sign

**Orderer nodes (ordering service):**
- Establish the total order of transactions into blocks (consensus)
- Do NOT execute chaincode and do NOT hold the state database
- Orderer modes: Raft (crash fault tolerant, recommended), Kafka (legacy), Solo (single node, dev only); Fabric 3.x: PBFT-style BFT ordering (SmartBFT)
- Distributes ordered blocks to all channel peers

**Certificate Authority (CA):**
- Issues X.509 identities (enrollment certificates) to orgs, peers, admins, clients
- Fabric CA component issues: enrollment certificates (ECert), TLS certificates
- Membership Service Provider (MSP) validates identities and defines org membership roles (admin, member, peer)
- PKI concepts: root CA, intermediate CA, registration/enrollment, certificate revocation (CRL)

```
[DIAGRAM: Fabric network component layout
 Org1 (CA1)             Org2 (CA2)             Org3 (CA3)
  | Peer1(endorser)      | Peer2(endorser)      | Peer3(committer)
  +--------+----------------+---------------------+
           |
       Channel (shared ledger)
           |
    Ordering service (Raft cluster)
     blocks broadcast to all peers
]
```

**Channels:**
- A private subnetwork between a subset of organizations
- Each channel has its own ledger, chaincodes, MSP, endorsement policies
- Organizations not in the channel cannot see its data — the core privacy mechanism

**Chaincode:**
- Fabric's smart contract: business logic written in Go, Node.js, or Java
- Runs in a secure container (or external runtime) isolated from peers
- Interacts with world state via getState/putState (stub API)
- Chaincode is installed on peers and instantiated/approved per channel
- Versioned; upgrades governed by endorsement policies; no native currency unless business defines tokens

### Fabric Transaction Flow (Endorsement, Ordering, Commit)

**The three phases:** execute (simulate), order, validate & commit.

**Step-by-step flow:**
1. Client (application) constructs a transaction proposal and sends it to the endorsing peers of the relevant organizations
2. Endorsing peers simulate the chaincode (read state, compute read-write set), sign it, and return an endorsement response
3. Client checks the response against the endorsement policy; if satisfied, submits the endorsed transaction to the ordering service
4. Orderer service sequences all transactions (from all channels) into blocks, ordering them in time; it does not check business validity
5. Orderer broadcasts the block to all peers on the channel
6. Each peer validates the block: endorsement policy compliance, read-set version checks (MVCC) against world state; invalid transactions are marked invalid
7. Peers append the block to the channel ledger and update world state; a commit event notifies the client

```
[DIAGRAM: Fabric transaction flow
 Client --proposal--> Endorsing peers (simulate + sign)
        <--endorsements--
 Client checks endorsement policy
        --endorsed tx--> Ordering service (order into block)
        <--block broadcast--
 Peers validate (policy + MVCC) --> append ledger + update world state
]
```

**Why execute-then-order?** Because chaincode is executed before ordering, results depend on chaincode logic and current state, not on the order of conflicting transactions — this enables better throughput and prevents wasted ordering work. Conflicting transactions are resolved by read-set version checking at commit.

### PKI and Certificate Authority in Fabric (Exam Important)

- Every actor (peer, client, admin) holds an X.509 certificate signed by the org's CA
- MSP maps certificates to organizational roles, defining which peers endorse and which clients are admins
- TLS certificates secure node-to-node communication; enrollment certificates authenticate identity
- Root CA signs intermediate CAs; revocation via CRLs and OCSP
- This identity layer is what makes Fabric permissioned: no certificate = no participation

### Comparison: Fabric vs Ethereum (Enterprise)

| Aspect | Hyperledger Fabric | Ethereum |
| :--- | :--- | :--- |
| Access | Permissioned (MSP/certs) | Permissionless |
| Consensus | Raft/BFT ordering, no mining | PoS |
| Smart contract | Chaincode (Go/Node/Java) | Solidity/Vyper bytecode |
| Execution model | Execute-order-validate | Order-execute |
| Privacy | Channels + private data collections | Public by default (ZK rollups etc.) |
| Throughput | Thousands of TPS | ~15-100 TPS |
| Native currency | None required | ETH |
