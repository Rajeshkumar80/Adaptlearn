# BCS502 — Computer Networks

## Module 3: Network Layer Protocols & Routing

### Network Layer Services and Packet Switching

- The **Network layer** is responsible for host-to-host (source-to-destination) delivery of packets across multiple networks; it is the layer that makes internetworking possible.
- **Services provided** (depending on the design): logical addressing (IP addresses identify hosts globally), routing (selecting the best path from source to destination), packetizing (encapsulating transport-layer segments into datagrams, and decapsulating at the destination), and, in connection-oriented designs, connection setup/teardown.
- The Internet's Network layer (IP) provides a **connectionless, unreliable, best-effort delivery** service: each datagram is routed independently, delivery is not guaranteed (packets may be lost, duplicated, or arrive out of order) — reliability is the job of the Transport layer (TCP).
- **Packet switching at the network layer**: datagram switching (each packet routed independently with full destination address) is what IP implements. The IPv4 datagram is the packet format; routers inspect the destination address and forward hop by hop.

### IPv4 Addressing: Classful Addressing

- **An IPv4 address** is a 32-bit address that uniquely identifies a device (interface) on the Internet; written in **dotted-decimal notation**, e.g., 192.168.10.7 (four octets of 8 bits each, values 0-255).
- **Address space**: 2^32 = 4,294,967,296 possible addresses. Every IPv4 address has a prefix (network part) and a suffix (host part).
- **Classful addressing** (original scheme): addresses divided into 5 classes — A, B, C, D, E — identified by the first bits of the address:
  - Class A: first bit 0 (0-127); 8-bit network ID, 24-bit host ID; 2^24 - 2 = 16,777,214 hosts per network; for very large networks.
  - Class B: first bits 10 (128-191); 16-bit network + 16-bit host; 65,534 hosts; for medium networks.
  - Class C: first bits 110 (192-223); 24-bit network + 8-bit host; 254 hosts; for small networks.
  - Class D: first bits 1110 (224-239); used for multicast (no host portion).
  - Class E: first bits 1111 (240-255); reserved for future use.
- **Network mask (default masks)**: Class A: 255.0.0.0, Class B: 255.255.0.0, Class C: 255.255.255.0. The mask is applied by ANDing it with the address to extract the network ID.
- **Special addresses**: network address (host bits all 0, e.g., 192.168.10.0 — the network ID, not assignable), broadcast address (host bits all 1, e.g., 192.168.10.255), loopback address 127.0.0.1, and private addresses (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — not routable on the public Internet).
- **Drawbacks of classful addressing**: address shortage and inefficient use (a Class B with 1000 hosts wastes ~64,000 addresses) — the reason CIDR was introduced.

### Classless Addressing and CIDR

- **Classless addressing** (1993, CIDR — Classless Inter-Domain Routing, RFC 1518/1519) removes the rigid A/B/C classes: an address is written as nnn.nnn.nnn.nnn/n, where /n is the number of bits in the prefix (network) portion.
- **CIDR notation** (two-mark answer): the prefix length n tells how many leading bits of the 32-bit address belong to the network; the remaining (32 - n) bits are host bits. Example: 192.168.10.0/24 means the first 24 bits are the network; host bits = 8; number of addresses = 2^8 = 256.
- **Block allocation rules**:
  1. The number of addresses in a block must be a power of 2.
  2. The block's first address must be divisible by the number of addresses (the first address's rightmost (32 - n) bits must be zero).
  3. The first address is the network address; the last address is the broadcast address (host bits all 1).
- **Mask notation**: the mask for a /n prefix has n consecutive 1s followed by (32 - n) zeros. Example: /24 -> 255.255.255.0; /26 -> 255.255.255.192.
- **Address aggregation (route summarization)**: ISPs assign contiguous blocks (e.g., 190.100.16.0/24, 190.100.17.0/24, ...) so routers can advertise one aggregated route (190.100.16.0/20) instead of many — shrinking the routing tables.
- **Subnetting vs supernetting**: subnetting borrows host bits to create smaller subnets within a classful or CIDR block; supernetting combines several blocks into one larger block to reduce routing table size.

### Subnetting and Masking

