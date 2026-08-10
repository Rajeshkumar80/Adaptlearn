# BCS601 — Cloud Computing

## Module 4: Cloud Security & Data Protection

### Cloud Security Risks

- **Definition**: Cloud security comprises policies, controls, procedures, and technologies that protect cloud data, applications, and infrastructure from threats, and satisfy compliance requirements — a shared responsibility between provider and consumer.
- **Top cloud security risks**:
  - **Data breaches**: unauthorized access/exfiltration of sensitive data (misconfigured storage, leaked credentials, insider threat).
  - **Misconfiguration**: open storage buckets (e.g., S3 public), overly permissive security groups, exposed admin consoles — the leading cause of cloud incidents.
  - **Insecure APIs and interfaces**: weak authentication/authorization on management APIs enables account takeover.
  - **Account/credential theft**: weak passwords, no MFA, leaked access keys.
  - **Insider threats**: malicious or negligent employees/contractors of consumer or provider.
  - **Shared technology vulnerabilities**: multi-tenancy — a compromise in one tenant's VM/hypervisor can threaten co-tenants (hypervisor attacks, side-channel attacks).
  - **Denial of service (DDoS)**: resource exhaustion attacks on services and billing.
  - **Shadow IT / loss of governance**: consumers bypassing IT control; no visibility into provider operations.
  - **Legal and regulatory risk**: data location (data residency), cross-border data transfer restrictions.
- **Shared Responsibility Model**: provider is responsible for **security OF the cloud** (physical infrastructure, hypervisor, network, hardware); consumer is responsible for **security IN the cloud** (data, applications, OS, IAM policies, network configuration). In IaaS, consumer owns more of the stack; in SaaS, provider owns most.

### Infrastructure Security

- **Physical/DC security**: biometric access, guards, CCTV, multi-layer perimeter, redundant power/cooling, video surveillance — provider responsibility.
- **Logical infrastructure security**:
  - **Hypervisor hardening**: minimal attack surface, patching, disable unused services, secure VM isolation; a hypervisor compromise = compromise of all tenants.
  - **Secure VM lifecycle**: trusted/blessed VM images, image scanning, patching, secure deletion of VM disks at deprovisioning.
  - **Storage security**: volume encryption, snapshots encrypted, secure disposal (crypto-shredding).

### Network-Level Security

- **Perimeter defense**: cloud firewalls / security groups (stateful filtering at instance/virtual-network level), network ACLs, edge DDoS protection.
- **Virtual networks**: VPC/VNet segmentation, private subnets, bastion hosts, VPN (site-to-site IPsec) and private connectivity (Direct Connect/ExpressRoute) for management traffic.
- **Web application protection**: WAF (Web Application Firewall) against SQLi/XSS, DDoS mitigation services, TLS termination.
- **Segmentation and micro-segmentation**: isolate tiers (web/application/database) with least-privilege rules; east-west traffic inspection.
- **Traffic monitoring**: flow logs, IDS/IPS, anomaly detection, network introspection.

### Host-Level Security

- **Hardening the guest OS**: minimal installation, disable unnecessary services/ports, regular patching, strong local accounts, host-based firewalls (iptables/Windows Defender Firewall).
- **Endpoint protection**: antivirus/EDR agents, host intrusion detection (HIDS), file integrity monitoring, rootkit detection.
- **Access control at host**: SSH keys instead of passwords, key management, sudo least privilege.
- **Automation**: OS hardening baselines (CIS benchmarks), golden images, configuration management (Ansible/Puppet) to enforce consistent secure state.
- **Logging and monitoring**: audit logs to central SIEM, alerting on suspicious host activity.

### Identity and Access Management (IAM)

- **Definition**: The framework of policies, processes, and technologies for managing digital identities and controlling who can access which cloud resources, under what conditions.
- **Core components**:
  - **Identity**: users, groups, roles, service accounts, federated identities (SSO via SAML/OAuth/OIDC).
  - **Authentication**: proving identity — password, MFA, certificate, SSO/federation.
  - **Authorization**: what an identity may do — policies, permissions, roles.
  - **Auditing**: tracking who did what, when (CloudTrail/Azure Activity Log).
