# AdaptLearn — Design System (Campus Notice Board)

## Product Context

AdaptLearn is an adaptive learning platform for VTU (Visvesvaraya Technological
University) students and their teachers. Students study BCS-scheme subjects
(Software Engineering, OOPS, CN, etc.) through module-mapped notes, an AI RAG
tutor, adaptive scheduling, tests, and a mastery tracker. Teachers manage
classes, notes, assignments, tests, and anti-cheat reports.

Two audiences, one system: student screens are warm and readable (long study
sessions), teacher screens are data-dense (analytics, cheat reports) but share
the same notice-board DNA — no second app.

## Aesthetic Direction

**"Campus Notice Board"** — every screen is a real cork board with paper
sheets pinned to it: the notice board outside the VTU admin office, translated
to a modern EdTech product.

- The board itself is deep green cork (`board`); everything sits on it as a
  pinned paper sheet (`paper`, or a colored `sheet-*` variant).
- Sheets are held by red-headed push pins (`pin-red`) — physical hardware,
  never drop shadows or glass.
- Statuses are rubber stamps (`stamp`): rotated, uppercase, ink-edged
  (APPROVED · DUE SOON · MASTERED) instead of pill badges.
- Forms are pencil-underlined lines on paper (`.form-field`), not boxed
  inputs.
- Brass is reserved for earned things — marks, achievements, mastery: gold is
  what an answer earns.
- Decoration level: LOW — structure comes from the board, the sheets, the
  pins and the stamps; no gradients, no blur, no glassmorphism, no shadows.

This is a deliberate rejection of the generic shadcn look (gray-100 cards,
blue-500 buttons, 8px rounded corners everywhere). Nothing here uses default
component styling.

## Typography

| Role | Font | Weight / Style | Notes |
|---|---|---|---|
| Display / Notice headers | Oswald (sans, condensed) | 500–700, UPPERCASE | Notice titles, section headers, big numbers |
| Body | Public Sans (sans) | 400, 600 bold | All reading text |
| UI / Labels / Buttons | Public Sans | 500–600, 13px | Caps for nav/labels at 12px, tracked |
| Data / Tables / Mastery | Public Sans | 400 with `tabular-nums` | Ledger rows, scores, charts |
| Micro / Captions | Public Sans | 400, 12px, muted | Timestamps, meta, help text |

Scale (px): display 40 / h1 32 / h2 24 / h3 19 / h4 16 / body 15 / caption 13 /
micro 12. Line-height 1.5 body, 1.15 headings.

## Color

| Token | Hex | Use |
|---|---|---|
| `board` | `#1C4A2F` | The cork board — page background, primary actions, active nav |
| `board-deep` | `#123325` | Dark board surfaces (splash, footer) |
| `board-soft` | `#2A6140` | Hover wells on the board, selected rows |
| `ink` | `#221E17` | Primary text on paper |
| `ink-muted` | `#6B6052` | Secondary text, captions |
| `paper` | `#FAF6EA` | Default sheet (content cards, chat bubbles) |
| `paper-alt` | `#F1EBDD` | Raised wells, table header fill |
| `paper-deep` | `#E7DFCC` | Hover wells |
| `hairline` | `#CBBF9F` | Sheet borders, rules, dividers |
| `sheet-yellow` | `#F9E8A8` | Highlight notice sheets (KPIs, alerts) |
| `sheet-pink` | `#F5D5CC` | Secondary notice sheets (warnings, notices) |
| `sheet-blue` | `#DCE7F2` | Info sheets |
| `sheet-green` | `#DFEBDD` | Success sheets |
| `pin-red` | `#C4453A` | Pins, delete/destructive actions |
| `pin-deep` | `#8F2E24` | Pin shadow/detail |
| `brass` | `#A67C2E` | Marks, achievements, mastery, stars |
| `success` | `#2F6B4F` | Correct, mastered, positive deltas |
| `warning` | `#A05E1C` | Due soon, warnings |
| `error` | `#A03A2E` | Wrong, blocked, cheat flags |
| `info` | `#3E6D9C` | Neutral information, links |

