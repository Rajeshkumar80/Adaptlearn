# BCS502 — Computer Networks

## Module 4: Transport Layer Protocols

### Transport Layer Services

- The **Transport layer** is responsible for **process-to-process delivery** of the entire message — it is the first end-to-end layer (Network and below work hop by hop). Its protocols are implemented only at the two end hosts.
- **Process-to-process communication**: a process (running program) on one host communicates with a process on another; the delivery unit is the message/segment, identified by port numbers.
- **Multiplexing and demultiplexing**: a sending host's transport layer multiplexes data from several processes onto one network connection; the receiving host demultiplexes incoming segments to the correct process using the destination port number.
- **Socket addressing**: each endpoint is identified by a socket = IP address + port number (16-bit port). Well-known ports: HTTP = 80, FTP = 21/20, TELNET = 23, SMTP = 25, DNS = 53, DHCP = 67/68, TFTP = 69, POP3 = 110, IMAP = 143, HTTPS = 443. Port ranges: 0-1023 well-known, 1024-49151 registered, 49152-65535 dynamic/ephemeral.
- **Connectionless vs connection-oriented services**:
  - Connectionless (UDP): each segment is sent independently; no handshake; no sequence tracking; faster, no reliability — suitable for small messages and real-time applications.
  - Connection-oriented (TCP): a logical connection is established (3-way handshake) before data transfer and released (termination) afterwards; provides reliability via sequence numbers, acknowledgements, and retransmission.
- **Reliability**: guaranteed delivery, in-order delivery, duplicate detection, and error detection (checksum). TCP provides all; UDP provides only checksum (optional).

### UDP (User Datagram Protocol)

- **UDP** is a connectionless, unreliable transport protocol described in RFC 768; it adds process-to-process communication (ports) and a checksum to IP's best-effort service.
- **UDP features**: no connection establishment (no handshake — first segment can be data), no flow control, no error control beyond the checksum, minimal overhead (8-byte header). Each UDP datagram is an independent entity (datagram boundaries preserved).
- **UDP header (8 bytes)**: Source port (16) | Destination port (16) | Length (16, of header + data, min 8) | Checksum (16). Total length field is needed because the payload length varies.
- **UDP checksum calculation** (exam-frequent): the checksum is computed over a **pseudo-header + UDP header + data**, padded with zeros to make the total length a multiple of 16 bits. The pseudo-header contains: source IP (32), destination IP (32), zero (8), protocol (8, value 17 for UDP), and UDP length (16). It is not transmitted; it lets the receiver verify that the datagram went to the correct host and port. The checksum is the one's complement of the sum of all 16-bit words (with end-around carry). A zero checksum means no checksum computed (optional in IPv4, mandatory in IPv6).
- **UDP applications**: DNS (query-response), DHCP, SNMP, TFTP, RIP, and real-time streaming (RTP over UDP) where retransmission of stale packets is useless.
- **UDP advantages**: lower latency (no handshake), smaller header, no congestion-control throttling, process-to-process demultiplexing with ports.

```
[DIAGRAM: UDP datagram (8-byte header)
 Source Port(16) | Destination Port(16)
 Length(16)      | Checksum(16)
 Data (payload)
 Pseudo-header used only for checksum:
 Source IP(32) | Dest IP(32) | 0(8) | Protocol=17(8) | UDP Length(16)
]
```

### TCP: Services, Features and Segment Format

- **TCP (Transmission Control Protocol, RFC 793)** is a connection-oriented, reliable, byte-stream transport protocol. It provides **full-duplex** communication between two processes.
- **TCP features**: connection-oriented (handshake), reliable (acknowledgements + retransmission), byte-stream delivery (no message boundaries — sender writes bytes, receiver reads a stream), full-duplex, flow control (sliding window), congestion control, and multiplexing (ports).
- **TCP segment format**:
  - Source port (16) | Destination port (16).
  - Sequence number (32): byte number of the first byte carried in this segment (for SYN, it is the initial sequence number, ISN).
  - Acknowledgment number (32): the next byte expected; valid only when ACK flag = 1 (piggybacked ACK).
  - HLEN (4 bits, header length in 4-byte words, min 5, max 15).
  - Reserved (6 bits) + Control flags (6 bits): URG, ACK, PSH, RST, SYN, FIN.
  - Window size (16): receiver's advertised window (rwnd) — how many bytes the receiver is ready to accept.
  - Checksum (16): computed over pseudo-header (with protocol value 6) + segment, like UDP.
  - Urgent pointer (16, valid when URG = 1).
  - Options (variable): MSS (maximum segment size), window scale, timestamps, SACK.
  - Data (payload).
