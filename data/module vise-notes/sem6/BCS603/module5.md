# BCS603 — Full Stack Web Development

## Module 5: Full Stack Integration, Authentication & Deployment

### JSON Web Tokens (JWT) — Overview

- **JWT (JSON Web Token)** is an open standard (RFC 7519) for securely transmitting claims as a JSON object between parties, commonly used for stateless authentication.
- Structure: three Base64Url-encoded parts joined by dots — `header.payload.signature`.
  - **Header**: token type and algorithm, e.g., `{ "alg": "HS256", "typ": "JWT" }`.
  - **Payload**: claims (user id, role, exp, iat) — NOT encrypted, only encoded; never store secrets.
  - **Signature**: `HMACSHA256(base64Url(header) + "." + base64Url(payload), secret)` — proves the token was not tampered with.
- Properties: stateless (server stores no session), compact (works in URL/header), self-contained (carries user data), signed (integrity) — optionally encrypted (JWE).
- The payload is decoded by anyone (Base64), so sensitive data must never be placed in the token.

```
[DIAGRAM: JWT structure
 header.payload.signature
 header:  {"alg":"HS256","typ":"JWT"}
 payload: {"userId":"...","role":"user","iat":...,"exp":...}
 signature: HMACSHA256(header + '.' + payload, serverSecret)
```

### JWT Authentication Flow (asked in 2023 PYQ)

- Complete workflow for registration and login:

```
[DIAGRAM: JWT auth flow (register + login + protected route)
 Client --> POST /api/register {name,email,password}
          --> server: hash password (bcrypt) --> save user --> 201
 Client --> POST /api/login {email,password}
          --> server: verify bcrypt hash --> sign JWT {userId} --> return {token}
 Client --> GET /api/profile (Authorization: Bearer <token>)
          --> authMiddleware: verify signature + exp --> req.user --> data or 401
]
```

- Steps:
  1. **Registration**: receive user data, hash the password with bcrypt, save to DB.
  2. **Login**: find user by email, compare passwords with bcrypt, if valid sign a JWT containing user id and expiry.
  3. **Client stores** the token (localStorage / sessionStorage / httpOnly cookie).
  4. **Subsequent requests** send `Authorization: Bearer <token>` header.
  5. **Auth middleware** verifies signature and expiry; on success attaches user to `req`; on failure returns `401 Unauthorized`.
- `jsonwebtoken` package: `jwt.sign({ id: user._id }, secret, { expiresIn: '1d' })` and `jwt.verify(token, secret)`.
- The secret must live in environment variables, never in source code.

### Password Hashing with bcrypt

- **bcrypt** is a password-hashing function based on the Blowfish cipher with a **salt** — designed to be computationally expensive (slow) to resist brute-force and rainbow-table attacks.
- Hashing (never store plaintext passwords): `const hash = await bcrypt.hash(password, 10);` — `10` is the salt rounds (cost factor).
- Verification: `const match = await bcrypt.compare(plainPassword, storedHash);` — bcrypt extracts the salt from the stored hash automatically.
- Each hash embeds its own salt, so the same password produces different hashes every time.
- Salting prevents rainbow-table attacks; the cost factor slows down offline brute-force.

### Auth Middleware

- Middleware protecting routes: reads the `Authorization: Bearer <token>` header, calls `jwt.verify`, and on success injects `req.userId` and calls `next()`; on any failure responds `401`.
- Route usage: `app.get('/api/profile', authenticate, handler)`.
- Authorization vs authentication: **authentication** = who you are (login, token valid); **authorization** = what you can do (roles, permissions) — checked after authentication.

### CORS (Cross-Origin Resource Sharing) (asked in 2023 PYQ)

- **Same-origin policy**: browsers block JavaScript from one origin (scheme + host + port) reading responses from another origin.
- **CORS** is an HTTP-header-based mechanism that allows a server to tell browsers which origins may access its resources.
- Problem in MERN: React runs at `http://localhost:3000`, Express at `http://localhost:5000` — different origins; without CORS headers the browser blocks API responses.
- Solution: `const cors = require('cors'); app.use(cors());` — allows all origins (dev only); configure: `app.use(cors({ origin: 'http://localhost:3000', credentials: true }))`.
- Key headers: `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`.
- **Preflight request**: for non-simple requests (custom headers like `Authorization`, methods other than GET/POST), the browser first sends an `OPTIONS` request; the server must respond with allowed methods/headers.

### Security Middleware: Helmet and Rate Limiting (2023 PYQ)

- **helmet**: sets security-related HTTP headers to protect against common web vulnerabilities — `app.use(helmet())`.
  - Protects against: XSS (`X-XSS-Protection`, CSP), clickjacking (`X-Frame-Options: DENY`), MIME sniffing (`X-Content-Type-Options`), insecure downloads, `Strict-Transport-Security` (HSTS).
