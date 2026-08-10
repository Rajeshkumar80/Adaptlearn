# BCS501 — Software Engineering & Project Management

## Module 1: Software & Software Engineering Processes

## Nature of Software
- Software is a set of programs, data, and documentation. It is logical (not physical like hardware), engineered, and does not "wear out" — it deteriorates due to changing requirements (maintenance).
- Two kinds of software products: generic products (built for many customers, e.g. MS Word) and customized products (built for a specific customer, e.g. a bank's ledger system).
- Characteristics: software is intangible, has high complexity, is easily replicated, and ages through change, not use.

## Unique Characteristics of WebApps
- Network intensive (accessed over a network), content driven, evolves continuously, concurrent access by many users, requires security, aesthetic appeal matters, and needs rapid delivery with continuous integration.

## Software Engineering Definition
Software engineering is an engineering discipline concerned with all aspects of software production — from initial specification through to maintenance — using systematic, disciplined, quantifiable approaches, i.e., applying engineering to software.

## Software Process Framework Activities
Every software process is built around five framework activities:
1. **Communication** — understand the problem and stakeholder needs.
2. **Planning** — schedule, risks, resources.
3. **Modeling** — create analysis and design models (what + how).
4. **Construction** — code generation and testing.
5. **Deployment** — deliver the software and gather feedback.

Umbrella activities run across all phases: project tracking, risk management, quality assurance, configuration management, measurement, and review.

## Software Myths
- **Management myths**: "We already have a book of standards" — standards alone don't guarantee quality.
- **Customer myths**: "General objectives are enough" — vague requirements cause failure.
- **Practitioner myths**: "Once the program is written, the job is done" — coding is only a fraction; testing, maintenance matter more.

## Prescriptive Process Models

### Waterfall Model
Sequential phases: Requirements → Design → Implementation → Testing → Deployment → Maintenance. Each phase must complete before the next begins; heavy documentation; best when requirements are well understood and stable.

```
[DIAGRAM: Waterfall model
 Requirements --> Design --> Implementation --> Testing --> Deployment --> Maintenance
 (arrows only go forward; feedback loop from Maintenance back to Requirements)
]
```

- **Advantages**: simple, disciplined, milestones clear.
- **Disadvantages**: no feedback between phases; late discovery of errors; not suitable for evolving requirements.

### Incremental Process Models
Deliver the product in increments. Each increment adds functionality. Users get a working core early.

### Evolutionary Process Models
- **Prototyping**: build a quick working model, refine it through user feedback, then develop the real system.
- **Spiral Model**: iterative with a risk-driven loop: (1) determine objectives, (2) identify and resolve risks, (3) develop and verify, (4) plan next iteration. Each cycle produces a more complete version. Best for large, risky projects.

### Concurrent Models
Activities can be in different states (inactive, awaiting changes, under review, done) at the same time — appropriate for team-based, concurrent engineering.

## Unified Process (UP)
Four phases: **Inception** (scope, feasibility), **Elaboration** (architecture and risk reduction), **Construction** (build components), **Transition** (deploy to users). It is iterative, use-case driven, and architecture-centric.

## Personal and Team Process Models
- **PSP (Personal Software Process)**: individual discipline — planning, tracking personal defects, measuring.
- **TSP (Team Software Process)**: team discipline built on PSP — teams define roles, plan together, and track quality.

## Prescribed Text
Roger S. Pressman, *Software Engineering: A Practitioner's Approach*, 7th/8th Edition — Modules 1, 2 and 3 of this book.
