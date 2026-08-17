# BCS603 — Full Stack Web Development

## Module 3: Node.js & Express.js Backend Development

### Node.js Overview

- **Node.js** is an open-source, cross-platform JavaScript runtime built on Google Chrome's **V8 JavaScript engine**, created by Ryan Dahl (2009).
- It executes JavaScript **outside the browser** (server-side), enabling full-stack development in a single language.
- Key characteristics: event-driven, non-blocking (asynchronous) I/O, single-threaded with a thread pool for heavy I/O, scalable for I/O-intensive applications.
- Node.js is NOT suitable for CPU-intensive tasks (image processing, heavy computation) because the single thread would be blocked.
- Package manager: **npm** (Node Package Manager) — the world's largest software registry; `npm init` creates `package.json`.

### The Node.js Event Loop (asked in 2023 PYQ)

- The **event loop** is the mechanism that lets Node.js handle thousands of concurrent connections on a single thread by offloading I/O to the OS and processing callbacks as results arrive.
- Phases of the event loop, executed in order each iteration:
  1. **Timers**: executes callbacks scheduled by `setTimeout` and `setInterval`.
  2. **Pending callbacks**: executes I/O callbacks deferred to the next loop iteration.
  3. **Idle/Prepare**: internal use only.
  4. **Poll**: retrieves new I/O events; executes I/O-related callbacks; blocks here when nothing is pending.
  5. **Check**: executes `setImmediate()` callbacks.
  6. **Close callbacks**: executes `close` event handlers (e.g., `socket.on('close')`).
- `process.nextTick()` callbacks run **before** the event loop continues (after the current operation) — they have highest priority; `setImmediate()` runs in the Check phase (next iteration).
- Order guarantee: `nextTick` runs before `Promise` microtasks before timer callbacks.
- Microtasks (Promises) are processed between each phase; the loop exits when nothing remains in the queue.

```
[DIAGRAM: Node.js event loop phases (one iteration)
 Timers --> Pending I/O --> Idle/Prepare --> Poll --> Check --> Close callbacks --> repeat
                       (microtasks: nextTick + Promises run between phases)
]
```

### Non-Blocking I/O

- **Blocking I/O** executes synchronously — the thread waits for the operation to finish before continuing.
- **Non-blocking I/O** issues the request and immediately continues executing; a callback fires when the result is ready.
- Node.js APIs come in two flavors: synchronous (blocking, e.g., `fs.readFileSync`) and asynchronous (non-blocking, `fs.readFile` with callback, or Promise versions).
- In server code, always prefer asynchronous APIs — blocking the single thread stalls every concurrent client.
- The libuv library provides Node's asynchronous I/O and the thread pool (default 4 threads) for operations the OS cannot do async (DNS lookups, file system, crypto).

### Node Package Manager (NPM)

- **npm** manages dependencies, scripts, and publishing of packages for Node.js projects.
- Key commands: `npm init -y` (create package.json), `npm install <pkg>` (install + save), `npm install -g <pkg>` (global), `npm install --save-dev <pkg>` (dev dependency), `npm uninstall <pkg>`, `npm run <script>`.
- `package.json` holds metadata: name, version, main entry, scripts, dependencies (production) and devDependencies.
- `node_modules` folder contains installed packages; `package-lock.json` pins exact versions for reproducible installs.
- `^1.2.3` allows minor/patch updates; `~1.2.3` allows only patch updates; exact `1.2.3` pins.
- **NPX** runs packages without installing them (`npx create-react-app my-app`).

### File System (fs) Module (asked in 2024 PYQ)

- The `fs` module provides file and directory operations: reading, writing, appending, renaming, deleting, watching files.
- Synchronous vs asynchronous comparison (2024 PYQ):

| Aspect | Synchronous (`fs.readFileSync`) | Asynchronous (`fs.readFile`) |
| :--- | :--- | :--- |
| Execution | Blocks the event loop | Non-blocking, continues execution |
| Result | Returns data directly | Delivered via callback/Promise |
| Error handling | try/catch | Callback error parameter or `.catch` |
| Performance | Poor for servers, single thread stalls | Excellent, handles concurrency |
| Use case | Startup scripts, config reads | Request handlers in production |

- Examples: `fs.readFileSync('a.txt', 'utf8')`, `fs.readFile('a.txt', 'utf8', (err, data) => {})`, `fs.writeFileSync(path, data)`, `fs.appendFile`, `fs.mkdir`, `fs.unlink`, `fs.stat`.
- Promises API available: `const { readFile } = require('fs/promises'); await readFile(path, 'utf8')`.

### HTTP Module

- The built-in `http` module creates web servers without any framework: `http.createServer((req, res) => {...}).listen(3000)`.
- `req` (request) gives `req.url`, `req.method`, `req.headers`; `res` (response) offers `res.writeHead(statusCode, headers)`, `res.end(data)`.
- Used to understand raw HTTP handling; in practice Express abstracts this.

### Streams

- **Streams** process data piece-by-piece (chunks) instead of loading entire data into memory — critical for large files, video, and real-time data.
- Types: **Readable** (read data, e.g., file), **Writable** (write data), **Duplex** (both), **Transform** (modify while passing through, e.g., gzip).
- Piping: `readableStream.pipe(writableStream)` — automatic flow with backpressure handling.
- Example: `fs.createReadStream('big.mp4').pipe(res)` streams a file to an HTTP response efficiently.

### Events Module

