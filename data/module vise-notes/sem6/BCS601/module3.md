# BCS601 — Cloud Computing

## Module 3: Virtualization Technologies & Hypervisors

### Concept of Virtualization

- **Definition**: Virtualization is a technology that abstracts the physical resources of a computer (CPU, memory, storage, network) into logical/virtual representations, allowing multiple isolated execution environments (Virtual Machines) to run concurrently on a single physical host.
- **Core components**:
  - **Guest OS**: the OS running inside a virtual machine (unaware or aware that it is virtualized).
  - **Host OS**: the OS running directly on the physical hardware.
  - **Hypervisor / VMM (Virtual Machine Monitor)**: the software layer that creates, runs, and manages virtual machines; sits between hardware and guest OSes.
- **Advantages**: server consolidation (multiple VMs per physical server → higher utilization, cost saving), isolation (crash/security of one VM does not affect others), encapsulation (VM is a set of files → portable, snapshottable), hardware independence, live migration, rapid provisioning.
- **Disadvantages**: performance overhead, resource contention ("noisy neighbor"), licensing complexity, security surface of the hypervisor itself.

### Virtualization vs Emulation

| Feature | Virtualization | Emulation |
| :--- | :--- | :--- |
| Execution of instructions | Guest instructions run **natively** on the host CPU (same ISA) | Guest instructions are **translated/interpreted** (different ISA, e.g., ARM on x86) |
| Performance | Near-native (low overhead) | Very slow (orders of magnitude slower) |
| Hardware requirement | Requires same architecture as guest | No architecture match required |
| Typical use | Cloud VMs, server consolidation | Running legacy/foreign-platform software, retro systems, mobile testing |
| Examples | VMware, KVM, Hyper-V | QEMU (full-system emulation), DOSBox, Bochs |
| Management | Hypervisor manages VMs | Emulator simulates full hardware |

### Virtualization Types

- **Full Virtualization**: Hypervisor completely simulates underlying hardware; **guest OS runs unmodified** (e.g., Windows on Linux host). No guest cooperation needed. Early implementations were slow (binary translation of privileged instructions); modern versions use hardware assist. **Examples**: VMware Workstation (binary translation), KVM with hardware support.
- **Para-Virtualization**: Guest OS is **modified** to replace sensitive/non-virtualizable instructions with **hypercalls** (direct calls into the hypervisor); each VM has its own CPU state, address space, and device drivers. Lower overhead than binary-translation full virtualization because privileged operations are explicit calls. **Examples**: Xen (paravirtualized guests), early VMware/User-Mode Linux.
- **Hardware-Assisted Virtualization**: Uses CPU extensions for virtualization — **Intel VT-x** and **AMD-V** — which add a new privilege mode (VMX root/non-root operation); guest privileged instructions cause a **VM Exit** handled by the hypervisor without binary translation. Guest OS runs unmodified with near-native performance. De facto standard today in KVM, VMware ESXi, Hyper-V, Xen (HVM).
- **OS-level Containerization**: The kernel is shared; the host OS isolates processes in **containers** (namespaces for isolation, cgroups for resource limits); no separate kernel per tenant — very light weight, near-zero overhead, fast startup (ms), but all guests share the same kernel/OS type. **Examples**: Docker, LXC, OpenVZ, Windows containers.
- **Comparison**: 

| Type | Guest modification | Performance | Isolation | Overhead | Example |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Full virtualization | No | High | Strong (separate VMs) | Medium | VMware, KVM |
| Para-virtualization | Yes (hypercalls) | High | Strong | Low-Medium | Xen PV |
| Hardware-assisted | No | Near-native | Strong | Low | KVM, ESXi, Hyper-V |
| OS-level (containers) | No | Native | Weak-moderate (shared kernel) | Negligible | Docker, LXC |

### Hypervisors and VMMs

