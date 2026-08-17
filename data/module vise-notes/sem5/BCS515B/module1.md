# BCS515B — Artificial Intelligence (Professional Elective - I)

## Module 1: Introduction to AI & Intelligent Agents

### What is Artificial Intelligence?

- **Definition**: AI is the study and design of intelligent agents — systems that perceive their environment through sensors, reason about what they perceive, and take actions through actuators to achieve their goals.
- AI is defined along **four schools of thought**, divided by two dimensions: human vs rational behaviour, and thinking vs acting:
  - **Thinking humanly** — modelling human cognition. The key test is the **Cognitive Modelling approach** (simulating thought processes); success is measured by comparing machine behaviour against human behaviour.
  - **Acting humanly** — the **Turing Test** approach. Proposed by Alan Turing (1950): a machine passes the test if an interrogator cannot distinguish its answers from a human's in a text-only conversation. The test requires the machine to possess **Natural Language Processing, Knowledge Representation, Automated Reasoning, and Machine Learning**. The **Total Turing Test** additionally requires **Computer Vision and Robotics** (to handle perception and manipulation). Note: the Turing Test measures behaviour, not internal intelligence.
  - **Thinking rationally** — the **Laws of Thought** approach (logic-based). Uses syllogisms and formal logic to draw correct conclusions. Limitation: representing all real-world knowledge in formal logic is hard, and "rational thinking" is not the same as "acting right".
  - **Acting rationally** — the **Rational Agent** approach. An agent acts to achieve the best expected outcome. This is the approach adopted by the textbook (Russell & Norvig). It is broader than logic because correct inference is only one mechanism for rational action.

### Foundations of AI

- AI draws from eight disciplines:
  - **Philosophy** — logic, reasoning, mind as physical system, learning from experience.
  - **Mathematics** — formal logic, computation (algorithms), probability, decision theory.
  - **Economics** — utility theory, decision theory, game theory, rational agents.
  - **Neuroscience** — how brains process information (neurons as computational units).
  - **Psychology** — human behaviour and perception, cognitive science.
  - **Computer Engineering** — hardware speed, memory, embedded systems that make AI feasible.
  - **Control Theory** — feedback loops, self-correcting systems.
  - **Linguistics** — knowledge representation and grammar for natural language processing.

### History of AI

- **1943–1956: Gestation** — McCulloch & Pitts propose the first artificial neuron model (1943); Hebbian learning; Turing's *Computing Machinery and Intelligence* (1950); the Dartmouth workshop (1956) coins the term "Artificial Intelligence" (McCarthy, Minsky, Shannon, Rochester).
- **1956–1974: Early enthusiasm** — General Problem Solver (GPS) by Newell & Simon; Lisp (McCarthy); perceptrons (Rosenblatt); microworlds like Shakey the robot and SHRDLU.
- **1974–1980: First AI winter** — funding cuts due to unfulfilled promises, combinatorial explosion, and perceptron limitations (Minsky & Papert, 1969).
- **1980–1987: Expert systems boom** — commercial expert systems (XCON at DEC) using rule-based knowledge; Fifth Generation Computer project in Japan.
- **1987–1993: Second AI winter** — collapse of the Lisp machine market, expert system maintenance costs.
- **1993–2011: Statistical/Probabilistic AI** — machine learning, data mining, Bayes nets; Deep Blue defeats Kasparov (1997).
- **2011–present: Deep learning era** — ImageNet breakthrough (2012), AlphaGo (2016), large language models, autonomous vehicles.

### State of the Art

- Current strong areas: **robotic vehicles** (autonomous cars), **speech recognition** (virtual assistants), **autonomous planning and scheduling**, **game playing** (chess, Go, video games), **spam filtering and fraud detection**, **logistics and route planning**, **machine translation**, **medical diagnosis support**, and **large language models** for natural language tasks.

### Agents and Environments

- **Agent**: anything that can be viewed as perceiving its environment through **sensors** and acting upon that environment through **actuators**.
- **Percept**: the agent's perceptual inputs at any given instant; the complete history of all percepts is the **percept sequence**.
- **Agent function**: maps percept sequences to actions, f: P* → A. It is an abstract mathematical description. The **agent program** is the concrete implementation that runs on the physical architecture to realize the agent function.
- **Rationality** (rational agent concept): For each possible percept sequence, a rational agent should select an action that is expected to maximize its **performance measure**, given the evidence provided by the percept sequence and whatever built-in knowledge the agent has.
- **Performance measure**: the criterion that evaluates how successful an agent is in a given environment (e.g., number of clean tiles per hour for a vacuum cleaner; safety, legality, comfort, profit for a taxi driver).

