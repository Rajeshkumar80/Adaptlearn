# BCS601 — Cloud Computing

## Module 5: Cloud Programming Platforms & Microservices

### Google App Engine (GAE)

- **Definition**: GAE is a **PaaS** platform by Google that runs web applications in Google-managed infrastructure — fully managed runtime, automatic scaling, no servers to provision.
- **GAE Architecture**: 
  - Application code runs inside a **sandboxed runtime** (Python, Java, Go, Node.js, PHP, Ruby) on Google servers.
  - **Frontend (load balancer + gateways)** routes requests to app instances; **AppServer** (Python) / Jetty-based servlet container (Java) executes application code.
  - The **App Engine infrastructure** manages: automatic scaling (instances started/stopped with load), health checks, request routing, session management, cron scheduler for periodic tasks.
  - **Services**: Datastore (NoSQL database), Memcache (caching layer), Task Queues, Blobstore/Cloud Storage, Mail, URL Fetch.
- **Key concepts**: Application (one per project), **services/modules** (reusable components within app), **versions** (code revisions; traffic can be split), **instances** (running copies of code; dynamic vs resident/basic).
- **Scaling types**: **Automatic** (scale based on load), **Basic** (idle instances shut down), **Manual** (fixed number of instances).
- **GAE Datastore**: a highly scalable **NoSQL document database** — entities (objects) with properties, **keys** (kind + identifier, optional ancestor path), **indexes** (built-in and custom composite indexes; queries need matching indexes), strong consistency for ancestor queries and eventual consistency for global queries, supports transactions (only within entity groups).
- **Task Queues**: asynchronous background work — **Push queues** (GAE executes tasks at controlled rate, retries with backoff on failure) and **Pull queues** (external workers lease tasks); typical uses: sending email, image processing, batch jobs, decoupling request handling from heavy work; tasks are retried up to a maximum on failure; guarantees at-least-once delivery (tasks must be idempotent).
- **GAE limitations**: sandbox restrictions (no arbitrary socket access historically, no writing to local filesystem), request timeout (60s), datastore query restrictions, no root access.

```
[DIAGRAM: Google App Engine architecture
  User browser --> Load balancer / Frontend --> AppServer (runtime sandbox)
                                          |
             App Engine services: Datastore (NoSQL) | Memcache | Task Queues
                                          |
                             Google-managed infrastructure (auto-scaling instances)
]
```

### Amazon Web Services (AWS)

- **AWS EC2 (Elastic Compute Cloud)**: **IaaS** — resizable virtual servers (instances). Key concepts: **AMIs** (Amazon Machine Images — template for OS+software), **instance types** (CPU/memory sizing families: t2/t3 general, m5 general, c5 compute, r5 memory, g4 GPU), **security groups** (stateful firewall rules), **key pairs** (SSH access), **EBS volumes** (persistent block storage), **placement groups**, **Auto Scaling** (launch more/fewer instances per policy), **Elastic IP**, **Instance Store** (ephemeral storage). Billing per second/hour.
- **AWS S3 (Simple Storage Service)**: **object storage** — store data as objects in buckets; key features: 99.999999999% (11 nines) durability via redundant replication across AZs, versioning, lifecycle policies (move to S3-IA/Glacier for cost), server-side encryption (SSE-S3/SSE-KMS), static website hosting, pre-signed URLs; used for backups, static assets, data lakes.
- **AWS DynamoDB**: **managed NoSQL key-value/document database** — single-digit millisecond latency at any scale; concepts: **tables, items, attributes**, **partition key + optional sort key**, **primary index + secondary indexes (GSI/LSI)**, **eventual or strongly consistent reads**, **on-demand vs provisioned capacity + auto-scaling**; serverless; used for session stores, gaming, IoT, e-commerce carts.
- **AWS Lambda (serverless functions)**: execute code (Node.js, Python, Java, Go, etc.) in response to **triggers** without provisioning servers — you pay only for execution time (millisecond granularity, per invocation) and memory allocated.
- **Lambda execution model**: 
  1. Event **trigger** fires (API Gateway request, S3 object upload, DynamoDB stream, SNS/SQS message, CloudWatch event, Alexa skill, cron-like scheduled rules).
  2. Lambda service creates a **sandbox environment** (container) with the function's runtime; **cold start** (first invocation: download code, initialize runtime — latency cost) vs **warm start** (reused environment).
  3. Function runs with configured memory (128 MB–10 GB) and timeout (max 15 min).
  4. Results sent to destination; logs written to CloudWatch; environment is frozen after completion and reused for the next invocation.
  5. **Limits**: concurrency limits, timeout 15 min, event size 6 MB (sync)/256 KB (async), ephemeral /tmp storage 512 MB–10 GB.
