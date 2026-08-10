# BCS601 — Cloud Computing

## Module 2: Cloud Architectures & Application Paradigms

### Layered Cloud Architecture Design

- A cloud architecture organizes the system into **layers**, each offering services to the layer above and consuming services from the layer below.
- **Standard layered stack (bottom-up)**:
  1. **Physical/fabric layer**: servers, storage, networking hardware, power/cooling in data centers.
  2. **Virtualization layer**: hypervisors and virtual resources — pools physical resources into virtual machines and virtual networks.
  3. **Platform layer**: middleware, runtime environments, programming frameworks, databases, application services (PaaS level).
  4. **Application layer**: end-user applications and services (SaaS level).
- **Benefits of layering**: separation of concerns, modular development, easier maintenance and scaling of individual layers, clear interfaces between providers and consumers.
- **Core architectural components of a cloud system**: 
  - **Cloud coordinator/management software**: provisioning, scheduling, metering, monitoring.
  - **Storage system**: distributed file systems and object storage.
  - **Network**: virtual networks, load balancers, edge routers.
  - **Service catalog / APIs**: the interface through which users request services.
- **Key cloud properties enabled by architecture**: scalability (horizontal and vertical), elasticity, multi-tenancy, fault tolerance, and pay-per-use accounting.

```
[DIAGRAM: Layered cloud architecture
  Application layer (SaaS - user apps, web portals)
  Platform layer (PaaS - middleware, runtimes, databases, queues)
  Virtualization layer (hypervisors, virtual machines, virtual networks)
  Physical/fabric layer (servers, storage, network, data centers)
]
```

### NIST Cloud Computing Reference Architecture

- Published by NIST (SP 500-292) to define a neutral framework for cloud computing — actors, their roles, activities, and their relationships.
- **Five main actors**:
  1. **Cloud Consumer**: the principal stakeholder — uses services from providers (browses service catalog, requests services, monitors SLAs, pays).
  2. **Cloud Provider**: supplies the services — manages the five service management activities (below).
  3. **Cloud Auditor**: independent party that assesses the provider's services against security, privacy, and performance criteria (performs audits).
  4. **Cloud Broker**: intermediary between consumer and provider — manages service negotiation, aggregation, and intermediation (e.g., providing multiple services as a single offering).
  5. **Cloud Carrier**: provides the network connectivity and transport between consumers and providers (telecom carriers).
- **Cloud provider activities**: 
  - **Service deployment** (IaaS, PaaS, SaaS),
  - **Service orchestration** (composition of system components supporting service delivery),
  - **Cloud service management** (provisioning/configuration, portability, interoperability),
  - **Security and privacy**,
  - **Support** (billing, metering, SLAs, help desk).
- **Cloud auditor activities**: security audit, privacy impact audit, performance audit.
- **Broker use case**: consumer → broker → multiple providers (aggregation), or broker adds value-added services (intermediation), or broker resells bundles (arbitrage).

```
[DIAGRAM: NIST reference architecture (SP 500-292)
  Cloud Consumer <--> Cloud Broker <--> Cloud Provider
        ^                 |                 |
        |                 |                 |
  Cloud Auditor <---------+--(audits)-------+
  Cloud Carrier (network connectivity layer between all)
]
```

### Intercloud Federation

- **Definition**: The interlinking of multiple distinct cloud infrastructures (public, private, community) to enable seamless sharing of resources, workloads, and data across clouds.
- **Motivation**: avoid vendor lock-in, achieve capacity bursting (cloud-bursting across providers), improve resilience/availability (multi-cloud redundancy), take advantage of price differences.
- **Federation approaches**: 
  - **Cloud brokerage**: a broker mediates and composes services from multiple clouds.
  - **Cloud bursting**: private cloud overflows peak demand to a public cloud.
  - **Sky computing**: applications transparently span multiple clouds via a common layer/API.
- **Challenges**: heterogeneity of APIs and data formats, identity and trust management across domains, security and compliance boundaries, network latency, billing and metering consolidation, SLA coordination.

### Distributed Coordination with Apache ZooKeeper

- **ZooKeeper**: a distributed, open-source coordination service for distributed applications — provides configuration management, group membership, leader election, locks, and synchronization; used by Hadoop, Kafka, HBase.
- **Core model**: 
  - ZooKeeper nodes (clients, servers) maintain a **hierarchical namespace of zNodes** (like a file system tree).
  - zNodes can store small amounts of data (up to ~1 MB); each zNode has a stat (version, timestamp, ACL).
  - **Types of zNodes**: persistent (live until deleted), ephemeral (auto-deleted when the creating session ends), sequential (name gets a monotonically increasing counter), and combinations (ephemeral-sequential).
  - **Watch mechanism**: clients can set watches on zNodes; a watch fires a one-time notification when the zNode changes — enables event-driven coordination.
- **ZooKeeper service properties**:
  - **Quorum-based replication**: an ensemble of servers (odd number, e.g., 3 or 5); the service works as long as a majority (quorum) is alive.
  - **Sequential consistency**: updates are ordered globally; every client observes a consistent view.
  - **Atomicity**: each update either succeeds fully or fails (ZAB protocol — ZooKeeper Atomic Broadcast).
  - **Timeliness**: guarantees a bounded staleness for reads.
- **Common use cases**: leader election (ephemeral-sequential zNodes), service registry (service nodes register under a path), distributed locks, cluster membership monitoring (ephemeral zNodes detect crash), configuration management (centralized config stored in zNode tree).
- **ZAB (ZooKeeper Atomic Broadcast)**: the replication protocol ensuring total order of updates; elects a leader that coordinates writes; reads may be served by any server.

