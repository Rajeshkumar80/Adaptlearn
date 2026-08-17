# BCS502 — Computer Networks

## Module 2: Data Link Layer & Media Access Control

### Error Detection and Correction: Introduction and Block Coding

- The Data Link layer must ensure that frames arriving at the receiver are error-free. Errors are introduced by noise, attenuation, and signal distortion during transmission.
- **Error types**: single-bit error (only one bit in the data unit changes) and burst error (two or more bits change, possibly within a run of bits — the more common and dangerous case; e.g., noise impulses).
- **Error detection** finds whether an error has occurred (but not which bits are wrong); **error correction** (forward error correction, FEC) locates and corrects the errors using redundancy.
- **Redundancy**: the sender adds extra bits to the data before transmission. The extra bits are removed at the receiver after checking.
- **Block coding**: data is divided into blocks (words) of k bits; the encoder adds r redundant bits to produce an n-bit codeword (n = k + r). Block coding is one of the simplest error control methods.
- **Four steps of block coding**:
  1. Division into k-bit blocks (datawords).
  2. Addition of r redundant bits to form an n-bit codeword.
  3. Transmission of the codeword.
  4. At the receiver, the incoming codeword is checked against the valid codewords of the code table.
- **Code rate**: the ratio of data bits to codeword bits, r = k/n; a lower code rate gives more redundancy and better protection but wastes bandwidth.
- **Hamming distance**: the number of positions in which two codewords differ (XOR count). For a code with minimum Hamming distance d_min:
  - To guarantee detection of up to s errors: d_min >= s + 1.
  - To guarantee correction of up to t errors: d_min >= 2t + 1.
- **Example**: parity check (even/odd) is a single-bit block code with d_min = 2; it detects all single-bit errors but cannot detect even numbers of bit errors and cannot correct errors.

### Cyclic Codes and CRC (Cyclic Redundancy Check)

- **Cyclic codes** are a special class of linear block codes where cyclic shift of a codeword gives another valid codeword. They are easy to implement with shift registers and are widely used for error detection.
- **CRC (Cyclic Redundancy Check)** is the most common cyclic-code error detection technique used in networks (Ethernet, PPP, HDLC).
- **CRC concept**: The sender appends r redundant bits (the remainder) to the data such that the resulting bit string is exactly divisible by a pre-agreed generator polynomial G(x). The receiver divides the received string by G(x); a non-zero remainder means an error.
- **CRC generator selection rules**: the generator should have at least two terms; should not be divisible by x (i.e., no factor x^1); and should be divisible by (x + 1) to detect all odd numbers of errors.
- **Standard CRC polynomials**: CRC-8 (x^8 + x^2 + x + 1), CRC-16 (x^16 + x^15 + x^2 + 1, used in HDLC), CRC-32 (x^32 + x^26 + x^23 + x^22 + ... + x^2 + x + 1, used in Ethernet).
- **CRC performance** (two-mark answer): with r check bits, CRC can detect all burst errors of length <= r, all odd numbers of errors, and any error burst longer than r with probability 1 - (1/2)^r. A properly chosen generator makes CRC far more powerful than parity or simple checksums.
- **Worked example (exam pattern)**: Data D = 1101011011, generator G(x) = x^4 + x + 1 (binary 10011), r = 4:
  1. Append 4 zeros to data: 11010110110000.
  2. Divide (XOR) by 10011; the remainder is 1110 (4 bits).
  3. Transmitted codeword = 1101011011 + 1110 = 11010110111110.
  4. Receiver divides the received word by 10011; a zero remainder means no error.

```
[DIAGRAM: CRC division at sender
 Data bits (k) | 0000 (r appended zeros)
 Divide by generator G(x) (r+1 bits) using XOR
 Remainder (r bits) = CRC checksum
 Transmitted codeword = Data bits || Remainder
 Receiver: divide codeword by G(x); remainder 0 => accepted, else error
]
```

### Checksum