- **Trigger types**: HTTP (API Gateway), object creation (S3), DB stream (DynamoDB), messaging (SQS/SNS), schedule (CloudWatch Events/EventBridge), and integrations (Lex, Alexa, IoT Core).

```
[DIAGRAM: AWS Lambda trigger and execution flow
  Triggers: API Gateway / S3 event / DynamoDB stream / SQS / CloudWatch schedule
      |
      v
  Lambda service --> creates execution environment (sandbox container)
      |                cold start (setup) vs warm start (reuse)
      v
  Function code executes (memory 128MB-10GB, timeout <= 15 min)
      |--> results/error to destination | logs to CloudWatch
]
```

### Microsoft Azure Cloud Services

- **Azure Cloud Services** (classic PaaS): deploy web + worker roles — **Web Role** (IIS-hosted web app) and **Worker Role** (background processing); Azure handles patching/load balancing (often replaced today by App Service, Functions, Containers).
- **Azure App Service**: managed PaaS for web apps/APIs (HTTP/S, 24/7, auto-scaling).
- **Azure Functions**: serverless FaaS (equivalent of Lambda).
- **Azure Blob Storage**: object storage (hot/cool/archive tiers) — equivalent of S3.
- **Azure SQL Database**: managed relational DB; **Cosmos DB**: global multi-model NoSQL — equivalent of DynamoDB.
- **Azure Virtual Machines**: IaaS equivalents of EC2 with **availability sets / availability zones** for SLA.
- **Azure Key Vault, Azure AD (Entra ID)**: security/identity services equivalent to AWS KMS/IAM.

### Microservices Architecture vs Monolithic Architecture

- **Monolithic architecture**: a single application deployed as one unit — all features (UI, business logic, data access) in one codebase/process sharing one database.
  - **Pros**: simple development/deployment, easy testing, minimal network overhead, straightforward transactions.
  - **Cons**: large codebase hard to understand/modify; scaling requires scaling the whole app; one bug/update affects everything; technology lock-in (one language/stack); slow release cycles (CI/CD coupled); reliability — failure of one module takes down the app.
- **Microservices architecture**: application composed of **small, independently deployable services**, each owning its own data and communicating over the network via lightweight APIs (REST/gRPC/messaging).
  - **Pros**: independent scaling (scale only hot services), independent deployment (small blast radius, faster releases), technology heterogeneity (each service can use its best-fit stack), fault isolation, organizational alignment (teams own services).
  - **Cons**: distributed system complexity (network latency, partial failures, eventual consistency), data consistency harder (saga pattern instead of ACID transactions), service discovery/observability/tracing overhead, testing across services is harder, deployment/DevOps maturity required, inter-service security.
- **Comparison table**:

| Feature | Monolithic | Microservices |
| :--- | :--- | :--- |
| Deployment | One unit | Many independent units |
| Scaling | Whole application | Per-service |
| Codebase | Large, coupled | Small, modular per service |
| Data | Single shared database | Database per service |
| Failure impact | Entire app | Isolated to one service |
| Communication | In-process calls | Network calls (REST/gRPC) |
| Development speed | Slows with size | Fast, parallel teams |
| Testing | Simpler | Complex (contracts) |
| Tech stack | Single | Heterogeneous |

### Containers and Docker

- **Container**: a lightweight, executable package of an application with its dependencies (libraries, config, binaries) that runs as an isolated process on the host OS **sharing the host kernel**; isolation via **namespaces** (process, network, mount, PID, IPC, UTS) and resource limits via **cgroups**.
- **Docker**: the leading container engine — builds, ships, and runs containers.
- **Key components**: Docker Engine (daemon + CLI), images, containers, Docker Hub (public registry), Dockerfile, Docker Compose (multi-container apps), volumes/bind mounts (persistent data), bridge networks.
- **Dockerfile**: a text file with instructions to build an image — `FROM` (base image), `RUN` (execute commands), `COPY` / `ADD` (add files), `WORKDIR`, `ENV`, `EXPOSE` (declare port), `CMD` / `ENTRYPOINT` (startup command). Each instruction creates a **layer** → image is a stack of immutable layers; caching makes rebuilds fast.
- **Container registry**: a repository storing and distributing images (Docker Hub, AWS ECR, Azure ACR, Google Artifact Registry); images pulled by engines; tags identify versions; **immutability** — images never change, new builds get new tags/digests.
- **Docker vs VM comparison**:

| Feature | Docker Container | Traditional VM |
| :--- | :--- | :--- |
| Startup time | Milliseconds–seconds | Seconds–minutes (OS boot) |
| Resource overhead | Negligible (shared kernel) | High (full OS per guest, GBs RAM) |
| Isolation | Process-level (namespaces/cgroups) | Strong full OS isolation (hypervisor) |
| Image size | MBs | GBs |
| Kernel | Shared with host | Own kernel per guest |
| Density per host | Hundreds–thousands | Tens |

