# BCS605A — Blockchain Technology

## Module 5: Decentralized Applications (dApps) & Use Cases

### dApp Definition and Architecture

**Definition:** A decentralized application (dApp) is an application whose backend runs on a decentralized peer-to-peer network (blockchain) rather than a central server. Its frontend may be a normal web/mobile interface, but all business logic lives on-chain (smart contracts) and data may live on decentralized storage.

**Key properties of a dApp:**
- Open source; logic governed by smart contracts
- Decentralized storage of data (on-chain and/or IPFS)
- Cryptographic tokens or keys for access
- Consensus-based backend; no single point of failure
- User control of keys and identity (wallet-based auth)

**Three-tier dApp architecture:**
1. Frontend: HTML/JS UI (React, Vue) with a wallet provider (MetaMask)
2. Web3 layer: web3.js / ethers.js libraries that connect UI to the chain (JSON-RPC)
3. Backend: smart contracts deployed on the blockchain + decentralized storage (IPFS)

```
[DIAGRAM: dApp architecture
 Browser UI (React/HTML) <--> MetaMask wallet (keys + signing)
             |
        web3.js / ethers.js (RPC provider)
      ______|______
     |             |
 Smart contracts   IPFS (content storage)
 (EVM / chain)     (metadata, images, files)
]
```

### IPFS — InterPlanetary File System

**Definition:** IPFS is a peer-to-peer, content-addressed distributed file system. Files are identified by their content hash (CID), not by location, and are stored/shared across a P2P network of nodes.

**How IPFS works:**
1. A file is split into chunks, each hashed (SHA-256) into a CID (Content Identifier)
2. DAG (Merkle DAG) links chunks into a single root CID — a content-addressed directory structure
3. Nodes store chunks and share via BitSwap protocol; other nodes retrieve by CID from any provider
4. Deduplication: identical content shares the same CID; tampering changes the hash — integrity by construction

**Why dApps use IPFS:**
- Blockchains are poor storage (expensive, limited); IPFS stores large media cheaply
- Content addressing gives verifiable, tamper-evident storage
- Integration: the CID is written on-chain (in the smart contract/transaction), linking off-chain data to on-chain proof

**IPFS vs HTTP:**
- HTTP: location-based (URL -> server), single point of failure, content can be removed
- IPFS: content-based (CID -> any provider), resilient, immutable unless unpinned
- Limitation: no incentive to keep data — solved by Filecoin (pay storage miners) and pinning services (Pinata)

### Web3.js / Ethers.js

**Definition:** JavaScript libraries that wrap the Ethereum JSON-RPC API, letting frontends read chain state, send transactions, listen to events, and interact with contracts.

**web3.js:**
- Developed by the Ethereum Foundation; object-based API
- `web3.eth.getBalance()`, `web3.eth.sendTransaction()`, `web3.eth.Contract(abi, address)` for contract interaction
- Provider: Web3Provider (MetaMask injected), HttpProvider, IPCProvider

**ethers.js:**
- Lighter and modern; provider/signer abstraction
- `ethers.providers.Web3Provider(window.ethereum)`, `ethers.Contract(address, abi, signer)`
- Built-in big number (BigNumber) handling, more secure defaults

**Key operations:**
1. Connect: request accounts via MetaMask (`eth_requestAccounts`)
2. Read: call a view function — no gas, no signature needed
3. Write: sign a transaction with the wallet and broadcast — requires gas and user confirmation
4. Listen: `contract.on("EventName", handler)` to react to on-chain events

### Wallet Connectors: MetaMask

**Definition:** MetaMask is a browser-extension (and mobile) cryptocurrency wallet that holds private keys, signs transactions, and injects a provider (`window.ethereum`) into dApp web pages.

**Functions in a dApp:**
- Acts as the identity/signing layer: the dApp never sees the private key
- Manages multiple networks (Ethereum mainnet, Goerli/Sepolia testnets, custom RPCs)
- Confirms and signs transactions and message signatures (EIP-712 typed data)
- Provides the JSON-RPC bridge for web3.js/ethers.js

**Typical login flow (wallet-based auth):** user clicks "Connect Wallet" -> MetaMask popup -> user approves -> dApp receives the account address; on-chain actions are signed per-transaction by the user.

### Token Standards

**ERC-20 — fungible token standard:** interchangeable tokens (same value/type), like currencies and loyalty points. All ERC-20 tokens share a common interface so wallets/exchanges support them uniformly.

**Required ERC-20 interface functions:**
- `totalSupply()` -> uint256
- `balanceOf(address)` -> uint256
- `transfer(address to, uint256 value)` -> bool
- `approve(address spender, uint256 value)` -> bool
- `transferFrom(address from, address to, uint256 value)` -> bool
- `allowance(address owner, address spender)` -> uint256
- Events: `Transfer(from, to, value)`, `Approval(owner, spender, value)`

