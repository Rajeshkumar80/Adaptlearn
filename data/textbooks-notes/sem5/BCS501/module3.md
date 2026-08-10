# BCS501 — Software Engineering & Project Management

## Module 3: Agile Development & Software Architecture

## What is Agility?
Agility is the ability to respond to change — to create and respond to change in a turbulent business environment, and to balance flexibility with structure. Agile development emphasizes rapid, incremental delivery, close customer collaboration, small self-organizing teams, and minimal ceremony.

## Agility and the Cost of Change
In traditional development the cost of change rises steeply with time (a change late in the project is very expensive). In agile processes the cost of change is flattened — design is incremental, delivery is frequent, and customer feedback arrives early, so changes stay cheap throughout.

```
[DIAGRAM: Cost of change curves
 Traditional: line rises steeply with project time
 Agile:      nearly flat line
 x-axis = time, y-axis = cost of change
]
```

## What is an Agile Process?
An agile process is one that:
- Delivers working software in short iterations (2-4 weeks), each producing a customer-usable increment.
- Welcomes changing requirements even late in development.
- Uses face-to-face communication and a small collocated team.
- Emphasizes working software over documentation, response to change over following a plan.

## Agile Principles (from the Agile Manifesto)
- Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
- Welcome changing requirements, even late — agile processes harness change for the customer's competitive advantage.
- Deliver working software frequently (weeks, not months).
- Business people and developers must work together daily.
- Build projects around motivated individuals; trust them.
- The most efficient communication is face-to-face conversation.
- Working software is the primary measure of progress.
- Agile processes promote sustainable development.
- Continuous attention to technical excellence and good design.
- Simplicity — maximize the amount of work not done.
- The best architectures emerge from self-organizing teams.
- At regular intervals, the team reflects on how to become more effective.

## Extreme Programming (XP)

### XP Values
1. **Communication** — daily face-to-face contact between developers and customers.
2. **Simplicity** — build only what is needed now.
3. **Feedback** — from tests and customers, delivered continuously.
4. **Courage** — tell the truth about progress and estimates; refactor fearlessly.
5. **Respect** — every team member's contribution matters.

### XP Process (planning → design → coding → testing)
- **Planning**: stories (user requirements) are written by customers; each story estimated; release planning selects stories for an iteration.
- **Design**: simple designs, CRC cards, spike solutions; **refactoring** improves design without changing behavior.
- **Coding**: pair programming (two developers at one machine); coding standards; continuous integration — code is integrated and tested daily.
- **Testing**: test-first development — unit tests are written before code (TDD); acceptance tests from customer stories; all tests must pass.
- **Listening**: developers listen to customers to understand needs.

### Industrial XP
Scales XP to large teams: adds roles (champion, coach, XP mentor, translator), and practices like readiness assessment, project community, and exploratory testing.

## Scrum
Scrum is an agile framework for managing product development in **sprints** (typically 2-4 weeks).

### Roles
- **Product Owner (PO)**: represents the customer; owns and prioritizes the Product Backlog.
- **Scrum Master**: process coach — removes impediments, ensures Scrum rules are followed.
- **Development Team**: 5-9 self-organizing members who build the increment.

### Artifacts
- **Product Backlog**: ordered list of all desired features/requirements.
- **Sprint Backlog**: features committed for the current sprint.
- **Increment**: potentially shippable product at sprint end.
- **Burndown Chart**: shows remaining work vs. time in a sprint.

### Ceremonies
- **Sprint Planning**: team selects backlog items for the sprint.
- **Daily Standup (Daily Scrum)**: 15-minute meeting — what did I do, what will I do, what blocks me.
- **Sprint Review**: demo of the increment to stakeholders.
- **Sprint Retrospective**: team reflects and improves the process.

```
[DIAGRAM: Scrum sprint cycle
 Product Backlog --> Sprint Planning --> Sprint (2-4 weeks, daily standups)
 Sprint --> Sprint Review (demo) --> Sprint Retrospective --> next Sprint Planning
 The cycle repeats; the burndown chart tracks remaining work each day.
]
```

## Other Agile Models
- **DSDM (Dynamic Systems Development Method)**: agile framework with timeboxing, MoSCoW prioritization (Must, Should, Could, Won't), prototyping, and continuous user involvement.
- **AUP (Agile Unified Process)**: a simplified UP — inception, elaboration, construction, transition phases, each with agile practices.
- **Agile tool set**: project tracking tools, storyboards, automated test tools, continuous integration servers, communication tools (e.g., Jira, Git, CI pipelines).

## Design Concepts & Architecture
- **Design quality**: a good design is one that implements all requirements, is understandable, and is maintainable (assessed via internal quality attributes).
- **Abstraction**: focus on essential details, ignore irrelevant ones (procedural and data abstraction).
- **Architecture**: the overall structure of the system — components, connectors, and constraints; the architectural model is the "skeleton" of the system.
- **Patterns**: reusable solutions to recurring design problems (e.g., MVC, Observer, Factory).
- **Information Hiding**: each module hides its internal design decisions; only necessary interfaces are exposed — reduces coupling and impact of change.
- **Functional Independence**: measured by **cohesion** (how related the elements within a module are — high is good) and **coupling** (how interdependent modules are — low is good).
- **Architectural Design & Taxonomy**: architectural styles (data-centered, data-flow, layered, call-return, object-oriented, client-server). Layered architecture separates presentation, business logic, and data.

## Prescribed Text
Pressman, *Software Engineering: A Practitioner's Approach* — Modules 6, 7, 8 and 9 of this book.
