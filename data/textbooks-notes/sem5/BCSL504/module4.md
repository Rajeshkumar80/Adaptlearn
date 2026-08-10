# BCSL504 — Web Technology Laboratory

## Module 4: JSON Processing and PHP Backend Programming

This module covers the JavaScript JSON toolkit — parsing, stringification, date and CSV conversion, and string hashing — followed by the first server-side program: a PHP visitor counter. These are Program 7 and Program 8 of the BCSL504 lab list, mapped to CO3 (L3 Apply) and CO4 (L4 Analyze).

### Experiment 7: JSON Objects & String Hashing in JavaScript

**Aim**: Implement a JavaScript program demonstrating JSON parsing, object stringification, date conversion, CSV-to-JSON format conversion, and simple string hashing (MD5/SHA256 demo).

**Theory**

JSON (JavaScript Object Notation) is a lightweight, language-independent data-interchange format derived from JavaScript object literal syntax. A JSON value can be an object `{"key": value}`, an array `[v1, v2]`, a string (double-quoted), a number, a boolean, `null`. JSON keys must be double-quoted — this is what distinguishes JSON from a JavaScript object literal. JSON is the standard payload format for web APIs (REST services) and AJAX responses.

The two core conversion functions:
- `JSON.stringify(obj)` — converts a JavaScript object/array into a JSON string. It accepts an optional replacer function/array and an optional space parameter for pretty-printing (`JSON.stringify(obj, null, 2)` indents by 2 spaces). During stringification, methods and `undefined` values are dropped; `NaN` and `Infinity` become `null`.
- `JSON.parse(str)` — converts a JSON string back into a live JavaScript object; it throws a `SyntaxError` on malformed input and must therefore be wrapped in try/catch. The resulting object's properties are accessed with dot notation (`obj.name`) or bracket notation (`obj["name"]`).

Serialization is used when data crosses a boundary where only text survives: saving to `localStorage`, sending to a server via AJAX, or passing data between pages.

Date conversion: the `Date` object represents time in milliseconds since the Unix epoch (1 January 1970 UTC). `new Date()` yields the current date/time; `new Date("2026-01-15")` parses an ISO string. Methods: `toISOString()` (UTC `YYYY-MM-DDTHH:mm:ss.sssZ` format), `toDateString()` (human-readable), `toLocaleDateString()`, `getDate()`, `getMonth()` (0-indexed, so add 1), `getFullYear()`, `getTime()` (epoch ms). A JSON-serialized Date becomes an ISO string; parsing it back requires `new Date(jsonValue)`.

CSV-to-JSON conversion: CSV (comma-separated values) stores tabular data as rows of comma-separated fields, first row usually headers. Conversion algorithm: split the CSV string into lines with `str.split("\n")`; take the first line as the header array via `split(",")`; for every remaining line, split into fields and build an object mapping each header key to its field; collect objects into an array. The inverse operation joins fields with commas.

String hashing: a cryptographic hash function maps an arbitrary-length input to a fixed-length digest such that the same input always yields the same hash and different inputs yield (practically) different hashes; hashes are one-way — they cannot be reversed. SHA-256 produces a 256-bit digest shown as 64 hex characters; MD5 produces a 128-bit digest (32 hex characters) and is considered insecure for passwords. In browsers, hashing uses the Web Crypto API: `crypto.subtle.digest("SHA-256", new TextEncoder().encode(str))` returns a Promise of an ArrayBuffer, converted to hex by iterating bytes and applying `.toString(16).padStart(2, "0")`. Since `crypto.subtle` requires HTTPS or localhost, a fallback demo can use a simple self-written hash function (e.g., the djb2 algorithm: `hash = hash * 33 + charCode`).

**Code**

```javascript
// JSON parsing and stringification
const student = { name: "Ananya", usn: "4XX20CS001", marks: 92, active: true };
const jsonStr = JSON.stringify(student, null, 2);
console.log(jsonStr);

const parsed = JSON.parse(jsonStr);
console.log("Name:", parsed.name, "| Marks:", parsed.marks);

// Date conversion
const d = new Date("2026-01-15");
console.log("ISO:", d.toISOString());
console.log("Date:", d.toDateString());
console.log("Epoch ms:", d.getTime());

// CSV to JSON
const csv = "name,usn,marks\nAnanya,4XX20CS001,92\nBharat,4XX20CS002,87";
const lines = csv.split("\n");
const headers = lines[0].split(",");
const records = [];
for (let i = 1; i < lines.length; i++) {
  const fields = lines[i].split(",");
  const obj = {};
  headers.forEach((h, idx) => { obj[h] = fields[idx]; });
  records.push(obj);
}
console.log(JSON.stringify(records));

// SHA-256 hashing via Web Crypto API
async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
              .map(b => b.toString(16).padStart(2, "0"))
              .join("");
}
sha256("BCSL504").then(hash => console.log("SHA-256:", hash));
```

