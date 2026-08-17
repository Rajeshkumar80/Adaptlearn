# BCSL504 — Web Technology Laboratory

## Module 3: HTML5 Semantic Layout and JavaScript Programming

This module covers the HTML5 semantic layout model with CSS Grid, and the first JavaScript program — an interactive scientific calculator. These are Program 5 and Program 6 of the BCSL504 lab list, mapped to CO1, CO2, and CO3 (L3 Apply).

### Experiment 5: HTML5 Semantic Layout

**Aim**: Create a webpage layout incorporating HTML5 semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) with responsive CSS Grid layout.

**Theory**

HTML5 introduced semantic elements that describe the meaning of page regions, replacing generic `<div>` soup. This improves accessibility (screen readers navigate landmarks), SEO, and code readability. The semantic tags and their roles:

- `<header>` — introductory content at the top of a page or a section: logo, page title, tagline.
- `<nav>` — the primary navigation links (menus). A document may have several navs; the main one is typically inside or next to the header.
- `<main>` — the dominant unique content of the page; must appear only once per document and must not be nested inside header, nav, footer, or aside.
- `<section>` — a thematic grouping of related content, normally with a heading; a chapter or a topic area.
- `<article>` — a self-contained composition (blog post, news story, comment) that makes sense on its own and could be syndicated.
- `<aside>` — content tangentially related to the main content: sidebars, ads, related links, pull quotes.
- `<footer>` — closing information: copyright, contact, sitemap links, author info.

The nested structure is typically: header and nav on top, then a container with main (holding sections and articles) and an aside sidebar, then the footer. `<div>` remains valid for purely presentational grouping with no semantic meaning. An `<h1>`–`<h6>` heading should introduce each section/article.

CSS Grid is a two-dimensional layout model (rows and columns simultaneously), complementary to Flexbox (one-dimensional). To create a grid: `display: grid` on the container, then define tracks with `grid-template-columns: 250px 1fr 300px` (fixed sidebar, flexible main, fixed sidebar) and `grid-template-rows`. The `fr` unit distributes remaining free space — `1fr` takes all space left after fixed tracks. `gap` sets gutters. Placement can be explicit per item using `grid-column: 1 / 3` (span from column line 1 to line 3) or via grid areas: `grid-template-areas: "header header" "nav main" "footer footer"` and each child gets `grid-area: header` etc. Responsiveness uses media queries: `@media (max-width: 768px)` redefines `grid-template-areas` to stack all regions into one column, so the layout degrades gracefully on mobile. The classic page skeleton uses `min-height: 100vh` with `grid-template-rows: auto 1fr auto` so the footer stays at the bottom on long pages.

