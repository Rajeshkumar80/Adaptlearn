# BCS501 — Software Engineering & Project Management

## Module 2: Requirements Engineering & Analysis Modeling

## Understanding Requirements
A requirement is a capability or condition the software must satisfy. Requirements engineering is the process of establishing what the customer needs.

The seven requirements engineering tasks:
1. **Inception** — ask questions, understand the problem from stakeholders.
2. **Elicitation** — gather requirements from users, documents, domain experts.
3. **Elaboration** — refine and model the requirements (analysis modeling).
4. **Negotiation** — resolve conflicts between stakeholders; agree on priorities.
5. **Specification** — write the requirements in a formal or informal document.
6. **Validation** — check that the requirements describe what the customer wants; review, walkthroughs, test cases.
7. **Management** — control changes to requirements (requirements traceability, change control).

## Developing Use Cases
A use case describes a sequence of actions a system performs to give an actor an observable result of value.
- **Actor**: a person or system that interacts with the product.
- Structure: use case name, actors, preconditions, main flow, alternate flows, postconditions.
- Example: "Withdraw Cash" for an ATM: actor = customer; main flow = insert card, enter PIN, enter amount, dispense cash.

## Scenario-Based Modeling
- **UML Use Case Diagram**: actors (stick figures) connected to ovals (use cases) inside the system boundary rectangle.
- **Activity Diagram**: flowchart-like — shows the flow of activities and decisions with swimlanes for actors.

```
[DIAGRAM: Use case diagram (ATM)
 Customer --(Withdraw Cash)---+
 Customer --(Check Balance)---+--> (System boundary)
 Customer --(Deposit Cash)----+
]
```

## Class-Based Modeling
- **Identifying analysis classes**: examine requirements for nouns that have attributes and behavior (e.g., Customer, Account, Transaction).
- **CRC Cards** (Class-Responsibility-Collaborator): each card lists the class name, its responsibilities (what it must know and do), and collaborators (other classes it works with).
- **Class Diagram**: shows classes, attributes, methods, and associations (multiplicity like 1..*, inheritance).

## Data Modeling Concepts
- **Data objects** (e.g., Student, Course), **attributes**, and **relationships** (one-to-one, one-to-many, many-to-many).

## Flow-Oriented Modeling (DFD)
A Data Flow Diagram shows how data moves through the system.
- Symbols: **process** (circle), **data store** (two parallel lines), **external entity** (rectangle), **data flow** (arrow).
- Levels: context diagram (level 0, whole system as one process) → level 1 → level 2 (more detail).
- DFD helps identify processes, data stores, and boundaries.

```
[DIAGRAM: DFD symbols
 External Entity (rectangle) --> process (circle) --> Data Store (two lines)
 data flow = arrows labelled with data name
]
```

## Behavioral Modeling (State Diagrams)
A state diagram shows the life of an object as a set of states and events that cause transitions.
- States (rounded rectangles), events (labels on arrows), initial state (filled dot), final state (bull's eye).
- Example: an elevator — states: Idle, Moving Up, Moving Down, Door Open; events: button pressed, floor reached.

## Prescribed Text
Pressman, *Software Engineering: A Practitioner's Approach* — Module 4 and 5 of this book.
