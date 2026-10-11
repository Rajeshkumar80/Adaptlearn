import { sanitizeMermaid } from "../src/app/student/tutor/MermaidDiagram";

const cases: [string, string][] = [
  // exact failing inputs from the user's screenshot
  ["flowchart TD\nApplication Layer --> Presentation Layer",
   'flowchart TD\nNApplication_Layer["Application Layer"] --> NPresentation_Layer["Presentation Layer"]'],
  ["flowchart TD\nPhysical --> Data Link", "flowchart TD\nPhysical --> NData_Link[\"Data Link\"]"],
  // already-valid code must pass through untouched
  ["graph TD\nA[Styled] --> B", "graph TD\nA[Styled] --> B"],
  ["graph TD\nA --> B", "graph TD\nA --> B"],
];

let failed = 0;
for (const [input, want] of cases) {
  const got = sanitizeMermaid(input);
  if (got !== want) { failed++; console.log(`FAIL\n  in:  ${JSON.stringify(input)}\n  got: ${JSON.stringify(got)}\n  want:${JSON.stringify(want)}`); }
  else console.log(`ok   ${JSON.stringify(got)}`);
}
process.exit(failed ? 1 : 0);
