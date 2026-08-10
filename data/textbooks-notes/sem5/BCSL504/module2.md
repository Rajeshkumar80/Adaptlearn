# BCSL504 — Web Technology Laboratory

## Module 2: CSS Styling — External Stylesheets, Selectors, and Forms

This module covers cascading stylesheet fundamentals: the cascade and specificity model, external stylesheets with the full selector taxonomy, and form design with responsive Flexbox layouts. These are Program 3 and Program 4 of the BCSL504 lab list, mapped to CO2 (L3 Apply).

### Experiment 3: External CSS & Selectors

**Aim**: Design a multipage website using an external stylesheet (`style.css`), applying element, class, ID, and pseudo-class selectors to style navigation menus, divs, and links.

**Theory**

CSS (Cascading Style Sheets) separates presentation from content. There are three ways to attach CSS to HTML:
1. Inline style — `style` attribute directly on an element (highest priority, least reusable).
2. Internal (embedded) stylesheet — `<style>` in the `<head>` of one page.
3. External stylesheet — a `.css` file linked via `<link rel="stylesheet" href="style.css">` in the `<head>`. External styles are shared across all pages of a multipage site, giving one source of truth; a single change propagates site-wide.

The cascade rules answer "which rule wins" when several rules match an element. Priority order (specificity) is: inline styles > ID selectors (#id) > class/attribute/pseudo-class selectors (.class, :hover) > element (type) selectors (div, p) > universal selector (*). When two selectors have equal specificity, the one written later in the file wins. The `!important` declaration overrides all normal declarations.

Selector taxonomy covered in this program:
- Element selector: `p { ... }` styles every `<p>`.
- Class selector: `.menu { ... }` styles every element carrying `class="menu"`; a class is reusable across many elements.
- ID selector: `#logo { ... }` styles the single element with `id="logo"`; IDs must be unique per page and have the highest selector specificity.
- Descendant selector: `nav ul li { ... }` targets list items nested inside a nav's unordered list.
- Pseudo-class selectors: `:hover` (state when mouse is over), `:active` (while clicked), `:visited` (already visited link), `:focus` (keyboard focus), `:first-child`, `:nth-child(n)`. Pseudo-classes select elements in a particular state rather than by name. The anchor pseudo-classes must be declared in order for correct behavior: `a:link`, `a:visited`, `a:hover`, `a:active` (LoVe-HAte mnemonic).

For navigation menus, the standard pattern is an unordered list styled with `list-style: none`, floated or flexed list items, `padding`/`margin` on anchors to enlarge clickable area, and a `:hover` background-color change. Box model recap (frequently asked): every element is `content + padding + border + margin`; `box-sizing: border-box` makes width include padding and border, preventing overflow.

**Code**

```css
/* style.css */
body { font-family: Arial, sans-serif; margin: 0; background-color: #fafafa; }
h1 { color: #2c3e50; }
p { line-height: 1.6; }

nav ul { list-style: none; background-color: #333; margin: 0; padding: 0; overflow: hidden; }
nav ul li { display: inline-block; }
nav ul li a { display: block; color: white; padding: 14px 20px; text-decoration: none; }
nav ul li a:hover { background-color: #4CAF50; }
a:visited { color: purple; }

.highlight { background-color: #ffffcc; padding: 10px; }
#footer { background-color: #333; color: white; text-align: center; padding: 10px; }
```

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
  <title>Home</title>
</head>
<body>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
  <h1>Welcome</h1>
  <p class="highlight">This paragraph is styled by a class selector.</p>
  <div id="footer">Copyright 2026</div>
</body>
</html>
```

**Expected output**: A multipage site where all pages share the same external stylesheet — a dark horizontal navigation bar that turns green on hover, a highlighted class-styled paragraph, and a dark footer styled by ID.

### Experiment 4: HTML Forms & Responsive Input Elements

**Aim**: Design an interactive user registration form using input types (text, email, password, radio, checkbox, select dropdown, date, file upload) styled using CSS Flexbox.

**Theory**

Forms collect user input and submit it to a server. The `<form>` element wraps all controls; its key attributes are `action` (server URL receiving data), `method` (`get` appends data to the URL and is visible/limited to ~2048 characters; `post` sends data in the request body and is used for sensitive data), and `enctype="multipart/form-data"` (mandatory when a file upload `<input type="file">` is present).

Each input is paired with a `<label>` using the `for` attribute matching the input's `id`; clicking the label focuses the field — this is essential for accessibility and is a common viva question. The `name` attribute defines the key under which the control's value is submitted; without `name`, the field is not sent.

HTML5 input types (with automatic browser validation):
- `text` — single-line text.
- `email` — validates the value contains an `@` and a domain.
- `password` — masks characters as dots.
- `radio` — mutually exclusive choice within a group sharing the same `name`; requires `value`.
- `checkbox` — independent on/off toggles; multiple checked boxes with the same name submit as repeated keys.
- `select` — a dropdown built with `<option>` elements; `selected` marks the default option; `multiple` allows multi-select.
- `date` — opens a native date picker, sends value in `YYYY-MM-DD` format.
- `file` — opens the file picker; requires `enctype="multipart/form-data"` on the form.
- `number`, `range`, `tel`, `url`, `color` — additional HTML5 types worth naming in the exam.
- `submit` and `reset` — buttons that submit or clear the form.
- `required`, `minlength`, `maxlength`, `placeholder`, `min`, `max`, `pattern` — constraint attributes enforced by the browser before submission.

Flexbox (CSS Flexible Box Layout) is a one-dimensional layout model. The flex container is declared with `display: flex`; its children become flex items. Key properties: `flex-direction` (`row` or `column` — main axis direction), `justify-content` (alignment along the main axis: `flex-start`, `center`, `space-between`, `space-around`), `align-items` (alignment along the cross axis: `flex-start`, `center`, `stretch`), `flex-wrap: wrap` (allows items to flow onto multiple lines), and `gap` (spacing between items). A responsive form uses `flex-wrap: wrap` plus `flex: 1 1 300px` on fields so that on narrow screens each field wraps to a full-width line, eliminating horizontal scroll.

**Code**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .form-container { display: flex; flex-wrap: wrap; gap: 15px; max-width: 600px; margin: auto; }
    .field { display: flex; flex-direction: column; flex: 1 1 250px; }
    label { font-weight: bold; margin-bottom: 4px; }
    input, select { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    .actions { display: flex; justify-content: space-between; width: 100%; }
    button { padding: 10px 20px; background-color: #4CAF50; color: white; border: none; }
  </style>
</head>
<body>
  <form action="register.php" method="post" enctype="multipart/form-data" class="form-container">
    <div class="field">
      <label for="name">Full Name</label>
      <input type="text" id="name" name="fullname" placeholder="Enter name" required>
    </div>
    <div class="field">
      <label for="mail">Email</label>
      <input type="email" id="mail" name="email" required>
    </div>
    <div class="field">
      <label for="pass">Password</label>
      <input type="password" id="pass" name="password" minlength="6" required>
    </div>
    <div class="field">
      <label>Gender</label>
      <input type="radio" name="gender" value="male"> Male
      <input type="radio" name="gender" value="female"> Female
    </div>
    <div class="field">
      <label>Interests</label>
      <input type="checkbox" name="interests[]" value="web"> Web
      <input type="checkbox" name="interests[]" value="db"> Databases
    </div>
    <div class="field">
      <label for="dept">Department</label>
      <select id="dept" name="dept">
        <option value="cse" selected>CSE</option>
        <option value="ise">ISE</option>
      </select>
    </div>
    <div class="field">
      <label for="dob">Date of Birth</label>
      <input type="date" id="dob" name="dob" required>
    </div>
    <div class="field">
      <label for="photo">Profile Photo</label>
      <input type="file" id="photo" name="photo" accept="image/*">
    </div>
    <div class="actions">
      <button type="submit">Register</button>
      <button type="reset">Clear</button>
    </div>
  </form>
</body>
</html>
```

**Expected output**: A registration form whose fields lay out in rows on desktop, wrap to a single column on mobile, with native email validation, a date picker, a dropdown, radio/checkbox groups, and a file upload control — all submitted to a PHP script.

[DIAGRAM: Flexbox wrap behavior of form fields
 Desktop (wide): [Name] [Email] [Password] [Gender] [Interests] [Dept] [DOB] [Photo]
 Mobile (narrow): each field wraps to its own full-width line:
 [Name]
 [Email]
 ...
 [Register] [Clear]
]