- **Subnetting** divides one IP network into smaller logical subnetworks to reduce network traffic, improve security, and use address space efficiently.
- **Procedure** (exam pattern — design subnets with equal host capacity):
  1. Decide the number of subnets S needed and the host capacity H per subnet.
  2. Choose the number of subnet bits s such that 2^s >= S, and host bits h such that 2^h - 2 >= H.
  3. The new (subnet) mask = original mask with s additional 1 bits borrowed from the host portion.
  4. Subnet addresses are formed by varying the borrowed bits; within each subnet: first usable address = subnet address + 1, last usable address = broadcast - 1, broadcast = subnet address with all host bits 1.
- **Worked example (2023 PYQ style)**: Block 192.168.10.0/24, need 4 equal subnets.
  - s = 2 bits (2^2 = 4 subnets); h = 6 bits (2^6 - 2 = 62 hosts each).
  - Subnet mask = /24 + 2 = /26 = 255.255.255.192.
  - Subnet 1: 192.168.10.0/26 — hosts 192.168.10.1 to 192.168.10.62, broadcast 192.168.10.63.
  - Subnet 2: 192.168.10.64/26 — hosts 192.168.10.65 to 192.168.10.126, broadcast 192.168.10.127.
  - Subnet 3: 192.168.10.128/26 — hosts .129 to .190, broadcast .191.
  - Subnet 4: 192.168.10.192/26 — hosts .193 to .254, broadcast .255.
- **Variable-length subnet mask (VLSM)**: subnets of different sizes within one network, used when departments need different numbers of hosts; avoids waste compared with fixed-size subnets.
- **Why subnetting?** (two-mark answer): reduces network congestion, saves address space, localizes failures, improves security (traffic stays within the subnet), and enables hierarchical routing.

```
[DIAGRAM: Subnetting 192.168.10.0/24 into 4 subnets
 192.168.10.0/24  (network: 24 bits, host: 8 bits)
 Borrow 2 host bits as subnet bits
 Subnet bits 00 -> 192.168.10.0/26   (hosts 1-62)
 Subnet bits 01 -> 192.168.10.64/26  (hosts 65-126)
 Subnet bits 10 -> 192.168.10.128/26 (hosts 129-190)
 Subnet bits 11 -> 192.168.10.192/26 (hosts 193-254)
 Mask /26 = 255.255.255.192
]
```

### IPv4 Datagram Format

- The **IPv4 datagram** is the packet format of the Internet Protocol, 20-60 bytes header plus payload:
  - **Version (4 bits)**: IP version; IPv4 = 4.
  - **HLEN / IHL (4 bits)**: header length in 4-byte words; minimum 5 (20 bytes), maximum 15 (60 bytes).
  - **Service Type / DSCP (8 bits)**: precedence and QoS hints.
  - **Total Length (16 bits)**: total datagram length (header + data), max 65,535 bytes.
  - **Identification (16 bits)**: identifies the fragments of one original datagram.
  - **Flags (3 bits)**: DF (do not fragment), MF (more fragments), and reserved bit.
  - **Fragment Offset (13 bits)**: position of this fragment in the original datagram (in units of 8 bytes).
  - **Time to Live / TTL (8 bits)**: decremented at each router; when it reaches 0 the datagram is discarded (limits loop count; max 255).
  - **Protocol (8 bits)**: identifies the upper-layer protocol (TCP = 6, UDP = 17, ICMP = 1).
  - **Header Checksum (16 bits)**: checks only the header; recomputed at each router since TTL changes.
  - **Source Address (32 bits)** and **Destination Address (32 bits)**.
  - **Options (0-40 bytes)**: security, source routing, timestamp, etc.
- **Fragmentation**: when a datagram exceeds the MTU of a link, routers split it into fragments (using Identification, Flags and Fragment Offset); the destination reassembles them. Fragments are measured in 8-byte units, so the offset field can address up to 65,535 bytes.

```
[DIAGRAM: IPv4 datagram header (20 bytes minimum)
 Version(4) | HLEN(4) | Service Type(8) | Total Length(16)
 Identification(16)   | Flags(3) | Fragment Offset(13)
 TTL(8) | Protocol(8) | Header Checksum(16)
 Source Address (32)
 Destination Address (32)
 Options (if any, up to 40 bytes)
 Data (payload)
]
```

