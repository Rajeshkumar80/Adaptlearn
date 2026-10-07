export interface VTUFormula {
  subject: string;
  module: number;
  topic: string;
  formulaName: string;
  formulaLatex: string;
  formulaPlainText: string;
  variables: { name: string; description: string; unit?: string }[];
  sampleCalculation: string;
  source: string;
}

const FORMULA_REGISTRY: VTUFormula[] = [
  // 1. Operating Systems: Effective Access Time (EAT) / Page Fault
  {
    subject: "BCS303",
    module: 4,
    topic: "Virtual Memory & Demand Paging",
    formulaName: "Effective Memory Access Time (EAT)",
    formulaLatex: "EAT = (1 - p) \\times m + p \\times S",
    formulaPlainText: "EAT = (1 - p) * m + p * S",
    variables: [
      { name: "p", description: "Page fault rate (probability: 0 <= p <= 1)", unit: "dimensionless" },
      { name: "m", description: "Memory access time", unit: "nanoseconds (ns)" },
      { name: "S", description: "Page fault service time", unit: "milliseconds (ms) or ns" }
    ],
    sampleCalculation: "Given m = 100 ns, S = 8 ms (8,000,000 ns), p = 0.001:\nEAT = (1 - 0.001) * 100 + 0.001 * 8,000,000 = 99.9 + 8,000 = 8099.9 ns (~8.1 µs).",
    source: "Silberschatz OS Concepts / BCS303 Module 4 Notes"
  },
  // 2. Computer Networks: Shannon Capacity
  {
    subject: "BCS502",
    module: 1,
    topic: "Physical Layer & Channel Capacity",
    formulaName: "Shannon Channel Capacity Formula",
    formulaLatex: "C = B \\times \\log_2(1 + SNR)",
    formulaPlainText: "C = B * log2(1 + SNR)",
    variables: [
      { name: "C", description: "Channel capacity", unit: "bits per second (bps)" },
      { name: "B", description: "Bandwidth of the channel", unit: "Hertz (Hz)" },
      { name: "SNR", description: "Signal-to-Noise Ratio (linear ratio)", unit: "dimensionless" }
    ],
    sampleCalculation: "Given Bandwidth B = 3000 Hz, SNR (dB) = 30 dB -> SNR (linear) = 10^(30/10) = 1000:\nC = 3000 * log2(1 + 1000) = 3000 * log2(1001) ≈ 3000 * 9.97 ≈ 29,900 bps.",
    source: "Forouzan Data Communications / BCS502 Module 1"
  },
  // 3. Microcontrollers: 8051 Timer Baud Rate
  {
    subject: "BCS402",
    module: 3,
    topic: "8051 Serial Communication & Timers",
    formulaName: "Timer 1 Baud Rate in Mode 2",
    formulaLatex: "BaudRate = \\frac{2^{SMOD}}{32} \\times \\frac{F_{osc}}{12 \\times (256 - TH1)}",
    formulaPlainText: "BaudRate = (2^SMOD / 32) * (Fosc / (12 * (256 - TH1)))",
    variables: [
      { name: "Fosc", description: "Crystal oscillator frequency (e.g. 11.0592 MHz)", unit: "Hz" },
      { name: "SMOD", description: "Baud rate doubler bit in PCON register (0 or 1)", unit: "bit" },
      { name: "TH1", description: "Timer 1 reload value in Mode 2 auto-reload", unit: "integer (0-255)" }
    ],
    sampleCalculation: "Given Fosc = 11.0592 MHz, SMOD = 0, Desired Baud = 9600:\n9600 = (1 / 32) * (11059200 / (12 * (256 - TH1)))\n256 - TH1 = 3 -> TH1 = 253 = 0FDH.",
    source: "Mazidi 8051 Microcontroller / BCS402 Module 3"
  },
  // 4. Digital Design: Boolean Minimization & Gray Code
  {
    subject: "BCS302",
    module: 1,
    topic: "Boolean Minimization",
    formulaName: "Gray Code to Binary Conversion",
    formulaLatex: "B_n = G_n, \\quad B_i = B_{i+1} \\oplus G_i",
    formulaPlainText: "Bn = Gn, Bi = Bi+1 XOR Gi",
    variables: [
      { name: "G", description: "Gray code bit vector", unit: "binary bits" },
      { name: "B", description: "Standard binary bit vector", unit: "binary bits" }
    ],
    sampleCalculation: "Convert Gray 1011 to Binary:\nB3 = G3 = 1\nB2 = 1 XOR 0 = 1\nB1 = 1 XOR 1 = 0\nB0 = 0 XOR 1 = 1\nBinary = 1101.",
    source: "Mano Digital Logic / BCS302 Module 1"
  }
];

export function retrieveFormulaForQuery(query: string, subjectCode?: string): VTUFormula | null {
  const q = query.toLowerCase();

  for (const f of FORMULA_REGISTRY) {
    if (subjectCode && f.subject !== subjectCode) continue;

    if (q.includes("eat") || q.includes("page-fault rate") || q.includes("page fault rate") || q.includes("access time")) {
      if (f.formulaName.includes("Effective Memory Access")) return f;
    }
    if (q.includes("shannon") || q.includes("channel capacity") || q.includes("snr")) {
      if (f.formulaName.includes("Shannon")) return f;
    }
    if (q.includes("baud rate") || q.includes("th1") || (q.includes("timer") && q.includes("8051"))) {
      if (f.formulaName.includes("Baud Rate")) return f;
    }
    if (q.includes("gray code") || q.includes("binary conversion")) {
      if (f.formulaName.includes("Gray Code")) return f;
    }
  }

  // Fallback to query keyword matching across registry
  for (const f of FORMULA_REGISTRY) {
    const topicTerms = f.topic.toLowerCase().split(/\s+/);
    if (topicTerms.some(t => t.length > 3 && q.includes(t))) {
      return f;
    }
  }

  return null;
}