**Code**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .page {
      display: grid;
      grid-template-columns: 1fr 250px;
      grid-template-rows: auto 1fr auto;
      grid-template-areas: "header header" "main aside" "footer footer";
      gap: 10px;
      min-height: 100vh;
    }
    header { grid-area: header; background: #2c3e50; color: white; padding: 15px; }
    nav { background: #34495e; color: white; padding: 10px; }
    main { grid-area: main; padding: 15px; }
    article { background: #ecf0f1; padding: 10px; margin-bottom: 10px; }
    section { border-left: 4px solid #4CAF50; padding-left: 10px; }
    aside { grid-area: aside; background: #f8f9fa; padding: 15px; }
    footer { grid-area: footer; background: #2c3e50; color: white; text-align: center; padding: 10px; }

    @media (max-width: 768px) {
      .page { grid-template-columns: 1fr; grid-template-areas: "header" "nav" "main" "aside" "footer"; }
    }
  </style>
</head>
<body>
  <div class="page">
    <header>
      <h1>Tech Blog</h1>
      <nav><a href="#">Home</a> | <a href="#">Tutorials</a> | <a href="#">About</a></nav>
    </header>
    <main>
      <section><h2>Latest</h2></section>
      <article>
        <h2>HTML5 Semantics</h2>
        <p>Semantic tags describe the meaning of content regions.</p>
      </article>
      <article>
        <h2>CSS Grid</h2>
        <p>Grid is the two-dimensional layout model of modern CSS.</p>
      </article>
    </main>
    <aside>
      <h3>Related Links</h3>
      <p>Archives, tags, and advertisement space.</p>
    </aside>
    <footer>Copyright 2026 Tech Blog</footer>
  </div>
</body>
</html>
```

**Expected output**: A responsive two-column page — header with nav on top, article list in the main area, sidebar on the right, footer at the bottom; below 768px width all regions stack vertically in a single column.

[DIAGRAM: HTML5 semantic page skeleton (desktop)
 +----------------------------------+
 | header (logo + nav)              |
 +-----------------+----------------+
 | main            | aside          |
 |  section        | (sidebar)      |
 |  article        |                |
 |  article        |                |
 +-----------------+----------------+
 | footer (copyright)               |
 +----------------------------------+
 On mobile: header, nav, main, aside, footer stacked top to bottom
]

### Experiment 6: JavaScript Dynamic Scientific Calculator

**Aim**: Develop an interactive dynamic calculator using JavaScript that performs basic arithmetic (sum, difference, product, division) along with advanced functions (square root, power, modulus, factorial).

**Theory**

JavaScript is a client-side, interpreted scripting language embedded in HTML via the `<script>` tag; it enables dynamic behavior and DOM manipulation. An interactive calculator requires three components: an HTML display and button grid, a JavaScript handler that captures button clicks and stores the running expression, and an evaluation step.

Event handling: each button registers a click listener — either via `onclick` attribute or `addEventListener("click", fn)`. The current expression is kept in a string variable; digit and operator buttons append their value to it, and the display (`document.getElementById("display").value`) is updated after every click. This design pattern (state in a variable, UI mirrors state) is central to client-side scripting.

Evaluation strategies: `eval(expression)` is simple but a security risk (arbitrary code execution) and is rejected by strict mode; the exam-approved approach is to evaluate the four arithmetic operations manually using the operator and the two operands — parse with `parseFloat()`, then branch on the operator. Advanced functions are pure functions: `Math.sqrt(x)` returns the square root; `Math.pow(base, exp)` (or the `**` operator) computes power; `%` is the modulus operator returning the integer remainder of division (e.g., `17 % 5 === 2`); factorial is computed recursively (`n! = n * (n-1)!` with base case `0! = 1! = 1`) or iteratively with a loop. Division by zero and the factorial of negative numbers must be guarded: display "Error" rather than crashing or yielding `Infinity`.

Data conversion notes: `parseFloat(str)` converts the display string to a number, preserving decimals; `Number(x)` is an alternative. The output display uses `toFixed(n)` when a fixed number of decimals is required. `Math` is a built-in object holding mathematical constants (`Math.PI`, `Math.E`) and functions (`Math.sqrt`, `Math.pow`, `Math.floor`, `Math.ceil`, `Math.round`, `Math.abs`, `Math.random`, `Math.min`, `Math.max`).

**Code**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Scientific Calculator</title>
  <style>
    table { margin: auto; border-collapse: collapse; }
    td { padding: 5px; }
    input[type="text"] { width: 100%; font-size: 20px; text-align: right; }
    button { width: 60px; height: 40px; font-size: 16px; }
  </style>
</head>
<body>
  <h2 style="text-align:center">Scientific Calculator</h2>
  <table>
    <tr><td colspan="4"><input type="text" id="display" disabled></td></tr>
    <tr>
      <td><button onclick="appendToDisplay('7')">7</button></td>
      <td><button onclick="appendToDisplay('8')">8</button></td>
      <td><button onclick="appendToDisplay('9')">9</button></td>
      <td><button onclick="appendToDisplay('/')">/</button></td>
    </tr>
    <tr>
      <td><button onclick="appendToDisplay('4')">4</button></td>
      <td><button onclick="appendToDisplay('5')">5</button></td>
      <td><button onclick="appendToDisplay('6')">6</button></td>
      <td><button onclick="appendToDisplay('*')">*</button></td>
    </tr>
    <tr>
      <td><button onclick="appendToDisplay('1')">1</button></td>
      <td><button onclick="appendToDisplay('2')">2</button></td>
      <td><button onclick="appendToDisplay('3')">3</button></td>
      <td><button onclick="appendToDisplay('-')">-</button></td>
    </tr>
    <tr>
      <td><button onclick="appendToDisplay('0')">0</button></td>
      <td><button onclick="appendToDisplay('.')">.</button></td>
      <td><button onclick="calculate()">=</button></td>
      <td><button onclick="appendToDisplay('+')">+</button></td>
    </tr>
    <tr>
      <td><button onclick="sqrt()">sqrt</button></td>
      <td><button onclick="power()">x^y</button></td>
      <td><button onclick="modulo()">mod</button></td>
      <td><button onclick="factorial()">n!</button></td>
    </tr>
    <tr><td colspan="4"><button style="width:100%" onclick="clearDisplay()">C</button></td></tr>
  </table>

  <script>
    function appendToDisplay(value) {
      document.getElementById("display").value += value;
    }
    function clearDisplay() {
      document.getElementById("display").value = "";
    }
    function calculate() {
      const expr = document.getElementById("display").value;
      const m = expr.match(/(-?[\d.]+)([+\-*/])(-?[\d.]+)/);
      if (!m) { displayError(); return; }
      let result;
      const a = parseFloat(m[1]), b = parseFloat(m[3]);
      if (m[2] === "+") result = a + b;
      else if (m[2] === "-") result = a - b;
      else if (m[2] === "*") result = a * b;
      else if (m[2] === "/") {
        if (b === 0) { displayError(); return; }
        result = a / b;
      }
      document.getElementById("display").value = result;
    }
    function factorial() {
      const n = parseInt(document.getElementById("display").value);
      if (n < 0 || isNaN(n)) { displayError(); return; }
      let f = 1;
      for (let i = 2; i <= n; i++) f *= i;
      document.getElementById("display").value = f;
    }
    function sqrt() {
      document.getElementById("display").value = Math.sqrt(parseFloat(document.getElementById("display").value));
    }
    function power() {
      const m = document.getElementById("display").value.split("^");
      document.getElementById("display").value = Math.pow(parseFloat(m[0]), parseFloat(m[1]));
    }
    function modulo() {
      const m = document.getElementById("display").value.split("%");
      document.getElementById("display").value = parseFloat(m[0]) % parseFloat(m[1]);
    }
    function displayError() { document.getElementById("display").value = "Error"; }
  </script>
</body>
</html>
```

**Expected output**: A calculator grid where digit/operator clicks build an expression in the display, `=` computes the four arithmetic results (with division-by-zero guarded as "Error"), and the sqrt, power, mod, and factorial buttons return correct values such as sqrt(81)=9, 2^5=32, 17%5=2, and 5!=120.

[DIAGRAM: Flowchart for calculator evaluate
 Click digit/operator --> append to expression string --> update display
 Click '=' --> match "operand operator operand" --> switch on operator
   "+": a+b   "-": a-b   "*": a*b   "/": b==0 ? "Error" : a/b
 Click function key --> parse display value --> compute Math.sqrt / Math.pow / % / factorial --> show result
]
