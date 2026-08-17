# BCS502 — Computer Networks

## Module 5: Application Layer & Network Security

### Application Layer Paradigm: Client-Server vs Peer-to-Peer

- The **Application layer** is the highest layer; it provides services that directly support user applications (email, web, file transfer, remote login, DNS). Applications communicate using a request/response model via the TCP/IP protocols.
- **Client-Server paradigm**: a server (well-known port, always on, usually more powerful) provides services; clients (ephemeral ports) request them. One server can serve many clients (e.g., a web server handling thousands of browsers). Advantages: centralized control, easier management, scalability of clients; disadvantages: single point of failure and server bottleneck.
- **Peer-to-Peer (P2P) paradigm**: every node (peer) is both a client and a server; there is no central server. Peers communicate directly and share resources (files, CPU, bandwidth). Examples: BitTorrent, Skype, Gnutella, blockchain networks. Advantages: no single point of failure, load is distributed, scales well; disadvantages: security and trust issues, hard to manage, discovery overhead (often needs a tracker/bootstrapping server).
- **Comparison (two-mark answer)**: Client-server has centralized control and predictable load but single-point-of-failure risk; P2P is decentralized and fault-tolerant but harder to secure and manage. HTTP, FTP, SMTP, DNS are client-server; file sharing and VoIP often use P2P.

### World Wide Web and HTTP/HTTPS