### IPv6 Datagram Format and IPv4-to-IPv6 Transition

- **IPv6** (128-bit addresses, 2^128 address space) was designed to solve address exhaustion and improve efficiency: fixed 40-byte base header, no fragmentation by routers (fragmentation only at source), no header checksum, and built-in security (AH/ESP).
- **IPv6 base header fields**: Version (4 bits, value 6), Traffic Class (8 bits, QoS), Flow Label (20 bits, groups packets of one flow), Payload Length (16 bits), Next Header (8 bits, identifies the next header/protocol — TCP=6, UDP=17, or an extension header), Hop Limit (8 bits, like TTL), Source Address (128 bits), Destination Address (128 bits). Total fixed 40 bytes.
- **Extension headers**: hop-by-hop options, routing, fragment, destination options, authentication (AH), encrypted security payload (ESP) — chained via the Next Header field; no fixed-length options like IPv4.
- **IPv6 addresses** are written as eight groups of 4 hex digits (e.g., 2001:0db8:0000:0000:0000:0000:0000:0001); leading zeros within a group can be dropped, and one (only one) contiguous run of zero groups can be abbreviated with "::".
- **Transition mechanisms from IPv4 to IPv6** (three methods, exam-frequent):
  - Dual stack: hosts and routers run both IPv4 and IPv6 stacks; the source chooses the protocol based on the destination — simplest and most common.
  - Tunneling (6to4, Teredo): IPv6 packets are encapsulated inside IPv4 datagrams and carried across an IPv4-only region of the Internet; the receiver decapsulates.
  - Header translation (NAT-PT, SIIT): the router translates an IPv6 header to an IPv4 header (and vice versa) at the boundary, translating addresses between 32-bit and 128-bit forms.

```
[DIAGRAM: IPv6 base header (40 bytes)
 Version(4) | Traffic Class(8) | Flow Label(20)
 Payload Length(16) | Next Header(8) | Hop Limit(8)
 Source Address (128)
 Destination Address (128)
 No checksum, no fragmentation fields, fixed 40 bytes
]
```

### Routing Fundamentals and Distance Vector Routing (RIP)

- **Routing** is the process of finding the best path for packets from source to destination. **Routing tables** at each router list destinations and the next hop toward them.
- **Routing approaches**: static (fixed paths, configured manually) vs dynamic (tables updated automatically); unicast (one destination) vs multicast; intra-domain (within one AS) vs inter-domain (between ASs).
- **Distance Vector Routing (DVR)**: each router maintains a table of (destination, cost, next hop); every router periodically broadcasts its entire table to its directly connected neighbors; each router updates its own table using the Bellman-Ford equation: new cost = min over neighbors of (cost to neighbor + neighbor's advertised cost).
- **Count-to-infinity problem**: if a link fails, the good news travels fast but the bad news travels slowly — routers can count to infinity, converging slowly and even routing in loops. Example: A and B connected with cost 1; B fails or its link breaks; A still advertises "A -> B cost 1" learned from B, so B believes the path via A has cost 2, A then 3, and so on up to infinity.
- **Solutions** (two-mark answer):
  - Split horizon: a router does not advertise a route back to the neighbor from which it learned that route.
  - Poison reverse: a router advertises the route back to its source with cost infinity (16 in RIP), which actively breaks the loop.
  - Route poisoning with hold-down timers: mark the route unreachable and wait before accepting alternate routes.
- **RIP (Routing Information Protocol)** is the DVR protocol of the Internet: uses hop count as metric (max 15, 16 = infinity), updates every 30 seconds, hop count limit limits network diameter. RIP is an application-layer protocol over UDP port 520.

```
[DIAGRAM: Count-to-infinity
 Initially: A---(1)---B   both know each other at cost 1
 Link A-B breaks: B updates B->A to infinity
 But A advertises "A->B cost 1" (stale), so B sets B->A via A = 2
 Then B advertises B->A=2, A sets A->B via B = 3 ... counts upward
 Split horizon: A must not advertise A->B back to B (stops this loop)
]
```

### Link State Routing (OSPF)

- **Link State Routing (LSR)** is the second major intra-domain routing algorithm: each router builds a complete map of the network and computes shortest paths itself.
- **Procedure** (five steps): 1) Discover neighbors and learn their costs (hello packets); 2) Construct a Link State Packet (LSP) listing neighbors and link costs; 3) Flood the LSP to every other router (each router stores the latest LSP of every router); 4) Build the complete network topology graph; 5) Run Dijkstra's shortest-path algorithm to compute the best path to every destination.
- **Dijkstra's algorithm** (exam-frequent, apply): start from the source node; repeatedly choose the unvisited node with the smallest known distance, mark it visited (permanent), and update the tentative distances of its neighbours; continue until all nodes are visited. Result: shortest-path tree and the routing table (destination -> next hop, cost).
- **Advantages over DVR**: fast convergence (good and bad news spread quickly), no count-to-infinity problem, suitable for large networks; costs more computation and memory per router.
- **OSPF (Open Shortest Path First)**: the Internet's Link State protocol (intra-domain, for autonomous systems); metric is link cost (can reflect bandwidth); uses areas to scale (area 0 = backbone); works directly over IP (protocol number 89); supports authentication and equal-cost multipath.
- **Example (exam pattern)**: network A-B (2), A-C (1), B-C (3), B-D (5), C-D (2) — Dijkstra from A gives: A->C (1), A->B (2), A->C->D (3); routing table of A: B via B, C via C, D via C.

