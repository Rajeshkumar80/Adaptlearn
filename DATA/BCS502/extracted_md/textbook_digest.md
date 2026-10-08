<!-- PROVENANCE: subject_code=BCS502 | subject_name=Computer Networks | semester=5 | source_type=TEXTBOOK_DIGEST | source_file=textbook_notes.md | extraction_method=STRUCTURED_COMPREHENSIVE | confidence=0.95 -->

# BCS502 — Textbook Notes

**Subject:** BCS502 (Computer Networks)
**Content type:** textbook_notes
**Source:** textbook_notes.md

---

# BCS502 — Textbook Notes (Module-wise)
**Subject:** Computer Networks
**Generated:** 2026-10-02

---

## Module 1 Textbook

PART I
OVERVIEW
1.1
DATA COMMUNICATIONS
When we communicate, we are sharing information. This sharing can be local or
remote. Between individuals, local communication usually occurs face to face, while
remote communication takes place over distance. The term telecommunication, which
includes telephony, telegraphy, and television, means communication at a distance (tele
is Greek for “far”). The word data refers to information presented in whatever form is
agreed upon by the parties creating and using the data. 
Data communications are the exchange of data between two devices via some
form of transmission medium such as a wire cable. For data communications to occur,
the communicating devices must be part of a communication system made up of a com-
bination of hardware (physical equipment) and software (programs). The effectiveness
of a data communications system depends on four fundamental characteristics: deliv-
ery, accuracy, timeliness, and jitter.
1. Delivery. The system must deliver data to the correct destination. Data must be
received by the intended device or user and only by that device or user.
2. Accuracy. The system must deliver the data accurately. Data that have been
altered in transmission and left uncorrected are unusable.
3. Timeliness. The system must deliver data in a timely manner. Data delivered late are
useless. In the case of video and audio, timely delivery means delivering data as
they are produced, in the same order that they are produced, and without signifi-
cant delay. This kind of delivery is called real-time transmission.
4. Jitter. Jitter refers to the variation in the packet arrival time. It is the uneven delay in
the delivery of audio or video packets. For example, let us assume that video packets
are sent every 30 ms. If some of the packets arrive with 30-ms delay and others with
40-ms delay, an uneven quality in the video is the result. 
1.1.1
Components
A data communications system has five components (see Figure 1.1).
1. Message. The message is the information (data) to be communicated. Popular
forms of information include text, numbers, pictures, audio, and video. 
2. Sender. The sender is the device that sends the data message. It can be a com-
puter, workstation, telephone handset, video camera, and so on.
Figure 1.1
Five components of data communication
Transmission medium
Message
Protocol
Protocol
Rule 1:
Rule 2:
...
Rule n:
Rule 1:
Rule 2:
...
Rule n:
Sender
Receiver
MODULE 1

CHAPTER 1
INTRODUCTION

3. Receiver. The receiver is the device that receives the message. It can be a com-
puter, workstation, telephone handset, television, and so on.
4. Transmission medium. The transmission medium is the physical path by which
a message travels from sender to receiver. Some examples of transmission media
include twisted-pair wire, coaxial cable, fiber-optic cable, and radio waves.
5. Protocol. A protocol is a set of rules that govern data communications. It repre-
sents an agreement between the communicating devices. Without a protocol, two
devices may be connected but not communicating, just as a person speaking French
cannot be understood by a person who speaks only Japanese.
1.1.2
Data Representation
Information today comes in different forms such as text, numbers, images, audio, and
video. 
Text
In data communications, text is represented as a bit pattern, a sequence of bits (0s or
1s). Different sets of bit patterns have been designed to represent text symbols. Each set
is called a code, and the process of representing symbols is called coding. Today, the
prevalent coding system is called Unicode, which uses 32 bits to represent a symbol or
character used in any language in the world. The American Standard Code for Infor-
mation Interchange (ASCII), developed some decades ago in the United States, now
constitutes the first 127 characters in Unicode and is also referred to as Basic Latin.
Appendix A includes part of the Unicode. 
Numbers
Numbers are also represented by bit patterns. However, a code such as ASCII is not used
to represent numbers; the number is directly converted to a binary number to simplify
mathematical operations. Appendix B discusses several different numbering systems. 
Images
Images are also represented by bit patterns. In its simplest form, an image is composed
of a matrix of pixels (picture elements), where each pixel is a small dot. The size of the
pixel depends on the resolution. For example, an image can be divided into 1000 pixels
or 10,000 pixels. In the second case, there is a better representation of the image (better
resolution), but more memory is needed to store the image.
After an image is divided into pixels, each pixel is assigned a bit pattern. The size
and the value of the pattern depend on the image. For an image made of only black-
and-white dots (e.g., a chessboard), a 1-bit pattern is enough to represent a pixel. 
If an image is not made of pure white and pure black pixels, we can increase the
size of the bit pattern to include gray scale. For example, to show four levels of gray
scale, we can use 2-bit patterns. A black pixel can be represented by 00, a dark gray
pixel by 01, a light gray pixel by 10, and a white pixel by 11.
There are several methods to represent color images. One method is called RGB,
so called because each color is made of a combination of three primary colors: red,
green, and blue. The intensity of each color is measured, and a bit pattern is assigned to

PART I
OVERVIEW
it. Another method is called YCM, in which a color is made of a combination of three
other primary colors: yellow, cyan, and magenta.
Audio
Audio refers to the recording or broadcasting of sound or music. Audio is by nature
different from text, numbers, or images. It is continuous, not discrete. Even when we
use a microphone to change voice or music to an electric signal, we create a continuous
signal. We will learn more about audio in Chapter 26. 
Video
Video refers to the recording or broadcasting of a picture or movie. Video can either be
produced as a continuous entity (e.g., by a TV camera), or it can be a combination of
images, each a discrete entity, arranged to convey the idea of motion. We will learn
more about video in Chapter 26. 
1.1.3
Data Flow
Communication between two devices can be simplex, half-duplex, or full-duplex as
shown in Figure 1.2. 
Simplex
In simplex mode, the communication is unidirectional, as on a one-way street. Only one
of the two devices on a link can transmit; the other can only receive (see Figure 1.2a).
Keyboards and traditional monitors are examples of simplex devices. The key-
board can only introduce input; the monitor can only accept output. The simplex mode
can use the entire capacity of the channel to send data in one direction. 
Figure 1.2
Data flow (simplex, half-duplex, and full-duplex)
Direction of data
Monitor
Mainframe
a. Simplex
b. Half-duplex
c. Full-duplex
Direction of data at time 1
Direction of data at time 2
Direction of data all the time

CHAPTER 1
INTRODUCTION

Half-Duplex
In half-duplex mode, each station can both transmit and receive, but not at the same time.
When one device is sending, the other can only receive, and vice versa (see Figure 1.2b).
The half-duplex mode is like a one-lane road with traffic allowed in both direc-
tions. When cars are traveling in one direction, cars going the other way must wait. In a
half-duplex transmission, the entire capacity of a channel is taken over by whichever of
the two devices is transmitting at the time. Walkie-talkies and CB (citizens band) radios
are both half-duplex systems. 
The half-duplex mode is used in cases where there is no need for communication
in both directions at the same time; the entire capacity of the channel can be utilized for
each direction. 
Full-Duplex
In full-duplex mode (also called duplex), both stations can transmit and receive simul-
taneously (see Figure 1.2c).
The full-duplex mode is like a two-way street with traffic flowing in both direc-
tions at the same time. In full-duplex mode, signals going in one direction share the
capacity of the link with signals going in the other direction. This sharing can occur in
two ways: Either the link must contain two physically separate transmission paths, one
for sending and the other for receiving; or the capacity of the channel is divided
between signals traveling in both directions.
One common example of full-duplex communication is the telephone network.
When two people are communicating by a telephone line, both can talk and listen at the
same time. 
The full-duplex mode is used when communication in both directions is required
all the time. The capacity of the channel, however, must be divided between the two
directions. 
1.2
NETWORKS
A network is the interconnection of a set of devices capable of communication. In this
definition, a device can be a host (or an end system as it is sometimes called) such as a
large computer, desktop, laptop, workstation, cellular phone, or security system. A
device in this definition can also be a connecting device such as a router, which con-
nects the network to other networks, a switch, which connects devices together, a
modem (modulator-demodulator), which changes the form of data, and so on. These
devices in a network are connected using wired or wireless transmission media such as
cable or air. When we connect two computers at home using a plug-and-play router, we
have created a network, although very small. 
1.2.1
Network Criteria
A network must be able to meet a certain number of criteria. The most important of
these are performance, reliability, and security.

PART I
OVERVIEW
Performance
Performance can be measured in many ways, including transit time and response time.
Transit time is the amount of time required for a message to travel from one device to
another. Response time is the elapsed time between an inquiry and a response. The per-
formance of a network depends on a number of factors, including the number of users,
the type of transmission medium, the capabilities of the connected hardware, and the
efficiency of the software.
Performance is often evaluated by two networking metrics: throughput and delay.
We often need more throughput and less delay. However, these two criteria are often
contradictory. If we try to send more data to the network, we may increase throughput
but we increase the delay because of traffic congestion in the network. 
Reliability
In addition to accuracy of delivery, network reliability is measured by the frequency of
failure, the time it takes a link to recover from a failure, and the network’s robustness in
a catastrophe.
Security
Network security issues include protecting data from unauthorized access, protecting
data from damage and development, and implementing policies and procedures for
recovery from breaches and data losses.
1.2.2
Physical Structures
Before discussing networks, we need to define some network attributes.
Type of Connection 
A network is two or more devices connected through links. A link is a communications
pathway that transfers data from one device to another. For visualization purposes, it is
simplest to imagine any link as a line drawn between two points. For communication to
occur, two devices must be connected in some way to the same link at the same time.
There are two possible types of connections: point-to-point and multipoint.
Point-to-Point
A point-to-point connection provides a dedicated link between two devices. The
entire capacity of the link is reserved for transmission between those two devices. Most
point-to-point connections use an actual length of wire or cable to connect the two
ends, but other options, such as microwave or satellite links, are also possible (see
Figure 1.3a). When we change television channels by infrared remote control, we are
establishing a point-to-point connection between the remote control and the television’s
control system.
Multipoint
A multipoint (also called multidrop) connection is one in which more than two spe-
cific devices share a single link (see Figure 1.3b). 

CHAPTER 1
INTRODUCTION

In a multipoint environment, the capacity of the channel is shared, either spatially
or temporally. If several devices can use the link simultaneously, it is a spatially shared
connection. If users must take turns, it is a timeshared connection.
Physical Topology
The term physical topology refers to the way in which a network is laid out physically.
Two or more devices connect to a link; two or more links form a topology. The topology
of a network is the geometric representation of the relationship of all the links and
linking devices (usually called nodes) to one another. There are four basic topologies
possible: mesh, star, bus, and ring.
Mesh Topology
In a mesh topology, every device has a dedicated point-to-point link to every other
device. The term dedicated means that the link carries traffic only between the two
devices it connects. To find the number of physical links in a fully connected mesh net-
work with n nodes, we first consider that each node must be connected to every other
node. Node 1 must be connected to n – 1 nodes, node 2 must be connected to n – 1
nodes, and finally node n must be connected to n – 1 nodes. We need n (n – 1) physical
links. However, if each physical link allows communication in both directions (duplex
mode), we can divide the number of links by 2. In other words, we can say that in a mesh
topology, we need  n (n – 1) / 2  duplex-mode links.  To accommodate that many links,
every device on the network must have n – 1 input/output (I/O) ports (see Figure 1.4) to
be connected to the other n – 1 stations. 
A mesh offers several advantages over other network topologies. First, the use of
dedicated links guarantees that each connection can carry its own data load, thus elimi-
nating the traffic problems that can occur when links must be shared by multiple
devices. Second, a mesh topology is robust. If one link becomes unusable, it does not
incapacitate the entire system. Third, there is the advantage of privacy or security. When
every message travels along a dedicated line, only the intended recipient sees it. Physical
boundaries prevent other users from gaining access to messages. Finally, point-to-point
links make fault identification and fault isolation easy. Traffic can be routed to avoid
links with suspected problems. This facility enables the network manager to discover the
precise location of the fault and aids in finding its cause and solution.
Figure 1.3
Types of connections: point-to-point and multipoint
a. Point-to-point
b. Multipoint
Link
Link
Mainframe

PART I
OVERVIEW
The main disadvantages of a mesh are related to the amount of cabling and the
number of I/O ports required. First, because every device must be connected to every
other device, installation and reconnection are difficult. Second, the sheer bulk of the
wiring can be greater than the available space (in walls, ceilings, or floors) can accom-
modate. Finally, the hardware required to connect each link (I/O ports and cable) can be
prohibitively expensive. For these reasons a mesh topology is usually implemented in a
limited fashion, for example, as a backbone connecting the main computers of a hybrid
network that can include several other topologies. 
One practical example of a mesh topology is the connection of telephone regional
offices in which each regional office needs to be connected to every other regional
office. 
Star Topology
In a star topology, each device has a dedicated point-to-point link only to a central con-
troller, usually called a hub. The devices are not directly linked to one another. Unlike a
mesh topology, a star topology does not allow direct traffic between devices. The con-
troller acts as an exchange: If one device wants to send data to another, it sends the
data to the controller, which then relays the data to the other connected device (see
Figure 1.5) .
A star topology is less expensive than a mesh topology. In a star, each device needs
only one link and one I/O port to connect it to any number of others. This factor also
makes it easy to install and reconfigure. Far less cabling needs to be housed, and
Figure 1.4
A fully connected mesh topology (five devices)
Figure 1.5
A star topology connecting four stations
n = 5
10 links.
Hub

CHAPTER 1
INTRODUCTION

additions, moves, and deletions involve only one connection: between that device and
the hub.
Other advantages include robustness. If one link fails, only that link is affected. All
other links remain active. This factor also lends itself to easy fault identification and
fault isolation. As long as the hub is working, it can be used to monitor link problems
and bypass defective links.
One big disadvantage of a star topology is the dependency of the whole topology
on one single point, the hub. If the hub goes down, the whole system is dead. 
Although a star requires far less cable than a mesh, each node must be linked to a
central hub. For this reason, often more cabling is required in a star than in some other
topologies (such as ring or bus). 
The star topology is used in local-area networks (LANs), as we will see in Chapter 13.
High-speed LANs often use a star topology with a central hub. 
Bus Topology
The preceding examples all describe point-to-point connections. A bus topology, on the
other hand, is multipoint. One long cable acts as a backbone to link all the devices in a
network (see Figure 1.6).
Nodes are connected to the bus cable by drop lines and taps. A drop line is a con-
nection running between the device and the main cable. A tap is a connector that either
splices into the main cable or punctures the sheathing of a cable to create a contact with
the metallic core. As a signal travels along the backbone, some of its energy is trans-
formed into heat. Therefore, it becomes weaker and weaker as it travels farther and far-
ther. For this reason there is a limit on the number of taps a bus can support and on the
distance between those taps.
Advantages of a bus topology include ease of installation. Backbone cable can be
laid along the most efficient path, then connected to the nodes by drop lines of various
lengths. In this way, a bus uses less cabling than mesh or star topologies. In a star, for
example, four network devices in the same room require four lengths of cable reaching
all the way to the hub. In a bus, this redundancy is eliminated. Only the backbone cable
stretches through the entire facility. Each drop line has to reach only as far as the near-
est point on the backbone.
Disadvantages include difficult reconnection and fault isolation. A bus is usually
designed to be optimally efficient at installation. It can therefore be difficult to add new
devices. Signal reflection at the taps can cause degradation in quality. This degradation
can be controlled by limiting the number and spacing of devices connected to a given
Figure 1.6
A bus topology connecting three stations
Drop line
Drop line
Drop line
Cable end
Cable end
Tap
Tap
Tap

PART I
OVERVIEW
length of cable. Adding new devices may therefore require modification or replacement
of the backbone.
In addition, a fault or break in the bus cable stops all transmission, even between
devices on the same side of the problem. The damaged area reflects signals back in the
direction of origin, creating noise in both directions.
Bus topology was the one of the first topologies used in the design of early local-
area networks. Traditional Ethernet LANs can use a bus topology, but they are less pop-
ular now for reasons we will discuss in Chapter 13. 
Ring Topology
In a ring topology, each device has a dedicated point-to-point connection with only the
two devices on either side of it. A signal is passed along the ring in one direction, from
device to device, until it reaches its destination. Each device in the ring incorporates a
repeater. When a device receives a signal intended for another device, its repeater
regenerates the bits and passes them along (see Figure 1.7).
A ring is relatively easy to install and reconfigure. Each device is linked to only its
immediate neighbors (either physically or logically). To add or delete a device requires
changing only two connections. The only constraints are media and traffic consider-
ations (maximum ring length and number of devices). In addition, fault isolation is sim-
plified. Generally, in a ring a signal is circulating at all times. If one device does not
receive a signal within a specified period, it can issue an alarm. The alarm alerts the
network operator to the problem and its location.
However, unidirectional traffic can be a disadvantage. In a simple ring, a break in
the ring (such as a disabled station) can disable the entire network. This weakness can
be solved by using a dual ring or a switch capable of closing off the break.
Ring topology was prevalent when IBM introduced its local-area network, Token
Ring. Today, the need for higher-speed LANs has made this topology less popular. 
Figure 1.7
A ring topology connecting six stations
Repeater
Repeater
Repeater
Repeater
Repeater
Repeater

CHAPTER 1
INTRODUCTION

1.3
NETWORK TYPES
After defining networks in the previous section and discussing their physical structures,
we need to discuss different types of networks we encounter in the world today. The crite-
ria of distinguishing one type of network from another is difficult and sometimes confus-
ing. We use a few criteria such as size, geographical coverage, and ownership to make this
distinction. After discussing two types of networks, LANs and WANs, we define switch-
ing, which is used to connect networks to form an  internetwork (a network of networks). 
1.3.1
Local Area Network
A local area network (LAN) is usually privately owned and connects some hosts in a
single office, building, or campus. Depending on the needs of an organization, a LAN
can be as simple as two PCs and a printer in someone’s home office, or it can extend
throughout a company and include audio and video devices. Each host in a LAN has an
identifier, an address, that uniquely defines the host in the LAN. A packet sent by a host
to another host carries both the source host’s and the destination host’s addresses.
In the past, all hosts in a network were connected through a common cable, which
meant that a packet sent from one host to another was received by all hosts. The intended
recipient kept the packet; the others dropped the packet. Today, most LANs use a smart
connecting switch, which is able to recognize the destination address of the packet and
guide the packet to its destination without sending it to all other hosts. The switch allevi-
ates the traffic in the LAN and allows more than one pair to communicate with each
other at the same time if there is no common source and destination among them. Note
that the above definition of a LAN does not define the minimum or maximum number of
hosts in a LAN. Figure 1.8 shows a LAN using either a common cable or a switch.        
Figure 1.8
An isolated LAN in the past and today 
Switch
Host 2
Host 3
Host 4
Host 5
Host 6
Host 7
Host 8
A host (of any type)
A switch
A cable tap
A cable end
A connection
The common cable
Host 1
Host 2
Host 3
Host 4
Host 5
Host 6
Host 7
Host 8
a. LAN with a common cable (past)
b. LAN with a switch (today)
Legend
Host 1

PART I
OVERVIEW
When LANs were used in isolation (which is rare today), they were designed to allow
resources to be shared between the hosts. As we will see shortly, LANs today are connected
to each other and to WANs (discussed next) to create communication at a wider level. 
1.3.2
Wide Area Network
A wide area network (WAN) is also an interconnection of devices capable of communica-
tion. However, there are some differences between a LAN and a WAN. A LAN is normally
limited in size, spanning an office, a building, or a campus; a WAN has a wider geographi-
cal span, spanning a town, a state, a country, or even the world. A LAN interconnects hosts;
a WAN interconnects connecting devices such as switches, routers, or modems. A LAN is
normally privately owned by the organization that uses it; a WAN is normally created and
run by communication companies and leased by an organization that uses it. We see two
distinct examples of WANs today: point-to-point WANs and switched WANs.
Point-to-Point WAN
A point-to-point WAN is a network that connects two communicating devices through a trans-
mission media (cable or air). We will see examples of these WANs when we discuss how to
connect the networks to one another. Figure 1.9 shows an example of a point-to-point WAN. 
Switched WAN
A switched WAN is a network with more than two ends. A switched WAN, as we will
see shortly, is used in the backbone of global communication today. We can say that a
switched WAN is a combination of several point-to-point WANs that are connected by
switches. Figure 1.10 shows an example of a switched WAN.  
LANs are discussed in more detail in Part III of the book.
Figure 1.9
A point-to-point WAN
Figure 1.10
A switched WAN
To another
network
To another
network
Legend
A connecting device
Connecting medium
To another
network
To another
network
To another
network
To another
network
To another
network
To another
network
To another
network
To another
network
A switch
Connecting medium
Legend

CHAPTER 1
INTRODUCTION

Internetwork
Today, it is very rare to see a LAN or a WAN in isolation; they are connected to one
another. When two or more networks are connected, they make an internetwork, or
internet. As an example, assume that an organization has two offices, one on the east
coast and the other on the west coast. Each office has a LAN that allows all employees in
the office to communicate with each other. To make the communication between employ-
ees at different offices possible, the management leases a point-to-point dedicated WAN
from a service provider, such as a telephone company, and connects the two LANs. Now
the company has an internetwork, or a private internet (with lowercase i). Communication
between offices is now possible. Figure 1.11 shows this internet. 
When a host in the west coast office sends a message to another host in the same
office, the router blocks the message, but the switch directs the message to the destination.
On the other hand, when a host on the west coast sends a message to a host on the east
coast, router R1 routes the packet to router R2, and the packet reaches the destination. 
Figure 1.12 (see next page) shows another internet with several LANs and WANs
connected. One of the WANs is a switched WAN with four switches. 
1.3.3
Switching
An internet is a switched network in which a switch connects at least two links
together. A switch needs to forward data from a network to another network when
required. The two most common types of switched networks are circuit-switched and
packet-switched networks. We discuss both next. 
Circuit-Switched Network
In a circuit-switched network, a dedicated connection, called a circuit, is always
available between the two end systems; the switch can only make it active or inactive.
Figure 1.13 shows a very simple switched network that connects four telephones to
each end. We have used telephone sets instead of computers as an end system because
circuit switching was very common in telephone networks in the past, although part of
the telephone network today is a packet-switched network.
In Figure 1.13, the four telephones at each side are connected to a switch. The
switch connects a telephone set at one side to a telephone set at the other side. The thick
WANs are discussed in more detail in Part II of the book. 
Figure 1.11
An internetwork made of two LANs and one point-to-point WAN
Point-to-point 
WAN
Router
R1
East coast office
West coast office
LAN
LAN
Router
R2

PART I
OVERVIEW
line connecting two switches is a high-capacity communication line that can handle
four voice communications at the same time; the capacity can be shared between all
pairs of telephone sets. The switches used in this example have forwarding tasks but no
storing capability. 
Let us look at two cases. In the first case, all telephone sets are busy; four people at
one site are talking with four people at the other site; the capacity of the thick line is
fully used. In the second case, only one telephone set at one side is connected to a tele-
phone set at the other side; only one-fourth of the capacity of the thick line is used. This
means that a circuit-switched network is efficient only when it is working at its full
capacity; most of the time, it is inefficient because it is working at partial capacity. The
reason that we need to make the capacity of the thick line four times the capacity of
each voice line is that we do not want communication to fail when all telephone sets at
one side want to be connected with all telephone sets at the other side. 
Figure 1.12
A heterogeneous network made of four WANs and three LANs
Figure 1.13
A circuit-switched network
LAN
Switched WAN
Point-to-point 
WAN
Point-to-point 
WAN
Point-to-point 
WAN
LAN
Router
Router
Router
Router
Modem
Modem
Resident
Switch
Switch
Low-capacity line
High-capacity line

CHAPTER 1
INTRODUCTION

Packet-Switched Network
In a computer network, the communication between the two ends is done in blocks of
data called packets. In other words, instead of the continuous communication we see
between two telephone sets when they are being used, we see the exchange of individ-
ual data packets between the two computers. This allows us to make the switches func-
tion for both storing and forwarding because a packet is an independent entity that can
be stored and sent later. Figure 1.14 shows a small packet-switched network that con-
nects four computers at one site to four computers at the other site.
A router in a packet-switched network has a queue that can store and forward the
packet. Now assume that the capacity of the thick line is only twice the capacity of the
data line connecting the computers to the routers. If only two computers (one at each
site) need to communicate with each other, there is no waiting for the packets.
However, if packets arrive at one router when the thick line is already working at its full
capacity, the packets should be stored and forwarded in the order they arrived. The two
simple examples show that a packet-switched network is more efficient than a circuit-
switched network, but the packets may encounter some delays.
In this book, we mostly discuss packet-switched networks. In Chapter 18, we discuss
packet-switched networks in more detail and discuss the performance of these networks. 
1.3.4
The Internet
As we discussed before, an internet (note the lowercase i) is two or more networks that
can communicate with each other. The most notable internet is called the Internet
(uppercase I ), and is composed of thousands of interconnected networks. Figure 1.15
shows a conceptual (not geographical) view of the Internet.
The figure shows the Internet as several backbones, provider networks, and cus-
tomer networks. At the top level, the backbones are large networks owned by some
communication companies such as Sprint, Verizon (MCI), AT&T, and NTT. The back-
bone networks are connected through some complex switching systems, called peering
points. At the second level, there are smaller networks, called provider networks, that
use the services of the backbones for a fee. The provider networks are connected to
backbones and sometimes to other provider networks. The customer networks are
Figure 1.14
A packet-switched network
Router
Queue
Queue
Low-capacity line
High-capacity line
Router

PART I
OVERVIEW
networks at the edge of the Internet that actually use the services provided by the Inter-
net. They pay fees to provider networks for receiving services. 
Backbones and provider networks are also called Internet Service Providers
(ISPs). The backbones are often referred to as international ISPs; the provider net-
works are often referred to as national or regional ISPs. 
1.3.5
Accessing the Internet
The Internet today is an internetwork that allows any user to become part of it. The
user, however, needs to be physically connected to an ISP. The physical connection is
normally done through a point-to-point WAN. In this section, we briefly describe
how this can happen, but we postpone the technical details of the connection until
Chapters 14 and 16.
Using Telephone Networks
Today most residences and small businesses have telephone service, which means
they are connected to a telephone network. Since most telephone networks have
already connected themselves to the Internet, one option for residences and small
businesses to connect to the Internet is to change the voice line between the residence
or business and the telephone center to a point-to-point WAN. This can be done in
two ways. 
❑
Dial-up service. The first solution is to add to the telephone line a modem that
converts data to voice. The software installed on the computer dials the ISP and
imitates making a telephone connection. Unfortunately, the dial-up service is
Figure 1.15
The Internet today
Customer 
network
Customer 
network
Customer 
network
Customer 
network
Peering
point
Peering
point
Provider
network
Provider
network
Provider
network
Backbones
Provider
network
Customer 
network
Customer 
network
Provider
network
Customer 
network
Customer 
network
Customer 
network
Customer 
network

CHAPTER 1
INTRODUCTION

very slow, and when the line is used for Internet connection, it cannot be used for
telephone (voice) connection. It is only useful for small residences. We discuss
dial-up service in Chapter 14. 
❑
DSL Service. Since the advent of the Internet, some telephone companies have
upgraded their telephone lines to provide higher speed Internet services to resi-
dences or small businesses. The DSL service also allows the line to be used simul-
taneously for voice and data communication. We discuss DSL in Chapter 14. 
Using Cable Networks
More and more residents over the last two decades have begun using cable TV services
instead of antennas to receive TV broadcasting. The cable companies have been
upgrading their cable networks and connecting to the Internet. A residence or a small
business can be connected to the Internet by using this service. It provides a higher
speed connection, but the speed varies depending on the number of neighbors that use
the same cable. We discuss the cable networks in Chapter 14. 
Using Wireless Networks
Wireless connectivity has recently become increasingly popular. A household or a
small business can use a combination of wireless and wired connections to access the
Internet. With the growing wireless WAN access, a household or a small business can
be connected to the Internet through a wireless WAN. We discuss wireless access in
Chapter 16.
Direct Connection to the Internet
A large organization or a large corporation can itself become a local ISP and be con-
nected to the Internet. This can be done if the organization or the corporation leases a
high-speed WAN from a carrier provider and connects itself to a regional ISP. For
example, a large university with several campuses can create an internetwork and then
connect the internetwork to the Internet. 
1.4
INTERNET HISTORY
Now that we have given an overview of the Internet, let us give a brief history of the
Internet. This brief history makes it clear how the Internet has evolved from a private
network to a global one in less than 40 years. 
1.4.1
Early History
There were some communication networks, such as telegraph and telephone networks,
before 1960. These networks were suitable for constant-rate communication at that time,
which means that after a connection was made between two users, the encoded message
(telegraphy) or voice (telephony) could be exchanged. A computer network, on the other
hand, should be able to handle bursty data, which means data received at variable rates at
different times. The world needed to wait for the packet-switched network to be invented. 

PART I
OVERVIEW
2.1
PROTOCOL LAYERING
We defined the term protocol in Chapter 1. In data communication and networking, a
protocol defines the rules that both the sender and receiver and all intermediate devices
need to follow to be able to communicate effectively. When communication is simple,
we may need only one simple protocol; when the communication is complex, we may
need to divide the task between different layers, in which case we need a protocol at
each layer, or protocol layering.
2.1.1
Scenarios
Let us develop two simple scenarios to better understand the need for protocol layering.
First Scenario 
In the first scenario, communication is so simple that it can occur in only one layer.
Assume Maria and Ann are neighbors with a lot of common ideas. Communication
between Maria and Ann takes place in one layer, face to face, in the same language, as
shown in Figure 2.1. 
Even in this simple scenario, we can see that a set of rules needs to be followed.
First, Maria and Ann know that they should greet each other when they meet. Second,
they know that they should confine their vocabulary to the level of their friendship.
Third, each party knows that she should refrain from speaking when the other party
is speaking. Fourth, each party knows that the conversation should be a dialog, not a
monolog: both should have the opportunity to talk about the issue. Fifth, they should
exchange some nice words when they leave. 
We can see that the protocol used by Maria and Ann is different from the commu-
nication between a professor and the students in a lecture hall. The communication in
the second case is mostly monolog; the professor talks most of the time unless a student
has a question, a situation in which the protocol dictates that she should raise her hand
and wait for permission to speak. In this case, the communication is normally very for-
mal and limited to the subject being taught. 
Second Scenario
In the second scenario, we assume that Ann is offered a higher-level position in her
company, but needs to move to another branch located in a city very far from Maria.
The two friends still want to continue their communication and exchange ideas because
Figure 2.1
A single-layer protocol
Maria 
Ann 
Layer 1
Listen/Talk
Listen/Talk
Air
Layer 1

CHAPTER 2
NETWORK MODELS

they have come up with an innovative project to start a new business when they both
retire. They decide to continue their conversation using regular mail through the post
office. However, they do not want their ideas to be revealed by other people if the let-
ters are intercepted. They agree on an encryption/decryption technique. The sender of
the letter encrypts it to make it unreadable by an intruder; the receiver of the letter
decrypts it to get the original letter. We discuss the encryption/decryption methods in
Chapter 31, but for the moment we assume that Maria and Ann use one technique that
makes it hard to decrypt the letter if one does not have the key for doing so. Now we
can say that the communication between Maria and Ann takes place in three layers, as
shown in Figure 2.2. We assume that Ann and Maria each have three machines (or
robots) that can perform the task at each layer. 
Let us assume that Maria sends the first letter to Ann. Maria talks to the machine at
the third layer as though the machine is Ann and is listening to her. The third layer
machine listens to what Maria says and creates the plaintext (a letter in English), which
is passed to the second layer machine. The second layer machine takes the plaintext,
encrypts it, and creates the ciphertext, which is passed to the first layer machine. The
first layer machine, presumably a robot, takes the ciphertext, puts it in an envelope,
adds the sender and receiver addresses, and mails it. 
At Ann’s side, the first layer machine picks up the letter from Ann’s mail box, rec-
ognizing the letter from Maria by the sender address. The machine takes out the cipher-
text from the envelope and delivers it to the second layer machine. The second layer
machine decrypts the message, creates the plaintext, and passes the plaintext to the
third-layer machine. The third layer machine takes the plaintext and reads it as though
Maria is speaking. 
Figure 2.2
A three-layer protocol
Maria 
Listen/Talk 
Layer 3
Layer 3
Ann
Listen/Talk 
Plaintext
Plaintext
Ciphertext
Ciphertext
Mail 
Mail 
Encrypt/Decrypt 
Send mail/
receive mail 
Layer 2
Layer 1
Encrypt/Decrypt 
Send mail/
receive mail 
Layer 2
Layer 1
Identical objects
Identical objects
Identical objects
Postal carrier facility
US Post 
US Post 

PART I
OVERVIEW
Protocol layering enables us to divide a complex task into several smaller and sim-
pler tasks. For example, in Figure 2.2, we could have used only one machine to do the
job of all three machines. However, if Maria and Ann decide that the encryption/
decryption done by the machine is not enough to protect their secrecy, they would have
to change the whole machine. In the present situation, they need to change only the sec-
ond layer machine; the other two can remain the same. This is referred to as modularity.
Modularity in this case means independent layers. A layer (module) can be defined as a
black box with inputs and outputs, without concern about how inputs are changed to
outputs. If two machines provide the same outputs when given the same inputs, they
can replace each other. For example, Ann and Maria can buy the second layer machine
from two different manufacturers. As long as the two machines create the same cipher-
text from the same plaintext and vice versa, they do the job. 
One of the advantages of protocol layering is that it allows us to separate the
services from the implementation. A layer needs to be able to receive a set of ser-
vices from the lower layer and to give the services to the upper layer; we don’t care
about how the layer is implemented. For example, Maria may decide not to buy the
machine (robot) for the first layer; she can do the job herself. As long as Maria can
do the tasks provided by the first layer, in both directions, the communication
system works. 
Another advantage of protocol layering, which cannot be seen in our simple exam-
ples but reveals itself when we discuss protocol layering in the Internet, is that commu-
nication does not always use only two end systems; there are intermediate systems that
need only some layers, but not all layers. If we did not use protocol layering, we would
have to make each intermediate system as complex as the end systems, which makes
the whole system more expensive. 
Is there any disadvantage to protocol layering? One can argue that having a single
layer makes the job easier. There is no need for each layer to provide a service to the
upper layer and give service to the lower layer. For example, Ann and Maria could find
or build one machine that could do all three tasks. However,  as mentioned above, if one
day they found that their code was broken, each would have to replace the whole
machine with a new one instead of just changing the machine in the second layer. 
2.1.2
Principles of Protocol Layering
Let us discuss two principles of protocol layering. 
First Principle
The first principle dictates that if we want bidirectional communication, we need to
make each layer so that it is able to perform two opposite tasks, one in each direction.
For example, the third layer task is to listen (in one direction) and talk (in the other
direction). The second layer needs to be able to encrypt and decrypt. The first layer
needs to send and receive mail.
Second Principle
The second principle that we need to follow in protocol layering is that the two
objects under each layer at both sites should be identical. For example, the object
under layer 3 at both sites should be a plaintext letter. The object under layer 2 at

CHAPTER 2
NETWORK MODELS

both sites should be a ciphertext letter. The object under layer 1 at both sites should
be a piece of mail. 
2.1.3
Logical Connections
After following the above two principles, we can think about logical connection
between each layer as shown in Figure 2.3. This means that we have layer-to-layer
communication. Maria and Ann can think that there is a logical (imaginary) connection
at each layer through which they can send the object created from that layer. We will
see that the concept of logical connection will help us better understand the task of lay-
ering we encounter in data communication and networking.    
2.2
TCP/IP PROTOCOL SUITE
Now that we know about the concept of protocol layering and the logical communica-
tion between layers in our second scenario, we can introduce the TCP/IP (Transmission
Control Protocol/Internet Protocol). TCP/IP is a protocol suite (a set of protocols orga-
nized in different layers) used in the Internet today. It is a hierarchical protocol made up
of interactive modules, each of which provides a specific functionality. The term hier-
archical means that each upper level protocol is supported by the services provided by
one or more lower level protocols. The original TCP/IP protocol suite was defined as
four software layers built upon the hardware. Today, however, TCP/IP is thought of as a
five-layer model. Figure 2.4 shows both configurations.
2.2.1
Layered Architecture
To show how the layers in the TCP/IP protocol suite are involved in communication
between two hosts, we assume that we want to use the suite in a small internet made up
of three LANs (links), each with a link-layer switch. We also assume that the links are
connected by one router, as shown in Figure 2.5.  
Figure 2.3
Logical connection between peer layers
Plaintext
Maria 
Ann
Logical connection
Logical connection
Logical connection
Mail 
Send mail/
receive mail 
Encrypt/Decrypt 
Layer 2
Layer 1
Encrypt/Decrypt 
Layer 2
Talk/Listen 
Layer 3
Layer 3
Listen/Talk 
Plaintext
Ciphertext
Ciphertext
Mail 
Send mail/
receive mail 
Layer 1

PART I
OVERVIEW
Let us assume that computer A communicates with computer B. As the figure
shows, we have five communicating devices in this communication: source host
(computer A), the link-layer switch in link 1, the router, the link-layer switch in link 2,
and the destination host (computer B). Each device is involved with a set of layers
depending on the role of the device in the internet. The two hosts are involved in all five
layers; the source host needs to create a message in the application layer and send it
down the layers so that it is physically sent to the destination host. The destination host
needs to receive the communication at the physical layer and then deliver it through the
other layers to the application layer. 
Figure 2.4
Layers in the TCP/IP protocol suite
Figure 2.5
Communication through an internet
Application
Internet
Network Interface
Hardware Devices
Layer 1
a. Original layers
b. Layers used in this book
Layer 2
Layer 3
Layer 4
Layer 5
Transport
Application
Network
Data link
Physical
Transport
Link 1
Switch
 A
 Source (A)
 B
 C
 Destination (B)
Communication from A to B
Router
Router
Link 2
Link 3
Physical
Data link
Network
Transport
Application
Physical
Physical
Physical
Physical
Physical
Data link
Data link
Data link
Data link
Data link
Network
Network
Transport
Application
Switch

CHAPTER 2
NETWORK MODELS

The router is involved in only three layers; there is no transport or application layer
in a router as long as the router is used only for routing. Although a router is always
involved in one network layer, it is involved in n combinations of link and physical lay-
ers in which n is the number of links the router is connected to. The reason is that each
link may use its own data-link or physical protocol. For example, in the above figure, the
router is involved in three links, but the message sent from source A to destination B is
involved in two links. Each link may be using different link-layer and physical-layer
protocols; the router needs to receive a packet from link 1 based on one pair of proto-
cols and deliver it to link 2 based on another pair of protocols. 
A link-layer switch in a link, however, is involved only in two layers, data-link and
physical. Although each switch in the above figure has two different connections, the
connections are in the same link, which uses only one set of protocols. This means that,
unlike a router, a link-layer switch is involved only in one data-link and one physical
layer.
2.2.2
Layers in the TCP/IP Protocol Suite
After the above introduction, we briefly discuss the functions and duties of layers in
the TCP/IP protocol suite. Each layer is discussed in detail in the next five parts of
the book. To better understand the duties of each layer, we need to think about the
logical connections between layers. Figure 2.6 shows logical connections in our sim-
ple internet. 
Using logical connections makes it easier for us to think about the duty of each
layer. As the figure shows, the duty of the application, transport, and network layers is
end-to-end. However, the duty of the data-link and physical layers is hop-to-hop, in
which a hop is a host or router. In other words, the domain of duty of the top three
layers is the internet, and the domain of duty of the two lower layers is the link. 
Another way of thinking of the logical connections is to think about the data unit
created from each layer. In the top three layers, the data unit (packets) should not be
Figure 2.6
Logical connections between layers of the TCP/IP protocol suite
Link 1
LAN
Switch
Logical connections
Source
host
Destination
host
Source
host
Destination
host
Router
Link 2
LAN
Physical
Data link
Network
Transport
Application
Physical
Data link
Network
Transport
Application
Switch
Router
To link 3

PART I
OVERVIEW
changed by any router or link-layer switch. In the bottom two layers, the packet created
by the host is changed only by the routers, not by the link-layer switches. 
Figure 2.7 shows the second principle discussed previously for protocol layering.
We show the identical objects below each layer related to each device. 
Note that, although the logical connection at the network layer is between the two
hosts, we can only say that identical objects exist between two hops in this case because
a router may fragment the packet at the network layer and send more packets than
received (see fragmentation in Chapter 19). Note that the link between two hops does
not change the object. 
2.2.3
Description of Each Layer
After understanding the concept of logical communication, we are ready to briefly dis-
cuss the duty of each layer. Our discussion in this chapter will be very brief, but we
come back to the duty of each layer in next five parts of the book. 
Physical Layer
We can say that the physical layer is responsible for carrying individual bits in a frame
across the link. Although the physical layer is the lowest level in the TCP/IP protocol
suite, the communication between two devices at the physical layer is still a logical
communication because there is another, hidden layer, the transmission media, under
the physical layer. Two devices are connected by a transmission medium (cable or air).
We need to know that the transmission medium does not carry bits; it carries electrical
or optical signals. So the bits received in a frame from the data-link layer are trans-
formed and sent through the transmission media, but we can think that the logical unit
between two physical layers in two devices is a bit. There are several protocols that
transform a bit to a signal. We discuss them in Part II when we discuss the physical
layer and the transmission media. 
Figure 2.7
Identical objects in the TCP/IP protocol suite
Physical
Data link
Network
Transport
Application
Physical
Data link
Identical objects (messages)
Notes: We have not shown switches because they don’t change objects.
Identical objects (segments or user datagrams)
Identical objects (datagrams)
Identical objects (datagrams)
Identical objects (frames)
Identical objects (bits)
Identical objects (bits)
Identical objects (frames)
Network
Transport
Application

CHAPTER 2
NETWORK MODELS

Data-link Layer
We have seen that an internet is made up of several links (LANs and WANs) connected
by routers. There may be several overlapping sets of links that a datagram can travel
from the host to the destination. The routers are responsible for choosing the best links.
However, when the next link to travel is determined by the router, the data-link layer is
responsible for taking the datagram and moving it across the link. The link can be a
wired LAN with a link-layer switch, a wireless LAN, a wired WAN, or a wireless
WAN. We can also have different protocols used with any link type. In each case, the
data-link layer is responsible for moving the packet through the link. 
TCP/IP does not define any specific protocol for the data-link layer. It supports all
the standard and proprietary protocols. Any protocol that can take the datagram and
carry it through the link suffices for the network layer. The data-link layer takes a data-
gram and encapsulates it in a packet called a frame. 
Each link-layer protocol may provide a different service. Some link-layer proto-
cols provide complete error detection and correction, some provide only error correc-
tion. We discuss wired links in Chapters 13 and 14 and wireless links in Chapters 15
and 16. 
Network Layer
The network layer is responsible for creating a connection between the source computer
and the destination computer. The communication at the network layer is host-to-host.
However, since there can be several routers from the source to the destination, the routers
in the path are responsible for choosing the best route for each packet. We can say that the
network layer is responsible for host-to-host communication and routing the packet
through possible routes. Again, we may ask ourselves why we need the network layer. We
could have added the routing duty to the transport layer and dropped this layer. One reason,
as we said before, is the separation of different tasks between different layers. The second
reason is that the routers do not need the application and transport layers. Separating the
tasks allows us to use fewer protocols on the routers.
 The network layer in the Internet includes the main protocol, Internet Protocol
(IP), that defines the format of the packet, called a datagram at the network layer. IP
also defines the format and the structure of addresses used in this layer. IP is also
responsible for routing a packet from its source to its destination, which is achieved by
each router forwarding the datagram to the next router in its path. 
IP is a connectionless protocol that provides no flow control, no error control, and
no congestion control services. This means that if any of theses services is required for
an application, the application should rely only on the transport-layer protocol. The net-
work layer also includes unicast (one-to-one) and multicast (one-to-many) routing pro-
tocols. A routing protocol does not take part in routing (it is the responsibility of IP),
but it creates forwarding tables for routers to help them in the routing process.
The network layer also has some auxiliary protocols that help IP in its delivery and
routing tasks. The Internet Control Message Protocol (ICMP) helps IP to report some
problems when routing a packet. The Internet Group Management Protocol (IGMP) is
another protocol that helps IP in multitasking. The Dynamic Host Configuration Proto-
col (DHCP) helps IP to get the network-layer address for a host. The Address Resolu-
tion Protocol (ARP) is a protocol that helps IP to find the link-layer address of a host or

PART I
OVERVIEW
a router when its network-layer address is given. ARP is discussed in Chapter 9, ICMP
in Chapter 19, and IGMP in Chapter 21.
Transport Layer
The logical connection at the transport layer is also end-to-end. The transport layer at the
source host gets the message from the application layer, encapsulates it in a transport-
layer packet (called a segment or a user datagram in different protocols) and sends it,
through the logical (imaginary) connection, to the transport layer at the destination host.
In other words, the transport layer is responsible for giving services to the application
layer: to get a message from an application program running on the source host and
deliver it to the corresponding application program on the destination host. We may ask
why we need an end-to-end transport layer when we already have an end-to-end applica-
tion layer. The reason is the separation of tasks and duties, which we discussed earlier.
The transport layer should be independent of the application layer. In addition, we will
see that we have more than one protocol in the transport layer, which means that each
application program can use the protocol that best matches its requirement.
As we said, there are a few transport-layer protocols in the Internet, each designed
for some specific task. The main protocol, Transmission Control Protocol (TCP), is a
connection-oriented protocol that first establishes a logical connection between trans-
port layers at two hosts before transferring data. It creates a logical pipe between two
TCPs for transferring a stream of bytes. TCP provides flow control (matching the send-
ing data rate of the source host with the receiving data rate of the destination host to
prevent overwhelming the destination), error control (to guarantee that the segments
arrive at the destination without error and resending the corrupted ones), and conges-
tion control to reduce the loss of segments due to congestion in the network. The other
common protocol, User Datagram Protocol (UDP), is a connectionless protocol that
transmits user datagrams without first creating a logical connection. In UDP, each user
datagram is an independent entity without being related to the previous or the next one
(the meaning of the term connectionless). UDP is a simple protocol that does not pro-
vide flow, error, or congestion control. Its simplicity, which means small overhead, is
attractive to an application program that needs to send short messages and cannot
afford the retransmission of the packets involved in TCP, when a packet is corrupted or
lost. A new protocol, Stream Control Transmission Protocol (SCTP) is designed to
respond to new applications that are emerging in the multimedia. We will discuss UDP,
TCP, and SCTP in Chapter 24. 
Application Layer
As Figure 2.6 shows, the logical connection between the two application layers is end-
to-end. The two application layers exchange messages between each other as though
there were a bridge between the two layers. However, we should know that the commu-
nication is done through all the layers. 
Communication at the application layer is between two processes (two programs
running at this layer). To communicate, a process sends a request to the other process
and receives a response. Process-to-process communication is the duty of the applica-
tion layer. The application layer in the Internet includes many predefined protocols, but

CHAPTER 2
NETWORK MODELS

a user can also create a pair of processes to be run at the two hosts. In Chapter 25, we
explore this situation. 
 The Hypertext Transfer Protocol (HTTP) is a vehicle for accessing the World
Wide Web (WWW). The Simple Mail Transfer Protocol (SMTP) is the main protocol
used in electronic mail (e-mail) service. The File Transfer Protocol (FTP) is used for
transferring files from one host to another. The Terminal Network (TELNET) and
Secure Shell (SSH) are used for accessing a site remotely. The Simple Network Man-
agement Protocol (SNMP) is used by an administrator to manage the Internet at global
and local levels. The Domain Name System (DNS) is used by other protocols to find
the network-layer address of a computer. The Internet Group Management Protocol
(IGMP) is used to collect membership in a group. We discuss most of these protocols in
Chapter 26 and some in other chapters. 
2.2.4
Encapsulation and Decapsulation
One of the important concepts in protocol layering in the Internet is encapsulation/
decapsulation. Figure 2.8 shows this concept for the small internet in Figure 2.5. 
We have not shown the layers for the link-layer switches because no encapsulation/
decapsulation occurs in this device. In Figure 2.8, we show the encapsulation in the
source host, decapsulation in the destination host, and encapsulation and decapsulation
in the router. 
Encapsulation at the Source Host 
At the source, we have only encapsulation. 
1. At the application layer, the data to be exchanged is referred to as a message. A
message normally does not contain any header or trailer, but if it does, we refer to
the whole as the message. The message is passed to the transport layer.
2. The transport layer takes the message as the payload, the load that the transport
layer should take care of. It adds the transport layer header to the payload, which
contains the identifiers of the source and destination application programs that
Figure 2.8
Encapsulation/Decapsulation 
Source host
Destination host
Router
Message
Encapsulate
Decapsulate
Legend
Header at data-link layer

Message

Message

Message

Message

Message

Message

Message
Message

Message

Message

Message
Header at network layer

Header at transport layer

Physical
Physical
Application
Transport
Network
Data link
Application
Transport
Network
Data link

PART I
OVERVIEW
want to communicate plus some more information that is needed for the end-to-
end delivery of the message, such as information needed for flow, error control, or
congestion control. The result is the transport-layer packet, which is called the seg-
ment (in TCP) and the user datagram (in UDP). The transport layer then passes the
packet to the network layer.
3. The network layer takes the transport-layer packet as data or payload and adds its
own header to the payload. The header contains the addresses of the source and
destination hosts and some more information used for error checking of the header,
fragmentation information, and so on. The result is the network-layer packet,
called a datagram. The network layer then passes the packet to the data-link layer.
4. The data-link layer takes the network-layer packet as data or payload and adds its
own header, which contains the link-layer addresses of the host or the next hop (the
router). The result is the link-layer packet, which is called a frame. The frame is
passed to the physical layer for transmission.
Decapsulation and Encapsulation at the Router
At the router, we have both decapsulation and encapsulation because the router is con-
nected to two or more links.
1. After the set of bits are delivered to the data-link layer, this layer decapsulates the
datagram from the frame and passes it to the network layer.
2. The network layer only inspects the source and destination addresses in the datagram
header and consults its forwarding table to find the next hop to which the datagram is to
be delivered. The contents of the datagram should not be changed by the network layer
in the router unless there is a need to fragment the datagram if it is too big to be passed
through the next link. The datagram is then passed to the data-link layer of the next link. 
3. The data-link layer of the next link encapsulates the datagram in a frame and
passes it to the physical layer for transmission.
Decapsulation at the Destination Host
At the destination host, each layer only decapsulates the packet received, removes the
payload, and delivers the payload to the next-higher layer protocol until the message
reaches the application layer. It is necessary to say that decapsulation in the host
involves error checking. 
2.2.5
Addressing
It is worth mentioning another concept related to protocol layering in the Internet,
addressing. As we discussed before, we have logical communication between pairs of
layers in this model. Any communication that involves two parties needs two addresses:
source address and destination address. Although it looks as if we need five pairs of
addresses, one pair per layer, we normally have only four because the physical layer does
not need addresses; the unit of data exchange at the physical layer is a bit, which defi-
nitely cannot have an address. Figure 2.9 shows the addressing at each layer.  
As the figure shows, there is a relationship between the layer, the address used in
that layer, and the packet name at that layer. At the application layer, we normally use
names to define the site that provides services, such as someorg.com, or the e-mail

CHAPTER 2
NETWORK MODELS

address, such as somebody@coldmail.com. At the transport layer, addresses are called
port numbers, and these define the application-layer programs at the source and
destination. Port numbers are local addresses that distinguish between several programs
running at the same time. At the network-layer, the addresses are global, with the whole
Internet as the scope. A network-layer address uniquely defines the connection of a
device to the Internet. The link-layer addresses, sometimes called MAC addresses, are
locally defined addresses, each of which defines a specific host or router in a network
(LAN or WAN). We will come back to these addresses in future chapters. 
2.2.6
Multiplexing and Demultiplexing
Since the TCP/IP protocol suite uses several protocols at some layers, we can say that we
have multiplexing at the source and demultiplexing at the destination. Multiplexing in this
case means that a protocol at a layer can encapsulate a packet from several next-higher
layer protocols (one at a time); demultiplexing means that a protocol can decapsulate and
deliver a packet to several next-higher layer protocols (one at a time). Figure 2.10 shows
the concept of multiplexing and demultiplexing at the three upper layers. 
To be able to multiplex and demultiplex, a protocol needs to have a field in its
header to identify to which protocol the encapsulated packets belong. At the transport
Figure 2.9
Addressing in the TCP/IP protocol suite
Figure 2.10
Multiplexing and demultiplexing
Message
Segment / User datagram
Datagram
Frame
Bits
Link-layer addresses
Data-link layer
Physical layer
Addresses
Layers
Packet names
Port numbers
Transport layer
Names
Application layer
Network layer
Logical addresses
a. Multiplexing at source
b. Demultiplexing at destination
SNMP
DNS
TCP
UDP
HTTP
FTP
IP
SNMP
DNS
TCP
UDP
IP
HTTP
FTP

PART I
OVERVIEW
layer, either UDP or TCP can accept a message from several application-layer
protocols. At the network layer, IP can accept a segment from TCP or a user datagram
from UDP. IP can also accept a packet from other protocols such as ICMP, IGMP, and
so on. At the data-link layer, a frame may carry the payload coming from IP or other
protocols such as ARP (see Chapter 9). 
2.3
THE OSI MODEL
Although, when speaking of the Internet, everyone talks about the TCP/IP protocol
suite, this suite is not the only suite of protocols defined. Established in 1947, the
International Organization for Standardization (ISO) is a multinational body
dedicated to worldwide agreement on international standards. Almost three-fourths of
the countries in the world are represented in the ISO. An ISO standard that covers all
aspects of network communications is the Open Systems Interconnection (OSI)
model. It was first introduced in the late 1970s. 
An open system is a set of protocols that allows any two different systems to com-
municate regardless of their underlying architecture. The purpose of the OSI model is
to show how to facilitate communication between different systems without requiring
changes to the logic of the underlying hardware and software. The OSI model is not a
protocol; it is a model for understanding and designing a network architecture that is
flexible, robust, and interoperable. The OSI model was intended to be the basis for the
creation of the protocols in the OSI stack. 
The OSI model is a layered framework for the design of network systems that
allows communication between all types of computer systems. It consists of seven sep-
arate but related layers, each of which defines a part of the process of moving information
across a network (see Figure 2.11). 
ISO is the organization; OSI is the model.
Figure 2.11
The OSI model
Transport
Application
Presentation
Session
Network
Data link
Physical
Layer 1
Layer 2
Layer 3
Layer 4
Layer 5
Layer 6
Layer 7

CHAPTER 2
NETWORK MODELS

2.3.1
OSI versus TCP/IP
When we compare the two models, we find that two layers, session and presentation,
are missing from the TCP/IP protocol suite. These two layers were not added to the
TCP/IP protocol suite after the publication of the OSI model. The application layer in
the suite is usually considered to be the combination of three layers in the OSI model,
as shown in Figure 2.12. 
Two reasons were mentioned for this decision. First, TCP/IP has more than one
transport-layer protocol. Some of the functionalities of the session layer are available
in some of the transport-layer protocols. Second, the application layer is not only
one piece of software. Many applications can be developed at this layer. If some of
the functionalities mentioned in the session and presentation layers are needed for
a particular application, they can be included in the development of that piece of
software. 
2.3.2
Lack of OSI Model’s Success
The OSI model appeared after the TCP/IP protocol suite. Most experts were at first
excited and thought that the TCP/IP protocol would be fully replaced by the OSI
model. This did not happen for several reasons, but we describe only three, which are
agreed upon by all experts in the field. First, OSI was completed when TCP/IP was
fully in place and a lot of time and money had been spent on the suite; changing it
would cost a lot. Second, some layers in the OSI model were never fully defined. For
example, although the services provided by the presentation and the session layers
were listed in the document, actual protocols for these two layers were not fully
defined, nor were they fully described, and the corresponding software was not fully
Figure 2.12
TCP/IP and OSI model
OSI Model
TCP/IP Protocol Suite
Underlying
LAN and WAN
technology
Internet Protocol
and some helping
protocols
Several transport 
protocols 
Several application
protocols 
Session
Presentation
Application
Application
Data link
Data link
Network
Network
Transport
Transport
Physical
Physical

PART I
OVERVIEW
developed. Third, when OSI was implemented by an organization in a different
application, it did not show a high enough level of performance to entice the Internet
authority to switch from the TCP/IP protocol suite to the OSI model. 
2.4
END-CHAPTER MATERIALS
2.4.1
Recommended Reading
For more details about subjects discussed in this chapter, we recommend the following
books, and RFCs. The items enclosed in brackets refer to the reference list at the end of
the book. 
Books and Papers
Several books and papers give a thorough coverage about the materials discussed in this
chapter: [Seg 98], [Lei et al. 98], [Kle 04], [Cer 89], and [Jen et al. 86]. 
RFCs
Two RFCs in particular discuss the TCP/IP suite: RFC 791 (IP) and RFC 817 (TCP). In
future chapters we list different RFCs related to each protocol in each layer.
2.4.2
Key Terms
International Organization for Standardization (ISO)
Open Systems Interconnection (OSI) model
protocol layering
2.4.3
Summary
A protocol is a set of rules that governs communication. In protocol layering, we need
to follow two principles to provide bidirectional communication. First, each layer needs
to perform two opposite tasks. Second, two objects under each layer at both sides
should be identical. In a protocol layering, we need to distinguish between a logical
connection and a physical connection. Two protocols at the same layer can have a logi-
cal connection; a physical connection is only possible through the physical layers.
TCP/IP is a hierarchical protocol suite made of five layers: physical, data link, net-
work, transport, and application. The physical layer coordinates the functions required
to transmit a bit stream over a physical medium. The data-link layer is responsible for
delivering data units from one station to the next without errors. The network layer is
responsible for the source-to-destination delivery of a packet across multiple network
links. The transport layer is responsible for the process-to-process delivery of the entire
message. The application layer enables the users to access the network. 
Four levels of addresses are used in an internet following the TCP/IP protocols: phys-
ical (link) addresses, logical (IP) addresses, port addresses, and specific addresses. The
physical address, also known as the link address, is the address of a node as defined by
its LAN or WAN. The IP address uniquely defines a host on the Internet. The port
address identifies a process on a host. A specific address is a user-friendly address.

PART II
PHYSICAL LAYER
7.1
INTRODUCTION
Transmission media are actually located below the physical layer and are directly con-
trolled by the physical layer. We could say that transmission media belong to layer
zero. Figure 7.1 shows the position of transmission media in relation to the physical
layer. 
A transmission medium can be broadly defined as anything that can carry infor-
mation from a source to a destination. For example, the transmission medium for two
people having a dinner conversation is the air. The air can also be used to convey the
message in a smoke signal or semaphore. For a written message, the transmission
medium might be a mail carrier, a truck, or an airplane. 
In data communications the definition of the information and the transmission
medium is more specific. The transmission medium is usually free space, metallic cable,
or fiber-optic cable. The information is usually a signal that is the result of a conversion
of data from another form.
The use of long-distance communication using electric signals started with the
invention of the telegraph by Morse in the 19th century. Communication by telegraph
was slow and dependent on a metallic medium.
Extending the range of the human voice became possible when the telephone was
invented in 1869. Telephone communication at that time also needed a metallic medium
to carry the electric signals that were the result of a conversion from the human voice.
The communication was, however, unreliable due to the poor quality of the wires. The
lines were often noisy and the technology was unsophisticated.
Wireless communication started in 1895 when Hertz was able to send high-
frequency signals. Later, Marconi devised a method to send telegraph-type messages
over the Atlantic Ocean.
We have come a long way. Better metallic media have been invented (twisted-pair
and coaxial cables, for example). The use of optical fibers has increased the data rate
incredibly. Free space (air, vacuum, and water) is used more efficiently, in part due
to the technologies (such as modulation and multiplexing) discussed in the previous
chapters. 
As discussed in Chapter 3, computers and other telecommunication devices use
signals to represent data. These signals are transmitted from one device to another in the
form of electromagnetic energy, which is propagated through transmission media. 
Electromagnetic energy, a combination of electric and magnetic fields vibrating in
relation to each other, includes power, radio waves, infrared light, visible light, ultraviolet
Figure 7.1
Transmission medium and physical layer
Physical layer
Physical layer
Cable or air
Sender
Receiver
Transmission medium

CHAPTER 7
TRANSMISSION MEDIA

light, and X, gamma, and cosmic rays. Each of these constitutes a portion of the elec-
tromagnetic spectrum. Not all portions of the spectrum are currently usable for tele-
communications, however. The media to harness those that are usable are also limited
to a few types.
In telecommunications, transmission media can be divided into two broad catego-
ries: guided and unguided. Guided media include twisted-pair cable, coaxial cable, and
fiber-optic cable. Unguided medium is free space. Figure 7.2 shows this taxonomy. 
7.2
GUIDED MEDIA
Guided media, which are those that provide a conduit from one device to another,
include twisted-pair cable, coaxial cable, and fiber-optic cable. A signal traveling
along any of these media is directed and contained by the physical limits of the
medium. Twisted-pair and coaxial cable use metallic (copper) conductors that accept
and transport signals in the form of electric current. Optical fiber is a cable that accepts
and transports signals in the form of light.
7.2.1
Twisted-Pair Cable
A twisted pair consists of two conductors (normally copper), each with its own plastic
insulation, twisted together, as shown in Figure 7.3.  
One of the wires is used to carry signals to the receiver, and the other is used only
as a ground reference. The receiver uses the difference between the two. 
In addition to the signal sent by the sender on one of the wires, interference (noise)
and crosstalk may affect both wires and create unwanted signals. 
If the two wires are parallel, the effect of these unwanted signals is not the same in
both wires because they are at different locations relative to the noise or crosstalk sources
(e.g., one is closer and the other is farther). This results in a difference at the receiver.
Figure 7.2
Classes of transmission media
Figure 7.3
Twisted-pair cable
Transmission
media
Guided
(wired)
Unguided
(wireless)
Twisted-pair
cable
Coaxial
cable
Fiber-optic
cable
Radio wave
Microwave
Infrared
Conductor
Insulator

PART II
PHYSICAL LAYER
By twisting the pairs, a balance is maintained. For example, suppose in one twist, one
wire is closer to the noise source and the other is farther; in the next twist, the reverse is
true. Twisting makes it probable that both wires are equally affected by external influ-
ences (noise or crosstalk). This means that the receiver, which calculates the difference
between the two, receives no unwanted signals. The unwanted signals are mostly can-
celed out. From the above discussion, it is clear that the number of twists per unit of
length (e.g., inch) has some effect on the quality of the cable. 
Unshielded Versus Shielded Twisted-Pair Cable
The most common twisted-pair cable used in communications is referred to as
unshielded twisted-pair (UTP). IBM has also produced a version of twisted-pair cable
for its use, called shielded twisted-pair (STP). STP cable has a metal foil or braided-
mesh covering that encases each pair of insulated conductors. Although metal casing
improves the quality of cable by preventing the penetration of noise or crosstalk, it is
bulkier and more expensive. Figure 7.4 shows the difference between UTP and STP.
Our discussion focuses primarily on UTP because STP is seldom used outside of IBM. 
Categories
The Electronic Industries Association (EIA) has developed standards to classify
unshielded twisted-pair cable into seven categories. Categories are determined by cable
quality, with 1 as the lowest and 7 as the highest. Each EIA category is suitable for
specific uses. Table 7.1 shows these categories.  
Figure 7.4
UTP and STP cables
Table 7.1
Categories of unshielded twisted-pair cables
Category
Specification
Data Rate
(Mbps)
Use

Unshielded twisted-pair used in telephone 
< 0.1
Telephone

Unshielded twisted-pair originally used in
T lines

T-1 lines

Improved CAT 2 used in LANs 

LANs

Improved CAT 3 used in Token Ring networks

LANs

Cable wire is normally 24 AWG with a jacket 
and outside sheath 

LANs
a. UTP
b. STP
Plastic cover
Plastic cover
Metal shield

CHAPTER 7
TRANSMISSION MEDIA

Connectors
The most common UTP connector is RJ45 (RJ stands for registered jack), as shown
in Figure 7.5. The RJ45 is a keyed connector, meaning the connector can be inserted in
only one way. 
Performance
One way to measure the performance of twisted-pair cable is to compare attenuation
versus frequency and distance. A twisted-pair cable can pass a wide range of frequencies.
However, Figure 7.6 shows that with increasing frequency, the attenuation, measured in
decibels per kilometer (dB/km), sharply increases with frequencies above 100 kHz. Note
that gauge is a measure of the thickness of the wire. 
Applications
Twisted-pair cables are used in telephone lines to provide voice and data channels.
The local loop—the line that connects subscribers to the central telephone office—
commonly consists of unshielded twisted-pair cables. We discuss telephone networks
in Chapter 14.
The DSL lines that are used by the telephone companies to provide high-data-rate
connections also use the high-bandwidth capability of unshielded twisted-pair cables.
We discuss DSL technology in Chapter 14. 
5E
An extension to category 5 that includes 
extra features to minimize the crosstalk and 
electromagnetic interference

LANs

A new category with matched components 
coming from the same manufacturer. The 
cable must be tested at a 200-Mbps data rate.

LANs

Sometimes called SSTP (shielded screen 
twisted-pair). Each pair is individually 
wrapped in a helical metallic foil followed by 
a metallic foil shield in addition to the outside 
sheath. The shield decreases the effect of 
crosstalk and increases the data rate.

LANs
Figure 7.5
UTP connector
Table 7.1
Categories of unshielded twisted-pair cables (continued)
Category
Specification
Data Rate
(Mbps)
Use

RJ-45 Female
RJ-45 Male

PART II
PHYSICAL LAYER
Local-area networks, such as 10Base-T and 100Base-T, also use twisted-pair cables.
We discuss these networks in Chapter 13.
7.2.2
Coaxial Cable
Coaxial cable (or coax) carries signals of higher frequency ranges than those in twisted-
pair cable, in part because the two media are constructed quite differently. Instead of
having two wires, coax has a central core conductor of solid or stranded wire (usually
copper) enclosed in an insulating sheath, which is, in turn, encased in an outer conductor
of metal foil, braid, or a combination of the two. The outer metallic wrapping serves
both as a shield against noise and as the second conductor, which completes the circuit.
This outer conductor is also enclosed in an insulating sheath, and the whole cable is
protected by a plastic cover (see Figure 7.7).
Coaxial Cable Standards
Coaxial cables are categorized by their Radio Government (RG) ratings. Each RG
number denotes a unique set of physical specifications, including the wire gauge of the
Figure 7.6
UTP performance
Figure 7.7
Coaxial cable

Attenuation (dB/km)

f (kHz)
26 gauge
24 gauge
22 gauge
18 gauge
Gauge

Diameter (inches)
0.0403
0.02320
0.02010
0.0159
Plastic cover
Inner conductor
Outer conductor
(shield)
Insulator
Insulator

CHAPTER 7
TRANSMISSION MEDIA

inner conductor, the thickness and type of the inner insulator, the construction of the
shield, and the size and type of the outer casing. Each cable defined by an RG rating is
adapted for a specialized function, as shown in Table 7.2. 
Coaxial Cable Connectors
To connect coaxial cable to devices, we need coaxial connectors. The most common
type of connector used today is the Bayonet Neill-Concelman (BNC) connector.
Figure 7.8 shows three popular types of these connectors: the BNC connector, the
BNC T connector, and the BNC terminator.
The BNC connector is used to connect the end of the cable to a device, such as a
TV set. The BNC T connector is used in Ethernet networks (see Chapter 13) to branch
out to a connection to a computer or other device. The BNC terminator is used at the
end of the cable to prevent the reflection of the signal.
Performance
As we did with twisted-pair cable, we can measure the performance of a coaxial cable.
We notice in Figure 7.9 that the attenuation is much higher in coaxial cable than in
twisted-pair cable. In other words, although coaxial cable has a much higher bandwidth,
the signal weakens rapidly and requires the frequent use of repeaters.  
Applications
Coaxial cable was widely used in analog telephone networks where a single coaxial
network could carry 10,000 voice signals. Later it was used in digital telephone
networks where a single coaxial cable could carry digital data up to 600 Mbps. How-
ever, coaxial cable in telephone networks has largely been replaced today with fiber-
optic cable.
Table 7.2
Categories of coaxial cables
Category
Impedance
Use
RG-59
75 Ω
Cable TV
RG-58
50 Ω
Thin Ethernet
RG-11
50 Ω
Thick Ethernet
Figure 7.8
BNC connectors
Cable
BNC T
BNC connector
50-W
BNC terminator
Ground
wire

PART II
PHYSICAL LAYER
Cable TV networks (see Chapter 14) also use coaxial cables. In the traditional cable
TV network, the entire network used coaxial cable. Later, however, cable TV providers
replaced most of the media with fiber-optic cable; hybrid networks use coaxial cable
only at the network boundaries, near the consumer premises. Cable TV uses RG-59
coaxial cable.
Another common application of coaxial cable is in traditional Ethernet LANs (see
Chapter 13). Because of its high bandwidth, and consequently high data rate, coaxial
cable was chosen for digital transmission in early Ethernet LANs. The 10Base-2, or Thin
Ethernet, uses RG-58 coaxial cable with BNC connectors to transmit data at 10 Mbps
with a range of 185 m. The 10Base5, or Thick Ethernet, uses RG-11 (thick coaxial cable)
to transmit 10 Mbps with a range of 5000 m. Thick Ethernet has specialized connectors. 
7.2.3
Fiber-Optic Cable
A fiber-optic cable is made of glass or plastic and transmits signals in the form of light.
To understand optical fiber, we first need to explore several aspects of the nature of
light.
Light travels in a straight line as long as it is moving through a single uniform sub-
stance. If a ray of light traveling through one substance suddenly enters another substance
(of a different density), the ray changes direction. Figure 7.10 shows how a ray of light
changes direction when going from a more dense to a less dense substance. 
As the figure shows, if the angle of incidence I (the angle the ray makes with the
line perpendicular to the interface between the two substances) is less than the critical
angle, the ray refracts and moves closer to the surface. If the angle of incidence is
equal to the critical angle, the light bends along the interface. If the angle is greater than
the critical angle, the ray reflects (makes a turn) and travels again in the denser
Figure 7.9
Coaxial cable performance

Attenuation (dB/km)
0.01
1.0
0.1

f (MHz)
0.7/2.9 mm
1.2/4.4 mm
2.6/9.5 mm

CHAPTER 7
TRANSMISSION MEDIA

substance. Note that the critical angle is a property of the substance, and its value differs
from one substance to another. 
Optical fibers use reflection to guide light through a channel. A glass or plastic core
is surrounded by a cladding of less dense glass or plastic. The difference in density of the
two materials must be such that a beam of light moving through the core is reflected off
the cladding instead of being refracted into it. See Figure 7.11. 
Propagation Modes
Current technology supports two modes (multimode and single mode) for propagating light
along optical channels, each requiring fiber with different physical characteristics. Multi-
mode can be implemented in two forms: step-index or graded-index (see Figure 7.12).
Multimode
Multimode is so named because multiple beams from a light source move through the
core in different paths. How these beams move within the cable depends on the struc-
ture of the core, as shown in Figure 7.13. 
Figure 7.10
Bending of light ray
Figure 7.11
Optical fiber
Figure 7.12
Propagation modes
I
More
dense
More
dense
More
dense
I < critical angle,
refraction 
I = critical angle,
refraction 
I > critical angle,
reflection 
Less
dense
Less
dense
Less
dense
I
I
Cladding
Receiver
Core
Cladding
Sender
Multimode
Mode
Single mode
Step index
Graded index

PART II
PHYSICAL LAYER
In multimode step-index fiber, the density of the core remains constant from the
center to the edges. A beam of light moves through this constant density in a straight
line until it reaches the interface of the core and the cladding. At the interface, there is
an abrupt change due to a lower density; this alters the angle of the beam’s motion. The
term step-index refers to the suddenness of this change, which contributes to the distor-
tion of the signal as it passes through the fiber.
A second type of fiber, called multimode graded-index fiber, decreases this dis-
tortion of the signal through the cable. The word index here refers to the index of
refraction. As we saw above, the index of refraction is related to density. A graded-
index fiber, therefore, is one with varying densities. Density is highest at the center of
the core and decreases gradually to its lowest at the edge. Figure 7.13 shows the impact
of this variable density on the propagation of light beams.
Single-Mode 
Single-mode uses step-index fiber and a highly focused source of light that limits
beams to a small range of angles, all close to the horizontal. The single-mode fiber
itself is manufactured with a much smaller diameter than that of multimode fiber, and
with substantially lower density (index of refraction). The decrease in density results in
a critical angle that is close enough to 90° to make the propagation of beams almost
horizontal. In this case, propagation of different beams is almost identical, and delays
are negligible. All the beams arrive at the destination “together” and can be recombined
with little distortion to the signal (see Figure 7.13).
Figure 7.13
Modes
Source
Destination
Source
Source
Destination
Destination
a. Multimode, step index
b. Multimode, graded index
c. Single mode

CHAPTER 7
TRANSMISSION MEDIA

Fiber Sizes
Optical fibers are defined by the ratio of the diameter of their core to the diameter of
their cladding, both expressed in micrometers. The common sizes are shown in Table 7.3.
Note that the last size listed is for single-mode only.
Cable Composition
Figure 7.14 shows the composition of a typical fiber-optic cable. The outer jacket is
made of either PVC or Teflon. Inside the jacket are Kevlar strands to strengthen the cable.
Kevlar is a strong material used in the fabrication of bulletproof vests. Below the Kevlar is
another plastic coating to cushion the fiber. The fiber is at the center of the cable, and it
consists of cladding and core. 
Fiber-Optic Cable Connectors
There are three types of connectors for fiber-optic cables, as shown in Figure 7.15. The
subscriber channel (SC) connector is used for cable TV. It uses a push/pull locking
system. The straight-tip (ST) connector is used for connecting cable to networking
devices. It uses a bayonet locking system and is more reliable than SC. MT-RJ is a
connector that is the same size as RJ45. 
Performance
The plot of attenuation versus wavelength in Figure 7.16 shows a very interesting
phenomenon in fiber-optic cable. Attenuation is flatter than in the case of twisted-pair
cable and coaxial cable. The performance is such that we need fewer (actually one-
tenth as many) repeaters when we use fiber-optic cable. 
Table 7.3
Fiber types
Type
Core (μm)
Cladding (μm)
Mode
50/125
  50.0

Multimode, graded index
62.5/125
  62.5

Multimode, graded index
100/125
100.0

Multimode, graded index
7/125
    7.0

Single mode
Figure 7.14
Fiber construction
Outer jacket
Plastic
buffer
DuPont Kevlar
for strength
Glass or
plastic core
Cladding

PART II
PHYSICAL LAYER
Applications
Fiber-optic cable is often found in backbone networks because its wide bandwidth is
cost-effective. Today, with wavelength-division multiplexing (WDM), we can transfer
data at a rate of 1600 Gbps. The SONET network that we discuss in Chapter 14 provides
such a backbone.
Some cable TV companies use a combination of optical fiber and coaxial cable,
thus creating a hybrid network. Optical fiber provides the backbone structure while
coaxial cable provides the connection to the user premises. This is a cost-effective con-
figuration since the narrow bandwidth requirement at the user end does not justify the
use of optical fiber. 
Figure 7.15
Fiber-optic cable connectors
Figure 7.16
Optical fiber performance
SC connector
MT-RJ connector
ST connector
RX
 TX

0.5
0.1
0.05
Loss (dB/km)
0.01

Wavelength (nm)

CHAPTER 7
TRANSMISSION MEDIA

Local-area networks such as 100Base-FX network (Fast Ethernet) and 1000Base-X
also use fiber-optic cable. 
Advantages and Disadvantages of Optical Fiber
Advantages
Fiber-optic cable has several advantages over metallic cable (twisted-pair or coaxial).
❑
Higher bandwidth. Fiber-optic cable can support dramatically higher bandwidths
(and hence data rates) than either twisted-pair or coaxial cable. Currently, data rates
and bandwidth utilization over fiber-optic cable are limited not by the medium but
by the signal generation and reception technology available.
❑
Less signal attenuation. Fiber-optic transmission distance is significantly greater
than that of other guided media. A signal can run for 50 km without requiring
regeneration. We need repeaters every 5 km for coaxial or twisted-pair cable.
❑
Immunity to electromagnetic interference. Electromagnetic noise cannot affect
fiber-optic cables. 
❑
Resistance to corrosive materials. Glass is more resistant to corrosive materials
than copper. 
❑
Light weight. Fiber-optic cables are much lighter than copper cables.
❑
Greater immunity to tapping. Fiber-optic cables are more immune to tapping than
copper cables. Copper cables create antenna effects that can easily be tapped.
Disadvantages
There are some disadvantages in the use of optical fiber.
❑
Installation and maintenance. Fiber-optic cable is a relatively new technology. Its
installation and maintenance require expertise that is not yet available everywhere.
❑
Unidirectional light propagation. Propagation of light is unidirectional. If we
need bidirectional communication, two fibers are needed.
❑
Cost. The cable and the interfaces are relatively more expensive than those of other
guided media. If the demand for bandwidth is not high, often the use of optical fiber
cannot be justified. 
7.3
UNGUIDED MEDIA: WIRELESS
Unguided medium transport electromagnetic waves without using a physical conduc-
tor. This type of communication is often referred to as wireless communication. Sig-
nals are normally broadcast through free space and thus are available to anyone who
has a device capable of receiving them. 
Figure 7.17 shows the part of the electromagnetic spectrum, ranging from 3 kHz to
900 THz, used for wireless communication. 
Unguided signals can travel from the source to the destination in several ways: ground
propagation, sky propagation, and line-of-sight propagation, as shown in Figure 7.18.

PART II
PHYSICAL LAYER
In ground propagation, radio waves travel through the lowest portion of the atmo-
sphere, hugging the earth. These low-frequency signals emanate in all directions from the
transmitting antenna and follow the curvature of the planet. Distance depends on the
amount of power in the signal: The greater the power, the greater the distance. In sky
propagation, higher-frequency radio waves radiate upward into the ionosphere (the layer
of atmosphere where particles exist as ions) where they are reflected back to earth. This
type of transmission allows for greater distances with lower output power. In line-of-sight
propagation, very high-frequency signals are transmitted in straight lines directly from
antenna to antenna. Antennas must be directional, facing each other, and either tall
enough or close enough together not to be affected by the curvature of the earth. Line-of-
sight propagation is tricky because radio transmissions cannot be completely focused. 
The section of the electromagnetic spectrum defined as radio waves and microwaves
is divided into eight ranges, called bands, each regulated by government authorities.
These bands are rated from very low frequency (VLF) to extremely high frequency (EHF). 
Table 7.4 lists these bands, their ranges, propagation methods, and some applications.
Figure 7.17
Electromagnetic spectrum for wireless communication
Figure 7.18
Propagation methods
Table 7.4
Bands
Band
Range
Propagation
Application
very low frequency (VLF)
3–30 kHz
Ground
Long-range radio 
navigation
low frequency (LF)
30–300 kHz
Ground
Radio beacons and 
navigational locators

THz

GHz

kHz

THz
Radio wave and microwave
Infrared
Light wave
Ionosphere
Ionosphere
Ground propagation
(below 2 MHz)
Sky propagation
(2–30 MHz)
Ionosphere
Line-of-sight propagation
(above 30 MHz)

CHAPTER 7
TRANSMISSION MEDIA

We can divide wireless transmission into three broad groups: radio waves, micro-
waves, and infrared waves. 
7.3.1
Radio Waves
Although there is no clear-cut demarcation between radio waves and microwaves, elec-
tromagnetic waves ranging in frequencies between 3 kHz and 1 GHz are normally called
radio waves; waves ranging in frequencies between 1 and 300 GHz are called micro-
waves. However, the behavior of the waves, rather than the frequencies, is a better
criterion for classification. 
Radio waves, for the most part, are omnidirectional. When an antenna transmits
radio waves, they are propagated in all directions. This means that the sending and
receiving antennas do not have to be aligned. A sending antenna sends waves that can
be received by any receiving antenna. The omnidirectional property has a disadvantage,
too. The radio waves transmitted by one antenna are susceptible to interference by
another antenna that may send signals using the same frequency or band. 
Radio waves, particularly those waves that propagate in the sky mode, can travel
long distances. This makes radio waves a good candidate for long-distance broadcast-
ing such as AM radio.
Radio waves, particularly those of low and medium frequencies, can penetrate
walls. This characteristic can be both an advantage and a disadvantage. It is an advan-
tage because, for example, an AM radio can receive signals inside a building. It is a dis-
advantage because we cannot isolate a communication to just inside or outside a
building. The radio wave band is relatively narrow, just under 1 GHz, compared to
the microwave band. When this band is divided into subbands, the subbands are also
narrow, leading to a low data rate for digital communications.
Almost the entire band is regulated by authorities (e.g., the FCC in the United
States). Using any part of the band requires permission from the authorities.
Omnidirectional Antenna
Radio waves use omnidirectional antennas that send out signals in all directions.
Based on the wavelength, strength, and the purpose of transmission, we can have sev-
eral types of antennas. Figure 7.19 shows an omnidirectional antenna. 
middle frequency (MF)
300 kHz–3 MHz
Sky
AM radio
high frequency (HF)
3–30 MHz
Sky
Citizens band (CB),
ship/aircraft
very high frequency (VHF)
30–300 MHz
Sky and
line-of-sight
VHF TV, FM radio
ultrahigh frequency (UHF)
300 MHz–3 GHz Line-of-sight
UHF TV, cellular phones, 
paging, satellite
superhigh frequency (SF)
3–30 GHz
Line-of-sight
Satellite
extremely high frequency (EHF)
30–300 GHz
Line-of-sight
Radar, satellite
Table 7.4
Bands (continued)
Band
Range
Propagation
Application

PART II
PHYSICAL LAYER
Applications
The omnidirectional characteristics of radio waves make them useful for multicasting,
in which there is one sender but many receivers. AM and FM radio, television, mari-
time radio, cordless phones, and paging are examples of multicasting. 
7.3.2
Microwaves
Electromagnetic waves having frequencies between 1 and 300 GHz are called micro-
waves. Microwaves are unidirectional. When an antenna transmits microwaves, they
can be narrowly focused. This means that the sending and receiving antennas need to
be aligned. The unidirectional property has an obvious advantage. A pair of antennas
can be aligned without interfering with another pair of aligned antennas. The following
describes some characteristics of microwave propagation:
❑
Microwave propagation is line-of-sight. Since the towers with the mounted antennas
need to be in direct sight of each other, towers that are far apart need to be very tall.
The curvature of the earth as well as other blocking obstacles do not allow two short
towers to communicate by using microwaves. Repeaters are often needed for long-
distance communication. 
❑
Very high-frequency microwaves cannot penetrate walls. This characteristic can be
a disadvantage if receivers are inside buildings. 
❑
The microwave band is relatively wide, almost 299 GHz. Therefore wider subbands
can be assigned, and a high data rate is possible. 
❑
Use of certain portions of the band requires permission from authorities.
Unidirectional Antenna
Microwaves need unidirectional antennas that send out signals in one direction. Two
types of antennas are used for microwave communications: the parabolic dish and the
horn (see Figure 7.20). 
Figure 7.19
Omnidirectional antenna
Radio waves are used for multicast communications,
such as radio and television, and paging systems.

CHAPTER 7
TRANSMISSION MEDIA

A parabolic dish antenna is based on the geometry of a parabola: Every line
parallel to the line of symmetry (line of sight) reflects off the curve at angles such that
all the lines intersect in a common point called the focus. The parabolic dish works as a
funnel, catching a wide range of waves and directing them to a common point. In
this way, more of the signal is recovered than would be possible with a single-point
receiver.
Outgoing transmissions are broadcast through a horn aimed at the dish. The micro-
waves hit the dish and are deflected outward in a reversal of the receipt path.
A horn antenna looks like a gigantic scoop. Outgoing transmissions are broadcast
up a stem (resembling a handle) and deflected outward in a series of narrow parallel
beams by the curved head. Received transmissions are collected by the scooped shape of
the horn, in a manner similar to the parabolic dish, and are deflected down into the stem.
Applications
Microwaves, due to their unidirectional properties, are very useful when unicast (one-
to-one) communication is needed between the sender and the receiver. They are used
in cellular phones (Chapter 16), satellite networks (Chapter 16), and wireless LANs
(Chapter 15). 
7.3.3
Infrared
Infrared waves, with frequencies from 300 GHz to 400 THz (wavelengths from 1 mm
to 770 nm), can be used for short-range communication. Infrared waves, having high
frequencies, cannot penetrate walls. This advantageous characteristic prevents interfer-
ence between one system and another; a short-range communication system in one
room cannot be affected by another system in the next room. When we use our infrared
remote control, we do not interfere with the use of the remote by our neighbors. How-
ever, this same characteristic makes infrared signals useless for long-range communica-
tion. In addition, we cannot use infrared waves outside a building because the sun’s
rays contain infrared waves that can interfere with the communication.
Figure 7.20
Unidirectional antennas
Microwaves are used for unicast communication such as cellular telephones,
satellite networks, and wireless LANs.
Waveguide
b. Horn antenna
Focus
a. Parabolic dish antenna

PART II
PHYSICAL LAYER
Applications
The infrared band, almost 400 THz, has an excellent potential for data transmission.
Such a wide bandwidth can be used to transmit digital data with a very high data rate.
The Infrared Data Association (IrDA), an association for sponsoring the use of infrared
waves, has established standards for using these signals for communication between
devices such as keyboards, mice, PCs, and printers. For example, some manufacturers
provide a special port called the IrDA port that allows a wireless keyboard to commnicate
with a PC. The standard originally defined a data rate of 75 kbps for a distance up to
8 m. The recent standard defines a data rate of 4 Mbps. 
Infrared signals defined by IrDA transmit through line of sight; the IrDA port on
the keyboard needs to point to the PC for transmission to occur.
7.4
END-CHAPTER MATERIALS
7.4.1
Recommended Reading
For more details about subjects discussed in this chapter, we recommend the following
books. The items in brackets [. . .] refer to the reference list at the end of the text.
Books
Transmission media is discussed in [GW04], [Sta04], and [Tan03]. [SSS05] gives full
coverage of transmission media.
7.4.2
Key Terms
Infrared signals can be used for short-range communication in a closed 
area using line-of-sight propagation
angle of incidence
Bayonet Neill-Concelman (BNC)
cladding
coaxial cable
core
critical angle
electromagnetic spectrum
fiber-optic cable
gauge
ground propagation
guided media
horn antenna
infrared wave
IrDA port
line-of-sight propagation
microwave
MT-RJ
multimode graded-index fiber
multimode step-index fiber
omnidirectional antenna
optical fiber
parabolic dish antenna
Radio Government (RG) rating
radio wave
reflection
refraction
RJ45
shielded twisted-pair (STP)
single-mode fiber
sky propagation
straight-tip (ST) connector
subscriber channel (SC) connector
transmission medium
twisted-pair cable
unguided medium
unidirectional antenna
unshielded twisted-pair (UTP)
wireless communication

CHAPTER 8
SWITCHING

8.2.3
Delay
Although a circuit-switched network normally has low efficiency, the delay in this type
of network is minimal. During data transfer the data are not delayed at each switch; the
resources are allocated for the duration of the connection. Figure 8.6 shows the idea of
delay in a circuit-switched network when only two switches are involved.  
As Figure 8.6 shows, there is no waiting time at each switch. The total delay is due
to the time needed to create the connection, transfer data, and disconnect the circuit. The
delay caused by the setup is the sum of four parts: the propagation time of the source
computer request (slope of the first gray box), the request signal transfer time (height of
the first gray box), the propagation time of the acknowledgment from the destination
computer (slope of the second gray box), and the signal transfer time of the acknowledg-
ment (height of the second gray box). The delay due to data transfer is the sum of two
parts: the propagation time (slope of the colored box) and data transfer time (height of
the colored box), which can be very long. The third box shows the time needed to tear
down the circuit. We have shown the case in which the receiver requests disconnection,
which creates the maximum delay.   
8.3
PACKET SWITCHING
In data communications, we need to send messages from one end system to another. If
the message is going to pass through a packet-switched network, it needs to be
divided into packets of fixed or variable size. The size of the packet is determined by
the network and the governing protocol. 
In packet switching, there is no resource allocation for a packet. This means that
there is no reserved bandwidth on the links, and there is no scheduled processing time
for each packet. Resources are allocated on demand. The allocation is done on a first-
come, first-served basis. When a switch receives a packet, no matter what the source or
destination is, the packet must wait if there are other packets being processed. As with
Figure 8.6
Delay in a circuit-switched network
A
Data transfer
Total delay
Connect
Time
Time
Time
Time
Disconnect
B

PART II
PHYSICAL LAYER
other systems in our daily life, this lack of reservation may create delay. For example, if
we do not have a reservation at a restaurant, we might have to wait. 
We can have two types of packet-switched networks: datagram networks and virtual-
circuit networks.
8.3.1
Datagram Networks
In a datagram network, each packet is treated independently of all others. Even if a
packet is part of a multipacket transmission, the network treats it as though it existed
alone. Packets in this approach are referred to as datagrams.
Datagram switching is normally done at the network layer. We briefly discuss
datagram networks here as a comparison with circuit-switched and virtual-circuit-
switched networks. In Chapter 18 of this text, we go into greater detail. 
Figure 8.7 shows how the datagram approach is used to deliver four packets from
station A to station X. The switches in a datagram network are traditionally referred to
as routers. That is why we use a different symbol for the switches in the figure. 
In this example, all four packets (or datagrams) belong to the same message, but
may travel different paths to reach their destination. This is so because the links may be
involved in carrying packets from other sources and do not have the necessary bandwidth
available to carry all the packets from A to X. This approach can cause the datagrams of
a transmission to arrive at their destination out of order with different delays between the
packets. Packets may also be lost or dropped because of a lack of resources. In most
protocols, it is the responsibility of an upper-layer protocol to reorder the datagrams or
ask for lost datagrams before passing them on to the application.
The datagram networks are sometimes referred to as connectionless networks. The
term connectionless here means that the switch (packet switch) does not keep information
about the connection state. There are no setup or teardown phases. Each packet is treated
the same by a switch regardless of its source or destination.
In a packet-switched network, there is no resource reservation;
resources are allocated on demand. 
Figure 8.7
A datagram network with four switches (routers)
A

X
Datagram network

CHAPTER 8
SWITCHING

Routing Table
If there are no setup or teardown phases, how are the packets routed to their destinations
in a datagram network? In this type of network, each switch (or packet switch) has a rout-
ing table which is based on the destination address. The routing tables are dynamic and
are updated periodically. The destination addresses and the corresponding forwarding
output ports are recorded in the tables. This is different from the table of a circuit-
switched network (discussed later) in which each entry is created when the setup phase
is completed and deleted when the teardown phase is over. Figure 8.8 shows the routing
table for a switch. 
Destination Address
Every packet in a datagram network carries a header that contains, among other infor-
mation, the destination address of the packet. When the switch receives the packet,
this destination address is examined; the routing table is consulted to find the corre-
sponding port through which the packet should be forwarded. This address, unlike the
address in a virtual-circuit network, remains the same during the entire journey of the
packet.    
Efficiency
The efficiency of a datagram network is better than that of a circuit-switched net-
work; resources are allocated only when there are packets to be transferred. If a
source sends a packet and there is a delay of a few minutes before another packet can
be sent, the resources can be reallocated during these minutes for other packets from
other sources. 
Figure 8.8
Routing table in a datagram network
A switch in a datagram network uses a routing table that is based on the destination 
address.
The destination address in the header of a packet in a datagram network
remains the same during the entire journey of the packet. 

Output
port
Destination
address

…
…

PART II
PHYSICAL LAYER
Delay
There may be greater delay in a datagram network than in a virtual-circuit network.
Although there are no setup and teardown phases, each packet may experience a wait at a
switch before it is forwarded. In addition, since not all packets in a message necessarily
travel through the same switches, the delay is not uniform for the packets of a message.
Figure 8.9 gives an example of delay in a datagram network for one packet.  
The packet travels through two switches. There are three transmission times (3T),
three propagation delays (slopes 3τ of the lines), and two waiting times (w1 + w2). We
ignore the processing time in each switch. The total delay is
8.3.2
Virtual-Circuit Networks
A virtual-circuit network is a cross between a circuit-switched network and a datagram
network. It has some characteristics of both.
1. As in a circuit-switched network, there are setup and teardown phases in addition
to the data transfer phase. 
2. Resources can be allocated during the setup phase, as in a circuit-switched network,
or on demand, as in a datagram network.
3. As in a datagram network, data are packetized and each packet carries an address in
the header. However, the address in the header has local jurisdiction (it defines what
the next switch should be and the channel on which the packet is being carried), not
end-to-end jurisdiction. The reader may ask how the intermediate switches know
where to send the packet if there is no final destination address carried by a packet.
The answer will be clear when we discuss virtual-circuit identifiers in the next section.
4. As in a circuit-switched network, all packets follow the same path established during
the connection.
Figure 8.9
Delay in a datagram network
Total delay 5 3T 1 3τ 1 w1 1 w2
Total delay
Transmission
time
Waiting
time
Waiting
time
Time
Time
Time
Time
B
A

CHAPTER 8
SWITCHING

5. A virtual-circuit network is normally implemented in the data-link layer, while a
circuit-switched network is implemented in the physical layer and a datagram net-
work in the network layer. But this may change in the future. 
Figure 8.10 is an example of a virtual-circuit network. The network has switches that
allow traffic from sources to destinations. A source or destination can be a computer,
packet switch, bridge, or any other device that connects other networks. 
Addressing
In a virtual-circuit network, two types of addressing are involved: global and local
(virtual-circuit identifier). 
Global Addressing
A source or a destination needs to have a global address—an address that can be unique
in the scope of the network or internationally if the network is part of an international
network. However, we will see that a global address in virtual-circuit networks is used
only to create a virtual-circuit identifier, as discussed next.
Virtual-Circuit Identifier 
The identifier that is actually used for data transfer is called the virtual-circuit identifier
(VCI) or the label. A VCI, unlike a global address, is a small number that has only
switch scope; it is used by a frame between two switches. When a frame arrives at a
switch, it has a VCI; when it leaves, it has a different VCI. Figure 8.11 shows how the
VCI in a data frame changes from one switch to another. Note that a VCI does not need
to be a large number since each switch can use its own unique set of VCIs. 
Figure 8.10
Virtual-circuit network
Figure 8.11
Virtual-circuit identifier
D
B
A
C
End system
End system
End system
End system
Switches

VCI
Data

VCI
Data

PART II
PHYSICAL LAYER
Three Phases
As in a circuit-switched network, a source and destination need to go through three
phases in a virtual-circuit network: setup, data transfer, and teardown. In the setup
phase, the source and destination use their global addresses to help switches make table
entries for the connection. In the teardown phase, the source and destination inform the
switches to delete the corresponding entry. Data transfer occurs between these two
phases. We first discuss the data-transfer phase, which is more straightforward; we then
talk about the setup and teardown phases.
Data-Transfer Phase
To transfer a frame from a source to its destination, all switches need to have a table
entry for this virtual circuit. The table, in its simplest form, has four columns. This
means that the switch holds four pieces of information for each virtual circuit that is
already set up. We show later how the switches make their table entries, but for the
moment we assume that each switch has a table with entries for all active virtual cir-
cuits. Figure 8.12 shows such a switch and its corresponding table. 
Figure 8.12 shows a frame arriving at port 1 with a VCI of 14. When the frame
arrives, the switch looks in its table to find port 1 and a VCI of 14. When it is found, the
switch knows to change the VCI to 22 and send out the frame from port 3. 
Figure 8.13 shows how a frame from source A reaches destination B and how its
VCI changes during the trip. Each switch changes the VCI and routes the frame. 
The data-transfer phase is active until the source sends all its frames to the destina-
tion. The procedure at the switch is the same for each frame of a message. The process
creates a virtual circuit, not a real circuit, between the source and destination.
Setup Phase
In the setup phase, a switch creates an entry for a virtual circuit. For example, suppose
source A needs to create a virtual circuit to B. Two steps are required: the setup request
and the acknowledgment.
Figure 8.12
Switch and tables in a virtual-circuit network

Port
Port

VCI
VCI
Outgoing
Incoming

Data

Data

Data

Data

CHAPTER 8
SWITCHING

Setup Request
A setup request frame is sent from the source to the destination. Figure 8.14 shows
the process. 
a. Source A sends a setup frame to switch 1.
b. Switch 1 receives the setup request frame. It knows that a frame going from A to B
goes out through port 3. How the switch has obtained this information is a point
covered in future chapters. The switch, in the setup phase, acts as a packet switch;
it has a routing table which is different from the switching table. For the moment,
assume that it knows the output port. The switch creates an entry in its table for
this virtual circuit, but it is only able to fill three of the four columns. The switch
assigns the incoming port (1) and chooses an available incoming VCI (14) and the
Figure 8.13
Source-to-destination data transfer in a virtual-circuit network 
Figure 8.14
Setup request in a virtual-circuit network
A

Port
Port

•••

•••

•••
VCI
VCI
Outgoing
Incoming

•••
Port
Port

•••

•••

•••
VCI
VCI
Outgoing
Incoming

•••
Port
Port

•••

•••

•••
VCI
VCI
Outgoing
Incoming

•••
WAN

Data

Data

Data

Data
B
A

VCI = 77
e
d
c
b
a
Port
Port

VCI
VCI
Outgoing
Incoming
Port
Port

VCI
VCI
Outgoing
Incoming
Port
Port

VCI
VCI
Outgoing
Incoming
Switch 1
Switch 2
Switch 3
 B

PART II
PHYSICAL LAYER
outgoing port (3). It does not yet know the outgoing VCI, which will be found dur-
ing the acknowledgment step. The switch then forwards the frame through port 3
to switch 2.
c. Switch 2 receives the setup request frame. The same events happen here as at
switch 1; three columns of the table are completed: in this case, incoming port (1),
incoming VCI (66), and outgoing port (2). 
d. Switch 3 receives the setup request frame. Again, three columns are completed:
incoming port (2), incoming VCI (22), and outgoing port (3).
e. Destination B receives the setup frame, and if it is ready to receive frames from A,
it assigns a VCI to the incoming frames that come from A, in this case 77. This
VCI lets the destination know that the frames come from A, and not other sources. 
Acknowledgment 
A special frame, called the acknowledgment frame, completes the entries in the switch-
ing tables. Figure 8.15 shows the process. 
a. The destination sends an acknowledgment to switch 3. The acknowledgment carries
the global source and destination addresses so the switch knows which entry in the
table is to be completed. The frame also carries VCI 77, chosen by the destination as
the incoming VCI for frames from A. Switch 3 uses this VCI to complete the outgo-
ing VCI column for this entry. Note that 77 is the incoming VCI for destination B,
but the outgoing VCI for switch 3. 
b. Switch 3 sends an acknowledgment to switch 2 that contains its incoming VCI in the
table, chosen in the previous step. Switch 2 uses this as the outgoing VCI in the table.
c. Switch 2 sends an acknowledgment to switch 1 that contains its incoming VCI in the
table, chosen in the previous step. Switch 1 uses this as the outgoing VCI in the table.
d. Finally switch 1 sends an acknowledgment to source A that contains its incoming
VCI in the table, chosen in the previous step. 
e. The source uses this as the outgoing VCI for the data frames to be sent to destina-
tion B.
Figure 8.15
Setup acknowledgment in a virtual-circuit network
 A
VCI = 14
a
c
b

d
e

Port
Port

VCI
VCI
Outgoing
Incoming

Port
Port

VCI
VCI
Outgoing
Incoming

Port
Port

VCI
VCI
Outgoing
Incoming

VCI = 77
Switch 2
Switch 1
Switch 3
 B

CHAPTER 8
SWITCHING

Teardown Phase 
In this phase, source A, after sending all frames to B, sends a special frame called a
teardown request. Destination B responds with a teardown confirmation frame. All
switches delete the corresponding entry from their tables. 
Efficiency
As we said before, resource reservation in a virtual-circuit network can be made during
the setup or can be on demand during the data-transfer phase. In the first case, the delay
for each packet is the same; in the second case, each packet may encounter different
delays. There is one big advantage in a virtual-circuit network even if resource allocation
is on demand. The source can check the availability of the resources, without actually
reserving it. Consider a family that wants to dine at a restaurant. Although the restaurant
may not accept reservations (allocation of the tables is on demand), the family can call
and find out the waiting time. This can save the family time and effort. 
Delay in Virtual-Circuit Networks
In a virtual-circuit network, there is a one-time delay for setup and a one-time delay for
teardown. If resources are allocated during the setup phase, there is no wait time for
individual packets. Figure 8.16 shows the delay for a packet traveling through two
switches in a virtual-circuit network.  
The packet is traveling through two switches (routers). There are three transmis-
sion times (3T ), three propagation times (3τ), data transfer depicted by the sloping
lines, a setup delay (which includes transmission and propagation in two directions),
In virtual-circuit switching, all packets belonging to the same source and destination 
travel the same path, but the packets may arrive at the destination
with different delays if resource allocation is on demand.
Figure 8.16
Delay in a virtual-circuit network
Total delay
Setup
Time
Time
Time
Time
Transmission
time
Teardown
A
B

PART II
PHYSICAL LAYER
and a teardown delay (which includes transmission and propagation in one direction).
We ignore the processing time in each switch. The total delay time is
Circuit-Switched Technology in WANs
As we will see in Chapter 14, virtual-circuit networks are used in switched WANs such
as ATM networks. The data-link layer of these technologies is well suited to the virtual-
circuit technology.
8.4
STRUCTURE OF A SWITCH
We use switches in circuit-switched and packet-switched networks. In this section, we
discuss the structures of the switches used in each type of network. 
8.4.1
Structure of Circuit Switches
Circuit switching today can use either of two technologies: the space-division switch or
the time-division switch.
Space-Division Switch
In space-division switching, the paths in the circuit are separated from one another
spatially. This technology was originally designed for use in analog networks but is
used currently in both analog and digital networks. It has evolved through a long history
of many designs. 
Crossbar Switch
A crossbar switch connects n inputs to m outputs in a grid, using electronic micro-
switches (transistors) at each crosspoint (see Figure 8.17). The major limitation of this
design is the number of crosspoints required. To connect n inputs to m outputs using a
Total delay 1 3T 1 3τ 1 setup delay 1 teardown delay
Switching at the data-link layer in a switched WAN is normally
implemented by using virtual-circuit techniques. 
Figure 8.17
Crossbar switch with three inputs and four outputs

I
II
III
IV
Crosspoint
To control station

---

## Module 3 Textbook

PART IV
NETWORK LAYER
18.1
NETWORK-LAYER SERVICES
Before discussing the network layer in the Internet today, let’s briefly discuss the
network-layer services that, in general, are expected from a network-layer protocol.
Figure 18.1 shows the communication between Alice and Bob at the network layer.
This is the same scenario we used in Chapters 3 and 9 to show the communication at
the physical and the data-link layers, respectively. 
The figure shows that the Internet is made of many networks (or links) connected
through the connecting devices. In other words, the Internet is an internetwork, a
Figure 18.1
Communication at the network layer
Legend
Alice
Sky Research
Scientific Books
Alice
Point-to-point WAN
LAN switch
Router
WAN switch
R1
R2
R2
R3
R4
R4
To other
ISPs
To other
ISPs
R5
R5
R6
R7
R7
Bob
Bob
National ISP
Switched
WAN
ISP
I
II
III
Application
Transport
Network
Data-link
Physical
Application
Transport
Network
Data-link
Physical
Network
Data-link
Physical
Network
Data-link
Physical
Network
Data-link
Physical
Network
Data-link
Physical
To other
ISPs
MODULE 3

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

combination of LANs and WANs. To better understand the role of the network layer (or
the internetwork layer), we need to think about the connecting devices (routers or
switches) that connect the LANs and WANs. 
As the figure shows, the network layer is involved at the source host, destination
host, and all routers in the path (R2, R4, R5, and R7). At the source host (Alice), the
network layer accepts a packet from a transport layer, encapsulates the packet in a data-
gram, and delivers the packet to the data-link layer. At the destination host (Bob), the
datagram is decapsulated, and the packet is extracted and delivered to the correspond-
ing transport layer. Although the source and destination hosts are involved in all five
layers of the TCP/IP suite, the routers use three layers if they are routing packets only;
however, they may need the transport and application layers for control purposes. A
router in the path is normally shown with two data-link layers and two physical layers,
because it receives a packet from one network and delivers it to another network. 
18.1.1
Packetizing
The first duty of the network layer is definitely packetizing: encapsulating the payload
(data received from upper layer) in a network-layer packet at the source and decapsulat-
ing the payload from the network-layer packet at the destination. In other words, one
duty of the network layer is to carry a payload from the source to the destination with-
out changing it or using it. The network layer is doing the service of a carrier such as
the postal office, which is responsible for delivery of packages from a sender to a
receiver without changing or using the contents. 
The source host receives the payload from an upper-layer protocol, adds a header
that contains the source and destination addresses and some other information that is
required by the network-layer protocol (as discussed later) and delivers the packet to
the data-link layer. The source is not allowed to change the content of the payload
unless it is too large for delivery and needs to be fragmented. 
The destination host receives the network-layer packet from its data-link layer,
decapsulates the packet, and delivers the payload to the corresponding upper-layer pro-
tocol. If the packet is fragmented at the source or at routers along the path, the network
layer is responsible for waiting until all fragments arrive, reassembling them, and
delivering them to the upper-layer protocol.
The routers in the path are not allowed to decapsulate the packets they received
unless the packets need to be fragmented. The routers are not allowed to change source
and destination addresses either. They just inspect the addresses for the purpose of for-
warding the packet to the next network on the path. However, if a packet is fragmented,
the header needs to be copied to all fragments and some changes are needed, as we dis-
cuss in detail later.
18.1.2
Routing and Forwarding
Other duties of the network layer, which are as important as the first, are routing and
forwarding, which are directly related to each other. 
Routing
The network layer is responsible for routing the packet from its source to the destina-
tion. A physical network is a combination of networks (LANs and WANs) and routers

PART IV
NETWORK LAYER
that connect them. This means that there is more than one route from the source to the
destination. The network layer is responsible for finding the best one among these pos-
sible routes. The network layer needs to have some specific strategies for defining the
best route. In the Internet today, this is done by running some routing protocols to help
the routers coordinate their knowledge about the neighborhood and to come up with
consistent tables to be used when a packet arrives. The routing protocols, which we dis-
cuss in Chapters 20 and 21, should be run before any communication occurs. 
Forwarding
If routing is applying strategies and running some routing protocols to create the
decision-making tables for each router, forwarding can be defined as the action applied
by each router when a packet arrives at one of its interfaces. The decision-making table
a router normally uses for applying this action is sometimes called the forwarding table
and sometimes the routing table. When a router receives a packet from one of its
attached networks, it needs to forward the packet to another attached network (in
unicast routing) or to some attached networks (in multicast routing). To make this deci-
sion, the router uses a piece of information in the packet header, which can be the desti-
nation address or a label, to find the corresponding output interface number in the
forwarding table. Figure 18.2 shows the idea of the forwarding process in a router.  
18.1.3
Other Services
Let us briefly discuss other services expected from the network layer.
Error Control
In Chapter 10, we discussed error detection and correction. Although error control also
can be implemented in the network layer, the designers of the network layer in the
Internet ignored this issue for the data being carried by the network layer. One reason
for this decision is the fact that the packet in the network layer may be fragmented at
each router, which makes error checking at this layer inefficient. 
Figure 18.2
Forwarding process

Output
interface
Forwarding
value
Send the packet
out of interface 2
B and C can be the 
same or different.
Note: 
Forwarding table
Forwarding
value

B
Data
C
Data
A
B

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

The designers of the network layer, however, have added a checksum field to the
datagram to control any corruption in the header, but not in the whole datagram. This
checksum may prevent any changes or corruptions in the header of the datagram. 
 We need to mention that although the network layer in the Internet does not
directly provide error control, the Internet uses an auxiliary protocol, ICMP, that
provides some kind of error control if the datagram is discarded or has some unknown
information in the header. We discuss ICMP in Chapter 19.
Flow Control
Flow control regulates the amount of data a source can send without overwhelming the
receiver. If the upper layer at the source computer produces data faster than the upper
layer at the destination computer can consume it, the receiver will be overwhelmed
with data. To control the flow of data, the receiver needs to send some feedback to the
sender to inform the latter that it is overwhelmed with data. 
The network layer in the Internet, however, does not directly provide any flow con-
trol. The datagrams are sent by the sender when they are ready, without any attention to
the readiness of the receiver. 
A few reasons for the lack of flow control in the design of the network layer can be
mentioned. First, since there is no error control in this layer, the job of the network
layer at the receiver is so simple that it may rarely be overwhelmed. Second, the upper
layers that use the service of the network layer can implement buffers to receive data
from the network layer as they are ready and do not have to consume the data as fast as
it is received. Third, flow control is provided for most of the upper-layer protocols that
use the services of the network layer, so another level of flow control makes the net-
work layer more complicated and the whole system less efficient. 
Congestion Control
Another issue in a network-layer protocol is congestion control. Congestion in the net-
work layer is a situation in which too many datagrams are present in an area of the
Internet. Congestion may occur if the number of datagrams sent by source computers is
beyond the capacity of the network or routers. In this situation, some routers may drop
some of the datagrams. However, as more datagrams are dropped, the situation may
become worse because, due to the error control mechanism at the upper layers, the
sender may send duplicates of the lost packets. If the congestion continues, sometimes
a situation may reach a point where the system collapses and no datagrams are deliv-
ered. We discuss congestion control at the network layer later in the chapter although it
is not implemented in the Internet.
Quality of Service
As the Internet has allowed new applications such as multimedia communication (in
particular real-time communication of audio and video), the quality of service (QoS) of
the communication has become more and more important. The Internet has thrived by
providing better quality of service to support these applications. However, to keep the
network layer untouched, these provisions are mostly implemented in the upper layer.
We discuss this issue in Chapter 30 after we have discussed multimedia. 

PART IV
NETWORK LAYER
Security
Another issue related to communication at the network layer is security. Security was
not a concern when the Internet was originally designed because it was used by a
small number of users at universities for research activities; other people had no
access to the Internet. The network layer was designed with no security provision.
Today, however, security is a big concern. To provide security for a connectionless
network layer, we need to have another virtual level that changes the connectionless
service to a connection-oriented service. This virtual layer, called IPSec, is discussed
in Chapter 32.
18.2
PACKET SWITCHING
From the discussion of routing and forwarding in the previous section, we infer that a
kind of switching occurs at the network layer. A router, in fact, is a switch that creates a
connection between an input port and an output port (or a set of output ports), just as
an electrical switch connects the input to the output to let electricity flow. 
Although in data communication switching techniques are divided into two broad
categories, circuit switching and packet switching, only packet switching is used at the
network layer because the unit of data at this layer is a packet. Circuit switching is
mostly used at the physical layer; the electrical switch mentioned earlier is a kind of
circuit switch. We discussed circuit switching in Chapter 8; we discuss packet switch-
ing in this chapter.
 At the network layer, a message from the upper layer is divided into manageable
packets and each packet is sent through the network. The source of the message sends
the packets one by one; the destination of the message receives the packets one by one.
The destination waits for all packets belonging to the same message to arrive before
delivering the message to the upper layer. The connecting devices in a packet-switched
network still need to decide how to route the packets to the final destination. Today, a
packet-switched network can use two different approaches to route the packets: the
datagram approach and the virtual circuit approach. We discuss both approaches in the
next section. 
18.2.1
Datagram Approach: Connectionless Service 
When the Internet started, to make it simple, the network layer was designed to provide
a connectionless service in which the network-layer protocol treats each packet inde-
pendently, with each packet having no relationship to any other packet. The idea was
that the network layer is only responsible for delivery of packets from the source to the
destination. In this approach, the packets in a message may or may not travel the same
path to their destination. Figure 18.3 shows the idea. 
When the network layer provides a connectionless service, each packet traveling in
the Internet is an independent entity; there is no relationship between packets belonging
to the same message. The switches in this type of network are called routers. A packet
belonging to a message may be followed by a packet belonging to the same message or
to a different message. A packet may be followed by a packet coming from the same or
from a different source. 

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

 Each packet is routed based on the information contained in its header: source and
destination addresses. The destination address defines where it should go; the source
address defines where it comes from. The router in this case routes the packet based
only on the destination address. The source address may be used to send an error mes-
sage to the source if the packet is discarded. Figure 18.4 shows the forwarding process
in a router in this case. We have used symbolic addresses such as A and B.  
18.2.2
Virtual-Circuit Approach: Connection-Oriented Service
In a connection-oriented service (also called virtual-circuit approach), there is a relation-
ship between all packets belonging to a message. Before all datagrams in a message can
be sent, a virtual connection should be set up to define the path for the datagrams. After
connection setup, the datagrams can all follow the same path. In this type of service, not
Figure 18.3
A connectionless packet-switched network
Figure 18.4
Forwarding process in a router when used in a connectionless network
In the datagram approach, the forwarding decision 
is based on the destination address of the packet.

Sender
Receiver
Out of order
R3
R4
R5
R1
R2
A connectionless (datagram) 
packet-switched network

Network
Network
Legend
Packets

Output
interface
Destination
address
Send the packet
out of interface 2
Forwarding table
Destination
address B
Legend

SA DA
Data
SA DA
Data
A
B
H
SA: Source address
DA: Destination address

PART IV
NETWORK LAYER
only must the packet contain the source and destination addresses, it must also contain a
flow label, a virtual circuit identifier that defines the virtual path the packet should follow.
Shortly, we will show how this flow label is determined, but for the moment, we assume
that the packet carries this label. Although it looks as though the use of the label may
make the source and destination addresses unnecessary during the data transfer phase,
parts of the Internet at the network layer still keep these addresses. One reason is that part
of the packet path may still be using the connectionless service. Another reason is that the
protocol at the network layer is designed with these addresses, and it may take a while
before they can be changed. Figure 18.5 shows the concept of connection-oriented
service.
Each packet is forwarded based on the label in the packet. To follow the idea of
connection-oriented design to be used in the Internet, we assume that the packet has a label
when it reaches the router. Figure 18.6 shows the idea. In this case, the forwarding deci-
sion is based on the value of the label, or virtual circuit identifier, as it is sometimes called.
To create a connection-oriented service, a three-phase process is used: setup, data
transfer, and teardown. In the setup phase, the source and destination addresses of the
sender and receiver are used to make table entries for the connection-oriented service.
In the teardown phase, the source and destination inform the router to delete the corre-
sponding entries. Data transfer occurs between these two phases.      
Setup Phase
In the setup phase, a router creates an entry for a virtual circuit. For example, suppose
source A needs to create a virtual circuit to destination B. Two auxiliary packets need to
be exchanged between the sender and the receiver: the request packet and the acknowl-
edgment packet.
Figure 18.5
A virtual-circuit packet-switched network
Sender
Receiver
R4
R5
R1
R2
R3
A connection-oriented 
packet-switched network

Legend
Packets
Virtual circuit

Network
Network

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

Request packet
A request packet is sent from the source to the destination. This auxiliary packet carries
the source and destination addresses. Figure 18.7 shows the process. 
Figure 18.6
Forwarding process in a router when used in a virtual-circuit network 
In the virtual-circuit approach, the forwarding decision 
is based on the label of the packet. 
Figure 18.7
Sending request packet in a virtual-circuit network

Forwarding table
Incoming
label
Outgoing
label
SA DA
Data
SA DA
Data
Port
Port

L1
L1
L2
L2

Label
Label
Outgoing
Incoming
Legend
SA:  Source address
DA: Destination address
L1, L2: Labels

Label
Port
Port

Label
Label
Label
Outgoing
Incoming
A
B
Port
Port

Label
Outgoing
Incoming
A to B
A to B
A to B
R3
R5
Port
Port

Label
Outgoing
Incoming
R4
R1
R2
A to B
A to B
A to B
A to B
Request packet
Virtual circuit
Legend
A to B

Network
Network

PART IV
NETWORK LAYER
1. Source A sends a request packet to router R1.
2. Router R1 receives the request packet. It knows that a packet going from A to B
goes out through port 3. How the router has obtained this information is a point
covered later. For the moment, assume that it knows the output port. The router
creates an entry in its table for this virtual circuit, but it is only able to fill three of
the four columns. The router assigns the incoming port (1) and chooses an avail-
able incoming label (14) and the outgoing port (3). It does not yet know the outgo-
ing label, which will be found during the acknowledgment step. The router then
forwards the packet through port 3 to router R3.
3. Router R3 receives the setup request packet. The same events happen here as at
router R1; three columns of the table are completed: in this case, incoming port (1),
incoming label (66), and outgoing port (3). 
4. Router R4 receives the setup request packet. Again, three columns are completed:
incoming port (1), incoming label (22), and outgoing port (4).
5. Destination B receives the setup packet, and if it is ready to receive packets from
A, it assigns a label to the incoming packets that come from A, in this case 77, as
shown in Figure 18.8. This label lets the destination know that the packets come
from A, and not from other sources. 
Acknowledgment Packet
A special packet, called the acknowledgment packet, completes the entries in the
switching tables. Figure 18.8 shows the process. 
Figure 18.8
Sending acknowledgments in a virtual-circuit network

Port
Port

Label
Label
Label
Label
Outgoing
Incoming
Port
Port

Label
Outgoing
Incoming
A
B
A to B
A to B
A to B
R3
R5
Port
Port

Label
Outgoing
Incoming
R4
R1
R2

Acknowledgment packet
Virtual circuit
Legend

Network
Network

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

1. The destination sends an acknowledgment to router R4. The acknowledgment car-
ries the global source and destination addresses so the router knows which entry in
the table is to be completed. The packet also carries label 77, chosen by the desti-
nation as the incoming label for packets from A. Router R4 uses this label to com-
plete the outgoing label column for this entry. Note that 77 is the incoming label
for destination B, but the outgoing label for router R4. 
2. Router R4 sends an acknowledgment to router R3 that contains its incoming label
in the table, chosen in the setup phase. Router R3 uses this as the outgoing label in
the table.
3. Router R3 sends an acknowledgment to router R1 that contains its incoming label
in the table, chosen in the setup phase. Router R1 uses this as the outgoing label in
the table.
4. Finally router R1 sends an acknowledgment to source A that contains its incoming
label in the table, chosen in the setup phase. 
5. The source uses this as the outgoing label for the data packets to be sent to
destination B.
Data-Transfer Phase
The second phase is called the data-transfer phase. After all routers have created
their forwarding table for a specific virtual circuit, then the network-layer packets
belonging to one message can be sent one after another. In Figure 18.9, we show the
flow of a single packet, but the process is the same for 1, 2, or 100 packets. The
source computer uses the label 14, which it has received from router R1 in the  setup
Figure 18.9
Flow of one packet in an established virtual circuit

R3
R5
R4
R1
R2
Port
Port

Label
Label
Outgoing
Incoming

Label
Port
Port

Label
Outgoing
Incoming
A to B
A to B
A to B
Label
Port
Port

Label
Outgoing
Incoming

Data
B
A

Data
B
A
Data
B
A

Data
B
A

Data
B
A

 Datagram
Virtual circuit
Legend
Network
Network
A
B

PART IV
NETWORK LAYER
phase. Router R1 forwards the packet to router R3, but changes the label to 66.
Router R3 forwards the packet to router R4, but changes the label to 22. Finally,
router R4 delivers the packet to its final destination with the label 77. All the packets
in the message follow the same sequence of labels, and the packets arrive in order at
the destination.
Teardown Phase 
In the teardown phase, source A, after sending all packets to B, sends a special packet
called a teardown packet. Destination B responds with a confirmation packet. All rout-
ers delete the corresponding entries from their tables. 
18.3
NETWORK-LAYER PERFORMANCE
The upper-layer protocols that use the service of the network layer expect to receive
an ideal service, but the network layer is not perfect. The performance of a network
can be measured in terms of delay, throughput, and packet loss. Congestion control is
an issue that can improve the performance. 
18.3.1
Delay
All of us expect instantaneous response from a network, but a packet, from its source to
its destination, encounters delays. The delays in a network can be divided into four
types: transmission delay, propagation delay, processing delay, and queuing delay. Let
us first discuss each of these delay types and then show how to calculate a packet delay
from the source to the destination.
Transmission Delay
A source host or a router cannot send a packet instantaneously. A sender needs to put
the bits in a packet on the line one by one. If the first bit of the packet is put on the line
at time t1 and the last bit is put on the line at time t2, transmission delay of the packet is
(t2 −  t1). Definitely, the transmission delay is longer for a longer packet and shorter if
the sender can transmit faster. In other words, the transmission delay is  
For example, in a Fast Ethernet LAN (see Chapter 13) with the transmission rate of
100 million bits per second and a packet of 10,000 bits, it takes (10,000)/(100,000,000)
or 100 microseconds for all bits of the packet to be put on the line. 
Propagation Delay
Propagation delay is the time it takes for a bit to travel from point A to point B in the trans-
mission media. The propagation delay for a packet-switched network depends on the
propagation delay of each network (LAN or WAN). The propagation delay depends on
the propagation speed of the media, which is 3 × 108 meters/second in a vacuum and
normally much less in a wired medium; it also depends on the distance of the link. In
other words, propagation delay is  
Delaytr = (Packet length) / (Transmission rate). 
Delaypg = (Distance) / (Propagation speed). 

PART IV
NETWORK LAYER
Choke Packet
A choke packet is a packet sent by a node to the source to inform it of
congestion. Note the difference between the backpressure and choke-packet methods.
In backpressure, the warning is from one node to its upstream node, although the warn-
ing may eventually reach the source station. In the choke-packet method, the warning is
from the router, which has encountered congestion, directly to the source station. The
intermediate nodes through which the packet has traveled are not warned. We will see
an example of this type of control in ICMP (discussed in Chapter 19). When a router in
the Internet is overwhelmed with IP datagrams, it may discard some of them, but it
informs the source host, using a source quench ICMP message. The warning message
goes directly to the source station; the intermediate routers do not take any action. Fig-
ure 18.15 shows the idea of a choke packet. 
Implicit Signaling
In implicit signaling, there is no communication between the
congested node or nodes and the source. The source guesses that there is congestion
somewhere in the network from other symptoms. For example, when a source sends
several packets and there is no acknowledgment for a while, one assumption is that the
network is congested. The delay in receiving an acknowledgment is interpreted as con-
gestion in the network; the source should slow down. We saw this type of signaling
when we discuss TCP congestion control in Chapter 24. 
Explicit Signaling
The node that experiences congestion can explicitly send a signal
to the source or destination. The explicit-signaling method, however, is different from
the choke-packet method. In the choke-packet method, a separate packet is used for this
purpose; in the explicit-signaling method, the signal is included in the packets that carry
data. Explicit signaling can occur in either the forward or the backward direction. This
type of congestion control can be seen in an ATM network, discussed in Chapter 14.
18.4
IPV4 ADDRESSES
The identifier used in the IP layer of the TCP/IP protocol suite to identify the connec-
tion of each device to the Internet is called the Internet address or IP address. An IPv4
address is a 32-bit address that uniquely and universally defines the connection of a
host or a router to the Internet. The IP address is the address of the connection, not the
Figure 18.15
Choke packet
-
Source
Congestion
Data flow
Destination
I
II
IV
III
Choke
packet

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

host or the router, because if the device is moved to another network, the IP address
may be changed. 
IPv4 addresses are unique in the sense that each address defines one, and only one,
connection to the Internet. If a device has two connections to the Internet, via two
networks, it has two IPv4 addresses. IPv4 addresses are universal in the sense that the
addressing system must be accepted by any host that wants to be connected to the
Internet.
18.4.1
Address Space
A protocol like IPv4 that defines addresses has an address space. An address space is
the total number of addresses used by the protocol. If a protocol uses b bits to define an
address, the address space is 2b because each bit can have two different values (0 or 1).
IPv4 uses 32-bit addresses, which means that the address space is 232 or 4,294,967,296
(more than four billion). If there were no restrictions, more than 4 billion devices could
be connected to the Internet. 
Notation
There are three common notations to show an IPv4 address: binary notation (base 2),
dotted-decimal notation (base 256), and hexadecimal notation (base 16). In binary
notation, an IPv4 address is displayed as 32 bits. To make the address more readable, one
or more spaces are usually inserted between each octet (8 bits). Each octet is often
referred to as a byte. To make the IPv4 address more compact and easier to read, it is usu-
ally written in decimal form with a decimal point (dot) separating the bytes. This format is
referred to as dotted-decimal notation. Note that because each byte (octet) is only 8 bits,
each number in the dotted-decimal notation is between 0 and 255. We sometimes see an
IPv4 address in hexadecimal notation. Each hexadecimal digit is equivalent to four bits.
This means that a 32-bit address has 8 hexadecimal digits. This notation is often used in
network programming. Figure 18.16 shows an IP address in the three discussed notations.  
Hierarchy in Addressing
In any communication network that involves delivery, such as a telephone network or a
postal network, the addressing system is hierarchical. In a postal network, the postal
address (mailing address) includes the country, state, city, street, house number, and the
Figure 18.16
Three different notations in IPv4 addressing

Binary
Dotted decimal
Hexadecimal

.
.
. 31
80 0B 03 1F

PART IV
NETWORK LAYER
name of the mail recipient. Similarly, a telephone number is divided into the country
code, area code, local exchange, and the connection. 
A 32-bit IPv4 address is also hierarchical, but divided only into two parts. The first
part of the address, called the prefix, defines the network; the second part of the
address, called the suffix, defines the node (connection of a device to the Internet). Fig-
ure 18.17 shows the prefix and suffix of a 32-bit IPv4 address. The prefix length is
n bits and the suffix length is (32 − n) bits. 
A prefix can be fixed length or variable length. The network identifier in the IPv4
was first designed as a fixed-length prefix. This scheme, which is now obsolete, is
referred to as classful addressing. The new scheme, which is referred to as classless
addressing, uses a variable-length network prefix. First, we briefly discuss classful
addressing; then we concentrate on classless addressing. 
18.4.2
Classful Addressing
When the Internet started, an IPv4 address was designed with a fixed-length prefix, but
to accommodate both small and large networks, three fixed-length prefixes were
designed instead of one (n = 8, n = 16, and n = 24). The whole address space was
divided into five classes (class A, B, C, D, and E), as shown in Figure 18.18. This
scheme is referred to as classful addressing.  Although classful addressing belongs to
the past, it helps us to understand classless addressing, discussed later. 
In class A, the network length is 8 bits, but since the first bit, which is 0, defines
the class, we can have only seven bits as the network identifier. This means there are
only 27 = 128 networks in the world that can have a class A address. 
In class B, the network length is 16 bits, but since the first two bits, which are
(10)2, define the class, we can have only 14 bits as the network identifier. This means
there are only 214 = 16,384 networks in the world that can have a class B address.
All addresses that start with (110)2 belong to class C. In class C, the network
length is 24 bits, but since three bits define the class, we can have only 21 bits as the
network identifier. This means there are 221 = 2,097,152 networks in the world that can
have a class C address. 
Figure 18.17
Hierarchy in addressing
n bits
Prefix
Suffix
(32 – n) bits
32 bits
Defines network
Defines connection
to the node
Network

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

Class D is not divided into prefix and suffix. It is used for multicast addresses. All
addresses that start with 1111 in binary belong to class E. As in Class D, Class E is not
divided into prefix and suffix and is used as reserve. 
Address Depletion
The reason that classful addressing has become obsolete is address depletion. Since the
addresses were not distributed properly, the Internet was faced with the problem of the
addresses being rapidly used up, resulting in no more addresses available for organiza-
tions and individuals that needed to be connected to the Internet. To understand the prob-
lem, let us think about class A. This class can be assigned to only 128 organizations in
the world, but each organization needs to have a single network (seen by the rest of the
world) with 16,777,216 nodes (computers in this single network). Since there may be
only a few organizations that are this large, most of the addresses in this class were
wasted (unused). Class B addresses were designed for midsize organizations, but many
of the addresses in this class also remained unused. Class C addresses have a completely
different flaw in design. The number of addresses that can be used in each network (256)
was so small that most companies were not comfortable using a block in this address
class. Class E addresses were almost never used, wasting the whole class. 
Subnetting and Supernetting
To alleviate address depletion, two strategies were proposed and, to some extent,
implemented: subnetting and supernetting. In subnetting, a class A or class B block is
divided into several subnets. Each subnet has a larger prefix length than the original
network. For example, if a network in class A is divided into four subnets, each subnet
has a prefix of nsub = 10. At the same time, if all of the addresses in a network are not
used, subnetting allows the addresses to be divided among several organizations. This
idea did not work because most large organizations were not happy about dividing the
block and giving some of the unused addresses to smaller organizations. 
While subnetting was devised to divide a large block into smaller ones, supernet-
ting was devised to combine several class C blocks into a larger block to be attractive to
Figure 18.18 
Occupation of the address space in classful addressing
Address space: 4,294,967,296 addresses 
A
B
C
D
E
50%
25%
12.5%
6.25%6.25%
8 bits
8 bits
8 bits
8 bits

Class A
Class B
Class C
Class D
Class E
Suffix
Suffix
Suffix
Prefix
Prefix
Prefix
Reserved for future use
Multicast addresses
Prefixes
Class
First byte
A
n = 8 bits
n = 16 bits
n = 24 bits
0 to 127
B
128 to 191
C
192 to 223
D
Not applicable
224 to 239
E
Not applicable
240 to 255

PART IV
NETWORK LAYER
organizations that need more than the 256 addresses available in a class C block. This
idea did not work either because it makes the routing of packets more difficult. 
Advantage of Classful Addressing
Although classful addressing had several problems and became obsolete, it had one
advantage: Given an address, we can easily find the class of the address and, since the
prefix length for each class is fixed, we can find the prefix length immediately. In other
words, the prefix length in classful addressing is inherent in the address; no extra infor-
mation is needed to extract the prefix and the suffix. 
18.4.3
Classless Addressing
Subnetting and supernetting in classful addressing did not really solve the address
depletion problem. With the growth of the Internet, it was clear that a larger address
space was needed as a long-term solution. The larger address space, however, requires
that the length of IP addresses also be increased, which means the format of the IP
packets needs to be changed. Although the long-range solution has already been
devised and is called IPv6 (discussed later), a short-term solution was also devised to
use the same address space but to change the distribution of addresses to provide a fair
share to each organization. The short-term solution still uses IPv4 addresses, but it is
called classless addressing. In other words, the class privilege was removed from the
distribution to compensate for the address depletion. 
There was another motivation for classless addressing. During the 1990s, Internet
Service Providers (ISPs) came into prominence. An ISP is an organization that pro-
vides Internet access for individuals, small businesses, and midsize organizations that
do not want to create an Internet site and become involved in providing Internet ser-
vices (such as electronic mail) for their employees. An ISP can provide these services.
An ISP is granted a large range of addresses and then subdivides the addresses (in
groups of 1, 2, 4, 8, 16, and so on), giving a range of addresses to a household or a
small business. The customers are connected via a dial-up modem, DSL, or cable
modem to the ISP. However, each customer needs some IPv4 addresses.
In 1996, the Internet authorities announced a new architecture called classless
addressing. In classless addressing, variable-length blocks are used that belong to no
classes. We can have a block of 1 address, 2 addresses, 4 addresses, 128 addresses, and so on. 
In classless addressing, the whole address space is divided into variable length
blocks. The prefix in an address defines the block (network); the suffix defines the node
(device). Theoretically, we can have a block of 20, 21, 22, . . . , 232 addresses. One of the
restrictions, as we discuss later, is that the number of addresses in a block needs to be a
power of 2. An organization can be granted one block of addresses. Figure 18.19 shows
the division of the whole address space into nonoverlapping blocks.
Figure 18.19
Variable-length blocks in classless addressing
Address space
Block 1
Block 2
Block i
Block (m – 1)
Block m

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

Unlike classful addressing, the prefix length in classless addressing is variable. We
can have a prefix length that ranges from 0 to 32. The size of the network is inversely
proportional to the length of the prefix. A small prefix means a larger network; a large
prefix means a smaller network. 
We need to emphasize that the idea of classless addressing can be easily applied to
classful addressing. An address in class A can be thought of as a classless address in
which the prefix length is 8. An address in class B can be thought of as a classless
address in which the prefix is 16, and so on. In other words, classful addressing is a spe-
cial case of classless addressing. 
Prefix Length: Slash Notation
The first question that we need to answer in classless addressing is how to find the pre-
fix length if an address is given. Since the prefix length is not inherent in the address,
we need to separately give the length of the prefix. In this case, the prefix length, n, is
added to the address, separated by a slash. The notation is informally referred to as
slash notation and formally as classless interdomain routing or CIDR (pronounced
cider) strategy. An address in classless addressing can then be represented as shown in
Figure 18.20. 
In other words, an address in classless addressing does not, per se, define the block
or network to which the address belongs; we need to give the prefix length also. 
Extracting Information from an Address
Given any address in the block, we normally like to know three pieces of information
about the block to which the address belongs: the number of addresses, the first address
in the block, and the last address. Since the value of prefix length, n, is given, we can
easily find these three pieces of information, as shown in Figure 18.21. 
1. The number of addresses in the block is found as N = 232−n. 
2. To find the first address, we keep the n leftmost bits and set the (32 − n) rightmost
bits all to 0s. 
3. To find the last address, we keep the n leftmost bits and set the (32 − n) rightmost
bits all to 1s. 
Example 18.1
A classless address is given as 167.199.170.82/27. We can find the above three pieces of infor-
mation as follows. The number of addresses in the network is 232 − n  = 25 = 32 addresses. 
Figure 18.20
Slash notation (CIDR)
n
byte
byte
byte
byte
/
Prefix
length
Examples:
12.24.76.8/8
23.14.67.92/12
220.8.24.255/25

PART IV
NETWORK LAYER
The first address can be found by keeping the first 27 bits and changing the rest of the bits to 0s. 
The last address can be found by keeping the first 27 bits and changing the rest of the bits
to 1s.  
Address Mask
Another way to find the first and last addresses in the block is to use the address mask.
The address mask is a 32-bit number in which the n leftmost bits are set to 1s and the
rest of the bits (32 − n) are set to 0s. A computer can easily find the address mask
because it is the complement of (232 −  n − 1). The reason for defining a mask in this way
is that it can be used by a computer program to extract the information in a block, using
the three bit-wise operations NOT, AND, and OR. 
1. The number of addresses in the block N = NOT (mask) + 1. 
2. The first address in the block = (Any address in the block) AND (mask). 
3. The last address in the block = (Any address in the block) OR [(NOT (mask)].
Example 18.2
We repeat Example 18.1 using the mask. The mask in dotted-decimal notation is
256.256.256.224. The AND, OR, and NOT operations can be applied to individual bytes using
calculators and applets at the book website.  
Figure 18.21
Information extraction in classless addressing
Address: 167.199.170.82/27

First address: 167.199.170.64/27

Address: 167.199.170.82/27 

Last address: 167.199.170.95/27

Number of addresses in the block:
N = NOT (mask) + 1= 0.0.0.31 + 1 = 32 addresses   
First address:
First = (address) AND (mask) = 167.199.170.82   
Last address:
Last = (address) OR (NOT mask) = 167.199.170.255   
n bits
Prefix
Suffix
Prefix
Prefix
(32 – n) bits
First address
Any address
Number of addresses: N = 232 – n
Last address
000 ... 0 
111 ... 1 

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

Example 18.3
In classless addressing, an address cannot per se define the block the address belongs to. For
example, the address 230.8.24.56 can belong to many blocks. Some of them are shown below
with the value of the prefix associated with that block.
Network Address
The above examples show that, given any address, we can find all information about
the block. The first address, the network address, is particularly important because it
is used in routing a packet to its destination network. For the moment, let us assume
that an internet is made of m networks and a router with m interfaces. When a packet
arrives at the router from any source host, the router needs to know to which network
the packet should be sent: from which interface the packet should be sent out. When the
packet arrives at the network, it reaches its destination host using another strategy that
we discuss later. Figure 18.22 shows the idea. After the network address has been
found, the router consults its forwarding table to find the corresponding interface from
which the packet should be sent out. The network address is actually the identifier of
the network; each network is identified by its network address.
Prefix length:16
→ 
Block:
230.8.0.0   
to
 230.8.255.255 
Prefix length:20
→ 
Block:
230.8.16.0   
to
 230.8.31.255 
Prefix length:26
→ 
Block:
230.8.24.0   
to
 230.8.24.63 
Prefix length:27
→ 
Block:
230.8.24.32   
to
 230.8.24.63 
Prefix length:29
→ 
Block:
230.8.24.56   
to
 230.8.24.63 
Prefix length:31
→ 
Block:
230.8.24.56   
to
 230.8.24.57 
Figure 18.22
Network address

m
Network 1
Network 2
Network m

m
Network address Interface
b1 c1 d1 e1 
b2 c2 d2 e2 
bm cm dm em 
Find
network address
Destination
address
Interface
number
Router
Forwarding table
Routing Process

PART IV
NETWORK LAYER
Block Allocation
The next issue in classless addressing is block allocation. How are the blocks allocated?
The ultimate responsibility of block allocation is given to a global authority called the
Internet Corporation for Assigned Names and Numbers (ICANN). However, ICANN
does not normally allocate addresses to individual Internet users. It assigns a large
block of addresses to an ISP (or a larger organization that is considered an ISP in this
case). For the proper operation of the CIDR, two restrictions need to be applied to the
allocated block. 
1. The number of requested addresses, N, needs to be a power of 2. The reason is that
N = 232 − n or n = 32 − log2N. If N is not a power of 2, we cannot have an integer
value for n.
2. The requested block needs to be allocated where there is an adequate number of
contiguous addresses available in the address space. However, there is a restric-
tion on choosing the first address in the block. The first address needs to be
divisible by the number of addresses in the block. The reason is that the first
address needs to be the prefix followed by (32 − n) number of 0s. The decimal
value of the first address is then  
Example 18.4
An ISP has requested a block of 1000 addresses. Since 1000 is not a power of 2, 1024 addresses
are granted. The prefix length is calculated as n = 32 − log21024 = 22. An available block,
18.14.12.0/22, is granted to the ISP. It can be seen that the first address in decimal is
302,910,464, which is divisible by 1024. 
Subnetting
More levels of hierarchy can be created using subnetting. An organization (or an ISP)
that is granted a range of addresses may divide the range into several subranges and
assign each subrange to a subnetwork (or subnet). Note that nothing stops the organization
from creating more levels. A subnetwork can be divided into several sub-subnetworks.
A sub-subnetwork can be divided into several sub-sub-subnetworks, and so on. 
Designing Subnets
The subnetworks in a network should be carefully designed to enable the routing of pack-
ets. We assume the total number of addresses granted to the organization is N, the prefix
length is n, the assigned number of addresses to each subnetwork is Nsub, and the prefix
length for each subnetwork is nsub. Then the following steps need to be carefully followed
to guarantee the proper operation of the subnetworks. 
❑
The number of addresses in each subnetwork should be a power of 2. 
❑
The prefix length for each subnetwork should be found using the following formula: 
first address = (prefix in decimal) × 232 − n = (prefix in decimal) × N.
nsub = 32 −  log2Nsub

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

❑
The starting address in each subnetwork should be divisible by the number of
addresses in that subnetwork. This can be achieved if we first assign addresses to
larger subnetworks. 
Finding Information about Each Subnetwork
After designing the subnetworks, the information about each subnetwork, such as first
and last address, can be found using the process we described to find the information
about each network in the Internet. 
Example 18.5
An organization is granted a block of addresses with the beginning address 14.24.74.0/24. The
organization needs to have 3 subblocks of addresses to use in its three subnets: one subblock of 10
addresses, one subblock of 60 addresses, and one subblock of 120 addresses. Design the subblocks.
Solution
There are 232 – 24 = 256 addresses in this block. The first address is 14.24.74.0/24; the last address
is 14.24.74.255/24. To satisfy the third requirement, we assign addresses to subblocks, starting
with the largest and ending with the smallest one.   
a. The number of addresses in the largest subblock, which requires 120 addresses, is not a
power of 2. We allocate 128 addresses. The subnet mask for this subnet can be found as
n1 = 32 −log2128 = 25. The first address in this block is 14.24.74.0/25; the last address is
14.24.74.127/25.
b. The number of addresses in the second largest subblock, which requires 60 addresses, is not
a power of 2 either. We allocate 64 addresses. The subnet mask for this subnet can be found
as n2 = 32 − log264 = 26. The first address in this block is 14.24.74.128/26; the last address
is 14.24.74.191/26.
c. The number of addresses in the smallest subblock, which requires 10 addresses, is not a
power of 2 either. We allocate 16 addresses. The subnet mask for this subnet can be found as
n3 = 32 − log216 = 28. The first address in this block is 14.24.74.192/28; the last address is
14.24.74.207/28.
If we add all addresses in the previous subblocks, the result is 208 addresses, which
means 48 addresses are left in reserve. The first address in this range is 14.24.74.208. The
last address is 14.24.74.255. We don’t know about the prefix length yet. Figure 18.23
shows the configuration of blocks. We have shown the first address in each block.
Address Aggregation
One of the advantages of the CIDR strategy is address aggregation (sometimes called
address summarization or route summarization). When blocks of addresses are com-
bined to create a larger block, routing can be done based on the prefix of the larger
block. ICANN assigns a large block of addresses to an ISP. Each ISP in turn divides its
assigned block into smaller subblocks and grants the subblocks to its customers.
Example 18.6
Figure 18.24 shows how four small blocks of addresses are assigned to four organizations by an
ISP. The ISP combines these four blocks into one single block and advertises the larger block to
the rest of the world. Any packet destined for this larger block should be sent to this ISP. It is the
responsibility of the ISP to forward the packet to the appropriate organization. This is similar to

PART IV
NETWORK LAYER
routing we can find in a postal network. All packages coming from outside a country are sent first
to the capital and then distributed to the corresponding destination. 
Special Addresses
Before finishing the topic of addresses in IPv4, we need to mention five special
addresses that are used for special purposes: this-host address, limited-broadcast
address, loopback address, private addresses, and multicast addresses. 
This-host Address
The only address in the block 0.0.0.0/32 is called the this-host address. It is used when-
ever a host needs to send an IP datagram but it does not know its own address to use as
the source address. We will see an example of this case in the next section. 
Figure 18.23
Solution to Example 18.5
Figure 18.24
Example of address aggregation
n = 24
n = 26
n = 25
14.24.74.0/24
First address
14.24.74.0/25
14.24.74.128/26
14.24.192.0/28
14.24.74.255/24
Last address
N = 128
N = 256 addresses
a. Original block
b. Subblocks

Unused
160.70.14.0/26
to
160.70.14.63/26
160.70.14.64/26
to
160.70.14.127/26
160.70.14.128/26
to
160.70.14.191/26
160.70.14.192/26
to
160.70.14.255/26
Internet
All packets with 
destination addresses
160.70.14.0/24
to
160.70.14.255/24
are sent to ISP.
Block 1
Block 2
Block 3
Block 4
Larger
block
ISP

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

Limited-broadcast Address
The only address in the block 255.255.255.255/32 is called the limited-broadcast address.
It is used whenever a router or a host needs to send a datagram to all devices in a network.
The routers in the network, however, block the packet having this address as the destina-
tion; the packet cannot travel outside the network. 
Loopback Address
The block 127.0.0.0/8 is called the loopback address. A packet with one of the
addresses in this block as the destination address never leaves the host; it will remain in
the host. Any address in the block is used to test a piece of software in the machine. For
example, we can write a client and a server program in which one of the addresses in the
block is used as the server address. We can test the programs using the same host to see
if they work before running them on different computers.  
Private Addresses
Four blocks are assigned as private addresses: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16,
and 169.254.0.0/16. We will see the applications of these addresses when we discuss
NAT later in the chapter. 
Multicast Addresses
The block 224.0.0.0/4 is reserved for multicast addresses. We discuss these addresses
later in the chapter. 
18.4.4
Dynamic Host Configuration Protocol (DHCP)
We have seen that a large organization or an ISP can receive a block of addresses
directly from ICANN and a small organization can receive a block of addresses from an
ISP. After a block of addresses are assigned to an organization, the network administra-
tion can manually assign addresses to the individual hosts or routers. However, address
assignment in an organization can be done automatically using the Dynamic Host
Configuration Protocol (DHCP). DHCP is an application-layer program, using the
client-server paradigm, that actually helps TCP/IP at the network layer. 
DHCP has found such widespread use in the Internet that it is often called a plug-
and-play protocol. In can be used in many situations. A network manager can configure
DHCP to assign permanent IP addresses to the host and routers. DHCP can also be con-
figured to provide temporary, on demand, IP addresses to hosts. The second capability
can provide a temporary IP address to a traveller to connect her laptop to the Internet
while she is staying in the hotel. It also allows an ISP with 1000 granted addresses to
provide services to 4000 households, assuming not more than one-forth of customers
use the Internet at the same time. 
In addition to its IP address, a computer also needs to know the network prefix (or
address mask). Most computers also need two other pieces of information, such as the
address of a default router to be able to communicate with other networks and the address
of a name server to be able to use names instead of addresses, as we will see in Chapter 26.
In other words, four pieces of information are normally needed: the computer address, the
prefix, the address of a router, and the IP address of a name server. DHCP can be used to
provide these pieces of information to the host. 

PART IV
NETWORK LAYER
DHCP Message Format
DHCP is a client-server protocol in which the client sends a request message and the
server returns a response message. Before we discuss the operation of DHCP, let us
show the general format of the DHCP message in Figure 18.25. Most of the fields are
explained in the figure, but we need to discuss the option field, which plays a very
important role in DHCP. 
The 64-byte option field has a dual purpose. It can carry either additional informa-
tion or some specific vendor information. The server uses a number, called a magic
cookie, in the format of an IP address with the value of 99.130.83.99. When the client fin-
ishes reading the message, it looks for this magic cookie. If present, the next 60 bytes are
options. An option is composed of three fields: a 1-byte tag field, a 1-byte length field,
and a variable-length value field. There are several tag fields that are mostly used by
vendors. If the tag field is 53, the value field defines one of the 8 message types shown in
Figure 18.26. We show how these message types are used by DHCP. 
DHCP Operation
Figure 18.27 shows a simple scenario.  
Figure 18.25
DHCP message format
Figure 18.26
Option format
Opcode
Opcode: Operation code, request (1) or reply (2)
Htype: Hardware type (Ethernet, ...)
HLen: Length of hardware address
HCount: Maximum number of hops the packet can travel
Transaction ID: An integer set by the client and repeated by the server
Time elapsed: The number of seconds since the client started to boot 
Flags: First bit defines unicast (0) or multicast (1); other 15 bits not used
Your IP address: The client IP address sent by the server
Client IP address: Set to 0 if the client does not know it
Server IP address: A broadcast IP address if client does not know it
Gateway IP address: The address of default router
Server name: A 64-byte domain name of the server
Boot file name: A 128-byte file name holding extra information
Options: A 64-byte field with dual purpose described in text
Htype
Time elapsed
Flags
Client IP address
Your IP address
Server IP address
Gateway IP address
Transaction ID
Client hardware address
Server name
Boot file name

Fields:
HCount
HLen
Options
Tag
Length Value

DHCPDISCOVER

DHCPOFFER

DHCPREQUEST

DHCPDECLINE

DHCPACK

DHCPNACK

DHCPINFORM

DHCPRELEASE

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

1. The joining host creates a DHCPDISCOVER message in which only the transaction-
ID field is set to a random number. No other field can be set because the host has
no knowledge with which to do so. This message is encapsulated in a UDP user
datagram with the source port set to 68 and the destination port set to 67. We will
discuss the reason for using two well-known port numbers later. The user datagram
is encapsulated in an IP datagram with the source address set to 0.0.0.0 (“this
host”) and the destination address set to 255.255.255.255 (broadcast address).
The reason is that the joining host knows neither its own address nor the server
address. 
2. The DHCP server or servers (if more than one) responds with a DHCPOFFER
message in which the your address field defines the offered IP address for the join-
ing host and the server address field includes the IP address of the server. The mes-
sage also includes the lease time for which the host can keep the IP address. This
message is encapsulated in a user datagram with the same port numbers, but in the
reverse order. The user datagram in turn is encapsulated in a datagram with the
server address as the source IP address, but the destination address is a broadcast
address, in which the server allows other DHCP servers to receive the offer and
give a better offer if they can. 
Figure 18.27
Operation of DHCP
IP Address: 181.14.16.170
Only partial
information
is given. 
Client
Server
Time
Time
Legend
Note:
IP Address: ?
Source port: 68 Destination port: 67
DHCPDISCOVER
Your address: 
Server address:
Client address: 
Transaction ID: 1001
Lease time:
Source address: 0.0.0.0
Destination address: 255.255.255.255.
Source port: 68
Destination port: 67
DHCPREQUEST
Your address:
Server address: 181.14.16.170
Client address: 181.14.16.182
Transaction ID: 1001
Lease time: 3600
Source address: 181.14.16.182
Destination address: 255.255.255.255.
Source port: 67 Destination port: 68
DHCPOFFER
Your address: 181.14.16.182
Server address: 181.14.16.170
Client address: 
Transaction ID: 1001
Lease time: 3600
Source address: 181.14.16.170
Destination address: 255.255.255.255.
Source port: 67 Destination port: 68
DHCPACK
Your address: 181.14.16.182
Server address: 181.14.16.170
Client address:
Transaction ID: 1001
Lease time: 3600
Source address: 181.14.16.170
Destination address: 255.255.255.255.
Application
IP
UDP

PART IV
NETWORK LAYER
3. The joining host receives one or more offers and selects the best of them. The join-
ing host then sends a DHCPREQUEST message to the server that has given the
best offer. The fields with known value are set. The message is encapsulated in a
user datagram with port numbers as the first message. The user datagram is encap-
sulated in an IP datagram with the source address set to the new client address, but
the destination address still is set to the broadcast address to let the other servers
know that their offer was not accepted. 
4. Finally, the selected server responds with a DHCPACK message to the client if the
offered IP address is valid. If the server cannot keep its offer (for example, if the
address is offered to another host in between), the server sends a DHCPNACK
message and the client needs to repeat the process. This message is also broadcast
to let other servers know that the request is accepted or rejected.   
Two Well-Known Ports
We said that the DHCP uses two well-known ports (68 and 67) instead of one well-known
and one ephemeral. The reason for choosing the well-known port 68 instead of an ephem-
eral port for the client is that the response from the server to the client is broadcast.
Remember that an IP datagram with the limited broadcast message is delivered to every
host on the network. Now assume that a DHCP client and a DAYTIME client, for exam-
ple, are both waiting to receive a response from their corresponding server and both have
accidentally used the same temporary port number (56017, for example). Both hosts
receive the response message from the DHCP server and deliver the message to their cli-
ents. The DHCP client processes the message; the DAYTIME client is totally confused
with a strange message received. Using a well-known port number prevents this problem
from happening. The response message from the DHCP server is not delivered to the
DAYTIME client, which is running on the port number 56017, not 68. The temporary
port numbers are selected from a different range than the well-known port numbers.
The curious reader may ask what happens if two DHCP clients are running at the
same time. This can happen after a power failure and power restoration. In this case the
messages can be distinguished by the value of the transaction ID, which separates each
response from the other. 
Using FTP
The server does not send all of the information that a client may need for joining the net-
work. In the DHCPACK message, the server defines the pathname of a file in which the
client can find complete information such as the address of the DNS server. The client can
then use a file transfer protocol to obtain the rest of the needed information.
Error Control
DHCP uses the service of UDP, which is not reliable. To provide error control, DHCP uses
two strategies. First, DHCP requires that UDP use the checksum. As we will see in
Chapter 24, the use of the checksum in UDP is optional. Second, the DHCP client uses
timers and a retransmission policy if it does not receive the DHCP reply to a request. How-
ever, to prevent a traffic jam when several hosts need to retransmit a request (for example,
after a power failure), DHCP forces the client to use a random number to set its timers. 

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

Transition States
The previous scenarios we discussed for the operation of the DHCP were very simple. To
provide dynamic address allocation, the DHCP client acts as a state machine that
performs transitions from one state to another depending on the messages it receives or
sends. Figure 18.28 shows the transition diagram with the main states. 
When the DHCP client first starts, it is in the INIT state (initializing state). The
client broadcasts a discover message. When it receives an offer, the client goes to the
SELECTING state. While it is there, it may receive more offers. After it selects an offer, it
sends a request message and goes to the REQUESTING state. If an ACK arrives while the
client is in this state, it goes to the BOUND state and uses the IP address. When the lease is
50 percent expired, the client tries to renew it by moving to the RENEWING state. If the
server renews the lease, the client moves to the BOUND state again. If the lease is not
renewed and the lease time is 75 percent expired, the client moves to the REBINDING
state. If the server agrees with the lease (ACK message arrives), the client moves to the
BOUND state and continues using the IP address; otherwise, the client moves to the INIT
state and requests another IP address. Note that the client can use the IP address only when
it is in the BOUND, RENEWING, or REBINDING state. The above procedure requires
that the client uses three timers: renewal timer (set to 50 percent of the lease time), rebind-
ing timer (set to 75 percent of the lease time), and expiration timer (set to the lease time).   
18.4.5
Network Address Resolution (NAT)
The distribution of addresses through ISPs has created a new problem. Assume that an
ISP has granted a small range of addresses to a small business or a household. If the
business grows or the household needs a larger range, the ISP may not be able to grant
the demand because the addresses before and after the range may have already been
allocated to other networks. In most situations, however, only a portion of computers in
Figure 18.28
FSM for the DHCP client
_ / DHCPDISCOVER
Join
DHCPOFFER
Lease time 50% expired /
DHCPREQUEST
Select Offer / DHCPREQUEST
Lease time 75% expired /
DHCPREQUEST
Lease time expired or
DHCPNACK
DHCPNACK
DHCPACK
DHCPACK
DHCPACK
Lease cancelled/
DHCPRELEASE
BOUND
SELECTING
REQUESTING
RENEWING
REBINDING
INIT

PART IV
NETWORK LAYER
a small network need access to the Internet simultaneously. This means that the number
of allocated addresses does not have to match the number of computers in the network.
For example, assume that in a small business with 20 computers the maximum number
of computers that access the Internet simultaneously is only 4. Most of the computers
are either doing some task that does not need Internet access or communicating with
each other. This small business can use the TCP/IP protocol for both internal and uni-
versal communication. The business can use 20 (or 25) addresses from the private
block addresses (discussed before) for internal communication; five addresses for uni-
versal communication can be assigned by the ISP. 
A technology that can provide the mapping between the private and universal
addresses, and at the same time support virtual private networks, which we discuss in
Chapter 32, is Network Address Translation (NAT). The technology allows a site to
use a set of private addresses for internal communication and a set of global Internet
addresses (at least one) for communication with the rest of the world. The site must
have only one connection to the global Internet through a NAT-capable router that runs
NAT software. Figure 18.29 shows a simple implementation of NAT. 
As the figure shows, the private network uses private addresses. The router that
connects the network to the global address uses one private address and one global
address. The private network is invisible to the rest of the Internet; the rest of the Inter-
net sees only the NAT router with the address 200.24.5.8. 
Address Translation
All of the outgoing packets go through the NAT router, which replaces the source
address in the packet with the global NAT address. All incoming packets also pass
through the NAT router, which replaces the destination address in the packet (the NAT
router global address) with the appropriate private address. Figure 18.30 shows an exam-
ple of address translation. 
Translation Table
The reader may have noticed that translating the source addresses for an outgoing
packet is straightforward. But how does the NAT router know the destination address
for a packet coming from the Internet? There may be tens or hundreds of private IP
Figure 18.29
NAT
Site using private addresses
NAT
router
172.18.3.30
200.24.5.8
172.18.3.1
172.18.3.2
172.18.3.20
Internet

CHAPTER 18
INTRODUCTION TO NETWORK LAYER

addresses, each belonging to one specific host. The problem is solved if the NAT router
has a translation table.
Using One IP Address
In its simplest form, a translation table has only two columns: the private address and
the external address (destination address of the packet). When the router translates the
source address of the outgoing packet, it also makes note of the destination address—
where the packet is going. When the response comes back from the destination, the
router uses the source address of the packet (as the external address) to find the private
address of the packet. Figure 18.31 shows the idea. 
In this strategy, communication must always be initiated by the private network.
The NAT mechanism described requires that the private network start the communication.
Figure 18.30
Address translation
Figure 18.31
Translation
Internet
Source: 172.18.3.1
Destination: 172.18.3.1
Source: 200.24.5.8
Destination: 200.24.5.8
Site using private addresses
172.18.3.1
172.18.3.2
172.18.3.20
Translation Table
Private network
Legend
Private network
172.18.3.1
Make table entry
Source address
S:
Destination address
D:
Access table
Change source address
Change destination address
25.8.2.10
Private
Universal
S: 172.18.3.1
D:25.8.2.10
Data
S: 172.18.3.1
D: 25.8.2.10
Data
S: 200.24.5.8
D:25.8.2.10
Data
S: 200.24.5.8
D: 25.8.2.10
Data
S: 25.8.2.10
D:200.24.8.5
Data
S: 25.8.2.10
D: 200.24.8.5
Data
S: 25.8.2.10
D: 172.18.3.1
Data
S: 25.8.2.10
D: 172.18.3.1
Data

PART IV
NETWORK LAYER
As we will see, NAT is used mostly by ISPs that assign a single address to a customer.
The customer, however, may be a member of a private network that has many private
addresses. In this case, communication with the Internet is always initiated from the
customer site, using a client program such as HTTP, TELNET, or FTP to access the
corresponding server program. For example, when e-mail that originates from outside
the network site is received by the ISP e-mail server, it is stored in the mailbox of the
customer until retrieved with a protocol such as POP. 
Using a Pool of IP Addresses
The use of only one global address by the NAT router allows only one private-network
host to access a given external host. To remove this restriction, the NAT router can use
a pool of global addresses. For example, instead of using only one global address
(200.24.5.8), the NAT router can use four addresses (200.24.5.8, 200.24.5.9,
200.24.5.10, and 200.24.5.11). In this case, four private-network hosts can communicate
with the same external host at the same time because each pair of addresses defines a
separate connection. However, there are still some drawbacks. No more than four con-
nections can be made to the same destination. No private-network host can access two
external server programs (e.g., HTTP and TELNET) at the same time. And, likewise,
two private-network hosts cannot access the same external server program (e.g., HTTP
or TELNET) at the same time.
Using Both IP Addresses and Port Addresses 
To allow a many-to-many relationship between private-network hosts and external
server programs, we need more information in the translation table. For example, sup-
pose two hosts inside a private network with addresses 172.18.3.1 and 172.18.3.2 need
to access the HTTP server on external host 25.8.3.2. If the translation table has five
columns, instead of two, that include the source and destination port addresses and the
transport-layer protocol, the ambiguity is eliminated. Table 18.1 shows an example of
such a table. 
Note that when the response from HTTP comes back, the combination of source
address (25.8.3.2) and destination port address (1401) defines the private network host
to which the response should be directed. Note also that for this translation to work, the
ephemeral port addresses (1400 and 1401) must be unique.
18.5
FORWARDING OF IP PACKETS
We discussed the concept of forwarding at the network layer earlier in this chapter. In
this section, we extend the concept to include the role of IP addresses in forwarding.
As we discussed before, forwarding means to place the packet in its route to its destination.
Table 18.1
Five-column translation table
Private 
address
Private 
port
External 
address
External 
port
Transport 
protocol
172.18.3.1

25.8.3.2

TCP
172.18.3.2

25.8.3.2

TCP
...
...
...
...
...

PART IV
NETWORK LAYER
22.2
THE IPv6 PROTOCOL
The change of the IPv6 address size requires the change in the IPv4 packet format. The
designer of IPv6 decided to implement remedies for other shortcomings now that a
change is inevitable. The following shows other changes implemented in the protocol
in addition to changing address size and format.
❑
Better header format. IPv6 uses a new header format in which options are sepa-
rated from the base header and inserted, when needed, between the base header
and the data. This simplifies and speeds up the routing process because most of the
options do not need to be checked by routers. 
❑
New options. IPv6 has new options to allow for additional functionalities.
❑
Allowance for extension. IPv6 is designed to allow the extension of the protocol if
required by new technologies or applications. 
❑
Support for resource allocation. In IPv6, the type-of-service field has been
removed, but two new fields, traffic class and flow label, have been added to enable
the source to request special handling of the packet. This mechanism can be used
to support traffic such as real-time audio and video. 
❑
Support for more security. The encryption and authentication options in IPv6 pro-
vide confidentiality and integrity of the packet.
22.2.1
Packet Format 
The IPv6 packet is shown in Figure 22.6. Each packet is composed of a base header fol-
lowed by the payload. The base header occupies 40 bytes, whereas payload can be up
to 65,535 bytes of information. The description of fields follows. 
Figure 22.6
IPv6 datagram
40 bytes
Up to 65,535 bytes
a. IPv6 packet
b. Base header
Payload
Base header

Source address
(128 bits = 16 bytes)
Destination address
(128 bits = 16 bytes)
Flow label
Traffic class
Version
Hop limit
Next header
Payload length

CHAPTER 22
NEXT GENERATION IP

❑
Version. The 4-bit version field defines the version number of the IP. For IPv6, the
value is 6. 
❑
Traffic class. The 8-bit traffic class field is used to distinguish different payloads
with different delivery requirements. It replaces the type-of-service field in IPv4. 
❑
Flow label. The flow label is a 20-bit field that is designed to provide special han-
dling for a particular flow of data. We will discuss this field later. 
❑
Payload length. The 2-byte payload length field defines the length of the IP
datagram excluding the header. Note that IPv4 defines two fields related to the
length: header length and total length. In IPv6, the length of the base header is
fixed (40 bytes); only the length of the payload needs to be defined. 
❑
Next header. The next header is an 8-bit field defining the type of the first exten-
sion header (if present) or the type of the data that follows the base header in the
datagram. This field is similar to the protocol field in IPv4, but we talk more about
it when we discuss the payload. 
❑
Hop limit. The 8-bit hop limit field serves the same purpose as the TTL field in IPv4.
❑
Source and destination addresses. The source address field is a 16-byte (128-bit)
Internet address that identifies the original source of the datagram. The destination
address field is a 16-byte (128-bit) Internet address that identifies the destination of
the datagram.
❑
Payload. Compared to IPv4, the payload field in IPv6 has a different format and
meaning, as shown in Figure 22.7. 
The payload in IPv6 means a combination of zero or more extension headers
(options) followed by the data from other protocols (UDP, TCP, and so on). In
IPv6, options, which are part of the header in IPv4, are designed as extension head-
ers. The payload can have as many extension headers as required by the situation.
Each extension header has two mandatory fields, next header and the length,
Figure 22.7
Payload in an IPv6 datagram
Payload
 Base header
Some next-header codes
Next header
Length
Next header
Length
00: Hop-by-hop option
Extension header
Extension header
02: ICMPv6
06: TCP
17: UDP
43: Source-routing option
44: Fragmentation option
50: Encrypted security payload
51:Authentication header
59: Null (no next header)
60: Destination option
Data: a packet from another protocol 
Next header

PART IV
NETWORK LAYER
followed by information related to the particular option. Note that each next header
field value (code) defines the type of the next header (hop-by-hop option, source-
routing option, . . .); the last next header field defines the protocol (UDP, TCP, . . .)
that is carried by the datagram. 
Concept of Flow and Priority in IPv6
The IP protocol was originally designed as a connectionless protocol. However, the ten-
dency is to use the IP protocol as a connection-oriented protocol. The MPLS technol-
ogy described earlier allows us to encapsulate an IPv4 packet in an MPLS header using
a label field. In version 6, the flow label has been directly added to the format of the
IPv6 datagram to allow us to use IPv6 as a connection-oriented protocol. 
To a router, a flow is a sequence of packets that share the same characteristics, such
as traveling the same path, using the same resources, having the same kind of security,
and so on. A router that supports the handling of flow labels has a flow label table. The
table has an entry for each active flow label; each entry defines the services required by
the corresponding flow label. When the router receives a packet, it consults its flow
label table to find the corresponding entry for the flow label value defined in the packet.
It then provides the packet with the services mentioned in the entry. However, note that
the flow label itself does not provide the information for the entries of the flow label
table; the information is provided by other means, such as the hop-by-hop options or
other protocols.
In its simplest form, a flow label can be used to speed up the processing of a packet
by a router. When a router receives a packet, instead of consulting the forwarding table
and going through a routing algorithm to define the address of the next hop, it can easily
look in a flow label table for the next hop.
In its more sophisticated form, a flow label can be used to support the transmission of
real-time audio and video. Real-time audio or video, particularly in digital form, requires
resources such as high bandwidth, large buffers, long processing time, and so on. A pro-
cess can make a reservation for these resources beforehand to guarantee that real-time data
will not be delayed due to a lack of resources. The use of real-time data and the reservation
of these resources require other protocols such as Real-Time Transport Protocol (RTP) and
Resource Reservation Protocol (RSVP) in addition to IPv6 (see Chapter 28). 
Fragmentation and Reassembly
There are still fragmentation and reassembly of datagrams in the IPv6 protocol, but there
is a major difference in this respect. IPv6 datagrams can be fragmented only by the
source, not by the routers; the reassembly takes place at the destination. The fragmenta-
tion of packets at routers is not allowed to speed up the processing of packets in the
router. The fragmentation of a packet in a router needs a lot of processing. The packet
needs to be fragmented, all fields related to the fragmentation need to be recalculated. In
IPv6, the source can check the size of the packet and make the decision to fragment the
packet or not. When a router receives the packet, it can check the size of the packet and
drop it if the size is larger than allowed by the MTU of the network ahead. The router then
sends a packet-too-big ICMPv6 error message (discussed later) to inform the source. 

CHAPTER 22
NEXT GENERATION IP

22.2.2
Extension Header
An IPv6 packet is made of a base header and some extension headers. The length of the
base header is fixed at 40 bytes. However, to give more functionality to the IP data-
gram, the base header can be followed by up to six extension headers. Many of these
headers are options in IPv4. Six types of extension headers have been defined. These
are hop-by-hop option, source routing, fragmentation, authentication, encrypted secu-
rity payload, and destination option (see Figure 22.8). 
We briefly describe the extension headers in this section, but the complete descrip-
tion is posted at the book website.
Hop-by-Hop Option 
The hop-by-hop option is used when the source needs to pass information to all routers
visited by the datagram. For example, perhaps routers must be informed about certain
management, debugging, or control functions. Or, if the length of the datagram is more
than the usual 65,535 bytes, routers must have this information. So far, only three hop-
by-hop options have been defined: Pad1, PadN, and jumbo payload.  
❑
Pad1. This option is 1 byte long and is designed for alignment purposes. Some
options need to start at a specific bit of the 32-bit word. If an option falls short of
this requirement by exactly one byte, Pad1 is added.
❑
PadN. PadN is similar in concept to Pad1. The difference is that PadN is used
when 2 or more bytes are needed for alignment. 
❑
Jumbo payload. Recall that the length of the payload in the IP datagram can be a
maximum of 65,535 bytes. However, if for any reason a longer payload is
required, we can use the jumbo payload option to define this longer length. 
Destination Option
The destination option is used when the source needs to pass information to the desti-
nation only. Intermediate routers are not permitted access to this information. The
format of the destination option is the same as the hop-by-hop option. So far, only the
Pad1 and PadN options have been defined.
Figure 22.8
Extension header types
Complete descriptions of extension headers are posted on the book website under 
Extra Materials for Chapter 22. 
Extension 
headers
Hop-by-hop
Source routing
Fragmentation
Authentication
ESP
Destination

PART IV
NETWORK LAYER
Source Routing 
The source routing extension header combines the concepts of the strict source route
and the loose source route options of IPv4. 
Fragmentation
The concept of fragmentation in IPv6 is the same as that in IPv4. However, the place
where fragmentation occurs differs. In IPv4, the source or a router is required to frag-
ment if the size of the datagram is larger than the MTU of the network over which the
datagram travels. In IPv6, only the original source can fragment. A source must use a
Path MTU Discovery technique to find the smallest MTU supported by any network
on the path. The source then fragments using this knowledge.
If the source does not use a Path MTU Discovery technique, it fragments the data-
gram to a size of 1280 bytes or smaller. This is the minimum size of MTU required for
each network connected to the Internet. 
Authentication
The authentication extension header has a dual purpose: it validates the message
sender and ensures the integrity of data. The former is needed so the receiver can be
sure that a message is from the genuine sender and not from an imposter. The latter is
needed to check that the data is not altered in transition by some hacker. We discuss
more about authentication in Chapters 31 and 32.
Encrypted Security Payload
The encrypted security payload (ESP) is an extension that provides confidentiality
and guards against eavesdropping. Again, we discuss providing more confidentiality
for IP packets in Chapter 32. 
Comparison of Options between IPv4 and IPv6
The following shows a quick comparison between the options used in IPv4 and the
options used in IPv6 (as extension headers).
❑
The no-operation and end-of-option options in IPv4 are replaced by Pad1 and
PadN options in IPv6. 
❑
The record route option is not implemented in IPv6 because it was not used.
❑
The timestamp option is not implemented because it was not used.
❑
The source route option is called the source route extension header in IPv6.
❑
The fragmentation fields in the base header section of IPv4 have moved to the frag-
mentation extension header in IPv6.
❑
The authentication extension header is new in IPv6.
❑
The encrypted security payload extension header is new in IPv6.   

PART IV
NETWORK LAYER
20.1
INTRODUCTION
Unicast routing in the Internet, with a large number of routers and a huge number of
hosts, can be done only by using hierarchical routing: routing in several steps using dif-
ferent routing algorithms. In this section, we first discuss the general concept of unicast
routing in an internet: an internetwork made of networks connected by routers. After
the routing concepts and algorithms are understood, we show how we can apply them
to the Internet using hierarchical routing. 
20.1.1
General Idea
In unicast routing, a packet is routed, hop by hop, from its source to its destination by
the help of forwarding tables. The source host needs no forwarding table because it
delivers its packet to the default router in its local network. The destination host needs
no forwarding table either because it receives the packet from its default router in its
local network. This means that only the routers that glue together the networks in the
internet need forwarding tables. With the above explanation, routing a packet from its
source to its destination means routing the packet from a source router (the default
router of the source host) to a destination router (the router connected to the destination
network). Although a packet needs to visit the source and the destination routers, the
question is what other routers the packet should visit. In other words, there are several
routes that a packet can travel from the source to the destination; what must be deter-
mined is which route the packet should take. 
An Internet as a Graph
To find the best route, an internet can be modeled as a graph. A graph in computer sci-
ence is a set of nodes and edges (lines) that connect the nodes. To model an internet as
a graph, we can think of each router as a node and each network between a pair of rout-
ers as an edge. An internet is, in fact, modeled as a weighted graph, in which each edge
is associated with a cost. If a weighted graph is used to represent a geographical area,
the nodes can be cities and the edges can be roads connecting the cities; the weights, in
this case, are distances between cities. In routing, however, the cost of an edge has a
different interpretation in different routing protocols, which we discuss in a later sec-
tion. For the moment, we assume that there is a cost associated with each edge. If there
is no edge between the nodes, the cost is infinity. Figure 20.1 shows how an internet
can be modeled as a graph.  
20.1.2
Least-Cost Routing
When an internet is modeled as a weighted graph, one of the ways to interpret the best
route from the source router to the destination router is to find the least cost between
the two. In other words, the source router chooses a route to the destination router in
such a way that the total cost for the route is the least cost among all possible routes. In
Figure 20.1, the best route between A and E is A-B-E, with the cost of 6. This means
that each router needs to find the least-cost route between itself and all the other routers
to be able to route a packet using this criteria.

CHAPTER 20
UNICAST ROUTING

Least-Cost Trees
If there are N routers in an internet, there are (N − 1) least-cost paths from each router to
any other router. This means we need N × (N − 1) least-cost paths for the whole internet. If
we have only 10 routers in an internet, we need 90 least-cost paths. A better way to see all
of these paths is to combine them in a least-cost tree. A least-cost tree is a tree with the
source router as the root that spans the whole graph (visits all other nodes) and in which
the path between the root and any other node is the shortest. In this way, we can have only
one shortest-path tree for each node; we have N least-cost trees for the whole internet. We
show how to create a least-cost tree for each node later in this section; for the moment,
Figure 20.2 shows the seven least-cost trees for the internet in Figure 20.1. 
Figure 20.1
An internet and its graphical representation
Figure 20.2
Least-cost trees for nodes in the internet of Figure 20.1
a. An internet 
b. The weighted graph 
Legend
Router
Edge
Costs
Node
LAN
WAN
2, 3, ...

G
A
B
C
E
F
D

A
B
C
D
E
F
G
1, 2, ... Total cost from the root
Root of the tree
Legend
Intermediate or end node

D
B
C
A
E
F
G

D
B
C
A
E
G

E
B
C
A
D
F
G

A
B
C
D
E
F
G

A
C
B
D
E
F
G

D
G
B
C
A
E
F
F

PART IV
NETWORK LAYER
 The least-cost trees for a weighted graph can have several properties if they are
created using consistent criteria. 
1. The least-cost route from X to Y in X’s tree is the inverse of the least-cost route
from Y to X in Y’s tree; the cost in both directions is the same. For example, in
Figure 20.2, the route from A to F in A’s tree is (A → B → E → F), but the route
from F to A in F’s tree is (F → E → B → A), which is the inverse of the first route.
The cost is 8 in each case. 
2. Instead of travelling from X to Z using X’s tree, we can travel from X to Y using
X’s tree and continue from Y to Z using Y’s tree. For example, in Figure 20.2, we
can go from A to G in A’s tree using the route (A → B → E → F → G). We can also
go from A to E in A’s tree (A → B → E) and then continue in E’s tree using the
route (E → F → G). The combination of the two routes in the second case is the
same route as in the first case. The cost in the first case is 9; the cost in the second
case is also 9 (6 + 3). 
20.2
ROUTING ALGORITHMS
After discussing the general idea behind least-cost trees and the forwarding tables that
can be made from them, now we concentrate on the routing algorithms. Several routing
algorithms have been designed in the past. The differences between these methods are
in the way they interpret the least cost and the way they create the least-cost tree for
each node. In this section, we discuss the common algorithms; later we show how a
routing protocol in the Internet implements one of these algorithms. 
20.2.1
Distance-Vector Routing 
The distance-vector (DV) routing uses the goal we discussed in the introduction, to
find the best route. In distance-vector routing, the first thing each node creates is its
own least-cost tree with the rudimentary information it has about its immediate neigh-
bors. The incomplete trees are exchanged between immediate neighbors to make the
trees more and more complete and to represent the whole internet. We can say that in
distance-vector routing, a router continuously tells all of its neighbors what it knows
about the whole internet (although the knowledge can be incomplete).   
Before we show how incomplete least-cost trees can be combined to make com-
plete ones, we need to discuss two important topics: the Bellman-Ford equation and the
concept of distance vectors, which we cover next. 
Bellman-Ford Equation
The heart of distance-vector routing is the famous Bellman-Ford equation. This equation
is used to find the least cost (shortest distance) between a source node, x, and a destina-
tion node, y, through some intermediary nodes (a, b, c, . . .) when the costs between the
source and the intermediary nodes and the least costs between the intermediary nodes and
the destination are given. The following shows the general case in which Dij is the short-
est distance and cij is the cost between nodes i and j.   
Dxy = min{(cxa + Day), (cxb + Dby), (cxc + Dcy), …}

CHAPTER 20
UNICAST ROUTING

In distance-vector routing, normally we want to update an existing least cost with a
least cost through an intermediary node, such as z, if the latter is shorter. In this case,
the equation becomes simpler, as shown below: 
 Figure 20.3 shows the idea graphically for both cases. 
     We can say that the Bellman-Ford equation enables us to build a new least-cost path
from previously established least-cost paths. In Figure 20.3, we can think of (a→y),
(b→y), and (c→y) as previously established least-cost paths and (x→y) as the new
least-cost path. We can even think of this equation as the builder of a new least-cost tree
from previously established least-cost trees if we use the equation repeatedly. In other
words, the use of this equation in distance-vector routing is a witness that this method
also uses least-cost trees, but this use may be in the background. 
We will shortly show how we use the Bellman-Ford equation and the concept of
distance vectors to build least-cost paths for each node in distance-vector routing, but
first we need to discuss the concept of a distance vector. 
Distance Vectors
The concept of a distance vector is the rationale for the name distance-vector routing.
A least-cost tree is a combination of least-cost paths from the root of the tree to all des-
tinations. These paths are graphically glued together to form the tree. Distance-vector
routing unglues these paths and creates a distance vector, a one-dimensional array to
represent the tree. Figure 20.4 shows the tree for node A in the internet in Figure 20.1
and the corresponding distance vector.  
Note that the name of the distance vector defines the root, the indexes define the des-
tinations, and the value of each cell defines the least cost from the root to the destination.
A distance vector does not give the path to the destinations as the least-cost tree does; it
gives only the least costs to the destinations. Later we show how we can change a distance
vector to a forwarding table, but we first need to find all distance vectors for an internet. 
We know that a distance vector can represent least-cost paths in a least-cost tree,
but the question is how each node in an internet originally creates the corresponding
vector. Each node in an internet, when it is booted, creates a very rudimentary distance
vector with the minimum information the node can obtain from its neighborhood. The
node sends some greeting messages out of its interfaces and discovers the identity of
the immediate neighbors and the distance between itself and each neighbor. It then
Dxy = min{Dxy, (cxz + Dzy)}     
Figure 20.3
Graphical idea behind Bellman-Ford equation
Day
Dcy
cxz
cxa
cxb
cxc
Dby
a. General case with three intermediate nodes 
x
y
a
b
c
Dzy
 Dxy
b. Updating a path with a new route 
x
y
z

PART IV
NETWORK LAYER
makes a simple distance vector by inserting the discovered distances in the correspond-
ing cells and leaves the value of other cells as infinity. Do these distance vectors repre-
sent least-cost paths? They do, considering the limited information a node has. When
we know only one distance between two nodes, it is the least cost. Figure 20.5 shows
all distance vectors for our internet. However, we need to mention that these vectors are
made asynchronously, when the corresponding node has been booted; the existence of
all of them in a figure does not mean synchronous creation of them.   
These rudimentary vectors cannot help the internet to effectively forward a packet.
For example, node A thinks that it is not connected to node G because the corresponding
cell shows the least cost of infinity. To improve these vectors, the nodes in the internet
need to help each other by exchanging information. After each node has created its vec-
tor, it sends a copy of the vector to all its immediate neighbors. After a node receives a
distance vector from a neighbor, it updates its distance vector using the Bellman-Ford
equation (second case). However, we need to understand that we need to update, not
Figure 20.4
The distance vector corresponding to a tree
Figure 20.5
The first distance vector for an internet
a. Tree for node A
b. Distance vector for node A
C
D
B
A
A
E
F
G

A
B
C
D
E
F
G
C
D
B
A
E
F
G

8 8 8

C
D
B
A
E
F
G

G
A
B
C
E
F
D
C
D
B
A
E
F
G

8 8
8 8

C
D
B
A
E
F
G

C
D
B
A
E
F
G

C
D
B
A
E
F
G

8 8

C
D
B
A
E
F
G

8 8

CHAPTER 20
UNICAST ROUTING

only one least cost, but N of them in which N is the number of the nodes in the internet.
If we are using a program, we can do this using a loop; if we are showing the concept
on paper, we can show the whole vector instead of the N separate equations. We show
the whole vector instead of seven equations for each update in Figure 20.6. The figure
shows two asynchronous events, happening one after another with some time in
between. In the first event, node A has sent its vector to node B. Node B updates its
vector using the cost cBA = 2. In the second event, node E has sent its vector to node B.
Node B updates its vector using the cost cEA = 4.  
After the first event, node B has one improvement in its vector: its least cost to
node D has changed from infinity to 5 (via node A). After the second event, node B has
one more improvement in its vector; its least cost to node F has changed from infinity
to 6 (via node E). We hope that we have convinced the reader that exchanging vectors
eventually stabilizes the system and allows all nodes to find the ultimate least cost
between themselves and any other node. We need to remember that after updating a
node, it immediately sends its updated vector to all neighbors. Even if its neighbors
have received the previous vector, the updated one may help more. 
Distance-Vector Routing Algorithm
Now we can give a simplified pseudocode for the distance-vector routing algorithm, as
shown in Table 20.1. The algorithm is run by its node independently and asynchronously.   
Figure 20.6
Updating distance vectors
Table 20.1
Distance-Vector Routing Algorithm for a Node

Distance_Vector_Routing ( )

{

// Initialize (create initial vectors for the node)

D[myself ] = 0
C
D
B
A
E
F
G

8 8 8

C
D
B
A
E
F
G

B[ ] = min (B[ ] , 2 + A[ ])
B[ ] = min (B[ ] , 4 + E[ ])
Old B
A
C
D
B
A
E
F
G

New B

C
D
B
A
E
F
G

Old B

C
D
B
A
E
F
G

C
D
B
A
E
F
G

New B
E
a. First event: B receives a copy of A’s vector.
b. Second event: B receives a copy of E’s vector.
Note:
X[ ]: the whole vector

PART IV
NETWORK LAYER
Lines 4 to 11 initialize the vector for the node. Lines 14 to 23 show how the vector
can be updated after receiving a vector from the immediate neighbor. The for loop in
lines 17 to 20 allows all entries (cells) in the vector to be updated after receiving a new
vector. Note that the node sends its vector in line 12, after being initialized, and in
line 22, after it is updated. 
Count to Infinity
A problem with distance-vector routing is that any decrease in cost (good news) propa-
gates quickly, but any increase in cost (bad news) will propagate slowly. For a routing
protocol to work properly, if a link is broken (cost becomes infinity), every other router
should be aware of it immediately, but in distance-vector routing, this takes some time.
The problem is referred to as count to infinity. It sometimes takes several updates before
the cost for a broken link is recorded as infinity by all routers. 
Two-Node Loop
One example of count to infinity is the two-node loop problem. To understand the prob-
lem, let us look at the scenario depicted in Figure 20.7. 
The figure shows a system with three nodes. We have shown only the portions of
the forwarding table needed for our discussion. At the beginning, both nodes A and B

for (y = 1 to N)

     {

if (y is a neighbor)

D[y] = c[myself ][y]

else 

D[y] = ∞

     }

     send vector {D[1], D[2], …, D[N]} to all neighbors

// Update (improve the vector with the vector received from a neighbor)

repeat (forever)

{

wait (for a vector Dw from a neighbor w or any change in the link)

for (y = 1 to N)

{

D[y] = min [D[y], (c[myself ][w] + Dw[y ])]
// Bellman-Ford equation

}

if (any change in the vector)

send vector {D[1], D[2], …, D[N]} to all neighbors

}

} // End of Distance Vector
Table 20.1
Distance-Vector Routing Algorithm for a Node (continued)

CHAPTER 20
UNICAST ROUTING

know how to reach node X. But suddenly, the link between A and X fails. Node A
changes its table. If A can send its table to B immediately, everything is fine. However,
the system becomes unstable if B sends its forwarding table to A before receiving A’s
forwarding table. Node A receives the update and, assuming that B has found a way to
reach X, immediately updates its forwarding table. Now A sends its new update to B.
Now B thinks that something has been changed around A and updates its forwarding
table. The cost of reaching X increases gradually until it reaches infinity. At this
moment, both A and B know that X cannot be reached. However, during this time the
system is not stable. Node A thinks that the route to X is via B; node B thinks that the
route to X is via A. If A receives a packet destined for X, the packet goes to B and then
comes back to A. Similarly, if B receives a packet destined for X, it goes to A and
comes back to B. Packets bounce between A and B, creating a two-node loop problem.
A few solutions have been proposed for instability of this kind.
Split Horizon
One solution to instability is called split horizon. In this strategy, instead of flooding
the table through each interface, each node sends only part of its table through each
interface. If, according to its table, node B thinks that the optimum route to reach X is
via A, it does not need to advertise this piece of information to A; the information has
come from A (A already knows). Taking information from node A, modifying it, and
sending it back to node A is what creates the confusion. In our scenario, node B elimi-
nates the last line of its forwarding table before it sends it to A. In this case, node A
keeps the value of infinity as the distance to X. Later, when node A sends its forward-
ing table to B, node B also corrects its forwarding table. The system becomes stable
after the first update: both node A and node B know that X is not reachable.
Poison Reverse
Using the split-horizon strategy has one drawback. Normally, the corresponding proto-
col uses a timer, and if there is no news about a route, the node deletes the route from its
table. When node B in the previous scenario eliminates the route to X from its adver-
tisement to A, node A cannot guess whether this is due to the split-horizon strategy (the
source of information was A) or because B has not received any news about X recently.
In the poison reverse strategy B can still advertise the value for X, but if the source of
Figure 20.7
Two-node instability
X
X
X
b. After link failure
a. Before failure
A
B
X 2 A
X 1 A
A
B
X 2 A
X 16 A
A
B
X 2 A
X 3 A
X
d. After B is updated by A
A
B
X 4 A
X 3 A
e. Finally
A
B
X ∞
X ∞
X
c. After A is updated by B

PART IV
NETWORK LAYER
information is A, it can replace the distance with infinity as a warning: “Do not use this
value; what I know about this route comes from you.” 
Three-Node Instability
The two-node instability can be avoided using split horizon combined with poison
reverse. However, if the instability is between three nodes, stability cannot be guaranteed.
20.2.2
Link-State Routing
A routing algorithm that directly follows our discussion for creating least-cost trees and
forwarding tables is link-state (LS) routing. This method uses the term link-state to
define the characteristic of a link (an edge) that represents a network in the internet. In
this algorithm the cost associated with an edge defines the state of the link. Links with
lower costs are preferred to links with higher costs; if the cost of a link is infinity, it
means that the link does not exist or has been broken. 
Link-State Database (LSDB)
To create a least-cost tree with this method, each node needs to have a complete map of
the network, which means it needs to know the state of each link. The collection of states
for all links is called the link-state database (LSDB). There is only one LSDB for the
whole internet; each node needs to have a duplicate of it to be able to create the least-cost
tree. Figure 20.8 shows an example of an LSDB for the graph in Figure 20.1. The LSDB
can be represented as a two-dimensional array(matrix) in which the value of each cell
defines the cost of the corresponding link. 
Now the question is how each node can create this LSDB that contains information
about the whole internet. This can be done by a process called flooding. Each node can
send some greeting messages to all its immediate neighbors (those nodes to which it is
connected directly) to collect two pieces of information for each neighboring node: the
identity of the node and the cost of the link. The combination of these two pieces of
information is called the LS packet (LSP); the LSP is sent out of each interface, as
shown in Figure 20.9 for our internet in Figure 20.1. When a node receives an LSP
from one of its interfaces, it compares the LSP with the copy it may already have. If the
newly arrived LSP is older than the one it has (found by checking the sequence num-
ber), it discards the LSP. If it is newer or the first one received, the node discards the old
LSP (if there is one) and keeps the received one. It then sends a copy of it out of each
Figure 20.8
Example of a link-state database
b. Link state database 
C
C
D
D
B
B
A
A
E
E
F
G
F
G

a. The weighted graph 

G
A
B
C
E
F
D

CHAPTER 20
UNICAST ROUTING

interface except the one from which the packet arrived. This guarantees that flooding
stops somewhere in the network (where a node has only one interface). We need to con-
vince ourselves that, after receiving all new LSPs, each node creates the comprehensive
LSDB as shown in Figure 20.9. This LSDB is the same for each node and shows the
whole map of the internet. In other words, a node can make the whole map if it needs
to, using this LSDB. 
We can compare the link-state routing algorithm with the distance-vector routing
algorithm. In the distance-vector routing algorithm, each router tells its neighbors what
it knows about the whole internet; in the link-state routing algorithm, each router tells
the whole internet what it knows about its neighbors. 
Formation of Least-Cost Trees
To create a least-cost tree for itself, using the shared LSDB, each node needs to run the
famous Dijkstra Algorithm. This iterative algorithm uses the following steps:
1. The node chooses itself as the root of the tree, creating a tree with a single node,
and sets the total cost of each node based on the information in the LSDB. 
2. The node selects one node, among all nodes not in the tree, which is closest to the
root, and adds this to the tree. After this node is added to the tree, the cost of all other
nodes not in the tree needs to be updated because the paths may have been changed. 
3. The node repeats step 2 until all nodes are added to the tree. 
We need to convince ourselves that the above three steps finally create the least-cost
tree. Table 20.2 shows a simplified version of Dijkstra’s algorithm.  
Figure 20.9
LSPs created and sent out by each node to build LSDB
Table 20.2
Dijkstra’s Algorithm

Dijkstra’s Algorithm ( )

{

// Initialization

     Tree = {root}
// Tree is made only of the root
Node Cost

F
C

Node Cost

F
B

G

Node Cost

C
A

E

Node Cost

E
C

G

Node Cost

D
B

E

Node Cost

D
B

Node Cost

E
A

G
A
B
C
F
D
E

PART IV
NETWORK LAYER
Lines 4 to 13 implement step 1 in the algorithm. Lines 16 to 23 implement step 2
in the algorithm. Step 2 is repeated until all nodes are added to the tree.
Figure 20.10 shows the formation of the least-cost tree for the graph in Figure 20.8
using Dijkstra’s algorithm. We need to go through an initialization step and six itera-
tions to find the least-cost tree. 
20.2.3
Path-Vector Routing
Both link-state and distance-vector routing are based on the least-cost goal. However,
there are instances where this goal is not the priority. For example, assume that there are
some routers in the internet that a sender wants to prevent its packets from going through.
For example, a router may belong to an organization that does not provide enough secu-
rity or it may belong to a commercial rival of the sender which might inspect the packets
for obtaining information. Least-cost routing does not prevent a packet from passing
through an area when that area is in the least-cost path. In other words, the least-cost goal,
applied by LS or DV routing, does not allow a sender to apply specific policies to the
route a packet may take. Aside from safety and security, there are occasions, as discussed
in the next section, in which the goal of routing is merely reachability: to allow the packet
to reach its destination more efficiently without assigning costs to the route. 

for (y = 1 to N)
// N is the number of nodes

     {

if (y is the root)

D[y] = 0
// D[y] is shortest distance from root to node y 

else if (y is a neighbor) 

D[y] = c[root][y]
// c[x][y] is cost between nodes x and y in LSDB

else 

D[y] = ∞

     }

// Calculation

repeat 

{

find a node w, with D[w] minimum among all nodes not in the Tree

Tree = Tree ∪ {w} 
// Add w to tree

// Update distances for all neighbors of w 

for (every node x, which is a neighbor of w and not in the Tree)

{

D[x] = min{D[x], (D[w] + c[w][x])}

}

} until (all nodes included in the Tree)

} // End of Dijkstra 
Table 20.2
Dijkstra’s Algorithm (continued)

CHAPTER 20
UNICAST ROUTING

To respond to these demands, a third routing algorithm, called path-vector (PV)
routing has been devised. Path-vector routing does not have the drawbacks of LS or
DV routing as described above because it is not based on least-cost routing. The best
route is determined by the source using the policy it imposes on the route. In other
words, the source can control the path. Although path-vector routing is not actually
used in an internet, and is mostly designed to route a packet between ISPs, we discuss
the principle of this method in this section as though applied to an internet. In the next
section, we show how it is used in the Internet. 
Spanning Trees
In path-vector routing, the path from a source to all destinations is also determined by
the best spanning tree. The best spanning tree, however, is not the least-cost tree; it is
Figure 20.10
Least-cost tree
Legend
Root node
Node in the path
Node not yet in the path
Potential path
Path
Initialization
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
Iteration 6

G
A
B
C
E
F
D

G
A
B
C
E
F
D

G
A
B
C
E
F
D

G
A
B
C
E
F
D

A
B
C
E
F
D

G
A
B
C
E
F
D

G
A
B
C
E
F
D
G

PART IV
NETWORK LAYER
the tree determined by the source when it imposes its own policy. If there is more than
one route to a destination, the source can choose the route that meets its policy best. A
source may apply several policies at the same time. One of the common policies uses
the minimum number of nodes to be visited (something similar to least-cost). Another
common policy is to avoid some nodes as the middle node in a route. 
Figure 20.11 shows a small internet with only five nodes. Each source has created
its own spanning tree that meets its policy. The policy imposed by all sources is to use
the minimum number of nodes to reach a destination. The spanning tree selected by A
and E is such that the communication does not pass through D as a middle node. Simi-
larly, the spanning tree selected by B is such that the communication does not pass
through C as a middle node. 
Creation of Spanning Trees
Path-vector routing, like distance-vector routing, is an asynchronous and distributed
routing algorithm. The spanning trees are made, gradually and asynchronously, by each
node. When a node is booted, it creates a path vector based on the information it can
obtain about its immediate neighbor. A node sends greeting messages to its immediate
neighbors to collect these pieces of information. Figure 20.12 shows all of these path
vectors for our internet in Figure 20.11. Note, however, that we do not mean that all of
these tables are created simultaneously; they are created when each node is booted. The
figure also shows how these path vectors are sent to immediate neighbors after they
have been created (arrows).
Each node, after the creation of the initial path vector, sends it to all its immediate
neighbors. Each node, when it receives a path vector from a neighbor, updates its path
vector using an equation similar to the Bellman-Ford, but applying its own policy
instead of looking for the least cost. We can define this equation as   
In this equation, the operator (+) means to add x to the beginning of the path. We
also need to be cautious to avoid adding a node to an empty path because an empty path
means one that does not exist. 
Figure 20.11
Spanning trees in path-vector routing
Path(x, y) = best {Path(x, y), [(x + Path(v, y)]}      for all v’s in the internet.
A
B
E
D
C
A
C
E
D
B
A
B
E
D
C
A
C
D
A
C
E
An internet
A’s spanning tree
B’s spanning tree
C’s spanning tree
D’s spanning tree
E’s spanning tree
A
B
C
D
E
B
D
B
E

CHAPTER 20
UNICAST ROUTING

The policy is defined by selecting the best of multiple paths. Path-vector routing
also imposes one more condition on this equation: If Path (v, y) includes x, that path is
discarded to avoid a loop in the path. In other words, x does not want to visit itself
when it selects a path to y. 
Figure 20.13 shows the path vector of node C after two events. In the first event,
node C receives a copy of B’s vector, which improves its vector: now it knows how to
reach node A. In the second event, node C receives a copy of D’s vector, which does not
change its vector. As a matter of fact the vector for node C after the first event is stabi-
lized and serves as its forwarding table. 
Figure 20.12
Path vectors made at booting time
Figure 20.13
Updating path vectors
C
D
B
A
E
A, B
A
C
D
B
A
E D, E
D, B
D, C
D
C
D
B
A
E E
E, D
E, C
C
D
B
A
E
B
B, A
B, C
B, D
C
D
B
A
E
C
C, B
C, D
C, E
A
E
C
D
B
Old C
B
D
Event 1: C receives a copy of B’s vector
Event 2: C receives a copy of D’s vector
C
D
B
A
E D, E
D, B
D, C
D
C
D
B
A
E
C, B
C, D
C, E
C
New C
C
D
B
A
E
C, B
C, D
C, E
C
C, B, A
New C
C
D
B
A
E
C, B
C, D
C, E
C
C, B, A
Old C
C
D
B
A
E
C, B
C, D
C, E
C
C, B, A
C
D
B
A
E
B, A
B
B, C
B, D
C[ ] = best (C[ ], C + B[ ])
C[ ] = best (C[ ], C + D[ ])
Note:
X [ ]: vector X
Y: node Y

PART IV
NETWORK LAYER
Path-Vector Algorithm
Based on the initialization process and the equation used in updating each forwarding
table after receiving path vectors from neighbors, we can write a simplified version of
the path vector algorithm as shown in Table 20.3. 
Lines 4 to 12 show the initialization for the node. Lines 17 to 24 show how the
node updates its vector after receiving a vector from the neighbor. The update process
is repeated forever. We can see the similarities between this algorithm and the DV
algorithm. 
Table 20.3
Path-vector algorithm for a node 

Path_Vector_Routing ( )

{

// Initialization

for (y = 1 to N)

     {

if (y is myself)

Path[y] = myself

else if (y is a neighbor) 

Path[y] = myself + neighbor node

else 

Path[y] = empty
12     }
13     Send vector {Path[1], Path[2], …, Path[y]} to all neighbors

// Update

repeat (forever)

{

wait (for a vector Pathw from a neighbor w)

for (y = 1 to N)

{

 if (Pathw includes myself)               

discard the path
// Avoid any loop

 else               

Path[y] = best {Path[y], (myself + Pathw[y])}

}

If (there is a change in the vector)

Send vector {Path[1], Path[2], …, Path[y]} to all neighbors

}

} // End of Path Vector 

CHAPTER 20
UNICAST ROUTING

20.3
UNICAST ROUTING PROTOCOLS
In the previous section, we discussed unicast routing algorithms; in this section, we dis-
cuss unicast routing protocols used in the Internet. Although three protocols we discuss
here are based on the corresponding algorithms we discussed before, a protocol is more
than an algorithm. A protocol needs to define its domain of operation, the messages
exchanged, communication between routers, and interaction with protocols in other
domains. After an introduction, we discuss three common protocols used in the Internet:
Routing Information Protocol (RIP), based on the distance-vector algorithm, Open
Shortest Path First (OSPF), based on the link-state algorithm, and Border Gateway Pro-
tocol (BGP), based on the path-vector algorithm. 
20.3.1
Internet Structure
Before discussing unicast routing protocols, we need to understand the structure of
today’s Internet. The Internet has changed from a tree-like structure, with a single back-
bone, to a multi-backbone structure run by different private corporations today.
Although it is difficult to give a general view of the Internet today, we can say that the
Internet has a structure similar to what is shown in Figure 20.14. 
There are several backbones run by private communication companies that provide
global connectivity. These backbones are connected by some peering points that allow
connectivity between backbones. At a lower level, there are some provider networks
that use the backbones for global connectivity but provide services to Internet customers.
Figure 20.14
Internet structure
Customer 
network
Customer 
network
Customer 
network
Customer 
network
Peering
point
Peering
point
Provider
network
Provider
network
Provider
network
Backbones
Provider
network
Customer 
network
Customer 
network
Provider
network
Customer 
network
Customer 
network
Customer 
network
Customer 
network

PART IV
NETWORK LAYER
Finally, there are some customer networks that use the services provided by the pro-
vider networks. Any of these three entities (backbone, provider network, or customer
network) can be called an Internet Service Provider or ISP. They provide services, but
at different levels. 
Hierarchical Routing
The Internet today is made of a huge number of networks and routers that connect
them. It is obvious that routing in the Internet cannot be done using a single protocol
for two reasons: a scalability problem and an administrative issue. Scalability problem
means that the size of the forwarding tables becomes huge, searching for a destination
in a forwarding table becomes time-consuming, and updating creates a huge amount
of traffic. The administrative issue is related to the Internet structure described in Fig-
ure 20.14. As the figure shows, each ISP is run by an administrative authority. The admin-
istrator needs to have control in its system. The organization must be able to use as many
subnets and routers as it needs, may desire that the routers be from a particular manufac-
turer, may wish to run a specific routing algorithm to meet the needs of the organization,
and may want to impose some policy on the traffic passing through its ISP. 
Hierarchical routing means considering each ISP as an autonomous system (AS).
Each AS can run a routing protocol that meets its needs, but the global Internet runs a
global protocol to glue all ASs together. The routing protocol run in each AS is referred
to as intra-AS routing protocol, intradomain routing protocol, or interior gateway pro-
tocol (IGP); the global routing protocol is referred to as inter-AS routing protocol,
interdomain routing protocol, or exterior gateway protocol (EGP). We can have several
intradomain routing protocols, and each AS is free to choose one, but it should be clear
that we should have only one interdomain protocol that handles routing between these
entities. Presently, the two common intradomain routing protocols are RIP and OSPF;
the only interdomain routing protocol is BGP. The situation may change when we move
to IPv6. 
Autonomous Systems
As we said before, each ISP is an autonomous system when it comes to managing net-
works and routers under its control. Although we may have small, medium-size, and
large ASs, each AS is given an autonomous number (ASN) by the ICANN. Each ASN
is a 16-bit unsigned integer that uniquely defines an AS. The autonomous systems,
however, are not categorized according to their size; they are categorized according to
the way they are connected to other ASs. We have stub ASs, multihomed ASs, and tran-
sient ASs. The type, as we see will later, affects the operation of the interdomain rout-
ing protocol in relation to that AS. 
❑
Stub AS. A stub AS has only one connection to another AS. The data traffic can be
either initiated or terminated in a stub AS; the data cannot pass through it. A good
example of a stub AS is the customer network, which is either the source or the
sink of data. 
❑
Multihomed AS. A multihomed AS can have more than one connection to other
ASs, but it does not allow data traffic to pass through it. A good example of such
an AS is some of the customer ASs that may use the services of more than one pro-
vider network, but their policy does not allow data to be passed through them.

CHAPTER 20
UNICAST ROUTING

❑
Transient AS. A transient AS is connected to more than one other AS and also
allows the traffic to pass through. The provider networks and the backbone are
good examples of transient ASs. 
20.3.2
Routing Information Protocol (RIP)
The Routing Information Protocol (RIP) is one of the most widely used intradomain
routing protocols based on the distance-vector routing algorithm we described earlier.
RIP was started as part of the Xerox Network System (XNS), but it was the Berkeley
Software Distribution (BSD) version of UNIX that helped make the use of RIP
widespread. 
Hop Count
A router in this protocol basically implements the distance-vector routing algorithm
shown in Table 20.1. However, the algorithm has been modified as described below.
First, since a router in an AS needs to know how to forward a packet to different net-
works (subnets) in an AS, RIP routers advertise the cost of reaching different
networks instead of reaching other nodes in a theoretical graph. In other words, the
cost is defined between a router and the network in which the destination host is
located. Second, to make the implementation of the cost simpler (independent from
performance factors of the routers and links, such as delay, bandwidth, and so on),
the cost is defined as the number of hops, which means the number of networks (sub-
nets) a packet needs to travel through from the source router to the final destination
host. Note that the network in which the source host is connected is not counted in
this calculation because the source host does not use a forwarding table; the packet is
delivered to the default router. Figure 20.15 shows the concept of hop count adver-
tised by three routers from a source host to a destination host. In RIP, the maximum
cost of a path can be 15, which means 16 is considered as infinity (no connection).
For this reason, RIP can be used only in autonomous systems in which the diameter
of the AS is not more than 15 hops. 
Figure 20.15
Hop counts in RIP
R1 
R2 
R3 
N1
1 hop (N4)
2 hops (N3, N4)
3 hops (N2, N3, N4)
Source
N3
N4
N2
Destination

PART IV
NETWORK LAYER
Forwarding Tables
Although the distance-vector algorithm we discussed in the previous section is con-
cerned with exchanging distance vectors between neighboring nodes, the routers in an
autonomous system need to keep forwarding tables to forward packets to their destina-
tion networks. A forwarding table in RIP is a three-column table in which the first col-
umn is the address of the destination network, the second column is the address of the
next router to which the packet should be forwarded, and the third column is the cost
(the number of hops) to reach the destination network. Figure 20.16 shows the three
forwarding tables for the routers in Figure 20.15. Note that the first and the third col-
umns together convey the same information as does a distance vector, but the cost
shows the number of hops to the destination networks.  
     Although a forwarding table in RIP defines only the next router in the second col-
umn, it gives the information about the whole least-cost tree based on the second
property of these trees, discussed in the previous section. For example, R1 defines
that the next router for the path to N4 is R2; R2 defines that the next router to N4 is
R3; R3 defines that there is no next router for this path. The tree is then R1 → R2 →
R3 →N4. 
A question often asked about the forwarding table is what the use of the third col-
umn is. The third column is not needed for forwarding the packet, but it is needed for
updating the forwarding table when there is a change in the route, as we will see shortly. 
RIP Implementation
RIP is implemented as a process that uses the service of UDP on the well-known port
number 520. In BSD, RIP is a daemon process (a process running in the background),
named routed (abbreviation for route daemon and pronounced route-dee). This means
that, although RIP is a routing protocol to help IP route its datagrams through the AS,
the RIP messages are encapsulated inside UDP user datagrams, which in turn are
encapsulated inside IP datagrams. In other words, RIP runs at the application layer, but
creates forwarding tables for IP at the network later.
RIP has gone through two versions: RIP-1 and RIP-2. The second version is
backward compatible with the first section; it allows the use of more information in
the RIP messages that were set to 0 in the first version. We discuss only RIP-2 in this
section. 
Figure 20.16
Forwarding tables 
Forwarding table for R1 
Forwarding table for R2 
Forwarding table for R3 
Destination
network
Next
router
N1

N2

R2
N3

R2
N4

N1

R1
N2

N3

R3
N4

Destination
network
Destination
network
Next
router
N1

R2
N2
R2

N3

N4

Cost in
hops
Next
router
Cost in
hops
Cost in
hops

CHAPTER 20
UNICAST ROUTING

RIP Messages
Two RIP processes, a client and a server, like any other processes, need to exchange
messages. RIP-2 defines the format of the message, as shown in Figure 20.17. Part of
the message, which we call entry, can be repeated as needed in a message. Each entry
carries the information related to one line in the forwarding table of the router that
sends the message. 
RIP has two types of messages: request and response. A request message is sent
by a router that has just come up or by a router that has some time-out entries. A
request message can ask about specific entries or all entries. A response (or update)
message can be either solicited or unsolicited. A solicited response message is sent
only in answer to a request message. It contains information about the destination
specified in the corresponding request message. An unsolicited response message, on
the other hand, is sent periodically, every 30 seconds or when there is a change in the
forwarding table. 
RIP Algorithm
RIP implements the same algorithm as the distance-vector routing algorithm we dis-
cussed in the previous section. However, some changes need to be made to the algo-
rithm to enable a router to update its forwarding table:
❑
Instead of sending only distance vectors, a router needs to send the whole contents
of its forwarding table in a response message. 
❑
The receiver adds one hop to each cost and changes the next router field to the
address of the sending router. We call each route in the modified forwarding
table the received route and each route in the old forwarding table the old route.
The received router selects the old routes as the new ones except in the following
three cases:
1. If the received route does not exist in the old forwarding table, it should be added
to the route. 
2. If the cost of the received route is lower than the cost of the old one, the received
route should be selected as the new one. 
3. If the cost of the received route is higher than the cost of the old one, but the
value of the next router is the same in both routes, the received route should be
selected as the new one. This is the case where the route was actually advertised
Figure 20.17
RIP message format

Fields
Network address
Distance
Com: Command, request (1), response (2)
Ver: Version, current version is 2
Family:  Family of protocol, for TCP/IP value is 2
Tag: Information about autonomous system
Network address: Destination address
Subnet mask: Prefix length
Next-hop address: Address length
Distance: Number of hops to the destination
Ver
Com
Reserved
Family
Tag
Subnet mask
Next-hop address
Entry
(repeated)

PART IV
NETWORK LAYER
by the same router in the past, but now the situation has been changed. For exam-
ple, suppose a neighbor has previously advertised a route to a destination with
cost 3, but now there is no path between this neighbor and that destination. The
neighbor advertises this destination with cost value infinity (16 in RIP). The
receiving router must not ignore this value even though its old route has a lower
cost to the same destination. 
❑
The new forwarding table needs to be sorted according to the destination route
(mostly using the longest prefix first). 
Example 20.1
Figure 20.18 shows a more realistic example of the operation of RIP in an autonomous system.
First, the figure shows all forwarding tables after all routers have been booted. Then we show
changes in some tables when some update messages have been exchanged. Finally, we show the
stabilized forwarding tables when there is no more change.       
Timers in RIP
RIP uses three timers to support its operation. The periodic timer controls the advertis-
ing of regular update messages. Each router has one periodic timer that is randomly set
to a number between 25 and 35 seconds (to prevent all routers sending their messages
at the same time and creating excess traffic). The timer counts down; when zero is
reached, the update message is sent, and the timer is randomly set once again. The expi-
ration timer governs the validity of a route. When a router receives update information
for a route, the expiration timer is set to 180 seconds for that particular route. Every
time a new update for the route is received, the timer is reset. If there is a problem on an
internet and no update is received within the allotted 180 seconds, the route is consid-
ered expired and the hop count of the route is set to 16, which means the destination is
unreachable. Every route has its own expiration timer. The garbage collection timer is
used to purge a route from the forwarding table. When the information about a route
becomes invalid, the router does not immediately purge that route from its table.
Instead, it continues to advertise the route with a metric value of 16. At the same time,
a garbage collection timer is set to 120 seconds for that route. When the count reaches
zero, the route is purged from the table. This timer allows neighbors to become aware
of the invalidity of a route prior to purging. 
Performance
Before ending this section, let us briefly discuss the performance of RIP: 
❑
Update Messages. The update messages in RIP have a very simple format and are
sent only to neighbors; they are local. They do not normally create traffic because
the routers try to avoid sending them at the same time.
❑
Convergence of Forwarding Tables. RIP uses the distance-vector algorithm, which
can converge slowly if the domain is large, but, since RIP allows only 15 hops in a
domain (16 is considered as infinity), there is normally no problem in convergence.
The only problems that may slow down convergence are count-to-infinity and
loops created in the domain; use of poison-reverse and split-horizon strategies
added to the RIP extension may alleviate the situation.

CHAPTER 20
UNICAST ROUTING

❑
Robustness. As we said before, distance-vector routing is based on the concept
that each router sends what it knows about the whole domain to its neighbors.
This means that the calculation of the forwarding table depends on information
received from immediate neighbors, which in turn receive their information from
their own neighbors. If there is a failure or corruption in one router, the problem
will be propagated to all routers and the forwarding in each router will be
affected. 
Figure 20.18
Example of an autonomous system using RIP
R2
R2
R1
R1
N1
N2
Forwarding tables
after all routers
booted
Changes in
the forwarding tables
of R1, R3, and R4
after they receive
a copy of R2’s table
Forwarding tables
for all routers
after they have
been stablized
N3
N4
N6
N5
R3
R3
R4
R4
Des.
Cost
N. R.

N4
R2

N6
New R3
Des.
Cost
N. R.

N4

N6
Old R3
Des.
Cost
N. R.

N4

N6
Des.
Cost
N. R.

N5

N6
Des.
Cost
N. R.

R2

N1
R2

N2
R2

N3
N4
R2

N5

N6
Des.
Cost
N. R.

N4

N3

N5
Des.
Cost
N. R.

N1

N2

N3
New R1
Des.
Cost
N. R.

N1

N2

N3
Old R1
Des.
Cost
N. R.

N1

N2

N3
Legend
Des.: Destination network
Cost: Cost in hops
: Old route
: New route
N. R.: Next router
Des.
Cost
N. R.

N4

N4
R2
R2 Seen by R1 
Des.
Cost
N. R.

N3
R2

N4
R2

N5
R2
R2 Seen by R3 
Des.
Cost
N. R.

N3
R2

N3
R2

N4
R2

N5
R2

N5
R2

N5
R2

N1
R2
R2

N2
R2

N3

N5

N6
Des.
Cost
N. R.

N4
R1

N1
R1

N2

N3

N5
R3

N6
Des.
Cost
N. R.
R2

N4

N1

N2

N3
R2

N5
R2

N6
New R4
Final R1
Final R2
Final R3
Final R4
Des.
Cost
N. R.

N4

N6
Old R4
Des.
Cost
N. R.

N5

N6
R2 Seen by R4 
Des.
Cost
N. R.

N3
R2

N3
R2

N4
R2

N5
R2

N5
R2

PART IV
NETWORK LAYER
20.3.3
Open Shortest Path First (OSPF)
Open Shortest Path First (OSPF) is also an intradomain routing protocol like RIP, but
it is based on the link-state routing protocol we described earlier in the chapter. OSPF is
an open protocol, which means that the specification is a public document. 
Metric
In OSPF, like RIP, the cost of reaching a destination from the host is calculated from
the source router to the destination network. However, each link (network) can be
assigned a weight based on the throughput, round-trip time, reliability, and so on. An
administration can also decide to use the hop count as the cost. An interesting point
about the cost in OSPF is that different service types (TOSs) can have different weights
as the cost. Figure 20.19 shows the idea of the cost from a router to the destination host
network. We can compare the figure with Figure 20.15 for the RIP. 
Forwarding Tables
Each OSPF router can create a forwarding table after finding the shortest-path tree
between itself and the destination using Dijkstra’s algorithm, described earlier in the
chapter. Figure 20.20 shows the forwarding tables for the simple AS in Figure 20.19.
Comparing the forwarding tables for the OSPF and RIP in the same AS, we find that
the only difference is the cost values. In other words, if we use the hop count for OSPF,
the tables will be exactly the same. The reason for this consistency is that both proto-
cols use the shortest-path trees to define the best route from a source to a destination. 
Areas
Compared with RIP, which is normally used in small ASs, OSPF was designed to be
able to handle routing in a small or large autonomous system. However, the formation
of shortest-path trees in OSPF requires that all routers flood the whole AS with their
LSPs to create the global LSDB. Although this may not create a problem in a small AS,
it may have created a huge volume of traffic in a large AS. To prevent this, the AS
needs to be divided into small sections called areas. Each area acts as a small indepen-
dent domain for flooding LSPs. In other words, OSPF uses another level of hierarchy in
routing: the first level is the autonomous system, the second is the area.
Figure 20.19
Metric in OSPF
Cost: 3
Cost: 5
Cost: 4
Cost: 4
R1 
R2 
R3 
N1
Total cost: 4
Total cost: 7
Total cost: 12
Source
N3
N4
N2
Destination

CHAPTER 20
UNICAST ROUTING

However, each router in an area needs to know the information about the link states
not only in its area but also in other areas. For this reason, one of the areas in the AS is
designated as the backbone area, responsible for gluing the areas together. The routers
in the backbone area are responsible for passing the information collected by each area
to all other areas. In this way, a router in an area can receive all LSPs generated in other
areas. For the purpose of communication, each area has an area identification. The area
identification of the backbone is zero. Figure 20.21 shows an autonomous system and
its areas.
Link-State Advertisement
OSPF is based on the link-state routing algorithm, which requires that a router adver-
tise the state of each link to all neighbors for the formation of the LSDB. When we dis-
cussed the link-state algorithm, we used the graph theory and assumed that each router
is a node and each network between two routers is an edge. The situation is different in
the real world, in which we need to advertise the existence of different entities as nodes,
the different types of links that connect each node to its neighbors, and the different
types of cost associated with each link. This means we need different types of adver-
tisements, each capable of advertising different situations. We can have five types of
Figure 20.20
Forwarding tables in OSPF
Figure 20.21
Areas in an autonomous system
Forwarding table for R1 
Forwarding table for R2 
Forwarding table for R3 
Destination
network
Next
router
N1

N2

R2
N3

R2
N4

N1

R1
N2

N3

R3
N4

Destination
network
Destination
network
Next
router
N1

R2
N2
R2

N3

N4

Cost
Next
router
Cost
Cost
Area 1
Area 0 (backbone)
Area 2
Autonomous System (AS)
AS boundary
router
Backbone
 router
WAN
WAN
LAN
LAN
LAN
LAN
LAN
LAN
LAN
WAN
Backbone
router
Area border
 router
Area border
 router
To other
ASs

PART IV
NETWORK LAYER
link-state advertisements: router link, network link, summary link to network, summary
link to AS border router, and external link. Figure 20.22 shows these five advertise-
ments and their uses.  
❑
Router link. A router link advertises the existence of a router as a node. In addi-
tion to giving the address of the announcing router, this type of advertisement can
define one or more types of links that connect the advertising router to other
entities. A transient link announces a link to a transient network, a network that is
connected to the rest of the networks by one or more routers. This type of
advertisement should define the address of the transient network and the cost of the
link. A stub link advertises a link to a stub network, a network that is not a through
network. Again, the advertisement should define the address of the network and
the cost. A point-to-point link should define the address of the router at the end of
the point-to-point line and the cost to get there. 
❑
Network link. A network link advertises the network as a node. However, since a
network cannot do announcements itself (it is a passive entity), one of the routers is
assigned as the designated router and does the advertising. In addition to the
address of the designated router, this type of LSP announces the IP address of all
routers (including the designated router as a router and not as speaker of the net-
work), but no cost is advertised because each router announces the cost to the net-
work when it sends a router link advertisement. 
❑
Summary link to network. This is done by an area border router; it advertises the
summary of links collected by the backbone to an area or the summary of links
Figure 20.22
Five different LSPs
a. Router link
b. Network link
c. Summary link to network
Area 1
Area 0
d. Summary link to AS
Area 0
e. External link
Area 0
Area border 
router
AS router
AS router
Transient
link
Network is advertised
by a designated router
Stub
link
Point-to-
point link

CHAPTER 20
UNICAST ROUTING

collected by the area to the backbone. As we discussed earlier, this type of infor-
mation exchange is needed to glue the areas together. 
❑
Summary link to AS. This is done by an AS router that advertises the summary
links from other ASs to the backbone area of the current AS, information which
later can be disseminated to the areas so that they will know about the networks in
other ASs. The need for this type of information exchange is better understood
when we discuss inter-AS routing (BGP). 
❑
External link. This is also done by an AS router to announce the existence of a sin-
gle network outside the AS to the backbone area to be disseminated into the areas. 
OSPF Implementation
OSPF is implemented as a program in the network layer, using the service of the IP for
propagation. An IP datagram that carries a message from OSPF sets the value of the
protocol field to 89. This means that, although OSPF is a routing protocol to help IP to
route its datagrams inside an AS, the OSPF messages are encapsulated inside data-
grams. OSPF has gone through two versions: version 1 and version 2. Most implemen-
tations use version 2. 
OSPF Messages
OSPF is a very complex protocol; it uses five different types of messages. In Fig-
ure 20.23, we first show the format of the OSPF common header (which is used in all
messages) and the link-state general header (which is used in some messages). We then
give the outlines of five message types used in OSPF. The hello message (type 1) is
used by a router to introduce itself to the neighbors and announce all neighbors that it
already knows. The database description message (type 2) is normally sent in response
to the hello message to allow a newly joined router to acquire the full LSDB. The link-
state request message (type 3) is sent by a router that needs information about a specific
LS. The link-state update message (type 4) is the main OSPF message used for build-
ing the LSDB. This message, in fact, has five different versions (router link, network
link, summary link to network, summary link to AS border router, and external link), as
we discussed before. The link-state acknowledgment message (type 5) is used to create
reliability in OSPF; each router that receives a link-state update message needs to
acknowledge it. 
Authentication
As Figure 20.23 shows, the OSPF common header has the provision for authentication
of the message sender. As we will discuss in Chapters 31 and 32, this prevents a mali-
cious entity from sending OSPF messages to a router and causing the router to become
part of the routing system to which it actually does not belong. 
OSPF Algorithm
OSPF implements the link-state routing algorithm we discussed in the previous section.
However, some changes and augmentations need to be added to the algorithm:
❑
After each router has created the shortest-path tree, the algorithm needs to use it to
create the corresponding routing algorithm. 

PART IV
NETWORK LAYER
❑
The algorithm needs to be augmented to handle sending and receiving all five
types of messages. 
Performance
Before ending this section, let us briefly discuss the performance of OSPF: 
❑
Update Messages. The link-state messages in OSPF have a somewhat complex
format. They also are flooded to the whole area. If the area is large, these messages
may create heavy traffic and use a lot of bandwidth. 
❑
Convergence of Forwarding Tables. When the flooding of LSPs is completed,
each router can create its own shortest-path tree and forwarding table; convergence
is fairly quick. However, each router needs to run Dijkstra’s algorithm, which may
take some time. 
Figure 20.23
OSPF message formats
Source router IP address
Area identification
Version
Type
Message length
Authentication
Checksum
Authentication type

Number of link-state advertisements
OSPF common header (Type: 4)
M
I
M
S
B
E
OSPF common header (Type: 2)
Message sequence number 
Rep.
Rep.
Rep.
Link-state type
Advertising router
Link-state ID
OSPF common header (Type: 3)
LS ID
LS sequence number
LS checksum
Length
Advertising router
LS age
T
E
LS type
OSPF common header (Type: 5)
OSPF common header
Link-state general header
Link-state general header
Link-state general header
Link-state general header
Link-state update
Link-state acknowledgment
Legend
Database description
Link-state request
Dead interval
Backup designated router IP address
Neighbor IP address
Designated router IP address
Hello  interval
T
E
E, T, B, I, M, MS: flags used by OSPF
Priority: used to define the designated router
Rep.: Repeated as required
Network mask
OSPF common header (Type: 1)
Priority
Hello message
Link-state advertisement
(Any combination of five different kinds)

CHAPTER 20
UNICAST ROUTING

❑
Robustness. The OSPF protocol is more robust than RIP because, after receiving
the completed LSDB, each router is independent and does not depend on other
routers in the area. Corruption or failure in one router does not affect other routers
as seriously as in RIP.   
20.3.4
Border Gateway Protocol Version 4 (BGP4)
The Border Gateway Protocol version 4 (BGP4) is the only interdomain routing pro-
tocol used in the Internet today. BGP4 is based on the path-vector algorithm we
described before, but it is tailored to provide information about the reachability of net-
works in the Internet. 
Introduction
BGP, and in particular BGP4, is a complex protocol. In this section, we introduce the
basics of BGP and its relationship with intradomain routing protocols (RIP or OSPF).
Figure 20.24 shows an example of an internet with four autonomous systems. AS2,
AS3, and AS4 are stub autonomous systems; AS1 is a transient one. In our example,
data exchange between AS2, AS3, and AS4 should pass through AS1.
Each autonomous system in this figure uses one of the two common intradomain
protocols, RIP or OSPF. Each router in each AS knows how to reach a network that is
in its own AS, but it does not know how to reach a network in another AS. 
To enable each router to route a packet to any network in the internet, we first
install a variation of BGP4, called external BGP (eBGP), on each border router (the
one at the edge of each AS which is connected to a router at another AS). We then
install the second variation of BGP, called internal BGP (iBGP), on all routers. This
means that the border routers will be running three routing protocols (intradomain,
eBGP, and iBGP), but other routers are running two protocols (intradomain and iBGP).
We discuss the effect of each BGP variation separately.
Figure 20.24
A sample internet with four ASs
N1
N4
N5
N6
N7
N3
N2
AS2
AS1
R1
R2
R4
R5
R6
R7
R8
R9
R3
N9
N8
N10
N11
N12
N13
N14
N15
AS3
AS4
Legend
Router
LAN
Point-to-point WAN

PART IV
NETWORK LAYER
Operation of External BGP (eBGP)
We can say that BGP is a kind of point-to-point protocol. When the software is installed
on two routers, they try to create a TCP connection using the well-known port 179. In
other words, a pair of client and server processes continuously communicate with each
other to exchange messages. The two routers that run the BGP processes are called
BGP peers or BGP speakers. We discuss different types of messages exchanged
between two peers, but for the moment we are interested in only the update messages
(discussed later) that announce reachability of networks in each AS. 
The eBGP variation of BGP allows two physically connected border routers in two
different ASs to form pairs of eBGP speakers and exchange messages. The routers that
are eligible in our example in Figure 20.24 form three pairs: R1-R5, R2-R6, and R4-
R9. The connection between these pairs is established over three physical WANs (N5,
N6, and N7). However, there is a need for a logical TCP connection to be created over
the physical connection to make the exchange of information possible. Each logical
connection in BGP parlance is referred to as a session. This means that we need three
sessions in our example, as shown in Figure 20.25. 
The figure also shows the simplified update messages sent by routers involved in
the eBGP sessions. The circled number defines the sending router in each case. For
example, message number 1 is sent by router R1 and tells router R5 that N1, N2, N3,
and N4 can be reached through router R1 (R1 gets this information from the corre-
sponding intradomain forwarding table). Router R5 can now add these pieces of
information at the end of its forwarding table. When R5 receives any packet destined
for these four networks, it can use its forwarding table and find that the next router is R1. 
The reader may have noticed that the messages exchanged during three eBGP ses-
sions help some routers know how to route packets to some networks in the internet, but
Figure 20.25
eBGP operation
N1
N4
N3
N2
N5
N6
N7
AS2
eBGP
session
eBGP
session
eBGP
session
AS1
R1
R2
R4
R5
R6
R7
R8
R9
R3
N9
N8
N10
N11
N12
N13
N14
N15
AS3
AS4
Legend
Router
LAN
Point-to-point WAN
eBGP session

Networks
AS
Next
N1, N2, N3, N4
R1 AS1
R5 AS2
N8, N9

Networks
AS
Next
N1, N2, N3, N4
R2 AS1
R6 AS3
N10, N11, N12

Networks
AS
Next
N1, N2, N3, N4
R4 AS1
R9 AS4
N13, N14, N15

CHAPTER 20
UNICAST ROUTING

the reachability information is not complete. There are two problems that need to be
addressed:
1. Some border routers do not know how to route a packet destined for nonneighbor
ASs. For example, R5 does not know how to route packets destined for networks in
AS3 and AS4. Routers R6 and R9 are in the same situation as R5: R6 does not know
about networks in AS2 and AS4; R9 does not know about networks in AS2 and AS3. 
2. None of the nonborder routers know how to route a packet destined for any net-
works in other ASs. 
To address the above two problems, we need to allow all pairs of routers (border or
nonborder) to run the second variation of the BGP protocol, iBGP. 
Operation of Internal BGP (iBGP)
The iBGP protocol is similar to the eBGP protocol in that it uses the service of TCP on
the well-known port 179, but it creates a session between any possible pair of routers
inside an autonomous system. However, some points should be made clear. First, if an AS
has only one router, there cannot be an iBGP session. For example, we cannot create an
iBGP session inside AS2 or AS4 in our internet. Second, if there are n routers in an auton-
omous system, there should be [n × (n − 1) / 2] iBGP sessions in that autonomous system
(a fully connected mesh) to prevent loops in the system. In other words, each router needs
to advertise its own reachability to the peer in the session instead of flooding what it
receives from another peer in another session. Figure 20.26 shows the combination of
eBGP and iBGP sessions in our internet. 
Note that we have not shown the physical networks inside ASs because a session
is made on an overlay network (TCP connection), possibly spanning more than one
physical network as determined by the route dictated by intradomain routing protocol.
Also note that in this stage only four messages are exchanged. The first message (num-
bered 1) is sent by R1 announcing that networks N8 and N9 are reachable through the
Figure 20.26
Combination of eBGP and iBGP sessions in our internet
AS2
AS1
R1
R2
R4
R6
R7
R8
R9
R3
AS3
AS4
Legend
Router
iBGP session
eBGP session

R4 AS1, AS4
N13, N14, N15

22 2

AS1, AS2
N8, N9
R1

N1, N2, N3, N4
R6 AS3, AS1
R2 AS1, AS3
N10, N11, N12

Networks Next
Networks
Networks
Networks
AS
AS
AS
AS
Next
Next
Next
R5

PART IV
NETWORK LAYER
path AS1-AS2, but the next router is R1. This message is sent, through separate ses-
sions, to R2, R3, and R4. Routers R2, R4, and R6 do the same thing but send different
messages to different destinations. The interesting point is that, at this stage, R3, R7,
and R8 create sessions with their peers, but they actually have no message to send. 
The updating process does not stop here. For example, after R1 receives the update
message from R2, it combines the reachability information about AS3 with the reach-
ability information it already knows about AS1 and sends a new update message to R5.
Now R5 knows how to reach networks in AS1 and AS3. The process continues when R1
receives the update message from R4. The point is that we need to make certain that at a
point in time there are no changes in the previous updates and that all information is
propagated through all ASs. At this time, each router combines the information received
from eBGP and iBGP and creates what we may call a path table after applying the crite-
ria for finding the best path, including routing policies that we discuss later. To demon-
strate, we show the path tables in Figure 20.27 for the routers in Figure 20.24. For
example, router R1 now knows that any packet destined for networks N8 or N9 should
go through AS1 and AS2 and the next router to deliver the packet to is router R5. Simi-
larly, router R4 knows that any packet destined for networks N10, N11, or N12 should
go through AS1 and AS3 and the next router to deliver this packet to is router R1, and
so on.
Injection of Information into Intradomain Routing
The role of an interdomain routing protocol such as BGP is to help the routers inside the
AS to augment their routing information. In other words, the path tables collected and
organized by BPG are not used, per se, for routing packets; they are injected into intrado-
main forwarding tables (RIP or OSPF) for routing packets. This can be done in several
ways depending on the type of AS.
In the case of a stub AS, the only area border router adds a default entry at the end
of its forwarding table and defines the next router to be the speaker router at the end of
the eBGP connection. In Figure 20.24, R5 in AS2 defines R1 as the default router for
Figure 20.27
Finalized BGP path tables
Path table for R4
Path
AS1, AS2
AS1, AS3
AS1, AS4
Networks
N13, N14, N15
N8, N9
N10, N11, N12
Next
R1
R1
R9
Path table for R1
Networks
Path
AS1, AS2
AS1, AS3
AS1, AS4
N13, N14, N15
N8, N9
N10, N11, N12
Next
R5
R2
R4
Path table for R5
N1, N2, N3, N4
N10, N11, N12
N13, N14, N15
Networks
AS2, AS1
AS2, AS1, AS3
AS2, AS1, AS4
Path
R1
R1
R1
Next
Path table for R3
N13, N14, N15
N8, N9
N10, N11, N12
R2
R2
R4
Networks
AS1, AS2
AS1, AS3
AS1, AS4
Path
Next
Path table for R6
N1, N2, N3, N4
N13, N14, N15
N8, N9
Networks
AS3, AS1, AS2
AS3, AS1, AS4
AS3, AS1
Path
R2
R2
R2
Next
Path table for R9
AS4, AS1
AS4, AS1, AS2
AS4, AS1, AS3
Path
R4
R4
R4
Next
N1, N2, N3, N4
N10, N11, N12
N8, N9
Networks
Path table for R7
Path
AS3, AS1
AS3, AS1, AS2
AS3, AS1, AS4
N1, N2, N3, N4
N13, N14, N15
N8, N9
Networks
Next
R6
R6
R6
Path table for R8
AS3, AS1
AS3, AS1, AS2
AS3, AS1, AS4
Path
N1, N2, N3, N4
N13, N14, N15
N8, N9
Networks
Next
R6
R6
R6
Path table for R2
N13, N14, N15
N8, N9
N10, N11, N12
Networks
AS1, AS2
AS1, AS3
AS1, AS4
Path
R1
R1
Next
R6

CHAPTER 20
UNICAST ROUTING

all networks other than N8 and N9. The situation is the same for router R9 in AS4 with
the default router to be R4. In AS3, R6 set its default router to be R2, but R7 and R8 set
their default router to be R6. These settings are in accordance with the path tables we
describe in Figure 20.27 for these routers. In other words, the path tables are injected
into intradomain forwarding tables by adding only one default entry. 
In the case of a transient AS, the situation is more complicated. R1 in AS1 needs to
inject the whole contents of the path table for R1 in Figure 20.27 into its intradomain
forwarding table. The situation is the same for R2, R3, and R4. 
One issue to be resolved is the cost value. We know that RIP and OSPF use differ-
ent metrics. One solution, which is very common, is to set the cost to the foreign net-
works at the same cost value as to reach the first AS in the path. For example, the cost
for R5 to reach all networks in other ASs is the cost to reach N5. The cost for R1 to
reach networks N10 to N12 is the cost to reach N6, and so on. The cost is taken from
the intradomain forwarding tables (RIP or OSPF).   
 Figure 20.28 shows the interdomain forwarding tables. For simplicity, we assume
that all ASs are using RIP as the intradomain routing protocol. The shaded areas are the
augmentation injected by the BGP protocol; the default destinations are indicated as zero.  
Address Aggregation
The reader may have realized that intradomain forwarding tables obtained with the help
of the BGP4 protocols may become huge in the case of the global Internet because
many destination networks may be included in a forwarding table. Fortunately, BGP4
uses the prefixes as destination identifiers and allows the aggregation of these prefixes,
as we discussed in Chapter 18. For example, prefixes 14.18.20.0/26, 14.18.20.64/26,
14.18.20.128/26, and 14.18.20.192/26, can be combined into 14.18.20.0/24 if all four
Figure 20.28
Forwarding tables after injection from BGP
Table for R5 

N8

N9

R1
Table for R9 

N13

N14

N15

R4
Table for R6 

N10

N11

N12

R2
R7
Table for R7 

N10

N11

N12

R6
R6
N4
N8
N9
N10
N11
N12
N13
N14
N15

N1

Table for R1 
Des.
Next Cost
Des.
Next Cost
Des.
Next Cost
Des.
Next Cost
Des.
Next Cost
Des.
Next Cost
Des.
Next Cost
Des.
Next Cost
Des.
Next Cost
R4
R5
R5
R2
R2
R2
R4
R4
R4

Table for R2 
N1
N4
N8
N9
N10
N11
N12
N13
N14
N15
R3
R1
R1
R6
R6
R6
R3
R3
R3
Table for R8 

N10

N11

N12

R6
R6
Table for R3 

N1

N4

N8

N9

N10

N11

N12

N13

N14

N15
R2
R2
R2
R2
R2
R4
R4
R4
R2
Table for R4 

N1

N4

N8

N9

N10

N11

N12

N13

N14

N15
R1
R1
R3
R3
R3
R9
R9
R9
R1

PART IV
NETWORK LAYER
subnets can be reached through one path. Even if one or two of the aggregated prefixes
need a separate path, the longest prefix principle we discussed earlier allows us to
do so. 
Path Attributes 
In both intradomain routing protocols (RIP or OSPF), a destination is normally associated
with two pieces of information: next hop and cost. The first one shows the address of the
next router to deliver the packet; the second defines the cost to the final destination. Inter-
domain routing is more involved and naturally needs more information about how to
reach the final destination. In BGP these pieces are called path attributes. BGP allows a
destination to be associated with up to seven path attributes. Path attributes are divided
into two broad categories: well-known and optional. A well-known attribute must be
recognized by all routers; an optional attribute need not be. A well-known attribute
can be mandatory, which means that it must be present in any BGP update message, or
discretionary, which means it does not have to be. An optional attribute can be either tran-
sitive, which means it can pass to the next AS, or intransitive, which means it cannot. All
attributes are inserted after the corresponding destination prefix in an update message
(discussed later). The format for an attribute is shown in Figure 20.29.  
The first byte in each attribute defines the four attribute flags (as shown in the fig-
ure). The next byte defines the type of attributes assigned by ICANN (only seven types
have been assigned, as explained next). The attribute value length defines the length of
the attribute value field (not the length of the whole attributes section). The following
gives a brief description of each attribute. 
❑
ORIGIN (type 1). This is a well-known mandatory attribute, which defines the
source of the routing information. This attribute can be defined by one of the
three values: 1, 2, and 3. Value 1 means that the information about the path has
been taken from an intradomain protocol (RIP or OSPF). Value 2 means that the
information comes from BGP. Value 3 means that it comes from an unknown
source. 
❑
AS-PATH (type 2). This is a well-known mandatory attribute, which defines the
list of autonomous systems through which the destination can be reached. We have
used this attribute in our examples. The AS-PATH attribute, as we discussed in
path-vector routing in the last section, helps prevent a loop. Whenever an update
Figure 20.29
Format of path attribute
O: Optional bit (set if attribute is optional)
P: Partial bit (set if an optional attribute is
    lost in transit)
T: Transitive bit (set if attribute is transitive)
E: Extended bit (set if attribute length is two bytes)

Attribute type
Attribute value length
All 0s
O
T
P
E
Attribute value (variable length)

CHAPTER 20
UNICAST ROUTING

message arrives at a router that lists the current AS as the path, the router drops
that path. The AS-PATH can also be used in route selection. 
❑
NEXT-HOP (type 3). This is a well-known mandatory attribute, which defines the
next router to which the data packet should be forwarded. We have also used this
attribute in our examples. As we have seen, this attribute helps to inject path
information collected through the operations of eBGP and iBGP into the intrado-
main routing protocols such as RIP or OSPF. 
❑
MULT-EXIT-DISC (type 4). The multiple-exit discriminator is an optional intran-
sitive attribute, which discriminates among multiple exit paths to a destination. The
value of this attribute is normally defined by the metric in the corresponding intra-
domain protocol (an attribute value of 4-byte unsigned integer). For example, if a
router has multiple paths to the destination with different values related to these
attributes, the one with the lowest value is selected. Note that this attribute is
intransitive, which means that it is not propagated from one AS to another.   
❑
LOCAL-PREF (type 5). The local preference attribute is a well-known discretion-
ary attribute. It is normally set by the administrator, based on the organization pol-
icy. The routes the administrator prefers are given a higher local preference value
(an attribute value of 4-byte unsigned integer). For example, in an internet with
five ASs, the administrator of AS1 can set the local preference value of 400 to the
path AS1 →AS2 →AS5, the value of 300 to AS1 →AS3 →AS5, and the value
of 50 to AS1 →AS4 →AS5. This means that the administrator prefers the first
path to the second one and prefers the second one to the third one. This may be a
case where AS2 is the most secured and AS4 is the least secured AS for the admin-
istration of AS1. The last route should be selected if the other two are not
available.     
❑
ATOMIC-AGGREGATE (type 6). This is a well-known discretionary attribute,
which defines the destination prefix as not aggregate; it only defines a single desti-
nation network. This attribute has no value field, which means the value of the
length field is zero. 
❑
AGGREGATOR (type 7). This is an optional transitive attribute, which emphasizes
that the destination prefix is an aggregate. The attribute value gives the number of the
last AS that did the aggregation followed by the IP address of the router that did so.
Route Selection
So far in this section, we have been silent about how a route is selected by a BGP router
mostly because our simple example has one route to a destination. In the case where
multiple routes are received to a destination, BGP needs to select one among them. The
route selection process in BGP is not as easy as the ones in the intradomain routing pro-
tocol that is based on the shortest-path tree. A route in BGP has some attributes
attached to it and it may come from an eBGP session or an iBGP session. Figure 20.30
shows the flow diagram as used by common implementations.
The router extracts the routes which meet the criteria in each step. If only one route
is extracted, it is selected and the process stops; otherwise, the process continues with
the next step. Note that the first choice is related to the LOCAL-PREF attribute, which
reflects the policy imposed by the administration on the route.   

PART IV
NETWORK LAYER
Messages
BGP uses four types of messages for communication between the BGP speakers across
the ASs and inside an AS: open, update, keepalive, and notification (see Figure 20.31).
All BGP packets share the same common header. 
❑
Open Message. To create a neighborhood relationship, a router running BGP
opens a TCP connection with a neighbor and sends an open message. 
❑
Update Message. The update message is the heart of the BGP protocol. It is used
by a router to withdraw destinations that have been advertised previously, to
announce a route to a new destination, or both. Note that BGP can withdraw sev-
eral destinations that were advertised before, but it can only advertise one new des-
tination (or multiple destinations with the same path attributes) in a single update
message. 
❑
Keepalive Message. The BGP peers that are running exchange keepalive messages
regularly (before their hold time expires) to tell each other that they are alive. 
❑
Notification. A notification message is sent by a router whenever an error condi-
tion is detected or a router wants to close the session. 
Performance
BGP performance can be compared with RIP. BGP speakers exchange a lot of mes-
sages to create forwarding tables, but BGP is free from loops and count-to-infinity. The
same weakness we mention for RIP about propagation of failure and corruption also
exists in BGP. 
Figure 20.30
Flow diagram for route selection

1: Only one route found
M: Multiple routes found

M
M
Any
 external
route
M
Start
Route 
selected
(stop)
Route selected
(stop)
Route 
selected
(stop)
Route 
selected
(stop)
Legend
 Find routes
with highest 
LOCAL-PREF
Find routes
with shortest 
AS-PATH
Find external route
with lowest BGP
 identifier
Find internal route
 with lowest BGP
 identifier
Find routes 
with lowest 
MULTI-EXIT-
DISC
Find routes
with least cost 
NEXT-HOP

All
internal 
routes
Route 
selected
(stop)

CHAPTER 20
UNICAST ROUTING

20.4
END-CHAPTER MATERIALS
20.4.1
Recommended Reading
Books
Several books give thorough coverage of materials discussed in this chapter. We recom-
mend [Com 06], [Tan 03], [Koz 05], [Ste 95], [GW 04], [Per 00], [Kes 02], [Moy 98],
[WZ 01], and [Los 04].
RFCs
RIP is discussed in RFCs 1058 and 2453. OSPF is discussed in RFCs 1583 and 2328.
BGP is discussed in RFCs 1654, 1771, 1773, 1997, 2439, 2918, and 3392.
20.4.2
Key Terms
Figure 20.31
BGP messages
Length
Type
Marker: Reserved for authentication
Length: Length of total message in bytes
Type: Type of message (1 to 4)
O len: Option length
EC: Error code
ES: Error subcode
UR len: Unfeasible route length
PA len: Path attribute length
Length
Type
My autonomous system
Hold time
BGP identifier
O len
Version
Option
(Variable length)
Open message (type 1)
PA len
UR len
Withdrawn routes
(Variable length)
Marker
(16 bytes)
Marker
(16 bytes)
Path attributes
(Variable length)
Network-layer reachability information
(Variable length)
Update message (type 2)
Fields in common header
Abbreviations
Keepalive message (type 4)
Length
Type
EC
Error data
(Variable length)
Notification message (type 3)
ES

Marker
(16 bytes)
Marker
(16 bytes)
Length
Type
UR len
autonomous system (AS)
Bellman-Ford
Border Gateway Protocol version 4 (BGP4)
Dijkstra’s algorithm
distance vector
distance-vector (DV) routing
flooding
least-cost tree

CHAPTER 21
MULTICAST ROUTING

Figure 21.12 shows how pruning in RPM lets only networks with group members
receive a copy of the packet unless they are in the path to a network with a member. 
21.3.2
Multicast Link State (MOSPF)
Multicast Open Shortest Path First (MOSPF) is the extension of the Open Shortest
Path First (OSPF) protocol, which is used in unicast routing. It also uses the source-
based tree approach to multicasting. If the internet is running a unicast link-state
routing algorithm, the idea can be extended to provide a multicast link-state routing
algorithm. Recall that in unicast link-state routing, each router in the internet has a
link-state database (LSDB) that can be used to create a shortest-path tree. To extend
unicasting to multicasting, each router needs to have another database, as with the
case of unicast distance-vector routing, to show which interface has an active member
in a particular group. Now a router goes through the following steps to forward a
multicast packet received from source S and to be sent to destination G (a group of
recipients):
1. The router uses the Dijkstra algorithm to create a shortest-path tree with S as the
root and all destinations in the internet as the leaves. Note that this shortest-path
tree is different from the one the router normally uses for unicast forwarding, in
which the root of the tree is the router itself. In this case, the root of the tree is the
source of the packet defined in the source address of the packet. The router is capable
of creating this tree because it has the LSDB, the whole topology of the internet; the
Dijkstra algorithm can be used to create a tree with any root, no matter which
router is using it. The point we need to remember is that the shortest-path tree cre-
ated this way depends on the specific source. For each source we need to create a
different tree.
2. The router finds itself in the shortest-path tree created in the first step. In other
words, the router creates a shortest-path subtree with itself as the root of the subtree. 
3. The shortest-path subtree is actually a broadcast subtree with the router as the root
and all networks as the leaves. The router now uses a strategy similar to the one we
Figure 21.12
RPB versus RPM
G1
b. Using  RPM, only members receive a copy.
A
designated
parent
router
G1
G1
G1
Shortest
path
a. Using  RPB, all networks receive a copy.
A
designated
parent
router
G1
G1
Shortest
path
Packet received from the source  
Copy of packet propagated  

PART IV
NETWORK LAYER
describe in the case of DVMRP to prune the broadcast tree and to change it to a
multicast tree. The IGMP protocol is used to find the information at the leaf level.
MOSPF has added a new type of link state update packet that floods the member-
ship to all routers. The router can use the information it receives in this way and
prune the broadcast tree to make the multicast tree. 
4. The router can now forward the received packet out of only those interfaces that
correspond to the branches of the multicast tree. We need to make certain that a
copy of the multicast packet reaches all networks that have active members of the
group and that it does not reach those networks that do not. 
Figure 21.13 shows an example of using the steps to change a graph to a multicast tree.
For simplicity, we have not shown the network, but we added the groups to each router.
The figure shows how a source-based tree is made with the source as the root and
changed to a multicast subtree with the root at the current router.  
21.3.3
Protocol Independent Multicast (PIM)
Protocol Independent Multicast (PIM) is the name given to a common protocol that
needs a unicast routing protocol for its operation, but the unicast protocol can be either
a distance-vector protocol or a link-state protocol. In other words, PIM needs to use the
forwarding table of a unicast routing protocol to find the next router in a path to the
destination, but it does not matter how the forwarding table is created. PIM has another
interesting feature: it can work in two different modes: dense and sparse. The term
dense here means that the number of active members of a group in the internet is large;
the probability that a router has a member in a group is high. This may happen, for
example, in a popular teleconference that has a lot of members. The term sparse, on the
other hand, means that only a few routers in the internet have active members in the
group; the probability that a router has a member of the group is low. This may happen,
for example, in a very technical teleconference where a number of members are spread
Figure 21.13
Example of tree formation in MOSPF
b. S-G1 shortest-path tree 
a. An internet with some active groups
Forwarding table 
for current router
c. S-G1 subtree seen by current router
d. S-G1 pruned subtree
Group-Source
S, G1
...
...
m2
Interface
G2, G3 
G1, G2 
G2 
G2
G2, G3 
G1

G1
S
Current 
router
G1
G1
G1
m2
m3
m1
Current
router
G1
G1
m2
m1
Current 
router
G1
m2
G1

CHAPTER 21
MULTICAST ROUTING

somewhere in the internet. When the protocol is working in the dense mode, it is
referred to as PIM-DM; when it is working in the sparse mode, it is referred to as PIM-
SM. We explain both protocols next. 
Protocol Independent Multicast-Dense Mode (PIM-DM)
When the number of routers with attached members is large relative to the number of
routers in the internet, PIM works in the dense mode and is called PIM-DM. In this
mode, the protocol uses a source-based tree approach and is similar to DVMRP, but
simpler. PIM-DM uses only two strategies described in DVMRP: RPF and RPM. But
unlike DVMRP, forwarding of a packet is not suspended awaiting pruning of the first
subtree. Let us explain the two steps used in PIM-DM to clear the matter. 
1. A router that has received a multicast packet from the source S destined for the group
G first uses the RPF strategy to avoid receiving a duplicate of the packet. It consults
the forwarding table of the underlying unicast protocol to find the next router if it
wants to send a message to the source S (in the reverse direction). If the packet has not
arrived from the next router in the reverse direction, it drops the packet and sends a
prune message in that direction to prevent receiving future packets related to (S, G). 
2. If the packet in the first step has arrived from the next router in the reverse direction,
the receiving router forwards the packet from all its interfaces except the one from
which the packet has arrived and the interface from which it has already received a
prune message related to (S, G). Note that this is actually a broadcasting instead of a
multicasting if the packet is the first packet from the source S to group G. However,
each router downstream that receives an unwanted packet sends a prune message to
the router upstream, and eventually the broadcasting is changed to multicasting. Note
that DVMRP behaves differently: it requires that the prune messages (which are part
of DV packets) arrive and the tree is pruned before sending any message through
unpruned interfaces. PIM-DM does not care about this precaution because it assumes
that most routers have an interest in the group (the idea of the dense mode). 
Figure 21.14 shows the idea behind PIM-DM. The first packet is broadcast to all net-
works, which have or do not have members. After a prune message arrives from a
router with no member, the second packet is only multicast.  
Protocol Independent Multicast-Sparse Mode (PIM-SM)
When the number of routers with attached members is small relative to the number of
routers in the internet, PIM works in the sparse mode and is called PIM-SM. In this
environment, the use of a protocol that broadcasts the packets until the tree is pruned is
not justified; PIM-SM uses a group-shared tree approach to multicasting. The core
router in PIM-SM is called the rendezvous point (RP). Multicast communication is
achieved in two steps. Any router that has a multicast packet to send to a group of des-
tinations first encapsulates the multicast packet in a unicast packet (tunneling) and
sends it to the RP. The RP then decapsulates the unicast packet and sends the multicast
packet to its destination. 
 PIM-SM uses a complex algorithm to select one router among all routers in the
internet as the RP for a specific group. This means that if we have m active groups, we
need m RPs, although a router may serve more than one group. After the RP for each

PART IV
NETWORK LAYER
group is selected, each router creates a database and stores the group identifier and the
IP address of the RP for tunneling multicast packets to it. 
PIM-SM uses a spanning multicast tree rooted at the RP with leaves pointing to
designated routers connected to each network with an active member. A very interest-
ing point in PIM-SM is the formation of the multicast tree for a group. The idea is that
each router helps to create the tree. The router should know the unique interface from
which it should accept a multicast packet destined for a group (what was achieved by
RPF in DVMRP). The router should also know the interface or interfaces from which it
should send out a multicast packet destined for a group (what was achieved by RPM in
DVMRP). To avoid delivering more than one copy of the same packet to a network
through several routers (what was achieved by RPB in DVMRP), PIM-SM requires that
only designated routers send PIM-SM messages, as we will see shortly.
To create a multicast tree rooted at the RP, PIM-SM uses join and prune messages.
Figure 21.15 shows the operation of join and prune messages in PIM-SM. First, three
networks join group G1 and form a multicast tree. Later, one of the networks leaves the
group and the tree is pruned. 
 The join message is used to add possible new branches to the tree; the prune mes-
sage is used to cut branches that are not needed. When a designated router finds out
that a network has a new member in the corresponding group (via IGMP), it sends a
join message in a unicast packet destined for the RP. The packet travels through the uni-
cast shortest-path tree to reach the RP. Any router in the path receives and forwards the
packet, but at the same time, the router adds two pieces of information to its multicast
forwarding table. The number of the interface through which the join message has
arrived is marked (if not already marked) as one of the interfaces through which the
multicast packet destined for the group should be sent out in the future. The router also
adds a count to the number of join messages received here, as we discuss shortly. The
number of the interface through which the join message was sent to the RP is marked
(if not already marked) as the only interface through which the multicast packet des-
tined for the same group should be received. In this way, the first join message sent by a
Figure 21.14
Idea behind PIM-DM
b. Second packet is multicast.
a. First packet is broadcast.
G1
G1
G1
G1
Shortest
path
G1
G1
G1
G1
G1
Shortest
path
G1

CHAPTER 21
MULTICAST ROUTING

designated router creates a path from the RP to one of the networks with group
members. 
To avoid sending multicast packets to networks with no members, PIM-SM uses
the prune message. Each designated router that finds out (via IGMP) that there is no
active member in its network, sends a prune message to the RP. When a router receives
a prune message, it decrements the join count for the interface through which the mes-
sage has arrived and forwards it to the next router. When the join count for an interface
reaches zero, that interface is not part of the multicast tree anymore. 
21.4
INTERDOMAIN MULTICAST PROTOCOLS
The three protocols we discussed for multicast routing, DVMRP, MOSPF, and PIM, are
designed to provide multicast communication inside an autonomous system. When the
members of the groups are spread among different domains (ASs), we need an
interdomain multicast routing protocol.
One common protocol for interdomain multicast routing is called Multicast Border
Gateway Protocol (MBGP), which is the extension of BGP we discussed for interdo-
main unicast routing. MBGP provides two paths between ASs: one for unicasting and
Figure 21.15
Idea behind PIM-SM
a. Three networks join group G1
b. Multicast tree after joins
RP
Join message
G1
G1
G1
RP
c. One network leaves group G1
d. Multicast tree after pruning
RP
Prune message
G1
G1
G1
RP

---

## Module 4 Textbook

PART V
TRANSPORT LAYER
23.1
INTRODUCTION
The transport layer is located between the application layer and the network layer. It
provides a process-to-process communication between two application layers, one at
the local host and the other at the remote host. Communication is provided using a log-
ical connection, which means that the two application layers, which can be located in
different parts of the globe, assume that there is an imaginary direct connection through
which they can send and receive messages. Figure 23.1 shows the idea behind this log-
ical connection. 
The figure shows the same scenario we used in Chapter 3 for the physical layer
(Figure 3.1). Alice’s host in the Sky Research company creates a logical connection
with Bob’s host in the Scientific Books company at the transport layer. The two compa-
Figure 23.1
Logical connection at the transport layer
Legend
Alice
Sky Research
Scientific Books
Logical Connection
Alice
Point-to-point WAN
LAN switch
Router
WAN switch
R1
R2
R3
R4
To other
ISPs
To other
ISPs
R5
R6
R7
Bob
Bob
National ISP
Switched
WAN
ISP
Application
Transport
Network
Data-link
Physical
Application
Transport
Network
Data-link
Physical
To other
ISPs
I
II
III
MODULE 4

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

nies communicate at the transport layer as though there is a real connection between
them. Figure 23.1 shows that only the two end systems (Alice’s and Bob’s computers)
use the services of the transport layer; all intermediate routers use only the first three
layers. 
23.1.1
Transport-Layer Services
As we discussed in Chapter 2, the transport layer is located between the network layer and
the application layer. The transport layer is responsible for providing services to the
application layer; it receives services from the network layer. In this section, we discuss
the services that can be provided by the transport layer; in the next section, we discuss
several transport-layer protocols. 
Process-to-Process Communication  
The first duty of a transport-layer protocol is to provide process-to-process communi-
cation. A process is an application-layer entity (running program) that uses the services
of the transport layer. Before we discuss how process-to-process communication can be
accomplished, we need to understand the difference between host-to-host communica-
tion and process-to-process communication.
The network layer (discussed in Chapters 18 to 22) is responsible for communica-
tion at the computer level (host-to-host communication). A network-layer protocol can
deliver the message only to the destination computer. However, this is an incomplete
delivery. The message still needs to be handed to the correct process. This is where a
transport-layer protocol takes over. A transport-layer protocol is responsible for deliv-
ery of the message to the appropriate process. Figure 23.2 shows the domains of a net-
work layer and a transport layer.
Addressing: Port Numbers
Although there are a few ways to achieve process-to-process communication, the most
common is through the client-server paradigm (see Chapter 25). A process on the
local host, called a client, needs services from a process usually on the remote host,
called a server. 
Figure 23.2
Network layer versus transport layer
Domain of network-layer protocol
Domain of transport-layer protocol
Processes
Client
Server
Processes
Internet

PART V
TRANSPORT LAYER
However, operating systems today support both multiuser and multiprogramming
environments. A remote computer can run several server programs at the same time,
just as several local computers can run one or more client programs at the same time.
For communication, we must define the local host, local process, remote host, and
remote process. The local host and the remote host are defined using IP addresses (dis-
cussed in Chapter 18). To define the processes, we need second identifiers, called port
numbers. In the TCP/IP protocol suite, the port numbers are integers between 0 and
65,535 (16 bits).
The client program defines itself with a port number, called the ephemeral port
number. The word ephemeral means “short-lived” and is used because the life of a cli-
ent is normally short. An ephemeral port number is recommended to be greater than
1023 for some client/server programs to work properly.
The server process must also define itself with a port number. This port number,
however, cannot be chosen randomly. If the computer at the server site runs a server pro-
cess and assigns a random number as the port number, the process at the client site that
wants to access that server and use its services will not know the port number. Of course,
one solution would be to send a special packet and request the port number of a specific
server, but this creates more overhead. TCP/IP has decided to use universal port numbers
for servers; these are called well-known port numbers. There are some exceptions to this
rule; for example, there are clients that are assigned well-known port numbers. Every cli-
ent process knows the well-known port number of the corresponding server process. For
example, while the daytime client process, a well-known client program, can use an
ephemeral (temporary) port number, 52,000, to identify itself, the daytime server process
must use the well-known (permanent) port number 13. Figure 23.3 shows this concept.
It should be clear by now that the IP addresses and port numbers play different
roles in selecting the final destination of data. The destination IP address defines the
host among the different hosts in the world. After the host has been selected, the port
number defines one of the processes on this particular host (see Figure 23.4).
Figure 23.3
Port numbers
Transport 
layer
Daytime
client
52,000
Daytime
server

Transport 
layer
52,000

Data
52,000

Data

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

ICANN Ranges
ICANN (see Chapter 18) has divided the port numbers into three ranges: well-known,
registered, and dynamic (or private), as shown in Figure 23.5. 
❑
Well-known ports. The ports ranging from 0 to 1023 are assigned and controlled
by ICANN. These are the well-known ports. 
❑
Registered ports. The ports ranging from 1024 to 49,151 are not assigned or con-
trolled by ICANN. They can only be registered with ICANN to prevent duplication. 
❑
Dynamic ports. The ports ranging from 49,152 to 65,535 are neither controlled nor
registered. They can be used as temporary or private port numbers. 
Example 23.1
In UNIX, the well-known ports are stored in a file called /etc/services. Each line in this file gives
the name of the server and the well-known port number. We can use the grep utility to extract the
line corresponding to the desired application. The following shows the port for TFTP. Note that
TFTP can use port 69 on either UDP or TCP.   
SNMP (see Chapter 27) uses two port numbers (161 and 162), each for a different purpose. 
Figure 23.4
IP addresses versus port numbers
Figure 23.5
ICANN ranges
Server
Transport
Application

Data
193.14.26.7

Data
Destination IP address
selects the server
Destination port number
selects the process
Well-known
Dynamic or private
Registered

49,151
49,152
65,535

PART V
TRANSPORT LAYER
Socket Addresses
A transport-layer protocol in the TCP suite needs both the IP address and the port num-
ber, at each end, to make a connection. The combination of an IP address and a port
number is called a socket address. The client socket address defines the client process
uniquely just as the server socket address defines the server process uniquely (see
Figure 23.6).
To use the services of the transport layer in the Internet, we need a pair of socket
addresses: the client socket address and the server socket address. These four pieces of
information are part of the network-layer packet header and the transport-layer packet
header. The first header contains the IP addresses; the second header contains the port
numbers.
Encapsulation and Decapsulation
To send a message from one process to another, the transport-layer protocol encapsu-
lates and decapsulates messages (Figure 23.7). Encapsulation happens at the sender
site. When a process has a message to send, it passes the message to the transport layer
along with a pair of socket addresses and some other pieces of information, which
depend on the transport-layer protocol. The transport layer receives the data and adds
the transport-layer header. The packets at the transport layer in the Internet are called
user datagrams, segments, or packets, depending on what transport-layer protocol we
use. In general discussion, we refer to transport-layer payloads as packets. 
Decapsulation happens at the receiver site. When the message arrives at the desti-
nation transport layer, the header is dropped and the transport layer delivers the mes-
sage to the process running at the application layer. The sender socket address is passed
to the process in case it needs to respond to the message received. 
$grep
tftp/etc/services
tftp 69/tcp 
tftp 69/udp
$grep
snmp/etc/services
snmp161/tcp#Simple Net Mgmt Proto
snmp161/udp#Simple Net Mgmt Proto
snmptrap162/udp#Traps for SNMP
Figure 23.6
Socket address
IP address
Socket address
Port number
200.23.56.8

200.23.56.8

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

Multiplexing and Demultiplexing
Whenever an entity accepts items from more than one source, this is referred to as
multiplexing (many to one); whenever an entity delivers items to more than one source,
this is referred to as demultiplexing (one to many). The transport layer at the source
performs multiplexing; the transport layer at the destination performs demultiplexing
(Figure 23.8). 
Figure 23.8 shows communication between a client and two servers. Three client
processes are running at the client site, P1, P2, and P3. The processes P1 and P3 need to
send requests to the corresponding server process running in a server. The client pro-
cess P2 needs to send a request to the corresponding server process running at another
server. The transport layer at the client site accepts three messages from the three pro-
cesses and creates three packets. It acts as a multiplexer. The packets 1 and 3 use the
same logical channel to reach the transport layer of the first server. When they arrive at
the server, the transport layer does the job of a demultiplexer and distributes the
messages to two different processes. The transport layer at the second server receives
packet 2 and delivers it to the corresponding process. Note that we still have demultiplex-
ing although there is only one message.   
Flow Control
Whenever an entity produces items and another entity consumes them, there should be
a balance between production and consumption rates. If the items are produced faster
than they can be consumed, the consumer can be overwhelmed and may need to discard
some items. If the items are produced more slowly than they can be consumed, the con-
sumer must wait, and the system becomes less efficient. Flow control is related to the
first issue. We need to prevent losing the data items at the consumer site. 
Pushing or Pulling
Delivery of items from a producer to a consumer can occur in one of two ways: pushing
or pulling. If the sender delivers items whenever they are produced⎯without a prior
request from the consumer⎯the delivery is referred to as pushing. If the producer
delivers the items after the consumer has requested them, the delivery is referred to as
pulling. Figure 23.9 shows these two types of delivery.
Figure 23.7
Encapsulation and decapsulation
a. Encapsulation
Process
Application
layer
Header
Packet
Transport
layer
Client
Message
Payload
b. Decapsulation
Logical channel
Process
Application
layer
Header
Transport
layer
Message
Payload
Server
Packet

PART V
TRANSPORT LAYER
When the producer pushes the items, the consumer may be overwhelmed and there
is a need for flow control, in the opposite direction, to prevent discarding of the items.
In other words, the consumer needs to warn the producer to stop the delivery and to
inform the producer when it is again ready to receive the items. When the consumer
pulls the items, it requests them when it is ready. In this case, there is no need for flow
control.
Figure 23.8
Multiplexing and demultiplexing 
Figure 23.9
Pushing or pulling 
P1
P2
P3
Messages
Application
layer
P1
P3
Application
layer
Transport
layer
Transport
layer
Client
Server
Multiplexer
Demultiplexer
P2
Application
layer
Transport
layer
Demultiplexer
m1
m2
m3
Messages
Message
Packet 2
Packet 3
Packet 3
Packet 2
Packet 3
Packet 2
Packet 1
Packet 1
Packet 1
m2
Server
mi: Message
Pi: Process
Legend
m1
m3
Flow control
a. Pushing
b. Pulling
Delivery
Consumer
Producer
Delivery
Request
Consumer
Producer

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

Flow Control at Transport Layer
In communication at the transport layer, we are dealing with four entities: sender pro-
cess, sender transport layer, receiver transport layer, and receiver process. The send-
ing process at the application layer is only a producer. It produces message chunks
and pushes them to the transport layer. The sending transport layer has a double role:
it is both a consumer and a producer. It consumes the messages pushed by the pro-
ducer. It encapsulates the messages in packets and pushes them to the receiving trans-
port layer. The receiving transport layer also has a double role: it is the consumer for
the packets received from the sender and the producer that decapsulates the messages
and delivers them to the application layer. The last delivery, however, is normally a
pulling delivery; the transport layer waits until the application-layer process asks for
messages.
Figure 23.10 shows that we need at least two cases of flow control: from the send-
ing transport layer to the sending application layer and from the receiving transport
layer to the sending transport layer. 
Buffers
Although flow control can be implemented in several ways, one of the solutions is nor-
mally to use two buffers: one at the sending transport layer and the other at the receiv-
ing transport layer. A buffer is a set of memory locations that can hold packets at the
sender and receiver. The flow control communication can occur by sending signals
from the consumer to the producer. 
When the buffer of the sending transport layer is full, it informs the application
layer to stop passing chunks of messages; when there are some vacancies, it informs the
application layer that it can pass message chunks again. 
When the buffer of the receiving transport layer is full, it informs the sending
transport layer to stop sending packets. When there are some vacancies, it informs the
sending transport layer that it can send packets again. 
Example 23.2
The above discussion requires that the consumers communicate with the producers on two
occasions: when the buffer is full and when there are vacancies. If the two parties use a buffer
Figure 23.10
Flow control at the transport layer
Sender
Receiver
Flow control
Flow 
control
Messages
are pushed
Messages
are pulled
Application
layer
Transport
layer
Producer
Consumer
Producer
Application
layer
Transport
layer
Consumer
Producer
Consumer
Requests
Packets are pushed

PART V
TRANSPORT LAYER
with only one slot, the communication can be easier. Assume that each transport layer uses a sin-
gle memory location to hold a packet. When this single slot in the sending transport layer is
empty, the sending transport layer sends a note to the application layer to send its next chunk;
when this single slot in the receiving transport layer is empty, it sends an acknowledgment to the
sending transport layer to send its next packet. As we will see later, however, this type of flow
control, using a single-slot buffer at the sender and the receiver, is inefficient. 
Error Control
In the Internet, since the underlying network layer (IP) is unreliable, we need to make
the transport layer reliable if the application requires reliability. Reliability can be
achieved to add error control services to the transport layer. Error control at the trans-
port layer is responsible for
1. Detecting and discarding corrupted packets. 
2. Keeping track of lost and discarded packets and resending them.
3. Recognizing duplicate packets and discarding them.
4. Buffering out-of-order packets until the missing packets arrive.
Error control, unlike flow control, involves only the sending and receiving transport
layers. We are assuming that the message chunks exchanged between the application
and transport layers are error free. Figure 23.11 shows the error control between the
sending and receiving transport layers. As with the case of flow control, the receiving
transport layer manages error control, most of the time, by informing the sending trans-
port layer about the problems. 
Sequence Numbers
Error control requires that the sending transport layer knows which packet is to be
resent and the receiving transport layer knows which packet is a duplicate, or which
packet has arrived out of order. This can be done if the packets are numbered. We can
add a field to the transport-layer packet to hold the sequence number of the packet.
When a packet is corrupted or lost, the receiving transport layer can somehow inform
the sending transport layer to resend that packet using the sequence number. The
receiving transport layer can also detect duplicate packets if two received packets have
the same sequence number. The out-of-order packets can be recognized by observing
gaps in the sequence numbers. 
Packets are numbered sequentially. However, because we need to include the sequence
number of each packet in the header, we need to set a limit. If the header of the packet
allows m bits for the sequence number, the sequence numbers range from 0 to 2m − 1. For
Figure 23.11
Error control at the transport layer
Sender
Receiver
Error control
Transport
layer
Transport
layer
Packets 

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

example, if m is 4, the only sequence numbers are 0 through 15, inclusive. However, we
can wrap around the sequence. So the sequence numbers in this case are 
In other words, the sequence numbers are modulo 2m. 
Acknowledgment
We can use both positive and negative signals as error control, but we discuss only posi-
tive signals, which are more common at the transport layer. The receiver side can send an
acknowledgment (ACK) for each of a collection of packets that have arrived safe and
sound. The receiver can simply discard the corrupted packets. The sender can detect lost
packets if it uses a timer. When a packet is sent, the sender starts a timer. If an ACK does
not arrive before the timer expires, the sender resends the packet. Duplicate packets can
be silently discarded by the receiver. Out-of-order packets can be either discarded (to be
treated as lost packets by the sender), or stored until the missing one arrives. 
Combination of Flow and Error Control
We have discussed that flow control requires the use of two buffers, one at the sender site
and the other at the receiver site. We have also discussed that error control requires the use
of sequence and acknowledgment numbers by both sides. These two requirements can be
combined if we use two numbered buffers, one at the sender, one at the receiver. 
At the sender, when a packet is prepared to be sent, we use the number of the next
free location, x, in the buffer as the sequence number of the packet. When the packet is
sent, a copy is stored at memory location x, awaiting the acknowledgment from the
other end. When an acknowledgment related to a sent packet arrives, the packet is
purged and the memory location becomes free.
At the receiver, when a packet with sequence number y arrives, it is stored at the
memory location y until the application layer is ready to receive it. An acknowledgment
can be sent to announce the arrival of packet y. 
Sliding Window
Since the sequence numbers use modulo 2m, a circle can represent the sequence numbers
from 0 to 2m − 1 (Figure 23.12). The buffer is represented as a set of slices, called the
sliding window, that occupies part of the circle at any time. At the sender site, when a
packet is sent, the corresponding slice is marked. When all the slices are marked, it means
that the buffer is full and no further messages can be accepted from the application layer.
When an acknowledgment arrives, the corresponding slice is unmarked. If some con-
secutive slices from the beginning of the window are unmarked, the window slides over
the range of the corresponding sequence numbers to allow more free slices at the end of the
window. Figure 23.12 shows the sliding window at the sender. The sequence numbers are
in modulo 16 (m = 4) and the size of the window is 7. Note that the sliding window is just
an abstraction: the actual situation uses computer variables to hold the sequence numbers
of the next packet to be sent and the last packet sent.
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 
For error control, the sequence numbers are modulo 2m,
where m is the size of the sequence number field in bits. 

PART V
TRANSPORT LAYER
Most protocols show the sliding window using linear representation. The idea is
the same, but it normally takes less space on paper. Figure 23.13 shows this representa-
tion. Both representations tell us the same thing. If we take both sides of each diagram
in Figure 23.13 and bend them up, we can make the same diagram as in Figure 23.12.
Figure 23.12
Sliding window in circular format
Figure 23.13
Sliding window in linear format
seqNo of next
packet to send
seqNo of next
packet to send
seqNo of next
packet to send
seqNo of  first 
outstanding
packet 
seqNo of  first 
outstanding
packet 
seqNo of  first 
outstanding
packet 

14 15

14 15

14 15
seqNo of next
packet to send
a. Four packets have been sent.
b. Five packets have been sent.
c. Seven packets have been sent;
window is full.
d. Packet 0 has been acknowledged;
window slides.
seqNo of  first 
outstanding
packet 

14 15
7 8 9 10 11
7 8 9 10 11
a. Four packets have been sent.
0 1 2 3 4 5 6
12 13 14 15
0 1 2 3 4 5 6
7 8 9 10 11
12 13 14 15
0 1 2 3 4 5 6 7
8 9 10 11
12 13 14 15
0 1 2 3 4 5 6
12 13 14 15
b. Five packets have been sent.
c. Seven packets have been sent;
window is full.
d. Packet 0 has been acknowledged;
window slides.

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

Congestion Control
An important issue in a packet-switched network, such as the Internet, is congestion.
Congestion in a network may occur if the load on the network—the number of packets
sent to the network—is greater than the capacity of the network—the number of pack-
ets a network can handle. Congestion control refers to the mechanisms and techniques
that control the congestion and keep the load below the capacity. 
We may ask why there is congestion in a network. Congestion happens in any sys-
tem that involves waiting. For example, congestion happens on a freeway because any
abnormality in the flow, such as an accident during rush hour, creates blockage. 
Congestion in a network or internetwork occurs because routers and switches have
queues—buffers that hold the packets before and after processing. A router, for exam-
ple, has an input queue and an output queue for each interface. If a router cannot pro-
cess the packets at the same rate at which they arrive, the queues become overloaded
and congestion occurs. Congestion at the transport layer is actually the result of con-
gestion at the network layer, which manifests itself at the transport layer. We discussed
congestion at the network layer and its causes in Chapter 18. Later in this chapter, we
show how TCP, assuming that there is no congestion control at the network layer,
implements its own congestion control mechanism. 
23.1.2
Connectionless and Connection-Oriented Protocols
A transport-layer protocol, like a network-layer protocol, can provide two types of
services: connectionless and connection-oriented. The nature of these services at the
transport layer, however, is different from the ones at the network layer. At the network
layer, a connectionless service may mean different paths for different datagrams
belonging to the same message. At the transport layer, we are not concerned about the
physical paths of packets (we assume a logical connection between two transport layers).
Connectionless service at the transport layer means independency between packets;
connection-oriented means dependency. Let us elaborate on these two services. 
Connectionless Service
In a connectionless service, the source process (application program) needs to divide its
message into chunks of data of the size acceptable by the transport layer and deliver
them to the transport layer one by one. The transport layer treats each chunk as a single
unit without any relation between the chunks. When a chunk arrives from the applica-
tion layer, the transport layer encapsulates it in a packet and sends it. To show the inde-
pendency of packets, assume that a client process has three chunks of messages to send
to a server process. The chunks are handed over to the connectionless transport proto-
col in order. However, since there is no dependency between the packets at the transport
layer, the packets may arrive out of order at the destination and will be delivered out of
order to the server process (Figure 23.14).    
In Figure 23.14, we have shown the movement of packets using a time line, but we
have assumed that the delivery of the process to the transport layer and vice versa are
instantaneous. The figure shows that at the client site, the three chunks of messages are
delivered to the client transport layer in order (0, 1, and 2). Because of the extra delay
in transportation of the second packet, the delivery of messages at the server is not in

PART V
TRANSPORT LAYER
order (0, 2, 1). If these three chunks of data belong to the same message, the server pro-
cess may have received a strange message.
The situation would be worse if one of the packets were lost. Since there is no
numbering on the packets, the receiving transport layer has no idea that one of the mes-
sages has been lost. It just delivers two chunks of data to the server process.
The above two problems arise from the fact that the two transport layers do not
coordinate with each other. The receiving transport layer does not know when the first
packet will come nor when all of the packets have arrived. 
We can say that no flow control, error control, or congestion control can be effec-
tively implemented in a connectionless service. 
Connection-Oriented Service
In a connection-oriented service, the client and the server first need to establish a
logical connection between themselves. The data exchange can only happen after the
connection establishment. After data exchange, the connection needs to be torn down
(Figure 23.15). 
As we mentioned before, the connection-oriented service at the transport layer is
different from the same service at the network layer. In the network layer, connection-
oriented service means a coordination between the two end hosts and all the routers in
between. At the transport layer, connection-oriented service involves only the two
hosts; the service is end to end. This means that we should be able to make a
connection-oriented protocol at the transport layer over either a connectionless or
connection-oriented protocol at the network layer. Figure 23.15 shows the connection-
establishment, data-transfer, and tear-down phases in a connection-oriented service at
the transport layer.
We can implement flow control, error control, and congestion control in a connection-
oriented protocol. 
Figure 23.14
Connectionless service
Time
Time
Time
Time
Client
process
Server
process
Client transport
layer
Message 0 
Message 0 
Message 1 
Message 1 
Message 2 
Message 2 
Message 2 is 
delivered out
of order.
Server transport
layer
Packet 0 
Packet 2 
Packet 1 

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

Finite State Machine
The behavior of a transport-layer protocol, both when it provides a connectionless and
when it provides a connection-oriented protocol, can be better shown as a finite state
machine (FSM). Figure 23.16 shows a representation of a transport layer using an
FSM. Using this tool, each transport layer (sender or receiver) is taught as a machine
with a finite number of states. The machine is always in one of the states until an event
occurs. Each event is associated with two reactions: defining the list (possibly empty)
of actions to be performed and determining the next state (which can be the same as the
current state). One of the states must be defined as the initial state, the state in which
the machine starts when it turns on. In this figure we have used rounded-corner rectan-
gles to show states, colored text to show events, and regular black text to show actions.
A horizontal line is used to separate the event from the actions, although later we
replace the horizontal line with a slash. The arrow shows the movement to the next
state. 
We can think of a connectionless transport layer as an FSM with only one state: the
established state. The machine on each end (client and server) is always in the estab-
lished state, ready to send and receive transport-layer packets. 
An FSM in a connection-oriented transport layer, on the other hand, needs to go
through three states before reaching the established state. The machine also needs to
go through three states before closing the connection. The machine is in the closed state
when there is no connection. It remains in this state until a request for opening the con-
nection arrives from the local process; the machine sends an open request packet to the
Figure 23.15
Connection-oriented service
Time
Time
Time
Time
Client
process
Data Transfer
Connection
teardown
Server
process
Client transport
layer
Connection-
close request
Connection-
open request
Message  0 
Message  0 
Message  1 
Message  2 
Messages 1 and 2 
Message 2 hold 
Server transport
layer
Connection
establishment
Packet 0
Packet 1
Packet 2

PART V
TRANSPORT LAYER
remote transport layer and moves to the open-wait-I state. When an acknowledgment is
received from the other end, the local FSM moves to the open-wait-II state. When the
machine is in this state, a unidirectional connection has been established, but if a bidi-
rectional connection is needed, the machine needs to wait in this state until the other
end also requests a connection. When the request is received, the machine sends an
acknowledgment and moves to the established state. 
Data and data acknowledgment can be exchanged between the two ends when they
are both in the established state. However, we need to remember that the established
state, both in connectionless and connection-oriented transport layers, represents a set
of data transfer states, which we discuss in the next section, Transport-Layer Protocols.
To tear down a connection, the application layer sends a close request message to
its local transport layer. The transport layer sends a close-request packet to the other
end and moves to close-wait-I state. When an acknowledgment is received from the
other end, the machine moves to the close-wait-II state and waits for the close-request
packet from the other end. When this packet arrives, the machine sends an acknowledg-
ment and moves to the closed state. 
There are several variations of the connection-oriented FSM that we will discuss
later. We will also see how the FSM can be condensed or expanded and the names of
the states can be changed. 
Figure 23.16
Connectionless and connection-oriented service represented as FSMs
Established 
Established 
Closed
Data transfer occurs 
when both ends are in 
the established state.
Both ends are always
in the established state.
FSM for 
connectionless
transport layer
Note:
The colored 
arrow shows the 
starting state.
FSM for 
connection-oriented 
transport layer
Do nothing. 
An ACK received 
from the other end.    
Send an ACK packet. 
An open-request
packet arrived from
the other end.    
Send an ACK packet. 
A close-request
packet arrived from
the other end.    
Send an open request
packet to the other end. 
A connection-open
request accepted
from application.    
Send a close request
packet to the other end. 
A connection-close
request accepted
from application.    
Open-Wait-I
Open-Wait-II
Close-Wait-I
Do nothing 
An ACK received
from the other end.    
Do nothing. 
Closed-Wait-II

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

23.2
TRANSPORT-LAYER PROTOCOLS
We can create a transport-layer protocol by combining a set of services described in the
previous sections. To better understand the behavior of these protocols, we start with
the simplest one and gradually add more complexity. The TCP/IP protocol uses a
transport-layer protocol that is either a modification or a combination of some of these
protocols. We discuss these general protocols in this section to pave the way for under-
standing more complex ones in the rest of the chapter. To make our discussion simpler,
we first discuss all of these protocols as a unidirectional protocol (i.e., simplex) in
which the data packets move in one direction. At the end of the chapter, we briefly dis-
cuss how they can be changed to bidirectional protocols where data can be moved in
two directions (i.e., full duplex).   
23.2.1
Simple Protocol
Our first protocol is a simple connectionless protocol with neither flow nor error control.
We assume that the receiver can immediately handle any packet it receives. In other
words, the receiver can never be overwhelmed with incoming packets. Figure 23.17
shows the layout for this protocol. 
The transport layer at the sender gets a message from its application layer, makes a
packet out of it, and sends the packet. The transport layer at the receiver receives a
packet from its network layer, extracts the message from the packet, and delivers the
message to its application layer. The transport layers of the sender and receiver provide
transmission services for their application layers. 
FSMs 
The sender site should not send a packet until its application layer has a message to
send. The receiver site cannot deliver a message to its application layer until a packet
arrives. We can show these requirements using two FSMs. Each FSM has only one
state, the ready state. The sending machine remains in the ready state until a request
comes from the process in the application layer. When this event occurs, the sending
machine encapsulates the message in a packet and sends it to the receiving machine.
The receiving machine remains in the ready state until a packet arrives from the send-
ing machine. When this event occurs, the receiving machine decapsulates the message
out of the packet and delivers it to the process at the application layer. Figure 23.18
Figure 23.17
Simple protocol
Sender
Receiver
Transport
Transport
Logical channel
Application
Application
Packet

PART V
TRANSPORT LAYER
shows the FSMs for the simple protocol. We see later that the UDP protocol is a slight
modification of this protocol.         
Example 23.3
Figure 23.19 shows an example of communication using this protocol. It is very simple. The
sender sends packets one after another without even thinking about the receiver.
23.2.2
Stop-and-Wait Protocol
Our second protocol is a connection-oriented protocol called the Stop-and-Wait
protocol, which uses both flow and error control. Both the sender and the receiver use a
sliding window of size 1. The sender sends one packet at a time and waits for an
acknowledgment before sending the next one. To detect corrupted packets, we need to
add a checksum to each data packet. When a packet arrives at the receiver site, it is
checked. If its checksum is incorrect, the packet is corrupted and silently discarded.
Figure 23.18
FSMs for the simple protocol
Figure 23.19
Flow diagram for Example 23.3
Sender
Make a packet and send it. 
Request came from application.  
Ready
Receiver
Deliver it to process.
Packet arrived.
Start
Start
Ready
Time
Time
Time
Time
Client
process
Server
process
Client transport
layer
Request
Packet
Arrival
Server transport
layer
Request
Packet
Arrival

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

The silence of the receiver is a signal for the sender that a packet was either corrupted
or lost. Every time the sender sends a packet, it starts a timer. If an acknowledgment
arrives before the timer expires, the timer is stopped and the sender sends the next
packet (if it has one to send). If the timer expires, the sender resends the previous
packet, assuming that the packet was either lost or corrupted. This means that the
sender needs to keep a copy of the packet until its acknowledgment arrives. Figure 23.20
shows the outline for the Stop-and-Wait protocol. Note that only one packet and one
acknowledgment can be in the channels at any time.    
The Stop-and-Wait protocol is a connection-oriented protocol that provides flow
and error control.    
Sequence Numbers
To prevent duplicate packets, the protocol uses sequence numbers and acknowledgment
numbers. A field is added to the packet header to hold the sequence number of that
packet. One important consideration is the range of the sequence numbers. Since we
want to minimize the packet size, we look for the smallest range that provides unam-
biguous communication. Let us discuss the range of sequence numbers we need.
Assume we have used x as a sequence number; we only need to use x + 1 after that.
There is no need for x + 2. To show this, assume that the sender has sent the packet with
sequence number x. Three things can happen.
1. The packet arrives safe and sound at the receiver site; the receiver sends an
acknowledgment. The acknowledgment arrives at the sender site, causing the
sender to send the next packet numbered x + 1. 
2. The packet is corrupted or never arrives at the receiver site; the sender resends the
packet (numbered x) after the time-out. The receiver returns an acknowledgment.
3. The packet arrives safe and sound at the receiver site; the receiver sends an acknowl-
edgment, but the acknowledgment is corrupted or lost. The sender resends the
packet (numbered x) after the time-out. Note that the packet here is a duplicate.
The receiver can recognize this fact because it expects packet x + 1 but packet x
was received. 
Figure 23.20
Stop-and-Wait protocol
S
• • •
• • •
R Next packet
to receive
• • •
• • •
Send window
Timer
Receive window
Sender
Receiver
Transport
Transport
Logical channels
Application
Application
Packet
ACK
checksum
ackNo
checksum
seqNo

PART V
TRANSPORT LAYER
We can see that there is a need for sequence numbers x and x + 1 because the receiver
needs to distinguish between case 1 and case 3. But there is no need for a packet to be
numbered x + 2. In case 1, the packet can be numbered x again because packets x and x + 1
are acknowledged and there is no ambiguity at either site. In cases 2 and 3, the new packet
is x + 1, not x + 2. If only x and x + 1 are needed, we can let x = 0 and x + 1 = 1. This means
that the sequence is 0, 1, 0, 1, 0, and so on. This is referred to as modulo 2 arithmetic. 
Acknowledgment Numbers
Since the sequence numbers must be suitable for both data packets and acknowledg-
ments, we use this convention: The acknowledgment numbers always announce the
sequence number of the next packet expected by the receiver. For example, if packet 0
has arrived safe and sound, the receiver sends an ACK with acknowledgment 1 (mean-
ing packet 1 is expected next). If packet 1 has arrived safe and sound, the receiver sends
an ACK with acknowledgment 0 (meaning packet 0 is expected). 
The sender has a control variable, which we call S (sender), that points to the only
slot in the send window. The receiver has a control variable, which we call R (receiver),
that points to the only slot in the receive window. 
FSMs
Figure 23.21 shows the FSMs for the Stop-and-Wait protocol. Since the protocol is a
connection-oriented protocol, both ends should be in the established state before
exchanging data packets. The states are actually nested in the established state. 
Sender
The sender is initially in the ready state, but it can move between the ready and block-
ing state. The variable S is initialized to 0. 
❑
Ready state. When the sender is in this state, it is only waiting for one event to
occur. If a request comes from the application layer, the sender creates a packet
with the sequence number set to S. A copy of the packet is stored, and the
packet is sent. The sender then starts the only timer. The sender then moves to
the blocking state. 
❑
Blocking state. When the sender is in this state, three events can occur:
a. If an error-free ACK arrives with the ackNo related to the next packet to be sent,
which means ackNo = (S + 1) modulo 2, then the timer is stopped. The window
slides, S = (S + 1) modulo 2. Finally, the sender moves to the ready state. 
b. If a corrupted ACK or an error-free ACK with the ackNo ≠ (S + 1) modulo 2
arrives, the ACK is discarded.
c. If a time-out occurs, the sender resends the only outstanding packet and restarts
the timer. 
In the Stop-and-Wait protocol, the acknowledgment number always announces, in
modulo-2 arithmetic, the sequence number of the next packet expected.   

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

Receiver
The receiver is always in the ready state. Three events may occur:
a. If an error-free packet with seqNo = R arrives, the message in the packet is
delivered to the application layer. The window then slides, R = (R + 1) modulo 2.
Finally an ACK with ackNo = R is sent.      
b. If an error-free packet with seqNo ≠ R arrives, the packet is discarded, but an
ACK with ackNo = R is sent.
c. If a corrupted packet arrives, the packet is discarded.
Example 23.4
Figure 23.22 shows an example of the Stop-and-Wait protocol. Packet 0 is sent and acknowl-
edged. Packet 1 is lost and resent after the time-out. The resent packet 1 is acknowledged and the
timer stops. Packet 0 is sent and acknowledged, but the acknowledgment is lost. The sender has
no idea if the packet or the acknowledgment is lost, so after the time-out, it resends packet 0,
which is acknowledged. 
Efficiency
The Stop-and-Wait protocol is very inefficient if our channel is thick and long. By
thick, we mean that our channel has a large bandwidth (high data rate); by long, we
mean the round-trip delay is long. The product of these two is called the bandwidth-
delay product. We can think of the channel as a pipe. The bandwidth-delay product
then is the volume of the pipe in bits. The pipe is always there. It is not efficient if it
Figure 23.21
FSMs for the Stop-and-Wait protocol
Error-free ACK with ackNo = S + 1 arrived.  
Corrupted ACK or error-free ACK
with ackNo not related to the only 
outstanding packet arrived.   
Sender
Receiver
Make a packet with seqNo = S, save a copy, and send it. 
Start the timer. 
Ready
Discard the ACK. 
Slide the send window forward (S = S + 1).  
Stop the timer.  
Request came from application.   
Time-out.  
Resend the packet in the window.
Restart the timer. 
Note:
All arithmetic equations
are in modulo 2.
Blocking
Discard the packet (it is duplicate). 
Discard the packet.  
Start
Start
Send ACK with ackNo = R.  
Corrupted packet arrived.  
Deliver the message to application.  
Slide the receive window forward  (R = R + 1). 
Send ACK with ackNo = R.  
Error-free packet with seqNo = R arrived.  
Note:
All arithmetic equations
are in modulo 2.
Ready
Error-free packet with seqNo ≠ R arrived.  

PART V
TRANSPORT LAYER
is not used. The bandwidth-delay product is a measure of the number of bits a sender
can transmit through the system while waiting for an acknowledgment from the
receiver. 
Example 23.5
Assume that, in a Stop-and-Wait system, the bandwidth of the line is 1 Mbps, and 1 bit takes
20 milliseconds to make a round trip. What is the bandwidth-delay product? If the system data
packets are 1,000 bits in length, what is the utilization percentage of the link?
Solution
The bandwidth-delay product is (1 × 106) × (20 × 10−3) = 20,000 bits. The system can send
20,000 bits during the time it takes for the data to go from the sender to the receiver and the
acknowledgment to come back. However, the system sends only 1,000 bits. We can say that the
link utilization is only 1,000/20,000, or 5 percent. For this reason, in a link with a high bandwidth
or long delay, the use of Stop-and-Wait wastes the capacity of the link.
Example 23.6
What is the utilization percentage of the link in Example 23.5 if we have a protocol that can
send up to 15 packets before stopping and worrying about the acknowledgments? 
Figure 23.22
Flow diagram for Example 23.4
Lost
Lost
Start
Stop
Stop
Time-out; restart
Time-out; restart
Packet 0 
discarded
(a duplicate)
Packet 0
Packet 0
Packet 0 (resent)
Packet 1
Packet 1 (resent)
ACK 0
ACK 1
ACK 1
ACK 1
Start
Start
Stop
S
0 1 0 1 0 1
R
R
0 1 0 1 0 1
0 1 0 1 0 1
S
S
S
0 1 0 1 0
S
0 1 0 1 0

0 1 0 1 0 1
0 1 0 1 0 1
Sender
Receiver
Transport
layer
Transport
layer
pArr
aArr
Req: Request from process
pArr: Packet arrival
aArr: ACK arrival
T-Out: Time out occurs
Events:
Req
Req
Req
T-Out
T-Out
aArr
aArr
pArr
pArr
pArr
R
0 1 0 1 0 1

S
S
0 1 0 1 0 1
0 1 0 1 0 1
S
0 1 0 1 0 1
Time
Time

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

Solution
The bandwidth-delay product is still 20,000 bits. The system can send up to 15 packets or
15,000 bits during a round trip. This means the utilization is 15,000/20,000, or 75 percent. Of
course, if there are damaged packets, the utilization percentage is much less because packets
have to be resent.
Pipelining
In networking and in other areas, a task is often begun before the previous task has
ended. This is known as pipelining. There is no pipelining in the Stop-and-Wait
protocol because a sender must wait for a packet to reach the destination and be
acknowledged before the next packet can be sent. However, pipelining does apply to
our next two protocols because several packets can be sent before a sender receives
feedback about the previous packets. Pipelining improves the efficiency of the
transmission if the number of bits in transition is large with respect to the bandwidth-
delay product. 
23.2.3
Go-Back-N Protocol (GBN)
To improve the efficiency of transmission (to fill the pipe), multiple packets must be in
transition while the sender is waiting for acknowledgment. In other words, we need to
let more than one packet be outstanding to keep the channel busy while the sender is
waiting for acknowledgment. In this section, we discuss one protocol that can achieve this
goal; in the next section, we discuss a second. The first is called Go-Back-N (GBN) (the
rationale for the name will become clear later). The key to Go-back-N is that we can
send several packets before receiving acknowledgments, but the receiver can only buf-
fer one packet. We keep a copy of the sent packets until the acknowledgments arrive.
Figure 23.23 shows the outline of the protocol. Note that several data packets and
acknowledgments can be in the channel at the same time. 
Sequence Numbers
As we mentioned before, the sequence numbers are modulo 2m, where m is the size of
the sequence number field in bits. 
Figure 23.23
Go-Back-N protocol
Sf First
outstanding
Sn Next
to send
• • •
• • •
Rn Next 
to receive
Sender
Receiver
Transport
Transport
Logical channels
Application
Application
Send window
Timer
Receive window
• • •
• • •
Packet
ACK
checksum
ackNo
checksum
ackNo

PART V
TRANSPORT LAYER
Acknowledgment Numbers
An acknowledgment number in this protocol is cumulative and defines the sequence
number of the next packet expected. For example, if the acknowledgment number
(ackNo) is 7, it means all packets with sequence number up to 6 have arrived, safe and
sound, and the receiver is expecting the packet with sequence number 7.
Send Window
The send window is an imaginary box covering the sequence numbers of the data pack-
ets that can be in transit or can be sent. In each window position, some of these
sequence numbers define the packets that have been sent; others define those that can
be sent. The maximum size of the window is 2m − 1, for reasons that we discuss later.
In this chapter, we let the size be fixed and set to the maximum value, but we will see
later that some protocols may have a variable window size. Figure 23.24 shows a slid-
ing window of size 7 (m = 3) for the Go-Back-N protocol.  
The send window at any time divides the possible sequence numbers into four
regions. The first region, left of the window, defines the sequence numbers belonging
to packets that are already acknowledged. The sender does not worry about these
packets and keeps no copies of them. The second region, colored, defines the range
of sequence numbers belonging to the packets that have been sent, but have an
unknown status. The sender needs to wait to find out if these packets have been
received or were lost. We call these outstanding packets. The third range, white in the
figure, defines the range of sequence numbers for packets that can be sent; however,
the corresponding data have not yet been received from the application layer. Finally,
the fourth region, right of the window, defines sequence numbers that cannot be used
until the window slides.
The window itself is an abstraction; three variables define its size and location at
any time. We call these variables Sf (send window, the first outstanding packet), Sn
(send window, the next packet to be sent), and Ssize (send window, size). The variable Sf
defines the sequence number of the first (oldest) outstanding packet. The variable
In the Go-Back-N protocol, the acknowledgment number is cumulative and
defines the sequence number of the next packet expected to arrive. 
Figure 23.24
Send window for Go-Back-N
Outstanding
(sent, but not 
acknowledged)
Sent, 
acknowledged,
and purged
 Cannot be 
accepted
from process
Ssize = Send window size
Can be sent
when accepted
from process
First 
outstanding 
 Next 
to send

Sf
Sn

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

Sn holds the sequence number that will be assigned to the next packet to be sent.
Finally, the variable Ssize defines the size of the window, which is fixed in our protocol. 
 Figure 23.25 shows how a send window can slide one or more slots to the right
when an acknowledgment arrives from the other end. In the figure, an acknowledgment
with ackNo = 6 has arrived. This means that the receiver is waiting for packets with
sequence number 6.    
Receive Window
The receive window makes sure that the correct data packets are received and that the
correct acknowledgments are sent. In Go-Back-N, the size of the receive window is
always 1. The receiver is always looking for the arrival of a specific packet. Any packet
arriving out of order is discarded and needs to be resent. Figure 23.26 shows the
receive window. Note that we need only one variable, Rn (receive window, next packet
expected), to define this abstraction. The sequence numbers to the left of the window
belong to the packets already received and acknowledged; the sequence numbers to the
right of this window define the packets that cannot be received. Any received packet
with a sequence number in these two regions is discarded. Only a packet with a
sequence number matching the value of Rn is accepted and acknowledged. The receive
window also slides, but only one slot at a time. When a correct packet is received, the
window slides, Rn = (Rn + 1) modulo 2m. 
The send window is an abstract concept defining an imaginary
box of maximum size = 2m − 1 with three variables: Sf, Sn, and Ssize.   
Figure 23.25
Sliding the send window
The send window can slide one or more slots when an error-free ACK with 
ackNo greater than or equal to Sf and less than Sn (in modular arithmetic) arrives.    
First 
outstanding
 Next 
to send

Sf
Sn

First 
outstanding 
 Next 
to send
a. Window before sliding
b. Window after sliding (an ACK with ackNo = 6 has arrived)

Sf
Sn

PART V
TRANSPORT LAYER
Timers
Although there can be a timer for each packet that is sent, in our protocol we use only
one. The reason is that the timer for the first outstanding packet always expires first. We
resend all outstanding packets when this timer expires.
Resending packets
When the timer expires, the sender resends all outstanding packets. For example, sup-
pose the sender has already sent packet 6 (Sn = 7), but the only timer expires. If Sf = 3,
this means that packets 3, 4, 5, and 6 have not been acknowledged; the sender goes
back and resends packets 3, 4, 5, and 6. That is why the protocol is called Go-Back-N.
On a time-out, the machine goes back N locations and resends all packets. 
FSMs
Figure 23.27 shows the FSMs for the GBN protocol. 
Sender
The sender starts in the ready state, but thereafter it can be in one of the two states:
ready or blocking. The two variables are normally initialized to 0 (Sf = Sn = 0). 
❑
Ready state. Four events may occur when the sender is in ready state. 
a. If a request comes from the application layer, the sender creates a packet with
the sequence number set to Sn. A copy of the packet is stored, and the packet is
sent. The sender also starts the only timer if it is not running. The value of Sn is
now incremented, (Sn = Sn + 1) modulo 2m. If the window is full, Sn = (Sf +
Ssize) modulo 2m, the sender goes to the blocking state.
b. If an error-free ACK arrives with ackNo related to one of the outstanding pack-
ets, the sender slides the window (set Sf = ackNo), and if all outstanding packets
are acknowledged (ackNo = Sn), then the timer is stopped. If all outstanding
packets are not acknowledged, the timer is restarted. 
Figure 23.26
Receive window for Go-Back-N
The receive window is an abstract concept defining an imaginary
box of size 1 with a single variable Rn. The window slides
when a correct packet has arrived; sliding occurs one slot at a time.   
Rsize = 1
Already received 
and acknowledged
 Cannot be 
received

Next
expected
Rn

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

c. If a corrupted ACK or an error-free ACK with ackNo not related to the out-
standing packet arrives, it is discarded. 
d. If a time-out occurs, the sender resends all outstanding packets and restarts the
timer. 
❑
Blocking state. Three events may occur in this case:
a. If an error-free ACK arrives with ackNo related to one of the outstanding pack-
ets, the sender slides the window (set Sf = ackNo) and if all outstanding packets
are acknowledged (ackNo = Sn), then the timer is stopped. If all outstanding
packets are not acknowledged, the timer is restarted. The sender then moves to
the ready state. 
b. If a corrupted ACK or an error-free ACK with the ackNo not related to the out-
standing packets arrives, the ACK is discarded.
c. If a time-out occurs, the sender sends all outstanding packets and restarts the timer. 
Figure 23.27
FSMs for the Go-Back-N protocol
Sender
Receiver
Ready
Deliver message.   
Slide window (Rn = Rn + 1).   
Send ACK (ackNo = Rn).   
Error-free packet with 
seqNo = Rn arrived. 
Discard packet.   
Discard packet.   
Send an ACK (ackNo = Rn).
Request from process came.   
Make a packet (seqNo = Sn).
Sn = Sn + 1.  
Store a copy and send the packet. 
Start the timer if it is not running. 
[true] 
[false] 
Error free ACK with ackNo greater than
or equal to Sf and less than Sn arrived. 
Slide window (Sf  = ackNo).
If ackNo equals Sn, stop the timer. 
If ackNo < Sn, restart the timer. 
Ready
Blocking
Window full 
(Sn = Sf  + Ssize)?
Error-free packet 
with seqNo =/ Rn arrived.  
Corrupted packet arrived.  
Time-out.  
Resend all outstanding
packets. 
Restart the timer. 
Time-out.  
Resend all outstanding
packets. 
Restart the timer. 
Start
Start
Discard it. 
A corrupted ACK or an 
error-free ACK with ackNo 
less than Sf or greater than or
equal to Sn arrived. 
Discard it. 
A corrupted ACK or an 
error-free ACK with ackNo 
outside window arrived. 
Note:
All arithmetic equations
are in modulo 2m.
Note:
All arithmetic equations
are in modulo 2m.

PART V
TRANSPORT LAYER
Receiver
The receiver is always in the ready state. The only variable, Rn, is initialized to 0. Three
events may occur:
a. If an error-free packet with seqNo = Rn arrives, the message in the packet is deliv-
ered to the application layer. The window then slides, Rn = (Rn + 1) modulo 2m.
Finally an ACK is sent with ackNo = Rn.
b. If an error-free packet with seqNo outside the window arrives, the packet is dis-
carded, but an ACK with ackNo = Rn is sent.    
c. If a corrupted packet arrives, it is discarded.
Send Window Size
We can now show why the size of the send window must be less than 2m. As an example,
we choose m = 2, which means the size of the window can be 2m − 1, or 3. Figure 23.28
compares a window size of 3 against a window size of 4. If the size of the window is 3
(less than 2m) and all three acknowledgments are lost, the only timer expires and all three
packets are resent. The receiver is now expecting packet 3, not packet 0, so the duplicate
packet is correctly discarded. On the other hand, if the size of the window is 4 (equal to
22) and all acknowledgments are lost, the sender will send a duplicate of packet 0. How-
ever, this time the window of the receiver expects to receive packet 0 (in the next cycle),
so it accepts packet 0, not as a duplicate, but as the first packet in the next cycle. This is an
error. This shows that the size of the send window must be less than 2m.  
Figure 23.28
Send window size for Go-Back-N
In the Go-Back-N protocol, the size of the send window must be less than 2m; 
the size of the receive window is always 1. 
Sender
Receiver
0 1

1 2 3
0 1
0 1
2 3
0 1 2 3
0 1 2 3
0 1 2 3
0 1 2 3
Correctly
discarded
Sn
Sf
Sn
Sf
Rn
Erroneously
accepted and
delivered as
new data
Sender
Receiver
0 1 2 3 0
1 2 3 0
0 1 2 3 0
0 1 2 3 0
0 1 2 3 0
0 1 2 3 0
2 3 0
0 1
3 0
0 1 2 3 0
a. Send window of size < 2m
b. Send window of size = 2m

Rn
Packet 0
Packet 0
Resent
Resent
Packet 1
Packet 2
Packet 0
Packet 0
Packet 3
Packet 1
Packet 2
Start
Time-out;
restart
Start
ACK1
ACK1
ACK2
ACK3
ACK2
ACK3
ACK0
Time-out;
restart
Time
Time
Time
Time

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

Example 23.7
Figure 23.29 shows an example of Go-Back-N. This is an example of a case where the forward
channel is reliable, but the reverse is not. No data packets are lost, but some ACKs are delayed
and one is lost. The example also shows how cumulative acknowledgments can help if acknowledg-
ments are delayed or lost.  
After initialization, there are some sender events. Request events are triggered by message
chunks from the application layer; arrival events are triggered by ACKs received from the net-
work layer. There is no time-out event here because all outstanding packets are acknowledged
before the timer expires. Note that although ACK 2 is lost, ACK 3 is cumulative and serves as
both ACK 2 and ACK 3. There are four events at the receiver site. 
Example 23.8
Figure 23.30 shows what happens when a packet is lost. Packets 0, 1, 2, and 3 are sent. How-
ever, packet 1 is lost. The receiver receives packets 2 and 3, but they are discarded because they
are received out of order (packet 1 is expected). When the receiver receives packets 2 and 3, it
sends ACK1 to show that it expects to receive packet 1. However, these ACKs are not useful
for the sender because the ackNo is equal to Sf, not greater than Sf. So the sender discards
them. When the time-out occurs, the sender resends packets 1, 2, and 3, which are
acknowledged.  
Go-Back-N versus Stop-and-Wait
The reader may find that there is a similarity between the Go-Back-N protocol and the Stop-
and-Wait protocol. The Stop-and-Wait protocol is actually a Go-Back-N protocol in
Figure 23.29
Flow diagram for Example 23.7
0 1 2
0 1 2
3 4 5 6 7
Rn
Rn
Rn
Rn
Start
timer
Start
timer
Restart
Stop
timer
Initial
Sf
Sn
0 1 2
0 1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
Sf
Sn
0 1 2
0 1 2
3 4 5 6 7
Sf
Sn
0 1 2
0 1 2
3 4 5 6 7
Sn
Sf
0 1 2
0 1 2
3 4 5 6 7
Sf
Sn
0 1 2
0 1 2
3 4 5 6 7
Sf
Sn
0 1 2
0 1 2
3 4 5 6 7
Sf
Sn
0 1 2
0 1 2
3 4 5 6 7
Sf
Sn
0 1 2
0 1 2
3 4 5 6 7
pArr
aArr
Initial
Req
Req
Req: Request from process
pArr: Packet arrival
Events:
aArr: ACK arrival
Req
Req
Time
Lost
Time
Packet 0
Packet 1
ACK 1
ACK 2
ACK 4
ACK 3
Packet 2
Packet 3
Rn
aArr
aArr
pArr
pArr
pArr
Sender
Receiver
Transport
layer
Transport
layer
Stop
timer

PART V
TRANSPORT LAYER
which there are only two sequence numbers and the send window size is 1. In other
words, m = 1 and 2m − 1 = 1. In Go-Back-N, we said that the arithmetic is modulo 2m; in
Stop-and-Wait it is modulo 2, which is the same as 2m when m = 1. 
23.2.4
Selective-Repeat Protocol
The Go-Back-N protocol simplifies the process at the receiver. The receiver keeps track
of only one variable, and there is no need to buffer out-of-order packets; they are
simply discarded. However, this protocol is inefficient if the underlying network proto-
col loses a lot of packets. Each time a single packet is lost or corrupted, the sender
Figure 23.30
Flow diagram for Example 23.8
Lost
Time-out
Time-out: Timer expiration
ACK 1
ACK 1
ACK 2
ACK 3
ACK 4
ACK 1
Start
timer
Stop
Restart
Restart
Stop
timer
Rn
Rn
Rn
Rn
Rn
Initial
Packet discarded
ACK discarded
ACK discarded
Packet discarded
0 1 2
0 1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2
1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2 3 4 5 6 7
Initial
0 1 2 3 4 5 6 7
0 1 2 3 4 5 6 7
0 1 2 3 4 5 6 7
Time
Time
Packet 0
Packet 1
Packet 1 (resent)
Packet 2 (resent)
Packet 3
(resent)
Packet 2
Packet 3
0 1 2 3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2
0 1 2
3 4 5 6 7
0 1 2

1 2
3 4 5 6 7
Sf
Sn
Sf
Sn
Sf
Sn
Sf
Sn
Sf
Sn
Sf
Sn
Sf
Sn
Sf
Sn
Sf
Sn
Sf
Sn
Sf
Sn
Sf
Sn
Start
pArr
aArr
Req: Request from process
pArr: Packet arrival
Events:
aArr: ACK arrival
Req
Req
Req
Req
aArr
aArr
aArr
aArr
aArr
pArr
pArr
pArr
pArr
pArr
Sender
Receiver
Transport
layer
Transport
layer

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

resends all outstanding packets, even though some of these packets may have been
received safe and sound but out of order. If the network layer is losing many packets
because of congestion in the network, the resending of all of these outstanding packets
makes the congestion worse, and eventually more packets are lost. This has an ava-
lanche effect that may result in the total collapse of the network. 
Another protocol, called the Selective-Repeat (SR) protocol, has been devised,
which, as the name implies, resends only selective packets, those that are actually lost.
The outline of this protocol is shown in Figure 23.31. 
Windows
The Selective-Repeat protocol also uses two windows: a send window and a receive
window. However, there are differences between the windows in this protocol and the
ones in Go-Back-N. First, the maximum size of the send window is much smaller; it is
2m−1. The reason for this will be discussed later. Second, the receive window is the
same size as the send window.
The send window maximum size can be 2m−1. For example, if m = 4, the sequence
numbers go from 0 to 15, but the maximum size of the window is just 8 (it is 15 in
the Go-Back-N Protocol). We show the Selective-Repeat send window in Figure 23.32
to emphasize the size.
The receive window in Selective-Repeat is totally different from the one in Go-
Back-N. The size of the receive window is the same as the size of the send window
(maximum 2m−1). The Selective-Repeat protocol allows as many packets as the size of
the receive window to arrive out of order and be kept until there is a set of consecutive
packets to be delivered to the application layer. Because the sizes of the send window
and receive window are the same, all the packets in the send packet can arrive out of
order and be stored until they can be delivered. We need, however, to emphasize that in a
reliable protocol the receiver never delivers packets out of order to the application layer.
Figure 23.33 shows the receive window in Selective-Repeat. Those slots inside the
Figure 23.31
Outline of Selective-Repeat 
Sender
Receiver
Transport
Transport
Logical channels
Timer
Application
Application
Send window
Sent, but not acknowledged
Acknowledged out of order
Packet received out of order
Receive window
Sf
First
outstanding
Sn
Next
to send
Rn Next 
to receive
Packet
ACK
checksum
ackNo
checksum
seqNo

PART V
TRANSPORT LAYER
window that are shaded define packets that have arrived out of order and are waiting for
the earlier transmitted packet to arrive before delivery to the application layer. 
Timer
Theoretically, Selective-Repeat uses one timer for each outstanding packet. When a timer
expires, only the corresponding packet is resent. In other words, GBN treats outstanding
packets as a group; SR treats them individually. However, most transport-layer protocols
that implement SR use only a single timer. For this reason, we use only one timer. 
Acknowledgments
There is yet another difference between the two protocols. In GBN an ackNo is
cumulative; it defines the sequence number of the next packet expected, confirming
that all previous packets have been received safe and sound. The semantics of acknowl-
edgment is different in SR. In SR, an ackNo defines the sequence number of a single
packet that is received safe and sound; there is no feedback for any other.
Figure 23.32
Send window for Selective-Repeat protocol
Figure 23.33
Receive window for Selective-Repeat protocol
In the Selective-Repeat protocol, an acknowledgment number defines
the sequence number of the error-free packet received. 

Outstanding packets,
some acknowledged
Outstanding packet,
not acknowledged
Packet acknowledged
out of order
Packets already
acknowledged
Packets that 
cannot be sent
Ssize = 2m–1
Packets that can
be sent
First outstanding
Next  to send

Sf
Sn

Packets that can be received
and stored for later delivery;
shaded boxes, already received
Packets already
received
Packets that 
cannot be received
Packet received
out of order
Rsize = 2m–1
Receive window, 
next packet expected

Rn

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

Example 23.9
Assume a sender sends 6 packets: packets 0, 1, 2, 3, 4, and 5. The sender receives an ACK with
ackNo = 3. What is the interpretation if the system is using GBN or SR?
Solution
If the system is using GBN, it means that packets 0, 1, and 2 have been received uncorrupted and
the receiver is expecting packet 3. If the system is using SR, it means that packet 3 has been
received uncorrupted; the ACK does not say anything about other packets. 
FSMs
Figure 23.34 shows the FSMs for the Selective-Repeat protocol. It is similar to the ones
for the GBN, but there are some differences. 
Sender 
The sender starts in the ready state, but later it can be in one of the two states: ready or
blocking. The following shows the events and the corresponding actions in each state. 
❑
Ready state. Four events may occur in this case:
a. If a request comes from the application layer, the sender creates a packet with
the sequence number set to Sn. A copy of the packet is stored, and the packet is
sent. If the timer is not running, the sender starts the timer. The value of Sn is
now incremented, Sn = (Sn + 1) modulo 2m. If the window is full, Sn = (Sf +
Ssize) modulo 2m, the sender goes to the blocking state. 
b. If an error-free ACK arrives with ackNo related to one of the outstanding pack-
ets, that packet is marked as acknowledged. If the ackNo = Sf, the window slides
to the right until the Sf points to the first unacknowledged packet (all consecu-
tive acknowledged packets are now outside the window). If there are outstand-
ing packets, the timer is restarted; otherwise, the timer is stopped.
c. If a corrupted ACK or an error-free ACK with ackNo not related to an outstand-
ing packet arrives, it is discarded. 
d. If a time-out occurs, the sender resends all unacknowledged packets in the win-
dow and restarts the timer. 
❑
Blocking state. Three events may occur in this case:
a. If an error-free ACK arrives with ackNo related to one of the outstanding pack-
ets, that packet is marked as acknowledged. In addition, if the ackNo = Sf, the
window is slid to the right until the Sf points to the first unacknowledged packet
(all consecutive acknowledged packets are now outside the window). If the win-
dow has slid, the sender moves to the ready state. 
b. If a corrupted ACK or an error-free ACK with the ackNo not related to out-
standing packets arrives, the ACK is discarded.
c. If a time-out occurs, the sender resends all unacknowledged packets in the win-
dow and restarts the timer. 
Receiver
The receiver is always in the ready state. Three events may occur:

PART V
TRANSPORT LAYER
a. If an error-free packet with seqNo in the window arrives, the packet is stored
and an ACK with ackNo = seqNo is sent. In addition, if the seqNo = Rn, then the
packet and all previously arrived consecutive packets are delivered to the appli-
cation layer and the window slides so that the Rn points to the first empty slot.
b. If an error-free packet with seqNo outside the window arrives, the packet is
discarded, but an ACK with ackNo = Rn is returned to the sender. This is
needed to let the sender slide its window if some ACKs related to packets with
seqNo < Rn were lost.   
c. If a corrupted packet arrives, the packet is discarded. 
Figure 23.34
FSMs for SR protocol
Corrupted packet arrived.  
Request came from process.   
Make a packet (seqNo = Sn). 
Store a copy and send the packet. 
Start the timer for this packet. 
Set Sn = Sn + 1. 
Mark the corresponding packet.
 If ackNo = Sf, slide the window over
all consecutive acknowledged packets.
If there are outstanding packets, 
restart the timer. Otherwise, stop the
timer.
Discard the packet.  
[true] 
[true] 
[false] 
[false] 
An error-free ACK arrived that
acknowledges one of the outstanding
packets.   
Ready
Blocking
Ready
Sender
Receiver
Time-out.  
Resend all
outstanding packets
in window. 
Reset the timer. 
Time-out.  
Resend all
outstanding packets
in window. 
Reset the timer. 
Error-free packet with seqNo 
outside window boundaries arrived.  
Discard the packet. 
Send an ACK with ackNo = Rn.  
Discard it. 
A corrupted ACK or
an ACK about a non-
outstanding packet
arrived.    
Discard it. 
A corrupted ACK or
an ACK about a non-
outstanding packet
arrived.    
Error-free packet with seqNo 
inside window arrived. 
If duplicate, discard; otherwise, 
store the packet. 
Send an ACK with ackNo = seqNo. 
If seqNo = Rn, deliver the packet and 
all consecutive previously arrived 
and stored packets to application,  
and slide window. 
Window full 
(Sn = Sf + Ssize)?
Window slides?
Note:
All arithmetic equations
are in modulo 2m.
Note:
All arithmetic equations
are in modulo 2m.
Start
Start

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

Example 23.10
This example is similar to Example 23.8 (Figure 23.30) in which packet 1 is lost. We show how
Selective-Repeat behaves in this case. Figure 23.35 shows the situation. 
At the sender, packet 0 is transmitted and acknowledged. Packet 1 is lost. Packets 2 and 3
arrive out of order and are acknowledged. When the timer times out, packet 1 (the only unac-
knowledged packet) is resent and is acknowledged. The send window then slides.
At the receiver site we need to distinguish between the acceptance of a packet and its
delivery to the application layer. At the second arrival, packet 2 arrives and is stored and
marked (shaded slot), but it cannot be delivered because packet 1 is missing. At the next
arrival, packet 3 arrives and is marked and stored, but still none of the packets can be delivered.
Only at the last arrival, when finally a copy of packet 1 arrives, can packets 1, 2, and 3 be deliv-
ered to the application layer. There are two conditions for the delivery of packets to the appli-
cation layer: First, a set of consecutive packets must have arrived. Second, the set starts from
the beginning of the window. After the first arrival, there was only one packet and it started
from the beginning of the window. After the last arrival, there are three packets and the first
one starts from the beginning of the window. The key is that a reliable transport layer promises
to deliver packets in order. 
Figure 23.35
Flow diagram for Example 23.10
Rn
Rn
Rn
Initial
Time
Time
Lost
Sf
0 1 2

4 5 6 7
Sn
Sf
Sn
0 1 2

4 5 6 7
0 1 2

5 6 7
0 1 2

5 6 7
0 1 2

5 6 7
0 1 2

5 6 7
0 1 2

3 4 5 6
0 1 2
4 5 6 7
Initial
Data delivered
to application
Data delivered
to application
0 1 2 3
5 6 7
Rn
0 1 2 3
5 6 7
Rn
0 1 2 3
5 6 7
0 1 2 3 4 5 6 7
Sf
Sn
Sf
Sn
Sf
Sn
0 1 2

5 6 7
Sf
Sn
Sf
Sn
Sf
Sn
Sender
Receiver
Transport
layer
Transport
layer
T-Out: Time-out
Req: Request from process
pArr: Packet arrival
Events:
aArr: ACK arrival
Start
Start
Restart
Stop
Stop
ACK 0
ACK 1
ACK 2
ACK 3
Packet 0
Packet 1
Packet 1 (resent)
Packet 2
Packet 3
pArr
Req
Req
Req
Req
T-Out
0 1 2

5 6 7
Sf
Sn
0 1 2

5 6 7
Sf
Sn
aArr
aArr
aArr
aArr
pArr
pArr
pArr

PART V
TRANSPORT LAYER
Window Sizes
We can now show why the size of the sender and receiver windows can be at most one-half
of 2m. For an example, we choose m = 2, which means the size of the window is 2m/2 or
2(m−1) = 2. Figure 23.36 compares a window size of 2 with a window size of 3. 
If the size of the window is 2 and all acknowledgments are lost, the timer for
packet 0 expires and packet 0 is resent. However, the window of the receiver is now
expecting packet 2, not packet 0, so this duplicate packet is correctly discarded (the
sequence number 0 is not in the window). When the size of the window is 3 and all
acknowledgments are lost, the sender sends a duplicate of packet 0. However, this
time, the window of the receiver expects to receive packet 0 (0 is part of the win-
dow), so it accepts packet 0, not as a duplicate, but as a packet in the next cycle. This
is clearly an error.    
23.2.5
Bidirectional Protocols: Piggybacking
The four protocols we discussed earlier in this section are all unidirectional: data packets
flow in only one direction and acknowledgments travel in the other direction. In real life,
data packets are normally flowing in both directions: from client to server and from server
to client. This means that acknowledgments also need to flow in both directions. A tech-
nique called piggybacking is used to improve the efficiency of the bidirectional proto-
cols. When a packet is carrying data from A to B, it can also carry acknowledgment
feedback about arrived packets from B; when a packet is carrying data from B to A, it can
also carry acknowledgment feedback about the arrived packets from A. 
 Figure 23.37 shows the layout for the GBN protocol implemented bidirectionally
using piggybacking. The client and server each use two independent windows: send
and receive.  
In Selective-Repeat, the size of the sender and receiver window
can be at most one-half of 2m. 
Figure 23.36
Selective-Repeat, window size
Sender
Receiver
0 1 2 3
0 1 2 3
Correctly 
discarded
0 1

Rn
0 1 2 3
0 1 2 3
Sf
Sn
Sender
Receiver
0 1
3 0
0 1
3 0
0 1
3 0
0 1
3 0
a. Send and receive windows 
of size = 2m _ 1
b. Send and receive windows 
of size > 2m _ 1
Sf
Sn
0 1
1 2
2 3 0
Rn
0 1

2 3 0
0 1

2 3 0
Packet 0
Packet 1
Packet 0
Start
Time-out;
restart
Start
Time-out;
restart
ACK 0
ACK 0
ACK 1
ACK 1
ACK 2
Packet 0
Packet 1
Packet 2
Packet 0

Erroneously
accepted and
stored as
new data

CHAPTER 23
INTRODUCTION TO TRANSPORT LAYER

23.3
END-CHAPTER MATERIALS
23.3.1
Recommended Reading
For more details about subjects discussed in this chapter, we recommend the following
books. 
Books
Several books give information about transport-layer protocols. The items enclosed in
brackets refer to the reference list at the end of the book: In particular, we recommend
[Com 06], [PD 03], [GW 04], [Far 04], [Tan 03], and [Sta 04].
23.3.2
Key Terms
Figure 23.37
Design of piggybacking in Go-Back-N
bandwidth-delay product
client-server paradigm
congestion
congestion control
demultiplexing
ephemeral port number
finite state machine (FSM)
Go-Back-N protocol (GBN)
multiplexing
piggybacking
pipelining
port number
process-to-process communication
Selective-Repeat (SR) protocol
sequence number
sliding window
socket address
Stop-and-Wait protocol
well-known port number
Server
Client
Logical channels
Packet
Windows for communication from client to server
Windows for communication from server to client
Client send window
Server receive window
Sf First
outstanding
Sn Next
to send
• • •
• • •
Rn Next 
to receive
• • •
• • •
Server send window
Sf First
outstanding
Sn Next
to send
• • •
• • •
Client receive window
Rn Next 
to receive
• • •
• • •
• • •
• • •
Transport
Transport
Application
Application
ackNo
checksum
seqNo

PART V
TRANSPORT LAYER
24.1
INTRODUCTION
After discussing the general principle behind the transport layer in the previous chapter,
we concentrate on the transport protocols in the Internet in this chapter. Figure 24.1
shows the position of these three protocols in the TCP/IP protocol suite. 
24.1.1
Services
Each protocol provides a different type of service and should be used appropriately.
UDP
UDP is an unreliable connectionless transport-layer protocol used for its simplicity and
efficiency in applications where error control can be provided by the application-layer
process.
TCP
TCP is a reliable connection-oriented protocol that can be used in any application
where reliability is important.
SCTP
SCTP is a new transport-layer protocol that combines the features of UDP and TCP.  
24.1.2
Port Numbers
As discussed in the previous chapter, a transport-layer protocol usually has several
responsibilities. One is to create a process-to-process communication; these protocols
use port numbers to accomplish this. Port numbers provide end-to-end addresses at the
transport layer and allow multiplexing and demultiplexing at this layer, just as IP
addresses do at the network layer. Table 24.1 gives some common port numbers for all
three protocols we discuss in this chapter. 
Figure 24.1
Position of transport-layer protocols in the TCP/IP protocol suite
Network
layer
IP
ICMP
IGMP
ARP
Application
layer
Transport
layer
Data-link
layer
Physical
layer
Underlying LAN or WAN
technology
TCP
SCTP
UDP
SMTP
FTP
DNS
DHCP
SNMP
TELNET

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

24.2
USER DATAGRAM PROTOCOL
The User Datagram Protocol (UDP) is a connectionless, unreliable transport protocol.
It does not add anything to the services of IP except for providing process-to-process
communication instead of host-to-host communication. If UDP is so powerless, why
would a process want to use it? With the disadvantages come some advantages. UDP is a
very simple protocol using a minimum of overhead. If a process wants to send a small
message and does not care much about reliability, it can use UDP. Sending a small mes-
sage using UDP takes much less interaction between the sender and receiver than using
TCP. We discuss some applications of UDP at the end of this section. 
24.2.1
User Datagram
UDP packets, called user datagrams, have a fixed-size header of 8 bytes made of four
fields, each of 2 bytes (16 bits). Figure 24.2 shows the format of a user datagram. The
first two fields define the source and destination port numbers. The third field defines
the total length of the user datagram, header plus data. The 16 bits can define a total
length of 0 to 65,535 bytes. However, the total length needs to be less because a UDP
user datagram is stored in an IP datagram with the total length of 65,535 bytes. The last
field can carry the optional checksum (explained later).    
Table 24.1
Some well-known ports used with UDP and TCP 
Port
Protocol
UDP
TCP
SCTP
Description

Echo
√
√
√
Echoes back a received datagram

Discard
√
√
√
Discards any datagram that is received

Users
√
√
√
Active users

Daytime
√
√
√
Returns the date and the time

Quote
√
√
√
Returns a quote of the day

Chargen
√
√
√
Returns a string of characters

FTP-data
√
√
File Transfer Protocol

FTP-21 
√
√
File Transfer Protocol

TELNET
√
√
Terminal Network

SMTP
√
√
Simple Mail Transfer Protocol

DNS
√
√
√
Domain Name Service 

DHCP
√
√
√
Dynamic Host Configuration Protocol

TFTP
√
√
√
Trivial File Transfer Protocol

HTTP
√
√
HyperText Transfer Protocol

RPC
√
√
√
Remote Procedure Call

NTP
√
√
√
Network Time Protocol

SNMP-server
√
Simple Network Management Protocol

SNMP-client
√
Simple Network Management Protocol

PART V
TRANSPORT LAYER
Example 24.1
The following is the content of a UDP header in hexadecimal format. 
a. What is the source port number?
b. What is the destination port number?
c. What is the total length of the user datagram?
d. What is the length of the data?
e. Is the packet directed from a client to a server or vice versa?
f. What is the client process?
Solution
a. The source port number is the first four hexadecimal digits (CB84)16, which means that
the source port number is 52100.
b. The destination port number is the second four hexadecimal digits (000D)16, which
means that the destination port number is 13.
c. The third four hexadecimal digits (001C)16 define the length of the whole UDP packet as
28 bytes.
d. The length of the data is the length of the whole packet minus the length of the header, or
28 − 8 = 20 bytes.
e. Since the destination port number is 13 (well-known port), the packet is from the client
to the server. 
f. The client process is the Daytime (see Table 24.1). 
24.2.2
UDP Services
Earlier we discussed the general services provided by a transport-layer protocol. In this
section, we discuss what portions of those general services are provided by UDP. 
Process-to-Process Communication
UDP provides process-to-process communication using socket addresses, a combina-
tion of IP addresses and port numbers. 
Figure 24.2
User datagram packet format
CB84000D001C001C
Destination port number
Source port number
Checksum
Total length
b. Header format

Header
8 bytes
8 to 65,535 bytes
a. UDP user datagram
Data

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

Connectionless Services
As mentioned previously, UDP provides a connectionless service. This means that each
user datagram sent by UDP is an independent datagram. There is no relationship
between the different user datagrams even if they are coming from the same source pro-
cess and going to the same destination program. The user datagrams are not numbered.
Also, unlike TCP, there is no connection establishment and no connection termination.
This means that each user datagram can travel on a different path. 
One of the ramifications of being connectionless is that the process that uses
UDP cannot send a stream of data to UDP and expect UDP to chop them into differ-
ent, related user datagrams. Instead each request must be small enough to fit into one
user datagram. Only those processes sending short messages, messages less than
65,507 bytes (65,535 minus 8 bytes for the UDP header and minus 20 bytes for the
IP header), can use UDP. 
Flow Control
UDP is a very simple protocol. There is no flow control, and hence no window mecha-
nism. The receiver may overflow with incoming messages. The lack of flow control
means that the process using UDP should provide for this service, if needed. 
Error Control
There is no error control mechanism in UDP except for the checksum. This means that
the sender does not know if a message has been lost or duplicated. When the receiver
detects an error through the checksum, the user datagram is silently discarded. The lack of
error control means that the process using UDP should provide for this service, if needed. 
Checksum
We discussed checksum and its calculation in Chapter 10. UDP checksum calculation
includes three sections: a pseudoheader, the UDP header, and the data coming from the
application layer. The pseudoheader is the part of the header of the IP packet (discussed
in Chapter 19) in which the user datagram is to be encapsulated with some fields filled
with 0s (see Figure 24.3). 
Figure 24.3
Pseudoheader for checksum calculation
Data
(Padding must be added to make
the data a multiple of 16 bits)
Destination port address
16 bits
Source port address
16 bits
Checksum
16 bits
16-bit UDP total length
32-bit source IP address
Pseudoheader
Header
8-bit protocol
All 0s
32-bit destination IP address
UDP total length
16 bits

PART V
TRANSPORT LAYER
If the checksum does not include the pseudoheader, a user datagram may arrive safe
and sound. However, if the IP header is corrupted, it may be delivered to the wrong host.
The protocol field is added to ensure that the packet belongs to UDP, and not to
TCP. We will see later that if a process can use either UDP or TCP, the destination port
number can be the same. The value of the protocol field for UDP is 17. If this value is
changed during transmission, the checksum calculation at the receiver will detect it and
UDP drops the packet. It is not delivered to the wrong protocol.   
Optional Inclusion of Checksum
The sender of a UDP packet can choose not to calculate the checksum. In this case, the
checksum field is filled with all 0s before being sent. In the situation where the sender
decides to calculate the checksum, but it happens that the result is all 0s, the checksum
is changed to all 1s before the packet is sent. In other words, the sender complements
the sum two times. Note that this does not create confusion because the value of the
checksum is never all 1s in a normal situation (see the next example). 
Example 24.2
What value is sent for the checksum in each one of the following hypothetical situations?
a. The sender decides not to include the checksum.
b. The sender decides to include the checksum, but the value of the sum is all 1s. 
c. The sender decides to include the checksum, but the value of the sum is all 0s.
Solution
a. The value sent for the checksum field is all 0s to show that the checksum is not calculated.
b. When the sender complements the sum, the result is all 0s; the sender complements the
result again before sending. The value sent for the checksum is all 1s. The second
complement operation is needed to avoid confusion with the case in part a. 
c. This situation never happens because it implies that the value of every term included in
the calculation of the sum is all 0s, which is impossible; some fields in the pseudoheader
have nonzero values. 
Congestion Control
Since UDP is a connectionless protocol, it does not provide congestion control. UDP
assumes that the packets sent are small and sporadic and cannot create congestion in
the network. This assumption may or may not be true today, when UDP is used for
interactive  real-time transfer of audio and video. 
Encapsulation and Decapsulation
To send a message from one process to another, the UDP protocol encapsulates and
decapsulates messages. 
Queuing
We have talked about ports without discussing the actual implementation of them. In
UDP, queues are associated with ports.
At the client site, when a process starts, it requests a port number from the operat-
ing system. Some implementations create both an incoming and an outgoing queue

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

associated with each process. Other implementations create only an incoming queue
associated with each process. 
Multiplexing and Demultiplexing
In a host running a TCP/IP protocol suite, there is only one UDP but possibly several
processes that may want to use the services of UDP. To handle this situation, UDP mul-
tiplexes and demultiplexes.
Comparison between UDP and Generic Simple Protocol
We can compare UDP with the connectionless simple protocol we discussed earlier.
The only difference is that UDP provides an optional checksum to detect corrupted
packets at the receiver site. If the checksum is added to the packet, the receiving UDP
can check the packet and discard the packet if it is corrupted. No feedback, however,
is sent to the sender. 
24.2.3
UDP Applications
Although UDP meets almost none of the criteria we mentioned earlier for a reliable
transport-layer protocol, UDP is preferable for some applications. The reason is that
some services may have some side effects that are either unacceptable or not prefera-
ble. An application designer sometimes needs to compromise to get the optimum. For
example, in our daily life, we all know that a one-day delivery of a package by a carrier
is more expensive than a three-day delivery. Although high speed and low cost are both
desirable features in delivery of a parcel, they are in conflict with each other. We need
to choose the optimum. 
In this section, we first discuss some features of UDP that may need to be consid-
ered when we design an application program and then show some typical applications.
UDP Features
We briefly discuss some features of UDP and their advantages and disadvantages. 
Connectionless Service 
As we mentioned previously, UDP is a connectionless protocol. Each UDP packet is
independent from other packets sent by the same application program. This feature can
be considered as an advantage or disadvantage depending on the application require-
ments. It is an advantage if, for example, a client application needs to send a short
request to a server and to receive a short response. If the request and response can each
fit in a single user datagram, a connectionless service may be preferable. The overhead
to establish and close a connection may be significant in this case. In the connection-
oriented service, to achieve the above goal, at least 9 packets are exchanged between
the client and the server; in connectionless service only 2 packets are exchanged. The
connectionless service provides less delay; the connection-oriented service creates
more delay. If delay is an important issue for the application, the connectionless service
is preferred. 
UDP is an example of the connectionless simple protocol we discussed earlier with the 
exception of an optional checksum added to packets for error detection. 

PART V
TRANSPORT LAYER
Example 24.3
A client-server application such as DNS (see Chapter 26) uses the services of UDP because a cli-
ent needs to send a short request to a server and to receive a quick response from it. The request
and response can each fit in one user datagram. Since only one message is exchanged in each
direction, the connectionless feature is not an issue; the client or server does not worry that mes-
sages are delivered out of order. 
Example 24.4
A client-server application such as SMTP (see Chapter 27), which is used in electronic mail, can-
not use the services of UDP because a user might send a long e-mail message, which could
include multimedia (images, audio, or video). If the application uses UDP and the message does
not fit in one user datagram, the message must be split by the application into different user data-
grams. Here the connectionless service may create problems. The user datagrams may arrive and
be delivered to the receiver application out of order. The receiver application may not be able to
reorder the pieces. This means the connectionless service has a disadvantage for an application
program that sends long messages. In SMTP, when we send a message, we do not expect to
receive a response quickly (sometimes no response is required). This means that the extra delay
inherent in connection-oriented service is not crucial for SMTP. 
Lack of Error Control
UDP does not provide error control; it provides an unreliable service. Most applications
expect reliable service from a transport-layer protocol. Although a reliable service is
desirable, it may have some side effects that are not acceptable to some applications.
When a transport layer provides reliable services, if a part of the message is lost or cor-
rupted, it needs to be resent. This means that the receiving transport layer cannot
deliver that part to the application immediately; there is an uneven delay between dif-
ferent parts of the message delivered to the application layer. Some applications, by
nature, do not even notice these uneven delays, but for some they are very problematic.
Example 24.5
Assume we are downloading a very large text file from the Internet. We definitely need to use a
transport layer that provides reliable service. We don’t want part of the file to be missing or cor-
rupted when we open the file. The delay created between the deliveries of the parts is not an over-
riding concern for us; we wait until the whole file is composed before looking at it. In this case,
UDP is not a suitable transport layer. 
Example 24.6
Assume we are using a real-time interactive application, such as Skype. Audio and video are
divided into frames and sent one after another. If the transport layer is supposed to resend a cor-
rupted or lost frame, the synchronizing of the whole transmission may be lost. The viewer sud-
denly sees a blank screen and needs to wait until the second transmission arrives. This is not
tolerable. However, if each small part of the screen is sent using a single user datagram, the
receiving UDP can easily ignore the corrupted or lost packet and deliver the rest to the applica-
tion program. That part of the screen is blank for a very short period of time, which most viewers
do not even notice. 
Lack of Congestion Control
UDP does not provide congestion control. However, UDP does not create additional
traffic in an error-prone network. TCP may resend a packet several times and thus

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

contribute to the creation of congestion or worsen a congested situation. Therefore, in
some cases, lack of error control in UDP can be considered an advantage when conges-
tion is a big issue. 
Typical Applications
The following shows some typical applications that can benefit more from the services
of UDP than from those of TCP.   
❑
UDP is suitable for a process that requires simple request-response communication
with little concern for flow and error control. It is not usually used for a process
such as FTP that needs to send bulk data (see Chapter 26). 
❑
UDP is suitable for a process with internal flow- and error-control mechanisms.
For example, the Trivial File Transfer Protocol (TFTP) process includes flow and
error control. It can easily use UDP.
❑
UDP is a suitable transport protocol for multicasting. Multicasting capability is
embedded in the UDP software but not in the TCP software. 
❑
UDP is used for management processes such as SNMP (see Chapter 27). 
❑
UDP is used for some route updating protocols such as Routing Information Proto-
col (RIP) (see Chapter 20). 
❑
UDP is normally used for interactive real-time applications that cannot tolerate
uneven delay between sections of a received message (see Chapter 28). 
24.3
TRANSMISSION CONTROL PROTOCOL 
Transmission Control Protocol (TCP) is a connection-oriented, reliable protocol.
TCP explicitly defines connection establishment, data transfer, and connection tear-
down phases to provide a connection-oriented service. TCP uses a combination of
GBN and SR protocols to provide reliability. To achieve this goal, TCP uses checksum
(for error detection), retransmission of lost or corrupted packets, cumulative and selec-
tive acknowledgments, and timers. In this section, we first discuss the services provided
by TCP; we then discuss the TCP features in more detail. TCP is the most common
transport-layer protocol in the Internet. 
24.3.1
TCP Services
Before discussing TCP in detail, let us explain the services offered by TCP to the pro-
cesses at the application layer.
Process-to-Process Communication
As with UDP, TCP provides process-to-process communication using port numbers.
We have already given some of the port numbers used by TCP in Table 24.1 in the pre-
vious section. 

PART V
TRANSPORT LAYER
Stream Delivery Service
TCP, unlike UDP, is a stream-oriented protocol. In UDP, a process sends messages with
predefined boundaries to UDP for delivery. UDP adds its own header to each of these
messages and delivers it to IP for transmission. Each message from the process is called
a user datagram, and becomes, eventually, one IP datagram. Neither IP nor UDP recog-
nizes any relationship between the datagrams. 
TCP, on the other hand, allows the sending process to deliver data as a stream of
bytes and allows the receiving process to obtain data as a stream of bytes. TCP creates
an environment in which the two processes seem to be connected by an imaginary
“tube” that carries their bytes across the Internet. This imaginary environment is
depicted in Figure 24.4. The sending process produces (writes to) the stream and the
receiving process consumes (reads from) it.  
Sending and Receiving Buffers
Because the sending and the receiving processes may not necessarily write or read
data at the same rate, TCP needs buffers for storage. There are two buffers, the send-
ing buffer and the receiving buffer, one for each direction. We will see later that these
buffers are also necessary for flow- and error-control mechanisms used by TCP. One
way to implement a buffer is to use a circular array of 1-byte locations as shown in
Figure 24.5. For simplicity, we have shown two buffers of 20 bytes each; normally
the buffers are hundreds or thousands of bytes, depending on the implementation. We
also show the buffers as the same size, which is not always the case. 
The figure shows the movement of the data in one direction. At the sender, the buf-
fer has three types of chambers. The white section contains empty chambers that can be
filled by the sending process (producer). The colored area holds bytes that have been
sent but not yet acknowledged. The TCP sender keeps these bytes in the buffer until it
receives an acknowledgment. The shaded area contains bytes to be sent by the sending
TCP. However, as we will see later in this chapter, TCP may be able to send only part of
this shaded section. This could be due to the slowness of the receiving process or to
congestion in the network. Also note that, after the bytes in the colored chambers are
acknowledged, the chambers are recycled and available for use by the sending process.
This is why we show a circular buffer. 
The operation of the buffer at the receiver is simpler. The circular buffer is divided
into two areas (shown as white and colored). The white area contains empty chambers
to be filled by bytes received from the network. The colored sections contain received
Figure 24.4
Stream delivery
TCP
TCP
Sending 
process
Receiving
process
Stream of bytes

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

bytes that can be read by the receiving process. When a byte is read by the receiving
process, the chamber is recycled and added to the pool of empty chambers. 
Segments
Although buffering handles the disparity between the speed of the producing and consum-
ing processes, we need one more step before we can send data. The network layer, as a
service provider for TCP, needs to send data in packets, not as a stream of bytes. At the
transport layer, TCP groups a number of bytes together into a packet called a segment.
TCP adds a header to each segment (for control purposes) and delivers the segment to the
network layer for transmission. The segments are encapsulated in an IP datagram and
transmitted. This entire operation is transparent to the receiving process. Later we will see
that segments may be received out of order, lost or corrupted, and resent. All of these are
handled by the TCP receiver with the receiving application process unaware of TCP’s
activities. Figure 24.6 shows how segments are created from the bytes in the buffers. 
Note that segments are not necessarily all the same size. In the figure, for simplic-
ity, we show one segment carrying 3 bytes and the other carrying 5 bytes. In reality,
segments carry hundreds, if not thousands, of bytes. 
Figure 24.5
Sending and receiving buffers
Figure 24.6
TCP segments
Next byte
to send
Next byte
to receive
Received, but
not read
Sent
Written, but
not sent
TCP
TCP
Next
byte to
write
Next
byte to
read
Buffer
Buffer
Sending 
process
Receiving
process
Stream of bytes
Segment 1
H
Segment N
H
Next byte
to send
Next byte
to receive
Received,
but not read
Sent
Written, but
not sent
TCP
TCP
Next byte
to write
Next byte
to read
Buffer
Buffer
Sending 
process
Receiving
process

PART V
TRANSPORT LAYER
Full-Duplex Communication
TCP offers full-duplex service, where data can flow in both directions at the same time.
Each TCP endpoint then has its own sending and receiving buffer, and segments move
in both directions.
Multiplexing and Demultiplexing
Like UDP, TCP performs multiplexing at the sender and demultiplexing at the receiver.
However, since TCP is a connection-oriented protocol, a connection needs to be estab-
lished for each pair of processes. 
Connection-Oriented Service
TCP, unlike UDP, is a connection-oriented protocol. When a process at site A wants to
send to and receive data from another process at site B, the following three phases occur:
1. The two TCP’s establish a logical connection between them. 
2. Data are exchanged in both directions. 
3. The connection is terminated.
Note that this is a logical connection, not a physical connection. The TCP segment is
encapsulated in an IP datagram and can be sent out of order, or lost or corrupted, and
then resent. Each may be routed over a different path to reach the destination. There is
no physical connection. TCP creates a stream-oriented environment in which it accepts
the responsibility of delivering the bytes in order to the other site. 
Reliable Service
TCP is a reliable transport protocol. It uses an acknowledgment mechanism to check
the safe and sound arrival of data. We will discuss this feature further in the section on
error control.
24.3.2
TCP Features
To provide the services mentioned in the previous section, TCP has several features that
are briefly summarized in this section and discussed later in detail. 
Numbering System 
Although the TCP software keeps track of the segments being transmitted or received,
there is no field for a segment number value in the segment header. Instead, there are
two fields, called the sequence number and the acknowledgment number. These two
fields refer to a byte number and not a segment number. 
Byte Number
TCP numbers all data bytes (octets) that are transmitted in a connection. Numbering is
independent in each direction. When TCP receives bytes of data from a process, TCP
stores them in the sending buffer and numbers them. The numbering does not necessar-
ily start from 0. Instead, TCP chooses an arbitrary number between 0 and 232 − 1 for
the number of the first byte. For example, if the number happens to be 1057 and the
total data to be sent is 6000 bytes, the bytes are numbered from 1057 to 7056. We will
see that byte numbering is used for flow and error control.

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

Sequence Number
After the bytes have been numbered, TCP assigns a sequence number to each segment
that is being sent. The sequence number, in each direction, is defined as follows:
1. The sequence number of the first segment is the ISN (initial sequence number),
which is a random number.
2. The sequence number of any other segment is the sequence number of the previous
segment plus the number of bytes (real or imaginary) carried by the previous seg-
ment. Later, we show that some control segments are thought of as carrying one
imaginary byte.  
Example 24.7
Suppose a TCP connection is transferring a file of 5000 bytes. The first byte is numbered 10001.
What are the sequence numbers for each segment if data are sent in five segments, each carrying
1000 bytes?
Solution
The following shows the sequence number for each segment: 
When a segment carries a combination of data and control information (piggy-
backing), it uses a sequence number. If a segment does not carry user data, it does not
logically define a sequence number. The field is there, but the value is not valid. How-
ever, some segments, when carrying only control information, need a sequence number
to allow an acknowledgment from the receiver. These segments are used for connection
establishment, termination, or abortion. Each of these segments consume one sequence
number as though it carries one byte, but there are no actual data. We will elaborate on
this issue when we discuss connections.   
Acknowledgment Number
As we discussed previously, communication in TCP is full duplex; when a connec-
tion is established, both parties can send and receive data at the same time. Each
party numbers the bytes, usually with a different starting byte number. The sequence
number in each direction shows the number of the first byte carried by the segment.
Each party also uses an acknowledgment number to confirm the bytes it has received.
However, the acknowledgment number defines the number of the next byte that the
The bytes of data being transferred in each connection are numbered by TCP. 
The numbering starts with an arbitrarily generated number.
Segment 1
→
Sequence Number:

Range:

to

Segment 2
→
Sequence Number:

Range:

to

Segment 3
→
Sequence Number:

Range:

to

Segment 4
→
Sequence Number:

Range:

to

Segment 5
→
Sequence Number:

Range:

to

The value in the sequence number field of a segment defines the number assigned to the 
first data byte contained in that segment.

PART V
TRANSPORT LAYER
party expects to receive. In addition, the acknowledgment number is cumulative,
which means that the party takes the number of the last byte that it has received, safe
and sound, adds 1 to it, and announces this sum as the acknowledgment number. The
term cumulative here means that if a party uses 5643 as an acknowledgment number,
it has received all bytes from the beginning up to 5642. Note that this does not mean
that the party has received 5642 bytes, because the first byte number does not have
to be 0. 
24.3.3
Segment 
Before discussing TCP in more detail, let us discuss the TCP packets themselves. A
packet in TCP is called a segment. 
Format
The format of a segment is shown in Figure 24.7. The segment consists of a header of
20 to 60 bytes, followed by data from the application program. The header is 20 bytes if
there are no options and up to 60 bytes if it contains options. We will discuss some of
the header fields in this section. The meaning and purpose of these will become clearer
as we proceed through the section. 
The value of the acknowledgment field in a segment defines the number of the next byte 
a party expects to receive. The acknowledgment number is cumulative.
Figure 24.7
TCP segment format
Destination port address
16 bits
Source port address
16 bits
Sequence number
32 bits
Acknowledgment number
32 bits
Urgent pointer
16 bits
Window size
16 bits
Checksum
16 bits
HLEN
4 bits
Reserved
6 bits
U
R
G
A
C
K
P
S
H
S
Y
N
R
S
T
F
I
N
a. Segment
b. Header

Data
Header
20 to 60 bytes
Options and padding
(up to 40 bytes)

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

❑
Source port address. This is a 16-bit field that defines the port number of the
application program in the host that is sending the segment. 
❑
Destination port address. This is a 16-bit field that defines the port number of the
application program in the host that is receiving the segment. 
❑
Sequence number. This 32-bit field defines the number assigned to the first byte of
data contained in this segment. As we said before, TCP is a stream transport proto-
col. To ensure connectivity, each byte to be transmitted is numbered. The sequence
number tells the destination which byte in this sequence is the first byte in the seg-
ment. During connection establishment (discussed later) each party uses a random
number generator to create an initial sequence number (ISN), which is usually
different in each direction. 
❑
Acknowledgment number. This 32-bit field defines the byte number that the
receiver of the segment is expecting to receive from the other party. If the receiver
of the segment has successfully received byte number x from the other party, it
returns x + 1 as the acknowledgment number. Acknowledgment and data can be
piggybacked together. 
❑
Header length. This 4-bit field indicates the number of 4-byte words in the TCP
header. The length of the header can be between 20 and 60 bytes. Therefore, the
value of this field is always between 5 (5 × 4 = 20) and 15 (15 × 4 = 60).
❑
Control. This field defines 6 different control bits or flags, as shown in Figure 24.8.
One or more of these bits can be set at a time. These bits enable flow control, con-
nection establishment and termination, connection abortion, and the mode of data
transfer in TCP. A brief description of each bit is shown in the figure. We will dis-
cuss them further when we study the detailed operation of TCP later in the chapter. 
❑
Window size. This field defines the window size of the sending TCP in bytes. Note
that the length of this field is 16 bits, which means that the maximum size of the
window is 65,535 bytes. This value is normally referred to as the receiving window
(rwnd) and is determined by the receiver. The sender must obey the dictation of the
receiver in this case. 
❑
Checksum. This 16-bit field contains the checksum. The calculation of the check-
sum for TCP follows the same procedure as the one described for UDP. However, the
use of the checksum in the UDP datagram is optional, whereas the use of the
checksum for TCP is mandatory. The same pseudoheader, serving the same
Figure 24.8
Control field
URG
ACK
PSH
RST
6 bits
SYN
FIN
URG: Urgent pointer is valid
ACK: Acknowledgment is valid
PSH : Request for push
RST : Reset the connection
SYN : Synchronize sequence numbers
FIN  : Terminate the connection

PART V
TRANSPORT LAYER
purpose, is added to the segment. For the TCP pseudoheader, the value for the pro-
tocol field is 6. See Figure 24.9.   
❑
Urgent pointer. This 16-bit field, which is valid only if the urgent flag is set, is
used when the segment contains urgent data. It defines a value that must be added
to the sequence number to obtain the number of the last urgent byte in the data sec-
tion of the segment. This will be discussed later in this chapter.
❑
Options. There can be up to 40 bytes of optional information in the TCP header.
We will discuss some of the options used in the TCP header later in the section. 
Encapsulation
A TCP segment encapsulates the data received from the application layer. The TCP
segment is encapsulated in an IP datagram, which in turn is encapsulated in a frame at
the data-link layer. 
24.3.4
A TCP Connection
TCP is connection-oriented. As discussed before, a connection-oriented transport proto-
col establishes a logical path between the source and destination. All of the segments
belonging to a message are then sent over this logical path. Using a single logical path-
way for the entire message facilitates the acknowledgment process as well as retrans-
mission of damaged or lost frames. You may wonder how TCP, which uses the services
of IP, a connectionless protocol, can be connection-oriented. The point is that a TCP
connection is logical, not physical. TCP operates at a higher level. TCP uses the ser-
vices of IP to deliver individual segments to the receiver, but it controls the connection
itself. If a segment is lost or corrupted, it is retransmitted. Unlike TCP, IP is unaware of
Figure 24.9
Pseudoheader added to the TCP datagram
The use of the checksum in TCP is mandatory. 
16-bit TCP total length
32-bit source IP address
Pseudoheader
Header
Destination port number
Sequence number
Acknowledgment number
Window size
Control
Reserved
HLEN
Urgent pointer
Checksum
Source port number
8-bit protocol 
All 0s
32-bit destination IP address
Data and option
(Padding must be added to make 
the data a multiple of 16 bits)

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

this retransmission. If a segment arrives out of order, TCP holds it until the missing seg-
ments arrive; IP is unaware of this reordering. 
In TCP, connection-oriented transmission requires three phases: connection estab-
lishment, data transfer, and connection termination.
Connection Establishment
TCP transmits data in full-duplex mode. When two TCPs in two machines are con-
nected, they are able to send segments to each other simultaneously. This implies that
each party must initialize communication and get approval from the other party before
any data are transferred. 
Three-Way Handshaking 
The connection establishment in TCP is called three-way handshaking. In our exam-
ple, an application program, called the client, wants to make a connection with another
application program, called the server, using TCP as the transport-layer protocol. 
The process starts with the server. The server program tells its TCP that it is ready
to accept a connection. This request is called a passive open. Although the server TCP
is ready to accept a connection from any machine in the world, it cannot make the con-
nection itself. 
The client program issues a request for an active open. A client that wishes to con-
nect to an open server tells its TCP to connect to a particular server. TCP can now start
the three-way handshaking process, as shown in Figure 24.10.
To show the process we use time lines. Each segment has values for all its header
fields and perhaps for some of its option fields too. However, we show only the few fields
necessary to understand each phase. We show the sequence number, the acknowledgment
Figure 24.10
Connection establishment using three-way handshaking
A: ACK flag
S: SYN flag 
SYN 
ACK 
SYN + ACK 
A
S
seq: 15000
ack: 8001
S
seq: 8000
seq: 8001
ack: 15001
rwnd: 5000
rwnd: 10000
Time
Time
Time
Time
Client
process
Server
process
Client transport
layer
Active open
Connection
opened
Connection
opened
Passive open
Server transport
layer
A

PART V
TRANSPORT LAYER
number, the control flags (only those that are set), and window size if relevant. The three
steps in this phase are as follows. 
1. The client sends the first segment, a SYN segment, in which only the SYN flag is set.
This segment is for synchronization of sequence numbers. The client in our example
chooses a random number as the first sequence number and sends this number to the
server. This sequence number is called the initial sequence number (ISN). Note that
this segment does not contain an acknowledgment number. It does not define the
window size either; a window size definition makes sense only when a segment
includes an acknowledgment. The segment can also include some options that we
discuss later in the chapter. Note that the SYN segment is a control segment and car-
ries no data. However, it consumes one sequence number because it needs to be
acknowledged. We can say that the SYN segment carries one imaginary byte. 
2. The server sends the second segment, a SYN + ACK segment with two flag bits set
as: SYN and ACK. This segment has a dual purpose. First, it is a SYN segment for
communication in the other direction. The server uses this segment to initialize a
sequence number for numbering the bytes sent from the server to the client. The
server also acknowledges the receipt of the SYN segment from the client by setting
the ACK flag and displaying the next sequence number it expects to receive from the
client. Because the segment contains an acknowledgment, it also needs to define the
receive window size, rwnd (to be used by the client), as we will see in the flow control
section. Since this segment is playing the role of a SYN segment, it needs to be
acknowledged. It, therefore, consumes one sequence number. 
3. The client sends the third segment. This is just an ACK segment. It acknowl-
edges the receipt of the second segment with the ACK flag and acknowledg-
ment number field. Note that the ACK segment does not consume any sequence
numbers if it does not carry data, but some implementations allow this third
segment in the connection phase to carry the first chunk of data from the client.
In this case, the segment consumes as many sequence numbers as the number of
data bytes.  
SYN Flooding Attack
The connection establishment procedure in TCP is susceptible to a serious security
problem called SYN flooding attack. This happens when one or more malicious attack-
ers send a large number of SYN segments to a server pretending that each of them is
coming from a different client by faking the source IP addresses in the datagrams. The
server, assuming that the clients are issuing an active open, allocates the necessary
resources, such as creating transfer control block (TCB) tables and setting timers. The
A SYN segment cannot carry data, but it consumes one sequence number. 
A SYN 1 ACK segment cannot carry data, 
but it does consume one sequence number. 
An ACK segment, if carrying no data, consumes no sequence number. 

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

TCP server then sends the SYN + ACK segments to the fake clients, which are lost.
When the server waits for the third leg of the handshaking process, however, resources
are allocated without being used. If, during this short period of time, the number of
SYN segments is large, the server eventually runs out of resources and may be unable
to accept connection requests from valid clients. This SYN flooding attack belongs to a
group of security attacks known as a denial of service attack, in which an attacker
monopolizes a system with so many service requests that the system overloads and
denies service to valid requests. 
Some implementations of TCP have strategies to alleviate the effect of a SYN
attack. Some have imposed a limit of connection requests during a specified period of
time. Others try to filter out datagrams coming from unwanted source addresses. One
recent strategy is to postpone resource allocation until the server can verify that the
connection request is coming from a valid IP address, by using what is called
a cookie. SCTP, the new transport-layer protocol that we discuss later, uses this
strategy. 
Data Transfer
After connection is established, bidirectional data transfer can take place. The client
and server can send data and acknowledgments in both directions. We will study the
rules of acknowledgment later in the chapter; for the moment, it is enough to know
that data traveling in the same direction as an acknowledgment are carried on the
same segment. The acknowledgment is piggybacked with the data. Figure 24.11
shows an example.  
In this example, after a connection is established, the client sends 2,000 bytes of
data in two segments. The server then sends 2,000 bytes in one segment. The client
sends one more segment. The first three segments carry both data and acknowledg-
ment, but the last segment carries only an acknowledgment because there is no more
data to be sent. Note the values of the sequence and acknowledgment numbers. The
data segments sent by the client have the PSH (push) flag set so that the server TCP
knows to deliver data to the server process as soon as they are received. We discuss the
use of this flag in more detail later. The segment from the server, on the other hand,
does not set the push flag. Most TCP implementations have the option to set or not to
set this flag. 
Pushing Data
We saw that the sending TCP uses a buffer to store the stream of data coming from the
sending application program. The sending TCP can select the segment size. The receiv-
ing TCP also buffers the data when they arrive and delivers them to the application pro-
gram when the application program is ready or when it is convenient for the receiving
TCP. This type of flexibility increases the efficiency of TCP. 
However, there are occasions in which the application program has no need for this
flexibility. For example, consider an application program that communicates interac-
tively with another application program on the other end. The application program on
one site wants to send a chunk of data to the application program at the other site and
receive an immediate response. Delayed transmission and delayed delivery of data may
not be acceptable by the application program. 

PART V
TRANSPORT LAYER
TCP can handle such a situation. The application program at the sender can
request a push operation. This means that the sending TCP must not wait for the win-
dow to be filled. It must create a segment and send it immediately. The sending TCP
must also set the push bit (PSH) to let the receiving TCP know that the segment
includes data that must be delivered to the receiving application program as soon as
possible and not to wait for more data to come. This means to change the byte-
oriented TCP to a chunk-oriented TCP, but TCP can choose whether or not to use this
feature.
Urgent Data
TCP is a stream-oriented protocol. This means that the data is presented from the appli-
cation program to TCP as a stream of bytes. Each byte of data has a position in the
stream. However, there are occasions in which an application program needs to send
urgent bytes, some bytes that need to be treated in a special way by the application at the
other end. The solution is to send a segment with the URG bit set. The sending applica-
tion program tells the sending TCP that the piece of data is urgent. The sending TCP
Figure 24.11
Data transfer
A: ACK flag
P: PSH flag
Time
Time
Time
Time
Send
request
Receive
Receive
Send
request
Send
request
seq: 9001
Data
bytes: 9001-10000
A P
A P
seq: 8001
Data
bytes: 8001-9000
ack: 15001
ack: 15001
A
seq: 10001
ack: 17001
A
seq: 15001
ack: 10001
Data
bytes: 15001-17000
rwnd:10000
rwnd: 3000
Connection establishment
Connection termination
Client
process
Server
process
Client transport
layer
Server transport
layer

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

creates a segment and inserts the urgent data at the beginning of the segment. The rest
of the segment can contain normal data from the buffer. The urgent pointer field in the
header defines the end of the urgent data (the last byte of urgent data). For example, if
the segment sequence number is 15000 and the value of the urgent pointer is 200, the
first byte of urgent data is the byte 15000 and the last byte is the byte 15200. The rest of
the bytes in the segment (if present) are nonurgent.  
It is important to mention that TCP’s urgent data is neither a priority service nor an
out-of-band data service as some people think. Rather, TCP urgent mode is a service by
which the application program at the sender side marks some portion of the byte stream
as needing special treatment by the application program at the receiver side. The
receiving TCP delivers bytes (urgent or nonurgent) to the application program in order,
but informs the application program about the beginning and end of urgent data. It is
left to the application program to decide what to do with the urgent data.
Connection Termination
Either of the two parties involved in exchanging data (client or server) can close the
connection, although it is usually initiated by the client. Most implementations today
allow two options for connection termination: three-way handshaking and four-way
handshaking with a half-close option. 
Three-Way Handshaking 
Most implementations today allow three-way handshaking for connection termination,
as shown in Figure 24.12.
1. In this situation, the client TCP, after receiving a close command from the client
process, sends the first segment, a FIN segment in which the FIN flag is set. Note
that a FIN segment can include the last chunk of data sent by the client or it can be
just a control segment as shown in the figure. If it is only a control segment, it con-
sumes only one sequence number because it needs to be acknowledged.    
2. The server TCP, after receiving the FIN segment, informs its process of the situation
and sends the second segment, a FIN + ACK segment, to confirm the receipt of the
FIN segment from the client and at the same time to announce the closing of the con-
nection in the other direction. This segment can also contain the last chunk of data
from the server. If it does not carry data, it consumes only one sequence number
because it needs to be acknowledged. 
3. The client TCP sends the last segment, an ACK segment, to confirm the receipt of
the FIN segment from the TCP server. This segment contains the acknowledgment
number, which is one plus the sequence number received in the FIN segment from
the server. This segment cannot carry data and consumes no sequence numbers. 
Half-Close
In TCP, one end can stop sending data while still receiving data. This is called a half-
close. Either the server or the client can issue a half-close request. It can occur when the
server needs all the data before processing can begin. A good example is sorting. When
The FIN segment consumes one sequence number if it does not carry data.

PART V
TRANSPORT LAYER
the client sends data to the server to be sorted, the server needs to receive all the data
before sorting can start. This means the client, after sending all data, can close the con-
nection in the client-to-server direction. However, the server-to-client direction must
remain open to return the sorted data. The server, after receiving the data, still needs
time for sorting; its outbound direction must remain open. Figure 24.13 shows an exam-
ple of a half-close. 
The data transfer from the client to the server stops. The client half-closes the con-
nection by sending a FIN segment. The server accepts the half-close by sending the
ACK segment. The server, however, can still send data. When the server has sent all of
the processed data, it sends a FIN segment, which is acknowledged by an ACK from
the client. 
After half-closing the connection, data can travel from the server to the client and
acknowledgments can travel from the client to the server. The client cannot send any
more data to the server. 
Connection Reset
TCP at one end may deny a connection request, may abort an existing connection, or
may terminate an idle connection. All of these are done with the RST (reset) flag.
24.3.5
State Transition Diagram
To keep track of all the different events happening during connection establishment,
connection termination, and data transfer, TCP is specified as the finite state machine
(FSM) as shown in Figure 24.14.  
Figure 24.12
Connection termination using three-way handshaking
The FIN + ACK segment consumes only one sequence 
number if it does not carry data.
A: ACK flag
F: FIN flag 
FIN
ACK 
FIN + ACK 
A
seq: y
ack: x + 1
A
seq: x
ack: y
seq: x + 1
ack: y + 1
Time
Time
Time
Time
Client
process
Server
process
Client transport
layer
Active close
Connection
closed
Connection
closed
Passive close
Server transport
layer
A
F
F

PART V
TRANSPORT LAYER
24.3.6
Windows in TCP
Before discussing data transfer in TCP and the issues such as flow, error, and conges-
tion control, we describe the windows used in TCP. TCP uses two windows (send win-
dow and receive window) for each direction of data transfer, which means four
windows for a bidirectional communication. To make the discussion simple, we make
an unrealistic assumption that communication is only unidirectional (say from client to
server); the bidirectional communication can be inferred using two unidirectional com-
munications with piggybacking. 
Figure 24.16
Time-line diagram for a common scenario
CLOSED
CLOSED
Data 
Transfer
Passive
open
Active
open
Active
close
CLOSED
CLOSED
Passive
close
Time
Time
SYN
ACK
SYN + ACK
Client
Server
Process
Transport
layer
Process
Transport
layer
ESTABLISHED
ESTABLISHED
SYN
-SENT
LISTEN
SYN-
RCVD
FIN
ACK
Data Transfer
Acknowledgment
Client states
Server states
Time-out
2MSL
timer
Inform process
and send data 
in the queue
plus EOF
FIN-
WAIT-1
FIN-
WAIT-2
CLOSE-
WAIT
LAST-
ACK
TIME-
WAIT
FIN
ACK

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

Send Window
Figure 24.17 shows an example of a send window. The window size is 100 bytes, but
later we see that the send window size is dictated by the receiver (flow control) and
the congestion in the underlying network (congestion control). The figure shows
how a send window opens, closes, or shrinks.  
The send window in TCP is similar to the one used with the Selective-Repeat pro-
tocol, but with some differences:
1. One difference is the nature of entities related to the window. The window size in
SR is the number of packets, but the window size in TCP is the number of bytes.
Although actual transmission in TCP occurs segment by segment, the variables
that control the window are expressed in bytes. 
2. The second difference is that, in some implementations, TCP can store data
received from the process and send them later, but we assume that the sending
TCP is capable of sending segments of data as soon as it receives them from its
process. 
3. Another difference is the number of timers. The theoretical Selective-Repeat pro-
tocol may use several timers for each packet sent, but as mentioned before, the
TCP protocol uses only one timer. 
Receive Window
Figure 24.18 shows an example of a receive window. The window size is 100 bytes.
The figure also shows how the receive window opens and closes; in practice, the win-
dow should never shrink.  
Figure 24.17
Send window in TCP
Shrinks
Outstanding bytes
(sent but not acknowledged)
Bytes that are acknowledged
(can be purged from buffer) 
Bytes that can be sent
(Usable window) 
Bytes that cannot be
sent until the right edge
moves to the right 
a. Send window 
b. Opening, closing, and shrinking send window 
Right wall 
Left wall 
Timer 
Send window size (advertised by the receiver)
Opens
Closes
First
outstanding
byte 
 Next byte 
to send

Sf
Sn
260 261
300 301

260 261
300 301

PART V
TRANSPORT LAYER
There are two differences between the receive window in TCP and the one we used
for SR. 
1. The first difference is that TCP allows the receiving process to pull data at its own
pace. This means that part of the allocated buffer at the receiver may be occupied
by bytes that have been received and acknowledged, but are waiting to be pulled by
the receiving process. The receive window size is then always smaller than or equal
to the buffer size, as shown in Figure 24.18. The receive window size determines
the number of bytes that the receive window can accept from the sender before
being overwhelmed (flow control). In other words, the receive window size, nor-
mally called rwnd, can be determined as:  
2. The second difference is the way acknowledgments are used in the TCP protocol.
Remember that an acknowledgement in SR is selective, defining the uncorrupted
packets that have been received. The major acknowledgment mechanism in TCP is
a cumulative acknowledgment announcing the next expected byte to receive (in
this way TCP looks like GBN, discussed earlier). The new version of TCP, how-
ever, uses both cumulative and selective acknowledgments; we will discuss these
options on the book website. 
24.3.7
Flow Control
As discussed before, flow control balances the rate a producer creates data with the rate
a consumer can use the data. TCP separates flow control from error control. In this
Figure 24.18
Receive window in TCP
rwnd 5 buffer size 2 number of waiting bytes to be pulled
Rn
Bytes received 
and  acknowledged,
waiting to be
consumed by process 
Bytes that can be 
received from sender 
Receive window size (rwnd) 
Allocated buffer
Next byte
to be pulled
by the process
Next byte
expected to
be received
Bytes that cannot be
received from sender 
Bytes that have already
been pulled by the process 
260 261
300 301

260 261
300 301

a. Receive window and allocated buffer 
b. Opening and  closing of receive window 
Right wall 
Left wall 
Opens
Closes

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

section we discuss flow control, ignoring error control. We assume that the logical
channel between the sending and receiving TCP is error-free.   
Figure 24.19 shows unidirectional data transfer between a sender and a receiver;
bidirectional data transfer can be deduced from the unidirectional process.  
The figure shows that data travel from the sending process down to the sending
TCP, from the sending TCP to the receiving TCP, and from the receiving TCP up to
the receiving process (paths 1, 2, and 3). Flow control feedbacks, however, are travel-
ing from the receiving TCP to the sending TCP and from the sending TCP up to the
sending process (paths 4 and 5). Most implementations of TCP do not provide flow
control feedback from the receiving process to the receiving TCP; they let the receiv-
ing process pull data from the receiving TCP whenever it is ready to do so. In other
words, the receiving TCP controls the sending TCP; the sending TCP controls the
sending process.
Flow control feedback from the sending TCP to the sending process (path 5) is
achieved through simple rejection of data by the sending TCP when its window is full.
This means that our discussion of flow control concentrates on the feedback sent from
the receiving TCP to the sending TCP (path 4).
Opening and Closing Windows
To achieve flow control, TCP forces the sender and the receiver to adjust their window
sizes, although the size of the buffer for both parties is fixed when the connection is
established. The receive window closes (moves its left wall to the right) when more
bytes arrive from the sender; it opens (moves its right wall to the right) when more
bytes are pulled by the process. We assume that it does not shrink (the right wall does
not move to the left). 
The opening, closing, and shrinking of the send window is controlled by the
receiver. The send window closes (moves its left wall to the right) when a new
acknowledgment allows it to do so. The send window opens (its right wall moves to the
right) when the receive window size (rwnd) advertised by the receiver allows it to do so
Figure 24.19
Data flow and flow control feedbacks in TCP
Sender
Receiver
Flow control feedback  
Flow control
feedback
Messages
are pushed
Messages
are pulled
Application
layer
Transport
layer
Producer
Consumer
Producer
Application
layer
Transport
layer
Consumer
Producer
Consumer
Segments are pushed
Flow control feedback
Data flow

PART V
TRANSPORT LAYER
(new ackNo + new rwnd > last ackNo + last rwnd). The send window shrinks in the
event this situation does not occur.
A Scenario
We show how the send and receive windows are set during the connection establishment
phase, and how their situations will change during data transfer. Figure 24.20 shows a
simple example of unidirectional data transfer (from client to server). For the time being,
we ignore error control, assuming that no segment is corrupted, lost, duplicated, or has
arrived out of order. Note that we have shown only two windows for unidirectional data
transfer. Although the client defines server’s window size of 2000 in the third segment,
we have not shown that window because the communication is only unidirectional.
Eight segments are exchanged between the client and server:
1. The first segment is from the client to the server (a SYN segment) to request connec-
tion. The client announces its initial seqNo = 100. When this segment arrives at the
server, it allocates a buffer size of 800 (an assumption) and sets its window to cover
the whole buffer (rwnd = 800). Note that the number of the next byte to arrive is 101. 
Figure 24.20
An example of flow control
SYN
seqNo: 100
ACK
  
ackNo: 1001
Data
Data: 200 bytes
seqNo: 101
 Data
Data: 300 bytes
seqNo: 301
SYN + ACK
rwnd: 800
rwnd: 2000
ackNo: 101
seqNo: 1000
ACK
rwnd: 600
ackNo: 301
ACK
rwnd: 400
ackNo: 601
ACK
rwnd: 600
ackNo: 601   

Receive window is set.
Send window is set.
rwnd = 800
rwnd = 600
rwnd = 400
rwnd = 600
Size = 800
Size = 800
Size = 600
Size = 600
Size = 400
Size = 600
Sender sends 200 bytes.
200 bytes received, window closes.
Bytes acknowledged, window closes.
Window closes and opens.
Window opens.
Sender sends 300 bytes.
300 bytes received, 100 bytes consumed.
200 bytes consumed, window opens.
Therefore, only one window at each
side is shown.
Client
Server

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

2. The second segment is from the server to the client. This is an ACK + SYN seg-
ment. The segment uses ackNo = 101 to show that it expects to receive bytes
starting from 101. It also announces that the client can set a buffer size of
800 bytes. 
3. The third segment is the ACK segment from the client to the server. Note that the
client has defined a rwnd of size 2000, but we do not use this value in our figure
because the communication is only in one direction. 
4. After the client has set its window with the size (800) dictated by the server, the
process pushes 200 bytes of data. The TCP client numbers these bytes 101 to 300.
It then creates a segment and sends it to the server. The segment shows the starting
byte number as 101 and the segment carries 200 bytes. The window of the client is
then adjusted to show that 200 bytes of data are sent but waiting for acknowledg-
ment. When this segment is received at the server, the bytes are stored, and the
receive window closes to show that the next byte expected is byte 301; the stored
bytes occupy 200 bytes of buffer. 
5. The fifth segment is the feedback from the server to the client. The server
acknowledges bytes up to and including 300 (expecting to receive byte 301). The
segment also carries the size of the receive window after decrease (600). The cli-
ent, after receiving this segment, purges the acknowledged bytes from its window
and closes its window to show that the next byte to send is byte 301. The window
size, however, decreases to 600 bytes. Although the allocated buffer can store 800
bytes, the window cannot open (moving its right wall to the right) because the
receiver does not let it. 
6. Segment 6 is sent by the client after its process pushes 300 more bytes. The seg-
ment defines seqNo as 301 and contains 300 bytes. When this segment arrives at
the server, the server stores them, but it has to reduce its window size. After its
process has pulled 100 bytes of data, the window closes from the left for the
amount of 300 bytes, but opens from the right for the amount of 100 bytes. The
result is that the size is only reduced 200 bytes. The receiver window size is now
400 bytes. 
7. In segment 7, the server acknowledges the receipt of data, and announces that its
window size is 400. When this segment arrives at the client, the client has no
choice but to reduce its window again and set the window size to the value of rwnd =
400 advertised by the server. The send window closes from the left by 300 bytes,
and opens from the right by 100 bytes.
8. Segment 8 is also from the server after its process has pulled another 200 bytes. Its
window size increases. The new rwnd value is now 600. The segment informs the
client that the server still expects byte 601, but the server window size has expanded
to 600. We need to mention that the sending of this segment depends on the policy
imposed by the implementation. Some implementations may not allow advertise-
ment of the rwnd at this time; the server then needs to receive some data before doing
so. After this segment arrives at the client, the client opens its window by 200 bytes
without closing it. The result is that its window size increases to 600 bytes.

PART V
TRANSPORT LAYER
Shrinking of Windows 
As we said before, the receive window cannot shrink. The send window, on the other
hand, can shrink if the receiver defines a value for rwnd that results in shrinking the
window. However, some implementations do not allow shrinking of the send window.
The limitation does not allow the right wall of the send window to move to the left. In
other words, the receiver needs to keep the following relationship between the last and
new acknowledgment and the last and new rwnd values to prevent shrinking of the send
window.  
The left side of the inequality represents the new position of the right wall with
respect to the sequence number space; the right side shows the old position of the right
wall. The relationship shows that the right wall should not move to the left. The
inequality is a mandate for the receiver to check its advertisement. However, note that
the inequality is valid only if Sf < Sn; we need to remember that all calculations are in
modulo 232.
Example 24.8
Figure 24.21 shows the reason for this mandate. 
Part a of the figure shows the values of the last acknowledgment and rwnd. Part b shows the
situation in which the sender has sent bytes 206 to 214. Bytes 206 to 209 are acknowledged and
purged. The new advertisement, however, defines the new value of rwnd as 4, in which 210 + 4 <
206 + 12. When the send window shrinks, it creates a problem: byte 214, which has already been
sent, is outside the window. The relation discussed before forces the receiver to maintain the
right-hand wall of the window to be as shown in part a, because the receiver does not know which
of the bytes 210 to 217 has already been sent. One way to prevent this situation is to let the
new ackNo 1  new rwnd
≥ 
last ackNo 1  last rwnd
Figure 24.21
Example 24.8
211 212 213
214 215 216 217
206 207 208 209 210
Last advertised rwnd  = 12
Last received
ackNo = 206

198 205
211 212 213
214 215 216 217
206 207 208 209 210
New advertised
rwnd  = 4
New received
ackNo = 210
a. The window after the last advertisement
b. The window after the new advertisement; window has shrunk

198 205

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

receiver postpone its feedback until enough buffer locations are available in its window. In other
words, the receiver should wait until more bytes are consumed by its process to meet the relation-
ship described above.   
Window Shutdown
We said that shrinking the send window by moving its right wall to the left is strongly
discouraged. However, there is one exception: the receiver can temporarily shut down
the window by sending a rwnd of 0. This can happen if for some reason the receiver
does not want to receive any data from the sender for a while. In this case, the sender
does not actually shrink the size of the window, but stops sending data until a new
advertisement has arrived. As we will see later, even when the window is shut down
by an order from the receiver, the sender can always send a segment with 1 byte of
data. This is called probing and is used to prevent a deadlock (see the section on TCP
timers). 
Silly Window Syndrome
A serious problem can arise in the sliding window operation when either the sending
application program creates data slowly or the receiving application program consumes
data slowly, or both. Any of these situations results in the sending of data in very small
segments, which reduces the efficiency of the operation. For example, if TCP sends
segments containing only 1 byte of data, it means that a 41-byte datagram (20 bytes of
TCP header and 20 bytes of IP header) transfers only 1 byte of user data. Here the over-
head is 41/1, which indicates that we are using the capacity of the network very ineffi-
ciently. The inefficiency is even worse after accounting for the data-link layer and
physical-layer overhead. This problem is called the silly window syndrome. For each
site, we first describe how the problem is created and then give a proposed solution.
Syndrome Created by the Sender
The sending TCP may create a silly window syndrome if it is serving an application
program that creates data slowly, for example, 1 byte at a time. The application pro-
gram writes 1 byte at a time into the buffer of the sending TCP. If the sending TCP does
not have any specific instructions, it may create segments containing 1 byte of data.
The result is a lot of 41-byte segments that are traveling through an internet. 
The solution is to prevent the sending TCP from sending the data byte by byte. The
sending TCP must be forced to wait and collect data to send in a larger block. How long
should the sending TCP wait? If it waits too long, it may delay the process. If it does
not wait long enough, it may end up sending small segments. Nagle found an elegant
solution. Nagle’s algorithm is simple:
1. The sending TCP sends the first piece of data it receives from the sending applica-
tion program even if it is only 1 byte.
2. After sending the first segment, the sending TCP accumulates data in the output
buffer and waits until either the receiving TCP sends an acknowledgment or until
enough data have accumulated to fill a maximum-size segment. At this time, the
sending TCP can send the segment.
3. Step 2 is repeated for the rest of the transmission. Segment 3 is sent immediately if
an acknowledgment is received for segment 2, or if enough data have accumulated
to fill a maximum-size segment.

PART V
TRANSPORT LAYER
The elegance of Nagle’s algorithm is in its simplicity and in the fact that it takes into
account the speed of the application program that creates the data and the speed of
the network that transports the data. If the application program is faster than the
network, the segments are larger (maximum-size segments). If the application pro-
gram is slower than the network, the segments are smaller (less than the maximum
segment size).
Syndrome Created by the Receiver
The receiving TCP may create a silly window syndrome if it is serving an application
program that consumes data slowly, for example, 1 byte at a time. Suppose that
the sending application program creates data in blocks of 1 kilobyte, but the receiv-
ing application program consumes data 1 byte at a time. Also suppose that the input
buffer of the receiving TCP is 4 kilobytes. The sender sends the first 4 kilobytes of
data. The receiver stores it in its buffer. Now its buffer is full. It advertises a window
size of zero, which means the sender should stop sending data. The receiving applica-
tion reads the first byte of data from the input buffer of the receiving TCP. Now there
is 1 byte of space in the incoming buffer. The receiving TCP announces a window
size of 1 byte, which means that the sending TCP, which is eagerly waiting to send
data, takes this advertisement as good news and sends a segment carrying only 1 byte
of data. The procedure will continue. One byte of data is consumed and a segment
carrying 1 byte of data is sent. Again we have an efficiency problem and the silly
window syndrome.
Two solutions have been proposed to prevent the silly window syndrome created
by an application program that consumes data more slowly than they arrive. Clark’s
solution is to send an acknowledgment as soon as the data arrive, but to announce a
window size of zero until either there is enough space to accommodate a segment of
maximum size or until at least half of the receive buffer is empty. The second solution
is to delay sending the acknowledgment. This means that when a segment arrives, it is
not acknowledged immediately. The receiver waits until there is a decent amount of
space in its incoming buffer before acknowledging the arrived segments. The delayed
acknowledgment prevents the sending TCP from sliding its window. After the sending
TCP has sent the data in the window, it stops. This kills the syndrome. 
Delayed acknowledgment also has another advantage: it reduces traffic. The receiver
does not have to acknowledge each segment. However, there also is a disadvantage in
that the delayed acknowledgment may result in the sender unnecessarily retransmitting
the unacknowledged segments. 
The protocol balances the advantages and disadvantages. It now defines that the
acknowledgment should not be delayed by more than 500 ms. 
24.3.8
Error Control
TCP is a reliable transport-layer protocol. This means that an application program that
delivers a stream of data to TCP relies on TCP to deliver the entire stream to the appli-
cation program on the other end in order, without error, and without any part lost or
duplicated.
TCP provides reliability using error control. Error control includes mechanisms for
detecting and resending corrupted segments, resending lost segments, storing out-of-
order segments until missing segments arrive, and detecting and discarding duplicated

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

segments. Error control in TCP is achieved through the use of three simple tools:
checksum, acknowledgment, and time-out. 
Checksum
Each segment includes a checksum field, which is used to check for a corrupted seg-
ment. If a segment is corrupted, as detected by an invalid checksum, the segment is dis-
carded by the destination TCP and is considered as lost. TCP uses a 16-bit checksum
that is mandatory in every segment. We discuss checksum calculation in Chapter 10. 
Acknowledgment
TCP uses acknowledgments to confirm the receipt of data segments. Control segments
that carry no data, but consume a sequence number, are also acknowledged. ACK seg-
ments are never acknowledged. 
Acknowledgment Type
In the past, TCP used only one type of acknowledgment: cumulative acknowledgment.
Today, some TCP implementations also use selective acknowledgment. 
Cumulative Acknowledgment (ACK) 
TCP was originally designed to acknowledge
receipt of segments cumulatively. The receiver advertises the next byte it expects to
receive, ignoring all segments received and stored out of order. This is sometimes
referred to as positive cumulative acknowledgment, or ACK. The word positive indi-
cates that no feedback is provided for discarded, lost, or duplicate segments. The 32-bit
ACK field in the TCP header is used for cumulative acknowledgments, and its value is
valid only when the ACK flag bit is set to 1.
Selective Acknowledgment (SACK)
More and more implementations are adding
another type of acknowledgment called selective acknowledgment, or SACK. A SACK
does not replace an ACK, but reports additional information to the sender. A SACK
reports a block of bytes that is out of order, and also a block of bytes that is duplicated,
i.e., received more than once. However, since there is no provision in the TCP header
for adding this type of information, SACK is implemented as an option at the end of the
TCP header. We discuss this new feature when we discuss options in TCP on the book
website. 
Generating Acknowledgments
When does a receiver generate acknowledgments? During the evolution of TCP, several
rules have been defined and used by several implementations. We give the most com-
mon rules here. The order of a rule does not necessarily define its importance.
1. When end A sends a data segment to end B, it must include (piggyback) an
acknowledgment that gives the next sequence number it expects to receive. This
rule decreases the number of segments needed and therefore reduces traffic.
2. When the receiver has no data to send and it receives an in-order segment (with
expected sequence number) and the previous segment has already been acknowl-
edged, the receiver delays sending an ACK segment until another segment
ACK segments do not consume sequence numbers and
are not acknowledged. 

PART V
TRANSPORT LAYER
arrives or until a period of time (normally 500 ms) has passed. In other words,
the receiver needs to delay sending an ACK segment if there is only one out-
standing in-order segment. This rule reduces ACK segments. 
3. When a segment arrives with a sequence number that is expected by the receiver,
and the previous in-order segment has not been acknowledged, the receiver imme-
diately sends an ACK segment. In other words, there should not be more than two
in-order unacknowledged segments at any time. This prevents the unnecessary
retransmission of segments that may create congestion in the network.
4. When a segment arrives with an out-of-order sequence number that is higher than
expected, the receiver immediately sends an ACK segment announcing the
sequence number of the next expected segment. This leads to the fast retransmis-
sion of missing segments (discussed later). 
5. When a missing segment arrives, the receiver sends an ACK segment to announce
the next sequence number expected. This informs the receiver that segments
reported missing have been received. 
6. If a duplicate segment arrives, the receiver discards the segment, but immediately
sends an acknowledgment indicating the next in-order segment expected. This
solves some problems when an ACK segment itself is lost. 
Retransmission
The heart of the error control mechanism is the retransmission of segments. When a
segment is sent, it is stored in a queue until it is acknowledged. When the retransmis-
sion timer expires or when the sender receives three duplicate ACKs for the first seg-
ment in the queue, that segment is retransmitted.
Retransmission after RTO
The sending TCP maintains one retransmission time-out (RTO) for each connec-
tion. When the timer matures, i.e. times out, TCP resends the segment in the front of
the queue (the segment with the smallest sequence number) and restarts the timer.
Note that again we assume Sf < Sn. We will see later that the value of RTO is dynamic
in TCP and is updated based on the round-trip time (RTT) of segments. RTT is the
time needed for a segment to reach a destination and for an acknowledgment to be
received.
Retransmission after Three Duplicate ACK Segments
The previous rule about retransmission of a segment is sufficient if the value of RTO is
not large. To expedite service throughout the Internet by allowing senders to retransmit
without waiting for a time out, most implementations today follow the three duplicate
ACKs rule and retransmit the missing segment immediately. This feature is called fast
retransmission. In this version, if three duplicate acknowledgments (i.e., an original
ACK plus three exactly identical copies) arrive for a segment, the next segment is
retransmitted without waiting for the time-out. We come back to this feature later in the
chapter. 
Out-of-Order Segments 
TCP implementations today do not discard out-of-order segments. They store them
temporarily and flag them as out-of-order segments until the missing segments arrive.

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

Note, however, that out-of-order segments are never delivered to the process. TCP
guarantees that data are delivered to the process in order. 
FSMs for Data Transfer in TCP 
Data transfer in TCP is close to the Selective-Repeat protocol with a slight similarity to
GBN. Since TCP accepts out-of-order segments, TCP can be thought of as behaving more
like the SR protocol, but since the original acknowledgments are cumulative, it looks like
GBN. However, if the TCP implementation uses SACKs, then TCP is closest to SR. 
Sender-Side FSM 
Let us show a simplified FSM for the sender side of the TCP protocol similar to the one
we discussed for the SR protocol, but with some changes specific to TCP. We assume
that the communication is unidirectional and the segments are acknowledged using
ACK segments. We also ignore selective acknowledgments and congestion control for
the moment. Figure 24.22 shows the simplified FSM for the sender site. Note that the
Data may arrive out of order and be temporarily stored by the receiving TCP, 
but TCP guarantees that no out-of-order data are delivered to the process. 
TCP can best be modeled as a Selective-Repeat protocol. 
Figure 24.22
Simplified FSM for the TCP sender side
[true] 
[false] 
Blocking
Ready
A chunk of bytes is accepted
from the process.   
Make a segment (seqNo = Sn).
Store a copy of the segment in
the queue and send it.
If it is the first segment in the
queue, start the timer.
Set Sn = Sn  + data length.
Time-out occurred.  
Resend the segment
in front of the queue.
Reset the timer. 
Time-out occurred.  
Resend the first
segment in the queue.
Reset the timer. 
Discard it. 
A corrupted
ACK arrived.
Discard it. 
A corrupted 
ACK arrived.    
Slide the window (Sf  = ackNo)
and adjust window size.
Remove the segment from the
queue.
If any segment is left in the
queue, restart the timer. 
An error-free ACK arrived
that acknowledges the segment
in front of the queue.   
Set dupNo = dupNo + 1.
If (dupNo = 3) resend the 
segment in front of the
queue, restart the timer, and  
set dupNo = 0.    
A duplicate ACK arrived.   
Set dupNo = dupNo + 1.
If (dupNo = 3) resend the 
segment in front of the
queue, restart the timer,
and set dupNo = 0.    
A duplicate ACK arrived.   
Window full? 
Note:
All calculations are in 
modulo 232.
Start

PART V
TRANSPORT LAYER
FSM is rudimentary; it does not include issues such as silly window syndrome (Nagle’s
algorithm) or window shutdown. It defines a unidirectional communication, ignoring
all issues that affect bidirectional communication. 
There are some differences between the FSM in Figure 24.22 and the one we dis-
cussed for an SR protocol. One difference is the fast transmission (three duplicate
ACKs). The other is the window size adjustment based on the value of rwnd (ignoring
congestion control for the moment). 
Receiver-Side FSM
Now let us show a simplified FSM for the receiver-side TCP protocol similar to the one
we discuss for the SR protocol, but with some changes specific to TCP. We assume that
the communication is unidirectional and the segments are acknowledged using ACK
segments. We also ignore the selective acknowledgment and congestion control for the
moment. Figure 24.23 shows the simplified FSM for the receiver. Note that we ignore
some issues such as silly window syndrome (Clark’s solution) and window shutdown.
Again, there are some differences between this FSM and the one we discussed for
an SR protocol. One difference is the ACK delaying in unidirectional communication.
The other difference is the sending of duplicate ACKs to allow the sender to implement
fast retransmission policy. 
Figure 24.23
Simplified FSM for the TCP receiver side
Store the segment if not duplicate.
Send an ACK with ackNo equal
to the sequence number of expected 
segment (duplicate ACK).  
An error-free, but out-of-
order segment arrived.
An expected error-free segment arrived. 
Buffer the message.
Rn = Rn + data length.
If the ACK-delaying timer is running,
stop the timer and send a cumulative ACK.
Otherwise, start the ACK-delaying timer.
ACK-delaying timer expired. 
Send the delayed ACK. 
An error-free duplicate segment 
or an error-free segment with 
sequence number outside 
window arrived.
Discard the segment.
Send an ACK with ackNo equal
to the sequence number of expected 
segment (duplicate ACK).  
A corrupted segment arrived.
Discard the segment.  
Deliver the data. 
Slide the window and
adjust window size.  
A request for delivery of 
k bytes of data from 
process came.   
Ready
Note:
All calculations are in 
modulo 232.
Start

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

We also need to emphasize that bidirectional FSM for the receiver is not as simple
as the one for SR; we need to consider some policies such as sending an immediate
ACK if the receiver has some data to return. 
Some Scenarios
In this section we give some examples of scenarios that occur during the operation of
TCP, considering only error control issues. In these scenarios, we show a segment by a
rectangle. If the segment carries data, we show the range of byte numbers and the value
of the acknowledgment field. If it carries only an acknowledgment, we show only the
acknowledgment number in a smaller box. 
Normal Operation
The first scenario shows bidirectional data transfer between two systems as shown in
Figure 24.24. The client TCP sends one segment; the server TCP sends three. The fig-
ure shows which rule applies to each acknowledgment. At the server site, only rule 1
applies. There are data to be sent, so the segment displays the next byte expected.
When the client receives the first segment from the server, it does not have any more
data to send; it needs to send only an ACK segment. However, according to rule 2, the
acknowledgment needs to be delayed for 500 ms to see if any more segments arrive.
When the ACK-delaying timer matures, it triggers an acknowledgment. This is
because the client has no knowledge of whether other segments are coming; it cannot
delay the acknowledgment forever. When the next segment arrives, another ACK-
delaying timer is set. However, before it matures, the third segment arrives. The arrival
of the third segment triggers another acknowledgment based on rule 3. We have not
shown the RTO timer because no segment is lost or delayed. We just assume that the
RTO timer performs its duty.    
Figure 24.24
Normal operation
Time
500 ms
ACK-delaying
timer
< 500 ms
Client
Server
Time
Rule 1
Rule 2
Rule 1
Rule 3
Seq: 1201–1400
Ack: 4001
Seq: 4001–5000
Ack: 1401
Seq: 5001–6000
Ack: 1401
Ack: 5001 
Rule 1
Rule 1
Start
Start
Stop
Time-out
Ack: 7001 
Seq: 6001–7000
Ack: 1401

PART V
TRANSPORT LAYER
Lost Segment
In this scenario, we show what happens when a segment is lost or corrupted. A lost or
corrupted segment is treated the same way by the receiver. A lost segment is discarded
somewhere in the network; a corrupted segment is discarded by the receiver itself. Both
are considered lost. Figure 24.25 shows a situation in which a segment is lost (probably
discarded by some router in the network due to congestion).  
We are assuming that data transfer is unidirectional: one site is sending, the other
receiving. In our scenario, the sender sends segments 1 and 2, which are acknowledged
immediately by an ACK (rule 3). Segment 3, however, is lost. The receiver receives
segment 4, which is out of order. The receiver stores the data in the segment in its buffer
but leaves a gap to indicate that there is no continuity in the data. The receiver immedi-
ately sends an acknowledgment to the sender displaying the next byte it expects (rule 4).
Note that the receiver stores bytes 801 to 900, but never delivers these bytes to the
application until the gap is filled. 
The sender TCP keeps one RTO timer for the whole period of connection. When
the third segment times out, the sending TCP resends segment 3, which arrives this
time and is acknowledged properly (rule 5). 
Fast Retransmission
In this scenario, we want to show fast retransmission. Our scenario is the same as the
second except that the RTO has a larger value (see Figure 24.26).  
Each time the receiver receives a subsequent segment, it triggers an acknowledg-
ment (rule 4). The sender receives four acknowledgments with the same value (three
duplicates). Although the timer has not matured, the rule for fast retransmission
Figure 24.25
Lost segment
The receiver TCP delivers only ordered data to the process. 
Time
Out of order
Lost
Client
Server
RTO
Receiver
buffer
Time
Seq: 501–600
Ack: x
Ack: 701 
Ack: 701 
Ack: 901 
Start
Start
Stop
Time-out/restart
Stop
Rule 4
Rule 3
Rule 5
Resent
Seq: 601–700
Ack: x
Seq: 701–800
Ack: x
Seq: 801–900
Ack: x
Seq: 701– 800
Ack: x

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

requires that segment 3, the segment that is expected by all of these duplicate acknowl-
edgments, be resent immediately. After resending this segment, the timer is restarted.
Delayed Segment
The fourth scenario features a delayed segment. TCP uses the services of IP, which is a
connectionless protocol. Each IP datagram encapsulating a TCP segment may reach the
final destination through a different route with a different delay. Hence TCP segments may
be delayed. Delayed segments sometimes may time out and be resent. If the delayed seg-
ment arrives after it has been resent, it is considered a duplicate segment and discarded. 
Duplicate Segment
A duplicate segment can be created, for example, by a sending TCP when a segment is
delayed and treated as lost by the receiver. Handling the duplicated segment is a simple
process for the destination TCP. The destination TCP expects a continuous stream of bytes.
When a segment arrives that contains a sequence number equal to an already received and
stored segment, it is discarded. An ACK is sent with ackNo defining the expected segment.
Automatically Corrected Lost ACK
This scenario shows a situation in which information in a lost acknowledgment is
contained in the next one, a key advantage of using cumulative acknowledgments.
Figure 24.27 shows a lost acknowledgment sent by the receiver of data. In the TCP
acknowledgment mechanism, a lost acknowledgment may not even be noticed by the
source TCP. TCP uses cumulative acknowledgment. We can say that the next
acknowledgment automatically corrects the loss of the previous acknowledgment. 
Figure 24.26
Fast retransmission
Time
Resent
Lost
resent
Receiver
buffer
Time
Client
Server
Seq: 101–200
Ack: x
Seq: 301–400
Ack: x
Seq: 401–500
Ack: x
Ack: 301 
Ack: 301 
Seq: 501–600
Ack: x
Ack: 301 
Seq: 601–700
Ack: x
Ack: 301 
Seq: 301–400
Ack: x
Ack: 701 
All in order
Fast
retransmission
Start
RTO timer
Restart
Stop
Original
First
duplicate 
Second
duplicate 
Third
duplicate 
Stop
Start
Seq: 201–300
Ack: x

PART V
TRANSPORT LAYER
Lost Acknowledgment Corrected by Resending a Segment
Figure 24.28 shows a scenario in which an acknowledgment is lost. 
If the next acknowledgment is delayed for a long time or there is no next acknowl-
edgment (the lost acknowledgment is the last one sent), the correction is triggered by
the RTO timer. A duplicate segment is the result. When the receiver receives a duplicate
segment, it discards it and resends the last ACK immediately to inform the sender that
the segment or segments have been received. 
Note that only one segment is retransmitted although two segments are not
acknowledged. When the sender receives the retransmitted ACK, it knows that both
segments are safe and sound because the acknowledgment is cumulative. 
Deadlock Created by Lost Acknowledgment   
There is one situation in which loss of an acknowledgment may result in system dead-
lock. This is the case in which a receiver sends an acknowledgment with rwnd set to 0
and requests that the sender shut down its window temporarily. After a while, the
receiver wants to remove the restriction; however, if it has no data to send, it sends an
ACK segment and removes the restriction with a nonzero value for rwnd. A problem
Figure 24.27
Lost acknowledgment
Figure 24.28
Lost acknowledgment corrected by resending a segment
Lost
Seq: 501–600
Ack: x
Seq: 601–700
Ack: x
Seq: 701–800
Ack: x
Ack: 901 
Ack: 701 
Client
Server
Time
Time
RTO
Start
Stop
Seq: 801–900
Ack: x
Lost
Seq: 501–600
Ack: x
Seq: 601–700
Ack: x
Seq: 501–600
Ack: x
Ack: 701 
Ack: 701 
Client
Server
RTO
Time
Resent
Time
Start
Restart
Stop
Rule 6

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

arises if this acknowledgment is lost. The sender is waiting for an acknowledgment that
announces the nonzero rwnd. The receiver thinks that the sender has received this and is
waiting for data. This situation is called a deadlock; each end is waiting for a response
from the other end and nothing is happening. A retransmission timer is not set. To pre-
vent deadlock, a persistence timer was designed that we will study later in the chapter.  
24.3.9
TCP Congestion Control
TCP uses different policies to handle the congestion in the network. We describe these
policies in this section.
Congestion Window
When we discussed flow control in TCP, we mentioned that the size of the send win-
dow is controlled by the receiver using the value of rwnd, which is advertised in each
segment traveling in the opposite direction. The use of this strategy guarantees that
the receive window is never overflowed with the received bytes (no end congestion).
This, however, does not mean that the intermediate buffers, buffers in the routers, do
not become congested. A router may receive data from more than one sender. No
matter how large the buffers of a router may be, it may be overwhelmed with data,
which results in dropping some segments sent by a specific TCP sender. In other
words, there is no congestion at the other end, but there may be congestion in the
middle. TCP needs to worry about congestion in the middle because many segments
lost may seriously affect the error control. More segment loss means resending the
same segments again, resulting in worsening the congestion, and finally the collapse
of the communication. 
TCP is an end-to-end protocol that uses the service of IP. The congestion in the
router is in the IP territory and should be taken care of by IP. However, as we discussed
in Chapters 18 and 19, IP is a simple protocol with no congestion control. TCP, itself,
needs to be responsible for this problem.
TCP cannot ignore the congestion in the network; it cannot aggressively send seg-
ments to the network. The result of such aggressiveness would hurt the TCP itself, as
we mentioned before. TCP cannot be very conservative, either, sending a small number
of segments in each time interval, because this means not utilizing the available band-
width of the network. TCP needs to define policies that accelerate the data transmission
when there is no congestion and decelerate the transmission when congestion is
detected. 
To control the number of segments to transmit, TCP uses another variable called a
congestion window, cwnd, whose size is controlled by the congestion situation in the
network (as we will explain shortly). The cwnd variable and the rwnd variable together
define the size of the send window in TCP. The first is related to the congestion in the
middle (network); the second is related to the congestion at the end. The actual size of
the window is the minimum of these two.
Lost acknowledgments may create deadlock 
if they are not properly handled. 
Actual window size 5 minimum (rwnd, cwnd)

PART V
TRANSPORT LAYER
Congestion Detection
Before discussing how the value of cwnd should be set and changed, we need to
describe how a TCP sender can detect the possible existence of congestion in the net-
work. The TCP sender uses the occurrence of two events as signs of congestion in the
network: time-out and receiving three duplicate ACKs. 
The first is the time-out. If a TCP sender does not receive an ACK for a segment or
a group of segments before the time-out occurs, it assumes that the corresponding seg-
ment or segments are lost and the loss is due to congestion. 
Another event is the receiving of three duplicate ACKs (four ACKs with the same
acknowledgment number). Recall that when a TCP receiver sends a duplicate ACK, it
is the sign that a segment has been delayed, but sending three duplicate ACKs is the
sign of a missing segment, which can be due to congestion in the network. However,
the congestion in the case of three duplicate ACKs can be less severe than in the case of
time-out. When a receiver sends three duplicate ACKs, it means that one segment is
missing, but three segments have been received. The network is either slightly con-
gested or has recovered from the congestion. 
We will show later that an earlier version of TCP, called Taho TCP, treated both
events (time-out and three duplicate ACKs) similarly, but the later version of TCP,
called Reno TCP, treats these two signs differently. 
A very interesting point in TCP congestion is that the TCP sender uses only one
feedback from the other end to detect congestion: ACKs. The lack of regular, timely
receipt of ACKs, which results in a time-out, is the sign of a strong congestion; the
receiving of three duplicate ACKs is the sign of a weak congestion in the network. 
Congestion Policies
TCP’s general policy for handling congestion is based on three algorithms: slow start,
congestion avoidance, and fast recovery. We first discuss each algorithm before show-
ing how TCP switches from one to the other in a connection. 
Slow Start: Exponential Increase
The slow-start algorithm is based on the idea that the size of the congestion window
(cwnd) starts with one maximum segment size (MSS), but it increases one MSS each
time an acknowledgment arrives. As we discussed before, the MSS is a value negoti-
ated during the connection establishment, using an option of the same name. 
The name of this algorithm is misleading; the algorithm starts slowly, but grows
exponentially. To show the idea, let us look at Figure 24.29. We assume that rwnd is much
larger than cwnd, so that the sender window size always equals cwnd. We also assume
that each segment is of the same size and carries MSS bytes. For simplicity, we also
ignore the delayed-ACK policy and assume that each segment is acknowledged
individually. 
The sender starts with cwnd = 1. This means that the sender can send only one seg-
ment. After the first ACK arrives, the acknowledged segment is purged from the
window, which means there is now one empty segment slot in the window. The size of
the congestion window is also increased by 1 because the arrival of the acknowledg-
ment is a good sign that there is no congestion in the network. The size of the window
is now 2. After sending two segments and receiving two individual acknowledgments
for them, the size of the congestion window now becomes 4, and so on. In other words,

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

the size of the congestion window in this algorithm is a function of the number of
ACKs arrived and can be determined as follows. 
If an ACK arrives, cwnd = cwnd + 1.
If we look at the size of the cwnd in terms of round-trip times (RTTs), we find that
the growth rate is exponential in terms of each round trip time, which is a very aggres-
sive approach: 
A slow start cannot continue indefinitely. There must be a threshold to stop this
phase. The sender keeps track of a variable named ssthresh (slow-start threshold).
When the size of the window in bytes reaches this threshold, slow start stops and the
next phase starts.  
We need, however, to mention that the slow-start strategy is slower in the case of
delayed acknowledgments. Remember, for each ACK, the cwnd is increased by only 1.
Hence, if two segments are acknowledged cumulatively, the size of the cwnd increases
by only 1, not 2. The growth is still exponential, but it is not a power of 2. With one
ACK for every two segments, it is a power of 1.5.      
Congestion Avoidance: Additive Increase
If we continue with the slow-start algorithm, the size of the congestion window
increases exponentially. To avoid congestion before it happens, we must slow down
Figure 24.29
Slow start, exponential increase
Start                     
→
cwnd = 1 → 20 
After 1 RTT              
→
cwnd = cwnd + 1  = 1 + 1 = 2 → 21 
After 2 RTT              
→
cwnd = cwnd + 2  = 2 + 2 = 4→ 22 
After 3 RTT            
→
cwnd = cwnd + 4  = 4 + 4 = 8→ 23
In the slow-start algorithm, the size of the congestion
window increases exponentially until it reaches a threshold. 
Time
cwnd
cwnd
cwnd
cwnd
Client
Server

Time
RTT
RTT
RTT
Segment
ACK

PART V
TRANSPORT LAYER
this exponential growth. TCP defines another algorithm called congestion avoid-
ance, which increases the cwnd additively instead of exponentially. When the size of
the congestion window reaches the slow-start threshold in the case where cwnd = i,
the slow-start phase stops and the additive phase begins. In this algorithm, each time
the whole “window” of segments is acknowledged, the size of the congestion window
is increased by one. A window is the number of segments transmitted during RTT.
Figure 24.30 shows the idea. 
The sender starts with cwnd = 4. This means that the sender can send only four seg-
ments. After four ACKs arrive, the acknowledged segments are purged from the win-
dow, which means there is now one extra empty segment slot in the window. The size
of the congestion window is also increased by 1. The size of window is now 5. After
sending five segments and receiving five acknowledgments for them, the size of the
congestion window now becomes 6, and so on. In other words, the size of the conges-
tion window in this algorithm is also a function of the number of ACKs that have
arrived and can be determined as follows: 
If an ACK arrives, cwnd 5 cwnd 1 (1/cwnd).
The size of the window increases only 1/cwnd portion of MSS (in bytes). In other
words, all segments in the previous window should be acknowledged to increase the
window 1 MSS bytes. 
If we look at the size of the cwnd in terms of round-trip times (RTTs), we find that
the growth rate is linear in terms of each round-trip time, which is much more conser-
vative than the slow-start approach.       
Figure 24.30
Congestion avoidance, additive increase
cwnd
cwnd
cwnd
cwnd
RTT
Time
Time
i = 4
i + 1
i + 2
i + 3
RTT
RTT
Segment
ACK
Client
Server

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

Fast Recovery
The fast-recovery algorithm is optional in TCP. The old version of
TCP did not use it, but the new versions try to use it. It starts when three duplicate
ACKs arrive, which is interpreted as light congestion in the network. Like congestion
avoidance, this algorithm is also an additive increase, but it increases the size of the
congestion window when a duplicate ACK arrives (after the three duplicate ACKs that
trigger the use of this algorithm). We can say 
If a duplicate ACK arrives, cwnd 5 cwnd 1 (1 / cwnd).
Policy Transition
We discussed three congestion policies in TCP. Now the question is when each of these
policies is used and when TCP moves from one policy to another. To answer these
questions, we need to refer to three versions of TCP: Taho TCP, Reno TCP, and New
Reno TCP. 
Taho TCP
The early TCP, known as Taho TCP, used only two different algorithms in their conges-
tion policy: slow start and congestion avoidance. We use Figure 24.31 to show the FSM
for this version of TCP. However, we need to mention that we have deleted some small
trivial actions, such as incrementing and resetting the number of duplicate ACKs, to make
the FSM less crowded and simpler.    
Start                   
→
cwnd = i 
After 1 RTT              
→
cwnd = i + 1 
After 2 RTT 
→
cwnd = i + 2 
After 3 RTT    
→
cwnd = i + 3 
In the congestion-avoidance algorithm, the size of the congestion window
increases additively until congestion is detected. 
Figure 24.31
FSM for Taho TCP
Congestion
avoidance
Slow
start
Start
Time-out or 3 dupACKs
ssthresh = cwnd / 2    
cwnd = 1    
cwnd ≥  ssthresh  
Time-out or 3 dupACKs
ssthresh = cwnd / 2
cwnd = 1
An ACK arrived
cwnd = cwnd + 1
An ACK arrived   
cwnd = cwnd + (1 / cwnd)
ssthresh = ...
cwnd = 1
None
None

PART V
TRANSPORT LAYER
Taho TCP treats the two signs used for congestion detection, time-out and three
duplicate ACKs, in the same way. In this version, when the connection is established,
TCP starts the slow-start algorithm and sets the ssthresh variable to a pre-agreed value
(normally a multiple of MSS) and the cwnd to 1 MSS. In this state, as we said before,
each time an ACK arrives, the size of the congestion window is incremented by 1. We
know that this policy is very aggressive and exponentially increases the size of the win-
dow, which may result in congestion. 
If congestion is detected (occurrence of time-out or arrival of three duplicate
ACKs), TCP immediately interrupts this aggressive growth and restarts a new slow
start algorithm by limiting the threshold to half of the current cwnd and resetting the
congestion window to 1. In other words, not only does TCP restart from scratch, but
it also learns how to adjust the threshold. If no congestion is detected while reaching
the threshold, TCP learns that the ceiling of its ambition is reached; it should not
continue at this speed. It moves to the congestion avoidance state and continues in
that state.
In the congestion-avoidance state, the size of the congestion window is increased
by 1 each time a number of ACKs equal to the current size of the window has been
received. For example, if the window size is now 5 MSS, five more ACKs should be
received before the size of the window becomes 6 MSS. Note that there is no ceiling for
the size of the congestion window in this state; the conservative additive growth of the
congestion window continues to the end of the data transfer phase unless congestion is
detected. If congestion is detected in this state, TCP again resets the value of the
ssthresh to half of the current cwnd and moves to the slow-start state again. 
Although in this version of TCP the size of ssthresh is continuously adjusted in
each congestion detection, this does not mean that it necessarily becomes lower than
the previous value. For example, if the original ssthresh value is 8 MSS and congestion
is detected when TCP is in the congestion avoidance state and the value of the cwnd is
20, the new value of the ssthresh is now 10, which means it has been increased. 
Example 24.9
Figure 24.32 shows an example of congestion control in a Taho TCP. TCP starts data transfer and
sets the ssthresh variable to an ambitious value of 16 MSS. TCP begins at the slow-start (SS)
state with the cwnd = 1. The congestion window grows exponentially, but a time-out occurs after
the third RTT (before reaching the threshold). TCP assumes that there is congestion in the net-
work. It immediately sets the new ssthresh = 4 MSS (half of the current cwnd, which is 8) and
begins a new slow-start (SA) state with cwnd = 1 MSS. The congestion window grows exponen-
tially until it reaches the newly set threshold. TCP now moves to the congestion-avoidance (CA)
state and the congestion window grows additively until it reaches cwnd = 12 MSS. At this
moment, three duplicate ACKs arrive, another indication of congestion in the network. TCP
again halves the value of ssthresh to 6 MSS and begins a new slow-start (SS) state. The expo-
nential growth of the cwnd continues. After RTT 15, the size of cwnd is 4 MSS. After sending
four segments and receiving only two ACKs, the size of the window reaches the ssthresh (6) and
TCP moves to the congestion-avoidance state. The data transfer now continues in the congestion-
avoidance (CA) state until the connection is terminated after RTT 20. 
Reno TCP
A newer version of TCP, called Reno TCP, added a new state to the congestion-control
FSM, called the fast-recovery state. This version treated the two signals of congestion,

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

time-out and the arrival of three duplicate ACKs, differently. In this version, if a time-out
occurs, TCP moves to the slow-start state (or starts a new round if it is already in this
state); on the other hand, if three duplicate ACKs arrive, TCP moves to the fast-recovery
state and remains there as long as more duplicate ACKs arrive. The fast-recovery state is
a state somewhere between the slow-start and the congestion-avoidance states. It
behaves like the slow start, in which the cwnd grows exponentially, but the cwnd starts
with the value of ssthresh plus 3 MSS (instead of 1). When TCP enters the fast-recovery
state, three major events may occur. If duplicate ACKs continue to arrive, TCP stays in
this state, but the cwnd grows exponentially. If a time-out occurs, TCP assumes that
there is real congestion in the network and moves to the slow-start state. If a new (non-
duplicate) ACK arrives, TCP moves to the congestion-avoidance state, but deflates the
size of the cwnd to the ssthresh value, as though the three duplicate ACKs have not
occurred, and transition is from the slow-start state to the congestion-avoidance state.
Figure 24.33 shows the simplified FSM for Reno TCP. Again, we have removed some
trivial events to simplify the figure and discussion.       
Example 24.10
Figure 24.34 shows the same situation as Figure 24.32, but in Reno TCP. The changes in the con-
gestion window are the same until RTT 13 when three duplicate ACKs arrive. At this moment,
Reno TCP drops the ssthresh to 6 MSS (same as Taho TCP), but it sets the cwnd to a much
higher value (ssthresh + 3 = 9 MSS) instead of 1 MSS. Reno TCP now moves to the fast recov-
ery state. We assume that two more duplicate ACKs arrive until RTT 15, where cwnd grows
exponentially. In this moment, a new ACK (not duplicate) arrives that announces the receipt of
the lost segment. Reno TCP now moves to the congestion-avoidance state, but first deflates the
Figure 24.32
Example 24.9 
ssthresh (16)
ssthresh (4)
ssthresh (6)
SS
SS:
SS
SS
CA
CA
CA:
Beginning of slow start
ACK(s) arrival 
Congestion detection
Threshold level
Slow start
Congestion avoidance
Events
Time-out: Time-out occurred
3dupACKs: Three duplicate ACKs arrived
RTTs
cwnd 
(in MSS)

9 10 11 12 13 14 15 16

19 20

Time-out
Th
Th
3dupACKs
Legend
Th: ssthresh ≥  cwnd

PART V
TRANSPORT LAYER
congestion window to 6 MSS (the ssthresh value) as though ignoring the whole fast-recovery
state and moving back to the previous track. 
NewReno TCP
A later version of TCP, called NewReno TCP, made an extra optimization on the Reno
TCP. In this version, TCP checks to see if more than one segment is lost in the current
window when three duplicate ACKs arrive. When TCP receives three duplicate ACKs,
it retransmits the lost segment until a new ACK (not duplicate) arrives. If the new ACK
defines the end of the window when the congestion was detected, TCP is certain that
only one segment was lost. However, if the ACK number defines a position between the
retransmitted segment and the end of the window, it is possible that the segment defined
by the ACK is also lost. NewReno TCP retransmits this segment to avoid receiving
more and more duplicate ACKs for it. 
Additive Increase, Multiplicative Decrease
Out of the three versions of TCP, the Reno version is most common today. It has been
observed that, in this version, most of the time the congestion is detected and taken care
of by observing the three duplicate ACKs. Even if there are some time-out events, TCP
recovers from them by aggressive exponential growth. In other words, in a long TCP
connection, if we ignore the slow-start states and short exponential growth during fast
recovery, the TCP congestion window is cwnd = cwnd + (1 / cwnd) when an ACK arrives
(congestion avoidance), and cwnd = cwnd / 2 when congestion is detected, as though SS
does not exist and the length of FR is reduced to zero. The first is called additive
Figure 24.33
FSM for Reno TCP 
Time-out   
ssthresh = cwnd / 2
cwnd = 1
Congestion
avoidance
Slow
start
cwnd ≥  ssthresh  
Time-out 
ssthresh = cwnd / 2    
cwnd = 1    
Time-out 
ssthresh = cwnd / 2    
cwnd = 1    
A new ACK arrived 
cwnd = ssthresh
3 dupACKs 
ssthresh = cwnd / 2
cwnd = ssthresh + 3
3 dupACKs 
ssthresh = cwnd / 2
cwnd = ssthresh + 3
An ACK arrived
cwnd = cwnd + 1
An ACK arrived   
cwnd = cwnd + (1/ cwnd)
ssthresh = ...
cwnd = 1
None
None
A dupACK arrived   
cwnd = cwnd + 1   
Note: Unit of cwnd is MSS.        
Fast
recovery
Start

CHAPTER 24
TRANSPORT-LAYER PROTOCOLS

increase; the second is called multiplicative decrease. This means that the congestion
window size, after it passes the initial slow-start state, follows a saw tooth pattern called
additive increase, multiplicative decrease (AIMD), as shown in Figure 24.35. 
TCP Throughput
The throughput for TCP, which is based on the congestion window behavior, can be
easily found if the cwnd is a constant (flat line) function of RTT. The throughput with
this unrealistic assumption is throughput = cwnd / RTT. In this assumption, TCP sends
Figure 24.34
Example 24.10
Figure 24.35
Additive increase, multiplicative decrease (AIMD)
ssthresh (16)
ssthresh (4)
ssthresh (6)
RTTs
Th
SS
SS
FR
CA
CA
cwnd
(in MSS)

9 10 11 12 13 14 15 16

19 20

Events
Th: ssthresh ≥  cwnd
Timeout: Time-out occured
3dupACKs: Three duplicate ACKs arrived
new ACK: Arrival of new ACK
SS:
CA:
Beginning of slow start
ACK(s) arrival 
Congestion detection
Threshold level
Slow start
Congestion avoidance
FR: Fast recovery
Legend
new
ACK
Time-out
3dupACKs
cwnd 
(in MSS)
RTTs

9 10 11 12 13 14 15 16

19 20

Legend
Additive increase
Multiplicative decrease
Transition point

PART V
TRANSPORT LAYER
a cwnd bytes of data and receives acknowledgement for them in RTT time. The behav-
ior of TCP, as shown in Figure 24.35, is not a flat line; it is like saw teeth, with many
minimum and maximum values. If each tooth were exactly the same, we could say that
the throughput = [(maximum + minimum) / 2] / RTT. However, we know that the value
of the maximum is twice the value of the minimum because in each congestion detec-
tion the value of cwnd is set to half of its previous value. So the throughput can be bet-
ter calculated as  
in which Wmax is the average of window sizes when the congestion occurs. 
Example 24.11
If MSS = 10 KB (kilobytes) and RTT = 100 ms in Figure 24.35, we can calculate the throughput as
shown below.    
24.3.10
TCP Timers
To perform their operations smoothly, most TCP implementations use at least four timers:
retransmission, persistence, keepalive, and TIME-WAIT.
Retransmission Timer
To retransmit lost segments, TCP employs one retransmission timer (for the whole
connection period) that handles the retransmission time-out (RTO), the waiting time
for an acknowledgment of a segment. We can define the following rules for the
retransmission timer:
1. When TCP sends the segment in front of the sending queue, it starts the timer.
2. When the timer expires, TCP resends the first segment in front of the queue, and
restarts the timer. 
3. When a segment or segments are cumulatively acknowledged, the segment or seg-
ments are purged from the queue. 
4. If the queue is empty, TCP stops the timer; otherwise, TCP restarts the timer. 
Round-Trip Time (RTT)
To calculate the retransmission time-out (RTO), we first need to calculate the round-
trip time (RTT). However, calculating RTT in TCP is an involved process that we
explain step by step with some examples. 
❑
Measured RTT. We need to find how long it takes to send a segment and receive
an acknowledgment for it. This is the measured RTT. We need to remember that
the segments and their acknowledgments do not have a one-to-one relationship;
several segments may be acknowledged together. The measured round-trip time
for a segment is the time required for the segment to reach the destination and be
acknowledged, although the acknowledgment may include other segments. Note
that in TCP only one RTT measurement can be in progress at any time. This
means that if an RTT measurement is started, no other measurement starts until
throughput  5  (0.75) Wmax / RTT                     
Wmax = (10 + 12 + 10 + 8 + 8) / 5 = 9.6 MSS 
Throughput = (0.75 Wmax / RTT) = 0.75 × 960 kbps / 100 ms = 7.2 Mbps

---

## Module 5 Textbook

PART VI
APPLICATION LAYER
25.1
INTRODUCTION
The application layer provides services to the user. Communication is provided using
a logical connection, which means that the two application layers assume that there is
an imaginary direct connection through which they can send and receive messages.
Figure 25.1 shows the idea behind this logical connection. 
The figure shows the same scenario we have seen for other layers, but this time the
logical connection is between two application layers. A scientist working in a research
company, Sky Research, needs to order a book related to her research from an online
bookseller, Scientific Books. Logical connection takes place between the application
layer of a computer at Sky Research and the application layer of a server at Scientific
Books. We call the first host Alice and the second one Bob. The communication at the
Figure 25.1
Logical connection at the application layer
Legend
Alice
Sky Research
Scientific Books
Logical Connection
Alice
Point-to-point WAN
LAN switch
Router
WAN switch
R1
R2
R3
R4
To other
ISPs
To other
ISPs
R5
R6
R7
Bob
Bob
National ISP
Switched
WAN
ISP
Application
Transport
Network
Data-link
Physical
Application
Transport
Network
Data-link
Physical
To other
ISPs
I
II
III
MODULE 5

CHAPTER 25
INTRODUCTION TO APPLICATION LAYER

application layer is logical, not physical. Alice and Bob assume that there is a two-way
logical channel between them through which they can send and receive messages. The
actual communication, however, takes place through several devices (Alice, R2, R4,
R5, R7, and Bob) and several physical channels, as shown in the figure.
25.1.1
Providing Services
All communication networks that started before the Internet were designed to provide
services to network users. Most of these networks, however, were originally designed
to provide one specific service. For example, the telephone network was originally
designed to provide voice service: to allow people all over the world to talk to each
other. This network, however, was later used for some other services, such as facsimile
(fax), enabled by users adding some extra hardware at both ends. 
The Internet was originally designed for the same purpose: to provide service to
users around the world. The layered architecture of the TCP/IP protocol suite, how-
ever, makes the Internet more flexible than other communication networks such as
postal or telephone networks. Each layer in the suite was originally made up of one
or more protocols, but new protocols can be added or some protocols can be removed
or replaced by the Internet authorities. However, if a protocol is added to each layer,
it should be designed in such a way that it uses the services provided by one of the
protocols at the lower layer. If a protocol is removed from a layer, care should be
taken to change the protocol at the next higher layer that supposedly uses the services
of the removed protocol.
The application layer, however, is somewhat different from other layers in that it is
the highest layer in the suite. The protocols in this layer do not provide services to any
other protocol in the suite; they only receive services from the protocols in the transport
layer. This means that protocols can be removed from this layer easily. New protocols
can be also added to this layer as long as the new protocols can use the services pro-
vided by one of the transport-layer protocols. 
Since the application layer is the only layer that provides services to the Internet
user, the flexibility of the application layer, as described above, allows new application
protocols to be easily added to the Internet, which has been occurring during the life-
time of the Internet. When the Internet was created, only a few application protocols
were available to the users; today we cannot give a number for these protocols because
new ones are being added constantly. 
Standard and Nonstandard Protocols
To provide smooth operation of the Internet, the protocols used in the first four layers
of the TCP/IP suite need to be standardized and documented. They normally become
part of the package that is included in operating systems such as Windows or UNIX.
To be flexible, however, the application-layer protocols can be both standard and
nonstandard. 
Standard Application-Layer Protocols
There are several application-layer protocols that have been standardized and docu-
mented by the Internet authority, and we are using them in our daily interaction with the
Internet. Each standard protocol is a pair of computer programs that interact with the user
and the transport layer to provide a specific service to the user. We will discuss some of

PART VI
APPLICATION LAYER
these standard applications in Chapter 26. In the case of these application protocols, we
should know what types of services they provide, how they work, the options that we can
use with these applications, and so on. The study of these protocols enables a network
manager to easily solve the problems that may occur when using these protocols. The
deep understanding of how these protocols work will also give us some ideas about how
to create new nonstandard protocols. 
Nonstandard Application-Layer Protocols
A programmer can create a nonstandard application-layer program if she can write two
programs that provide service to the user by interacting with the transport layer. Later
in this chapter, we show how we can write these types of programs. It is the creation of
a nonstandard (proprietary) protocol, which does not even need the approval of the
Internet authorities if privately used, that has made the Internet so popular worldwide.
A private company can create a new customized application protocol to communicate
with all of its offices around the world using the services provided by the first four lay-
ers of the TCP/IP protocol suite without using any of the standard application pro-
grams. What is needed is to write programs, in one of the computer languages, that use
the available services provided by the transport-layer protocols. 
25.1.2
Application-Layer Paradigms 
It should be clear that to use the Internet we need two application programs to interact
with each other: one running on a computer somewhere in the world, the other running
on another computer somewhere else in the world. The two programs need to send
messages to each other through the Internet infrastructure. However, we have not dis-
cussed what the relationship should be between these programs. Should both applica-
tion programs be able to request services and provide services, or should the
application programs just do one or the other? Two paradigms have been developed
during the lifetime of the Internet to answer this question: the client-server paradigm
and the peer-to-peer paradigm. We briefly introduce these two paradigms here, but we
discuss the first one later in this chapter and the second in Chapter 29. 
Traditional Paradigm: Client-Server 
The traditional paradigm is called the client-server paradigm. It was the most popular
paradigm until a few years ago. In this paradigm, the service provider is an application
program, called the server process; it runs continuously, waiting for another application
program, called the client process, to make a connection through the Internet and ask
for service. There are normally some server processes that can provide a specific type
of service, but there are many clients that request service from any of these server pro-
cesses. The server process must be running all the time; the client process is started
when the client needs to receive service. 
The client-server paradigm is similar to some available services out of the territory
of the Internet. For example, a telephone directory center in any area can be thought of
as a server; a subscriber that calls and asks for a specific telephone number can be
thought of as a client. The directory center must be ready and available all the time; the
subscriber can call the center for a short period when the service is needed. 
Although the communication in the client-server paradigm is between two applica-
tion programs, the role of each program is totally different. In other words, we cannot

CHAPTER 25
INTRODUCTION TO APPLICATION LAYER

run a client program as a server program or vice versa. Later in this chapter, when we
talk about client-server programming in this paradigm, we show that we always need to
write two application programs for each type of service. Figure 25.2 shows an example
of a client-server communication in which three clients communicate with one server
to receive the services provided by this server. 
One problem with this paradigm is that the concentration of the communication
load is on the shoulder of the server, which means the server should be a powerful com-
puter. Even a powerful computer may become overwhelmed if a large number of clients
try to connect to the server at the same time. Another problem is that there should be
a service provider willing to accept the cost and create a powerful server for a specific
service, which means the service must always return some type of income for the server
in order to encourage such an arrangement. 
Several traditional services are still using this paradigm, including the World Wide
Web (WWW) and its vehicle HyperText Transfer Protocol (HTTP), file transfer proto-
col (FTP), secure shell (SSH), e-mail, and so on. We discuss some of these protocols
and applications later in the chapter. 
New Paradigm: Peer-to-Peer 
A new paradigm, called the peer-to-peer paradigm (often abbreviated P2P paradigm)
has emerged to respond to the needs of some new applications. In this paradigm, there
is no need for a server process to be running all the time and waiting for the client
processes to connect. The responsibility is shared between peers. A computer con-
nected to the Internet can provide service at one time and receive service at another
time. A computer can even provide and receive services at the same time. Figure 25.3
shows an example of communication in this paradigm. 
Figure 25.2
Example of a client-server paradigm
WAN
Switch
Router
LAN
LAN
LAN
Client
Client-server communication
Server
Internet

PART VI
APPLICATION LAYER
One of the areas that really fits in this paradigm is the Internet telephony. Commu-
nication by phone is indeed a peer-to-peer activity; no party needs to be running for-
ever waiting for the other party to call. Another area in which the peer-to-peer paradigm
can be used is when some computers connected to the Internet have something to share
with each other. For example, if an Internet user has a file available to share with other
Internet users, there is no need for the file holder to become a server and run a server pro-
cess all the time waiting for other users to connect and retrieve the file. 
 Although the peer-to-peer paradigm has been proved to be easily scalable and
cost-effective in eliminating the need for expensive servers to be running and main-
tained all the time, there are also some challenges. The main challenge has been
security; it is more difficult to create secure communication between distributed
services than between those controlled by some dedicated servers. The other challenge
is applicability; it appears that not all applications can use this new paradigm. For
example, not many Internet users are ready to become involved, if one day the Web can
be implemented as a peer-to-peer service. 
There are some new applications, such as BitTorrent, Skype, IPTV, and Internet
telephony, that use this paradigm. We will discuss some of these applications in
Chapter 29.   
Mixed Paradigm 
An application may choose to use a mixture of the two paradigms by combining the
advantages of both. For example, a light-load client-server communication can be
used to find the address of the peer that can offer a service. When the address of the
peer is found, the actual service can be received from the peer by using the peer-to-
peer paradigm.
Figure 25.3
Example of a peer-to-peer paradigm
Legend
WAN
Switch
Router
LAN
LAN
LAN
Peer
Peer-to-peer communication
Internet

CHAPTER 25
INTRODUCTION TO APPLICATION LAYER

25.2
CLIENT-SERVER PROGRAMMING
In a client-server paradigm, communication at the application layer is between two run-
ning application programs called processes: a client and a server. A client is a running
program that initializes the communication by sending a request; a server is another
application program that waits for a request from a client. The server handles the
request received from a client, prepares a result, and sends the result back to the client.
This definition of a server implies that a server must be running when a request from a
client arrives, but the client needs to be run only when it is needed. This means that if
we have two computers connected to each other somewhere, we can run a client pro-
cess on one of them and the server on the other. However, we need to be careful that the
server program is started before we start running the client program. In other words, the
lifetime of a server is infinite: it should be started and run forever, waiting for the cli-
ents. The lifetime of a client is finite: it normally sends a finite number of requests to
the corresponding server, receives the responses, and stops.
25.2.1
Application Programming Interface
How can a client process communicate with a server process? A computer program is nor-
mally written in a computer language with a predefined set of instructions that tells the
computer what to do. A computer language has a set of instructions for mathematical
operations, a set of instructions for string manipulation, a set of instructions for input/
output access, and so on. If we need a process to be able to communicate with another pro-
cess, we need a new set of instructions to tell the lowest four layers of the TCP/IP suite to
open the connection, send and receive data from the other end, and close the connection. A
set of instructions of this kind is normally referred to as an application programming
interface (API). An interface in programming is a set of instructions between two entities.
In this case, one of the entities is the process at the application layer and the other is the
operating system that encapsulates the first four layers of the TCP/IP protocol suite. In
other words, a computer manufacturer needs to build the first four layers of the suite in the
operating system and include an API. In this way, the processes running at the application
layer are able to communicate with the operating system when sending and receiving mes-
sages through the Internet. Several APIs have been designed for communication. Three
among them are common: socket interface, Transport Layer Interface (TLI), and
STREAM. In this chapter, we briefly discuss only socket interface, the most common one,
to give a general idea of network communication at the application layer.
Socket interface started in the early 1980s at UC Berkeley as part of a UNIX environ-
ment. The socket interface is a set of instructions that provide communication between
the application layer and the operating system, as shown in Figure 25.4. It is a set of
instructions that can be used by a process to communicate with another process. 
The idea of sockets allows us to use the set of all instructions already designed in a
programming language for other sources and sinks. For example, in most computer lan-
guages, like C, C++, or Java, we have several instructions that can read and write data
to other sources and sinks such as a keyboard (a source), a monitor (a sink), or a file
(source and sink). We can use the same instructions to read from or write to sockets. In
other words, we are adding only new sources and sinks to the programming language

PART VI
APPLICATION LAYER
without changing the way we send data or receive data. Figure 25.5 shows the idea and
compares the sockets with other sources and sinks.  
Sockets 
Although a socket is supposed to behave like a terminal or a file, it is not a physical
entity like them; it is an abstraction. It is an object that is created and used by the appli-
cation program. 
We can say that, as far as the application layer is concerned, communication
between a client process and a server process is communication between two sockets,
created at two ends, as shown in Figure 25.6. The client thinks that the socket is the
entity that receives the request and gives the response; the server thinks that the socket
is the one that has a request and needs the response. If we create two sockets, one at
each end, and define the source and destination addresses correctly, we can use the
available instructions to send and receive data. The rest is the responsibility of the oper-
ating system and the embedded TCP/IP protocol. 
Figure 25.4
Position of the socket interface
Figure 25.5
Sockets used the same way as other sources and sinks 
Transport layer
Network layer
Data-link layer
Physical layer
Application layer
Operating system
Socket interface
Client site
Server site
Transport layer
Network layer
Data-link layer
Physical layer
Application layer
Operating system
Socket interface
Application program
File
(sink and source)
Read
Read
Read
Write
Write
Write
Socket
(sink and source)
Keyboard
(source)
Monitor
(sink)

CHAPTER 25
INTRODUCTION TO APPLICATION LAYER

Socket Addresses 
The interaction between a client and a server is two-way communication. In a two-way
communication, we need a pair of addresses: local (sender) and remote (receiver). The
local address in one direction is the remote address in the other direction and vice
versa. Since communication in the client-server paradigm is between two sockets, we
need a pair of socket addresses for communication: a local socket address and a
remote socket address. However, we need to define a socket address in terms of identi-
fiers used in the TCP/IP protocol suite. 
A socket address should first define the computer on which a client or a server is
running. As we discussed in Chapter 18, a computer in the Internet is uniquely defined
by its IP address, a 32-bit integer in the current Internet version. However, several client
or server processes may be running at the same time on a computer, which means that
we need another identifier to define the specific client or server involved in the commu-
nication. As we discussed in Chapter 24, an application program can be defined by a
port number, a 16-bit integer. This means that a socket address should be a combination
of an IP address and a port number as shown in Figure 25.7. 
Since a socket defines the end-point of the communication, we can say that a
socket is identified by a pair of socket addresses, a local and a remote. 
Finding Socket Addresses 
How can a client or a server find a pair of socket addresses for communication? The sit-
uation is different for each site. 
Server Site
The server needs a local (server) and a remote (client) socket address for communication. 
Figure 25.6
Use of sockets in process-to-process communication
Figure 25.7
A socket address
Request
Response
Socket
Application 
layer
Application 
layer
Request
Response
Client
process
Server
process
Logical connection
Socket
Socket address
IP address
Port number
32 bits
16 bits

PART VI
APPLICATION LAYER
Local Socket Address
The local (server) socket address is provided by the operating
system. The operating system knows the IP address of the computer on which the
server process is running. The port number of a server process, however, needs to be
assigned. If the server process is a standard one defined by the Internet authority, a port
number is already assigned to it. For example, the assigned port number for a Hypertext
Transfer Protocol (HTTP) is the integer 80, which cannot be used by any other process.
We discussed  these well-known port numbers in Chapter 24. If the server process is
not standard, the designer of the server process can choose a port number, in the range
defined by the Internet authority, and assign it to the process. When a server starts run-
ning, it knows the local socket address. 
Remote Socket Address
The remote socket address for a server is the socket address
of the client that makes the connection. Since the server can serve many clients, it does
not know beforehand the remote socket address for communication. The server can find
this socket address when a client tries to connect to the server. The client socket
address, which is contained in the request packet sent to the server, becomes the remote
socket address that is used for responding to the client. In other words, although the
local socket address for a server is fixed and used during its lifetime, the remote socket
address is changed in each interaction with a different client. 
Client Site
The client also needs a local (client) and a remote (server) socket address for
communication. 
Local Socket Address
The local (client) socket address is also provided by the oper-
ating system. The operating system knows the IP address of the computer on which the
client is running. The port number, however, is a 16-bit temporary integer that is
assigned to a client process each time the process needs to start the communication.
The port number, however, needs to be assigned from a set of integers defined by the
Internet authority and called the ephemeral (temporary) port numbers, which we dis-
cussed in Chapter 24. The operating system, however, needs to guarantee that the new
port number is not used by any other running client process. The operating system
needs to remember the port number to be able to redirect the response received from
the server process to the client process that sent the request. 
Remote Socket Address
Finding the remote (server) socket address for a client, how-
ever, needs more work. When a client process starts, it should know the socket address
of the server it wants to connect to. We will have two situations in this case.
❑
Sometimes, the user who starts the client process knows both the server port
number and IP address of the computer on which the server is running. This usu-
ally occurs in situations when we have written client and server applications and
we want to test them. For example, at the end of this chapter we write some sim-
ple client and server programs and we test them using this approach. In this situ-
ation, the programmer can provide these two pieces of information when he runs
the client program.
❑
Although each standard application has a well-known port number, most of the
time, we do not know the IP address. This happens in situations such as when we

CHAPTER 25
INTRODUCTION TO APPLICATION LAYER

need to contact a web page, send an e-mail to a friend, copy a file from a remote
site, and so on. In these situations, the server has a name, an identifier that
uniquely defines the server process. Examples of these identifiers are URLs,
such as www.xxx.yyy, or e-mail addresses, such as xxxx@yyyy.com. The client
process should now change this identifier (name) to the corresponding server
socket address. The client process normally knows the port number because it
should be a well-known port number, but the IP address can be obtained using
another client-server application called the Domain Name System (DNS). We
will discuss DNS in Chapter 26, but it is enough to know that it acts as a directory in
the Internet. Compare the situation with the telephone directory. We want to call
someone whose name we know but whose telephone number can be obtained
from the telephone directory. The telephone directory maps the name to the tele-
phone number; DNS maps the server name to the IP address of the computer run-
ning that server. 
25.2.2
Using Services of the Transport Layer   
A pair of processes provide services to the users of the Internet, human or programs.
A pair of processes, however, need to use the services provided by the transport layer
for communication because there is no physical communication at the application
layer. As we discussed in Chapters 23 and 24, there are three common transport-layer
protocols in the TCP/IP suite: UDP, TCP, and SCTP. Most standard applications have
been designed to use the services of one of these protocols. When we write a new
application, we can decide which protocol we want to use. The choice of the transport-
layer protocol seriously affects the capability of the application processes. In this
section, we first discuss the services provided by each protocol to help understand
why a standard application uses it or which one we need to use if we decide to write
a new application.
UDP Protocol   
UDP provides connectionless, unreliable, datagram service. Connectionless service
means that there is no logical connection between the two ends exchanging messages.
Each message is an independent entity encapsulated in a datagram. UDP does not see
any relation (connection) between consequent datagrams coming from the same source
and going to the same destination.      
UDP is not a reliable protocol. Although it may check that the data is not corrupted
during the transmission, it does not ask the sender to resend the corrupted or lost data-
gram. For some applications, UDP has an advantage: it is message-oriented. It gives
boundaries to the messages exchanged. An application program may be designed to use
UDP if it is sending small messages and the simplicity and speed is more important for
the application than reliability. For example, some management and multimedia appli-
cations fit in this category. 
TCP Protocol     
TCP provides connection-oriented, reliable, byte-stream service. TCP requires that two
ends first create a logical connection between themselves by exchanging some

PART VI
APPLICATION LAYER
connection-establishment packets. This phase, which is sometimes called handshaking,
establishes some parameters between the two ends, including the size of the data pack-
ets to be exchanged, the size of buffers to be used for holding the chunks of data until
the whole message arrives, and so on. After the handshaking process, the two ends can
send chunks of data in segments in each direction. By numbering the bytes exchanged,
the continuity of the bytes can be checked. For example, if some bytes are lost or cor-
rupted, the receiver can request the resending of those bytes, which makes TCP a reli-
able protocol. TCP also can provide flow control and congestion control, as we saw in
Chapter 24. One problem with the TCP protocol is that it is not message-oriented; it
does not put boundaries on the messages exchanged. Most of the standard applications
that need to send long messages and require reliability may benefit from the service of
the TCP. 
SCTP Protocol  
SCTP provides a service which is a combination of the two other protocols. Like
TCP, SCTP provides a connection-oriented, reliable service, but it is not byte-
stream oriented. It is a message-oriented protocol like UDP. In addition, SCTP can
provide multi-stream service by providing multiple network-layer connections.
SCTP is normally suitable for any application that needs reliability and at the same
time needs to remain connected, even if a failure occurs in one network-layer
connection.
25.2.3
Iterative Communication Using UDP
Communication between a client program and a server program can occur iteratively
or concurrently. Although several client programs can access the same server pro-
gram at the same time, the server program can be designed to respond iteratively or
concurrently. An iterative server can process one client request at a time; it receives a
request, processes it, and sends the response to the requestor before handling another
request. When the server is handling the request from a client, the requests from other
clients, and even other requests from the same client, need to be queued at the server
site and wait for the server to be freed. The received and queued requests are handled
in the first-in, first-out fashion. In this section, we discuss iterative communication
using UDP.
Sockets Used for UDP 
In UDP communication, the client and server use only one socket each. The socket cre-
ated at the server site lasts forever; the socket created at the client site is closed
(destroyed) when the client process terminates. Figure 25.8 shows the lifetime of the
sockets in the server and client processes. In other words, different clients use different
sockets, but the server creates only one socket and changes only the remote socket
address each time a new client makes a connection. This is logical, because the server
does know its own socket address, but does not know the socket addresses of the clients
who need its services; it needs to wait for the client to connect before filling this part of
the socket address. 

CHAPTER 25
INTRODUCTION TO APPLICATION LAYER

Flow Diagram
As we discussed earlier, UDP provides a connectionless service, in which a client
sends a request and the server sends back a response. Figure 25.9 shows a simpli-
fied flow diagram for iterative communication. There are multiple clients, but
only one server. Each client is served in each iteration of the loop in the server.
Note that there is no connection establishment or connection termination. Each client
sends a single datagram and receives a single datagram. In other words, if a client wants
to send two datagrams, it is considered as two clients for the server. The second datagram
needs to wait for its turn. The diagram also shows the status of the socket after each
action. 
Server Process
The server makes a passive open, in which it becomes ready for the communication, but it
waits until a client process makes the connection. It creates an empty socket. It then binds
the socket to the server and the well-know port, in which only part of the socket (the
server socket address) is filled (binding can happen at the time of creation depending on
the underlying language). The server then issues a receive request command, which
blocks until it receives a request from a client. The server then fills the rest of the socket
(the client socket section) from the information obtained in the request. The request is the
process and the response is sent back to the client. The server now starts another iteration
waiting for another request to arrive (an infinite loop). Note that in each iteration, the
socket becomes only half-filled again; the client socket address is erased. It is totally
filled only when a request arrives. 
Client Process
The client process makes an active open. In other words, it starts a connection. It cre-
ates an empty socket and then issues the send command, which fully fills the socket,
and sends the request. The client then issues a receive command, which is blocked until
a response arrives from the server. The response is then handled and the socket is
destroyed. 
Figure 25.8
Sockets for UDP communication
Client 1
Client 2
Request
Response
Socket
Legend
Datagram

Server
Request
Response

PART VI
APPLICATION LAYER
25.2.4
Iterative Communication Using TCP
As we described before, TCP is a connection-oriented protocol. Before sending or
receiving data, a connection needs to be established between the client and the server.
After the connection is established, the two parties can send and receive chunks of
data as long as they have data to do so. Although iterative communication using TCP
is not very common, because it is simpler we discuss this type of communication in
this section. 
Sockets Used in TCP
The TCP server uses two different sockets, one for connection establishment and the
other for data transfer. We call the first one the listen socket and the second the
socket. The reason for having two types of sockets is to separate the connection phase
from the data exchange phase. A server uses a listen socket to listen for a new client
Figure 25.9
Flow diagram for iterative UDP communication
Clients
Socket
Socket
Legend
Block
Block
Unblock
Unblock
Server
Start 
Stop 
Start 
Receive request
Receive response 
Send response
Send request 
Handle request
and create
response 
Destroy socket
Create socket
Bind socket
Create socket
Handle
response
Request
Datagram
Empty socket
Half-filled socket
Filled socket
Datagram
Response
Infinite
loop

CHAPTER 25
INTRODUCTION TO APPLICATION LAYER

trying to establish connection. After the connection is established, the server creates
a socket to exchange data with the client and finally to terminate the connection. The
client uses only one socket for both connection establishment and data exchange
(see Figure 25.10). 
Flow Diagram
Figure 25.11 shows a simplified flow diagram for iterative communication using TCP.
There are multiple clients, but only one server. Each client is served in each iteration of
the loop. The flow diagram is almost similar to the one for UDP, but there are differ-
ences that we explain for each site.  
Server Process
In Figure 25.11, the TCP server process, like the UDP server process, creates a socket
and binds it, but these two commands create the listen socket to be used only for the
connection establishment phase. The server process then calls the listen procedure, to
allow the operating system to start accepting the clients, completing the connection
phase, and putting them in the waiting list to be served. 
The server process now starts a loop and serves the clients one by one. In each iter-
ation, the server process issues the accept procedure that removes one client from the
waiting list of the connected clients for serving. If the list is empty, the accept proce-
dure blocks until there is a client to be served. When the accept procedure returns, it
creates a new socket for data transfer. The server process now uses the client socket
address obtained during the connection establishment to fill the remote socket address
field in the newly created socket. At this time the client and server can exchange data. 
Client Process
The client flow diagram is almost similar to the UDP version except that the client
data-transfer box needs to be defined for each specific case. We do so when we write a
specific program later. 
Figure 25.10
Sockets used in TCP communication
Client 1
Create
Client 2
Server
Create
Connection establishment
Connection establishment

Data transfer and termination
Data transfer and termination
Listen socket
Socket
Legend

PART VI
 APPLICATION LAYER
26.1
WORLD WIDE WEB AND HTTP 
In this section, we first introduce the World Wide Web (abbreviated WWW or Web).
We then discuss the HyperText Transfer Protocol (HTTP), the most common client-
server application program used in relation to the Web. 
26.1.1
World Wide Web 
The idea of the Web was first proposed by Tim Berners-Lee in 1989 at CERN†, the
European Organization for Nuclear Research, to allow several researchers at different
locations throughout Europe to access each others’ researches. The commercial Web
started in the early 1990s. 
The Web today is a repository of information in which the documents, called web
pages, are distributed all over the world and related documents are linked together. The
popularity and growth of the Web can be related to two terms in the above statement:
distributed and linked. Distribution allows the growth of the Web. Each web server in
the world can add a new web page to the repository and announce it to all Internet users
without overloading a few servers. Linking allows one web page to refer to another web
page stored in another server somewhere else in the world. The linking of web pages
was achieved using a concept called hypertext, which was introduced many years
before the advent of the Internet. The idea was to use a machine that automatically
retrieved another document stored in the system when a link to it appeared in the docu-
ment. The Web implemented this idea electronically to allow the linked document to be
retrieved when the link was clicked by the user. Today, the term hypertext, coined to
mean linked text documents, has been changed to hypermedia, to show that a web page
can be a text document, an image, an audio file, or a video file. 
The purpose of the Web has gone beyond the simple retrieving of linked docu-
ments. Today, the Web is used to provide electronic shopping and gaming. One can use
the Web to listen to radio programs or view television programs whenever one desires
without being forced to listen to or view these programs when they are broadcast. 
Architecture
The WWW today is a distributed client-server service, in which a client using a
browser can access a service using a server. However, the service provided is distrib-
uted over many locations called sites. Each site holds one or more web pages. Each
web page, however, can contain some links to other web pages in the same or other
sites. In other words, a web page can be simple or composite. A simple web page has
no links to other web pages; a composite web page has one or more links to other web
pages. Each web page is a file with a name and address. 
Example 26.1
Assume we need to retrieve a scientific document that contains one reference to another text file
and one reference to a large image. Figure 26.1 shows the situation. 
The main document and the image are stored in two separate files (file A and file B) in the
same site; the referenced text file (file C) is stored in another site. Since we are dealing with three
† In French: Conseil Européen pour la Recherche Nucléaire

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

different files, we need three transactions if we want to see the whole document. The first transac-
tion (request/response) retrieves a copy of the main document (file A), which has references (point-
ers) to the second and third files. When a copy of the main document is retrieved and browsed, the
user can click on the reference to the image to invoke the second transaction and retrieve a copy of
the image (file B). If the user needs to see the contents of the referenced text file, she can click on its
reference (pointer) invoking the third transaction and retrieving a copy of file C. Note that although
files A and B both are stored in site I, they are independent files with different names and addresses.
Two transactions are needed to retrieve them. A very important point we need to remember is that
file A, file B, and file C in Example 26.1 are independent web pages, each with independent names
and addresses. Although references to file B or C are included in file A, it does not mean that each
of these files cannot be retrieved independently. A second user can retrieve file B with one transac-
tion. A third user can retrieve file C with one transaction.
Web Client (Browser)
A variety of vendors offer commercial browsers that interpret and display a web
page, and all of them use nearly the same architecture. Each browser usually consists
of three parts: a controller, client protocols, and interpreters. (see Figure 26.2). 
Figure 26.1
Example 26.1
Figure 26.2
Browser
Site I
Site II
Client
Request 1
Response 1
Request 2
Response 2
Request 3
Response 3
A
A: Original document
B: Image
C: Referenced file
C
B

Browser
Controller
HTTP
FTP
SSH
SMTP
Interpreters
Java
JavaScript
HTML

PART VI
 APPLICATION LAYER
The controller receives input from the keyboard or the mouse and uses the client
programs to access the document. After the document has been accessed, the controller
uses one of the interpreters to display the document on the screen. The client protocol
can be one of the protocols described later, such as HTTP or FTP. The interpreter can
be HTML, Java, or JavaScript, depending on the type of document. Some commercial
browsers include Internet Explorer, Netscape Navigator, and Firefox.
Web Server
The web page is stored at the server. Each time a request arrives, the corresponding
document is sent to the client. To improve efficiency, servers normally store requested
files in a cache in memory; memory is faster to access than a disk. A server can also
become more efficient through multithreading or multiprocessing. In this case, a server
can answer more than one request at a time. Some popular web servers include Apache
and Microsoft Internet Information Server. 
Uniform Resource Locator (URL)
A web page, as a file, needs to have a unique identifier to distinguish it from other
web pages. To define a web page, we need three identifiers: host, port, and path.
However, before defining the web page, we need to tell the browser what client-
server application we want to use, which is called the protocol. This means we need
four identifiers to define the web page. The first is the type of vehicle to be used to
fetch the web page; the last three make up the combination that defines the destina-
tion object (web page).
❑
Protocol. The first identifier is the abbreviation for the client-server program that
we need in order to access the web page. Although most of the time the protocol is
HTTP (HyperText Transfer Protocol), which we will discuss shortly, we can also
use other protocols such as FTP (File Transfer Protocol). 
❑
Host. The host identifier can be the IP address of the server or the unique name
given to the server. IP addresses can be defined in dotted decimal notation, as
described in Chapter 18 (such as 64.23.56.17); the name is normally the domain
name that uniquely defines the host, such as forouzan.com, which we discuss in
Domain Name System (DNS) later in this chapter. 
❑
Port. The port, a 16-bit integer, is normally predefined for the client-server appli-
cation. For example, if the HTTP protocol is used for accessing the web page, the
well-known port number is 80. However, if a different port is used, the number can
be explicitly given.
❑
Path. The path identifies the location and the name of the file in the underlying
operating system. The format of this identifier normally depends on the operat-
ing system. In UNIX, a path is a set of directory names followed by the file
name, all separated by a slash. For example, /top/next/last/myfile is a path that
uniquely defines a file named myfile, stored in the directory last, which itself is
part of the directory next, which itself is under the directory top. In other words,
the path lists the directories from the top to the bottom, followed by the file
name. 

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

To combine these four pieces together, the uniform resource locator (URL) has
been designed; it uses three different separators between the four pieces as shown
below: 
Example 26.2
The URL http://www.mhhe.com/compsci/forouzan/ defines the web page related to one of the
authors of this book. The string www.mhhe.com is the name of the computer in the McGraw-Hill
company (the three letters www are part of the host name and are added to the commercial host).
The path is compsci/forouzan/, which defines Forouzan’s web page under the directory compsci
(computer science). 
Web Documents
The documents in the WWW can be grouped into three broad categories: static, dynamic,
and active. 
Static Documents
Static documents are fixed-content documents that are created and stored in a server.
The client can get a copy of the document only. In other words, the contents of the file
are determined when the file is created, not when it is used. Of course, the contents in
the server can be changed, but the user cannot change them. When a client accesses the
document, a copy of the document is sent. The user can then use a browser to see the
document. Static documents are prepared using one of several languages: HyperText
Markup Language (HTML), Extensible Markup Language (XML), Extensible Style
Language (XSL), and Extensible Hypertext Markup Language (XHTML). We discuss
these languages in Appendix C. 
Dynamic Documents 
A dynamic document is created by a web server whenever a browser requests the docu-
ment. When a request arrives, the web server runs an application program or a script that
creates the dynamic document. The server returns the result of the program or script as a
response to the browser that requested the document. Because a fresh document is created
for each request, the contents of a dynamic document may vary from one request to
another. A very simple example of a dynamic document is the retrieval of the time and
date from a server. Time and date are kinds of information that are dynamic in that they
change from moment to moment. The client can ask the server to run a program such as
the date program in UNIX and send the result of the program to the client. Although the
Common Gateway Interface (CGI) was used to retrieve a dynamic document in the past,
today’s options include one of the scripting languages such as Java Server Pages (JSP),
which uses the Java language for scripting, or Active Server Pages (ASP), a Microsoft
product that uses Visual Basic language for scripting, or ColdFusion, which embeds que-
ries in a Structured Query Language (SQL) database in the HTML document. 
Active Documents 
For many applications, we need a program or a script to be run at the client site. These are
called active documents. For example, suppose we want to run a program that creates
animated graphics on the screen or a program that interacts with the user. The program
protocol://host/path
Used most of the time
protocol://host:port/path
Used when port number is needed

PART VI
 APPLICATION LAYER
definitely needs to be run at the client site where the animation or interaction takes place.
When a browser requests an active document, the server sends a copy of the document or
a script. The document is then run at the client (browser) site. One way to create an active
document is to use Java applets, a program written in Java on the server. It is compiled
and ready to be run. The document is in bytecode (binary) format. Another way is to use
JavaScripts but download and run the script at the client site.
26.1.2
HyperText Transfer Protocol (HTTP)
The HyperText Transfer Protocol (HTTP) is used to define how the client-server
programs can be written to retrieve web pages from the Web. An HTTP client sends a
request; an HTTP server returns a response. The server uses the port number 80; the cli-
ent uses a temporary port number. HTTP uses the services of TCP, which, as discussed
before, is a connection-oriented and reliable protocol. This means that, before any
transaction between the client and the server can take place, a connection needs to be
established between them. After the transaction, the connection should be terminated.
The client and server, however, do not need to worry about errors in messages
exchanged or loss of any message, because the TCP is reliable and will take care of this
matter, as we saw in Chapter 24. 
Nonpersistent versus Persistent Connections
As we discussed in the previous section, the hypertext concept embedded in web page
documents may require several requests and responses. If the web pages, objects to be
retrieved, are located on different servers, we do not have any other choice than to cre-
ate a new TCP connection for retrieving each object. However, if some of the objects
are located on the same server, we have two choices: to retrieve each object using a new
TCP connection or to make a TCP connection and retrieve them all. The first method is
referred to as a nonpersistent connection, the second as a persistent connection. HTTP,
prior to version 1.1, specified nonpersistent connections, while persistent connections
are the default in version 1.1, but it can be changed by the user. 
Nonpersistent Connections
In a nonpersistent connection, one TCP connection is made for each request/response.
The following lists the steps in this strategy:
1. The client opens a TCP connection and sends a request.
2. The server sends the response and closes the connection.
3. The client reads the data until it encounters an end-of-file marker; it then closes the
connection.
In this strategy, if a file contains links to N different pictures in different files (all
located on the same server), the connection must be opened and closed N + 1 times.
The nonpersistent strategy imposes high overhead on the server because the server
needs N + 1 different buffers each time a connection is opened.
Example 26.3
Figure 26.3 shows an example of a nonpersistent connection. The client needs to access a file that
contains one link to an image. The text file and image are located on the same server. Here we
need two connections. For each connection, TCP requires at least three handshake messages to

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

establish the connection, but the request can be sent with the third one. After the connection is
established, the object can be transferred. After receiving an object, another three handshake
messages are needed to terminate the connection, as we saw in Chapter 24. This means that the
client and server are involved in two connection establishments and two connection terminations.
If the transaction involves retrieving 10 or 20 objects, the round trip times spent for these hand-
shakes add up to a big overhead. When we describe the client-server programming at the end of
the chapter, we will show that for each connection the client and server need to allocate extra
resources such as buffers and variables. This is another burden on both sites, but especially on the
server site.
Persistent Connections
HTTP version 1.1 specifies a persistent connection by default. In a persistent connec-
tion, the server leaves the connection open for more requests after sending a response.
Figure 26.3
Example 26.3
Client
Connection
Connection
File
Image
Image
First handshake
First handshake
Second handshake
Second handshake
Third handshake + request
Third handshake
Response
First handshake
First handshake
Second handshake
Second handshake
Third handshake + request
Third handshake
Response
Time
Time
Server
File

PART VI
 APPLICATION LAYER
The server can close the connection at the request of a client or if a time-out has been
reached. The sender usually sends the length of the data with each response. However,
there are some occasions when the sender does not know the length of the data. This is
the case when a document is created dynamically or actively. In these cases, the server
informs the client that the length is not known and closes the connection after sending
the data so the client knows that the end of the data has been reached. Time and
resources are saved using persistent connections. Only one set of buffers and variables
needs to be set for the connection at each site. The round trip time for connection estab-
lishment and connection termination is saved. 
Example 26.4
Figure 26.4 shows the same scenario as in Example 26.3, but using a persistent connection.
Only one connection establishment and connection termination is used, but the request for the
image is sent separately. 
Message Formats
The HTTP protocol defines the format of the request and response messages, as shown
in Figure 26.5. We have put the two formats next to each other for comparison. Each
message is made of four sections. The first section in the request message is called the
request line; the first section in the response message is called the status line. The other
three sections have the same names in the request and response messages. However, the
Figure 26.4
Example 26.4
Connection
First handshake
First handshake
Second handshake
Second handshake
Third handshake + request
Request
Third handshake
Response
Response
Time
Time
Image
Server
File
Client
File
Image

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

similarities between these sections are only in the names; they may have different con-
tents. We discuss each message type separately.
Request Message
As we said before, the first line in a request message is called a request line. There are
three fields in this line separated by one space and terminated by two characters (car-
riage return and line feed) as shown in Figure 26.5. The fields are called method, URL,
and version. 
The method field defines the request types. In version 1.1 of HTTP, several
methods are defined, as shown in Table 26.1. Most of the time, the client uses the
GET method to send a request. In this case, the body of the message is empty. The
HEAD method is used when the client needs only some information about the web
page from the server, such as the last time it was modified. It can also be used to test
the validity of a URL. The response message in this case has only the header section;
the body section is empty. The PUT method is the inverse of the GET method; it
allows the client to post a new web page on the server (if permitted). The POST
method is similar to the PUT method, but it is used to send some information to the
server to be added to the web page or to modify the web page. The TRACE method is
used for debugging; the client asks the server to echo back the request to check
whether the server is getting the requests. The DELETE method allows the client to
delete a web page on the server if the client has permission to do so. The CONNECT
method was originally made as a reserve method; it may be used by proxy servers, as
discussed later. Finally, the OPTIONS method allows the client to ask about the prop-
erties of a web page. 
The second field, URL, was discussed earlier in the chapter. It defines the address
and name of the corresponding web page. The third field, version, gives the version of
the protocol; the most current version of HTTP is 1.1.
Figure 26.5
Formats of the request and response messages
Request
line
Header
lines
Legend
Request message
Response message
Blank
line
Body
sp: Space cr: Carriage Return lf: Line Feed
cr lf
sp
sp
cr
lf
Method
URL
Version
sp
sp
cr
lf
:
Header name
Value
cr
lf
:
Header name
Value
Status
line
Header
lines
Variable number of lines
(Present only in some messages)
Variable number of lines
(Present only in some messages)
Blank
line
Body
cr
lf
sp
sp
cr
lf
Version
Phrase
sp
sp
cr
lf
:
:
Header name
Value
cr
lf
Header name
Value
Status
code

PART VI
 APPLICATION LAYER
After the request line, we can have zero or more request header lines. Each
header line sends additional information from the client to the server. For example,
the client can request that the document be sent in a special format. Each header line
has a header name, a colon, a space, and a header value (see Figure 26.5). Table 26.2
shows some header names commonly used in a request. The value field defines the
values associated with each header name. The list of values can be found in the corre-
sponding RFCs. 
The body can be present in a request message. Usually, it contains the comment
to be sent or the file to be published on the website when the method is PUT or
POST. 
Response Message
The format of the response message is also shown in Figure 26.5. A response mes-
sage consists of a status line, header lines, a blank line, and sometimes a body. The
first line in a response message is called the status line. There are three fields in this
line separated by spaces and terminated by a carriage return and line feed. The first
field defines the version of HTTP protocol, currently 1.1. The status code field
defines the status of the request. It consists of three digits. Whereas the codes in the
100 range are only informational, the codes in the 200 range indicate a successful
request. The codes in the 300 range redirect the client to another URL, and the codes
Table 26.1
Methods
Method
Action
GET
Requests a document from the server
HEAD
Requests information about a document but not the document itself 
PUT
Sends a document from the client to the server
POST
Sends some information from the client to the server
TRACE
Echoes the incoming request
DELETE
Removes the web page
CONNECT
Reserved
OPTIONS
Inquires about available options 
Table 26.2
Request header names
Header
Description
User-agent
Identifies the client program
Accept
Shows the media format the client can accept
Accept-charset
Shows the character set the client can handle
Accept-encoding
Shows the encoding scheme the client can handle
Accept-language
Shows the language the client can accept
Authorization
Shows what permissions the client has
Host
Shows the host and port number of the client
Date
Shows the current date
Upgrade
Specifies the preferred communication protocol
Cookie
Returns the cookie to the server (explained later)
If-Modified-Since
If the file is modified since a specific date

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

in the 400 range indicate an error at the client site. Finally, the codes in the 500 range
indicate an error at the server site. The status phrase explains the status code in text
form.
After the status line, we can have zero or more response header lines. Each header
line sends additional information from the server to the client. For example, the sender
can send extra information about the document. Each header line has a header name, a
colon, a space, and a header value. We will show some header lines in the examples at
the end of this section. Table 26.3 shows some header names commonly used in a
response message. 
The body contains the document to be sent from the server to the client. The body
is present unless the response is an error message.
Example 26.5
This example retrieves a document (see Figure 26.6). We use the GET method to retrieve an
image with the path /usr/bin/image1. The request line shows the method (GET), the URL, and
the HTTP version (1.1). The header has two lines that show that the client can accept images in
the GIF or JPEG format. The request does not have a body. The response message contains the
status line and four lines of header. The header lines define the date, server, content encoding
(MIME version, which will be described in electronic mail), and length of the document. The
body of the document follows the header. 
Example 26.6
In this example, the client wants to send a web page to be posted on the server. We use the PUT
method. The request line shows the method (PUT), URL, and HTTP version (1.1). There are four
lines of headers. The request body contains the web page to be posted. The response message
contains the status line and four lines of headers. The created document, which is a CGI docu-
ment, is included as the body (see Figure 26.7). 
Conditional Request 
A client can add a condition in its request. In this case, the server will send the
requested web page if the condition is met or inform the client otherwise. One of
the most common conditions imposed by the client is the time and date the web
Table 26.3
Response header names
Header
Description
Date
Shows the current date
Upgrade
Specifies the preferred communication protocol
Server
Gives information about the server
Set-Cookie
The server asks the client to save a cookie
Content-Encoding
Specifies the encoding scheme
Content-Language
Specifies the language
Content-Length
Shows the length of the document
Content-Type
Specifies the media type
Location
To ask the client to send the request to another site 
Accept-Ranges
The server will accept the requested byte-ranges
Last-modified
Gives the date and time of the last change

PART VI
 APPLICATION LAYER
page is modified. The client can send the header line If-Modified-Since with the
request to tell the server that it needs the page only if it is modified after a certain
point in time.
Figure 26.6
Example 26.5
Figure 26.7
Example 26.6
Request
Response
GET   /usr/bin/image1  HTTP/1.1
Accept: image/gif
Accept: image/jpeg
HTTP/1.1   200  OK
Date: Mon, 10-Jan-2011 13:15:14 GMT
Server: Challenger
Content-encoding: MIME-version 1.0
Content-length: 2048
(Body of the document)
Client
Server

Time
Time
Request
Response
(Body of the document)
Client
Server
PUT   /cgi-bin/doc.pl  HTTP/1.1
Accept: */*
Accept: image/gif
Accept: image/jpeg
Content-length: 50
(Input information)
HTTP/1.1   200  OK
Date: Mon, 10-Jan-2011 13:15:14 GMT
Server: Challenger
Content-encoding: MIME-version 1.0
Content-length: 2000

Time
Time

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

Example 26.7
The following shows how a client imposes the modification data and time condition on
a request. 
The status line in the response shows the file was not modified after the defined point in
time. The body of the response message is also empty. 
Cookies
The World Wide Web was originally designed as a stateless entity. A client sends a request;
a server responds. Their relationship is over. The original purpose of the Web, retrieving
publicly available documents, exactly fits this design. Today the Web has other functions
that need to remember some information about the clients; some are listed below:
❑
Websites are being used as electronic stores that allow users to browse through the
store, select wanted items, put them in an electronic cart, and pay at the end with a
credit card.
❑
Some websites need to allow access to registered clients only.
❑
Some websites are used as portals: the user selects the web pages he wants to see. 
❑
Some websites are just advertising agencies.
For these purposes, the cookie mechanism was devised.
Creating and Storing Cookies
The creation and storing of cookies depend on the implementation; however, the princi-
ple is the same. 
1. When a server receives a request from a client, it stores information about the client
in a file or a string. The information may include the domain name of the client, the
contents of the cookie (information the server has gathered about the client such as
name, registration number, and so on), a timestamp, and other information depend-
ing on the implementation. 
2. The server includes the cookie in the response that it sends to the client.
3. When the client receives the response, the browser stores the cookie in the cookie
directory, which is sorted by the server domain name. 
Using Cookies
When a client sends a request to a server, the browser looks in the cookie directory to
see if it can find a cookie sent by that server. If found, the cookie is included in the
GET http://www.commonServer.com/information/file1 HTTP/1.1
Request line
If-Modified-Since: Thu, Sept 04 00:00:00 GMT
Header line
Blank line
HTTP/1.1 304 Not Modified
Status line
Date: Sat, Sept 06 08 16:22:46 GMT
First header line
Server: commonServer.com
Second header line
Blank line
(Empty Body)
Empty body

PART VI
 APPLICATION LAYER
request. When the server receives the request, it knows that this is an old client, not a
new one. Note that the contents of the cookie are never read by the browser or disclosed
to the user. It is a cookie made by the server and eaten by the server. Now let us see how
a cookie is used for the four previously mentioned purposes:
❑
An electronic store (e-commerce) can use a cookie for its client shoppers. When a
client selects an item and inserts it in a cart, a cookie that contains information
about the item, such as its number and unit price, is sent to the browser. If the client
selects a second item, the cookie is updated with the new selection information,
and so on. When the client finishes shopping and wants to check out, the last
cookie is retrieved and the total charge is calculated.
❑
The site that restricts access to registered clients only sends a cookie to the client
when the client registers for the first time. For any repeated access, only those cli-
ents that send the appropriate cookie are allowed.
❑
A web portal uses the cookie in a similar way. When a user selects her favorite
pages, a cookie is made and sent. If the site is accessed again, the cookie is sent to
the server to show what the client is looking for.
❑
A cookie is also used by advertising agencies. An advertising agency can place ban-
ner ads on some main website that is often visited by users. The advertising agency
supplies only a URL that gives the advertising agency’s address instead of the ban-
ner itself. When a user visits the main website and clicks the icon of a corporation, a
request is sent to the advertising agency. The advertising agency sends the requested
banner, but it also includes a cookie with the ID of the user. Any future use of
the banners adds to the database that profiles the Web behavior of the user. The
advertising agency has compiled the interests of the user and can sell this informa-
tion to other parties. This use of cookies has made them very controversial. Hope-
fully, some new regulations will be devised to preserve the privacy of users. 
Example 26.8
Figure 26.8 shows a scenario in which an electronic store can benefit from the use of cookies.
Assume a shopper wants to buy a toy from an electronic store named BestToys. The shopper
browser (client) sends a request to the BestToys server. The server creates an empty shopping cart
(a list) for the client and assigns an ID to the cart (for example, 12343). The server then sends a
response message, which contains the images of all toys available, with a link under each toy that
selects the toy if it is being clicked. This response message also includes the Set-Cookie header
line whose value is 12343. The client displays the images and stores the cookie value in a file
named BestToys. The cookie is not revealed to the shopper. Now the shopper selects one of the
toys and clicks on it. The client sends a request, but includes the ID 12343 in the Cookie header
line. Although the server may have been busy and forgotten about this shopper, when it receives
the request and checks the header, it finds the value 12343 as the cookie. The server knows that
the customer is not new; it searches for a shopping cart with ID 12343. The shopping cart (list) is
opened and the selected toy is inserted in the list. The server now sends another response to the
shopper to tell her the total price and ask her to provide payment. The shopper provides
information about her credit card and sends a new request with the ID 12343 as the cookie value.
When the request arrives at the server, it again sees the ID 12343, and accepts the order and the
payment and sends a confirmation in a response. Other information about the client is stored in

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

the server. If the shopper accesses the store sometime in the future, the client sends the cookie
again; the store retrieves the file and has all the information about the client. 
Web Caching: Proxy Servers
HTTP supports proxy servers. A proxy server is a computer that keeps copies of
responses to recent requests. The HTTP client sends a request to the proxy server. The
proxy server checks its cache. If the response is not stored in the cache, the proxy
server sends the request to the corresponding server. Incoming responses are sent to the
proxy server and stored for future requests from other clients. 
The proxy server reduces the load on the original server, decreases traffic, and
improves latency. However, to use the proxy server, the client must be configured to
access the proxy instead of the target server. 
Figure 26.8
Example 26.8
Time
Time
A customer file is 
created with ID: 12343
Update
Update
Update
Request
Response
GET   BestToys.com  HTTP/1.1
HTTP/1.1   200  OK
Page representing the toys
Client
Server

Request
Request
GET   image  HTTP/1.1
Set-Cookie: 12343
Response
HTTP/1.1   200  OK
Page representing the price
Response
Order confirmation
Cookie: 12343
GET   image  HTTP/1.1
Cookie: 12343
Information about the payment
A vendor file is created 
with cookie: 12343
Cookie
Cookie
HTTP/1.1   200  OK

PART VI
 APPLICATION LAYER
Note that the proxy server acts as both server and client. When it receives a request
from a client for which it has a response, it acts as a server and sends the response to the
client. When it receives a request from a client for which it does not have a response, it
first acts as a client and sends a request to the target server. When the response has been
received, it acts again as a server and sends the response to the client. 
Proxy Server Location
The proxy servers are normally located at the client site. This means that we can have a
hierarchy of proxy servers, as shown below:
1. A client computer can also be used as a proxy server, in a small capacity, that
stores responses to requests often invoked by the client.
2. In a company, a proxy server may be installed on the computer LAN to reduce the
load going out of and coming into the LAN.
3. An ISP with many customers can install a proxy server to reduce the load going
out of and coming into the ISP network. 
Example 26.9
Figure 26.9 shows an example of a use of a proxy server in a local network, such as the network
on a campus or in a company. The proxy server is installed in the local network. When an HTTP
request is created by any of the clients (browsers), the request is first directed to the proxy server.
If the proxy server already has the corresponding web page, it sends the response to the client.
Otherwise, the proxy server acts as a client and sends the request to the web server in the Internet.
When the response is returned, the proxy server makes a copy and stores it in its cache before
sending it to the requesting client. 
Cache Update
A very important question is how long a response should remain in the proxy server
before being deleted and replaced. Several different strategies are used for this purpose.
One solution is to store the list of sites whose information remains the same for a while.
For example, a news agency may change its news page every morning. This means that
Figure 26.9
Example of a proxy server
Web
server
Web
server
Web
server
Web
server
Client
Client
Client
 Proxy
server
WAN
Local Network
Internet

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

a proxy server can get the news early in the morning and keep it until the next day.
Another recommendation is to add some headers to show the last modification time of
the information. The proxy server can then use the information in this header to guess
how long the information would be valid. 
HTTP Security 
HTTP per se does not provide security. However, as we show in Chapter 32, HTTP can
be run over the Secure Socket Layer (SSL). In this case, HTTP is referred to as HTTPS.
HTTPS provides confidentiality, client and server authentication, and data integrity. 
26.2
FTP 
File Transfer Protocol (FTP) is the standard protocol provided by TCP/IP for copy-
ing a file from one host to another. Although transferring files from one system to
another seems simple and straightforward, some problems must be dealt with first.
For example, two systems may use different file name conventions. Two systems may
have different ways to represent data. Two systems may have different directory
structures. All of these problems have been solved by FTP in a very simple and ele-
gant approach. Although we can transfer files using HTTP, FTP is a better choice to
transfer large files or to transfer files using different formats. Figure 26.10 shows the
basic model of FTP. The client has three components: the user interface, the client
control process, and the client data transfer process. The server has two components:
the server control process and the server data transfer process. The control connec-
tion is made between the control processes. The data connection is made between the
data transfer processes. 
Separation of commands and data transfer makes FTP more efficient. The control
connection uses very simple rules of communication. We need to transfer only a line of
command or a line of response at a time. The data connection, on the other hand, needs
more complex rules due to the variety of data types transferred.
Figure 26.10
FTP
Data
connection
Control
connection
User
interface
Control 
process
Data transfer
process
Client
Server
Control 
process
Data transfer
process
Local
file system
Remote
file system

PART VI
 APPLICATION LAYER
26.2.1
Two Connections
The two connections in FTP have different lifetimes. The control connection remains
connected during the entire interactive FTP session. The data connection is opened and
then closed for each file transfer activity. It opens each time commands that involve
transferring files are used, and it closes when the file is transferred. In other words,
when a user starts an FTP session, the control connection opens. While the control con-
nection is open, the data connection can be opened and closed multiple times if several
files are transferred. FTP uses two well-known TCP ports: port 21 is used for the con-
trol connection, and port 20 is used for the data connection. 
26.2.2
Control Connection 
For control communication, FTP uses the same approach as TELNET (discussed later).
It uses the NVT ASCII character set as used by TELNET. Communication is achieved
through commands and responses. This simple method is adequate for the control con-
nection because we send one command (or response) at a time. Each line is terminated
with a two-character (carriage return and line feed) end-of-line token.
During this control connection, commands are sent from the client to the server and
responses are sent from the server to the client. Commands, which are sent from the FTP
client control process, are in the form of ASCII uppercase, which may or may not be fol-
lowed by an argument. Some of the most common commands are shown in Table 26.4. 
Table 26.4
Some FTP commands
Command
Argument(s)
Description
ABOR
Abort the previous command
CDUP
Change to parent directory
CWD
Directory name
Change to another directory
DELE
File name
Delete a file
LIST
Directory name
List subdirectories or files
MKD
Directory name
Create a new directory
PASS
User password
Password
PASV
Server chooses a port
PORT
Port identifier
Client chooses a port
PWD
Display name of current directory
QUIT
Log out of the system
RETR
File name(s)
Retrieve files; files are transferred from server to client
RMD
Directory name
Delete a directory
RNFR
File name (old)
Identify a file to be renamed
RNTO
File name (new)
Rename the file 
STOR
File name(s)
Store files; file(s) are transferred from client to server
STRU
F, R, or P
Define data organization (F: file, R: record, or P: page)
TYPE
A, E, I
Default file type (A: ASCII, E: EBCDIC, I: image)
USER
User ID
User information
MODE
S, B, or C
Define transmission mode (S: stream, B: block, or C: 
compressed

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

Every FTP command generates at least one response. A response has two parts: a
three-digit number followed by text. The numeric part defines the code; the text part
defines needed parameters or further explanations. The first digit defines the status of
the command. The second digit defines the area in which the status applies. The third
digit provides additional information. Table 26.5 shows some common responses. 
26.2.3
Data Connection 
The data connection uses the well-known port 20 at the server site. However, the cre-
ation of a data connection is different from the control connection. The following
shows the steps:
1. The client, not the server, issues a passive open using an ephemeral port. This must be
done by the client because it is the client that issues the commands for transferring files.
2. Using the PORT command the client sends this port number to the server. 
3. The server receives the port number and issues an active open using the well-
known port 20 and the received ephemeral port number. 
Communication over Data Connection
The purpose and implementation of the data connection are different from those of the con-
trol connection. We want to transfer files through the data connection. The client must
define the type of file to be transferred, the structure of the data, and the transmission mode.
Before sending the file through the data connection, we prepare for transmission through
the control connection. The heterogeneity problem is resolved by defining three attributes
of communication: file type, data structure, and transmission mode. 
File Type
FTP can transfer one of the following file types across the data connection: ASCII file,
EBCDIC file, or image file. 
Data Structure
FTP can transfer a file across the data connection using one of the following interpreta-
tions of the structure of the data: file structure, record structure, or page structure. The
file structure format (used by default) has no structure. It is a continuous stream of
bytes. In the record structure, the file is divided into records. This can be used only with
text files. In the page structure, the file is divided into pages, with each page having a
page number and a page header. The pages can be stored and accessed randomly or
sequentially.
Table 26.5
Some responses in FTP
Code
Description
Code
Description

Data connection open

Request file action OK

File status OK

User name OK; password is needed

Command OK

Cannot open data connection

Service ready

File action not taken; file not available

Service closing

Action aborted; insufficient storage

Data connection open

Syntax error; unrecognized command

Closing data connection

Syntax error in parameters or arguments

User login OK

User not logged in

PART VI
 APPLICATION LAYER
Transmission Mode
FTP can transfer a file across the data connection using one of the following three
transmission modes: stream mode, block mode, or compressed mode. The stream mode
is the default mode; data are delivered from FTP to TCP as a continuous stream of
bytes. In the block mode, data can be delivered from FTP to TCP in blocks. In this case,
each block is preceded by a 3-byte header. The first byte is called the block descriptor;
the next two bytes define the size of the block in bytes. 
File Transfer
File transfer occurs over the data connection under the control of the commands sent
over the control connection. However, we should remember that file transfer in FTP
means one of three things: retrieving a file (server to client), storing a file (client to
server), and directory listing (server to client).
Example 26.10
Figure 26.11 shows an example of using FTP for retrieving a file. The figure shows only one file
to be transferred. The control connection remains open all the time, but the data connection is
Figure 26.11
Example 26.10
220 (Service ready)
USER forouzan
TYPE EBCDIC
STRU R
RETR/usr/user/forouzan/reports/file1
PASS xxxxxx
200 (OK)
200 (OK)
250 (OK)
QUIT
226 (Closing data connection)
221 (Service closing)
331 (User name OK. Password?)
PORT 1267
150 (Data connection opens shortly)
230 (User login OK)
Records of file ..........
Records of file ..........

Client
Control process (port 21)
Data tranfer
process (port 20)
Command
Response
Data transfer
Legend
Server

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

opened and closed repeatedly. We assume the file is transferred in six sections. After all records
have been transferred, the server control process announces that the file transfer is done. Since
the client control process has no file to retrieve, it issues the QUIT command, which causes the
service connection to be closed. 
Example 26.11
The following shows an actual FTP session that lists the directories. The colored lines show the
responses from the server control connection; the black lines show the commands sent by the cli-
ent. The lines in white with black background show data transfer.  
26.2.4
Security for FTP      
The FTP protocol was designed when security was not a big issue. Although FTP requires
a password, the password is sent in plaintext (unencrypted), which means it can be inter-
cepted and used by an attacker. The data transfer connection also transfers data in plain-
text, which is insecure. To be secure, one can add a Secure Socket Layer between the FTP
application layer and the TCP layer. In this case FTP is called SSL-FTP. We also explore
some secure file transfer applications when we discuss SSH later in the chapter.
26.3
ELECTRONIC MAIL    
Electronic mail (or e-mail) allows users to exchange messages. The nature of this
application, however, is different from other applications discussed so far. In an appli-
cation such as HTTP or FTP, the server program is running all the time, waiting for a
request from a client. When the request arrives, the server provides the service. There
is a request and there is a response. In the case of electronic mail, the situation is
$ ftp voyager.deanza.fhda.edu
Connected to voyager.deanza.fhda.edu.
220 (vsFTPd 1.2.1)
530 Please login with USER and PASS.
Name (voyager.deanza.fhda.edu:forouzan): forouzan
331 Please specify the password.
Password:*********
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
227 Entering Passive Mode (153,18,17,11,238,169)
150 Here comes the directory listing.
drwxr-xr-x

 3027      411      4096 Sep 24  2002 business
drwxr-xr-x

 3027       411      4096 Sep 24  2002 personal
drwxr-xr-x

 3027        411      4096 Sep 24  2002 school
226 Directory send OK.
ftp> quit
221 Goodbye.

PART VI
 APPLICATION LAYER
different. First, e-mail is considered a one-way transaction. When Alice sends an e-
mail to Bob, she may expect a response, but this is not a mandate. Bob may or may not
respond. If he does respond, it is another one-way transaction. Second, it is neither
feasible nor logical for Bob to run a server program and wait until someone sends an
e-mail to him. Bob may turn off his computer when he is not using it. This means that
the idea of client/server programming should be implemented in another way: using
some intermediate computers (servers). The users run only client programs when they
want and the intermediate servers apply the client/server paradigm, as we discuss in
the next section.
26.3.1
Architecture   
To explain the architecture of e-mail, we give a common scenario, as shown in Fig-
ure 26.12. Another possibility is the case in which Alice or Bob is directly connected to
the corresponding mail server, in which LAN or WAN connection is not required, but this
variation in the scenario does not affect our discussion. 
In the common scenario, the sender and the receiver of the e-mail, Alice and Bob
respectively, are connected via a LAN or a WAN to two mail servers. The administrator
has created one mailbox for each user where the received messages are stored. A mail-
box is part of a server hard drive, a special file with permission restrictions. Only the
owner of the mailbox has access to it. The administrator has also created a queue
(spool) to store messages waiting to be sent. 
A simple e-mail from Alice to Bob takes nine different steps, as shown in the figure.
Alice and Bob use three different agents: a user agent (UA), a message transfer agent
(MTA), and a message access agent (MAA). When Alice needs to send a message to
Figure 26.12
Common scenario
UA: user agent
MTA: message transfer agent
MAA: message access agent
LAN or WAN
LAN or WAN
Mail server
Mail server
UA
Spool
Boxes
Alice
Bob
MTA 
client
MTA
client
MTA 
server
MTA
server

MAA 
client

Internet
UA
MAA 
server

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

Bob, she runs a UA program to prepare the message and send it to her mail server. The
mail server at her site uses a queue (spool) to store messages waiting to be sent. The mes-
sage, however, needs to be sent through the Internet from Alice’s site to Bob’s site using
an MTA. Here two message transfer agents are needed: one client and one server. Like
most client-server programs on the Internet, the server needs to run all the time because it
does not know when a client will ask for a connection. The client, on the other hand, can
be triggered by the system when there is a message in the queue to be sent. The user agent
at the Bob site allows Bob to read the received message. Bob later uses an MAA client to
retrieve the message from an MAA server running on the second server.
There are two important points we need to emphasize here. First, Bob cannot
bypass the mail server and use the MTA server directly. To use the MTA server
directly, Bob would need to run the MTA server all the time because he does not
know when a message will arrive. This implies that Bob must keep his computer on
all the time if he is connected to his system through a LAN. If he is connected
through a WAN, he must keep the connection up all the time. Neither of these situa-
tions is feasible today.
Second, note that Bob needs another pair of client-server programs: message
access programs. This is because an MTA client-server program is a push program: the
client pushes the message to the server. Bob needs a pull program. The client needs to
pull the message from the server. We discuss more about MAAs shortly. 
User Agent 
The first component of an electronic mail system is the user agent (UA). It provides
service to the user to make the process of sending and receiving a message easier. A
user agent is a software package (program) that composes, reads, replies to, and for-
wards messages. It also handles local mailboxes on the user computers. 
There are two types of user agents: command-driven and GUI-based. Command-
driven user agents belong to the early days of electronic mail. They are still present as
the underlying user agents. A command-driven user agent normally accepts a one-
character command from the keyboard to perform its task. For example, a user can type
the character r, at the command prompt, to reply to the sender of the message, or type
the character R to reply to the sender and all recipients. Some examples of command-
driven user agents are mail, pine, and elm.
Modern user agents are GUI-based. They contain graphical user interface (GUI)
components that allow the user to interact with the software by using both the keyboard
and the mouse. They have graphical components such as icons, menu bars, and win-
dows that make the services easy to access. Some examples of GUI-based user agents
are Eudora and Outlook. 
Sending Mail
To send mail, the user, through the UA, creates mail that looks very similar to postal
mail. It has an envelope and a message (see Figure 26.13). The envelope usually
contains the sender address, the receiver address, and other information. The message
The electronic mail system needs two UAs, two pairs of MTAs 
(client and server), and a pair of MAAs (client and server). 

PART VI
 APPLICATION LAYER
contains the header and the body. The header of the message defines the sender, the
receiver, the subject of the message, and some other information. The body of the mes-
sage contains the actual information to be read by the recipient.
Receiving Mail
The user agent is triggered by the user (or a timer). If a user has mail, the UA informs
the user with a notice. If the user is ready to read the mail, a list is displayed in which
each line contains a summary of the information about a particular message in the mail-
box. The summary usually includes the sender mail address, the subject, and the time
the mail was sent or received. The user can select any of the messages and display its
contents on the screen.
Addresses
To deliver mail, a mail handling system must use an addressing system with unique
addresses. In the Internet, the address consists of two parts: a local part and a domain
name, separated by an @ sign (see Figure 26.14). 
Figure 26.13
Format of an e-mail
Figure 26.14
E-mail address
William Shane
1400 Los Gatos Street
San Louis, CA 91005
Behrouz Forouzan
20122 Olive Street
Bellbury, CA 91000
Behrouz Forouzan
20122 Olive Street
Bellbury, CA 91000
Jan. 10, 2011
Subject: Network
Dear Mr. Shane
We want to inform you that 
our network is working pro-
perly after the last repair.
Yours truly,
Behrouz Forouzan
Mail From: forouzan@some.com
RCPT To: shanew@aNetwork.com
From: Behrouz Forouzan
To: William Shane
Date: 1/10/2011
Subject: Network
Postal mail
Electronic mail
Dear Mr. Shane
We want to inform you that 
our network is working pro-
perly after the last repair.
Yours truly,
Behrouz Forouzan
Envelope
Message
Header
Body
Mailbox address of the recipient
Local part
The domain name of the mail server
Domain name
@

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

The local part defines the name of a special file, called the user mailbox, where all
the mail received for a user is stored for retrieval by the message access agent. The sec-
ond part of the address is the domain name. An organization usually selects one or
more hosts to receive and send e-mail; they are sometimes called mail servers or
exchangers. The domain name assigned to each mail exchanger either comes from
the DNS database or is a logical name (for example, the name of the organization).
Mailing List or Group List
Electronic mail allows one name, an alias, to represent several different e-mail
addresses; this is called a mailing list. Every time a message is to be sent, the system
checks the recipient’s name against the alias database; if there is a mailing list for the
defined alias, separate messages, one for each entry in the list, must be prepared and
handed to the MTA. 
Message Transfer Agent: SMTP   
Based on the common scenario (Figure 26.12), we can say that the e-mail is one of those
applications that needs three uses of client-server paradigms to accomplish its task. It is
important that we distinguish these three when we are dealing with e-mail. Figure 26.15
shows these three client-server applications. We refer to the first and the second as
Message Transfer Agents (MTAs), the third as Message Access Agent (MAA). 
 The formal protocol that defines the MTA client and server in the Internet is called
Simple Mail Transfer Protocol (SMTP). SMTP is used two times, between the sender
and the sender’s mail server and between the two mail servers. As we will see shortly,
another protocol is needed between the mail server and the receiver. SMTP simply
defines how commands and responses must be sent back and forth. 
Commands and Responses
SMTP uses commands and responses to transfer messages between an MTA client and
an MTA server. The command is from an MTA client to an MTA server; the response is
from an MTA server to the MTA client. Each command or reply is terminated by a two-
character (carriage return and line feed) end-of-line token. 
Commands
 Commands are sent from the client to the server. The format of a command
is shown below: 
Figure 26.15
Protocols used in electronic mail
Keyword: argument(s)
SMTP protocol
SMTP protocol
POP or IMAP protocol
Client
Alice:
e-mail sender
Bob:
e-mail receiver
Client
Client
Server
Server Server
LAN/WAN
LAN/WAN
Mail server
Mail server
MTA

MTA

MAA

Internet

PART VI
 APPLICATION LAYER
It consists of a keyword followed by zero or more arguments. SMTP defines 14 com-
mands, listed in Table 26.6.
Responses
 Responses are sent from the server to the client. A response is a three-
digit code that may be followed by additional textual information. Table 26.7 shows the
most common response types. 
Table 26.6
SMTP commands
Keyword
Argument(s)
Description
HELO
Sender’s host name
Identifies itself 
MAIL FROM
Sender of the message
Identifies the sender of the message 
RCPT TO
Intended recipient
Identifies the recipient of the message 
DATA
Body of the mail
Sends the actual message 
QUIT
Terminates the message 
RSET
Aborts the current mail transaction
VRFY
Name of recipient 
Verifies the address of the recipient
NOOP
Checks the status of the recipient
TURN
Switches the sender and the recipient
EXPN
Mailing list 
Asks the recipient to expand the mailing list
HELP
Command name
Asks the recipient to send information about 
the command sent as the argument
SEND FROM
Intended recipient
Specifies that the mail be delivered only to 
the terminal of the recipient, and not to the 
mailbox
SMOL FROM
Intended recipient
Specifies that the mail be delivered to the 
terminal or the mailbox of the recipient
SMAL FROM
Intended recipient 
Specifies that the mail be delivered to the 
terminal and the mailbox of the recipient 
Table 26.7
Responses
Code
Description
Positive Completion Reply

System status or help reply

Help message

Service ready

Service closing transmission channel

Request command completed

User not local; the message will be forwarded
Positive Intermediate Reply

Start mail input
Transient Negative Completion Reply

Service not available

Mailbox not available

Command aborted: local error

Command aborted; insufficient storage
Permanent Negative Completion Reply

Syntax error; unrecognized command

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

Mail Transfer Phases
The process of transferring a mail message occurs in three phases: connection estab-
lishment, mail transfer, and connection termination.
Connection Establishment
After a client has made a TCP connection to the well-
known port 25, the SMTP server starts the connection phase. This phase involves the
following three steps:
1. The server sends code 220 (service ready) to tell the client that it is ready to receive
mail. If the server is not ready, it sends code 421 (service not available).
2. The client sends the HELO message to identify itself, using its domain name
address. This step is necessary to inform the server of the domain name of the client.
3. The server responds with code 250 (request command completed) or some other
code depending on the situation.
Message Transfer
After connection has been established between the SMTP client
and server, a single message between a sender and one or more recipients can be
exchanged. This phase involves eight steps. Steps 3 and 4 are repeated if there is more
than one recipient.
1. The client sends the MAIL FROM message to introduce the sender of the message.
It includes the mail address of the sender (mailbox and the domain name). This
step is needed to give the server the return mail address for returning errors and
reporting messages.
2. The server responds with code 250 or some other appropriate code.
3. The client sends the RCPT TO (recipient) message, which includes the mail address
of the recipient.
4. The server responds with code 250 or some other appropriate code.
5. The client sends the DATA message to initialize the message transfer.
6. The server responds with code 354 (start mail input) or some other appropriate
message.
7. The client sends the contents of the message in consecutive lines. Each line is ter-
minated by a two-character end-of-line token (carriage return and line feed). The
message is terminated by a line containing just one period.
8. The server responds with code 250 (OK) or some other appropriate code.

Syntax error in parameters or arguments

Command not implemented

Bad sequence of commands

Command temporarily not implemented

Command is not executed; mailbox unavailable

User not local

Requested action aborted; exceeded storage location

Requested action not taken; mailbox name not allowed

Transaction failed
Table 26.7
Responses (continued)
Code
Description

PART VI
 APPLICATION LAYER
Connection Termination
After the message is transferred successfully, the client ter-
minates the connection. This phase involves two steps.
1. The client sends the QUIT command.
2. The server responds with code 221 or some other appropriate code.
Example 26.12
To show the three mail transfer phases, we show all of the steps described above using the
information depicted in Figure 26.16. In the figure, we have separated the messages related to
the envelope, header, and body in the data transfer section. Note that the steps in this figure are
repeated two times in each e-mail transfer: once from the e-mail sender to the local mail server
and once from the local mail server to the remote mail server. The local mail server, after
receiving the whole e-mail message, may spool it and send it to the remote mail server at
another time. 
Figure 26.16
Example 26.12
HELO: some.com
SMTP server
SMTP client
Connection
establishment
Envelope
Body
Header
Data
transfer
Connection
termination
250 OK
220 service ready
MAIL FROM: forouzan@some.com
RCPT TO: william@aNetwork.com
Subject: Network
Dear Mr. Shane
We want to inform you that
From: Behrouz Forouzan
To: William Shane
DATA
250 OK
250 OK
250 OK
354 start mail input
Blank line
(A dot)
QUIT
221 service closed
Date: 1/10/2011

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

Message Access Agent: POP and IMAP    
The first and second stages of mail delivery use SMTP. However, SMTP is not involved
in the third stage because SMTP is a push protocol; it pushes the message from the cli-
ent to the server. In other words, the direction of the bulk data (messages) is from the
client to the server. On the other hand, the third stage needs a pull protocol; the client
must pull messages from the server. The direction of the bulk data is from the server to
the client. The third stage uses a message access agent.
Currently two message access protocols are available: Post Office Protocol, version 3
(POP3) and Internet Mail Access Protocol, version 4 (IMAP4). Figure 26.15 shows the
position of these two protocols.
POP3
Post Office Protocol, version 3 (POP3) is simple but limited in functionality. The cli-
ent POP3 software is installed on the recipient computer; the server POP3 software is
installed on the mail server. 
Mail access starts with the client when the user needs to download its e-mail from the
mailbox on the mail server. The client opens a connection to the server on TCP port 110.
It then sends its user name and password to access the mailbox. The user can then
list and retrieve the mail messages, one by one. Figure 26.17 shows an example of
downloading using POP3. Unlike other figures in this chapter, we have put the client on
the right hand side because the e-mail receiver (Bob) is running the client process to
pull messages from the remote mail server. 
POP3 has two modes: the delete mode and the keep mode. In the delete mode, the
mail is deleted from the mailbox after each retrieval. In the keep mode, the mail
remains in the mailbox after retrieval. The delete mode is normally used when the user
Figure 26.17
POP3
POP client:
 e-mail receiver (Bob)
e-mail 1
retrieve 1
e-mail numbers and their sizes
OK
list
OK
password
user name
retrieve N
e-mail N
POP server:
remote mail server
Messages are pulled

PART VI
 APPLICATION LAYER
is working at her permanent computer and can save and organize the received mail after
reading or replying. The keep mode is normally used when the user accesses her mail
away from her primary computer (for example, from a laptop). The mail is read but
kept in the system for later retrieval and organizing.
IMAP4
Another mail access protocol is Internet Mail Access Protocol, version 4 (IMAP4).
IMAP4 is similar to POP3, but it has more features; IMAP4 is more powerful and more
complex.
POP3 is deficient in several ways. It does not allow the user to organize her mail on
the server; the user cannot have different folders on the server. In addition, POP3 does
not allow the user to partially check the contents of the mail before downloading.
IMAP4 provides the following extra functions:
❑
A user can check the e-mail header prior to downloading.
❑
A user can search the contents of the e-mail for a specific string of characters prior
to downloading.
❑
A user can partially download e-mail. This is especially useful if bandwidth is lim-
ited and the e-mail contains multimedia with high bandwidth requirements.
❑
A user can create, delete, or rename mailboxes on the mail server.
❑
A user can create a hierarchy of mailboxes in a folder for e-mail storage. 
MIME
Electronic mail has a simple structure. Its simplicity, however, comes with a price. It
can send messages only in NVT 7-bit ASCII format. In other words, it has some
limitations. It cannot be used for languages other than English (such as French,
German, Hebrew, Russian, Chinese, and Japanese). Also, it cannot be used to send
binary files or video or audio data. 
Multipurpose Internet Mail Extensions (MIME) is a supplementary protocol that
allows non-ASCII data to be sent through e-mail. MIME transforms non-ASCII data at
the sender site to NVT ASCII data and delivers it to the client MTA to be sent through the
Internet. The message at the receiving site is transformed back to the original data. 
We can think of MIME as a set of software functions that transforms non-ASCII
data to ASCII data and vice versa, as shown in Figure 26.18.
Figure 26.18
MIME
MIME
MIME
7-bit NVT
ASCII
Non-ASCII
code
UA
Alice
Bob
Non-ASCII
code
7-bit NVT
ASCII
E-mail System

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

MIME Headers
MIME defines five headers, as shown in Figure 26.19, which can be added to the origi-
nal e-mail header section to define the transformation parameters: 
MIME-Version
This header defines the version of MIME used. The current version
is 1.1.
Content-Type
This header defines the type of data used in the body of the message.
The content type and the content subtype are separated by a slash. Depending on the
subtype, the header may contain other parameters. MIME allows seven different types
of data, listed in Table 26.8.
Content-Transfer-Encoding
This header defines the method used to encode the mes-
sages into 0s and 1s for transport. The five types of encoding methods are listed in
Table 26.9.   
Figure 26.19
MIME header
Table 26.8
Data types and subtypes in MIME
Type
Subtype
Description
Text
Plain
Unformatted
HTML
HTML format (see Appendix C)
Multipart
Mixed
Body contains ordered parts of different data types
Parallel
Same as above, but no order
Digest
Similar to Mixed, but the default is message/RFC822
Alternative
Parts are different versions of the same message
Message
RFC822
Body is an encapsulated message
Partial
Body is a fragment of a bigger message
External-Body
Body is a reference to another message
Image
JPEG
Image is in JPEG format
GIF
Image is in GIF format
Video
MPEG
Video is in MPEG format
Audio
Basic
Single channel encoding of voice at 8 KHz
Application
PostScript
Adobe PostScript
Octet-stream
General binary data (eight-bit bytes)
MIME-Version: 1.1
Content-Type: type/subtype
Content-Transfer-Encoding: encoding type
Content-ID: message ID
Content-Description: textual explanation of nontextual contents
E-mail header
E-mail body
MIME headers

PART VI
 APPLICATION LAYER
The last two encoding methods are interesting. In the Base64 encoding, data, as a
string of bits, is first divided into 6-bit chunks as shown in Figure 26.20.  
Each 6-bit section is then converted into an ASCII character according to Table 26.10. 
Base64 is a redundant encoding scheme; that is, every six bits become one ASCII
character and are sent as eight bits. We have an overhead of 25 percent. If the data
consist mostly of ASCII characters with a small non-ASCII portion, we can use
quoted-printable encoding. In quoted-printable, if a character is ASCII, it is sent as is.
Table 26.9
Methods for Content-Transfer-Encoding
Type
Description
7-bit 
NVT ASCII characters with each line less than 1000 characters
8-bit 
Non-ASCII characters with each line less than 1000 characters
Binary
Non-ASCII characters with unlimited-length lines
Base64
6-bit blocks of data encoded into 8-bit ASCII characters
Quoted-printable
Non-ASCII characters encoded as an equal sign plus an ASCII code
Figure 26.20
Base64 conversion
Table 26.10
Base64 converting table
Value
Code
Value
Code
Value
Code
Value
Code
Value
Code
Value
Code

A

L

W

h

s

B

M

X

i

t

C

N

Y

j

u

D

O

Z

k

v

E

P

a

l

w

F

Q

b

m

x

G

R

c

n

y

H

S

d

o

z

+

I

T

e

p

/

J

U

f

q

K

V

g

r

z

I
E

110011 001000
000100 111001

Non-ASCII data
A set of bits
Combine and split
Four 6-bit chunks
Four characters
ASCII data
Base64 converter

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

If a character is not ASCII, it is sent as three characters. The first character is the equal
sign (=). The next two characters are the hexadecimal representations of the byte.
Figure 26.21 shows an example. In the example, the third character is a non-ASCII
because it starts with bit 1. It is interpreted as two hexadecimal digits (9D16), which is
replaced by three ASCII characters (=, 9, and D). 
Content-ID
This header uniquely identifies the whole message in a multiple message
environment.
Content-Description
This header defines whether the body is image, audio, or video.
26.3.2
Web-Based Mail   
E-mail is such a common application that some websites today provide this service to
anyone who accesses the site. Three common sites are Hotmail, Yahoo, and Google
mail. The idea is very simple. Figure 26.22 shows two cases: 
Case I
In the first case, Alice, the sender, uses a traditional mail server; Bob, the receiver, has an
account on a web-based server. Mail transfer from Alice’s browser to her mail server is
done through SMTP. The transfer of the message from the sending mail server to the
receiving mail server is still through SMTP. However, the message from the receiving
server (the web server) to Bob’s browser is done through HTTP. In other words, instead of
using POP3 or IMAP4, HTTP is normally used. When Bob needs to retrieve his e-mails,
he sends a request HTTP message to the website (Hotmail, for example). The website
sends a form to be filled in by Bob, which includes the log-in name and the password. If
the log-in name and password match, the list of e-mails is transferred from the web server
to Bob’s browser in HTML format. Now Bob can browse through his received e-mails
and then, using more HTTP transactions, can get his e-mails one by one. 
Case II
In the second case, both Alice and Bob use web servers, but not necessarily the same
server. Alice sends the message to the web server using HTTP transactions. Alice sends
an HTTP request message to her web server using the name and address of Bob’s mail-
box as the URL. The server at the Alice site passes the message to the SMTP client and
Figure 26.21
Quoted-printable

L
1001 1101
9D

Mixed ASCII and
non-ASCII data
Non-ASCII
ASCII data

&

K

&

K

L

=

D

Quoted-printable

PART VI
 APPLICATION LAYER
sends it to the server at the Bob site using SMTP protocol. Bob receives the message
using HTTP transactions. However, the message from the server at the Alice site to the
server at the Bob site still takes place using SMTP protocol. 
26.3.3
E-Mail Security  
The protocol discussed in this chapter does not provide any security provisions per se.
However, e-mail exchanges can be secured using two application-layer securities
designed in particular for e-mail systems. Two of these protocols, Pretty Good Privacy
(PGP) and Secure/Multipurpose Internet Mail Extensions (S/MIME), are discussed in
Chapter 32 after we have discussed basic network security. 
26.4
TELNET  
A server program can provide a specific service to its corresponding client program. For
example, the FTP server is designed to let the FTP client store or retrieve files on the
server site. However, it is impossible to have a client/server pair for each type of service
we need; the number of servers soon becomes intractable. The idea is not scalable.
Another solution is to have a specific client/server program for a set of common scenar-
ios, but to have some generic client/server programs that allow a user on the client site to
log into the computer at the server site and use the services available there. For example,
if a student needs to use the Java compiler program at her university lab, there is no need
for a Java compiler client and a Java compiler server. The student can use a client
Figure 26.22
Web-based e-mail, cases I and II
HTTP
transactions
Alice
Alice site
Bob site
Bob
SMTP
client
SMTP 
server
SMTP
server
SMTP
client

Internet
HTTP
transactions
Case 1: Only receiver uses HTTP
HTTP
transactions
Alice
Alice site
Bob site
Bob
HTTP 
client
SMTP
server
SMTP 
client
HTTP 
server
HTTP 
client

Internet
Case 2: Both sender and receiver use HTTP
HTTP 
server
HTTP 
client
HTTP
server

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

logging program to log into the university server and use the compiler program at the
university. We refer to these generic client/server pairs as remote logging applications. 
One of the original remote logging protocols is TELNET, which is an abbreviation
for TErminaL NETwork. Although TELNET requires a logging name and password, it
is vulnerable to hacking because it sends all data including the password in plaintext
(not encrypted). A hacker can eavesdrop and obtain the logging name and password.
Because of this security issue, the use of TELNET has diminished in favor of another
protocol, Secure Shell (SSH), which we describe in the next section. Although
TELNET is almost replaced by SSH, we briefly discuss TELNET here for two reasons:
1. The simple plaintext architecture of TELNET allows us to explain the issues and
challenges related to the concept of remote logging, which is also used in SSH
when it serves as a remote logging protocol. 
2. Network administrators often use TELNET for diagnostic and debugging purposes.
26.4.1
Local versus Remote Logging   
We first discuss the concept of local and remote logging as shown in Figure 26.23. 
When a user logs into a local system, it is called local logging. As a user types at a
terminal or at a workstation running a terminal emulator, the keystrokes are accepted by
the terminal driver. The terminal driver passes the characters to the operating system.
The operating system, in turn, interprets the combination of characters and invokes the
desired application program or utility. 
Figure 26.23
Local versus remote logging
a. Local logging
b. Remote logging
Application programs
Operating
system
Terminal
Terminal driver
Operating
system
Operating
system
IP
TCP
Data-link
Physical
IP
TCP
Data-link
Physical
Internet
Terminal
Pseudoterminal 
driver
Terminal 
driver
TELNET
server
TELNET
client
Application programs

PART VI
 APPLICATION LAYER
However, when a user wants to access an application program or utility located on
a remote machine, she performs remote logging. Here the TELNET client and server
programs come into use. The user sends the keystrokes to the terminal driver where the
local operating system accepts the characters but does not interpret them. The charac-
ters are sent to the TELNET client, which transforms the characters into a universal
character set called Network Virtual Terminal (NVT) characters (discussed below) and
delivers them to the local TCP/IP stack.
The commands or text, in NVT form, travel through the Internet and arrive at the
TCP/IP stack at the remote machine. Here the characters are delivered to the operating
system and passed to the TELNET server, which changes the characters to the
corresponding characters understandable by the remote computer. However, the charac-
ters cannot be passed directly to the operating system because the remote operating sys-
tem is not designed to receive characters from a TELNET server; it is designed to receive
characters from a terminal driver. The solution is to add a piece of software called
a pseudoterminal driver, which pretends that the characters are coming from a terminal.
The operating system then passes the characters to the appropriate application program. 
Network Virtual Terminal (NVT)   
The mechanism to access a remote computer is complex. This is because every com-
puter and its operating system accepts a special combination of characters as tokens.
For example, the end-of-file token in a computer running the DOS operating system is
Ctrl+z, while the UNIX operating system recognizes Ctrl+d. 
We are dealing with heterogeneous systems. If we want to access any remote com-
puter in the world, we must first know what type of computer we will be connected to,
and we must also install the specific terminal emulator used by that computer. TELNET
solves this problem by defining a universal interface called the Network Virtual
Terminal (NVT) character set. Via this interface, the client TELNET translates charac-
ters (data or commands) that come from the local terminal into NVT form and delivers
them to the network. The server TELNET, on the other hand, translates data and com-
mands from NVT form into the form acceptable by the remote computer. Figure 26.24
shows the concept.
Figure 26.24
Concept of NVT 
TELNET
client
TELNET
server
Terminal
Remote computer 
character set
NVT character set
Local  computer 
character set
Pseudoterminal 
driver
Internet

a. Data character

b. Control character
NVT character format

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

NVT uses two sets of characters, one for data and one for control. Both are 8-bit
bytes as shown in Figure 26.24. For data, NVT normally uses what is called NVT
ASCII. This is an 8-bit character set in which the seven lowest order bits are the same as
US ASCII and the highest order bit is 0. To send control characters between computers
(from client to server or vice versa), NVT uses an 8-bit character set in which the high-
est order bit is set to 1. 
Options   
TELNET lets the client and server negotiate options before or during the use of the ser-
vice. Options are extra features available to a user with a more sophisticated terminal.
Users with simpler terminals can use default features. 
User Interface  
The operating system (UNIX, for example) defines an interface with user-friendly com-
mands. An example of such a set of commands can be found in Table 26.11. 
26.5
SECURE SHELL (SSH)     
Although Secure Shell (SSH) is a secure application program that can be used today
for several purposes such as remote logging and file transfer, it was originally designed
to replace TELNET. There are two versions of SSH: SSH-1 and SSH-2, which are
totally incompatible. The first version, SSH-1, is now deprecated because of security
flaws in it. In this section, we discuss only SSH-2. 
26.5.1
Components   
SSH is an application-layer protocol with three components, as shown in Figure 26.25. 
SSH Transport-Layer Protocol (SSH-TRANS)
Since TCP is not a secured transport-layer protocol, SSH first uses a protocol that cre-
ates a secured channel on top of the TCP. This new layer is an independent protocol
referred to as SSH-TRANS. When the procedure implementing this protocol is called,
the client and server first use the TCP protocol to establish an insecure connection.
Then they exchange several security parameters to establish a secure channel on top of
the TCP. We discuss transport-layer security in Chapter 32, but here we briefly list the
services provided by this protocol:
1. Privacy or confidentiality of the message exchanged
2. Data integrity, which means that it is guaranteed that the messages exchanged
between the client and server are not changed by an intruder
Table 26.11
Examples of interface commands
Command
Meaning
Command
Meaning
open
Connect to a remote computer
set
Set the operating parameters
close
Close the connection
status
Display the status information
display
Show the operating parameters
send
Send special characters
mode
Change to line or character mode
quit
Exit TELNET

PART VI
 APPLICATION LAYER
3. Server authentication, which means that the client is now sure that the server is the
one that it claims to be
4. Compression of the messages, which improves the efficiency of the system and
makes attack more difficult
SSH Authentication Protocol (SSH-AUTH)
After a secure channel is established between the client and the server and the server
is authenticated for the client, SSH can call another procedure that can authenticate
the client for the server. The client authentication process in SSH is very similar to
what is done in Secure Socket Layer (SSL), which we discuss in Chapter 32. This
layer defines a number of authentication tools similar to the ones used in SSL.
Authentication starts with the client, which sends a request message to the server.
The request includes the user name, server name, the method of authentication, and
the required data. The server responds with either a success message, which con-
firms that the client is authenticated, or a failed message, which means that the pro-
cess needs to be repeated with a new request message.
SSH Connection Protocol (SSH-CONN)
After the secured channel is established and both server and client are authenticated for
each other, SSH can call a piece of software that implements the third protocol, SSH-
CONN. One of the services provided by the SSH-CONN protocol is multiplexing.
SSH-CONN takes the secure channel established by the two previous protocols and lets
the client create multiple logical channels over it. Each channel can be used for a differ-
ent purpose, such as remote logging, file transfer, and so on. 
26.5.2
Applications
Although SSH is often thought of as a replacement for TELNET, SSH is, in fact, a
general-purpose protocol that provides a secure connection between a client and server. 
SSH for Remote Logging
Several free and commercial applications use SSH for remote logging. Among them,
we can mention PuTTy, by Simon Tatham, which is a client SSH program that can be
Figure 26.25
Components of SSH
SSH-CONN
Application
SSH-AUTH
SSH-TRANS
TCP
SSH

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

used for remote logging. Another application program is Tectia, which can be used on
several platforms. 
SSH for File Transfer 
One of the application programs that is built on top of SSH for file transfer is the Secure
File Transfer Program (sftp). The sftp application program uses one of the channels pro-
vided by the SSH to transfer files. Another common application is called Secure Copy
(scp). This application uses the same format as the UNIX copy command, cp, to copy files.
Port Forwarding   
One of the interesting services provided by the SSH protocol is port forwarding. We
can use the secured channels available in SSH to access an application program that
does not provide security services. Applications such as TELNET and Simple Mail
Transfer Protocol (SMTP), which are discussed above, can use the services of the SSH
port forwarding mechanism. The SSH port forwarding mechanism creates a tunnel
through which the messages belonging to other protocols can travel. For this reason,
this mechanism is sometimes referred to as SSH tunneling. Figure 26.26 shows the
concept of port forwarding for securing the FTP application. 
The FTP client can use the SSH client on the local site to make a secure connection
with the SSH server on the remote site. Any request from the FTP client to the FTP
server is carried through the tunnel provided by the SSH client and server. Any
response from the FTP server to the FTP client is also carried through the tunnel pro-
vided by the SSH client and server.
Format of the SSH Packets  
Figure 26.27 shows the format of packets used by the SSH protocols. 
Figure 26.26
Port forwarding
Figure 26.27
SSH packet format
Secure
connection
Local site
Remote site
Tunnel
FTP
client
SSH
client
SSH
server
FTP
server
Encrypted for confidentiality
Length
Padding
Data
4 bytes
4 bytes
1–8 bytes

Variable
CRC
Type

PART VI
 APPLICATION LAYER
The length field defines the length of the packet but does not include the padding.
One to eight bytes of padding is added to the packet to make the attack on the security
provision more difficult. The cyclic redundancy check (CRC) field is used for error
detection. The type field designates the type of the packet used in different SSH proto-
cols. The data field is the data transferred by the packet in different protocols. 
26.6
DOMAIN NAME SYSTEM (DNS)       
The last client-server application program we discuss has been designed to help other
application programs. To identify an entity, TCP/IP protocols use the IP address, which
uniquely identifies the connection of a host to the Internet. However, people prefer to
use names instead of numeric addresses. Therefore, the Internet needs to have a direc-
tory system that can map a name to an address. This is analogous to the telephone net-
work. A telephone network is designed to use telephone numbers, not names. People
can either keep a private file to map a name to the corresponding telephone number or
can call the telephone directory to do so. We discuss how this directory system in the
Internet can map names to IP addresses. 
Since the Internet is so huge today, a central directory system cannot hold all the
mapping. In addition, if the central computer fails, the whole communication network
will collapse. A better solution is to distribute the information among many computers
in the world. In this method, the host that needs mapping can contact the closest com-
puter holding the needed information. This method is used by the Domain Name
System (DNS). We first discuss the concepts and ideas behind the DNS. We then
describe the DNS protocol itself. 
Figure 26.28 shows how TCP/IP uses a DNS client and a DNS server to map a
name to an address. A user wants to use a file transfer client to access the correspond-
ing file transfer server running on a remote host. The user knows only the file transfer
Figure 26.28
Purpose of DNS
File
transfer
client
DNS
client
DNS
server
Application
layer
Network layer
User
Host
name
Host
name
IP
address
IP address
Query
Response

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

server name, such as afilesource.com. However, the TCP/IP suite needs the IP address
of the file transfer server to make the connection. The following six steps map the host
name to an IP address: 
1. The user passes the host name to the file transfer client. 
2. The file transfer client passes the host name to the DNS client. 
3. Each computer, after being booted, knows the address of one DNS server. The
DNS client sends a message to a DNS server with a query that gives the file trans-
fer server name using the known IP address of the DNS server. 
4. The DNS server responds with the IP address of the desired file transfer server. 
5. The DNS server passes the IP address to the file transfer client. 
6. The file transfer client now uses the received IP address to access the file transfer
server. 
Note that the purpose of accessing the Internet is to make a connection between the file
transfer client and server, but before this can happen, another connection needs to be
made between the DNS client and DNS server. In other words, we need at least two
connections in this case. The first is for mapping the name to an IP address; the second
is for transferring files. We will see later that the mapping may need more than one
connection. 
26.6.1
Name Space   
To be unambiguous, the names assigned to machines must be carefully selected from
a name space with complete control over the binding between the names and IP
addresses. In other words, the names must be unique because the addresses are
unique. A name space that maps each address to a unique name can be organized in
two ways: flat or hierarchical. In a flat name space, a name is assigned to an address.
A name in this space is a sequence of characters without structure. The names may or
may not have a common section; if they do, it has no meaning. The main disadvan-
tage of a flat name space is that it cannot be used in a large system such as the Inter-
net because it must be centrally controlled to avoid ambiguity and duplication. In a
hierarchical name space, each name is made of several parts. The first part can define
the nature of the organization, the second part can define the name of an organiza-
tion, the third part can define departments in the organization, and so on. In this case,
the authority to assign and control the name spaces can be decentralized. A central
authority can assign the part of the name that defines the nature of the organization
and the name of the organization. The responsibility for the rest of the name can be
given to the organization itself. The organization can add suffixes (or prefixes) to the
name to define its host or resources. The management of the organization need not
worry that the prefix chosen for a host is taken by another organization because, even
if part of an address is the same, the whole address is different. For example, assume
two organizations call one of their computers caesar. The first organization is given a
name by the central authority, such as first.com, the second organization is given the
name second.com. When each of these organizations adds the name caesar to the
name they have already been given, the end result is two distinguishable names:
ceasar.first.com and ceasar.second.com. The names are unique.

PART VI
 APPLICATION LAYER
Domain Name Space
To have a hierarchical name space, a domain name space was designed. In this design
the names are defined in an inverted-tree structure with the root at the top. The tree
can have only 128 levels: level 0 (root) to level 127 (see Figure 26.29). 
Label
Each node in the tree has a label, which is a string with a maximum of 63 characters.
The root label is a null string (empty string). DNS requires that children of a node
(nodes that branch from the same node) have different labels, which guarantees the
uniqueness of the domain names. 
Domain Name
Each node in the tree has a domain name. A full domain name is a sequence of labels
separated by dots (.). The domain names are always read from the node up to the root.
The last label is the label of the root (null). This means that a full domain name always
ends in a null label, which means the last character is a dot because the null string is
nothing. Figure 26.30 shows some domain names. 
If a label is terminated by a null string, it is called a fully qualified domain name
(FQDN). The name must end with a null label, but because null means nothing, the
label ends with a dot. If a label is not terminated by a null string, it is called a partially
qualified domain name (PQDN). A PQDN starts from a node, but it does not reach
the root. It is used when the name to be resolved belongs to the same site as the client.
Here the resolver can supply the missing part, called the suffix, to create an FQDN. 
Domain
A domain is a subtree of the domain name space. The name of the domain is the name
of the node at the top of the subtree. Figure 26.31 shows some domains. Note that a
domain may itself be divided into domains. 
Distribution of Name Space
The information contained in the domain name space must be stored. However, it
is very inefficient and also not reliable to have just one computer store such a huge
Figure 26.29
Domain name space
Root
Top-level nodes

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

amount of information. It is inefficient because responding to requests from all over the
world places a heavy load on the system. It is not reliable because any failure makes the
data inaccessible.
Hierarchy of Name Servers
The solution to these problems is to distribute the information among many computers
called DNS servers. One way to do this is to divide the whole space into many domains
based on the first level. In other words, we let the root stand alone and create as many
domains (subtrees) as there are first-level nodes. Because a domain created this way
could be very large, DNS allows domains to be divided further into smaller domains
(subdomains). Each server can be responsible (authoritative) for either a large or small
domain. In other words, we have a hierarchy of servers in the same way that we have a
hierarchy of names (see Figure 26.32).
Figure 26.30
Domain names and labels
Figure 26.31
Domains
edu
Domain name
Domain name
Domain name
Domain
name
aComputer.bDept.topUniversity.edu.
bDept.topUniversity.edu.
topUniversity.edu.
edu.
Root
bDept
topUniversity
aComputer
Label
Label
Label
Label
com
edu
Domain
Domain
Domain
Root
Domain
Domain

PART VI
 APPLICATION LAYER
Zone
Since the complete domain name hierarchy cannot be stored on a single server, it is
divided among many servers. What a server is responsible for or has authority over is
called a zone. We can define a zone as a contiguous part of the entire tree. If a server
accepts responsibility for a domain and does not divide the domain into smaller
domains, the “domain” and the “zone” refer to the same thing. The server makes a data-
base called a zone file and keeps all the information for every node under that domain.
However, if a server divides its domain into subdomains and delegates part of its
authority to other servers, “domain” and “zone” refer to different things. The informa-
tion about the nodes in the subdomains is stored in the servers at the lower levels, with
the original server keeping some sort of reference to these lower-level servers. Of
course, the original server does not free itself from responsibility totally. It still has a
zone, but the detailed information is kept by the lower-level servers (see Figure 26.33).
Root Server
A root server is a server whose zone consists of the whole tree. A root server usually
does not store any information about domains but delegates its authority to other servers,
keeping references to those servers. There are several root servers, each covering the
whole domain name space. The root servers are distributed all around the world.
Figure 26.32
Hierarchy of name servers
Figure 26.33
Zone
Root
server
fhda.edu
bk.edu
mcgraw.com
irwin.com
edu 
server
com
server
us
server
com
mhhe
Root
Zone
Domain
Zone and
domain

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

Primary and Secondary Servers
DNS defines two types of servers: primary and secondary. A primary server is a server
that stores a file about the zone for which it is an authority. It is responsible for creating,
maintaining, and updating the zone file. It stores the zone file on a local disk. 
A secondary server is a server that transfers the complete information about a zone
from another server (primary or secondary) and stores the file on its local disk. The sec-
ondary server neither creates nor updates the zone files. If updating is required, it must
be done by the primary server, which sends the updated version to the secondary.
The primary and secondary servers are both authoritative for the zones they serve.
The idea is not to put the secondary server at a lower level of authority but to create
redundancy for the data so that if one server fails, the other can continue serving clients.
Note also that a server can be a primary server for a specific zone and a secondary server
for another zone. Therefore, when we refer to a server as a primary or secondary server,
we should be careful about which zone we refer to.
26.6.2
DNS in the Internet
DNS is a protocol that can be used in different platforms. In the Internet, the domain
name space (tree) was originally divided into three different sections: generic domains,
country domains, and the inverse domains. However, due to the rapid growth of the
Internet, it became extremely difficult to keep track of the inverse domains, which
could be used to find the name of a host when given the IP address. The inverse domains
are now deprecated (see RFC 3425). We, therefore, concentrate on the first two.
Generic Domains
The generic domains define registered hosts according to their generic behavior. Each
node in the tree defines a domain, which is an index to the domain name space database
(see Figure 26.34). 
A primary server loads all information from the disk file; 
the secondary server loads all information from the primary server. 
Figure 26.34
Generic domains
uci
aero
biz
com
coop
edu
gov
info
int
mil
mus-
eum
name
net
org
pro
Generic domains
Root level
uci.edu. Index to addresses

PART VI
 APPLICATION LAYER
Looking at the tree, we see that the first level in the generic domains section allows
14 possible labels. These labels describe the organization types as listed in Table 26.12. 
Country Domains
The country domains section uses two-character country abbreviations (e.g., us for
United States). Second labels can be organizational, or they can be more specific
national designations. The United States, for example, uses state abbreviations as a sub-
division of us (e.g., ca.us.). Figure 26.35 shows the country domains section. The
address uci.ca.us. can be translated to University of California, Irvine, in the state of
California in the United States.
26.6.3
Resolution
Mapping a name to an address is called name-address resolution. DNS is designed as a
client-server application. A host that needs to map an address to a name or a name to an
address calls a DNS client called a resolver. The resolver accesses the closest DNS
server with a mapping request. If the server has the information, it satisfies the resolver;
otherwise, it either refers the resolver to other servers or asks other servers to provide
the information. After the resolver receives the mapping, it interprets the response to
see if it is a real resolution or an error, and finally delivers the result to the process that
requested it. A resolution can be either recursive or iterative.
Table 26.12
Generic domain labels
Label
Description
Label
Description
aero
Airlines and aerospace
int
International organizations
biz
Businesses or firms
mil
Military groups
com
Commercial organizations
museum
Museums
coop
Cooperative organizations
name
Personal names (individuals)
edu
Educational institutions
net
Network support centers
gov
Government institutions
org
Nonprofit organizations
info
Information service providers
pro
Professional organizations
Figure 26.35
Country domains
ae
fr
us
Country
domains
Root level
Index to addresses
ca
uci
zw
uci.ca.us.

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

Recursive Resolution
Figure 26.36 shows a simple example of a recursive resolution. We assume that an
application program running on a host named some.anet.com needs to find the IP
address of another host named engineering.mcgraw-hill.com to send a message to.
The source host is connected to the Anet ISP; the destination host is connected to the
McGraw-Hill network. 
The application program on the source host calls the DNS resolver (client) to
find the IP address of the destination host. The resolver, which does not know this
address, sends the query to the local DNS server (for example, dns.anet.com) running
at the Anet ISP site (event 1). We assume that this server does not know the IP
address of the destination host either. It sends the query to a root DNS server, whose
IP address is supposed to be known to this local DNS server (event 2). Root servers
do not normally keep the mapping between names and IP addresses, but a root server
should at least know about one server at each top level domain (in this case, a server
responsible for com domain). The query is sent to this top-level-domain server (event 3).
We assume that this server does not know the name-address mapping of this specific
destination, but it knows the IP address of the local DNS server in the McGraw-Hill
company (for example, dns.mcgraw-hill.com). The query is sent to this server (event 4),
which knows the IP address of the destination host. The IP address is now sent back
to the top-level DNS server (event 5), then back to the root server (event 6), then back
to the ISP DNS server, which may cache it for the future queries (event 7), and finally
back to the source host (event 8).
Iterative Resolution
In iterative resolution, each server that does not know the mapping sends the IP
address of the next server back to the one that requested it. Figure 26.37 shows the
flow of information in an iterative resolution in the same scenario as the one depicted
in Figure 26.36. Normally the iterative resolution takes place between two local
servers; the original resolver gets the final answer from the local server. Note that
the messages shown by events 2, 4, and 6 contain the same query. However, the mes-
sage shown by event 3 contains the IP address of the top-level domain server, the
message shown by event 5 contains the IP address of the McGraw-Hill local DNS
Figure 26.36
Recursive resolution
McGraw-Hill Network
Source: some.anet.com
Source
Destination
Destination: engineering.mcgraw-hill.com
dns.anet.com
Root
server
Local
server
Local
server
Top-level
domain server
Anet ISP
.com Server
dns.mcgraw-hill.com

PART VI
 APPLICATION LAYER
server, and the message shown by event 7 contains the IP address of the destination.
When the Anet local DNS server receives the IP address of the destination, it sends it
to the resolver (event 8).  
26.6.4
Caching
Each time a server receives a query for a name that is not in its domain, it needs to
search its database for a server IP address. Reduction of this search time would increase
efficiency. DNS handles this with a mechanism called caching. When a server asks for
a mapping from another server and receives the response, it stores this information in
its cache memory before sending it to the client. If the same or another client asks for
the same mapping, it can check its cache memory and resolve the problem. However, to
inform the client that the response is coming from the cache memory and not from an
authoritative source, the server marks the response as unauthoritative.
Caching speeds up resolution, but it can also be problematic. If a server caches a
mapping for a long time, it may send an outdated mapping to the client. To counter this,
two techniques are used. First, the authoritative server always adds information to the
mapping called time to live (TTL). It defines the time in seconds that the receiving
server can cache the information. After that time, the mapping is invalid and any query
must be sent again to the authoritative server. Second, DNS requires that each server
keep a TTL counter for each mapping it caches. The cache memory must be searched
periodically and those mappings with an expired TTL must be purged.
26.6.5
Resource Records   
The zone information associated with a server is implemented as a set of resource
records. In other words, a name server stores a database of resource records. A resource
record is a 5-tuple structure, as shown below: 
The domain name field is what identifies the resource record. The value defines
the information kept about the domain name. The TTL defines the number of
Figure 26.37
Iterative resolution
(Domain Name, Type, Class, TTL, Value)

McGraw-Hill Network
Source: some.anet.com
Resolver
Destination
Destination: engineering.mcgraw-hill.com
dns.anet.com
Root
server
Local
server
Local
server
Top-level
domain server
Anet ISP
.com Server
dns.mcgraw-hill.com

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

seconds for which the information is valid. The class defines the type of network;
we are only interested in the class IN (Internet). The type defines how the value
should be interpreted. Table 26.13 lists the common types and how the value is
interpreted for each type. 
26.6.6
DNS Messages
To retrieve information about hosts, DNS uses two types of messages: query and
response. Both types have the same format as shown in Figure 26.38. 
We briefly discuss the fields in a DNS message. The identification field is used by
the client to match the response with the query. The flag field defines whether the
message is a query or response. It also includes status of error. The next four fields in
the header define the number of each record type in the message. The question section
consists of one or more question records. It is present in both query and response mes-
sages. The answer section consists of one or more resource records. It is present only in
response messages. The authoritative section gives information (domain name) about
one or more authoritative servers for the query. The additional information section pro-
vides additional information that may help the resolver. 
Table 26.13
Types
Type
Interpretation of value
A
A 32-bit IPv4 address (see Chapter 18)
NS
Identifies the authoritative servers for a zone
CNAME
Defines an alias for the official name of a host
SOA
Marks the beginning of a zone
MX
Redirects mail to a mail server
AAAA
An IPv6 address (see Chapter 22)
Figure 26.38
DNS message 
Header
Question section
Answer section (Resource Records)
Authoritative section
Additional section
Note:
The query message contains only the question section.
The response message includes the question section, 
the answer section, and possibly two other sections.

Identification
Flags
Number of question records
Number of additional  records
(All 0s in query message)
Number of answer records
(All 0s in query message)
Number of authoritative records
(All 0s in query message)

PART VI
 APPLICATION LAYER
Example 26.13
In UNIX and Windows, the nslookup utility can be used to retrieve address/name mapping. The
following shows how we can retrieve an address when the domain name is given. 
Encapsulation
DNS can use either UDP or TCP. In both cases the well-known port used by the server
is port 53. UDP is used when the size of the response message is less than 512 bytes
because most UDP packages have a 512-byte packet size limit. If the size of the
response message is more than 512 bytes, a TCP connection is used. In that case, one of
two scenarios can occur:
❑
If the resolver has prior knowledge that the size of the response message is more
than 512 bytes, it uses the TCP connection. For example, if a secondary name
server (acting as a client) needs a zone transfer from a primary server, it uses the
TCP connection because the size of the information being transferred usually
exceeds 512 bytes.
❑
If the resolver does not know the size of the response message, it can use the
UDP port. However, if the size of the response message is more than 512 bytes,
the server truncates the message and turns on the TC bit. The resolver now
opens a TCP connection and repeats the request to get a full response from the
server. 
26.6.7
Registrars
How are new domains added to DNS? This is done through a registrar, a commercial
entity accredited by ICANN. A registrar first verifies that the requested domain name is
unique and then enters it into the DNS database. A fee is charged. Today, there are
many registrars; their names and addresses can be found at
To register, the organization needs to give the name of its server and the IP address
of the server. For example, a new commercial organization named wonderful with a
server named ws and IP address 200.200.200.5 needs to give the following information
to one of the registrars:
26.6.8
DDNS
When the DNS was designed, no one predicted that there would be so many address
changes. In DNS, when there is a change, such as adding a new host, removing a host,
or changing an IP address, the change must be made to the DNS master file. These
types of changes involve a lot of manual updating. The size of today’s Internet does not
allow for this kind of manual operation. 
$nslookup www.forouzan.biz
Name:  www.forouzan.biz
Address: 198.170.240.179
http://www.intenic.net
Domain name: ws.wonderful.com           IP address: 200.200.200.5

CHAPTER 26
STANDARD CLIENT-SERVER PROTOCOLS

The DNS master file must be updated dynamically. The Dynamic Domain
Name System (DDNS) therefore was devised to respond to this need. In DDNS,
when a binding between a name and an address is determined, the information is
sent, usually by DHCP (discussed in Chapter 18) to a primary DNS server. The pri-
mary server updates the zone. The secondary servers are notified either actively or
passively. In active notification, the primary server sends a message to the secondary
servers about the change in the zone, whereas in passive notification, the secondary
servers periodically check for any changes. In either case, after being notified about
the change, the secondary server requests information about the entire zone (called
the zone transfer).
To provide security and prevent unauthorized changes in the DNS records, DDNS
can use an authentication mechanism. 
26.6.9
Security of DNS
DNS is one of the most important systems in the Internet infrastructure; it provides cru-
cial services to Internet users. Applications such as Web access or e-mail are heavily
dependent on the proper operation of DNS. DNS can be attacked in several ways
including:
1. The attacker may read the response of a DNS server to find the nature or names of sites
the user mostly accesses. This type of information can be used to find the user’s profile.
To prevent this attack, DNS messages need to be confidential (see Chapters 31 and 32).
2. The attacker may intercept the response of a DNS server and change it or create a
totally new bogus response to direct the user to the site or domain the attacker
wishes the user to access. This type of attack can be prevented using message ori-
gin authentication and message integrity (see Chapters 31 and 32).
3. The attacker may flood the DNS server to overwhelm it or eventually crash it. This
type of attack can be prevented using the provision against denial-of-service attack.
To protect DNS, IETF has devised a technology named DNS Security (DNSSEC) that
provides message origin authentication and message integrity using a security service
called digital signature (see Chapter 31). DNSSEC, however, does not provide confi-
dentiality for the DNS messages. There is no specific protection against the denial-of-
service attack in the specification of DNSSEC. However, the caching system protects
the upper-level servers against this attack to some extent. 
26.7
END-CHAPTER MATERIALS
26.7.1
Recommended Reading
For more details about subjects discussed in this chapter, we recommend the following
books and RFCs. The items enclosed in brackets refer to the reference list at the end of
the book.
Books
Several books give thorough coverage of materials discussed in this chapter including
[Com 06], [Mir 07], [Ste 94], [Tan 03], [Bar et al. 05].

---
