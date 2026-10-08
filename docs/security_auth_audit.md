# Security & Authentication Audit (T0.3)

**Date:** 2026-10-08  
**Component:** Authentication & Session Storage (`adaptlearn_token`)  
**Status:** Reviewed & Documented (Decision Logged)

---

## 1. Threat Analysis: JWT in `localStorage`

### Risk Description
The client-side application currently persists the user's JSON Web Token (JWT) in browser `localStorage` under the key `adaptlearn_token` (`frontend/src/lib/api.ts`).
While standard for decoupled Single Page Applications (SPAs), `localStorage` is accessible to any JavaScript running on the same origin. Consequently, if an attacker executes arbitrary JavaScript via a Cross-Site Scripting (XSS) vulnerability, the token could potentially be exfiltrated.

---

## 2. Active Defense & Mitigations in Place

1. **Strict Helmet Configuration:**
   - Express backend utilizes `helmet` to set secure HTTP response headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, etc.).
2. **React 19 Auto-Escaping:**
   - All dynamic UI variables rendered via React JSX are escaped by default, preventing reflected and stored HTML injections.
3. **Strict Input Validation:**
   - All incoming API payloads are parsed and sanitized using `Zod` schemas before processing.
4. **JWT Expiry & Signature:**
   - Tokens are signed with a server-side secret (`JWT_SECRET`) and validated on every authenticated request via Express middleware.
5. **No Third-Party CDN Scripts:**
   - All bundle dependencies are self-hosted through Next.js compilation, eliminating supply-chain script tampering.

---

## 3. Engineering Decision & Future Production Roadmap

### Decision
For local evaluation and decoupled local port development (`http://localhost:3000` frontend and `http://localhost:8001` backend):
- Maintain `localStorage` token storage with active Helmet and Zod protections.
- Do not introduce cross-port cookie complexity (`SameSite=None; Secure`) that can break local HTTP testing environments.

### Production Hardening Roadmap
When deployed to a production environment behind a unified reverse proxy (e.g. Nginx, Cloudflare, or AWS ALB):
1. **Unified Domain:** Serve both frontend and `/api` from the same domain (`adaptlearn.edu.in`).
2. **`httpOnly; SameSite=Strict; Secure` Cookies:** Migrate the JWT storage from `localStorage` into an `httpOnly` cookie.
3. **In-Memory Short-Lived Access Tokens:** Rotate access tokens in memory (15 min) backed by an `httpOnly` refresh cookie.
