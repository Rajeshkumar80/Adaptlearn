# BRMK557 — Research Methodology & IPR

## Module 2: Literature Review, Critical Reading & Citations

### Literature Review: Purpose and Types

- **Literature review** is a systematic, comprehensive survey and critical evaluation of published work (papers, patents, books, reports) relevant to the research problem.
- **Purposes of literature survey** (exam favorite):
  - Identify the research gap — what is known and what is still unknown.
  - Avoid reinventing the wheel / duplicating existing work.
  - Understand existing theories, methods, and tools available.
  - Refine and sharpen the research problem and hypothesis.
  - Learn from others' mistakes (pitfalls, limitations, failed approaches).
  - Provide background and justification for the proposed work.
  - Discover where to publish and who the key researchers/groups are.
- **Types of literature review**:
  - **Narrative (traditional) review**: descriptive, subjective summary by an expert; good for overview, weak on bias control.
  - **Systematic review**: follows a predefined, reproducible protocol (search strategy, inclusion/exclusion criteria, quality assessment); minimizes bias; used in evidence-based engineering/medicine.
  - **Meta-analysis**: statistical combination of quantitative results from multiple studies to get a pooled conclusion.
  - **Bibliometric review / Scientometric analysis**: uses citation counts and network tools to map the field's structure and trends.
- **Sources of literature** (hierarchy): Primary sources (original research papers, patents, theses — the raw findings) > Secondary sources (review articles, textbooks — summarize primary work) > Tertiary sources (encyclopedias, indices, databases).

### Searching Bibliographic Databases

- **Bibliographic databases** index scholarly publications with metadata (title, authors, abstract, keywords, citations) and provide search facilities.
- **Key engineering databases**:
  - **IEEE Xplore**: digital library of IEEE (Institute of Electrical and Electronics Engineers) — journals, conference proceedings, standards; strongest in electrical, electronics, computer engineering.
  - **Web of Science (WoS)**: curated multidisciplinary index by Clarivate; covers ~21,000 high-quality journals; used for citation analysis and impact metrics; strong on citation indexing (SCI, SCIE, ESCI).
  - **Scopus**: Elsevier's multidisciplinary abstract-and-citation database (~25,000+ journals); broader coverage than WoS; calculates CiteScore and author h-index.
  - **Google Scholar**: free web search engine for scholarly literature; broadest coverage but includes grey literature; no quality filter; good for initial exploration and citation chasing.
  - **Others**: ScienceDirect (Elsevier full-text), SpringerLink, ACM Digital Library, arXiv (preprints), DOAJ (open access), and patent databases (Espacenet, Google Patents, IP India).
- **Effective search strategy — the PICO / keywords approach**: break the problem into concepts; list synonyms, acronyms, and alternate spellings; combine with **Boolean operators**: AND (narrow — both terms), OR (broaden — either term), NOT (exclude).
- **Other search techniques**: phrase search ("renewable energy"), truncation/wildcard (optim* finds optimize, optimisation, optimizing), field-limited search (title, abstract, author), and **snowballing** (follow citations forward/backward) plus **citation chasing**.
- **Documenting the search**: record database, date, query string, and number of hits (PRISMA-style flowchart for systematic reviews) — reproducibility of the search is part of research integrity.
- **Analyzing prior art** (exam-relevant, also links to patent search in Module 3): after retrieving papers, classify them (theory / methods / applications / case studies), extract key results into a comparison table, note contradictions and gaps, and rank them by relevance and quality (venue, citations, recency).

### Critical Reading Strategies

- **Critical reading** means evaluating the content, methods, evidence, and conclusions of a paper instead of passively accepting them. Questions to ask: Is the problem real? Is the method valid? Are the data sufficient? Do the conclusions follow from the data?
- **Structure of a research paper to read** (reading order tip): Abstract → Conclusions → Figures/Tables → Introduction → Methods → Discussion → References.
  - Abstract: quick gate — is it relevant?
  - Introduction: the gap and contribution stated by the authors.
  - Methods: reproducibility — could you repeat the work?
  - Results: check if figures/claims are internally consistent.
  - Discussion/Conclusions: do claims overreach the data?
- **Key critical reading strategies**:
  - Skim first, then deep-read (two-pass approach).
  - Read actively — annotate, summarize each section in your own words.
  - Question assumptions and boundary conditions.
  - Check sample size, error bars, statistical tests used.
  - Compare the paper against its own stated contribution.
  - Verify reproducibility of results and availability of code/data.
  - Identify bias, conflicts, and overgeneralization.
- **Critical reading of algorithm/pseudocode papers** (PYQ 2024 Q3b):
  - Identify the algorithm's input/output and assumptions first.
  - Trace each line of pseudocode with a small concrete example by hand.
  - Check loop termination, edge cases (empty input, extreme values), and complexity claims (Big-O).
  - Verify invariants (properties that hold at each step, e.g., "the array remains sorted").
  - Compare with the baseline algorithm the authors compare against — is the comparison fair?
- **Reading mathematical formulas**:
  - Locate the notation table / list of symbols; read variable definitions before the equation.
  - Break the formula into parts: constants, variables, functions, and indices.
  - Give each term a physical/intuitive meaning ("this term is the damping force").
  - Substitute a numeric example to see the formula "move".
  - Check units and dimensions (dimensional analysis) — a formula with wrong units is wrong.
  - Identify the domain of validity (range of variables for which the formula holds).
  - Connect equation number references backward (what earlier equation was it derived from).
