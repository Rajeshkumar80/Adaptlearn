# BCS605A — Blockchain Technology

## Module 3: Ethereum & Smart Contracts Programming

### Ethereum Platform Architecture

**Definition:** Ethereum (launched 2015 by Vitalik Buterin) is a decentralized, open-source platform that executes smart contracts — self-executing programs — on a global, tamper-proof virtual machine. It is often called a "world computer".

**Architecture layers:**
- Ethereum protocol (P2P, devp2p) for block/transaction propagation
- Ethereum Virtual Machine (EVM): the runtime that executes bytecode
- State layer: account balances and contract storage (world state trie)
- Consensus layer: transitioned from PoW to PoS ("The Merge", Sept 2022); finality via Casper FFG
- Execution layer (formerly mainnet client) and consensus layer (Beacon chain client)

**Account types:**
- Externally Owned Account (EOA): controlled by a private key; can send transactions; has balance
- Contract account: controlled by code; has balance; can only act when triggered by a transaction from an EOA or another contract

**Account state fields:** nonce, balance, storageRoot (Merkle Patricia trie of storage), codeHash (for contract accounts).

```
[DIAGRAM: Ethereum account model
 EOA (private key owned) ----> signs transaction
        |
        v
 Transaction --> State transition function --> New state
        |
        v
 Contract account (code + storage) -- may call other contracts
]
```

### Ether and Gas Mechanism

**Ether (ETH):** the native cryptocurrency of Ethereum. Denominations: wei (10^-18 ETH, base unit), gwei (10^-9 ETH, used for gas pricing). ETH pays for computation and secures the network (staking).

**Gas — the metering mechanism:**
- Every EVM operation has a fixed gas cost (e.g., ADD = 3, SSTORE = 20000/5000, CALL = 700)
- Gas prevents infinite loops and resource abuse: a transaction consumes gas until it runs out
- Gas limit: the maximum gas the sender is willing to spend (per block: block gas limit)
- Gas price: the amount of ETH per unit of gas the sender offers (in gwei)
- Transaction fee = gas used x gas price (EIP-1559: base fee + priority tip)

**Gas Limit prevents infinite loops because:** if a transaction (or a loop inside it) consumes more gas than the limit, execution halts immediately with an out-of-gas exception, and all state changes are reverted. The sender still pays for the gas consumed, so attackers cannot run unbounded loops for free.

**EIP-1559 (London, 2021):** fee = base fee (burned) + tip (miner/validator). Base fee adjusts per block to target 50% fullness, making fees more predictable.

### EVM Bytecode and State Transition Function

**EVM (Ethereum Virtual Machine):** a stack-based, quasi-Turing-complete virtual machine (Turing-complete in practice because gas bounds execution). It executes EVM bytecode compiled from Solidity.

**EVM architecture:**
- Stack: 1024 slots, 256-bit words; all operations use the stack
- Memory: volatile byte array, cleared between transactions
- Storage: persistent key-value store (256-bit keys/values), expensive (SSTORE)
- Program counter (PC), gas, call data, return data
- It has no registers or JIT — it is an interpreted, stack-based machine

**State transition function:** `STF(previous_state, transaction) = new_state`. For each transaction, the EVM:
1. Validates the sender, nonce, signature, and sufficient balance for fee
2. Deducts gas fee from sender balance
3. Executes the code (EOA transfer or contract call)
4. Updates balances/storage; refunds unused gas
5. Appends transaction and new state root to the block

```
[DIAGRAM: EVM execution model
 Solidity source --> (solc compiler) --> EVM bytecode
        |
        v
 Transaction --> EVM: Stack | Memory | Storage
        |           PC loop executes opcodes, gas decremented
        v
 State changes + gas consumed --> fee = gasUsed * gasPrice
]
```

**Opcode examples:** PUSH, POP, ADD, MUL, CALL, CALLER, SSTORE, SLOAD, RETURN, REVERT.

### Solidity Language Fundamentals

**Definition:** Solidity is a statically-typed, contract-oriented, high-level language (influenced by C++, Python, JavaScript) that compiles to EVM bytecode. Compiled using solc via Remix IDE, Truffle, or Hardhat.

**Data types:**
- Value types: bool, int/uint (8-256 bits, e.g., uint256), address, bytes1-bytes32, enum, fixed-size arrays
- Reference types: string, bytes (dynamic), arrays, structs, mapping
- Special variables: msg.sender, msg.value, msg.data, block.timestamp, block.number, tx.origin, blockhash()

**Storage vs Memory vs Calldata:**
- storage: persistent on-chain state (expensive)
- memory: temporary, transaction-scoped (cheaper)
- calldata: read-only function arguments (non-modifiable)

**State variables vs local variables:** state variables persist in contract storage (written to the chain); local variables live in memory/stack during execution.

**Visibility specifiers:** public, private, internal, external.
- public: accessible from anywhere (auto getter generated)
- private: only within the contract
- internal: contract and derived contracts
- external: only from outside the contract (cheaper for large args)

### Functions, Modifiers, Events, Inheritance

