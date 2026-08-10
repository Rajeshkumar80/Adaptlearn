# BCS603 — Full Stack Web Development

## Module 1: Front-End Foundations & Modern JavaScript (ES6+)

### Modern JavaScript (ES6+) Overview

- **ES6 (ECMAScript 2015)** is the sixth edition of the ECMAScript standard, the specification behind JavaScript. It introduced major syntax and feature upgrades that made JavaScript suitable for large-scale application development.
- ECMAScript is a language standard; JavaScript is the most popular implementation of that standard.
- Key ES6+ additions: `let`/`const`, arrow functions, template literals, destructuring, spread/rest operators, default parameters, classes, modules, Promises, `async/await`, and modern data structures (Map, Set).

### let, const and var

- `var` is function-scoped and hoisted (can be accessed before declaration, value `undefined`); redeclaration is allowed.
- `let` is block-scoped, cannot be redeclared in the same scope, and throws an error when accessed before declaration (temporal dead zone).
- `const` is block-scoped, must be initialized at declaration, and its binding cannot be reassigned. Objects/arrays declared with `const` can still have their contents mutated.
- Rule of thumb: use `const` by default, `let` when reassignment is needed, avoid `var`.

### Arrow Functions

- Arrow functions are a shorter function syntax: `const add = (a, b) => a + b;`.
- They have **no own `this`** — `this` is lexically inherited from the enclosing scope (important in event handlers and callbacks).
- They have no `arguments` object, cannot be used as constructors (no `new`), and have no `prototype` property.
- Implicit return: if the body is a single expression, `return` is omitted; object literals must be wrapped in parentheses: `() => ({ id: 1 })`.
- Single parameter can omit parentheses: `x => x * 2`.

### Template Literals