- **Reading figures/tables**: read axis labels and units first, look for legends and error bars, then extract the trend — never trust a figure caption alone.

### Citations: Functions and Styles

- **Citation** = formally acknowledging the source of an idea, fact, figure, or method used in your work. An in-text citation points to the full reference in the bibliography.
- **Functions of citations** (exam favorite):
  - Give credit to original authors (ethical/attribution function).
  - Provide evidence and authority for claims.
  - Let readers trace and verify sources (traceability).
  - Situate the work in the research landscape.
  - Demonstrate familiarity with the field (scholarship).
  - Support literature-review and impact measurement (bibliometrics).
- **Citation styles — IEEE vs APA** (PYQ 2024 Q3a):
  - **IEEE (Institute of Electrical and Electronics Engineers)**: numeric style — citations numbered [1], [2] in order of first appearance; references listed in citation order at the end; used in engineering, CS, electronics. In-text: "...as shown in [3]." No author names in text.
  - **APA (American Psychological Association)**: author-date style — (Deb, 2022) in text; references alphabetized at the end; used in social sciences, management, psychology.
- Reference format comparison (memorize for the exam):

| Source type | IEEE format | APA format |
| :--- | :--- | :--- |
| Journal paper | A. Author, B. Author, "Title of paper," *Journal Name*, vol. X, no. Y, pp. 1-10, Month Year. | Author, A. B. (Year). Title of article. *Journal Name*, *Vol*(issue), pages. |
| Conference paper | A. Author, "Title of paper," in *Proc. Conf. Name*, City, Country, Year, pp. 1-5. | Author, A. B. (Year). Title of paper. In *Proceedings of Conference* (pp. 1-5). |
| Book | A. Author, *Title of Book*, 2nd ed. City, Country: Publisher, Year. | Author, A. B. (Year). *Title of book* (2nd ed.). Publisher. |
| Book chapter | A. Author, "Title of chapter," in *Title of Book*, E. Editor, Ed. City: Publisher, Year, pp. 100-120. | Author, A. B. (Year). Title of chapter. In E. Editor (Ed.), *Title of book* (pp. 100-120). Publisher. |

- **IEEE details**: author initials before surname ("J. K. Sharma"), titles of papers in quotes, journal names in italics, abbreviated journal names, vol./no./pp. abbreviations, and "in" for conference proceedings.
- **APA details**: surname first, initials after ("Sharma, J. K."), only first letter of article title capitalized (sentence case), journal title italicized with title case, DOI (Digital Object Identifier) recommended for online sources.
- **Other styles**: Chicago, Harvard, Vancouver, ACM — know that IEEE and APA are the two exam styles.

### Citation Index and Bibliometric Metrics

- **Citation index** = a database that records which papers cite which other papers, allowing you to trace citation networks. Examples: Web of Science (SCI), Scopus, Google Scholar. Created originally by Eugene Garfield (Science Citation Index, 1964).
- **Uses of citation indexing**: find related work, measure impact, rank authors/journals, identify seminal papers, and evaluate institutions.
- **h-index (Hirsch index)**: An author has h-index h if h of their papers have at least h citations each, and the other papers have ≤ h citations each. Example: h-index 12 means 12 papers each cited ≥ 12 times. Intended to combine productivity (number of papers) and impact (citations). Calculated by sorting papers by descending citations and finding the largest h where citation count ≥ position number.
- **Worked example (PYQ 2023 Q3b)**: papers with citations 50, 30, 15, 8, 5, 2 → sorted: 50, 30, 15, 8, 5, 2. Position 5 has 5 citations (≥5 ✓); position 6 has 2 (<6 ✗) → h-index = 5.
- **i10-index**: number of papers with at least 10 citations each (Google Scholar metric). In the example above: papers with ≥10 citations = 3 → i10 = 3.
- **Journal Impact Factor (JIF)**: published annually in Journal Citation Reports (JCR, Clarivate); JIF of year Y = (citations in year Y to papers published in years Y-1 and Y-2) / (number of citable papers published in Y-1 and Y-2). A 2-year window metric of average citation rate per paper.
- **CiteScore** (Elsevier/Scopus): similar ratio but uses a 3-year window over a broader document set.
- **Limitations of metrics**: h-index ignores the distribution of citations (a paper with 1000 citations counts once), varies across fields (can't compare physics with CS), rewards quantity, and can be gamed (self-citation). JIF measures journal average, not individual paper quality.
- **Other metrics**: g-index, citation count, altmetrics (social media/press attention), and normalized indicators (field-weighted citation impact).
- Exam point: be able to *compute* h-index and i10-index from a citation list, and explain JIF's formula.

### Systematic Review Flow (for revision)

```
[DIAGRAM: Systematic literature review
Research question --> Define search protocol (databases, keywords, Boolean)
  --> Execute searches --> Screen titles/abstracts (inclusion/exclusion)
  --> Read full texts --> Quality assessment --> Data extraction
  --> Synthesis (narrative or meta-analysis) --> Report findings
Each step documented for reproducibility (PRISMA flowchart)
]
```

### Quick Revision Points (Module 2)

- Purposes of literature review: gap identification is the top reason.
- IEEE Xplore (electronics/CS), WoS and Scopus (citation indices), Google Scholar (free, broad).
- Boolean operators AND/OR/NOT; snowballing and citation chasing.
- Critical reading = evaluate not just read; trace pseudocode and check formula units.
- IEEE = numbered [1]; APA = author-date (Year); memorize both reference formats.
- h-index definition + calculation; i10-index = papers with ≥10 citations; JIF = 2-year average citation ratio.