- **VMM (Virtual Machine Monitor)**: software that virtualizes hardware, isolates and schedules resources among VMs, and manages VM lifecycle (create, start, stop, migrate, delete). Provides each VM with a virtual CPU, virtual memory, virtual devices (disk, NIC).
- **Properties required of a VMM (Popek–Goldberg)**: 
  - **Equivalence**: guest programs behave identically to running on real hardware (except timing/slowdown).
  - **Resource control**: hypervisor has complete control of physical resources (guest cannot access resources without VMM mediation).
  - **Efficiency**: majority of guest instructions execute directly on hardware without VMM intervention.

### Type-1 vs Type-2 Hypervisors

- **Type-1 (Bare-metal)**: hypervisor runs **directly on the hardware** with no host OS beneath it; VMs run above the hypervisor. **Examples**: VMware ESXi, Xen, Microsoft Hyper-V, KVM (Kernel-based VM, Linux kernel module acting as hypervisor). Used in cloud data centers; higher performance, security, and scalability; hardware managed by hypervisor itself (drivers inside hypervisor).
- **Type-2 (Hosted)**: hypervisor runs as an **application on top of a host OS**; VMs run above the hypervisor. **Examples**: Oracle VirtualBox, VMware Workstation/Player, Parallels. Used for desktop/dev/testing; easier setup; extra overhead from host OS; lower performance.

```
[DIAGRAM: Type-1 vs Type-2 hypervisor architecture
  Type-1 (Bare-metal):            Type-2 (Hosted):
  +----------+ +----------+      +----------+ +----------+
  |  VM1     | |  VM2     |      |  VM1     | |  VM2     |
  +----------+ +----------+      +----------+ +----------+
  +-----------------------------+ +-------------------------+
  |       Hypervisor            | |   Hypervisor (app)      |
  |    (ESXi / Xen / KVM)       | +-------------------------+
  +-----------------------------+ |       Host OS          |
  |         Hardware            | +-------------------------+
  +-----------------------------+ |         Hardware        |
                                  +-------------------------+
]
```

### CPU Virtualization

- Virtual CPU (vCPU) for each VM with its own state (registers, mode, page tables).
- **Trap-and-emulate (classic)**: privileged instructions executed by guest trigger a trap to the hypervisor which emulates them; works only if all sensitive instructions are privileged (true in hardware-assisted mode via VMX root/non-root).
- **Binary translation (BT)**: hypervisor scans and rewrites privileged/sensitive instructions in guest code on the fly into safe equivalent sequences (VMware); no guest cooperation.
- **Paravirtualization**: modified guest replaces privileged instructions with explicit hypercalls.
- **Hardware-assisted**: Intel VT-x/AMD-V add root vs non-root operation modes; guest runs in non-root; privileged operations cause **VM Exits** to the hypervisor (root mode) which handles them and resumes the guest (VM Entry) — low overhead.
- **Scheduling**: VMM uses standard OS scheduling algorithms (proportional share, credit scheduler in Xen) to allocate physical CPU time among vCPUs.

### Memory Virtualization

- Each VM sees a **contiguous guest physical address space**; hypervisor maintains mapping: **Guest Virtual Address → Guest Physical Address → Host/Machine Physical Address** (two-level address translation).
- **Shadow page tables** (full virtualization, x86 pre-EPT): hypervisor maintains shadow page tables mapping guest virtual directly to machine physical; guest page table updates trap to hypervisor to keep shadows consistent — overhead of frequent traps.
- **Paravirtualization**: guest OS is modified to use the hypervisor's memory management interface (e.g., Xen's grant tables and explicit page table updates), avoiding most traps.
- **Hardware-assisted (NPT/EPT)**: AMD Nested Page Tables (AMD-V) and Intel Extended Page Tables (EPT) perform the second-level translation in hardware (TDP — two-dimensional paging) — no traps, near-native performance.
- **Memory overcommitment/ballooning**: VMM can reclaim free guest memory by balloon driver — a driver inside guest allocates and pins guest memory, making it unavailable to the guest, so the hypervisor can reassign it to other VMs (used in VMware/KVM).