- **AWS IAM key concepts**: 
  - **User**: a person/application identity with credentials.
  - **Group**: collection of users sharing permissions.
  - **Role**: an identity with permissions that can be assumed (by users, services, or cross-account) — temporary credentials via STS (Security Token Service).
  - **Policy**: JSON document granting/denying actions on resources — least privilege principle.
  - **Root account**: full control — must be protected with MFA and used minimally.
- **Azure AD (Entra ID) equivalents**: users, groups, Azure RBAC (role assignments: security principal + role definition + scope), Managed Identities for services, Conditional Access policies.

```
[DIAGRAM: AWS IAM model
    Principal (user/group/role)
         |
         | (authenticate: password + MFA)
         v
    IAM service --> Policy evaluation (JSON policy documents)
         |               | allows/denies action on resource
         v               v
   Cloud resources (EC2, S3, DynamoDB, ...)  <--- Audit logs (CloudTrail)
]
```

### Multi-Factor Authentication (MFA)

- **Definition**: An authentication method requiring the user to present **two or more independent factors** before access is granted — something you **know** (password/PIN), something you **have** (OTP app, hardware token, SMS code, smart card), something you **are** (fingerprint, facial recognition).
- **Why MFA**: passwords alone are easily phished/stolen; MFA dramatically reduces account takeover risk even if credentials leak.
- **Common implementations**: TOTP (Time-based One-Time Password, Google Authenticator), push notifications, hardware keys (FIDO2/YubiKey), SMS/email codes (weakest OTP channel), biometric.
- **Best practice**: MFA on all privileged accounts (root/admin), service break-glass accounts, and administrative consoles.

### Data at Rest Encryption

- **Definition**: Protection of data stored on persistent media (disks, databases, backups, objects) using encryption so that it is unreadable without the decryption key.
- **Algorithms**: symmetric — AES-256 (standard), AES-128; asymmetric — RSA/ECC (used for key exchange, envelopes).
- **Key management**: keys must be protected — cloud KMS services (AWS KMS, Azure Key Vault, GCP KMS) generate, store, rotate, and audit keys; **envelope encryption** (data encrypted with DEK — Data Encryption Key, DEK encrypted with KEK — Key Encryption Key); **HSM** for hardware-rooted keys; customer-managed vs provider-managed vs customer-supplied keys.
- **Levels of encryption**: storage-level (full disk encryption of volumes — e.g., EBS encryption), file/database-level (TDE), object-level (S3 SSE-S3/SSE-KMS), application-level (client-side encryption).
- **Crypto-shredding**: discarding data by deleting the keys — data becomes permanently unreadable without destructive erasure.

### Data in Transit Encryption

- **Definition**: Encryption protecting data while moving over networks between client and cloud, and between cloud services.
- **Protocols**: TLS 1.2/1.3 (HTTPS for web/API), IPsec (site-to-site VPNs), SSH (administration), SFTP/FTPS, DTLS, WireGuard.
- **Defense against**: eavesdropping, man-in-the-middle attacks, packet sniffing, session hijacking.
- **Best practices**: enforce TLS on all API endpoints (HSTS), internal service-to-service encryption (mTLS, service mesh), encrypt management channels (SSH, RDP), avoid cleartext protocols (HTTP, Telnet, FTP), certificate management (short-lived certs, automated rotation).
- **End-to-end vs in-transit vs at-rest**: in-transit protects the path; at-rest protects stored data; end-to-end (E2EE) ensures only endpoints can decrypt — even the provider cannot.

```
[DIAGRAM: Data protection zones in cloud
  User/Client ---- TLS (in transit) ----> Cloud edge / API
                                           |  |
                    in-transit internal (mTLS) |  at-rest (AES-256)
                                           |  v
                                      Storage/Database (encrypted disks, KMS keys)
]
```

### Storage Diversity and Vendor Lock-in Avoidance