Legacy aliases: `navy` → `board`, `navy-deep` → `board-deep`,
`navy-soft` → soft board tint (`#DFE9E0`) — old class names still resolve.

Buttons: primary = board green; gold only for mastery/achievement actions.

## Pins, Sheets, Stamps

- **Pin**: 8px red-headed pin (circle + highlight + brass stem) rendered in
  the top-left/center-top of pinned cards; `pin-drop` animation on mount.
- **Sheets**: `ledger-card` = paper sheet with hairline border + optional
  `sheet-yellow|pink|blue|green` variant + optional `pinned` (pin shown).
- **Stamp**: uppercase, 2px border, rotated −4°–3°, ink-colored
  (`.stamp` + tone); lands with `stamp-land` animation.
- Rules: one stamp per sheet max; pins only on the top edge; a sheet may be
  pinned without a stamp, never stamped without a sheet.

## Spacing

Base unit **4px**. Scale: 2xs 2 / xs 4 / sm 8 / md 12 / lg 16 / xl 24 / 2xl 32 /
3xl 48 / 4xl 64. Page max-width 1200px; content column 720px on student screens
for reading length. Density: relaxed on student screens (study), compact on
teacher tables.

## Layout

- Green board background everywhere; content lives in pinned paper sheets
  (`.ledger-card`), defined by hairline borders — no shadows, no default-card
  look.
- Student app: left board rail nav (painted brand sign, subject picker,
  screen links pinned in) on desktop; bottom tab bar on mobile. Teacher app:
  same rail, denser tables.
- Grid: 12-col desktop, 6-col tablet, 1-col mobile; cards snap to 4/8/12.
- Border radius: 2–3px (sheets, buttons, inputs) — sharp paper edges; pills
  (999px) only for the stamp dot/skeleton pulse.

## Motion (Framer Motion)

- Page/notice entry: 180ms fade + 8px rise, ease-out.
- Pins: `pin-drop` (pin falls from above, 220ms, once, on pinned sheets).
- Stamps: `stamp-land` (scale 1.15 → 1 with ink blur settle, 200ms).
- Cards/rows hover: hairline darkens + 1px translateY at 120ms. No bounce.
- Skeletons: shimmer sweep 1.4s loop.
- Toasts: slide in from top-right, 240ms, auto-dismiss 4s.
- MCQ answer reveal: 200ms scale-in on the correct-answer banner.
- Reduced motion respected (`prefers-reduced-motion` → all of the above
  become instant).

## Empty / Loading / Error States

Every list/table screen ships all three, designed:

- **Empty**: Oswald notice title + one-line explainer + primary action
  (e.g. "No notes pinned yet — upload the first module note").
- **Loading**: skeleton rows matching final layout (shimmer).
- **Error**: error-ink hairline sheet, message, retry button.

## Decisions Log

| # | Decision | Why |
|---|---|---|
| 1 | Campus Notice Board over Academic Ledger | Impeccable direction roll (concept-seed `8c76c9d9`, assigned index 3); board+sheets+pins+stamps is distinctive, instantly readable, and carries the campus/VTU story; screenshots/viva clarity |
| 2 | Pinned sheets over shadowed cards | Physical board metaphor; pins replace shadow as the depth cue |
| 3 | Rubber stamps over pills | Statuses (APPROVED/DUE/MASTERED) gain weight and personality |
| 4 | Oswald + Public Sans | Condensed uppercase display reads like printed notice headers; Public Sans is civic/government-grade readable |
| 5 | Board-green navy alias | `navy` tokens kept as aliases so all legacy class usage resolves to the board |
| 6 | tabular-nums in all data tables | Notice-board rosters must align under a strict eye |
| 7 | Mobile bottom tabs for students | §6.0 mandates mobile-usable student screens; teachers desktop-first |
| 8 | Functionality preserved across redesign | All routes, APIs, flows unchanged — look only (product constraint) |