### PEAS Specification

- **PEAS** is the four-component description of a task environment:
  - **P — Performance measure**: success criteria.
  - **E — Environment**: what the agent senses and acts upon.
  - **A — Actuators**: how the agent acts on the environment.
  - **S — Sensors**: how the agent perceives the environment.

| Example | Performance Measure | Environment | Actuators | Sensors |
| :--- | :--- | :--- | :--- | :--- |
| Automated Taxi Driver | Safety, time, legal compliance, passenger comfort, profit | Roads, traffic, weather, pedestrians, other vehicles | Steering, accelerator, brake, horn, display | Cameras, GPS, accelerometer, speedometer, radar |
| Medical Diagnosis System | Healthy patient, low cost, no errors | Patient, hospital, staff | Display results, print reports, ask questions | Keyboard entry of symptoms, test results |
| Automated Vacuum Cleaner | Amount of dirt cleaned, time taken, area covered | Room, floor, furniture, dirt | Wheels, brushes, vacuum, dust bag | Dirt sensor, camera, bumper, wheel encoders |
| Part-Picking Robot | Percentage of parts in correct bins | Conveyor belt, parts, bins | Jointed arm, gripper, camera pan | Camera, joint angle sensors, tactile sensors |
| Satellite Image Analysis | Correct image classification | Orbiting satellite, downlink | Display of categorized scene | High-resolution camera |

### Nature of Environments (Task Environment Properties)

- **Fully observable vs Partially observable**: If the agent's sensors give it complete access to the complete state of the environment at each point in time, the environment is fully observable; otherwise it is partially observable. *Effective observability* refers to sensors detecting all aspects relevant to action choice. Fully observable environments are easier to handle (no need to track hidden state).
- **Single-agent vs Multi-agent**: An environment with only one agent is single-agent. In a multi-agent environment, other entities exist whose behaviour affects the agent. Multi-agent environments are **competitive** (e.g., chess — the other agent maximizes its own utility) or **cooperative** (e.g., two agents lifting a heavy object). Note: whether another entity is an agent depends on whether it maximizes its own performance measure.
- **Deterministic vs Stochastic**: If the next state of the environment is completely determined by the current state and the action executed, the environment is deterministic; otherwise it is stochastic (involves randomness). Deterministic games like chess are *strategic* in multi-agent settings (the other agent adds unpredictability without randomness).
- **Episodic vs Sequential**: In an episodic environment, the agent's experience is divided into atomic episodes; each episode consists of perception and a single action, and the next episode does not depend on previous actions. In sequential environments, current decisions affect all future decisions.
- **Static vs Dynamic**: A static environment does not change while the agent is deliberating; a dynamic environment changes during deliberation. *Semidynamic* environments change only by the agent's own actions (e.g., chess with a clock).
- **Discrete vs Continuous**: A discrete environment has a finite (or countable) number of distinct states, percepts, and actions (e.g., chess); a continuous environment has continuous values (e.g., taxi driving with real-valued positions).
- **Known vs Unknown**: Refers to the agent's *state of knowledge* about the "laws of physics" of the environment (the outcomes of its actions), not the environment itself. A known environment can still be partially observable.
- **Most challenging environments** combine: partially observable, multi-agent, stochastic, sequential, dynamic, continuous, and unknown properties.

| Property | Two Values | Example (easy → hard) |
| :--- | :--- | :--- |
| Observability | Fully vs Partially | Chess → Taxi driving |
| Agents | Single vs Multi | Solitaire → Chess |
| Dynamics | Deterministic vs Stochastic | 8-Puzzle → Lottery, Ludo |
| Episodes | Episodic vs Sequential | Image analysis → Assembly line |
| Change | Static vs Dynamic | Crossword → Taxi driving |
| Values | Discrete vs Continuous | Chess → Taxi driving |
| Knowledge | Known vs Unknown | Video poker rules → New game |

### Structure of Agents (Agent Program Types)

- The agent program runs on the physical architecture; the key internal decision is how the agent decides its next action.

#### Simple Reflex Agents