- **express-rate-limit**: limits repeated requests per IP to prevent brute-force and DoS attacks.
  - `const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 }); app.use('/api', limiter);`
  - Returns `429 Too Many Requests` when the limit is exceeded.
- **morgan**: HTTP request logger middleware (dev convenience, not security).
- General best practices: validate/sanitize input, parameterized queries, escape outputs, never trust user input.

```
[DIAGRAM: Layers of security middleware in Express app
 Request --> helmet (security headers) --> cors --> rate-limiter (per IP) -->
 auth middleware (JWT for protected routes) --> routes --> error handler
]
```

### Full Stack Integration — React + Express + MongoDB (asked in 2024 PYQ)

- The **MERN stack**: MongoDB (database) + Express (backend framework) + React (frontend) + Node.js (runtime).
- Flow of a request: React component → Axios/fetch to API → Express route → middleware → Mongoose model → MongoDB → response JSON → React state → UI update.

```
[DIAGRAM: MERN end-to-end request flow
 React UI --> axios.get('/api/products') --> Express route handler --> 
 Mongoose Model (Product.find()) --> MongoDB --> JSON response --> 
 React setState --> UI re-render
]
```

- **Axios vs Fetch**: both make HTTP requests from the browser.
  - Axios: automatic JSON transformation, interceptors, better error handling, request cancellation, works in older browsers; needs install.
  - Fetch: built-in browser API, no dependency; requires manual `response.json()`, manual error checking (`res.ok`), no auto timeout.
- Example: `const res = await axios.get('http://localhost:5000/api/products'); setProducts(res.data);`
- Frontend/backend split requires CORS config (or a proxy: `"proxy": "http://localhost:5000"` in React's package.json during dev).
- **State persistence**: React state is lost on refresh — persist auth token and user data in localStorage/sessionStorage; on app load, read the token and restore the session; backend trusts only the verified JWT (not the stored data).

### Environment Variables and dotenv

- `.env` file stores configuration: `PORT=5000`, `MONGO_URI=mongodb+srv://...`, `JWT_SECRET=...`.
- `require('dotenv').config()` loads them into `process.env`; accessed as `process.env.PORT`.
- `.env` must be added to `.gitignore` — never commit secrets.
- Deployment platforms let you set environment variables in their dashboard (no `.env` file needed in production).

### CI/CD Basics

- **CI (Continuous Integration)**: developers push code frequently to a shared repo; automated build and tests run on every push, catching integration errors early.
- **CD (Continuous Delivery/Deployment)**: after CI passes, the app is automatically deployed to staging/production.
- Typical pipeline: commit → push → CI server runs tests/build → artifacts deployed → health checks.
- Tools: GitHub Actions, GitLab CI, Jenkins, CircleCI.
- In MERN: CI runs `npm test` / `npm run build` (frontend); CD builds the React static bundle and deploys backend + frontend to the platform.

### Deployment Platforms: Vercel, Render, AWS EC2 (2024 PYQ)

- **Vercel**: optimized for frontend/full-stack JS — deploys React (and Next.js) apps from a Git repo; supports serverless functions; automatic HTTPS, preview deployments per PR. Ideal for the React frontend.
- **Render**: simple platform for web services and static sites — commonly used for the Express backend; free tier; auto-deploys from GitHub; set environment variables in dashboard; HTTPS by default.
- **AWS EC2**: full virtual machine (Ubuntu) — complete control; install Node, npm, PM2 (process manager to keep server alive), Nginx (reverse proxy + static serving), configure security groups (open port 80/443/22); most manual but most flexible.
- Deployment steps (typical): build the React app (`npm run build` → static files), serve the Express API, set env vars (`MONGO_URI`, `JWT_SECRET`), migrate/connect Atlas, monitor with logs and uptime checks.

```
[DIAGRAM: MERN deployment topology on Vercel + Render
 React frontend (npm run build) --> Vercel (static hosting, HTTPS)
 Express API + Mongoose --> Render (web service, env vars in dashboard)
 MongoDB --> MongoDB Atlas (cloud database, IP allowlist)
 Browser --> Vercel static site --> Render API --> Atlas
]
```

- **PM2**: process manager that keeps Node apps running, restarts on crash, load-balances across cores: `pm2 start server.js --name api`, `pm2 save`, `pm2 logs`.
- **Nginx** on EC2: reverse proxy `server { location /api { proxy_pass http://127.0.0.1:5000; } }`, serves the built React files, adds TLS.

### Exam-Focused Summary

- Write the complete JWT auth workflow: registration, bcrypt hashing, JWT signing, auth middleware (2023 PYQ).
- Explain CORS headers and security middleware: helmet, cors, express-rate-limit (2023 PYQ).
- Describe end-to-end MERN integration: Axios requests, Express processing, MongoDB persistence (2024 PYQ).
- Discuss deployment of MERN on Render/Vercel with environment variables and dotenv (2024 PYQ).
- Explain JWT structure, token storage, and why passwords are never stored in plaintext.