- **MSS (Maximum Segment Size)**: the largest data chunk TCP will send, negotiated in the SYN; often ~1460 bytes on Ethernet (1500 MTU - 40 bytes headers).

```
[DIAGRAM: TCP segment header
 Source Port(16) | Destination Port(16)
 Sequence Number (32)
 Acknowledgment Number (32)
 HLEN(4) | Reserved(6) | URG ACK PSH RST SYN FIN(6) | Window(16)
 Checksum(16) | Urgent Pointer(16)
 Options (variable) | Data
]
```

### TCP Connection Establishment (3-Way Handshake) and Termination

- **Three-way handshake** establishes a TCP connection (SYN, SYN+ACK, ACK):
  1. Client sends a SYN segment with seq = x (its initial sequence number, ISN) and no data; the SYN consumes one sequence number.
  2. Server replies with SYN+ACK: its own ISN y, ack = x + 1, and reserves buffers.
  3. Client sends ACK with seq = x + 1, ack = y + 1. Connection is now established and data can flow in both directions (full duplex).
- **Purpose** (two-mark answer): both sides synchronize their initial sequence numbers and agree on the parameters (MSS, window scale) before any data transfer — this prevents delayed/duplicate connection attempts from corrupting the connection.
- **Connection termination (four-way or "two three-way handshakes")**:
  1. Client sends FIN (seq = x, the last byte + 1); it enters FIN-WAIT-1.
  2. Server ACKs (ack = x + 1); client enters FIN-WAIT-2. The server may still send data (half-close).
  3. Server sends its own FIN (seq = y, ack = x + 1); it enters LAST-ACK.
  4. Client ACKs (ack = y + 1); server closes; client waits in TIME-WAIT (2 x MSL — maximum segment lifetime) before closing, to allow late duplicate segments to expire.
- **Sequence/acknowledgment example (exam pattern)**: handshake with ISN x = 1000: SYN(seq=1000); SYN+ACK(seq=5000, ack=1001); ACK(seq=1001, ack=5001). Data flow then counts every byte: after sending 1000 bytes, client's next seq = 2001, server's ack = 2001.
- **Connection reset**: an RST segment aborts a connection immediately (e.g., when a host receives a segment for a closed port).

```
[DIAGRAM: TCP 3-way handshake
 Client                          Server
   |-- SYN (seq=x) ---------------->|
   |<-- SYN + ACK (seq=y, ack=x+1) -|
   |-- ACK (seq=x+1, ack=y+1) ----->|
   |======== data transfer =========|
   |-- FIN (seq=u) ---------------->|
   |<-- ACK (ack=u+1) --------------|
   |<-- FIN (seq=v, ack=u+1) -------|
   |-- ACK (ack=v+1) -------------->|
   (TIME-WAIT)            connection closed
]
```

### TCP Flow Control: Sliding Window

- **Flow control** prevents a fast sender from overwhelming a slow receiver. TCP uses the **sliding window** mechanism: the receiver advertises a window size (rwnd) — the number of bytes the receiver's buffer can accept — in every segment it sends (Window field).
- **Sliding window dynamics** (2024 PYQ): the sender may send up to rwnd bytes beyond the last acknowledged byte without waiting; as ACKs arrive, the window slides forward. The sender maintains: sent-and-acknowledged, sent-and-unacknowledged, can-send (window), and cannot-send (beyond window) regions.
- **The sender's window = min(cwnd, rwnd)**: cwnd is the congestion window (sender-controlled, for congestion control); rwnd is the receiver's advertised window (receiver-controlled). Effective window shrinks as either one is small.
- **Acknowledgement of data**: the receiver sends ACKs that carry the acknowledgment number (next expected byte) and the current rwnd. TCP uses cumulative ACKs — an ACK with ack = n acknowledges all bytes up to n - 1.
- **Example**: rwnd = 5000, sender sends bytes 1000-3999 (3000 bytes); on ACK 2000 (window now covers 6000-11000...) the window slides forward accordingly; the sender can then send bytes 5000-6000 etc. If rwnd = 0, the sender stops until a new ACK advertises more window (with the persist timer to avoid deadlock from a lost window update).
- **Efficiency**: sliding window allows multiple outstanding frames/segments (pipelining) instead of stop-and-wait's one-at-a-time, greatly improving throughput on high-delay links.

