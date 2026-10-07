# BCS502 — Computer Networks

> **VTU B.E. CSE | 2022 Scheme | 5th Semester**

---

## 📋 Course Information

| Field | Details |
|---|---|
| **Subject Name** | Computer Networks |
| **Subject Code** | BCS502 |
| **Semester** | 5th |
| **Credits** | 04 |
| **Teaching Hours/Week** | 3L : 0T : 2P : 0S |
| **Total Pedagogy Hours** | 40 Theory + Lab |
| **CIE Marks** | 50 |
| **SEE Marks** | 50 |
| **Total Marks** | 100 |
| **Exam Duration** | 3 Hours |

---

## 🎯 Course Objectives

1. Understand foundational networking architectures, layered models (OSI and TCP/IP), and physical transmission.
2. Analyze data link layer protocols, error detection/correction, and medium access control (MAC) mechanisms.
3. Master network layer routing algorithms, IP addressing (IPv4/IPv6), subnetting, and internetworking.
4. Understand transport layer services, connection management, flow control, and TCP congestion control.
5. Explore application layer protocols including DNS, HTTP, SMTP, and socket programming.

---

## 📚 Module-Wise Syllabus

### Module 1: Introduction & Physical / Data Link Layer
- Network edge, Network core, Packet switching vs Circuit switching, Delay, Loss, and Throughput
- Protocol layers and Service models: OSI Reference Model vs TCP/IP Protocol Suite
- Physical Layer: Transmission media (guided and unguided), Multiplexing (FDM, TDM, WDM)
- Data Link Layer Services: Framing, Error detection and correction (Parity, Checksum, CRC)
- Data Link Control: Stop-and-Wait, Go-Back-N, Selective Repeat ARQ
- Medium Access Control (MAC): Random Access (ALOHA, CSMA/CD, CSMA/CA), Ethernet standard (802.3)

### Module 2: Network Layer — Data Plane
- Network Layer Overview: Forwarding vs Routing, Network service models
- Router Architecture: Input ports, Switching fabric, Output ports, Queuing and packet drops
- Internet Protocol (IP): IPv4 Datagram format, Addressing, Subnetting, CIDR, Classless addressing
- Dynamic Host Configuration Protocol (DHCP), Network Address Translation (NAT)
- IPv6: Datagram format, Address representation, Transition from IPv4 to IPv6 (Dual-stack, Tunneling)

### Module 3: Network Layer — Control Plane
- Routing Algorithms: Classification (Global vs Decentralized, Static vs Dynamic)
- Link-State (LS) Routing Algorithm (Dijkstra's Algorithm)
- Distance-Vector (DV) Routing Algorithm (Bellman-Ford Algorithm, Count-to-Infinity problem)
- Intra-AS Routing in the Internet: OSPF (Open Shortest Path First)
- Inter-AS Routing: BGP (Border Gateway Protocol)
- Internet Control Message Protocol (ICMP), Software-Defined Networking (SDN) overview

### Module 4: Transport Layer
- Transport Layer Services: Multiplexing and Demultiplexing, Connectionless vs Connection-Oriented services
- User Datagram Protocol (UDP): Segment structure, Checksum calculation, Applications
- Principles of Reliable Data Transfer: rdt 1.0 through rdt 3.0, Pipelined protocols
- Transmission Control Protocol (TCP): Connection establishment (Three-way handshake) and termination
- TCP Segment structure, Sequence and Acknowledgment numbers, Round-trip time estimation
- Flow Control: Sliding Window protocol; TCP Congestion Control: AIMD, Slow Start, Fast Retransmit, Fast Recovery

### Module 5: Application Layer & Socket Programming
- Principles of Network Applications: Client-Server Architecture, P2P Architecture
- Domain Name System (DNS): Services, Hierarchy, DNS record types, Resolution process
- Web and HTTP: Persistent and Non-persistent connections, HTTP message formats, Cookies, Web caching
- Electronic Mail: SMTP, IMAP, POP3 protocols
- File Transfer Protocol (FTP), Content Delivery Networks (CDNs)
- Network Socket Programming: Socket programming using UDP and TCP in Python/C

---

## ✅ Course Outcomes (COs)

| CO | Description |
|---|---|
| **CO1** | Explain layered network architectures (OSI & TCP/IP) and physical layer data transmission concepts. |
| **CO2** | Apply error detection (CRC) and evaluate data link layer flow/access control protocols. |
| **CO3** | Analyze IPv4/IPv6 addressing schemes, subnetting, and execute network routing algorithms (LS & DV). |
| **CO4** | Compare UDP and TCP transport services, flow control, and TCP congestion avoidance mechanisms. |
| **CO5** | Design and configure application layer network services (HTTP, DNS) and develop socket programs. |

---

## 📖 Textbooks & References

- **Computer Networking: A Top-Down Approach** — James F. Kurose and Keith W. Ross, 8th Edition, Pearson.
- **Data Communications and Networking** — Behrouz A. Forouzan, 5th Edition, McGraw-Hill.
- **Computer Networks** — Andrew S. Tanenbaum, David J. Wetherall, 6th Edition, Pearson.

---

> ⚠️ *Always refer to the official VTU website or your college's academic portal for the most current syllabus updates.*