### I/O Virtualization

- **Emulated devices (full virtualization)**: hypervisor emulates a known device (e.g., NE2000 NIC, IDE disk); guest uses standard drivers; every I/O traps to hypervisor — slow.
- **Paravirtualized I/O (split drivers)**: frontend driver in guest + backend driver in hypervisor (e.g., Xen's blkfront/blkback, virtio) — shared-memory ring buffers for requests; lower overhead.
- **Hardware-assisted / device passthrough (PCI passthrough, SR-IOV)**: VM gets direct access to a physical device (or a virtual function of an SR-IOV-capable device); near-native performance; requires dedicated device per VM (SR-IOV allows sharing via Virtual Functions, e.g., 10G NICs).
- **Virtio**: a standard paravirtualized I/O framework (KVM/QEMU) — virtio-net, virtio-blk, virtio-scsi drivers give near-native performance with low CPU cost.

### VM Migration

- **Definition**: Moving a running VM from one physical host to another without stopping the service (or with brief downtime) — enables maintenance, load balancing, fault tolerance, power management (consolidation).
- **Cold migration (offline)**: VM is **shut down/powered off**, its disk images copied to the destination host, then restarted there. Simple, but service downtime = full stop.
- **Live migration**: VM state (memory, CPU registers, device state, disk) is transferred while the VM keeps running; downtime is only tens of milliseconds.
  - **Pre-copy migration**: 
    1. Destination host is prepared and VM memory is copied iteratively while the VM still runs on the source.
    2. Memory pages modified during each round are re-copied (dirty pages) in successive passes.
    3. When remaining dirty memory is small enough, the VM is **paused**, final dirty pages + CPU/device state are copied, and the VM resumes on the destination.
    4. **Advantages**: minimal downtime (ms), consistent state. **Disadvantage**: high network traffic from iterative copying; long total migration time for write-heavy VMs.
  - **Post-copy migration**:
    1. VM is paused briefly, minimal state (CPU registers, device state) is pushed to the destination and the VM **resumes immediately**.
    2. Remaining memory pages are pulled **on demand** from the source when the destination VM faults on a missing page (demand paging).
    3. **Advantages**: much lower total migration time and network traffic; predictable short downtime. **Disadvantage**: dependency on source host during migration (source failure = VM loss), page-fault latency per page.

```
[DIAGRAM: Pre-copy live migration phases
 Source host (VM running)                       Destination host
 1. Send memory copy round 1 ---------------->  (empty VM created)
 2. Send dirty pages (rounds 2..n) ---------->  (memory filling up)
 3. Pause VM; send remaining dirty + state -->  (VM resumes)
 4. Source VM destroyed;  VM now on destination with old IP preserved
]
```

### Comparison: Pre-copy vs Post-copy

| Feature | Pre-copy | Post-copy |
| :--- | :--- | :--- |
| First transfer | All memory pages (iterative) | CPU/device state only |
| VM pause duration | Small (final dirty pages only) | Small (initial) |
| Total migration time | Longer (repeated dirty copies) | Shorter |
| Network traffic | High for write-intensive VMs | Lower (only page faults on demand) |
| Risk | Low — source has full state until end | High — depends on source after resume |
| On-demand pages | None | Page faults pull pages from source |

### Exam-Focus Notes (PYQ Driven)

- Type-1 vs Type-2 hypervisors with block diagrams (2023 Q5a) — draw both stacks and note examples (ESXi/Xen/KVM vs VirtualBox/VMware Workstation).
- Live migration pre-copy vs post-copy (2023 Q5b) — include phase sequence, downtime comparison, advantages/disadvantages.
- Full vs para vs hardware-assisted virtualization with Intel VT-x/AMD-V (2024 Q5a) — explain VMX root/non-root, VM Exit, hypercalls.
- CPU/Memory/I/O virtualization in KVM/Xen (2024 Q5b) — cover binary translation vs EPT/NPT, shadow page tables, virtio/SR-IOV, hypercalls.
