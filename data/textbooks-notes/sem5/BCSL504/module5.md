# BCSL504 — Web Technology Laboratory

## Module 5: PHP MySQL CRUD Operations and jQuery/AJAX

This module covers the complete PHP+MySQL CRUD cycle (insert, fetch, display sorted in an HTML table) and the asynchronous web tier — jQuery DOM animations and AJAX data fetching. These are Program 9 and Program 10 of the BCSL504 lab list, mapped to CO4 (L4 Analyze) and CO5 (L4 Analyze).

### Experiment 9: PHP Database Operations (CRUD)

**Aim**: Write a PHP script connected to MySQL database to insert student records, fetch student records, and display them in an HTML table sorted by marks.

**Theory**

CRUD is the four fundamental database operations: Create, Read, Update, Delete. This program implements the Create (insert) and Read (fetch + display) operations against MySQL from PHP using the mysqli extension. The typical workflow: connect, create the table if missing, accept input from an HTML form, insert the record, then SELECT all records ordered by marks and render them into an HTML table.

Connection: `mysqli_connect(host, user, password, database)` returns the connection object; check it with an `if (!$conn)` guard and terminate with `die(mysqli_connect_error())`. Always close with `mysqli_close($conn)` when done. Database setup for the lab: create the database (`CREATE DATABASE webtech`) and table with:

```sql
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  usn VARCHAR(20) UNIQUE,
  marks INT,
  branch VARCHAR(30)
);
```

`AUTO_INCREMENT` lets the database generate the primary key, avoiding manual IDs.

Inserting data from a form: the form's `method="post"` sends field values to `$_POST["fieldname"]` (with `get`, values arrive in `$_GET`). The INSERT statement: `INSERT INTO students (name, usn, marks, branch) VALUES ('$name', '$usn', $marks, '$branch')`. This naive string interpolation is vulnerable to SQL injection — a malicious input like `'; DROP TABLE students; --` can execute unintended SQL. The secure, exam-mandatory alternative is a prepared statement, which separates the query structure from the data:

```php
$stmt = mysqli_prepare($conn, "INSERT INTO students (name, usn, marks, branch) VALUES (?, ?, ?, ?)");
mysqli_stmt_bind_param($stmt, "ssis", $name, $usn, $marks, $branch);
mysqli_stmt_execute($stmt);
```

The bind types string `"ssis"` declares the parameter types (s=string, i=integer, d=double, b=blob). The database parses the query once with `?` placeholders; the data never becomes executable code, so injection is structurally impossible.

Reading data: `SELECT * FROM students ORDER BY marks DESC` fetches all rows sorted by marks in descending order (`ASC` for ascending). The result set is iterated with a `while` loop: `while ($row = mysqli_fetch_assoc($result))` returns one row per iteration as an associative array keyed by column names (`$row["name"]`). Other fetch functions: `mysqli_fetch_array()` (both numeric and associative), `mysqli_fetch_row()` (numeric only), `mysqli_num_rows()` (row count). Escaping: `mysqli_real_escape_string($conn, $value)` neutralizes quotes in string data.

Update and delete (for completeness of CRUD): `UPDATE students SET marks = 85 WHERE usn = '4XX20CS001'` and `DELETE FROM students WHERE id = 3` — both executed with `mysqli_query`, guarded by a `WHERE` clause, otherwise every row is affected. Affected rows count comes from `mysqli_affected_rows($conn)`.

**Code**

```php
<?php
$conn = mysqli_connect("localhost", "root", "", "webtech");
if (!$conn) { die("Connection failed: " . mysqli_connect_error()); }

mysqli_query($conn, "CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    usn VARCHAR(20) UNIQUE,
    marks INT,
    branch VARCHAR(30))");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = mysqli_real_escape_string($conn, $_POST["name"]);
    $usn = mysqli_real_escape_string($conn, $_POST["usn"]);
    $marks = (int) $_POST["marks"];
    $branch = mysqli_real_escape_string($conn, $_POST["branch"]);

    $stmt = mysqli_prepare($conn,
        "INSERT INTO students (name, usn, marks, branch) VALUES (?, ?, ?, ?)");
    mysqli_stmt_bind_param($stmt, "ssis", $name, $usn, $marks, $branch);
    if (mysqli_stmt_execute($stmt)) {
        echo "<p style='color:green'>Record inserted successfully</p>";
    }
    mysqli_stmt_close($stmt);
}
?>
<form method="post" action="">
  Name: <input type="text" name="name" required><br>
  USN: <input type="text" name="usn" required><br>
  Marks: <input type="number" name="marks" required><br>
  Branch: <input type="text" name="branch"><br>
  <input type="submit" value="Insert">
</form>

