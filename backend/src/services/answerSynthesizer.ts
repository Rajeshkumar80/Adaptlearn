export interface Section {
  type: string;
  heading: string;
  text: string;
  key_terms?: string[];
  diagram_tag?: string;
}

export interface AIDiagram {
  title: string;
  mermaid_code: string;
  exam_sketch_guide: string;
}

export interface StructuredAnswer {
  question: string;
  subject_code: string;
  topic: string;
  module: number;
  marks: number;
  co_reference: string;
  sections: Section[];
  ai_diagram?: AIDiagram;
  raw?: string;
}

// Check string similarity (Jaccard on words)
function textSimilarity(a: string, b: string): number {
  const setA = new Set(a.toLowerCase().split(/\s+/).filter(w => w.length > 2));
  const setB = new Set(b.toLowerCase().split(/\s+/).filter(w => w.length > 2));
  if (!setA.size || !setB.size) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  return intersection / (setA.size + setB.size - intersection);
}

// ── Specialized topic catalogs for simple, student-friendly 10-mark answers ────
interface TopicKnowledge {
  definition: string;
  explanation: string;
  how_it_works: string;
  example: string;
  comparison: string;
  conclusion: string;
  key_terms: string[];
  ai_diagram?: AIDiagram;
}

const TOPIC_CATALOG: { pattern: RegExp; knowledge: TopicKnowledge }[] = [
  // 1. Machine Learning (Types of ML, Supervised, Unsupervised, Reinforcement)
  {
    pattern: /\b(ml|machine learning|types of ml|supervised|unsupervised|reinforcement|clustering|classification)\b/i,
    knowledge: {
      definition: "Machine Learning (ML) is a branch of Artificial Intelligence (AI) that empowers computer systems to learn patterns and decision rules directly from historical data without being explicitly programmed with static rule sets. Formally defined by Tom M. Mitchell (1997): A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.",
      explanation: `The Three Primary Types of Machine Learning Algorithms:
• Supervised Learning (Learning with a Teacher): The algorithm trains on labeled datasets containing input features (X) paired with correct target labels (Y) to learn a predictive mapping function Y = f(X).
  - Classification: Predicts discrete categorical class labels (e.g., Email Spam Filtering, Medical Diagnosis using Logistic Regression, Support Vector Machines (SVM), Decision Trees, Random Forest).
  - Regression: Predicts continuous numerical quantities (e.g., House Price Estimation, Stock Trend Prediction using Linear Regression).
• Unsupervised Learning (Learning without a Teacher): The algorithm receives completely unlabeled data and independently identifies hidden structures, clusters, or probability distributions without external guidance.
  - Clustering: Groups similar data samples together based on geometric distance metrics (e.g., K-Means Clustering, Hierarchical Clustering).
  - Dimensionality Reduction: Compresses high-dimensional feature spaces while preserving maximum variance (e.g., Principal Component Analysis (PCA)).
• Reinforcement Learning (Learning via Environmental Feedback): An autonomous agent interacts with an interactive environment through trial-and-error actions, receiving scalar rewards (+) or penalties (-) to discover an optimal policy (π) that maximizes cumulative long-term reward (e.g., Q-Learning, Deep Q-Networks (DQN) for robotics and autonomous driving).`,
      how_it_works: `Operational Architecture & End-to-End Workflow Pipeline of Machine Learning:
1. Data Collection & Preprocessing: Raw real-world datasets are acquired, cleaned (imputing missing values, noise filtering, outlier removal), normalized/standardized, and partitioned into Training (70-80%) and Test/Validation (20-30%) subsets.
2. Feature Engineering & Selection: Informative input attributes are extracted, transformed (one-hot encoding for categorical variables), and selected to reduce multicollinearity and computational complexity.
3. Model Training & Parameter Optimization: The chosen learning algorithm iteratively adjusts internal parameters (weights W and bias b) by minimizing a defined Loss Function (e.g., Mean Squared Error (MSE), Binary Cross-Entropy) via Gradient Descent: W := W - α * (∂Loss/∂W).
4. Model Validation & Hyperparameter Tuning: Hyperparameters (learning rate α, tree depth, regularization penalty λ) are tuned using K-Fold Cross-Validation to prevent Overfitting (high variance) and Underfitting (high bias).
5. Evaluation & Deployment: Generalization capability is evaluated against unseen test data using standard metrics (Accuracy, Precision, Recall, F1-Score, ROC-AUC), followed by model deployment to production REST APIs.`,
      example: `Intuitive Real-World Analogies & Practical Engineering Applications:
• Everyday Educational Analogy:
  - Supervised Learning is like a Student Studying with an Answer Key: The student solves practice problems, compares answers against known solutions at the back of the book, corrects mistakes, and learns to solve new exam questions.
  - Unsupervised Learning is like a Child Sorting Toys: Without anyone telling them names or labels, the child naturally groups round balls together and square building blocks together based on visual geometric similarities.
  - Reinforcement Learning is like Training a Pet Dog with Treats: You give the dog a tasty treat (positive reward) when it sits on command and say 'No' (negative penalty) when it misbehaves until it masters the trick.
• Real-World Industry Applications:
  - Supervised Learning: Google Gmail filtering millions of spam emails daily using Naive Bayes and Logistic Regression classifiers.
  - Unsupervised Learning: Netflix and Amazon clustering millions of subscribers into taste segments for personalized movie/product recommendations.
  - Reinforcement Learning: Tesla Autopilot and Waymo autonomous vehicles learning optimal steering, lane-changing, and braking policies in simulated environments.`,
      comparison: `Technical Comparison Matrix: Supervised vs. Unsupervised vs. Reinforcement Learning:
• Training Data Input:
  - Supervised: Fully Labeled data (Input X + Target Y).
  - Unsupervised: Unlabeled data (Input X only).
  - Reinforcement: No static training dataset; interactive dynamic environment feedback.
• Primary Objective:
  - Supervised: Map input features directly to known outputs (Predict target class or continuous value).
  - Unsupervised: Discover inherent patterns, data clusters, and latent representations.
  - Reinforcement: Learn an optimal sequential action policy that maximizes cumulative reward.
• Core Computational Algorithms:
  - Supervised: Linear/Logistic Regression, Decision Trees, Random Forests, Support Vector Machines (SVM), Naive Bayes.
  - Unsupervised: K-Means Clustering, Agglomerative Hierarchical Clustering, PCA, Apriori Association Rules.
  - Reinforcement: Q-Learning, SARSA, Deep Q-Networks (DQN), Proximal Policy Optimization (PPO).
• Feedback Mechanism:
  - Supervised: Instant deterministic error calculation against ground-truth labels.
  - Unsupervised: No direct feedback or external guidance.
  - Reinforcement: Delayed scalar rewards or penalties following action execution.`,
      conclusion: `VTU 10-Mark Exam Scoring Tips & High-Yield Strategy:
1. State the Standard Definition: Begin by quoting Tom Mitchell's formal Machine Learning definition (Experience E, Task T, Performance Measure P) for guaranteed full opening marks.
2. Draw the Machine Learning Hierarchy Diagram: Sketch a neat tree diagram with Machine Learning at the root branching into Supervised (Classification & Regression), Unsupervised (Clustering & Dimensionality Reduction), and Reinforcement Learning (Model-free & Model-based).
3. Draw the ML Operational Pipeline: Draw the 5-stage flowchart: Data Collection -> Preprocessing -> Model Training (Loss Optimization) -> Evaluation -> Deployment.
4. Draw the Comparative Matrix Table: Tabulate Supervised vs. Unsupervised vs. Reinforcement across Input Data, Objective, Algorithms, and Real-world Example to secure full 10/10 marks.`,
      key_terms: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Classification", "Regression", "Clustering", "Gradient Descent", "Tom Mitchell", "Feature Engineering"],
      ai_diagram: {
        title: "Machine Learning Taxonomy & End-to-End Operational Pipeline",
        mermaid_code: `flowchart TD
  subgraph Taxonomy ["Core Machine Learning Paradigms"]
    ML["Machine Learning"] --> S["1. Supervised Learning\\n(Labeled Data: X -> Y)"]
    ML --> U["2. Unsupervised Learning\\n(Unlabeled Data: Patterns)"]
    ML --> R["3. Reinforcement Learning\\n(Agent & Reward Policy)"]
    S --> SC["Classification (Spam, SVM)\\nRegression (Prices, MSE)"]
    U --> UC["Clustering (K-Means)\\nDimensionality Reduction (PCA)"]
    R --> RC["Trial & Error Actions\\nQ-Learning & Deep Q-Networks"]
  end
  subgraph Pipeline ["End-to-End ML Pipeline Flow"]
    D1["Raw Data Ingestion"] --> D2["Data Cleaning & Scaling"]
    D2 --> D3["Feature Engineering"]
    D3 --> D4["Model Training (Loss Minimization)"]
    D4 --> D5["Evaluation & API Deployment"]
  end`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions (Guaranteed 4 Diagram Marks):
1. Draw the ML Taxonomy Tree at the top of the answer:
   - Root Node: 'Machine Learning'
   - Branch 1: 'Supervised Learning' -> Sub-nodes: 'Classification' and 'Regression'
   - Branch 2: 'Unsupervised Learning' -> Sub-nodes: 'Clustering' and 'Dimensionality Reduction'
   - Branch 3: 'Reinforcement Learning' -> Sub-nodes: 'Agent & Policy' and 'Rewards/Penalties'
2. Below the tree, draw the 5-stage horizontal pipeline:
   [Data Ingestion] -> [Preprocessing] -> [Feature Engineering] -> [Model Training] -> [Evaluation].
3. Label clearly: 'Figure: Machine Learning Taxonomy & Pipeline Flow'.`
      },
    },
  },

  // 1b. Compiler Design (Phases of a Compiler, Front End & Back End - BCS601)
  {
    pattern: /\b(compiler|compilers|phases of a compiler|compiler phases|lexical analysis|front end and back end of a compiler)\b/i,
    knowledge: {
      definition: "A Compiler is a specialized system software translator that converts a high-level source programming language into an equivalent low-level target machine language or relocatable assembly code, while detecting and reporting all syntactic and semantic errors. The compilation architecture operates in two major phases: Analysis (Front End, machine-independent) and Synthesis (Back End, machine-dependent), partitioned into six distinct sequential phases cooperating through a central Symbol Table and Error Handler.",
      explanation: `The Six Sequential Phases of a Compiler:
• 1. Lexical Analysis (Scanner): Reads the source code character stream and groups characters into meaningful sequences called lexemes, emitting a stream of tokens of the form <token_name, attribute_value>. Strips comments, tabs, and whitespace, and populates identifier records in the Symbol Table.
• 2. Syntax Analysis (Parser): Takes the token stream and imposes a hierarchical grammatical structure by constructing a Parse Tree or Syntax Tree according to Context-Free Grammar (CFG) rules, enforcing operator precedence and associativity.
• 3. Semantic Analysis: Checks the syntax tree and symbol table for semantic consistency with language specifications. Performs type checking (validating operand type compatibility) and type coercion (inserting implicit type conversion operators, e.g., inttofloat).
• 4. Intermediate Code Generation (ICG): Translates the decorated syntax tree into an explicit machine-independent intermediate representation, typically Three-Address Code (TAC), Quadruples, or Triples, separating source analysis from target architecture details.
• 5. Code Optimization: Analyzes and transforms the intermediate representation to improve runtime execution speed and reduce memory consumption without altering program logic (via constant folding, common subexpression elimination, dead code elimination, and loop-invariant code motion).
• 6. Code Generation: Maps the optimized intermediate code into target machine assembly instructions, performing instruction selection, CPU register allocation, and memory address binding.`,
      how_it_works: `End-to-End Execution Trace of the Expression: position = initial + rate * 60:
1. Lexical Analyzer: Generates token stream:
   <id, 1> <=> <id, 2> <+> <id, 3> <*> <60>
   (Symbol Table Entries: 1 -> position, 2 -> initial, 3 -> rate).
2. Syntax Analyzer: Builds syntax tree with root '=' having left child <id, 1> and right subtree '+' with <id, 2> and '* (<id, 3>, 60)'.
3. Semantic Analyzer: Discovers '*' applied to float 'rate' and integer constant '60'; inserts conversion operator: inttofloat(60).
4. Intermediate Code Generator (Three-Address Code):
   t1 = inttofloat(60)
   t2 = id3 * t1
   t3 = id2 + t2
   id1 = t3
5. Code Optimizer: Evaluates constant conversion at compile time:
   t1 = id3 * 60.0
   id1 = id2 + t1
6. Code Generator: Emits target machine assembly instructions:
   LDF  R2, id3
   MULF R2, R2, #60.0
   LDF  R1, id2
   ADDF R1, R1, R2
   STF  id1, R1`,
      example: `Real-World Analogy & Practical Tool Implementations:
• Factory Assembly-Line Analogy:
  - Lexical Analyzer is like an Inspector Sorting Raw Components: Separates bolts, gears, and wires (tokens) while discarding packing debris and dust (whitespace/comments).
  - Syntax Analyzer is like a Blueprint Structural Assembler: Assembles components into mechanical sub-assemblies (syntax tree) following engineering specifications (grammar).
  - Semantic Analyzer is like Quality Assurance: Verifies that 12V electrical components are not erroneously wired to 220V power sources (type checking).
  - Optimizer is like an Efficiency Consultant: Eliminates redundant assembly steps and streamlines mechanical movements.
• Industry Compiler Frameworks:
  - GNU Compiler Collection (GCC) and LLVM / Clang: Use modular front ends (Clang for C/C++, Rustc, Swift) generating a common intermediate representation (LLVM IR), optimized by machine-independent passes, and synthesized for target CPUs (x86, ARM, RISC-V).`,
      comparison: `Key Comparison: Compiler vs. Interpreter vs. Assembler:
• Input & Output:
  - Compiler: Translates complete high-level source code into target machine/assembly object code.
  - Interpreter: Translates and executes high-level source code line-by-line without saving object code.
  - Assembler: Translates low-level symbolic assembly mnemonics directly into binary machine instructions.
• Execution Performance:
  - Compiler produces precompiled binary executables with fastest runtime execution.
  - Interpreter incurs interpretive execution overhead with slower execution speed.
• Error Diagnostics:
  - Compiler reports all lexical, syntax, and semantic errors across the entire source file.
  - Interpreter halts immediately at the first encountered runtime syntax error.`,
      conclusion: `VTU 10-Mark Exam Scoring Tips & High-Yield Strategy:
1. Provide the formal definition: Front-End (Analysis) vs. Back-End (Synthesis) model.
2. Draw the neat 6-phase block diagram connecting Lexical, Syntax, Semantic, ICG, Optimization, and CodeGen vertically, with Symbol Table and Error Handler connected to every phase.
3. Trace the standard VTU example: 'position = initial + rate * 60' through all 6 phases with explicit output at each step to secure full 10/10 marks.`,
      key_terms: ["Compiler", "Phases of Compiler", "Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Intermediate Code Generation", "Code Optimization", "Code Generation", "Symbol Table", "Error Handler", "Three-Address Code"],
      ai_diagram: {
        title: "Phases of a Compiler Architecture & Operational Flow",
        mermaid_code: `flowchart TD\n  SRC["Source Program"] --> LA["1. Lexical Analyzer (Scanner)"]\n  LA -->|Token Stream| SA["2. Syntax Analyzer (Parser)"]\n  SA -->|Syntax Tree| SEM["3. Semantic Analyzer"]\n  SEM -->|Decorated AST| ICG["4. Intermediate Code Generator"]\n  ICG -->|Three-Address Code| CO["5. Code Optimizer"]\n  CO -->|Optimized IR| CG["6. Code Generator"]\n  CG --> TGT["Target Machine Code"]\n  subgraph Support ["Cross-Phase Support"]\n    ST["Symbol Table Management"]\n    EH["Error Handler"]\n  end\n  LA <--> ST\n  SA <--> ST\n  SEM <--> ST\n  ICG <--> ST\n  CO <--> ST\n  CG <--> ST\n  LA -.-> EH\n  SA -.-> EH\n  SEM -.-> EH\n  ICG -.-> EH\n  CO -.-> EH\n  CG -.-> EH`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions (Guaranteed 4 Diagram Marks):
1. Draw 6 rectangular boxes vertically down the center:
   [Lexical Analyzer] -> [Syntax Analyzer] -> [Semantic Analyzer] -> [Intermediate Code Generator] -> [Code Optimizer] -> [Code Generator].
2. Label intermediate data flows on connecting arrows:
   Token Stream -> Syntax Tree -> Decorated AST -> Three-Address Code -> Optimized IR -> Target Machine Code.
3. Draw two tall vertical boxes on the right: 'Symbol Table' and 'Error Handler'.
4. Draw bidirectional arrows connecting Symbol Table to every phase, and dashed arrows connecting Error Handler to every phase.
5. Label clearly: 'Figure: Phases of a Compiler with Symbol Table and Error Handler'.`
      }
    }
  },

  // 2. Cloud Computing (Service Models: IaaS, PaaS, SaaS & Deployment Models)
  {
    pattern: /\b(cloud|cloude|cloud computing|iaas|paas|saas|virtualization|cloud services?|types of cloud)\b/i,
    knowledge: {
      definition: "Cloud Computing is an on-demand, network-accessible computing paradigm that delivers shared pools of configurable computing resources (servers, storage, networks, applications, and services) over the Internet without requiring direct physical management by the user. According to the NIST (National Institute of Standards and Technology) standard framework, cloud computing is governed by five essential characteristics: On-Demand Self-Service, Broad Network Access, Resource Pooling (Multi-Tenancy), Rapid Elasticity (dynamic auto-scaling), and Measured Service (pay-as-you-go billing).",
      explanation: `Types of Cloud Services (The SPI Model):
• Infrastructure as a Service (IaaS): Delivers fundamental raw compute instances, block/object storage, and software-defined networking over the cloud via hardware virtualization. Users retain full control over operating systems, installed packages, runtime environments, and deployed applications. Examples: Amazon Web Services (AWS EC2, S3), Google Compute Engine (GCE), Microsoft Azure Virtual Machines.
• Platform as a Service (PaaS): Delivers a pre-configured hardware, operating system, and software execution stack where developers build, test, and deploy applications without the complexity of configuring underlying servers, load balancers, or storage volumes. Examples: Google App Engine (GAE), AWS Elastic Beanstalk, Heroku, Microsoft Azure App Services.
• Software as a Service (SaaS): Delivers complete, turnkey end-user software applications accessible directly over standard web browsers, eliminating local installation, hardware maintenance, and manual patching entirely. The cloud provider manages all underlying hardware, middleware, and application updates. Examples: Google Workspace (Gmail, Drive), Microsoft 365, Salesforce CRM, Dropbox.`,
      how_it_works: `Types of Clouds (Deployment Models) & 3-Tier Platform Architecture:

A. The Four Primary Cloud Deployment Models:
1. Public Cloud: Owned and administered by external third-party cloud service providers (CSPs) delivering multi-tenant shared infrastructure over the open Internet. Delivers maximum cost savings, high fault tolerance, and virtually unlimited scalability (e.g., AWS, Microsoft Azure, Google Cloud).
2. Private Cloud: Dedicated exclusively to a single business organization or enterprise. Can be hosted in an on-premises enterprise data center or managed by a specialized vendor. Offers maximum data privacy, governance, and stringent regulatory compliance (e.g., OpenStack, VMware vSphere).
3. Hybrid Cloud: Seamlessly binds public and private cloud environments using standardized encrypted interconnects (VPN, AWS Direct Connect). Enables Cloud Bursting where sensitive proprietary data stays in the private cloud while spike workloads overflow into the public cloud.
4. Community Cloud: Shared infrastructure jointly owned and utilized by several organizations with shared regulatory, security, or domain-specific missions (e.g., healthcare hospital networks, banking consortia, or government agencies).

B. 3-Tier Cloud Platform Operational Flow:
1. Compute Layer: Hypervisors (KVM, Xen, VMware ESXi) manage virtual machine instances dynamically across clustered server nodes.
2. Storage & Network Layer: Distributed block and object stores (Amazon S3, Ceph, Google File System) replicate data blocks across distinct availability zones.
3. Management & Service Brokering Layer: SLA monitors, API gateways, and dynamic orchestrators dispatch client requests with automatic load balancing.`,
      example: `Student-Friendly Transportation Analogy & Real-World Industry Application:
• The Transportation Analogy:
  - IaaS is like Renting a Car: You receive the physical vehicle and chassis (hardware), but you decide who drives, which route to navigate, fuel, and traffic laws (OS and applications).
  - PaaS is like Taking a Taxi or Ride-Share (Uber/Ola): You don't drive or service the automobile; you simply tell the driver the destination and focus on your work (focusing purely on writing and running code).
  - SaaS is like Riding a Public Transit Bus: The bus, driver, schedule, and route are 100% managed by the transit authority; you simply buy a ticket, take a seat, and enjoy the ride (ready-to-use software like Gmail or YouTube).
• Real-World Industry Example: Netflix on AWS:
  - Netflix provisions tens of thousands of Amazon EC2 virtual servers (IaaS) for multi-region video rendering.
  - Netflix uses managed relational and NoSQL databases like Amazon DynamoDB (PaaS) to instantly store user watch-histories and run recommendation engines.
  - Netflix delivers the movie stream directly to over 250 million global viewers via simple web and mobile apps (SaaS).`,
      comparison: `Technical Comparison Matrix: IaaS vs. PaaS vs. SaaS:
• Layer of Control:
  - IaaS: User manages OS, Middleware, Runtime, and Applications. Provider manages Virtualization, Servers, Storage, and Networking.
  - PaaS: User manages Application Code and Data. Provider manages OS, Runtime, Middleware, and Hardware.
  - SaaS: User manages only personal data and settings. Provider manages 100% of the software and infrastructure stack.
• Target User Base:
  - IaaS: System Administrators, Cloud Architects, and DevOps Engineers.
  - PaaS: Software Developers and Application Programmers.
  - SaaS: Everyday End-Users, Students, and Business Consumers.
• Key Trade-Off:
  - IaaS provides maximum customizability but requires high administrative skill.
  - PaaS accelerates development velocity but can cause provider lock-in.
  - SaaS offers instant zero-effort productivity but minimal system customization.
• Deployment Model Comparison:
  - Public Cloud = Low cost, multi-tenant, variable security.
  - Private Cloud = High cost, single-tenant, maximum security and compliance.
  - Hybrid Cloud = Balanced cost, enterprise flexibility, unified management.`,
      conclusion: `VTU 10-Mark Exam Scoring Tips & High-Yield Strategy:
1. Draw the Cloud Services Pyramid (SPI Model): Draw a neat triangle showing IaaS at the base (Compute/Storage/Network), PaaS in the middle (Runtime/Database/OS), and SaaS at the top peak (End-user applications). Label clearly for 4 diagram marks.
2. Sketch the Cloud Deployment Models Block Diagram: Illustrate Private Cloud (Intranet), Public Cloud (Internet), and Hybrid Cloud connected by a secure encrypted VPN tunnel.
3. Explicitly state the 5 NIST Cloud Characteristics: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, and Measured service.
4. Draw the Shared Responsibility Model Table comparing IaaS, PaaS, and SaaS across user vs. provider responsibilities to secure full 10/10 marks.`,
      key_terms: ["Cloud Computing", "IaaS", "PaaS", "SaaS", "Public Cloud", "Private Cloud", "Hybrid Cloud", "NIST Characteristics", "Virtualization", "SPI Model"],
      ai_diagram: {
        title: "Cloud Computing SPI Service Pyramid & Deployment Architecture",
        mermaid_code: `flowchart TD
  subgraph SPI ["SPI Service Models (Layer of Abstraction)"]
    SaaS["SaaS (Software as a Service): End-User Apps\\n(Gmail, Microsoft 365, Salesforce)"]
    PaaS["PaaS (Platform as a Service): Runtime & DB\\n(Google App Engine, Elastic Beanstalk)"]
    IaaS["IaaS (Infrastructure as a Service): Hardware & VMs\\n(AWS EC2, S3, Azure VMs)"]
    SaaS --> PaaS
    PaaS --> IaaS
  end
  subgraph Deploy ["Deployment Models"]
    Pub["Public Cloud (Multi-Tenant CSP)"]
    Priv["Private Cloud (Dedicated On-Premises)"]
    Hyb["Hybrid Cloud (Orchestrated Bridge)"]
    Pub -. Encrypted VPN .- Hyb
    Priv -. Encrypted VPN .- Hyb
  end`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions (Guaranteed 4 Diagram Marks):
1. Draw the Cloud Services Pyramid (SPI Model):
   - Draw an inverted triangle or 3 stacked horizontal rectangular layers.
   - Top Layer: SaaS (Applications, managed completely by CSP).
   - Middle Layer: PaaS (Developer Platform, OS, DB, Runtime).
   - Base Layer: IaaS (Hardware, Virtualization, Servers, Storage, Networking).
2. Draw the Cloud Deployment Models Block Diagram:
   - Draw 'Private Cloud' (Inside Enterprise Firewall) and 'Public Cloud' (Over Internet).
   - Connect them with an encrypted tunnel labeled 'VPN Interconnect / Direct Connect' and label the combination 'Hybrid Cloud'.
3. Label the diagram 'Figure: Cloud Computing SPI Service Stack and Deployment Architecture'.`
      },
    },
  },

  // 3. Database Normalization (1NF, 2NF, 3NF, BCNF & Functional Dependencies)
  {
    pattern: /\b(normalization|1nf|2nf|3nf|bcnf|functional dependency|normal forms?|anomaly|anomalies)\b/i,
    knowledge: {
      definition: "Database Normalization is the systematic technique of organizing relational database tables to reduce data redundancy, eliminate update/insertion/deletion anomalies, and ensure data integrity through lossless functional dependencies and dependency-preserving decompositions.",
      explanation: `Core Objectives & Elimination of Anomalies in Normalization:
• Insertion Anomaly: Inability to record valid data about an entity without artificially inserting unrelated data of another entity (e.g., cannot add a new department without having at least one employee).
• Deletion Anomaly: Unintended loss of critical data about one entity when deleting records of another entity (e.g., deleting the last student enrolled in a course deletes the course details entirely).
• Modification/Update Anomaly: Inconsistent updates across duplicate rows leading to conflicting records (e.g., updating a professor's salary in only one row while other rows retain outdated figures).
• The Hierarchy of Normal Forms: 1NF ⊂ 2NF ⊂ 3NF ⊂ BCNF. Each subsequent normal form enforces stricter mathematical rules on functional dependencies.`,
      how_it_works: `Step-by-Step Normal Forms & Decomposition Pipeline:
1. First Normal Form (1NF): Requires that all attributes in a relation contain only atomic (indivisible) values, eliminating repeating groups, multi-valued attributes, and nested tables.
2. Second Normal Form (2NF): Relation must be in 1NF and have NO Partial Dependencies. Every non-prime attribute must be fully functionally dependent on the ENTIRE candidate key (no non-prime attribute can depend on a proper subset of a composite primary key).
3. Third Normal Form (3NF): Relation must be in 2NF and have NO Transitive Dependencies. For any non-trivial functional dependency X -> Y, either X is a Super Key or Y is a Prime Attribute (no non-prime attribute may depend on another non-prime attribute: X -> A and A -> B is prohibited).
4. Boyce-Codd Normal Form (BCNF): A stricter version of 3NF requiring that for every non-trivial functional dependency X -> Y, X MUST be a Super Key without exception.`,
      example: `Practical Worked Example of Relational Decomposition:
• Initial Unnormalized Relation:
  StudentCourse(StudentID, CourseID, StudentName, CourseName, Instructor, InstructorRoom).
  Primary Key: (StudentID, CourseID).
• Step 1: Converting to 1NF: Ensure all multi-valued phone numbers or enrolled courses are split so each cell holds exactly one atomic value.
• Step 2: Converting to 2NF (Eliminating Partial Dependency):
  - Notice StudentID -> StudentName depends on only part of the primary key!
  - Decompose into: Student(StudentID, StudentName) and CourseEnrollment(StudentID, CourseID, CourseName, Instructor, InstructorRoom).
• Step 3: Converting to 3NF (Eliminating Transitive Dependency):
  - In CourseEnrollment, CourseID -> Instructor, and Instructor -> InstructorRoom (transitive!).
  - Decompose into: Course(CourseID, CourseName, Instructor) and InstructorOffice(Instructor, InstructorRoom). Now completely in 3NF!`,
      comparison: `Technical Comparison: 3NF vs. BCNF:
• Governing Rule:
  - 3NF: For X -> Y, X is a Super Key OR Y is a Prime Attribute.
  - BCNF: For X -> Y, X MUST ALWAYS be a Super Key (no exceptions).
• Dependency Preservation:
  - 3NF always guarantees dependency preservation across decomposed relations.
  - BCNF achieves maximum redundancy reduction but may occasionally fail to preserve non-key functional dependencies.
• Redundancy Level:
  - 3NF allows subtle redundancy when composite candidate keys overlap.
  - BCNF eliminates all redundancy caused by functional dependencies.`,
      conclusion: `VTU 10-Mark Exam Scoring Tips & High-Yield Strategy:
1. State the Formal Definition of Functional Dependency (X -> Y): If two tuples agree on X, they must agree on Y (t1[X] = t2[X] implies t1[Y] = t2[Y]).
2. Draw the Normalization Decomposition Pipeline Diagram: Illustrate Unnormalized Table -> 1NF (Atomicity) -> 2NF (Full Functional Dependency) -> 3NF (No Transitivity) -> BCNF (Strict Determinants).
3. State the Two Golden Mathematical Properties: (1) Lossless Join Decomposition (R1 ⋈ R2 = R) and (2) Dependency Preservation (F1 ∪ F2 = F+).
4. Tabulate 1NF vs 2NF vs 3NF vs BCNF showing conditions and anomaly status for full 10/10 marks.`,
      key_terms: ["Normalization", "1NF", "2NF", "3NF", "BCNF", "Functional Dependency", "Partial Dependency", "Transitive Dependency", "Lossless Join", "Anomalies"],
      ai_diagram: {
        title: "Relational Database Normalization Decomposition Pipeline (1NF to BCNF)",
        mermaid_code: `flowchart TD
  UNF["Unnormalized Table (UNF)\\n(Contains Repeating Groups & Multi-valued Attributes)"] -->|Rule: Enforce Atomic Values| N1["1st Normal Form (1NF)\\n(Atomic Values Only; No Repeating Groups)"]
  N1 -->|Rule: Remove Partial Dependencies| N2["2nd Normal Form (2NF)\\n(Full Functional Dependency on Composite Primary Key)"]
  N2 -->|Rule: Remove Transitive Dependencies (X -> Y -> Z)| N3["3rd Normal Form (3NF)\\n(Non-key Attributes Depend Only on Primary Key)"]
  N3 -->|Rule: Every Determinant X MUST be a Super Key| BCNF["Boyce-Codd Normal Form (BCNF)\\n(Zero Redundancy from Functional Dependencies)"]`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions (Guaranteed 4 Diagram Marks):
1. Draw 5 vertical rectangular boxes in a sequence from top to bottom:
   - Box 1: [Unnormalized Form (UNF)]
   - Box 2: [1st Normal Form (1NF)]
   - Box 3: [2nd Normal Form (2NF)]
   - Box 4: [3rd Normal Form (3NF)]
   - Box 5: [Boyce-Codd Normal Form (BCNF)]
2. On the connecting arrows, write the exact elimination rule:
   - Arrow 1 -> 2: 'Eliminate Multi-valued Attributes & Repeating Groups'
   - Arrow 2 -> 3: 'Eliminate Partial Dependencies (Non-prime depends on subset of key)'
   - Arrow 3 -> 4: 'Eliminate Transitive Dependencies (X -> Y and Y -> Z)'
   - Arrow 4 -> 5: 'Ensure Every Determinant X in X -> Y is a Super Key'
3. Below the diagram, write: 'Figure: Normalization Hierarchy and Decomposition Flow'.`
      },
    },
  },

  // 4. Operating Systems: Process vs Thread & CPU Scheduling
  {
    pattern: /\b(cpu scheduling|scheduling algorithms?|gantt chart|round robin|fcfs|sjf|process and thread|process vs thread)\b/i,
    knowledge: {
      definition: "CPU Scheduling is the fundamental operating system mechanism by which the Short-Term Scheduler selects one ready process from the Ready Queue and allocates CPU execution time to it, maximizing CPU utilization, throughput, and responsiveness while minimizing waiting and turnaround times.",
      explanation: `Process vs. Thread and Core Scheduling Criteria:
• Process vs. Thread Fundamentals:
  - Process: A heavy-weight program in execution with its own dedicated virtual address space, memory pages, file descriptors, and Process Control Block (PCB).
  - Thread: A light-weight unit of CPU execution within a process that shares code, data, and OS resources with peer threads while maintaining its own Program Counter (PC), registers, and stack.
• Core CPU Scheduling Evaluation Criteria:
  - CPU Utilization: Percentage of time the CPU is actively executing tasks (target: 40% - 90%).
  - Throughput: Total number of processes completed per unit time.
  - Turnaround Time (TAT): Total interval from job submission to completion: TAT = Completion Time - Arrival Time.
  - Waiting Time (WT): Total duration a process waits in the ready queue: WT = TAT - Burst Time.
  - Response Time: Time taken from submission until the first CPU response is produced.`,
      how_it_works: `The Five Classical CPU Scheduling Algorithms:
1. First-Come, First-Served (FCFS): Non-preemptive. Allocates CPU strictly in order of arrival. Simple to implement but suffers from the Convoy Effect (short jobs stall behind one massive CPU-bound job).
2. Shortest Job First (SJF): Non-preemptive. Selects the process with the smallest CPU burst time. Proven mathematically optimal for producing the lowest average waiting time, but can cause Starvation for long processes.
3. Shortest Remaining Time First (SRTF): Preemptive version of SJF. Preempts the running process if a newly arriving process has a smaller remaining burst time.
4. Round Robin (RR): Preemptive. Allocates CPU in fixed cyclic time slices called Time Quantum (q, typically 10-50ms). Fair, starvation-free, and ideal for interactive time-sharing systems.
5. Priority Scheduling: Allocates CPU according to numerical priority. Solves starvation using Aging (gradually incrementing priority of processes waiting in the ready queue).`,
      example: `Worked Example with Gantt Chart Calculation:
• Consider 3 processes arriving at time 0: P1 (Burst = 24ms), P2 (Burst = 3ms), P3 (Burst = 3ms).
• FCFS Execution:
  - Gantt Chart: | P1 (0-24) | P2 (24-27) | P3 (27-30) |
  - Waiting Times: P1 = 0ms, P2 = 24ms, P3 = 27ms.
  - Average Waiting Time = (0 + 24 + 27) / 3 = 17.0 ms.
• SJF Execution:
  - Gantt Chart: | P2 (0-3) | P3 (3-6) | P1 (6-30) |
  - Waiting Times: P2 = 0ms, P3 = 3ms, P1 = 6ms.
  - Average Waiting Time = (0 + 3 + 6) / 3 = 3.0 ms! (An 82% reduction in waiting time!).`,
      comparison: `Technical Comparison: Process vs. Thread & Preemptive vs. Non-Preemptive Scheduling:
• Process vs. Thread Comparison:
  - Memory: Processes have independent memory address spaces; Threads share process address space.
  - Context Switching: Process context switching requires MMU/TLB flush (expensive); Thread switching only switches registers and stack (lightweight).
  - Failure Isolation: One crashed process does not affect others; One crashed thread can bring down the entire parent process.
• Preemptive vs. Non-Preemptive Scheduling:
  - Preemptive (Round Robin, SRTF): OS can forcibly interrupt running processes when a higher priority or time slice expires.
  - Non-Preemptive (FCFS, basic SJF): A process keeps the CPU until it voluntarily terminates or blocks for I/O.`,
      conclusion: `VTU 10-Mark Exam Scoring Tips & High-Yield Strategy:
1. Always draw a neat horizontal Gantt Chart with clear numeric time markers along the bottom axis.
2. Tabulate Process ID, Arrival Time, Burst Time, Completion Time, Turnaround Time (CT - AT), and Waiting Time (TAT - BT).
3. Explicitly write the formulas and show the step-by-step arithmetic for Average Turnaround Time and Average Waiting Time.
4. Contrast Preemptive vs Non-Preemptive scheduling and state the Aging mechanism used to overcome Starvation.`,
      key_terms: ["CPU Scheduling", "Process vs Thread", "Gantt Chart", "FCFS", "SJF", "Round Robin", "Turnaround Time", "Waiting Time", "Convoy Effect", "Aging"],
      ai_diagram: {
        title: "Operating System 5-State Process Lifecycle & Scheduling Flow",
        mermaid_code: `flowchart LR
  New["1. New\\n(Process Created)"] -->|Admitted| Ready["2. Ready Queue\\n(Waiting for CPU)"]
  Ready -->|Scheduler Dispatch| Running["3. Running\\n(Executing on CPU)"]
  Running -->|I/O or Event Wait| Waiting["4. Waiting / Blocked\\n(Waiting for I/O)"]
  Waiting -->|I/O Completion| Ready
  Running -->|Time Quantum Expired (RR)| Ready
  Running -->|Process Exit| Term["5. Terminated\\n(Resources Freed)"]`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions (Guaranteed 4 Diagram Marks):
1. Draw the 5-State Process Transition Diagram:
   - Draw 5 oval or rectangular states: [New], [Ready], [Running], [Waiting], [Terminated].
   - Draw arrows with labels:
     - New -> Ready: 'Admitted'
     - Ready -> Running: 'Scheduler Dispatch'
     - Running -> Waiting: 'I/O or Event Wait'
     - Waiting -> Ready: 'I/O Completion / Interrupt'
     - Running -> Ready: 'Interrupt / Time Slice Expired'
     - Running -> Terminated: 'Exit'
2. Below the lifecycle, draw a sample horizontal Gantt chart:
   [ | P1 (0 to 24) | P2 (24 to 27) | P3 (27 to 30) | ] with time tick marks.
3. Label: 'Figure: 5-State Process Lifecycle & CPU Scheduling Gantt Chart'.`
      },
    },
  },

  // 5. Operating Systems: Deadlock & Banker's Algorithm
  {
    pattern: /\b(deadlock|banker'?s|coffman|resource allocation graph|rag|safe state)\b/i,
    knowledge: {
      definition: "A Deadlock is a state in an operating system where a set of concurrent processes are permanently blocked because each process holds resources while waiting for other resources acquired and held by other processes in the set. Formally, a deadlock occurs if and only if all four Coffman conditions hold simultaneously.",
      explanation: `The Four Coffman Conditions for Deadlock:
• Mutual Exclusion: At least one resource must be held in a non-shareable mode (only one process can use it at a time).
• Hold and Wait: A process must currently hold at least one resource while waiting to acquire additional resources held by other processes.
• No Preemption: Resources cannot be forcibly confiscated from a process; they can only be released voluntarily after the process completes its task.
• Circular Wait: A closed chain of processes {P0, P1, ..., Pn} exists such that P0 waits for a resource held by P1, P1 waits for P2, and Pn waits for P0.`,
      how_it_works: `Deadlock Handling Strategies & Banker's Algorithm:
1. Deadlock Prevention: Eliminates at least one of the four Coffman conditions (e.g., imposing total resource ordering to eliminate Circular Wait).
2. Deadlock Avoidance (Banker's Algorithm): The OS evaluates every resource allocation request dynamically to verify that granting it keeps the system in a Safe State.
3. Banker's Safety Algorithm Steps:
   - Data Structures: Available[m], Max[n][m], Allocation[n][m], Need[n][m] = Max[n][m] - Allocation[n][m].
   - Initialize Work = Available, Finish[i] = false for all i.
   - Find an index i such that Finish[i] == false and Need[i] <= Work.
   - If found: Work := Work + Allocation[i], Finish[i] := true. Repeat until all processes finish.
   - If Finish[i] == true for all i, the system is in a Safe State, and the sequence of execution is a Safe Sequence.`,
      example: `Real-World Traffic Intersection Analogy:
• Imagine a 4-way street intersection where four cars enter simultaneously from North, South, East, and West.
• Each car occupies a quadrant of the intersection (Hold & Wait) and blocks the next quadrant (Mutual Exclusion).
• Cars cannot fly over each other (No Preemption), forming a circular standstill gridlock (Circular Wait). No car can move forward!`,
      comparison: `Deadlock Prevention vs. Avoidance vs. Detection & Recovery:
• Deadlock Prevention: Static approach; restricts how requests can be made, preventing Coffman conditions. High safety but lowers resource utilization.
• Deadlock Avoidance (Banker's): Dynamic approach; requires advance knowledge of maximum resource claims. Grants requests only if a safe sequence exists.
• Deadlock Detection & Recovery: Lets deadlocks occur, detects cycles via Resource Allocation Graphs, and recovers by process termination or resource preemption.`,
      conclusion: `VTU 10-Mark Exam Scoring Tips:
1. List all 4 Coffman conditions with clean headings for guaranteed opening marks.
2. Draw a Resource Allocation Graph (RAG) showing processes (circles), resources (rectangles with dots), assignment edges, and request edges forming a cycle.
3. State the Need Matrix formula: Need[i][j] = Max[i][j] - Allocation[i][j] and demonstrate a sample 3-process safe sequence.`,
      key_terms: ["Deadlock", "Banker's Algorithm", "Coffman Conditions", "Resource Allocation Graph", "Safe State", "Safe Sequence", "Need Matrix", "Mutual Exclusion"],
      ai_diagram: {
        title: "Deadlock 4 Coffman Conditions & Resource Allocation Cycle",
        mermaid_code: `flowchart TD
  subgraph Coffman ["Four Necessary Coffman Conditions"]
    C1["1. Mutual Exclusion\\n(Non-shareable resource)"]
    C2["2. Hold and Wait\\n(Holding 1 resource while requesting more)"]
    C3["3. No Preemption\\n(Cannot forcibly take resources)"]
    C4["4. Circular Wait\\n(Closed chain of waiting dependencies)"]
  end
  subgraph RAG ["Resource Allocation Graph (RAG) Deadlock Cycle"]
    P1["Process P1"] -->|Requests| R1["Resource R1"]
    R1 -->|Allocated to| P2["Process P2"]
    P2 -->|Requests| R2["Resource R2"]
    R2 -->|Allocated to| P1
  end`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions (Guaranteed 4 Diagram Marks):
1. Draw the Resource Allocation Graph (RAG):
   - Draw two circular nodes labeled 'P1' and 'P2' (Processes).
   - Draw two square boxes labeled 'R1' and 'R2' (Resources) each containing 1 small dot (instance).
   - Draw an arrow from P1 pointing to R1 ('P1 requests R1').
   - Draw an arrow from R1 pointing to P2 ('R1 allocated to P2').
   - Draw an arrow from P2 pointing to R2 ('P2 requests R2').
   - Draw an arrow from R2 pointing to P1 ('R2 allocated to P1').
2. Point out that the directed cycle P1 -> R1 -> P2 -> R2 -> P1 represents a Deadlock.
3. Label: 'Figure: Resource Allocation Graph Cycle and Coffman Conditions'.`
      },
    },
  },

  // 6. Data Structures: Binary Search Tree (BST)
  {
    pattern: /\b(binary search tree|bst|avl tree|tree traversal)\b/i,
    knowledge: {
      definition: "A Binary Search Tree (BST) is a hierarchical non-linear node-based data structure where each node has at most two children, and for every node, values in its left subtree are strictly smaller, while values in its right subtree are strictly greater.",
      explanation: `Core Properties and Rules of BST:
• Ordering Rule: Left_Child < Parent < Right_Child for every subtree.
• No Duplicate Keys: Standard BST implementations do not permit duplicate values.
• Dynamic Allocation: Nodes are allocated dynamically in memory with data, left pointer, and right pointer.
• Inorder Traversal Property: Inorder traversal (Left, Root, Right) of any valid BST always yields values in sorted ascending order.`,
      how_it_works: `Core Operations in BST:
1. Search Operation: Start at root. If target equals current node, return success. If target < current node, recurse into left subtree. Otherwise, recurse into right subtree. Time complexity is O(h) where h is height.
2. Insertion Operation: Traverse the tree using search rules until reaching a null pointer, then link the new node.
3. Deletion Operation: Handled in 3 distinct cases:
   - Case 1 (Leaf Node): Simply remove the node and set parent's pointer to null.
   - Case 2 (One Child): Replace the node with its only child.
   - Case 3 (Two Children): Find the node's Inorder Successor (smallest node in right subtree), copy its value, and delete the successor.`,
      example: `Practical Worked Example:
• Inserting keys: 50, 30, 70, 20, 40, 60, 80:
  - 50 becomes the Root.
  - 30 < 50 -> placed as Left child of 50.
  - 70 > 50 -> placed as Right child of 50.
  - 20 < 30 -> Left child of 30.
  - 40 > 30 -> Right child of 30.
  - Inorder Traversal (L-Root-R): 20, 30, 40, 50, 60, 70, 80 (perfectly sorted!).`,
      comparison: `BST vs. Array vs. Balanced Tree (AVL):
• Search Time: Sorted Array is O(log N) via binary search; Average BST is O(log N); Worst-case BST (skewed) degrades to O(N); AVL Tree guarantees O(log N).
• Insertion/Deletion: Array requires O(N) element shifts; BST requires O(h) with no memory shifting.
• Self-Balancing: Standard BST does not self-balance; AVL trees maintain balance factor in {-1, 0, +1} using tree rotations (LL, RR, LR, RL).`,
      conclusion: `VTU 10-Mark Exam Scoring Tips:
1. Draw a clean balanced BST diagram showing parent, left child, and right child relationships clearly labeled.
2. Write the 3 deletion cases clearly with neat diagrams for Case 3 (Inorder Successor replacement).
3. State time complexities for Search, Insert, and Delete: Best/Average = O(log N), Worst Case = O(N) when skewed.`,
      key_terms: ["Binary Search Tree", "BST", "Inorder Traversal", "Inorder Successor", "O(log N)", "Skewed Tree", "AVL Balancing"],
      ai_diagram: {
        title: "Binary Search Tree Structural Hierarchy & Ordering Property",
        mermaid_code: `flowchart TD
  Root["50 (Root)"] --> L["30 (Left Subtree < 50)"]
  Root --> R["70 (Right Subtree > 50)"]
  L --> LL["20"]
  L --> LR["40"]
  R --> RL["60"]
  R --> RR["80"]`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions (Guaranteed 4 Diagram Marks):
1. Draw a balanced binary tree with root 50 at the top.
2. Draw branches to left child 30 and right child 70.
3. From 30, draw branches to 20 (left) and 40 (right).
4. From 70, draw branches to 60 (left) and 80 (right).
5. Below the tree, write: 'Inorder Traversal (Left-Root-Right): 20, 30, 40, 50, 60, 70, 80 (Sorted Order)'.`
      },
    },
  },

  // 7. Computer Networks: OSI Reference Model
  {
    pattern: /\b(osi|osi model|open systems interconnection|7 layers?)\b/i,
    knowledge: {
      definition: "The Open Systems Interconnection (OSI) model is a 7-layer conceptual framework developed by ISO (International Organization for Standardization) to explain how data moves from a software application on one computer, across a physical network, to an application on another computer.",
      explanation: `Key Principles of the OSI Model:
• Layered Architecture: Breaks complex network communication into 7 modular, manageable layers so changes in one layer don't break others.
• Separation of Concerns: Top layers (7, 6, 5) handle user software and data presentation; bottom layers (4, 3, 2, 1) handle data transmission and routing.
• Encapsulation: As data moves down the stack, each layer appends its own control header (metadata).
• Peer-to-Peer Communication: Each layer logically communicates directly with its corresponding layer on the destination device using defined protocols.`,
      how_it_works: `The 7 Layers in Sequence (Top to Bottom):
1. Application Layer (Layer 7): Interface between user applications and the network (HTTP, DNS, FTP, SMTP).
2. Presentation Layer (Layer 6): Translates data formats, handles character encoding (ASCII/Unicode), and performs encryption/compression (SSL/TLS).
3. Session Layer (Layer 5): Establishes, maintains, synchronizes, and terminates active dialog sessions between computers.
4. Transport Layer (Layer 4): Provides end-to-end data delivery, error checking, flow control, and port addressing (TCP for reliability, UDP for speed).
5. Network Layer (Layer 3): Responsible for logical addressing (IP addresses) and path determination/routing packets across different networks.
6. Data Link Layer (Layer 2): Packages data into frames, handles physical hardware addressing (MAC addresses), and detects errors using CRC checksums.
7. Physical Layer (Layer 1): Converts frames into raw electrical, optical, or radio pulses to transmit over physical cables or air.`,
      example: `Real-World Postal Analogy & Web Scenario:
• Analogy: Think of sending a certified letter. You write the message (Application), translate it to English (Presentation), verify the recipient is available (Session), package it in an envelope with tracking (Transport), write the city and zip code (Network), specify the street mailbox address (Data Link), and the mail truck physically drives it over the road (Physical).
• Practical Web Scenario: When you enter "https://vtu.ac.in", your browser creates an HTTP GET request (L7), encrypts it via TLS (L6), opens a session socket (L5), breaks it into TCP segments with port 443 (L4), adds source and destination IP addresses into packets (L3), wraps it into Ethernet frames with router MAC (L2), and transmits electrical pulses through your Wi-Fi or Ethernet cable (L1).`,
      comparison: `Key Comparison: OSI Model vs. TCP/IP Model:
• Number of Layers: OSI defines 7 theoretical layers; TCP/IP defines 4 practical operational layers.
• Session & Presentation: In OSI, these are separate layers (5 and 6); in TCP/IP, their functions are merged into the Application layer.
• Design Approach: OSI was designed before protocols were written (pure theoretical standard); TCP/IP protocols were developed first and the model documented real implementations.
• Usage: OSI is used worldwide as the primary teaching and diagnostic benchmark; TCP/IP is the practical architecture running the global Internet.`,
      conclusion: `VTU 10-Mark Exam Scoring Tips:
1. Draw the neat 7-layer vertical diagram showing all layers in order (All People Seem To Need Data Processing).
2. State the primary Protocol Data Unit (PDU) for each layer: Application (Data), Transport (Segment), Network (Packet), Data Link (Frame), Physical (Bits).
3. Give at least two specific protocol examples for each layer to secure full 10/10 marks.`,
      key_terms: ["OSI Model", "7 Layers", "Encapsulation", "PDU", "TCP/IP", "Physical MAC", "Logical IP", "Port Addressing"],
      ai_diagram: {
        title: "OSI 7-Layer Reference Model & PDU Data Encapsulation",
        mermaid_code: `flowchart TD
  L7["Layer 7: Application (HTTP, DNS) — PDU: Data"] --> L6["Layer 6: Presentation (SSL/TLS, ASCII) — PDU: Data"]
  L6 --> L5["Layer 5: Session (Sockets, RPC) — PDU: Data"]
  L5 --> L4["Layer 4: Transport (TCP, UDP) — PDU: Segment"]
  L4 --> L3["Layer 3: Network (IPv4, IPv6, Routers) — PDU: Packet"]
  L3 --> L2["Layer 2: Data Link (Ethernet, MAC, Switch) — PDU: Frame"]
  L2 --> L1["Layer 1: Physical (Cables, Fiber, Bits) — PDU: Bits"]`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions (Guaranteed 4 Diagram Marks):
1. Draw 7 stacked horizontal boxes from Layer 7 (Top) to Layer 1 (Bottom).
2. Write the layer name, example protocols, and PDU next to each box:
   - Layer 7: Application (HTTP, DNS) -> PDU: Data
   - Layer 6: Presentation (SSL, ASCII) -> PDU: Data
   - Layer 5: Session (RPC, Sockets) -> PDU: Data
   - Layer 4: Transport (TCP, UDP) -> PDU: Segment
   - Layer 3: Network (IP, Routers) -> PDU: Packet
   - Layer 2: Data Link (MAC, Switches) -> PDU: Frame
   - Layer 1: Physical (Cables, Signals) -> PDU: Bits
3. Label: 'Figure: OSI 7-Layer Architecture and Protocol Data Units (PDU)'.`
      },
    },
  },

  // 7. Addressing Modes (BCS302 DDCO Module 3)
  {
    pattern: /^(?!.*\b(?:8051|arm)\b).*\b(addressing\s+modes?|addressing\s+mode|types\s+of\s+addressing\s+modes?)\b/i,
    knowledge: {
      definition: "An Addressing Mode specifies the rule or mechanism used by an instruction to determine the effective address (EA) of an operand. Operands may reside in immediate instruction data, CPU general-purpose registers, or system main memory. In VTU computer organization (BCS302), addressing modes balance instruction length, execution speed, and addressable memory space.",
      explanation: `Primary Addressing Modes in Computer Organization:
• Immediate Addressing: The operand is specified directly within the instruction itself (e.g., MOV AX, 0005H). No memory reference is needed; operand = A.
• Register Addressing: The operand is held in a specified CPU register (e.g., MOV AX, BX). Fast access without memory cycle; EA = R.
• Direct (Absolute) Addressing: The instruction contains the exact memory address of the operand (e.g., MOV AX, [1234H]). Requires one memory cycle; EA = A.
• Register Indirect Addressing: The register contains the memory address of the operand (e.g., MOV AX, [BX]). Enables pointer dereferencing and loop processing; EA = (R).
• Displacement (Based / Indexed) Addressing: Combines register contents with an offset value (e.g., EA = A + (R), MOV AX, [BX+SI+04H]). Widely used for record and array indexing.
• Relative Addressing: The operand address is calculated relative to the Program Counter (PC), useful for conditional branch instructions.
• Stack Addressing: Operands are implicitly pushed to or popped from the top of the stack pointed to by SP (e.g., PUSH, POP); EA = SP.`,
      how_it_works: `Effective Address (EA) Computation Pipeline:
1. Instruction Fetch: The CPU fetches the instruction word from memory into the Instruction Register (IR).
2. Mode Decoding: The decoder inspects the opcode and mode bits to identify which addressing scheme governs operand extraction.
3. Operand Address Evaluation:
   - Immediate: Operand extracted directly from instruction buffer.
   - Register: Data retrieved immediately from register file.
   - Direct: Address field copied to Memory Address Register (MAR).
   - Indirect / Displacement: ALU computes EA = Base Register + Index Register + Displacement, then issues memory read.
4. Data Ingestion: Operand loaded into MDR and presented to the ALU for execution.`,
      example: `Student-Friendly Daily Life Analogy:
• Immediate: Carrying exact change in your hand (Data is immediately ready).
• Register: Keeping your ID card in your front shirt pocket (Fast register access).
• Direct: Having a friend's full postal home address written on paper (Direct memory access).
• Register Indirect: Looking at a paper that tells you which drawer contains the key (Pointer dereferencing).
• Indexed / Displacement: A street address with an apartment number (Base street + displacement apartment).`,
      comparison: `Key Comparison: Addressing Modes Trade-offs:
• Immediate: Fast execution (0 extra memory references), but fixed operand size limited by instruction length.
• Register: Fastest execution (0 memory references), but limited by total number of CPU registers.
• Direct: Simple addressing logic, but consumes wide address bits in instruction word.
• Register Indirect: Large 2^N address space, requires 1 extra memory fetch cycle.
• Displacement: High flexibility for arrays/objects, requires ALU calculation for EA.`,
      conclusion: `VTU 10-Mark Exam Scoring Tips:
1. Give the formal definition: "The different ways in which the location of an operand is specified in an instruction."
2. Tabulate the 7 addressing modes with Mode Name, Algorithm (EA formula), and Assembly Example.
3. Draw a neat diagram showing how Effective Address is computed from Instruction -> Base/Index Register -> Main Memory to secure full 10/10 marks.`,
      key_terms: ["Addressing Modes", "Effective Address", "Immediate", "Register", "Direct", "Indirect", "Displacement", "Indexed", "BCS302"],
      ai_diagram: {
        title: "Effective Address (EA) Computation Across Addressing Modes",
        mermaid_code: `flowchart TD
  IR["Instruction Register (Opcode + Mode + Address/Reg)"] --> M1["Immediate: Operand = Value in Instruction"]
  IR --> M2["Register: Operand = Contents of Register R"]
  IR --> M3["Direct: Effective Address EA = Address Field A"]
  IR --> M4["Indirect: Effective Address EA = [Register R]"]
  IR --> M5["Displacement: Effective Address EA = Base R + Index + Offset"]
  M3 --> MEM["Main Memory Data Access"]
  M4 --> MEM
  M5 --> MEM`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions:
1. Draw the Instruction format box with fields: [Opcode | Mode | Reg / Address].
2. Draw branches connecting the instruction to Immediate (Direct Value), Register (CPU Reg), and Memory.
3. Draw memory box with pointers showing EA calculation for Direct, Register Indirect, and Indexed.
4. Label: 'Figure: Effective Address (EA) Generation in Computer Architecture'.`
      }
    }
  },

  // 8. K-Map Minimization (BCS302 DDCO Module 1)
  {
    pattern: /\b(k[\s\-_]*map|karnaugh\s+map|k[\s\-_]*map\s+minimization)\b/i,
    knowledge: {
      definition: "A Karnaugh Map (K-Map) is a graphical technique invented by Maurice Karnaugh in 1953 for simplifying Boolean expressions and minimizing gate-level digital logic circuits. It represents a Boolean function as a 2D grid of squares, where each square represents a unique minterm (for Sum of Products, SOP) or maxterm (for Product of Sums, POS). Adjacent squares differ by only a single literal (Gray code order), enabling visual identification and elimination of redundant variables.",
      explanation: `Principles of K-Map Minimization:
• Variable Sizes: 2-variable (4 squares), 3-variable (8 squares), 4-variable (16 squares), and 5-variable (32 squares).
• Gray Code Ordering: Rows and columns are indexed in Gray code sequence (00, 01, 11, 10) so that adjacent cells differ by exactly 1 bit.
• Grouping Rules:
  - Groups must contain 2^n squares (1, 2, 4, 8, 16 cells) called isolated cells, pairs, quads, and octets.
  - Groups must be rectangular or square and can wrap around the edges and corners (torus property).
  - Groups must be as large as possible to eliminate the maximum number of literal variables.
  - Every '1' must be included in at least one group. Overlapping is allowed and encouraged to form larger groups.
• Prime Implicants & Essential Prime Implicants (EPI): An implicant that cannot be combined into a larger group is a Prime Implicant; an EPI is a prime implicant that covers at least one '1' not covered by any other group.
• Don't Care Conditions (X): Input combinations that never occur or whose output is irrelevant. They can be treated as '1' if helpful to make larger groups, or as '0' otherwise.`,
      how_it_works: `Step-by-Step K-Map Minimization Procedure:
1. Construct the Grid: Draw the 2^n cell grid with Gray code labeling along rows and columns.
2. Plot Minterms: Place '1' in cells corresponding to given minterms Σm(...) and 'X' in don't care cells Σd(...). Fill remaining cells with '0'.
3. Form Octets and Quads: Locate and encircle the largest possible groups of adjacent 1s (octets of 8, quads of 4).
4. Form Pairs: Group any remaining isolated 1s into pairs (groups of 2).
5. Eliminate Redundant Groups: Retain all Essential Prime Implicants and eliminate any group whose 1s are already completely covered by other essential groups.
6. Write Minimal Boolean Expression: For each group, write the product term containing only literals whose values remain constant across all cells in that group. Combine terms with logical OR (+).`,
      example: `4-Variable K-Map Minimization Example:
• Minimize: F(A, B, C, D) = Σm(0, 2, 5, 7, 8, 10, 13, 15)
• Step 1: Group the 4 corners: m(0, 2, 8, 10) -> Variables B' and D' remain constant -> Term: B'D'.
• Step 2: Group the 4 center cells: m(5, 7, 13, 15) -> Variables B and D remain constant -> Term: BD.
• Step 3: Minimal Sum of Products (SOP): F = B'D' + BD = (B ⊙ D) (XNOR logic).`,
      comparison: `Key Comparison: Boolean Algebraic Laws vs. K-Map Minimization:
• Algebraic Simplification: Requires memorizing complex identities (De Morgan's, consensus theorem); prone to human oversight; difficult for > 3 variables.
• K-Map Method: Systematic visual pattern recognition; guaranteed minimal SOP/POS for up to 4-5 variables; easy to handle Don't Care conditions.
• Quine-McCluskey (Tabular) Method: Best for computer automation and > 5 variables where manual K-maps become unwieldy.`,
      conclusion: `VTU 10-Mark Exam Scoring Tips:
1. Draw the clear 16-cell grid with A B on row and C D on column labeled strictly in Gray code: 00, 01, 11, 10.
2. Mark minterm indices 0 to 15 inside the corner of each cell to prevent placement errors.
3. Clearly encircle groups with dashed loops and write the eliminated literals for each group to secure full 10/10 marks.`,
      key_terms: ["Karnaugh Map", "K-Map", "Gray Code", "Minterm", "Maxterm", "SOP", "POS", "Essential Prime Implicant", "Don't Care", "Quads"],
      ai_diagram: {
        title: "4-Variable K-Map Structure & Gray Code Indexing",
        mermaid_code: `flowchart TD
  K["4-Variable K-Map (16 Cells)"] --> R["Rows: AB (00, 01, 11, 10)"]
  K --> C["Cols: CD (00, 01, 11, 10)"]
  R --> G["Grouping Rules: 2^n Cells (Pairs=2, Quads=4, Octets=8)"]
  C --> G
  G --> EPI["Identify Essential Prime Implicants (EPI)"]
  EPI --> MIN["Minimal SOP Expression"]`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions:
1. Draw a 4x4 table (16 squares).
2. Label rows vertically on the left with AB: 00, 01, 11, 10.
3. Label columns horizontally at the top with CD: 00, 01, 11, 10.
4. Write minterm numbers: Row 0: 0,1,3,2; Row 1: 4,5,7,6; Row 2: 12,13,15,14; Row 3: 8,9,11,10.
5. Draw neat loops around minterms with arrows pointing to simplified product terms.`
      }
    }
  },

  // 9. ARM Processor Architecture (BCS402 Module 1 / 5)
  {
    pattern: /\b(arm\s+processor|arm\s+architecture|arm\s+registers?|cpsr)\b/i,
    knowledge: {
      definition: "ARM (Advanced RISC Machines) is a family of 32-bit reduced instruction set computer (RISC) processor architectures designed for high energy efficiency and high code density. In VTU BCS402, the ARM core is characterized by a Load/Store architecture, fixed 32-bit instruction length, 37 total registers, a Current Program Status Register (CPSR), conditional execution of almost all instructions, and an inline barrel shifter.",
      explanation: `Core Architectural Features of ARM Processors:
• Load/Store Architecture: Data processing instructions operate exclusively on CPU registers, never directly on memory. Dedicated LDR (Load) and STR (Store) instructions move data between registers and main memory.
• 37 Register Organization:
  - 31 General-Purpose 32-bit registers (R0 to R15) and 6 Status Registers.
  - Active registers in User mode: R0-R12 (general data), R13 (SP, Stack Pointer), R14 (LR, Link Register holding subroutine return address), R15 (PC, Program Counter).
  - Banked Registers: Specialized copies of R13, R14, and SPSR swapped in automatically during privilege exceptions.
• CPSR (Current Program Status Register):
  - Condition Flags (N, Z, C, V): Negative, Zero, Carry, oVerflow.
  - Control Bits: I & F interrupt disable bits, T bit (Thumb state: 16-bit instructions), and Mode bits M[4:0] defining processor operating mode.
• Operating Modes (7 Modes):
  - User mode (only unprivileged mode).
  - System mode (privileged, shares User registers).
  - Exception modes: FIQ (Fast Interrupt), IRQ (Standard Interrupt), Supervisor (SVC, entered on reset/SWI), Abort (memory access fault), Undefined (invalid instruction).
• Inline Barrel Shifter: Hardware unit in data path that can shift or rotate one of the source operands before it enters the ALU in the very same instruction cycle without performance penalty.`,
      how_it_works: `Instruction Execution & Pipeline Flow:
1. Fetch: Instruction fetched from memory using address in PC (R15).
2. Decode: Instruction decoded; registers read from register file.
3. Execute (ALU + Barrel Shifter): Second operand passed through barrel shifter (LSL, LSR, ASR, ROR) and combined with first operand in ALU.
4. Memory Access: If LDR/STR, data memory is accessed.
5. Write Back: Result written back to destination register.`,
      example: `Real-World Embedded Systems Application:
• Mobile & Automotive: ARM Cortex-A processors power 99% of global smartphones (Apple, Qualcomm Snapdragon) due to outstanding performance-per-watt efficiency.
• Embedded Microcontrollers: ARM Cortex-M cores power smartwatches, IoT nodes, and automotive ABS braking controllers requiring deterministic low-latency interrupt handling (FIQ).`,
      comparison: `Key Comparison: ARM (RISC) vs. x86 (CISC) Architecture:
• Instruction Length: ARM has fixed 32-bit (or 16-bit Thumb); x86 has variable 1 to 15 byte instructions.
• Memory Operations: ARM uses strict Load/Store; x86 allows ALU instructions directly with memory operands.
• Power Consumption: ARM is ultra-low power optimized for battery operation; x86 is optimized for peak desktop/server throughput.
• Register Count: ARM provides 37 registers (16 active); legacy x86 provides only 8 general-purpose registers.`,
      conclusion: `VTU 10-Mark Exam Scoring Tips:
1. Mention the Load/Store RISC philosophy and 32-bit data path.
2. Draw the 37-register banking table showing User, FIQ, IRQ, SVC, ABT, and UND modes.
3. Draw and label the CPSR format showing Condition Flags (N, Z, C, V) and Control Bits (I, F, T, Mode) for full 10/10 marks.`,
      key_terms: ["ARM", "RISC", "Load-Store", "37 Registers", "CPSR", "SPSR", "Link Register R14", "Barrel Shifter", "Thumb", "BCS402"],
      ai_diagram: {
        title: "ARM Processor Architecture Data Path & Barrel Shifter",
        mermaid_code: `flowchart TD
  RF["ARM Register File (R0 - R15)"] --> RN["Operand 1 (Rn)"]
  RF --> RM["Operand 2 (Rm)"]
  RM --> BS["Inline Barrel Shifter (LSL/LSR/ASR/ROR)"]
  RN --> ALU["Arithmetic Logic Unit (ALU)"]
  BS --> ALU
  ALU --> CPSR["CPSR Status Flags (N, Z, C, V)"]
  ALU --> WB["Write Back to Register Rd"]
  ALU --> MEM["Data Memory (Load / Store)"]`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions:
1. Draw Register File box with 32-bit registers R0-R15.
2. Draw two data buses: Bus A directly into ALU, Bus B into Barrel Shifter.
3. Draw Barrel Shifter output into ALU.
4. Draw ALU output branching into CPSR register and Destination Register Rd.
5. Label: 'Figure: ARM Core Datapath with Inline Barrel Shifter'.`
      }
    }
  },

  // 10. 8051 Microcontroller Architecture (BCS402 Module 1)
  {
    pattern: /\b(8051|8051\s+microcontroller|8051\s+architecture)\b/i,
    knowledge: {
      definition: "The Intel 8051 is a classic 8-bit Harvard architecture microcontroller fabricated with HMOS/CMOS technology. It integrates a central processing unit (CPU), memory (4KB on-chip ROM, 128 bytes on-chip RAM), four 8-bit bidirectional input/output ports (P0 to P3), two 16-bit timers/counters (T0, T1), a full-duplex UART serial communication interface, and a 5-source 2-priority level interrupt structure onto a single 40-pin IC chip.",
      explanation: `Core Hardware Features of 8051 Microcontroller:
• 8-Bit CPU: 8-bit ALU with registers A (Accumulator) and B (used for multiplication MUL and division DIV).
• Harvard Architecture: Separate physical memory spaces and buses for Program Memory (ROM) and Data Memory (RAM).
• Memory Organization:
  - On-Chip ROM: 4KB Program Memory (address range 0000H to 0FFFH). Expandable externally up to 64KB.
  - On-Chip RAM: 128 Bytes Data Memory (00H to 7FH):
    * Bank 0 to Bank 3: 32 bytes (00H to 1FH) containing 4 register banks of R0-R7 each.
    * Bit-Addressable RAM: 16 bytes (20H to 2FH) containing 128 individually addressable bits.
    * General-Purpose Scratchpad RAM: 80 bytes (30H to 7FH).
  - Special Function Registers (SFRs): 128 bytes address space (80H to FFH) containing P0-P3, PSW, SP, DPTR, TMOD, TCON, SCON, SBUF, IE, IP.
• Four 8-Bit I/O Ports:
  - Port 0 (Pins 32-39): Dual function: General I/O or multiplexed low-order Address/Data bus (AD0-AD7). Requires external pull-up resistors.
  - Port 1 (Pins 1-8): Dedicated 8-bit bidirectional I/O with internal pull-ups.
  - Port 2 (Pins 21-28): Dual function: General I/O or high-order address bus (A8-A15).
  - Port 3 (Pins 10-17): Dual function: General I/O or special functions (RxD, TxD, INT0, INT1, T0, T1, WR, RD).
• Timers / Counters: Two 16-bit timer/counter registers (Timer 0: TH0, TL0; Timer 1: TH1, TL1) configured via TMOD and controlled via TCON.
• Interrupt System: 5 vector interrupts: External INT0 (0003H), Timer 0 (000BH), External INT1 (0013H), Timer 1 (001BH), Serial Port RI/TI (0023H).`,
      how_it_works: `Operational Execution & Reset Flow:
1. System Reset: Bringing the RST pin high for 2 machine cycles resets PC to 0000H, SP to 07H, and all ports to FFH.
2. Instruction Fetch: PC points to code memory; 8-bit opcode fetched over data bus into Instruction Register (IR).
3. Decoding & Timing: Timing and control unit decodes instruction and generates control pulses across standard 12-oscillator-clock machine cycles.
4. Execution: Operands processed via ALU, flags updated in Program Status Word (PSW: CY, AC, F0, RS1, RS0, OV, P).`,
      example: `Embedded Appliance Applications:
• Washing Machines & Microwave Ovens: Reads keypad buttons via Port 1, runs internal timer delays via Timer 0, and switches relays and motors via Port 2.
• Digital Speedometers: Timer 0 counts optical sensor pulses per second while Timer 1 generates baud rate to transmit speed data to a display over UART.`,
      comparison: `Key Comparison: Microprocessor (e.g. 8086) vs. Microcontroller (8051):
• Integration: Microprocessor contains only CPU on chip (requires external RAM, ROM, Timers, I/O); 8051 integrates CPU, RAM, ROM, Timers, and I/O on a single IC.
• Application: Microprocessors are used in general-purpose computing (PCs); 8051 is designed for dedicated embedded control systems.
• Cost and Size: 8051 systems are compact, inexpensive, and have lower power consumption.`,
      conclusion: `VTU 10-Mark Exam Scoring Tips:
1. Draw the clear 8051 block diagram showing CPU, 128B RAM, 4KB ROM, Timers 0/1, Interrupt Logic, and Ports 0-3.
2. Draw the 128-byte RAM structure showing Register Banks (00H-1FH), Bit-addressable area (20H-2FH), and Scratchpad RAM (30H-7FH).
3. Tabulate Port 3 alternative pin functions (RxD, TxD, INT0, INT1, T0, T1, WR, RD) for guaranteed full 10/10 marks.`,
      key_terms: ["8051", "Microcontroller", "Harvard Architecture", "128 Bytes RAM", "4KB ROM", "Ports P0-P3", "Timers T0 T1", "SFR", "Interrupts", "BCS402"],
      ai_diagram: {
        title: "8051 Microcontroller Internal Architectural Block Diagram",
        mermaid_code: `flowchart TD
  CPU["8-Bit 8051 CPU (ALU, A, B, PSW)"] --> RAM["128 Bytes On-Chip RAM"]
  CPU --> ROM["4KB On-Chip Flash/ROM"]
  CPU --> TMR["Timers/Counters (T0, T1)"]
  CPU --> INT["5-Source Interrupt Control"]
  CPU --> UART["Full-Duplex Serial UART (RxD, TxD)"]
  CPU --> P0["Port 0 (AD0 - AD7)"]
  CPU --> P1["Port 1 (I/O)"]
  CPU --> P2["Port 2 (A8 - A15)"]
  CPU --> P3["Port 3 (Control / Dual Function)"]`,
        exam_sketch_guide: `VTU Exam Sheet Drawing Instructions:
1. Draw central rectangular CPU box with ALU, Accumulator, and PSW.
2. Draw attached blocks: 4KB ROM, 128B RAM, Timer 0 & 1, Serial Port, and Interrupt Unit.
3. Draw 4 parallel bus lines leading to Port 0, Port 1, Port 2, and Port 3.
4. Label: 'Figure: Internal Architecture of Intel 8051 Microcontroller'.`
      }
    }
  },
];

// ── Grounded Section Generator: Uses TOPIC_CATALOG or Syllabus Excerpt ───────
function generateDistinctSection(
  type: string,
  topic: string,
  subjectCode: string,
  question?: string,
  textbookExcerpt?: string
): { heading: string; text: string; key_terms: string[] } {
  const queryStr = `${topic} ${question || ""} ${subjectCode}`.toLowerCase();

  // Search catalog for a matching verified topic
  for (const entry of TOPIC_CATALOG) {
    if (entry.pattern.test(queryStr)) {
      const k = entry.knowledge;
      switch (type) {
        case "definition":
          return { heading: "Definition & Core Concept", text: k.definition, key_terms: k.key_terms };
        case "explanation":
          return { heading: "Key Principles & Theoretical Concepts", text: k.explanation, key_terms: k.key_terms };
        case "architecture":
        case "how_it_works":
          return { heading: "Architecture & Step-by-Step Working", text: k.how_it_works, key_terms: k.key_terms };
        case "example":
          return { heading: "Simple Real-World Example & Analogy", text: k.example, key_terms: k.key_terms };
        case "comparison":
          return { heading: "Key Differences & Technical Comparison", text: k.comparison, key_terms: k.key_terms };
        case "conclusion":
        default:
          return { heading: "VTU Exam Scoring Tips & Key Takeaways", text: k.conclusion, key_terms: k.key_terms };
      }
    }
  }

  // Factual grounding from syllabus excerpt when available
  if (textbookExcerpt && textbookExcerpt.trim().length > 80) {
    return {
      heading: "Syllabus Knowledge Reference",
      text: textbookExcerpt.slice(0, 600),
      key_terms: [topic, subjectCode],
    };
  }

  // Honest fallback: never fabricate educational content
  return {
    heading: "Syllabus Scope Notice",
    text: `Specific details for this section are covered directly in the ${subjectCode} module examination notes.`,
    key_terms: [topic],
  };
}

// ── Format Sanitization and Grounding Preservation (No Content Fabrication) ───
export function sanitizeAndEnrichAnswer(
  parsed: StructuredAnswer,
  subjectCode: string,
  question: string,
  textbookExcerpt?: string,
  marks?: number
): StructuredAnswer {
  const effectiveMarks = marks ?? parsed.marks ?? 10;
  let topicName = parsed.topic || question;
  const qLower = question.toLowerCase();

  // Assign canonical topic names based on actual query domain
  if (/\b(normalization|1nf|2nf|3nf|bcnf)\b/i.test(qLower)) {
    topicName = "Database Normalization";
    parsed.topic = "Database Normalization";
  } else if (/\b(ml|machine learning|types of ml|supervised|unsupervised|reinforcement)\b/i.test(qLower)) {
    topicName = "Machine Learning";
    parsed.topic = "Machine Learning";
  } else if (/\b(cloud|cloude|iaas|paas|saas)\b/i.test(qLower)) {
    topicName = "Cloud Computing";
    parsed.topic = "Cloud Computing";
  } else if (/\b(deadlock|banker'?s|coffman)\b/i.test(qLower)) {
    topicName = "Deadlock Handling & Banker's Algorithm";
    parsed.topic = "Deadlock Handling & Banker's Algorithm";
  } else if (/\b(scheduling|round robin|fcfs|sjf|process and thread|process vs thread)\b/i.test(qLower)) {
    topicName = "CPU Scheduling & Process Management";
    parsed.topic = "CPU Scheduling & Process Management";
  } else if (/\b(binary search tree|bst)\b/i.test(qLower)) {
    topicName = "Binary Search Tree";
    parsed.topic = "Binary Search Tree";
  } else if (/\b(osi|7 layers?)\b/i.test(qLower)) {
    topicName = "OSI Reference Model";
    parsed.topic = "OSI Reference Model";
  } else if (/\b(tcp[\s/]*ip)\b/i.test(qLower)) {
    topicName = "TCP/IP Protocol Suite";
    parsed.topic = "TCP/IP Protocol Suite";
  } else if (/\b(8051|8051\s+microcontroller)\b/i.test(qLower)) {
    topicName = "8051 Microcontroller Architecture";
    parsed.topic = "8051 Microcontroller Architecture";
  } else if (/\b(arm\s+processor|arm\s+architecture|arm\s+registers?|cpsr)\b/i.test(qLower)) {
    topicName = "ARM Processor Architecture";
    parsed.topic = "ARM Processor Architecture";
  } else if (/\b(addressing\s+modes?|addressing\s+mode)\b/i.test(qLower)) {
    topicName = "Addressing Modes";
    parsed.topic = "Addressing Modes";
  } else if (/\b(k[\s\-_]*map|karnaugh\s+map)\b/i.test(qLower)) {
    topicName = "K-Map Minimization";
    parsed.topic = "K-Map Minimization";
  }

  let finalSections: Section[] = [];
  const seenTexts: string[] = [];

  // Format sanitization on parsed sections from LLM
  if (Array.isArray(parsed.sections) && parsed.sections.length > 0) {
    for (const sec of parsed.sections) {
      let textVal = String(sec.text || "").trim();

      // Clean Markdown code blocks & raw quotes
      textVal = textVal.replace(/^```(?:json|markdown)?\s*/i, "").replace(/\s*```$/i, "").trim();

      const isPlaceholder = (
        !textVal ||
        textVal === "..." ||
        textVal === "…" ||
        textVal.length < 25 ||
        /^\s*\.{3,}\s*$/.test(textVal) ||
        (textVal.endsWith("...") && textVal.length < 60)
      );
      const isDuplicate = seenTexts.some(prev => textSimilarity(prev, textVal) > 0.75);

      if (isPlaceholder || isDuplicate) {
        continue; // Discard invalid or duplicate sections
      }

      finalSections.push({
        type: sec.type || "explanation",
        heading: sec.heading || "Key Points",
        text: textVal,
        key_terms: Array.isArray(sec.key_terms) && sec.key_terms.length ? sec.key_terms : [topicName, subjectCode],
        diagram_tag: sec.diagram_tag,
      });
      seenTexts.push(textVal);
    }
  }

  // If LLM returned zero valid sections
  if (finalSections.length === 0) {
    const queryStr = `${topicName} ${question} ${subjectCode}`.toLowerCase();
    let catalogMatched = false;

    // 1. Check verified catalog
    for (const entry of TOPIC_CATALOG) {
      if (entry.pattern.test(queryStr)) {
        const k = entry.knowledge;
        if (effectiveMarks <= 3) {
          finalSections = [
            { type: "definition", heading: "Definition & Core Concept", text: k.definition, key_terms: k.key_terms },
            { type: "explanation", heading: "Key Technical Principle", text: k.explanation.split("\n")[0] || k.explanation.slice(0, 200), key_terms: k.key_terms },
          ];
        } else if (effectiveMarks <= 6) {
          finalSections = [
            { type: "definition", heading: "Definition & Core Concept", text: k.definition, key_terms: k.key_terms },
            { type: "explanation", heading: "Key Principles & Theoretical Concepts", text: k.explanation, key_terms: k.key_terms },
            { type: "example", heading: "Practical Example & Application", text: k.example, key_terms: k.key_terms },
          ];
        } else if (effectiveMarks >= 12) {
          finalSections = [
            { type: "definition", heading: "Definition & Core Concept", text: k.definition, key_terms: k.key_terms },
            { type: "explanation", heading: "Theoretical Concepts & Mechanism", text: k.explanation, key_terms: k.key_terms },
            { type: "how_it_works", heading: "Architecture & Operational Workflow", text: k.how_it_works, key_terms: k.key_terms },
            { type: "example", heading: "Real-World Engineering Examples", text: k.example, key_terms: k.key_terms },
            { type: "comparison", heading: "Comparative Technical Analysis", text: k.comparison, key_terms: k.key_terms },
            { type: "conclusion", heading: "VTU High-Yield Exam Summary", text: k.conclusion, key_terms: k.key_terms },
          ];
        } else {
          finalSections = [
            { type: "definition", heading: "Definition & Core Concept", text: k.definition, key_terms: k.key_terms },
            { type: "explanation", heading: "Key Principles & Theoretical Concepts", text: k.explanation, key_terms: k.key_terms },
            { type: "how_it_works", heading: "Architecture & Step-by-Step Working", text: k.how_it_works, key_terms: k.key_terms },
            { type: "example", heading: "Simple Real-World Example & Analogy", text: k.example, key_terms: k.key_terms },
          ];
        }
        catalogMatched = true;
        break;
      }
    }

    // 2. Fallback to factual excerpt if available
    if (!catalogMatched && textbookExcerpt && textbookExcerpt.trim().length > 60) {
      finalSections = [
        {
          type: "explanation",
          heading: "Syllabus Knowledge Reference",
          text: textbookExcerpt.trim().slice(0, 1000),
          key_terms: [topicName, subjectCode],
        },
      ];
    } else if (!catalogMatched) {
      // 3. Honest insufficient-context state
      finalSections = [
        {
          type: "insufficient_context",
          heading: "Notice: Insufficient Context in Syllabus Knowledge Base",
          text: "I couldn't find enough relevant material in the selected VTU knowledge base to provide a reliable answer for this question.",
          key_terms: [],
        },
      ];
    }
  }

  parsed.sections = finalSections;


  // Attach AI Diagram: check catalog first, or synthesize dynamic Mermaid diagram
  if (!parsed.ai_diagram) {
    const queryStr = `${topicName} ${question || ""} ${subjectCode}`.toLowerCase();
    for (const entry of TOPIC_CATALOG) {
      if (entry.pattern.test(queryStr) && entry.knowledge.ai_diagram) {
        parsed.ai_diagram = entry.knowledge.ai_diagram;
        break;
      }
    }
  }

  if (!parsed.ai_diagram) {
    const howSec = finalSections.find(s => s.type === "how_it_works" || s.type === "architecture");
    parsed.ai_diagram = generateDynamicMermaidDiagram(topicName, howSec?.text, question);
  }

  parsed.sections = finalSections;
  return parsed;
}

// ── Synthesize Dynamic Mermaid Diagram for Any Engineering Topic ───────────────
function generateDynamicMermaidDiagram(topicName: string, stepText?: string, question?: string): AIDiagram {
  const qLower = (question || topicName).toLowerCase();

  // 1. Database Normalization
  if (/\b(normalization|1nf|2nf|3nf|bcnf)\b/i.test(qLower)) {
    return {
      title: "Database Normalization (1NF to BCNF) Decomposition Pipeline",
      mermaid_code: `flowchart TD
  UNF["Unnormalized Table (UNF)"] -->|Enforce Atomic Values| N1["1st Normal Form (1NF)"]
  N1 -->|Eliminate Partial Dependencies| N2["2nd Normal Form (2NF)"]
  N2 -->|Eliminate Transitive Dependencies| N3["3rd Normal Form (3NF)"]
  N3 -->|Every Determinant is Super Key| BCNF["Boyce-Codd Normal Form (BCNF)"]`,
      exam_sketch_guide: `VTU Exam Drawing Guide for Normalization:
1. Draw 5 rectangular boxes in a vertical column: UNF -> 1NF -> 2NF -> 3NF -> BCNF.
2. Label each connecting arrow with the exact decomposition rule.
3. Label: 'Figure: Normalization Decomposition Hierarchy'.`
    };
  }

  // 2. Machine Learning Types & Pipeline
  if (/\b(ml|machine learning|types of ml|supervised|unsupervised|reinforcement)\b/i.test(qLower)) {
    return {
      title: "Machine Learning Taxonomy & Pipeline Architecture",
      mermaid_code: `flowchart TD
  ML["Machine Learning"] --> S["Supervised Learning\\n(Classification & Regression)"]
  ML --> U["Unsupervised Learning\\n(Clustering & PCA)"]
  ML --> R["Reinforcement Learning\\n(Policy & Reward Agent)"]
  S --> D1["Model Training\\n(Loss Minimization)"]
  U --> D1
  R --> D1
  D1 --> D2["Evaluation & REST Serving"]`,
      exam_sketch_guide: `VTU Exam Drawing Guide for Machine Learning:
1. Draw a root box 'Machine Learning' branching into Supervised, Unsupervised, and Reinforcement Learning.
2. Under each branch, list the primary algorithms (SVM, K-Means, Q-Learning).
3. Connect all branches to a convergence box 'Model Training & Evaluation'.`
    };
  }

  // 3. CPU Scheduling & Process States
  if (/\b(scheduling|gantt|process|fcfs|sjf|round robin)\b/i.test(qLower)) {
    return {
      title: "Operating System 5-State Process Lifecycle & Scheduling",
      mermaid_code: `flowchart LR
  New["New"] -->|Admit| Ready["Ready Queue"]
  Ready -->|Dispatch| Running["Running (CPU)"]
  Running -->|I/O Wait| Waiting["Waiting / Blocked"]
  Waiting -->|I/O Done| Ready
  Running -->|Time Slice Expired| Ready
  Running -->|Exit| Term["Terminated"]`,
      exam_sketch_guide: `VTU Exam Drawing Guide for CPU Scheduling:
1. Draw 5 states: [New] -> [Ready Queue] -> [Running] -> [Terminated], with a [Waiting/Blocked] loop.
2. Draw a sample horizontal Gantt chart below: | P1 (0-24) | P2 (24-27) | P3 (27-30) |.
3. Label: 'Figure: Process State Transitions & Scheduling Flow'.`
    };
  }

  // Parse custom steps if available
  const steps: string[] = [];
  if (stepText) {
    const lines = stepText.split("\n");
    for (const l of lines) {
      const trimmed = l.trim();
      if (/^\d+\.\s*/.test(trimmed)) {
        const clean = trimmed.replace(/^\d+\.\s*/, "").split(":")[0].trim();
        if (clean.length > 2 && clean.length < 55) steps.push(clean.replace(/["'()]/g, ""));
      } else if (/^[•\-]\s*/.test(trimmed)) {
        const clean = trimmed.replace(/^[•\-]\s*/, "").split(":")[0].trim();
        if (clean.length > 2 && clean.length < 55) steps.push(clean.replace(/["'()]/g, ""));
      }
    }
  }

  let code = "";
  if (steps.length >= 3) {
    const nodes = steps.slice(0, 5).map((s, idx) => `S${idx + 1}["${idx + 1}. ${s}"]`);
    code = `flowchart TD\n  ${nodes.join(" --> ")}`;
  } else {
    code = `flowchart TD\n  A["1. Input Data & Parameter Ingestion"] --> B["2. Protocol / Algorithmic Processing"]\n  B --> C["3. Validation & State Control Check"]\n  C --> D["4. Output Dispatch & State Persistence"]`;
  }

  const sketchGuide = `VTU Exam Drawing Guide for ${topicName}:
1. Draw ${Math.max(3, Math.min(5, steps.length || 4))} sequential rectangular boxes vertically or horizontally.
2. Inside each box, clearly write the operational phase name and governing parameters.
3. Connect adjacent boxes with clear directional arrows indicating control and data flow.
4. Add clear input/output indicators at the start and end of the pipeline.
5. Below the diagram, write a 2-line caption: 'Figure: Architectural & Operational Flowchart of ${topicName}' for full 3-4 diagram marks.`;

  return {
    title: `${topicName} Architecture & Operational Flow`,
    mermaid_code: code,
    exam_sketch_guide: sketchGuide,
  };
}
