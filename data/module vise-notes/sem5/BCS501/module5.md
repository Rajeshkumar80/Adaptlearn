# BCS501 — Software Engineering & Project Management

## Module 5: Project Scheduling, Risk Management & Quality

## Activity Planning & Scheduling

### Work Breakdown Structure (WBS)
The WBS decomposes the project into manageable deliverables and activities in a tree form. Top level = project; next levels = phases, then work packages. Each work package is assigned to a team member and estimated.

### Network Planning Models
Activities are arranged in a network showing dependencies (precedence).

- **Activity-on-Arrow (AOA)** and **Activity-on-Node (AON)** representations.
- For each activity estimate: optimistic (a), most likely (m), pessimistic (b) durations.
- **Expected duration**: te = (a + 4m + b) / 6  (PERT formula).
- **Variance**: ((b − a)/6)^2.

### PERT/CPM
- **Forward pass** computes the Earliest Start (ES) and Earliest Finish (EF) of each activity: EF = ES + duration.
- **Backward pass** computes Latest Start (LS) and Latest Finish (LF).
- **Critical path**: the longest path through the network — activities on it have zero float; any delay in a critical activity delays the whole project.
- **Activity float/slack**: the time an activity can be delayed without delaying the project: Float = LS − ES = LF − EF. Critical activities have float = 0.

```
[DIAGRAM: PERT network with critical path
 A(2d) --> C(3d) --> E(4d)  (A-C-E is the critical path, 9 days total)
 B(4d) --> D(5d) --> E(4d)  (B-D path = 9 days too; E depends on both)
 Arrows show dependencies; the longest path in red is critical.
]
```

### Worked Example
Activities A(2d), B(4d), C(3d) after A, D(5d) after B, E(4d) after C and D.
- Earliest finish: E start = max(2+3, 4+5) = 9 → finish 13 days.
- Critical path = B → D → E = 13 days. A → C has float = 4 days.

## Risk Management
Risk = probability of an adverse event × its impact. Process:
1. **Risk Identification**: list potential risks (project, technical, business) — e.g., staff leaving, unclear requirements, new technology.
2. **Risk Assessment**: estimate probability (low/medium/high) and impact; classify into a risk matrix (likelihood vs. impact).
3. **Risk Planning**: for each important risk decide — avoid, transfer, mitigate (reduce probability/impact), or accept with contingency.
4. **Risk Monitoring**: track risk indicators throughout the project.

### RAM (Risk Assessment Matrix)
A table listing each risk with probability, impact, and a risk factor (probability × impact) used to prioritize.

### RMMM Plan (Risk Mitigation, Monitoring and Management)
A written plan per key risk containing:
- **Mitigation**: actions to reduce the probability/impact (e.g., training, backup staffing).
- **Monitoring**: indicators that trigger concern (e.g., a key developer leaving signals risk).
- **Management**: contingency actions if the risk occurs.

## Software Quality
- **SQA (Software Quality Assurance)**: a set of planned activities to ensure quality — standards, reviews, audits, and testing. Quality = conformance to requirements + fitness for use.
- **Software Quality Attributes**: correctness, reliability, usability, efficiency, maintainability, portability.
- **Reviews**: technical reviews/walkthroughs find defects early (defect prevention is cheaper than correction).

### ISO 9000 Standards
A family of quality management system standards (ISO 9001 is the certification for software organizations). Requires documented processes for design, development, testing, and maintenance; the organization must show evidence that processes are followed.

### CMMI (Capability Maturity Model Integration)
A process improvement model with 5 maturity levels:
1. **Initial** — chaotic, ad-hoc processes.
2. **Managed** — processes planned and tracked at project level.
3. **Defined** — processes documented and standardized across the organization.
4. **Quantitatively Managed** — processes measured and controlled with statistics.
5. **Optimizing** — continuous process improvement from quantitative feedback.

```
[DIAGRAM: CMMI staircase
 Level 1 Initial --> Level 2 Managed --> Level 3 Defined
 --> Level 4 Quantitatively Managed --> Level 5 Optimizing
]
```

## Software Maintenance and Re-engineering
- **Maintenance types**: corrective (fix defects), adaptive (respond to environment change), perfective (add features/improve), preventive (avoid future problems).
- Maintenance consumes the largest share of software lifecycle cost (~60-80%).
- **Re-engineering**: reverse engineering (understand existing code → models) followed by forward engineering (rebuild improved system); often includes restructuring and re-documentation.

## Prescribed Text
Bob Hughes, Mike Cotterell, Rajib Mall, *Software Project Management*, 5th/6th Edition — Chapters 6, 7 and 8; plus SQA/CMMI from Pressman's SE.