- **Checksum** is a simple error detection method: the sender adds a set of data items (words) and sends the complement of the sum as the checksum along with the data. The receiver adds all items including the checksum; if the result is all 1s (in one's complement arithmetic), no error is detected.
- **Procedure** (one's complement):
  1. Divide data into 16-bit words.
  2. Add the words; if a carry out of the most significant bit occurs, wrap it around (add it back).
  3. Take the one's complement of the final sum — this is the checksum, appended to the data.
  4. At the receiver, add all 16-bit words including the checksum; the sum should be all 1s if no error.
- Checksum detects most errors but not all; it cannot detect the swapping of two words or the replacement of a word by its complement in some cases. Used in UDP, TCP, IP, and the Internet checksum. It is simpler and faster than CRC but weaker — CRC is preferred for the Data Link layer.

### Forward Error Correction (FEC)

- **Forward Error Correction** allows the receiver to locate and correct errors without retransmission — the sender adds redundant bits that let the receiver reconstruct the original data.
- FEC is useful where retransmission is impossible or expensive: satellite links, deep-space communication, real-time audio/video streaming, and wireless mobile networks.
- **Simple FEC using parity bits**: Hamming code places m parity bits in specific positions (powers of 2: 1, 2, 4, 8, ...) of an n-bit codeword so that each parity bit checks a defined set of positions; the syndrome (the decimal value of the error position bits) directly points to the erroneous bit. Hamming code with distance 3 corrects single-bit errors.
- **Other FEC schemes**: repetition codes, Hamming codes, and modern convolutional and block codes (Reed-Solomon, LDPC) used in CDs, QR codes, and deep-space communication.
- Note: FEC requires more redundancy (lower code rate) than pure detection; the trade-off is extra overhead vs the cost of retransmission.

### Data Link Control: Services and Framing

- **Data Link Control (DLC)** is the Data Link layer protocol that handles framing, flow control, and error control between two directly connected nodes.
- **DLC services**: framing (packaging bits into frames), flow control (regulating data rate so a fast sender does not overwhelm a slow receiver), error control (detecting and retransmitting damaged or lost frames), and connection management (establishing and terminating links).
- **Framing** divides the bit stream from the physical layer into discrete data-link frames, each with header and trailer, so that errors can be detected and the receiver knows where a frame begins and ends. The Data Link layer adds the header (sender/receiver addresses) and a trailer (error detection bits, usually CRC) to the data packet from the network layer.
- **Character-oriented framing** (byte-oriented): treats the frame as a collection of bytes. Problem: a data byte may look like a control character (e.g., DLE STX / DLE ETX delimiters). Solution: byte stuffing — insert an extra DLE before any DLE occurring in data (e.g., ESC characters used in PPP). Since data size varies, efficiency depends on the data.
- **Bit-oriented framing**: treats the frame as a string of bits; uses a flag pattern 01111110 (0x7E) at start and end. Problem: six consecutive 1s may appear in data. Solution: bit stuffing — insert a 0 after every five consecutive 1s in data; the receiver removes the 0 after five 1s. Used in HDLC, PPP.
- **Flow control**: prevents the sender from overwhelming the receiver; methods — stop-and-wait (sender sends one frame and waits for an acknowledgement) and sliding window (sender may send up to w frames before waiting).
- **Error control**: detection plus automatic repeat request (ARQ). Mechanisms: Stop-and-Wait ARQ, Go-Back-N ARQ (sender window of N frames; on error, retransmits from the lost frame), Selective-Repeat ARQ (retransmits only the damaged frame).
- **Connectionless vs connection-oriented DLC**: In connectionless protocols (e.g., simple acknowledge-and-stop used in some LAN contexts), no connection is established and reliability is minimal. Connection-oriented DLC (HDLC, PPP) establishes a logical connection, numbers frames with sequence numbers, and provides acknowledgements and retransmission.

### HDLC (High-Level Data Link Control)

- **HDLC** is a bit-oriented, connection-oriented Data Link Control protocol developed by ISO; it is the basis for many other DLCs (PPP, LAP-B, LAP-F).
- **Station types**: primary station (controls the link, issues commands), secondary station (operates under the primary's control, issues responses), and combined station (can both issue commands and responses — used in balanced configuration).
- **Configuration modes**: unbalanced (one primary + one or more secondaries; supports point-to-point and multipoint), balanced (two combined stations, point-to-point, either can initiate).
- **Frame format** (10 fields): Flag (8 bits, 01111110), Address (8/16 bits), Control (8/16 bits), then optional Information (variable) and FCS fields, Address, and closing Flag. Fields: Flag | Address | Control | Information | FCS | Flag. FCS is the CRC error detection field; bit stuffing ensures the flag pattern never appears in the frame body.
- **Control field types** (three):
  - I-frame (Information): carries user data; includes send sequence number N(S) and receive sequence number N(R) with a poll/final (P/F) bit; also piggybacks acknowledgements.
  - S-frame (Supervisory): does not carry data; performs flow and error control — RR (receive ready), RNR (receive not ready), REJ (reject), SREJ (selective reject).
  - U-frame (Unnumbered): used for link management — SETUP, DISC, UA (unnumbered acknowledgement), and others; the two sequence-number bits are absent.
- **HDLC operation**: three phases — initialization (SETUP frame), data transfer (I-frames with N(S)/N(R) flow control), and disconnection (DISC + UA). Uses Go-Back-N or Selective-Repeat ARQ for error control.

```
[DIAGRAM: HDLC frame structure
 Flag(8) | Address(8/16) | Control(8/16) | Information(var) | FCS(16/32) | Flag(8)
 01111110                (I/S/U types)                      CRC check      01111110
]
```

### Point-to-Point Protocol (PPP)

- **PPP** is a byte-oriented, connectionless DLC protocol designed for point-to-point links — dial-up modems, DSL, and router-to-router WAN links. It is the standard protocol for connecting a home computer to an ISP.
- **PPP goals**: encapsulate IP packets in frames, establish and configure the link, and authenticate users.
- **PPP services**: framing (bit-oriented style with byte stuffing), link control (LCP — Link Control Protocol), authentication (PAP — Password Authentication Protocol; CHAP — Challenge Handshake Authentication Protocol), and network control (NCP — Network Control Protocol, e.g., IPCP to negotiate IP addresses).
- **PPP frame format**: Flag (0x7E) | Address (0xFF) | Control (0x03) | Protocol (2 bytes) | Payload (IP packet, max 1500 bytes) | FCS | Flag. Byte stuffing is used to avoid the flag byte in data: 0x7E -> 0x7D 0x5E, 0x7D -> 0x7D 0x5D.
- **PPP does not offer flow control or error control** — it is connectionless and unreliable; reliability is delegated to higher layers (TCP).
- **Comparison HDLC vs PPP** (two-mark answer): HDLC is bit-oriented, connection-oriented, supports multipoint with primary/secondary stations; PPP is byte-oriented, connectionless, point-to-point only, and adds authentication (PAP/CHAP) and network-layer negotiation (NCP) that HDLC lacks.

### Media Access Control: Random Access

- **Media Access Control (MAC)** decides which station gets the shared channel (broadcast link) next. Methods fall into three groups: random access, controlled access, and channelization.
- **Random access** (contention): no station is superior; any station can transmit whenever it has data. Collisions occur when two stations transmit simultaneously, so each station follows a procedure: if the channel is busy, defer; if idle, transmit; handle collisions by retransmitting after a random wait (backoff).
- **ALOHA**: the simplest random access protocol (1970s, University of Hawaii). Pure ALOHA: transmit whenever data is ready; on collision, wait a random backoff time and retransmit. Vulnerable time = 2 x Tfr (frame transmission time). Maximum throughput = 18.4% of channel capacity (G = 0.5).
- **Slotted ALOHA**: time is divided into slots of Tfr; a station may transmit only at the start of a slot. Vulnerable time = Tfr. Maximum throughput = 36.8% (G = 1) — double that of pure ALOHA.
- **CSMA (Carrier Sense Multiple Access)**: stations "listen before talk" — sense the carrier; transmit only when the channel is idle. Vulnerable time = propagation delay (Tp). Persistence strategies: 1-persistent (send immediately when idle), p-persistent (send with probability p when idle), and nonpersistent (if busy, wait a random time and sense again). CSMA still suffers collisions because of propagation delay.
- **CSMA/CD (Collision Detection)**: used in wired Ethernet (IEEE 802.3). After transmission, the station continues listening; if it detects a collision (voltage change), it aborts and sends a jam signal, then waits a random (binary exponential) backoff time before retrying. The minimum frame size is chosen so that the sender is still transmitting when a collision from the farthest station arrives (2 x Tp). Efficiency improves at high load because wasted time is reduced.
- **CSMA/CA (Collision Avoidance)**: used in wireless (IEEE 802.11 Wi-Fi) where collision detection is impossible (a station cannot listen while transmitting and cannot hear all stations). It avoids collisions by:
  1. Sensing the channel before sending (IFS — interframe space).
  2. Using a random backoff time after the channel becomes idle.
  3. Optionally reserving the channel with RTS/CTS (Request To Send / Clear To Send) handshake — the hidden terminal problem is solved because neighbors hear the CTS and stay silent.
  4. The receiver acknowledges each frame (ACK); unacknowledged frames are retransmitted.
- **Why CSMA/CD is unsuitable for wireless** (one-mark/two-mark answer): in wireless, the sender cannot transmit and listen simultaneously (the signal strength of its own transmission masks incoming signals), so collision detection is not possible; the hidden terminal problem means the sender cannot always sense other transmissions; and signal fading makes detection unreliable.
- **Throughput comparison** (exam-frequent): Pure ALOHA max 18.4%, Slotted ALOHA max 36.8%, CSMA/CD approaches up to 90% under heavy load with proper sizing.

```
[DIAGRAM: CSMA/CD flow
 Frame ready --> Channel idle? (No -> wait/backoff) (Yes -> transmit)
 During transmission: collision detected? (No -> success)
 (Yes -> stop, send jam signal, binary exponential backoff, retry)
]
```

### Controlled Access: Reservation, Polling, Token Passing

- **Controlled access**: a central authority or a protocol ensures that only one station transmits at a time, so collisions never occur.
- **Reservation**: time is divided into slots; in each slot a station makes a reservation, and then the reserved stations transmit in order. Example: a station that wants to send data makes a reservation in a reservation frame (RTS); in the following time slots, the reserved stations transmit one by one, avoiding collisions entirely.
- **Polling**: a primary station (controller) controls the medium. The primary sends a **select** frame (data to a secondary) or a **poll** frame (inviting a secondary to send). The secondary replies with data or a NAK (no data). Drawbacks: the poll field and select field add overhead; the primary must sense all lines; a primary failure disables the network; response time is poor for some applications.
- **Token passing**: stations form a logical ring; a special small frame called the token circulates around the ring. A station may transmit only when it holds the token; after transmitting (a limited time), it passes the token to the next station. Collisions cannot occur since only the token holder transmits. The token is also used as a polling mechanism (token + poll). Used in Token Ring (IEEE 802.5) and FDDI. Failures: a lost token must be regenerated, and a duplicate token must be deleted.