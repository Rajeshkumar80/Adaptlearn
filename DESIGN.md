# AdaptLearn — Design System (Academic Ledger)

## Product Context

AdaptLearn is an adaptive learning platform for VTU (Visvesvaraya Technological
University) students and their teachers. Students study BCS-scheme subjects
(Software Engineering, OOPS, CN, etc.) through module-mapped notes, an AI RAG
tutor, adaptive scheduling, tests, and a mastery tracker. Teachers manage
classes, notes, assignments, tests, and anti-cheat reports.

Two audiences, one system: student screens are warm and readable (long study
sessions), teacher screens are data-dense (analytics, cheat reports) but share
the same ledger DNA — no second app.

## Aesthetic Direction

**"Academic Ledger"** — the visual language of an exam hall answer sheet and a
well-kept marks register, translated to a modern EdTech product.

- Deep navy = the ink of a formal register cover; cream = the paper itself.
- Hairline rules (thin 1px lines) separate rows and sections, like ruled paper
  and ledger columns, instead of heavy shadows or filled cards.
- Brass/gold accents are reserved for marks, achievements, and mastery —
  gold is what an answer earns.
- Generous whitespace around text; dense, tabular rows for data.
- Decoration level: LOW — structure comes from rules, spacing, and
  typography, not gradients, blur, or glassmorphism.

This is a deliberate rejection of the generic shadcn look (gray-100 cards,
blue-500 buttons, 8px rounded corners everywhere). Nothing here uses default
component styling.

## Typography

| Role | Font | Weight / Style | Notes |
|---|---|---|---|
| Display / Hero | Fraunces (serif) | 600, optical size auto | Brand headlines, empty-state titles, big numbers |
| Headings h2–h4 | Fraunces | 500–600 | Section titles |
| Body | Public Sans (sans) | 400, 600 bold | All reading text |
| UI / Labels / Buttons | Public Sans | 500–600, 13px | Caps for nav/labels at 12px |
| Data / Tables / Mastery | Public Sans | 400 with `tabular-nums` | Ledger rows, scores, charts |
| Micro / Captions | Public Sans | 400, 12px, muted | Timestamps, meta, help text |

Scale (px): display 40 / h1 32 / h2 24 / h3 19 / h4 16 / body 15 / caption 13 /
micro 12. Line-height 1.5 body, 1.15 headings.

## Color

| Token | Hex | Use |
|---|---|---|
| `ink` | `#26221C` | Primary text |
| `ink-muted` | `#6E6656` | Secondary text, captions |
| `paper` | `#F7F3E8` | Page background (cream) |
| `paper-alt` | `#EFE9D9` | Raised panels, wells |
| `paper-deep` | `#E4DCC6` | Hover wells, table header fill |
| `hairline` | `#D8CDB4` | Borders, rules, dividers |
| `navy` | `#1E3A5F` | Primary actions, active nav |
| `navy-deep` | `#16283F` | Dark surfaces (splash, footer) |
| `navy-soft` | `#E9EEF5` | Selected rows, info tint |
| `brass` | `#A67C2E` | Marks, achievements, mastery, stars |
| `success` | `#2F6B4F` | Correct, mastered, positive deltas |
| `success-soft` | `#E4EDE7` | Success tint |
| `warning` | `#A05E1C` | Due soon, warnings |
| `warning-soft` | `#F3E8DA` | Warning tint |
| `error` | `#A03A2E` | Wrong, blocked, cheat flags |
| `error-soft` | `#F4E4E1` | Error tint |
| `info` | `#3E6D9C` | Neutral information, links |

Buttons: primary = navy; gold only for mastery/achievement actions.
Semantic text colors pair with soft tints (e.g. success-soft + success border).

## Spacing

Base unit **4px**. Scale: 2xs 2 / xs 4 / sm 8 / md 12 / lg 16 / xl 24 / 2xl 32 /
3xl 48 / 4xl 64. Page max-width 1200px; content column 720px on student screens
for reading length. Density: relaxed on student screens (study), compact on
teacher tables.

## Layout

- 1px hairline rules (`hairline` color) define cards, table rows, section
  dividers — cards are outlined, not shadowed (no default card look).
- Student app: left rail nav (brand mark, subject picker, screen links) on
  desktop; bottom tab bar on mobile. Teacher app: same rail, denser tables.
- Grid: 12-col desktop, 6-col tablet, 1-col mobile; cards snap to 4/8/12.
- Border radius: 2px (cards, buttons, inputs) — sharp ledger edges; pills
  (999px) only for badges/chips.

## Motion (Framer Motion)

- Page transitions: 180ms fade + 8px rise, ease-out.
- Cards/rows: hover 8px translateY? No — hover = hairline darkens + 1px
  translateY at 120ms. Subtle, no bounce.
- Skeletons: shimmer sweep 1.4s loop.
- Toasts: slide in from top-right, 240ms, auto-dismiss 4s.
- MCQ answer reveal: 200ms scale-in on the correct-answer banner.
- Reduced motion respected (`prefers-reduced-motion` → transitions off).

## Empty / Loading / Error States

Every list/table screen ships all three, designed:

- **Empty**: Fraunces title + one-line explainer + primary action (e.g. "No
  notes yet — upload the first module note").
- **Loading**: skeleton rows matching final layout (shimmer).
- **Error**: error color hairline panel, message, retry button.

## Decisions Log

| # | Decision | Why |
|---|---|---|
| 1 | Academic Ledger over dark ops-console | Master prompt requires a deliberate, non-generic direction; exam-register heritage fits VTU; screenshots/viva clarity |
| 2 | Hairline-outlined cards over shadowed cards | Ledger paper feel; avoids default-card look |
| 3 | Brass only for earned things | Gold-as-marks reinforces the mastery loop |
| 4 | Fraunces + Public Sans | Serif display gives identity; Public Sans is civic/government-grade readable |
| 5 | tabular-nums in all data tables | Ledger columns must align under a strict eye |
| 6 | Mobile bottom tabs for students | §6.0 mandates mobile-usable student screens; teachers desktop-first |
