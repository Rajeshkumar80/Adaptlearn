# BCS601 — Cloud Computing

## Module 1: Cloud Computing Fundamentals & Delivery Models

### Introduction to Cloud Computing

- **Definition (NIST)**: Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction.
- **Buyya's definition**: A parallel and distributed system consisting of a collection of interconnected and virtualized computers that are dynamically provisioned and presented as one or more unified computing resources based on service-level agreements (SLAs) established through negotiation between the service provider and consumers.
- **Key idea**: Computing is treated as a **utility** — like electricity or water — where users pay only for what they consume.
- **Essential characteristics (NIST, 5)**:
  1. **On-demand self-service**: Consumer can provision computing capabilities (server time, storage) unilaterally without human interaction with the provider.
  2. **Broad network access**: Capabilities are available over the network and accessed through standard mechanisms (thin/thick clients, mobile, laptops).
  3. **Resource pooling**: Computing resources are pooled to serve multiple consumers using a multi-tenant model, with different physical and virtual resources dynamically assigned and reassigned according to demand; location independence (user generally has no control/knowledge of exact resource location).
  4. **Rapid elasticity**: Capabilities can be elastically provisioned and released — scale out/in rapidly; to the consumer the available capacity appears unlimited.
  5. **Measured service**: Resource usage is automatically controlled, monitored, and reported (metering) — providing transparency for both provider and consumer (pay-per-use).

### Historical Evolution of Cloud Computing

- **Timeline**: Mainframes (1960s) → time-sharing → client-server computing (1980s) → grid computing (1990s) → utility computing (1999, Salesforce) → Web 2.0 (2000s) → AWS launch (2006) → Google App Engine (2008) → Azure (2010) → modern cloud-native era.
- **John McCarthy (1961)** predicted "computing may someday be organized as a public utility."
- **Grid computing**: aggregated distributed, heterogeneous resources across administrative domains for scientific/HPC workloads; lacks on-demand, self-service, pay-per-use model → led to cloud.
- **Utility computing**: metered, pay-per-use delivery of compute — the economic foundation of cloud.
- **Salesforce (1999)** pioneered SaaS; **Amazon (2006)** launched EC2 and S3 — the beginning of modern IaaS; **Google App Engine (2008)** popularized PaaS.

### Enabling Technologies

- **Virtualization**: Abstraction of physical resources (CPU, memory, storage, network) into logical/virtual resources; enables resource pooling, isolation, server consolidation, live migration; the core technology behind multi-tenancy and elasticity.
- **Service-Oriented Architecture (SOA)**: Design paradigm where applications are built from loosely coupled, discoverable, reusable services communicating via standard protocols (SOAP/REST); cloud APIs follow SOA principles.
- **Web 2.0**: Second-generation web characterized by user-generated content, rich interactivity (AJAX), mashups, and collaboration (blogs, wikis, social networks); provided the user-facing interaction model for cloud services.
- **Other enablers**: High-speed broadband networks, multi-core processors, cheap commodity hardware, autonomic computing, distributed storage and computing technologies (MapReduce), data center automation.

### Cloud Delivery Models

- **IaaS (Infrastructure as a Service)**: Provider offers virtualized infrastructure — compute (VMs), storage, networking. Consumer deploys and manages OS, middleware, and applications. **Example**: AWS EC2, Azure VMs, GCP Compute Engine. **Use case**: full control, lift-and-shift.
- **PaaS (Platform as a Service)**: Provider offers a development/deployment platform — runtime, middleware, databases, development tools. Consumer manages only the application and data. **Example**: Google App Engine, AWS Elastic Beanstalk, Heroku. **Use case**: developers avoiding infrastructure management.
- **SaaS (Software as a Service)**: Provider offers complete applications over the internet on subscription; consumer has no management responsibility beyond configuration. **Example**: Gmail, Google Docs, Salesforce CRM, Microsoft 365. **Use case**: end users.
- **XaaS (Everything as a Service)**: Generic term covering all cloud service categories (FaaS — Functions as a Service, DBaaS — Database as a Service, SECaaS — Security as a Service, MaaS, CaaS — Containers as a Service, STaaS — Storage as a Service).

### IaaS vs PaaS vs SaaS Comparison

| Feature | IaaS | PaaS | SaaS |
| :--- | :--- | :--- | :--- |
| Managed by user | OS, middleware, runtime, app, data | Application and data only | Nothing (only config) |
| Managed by provider | Hardware, network, virtualization | Hardware + platform (runtime, DB, middleware) | Hardware + platform + application |
| User profile | System/network administrators | Application developers | End users / business |
| Examples | AWS EC2, Azure VMs | GAE, Heroku, Elastic Beanstalk | Gmail, Salesforce, Office 365 |
| Flexibility | Maximum | Medium | Minimum |
| Abstraction level | Low | Medium | High |
| Control | High (OS level) | Moderate | Low |
| Pay model | Pay per VM/hour | Pay per platform usage | Subscription per user |

### Cloud Deployment Models