- **The WWW (World Wide Web)** is a repository of interlinked documents (pages) distributed over the Internet; invented by Tim Berners-Lee at CERN (1989). It uses three components: **URL** (Uniform Resource Locator — protocol://host/path, e.g., http://www.example.com/index.html), **HTML** (HyperText Markup Language — the document format), and **HTTP** (the transfer protocol). The web is a distributed client-server system; the web is not the same as the Internet (the Internet is the infrastructure).
- **HTTP (HyperText Transfer Protocol)**: the client-server protocol used for the web. It runs over TCP (default port 80); it is a stateless protocol (each request/response is independent — state is kept via cookies). MIME-like headers describe content.
- **HTTP request message**: Request line (method, URL, HTTP version) + header lines (Host, User-Agent, Accept, Cookie, etc.) + optional body. Methods: GET, POST, PUT, DELETE, HEAD, OPTIONS.
- **HTTP response message**: Status line (HTTP version, status code, phrase) + headers (Content-Type, Content-Length, Set-Cookie) + body. Status code classes: 1xx informational, 2xx success (200 OK), 3xx redirection (301, 302), 4xx client error (404 Not Found, 400 Bad Request), 5xx server error (500).
- **HTTP 1.1 persistent connections**: by default one TCP connection carries many requests/responses (with pipelining), reducing the overhead of repeated handshakes. HTTP/2 (2015) adds **multiplexing** — many concurrent requests over a single connection in binary frames, plus header compression (HPACK) and server push, removing head-of-line blocking of HTTP/1.1.
- **HTTPS (HTTP Secure)**: HTTP running over TLS (Transport Layer Security), default port 443. TLS encrypts and authenticates the communication (public-key handshake to exchange session keys, then symmetric bulk encryption), protecting confidentiality, integrity, and identity.
- **HTTP vs HTTPS (one-mark answer)**: HTTP is plain text on port 80, no encryption, vulnerable to eavesdropping; HTTPS adds TLS encryption on port 443, providing confidentiality, integrity, and server authentication.

### FTP (File Transfer Protocol)

- **FTP** transfers files between two hosts over TCP; default ports 21 (control connection) and 20 (data connection, active mode). An FTP client first establishes a **control connection** (port 21, remains open for the whole session, carries commands and replies) and then opens a separate **data connection** for each file transfer (port 20 or a temporary port).
- **FTP sessions**: login with user name and password (or anonymous), then commands: USER, PASS, LIST, RETR (download), STOR (upload), DELE, CWD, QUIT. Replies are 3-digit codes (e.g., 200 OK, 331 password needed, 425 data connection open error).
- **Active mode**: the client opens port 21 to the server and tells the server its IP and a listening port (PORT command); the server initiates the data connection **from its port 20 to the client's given port**. Fails behind NAT/firewalls because the server connects inward.
- **Passive mode** (PASV command): the client tells the server it wants passive mode; the server opens a random port (>= 1024) and reports it to the client; the **client initiates the data connection** to that port. Passive mode is NAT/firewall-friendly and is the default in modern clients.
- **FTP features**: supports text and binary transfer modes, authentication, directory listing, and file management. Drawbacks: separate control/data connections, passwords sent in plain text — modern practice prefers SFTP/FTPS (encrypted variants).

```
[DIAGRAM: FTP connections
 Active mode:                    Passive mode:
 Client --(control, port 21)--> Server    Client --(control, port 21)--> Server
 Server --(data, port 20)-----> Client    Client --(data, random port)--> Server
]
```

### Electronic Mail: SMTP, POP3, IMAP

- **Electronic mail (e-mail)** is one of the oldest and most used Internet applications. Architecture has three main components:
  1. **User Agent (UA)**: the client program that lets the user compose, read, reply, forward, and delete messages (Outlook, Gmail web client, Thunderbird).
  2. **Message Transfer Agent (MTA)**: the mail server that stores and forwards messages; it implements SMTP between servers (sendmail, Postfix, Exchange).
  3. **Message Access Agent (MAA)**: the protocol the UA uses to retrieve mail from the mail server mailbox — POP3 or IMAP.
- **Push protocol (SMTP — Simple Mail Transfer Protocol)**: mail is **pushed** from the UA to the sender's MTA and then from MTA to MTA toward the receiver's MTA. SMTP runs over TCP port 25; commands: HELO/EHLO, MAIL FROM, RCPT TO, DATA, QUIT; replies: 250 OK, 354 start mail input, 550 mailbox unavailable. SMTP handles text messages; attachments and multimedia are encoded with MIME (Multipurpose Internet Mail Extensions).
- **Pull protocols (POP3 and IMAP)**: the receiver's UA uses one of these to **pull** mail from its mailbox:
  - **POP3 (Post Office Protocol version 3, port 110)**: simple download-and-delete mailbox; the UA connects, authenticates (USER/PASS or APOP), downloads all messages, and usually deletes them from the server; one mailbox for one user; no server-side folders. Stateless between sessions.
  - **IMAP (Internet Message Access Protocol, port 143)**: keeps mail **on the server**; supports folders, searching, partial download, multiple clients, and message status flags — better for users who access mail from many devices.
- **Comparison (two-mark answer)**: SMTP is a push protocol used between MTAs (and UA->MTA); POP3/IMAP are pull protocols used between the mailbox and the UA. POP3 downloads and deletes (single device); IMAP synchronizes server-side folders across multiple devices.
- **Mail flow example**: UA1 -> SMTP -> MTA1 (sender's server) -> SMTP (server-to-server) -> MTA2 (receiver's server, mailbox) -> POP3/IMAP -> UA2.

```
[DIAGRAM: E-mail architecture
 UA1 --SMTP(push)--> MTA1(sender's server)
 MTA1 --SMTP(push)--> MTA2(receiver's server, mailbox)
 UA2 <--POP3/IMAP(pull)-- MTA2
]
```

### DNS (Domain Name System)

- **DNS** is the distributed database and name-resolution service that maps **domain names to IP addresses** (and other records). Humans remember names; routers need IP addresses. DNS runs over UDP port 53 (and TCP 53 for zone transfer/large responses).
- **Namespace and hierarchy**: the name space is a tree; labels are separated by dots (e.g., www.vtu.ac.in). Top-level domains (TLDs): generic (com, org, net, edu, gov) and country-code (in, us, uk). The hierarchy: root servers -> TLD servers -> authoritative servers -> local name servers.
- **DNS architecture (three components)**:
  1. **Name space** (hierarchical tree of names).
  2. **Name servers** — hierarchical: root servers (13 logical root clusters), TLD servers, and authoritative servers for each zone; every organization runs a local (recursive) name server.
  3. **Resolvers** (in each client) that send queries.
- **Name resolution — two methods** (2023 PYQ, exam-frequent):
  - **Recursive resolution**: the client (or local server) sends one query to a server; that server recursively queries other servers on the client's behalf and returns the final answer. Loads the intermediate servers (root/TLD servers dislike recursive behavior, so recursion is usually confined to the local resolver).
  - **Iterative resolution**: the local server queries the root, gets the TLD server address, queries the TLD server, gets the authoritative server address, and queries it for the final answer — each server returns the next referral instead of resolving. Lower load on each server.
  - A resolver may combine both: iterative from the local server upward, recursive downward.
- **DNS caching**: servers cache answers with a TTL (time to live) to reduce traffic; negative caching stores "name does not exist".
- **Resource records (RR) — five important types** (one/two-mark answers):
  - **A**: maps a host name to a 32-bit IPv4 address (e.g., www.example.com. IN A 93.184.216.34).
  - **AAAA**: maps a host name to a 128-bit IPv6 address.
  - **MX**: mail exchange record — the mail server(s) for a domain (with priority number).
  - **CNAME**: canonical name — an alias pointing to another (canonical) host name.
  - **NS**: name server record — the authoritative name server for a zone; PTR: reverse mapping (IP to name).

```
[DIAGRAM: DNS resolution (iterative from local server)
 Client -> Local DNS server
  |--(query www.example.com)--> Root server -> referral to .com server
  |--(query)--> .com TLD server -> referral to example.com server
  |--(query)--> authoritative server for example.com -> A record answer
 Answer returns to client
 Recursive mode: local server does all querying on behalf of the client
]
```

### TELNET and SSH

- **TELNET** (Terminal Network, RFC 854): a client-server protocol for **remote login** over TCP port 23. The client (terminal emulator) connects to the remote server; keystrokes are sent as NVT (Network Virtual Terminal) characters; the server echoes and executes. TELNET is simple and widely supported but sends **everything in plain text** — including passwords — so it is insecure and has largely been replaced by SSH.
- **SSH (Secure Shell)**: remote login and secure command execution over TCP port 22, providing encrypted, authenticated sessions. It uses public-key cryptography: the client verifies the server's host key; user authentication can use password (encrypted) or public-key pairs. Beyond remote shell, SSH supports secure file transfer (SFTP, SCP) and port forwarding (tunneling).
- **Comparison (one-mark answer)**: TELNET (port 23) is unencrypted and insecure; SSH (port 22) encrypts the whole session, authenticates both ends, and supports tunneling. SSH is the standard for remote administration today.

### Cryptography Fundamentals

- **Cryptography** is the science of secret writing: transforming plaintext into ciphertext (encryption) so that only authorized parties can recover it (decryption). Cryptanalysis is the attempt to break ciphers. Goals: confidentiality, integrity, authentication, and non-repudiation.
- **Components**: plaintext (P) -> encryption algorithm + key (K) -> ciphertext (C) -> decryption algorithm + key -> plaintext. The key is the secret; the algorithms may be public (Kerckhoffs's principle: security rests in the key).
- **Symmetric-key (conventional) cryptography**: the **same key** is used for encryption and decryption; both parties must share the secret key securely beforehand (key-distribution problem). Fast, suitable for bulk data. Algorithms: DES (56-bit key, 64-bit blocks), 3DES, AES (128/192/256-bit keys), and stream ciphers (RC4); block ciphers (AES, DES) process fixed-size blocks, stream ciphers process bits.
- **Asymmetric-key (public-key) cryptography**: two related keys — a public key (freely distributed) and a private key (kept secret); what one encrypts, only the other decrypts. Solves the key-distribution problem but is ~1000 times slower. Algorithms: RSA (based on integer factorization, key sizes 1024-4096 bits), Diffie-Hellman (key exchange, based on discrete logarithm), and elliptic-curve cryptography (ECC, smaller keys for equal strength).
- **Key comparison (two-mark answer)**: symmetric — one shared key, fast, key-distribution problem, provides confidentiality only; asymmetric — key pair, slower, solves key distribution, and can additionally provide authentication and non-repudiation via digital signatures.
- **Hash functions and digital signatures**: a hash (SHA-1, SHA-256, MD5) produces a fixed-size digest of a message (integrity); signing the hash with the sender's private key creates a digital signature (authentication + non-repudiation).
- **Hybrid practice**: public-key crypto is used to exchange a session key (e.g., via Diffie-Hellman or RSA), and the fast symmetric cipher (AES) encrypts the actual data — exactly what TLS does.

### Firewalls and SSL/TLS

- **A firewall** is a device (router or host software) placed between a trusted internal network and an untrusted external network (the Internet); it filters traffic according to a security policy. Firewalls can be:
  - **Packet-filter firewall**: inspects each packet's header (source/destination IP, port, protocol) and forwards or drops it based on rules (ACLs). Fast but no content inspection, vulnerable to spoofing.
  - **Stateful (dynamic) firewall**: tracks the state of connections (TCP handshakes, sequence numbers); only packets belonging to established connections pass — prevents spoofed connection hijacking.
  - **Proxy (application gateway)**: sits at the application layer, relays and inspects application messages (e.g., an HTTP proxy validating URLs and content) — strongest inspection, but slower and application-specific.
- **Defense in depth**: firewalls are one layer; combined with NAT, IDS/IPS, and VPNs they protect the perimeter.
- **SSL/TLS (Secure Sockets Layer / Transport Layer Security)** is the security protocol layered between TCP and application protocols (HTTPS, FTPS, SMTPS); TLS 1.3 is the current version (SSL 2/3 deprecated). It provides:
  - **Confidentiality**: session keys encrypt application data (bulk cipher like AES-GCM).
  - **Integrity**: MAC/HMAC (or AEAD) detects tampering.
  - **Authentication**: the server (and optionally client) proves identity with X.509 certificates signed by a Certificate Authority (CA).
- **TLS handshake (simplified)**:
  1. Client sends ClientHello (supported versions, cipher suites, random number).
  2. Server replies ServerHello (chosen suite), its certificate (public key), and key-exchange material.
  3. Client verifies the certificate against CAs, then (RSA mode) encrypts a pre-master secret with the server's public key, or (Diffie-Hellman/ECDHE) computes a shared secret; both sides derive the same session keys.
  4. Finished messages confirm the handshake; application data now flows encrypted with symmetric keys; connection ends with close-notify.
- **TLS protocol stack**: Record protocol (fragments, compresses, encrypts, MACs application data) + Handshake, ChangeCipherSpec, Alert protocols.
- **Two-mark answer — TLS services**: encryption (secrecy), MAC/integrity, certificate-based authentication, and protection against replay via sequence numbers — giving HTTPS its confidentiality, integrity, and authenticity.

```
[DIAGRAM: TLS handshake (simplified)
 Client                         Server
   |-- ClientHello (version, cipher suites, random) -->|
   |<-- ServerHello (chosen suite, random), Certificate, key exchange --|
   |-- (verify certificate; compute pre-master secret) -->
   |-- ChangeCipherSpec + Finished ------------------->|
   |<-- ChangeCipherSpec + Finished -------------------|
   |=========== encrypted application data (AES keys) ===========|
]
```