**Function structure:**
```
function name(params) visibility [mutability] [returns (types)] { body }
```
- Mutability keywords: view (reads state, no writes), pure (no state reads/writes), payable (can receive ETH), nonpayable (default, rejects ETH)

**Modifiers:** reusable code injected at the start/end of a function; commonly used for access control (onlyOwner, onlyVoter). Executed in sequence; `_;` marks where the function body runs.

**Events:** logging mechanism that emits data to the transaction log (cheaper than storage); indexed up to 3 params for filtering. Off-chain apps (web3.js/ethers.js) subscribe to events to track state changes.

**Inheritance:** contracts can inherit from multiple contracts (C3 linearization for function resolution). `is` keyword; `override` for overriding; `virtual` for overridable functions; constructors run base-first.

**Example — simple Voting contract pattern (frequently asked):**
```
contract Voting {
    mapping(address => bool) public voted;
    mapping(bytes32 => uint256) public votesReceived;
    address public owner;
    modifier onlyOwner() { require(msg.sender == owner); _; }
    modifier canVote() { require(!voted[msg.sender]); _; }
    constructor() { owner = msg.sender; }
    function vote(bytes32 candidate) public canVote {
        voted[msg.sender] = true; votesReceived[candidate] += 1;
    }
    function winningProposal(bytes32[] memory candidates) public view
        returns (bytes32 winner) {
        uint256 maxVotes = 0;
        for (uint i = 0; i < candidates.length; i++)
            if (votesReceived[candidates[i]] > maxVotes) {
                maxVotes = votesReceived[candidates[i]]; winner = candidates[i]; }
    }
}
```

### Payable Functions and Ether Transfer

- `payable` allows a function to receive ETH (msg.value > 0)
- Transfer methods: `transfer()` (2300 gas stipend, reverts on failure), `send()` (returns bool, 2300 gas), `call{value: x}("")` (forward all gas, returns bool; recommended for gas flexibility but dangerous with reentrancy)
- `address payable` type is required to send ETH; `payable(address)` converts

### Writing, Compiling and Deploying Smart Contracts

**Development workflow:**
1. Write contract in Solidity (.sol) — e.g., in Remix IDE (browser-based, fastest for exams/demo)
2. Compile with solc: produces ABI (Application Binary Interface — JSON describing functions/events) and bytecode
3. Test locally: Remix VM / Ganache (local blockchain), Hardhat scripts, Truffle console
4. Deploy: send a contract-creation transaction (no `to` address) with bytecode + constructor args; paying gas
5. Interact: via web3.js/ethers.js using the ABI and deployed address; verify on Etherscan

**Truffle vs Hardhat vs Remix:**
- Remix: IDE in browser, fastest prototyping, built-in debugger and test VM
- Truffle: full framework (compile, migrate, test, console); uses migration scripts
- Hardhat: modern framework, flexible, built-in local network, Solidity stack traces, scripting

**Deployment addresses:** deterministic via CREATE (address = hash(sender, nonce)) or CREATE2 (address = hash(sender, salt, codeHash)).

### Smart Contract Security

**Reentrancy attack (DAO hack, June 2016 — $60M stolen):**
- A malicious contract re-enters the victim contract before the victim's balance update completes, repeatedly draining funds
- Classic pattern: victim calls `withdraw()` which calls `msg.sender.call{value: x}("")`; attacker's fallback function re-invokes `withdraw()` while the victim's balance still shows the old value

**Mitigations:**
- Checks-Effects-Interactions pattern: update state (balance/ledger) BEFORE external calls
- ReentrancyGuard modifier (OpenZeppelin): a lock flag that reverts on re-entry
- Use `transfer()`/`send()` (2300 gas stipend prevents re-entry in old code)
- Pull payments instead of push (user withdraws rather than contract sends)

```
[DIAGRAM: Reentrancy attack
 Attacker calls victim.withdraw() 
        | 
 victim sends ETH via call{} --> attacker fallback()
        |                         |
 victim balance NOT yet updated   re-enter withdraw() again
        |                         |
        <-- loop repeats until funds drained -->
]
```

**Other common vulnerabilities:**
- Integer overflow/underflow (pre-0.8.0) — use SafeMath or Solidity 0.8+ built-in checks
- tx.origin authentication (phishing vector) — use msg.sender
- Denial of service via reverting external calls, gas limit issues
- Uninitialized delegatecall / storage collision (proxy patterns)
- Front-running (transaction ordering dependence) in AMMs and auctions

**Solidity best practices:** use modifiers for access control, emit events for all state changes, follow checks-effects-interactions, prefer OpenZeppelin standard libraries, test with fuzzing/static analyzers (Slither, Mythril).

**Example — ReentrancyGuard pattern:**
```
contract Guarded {
    bool private locked;
    modifier noReentrant() {
        require(!locked, "reentrant call");
        locked = true;
        _;
        locked = false;
    }
    function withdraw() external noReentrant {
        // effects first: update balance, then send
        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;
        (bool ok, ) = msg.sender.call{value: amount}("");
        require(ok, "transfer failed");
    }
}
```