<?php
$result = mysqli_query($conn, "SELECT name, usn, marks, branch
                               FROM students ORDER BY marks DESC");
echo "<table border='1' cellpadding='6'>";
echo "<tr><th>Name</th><th>USN</th><th>Marks</th><th>Branch</th></tr>";
while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr><td>{$row['name']}</td><td>{$row['usn']}</td>"
       . "<td>{$row['marks']}</td><td>{$row['branch']}</td></tr>";
}
echo "</table>";
mysqli_close($conn);
?>
```

**Expected output**: A form that inserts a student row into the MySQL table, followed by an HTML table of all students sorted by marks in descending order — the highest scorer on top — with a success message after each insertion.

[DIAGRAM: Flowchart for PHP CRUD display
 Form submitted (POST) --> connect to MySQL --> validate/escape inputs
 --> INSERT INTO students via prepared statement --> success message
 --> SELECT * FROM students ORDER BY marks DESC
 --> loop rows: build <tr><td> cells with mysqli_fetch_assoc
 --> render HTML table --> close connection --> page sent to browser
]

### Experiment 10: jQuery DOM Manipulation & AJAX Data Fetching

**Aim**: Implement a web application using jQuery for dynamic element show/hide animations and AJAX (`fetch` API / `$.ajax`) to load remote JSON data asynchronously without page reload.

**Theory**

jQuery is a fast JavaScript library that simplifies three things: DOM selection (`$(selector)` using CSS selectors — `$("#id")`, `$(".class")`, `$("tag")`), DOM manipulation (`.html()`, `.text()`, `.css()`, `.attr()`, `.append()`), and events (`.click()`, `.hover()`), plus cross-browser-consistent AJAX. It is included with a `<script src="jquery.min.js"></script>` tag, typically from a CDN, and code must run after the DOM is ready: `$(document).ready(function(){ ... })` (shorthand `$(function(){ ... })`) — otherwise selectors find no elements.

Animation methods (exam favourites): `.hide()` and `.show()` instantly toggle visibility; `.toggle()` switches between them; the animated variants `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`, `.slideUp()`, `.slideDown()`, `.slideToggle()` accept a duration (ms or "slow"/"fast") and an optional callback that runs when the animation completes. Chaining is possible: `$("#box").slideUp(600).fadeIn(400)`.

AJAX (Asynchronous JavaScript and XML) lets the page exchange data with the server without a full reload — the browser sends an HTTP request in the background and updates only the affected DOM region. The request lifecycle: request sent -> server processes -> response received -> callback updates the page. Responses are today almost always JSON.

Two ways to make AJAX calls:
1. `fetch()` — the modern native API. `fetch(url)` returns a Promise; `response.json()` parses the body; the `.then()` chain handles the result and `.catch()` handles network errors. Because `response.json()` itself returns a Promise, it needs its own `.then()`. Optionally `{ method, headers, body }` configures the request.
2. `$.ajax({ ... })` — jQuery's method with a settings object: `url`, `method`/`type`, `dataType: "json"`, `data`, `success: function(response){...}`, `error: function(xhr){...}`. Shorthand helpers `$.get(url, callback)` and `$.post(url, data, callback)` wrap the common cases.

An AJAX/JSON consumer must tolerate failure: use `.catch()` (fetch) or the `error` handler to display a friendly message; always guard that the parsed object has the expected shape before iterating. Rendering loaded JSON into the page typically uses `.append()` to build list items inside a loop.

**Code**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>jQuery + AJAX Demo</title>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>
  <h2>AJAX Data Loader</h2>
  <button id="toggleBtn">Toggle Message</button>
  <div id="message" style="display:none; background:#ffd; padding:10px;">
    This message toggles with a slide animation.
  </div>

  <button id="loadBtn">Load Students (AJAX)</button>
  <ul id="studentList"></ul>

  <script>
    $(document).ready(function () {
      $("#toggleBtn").click(function () {
        $("#message").slideToggle(600);   // jQuery animation
      });

      $("#loadBtn").click(function () {
        // jQuery AJAX with $.ajax
        $.ajax({
          url: "students.json",
          method: "GET",
          dataType: "json",
          success: function (students) {
            $("#studentList").empty();
            $.each(students, function (i, s) {
              $("#studentList").append("<li>" + s.name + " - " + s.marks + "</li>");
            });
          },
          error: function (xhr, status, err) {
            $("#studentList").append("<li>Load failed: " + status + "</li>");
          }
        });
      });

      // equivalent with the native fetch API
      $("#loadBtn").dblclick(function () {
        fetch("students.json")
          .then(function (resp) { return resp.json(); })
          .then(function (students) {
            $("#studentList").empty();
            students.forEach(function (s) {
              $("#studentList").append("<li>" + s.name + " (" + s.usn + ")</li>");
            });
          })
          .catch(function () {
            $("#studentList").append("<li>Network error</li>");
          });
      });
    });
  </script>
</body>
</html>
```

```json
// students.json served from the same folder
[
  { "name": "Ananya", "usn": "4XX20CS001", "marks": 92 },
  { "name": "Bharat", "usn": "4XX20CS002", "marks": 87 },
  { "name": "Chaitra", "usn": "4XX20CS003", "marks": 95 }
]
```

**Expected output**: Clicking "Toggle Message" slides the yellow box open and closed; clicking "Load Students" fills the list with the JSON entries (name - marks) without a page reload; double-clicking loads the same data via the native fetch API; a missing file shows a friendly error line instead of crashing.

[DIAGRAM: Flowchart for AJAX JSON loading
 User clicks Load button --> $.ajax / fetch("students.json")
 --> browser sends async HTTP GET to server --> page keeps responding
 --> server returns JSON array --> success callback parses JSON
 --> loop through array --> append <li> items to #studentList
 --> on failure --> error callback shows "Load failed" message
 No page reload at any step
]