### TCP Error Control: Retransmission and Fast Retransmit

- **Error control** in TCP covers lost, damaged, duplicated, and out-of-order segments; the tools are sequence numbers, ACKs, timers, and retransmission.
- **Retransmission timer (RTO)**: when a segment is sent, TCP starts a timer; if the ACK does not arrive before RTO expires, TCP retransmits the segment. RTO is computed dynamically from the smoothed round-trip time: RTO = RTTs + 4 x RTTd (estimated RTT and deviation, updated on every ACK using exponential weighted moving average).
- **Damaged segments**: the receiver discards a segment failing the checksum and sends nothing (or a duplicate ACK) — the sender's timer eventually triggers retransmission.
- **Lost ACKs**: the sender's timer expires; it retransmits; the cumulative ACK mechanism handles duplicates gracefully.
- **Fast Retransmit** (exam-frequent): if the sender receives **3 duplicate ACKs** (three ACKs acknowledging the same sequence number, i.e., the 4th ACK for the same byte), it retransmits the missing segment **immediately**, without waiting for the RTO to expire — saving a full timeout delay. Example: sender transmits segments 1-6; ACKs for 1, 2, 3 arrive but ACK 4 is lost; receiver ACKs "4" for segments 4, 5, 6 (duplicates); the sender retransmits segment 4 on the third duplicate.
- **Out-of-order segments**: the receiver buffers them and ACKs the expected byte (the gap), until the missing segment arrives.
- TCP may use **Selective Acknowledgment (SACK)**: the receiver reports exactly which segments are missing, so the sender retransmits only those (instead of Go-Back-N style whole window).

### TCP Congestion Control: Slow Start, Congestion Avoidance, Fast Recovery

- **Congestion control** prevents the sender from overloading the network: TCP estimates congestion with the congestion window cwnd (sender-side variable, in segments or bytes) and follows the AIMD (Additive Increase, Multiplicative Decrease) principle.
- **Slow Start** (exponential growth): cwnd starts at 1 segment (or 2-4 per RFC 5681); every ACK received doubles cwnd (window increases by 1 segment per ACK), so cwnd grows exponentially (1, 2, 4, 8, ...) until it reaches the slow-start threshold (ssthresh) or a loss occurs.
- **Congestion Avoidance** (linear growth): once cwnd >= ssthresh, cwnd grows by only 1 segment per round-trip time (additive increase, linear), probing gently for available bandwidth.
- **On congestion detection (loss)**:
  - Timeout: ssthresh = cwnd / 2, cwnd = 1 MSS, and the sender restarts Slow Start — a conservative response.
  - 3 duplicate ACKs: **Fast Retransmit** plus **Fast Recovery**: ssthresh = cwnd / 2, cwnd = ssthresh (not 1), so the sender continues at half the old window (multiplicative decrease) and resumes Congestion Avoidance — avoiding the penalty of a full Slow Start.
- **AIMD summary**: increase cwnd additively in the absence of loss; cut cwnd multiplicatively (halve) on congestion — this oscillates around the network's fair share.
- **TCP variants**: Tahoe (Slow Start + Congestion Avoidance, cwnd = 1 on loss), Reno (adds Fast Recovery), NewReno (improved recovery from multiple losses), Vegas (delay-based), Cubic (Linux default, cubic growth function for high bandwidth-delay product links).
- **Slow start graph (exam sketch)**: cwnd vs time — exponential rise to ssthresh, then linear rise; at loss, the sawtooth drop to half (Fast Recovery) or to 1 (timeout -> Slow Start).

```
[DIAGRAM: TCP congestion control (cwnd vs time)
 cwnd ^
   8  |        /|
   4  |      /  |
   2  |    /    |  linear growth
   1  |  /      (congestion avoidance)
      |/    (slow start: exponential)
      +-------------------> time
 ssthresh line at cwnd=4; on loss: drop to half, restart
]
```