- The `events` module implements the **EventEmitter** pattern — a core Node.js pattern for handling asynchronous events.
- `const EventEmitter = require('events'); const emitter = new EventEmitter();`
- `emitter.on('event', listener)` registers a listener; `emitter.emit('event', args)` fires it; `once` for single fire; `removeListener` to detach.
- Many Node objects (fs streams, http server) inherit from EventEmitter (e.g., `server.on('request', ...)`).
- The EventEmitter is what makes Node's event-driven architecture possible.

### Express.js Overview

- **Express.js** is a minimal and flexible **Node.js web application framework** that provides a thin layer of features over the HTTP module: routing, middleware, request/response handling.
- Setup: `const express = require('express'); const app = express(); app.listen(3000);`.
- Built-in middleware: `express.json()` (parse JSON bodies), `express.urlencoded({ extended: true })`, `express.static('public')` (serve static files).
- Express is unopinionated — you structure the app as you wish.

### Routing in Express

- **Routing** maps HTTP methods + URL paths to handler functions.
- Method routes: `app.get('/products', handler)`, `app.post`, `app.put`, `app.delete`, `app.patch`, `app.all` (any method).
- Route parameters: `app.get('/products/:id', (req, res) => res.send(req.params.id))`.
- Query strings: `req.query` (e.g., `?page=2&limit=10`).
- Response methods: `res.send()`, `res.json(obj)`, `res.status(201).json(obj)`, `res.redirect()`, `res.sendFile()`.
- Chained routing: `app.route('/products').get(...).post(...)`.

### RESTful API Design

- **REST (Representational State Transfer)** is an architectural style for APIs using HTTP as the transport: resources identified by URLs, actions by HTTP verbs, stateless requests, JSON payloads.
- HTTP verb semantics: GET (read), POST (create), PUT (replace/update), PATCH (partial update), DELETE (remove).
- Status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 500 Internal Server Error.
- Resource naming: plural nouns (`/products`), nested resources (`/products/:id/reviews`).
- Example Product Catalog API (2023 PYQ): `GET /products`, `POST /products`, `PUT /products/:id`, `DELETE /products/:id`.

### Middleware Architecture (asked in 2024 PYQ)

- **Middleware** is a function that has access to `req`, `res`, and `next`; it runs between receiving the request and the final route handler.
- `next()` passes control to the next middleware/route; without it the request hangs.
- Middleware can: modify `req`/`res`, validate input, log requests, authenticate users, end the response, or catch errors.
- Types:
  - **Built-in**: `express.json()`, `express.static()`, `express.urlencoded()`.
  - **Third-party**: `cors`, `morgan`, `helmet`, `express-rate-limit`.
  - **Custom/application-level**: `app.use((req, res, next) => {...})` — applied to all routes; `app.use('/api', middleware)` — scoped to a path.
  - **Route-level**: passed as an argument: `app.get('/x', authMiddleware, handler)`.
  - **Error-handling middleware**: has FOUR parameters `(err, req, res, next)` — must be defined last; it centralizes error responses.
- Middleware order matters — registered middleware runs in registration order.

```
[DIAGRAM: Express request flow through middleware
 Request --> [Logging mw] --> [Auth mw] --> [express.json()] --> Route handler --> Response
                        (any middleware may call next() or end the response)
 Error --> [Error-handling mw (err, req, res, next)] --> JSON error response
]
```

- Logging middleware example: log method, URL and timestamp, then `next()`.
- Error-handling middleware example: log `err.stack`, respond `500 { message: err.message }`.

### Express Router

- **`express.Router()`** creates modular, mountable route handlers — used to split an app into smaller files (e.g., `routes/products.js`).
- `const router = express.Router(); router.get('/', ...);` then `app.use('/api/products', router)` — the router's relative paths combine with the mount path.
- Benefits: separation of concerns, reusable route modules, middleware can be attached per-router.

```
[DIAGRAM: Express Router modular structure
 app.js: app.use('/api/products', productsRouter)  app.use('/api/users', usersRouter)
 productsRouter: GET / , GET /:id , POST / , PUT /:id , DELETE /:id
 usersRouter:    POST /register , POST /login
 (Final URLs: /api/products, /api/products/5, /api/users/login ...)
]
```

### Handling JSON Request Bodies

- `app.use(express.json())` parses incoming requests with JSON payloads and populates `req.body`.
- POST example: client sends `Content-Type: application/json` with `{ "name": "Laptop", "price": 49999 }` → handler reads `req.body.name`.
- Without `express.json()`, `req.body` is `undefined` for JSON payloads.
- Validation: check fields in `req.body` and return `400` with an error message if missing (middleware validation in 2023 PYQ).

### Express.js REST API Example (2023 PYQ style)

- Product Catalog endpoints with in-memory array storage and middleware validation:

```
[DIAGRAM: Product Catalog REST API
 Client --> GET /products        --> list all products (200)
 Client --> GET /products/:id    --> single product or 404
 Client --> POST /products       --> validate body (400 on error) --> create, 201
 Client --> PUT /products/:id    --> update product, 200
 Client --> DELETE /products/:id --> remove product, 204
]
```

### Exam-Focused Summary

- Describe the Event Loop architecture with all six phases: Timers, Pending I/O, Poll, Check, Close callbacks (2023 PYQ).
- Compare synchronous vs asynchronous `fs` operations with examples (2024 PYQ).
- Explain middleware functions; write custom logging and error-handling middleware (2024 PYQ).
- Construct a Product Catalog REST API with GET/POST/PUT/DELETE and validation middleware (2023 PYQ).
- Explain streams, the events module, and Express Router with `app.use('/api', router)` mounting.
