# BCS605A — Blockchain Technology

## Module 2: Bitcoin Architecture & Consensus Mechanisms

### Bitcoin Network Protocol

**Definition:** Bitcoin is the first decentralized cryptocurrency (2009), operating over a peer-to-peer (P2P) network where nodes exchange blocks and transactions directly, without any central server.

**Network characteristics:**
- All nodes are equal peers; no hierarchy, no central coordinator
- Messages are broadcast via flooding/gossip: each node forwards new transactions and blocks to connected peers
- Nodes connect over TCP port 8333 (mainnet), usually 8-125 connections
- A full node stores the entire blockchain and validates all rules; a light (SPV) node stores only block headers
- Orphan/conflicting blocks are resolved by "longest chain wins" rule

**Node types:**
- Full node: validates every transaction/block against consensus rules, holds complete ledger
- Mining node: full node that also competes to create new blocks
- SPV (Simplified Payment Verification) node: light wallet, downloads only headers and Merkle proofs
- Bitcoin network uses a flat P2P architecture (unlike Ethereum's Kademlia-based discovery)

**Transaction propagation life cycle:**
1. Wallet creates and signs a transaction
2. Transaction is broadcast to peers
3. Peers validate (signature, inputs unspent, no double spend) and relay
4. Transaction sits in the mempool (memory pool) waiting for inclusion
5. Miners select transactions by fee, include them in a candidate block
6. On finding a valid PoW, block is broadcast; nodes verify and extend the chain

```
[DIAGRAM: Bitcoin transaction flow
 Wallet sign tx --> Broadcast to P2P network --> Mempool
        --> Miner includes tx in candidate block --> PoW solved
        --> Block broadcast --> Nodes validate --> Block appended to chain
]
```

### UTXO Model vs Account Model

**UTXO (Unspent Transaction Output) model** (used by Bitcoin):
- A transaction consumes previous unspent outputs (inputs) and creates new outputs
- Coins are tracked as "unspent outputs"; balance of an address = sum of its unspent outputs
- Each output must be fully consumed; change is sent back to the sender as a new output
- No balances stored globally; state is the full set of UTXOs

**Account-based model** (used by Ethereum):
- State is a mapping of address -> balance (like bank accounts)
- A transaction is a signed instruction: "transfer X from A to B"; balances update directly
- Simpler for smart contracts; no change-output concept needed

**Bitcoin transaction structure fields:**
- Version: transaction format version
- Input count and inputs: each input has (Previous transaction hash, Output index, ScriptSig/unlocking script, Sequence)
- Output count and outputs: each output has (Value in satoshis, ScriptPubKey/locking script)
- Locktime: earliest time/block height when the transaction can be added to the chain

**Comparison table: UTXO vs Account model**

| Aspect | UTXO (Bitcoin) | Account (Ethereum) |
| :--- | :--- | :--- |
| State representation | Set of unspent outputs | Address -> balance mapping |
| Balance computation | Sum of owned UTXOs | Direct lookup |
| Double-spend prevention | Natural (each output spent once) | Replay/nonce checks needed |
| Parallelism | High (independent outputs) | Limited (state conflicts) |
| Privacy | Better (new addresses per tx) | Weaker (address reuse) |
| Smart contract ease | Hard (scripting is limited) | Easy (stateful contracts) |
| Change handling | Change output required | Not needed |

**Double spending:** spending the same coin twice. Bitcoin prevents it because an output, once referenced by a confirmed transaction, ceases to be part of the UTXO set.

### Bitcoin Scripting Language

**Definition:** Bitcoin Script is a stack-based, Forth-like scripting language used to lock and unlock transaction outputs. It is deliberately NOT Turing-complete (no loops) to keep validation predictable.

**Two scripts per transaction:**
- ScriptPubKey (locking script): placed on the output; defines the condition to spend (usually: "provide a public key whose hash matches, plus a valid signature")
- ScriptSig (unlocking script): provided by the spender; must satisfy the ScriptPubKey conditions

**P2PKH (Pay-to-Public-Key-Hash) script — the standard pattern:**
- Locking: `OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG`
- Unlocking: `<signature> <publicKey>`
- Execution: concatenate unlocking + locking script, run on the stack; if final result is TRUE, the output is spendable

**Other script types:**
- P2SH (Pay-to-Script-Hash): locks to a script hash; enables multisig and complex conditions
- P2WPKH/P2WSH (SegWit): witness-based, lower fees
- Multisig: requires M-of-N signatures

**Script opcodes:** OP_DUP (duplicate top item), OP_HASH160 (hash twice), OP_EQUALVERIFY, OP_CHECKSIG, OP_ADD, OP_IF...OP_ELSE...OP_ENDIF, etc.

### Wallet Types

**Definition:** A wallet is software/hardware that stores private keys and enables creating/signing/broadcasting transactions. The wallet does NOT store coins — coins live on the blockchain; the wallet holds the keys.

**Hot vs Cold wallets:**
- Hot wallet: private keys stored on an internet-connected device (desktop/mobile/web wallet). Convenient, but vulnerable to hacking. Example: MetaMask, mobile wallets.
- Cold wallet: keys stored offline (hardware wallet like Ledger, paper wallet, air-gapped computer). Highly secure against remote attacks; used for large holdings.

**Deterministic (HD) wallets:**
- All keys derive from a single seed (e.g., a 12/24-word mnemonic phrase using BIP-39)
- BIP-32 Hierarchical Deterministic wallet: keys derived via `child key = f(parent key, index)` in a tree; one seed restores all keys
- Advantages: one backup restores everything; can derive fresh addresses per transaction (privacy)

```
[DIAGRAM: HD wallet derivation
 Mnemonic seed (12 words) --> Master key --> hardened/soft children (m/44'/0'/0'/0/i)
        |                               |
   One backup                       Unlimited addresses
]
```

### Byzantine Generals Problem (BGP)

**Definition:** A classic distributed-computing problem: N Byzantine generals (nodes) encircle a city and must agree on a coordinated plan (attack or retreat). Communication is via messengers (messages). Some generals may be traitors (fail or act maliciously) and send conflicting messages. The challenge: reach a common, correct decision despite the presence of faulty/malicious participants.

**Key facts:**
- Proven result: to tolerate f traitors with oral messages, at least 3f+1 loyal generals are required; with signed messages, f+1 suffice in the synchronous case
- Relevance to blockchain: consensus algorithms must make all honest nodes agree on one canonical history even if some nodes misbehave
- Bitcoin's solution: PoW + economic incentives — attackers need >50% hashing power (the honest majority assumption) rather than Byzantine fault tolerance in the classic sense

### Proof of Work (PoW)

**Definition:** PoW is Bitcoin's consensus mechanism. A miner must find a block hash below a target difficulty by varying the nonce, expending computational work; the first to find it earns the block reward.

**Mining process:**
1. Miner assembles a candidate block (transactions from mempool + coinbase reward)
2. Computes `H = SHA256(SHA256(header))` repeatedly, changing the nonce (and extra nonce)
3. A block is valid only if `H < target` (i.e., hash has enough leading zeros)
4. First miner to satisfy the target broadcasts the block; others verify and mine on top

**Difficulty target and adjustment:**
- Difficulty D = Difficulty_1_target / current_target (relative measure)
- Target is a 256-bit number encoded in the header's "Bits" field
- Every 2016 blocks (about 2 weeks), the network retargets: `new_target = old_target * (actual time for 2016 blocks / 2 weeks)`, clamped to 4x change
- Goal: keep average block time at 10 minutes despite changing total hashrate

**Properties:**
- Block reward: 6.25 BTC (halving every 210,000 blocks; started at 50 in 2009)
- Security: an attacker needs >50% of network hashrate to reliably double-spend (51% attack)
- Cost: enormous electricity consumption; slow (~7 TPS) and high fees

**51% Attack:** if one miner/coalition controls >50% hashrate, they can:
- Prevent other miners' blocks from confirming (censorship)
- Reverse their own transactions (double spending) by mining a longer private chain and re-orging
- Cannot: steal other users' funds, forge signatures, change block rewards

```
[DIAGRAM: PoW block finding
 Candidate block header --> Hash = SHA256(SHA256(header))
        | nonce++ / extra nonce
        v
 Hash < target ? -- No --> try again
        | Yes
 Valid block --> broadcast --> next block mines on this hash
]
```

### Proof of Stake (PoS)

**Definition:** PoS selects block proposers in proportion to the coins they "stake" (lock up) as collateral, instead of computational work. Used by Ethereum (after The Merge, 2022), Cardano, etc.

**How it works:**
- Validators lock a minimum stake (Ethereum: 32 ETH)
- Validators are pseudo-randomly selected to propose blocks, weighted by stake size and age
- Dishonest behavior (e.g., proposing conflicting blocks) is penalized by "slashing" a portion of the stake
- Block rewards come from transaction fees (no energy-intensive mining)

**Advantages over PoW:** ~99% less energy, higher throughput, economic security via slashing, lower hardware requirements.

**Disadvantages:** "nothing at stake" problem (validators can vote on multiple forks cheaply), wealth concentration (rich get richer), long-range attacks.

### Delegated Proof of Stake (DPoS)

**Definition:** DPoS (used by EOS, TRON, BitShares) has coin holders vote to elect a small fixed set of delegates (witnesses/block producers, e.g., 21) who produce blocks in rotation.

- Voting power proportional to stake; delegates can be voted out
- Very fast (seconds), high throughput — good for dApps
- Trade-off: fewer block producers = more centralized and cartel-prone

### Proof of Authority (PoA)

**Definition:** PoA relies on a set of explicitly authorized, identity-verified validators (approvers). A node is allowed to propose blocks only if its known identity and reputation are at stake.

- Used in private/permissioned networks (e.g., Ethereum Clique, VeChain)
- Advantages: very high throughput, negligible cost, identity accountability
- Disadvantages: centralization by design; requires trusted validators

### Practical Byzantine Fault Tolerance (PBFT)

**Definition:** PBFT (Castro-Liskov, 1999) is a classic BFT consensus for permissioned networks. It tolerates up to f = (n-1)/3 faulty nodes among n total, with 3f+1 requirement.

**Phases (for each view/round):**
1. Pre-prepare: primary (leader) proposes a request/block
2. Prepare: replicas broadcast "prepare" messages and wait for 2f+1 matching prepares
3. Commit: replicas broadcast "commit" messages; after 2f+1 commits the request is executed
4. Reply: executed result is sent to the client
- If the primary is suspected faulty, a view-change elects a new primary
- Used by Hyperledger Fabric (Raft/etcd, simplified), Tendermint (variation), Ripple/Stellar (variants)

**Comparison table: Major consensus algorithms**

| Property | PoW | PoS | DPoS | PoA | PBFT |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Network type | Permissionless | Permissionless | Permissionless | Permissioned | Permissioned |
| Resource used | Computation | Stake | Stake | Identity | None (messages) |
| Finality | Probabilistic | Probabilistic | Probabilistic | Immediate | Immediate |
| Throughput | Low (~7 TPS) | Medium | High | High | Medium-High |
| Energy cost | Very high | Low | Low | Negligible | Negligible |
| Byzantine tolerance | >50% hash | >2/3 stake | >2/3 delegates | Trusted set | (n-1)/3 faults |
| Example | Bitcoin | Ethereum 2.0 | EOS, TRON | Quorum, VeChain | Hyperledger (Raft), Tendermint |