- Template literals use backticks (`` ` ``) and support:
  - String interpolation: `` `Hello ${name}` ``
  - Multi-line strings without `\n` concatenation
  - Embedded expressions: `` `Total: ${price * qty}` ``

### Destructuring

- **Array destructuring** extracts values by position: `const [a, b] = [10, 20];` (a=10, b=20). Can skip elements with commas (`[a, , c]`) and use default values (`const [x = 1] = []`).
- **Object destructuring** extracts by key name: `const { name, age } = user;`. Supports renaming (`const { name: userName } = user;`) and defaults.
- Also used in function parameters: `function greet({ name }) { ... }`, and in swapping variables: `[a, b] = [b, a];`.

### Spread and Rest Operators

- Both use the `...` syntax; spread **expands** an iterable, rest **collects** remaining items.
- **Spread**: `const arr2 = [...arr1, 5];` (copy/merge arrays), `const obj2 = { ...obj1, extra: 1 };` (shallow copy of objects), `f(...args)` (spread arguments into a call).
- **Rest**: `function sum(...nums) { return nums.reduce((t, n) => t + n, 0); }` collects remaining arguments into an array; in destructuring: `const [first, ...rest] = arr;`.
- Difference table:

| Feature | Spread | Rest |
| :--- | :--- | :--- |
| Purpose | Expand elements | Collect elements |
| Used in | Function calls, array/object literals | Function parameters, destructuring |
| Position | Anywhere in literal | Must be last |

### Default Parameters

- Function parameters can have defaults: `function greet(name = 'Guest') { ... }`.
- Defaults are applied only when the argument is `undefined` (not `null`).
- Defaults can reference earlier parameters: `function f(a, b = a * 2) { ... }`.

### Promises

- A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation. It has three states: **pending** (initial), **fulfilled** (resolved with a value), and **rejected** (failed with a reason).
- Creation: `const p = new Promise((resolve, reject) => { ... });` — `resolve(value)` moves to fulfilled; `reject(reason)` moves to rejected.
- Consumption: `.then(onFulfilled, onRejected)`, `.catch(onRejected)`, `.finally(callback)` — each returns a new Promise enabling chaining (avoiding callback hell).
- `Promise.all([p1, p2])` resolves when all resolve (rejects fast on first rejection); `Promise.allSettled()` waits for all regardless; `Promise.race()` settles with the first settled promise.

### async / await

- `async` functions always return a Promise. `await` can only be used inside `async` functions and pauses execution until the awaited promise settles.
- `try/catch/finally` blocks handle errors in `async/await` code (replacing `.catch`).
- `await` never blocks the main thread — it yields control back to the event loop.
- Comparison: Promises use `.then` chains; `async/await` is syntactic sugar giving sequential, readable code over the same mechanics.

### Promises vs async/await

| Aspect | Promises | async/await |
| :--- | :--- | :--- |
| Syntax | `.then()`/`.catch()` chains | Synchronous-looking code |
| Error handling | `.catch()` | `try/catch` |
| Readability | Nested chains for sequential ops | Clean sequential flow |
| Parallel ops | `Promise.all()` | `Promise.all()` with `await` |
| Debugging | Harder (stack traces lost) | Easier (looks synchronous) |

### Modules: ES Modules vs CommonJS

- **ES Modules (ESM)**: the official ECMAScript module system, static and tree-shakeable.
  - Export: `export const x = 1;`, `export default function() {}`, `export { a, b };`
  - Import: `import { a, b } from './file.js';`, `import defaultExport from './file.js';`, `import * as ns from './file.js';`
  - Used in browsers and modern bundlers; requires `"type": "module"` or `.mjs` extension in Node.js.
- **CommonJS (CJS)**: the Node.js original module system, dynamic and synchronous.
  - Export: `module.exports = { a, b };` or `exports.a = 1;`
  - Import: `const m = require('./file.js');`
- Comparison table:

| Aspect | ES Modules | CommonJS |
| :--- | :--- | :--- |
| Standard | ECMAScript official | Node.js community |
| Loading | Static (analyzable at parse time) | Dynamic (runtime) |
| Syntax | `import` / `export` | `require` / `module.exports` |
| Async support | Yes (top-level await) | No (synchronous) |
| Tree-shaking | Supported | Not supported |
| Default import | `export default` | `module.exports` |
| Extension | `.mjs` / `"type": "module"` | `.cjs` / default |

### DOM Manipulation

- The **DOM (Document Object Model)** is a tree-structured representation of an HTML document that JavaScript can read and modify; every element is a **node**.
- Selecting elements: `document.getElementById('id')`, `document.querySelector('css-selector')` (first match), `document.querySelectorAll('sel')` (NodeList), `document.getElementsByClassName()`.
- Creating/inserting: `document.createElement('div')`, `element.appendChild(child)`, `element.insertBefore(newNode, refNode)`, `element.innerHTML`, `element.textContent`.
- Modifying: `element.style.color = 'red'`, `element.classList.add('active')` / `remove` / `toggle`, `element.setAttribute('src', url)`, `element.id`.
- Removing: `element.remove()` or `parent.removeChild(child)`.
- `textContent` vs `innerHTML`: `textContent` sets plain text safely (no HTML parsing, XSS-safe); `innerHTML` parses HTML markup (risky with user input).
- **NodeList vs Array**: `querySelectorAll` returns a static NodeList; convert with `Array.from()` or `[...nodes]` to use array methods.

### Event Listeners and Event Flow

- `element.addEventListener('click', handler)` attaches a handler; multiple handlers per element are allowed; `removeEventListener('click', handler)` detaches.
- The event object (`e`) carries `e.target`, `e.currentTarget`, `e.type`, `e.preventDefault()` (stop default browser action), `e.stopPropagation()` (stop bubbling).
- **Event flow has three phases**: capturing (window → target), target, bubbling (target → window). Default listeners fire during bubbling; `addEventListener(evt, fn, true)` opts into the capturing phase.
- Common events: `click`, `input`, `change`, `submit`, `keydown`, `keyup`, `load`, `scroll`, `resize`, `mouseover`.
- **Event delegation**: attach one listener on a parent and check `e.target` — efficient for dynamically added children.

### Advanced CSS3: Flexbox

- Flexbox (Flexible Box Layout) is a one-dimensional layout model — it lays items along a single axis (row or column) at a time.
- Container properties: `display: flex`, `flex-direction` (row/column/reverse), `justify-content` (main-axis alignment: flex-start, center, space-between, space-around, space-evenly), `align-items` (cross-axis: stretch, center, flex-start, flex-end, baseline), `flex-wrap` (nowrap/wrap), `gap`.
- Item properties: `flex-grow` (how much an item grows relative to siblings), `flex-shrink`, `flex-basis` (initial main size), shorthand `flex: grow shrink basis`, `align-self` (override for one item), `order` (visual reordering).
- `justify-content` works on the main axis; `align-items` works on the cross axis.

### Advanced CSS3: Grid Layout

- CSS Grid is a **two-dimensional** layout system — it positions items in both rows and columns simultaneously.
- Container properties: `display: grid`, `grid-template-columns: repeat(3, 1fr)` (three equal columns), `grid-template-rows`, `gap` (row-gap/column-gap), `grid-auto-rows`, `grid-template-areas`.
- Item properties: `grid-column: 1 / 3` (span columns 1–2), `grid-row`, `justify-self`, `align-self`.
- Common sizing keywords: `fr` (fraction of free space), `minmax(100px, 1fr)` (responsive range), `auto`, `repeat(n, size)`.
- **Grid vs Flexbox comparison** (frequently asked):

| Aspect | Flexbox | Grid |
| :--- | :--- | :--- |
| Dimensionality | One-dimensional (row OR column) | Two-dimensional (rows AND columns) |
| Best for | Linear layouts, navbars, toolbars | Page-level layouts, dashboards, galleries |
| Main direction | Content-based (flex-direction) | Track-based (template rows/cols) |
| Alignment | justify (main) + align (cross) | Explicit row/column placement |
| Overlap control | Not designed for it | Items can span tracks |

### Media Queries and Mobile Responsiveness

- **Media queries** apply CSS conditionally based on device characteristics: `@media (max-width: 768px) { ... }`.
- Common breakpoints: mobile < 576px, tablet 768px, desktop 992px, large 1200px.
- Mobile-first approach: write base styles for small screens, use `min-width` queries to progressively enhance larger screens.
- Common practices: fluid grids (`fr`/percentages), `max-width: 100%` images, `viewport` meta tag `<meta name="viewport" content="width=device-width, initial-scale=1">`, responsive typography with `clamp()`.
- Responsive navbar pattern (asked in 2024 PYQ): flex container that wraps with `flex-wrap`, hamburger menu under a media query breakpoint, full-width stacked links on mobile.

```
[DIAGRAM: Responsive layout with media queries
 Mobile (<768px):  Navbar links stack vertically, full width
                    [Logo] [Link1] [Link2] [Link3]  (wrapped, one per row)
 Tablet/Desktop (>768px):  Navbar links in one horizontal row
                    [Logo] [Link1] [Link2] [Link3] ----> right aligned
]
```

### CSS Frameworks: Tailwind CSS vs Bootstrap 5

- **Bootstrap 5**: component-based framework — prebuilt components (navbar, cards, modals, grid via `row`/`col-*-*`). Ships its own CSS file; customization via Sass variables; no jQuery dependency (Bootstrap 5 dropped it); utility classes available but components dominate.
- **Tailwind CSS**: utility-first framework — no prebuilt components; you compose UI from low-level classes like `flex`, `p-4`, `text-center`, `bg-blue-500`. Config via `tailwind.config.js`; purges unused CSS in production (small bundle); fully custom design without fighting framework styles.
- Bootstrap grid: 12-column system with breakpoint prefixes `col-sm`, `col-md`, `col-lg`.
- Comparison:

| Aspect | Bootstrap 5 | Tailwind CSS |
| :--- | :--- | :--- |
| Approach | Component-first | Utility-first |
| Prebuilt UI | Yes (cards, modals, navbars) | No (build from utilities) |
| Customization | Sass variables, override CSS | Config file, arbitrary values |
| File size | Full CSS (large) | Purged, minimal in production |
| Learning curve | Pick components quickly | Learn utility vocabulary |
| Design uniqueness | Sites look similar by default | Highly unique designs |

### Exam-Focused Summary

- Know the difference between `let/const/var`, arrow vs normal functions (especially `this`), spread vs rest.
- Be able to write ES6 code combining Promises, async/await, destructuring, arrow functions with error handling (2023 PYQ).
- Compare ES Modules vs CommonJS with examples of `import/export` and `require/module.exports` (2024 PYQ).
- Design a responsive navbar with Flexbox and media queries (2024 PYQ).
- Compare Grid vs Flexbox and build a 3-column responsive grid (2023 PYQ).
- Explain event delegation, event phases, and `textContent` vs `innerHTML` safety.