- Select actions based only on the **current percept**, ignoring the rest of the percept history.
- Implemented as **condition–action rules** (if-then rules): `if condition then action`.
- Works only when the environment is **fully observable**; if partially observable, it gets stuck in infinite loops (e.g., a vacuum cleaner that oscillates on a dirty/clean pattern). Loop avoidance is possible with random actions.
- Structure: `sensor → condition-action rules → actuator`.

```
[DIAGRAM: Simple Reflex Agent
 Sensors --> Percept --> Condition-Action Rules --> Action --> Actuators
 (no memory of past percepts; current percept only)
]
```

#### Model-Based Reflex Agents

- Maintain an **internal state** that tracks the unobserved aspects of the world, using the **model** (knowledge of how the world evolves and how its own actions affect the world).
- Update: `state = UPDATE(state, action, percept)`, then look up the rule for the updated state.
- Handles **partially observable** environments by combining percept history with world model.
- Structure: `percept → state (with model) → condition-action rules → action`, with feedback loop updating state.

```
[DIAGRAM: Model-Based Reflex Agent
 Sensors --> How world evolves / What my actions do (MODEL) --> State
 Percept --> State Update --> Condition-Action Rules --> Action --> Actuators
 State loops back into the model for next update
]
```

#### Goal-Based Agents

- Extend model-based agents by keeping a **goal**: a description of desirable situations. The agent chooses actions that lead to goal states.
- Requires **search and planning** — the agent reasons about action sequences and their consequences before acting.
- More flexible than reflex agents: the same goal can be reached by different action sequences in different situations.

```
[DIAGRAM: Goal-Based Agent
 Sensors --> State --> What actions do (model) --> What it will be like if I do action X
 Goal --> Goal-based decision (search/planning) --> Action --> Actuators
]
```

#### Utility-Based Agents

- A **utility function** maps a state (or a history) onto a real number expressing the degree of "happiness" — how good that state is for the agent.
- The agent chooses the action that **maximizes expected utility**, allowing it to trade off conflicting goals and handle uncertainty (acting rationally even when goals conflict).
- Preferable when goals are in conflict or when there are many possible goal states with different desirability.

```
[DIAGRAM: Utility-Based Agent
 Sensors --> State --> Model --> Utility function (how good is this state)
 Goals --> Maximize Expected Utility --> Action --> Actuators
]
```

#### Learning Agents

- The only agent type that improves its performance over time from experience.
- Four conceptual components:
  - **Learning element**: responsible for making improvements (takes feedback from the critic and modifies the performance element).
  - **Performance element**: the component that selects external actions (the "agent" part that acts).
  - **Critic**: gives feedback on how well the agent is doing, according to a fixed performance standard.
  - **Problem generator**: suggests exploratory actions that generate new experiences for learning.

```
[DIAGRAM: Learning Agent
 Performance Element --> Action --> Environment --> Percepts --> Critic (feedback)
 Critic --> Learning Element --> Performance Element (improvements)
 Problem Generator --> Performance Element (suggests exploratory actions)
]
```

- The learning element's design depends on: **which component** is to be learned, **what feedback** is available (supervised/unsupervised/reinforcement), and **what representation** is used for the learned component.
- **Reinforcement learning** is the paradigm where the agent learns from rewards and punishments (no direct supervision).

### Comparison Table: Four Basic Agent Programs

| Property | Simple Reflex | Model-Based Reflex | Goal-Based | Utility-Based |
| :--- | :--- | :--- | :--- | :--- |
| Uses current percept only | Yes | No (uses state) | No | No |
| Handles partial observability | No | Yes (via model) | Yes | Yes |
| Maintains internal state | No | Yes | Yes | Yes |
| Has explicit goal | No | No | Yes | Yes |
| Uses utility function | No | No | No | Yes |
| Capability | Most limited | Moderate | Flexible | Most rational |
| Example | Vacuum cleaner (dumb) | Obstacle-avoiding robot | Route-finding agent | Taxi driver |

### Key Exam Facts

- Agent function (percept sequence → action) is different from agent program (implementation); two agents can have different programs but the same function.
- The vacuum cleaner world: two locations A and B; the agent perceives its location and whether there is dirt; actions are Left, Right, Suck. With correct condition–action rules it cleans correctly in all states (simple reflex is sufficient here because the environment is fully observable).
- Turing Test components: NLP, KR, Automated Reasoning, ML (Total test adds Vision and Robotics).
- Rational action maximizes expected performance, not guaranteed performance — rationality depends on the percept sequence, built-in knowledge, and available actions.