```
[DIAGRAM: ZooKeeper hierarchical zNode namespace
 /                         (root)
 /app1            /app2     /zookeeper
  /config          /workers  /quota
  /servers           /node1 (ephemeral)
   /worker1          /node2 (ephemeral)
   /worker2
]
```

### MapReduce Programming Model

- **Definition**: A programming model and associated implementation (Google, 2004) for processing and generating large datasets in parallel on clusters of commodity machines; works on the divide-and-conquer principle.
- **Phases**:
  1. **Map**: input (key, value) pairs → user-defined map function → intermediate (key, value) pairs; parallel across input splits.
  2. **Shuffle and Sort (Partition)**: the framework groups all intermediate values by key and sorts them; partitions output per reducer (hash of key).
  3. **Reduce**: user-defined reduce function merges all intermediate values associated with the same key → final output pairs.
- **MapReduce characteristics**: automatic parallelization and distribution, fault tolerance (re-execution of failed tasks), load balancing, data locality (move computation to data), single master–many workers architecture.
- **Word Count Example** (classic exam problem):
  - **Map** function: `map(key=document_name, value=document_text): for each word w in value: emit(w, 1)`
  - **Reduce** function: `reduce(key=word, values=[1,1,1,...]): emit(word, sum(values))`
- **Implementation notes**: master assigns map/reduce tasks to workers; master stores intermediate results locations; results written to distributed file system (HDFS/GFS); combiner can be used to pre-aggregate locally and reduce network shuffle.

```
[DIAGRAM: MapReduce data flow
 Input splits --> Map tasks --> (intermediate k,v pairs)
    --> Shuffle & Sort (group by key) --> Reduce tasks --> Output
   Input1 --> M1 --> (a,1)(b,1)
   Input2 --> M2 --> (a,1)(c,1)      Shuffle: a:[1,1], b:[1], c:[1]
   Input3 --> M3 --> (b,1)(c,1)      R1: a->2, R2: b->1, c->1
]
```

### Hadoop HDFS Architecture

- **HDFS (Hadoop Distributed File System)**: a distributed, fault-tolerant file system designed for very large files (GB to TB), high-throughput streaming access, running on commodity hardware.
- **Architecture components**:
  - **NameNode (master)**: maintains the **metadata** — file namespace, directory tree, and the mapping of file blocks to DataNodes; keeps everything in RAM; single point of failure (mitigated by standby NameNode, NameNode HA).
  - **DataNode (slaves)**: store the actual data blocks (default block size 128 MB), serve read/write requests, periodically report block status (heartbeats and block reports) to NameNode.
  - **Secondary NameNode**: NOT a hot standby — periodically downloads NameNode metadata (fsimage + edit log) and merges them to create a checkpoint; assists in recovery and keeps metadata compact.
- **Block replication**: each block is replicated (default **replication factor = 3**); replicas placed on different racks to survive node/rack failure — two on one rack, one on another rack; NameNode detects failed DataNodes via missed heartbeats and re-replicates blocks to maintain the factor.
- **Write flow**: client → NameNode (allocate blocks and DataNodes) → client writes to first DataNode → pipeline replication to second and third DataNode.
- **Read flow**: client → NameNode (block locations) → client reads directly from nearest DataNode (data locality, rack awareness).
- **Key properties**: write-once-read-many (append-only), no POSIX full support, high throughput over low latency, rack-aware placement, built-in fault tolerance via replication and re-replication.

```
[DIAGRAM: HDFS architecture
        Client ----(metadata ops)----> NameNode (+ Secondary NameNode)
        |                                   | (block locations)
        | (read/write data)                 |
        +----------> DataNode1 <--+--> DataNode2 <--+--> DataNode3
                    (replica 1)   |   (replica 2)   |   (replica 3)
                    Heartbeats & block reports back to NameNode
]
```

### Web Applications on Cloud

- Hosting web apps on cloud eliminates hardware procurement — apps run in VMs/containers behind **load balancers**, scale with demand using **auto-scaling groups**, use managed databases and CDNs for static content.
- **Typical architecture**: DNS → load balancer → web server tier (scaled horizontally) → application tier → database tier (primary/replica) + object storage + cache (Redis/Memcached).
- **Advantages**: elasticity for traffic spikes, global distribution (CDN), pay-per-use, high availability (multi-AZ deployment), managed services reduce ops burden.
- **Considerations**: statelessness of app tier (session state moved to cache/DB) enables horizontal scaling; health checks and graceful failover; cost control via rightsizing.

### High-Performance Computing (HPC) on Cloud

- **HPC**: use of supercomputers/parallel clusters to solve computationally intensive scientific/engineering problems (weather modeling, genomics, CFD simulations, financial risk).
- **Why HPC on cloud**: on-demand access to thousands of cores without capex; burst capacity beyond own cluster; specialized hardware (GPU instances, InfiniBand, high-throughput interconnect) available per hour; reproducible environments via images.
- **Challenges**: network latency and interconnect bandwidth (InfiniBand needed for MPI), data transfer to/from cloud, tight coupling of jobs across nodes, cost at scale, licensing of scientific software.
- **Cloud HPC offerings**: AWS ParallelCluster, Azure CycleCloud, GCP HPC Toolkit — manage clusters with schedulers (Slurm) on cloud VMs with fast interconnects and shared/scratch file systems.

### Exam-Focus Notes (PYQ Driven)

- MapReduce + Word Count map/reduce pseudo-functions (2023 Q3a) — must write both functions clearly with input/emission format.
- ZooKeeper mechanism + hierarchical zNode architecture (2023 Q3b) — mention zNode types, watches, quorum.
- HDFS NameNode/DataNode/Secondary NameNode + block replication (2024 Q3a) — draw architecture, state default block size and replication factor 3.
- Layered cloud architecture + NIST reference architecture (2024 Q3b) — draw the layer stack and name all five NIST actors with roles.