**Expected output**: Console output showing the pretty-printed JSON string, the parsed object's property values, the date in ISO and human-readable forms, an array of JSON objects built from the CSV table, and a 64-character SHA-256 hex digest of the input string.

### Experiment 8: PHP Backend Script & Visitor Counter

**Aim**: Develop a PHP script to maintain and display an updated webpage visitor counter stored in a server-side text file / MySQL database table.

**Theory**

PHP (Hypertext Preprocessor) is a server-side scripting language: the PHP code runs on the web server before the resulting HTML is sent to the browser. The client never sees PHP source, only its output. PHP blocks are delimited by `<?php ... ?>`; every statement ends with a semicolon, and variables begin with `$` and are case-sensitive. Output uses `echo` or `print`. When a browser requests a `.php` page, the server executes the script, whose output is inserted at the exact position of the script block in the resulting HTML document.

A visitor counter must persist its value between page loads, because ordinary PHP variables die when the script ends. Two persistence options:

1. Text-file storage: the count lives in a file such as `counter.txt`. The script opens the file in read mode (`fopen($file, "r")`), reads the number with `fread` or `file_get_contents`, increments it, then rewrites the file in write mode (`"w"` truncates) with `file_put_contents` or `fwrite`. File functions: `fopen(path, mode)` with modes `r` (read), `w` (write, truncates), `a` (append, creates if missing), and `r+`/`w+` (read+write); `fgets()` reads one line; `fclose()` closes the handle. Concurrency caveat: two simultaneous requests could both read the same count and overwrite each other — production counters use `flock()` (file locking) to prevent this.

2. MySQL storage: a table with one row per counter (e.g., `visits(id, count, updated_at)`); the script issues an `UPDATE visits SET count = count + 1 WHERE id = 1` statement and then `SELECT`s the new value. The `count = count + 1` form is atomic at the database level, which is safer under concurrency than read-increment-write.

MySQL connection (mysqli procedural style): `mysqli_connect("localhost", "root", "password", "dbname")` returns a connection object, or `false` on failure; `mysqli_connect_error()` reports the error. Queries run with `mysqli_query($conn, $sql)`; `UPDATE`/`INSERT` return true/false, while `SELECT` returns a result set fetched with `mysqli_fetch_assoc()` as an associative array.

Headers and sessions: `header("Content-Type: text/html; charset=utf-8")` must be sent before any output. Optionally, session variables (`session_start()`; `$_SESSION["visited"]`) can count unique visitors per browser, since every refresh would otherwise inflate a raw counter.

**Code**

```php
<?php
// visitor counter stored in a text file
$counterFile = "counter.txt";

// create the file with count 0 if it does not exist
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, "0");
}

$fp = fopen($counterFile, "r+");
if (flock($fp, LOCK_EX)) {           // exclusive lock to avoid race conditions
    $count = (int) fread($fp, 100);
    $count++;
    ftruncate($fp, 0);               // clear file before rewriting
    rewind($fp);
    fwrite($fp, (string) $count);
    fflush($fp);
    flock($fp, LOCK_UN);
}
fclose($fp);
?>
<!DOCTYPE html>
<html>
<head><title>Visitor Counter</title></head>
<body>
  <h2>Welcome to our website</h2>
  <p>You are visitor number: <strong><?php echo $count; ?></strong></p>
</body>
</html>
```

```php
<?php
// visitor counter stored in MySQL
$conn = mysqli_connect("localhost", "root", "", "webtech");
if (!$conn) { die("Connection failed: " . mysqli_connect_error()); }

mysqli_query($conn, "CREATE TABLE IF NOT EXISTS visits (
    id INT PRIMARY KEY,
    count INT DEFAULT 0
)");

mysqli_query($conn, "INSERT IGNORE INTO visits (id, count) VALUES (1, 0)");
mysqli_query($conn, "UPDATE visits SET count = count + 1 WHERE id = 1");

$result = mysqli_query($conn, "SELECT count FROM visits WHERE id = 1");
$row = mysqli_fetch_assoc($result);
echo "Visitor number: " . $row["count"];
mysqli_close($conn);
?>
```

**Expected output**: Each reload of the page increments and displays the visitor count — persisted across requests in counter.txt (e.g., 1, 2, 3 ...) or in the MySQL visits table; the file version survives server restarts because the state lives on disk, not in memory.

[DIAGRAM: Flowchart for visitor counter (file version)
 Browser requests page --> PHP script starts
 --> counter.txt exists? (no) create file with "0"
 --> (yes) open in r+ mode, lock with flock
 --> read count --> increment --> truncate file --> write new count --> unlock, close
 --> embed $count in HTML --> send page to browser
]