**ERC-721 — non-fungible token (NFT) standard:** each token is unique (tokenId -> owner mapping), representing art, collectibles, deeds, tickets. NOT divisible; transfers move a specific token.

**Required ERC-721 interface (subset):**
- `balanceOf(address)` -> uint256
- `ownerOf(uint256 tokenId)` -> address
- `safeTransferFrom(from, to, tokenId, data)`, `transferFrom(from, to, tokenId)`
- `approve(address, uint256)`, `getApproved(uint256)`, `setApprovalForAll(operator, bool)`
- Events: `Transfer`, `Approval`, `ApprovalForAll`

**ERC-721 vs ERC-20 comparison:**

| Aspect | ERC-20 | ERC-721 |
| :--- | :--- | :--- |
| Fungibility | Fungible (all equal) | Non-fungible (unique) |
| Unit | Divisible (decimals) | Indivisible (tokenId) |
| Identity | None (balance only) | Unique tokenId |
| Typical use | Currencies, tokens, staking | Art, collectibles, property |
| Metadata | Name/symbol/decimals | URI pointing to metadata |

**ERC-1155 — multi-token standard:** supports fungible, semi-fungible, and NFTs in one contract (gaming).

### Decentralized Finance (DeFi) Primitives

**Definition:** DeFi is a suite of financial services (lending, trading, insurance) built on smart contracts, without banks or intermediaries.

**Core primitives:**
- DEX (Decentralized Exchange): peer-to-pool trading, e.g., Uniswap, SushiSwap
- Automated Market Maker (AMM): replaces the order book with a mathematical price formula; the constant product rule x*y = k — price = ratio of token reserves. Traders swap against liquidity pools; price moves only when reserves change
- Liquidity Pools: users deposit token pairs (e.g., ETH/DAI) and earn a share of trading fees; LP tokens represent the deposit share
- Flash Loans: uncollateralized loans that must be repaid within the same transaction block; used for arbitrage, collateral swaps, and liquidations; enabled because Ethereum transactions are atomic (all-or-nothing)
- Yield farming / staking: earn rewards for providing liquidity or locking tokens
- Stablecoins: price-pegged tokens (DAI — collateralized, USDC — fiat-backed)
- Oracles (Chainlink): bring off-chain price data on-chain; oracles make or break DeFi

```
[DIAGRAM: AMM constant product
 Token A reserve: x   Token B reserve: y   k = x * y (constant)
 Trader swaps a of A --> receive b of B: (x+a)(y-b) = k
 Price of A in B = y / x ; slippage increases with trade size
]
```

**Risks of DeFi:** smart contract exploits (flash-loan attacks, oracle manipulation), impermanent loss for liquidity providers, regulatory uncertainty.

### Blockchain Use Cases Across Industries

**Supply chain tracking (pharmaceutical provenance — exam frequent):**
- Each transfer of goods (manufacturer -> distributor -> pharmacy -> patient) is a blockchain transaction
- Each drug batch gets a unique digital identity/token; sensor data and handling events appended as transactions
- Provides tamper-proof provenance, anti-counterfeiting, cold-chain temperature records, regulatory audit trail
- Immutability ensures no party can retroactively alter batch records; regulators and patients can verify authenticity

**Healthcare records:**
- Patient consent and record access logged on-chain; records themselves stored off-chain (IPFS/encrypted) with on-chain hashes
- Interoperability between hospitals; patient controls data-sharing permissions; audit trail for every access
- Privacy challenge: medical data must remain encrypted; solved via off-chain storage + access control + zero-knowledge proofs

**Identity management:**
- Self-sovereign identity (SSI): users control their own identity data; verified attributes (KYC, education) issued as verifiable credentials
- Prevents identity theft; single digital ID for banking, travel, government
- Hyperledger Indy/Aries are dedicated SSI frameworks

**Real estate:**
- Land registries as permissioned chains (e.g., Sweden, Georgia pilots); tokenization of property (fractional ownership via security tokens)
- Smart contracts automate escrow, title transfer, and payment; reduces fraud and paperwork

**Legal and regulatory challenges:**
- Jurisdiction and conflict of laws: a global network does not map to a single country's law
- Smart contract liability: who is accountable when code executes unexpectedly?
- AML/KYC compliance, data privacy (GDPR "right to be forgotten" conflicts with immutability)
- Token classification (securities vs utility tokens) varies across regulators (SEC, ESMA)
- Tax treatment of crypto gains; uncertain status of DAO governance

**Industry impact summary table:**

| Industry | Problem solved | Blockchain application |
| :--- | :--- | :--- |
| Supply chain | Counterfeiting, opacity | Batch provenance tracking, cold chain |
| Healthcare | Fragmented records | Consent-based record sharing, audit |
| Identity | Identity theft | Self-sovereign credentials |
| Real estate | Fraud, slow transfers | Land registry, tokenized property |
| Finance | Intermediary cost | DeFi lending, AMMs, stablecoins |
