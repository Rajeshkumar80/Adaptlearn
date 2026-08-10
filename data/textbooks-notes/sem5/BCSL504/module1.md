# BCSL504 — Web Technology Laboratory

## Module 1: HTML Fundamentals — Structural Tags and Tables

This module covers the foundation of web page authoring using HTML: block-level structural tags, text formatting, and the table model with row and column spanning. These are Program 1 and Program 2 of the BCSL504 lab list, mapped to CO1 (L3 Apply).

### Experiment 1: HTML Structural Tags & Formatting

**Aim**: Develop an HTML page using structural tags (`<h1>`–`<h6>`, `<p>`, `<hr>`, `<br>`, `<blockquote>`, `<pre>`) and text formatting styles (`<b>`, `<i>`, `<u>`, `<sub>`, `<sup>`, `<mark>`).

**Theory**

HTML (HyperText Markup Language) is the standard markup language used to structure content on the web. A document is composed of elements delimited by tags. Every well-formed HTML page follows the skeleton:

- `<!DOCTYPE html>` — declares HTML5 and is mandatory on the first line.
- `<html>` — the root element that wraps the entire document.
- `<head>` — holds metadata (title, charset, links to CSS) not rendered in the page body.
- `<body>` — holds all visible content.

Structural tags define the layout blocks of a page. Heading tags `<h1>` to `<h6>` denote six levels of document hierarchy; `<h1>` is the largest and used exactly once per page for the main title, while `<h6>` is the smallest. The heading level should reflect logical nesting, not just font size. The paragraph tag `<p>` creates a block of text with automatic margins above and below. The horizontal rule `<hr>` renders a thematic break as a horizontal line across the page. The line break `<br>` forces a new line within the same paragraph; it is a void element (no closing tag). The `<blockquote>` tag indents a long quotation as a separate block; browsers render it with increased left margin. The `<pre>` (preformatted) tag preserves whitespace and line breaks exactly as typed in the source, rendering content in a monospace font — useful for code listings and ASCII art.

Text formatting (inline) tags style content within a line. `<b>` and `<strong>` render bold text; `<i>` and `<em>` render italic text. `<u>` underlines text. The subscript tag `<sub>` renders text half a character below the baseline (e.g., H2O), and `<sup>` renders it half a character above (e.g., x2). `<mark>` highlights text with a yellow background, typically used to emphasize search results. The distinction between presentational (`<b>`, `<i>`) and semantic (`<strong>`, `<em>`) tags matters in exams: `<strong>` and `<em>` convey meaning to screen readers and search engines, while `<b>` and `<i>` only change appearance.

Element types: block-level elements (h1–h6, p, hr, blockquote, pre, div) start on a new line and occupy full available width; inline elements (b, i, u, sub, sup, mark, span) flow within the line and take only as much width as their content needs.

**Code**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Structure Demo</title>
</head>
<body>
  <h1>Web Technology Lab</h1>
  <h2>Program 1: Structural Tags</h2>

  <p>This is a normal paragraph. <br>This sentence is forced to a new line using &lt;br&gt;.</p>
  <hr>

  <blockquote>Great things are done by a series of small things brought together.</blockquote>

  <pre>
    function fact(n) {
      if (n <= 1) return 1;
      return n * fact(n - 1);
    }
  </pre>

  <p>
    Chemical formula: H<sub>2</sub>O&nbsp;&nbsp;
    Power: x<sup>2</sup>&nbsp;&nbsp;
    <b>bold</b> <i>italic</i> <u>underlined</u>
    <mark>highlighted text</mark>
  </p>
</body>
</html>
```

**Expected output**: A page showing the heading hierarchy, a two-line paragraph with a forced break, a horizontal rule, an indented quotation, a monospace code block preserving indentation, and a line mixing subscript, superscript, bold, italic, underline, and highlighted text.

### Experiment 2: HTML Tables & Timetable Layout

**Aim**: Create a class timetable webpage using `<table>`, `<tr>`, `<th>`, `<td>` tags, with `rowspan` and `colspan` attributes, styled using internal CSS for row highlighting.

**Theory**

HTML tables organize data into rows and columns. The core structure is: `<table>` wraps the table; `<tr>` defines a table row; `<th>` defines a header cell (rendered bold and centered by default, with semantic meaning); `<td>` defines a data cell. Tables may optionally use `<caption>` for a title, `<thead>`, `<tbody>`, and `<tfoot>` to group header, body, and footer rows — `<tbody>` should always follow `<thead>` when both are used, and this improves accessibility and styling control.

The two most important table attributes in this program are `rowspan` and `colspan`:
- `colspan="n"` makes a cell span `n` columns horizontally. It is used on a cell whose content spans several adjacent columns, as when a timetable entry covers a lab session of two consecutive hours.
- `rowspan="n"` makes a cell span `n` rows vertically, as when a single subject repeats across consecutive hours or a lunch break continues across columns.

When using spanning, the row must contain fewer `<td>`/`<th>` cells because the spanning cell occupies the positions of the merged cells. Exam questions frequently ask to count the number of `<tr>` and `<td>` tags after merging.

Internal CSS is written inside a `<style>` element in the `<head>`. To highlight rows, the `:nth-child(even)` pseudo-class is applied to `<tr>`: `tr:nth-child(even) { background-color: #f2f2f2; }` — this is the "zebra striping" pattern that improves readability of large tables. Alternately, a class like `.highlight` can be applied to specific `<tr>` elements with `background-color` and `font-weight` properties. Cell padding and border styling use the `border`, `border-collapse: collapse`, and `padding` properties; `border-collapse: collapse` merges adjacent cell borders into a single line.

Attributes `border` and `cellpadding` on the table tag are deprecated in HTML5 — styling must be done with CSS. Accessibility considerations: use `scope="col"` on header cells to associate them with their column.

**Code**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Class Timetable</title>
  <style>
    table { width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; }
    th, td { border: 1px solid #333; padding: 8px; text-align: center; }
    th { background-color: #4CAF50; color: white; }
    tr:nth-child(even) { background-color: #f2f2f2; }
    .lab { background-color: #ffe0b2; font-weight: bold; }
  </style>
</head>
<body>
  <h2>5th Semester CSE — Timetable</h2>
  <table>
    <tr>
      <th>Day / Period</th>
      <th>9:00–10:00</th>
      <th>10:00–11:00</th>
      <th>11:15–12:15</th>
      <th>12:15–1:15</th>
    </tr>
    <tr>
      <td>Monday</td>
      <td>DBMS</td>
      <td colspan="2">Web Tech Lab</td>
      <td>Maths</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td rowspan="2">DBMS</td>
      <td>CN</td>
      <td>Maths</td>
      <td>AI</td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td>AI</td>
      <td>CN</td>
      <td>DBMS Lab</td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td colspan="4" class="lab">Project Work</td>
    </tr>
  </table>
</body>
</html>
```

**Expected output**: A bordered timetable with a green header row, alternating grey zebra rows, "Web Tech Lab" spanning two columns, "DBMS" spanning two rows, and a full-width highlighted project-work row.

[DIAGRAM: Table cell spanning model
 col1 col2 col3 col4
 r1: th th th th
 r2: td td[colspan=2 -> two cells merged] td
 r3: td[rowspan=2 -> occupies r3+r4] td td td
 r4: (cell continues from r3) td td td
]