- **Public Cloud**: Infrastructure owned and operated by a third-party provider, shared by multiple organizations (multi-tenant), accessed over the internet. **Examples**: AWS, Azure, GCP. **Pros**: low cost (CAPEX → OPEX), elasticity, no maintenance. **Cons**: less control, security/privacy concerns, compliance issues.
- **Private Cloud**: Infrastructure operated solely for a single organization — on-premise or hosted; may be managed internally or by a third party. **Pros**: maximum control, security, compliance, customization. **Cons**: high cost, limited elasticity (own capacity).
- **Community Cloud**: Infrastructure shared by several organizations with common concerns (compliance, security, policy, mission) — e.g., government agencies, healthcare consortium. **Pros**: shared cost, shared governance. **Cons**: cost sharing is complex; fewer providers.
- **Hybrid Cloud**: Composition of two or more distinct clouds (private + public) bound by standardized technology enabling data and application portability (cloud bursting). **Example**: run steady-state workloads on private cloud, burst to public during peaks. **Pros**: balance of cost, control, elasticity. **Cons**: complex orchestration, network dependency, integration overhead.

### Deployment Model Comparison

| Feature | Public | Private | Community | Hybrid |
| :--- | :--- | :--- | :--- | :--- |
| Ownership | Third-party provider | Single organization | Group of organizations | Combination |
| Multi-tenancy | Yes (many tenants) | Single tenant (or controlled) | Shared by community | Mixed |
| Cost | Lowest | Highest | Shared among members | Medium-high |
| Control & security | Low | Highest | High (shared policy) | Medium |
| Scalability | Very high | Limited by own capacity | Limited by community | High (bursting) |
| Typical user | General public/SMBs | Large enterprises, banks, govt | Healthcare, govt agencies | Enterprises with variable load |

### Cloud Provider Ecosystem

- **Amazon Web Services (AWS)**: Largest IaaS provider; services include EC2 (compute), S3 (object storage), RDS (relational DB), DynamoDB (NoSQL), Lambda (serverless), VPC (networking). Launched 2006.
- **Microsoft Azure**: Strong hybrid and enterprise integration (Active Directory, Office 365); services include Azure VMs, Blob Storage, Azure Functions, AKS (Kubernetes), SQL Database.
- **Google Cloud Platform (GCP)**: Strong in data analytics, AI/ML, and Kubernetes (created Kubernetes); services include Compute Engine, Cloud Storage, BigQuery, Dataproc (Hadoop/Spark).
- **Comparison dimension**: pricing, regions/availability zones, service breadth, compliance certifications, SLAs, open-source alignment.

### Service Level Agreements (SLAs)

- **Definition**: A formal, negotiated contract between cloud provider and consumer defining the level of service expected — metrics, responsibilities, guarantees, and remedies.
- **Key components**: Service availability (e.g., 99.9% uptime), performance metrics (latency, throughput), response/repair times, support tiers, data location/retention, security and privacy commitments, disaster recovery (RTO/RPO), termination terms.
- **SLA metrics**: Availability = (Total time − Downtime) / Total time; commonly expressed as "nines" — 99.9% (8.76 hours downtime/year), 99.99% (52.6 min/year), 99.999% (5.26 min/year).
- **SLA violation and penalties**: If provider fails to meet guaranteed uptime, consumer is entitled to **service credits** (e.g., 10–30% of monthly bill), extended subscription, or penalty compensation; credits are typically applied to future bills, not cash refunds.
- **Importance**: Trust, accountability, predictability of cost and performance; enables legal recourse for outages.

### Pricing Models

- **Pay-as-you-go**: Per-hour/per-second VM billing; pay for actual consumption.
- **Subscription**: Fixed monthly/annual fee (common in SaaS).
- **Reserved/committed instances**: Upfront commitment for 1–3 years → 40–70% discount.
- **Spot/preemptible instances**: Bid for spare capacity → up to 90% discount; can be reclaimed anytime (good for batch/fault-tolerant workloads).
- **Tiered volume pricing**: Price per unit decreases with volume (storage, data transfer).
- **Free tier**: limited free usage to attract customers.

### Energy & Ecological Impacts of Cloud

- **Advantages**: Server consolidation via virtualization reduces hardware count; shared data centers use power more efficiently; economies of scale → better PUE (Power Usage Effectiveness = total facility power / IT equipment power; ideal = 1.0); green IT through renewable energy in mega data centers.
- **Disadvantages**: Data centers consume massive electricity and water (cooling); e-waste from rapid hardware refresh cycles; carbon footprint of worldwide data centers is significant; location of data centers affects grid energy mix.

```
[DIAGRAM: Cloud computing layered view of delivery and deployment
                         CONSUMERS (Users / Developers / Enterprises)
                                        |
                  [ Deployment Models: Public | Private | Community | Hybrid ]
                                        |
         Delivery Models:  SaaS  -->  PaaS  -->  IaaS   (increasing user control)
                                        |
          Foundation layers: Virtualized resources (Virtualization) -->
                             Hardware (servers, storage, network) in data centers
]
```

### Exam-Focus Notes (PYQ Driven)

- NIST definition + 5 essential characteristics (2023 Q1a) — memorize the five: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, Measured service.
- IaaS vs PaaS vs SaaS comparison (2023 Q1b) — present the table above with a short example for each.
- Public vs Private vs Hybrid vs Community comparison (2024 Q1a) — include ownership, cost, security, control, example.
- SLA definition, metrics (nines), and violation penalty/credit mechanism (2024 Q1b) — include availability formula.
