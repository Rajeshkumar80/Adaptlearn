export interface MCQQuestion {
  kind: "mcq";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// Clean any accidental "A. ", "A) ", "1. " from option strings
export function cleanOptionText(opt: any): string {
  return String(opt ?? "")
    .replace(/^[A-Ea-e1-5][\.\:\)\-\s]+\s*/, "")
    .trim();
}

// ── Fallback high-quality questions by topic domain ───────────────────────────
export function generateCuratedTopicQuestions(
  topic: string,
  subjectCode: string,
  question: string
): MCQQuestion[] {
  const tLower = (topic + " " + question).toLowerCase();

  // 1. OSI Model / Network Layers
  if (/\b(osi|tcp\/ip|network model|protocol suite|7 layers?)\b/i.test(tLower)) {
    return [
      {
        kind: "mcq",
        question: "How many layers are defined in the standard ISO/IEC Open Systems Interconnection (OSI) reference model?",
        options: [
          "7 distinct hierarchical layers",
          "4 practical operational layers",
          "5 hybrid protocol layers",
          "3 abstract physical layers"
        ],
        correctIndex: 0,
        explanation: "The OSI reference model defines exactly 7 hierarchical layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application."
      },
      {
        kind: "mcq",
        question: "Which layer of the OSI model is responsible for end-to-end communication, flow control, error recovery, and port-based multiplexing?",
        options: [
          "Network Layer (Layer 3)",
          "Data Link Layer (Layer 2)",
          "Transport Layer (Layer 4)",
          "Session Layer (Layer 5)"
        ],
        correctIndex: 2,
        explanation: "The Transport Layer (Layer 4) is responsible for process-to-process delivery, flow control, segmentation, and error recovery using protocols like TCP."
      },
      {
        kind: "mcq",
        question: "In the OSI model encapsulation hierarchy, at which layer is data packaged into 'Frames' with physical MAC addresses and CRC checksums?",
        options: [
          "Network Layer (Layer 3)",
          "Data Link Layer (Layer 2)",
          "Physical Layer (Layer 1)",
          "Presentation Layer (Layer 6)"
        ],
        correctIndex: 1,
        explanation: "The Data Link Layer (Layer 2) encapsulates network packets into frames, attaches source/destination MAC addresses, and appends a CRC error detection trailer."
      }
    ];
  }

  // 2. IoT / Internet of Things
  if (/\b(iot|internet of things|sensor|actuator|mqtt|coap)\b/i.test(tLower)) {
    return [
      {
        kind: "mcq",
        question: "What is the primary defining characteristic of an Internet of Things (IoT) system?",
        options: [
          "Network of physical objects embedded with sensors and software that communicate over the internet",
          "A closed offline mainframe computer running legacy batch jobs",
          "An isolated desktop application with no network connectivity",
          "A manual electrical switchboard without computational logic"
        ],
        correctIndex: 0,
        explanation: "IoT refers to physical objects embedded with sensors, processing ability, and communications software that connect and exchange data with other devices over the internet."
      },
      {
        kind: "mcq",
        question: "Which lightweight application protocol is most widely used for constrained IoT telemetry messaging?",
        options: [
          "MQTT (Message Queuing Telemetry Transport)",
          "FTP (File Transfer Protocol)",
          "BGP (Border Gateway Protocol)",
          "SMTP (Simple Mail Transfer Protocol)"
        ],
        correctIndex: 0,
        explanation: "MQTT is an extremely lightweight publish/subscribe network protocol designed specifically for constrained devices and low-bandwidth, high-latency networks."
      },
      {
        kind: "mcq",
        question: "In a standard 4-layer IoT architecture, which layer is directly responsible for interacting with physical environmental phenomena?",
        options: [
          "Sensing / Perception Layer",
          "Cloud Analytics Layer",
          "Business Logic Layer",
          "Presentation Formatting Layer"
        ],
        correctIndex: 0,
        explanation: "The Perception/Sensing Layer contains physical sensors (temperature, pressure, motion) and actuators that interface directly with the physical world."
      }
    ];
  }

  // 3. Machine Learning
  if (/\b(machine learning|supervised|unsupervised|classification|regression)\b/i.test(tLower)) {
    return [
      {
        kind: "mcq",
        question: `What distinguishes supervised learning from unsupervised learning in ${subjectCode}?`,
        options: [
          "Supervised learning trains on labeled input-output pairs, whereas unsupervised learning discovers patterns without labels",
          "Supervised learning does not require any training data",
          "Unsupervised learning only works on linear regression problems",
          "Supervised learning cannot be evaluated using loss metrics"
        ],
        correctIndex: 0,
        explanation: "Supervised learning models map inputs to known target labels, while unsupervised learning algorithms (like k-means) find intrinsic clustering without ground-truth labels."
      },
      {
        kind: "mcq",
        question: `Which of the following is a classic classification algorithm used in ${subjectCode}?`,
        options: [
          "Support Vector Machine (SVM)",
          "Ordinary Least Squares Regression",
          "K-Means Clustering",
          "Principal Component Analysis (PCA)"
        ],
        correctIndex: 0,
        explanation: "Support Vector Machines (SVM) find the optimal hyperplane that separates discrete classes with maximum margin."
      },
      {
        kind: "mcq",
        question: "What is overfitting in machine learning models?",
        options: [
          "When a model learns training noise and performs poorly on unseen test data",
          "When a model trains in fewer than 2 epochs",
          "When a model has too few parameters to capture linear relationships",
          "When training data is completely balanced across classes"
        ],
        correctIndex: 0,
        explanation: "Overfitting occurs when a model captures specific noise and idiosyncratic details in the training dataset, leading to poor generalization on test data."
      }
    ];
  }

  // Default dynamic questions derived from topic and subject
  return [
    {
      kind: "mcq",
      question: `What is the core definition and primary objective of ${topic} in ${subjectCode}?`,
      options: [
        `It provides structured principles and systematic functional execution for ${subjectCode} systems`,
        "It is an obsolete technique restricted exclusively to manual analog systems",
        "It eliminates the need for software protocols or network connectivity",
        "It is designed solely for hardware heat dissipation"
      ],
      correctIndex: 0,
      explanation: `${topic} establishes the foundational operational framework and standardized principles in the ${subjectCode} curriculum.`
    },
    {
      kind: "mcq",
      question: `Which fundamental principle governs the architecture of ${topic}?`,
      options: [
        "Modular decomposition, rigorous interface contracts, and fault tolerance",
        "Unrestricted random memory access without synchronization",
        "Complete removal of error detection mechanisms",
        "Exclusive reliance on single-threaded execution without abstraction"
      ],
      correctIndex: 0,
      explanation: `Modern engineering standards require ${topic} to follow modular decomposition and robust interface contracts to guarantee system stability.`
    },
    {
      kind: "mcq",
      question: `Why is thorough knowledge of ${topic} essential for VTU engineering examinations?`,
      options: [
        "It is frequently asked in university exams for 8 to 10 mark conceptual and architectural questions",
        "It has been deprecated from all university syllabi",
        "It requires only a single-word answer with no diagrams",
        "It is never evaluated in course outcome (CO) assessments"
      ],
      correctIndex: 0,
      explanation: `${topic} is a high-yield topic mapped to VTU Course Outcomes (CO) that routinely appears in university question papers.`
    }
  ];
}