```
[DIAGRAM: Dijkstra shortest path from A
 Nodes: A, B, C, D. Links: A-B=2, A-C=1, B-C=3, B-D=5, C-D=2
 Step 1: permanent set {A}, distances B=2, C=1, D=inf
 Step 2: pick C(1), update D via C = 1+2 = 3
 Step 3: pick B(2), update D via B = 2+5 = 7 (keep 3)
 Step 4: pick D(3)  ->  Shortest path tree: A-C(1), A-B(2), C-D(2)
]
```

### Path Vector Routing (BGP)

- **Path Vector Routing (PVR)** is used for **inter-domain routing** (between autonomous systems, ASs), where simple distance metrics are inadequate because paths cross organizations with different policies.
- **Working**: each router (BGP speaker) advertises to its peers the full path (sequence of ASs) to a destination, not just a cost. The path vector prevents loops directly — a router rejects any advertised path that already contains its own AS number.
- **BGP (Border Gateway Protocol)**: the Internet's inter-domain routing protocol, running over TCP port 179; used between edge routers of ASs. BGP speakers exchange reachability information and path attributes (AS-path, next hop, local preference); routing decisions reflect policy (business agreements, traffic engineering) as well as distance.
- **BGP supports CIDR aggregation** — it advertises blocks of addresses (prefixes) rather than individual networks.
- **DVR vs LSR vs PVR** (one/two-mark answer): DVR (RIP) uses hop count, converges slowly, suffers count-to-infinity, works in small autonomous systems; LSR (OSPF) builds full topology, converges fast, works within an AS; PVR (BGP) advertises AS paths, implements policy, and routes between ASs.

### Unicast and Multicast Routing Basics

- **Unicast routing**: one source sends to one destination — normal point-to-point communication; the routing algorithms above (RIP, OSPF, BGP) solve unicast.
- **Multicast routing**: one source sends to a **group** of receivers using a single transmission; hosts join a group identified by a Class D IP address (224.0.0.0 to 239.255.255.255). Routers must build a multicast delivery tree spanning only the group members.
- **Multicast group management**: IGMP (Internet Group Management Protocol) lets hosts join/leave groups; a router keeps a list of groups with at least one member on each interface.
- **Multicast routing protocols**: DVMRP (Distance Vector Multicast Routing Protocol, uses reverse path forwarding with pruning), MOSPF (multicast extension of OSPF), PIM (Protocol Independent Multicast — dense mode floods and prunes, sparse mode uses a rendezvous point).
- **Broadcast vs multicast**: broadcast sends to all nodes (flooding, costly); multicast sends only to group members — much more efficient for video conferencing, IPTV, and stock-market feeds.