### Container Orchestration (Kubernetes)

- **Definition**: Kubernetes (K8s) is an open-source platform for **automated deployment, scaling, and management of containerized applications** — the de facto container orchestration standard (Google, CNCF).
- **Kubernetes cluster architecture**:
  - **Master/Control Plane** (management, decision-making):
    - **API Server (kube-apiserver)**: the frontend — all control-plane communication (kubectl, controllers, kubelets) goes through it; validates and processes REST requests.
    - **etcd**: distributed key-value store holding the **entire cluster state** (configs, desired state, secrets); consistent, highly available.
    - **Scheduler (kube-scheduler)**: assigns newly created pods to worker nodes using resource requirements, affinity/anti-affinity, taints/tolerations.
    - **Controller Manager (kube-controller-manager)**: runs control loops — Node controller (node health), ReplicaSet controller (desired pod count), Deployment controller, Endpoints controller; reconciles actual state → desired state.
    - (Optional) **Cloud Controller Manager**: integrates with cloud provider APIs.
  - **Worker Nodes** (where workloads run):
    - **Kubelet**: the node agent that registers the node, receives pod specs from the API server, starts/manages containers on the node, reports status (heartbeats).
    - **Kube-proxy**: maintains **network rules** — implements service load balancing (iptables/IPVS) so clients reach pods through Services; handles cluster-internal traffic forwarding.
    - **Container runtime**: Docker, containerd, CRI-O (runs containers per pod spec).
    - **Pods**: the smallest deployable unit — one or more containers sharing network namespace and storage; containers in a pod always co-located on the same node; each pod has one IP.
- **Kubernetes objects**: 
  - **Pod** (smallest unit), **ReplicaSet** (maintains N identical pods), **Deployment** (declarative rollout/rollback of ReplicaSets+Pod templates — desired state), **Service** (stable virtual IP + DNS + load balancing over a set of pods selected by labels; types: ClusterIP, NodePort, LoadBalancer), **Ingress** (HTTP(S) routing L7 — host/path-based rules to Services, TLS termination), **ConfigMap/Secret** (config injection), **Namespace** (logical partitioning), **DaemonSet**, **StatefulSet**, **Job/CronJob** (batch).
- **Key operations**: `kubectl apply -f manifest.yaml` (declarative), rolling updates with zero downtime, self-healing (controllers restart failed pods, reschedule on node failure), horizontal pod autoscaling (HPA), label/selector-based organization.

```
[DIAGRAM: Kubernetes cluster architecture
                       CONTROL PLANE (Master)
        +-----------+        +--------------+        +--------------+
        | API Server| <----> |    etcd      |        |  Scheduler   |
        | (kube-    |        | (cluster     |        | (assign pods |
        |  apiserver)|       |  state store)|        |  to nodes)   |
        +-----------+        +--------------+        +--------------+
              ^                    |
              | (Controller Manager reconciles state)
              +------------------- + ----------------+
                                    |
        +----------------------------+--------------------------+
        |                          |                          |
  Worker Node 1               Worker Node 2              Worker Node 3
  +--------------------+      +--------------------+      +--------------------+
  | Kubelet            |      | Kubelet            |      | Kubelet            |
  | Kube-proxy         |      | Kube-proxy         |      | Kube-proxy         |
  | Runtime (containerd)|     | Runtime            |      | Runtime            |
  | Pods: [c1 c2]      |      | Pods: [c3]         |      | Pods: [c4 c5]      |
  +--------------------+      +--------------------+      +--------------------+
]
```

### Cloud Native

- **Definition**: Cloud-native is an approach to building and running applications that fully exploit the cloud model — **microservices, containers, orchestration, CI/CD, DevOps, serverless, infrastructure as code**; CNCF's pillars.
- **Enablers**: containers + Kubernetes (orchestration), service meshes (Istio), observability (Prometheus, Grafana, Jaeger), declarative APIs, GitOps (ArgoCD), serverless functions, 12-factor app principles.
- **Benefits**: speed of delivery, resilience, elasticity, portability across clouds.

### Exam-Focus Notes (PYQ Driven)

- Docker vs traditional VMs — startup time, resource overhead, isolation (2023 Q9a) — replicate the comparison table.
- GAE architecture, Datastore, Task Queues (2023 Q9b) — sandboxed runtime, frontend routing, push/pull queues, NoSQL entities/keys/indexes.
- Kubernetes master/worker architecture — API server, etcd, scheduler, controller; kubelet, kube-proxy, pods (2024 Q9a) — draw full cluster diagram.
- AWS Lambda execution model and triggers (2024 Q9b) — cold/warm start, invocation flow, trigger list, limits.