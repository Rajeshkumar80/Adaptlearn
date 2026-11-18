import { Section } from "./answerSynthesizer";

/**
 * Deterministic, textbook-verified content for standard VTU questions where the
 * local 8B model is unreliable (multi-step normalization, TCP mechanisms).
 * This never invents citations or exam claims; it only replaces incorrect or
 * missing technical explanation with standard syllabus content.
 */

interface FD {
  lhs: string[];
  rhs: string[];
}

const clean = (value: string) => value.trim().replace(/[`'"]/g, "");

function parseRelation(question: string): { name: string; attrs: string[] } | null {
  const match = question.match(/\b([A-Z][A-Z0-9_]{2,})\s*\(([^)]+)\)/);
  if (!match) return null;
  const attrs = match[2].split(",").map(clean).filter(a => /^[A-Za-z_][A-Za-z0-9_]*$/.test(a));
  if (attrs.length < 3) return null;
  return { name: match[1], attrs };
}

function parseFDs(question: string, attrs: string[]): FD[] {
  const re = /\(?([A-Za-z_][A-Za-z0-9_]*(?:\s*,\s*[A-Za-z_][A-Za-z0-9_]*)*)\)?\s*(?:->|→|=>)\s*([A-Za-z_][A-Za-z0-9_]*(?:\s*,\s*[A-Za-z_][A-Za-z0-9_]*)*)/g;
  const fds: FD[] = [];
  for (const match of question.matchAll(re)) {
    const lhs = match[1].split(",").map(clean);
    const rhs = match[2].split(",").map(clean);
    if ([...lhs, ...rhs].every(a => attrs.includes(a))) fds.push({ lhs, rhs });
  }
  return fds;
}

function closure(base: string[], fds: FD[]): Set<string> {
  const result = new Set(base);
  let changed = true;
  while (changed) {
    changed = false;
    for (const fd of fds) {
      if (fd.lhs.every(a => result.has(a)) && !fd.rhs.every(a => result.has(a))) {
        fd.rhs.forEach(a => result.add(a));
        changed = true;
      }
    }
  }
  return result;
}

function candidateKeys(attrs: string[], fds: FD[]): string[][] {
  if (attrs.length > 12) return [];
  const all: string[][] = [];
  for (let mask = 1; mask < (1 << attrs.length); mask++) {
    const subset = attrs.filter((_, i) => mask & (1 << i));
    if (closure(subset, fds).size === attrs.length) all.push(subset);
  }
  all.sort((a, b) => a.length - b.length);
  return all.filter((key, index) =>
    !all.slice(0, index).some(smaller => smaller.every(a => key.includes(a)))
  );
}

const fmt = (attrs: string[]) => attrs.length === 1 ? attrs[0] : `(${attrs.join(", ")})`;

function relationName(lhs: string[]): string {
  if (lhs.length === 1) {
    return lhs[0].replace(/_?ID$/i, "").replace(/[^A-Za-z0-9]/g, "").toUpperCase() || "REL";
  }
  return "REL_" + lhs.map(a => a.replace(/_?ID$/i, "").toUpperCase()).join("_");
}

function relationLine(rel: { name: string; attrs: string[]; key: string[] }): string {
  return `${rel.name}(${rel.attrs.join(", ")}) — primary key: ${fmt(rel.key)}`;
}

function solveNormalization(question: string): Section[] | null {
  if (!/\b(normaliz|1\s*nf|2\s*nf|3\s*nf|functional\s+dependenc)/i.test(question)) return null;
  const relation = parseRelation(question);
  if (!relation) return null;
  const fds = parseFDs(question, relation.attrs);
  if (fds.length < 2) return null;

  const keys = candidateKeys(relation.attrs, fds);
  if (!keys.length) return null;
  const keyAttrs = new Set(keys.flat());
  const isPrime = (a: string) => keyAttrs.has(a);

  const partial = fds.filter(fd =>
    fd.rhs.some(a => !isPrime(a)) &&
    keys.some(key => fd.lhs.length < key.length && fd.lhs.every(a => key.includes(a)))
  );

  const partialGroups = new Map<string, { lhs: string[]; rhs: Set<string> }>();
  for (const fd of partial) {
    const id = fd.lhs.join(",");
    if (!partialGroups.has(id)) partialGroups.set(id, { lhs: fd.lhs, rhs: new Set() });
    fd.rhs.forEach(a => { if (!isPrime(a)) partialGroups.get(id)!.rhs.add(a); });
  }

  const transitive = fds.filter(fd =>
    fd.lhs.every(a => !isPrime(a)) && fd.rhs.some(a => !isPrime(a))
  );

  const rels2: { name: string; attrs: string[]; key: string[] }[] = [];
  for (const group of partialGroups.values()) {
    const reachable = closure([...group.lhs, ...group.rhs], fds);
    rels2.push({
      name: relationName(group.lhs),
      attrs: relation.attrs.filter(a => reachable.has(a)),
      key: group.lhs,
    });
  }
  const covered2 = new Set(rels2.flatMap(r => r.attrs));
  const residual2 = relation.attrs.filter(a => keys[0].includes(a) || !covered2.has(a));
  if (residual2.length) {
    rels2.push({ name: "ENROLLMENT", attrs: residual2, key: keys[0] });
  }

  const rels3: { name: string; attrs: string[]; key: string[] }[] = [];
  const groups3 = new Map<string, { lhs: string[]; rhs: Set<string> }>();
  for (const fd of fds) {
    const id = fd.lhs.join(",");
    if (!groups3.has(id)) groups3.set(id, { lhs: fd.lhs, rhs: new Set() });
    fd.rhs.forEach(a => groups3.get(id)!.rhs.add(a));
  }
  for (const group of groups3.values()) {
    rels3.push({
      name: group.rhs.has("Grade") ? "ENROLLMENT" : relationName(group.lhs),
      attrs: [...group.lhs, ...group.rhs],
      key: group.lhs,
    });
  }
  if (!rels3.some(r => keys.some(key => key.every(a => r.attrs.includes(a))))) {
    rels3.push({ name: "ENROLLMENT", attrs: [...keys[0]], key: keys[0] });
  }

  const partialLines = partial.length
    ? partial.map(fd => `• ${fmt(fd.lhs)} → ${fd.rhs.join(", ")} (a non-prime attribute depends on only part of the candidate key)`).join("\n")
    : "No partial dependency exists: every non-prime attribute depends on the whole candidate key.";

  const transitiveLines = transitive.length
    ? transitive.map(fd => `• ${fmt(fd.lhs)} → ${fd.rhs.join(", ")} (a non-prime attribute determines another non-prime attribute)`).join("\n")
    : "No transitive dependency exists.";

  return [
    {
      type: "explanation",
      heading: "Normalization Process",
      text: `Normalization analyzes a relation using its functional dependencies and candidate key to remove redundancy and insert/update/delete anomalies. The relation ${relation.name}(${relation.attrs.join(", ")}) is taken through 1NF, 2NF, and 3NF below.`,
    },
    {
      type: "explanation",
      heading: "Candidate Key",
      text: `A candidate key is a minimal attribute set whose closure contains every attribute of ${relation.name}. Computing closures:\n${keys.map(key => `• ${fmt(key)}+ = {${[...closure(key, fds)].join(", ")}}`).join("\n")}\nTherefore the candidate key is ${keys.map(fmt).join(" or ")}. Prime attributes: {${[...keyAttrs].join(", ")}}.`,
    },
    {
      type: "explanation",
      heading: "Partial Dependencies (2NF)",
      text: `A partial dependency is a non-prime attribute that depends on a proper subset of a candidate key. ${partialLines}`,
    },
    {
      type: "explanation",
      heading: "Transitive Dependencies (3NF)",
      text: `A transitive dependency is a non-prime attribute that depends on another non-prime attribute instead of directly on a candidate key. ${transitiveLines}`,
    },
    {
      type: "how_it_works",
      heading: "Decomposition to 2NF",
      text: `Remove the partial dependencies by grouping each determinant with the attributes it determines:\n${rels2.map(relationLine).join("\n")}\nEach relation is now in 2NF because no non-prime attribute depends on part of its key.`,
    },
    {
      type: "how_it_works",
      heading: "Decomposition to 3NF",
      text: `Remove the transitive dependencies by placing each non-prime determinant with the attribute it determines:\n${rels3.map(relationLine).join("\n")}\nEvery non-trivial dependency now has a superkey determinant or a prime dependent, so the decomposition is in 3NF.`,
    },
  ];
}

function tcpSections(sections: Section[]): Section[] {
  const verified: Section[] = [
    {
      type: "definition",
      heading: "TCP: Connection-Oriented Transport Protocol",
      text: "TCP (Transmission Control Protocol) is a connection-oriented, reliable, full-duplex transport-layer protocol. It provides process-to-process communication using 16-bit port numbers, delivers data as an ordered byte stream, and guarantees that every byte is received exactly once. Before any data is sent, TCP establishes a connection with a three-way handshake; after transfer it releases the connection with a four-way handshake.\nTCP services: stream delivery, reliable transfer with error detection and retransmission, flow control, congestion control, multiplexing/demultiplexing through ports, and full-duplex data transfer.",
    },
    {
      type: "how_it_works",
      heading: "Three-Way Handshake (Connection Establishment)",
      text: "1. The client sends SYN = 1 with its initial sequence number seq = x and enters SYN-SENT.\n2. The server replies SYN = 1, ACK = 1 with its own seq = y and ack = x+1, and enters SYN-RECEIVED.\n3. The client sends ACK = 1 with ack = y+1 and enters ESTABLISHED; the server enters ESTABLISHED when this ACK arrives.\nThe three steps synchronise both initial sequence numbers and confirm that both directions are usable. Two segments are not enough because each side must both send and acknowledge its own ISN; four are unnecessary because the third segment already carries the client's acknowledgement.",
    },
    {
      type: "how_it_works",
      heading: "Connection Termination (Four-Way Handshake)",
      text: "TCP closes each direction independently, so four segments are exchanged:\n1. The client sends FIN (seq = x) and enters FIN-WAIT-1.\n2. The server replies ACK (ack = x+1). The client-to-server direction is now closed.\n3. After sending its remaining data, the server sends its own FIN (seq = y).\n4. The client replies ACK (ack = y+1) and enters TIME-WAIT for 2 × MSL before closing; the server closes when it receives the final ACK.",
    },
    {
      type: "explanation",
      heading: "Flow Control in TCP",
      text: "TCP uses a sliding-window protocol. The receiver advertises a receive window (rwnd) in every segment, and the sender keeps at most min(cwnd, rwnd) unacknowledged bytes in flight. The window slides forward as ACKs arrive, so multiple segments can be outstanding. If the receiver advertises a zero window, the sender pauses and probes periodically until the window reopens. This prevents a fast sender from overrunning a slow receiver.",
    },
    {
      type: "explanation",
      heading: "Error Control in TCP",
      text: "TCP detects errors with the 16-bit checksum and recovers with acknowledgements and retransmission:\n• Cumulative ACKs confirm all bytes up to the acknowledgement number.\n• A retransmission timer resends an unacknowledged segment when it expires.\n• Three duplicate ACKs trigger fast retransmit without waiting for the timer.\n• Out-of-order segments are buffered and reordered by sequence number; selective ACK (SACK) can report the exact blocks received.\nCorrupted segments fail the checksum and are discarded, then retransmitted.",
    },
    {
      type: "explanation",
      heading: "Congestion Control in TCP",
      text: "TCP maintains a congestion window (cwnd) and uses four mechanisms:\n1. Slow Start: cwnd starts small and doubles every RTT until it reaches ssthresh.\n2. Congestion Avoidance: after ssthresh, cwnd grows by about one MSS per RTT (additive increase).\n3. Multiplicative Decrease: on loss, ssthresh is set to half of cwnd and cwnd is reduced.\n4. Fast Retransmit / Fast Recovery: three duplicate ACKs trigger an immediate retransmission, then cwnd is halved and recovered without restarting slow start.\nTogether these implement AIMD (additive increase, multiplicative decrease); modern variants include Reno, NewReno, and CUBIC.",
    },
  ];

  // Keep model sections on topics this answer does not cover (e.g. header fields),
  // but drop the mechanism sections we just wrote and raw reference dumps.
  const verifiedPattern = /tcp|definition|service|handshake|termination|teardown|flow control|error control|congestion|reference/i;
  const extra = sections.filter(section => !verifiedPattern.test(section.heading));
  return [...verified, ...extra];
}

function deadlockRagSection(sections: Section[]): Section[] {
  const result = [...sections];

  const conditions: Section = {
    type: "explanation",
    heading: "Four Necessary Conditions (Coffman Conditions) with Examples",
    text: "1. Mutual Exclusion — at least one resource is non-shareable, so only one process can use an instance at a time. Example: a printer can be held by only one process; a second process that needs it must wait.\n2. Hold and Wait — a process holds at least one resource while waiting for another. Example: P1 holds the printer and waits for a scanner that P2 is holding.\n3. No Preemption — a resource is released only voluntarily by its owner; the OS cannot forcibly take it away. Example: the OS cannot snatch the printer from P1, so P1 must finish its job and release it.\n4. Circular Wait — a closed chain of processes waits on each other. Example: P1 holds R1 and waits for R2, while P2 holds R2 and waits for R1, so neither can proceed.",
  };
  const conditionsIndex = result.findIndex(
    s => /mutual exclusion/i.test(s.text) && /circular wait/i.test(s.text)
  );
  if (conditionsIndex >= 0) result[conditionsIndex] = conditions;
  else result.push(conditions);

  const detailedRag: Section = {
    type: "explanation",
    heading: "Resource Allocation Graph (RAG) and Deadlock Detection",
    text: "A Resource Allocation Graph has process nodes (circles) and resource nodes (rectangles, with one dot per instance). A request edge Pi → Rj means process Pi is waiting for resource Rj; an assignment edge Rj → Pi means an instance of Rj is allocated to Pi.\n• If the graph has no cycle, no deadlock exists.\n• If a cycle exists and every resource in the cycle has a single instance, the cycle is a deadlock.\n• If resources have multiple instances, a cycle is only a necessary condition. Deadlock is then detected by graph reduction (repeatedly grant requests that can be satisfied and remove the resulting processes) or by a wait-for graph and safety check.\nRecovery terminates a process or preempts resources from a cycle.",
  };
  const ragIndex = result.findIndex(s => /resource allocation graph|\brag\b/i.test(s.heading));
  if (ragIndex >= 0) result[ragIndex] = detailedRag;
  else result.push(detailedRag);

  const comparison: Section = {
    type: "differentiate",
    heading: "Deadlock Prevention vs Deadlock Avoidance",
    text: "Deadlock Prevention removes one of the four necessary conditions by design:\n• Mutual exclusion — deny the condition for sharable resources (e.g. read-only files).\n• Hold and wait — a process must request all resources before it starts, or release everything before requesting more.\n• No preemption — resources are preempted from a waiting process and rolled back.\n• Circular wait — impose a total ordering on resource types and request them in increasing order.\nDeadlock Avoidance keeps the conditions but grants a request only when the resulting state is a safe state:\n• The system knows each process's maximum future claim in advance.\n• Banker's algorithm runs the safety algorithm on every request; a request is granted only if the state remains safe.\n• The resource-allocation graph algorithm uses claim edges and converts them to assignment edges only for safe requests.\nDifference: prevention is static and conservative (low resource utilisation), while avoidance is dynamic and needs advance maximum claims plus a safety check per request (better utilisation, more overhead).",
  };
  const comparisonIndex = result.findIndex(s => /prevention.*avoidance|avoidance.*prevention/i.test(s.heading));
  if (comparisonIndex >= 0) result[comparisonIndex] = comparison;
  else result.push(comparison);

  return result;
}

function kMeansSections(question: string): Section[] | null {
  const points: { name: string; x: number; y: number }[] = [];
  for (const m of question.matchAll(/\bP(\d+)\s*\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/g)) {
    points.push({ name: `P${m[1]}`, x: Number(m[2]), y: Number(m[3]) });
  }
  const centroids: { name: string; x: number; y: number }[] = [];
  for (const m of question.matchAll(/\bC(\d+)\s*\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/g)) {
    centroids.push({ name: `C${m[1]}`, x: Number(m[2]), y: Number(m[3]) });
  }
  if (points.length < 2 || centroids.length < 2) return null;

  const num = (value: number) => {
    const rounded = Math.round(value * 100) / 100;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
  };
  const dist = (p: { x: number; y: number }, c: { x: number; y: number }) =>
    Math.sqrt((p.x - c.x) ** 2 + (p.y - c.y) ** 2);

  const assignments = points.map(p => {
    let best = 0;
    for (let k = 1; k < centroids.length; k++) {
      if ((p.x - centroids[k].x) ** 2 + (p.y - centroids[k].y) ** 2 <
          (p.x - centroids[best].x) ** 2 + (p.y - centroids[best].y) ** 2) best = k;
    }
    return best;
  });

  const assignmentLines = points.map((p, i) => {
    const terms = centroids.map(c => {
      const dx = p.x - c.x;
      const dy = p.y - c.y;
      const squared = dx * dx + dy * dy;
      return `d(${p.name}, ${c.name}) = √[(${num(p.x)} − ${num(c.x)})² + (${num(p.y)} − ${num(c.y)})²] = √${num(squared)} = ${num(Math.sqrt(squared))}`;
    });
    return `• ${p.name}(${num(p.x)}, ${num(p.y)}): ${terms.join("; ")} → assigned to ${centroids[assignments[i]].name}`;
  });

  const memberLines = centroids.map((c, k) => {
    const members = points.filter((_, i) => assignments[i] === k).map(p => p.name);
    return `• ${c.name}: {${members.length ? members.join(", ") : "empty"}} → ${members.length} point${members.length === 1 ? "" : "s"}`;
  });

  const updated = centroids.map((c, k) => {
    const members = points.filter((_, i) => assignments[i] === k);
    if (members.length === 0) return { name: c.name, x: c.x, y: c.y, text: `• ${c.name}′ = ${c.name} = (${num(c.x)}, ${num(c.y)}) (unchanged: no points assigned)` };
    const sumX = members.reduce((s, p) => s + p.x, 0);
    const sumY = members.reduce((s, p) => s + p.y, 0);
    const nx = sumX / members.length;
    const ny = sumY / members.length;
    return {
      name: c.name,
      x: nx,
      y: ny,
      text: `• ${c.name}′ = ((${members.map(p => num(p.x)).join(" + ")}) / ${members.length}, (${members.map(p => num(p.y)).join(" + ")}) / ${members.length}) = (${num(sumX)} / ${members.length}, ${num(sumY)} / ${members.length}) = (${num(nx)}, ${num(ny)})`,
    };
  });

  const summary = centroids.map((c, k) => {
    const members = points.filter((_, i) => assignments[i] === k).map(p => p.name);
    return `• Cluster ${k + 1}: points {${members.length ? members.join(", ") : "empty"}}, new centroid ${updated[k].name}′ = (${num(updated[k].x)}, ${num(updated[k].y)})`;
  });

  return [
    {
      type: "explanation",
      heading: "K-Means Algorithm",
      text: "K-Means partitions n data points into K clusters by minimising the within-cluster sum of squared distances. The steps are:\n1. Initialise K centroids (given here, or chosen from the data).\n2. Assign each point to the centroid with the smallest Euclidean distance.\n3. Recompute each centroid as the mean of the points assigned to it.\n4. Repeat steps 2 and 3 until the centroids no longer move (convergence).\nEuclidean distance between a point (x, y) and a centroid (a, b) is d = √[(x − a)² + (y − b)²]. For n points, K clusters, d dimensions, and i iterations, the cost is O(n · K · d · i).",
    },
    {
      type: "how_it_works",
      heading: "Step 1: Initial Centroids",
      text: centroids.map(c => `• ${c.name} = (${num(c.x)}, ${num(c.y)})`).join("\n"),
    },
    {
      type: "calculation",
      heading: "Step 2: Assign Each Point to the Nearest Centroid",
      text: assignmentLines.join("\n"),
    },
    {
      type: "how_it_works",
      heading: "Step 3: Cluster Members After Assignment",
      text: memberLines.join("\n"),
    },
    {
      type: "calculation",
      heading: "Step 4: Recompute the Centroids",
      text: `Each new centroid is the arithmetic mean of its assigned points:\n${updated.map(u => u.text).join("\n")}`,
    },
    {
      type: "explanation",
      heading: "Result After the First Iteration",
      text: `${summary.join("\n")}\nThese new centroids are used for the next iteration. The algorithm stops when the assignments no longer change or the centroids stop moving.`,
    },
  ];
}

export function applyVerifiedSolutions(question: string, sections: Section[]): Section[] {
  if (/\b(normaliz|1\s*nf|2\s*nf|3\s*nf)\b/i.test(question)) {
    const solved = solveNormalization(question);
    if (solved) return solved;
  }
  if (/\b(k[\s-]?means|kmeans)\b/i.test(question)) {
    const solved = kMeansSections(question);
    if (solved) return solved;
  }
  let result = sections;
  if (/\b(tcp|transmission control protocol)\b/i.test(question)) result = tcpSections(result);
  if (/\bdeadlock\b/i.test(question)) result = deadlockRagSection(result);
  return result;
}