- **Storage diversity**: using multiple storage technologies/categories — object storage (S3), block storage (EBS), file storage (EFS), archival (Glacier), and databases (SQL/NoSQL) — matched to data characteristics (hot/cold, structured/unstructured, durability/retention needs).
- **Vendor lock-in**: dependency on a single provider's proprietary APIs, formats, and services makes migration to another provider costly and difficult.
- **Lock-in risks**: proprietary storage formats, provider-specific APIs, data transfer egress fees, managed services with no open equivalent, deep integration (identity, monitoring, billing).
- **Strategies to avoid lock-in**:
  - Use **open standards and portable formats** (ODF, CSV, Parquet, SQL, JSON) and open-source compatible APIs (S3-compatible object storage, OpenStack APIs).
  - **Multi-cloud / hybrid strategy**: design for portability with abstraction layers, or replicate data across clouds.
  - **Data portability**: maintain ability to export all data and metadata; test export/import regularly; negotiate data egress terms.
  - **Containerization** (Docker/Kubernetes) decouples apps from provider infrastructure.
  - **Provider-neutral tools**: Terraform (infrastructure as code), Kubernetes, Prometheus, Terraform-style IaC keeps deployments portable.
  - Independent backup copies stored in open formats outside the provider.

### Cloud Auditing

- **Definition**: Independent examination of cloud services, controls, and operations to verify security, compliance, and performance against standards — performed by **cloud auditors** (as in NIST reference architecture) or third-party firms.
- **Audit scope**: security controls (technical + procedural), data handling and privacy, SLA performance, access controls and logs, change management, DR readiness.
- **Audit enablers**: provider logs (CloudTrail, Azure Activity Logs), audit logs APIs, tamper-proof log retention, certifications and attestations (SOC reports), evidence collection automation.
- **Continuous auditing**: automated collection of logs/metrics into SIEM; continuous compliance monitoring tools; drift detection (e.g., AWS Config).

### Compliance Frameworks

- **SOC 2** (Service Organization Control): AICPA framework auditing a service provider's controls on **security, availability, processing integrity, confidentiality, and privacy** (Trust Services Criteria); SOC 2 Type I (design of controls) and Type II (operating effectiveness over time); widely demanded by enterprises using SaaS/IaaS.
- **ISO 27017**: information security controls for **cloud services** — a code of practice extending ISO 27001/27002 with cloud-specific guidance (shared responsibility, VM isolation, data remanence); certification shows robust cloud-specific security management.
- **ISO 27001**: the parent standard — ISMS (Information Security Management System) requirements; ISO 27017/27018 (privacy in public cloud) build on it.
- **HIPAA** (Health Insurance Portability and Accountability Act): US healthcare regulation for protecting **protected health information (PHI)**; cloud providers handling PHI need BAA (Business Associate Agreement) and encryption, audit controls, access controls.
- **GDPR** (General Data Protection Regulation, EU, 2018): strongest privacy regulation — applies to personal data of EU residents anywhere in the world; principles: lawfulness, purpose limitation, data minimization, accuracy, storage limitation, integrity/confidentiality, accountability.
- **GDPR key rights**: right to access, rectification, erasure ("right to be forgotten"), data portability, restriction, objection.
- **GDPR cloud implications**: data residency/processing agreements (DPAs), data protection impact assessments (DPIA), breach notification within 72 hours, cross-border transfer safeguards (SCCs, adequacy decisions), provider as "processor" bound by contract with "controller".

### Compliance Comparison

| Framework | Focus | Who it applies to | Key requirement |
| :--- | :--- | :--- | :--- |
| SOC 2 | Service controls (security, availability, etc.) | Service providers | Independent audit report Type I/II |
| ISO 27017 | Cloud-specific security controls | Cloud providers/customers | Cloud control extension of ISO 27001 |
| ISO 27001 | ISMS | Any organization | Certified management system |
| HIPAA | Health data (PHI) | Healthcare + BAs/cloud providers | BAA, encryption, audit controls |
| GDPR | Personal data privacy | Any org processing EU data | Consent, rights, 72-hr breach notice |

### Exam-Focus Notes (PYQ Driven)

- IAM framework in AWS/Azure (2023 Q7a) — explain user/group/role/policy, least privilege, MFA; draw AWS IAM flow.
- Data at rest vs data in transit encryption (2023 Q7b) — definitions, algorithms (AES-256, TLS), key management (KMS/envelope), diagram.
- Cloud data security risks, storage diversity, vendor lock-in prevention (2024 Q7a) — enumerate risks and give concrete anti-lock-in strategies.
- SOC 2, ISO 27017, GDPR compliance in cloud auditing (2024 Q7b) — one paragraph each with scope, applicability, and key mechanism.
